/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [68396],
    {
      90711: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, {
          DK: () => Ne,
          hW: () => br,
          Lw: () => $,
          ku: () => be,
          Mn: () => sr,
          sW: () => hr,
          nn: () => s,
        });
        var s = {};
        d.r(s), d.d(s, { Tq: () => H, TC: () => i, fe: () => W });
        var hr = {};
        d.r(hr), d.d(hr, { rx: () => rr, XP: () => nr });
        var f = d(80613),
          o = d.n(f),
          t = d(75245),
          k = d(35038);
        const ar = 0,
          M = 1,
          H = 0,
          B = 1,
          er = 2,
          j = 3,
          X = 4,
          U = 5,
          W = 6,
          g = 7,
          a = 8,
          i = 9,
          Y = 10,
          yr = 11,
          vr = 12,
          fr = 13,
          E = 14,
          T = 15,
          rr = 0,
          nr = 1,
          p = 2;
        function u(Er) {
          return "unknown EBroadcastChatPermission ( " + Er + " )";
        }
        function y(Er) {
          return "unknown EBroadcastWatchLocation ( " + Er + " )";
        }
        function A(Er) {
          return "unknown EBroadcastChatBan ( " + Er + " )";
        }
        function tr(Er) {
          return "unknown EBroadcastRestriction ( " + Er + " )";
        }
        class L extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.permission || t.Sg(L.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    client_instance_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    cellid: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    rtmp_token: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    thumbnail_upload: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    sysid: { n: 9, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    allow_webrtc: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = t.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(L.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new L();
            return L.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(L.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(L.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Request";
          }
        }
        class V extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.broadcast_id || t.Sg(V.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_upload_address: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_upload_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_interval_seconds: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    heartbeat_interval_seconds: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(V.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new V();
            return V.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(V.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(V.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Response";
          }
        }
        class ur extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ur.prototype.broadcast_id || t.Sg(ur.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = t.w0(ur.M())), ur.sm_mbf;
          }
          toObject(e = !1) {
            return ur.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ur.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ur.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new ur();
            return ur.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ur.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ur.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Request";
          }
        }
        class q extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new q();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new q();
            return q.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Response";
          }
        }
        class ir extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ir.prototype.broadcast_id || t.Sg(ir.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    cellid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    as_rtmp: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                    delay_seconds: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rtmp_token: {
                      n: 5,
                      d: "0",
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    upload_ip_address: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_replay: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                    sysid: { n: 8, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = t.w0(ir.M())), ir.sm_mbf;
          }
          toObject(e = !1) {
            return ir.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ir.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ir.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new ir();
            return ir.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ir.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ir.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Request";
          }
        }
        class jr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jr.prototype.upload_token || t.Sg(jr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    upload_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    upload_address: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    enable_replay: {
                      n: 6,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    http_address: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = t.w0(jr.M())), jr.sm_mbf;
          }
          toObject(e = !1) {
            return jr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(jr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(jr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new jr();
            return jr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(jr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(jr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Response";
          }
        }
        class Sr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Sr.prototype.broadcast_id || t.Sg(Sr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_token: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    upload_address: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    http_address: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    heartbeat_interval_seconds: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_rtmp: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = t.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(e = !1) {
            return Sr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Sr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Sr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Sr();
            return Sr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Sr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Sr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastUploadStarted_Notification";
          }
        }
        class Kr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Kr.prototype.steamid || t.Sg(Kr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = t.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(e = !1) {
            return Kr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Kr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Kr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Kr();
            return Kr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Kr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Kr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Request";
          }
        }
        class Jr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Jr.prototype.gameid || t.Sg(Jr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    gameid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    num_viewers: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permission: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_rtmp: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                    seconds_delay: {
                      n: 6,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_publisher: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    thumbnail_url: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    update_interval: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_uploading: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    duration: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_replay: { n: 12, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_capturing_vod: {
                      n: 13,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_store_whitelisted: {
                      n: 14,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = t.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(e = !1) {
            return Jr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Jr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Jr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Jr();
            return Jr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Jr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Jr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Response";
          }
        }
        class he extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.steamid || t.Sg(he.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(he.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new he();
            return he.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(he.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(he.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Request";
          }
        }
        class Hr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Hr.prototype.thumbnail_url || t.Sg(Hr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    thumbnail_url: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    update_interval: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    num_viewers: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    duration: { n: 4, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = t.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(e = !1) {
            return Hr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Hr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Hr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Hr();
            return Hr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Hr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Hr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Response";
          }
        }
        class kr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              kr.prototype.steamid || t.Sg(kr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    existing_broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    client_cell: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    watch_location: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    is_webrtc: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = t.w0(kr.M())), kr.sm_mbf;
          }
          toObject(e = !1) {
            return kr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(kr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(kr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new kr();
            return kr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(kr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(kr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Request";
          }
        }
        class wr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              wr.prototype.response || t.Sg(wr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    response: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    mpd_url: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_id: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    gameid: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    num_viewers: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permission: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_rtmp: { n: 8, br: t.qM.readBool, bw: t.gp.writeBool },
                    seconds_delay: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    viewer_token: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    hls_m3u8_master_url: {
                      n: 11,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    heartbeat_interval: {
                      n: 12,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    thumbnail_url: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_webrtc: { n: 14, br: t.qM.readBool, bw: t.gp.writeBool },
                    webrtc_session_id: {
                      n: 15,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_offer_sdp: {
                      n: 16,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    webrtc_turn_server: {
                      n: 17,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_replay: { n: 18, br: t.qM.readBool, bw: t.gp.writeBool },
                    duration: {
                      n: 19,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    cdn_auth_url_parameters: {
                      n: 20,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = t.w0(wr.M())), wr.sm_mbf;
          }
          toObject(e = !1) {
            return wr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(wr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(wr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new wr();
            return wr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(wr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(wr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Response";
          }
        }
        function Pe(Er) {
          return (
            "unknown CBroadcast_WatchBroadcast_Response_EWatchResponse ( " +
            Er +
            " )"
          );
        }
        class Zr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Zr.prototype.steamid || t.Sg(Zr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    representation: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = t.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(e = !1) {
            return Zr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Zr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Zr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Zr();
            return Zr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Zr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Zr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_HeartbeatBroadcast_Notification";
          }
        }
        class ue extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.steamid || t.Sg(ue.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = t.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ue.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new ue();
            return ue.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ue.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ue.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopWatchingBroadcast_Notification";
          }
        }
        class Nr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Nr.prototype.steamid || t.Sg(Nr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    approval_response: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = t.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(e = !1) {
            return Nr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Nr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Nr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Nr();
            return Nr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Nr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Nr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Request";
          }
        }
        class Wr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Wr.prototype.success || t.Sg(Wr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    success: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = t.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(e = !1) {
            return Wr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Wr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Wr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Wr();
            return Wr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Wr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Wr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Response";
          }
        }
        class dr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dr.prototype.permission || t.Sg(dr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    game_data_config: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = t.w0(dr.M())), dr.sm_mbf;
          }
          toObject(e = !1) {
            return dr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(dr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(dr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new dr();
            return dr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(dr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(dr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Request";
          }
        }
        class Qr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Qr.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new Qr();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Qr();
            return Qr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Response";
          }
        }
        class R extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.steamid || t.Sg(R.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    state: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = t.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(R.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new R();
            return R.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(R.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(R.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastViewerState_Notification";
          }
        }
        function m(Er) {
          return (
            "unknown CBroadcast_BroadcastViewerState_Notification_EViewerState ( " +
            Er +
            " )"
          );
        }
        class b extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.broadcast_id || t.Sg(b.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = t.w0(b.M())), b.sm_mbf;
          }
          toObject(e = !1) {
            return b.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(b.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(b.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new b();
            return b.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(b.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(b.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WaitingBroadcastViewer_Notification";
          }
        }
        class z extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              z.prototype.broadcast_id || t.Sg(z.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_relay_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    too_many_poor_uploads: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = t.w0(z.M())), z.sm_mbf;
          }
          toObject(e = !1) {
            return z.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(z.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(z.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new z();
            return z.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(z.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(z.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopBroadcastUpload_Notification";
          }
        }
        class S extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.broadcast_id || t.Sg(S.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = t.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(S.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new S();
            return S.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(S.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(S.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SessionClosed_Notification";
          }
        }
        class J extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.broadcast_id || t.Sg(J.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = t.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(J.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new J();
            return J.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(J.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(J.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastStatus_Notification";
          }
        }
        class C extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.broadcast_channel_id || t.Sg(C.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_channel_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_channel_avatar: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = t.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(C.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new C();
            return C.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(C.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(C.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastChannelLive_Notification";
          }
        }
        class or extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              or.prototype.thumbnail_upload_token || t.Sg(or.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    thumbnail_upload_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_broadcast_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_data: {
                      n: 3,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    thumbnail_width: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_height: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = t.w0(or.M())), or.sm_mbf;
          }
          toObject(e = !1) {
            return or.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(or.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(or.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new or();
            return or.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(or.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(or.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendThumbnailToRelay_Notification";
          }
        }
        class Q extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.broadcast_upload_id || t.Sg(Q.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    broadcast_upload_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Q.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Q();
            return Q.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Q.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Q.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastUploadStop_Notification";
          }
        }
        class Or extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Or.prototype.broadcaster_steamid || t.Sg(Or.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = t.w0(Or.M())), Or.sm_mbf;
          }
          toObject(e = !1) {
            return Or.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Or.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Or.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Or();
            return Or.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Or.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Or.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_ViewerBroadcastInvite_Notification";
          }
        }
        class F extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.broadcast_id || t.Sg(F.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = t.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(F.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new F();
            return F.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(F.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(F.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
          }
        }
        class O extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.steamid || t.Sg(O.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    client_ip: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    client_cell: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = t.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(O.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new O();
            return O.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(O.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(O.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Request";
          }
        }
        class K extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.chat_id || t.Sg(K.M()),
              f.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(K.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new K();
            return K.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(K.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(K.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Response";
          }
        }
        class $ extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.chat_id || t.Sg($.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    message: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    instance_id: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    language: {
                      n: 4,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    country_code: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT($.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new $();
            return $.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj($.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0($.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Request";
          }
        }
        class G extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.persona_name || t.Sg(G.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    persona_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    in_game: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    result: { n: 3, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    cooldown_time_seconds: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(G.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new G();
            return G.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(G.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(G.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Response";
          }
        }
        class sr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              sr.prototype.chat_id || t.Sg(sr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = t.w0(sr.M())), sr.sm_mbf;
          }
          toObject(e = !1) {
            return sr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(sr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(sr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new sr();
            return sr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(sr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(sr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Request";
          }
        }
        class mr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mr.prototype.result || t.Sg(mr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    result: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    chat_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = t.w0(mr.M())), mr.sm_mbf;
          }
          toObject(e = !1) {
            return mr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(mr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(mr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new mr();
            return mr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(mr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(mr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Response";
          }
        }
        class br extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              br.prototype.chat_id || t.Sg(br.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    muted: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = t.w0(br.M())), br.sm_mbf;
          }
          toObject(e = !1) {
            return br.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(br.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(br.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new br();
            return br.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(br.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(br.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Request";
          }
        }
        class Pr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Pr.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new Pr();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Pr();
            return Pr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Response";
          }
        }
        class be extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.chat_id || t.Sg(be.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(be.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new be();
            return be.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(be.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(be.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Request";
          }
        }
        class Me extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new Me();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Me();
            return Me.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Response";
          }
        }
        class Lr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Lr.prototype.chat_id || t.Sg(Lr.M()),
              f.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = t.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(e = !1) {
            return Lr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Lr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Lr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Lr();
            return Lr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Lr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Lr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Request";
          }
        }
        class qr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qr.prototype.persona_names || t.Sg(qr.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: { persona_names: { n: 1, c: Cr, r: !0, q: !0 } },
                }),
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = t.w0(qr.M())), qr.sm_mbf;
          }
          toObject(e = !1) {
            return qr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(qr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(qr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new qr();
            return qr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(qr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(qr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response";
          }
        }
        class Cr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Cr.prototype.steam_id || t.Sg(Cr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    steam_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    persona: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = t.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(e = !1) {
            return Cr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Cr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Cr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Cr();
            return Cr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Cr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Cr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
          }
        }
        class de extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.steamid || t.Sg(de.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    first_segment: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    num_segments: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    clip_description: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = t.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(de.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new de();
            return de.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(de.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(de.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Request";
          }
        }
        class c extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              c.prototype.broadcast_clip_id || t.Sg(c.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = t.w0(c.M())), c.sm_mbf;
          }
          toObject(e = !1) {
            return c.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(c.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(c.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new c();
            return c.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(c.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(c.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Response";
          }
        }
        class w extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.broadcast_clip_id || t.Sg(w.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = t.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(w.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new w();
            return w.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(w.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(w.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Request";
          }
        }
        class D extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new D();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new D();
            return D.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Response";
          }
        }
        class P extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.broadcast_clip_id || t.Sg(P.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    start_time: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    end_time: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    video_description: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = t.w0(P.M())), P.sm_mbf;
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(P.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new P();
            return P.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(P.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(P.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Request";
          }
        }
        class Z extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new Z();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Z();
            return Z.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Response";
          }
        }
        class _ extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _.prototype.broadcast_clip_id || t.Sg(_.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = t.w0(_.M())), _.sm_mbf;
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(_.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(_.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new _();
            return _.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(_.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(_.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Request";
          }
        }
        class cr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              cr.prototype.broadcast_clip_id || t.Sg(cr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    video_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    accountid_broadcaster: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    accountid_clipmaker: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    video_description: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    start_time: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    length_milliseconds: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = t.w0(cr.M())), cr.sm_mbf;
          }
          toObject(e = !1) {
            return cr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(cr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(cr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new cr();
            return cr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(cr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(cr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Response";
          }
        }
        class xr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xr.prototype.broadcast_permission || t.Sg(xr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    update_token: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    broadcast_delay: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_id: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    required_app_id: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 6,
                      d: ar,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steamid: {
                      n: 8,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    wordban_list: {
                      n: 12,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = t.w0(xr.M())), xr.sm_mbf;
          }
          toObject(e = !1) {
            return xr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(xr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(xr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new xr();
            return xr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(xr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(xr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Request";
          }
        }
        class ge extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new ge();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new ge();
            return ge.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Response";
          }
        }
        class se extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.ip || t.Sg(se.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    ip: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = t.w0(se.M())), se.sm_mbf;
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(se.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new se();
            return se.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(se.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(se.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Request";
          }
        }
        class le extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.broadcast_permission || t.Sg(le.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    rtmp_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rtmp_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_delay: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_id: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    required_app_id: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 7,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 8,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steamid: {
                      n: 9,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 12,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    wordban_list: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(le.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new le();
            return le.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(le.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(le.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Response";
          }
        }
        class $r extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $r.prototype.row_limit || t.Sg($r.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    row_limit: {
                      n: 1,
                      d: 100,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    start_time: {
                      n: 2,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    session_id: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = t.w0($r.M())), $r.sm_mbf;
          }
          toObject(e = !1) {
            return $r.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT($r.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq($r.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new $r();
            return $r.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj($r.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0($r.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Request";
          }
        }
        class Tr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Tr.prototype.upload_stats || t.Sg(Tr.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: { upload_stats: { n: 1, c: Fr, r: !0, q: !0 } },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = t.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(e = !1) {
            return Tr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Tr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Tr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Tr();
            return Tr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Tr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Tr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response";
          }
        }
        class Fr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fr.prototype.upload_result || t.Sg(Fr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    upload_result: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_stopped: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    seconds_uploaded: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    max_viewers: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_x: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    avg_bandwidth: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_bytes: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 9, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    total_unique_viewers: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_seconds_watched: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_started: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_id: {
                      n: 13,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    local_address: {
                      n: 14,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    remote_address: {
                      n: 15,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    frames_per_second: {
                      n: 16,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    num_representations: {
                      n: 17,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    app_name: {
                      n: 18,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_replay: { n: 19, br: t.qM.readBool, bw: t.gp.writeBool },
                    session_id: {
                      n: 20,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = t.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(e = !1) {
            return Fr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Fr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Fr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Fr();
            return Fr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Fr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Fr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
          }
        }
        class Xr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xr.prototype.upload_id || t.Sg(Xr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    upload_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = t.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(e = !1) {
            return Xr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Xr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Xr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Xr();
            return Xr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Xr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Xr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Request";
          }
        }
        class Rr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Rr.prototype.viewer_stats || t.Sg(Rr.M()),
              f.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    viewer_stats: { n: 1, c: _r, r: !0, q: !0 },
                    country_stats: { n: 2, c: re, r: !0, q: !0 },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = t.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(e = !1) {
            return Rr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Rr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Rr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Rr();
            return Rr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Rr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Rr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response";
          }
        }
        class _r extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _r.prototype.time || t.Sg(_r.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    time: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = t.w0(_r.M())), _r.sm_mbf;
          }
          toObject(e = !1) {
            return _r.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(_r.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(_r.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new _r();
            return _r.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(_r.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(_r.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
          }
        }
        class re extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.country_code || t.Sg(re.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    country_code: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = t.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(re.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new re();
            return re.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(re.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(re.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
          }
        }
        class ee extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.webrtc_session_id || t.Sg(ee.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    started: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    offer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    resolution_x: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    fps: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = t.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ee.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new ee();
            return ee.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ee.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ee.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Request";
          }
        }
        class ve extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new ve();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new ve();
            return ve.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Response";
          }
        }
        class te extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              te.prototype.webrtc_session_id || t.Sg(te.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = t.w0(te.M())), te.sm_mbf;
          }
          toObject(e = !1) {
            return te.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(te.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(te.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new te();
            return te.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(te.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(te.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Request";
          }
        }
        class ae extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new ae();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new ae();
            return ae.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Response";
          }
        }
        class we extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.broadcaster_steamid || t.Sg(we.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = t.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(we.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new we();
            return we.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(we.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(we.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Request";
          }
        }
        class fe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new fe();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new fe();
            return fe.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Response";
          }
        }
        class Gr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Gr.prototype.sdp_mid || t.Sg(Gr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    sdp_mid: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sdp_mline_index: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    candidate: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = t.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(e = !1) {
            return Gr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Gr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Gr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Gr();
            return Gr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Gr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Gr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTC_Candidate";
          }
        }
        class ie extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.webrtc_session_id || t.Sg(ie.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 2, c: Gr },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = t.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ie.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new ie();
            return ie.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ie.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ie.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Request";
          }
        }
        class ze extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new ze();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new ze();
            return ze.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Response";
          }
        }
        class me extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.broadcaster_steamid || t.Sg(me.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: Gr },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = t.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(me.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new me();
            return me.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(me.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(me.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Request";
          }
        }
        class xe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new xe();
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new xe();
            return xe.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Response";
          }
        }
        class oe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.broadcaster_steamid || t.Sg(oe.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate_generation: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(oe.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new oe();
            return oe.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(oe.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(oe.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Request";
          }
        }
        class Ie extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.candidate_generation || t.Sg(Ie.M()),
              f.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    candidate_generation: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    candidates: { n: 2, c: Gr, r: !0, q: !0 },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ie.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Ie();
            return Ie.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ie.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ie.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Response";
          }
        }
        class De extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.broadcast_session_id || t.Sg(De.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = t.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(De.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new De();
            return De.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(De.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(De.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCNeedTURNServer_Notification";
          }
        }
        class Be extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.cellid || t.Sg(Be.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    cellid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = t.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Be.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Be();
            return Be.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Be.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Be.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Request";
          }
        }
        class lr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lr.prototype.turn_server || t.Sg(lr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    turn_server: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = t.w0(lr.M())), lr.sm_mbf;
          }
          toObject(e = !1) {
            return lr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(lr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(lr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new lr();
            return lr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(lr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(lr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Response";
          }
        }
        class pr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pr.prototype.broadcast_session_id || t.Sg(pr.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    turn_server: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = t.w0(pr.M())), pr.sm_mbf;
          }
          toObject(e = !1) {
            return pr.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(pr.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(pr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new pr();
            return pr.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(pr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(pr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCHaveTURNServer_Notification";
          }
        }
        class Fe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.broadcast_session_id || t.Sg(Fe.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = t.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Fe.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Fe();
            return Fe.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Fe.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Fe.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStart_Notification";
          }
        }
        class Ee extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.broadcast_session_id || t.Sg(Ee.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ee.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Ee();
            return Ee.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ee.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ee.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Notification";
          }
        }
        class Ae extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.broadcast_session_id || t.Sg(Ae.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: Gr },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = t.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ae.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (o().BinaryReader)(e),
              x = new Ae();
            return Ae.deserializeBinaryFromReader(x, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ae.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ae.M(), e, l);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Notification";
          }
        }
        var Ne;
        ((Er) => {
          function e(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.BeginBroadcastSession#1",
              (0, k.I8)(L, zr, Ur),
              V,
              { ePrivilege: 1 },
            );
          }
          Er.BeginBroadcastSession = e;
          function l(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, k.I8)(ur, zr, Ur),
              q,
              { ePrivilege: 1 },
            );
          }
          Er.EndBroadcastSession = l;
          function x(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, k.I8)(ir, zr, Ur),
              jr,
              { ePrivilege: 1 },
            );
          }
          Er.StartBroadcastUpload = x;
          function Ze(gr, zr) {
            return gr.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, k.I8)(Q, zr),
              { ePrivilege: 1 },
            );
          }
          Er.NotifyBroadcastUploadStop = Ze;
          function ot(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, k.I8)(kr, zr, Ur),
              wr,
              { ePrivilege: 2 },
            );
          }
          Er.WatchBroadcast = ot;
          function wt(gr, zr) {
            return gr.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, k.I8)(Zr, zr),
              { ePrivilege: 2 },
            );
          }
          Er.HeartbeatBroadcast = wt;
          function $e(gr, zr) {
            return gr.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, k.I8)(ue, zr),
              { ePrivilege: 2 },
            );
          }
          Er.StopWatchingBroadcast = $e;
          function Xe(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, k.I8)(Kr, zr, Ur),
              Jr,
              { ePrivilege: 2 },
            );
          }
          Er.GetBroadcastStatus = Xe;
          function yt(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, k.I8)(he, zr, Ur),
              Hr,
              { ePrivilege: 2 },
            );
          }
          Er.GetBroadcastThumbnail = yt;
          function Mt(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, k.I8)(Nr, zr, Ur),
              Wr,
              { ePrivilege: 1 },
            );
          }
          Er.InviteToBroadcast = Mt;
          function ct(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, k.I8)(dr, zr, Ur),
              Qr,
              { ePrivilege: 1 },
            );
          }
          Er.SendBroadcastStateToServer = ct;
          function pt(gr, zr) {
            return gr.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, k.I8)(F, zr),
              { ePrivilege: 1 },
            );
          }
          Er.NotifyBroadcastSessionHeartbeat = pt;
          function vt(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, k.I8)(O, zr, Ur),
              K,
              { ePrivilege: 2 },
            );
          }
          Er.GetBroadcastChatInfo = vt;
          function jt(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, k.I8)($, zr, Ur),
              G,
              { ePrivilege: 3 },
            );
          }
          Er.PostChatMessage = jt;
          function Ve(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, k.I8)(sr, zr, Ur),
              mr,
              { ePrivilege: 1 },
            );
          }
          Er.UpdateChatMessageFlair = Ve;
          function zt(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, k.I8)(br, zr, Ur),
              Pr,
              { ePrivilege: 3 },
            );
          }
          Er.MuteBroadcastChatUser = zt;
          function xt(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, k.I8)(be, zr, Ur),
              Me,
              { ePrivilege: 3 },
            );
          }
          Er.RemoveUserChatText = xt;
          function Ke(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, k.I8)(Lr, zr, Ur),
              qr,
              { ePrivilege: 1 },
            );
          }
          Er.GetBroadcastChatUserNames = Ke;
          function pe(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, k.I8)(de, zr, Ur),
              c,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Er.StartBuildClip = pe;
          function Se(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, k.I8)(w, zr, Ur),
              D,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Er.GetBuildClipStatus = Se;
          function Ot(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, k.I8)(P, zr, Ur),
              Z,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Er.SetClipDetails = Ot;
          function ye(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, k.I8)(_, zr, Ur),
              cr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          Er.GetClipDetails = ye;
          function We(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.SetRTMPInfo#1",
              (0, k.I8)(xr, zr, Ur),
              ge,
              { ePrivilege: 1 },
            );
          }
          Er.SetRTMPInfo = We;
          function ut(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.GetRTMPInfo#1",
              (0, k.I8)(se, zr, Ur),
              le,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Er.GetRTMPInfo = ut;
          function It(gr, zr) {
            return gr.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, k.I8)(pr, zr),
              { ePrivilege: 1 },
            );
          }
          Er.NotifyWebRTCHaveTURNServer = It;
          function Dt(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, k.I8)(ee, zr, Ur),
              ve,
              { ePrivilege: 1 },
            );
          }
          Er.WebRTCStartResult = Dt;
          function Ce(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, k.I8)(te, zr, Ur),
              ae,
              { ePrivilege: 1 },
            );
          }
          Er.WebRTCStopped = Ce;
          function dt(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, k.I8)(we, zr, Ur),
              fe,
              { ePrivilege: 1 },
            );
          }
          Er.WebRTCSetAnswer = dt;
          function Bt(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, k.I8)(Be, zr, Ur),
              lr,
              { ePrivilege: 1 },
            );
          }
          Er.WebRTCLookupTURNServer = Bt;
          function ke(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, k.I8)(ie, zr, Ur),
              ze,
              { ePrivilege: 1 },
            );
          }
          Er.WebRTCAddHostCandidate = ke;
          function Ft(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, k.I8)(me, zr, Ur),
              xe,
              { ePrivilege: 1 },
            );
          }
          Er.WebRTCAddViewerCandidate = Ft;
          function gt(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, k.I8)(oe, zr, Ur),
              Ie,
              { ePrivilege: 1 },
            );
          }
          Er.WebRTCGetHostCandidates = gt;
          function Et(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, k.I8)($r, zr, Ur),
              Tr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Er.GetBroadcastUploadStats = Et;
          function At(gr, zr, Ur) {
            return gr.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, k.I8)(Xr, zr, Ur),
              Rr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Er.GetBroadcastViewerStats = At;
        })(Ne || (Ne = {}));
        var mt;
        ((Er) => {
          (Er.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: R,
          }),
            (Er.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: b,
            }),
            (Er.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: Sr,
            }),
            (Er.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: z,
            }),
            (Er.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: S,
            }),
            (Er.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: Or,
            }),
            (Er.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: J,
            }),
            (Er.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: C,
            }),
            (Er.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: or,
            }),
            (Er.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: De,
            }),
            (Er.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: Fe,
            }),
            (Er.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: Ee,
            }),
            (Er.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: Ae,
            });
        })(mt || (mt = {}));
      },
      61639: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { Mc: () => s });
        var s = {};
        d.r(s),
          d.d(s, {
            Ms: () => fr,
            n6: () => X,
            U6: () => M,
            kz: () => er,
            ej: () => rr,
            R: () => T,
            mZ: () => E,
            Is: () => W,
            B_: () => H,
            bW: () => B,
            iy: () => ar,
          });
        var hr = d(80613),
          f = d.n(hr),
          o = d(75245),
          t = d(35038);
        const k = 0,
          ar = 1,
          M = 2,
          H = 3,
          B = 4,
          er = 5,
          j = 6,
          X = 7,
          U = 8,
          W = 9,
          g = 10,
          a = 11,
          i = 12,
          Y = 13,
          yr = 14,
          vr = 15,
          fr = 16,
          E = 17,
          T = 18,
          rr = 19;
        function nr(q) {
          return "unknown EProductPageAction ( " + q + " )";
        }
        function p(q) {
          return "unknown EProductViewAction ( " + q + " )";
        }
        function u(q) {
          return "unknown EProductImpressionFromClientType ( " + q + " )";
        }
        function y(q) {
          return "unknown ETrackedEmailType ( " + q + " )";
        }
        function A(q) {
          return (
            "unknown EUnifiedProductInteractionStoreItemType ( " + q + " )"
          );
        }
        function tr(q) {
          return "unknown EUnifedProductInteractionActions ( " + q + " )";
        }
        class L extends hr.Message {
          static ImplementsStaticInterface() {}
          constructor(ir = null) {
            super(),
              L.prototype.impressions || o.Sg(L.M()),
              hr.Message.initialize(this, ir, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: { impressions: { n: 1, c: V, r: !0, q: !0 } },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = o.w0(L.M())), L.sm_mbf;
          }
          toObject(ir = !1) {
            return L.toObject(ir, this);
          }
          static toObject(ir, jr) {
            return o.BT(L.M(), ir, jr);
          }
          static fromObject(ir) {
            return o.Uq(L.M(), ir);
          }
          static deserializeBinary(ir) {
            let jr = new (f().BinaryReader)(ir),
              Sr = new L();
            return L.deserializeBinaryFromReader(Sr, jr);
          }
          static deserializeBinaryFromReader(ir, jr) {
            return o.zj(L.MBF(), ir, jr);
          }
          serializeBinary() {
            var ir = new (f().BinaryWriter)();
            return L.serializeBinaryToWriter(this, ir), ir.getResultBuffer();
          }
          static serializeBinaryToWriter(ir, jr) {
            o.i0(L.M(), ir, jr);
          }
          serializeBase64String() {
            var ir = new (f().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, ir), ir.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification";
          }
        }
        class V extends hr.Message {
          static ImplementsStaticInterface() {}
          constructor(ir = null) {
            super(),
              V.prototype.type || o.Sg(V.M()),
              hr.Message.initialize(this, ir, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    type: { n: 1, br: o.qM.readEnum, bw: o.gp.writeEnum },
                    appid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                    num_impressions: {
                      n: 3,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = o.w0(V.M())), V.sm_mbf;
          }
          toObject(ir = !1) {
            return V.toObject(ir, this);
          }
          static toObject(ir, jr) {
            return o.BT(V.M(), ir, jr);
          }
          static fromObject(ir) {
            return o.Uq(V.M(), ir);
          }
          static deserializeBinary(ir) {
            let jr = new (f().BinaryReader)(ir),
              Sr = new V();
            return V.deserializeBinaryFromReader(Sr, jr);
          }
          static deserializeBinaryFromReader(ir, jr) {
            return o.zj(V.MBF(), ir, jr);
          }
          serializeBinary() {
            var ir = new (f().BinaryWriter)();
            return V.serializeBinaryToWriter(this, ir), ir.getResultBuffer();
          }
          static serializeBinaryToWriter(ir, jr) {
            o.i0(V.M(), ir, jr);
          }
          serializeBase64String() {
            var ir = new (f().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, ir), ir.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification_Impression";
          }
        }
        var ur;
        ((q) => {
          function ir(jr, Sr) {
            return jr.SendNotification(
              "ExperimentService.ReportProductImpressionsFromClient#1",
              (0, t.I8)(L, Sr),
              { ePrivilege: 1 },
            );
          }
          q.ReportProductImpressionsFromClient = ir;
        })(ur || (ur = {}));
      },
      95414: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { j: () => j, u: () => X });
        var s = d(7850),
          hr = d(90626),
          f = d(24660),
          o = d(83482),
          t = d(72865),
          k = d(77200),
          ar = d(53113),
          M = d(68094),
          H = d(72609),
          B = d(3166);
        function er(U) {
          if (U) {
            if ("appid" in U) return "app";
            if ("bundleid" in U) return "bundle";
            if ("packageid" in U) return "sub";
          }
        }
        function j(U) {
          const {
              id: W,
              hoverClassName: g,
              fnGetIDOverride: a,
              fnHoverState: i,
              disableScreenshots: Y,
              children: yr,
            } = U,
            vr = hr.useRef(null),
            fr = hr.useCallback(
              (T) => {
                const rr = er(W);
                rr &&
                  (i && i(!0),
                  window.GameHover &&
                    (vr.current &&
                      Y &&
                      (vr.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(a ? a() : vr.current, T, "global_hover", {
                      type: rr,
                      id: (0, M.G$)(W).id,
                      v6: 1,
                    })));
              },
              [i, a, Y, W],
            ),
            E = hr.useCallback(
              (T) => {
                er(W) &&
                  (i && T.relatedTarget && i(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      a ? a() : vr.current,
                      T,
                      "global_hover",
                    ));
              },
              [W, i, a],
            );
          return (0, s.jsx)("div", {
            ref: vr,
            className: g,
            onMouseEnter: fr,
            onMouseLeave: E,
            onFocus: fr,
            onBlur: E,
            children: yr,
          });
        }
        function X(U) {
          const {
              id: W,
              strExtraParams: g,
              fnOnClickOverride: a,
              strOverrideURL: i,
            } = U,
            Y = (0, t.n9)(),
            yr = (0, k.w)(),
            vr = (0, ar.NT)(
              i ||
                (W && "creatorid" in W
                  ? (0, o.It)(
                      `${H.TS.STORE_BASE_URL}curator/${((0, M.G$))(W).id}${g ? `?${g}` : ""}`,
                      Y,
                      yr,
                    )
                  : (0, o.It)(
                      `${H.TS.STORE_BASE_URL}${er(W)}/${((0, M.G$))(W).id}${g ? `?${g}` : ""}`,
                      Y,
                      yr,
                    )),
            );
          return (0, s.jsx)(j, {
            ...U,
            children: (0, s.jsx)(f.Ii, {
              className: U.className,
              href: a ? void 0 : vr,
              target: H.TS.IN_CLIENT || a ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: a,
              children: U.children,
            }),
          });
        }
      },
      2422: (Vr, Yr, d) => {
        "use strict";
        d.r(Yr),
          d.d(Yr, {
            BroadcastEmbeddablePopoutHeader: () => Jt,
            default: () => Ui,
          });
        var s = d(7850),
          hr = d(41735),
          f = d.n(hr),
          o = d(75844),
          t = d(65946),
          k = d(90626),
          ar = d(14947),
          M = d(16346),
          H = d(90711),
          B = d(90828),
          er = d(72604),
          j = d(35038),
          X = d(84110),
          U = d(3685),
          W = d(76559),
          g = d(80613),
          a = d.n(g),
          i = d(75245);
        function Y(v) {
          return "unknown EBroadcastImageType ( " + v + " )";
        }
        function yr(v) {
          return "unknown EGetGamesAlgorithm ( " + v + " )";
        }
        function vr(v) {
          return "unknown EGetChannelsAlgorithm ( " + v + " )";
        }
        function fr(v) {
          return "unknown ESteamTVContentTemplate ( " + v + " )";
        }
        class E extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.unique_name || i.Sg(E.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
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
          static toObject(r, n) {
            return i.BT(E.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new E();
            return E.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(E.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(E.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        }
        class T extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.broadcast_channel_id || i.Sg(T.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
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
          static toObject(r, n) {
            return i.BT(T.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new T();
            return T.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(T.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(T.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        }
        class rr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.unique_name || i.Sg(rr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, n) {
            return i.BT(rr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new rr();
            return rr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(rr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(rr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        }
        class nr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.broadcast_channel_id || i.Sg(nr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
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
          static toObject(r, n) {
            return i.BT(nr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new nr();
            return nr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(nr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(nr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        }
        class p extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.broadcast_channel_id || i.Sg(p.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    language: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    headline: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    summary: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    avatar_hash: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    rules: { n: 8, br: i.qM.readString, bw: i.gp.writeString },
                    panels: { n: 9, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, n) {
            return i.BT(p.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new p();
            return p.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(p.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(p.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Request";
          }
        }
        class u extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new u();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new u();
            return u.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        class y extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.broadcast_channel_id || i.Sg(y.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
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
          static toObject(r, n) {
            return i.BT(y.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new y();
            return y.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(y.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(y.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        }
        class A extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.unique_name || i.Sg(A.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    owner_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    name: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    language: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    headline: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    summary: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    rules: { n: 8, br: i.qM.readString, bw: i.gp.writeString },
                    panels: { n: 9, br: i.qM.readString, bw: i.gp.writeString },
                    is_partnered: {
                      n: 10,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
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
          static toObject(r, n) {
            return i.BT(A.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new A();
            return A.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(A.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(A.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        }
        class tr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.broadcast_channel_id || i.Sg(tr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    image_type: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    image_index: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    image_width: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    image_height: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    file_size: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    file_extension: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    file_hash: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    undo: { n: 9, br: i.qM.readBool, bw: i.gp.writeBool },
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
          static toObject(r, n) {
            return i.BT(tr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new tr();
            return tr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(tr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(tr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Request";
          }
        }
        class L extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.replace_image_hash || i.Sg(L.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    replace_image_hash: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
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
          static toObject(r, n) {
            return i.BT(L.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new L();
            return L.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(L.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(L.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Response";
          }
        }
        class V extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.broadcast_channel_id || i.Sg(V.M()),
              g.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    image_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
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
          static toObject(r, n) {
            return i.BT(V.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new V();
            return V.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(V.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(V.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Request";
          }
        }
        class ur extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.images || i.Sg(ur.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: { images: { n: 1, c: q, r: !0, q: !0 } },
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
          static toObject(r, n) {
            return i.BT(ur.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new ur();
            return ur.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(ur.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(ur.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response";
          }
        }
        class q extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.image_type || i.Sg(q.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    image_type: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    image_path: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    image_index: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, n) {
            return i.BT(q.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new q();
            return q.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(q.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(q.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response_Images";
          }
        }
        class ir extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.broadcast_channel_id || i.Sg(ir.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
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
          static toObject(r, n) {
            return i.BT(ir.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new ir();
            return ir.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(ir.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(ir.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Request";
          }
        }
        class jr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.links || i.Sg(jr.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: { links: { n: 1, c: Sr, r: !0, q: !0 } },
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
          static toObject(r, n) {
            return i.BT(jr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new jr();
            return jr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(jr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(jr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response";
          }
        }
        class Sr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.link_index || i.Sg(Sr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    link_index: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    url: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    link_description: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    left: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    top: { n: 5, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    width: { n: 6, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    height: { n: 7, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = i.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Sr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Sr();
            return Sr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Sr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Sr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
          }
        }
        class Kr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.broadcast_channel_id || i.Sg(Kr.M()),
              g.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    links: { n: 2, c: Jr, r: !0, q: !0 },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = i.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Kr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Kr();
            return Kr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Kr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Kr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
          }
        }
        class Jr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.link_index || i.Sg(Jr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    link_index: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    url: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    link_description: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    left: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    top: { n: 5, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    width: { n: 6, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    height: { n: 7, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = i.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Jr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Jr();
            return Jr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Jr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Jr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
          }
        }
        class he extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return he.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new he();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new he();
            return he.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return he.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
          }
        }
        class Hr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.broadcast_channel_id || i.Sg(Hr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = i.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Hr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Hr();
            return Hr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Hr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Hr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Request";
          }
        }
        class kr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.is_live || i.Sg(kr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    is_live: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                    is_disabled: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    viewers: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    views: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    broadcaster_steamid: {
                      n: 6,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subscribers: {
                      n: 9,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    unique_name: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    broadcast_session_id: {
                      n: 11,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = i.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(kr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new kr();
            return kr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(kr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(kr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Response";
          }
        }
        class wr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.broadcast_channel_id || i.Sg(wr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    name: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    appid: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    viewers: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    views: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    headline: {
                      n: 9,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    avatar_url: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    broadcaster_steamid: {
                      n: 11,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    subscribers: {
                      n: 12,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    background_url: {
                      n: 13,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    is_featured: {
                      n: 14,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    is_disabled: {
                      n: 15,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    is_live: { n: 16, br: i.qM.readBool, bw: i.gp.writeBool },
                    language: {
                      n: 17,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    reports: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    is_partnered: {
                      n: 19,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
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
          static toObject(r, n) {
            return i.BT(wr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new wr();
            return wr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(wr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(wr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "GetBroadcastChannelEntry";
          }
        }
        class Pe extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Pe.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new Pe();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Pe();
            return Pe.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Request";
          }
        }
        class Zr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.results || i.Sg(Zr.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: { results: { n: 1, c: wr, r: !0, q: !0 } },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = i.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Zr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Zr();
            return Zr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Zr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Zr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Response";
          }
        }
        class ue extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ue.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new ue();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new ue();
            return ue.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Request";
          }
        }
        class Nr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.results || i.Sg(Nr.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: { results: { n: 1, c: wr, r: !0, q: !0 } },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = i.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Nr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Nr();
            return Nr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Nr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Nr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        }
        class Wr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.broadcast_channel_id || i.Sg(Wr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    undo: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
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
          static toObject(r, n) {
            return i.BT(Wr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Wr();
            return Wr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Wr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Wr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Request";
          }
        }
        class dr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.is_followed || i.Sg(dr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
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
          static toObject(r, n) {
            return i.BT(dr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new dr();
            return dr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(dr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(dr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Response";
          }
        }
        class Qr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.broadcast_channel_id || i.Sg(Qr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = i.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Qr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Qr();
            return Qr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Qr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Qr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Request";
          }
        }
        class R extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.is_subscribed || i.Sg(R.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    is_subscribed: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
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
          static toObject(r, n) {
            return i.BT(R.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new R();
            return R.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(R.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(R.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Response";
          }
        }
        class m extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.broadcast_channel_id || i.Sg(m.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    reason: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = i.w0(m.M())), m.sm_mbf;
          }
          toObject(r = !1) {
            return m.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(m.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new m();
            return m.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(m.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(m.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Request";
          }
        }
        class b extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new b();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new b();
            return b.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        class z extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.broadcast_channel_id || i.Sg(z.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
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
          static toObject(r, n) {
            return i.BT(z.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new z();
            return z.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(z.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(z.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        }
        class S extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.is_followed || i.Sg(S.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    is_subscribed: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
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
          static toObject(r, n) {
            return i.BT(S.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new S();
            return S.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(S.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(S.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        }
        class J extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.appid || i.Sg(J.M()),
              g.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    image: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    viewers: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    channels: { n: 5, c: wr, r: !0, q: !0 },
                    release_date: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    developer: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    publisher: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
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
          static toObject(r, n) {
            return i.BT(J.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new J();
            return J.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(J.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(J.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Game";
          }
        }
        class C extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.appid || i.Sg(C.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    algorithm: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    count: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, n) {
            return i.BT(C.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new C();
            return C.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(C.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(C.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Request";
          }
        }
        class or extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.results || i.Sg(or.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: { results: { n: 1, c: J, r: !0, q: !0 } },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = i.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(or.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new or();
            return or.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(or.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(or.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Response";
          }
        }
        class Q extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.algorithm || i.Sg(Q.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    algorithm: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    count: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, n) {
            return i.BT(Q.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Q();
            return Q.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Q.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Q.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Request";
          }
        }
        class Or extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.results || i.Sg(Or.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: { results: { n: 1, c: wr, r: !0, q: !0 } },
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
          static toObject(r, n) {
            return i.BT(Or.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Or();
            return Or.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Or.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Or.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Response";
          }
        }
        class F extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.broadcast_channel_id || i.Sg(F.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
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
          static toObject(r, n) {
            return i.BT(F.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new F();
            return F.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(F.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(F.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        }
        class O extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.broadcasters || i.Sg(O.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: { broadcasters: { n: 1, c: K, r: !0, q: !0 } },
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
          static toObject(r, n) {
            return i.BT(O.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new O();
            return O.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(O.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(O.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
          }
        }
        class K extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.steamid || i.Sg(K.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    rtmp_token: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
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
          static toObject(r, n) {
            return i.BT(K.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new K();
            return K.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(K.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(K.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        }
        class $ extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.issuer_steamid || i.Sg($.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    issuer_steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    time_expires: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    permanent: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    name: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, n) {
            return i.BT($.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new $();
            return $.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj($.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0($.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatBan";
          }
        }
        class G extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.broadcast_channel_id || i.Sg(G.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    duration: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    permanent: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    undo: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
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
          static toObject(r, n) {
            return i.BT(G.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new G();
            return G.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(G.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(G.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Request";
          }
        }
        class sr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new sr();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new sr();
            return sr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Response";
          }
        }
        class mr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.broadcast_channel_id || i.Sg(mr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
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
          static toObject(r, n) {
            return i.BT(mr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new mr();
            return mr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(mr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(mr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Request";
          }
        }
        class br extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.results || i.Sg(br.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: { results: { n: 1, c: $, r: !0, q: !0 } },
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
          static toObject(r, n) {
            return i.BT(br.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new br();
            return br.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(br.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(br.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Response";
          }
        }
        class Pr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.broadcast_channel_id || i.Sg(Pr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    moderator_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    undo: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = i.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Pr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Pr();
            return Pr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Pr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Pr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Request";
          }
        }
        class be extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return be.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new be();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new be();
            return be.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return be.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        class Me extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Me.prototype.broadcast_channel_id || i.Sg(Me.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = i.w0(Me.M())), Me.sm_mbf;
          }
          toObject(r = !1) {
            return Me.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Me.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Me.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Me();
            return Me.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Me.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Me.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Request";
          }
        }
        class Lr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.steamid || i.Sg(Lr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = i.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Lr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Lr();
            return Lr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Lr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Lr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatModerator";
          }
        }
        class qr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.results || i.Sg(qr.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: { results: { n: 1, c: Lr, r: !0, q: !0 } },
                }),
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = i.w0(qr.M())), qr.sm_mbf;
          }
          toObject(r = !1) {
            return qr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(qr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new qr();
            return qr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(qr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(qr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Response";
          }
        }
        class Cr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.broadcast_channel_id || i.Sg(Cr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    word: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    undo: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = i.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(r = !1) {
            return Cr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Cr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Cr();
            return Cr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Cr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Cr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Request";
          }
        }
        class de extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return de.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new de();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new de();
            return de.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return de.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Response";
          }
        }
        class c extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              c.prototype.broadcast_channel_id || i.Sg(c.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = i.w0(c.M())), c.sm_mbf;
          }
          toObject(r = !1) {
            return c.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(c.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(c.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new c();
            return c.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(c.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return c.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(c.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Request";
          }
        }
        class w extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.results || i.Sg(w.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    results: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
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
          static toObject(r, n) {
            return i.BT(w.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new w();
            return w.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(w.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(w.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Response";
          }
        }
        class D extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.broadcast_channel_id || i.Sg(D.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
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
          static toObject(r, n) {
            return i.BT(D.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new D();
            return D.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(D.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(D.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Request";
          }
        }
        class P extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.chat_id || i.Sg(P.M()),
              g.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
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
          static toObject(r, n) {
            return i.BT(P.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new P();
            return P.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(P.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(P.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Response";
          }
        }
        class Z extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.term || i.Sg(Z.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    term: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  },
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
          static toObject(r, n) {
            return i.BT(Z.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Z();
            return Z.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Z.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Z.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Request";
          }
        }
        class _ extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.results || i.Sg(_.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: { results: { n: 1, c: wr, r: !0, q: !0 } },
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
          static toObject(r, n) {
            return i.BT(_.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new _();
            return _.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(_.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(_.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Response";
          }
        }
        class cr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new cr();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new cr();
            return cr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Request";
          }
        }
        class xr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.stream_live_email || i.Sg(xr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
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
          static toObject(r, n) {
            return i.BT(xr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new xr();
            return xr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(xr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(xr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Response";
          }
        }
        class ge extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ge.prototype.stream_live_email || i.Sg(ge.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = i.w0(ge.M())), ge.sm_mbf;
          }
          toObject(r = !1) {
            return ge.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(ge.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(ge.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new ge();
            return ge.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(ge.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(ge.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Request";
          }
        }
        class se extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return se.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new se();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new se();
            return se.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return se.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Response";
          }
        }
        class le extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return le.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new le();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new le();
            return le.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return le.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Request";
          }
        }
        class $r extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.results || i.Sg($r.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: { results: { n: 1, c: wr, r: !0, q: !0 } },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = i.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT($r.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new $r();
            return $r.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj($r.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0($r.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Response";
          }
        }
        class Tr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.broadcasts || i.Sg(Tr.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: { broadcasts: { n: 1, c: wr, r: !0, q: !0 } },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = i.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Tr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Tr();
            return Tr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Tr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Tr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Takeover";
          }
        }
        class Fr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.broadcasts || i.Sg(Fr.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    broadcasts: { n: 1, c: wr, r: !0, q: !0 },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    title: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = i.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Fr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Fr();
            return Fr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Fr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Fr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_SingleGame";
          }
        }
        class Xr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.appid || i.Sg(Xr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    game_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    broadcast: { n: 3, c: wr },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = i.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Xr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Xr();
            return Xr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Xr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Xr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "GameListEntry";
          }
        }
        class Rr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rr.prototype.entries || i.Sg(Rr.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    entries: { n: 1, c: Xr, r: !0, q: !0 },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = i.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Rr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Rr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Rr();
            return Rr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Rr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Rr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_GameList";
          }
        }
        class _r extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.broadcasts || i.Sg(_r.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    broadcasts: { n: 1, c: wr, r: !0, q: !0 },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = i.w0(_r.M())), _r.sm_mbf;
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(_r.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new _r();
            return _r.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(_r.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(_r.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_QuickExplore";
          }
        }
        class re extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              re.prototype.broadcasts || i.Sg(re.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    broadcasts: { n: 1, c: wr, r: !0, q: !0 },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = i.w0(re.M())), re.sm_mbf;
          }
          toObject(r = !1) {
            return re.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(re.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(re.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new re();
            return re.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(re.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return re.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(re.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_ConveyorBelt";
          }
        }
        class ee extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ee.prototype.broadcast || i.Sg(ee.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    broadcast: { n: 1, c: wr },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    chat_group_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = i.w0(ee.M())), ee.sm_mbf;
          }
          toObject(r = !1) {
            return ee.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(ee.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(ee.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new ee();
            return ee.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(ee.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(ee.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        }
        class ve extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ve.prototype.broadcast || i.Sg(ve.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    broadcast: { n: 1, c: wr },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = i.w0(ve.M())), ve.sm_mbf;
          }
          toObject(r = !1) {
            return ve.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(ve.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(ve.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new ve();
            return ve.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(ve.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(ve.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Developer";
          }
        }
        class te extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              te.prototype.title || i.Sg(te.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    title: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = i.w0(te.M())), te.sm_mbf;
          }
          toObject(r = !1) {
            return te.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(te.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(te.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new te();
            return te.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(te.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return te.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(te.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Event";
          }
        }
        class ae extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ae.prototype.template_type || i.Sg(ae.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    template_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    takeover: { n: 2, c: Tr },
                    single_game: { n: 3, c: Fr },
                    game_list: { n: 4, c: Rr },
                    quick_explore: { n: 5, c: _r },
                    conveyor_belt: { n: 6, c: re },
                    watch_party: { n: 7, c: ee },
                    developer: { n: 8, c: ve },
                    event: { n: 9, c: te },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = i.w0(ae.M())), ae.sm_mbf;
          }
          toObject(r = !1) {
            return ae.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(ae.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(ae.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new ae();
            return ae.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(ae.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(ae.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageContentRow";
          }
        }
        class we extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return we.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new we();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new we();
            return we.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return we.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        class fe extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fe.prototype.rows || i.Sg(fe.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: { rows: { n: 1, c: ae, r: !0, q: !0 } },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = i.w0(fe.M())), fe.sm_mbf;
          }
          toObject(r = !1) {
            return fe.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(fe.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(fe.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new fe();
            return fe.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(fe.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(fe.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Response";
          }
        }
        class Gr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gr.prototype.broadcast_channel_id || i.Sg(Gr.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = i.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(Gr.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(Gr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new Gr();
            return Gr.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(Gr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(Gr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Request";
          }
        }
        class ie extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ie.prototype.broadcast_clip_id || i.Sg(ie.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    app_id: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    broadcaster_steamid: {
                      n: 4,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    creator_steamid: {
                      n: 5,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    video_description: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    live_time: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    length_ms: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 9,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = i.w0(ie.M())), ie.sm_mbf;
          }
          toObject(r = !1) {
            return ie.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(ie.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(ie.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new ie();
            return ie.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(ie.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(ie.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_BroadcastClipInfo";
          }
        }
        class ze extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ze.prototype.clips || i.Sg(ze.M()),
              g.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    clips: { n: 1, c: ie, r: !0, q: !0 },
                    thumbnail_host: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = i.w0(ze.M())), ze.sm_mbf;
          }
          toObject(r = !1) {
            return ze.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(ze.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(ze.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new ze();
            return ze.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(ze.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(ze.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Response";
          }
        }
        class me extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              me.prototype.cheer_type || i.Sg(me.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    cheer_type: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cheer_amount: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = i.w0(me.M())), me.sm_mbf;
          }
          toObject(r = !1) {
            return me.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(me.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(me.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new me();
            return me.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(me.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return me.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(me.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        }
        class xe extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xe.prototype.app_id || i.Sg(xe.M()),
              g.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    cheer_target_id: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    cheers: { n: 3, c: me, r: !0, q: !0 },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = i.w0(xe.M())), xe.sm_mbf;
          }
          toObject(r = !1) {
            return xe.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(xe.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(xe.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new xe();
            return xe.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(xe.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(xe.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Request";
          }
        }
        class oe extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              oe.prototype.aggregation_delay_ms || i.Sg(oe.M()),
              g.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    aggregation_delay_ms: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = i.w0(oe.M())), oe.sm_mbf;
          }
          toObject(r = !1) {
            return oe.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(oe.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(oe.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              h = new oe();
            return oe.deserializeBinaryFromReader(h, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(oe.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(oe.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Response";
          }
        }
        var Ie;
        ((v) => {
          function r(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, j.I8)(E, Dr, Br),
              T,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.CreateBroadcastChannel = r;
          function n(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, j.I8)(rr, Dr, Br),
              nr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          v.GetBroadcastChannelID = n;
          function h(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, j.I8)(p, Dr, Br),
              u,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.SetBroadcastChannelProfile = h;
          function I(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, j.I8)(y, Dr, Br),
              A,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          v.GetBroadcastChannelProfile = I;
          function N(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, j.I8)(tr, Dr, Br),
              L,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.SetBroadcastChannelImage = N;
          function Mr(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, j.I8)(V, Dr, Br),
              ur,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          v.GetBroadcastChannelImages = Mr;
          function ne(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, j.I8)(Kr, Dr, Br),
              he,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.SetBroadcastChannelLinkRegions = ne;
          function ce(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, j.I8)(ir, Dr, Br),
              jr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          v.GetBroadcastChannelLinks = ce;
          function je(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, j.I8)(F, Dr, Br),
              O,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.GetBroadcastChannelBroadcasters = je;
          function Le(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, j.I8)(Pe, Dr, Br),
              Zr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.GetFollowedChannels = Le;
          function He(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, j.I8)(ue, Dr, Br),
              Nr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.GetSubscribedChannels = He;
          function Ue(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, j.I8)(Hr, Dr, Br),
              kr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          v.GetBroadcastChannelStatus = Ue;
          function Ge(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, j.I8)(Wr, Dr, Br),
              dr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.FollowBroadcastChannel = Ge;
          function it(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, j.I8)(Qr, Dr, Br),
              R,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.SubscribeBroadcastChannel = it;
          function Zi(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, j.I8)(Gr, Dr, Br),
              ze,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          v.GetBroadcastChannelClips = Zi;
          function Yi(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, j.I8)(m, Dr, Br),
              b,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.ReportBroadcastChannel = Yi;
          function Ji(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, j.I8)(z, Dr, Br),
              S,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.GetBroadcastChannelInteraction = Ji;
          function Qi(Ir, Dr, Br) {
            return Ir.SendMsg("SteamTV.GetGames#1", (0, j.I8)(C, Dr, Br), or, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          v.GetGames = Qi;
          function $i(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetChannels#1",
              (0, j.I8)(Q, Dr, Br),
              Or,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          v.GetChannels = $i;
          function Ti(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.AddChatBan#1",
              (0, j.I8)(G, Dr, Br),
              sr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.AddChatBan = Ti;
          function Gi(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetChatBans#1",
              (0, j.I8)(mr, Dr, Br),
              br,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.GetChatBans = Gi;
          function qi(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, j.I8)(Pr, Dr, Br),
              be,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.AddChatModerator = qi;
          function Ri(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, j.I8)(Me, Dr, Br),
              qr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          v.GetChatModerators = Ri;
          function Vi(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.AddWordBan#1",
              (0, j.I8)(Cr, Dr, Br),
              de,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.AddWordBan = Vi;
          function Ci(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetWordBans#1",
              (0, j.I8)(c, Dr, Br),
              w,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.GetWordBans = Ci;
          function _i(Ir, Dr, Br) {
            return Ir.SendMsg("SteamTV.JoinChat#1", (0, j.I8)(D, Dr, Br), P, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          v.JoinChat = _i;
          function rn(Ir, Dr, Br) {
            return Ir.SendMsg("SteamTV.Search#1", (0, j.I8)(Z, Dr, Br), _, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          v.Search = rn;
          function en(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, j.I8)(cr, Dr, Br),
              xr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.GetSteamTVUserSettings = en;
          function tn(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, j.I8)(ge, Dr, Br),
              se,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.SetSteamTVUserSettings = tn;
          function nn(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, j.I8)(le, Dr, Br),
              $r,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          v.GetMyBroadcastChannels = nn;
          function sn(Ir, Dr, Br) {
            return Ir.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, j.I8)(we, Dr, Br),
              fe,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          v.GetHomePageContents = sn;
          function ln(Ir, Dr, Br) {
            return Ir.SendMsg("SteamTV.AppCheer#1", (0, j.I8)(xe, Dr, Br), oe, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          v.AppCheer = ln;
        })(Ie || (Ie = {}));
        var De = d(27066),
          Be = d(8323),
          lr = d(18210),
          pr = d(3166),
          Fe = d(24544),
          Ee = Object.defineProperty,
          Ae = Object.getOwnPropertyDescriptor,
          Ne = (v, r, n, h) => {
            for (
              var I = h > 1 ? void 0 : h ? Ae(r, n) : r, N = v.length - 1, Mr;
              N >= 0;
              N--
            )
              (Mr = v[N]) && (I = (h ? Mr(r, n, I) : Mr(I)) || I);
            return h && I && Ee(r, n, I), I;
          };
        const mt = 4,
          Er = 500,
          e = 10,
          l = class at {
            m_mapChats = new Map();
            GetChat(r, n) {
              return this.m_mapChats.get(r) || this.m_mapChats.get(n);
            }
            GetOrCreateChat(r, n) {
              let h = this.GetChat(r, n);
              return h || ((h = new Ze()), this.m_mapChats.set(r || n, h)), h;
            }
            static s_Singleton;
            static Get() {
              return (
                at.s_Singleton || (at.s_Singleton = new at()), at.s_Singleton
              );
            }
            constructor() {
              (0, ar.Gn)(this);
            }
          };
        Ne([ar.sH], l.prototype, "m_mapChats", 2);
        let x = l;
        class Ze {
          m_ulBroadcastChannelID = "";
          m_ulChatID = "";
          m_strFlairGroupID = "";
          m_bAutoScroll = !0;
          m_ulBroadcastID = "";
          m_ulBroadcastSteamID = "";
          m_tsFirstRequest = null;
          m_nFromFirstRequestMS = 0;
          m_nNextChatTS = 0;
          m_cConsecutiveErrors = 0;
          m_nNudgeFactorMS = 0;
          m_nLastSleepMS = 0;
          m_bReconnecting = !1;
          m_strChatURL;
          m_webApiToken;
          m_unInstanceID = Math.floor(Math.random() * 4294967296);
          m_strUserSteamID = "";
          m_regexUserEmoticons = null;
          m_chatScheduledFunc = null;
          m_webAPIInterface = null;
          m_textFilterStore = null;
          m_bHasAddedWelcomeChat = !1;
          m_mapMutedUsers = {};
          m_mapChannelModeratorUsers = new Map();
          m_mapBroadcastModeratorUsers = new Map();
          m_nRateLimitSeconds = 0;
          m_bRateLimited = !1;
          m_rgChatMessages = [];
          m_rgAnnouncements = [];
          m_latestAnnouncement = null;
          constructor() {
            (0, ar.Gn)(this),
              (this.m_webAPIInterface = new U.D(
                pr.TS.WEBAPI_BASE_URL,
                pr.iA.webapi_token,
              ));
          }
          InitTextFilter() {
            this.m_textFilterStore = new Fe.s({ BIsFriend: (0, Fe.Q)() });
            let r = 0;
            pr.iA.steamid !== "" && (r = new W.b(pr.iA.steamid).GetAccountID()),
              this.m_textFilterStore.Init(r, null, new X.A());
          }
          get TextFilterStore() {
            return this.m_textFilterStore;
          }
          GetBroadcastSteamID() {
            return this.m_ulBroadcastSteamID;
          }
          GetUserSteamID() {
            return this.m_strUserSteamID;
          }
          StartForSteamID(r, n) {
            (this.m_webAPIInterface = new U.D(
              pr.TS.WEBAPI_BASE_URL,
              pr.iA.webapi_token,
            )),
              (this.m_ulBroadcastSteamID = r),
              (this.m_ulBroadcastID = n),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(r) {
            (this.m_webAPIInterface = new U.D(
              pr.TS.WEBAPI_BASE_URL,
              pr.iA.webapi_token,
            )),
              (this.m_ulBroadcastChannelID = r),
              (this.m_strUserSteamID = pr.iA.steamid),
              this.InitTextFilter(),
              this.JoinChannelChat();
          }
          Stop() {
            this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
          }
          async SendMessage(r) {
            const n = r.trim();
            if (n.length != 0)
              try {
                let h, I, N;
                if (this.m_webApiToken) {
                  const Mr = new FormData();
                  Mr.append("chat_id", this.m_ulChatID),
                    Mr.append("message", n),
                    Mr.append("instance_id", this.m_unInstanceID.toString()),
                    (I = await f().post(
                      `${pr.TS.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
                      Mr,
                    )),
                    (N = I.data && I.data.response);
                } else {
                  const Mr = j.w.Init(H.Lw);
                  Mr.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    message: n,
                    instance_id: this.m_unInstanceID.toString(),
                  }),
                    (h = await H.DK.PostChatMessage(
                      this.m_webAPIInterface.GetServiceTransport(),
                      Mr,
                    )),
                    (N = {
                      result: h.GetEResult(),
                      cooldown_time_seconds: h.Body().cooldown_time_seconds(),
                      in_game: h.Body().in_game(),
                      persona_name: h.Body().persona_name(),
                    });
                }
                if (N && N.result && N.result != er.R) {
                  let Mr = "";
                  N.result == er.f4
                    ? (Mr = (0, lr.we)("#BroadcastChat_YouMuted"))
                    : N.result == er.h_
                      ? (Mr = (0, lr.we)(
                          "#BroadcastChat_Cooldown",
                          N.cooldown_time_seconds,
                        ))
                      : (Mr = (0, lr.we)("#BroadcastChat_FailedToSendMsg", n)),
                    this.m_rgChatMessages.push({
                      type: B.X8.Error,
                      msg: Mr,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: N.in_game,
                      persona_name: N.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = N.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: B.X8.Error,
                  msg: (0, lr.we)("#BroadcastChat_FailedToSendMsg", n),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async RequestChatInfo(r) {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const n = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: (0, pr.KC)(),
                },
                h = await f().get(
                  `${pr.TS.CHAT_BASE_URL}broadcast/getchatinfo`,
                  { params: n, withCredentials: !0, cancelToken: r?.token },
                );
              (!r || !r.token.reason) &&
                (0, ar.h5)(() => {
                  const I = h.data;
                  (this.m_strChatURL = I.view_url_template),
                    (this.m_ulChatID = I.chat_id),
                    (this.m_strFlairGroupID =
                      I.flair_group_ids && I.flair_group_ids[0]),
                    I.blocked && console.log("User is blocked from chat"),
                    I.steamid && (this.m_strUserSteamID = I.steamid),
                    I.token && (this.m_webApiToken = I.token),
                    I.emoticons && this.SetOwnedEmoticons(I.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: B.X8.Notification,
                        msg: (0, lr.we)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    I.moderators_steamid &&
                      I.moderators_steamid.forEach((N) =>
                        this.m_mapBroadcastModeratorUsers.set(N, !0),
                      ),
                    (this.m_chatScheduledFunc = new Be.LU()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (n) {
              console.error(n), console.log("Failed to get chat info!");
            }
          }
          async JoinChannelChat() {
            try {
              const r = j.w.Init(D);
              r.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let n = await Ie.JoinChat(
                this.m_webAPIInterface.GetServiceTransport(),
                r,
              );
              if (!n.Body().chat_id || !n.Body().view_url_template) {
                console.log("Failed to join channel chat");
                return;
              }
              (this.m_strChatURL = n.Body().view_url_template()),
                (this.m_ulChatID = n.Body().chat_id()),
                (this.m_strFlairGroupID =
                  n.Body().flair_group_ids() && n.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: B.X8.Notification,
                  msg: (0, lr.we)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new Be.LU()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (r) {
              console.error(r), console.log("Failed to join chat!");
            }
          }
          async FetchChatModerators() {
            const r = j.w.Init(Me);
            r.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const h = (
                await Ie.GetChatModerators(
                  this.m_webAPIInterface.GetServiceTransport(),
                  r,
                )
              )
                .Body()
                .results(),
              I = new Map();
            h.forEach((N) => {
              I.set(N.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = I);
          }
          ReplaceChatAnnouncementIfAny(r) {
            r.announcements?.length > 0
              ? ((this.m_rgAnnouncements = r.announcements.reverse()),
                (!this.m_latestAnnouncement ||
                  JSON.stringify(this.m_latestAnnouncement) !=
                    JSON.stringify(
                      this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
                    )) &&
                  (this.m_latestAnnouncement =
                    this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1]))
              : this.m_rgAnnouncements.length > 0 &&
                ((this.m_rgAnnouncements = []),
                (this.m_latestAnnouncement = null));
          }
          async RequestLoop() {
            const r = {},
              n = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString(),
              );
            n == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (r.t = this.m_nNextChatTS);
            try {
              const I = (await f().get(n, { params: r })).data;
              this.m_cConsecutiveErrors = 0;
              const N = I.messages
                .map((ce) => ({
                  ...ce,
                  type: B.X8.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter((ce) => !this.IsUserMutedLocally(ce.steamid));
              this.m_rgChatMessages.push(...N),
                this.ReplaceChatAnnouncementIfAny(I);
              const Mr = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > Mr &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - Mr,
                  ),
                I.muted)
              )
                for (const ce of I.muted) {
                  const je =
                    ce.muted == this.m_strUserSteamID
                      ? (0, lr.we)("#BroadcastChat_YouMuted", ce.persona_name)
                      : (0, lr.we)("#BroadcastChat_UserMuted", ce.persona_name);
                  this.m_rgChatMessages.push({
                    type: B.X8.Notification,
                    msg: je,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (I.remove_msgs)
                for (const ce of I.remove_msgs)
                  this.RemoveUserMessagesLocal(ce.steamid);
              let ne = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                I.initial_delay
              ) {
                if (I.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + I.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = I.next_request),
                  (ne = I.initial_delay);
              } else {
                if (I.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  I.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = I.next_request),
                  (ne =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = ne),
                ne < 0 && (ne = 0),
                this.m_chatScheduledFunc.Schedule(ne, this.RequestLoop);
            } catch {
              if (
                (console.log(
                  "Failed to get chat messages. Previous sleep set to: " +
                    this.m_nLastSleepMS +
                    " firstReq: " +
                    this.m_tsFirstRequest +
                    " firstFromRequest: " +
                    this.m_nFromFirstRequestMS +
                    " nudge: " +
                    this.m_nNudgeFactorMS,
                ),
                this.m_cConsecutiveErrors++,
                (this.m_nNudgeFactorMS += e),
                this.m_cConsecutiveErrors >= mt)
              ) {
                if (this.m_tsFirstRequest == null) {
                  this.m_rgChatMessages.push({
                    type: B.X8.Error,
                    msg: (0, lr.we)("#BroadcastChat_UnableToJoinChat"),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                  return;
                }
                (this.m_cConsecutiveErrors = 0),
                  (this.m_bReconnecting = !0),
                  this.SyncChat();
              }
              this.m_chatScheduledFunc.Schedule(Er, this.RequestLoop);
            }
          }
          GetUserEmoticons() {
            return this.m_regexUserEmoticons;
          }
          SetOwnedEmoticons(r) {
            let n = [];
            for (let I = 0; I < r.length; I++) {
              let N = r[I];
              N.length >= 2 && N[0] == ":"
                ? n.push(N.substr(1, N.length - 2))
                : n.push(N);
            }
            let h = ":(" + n.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(h, "g");
          }
          async UpdateBroadcastChatModerator(r, n, h) {
            {
              const I = new FormData();
              I.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                I.append("moderatorsteamid", r),
                I.append("bAdd", n ? "1" : "0"),
                I.append("sessionid", (0, pr.KC)());
              try {
                await f().post(
                  `${pr.TS.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  I,
                ),
                  this.m_mapBroadcastModeratorUsers.set(r, n);
                const N = (0, lr.we)(
                  n
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  h,
                );
                this.m_rgChatMessages.push({ type: B.X8.Notification, msg: N });
              } catch {
                const N = (0, lr.we)(
                  n
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  h,
                );
                this.m_rgChatMessages.push({ type: B.X8.Error, msg: N });
              }
            }
          }
          async UpdateUserChatBan(r, n, h, I, N, Mr) {
            const ne = this.m_ulBroadcastSteamID,
              ce = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const je = j.w.Init(G);
              je.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: r,
                duration: h * 3600,
                permanent: I,
                undo: Mr,
              }),
                await Ie.AddChatBan(
                  this.m_webAPIInterface.GetServiceTransport(),
                  je,
                );
            } else {
              const je = new FormData();
              je.append("broadcaststeamid", ne),
                je.append("issuersteamid", ce),
                je.append("chattersteamid", r),
                je.append("bantype", n),
                je.append("duration", h.toString()),
                je.append("perm", I ? "1" : "0"),
                je.append("sessionid", (0, pr.KC)());
              try {
                await f().post(
                  `${pr.TS.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  je,
                ),
                  n == H.sW.rx
                    ? delete this.m_mapMutedUsers[r]
                    : (this.m_mapMutedUsers[r] = N);
              } catch {
                console.log("Failed to update mute for " + N);
              }
            }
          }
          async MuteUserForSession(r, n) {
            if (r == this.m_strUserSteamID || this.m_ulBroadcastSteamID == r)
              return;
            let h = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[r]) {
              this.m_mapMutedUsers[r] = n;
              try {
                if (this.m_webApiToken) {
                  const I = new FormData();
                  I.append("chat_id", this.m_ulChatID),
                    I.append("user_steamid", r),
                    I.append("muted", "1"),
                    await f().post(
                      `${pr.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      I,
                    );
                } else {
                  const I = j.w.Init(H.hW);
                  I.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: r,
                    muted: !0,
                  }),
                    await H.DK.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      I,
                    );
                }
              } catch {
                h &&
                  (this.m_rgChatMessages.push({
                    type: B.X8.Error,
                    msg: (0, lr.we)("#BroadcastChat_UserMuteFailed", n),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[r]);
              }
            }
            h ||
              this.m_rgChatMessages.push({
                type: B.X8.Notification,
                msg: (0, lr.we)("#BroadcastChat_UserMutedLocal", n),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          async UnmuteUserForSession(r, n) {
            if (r == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[r] && delete this.m_mapMutedUsers[r],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                if (this.m_webApiToken) {
                  const I = new FormData();
                  I.append("chat_id", this.m_ulChatID),
                    I.append("user_steamid", r),
                    I.append("muted", "0"),
                    await f().post(
                      `${pr.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      I,
                    );
                } else {
                  const I = j.w.Init(H.hW);
                  I.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: r,
                    muted: !1,
                  }),
                    await H.DK.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      I,
                    );
                }
                this.m_rgChatMessages.push({
                  type: B.X8.Notification,
                  msg: (0, lr.we)("#BroadcastChat_UserUnmutedLocal", n),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch {
                this.m_rgChatMessages.push({
                  type: B.X8.Error,
                  msg: (0, lr.we)("#BroadcastChat_UserUnmuteFailed", n),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: B.X8.Notification,
                msg: (0, lr.we)("#BroadcastChat_UserUnmutedLocal", n),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          RemoveUserMessagesLocal(r) {
            this.m_rgChatMessages = this.m_rgChatMessages.filter(
              (n) => n.steamid !== r,
            );
          }
          async RemoveUserMessagesServer(r, n) {
            if (r != this.m_strUserSteamID)
              try {
                if (this.m_webApiToken) {
                  const h = new FormData();
                  h.append("chat_id", this.m_ulChatID),
                    h.append("user_steamid", r),
                    await f().post(
                      `${pr.TS.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
                      h,
                    );
                } else {
                  const h = j.w.Init(H.ku);
                  h.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: r,
                  }),
                    await H.DK.RemoveUserChatText(
                      this.m_webAPIInterface.GetServiceTransport(),
                      h,
                    );
                }
              } catch {
                this.m_rgChatMessages.push({
                  type: B.X8.Error,
                  msg: (0, lr.we)("#BroadcastChat_RemoveMessagesFailed", n),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async UpdateChatMessageFlair(r) {
            if (this.m_webApiToken) {
              const n = new FormData();
              n.append("chat_id", this.m_ulChatID),
                n.append("flair", `^${this.m_strFlairGroupID}^:${r}:`),
                await f().post(
                  `${pr.TS.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
                  n,
                );
            } else {
              const n = j.w.Init(H.Mn);
              n.SetBodyFields({
                chat_id: this.m_ulChatID,
                flair: `^${this.m_strFlairGroupID}^:${r}:`,
              }),
                await H.DK.UpdateChatMessageFlair(
                  this.m_webAPIInterface.GetServiceTransport(),
                  n,
                );
            }
          }
          IsUserMutedLocally(r) {
            return !!this.m_mapMutedUsers[r];
          }
          BIsUserBroadcastModerator(r) {
            return this.m_mapBroadcastModeratorUsers.has(r);
          }
          IsUserBroadcaster(r) {
            return r === this.m_ulBroadcastSteamID;
          }
          SyncChat() {
            (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_rgChatMessages = []);
          }
        }
        Ne([ar.sH], Ze.prototype, "m_mapChannelModeratorUsers", 2),
          Ne([ar.sH], Ze.prototype, "m_mapBroadcastModeratorUsers", 2),
          Ne([ar.sH], Ze.prototype, "m_nRateLimitSeconds", 2),
          Ne([ar.sH], Ze.prototype, "m_bRateLimited", 2),
          Ne([ar.sH], Ze.prototype, "m_rgChatMessages", 2),
          Ne([ar.sH], Ze.prototype, "m_latestAnnouncement", 2),
          Ne([De.o], Ze.prototype, "FetchChatModerators", 1),
          Ne([De.o], Ze.prototype, "RequestLoop", 1),
          Ne([De.o], Ze.prototype, "MuteUserForSession", 1);
        var ot = d(18614),
          wt = d(90024),
          $e = d.n(wt),
          Xe = d(34360),
          yt = d(16412),
          Mt = d(96197),
          ct = d(22714),
          pt = d(86390),
          vt = d(34736),
          jt = d(33543),
          Ve = d.n(jt);
        const zt = () =>
            (0, s.jsx)("div", {
              className: Ve().FriendsListInsetShadowCtn,
              children: (0, s.jsx)("div", {
                className: Ve().FriendListInsetShadowTop,
              }),
            }),
          xt = () =>
            (0, s.jsx)("div", {
              className: Ve().FriendsListInsetShadowCtn,
              children: (0, s.jsx)("div", {
                className: Ve().FriendListInsetShadowBottom,
              }),
            });
        var Ke = d(36118),
          pe = d(36707),
          Se = d(30096),
          Ot = d(63508),
          ye = d.n(Ot),
          We = d(74498),
          ut = d(29630),
          It = d(37656),
          Dt = d(80913),
          Ce = d(53107),
          dt = d(53113),
          Bt = d(8287),
          ke = d.n(Bt);
        function Ft(v) {
          const { latestAnnouncement: r } = v;
          return r?.type == "giveaway_draw"
            ? (0, s.jsx)(gt, { latestWinner: r })
            : null;
        }
        function gt(v) {
          const {
              latestWinner: r,
              className: n,
              strActionButton: h,
              strActionClassname: I,
            } = v,
            N = r.winners_info?.length > 0 ? r.winners_info[0].accountid : 0,
            [Mr, ne] = k.useState(N),
            ce =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            je = (0, dt.L$)(
              `${ut.zU.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            Le = (0, dt.L$)(
              `${ut.zU.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            ),
            He = (0, It.w)(r.giveaway_gid);
          let Ue =
            He.bLoadingGiveawayInfo || He.closed
              ? null
              : He.seconds_until_drawing;
          const Ge = N === pr.iA.accountid;
          k.useEffect(() => {
            Mr != N && setTimeout(() => ne(N), 1500);
          }, [N, Mr]);
          const it =
            r.winners_info?.length > 0 && r.winners_info[0].persona
              ? r.winners_info[0].persona
              : (0, lr.we)("#GA2022_UnknownPersonaName");
          return (0, s.jsx)(Ce.uU, {
            href: ce,
            className: n,
            children: (0, s.jsxs)("div", {
              className: (0, pe.A)({
                [ke().GiveawayWinnerBox]: !0,
                [ke().GiveawayWinnerAnnounced]: Mr === N,
              }),
              children: [
                (0, s.jsx)("div", {
                  className: ke().GiveawayWinnerBoxLeft,
                  children: (0, s.jsx)("img", {
                    className: ke().GiveawayWinnerArt,
                    src: je,
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: ke().GiveawayWinnerBoxRight,
                  children: [
                    Mr !== N &&
                      (0, s.jsx)("div", {
                        className: (0, pe.A)(ke().GiveawayWinnerText),
                        children: (0, lr.PP)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, s.jsx)("br", {}),
                        ),
                      }),
                    Mr === N &&
                      (0, s.jsx)("div", {
                        className: (0, pe.A)(
                          ke().GiveawayWinnerText,
                          ke().GiveawayWinnerAnnounced,
                        ),
                        children: (0, lr.PP)(
                          Ge
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          it,
                          (0, s.jsx)("br", {}),
                        ),
                      }),
                    Ue > 0 &&
                      (0, s.jsx)("div", {
                        className: ke().GiveawayWinnerCountdown,
                        children: (0, lr.PP)("#GA2022_Congrats_NextDraw", Ue),
                      }),
                  ],
                }),
                (0, s.jsx)("img", {
                  className: ke().GiveawayWinnerQuestion,
                  src: Le,
                }),
                !!h &&
                  (0, s.jsx)("div", {
                    className: I,
                    children: Ge ? (0, lr.we)("#GA2022_YouWonNextSteps") : h,
                  }),
              ],
            }),
          });
        }
        function Et(v, r) {
          const [n, h] = (0, t.q3)(() => [
              r?.steamid,
              We.es.GetBroadcast(r?.steamid)?.m_ulBroadcastID,
            ]),
            [I, N] = k.useState(null);
          k.useEffect(() => {
            let ne = null;
            return (
              (n || h) &&
                ((ne = x.Get().GetOrCreateChat(h, n)),
                ne.StartForSteamID(n, h),
                N(ne)),
              () => {
                ne && (ne.Stop(), N(null));
              }
            );
          }, [n, h]);
          const Mr = (0, t.q3)(() => I?.m_latestAnnouncement || null);
          if (Mr?.type == "giveaway_draw") {
            const ne = Mr;
            if (ne.giveaway_gid == v) return ne;
          }
          return null;
        }
        function At(v) {
          const { gidGiveaway: r, stream: n } = v,
            h = Et(r, n),
            I = (0, Dt.h)("GameAwardDrop2022");
          let N = null,
            Mr = ke().GiveawayRegisterButton;
          return (
            pr.iA.logged_in
              ? I?.registered
                ? ((N = (0, lr.we)("#GA2022_AlreadyRegistered")),
                  (Mr = ke().GiveawayAlreadyRegistered))
                : (N = (0, lr.we)("#GA2022_RegisterToWin"))
              : (N = (0, lr.we)("#GA2022_RegisterLoginToWin")),
            h
              ? (0, s.jsx)(gt, {
                  latestWinner: h,
                  className: ke().InViewerBar,
                  strActionButton: N,
                  strActionClassname: Mr,
                })
              : null
          );
        }
        var gr = d(71421),
          zr = Object.defineProperty,
          Ur = Object.getOwnPropertyDescriptor,
          _e = (v, r, n, h) => {
            for (
              var I = h > 1 ? void 0 : h ? Ur(r, n) : r, N = v.length - 1, Mr;
              N >= 0;
              N--
            )
              (Mr = v[N]) && (I = (h ? Mr(r, n, I) : Mr(I)) || I);
            return h && I && zr(r, n, I), I;
          };
        const kt = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          an = null,
          $t = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function Tt(v, r, n) {
          return n
            ? "presenter"
            : r.GetBroadcastSteamID() === v
              ? "broadcaster"
              : r.BIsUserBroadcastModerator(v)
                ? "moderator"
                : "";
        }
        const Gt = (v) => {
            const { userType: r, msg: n, presenterInfo: h } = v;
            if (r === "presenter")
              return (0, s.jsx)("span", {
                children: (0, s.jsx)(vt.fI, {
                  name: h.name,
                  title: h.title,
                  photo: h.photo,
                  company: h.company,
                  bioString: h.bio,
                  children: (0, s.jsx)("a", {
                    className: (0, pe.A)(
                      ye().MessageName,
                      ye().MessagePresenter,
                    ),
                    href: pr.TS.COMMUNITY_BASE_URL + "profiles/" + n.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: n.persona_name,
                  }),
                }),
              });
            {
              let I = null;
              return (
                r === "broadcaster"
                  ? (I = ye().MessageBroadcaster)
                  : r === "moderator" && (I = ye().MessageModerator),
                (0, s.jsx)("span", {
                  children: (0, s.jsx)("a", {
                    className: (0, pe.A)(ye().MessageName, I),
                    href: pr.TS.COMMUNITY_BASE_URL + "profiles/" + n.steamid,
                    "data-miniprofile": "s" + n.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: n.persona_name,
                  }),
                })
              );
            }
          },
          qt = (v) => {
            switch (v.userType) {
              case "presenter":
                return (0, s.jsx)(gr.Gq, {
                  toolTipContent: (0, lr.we)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, s.jsx)("span", {
                    className: ye().RoleFlairContainer,
                    children: (0, s.jsx)(Ke.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, s.jsx)(gr.Gq, {
                  toolTipContent: (0, lr.we)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, s.jsx)("span", {
                    className: ye().RoleFlairContainer,
                    children: (0, s.jsx)(Ke.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, s.jsx)(gr.Gq, {
                  toolTipContent: (0, lr.we)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, s.jsx)("span", {
                    className: ye().RoleFlairContainer,
                    children: (0, s.jsx)(Ke.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let Te = class extends k.Component {
          constructor(v) {
            super(v), (0, ar.Gn)(this);
          }
          m_chat = null;
          messagesContainer = k.createRef();
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(v) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== v.steamID ||
                this.props.broadcastID !== v.broadcastID ||
                this.props.broadcastChannelID !== v.broadcastChannelID) &&
                this.StartChat();
          }
          componentWillUnmount() {
            this.m_chat && this.m_chat.Stop();
          }
          StartChat() {
            if (
              (this.m_chat && this.m_chat.Stop(),
              (this.m_chat = x
                .Get()
                .GetOrCreateChat(
                  this.props.broadcastChannelID,
                  this.props.steamID,
                )),
              this.props.broadcastChannelID)
            )
              this.m_chat.StartForChannel(this.props.broadcastChannelID);
            else if (
              this.props.steamID &&
              this.props.steamID &&
              (this.props.broadcastID || this.props.globalChat)
            ) {
              let v = this.props.broadcastID || "0";
              this.m_chat.StartForSteamID(this.props.steamID, v),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(v) {
            return !!v.match($t);
          }
          AddLinksEmoticons(v, r) {
            let n = kt;
            r && (n = this.m_chat.GetUserEmoticons());
            let h = v.split(kt);
            const I = [];
            for (let N = 0; N < h.length; N += 1)
              N % 2 === 1
                ? I.push((0, s.jsx)(Mt.n, { emoticon: h[N], large: !0 }, N))
                : I.push(h[N]);
            return I;
          }
          HandleScroll(v) {
            const r = this.props.bInvertLayout
              ? v.currentTarget.scrollTop < 6
              : v.currentTarget.scrollTop + v.currentTarget.clientHeight >=
                v.currentTarget.scrollHeight - 6;
            this.m_chat && (this.m_chat.m_bAutoScroll = r);
          }
          ScrollToNewestMessages() {
            this.messagesContainer &&
              this.messagesContainer.current &&
              (this.messagesContainer.current.scrollTop = this.props
                .bInvertLayout
                ? 0
                : this.messagesContainer.current.scrollHeight);
          }
          OnContextMenu(v, r) {
            if (r.type !== B.X8.Chat) return null;
            const n = [],
              h = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
              I = this.m_chat.BIsUserBroadcastModerator(
                this.m_chat.GetUserSteamID(),
              );
            return (
              (pr.iA && pr.iA.is_support) || h || I
                ? n.push(
                    (0, s.jsx)(
                      Xe.kt,
                      {
                        onSelected: () =>
                          this.m_chat.RemoveUserMessagesServer(
                            r.steamid,
                            r.persona_name,
                          ),
                        children: (0, lr.we)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, s.jsx)(
                      Xe.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            H.sW.XP,
                            12,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, lr.we)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, s.jsx)(
                      Xe.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            H.sW.XP,
                            24,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, lr.we)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, s.jsx)(
                      Xe.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            H.sW.XP,
                            168,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, lr.we)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, s.jsx)(
                      Xe.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            H.sW.XP,
                            0,
                            !0,
                            r.persona_name,
                          ),
                        children: (0, lr.we)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, s.jsx)(
                      Xe.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            H.sW.rx,
                            0,
                            !1,
                            r.persona_name,
                            !0,
                          ),
                        children: (0, lr.we)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : this.m_chat.IsUserMutedLocally(r.steamid)
                  ? n.push(
                      (0, s.jsx)(
                        Xe.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UnmuteUserForSession(
                              r.steamid,
                              r.persona_name,
                            ),
                          children: (0, lr.we)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : n.push(
                      (0, s.jsx)(
                        Xe.kt,
                        {
                          onSelected: () =>
                            this.m_chat.MuteUserForSession(
                              r.steamid,
                              r.persona_name,
                            ),
                          children: (0, lr.we)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((pr.iA && pr.iA.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                r.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(r.steamid)
                  ? n.push(
                      (0, s.jsx)(
                        Xe.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              r.steamid,
                              !1,
                              r.persona_name,
                            ),
                          children: (0, lr.we)(
                            "#BroadcastChat_Remove_Moderator",
                          ),
                        },
                        "removemod",
                      ),
                    )
                  : n.push(
                      (0, s.jsx)(
                        Xe.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              r.steamid,
                              !0,
                              r.persona_name,
                            ),
                          children: (0, lr.we)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              n.length
                ? (0, M.lX)(
                    (0, s.jsxs)(Xe.tz, {
                      children: [
                        (0, s.jsxs)("div", {
                          className: ye().SelectedUserNameCtn,
                          children: [
                            (0, lr.we)("#BroadcastChat_User"),
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)("span", {
                              className: ye().SelectedUserName,
                              children: r.persona_name,
                            }),
                          ],
                        }),
                        n,
                      ],
                    }),
                    v,
                  )
                : null
            );
          }
          GetTypeClassName(v) {
            return v.type === B.X8.Notification
              ? ye().MessageNotification
              : v.type === B.X8.Error
                ? ye().MessageError
                : ye().MessageChat;
          }
          FormatMessage(v, r) {
            if (v.type === B.X8.Chat) {
              let n = r ? r.FilterText(v.steamid, v.msg) : v.msg;
              return this.AddLinksEmoticons(n, !1);
            } else return v.msg;
          }
          RenderUserChatLine(v, r, n) {
            let h = n ? n.get(v.steamid) : void 0;
            const I = v.type === B.X8.Chat ? Tt(v.steamid, this.m_chat, h) : "";
            return (0, s.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(v),
                onContextMenu: (N) => this.OnContextMenu(N, v),
                children: [
                  v.type === B.X8.Chat && (0, s.jsx)(qt, { userType: I }),
                  v.flair &&
                    (0, s.jsx)("span", {
                      className: ye().FlairContainer,
                      children: this.AddLinksEmoticons(v.flair, !1),
                    }),
                  v.type === B.X8.Chat &&
                    (0, s.jsx)(Gt, { userType: I, msg: v, presenterInfo: h }),
                  v.type === B.X8.Chat &&
                    this.m_chat.GetBroadcastSteamID() === v.steamid &&
                    (0, s.jsx)("span", {
                      className: `${ye().MessageNotification} ${ye().MessageContents}`,
                      children: ` (${(0, lr.we)("#BroadcastChat_Broadcaster")})`,
                    }),
                  v.type === B.X8.Chat &&
                    this.m_chat.m_mapChannelModeratorUsers.get(v.steamid) &&
                    (0, s.jsx)("span", {
                      className: `${ye().MessageNotification} ${ye().MessageContents}`,
                      children: ` (${(0, lr.we)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, s.jsxs)("span", {
                    className: `${ye().MessageContents} ${this.AddLinksEmoticons(v.msg, !1).filter((N) => N && typeof N == "string").length ? "" : ye().EmoticonsOnly}`,
                    children: [
                      v.type === B.X8.Chat ? " : " : "",
                      this.FormatMessage(v, this.m_chat.TextFilterStore),
                    ],
                  }),
                ],
              },
              v.instance_id + "_" + v.client_ts + "_" + r,
            );
          }
          render() {
            const {
                hidden: v,
                bPartnerMemberOnlyChat: r,
                bInvertLayout: n,
              } = this.props,
              h = this.m_chat ? this.m_chat.m_rgChatMessages : [],
              I = n ? h.reverse() : h,
              N = this.m_chat
                ? ot.l.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              Mr = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, s.jsxs)("div", {
              className: (0, pe.A)(ye().ChatPanel, "ChatPanel"),
              style: v ? { display: "none" } : void 0,
              children: [
                (0, s.jsx)(Ft, { latestAnnouncement: Mr }),
                n &&
                  !!this.m_chat &&
                  (0, s.jsx)(Nt, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: r,
                  }),
                (0, s.jsx)(zt, {}),
                (0, s.jsx)("div", {
                  className: (0, pe.A)(
                    `${ye().ChatMessages} ${$e().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children: I.map((ne, ce) =>
                    this.RenderUserChatLine(ne, ce, N),
                  ),
                }),
                (0, s.jsx)(xt, {}),
                !n &&
                  !!this.m_chat &&
                  (0, s.jsx)(Nt, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: r,
                  }),
              ],
            });
          }
        };
        _e([ar.sH], Te.prototype, "m_chat", 2),
          _e([Se.oI], Te.prototype, "StartChat", 1),
          _e([Se.oI], Te.prototype, "HandleScroll", 1),
          _e([Se.oI], Te.prototype, "OnContextMenu", 1),
          _e([Se.oI], Te.prototype, "RenderUserChatLine", 1),
          (Te = _e([o.PA], Te));
        function Nt(v) {
          const { oChat: r, emoticonStore: n, bPartnerMemberOnlyChat: h } = v;
          return h && (!pr.iA?.logged_in || !pr.iA?.is_partner_member)
            ? (0, s.jsx)(_t, {})
            : pr.iA?.logged_in
              ? (0, s.jsx)(Rt, { oChat: r, emoticonStore: n })
              : null;
        }
        function Rt(v) {
          const { oChat: r, emoticonStore: n } = v,
            [h, I] = k.useState(""),
            N = k.useRef(void 0),
            Mr = (0, t.q3)(() => r.m_bRateLimited),
            ne = k.useCallback(
              (Ue) => {
                !Ue.shiftKey &&
                  Ue.charCode === 13 &&
                  (r.m_bRateLimited || (r.SendMessage(h), I("")),
                  Ue.preventDefault());
              },
              [r, h],
            ),
            ce = k.useCallback(
              (Ue, Ge = !1) => {
                I(h + `\u02D0${Ue}\u02D0`), N?.current && N.current.focus();
              },
              [h, N],
            ),
            je = () => {
              r.SendMessage(h), I("");
            };
          let Le = Mr || h.trim().length == 0,
            He = (0, pe.A)(
              $e().chatSubmitButton,
              h.length == 0 && $e().disabled,
            );
          return (0, s.jsx)("div", {
            className: (0, pe.A)(ye().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, s.jsxs)("div", {
              className: (0, pe.A)(ye().ChatEntry, "ChatEntry"),
              children: [
                (0, s.jsxs)("form", {
                  className: `${$e().chatEntryControls}`,
                  children: [
                    (0, s.jsx)("textarea", {
                      className: $e().chatTextarea,
                      placeholder: (0, lr.we)("#BroadcastChat_EnterResponse"),
                      onKeyPress: ne,
                      onChange: (Ue) => I(Ue.target.value),
                      value: h,
                      ref: N,
                    }),
                    Mr &&
                      (0, s.jsx)(Ct, {
                        nSeconds: r.m_nRateLimitSeconds,
                        bRateLimited: r.m_bRateLimited,
                      }),
                    (0, s.jsx)("button", {
                      className: He,
                      title: (0, lr.we)("#ChatEntryButton_Submit"),
                      disabled: Le,
                      onClick: je,
                      children: (0, s.jsx)(Ke.XTb, {}),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  style: { height: "50px" },
                  className: `${$e().chatEntryActionsContainer}`,
                  children: (0, s.jsxs)("div", {
                    className: $e().chatEntryActionsGroup,
                    children: [
                      (0, s.jsx)(ct.A, {
                        disabled: !1,
                        OnEmoticonSelected: ce,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: n,
                      }),
                      (0, s.jsx)(Vt, { ...v, textInputRef: N }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function Vt(v) {
          const { oChat: r, emoticonStore: n, textInputRef: h } = v;
          return r.m_strFlairGroupID &&
            n.flair_list &&
            n.GetFlairListByGroupID(r.m_strFlairGroupID)?.length
            ? (0, s.jsx)(ct.A, {
                disabled: !1,
                OnEmoticonSelected: (I) => {
                  r.UpdateChatMessageFlair(I), h?.current && h.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: n,
                strFlairGroupID: r.m_strFlairGroupID,
                title: (0, lr.we)("#ChatEntryButton_Flair"),
                buttonIcon: (0, s.jsx)(Ke.P7r, {}),
              })
            : null;
        }
        class Ct extends k.Component {
          render() {
            return (0, s.jsx)("div", {
              className: ye().TimedProgressBarContainer,
              children: (0, s.jsxs)("div", {
                className: ye().wrapper,
                children: [
                  (0, s.jsx)("div", {
                    className: `${ye().spinner} ${ye().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, s.jsx)("div", {
                    className: `${ye().filler} ${ye().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, s.jsx)("div", {
                    className: ye().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function _t(v) {
          return (0, s.jsxs)("div", {
            className: ye().Description,
            children: [
              (0, s.jsx)("div", {
                className: ye().LogInPrompt,
                children: (0, lr.we)("#Broadcast_PartnerChat_Login"),
              }),
              !pr.iA.logged_in &&
                (0, s.jsx)(yt.$n, {
                  onClick: pt.vg,
                  className: (0, pe.A)(ye().SignInButton),
                  children: (0, lr.we)("#Login_SignIn"),
                }),
            ],
          });
        }
        var ri = d(7132),
          ei = d(83482),
          ti = d(56062),
          ii = d(84676),
          ft = d(18654),
          ni = d(13004),
          ht = d(95414),
          si = d(72865),
          li = d(85599),
          ai = d(43087),
          Pt = d.n(ai),
          Wt = d(29522),
          rt = d(40358),
          mi = d(47875),
          Kt = d(21721),
          oi = d(3348);
        const ci = (0, o.PA)((v) => {
          const { appid: r } = v,
            n = (0, si.n9)(),
            h = (0, k.useRef)({ include_assets: !0, include_release: !0 }),
            I = (0, Wt.$5)(r),
            { data: N } = (0, rt.J$)(I),
            { data: Mr } = (0, rt.lv)(I),
            { data: ne } = (0, rt.by)(I),
            [ce, je] = (0, ii.t7)(r, h.current);
          let Le = (0, pe.A)(
              Pt().StoreSaleWidgetContainer_mini,
              "StoreSaleWidgetContainer_mini",
            ),
            He = Pt().StoreSaleWidgetImage_mini,
            Ue = Pt().StoreSaleImage_mini;
          if (N == null)
            return (0, s.jsx)("div", {
              className: Le,
              children: (0, s.jsx)(li.t, { size: "medium" }),
            });
          if (N == null || !N.name)
            return (0, s.jsx)("div", {
              className: ft.StoreSaleWidgetEmptyContainer,
            });
          const Ge = N.type != ti.uE.gQ,
            it = (0, ei.wJ)((0, mi._)(N), n);
          return (0, s.jsxs)("div", {
            className: Le,
            children: [
              (0, s.jsx)("a", {
                href: it,
                target: pr.TS.IN_CLIENT ? void 0 : "_blank",
                children: (0, s.jsx)(ht.j, {
                  id: I,
                  children: (0, s.jsx)("div", {
                    className: He,
                    children:
                      Mr &&
                      (0, s.jsx)("img", {
                        className: Ue,
                        src: (0, Kt.b0)(Mr, "small_capsule"),
                        alt: N.name,
                      }),
                  }),
                }),
              }),
              (0, s.jsxs)("div", {
                className: ft.StoreSaleBroadcastWidgetRight,
                children: [
                  (0, s.jsx)("a", {
                    href: it,
                    target: pr.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, s.jsx)(ht.j, {
                      id: I,
                      children: (0, s.jsx)("div", {
                        className: (0, pe.A)(
                          ft.StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                        children: N.name,
                      }),
                    }),
                  }),
                  ne &&
                    (0, s.jsx)("div", {
                      className: ft.StoreSaleWidgetRelease,
                      children: (0, oi.CC)(ne),
                    }),
                  !!Ge && (0, s.jsx)(ni.w, { id: I, bShowDemoButton: !0 }),
                ],
              }),
            ],
          });
        });
        var Lt = d(99412),
          et = d(46477),
          tt = d(61639),
          Ut = d(55051),
          Oe = d(25317),
          Ht = d(10142),
          ui = d(98932),
          di = d(39239),
          gi = d(64377),
          Xt = d(19730),
          Zt = d(60480),
          fi = d(53120),
          Ar = d.n(fi);
        const hi = (0, o.PA)((v) => {
          const { event: r } = v,
            n = r.clanSteamID.GetAccountID(),
            h = !r || !r.jsondata || !r.jsondata.broadcast_item_drops_enabled,
            I = (0, k.useRef)(null),
            [N, Mr] = (0, k.useState)(
              r ? Zt.pF.GetCreatorHome(r.clanSteamID) : null,
            );
          if (
            ((0, k.useEffect)(() => {
              const ce = f().CancelToken.source();
              return (
                (I.current = ce.cancel),
                (async () => {
                  const Le = W.b.InitFromClanID(n),
                    He = await Zt.pF.LoadCreatorHome(Le, !1, ce);
                  ce.token.reason || Mr(He);
                })(),
                () => {
                  I.current && I.current("BroadcastDropsDisplay: unmounting");
                }
              );
            }, [n]),
            h || !N || !N.BIsLoaded())
          )
            return null;
          const ne =
            pr.TS.COMMUNITY_BASE_URL +
            "gid/" +
            r.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            r.jsondata.broadcast_item_drops_details_event_gid;
          return (0, s.jsx)("div", {
            className: Ar().item_drop_ctn,
            children: (0, s.jsxs)("div", {
              children: [
                (0, lr.we)(
                  N.GetName().length > 0
                    ? r.jsondata.broadcast_item_drops_min_watch_time_minutes %
                        60 ==
                      0
                      ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                      : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                    : r.jsondata.broadcast_item_drops_min_watch_time_minutes %
                          60 ==
                        0
                      ? "#SalePage_WatchForDrop_Hours_Developer"
                      : "#SalePage_WatchForDrop_Minutes_Developer",
                  r.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                    0
                    ? r.jsondata.broadcast_item_drops_min_watch_time_minutes /
                        60
                    : r.jsondata.broadcast_item_drops_min_watch_time_minutes,
                  N.GetName(),
                ),
                !!r.jsondata.broadcast_item_drops_details_clan_accountid &&
                  (0, s.jsx)("a", {
                    href: ne,
                    target: pr.TS.IN_CLIENT ? "" : "_blank",
                    children: (0, lr.we)("#SalePage_WatchForDrop_LearnMore"),
                  }),
              ],
            }),
          });
        });
        var bi = d(95695),
          qe = d.n(bi),
          wi = d(96715),
          yi = d(10886),
          Mi = d(19654),
          pi = d(3209),
          vi = d(96538),
          ji = d(14256),
          Qe = d.n(ji);
        function zi(v) {
          const { steamid: r, closeModal: n } = v;
          return (0, s.jsxs)(vi.o0, {
            strDescription: "",
            strTitle: (0, lr.we)("#Button_Share"),
            onCancel: n,
            onOK: n,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
            children: [
              (0, s.jsx)(xi, { steamid: r }),
              (0, s.jsx)(Oi, { steamid: r }),
            ],
          });
        }
        function xi(v) {
          const { steamid: r } = v,
            n = Ii(r);
          return (0, s.jsxs)("div", {
            className: (0, pe.A)(
              qe().FlexRowContainer,
              Qe().share_controls_ctn,
            ),
            children: [
              (0, s.jsx)(gr.he, {
                toolTipContent: (0, lr.we)("#EventDisplay_Share_OnFaceBook"),
                children: (0, s.jsx)(Ce.uU, {
                  href: n.strFacebookUrl,
                  className: Qe().ShareBtn,
                  children: (0, s.jsx)("img", {
                    className: (0, pe.A)(qe().Button),
                    src: yi.A,
                  }),
                }),
              }),
              (0, s.jsx)(gr.he, {
                toolTipContent: (0, lr.we)("#EventDisplay_Share_OnTwitter"),
                children: (0, s.jsx)(Ce.uU, {
                  href: n.strTwitterUrl,
                  className: Qe().ShareBtn,
                  children: (0, s.jsx)("img", {
                    className: (0, pe.A)(qe().Button),
                    src: pi.A,
                  }),
                }),
              }),
              (0, s.jsx)(gr.he, {
                toolTipContent: (0, lr.we)("#EventDisplay_Share_OnReddit"),
                children: (0, s.jsx)(Ce.uU, {
                  href: n.strRedditUrl,
                  className: Qe().ShareBtn,
                  children: (0, s.jsx)("img", {
                    className: (0, pe.A)(qe().Button),
                    src: Mi.A,
                  }),
                }),
              }),
            ],
          });
        }
        function Oi(v) {
          const { steamid: r } = v,
            n = k.createRef(),
            [h, I] = k.useState(""),
            N = k.createRef(),
            Mr = k.useCallback(
              (ce) => {
                n.current &&
                  n.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(n.current.value)
                    .then((je) => {
                      I((0, lr.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((je) => {
                      I(
                        (0, lr.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", je);
                    });
              },
              [n],
            ),
            ne = pr.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + r;
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)("div", {
                className: (0, pe.A)(qe().FlexRowContainer, Qe().linkField),
                onClick: Mr,
                children: [
                  (0, s.jsx)("span", {
                    className: Qe().LinkInputLabel,
                    children: (0, lr.we)("#EventDisplay_Share_Link"),
                  }),
                  (0, s.jsx)("textarea", {
                    className: Qe().LinkInput,
                    ref: n,
                    value: ne,
                    readOnly: !0,
                  }),
                  !!document.queryCommandSupported("copy") &&
                    (0, s.jsx)(gr.he, {
                      toolTipContent: (0, lr.we)(
                        "#ToolTip_CopyLinkToClipboard",
                      ),
                      children: (0, s.jsx)("div", {
                        className: (0, pe.A)(
                          qe().Button,
                          qe().Icon,
                          Qe().LinkButton,
                        ),
                        children: (0, s.jsx)("img", {
                          className: Qe().ClipboardIcon,
                          src: wi.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, s.jsx)("div", {
                ref: N,
                className: Qe().ClipboardText,
                children: h,
              }),
            ],
          });
        }
        function Ii(v) {
          const r = pr.TS.COMMUNITY_BASE_URL + "broadcast/share/" + v;
          return {
            strFacebookUrl: r + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: r + "?site=twitter",
            strRedditUrl: r + "?site=reddit",
          };
        }
        var Di = d(82734),
          Bi = d(88003),
          Fi = d(37589),
          Ei = d(34032),
          Ai = Object.defineProperty,
          Pi = Object.getOwnPropertyDescriptor,
          Je = (v, r, n, h) => {
            for (
              var I = h > 1 ? void 0 : h ? Pi(r, n) : r, N = v.length - 1, Mr;
              N >= 0;
              N--
            )
              (Mr = v[N]) && (I = (h ? Mr(r, n, I) : Mr(I)) || I);
            return h && I && Ai(r, n, I), I;
          };
        const Wi = {
          list: [
            { appid: 444090, url: "https://steam.tv/paladins" },
            { appid: 386360, url: "https://steam.tv/smite" },
            { appid: 813820, url: "https://steam.tv/realmroyale" },
            {
              appid: 583950,
              url: "https://steam.tv/artifact",
              broadcasterAccountID: 912972716,
            },
            {
              appid: 570,
              url: "https://steam.tv/dota",
              broadcasterAccountID: 238221269,
            },
            {
              appid: 1025790,
              url: "https://steam.tv/steamawards",
              broadcasterAccountID: 934427243,
            },
            {
              appid: 730,
              url: "https://steam.tv/csgo",
              broadcasterAccountID: 927819071,
            },
          ],
        };
        function Li() {
          const v = (0, pr.Qn)();
          return !(0, pr.Y2)() && !v;
        }
        function Ui(v) {
          return Li() ? (0, s.jsx)(Re, { ...v }) : null;
        }
        let Re = class extends k.Component {
          m_cancelSignal = f().CancelToken.source();
          m_bMarkedUsabilitySeen = !1;
          state = {
            bShowPopoutHeader: !1,
            bExpanded: !1,
            bLoadingPreference: !0,
            style: {
              maxHeight: "0vh",
              overflow: "hidden",
              transition: "max-height 1s ease-in-out",
            },
            innerStyle: {
              maxHeight: "0vh",
              overflow: "hidden",
              transition: "max-height 1s ease-in-out",
            },
            bStartMuted: !0,
          };
          async componentDidMount() {
            await Oe.j
              .Get()
              .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !Oe.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: Oe.j
                      .Get()
                      .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                      ? "0vh"
                      : "100vh",
                  },
                }),
              await (this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event.BUsesContentHubForItemSource()
                ? Oe.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : Oe.j.Get().HintLoadEmbeddableStreams(this.props)),
              this.props.nAppIDVOD &&
                Oe.j
                  .Get()
                  .SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
              window.setTimeout(() => {
                this.m_cancelSignal.token.reason ||
                  this.setState({
                    style: { ...this.state.style, maxHeight: "100vh" },
                  });
              }, 10);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "BroadcastEmbeddable component unmounted",
            );
          }
          ToggleBroadcastExpandShrink() {
            let v = Oe.j.Get().GetPlayReadyStream(this.props);
            const r = this.state.bExpanded,
              n = We.es.GetOrCreateBroadcastInfo(v.steamid).m_nAppID;
            (0, Oe.U7)(n, r ? tt.Mc.U6 : tt.Mc.B_, v.snr),
              r && (0, et.D)() && (0, et.D)().AddEvent(Ut.Xm.d),
              window.setTimeout(
                () =>
                  this.setState({
                    innerStyle: {
                      ...this.state.innerStyle,
                      maxHeight: r ? "0vh" : "100vh",
                    },
                  }),
                10,
              ),
              r ||
                this.setState({ bExpanded: !this.state.bExpanded }, () =>
                  Oe.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
                );
          }
          OnShrinkTransitionEnd() {
            this.state.innerStyle.maxHeight === "0vh" &&
              this.setState({ bExpanded: !1 }, () =>
                Oe.j.Get().SetEmbeddedStreamCollapsed(!0),
              );
          }
          async onStreamSelect(v) {
            this.setState({ bStartMuted: !1 }),
              Oe.j.Get().GetPlayReadyStream(this.props).accountid !=
                v.accountid &&
                (await Oe.j.Get().AttemptToPlayStream(this.props, v));
          }
          async PlayNextNonVOD() {
            this.setState({ bStartMuted: !1 });
            const v = Oe.j
              .Get()
              .GetStreams(this.props)
              .filter(
                (r) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(r),
              );
            await Oe.j.Get().PlayFromAvailableStreams(this.props, v, !0);
          }
          ConstructSidePanels(v, r) {
            let n = {
              leftPanel: null,
              rightPanel: null,
              bRightPanelArtworkOrEmpty: !0,
            };
            if (this.props.bWidePlayer) return n;
            const h = Oe.j.Get().GetConcurrentStreams(this.props) > 1;
            let I = We.es.GetOrCreateBroadcastInfo(v.steamid).m_nAppID,
              N = (0, s.jsx)(Yt, { ImgUrl: v.right_panel }, "right" + I),
              Mr = (0, s.jsx)(Yt, { ImgUrl: v.left_panel }, "left" + I);
            const ne = 11;
            if (I < ne) {
              const ce = ot.l.GetAppIDListForBroadcasterSteamID(v.steamid);
              ce && ce.length === 1 && (I = ce[0]);
            }
            return (
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
                I >= ne &&
                (!this.props.event ||
                  !this.props.event.jsondata.broadcast_force_banner) &&
                ((N = (0, s.jsx)(ci, { appid: I }, "mini" + v.accountid)),
                (n.bRightPanelArtworkOrEmpty = !1)),
              h && !r
                ? ((n.leftPanel = (0, s.jsx)(
                    Ni,
                    {
                      broadcastEmbedContext: this.props,
                      curStream: v,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    },
                    "selector" + I,
                  )),
                  (n.rightPanel = N))
                : r
                  ? ((n.leftPanel = (0, s.jsx)("div", {})),
                    (n.rightPanel = (0, s.jsx)(Xi, {
                      stream: v,
                      orientation: "rightside",
                    })),
                    (n.bRightPanelArtworkOrEmpty = !1))
                  : ((n.leftPanel = Mr), (n.rightPanel = N)),
              n
            );
          }
          MarkBroadcastSeen() {
            this.m_bMarkedUsabilitySeen ||
              ((this.m_bMarkedUsabilitySeen = !0),
              (0, et.D)() && (0, et.D)().AddEvent(Ut.Xm.ex));
          }
          render() {
            if (this.state.bLoadingPreference) return null;
            let v = Oe.j.Get().GetPlayReadyStream(this.props);
            if (v) {
              this.MarkBroadcastSeen();
              let r = Oe.j.Get().GetChatVisibility() === "show";
              const {
                event: n,
                language: h,
                fnRenderBroadcastContext: I,
              } = this.props;
              n &&
                (v = {
                  ...v,
                  left_panel: n.GetImageURL(
                    "broadcast_left",
                    h || (0, Lt.sfN)(pr.TS.LANGUAGE),
                  ),
                  right_panel: n.GetImageURL(
                    "broadcast_right",
                    h || (0, Lt.sfN)(pr.TS.LANGUAGE),
                  ),
                  store_title: n.GetBroadcastTitle(
                    h || (0, Lt.sfN)(pr.TS.LANGUAGE),
                  ),
                  broadcast_chat_visibility: n.GetBroadcastChatVisibility(),
                });
              let N = this.ConstructSidePanels(v, r),
                Mr = v.store_title ? v.store_title : v.title,
                ne = Oe.j.Get().GetConcurrentStreams(this.props) > 1;
              const ce = () => {
                v.nAppIDVOD && this.PlayNextNonVOD(),
                  this.props.fnOnVideoEnd?.();
              };
              return (0, s.jsx)(k.Fragment, {
                children: (0, s.jsxs)("div", {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                  children: [
                    (0, s.jsxs)("div", {
                      className: (0, pe.A)({
                        [Ar().bordered_container]: !0,
                        [Ar().Event]: !!n,
                        broadcast_brd_ctn_trgt: !0,
                      }),
                      children: [
                        (0, s.jsxs)("div", {
                          className: (0, pe.A)(
                            Ar().bordered_title,
                            "bordered_title_trgt",
                          ),
                          children: [
                            (0, s.jsx)(ui.K, {}),
                            (0, s.jsx)("div", {
                              className: Ar().streamTitle,
                              children: Mr,
                            }),
                            (0, s.jsxs)("div", {
                              className: Ar().bordered_corner_container,
                              children: [
                                !this.state.bExpanded &&
                                  (0, s.jsx)(gr.he, {
                                    toolTipContent: (0, lr.we)(
                                      "#StoreBroadcast_Change_store_Broadcast_settings",
                                    ),
                                    children: (0, s.jsx)("div", {
                                      className: Ar().broadcast_settings_icon,
                                      onClick: () =>
                                        window.open(
                                          `${pr.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                        ),
                                    }),
                                  }),
                                (0, s.jsx)(gr.he, {
                                  toolTipContent: (0, lr.we)(
                                    "#StoreBroadcast_Hide_Tooltip",
                                  ),
                                  children: (0, s.jsx)("div", {
                                    className: this.state.bExpanded
                                      ? Ar().bordered_corner_expanded
                                      : Ar().bordered_corner_shrinked,
                                    onClick: this.ToggleBroadcastExpandShrink,
                                  }),
                                }),
                              ],
                            }),
                            !!v.gamedata_subtitle &&
                              (0, s.jsx)("div", {
                                className: Ar().bordered_subtitle,
                                children: v.gamedata_subtitle,
                              }),
                          ],
                        }),
                        !!this.state.bExpanded &&
                          (0, s.jsxs)("div", {
                            className: (0, pe.A)({
                              [Ar().container]: !0,
                              embeddable_ctn_trgt: !0,
                              multistream: ne,
                              broadcast_right_panel_simple:
                                N.bRightPanelArtworkOrEmpty,
                              broadcast_chat_expanded: r,
                            }),
                            style: { ...this.state.innerStyle },
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                            children: [
                              (0, s.jsx)("div", {
                                className: Ar().LeftPanelCtn,
                                children: N.leftPanel,
                              }),
                              (0, s.jsx)(bt, {
                                stream: v,
                                bStartMuted: this.state.bStartMuted,
                                fnRenderBroadcastContext: I,
                                fnOnVideoEnd: ce,
                                bWidePlayer: this.props.bWidePlayer,
                              }),
                              (0, s.jsx)("div", {
                                className: Ar().RightPanelCtn,
                                children: N.rightPanel,
                              }),
                              !!this.state.bExpanded &&
                                (0, s.jsx)(lt, {
                                  stream: v,
                                  bMultistream: ne,
                                  chatAnnouncementGivewayGID: N.rightPanel
                                    ? void 0
                                    : this.props.chat_announcement_giveaway,
                                }),
                            ],
                          }),
                      ],
                    }),
                    !!(
                      n &&
                      n.jsondata &&
                      n.jsondata.broadcast_item_drops_enabled
                    ) && (0, s.jsx)(hi, { event: n }),
                    (0, s.jsx)("div", { className: Ar().clear_div }),
                  ],
                }),
              });
            } else
              return (0, s.jsx)("div", { className: "NoBroadcastAvailable" });
          }
        };
        Je([Se.oI], Re.prototype, "ToggleBroadcastExpandShrink", 1),
          Je([Se.oI], Re.prototype, "OnShrinkTransitionEnd", 1),
          Je([Se.oI], Re.prototype, "onStreamSelect", 1),
          Je([Se.oI], Re.prototype, "PlayNextNonVOD", 1),
          (Re = Je([o.PA], Re));
        class bt extends k.Component {
          m_iVideoContainerRef = k.createRef();
          constructor(r) {
            super(r),
              (this.state = {
                bPopout: !1,
                bPreventPopup: window.screen.width <= 768,
              });
          }
          CloseBroadcastPopup() {
            const r = We.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, Oe.U7)(r, tt.Mc.n6, this.props.stream.snr),
              (0, et.D)() && (0, et.D)().AddEvent(Ut.Xm.ok),
              this.setState({ bPopout: !1, bPreventPopup: !0 });
          }
          OnEnter() {
            !this.state.bPreventPopup &&
              this.state.bPopout &&
              this.setState({ bPopout: !1 });
          }
          OnLeave() {
            !this.state.bPreventPopup &&
              !this.state.bPopout &&
              this.setState({ bPopout: !0 });
          }
          render() {
            return (0, s.jsx)("div", {
              className: Ar().wrapper,
              children: (0, s.jsx)(Fi.j, {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (r) => {
                  r.isIntersecting || this.OnLeave();
                },
                className: (0, pe.A)({
                  [Ar().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [Ar().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
                children: (0, s.jsxs)("div", {
                  className: this.state.bPopout
                    ? Ar().broadcast_floating
                    : Ar().video_container,
                  children: [
                    this.state.bPopout &&
                      (0, s.jsx)(Jt, {
                        steamIDBroadcast: this.props.stream.steamid,
                        OnPreventPopup: this.CloseBroadcastPopup,
                      }),
                    (0, s.jsx)("div", {
                      className: Ar().BroadcastPlayerContainer,
                      children: (0, s.jsx)(ri.default, {
                        steamIDBroadcast: this.props.stream.steamid,
                        watchLocation: H.nn.fe,
                        bStartMuted: this.props.bStartMuted,
                        fnRenderBroadcastContext:
                          this.props.fnRenderBroadcastContext,
                        fnOnVideoEnd: this.props.fnOnVideoEnd,
                        nAppIDVOD: this.props.stream.nAppIDVOD,
                      }),
                    }),
                  ],
                }),
              }),
            });
          }
        }
        Je([Se.oI], bt.prototype, "CloseBroadcastPopup", 1),
          Je([Se.oI], bt.prototype, "OnEnter", 1),
          Je([Se.oI], bt.prototype, "OnLeave", 1);
        function Si(v) {
          const { stream: r } = v,
            [n] = (0, t.q3)(() => [r.steamid]),
            h = We.es.GetOrCreateBroadcastInfo(n).m_nAppID,
            I = Wi.list.find(
              (N) =>
                N.appid == h &&
                (!N.broadcasterAccountID ||
                  N.broadcasterAccountID == r.accountid),
            );
          if (I) {
            let N = I.url;
            return (
              (pr.TS.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (N = "steam://openurl/" + N),
              (0, s.jsx)("a", {
                href: N,
                children: (0, lr.we)(
                  "#Broadcast_Embed_Watch_With_Frieds_SteamTV",
                ),
              })
            );
          } else {
            const N = pr.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + n;
            return (0, s.jsx)(gr.he, {
              toolTipContent: (0, lr.we)("#BroadcastWatch_View_Broadcast_Page"),
              children: (0, s.jsx)("a", {
                href: N,
                className: Ar().external_link,
                children: (0, s.jsx)(Ke.GrD, {}),
              }),
            });
          }
        }
        let lt = class extends k.Component {
          OnToggleChat(v) {
            v.preventDefault();
            const r = We.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, Oe.U7)(
              r,
              Oe.j.Get().GetChatVisibility() === "show" ? tt.Mc.kz : tt.Mc.bW,
              this.props.stream.snr,
            ),
              Oe.j.Get().ToggleChatVisibility();
          }
          onWatchBroadcastPage() {
            const v = We.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, Oe.U7)(v, tt.Mc.Is, this.props.stream.snr);
          }
          render() {
            const v = Oe.j.Get().GetChatVisibility() != "remove",
              r = Oe.j.Get().GetChatVisibility() === "hide",
              n = !this.props.stream.nAppIDVOD,
              h = n;
            let I = Number.parseInt(
              "" +
                We.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nViewerCount,
            );
            return (0, s.jsxs)("div", {
              className: (0, pe.A)(Ar().viewer_bar, "viewer_bar"),
              children: [
                (0, s.jsxs)("div", {
                  className: (0, pe.A)(Ar().viewer_count, "viewer_count"),
                  children: [(0, s.jsx)(Ke.y_e, {}), (0, Xt.Dq)(I)],
                }),
                (0, s.jsxs)("div", {
                  className: (0, pe.A)(Ar().viewer_links, "viewer_links"),
                  children: [
                    !!(v && !r && this.props.bMultistream) &&
                      (0, s.jsx)("div", {
                        className: Ar().chat_link,
                        children: (0, s.jsx)("a", {
                          href: "#",
                          className: Ar().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, lr.we)(
                            "#sale_three_section_show_streams",
                          ),
                        }),
                      }),
                    v &&
                      (0, s.jsxs)("div", {
                        className: Ar().chat_link,
                        children: [
                          (0, s.jsx)(Ke.ROZ, {}),
                          (0, s.jsx)("a", {
                            href: "#",
                            className: Ar().ChatToggle,
                            onClick: this.OnToggleChat,
                            children: (0, lr.we)(
                              r
                                ? "#sale_three_section_show_chat"
                                : "#sale_three_section_hide_chat",
                            ),
                          }),
                        ],
                      }),
                    h &&
                      (0, s.jsxs)("div", {
                        className: Ar().chat_link,
                        children: [
                          (0, s.jsx)(Ke.SYj, {}),
                          (0, s.jsx)("a", {
                            href: "#",
                            className: Ar().ChatToggle,
                            onClick: (N) =>
                              (0, Bi.pg)(
                                (0, s.jsx)(zi, {
                                  steamid: this.props.stream.steamid,
                                }),
                                (0, Di.uX)(N),
                              ),
                            children: (0, lr.we)("#Broadcast_ShareBroadcast"),
                          }),
                        ],
                      }),
                    (0, s.jsx)(gr.he, {
                      toolTipContent: (0, lr.we)(
                        "#StoreBroadcast_Change_store_Broadcast_settings",
                      ),
                      children: (0, s.jsx)("a", {
                        href:
                          pr.TS.STORE_BASE_URL +
                          "account/preferences/#store_broadcast_settings",
                        target: pr.TS.IN_CLIENT ? void 0 : "_blank",
                        className: Ar().settings_link,
                        children: (0, s.jsx)(Ke.wB_, {}),
                      }),
                    }),
                    n && (0, s.jsx)(Si, { ...this.props }),
                  ],
                }),
                !!this.props.chatAnnouncementGivewayGID &&
                  (0, s.jsx)(At, {
                    gidGiveaway: this.props.chatAnnouncementGivewayGID,
                    stream: this.props.stream,
                  }),
              ],
            });
          }
        };
        Je([Se.oI], lt.prototype, "OnToggleChat", 1),
          Je([Se.oI], lt.prototype, "onWatchBroadcastPage", 1),
          (lt = Je([o.PA], lt));
        class Yt extends k.Component {
          render() {
            let r = this.props.ImgUrl;
            return (0, s.jsxs)("div", {
              className: Ar().SidePanelBackground,
              children: [
                r &&
                  (0, s.jsx)("img", {
                    className: Ar().side_panels,
                    src: this.props.ImgUrl,
                  }),
                !r && (0, s.jsx)("div", { className: Ar().side_panels }),
              ],
            });
          }
        }
        const Jt = (0, o.PA)((v) => {
          const { steamIDBroadcast: r } = v;
          let n = We.es.GetOrCreateBroadcastInfo(r).m_nAppID;
          n = n != We.fO ? n : 0;
          const h = (0, Wt.$5)(n),
            { data: I } = (0, rt.J$)(h);
          return (0, s.jsxs)("div", {
            className: [Ar().PopOutVideoTitleBar, Ar().NoSeslect].join(" "),
            children: [
              I
                ? (0, s.jsx)(ht.u, {
                    id: h,
                    className: Ar().PopOutVideoTitleText,
                    children: (0, lr.we)(
                      "#StoreBroadcast_Detault_popout_Title",
                    ),
                  })
                : (0, s.jsx)("div", {
                    className: Ar().PopOutVideoTitleText,
                    children: (0, lr.we)(
                      "#StoreBroadcast_Detault_popout_Title",
                    ),
                  }),
              (0, s.jsx)(gr.he, {
                toolTipContent: (0, lr.we)(
                  "#StoreBroadcast_close_broadcast_popup",
                ),
                children: (0, s.jsx)("button", {
                  className: Ar().PopOutVideoCloseButton,
                  onClick: v.OnPreventPopup,
                  children: (0, s.jsx)(Ke.X, {}),
                }),
              }),
            ],
          });
        });
        function ki(v, r) {
          const n = We.es.GetOrCreateBroadcastInfo(r.steamid).m_nAppID,
            h = Ht.A.Get().GetApp(n),
            I = v && h?.GetAssets()?.GetHeaderURL();
          return parseInt(
            I
              ? Ar().strStreamIconCapsuleArtHeight
              : Ar().strStreamIconScreenshotArtHeight,
          );
        }
        function Ni(v) {
          const {
              curStream: r,
              onStreamSelect: n,
              fnFilterStreams: h,
              bShowCapsuleArt: I,
              broadcastEmbedContext: N,
            } = v,
            Mr = (0, k.useRef)(void 0),
            ne = (0, k.useMemo)(() => {
              const ce = Oe.j
                .Get()
                .GetStreams(N)
                .filter((je) => !h || h(je));
              return (0, Oe.MU)(ce), ce;
            }, [N, h]);
          return (
            (0, k.useEffect)(() => {
              if (Mr && Mr.current) {
                const ce = ne
                  .map(
                    (je) => We.es.GetOrCreateBroadcastInfo(je.steamid).m_nAppID,
                  )
                  .filter(Boolean);
                Ht.A.Get()
                  .QueueMultipleAppRequests(ce, { include_assets: !0 })
                  .then(() => {
                    if (Mr.current) {
                      let je = 0;
                      for (const Le of ne) {
                        if (r.accountid == Le.accountid) break;
                        je += ki(I, Le);
                      }
                      Mr.current.scrollTop = je;
                    }
                  });
              }
            }, [ne, I, r.accountid, Mr]),
            (0, s.jsx)("div", {
              ref: Mr,
              className: (0, pe.A)({
                [Ar().side_panels]: !0,
                side_panels: !0,
                [Ar().multistream]: !0,
                [Ar().scrollingstreams]: ne.length > 3,
              }),
              children: (0, s.jsx)("div", {
                className: Ar().MultiStreamCtn,
                children: ne.map((ce) =>
                  (0, s.jsx)(
                    Ki,
                    {
                      stream: ce,
                      bSelected: r.accountid == ce.accountid,
                      onStreamSelect: n,
                      bShowCapsuleArt: I,
                    },
                    ce.accountid ?? ce.steamid,
                  ),
                ),
              }),
            })
          );
        }
        function Ki(v) {
          const {
            onStreamSelect: r,
            bSelected: n,
            stream: h,
            bShowCapsuleArt: I,
          } = v;
          let N = (0, t.q3)(
            () => We.es.GetOrCreateBroadcastInfo(h.steamid).m_nAppID,
          );
          N = N != We.fO ? N : 0;
          const Mr = (0, Wt.$5)(N),
            { data: ne } = (0, rt.J$)(Mr),
            { data: ce } = (0, rt.lv)(Mr);
          if (!(0, Oe.fn)(h)) return null;
          const je = I && ce && (0, Kt.b0)(ce, "header"),
            Le = Number.parseInt("" + h.viewer_count),
            He = !Number.isNaN(Le),
            Ue = !!h.nAppIDVOD && ne?.name;
          return (0, s.jsxs)("div", {
            className: (0, pe.A)({
              [Ar().stream_icon_and_viewer_container]: !0,
              [Ar().stream_featured]:
                h.current_selection_priority == Ei.mY.k_eFeatured,
              [Ar().display_capsule_art]: !!je,
            }),
            children: [
              (0, s.jsx)(ht.j, {
                id: Mr,
                hoverClassName: Ar().StreamCapsule,
                children: (0, s.jsx)(gi.K, {
                  className: (0, pe.A)(
                    Ar().stream_icon_container,
                    n && Ar().stream_selected,
                  ),
                  onClick: () => r && r(h),
                  rootMargin: "100px 0px 100px 0px",
                  children: (0, s.jsx)(Hi, {
                    strThumbnail: h.thumbnail_http_address,
                    bSelected: n,
                    strCapsuleArtURL: je,
                  }),
                }),
              }),
              (0, s.jsx)("div", {
                className: (0, pe.A)(Ar().viewer_count, !He && Ar().vod_title),
                children: He
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(Ke.y_e, {}),
                        (0, s.jsx)("div", {
                          className: Ar().ViewerNum,
                          children: (0, Xt.Dq)(Le),
                        }),
                      ],
                    })
                  : Ue,
              }),
            ],
          });
        }
        function Hi(v) {
          const { strCapsuleArtURL: r, strThumbnail: n, bSelected: h } = v,
            I = h ? Ar().stream_icon_selected : Ar().stream_icon;
          if (r) {
            const N = [r];
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("img", {
                  className: (0, pe.A)(I, Ar().stream_icon_hide_on_hover),
                  src: r,
                }),
                (0, s.jsx)(di.o, {
                  className: (0, pe.A)(I, Ar().stream_icon_show_on_hover),
                  srcs: N,
                }),
              ],
            });
          } else return (0, s.jsx)("img", { className: I, src: n });
        }
        function Xi(v) {
          const { stream: r, orientation: n } = v,
            h = n == "below",
            [I, N] = (0, t.q3)(() => [
              We.es.GetBroadcast(r.steamid),
              We.es.GetBroadcast(r.steamid)?.m_ulBroadcastID,
            ]),
            Mr = (0, t.q3)(() => r.steamid);
          return I
            ? (0, s.jsx)("div", {
                className: (0, pe.A)({
                  [Ar().chat_below_container]: h,
                  [Ar().chat_rightside_container]: !h,
                  [Ar().store_chat_ctn]: !0,
                }),
                children: (0, s.jsx)("div", {
                  className: Ar().ChatContainer,
                  children: (0, s.jsx)(Te, {
                    emoticonStore: Oe.MX,
                    watchLocation: H.nn.fe,
                    steamID: Mr,
                    broadcastID: N,
                  }),
                }),
              })
            : null;
        }
      },
      6600: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { td: () => H });
        var s = d(14947),
          hr = d(3166),
          f = Object.defineProperty,
          o = Object.getOwnPropertyDescriptor,
          t = (er, j, X, U) => {
            for (
              var W = U > 1 ? void 0 : U ? o(j, X) : j, g = er.length - 1, a;
              g >= 0;
              g--
            )
              (a = er[g]) && (W = (U ? a(j, X, W) : a(W)) || W);
            return U && W && f(j, X, W), W;
          };
        const k = hr.TS.CHAT_BASE_URL + "public/images/broadcast/ti9_30x30.png",
          ar = hr.TS.CHAT_BASE_URL + "public/images/broadcast/yule_30x30.png";
        class M {
          bValid = !1;
          stream = { 0: "#Broadcast_EnglishMain" };
          name = "";
          appName = "";
          appID = 0;
          link = "";
          linkName = "";
          tabIcon = "";
          offlineImage = "";
          gidEvent = "";
          constructor(j) {
            (0, s.Gn)(this), this.init(j);
          }
          init(j) {
            (this.bValid = j.bValid),
              (this.stream = j.stream),
              (this.name = j.name),
              (this.appName = j.appName ?? ""),
              (this.appID = j.appID),
              (this.link = j.link),
              (this.linkName = j.linkName),
              (this.tabIcon = j.tabIcon ?? ""),
              (this.offlineImage = j.offlineImage),
              (this.gidEvent = j.gidEvent ?? "");
          }
        }
        t([s.sH], M.prototype, "bValid", 2),
          t([s.sH], M.prototype, "stream", 2),
          t([s.sH], M.prototype, "name", 2),
          t([s.sH], M.prototype, "appName", 2),
          t([s.sH], M.prototype, "appID", 2),
          t([s.sH], M.prototype, "link", 2),
          t([s.sH], M.prototype, "linkName", 2),
          t([s.sH], M.prototype, "tabIcon", 2),
          t([s.sH], M.prototype, "offlineImage", 2),
          t([s.sH], M.prototype, "gidEvent", 2);
        let H = new M({
          bValid: !1,
          stream: { 0: "#Broadcast_EnglishMain" },
          name: "",
          appName: "",
          appID: 0,
          link: "",
          linkName: "",
          tabIcon: "",
          offlineImage: "",
        });
        function B(er) {
          (er == "76561198888084799" || er == "76561198910244427") &&
            H.init({
              bValid: !0,
              stream: {
                "76561198888084799": "#Broadcast_Stream1",
                "76561198910244427": "#Broadcast_Stream2",
              },
              name: "Cologne Major 2026",
              appID: 730,
              link: "https://store.steampowered.com/app/730/CounterStrike_2/",
              linkName: "Counter-Strike 2 on Steam",
              tabIcon:
                Config.CHAT_BASE_URL +
                "public/images/broadcast/cs2_major2026_cologne_icon.png",
              offlineImage: "public/images/broadcast/cs2_major2026_cologne.png",
            }),
            er == "76561197960266962" &&
              H.init({
                bValid: !0,
                stream: {},
                appName: "Winter Sale 2019",
                name: "Yule Log",
                appID: 0,
                link: "https://store.steampowered.com/",
                linkName: "View Sale Info Here!",
                tabIcon: ar,
                offlineImage: "public/images/broadcast/winter_sale_2019.png",
              });
        }
      },
      90828: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { J8: () => f, X8: () => hr });
        var s = ((o) => (
            (o[(o.Hover = 0)] = "Hover"),
            (o[(o.ClickPopup = 1)] = "ClickPopup"),
            (o[(o.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion"),
            o
          ))(s || {}),
          hr = ((o) => (
            (o[(o.Chat = 0)] = "Chat"),
            (o[(o.Notification = 1)] = "Notification"),
            (o[(o.Error = 2)] = "Error"),
            o
          ))(hr || {});
        class f {}
      },
      7132: (Vr, Yr, d) => {
        "use strict";
        d.r(Yr),
          d.d(Yr, {
            BroadcastDetails: () => qr,
            LinkOverlay: () => de,
            default: () => O,
          });
        var s = d(7850),
          hr = d(14947),
          f = d(75844),
          o = d(90626),
          t = d(16346),
          k = d(41301),
          ar = d(83482),
          M = d(74498),
          H = d(10142),
          B = d(30096),
          er = d(8323),
          j = Object.defineProperty,
          X = Object.getOwnPropertyDescriptor,
          U = (c, w, D, P) => {
            for (
              var Z = P > 1 ? void 0 : P ? X(w, D) : w, _ = c.length - 1, cr;
              _ >= 0;
              _--
            )
              (cr = c[_]) && (Z = (P ? cr(w, D, Z) : cr(Z)) || Z);
            return P && Z && j(w, D, Z), Z;
          };
        class W extends o.Component {
          m_elCanvas = null;
          m_Context = null;
          m_schUpdate = new er.LU();
          m_bSetupComplete = !1;
          componentDidMount() {
            this.props.updateRate == 0 && this.updateCanvas();
          }
          componentWillUnmount() {
            this.m_schUpdate.Cancel();
          }
          componentDidUpdate() {
            this.updateCanvas();
          }
          BindCanvasRef(w) {
            this.m_elCanvas = w;
          }
          updateCanvas() {
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let w = this.props.scaleFactor || [1, 1],
              D = this.props.elementRef,
              P = this.props.updateRate;
            const Z = this.m_elCanvas.getContext("2d");
            if (!Z) return;
            this.m_Context = Z;
            let _ = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              cr = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = _),
              (this.m_elCanvas.height = cr),
              (this.props.blurAmount ?? 0) > 0 &&
                (Z.filter = "blur(" + this.props.blurAmount + "px)");
            let xr = () => {
              Z.drawImage(D, 0, 0, _ * w[0], cr * w[1]),
                P > 0 && this.m_schUpdate.Schedule(P, xr);
            };
            xr(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, s.jsx)("canvas", {
              id: this.props.id,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        U([B.oI], W.prototype, "BindCanvasRef", 1),
          U([B.oI], W.prototype, "updateCanvas", 1);
        var g = d(34360),
          a = d(16569),
          i = d(90740),
          Y = d(36707);
        const yr = 500;
        class vr extends o.Component {
          render() {
            let {
              keyExtractor: w,
              style: D,
              duration: P = yr,
              className: Z,
              children: _,
              childRef: cr,
              ...xr
            } = this.props;
            const ge = { ...(D || {}), transitionDuration: `${P / 1e3}s` };
            return (0, s.jsx)(a.A, {
              ...xr,
              className: (0, Y.A)("crossfade", Z),
              children: (0, s.jsx)(
                i.A,
                {
                  nodeRef: cr,
                  classNames: "crossfade-anim",
                  timeout: P,
                  style: ge,
                  children: _,
                },
                w(),
              ),
            });
          }
        }
        function fr(c) {
          const { src: w, ...D } = c,
            P = { backgroundImage: `url(${w})` },
            Z = o.useRef(null);
          return (0, s.jsx)(vr, {
            style: P,
            keyExtractor: () => w,
            childRef: Z,
            ...D,
            children: (0, s.jsx)("div", { ref: Z, className: "crossfade-img" }),
          });
        }
        var E = d(40232),
          T = d(16085),
          rr = d(79167),
          nr = d(36118),
          p = d(53107),
          u = d(82734),
          y = d(18210),
          A = d(19730),
          tr = d(13854),
          L = d(3166),
          V = d(6600),
          ur = d(48937),
          q = d(15527),
          ir = d.n(q),
          jr = d(85599),
          Sr = Object.defineProperty,
          Kr = Object.getOwnPropertyDescriptor,
          Jr = (c, w, D, P) => {
            for (
              var Z = P > 1 ? void 0 : P ? Kr(w, D) : w, _ = c.length - 1, cr;
              _ >= 0;
              _--
            )
              (cr = c[_]) && (Z = (P ? cr(w, D, Z) : cr(Z)) || Z);
            return P && Z && Sr(w, D, Z), Z;
          };
        function he() {
          return (0, s.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, y.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const Hr = (0, f.PA)((c) => {
          let w = c.video;
          if (w && (w.IsBroadcastClip() || w.IsBroadcastVOD())) return null;
          let D = M.fK.Loading,
            P = "";
          if (w) {
            (D = w.GetBroadcastState()), (P = w.GetBroadcastStateDescription());
            let _ = w.IsBuffering();
            D == M.fK.Unlocking && ((D = M.fK.Loading), (P = "")),
              D == M.fK.Ready && _ && ((D = M.fK.Loading), (P = ""));
          }
          if (
            (w && D != M.fK.Error && w.GetUserInputNeeded()) ||
            D == M.fK.Ready
          )
            return null;
          let Z = D == M.fK.Loading;
          return (0, s.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
            children: [
              Z && (0, s.jsx)(jr.t, {}),
              !Z &&
                (0, s.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: P,
                }),
            ],
          });
        });
        class kr extends o.Component {
          OnClick() {
            M.es.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, s.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, s.jsx)(nr.jGG, {}),
                (0, s.jsx)("span", {
                  children: (0, y.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        Jr([B.oI], kr.prototype, "OnClick", 1);
        var wr = Object.defineProperty,
          Pe = Object.getOwnPropertyDescriptor,
          Zr = (c, w, D, P) => {
            for (
              var Z = P > 1 ? void 0 : P ? Pe(w, D) : w, _ = c.length - 1, cr;
              _ >= 0;
              _--
            )
              (cr = c[_]) && (Z = (P ? cr(w, D, Z) : cr(Z)) || Z);
            return P && Z && wr(w, D, Z), Z;
          };
        let ue = class extends o.Component {
          constructor(c) {
            super(c);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let c = this.props.stats;
            return (0, s.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, s.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, s.jsx)(nr.sED, {}),
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, s.jsx)(Nr, { stats: c }),
              ],
            });
          }
        };
        Zr([B.oI], ue.prototype, "HideStats", 1), (ue = Zr([f.PA], ue));
        let Nr = class extends o.Component {
          constructor(c) {
            super(c);
          }
          createBufferedRange(c) {
            let w = this.props.stats,
              D = [],
              P = c ? "vidbuf" : "audbuf",
              Z = c
                ? w.GetNumBufferedVideoRanges()
                : w.GetNumBufferedAudioRanges();
            if (Z > 0)
              for (let _ = 0; _ < Z; ++_) {
                let cr = (0, y.we)(
                    c
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    _,
                  ),
                  xr = c
                    ? w.GetBufferedVideoSegmentForDisplay(_)
                    : w.GetBufferedAudioSegmentForDisplay(_);
                D.push(
                  (0, s.jsxs)(
                    "div",
                    {
                      children: [
                        cr,
                        " ",
                        (0, s.jsx)("span", {
                          className: "videoStatsValue",
                          children: xr,
                        }),
                      ],
                    },
                    P + _,
                  ),
                );
              }
            else {
              let _ = (0, y.we)(
                c
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              D.push((0, s.jsx)("div", { children: _ }, P + "none"));
            }
            return D;
          }
          render() {
            let c = this.props.stats;
            return (0, s.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, s.jsxs)("div", {
                    children: [
                      (0, y.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, s.jsx)("span", {
                        className: "videoStatsValue",
                        children: c.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, s.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [c.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, s.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [c.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, y.we)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: c.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        Nr = Zr([f.PA], Nr);
        var Wr = d(82581),
          dr = Object.defineProperty,
          Qr = Object.getOwnPropertyDescriptor,
          R = (c, w, D, P) => {
            for (
              var Z = P > 1 ? void 0 : P ? Qr(w, D) : w, _ = c.length - 1, cr;
              _ >= 0;
              _--
            )
              (cr = c[_]) && (Z = (P ? cr(w, D, Z) : cr(Z)) || Z);
            return P && Z && dr(w, D, Z), Z;
          };
        class m extends o.Component {
          m_elSettingsButton;
          m_SettingsButtonPos;
          m_elClickListener = null;
          m_elSettingsPanel = null;
          m_elSubtitlesButton = o.createRef();
          m_elSubtitlesPanel = o.createRef();
          m_SubtitlesButtonPos;
          constructor(w) {
            super(w), (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
          }
          OnVideoControlClick(w) {
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                w.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnSubtitlesClick(w) {
            this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
              (this.m_SubtitlesButtonPos = [
                this.m_elSubtitlesButton.current?.offsetLeft,
                this.m_elSubtitlesButton.current?.offsetTop,
              ]),
              (this.m_elClickListener =
                w.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnMouseUp(w) {
            this.m_elClickListener?.removeEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            ),
              (0, u.id)(this.m_elSettingsPanel, w.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, u.id)(this.m_elSubtitlesPanel.current, w.target) ||
                this.setState({ bSubtitlesOpen: !1 });
          }
          bindSettingsButton(w) {
            this.m_elSettingsButton = w;
          }
          BindSettingsPanel(w) {
            this.m_elSettingsPanel = w;
          }
          OnShowStats(w) {
            this.props.onShowStats(w),
              this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
          }
          render() {
            let w = !1,
              D = !1;
            const { video: P, actions: Z } = this.props;
            let _,
              cr = [],
              xr = 0,
              ge = (0, s.jsx)(
                "div",
                { className: "settingsMenuSeparator" },
                "separator",
              );
            const se = 260,
              le = 32;
            if (
              (this.state.bSettingsOpen &&
                ((w = !0),
                (_ = this.props.video.GetVideoRepresentations()),
                (cr = _.map((Fr) =>
                  (0, s.jsx)(
                    Wr.n,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(Fr),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: Fr.selected,
                      children: Fr.displayName,
                    },
                    Fr.id,
                  ),
                )),
                cr.push(ge),
                cr.push(
                  (0, s.jsxs)(
                    Wr.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, y.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (xr = 0 - (cr.length * 21 + le))),
              this.state.bSubtitlesOpen)
            ) {
              (D = !0),
                (cr = []),
                cr.push(
                  (0, s.jsx)(
                    Wr.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, y.we)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let Fr = 0;
                Fr < this.props.video.ListSubtitles().length;
                Fr++
              ) {
                const Xr = this.props.video.ListSubtitles()[Fr];
                cr.push(
                  (0, s.jsx)(
                    Wr.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(Xr.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: Xr.mode === "showing",
                      children: Xr.label,
                    },
                    Xr.language,
                  ),
                );
              }
              xr = 0 - (se + le);
            }
            const Tr =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, s.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                Tr &&
                  (0, s.jsx)("div", {
                    className:
                      "videoControlButton" +
                      (Tr ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, s.jsx)(nr.N8C, {}),
                  }),
                (0, s.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (w ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, s.jsx)(nr.wB_, {}),
                }),
                (0, s.jsx)(z, { video: P }),
                Z &&
                  Z.map((Fr) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: Fr,
                      },
                      Fr.key,
                    ),
                  ),
                w &&
                  (0, s.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: xr,
                    },
                    children: (0, s.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: cr,
                    }),
                  }),
                D &&
                  (0, s.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: se + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: xr,
                    },
                    children: (0, s.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: cr,
                    }),
                  }),
              ],
            });
          }
        }
        R([B.oI], m.prototype, "OnVideoControlClick", 1),
          R([B.oI], m.prototype, "OnSubtitlesClick", 1),
          R([B.oI], m.prototype, "OnMouseUp", 1),
          R([B.oI], m.prototype, "bindSettingsButton", 1),
          R([B.oI], m.prototype, "BindSettingsPanel", 1),
          R([B.oI], m.prototype, "OnShowStats", 1);
        const b = !0;
        let z = class extends o.Component {
          constructor(c) {
            super(c), (0, hr.Gn)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = b;
          m_schHideSlider = new er.LU();
          m_bChildDragging = !1;
          m_bMouseOver = !1;
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let c = this.props.video,
              w = c.IsMuted();
            c.SetMute(!w), c.GetVolume() < 0.01 && c.SetVolume(0.5);
          }
          OnMouseEnter(c) {
            (this.m_bShowSlider = !0),
              (this.m_bMouseOver = !0),
              this.m_schHideSlider.Cancel();
          }
          OnMouseLeave(c) {
            (this.m_bMouseOver = !1), this.ScheduleHide();
          }
          OnChildDrag(c) {
            (this.m_bChildDragging = c), this.ScheduleHide();
          }
          ScheduleHide() {
            this.m_bMouseOver ||
              this.m_bChildDragging ||
              this.m_schHideSlider.Schedule(
                this.k_nHideSliderTimeout,
                () => (this.m_bShowSlider = b),
              );
          }
          render() {
            let c = this.props.video,
              w = c.IsMuted(),
              D = c.GetVolume() * 100,
              P = "videoControlButton";
            D > 65
              ? (P += " HighestVolume")
              : D > 45
                ? (P += " HighVolume")
                : D < 46 && D > 24
                  ? (P += " MedVolume")
                  : D < 25 && (P += " LowVolume");
            let Z = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (Z += " ShowVolumeSlider"),
              w && (Z += " muted"),
              (0, s.jsx)("div", {
                className: Z,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, s.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, s.jsx)("div", {
                      className: P,
                      onClick: this.ToggleMute,
                      children: (0, s.jsx)(nr.fSs, {}),
                    }),
                    (0, s.jsx)(S, { video: c, onDrag: this.OnChildDrag }),
                  ],
                }),
              })
            );
          }
        };
        R([hr.sH], z.prototype, "m_bShowSlider", 2),
          R([B.oI], z.prototype, "ToggleMute", 1),
          R([B.oI], z.prototype, "OnMouseEnter", 1),
          R([B.oI], z.prototype, "OnMouseLeave", 1),
          R([B.oI], z.prototype, "OnChildDrag", 1),
          (z = R([f.PA], z));
        let S = class extends o.Component {
          constructor(c) {
            super(c), (0, hr.Gn)(this);
          }
          m_elSlider = null;
          m_nVolumeStartOfDrag = 0;
          OnMouseDown(c) {
            let w = c.currentTarget;
            (this.m_elSlider = w),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(w, c.clientX),
              w.ownerDocument.defaultView?.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              w.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.props.onDrag(!0);
          }
          OnMouseMove(c) {
            this.m_elSlider &&
              this.SetVolumeWithCoord(this.m_elSlider, c.clientX);
          }
          OnMouseUp(c) {
            if (!this.m_elSlider) return;
            this.SetVolumeWithCoord(this.m_elSlider, c.clientX);
            let w = this.props.video;
            w.IsMuted() && w.SetVolume(this.m_nVolumeStartOfDrag),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              (this.m_nVolumeStartOfDrag = 0),
              (this.m_elSlider = null),
              this.props.onDrag(!1);
          }
          SetVolumeWithCoord(c, w) {
            let D = c.getBoundingClientRect(),
              P = tr.Fu(w, D.left, D.right, 0, 1),
              Z = tr.OQ(P, 0, 1),
              _ = this.props.video;
            _.SetMute(P < 0.01), _.SetVolume(Z);
          }
          render() {
            let c = this.props.video,
              w = c.GetVolume() * 100;
            c.IsMuted() && (w = 0);
            let P = { left: `${w}%` },
              Z = { width: `${w}%` };
            return (0, s.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, s.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
                (0, s.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: Z,
                }),
                (0, s.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: P,
                }),
              ],
            });
          }
        };
        R([B.oI], S.prototype, "OnMouseDown", 1),
          R([B.oI], S.prototype, "OnMouseMove", 1),
          R([B.oI], S.prototype, "OnMouseUp", 1),
          R([hr.XI], S.prototype, "SetVolumeWithCoord", 1),
          (S = R([f.PA], S));
        var J = d(43434),
          C = Object.defineProperty,
          or = Object.getOwnPropertyDescriptor,
          Q = (c, w, D, P) => {
            for (
              var Z = P > 1 ? void 0 : P ? or(w, D) : w, _ = c.length - 1, cr;
              _ >= 0;
              _--
            )
              (cr = c[_]) && (Z = (P ? cr(w, D, Z) : cr(Z)) || Z);
            return P && Z && C(w, D, Z), Z;
          };
        const Or = 3200,
          F = 15;
        let O = class extends o.Component {
          m_schHideControls = new er.LU();
          m_schUnmountControls = new er.LU();
          m_elVideo = null;
          m_elBroadcastPlayer = null;
          m_bMouseDown = !1;
          m_elMouseDown = null;
          m_listeners = new er.Ji();
          constructor(c) {
            super(c),
              (this.state = {
                bMountControls: !1,
                bControlsVisible: !1,
                bShowStats: !1,
                video: null,
                nResizedHeight: null,
                bFullscreen: !1,
              });
          }
          StopVideo() {
            let c = this.state.video;
            c &&
              (M.es.StopVideo(c),
              this.setState({ video: null }),
              this.props.fnSetBroadcastVideo?.(null));
          }
          IsMuted() {
            let c = this.state.video;
            return !c || c.IsMuted();
          }
          StopPlaybackTillUserInput() {
            let c = this.state.video;
            c && c.StopPlaybackTillUserInput();
          }
          componentDidUpdate(c, w) {
            !w.bMountControls && this.state.bMountControls
              ? setTimeout(() => {
                  this.setState((P) => ({
                    bControlsVisible: P.bMountControls,
                  }));
                }, 15)
              : w.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== c.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const D = this.props.nAppIDVOD;
            D &&
              (w.strInitialCapsuleImageUrl === void 0 || c.nAppIDVOD != D) &&
              H.A.Get()
                .QueueAppRequest(D, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const Z =
                    H.A.Get().GetApp(D)?.GetAssets()?.GetMainCapsuleURL() || "";
                  this.setState({ strInitialCapsuleImageUrl: Z });
                });
          }
          componentWillUnmount() {
            this.m_listeners.Unregister(),
              this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.StopVideo();
          }
          BindBroadcastPlayerRef(c) {
            this.m_listeners.Unregister(),
              (this.m_elBroadcastPlayer = c),
              c &&
                (this.m_listeners.AddEventListener(
                  c,
                  "fullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  c,
                  "mozfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  c,
                  "webkitfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  c,
                  "msfullscreenchange",
                  this.OnFullscreenChange,
                ));
          }
          BindVideoRef(c) {
            let w = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? c &&
                  (w = M.es.CreateBroadcastVideo(
                    c,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? c &&
                    (w = M.es.CreateClipVideo(
                      c,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    c &&
                    ((w = M.es.CreateVODVideo(
                      c,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      w.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              w &&
                (this.props.bStartMuted && w.SetMute(!0),
                this.props.bStartWithSubtitles && w.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? w.StopPlaybackTillUserInput()
                  : w.Play()),
              this.setState({ video: w }),
              this.props.fnSetBroadcastVideo?.(w),
              (this.m_elVideo = c);
          }
          OnMouseDown(c) {
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = c.currentTarget),
              this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
          OnMouseUp(c) {
            (this.m_bMouseDown = !1),
              this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.m_schHideControls.Schedule(Or, this.HideControls);
          }
          OnMouseMove(c) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({ bControlsVisible: !0 })
                : this.setState({ bMountControls: !0 }),
              this.m_schHideControls.Schedule(Or, this.HideControls);
          }
          OnMouseLeave(c) {
            this.HideControls();
          }
          HideControls() {
            this.state.bControlsVisible &&
              !this.m_bMouseDown &&
              this.setState({ bControlsVisible: !1 });
          }
          UmountControls() {
            this.setState((c) =>
              !c.bControlsVisible && c.bMountControls
                ? { bMountControls: !1 }
                : null,
            );
          }
          ShowStatsView() {
            let c = this.state.video;
            if (!c) return;
            this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), c.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(c) {
            this.state.bFullscreen ||
              ((0, t.lX)(
                (0, s.jsx)(g.tz, { children: this.GetContextMenuItems() }),
                c,
              ),
              c.preventDefault());
          }
          ToggleStatsView(c) {
            let w = !this.state.bShowStats;
            this.setState({ bShowStats: w });
            let D = this.state.video;
            D && D.SetStatsViewIsVisible(w);
          }
          ShowStorePage(c) {
            let w = this.state.video;
            if (!w || !this.props.onOpenLinkInNewWindow) return;
            let D = w.GetBroadcastInfo();
            if (!D) return;
            let P = (0, ar.k2)(`${L.TS.STORE_BASE_URL}app/${D.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(c, P), c.stopPropagation();
          }
          GetContextMenuItems() {
            let c = [],
              w = this.state.video;
            if (!w) return c;
            let D = w.GetBroadcastInfo();
            return (
              c.push(
                (0, s.jsx)(
                  g.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (P) => {
                      this.ToggleStatsView(P);
                    },
                    children: (0, y.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              D &&
                D.m_strAppId != "0" &&
                Number.parseInt(D.m_strAppId) != M.fO &&
                c.push(
                  (0, s.jsx)(
                    g.kt,
                    {
                      onSelected: (P) => {
                        this.ShowStorePage(P);
                      },
                      children: (0, y.we)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
                  ),
                ),
              c
            );
          }
          CloseStats() {
            let c = this.state.video;
            c &&
              this.state.bShowStats &&
              (this.setState({ bShowStats: !1 }), c.SetStatsViewIsVisible(!1));
          }
          OnToggleFullscreen() {
            this.m_elBroadcastPlayer &&
              ((0, u.ww)(this.m_elBroadcastPlayer)
                ? (0, u.MS)(this.m_elBroadcastPlayer)
                : (0, u.tl)(
                    this.m_elBroadcastPlayer,
                    this.m_elVideo ?? void 0,
                  ));
          }
          OnFullscreenChange(c) {
            if (!this.m_elBroadcastPlayer) return;
            let w = (0, u.ww)(this.m_elBroadcastPlayer);
            this.setState({ bFullscreen: w });
          }
          BHideVideoControls() {
            let c = this.state.video;
            return !c || c.GetUserInputNeeded()
              ? !0
              : M.es.GetBroadcastState(c) == M.fK.Error;
          }
          render() {
            const c = this.state.video,
              w = c && c.IsPaused(),
              D = c && c.BHasDASHStats() && this.state.bShowStats,
              P = !!(c && c.IsReplay()),
              Z = this.state.bMountControls,
              _ = this.state.bControlsVisible || w,
              cr = !!(c && c.GetUserInputNeeded()),
              xr = c?.GetDASHPlayerStats(),
              ge =
                c?.IsBroadcastVOD() &&
                cr &&
                this.state.strInitialCapsuleImageUrl;
            let se = "videoContainer";
            _ || (se += " HidePlayerControls"),
              w && (se += " VideoPaused"),
              this.state.bFullscreen && (se += " fullscreenVideo"),
              this.props.classes && (se += " " + this.props.classes);
            let le = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (le = le.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                le.push(
                  (0, s.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, y.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              le.push(
                (0, s.jsx)(
                  "div",
                  {
                    title: (0, y.we)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const $r = Z && !this.BHideVideoControls(),
              Tr = Z && !this.state.bFullscreen,
              Fr =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, s.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: se,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                Fr &&
                  (0, s.jsx)("div", {
                    className: ir().BroadcastContext,
                    children: Fr,
                  }),
                P && (0, s.jsx)(he, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, s.jsx)(W, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, s.jsx)("video", {
                  className: "videoSrc",
                  ref: this.BindVideoRef,
                  muted: this.props.bMuted ?? !0,
                  autoPlay: !0,
                  playsInline: !0,
                  controls: !1,
                  onVolumeChange: this.props.fnVolumeChanged,
                  onClick: this.props.fnVideoClick,
                }),
                this.props.linkRegions
                  ? (0, s.jsx)(de, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                ge &&
                  (0, s.jsx)("img", {
                    loading: "lazy",
                    className: (0, Y.A)(
                      ir().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                $r &&
                  c &&
                  (0, s.jsx)(K, {
                    video: c,
                    actions: le,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                Tr && (0, s.jsx)($, { onClick: this.props.onRequestClose }),
                D &&
                  xr &&
                  (0, s.jsx)(ue, { stats: xr, closeStats: this.CloseStats }),
                (0, s.jsx)(Hr, { video: c }),
                cr && c && (0, s.jsx)(kr, { video: c }),
              ],
            });
          }
        };
        Q([B.oI], O.prototype, "BindBroadcastPlayerRef", 1),
          Q([B.oI], O.prototype, "BindVideoRef", 1),
          Q([B.oI], O.prototype, "OnMouseDown", 1),
          Q([B.oI], O.prototype, "OnMouseUp", 1),
          Q([B.oI], O.prototype, "OnMouseMove", 1),
          Q([B.oI], O.prototype, "OnMouseLeave", 1),
          Q([B.oI], O.prototype, "HideControls", 1),
          Q([B.oI], O.prototype, "UmountControls", 1),
          Q([B.oI], O.prototype, "ShowStatsView", 1),
          Q([B.oI], O.prototype, "OnContextMenu", 1),
          Q([B.oI], O.prototype, "ToggleStatsView", 1),
          Q([B.oI], O.prototype, "ShowStorePage", 1),
          Q([B.oI], O.prototype, "CloseStats", 1),
          Q([B.oI], O.prototype, "OnToggleFullscreen", 1),
          Q([B.oI], O.prototype, "OnFullscreenChange", 1),
          (O = Q([f.PA], O));
        let K = class extends o.Component {
          render() {
            const { video: c } = this.props;
            if (!c) return null;
            let w = c.has_segments;
            return (0, s.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, s.jsx)(qr, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, s.jsxs)("div", {
                  className: "videoControlsBottom" + (w ? "" : " noSegments"),
                  children: [
                    (0, s.jsx)(Lr, {
                      video: c,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, s.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, s.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, s.jsx)(G, { video: c }),
                        (0, s.jsx)(sr, { video: c }),
                        (0, s.jsx)(m, {
                          video: c,
                          actions: this.props.actions,
                          onShowStats: this.props.onShowStats,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        K = Q([f.PA], K);
        class $ extends o.PureComponent {
          render() {
            return this.props.onClick
              ? (0, s.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, s.jsx)(nr.sED, {}),
                })
              : null;
          }
        }
        class G extends o.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-F);
          }
          OnJumpForward() {
            this.props.video.JumpTime(F);
          }
          render() {
            let w = this.props.video,
              D = w.CanSeek();
            return (0, s.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, s.jsx)(br, { video: w }),
                D &&
                  (0, s.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, s.jsx)(nr.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, s.jsx)("div", {
                        className: "jumpAheadValue",
                        children: F,
                      }),
                    ],
                  }),
                (0, s.jsx)(mr, { video: w }),
                D &&
                  (0, s.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, s.jsx)(nr.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: "jumpAheadValue",
                        children: F,
                      }),
                    ],
                  }),
                D && (0, s.jsx)(Pr, { video: w }),
              ],
            });
          }
        }
        Q([B.oI], G.prototype, "OnJumpBackward", 1),
          Q([B.oI], G.prototype, "OnJumpForward", 1);
        const sr = (0, f.PA)((c) => {
          if (c.video.IsBroadcastClip() || c.video.IsBroadcastVOD())
            return null;
          const w = (P) => {
            c.video.JumpToLiveEdge();
          };
          let D = c.video.IsOnLiveEdge();
          return (0, s.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, s.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (D ? " isLiveEdge" : ""),
              onClick: D ? void 0 : w,
              children: [
                (0, s.jsx)(nr.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, s.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, y.we)(
                    D
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let mr = class extends o.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let w = this.props.video.IsPaused();
            return (0, s.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: w ? (0, s.jsx)(nr.jGG, {}) : (0, s.jsx)(nr.vRz, {}),
            });
          }
        };
        Q([B.oI], mr.prototype, "OnTogglePlayPause", 1), (mr = Q([f.PA], mr));
        let br = class extends o.Component {
          constructor(c) {
            super(c), (0, hr.Gn)(this), (this.video = c.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const c = this.video;
            if (!c?.has_markers) return;
            let w = c.GetTimelineMarkers(),
              D = c.GetPlaybackTime();
            for (let P = w.length - 1; P >= 0; P--)
              if (!(w[P].nTime >= D)) return w[P].nTime;
          }
          OnJumpToPreviousMarkerClicked(c) {
            let w = this.GetPreviousMarkerTime();
            w !== void 0 && this.props.video.Seek(w - 0.2);
          }
          render() {
            let c = this.props.video.BHasMarkersOrSegments();
            return (0, s.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (c ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, s.jsx)(nr.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        Q([hr.sH], br.prototype, "video", 2),
          Q([hr.EW], br.prototype, "has_previous_marker", 1),
          Q([B.oI], br.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (br = Q([f.PA], br));
        let Pr = class extends o.Component {
          constructor(c) {
            super(c), (0, hr.Gn)(this), (this.video = c.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const c = this.video;
            if (!c?.has_markers) return;
            let w = c.GetTimelineMarkers(),
              D = c.GetPlaybackTime();
            for (let P = 0; P < w.length; P++)
              if (!(w[P].nTime <= D)) return w[P].nTime;
          }
          OnJumpToNextMarkerClicked(c) {
            let w = this.GetNextMarkerTime();
            w !== void 0 && this.props.video.Seek(w);
          }
          render() {
            let c = this.props.video.BHasMarkersOrSegments();
            return (0, s.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (c ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, s.jsx)(nr.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        Q([hr.sH], Pr.prototype, "video", 2),
          Q([hr.EW], Pr.prototype, "has_next_marker", 1),
          Q([B.oI], Pr.prototype, "OnJumpToNextMarkerClicked", 1),
          (Pr = Q([f.PA], Pr));
        const be = (c) => {
          let w = () => c.onMouseEnter(c.pos);
          return (0, s.jsx)("div", {
            className: "timelineMarker",
            title: c.label,
            style: { left: c.pos + "%" },
            onMouseEnter: w,
            onMouseLeave: c.onMouseLeave,
            onMouseDown: c.onMouseDown ? c.onMouseDown : void 0,
            children: (0, s.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, s.jsx)(nr.Dp6, {}),
            }),
          });
        };
        function Me(c) {
          let w = c.startPos,
            D = c.endPos,
            P = "",
            Z = 1;
          return (
            w < 0 && ((Z = (D - w) / 10), (w = 0), (P = " hideFront")),
            (0, s.jsxs)("div", {
              className: "STV_timelineSegment" + P,
              style: { left: w + "%", width: D - w + "%", opacity: Z },
              onClick: c.onClick,
              children: [
                (0, s.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: { borderColor: "rgb(" + c.color + ")" },
                }),
                (0, s.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: { color: "rgb(" + c.color + ")" },
                  children: c.label,
                }),
                (0, s.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: { borderColor: "rgb(" + c.color + ")" },
                }),
              ],
            })
          );
        }
        let Lr = class extends o.Component {
          m_elSlider = o.createRef();
          m_rectSlider = void 0;
          constructor(c) {
            super(c),
              (this.state = {
                nGrabberMouseDownTime: 0,
                bGrabberMouseDown: !1,
                nHoverValue: void 0,
                hoverX: 0,
                bStartMouseDown: !1,
                bEndMouseDown: !1,
                thumbnailURL: "",
              });
          }
          OnMouseDown(c, w) {
            const D = this.m_elSlider.current;
            if (D) {
              c.persist(), (this.m_rectSlider = D.getBoundingClientRect());
              let P = {};
              w === "start"
                ? ((P = { bStartMouseDown: !0 }), c.stopPropagation())
                : w === "end"
                  ? ((P = { bEndMouseDown: !0 }), c.stopPropagation())
                  : (P = { bGrabberMouseDown: !0 }),
                this.setState(P, () => this.AdjustSliderForClientX(c.clientX)),
                D.ownerDocument.defaultView?.addEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                D.ownerDocument.defaultView?.addEventListener(
                  "mouseup",
                  this.OnMouseUp,
                );
            }
          }
          OnMouseMove(c) {
            this.AdjustSliderForClientX(c.clientX);
          }
          OnMouseUp(c) {
            this.state.bStartMouseDown
              ? this.setState({ bStartMouseDown: !1 })
              : this.state.bEndMouseDown
                ? this.setState({ bEndMouseDown: !1 })
                : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
                  this.setState({
                    bGrabberMouseDown: !1,
                    nGrabberMouseDownTime: 0,
                  })),
              this.m_elSlider.current &&
                (this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mouseup",
                  this.OnMouseUp,
                ));
          }
          OnKeyDown(c) {
            c.keyCode == k.ek
              ? (this.props.video.JumpTime(-1 * F), c.preventDefault())
              : c.keyCode == k.JI &&
                (this.props.video.JumpTime(1 * F), c.preventDefault());
          }
          AdjustSliderForClientX(c) {
            const w = this.m_rectSlider;
            if (!w) return;
            let D = this.props.video,
              P = D.GetTimelineStartPos(),
              Z = D.GetTimelineStartPos() + D.GetTimelineDuration(),
              _ = D.GetTimeAtMousePosition(c, w, P, Z);
            const cr = 5;
            if (this.state.bStartMouseDown) {
              const xr = tr.OQ(_, P, D.m_editorEndTime - cr);
              D.m_editorStartTime = xr;
            } else if (this.state.bEndMouseDown) {
              const xr = tr.OQ(_, D.m_editorStartTime + cr, Z);
              D.m_editorEndTime = xr;
            } else
              _ != this.state.nGrabberMouseDownTime &&
                this.setState({ nGrabberMouseDownTime: _ });
          }
          OnMouseHoverMove(c) {
            this.AdjustHoverForClientX(c.clientX);
          }
          OnMouseHoverLeave(c) {
            this.setState({ hoverX: 0 });
          }
          AdjustHoverForClientX(c) {
            let w = this.props.video,
              D = w.GetTimelineStartPos(),
              P = w.GetTimelineStartPos() + w.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let Z =
              this.m_rectSlider &&
              w.GetTimeAtMousePosition(c, this.m_rectSlider, D, P);
          }
          OnSegmentClick(c) {
            this.props.video.Seek(c);
          }
          OnMarkerMouseEnter(c) {
            this.setState({ nHoverValue: c });
          }
          OnMarkerMouseLeave() {
            this.setState({ nHoverValue: void 0 });
          }
          render() {
            let c = this.props.video,
              w = this.state.bGrabberMouseDown,
              D = c.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                M.a0.Timeline,
              ),
              P = c.GetPercentOffsetFromTime(
                c.GetPlaybackTime(),
                M.a0.Timeline,
              ),
              Z = c.GetPercentOffsetFromTime(
                c.GetVideoAvailableStartTime(),
                M.a0.Timeline,
              );
            Z < 0.05 && (Z = 0);
            let _ = tr.OQ(D, 0, 100).toFixed(1) + "%",
              cr = tr.OQ(P, 0, 100).toFixed(1) + "%",
              xr = tr.OQ(Z, 0, 100).toFixed(1) + "%",
              ge = {},
              se = {},
              le = {},
              $r = {};
            w
              ? (($r.left = _),
                (ge.width = _),
                (se.width = cr),
                (le.width = xr))
              : (($r.left = cr), (se.width = cr), (le.width = xr));
            let Tr = (0, ur.ap)(c.GetPlaybackTime()),
              Fr = (0, ur.ap)(this.state.nHoverValue ?? 0),
              Xr = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (Xr += " grabberDown"),
              c.IsTimelineMapActive() && (Xr += " minimapActive");
            let Rr = "";
            (D = w ? D : P),
              D > 100
                ? (Rr = " grabberOffScreenRight grabberOffscreen")
                : D < 0 && (Rr = " grabberOffScreenLeft grabberOffscreen");
            let _r = [];
            c.GetTimelineMarkers().forEach((ae, we) => {
              let fe = c.GetPercentOffsetFromTime(ae.nTime, M.a0.Timeline);
              fe < 0 ||
                fe > 100 ||
                _r.push(
                  (0, s.jsx)(
                    be,
                    {
                      pos: fe,
                      label: ae.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    we,
                  ),
                );
            });
            let re = [];
            c.GetTimelineSegments().forEach((ae, we) => {
              let fe = c.GetPercentOffsetFromTime(ae.nTimeStart, M.a0.Timeline);
              if (fe > 100) return;
              let Gr = c.GetPercentOffsetFromTime(ae.nTimeEnd, M.a0.Timeline);
              Gr < 0 ||
                re.push(
                  (0, s.jsx)(
                    Me,
                    {
                      startPos: fe,
                      endPos: Gr,
                      label: ae.strTemplateName,
                      color: ae.color,
                      onClick: (ie) => this.OnSegmentClick(ae.nTimeStart),
                    },
                    we,
                  ),
                );
            });
            const ee = c.GetPercentOffsetFromTime(
                c.m_editorStartTime,
                M.a0.Timeline,
              ),
              ve = c.GetPercentOffsetFromTime(c.m_editorEndTime, M.a0.Timeline),
              te = this.props.bIncludeClipEditor
                ? [
                    (0, s.jsx)(
                      be,
                      {
                        pos: ee,
                        label: (0, y.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (ae) => this.OnMouseDown(ae, "start"),
                      },
                      "start",
                    ),
                    (0, s.jsx)(
                      be,
                      {
                        pos: ve,
                        label: (0, y.we)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (ae) => this.OnMouseDown(ae, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, s.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, s.jsxs)("div", {
                className: Xr,
                children: [
                  (0, s.jsx)("div", { className: "DialogLabel", children: Tr }),
                  (0, s.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: re,
                  }),
                  (0, s.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, s.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, s.jsx)("div", {
                          className: "STV_timelineValue",
                          style: ge,
                        }),
                        (0, s.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: se,
                        }),
                        (0, s.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: le,
                        }),
                        _r,
                        te,
                        !!this.state.hoverX &&
                          (0, s.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, s.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, s.jsx)("img", {
                                      style: { width: "150px" },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, s.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: Fr,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, s.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: $r,
                          children: (0, s.jsx)("div", {
                            className: "STV_timelineGrabber" + Rr,
                            children: (0, s.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, s.jsx)(nr.apU, {}),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        Q([B.oI], Lr.prototype, "OnMouseDown", 1),
          Q([B.oI], Lr.prototype, "OnMouseMove", 1),
          Q([B.oI], Lr.prototype, "OnMouseUp", 1),
          Q([B.oI], Lr.prototype, "OnKeyDown", 1),
          Q([B.oI], Lr.prototype, "OnMouseHoverMove", 1),
          Q([B.oI], Lr.prototype, "OnMouseHoverLeave", 1),
          Q([B.oI], Lr.prototype, "AdjustHoverForClientX", 1),
          Q([B.oI], Lr.prototype, "OnSegmentClick", 1),
          Q([B.oI], Lr.prototype, "OnMarkerMouseEnter", 1),
          Q([B.oI], Lr.prototype, "OnMarkerMouseLeave", 1),
          (Lr = Q([f.PA], Lr));
        let qr = class extends o.Component {
          state = { info: null };
          static getDerivedStateFromProps(c, w) {
            return (!w.info || w.info.m_steamIDBroadcast !== c.steamID) &&
              (w.info && (M.es.StopInfo(w.info), (w.info = null)), c.steamID)
              ? { info: M.es.StartInfo(c.steamID) }
              : null;
          }
          componentWillUnmount() {
            this.state.info && M.es.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const c = this.props.steamID,
              w = this.props.onLocalStreamChange;
            return w && V.td.stream[c]
              ? (0, s.jsx)(Cr, { value: c, options: V.td.stream, onChange: w })
              : null;
          }
          render() {
            let { info: c } = this.state;
            if (!c) return null;
            let w = "";
            c.m_nViewerCount && (w = (0, A.Dq)(c.m_nViewerCount));
            let D =
                V.td.bValid && V.td.stream && V.td.stream[c.m_steamIDBroadcast],
              P =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(c.m_strAppId) > 0 || D);
            const Z =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              D &&
              V.td.gidEvent;
            return (0, s.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, s.jsx)(fr, {
                    className: "broadcastDetailsThumbBlur",
                    src: c.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, s.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    c &&
                      c.m_strAppTitle &&
                      (0, s.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, s.jsx)("span", {
                                className: "AppTitle",
                                children: c.m_strAppTitle,
                              }),
                              c.m_strTitle &&
                                (0, s.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", c.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          w &&
                            (0, s.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, s.jsx)(nr.y_e, {}),
                                (0, y.Yp)("#Broadcast_ViewerCount", w),
                              ],
                            }),
                        ],
                      }),
                    D &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, s.jsx)("div", {
                        className: "Actions",
                        children: (0, s.jsx)("div", {
                          onClick: (_) =>
                            this.props.onOpenLinkInNewWindow?.(_, V.td.link),
                          className: "BroadcastLink",
                          children: V.td.linkName,
                        }),
                      }),
                  ],
                }),
                Z && (0, s.jsx)(T.m, { gidEvent: V.td.gidEvent }),
                P &&
                  (0, s.jsx)(E.p, {
                    id:
                      V.td.bValid &&
                      V.td.stream &&
                      V.td.stream[c.m_steamIDBroadcast]
                        ? V.td.appID
                        : parseInt(c.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        qr = Q([f.PA], qr);
        class Cr extends o.Component {
          showContextMenu(w) {
            const { options: D, value: P, onChange: Z } = this.props,
              _ = Object.keys(D).map((cr) =>
                (0, s.jsx)(
                  g.IK,
                  {
                    onSelected: () => Z(cr),
                    bChecked: cr === P,
                    children: (0, y.we)(D[cr]),
                  },
                  cr,
                ),
              );
            (0, t.lX)((0, s.jsx)(g.tz, { children: _ }), w);
          }
          render() {
            const { value: w, options: D } = this.props,
              P = D[w];
            return (0, s.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, s.jsxs)("span", { children: ["\xA0- ", (0, y.we)(P)] }),
                (0, s.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, s.jsx)(nr.GB9, {}),
                }),
              ],
            });
          }
        }
        Q([B.oI], Cr.prototype, "showContextMenu", 1);
        let de = class extends o.Component {
          constructor(c) {
            super(c), (this.state = { sizableRegion: [] });
          }
          async AddLinkRegion() {
            let c = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + c,
              yPosPct: 2.5 + c,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          componentDidUpdate(c) {
            c.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((w, D) => {
                this.LoadLinkRegion(w, D);
              });
          }
          async LoadLinkRegion(c, w) {
            let D = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: c.left,
              yPosPct: c.top,
              widthPct: c.width,
              heightPct: c.height,
              link_url: c.url,
              link_description: c.link_description,
              link_index: c.link_index,
            }),
              await this.setState({ sizableRegion: this.state.sizableRegion });
          }
          OnSaveRegions() {
            let c;
            c = { links: [] };
            for (let w = 0; w < this.state.sizableRegion.length; w++) {
              let D;
              (D = {
                left: Math.floor(this.state.sizableRegion[w].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[w].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[w].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[w].heightPct * 100),
                url: this.state.sizableRegion[w].link_url,
                link_description: this.state.sizableRegion[w].link_description,
                link_index: w,
              }),
                c.links.push(D);
            }
            this.props.onSaveLinkRegions?.(c);
          }
          async DeleteRegion(c) {
            this.state.sizableRegion.splice(c, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          async UpdatePanel(c, w) {
            const D = [...this.state.sizableRegion];
            (D[c] = w),
              this.setState({ sizableRegion: D }, () => this.OnSaveRegions());
          }
          render() {
            return (0, s.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, s.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((c) => {
                          const w = (0, J.p)(c.url);
                          return (0, s.jsx)(
                            p.uU,
                            {
                              href: c.url,
                              bForceExternal: w,
                              bUseLinkFilter: w,
                              children: (0, s.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: c.left + "%",
                                  top: c.top + "%",
                                  width: c.width + "%",
                                  height: c.height + "%",
                                },
                                children: (0, s.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [c.link_description, " "],
                                }),
                              }),
                            },
                            c.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((c, w) =>
                        (0, s.jsx)(
                          rr.I,
                          {
                            index: w,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: c.xPosPct,
                            yPosPct: c.yPosPct,
                            widthPct: c.widthPct,
                            heightPct: c.heightPct,
                            link_url: c.link_url,
                            link_description: c.link_description,
                          },
                          w * 100 + c.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, s.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, y.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, s.jsx)("div", {
                    children: (0, y.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        Q([B.oI], de.prototype, "AddLinkRegion", 1),
          Q([B.oI], de.prototype, "LoadLinkRegion", 1),
          Q([B.oI], de.prototype, "OnSaveRegions", 1),
          Q([B.oI], de.prototype, "DeleteRegion", 1),
          Q([B.oI], de.prototype, "UpdatePanel", 1),
          (de = Q([f.PA], de));
      },
      25317: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, {
          M5: () => Y,
          MU: () => E,
          MX: () => rr,
          Rt: () => fr,
          U7: () => T,
          fn: () => i,
          j: () => vr,
        });
        var s = d(10142),
          hr = d(41735),
          f = d.n(hr),
          o = d(14947),
          t = d(72604),
          k = d(76559),
          ar = d(61639),
          M = d(74498),
          H = d(7582),
          B = d(28462),
          er = d(34592),
          j = d(3166),
          X = d(34032),
          U = Object.defineProperty,
          W = Object.getOwnPropertyDescriptor,
          g = (nr, p, u, y) => {
            for (
              var A = y > 1 ? void 0 : y ? W(p, u) : p, tr = nr.length - 1, L;
              tr >= 0;
              tr--
            )
              (L = nr[tr]) && (A = (y ? L(p, u, A) : L(A)) || A);
            return y && A && U(p, u, A), A;
          };
        let a = !1;
        function i(nr) {
          return !!(nr && nr.thumbnail_http_address);
        }
        function Y(nr, p) {
          if (p || nr) {
            const u = p || nr;
            return !!(u && vr.Get().BIsAppStreaming(u));
          }
          return !1;
        }
        const yr = class nt {
          constructor() {
            (0, o.Gn)(this);
          }
          static s_GlobalStore;
          m_inFlightRequests = new Map();
          m_lookupKeyToEmbedStreamDef = new Map();
          m_lookupStreams = new Map();
          m_playReadyStream = new Map();
          m_bMapHasStartedVideo = new Map();
          m_mapBroadcastChecked = new Map();
          m_pageChatStatus = "hide";
          m_streamChatStatus = "hide";
          m_bUserChatExpanded = void 0;
          m_bUserPreferenceHideBroadcastByDefault = void 0;
          m_bCollapsed = void 0;
          m_setStreamChangedListeners = new Set();
          m_bUseFakeData = !1;
          m_onLoadContextCall = new Map();
          BHasStreams(p) {
            const u = this.GetStreams(p);
            return !!(u && u.length > 0);
          }
          AddCallbackOnNewContext(p, u, y) {
            this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(p), {
              name: u,
              fnCallback: y,
            });
          }
          ClearCallbackOnNewContext(p) {
            this.m_onLoadContextCall.set(
              this.GetStreamsLookupKeyFromDef(p),
              null,
            );
          }
          GetPlayReadyStream(p) {
            let u = this.GetStreamsLookupKeyFromDef(p);
            return this.m_playReadyStream.get(u);
          }
          BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
            return !!this.m_bUserPreferenceHideBroadcastByDefault;
          }
          BIsEmbeddedStreamCollapsed() {
            return !!this.m_bCollapsed;
          }
          SetEmbeddedStreamCollapsed(p) {
            this.m_bCollapsed != p && (this.m_bCollapsed = p);
          }
          GetConcurrentStreams(p) {
            const u = this.GetStreams(p);
            return u ? u.filter((y) => i(y)).length : 0;
          }
          GetChatVisibility() {
            return this.m_pageChatStatus === "remove" ||
              this.m_streamChatStatus === "remove"
              ? "remove"
              : this.m_bUserChatExpanded !== void 0
                ? this.m_bUserChatExpanded
                  ? "show"
                  : "hide"
                : this.m_pageChatStatus === "show"
                  ? "show"
                  : this.m_pageChatStatus === "hide" ||
                      this.m_streamChatStatus === "hide"
                    ? "hide"
                    : "show";
          }
          ToggleChatVisibility() {
            const p = this.GetChatVisibility();
            p !== "remove" && (this.m_bUserChatExpanded = p === "hide");
          }
          DebugDumpContextAndAvailableContext(p) {
            console.log(
              "Requested context",
              this.GetStreamsLookupKeyFromDef(p),
            ),
              console.log(
                "Available context count: ",
                this.m_lookupStreams.size,
              ),
              this.m_lookupStreams.forEach((u, y) => {
                console.log(y, u.length);
              });
          }
          GetStreams(p) {
            const u = this.GetStreamsLookupKeyFromDef(p);
            return this.m_lookupStreams.get(u);
          }
          GetBroadcastURL(p) {
            let u = null;
            return (
              p.steamid
                ? (u = new k.b(p.steamid))
                : (u = k.b.InitFromAccountID(p.accountid)),
              j.TS.COMMUNITY_BASE_URL +
                "broadcast/watch/" +
                u.ConvertTo64BitString()
            );
          }
          BIsAppStreaming(p) {
            let u = !1;
            return (
              this.m_lookupStreams.forEach((y) => {
                u ||
                  (u =
                    !!y &&
                    y.some(
                      (A) =>
                        M.es.GetOrCreateBroadcastInfo(A.steamid).m_nAppID === p,
                    ));
              }),
              u
            );
          }
          GetStreamsForAppID(p) {
            const u = new Array();
            return (
              this.m_lookupStreams.forEach((y) => {
                y?.forEach((A) => {
                  M.es.GetOrCreateBroadcastInfo(A.steamid).m_nAppID === p &&
                    u.push(A);
                });
              }),
              u
            );
          }
          AddStreamChangedListener(p) {
            this.m_setStreamChangedListeners.add(p);
          }
          RemoveStreamChangedListener(p) {
            this.m_setStreamChangedListeners.delete(p);
          }
          async LoadBIsEmbeddedBroadcastHidden(p) {
            if (this.m_bUserPreferenceHideBroadcastByDefault === void 0) {
              let u = (0, j.Tc)("broadcastuser", "application_config");
              if (!u)
                try {
                  let y =
                    j.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences";
                  u = (await f().get(y, { params: {}, cancelToken: p.token }))
                    .data;
                } catch (y) {
                  console.log(
                    "LoadBIsEmbeddedBroadcastHidden: " +
                      (0, er.H)(y).strErrorMsg,
                  ),
                    (u = { bHideStoreBroadcast: !1 });
                }
              (0, o.h5)(() => {
                (this.m_bUserPreferenceHideBroadcastByDefault =
                  u.bHideStoreBroadcast),
                  (this.m_bCollapsed = u.bHideStoreBroadcast);
              });
            }
            return this.m_bUserPreferenceHideBroadcastByDefault;
          }
          async SetupEmbeddableVOD(p, u) {
            (this.m_bUseFakeData = !1),
              (this.m_streamChatStatus = "remove"),
              await s.A.Get().QueueAppRequest(p.nAppIDVOD, {
                include_assets: !0,
                include_trailers: !0,
              });
            const y = s.A.Get().GetApp(p.nAppIDVOD),
              A = new X.TT();
            if (
              ((A.accountid = 0),
              (A.nAppIDVOD = p.nAppIDVOD),
              (A.default_selection_priority = X.mY.k_ePrimary),
              (A.current_selection_priority = X.mY.k_ePrimary),
              (A.thumbnail_http_address = y?.GetAssets().GetHeaderURL() || ""),
              (A.title = y?.GetName() || ""),
              this.GetStreams(p).unshift(A),
              u)
            ) {
              const tr = this.GetStreamsLookupKeyFromDef(p);
              this.m_playReadyStream.set(tr, A);
            }
          }
          async HintLoadEmbeddablePreviewStreams(p) {
            let u = null,
              y = {
                eventid: p.event ? p.event.GID : void 0,
                previewAccounts:
                  p.bIsPreview && p.accountIDs
                    ? p.accountIDs.slice().sort().join(",")
                    : void 0,
              };
            try {
              return (
                (u = await f().get(
                  j.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                  { params: y },
                )),
                this.HandleHintLoadBroadcastResponse(p, u.data)
              );
            } catch (A) {
              let tr = (0, er.H)(A);
              console.error(
                "HintLoadEmbeddablePreviewStreams hit error loading: " +
                  tr.strErrorMsg,
                tr,
              );
            }
            return [];
          }
          async HintLoadEmbeddableStreams(p) {
            let u = this.MapEmbeddableStreamToRequest(p),
              y = this.GetStreamsLookupKeyFromParam(u);
            if (!this.m_inFlightRequests.has(y)) {
              this.m_lookupKeyToEmbedStreamDef.set(y, p);
              const A = this.InternalHintLoadEmbeddableStreams(p, u);
              this.m_inFlightRequests.set(y, A);
            }
            return this.m_inFlightRequests.get(y);
          }
          async InternalHintLoadEmbeddableStreams(p, u) {
            let y = (0, j.Tc)(
              "broadcast_available_for_page",
              "application_config",
            );
            if ((0, X.h7)(y)) return this.HandleHintLoadBroadcastResponse(p, y);
            try {
              let A = null;
              return (
                (A = await f().get(
                  j.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                  { params: u },
                )),
                this.HandleHintLoadBroadcastResponse(p, A.data)
              );
            } catch (A) {
              let tr = (0, er.H)(A);
              console.error(
                "HintLoadEmbeddableStreams hit error loading: " +
                  tr.strErrorMsg,
                tr,
              );
            }
            return [];
          }
          async HandleHintLoadBroadcastResponse(p, u) {
            (this.m_bUseFakeData = !1),
              p.bIsPreview &&
                (u?.filtered?.length > 0
                  ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                      p.event,
                      u.filtered,
                    )
                  : ((u = {
                      filtered: [{}],
                      success: 1,
                      total_count: 1,
                      err_msg: "",
                      broadcast_chat_visibility: "hide",
                    }),
                    (this.m_bUseFakeData = !0))),
              u.broadcast_chat_visibility &&
                (this.m_pageChatStatus = u.broadcast_chat_visibility);
            const y = new Array();
            (0, o.h5)(() => {
              u.filtered.forEach((L) => {
                if (!L.steamid) {
                  const q = k.b.InitFromAccountID(L.accountid);
                  L.steamid = q.ConvertTo64BitString();
                }
                const V = M.es.GetOrCreateBroadcastInfo(L.steamid),
                  ur = L.appid ? Number(L.appid) : M.fO;
                (V.m_nAppID = ur),
                  (V.m_strAppId = "" + ur),
                  L.current_selection_priority === void 0 &&
                    (L.current_selection_priority =
                      L.default_selection_priority),
                  ur != M.fO && y.push(ur);
              });
            });
            const A = this.GetStreamsLookupKeyFromDef(p);
            if (
              (this.m_lookupStreams.set(A, u.filtered),
              this.m_onLoadContextCall.has(A))
            ) {
              const L = this.m_onLoadContextCall.get(A);
              L && L.fnCallback();
            }
            const tr = this.GetStreams(p);
            return await this.AutoStartVideoStream(p, tr), tr;
          }
          ExtractBroadcastPrioritiesFromPartnerEventForPreview(p, u) {
            const y = Array.from(p.jsondata.broadcast_whitelist ?? []),
              A = Array.from(p.jsondata.broadcast_priority ?? []),
              tr = new Map();
            for (let L = 0; L < y.length && !(L >= A.length); L++)
              tr.set(y[L], (0, X.PH)(A[L]));
            u.forEach((L) => {
              const V = Number(L.accountid);
              tr.has(V) && (L.current_selection_priority = tr.get(V));
            });
          }
          async AutoStartVideoStream(p, u) {
            let y = this.GetStreamsLookupKeyFromDef(p);
            if (this.m_bMapHasStartedVideo.get(y)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(y)) {
                const A = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: X.mY.k_eGeneral,
                  current_selection_priority: X.mY.k_eGeneral,
                };
                this.m_playReadyStream.set(y, A);
              }
              return this.m_playReadyStream;
            }
            return this.PlayFromAvailableStreams(p, u);
          }
          async PlayFromAvailableStreams(p, u, y = !1) {
            const A = new Set();
            for (;;) {
              const tr = u.filter((ur) => !A.has(ur) && (!y || !ur.nAppIDVOD)),
                L = this.GetAutoStartStream(tr);
              if (!L) return null;
              if (await this.AttemptToPlayStream(p, L)) return L;
              A.add(L);
            }
          }
          async AttemptToPlayStream(p, u) {
            let y = this.GetStreamsLookupKeyFromDef(p);
            if (
              (this.m_bMapHasStartedVideo.set(y, !0),
              this.m_mapBroadcastChecked.has(u.accountid) ||
                this.m_mapBroadcastChecked.set(
                  u.accountid,
                  this.InternalAttemptToPlayStream(p, u),
                ),
              u.nAppIDVOD)
            )
              this.m_playReadyStream.set(y, u);
            else {
              const A = await this.m_mapBroadcastChecked.get(u.accountid);
              if (A?.success == t.R) {
                (u.steamid = A.steamid),
                  this.m_playReadyStream.set(y, u),
                  this.GetConcurrentStreams(p) > 1
                    ? (this.m_streamChatStatus = "hide")
                    : (this.m_streamChatStatus = u.broadcast_chat_visibility),
                  this.m_setStreamChangedListeners.forEach((L) => L(u));
                const tr = M.es.GetOrCreateBroadcastInfo(u.steamid).m_nAppID;
                T(tr, ar.Mc.iy, u.snr);
              } else return null;
            }
            return u;
          }
          async InternalAttemptToPlayStream(p, u) {
            let y = this.GetStreamsLookupKeyFromDef(p),
              A = null;
            try {
              const tr = j.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let L = {
                broadcastaccountid: u.accountid,
                viewer_token: M.es.GetViewerToken(),
                origin: self.origin,
              };
              return (A = await f().get(tr, { params: L })), A.data;
            } catch (tr) {
              let L = (0, er.H)(tr);
              console.error(
                "Broadcast.AttemptToPlayStream: " + L.strErrorMsg,
                L,
              );
            }
            return null;
          }
          GetAutoStartStream(p) {
            if (!p) return null;
            const u = p.filter((L) => i(L)),
              y = u.reduce((L, V) => Math.max(L, fr(V)), 0),
              A = u.filter((L) => fr(L) === y);
            if (A.length === 0) return null;
            const tr = Math.floor(Math.random() * A.length);
            return A[tr];
          }
          MapEmbeddableStreamToRequest(p) {
            return {
              appid: p.appid,
              promotionName: p.bIsPreview ? "preview" : p.promotionName,
              clanid: p.clanid
                ? p.clanid
                : p.event
                  ? p.event.clanSteamID.GetAccountID()
                  : void 0,
              listid: p.listid,
              subid: p.subid,
              bundleid: p.bundleid,
              eventid: p.event ? p.event.GID : void 0,
              previewAccounts:
                p.bIsPreview && p.accountIDs
                  ? p.accountIDs.slice().sort().join(",")
                  : void 0,
              test: a,
              cc: j.TS.COUNTRY,
              l: j.TS.LANGUAGE,
              hubtype: p.event?.GetContentHubType(),
              hubcategory: p.event?.GetContentHubCategory(),
              hubtagid: p.event?.GetContentHubTag(),
              tabuniqueid: p.tabuniqueid,
              tabfilter: p.tabfilter,
              rt_now_override_test: H.HD.BHasTimeOverride()
                ? H.HD.GetTimeNowWithOverride()
                : void 0,
            };
          }
          GetStreamsLookupKeyFromDef(p) {
            return this.GetStreamsLookupKeyFromParam(
              this.MapEmbeddableStreamToRequest(p),
            );
          }
          GetStreamsLookupKeyFromParam(p) {
            return JSON.stringify(p);
          }
          static Get() {
            return (
              nt.s_GlobalStore ||
                ((nt.s_GlobalStore = new nt()), nt.s_GlobalStore.Init()),
              nt.s_GlobalStore
            );
          }
          Init() {}
        };
        g([o.sH], yr.prototype, "m_lookupStreams", 2),
          g([o.sH], yr.prototype, "m_playReadyStream", 2),
          g([o.sH], yr.prototype, "m_pageChatStatus", 2),
          g([o.sH], yr.prototype, "m_streamChatStatus", 2),
          g([o.sH], yr.prototype, "m_bUserChatExpanded", 2),
          g([o.sH], yr.prototype, "m_bUserPreferenceHideBroadcastByDefault", 2),
          g([o.sH], yr.prototype, "m_bCollapsed", 2),
          g([o.XI], yr.prototype, "HintLoadEmbeddablePreviewStreams", 1),
          g([o.XI], yr.prototype, "AttemptToPlayStream", 1);
        let vr = yr;
        function fr(nr) {
          return nr.current_selection_priority || X.mY.k_eGeneral;
        }
        function E(nr) {
          nr.sort((p, u) =>
            fr(p) != fr(u)
              ? fr(u) - fr(p)
              : p.viewer_count != u.viewer_count
                ? u.viewer_count - p.viewer_count
                : u.accountid - p.accountid,
          );
        }
        async function T(nr, p, u) {
          if (nr > 0 && nr != 7 && u) {
            let y = new URLSearchParams();
            y.append("page_action", "" + p),
              y.append("snr", u),
              f().post(
                j.TS.STORE_BASE_URL + "ajaxreportproductaction/" + nr + "/",
                y,
              );
          }
        }
        const rr = new B.T();
      },
      18614: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { l: () => B, m: () => H });
        var s = d(14947),
          hr = d(76559),
          f = d(7582),
          o = d(79118),
          t = Object.defineProperty,
          k = Object.getOwnPropertyDescriptor,
          ar = (er, j, X, U) => {
            for (
              var W = U > 1 ? void 0 : U ? k(j, X) : j, g = er.length - 1, a;
              g >= 0;
              g--
            )
              (a = er[g]) && (W = (U ? a(j, X, W) : a(W)) || W);
            return U && W && t(j, X, W), W;
          };
        const M = class Ye {
          constructor() {
            (0, s.Gn)(this);
          }
          m_mapBroadcasterSteamIDToEvents = new Map();
          m_mapBroadcasterSteamIDData = new Map();
          static GetBBCodeParam(j, X, U = "") {
            const g = new RegExp(`\\W${X}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(j);
            return g ? g[1] : U;
          }
          static ParseCalendarEventPresentersFromText(j) {
            const X =
                /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
              U = new Array();
            for (;;) {
              const W = X.exec(j);
              if (W === null) break;
              const g = W[1],
                a = W[2],
                i = Ye.GetBBCodeParam(g, "steamid"),
                Y = {
                  steamID: i ? new hr.b(i) : void 0,
                  name: Ye.GetBBCodeParam(g, "name"),
                  title: Ye.GetBBCodeParam(g, "title"),
                  company: Ye.GetBBCodeParam(g, "company"),
                  photo: Ye.GetBBCodeParam(g, "photo"),
                  bio: a,
                };
              U.push(Y);
            }
            return U;
          }
          static ParseEventModelPresenters(j, X) {
            const U = j.GetDescriptionWithFallback(X);
            return Ye.ParseCalendarEventPresentersFromText(U);
          }
          static ParseEventAppReferencesFromText(j) {
            const X = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
              U = new Set();
            for (;;) {
              const W = X.exec(j);
              if (W === null) break;
              const g = W[1];
              U.add(Number(g));
            }
            return U;
          }
          static ParseEventModelAppReferences(j, X) {
            const U = j.GetDescriptionWithFallback(X),
              W = Ye.ParseEventAppReferencesFromText(U);
            if (j.jsondata?.referenced_appids)
              for (const g of j.jsondata.referenced_appids) W.add(g);
            return W;
          }
          async BuildBroadcasterSteamIDToActiveEventMap(j) {
            const X = f.HD.GetTimeNowWithOverride(),
              W = j.GetCalendarItemsInTimeRange(X - 3600, X);
            for (const Y of W.rgCalendarItems)
              o.O3.QueueLoadPartnerEvent(Y.clanid, Y.unique_id);
            const g = W.rgCalendarItems.map((Y) =>
                o.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  hr.b.InitFromClanID(Y.clanid),
                  Y.unique_id,
                  0,
                ),
              ),
              a = await Promise.all(g),
              i = new Map();
            for (const Y of a)
              if (Y && !(Y.endTime && Y.endTime < X))
                for (const yr of Y.GetBroadcastWhitelistAsSteamIDs())
                  i.has(yr) ? i.get(yr).push(Y) : i.set(yr, [Y]);
            return i;
          }
          IsBroadcasterAlreadyBound(j, X) {
            const U = this.m_mapBroadcasterSteamIDToEvents.get(j),
              W = U ? U.length : 0;
            if ((X ? X.length : 0) != W) return !1;
            for (let a = 0; a < W; a++) if (U[a] != X[a].GID) return !1;
            return !0;
          }
          static BuildSteamIDToPresenterMapFromEventList(j, X) {
            let U = new Map();
            for (const W of j) {
              if (!W) continue;
              const g = Ye.ParseEventModelPresenters(W, X);
              for (const a of g)
                a.steamID && U.set(a.steamID.ConvertTo64BitString(), a);
            }
            return U;
          }
          RemoveCachedDataIfNotInMap(j) {
            const X = new Array();
            this.m_mapBroadcasterSteamIDToEvents.forEach((U, W) => {
              j.has(W) || X.push(W);
            }),
              X.forEach((U) => {
                this.m_mapBroadcasterSteamIDData.delete(U),
                  this.m_mapBroadcasterSteamIDToEvents.delete(U);
              });
          }
          static BuildAppIDRefsForEventList(j, X) {
            const U = new Set();
            for (const W of j)
              Ye.ParseEventModelAppReferences(W, X).forEach((a) => U.add(a));
            return Array.from(U);
          }
          UpdateCachedDataFromEvents(j, X) {
            j.forEach((U, W) => {
              if (this.IsBroadcasterAlreadyBound(W, U)) return;
              const g = {
                m_mapPresenters: Ye.BuildSteamIDToPresenterMapFromEventList(
                  U,
                  X,
                ),
                m_rgAppIDs: Ye.BuildAppIDRefsForEventList(U, X),
              };
              this.m_mapBroadcasterSteamIDData.set(W, g),
                this.m_mapBroadcasterSteamIDToEvents.set(
                  W,
                  U.map((a) => a.GID),
                );
            });
          }
          async SynchronizeEventsWithBroadcasts(j, X) {
            const U = await this.BuildBroadcasterSteamIDToActiveEventMap(j);
            this.RemoveCachedDataIfNotInMap(U),
              this.UpdateCachedDataFromEvents(U, X);
          }
          GetPresenterMapForBroadcasterSteamID(j) {
            return this.m_mapBroadcasterSteamIDData.get(j)?.m_mapPresenters;
          }
          GetAppIDListForBroadcasterSteamID(j) {
            return this.m_mapBroadcasterSteamIDData.get(j)?.m_rgAppIDs;
          }
        };
        ar([s.sH], M.prototype, "m_mapBroadcasterSteamIDData", 2);
        let H = M;
        const B = new H();
      },
      74498: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { es: () => Qr, fK: () => Jr, a0: () => Wr, fO: () => Kr });
        var s = d(41735),
          hr = d.n(s),
          f = d(14947),
          o = d(6600),
          t = d(90828);
        function k(R, m, b) {
          return [R, m, b];
        }
        class ar extends Error {}
        class M extends t.J8 {
          m_appid;
          constructor(m) {
            super(), (this.m_appid = m || 0);
          }
          GetAppID() {
            return this.m_appid;
          }
          parseColor(m) {
            if (typeof m != "string" || !m.match(/^#[0-9a-fA-F]{6}$/))
              throw new ar("expected color string");
            return [
              parseInt(m.substring(1, 3), 16),
              parseInt(m.substring(3, 5), 16),
              parseInt(m.substring(5, 7), 16),
            ];
          }
          parseString(m) {
            if (typeof m == "string") return m;
            throw new ar("expected string");
          }
          parseNumber(m) {
            if (typeof m == "number") return m;
            throw new ar("expected number");
          }
          parseDate(m) {
            if (typeof m == "number") return new Date(m);
            throw new ar("expected timestamp");
          }
          parseArray(m, b) {
            let z = [];
            if (typeof m != "object" || !Array.isArray(m))
              throw new ar("expected array");
            let S = m.length;
            for (let J = 0; J < S; ++J)
              try {
                z.push(b(m[J]));
              } catch (C) {
                throw (
                  ((C.message +=
                    `
...while parsing array element ` + J),
                  C)
                );
              }
            return z;
          }
          parseDict(m, b) {
            let z = new Map();
            if (typeof m != "object" || Array.isArray(m))
              throw new ar("expected object");
            for (let S in m)
              try {
                z.set(S, b(m[S]));
              } catch (J) {
                throw (
                  ((J.message +=
                    `
...while parsing dictionary element ` + S),
                  J)
                );
              }
            return z;
          }
          parseBracket(m) {
            let b = {
              name: this.parseString(m.name),
              start: this.parseDate(m.start),
              color: [255, 0, 255],
            };
            return (
              "params" in m &&
                (b.params = this.parseDict(
                  m.params,
                  this.parseString.bind(this),
                )),
              "end" in m && (b.end = this.parseDate(m.end)),
              "color" in m && (b.color = this.parseColor(m.color)),
              b
            );
          }
          parseMarker(m) {
            let b = { time: this.parseDate(m.time), color: [0, 255, 255] };
            return (
              "name" in m && (b.name = this.parseString(m.name)),
              "params" in m &&
                (b.params = this.parseDict(
                  m.params,
                  this.parseString.bind(this),
                )),
              "color" in m && (b.color = this.parseColor(m.color)),
              b
            );
          }
          parseSoundTrack(m) {
            let b = {};
            return (
              "song_title" in m &&
                (b.song_title = this.parseString(m.song_title)),
              "appid" in m && (b.appid = this.parseNumber(m.appid)),
              "song_index" in m &&
                (b.song_index = this.parseNumber(m.song_index)),
              b
            );
          }
          parseBroadcastGameData(m) {
            let b = { appid: 0, brackets: [], markers: [] };
            return (
              "appid" in m && (b.appid = this.parseNumber(m.appid)),
              "brackets" in m &&
                (b.brackets = this.parseArray(
                  m.brackets,
                  this.parseBracket.bind(this),
                )),
              "markers" in m &&
                (b.markers = this.parseArray(
                  m.markers,
                  this.parseMarker.bind(this),
                )),
              "soundtrack" in m &&
                (b.soundtrack = this.parseSoundTrack(m.soundtrack)),
              b
            );
          }
          convertTime(m, b) {
            return m - b / 1e3;
          }
          UpdateMarkers(m, b) {
            let z = [],
              S = [];
            for (const J of m)
              J.persistent
                ? (S.length > 0 &&
                    (S[S.length - 1].nTimeEnd = this.convertTime(
                      J.Timestamp,
                      b,
                    )),
                  J.name.length > 0 &&
                    S.push({
                      strTemplateName: J.name,
                      nTimeStart: this.convertTime(J.Timestamp, b),
                      nTimeEnd: -1,
                      color: k(J.color_r, J.color_g, J.color_b),
                    }))
                : z.push({
                    strTemplateName: J.name,
                    nTime: this.convertTime(J.Timestamp, b),
                    color: k(J.color_r, J.color_g, J.color_b),
                  });
            return { rgMarkers: z, rgSegments: S };
          }
          UpdateRegions(m) {
            let b = [];
            for (const z of m)
              b.push({
                strTemplateName: z.name,
                min: { x: z.min_x, y: z.min_y },
                max: { x: z.max_x, y: z.max_y },
                behavior: z.behavior,
              });
            return b;
          }
          UpdateSoundtrack(m, b) {}
        }
        var H = d(48937),
          B = d(89083),
          er = d(13854),
          j = d(3166),
          X = d(27066),
          U = d(7409),
          W = d(14043),
          g = d(8323),
          a = d(72604),
          i = Object.defineProperty,
          Y = Object.getOwnPropertyDescriptor,
          yr = (R, m, b, z) => {
            for (
              var S = z > 1 ? void 0 : z ? Y(m, b) : m, J = R.length - 1, C;
              J >= 0;
              J--
            )
              (C = R[J]) && (S = (z ? C(m, b, S) : C(S)) || S);
            return z && S && i(m, b, S), S;
          };
        const vr = 250,
          fr = 250;
        class E {
          m_elVideo;
          m_peerConnection = null;
          m_strBroadcastSteamID = "";
          m_ulWebRTCSessionID = "";
          m_schCandidateTimer = new g.LU();
          m_nHostCandidateGeneration = 0;
          m_nCandidateUpdateIntervalMS = 0;
          m_listeners = new g.Ji();
          m_bFirstPlay = !0;
          m_bStatsViewVisible = !1;
          m_schCaptureDisplayStatsTrigger = new g.LU();
          m_stats = new U._L();
          constructor(m) {
            (0, f.Gn)(this), (this.m_elVideo = m);
          }
          async PlayMPD(m, b, z) {}
          async PlayWebRTC(m, b, z, S, J) {
            (this.m_strBroadcastSteamID = m),
              (this.m_ulWebRTCSessionID = z),
              (this.m_nHostCandidateGeneration = 0),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "resize",
                this.OnVideoResize,
              );
            let C = { urls: ["stun:" + S] },
              or = { urls: ["turn:" + S], username: b, credential: z },
              Q = { iceServers: [C, or], iceTransportPolicy: "relay" };
            const Or = new RTCPeerConnection(Q);
            (this.m_peerConnection = Or),
              (Or.oniceconnectionstatechange = ((F) => {
                this.m_peerConnection &&
                  (console.log(
                    "BroadcastWebRTC: ICE connection state changed to " +
                      this.m_peerConnection.iceConnectionState,
                  ),
                  this.m_peerConnection.iceConnectionState === "failed"
                    ? this.OnWebRTCConnectionFailed()
                    : this.m_peerConnection.iceConnectionState ===
                        "disconnected" && this.OnWebRTCConnectionRetry());
              }).bind(this)),
              (Or.onicecandidate = ((F) => {
                if (F.candidate) {
                  const O = new FormData();
                  O.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    O.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    O.append("sdp_mid", String(F.candidate.sdpMid)),
                    O.append(
                      "sdp_mline_index",
                      String(F.candidate.sdpMLineIndex),
                    ),
                    O.append("candidate", F.candidate.candidate),
                    hr()
                      .post(
                        `${j.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                        O,
                      )
                      .then((K) => {
                        const $ = K.data;
                        ($.success && $.success == a.R) ||
                          console.log(
                            "Failed to add a WebRTC session ICE candidate: " +
                              String($.success),
                          );
                      })
                      .catch((K) =>
                        console.log(
                          "Failed to add a WebRTC session ICE candidate" + K,
                        ),
                      );
                }
              }).bind(this)),
              (Or.ontrack = ((F) => {
                F.track.kind === "video" &&
                  ((this.m_elVideo.src = ""),
                  (this.m_elVideo.srcObject = F.streams[0]),
                  this.Play());
              }).bind(this)),
              Or.setRemoteDescription({ type: "offer", sdp: J }).then(
                async () => {
                  await Or.setLocalDescription(await Or.createAnswer());
                  const F = new FormData();
                  F.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    F.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    F.append("answer", Or.localDescription?.sdp ?? "");
                  try {
                    await hr()
                      .post(
                        `${j.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                        F,
                      )
                      .then((O) => {
                        const K = O.data;
                        if (!(K.success && K.success == a.R))
                          throw new Error(String(K.success));
                      });
                  } catch (O) {
                    console.log(
                      "Failed to set the WebRTC session answer: " + O,
                    ),
                      this.OnWebRTCConnectionRetry();
                    return;
                  }
                  (this.m_nCandidateUpdateIntervalMS = vr),
                    this.m_schCandidateTimer.Schedule(
                      this.m_nCandidateUpdateIntervalMS,
                      () => this.GetHostCandidates(),
                    );
                },
              );
          }
          async GetHostCandidates() {
            const m = new FormData();
            m.append("broadcaststeamid", this.m_strBroadcastSteamID),
              m.append("webrtc_session_id", this.m_ulWebRTCSessionID),
              m.append(
                "candidate_generation",
                String(this.m_nHostCandidateGeneration),
              );
            try {
              await hr()
                .post(
                  `${j.TS.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                  m,
                )
                .then((b) => {
                  const z = b.data,
                    S = z.data,
                    J = this.m_peerConnection;
                  if (z.success && z.success == a.R)
                    J &&
                    S.candidate_generation > this.m_nHostCandidateGeneration
                      ? (S.candidates.forEach((C) => {
                          const or = new RTCIceCandidate({
                            sdpMid: C.sdp_mid,
                            sdpMLineIndex: C.sdp_mline_index,
                            candidate: C.candidate,
                          });
                          J.addIceCandidate(or).catch((Q) => console.error(Q));
                        }),
                        (this.m_nHostCandidateGeneration =
                          S.candidate_generation))
                      : this.m_nHostCandidateGeneration > 0 &&
                        (this.m_nCandidateUpdateIntervalMS *= 2);
                  else throw new Error(String(z.success));
                });
            } catch (b) {
              console.log("Failed to get WebRTC session ICE candidates" + b),
                this.OnWebRTCConnectionRetry();
              return;
            }
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates(),
            );
          }
          DispatchEvent(m, b = null) {
            let z = new CustomEvent(m, {
              cancelable: !0,
              bubbles: !0,
              detail: b,
            });
            this.m_elVideo.dispatchEvent(z);
          }
          OnWebRTCConnectionRetry() {
            this.DispatchEvent("valve-webrtcretry");
          }
          OnWebRTCConnectionFailed() {
            this.DispatchEvent("valve-webrtcfailed");
          }
          Close() {
            this.m_listeners.Unregister(),
              this.m_schCandidateTimer.Cancel(),
              this.m_schCaptureDisplayStatsTrigger.Cancel(),
              this.m_peerConnection &&
                (this.m_peerConnection.close(), (this.m_peerConnection = null)),
              this.m_elVideo.pause(),
              (this.m_elVideo.srcObject = null),
              this.m_stats.GetFPSMonitor().Close(),
              (this.m_bFirstPlay = !0);
          }
          IsBuffering() {
            return !1;
          }
          GetCurrentPlayTime() {
            return 0;
          }
          GetLiveContentStartTime() {
            return new Date(0);
          }
          GetAvailableVideoStartTime() {
            return 0;
          }
          GetBufferedLiveEdgeTime() {
            return 0;
          }
          IsPaused() {
            return this.m_elVideo.paused;
          }
          async Play() {
            const m = this.m_bFirstPlay;
            this.m_bFirstPlay = !1;
            let b = !1;
            const z = () => {
                (b = !0),
                  this.m_stats
                    .GetFPSMonitor()
                    .StartTracking(() =>
                      this.m_stats.ExtractFrameInfo(this.m_elVideo),
                    );
              },
              S = (C, or) => !1,
              J = (C, or) => !1;
            try {
              await this.m_elVideo.play(), z();
            } catch (C) {
              C.name === "NotAllowedError"
                ? S("Failed to play video, probably due to auto play policy", C)
                : J("Failed to play video", C);
            }
            !b && m && this.DispatchEvent("valve-userinputneeded");
          }
          Pause() {
            this.m_elVideo.pause();
          }
          CanSeek() {
            return !1;
          }
          SeekAndPlay(m) {
            return this.Play(), 0;
          }
          Seek(m) {
            return 0;
          }
          JumpTime(m) {
            return 0;
          }
          IsMuted() {
            return this.m_elVideo.muted;
          }
          SetMuted(m) {
            this.m_elVideo.muted = m;
          }
          SetVolume(m) {
            (m = er.OQ(m, 0, 1)), (this.m_elVideo.volume = m);
          }
          GetVolume() {
            return this.m_elVideo.volume;
          }
          GetDASHPlayerStats() {
            return this.m_stats;
          }
          SetStatsViewIsVisible(m) {
            m && !this.m_bStatsViewVisible
              ? (this.CaptureStatsForDisplay(),
                this.m_schCaptureDisplayStatsTrigger.Schedule(
                  fr,
                  this.CaptureStatsForDisplay,
                ))
              : !m &&
                this.m_bStatsViewVisible &&
                this.m_schCaptureDisplayStatsTrigger.Cancel(),
              (this.m_bStatsViewVisible = m);
          }
          CaptureStatsForDisplay() {
            this.m_stats.SetHTMLVideoPlayerDisplay(
              this.m_elVideo.videoWidth,
              this.m_elVideo.videoHeight,
              this.m_elVideo.clientWidth,
              this.m_elVideo.clientHeight,
            ),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                fr,
                this.CaptureStatsForDisplay,
              );
          }
          OnVideoPause(m) {
            this.m_stats.GetFPSMonitor().Close();
          }
          OnVideoResize(m) {
            this.m_stats.GetFPSMonitor().SetWindowResized();
          }
          GetVideoRepresentations() {
            let m = [];
            return m.push({ id: W.Y, displayName: "Auto", selected: !0 }), m;
          }
          SetVideoRepresentation(m) {}
          IsLiveContent() {
            return !0;
          }
          BHasTimedText() {
            return !1;
          }
        }
        yr([X.o], E.prototype, "PlayWebRTC", 1),
          yr([f.XI.bound], E.prototype, "CaptureStatsForDisplay", 1),
          yr([X.o], E.prototype, "OnVideoPause", 1),
          yr([X.o], E.prototype, "OnVideoResize", 1);
        var T = d(99412),
          rr = d(90711),
          nr = d(41635),
          p = d(71742),
          u = d(18210),
          y = d(34592),
          A = d(30720),
          tr = d(54326),
          L = d(44930),
          V = Object.defineProperty,
          ur = Object.getOwnPropertyDescriptor,
          q = (R, m, b, z) => {
            for (
              var S = z > 1 ? void 0 : z ? ur(m, b) : m, J = R.length - 1, C;
              J >= 0;
              J--
            )
              (C = R[J]) && (S = (z ? C(m, b, S) : C(S)) || S);
            return z && S && V(m, b, S), S;
          };
        const ir = 1800,
          jr = 1e3,
          Sr = 5 * 1e3,
          Kr = 7;
        var Jr = ((R) => (
          (R[(R.None = 0)] = "None"),
          (R[(R.Unlocking = 1)] = "Unlocking"),
          (R[(R.Loading = 2)] = "Loading"),
          (R[(R.Ready = 3)] = "Ready"),
          (R[(R.Error = 4)] = "Error"),
          R
        ))(Jr || {});
        async function he(R, m, b) {
          if (!m) return;
          let z = new FormData();
          z.append("steamid", R),
            z.append("broadcastid", m),
            z.append("viewertoken", b);
          try {
            await hr().post(j.TS.CHAT_BASE_URL + "broadcast/stopwatching", z);
          } catch {}
        }
        class Hr {
          m_rtUnlockTime = 0;
          m_schUnlockTimeout = new g.LU();
          m_broadcast;
          m_video;
          UnlockH264(m, b) {
            this.BCanUnlockH264()
              ? (m.SetState(1, ""),
                console.log("Unlocking H.264 for broadcast video playback"),
                this.RequestUnlockH264(),
                (this.m_broadcast = m),
                (this.m_video = b),
                (this.m_rtUnlockTime = Date.now()),
                this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                ))
              : m.SetState(4, (0, u.we)("#BroadcastWatch_MinBrowser"));
          }
          BCanUnlockH264() {
            return (0, L.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Client supports direct H.264 unlock"), !0)
              : (0, L.Dp)("BrowserView.PostMessageToParent")
                ? (console.log("Client supports browserview H.264 unlock"), !0)
                : (console.log("Client does not support H.264 unlock"), !1);
          }
          RequestUnlockH264() {
            (0, L.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Requesting direct H.264 unlock"),
                SteamClient.RemotePlay.UnlockH264())
              : (0, L.Dp)("BrowserView.PostMessageToParent")
                ? (console.log("Requesting browserview unlock"),
                  SteamClient.BrowserView.PostMessageToParent(
                    "UnlockH264Request",
                    "CUnlockH264Helper",
                  ))
                : console.log(
                    "Failed to request H.264 unlock: no method supported",
                  );
          }
          CheckUnlockState() {
            if (this.m_broadcast.m_eWatchState != 1) return;
            if ((0, H.Mc)() || (0, H.aM)()) {
              console.log("Unlocking H.264 successful"),
                this.m_broadcast.SetState(0, ""),
                this.m_video.Restart();
              return;
            }
            Date.now() - this.m_rtUnlockTime > 6 * 1e3
              ? (console.log(
                  "Unlocking H.264 timed out (Steam client or servers offline?)",
                ),
                this.m_broadcast.SetState(
                  4,
                  (0, u.we)("#BroadcastWatch_MinBrowser"),
                ))
              : this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                );
          }
        }
        class kr {
          constructor() {
            (0, f.Gn)(this);
          }
          m_steamIDBroadcast = "";
          m_ulBroadcastID = "";
          m_ulViewerToken = "";
          m_strCDNAuthUrlParameters = void 0;
          m_bWebRTC = !1;
          m_data;
          m_eWatchState = 0;
          m_strStateDescription = "";
          m_rgVideos = [];
          m_schManifestTimeout = new g.LU();
          m_schHeartbeatTimeout = new g.LU();
          SetState(m, b = "") {
            (this.m_eWatchState = m),
              (this.m_strStateDescription = b),
              m == 4 && console.log(this.m_strStateDescription);
          }
        }
        q([f.sH], kr.prototype, "m_ulBroadcastID", 2),
          q([f.sH], kr.prototype, "m_eWatchState", 2),
          q([f.sH], kr.prototype, "m_strStateDescription", 2),
          q([f.XI], kr.prototype, "SetState", 1);
        class wr {
          m_steamIDBroadcast = "";
          m_bInitialized = !1;
          m_strTitle = "";
          m_strAppId = "" + Kr;
          m_nAppID = Kr;
          m_strAppTitle = "";
          m_strThumbnailUrl = "";
          m_nViewerCount = 0;
          m_bIsOnline = !1;
          m_schUpdateTimeout = new g.LU();
          m_nRefCount = 0;
          constructor(m) {
            (0, f.Gn)(this), (this.m_steamIDBroadcast = m);
          }
        }
        q([f.sH], wr.prototype, "m_bInitialized", 2),
          q([f.sH], wr.prototype, "m_strTitle", 2),
          q([f.sH], wr.prototype, "m_strAppId", 2),
          q([f.sH], wr.prototype, "m_nAppID", 2),
          q([f.sH], wr.prototype, "m_strAppTitle", 2),
          q([f.sH], wr.prototype, "m_strThumbnailUrl", 2),
          q([f.sH], wr.prototype, "m_nViewerCount", 2),
          q([f.sH], wr.prototype, "m_bIsOnline", 2);
        class Pe {
          constructor() {
            (0, f.Gn)(this);
          }
          m_eWatchState = 0;
          m_strStateDescription = "";
          m_rgVideos = [];
          SetState(m, b = "") {
            (this.m_eWatchState = m),
              (this.m_strStateDescription = b),
              m == 4 && console.log(this.m_strStateDescription);
          }
        }
        q([f.sH], Pe.prototype, "m_eWatchState", 2),
          q([f.sH], Pe.prototype, "m_strStateDescription", 2),
          q([f.XI], Pe.prototype, "SetState", 1);
        class Zr extends Pe {
          m_clipID;
          m_data;
        }
        class ue extends Pe {
          m_nAppIDVOD;
          m_manifestURL;
        }
        class Nr {
          m_mapBroadcasts = new Map();
          m_mapClips = new Map();
          m_mapVODs = new Map();
          m_activeVideo = null;
          m_broadcastSettings = { nVolume: 1, bMuted: !1, ulViewerToken: "0" };
          m_schSaveSettings = new g.LU();
          m_broadcastInfos = {};
          constructor() {
            (0, f.Gn)(this), this.LoadBroadcastSettings();
          }
          GetBroadcastState(m) {
            if (m.IsBroadcastClip()) {
              let b = this.m_mapClips.get(m.GetBroadcastClipID());
              return b ? b.m_eWatchState : 0;
            } else if (m.IsBroadcastVOD()) {
              const b = this.m_mapVODs.get(m.GetBroadcastAppIDVOD());
              return b ? b.m_eWatchState : 0;
            } else {
              let b = this.m_mapBroadcasts.get(m.GetBroadcastSteamID());
              return b ? b.m_eWatchState : 0;
            }
          }
          GetBroadcastStateDescription(m) {
            if (m.IsBroadcastClip()) {
              let b = this.m_mapClips.get(m.GetBroadcastClipID());
              return b ? b.m_strStateDescription : "";
            } else if (m.IsBroadcastVOD()) {
              const b = this.m_mapVODs.get(m.GetBroadcastAppIDVOD());
              return b ? b.m_strStateDescription : "";
            } else {
              let b = this.m_mapBroadcasts.get(m.GetBroadcastSteamID());
              return b ? b.m_strStateDescription : "";
            }
          }
          CreateBroadcastVideo(m, b, z, S) {
            let J = this.GetOrCreateBroadcast(b),
              { nVolume: C, bMuted: or } = this.m_broadcastSettings,
              Q = new dr(m, C, or, z);
            return (
              Q.SetBroadcastSteamID(b),
              J.m_rgVideos.push(Q),
              (J.m_bWebRTC = S),
              !(0, H.Mc)() && !(0, H.aM)() && new Hr().UnlockH264(J, Q),
              Q
            );
          }
          CreateClipVideo(m, b, z) {
            let S = this.GetOrCreateClip(b),
              { nVolume: J, bMuted: C } = this.m_broadcastSettings,
              or = new dr(m, J, C, z);
            return (
              or.SetBroadcastClipID(b),
              S.m_rgVideos.push(or),
              !(0, H.Mc)() && !(0, H.aM)() && new Hr().UnlockH264(S, or),
              or
            );
          }
          CreateVODVideo(m, b, z) {
            let S = this.GetOrCreateVOD(b),
              { nVolume: J, bMuted: C } = this.m_broadcastSettings,
              or = new dr(m, J, C, z);
            return (
              or.SetBroadcastAppIDVOD(b),
              S.m_rgVideos.push(or),
              !(0, H.Mc)() && !(0, H.aM)() && new Hr().UnlockH264(S, or),
              or
            );
          }
          StartVideo(m) {
            if (m.IsBroadcastClip()) {
              console.log(`Starting clip for ${m.GetBroadcastClipID()}`);
              let b = this.m_mapClips.get(m.GetBroadcastClipID());
              if (!b) return;
              this.SetActiveVideo(m),
                b.m_eWatchState == 0
                  ? this.GetClipManifest(b, m.GetWatchLocation())
                  : b.m_eWatchState == 3 && m.StartClip(b);
            } else if (m.IsBroadcastVOD()) {
              console.log(`Starting VOD for ${m.GetBroadcastAppIDVOD()}`);
              let b = this.m_mapVODs.get(m.GetBroadcastAppIDVOD());
              if (!b) return;
              this.SetActiveVideo(m),
                b.m_eWatchState == 0
                  ? this.GetVODManifest(b, m.GetWatchLocation())
                  : b.m_eWatchState == 3 && m.StartVOD(b);
            } else {
              let b = this.m_mapBroadcasts.get(m.GetBroadcastSteamID());
              if (!b) return;
              this.SetActiveVideo(m),
                b.m_eWatchState == 0
                  ? this.GetBroadcastManifest(b, m.GetWatchLocation())
                  : b.m_eWatchState == 3 && m.StartBroadcast(b);
            }
          }
          SetActiveVideo(m) {
            this.m_mapBroadcasts.forEach((b) => {
              for (let z of b.m_rgVideos)
                z != m && z.StopPlaybackTillUserInput();
            }),
              this.m_mapClips.forEach((b) => {
                for (let z of b.m_rgVideos)
                  z != m && z.StopPlaybackTillUserInput();
              }),
              (this.m_activeVideo = m);
          }
          PauseAllVideo() {
            this.m_mapBroadcasts.forEach((m) => {
              for (let b of m.m_rgVideos) b.StopPlaybackTillUserInput();
            });
          }
          async StopVideo(m) {
            let b = m.GetBroadcastSteamID(),
              z = this.m_mapBroadcasts.get(b);
            m.Stop(),
              z &&
                (z.m_ulBroadcastID &&
                  he(
                    b,
                    z.m_ulBroadcastID,
                    this.m_broadcastSettings.ulViewerToken,
                  ),
                nr.Wp(z.m_rgVideos, (S) => S == m),
                this.RemoveBroadcastIfUnused(z));
          }
          StartInfo(m) {
            const b = this.GetOrCreateBroadcastInfo(m);
            return (
              b.m_nRefCount++,
              (!b.m_bInitialized || !b.m_schUpdateTimeout.IsScheduled()) &&
                this.LoadBroadcastInfo(b),
              b
            );
          }
          StopInfo(m) {
            m.m_nRefCount--;
          }
          GetOrCreateBroadcastInfo(m) {
            if (!m) return new wr("");
            if (!this.m_broadcastInfos[m]) {
              const b = (0, f.sH)(new wr(m));
              this.m_broadcastInfos[m] = b;
            }
            return this.m_broadcastInfos[m];
          }
          GetOrCreateBroadcast(m) {
            let b = this.m_mapBroadcasts.get(m);
            return (
              b ||
              ((b = new kr()),
              (b.m_steamIDBroadcast = m),
              (b.m_eWatchState = 0),
              this.m_mapBroadcasts.set(m, b),
              b)
            );
          }
          GetBroadcast(m) {
            return this.m_mapBroadcasts.get(m);
          }
          GetBroadcastClip(m) {
            return this.m_mapClips.get(m);
          }
          GetBroadcastVOD(m) {
            return this.m_mapVODs.get(m);
          }
          RemoveBroadcastIfUnused(m) {
            m.m_rgVideos.length ||
              (m.m_schHeartbeatTimeout.Cancel(),
              m.m_schManifestTimeout.Cancel(),
              this.m_mapBroadcasts.delete(m.m_steamIDBroadcast));
          }
          GetOrCreateClip(m) {
            let b = this.m_mapClips.get(m);
            return (
              b ||
              ((b = new Zr()),
              (b.m_clipID = m),
              (b.m_eWatchState = 0),
              this.m_mapClips.set(m, b),
              b)
            );
          }
          GetOrCreateVOD(m) {
            let b = this.m_mapVODs.get(m);
            return (
              b ||
              ((b = new ue()),
              (b.m_nAppIDVOD = m),
              (b.m_eWatchState = 0),
              this.m_mapVODs.set(m, b),
              b)
            );
          }
          async LoadBroadcastInfo(m) {
            let b = "0",
              z = this.m_mapBroadcasts.get(m.m_steamIDBroadcast);
            if ((z && (b = z.m_ulBroadcastID), m.m_nRefCount == 0)) return;
            const S = {
              steamid: m.m_steamIDBroadcast,
              broadcastid: b,
              location:
                z &&
                z.m_rgVideos &&
                z.m_rgVideos[0] &&
                z.m_rgVideos[0].GetWatchLocation(),
            };
            try {
              const J = await hr().get(
                `${j.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                { params: S },
              );
              if (!J || !J.data || !J.data.success || J.data.success != a.R) {
                m.m_bInitialized = !0;
                return;
              }
              const C = J.data;
              (0, f.h5)(() => {
                (m.m_bInitialized = !0),
                  (m.m_strTitle = C.title),
                  (m.m_strAppId = C.appid),
                  (m.m_nAppID = Number.parseInt(C.appid)),
                  (m.m_strAppTitle = C.app_title),
                  (m.m_strThumbnailUrl = C.thumbnail_url),
                  (m.m_nViewerCount = C.viewer_count),
                  (m.m_bIsOnline = C.is_online),
                  !m.m_strTitle &&
                    o.td &&
                    ((m.m_strTitle = o.td.name),
                    (m.m_strAppTitle = o.td.appName || o.td.name));
                const or = C.update_interval;
                or &&
                  typeof or == "number" &&
                  m.m_schUpdateTimeout.Schedule(or * 1e3, () =>
                    this.LoadBroadcastInfo(m),
                  );
              });
            } catch (J) {
              console.error(J);
            }
          }
          DelayedGetBroadcastManifest(m, b, z = Date.now()) {
            m.m_schManifestTimeout.Schedule(Sr, () =>
              this.GetBroadcastManifest(m, b, z),
            );
          }
          async GetBroadcastManifest(m, b, z = Date.now()) {
            m.SetState(2, "");
            let S = {
                steamid: m.m_steamIDBroadcast,
                broadcastid: 0,
                viewertoken: this.m_broadcastSettings.ulViewerToken,
                watchlocation: b,
                sessionid: (0, j.KC)(),
                is_webrtc: m.m_bWebRTC,
              },
              J = null;
            try {
              J = await hr().get(
                j.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
                { params: S, withCredentials: !0 },
              );
            } catch (Q) {
              let Or = (0, y.H)(Q);
              console.error(
                "Failed to get broadcast manifest!" + Or.strErrorMsg,
                Or,
              );
            }
            if (!J || J.status != 200) {
              m.SetState(4, (0, u.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let C = J.data;
            C.viewertoken && this.SetViewerToken(C.viewertoken);
            let or = C.success;
            if (or == "ready")
              m.SetState(3),
                (m.m_ulBroadcastID = C.broadcastid),
                (m.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
                (m.m_strCDNAuthUrlParameters = C.cdn_auth_url_parameters),
                (m.m_bWebRTC = C.is_webrtc),
                (m.m_data = C),
                this.LoadBroadcast(m),
                setTimeout(() => {
                  m.m_schHeartbeatTimeout.Schedule(
                    m.m_data.heartbeat_interval * 1e3,
                    () => this.HeartbeatBroadcast(m),
                  );
                }, Math.random() * 3e4);
            else if (or == "waiting") {
              m.SetState(2, (0, u.we)("#BroadcastWatch_WaitingForResponse"));
              let Q = Date.now() - z;
              if (Q > 60 * 1e3) {
                m.SetState(4, (0, u.we)("#BroadcastWatch_NotAvailable"));
                return;
              }
              let Or = Q > 30 * 1e3 ? C.retry : 5e3;
              m.m_schManifestTimeout.Schedule(Or, () =>
                this.GetBroadcastManifest(m, b, z),
              );
            } else
              or == "waiting_for_start"
                ? (m.SetState(2, (0, u.we)("#BroadcastWatch_WaitingForStart")),
                  m.m_schManifestTimeout.Schedule(C.retry, () =>
                    this.GetBroadcastManifest(m, b, z),
                  ))
                : or == "waiting_for_reconnect"
                  ? (m.SetState(
                      2,
                      (0, u.we)("#BroadcastWatch_WaitingForReconnect"),
                    ),
                    m.m_schManifestTimeout.Schedule(C.retry, () =>
                      this.GetBroadcastManifest(m, b, z),
                    ))
                  : or == "end"
                    ? m.SetState(4, (0, u.we)("#BroadcastWatch_NotAvailable"))
                    : or == "too_many_broadcasts"
                      ? m.SetState(
                          4,
                          (0, u.we)("#BroadcastWatch_TooManyBroadcasts"),
                        )
                      : or == "system_not_supported"
                        ? m.SetState(
                            4,
                            (0, u.we)("#BroadcastWatch_SystemNotSupported"),
                          )
                        : or == "user_restricted"
                          ? m.SetState(
                              4,
                              (0, u.we)("#BroadcastWatch_UserRestricted"),
                            )
                          : or == "poor_upload_quality"
                            ? m.SetState(
                                4,
                                (0, u.we)("#BroadcastWatch_PoorUploadQuality"),
                              )
                            : or == "request_failed"
                              ? m.SetState(
                                  4,
                                  (0, u.we)("#BroadcastWatch_RequestFailed"),
                                )
                              : or == "too_many_viewers"
                                ? m.SetState(
                                    4,
                                    (0, u.we)("#BroadcastWatch_TooManyViewers"),
                                  )
                                : m.SetState(
                                    4,
                                    (0, u.we)("#BroadcastWatch_NotAvailable"),
                                  );
          }
          async GetClipManifest(m, b) {
            m.SetState(2, "");
            let z = {
                clipid: m.m_clipID,
                watchlocation: b,
                sessionid: (0, j.KC)(),
              },
              S = null;
            try {
              S = await hr().get(
                j.TS.CHAT_BASE_URL + "broadcast/getclipdetails",
                { params: z, withCredentials: !0 },
              );
            } catch (C) {
              console.error(C), console.log("Failed to get clip manifest!");
            }
            if (!S || S.status != 200) {
              m.SetState(4, (0, u.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let J = S.data;
            J.success == a.R
              ? (m.SetState(3), (m.m_data = J), this.LoadClip(m))
              : m.SetState(4, (0, u.we)("#BroadcastWatch_RequestFailed"));
          }
          async GetVODManifest(m, b) {
            m.SetState(2, "");
            let z = await A.K.Get().LoadVODForAppID(m.m_nAppIDVOD);
            z
              ? (m.SetState(3),
                (m.m_manifestURL = z.video_url),
                this.LoadVOD(m))
              : m.SetState(4, (0, u.we)("#BroadcastWatch_RequestFailed"));
          }
          async HeartbeatBroadcast(m) {
            let b = new FormData();
            b.append("steamid", m.m_steamIDBroadcast),
              b.append("broadcastid", m.m_ulBroadcastID),
              b.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
              hr().post(j.TS.CHAT_BASE_URL + "broadcast/heartbeat/", b),
              m.m_schHeartbeatTimeout.Schedule(
                m.m_data.heartbeat_interval * 1e3,
                () => this.HeartbeatBroadcast(m),
              );
          }
          LoadBroadcast(m) {
            const b = this.m_activeVideo;
            b &&
              m.m_rgVideos.findIndex((z) => z == b) >= 0 &&
              b.StartBroadcast(m);
          }
          LoadClip(m) {
            const b = this.m_activeVideo;
            b && m.m_rgVideos.findIndex((z) => z == b) >= 0 && b.StartClip(m);
          }
          LoadVOD(m) {
            const b = this.m_activeVideo;
            b && m.m_rgVideos.findIndex((z) => z == b) >= 0 && b.StartVOD(m);
          }
          BroadcastDownloadFailed(m, b = !0, z = B.N_.Invalid) {
            m.Stop();
            let S = this.m_mapBroadcasts.get(m.GetBroadcastSteamID());
            S &&
              S.m_eWatchState != 2 &&
              (S.m_bWebRTC && b && (S.m_bWebRTC = !1),
              z == B.N_.StreamGone
                ? this.DelayedGetBroadcastManifest(S, m.GetWatchLocation())
                : this.GetBroadcastManifest(S, m.GetWatchLocation()));
          }
          UserInputClickVideo(m) {
            if (
              this.m_activeVideo != m &&
              (this.PauseAllVideo(),
              (this.m_activeVideo = m),
              !m.IsBroadcastClip() && !m.IsBroadcastVOD())
            ) {
              let b = this.m_mapBroadcasts.get(m.GetBroadcastSteamID());
              b && this.GetBroadcastManifest(b, m.GetWatchLocation());
            }
            m.UserInputClick();
          }
          LoadBroadcastSettings() {
            if (!window.localStorage) return;
            let m = window.localStorage.getItem("broadcastSettings");
            if (!m) return;
            let b = JSON.parse(m);
            if (!b) return;
            Object.assign(this.m_broadcastSettings, b);
            let z = this.m_broadcastSettings;
            (z.bMuted = !!z.bMuted),
              (z.nVolume = er.OQ(z.nVolume, 0, 1)),
              typeof z.ulViewerToken != "string" && (z.ulViewerToken = "0");
          }
          SaveBroadcastSettings() {
            window.localStorage &&
              this.m_schSaveSettings.Schedule(jr, () => {
                try {
                  window.localStorage.setItem(
                    "broadcastSettings",
                    JSON.stringify(this.m_broadcastSettings),
                  );
                } catch {}
              });
          }
          SetViewerToken(m) {
            this.m_broadcastSettings.ulViewerToken != m &&
              ((this.m_broadcastSettings.ulViewerToken = m),
              this.SaveBroadcastSettings());
          }
          GetViewerToken() {
            return this.m_broadcastSettings.ulViewerToken;
          }
          SaveVolumeChange(m, b) {
            (this.m_broadcastSettings.nVolume == m &&
              this.m_broadcastSettings.bMuted == b) ||
              ((this.m_broadcastSettings.nVolume = m),
              (this.m_broadcastSettings.bMuted = b),
              this.SaveBroadcastSettings());
          }
        }
        q([f.sH], Nr.prototype, "m_mapBroadcasts", 2);
        var Wr = ((R) => (
          (R[(R.Timeline = 1)] = "Timeline"),
          (R[(R.Minimap = 2)] = "Minimap"),
          R
        ))(Wr || {});
        class dr {
          m_elVideo;
          m_player = null;
          m_listeners = new g.Ji();
          m_gameDataParser = null;
          m_eWatchLocation = rr.nn.Tq;
          m_bStartWithSubtitles = !1;
          m_steamIDBroadcast = "";
          m_BroadcastInfo = null;
          m_broadcastClipID = "";
          m_nBroadcastAppIDVOD = 0;
          m_bPaused = !1;
          m_nPlaybackTime = 0;
          m_bBuffering = !1;
          m_bOnLiveEdge = !1;
          m_nVolume = 0;
          m_bMuted = !1;
          m_bUserInputNeeded = !1;
          m_bIsReplay = !1;
          m_nTimelineDuration = ir;
          m_nVideoStartPos = 0;
          m_nVideoEndPos = 0;
          m_editorStartTime = 0;
          m_editorEndTime = 0;
          m_rgMarkers = f.sH.array();
          m_rgSegments = f.sH.array();
          m_rgRegions = f.sH.array();
          m_fnOnVideoEnd;
          m_videoEndingTimer;
          constructor(m, b, z, S) {
            (0, f.Gn)(this),
              (this.m_elVideo = m),
              (this.m_nVolume = b),
              (this.m_bMuted = z),
              (this.m_eWatchLocation = S);
          }
          SetBroadcastSteamID(m) {
            this.m_steamIDBroadcast = m;
          }
          GetBroadcastSteamID() {
            return this.m_steamIDBroadcast;
          }
          GetWatchLocation() {
            return this.m_eWatchLocation;
          }
          IsPaused() {
            return this.m_bPaused;
          }
          GetPlaybackTime() {
            return this.m_nPlaybackTime;
          }
          SetStatsViewIsVisible(m) {
            this.m_player && this.m_player.SetStatsViewIsVisible(m);
          }
          GetDASHPlayerStats() {
            return this.m_player?.GetDASHPlayerStats();
          }
          BHasDASHStats() {
            return this.m_player != null;
          }
          IsTimelineMapActive() {
            return !1;
          }
          CanSeek() {
            return this.m_player?.CanSeek() ?? !1;
          }
          IsBuffering() {
            return this.m_bBuffering;
          }
          IsOnLiveEdge() {
            return this.m_bOnLiveEdge;
          }
          GetVideoAvailableStartTime() {
            return this.m_nVideoStartPos;
          }
          GetVolume() {
            return this.m_nVolume;
          }
          GetUserInputNeeded() {
            return this.m_bUserInputNeeded;
          }
          IsReplay() {
            return this.m_bIsReplay;
          }
          IsBroadcastClip() {
            return !!this.m_broadcastClipID;
          }
          SetBroadcastClipID(m) {
            this.m_broadcastClipID = m;
          }
          GetBroadcastClipID() {
            return this.m_broadcastClipID;
          }
          IsBroadcastVOD() {
            return !!this.m_nBroadcastAppIDVOD;
          }
          SetBroadcastAppIDVOD(m) {
            this.m_nBroadcastAppIDVOD = m;
          }
          GetBroadcastAppIDVOD() {
            return this.m_nBroadcastAppIDVOD;
          }
          GetVideoRepresentations() {
            return this.m_player ? this.m_player.GetVideoRepresentations() : [];
          }
          SetVideoRepresentation(m) {
            this.m_player?.SetVideoRepresentation(m);
          }
          GetBroadcastInfo() {
            return this.m_BroadcastInfo;
          }
          BHasTimedText() {
            return this.m_player?.BHasTimedText() ?? !1;
          }
          BHasPlayer() {
            return !!this.m_player;
          }
          ListSubtitles() {
            return this.m_elVideo.textTracks;
          }
          GetSubtitles() {
            for (let m = 0; m < this.m_elVideo.textTracks.length; m++) {
              const b = this.m_elVideo.textTracks[m];
              if (b.mode === "showing") return b;
            }
            return null;
          }
          SetSubtitles(m) {
            let b = m ? u.bi[m] : T.xPp;
            this.m_player.SetSubtitles(b);
          }
          SetStartWithSubtitles(m) {
            this.m_bStartWithSubtitles = m;
          }
          GetBroadcastState() {
            return Qr.GetBroadcastState(this);
          }
          GetBroadcastStateDescription() {
            return Qr.GetBroadcastStateDescription(this);
          }
          SetOnVideoCallback(m) {
            this.m_fnOnVideoEnd = m;
          }
          InitPlayer() {
            (0, p.wT)(!this.m_player, "Initialized twice?"),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "playing",
                this.OnVideoPlaying,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "timeupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "volumechange",
                this.OnVolumeUpdated,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-bufferupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-gamedataupdate",
                this.OnGameDataUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-downloadfailed",
                this.OnDownloadFailed,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-webrtcretry",
                this.OnWebRTCRetry,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-webrtcfailed",
                this.OnWebRTCFailed,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-userinputneeded",
                this.OnUserInputNeeded,
              ),
              (this.m_bPaused = !1),
              (this.m_nPlaybackTime = 0),
              (this.m_bBuffering = !1),
              (this.m_nTimelineDuration = ir),
              (this.m_nVideoStartPos = 0),
              (this.m_nVideoEndPos = 0),
              this.m_rgMarkers.clear(),
              this.m_rgSegments.clear(),
              (this.m_bUserInputNeeded = !1),
              (this.m_bIsReplay = !1);
          }
          Restart() {
            this.IsMuted() ||
              this.IsPaused() ||
              this.GetUserInputNeeded() ||
              this.Play();
          }
          StartBroadcast(m) {
            if ((this.InitPlayer(), m.m_data.url)) {
              let z = new B.Zn(this.m_elVideo);
              z.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
                (this.m_player = z),
                z.PlayMPD(
                  m.m_data.url,
                  m.m_data.hls_url,
                  void 0,
                  m.m_strCDNAuthUrlParameters,
                );
            } else {
              let z = new E(this.m_elVideo);
              (this.m_player = z),
                z.PlayWebRTC(
                  this.m_steamIDBroadcast,
                  m.m_ulViewerToken,
                  m.m_data.webrtc_session_id,
                  m.m_data.webrtc_turn_server,
                  m.m_data.webrtc_offer_sdp,
                );
            }
            this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
            let b = this.m_player?.GetDASHPlayerStats();
            b &&
              b.SetBroadcasterAndViewerInfo(
                this.m_steamIDBroadcast,
                j.iA.steamid,
                m.m_ulBroadcastID,
                m.m_ulViewerToken,
              ),
              (this.m_BroadcastInfo = Qr.StartInfo(this.m_steamIDBroadcast));
          }
          StartClip(m) {
            this.InitPlayer();
            let b = new B.Zn(this.m_elVideo);
            b.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = b),
              b.PlayMPD(m.m_data.clip_url),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          StartVOD(m) {
            this.InitPlayer();
            let b = new B.Zn(this.m_elVideo);
            b.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = b),
              j.iA.logged_in &&
                m.m_nAppIDVOD &&
                b.SetBookmarkAdapter(new tr.M(m.m_nAppIDVOD)),
              m.m_manifestURL && b.PlayMPD(m.m_manifestURL),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          Stop() {
            this.m_listeners.Unregister(),
              this.m_BroadcastInfo &&
                (Qr.StopInfo(this.m_BroadcastInfo),
                (this.m_BroadcastInfo = null)),
              (this.m_gameDataParser = null),
              this.m_player && (this.m_player.Close(), (this.m_player = null));
          }
          TogglePlayPause() {
            !this.m_player || this.m_player.IsPaused()
              ? this.Play()
              : this.Pause();
          }
          Play() {
            const m = this.GetBroadcastState();
            if (m == 0 || this.IsBroadcastClip()) {
              Qr.StartVideo(this);
              return;
            } else if (m == 3)
              if ((Qr.SetActiveVideo(this), this.m_player))
                this.m_player.Play();
              else if (this.IsBroadcastVOD()) {
                const b = Qr.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
                b && this.StartVOD(b);
              } else {
                const b = Qr.GetBroadcast(this.m_steamIDBroadcast);
                b && this.StartBroadcast(b);
              }
          }
          Pause() {
            console.log(
              "Pause ",
              this.m_steamIDBroadcast,
              this.m_nBroadcastAppIDVOD,
              this.m_broadcastClipID,
            ),
              this.m_player && this.m_player.Pause();
          }
          JumpTime(m) {
            this.m_player?.JumpTime(m);
          }
          Seek(m) {
            this.m_player?.Seek(m);
          }
          SeekAndPlay(m) {
            this.m_player?.SeekAndPlay(m);
          }
          JumpToLiveEdge() {
            const m = this.m_player;
            m &&
              (m.IsLiveContent()
                ? this.SeekAndPlay(m.GetBufferedLiveEdgeTime())
                : this.SeekAndPlay(m.GetAvailableVideoStartTime()));
          }
          SetVolume(m) {
            this.m_player &&
              (this.m_player.SetVolume(m),
              (this.m_nVolume = this.m_player.GetVolume())),
              Qr.SaveVolumeChange(m, this.m_bMuted);
          }
          SetMute(m) {
            this.m_player && this.m_player.SetMuted(m),
              (this.m_bMuted = m),
              Qr.SaveVolumeChange(this.m_nVolume, m);
          }
          IsMuted() {
            return this.m_bMuted;
          }
          OnVideoPlaying() {
            (this.m_bPaused = !1),
              this.m_editorStartTime === 0 &&
                this.m_editorEndTime === 0 &&
                ((this.m_editorStartTime = this.GetVideoAvailableStartTime()),
                (this.m_editorEndTime =
                  this.GetVideoAvailableStartTime() +
                  this.GetTimelineDuration()));
          }
          OnVideoPause() {
            this.m_bPaused = !0;
          }
          OnVideoTimeUpdate() {
            window.clearTimeout(this.m_videoEndingTimer);
            const m = this.m_player;
            if (m)
              if (this.IsBroadcastClip())
                (this.m_nPlaybackTime = m.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = m.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = m.GetBufferedLiveEdgeTime()),
                  (this.m_nTimelineDuration =
                    this.m_nVideoEndPos - this.m_nVideoStartPos),
                  (this.m_bOnLiveEdge = !1),
                  (this.m_bBuffering = m.IsBuffering());
              else {
                if (
                  ((this.m_nPlaybackTime = m.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = m.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = Math.max(
                    m.GetBufferedLiveEdgeTime(),
                    this.m_nPlaybackTime,
                  )),
                  this.IsBroadcastVOD())
                ) {
                  this.m_nTimelineDuration = this.m_nVideoEndPos;
                  const b = this.m_fnOnVideoEnd;
                  b &&
                    this.m_nVideoEndPos - this.m_nPlaybackTime < B.Br &&
                    (this.m_videoEndingTimer = window.setTimeout(() => {
                      b();
                    }, 400));
                }
                (this.m_bBuffering = m.IsBuffering()),
                  (this.m_bOnLiveEdge =
                    this.m_nVideoEndPos - this.m_nPlaybackTime < B.Br),
                  m.IsPaused() && (this.m_bOnLiveEdge = !1);
              }
          }
          OnVolumeUpdated() {
            const m = this.m_player;
            m &&
              ((this.m_nVolume = m.GetVolume()), (this.m_bMuted = m.IsMuted()));
          }
          OnGameDataUpdate(m) {
            let b = m.detail;
            if (!b || typeof b.gamedata != "object") return;
            (!this.m_gameDataParser ||
              this.m_gameDataParser.GetAppID() != b.gamedata.__appid) &&
              (this.m_gameDataParser = new M(b.gamedata.__appid));
            const z = this.m_player?.GetLiveContentStartTime().getTime() ?? 0;
            if ("timelinemarkers" in b.gamedata) {
              const S = this.m_gameDataParser.UpdateMarkers(
                b.gamedata.__timelinemarkers,
                z,
              );
              S &&
                (this.m_rgMarkers.replace(S.rgMarkers || []),
                this.m_rgSegments.replace(S.rgSegments || []));
              const J = this.m_gameDataParser.UpdateRegions(
                b.gamedata.__regions,
              );
              J && this.m_rgRegions.replace(J);
            } else
              "soundtrack" in b.gamedata &&
                this.m_gameDataParser.UpdateSoundtrack(
                  this.m_steamIDBroadcast,
                  b.gamedata.soundtrack,
                );
          }
          OnDownloadFailed(m) {
            let b = m.detail || B.N_.Invalid;
            Qr.BroadcastDownloadFailed(this, !0, b);
          }
          OnWebRTCRetry() {
            Qr.BroadcastDownloadFailed(this, !1);
          }
          OnWebRTCFailed() {
            Qr.BroadcastDownloadFailed(this, !0);
          }
          OnUserInputNeeded() {
            this.m_bUserInputNeeded = !0;
          }
          UserInputClick() {
            (this.m_bUserInputNeeded = !1),
              this.m_player ? this.JumpToLiveEdge() : this.Play();
          }
          StopPlaybackTillUserInput() {
            this.Stop(), this.OnUserInputNeeded();
          }
          GetTimelineStartPos() {
            return this.m_nVideoEndPos - this.m_nTimelineDuration;
          }
          GetTimelineDuration() {
            return this.m_nTimelineDuration;
          }
          GetTimeAtMousePosition(m, b, z, S) {
            let J = er.Fu(m, b.left, b.right, z, S);
            return Math.floor(J + 0.5);
          }
          GetPercentOffsetFromTime(m, b) {
            let z = 0,
              S = 0;
            return (
              b == 1
                ? ((S = this.m_nVideoEndPos),
                  (z = S - this.m_nTimelineDuration))
                : ((z = 0), (S = 0)),
              er.Fu(m, z, S, 0, 100)
            );
          }
          GetTimelineMarkers() {
            return this.m_rgMarkers;
          }
          GetTimelineSegments() {
            return this.m_rgSegments;
          }
          GetGameDataRegions() {
            return this.m_rgRegions;
          }
          BHasMarkersOrSegments() {
            return this.has_segments || this.has_markers;
          }
          get has_markers() {
            return this.m_rgMarkers.length > 0;
          }
          get has_segments() {
            return this.m_rgSegments.length > 0;
          }
        }
        q([f.sH], dr.prototype, "m_player", 2),
          q([f.sH], dr.prototype, "m_bPaused", 2),
          q([f.sH], dr.prototype, "m_nPlaybackTime", 2),
          q([f.sH], dr.prototype, "m_bBuffering", 2),
          q([f.sH], dr.prototype, "m_bOnLiveEdge", 2),
          q([f.sH], dr.prototype, "m_nVolume", 2),
          q([f.sH], dr.prototype, "m_bMuted", 2),
          q([f.sH], dr.prototype, "m_bUserInputNeeded", 2),
          q([f.sH], dr.prototype, "m_bIsReplay", 2),
          q([f.sH], dr.prototype, "m_nTimelineDuration", 2),
          q([f.sH], dr.prototype, "m_nVideoStartPos", 2),
          q([f.sH], dr.prototype, "m_nVideoEndPos", 2),
          q([f.sH], dr.prototype, "m_editorStartTime", 2),
          q([f.sH], dr.prototype, "m_editorEndTime", 2),
          q([f.XI.bound], dr.prototype, "StartBroadcast", 1),
          q([f.XI.bound], dr.prototype, "StartClip", 1),
          q([f.XI.bound], dr.prototype, "StartVOD", 1),
          q([X.o], dr.prototype, "OnVideoPlaying", 1),
          q([X.o], dr.prototype, "OnVideoPause", 1),
          q([f.XI.bound], dr.prototype, "OnVideoTimeUpdate", 1),
          q([X.o], dr.prototype, "OnVolumeUpdated", 1),
          q([f.XI.bound], dr.prototype, "OnGameDataUpdate", 1),
          q([X.o], dr.prototype, "OnDownloadFailed", 1),
          q([X.o], dr.prototype, "OnWebRTCRetry", 1),
          q([X.o], dr.prototype, "OnWebRTCFailed", 1),
          q([X.o], dr.prototype, "OnUserInputNeeded", 1);
        const Qr = new Nr();
        window.uiBroadcastWatchStore = Qr;
      },
      7582: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { HD: () => M, f1: () => U, s4: () => W, sB: () => X });
        var s = d(19367),
          hr = d.n(s),
          f = d(90626),
          o = d(88034),
          t = d(47689),
          k = d(77291);
        class ar {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, o.mm)();
          }
          set nOverrideDateNow(a) {
            (0, o.ai)(a);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, o.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, o.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, o.mm)();
          }
          ParseDevOverrides(a) {
            if (!a || a.length == 0) return;
            new URLSearchParams(a[0] == "?" ? a.substring(1) : a).has("t");
          }
        }
        const M = new ar();
        (0, k.V)("g_EventCalendarDevFeatures", M);
        function H(g = 1) {
          const [a, i] = React.useState(() => j()),
            Y = useCancelTokenSource("useTimeNowWithOverride"),
            yr = React.useCallback(() => {
              Y.token.reason || i(j());
            }, []);
          return (
            React.useEffect(() => {
              const vr = 1e3 * g,
                fr = Date.now() % vr,
                E = vr - fr,
                T = window.setTimeout(yr, E);
              return () => {
                window.clearTimeout(T);
              };
            }, [a, g, yr]),
            a
          );
        }
        const er = Math.floor(new Date().getTime() / 1e3);
        function j() {
          const g = Math.floor(Date.now() / 1e3);
          return M.nOverrideDateNow ? M.nOverrideDateNow + (g - er) : g;
        }
        function X() {
          return M.nOverrideDateNow ?? er;
        }
        function U() {
          return f.useMemo(() => X(), []);
        }
        function W() {
          return f.useMemo(() => M.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      37656: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { w: () => vr });
        var s = d(41735),
          hr = d.n(s),
          f = d(14947),
          o = d(65946),
          t = d(90626),
          k = d(27066),
          ar = d(8323),
          M = d(30096),
          H = d(3166),
          B = Object.defineProperty,
          er = Object.getOwnPropertyDescriptor,
          j = (fr, E, T, rr) => {
            for (
              var nr = rr > 1 ? void 0 : rr ? er(E, T) : E,
                p = fr.length - 1,
                u;
              p >= 0;
              p--
            )
              (u = fr[p]) && (nr = (rr ? u(E, T, nr) : u(nr)) || nr);
            return rr && nr && B(E, T, nr), nr;
          };
        const X = class Qt {
          constructor() {
            (0, f.Gn)(this);
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
            const E = new Qt();
            return (
              (E.giveaway_id = this.giveaway_id),
              (E.seconds_until_drawing = this.seconds_until_drawing),
              (E.rtime_start = this.rtime_start),
              (E.rtime_end = this.rtime_end),
              (E.closed = this.closed),
              (E.winner_count = this.winner_count),
              E
            );
          }
        };
        j([f.sH], X.prototype, "giveaway_id", 2),
          j([f.sH], X.prototype, "seconds_until_drawing", 2),
          j([f.sH], X.prototype, "rtime_start", 2),
          j([f.sH], X.prototype, "rtime_end", 2),
          j([f.sH], X.prototype, "closed", 2),
          j([f.sH], X.prototype, "winner_count", 2);
        let U = X;
        const W = class st {
          constructor() {
            (0, f.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(E, T) {
            return E + "_" + T;
          }
          GetInfoByInstance(E, T) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(E, T),
            );
          }
          GetNextDrawChangeCallback(E) {
            return (
              this.m_mapNextDrawChangeCallback.has(E) ||
                this.m_mapNextDrawChangeCallback.set(E, new ar.lu()),
              this.m_mapNextDrawChangeCallback.get(E)
            );
          }
          CopyToGiveaway(E, T) {
            T.closed != E.closed && (T.closed = E.closed),
              T.giveaway_id != E.giveaway_id && (T.giveaway_id = E.giveaway_id),
              T.rtime_start != E.rtime_start && (T.rtime_start = E.rtime_start),
              T.rtime_end != E.rtime_end && (T.rtime_end = E.rtime_end),
              T.winner_count != E.winner_count &&
                (T.winner_count = E.winner_count),
              T.seconds_until_drawing != E.seconds_until_drawing &&
                (T.seconds_until_drawing = E.seconds_until_drawing);
          }
          async ReloadGiveaway(E, T) {
            if (!E) return null;
            let rr = H.TS.STORE_BASE_URL + "prizes/nextdraw/" + E,
              nr = null,
              p = { origin: self.origin };
            return (
              (nr = await hr().get(rr, { params: p })),
              (0, f.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(E) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(E, new U()),
                  this.CopyToGiveaway(
                    nr.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(E),
                  ),
                  T !== void 0)
                ) {
                  const u = this.GetKey(E, T);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(u) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      u,
                      new U(),
                    ),
                    this.CopyToGiveaway(
                      nr.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(u),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(E).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(E),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(E)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              st.s_Singleton ||
                ((st.s_Singleton = new st()), st.s_Singleton.Init()),
              st.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let E = (0, H.Tc)("giveawaynextdraw", "application_config");
              if (E && E.giveaway_id) {
                let T = new U();
                this.CopyToGiveaway(E, T),
                  this.m_mapGiveawayIDToNextDrawInfo.set(E.giveaway_id, T);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        j([f.sH], W.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          j([f.XI], W.prototype, "CopyToGiveaway", 1);
        let g = W;
        const a = class St {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = St.s_GlobalInstance),
              (St.s_GlobalInstance += 1);
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
          SetupRefreshDataInterval(E, T) {
            if ((this.ClearRefreshInterval(), !E.closed)) {
              let rr =
                E.seconds_until_drawing <= 0 && E.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(T, rr);
            }
          }
          SetupCountDown(E, T) {
            E > 0 && (this.m_intervalCountDownID = window.setInterval(T, 1e3));
          }
        };
        j([k.o], a.prototype, "ClearRefreshInterval", 1),
          j([k.o], a.prototype, "ClearCountDown", 1),
          j([k.o], a.prototype, "SetupRefreshDataInterval", 1),
          j([k.o], a.prototype, "SetupCountDown", 1);
        let i = a;
        function Y(fr, E) {
          const T = g.Get().GetInfoByInstance(fr, E.m_myInstanceNumber);
          (T.seconds_until_drawing -= 1),
            T.seconds_until_drawing == 0 && E.ClearCountDown();
        }
        function yr(fr, E) {
          const T = g.Get().GetInfoByInstance(fr, E.m_myInstanceNumber);
          T &&
            T.BIsValid() &&
            T.seconds_until_drawing <= 0 &&
            !T.closed &&
            (E.ClearCountDown(),
            g
              .Get()
              .ReloadGiveaway(fr, E.m_myInstanceNumber)
              .then((rr) => {
                E.SetupCountDown(rr.seconds_until_drawing, () => Y(fr, E));
              }));
        }
        function vr(fr) {
          const [E] = (0, t.useState)(new i()),
            T = (0, M.CH)();
          (0, t.useEffect)(
            () => (
              g
                .Get()
                .ReloadGiveaway(fr, E.m_myInstanceNumber)
                .then((y) => {
                  E.SetupRefreshDataInterval(y, () => yr(fr, E)),
                    E.SetupCountDown(y.seconds_until_drawing, () => Y(fr, E)),
                    T();
                }),
              () => {
                E.ClearRefreshInterval(), E.ClearCountDown();
              }
            ),
            [E, fr, T],
          );
          const rr = g.Get().GetInfoByInstance(fr, E.m_myInstanceNumber),
            [nr, p, u] = (0, o.q3)(() => [
              rr?.winner_count,
              rr?.closed,
              rr?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !rr || rr.giveaway_id == null || !rr.BStarted() || nr === void 0,
            winner_count: nr,
            closed: p,
            seconds_until_drawing: u,
          };
        }
      },
      80913: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { Q: () => B, h: () => H });
        var s = d(72604),
          hr = d(80902),
          f = d(75233),
          o = d(51614),
          t = d(90626),
          k = d(3166);
        const ar = { registered: !1 };
        function M(g) {
          return {
            queryKey: ["sale", "giveawayregistration", g, k.iA.accountid],
            queryFn: () => X(g),
            enabled: !!g,
            retry: !1,
          };
        }
        function H(g) {
          const { data: a, isError: i } = (0, hr.I)(M(g));
          return i ? ar : a;
        }
        function B() {
          const g = (0, f.jE)(),
            { mutateAsync: a } = (0, o.n)({
              mutationFn: U,
              onSuccess: (Y, yr) => g.setQueryData(M(yr).queryKey, Y),
            });
          return {
            fnCreateRegistration: t.useCallback(
              async (Y) => {
                try {
                  return await a(Y);
                } catch (yr) {
                  return (
                    console.error(
                      "Registering for giveaway " + Y + " failed",
                      yr,
                    ),
                    ar
                  );
                }
              },
              [a],
            ),
          };
        }
        const er = "saleaction/giveawayregistration",
          j = "saleaction/creategiveawayregistration";
        async function X(g) {
          const a = k.TS.STORE_BASE_URL + er + "?name=" + encodeURIComponent(g),
            i = await fetch(a, { credentials: "include" });
          return await W("GetUserGiveawayRegistration", g, a, i);
        }
        async function U(g) {
          const a = k.TS.STORE_BASE_URL + j,
            i = await fetch(a, {
              method: "POST",
              credentials: "include",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ name: g }),
            });
          return await W("UpdateUserGiveawayRegistration", g, a, i);
        }
        async function W(g, a, i, Y) {
          if (!Y.ok) throw new Error(i + " answered " + Y.status);
          const yr = await Y.json();
          if (yr?.success == s.R && yr.registration) return yr.registration;
          throw new Error(g + " on " + a + " answered " + yr?.success);
        }
      },
      30720: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { K: () => M });
        var s = d(41735),
          hr = d.n(s),
          f = d(14947),
          o = d(72604),
          t = d(34592),
          k = d(3166),
          ar = d(54326);
        class M {
          static s_VODStore;
          m_mapAppToVOD = new Map();
          GetVODForAppID(B) {
            return this.m_mapAppToVOD.get(B);
          }
          async LoadVODForAppID(B, er) {
            if (this.m_mapAppToVOD.has(B)) return this.m_mapAppToVOD.get(B);
            const j = k.TS.STORE_BASE_URL + "video/details/" + B + "/0",
              X = {};
            try {
              let U = await hr().get(j, {
                params: X,
                withCredentials: !0,
                cancelToken: er ? er.token : void 0,
              });
              if (er && er.token.reason) return;
              if (
                U &&
                U.status == 200 &&
                U.data &&
                (U.data.success == o.R || U.data.success == "ready")
              ) {
                let W = (0, f.sH)({
                  appid: B,
                  video_url: U.data.video_url,
                  bookmark: U.data.bookmark,
                });
                return (
                  U.data.bookmark
                    ? ar.t.Get().SetBookmarkForApp(B, U.data.bookmark)
                    : ar.t.Get().InitializeBookmarkForApp(B),
                  this.m_mapAppToVOD.set(B, W),
                  W
                );
              }
            } catch (U) {
              let W = (0, t.H)(U);
              console.error(
                "CVideoOnDemandStore:LoadVODForAppID: Failed " + W.strErrorMsg,
                W,
              );
            }
          }
          static Get() {
            return (
              M.s_VODStore || ((M.s_VODStore = new M()), M.s_VODStore.Init()),
              M.s_VODStore
            );
          }
          Init() {}
        }
      },
      54326: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { M: () => nr, t: () => rr });
        var s = d(41735),
          hr = d.n(s),
          f = d(72604),
          o = d(35038),
          t = d(3685),
          k = d(80613),
          ar = d.n(k),
          M = d(75245);
        function H(p) {
          return "unknown ETrailerConvertState ( " + p + " )";
        }
        function B(p) {
          return "unknown ETrailerConvertTargetType ( " + p + " )";
        }
        class er extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              er.prototype.video_id || M.Sg(er.M()),
              k.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    video_id: {
                      n: 1,
                      br: M.qM.readUint64String,
                      bw: M.gp.writeUint64String,
                    },
                    client_cellid: {
                      n: 2,
                      br: M.qM.readUint32,
                      bw: M.gp.writeUint32,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = M.w0(er.M())), er.sm_mbf;
          }
          toObject(u = !1) {
            return er.toObject(u, this);
          }
          static toObject(u, y) {
            return M.BT(er.M(), u, y);
          }
          static fromObject(u) {
            return M.Uq(er.M(), u);
          }
          static deserializeBinary(u) {
            let y = new (ar().BinaryReader)(u),
              A = new er();
            return er.deserializeBinaryFromReader(A, y);
          }
          static deserializeBinaryFromReader(u, y) {
            return M.zj(er.MBF(), u, y);
          }
          serializeBinary() {
            var u = new (ar().BinaryWriter)();
            return er.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, y) {
            M.i0(er.M(), u, y);
          }
          serializeBase64String() {
            var u = new (ar().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Request";
          }
        }
        class j extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              j.prototype.video_id || M.Sg(j.M()),
              k.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    video_id: {
                      n: 1,
                      br: M.qM.readUint64String,
                      bw: M.gp.writeUint64String,
                    },
                    video_url: {
                      n: 2,
                      br: M.qM.readString,
                      bw: M.gp.writeString,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = M.w0(j.M())), j.sm_mbf;
          }
          toObject(u = !1) {
            return j.toObject(u, this);
          }
          static toObject(u, y) {
            return M.BT(j.M(), u, y);
          }
          static fromObject(u) {
            return M.Uq(j.M(), u);
          }
          static deserializeBinary(u) {
            let y = new (ar().BinaryReader)(u),
              A = new j();
            return j.deserializeBinaryFromReader(A, y);
          }
          static deserializeBinaryFromReader(u, y) {
            return M.zj(j.MBF(), u, y);
          }
          serializeBinary() {
            var u = new (ar().BinaryWriter)();
            return j.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, y) {
            M.i0(j.M(), u, y);
          }
          serializeBase64String() {
            var u = new (ar().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Response";
          }
        }
        class X extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              X.prototype.encryption_key || M.Sg(X.M()),
              k.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    encryption_key: {
                      n: 1,
                      br: M.qM.readBytes,
                      bw: M.gp.writeBytes,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = M.w0(X.M())), X.sm_mbf;
          }
          toObject(u = !1) {
            return X.toObject(u, this);
          }
          static toObject(u, y) {
            return M.BT(X.M(), u, y);
          }
          static fromObject(u) {
            return M.Uq(X.M(), u);
          }
          static deserializeBinary(u) {
            let y = new (ar().BinaryReader)(u),
              A = new X();
            return X.deserializeBinaryFromReader(A, y);
          }
          static deserializeBinaryFromReader(u, y) {
            return M.zj(X.MBF(), u, y);
          }
          serializeBinary() {
            var u = new (ar().BinaryWriter)();
            return X.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, y) {
            M.i0(X.M(), u, y);
          }
          serializeBase64String() {
            var u = new (ar().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_UnlockedH264_Notification";
          }
        }
        class U extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              U.prototype.app_id || M.Sg(U.M()),
              k.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    app_id: { n: 1, br: M.qM.readUint32, bw: M.gp.writeUint32 },
                    client_cellid: {
                      n: 2,
                      br: M.qM.readUint32,
                      bw: M.gp.writeUint32,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = M.w0(U.M())), U.sm_mbf;
          }
          toObject(u = !1) {
            return U.toObject(u, this);
          }
          static toObject(u, y) {
            return M.BT(U.M(), u, y);
          }
          static fromObject(u) {
            return M.Uq(U.M(), u);
          }
          static deserializeBinary(u) {
            let y = new (ar().BinaryReader)(u),
              A = new U();
            return U.deserializeBinaryFromReader(A, y);
          }
          static deserializeBinaryFromReader(u, y) {
            return M.zj(U.MBF(), u, y);
          }
          serializeBinary() {
            var u = new (ar().BinaryWriter)();
            return U.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, y) {
            M.i0(U.M(), u, y);
          }
          serializeBase64String() {
            var u = new (ar().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Request";
          }
        }
        class W extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              W.prototype.app_id || M.Sg(W.M()),
              k.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    app_id: { n: 1, br: M.qM.readUint32, bw: M.gp.writeUint32 },
                    opf_settings: {
                      n: 2,
                      br: M.qM.readString,
                      bw: M.gp.writeString,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = M.w0(W.M())), W.sm_mbf;
          }
          toObject(u = !1) {
            return W.toObject(u, this);
          }
          static toObject(u, y) {
            return M.BT(W.M(), u, y);
          }
          static fromObject(u) {
            return M.Uq(W.M(), u);
          }
          static deserializeBinary(u) {
            let y = new (ar().BinaryReader)(u),
              A = new W();
            return W.deserializeBinaryFromReader(A, y);
          }
          static deserializeBinaryFromReader(u, y) {
            return M.zj(W.MBF(), u, y);
          }
          serializeBinary() {
            var u = new (ar().BinaryWriter)();
            return W.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, y) {
            M.i0(W.M(), u, y);
          }
          serializeBase64String() {
            var u = new (ar().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Response";
          }
        }
        class g extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              g.prototype.app_id || M.Sg(g.M()),
              k.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    app_id: { n: 1, br: M.qM.readUint32, bw: M.gp.writeUint32 },
                    playback_position_in_seconds: {
                      n: 2,
                      br: M.qM.readUint32,
                      bw: M.gp.writeUint32,
                    },
                    video_track_id: {
                      n: 3,
                      br: M.qM.readUint64String,
                      bw: M.gp.writeUint64String,
                    },
                    audio_track_id: {
                      n: 4,
                      br: M.qM.readUint64String,
                      bw: M.gp.writeUint64String,
                    },
                    timedtext_track_id: {
                      n: 5,
                      br: M.qM.readUint64String,
                      bw: M.gp.writeUint64String,
                    },
                    last_modified: {
                      n: 6,
                      br: M.qM.readUint32,
                      bw: M.gp.writeUint32,
                    },
                    hide_from_watch_history: {
                      n: 7,
                      d: !1,
                      br: M.qM.readBool,
                      bw: M.gp.writeBool,
                    },
                    hide_from_library: {
                      n: 8,
                      d: !1,
                      br: M.qM.readBool,
                      bw: M.gp.writeBool,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = M.w0(g.M())), g.sm_mbf;
          }
          toObject(u = !1) {
            return g.toObject(u, this);
          }
          static toObject(u, y) {
            return M.BT(g.M(), u, y);
          }
          static fromObject(u) {
            return M.Uq(g.M(), u);
          }
          static deserializeBinary(u) {
            let y = new (ar().BinaryReader)(u),
              A = new g();
            return g.deserializeBinaryFromReader(A, y);
          }
          static deserializeBinaryFromReader(u, y) {
            return M.zj(g.MBF(), u, y);
          }
          serializeBinary() {
            var u = new (ar().BinaryWriter)();
            return g.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, y) {
            M.i0(g.M(), u, y);
          }
          serializeBase64String() {
            var u = new (ar().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "VideoBookmark";
          }
        }
        class a extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              a.prototype.bookmarks || M.Sg(a.M()),
              k.Message.initialize(this, u, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: { bookmarks: { n: 1, c: g, r: !0, q: !0 } },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = M.w0(a.M())), a.sm_mbf;
          }
          toObject(u = !1) {
            return a.toObject(u, this);
          }
          static toObject(u, y) {
            return M.BT(a.M(), u, y);
          }
          static fromObject(u) {
            return M.Uq(a.M(), u);
          }
          static deserializeBinary(u) {
            let y = new (ar().BinaryReader)(u),
              A = new a();
            return a.deserializeBinaryFromReader(A, y);
          }
          static deserializeBinaryFromReader(u, y) {
            return M.zj(a.MBF(), u, y);
          }
          serializeBinary() {
            var u = new (ar().BinaryWriter)();
            return a.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, y) {
            M.i0(a.M(), u, y);
          }
          serializeBase64String() {
            var u = new (ar().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_SetVideoBookmark_Notification";
          }
        }
        class i extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              i.prototype.appids || M.Sg(i.M()),
              k.Message.initialize(this, u, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              i.sm_m ||
                (i.sm_m = {
                  proto: i,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: M.qM.readUint32,
                      pbr: M.qM.readPackedUint32,
                      bw: M.gp.writeRepeatedUint32,
                    },
                    updated_since: {
                      n: 2,
                      br: M.qM.readUint32,
                      bw: M.gp.writeUint32,
                    },
                  },
                }),
              i.sm_m
            );
          }
          static MBF() {
            return i.sm_mbf || (i.sm_mbf = M.w0(i.M())), i.sm_mbf;
          }
          toObject(u = !1) {
            return i.toObject(u, this);
          }
          static toObject(u, y) {
            return M.BT(i.M(), u, y);
          }
          static fromObject(u) {
            return M.Uq(i.M(), u);
          }
          static deserializeBinary(u) {
            let y = new (ar().BinaryReader)(u),
              A = new i();
            return i.deserializeBinaryFromReader(A, y);
          }
          static deserializeBinaryFromReader(u, y) {
            return M.zj(i.MBF(), u, y);
          }
          serializeBinary() {
            var u = new (ar().BinaryWriter)();
            return i.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, y) {
            M.i0(i.M(), u, y);
          }
          serializeBase64String() {
            var u = new (ar().BinaryWriter)();
            return (
              i.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Request";
          }
        }
        class Y extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              Y.prototype.bookmarks || M.Sg(Y.M()),
              k.Message.initialize(this, u, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: { bookmarks: { n: 1, c: g, r: !0, q: !0 } },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = M.w0(Y.M())), Y.sm_mbf;
          }
          toObject(u = !1) {
            return Y.toObject(u, this);
          }
          static toObject(u, y) {
            return M.BT(Y.M(), u, y);
          }
          static fromObject(u) {
            return M.Uq(Y.M(), u);
          }
          static deserializeBinary(u) {
            let y = new (ar().BinaryReader)(u),
              A = new Y();
            return Y.deserializeBinaryFromReader(A, y);
          }
          static deserializeBinaryFromReader(u, y) {
            return M.zj(Y.MBF(), u, y);
          }
          serializeBinary() {
            var u = new (ar().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, y) {
            M.i0(Y.M(), u, y);
          }
          serializeBase64String() {
            var u = new (ar().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Response";
          }
        }
        var yr;
        ((p) => {
          function u(tr, L, V) {
            return tr.SendMsg(
              "Video.ClientGetVideoURL#1",
              (0, o.I8)(er, L, V),
              j,
              { ePrivilege: 1 },
            );
          }
          p.ClientGetVideoURL = u;
          function y(tr, L) {
            return tr.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, o.I8)(a, L),
              { ePrivilege: 1 },
            );
          }
          p.SetVideoBookmark = y;
          function A(tr, L, V) {
            return tr.SendMsg(
              "Video.GetVideoBookmarks#1",
              (0, o.I8)(i, L, V),
              Y,
              { ePrivilege: 1 },
            );
          }
          p.GetVideoBookmarks = A;
        })(yr || (yr = {}));
        var vr;
        ((p) => {
          p.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: X,
          };
        })(vr || (vr = {}));
        var fr;
        ((p) => {
          function u(y, A, tr) {
            return y.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, o.I8)(U, A, tr),
              W,
              { ePrivilege: 1 },
            );
          }
          p.ClientGetOPFSettings = u;
        })(fr || (fr = {}));
        var E = d(34592),
          T = d(3166);
        class rr {
          static s_VODStore;
          m_transport = null;
          m_mapBookmarks = new Map();
          SetBookmarkForApp(u, y) {
            this.ValidateBookmarkData(y)
              ? this.m_mapBookmarks.set(u, g.fromObject(y))
              : this.InitializeBookmarkForApp(u);
          }
          ValidateBookmarkData(u) {
            const y = u;
            return typeof y == "object"
              ? Number.isInteger(y.playback_position_in_seconds) &&
                  Number.isInteger(y.app_id)
              : !1;
          }
          InitializeBookmarkForApp(u) {
            if (!this.m_mapBookmarks.has(u)) {
              let y = {
                app_id: u,
                playback_position_in_seconds: 0,
                video_track_id: "0",
                audio_track_id: "0",
                timedtext_track_id: "0",
                hide_from_watch_history: !1,
                hide_from_library: !1,
              };
              this.m_mapBookmarks.set(u, new g(y));
            }
          }
          GetBookmarkPlayTimeInSeconds(u) {
            let y = this.m_mapBookmarks.get(u);
            if (y) {
              let A = y.playback_position_in_seconds();
              if (Number.isInteger(A)) return A;
            }
            return 0;
          }
          async SendBookMarkedTimeToServer(u, y, A, tr, L) {
            if (!T.iA.logged_in) return;
            if (!this.m_transport) {
              console.warn(
                "CVideoBookmarkStore:SetBookMark no auth token / transport",
              );
              return;
            }
            const V = o.w.Init(a);
            let ur = this.m_mapBookmarks.get(u);
            if (ur) {
              let q = !1;
              ur.app_id() != u && ((q = !0), ur.set_app_id(u)),
                ur.playback_position_in_seconds() != y &&
                  ((q = !0), ur.set_playback_position_in_seconds(y)),
                (A = A || "0"),
                ur.video_track_id() != A &&
                  (ur.set_video_track_id(A), (q = !0)),
                (tr = tr || "0"),
                ur.audio_track_id() != tr &&
                  (ur.set_audio_track_id(tr), (q = !0)),
                (L = L || "0"),
                L != ur.timedtext_track_id() &&
                  (ur.set_timedtext_track_id(L), (q = !0)),
                q &&
                  (V.Body().add_bookmarks(ur),
                  yr.SetVideoBookmark(this.m_transport, V));
            }
          }
          static Get() {
            return (
              rr.s_VODStore ||
                ((rr.s_VODStore = new rr()), rr.s_VODStore.Init()),
              rr.s_VODStore
            );
          }
          Init() {
            T.iA.logged_in && this.LoadWatchVideoOAuthToken();
          }
          async LoadWatchVideoOAuthToken() {
            const u =
                (0, T.yK)() == "community"
                  ? T.TS.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                  : T.TS.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
              y = {};
            try {
              let A = await hr().get(u, { params: y, withCredentials: !0 });
              if (
                A &&
                A.status == 200 &&
                A.data &&
                A.data.success == f.R &&
                A.data.webapi_token
              ) {
                this.m_transport = new t.D(
                  T.TS.WEBAPI_BASE_URL,
                  A.data.webapi_token,
                ).GetServiceTransport();
                return;
              }
            } catch (A) {
              let tr = (0, E.H)(A);
              console.error(
                "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                  tr.strErrorMsg,
                tr,
              );
            }
          }
        }
        class nr {
          m_appid;
          constructor(u) {
            this.m_appid = u;
          }
          async SetBookmark(u, y, A, tr) {
            T.iA.logged_in &&
              rr
                .Get()
                .SendBookMarkedTimeToServer(
                  this.m_appid,
                  Math.floor(u),
                  y,
                  A,
                  tr,
                );
          }
          GetBeginPlaytime() {
            return T.iA.logged_in
              ? rr.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
              : 0;
          }
        }
      },
      22714: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { A: () => yr });
        var s = d(7850),
          hr = d(90626),
          f = d(75844),
          o = d(30096),
          t = d(24660),
          k = d(19298),
          ar = d(16346),
          M = d(38655),
          H = d(18210),
          B = d(36707),
          er = d(90024),
          j = d.n(er),
          X = d(75975),
          U = d(71421),
          W = Object.defineProperty,
          g = Object.getOwnPropertyDescriptor,
          a = (vr, fr, E, T) => {
            for (
              var rr = T > 1 ? void 0 : T ? g(fr, E) : fr,
                nr = vr.length - 1,
                p;
              nr >= 0;
              nr--
            )
              (p = vr[nr]) && (rr = (T ? p(fr, E, rr) : p(rr)) || rr);
            return T && rr && W(fr, E, rr), rr;
          };
        const i = 1576780700;
        let Y = class extends hr.Component {
          OnEmoticonClick(vr) {
            const {
                emoticonStore: fr,
                strFlairGroupID: E,
                SetUIDisplayPref: T,
                contextOptions: rr,
                bShowChatAddons: nr,
              } = this.props,
              {
                roomEffectSettings: p,
                onRoomEffectSelected: u,
                onStickerSelected: y,
              } = this.props;
            let A = null;
            if (
              (nr && p && u && y
                ? (A = (0, s.jsx)(M.Q4, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    onEmoticonSelected: (tr) =>
                      this.props.OnEmoticonSelected(tr, !1),
                    roomEffectSettings: p,
                    onRoomEffectSelected: u,
                    onStickerSelected: y,
                  }))
                : E && fr.flair_list && fr.GetFlairListByGroupID(E)?.length > 0
                  ? (A = (0, s.jsx)(M.CE, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    }))
                  : (A = (0, s.jsx)(M.iY, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    })),
              (0, ar.lX)(
                A,
                vr,
                rr || {
                  bOverlapHorizontal: !0,
                  bPreferPopLeft: !0,
                  bPreferPopTop: !0,
                },
              ),
              this.BHaveUnseenEmoticons() && T)
            ) {
              let tr = this.GetNewestIndicatorTime();
              (!tr || tr < i) && (tr = i), T("rtLastAckedNewEmoticons", tr);
            }
          }
          GetNewestIndicatorTime() {
            let vr = this.props.emoticonStore,
              fr = Number.MIN_SAFE_INTEGER,
              E = vr.GetTimeReceivedNewestEmoticon();
            E && (fr = E);
            let T = vr.GetTimeReceivedForStickerOrEffect();
            return (
              (fr = Math.max(T, fr)), fr > Number.MIN_SAFE_INTEGER ? fr : void 0
            );
          }
          BHaveUnseenEmoticons() {
            const { rtLastAckedNewEmoticons: vr } = this.props;
            let fr = this.GetNewestIndicatorTime();
            return !vr || vr < i ? !0 : fr && (!vr || vr < fr);
          }
          render() {
            const {
              disabled: vr,
              className: fr,
              ttip: E,
              useImg: T,
            } = this.props;
            let rr = [fr],
              nr = !1;
            return (
              vr
                ? rr.push("disabled")
                : this.BHaveUnseenEmoticons() && (nr = !0),
              E && rr.push("ttip"),
              T
                ? (0, s.jsx)(k.Z, {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, H.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                    children: (0, s.jsx)(U.he, {
                      toolTipContent: E,
                      children: (0, s.jsx)("img", {
                        src: this.props.useImg,
                        className: (0, B.A)(...rr),
                        title:
                          this.props.title ||
                          (0, H.we)("#ChatEntryButton_Emoticon"),
                      }),
                    }),
                  })
                : (rr.push(j().chatSubmitButton, j().EmoticonPickerButton),
                  (0, s.jsx)(t.fu, {
                    className: (0, B.A)(...rr),
                    onOKActionDescription: (0, H.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title ||
                      (0, H.we)("#ChatEntryButton_Emoticon"),
                    disabled: vr,
                    children: (0, s.jsxs)(U.he, {
                      toolTipContent: E,
                      children: [
                        this.props.buttonIcon || (0, s.jsx)(X.nl, {}),
                        nr && (0, s.jsx)(M.iD, {}),
                      ],
                    }),
                  }))
            );
          }
        };
        a([o.oI], Y.prototype, "OnEmoticonClick", 1), (Y = a([f.PA], Y));
        const yr = Y;
      },
      38655: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { Q4: () => Sr, iY: () => Jr, CE: () => he, iD: () => b });
        var s = d(7850),
          hr = d(14947),
          f = d(75844),
          o = d(90626),
          t = d(76842),
          k = d(84676),
          ar = d(34360),
          M = d(36707),
          H = d(18210);
        function B(F, O, K = !1) {
          return `${F}economy/sticker${K ? "static" : ""}/${encodeURIComponent(O)}`;
        }
        var er = d(3166),
          j = d(16412),
          X = d(19298),
          U = d(64415),
          W = d(19418);
        class g extends o.Component {
          constructor(O) {
            super(O), (this.state = { activeIndex: O.initialActiveIndex || 0 });
          }
          render() {
            const { config: O } = this.props,
              { activeIndex: K } = this.state,
              $ = O[K],
              G = $ ? $.renderContent() : null,
              sr = O.length > 1,
              mr = sr
                ? ({ detail: { button: br } }) => {
                    br === U.pR.BUMPER_LEFT
                      ? this.setState({
                          activeIndex: Math.max(0, this.state.activeIndex - 1),
                        })
                      : br === U.pR.BUMPER_RIGHT &&
                        this.setState({
                          activeIndex: Math.min(
                            O.length - 1,
                            this.state.activeIndex + 1,
                          ),
                        });
                  }
                : void 0;
            return (0, s.jsxs)(X.Z, {
              className: W.Picker,
              onButtonDown: mr,
              children: [
                sr && (0, s.jsx)(a, { children: this.RenderTabs() }),
                G,
              ],
            });
          }
          RenderTabs() {
            return this.props.config.map(({ renderTab: O }, K) => {
              const $ = this.state.activeIndex === K;
              return (0, s.jsx)(
                Y,
                {
                  active: $,
                  onClick: () => this.setState({ activeIndex: K }),
                  children: O($),
                },
                K,
              );
            });
          }
        }
        function a(F) {
          return (0, s.jsx)(X.Z, {
            className: W.Tabs,
            "flow-children": "row",
            children: F.children,
          });
        }
        function i(F) {
          return (0, s.jsx)("div", {
            className: W.Content,
            children: F.children,
          });
        }
        function Y(F) {
          const { active: O, children: K, onClick: $ } = F;
          return (0, s.jsx)(X.Z, {
            className: (0, M.A)(W.Tab, O && W.Active),
            focusClassName: W.Focus,
            onActivate: $,
            children: (0, s.jsx)("div", {
              className: (0, M.A)(W.TabContent, O && W.Active),
              children: K,
            }),
          });
        }
        function yr(F) {
          const {
            items: O,
            renderItem: K,
            onItemSelect: $,
            keyExtractor: G,
            renderEmpty: sr,
          } = F;
          let mr = O.map((br, Pr) =>
            (0, s.jsx)(
              X.Z,
              {
                className: W.Item,
                onActivate: () => $(O[Pr]),
                autoFocus: Pr === 0,
                focusClassName: W.Focus,
                children: K(O[Pr]),
              },
              G(br),
            ),
          );
          return (
            O.length === 0 && sr && (mr = sr()),
            (0, s.jsx)(X.Z, {
              "flow-children": "grid",
              className: W.ItemList,
              children: mr,
            })
          );
        }
        function vr(F) {
          const {
            title: O,
            onFilterChange: K,
            filter: $,
            onSubmit: G,
            ...sr
          } = F;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(i, {
                children: (0, s.jsx)(E, {
                  title: O,
                  children: (0, s.jsx)(yr, { ...sr }),
                }),
              }),
              (0, s.jsx)(T, { value: $, onChange: K, onSubmit: G }),
            ],
          });
        }
        function fr(F) {
          const { onFilterChange: O, filter: K, sections: $, title: G } = F;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(i, {
                children: [
                  G &&
                    (0, s.jsx)("div", {
                      className: W.SectionedPageTitle,
                      children: G,
                    }),
                  $.map(({ title: sr, ...mr }) =>
                    (0, s.jsx)(
                      E,
                      { title: sr, children: (0, s.jsx)(yr, { ...mr }) },
                      sr,
                    ),
                  ),
                ],
              }),
              (0, s.jsx)(T, { value: K, onChange: O }),
            ],
          });
        }
        function E(F) {
          return (0, s.jsxs)("div", {
            className: W.Section,
            children: [
              (0, s.jsx)("div", {
                className: W.SectionTitle,
                children: F.title,
              }),
              (0, s.jsx)("div", {
                className: W.SectionContent,
                children: F.children,
              }),
            ],
          });
        }
        function T(F) {
          const { value: O, onChange: K, onSubmit: $ } = F;
          return (0, s.jsx)("div", {
            className: W.FilterInputContainer,
            children: (0, s.jsx)(j.pd, {
              type: "text",
              placeholder: (0, H.we)("#AddonPicker_Search"),
              className: W.FilterInput,
              value: O,
              onChange: (G) => K(G.target.value),
              onSubmit: $,
            }),
          });
        }
        function rr(F) {
          const { className: O, ...K } = F;
          return (0, s.jsx)("div", {
            className: (0, M.A)(O, W.AddonPickerMessage),
            ...K,
          });
        }
        var nr = d(42060),
          p = d.n(nr),
          u = d(53107),
          y = d(96197),
          A = Object.defineProperty,
          tr = Object.getOwnPropertyDescriptor,
          L = (F, O, K, $) => {
            for (
              var G = $ > 1 ? void 0 : $ ? tr(O, K) : O, sr = F.length - 1, mr;
              sr >= 0;
              sr--
            )
              (mr = F[sr]) && (G = ($ ? mr(O, K, G) : mr(G)) || G);
            return $ && G && A(O, K, G), G;
          };
        const V = 1e3;
        function ur(F) {
          return F.recent_emoticons;
        }
        function q(F) {
          return F.recent_stickers;
        }
        function ir(F) {
          return ur(F).length + q(F).length > 0;
        }
        function jr(F) {
          const [O, K] = (0, o.useState)(F.is_initialized);
          return (
            (0, o.useEffect)(() => {
              if (!F.is_initialized) {
                F.UpdateEmoticonList();
                const $ = (0, hr.z7)(
                  () => F.is_initialized,
                  () => K(F.is_initialized),
                );
                return () => $();
              }
              return () => {};
            }, [F]),
            O
          );
        }
        const Sr = (0, f.PA)((F) => {
          const {
            emoticonStore: O,
            roomEffectSettings: K,
            strFlairGroupID: $,
            onEmoticonSelected: G,
            onRoomEffectSelected: sr,
            onStickerSelected: mr,
          } = F;
          jr(O);
          const br = [];
          return (
            ir(O) &&
              br.push({
                renderTab: (Pr) =>
                  (0, s.jsx)("span", {
                    title: (0, H.we)("#AddonPicker_RecentlyUsed"),
                    className: (0, M.A)(
                      p().PickerTab,
                      p().Clock,
                      Pr && p().ActiveTab,
                    ),
                    children: (0, s.jsx)(Or, {}),
                  }),
                renderContent: () =>
                  (0, s.jsx)(Hr, {
                    store: O,
                    onEmoticonSelect: (Pr) => G(Pr.name),
                    onStickerSelect: (Pr) => mr(Pr.name),
                    flairGroupID: $,
                  }),
              }),
            (0, s.jsx)(ar.tz, {
              children: (0, s.jsx)(g, {
                config: [
                  ...br,
                  {
                    renderTab: (Pr) =>
                      (0, s.jsx)("span", {
                        title: (0, H.we)("#AddonPicker_Emoticons"),
                        className: (0, M.A)(p().PickerTab, Pr && p().ActiveTab),
                        children: (0, s.jsx)(C, {}),
                      }),
                    renderContent: () =>
                      (0, s.jsx)(kr, {
                        store: O,
                        onItemSelect: (Pr) => G(Pr.name),
                        flairGroupID: $,
                      }),
                  },
                  {
                    renderTab: (Pr) =>
                      (0, s.jsx)("span", {
                        title: (0, H.we)("#AddonPicker_Stickers"),
                        className: (0, M.A)(p().PickerTab, Pr && p().ActiveTab),
                        children: (0, s.jsx)(S, {}),
                      }),
                    renderContent: () =>
                      (0, s.jsx)(Pe, {
                        store: O,
                        onItemSelect: (Pr) => mr(Pr.name),
                      }),
                  },
                  {
                    renderTab: (Pr) =>
                      (0, s.jsx)("span", {
                        title: (0, H.we)("#AddonPicker_RoomEffects"),
                        className: (0, M.A)(p().PickerTab, Pr && p().ActiveTab),
                        children: (0, s.jsx)(Q, {}),
                      }),
                    renderContent: () =>
                      (0, s.jsx)(Zr, {
                        store: O,
                        effectSettings: K,
                        onItemSelect: (Pr) => sr(Pr.name),
                      }),
                  },
                ],
              }),
            })
          );
        });
        let Kr = class extends o.Component {
          m_disposeEmoticonStore;
          constructor(F) {
            super(F), (this.state = { strSearchText: "" });
            let O = this.props.emoticonStore;
            O.is_initialized ||
              (O.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, hr.z7)(
                () => O.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            const {
                emoticonStore: F,
                onEmoticonSelected: O,
                onStickerSelected: K,
                strFlairGroupID: $,
              } = this.props,
              G = [];
            return (
              ir(F) &&
                G.push({
                  renderTab: (sr) =>
                    (0, s.jsx)("span", {
                      title: (0, H.we)("#AddonPicker_RecentlyUsed"),
                      className: (0, M.A)(
                        p().PickerTab,
                        p().Clock,
                        sr && p().ActiveTab,
                      ),
                      children: (0, s.jsx)(Or, {}),
                    }),
                  renderContent: () =>
                    (0, s.jsx)(Hr, {
                      store: F,
                      onEmoticonSelect: (sr) => O(sr.name),
                      onStickerSelect: (sr) => K(sr.name),
                      flairGroupID: $,
                    }),
                }),
              (0, s.jsx)(ar.tz, {
                children: (0, s.jsx)(g, {
                  config: [
                    ...G,
                    {
                      renderTab: (sr) =>
                        (0, s.jsx)("span", {
                          title: (0, H.we)("#AddonPicker_Emoticons"),
                          className: (0, M.A)(
                            p().PickerTab,
                            sr && p().ActiveTab,
                          ),
                          children: (0, s.jsx)(C, {}),
                        }),
                      renderContent: () =>
                        (0, s.jsx)(kr, {
                          store: F,
                          onItemSelect: (sr) => O(sr.name),
                          flairGroupID: $,
                        }),
                    },
                    {
                      renderTab: (sr) =>
                        (0, s.jsx)("span", {
                          title: (0, H.we)("#AddonPicker_Stickers"),
                          className: (0, M.A)(
                            p().PickerTab,
                            sr && p().ActiveTab,
                          ),
                          children: (0, s.jsx)(S, {}),
                        }),
                      renderContent: () =>
                        (0, s.jsx)(Pe, {
                          store: F,
                          onItemSelect: (sr) => K(sr.name),
                        }),
                    },
                  ],
                }),
              })
            );
          }
        };
        Kr = L([f.PA], Kr);
        class Jr extends o.Component {
          m_disposeEmoticonStore;
          constructor(O) {
            super(O), (this.state = { strSearchText: "" });
            let K = this.props.emoticonStore;
            K.is_initialized ||
              (K.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, hr.z7)(
                () => K.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, s.jsx)(ar.tz, {
              children: (0, s.jsx)(g, {
                config: [
                  {
                    renderTab: () =>
                      (0, s.jsx)("span", {
                        title: (0, H.we)("#AddonPicker_Emoticons"),
                        className: p().PickerTab,
                        children: (0, s.jsx)(C, {}),
                      }),
                    renderContent: () =>
                      (0, s.jsx)(ue, {
                        store: this.props.emoticonStore,
                        onItemSelect: (O) => this.props.OnSelected(O.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class he extends o.Component {
          m_disposeEmoticonStore;
          constructor(O) {
            super(O), (this.state = { strSearchText: "" });
            let K = this.props.emoticonStore;
            K.is_initialized ||
              (K.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, hr.z7)(
                () => K.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, s.jsx)(ar.tz, {
              children: (0, s.jsx)(g, {
                config: [
                  {
                    renderTab: () =>
                      (0, s.jsx)("span", {
                        title: (0, H.we)("#AddonPicker_Emoticons"),
                        className: p().PickerTab,
                        children: (0, s.jsx)(C, {}),
                      }),
                    renderContent: () =>
                      (0, s.jsx)(Nr, {
                        store: this.props.emoticonStore,
                        onItemSelect: (O) => this.props.OnSelected(O.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class Hr extends o.Component {
          state = { filter: "" };
          render() {
            const {
                store: O,
                onEmoticonSelect: K,
                onStickerSelect: $,
              } = this.props,
              { filter: G } = this.state,
              sr = [];
            return (
              ur(O) &&
                sr.push({
                  title: (0, H.we)("#AddonPicker_RecentEmoticons"),
                  items: t.pN.FilterEmoticons(ur(O), G),
                  onItemSelect: K,
                  renderItem: (mr) => (0, s.jsx)(Wr, { emoticon: mr }),
                  keyExtractor: (mr) => mr.name,
                  renderEmpty: () =>
                    (0, s.jsx)(rr, {
                      children: G
                        ? (0, H.we)("#AddonPicker_NoResults")
                        : (0, H.we)(
                            "#AddonPicker_NoRecent",
                            (0, H.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              q(O).length &&
                sr.push({
                  title: (0, H.we)("#AddonPicker_RecentStickers"),
                  items: t.pN.FilterStickers(q(O), G),
                  onItemSelect: $,
                  renderItem: (mr) => (0, s.jsx)(dr, { sticker: mr }),
                  keyExtractor: ({ name: mr }) => mr,
                  renderEmpty: () =>
                    (0, s.jsx)(rr, {
                      children: G
                        ? (0, H.we)("#AddonPicker_NoResults")
                        : (0, H.we)(
                            "#AddonPicker_NoRecent",
                            (0, H.we)("#AddonPicker_Stickers"),
                          ),
                    }),
                }),
              (0, s.jsx)(fr, {
                onFilterChange: (mr) => this.setState({ filter: mr }),
                filter: G,
                sections: sr,
              })
            );
          }
        }
        class kr extends o.Component {
          state = { filter: "" };
          render() {
            const { store: O, onItemSelect: K, flairGroupID: $ } = this.props,
              { filter: G } = this.state,
              sr = !G && $ ? O.GetFlairListByGroupID($) : O.emoticon_list,
              mr = t.pN.FilterEmoticons(sr, G).slice(0, V);
            return (0, s.jsx)(vr, {
              title: (0, H.we)("#AddonPicker_Emoticons"),
              items: mr,
              onItemSelect: K,
              renderItem: (br) => (0, s.jsx)(Wr, { emoticon: br }),
              keyExtractor: (br) => br.name,
              onFilterChange: (br) => this.setState({ filter: br }),
              filter: G,
              onSubmit: () => K(mr[0]),
              renderEmpty: () =>
                G
                  ? (0, s.jsx)(rr, {
                      children: (0, H.we)("#AddonPicker_NoResults"),
                    })
                  : (0, s.jsx)(wr, {}),
            });
          }
        }
        function wr() {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(rr, {
                children: (0, H.we)(
                  "#AddonPicker_NoneOwned",
                  (0, H.we)("#AddonPicker_Emoticons"),
                ),
              }),
              (0, s.jsx)(rr, {
                children: (0, H.PP)(
                  "#AddonPicker_AcquireAtPointsShopOrMarket",
                  (0, s.jsx)(u.uU, {
                    href: `${er.TS.STORE_BASE_URL}points/shop/c/emoticons`,
                    children: (0, H.we)(
                      "#AddonPicker_AcquireAtPointsShop_Link",
                    ),
                  }),
                  (0, s.jsx)(u.uU, {
                    href: `${er.TS.COMMUNITY_BASE_URL}market`,
                    children: (0, H.we)(
                      "#AddonPicker_AcquireAtPointsShopOrMarket_Link",
                    ),
                  }),
                ),
              }),
            ],
          });
        }
        class Pe extends o.Component {
          state = { filter: "" };
          render() {
            const { store: O, onItemSelect: K } = this.props,
              { filter: $ } = this.state,
              G = t.pN.FilterStickers(O.GetStickerList(), $),
              sr = () =>
                $
                  ? (0, s.jsx)(rr, {
                      children: (0, H.we)("#AddonPicker_NoResults"),
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(rr, {
                          children: (0, H.we)(
                            "#AddonPicker_NoneOwned",
                            (0, H.we)("#AddonPicker_Stickers"),
                          ),
                        }),
                        (0, s.jsx)(rr, {
                          children: (0, H.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, s.jsx)(u.uU, {
                              href: `${er.TS.STORE_BASE_URL}points/shop/c/stickers`,
                              children: (0, H.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, s.jsx)(vr, {
              title: (0, H.we)("#EmoticonPicker_StickerHeading"),
              items: G,
              onItemSelect: K,
              renderItem: (mr) => (0, s.jsx)(dr, { sticker: mr }),
              keyExtractor: ({ name: mr }) => mr,
              onFilterChange: (mr) => this.setState({ filter: mr }),
              filter: $,
              onSubmit: () => K(G[0]),
              renderEmpty: sr,
            });
          }
        }
        class Zr extends o.Component {
          state = { filter: "" };
          render() {
            const { store: O, effectSettings: K, onItemSelect: $ } = this.props,
              { filter: G } = this.state,
              sr = O.GetEffectList().filter(
                ({ name: br }) => br.indexOf(G) > -1,
              ),
              mr = () =>
                G
                  ? (0, s.jsx)(rr, {
                      children: (0, H.we)("#AddonPicker_NoResults"),
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(rr, {
                          children: (0, H.we)(
                            "#AddonPicker_NoneOwned",
                            (0, H.we)("#AddonPicker_RoomEffects"),
                          ),
                        }),
                        (0, s.jsx)(rr, {
                          children: (0, H.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, s.jsx)(u.uU, {
                              href: `${er.TS.STORE_BASE_URL}points/shop/c/chateffects`,
                              children: (0, H.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, s.jsx)(vr, {
              title: (0, H.we)("#EmoticonPicker_EffectHeading"),
              items: sr,
              onItemSelect: $,
              renderItem: (br) =>
                (0, s.jsx)(R, { effect: br, roomEffectSettings: K }),
              keyExtractor: ({ name: br }) => br,
              onFilterChange: (br) => this.setState({ filter: br }),
              filter: G,
              onSubmit: () => $(sr[0]),
              renderEmpty: mr,
            });
          }
        }
        let ue = class extends o.Component {
          state = { filter: "" };
          render() {
            const { store: F, onItemSelect: O, flairGroupID: K } = this.props,
              { filter: $ } = this.state,
              G = [];
            return (
              ur(F).length &&
                G.push({
                  title: (0, H.we)("#AddonPicker_RecentEmoticons"),
                  items: t.pN.FilterEmoticons(ur(F), $),
                  onItemSelect: O,
                  renderItem: (sr) => (0, s.jsx)(Wr, { emoticon: sr }),
                  keyExtractor: (sr) => sr.name,
                  renderEmpty: () =>
                    (0, s.jsx)(rr, {
                      children: $
                        ? (0, H.we)("#AddonPicker_NoResults")
                        : (0, H.we)(
                            "#AddonPicker_NoRecent",
                            (0, H.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              (0, s.jsx)(fr, {
                onFilterChange: (sr) => this.setState({ filter: sr }),
                filter: $,
                sections: [
                  ...G,
                  {
                    title: (0, H.we)("#AddonPicker_AllEmoticons"),
                    items: t.pN.FilterStickers(F.emoticon_list, $).slice(0, V),
                    onItemSelect: O,
                    renderItem: (sr) => (0, s.jsx)(Wr, { emoticon: sr }),
                    keyExtractor: (sr) => sr.name,
                    renderEmpty: () =>
                      $
                        ? (0, s.jsx)(rr, {
                            children: (0, H.we)("#AddonPicker_NoResults"),
                          })
                        : (0, s.jsx)(wr, {}),
                  },
                ],
              })
            );
          }
        };
        ue = L([f.PA], ue);
        let Nr = class extends o.Component {
          state = { filter: "" };
          render() {
            const { store: F, onItemSelect: O, flairGroupID: K } = this.props,
              { filter: $ } = this.state;
            return (0, s.jsx)(fr, {
              onFilterChange: (G) => this.setState({ filter: G }),
              filter: $,
              sections: [
                {
                  title: (0, H.we)("#ChatEntryButton_Flair"),
                  items: t.pN.FilterStickers(F.GetFlairListByGroupID(K), $),
                  onItemSelect: O,
                  renderItem: (G) => (0, s.jsx)(Wr, { emoticon: G }),
                  keyExtractor: (G) => G.name,
                  renderEmpty: () =>
                    $
                      ? (0, s.jsx)(rr, {
                          children: (0, H.we)("#AddonPicker_NoResults"),
                        })
                      : (0, s.jsx)(wr, {}),
                },
              ],
            });
          }
        };
        Nr = L([f.PA], Nr);
        const Wr = (F) => {
          const { emoticon: O, large: K } = F,
            $ = !O.last_used && O.time_received;
          return (0, s.jsxs)("div", {
            className: p().EmoticonItem,
            children: [
              (0, s.jsx)(y.n, { emoticon: O.name, large: K }),
              $ && (0, s.jsx)(b, {}),
            ],
          });
        };
        class dr extends o.Component {
          state = { showHover: !1 };
          m_ref = o.createRef();
          render() {
            const { sticker: O, className: K, ...$ } = this.props,
              G = B(er.TS.COMMUNITY_CDN_URL, O.name);
            return (0, s.jsxs)("div", {
              ref: this.m_ref,
              className: (0, M.A)(K, p().StickerButton),
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              ...$,
              children: [
                (0, s.jsx)("img", { style: { width: "100%" }, src: G }),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, s.jsx)(Qr, { target: this.m_ref.current, sticker: O }),
              ],
            });
          }
        }
        const Qr = (0, f.PA)((F) => {
          const {
              target: O,
              sticker: { name: K, appid: $ },
            } = F,
            [G] = (0, k.t7)($, {});
          return (0, s.jsx)(y.c, {
            target: O,
            title: K,
            subtitle: G?.GetName(),
            children: (0, s.jsx)("img", {
              src: B(er.TS.COMMUNITY_CDN_URL, K),
              className: p().StickerHoverSticker,
            }),
          });
        });
        class R extends o.Component {
          state = { showHover: !1 };
          m_ref = o.createRef();
          render() {
            const {
                effect: O,
                roomEffectSettings: K,
                className: $,
                ...G
              } = this.props,
              sr = K[O.name];
            return (0, s.jsxs)("div", {
              ref: this.m_ref,
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              className: (0, M.A)($, p().EffectButton),
              ...G,
              children: [
                sr.renderEffectIcon(),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, s.jsx)(m, {
                    target: this.m_ref.current,
                    effect: O,
                    roomEffectSettings: K,
                  }),
              ],
            });
          }
        }
        const m = (0, f.PA)((F) => {
          const {
              target: O,
              effect: { name: K, appid: $ },
              roomEffectSettings: G,
            } = F,
            sr = G[K],
            [mr] = (0, k.t7)($, {});
          return (0, s.jsx)(y.c, {
            target: O,
            title: K,
            subtitle: mr?.GetName(),
            children: (0, s.jsx)("div", {
              className: p().EffectHoverEffect,
              children: sr.renderEffectIcon(),
            }),
          });
        });
        function b() {
          return (0, s.jsx)("div", {
            className: p().NewEmoticonIndicator,
            children: (0, s.jsx)("div", { className: p().NewEmoticonCircle }),
          });
        }
        function z(F) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...F,
                children: [
                  jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M21 29H22.1875V31H19L21 29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M29 22.1875V21L31 19V22.1875H29Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 59 59",
                width: "32",
                ...F,
                children: jsx("switch", {
                  children: jsx("g", {
                    children: jsx("path", {
                      d: "M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      fill: "#fff",
                    }),
                  }),
                }),
              });
        }
        function S(F) {
          return (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...F,
            children: [
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M21 29H22.1875V31H19L21 29Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M29 22.1875V21L31 19V22.1875H29Z",
              }),
            ],
          });
        }
        function J(F) {
          return useInGamepadUI()
            ? jsx("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...F,
                children: jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z",
                  fill: "currentColor",
                }),
              })
            : jsx("svg", {
                viewBox: "0 -8 60 60",
                width: "32",
                ...F,
                children: jsx("path", {
                  d: "M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function C(F) {
          return (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...F,
            children: (0, s.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
            }),
          });
        }
        function or(F) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...F,
                children: [
                  jsx("path", {
                    d: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 60 38",
                width: "32",
                ...F,
                children: jsx("path", {
                  d: "M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function Q(F) {
          return (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...F,
            children: [
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
              }),
            ],
          });
        }
        function Or(F) {
          const { className: O, ...K } = F;
          return (0, s.jsx)("svg", {
            className: (0, M.A)("SVGIcon_Button SVGIcon_Clock", O),
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ...K,
            children: (0, s.jsx)("path", {
              d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
            }),
          });
        }
      },
      86390: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { Cg: () => j, pZ: () => U, vg: () => X });
        var s = d(7850),
          hr = d(90626),
          f = d(88003),
          o = d(18210),
          t = d(3166),
          k = d(34004),
          ar = d(6740),
          M = d(3685),
          H = d(8059),
          B = d(96538);
        function er(g) {
          return (0, s.jsx)(f.x_, {
            onEscKeypress: g.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, s.jsx)(W, {
              redirectURL: g.redirectURL,
              guestOption: g.guestOption,
            }),
          });
        }
        function j(g) {
          const { redirectURL: a = window.location.href } = g;
          return (0, s.jsx)(B.EN, {
            active: !0,
            children: (0, s.jsx)(er, { redirectURL: a }),
          });
        }
        function X() {
          (0, f.pg)(
            (0, s.jsx)(er, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, o.we)("#Login_SignInTitle") },
          );
        }
        function U(g, a) {
          (0, f.pg)(
            (0, s.jsx)(er, {
              ownerWin: window,
              redirectURL: g,
              guestOption: a,
            }),
            window,
            { strTitle: (0, o.we)("#Login_SignInTitle") },
          );
        }
        function W(g) {
          const { redirectURL: a, guestOption: i } = g,
            [Y] = (0, hr.useState)(
              new M.D(t.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [yr, vr] = (0, hr.useState)(!1),
            fr = (E) => {
              E == H.wI.k_PrimaryDomainFail
                ? vr(!0)
                : window.location.assign(a);
            };
          return (0, s.jsx)("div", {
            children: yr
              ? (0, s.jsx)(k.Fn, {})
              : (0, s.jsx)(k.YN, {
                  autoFocus: !0,
                  transport: Y,
                  platform: ar.SS.tS,
                  onComplete: fr,
                  redirectUrl: a,
                  theme: "modal",
                  children: i && (0, s.jsx)(k.Mk, { redirectURL: a }),
                }),
          });
        }
      },
      16085: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { m: () => X });
        var s = d(7850),
          hr = d(90626),
          f = d(99412),
          o = d(48421),
          t = d(36707),
          k = d(18210),
          ar = d(53113),
          M = d(72609),
          H = d(15392),
          B = d.n(H),
          er = d(29630),
          j = d(60480);
        function X(W) {
          const { gidEvent: g } = W,
            a = (0, o.RR)(g);
          return a
            ? (0, s.jsx)(U, {
                event: a,
                lang: (0, f.sfN)(M.TS.LANGUAGE),
                href: (0, ar.k2)((0, j.n4)(a) ?? ""),
              })
            : null;
        }
        function U(W) {
          const { event: g, lang: a, href: i } = W,
            [Y, yr] = (0, hr.useMemo)(() => {
              const vr = g.jsondata.localized_sale_product_banner,
                fr = g.jsondata.localized_sale_product_mobile_banner;
              if (vr?.length && fr?.length) {
                const E = k.NT.GetWithFallback(vr, a),
                  T = k.NT.GetWithFallback(fr, a);
                if (E?.length && T?.length)
                  return [
                    er.zU.GenerateURLFromHashAndExt(g.clanSteamID, E),
                    er.zU.GenerateURLFromHashAndExt(g.clanSteamID, T),
                  ];
              }
              return [void 0, void 0];
            }, [g, a]);
          return !Y?.length || !yr?.length
            ? null
            : (0, s.jsxs)("a", {
                href: i,
                className: H.Link,
                children: [
                  (0, s.jsx)("img", {
                    src: Y,
                    className: (0, t.A)(H.Banner, H.Big),
                  }),
                  (0, s.jsx)("img", {
                    src: yr,
                    className: (0, t.A)(H.Banner, H.Mobile),
                  }),
                ],
              });
        }
      },
      75975: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { Jl: () => H, nl: () => y, rf: () => u });
        var s = d(7850),
          hr = d(36118),
          f = d(56718),
          o = d(3166);
        function t() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function k(A) {
          const tr = A.filled ?? !0;
          return useInGamepadUI()
            ? tr
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function ar(A) {
          const tr = A.filled ?? !0;
          return useInGamepadUI()
            ? tr
              ? jsx(GamepadSVG.Heart, {})
              : jsx(GamepadSVG.HeartEmpty, {})
            : jsx(SVG.Heart, {});
        }
        function M() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ControllerStatus, {})
            : jsx(SVG.BigPicture, {});
        }
        function H(A) {
          return (0, o.Qn)()
            ? (0, s.jsx)(f.MGO, { ...A })
            : (0, s.jsx)(hr.Jlk, { ...A });
        }
        function B() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Carat, { direction: "down" })
            : jsx(SVG.FlatArrow, { angle: 180 });
        }
        function er() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Information, {})
            : jsx(SVG.Information, {});
        }
        function j(A) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Lock, {})
            : jsx(SVG.Lock, {});
        }
        function X() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Download, {})
            : jsx(SVG.Download, {});
        }
        function U() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Play, {})
            : jsx(SVG.Play, {});
        }
        function W(A) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Achievement, {})
            : jsx(SVG.AwardIcon, {});
        }
        function g(A) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsUp, {})
            : jsx(SVG.ThumbsUpUserNews, { className: A.className });
        }
        function a(A) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsDown, {})
            : jsx(SVG.ThumbsUpUserNews, { className: A.className });
        }
        function i(A) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.CommentThread, { className: A.className })
            : jsx(SVG.CommentThread, { className: A.className });
        }
        function Y() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Pause, {})
            : jsx(SVG.Pause, {});
        }
        function yr() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Reload, {})
            : jsx(SVG.Reload, {});
        }
        function vr() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Update, {})
            : jsx(SVG.Update, {});
        }
        function fr() {
          return jsx(GamepadSVG.Globe, {});
        }
        function E() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Close, {})
            : jsx(SVG.X_Line, {});
        }
        function T() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Trash, {})
            : jsx(SVG.Trash, {});
        }
        function rr() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Dynamic, {})
            : jsx(SVG.DynamicCollection, {});
        }
        function nr() {
          return jsx(GamepadSVG.Add, {});
        }
        function p() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Edit, {})
            : jsx(SVG.Edit, {});
        }
        function u() {
          return (0, s.jsx)(hr.rfv, {});
        }
        function y() {
          return (0, o.Qn)() ? (0, s.jsx)(f.nl, {}) : (0, s.jsx)(hr.jZW, {});
        }
      },
      79167: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { I: () => g });
        var s = d(7850),
          hr = d(90626),
          f = d(30096),
          o = d(75844),
          t = d(8323),
          k = d(18210),
          ar = d(16412),
          M = d(36118),
          H = d(81315),
          B = d.n(H),
          er = d(13854),
          j = Object.defineProperty,
          X = Object.getOwnPropertyDescriptor,
          U = (a, i, Y, yr) => {
            for (
              var vr = yr > 1 ? void 0 : yr ? X(i, Y) : i, fr = a.length - 1, E;
              fr >= 0;
              fr--
            )
              (E = a[fr]) && (vr = (yr ? E(i, Y, vr) : E(vr)) || vr);
            return yr && vr && j(i, Y, vr), vr;
          },
          W = ((a) => (
            (a.topleft = "topleft"),
            (a.top = "top"),
            (a.topright = "topright"),
            (a.left = "left"),
            (a.middle = "middle"),
            (a.right = "right"),
            (a.bottomleft = "bottomleft"),
            (a.bottom = "bottom"),
            (a.bottomright = "bottomright"),
            a
          ))(W || {});
        let g = class extends hr.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new t.Ji();
          m_strDescription = "";
          m_aspectRatio = 1;
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          constructor(a) {
            super(a),
              (this.state = {
                curLeftPosPct: this.props.xPosPct,
                curTopPosPct: this.props.yPosPct,
                curRightPosPct:
                  100 - (this.props.widthPct + this.props.xPosPct),
                curBottomPosPct:
                  100 - (this.props.yPosPct + this.props.heightPct),
                curWidthPct: this.props.widthPct,
                curHeightPct: this.props.heightPct,
                EdgeDown: void 0,
                text_link_url: this.props.link_url,
                text_link_description: this.props.link_description,
                bEditingLink: !1,
                valid_link: this.validateUrl(this.props.link_url),
              }),
              (this.m_strDescription = this.props.link_description ?? ""),
              (this.m_aspectRatio =
                this.props.heightPct > 0 && this.props.widthPct > 0
                  ? this.props.widthPct / this.props.heightPct
                  : 1);
          }
          LinkRegionBoxRef(a) {
            this.m_elLinkRegionBox = a;
          }
          OnMouseDown(a, i) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (Y) => {
                this.OnMouseUp(Y, i);
              }),
              (this.m_fnMouseMove = (Y) => {
                this.OnMouseMove(Y, i);
              }),
              this.setState({ EdgeDown: i }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((a.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((a.clientY - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                this.state.curTopPosPct),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mousemove",
                this.m_fnMouseMove,
              ),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mouseup",
                this.m_fnMouseUp,
              )),
              a.preventDefault(),
              a.stopPropagation();
          }
          OnMouseMove(a, i) {
            if (this.state.EdgeDown !== void 0) {
              switch ((a.shiftKey && this.m_fnMouseUp(), i)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(a.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(a.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(a.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(a.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(a.clientY),
                    curLeftPosPct: this.CalcLeftEdge(a.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(a.clientY),
                    curRightPosPct: this.CalcRightEdge(a.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(a.clientX),
                    curBottomPosPct: this.CalcBottomEdge(a.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(a.clientX),
                    curBottomPosPct: this.CalcBottomEdge(a.clientY),
                  });
                  break;
                }
                case "middle": {
                  const Y = (0, er.OQ)(
                      this.CalcLeftEdge(a.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    yr = 100 - (Y + this.state.curWidthPct),
                    vr = (0, er.OQ)(
                      this.CalcTopEdge(a.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    fr = 100 - (vr + this.state.curHeightPct),
                    E = {
                      curLeftPosPct: Y,
                      curRightPosPct: yr,
                      curTopPosPct: vr,
                      curBottomPosPct: fr,
                    };
                  this.setState(E);
                  break;
                }
                default:
                  break;
              }
              a.preventDefault(), a.stopPropagation();
            }
          }
          IsValidPct(a) {
            return a >= 0 && a <= 100;
          }
          UpdateState(a) {
            let i =
                a.curTopPosPct !== void 0
                  ? a.curTopPosPct
                  : this.state.curTopPosPct,
              Y =
                a.curBottomPosPct !== void 0
                  ? a.curBottomPosPct
                  : this.state.curBottomPosPct,
              yr =
                a.curLeftPosPct !== void 0
                  ? a.curLeftPosPct
                  : this.state.curLeftPosPct,
              vr =
                a.curRightPosPct !== void 0
                  ? a.curRightPosPct
                  : this.state.curRightPosPct,
              fr = (0, er.OQ)(
                100 - vr - yr,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              E = (0, er.OQ)(
                100 - Y - i,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (a.curLeftPosPct !== void 0 || a.curRightPosPct !== void 0
                ? (E = fr / this.m_aspectRatio)
                : (fr = E * this.m_aspectRatio)),
              a.curLeftPosPct !== void 0
                ? (yr = 100 - vr - fr)
                : (vr = 100 - (yr + fr)),
              a.curTopPosPct !== void 0
                ? (i = 100 - Y - E)
                : (Y = 100 - (i + E));
            const T = 100 - vr - yr,
              rr = 100 - Y - i;
            this.IsValidPct(yr) &&
              this.IsValidPct(vr) &&
              this.IsValidPct(i) &&
              this.IsValidPct(Y) &&
              this.IsValidPct(T) &&
              this.IsValidPct(rr) &&
              this.setState({
                curLeftPosPct: yr,
                curRightPosPct: vr,
                curTopPosPct: i,
                curBottomPosPct: Y,
              });
          }
          GetXPercent(a) {
            return this.m_rectLinkRegion
              ? ((a - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(a) {
            return this.m_rectLinkRegion
              ? ((a - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(a) {
            return (0, er.OQ)(this.GetXPercent(a), 0, 100);
          }
          CalcRightEdge(a) {
            return (0, er.OQ)(
              100 - (this.GetXPercent(a) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(a) {
            return (0, er.OQ)(this.GetYPercent(a), 0, 100);
          }
          CalcBottomEdge(a) {
            return (0, er.OQ)(
              100 - (this.GetYPercent(a) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(a, i) {
            this.setState({
              curWidthPct:
                100 - this.state.curRightPosPct - this.state.curLeftPosPct,
            }),
              this.setState({
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              }),
              this.setState({ EdgeDown: void 0 }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              }),
              this.m_listeners.Unregister();
          }
          async HandleDelete() {
            this.props.deleteFn && this.props.deleteFn(this.props.index);
          }
          OnSetLinkURLChange(a) {
            this.setState({
              text_link_url: a.target.value,
              valid_link: this.validateUrl(a.target.value),
            });
          }
          OnSetLinkDescriptionChange(a) {
            this.setState({ text_link_description: a.target.value });
          }
          validateUrl(a) {
            return a != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  a,
                )
              : !1;
          }
          OnSaveLink() {
            (this.m_strDescription = this.state.text_link_description ?? ""),
              this.setState({ bEditingLink: !this.state.bEditingLink }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              });
          }
          OnEditLink() {
            this.setState({ bEditingLink: !this.state.bEditingLink });
          }
          render() {
            let a = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              i = B().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (i += ` ${B().EdgeDown} ` + B()[this.state.EdgeDown]),
              (0, s.jsxs)("div", {
                className: i,
                style: a,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, s.jsxs)("div", {
                    className: B().LinkRegionGridBox,
                    children: [
                      (0, s.jsx)("div", {
                        className: `${B().LinkRegionEdge} ${B().TopLeft}`,
                        onMouseDown: (Y) => {
                          this.OnMouseDown(Y, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: `${B().LinkRegionEdge} ${B().Top}`,
                        onMouseDown: (Y) => {
                          this.OnMouseDown(Y, "top");
                        },
                      }),
                      (0, s.jsx)("div", {
                        className: `${B().LinkRegionEdge} ${B().TopRight}`,
                        onMouseDown: (Y) => {
                          this.OnMouseDown(Y, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: `${B().LinkRegionEdge} ${B().Left}`,
                        onMouseDown: (Y) => {
                          this.OnMouseDown(Y, "left");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsxs)("div", {
                        className: `${B().LinkRegionEdge} ${B().Middle}`,
                        onMouseDown: (Y) => {
                          this.OnMouseDown(Y, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, s.jsx)("div", {
                              className: B().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, s.jsx)(M.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, s.jsx)("div", {
                              className: B().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, s.jsx)(M.xv8, {}),
                            }),
                          (0, s.jsxs)("div", {
                            className: B().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: `${B().LinkRegionEdge} ${B().Right}`,
                        onMouseDown: (Y) => {
                          this.OnMouseDown(Y, "right");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: `${B().LinkRegionEdge} ${B().BottomLeft}`,
                        onMouseDown: (Y) => {
                          this.OnMouseDown(Y, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: `${B().LinkRegionEdge} ${B().Bottom}`,
                        onMouseDown: (Y) => {
                          this.OnMouseDown(Y, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: `${B().LinkRegionEdge} ${B().BottomRight}`,
                        onMouseDown: (Y) => {
                          this.OnMouseDown(Y, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, s.jsxs)("div", {
                      className: B().LinkRegionInfo,
                      children: [
                        (0, s.jsx)(ar.pd, {
                          className: B().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, k.we)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, s.jsx)(ar.pd, {
                          className: B().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, k.we)("#SteamTV_LinkDescription"),
                          placeholder: (0, k.we)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, s.jsxs)("div", {
                          className: B().LinkRegionButtonContainer,
                          children: [
                            (0, s.jsxs)(ar.$n, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, k.we)("#Button_OK"), " "],
                            }),
                            (0, s.jsxs)(ar.$n, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, k.we)("#Button_Cancel")],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            );
          }
        };
        U([f.oI], g.prototype, "LinkRegionBoxRef", 1),
          U([f.oI], g.prototype, "OnMouseDown", 1),
          U([f.oI], g.prototype, "OnMouseMove", 1),
          U([f.oI], g.prototype, "OnMouseUp", 1),
          U([f.oI], g.prototype, "HandleDelete", 1),
          U([f.oI], g.prototype, "OnSetLinkURLChange", 1),
          U([f.oI], g.prototype, "OnSetLinkDescriptionChange", 1),
          U([f.oI], g.prototype, "OnSaveLink", 1),
          U([f.oI], g.prototype, "OnEditLink", 1),
          (g = U([o.PA], g));
      },
      53120: (Vr) => {
        Vr.exports = {
          strStreamIconCapsuleArtHeight: "58px",
          strStreamIconScreenshotArtHeight: "58px",
          bordered_container: "_3zXpFCyX2IiaD-MNF5KJFf",
          WidePlayer: "_3zjvrmOCIh31clDHjpLE2a",
          store_chat_ctn: "_21N-VV6Gvjjc1FqzOMJQfi",
          item_drop_ctn: "ifxDfv8dAGa5u71nRT0CJ",
          BorderedContainerPromotion: "-b_1HPR-CqjjzrTnTG2fn",
          bordered_title: "WsfbqpkdutNGWu3V4uhn_",
          streamTitle: "XMkaslAYoJyTgLBY3WHVJ",
          bordered_subtitle: "_3tYeiJ6LHC_iVhqb9zqOMy",
          bordered_corner_container: "_3IBcNy1U-I38_F9BNw-VHE",
          bordered_corner_expanded: "ahz31bshwySKGB_tBKf14",
          bordered_corner_shrinked: "L8sFYvKOUztrhXdjxy7mp",
          broadcast_settings_icon: "_37ugZJhL-qCRkdeZBRju2h",
          side_panels: "T_zpRAGXggYgVaRyCSXDu",
          wrapper: "_1mH-vDK7JF0NBAdZfdzr1a",
          video_placeholder: "_1KU955BfHBkZdSvJncjc9V",
          embedded_player: "_12fBJU1kOnQCeKc9JFTGMX",
          NoChat: "_2QQm1StfkXOLXrBhLy_jYP",
          video_container: "_1gbNxru_N2ui-EXc2_zmRy",
          viewer_bar: "_2YgphHYykz192eH3FgalS4",
          viewer_links: "_2EQpO5nLkHNXFdPk0ZnoY2",
          chat_link: "_3a0zX_I8eGlU5CYF3lcQjs",
          settings_link: "_1ThkelBkPfoE80ibfGyyVB",
          external_link: "_1n1BMOyCVFA0y6ULd_laPH",
          viewer_count: "_1MrTWpNan4htXK4Kql6ms8",
          vod_title: "_2xKaMJn0nexa3MMJvN6yq-",
          stream_icon_and_viewer_container: "_2sbrGTttGmHbz8ZPsO1YuR",
          display_capsule_art: "SsORVFNW3KBOdsIxDVqcd",
          ViewerNum: "_1reMoMi3BZbMUs6jHW93f1",
          StreamCapsule: "biTh7mrlaSv_WSY2gFsCH",
          stream_icon_container: "_2zBOiujXasDdHPmFPW4O90",
          stream_icon_hide_on_hover: "qYFsGojW19eJQAuemyuHQ",
          stream_icon_show_on_hover: "_29z3Nu6SGTNFDwIw8Gdvuk",
          stream_icon: "_1LBYspkgF9X97b89kPRBFC",
          stream_icon_selected: "mSpzeNvpTqIiZHkJgHRw7",
          multistream: "_1DS-WZoUJyBitKOZoq7u3n",
          MultiStreamCtn: "_1K6j5rrGvLPb8aT2L7CBAA",
          scrollingstreams: "_3aYWlUqW6-SosI72nizpP4",
          clear_div: "_1oCVbTJqa4Av40NuPdztIv",
          NoSelect: "_3Zm9dcDmIQkcWVzEq0IB-E",
          broadcast_floating: "_2WNxa8Qii8HrG8e0th6oB8",
          PopOutVideoTitleBar: "_184SIP7TlwJaOjOVVxLBLS",
          PopOutVideoTitleText: "_28O6dX6-Xf37oViWRRhvjz",
          PopOutVideoCloseButton: "_3bIsS_eft2P6BaAUZdlqme",
          BroadcastPlayerContainer: "_3VvcXgvuoyH2OXPyzZXeVT",
          ChatContainer: "_3kqwu6KzpbMqW5fIlXMIKI",
          BroadcastAndChat: "_1aJ9yfIUd-oGDvpo5-BuBx",
          detail_chat_ctn: "IaFnsy98_mIwYox4zmFu2",
          ChatEntry: "Rs7EltAKuQWw9U0v2bKxp",
          Event: "_1A0NY-wvZmZAqMMiw9oTYR",
          container: "_2yiy6ghVhj3fkC4I01odHC",
          LeftPanelCtn: "_6O_psaoFJTLs30M_ePzZ7",
          RightPanelCtn: "yRHl2kJWdMGdwVN_70nrP",
          SidePanelBackground: "_2FYu31I46rjm0DVxq-ufK9",
          LeftPanel: "o6XqrPpvDrpRsE7SpW8qJ",
        };
      },
      63508: (Vr) => {
        Vr.exports = {
          BroadcastChat: "_3URK7gSLJV_b2M32URtdZ1",
          ChatEntry: "_3soy-wJhd4RZ8SNtC31AOz",
          ChatPanel: "_2ZCAIdTy8CoxNNL8KBGNM",
          ChatMessages: "_3M5L0Ioa2wfgEXvySi1hr6",
          EmoticonContainer: "_1wa4oT25nXzeGxGXYpgDwI",
          ChatSend: "_3JUnDuh4M77s4kfjpnkaYW",
          ChatBox: "_2qfgSP2OtiZ-r-oBJanIaJ",
          ChatControls: "_1TekO7c6uL1uezWI5iWEBG",
          MessageChat: "_22PB4rET-Rx8JtZs34nMkf",
          MessageName: "BJe6CMne992juEIk9iv-k",
          MessageContents: "PNYZaITw4xz8Xi60JGcBM",
          EmoticonsOnly: "gFjH8o1u6iAUuxxkUey3m",
          MessageNotification: "_3Xb4_FEsLWwa-ux6iYDjLZ",
          MessageError: "_8MzyWIQ6TwS_AnWj_m4rL",
          minHeightZero: "r7HLM4rGlw8BlvCfsQoMx",
          ChatLoginButton: "_2TAQo-af_j4l7zy9uy5p-l",
          RateLimitProgressBarContainer: "JPqUGxAKEhSxZR4Hr99D1",
          RateLimitProgressBar: "_1EcVKYO2FR6NiyJchLLbol",
          TimedProgressBarContainer: "_39xGjKkRIIE7HwloXCWT41",
          wrapper: "_2vz6RRjc3uhVClPT9KmsWO",
          pie: "_1k4dSfTb9MQQkhRmcTNjXs",
          spinner: "_3nRh57_ZMuIbHDg29qxFoy",
          rota: "_1xXh6121fD_MtzKqUoAKP8",
          filler: "_3EegkD4UmE1ZI1j7DOgAIe",
          fill: "_2tyuX1freBgl1ICX3yI2qG",
          mask: "_1V4KedCnQKPf-TNpoigdVe",
          SelectedUserNameCtn: "_3K4QXV1l7toIASzIn03a9w",
          SelectedUserName: "c907VNi3QBNJZYF7xxgUB",
          FlairContainer: "_166wpHbAcQPnZog52jPZLN",
          RoleFlairContainer: "_1QRJ2HWdG8P7m3J0-ATU4u",
          Description: "_105HH_vRwSwjIsvw_F-73M",
          LogInPrompt: "CsA8vCxom50xEpq0oyOHG",
          SignInButton: "_1dMwWQHXZbAAqaFBL4YyCP",
        };
      },
      8287: (Vr) => {
        Vr.exports = {
          GiveawayWinnerBox: "_3cv4lblvGYp_wrnLaNEVn0",
          GiveawayWinnerAnnounced: "oLk3wFE5C0ocSKj9h7UMR",
          WinnerFlash: "_29x--KnTUnv5WIHAtqtwID",
          GiveawayWinnerBoxRight: "_2ftrc0KIXzfdR16ghJYvPg",
          GiveawayWinnerText: "_1SY2g9O-qYNIpmXPLu4XKK",
          GiveawayWinnerCountdown: "_1eP67dgalghp9Y7VMqedDT",
          GiveawayWinnerBoxLeft: "N6Rk1L-HIjqiJV3iXqRGK",
          GiveawayWinnerArt: "_1sgypTHPFS1VzmPOCkP_pK",
          GiveawayWinnerQuestion: "_3mvdct5S8-AGn0JrsRW0Vo",
          InViewerBar: "_25VQ8K4B2BcYKAbkfDx6Z_",
          GiveawayRegisterButton: "eKSAvf7P4Na3LE-0FkJFY",
          GiveawayAlreadyRegistered: "_2AVNRKDYvludWnAzqwlRYA",
        };
      },
      15527: (Vr) => {
        Vr.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      43087: (Vr) => {
        Vr.exports = {
          StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
          Action: "_2Xpw9--lhL-kpt-lUannE1",
          WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
          StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
          StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
          StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
        };
      },
      19418: (Vr) => {
        Vr.exports = {
          "duration-app-launch": "800ms",
          Picker: "tid_OE5NJWCCVJQP1PfRc",
          Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
          Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
          Focus: "_1xH5si_KorJpS4ST2Geksh",
          TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
          Active: "_1ddEQAfz6GuVRSEqk-d0r",
          Content: "dUQIH8Qg80N6kjB8UQO0P",
          ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
          Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
          SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
          SectionTitle: "_3WuFl419BivPeLqeVIC939",
          FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
          FilterInput: "_2l4z-U60lABvd9XWArGjAf",
          AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
          BackgroundAnimation: "NB2T8xbO5KSdw1jQWC0aq",
          "ItemFocusAnim-darkerGrey-nocolor": "_1tzknOYTl338bweAg8VM66",
          "ItemFocusAnim-darkerGrey": "_321Bw1yIABWsLJup9W__Gb",
          "ItemFocusAnim-darkGreySettings": "BSoZ5uHW-lcSEjyeNZol4",
          "ItemFocusAnim-darkGrey": "_3Xhw1BWpHpkagZqxZOv8kb",
          "ItemFocusAnim-grey": "_2OnCF3hKjr89wU_tfFaWX2",
          "ItemFocusAnim-translucent-white-10": "_2uQtLVYFAkVIQ8Mzm6C5K3",
          "ItemFocusAnim-translucent-white-20": "_2vYgLWggR0AEuxE9DPEEk2",
          "ItemFocusAnimBorder-darkGrey": "PgPnyLUdsSEfTVdlxX2a9",
          "ItemFocusAnim-green": "_26b32AeDG8ENv_LcSS6SPE",
          focusAnimation: "NrCY5qgGbXyh_LeVWegvW",
          hoverAnimation: "ECWcgkTWpWeZLs6-rszlL",
        };
      },
      90024: (Vr) => {
        Vr.exports = {
          narrowWidth: "500px",
          chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
          chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
          chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
          chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
          minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
          chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
          EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
          EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
          disabled: "jaQN2IyN4P8LZXJ6P11qy",
          Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
          AudioLines: "IWabakUFeIH_d5rhBZ6dG",
          Active: "_37tPtXtV-sv9XgDHjS2cnj",
        };
      },
      14256: (Vr) => {
        Vr.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      15392: (Vr) => {
        Vr.exports = {
          Link: "-HlDBB290kjpl61uUmRed",
          Banner: "_2bT8irkKNnA5sxFG3MUXzH",
          Big: "sGy-bB7uqEt4Hoe7U5iA1",
          Mobile: "mhii5hgMCQvO2tXOUdWPQ",
        };
      },
      33543: (Vr) => {
        Vr.exports = {
          narrowWidth: "500px",
          FriendsListInsetShadowCtn: "_1qeW35auMlJ5pJVNtBC-bF",
          FriendListInsetShadowTop: "_1osHa9KHOmdCDNrA232z4N",
          FriendListInsetShadowBottom: "_2OoTJwlWvzvAysWOOEQaXS",
        };
      },
      81315: (Vr) => {
        Vr.exports = {
          LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
          EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
          LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
          LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
          TopLeft: "Clgi---P85XXv25yLZwB0",
          Top: "_2Z9VyBAzofV3JvK__dECbX",
          TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
          Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
          Middle: "_1HecozzoSZfUZSci9dLkxN",
          LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
          LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
          Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
          BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
          Bottom: "sIHlK9sN2255-irERXD_V",
          BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
          topleft: "_3W096h6Ka6U7sOZVa9lXQo",
          top: "_1iRW1Msfh60zHqD-xe4EAk",
          topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
          left: "_2iBrmAEyXuaKAeZ-g-4CPF",
          right: "_15t6A4l27DY4KRL1aAUTTS",
          bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
          bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
          bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
          middle: "_1CS75ZrrDXna6xatw5ZvPR",
          LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
          DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
          LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
          LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
        };
      },
      61738: (Vr, Yr, d) => {
        var s = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function hr(o) {
          var t = f(o);
          return d(t);
        }
        function f(o) {
          if (!d.o(s, o)) {
            var t = new Error("Cannot find module '" + o + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return s[o];
        }
        (hr.keys = function () {
          return Object.keys(s);
        }),
          (hr.resolve = f),
          (Vr.exports = hr),
          (hr.id = 61738);
      },
      96715: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { A: () => s });
        const s =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      10886: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { A: () => s });
        const s =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      19654: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { A: () => s });
        const s =
          d.p +
          "images/applications/store/reddit_large.png?v=valveisgoodatcaching";
      },
      3209: (Vr, Yr, d) => {
        "use strict";
        d.d(Yr, { A: () => s });
        const s =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();
