/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [68396],
    {
      90711: (fi, hi, g) => {
        "use strict";
        g.d(hi, {
          DK: () => Ki,
          hW: () => vr,
          Lw: () => Ar,
          ku: () => ci,
          Mn: () => di,
          sW: () => ur,
          nn: () => l,
        });
        var l = {};
        g.r(l), g.d(l, { Tq: () => ir, TC: () => t, fe: () => Cr });
        var ur = {};
        g.r(ur), g.d(ur, { rx: () => K, XP: () => N });
        var f = g(80613),
          m = g.n(f),
          e = g(75245),
          F = g(35038);
        const Mr = 0,
          Z = 1,
          ir = 0,
          j = 1,
          yr = 2,
          E = 3,
          bi = 4,
          Kr = 5,
          Cr = 6,
          b = 7,
          a = 8,
          t = 9,
          Q = 10,
          Xr = 11,
          mr = 12,
          U = 13,
          y = 14,
          O = 15,
          K = 0,
          N = 1,
          ar = 2;
        function ii(_) {
          return "unknown EBroadcastChatPermission ( " + _ + " )";
        }
        function A(_) {
          return "unknown EBroadcastWatchLocation ( " + _ + " )";
        }
        function ui(_) {
          return "unknown EBroadcastChatBan ( " + _ + " )";
        }
        function ei(_) {
          return "unknown EBroadcastRestriction ( " + _ + " )";
        }
        class k extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              k.prototype.permission || e.Sg(k.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    permission: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    client_instance_id: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    title: { n: 4, br: e.qM.readString, bw: e.gp.writeString },
                    cellid: { n: 5, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    rtmp_token: {
                      n: 6,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    thumbnail_upload: {
                      n: 7,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    sysid: { n: 9, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    allow_webrtc: {
                      n: 10,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = e.w0(k.M())), k.sm_mbf;
          }
          toObject(i = !1) {
            return k.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(k.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(k.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new k();
            return k.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(k.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return k.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(k.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Request";
          }
        }
        class W extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              W.prototype.broadcast_id || e.Sg(W.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    thumbnail_upload_address: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    thumbnail_upload_token: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    thumbnail_interval_seconds: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    heartbeat_interval_seconds: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = e.w0(W.M())), W.sm_mbf;
          }
          toObject(i = !1) {
            return W.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(W.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(W.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new W();
            return W.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(W.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return W.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(W.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Response";
          }
        }
        class tr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              tr.prototype.broadcast_id || e.Sg(tr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = e.w0(tr.M())), tr.sm_mbf;
          }
          toObject(i = !1) {
            return tr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(tr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(tr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new tr();
            return tr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(tr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(tr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Request";
          }
        }
        class fr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return fr.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new fr();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new fr();
            return fr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Response";
          }
        }
        class I extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              I.prototype.broadcast_id || e.Sg(I.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    cellid: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    as_rtmp: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    delay_seconds: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtmp_token: {
                      n: 5,
                      d: "0",
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    upload_ip_address: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_replay: { n: 7, br: e.qM.readBool, bw: e.gp.writeBool },
                    sysid: { n: 8, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = e.w0(I.M())), I.sm_mbf;
          }
          toObject(i = !1) {
            return I.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(I.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(I.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new I();
            return I.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(I.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return I.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(I.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Request";
          }
        }
        class $ extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              $.prototype.upload_token || e.Sg($.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    upload_token: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    upload_address: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    enable_replay: {
                      n: 6,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    http_address: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = e.w0($.M())), $.sm_mbf;
          }
          toObject(i = !1) {
            return $.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT($.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq($.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new $();
            return $.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj($.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return $.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0($.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Response";
          }
        }
        class nr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              nr.prototype.broadcast_id || e.Sg(nr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    upload_token: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    upload_address: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    http_address: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 5,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    heartbeat_interval_seconds: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_rtmp: { n: 7, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = e.w0(nr.M())), nr.sm_mbf;
          }
          toObject(i = !1) {
            return nr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(nr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(nr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new nr();
            return nr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(nr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(nr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastUploadStarted_Notification";
          }
        }
        class hr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              hr.prototype.steamid || e.Sg(hr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = e.w0(hr.M())), hr.sm_mbf;
          }
          toObject(i = !1) {
            return hr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(hr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(hr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new hr();
            return hr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(hr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(hr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Request";
          }
        }
        class zr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              zr.prototype.gameid || e.Sg(zr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    gameid: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    title: { n: 2, br: e.qM.readString, bw: e.gp.writeString },
                    num_viewers: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    permission: {
                      n: 4,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    is_rtmp: { n: 5, br: e.qM.readBool, bw: e.gp.writeBool },
                    seconds_delay: {
                      n: 6,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    is_publisher: {
                      n: 7,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    thumbnail_url: {
                      n: 8,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    update_interval: {
                      n: 9,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    is_uploading: {
                      n: 10,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    duration: {
                      n: 11,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_replay: { n: 12, br: e.qM.readBool, bw: e.gp.writeBool },
                    is_capturing_vod: {
                      n: 13,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    is_store_whitelisted: {
                      n: 14,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = e.w0(zr.M())), zr.sm_mbf;
          }
          toObject(i = !1) {
            return zr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(zr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(zr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new zr();
            return zr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(zr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(zr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Response";
          }
        }
        class si extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              si.prototype.steamid || e.Sg(si.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              si.sm_m ||
                (si.sm_m = {
                  proto: si,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              si.sm_m
            );
          }
          static MBF() {
            return si.sm_mbf || (si.sm_mbf = e.w0(si.M())), si.sm_mbf;
          }
          toObject(i = !1) {
            return si.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(si.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(si.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new si();
            return si.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(si.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return si.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(si.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Request";
          }
        }
        class jr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              jr.prototype.thumbnail_url || e.Sg(jr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    thumbnail_url: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    update_interval: {
                      n: 2,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    num_viewers: {
                      n: 3,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    duration: { n: 4, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = e.w0(jr.M())), jr.sm_mbf;
          }
          toObject(i = !1) {
            return jr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(jr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(jr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new jr();
            return jr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(jr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(jr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Response";
          }
        }
        class br extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              br.prototype.steamid || e.Sg(br.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    existing_broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    client_cell: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    watch_location: {
                      n: 6,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    is_webrtc: { n: 7, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = e.w0(br.M())), br.sm_mbf;
          }
          toObject(i = !1) {
            return br.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(br.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(br.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new br();
            return br.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(br.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return br.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(br.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Request";
          }
        }
        class S extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              S.prototype.response || e.Sg(S.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    response: { n: 1, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    mpd_url: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    broadcast_id: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    gameid: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    title: { n: 5, br: e.qM.readString, bw: e.gp.writeString },
                    num_viewers: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    permission: {
                      n: 7,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    is_rtmp: { n: 8, br: e.qM.readBool, bw: e.gp.writeBool },
                    seconds_delay: {
                      n: 9,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    viewer_token: {
                      n: 10,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    hls_m3u8_master_url: {
                      n: 11,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    heartbeat_interval: {
                      n: 12,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    thumbnail_url: {
                      n: 13,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    is_webrtc: { n: 14, br: e.qM.readBool, bw: e.gp.writeBool },
                    webrtc_session_id: {
                      n: 15,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_offer_sdp: {
                      n: 16,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    webrtc_turn_server: {
                      n: 17,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    is_replay: { n: 18, br: e.qM.readBool, bw: e.gp.writeBool },
                    duration: {
                      n: 19,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    cdn_auth_url_parameters: {
                      n: 20,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = e.w0(S.M())), S.sm_mbf;
          }
          toObject(i = !1) {
            return S.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(S.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(S.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new S();
            return S.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(S.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return S.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(S.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Response";
          }
        }
        function Ui(_) {
          return (
            "unknown CBroadcast_WatchBroadcast_Response_EWatchResponse ( " +
            _ +
            " )"
          );
        }
        class er extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              er.prototype.steamid || e.Sg(er.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    representation: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = e.w0(er.M())), er.sm_mbf;
          }
          toObject(i = !1) {
            return er.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(er.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(er.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new er();
            return er.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(er.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return er.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(er.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_HeartbeatBroadcast_Notification";
          }
        }
        class ri extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ri.prototype.steamid || e.Sg(ri.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ri.sm_m ||
                (ri.sm_m = {
                  proto: ri,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              ri.sm_m
            );
          }
          static MBF() {
            return ri.sm_mbf || (ri.sm_mbf = e.w0(ri.M())), ri.sm_mbf;
          }
          toObject(i = !1) {
            return ri.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ri.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ri.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new ri();
            return ri.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ri.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ri.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopWatchingBroadcast_Notification";
          }
        }
        class cr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              cr.prototype.steamid || e.Sg(cr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    approval_response: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = e.w0(cr.M())), cr.sm_mbf;
          }
          toObject(i = !1) {
            return cr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(cr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(cr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new cr();
            return cr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(cr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(cr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Request";
          }
        }
        class gr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              gr.prototype.success || e.Sg(gr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    success: { n: 1, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = e.w0(gr.M())), gr.sm_mbf;
          }
          toObject(i = !1) {
            return gr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(gr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(gr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new gr();
            return gr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(gr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(gr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Response";
          }
        }
        class or extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              or.prototype.permission || e.Sg(or.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    permission: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    title: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    game_data_config: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = e.w0(or.M())), or.sm_mbf;
          }
          toObject(i = !1) {
            return or.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(or.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(or.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new or();
            return or.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(or.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return or.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(or.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Request";
          }
        }
        class mi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return mi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new mi();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new mi();
            return mi.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Response";
          }
        }
        class q extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              q.prototype.steamid || e.Sg(q.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
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
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    state: { n: 2, br: e.qM.readEnum, bw: e.gp.writeEnum },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = e.w0(q.M())), q.sm_mbf;
          }
          toObject(i = !1) {
            return q.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(q.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(q.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new q();
            return q.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(q.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return q.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(q.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastViewerState_Notification";
          }
        }
        function Oi(_) {
          return (
            "unknown CBroadcast_BroadcastViewerState_Notification_EViewerState ( " +
            _ +
            " )"
          );
        }
        class wi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              wi.prototype.broadcast_id || e.Sg(wi.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wi.sm_m ||
                (wi.sm_m = {
                  proto: wi,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              wi.sm_m
            );
          }
          static MBF() {
            return wi.sm_mbf || (wi.sm_mbf = e.w0(wi.M())), wi.sm_mbf;
          }
          toObject(i = !1) {
            return wi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(wi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(wi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new wi();
            return wi.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(wi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return wi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(wi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              wi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WaitingBroadcastViewer_Notification";
          }
        }
        class wr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              wr.prototype.broadcast_id || e.Sg(wr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_relay_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    too_many_poor_uploads: {
                      n: 4,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = e.w0(wr.M())), wr.sm_mbf;
          }
          toObject(i = !1) {
            return wr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(wr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(wr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new wr();
            return wr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(wr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(wr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopBroadcastUpload_Notification";
          }
        }
        class pr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              pr.prototype.broadcast_id || e.Sg(pr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = e.w0(pr.M())), pr.sm_mbf;
          }
          toObject(i = !1) {
            return pr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(pr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(pr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new pr();
            return pr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(pr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(pr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SessionClosed_Notification";
          }
        }
        class $r extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              $r.prototype.broadcast_id || e.Sg($r.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    num_viewers: {
                      n: 2,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = e.w0($r.M())), $r.sm_mbf;
          }
          toObject(i = !1) {
            return $r.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT($r.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq($r.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new $r();
            return $r.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj($r.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0($r.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastStatus_Notification";
          }
        }
        class Yr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Yr.prototype.broadcast_channel_id || e.Sg(Yr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_channel_name: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    broadcast_channel_avatar: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = e.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(i = !1) {
            return Yr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Yr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Yr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Yr();
            return Yr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Yr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Yr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastChannelLive_Notification";
          }
        }
        class Zr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Zr.prototype.thumbnail_upload_token || e.Sg(Zr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    thumbnail_upload_token: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    thumbnail_broadcast_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    thumbnail_data: {
                      n: 3,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    thumbnail_width: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    thumbnail_height: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = e.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(i = !1) {
            return Zr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Zr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Zr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Zr();
            return Zr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Zr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Zr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendThumbnailToRelay_Notification";
          }
        }
        class D extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              D.prototype.broadcast_upload_id || e.Sg(D.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    broadcast_upload_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = e.w0(D.M())), D.sm_mbf;
          }
          toObject(i = !1) {
            return D.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(D.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(D.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new D();
            return D.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(D.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return D.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(D.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastUploadStop_Notification";
          }
        }
        class Ur extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ur.prototype.broadcaster_steamid || e.Sg(Ur.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = e.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(i = !1) {
            return Ur.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Ur.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Ur.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Ur();
            return Ur.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Ur.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Ur.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_ViewerBroadcastInvite_Notification";
          }
        }
        class Or extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Or.prototype.broadcast_id || e.Sg(Or.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = e.w0(Or.M())), Or.sm_mbf;
          }
          toObject(i = !1) {
            return Or.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Or.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Or.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Or();
            return Or.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Or.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Or.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
          }
        }
        class G extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              G.prototype.steamid || e.Sg(G.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    client_ip: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    client_cell: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = e.w0(G.M())), G.sm_mbf;
          }
          toObject(i = !1) {
            return G.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(G.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(G.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new G();
            return G.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(G.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return G.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(G.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Request";
          }
        }
        class Er extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Er.prototype.chat_id || e.Sg(Er.M()),
              f.Message.initialize(this, i, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = e.w0(Er.M())), Er.sm_mbf;
          }
          toObject(i = !1) {
            return Er.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Er.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Er.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Er();
            return Er.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Er.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Er.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Response";
          }
        }
        class Ar extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ar.prototype.chat_id || e.Sg(Ar.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    message: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    instance_id: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    language: {
                      n: 4,
                      d: 0,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    country_code: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = e.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(i = !1) {
            return Ar.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Ar.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Ar.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Ar();
            return Ar.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Ar.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Ar.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Request";
          }
        }
        class Dr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Dr.prototype.persona_name || e.Sg(Dr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    persona_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    in_game: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                    result: { n: 3, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    cooldown_time_seconds: {
                      n: 4,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = e.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(i = !1) {
            return Dr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Dr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Dr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Dr();
            return Dr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Dr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Dr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Response";
          }
        }
        class di extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              di.prototype.chat_id || e.Sg(di.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              di.sm_m ||
                (di.sm_m = {
                  proto: di,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    flair: { n: 2, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              di.sm_m
            );
          }
          static MBF() {
            return di.sm_mbf || (di.sm_mbf = e.w0(di.M())), di.sm_mbf;
          }
          toObject(i = !1) {
            return di.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(di.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(di.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new di();
            return di.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(di.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return di.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(di.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              di.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Request";
          }
        }
        class Wr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Wr.prototype.result || e.Sg(Wr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    result: { n: 1, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    chat_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    flair: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = e.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(i = !1) {
            return Wr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Wr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Wr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Wr();
            return Wr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Wr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Wr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Response";
          }
        }
        class vr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              vr.prototype.chat_id || e.Sg(vr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    muted: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = e.w0(vr.M())), vr.sm_mbf;
          }
          toObject(i = !1) {
            return vr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(vr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(vr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new vr();
            return vr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(vr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(vr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Request";
          }
        }
        class li extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return li.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new li();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new li();
            return li.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return li.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Response";
          }
        }
        class ci extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ci.prototype.chat_id || e.Sg(ci.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ci.sm_m ||
                (ci.sm_m = {
                  proto: ci,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              ci.sm_m
            );
          }
          static MBF() {
            return ci.sm_mbf || (ci.sm_mbf = e.w0(ci.M())), ci.sm_mbf;
          }
          toObject(i = !1) {
            return ci.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ci.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ci.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new ci();
            return ci.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ci.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ci.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Request";
          }
        }
        class Mi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Mi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new Mi();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Mi();
            return Mi.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Mi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Mi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Response";
          }
        }
        class sr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              sr.prototype.chat_id || e.Sg(sr.M()),
              f.Message.initialize(this, i, 0, -1, [2], null);
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
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readFixed64String,
                      pbr: e.qM.readPackedFixed64String,
                      bw: e.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = e.w0(sr.M())), sr.sm_mbf;
          }
          toObject(i = !1) {
            return sr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(sr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(sr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new sr();
            return sr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(sr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(sr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Request";
          }
        }
        class Br extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Br.prototype.persona_names || e.Sg(Br.M()),
              f.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: { persona_names: { n: 1, c: Lr, r: !0, q: !0 } },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = e.w0(Br.M())), Br.sm_mbf;
          }
          toObject(i = !1) {
            return Br.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Br.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Br.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Br();
            return Br.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Br.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Br.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response";
          }
        }
        class Lr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Lr.prototype.steam_id || e.Sg(Lr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    steam_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    persona: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = e.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(i = !1) {
            return Lr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Lr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Lr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Lr();
            return Lr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Lr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Lr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
          }
        }
        class ti extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ti.prototype.steamid || e.Sg(ti.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ti.sm_m ||
                (ti.sm_m = {
                  proto: ti,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    first_segment: {
                      n: 3,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    num_segments: {
                      n: 4,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    clip_description: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              ti.sm_m
            );
          }
          static MBF() {
            return ti.sm_mbf || (ti.sm_mbf = e.w0(ti.M())), ti.sm_mbf;
          }
          toObject(i = !1) {
            return ti.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ti.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ti.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new ti();
            return ti.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ti.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return ti.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ti.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              ti.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Request";
          }
        }
        class u extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              u.prototype.broadcast_clip_id || e.Sg(u.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = e.w0(u.M())), u.sm_mbf;
          }
          toObject(i = !1) {
            return u.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(u.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(u.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new u();
            return u.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(u.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return u.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(u.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Response";
          }
        }
        class o extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              o.prototype.broadcast_clip_id || e.Sg(o.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = e.w0(o.M())), o.sm_mbf;
          }
          toObject(i = !1) {
            return o.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(o.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(o.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new o();
            return o.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(o.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return o.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(o.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Request";
          }
        }
        class h extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return h.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new h();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new h();
            return h.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return h.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Response";
          }
        }
        class z extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              z.prototype.broadcast_clip_id || e.Sg(z.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    start_time: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    end_time: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    video_description: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = e.w0(z.M())), z.sm_mbf;
          }
          toObject(i = !1) {
            return z.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(z.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(z.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new z();
            return z.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(z.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return z.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(z.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Request";
          }
        }
        class v extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return v.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new v();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new v();
            return v.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return v.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Response";
          }
        }
        class x extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              x.prototype.broadcast_clip_id || e.Sg(x.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = e.w0(x.M())), x.sm_mbf;
          }
          toObject(i = !1) {
            return x.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(x.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(x.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new x();
            return x.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(x.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return x.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(x.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Request";
          }
        }
        class P extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              P.prototype.broadcast_clip_id || e.Sg(P.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
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
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    video_id: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    app_id: { n: 4, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    accountid_broadcaster: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    accountid_clipmaker: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    video_description: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    start_time: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    length_milliseconds: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 10,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = e.w0(P.M())), P.sm_mbf;
          }
          toObject(i = !1) {
            return P.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(P.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(P.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new P();
            return P.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(P.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return P.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(P.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Response";
          }
        }
        class H extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              H.prototype.broadcast_permission || e.Sg(H.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    update_token: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    broadcast_delay: {
                      n: 3,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    app_id: { n: 4, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    required_app_id: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 6,
                      d: Mr,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 7,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    steamid: {
                      n: 8,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 10,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 11,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    wordban_list: {
                      n: 12,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = e.w0(H.M())), H.sm_mbf;
          }
          toObject(i = !1) {
            return H.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(H.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(H.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new H();
            return H.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(H.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return H.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(H.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Request";
          }
        }
        class ni extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return ni.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new ni();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new ni();
            return ni.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Response";
          }
        }
        class qr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              qr.prototype.ip || e.Sg(qr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: {
                    ip: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = e.w0(qr.M())), qr.sm_mbf;
          }
          toObject(i = !1) {
            return qr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(qr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(qr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new qr();
            return qr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(qr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(qr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Request";
          }
        }
        class Gr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Gr.prototype.broadcast_permission || e.Sg(Gr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    rtmp_host: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    rtmp_token: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    broadcast_delay: {
                      n: 4,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    app_id: { n: 5, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    required_app_id: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 7,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 8,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    steamid: {
                      n: 9,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 11,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 12,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    wordban_list: {
                      n: 13,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = e.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(i = !1) {
            return Gr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Gr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Gr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Gr();
            return Gr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Gr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Gr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Response";
          }
        }
        class xr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              xr.prototype.row_limit || e.Sg(xr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    row_limit: {
                      n: 1,
                      d: 100,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    start_time: {
                      n: 2,
                      d: 0,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    upload_id: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    steamid: {
                      n: 4,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    session_id: {
                      n: 5,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = e.w0(xr.M())), xr.sm_mbf;
          }
          toObject(i = !1) {
            return xr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(xr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(xr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new xr();
            return xr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(xr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(xr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Request";
          }
        }
        class Fr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Fr.prototype.upload_stats || e.Sg(Fr.M()),
              f.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: { upload_stats: { n: 1, c: C, r: !0, q: !0 } },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = e.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(i = !1) {
            return Fr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Fr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Fr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Fr();
            return Fr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Fr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Fr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response";
          }
        }
        class C extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              C.prototype.upload_result || e.Sg(C.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    upload_result: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    time_stopped: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    seconds_uploaded: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    max_viewers: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    resolution_x: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    avg_bandwidth: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    total_bytes: {
                      n: 8,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    app_id: { n: 9, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    total_unique_viewers: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    total_seconds_watched: {
                      n: 11,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    time_started: {
                      n: 12,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    upload_id: {
                      n: 13,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    local_address: {
                      n: 14,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    remote_address: {
                      n: 15,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    frames_per_second: {
                      n: 16,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    num_representations: {
                      n: 17,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    app_name: {
                      n: 18,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    is_replay: { n: 19, br: e.qM.readBool, bw: e.gp.writeBool },
                    session_id: {
                      n: 20,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = e.w0(C.M())), C.sm_mbf;
          }
          toObject(i = !1) {
            return C.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(C.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(C.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new C();
            return C.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(C.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return C.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(C.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
          }
        }
        class dr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              dr.prototype.upload_id || e.Sg(dr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    upload_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = e.w0(dr.M())), dr.sm_mbf;
          }
          toObject(i = !1) {
            return dr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(dr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(dr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new dr();
            return dr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(dr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(dr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Request";
          }
        }
        class Pr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Pr.prototype.viewer_stats || e.Sg(Pr.M()),
              f.Message.initialize(this, i, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: {
                    viewer_stats: { n: 1, c: kr, r: !0, q: !0 },
                    country_stats: { n: 2, c: Nr, r: !0, q: !0 },
                  },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = e.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(i = !1) {
            return Pr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Pr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Pr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Pr();
            return Pr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Pr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Pr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response";
          }
        }
        class kr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              kr.prototype.time || e.Sg(kr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    time: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    num_viewers: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = e.w0(kr.M())), kr.sm_mbf;
          }
          toObject(i = !1) {
            return kr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(kr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(kr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new kr();
            return kr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(kr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(kr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
          }
        }
        class Nr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Nr.prototype.country_code || e.Sg(Nr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    country_code: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    num_viewers: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = e.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(i = !1) {
            return Nr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Nr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Nr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Nr();
            return Nr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Nr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Nr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
          }
        }
        class Qr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Qr.prototype.webrtc_session_id || e.Sg(Qr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    started: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                    offer: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    resolution_x: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    fps: { n: 6, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = e.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(i = !1) {
            return Qr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Qr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Qr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Qr();
            return Qr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Qr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Qr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Request";
          }
        }
        class zi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return zi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new zi();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new zi();
            return zi.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return zi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              zi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Response";
          }
        }
        class Jr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Jr.prototype.webrtc_session_id || e.Sg(Jr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = e.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(i = !1) {
            return Jr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Jr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Jr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Jr();
            return Jr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Jr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Jr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Request";
          }
        }
        class Tr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Tr.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new Tr();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Tr();
            return Tr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Response";
          }
        }
        class gi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              gi.prototype.broadcaster_steamid || e.Sg(gi.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gi.sm_m ||
                (gi.sm_m = {
                  proto: gi,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              gi.sm_m
            );
          }
          static MBF() {
            return gi.sm_mbf || (gi.sm_mbf = e.w0(gi.M())), gi.sm_mbf;
          }
          toObject(i = !1) {
            return gi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(gi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(gi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new gi();
            return gi.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(gi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(gi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Request";
          }
        }
        class ai extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return ai.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new ai();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new ai();
            return ai.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Response";
          }
        }
        class Ir extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ir.prototype.sdp_mid || e.Sg(Ir.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    sdp_mid: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    sdp_mline_index: {
                      n: 2,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    candidate: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = e.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(i = !1) {
            return Ir.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Ir.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Ir.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Ir();
            return Ir.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Ir.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Ir.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTC_Candidate";
          }
        }
        class Hr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Hr.prototype.webrtc_session_id || e.Sg(Hr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    candidate: { n: 2, c: Ir },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = e.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(i = !1) {
            return Hr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Hr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Hr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Hr();
            return Hr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Hr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Hr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Request";
          }
        }
        class pi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return pi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new pi();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new pi();
            return pi.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return pi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              pi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Response";
          }
        }
        class Rr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Rr.prototype.broadcaster_steamid || e.Sg(Rr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: Ir },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = e.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(i = !1) {
            return Rr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Rr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Rr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Rr();
            return Rr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Rr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Rr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Request";
          }
        }
        class vi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return vi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new vi();
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new vi();
            return vi.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return vi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              vi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Response";
          }
        }
        class Vr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Vr.prototype.broadcaster_steamid || e.Sg(Vr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    candidate_generation: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = e.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(i = !1) {
            return Vr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Vr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Vr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Vr();
            return Vr.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Vr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Vr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Request";
          }
        }
        class Fi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Fi.prototype.candidate_generation || e.Sg(Fi.M()),
              f.Message.initialize(this, i, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fi.sm_m ||
                (Fi.sm_m = {
                  proto: Fi,
                  fields: {
                    candidate_generation: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    candidates: { n: 2, c: Ir, r: !0, q: !0 },
                  },
                }),
              Fi.sm_m
            );
          }
          static MBF() {
            return Fi.sm_mbf || (Fi.sm_mbf = e.w0(Fi.M())), Fi.sm_mbf;
          }
          toObject(i = !1) {
            return Fi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Fi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Fi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Fi();
            return Fi.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Fi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Fi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Fi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Fi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Response";
          }
        }
        class Ii extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ii.prototype.broadcast_session_id || e.Sg(Ii.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ii.sm_m ||
                (Ii.sm_m = {
                  proto: Ii,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Ii.sm_m
            );
          }
          static MBF() {
            return Ii.sm_mbf || (Ii.sm_mbf = e.w0(Ii.M())), Ii.sm_mbf;
          }
          toObject(i = !1) {
            return Ii.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Ii.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Ii.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Ii();
            return Ii.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Ii.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Ii.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Ii.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Ii.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCNeedTURNServer_Notification";
          }
        }
        class Di extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Di.prototype.cellid || e.Sg(Di.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Di.sm_m ||
                (Di.sm_m = {
                  proto: Di,
                  fields: {
                    cellid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                  },
                }),
              Di.sm_m
            );
          }
          static MBF() {
            return Di.sm_mbf || (Di.sm_mbf = e.w0(Di.M())), Di.sm_mbf;
          }
          toObject(i = !1) {
            return Di.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Di.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Di.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Di();
            return Di.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Di.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Di.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Di.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Di.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Request";
          }
        }
        class B extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              B.prototype.turn_server || e.Sg(B.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    turn_server: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = e.w0(B.M())), B.sm_mbf;
          }
          toObject(i = !1) {
            return B.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(B.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(B.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new B();
            return B.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(B.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return B.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(B.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Response";
          }
        }
        class Y extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Y.prototype.broadcast_session_id || e.Sg(Y.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    turn_server: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = e.w0(Y.M())), Y.sm_mbf;
          }
          toObject(i = !1) {
            return Y.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Y.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Y.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Y();
            return Y.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Y.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Y.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCHaveTURNServer_Notification";
          }
        }
        class Wi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Wi.prototype.broadcast_session_id || e.Sg(Wi.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wi.sm_m ||
                (Wi.sm_m = {
                  proto: Wi,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    viewer_steamid: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 4,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Wi.sm_m
            );
          }
          static MBF() {
            return Wi.sm_mbf || (Wi.sm_mbf = e.w0(Wi.M())), Wi.sm_mbf;
          }
          toObject(i = !1) {
            return Wi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Wi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Wi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Wi();
            return Wi.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Wi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Wi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Wi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Wi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStart_Notification";
          }
        }
        class Bi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Bi.prototype.broadcast_session_id || e.Sg(Bi.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bi.sm_m ||
                (Bi.sm_m = {
                  proto: Bi,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              Bi.sm_m
            );
          }
          static MBF() {
            return Bi.sm_mbf || (Bi.sm_mbf = e.w0(Bi.M())), Bi.sm_mbf;
          }
          toObject(i = !1) {
            return Bi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Bi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Bi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Bi();
            return Bi.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Bi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Bi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Bi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Bi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Notification";
          }
        }
        class Ei extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ei.prototype.broadcast_session_id || e.Sg(Ei.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ei.sm_m ||
                (Ei.sm_m = {
                  proto: Ei,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: Ir },
                  },
                }),
              Ei.sm_m
            );
          }
          static MBF() {
            return Ei.sm_mbf || (Ei.sm_mbf = e.w0(Ei.M())), Ei.sm_mbf;
          }
          toObject(i = !1) {
            return Ei.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Ei.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Ei.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (m().BinaryReader)(i),
              d = new Ei();
            return Ei.deserializeBinaryFromReader(d, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Ei.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (m().BinaryWriter)();
            return Ei.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Ei.M(), i, s);
          }
          serializeBase64String() {
            var i = new (m().BinaryWriter)();
            return (
              Ei.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Notification";
          }
        }
        var Ki;
        ((_) => {
          function i(L, J, lr) {
            return L.SendMsg(
              "Broadcast.BeginBroadcastSession#1",
              (0, F.I8)(k, J, lr),
              W,
              { ePrivilege: 1 },
            );
          }
          _.BeginBroadcastSession = i;
          function s(L, J, lr) {
            return L.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, F.I8)(tr, J, lr),
              fr,
              { ePrivilege: 1 },
            );
          }
          _.EndBroadcastSession = s;
          function d(L, J, lr) {
            return L.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, F.I8)(I, J, lr),
              $,
              { ePrivilege: 1 },
            );
          }
          _.StartBroadcastUpload = d;
          function Zi(L, J) {
            return L.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, F.I8)(D, J),
              { ePrivilege: 1 },
            );
          }
          _.NotifyBroadcastUploadStop = Zi;
          function ae(L, J, lr) {
            return L.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, F.I8)(br, J, lr),
              S,
              { ePrivilege: 2 },
            );
          }
          _.WatchBroadcast = ae;
          function we(L, J) {
            return L.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, F.I8)(er, J),
              { ePrivilege: 2 },
            );
          }
          _.HeartbeatBroadcast = we;
          function Hi(L, J) {
            return L.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, F.I8)(ri, J),
              { ePrivilege: 2 },
            );
          }
          _.StopWatchingBroadcast = Hi;
          function Yi(L, J, lr) {
            return L.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, F.I8)(hr, J, lr),
              zr,
              { ePrivilege: 2 },
            );
          }
          _.GetBroadcastStatus = Yi;
          function de(L, J, lr) {
            return L.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, F.I8)(si, J, lr),
              jr,
              { ePrivilege: 2 },
            );
          }
          _.GetBroadcastThumbnail = de;
          function Me(L, J, lr) {
            return L.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, F.I8)(cr, J, lr),
              gr,
              { ePrivilege: 1 },
            );
          }
          _.InviteToBroadcast = Me;
          function ue(L, J, lr) {
            return L.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, F.I8)(or, J, lr),
              mi,
              { ePrivilege: 1 },
            );
          }
          _.SendBroadcastStateToServer = ue;
          function ye(L, J) {
            return L.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, F.I8)(Or, J),
              { ePrivilege: 1 },
            );
          }
          _.NotifyBroadcastSessionHeartbeat = ye;
          function he(L, J, lr) {
            return L.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, F.I8)(G, J, lr),
              Er,
              { ePrivilege: 2 },
            );
          }
          _.GetBroadcastChatInfo = he;
          function ze(L, J, lr) {
            return L.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, F.I8)(Ar, J, lr),
              Dr,
              { ePrivilege: 3 },
            );
          }
          _.PostChatMessage = ze;
          function Ri(L, J, lr) {
            return L.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, F.I8)(di, J, lr),
              Wr,
              { ePrivilege: 1 },
            );
          }
          _.UpdateChatMessageFlair = Ri;
          function je(L, J, lr) {
            return L.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, F.I8)(vr, J, lr),
              li,
              { ePrivilege: 3 },
            );
          }
          _.MuteBroadcastChatUser = je;
          function pe(L, J, lr) {
            return L.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, F.I8)(ci, J, lr),
              Mi,
              { ePrivilege: 3 },
            );
          }
          _.RemoveUserChatText = pe;
          function Xi(L, J, lr) {
            return L.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, F.I8)(sr, J, lr),
              Br,
              { ePrivilege: 1 },
            );
          }
          _.GetBroadcastChatUserNames = Xi;
          function yi(L, J, lr) {
            return L.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, F.I8)(ti, J, lr),
              u,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.StartBuildClip = yi;
          function ki(L, J, lr) {
            return L.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, F.I8)(o, J, lr),
              h,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.GetBuildClipStatus = ki;
          function ve(L, J, lr) {
            return L.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, F.I8)(z, J, lr),
              v,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.SetClipDetails = ve;
          function oi(L, J, lr) {
            return L.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, F.I8)(x, J, lr),
              P,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          _.GetClipDetails = oi;
          function Pi(L, J, lr) {
            return L.SendMsg(
              "Broadcast.SetRTMPInfo#1",
              (0, F.I8)(H, J, lr),
              ni,
              { ePrivilege: 1 },
            );
          }
          _.SetRTMPInfo = Pi;
          function me(L, J, lr) {
            return L.SendMsg(
              "Broadcast.GetRTMPInfo#1",
              (0, F.I8)(qr, J, lr),
              Gr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          _.GetRTMPInfo = me;
          function Oe(L, J) {
            return L.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, F.I8)(Y, J),
              { ePrivilege: 1 },
            );
          }
          _.NotifyWebRTCHaveTURNServer = Oe;
          function xe(L, J, lr) {
            return L.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, F.I8)(Qr, J, lr),
              zi,
              { ePrivilege: 1 },
            );
          }
          _.WebRTCStartResult = xe;
          function Vi(L, J, lr) {
            return L.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, F.I8)(Jr, J, lr),
              Tr,
              { ePrivilege: 1 },
            );
          }
          _.WebRTCStopped = Vi;
          function ce(L, J, lr) {
            return L.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, F.I8)(gi, J, lr),
              ai,
              { ePrivilege: 1 },
            );
          }
          _.WebRTCSetAnswer = ce;
          function Fe(L, J, lr) {
            return L.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, F.I8)(Di, J, lr),
              B,
              { ePrivilege: 1 },
            );
          }
          _.WebRTCLookupTURNServer = Fe;
          function Ni(L, J, lr) {
            return L.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, F.I8)(Hr, J, lr),
              pi,
              { ePrivilege: 1 },
            );
          }
          _.WebRTCAddHostCandidate = Ni;
          function Ie(L, J, lr) {
            return L.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, F.I8)(Rr, J, lr),
              vi,
              { ePrivilege: 1 },
            );
          }
          _.WebRTCAddViewerCandidate = Ie;
          function ge(L, J, lr) {
            return L.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, F.I8)(Vr, J, lr),
              Fi,
              { ePrivilege: 1 },
            );
          }
          _.WebRTCGetHostCandidates = ge;
          function De(L, J, lr) {
            return L.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, F.I8)(xr, J, lr),
              Fr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.GetBroadcastUploadStats = De;
          function We(L, J, lr) {
            return L.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, F.I8)(dr, J, lr),
              Pr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.GetBroadcastViewerStats = We;
        })(Ki || (Ki = {}));
        var le;
        ((_) => {
          (_.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: q,
          }),
            (_.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: wi,
            }),
            (_.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: nr,
            }),
            (_.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: wr,
            }),
            (_.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: pr,
            }),
            (_.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: Ur,
            }),
            (_.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: $r,
            }),
            (_.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: Yr,
            }),
            (_.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: Zr,
            }),
            (_.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: Ii,
            }),
            (_.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: Wi,
            }),
            (_.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: Bi,
            }),
            (_.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: Ei,
            });
        })(le || (le = {}));
      },
      61639: (fi, hi, g) => {
        "use strict";
        g.d(hi, { Mc: () => l });
        var l = {};
        g.r(l),
          g.d(l, {
            Ms: () => U,
            n6: () => bi,
            U6: () => Z,
            kz: () => yr,
            ej: () => K,
            R: () => O,
            mZ: () => y,
            Is: () => Cr,
            B_: () => ir,
            bW: () => j,
            iy: () => Mr,
          });
        var ur = g(80613),
          f = g.n(ur),
          m = g(75245),
          e = g(35038);
        const F = 0,
          Mr = 1,
          Z = 2,
          ir = 3,
          j = 4,
          yr = 5,
          E = 6,
          bi = 7,
          Kr = 8,
          Cr = 9,
          b = 10,
          a = 11,
          t = 12,
          Q = 13,
          Xr = 14,
          mr = 15,
          U = 16,
          y = 17,
          O = 18,
          K = 19;
        function N(fr) {
          return "unknown EProductPageAction ( " + fr + " )";
        }
        function ar(fr) {
          return "unknown EProductViewAction ( " + fr + " )";
        }
        function ii(fr) {
          return "unknown EProductImpressionFromClientType ( " + fr + " )";
        }
        function A(fr) {
          return "unknown ETrackedEmailType ( " + fr + " )";
        }
        function ui(fr) {
          return (
            "unknown EUnifiedProductInteractionStoreItemType ( " + fr + " )"
          );
        }
        function ei(fr) {
          return "unknown EUnifedProductInteractionActions ( " + fr + " )";
        }
        class k extends ur.Message {
          static ImplementsStaticInterface() {}
          constructor(I = null) {
            super(),
              k.prototype.impressions || m.Sg(k.M()),
              ur.Message.initialize(this, I, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: { impressions: { n: 1, c: W, r: !0, q: !0 } },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = m.w0(k.M())), k.sm_mbf;
          }
          toObject(I = !1) {
            return k.toObject(I, this);
          }
          static toObject(I, $) {
            return m.BT(k.M(), I, $);
          }
          static fromObject(I) {
            return m.Uq(k.M(), I);
          }
          static deserializeBinary(I) {
            let $ = new (f().BinaryReader)(I),
              nr = new k();
            return k.deserializeBinaryFromReader(nr, $);
          }
          static deserializeBinaryFromReader(I, $) {
            return m.zj(k.MBF(), I, $);
          }
          serializeBinary() {
            var I = new (f().BinaryWriter)();
            return k.serializeBinaryToWriter(this, I), I.getResultBuffer();
          }
          static serializeBinaryToWriter(I, $) {
            m.i0(k.M(), I, $);
          }
          serializeBase64String() {
            var I = new (f().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, I), I.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification";
          }
        }
        class W extends ur.Message {
          static ImplementsStaticInterface() {}
          constructor(I = null) {
            super(),
              W.prototype.type || m.Sg(W.M()),
              ur.Message.initialize(this, I, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                    appid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    num_impressions: {
                      n: 3,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = m.w0(W.M())), W.sm_mbf;
          }
          toObject(I = !1) {
            return W.toObject(I, this);
          }
          static toObject(I, $) {
            return m.BT(W.M(), I, $);
          }
          static fromObject(I) {
            return m.Uq(W.M(), I);
          }
          static deserializeBinary(I) {
            let $ = new (f().BinaryReader)(I),
              nr = new W();
            return W.deserializeBinaryFromReader(nr, $);
          }
          static deserializeBinaryFromReader(I, $) {
            return m.zj(W.MBF(), I, $);
          }
          serializeBinary() {
            var I = new (f().BinaryWriter)();
            return W.serializeBinaryToWriter(this, I), I.getResultBuffer();
          }
          static serializeBinaryToWriter(I, $) {
            m.i0(W.M(), I, $);
          }
          serializeBase64String() {
            var I = new (f().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, I), I.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification_Impression";
          }
        }
        var tr;
        ((fr) => {
          function I($, nr) {
            return $.SendNotification(
              "ExperimentService.ReportProductImpressionsFromClient#1",
              (0, e.I8)(k, nr),
              { ePrivilege: 1 },
            );
          }
          fr.ReportProductImpressionsFromClient = I;
        })(tr || (tr = {}));
      },
      95414: (fi, hi, g) => {
        "use strict";
        g.d(hi, { j: () => E, u: () => bi });
        var l = g(7850),
          ur = g(90626),
          f = g(24660),
          m = g(83482),
          e = g(72865),
          F = g(77200),
          Mr = g(53113),
          Z = g(68094),
          ir = g(72609),
          j = g(3166);
        function yr(Kr) {
          if (Kr) {
            if ("appid" in Kr) return "app";
            if ("bundleid" in Kr) return "bundle";
            if ("packageid" in Kr) return "sub";
          }
        }
        function E(Kr) {
          const {
              id: Cr,
              hoverClassName: b,
              fnGetIDOverride: a,
              fnHoverState: t,
              disableScreenshots: Q,
              children: Xr,
            } = Kr,
            mr = ur.useRef(null),
            U = ur.useCallback(
              (O) => {
                const K = yr(Cr);
                K &&
                  (t && t(!0),
                  window.GameHover &&
                    (mr.current &&
                      Q &&
                      (mr.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(a ? a() : mr.current, O, "global_hover", {
                      type: K,
                      id: (0, Z.G$)(Cr).id,
                      v6: 1,
                    })));
              },
              [t, a, Q, Cr],
            ),
            y = ur.useCallback(
              (O) => {
                yr(Cr) &&
                  (t && O.relatedTarget && t(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      a ? a() : mr.current,
                      O,
                      "global_hover",
                    ));
              },
              [Cr, t, a],
            );
          return (0, l.jsx)("div", {
            ref: mr,
            className: b,
            onMouseEnter: U,
            onMouseLeave: y,
            onFocus: U,
            onBlur: y,
            children: Xr,
          });
        }
        function bi(Kr) {
          const {
              id: Cr,
              strExtraParams: b,
              fnOnClickOverride: a,
              strOverrideURL: t,
            } = Kr,
            Q = (0, e.n9)(),
            Xr = (0, F.w)(),
            mr = (0, Mr.NT)(
              t ||
                (Cr && "creatorid" in Cr
                  ? (0, m.It)(
                      `${ir.TS.STORE_BASE_URL}curator/${((0, Z.G$))(Cr).id}${b ? `?${b}` : ""}`,
                      Q,
                      Xr,
                    )
                  : (0, m.It)(
                      `${ir.TS.STORE_BASE_URL}${yr(Cr)}/${((0, Z.G$))(Cr).id}${b ? `?${b}` : ""}`,
                      Q,
                      Xr,
                    )),
            );
          return (0, l.jsx)(E, {
            ...Kr,
            children: (0, l.jsx)(f.Ii, {
              className: Kr.className,
              href: a ? void 0 : mr,
              target: ir.TS.IN_CLIENT || a ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: a,
              children: Kr.children,
            }),
          });
        }
      },
      11587: (fi, hi, g) => {
        "use strict";
        g.d(hi, { Qg: () => b, h3: () => Cr });
        var l = g(72609),
          ur = g(80902),
          f = g(75233),
          m = g(51614),
          e = g(90626),
          F = g(72604);
        const Mr = "saleaction/giveawayregistration",
          Z = "saleaction/creategiveawayregistration";
        async function ir(a) {
          const t = l.TS.STORE_BASE_URL + Mr + "?name=" + encodeURIComponent(a),
            Q = await fetch(t, { credentials: "include" });
          return await yr("GetUserGiveawayRegistration", a, t, Q);
        }
        async function j(a) {
          const t = l.TS.STORE_BASE_URL + Z,
            Q = await fetch(t, {
              method: "POST",
              credentials: "include",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ name: a }),
            });
          return await yr("UpdateUserGiveawayRegistration", a, t, Q);
        }
        async function yr(a, t, Q, Xr) {
          if (!Xr.ok) throw new Error(Q + " answered " + Xr.status);
          const mr = await Xr.json();
          if (mr?.success == F.R && mr.registration) return mr.registration;
          throw new Error(a + " on " + t + " answered " + mr?.success);
        }
        const E = { registered: !1 };
        function bi(a, t) {
          return ["sale", "giveawayregistration", a, t];
        }
        function Kr(a, t) {
          return {
            queryKey: bi(a, t),
            queryFn: () => ir(a),
            enabled: !!a,
            retry: !1,
          };
        }
        function Cr(a) {
          const { data: t, isError: Q } = (0, ur.I)(Kr(a, l.iA.accountid));
          return Q ? E : t;
        }
        function b() {
          const a = (0, f.jE)(),
            { mutateAsync: t } = (0, m.n)({
              mutationFn: j,
              onSuccess: (Xr, mr) => a.setQueryData(bi(mr, l.iA.accountid), Xr),
            });
          return {
            fnCreateRegistration: (0, e.useCallback)(
              async (Xr) => {
                try {
                  return await t(Xr);
                } catch (mr) {
                  return (
                    console.error(
                      "Registering for giveaway " + Xr + " failed",
                      mr,
                    ),
                    E
                  );
                }
              },
              [t],
            ),
          };
        }
      },
      90405: (fi, hi, g) => {
        "use strict";
        g.d(hi, { K: () => Mr, _: () => F });
        var l = g(7850),
          ur = g(90626),
          f = g(81944),
          m = g(19298);
        const e = ur.createContext({ enabled: !0 });
        function F(Z) {
          const { enabled: ir, children: j } = Z,
            yr = ur.useMemo(() => ({ enabled: ir }), [ir]);
          return (0, l.jsx)(e.Provider, { value: yr, children: j });
        }
        function Mr(Z) {
          const {
              placeholderWidth: ir,
              placeholderHeight: j,
              holdGamepadFocus: yr = !1,
              onRender: E,
              style: bi,
              mode: Kr = "JustLoad",
              children: Cr,
              ...b
            } = Z,
            a = ur.useContext(e),
            [t, Q] = ur.useState(() => ({
              bRenderChildren: !a.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            Xr = ur.useRef(null),
            mr = Kr === "LoadAndUnload" && a.enabled,
            U = ur.useCallback(
              (N) => {
                Q((ar) => {
                  if (ar.bRenderChildren === N || (ar.bRenderChildren && !mr))
                    return ar;
                  let ii = 0,
                    A = 0;
                  if (Xr.current) {
                    const ui = Xr.current.getBoundingClientRect();
                    ui && ((ii = ui.width), (A = ui.height));
                  }
                  return (
                    N && E && E(),
                    {
                      bRenderChildren: N,
                      nPrevRenderWidth: ii,
                      nPrevRenderHeight: A,
                    }
                  );
                });
              },
              [mr, E],
            );
          ur.useEffect(() => {
            a.enabled || U(!0);
          }, [a.enabled, U]);
          let y = bi;
          if (!t.bRenderChildren) {
            const N = t.nPrevRenderWidth || ir,
              ar = t.nPrevRenderHeight || j;
            (ar !== void 0 || N !== void 0) &&
              (y = { ...bi, minHeight: ar, minWidth: N });
          }
          const O = mr ? "repeated" : "once";
          let K = (0, l.jsx)(f.J, {
            containerRef: Xr,
            style: y,
            ...b,
            onVisibilityChange: U,
            trigger: O,
            children: t.bRenderChildren && Cr,
          });
          return (
            yr &&
              (K = (0, l.jsx)(m.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: K,
              })),
            K
          );
        }
      },
      9032: (fi, hi, g) => {
        "use strict";
        g.d(hi, { uj: () => F, fB: () => Mr });
        var l = g(80902),
          ur = g(72604),
          f = g(72609);
        async function m(Z, ir) {
          const j = f.TS.STORE_BASE_URL + "video/details/" + Z + "/0",
            yr = await fetch(j, { credentials: "include", signal: ir });
          if (!yr.ok) throw new Error(j + " answered " + yr.status);
          const E = await yr.json();
          if (E?.success != ur.R && E?.success != "ready")
            throw new Error(
              "video/details on " + Z + " answered " + E?.success,
            );
          return { appid: Z, video_url: E.video_url, bookmark: E.bookmark };
        }
        function e(Z) {
          return ["video", "vod", Z];
        }
        function F(Z) {
          return {
            queryKey: e(Z),
            queryFn: ({ signal: ir }) => m(Z, ir),
            retry: !1,
          };
        }
        function Mr(Z) {
          const { data: ir, isPending: j } = (0, l.I)(F(Z));
          return { vodInfo: ir, bLoading: j };
        }
      },
      2422: (fi, hi, g) => {
        "use strict";
        g.r(hi),
          g.d(hi, {
            BroadcastEmbeddablePopoutHeader: () => Ze,
            default: () => Ut,
          });
        var l = g(7850),
          ur = g(41735),
          f = g.n(ur),
          m = g(75844),
          e = g(65946),
          F = g(90626),
          Mr = g(14947),
          Z = g(16346),
          ir = g(90711),
          j = g(90828),
          yr = g(72604),
          E = g(35038),
          bi = g(84110),
          Kr = g(3685),
          Cr = g(76559),
          b = g(80613),
          a = g.n(b),
          t = g(75245);
        function Q(w) {
          return "unknown EBroadcastImageType ( " + w + " )";
        }
        function Xr(w) {
          return "unknown EGetGamesAlgorithm ( " + w + " )";
        }
        function mr(w) {
          return "unknown EGetChannelsAlgorithm ( " + w + " )";
        }
        function U(w) {
          return "unknown ESteamTVContentTemplate ( " + w + " )";
        }
        class y extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.unique_name || t.Sg(y.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = t.w0(y.M())), y.sm_mbf;
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(y.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new y();
            return y.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(y.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(y.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        }
        class O extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.broadcast_channel_id || t.Sg(O.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = t.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(O.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new O();
            return O.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(O.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(O.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        }
        class K extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.unique_name || t.Sg(K.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(K.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new K();
            return K.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(K.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(K.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        }
        class N extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.broadcast_channel_id || t.Sg(N.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = t.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(N.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new N();
            return N.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(N.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(N.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        }
        class ar extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.broadcast_channel_id || t.Sg(ar.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    language: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    headline: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    summary: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    avatar_hash: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rules: { n: 8, br: t.qM.readString, bw: t.gp.writeString },
                    panels: { n: 9, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = t.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(ar.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new ar();
            return ar.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(ar.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(ar.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Request";
          }
        }
        class ii extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ii.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new ii();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new ii();
            return ii.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        class A extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.broadcast_channel_id || t.Sg(A.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = t.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(A.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new A();
            return A.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(A.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(A.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        }
        class ui extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ui.prototype.unique_name || t.Sg(ui.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ui.sm_m ||
                (ui.sm_m = {
                  proto: ui,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    owner_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    language: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    headline: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    summary: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rules: { n: 8, br: t.qM.readString, bw: t.gp.writeString },
                    panels: { n: 9, br: t.qM.readString, bw: t.gp.writeString },
                    is_partnered: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              ui.sm_m
            );
          }
          static MBF() {
            return ui.sm_mbf || (ui.sm_mbf = t.w0(ui.M())), ui.sm_mbf;
          }
          toObject(r = !1) {
            return ui.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(ui.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(ui.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new ui();
            return ui.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(ui.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(ui.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        }
        class ei extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ei.prototype.broadcast_channel_id || t.Sg(ei.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ei.sm_m ||
                (ei.sm_m = {
                  proto: ei,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    image_type: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    image_index: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    image_width: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    image_height: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    file_size: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    file_extension: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    file_hash: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    undo: { n: 9, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              ei.sm_m
            );
          }
          static MBF() {
            return ei.sm_mbf || (ei.sm_mbf = t.w0(ei.M())), ei.sm_mbf;
          }
          toObject(r = !1) {
            return ei.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(ei.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(ei.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new ei();
            return ei.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(ei.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ei.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(ei.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ei.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Request";
          }
        }
        class k extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.replace_image_hash || t.Sg(k.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    replace_image_hash: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = t.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(k.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new k();
            return k.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(k.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(k.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Response";
          }
        }
        class W extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.broadcast_channel_id || t.Sg(W.M()),
              b.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    image_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = t.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(W.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new W();
            return W.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(W.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(W.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Request";
          }
        }
        class tr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.images || t.Sg(tr.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: { images: { n: 1, c: fr, r: !0, q: !0 } },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = t.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(tr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new tr();
            return tr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(tr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(tr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response";
          }
        }
        class fr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.image_type || t.Sg(fr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    image_type: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    image_path: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    image_index: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = t.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(fr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new fr();
            return fr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(fr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(fr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response_Images";
          }
        }
        class I extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.broadcast_channel_id || t.Sg(I.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = t.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(I.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new I();
            return I.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(I.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(I.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Request";
          }
        }
        class $ extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.links || t.Sg($.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: { links: { n: 1, c: nr, r: !0, q: !0 } },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT($.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new $();
            return $.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj($.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0($.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response";
          }
        }
        class nr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.link_index || t.Sg(nr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    link_index: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    url: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    link_description: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    left: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    top: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    width: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    height: { n: 7, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = t.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(nr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new nr();
            return nr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(nr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(nr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
          }
        }
        class hr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.broadcast_channel_id || t.Sg(hr.M()),
              b.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    links: { n: 2, c: zr, r: !0, q: !0 },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = t.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(hr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new hr();
            return hr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(hr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(hr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
          }
        }
        class zr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.link_index || t.Sg(zr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    link_index: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    url: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    link_description: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    left: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    top: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    width: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    height: { n: 7, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = t.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(zr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new zr();
            return zr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(zr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(zr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
          }
        }
        class si extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return si.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new si();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new si();
            return si.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return si.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
          }
        }
        class jr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.broadcast_channel_id || t.Sg(jr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = t.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(jr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new jr();
            return jr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(jr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(jr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Request";
          }
        }
        class br extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.is_live || t.Sg(br.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    is_live: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_disabled: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    appid: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    viewers: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    views: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    broadcaster_steamid: {
                      n: 6,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subscribers: {
                      n: 9,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    unique_name: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_session_id: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = t.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(br.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new br();
            return br.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(br.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(br.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Response";
          }
        }
        class S extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.broadcast_channel_id || t.Sg(S.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    name: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    appid: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    viewers: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    views: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    headline: {
                      n: 9,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    avatar_url: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcaster_steamid: {
                      n: 11,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    subscribers: {
                      n: 12,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    background_url: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_featured: {
                      n: 14,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_disabled: {
                      n: 15,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_live: { n: 16, br: t.qM.readBool, bw: t.gp.writeBool },
                    language: {
                      n: 17,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    reports: {
                      n: 18,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_partnered: {
                      n: 19,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = t.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(S.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new S();
            return S.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(S.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(S.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "GetBroadcastChannelEntry";
          }
        }
        class Ui extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ui.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new Ui();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Ui();
            return Ui.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Request";
          }
        }
        class er extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.results || t.Sg(er.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: { results: { n: 1, c: S, r: !0, q: !0 } },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = t.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(er.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new er();
            return er.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(er.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(er.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Response";
          }
        }
        class ri extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ri.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new ri();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new ri();
            return ri.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Request";
          }
        }
        class cr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.results || t.Sg(cr.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: { results: { n: 1, c: S, r: !0, q: !0 } },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = t.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(cr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new cr();
            return cr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(cr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(cr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        }
        class gr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.broadcast_channel_id || t.Sg(gr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    undo: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = t.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(gr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new gr();
            return gr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(gr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(gr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Request";
          }
        }
        class or extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.is_followed || t.Sg(or.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = t.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(or.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new or();
            return or.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(or.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(or.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Response";
          }
        }
        class mi extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mi.prototype.broadcast_channel_id || t.Sg(mi.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mi.sm_m ||
                (mi.sm_m = {
                  proto: mi,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              mi.sm_m
            );
          }
          static MBF() {
            return mi.sm_mbf || (mi.sm_mbf = t.w0(mi.M())), mi.sm_mbf;
          }
          toObject(r = !1) {
            return mi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(mi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(mi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new mi();
            return mi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(mi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(mi.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Request";
          }
        }
        class q extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.is_subscribed || t.Sg(q.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    is_subscribed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = t.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(q.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new q();
            return q.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(q.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(q.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Response";
          }
        }
        class Oi extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Oi.prototype.broadcast_channel_id || t.Sg(Oi.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oi.sm_m ||
                (Oi.sm_m = {
                  proto: Oi,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    reason: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Oi.sm_m
            );
          }
          static MBF() {
            return Oi.sm_mbf || (Oi.sm_mbf = t.w0(Oi.M())), Oi.sm_mbf;
          }
          toObject(r = !1) {
            return Oi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Oi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Oi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Oi();
            return Oi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Oi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Oi.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Request";
          }
        }
        class wi extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return wi.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new wi();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new wi();
            return wi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return wi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              wi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        class wr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.broadcast_channel_id || t.Sg(wr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = t.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(wr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new wr();
            return wr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(wr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(wr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        }
        class pr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.is_followed || t.Sg(pr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_subscribed: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = t.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(pr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new pr();
            return pr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(pr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(pr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        }
        class $r extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.appid || t.Sg($r.M()),
              b.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    image: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    viewers: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channels: { n: 5, c: S, r: !0, q: !0 },
                    release_date: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    developer: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    publisher: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = t.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT($r.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new $r();
            return $r.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj($r.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0($r.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Game";
          }
        }
        class Yr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.appid || t.Sg(Yr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    algorithm: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    count: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = t.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Yr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Yr();
            return Yr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Yr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Yr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Request";
          }
        }
        class Zr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.results || t.Sg(Zr.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: { results: { n: 1, c: $r, r: !0, q: !0 } },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = t.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Zr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Zr();
            return Zr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Zr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Zr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Response";
          }
        }
        class D extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.algorithm || t.Sg(D.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    algorithm: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    count: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    appid: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(D.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new D();
            return D.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(D.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(D.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Request";
          }
        }
        class Ur extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.results || t.Sg(Ur.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: { results: { n: 1, c: S, r: !0, q: !0 } },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = t.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Ur.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Ur();
            return Ur.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Ur.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Ur.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Response";
          }
        }
        class Or extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.broadcast_channel_id || t.Sg(Or.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    broadcast_channel_id: {
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
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Or.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Or();
            return Or.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Or.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Or.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        }
        class G extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.broadcasters || t.Sg(G.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: { broadcasters: { n: 1, c: Er, r: !0, q: !0 } },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(G.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new G();
            return G.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(G.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(G.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
          }
        }
        class Er extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.steamid || t.Sg(Er.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    rtmp_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = t.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Er.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Er();
            return Er.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Er.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Er.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        }
        class Ar extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ar.prototype.issuer_steamid || t.Sg(Ar.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: {
                    issuer_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    time_expires: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    permanent: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    name: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = t.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(r = !1) {
            return Ar.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Ar.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Ar.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Ar();
            return Ar.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Ar.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Ar.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatBan";
          }
        }
        class Dr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.broadcast_channel_id || t.Sg(Dr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    duration: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permanent: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    undo: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = t.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Dr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Dr();
            return Dr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Dr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Dr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Request";
          }
        }
        class di extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return di.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new di();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new di();
            return di.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return di.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              di.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Response";
          }
        }
        class Wr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.broadcast_channel_id || t.Sg(Wr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = t.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Wr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Wr();
            return Wr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Wr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Wr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Request";
          }
        }
        class vr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vr.prototype.results || t.Sg(vr.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: { results: { n: 1, c: Ar, r: !0, q: !0 } },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = t.w0(vr.M())), vr.sm_mbf;
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(vr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new vr();
            return vr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(vr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(vr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Response";
          }
        }
        class li extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              li.prototype.broadcast_channel_id || t.Sg(li.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              li.sm_m ||
                (li.sm_m = {
                  proto: li,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    moderator_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    undo: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              li.sm_m
            );
          }
          static MBF() {
            return li.sm_mbf || (li.sm_mbf = t.w0(li.M())), li.sm_mbf;
          }
          toObject(r = !1) {
            return li.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(li.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(li.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new li();
            return li.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(li.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return li.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(li.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Request";
          }
        }
        class ci extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ci.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new ci();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new ci();
            return ci.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        class Mi extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mi.prototype.broadcast_channel_id || t.Sg(Mi.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mi.sm_m ||
                (Mi.sm_m = {
                  proto: Mi,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Mi.sm_m
            );
          }
          static MBF() {
            return Mi.sm_mbf || (Mi.sm_mbf = t.w0(Mi.M())), Mi.sm_mbf;
          }
          toObject(r = !1) {
            return Mi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Mi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Mi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Mi();
            return Mi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Mi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Mi.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Request";
          }
        }
        class sr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.steamid || t.Sg(sr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = t.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(sr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new sr();
            return sr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(sr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(sr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatModerator";
          }
        }
        class Br extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.results || t.Sg(Br.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: { results: { n: 1, c: sr, r: !0, q: !0 } },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = t.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Br.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Br();
            return Br.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Br.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Br.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Response";
          }
        }
        class Lr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.broadcast_channel_id || t.Sg(Lr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    word: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    undo: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = t.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Lr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Lr();
            return Lr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Lr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Lr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Request";
          }
        }
        class ti extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ti.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new ti();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new ti();
            return ti.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ti.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ti.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Response";
          }
        }
        class u extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.broadcast_channel_id || t.Sg(u.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = t.w0(u.M())), u.sm_mbf;
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(u.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new u();
            return u.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(u.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(u.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Request";
          }
        }
        class o extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.results || t.Sg(o.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    results: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = t.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(o.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new o();
            return o.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(o.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(o.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Response";
          }
        }
        class h extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.broadcast_channel_id || t.Sg(h.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = t.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(h.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new h();
            return h.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(h.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(h.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Request";
          }
        }
        class z extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.chat_id || t.Sg(z.M()),
              b.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint64String,
                      pbr: t.qM.readPackedUint64String,
                      bw: t.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = t.w0(z.M())), z.sm_mbf;
          }
          toObject(r = !1) {
            return z.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(z.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new z();
            return z.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(z.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(z.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Response";
          }
        }
        class v extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.term || t.Sg(v.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    term: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = t.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(v.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new v();
            return v.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(v.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(v.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Request";
          }
        }
        class x extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.results || t.Sg(x.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: { results: { n: 1, c: S, r: !0, q: !0 } },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = t.w0(x.M())), x.sm_mbf;
          }
          toObject(r = !1) {
            return x.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(x.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new x();
            return x.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(x.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(x.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Response";
          }
        }
        class P extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new P();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new P();
            return P.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Request";
          }
        }
        class H extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.stream_live_email || t.Sg(H.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(H.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new H();
            return H.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(H.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(H.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Response";
          }
        }
        class ni extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ni.prototype.stream_live_email || t.Sg(ni.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ni.sm_m ||
                (ni.sm_m = {
                  proto: ni,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              ni.sm_m
            );
          }
          static MBF() {
            return ni.sm_mbf || (ni.sm_mbf = t.w0(ni.M())), ni.sm_mbf;
          }
          toObject(r = !1) {
            return ni.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(ni.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(ni.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new ni();
            return ni.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(ni.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(ni.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Request";
          }
        }
        class qr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return qr.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new qr();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new qr();
            return qr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Response";
          }
        }
        class Gr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new Gr();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Gr();
            return Gr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Request";
          }
        }
        class xr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.results || t.Sg(xr.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: { results: { n: 1, c: S, r: !0, q: !0 } },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = t.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(xr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new xr();
            return xr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(xr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(xr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Response";
          }
        }
        class Fr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.broadcasts || t.Sg(Fr.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: { broadcasts: { n: 1, c: S, r: !0, q: !0 } },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = t.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Fr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Fr();
            return Fr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Fr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Fr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Takeover";
          }
        }
        class C extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.broadcasts || t.Sg(C.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    broadcasts: { n: 1, c: S, r: !0, q: !0 },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    title: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = t.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(C.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new C();
            return C.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(C.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(C.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_SingleGame";
          }
        }
        class dr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.appid || t.Sg(dr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    game_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast: { n: 3, c: S },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = t.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(dr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new dr();
            return dr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(dr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(dr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "GameListEntry";
          }
        }
        class Pr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.entries || t.Sg(Pr.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: {
                    entries: { n: 1, c: dr, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = t.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Pr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Pr();
            return Pr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Pr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Pr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_GameList";
          }
        }
        class kr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.broadcasts || t.Sg(kr.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    broadcasts: { n: 1, c: S, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = t.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(kr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new kr();
            return kr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(kr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(kr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_QuickExplore";
          }
        }
        class Nr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.broadcasts || t.Sg(Nr.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    broadcasts: { n: 1, c: S, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = t.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Nr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Nr();
            return Nr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Nr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Nr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_ConveyorBelt";
          }
        }
        class Qr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.broadcast || t.Sg(Qr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    broadcast: { n: 1, c: S },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    chat_group_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = t.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Qr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Qr();
            return Qr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Qr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Qr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        }
        class zi extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zi.prototype.broadcast || t.Sg(zi.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zi.sm_m ||
                (zi.sm_m = {
                  proto: zi,
                  fields: {
                    broadcast: { n: 1, c: S },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              zi.sm_m
            );
          }
          static MBF() {
            return zi.sm_mbf || (zi.sm_mbf = t.w0(zi.M())), zi.sm_mbf;
          }
          toObject(r = !1) {
            return zi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(zi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(zi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new zi();
            return zi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(zi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(zi.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              zi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Developer";
          }
        }
        class Jr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.title || t.Sg(Jr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    title: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = t.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Jr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Jr();
            return Jr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Jr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Jr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Event";
          }
        }
        class Tr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.template_type || t.Sg(Tr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    template_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    takeover: { n: 2, c: Fr },
                    single_game: { n: 3, c: C },
                    game_list: { n: 4, c: Pr },
                    quick_explore: { n: 5, c: kr },
                    conveyor_belt: { n: 6, c: Nr },
                    watch_party: { n: 7, c: Qr },
                    developer: { n: 8, c: zi },
                    event: { n: 9, c: Jr },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = t.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Tr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Tr();
            return Tr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Tr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Tr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageContentRow";
          }
        }
        class gi extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return gi.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new gi();
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new gi();
            return gi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        class ai extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ai.prototype.rows || t.Sg(ai.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ai.sm_m ||
                (ai.sm_m = {
                  proto: ai,
                  fields: { rows: { n: 1, c: Tr, r: !0, q: !0 } },
                }),
              ai.sm_m
            );
          }
          static MBF() {
            return ai.sm_mbf || (ai.sm_mbf = t.w0(ai.M())), ai.sm_mbf;
          }
          toObject(r = !1) {
            return ai.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(ai.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(ai.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new ai();
            return ai.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(ai.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(ai.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Response";
          }
        }
        class Ir extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.broadcast_channel_id || t.Sg(Ir.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = t.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Ir.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Ir();
            return Ir.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Ir.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Ir.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Request";
          }
        }
        class Hr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.broadcast_clip_id || t.Sg(Hr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    broadcaster_steamid: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    creator_steamid: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    video_description: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    live_time: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    length_ms: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 9,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = t.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Hr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Hr();
            return Hr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Hr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Hr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_BroadcastClipInfo";
          }
        }
        class pi extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pi.prototype.clips || t.Sg(pi.M()),
              b.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pi.sm_m ||
                (pi.sm_m = {
                  proto: pi,
                  fields: {
                    clips: { n: 1, c: Hr, r: !0, q: !0 },
                    thumbnail_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              pi.sm_m
            );
          }
          static MBF() {
            return pi.sm_mbf || (pi.sm_mbf = t.w0(pi.M())), pi.sm_mbf;
          }
          toObject(r = !1) {
            return pi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(pi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(pi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new pi();
            return pi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(pi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return pi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(pi.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              pi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Response";
          }
        }
        class Rr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rr.prototype.cheer_type || t.Sg(Rr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    cheer_type: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    cheer_amount: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = t.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Rr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Rr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Rr();
            return Rr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Rr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Rr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        }
        class vi extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vi.prototype.app_id || t.Sg(vi.M()),
              b.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vi.sm_m ||
                (vi.sm_m = {
                  proto: vi,
                  fields: {
                    app_id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    cheer_target_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    cheers: { n: 3, c: Rr, r: !0, q: !0 },
                  },
                }),
              vi.sm_m
            );
          }
          static MBF() {
            return vi.sm_mbf || (vi.sm_mbf = t.w0(vi.M())), vi.sm_mbf;
          }
          toObject(r = !1) {
            return vi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(vi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(vi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new vi();
            return vi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(vi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return vi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(vi.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              vi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Request";
          }
        }
        class Vr extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.aggregation_delay_ms || t.Sg(Vr.M()),
              b.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    aggregation_delay_ms: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = t.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Vr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (a().BinaryReader)(r),
              c = new Vr();
            return Vr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Vr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Vr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Response";
          }
        }
        var Fi;
        ((w) => {
          function r(T, R, V) {
            return T.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, E.I8)(y, R, V),
              O,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.CreateBroadcastChannel = r;
          function n(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, E.I8)(K, R, V),
              N,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelID = n;
          function c(T, R, V) {
            return T.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, E.I8)(ar, R, V),
              ii,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.SetBroadcastChannelProfile = c;
          function M(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, E.I8)(A, R, V),
              ui,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelProfile = M;
          function p(T, R, V) {
            return T.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, E.I8)(ei, R, V),
              k,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.SetBroadcastChannelImage = p;
          function X(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, E.I8)(W, R, V),
              tr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelImages = X;
          function Sr(T, R, V) {
            return T.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, E.I8)(hr, R, V),
              si,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.SetBroadcastChannelLinkRegions = Sr;
          function _r(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, E.I8)(I, R, V),
              $,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelLinks = _r;
          function ji(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, E.I8)(Or, R, V),
              G,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetBroadcastChannelBroadcasters = ji;
          function Ai(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, E.I8)(Ui, R, V),
              er,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetFollowedChannels = Ai;
          function $i(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, E.I8)(ri, R, V),
              cr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetSubscribedChannels = $i;
          function Li(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, E.I8)(jr, R, V),
              br,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelStatus = Li;
          function qi(T, R, V) {
            return T.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, E.I8)(gr, R, V),
              or,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.FollowBroadcastChannel = qi;
          function ee(T, R, V) {
            return T.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, E.I8)(mi, R, V),
              q,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.SubscribeBroadcastChannel = ee;
          function $t(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, E.I8)(Ir, R, V),
              pi,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelClips = $t;
          function Yt(T, R, V) {
            return T.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, E.I8)(Oi, R, V),
              wi,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.ReportBroadcastChannel = Yt;
          function Zt(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, E.I8)(wr, R, V),
              pr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetBroadcastChannelInteraction = Zt;
          function Qt(T, R, V) {
            return T.SendMsg("SteamTV.GetGames#1", (0, E.I8)(Yr, R, V), Zr, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          w.GetGames = Qt;
          function Jt(T, R, V) {
            return T.SendMsg("SteamTV.GetChannels#1", (0, E.I8)(D, R, V), Ur, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          w.GetChannels = Jt;
          function Ht(T, R, V) {
            return T.SendMsg("SteamTV.AddChatBan#1", (0, E.I8)(Dr, R, V), di, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          w.AddChatBan = Ht;
          function St(T, R, V) {
            return T.SendMsg("SteamTV.GetChatBans#1", (0, E.I8)(Wr, R, V), vr, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          w.GetChatBans = St;
          function qt(T, R, V) {
            return T.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, E.I8)(li, R, V),
              ci,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.AddChatModerator = qt;
          function Gt(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, E.I8)(Mi, R, V),
              Br,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetChatModerators = Gt;
          function Tt(T, R, V) {
            return T.SendMsg("SteamTV.AddWordBan#1", (0, E.I8)(Lr, R, V), ti, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          w.AddWordBan = Tt;
          function Rt(T, R, V) {
            return T.SendMsg("SteamTV.GetWordBans#1", (0, E.I8)(u, R, V), o, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          w.GetWordBans = Rt;
          function Vt(T, R, V) {
            return T.SendMsg("SteamTV.JoinChat#1", (0, E.I8)(h, R, V), z, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          w.JoinChat = Vt;
          function Ct(T, R, V) {
            return T.SendMsg("SteamTV.Search#1", (0, E.I8)(v, R, V), x, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          w.Search = Ct;
          function _t(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, E.I8)(P, R, V),
              H,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetSteamTVUserSettings = _t;
          function rn(T, R, V) {
            return T.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, E.I8)(ni, R, V),
              qr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.SetSteamTVUserSettings = rn;
          function en(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, E.I8)(Gr, R, V),
              xr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetMyBroadcastChannels = en;
          function tn(T, R, V) {
            return T.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, E.I8)(gi, R, V),
              ai,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetHomePageContents = tn;
          function nn(T, R, V) {
            return T.SendMsg("SteamTV.AppCheer#1", (0, E.I8)(vi, R, V), Vr, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          w.AppCheer = nn;
        })(Fi || (Fi = {}));
        var Ii = g(27066),
          Di = g(8323),
          B = g(18210),
          Y = g(3166),
          Wi = g(24544),
          Bi = Object.defineProperty,
          Ei = Object.getOwnPropertyDescriptor,
          Ki = (w, r, n, c) => {
            for (
              var M = c > 1 ? void 0 : c ? Ei(r, n) : r, p = w.length - 1, X;
              p >= 0;
              p--
            )
              (X = w[p]) && (M = (c ? X(r, n, M) : X(M)) || M);
            return c && M && Bi(r, n, M), M;
          };
        const le = 4,
          _ = 500,
          i = 10,
          s = class se {
            m_mapChats = new Map();
            GetChat(r, n) {
              return this.m_mapChats.get(r) || this.m_mapChats.get(n);
            }
            GetOrCreateChat(r, n) {
              let c = this.GetChat(r, n);
              return c || ((c = new Zi()), this.m_mapChats.set(r || n, c)), c;
            }
            static s_Singleton;
            static Get() {
              return (
                se.s_Singleton || (se.s_Singleton = new se()), se.s_Singleton
              );
            }
            constructor() {
              (0, Mr.Gn)(this);
            }
          };
        Ki([Mr.sH], s.prototype, "m_mapChats", 2);
        let d = s;
        class Zi {
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
            (0, Mr.Gn)(this),
              (this.m_webAPIInterface = new Kr.D(
                Y.TS.WEBAPI_BASE_URL,
                Y.iA.webapi_token,
              ));
          }
          InitTextFilter() {
            this.m_textFilterStore = new Wi.s({ BIsFriend: (0, Wi.Q)() });
            let r = 0;
            Y.iA.steamid !== "" && (r = new Cr.b(Y.iA.steamid).GetAccountID()),
              this.m_textFilterStore.Init(r, null, new bi.A());
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
            (this.m_webAPIInterface = new Kr.D(
              Y.TS.WEBAPI_BASE_URL,
              Y.iA.webapi_token,
            )),
              (this.m_ulBroadcastSteamID = r),
              (this.m_ulBroadcastID = n),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(r) {
            (this.m_webAPIInterface = new Kr.D(
              Y.TS.WEBAPI_BASE_URL,
              Y.iA.webapi_token,
            )),
              (this.m_ulBroadcastChannelID = r),
              (this.m_strUserSteamID = Y.iA.steamid),
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
                let c, M, p;
                if (this.m_webApiToken) {
                  const X = new FormData();
                  X.append("chat_id", this.m_ulChatID),
                    X.append("message", n),
                    X.append("instance_id", this.m_unInstanceID.toString()),
                    (M = await f().post(
                      `${Y.TS.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
                      X,
                    )),
                    (p = M.data && M.data.response);
                } else {
                  const X = E.w.Init(ir.Lw);
                  X.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    message: n,
                    instance_id: this.m_unInstanceID.toString(),
                  }),
                    (c = await ir.DK.PostChatMessage(
                      this.m_webAPIInterface.GetServiceTransport(),
                      X,
                    )),
                    (p = {
                      result: c.GetEResult(),
                      cooldown_time_seconds: c.Body().cooldown_time_seconds(),
                      in_game: c.Body().in_game(),
                      persona_name: c.Body().persona_name(),
                    });
                }
                if (p && p.result && p.result != yr.R) {
                  let X = "";
                  p.result == yr.f4
                    ? (X = (0, B.we)("#BroadcastChat_YouMuted"))
                    : p.result == yr.h_
                      ? (X = (0, B.we)(
                          "#BroadcastChat_Cooldown",
                          p.cooldown_time_seconds,
                        ))
                      : (X = (0, B.we)("#BroadcastChat_FailedToSendMsg", n)),
                    this.m_rgChatMessages.push({
                      type: j.X8.Error,
                      msg: X,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: p.in_game,
                      persona_name: p.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = p.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: j.X8.Error,
                  msg: (0, B.we)("#BroadcastChat_FailedToSendMsg", n),
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
                  sessionid: (0, Y.KC)(),
                },
                c = await f().get(
                  `${Y.TS.CHAT_BASE_URL}broadcast/getchatinfo`,
                  { params: n, withCredentials: !0, cancelToken: r?.token },
                );
              (!r || !r.token.reason) &&
                (0, Mr.h5)(() => {
                  const M = c.data;
                  (this.m_strChatURL = M.view_url_template),
                    (this.m_ulChatID = M.chat_id),
                    (this.m_strFlairGroupID =
                      M.flair_group_ids && M.flair_group_ids[0]),
                    M.blocked && console.log("User is blocked from chat"),
                    M.steamid && (this.m_strUserSteamID = M.steamid),
                    M.token && (this.m_webApiToken = M.token),
                    M.emoticons && this.SetOwnedEmoticons(M.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: j.X8.Notification,
                        msg: (0, B.we)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    M.moderators_steamid &&
                      M.moderators_steamid.forEach((p) =>
                        this.m_mapBroadcastModeratorUsers.set(p, !0),
                      ),
                    (this.m_chatScheduledFunc = new Di.LU()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (n) {
              console.error(n), console.log("Failed to get chat info!");
            }
          }
          async JoinChannelChat() {
            try {
              const r = E.w.Init(h);
              r.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let n = await Fi.JoinChat(
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
                  type: j.X8.Notification,
                  msg: (0, B.we)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new Di.LU()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (r) {
              console.error(r), console.log("Failed to join chat!");
            }
          }
          async FetchChatModerators() {
            const r = E.w.Init(Mi);
            r.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const c = (
                await Fi.GetChatModerators(
                  this.m_webAPIInterface.GetServiceTransport(),
                  r,
                )
              )
                .Body()
                .results(),
              M = new Map();
            c.forEach((p) => {
              M.set(p.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = M);
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
              const M = (await f().get(n, { params: r })).data;
              this.m_cConsecutiveErrors = 0;
              const p = M.messages
                .map((_r) => ({
                  ..._r,
                  type: j.X8.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter((_r) => !this.IsUserMutedLocally(_r.steamid));
              this.m_rgChatMessages.push(...p),
                this.ReplaceChatAnnouncementIfAny(M);
              const X = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > X &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - X,
                  ),
                M.muted)
              )
                for (const _r of M.muted) {
                  const ji =
                    _r.muted == this.m_strUserSteamID
                      ? (0, B.we)("#BroadcastChat_YouMuted", _r.persona_name)
                      : (0, B.we)("#BroadcastChat_UserMuted", _r.persona_name);
                  this.m_rgChatMessages.push({
                    type: j.X8.Notification,
                    msg: ji,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (M.remove_msgs)
                for (const _r of M.remove_msgs)
                  this.RemoveUserMessagesLocal(_r.steamid);
              let Sr = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                M.initial_delay
              ) {
                if (M.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + M.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = M.next_request),
                  (Sr = M.initial_delay);
              } else {
                if (M.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  M.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = M.next_request),
                  (Sr =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = Sr),
                Sr < 0 && (Sr = 0),
                this.m_chatScheduledFunc.Schedule(Sr, this.RequestLoop);
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
                (this.m_nNudgeFactorMS += i),
                this.m_cConsecutiveErrors >= le)
              ) {
                if (this.m_tsFirstRequest == null) {
                  this.m_rgChatMessages.push({
                    type: j.X8.Error,
                    msg: (0, B.we)("#BroadcastChat_UnableToJoinChat"),
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
              this.m_chatScheduledFunc.Schedule(_, this.RequestLoop);
            }
          }
          GetUserEmoticons() {
            return this.m_regexUserEmoticons;
          }
          SetOwnedEmoticons(r) {
            let n = [];
            for (let M = 0; M < r.length; M++) {
              let p = r[M];
              p.length >= 2 && p[0] == ":"
                ? n.push(p.substr(1, p.length - 2))
                : n.push(p);
            }
            let c = ":(" + n.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(c, "g");
          }
          async UpdateBroadcastChatModerator(r, n, c) {
            {
              const M = new FormData();
              M.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                M.append("moderatorsteamid", r),
                M.append("bAdd", n ? "1" : "0"),
                M.append("sessionid", (0, Y.KC)());
              try {
                await f().post(
                  `${Y.TS.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  M,
                ),
                  this.m_mapBroadcastModeratorUsers.set(r, n);
                const p = (0, B.we)(
                  n
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  c,
                );
                this.m_rgChatMessages.push({ type: j.X8.Notification, msg: p });
              } catch {
                const p = (0, B.we)(
                  n
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  c,
                );
                this.m_rgChatMessages.push({ type: j.X8.Error, msg: p });
              }
            }
          }
          async UpdateUserChatBan(r, n, c, M, p, X) {
            const Sr = this.m_ulBroadcastSteamID,
              _r = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const ji = E.w.Init(Dr);
              ji.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: r,
                duration: c * 3600,
                permanent: M,
                undo: X,
              }),
                await Fi.AddChatBan(
                  this.m_webAPIInterface.GetServiceTransport(),
                  ji,
                );
            } else {
              const ji = new FormData();
              ji.append("broadcaststeamid", Sr),
                ji.append("issuersteamid", _r),
                ji.append("chattersteamid", r),
                ji.append("bantype", n),
                ji.append("duration", c.toString()),
                ji.append("perm", M ? "1" : "0"),
                ji.append("sessionid", (0, Y.KC)());
              try {
                await f().post(
                  `${Y.TS.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  ji,
                ),
                  n == ir.sW.rx
                    ? delete this.m_mapMutedUsers[r]
                    : (this.m_mapMutedUsers[r] = p);
              } catch {
                console.log("Failed to update mute for " + p);
              }
            }
          }
          async MuteUserForSession(r, n) {
            if (r == this.m_strUserSteamID || this.m_ulBroadcastSteamID == r)
              return;
            let c = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[r]) {
              this.m_mapMutedUsers[r] = n;
              try {
                if (this.m_webApiToken) {
                  const M = new FormData();
                  M.append("chat_id", this.m_ulChatID),
                    M.append("user_steamid", r),
                    M.append("muted", "1"),
                    await f().post(
                      `${Y.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      M,
                    );
                } else {
                  const M = E.w.Init(ir.hW);
                  M.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: r,
                    muted: !0,
                  }),
                    await ir.DK.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      M,
                    );
                }
              } catch {
                c &&
                  (this.m_rgChatMessages.push({
                    type: j.X8.Error,
                    msg: (0, B.we)("#BroadcastChat_UserMuteFailed", n),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[r]);
              }
            }
            c ||
              this.m_rgChatMessages.push({
                type: j.X8.Notification,
                msg: (0, B.we)("#BroadcastChat_UserMutedLocal", n),
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
                  const M = new FormData();
                  M.append("chat_id", this.m_ulChatID),
                    M.append("user_steamid", r),
                    M.append("muted", "0"),
                    await f().post(
                      `${Y.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      M,
                    );
                } else {
                  const M = E.w.Init(ir.hW);
                  M.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: r,
                    muted: !1,
                  }),
                    await ir.DK.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      M,
                    );
                }
                this.m_rgChatMessages.push({
                  type: j.X8.Notification,
                  msg: (0, B.we)("#BroadcastChat_UserUnmutedLocal", n),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch {
                this.m_rgChatMessages.push({
                  type: j.X8.Error,
                  msg: (0, B.we)("#BroadcastChat_UserUnmuteFailed", n),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: j.X8.Notification,
                msg: (0, B.we)("#BroadcastChat_UserUnmutedLocal", n),
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
                  const c = new FormData();
                  c.append("chat_id", this.m_ulChatID),
                    c.append("user_steamid", r),
                    await f().post(
                      `${Y.TS.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
                      c,
                    );
                } else {
                  const c = E.w.Init(ir.ku);
                  c.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: r,
                  }),
                    await ir.DK.RemoveUserChatText(
                      this.m_webAPIInterface.GetServiceTransport(),
                      c,
                    );
                }
              } catch {
                this.m_rgChatMessages.push({
                  type: j.X8.Error,
                  msg: (0, B.we)("#BroadcastChat_RemoveMessagesFailed", n),
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
                  `${Y.TS.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
                  n,
                );
            } else {
              const n = E.w.Init(ir.Mn);
              n.SetBodyFields({
                chat_id: this.m_ulChatID,
                flair: `^${this.m_strFlairGroupID}^:${r}:`,
              }),
                await ir.DK.UpdateChatMessageFlair(
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
        Ki([Mr.sH], Zi.prototype, "m_mapChannelModeratorUsers", 2),
          Ki([Mr.sH], Zi.prototype, "m_mapBroadcastModeratorUsers", 2),
          Ki([Mr.sH], Zi.prototype, "m_nRateLimitSeconds", 2),
          Ki([Mr.sH], Zi.prototype, "m_bRateLimited", 2),
          Ki([Mr.sH], Zi.prototype, "m_rgChatMessages", 2),
          Ki([Mr.sH], Zi.prototype, "m_latestAnnouncement", 2),
          Ki([Ii.o], Zi.prototype, "FetchChatModerators", 1),
          Ki([Ii.o], Zi.prototype, "RequestLoop", 1),
          Ki([Ii.o], Zi.prototype, "MuteUserForSession", 1);
        var ae = g(18614),
          we = g(90024),
          Hi = g.n(we),
          Yi = g(34360),
          de = g(16412),
          Me = g(96197),
          ue = g(22714),
          ye = g(86390),
          he = g(34736),
          ze = g(33543),
          Ri = g.n(ze);
        const je = () =>
            (0, l.jsx)("div", {
              className: Ri().FriendsListInsetShadowCtn,
              children: (0, l.jsx)("div", {
                className: Ri().FriendListInsetShadowTop,
              }),
            }),
          pe = () =>
            (0, l.jsx)("div", {
              className: Ri().FriendsListInsetShadowCtn,
              children: (0, l.jsx)("div", {
                className: Ri().FriendListInsetShadowBottom,
              }),
            });
        var Xi = g(36118),
          yi = g(36707),
          ki = g(30096),
          ve = g(63508),
          oi = g.n(ve),
          Pi = g(22950),
          me = g(29630),
          Oe = g(37656),
          xe = g(11587),
          Vi = g(53107),
          ce = g(53113),
          Fe = g(8287),
          Ni = g.n(Fe);
        function Ie(w) {
          const { latestAnnouncement: r } = w;
          return r?.type == "giveaway_draw"
            ? (0, l.jsx)(ge, { latestWinner: r })
            : null;
        }
        function ge(w) {
          const {
              latestWinner: r,
              className: n,
              strActionButton: c,
              strActionClassname: M,
            } = w,
            p = r.winners_info?.length > 0 ? r.winners_info[0].accountid : 0,
            [X, Sr] = F.useState(p),
            _r =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            ji = (0, ce.L$)(
              `${me.zU.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            Ai = (0, ce.L$)(
              `${me.zU.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            ),
            $i = (0, Oe.w)(r.giveaway_gid);
          let Li =
            $i.bLoadingGiveawayInfo || $i.closed
              ? null
              : $i.seconds_until_drawing;
          const qi = p === Y.iA.accountid;
          F.useEffect(() => {
            X != p && setTimeout(() => Sr(p), 1500);
          }, [p, X]);
          const ee =
            r.winners_info?.length > 0 && r.winners_info[0].persona
              ? r.winners_info[0].persona
              : (0, B.we)("#GA2022_UnknownPersonaName");
          return (0, l.jsx)(Vi.uU, {
            href: _r,
            className: n,
            children: (0, l.jsxs)("div", {
              className: (0, yi.A)({
                [Ni().GiveawayWinnerBox]: !0,
                [Ni().GiveawayWinnerAnnounced]: X === p,
              }),
              children: [
                (0, l.jsx)("div", {
                  className: Ni().GiveawayWinnerBoxLeft,
                  children: (0, l.jsx)("img", {
                    className: Ni().GiveawayWinnerArt,
                    src: ji,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: Ni().GiveawayWinnerBoxRight,
                  children: [
                    X !== p &&
                      (0, l.jsx)("div", {
                        className: (0, yi.A)(Ni().GiveawayWinnerText),
                        children: (0, B.PP)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, l.jsx)("br", {}),
                        ),
                      }),
                    X === p &&
                      (0, l.jsx)("div", {
                        className: (0, yi.A)(
                          Ni().GiveawayWinnerText,
                          Ni().GiveawayWinnerAnnounced,
                        ),
                        children: (0, B.PP)(
                          qi
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          ee,
                          (0, l.jsx)("br", {}),
                        ),
                      }),
                    Li > 0 &&
                      (0, l.jsx)("div", {
                        className: Ni().GiveawayWinnerCountdown,
                        children: (0, B.PP)("#GA2022_Congrats_NextDraw", Li),
                      }),
                  ],
                }),
                (0, l.jsx)("img", {
                  className: Ni().GiveawayWinnerQuestion,
                  src: Ai,
                }),
                !!c &&
                  (0, l.jsx)("div", {
                    className: M,
                    children: qi ? (0, B.we)("#GA2022_YouWonNextSteps") : c,
                  }),
              ],
            }),
          });
        }
        function De(w, r) {
          const [n, c] = (0, e.q3)(() => [
              r?.steamid,
              Pi.es.GetBroadcast(r?.steamid)?.m_ulBroadcastID,
            ]),
            [M, p] = F.useState(null);
          F.useEffect(() => {
            let Sr = null;
            return (
              (n || c) &&
                ((Sr = d.Get().GetOrCreateChat(c, n)),
                Sr.StartForSteamID(n, c),
                p(Sr)),
              () => {
                Sr && (Sr.Stop(), p(null));
              }
            );
          }, [n, c]);
          const X = (0, e.q3)(() => M?.m_latestAnnouncement || null);
          if (X?.type == "giveaway_draw") {
            const Sr = X;
            if (Sr.giveaway_gid == w) return Sr;
          }
          return null;
        }
        function We(w) {
          const { gidGiveaway: r, stream: n } = w,
            c = De(r, n),
            M = (0, xe.h3)("GameAwardDrop2022");
          let p = null,
            X = Ni().GiveawayRegisterButton;
          return (
            Y.iA.logged_in
              ? M?.registered
                ? ((p = (0, B.we)("#GA2022_AlreadyRegistered")),
                  (X = Ni().GiveawayAlreadyRegistered))
                : (p = (0, B.we)("#GA2022_RegisterToWin"))
              : (p = (0, B.we)("#GA2022_RegisterLoginToWin")),
            c
              ? (0, l.jsx)(ge, {
                  latestWinner: c,
                  className: Ni().InViewerBar,
                  strActionButton: p,
                  strActionClassname: X,
                })
              : null
          );
        }
        var L = g(71421),
          J = Object.defineProperty,
          lr = Object.getOwnPropertyDescriptor,
          Ci = (w, r, n, c) => {
            for (
              var M = c > 1 ? void 0 : c ? lr(r, n) : r, p = w.length - 1, X;
              p >= 0;
              p--
            )
              (X = w[p]) && (M = (c ? X(r, n, M) : X(M)) || M);
            return c && M && J(r, n, M), M;
          };
        const Le = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          sn = null,
          Je = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function He(w, r, n) {
          return n
            ? "presenter"
            : r.GetBroadcastSteamID() === w
              ? "broadcaster"
              : r.BIsUserBroadcastModerator(w)
                ? "moderator"
                : "";
        }
        const Se = (w) => {
            const { userType: r, msg: n, presenterInfo: c } = w;
            if (r === "presenter")
              return (0, l.jsx)("span", {
                children: (0, l.jsx)(he.fI, {
                  name: c.name,
                  title: c.title,
                  photo: c.photo,
                  company: c.company,
                  bioString: c.bio,
                  children: (0, l.jsx)("a", {
                    className: (0, yi.A)(
                      oi().MessageName,
                      oi().MessagePresenter,
                    ),
                    href: Y.TS.COMMUNITY_BASE_URL + "profiles/" + n.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: n.persona_name,
                  }),
                }),
              });
            {
              let M = null;
              return (
                r === "broadcaster"
                  ? (M = oi().MessageBroadcaster)
                  : r === "moderator" && (M = oi().MessageModerator),
                (0, l.jsx)("span", {
                  children: (0, l.jsx)("a", {
                    className: (0, yi.A)(oi().MessageName, M),
                    href: Y.TS.COMMUNITY_BASE_URL + "profiles/" + n.steamid,
                    "data-miniprofile": "s" + n.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: n.persona_name,
                  }),
                })
              );
            }
          },
          qe = (w) => {
            switch (w.userType) {
              case "presenter":
                return (0, l.jsx)(L.Gq, {
                  toolTipContent: (0, B.we)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, l.jsx)("span", {
                    className: oi().RoleFlairContainer,
                    children: (0, l.jsx)(Xi.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, l.jsx)(L.Gq, {
                  toolTipContent: (0, B.we)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, l.jsx)("span", {
                    className: oi().RoleFlairContainer,
                    children: (0, l.jsx)(Xi.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, l.jsx)(L.Gq, {
                  toolTipContent: (0, B.we)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, l.jsx)("span", {
                    className: oi().RoleFlairContainer,
                    children: (0, l.jsx)(Xi.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let Si = class extends F.Component {
          constructor(w) {
            super(w), (0, Mr.Gn)(this);
          }
          m_chat = null;
          messagesContainer = F.createRef();
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(w) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== w.steamID ||
                this.props.broadcastID !== w.broadcastID ||
                this.props.broadcastChannelID !== w.broadcastChannelID) &&
                this.StartChat();
          }
          componentWillUnmount() {
            this.m_chat && this.m_chat.Stop();
          }
          StartChat() {
            if (
              (this.m_chat && this.m_chat.Stop(),
              (this.m_chat = d
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
              let w = this.props.broadcastID || "0";
              this.m_chat.StartForSteamID(this.props.steamID, w),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(w) {
            return !!w.match(Je);
          }
          AddLinksEmoticons(w, r) {
            let n = Le;
            r && (n = this.m_chat.GetUserEmoticons());
            let c = w.split(Le);
            const M = [];
            for (let p = 0; p < c.length; p += 1)
              p % 2 === 1
                ? M.push((0, l.jsx)(Me.n, { emoticon: c[p], large: !0 }, p))
                : M.push(c[p]);
            return M;
          }
          HandleScroll(w) {
            const r = this.props.bInvertLayout
              ? w.currentTarget.scrollTop < 6
              : w.currentTarget.scrollTop + w.currentTarget.clientHeight >=
                w.currentTarget.scrollHeight - 6;
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
          OnContextMenu(w, r) {
            if (r.type !== j.X8.Chat) return null;
            const n = [],
              c = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
              M = this.m_chat.BIsUserBroadcastModerator(
                this.m_chat.GetUserSteamID(),
              );
            return (
              (Y.iA && Y.iA.is_support) || c || M
                ? n.push(
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.RemoveUserMessagesServer(
                            r.steamid,
                            r.persona_name,
                          ),
                        children: (0, B.we)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            ir.sW.XP,
                            12,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, B.we)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            ir.sW.XP,
                            24,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, B.we)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            ir.sW.XP,
                            168,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, B.we)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            ir.sW.XP,
                            0,
                            !0,
                            r.persona_name,
                          ),
                        children: (0, B.we)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            ir.sW.rx,
                            0,
                            !1,
                            r.persona_name,
                            !0,
                          ),
                        children: (0, B.we)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : this.m_chat.IsUserMutedLocally(r.steamid)
                  ? n.push(
                      (0, l.jsx)(
                        Yi.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UnmuteUserForSession(
                              r.steamid,
                              r.persona_name,
                            ),
                          children: (0, B.we)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : n.push(
                      (0, l.jsx)(
                        Yi.kt,
                        {
                          onSelected: () =>
                            this.m_chat.MuteUserForSession(
                              r.steamid,
                              r.persona_name,
                            ),
                          children: (0, B.we)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((Y.iA && Y.iA.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                r.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(r.steamid)
                  ? n.push(
                      (0, l.jsx)(
                        Yi.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              r.steamid,
                              !1,
                              r.persona_name,
                            ),
                          children: (0, B.we)(
                            "#BroadcastChat_Remove_Moderator",
                          ),
                        },
                        "removemod",
                      ),
                    )
                  : n.push(
                      (0, l.jsx)(
                        Yi.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              r.steamid,
                              !0,
                              r.persona_name,
                            ),
                          children: (0, B.we)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              n.length
                ? (0, Z.lX)(
                    (0, l.jsxs)(Yi.tz, {
                      children: [
                        (0, l.jsxs)("div", {
                          className: oi().SelectedUserNameCtn,
                          children: [
                            (0, B.we)("#BroadcastChat_User"),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("span", {
                              className: oi().SelectedUserName,
                              children: r.persona_name,
                            }),
                          ],
                        }),
                        n,
                      ],
                    }),
                    w,
                  )
                : null
            );
          }
          GetTypeClassName(w) {
            return w.type === j.X8.Notification
              ? oi().MessageNotification
              : w.type === j.X8.Error
                ? oi().MessageError
                : oi().MessageChat;
          }
          FormatMessage(w, r) {
            if (w.type === j.X8.Chat) {
              let n = r ? r.FilterText(w.steamid, w.msg) : w.msg;
              return this.AddLinksEmoticons(n, !1);
            } else return w.msg;
          }
          RenderUserChatLine(w, r, n) {
            let c = n ? n.get(w.steamid) : void 0;
            const M = w.type === j.X8.Chat ? He(w.steamid, this.m_chat, c) : "";
            return (0, l.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(w),
                onContextMenu: (p) => this.OnContextMenu(p, w),
                children: [
                  w.type === j.X8.Chat && (0, l.jsx)(qe, { userType: M }),
                  w.flair &&
                    (0, l.jsx)("span", {
                      className: oi().FlairContainer,
                      children: this.AddLinksEmoticons(w.flair, !1),
                    }),
                  w.type === j.X8.Chat &&
                    (0, l.jsx)(Se, { userType: M, msg: w, presenterInfo: c }),
                  w.type === j.X8.Chat &&
                    this.m_chat.GetBroadcastSteamID() === w.steamid &&
                    (0, l.jsx)("span", {
                      className: `${oi().MessageNotification} ${oi().MessageContents}`,
                      children: ` (${(0, B.we)("#BroadcastChat_Broadcaster")})`,
                    }),
                  w.type === j.X8.Chat &&
                    this.m_chat.m_mapChannelModeratorUsers.get(w.steamid) &&
                    (0, l.jsx)("span", {
                      className: `${oi().MessageNotification} ${oi().MessageContents}`,
                      children: ` (${(0, B.we)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, l.jsxs)("span", {
                    className: `${oi().MessageContents} ${this.AddLinksEmoticons(w.msg, !1).filter((p) => p && typeof p == "string").length ? "" : oi().EmoticonsOnly}`,
                    children: [
                      w.type === j.X8.Chat ? " : " : "",
                      this.FormatMessage(w, this.m_chat.TextFilterStore),
                    ],
                  }),
                ],
              },
              w.instance_id + "_" + w.client_ts + "_" + r,
            );
          }
          render() {
            const {
                hidden: w,
                bPartnerMemberOnlyChat: r,
                bInvertLayout: n,
              } = this.props,
              c = this.m_chat ? this.m_chat.m_rgChatMessages : [],
              M = n ? c.reverse() : c,
              p = this.m_chat
                ? ae.l.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              X = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, l.jsxs)("div", {
              className: (0, yi.A)(oi().ChatPanel, "ChatPanel"),
              style: w ? { display: "none" } : void 0,
              children: [
                (0, l.jsx)(Ie, { latestAnnouncement: X }),
                n &&
                  !!this.m_chat &&
                  (0, l.jsx)(ke, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: r,
                  }),
                (0, l.jsx)(je, {}),
                (0, l.jsx)("div", {
                  className: (0, yi.A)(
                    `${oi().ChatMessages} ${Hi().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children: M.map((Sr, _r) =>
                    this.RenderUserChatLine(Sr, _r, p),
                  ),
                }),
                (0, l.jsx)(pe, {}),
                !n &&
                  !!this.m_chat &&
                  (0, l.jsx)(ke, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: r,
                  }),
              ],
            });
          }
        };
        Ci([Mr.sH], Si.prototype, "m_chat", 2),
          Ci([ki.oI], Si.prototype, "StartChat", 1),
          Ci([ki.oI], Si.prototype, "HandleScroll", 1),
          Ci([ki.oI], Si.prototype, "OnContextMenu", 1),
          Ci([ki.oI], Si.prototype, "RenderUserChatLine", 1),
          (Si = Ci([m.PA], Si));
        function ke(w) {
          const { oChat: r, emoticonStore: n, bPartnerMemberOnlyChat: c } = w;
          return c && (!Y.iA?.logged_in || !Y.iA?.is_partner_member)
            ? (0, l.jsx)(Ve, {})
            : Y.iA?.logged_in
              ? (0, l.jsx)(Ge, { oChat: r, emoticonStore: n })
              : null;
        }
        function Ge(w) {
          const { oChat: r, emoticonStore: n } = w,
            [c, M] = F.useState(""),
            p = F.useRef(void 0),
            X = (0, e.q3)(() => r.m_bRateLimited),
            Sr = F.useCallback(
              (Li) => {
                !Li.shiftKey &&
                  Li.charCode === 13 &&
                  (r.m_bRateLimited || (r.SendMessage(c), M("")),
                  Li.preventDefault());
              },
              [r, c],
            ),
            _r = F.useCallback(
              (Li, qi = !1) => {
                M(c + `\u02D0${Li}\u02D0`), p?.current && p.current.focus();
              },
              [c, p],
            ),
            ji = () => {
              r.SendMessage(c), M("");
            };
          let Ai = X || c.trim().length == 0,
            $i = (0, yi.A)(
              Hi().chatSubmitButton,
              c.length == 0 && Hi().disabled,
            );
          return (0, l.jsx)("div", {
            className: (0, yi.A)(oi().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, l.jsxs)("div", {
              className: (0, yi.A)(oi().ChatEntry, "ChatEntry"),
              children: [
                (0, l.jsxs)("form", {
                  className: `${Hi().chatEntryControls}`,
                  children: [
                    (0, l.jsx)("textarea", {
                      className: Hi().chatTextarea,
                      placeholder: (0, B.we)("#BroadcastChat_EnterResponse"),
                      onKeyPress: Sr,
                      onChange: (Li) => M(Li.target.value),
                      value: c,
                      ref: p,
                    }),
                    X &&
                      (0, l.jsx)(Re, {
                        nSeconds: r.m_nRateLimitSeconds,
                        bRateLimited: r.m_bRateLimited,
                      }),
                    (0, l.jsx)("button", {
                      className: $i,
                      title: (0, B.we)("#ChatEntryButton_Submit"),
                      disabled: Ai,
                      onClick: ji,
                      children: (0, l.jsx)(Xi.XTb, {}),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  style: { height: "50px" },
                  className: `${Hi().chatEntryActionsContainer}`,
                  children: (0, l.jsxs)("div", {
                    className: Hi().chatEntryActionsGroup,
                    children: [
                      (0, l.jsx)(ue.A, {
                        disabled: !1,
                        OnEmoticonSelected: _r,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: n,
                      }),
                      (0, l.jsx)(Te, { ...w, textInputRef: p }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function Te(w) {
          const { oChat: r, emoticonStore: n, textInputRef: c } = w;
          return r.m_strFlairGroupID &&
            n.flair_list &&
            n.GetFlairListByGroupID(r.m_strFlairGroupID)?.length
            ? (0, l.jsx)(ue.A, {
                disabled: !1,
                OnEmoticonSelected: (M) => {
                  r.UpdateChatMessageFlair(M), c?.current && c.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: n,
                strFlairGroupID: r.m_strFlairGroupID,
                title: (0, B.we)("#ChatEntryButton_Flair"),
                buttonIcon: (0, l.jsx)(Xi.P7r, {}),
              })
            : null;
        }
        class Re extends F.Component {
          render() {
            return (0, l.jsx)("div", {
              className: oi().TimedProgressBarContainer,
              children: (0, l.jsxs)("div", {
                className: oi().wrapper,
                children: [
                  (0, l.jsx)("div", {
                    className: `${oi().spinner} ${oi().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, l.jsx)("div", {
                    className: `${oi().filler} ${oi().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, l.jsx)("div", {
                    className: oi().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function Ve(w) {
          return (0, l.jsxs)("div", {
            className: oi().Description,
            children: [
              (0, l.jsx)("div", {
                className: oi().LogInPrompt,
                children: (0, B.we)("#Broadcast_PartnerChat_Login"),
              }),
              !Y.iA.logged_in &&
                (0, l.jsx)(de.$n, {
                  onClick: ye.vg,
                  className: (0, yi.A)(oi().SignInButton),
                  children: (0, B.we)("#Login_SignIn"),
                }),
            ],
          });
        }
        var Ce = g(7132),
          _e = g(83482),
          rt = g(78192),
          it = g(84676),
          oe = g(76532),
          fe = g(95414),
          et = g(4705),
          tt = g(72865),
          nt = g(85599),
          st = g(43087),
          Be = g.n(st),
          Ee = g(29522),
          _i = g(40358),
          lt = g(47875),
          Ne = g(21721),
          at = g(3348);
        const ut = (0, m.PA)((w) => {
          const { appid: r } = w,
            n = (0, tt.n9)(),
            c = (0, F.useRef)({ include_assets: !0, include_release: !0 }),
            M = (0, Ee.$5)(r),
            { data: p } = (0, _i.J$)(M),
            { data: X } = (0, _i.lv)(M),
            { data: Sr } = (0, _i.by)(M),
            [_r, ji] = (0, it.t7)(r, c.current);
          let Ai = (0, yi.A)(
              Be().StoreSaleWidgetContainer_mini,
              "StoreSaleWidgetContainer_mini",
            ),
            $i = Be().StoreSaleWidgetImage_mini,
            Li = Be().StoreSaleImage_mini;
          if (p == null)
            return (0, l.jsx)("div", {
              className: Ai,
              children: (0, l.jsx)(nt.t, { size: "medium" }),
            });
          if (p == null || !p.name)
            return (0, l.jsx)("div", {
              className: oe.StoreSaleWidgetEmptyContainer,
            });
          const qi = p.type != rt.uE.gQ,
            ee = (0, _e.wJ)((0, lt._)(p), n);
          return (0, l.jsxs)("div", {
            className: Ai,
            children: [
              (0, l.jsx)("a", {
                href: ee,
                target: Y.TS.IN_CLIENT ? void 0 : "_blank",
                children: (0, l.jsx)(fe.j, {
                  id: M,
                  children: (0, l.jsx)("div", {
                    className: $i,
                    children:
                      X &&
                      (0, l.jsx)("img", {
                        className: Li,
                        src: (0, Ne.b0)(X, "small_capsule"),
                        alt: p.name,
                      }),
                  }),
                }),
              }),
              (0, l.jsxs)("div", {
                className: oe.StoreSaleBroadcastWidgetRight,
                children: [
                  (0, l.jsx)("a", {
                    href: ee,
                    target: Y.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, l.jsx)(fe.j, {
                      id: M,
                      children: (0, l.jsx)("div", {
                        className: (0, yi.A)(
                          oe.StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                        children: p.name,
                      }),
                    }),
                  }),
                  Sr &&
                    (0, l.jsx)("div", {
                      className: oe.StoreSaleWidgetRelease,
                      children: (0, at.CC)(Sr),
                    }),
                  !!qi && (0, l.jsx)(et.w, { id: M, bShowDemoButton: !0 }),
                ],
              }),
            ],
          });
        });
        var Pe = g(99412),
          re = g(46477),
          ie = g(61639),
          Ue = g(55051),
          xi = g(25317),
          Ke = g(10142),
          mt = g(23627),
          ct = g(39239),
          gt = g(90405),
          Xe = g(19730),
          $e = g(60480),
          ot = g(53120),
          rr = g.n(ot);
        const ft = (0, m.PA)((w) => {
          const { event: r } = w,
            n = r.clanSteamID.GetAccountID(),
            c = !r || !r.jsondata || !r.jsondata.broadcast_item_drops_enabled,
            M = (0, F.useRef)(null),
            [p, X] = (0, F.useState)(
              r ? $e.pF.GetCreatorHome(r.clanSteamID) : null,
            );
          if (
            ((0, F.useEffect)(() => {
              const _r = f().CancelToken.source();
              return (
                (M.current = _r.cancel),
                (async () => {
                  const Ai = Cr.b.InitFromClanID(n),
                    $i = await $e.pF.LoadCreatorHome(Ai, !1, _r);
                  _r.token.reason || X($i);
                })(),
                () => {
                  M.current && M.current("BroadcastDropsDisplay: unmounting");
                }
              );
            }, [n]),
            c || !p || !p.BIsLoaded())
          )
            return null;
          const Sr =
            Y.TS.COMMUNITY_BASE_URL +
            "gid/" +
            r.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            r.jsondata.broadcast_item_drops_details_event_gid;
          return (0, l.jsx)("div", {
            className: rr().item_drop_ctn,
            children: (0, l.jsxs)("div", {
              children: [
                (0, B.we)(
                  p.GetName().length > 0
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
                  p.GetName(),
                ),
                !!r.jsondata.broadcast_item_drops_details_clan_accountid &&
                  (0, l.jsx)("a", {
                    href: Sr,
                    target: Y.TS.IN_CLIENT ? "" : "_blank",
                    children: (0, B.we)("#SalePage_WatchForDrop_LearnMore"),
                  }),
              ],
            }),
          });
        });
        var bt = g(95695),
          Gi = g.n(bt),
          wt = g(96715),
          dt = g(10886),
          Mt = g(19654),
          yt = g(3209),
          ht = g(96538),
          zt = g(14256),
          Ji = g.n(zt);
        function jt(w) {
          const { steamid: r, closeModal: n } = w;
          return (0, l.jsxs)(ht.o0, {
            strDescription: "",
            strTitle: (0, B.we)("#Button_Share"),
            onCancel: n,
            onOK: n,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
            children: [
              (0, l.jsx)(pt, { steamid: r }),
              (0, l.jsx)(vt, { steamid: r }),
            ],
          });
        }
        function pt(w) {
          const { steamid: r } = w,
            n = Ot(r);
          return (0, l.jsxs)("div", {
            className: (0, yi.A)(
              Gi().FlexRowContainer,
              Ji().share_controls_ctn,
            ),
            children: [
              (0, l.jsx)(L.he, {
                toolTipContent: (0, B.we)("#EventDisplay_Share_OnFaceBook"),
                children: (0, l.jsx)(Vi.uU, {
                  href: n.strFacebookUrl,
                  className: Ji().ShareBtn,
                  children: (0, l.jsx)("img", {
                    className: (0, yi.A)(Gi().Button),
                    src: dt.A,
                  }),
                }),
              }),
              (0, l.jsx)(L.he, {
                toolTipContent: (0, B.we)("#EventDisplay_Share_OnTwitter"),
                children: (0, l.jsx)(Vi.uU, {
                  href: n.strTwitterUrl,
                  className: Ji().ShareBtn,
                  children: (0, l.jsx)("img", {
                    className: (0, yi.A)(Gi().Button),
                    src: yt.A,
                  }),
                }),
              }),
              (0, l.jsx)(L.he, {
                toolTipContent: (0, B.we)("#EventDisplay_Share_OnReddit"),
                children: (0, l.jsx)(Vi.uU, {
                  href: n.strRedditUrl,
                  className: Ji().ShareBtn,
                  children: (0, l.jsx)("img", {
                    className: (0, yi.A)(Gi().Button),
                    src: Mt.A,
                  }),
                }),
              }),
            ],
          });
        }
        function vt(w) {
          const { steamid: r } = w,
            n = F.createRef(),
            [c, M] = F.useState(""),
            p = F.createRef(),
            X = F.useCallback(
              (_r) => {
                n.current &&
                  n.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(n.current.value)
                    .then((ji) => {
                      M((0, B.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((ji) => {
                      M(
                        (0, B.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", ji);
                    });
              },
              [n],
            ),
            Sr = Y.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + r;
          return (0, l.jsxs)("div", {
            children: [
              (0, l.jsxs)("div", {
                className: (0, yi.A)(Gi().FlexRowContainer, Ji().linkField),
                onClick: X,
                children: [
                  (0, l.jsx)("span", {
                    className: Ji().LinkInputLabel,
                    children: (0, B.we)("#EventDisplay_Share_Link"),
                  }),
                  (0, l.jsx)("textarea", {
                    className: Ji().LinkInput,
                    ref: n,
                    value: Sr,
                    readOnly: !0,
                  }),
                  !!document.queryCommandSupported("copy") &&
                    (0, l.jsx)(L.he, {
                      toolTipContent: (0, B.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, l.jsx)("div", {
                        className: (0, yi.A)(
                          Gi().Button,
                          Gi().Icon,
                          Ji().LinkButton,
                        ),
                        children: (0, l.jsx)("img", {
                          className: Ji().ClipboardIcon,
                          src: wt.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, l.jsx)("div", {
                ref: p,
                className: Ji().ClipboardText,
                children: c,
              }),
            ],
          });
        }
        function Ot(w) {
          const r = Y.TS.COMMUNITY_BASE_URL + "broadcast/share/" + w;
          return {
            strFacebookUrl: r + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: r + "?site=twitter",
            strRedditUrl: r + "?site=reddit",
          };
        }
        var xt = g(82734),
          Ft = g(88003),
          It = g(37589),
          Dt = g(34032),
          Wt = Object.defineProperty,
          Bt = Object.getOwnPropertyDescriptor,
          Qi = (w, r, n, c) => {
            for (
              var M = c > 1 ? void 0 : c ? Bt(r, n) : r, p = w.length - 1, X;
              p >= 0;
              p--
            )
              (X = w[p]) && (M = (c ? X(r, n, M) : X(M)) || M);
            return c && M && Wt(r, n, M), M;
          };
        const Et = {
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
        function Pt() {
          const w = (0, Y.Qn)();
          return !(0, Y.Y2)() && !w;
        }
        function Ut(w) {
          return Pt() ? (0, l.jsx)(Ti, { ...w }) : null;
        }
        let Ti = class extends F.Component {
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
            await xi.j
              .Get()
              .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !xi.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: xi.j
                      .Get()
                      .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                      ? "0vh"
                      : "100vh",
                  },
                }),
              await (this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event.BUsesContentHubForItemSource()
                ? xi.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : xi.j.Get().HintLoadEmbeddableStreams(this.props)),
              this.props.nAppIDVOD &&
                xi.j
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
            let w = xi.j.Get().GetPlayReadyStream(this.props);
            const r = this.state.bExpanded,
              n = Pi.es.GetOrCreateBroadcastInfo(w.steamid).m_nAppID;
            (0, xi.U7)(n, r ? ie.Mc.U6 : ie.Mc.B_, w.snr),
              r && (0, re.D)() && (0, re.D)().AddEvent(Ue.Xm.d),
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
                  xi.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
                );
          }
          OnShrinkTransitionEnd() {
            this.state.innerStyle.maxHeight === "0vh" &&
              this.setState({ bExpanded: !1 }, () =>
                xi.j.Get().SetEmbeddedStreamCollapsed(!0),
              );
          }
          async onStreamSelect(w) {
            this.setState({ bStartMuted: !1 }),
              xi.j.Get().GetPlayReadyStream(this.props).accountid !=
                w.accountid &&
                (await xi.j.Get().AttemptToPlayStream(this.props, w));
          }
          async PlayNextNonVOD() {
            this.setState({ bStartMuted: !1 });
            const w = xi.j
              .Get()
              .GetStreams(this.props)
              .filter(
                (r) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(r),
              );
            await xi.j.Get().PlayFromAvailableStreams(this.props, w, !0);
          }
          ConstructSidePanels(w, r) {
            let n = {
              leftPanel: null,
              rightPanel: null,
              bRightPanelArtworkOrEmpty: !0,
            };
            if (this.props.bWidePlayer) return n;
            const c = xi.j.Get().GetConcurrentStreams(this.props) > 1;
            let M = Pi.es.GetOrCreateBroadcastInfo(w.steamid).m_nAppID,
              p = (0, l.jsx)(Ye, { ImgUrl: w.right_panel }, "right" + M),
              X = (0, l.jsx)(Ye, { ImgUrl: w.left_panel }, "left" + M);
            const Sr = 11;
            if (M < Sr) {
              const _r = ae.l.GetAppIDListForBroadcasterSteamID(w.steamid);
              _r && _r.length === 1 && (M = _r[0]);
            }
            return (
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
                M >= Sr &&
                (!this.props.event ||
                  !this.props.event.jsondata.broadcast_force_banner) &&
                ((p = (0, l.jsx)(ut, { appid: M }, "mini" + w.accountid)),
                (n.bRightPanelArtworkOrEmpty = !1)),
              c && !r
                ? ((n.leftPanel = (0, l.jsx)(
                    kt,
                    {
                      broadcastEmbedContext: this.props,
                      curStream: w,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    },
                    "selector" + M,
                  )),
                  (n.rightPanel = p))
                : r
                  ? ((n.leftPanel = (0, l.jsx)("div", {})),
                    (n.rightPanel = (0, l.jsx)(Xt, {
                      stream: w,
                      orientation: "rightside",
                    })),
                    (n.bRightPanelArtworkOrEmpty = !1))
                  : ((n.leftPanel = X), (n.rightPanel = p)),
              n
            );
          }
          MarkBroadcastSeen() {
            this.m_bMarkedUsabilitySeen ||
              ((this.m_bMarkedUsabilitySeen = !0),
              (0, re.D)() && (0, re.D)().AddEvent(Ue.Xm.ex));
          }
          render() {
            if (this.state.bLoadingPreference) return null;
            let w = xi.j.Get().GetPlayReadyStream(this.props);
            if (w) {
              this.MarkBroadcastSeen();
              let r = xi.j.Get().GetChatVisibility() === "show";
              const {
                event: n,
                language: c,
                fnRenderBroadcastContext: M,
              } = this.props;
              n &&
                (w = {
                  ...w,
                  left_panel: n.GetImageURL(
                    "broadcast_left",
                    c || (0, Pe.sfN)(Y.TS.LANGUAGE),
                  ),
                  right_panel: n.GetImageURL(
                    "broadcast_right",
                    c || (0, Pe.sfN)(Y.TS.LANGUAGE),
                  ),
                  store_title: n.GetBroadcastTitle(
                    c || (0, Pe.sfN)(Y.TS.LANGUAGE),
                  ),
                  broadcast_chat_visibility: n.GetBroadcastChatVisibility(),
                });
              let p = this.ConstructSidePanels(w, r),
                X = w.store_title ? w.store_title : w.title,
                Sr = xi.j.Get().GetConcurrentStreams(this.props) > 1;
              const _r = () => {
                w.nAppIDVOD && this.PlayNextNonVOD(),
                  this.props.fnOnVideoEnd?.();
              };
              return (0, l.jsx)(F.Fragment, {
                children: (0, l.jsxs)("div", {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                  children: [
                    (0, l.jsxs)("div", {
                      className: (0, yi.A)({
                        [rr().bordered_container]: !0,
                        [rr().Event]: !!n,
                        broadcast_brd_ctn_trgt: !0,
                      }),
                      children: [
                        (0, l.jsxs)("div", {
                          className: (0, yi.A)(
                            rr().bordered_title,
                            "bordered_title_trgt",
                          ),
                          children: [
                            (0, l.jsx)(mt.K, {}),
                            (0, l.jsx)("div", {
                              className: rr().streamTitle,
                              children: X,
                            }),
                            (0, l.jsxs)("div", {
                              className: rr().bordered_corner_container,
                              children: [
                                !this.state.bExpanded &&
                                  (0, l.jsx)(L.he, {
                                    toolTipContent: (0, B.we)(
                                      "#StoreBroadcast_Change_store_Broadcast_settings",
                                    ),
                                    children: (0, l.jsx)("div", {
                                      className: rr().broadcast_settings_icon,
                                      onClick: () =>
                                        window.open(
                                          `${Y.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                        ),
                                    }),
                                  }),
                                (0, l.jsx)(L.he, {
                                  toolTipContent: (0, B.we)(
                                    "#StoreBroadcast_Hide_Tooltip",
                                  ),
                                  children: (0, l.jsx)("div", {
                                    className: this.state.bExpanded
                                      ? rr().bordered_corner_expanded
                                      : rr().bordered_corner_shrinked,
                                    onClick: this.ToggleBroadcastExpandShrink,
                                  }),
                                }),
                              ],
                            }),
                            !!w.gamedata_subtitle &&
                              (0, l.jsx)("div", {
                                className: rr().bordered_subtitle,
                                children: w.gamedata_subtitle,
                              }),
                          ],
                        }),
                        !!this.state.bExpanded &&
                          (0, l.jsxs)("div", {
                            className: (0, yi.A)({
                              [rr().container]: !0,
                              embeddable_ctn_trgt: !0,
                              multistream: Sr,
                              broadcast_right_panel_simple:
                                p.bRightPanelArtworkOrEmpty,
                              broadcast_chat_expanded: r,
                            }),
                            style: { ...this.state.innerStyle },
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                            children: [
                              (0, l.jsx)("div", {
                                className: rr().LeftPanelCtn,
                                children: p.leftPanel,
                              }),
                              (0, l.jsx)(be, {
                                stream: w,
                                bStartMuted: this.state.bStartMuted,
                                fnRenderBroadcastContext: M,
                                fnOnVideoEnd: _r,
                                bWidePlayer: this.props.bWidePlayer,
                              }),
                              (0, l.jsx)("div", {
                                className: rr().RightPanelCtn,
                                children: p.rightPanel,
                              }),
                              !!this.state.bExpanded &&
                                (0, l.jsx)(ne, {
                                  stream: w,
                                  bMultistream: Sr,
                                  chatAnnouncementGivewayGID: p.rightPanel
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
                    ) && (0, l.jsx)(ft, { event: n }),
                    (0, l.jsx)("div", { className: rr().clear_div }),
                  ],
                }),
              });
            } else
              return (0, l.jsx)("div", { className: "NoBroadcastAvailable" });
          }
        };
        Qi([ki.oI], Ti.prototype, "ToggleBroadcastExpandShrink", 1),
          Qi([ki.oI], Ti.prototype, "OnShrinkTransitionEnd", 1),
          Qi([ki.oI], Ti.prototype, "onStreamSelect", 1),
          Qi([ki.oI], Ti.prototype, "PlayNextNonVOD", 1),
          (Ti = Qi([m.PA], Ti));
        class be extends F.Component {
          m_iVideoContainerRef = F.createRef();
          constructor(r) {
            super(r),
              (this.state = {
                bPopout: !1,
                bPreventPopup: window.screen.width <= 768,
              });
          }
          CloseBroadcastPopup() {
            const r = Pi.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, xi.U7)(r, ie.Mc.n6, this.props.stream.snr),
              (0, re.D)() && (0, re.D)().AddEvent(Ue.Xm.ok),
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
            return (0, l.jsx)("div", {
              className: rr().wrapper,
              children: (0, l.jsx)(It.j, {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (r) => {
                  r.isIntersecting || this.OnLeave();
                },
                className: (0, yi.A)({
                  [rr().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [rr().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
                children: (0, l.jsxs)("div", {
                  className: this.state.bPopout
                    ? rr().broadcast_floating
                    : rr().video_container,
                  children: [
                    this.state.bPopout &&
                      (0, l.jsx)(Ze, {
                        steamIDBroadcast: this.props.stream.steamid,
                        OnPreventPopup: this.CloseBroadcastPopup,
                      }),
                    (0, l.jsx)("div", {
                      className: rr().BroadcastPlayerContainer,
                      children: (0, l.jsx)(Ce.default, {
                        steamIDBroadcast: this.props.stream.steamid,
                        watchLocation: ir.nn.fe,
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
        Qi([ki.oI], be.prototype, "CloseBroadcastPopup", 1),
          Qi([ki.oI], be.prototype, "OnEnter", 1),
          Qi([ki.oI], be.prototype, "OnLeave", 1);
        function At(w) {
          const { stream: r } = w,
            [n] = (0, e.q3)(() => [r.steamid]),
            c = Pi.es.GetOrCreateBroadcastInfo(n).m_nAppID,
            M = Et.list.find(
              (p) =>
                p.appid == c &&
                (!p.broadcasterAccountID ||
                  p.broadcasterAccountID == r.accountid),
            );
          if (M) {
            let p = M.url;
            return (
              (Y.TS.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (p = "steam://openurl/" + p),
              (0, l.jsx)("a", {
                href: p,
                children: (0, B.we)(
                  "#Broadcast_Embed_Watch_With_Frieds_SteamTV",
                ),
              })
            );
          } else {
            const p = Y.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + n;
            return (0, l.jsx)(L.he, {
              toolTipContent: (0, B.we)("#BroadcastWatch_View_Broadcast_Page"),
              children: (0, l.jsx)("a", {
                href: p,
                className: rr().external_link,
                children: (0, l.jsx)(Xi.GrD, {}),
              }),
            });
          }
        }
        let ne = class extends F.Component {
          OnToggleChat(w) {
            w.preventDefault();
            const r = Pi.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, xi.U7)(
              r,
              xi.j.Get().GetChatVisibility() === "show" ? ie.Mc.kz : ie.Mc.bW,
              this.props.stream.snr,
            ),
              xi.j.Get().ToggleChatVisibility();
          }
          onWatchBroadcastPage() {
            const w = Pi.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, xi.U7)(w, ie.Mc.Is, this.props.stream.snr);
          }
          render() {
            const w = xi.j.Get().GetChatVisibility() != "remove",
              r = xi.j.Get().GetChatVisibility() === "hide",
              n = !this.props.stream.nAppIDVOD,
              c = n;
            let M = Number.parseInt(
              "" +
                Pi.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nViewerCount,
            );
            return (0, l.jsxs)("div", {
              className: (0, yi.A)(rr().viewer_bar, "viewer_bar"),
              children: [
                (0, l.jsxs)("div", {
                  className: (0, yi.A)(rr().viewer_count, "viewer_count"),
                  children: [(0, l.jsx)(Xi.y_e, {}), (0, Xe.Dq)(M)],
                }),
                (0, l.jsxs)("div", {
                  className: (0, yi.A)(rr().viewer_links, "viewer_links"),
                  children: [
                    !!(w && !r && this.props.bMultistream) &&
                      (0, l.jsx)("div", {
                        className: rr().chat_link,
                        children: (0, l.jsx)("a", {
                          href: "#",
                          className: rr().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, B.we)(
                            "#sale_three_section_show_streams",
                          ),
                        }),
                      }),
                    w &&
                      (0, l.jsxs)("div", {
                        className: rr().chat_link,
                        children: [
                          (0, l.jsx)(Xi.ROZ, {}),
                          (0, l.jsx)("a", {
                            href: "#",
                            className: rr().ChatToggle,
                            onClick: this.OnToggleChat,
                            children: (0, B.we)(
                              r
                                ? "#sale_three_section_show_chat"
                                : "#sale_three_section_hide_chat",
                            ),
                          }),
                        ],
                      }),
                    c &&
                      (0, l.jsxs)("div", {
                        className: rr().chat_link,
                        children: [
                          (0, l.jsx)(Xi.SYj, {}),
                          (0, l.jsx)("a", {
                            href: "#",
                            className: rr().ChatToggle,
                            onClick: (p) =>
                              (0, Ft.pg)(
                                (0, l.jsx)(jt, {
                                  steamid: this.props.stream.steamid,
                                }),
                                (0, xt.uX)(p),
                              ),
                            children: (0, B.we)("#Broadcast_ShareBroadcast"),
                          }),
                        ],
                      }),
                    (0, l.jsx)(L.he, {
                      toolTipContent: (0, B.we)(
                        "#StoreBroadcast_Change_store_Broadcast_settings",
                      ),
                      children: (0, l.jsx)("a", {
                        href:
                          Y.TS.STORE_BASE_URL +
                          "account/preferences/#store_broadcast_settings",
                        target: Y.TS.IN_CLIENT ? void 0 : "_blank",
                        className: rr().settings_link,
                        children: (0, l.jsx)(Xi.wB_, {}),
                      }),
                    }),
                    n && (0, l.jsx)(At, { ...this.props }),
                  ],
                }),
                !!this.props.chatAnnouncementGivewayGID &&
                  (0, l.jsx)(We, {
                    gidGiveaway: this.props.chatAnnouncementGivewayGID,
                    stream: this.props.stream,
                  }),
              ],
            });
          }
        };
        Qi([ki.oI], ne.prototype, "OnToggleChat", 1),
          Qi([ki.oI], ne.prototype, "onWatchBroadcastPage", 1),
          (ne = Qi([m.PA], ne));
        class Ye extends F.Component {
          render() {
            let r = this.props.ImgUrl;
            return (0, l.jsxs)("div", {
              className: rr().SidePanelBackground,
              children: [
                r &&
                  (0, l.jsx)("img", {
                    className: rr().side_panels,
                    src: this.props.ImgUrl,
                  }),
                !r && (0, l.jsx)("div", { className: rr().side_panels }),
              ],
            });
          }
        }
        const Ze = (0, m.PA)((w) => {
          const { steamIDBroadcast: r } = w;
          let n = Pi.es.GetOrCreateBroadcastInfo(r).m_nAppID;
          n = n != Pi.fO ? n : 0;
          const c = (0, Ee.$5)(n),
            { data: M } = (0, _i.J$)(c);
          return (0, l.jsxs)("div", {
            className: [rr().PopOutVideoTitleBar, rr().NoSeslect].join(" "),
            children: [
              M
                ? (0, l.jsx)(fe.u, {
                    id: c,
                    className: rr().PopOutVideoTitleText,
                    children: (0, B.we)("#StoreBroadcast_Detault_popout_Title"),
                  })
                : (0, l.jsx)("div", {
                    className: rr().PopOutVideoTitleText,
                    children: (0, B.we)("#StoreBroadcast_Detault_popout_Title"),
                  }),
              (0, l.jsx)(L.he, {
                toolTipContent: (0, B.we)(
                  "#StoreBroadcast_close_broadcast_popup",
                ),
                children: (0, l.jsx)("button", {
                  className: rr().PopOutVideoCloseButton,
                  onClick: w.OnPreventPopup,
                  children: (0, l.jsx)(Xi.X, {}),
                }),
              }),
            ],
          });
        });
        function Lt(w, r) {
          const n = Pi.es.GetOrCreateBroadcastInfo(r.steamid).m_nAppID,
            c = Ke.A.Get().GetApp(n),
            M = w && c?.GetAssets()?.GetHeaderURL();
          return parseInt(
            M
              ? rr().strStreamIconCapsuleArtHeight
              : rr().strStreamIconScreenshotArtHeight,
          );
        }
        function kt(w) {
          const {
              curStream: r,
              onStreamSelect: n,
              fnFilterStreams: c,
              bShowCapsuleArt: M,
              broadcastEmbedContext: p,
            } = w,
            X = (0, F.useRef)(void 0),
            Sr = (0, F.useMemo)(() => {
              const _r = xi.j
                .Get()
                .GetStreams(p)
                .filter((ji) => !c || c(ji));
              return (0, xi.MU)(_r), _r;
            }, [p, c]);
          return (
            (0, F.useEffect)(() => {
              if (X && X.current) {
                const _r = Sr.map(
                  (ji) => Pi.es.GetOrCreateBroadcastInfo(ji.steamid).m_nAppID,
                ).filter(Boolean);
                Ke.A.Get()
                  .QueueMultipleAppRequests(_r, { include_assets: !0 })
                  .then(() => {
                    if (X.current) {
                      let ji = 0;
                      for (const Ai of Sr) {
                        if (r.accountid == Ai.accountid) break;
                        ji += Lt(M, Ai);
                      }
                      X.current.scrollTop = ji;
                    }
                  });
              }
            }, [Sr, M, r.accountid, X]),
            (0, l.jsx)("div", {
              ref: X,
              className: (0, yi.A)({
                [rr().side_panels]: !0,
                side_panels: !0,
                [rr().multistream]: !0,
                [rr().scrollingstreams]: Sr.length > 3,
              }),
              children: (0, l.jsx)("div", {
                className: rr().MultiStreamCtn,
                children: Sr.map((_r) =>
                  (0, l.jsx)(
                    Nt,
                    {
                      stream: _r,
                      bSelected: r.accountid == _r.accountid,
                      onStreamSelect: n,
                      bShowCapsuleArt: M,
                    },
                    _r.accountid ?? _r.steamid,
                  ),
                ),
              }),
            })
          );
        }
        function Nt(w) {
          const {
            onStreamSelect: r,
            bSelected: n,
            stream: c,
            bShowCapsuleArt: M,
          } = w;
          let p = (0, e.q3)(
            () => Pi.es.GetOrCreateBroadcastInfo(c.steamid).m_nAppID,
          );
          p = p != Pi.fO ? p : 0;
          const X = (0, Ee.$5)(p),
            { data: Sr } = (0, _i.J$)(X),
            { data: _r } = (0, _i.lv)(X);
          if (!(0, xi.fn)(c)) return null;
          const ji = M && _r && (0, Ne.b0)(_r, "header"),
            Ai = Number.parseInt("" + c.viewer_count),
            $i = !Number.isNaN(Ai),
            Li = !!c.nAppIDVOD && Sr?.name;
          return (0, l.jsxs)("div", {
            className: (0, yi.A)({
              [rr().stream_icon_and_viewer_container]: !0,
              [rr().stream_featured]:
                c.current_selection_priority == Dt.mY.k_eFeatured,
              [rr().display_capsule_art]: !!ji,
            }),
            children: [
              (0, l.jsx)(fe.j, {
                id: X,
                hoverClassName: rr().StreamCapsule,
                children: (0, l.jsx)(gt.K, {
                  className: (0, yi.A)(
                    rr().stream_icon_container,
                    n && rr().stream_selected,
                  ),
                  onClick: () => r && r(c),
                  rootMargin: "100px 0px 100px 0px",
                  children: (0, l.jsx)(Kt, {
                    strThumbnail: c.thumbnail_http_address,
                    bSelected: n,
                    strCapsuleArtURL: ji,
                  }),
                }),
              }),
              (0, l.jsx)("div", {
                className: (0, yi.A)(rr().viewer_count, !$i && rr().vod_title),
                children: $i
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(Xi.y_e, {}),
                        (0, l.jsx)("div", {
                          className: rr().ViewerNum,
                          children: (0, Xe.Dq)(Ai),
                        }),
                      ],
                    })
                  : Li,
              }),
            ],
          });
        }
        function Kt(w) {
          const { strCapsuleArtURL: r, strThumbnail: n, bSelected: c } = w,
            M = c ? rr().stream_icon_selected : rr().stream_icon;
          if (r) {
            const p = [r];
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("img", {
                  className: (0, yi.A)(M, rr().stream_icon_hide_on_hover),
                  src: r,
                }),
                (0, l.jsx)(ct.o, {
                  className: (0, yi.A)(M, rr().stream_icon_show_on_hover),
                  srcs: p,
                }),
              ],
            });
          } else return (0, l.jsx)("img", { className: M, src: n });
        }
        function Xt(w) {
          const { stream: r, orientation: n } = w,
            c = n == "below",
            [M, p] = (0, e.q3)(() => [
              Pi.es.GetBroadcast(r.steamid),
              Pi.es.GetBroadcast(r.steamid)?.m_ulBroadcastID,
            ]),
            X = (0, e.q3)(() => r.steamid);
          return M
            ? (0, l.jsx)("div", {
                className: (0, yi.A)({
                  [rr().chat_below_container]: c,
                  [rr().chat_rightside_container]: !c,
                  [rr().store_chat_ctn]: !0,
                }),
                children: (0, l.jsx)("div", {
                  className: rr().ChatContainer,
                  children: (0, l.jsx)(Si, {
                    emoticonStore: xi.MX,
                    watchLocation: ir.nn.fe,
                    steamID: X,
                    broadcastID: p,
                  }),
                }),
              })
            : null;
        }
      },
      7132: (fi, hi, g) => {
        "use strict";
        g.r(hi),
          g.d(hi, {
            BroadcastDetails: () => Br,
            LinkOverlay: () => ti,
            default: () => G,
          });
        var l = g(7850),
          ur = g(14947),
          f = g(75844),
          m = g(90626),
          e = g(16346),
          F = g(41301),
          Mr = g(83482),
          Z = g(22950),
          ir = g(10142),
          j = g(30096),
          yr = g(8323),
          E = Object.defineProperty,
          bi = Object.getOwnPropertyDescriptor,
          Kr = (u, o, h, z) => {
            for (
              var v = z > 1 ? void 0 : z ? bi(o, h) : o, x = u.length - 1, P;
              x >= 0;
              x--
            )
              (P = u[x]) && (v = (z ? P(o, h, v) : P(v)) || v);
            return z && v && E(o, h, v), v;
          };
        class Cr extends m.Component {
          m_elCanvas = null;
          m_Context = null;
          m_schUpdate = new yr.LU();
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
          BindCanvasRef(o) {
            this.m_elCanvas = o;
          }
          updateCanvas() {
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let o = this.props.scaleFactor || [1, 1],
              h = this.props.elementRef,
              z = this.props.updateRate;
            const v = this.m_elCanvas.getContext("2d");
            if (!v) return;
            this.m_Context = v;
            let x = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              P = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = x),
              (this.m_elCanvas.height = P),
              (this.props.blurAmount ?? 0) > 0 &&
                (v.filter = "blur(" + this.props.blurAmount + "px)");
            let H = () => {
              v.drawImage(h, 0, 0, x * o[0], P * o[1]),
                z > 0 && this.m_schUpdate.Schedule(z, H);
            };
            H(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, l.jsx)("canvas", {
              id: this.props.id,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        Kr([j.oI], Cr.prototype, "BindCanvasRef", 1),
          Kr([j.oI], Cr.prototype, "updateCanvas", 1);
        var b = g(34360),
          a = g(16569),
          t = g(90740),
          Q = g(36707);
        const Xr = 500;
        class mr extends m.Component {
          render() {
            let {
              keyExtractor: o,
              style: h,
              duration: z = Xr,
              className: v,
              children: x,
              childRef: P,
              ...H
            } = this.props;
            const ni = { ...(h || {}), transitionDuration: `${z / 1e3}s` };
            return (0, l.jsx)(a.A, {
              ...H,
              className: (0, Q.A)("crossfade", v),
              children: (0, l.jsx)(
                t.A,
                {
                  nodeRef: P,
                  classNames: "crossfade-anim",
                  timeout: z,
                  style: ni,
                  children: x,
                },
                o(),
              ),
            });
          }
        }
        function U(u) {
          const { src: o, ...h } = u,
            z = { backgroundImage: `url(${o})` },
            v = m.useRef(null);
          return (0, l.jsx)(mr, {
            style: z,
            keyExtractor: () => o,
            childRef: v,
            ...h,
            children: (0, l.jsx)("div", { ref: v, className: "crossfade-img" }),
          });
        }
        var y = g(61431),
          O = g(79590),
          K = g(79167),
          N = g(36118),
          ar = g(53107),
          ii = g(82734),
          A = g(18210),
          ui = g(19730),
          ei = g(13854),
          k = g(3166),
          W = g(6600),
          tr = g(48937),
          fr = g(15527),
          I = g.n(fr),
          $ = g(85599),
          nr = Object.defineProperty,
          hr = Object.getOwnPropertyDescriptor,
          zr = (u, o, h, z) => {
            for (
              var v = z > 1 ? void 0 : z ? hr(o, h) : o, x = u.length - 1, P;
              x >= 0;
              x--
            )
              (P = u[x]) && (v = (z ? P(o, h, v) : P(v)) || v);
            return z && v && nr(o, h, v), v;
          };
        function si() {
          return (0, l.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, A.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const jr = (0, f.PA)((u) => {
          let o = u.video;
          if (o && (o.IsBroadcastClip() || o.IsBroadcastVOD())) return null;
          let h = Z.fK.Loading,
            z = "";
          if (o) {
            (h = o.GetBroadcastState()), (z = o.GetBroadcastStateDescription());
            let x = o.IsBuffering();
            h == Z.fK.Unlocking && ((h = Z.fK.Loading), (z = "")),
              h == Z.fK.Ready && x && ((h = Z.fK.Loading), (z = ""));
          }
          if (
            (o && h != Z.fK.Error && o.GetUserInputNeeded()) ||
            h == Z.fK.Ready
          )
            return null;
          let v = h == Z.fK.Loading;
          return (0, l.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
            children: [
              v && (0, l.jsx)($.t, {}),
              !v &&
                (0, l.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: z,
                }),
            ],
          });
        });
        class br extends m.Component {
          OnClick() {
            Z.es.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, l.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, l.jsx)(N.jGG, {}),
                (0, l.jsx)("span", {
                  children: (0, A.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        zr([j.oI], br.prototype, "OnClick", 1);
        var S = Object.defineProperty,
          Ui = Object.getOwnPropertyDescriptor,
          er = (u, o, h, z) => {
            for (
              var v = z > 1 ? void 0 : z ? Ui(o, h) : o, x = u.length - 1, P;
              x >= 0;
              x--
            )
              (P = u[x]) && (v = (z ? P(o, h, v) : P(v)) || v);
            return z && v && S(o, h, v), v;
          };
        let ri = class extends m.Component {
          constructor(u) {
            super(u);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let u = this.props.stats;
            return (0, l.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, l.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, l.jsx)(N.sED, {}),
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, l.jsx)(cr, { stats: u }),
              ],
            });
          }
        };
        er([j.oI], ri.prototype, "HideStats", 1), (ri = er([f.PA], ri));
        let cr = class extends m.Component {
          constructor(u) {
            super(u);
          }
          createBufferedRange(u) {
            let o = this.props.stats,
              h = [],
              z = u ? "vidbuf" : "audbuf",
              v = u
                ? o.GetNumBufferedVideoRanges()
                : o.GetNumBufferedAudioRanges();
            if (v > 0)
              for (let x = 0; x < v; ++x) {
                let P = (0, A.we)(
                    u
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    x,
                  ),
                  H = u
                    ? o.GetBufferedVideoSegmentForDisplay(x)
                    : o.GetBufferedAudioSegmentForDisplay(x);
                h.push(
                  (0, l.jsxs)(
                    "div",
                    {
                      children: [
                        P,
                        " ",
                        (0, l.jsx)("span", {
                          className: "videoStatsValue",
                          children: H,
                        }),
                      ],
                    },
                    z + x,
                  ),
                );
              }
            else {
              let x = (0, A.we)(
                u
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              h.push((0, l.jsx)("div", { children: x }, z + "none"));
            }
            return h;
          }
          render() {
            let u = this.props.stats;
            return (0, l.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, l.jsxs)("div", {
                    children: [
                      (0, A.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, l.jsx)("span", {
                        className: "videoStatsValue",
                        children: u.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, l.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [u.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, l.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [u.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: u.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        cr = er([f.PA], cr);
        var gr = g(82581),
          or = Object.defineProperty,
          mi = Object.getOwnPropertyDescriptor,
          q = (u, o, h, z) => {
            for (
              var v = z > 1 ? void 0 : z ? mi(o, h) : o, x = u.length - 1, P;
              x >= 0;
              x--
            )
              (P = u[x]) && (v = (z ? P(o, h, v) : P(v)) || v);
            return z && v && or(o, h, v), v;
          };
        class Oi extends m.Component {
          m_elSettingsButton;
          m_SettingsButtonPos;
          m_elClickListener = null;
          m_elSettingsPanel = null;
          m_elSubtitlesButton = m.createRef();
          m_elSubtitlesPanel = m.createRef();
          m_SubtitlesButtonPos;
          constructor(o) {
            super(o), (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
          }
          OnVideoControlClick(o) {
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                o.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnSubtitlesClick(o) {
            this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
              (this.m_SubtitlesButtonPos = [
                this.m_elSubtitlesButton.current?.offsetLeft,
                this.m_elSubtitlesButton.current?.offsetTop,
              ]),
              (this.m_elClickListener =
                o.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnMouseUp(o) {
            this.m_elClickListener?.removeEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            ),
              (0, ii.id)(this.m_elSettingsPanel, o.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, ii.id)(this.m_elSubtitlesPanel.current, o.target) ||
                this.setState({ bSubtitlesOpen: !1 });
          }
          bindSettingsButton(o) {
            this.m_elSettingsButton = o;
          }
          BindSettingsPanel(o) {
            this.m_elSettingsPanel = o;
          }
          OnShowStats(o) {
            this.props.onShowStats(o),
              this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
          }
          render() {
            let o = !1,
              h = !1;
            const { video: z, actions: v } = this.props;
            let x,
              P = [],
              H = 0,
              ni = (0, l.jsx)(
                "div",
                { className: "settingsMenuSeparator" },
                "separator",
              );
            const qr = 260,
              Gr = 32;
            if (
              (this.state.bSettingsOpen &&
                ((o = !0),
                (x = this.props.video.GetVideoRepresentations()),
                (P = x.map((C) =>
                  (0, l.jsx)(
                    gr.n,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(C),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: C.selected,
                      children: C.displayName,
                    },
                    C.id,
                  ),
                )),
                P.push(ni),
                P.push(
                  (0, l.jsxs)(
                    gr.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, A.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (H = 0 - (P.length * 21 + Gr))),
              this.state.bSubtitlesOpen)
            ) {
              (h = !0),
                (P = []),
                P.push(
                  (0, l.jsx)(
                    gr.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, A.we)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let C = 0;
                C < this.props.video.ListSubtitles().length;
                C++
              ) {
                const dr = this.props.video.ListSubtitles()[C];
                P.push(
                  (0, l.jsx)(
                    gr.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(dr.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: dr.mode === "showing",
                      children: dr.label,
                    },
                    dr.language,
                  ),
                );
              }
              H = 0 - (qr + Gr);
            }
            const Fr =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, l.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                Fr &&
                  (0, l.jsx)("div", {
                    className:
                      "videoControlButton" +
                      (Fr ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, l.jsx)(N.N8C, {}),
                  }),
                (0, l.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (o ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, l.jsx)(N.wB_, {}),
                }),
                (0, l.jsx)(wr, { video: z }),
                v &&
                  v.map((C) =>
                    (0, l.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: C,
                      },
                      C.key,
                    ),
                  ),
                o &&
                  (0, l.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: H,
                    },
                    children: (0, l.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: P,
                    }),
                  }),
                h &&
                  (0, l.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: qr + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: H,
                    },
                    children: (0, l.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: P,
                    }),
                  }),
              ],
            });
          }
        }
        q([j.oI], Oi.prototype, "OnVideoControlClick", 1),
          q([j.oI], Oi.prototype, "OnSubtitlesClick", 1),
          q([j.oI], Oi.prototype, "OnMouseUp", 1),
          q([j.oI], Oi.prototype, "bindSettingsButton", 1),
          q([j.oI], Oi.prototype, "BindSettingsPanel", 1),
          q([j.oI], Oi.prototype, "OnShowStats", 1);
        const wi = !0;
        let wr = class extends m.Component {
          constructor(u) {
            super(u), (0, ur.Gn)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = wi;
          m_schHideSlider = new yr.LU();
          m_bChildDragging = !1;
          m_bMouseOver = !1;
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let u = this.props.video,
              o = u.IsMuted();
            u.SetMute(!o), u.GetVolume() < 0.01 && u.SetVolume(0.5);
          }
          OnMouseEnter(u) {
            (this.m_bShowSlider = !0),
              (this.m_bMouseOver = !0),
              this.m_schHideSlider.Cancel();
          }
          OnMouseLeave(u) {
            (this.m_bMouseOver = !1), this.ScheduleHide();
          }
          OnChildDrag(u) {
            (this.m_bChildDragging = u), this.ScheduleHide();
          }
          ScheduleHide() {
            this.m_bMouseOver ||
              this.m_bChildDragging ||
              this.m_schHideSlider.Schedule(
                this.k_nHideSliderTimeout,
                () => (this.m_bShowSlider = wi),
              );
          }
          render() {
            let u = this.props.video,
              o = u.IsMuted(),
              h = u.GetVolume() * 100,
              z = "videoControlButton";
            h > 65
              ? (z += " HighestVolume")
              : h > 45
                ? (z += " HighVolume")
                : h < 46 && h > 24
                  ? (z += " MedVolume")
                  : h < 25 && (z += " LowVolume");
            let v = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (v += " ShowVolumeSlider"),
              o && (v += " muted"),
              (0, l.jsx)("div", {
                className: v,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, l.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, l.jsx)("div", {
                      className: z,
                      onClick: this.ToggleMute,
                      children: (0, l.jsx)(N.fSs, {}),
                    }),
                    (0, l.jsx)(pr, { video: u, onDrag: this.OnChildDrag }),
                  ],
                }),
              })
            );
          }
        };
        q([ur.sH], wr.prototype, "m_bShowSlider", 2),
          q([j.oI], wr.prototype, "ToggleMute", 1),
          q([j.oI], wr.prototype, "OnMouseEnter", 1),
          q([j.oI], wr.prototype, "OnMouseLeave", 1),
          q([j.oI], wr.prototype, "OnChildDrag", 1),
          (wr = q([f.PA], wr));
        let pr = class extends m.Component {
          constructor(u) {
            super(u), (0, ur.Gn)(this);
          }
          m_elSlider = null;
          m_nVolumeStartOfDrag = 0;
          OnMouseDown(u) {
            let o = u.currentTarget;
            (this.m_elSlider = o),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(o, u.clientX),
              o.ownerDocument.defaultView?.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              o.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.props.onDrag(!0);
          }
          OnMouseMove(u) {
            this.m_elSlider &&
              this.SetVolumeWithCoord(this.m_elSlider, u.clientX);
          }
          OnMouseUp(u) {
            if (!this.m_elSlider) return;
            this.SetVolumeWithCoord(this.m_elSlider, u.clientX);
            let o = this.props.video;
            o.IsMuted() && o.SetVolume(this.m_nVolumeStartOfDrag),
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
          SetVolumeWithCoord(u, o) {
            let h = u.getBoundingClientRect(),
              z = ei.Fu(o, h.left, h.right, 0, 1),
              v = ei.OQ(z, 0, 1),
              x = this.props.video;
            x.SetMute(z < 0.01), x.SetVolume(v);
          }
          render() {
            let u = this.props.video,
              o = u.GetVolume() * 100;
            u.IsMuted() && (o = 0);
            let z = { left: `${o}%` },
              v = { width: `${o}%` };
            return (0, l.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, l.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
                (0, l.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: v,
                }),
                (0, l.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: z,
                }),
              ],
            });
          }
        };
        q([j.oI], pr.prototype, "OnMouseDown", 1),
          q([j.oI], pr.prototype, "OnMouseMove", 1),
          q([j.oI], pr.prototype, "OnMouseUp", 1),
          q([ur.XI], pr.prototype, "SetVolumeWithCoord", 1),
          (pr = q([f.PA], pr));
        var $r = g(43434),
          Yr = Object.defineProperty,
          Zr = Object.getOwnPropertyDescriptor,
          D = (u, o, h, z) => {
            for (
              var v = z > 1 ? void 0 : z ? Zr(o, h) : o, x = u.length - 1, P;
              x >= 0;
              x--
            )
              (P = u[x]) && (v = (z ? P(o, h, v) : P(v)) || v);
            return z && v && Yr(o, h, v), v;
          };
        const Ur = 3200,
          Or = 15;
        let G = class extends m.Component {
          m_schHideControls = new yr.LU();
          m_schUnmountControls = new yr.LU();
          m_elVideo = null;
          m_elBroadcastPlayer = null;
          m_bMouseDown = !1;
          m_elMouseDown = null;
          m_listeners = new yr.Ji();
          constructor(u) {
            super(u),
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
            let u = this.state.video;
            u &&
              (Z.es.StopVideo(u),
              this.setState({ video: null }),
              this.props.fnSetBroadcastVideo?.(null));
          }
          IsMuted() {
            let u = this.state.video;
            return !u || u.IsMuted();
          }
          StopPlaybackTillUserInput() {
            let u = this.state.video;
            u && u.StopPlaybackTillUserInput();
          }
          componentDidUpdate(u, o) {
            !o.bMountControls && this.state.bMountControls
              ? setTimeout(() => {
                  this.setState((z) => ({
                    bControlsVisible: z.bMountControls,
                  }));
                }, 15)
              : o.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== u.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const h = this.props.nAppIDVOD;
            h &&
              (o.strInitialCapsuleImageUrl === void 0 || u.nAppIDVOD != h) &&
              ir.A.Get()
                .QueueAppRequest(h, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const v =
                    ir.A.Get().GetApp(h)?.GetAssets()?.GetMainCapsuleURL() ||
                    "";
                  this.setState({ strInitialCapsuleImageUrl: v });
                });
          }
          componentWillUnmount() {
            this.m_listeners.Unregister(),
              this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.StopVideo();
          }
          BindBroadcastPlayerRef(u) {
            this.m_listeners.Unregister(),
              (this.m_elBroadcastPlayer = u),
              u &&
                (this.m_listeners.AddEventListener(
                  u,
                  "fullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  u,
                  "mozfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  u,
                  "webkitfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  u,
                  "msfullscreenchange",
                  this.OnFullscreenChange,
                ));
          }
          BindVideoRef(u) {
            let o = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? u &&
                  (o = Z.es.CreateBroadcastVideo(
                    u,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? u &&
                    (o = Z.es.CreateClipVideo(
                      u,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    u &&
                    ((o = Z.es.CreateVODVideo(
                      u,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      o.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              o &&
                (this.props.bStartMuted && o.SetMute(!0),
                this.props.bStartWithSubtitles && o.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? o.StopPlaybackTillUserInput()
                  : o.Play()),
              this.setState({ video: o }),
              this.props.fnSetBroadcastVideo?.(o),
              (this.m_elVideo = u);
          }
          OnMouseDown(u) {
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = u.currentTarget),
              this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
          OnMouseUp(u) {
            (this.m_bMouseDown = !1),
              this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.m_schHideControls.Schedule(Ur, this.HideControls);
          }
          OnMouseMove(u) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({ bControlsVisible: !0 })
                : this.setState({ bMountControls: !0 }),
              this.m_schHideControls.Schedule(Ur, this.HideControls);
          }
          OnMouseLeave(u) {
            this.HideControls();
          }
          HideControls() {
            this.state.bControlsVisible &&
              !this.m_bMouseDown &&
              this.setState({ bControlsVisible: !1 });
          }
          UmountControls() {
            this.setState((u) =>
              !u.bControlsVisible && u.bMountControls
                ? { bMountControls: !1 }
                : null,
            );
          }
          ShowStatsView() {
            let u = this.state.video;
            if (!u) return;
            this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), u.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(u) {
            this.state.bFullscreen ||
              ((0, e.lX)(
                (0, l.jsx)(b.tz, { children: this.GetContextMenuItems() }),
                u,
              ),
              u.preventDefault());
          }
          ToggleStatsView(u) {
            let o = !this.state.bShowStats;
            this.setState({ bShowStats: o });
            let h = this.state.video;
            h && h.SetStatsViewIsVisible(o);
          }
          ShowStorePage(u) {
            let o = this.state.video;
            if (!o || !this.props.onOpenLinkInNewWindow) return;
            let h = o.GetBroadcastInfo();
            if (!h) return;
            let z = (0, Mr.k2)(`${k.TS.STORE_BASE_URL}app/${h.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(u, z), u.stopPropagation();
          }
          GetContextMenuItems() {
            let u = [],
              o = this.state.video;
            if (!o) return u;
            let h = o.GetBroadcastInfo();
            return (
              u.push(
                (0, l.jsx)(
                  b.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (z) => {
                      this.ToggleStatsView(z);
                    },
                    children: (0, A.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              h &&
                h.m_strAppId != "0" &&
                Number.parseInt(h.m_strAppId) != Z.fO &&
                u.push(
                  (0, l.jsx)(
                    b.kt,
                    {
                      onSelected: (z) => {
                        this.ShowStorePage(z);
                      },
                      children: (0, A.we)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
                  ),
                ),
              u
            );
          }
          CloseStats() {
            let u = this.state.video;
            u &&
              this.state.bShowStats &&
              (this.setState({ bShowStats: !1 }), u.SetStatsViewIsVisible(!1));
          }
          OnToggleFullscreen() {
            this.m_elBroadcastPlayer &&
              ((0, ii.ww)(this.m_elBroadcastPlayer)
                ? (0, ii.MS)(this.m_elBroadcastPlayer)
                : (0, ii.tl)(
                    this.m_elBroadcastPlayer,
                    this.m_elVideo ?? void 0,
                  ));
          }
          OnFullscreenChange(u) {
            if (!this.m_elBroadcastPlayer) return;
            let o = (0, ii.ww)(this.m_elBroadcastPlayer);
            this.setState({ bFullscreen: o });
          }
          BHideVideoControls() {
            let u = this.state.video;
            return !u || u.GetUserInputNeeded()
              ? !0
              : Z.es.GetBroadcastState(u) == Z.fK.Error;
          }
          render() {
            const u = this.state.video,
              o = u && u.IsPaused(),
              h = u && u.BHasDASHStats() && this.state.bShowStats,
              z = !!(u && u.IsReplay()),
              v = this.state.bMountControls,
              x = this.state.bControlsVisible || o,
              P = !!(u && u.GetUserInputNeeded()),
              H = u?.GetDASHPlayerStats(),
              ni =
                u?.IsBroadcastVOD() &&
                P &&
                this.state.strInitialCapsuleImageUrl;
            let qr = "videoContainer";
            x || (qr += " HidePlayerControls"),
              o && (qr += " VideoPaused"),
              this.state.bFullscreen && (qr += " fullscreenVideo"),
              this.props.classes && (qr += " " + this.props.classes);
            let Gr = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (Gr = Gr.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                Gr.push(
                  (0, l.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, A.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              Gr.push(
                (0, l.jsx)(
                  "div",
                  {
                    title: (0, A.we)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const xr = v && !this.BHideVideoControls(),
              Fr = v && !this.state.bFullscreen,
              C =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, l.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: qr,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                C &&
                  (0, l.jsx)("div", {
                    className: I().BroadcastContext,
                    children: C,
                  }),
                z && (0, l.jsx)(si, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, l.jsx)(Cr, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, l.jsx)("video", {
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
                  ? (0, l.jsx)(ti, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                ni &&
                  (0, l.jsx)("img", {
                    loading: "lazy",
                    className: (0, Q.A)(
                      I().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                xr &&
                  u &&
                  (0, l.jsx)(Er, {
                    video: u,
                    actions: Gr,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                Fr && (0, l.jsx)(Ar, { onClick: this.props.onRequestClose }),
                h &&
                  H &&
                  (0, l.jsx)(ri, { stats: H, closeStats: this.CloseStats }),
                (0, l.jsx)(jr, { video: u }),
                P && u && (0, l.jsx)(br, { video: u }),
              ],
            });
          }
        };
        D([j.oI], G.prototype, "BindBroadcastPlayerRef", 1),
          D([j.oI], G.prototype, "BindVideoRef", 1),
          D([j.oI], G.prototype, "OnMouseDown", 1),
          D([j.oI], G.prototype, "OnMouseUp", 1),
          D([j.oI], G.prototype, "OnMouseMove", 1),
          D([j.oI], G.prototype, "OnMouseLeave", 1),
          D([j.oI], G.prototype, "HideControls", 1),
          D([j.oI], G.prototype, "UmountControls", 1),
          D([j.oI], G.prototype, "ShowStatsView", 1),
          D([j.oI], G.prototype, "OnContextMenu", 1),
          D([j.oI], G.prototype, "ToggleStatsView", 1),
          D([j.oI], G.prototype, "ShowStorePage", 1),
          D([j.oI], G.prototype, "CloseStats", 1),
          D([j.oI], G.prototype, "OnToggleFullscreen", 1),
          D([j.oI], G.prototype, "OnFullscreenChange", 1),
          (G = D([f.PA], G));
        let Er = class extends m.Component {
          render() {
            const { video: u } = this.props;
            if (!u) return null;
            let o = u.has_segments;
            return (0, l.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, l.jsx)(Br, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, l.jsxs)("div", {
                  className: "videoControlsBottom" + (o ? "" : " noSegments"),
                  children: [
                    (0, l.jsx)(sr, {
                      video: u,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, l.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, l.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, l.jsx)(Dr, { video: u }),
                        (0, l.jsx)(di, { video: u }),
                        (0, l.jsx)(Oi, {
                          video: u,
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
        Er = D([f.PA], Er);
        class Ar extends m.PureComponent {
          render() {
            return this.props.onClick
              ? (0, l.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, l.jsx)(N.sED, {}),
                })
              : null;
          }
        }
        class Dr extends m.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-Or);
          }
          OnJumpForward() {
            this.props.video.JumpTime(Or);
          }
          render() {
            let o = this.props.video,
              h = o.CanSeek();
            return (0, l.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, l.jsx)(vr, { video: o }),
                h &&
                  (0, l.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, l.jsx)(N.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, l.jsx)("div", {
                        className: "jumpAheadValue",
                        children: Or,
                      }),
                    ],
                  }),
                (0, l.jsx)(Wr, { video: o }),
                h &&
                  (0, l.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, l.jsx)(N.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: "jumpAheadValue",
                        children: Or,
                      }),
                    ],
                  }),
                h && (0, l.jsx)(li, { video: o }),
              ],
            });
          }
        }
        D([j.oI], Dr.prototype, "OnJumpBackward", 1),
          D([j.oI], Dr.prototype, "OnJumpForward", 1);
        const di = (0, f.PA)((u) => {
          if (u.video.IsBroadcastClip() || u.video.IsBroadcastVOD())
            return null;
          const o = (z) => {
            u.video.JumpToLiveEdge();
          };
          let h = u.video.IsOnLiveEdge();
          return (0, l.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, l.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (h ? " isLiveEdge" : ""),
              onClick: h ? void 0 : o,
              children: [
                (0, l.jsx)(N.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, l.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, A.we)(
                    h
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let Wr = class extends m.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let o = this.props.video.IsPaused();
            return (0, l.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: o ? (0, l.jsx)(N.jGG, {}) : (0, l.jsx)(N.vRz, {}),
            });
          }
        };
        D([j.oI], Wr.prototype, "OnTogglePlayPause", 1), (Wr = D([f.PA], Wr));
        let vr = class extends m.Component {
          constructor(u) {
            super(u), (0, ur.Gn)(this), (this.video = u.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const u = this.video;
            if (!u?.has_markers) return;
            let o = u.GetTimelineMarkers(),
              h = u.GetPlaybackTime();
            for (let z = o.length - 1; z >= 0; z--)
              if (!(o[z].nTime >= h)) return o[z].nTime;
          }
          OnJumpToPreviousMarkerClicked(u) {
            let o = this.GetPreviousMarkerTime();
            o !== void 0 && this.props.video.Seek(o - 0.2);
          }
          render() {
            let u = this.props.video.BHasMarkersOrSegments();
            return (0, l.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (u ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, l.jsx)(N.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        D([ur.sH], vr.prototype, "video", 2),
          D([ur.EW], vr.prototype, "has_previous_marker", 1),
          D([j.oI], vr.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (vr = D([f.PA], vr));
        let li = class extends m.Component {
          constructor(u) {
            super(u), (0, ur.Gn)(this), (this.video = u.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const u = this.video;
            if (!u?.has_markers) return;
            let o = u.GetTimelineMarkers(),
              h = u.GetPlaybackTime();
            for (let z = 0; z < o.length; z++)
              if (!(o[z].nTime <= h)) return o[z].nTime;
          }
          OnJumpToNextMarkerClicked(u) {
            let o = this.GetNextMarkerTime();
            o !== void 0 && this.props.video.Seek(o);
          }
          render() {
            let u = this.props.video.BHasMarkersOrSegments();
            return (0, l.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (u ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, l.jsx)(N.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        D([ur.sH], li.prototype, "video", 2),
          D([ur.EW], li.prototype, "has_next_marker", 1),
          D([j.oI], li.prototype, "OnJumpToNextMarkerClicked", 1),
          (li = D([f.PA], li));
        const ci = (u) => {
          let o = () => u.onMouseEnter(u.pos);
          return (0, l.jsx)("div", {
            className: "timelineMarker",
            title: u.label,
            style: { left: u.pos + "%" },
            onMouseEnter: o,
            onMouseLeave: u.onMouseLeave,
            onMouseDown: u.onMouseDown ? u.onMouseDown : void 0,
            children: (0, l.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, l.jsx)(N.Dp6, {}),
            }),
          });
        };
        function Mi(u) {
          let o = u.startPos,
            h = u.endPos,
            z = "",
            v = 1;
          return (
            o < 0 && ((v = (h - o) / 10), (o = 0), (z = " hideFront")),
            (0, l.jsxs)("div", {
              className: "STV_timelineSegment" + z,
              style: { left: o + "%", width: h - o + "%", opacity: v },
              onClick: u.onClick,
              children: [
                (0, l.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: { borderColor: "rgb(" + u.color + ")" },
                }),
                (0, l.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: { color: "rgb(" + u.color + ")" },
                  children: u.label,
                }),
                (0, l.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: { borderColor: "rgb(" + u.color + ")" },
                }),
              ],
            })
          );
        }
        let sr = class extends m.Component {
          m_elSlider = m.createRef();
          m_rectSlider = void 0;
          constructor(u) {
            super(u),
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
          OnMouseDown(u, o) {
            const h = this.m_elSlider.current;
            if (h) {
              u.persist(), (this.m_rectSlider = h.getBoundingClientRect());
              let z = {};
              o === "start"
                ? ((z = { bStartMouseDown: !0 }), u.stopPropagation())
                : o === "end"
                  ? ((z = { bEndMouseDown: !0 }), u.stopPropagation())
                  : (z = { bGrabberMouseDown: !0 }),
                this.setState(z, () => this.AdjustSliderForClientX(u.clientX)),
                h.ownerDocument.defaultView?.addEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                h.ownerDocument.defaultView?.addEventListener(
                  "mouseup",
                  this.OnMouseUp,
                );
            }
          }
          OnMouseMove(u) {
            this.AdjustSliderForClientX(u.clientX);
          }
          OnMouseUp(u) {
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
          OnKeyDown(u) {
            u.keyCode == F.ek
              ? (this.props.video.JumpTime(-1 * Or), u.preventDefault())
              : u.keyCode == F.JI &&
                (this.props.video.JumpTime(1 * Or), u.preventDefault());
          }
          AdjustSliderForClientX(u) {
            const o = this.m_rectSlider;
            if (!o) return;
            let h = this.props.video,
              z = h.GetTimelineStartPos(),
              v = h.GetTimelineStartPos() + h.GetTimelineDuration(),
              x = h.GetTimeAtMousePosition(u, o, z, v);
            const P = 5;
            if (this.state.bStartMouseDown) {
              const H = ei.OQ(x, z, h.m_editorEndTime - P);
              h.m_editorStartTime = H;
            } else if (this.state.bEndMouseDown) {
              const H = ei.OQ(x, h.m_editorStartTime + P, v);
              h.m_editorEndTime = H;
            } else
              x != this.state.nGrabberMouseDownTime &&
                this.setState({ nGrabberMouseDownTime: x });
          }
          OnMouseHoverMove(u) {
            this.AdjustHoverForClientX(u.clientX);
          }
          OnMouseHoverLeave(u) {
            this.setState({ hoverX: 0 });
          }
          AdjustHoverForClientX(u) {
            let o = this.props.video,
              h = o.GetTimelineStartPos(),
              z = o.GetTimelineStartPos() + o.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let v =
              this.m_rectSlider &&
              o.GetTimeAtMousePosition(u, this.m_rectSlider, h, z);
          }
          OnSegmentClick(u) {
            this.props.video.Seek(u);
          }
          OnMarkerMouseEnter(u) {
            this.setState({ nHoverValue: u });
          }
          OnMarkerMouseLeave() {
            this.setState({ nHoverValue: void 0 });
          }
          render() {
            let u = this.props.video,
              o = this.state.bGrabberMouseDown,
              h = u.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                Z.a0.Timeline,
              ),
              z = u.GetPercentOffsetFromTime(
                u.GetPlaybackTime(),
                Z.a0.Timeline,
              ),
              v = u.GetPercentOffsetFromTime(
                u.GetVideoAvailableStartTime(),
                Z.a0.Timeline,
              );
            v < 0.05 && (v = 0);
            let x = ei.OQ(h, 0, 100).toFixed(1) + "%",
              P = ei.OQ(z, 0, 100).toFixed(1) + "%",
              H = ei.OQ(v, 0, 100).toFixed(1) + "%",
              ni = {},
              qr = {},
              Gr = {},
              xr = {};
            o
              ? ((xr.left = x), (ni.width = x), (qr.width = P), (Gr.width = H))
              : ((xr.left = P), (qr.width = P), (Gr.width = H));
            let Fr = (0, tr.ap)(u.GetPlaybackTime()),
              C = (0, tr.ap)(this.state.nHoverValue ?? 0),
              dr = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (dr += " grabberDown"),
              u.IsTimelineMapActive() && (dr += " minimapActive");
            let Pr = "";
            (h = o ? h : z),
              h > 100
                ? (Pr = " grabberOffScreenRight grabberOffscreen")
                : h < 0 && (Pr = " grabberOffScreenLeft grabberOffscreen");
            let kr = [];
            u.GetTimelineMarkers().forEach((Tr, gi) => {
              let ai = u.GetPercentOffsetFromTime(Tr.nTime, Z.a0.Timeline);
              ai < 0 ||
                ai > 100 ||
                kr.push(
                  (0, l.jsx)(
                    ci,
                    {
                      pos: ai,
                      label: Tr.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    gi,
                  ),
                );
            });
            let Nr = [];
            u.GetTimelineSegments().forEach((Tr, gi) => {
              let ai = u.GetPercentOffsetFromTime(Tr.nTimeStart, Z.a0.Timeline);
              if (ai > 100) return;
              let Ir = u.GetPercentOffsetFromTime(Tr.nTimeEnd, Z.a0.Timeline);
              Ir < 0 ||
                Nr.push(
                  (0, l.jsx)(
                    Mi,
                    {
                      startPos: ai,
                      endPos: Ir,
                      label: Tr.strTemplateName,
                      color: Tr.color,
                      onClick: (Hr) => this.OnSegmentClick(Tr.nTimeStart),
                    },
                    gi,
                  ),
                );
            });
            const Qr = u.GetPercentOffsetFromTime(
                u.m_editorStartTime,
                Z.a0.Timeline,
              ),
              zi = u.GetPercentOffsetFromTime(u.m_editorEndTime, Z.a0.Timeline),
              Jr = this.props.bIncludeClipEditor
                ? [
                    (0, l.jsx)(
                      ci,
                      {
                        pos: Qr,
                        label: (0, A.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (Tr) => this.OnMouseDown(Tr, "start"),
                      },
                      "start",
                    ),
                    (0, l.jsx)(
                      ci,
                      {
                        pos: zi,
                        label: (0, A.we)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (Tr) => this.OnMouseDown(Tr, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, l.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, l.jsxs)("div", {
                className: dr,
                children: [
                  (0, l.jsx)("div", { className: "DialogLabel", children: Fr }),
                  (0, l.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: Nr,
                  }),
                  (0, l.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, l.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, l.jsx)("div", {
                          className: "STV_timelineValue",
                          style: ni,
                        }),
                        (0, l.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: qr,
                        }),
                        (0, l.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: Gr,
                        }),
                        kr,
                        Jr,
                        !!this.state.hoverX &&
                          (0, l.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, l.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, l.jsx)("img", {
                                      style: { width: "150px" },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, l.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: C,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, l.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: xr,
                          children: (0, l.jsx)("div", {
                            className: "STV_timelineGrabber" + Pr,
                            children: (0, l.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, l.jsx)(N.apU, {}),
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
        D([j.oI], sr.prototype, "OnMouseDown", 1),
          D([j.oI], sr.prototype, "OnMouseMove", 1),
          D([j.oI], sr.prototype, "OnMouseUp", 1),
          D([j.oI], sr.prototype, "OnKeyDown", 1),
          D([j.oI], sr.prototype, "OnMouseHoverMove", 1),
          D([j.oI], sr.prototype, "OnMouseHoverLeave", 1),
          D([j.oI], sr.prototype, "AdjustHoverForClientX", 1),
          D([j.oI], sr.prototype, "OnSegmentClick", 1),
          D([j.oI], sr.prototype, "OnMarkerMouseEnter", 1),
          D([j.oI], sr.prototype, "OnMarkerMouseLeave", 1),
          (sr = D([f.PA], sr));
        let Br = class extends m.Component {
          state = { info: null };
          static getDerivedStateFromProps(u, o) {
            return (!o.info || o.info.m_steamIDBroadcast !== u.steamID) &&
              (o.info && (Z.es.StopInfo(o.info), (o.info = null)), u.steamID)
              ? { info: Z.es.StartInfo(u.steamID) }
              : null;
          }
          componentWillUnmount() {
            this.state.info && Z.es.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const u = this.props.steamID,
              o = this.props.onLocalStreamChange;
            return o && W.td.stream[u]
              ? (0, l.jsx)(Lr, { value: u, options: W.td.stream, onChange: o })
              : null;
          }
          render() {
            let { info: u } = this.state;
            if (!u) return null;
            let o = "";
            u.m_nViewerCount && (o = (0, ui.Dq)(u.m_nViewerCount));
            let h =
                W.td.bValid && W.td.stream && W.td.stream[u.m_steamIDBroadcast],
              z =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(u.m_strAppId) > 0 || h);
            const v =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              h &&
              W.td.gidEvent;
            return (0, l.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, l.jsx)(U, {
                    className: "broadcastDetailsThumbBlur",
                    src: u.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, l.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    u &&
                      u.m_strAppTitle &&
                      (0, l.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, l.jsx)("span", {
                                className: "AppTitle",
                                children: u.m_strAppTitle,
                              }),
                              u.m_strTitle &&
                                (0, l.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", u.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          o &&
                            (0, l.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, l.jsx)(N.y_e, {}),
                                (0, A.Yp)("#Broadcast_ViewerCount", o),
                              ],
                            }),
                        ],
                      }),
                    h &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, l.jsx)("div", {
                        className: "Actions",
                        children: (0, l.jsx)("div", {
                          onClick: (x) =>
                            this.props.onOpenLinkInNewWindow?.(x, W.td.link),
                          className: "BroadcastLink",
                          children: W.td.linkName,
                        }),
                      }),
                  ],
                }),
                v && (0, l.jsx)(O.m, { gidEvent: W.td.gidEvent }),
                z &&
                  (0, l.jsx)(y.p, {
                    id:
                      W.td.bValid &&
                      W.td.stream &&
                      W.td.stream[u.m_steamIDBroadcast]
                        ? W.td.appID
                        : parseInt(u.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        Br = D([f.PA], Br);
        class Lr extends m.Component {
          showContextMenu(o) {
            const { options: h, value: z, onChange: v } = this.props,
              x = Object.keys(h).map((P) =>
                (0, l.jsx)(
                  b.IK,
                  {
                    onSelected: () => v(P),
                    bChecked: P === z,
                    children: (0, A.we)(h[P]),
                  },
                  P,
                ),
              );
            (0, e.lX)((0, l.jsx)(b.tz, { children: x }), o);
          }
          render() {
            const { value: o, options: h } = this.props,
              z = h[o];
            return (0, l.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, l.jsxs)("span", { children: ["\xA0- ", (0, A.we)(z)] }),
                (0, l.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, l.jsx)(N.GB9, {}),
                }),
              ],
            });
          }
        }
        D([j.oI], Lr.prototype, "showContextMenu", 1);
        let ti = class extends m.Component {
          constructor(u) {
            super(u), (this.state = { sizableRegion: [] });
          }
          async AddLinkRegion() {
            let u = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + u,
              yPosPct: 2.5 + u,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          componentDidUpdate(u) {
            u.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((o, h) => {
                this.LoadLinkRegion(o, h);
              });
          }
          async LoadLinkRegion(u, o) {
            let h = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: u.left,
              yPosPct: u.top,
              widthPct: u.width,
              heightPct: u.height,
              link_url: u.url,
              link_description: u.link_description,
              link_index: u.link_index,
            }),
              await this.setState({ sizableRegion: this.state.sizableRegion });
          }
          OnSaveRegions() {
            let u;
            u = { links: [] };
            for (let o = 0; o < this.state.sizableRegion.length; o++) {
              let h;
              (h = {
                left: Math.floor(this.state.sizableRegion[o].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[o].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[o].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[o].heightPct * 100),
                url: this.state.sizableRegion[o].link_url,
                link_description: this.state.sizableRegion[o].link_description,
                link_index: o,
              }),
                u.links.push(h);
            }
            this.props.onSaveLinkRegions?.(u);
          }
          async DeleteRegion(u) {
            this.state.sizableRegion.splice(u, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          async UpdatePanel(u, o) {
            const h = [...this.state.sizableRegion];
            (h[u] = o),
              this.setState({ sizableRegion: h }, () => this.OnSaveRegions());
          }
          render() {
            return (0, l.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, l.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((u) => {
                          const o = (0, $r.p)(u.url);
                          return (0, l.jsx)(
                            ar.uU,
                            {
                              href: u.url,
                              bForceExternal: o,
                              bUseLinkFilter: o,
                              children: (0, l.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: u.left + "%",
                                  top: u.top + "%",
                                  width: u.width + "%",
                                  height: u.height + "%",
                                },
                                children: (0, l.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [u.link_description, " "],
                                }),
                              }),
                            },
                            u.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((u, o) =>
                        (0, l.jsx)(
                          K.I,
                          {
                            index: o,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: u.xPosPct,
                            yPosPct: u.yPosPct,
                            widthPct: u.widthPct,
                            heightPct: u.heightPct,
                            link_url: u.link_url,
                            link_description: u.link_description,
                          },
                          o * 100 + u.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, l.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, A.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, l.jsx)("div", {
                    children: (0, A.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        D([j.oI], ti.prototype, "AddLinkRegion", 1),
          D([j.oI], ti.prototype, "LoadLinkRegion", 1),
          D([j.oI], ti.prototype, "OnSaveRegions", 1),
          D([j.oI], ti.prototype, "DeleteRegion", 1),
          D([j.oI], ti.prototype, "UpdatePanel", 1),
          (ti = D([f.PA], ti));
      },
      7582: (fi, hi, g) => {
        "use strict";
        g.d(hi, { HD: () => Z, f1: () => Kr, s4: () => Cr, sB: () => bi });
        var l = g(19367),
          ur = g.n(l),
          f = g(90626),
          m = g(59432),
          e = g(47689),
          F = g(77291);
        class Mr {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, m.mm)();
          }
          set nOverrideDateNow(a) {
            (0, m.ai)(a);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, m.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, m.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, m.mm)();
          }
          ParseDevOverrides(a) {
            if (!a || a.length == 0) return;
            new URLSearchParams(a[0] == "?" ? a.substring(1) : a).has("t");
          }
        }
        const Z = new Mr();
        (0, F.V)("g_EventCalendarDevFeatures", Z);
        function ir(b = 1) {
          const [a, t] = React.useState(() => E()),
            Q = useCancelTokenSource("useTimeNowWithOverride"),
            Xr = React.useCallback(() => {
              Q.token.reason || t(E());
            }, []);
          return (
            React.useEffect(() => {
              const mr = 1e3 * b,
                U = Date.now() % mr,
                y = mr - U,
                O = window.setTimeout(Xr, y);
              return () => {
                window.clearTimeout(O);
              };
            }, [a, b, Xr]),
            a
          );
        }
        const yr = Math.floor(new Date().getTime() / 1e3);
        function E() {
          const b = Math.floor(Date.now() / 1e3);
          return Z.nOverrideDateNow ? Z.nOverrideDateNow + (b - yr) : b;
        }
        function bi() {
          return Z.nOverrideDateNow ?? yr;
        }
        function Kr() {
          return f.useMemo(() => bi(), []);
        }
        function Cr() {
          return f.useMemo(() => Z.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      37656: (fi, hi, g) => {
        "use strict";
        g.d(hi, { w: () => mr });
        var l = g(41735),
          ur = g.n(l),
          f = g(14947),
          m = g(65946),
          e = g(90626),
          F = g(27066),
          Mr = g(8323),
          Z = g(30096),
          ir = g(3166),
          j = Object.defineProperty,
          yr = Object.getOwnPropertyDescriptor,
          E = (U, y, O, K) => {
            for (
              var N = K > 1 ? void 0 : K ? yr(y, O) : y, ar = U.length - 1, ii;
              ar >= 0;
              ar--
            )
              (ii = U[ar]) && (N = (K ? ii(y, O, N) : ii(N)) || N);
            return K && N && j(y, O, N), N;
          };
        const bi = class Qe {
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
            const y = new Qe();
            return (
              (y.giveaway_id = this.giveaway_id),
              (y.seconds_until_drawing = this.seconds_until_drawing),
              (y.rtime_start = this.rtime_start),
              (y.rtime_end = this.rtime_end),
              (y.closed = this.closed),
              (y.winner_count = this.winner_count),
              y
            );
          }
        };
        E([f.sH], bi.prototype, "giveaway_id", 2),
          E([f.sH], bi.prototype, "seconds_until_drawing", 2),
          E([f.sH], bi.prototype, "rtime_start", 2),
          E([f.sH], bi.prototype, "rtime_end", 2),
          E([f.sH], bi.prototype, "closed", 2),
          E([f.sH], bi.prototype, "winner_count", 2);
        let Kr = bi;
        const Cr = class te {
          constructor() {
            (0, f.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(y, O) {
            return y + "_" + O;
          }
          GetInfoByInstance(y, O) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(y, O),
            );
          }
          GetNextDrawChangeCallback(y) {
            return (
              this.m_mapNextDrawChangeCallback.has(y) ||
                this.m_mapNextDrawChangeCallback.set(y, new Mr.lu()),
              this.m_mapNextDrawChangeCallback.get(y)
            );
          }
          CopyToGiveaway(y, O) {
            O.closed != y.closed && (O.closed = y.closed),
              O.giveaway_id != y.giveaway_id && (O.giveaway_id = y.giveaway_id),
              O.rtime_start != y.rtime_start && (O.rtime_start = y.rtime_start),
              O.rtime_end != y.rtime_end && (O.rtime_end = y.rtime_end),
              O.winner_count != y.winner_count &&
                (O.winner_count = y.winner_count),
              O.seconds_until_drawing != y.seconds_until_drawing &&
                (O.seconds_until_drawing = y.seconds_until_drawing);
          }
          async ReloadGiveaway(y, O) {
            if (!y) return null;
            let K = ir.TS.STORE_BASE_URL + "prizes/nextdraw/" + y,
              N = null,
              ar = { origin: self.origin };
            return (
              (N = await ur().get(K, { params: ar })),
              (0, f.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(y) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(y, new Kr()),
                  this.CopyToGiveaway(
                    N.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(y),
                  ),
                  O !== void 0)
                ) {
                  const ii = this.GetKey(y, O);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(ii) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      ii,
                      new Kr(),
                    ),
                    this.CopyToGiveaway(
                      N.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(ii),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(y).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(y),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(y)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              te.s_Singleton ||
                ((te.s_Singleton = new te()), te.s_Singleton.Init()),
              te.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let y = (0, ir.Tc)("giveawaynextdraw", "application_config");
              if (y && y.giveaway_id) {
                let O = new Kr();
                this.CopyToGiveaway(y, O),
                  this.m_mapGiveawayIDToNextDrawInfo.set(y.giveaway_id, O);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        E([f.sH], Cr.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          E([f.XI], Cr.prototype, "CopyToGiveaway", 1);
        let b = Cr;
        const a = class Ae {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = Ae.s_GlobalInstance),
              (Ae.s_GlobalInstance += 1);
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
          SetupRefreshDataInterval(y, O) {
            if ((this.ClearRefreshInterval(), !y.closed)) {
              let K =
                y.seconds_until_drawing <= 0 && y.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(O, K);
            }
          }
          SetupCountDown(y, O) {
            y > 0 && (this.m_intervalCountDownID = window.setInterval(O, 1e3));
          }
        };
        E([F.o], a.prototype, "ClearRefreshInterval", 1),
          E([F.o], a.prototype, "ClearCountDown", 1),
          E([F.o], a.prototype, "SetupRefreshDataInterval", 1),
          E([F.o], a.prototype, "SetupCountDown", 1);
        let t = a;
        function Q(U, y) {
          const O = b.Get().GetInfoByInstance(U, y.m_myInstanceNumber);
          (O.seconds_until_drawing -= 1),
            O.seconds_until_drawing == 0 && y.ClearCountDown();
        }
        function Xr(U, y) {
          const O = b.Get().GetInfoByInstance(U, y.m_myInstanceNumber);
          O &&
            O.BIsValid() &&
            O.seconds_until_drawing <= 0 &&
            !O.closed &&
            (y.ClearCountDown(),
            b
              .Get()
              .ReloadGiveaway(U, y.m_myInstanceNumber)
              .then((K) => {
                y.SetupCountDown(K.seconds_until_drawing, () => Q(U, y));
              }));
        }
        function mr(U) {
          const [y] = (0, e.useState)(new t()),
            O = (0, Z.CH)();
          (0, e.useEffect)(
            () => (
              b
                .Get()
                .ReloadGiveaway(U, y.m_myInstanceNumber)
                .then((A) => {
                  y.SetupRefreshDataInterval(A, () => Xr(U, y)),
                    y.SetupCountDown(A.seconds_until_drawing, () => Q(U, y)),
                    O();
                }),
              () => {
                y.ClearRefreshInterval(), y.ClearCountDown();
              }
            ),
            [y, U, O],
          );
          const K = b.Get().GetInfoByInstance(U, y.m_myInstanceNumber),
            [N, ar, ii] = (0, m.q3)(() => [
              K?.winner_count,
              K?.closed,
              K?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !K || K.giveaway_id == null || !K.BStarted() || N === void 0,
            winner_count: N,
            closed: ar,
            seconds_until_drawing: ii,
          };
        }
      },
      84676: (fi, hi, g) => {
        "use strict";
        g.d(hi, {
          G6: () => E,
          Gg: () => Cr,
          Ow: () => Kr,
          Sq: () => ir,
          YM: () => mr,
          eR: () => j,
          ik: () => yr,
          mZ: () => b,
          t7: () => bi,
          zX: () => t,
        });
        var l = g(41735),
          ur = g.n(l),
          f = g(90626),
          m = g(72604),
          e = g(78192),
          F = g(30096),
          Mr = g(10142);
        function Z(U, y, O = !0) {
          const K = O
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            N = O || CStoreItemCache.Get().BHasStoreItem(U, y, K) ? U : null,
            [ar, ii] = E(N, y, K),
            [A, ui] = useState(null),
            [ei, k] = E(A, y, K);
          useEffect(() => {
            ar?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              ui(ar.GetParentAppID());
          }, [ar]);
          let W = ar?.GetShortDescription()
            ? StripBBCodeTags(ar.GetShortDescription())
            : "";
          (!W || W.length === 0) &&
            ei &&
            (W = ei?.GetShortDescription()
              ? StripBBCodeTags(ei.GetShortDescription())
              : "");
          const tr = ii == yr && (!A || k == yr);
          return [W, tr];
        }
        const ir = 1,
          j = 2,
          yr = 3;
        function E(U, y, O, K) {
          const N = (0, f.useRef)(void 0),
            ar = (0, f.useRef)(void 0),
            ii = (0, F.CH)();
          N.current = U;
          const [A, ui] = (0, f.useState)(void 0),
            {
              include_assets: ei,
              include_release: k,
              include_platforms: W,
              include_all_purchase_options: tr,
              include_screenshots: fr,
              include_trailers: I,
              include_ratings: $,
              include_tag_count: nr,
              include_reviews: hr,
              include_basic_info: zr,
              include_supported_languages: si,
              include_full_description: jr,
              include_included_items: br,
              include_assets_without_overrides: S,
              apply_user_filters: Ui,
              include_links: er,
              include_extra_details: ri,
              include_optin_registration_tags: cr,
            } = O;
          if (
            ((0, f.useEffect)(() => {
              const or = {
                include_assets: ei,
                include_release: k,
                include_platforms: W,
                include_all_purchase_options: tr,
                include_screenshots: fr,
                include_trailers: I,
                include_ratings: $,
                include_tag_count: nr,
                include_reviews: hr,
                include_basic_info: zr,
                include_supported_languages: si,
                include_full_description: jr,
                include_included_items: br,
                include_assets_without_overrides: S,
                apply_user_filters: Ui,
                include_links: er,
                include_extra_details: ri,
                include_optin_registration_tags: cr,
              };
              let mi = null;
              return (
                !U ||
                  U < 0 ||
                  Mr.A.Get().BHasStoreItem(U, y, or) ||
                  (A !== void 0 && K && K == ar.current) ||
                  (K !== ar.current && (ui(void 0), (ar.current = K)),
                  (mi = ur().CancelToken.source()),
                  Mr.A.Get()
                    .QueueStoreItemRequest(U, y, or)
                    .then((q) => {
                      !mi?.token.reason && N.current === U && ui(q == m.R),
                        ii();
                    })),
                () => mi?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              U,
              y,
              K,
              A,
              ei,
              k,
              W,
              tr,
              fr,
              I,
              $,
              nr,
              hr,
              zr,
              si,
              jr,
              br,
              S,
              Ui,
              er,
              ri,
              cr,
              ii,
            ]),
            !U)
          )
            return [null, j];
          if (A === !1) return [void 0, j];
          if (Mr.A.Get().BIsStoreItemMissing(U, y)) return [void 0, j];
          if (!Mr.A.Get().BHasStoreItem(U, y, O)) return [void 0, ir];
          const gr = Mr.A.Get().GetStoreItemWithLegacyVisibilityCheck(U, y);
          return gr ? [gr, yr] : [null, j];
        }
        function bi(U, y, O) {
          return E(U, e.c6.qI, y, O);
        }
        function Kr(U, y, O) {
          return E(U, e.c6.xO, y, O);
        }
        function Cr(U, y, O) {
          return E(U, e.c6.RD, y, O);
        }
        function b(U, y, O) {
          const [K, N] = E(U, y, O);
          let ar;
          K?.GetStoreItemType() == e.c6.RD &&
            !K.GetAssets()?.GetHeaderURL() &&
            K?.GetIncludedAppIDs().length == 1 &&
            (ar = K.GetIncludedAppIDs()[0]);
          const [ii, A] = bi(ar, O);
          return ar && ii?.BIsVisible() ? [ii, A] : [K, N];
        }
        function a(U, y, O, K) {
          const N = (0, F.CH)(),
            {
              include_assets: ar,
              include_release: ii,
              include_platforms: A,
              include_all_purchase_options: ui,
              include_screenshots: ei,
              include_trailers: k,
              include_ratings: W,
              include_tag_count: tr,
              include_reviews: fr,
              include_basic_info: I,
              include_supported_languages: $,
              include_full_description: nr,
              include_included_items: hr,
              include_assets_without_overrides: zr,
              apply_user_filters: si,
              include_links: jr,
              include_extra_details: br,
              include_optin_registration_tags: S,
            } = O;
          return (
            (0, f.useEffect)(() => {
              if (!U || U.length == 0) return;
              const er = {
                  include_assets: ar,
                  include_release: ii,
                  include_platforms: A,
                  include_all_purchase_options: ui,
                  include_screenshots: ei,
                  include_trailers: k,
                  include_ratings: W,
                  include_tag_count: tr,
                  include_reviews: fr,
                  include_basic_info: I,
                  include_supported_languages: $,
                  include_full_description: nr,
                  include_included_items: hr,
                  include_assets_without_overrides: zr,
                  apply_user_filters: si,
                  include_links: jr,
                  include_extra_details: br,
                  include_optin_registration_tags: S,
                },
                ri = U.filter(
                  (or) =>
                    !(
                      Mr.A.Get().BHasStoreItem(or, y, er) ||
                      Mr.A.Get().BIsStoreItemMissing(or, y)
                    ),
                );
              if (ri.length == 0) return;
              const cr = ur().CancelToken.source(),
                gr = ri.map((or) =>
                  Mr.A.Get().QueueStoreItemRequest(or, y, er),
                );
              return (
                Promise.all(gr).then(() => {
                  cr.token.reason || N();
                }),
                () => cr.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              U,
              y,
              K,
              N,
              ar,
              ii,
              A,
              ui,
              ei,
              k,
              W,
              tr,
              fr,
              I,
              $,
              nr,
              hr,
              zr,
              si,
              jr,
              br,
              S,
            ]),
            U
              ? U.every(
                  (er) =>
                    Mr.A.Get().BHasStoreItem(er, y, O) ||
                    Mr.A.Get().BIsStoreItemMissing(er, y),
                )
                ? U.every((er) =>
                    Mr.A.Get().GetStoreItemWithLegacyVisibilityCheck(er, y),
                  )
                  ? yr
                  : j
                : ir
              : j
          );
        }
        function t(U, y, O) {
          return a(U, e.c6.qI, y, O);
        }
        function Q(U, y, O) {
          return a(U, EStoreItemType.k_EStoreItemType_Bundle, y, O);
        }
        function Xr(U, y, O) {
          return a(U, EStoreItemType.k_EStoreItemType_Package, y, O);
        }
        function mr() {
          f.useEffect(
            () => (
              Mr.A.Get().SetReturnUnavailableItems(!0),
              () => Mr.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      86390: (fi, hi, g) => {
        "use strict";
        g.d(hi, { Cg: () => E, pZ: () => Kr, vg: () => bi });
        var l = g(7850),
          ur = g(90626),
          f = g(88003),
          m = g(18210),
          e = g(3166),
          F = g(34004),
          Mr = g(6740),
          Z = g(3685),
          ir = g(8059),
          j = g(96538);
        function yr(b) {
          return (0, l.jsx)(f.x_, {
            onEscKeypress: b.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, l.jsx)(Cr, {
              redirectURL: b.redirectURL,
              guestOption: b.guestOption,
            }),
          });
        }
        function E(b) {
          const { redirectURL: a = window.location.href } = b;
          return (0, l.jsx)(j.EN, {
            active: !0,
            children: (0, l.jsx)(yr, { redirectURL: a }),
          });
        }
        function bi() {
          (0, f.pg)(
            (0, l.jsx)(yr, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, m.we)("#Login_SignInTitle") },
          );
        }
        function Kr(b, a) {
          (0, f.pg)(
            (0, l.jsx)(yr, {
              ownerWin: window,
              redirectURL: b,
              guestOption: a,
            }),
            window,
            { strTitle: (0, m.we)("#Login_SignInTitle") },
          );
        }
        function Cr(b) {
          const { redirectURL: a, guestOption: t } = b,
            [Q] = (0, ur.useState)(
              new Z.D(e.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [Xr, mr] = (0, ur.useState)(!1),
            U = (y) => {
              y == ir.wI.k_PrimaryDomainFail
                ? mr(!0)
                : window.location.assign(a);
            };
          return (0, l.jsx)("div", {
            children: Xr
              ? (0, l.jsx)(F.Fn, {})
              : (0, l.jsx)(F.YN, {
                  autoFocus: !0,
                  transport: Q,
                  platform: Mr.SS.tS,
                  onComplete: U,
                  redirectUrl: a,
                  theme: "modal",
                  children: t && (0, l.jsx)(F.Mk, { redirectURL: a }),
                }),
          });
        }
      },
      79590: (fi, hi, g) => {
        "use strict";
        g.d(hi, { m: () => Kr });
        var l = g(7850),
          ur = g(99412),
          f = g(90626),
          m = g(48421),
          e = g(36707),
          F = g(18210),
          Mr = g(53113),
          Z = g(72609),
          ir = g(20193),
          j = g(29630),
          yr = g(60480);
        function E(Cr) {
          const { gidEvent: b } = Cr,
            a = usePartnerEventByEventGID(b);
          return a
            ? jsx(bi, {
                event: a,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(a) ?? ""),
              })
            : null;
        }
        function bi(Cr) {
          const { event: b, lang: a, href: t } = Cr,
            [Q, Xr] = (0, f.useMemo)(() => {
              const mr = b.jsondata.localized_sale_product_banner,
                U = b.jsondata.localized_sale_product_mobile_banner;
              if (mr?.length && U?.length) {
                const y = F.NT.GetWithFallback(mr, a),
                  O = F.NT.GetWithFallback(U, a);
                if (y?.length && O?.length)
                  return [
                    j.zU.GenerateURLFromHashAndExt(b.clanSteamID, y),
                    j.zU.GenerateURLFromHashAndExt(b.clanSteamID, O),
                  ];
              }
              return [void 0, void 0];
            }, [b, a]);
          return !Q?.length || !Xr?.length
            ? null
            : (0, l.jsxs)("a", {
                href: t,
                className: ir.Link,
                children: [
                  (0, l.jsx)("img", {
                    src: Q,
                    className: (0, e.A)(ir.Banner, ir.Big),
                  }),
                  (0, l.jsx)("img", {
                    src: Xr,
                    className: (0, e.A)(ir.Banner, ir.Mobile),
                  }),
                ],
              });
        }
        function Kr(Cr) {
          const { gidEvent: b } = Cr,
            a = (0, m.RR)(b);
          return a
            ? (0, l.jsx)(bi, {
                event: a,
                lang: (0, ur.sfN)(Z.TS.LANGUAGE),
                href: (0, Mr.k2)((0, yr.n4)(a) ?? ""),
              })
            : null;
        }
      },
      79167: (fi, hi, g) => {
        "use strict";
        g.d(hi, { I: () => b });
        var l = g(7850),
          ur = g(90626),
          f = g(30096),
          m = g(75844),
          e = g(8323),
          F = g(18210),
          Mr = g(16412),
          Z = g(36118),
          ir = g(81315),
          j = g.n(ir),
          yr = g(13854),
          E = Object.defineProperty,
          bi = Object.getOwnPropertyDescriptor,
          Kr = (a, t, Q, Xr) => {
            for (
              var mr = Xr > 1 ? void 0 : Xr ? bi(t, Q) : t, U = a.length - 1, y;
              U >= 0;
              U--
            )
              (y = a[U]) && (mr = (Xr ? y(t, Q, mr) : y(mr)) || mr);
            return Xr && mr && E(t, Q, mr), mr;
          },
          Cr = ((a) => (
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
          ))(Cr || {});
        let b = class extends ur.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new e.Ji();
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
          OnMouseDown(a, t) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (Q) => {
                this.OnMouseUp(Q, t);
              }),
              (this.m_fnMouseMove = (Q) => {
                this.OnMouseMove(Q, t);
              }),
              this.setState({ EdgeDown: t }),
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
          OnMouseMove(a, t) {
            if (this.state.EdgeDown !== void 0) {
              switch ((a.shiftKey && this.m_fnMouseUp(), t)) {
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
                  const Q = (0, yr.OQ)(
                      this.CalcLeftEdge(a.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    Xr = 100 - (Q + this.state.curWidthPct),
                    mr = (0, yr.OQ)(
                      this.CalcTopEdge(a.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    U = 100 - (mr + this.state.curHeightPct),
                    y = {
                      curLeftPosPct: Q,
                      curRightPosPct: Xr,
                      curTopPosPct: mr,
                      curBottomPosPct: U,
                    };
                  this.setState(y);
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
            let t =
                a.curTopPosPct !== void 0
                  ? a.curTopPosPct
                  : this.state.curTopPosPct,
              Q =
                a.curBottomPosPct !== void 0
                  ? a.curBottomPosPct
                  : this.state.curBottomPosPct,
              Xr =
                a.curLeftPosPct !== void 0
                  ? a.curLeftPosPct
                  : this.state.curLeftPosPct,
              mr =
                a.curRightPosPct !== void 0
                  ? a.curRightPosPct
                  : this.state.curRightPosPct,
              U = (0, yr.OQ)(
                100 - mr - Xr,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              y = (0, yr.OQ)(
                100 - Q - t,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (a.curLeftPosPct !== void 0 || a.curRightPosPct !== void 0
                ? (y = U / this.m_aspectRatio)
                : (U = y * this.m_aspectRatio)),
              a.curLeftPosPct !== void 0
                ? (Xr = 100 - mr - U)
                : (mr = 100 - (Xr + U)),
              a.curTopPosPct !== void 0
                ? (t = 100 - Q - y)
                : (Q = 100 - (t + y));
            const O = 100 - mr - Xr,
              K = 100 - Q - t;
            this.IsValidPct(Xr) &&
              this.IsValidPct(mr) &&
              this.IsValidPct(t) &&
              this.IsValidPct(Q) &&
              this.IsValidPct(O) &&
              this.IsValidPct(K) &&
              this.setState({
                curLeftPosPct: Xr,
                curRightPosPct: mr,
                curTopPosPct: t,
                curBottomPosPct: Q,
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
            return (0, yr.OQ)(this.GetXPercent(a), 0, 100);
          }
          CalcRightEdge(a) {
            return (0, yr.OQ)(
              100 - (this.GetXPercent(a) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(a) {
            return (0, yr.OQ)(this.GetYPercent(a), 0, 100);
          }
          CalcBottomEdge(a) {
            return (0, yr.OQ)(
              100 - (this.GetYPercent(a) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(a, t) {
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
              t = j().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (t += ` ${j().EdgeDown} ` + j()[this.state.EdgeDown]),
              (0, l.jsxs)("div", {
                className: t,
                style: a,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, l.jsxs)("div", {
                    className: j().LinkRegionGridBox,
                    children: [
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().TopLeft}`,
                        onMouseDown: (Q) => {
                          this.OnMouseDown(Q, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().Top}`,
                        onMouseDown: (Q) => {
                          this.OnMouseDown(Q, "top");
                        },
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().TopRight}`,
                        onMouseDown: (Q) => {
                          this.OnMouseDown(Q, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().Left}`,
                        onMouseDown: (Q) => {
                          this.OnMouseDown(Q, "left");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsxs)("div", {
                        className: `${j().LinkRegionEdge} ${j().Middle}`,
                        onMouseDown: (Q) => {
                          this.OnMouseDown(Q, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, l.jsx)("div", {
                              className: j().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, l.jsx)(Z.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, l.jsx)("div", {
                              className: j().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, l.jsx)(Z.xv8, {}),
                            }),
                          (0, l.jsxs)("div", {
                            className: j().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().Right}`,
                        onMouseDown: (Q) => {
                          this.OnMouseDown(Q, "right");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().BottomLeft}`,
                        onMouseDown: (Q) => {
                          this.OnMouseDown(Q, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().Bottom}`,
                        onMouseDown: (Q) => {
                          this.OnMouseDown(Q, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().BottomRight}`,
                        onMouseDown: (Q) => {
                          this.OnMouseDown(Q, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, l.jsxs)("div", {
                      className: j().LinkRegionInfo,
                      children: [
                        (0, l.jsx)(Mr.pd, {
                          className: j().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, F.we)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, l.jsx)(Mr.pd, {
                          className: j().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, F.we)("#SteamTV_LinkDescription"),
                          placeholder: (0, F.we)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, l.jsxs)("div", {
                          className: j().LinkRegionButtonContainer,
                          children: [
                            (0, l.jsxs)(Mr.$n, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, F.we)("#Button_OK"), " "],
                            }),
                            (0, l.jsxs)(Mr.$n, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, F.we)("#Button_Cancel")],
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
        Kr([f.oI], b.prototype, "LinkRegionBoxRef", 1),
          Kr([f.oI], b.prototype, "OnMouseDown", 1),
          Kr([f.oI], b.prototype, "OnMouseMove", 1),
          Kr([f.oI], b.prototype, "OnMouseUp", 1),
          Kr([f.oI], b.prototype, "HandleDelete", 1),
          Kr([f.oI], b.prototype, "OnSetLinkURLChange", 1),
          Kr([f.oI], b.prototype, "OnSetLinkDescriptionChange", 1),
          Kr([f.oI], b.prototype, "OnSaveLink", 1),
          Kr([f.oI], b.prototype, "OnEditLink", 1),
          (b = Kr([m.PA], b));
      },
      20193: (fi) => {
        fi.exports = {
          Link: "_2UaM2MUAY7gG5jQF-6m9eV",
          Banner: "_1DZMXccE3UeEnQ5fZ7O00v",
          Big: "_3dJUAHMUbDY0O45FaJvOT-",
          Mobile: "_3RIai13_FI7QmOT96zU4W-",
        };
      },
      53120: (fi) => {
        fi.exports = {
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
      63508: (fi) => {
        fi.exports = {
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
      8287: (fi) => {
        fi.exports = {
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
      15527: (fi) => {
        fi.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      43087: (fi) => {
        fi.exports = {
          StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
          Action: "_2Xpw9--lhL-kpt-lUannE1",
          WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
          StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
          StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
          StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
        };
      },
      14256: (fi) => {
        fi.exports = {
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
      33543: (fi) => {
        fi.exports = {
          narrowWidth: "500px",
          FriendsListInsetShadowCtn: "_1qeW35auMlJ5pJVNtBC-bF",
          FriendListInsetShadowTop: "_1osHa9KHOmdCDNrA232z4N",
          FriendListInsetShadowBottom: "_2OoTJwlWvzvAysWOOEQaXS",
        };
      },
      81315: (fi) => {
        fi.exports = {
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
      61738: (fi, hi, g) => {
        var l = {
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
        function ur(m) {
          var e = f(m);
          return g(e);
        }
        function f(m) {
          if (!g.o(l, m)) {
            var e = new Error("Cannot find module '" + m + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return l[m];
        }
        (ur.keys = function () {
          return Object.keys(l);
        }),
          (ur.resolve = f),
          (fi.exports = ur),
          (ur.id = 61738);
      },
      96715: (fi, hi, g) => {
        "use strict";
        g.d(hi, { A: () => l });
        const l =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      19654: (fi, hi, g) => {
        "use strict";
        g.d(hi, { A: () => l });
        const l =
          g.p +
          "images/applications/store/reddit_large.png?v=valveisgoodatcaching";
      },
    },
  ]);
})();
