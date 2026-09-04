/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [8396],
    {
      34169: (Ct, _t, g) => {
        "use strict";
        g.r(_t),
          g.d(_t, {
            BroadcastEmbeddablePopoutHeader: () => ji,
            default: () => Mn,
          });
        var s = g(7850),
          ft = g(41735),
          v = g.n(ft),
          S = g(75844),
          Ut = g(65946),
          _ = g(90626),
          N = g(14947),
          q = g(16346),
          ct = g(90711),
          W = g(90828),
          E = g(72604),
          B = g(35038),
          pt = g(84110),
          Mt = g(13018),
          zt = g(76559),
          h = g(80613),
          a = g.n(h),
          r = g(75245);
        function tt(c) {
          return "unknown EBroadcastImageType ( " + c + " )";
        }
        function je(c) {
          return "unknown EGetGamesAlgorithm ( " + c + " )";
        }
        function Oe(c) {
          return "unknown EGetChannelsAlgorithm ( " + c + " )";
        }
        function Ue(c) {
          return "unknown ESteamTVContentTemplate ( " + c + " )";
        }
        class nt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              nt.prototype.unique_name || r.Sg(nt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = r.w0(nt.M())), nt.sm_mbf;
          }
          toObject(t = !1) {
            return nt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(nt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(nt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new nt();
            return nt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(nt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(nt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        }
        class jt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jt.prototype.broadcast_channel_id || r.Sg(jt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = r.w0(jt.M())), jt.sm_mbf;
          }
          toObject(t = !1) {
            return jt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(jt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(jt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new jt();
            return jt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(jt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(jt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        }
        class St extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              St.prototype.unique_name || r.Sg(St.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = r.w0(St.M())), St.sm_mbf;
          }
          toObject(t = !1) {
            return St.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(St.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(St.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new St();
            return St.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(St.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return St.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(St.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        }
        class Jt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Jt.prototype.broadcast_channel_id || r.Sg(Jt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = r.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(t = !1) {
            return Jt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Jt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Jt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Jt();
            return Jt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Jt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Jt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        }
        class kt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              kt.prototype.broadcast_channel_id || r.Sg(kt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    language: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    headline: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    summary: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    avatar_hash: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    rules: { n: 8, br: r.qM.readString, bw: r.gp.writeString },
                    panels: { n: 9, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              kt.sm_m
            );
          }
          static MBF() {
            return kt.sm_mbf || (kt.sm_mbf = r.w0(kt.M())), kt.sm_mbf;
          }
          toObject(t = !1) {
            return kt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(kt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(kt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new kt();
            return kt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(kt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(kt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Request";
          }
        }
        class Bt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Bt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Bt();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Bt();
            return Bt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        class Rt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Rt.prototype.broadcast_channel_id || r.Sg(Rt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = r.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(t = !1) {
            return Rt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Rt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Rt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Rt();
            return Rt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Rt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Rt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        }
        class Zt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Zt.prototype.unique_name || r.Sg(Zt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    owner_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    name: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    language: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    headline: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    summary: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    rules: { n: 8, br: r.qM.readString, bw: r.gp.writeString },
                    panels: { n: 9, br: r.qM.readString, bw: r.gp.writeString },
                    is_partnered: {
                      n: 10,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Zt.sm_m
            );
          }
          static MBF() {
            return Zt.sm_mbf || (Zt.sm_mbf = r.w0(Zt.M())), Zt.sm_mbf;
          }
          toObject(t = !1) {
            return Zt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Zt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Zt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Zt();
            return Zt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Zt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Zt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        }
        class Qt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Qt.prototype.broadcast_channel_id || r.Sg(Qt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    image_type: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    image_index: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    image_width: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    image_height: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    file_size: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    file_extension: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    file_hash: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    undo: { n: 9, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = r.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(t = !1) {
            return Qt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Qt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Qt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Qt();
            return Qt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Qt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Qt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Request";
          }
        }
        class Pt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Pt.prototype.replace_image_hash || r.Sg(Pt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    replace_image_hash: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = r.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(t = !1) {
            return Pt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Pt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Pt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Pt();
            return Pt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Pt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Pt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Response";
          }
        }
        class Tt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Tt.prototype.broadcast_channel_id || r.Sg(Tt.M()),
              h.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    image_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = r.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(t = !1) {
            return Tt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Tt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Tt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Tt();
            return Tt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Tt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Tt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Request";
          }
        }
        class rt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              rt.prototype.images || r.Sg(rt.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: { images: { n: 1, c: L, r: !0, q: !0 } },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = r.w0(rt.M())), rt.sm_mbf;
          }
          toObject(t = !1) {
            return rt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(rt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(rt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new rt();
            return rt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(rt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(rt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response";
          }
        }
        class L extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              L.prototype.image_type || r.Sg(L.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    image_type: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    image_path: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    image_index: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = r.w0(L.M())), L.sm_mbf;
          }
          toObject(t = !1) {
            return L.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(L.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(L.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new L();
            return L.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(L.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return L.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(L.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response_Images";
          }
        }
        class Dt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Dt.prototype.broadcast_channel_id || r.Sg(Dt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = r.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(t = !1) {
            return Dt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Dt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Dt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Dt();
            return Dt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Dt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Dt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Request";
          }
        }
        class vt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              vt.prototype.links || r.Sg(vt.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: { links: { n: 1, c: k, r: !0, q: !0 } },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = r.w0(vt.M())), vt.sm_mbf;
          }
          toObject(t = !1) {
            return vt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(vt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(vt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new vt();
            return vt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(vt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(vt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response";
          }
        }
        class k extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.link_index || r.Sg(k.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    link_index: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    url: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    link_description: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    left: { n: 4, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    top: { n: 5, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    width: { n: 6, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    height: { n: 7, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = r.w0(k.M())), k.sm_mbf;
          }
          toObject(t = !1) {
            return k.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(k.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(k.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new k();
            return k.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(k.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(k.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
          }
        }
        class Lt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Lt.prototype.broadcast_channel_id || r.Sg(Lt.M()),
              h.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    links: { n: 2, c: bt, r: !0, q: !0 },
                  },
                }),
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = r.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(t = !1) {
            return Lt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Lt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Lt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Lt();
            return Lt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Lt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Lt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
          }
        }
        class bt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              bt.prototype.link_index || r.Sg(bt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    link_index: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    url: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    link_description: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    left: { n: 4, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    top: { n: 5, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    width: { n: 6, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    height: { n: 7, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = r.w0(bt.M())), bt.sm_mbf;
          }
          toObject(t = !1) {
            return bt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(bt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(bt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new bt();
            return bt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(bt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(bt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
          }
        }
        class H extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return H.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new H();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new H();
            return H.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
          }
        }
        class Et extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Et.prototype.broadcast_channel_id || r.Sg(Et.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = r.w0(Et.M())), Et.sm_mbf;
          }
          toObject(t = !1) {
            return Et.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Et.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Et.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Et();
            return Et.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Et.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Et.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Request";
          }
        }
        class it extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              it.prototype.is_live || r.Sg(it.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    is_live: { n: 1, br: r.qM.readBool, bw: r.gp.writeBool },
                    is_disabled: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    viewers: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    views: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    broadcaster_steamid: {
                      n: 6,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    subscribers: {
                      n: 9,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    unique_name: {
                      n: 10,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    broadcast_session_id: {
                      n: 11,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = r.w0(it.M())), it.sm_mbf;
          }
          toObject(t = !1) {
            return it.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(it.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(it.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new it();
            return it.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(it.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return it.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(it.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Response";
          }
        }
        class C extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.broadcast_channel_id || r.Sg(C.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    name: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    appid: { n: 4, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    viewers: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    views: {
                      n: 6,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    headline: {
                      n: 9,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    avatar_url: {
                      n: 10,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    broadcaster_steamid: {
                      n: 11,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    subscribers: {
                      n: 12,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    background_url: {
                      n: 13,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    is_featured: {
                      n: 14,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    is_disabled: {
                      n: 15,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    is_live: { n: 16, br: r.qM.readBool, bw: r.gp.writeBool },
                    language: {
                      n: 17,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    reports: {
                      n: 18,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    is_partnered: {
                      n: 19,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = r.w0(C.M())), C.sm_mbf;
          }
          toObject(t = !1) {
            return C.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(C.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(C.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new C();
            return C.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(C.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(C.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "GetBroadcastChannelEntry";
          }
        }
        class Ae extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ae.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ae();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Ae();
            return Ae.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Request";
          }
        }
        class Ht extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ht.prototype.results || r.Sg(Ht.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: { results: { n: 1, c: C, r: !0, q: !0 } },
                }),
              Ht.sm_m
            );
          }
          static MBF() {
            return Ht.sm_mbf || (Ht.sm_mbf = r.w0(Ht.M())), Ht.sm_mbf;
          }
          toObject(t = !1) {
            return Ht.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Ht.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Ht.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Ht();
            return Ht.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Ht.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Ht.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Response";
          }
        }
        class Ee extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ee.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ee();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Ee();
            return Ee.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Request";
          }
        }
        class Xt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xt.prototype.results || r.Sg(Xt.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
                  fields: { results: { n: 1, c: C, r: !0, q: !0 } },
                }),
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = r.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(t = !1) {
            return Xt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Xt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Xt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Xt();
            return Xt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Xt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Xt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        }
        class Kt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Kt.prototype.broadcast_channel_id || r.Sg(Kt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    undo: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              Kt.sm_m
            );
          }
          static MBF() {
            return Kt.sm_mbf || (Kt.sm_mbf = r.w0(Kt.M())), Kt.sm_mbf;
          }
          toObject(t = !1) {
            return Kt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Kt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Kt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Kt();
            return Kt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Kt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Kt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Request";
          }
        }
        class T extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.is_followed || r.Sg(T.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = r.w0(T.M())), T.sm_mbf;
          }
          toObject(t = !1) {
            return T.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(T.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(T.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new T();
            return T.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(T.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(T.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Response";
          }
        }
        class dt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              dt.prototype.broadcast_channel_id || r.Sg(dt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = r.w0(dt.M())), dt.sm_mbf;
          }
          toObject(t = !1) {
            return dt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(dt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(dt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new dt();
            return dt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(dt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(dt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Request";
          }
        }
        class X extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              X.prototype.is_subscribed || r.Sg(X.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    is_subscribed: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = r.w0(X.M())), X.sm_mbf;
          }
          toObject(t = !1) {
            return X.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(X.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(X.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new X();
            return X.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(X.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(X.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Response";
          }
        }
        class n extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              n.prototype.broadcast_channel_id || r.Sg(n.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    reason: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = r.w0(n.M())), n.sm_mbf;
          }
          toObject(t = !1) {
            return n.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(n.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(n.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new n();
            return n.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(n.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return n.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(n.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Request";
          }
        }
        class u extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return u.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new u();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new u();
            return u.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return u.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        class b extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              b.prototype.broadcast_channel_id || r.Sg(b.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = r.w0(b.M())), b.sm_mbf;
          }
          toObject(t = !1) {
            return b.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(b.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(b.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new b();
            return b.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(b.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return b.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(b.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        }
        class I extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              I.prototype.is_followed || r.Sg(I.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    is_subscribed: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = r.w0(I.M())), I.sm_mbf;
          }
          toObject(t = !1) {
            return I.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(I.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(I.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new I();
            return I.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(I.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return I.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(I.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        }
        class z extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.appid || r.Sg(z.M()),
              h.Message.initialize(this, t, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    image: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    viewers: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    channels: { n: 5, c: C, r: !0, q: !0 },
                    release_date: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    developer: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    publisher: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = r.w0(z.M())), z.sm_mbf;
          }
          toObject(t = !1) {
            return z.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(z.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(z.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new z();
            return z.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(z.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(z.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Game";
          }
        }
        class P extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              P.prototype.appid || r.Sg(P.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    algorithm: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    count: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = r.w0(P.M())), P.sm_mbf;
          }
          toObject(t = !1) {
            return P.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(P.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(P.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new P();
            return P.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(P.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return P.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(P.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Request";
          }
        }
        class K extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              K.prototype.results || r.Sg(K.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: { results: { n: 1, c: z, r: !0, q: !0 } },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = r.w0(K.M())), K.sm_mbf;
          }
          toObject(t = !1) {
            return K.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(K.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(K.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new K();
            return K.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(K.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return K.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(K.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Response";
          }
        }
        class at extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              at.prototype.algorithm || r.Sg(at.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    algorithm: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    count: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = r.w0(at.M())), at.sm_mbf;
          }
          toObject(t = !1) {
            return at.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(at.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(at.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new at();
            return at.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(at.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return at.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(at.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Request";
          }
        }
        class ut extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ut.prototype.results || r.Sg(ut.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: { results: { n: 1, c: C, r: !0, q: !0 } },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = r.w0(ut.M())), ut.sm_mbf;
          }
          toObject(t = !1) {
            return ut.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ut.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ut.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ut();
            return ut.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ut.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ut.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Response";
          }
        }
        class G extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              G.prototype.broadcast_channel_id || r.Sg(G.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = r.w0(G.M())), G.sm_mbf;
          }
          toObject(t = !1) {
            return G.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(G.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(G.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new G();
            return G.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(G.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(G.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        }
        class ot extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ot.prototype.broadcasters || r.Sg(ot.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: { broadcasters: { n: 1, c: wt, r: !0, q: !0 } },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = r.w0(ot.M())), ot.sm_mbf;
          }
          toObject(t = !1) {
            return ot.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ot.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ot.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ot();
            return ot.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ot.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ot.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
          }
        }
        class wt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              wt.prototype.steamid || r.Sg(wt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    rtmp_token: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = r.w0(wt.M())), wt.sm_mbf;
          }
          toObject(t = !1) {
            return wt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(wt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(wt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new wt();
            return wt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(wt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(wt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        }
        class ht extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ht.prototype.issuer_steamid || r.Sg(ht.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    issuer_steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    time_expires: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    permanent: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    name: { n: 5, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = r.w0(ht.M())), ht.sm_mbf;
          }
          toObject(t = !1) {
            return ht.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ht.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ht.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ht();
            return ht.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ht.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ht.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatBan";
          }
        }
        class It extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              It.prototype.broadcast_channel_id || r.Sg(It.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    duration: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    permanent: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    undo: { n: 5, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = r.w0(It.M())), It.sm_mbf;
          }
          toObject(t = !1) {
            return It.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(It.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(It.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new It();
            return It.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(It.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return It.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(It.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Request";
          }
        }
        class Qe extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Qe.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Qe();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Qe();
            return Qe.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Response";
          }
        }
        class ae extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ae.prototype.broadcast_channel_id || r.Sg(ae.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = r.w0(ae.M())), ae.sm_mbf;
          }
          toObject(t = !1) {
            return ae.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ae.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ae.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ae();
            return ae.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ae.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ae.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Request";
          }
        }
        class oe extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              oe.prototype.results || r.Sg(oe.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: { results: { n: 1, c: ht, r: !0, q: !0 } },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = r.w0(oe.M())), oe.sm_mbf;
          }
          toObject(t = !1) {
            return oe.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(oe.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(oe.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new oe();
            return oe.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(oe.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(oe.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Response";
          }
        }
        class U extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.broadcast_channel_id || r.Sg(U.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    moderator_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    undo: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = r.w0(U.M())), U.sm_mbf;
          }
          toObject(t = !1) {
            return U.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(U.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new U();
            return U.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(U.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(U.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Request";
          }
        }
        class Ke extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ke.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ke();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Ke();
            return Ke.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        class Ft extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ft.prototype.broadcast_channel_id || r.Sg(Ft.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = r.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(t = !1) {
            return Ft.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Ft.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Ft.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Ft();
            return Ft.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Ft.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Ft.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Request";
          }
        }
        class lt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              lt.prototype.steamid || r.Sg(lt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = r.w0(lt.M())), lt.sm_mbf;
          }
          toObject(t = !1) {
            return lt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(lt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(lt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new lt();
            return lt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(lt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(lt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatModerator";
          }
        }
        class Gt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Gt.prototype.results || r.Sg(Gt.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
                  fields: { results: { n: 1, c: lt, r: !0, q: !0 } },
                }),
              Gt.sm_m
            );
          }
          static MBF() {
            return Gt.sm_mbf || (Gt.sm_mbf = r.w0(Gt.M())), Gt.sm_mbf;
          }
          toObject(t = !1) {
            return Gt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Gt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Gt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Gt();
            return Gt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Gt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Gt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Response";
          }
        }
        class le extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              le.prototype.broadcast_channel_id || r.Sg(le.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    word: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    undo: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = r.w0(le.M())), le.sm_mbf;
          }
          toObject(t = !1) {
            return le.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(le.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(le.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new le();
            return le.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(le.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return le.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(le.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Request";
          }
        }
        class ke extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ke.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new ke();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ke();
            return ke.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Response";
          }
        }
        class ce extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ce.prototype.broadcast_channel_id || r.Sg(ce.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = r.w0(ce.M())), ce.sm_mbf;
          }
          toObject(t = !1) {
            return ce.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ce.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ce.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ce();
            return ce.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ce.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ce.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Request";
          }
        }
        class $t extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $t.prototype.results || r.Sg($t.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    results: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                  },
                }),
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = r.w0($t.M())), $t.sm_mbf;
          }
          toObject(t = !1) {
            return $t.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT($t.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq($t.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new $t();
            return $t.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj($t.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0($t.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Response";
          }
        }
        class Wt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Wt.prototype.broadcast_channel_id || r.Sg(Wt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Wt.sm_m
            );
          }
          static MBF() {
            return Wt.sm_mbf || (Wt.sm_mbf = r.w0(Wt.M())), Wt.sm_mbf;
          }
          toObject(t = !1) {
            return Wt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Wt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Wt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Wt();
            return Wt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Wt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Wt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Request";
          }
        }
        class At extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              At.prototype.chat_id || r.Sg(At.M()),
              h.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint64String,
                      pbr: r.qM.readPackedUint64String,
                      bw: r.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = r.w0(At.M())), At.sm_mbf;
          }
          toObject(t = !1) {
            return At.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(At.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(At.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new At();
            return At.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(At.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return At.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(At.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Response";
          }
        }
        class qt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              qt.prototype.term || r.Sg(qt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
                  fields: {
                    term: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              qt.sm_m
            );
          }
          static MBF() {
            return qt.sm_mbf || (qt.sm_mbf = r.w0(qt.M())), qt.sm_mbf;
          }
          toObject(t = !1) {
            return qt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(qt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(qt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new qt();
            return qt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(qt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(qt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Request";
          }
        }
        class de extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              de.prototype.results || r.Sg(de.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: { results: { n: 1, c: C, r: !0, q: !0 } },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = r.w0(de.M())), de.sm_mbf;
          }
          toObject(t = !1) {
            return de.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(de.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(de.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new de();
            return de.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(de.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return de.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(de.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Response";
          }
        }
        class Be extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Be.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Be();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Be();
            return Be.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Request";
          }
        }
        class Yt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Yt.prototype.stream_live_email || r.Sg(Yt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = r.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(t = !1) {
            return Yt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Yt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Yt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Yt();
            return Yt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Yt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Yt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Response";
          }
        }
        class te extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              te.prototype.stream_live_email || r.Sg(te.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = r.w0(te.M())), te.sm_mbf;
          }
          toObject(t = !1) {
            return te.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(te.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(te.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new te();
            return te.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(te.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(te.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Request";
          }
        }
        class We extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return We.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new We();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new We();
            return We.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return We.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Response";
          }
        }
        class l extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return l.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new l();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new l();
            return l.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return l.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Request";
          }
        }
        class m extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              m.prototype.results || r.Sg(m.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: { results: { n: 1, c: C, r: !0, q: !0 } },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = r.w0(m.M())), m.sm_mbf;
          }
          toObject(t = !1) {
            return m.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(m.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(m.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new m();
            return m.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(m.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return m.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(m.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Response";
          }
        }
        class p extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              p.prototype.broadcasts || r.Sg(p.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: { broadcasts: { n: 1, c: C, r: !0, q: !0 } },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = r.w0(p.M())), p.sm_mbf;
          }
          toObject(t = !1) {
            return p.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(p.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(p.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new p();
            return p.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(p.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return p.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(p.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Takeover";
          }
        }
        class w extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              w.prototype.broadcasts || r.Sg(w.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    broadcasts: { n: 1, c: C, r: !0, q: !0 },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    title: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = r.w0(w.M())), w.sm_mbf;
          }
          toObject(t = !1) {
            return w.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(w.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(w.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new w();
            return w.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(w.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return w.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(w.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_SingleGame";
          }
        }
        class y extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              y.prototype.appid || r.Sg(y.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    game_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    broadcast: { n: 3, c: C },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = r.w0(y.M())), y.sm_mbf;
          }
          toObject(t = !1) {
            return y.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(y.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(y.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new y();
            return y.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(y.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(y.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "GameListEntry";
          }
        }
        class x extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              x.prototype.entries || r.Sg(x.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    entries: { n: 1, c: y, r: !0, q: !0 },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = r.w0(x.M())), x.sm_mbf;
          }
          toObject(t = !1) {
            return x.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(x.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(x.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new x();
            return x.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(x.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return x.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(x.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_GameList";
          }
        }
        class O extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              O.prototype.broadcasts || r.Sg(O.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    broadcasts: { n: 1, c: C, r: !0, q: !0 },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = r.w0(O.M())), O.sm_mbf;
          }
          toObject(t = !1) {
            return O.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(O.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(O.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new O();
            return O.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(O.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(O.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_QuickExplore";
          }
        }
        class Z extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Z.prototype.broadcasts || r.Sg(Z.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    broadcasts: { n: 1, c: C, r: !0, q: !0 },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = r.w0(Z.M())), Z.sm_mbf;
          }
          toObject(t = !1) {
            return Z.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Z.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Z.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Z();
            return Z.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Z.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Z.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_ConveyorBelt";
          }
        }
        class V extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.broadcast || r.Sg(V.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    broadcast: { n: 1, c: C },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    chat_group_id: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = r.w0(V.M())), V.sm_mbf;
          }
          toObject(t = !1) {
            return V.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(V.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new V();
            return V.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(V.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(V.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        }
        class et extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              et.prototype.broadcast || r.Sg(et.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    broadcast: { n: 1, c: C },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = r.w0(et.M())), et.sm_mbf;
          }
          toObject(t = !1) {
            return et.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(et.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(et.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new et();
            return et.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(et.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(et.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Developer";
          }
        }
        class st extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              st.prototype.title || r.Sg(st.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    title: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = r.w0(st.M())), st.sm_mbf;
          }
          toObject(t = !1) {
            return st.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(st.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(st.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new st();
            return st.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(st.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(st.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Event";
          }
        }
        class Nt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Nt.prototype.template_type || r.Sg(Nt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
                  fields: {
                    template_type: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    takeover: { n: 2, c: p },
                    single_game: { n: 3, c: w },
                    game_list: { n: 4, c: x },
                    quick_explore: { n: 5, c: O },
                    conveyor_belt: { n: 6, c: Z },
                    watch_party: { n: 7, c: V },
                    developer: { n: 8, c: et },
                    event: { n: 9, c: st },
                  },
                }),
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = r.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(t = !1) {
            return Nt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Nt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Nt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Nt();
            return Nt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Nt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Nt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageContentRow";
          }
        }
        class Se extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Se.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Se();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Se();
            return Se.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        class mt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              mt.prototype.rows || r.Sg(mt.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: { rows: { n: 1, c: Nt, r: !0, q: !0 } },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = r.w0(mt.M())), mt.sm_mbf;
          }
          toObject(t = !1) {
            return mt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(mt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(mt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new mt();
            return mt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(mt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(mt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Response";
          }
        }
        class xt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              xt.prototype.broadcast_channel_id || r.Sg(xt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = r.w0(xt.M())), xt.sm_mbf;
          }
          toObject(t = !1) {
            return xt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(xt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(xt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new xt();
            return xt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(xt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(xt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Request";
          }
        }
        class Vt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Vt.prototype.broadcast_clip_id || r.Sg(Vt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    app_id: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    broadcaster_steamid: {
                      n: 4,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    creator_steamid: {
                      n: 5,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    video_description: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    live_time: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    length_ms: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 9,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Vt.sm_m
            );
          }
          static MBF() {
            return Vt.sm_mbf || (Vt.sm_mbf = r.w0(Vt.M())), Vt.sm_mbf;
          }
          toObject(t = !1) {
            return Vt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Vt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Vt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Vt();
            return Vt.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Vt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Vt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_BroadcastClipInfo";
          }
        }
        class ee extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ee.prototype.clips || r.Sg(ee.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    clips: { n: 1, c: Vt, r: !0, q: !0 },
                    thumbnail_host: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = r.w0(ee.M())), ee.sm_mbf;
          }
          toObject(t = !1) {
            return ee.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ee.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ee.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ee();
            return ee.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ee.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ee.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Response";
          }
        }
        class re extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              re.prototype.cheer_type || r.Sg(re.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    cheer_type: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    cheer_amount: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = r.w0(re.M())), re.sm_mbf;
          }
          toObject(t = !1) {
            return re.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(re.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(re.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new re();
            return re.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(re.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return re.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(re.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        }
        class ue extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ue.prototype.app_id || r.Sg(ue.M()),
              h.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    app_id: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    cheer_target_id: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    cheers: { n: 3, c: re, r: !0, q: !0 },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = r.w0(ue.M())), ue.sm_mbf;
          }
          toObject(t = !1) {
            return ue.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ue.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ue.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ue();
            return ue.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ue.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ue.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Request";
          }
        }
        class me extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              me.prototype.aggregation_delay_ms || r.Sg(me.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    aggregation_delay_ms: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = r.w0(me.M())), me.sm_mbf;
          }
          toObject(t = !1) {
            return me.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(me.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(me.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new me();
            return me.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(me.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(me.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Response";
          }
        }
        var cr;
        ((c) => {
          function t($, Y, J) {
            return $.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, B.I8)(nt, Y, J),
              jt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.CreateBroadcastChannel = t;
          function e($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, B.I8)(St, Y, J),
              Jt,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          c.GetBroadcastChannelID = e;
          function i($, Y, J) {
            return $.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, B.I8)(kt, Y, J),
              Bt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.SetBroadcastChannelProfile = i;
          function o($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, B.I8)(Rt, Y, J),
              Zt,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          c.GetBroadcastChannelProfile = o;
          function d($, Y, J) {
            return $.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, B.I8)(Qt, Y, J),
              Pt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.SetBroadcastChannelImage = d;
          function f($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, B.I8)(Tt, Y, J),
              rt,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          c.GetBroadcastChannelImages = f;
          function M($, Y, J) {
            return $.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, B.I8)(Lt, Y, J),
              H,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.SetBroadcastChannelLinkRegions = M;
          function D($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, B.I8)(Dt, Y, J),
              vt,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          c.GetBroadcastChannelLinks = D;
          function Q($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, B.I8)(G, Y, J),
              ot,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.GetBroadcastChannelBroadcasters = Q;
          function Me($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, B.I8)(Ae, Y, J),
              Ht,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.GetFollowedChannels = Me;
          function Fe($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, B.I8)(Ee, Y, J),
              Xt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.GetSubscribedChannels = Fe;
          function Pe($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, B.I8)(Et, Y, J),
              it,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          c.GetBroadcastChannelStatus = Pe;
          function Ne($, Y, J) {
            return $.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, B.I8)(Kt, Y, J),
              T,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.FollowBroadcastChannel = Ne;
          function tr($, Y, J) {
            return $.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, B.I8)(dt, Y, J),
              X,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.SubscribeBroadcastChannel = tr;
          function ai($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, B.I8)(xt, Y, J),
              ee,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          c.GetBroadcastChannelClips = ai;
          function Ot($, Y, J) {
            return $.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, B.I8)(n, Y, J),
              u,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.ReportBroadcastChannel = Ot;
          function j($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, B.I8)(b, Y, J),
              I,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.GetBroadcastChannelInteraction = j;
          function pr($, Y, J) {
            return $.SendMsg("SteamTV.GetGames#1", (0, B.I8)(P, Y, J), K, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          c.GetGames = pr;
          function Xe($, Y, J) {
            return $.SendMsg("SteamTV.GetChannels#1", (0, B.I8)(at, Y, J), ut, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          c.GetChannels = Xe;
          function jn($, Y, J) {
            return $.SendMsg("SteamTV.AddChatBan#1", (0, B.I8)(It, Y, J), Qe, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          c.AddChatBan = jn;
          function Dn($, Y, J) {
            return $.SendMsg("SteamTV.GetChatBans#1", (0, B.I8)(ae, Y, J), oe, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          c.GetChatBans = Dn;
          function Fn($, Y, J) {
            return $.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, B.I8)(U, Y, J),
              Ke,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.AddChatModerator = Fn;
          function Wn($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, B.I8)(Ft, Y, J),
              Gt,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          c.GetChatModerators = Wn;
          function Pn($, Y, J) {
            return $.SendMsg("SteamTV.AddWordBan#1", (0, B.I8)(le, Y, J), ke, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          c.AddWordBan = Pn;
          function An($, Y, J) {
            return $.SendMsg("SteamTV.GetWordBans#1", (0, B.I8)(ce, Y, J), $t, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          c.GetWordBans = An;
          function Nn($, Y, J) {
            return $.SendMsg("SteamTV.JoinChat#1", (0, B.I8)(Wt, Y, J), At, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          c.JoinChat = Nn;
          function Un($, Y, J) {
            return $.SendMsg("SteamTV.Search#1", (0, B.I8)(qt, Y, J), de, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          c.Search = Un;
          function Sn($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, B.I8)(Be, Y, J),
              Yt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.GetSteamTVUserSettings = Sn;
          function Ln($, Y, J) {
            return $.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, B.I8)(te, Y, J),
              We,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.SetSteamTVUserSettings = Ln;
          function En($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, B.I8)(l, Y, J),
              m,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          c.GetMyBroadcastChannels = En;
          function kn($, Y, J) {
            return $.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, B.I8)(Se, Y, J),
              mt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          c.GetHomePageContents = kn;
          function Hn($, Y, J) {
            return $.SendMsg("SteamTV.AppCheer#1", (0, B.I8)(ue, Y, J), me, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          c.AppCheer = Hn;
        })(cr || (cr = {}));
        var De = g(27066),
          dr = g(8323),
          A = g(18210),
          F = g(3166),
          Zr = g(71944),
          zr = g(99412),
          Le = g(59514),
          jr = g(36191),
          Lr = g(71742),
          ze = g(66781);
        class ie extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ie.prototype.language || r.Sg(ie.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = r.w0(ie.M())), ie.sm_mbf;
          }
          toObject(t = !1) {
            return ie.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ie.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ie.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ie();
            return ie.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ie.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ie.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_UpdateTextFilterDictionary_Notification";
          }
        }
        class se extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              se.prototype.language || r.Sg(se.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = r.w0(se.M())), se.sm_mbf;
          }
          toObject(t = !1) {
            return se.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(se.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(se.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new se();
            return se.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(se.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(se.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Request";
          }
        }
        class he extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              he.prototype.dictionary || r.Sg(he.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    dictionary: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = r.w0(he.M())), he.sm_mbf;
          }
          toObject(t = !1) {
            return he.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(he.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(he.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new he();
            return he.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(he.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return he.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(he.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Response";
          }
        }
        class fe extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              fe.prototype.language || r.Sg(fe.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = r.w0(fe.M())), fe.sm_mbf;
          }
          toObject(t = !1) {
            return fe.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(fe.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(fe.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new fe();
            return fe.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(fe.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(fe.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_TextFilterDictionaryChanged_Notification";
          }
        }
        class ge extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ge.prototype.pid || r.Sg(ge.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    pid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = r.w0(ge.M())), ge.sm_mbf;
          }
          toObject(t = !1) {
            return ge.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ge.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ge.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ge();
            return ge.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ge.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ge.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Request";
          }
        }
        class pe extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pe.prototype.gameid || r.Sg(pe.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    gameid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = r.w0(pe.M())), pe.sm_mbf;
          }
          toObject(t = !1) {
            return pe.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(pe.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(pe.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new pe();
            return pe.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(pe.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(pe.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Response";
          }
        }
        class be extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              be.prototype.gameid || r.Sg(be.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    gameid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    should_handle: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = r.w0(be.M())), be.sm_mbf;
          }
          toObject(t = !1) {
            return be.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(be.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(be.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new be();
            return be.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(be.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(be.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
          }
        }
        class we extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              we.prototype.search_term || r.Sg(we.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    search_term: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    max_results: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = r.w0(we.M())), we.sm_mbf;
          }
          toObject(t = !1) {
            return we.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(we.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(we.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new we();
            return we.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(we.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return we.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(we.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
          }
        }
        class ye extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ye.prototype.appids || r.Sg(ye.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = r.w0(ye.M())), ye.sm_mbf;
          }
          toObject(t = !1) {
            return ye.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ye.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ye.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ye();
            return ye.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ye.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ye.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
          }
        }
        var br;
        ((c) => {
          c.UpdateTextFilterDictionaryHandler = {
            name: "SteamEngine.UpdateTextFilterDictionary#1",
            request: ie,
          };
          function t(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultHandlerRegistry()),
              j == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : j.RegisterServiceNotificationHandler(
                    c.UpdateTextFilterDictionaryHandler,
                    Ot,
                  )
            );
          }
          c.RegisterForUpdateTextFilterDictionary = t;
          function e(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : j.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, B.I8)(ie, Ot),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.UpdateTextFilterDictionary = e;
          function i(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : j.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, B.I8)(ie, Ot),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (c.SendMsgUpdateTextFilterDictionary = i),
            (c.GetTextFilterDictionaryHandler = {
              name: "SteamEngine.GetTextFilterDictionary#1",
              request: se,
              response: he,
            });
          function o(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? new Promise((pr, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : j.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, B.I8)(se, Ot),
                    he,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.GetTextFilterDictionary = o;
          function d(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? new Promise((pr, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : j.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, B.I8)(se, Ot),
                    he,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (c.SendMsgGetTextFilterDictionary = d),
            (c.NotifyTextFilterDictionaryChangedHandler = {
              name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
              request: fe,
            });
          function f(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultHandlerRegistry()),
              j == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : j.RegisterServiceNotificationHandler(
                    c.NotifyTextFilterDictionaryChangedHandler,
                    Ot,
                  )
            );
          }
          c.RegisterForNotifyTextFilterDictionaryChanged = f;
          function M(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : j.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, B.I8)(fe, Ot),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.NotifyTextFilterDictionaryChanged = M;
          function D(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : j.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, B.I8)(fe, Ot),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (c.SendMsgNotifyTextFilterDictionaryChanged = D),
            (c.GetGameIDForPIDHandler = {
              name: "SteamEngine.GetGameIDForPID#1",
              request: ge,
              response: pe,
            });
          function Q(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? new Promise((pr, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : j.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, B.I8)(ge, Ot),
                    pe,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.GetGameIDForPID = Q;
          function Me(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? new Promise((pr, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : j.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, B.I8)(ge, Ot),
                    pe,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (c.SendMsgGetGameIDForPID = Me),
            (c.SetOverlayEscapeKeyHandlingHandler = {
              name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
              request: be,
            });
          function Fe(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultHandlerRegistry()),
              j == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : j.RegisterServiceNotificationHandler(
                    c.SetOverlayEscapeKeyHandlingHandler,
                    Ot,
                  )
            );
          }
          c.RegisterForSetOverlayEscapeKeyHandling = Fe;
          function Pe(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : j.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, B.I8)(be, Ot),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.SetOverlayEscapeKeyHandling = Pe;
          function Ne(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : j.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, B.I8)(be, Ot),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (c.SendMsgSetOverlayEscapeKeyHandling = Ne),
            (c.SearchAppDataCacheByStoreKeywordsHandler = {
              name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
              request: we,
              response: ye,
            });
          function tr(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? new Promise((pr, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : j.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, B.I8)(we, Ot),
                    ye,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.SearchAppDataCacheByStoreKeywords = tr;
          function ai(Ot, j) {
            return (
              (j = j || (0, ze.OI)().GetDefaultTransport()),
              j == null
                ? new Promise((pr, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : j.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, B.I8)(we, Ot),
                    ye,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.SendMsgSearchAppDataCacheByStoreKeywords = ai;
        })(br || (br = {}));
        var ve = g(54963),
          Fi = g(15369),
          Er = g(94354),
          li = g(57589);
        const ci = 0,
          Wi = 1,
          Pi = 2,
          Xn = 3;
        function Kn(c) {
          return "unknown EClientExecutionSite ( " + c + " )";
        }
        class or extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return or.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new or();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new or();
            return or.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return or.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "WebUINoResponse";
          }
        }
        var Ai = Object.defineProperty,
          Ni = Object.getOwnPropertyDescriptor,
          di = (c, t, e, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Ni(t, e) : t, d = c.length - 1, f;
              d >= 0;
              d--
            )
              (f = c[d]) && (o = (i ? f(t, e, o) : f(o)) || o);
            return i && o && Ai(t, e, o), o;
          };
        class Qr {
          constructor() {
            (0, N.Gn)(this);
          }
          m_mapCallbacks = new Map();
          m_rgRegisteredEMsgs = [];
          m_mapServiceMethodHandlers = new Map();
          m_rgRegisteredServiceMethodHandlers = [];
          DispatchMsgToHandlers(t, e) {
            let i = t.GetEMsg();
            if (i == Er.bSr) {
              let o = t.Hdr().target_job_name();
              if (o) {
                let d = this.m_mapServiceMethodHandlers.get(o);
                if (d) {
                  this.DEBUG_LogMessageDispatch(t, d[0]);
                  for (let f of d)
                    try {
                      f.invoke(t, e);
                    } catch (M) {
                      M instanceof Error
                        ? (0, jr.aj)().ReportError(M)
                        : console.error(
                            `MessageHandlers failed to dispatch message to handler (${o}): `,
                            M,
                          );
                    }
                  return !0;
                }
              }
            } else {
              let o = this.m_mapCallbacks.get(i);
              if (o) {
                this.DEBUG_LogMessageDispatch(t, o[0]);
                for (let d of o)
                  try {
                    d.invoke(t);
                  } catch (f) {
                    f instanceof Error
                      ? (0, jr.aj)().ReportError(f)
                      : console.error(
                          "MessageHandlers failed to dispatch message to handler: ",
                          f,
                        );
                  }
                return !0;
              }
            }
            return !1;
          }
          DEBUG_LogMessageDispatch(t, e) {}
          get emsg_list() {
            return this.m_rgRegisteredEMsgs;
          }
          get servicemethod_list() {
            return this.m_rgRegisteredServiceMethodHandlers;
          }
          AddCallback(t, e, i) {
            let o = this.m_mapCallbacks.get(t);
            return (
              o ||
                ((o = []),
                this.m_mapCallbacks.set(t, o),
                this.m_rgRegisteredEMsgs.push(t)),
              o.push({ invoke: i, msgClass: e }),
              {
                invoke: i,
                unregister: () => {
                  let d = this.m_mapCallbacks.get(t);
                  if (d)
                    for (let f = 0; f < d.length; f++)
                      d[f].invoke == i && (d.splice(f, 1), f--);
                },
              }
            );
          }
          AddServiceMethodHandler(t, e) {
            let i = (o, d) => {
              let f = B.w.InitFromMsg(t.request, o),
                M = B.w.Init(t.response, Er.kHd),
                D = e(f, M),
                Q = (Me) => {
                  M.Hdr().set_eresult(Me), d(M);
                };
              D instanceof Promise
                ? D.then(Q).catch(() => {
                    Q(E.zi);
                  })
                : Q(D);
            };
            return (
              this.m_mapServiceMethodHandlers.has(t.name)
                ? console.error("Duplicate registration for method " + t.name)
                : (this.m_mapServiceMethodHandlers.set(t.name, [
                    { invoke: i, msgClass: t.request },
                  ]),
                  this.m_rgRegisteredServiceMethodHandlers.push(t.name)),
              {
                invoke: i,
                unregister: () => {
                  let o = this.m_mapServiceMethodHandlers.get(t.name);
                  if (o)
                    for (let d = 0; d < o.length; d++)
                      o[d].invoke == i && (o.splice(d, 1), d--);
                },
              }
            );
          }
          AddServiceNotificationHandler(t, e) {
            let i = (d, f) => {
                let M = B.w.InitFromMsg(t.request, d);
                e(M);
              },
              o = this.m_mapServiceMethodHandlers.get(t.name);
            return (
              o ||
                ((o = []),
                this.m_mapServiceMethodHandlers.set(t.name, o),
                this.m_rgRegisteredServiceMethodHandlers.push(t.name)),
              o.push({ invoke: i, msgClass: t.request }),
              {
                invoke: i,
                unregister: () => {
                  let d = this.m_mapServiceMethodHandlers.get(t.name);
                  if (d)
                    for (let f = 0; f < d.length; f++)
                      d[f].invoke == i && (d.splice(f, 1), f--);
                },
              }
            );
          }
          RegisterBaseEMessageHandler(t, e) {
            return this.AddCallback(t, void 0, e);
          }
          RegisterEMessageHandler(t, e, i) {
            return this.AddCallback(t, e, (o) => {
              i(B.w.InitFromMsg(e, o));
            });
          }
          RegisterEMessageAction(t, e, i) {
            return this.AddCallback(t, e, (o) => {
              (0, N.h5)(() => {
                i(B.w.InitFromMsg(e, o));
              });
            });
          }
          RegisterServiceNotificationHandler(t, e) {
            return this.AddServiceNotificationHandler(t, e);
          }
          RegisterServiceNotificationHandlerAction(t, e) {
            return this.AddServiceNotificationHandler(t, (i) => {
              let o;
              return (
                (0, N.h5)(() => {
                  o = e(i);
                }),
                o
              );
            });
          }
          RegisterServiceMethodHandler(t, e) {
            return this.AddServiceMethodHandler(t, e);
          }
          RegisterServiceMethodHandlerAction(t, e) {
            return this.AddServiceMethodHandler(t, (i, o) => {
              let d;
              return (
                (0, N.h5)(() => {
                  d = e(i, o);
                }),
                d
              );
            });
          }
        }
        di([N.sH], Qr.prototype, "m_rgRegisteredEMsgs", 2),
          di([N.sH], Qr.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
        class ne extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ne.prototype.auth_key || r.Sg(ne.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    auth_key: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = r.w0(ne.M())), ne.sm_mbf;
          }
          toObject(t = !1) {
            return ne.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ne.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ne.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new ne();
            return ne.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ne.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ne.M(), t, e);
          }
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Request";
          }
        }
        class Te extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Te.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Te();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Te();
            return Te.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Response";
          }
        }
        class Ge extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ge.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ge();
          }
          static deserializeBinary(t) {
            let e = new (a().BinaryReader)(t),
              i = new Ge();
            return Ge.deserializeBinaryFromReader(i, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (a().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (a().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_StartShutdown_Notification";
          }
        }
        var Dr;
        ((c) => {
          c.AuthenticateHandler = {
            name: "TransportAuth.Authenticate#1",
            request: ne,
            response: Te,
          };
          function t(f, M) {
            return (
              (M = M || (0, ze.OI)().GetDefaultTransport()),
              M == null
                ? new Promise((D, Q) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Q(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : M.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, B.I8)(ne, f),
                    Te,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          c.Authenticate = t;
          function e(f, M) {
            return (
              (M = M || (0, ze.OI)().GetDefaultTransport()),
              M == null
                ? new Promise((D, Q) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Q(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : M.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, B.I8)(ne, f),
                    Te,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          (c.SendMsgAuthenticate = e),
            (c.NotifyStartShutdownHandler = {
              name: "TransportAuth.NotifyStartShutdown#1",
              request: Ge,
            });
          function i(f, M) {
            return (
              (M = M || (0, ze.OI)().GetDefaultHandlerRegistry()),
              M == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : M.RegisterServiceNotificationHandler(
                    c.NotifyStartShutdownHandler,
                    f,
                  )
            );
          }
          c.RegisterForNotifyStartShutdown = i;
          function o(f, M) {
            return (
              (M = M || (0, ze.OI)().GetDefaultTransport()),
              M == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : M.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, B.I8)(Ge, f),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          c.NotifyStartShutdown = o;
          function d(f, M) {
            return (
              (M = M || (0, ze.OI)().GetDefaultTransport()),
              M == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : M.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, B.I8)(Ge, f),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          c.SendMsgNotifyStartShutdown = d;
        })(Dr || (Dr = {}));
        var Ui = g(98609),
          Si = g(13854),
          Li = Object.defineProperty,
          Ei = Object.getOwnPropertyDescriptor,
          kr = (c, t, e, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Ei(t, e) : t, d = c.length - 1, f;
              d >= 0;
              d--
            )
              (f = c[d]) && (o = (i ? f(t, e, o) : f(o)) || o);
            return i && o && Li(t, e, o), o;
          };
        class Fr {
          m_socket = null;
          m_sName;
          m_sURL;
          Log = new li.wd("CWebSocketConnection", () => this.m_sName);
          m_bDisconnectRequested = !1;
          m_bConnecting = !1;
          m_fnOnMessageHandler;
          m_fnOnCloseHandler;
          m_fnOnReconnectStartHandler;
          m_fnOnReconnectFinishHandler;
          m_nConnectAttemptsMax;
          m_nConnectAttemptTimeoutMs;
          m_bReconnectOnFailure;
          m_nReconnectAttemptTimeoutMs;
          m_nReconnectAttemptsMax;
          constructor(t, e) {
            (this.m_sName = t),
              (this.m_fnOnMessageHandler = e.fnOnMessageHandler),
              (this.m_fnOnCloseHandler = e.fnOnCloseHandler),
              (this.m_fnOnReconnectStartHandler =
                e.fnOnReconnectStartHandler ?? (() => {})),
              (this.m_fnOnReconnectFinishHandler =
                e.fnOnReconnectFinishHandler ?? (() => {})),
              (this.m_nConnectAttemptsMax = e.nConnectAttemptsMax ?? 8),
              (this.m_nConnectAttemptTimeoutMs =
                e.nConnectAttemptTimeoutMs ?? 1e3),
              (this.m_bReconnectOnFailure = e.bReconnectOnFailure ?? !1),
              (this.m_nReconnectAttemptsMax = e.nReconnectAttemptsMax ?? 3e4),
              (this.m_nReconnectAttemptTimeoutMs =
                e.nReconnectAttemptTimeoutMs ?? 1e4);
          }
          get name() {
            return this.m_sName;
          }
          async Connect(t) {
            return (
              (this.m_sURL = t),
              this.ConnectWithRetry(
                this.m_sURL,
                this.m_nConnectAttemptsMax,
                this.m_nConnectAttemptTimeoutMs,
              )
            );
          }
          async Reconnect() {
            return this.ConnectWithRetry(
              this.m_sURL,
              this.m_nReconnectAttemptsMax,
              this.m_nReconnectAttemptTimeoutMs,
            );
          }
          GetInterAttemptBackoffMs(t) {
            return (0, Si.OQ)(t, 1, 5) * 1e3;
          }
          async ConnectWithRetry(t, e, i) {
            this.m_bConnecting = !0;
            let o = 0;
            do {
              try {
                const f = await this.ConnectToSocket(t, i);
                if (f.result == E.R) return (this.m_bConnecting = !1), f;
                this.Log.Warning(
                  `connect attempt failed: ${f.result} - ${f.message}`,
                );
              } catch (f) {
                this.Log.Warning(
                  `connect attempt failed: exception ${f.name} - ${f}`,
                );
              }
              const d = this.GetInterAttemptBackoffMs(o);
              this.Log.Info(`connect retry: attempt:${o}/${e} backoff:${d}`),
                await new Promise((f) => setTimeout(f, d)),
                (this.m_socket = null),
                (o += 1);
            } while (o < e);
            return (
              this.Log.Warning(
                `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
              ),
              (this.m_bConnecting = !1),
              this.BShouldReconnect() && this.StartReconnect(),
              { result: E.zi, message: "not ready, exceeded retry count" }
            );
          }
          Disconnect() {
            this.Log.Info("disconnect requested"),
              (this.m_bDisconnectRequested = !0),
              this.m_socket.close();
          }
          PrepareForShutdown() {
            this.Log.Info("shutdown pending"),
              (this.m_bDisconnectRequested = !0);
          }
          BShouldReconnect() {
            return this.m_bConnecting || !this.m_bReconnectOnFailure
              ? !1
              : !this.m_bDisconnectRequested;
          }
          async StartReconnect() {
            if (
              (this.Log.Info("start reconnect"),
              (this.m_socket = null),
              this.m_fnOnReconnectStartHandler({ connection: this }),
              (await this.Reconnect()).result != E.R)
            ) {
              this.Log.Warning("failed to re-connect to websocket after close"),
                this.m_fnOnReconnectFinishHandler({
                  connection: this,
                  eResult: E.zi,
                }),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !0,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            this.Log.Info("reconnect successful"),
              this.m_fnOnReconnectFinishHandler({
                connection: this,
                eResult: E.R,
              });
          }
          async ConnectToSocket(t, e) {
            if (this.m_socket != null)
              return this.m_socket.readyState != WebSocket.OPEN
                ? (this.Log.Error(
                    `websocket in an unexpected state: ${this.m_socket.readyState}`,
                  ),
                  { result: E.zi, message: "websocket in an unexpected state" })
                : { result: E.R, message: "ready" };
            try {
              this.m_socket = new WebSocket(t);
            } catch {
              return (
                this.Log.Warning("failed to initialize websocket connection"),
                {
                  result: E.iV,
                  message: "Failed to initialize websocket connection",
                }
              );
            }
            return (
              (this.m_socket.binaryType = "arraybuffer"),
              (this.m_socket.onerror = this.OnSocketError),
              (this.m_socket.onmessage = this.OnSocketMessage),
              (this.m_socket.onopen = this.OnSocketOpen),
              (this.m_socket.onclose = this.OnSocketClose),
              (await this.WaitForSocketOpen(this.m_socket, e))
                ? (this.Log.Info("connection ready"),
                  { result: E.R, message: "ready" })
                : (this.Log.Warning("failed to reach open state"),
                  { result: E.zi, message: "failed to reach open state" })
            );
          }
          async WaitForSocketOpen(t, e) {
            if (t.readyState != WebSocket.CONNECTING)
              return t.readyState == WebSocket.OPEN;
            const i = 100;
            let o = e / i;
            for (; t.readyState == WebSocket.CONNECTING && o > 0; )
              o--, await new Promise((d) => setTimeout(d, i));
            return t.readyState == WebSocket.OPEN;
          }
          BCanSendMessages() {
            return (
              this.m_socket != null &&
              this.m_socket.readyState == WebSocket.OPEN
            );
          }
          OnSocketError(t) {
            this.Log.Warning("websocket error");
          }
          OnSocketOpen(t) {
            this.Log.Info("websocket open");
          }
          OnSocketClose(t) {
            if (this.m_bDisconnectRequested) {
              this.Log.Info("websocket closed"),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !1,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            if (this.m_bConnecting) return;
            this.Log.Warning("websocket unexpectedly closed");
            const e = this.BShouldReconnect();
            this.m_fnOnCloseHandler({
              connection: this,
              bError: !0,
              bIsExpectedToReconnect: e,
            }),
              e && this.StartReconnect();
          }
          async OnSocketMessage(t) {
            this.m_fnOnMessageHandler(t.data);
          }
          SendSerializedMessage(t) {
            try {
              return this.m_socket.send(t), E.R;
            } catch {
              return E.zi;
            }
          }
        }
        kr([ve.oI], Fr.prototype, "OnSocketError", 1),
          kr([ve.oI], Fr.prototype, "OnSocketOpen", 1),
          kr([ve.oI], Fr.prototype, "OnSocketClose", 1),
          kr([ve.oI], Fr.prototype, "OnSocketMessage", 1);
        var ki = Object.defineProperty,
          Hi = Object.getOwnPropertyDescriptor,
          Wr = (c, t, e, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Hi(t, e) : t, d = c.length - 1, f;
              d >= 0;
              d--
            )
              (f = c[d]) && (o = (i ? f(t, e, o) : f(o)) || o);
            return i && o && ki(t, e, o), o;
          };
        const Xi = "localhost",
          qe = new li.wd("WebUITransport");
        class wr {
          m_iMsgSeq = 1;
          m_mapPendingMethodRequests = new Map();
          m_messageHandlers = new Qr();
          m_mapServiceCallErrorCount = new Map();
          m_mapConnectionDetails = new Map();
          m_fnOnStatusEventHandler;
          m_fnOnReconnectErrorHandler;
          m_bInitialized = !1;
          m_nMaximumMsgSizeBytes = 1024;
          BIsValid() {
            return this.m_bInitialized;
          }
          GetMaximumMsgSizeBytes() {
            return this.m_nMaximumMsgSizeBytes;
          }
          TEST_GetMaximumMsgBodySizeBytes() {
            return (
              this.m_nMaximumMsgSizeBytes -
              this.TEST_GetMsgHeaderEstimatedSizeBytes()
            );
          }
          TEST_GetMsgHeaderEstimatedSizeBytes() {
            return 128;
          }
          TEST_GetExcessivelyLargeBodySize() {
            return 64 * 1024 * 1024;
          }
          ReportError(t) {
            qe.Warning(t);
            const e = (0, jr.aj)();
            e &&
              e.ReportError(new Error(t), {
                bIncludeMessageInIdentifier: !0,
                cCallsitesToIgnore: 1,
              });
          }
          async Init() {
            if (!Ui.TS.IN_CLIENT) return;
            const t = await SteamClient.WebUITransport.GetTransportInfo();
            (this.m_nMaximumMsgSizeBytes = t.nMaximumMsgSizeBytes),
              this.CreateConnection(
                Wi,
                "steamUI",
                t.portSteamUI,
                t.authKeySteamUI,
              ),
              this.CreateConnection(
                Pi,
                "clientdll",
                t.portClientdll,
                t.authKeyClientdll,
              ),
              (0, ze.OI)().SetDefaultTransport(this),
              (0, ze.OI)().SetDefaultHandlerRegistry(this.m_messageHandlers),
              Dr.RegisterForNotifyStartShutdown(this.OnStartShutdown);
          }
          get messageHandlers() {
            return this.m_messageHandlers;
          }
          SetStatusEventHandler(t) {
            this.m_fnOnStatusEventHandler = t;
          }
          SetReconnectErrorHandler(t) {
            this.m_fnOnReconnectErrorHandler = t;
          }
          CreateConnection(t, e, i, o) {
            const d = {
                bReconnectOnFailure: !0,
                fnOnMessageHandler: this.OnWebsocketMessage,
                fnOnCloseHandler: this.OnWebsocketClose,
                fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
                fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
                nConnectAttemptsMax: 8,
                nConnectAttemptTimeoutMs: 1e4,
                nReconnectAttemptsMax: 8,
                nReconnectAttemptTimeoutMs: 1e4,
              },
              f = {
                connection: new Fr(e, d),
                sUrl: `ws://${Xi}:${i}/transportsocket/`,
                sAuthKey: o,
                eClientExecutionSite: t,
              };
            this.m_mapConnectionDetails.set(t, f);
          }
          SendMsg(t, e, i, o) {
            return new Promise((d, f) => {
              const M = o.eClientExecutionSite;
              if (M == null || M == ci) {
                qe.Error(`SendMsg: Invalid client execution site: ${M}`),
                  f(`Transport SendMsg: invalid client execution site ${M}`);
                return;
              }
              const D = this.m_mapConnectionDetails.get(M);
              if (D == null) {
                qe.Error(
                  `SendMsg: could not find connection for execution site: ${M}`,
                ),
                  f(
                    `Transport SendMsg: could not find connection for execution site ${M}`,
                  );
                return;
              }
              const Q = D.connection;
              if (!Q.BCanSendMessages()) {
                const Ne = this.m_mapServiceCallErrorCount.get(t) ?? 1;
                this.m_mapServiceCallErrorCount.set(t, Ne + 1);
                const tr = `SendMsg: Attempt to send message but socket wasn't ready: ${Q.name} - ${t}`;
                Ne == 1 && this.ReportError(tr),
                  qe.Warning(tr + ` error count: ${Ne}`),
                  f("Transport SendMsg: socket not ready");
                return;
              }
              const Me = this.m_iMsgSeq++;
              e.SetEMsg(Er.bSr),
                e.Hdr().set_target_job_name(t),
                e.Hdr().set_jobid_source("" + Me);
              const Fe = e.Serialize();
              if (Fe.byteLength >= this.m_nMaximumMsgSizeBytes) {
                qe.Error(
                  `SendMsg: message exceeds maximum size: ${Fe.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
                );
                const Ne = B.w.Init(i);
                Ne.Hdr().set_eresult(E.zi), d(Ne);
                return;
              }
              if (Q.SendSerializedMessage(Fe) != E.R) {
                qe.Error("SendMsg: Failed to send message"),
                  f("Transport SendMsg: failed to send message");
                return;
              }
              this.m_mapPendingMethodRequests.set(Me, {
                m_iSeq: Me,
                m_responseClass: i,
                m_fnCallback: d,
                m_fnError: f,
              });
            });
          }
          SendNotification(t, e, i) {
            const o = i.eClientExecutionSite;
            if (o == null || o == ci)
              return (
                qe.Error(
                  `SendNotification: Invalid client execution site: ${o}`,
                ),
                !1
              );
            const d = this.m_mapConnectionDetails.get(o);
            if (d == null)
              return (
                qe.Error(
                  `SendNotification: could not find connection for execution site: ${o}`,
                ),
                !1
              );
            const f = d.connection;
            if (!f.BCanSendMessages()) {
              const D = this.m_mapServiceCallErrorCount.get(t) ?? 1;
              this.m_mapServiceCallErrorCount.set(t, D + 1);
              const Q = `SendNotification: Attempt to send message but socket wasn't ready: ${f.name} - ${t}`;
              return (
                D == 1 && this.ReportError(Q),
                qe.Warning(Q + ` error count: ${D}`),
                !1
              );
            }
            return (
              e.SetEMsg(Er.bSr),
              e.Hdr().set_target_job_name(t),
              f.SendSerializedMessage(e.Serialize()) == E.R
            );
          }
          async ConnectToSite(t) {
            const i = await t.connection.Connect(t.sUrl);
            return i.result != E.R
              ? i
              : (await this.SendAuthMessage(t)).BSuccess()
                ? { result: E.R, message: "connected" }
                : { result: E.zi, message: "client auth failed" };
          }
          async MakeReady() {
            const t = [];
            for (const [i, o] of this.m_mapConnectionDetails)
              t.push(this.ConnectToSite(o));
            const e = await Promise.all(t);
            (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
            for (const i of e) if (i.result != E.R) return i;
            return { result: E.R, message: "ready" };
          }
          GetConnectionDetails(t) {
            for (const [e, i] of this.m_mapConnectionDetails)
              if (i.connection === t) return i;
            return (
              qe.Error("GetConnectionDetails: failed to identify connection"),
              null
            );
          }
          DispatchTransportStatusUpdate() {
            if (!this.m_fnOnStatusEventHandler) return;
            let t = !0;
            for (const [e, i] of this.m_mapConnectionDetails)
              i.connection.BCanSendMessages() || (t = !1);
            this.m_fnOnStatusEventHandler({ bConnected: t });
          }
          OnWebsocketReconnectStart(t) {
            this.DispatchTransportStatusUpdate();
          }
          OnWebsocketReconnectFinish(t) {
            if ((this.DispatchTransportStatusUpdate(), t.eResult != E.R)) {
              qe.Warning(
                "OnWebsocketReconnect: Failed to reconnect to steam client",
              ),
                this.m_fnOnReconnectErrorHandler?.({});
              return;
            }
            this.FailAllPendingRequests();
            const e = this.GetConnectionDetails(t.connection);
            e && this.SendAuthMessage(e);
          }
          OnWebsocketClose(t) {
            t.bIsExpectedToReconnect || this.FailAllPendingRequests();
          }
          OnWebsocketMessage(t) {
            const e = new Fi.pV(t),
              i = B.w.InitHeaderFromPacket(e);
            i.Hdr().jobid_target() && i.Hdr().jobid_target() !== zr.kFb
              ? this.DispatchMethodResponse(i)
              : this.DispatchNotification(i);
          }
          DispatchMethodResponse(t) {
            const e = parseInt(t.Hdr().jobid_target()),
              i = this.m_mapPendingMethodRequests.get(e);
            if (i == null) {
              (0, Lr.wT)(
                !1,
                "Transport Error: no pending callback for request",
              );
              return;
            }
            (0, Lr.wT)(
              e == i.m_iSeq,
              "Transport Error: mistmatched request sequence",
            ),
              this.m_mapPendingMethodRequests.delete(e);
            const o = B.w.InitFromMsg(i.m_responseClass, t);
            i.m_fnCallback(o);
          }
          DispatchNotification(t) {
            const e = (i) => {
              (0, Lr.wT)(
                !1,
                "Transport Error: A notification should not generate a response",
              );
            };
            this.m_messageHandlers.DispatchMsgToHandlers(t, e);
          }
          FailAllPendingRequests() {
            for (const [t, e] of this.m_mapPendingMethodRequests) {
              this.ReportError(
                `FailAllPendingRequests: forcing failure for request: ${e.m_responseClass.name}`,
              );
              let i = B.w.Init(e.m_responseClass);
              i.Hdr().set_eresult(E.zi), e.m_fnCallback(i);
            }
            this.m_mapPendingMethodRequests.clear();
          }
          async SendAuthMessage(t) {
            const e = Dr.AuthenticateHandler.name,
              i = { eClientExecutionSite: t.eClientExecutionSite },
              o = B.w.Init(ne);
            return (
              o.Hdr().set_webui_auth_key(t.sAuthKey),
              await this.SendMsg(e, o, Dr.AuthenticateHandler.response, i)
            );
          }
          OnStartShutdown(t) {
            for (const [e, i] of this.m_mapConnectionDetails)
              i.connection.PrepareForShutdown();
            return E.R;
          }
        }
        Wr([ve.oI], wr.prototype, "OnWebsocketReconnectStart", 1),
          Wr([ve.oI], wr.prototype, "OnWebsocketReconnectFinish", 1),
          Wr([ve.oI], wr.prototype, "OnWebsocketClose", 1),
          Wr([ve.oI], wr.prototype, "OnWebsocketMessage", 1),
          Wr([ve.oI], wr.prototype, "OnStartShutdown", 1);
        const Ki = new wr();
        var $i = Object.defineProperty,
          Yi = Object.getOwnPropertyDescriptor,
          Ve = (c, t, e, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Yi(t, e) : t, d = c.length - 1, f;
              d >= 0;
              d--
            )
              (f = c[d]) && (o = (i ? f(t, e, o) : f(o)) || o);
            return i && o && $i(t, e, o), o;
          };
        function yr() {
          return F.TS.IN_MOBILE ? F.NQ : (0, F.xv)();
        }
        function Ji(c) {
          if (c === "") return !1;
          try {
            return new RegExp("\\b(" + c + ")\\b", "ugi"), !0;
          } catch {
            return (
              console.log(
                `'${c}' is an invalid expression, removing from text filter`,
              ),
              !1
            );
          }
        }
        const Ri = 3600,
          Tr = "(1)";
        class $e {
          m_WebUIServiceTransport;
          m_unAccountID;
          m_Transport = null;
          m_Storage = null;
          m_TextFilterPreferences = {
            eTextFilterSetting: Le.Bx6.NS,
            bIgnoreFriends: !1,
          };
          m_TextFilterWords;
          m_mapPlayerCache = new Map();
          m_strBannedWords = "";
          m_strProfanityWords = "";
          m_strCleanWords = "";
          m_strBannedPattern = "";
          m_strCleanPattern = "";
          m_regexBannedWords = null;
          m_regexCleanWords = null;
          m_bShownFilterTip = !1;
          m_bInitialized = !1;
          m_bFilterChangedWhileLoading = !1;
          m_bOngoingLoad = !1;
          m_DataAccess;
          constructor(t) {
            (0, N.Gn)(this);
            let e = new Le.B4H();
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: e.text_filter_setting(),
              bIgnoreFriends: e.text_filter_ignore_friends(),
            }),
              (this.m_TextFilterWords = new Le.EyI()),
              (this.m_DataAccess = t);
          }
          async Init(t = 0, e = null, i = null) {
            (this.m_bInitialized = !1),
              (this.m_WebUIServiceTransport = Ki),
              (this.m_unAccountID = t),
              (this.m_Transport = e),
              (this.m_Storage = i),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              this.InitSteamEngineLanguages(),
              await this.LoadFilter(),
              await this.LoadTextFilterPreferences(),
              await this.LoadTextFilterWords(),
              await this.RequestUpdatedSettings(),
              await (0, N.z7)(() => !this.m_bOngoingLoad),
              await this.InitFiltersWithRetry();
          }
          InitSteamEngineLanguages() {
            this.m_WebUIServiceTransport.BIsValid() &&
              (this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
                br.NotifyTextFilterDictionaryChangedHandler,
                this.OnTextFilterDictionaryChanged,
              ),
              this.InitSteamEngineLanguage(F.TS.LANGUAGE),
              F.TS.LANGUAGE !== "english" &&
                this.InitSteamEngineLanguage("english"));
          }
          OnTextFilterDictionaryChanged(t) {
            return (
              this.m_bInitialized
                ? this.InitFiltersWithRetry()
                : (this.m_bFilterChangedWhileLoading = !0),
              E.R
            );
          }
          async InitFiltersWithRetry() {
            do
              (this.m_bFilterChangedWhileLoading = !1),
                (this.m_bInitialized = !1),
                (this.m_bOngoingLoad = !0),
                await this.LoadLanguages(),
                this.OnFilterDataChanged(),
                (this.m_bInitialized = !0);
            while (this.m_bFilterChangedWhileLoading);
            this.m_bOngoingLoad = !1;
          }
          InitSteamEngineLanguage(t) {
            const e = B.w.Init(ie);
            e.Body().set_language(t),
              e.Body().set_type("profanity"),
              br.SendMsgUpdateTextFilterDictionary(
                e,
                this.m_WebUIServiceTransport,
              ),
              e.Body().set_type("banned"),
              br.SendMsgUpdateTextFilterDictionary(
                e,
                this.m_WebUIServiceTransport,
              );
          }
          GetSteamEngineTextFilterDictionary(t, e) {
            const i = B.w.Init(se);
            return (
              i.Body().set_language(t),
              i.Body().set_type(e),
              br.SendMsgGetTextFilterDictionary(i, this.m_WebUIServiceTransport)
            );
          }
          GetStorageKey(t) {
            return t + "_" + this.m_unAccountID;
          }
          async LoadTextFilterPreferences() {
            if (this.m_Storage) {
              let t = await this.m_Storage.GetObject(
                this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
              );
              t && (this.m_TextFilterPreferences = t);
            }
          }
          SaveTextFilterPreferences() {
            this.m_Storage &&
              this.m_Storage.StoreObject(
                this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
                this.m_TextFilterPreferences,
              );
          }
          ObfuscateString(t) {
            try {
              const e = new TextEncoder().encode(Tr + t);
              return Zr.fromByteArray(e);
            } catch {
              return "";
            }
          }
          DeobfuscateString(t) {
            try {
              const e = Zr.toByteArray(t);
              let i = new TextDecoder().decode(e);
              return i.startsWith(Tr)
                ? ((i = i.slice(Tr.length)), i)
                : (console.log(
                    "DeobfuscateString given invalid base64 data, ignoring: " +
                      t,
                  ),
                  "");
            } catch {
              return "";
            }
          }
          async LoadObfuscatedString(t) {
            if (this.m_Storage) {
              let e = await this.m_Storage.GetString(this.GetStorageKey(t));
              if (e) return this.DeobfuscateString(e);
            }
            return null;
          }
          async SaveObfuscatedString(t, e) {
            this.m_Storage &&
              this.m_Storage.StoreString(
                this.GetStorageKey(t),
                this.ObfuscateString(e),
              );
          }
          async LoadTextFilterWords() {
            let t = await this.LoadObfuscatedString(
              "CTextFilterStore_TextFilterWords",
            );
            if (t)
              try {
                this.m_TextFilterWords = Le.EyI.fromObject(JSON.parse(t));
              } catch {
                console.warn("Error parsing cached text filter word list", t),
                  (this.m_TextFilterWords = new Le.EyI());
              }
          }
          SaveTextFilterWords() {
            this.SaveObfuscatedString(
              "CTextFilterStore_TextFilterWords",
              JSON.stringify(this.m_TextFilterWords.toObject()),
            );
          }
          async LoadFilter() {
            let t = await this.LoadObfuscatedString(
                "CTextFilterStore_strBannedPattern",
              ),
              e = await this.LoadObfuscatedString(
                "CTextFilterStore_strCleanPattern",
              );
            t != null && e != null && this.BRebuildFilter(t, e);
          }
          SaveFilter() {
            this.SaveObfuscatedString(
              "CTextFilterStore_strBannedPattern",
              this.m_strBannedPattern,
            ),
              this.SaveObfuscatedString(
                "CTextFilterStore_strCleanPattern",
                this.m_strCleanPattern,
              );
          }
          async RequestUpdatedSettings() {
            let t = new Le.B4H();
            if (this.m_unAccountID !== 0)
              try {
                if (this.m_Transport) {
                  let e = B.w.Init(Le.tzK);
                  t = (
                    await Le.xtC.GetCommunityPreferences(this.m_Transport, e)
                  )
                    .Body()
                    .preferences();
                } else {
                  let e = { sessionid: (0, F.KC)(), origin: yr() };
                  const i = await v().get(
                    F.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: e, withCredentials: !0 },
                  );
                  t = Le.B4H.fromObject(i.data.preferences);
                }
              } catch {}
            if (
              (this.UpdateCommunityPreferences(t),
              t.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let e = new Le.EyI();
              if (t.text_filter_words_revision() !== 0)
                try {
                  if (this.m_Transport) {
                    let i = B.w.Init(Le.SCE);
                    e = (await Le.xtC.GetTextFilterWords(this.m_Transport, i))
                      .Body()
                      .words();
                  } else {
                    let i = { sessionid: (0, F.KC)(), origin: yr() };
                    const o = await v().get(
                      F.TS.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: i, withCredentials: !0 },
                    );
                    e = Le.EyI.fromObject(o.data.words);
                  }
                } catch {}
              this.UpdateTextFilterWords(e);
            }
          }
          UpdateCommunityPreferences(t) {
            let e = !1;
            t.text_filter_setting() !==
              this.m_TextFilterPreferences?.eTextFilterSetting &&
              ((this.m_TextFilterPreferences.eTextFilterSetting =
                t.text_filter_setting()),
              (e = !0)),
              t.text_filter_ignore_friends() !==
                this.m_TextFilterPreferences.bIgnoreFriends &&
                ((this.m_TextFilterPreferences.bIgnoreFriends =
                  t.text_filter_ignore_friends()),
                (e = !0)),
              e && this.SaveTextFilterPreferences();
          }
          get TextFilterPreferences() {
            return this.m_TextFilterPreferences;
          }
          UpdateTextFilterWords(t) {
            (this.m_TextFilterWords = t), this.SaveTextFilterWords();
          }
          m_nLoadLanguagesRetryTimeout = void 0;
          async LoadLanguages(t = 15) {
            (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = "");
            try {
              await this.LoadLanguage(F.TS.LANGUAGE),
                F.TS.LANGUAGE !== "english" &&
                  (await this.LoadLanguage("english"));
            } catch (e) {
              this.m_nLoadLanguagesRetryTimeout &&
                ((0, Lr.wT)(
                  !this.m_nLoadLanguagesRetryTimeout,
                  "Got two concurrent calls to TextFilteringStore.LoadLanguages",
                ),
                window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
                (this.m_nLoadLanguagesRetryTimeout = void 0)),
                (t = Math.min(t * 2, Ri)),
                console.warn(
                  "LoadLanguages caught",
                  e,
                  "retry in",
                  t,
                  "seconds",
                ),
                (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(
                  async () => {
                    (this.m_nLoadLanguagesRetryTimeout = void 0),
                      await this.LoadLanguages(t),
                      this.OnFilterDataChanged();
                  },
                  t * 1e3,
                ));
            }
          }
          async LoadLanguage(t) {
            let e = "1",
              i = "",
              o = !1;
            if (this.m_WebUIServiceTransport.BIsValid())
              try {
                {
                  const d = await this.GetSteamEngineTextFilterDictionary(
                    t,
                    "banned",
                  );
                  this.m_strBannedWords += d.Body().dictionary();
                }
                {
                  const d = await this.GetSteamEngineTextFilterDictionary(
                    t,
                    "profanity",
                  );
                  this.m_strProfanityWords += d.Body().dictionary();
                }
                o = !0;
              } catch (d) {
                console.warn(
                  "LoadLanguage caught while loading from cache:",
                  d,
                );
              }
            if (!o) {
              i = `${F.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${t}&v=${e}&origin=${yr()}`;
              {
                const d = await v().get(i);
                this.m_strBannedWords += d.data;
              }
              i = `${F.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${t}&v=${e}&origin=${yr()}`;
              {
                const d = await v().get(i);
                this.m_strProfanityWords += d.data;
              }
            }
            i = `${F.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${t}&v=${e}&origin=${yr()}`;
            {
              const d = await v().get(i);
              this.m_strCleanWords += d.data;
            }
          }
          CreatePattern(t) {
            let e = t.filter(function (i) {
              return Ji(i);
            });
            return e.length > 0 ? "\\b(" + e.join("|") + ")\\b" : "";
          }
          OnFilterDataChanged() {
            let t = new RegExp(/\s*[\r\n]+\s*/g),
              e = [],
              i = [];
            switch (this.m_TextFilterPreferences.eTextFilterSetting) {
              case Le.Bx6.C5:
                break;
              case Le.Bx6.NS:
                break;
              case Le.Bx6.bf:
                e = e.concat(this.m_strBannedWords.split(t));
                break;
              default:
                e = e.concat(
                  this.m_strProfanityWords.split(t),
                  this.m_strBannedWords.split(t),
                );
                break;
            }
            (e = e.concat(
              this.m_TextFilterWords.text_filter_custom_banned_words(),
            )),
              (i = this.m_strCleanWords.split(t)),
              (i = i.concat(
                this.m_TextFilterWords.text_filter_custom_clean_words(),
              ));
            let o = this.CreatePattern(e),
              d = this.CreatePattern(i);
            d != "" && (d = "^(" + d + ")$"),
              this.BRebuildFilter(o, d) && this.SaveFilter();
          }
          BRebuildFilter(t, e) {
            if (t === this.m_strBannedPattern && e === this.m_strCleanPattern)
              return !1;
            if (
              ((this.m_regexBannedWords = null),
              (this.m_strBannedPattern = t),
              t !== "")
            )
              try {
                this.m_regexBannedWords = new RegExp(t, "ugi");
              } catch (i) {
                console.warn("Couldn't compile textfilter bannedwords regex"),
                  (0, jr.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter bannedwords regex: ${i}`,
                    ),
                  ),
                  (this.m_strBannedPattern = "");
              }
            if (
              ((this.m_regexCleanWords = null),
              (this.m_strCleanPattern = e),
              e !== "")
            )
              try {
                this.m_regexCleanWords = new RegExp(e, "ugi");
              } catch (i) {
                console.warn("Couldn't compile textfilter cleanwords regex"),
                  (0, jr.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter cleanwords regex: ${i}`,
                    ),
                  ),
                  (this.m_strCleanPattern = "");
              }
            return !0;
          }
          CreateProfanityReplacement(t) {
            return "\u2665".repeat(t);
          }
          BHasFilter() {
            return this.m_regexBannedWords != null;
          }
          BShownFilterTip() {
            return this.m_bShownFilterTip;
          }
          SetFilterTipShown(t) {
            this.m_bShownFilterTip = t;
          }
          FilterText(t, e) {
            if (!this.m_regexBannedWords) return e;
            let i = 0;
            return (
              typeof t == "string" && t !== ""
                ? (i = new zt.b(t).GetAccountID())
                : typeof t == "number" && (i = t),
              !e ||
              i == this.m_unAccountID ||
              (t &&
                this.m_TextFilterPreferences.bIgnoreFriends &&
                this.m_DataAccess.BIsFriend(i))
                ? e
                : e.replace(this.m_regexBannedWords, (o) =>
                    this.m_regexCleanWords &&
                    o.search(this.m_regexCleanWords) == 0
                      ? o
                      : this.CreateProfanityReplacement(o.length),
                  )
            );
          }
        }
        Ve([N.sH], $e.prototype, "m_TextFilterPreferences", 2),
          Ve([N.sH], $e.prototype, "m_mapPlayerCache", 2),
          Ve([N.sH], $e.prototype, "m_regexBannedWords", 2),
          Ve([N.sH], $e.prototype, "m_regexCleanWords", 2),
          Ve([N.sH], $e.prototype, "m_bInitialized", 2),
          Ve([N.sH], $e.prototype, "m_bFilterChangedWhileLoading", 2),
          Ve([N.sH], $e.prototype, "m_bOngoingLoad", 2),
          Ve([N.XI], $e.prototype, "Init", 1),
          Ve([De.o], $e.prototype, "OnTextFilterDictionaryChanged", 1),
          Ve([N.XI], $e.prototype, "UpdateCommunityPreferences", 1),
          Ve([N.XI], $e.prototype, "BRebuildFilter", 1);
        let Gr;
        function Zi() {
          if (!Gr) {
            const c = new Set();
            let t = { sessionid: (0, F.KC)(), origin: yr() };
            v()
              .get(F.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
                params: t,
                withCredentials: !0,
              })
              .then((e) => {
                for (const i of e.data.friendslist?.friends ?? [])
                  (0, zr.S$u)(i.efriendrelationship) &&
                    c.add(new zt.b(i.ulfriendid).GetAccountID());
              }),
              (Gr = (e) => c.has(e));
          }
          return Gr;
        }
        var Qi = Object.defineProperty,
          Ti = Object.getOwnPropertyDescriptor,
          er = (c, t, e, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Ti(t, e) : t, d = c.length - 1, f;
              d >= 0;
              d--
            )
              (f = c[d]) && (o = (i ? f(t, e, o) : f(o)) || o);
            return i && o && Qi(t, e, o), o;
          };
        const Gi = 4,
          qi = 500,
          Vi = 10,
          ui = class Sr {
            m_mapChats = new Map();
            GetChat(t, e) {
              return this.m_mapChats.get(t) || this.m_mapChats.get(e);
            }
            GetOrCreateChat(t, e) {
              let i = this.GetChat(t, e);
              return i || ((i = new rr()), this.m_mapChats.set(t || e, i)), i;
            }
            static s_Singleton;
            static Get() {
              return (
                Sr.s_Singleton || (Sr.s_Singleton = new Sr()), Sr.s_Singleton
              );
            }
            constructor() {
              (0, N.Gn)(this);
            }
          };
        er([N.sH], ui.prototype, "m_mapChats", 2);
        let mi = ui;
        class rr {
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
            (0, N.Gn)(this),
              (this.m_webAPIInterface = new Mt.D(
                F.TS.WEBAPI_BASE_URL,
                F.iA.webapi_token,
              ));
          }
          InitTextFilter() {
            this.m_textFilterStore = new $e({ BIsFriend: Zi() });
            let t = 0;
            F.iA.steamid !== "" && (t = new zt.b(F.iA.steamid).GetAccountID()),
              this.m_textFilterStore.Init(t, null, new pt.A());
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
          StartForSteamID(t, e) {
            (this.m_webAPIInterface = new Mt.D(
              F.TS.WEBAPI_BASE_URL,
              F.iA.webapi_token,
            )),
              (this.m_ulBroadcastSteamID = t),
              (this.m_ulBroadcastID = e),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(t) {
            (this.m_webAPIInterface = new Mt.D(
              F.TS.WEBAPI_BASE_URL,
              F.iA.webapi_token,
            )),
              (this.m_ulBroadcastChannelID = t),
              (this.m_strUserSteamID = F.iA.steamid),
              this.InitTextFilter(),
              this.JoinChannelChat();
          }
          Stop() {
            this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
          }
          async SendMessage(t) {
            const e = t.trim();
            if (e.length != 0)
              try {
                let i, o, d;
                if (this.m_webApiToken) {
                  const f = new FormData();
                  f.append("chat_id", this.m_ulChatID),
                    f.append("message", e),
                    f.append("instance_id", this.m_unInstanceID.toString()),
                    (o = await v().post(
                      `${F.TS.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
                      f,
                    )),
                    (d = o.data && o.data.response);
                } else {
                  const f = B.w.Init(ct.Lw);
                  f.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    message: e,
                    instance_id: this.m_unInstanceID.toString(),
                  }),
                    (i = await ct.DK.PostChatMessage(
                      this.m_webAPIInterface.GetServiceTransport(),
                      f,
                    )),
                    (d = {
                      result: i.GetEResult(),
                      cooldown_time_seconds: i.Body().cooldown_time_seconds(),
                      in_game: i.Body().in_game(),
                      persona_name: i.Body().persona_name(),
                    });
                }
                if (d && d.result && d.result != E.R) {
                  let f = "";
                  d.result == E.f4
                    ? (f = (0, A.we)("#BroadcastChat_YouMuted"))
                    : d.result == E.h_
                      ? (f = (0, A.we)(
                          "#BroadcastChat_Cooldown",
                          d.cooldown_time_seconds,
                        ))
                      : (f = (0, A.we)("#BroadcastChat_FailedToSendMsg", e)),
                    this.m_rgChatMessages.push({
                      type: W.X8.Error,
                      msg: f,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: d.in_game,
                      persona_name: d.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = d.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: W.X8.Error,
                  msg: (0, A.we)("#BroadcastChat_FailedToSendMsg", e),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async RequestChatInfo(t) {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const e = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: (0, F.KC)(),
                },
                i = await v().get(
                  `${F.TS.CHAT_BASE_URL}broadcast/getchatinfo`,
                  { params: e, withCredentials: !0, cancelToken: t?.token },
                );
              (!t || !t.token.reason) &&
                (0, N.h5)(() => {
                  const o = i.data;
                  (this.m_strChatURL = o.view_url_template),
                    (this.m_ulChatID = o.chat_id),
                    (this.m_strFlairGroupID =
                      o.flair_group_ids && o.flair_group_ids[0]),
                    o.blocked && console.log("User is blocked from chat"),
                    o.steamid && (this.m_strUserSteamID = o.steamid),
                    o.token && (this.m_webApiToken = o.token),
                    o.emoticons && this.SetOwnedEmoticons(o.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: W.X8.Notification,
                        msg: (0, A.we)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    o.moderators_steamid &&
                      o.moderators_steamid.forEach((d) =>
                        this.m_mapBroadcastModeratorUsers.set(d, !0),
                      ),
                    (this.m_chatScheduledFunc = new dr.LU()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (e) {
              console.error(e), console.log("Failed to get chat info!");
            }
          }
          async JoinChannelChat() {
            try {
              const t = B.w.Init(Wt);
              t.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let e = await cr.JoinChat(
                this.m_webAPIInterface.GetServiceTransport(),
                t,
              );
              if (!e.Body().chat_id || !e.Body().view_url_template) {
                console.log("Failed to join channel chat");
                return;
              }
              (this.m_strChatURL = e.Body().view_url_template()),
                (this.m_ulChatID = e.Body().chat_id()),
                (this.m_strFlairGroupID =
                  e.Body().flair_group_ids() && e.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: W.X8.Notification,
                  msg: (0, A.we)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new dr.LU()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (t) {
              console.error(t), console.log("Failed to join chat!");
            }
          }
          async FetchChatModerators() {
            const t = B.w.Init(Ft);
            t.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const i = (
                await cr.GetChatModerators(
                  this.m_webAPIInterface.GetServiceTransport(),
                  t,
                )
              )
                .Body()
                .results(),
              o = new Map();
            i.forEach((d) => {
              o.set(d.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = o);
          }
          ReplaceChatAnnouncementIfAny(t) {
            t.announcements?.length > 0
              ? ((this.m_rgAnnouncements = t.announcements.reverse()),
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
            const t = {},
              e = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString(),
              );
            e == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (t.t = this.m_nNextChatTS);
            try {
              const o = (await v().get(e, { params: t })).data;
              this.m_cConsecutiveErrors = 0;
              const d = o.messages
                .map((D) => ({
                  ...D,
                  type: W.X8.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter((D) => !this.IsUserMutedLocally(D.steamid));
              this.m_rgChatMessages.push(...d),
                this.ReplaceChatAnnouncementIfAny(o);
              const f = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > f &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - f,
                  ),
                o.muted)
              )
                for (const D of o.muted) {
                  const Q =
                    D.muted == this.m_strUserSteamID
                      ? (0, A.we)("#BroadcastChat_YouMuted", D.persona_name)
                      : (0, A.we)("#BroadcastChat_UserMuted", D.persona_name);
                  this.m_rgChatMessages.push({
                    type: W.X8.Notification,
                    msg: Q,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (o.remove_msgs)
                for (const D of o.remove_msgs)
                  this.RemoveUserMessagesLocal(D.steamid);
              let M = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                o.initial_delay
              ) {
                if (o.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + o.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = o.next_request),
                  (M = o.initial_delay);
              } else {
                if (o.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  o.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = o.next_request),
                  (M =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = M),
                M < 0 && (M = 0),
                this.m_chatScheduledFunc.Schedule(M, this.RequestLoop);
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
                (this.m_nNudgeFactorMS += Vi),
                this.m_cConsecutiveErrors >= Gi)
              ) {
                if (this.m_tsFirstRequest == null) {
                  this.m_rgChatMessages.push({
                    type: W.X8.Error,
                    msg: (0, A.we)("#BroadcastChat_UnableToJoinChat"),
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
              this.m_chatScheduledFunc.Schedule(qi, this.RequestLoop);
            }
          }
          GetUserEmoticons() {
            return this.m_regexUserEmoticons;
          }
          SetOwnedEmoticons(t) {
            let e = [];
            for (let o = 0; o < t.length; o++) {
              let d = t[o];
              d.length >= 2 && d[0] == ":"
                ? e.push(d.substr(1, d.length - 2))
                : e.push(d);
            }
            let i = ":(" + e.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(i, "g");
          }
          async UpdateBroadcastChatModerator(t, e, i) {
            {
              const o = new FormData();
              o.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                o.append("moderatorsteamid", t),
                o.append("bAdd", e ? "1" : "0"),
                o.append("sessionid", (0, F.KC)());
              try {
                await v().post(
                  `${F.TS.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  o,
                ),
                  this.m_mapBroadcastModeratorUsers.set(t, e);
                const d = (0, A.we)(
                  e
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  i,
                );
                this.m_rgChatMessages.push({ type: W.X8.Notification, msg: d });
              } catch {
                const d = (0, A.we)(
                  e
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  i,
                );
                this.m_rgChatMessages.push({ type: W.X8.Error, msg: d });
              }
            }
          }
          async UpdateUserChatBan(t, e, i, o, d, f) {
            const M = this.m_ulBroadcastSteamID,
              D = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const Q = B.w.Init(It);
              Q.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: t,
                duration: i * 3600,
                permanent: o,
                undo: f,
              }),
                await cr.AddChatBan(
                  this.m_webAPIInterface.GetServiceTransport(),
                  Q,
                );
            } else {
              const Q = new FormData();
              Q.append("broadcaststeamid", M),
                Q.append("issuersteamid", D),
                Q.append("chattersteamid", t),
                Q.append("bantype", e),
                Q.append("duration", i.toString()),
                Q.append("perm", o ? "1" : "0"),
                Q.append("sessionid", (0, F.KC)());
              try {
                await v().post(
                  `${F.TS.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  Q,
                ),
                  e == ct.sW.rx
                    ? delete this.m_mapMutedUsers[t]
                    : (this.m_mapMutedUsers[t] = d);
              } catch {
                console.log("Failed to update mute for " + d);
              }
            }
          }
          async MuteUserForSession(t, e) {
            if (t == this.m_strUserSteamID || this.m_ulBroadcastSteamID == t)
              return;
            let i = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[t]) {
              this.m_mapMutedUsers[t] = e;
              try {
                if (this.m_webApiToken) {
                  const o = new FormData();
                  o.append("chat_id", this.m_ulChatID),
                    o.append("user_steamid", t),
                    o.append("muted", "1"),
                    await v().post(
                      `${F.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      o,
                    );
                } else {
                  const o = B.w.Init(ct.hW);
                  o.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: t,
                    muted: !0,
                  }),
                    await ct.DK.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      o,
                    );
                }
              } catch {
                i &&
                  (this.m_rgChatMessages.push({
                    type: W.X8.Error,
                    msg: (0, A.we)("#BroadcastChat_UserMuteFailed", e),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[t]);
              }
            }
            i ||
              this.m_rgChatMessages.push({
                type: W.X8.Notification,
                msg: (0, A.we)("#BroadcastChat_UserMutedLocal", e),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          async UnmuteUserForSession(t, e) {
            if (t == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[t] && delete this.m_mapMutedUsers[t],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                if (this.m_webApiToken) {
                  const o = new FormData();
                  o.append("chat_id", this.m_ulChatID),
                    o.append("user_steamid", t),
                    o.append("muted", "0"),
                    await v().post(
                      `${F.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      o,
                    );
                } else {
                  const o = B.w.Init(ct.hW);
                  o.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: t,
                    muted: !1,
                  }),
                    await ct.DK.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      o,
                    );
                }
                this.m_rgChatMessages.push({
                  type: W.X8.Notification,
                  msg: (0, A.we)("#BroadcastChat_UserUnmutedLocal", e),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch {
                this.m_rgChatMessages.push({
                  type: W.X8.Error,
                  msg: (0, A.we)("#BroadcastChat_UserUnmuteFailed", e),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: W.X8.Notification,
                msg: (0, A.we)("#BroadcastChat_UserUnmutedLocal", e),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          RemoveUserMessagesLocal(t) {
            this.m_rgChatMessages = this.m_rgChatMessages.filter(
              (e) => e.steamid !== t,
            );
          }
          async RemoveUserMessagesServer(t, e) {
            if (t != this.m_strUserSteamID)
              try {
                if (this.m_webApiToken) {
                  const i = new FormData();
                  i.append("chat_id", this.m_ulChatID),
                    i.append("user_steamid", t),
                    await v().post(
                      `${F.TS.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
                      i,
                    );
                } else {
                  const i = B.w.Init(ct.ku);
                  i.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: t,
                  }),
                    await ct.DK.RemoveUserChatText(
                      this.m_webAPIInterface.GetServiceTransport(),
                      i,
                    );
                }
              } catch {
                this.m_rgChatMessages.push({
                  type: W.X8.Error,
                  msg: (0, A.we)("#BroadcastChat_RemoveMessagesFailed", e),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async UpdateChatMessageFlair(t) {
            if (this.m_webApiToken) {
              const e = new FormData();
              e.append("chat_id", this.m_ulChatID),
                e.append("flair", `^${this.m_strFlairGroupID}^:${t}:`),
                await v().post(
                  `${F.TS.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
                  e,
                );
            } else {
              const e = B.w.Init(ct.Mn);
              e.SetBodyFields({
                chat_id: this.m_ulChatID,
                flair: `^${this.m_strFlairGroupID}^:${t}:`,
              }),
                await ct.DK.UpdateChatMessageFlair(
                  this.m_webAPIInterface.GetServiceTransport(),
                  e,
                );
            }
          }
          IsUserMutedLocally(t) {
            return !!this.m_mapMutedUsers[t];
          }
          BIsUserBroadcastModerator(t) {
            return this.m_mapBroadcastModeratorUsers.has(t);
          }
          IsUserBroadcaster(t) {
            return t === this.m_ulBroadcastSteamID;
          }
          SyncChat() {
            (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_rgChatMessages = []);
          }
        }
        er([N.sH], rr.prototype, "m_mapChannelModeratorUsers", 2),
          er([N.sH], rr.prototype, "m_mapBroadcastModeratorUsers", 2),
          er([N.sH], rr.prototype, "m_nRateLimitSeconds", 2),
          er([N.sH], rr.prototype, "m_bRateLimited", 2),
          er([N.sH], rr.prototype, "m_rgChatMessages", 2),
          er([N.sH], rr.prototype, "m_latestAnnouncement", 2),
          er([De.o], rr.prototype, "FetchChatModerators", 1),
          er([De.o], rr.prototype, "RequestLoop", 1),
          er([De.o], rr.prototype, "MuteUserForSession", 1);
        var qr = g(7582),
          hi = g(65804),
          Ci = Object.defineProperty,
          _i = Object.getOwnPropertyDescriptor,
          ts = (c, t, e, i) => {
            for (
              var o = i > 1 ? void 0 : i ? _i(t, e) : t, d = c.length - 1, f;
              d >= 0;
              d--
            )
              (f = c[d]) && (o = (i ? f(t, e, o) : f(o)) || o);
            return i && o && Ci(t, e, o), o;
          };
        const fi = class Ze {
          constructor() {
            (0, N.Gn)(this);
          }
          m_mapBroadcasterSteamIDToEvents = new Map();
          m_mapBroadcasterSteamIDData = new Map();
          static GetBBCodeParam(t, e, i = "") {
            const d = new RegExp(`\\W${e}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(t);
            return d ? d[1] : i;
          }
          static ParseCalendarEventPresentersFromText(t) {
            const e =
                /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
              i = new Array();
            for (;;) {
              const o = e.exec(t);
              if (o === null) break;
              const d = o[1],
                f = o[2],
                M = Ze.GetBBCodeParam(d, "steamid"),
                D = {
                  steamID: M ? new zt.b(M) : void 0,
                  name: Ze.GetBBCodeParam(d, "name"),
                  title: Ze.GetBBCodeParam(d, "title"),
                  company: Ze.GetBBCodeParam(d, "company"),
                  photo: Ze.GetBBCodeParam(d, "photo"),
                  bio: f,
                };
              i.push(D);
            }
            return i;
          }
          static ParseEventModelPresenters(t, e) {
            const i = t.GetDescriptionWithFallback(e);
            return Ze.ParseCalendarEventPresentersFromText(i);
          }
          static ParseEventAppReferencesFromText(t) {
            const e = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
              i = new Set();
            for (;;) {
              const o = e.exec(t);
              if (o === null) break;
              const d = o[1];
              i.add(Number(d));
            }
            return i;
          }
          static ParseEventModelAppReferences(t, e) {
            const i = t.GetDescriptionWithFallback(e),
              o = Ze.ParseEventAppReferencesFromText(i);
            if (t.jsondata?.referenced_appids)
              for (const d of t.jsondata.referenced_appids) o.add(d);
            return o;
          }
          async BuildBroadcasterSteamIDToActiveEventMap(t) {
            const e = qr.HD.GetTimeNowWithOverride(),
              o = t.GetCalendarItemsInTimeRange(e - 3600, e);
            for (const D of o.rgCalendarItems)
              hi.O3.QueueLoadPartnerEvent(D.clanid, D.unique_id);
            const d = o.rgCalendarItems.map((D) =>
                hi.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  zt.b.InitFromClanID(D.clanid),
                  D.unique_id,
                  0,
                ),
              ),
              f = await Promise.all(d),
              M = new Map();
            for (const D of f)
              if (D && !(D.endTime && D.endTime < e))
                for (const Q of D.GetBroadcastWhitelistAsSteamIDs())
                  M.has(Q) ? M.get(Q).push(D) : M.set(Q, [D]);
            return M;
          }
          IsBroadcasterAlreadyBound(t, e) {
            const i = this.m_mapBroadcasterSteamIDToEvents.get(t),
              o = i ? i.length : 0;
            if ((e ? e.length : 0) != o) return !1;
            for (let f = 0; f < o; f++) if (i[f] != e[f].GID) return !1;
            return !0;
          }
          static BuildSteamIDToPresenterMapFromEventList(t, e) {
            let i = new Map();
            for (const o of t) {
              if (!o) continue;
              const d = Ze.ParseEventModelPresenters(o, e);
              for (const f of d)
                f.steamID && i.set(f.steamID.ConvertTo64BitString(), f);
            }
            return i;
          }
          RemoveCachedDataIfNotInMap(t) {
            const e = new Array();
            this.m_mapBroadcasterSteamIDToEvents.forEach((i, o) => {
              t.has(o) || e.push(o);
            }),
              e.forEach((i) => {
                this.m_mapBroadcasterSteamIDData.delete(i),
                  this.m_mapBroadcasterSteamIDToEvents.delete(i);
              });
          }
          static BuildAppIDRefsForEventList(t, e) {
            const i = new Set();
            for (const o of t)
              Ze.ParseEventModelAppReferences(o, e).forEach((f) => i.add(f));
            return Array.from(i);
          }
          UpdateCachedDataFromEvents(t, e) {
            t.forEach((i, o) => {
              if (this.IsBroadcasterAlreadyBound(o, i)) return;
              const d = {
                m_mapPresenters: Ze.BuildSteamIDToPresenterMapFromEventList(
                  i,
                  e,
                ),
                m_rgAppIDs: Ze.BuildAppIDRefsForEventList(i, e),
              };
              this.m_mapBroadcasterSteamIDData.set(o, d),
                this.m_mapBroadcasterSteamIDToEvents.set(
                  o,
                  i.map((f) => f.GID),
                );
            });
          }
          async SynchronizeEventsWithBroadcasts(t, e) {
            const i = await this.BuildBroadcasterSteamIDToActiveEventMap(t);
            this.RemoveCachedDataIfNotInMap(i),
              this.UpdateCachedDataFromEvents(i, e);
          }
          GetPresenterMapForBroadcasterSteamID(t) {
            return this.m_mapBroadcasterSteamIDData.get(t)?.m_mapPresenters;
          }
          GetAppIDListForBroadcasterSteamID(t) {
            return this.m_mapBroadcasterSteamIDData.get(t)?.m_rgAppIDs;
          }
        };
        ts([N.sH], fi.prototype, "m_mapBroadcasterSteamIDData", 2);
        let es = fi;
        const gi = new es();
        var rs = g(90024),
          ur = g.n(rs),
          Ce = g(99047),
          is = g(58534),
          ss = g(96197),
          pi = g(88656),
          Vr = g(88003),
          Cr = g(1317),
          ns = g(94276),
          as = g(8059),
          os = g(2801);
        function _r(c) {
          return (0, s.jsx)(Vr.x_, {
            onEscKeypress: c.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, s.jsx)(cs, {
              redirectURL: c.redirectURL,
              guestOption: c.guestOption,
            }),
          });
        }
        function $n(c) {
          const { redirectURL: t = window.location.href } = c;
          return jsx(SimpleModal, {
            active: !0,
            children: jsx(_r, { redirectURL: t }),
          });
        }
        function ls() {
          (0, Vr.pg)(
            (0, s.jsx)(_r, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, A.we)("#Login_SignInTitle") },
          );
        }
        function Yn(c, t) {
          ShowModalDialog(
            jsx(_r, { ownerWin: window, redirectURL: c, guestOption: t }),
            window,
            { strTitle: Localize("#Login_SignInTitle") },
          );
        }
        function cs(c) {
          const { redirectURL: t, guestOption: e } = c,
            [i] = (0, _.useState)(
              new Mt.D(F.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [o, d] = (0, _.useState)(!1),
            f = (M) => {
              M == as.wI.k_PrimaryDomainFail
                ? d(!0)
                : window.location.assign(t);
            };
          return (0, s.jsx)("div", {
            children: o
              ? (0, s.jsx)(Cr.Fn, {})
              : (0, s.jsx)(Cr.YN, {
                  autoFocus: !0,
                  transport: i,
                  platform: ns.SS.tS,
                  onComplete: f,
                  redirectUrl: t,
                  theme: "modal",
                  children: e && (0, s.jsx)(Cr.Mk, { redirectURL: t }),
                }),
          });
        }
        var ds = g(44814),
          us = g(33543),
          Hr = g.n(us);
        const ms = () =>
            (0, s.jsx)("div", {
              className: Hr().FriendsListInsetShadowCtn,
              children: (0, s.jsx)("div", {
                className: Hr().FriendListInsetShadowTop,
              }),
            }),
          hs = () =>
            (0, s.jsx)("div", {
              className: Hr().FriendsListInsetShadowCtn,
              children: (0, s.jsx)("div", {
                className: Hr().FriendListInsetShadowBottom,
              }),
            });
        var Ye = g(36118),
          yt = g(36707),
          fs = g(63508),
          gt = g.n(fs),
          Ie = g(74498),
          bi = g(29630),
          gs = Object.defineProperty,
          ps = Object.getOwnPropertyDescriptor,
          Je = (c, t, e, i) => {
            for (
              var o = i > 1 ? void 0 : i ? ps(t, e) : t, d = c.length - 1, f;
              d >= 0;
              d--
            )
              (f = c[d]) && (o = (i ? f(t, e, o) : f(o)) || o);
            return i && o && gs(t, e, o), o;
          };
        const mr = class Di {
          constructor() {
            (0, N.Gn)(this);
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
            const t = new Di();
            return (
              (t.giveaway_id = this.giveaway_id),
              (t.seconds_until_drawing = this.seconds_until_drawing),
              (t.rtime_start = this.rtime_start),
              (t.rtime_end = this.rtime_end),
              (t.closed = this.closed),
              (t.winner_count = this.winner_count),
              t
            );
          }
        };
        Je([N.sH], mr.prototype, "giveaway_id", 2),
          Je([N.sH], mr.prototype, "seconds_until_drawing", 2),
          Je([N.sH], mr.prototype, "rtime_start", 2),
          Je([N.sH], mr.prototype, "rtime_end", 2),
          Je([N.sH], mr.prototype, "closed", 2),
          Je([N.sH], mr.prototype, "winner_count", 2);
        let ti = mr;
        const ei = class xr {
          constructor() {
            (0, N.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(t, e) {
            return t + "_" + e;
          }
          GetInfoByInstance(t, e) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(t, e),
            );
          }
          GetNextDrawChangeCallback(t) {
            return (
              this.m_mapNextDrawChangeCallback.has(t) ||
                this.m_mapNextDrawChangeCallback.set(t, new dr.lu()),
              this.m_mapNextDrawChangeCallback.get(t)
            );
          }
          CopyToGiveaway(t, e) {
            e.closed != t.closed && (e.closed = t.closed),
              e.giveaway_id != t.giveaway_id && (e.giveaway_id = t.giveaway_id),
              e.rtime_start != t.rtime_start && (e.rtime_start = t.rtime_start),
              e.rtime_end != t.rtime_end && (e.rtime_end = t.rtime_end),
              e.winner_count != t.winner_count &&
                (e.winner_count = t.winner_count),
              e.seconds_until_drawing != t.seconds_until_drawing &&
                (e.seconds_until_drawing = t.seconds_until_drawing);
          }
          async ReloadGiveaway(t, e) {
            if (!t) return null;
            let i = F.TS.STORE_BASE_URL + "prizes/nextdraw/" + t,
              o = null,
              d = { origin: self.origin };
            return (
              (o = await v().get(i, { params: d })),
              (0, N.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(t) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(t, new ti()),
                  this.CopyToGiveaway(
                    o.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(t),
                  ),
                  e !== void 0)
                ) {
                  const f = this.GetKey(t, e);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(f) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      f,
                      new ti(),
                    ),
                    this.CopyToGiveaway(
                      o.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(f),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(t).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(t),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(t)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              xr.s_Singleton ||
                ((xr.s_Singleton = new xr()), xr.s_Singleton.Init()),
              xr.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let t = (0, F.Tc)("giveawaynextdraw", "application_config");
              if (t && t.giveaway_id) {
                let e = new ti();
                this.CopyToGiveaway(t, e),
                  this.m_mapGiveawayIDToNextDrawInfo.set(t.giveaway_id, e);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        Je([N.sH], ei.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          Je([N.XI], ei.prototype, "CopyToGiveaway", 1);
        let Pr = ei;
        const Ar = class oi {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = oi.s_GlobalInstance),
              (oi.s_GlobalInstance += 1);
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
          SetupRefreshDataInterval(t, e) {
            if ((this.ClearRefreshInterval(), !t.closed)) {
              let i =
                t.seconds_until_drawing <= 0 && t.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(e, i);
            }
          }
          SetupCountDown(t, e) {
            t > 0 && (this.m_intervalCountDownID = window.setInterval(e, 1e3));
          }
        };
        Je([De.o], Ar.prototype, "ClearRefreshInterval", 1),
          Je([De.o], Ar.prototype, "ClearCountDown", 1),
          Je([De.o], Ar.prototype, "SetupRefreshDataInterval", 1),
          Je([De.o], Ar.prototype, "SetupCountDown", 1);
        let bs = Ar;
        function wi(c, t) {
          const e = Pr.Get().GetInfoByInstance(c, t.m_myInstanceNumber);
          (e.seconds_until_drawing -= 1),
            e.seconds_until_drawing == 0 && t.ClearCountDown();
        }
        function ws(c, t) {
          const e = Pr.Get().GetInfoByInstance(c, t.m_myInstanceNumber);
          e &&
            e.BIsValid() &&
            e.seconds_until_drawing <= 0 &&
            !e.closed &&
            (t.ClearCountDown(),
            Pr.Get()
              .ReloadGiveaway(c, t.m_myInstanceNumber)
              .then((i) => {
                t.SetupCountDown(i.seconds_until_drawing, () => wi(c, t));
              }));
        }
        function ys(c) {
          const [t] = (0, _.useState)(new bs()),
            e = (0, ve.CH)();
          (0, _.useEffect)(
            () => (
              Pr.Get()
                .ReloadGiveaway(c, t.m_myInstanceNumber)
                .then((M) => {
                  t.SetupRefreshDataInterval(M, () => ws(c, t)),
                    t.SetupCountDown(M.seconds_until_drawing, () => wi(c, t)),
                    e();
                }),
              () => {
                t.ClearRefreshInterval(), t.ClearCountDown();
              }
            ),
            [t, c, e],
          );
          const i = Pr.Get().GetInfoByInstance(c, t.m_myInstanceNumber),
            [o, d, f] = (0, Ut.q3)(() => [
              i?.winner_count,
              i?.closed,
              i?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !i || i.giveaway_id == null || !i.BStarted() || o === void 0,
            winner_count: o,
            closed: d,
            seconds_until_drawing: f,
          };
        }
        var Ms = g(80913),
          Xr = g(53107),
          yi = g(53113),
          Bs = g(8287),
          He = g.n(Bs);
        function vs(c) {
          const { latestAnnouncement: t } = c;
          return t?.type == "giveaway_draw"
            ? (0, s.jsx)(Mi, { latestWinner: t })
            : null;
        }
        function Mi(c) {
          const {
              latestWinner: t,
              className: e,
              strActionButton: i,
              strActionClassname: o,
            } = c,
            d = t.winners_info?.length > 0 ? t.winners_info[0].accountid : 0,
            [f, M] = _.useState(d),
            D =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            Q = (0, yi.L$)(
              `${bi.zU.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            Me = (0, yi.L$)(
              `${bi.zU.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            ),
            Fe = ys(t.giveaway_gid);
          let Pe =
            Fe.bLoadingGiveawayInfo || Fe.closed
              ? null
              : Fe.seconds_until_drawing;
          const Ne = d === F.iA.accountid;
          _.useEffect(() => {
            f != d && setTimeout(() => M(d), 1500);
          }, [d, f]);
          const tr =
            t.winners_info?.length > 0 && t.winners_info[0].persona
              ? t.winners_info[0].persona
              : (0, A.we)("#GA2022_UnknownPersonaName");
          return (0, s.jsx)(Xr.uU, {
            href: D,
            className: e,
            children: (0, s.jsxs)("div", {
              className: (0, yt.A)({
                [He().GiveawayWinnerBox]: !0,
                [He().GiveawayWinnerAnnounced]: f === d,
              }),
              children: [
                (0, s.jsx)("div", {
                  className: He().GiveawayWinnerBoxLeft,
                  children: (0, s.jsx)("img", {
                    className: He().GiveawayWinnerArt,
                    src: Q,
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: He().GiveawayWinnerBoxRight,
                  children: [
                    f !== d &&
                      (0, s.jsx)("div", {
                        className: (0, yt.A)(He().GiveawayWinnerText),
                        children: (0, A.PP)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, s.jsx)("br", {}),
                        ),
                      }),
                    f === d &&
                      (0, s.jsx)("div", {
                        className: (0, yt.A)(
                          He().GiveawayWinnerText,
                          He().GiveawayWinnerAnnounced,
                        ),
                        children: (0, A.PP)(
                          Ne
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          tr,
                          (0, s.jsx)("br", {}),
                        ),
                      }),
                    Pe > 0 &&
                      (0, s.jsx)("div", {
                        className: He().GiveawayWinnerCountdown,
                        children: (0, A.PP)("#GA2022_Congrats_NextDraw", Pe),
                      }),
                  ],
                }),
                (0, s.jsx)("img", {
                  className: He().GiveawayWinnerQuestion,
                  src: Me,
                }),
                !!i &&
                  (0, s.jsx)("div", {
                    className: o,
                    children: Ne ? (0, A.we)("#GA2022_YouWonNextSteps") : i,
                  }),
              ],
            }),
          });
        }
        function Is(c, t) {
          const [e, i] = (0, Ut.q3)(() => [
              t?.steamid,
              Ie.es.GetBroadcast(t?.steamid)?.m_ulBroadcastID,
            ]),
            [o, d] = _.useState(null);
          _.useEffect(() => {
            let M = null;
            return (
              (e || i) &&
                ((M = mi.Get().GetOrCreateChat(i, e)),
                M.StartForSteamID(e, i),
                d(M)),
              () => {
                M && (M.Stop(), d(null));
              }
            );
          }, [e, i]);
          const f = (0, Ut.q3)(() => o?.m_latestAnnouncement || null);
          if (f?.type == "giveaway_draw") {
            const M = f;
            if (M.giveaway_gid == c) return M;
          }
          return null;
        }
        function xs(c) {
          const { gidGiveaway: t, stream: e } = c,
            i = Is(t, e),
            o = (0, Ms.h)("GameAwardDrop2022");
          let d = null,
            f = He().GiveawayRegisterButton;
          return (
            F.iA.logged_in
              ? o?.registered
                ? ((d = (0, A.we)("#GA2022_AlreadyRegistered")),
                  (f = He().GiveawayAlreadyRegistered))
                : (d = (0, A.we)("#GA2022_RegisterToWin"))
              : (d = (0, A.we)("#GA2022_RegisterLoginToWin")),
            i
              ? (0, s.jsx)(Mi, {
                  latestWinner: i,
                  className: He().InViewerBar,
                  strActionButton: d,
                  strActionClassname: f,
                })
              : null
          );
        }
        var Re = g(71421),
          Os = Object.defineProperty,
          zs = Object.getOwnPropertyDescriptor,
          Mr = (c, t, e, i) => {
            for (
              var o = i > 1 ? void 0 : i ? zs(t, e) : t, d = c.length - 1, f;
              d >= 0;
              d--
            )
              (f = c[d]) && (o = (i ? f(t, e, o) : f(o)) || o);
            return i && o && Os(t, e, o), o;
          };
        const Bi = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          Jn = null,
          js = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function Ds(c, t, e) {
          return e
            ? "presenter"
            : t.GetBroadcastSteamID() === c
              ? "broadcaster"
              : t.BIsUserBroadcastModerator(c)
                ? "moderator"
                : "";
        }
        const Fs = (c) => {
            const { userType: t, msg: e, presenterInfo: i } = c;
            if (t === "presenter")
              return (0, s.jsx)("span", {
                children: (0, s.jsx)(ds.fI, {
                  name: i.name,
                  title: i.title,
                  photo: i.photo,
                  company: i.company,
                  bioString: i.bio,
                  children: (0, s.jsx)("a", {
                    className: (0, yt.A)(
                      gt().MessageName,
                      gt().MessagePresenter,
                    ),
                    href: F.TS.COMMUNITY_BASE_URL + "profiles/" + e.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: e.persona_name,
                  }),
                }),
              });
            {
              let o = null;
              return (
                t === "broadcaster"
                  ? (o = gt().MessageBroadcaster)
                  : t === "moderator" && (o = gt().MessageModerator),
                (0, s.jsx)("span", {
                  children: (0, s.jsx)("a", {
                    className: (0, yt.A)(gt().MessageName, o),
                    href: F.TS.COMMUNITY_BASE_URL + "profiles/" + e.steamid,
                    "data-miniprofile": "s" + e.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: e.persona_name,
                  }),
                })
              );
            }
          },
          Ws = (c) => {
            switch (c.userType) {
              case "presenter":
                return (0, s.jsx)(Re.Gq, {
                  toolTipContent: (0, A.we)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, s.jsx)("span", {
                    className: gt().RoleFlairContainer,
                    children: (0, s.jsx)(Ye.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, s.jsx)(Re.Gq, {
                  toolTipContent: (0, A.we)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, s.jsx)("span", {
                    className: gt().RoleFlairContainer,
                    children: (0, s.jsx)(Ye.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, s.jsx)(Re.Gq, {
                  toolTipContent: (0, A.we)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, s.jsx)("span", {
                    className: gt().RoleFlairContainer,
                    children: (0, s.jsx)(Ye.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let lr = class extends _.Component {
          constructor(c) {
            super(c), (0, N.Gn)(this);
          }
          m_chat = null;
          messagesContainer = _.createRef();
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(c) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== c.steamID ||
                this.props.broadcastID !== c.broadcastID ||
                this.props.broadcastChannelID !== c.broadcastChannelID) &&
                this.StartChat();
          }
          componentWillUnmount() {
            this.m_chat && this.m_chat.Stop();
          }
          StartChat() {
            if (
              (this.m_chat && this.m_chat.Stop(),
              (this.m_chat = mi
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
              let c = this.props.broadcastID || "0";
              this.m_chat.StartForSteamID(this.props.steamID, c),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(c) {
            return !!c.match(js);
          }
          AddLinksEmoticons(c, t) {
            let e = Bi;
            t && (e = this.m_chat.GetUserEmoticons());
            let i = c.split(Bi);
            const o = [];
            for (let d = 0; d < i.length; d += 1)
              d % 2 === 1
                ? o.push((0, s.jsx)(ss.n, { emoticon: i[d], large: !0 }, d))
                : o.push(i[d]);
            return o;
          }
          HandleScroll(c) {
            const t = this.props.bInvertLayout
              ? c.currentTarget.scrollTop < 6
              : c.currentTarget.scrollTop + c.currentTarget.clientHeight >=
                c.currentTarget.scrollHeight - 6;
            this.m_chat && (this.m_chat.m_bAutoScroll = t);
          }
          ScrollToNewestMessages() {
            this.messagesContainer &&
              this.messagesContainer.current &&
              (this.messagesContainer.current.scrollTop = this.props
                .bInvertLayout
                ? 0
                : this.messagesContainer.current.scrollHeight);
          }
          OnContextMenu(c, t) {
            if (t.type !== W.X8.Chat) return null;
            const e = [],
              i = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
              o = this.m_chat.BIsUserBroadcastModerator(
                this.m_chat.GetUserSteamID(),
              );
            return (
              (F.iA && F.iA.is_support) || i || o
                ? e.push(
                    (0, s.jsx)(
                      Ce.kt,
                      {
                        onSelected: () =>
                          this.m_chat.RemoveUserMessagesServer(
                            t.steamid,
                            t.persona_name,
                          ),
                        children: (0, A.we)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, s.jsx)(
                      Ce.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            ct.sW.XP,
                            12,
                            !1,
                            t.persona_name,
                          ),
                        children: (0, A.we)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, s.jsx)(
                      Ce.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            ct.sW.XP,
                            24,
                            !1,
                            t.persona_name,
                          ),
                        children: (0, A.we)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, s.jsx)(
                      Ce.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            ct.sW.XP,
                            168,
                            !1,
                            t.persona_name,
                          ),
                        children: (0, A.we)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, s.jsx)(
                      Ce.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            ct.sW.XP,
                            0,
                            !0,
                            t.persona_name,
                          ),
                        children: (0, A.we)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, s.jsx)(
                      Ce.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            ct.sW.rx,
                            0,
                            !1,
                            t.persona_name,
                            !0,
                          ),
                        children: (0, A.we)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : this.m_chat.IsUserMutedLocally(t.steamid)
                  ? e.push(
                      (0, s.jsx)(
                        Ce.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UnmuteUserForSession(
                              t.steamid,
                              t.persona_name,
                            ),
                          children: (0, A.we)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : e.push(
                      (0, s.jsx)(
                        Ce.kt,
                        {
                          onSelected: () =>
                            this.m_chat.MuteUserForSession(
                              t.steamid,
                              t.persona_name,
                            ),
                          children: (0, A.we)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((F.iA && F.iA.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                t.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(t.steamid)
                  ? e.push(
                      (0, s.jsx)(
                        Ce.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !1,
                              t.persona_name,
                            ),
                          children: (0, A.we)(
                            "#BroadcastChat_Remove_Moderator",
                          ),
                        },
                        "removemod",
                      ),
                    )
                  : e.push(
                      (0, s.jsx)(
                        Ce.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !0,
                              t.persona_name,
                            ),
                          children: (0, A.we)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              e.length
                ? (0, q.lX)(
                    (0, s.jsxs)(Ce.tz, {
                      children: [
                        (0, s.jsxs)("div", {
                          className: gt().SelectedUserNameCtn,
                          children: [
                            (0, A.we)("#BroadcastChat_User"),
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)("span", {
                              className: gt().SelectedUserName,
                              children: t.persona_name,
                            }),
                          ],
                        }),
                        e,
                      ],
                    }),
                    c,
                  )
                : null
            );
          }
          GetTypeClassName(c) {
            return c.type === W.X8.Notification
              ? gt().MessageNotification
              : c.type === W.X8.Error
                ? gt().MessageError
                : gt().MessageChat;
          }
          FormatMessage(c, t) {
            if (c.type === W.X8.Chat) {
              let e = t ? t.FilterText(c.steamid, c.msg) : c.msg;
              return this.AddLinksEmoticons(e, !1);
            } else return c.msg;
          }
          RenderUserChatLine(c, t, e) {
            let i = e ? e.get(c.steamid) : void 0;
            const o = c.type === W.X8.Chat ? Ds(c.steamid, this.m_chat, i) : "";
            return (0, s.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(c),
                onContextMenu: (d) => this.OnContextMenu(d, c),
                children: [
                  c.type === W.X8.Chat && (0, s.jsx)(Ws, { userType: o }),
                  c.flair &&
                    (0, s.jsx)("span", {
                      className: gt().FlairContainer,
                      children: this.AddLinksEmoticons(c.flair, !1),
                    }),
                  c.type === W.X8.Chat &&
                    (0, s.jsx)(Fs, { userType: o, msg: c, presenterInfo: i }),
                  c.type === W.X8.Chat &&
                    this.m_chat.GetBroadcastSteamID() === c.steamid &&
                    (0, s.jsx)("span", {
                      className: `${gt().MessageNotification} ${gt().MessageContents}`,
                      children: ` (${(0, A.we)("#BroadcastChat_Broadcaster")})`,
                    }),
                  c.type === W.X8.Chat &&
                    this.m_chat.m_mapChannelModeratorUsers.get(c.steamid) &&
                    (0, s.jsx)("span", {
                      className: `${gt().MessageNotification} ${gt().MessageContents}`,
                      children: ` (${(0, A.we)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, s.jsxs)("span", {
                    className: `${gt().MessageContents} ${this.AddLinksEmoticons(c.msg, !1).filter((d) => d && typeof d == "string").length ? "" : gt().EmoticonsOnly}`,
                    children: [
                      c.type === W.X8.Chat ? " : " : "",
                      this.FormatMessage(c, this.m_chat.TextFilterStore),
                    ],
                  }),
                ],
              },
              c.instance_id + "_" + c.client_ts + "_" + t,
            );
          }
          render() {
            const {
                hidden: c,
                bPartnerMemberOnlyChat: t,
                bInvertLayout: e,
              } = this.props,
              i = this.m_chat ? this.m_chat.m_rgChatMessages : [],
              o = e ? i.reverse() : i,
              d = this.m_chat
                ? gi.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              f = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, s.jsxs)("div", {
              className: (0, yt.A)(gt().ChatPanel, "ChatPanel"),
              style: c ? { display: "none" } : void 0,
              children: [
                (0, s.jsx)(vs, { latestAnnouncement: f }),
                e &&
                  !!this.m_chat &&
                  (0, s.jsx)(vi, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: t,
                  }),
                (0, s.jsx)(ms, {}),
                (0, s.jsx)("div", {
                  className: (0, yt.A)(
                    `${gt().ChatMessages} ${ur().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children: o.map((M, D) => this.RenderUserChatLine(M, D, d)),
                }),
                (0, s.jsx)(hs, {}),
                !e &&
                  !!this.m_chat &&
                  (0, s.jsx)(vi, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: t,
                  }),
              ],
            });
          }
        };
        Mr([N.sH], lr.prototype, "m_chat", 2),
          Mr([ve.oI], lr.prototype, "StartChat", 1),
          Mr([ve.oI], lr.prototype, "HandleScroll", 1),
          Mr([ve.oI], lr.prototype, "OnContextMenu", 1),
          Mr([ve.oI], lr.prototype, "RenderUserChatLine", 1),
          (lr = Mr([S.PA], lr));
        function vi(c) {
          const { oChat: t, emoticonStore: e, bPartnerMemberOnlyChat: i } = c;
          return i && (!F.iA?.logged_in || !F.iA?.is_partner_member)
            ? (0, s.jsx)(Us, {})
            : F.iA?.logged_in
              ? (0, s.jsx)(Ps, { oChat: t, emoticonStore: e })
              : null;
        }
        function Ps(c) {
          const { oChat: t, emoticonStore: e } = c,
            [i, o] = _.useState(""),
            d = _.useRef(void 0),
            f = (0, Ut.q3)(() => t.m_bRateLimited),
            M = _.useCallback(
              (Pe) => {
                !Pe.shiftKey &&
                  Pe.charCode === 13 &&
                  (t.m_bRateLimited || (t.SendMessage(i), o("")),
                  Pe.preventDefault());
              },
              [t, i],
            ),
            D = _.useCallback(
              (Pe, Ne = !1) => {
                o(i + `\u02D0${Pe}\u02D0`), d?.current && d.current.focus();
              },
              [i, d],
            ),
            Q = () => {
              t.SendMessage(i), o("");
            };
          let Me = f || i.trim().length == 0,
            Fe = (0, yt.A)(
              ur().chatSubmitButton,
              i.length == 0 && ur().disabled,
            );
          return (0, s.jsx)("div", {
            className: (0, yt.A)(gt().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, s.jsxs)("div", {
              className: (0, yt.A)(gt().ChatEntry, "ChatEntry"),
              children: [
                (0, s.jsxs)("form", {
                  className: `${ur().chatEntryControls}`,
                  children: [
                    (0, s.jsx)("textarea", {
                      className: ur().chatTextarea,
                      placeholder: (0, A.we)("#BroadcastChat_EnterResponse"),
                      onKeyPress: M,
                      onChange: (Pe) => o(Pe.target.value),
                      value: i,
                      ref: d,
                    }),
                    f &&
                      (0, s.jsx)(Ns, {
                        nSeconds: t.m_nRateLimitSeconds,
                        bRateLimited: t.m_bRateLimited,
                      }),
                    (0, s.jsx)("button", {
                      className: Fe,
                      title: (0, A.we)("#ChatEntryButton_Submit"),
                      disabled: Me,
                      onClick: Q,
                      children: (0, s.jsx)(Ye.XTb, {}),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  style: { height: "50px" },
                  className: `${ur().chatEntryActionsContainer}`,
                  children: (0, s.jsxs)("div", {
                    className: ur().chatEntryActionsGroup,
                    children: [
                      (0, s.jsx)(pi.A, {
                        disabled: !1,
                        OnEmoticonSelected: D,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: e,
                      }),
                      (0, s.jsx)(As, { ...c, textInputRef: d }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function As(c) {
          const { oChat: t, emoticonStore: e, textInputRef: i } = c;
          return t.m_strFlairGroupID &&
            e.flair_list &&
            e.GetFlairListByGroupID(t.m_strFlairGroupID)?.length
            ? (0, s.jsx)(pi.A, {
                disabled: !1,
                OnEmoticonSelected: (o) => {
                  t.UpdateChatMessageFlair(o), i?.current && i.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: e,
                strFlairGroupID: t.m_strFlairGroupID,
                title: (0, A.we)("#ChatEntryButton_Flair"),
                buttonIcon: (0, s.jsx)(Ye.P7r, {}),
              })
            : null;
        }
        class Ns extends _.Component {
          render() {
            return (0, s.jsx)("div", {
              className: gt().TimedProgressBarContainer,
              children: (0, s.jsxs)("div", {
                className: gt().wrapper,
                children: [
                  (0, s.jsx)("div", {
                    className: `${gt().spinner} ${gt().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, s.jsx)("div", {
                    className: `${gt().filler} ${gt().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, s.jsx)("div", {
                    className: gt().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function Us(c) {
          return (0, s.jsxs)("div", {
            className: gt().Description,
            children: [
              (0, s.jsx)("div", {
                className: gt().LogInPrompt,
                children: (0, A.we)("#Broadcast_PartnerChat_Login"),
              }),
              !F.iA.logged_in &&
                (0, s.jsx)(is.$n, {
                  onClick: ls,
                  className: (0, yt.A)(gt().SignInButton),
                  children: (0, A.we)("#Login_SignIn"),
                }),
            ],
          });
        }
        var Ss = g(73110),
          Ls = g(83482),
          Es = g(44420),
          ks = g(84676),
          Kr = g(18654),
          Hs = g(13004),
          $r = g(95414),
          Xs = g(72865),
          Ks = g(85599),
          $s = g(43087),
          ri = g.n($s),
          ii = g(29522),
          Br = g(40358),
          Ys = g(47875),
          Ii = g(21721),
          Js = g(3348);
        const Rs = (0, S.PA)((c) => {
          const { appid: t } = c,
            e = (0, Xs.n9)(),
            i = (0, _.useRef)({ include_assets: !0, include_release: !0 }),
            o = (0, ii.$5)(t),
            { data: d } = (0, Br.J$)(o),
            { data: f } = (0, Br.lv)(o),
            { data: M } = (0, Br.by)(o),
            [D, Q] = (0, ks.t7)(t, i.current);
          let Me = (0, yt.A)(
              ri().StoreSaleWidgetContainer_mini,
              "StoreSaleWidgetContainer_mini",
            ),
            Fe = ri().StoreSaleWidgetImage_mini,
            Pe = ri().StoreSaleImage_mini;
          if (d == null)
            return (0, s.jsx)("div", {
              className: Me,
              children: (0, s.jsx)(Ks.t, { size: "medium" }),
            });
          if (d == null || !d.name)
            return (0, s.jsx)("div", {
              className: Kr.StoreSaleWidgetEmptyContainer,
            });
          const Ne = d.type != Es.uE.gQ,
            tr = (0, Ls.wJ)((0, Ys._)(d), e);
          return (0, s.jsxs)("div", {
            className: Me,
            children: [
              (0, s.jsx)("a", {
                href: tr,
                target: F.TS.IN_CLIENT ? void 0 : "_blank",
                children: (0, s.jsx)($r.j, {
                  id: o,
                  children: (0, s.jsx)("div", {
                    className: Fe,
                    children:
                      f &&
                      (0, s.jsx)("img", {
                        className: Pe,
                        src: (0, Ii.b0)(f, "small_capsule"),
                        alt: d.name,
                      }),
                  }),
                }),
              }),
              (0, s.jsxs)("div", {
                className: Kr.StoreSaleBroadcastWidgetRight,
                children: [
                  (0, s.jsx)("a", {
                    href: tr,
                    target: F.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, s.jsx)($r.j, {
                      id: o,
                      children: (0, s.jsx)("div", {
                        className: (0, yt.A)(
                          Kr.StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                        children: d.name,
                      }),
                    }),
                  }),
                  M &&
                    (0, s.jsx)("div", {
                      className: Kr.StoreSaleWidgetRelease,
                      children: (0, Js.CC)(M),
                    }),
                  !!Ne && (0, s.jsx)(Hs.w, { id: o, bShowDemoButton: !0 }),
                ],
              }),
            ],
          });
        });
        function vr() {
          let c = window.GetUsabilityTracker;
          if (c) return c();
        }
        var hr = g(61639),
          si = g(70512),
          Yr = g(10142),
          Zs = g(28462),
          Jr = g(34592),
          nr = g(34032),
          Qs = Object.defineProperty,
          Ts = Object.getOwnPropertyDescriptor,
          ar = (c, t, e, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Ts(t, e) : t, d = c.length - 1, f;
              d >= 0;
              d--
            )
              (f = c[d]) && (o = (i ? f(t, e, o) : f(o)) || o);
            return i && o && Qs(t, e, o), o;
          };
        let Gs = !1;
        function ni(c) {
          return !!(c && c.thumbnail_http_address);
        }
        function Rn(c, t) {
          if (t || c) {
            const e = t || c;
            return !!(e && xe.Get().BIsAppStreaming(e));
          }
          return !1;
        }
        const ir = class Or {
          constructor() {
            (0, N.Gn)(this);
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
          BHasStreams(t) {
            const e = this.GetStreams(t);
            return !!(e && e.length > 0);
          }
          AddCallbackOnNewContext(t, e, i) {
            this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(t), {
              name: e,
              fnCallback: i,
            });
          }
          ClearCallbackOnNewContext(t) {
            this.m_onLoadContextCall.set(
              this.GetStreamsLookupKeyFromDef(t),
              null,
            );
          }
          GetPlayReadyStream(t) {
            let e = this.GetStreamsLookupKeyFromDef(t);
            return this.m_playReadyStream.get(e);
          }
          BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
            return !!this.m_bUserPreferenceHideBroadcastByDefault;
          }
          BIsEmbeddedStreamCollapsed() {
            return !!this.m_bCollapsed;
          }
          SetEmbeddedStreamCollapsed(t) {
            this.m_bCollapsed != t && (this.m_bCollapsed = t);
          }
          GetConcurrentStreams(t) {
            const e = this.GetStreams(t);
            return e ? e.filter((i) => ni(i)).length : 0;
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
            const t = this.GetChatVisibility();
            t !== "remove" && (this.m_bUserChatExpanded = t === "hide");
          }
          DebugDumpContextAndAvailableContext(t) {
            console.log(
              "Requested context",
              this.GetStreamsLookupKeyFromDef(t),
            ),
              console.log(
                "Available context count: ",
                this.m_lookupStreams.size,
              ),
              this.m_lookupStreams.forEach((e, i) => {
                console.log(i, e.length);
              });
          }
          GetStreams(t) {
            const e = this.GetStreamsLookupKeyFromDef(t);
            return this.m_lookupStreams.get(e);
          }
          GetBroadcastURL(t) {
            let e = null;
            return (
              t.steamid
                ? (e = new zt.b(t.steamid))
                : (e = zt.b.InitFromAccountID(t.accountid)),
              F.TS.COMMUNITY_BASE_URL +
                "broadcast/watch/" +
                e.ConvertTo64BitString()
            );
          }
          BIsAppStreaming(t) {
            let e = !1;
            return (
              this.m_lookupStreams.forEach((i) => {
                e ||
                  (e =
                    !!i &&
                    i.some(
                      (o) =>
                        Ie.es.GetOrCreateBroadcastInfo(o.steamid).m_nAppID ===
                        t,
                    ));
              }),
              e
            );
          }
          GetStreamsForAppID(t) {
            const e = new Array();
            return (
              this.m_lookupStreams.forEach((i) => {
                i?.forEach((o) => {
                  Ie.es.GetOrCreateBroadcastInfo(o.steamid).m_nAppID === t &&
                    e.push(o);
                });
              }),
              e
            );
          }
          AddStreamChangedListener(t) {
            this.m_setStreamChangedListeners.add(t);
          }
          RemoveStreamChangedListener(t) {
            this.m_setStreamChangedListeners.delete(t);
          }
          async LoadBIsEmbeddedBroadcastHidden(t) {
            if (this.m_bUserPreferenceHideBroadcastByDefault === void 0) {
              let e = (0, F.Tc)("broadcastuser", "application_config");
              if (!e)
                try {
                  let i =
                    F.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences";
                  e = (await v().get(i, { params: {}, cancelToken: t.token }))
                    .data;
                } catch (i) {
                  console.log(
                    "LoadBIsEmbeddedBroadcastHidden: " +
                      (0, Jr.H)(i).strErrorMsg,
                  ),
                    (e = { bHideStoreBroadcast: !1 });
                }
              (0, N.h5)(() => {
                (this.m_bUserPreferenceHideBroadcastByDefault =
                  e.bHideStoreBroadcast),
                  (this.m_bCollapsed = e.bHideStoreBroadcast);
              });
            }
            return this.m_bUserPreferenceHideBroadcastByDefault;
          }
          async SetupEmbeddableVOD(t, e) {
            (this.m_bUseFakeData = !1),
              (this.m_streamChatStatus = "remove"),
              await Yr.A.Get().QueueAppRequest(t.nAppIDVOD, {
                include_assets: !0,
                include_trailers: !0,
              });
            const i = Yr.A.Get().GetApp(t.nAppIDVOD),
              o = new nr.TT();
            if (
              ((o.accountid = 0),
              (o.nAppIDVOD = t.nAppIDVOD),
              (o.default_selection_priority = nr.mY.k_ePrimary),
              (o.current_selection_priority = nr.mY.k_ePrimary),
              (o.thumbnail_http_address = i?.GetAssets().GetHeaderURL() || ""),
              (o.title = i?.GetName() || ""),
              this.GetStreams(t).unshift(o),
              e)
            ) {
              const d = this.GetStreamsLookupKeyFromDef(t);
              this.m_playReadyStream.set(d, o);
            }
          }
          async HintLoadEmbeddablePreviewStreams(t) {
            let e = null,
              i = {
                eventid: t.event ? t.event.GID : void 0,
                previewAccounts:
                  t.bIsPreview && t.accountIDs
                    ? t.accountIDs.slice().sort().join(",")
                    : void 0,
              };
            try {
              return (
                (e = await v().get(
                  F.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                  { params: i },
                )),
                this.HandleHintLoadBroadcastResponse(t, e.data)
              );
            } catch (o) {
              let d = (0, Jr.H)(o);
              console.error(
                "HintLoadEmbeddablePreviewStreams hit error loading: " +
                  d.strErrorMsg,
                d,
              );
            }
            return [];
          }
          async HintLoadEmbeddableStreams(t) {
            let e = this.MapEmbeddableStreamToRequest(t),
              i = this.GetStreamsLookupKeyFromParam(e);
            if (!this.m_inFlightRequests.has(i)) {
              this.m_lookupKeyToEmbedStreamDef.set(i, t);
              const o = this.InternalHintLoadEmbeddableStreams(t, e);
              this.m_inFlightRequests.set(i, o);
            }
            return this.m_inFlightRequests.get(i);
          }
          async InternalHintLoadEmbeddableStreams(t, e) {
            let i = (0, F.Tc)(
              "broadcast_available_for_page",
              "application_config",
            );
            if ((0, nr.h7)(i))
              return this.HandleHintLoadBroadcastResponse(t, i);
            try {
              let o = null;
              return (
                (o = await v().get(
                  F.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                  { params: e },
                )),
                this.HandleHintLoadBroadcastResponse(t, o.data)
              );
            } catch (o) {
              let d = (0, Jr.H)(o);
              console.error(
                "HintLoadEmbeddableStreams hit error loading: " + d.strErrorMsg,
                d,
              );
            }
            return [];
          }
          async HandleHintLoadBroadcastResponse(t, e) {
            (this.m_bUseFakeData = !1),
              t.bIsPreview &&
                (e?.filtered?.length > 0
                  ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                      t.event,
                      e.filtered,
                    )
                  : ((e = {
                      filtered: [{}],
                      success: 1,
                      total_count: 1,
                      err_msg: "",
                      broadcast_chat_visibility: "hide",
                    }),
                    (this.m_bUseFakeData = !0))),
              e.broadcast_chat_visibility &&
                (this.m_pageChatStatus = e.broadcast_chat_visibility);
            const i = new Array();
            (0, N.h5)(() => {
              e.filtered.forEach((f) => {
                if (!f.steamid) {
                  const Q = zt.b.InitFromAccountID(f.accountid);
                  f.steamid = Q.ConvertTo64BitString();
                }
                const M = Ie.es.GetOrCreateBroadcastInfo(f.steamid),
                  D = f.appid ? Number(f.appid) : Ie.fO;
                (M.m_nAppID = D),
                  (M.m_strAppId = "" + D),
                  f.current_selection_priority === void 0 &&
                    (f.current_selection_priority =
                      f.default_selection_priority),
                  D != Ie.fO && i.push(D);
              });
            });
            const o = this.GetStreamsLookupKeyFromDef(t);
            if (
              (this.m_lookupStreams.set(o, e.filtered),
              this.m_onLoadContextCall.has(o))
            ) {
              const f = this.m_onLoadContextCall.get(o);
              f && f.fnCallback();
            }
            const d = this.GetStreams(t);
            return await this.AutoStartVideoStream(t, d), d;
          }
          ExtractBroadcastPrioritiesFromPartnerEventForPreview(t, e) {
            const i = Array.from(t.jsondata.broadcast_whitelist ?? []),
              o = Array.from(t.jsondata.broadcast_priority ?? []),
              d = new Map();
            for (let f = 0; f < i.length && !(f >= o.length); f++)
              d.set(i[f], (0, nr.PH)(o[f]));
            e.forEach((f) => {
              const M = Number(f.accountid);
              d.has(M) && (f.current_selection_priority = d.get(M));
            });
          }
          async AutoStartVideoStream(t, e) {
            let i = this.GetStreamsLookupKeyFromDef(t);
            if (this.m_bMapHasStartedVideo.get(i)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(i)) {
                const o = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: nr.mY.k_eGeneral,
                  current_selection_priority: nr.mY.k_eGeneral,
                };
                this.m_playReadyStream.set(i, o);
              }
              return this.m_playReadyStream;
            }
            return this.PlayFromAvailableStreams(t, e);
          }
          async PlayFromAvailableStreams(t, e, i = !1) {
            const o = new Set();
            for (;;) {
              const d = e.filter((D) => !o.has(D) && (!i || !D.nAppIDVOD)),
                f = this.GetAutoStartStream(d);
              if (!f) return null;
              if (await this.AttemptToPlayStream(t, f)) return f;
              o.add(f);
            }
          }
          async AttemptToPlayStream(t, e) {
            let i = this.GetStreamsLookupKeyFromDef(t);
            if (
              (this.m_bMapHasStartedVideo.set(i, !0),
              this.m_mapBroadcastChecked.has(e.accountid) ||
                this.m_mapBroadcastChecked.set(
                  e.accountid,
                  this.InternalAttemptToPlayStream(t, e),
                ),
              e.nAppIDVOD)
            )
              this.m_playReadyStream.set(i, e);
            else {
              const o = await this.m_mapBroadcastChecked.get(e.accountid);
              if (o?.success == E.R) {
                (e.steamid = o.steamid),
                  this.m_playReadyStream.set(i, e),
                  this.GetConcurrentStreams(t) > 1
                    ? (this.m_streamChatStatus = "hide")
                    : (this.m_streamChatStatus = e.broadcast_chat_visibility),
                  this.m_setStreamChangedListeners.forEach((f) => f(e));
                const d = Ie.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
                Nr(d, hr.Mc.iy, e.snr);
              } else return null;
            }
            return e;
          }
          async InternalAttemptToPlayStream(t, e) {
            let i = this.GetStreamsLookupKeyFromDef(t),
              o = null;
            try {
              const d = F.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let f = {
                broadcastaccountid: e.accountid,
                viewer_token: Ie.es.GetViewerToken(),
                origin: self.origin,
              };
              return (o = await v().get(d, { params: f })), o.data;
            } catch (d) {
              let f = (0, Jr.H)(d);
              console.error(
                "Broadcast.AttemptToPlayStream: " + f.strErrorMsg,
                f,
              );
            }
            return null;
          }
          GetAutoStartStream(t) {
            if (!t) return null;
            const e = t.filter((f) => ni(f)),
              i = e.reduce((f, M) => Math.max(f, Ir(M)), 0),
              o = e.filter((f) => Ir(f) === i);
            if (o.length === 0) return null;
            const d = Math.floor(Math.random() * o.length);
            return o[d];
          }
          MapEmbeddableStreamToRequest(t) {
            return {
              appid: t.appid,
              promotionName: t.bIsPreview ? "preview" : t.promotionName,
              clanid: t.clanid
                ? t.clanid
                : t.event
                  ? t.event.clanSteamID.GetAccountID()
                  : void 0,
              listid: t.listid,
              subid: t.subid,
              bundleid: t.bundleid,
              eventid: t.event ? t.event.GID : void 0,
              previewAccounts:
                t.bIsPreview && t.accountIDs
                  ? t.accountIDs.slice().sort().join(",")
                  : void 0,
              test: Gs,
              cc: F.TS.COUNTRY,
              l: F.TS.LANGUAGE,
              hubtype: t.event?.GetContentHubType(),
              hubcategory: t.event?.GetContentHubCategory(),
              hubtagid: t.event?.GetContentHubTag(),
              tabuniqueid: t.tabuniqueid,
              tabfilter: t.tabfilter,
              rt_now_override_test: qr.HD.BHasTimeOverride()
                ? qr.HD.GetTimeNowWithOverride()
                : void 0,
            };
          }
          GetStreamsLookupKeyFromDef(t) {
            return this.GetStreamsLookupKeyFromParam(
              this.MapEmbeddableStreamToRequest(t),
            );
          }
          GetStreamsLookupKeyFromParam(t) {
            return JSON.stringify(t);
          }
          static Get() {
            return (
              Or.s_GlobalStore ||
                ((Or.s_GlobalStore = new Or()), Or.s_GlobalStore.Init()),
              Or.s_GlobalStore
            );
          }
          Init() {}
        };
        ar([N.sH], ir.prototype, "m_lookupStreams", 2),
          ar([N.sH], ir.prototype, "m_playReadyStream", 2),
          ar([N.sH], ir.prototype, "m_pageChatStatus", 2),
          ar([N.sH], ir.prototype, "m_streamChatStatus", 2),
          ar([N.sH], ir.prototype, "m_bUserChatExpanded", 2),
          ar(
            [N.sH],
            ir.prototype,
            "m_bUserPreferenceHideBroadcastByDefault",
            2,
          ),
          ar([N.sH], ir.prototype, "m_bCollapsed", 2),
          ar([N.XI], ir.prototype, "HintLoadEmbeddablePreviewStreams", 1),
          ar([N.XI], ir.prototype, "AttemptToPlayStream", 1);
        let xe = ir;
        function Ir(c) {
          return c.current_selection_priority || nr.mY.k_eGeneral;
        }
        function qs(c) {
          c.sort((t, e) =>
            Ir(t) != Ir(e)
              ? Ir(e) - Ir(t)
              : t.viewer_count != e.viewer_count
                ? e.viewer_count - t.viewer_count
                : e.accountid - t.accountid,
          );
        }
        async function Nr(c, t, e) {
          if (c > 0 && c != 7 && e) {
            let i = new URLSearchParams();
            i.append("page_action", "" + t),
              i.append("snr", e),
              v().post(
                F.TS.STORE_BASE_URL + "ajaxreportproductaction/" + c + "/",
                i,
              );
          }
        }
        const Vs = new Zs.T();
        var Cs = g(98932),
          _s = g(39239),
          tn = g(64377),
          xi = g(19730),
          Oi = g(16512),
          en = g(53120),
          R = g.n(en);
        const rn = (0, S.PA)((c) => {
          const { event: t } = c,
            e = t.clanSteamID.GetAccountID(),
            i = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
            o = (0, _.useRef)(null),
            [d, f] = (0, _.useState)(
              t ? Oi.pF.GetCreatorHome(t.clanSteamID) : null,
            );
          if (
            ((0, _.useEffect)(() => {
              const D = v().CancelToken.source();
              return (
                (o.current = D.cancel),
                (async () => {
                  const Me = zt.b.InitFromClanID(e),
                    Fe = await Oi.pF.LoadCreatorHome(Me, !1, D);
                  D.token.reason || f(Fe);
                })(),
                () => {
                  o.current && o.current("BroadcastDropsDisplay: unmounting");
                }
              );
            }, [e]),
            i || !d || !d.BIsLoaded())
          )
            return null;
          const M =
            F.TS.COMMUNITY_BASE_URL +
            "gid/" +
            t.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            t.jsondata.broadcast_item_drops_details_event_gid;
          return (0, s.jsx)("div", {
            className: R().item_drop_ctn,
            children: (0, s.jsxs)("div", {
              children: [
                (0, A.we)(
                  d.GetName().length > 0
                    ? t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                        60 ==
                      0
                      ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                      : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                    : t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                          60 ==
                        0
                      ? "#SalePage_WatchForDrop_Hours_Developer"
                      : "#SalePage_WatchForDrop_Minutes_Developer",
                  t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                    0
                    ? t.jsondata.broadcast_item_drops_min_watch_time_minutes /
                        60
                    : t.jsondata.broadcast_item_drops_min_watch_time_minutes,
                  d.GetName(),
                ),
                !!t.jsondata.broadcast_item_drops_details_clan_accountid &&
                  (0, s.jsx)("a", {
                    href: M,
                    target: F.TS.IN_CLIENT ? "" : "_blank",
                    children: (0, A.we)("#SalePage_WatchForDrop_LearnMore"),
                  }),
              ],
            }),
          });
        });
        var sn = g(95695),
          fr = g.n(sn),
          nn = g(96715),
          an = g(10886),
          on = g(19654),
          ln = g(3209),
          cn = g(14256),
          sr = g.n(cn);
        function dn(c) {
          const { steamid: t, closeModal: e } = c;
          return (0, s.jsxs)(os.o0, {
            strDescription: "",
            strTitle: (0, A.we)("#Button_Share"),
            onCancel: e,
            onOK: e,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
            children: [
              (0, s.jsx)(un, { steamid: t }),
              (0, s.jsx)(mn, { steamid: t }),
            ],
          });
        }
        function un(c) {
          const { steamid: t } = c,
            e = hn(t);
          return (0, s.jsxs)("div", {
            className: (0, yt.A)(
              fr().FlexRowContainer,
              sr().share_controls_ctn,
            ),
            children: [
              (0, s.jsx)(Re.he, {
                toolTipContent: (0, A.we)("#EventDisplay_Share_OnFaceBook"),
                children: (0, s.jsx)(Xr.uU, {
                  href: e.strFacebookUrl,
                  className: sr().ShareBtn,
                  children: (0, s.jsx)("img", {
                    className: (0, yt.A)(fr().Button),
                    src: an.A,
                  }),
                }),
              }),
              (0, s.jsx)(Re.he, {
                toolTipContent: (0, A.we)("#EventDisplay_Share_OnTwitter"),
                children: (0, s.jsx)(Xr.uU, {
                  href: e.strTwitterUrl,
                  className: sr().ShareBtn,
                  children: (0, s.jsx)("img", {
                    className: (0, yt.A)(fr().Button),
                    src: ln.A,
                  }),
                }),
              }),
              (0, s.jsx)(Re.he, {
                toolTipContent: (0, A.we)("#EventDisplay_Share_OnReddit"),
                children: (0, s.jsx)(Xr.uU, {
                  href: e.strRedditUrl,
                  className: sr().ShareBtn,
                  children: (0, s.jsx)("img", {
                    className: (0, yt.A)(fr().Button),
                    src: on.A,
                  }),
                }),
              }),
            ],
          });
        }
        function mn(c) {
          const { steamid: t } = c,
            e = _.createRef(),
            [i, o] = _.useState(""),
            d = _.createRef(),
            f = _.useCallback(
              (D) => {
                e.current &&
                  e.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(e.current.value)
                    .then((Q) => {
                      o((0, A.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((Q) => {
                      o(
                        (0, A.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", Q);
                    });
              },
              [e],
            ),
            M = F.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)("div", {
                className: (0, yt.A)(fr().FlexRowContainer, sr().linkField),
                onClick: f,
                children: [
                  (0, s.jsx)("span", {
                    className: sr().LinkInputLabel,
                    children: (0, A.we)("#EventDisplay_Share_Link"),
                  }),
                  (0, s.jsx)("textarea", {
                    className: sr().LinkInput,
                    ref: e,
                    value: M,
                    readOnly: !0,
                  }),
                  !!document.queryCommandSupported("copy") &&
                    (0, s.jsx)(Re.he, {
                      toolTipContent: (0, A.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, s.jsx)("div", {
                        className: (0, yt.A)(
                          fr().Button,
                          fr().Icon,
                          sr().LinkButton,
                        ),
                        children: (0, s.jsx)("img", {
                          className: sr().ClipboardIcon,
                          src: nn.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, s.jsx)("div", {
                ref: d,
                className: sr().ClipboardText,
                children: i,
              }),
            ],
          });
        }
        function hn(c) {
          const t = F.TS.COMMUNITY_BASE_URL + "broadcast/share/" + c;
          return {
            strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: t + "?site=twitter",
            strRedditUrl: t + "?site=reddit",
          };
        }
        var fn = g(82734),
          gn = g(37589),
          pn = Object.defineProperty,
          bn = Object.getOwnPropertyDescriptor,
          _e = (c, t, e, i) => {
            for (
              var o = i > 1 ? void 0 : i ? bn(t, e) : t, d = c.length - 1, f;
              d >= 0;
              d--
            )
              (f = c[d]) && (o = (i ? f(t, e, o) : f(o)) || o);
            return i && o && pn(t, e, o), o;
          };
        const wn = {
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
        function yn() {
          const c = (0, F.Qn)();
          return !(0, F.Y2)() && !c;
        }
        function Mn(c) {
          return yn() ? (0, s.jsx)(gr, { ...c }) : null;
        }
        let gr = class extends _.Component {
          m_cancelSignal = v().CancelToken.source();
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
            await xe.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !xe
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: xe
                      .Get()
                      .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                      ? "0vh"
                      : "100vh",
                  },
                }),
              await (this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event.BUsesContentHubForItemSource()
                ? xe.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : xe.Get().HintLoadEmbeddableStreams(this.props)),
              this.props.nAppIDVOD &&
                xe
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
            let c = xe.Get().GetPlayReadyStream(this.props);
            const t = this.state.bExpanded,
              e = Ie.es.GetOrCreateBroadcastInfo(c.steamid).m_nAppID;
            Nr(e, t ? hr.Mc.U6 : hr.Mc.B_, c.snr),
              t && vr() && vr().AddEvent(si.Xm.d),
              window.setTimeout(
                () =>
                  this.setState({
                    innerStyle: {
                      ...this.state.innerStyle,
                      maxHeight: t ? "0vh" : "100vh",
                    },
                  }),
                10,
              ),
              t ||
                this.setState({ bExpanded: !this.state.bExpanded }, () =>
                  xe.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
                );
          }
          OnShrinkTransitionEnd() {
            this.state.innerStyle.maxHeight === "0vh" &&
              this.setState({ bExpanded: !1 }, () =>
                xe.Get().SetEmbeddedStreamCollapsed(!0),
              );
          }
          async onStreamSelect(c) {
            this.setState({ bStartMuted: !1 }),
              xe.Get().GetPlayReadyStream(this.props).accountid !=
                c.accountid &&
                (await xe.Get().AttemptToPlayStream(this.props, c));
          }
          async PlayNextNonVOD() {
            this.setState({ bStartMuted: !1 });
            const c = xe
              .Get()
              .GetStreams(this.props)
              .filter(
                (t) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(t),
              );
            await xe.Get().PlayFromAvailableStreams(this.props, c, !0);
          }
          ConstructSidePanels(c, t) {
            let e = {
              leftPanel: null,
              rightPanel: null,
              bRightPanelArtworkOrEmpty: !0,
            };
            if (this.props.bWidePlayer) return e;
            const i = xe.Get().GetConcurrentStreams(this.props) > 1;
            let o = Ie.es.GetOrCreateBroadcastInfo(c.steamid).m_nAppID,
              d = (0, s.jsx)(zi, { ImgUrl: c.right_panel }, "right" + o),
              f = (0, s.jsx)(zi, { ImgUrl: c.left_panel }, "left" + o);
            const M = 11;
            if (o < M) {
              const D = gi.GetAppIDListForBroadcasterSteamID(c.steamid);
              D && D.length === 1 && (o = D[0]);
            }
            return (
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
                o >= M &&
                (!this.props.event ||
                  !this.props.event.jsondata.broadcast_force_banner) &&
                ((d = (0, s.jsx)(Rs, { appid: o }, "mini" + c.accountid)),
                (e.bRightPanelArtworkOrEmpty = !1)),
              i && !t
                ? ((e.leftPanel = (0, s.jsx)(
                    In,
                    {
                      broadcastEmbedContext: this.props,
                      curStream: c,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    },
                    "selector" + o,
                  )),
                  (e.rightPanel = d))
                : t
                  ? ((e.leftPanel = (0, s.jsx)("div", {})),
                    (e.rightPanel = (0, s.jsx)(zn, {
                      stream: c,
                      orientation: "rightside",
                    })),
                    (e.bRightPanelArtworkOrEmpty = !1))
                  : ((e.leftPanel = f), (e.rightPanel = d)),
              e
            );
          }
          MarkBroadcastSeen() {
            this.m_bMarkedUsabilitySeen ||
              ((this.m_bMarkedUsabilitySeen = !0),
              vr() && vr().AddEvent(si.Xm.ex));
          }
          render() {
            if (this.state.bLoadingPreference) return null;
            let c = xe.Get().GetPlayReadyStream(this.props);
            if (c) {
              this.MarkBroadcastSeen();
              let t = xe.Get().GetChatVisibility() === "show";
              const {
                event: e,
                language: i,
                fnRenderBroadcastContext: o,
              } = this.props;
              e &&
                (c = {
                  ...c,
                  left_panel: e.GetImageURL(
                    "broadcast_left",
                    i || (0, zr.sfN)(F.TS.LANGUAGE),
                  ),
                  right_panel: e.GetImageURL(
                    "broadcast_right",
                    i || (0, zr.sfN)(F.TS.LANGUAGE),
                  ),
                  store_title: e.GetBroadcastTitle(
                    i || (0, zr.sfN)(F.TS.LANGUAGE),
                  ),
                  broadcast_chat_visibility: e.GetBroadcastChatVisibility(),
                });
              let d = this.ConstructSidePanels(c, t),
                f = c.store_title ? c.store_title : c.title,
                M = xe.Get().GetConcurrentStreams(this.props) > 1;
              const D = () => {
                c.nAppIDVOD && this.PlayNextNonVOD(),
                  this.props.fnOnVideoEnd?.();
              };
              return (0, s.jsx)(_.Fragment, {
                children: (0, s.jsxs)("div", {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                  children: [
                    (0, s.jsxs)("div", {
                      className: (0, yt.A)({
                        [R().bordered_container]: !0,
                        [R().Event]: !!e,
                        broadcast_brd_ctn_trgt: !0,
                      }),
                      children: [
                        (0, s.jsxs)("div", {
                          className: (0, yt.A)(
                            R().bordered_title,
                            "bordered_title_trgt",
                          ),
                          children: [
                            (0, s.jsx)(Cs.K, {}),
                            (0, s.jsx)("div", {
                              className: R().streamTitle,
                              children: f,
                            }),
                            (0, s.jsxs)("div", {
                              className: R().bordered_corner_container,
                              children: [
                                !this.state.bExpanded &&
                                  (0, s.jsx)(Re.he, {
                                    toolTipContent: (0, A.we)(
                                      "#StoreBroadcast_Change_store_Broadcast_settings",
                                    ),
                                    children: (0, s.jsx)("div", {
                                      className: R().broadcast_settings_icon,
                                      onClick: () =>
                                        window.open(
                                          `${F.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                        ),
                                    }),
                                  }),
                                (0, s.jsx)(Re.he, {
                                  toolTipContent: (0, A.we)(
                                    "#StoreBroadcast_Hide_Tooltip",
                                  ),
                                  children: (0, s.jsx)("div", {
                                    className: this.state.bExpanded
                                      ? R().bordered_corner_expanded
                                      : R().bordered_corner_shrinked,
                                    onClick: this.ToggleBroadcastExpandShrink,
                                  }),
                                }),
                              ],
                            }),
                            !!c.gamedata_subtitle &&
                              (0, s.jsx)("div", {
                                className: R().bordered_subtitle,
                                children: c.gamedata_subtitle,
                              }),
                          ],
                        }),
                        !!this.state.bExpanded &&
                          (0, s.jsxs)("div", {
                            className: (0, yt.A)({
                              [R().container]: !0,
                              embeddable_ctn_trgt: !0,
                              multistream: M,
                              broadcast_right_panel_simple:
                                d.bRightPanelArtworkOrEmpty,
                              broadcast_chat_expanded: t,
                            }),
                            style: { ...this.state.innerStyle },
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                            children: [
                              (0, s.jsx)("div", {
                                className: R().LeftPanelCtn,
                                children: d.leftPanel,
                              }),
                              (0, s.jsx)(Rr, {
                                stream: c,
                                bStartMuted: this.state.bStartMuted,
                                fnRenderBroadcastContext: o,
                                fnOnVideoEnd: D,
                                bWidePlayer: this.props.bWidePlayer,
                              }),
                              (0, s.jsx)("div", {
                                className: R().RightPanelCtn,
                                children: d.rightPanel,
                              }),
                              !!this.state.bExpanded &&
                                (0, s.jsx)(Ur, {
                                  stream: c,
                                  bMultistream: M,
                                  chatAnnouncementGivewayGID: d.rightPanel
                                    ? void 0
                                    : this.props.chat_announcement_giveaway,
                                }),
                            ],
                          }),
                      ],
                    }),
                    !!(
                      e &&
                      e.jsondata &&
                      e.jsondata.broadcast_item_drops_enabled
                    ) && (0, s.jsx)(rn, { event: e }),
                    (0, s.jsx)("div", { className: R().clear_div }),
                  ],
                }),
              });
            } else
              return (0, s.jsx)("div", { className: "NoBroadcastAvailable" });
          }
        };
        _e([ve.oI], gr.prototype, "ToggleBroadcastExpandShrink", 1),
          _e([ve.oI], gr.prototype, "OnShrinkTransitionEnd", 1),
          _e([ve.oI], gr.prototype, "onStreamSelect", 1),
          _e([ve.oI], gr.prototype, "PlayNextNonVOD", 1),
          (gr = _e([S.PA], gr));
        class Rr extends _.Component {
          m_iVideoContainerRef = _.createRef();
          constructor(t) {
            super(t),
              (this.state = {
                bPopout: !1,
                bPreventPopup: window.screen.width <= 768,
              });
          }
          CloseBroadcastPopup() {
            const t = Ie.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            Nr(t, hr.Mc.n6, this.props.stream.snr),
              vr() && vr().AddEvent(si.Xm.ok),
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
              className: R().wrapper,
              children: (0, s.jsx)(gn.j, {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (t) => {
                  t.isIntersecting || this.OnLeave();
                },
                className: (0, yt.A)({
                  [R().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [R().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
                children: (0, s.jsxs)("div", {
                  className: this.state.bPopout
                    ? R().broadcast_floating
                    : R().video_container,
                  children: [
                    this.state.bPopout &&
                      (0, s.jsx)(ji, {
                        steamIDBroadcast: this.props.stream.steamid,
                        OnPreventPopup: this.CloseBroadcastPopup,
                      }),
                    (0, s.jsx)("div", {
                      className: R().BroadcastPlayerContainer,
                      children: (0, s.jsx)(Ss.default, {
                        steamIDBroadcast: this.props.stream.steamid,
                        watchLocation: ct.nn.fe,
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
        _e([ve.oI], Rr.prototype, "CloseBroadcastPopup", 1),
          _e([ve.oI], Rr.prototype, "OnEnter", 1),
          _e([ve.oI], Rr.prototype, "OnLeave", 1);
        function Bn(c) {
          const { stream: t } = c,
            [e] = (0, Ut.q3)(() => [t.steamid]),
            i = Ie.es.GetOrCreateBroadcastInfo(e).m_nAppID,
            o = wn.list.find(
              (d) =>
                d.appid == i &&
                (!d.broadcasterAccountID ||
                  d.broadcasterAccountID == t.accountid),
            );
          if (o) {
            let d = o.url;
            return (
              (F.TS.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (d = "steam://openurl/" + d),
              (0, s.jsx)("a", {
                href: d,
                children: (0, A.we)(
                  "#Broadcast_Embed_Watch_With_Frieds_SteamTV",
                ),
              })
            );
          } else {
            const d = F.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
            return (0, s.jsx)(Re.he, {
              toolTipContent: (0, A.we)("#BroadcastWatch_View_Broadcast_Page"),
              children: (0, s.jsx)("a", {
                href: d,
                className: R().external_link,
                children: (0, s.jsx)(Ye.GrD, {}),
              }),
            });
          }
        }
        let Ur = class extends _.Component {
          OnToggleChat(c) {
            c.preventDefault();
            const t = Ie.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            Nr(
              t,
              xe.Get().GetChatVisibility() === "show" ? hr.Mc.kz : hr.Mc.bW,
              this.props.stream.snr,
            ),
              xe.Get().ToggleChatVisibility();
          }
          onWatchBroadcastPage() {
            const c = Ie.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            Nr(c, hr.Mc.Is, this.props.stream.snr);
          }
          render() {
            const c = xe.Get().GetChatVisibility() != "remove",
              t = xe.Get().GetChatVisibility() === "hide",
              e = !this.props.stream.nAppIDVOD,
              i = e;
            let o = Number.parseInt(
              "" +
                Ie.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nViewerCount,
            );
            return (0, s.jsxs)("div", {
              className: (0, yt.A)(R().viewer_bar, "viewer_bar"),
              children: [
                (0, s.jsxs)("div", {
                  className: (0, yt.A)(R().viewer_count, "viewer_count"),
                  children: [(0, s.jsx)(Ye.y_e, {}), (0, xi.Dq)(o)],
                }),
                (0, s.jsxs)("div", {
                  className: (0, yt.A)(R().viewer_links, "viewer_links"),
                  children: [
                    !!(c && !t && this.props.bMultistream) &&
                      (0, s.jsx)("div", {
                        className: R().chat_link,
                        children: (0, s.jsx)("a", {
                          href: "#",
                          className: R().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, A.we)(
                            "#sale_three_section_show_streams",
                          ),
                        }),
                      }),
                    c &&
                      (0, s.jsxs)("div", {
                        className: R().chat_link,
                        children: [
                          (0, s.jsx)(Ye.ROZ, {}),
                          (0, s.jsx)("a", {
                            href: "#",
                            className: R().ChatToggle,
                            onClick: this.OnToggleChat,
                            children: (0, A.we)(
                              t
                                ? "#sale_three_section_show_chat"
                                : "#sale_three_section_hide_chat",
                            ),
                          }),
                        ],
                      }),
                    i &&
                      (0, s.jsxs)("div", {
                        className: R().chat_link,
                        children: [
                          (0, s.jsx)(Ye.SYj, {}),
                          (0, s.jsx)("a", {
                            href: "#",
                            className: R().ChatToggle,
                            onClick: (d) =>
                              (0, Vr.pg)(
                                (0, s.jsx)(dn, {
                                  steamid: this.props.stream.steamid,
                                }),
                                (0, fn.uX)(d),
                              ),
                            children: (0, A.we)("#Broadcast_ShareBroadcast"),
                          }),
                        ],
                      }),
                    (0, s.jsx)(Re.he, {
                      toolTipContent: (0, A.we)(
                        "#StoreBroadcast_Change_store_Broadcast_settings",
                      ),
                      children: (0, s.jsx)("a", {
                        href:
                          F.TS.STORE_BASE_URL +
                          "account/preferences/#store_broadcast_settings",
                        target: F.TS.IN_CLIENT ? void 0 : "_blank",
                        className: R().settings_link,
                        children: (0, s.jsx)(Ye.wB_, {}),
                      }),
                    }),
                    e && (0, s.jsx)(Bn, { ...this.props }),
                  ],
                }),
                !!this.props.chatAnnouncementGivewayGID &&
                  (0, s.jsx)(xs, {
                    gidGiveaway: this.props.chatAnnouncementGivewayGID,
                    stream: this.props.stream,
                  }),
              ],
            });
          }
        };
        _e([ve.oI], Ur.prototype, "OnToggleChat", 1),
          _e([ve.oI], Ur.prototype, "onWatchBroadcastPage", 1),
          (Ur = _e([S.PA], Ur));
        class zi extends _.Component {
          render() {
            let t = this.props.ImgUrl;
            return (0, s.jsxs)("div", {
              className: R().SidePanelBackground,
              children: [
                t &&
                  (0, s.jsx)("img", {
                    className: R().side_panels,
                    src: this.props.ImgUrl,
                  }),
                !t && (0, s.jsx)("div", { className: R().side_panels }),
              ],
            });
          }
        }
        const ji = (0, S.PA)((c) => {
          const { steamIDBroadcast: t } = c;
          let e = Ie.es.GetOrCreateBroadcastInfo(t).m_nAppID;
          e = e != Ie.fO ? e : 0;
          const i = (0, ii.$5)(e),
            { data: o } = (0, Br.J$)(i);
          return (0, s.jsxs)("div", {
            className: [R().PopOutVideoTitleBar, R().NoSeslect].join(" "),
            children: [
              o
                ? (0, s.jsx)($r.u, {
                    id: i,
                    className: R().PopOutVideoTitleText,
                    children: (0, A.we)("#StoreBroadcast_Detault_popout_Title"),
                  })
                : (0, s.jsx)("div", {
                    className: R().PopOutVideoTitleText,
                    children: (0, A.we)("#StoreBroadcast_Detault_popout_Title"),
                  }),
              (0, s.jsx)(Re.he, {
                toolTipContent: (0, A.we)(
                  "#StoreBroadcast_close_broadcast_popup",
                ),
                children: (0, s.jsx)("button", {
                  className: R().PopOutVideoCloseButton,
                  onClick: c.OnPreventPopup,
                  children: (0, s.jsx)(Ye.X, {}),
                }),
              }),
            ],
          });
        });
        function vn(c, t) {
          const e = Ie.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
            i = Yr.A.Get().GetApp(e),
            o = c && i?.GetAssets()?.GetHeaderURL();
          return parseInt(
            o
              ? R().strStreamIconCapsuleArtHeight
              : R().strStreamIconScreenshotArtHeight,
          );
        }
        function In(c) {
          const {
              curStream: t,
              onStreamSelect: e,
              fnFilterStreams: i,
              bShowCapsuleArt: o,
              broadcastEmbedContext: d,
            } = c,
            f = (0, _.useRef)(void 0),
            M = (0, _.useMemo)(() => {
              const D = xe
                .Get()
                .GetStreams(d)
                .filter((Q) => !i || i(Q));
              return qs(D), D;
            }, [d, i]);
          return (
            (0, _.useEffect)(() => {
              if (f && f.current) {
                const D = M.map(
                  (Q) => Ie.es.GetOrCreateBroadcastInfo(Q.steamid).m_nAppID,
                ).filter(Boolean);
                Yr.A.Get()
                  .QueueMultipleAppRequests(D, { include_assets: !0 })
                  .then(() => {
                    if (f.current) {
                      let Q = 0;
                      for (const Me of M) {
                        if (t.accountid == Me.accountid) break;
                        Q += vn(o, Me);
                      }
                      f.current.scrollTop = Q;
                    }
                  });
              }
            }, [M, o, t.accountid, f]),
            (0, s.jsx)("div", {
              ref: f,
              className: (0, yt.A)({
                [R().side_panels]: !0,
                side_panels: !0,
                [R().multistream]: !0,
                [R().scrollingstreams]: M.length > 3,
              }),
              children: (0, s.jsx)("div", {
                className: R().MultiStreamCtn,
                children: M.map((D) =>
                  (0, s.jsx)(
                    xn,
                    {
                      stream: D,
                      bSelected: t.accountid == D.accountid,
                      onStreamSelect: e,
                      bShowCapsuleArt: o,
                    },
                    D.accountid ?? D.steamid,
                  ),
                ),
              }),
            })
          );
        }
        function xn(c) {
          const {
            onStreamSelect: t,
            bSelected: e,
            stream: i,
            bShowCapsuleArt: o,
          } = c;
          let d = (0, Ut.q3)(
            () => Ie.es.GetOrCreateBroadcastInfo(i.steamid).m_nAppID,
          );
          d = d != Ie.fO ? d : 0;
          const f = (0, ii.$5)(d),
            { data: M } = (0, Br.J$)(f),
            { data: D } = (0, Br.lv)(f);
          if (!ni(i)) return null;
          const Q = o && D && (0, Ii.b0)(D, "header"),
            Me = Number.parseInt("" + i.viewer_count),
            Fe = !Number.isNaN(Me),
            Pe = !!i.nAppIDVOD && M?.name;
          return (0, s.jsxs)("div", {
            className: (0, yt.A)({
              [R().stream_icon_and_viewer_container]: !0,
              [R().stream_featured]:
                i.current_selection_priority == nr.mY.k_eFeatured,
              [R().display_capsule_art]: !!Q,
            }),
            children: [
              (0, s.jsx)($r.j, {
                id: f,
                hoverClassName: R().StreamCapsule,
                children: (0, s.jsx)(tn.K, {
                  className: (0, yt.A)(
                    R().stream_icon_container,
                    e && R().stream_selected,
                  ),
                  onClick: () => t && t(i),
                  rootMargin: "100px 0px 100px 0px",
                  children: (0, s.jsx)(On, {
                    strThumbnail: i.thumbnail_http_address,
                    bSelected: e,
                    strCapsuleArtURL: Q,
                  }),
                }),
              }),
              (0, s.jsx)("div", {
                className: (0, yt.A)(R().viewer_count, !Fe && R().vod_title),
                children: Fe
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(Ye.y_e, {}),
                        (0, s.jsx)("div", {
                          className: R().ViewerNum,
                          children: (0, xi.Dq)(Me),
                        }),
                      ],
                    })
                  : Pe,
              }),
            ],
          });
        }
        function On(c) {
          const { strCapsuleArtURL: t, strThumbnail: e, bSelected: i } = c,
            o = i ? R().stream_icon_selected : R().stream_icon;
          if (t) {
            const d = [t];
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("img", {
                  className: (0, yt.A)(o, R().stream_icon_hide_on_hover),
                  src: t,
                }),
                (0, s.jsx)(_s.o, {
                  className: (0, yt.A)(o, R().stream_icon_show_on_hover),
                  srcs: d,
                }),
              ],
            });
          } else return (0, s.jsx)("img", { className: o, src: e });
        }
        function zn(c) {
          const { stream: t, orientation: e } = c,
            i = e == "below",
            [o, d] = (0, Ut.q3)(() => [
              Ie.es.GetBroadcast(t.steamid),
              Ie.es.GetBroadcast(t.steamid)?.m_ulBroadcastID,
            ]),
            f = (0, Ut.q3)(() => t.steamid);
          return o
            ? (0, s.jsx)("div", {
                className: (0, yt.A)({
                  [R().chat_below_container]: i,
                  [R().chat_rightside_container]: !i,
                  [R().store_chat_ctn]: !0,
                }),
                children: (0, s.jsx)("div", {
                  className: R().ChatContainer,
                  children: (0, s.jsx)(lr, {
                    emoticonStore: Vs,
                    watchLocation: ct.nn.fe,
                    steamID: f,
                    broadcastID: d,
                  }),
                }),
              })
            : null;
        }
      },
      6600: (Ct, _t, g) => {
        "use strict";
        g.d(_t, { td: () => ct });
        var s = g(14947),
          ft = g(3166),
          v = Object.defineProperty,
          S = Object.getOwnPropertyDescriptor,
          Ut = (E, B, pt, Mt) => {
            for (
              var zt = Mt > 1 ? void 0 : Mt ? S(B, pt) : B, h = E.length - 1, a;
              h >= 0;
              h--
            )
              (a = E[h]) && (zt = (Mt ? a(B, pt, zt) : a(zt)) || zt);
            return Mt && zt && v(B, pt, zt), zt;
          };
        const _ = ft.TS.CHAT_BASE_URL + "public/images/broadcast/ti9_30x30.png",
          N = ft.TS.CHAT_BASE_URL + "public/images/broadcast/yule_30x30.png";
        class q {
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
          constructor(B) {
            (0, s.Gn)(this), this.init(B);
          }
          init(B) {
            (this.bValid = B.bValid),
              (this.stream = B.stream),
              (this.name = B.name),
              (this.appName = B.appName ?? ""),
              (this.appID = B.appID),
              (this.link = B.link),
              (this.linkName = B.linkName),
              (this.tabIcon = B.tabIcon ?? ""),
              (this.offlineImage = B.offlineImage),
              (this.gidEvent = B.gidEvent ?? "");
          }
        }
        Ut([s.sH], q.prototype, "bValid", 2),
          Ut([s.sH], q.prototype, "stream", 2),
          Ut([s.sH], q.prototype, "name", 2),
          Ut([s.sH], q.prototype, "appName", 2),
          Ut([s.sH], q.prototype, "appID", 2),
          Ut([s.sH], q.prototype, "link", 2),
          Ut([s.sH], q.prototype, "linkName", 2),
          Ut([s.sH], q.prototype, "tabIcon", 2),
          Ut([s.sH], q.prototype, "offlineImage", 2),
          Ut([s.sH], q.prototype, "gidEvent", 2);
        let ct = new q({
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
        function W(E) {
          (E == "76561198888084799" || E == "76561198910244427") &&
            ct.init({
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
            E == "76561197960266962" &&
              ct.init({
                bValid: !0,
                stream: {},
                appName: "Winter Sale 2019",
                name: "Yule Log",
                appID: 0,
                link: "https://store.steampowered.com/",
                linkName: "View Sale Info Here!",
                tabIcon: N,
                offlineImage: "public/images/broadcast/winter_sale_2019.png",
              });
        }
      },
      90828: (Ct, _t, g) => {
        "use strict";
        g.d(_t, { J8: () => v, X8: () => ft });
        var s = ((S) => (
            (S[(S.Hover = 0)] = "Hover"),
            (S[(S.ClickPopup = 1)] = "ClickPopup"),
            (S[(S.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion"),
            S
          ))(s || {}),
          ft = ((S) => (
            (S[(S.Chat = 0)] = "Chat"),
            (S[(S.Notification = 1)] = "Notification"),
            (S[(S.Error = 2)] = "Error"),
            S
          ))(ft || {});
        class v {}
      },
      73110: (Ct, _t, g) => {
        "use strict";
        g.r(_t),
          g.d(_t, {
            BroadcastDetails: () => Yt,
            LinkOverlay: () => We,
            default: () => lt,
          });
        var s = g(7850),
          ft = g(14947),
          v = g(75844),
          S = g(90626),
          Ut = g(16346),
          _ = g(41301),
          N = g(83482),
          q = g(74498),
          ct = g(10142),
          W = g(62510),
          E = g(99047),
          B = g(81115),
          pt = g(58584),
          Mt = g(59913),
          zt = g(42891),
          h = g(28679);
        function a(l, m) {
          var p = function (x) {
              return m && (0, S.isValidElement)(x) ? m(x) : x;
            },
            w = Object.create(null);
          return (
            l &&
              S.Children.map(l, function (y) {
                return y;
              }).forEach(function (y) {
                w[y.key] = p(y);
              }),
            w
          );
        }
        function r(l, m) {
          (l = l || {}), (m = m || {});
          function p(st) {
            return st in m ? m[st] : l[st];
          }
          var w = Object.create(null),
            y = [];
          for (var x in l)
            x in m ? y.length && ((w[x] = y), (y = [])) : y.push(x);
          var O,
            Z = {};
          for (var V in m) {
            if (w[V])
              for (O = 0; O < w[V].length; O++) {
                var et = w[V][O];
                Z[w[V][O]] = p(et);
              }
            Z[V] = p(V);
          }
          for (O = 0; O < y.length; O++) Z[y[O]] = p(y[O]);
          return Z;
        }
        function tt(l, m, p) {
          return p[m] != null ? p[m] : l.props[m];
        }
        function je(l, m) {
          return a(l.children, function (p) {
            return (0, S.cloneElement)(p, {
              onExited: m.bind(null, p),
              in: !0,
              appear: tt(p, "appear", l),
              enter: tt(p, "enter", l),
              exit: tt(p, "exit", l),
            });
          });
        }
        function Oe(l, m, p) {
          var w = a(l.children),
            y = r(m, w);
          return (
            Object.keys(y).forEach(function (x) {
              var O = y[x];
              if ((0, S.isValidElement)(O)) {
                var Z = x in m,
                  V = x in w,
                  et = m[x],
                  st = (0, S.isValidElement)(et) && !et.props.in;
                V && (!Z || st)
                  ? (y[x] = (0, S.cloneElement)(O, {
                      onExited: p.bind(null, O),
                      in: !0,
                      exit: tt(O, "exit", l),
                      enter: tt(O, "enter", l),
                    }))
                  : !V && Z && !st
                    ? (y[x] = (0, S.cloneElement)(O, { in: !1 }))
                    : V &&
                      Z &&
                      (0, S.isValidElement)(et) &&
                      (y[x] = (0, S.cloneElement)(O, {
                        onExited: p.bind(null, O),
                        in: et.props.in,
                        exit: tt(O, "exit", l),
                        enter: tt(O, "enter", l),
                      }));
              }
            }),
            y
          );
        }
        var Ue =
            Object.values ||
            function (l) {
              return Object.keys(l).map(function (m) {
                return l[m];
              });
            },
          nt = {
            component: "div",
            childFactory: function (m) {
              return m;
            },
          },
          jt = (function (l) {
            (0, zt.A)(m, l);
            function m(w, y) {
              var x;
              x = l.call(this, w, y) || this;
              var O = x.handleExited.bind((0, Mt.A)(x));
              return (
                (x.state = {
                  contextValue: { isMounting: !0 },
                  handleExited: O,
                  firstRender: !0,
                }),
                x
              );
            }
            var p = m.prototype;
            return (
              (p.componentDidMount = function () {
                (this.mounted = !0),
                  this.setState({ contextValue: { isMounting: !1 } });
              }),
              (p.componentWillUnmount = function () {
                this.mounted = !1;
              }),
              (m.getDerivedStateFromProps = function (y, x) {
                var O = x.children,
                  Z = x.handleExited,
                  V = x.firstRender;
                return {
                  children: V ? je(y, Z) : Oe(y, O, Z),
                  firstRender: !1,
                };
              }),
              (p.handleExited = function (y, x) {
                var O = a(this.props.children);
                y.key in O ||
                  (y.props.onExited && y.props.onExited(x),
                  this.mounted &&
                    this.setState(function (Z) {
                      var V = (0, pt.A)({}, Z.children);
                      return delete V[y.key], { children: V };
                    }));
              }),
              (p.render = function () {
                var y = this.props,
                  x = y.component,
                  O = y.childFactory,
                  Z = (0, B.A)(y, ["component", "childFactory"]),
                  V = this.state.contextValue,
                  et = Ue(this.state.children).map(O);
                return (
                  delete Z.appear,
                  delete Z.enter,
                  delete Z.exit,
                  x === null
                    ? S.createElement(h.A.Provider, { value: V }, et)
                    : S.createElement(
                        h.A.Provider,
                        { value: V },
                        S.createElement(x, Z, et),
                      )
                );
              }),
              m
            );
          })(S.Component);
        (jt.propTypes = {}), (jt.defaultProps = nt);
        const St = jt;
        var Jt = g(80724),
          kt = g(36707);
        const Bt = 500;
        class Rt extends S.Component {
          render() {
            let {
              keyExtractor: m,
              style: p,
              duration: w = Bt,
              className: y,
              children: x,
              childRef: O,
              ...Z
            } = this.props;
            const V = { ...(p || {}), transitionDuration: `${w / 1e3}s` };
            return (0, s.jsx)(St, {
              ...Z,
              className: (0, kt.A)("crossfade", y),
              children: (0, s.jsx)(
                Jt.A,
                {
                  nodeRef: O,
                  classNames: "crossfade-anim",
                  timeout: w,
                  style: V,
                  children: x,
                },
                m(),
              ),
            });
          }
        }
        function Zt(l) {
          const { src: m, ...p } = l,
            w = { backgroundImage: `url(${m})` },
            y = S.useRef(null);
          return (0, s.jsx)(Rt, {
            style: w,
            keyExtractor: () => m,
            childRef: y,
            ...p,
            children: (0, s.jsx)("div", { ref: y, className: "crossfade-img" }),
          });
        }
        var Qt = g(40232),
          Pt = g(16085),
          Tt = g(79167),
          rt = g(36118),
          L = g(53107),
          Dt = g(8323),
          vt = g(82734),
          k = g(18210),
          Lt = g(19730),
          bt = g(13854),
          H = g(54963),
          Et = g(3166),
          it = g(6600),
          C = g(48937),
          Ae = g(15527),
          Ht = g.n(Ae),
          Ee = g(85599),
          Xt = Object.defineProperty,
          Kt = Object.getOwnPropertyDescriptor,
          T = (l, m, p, w) => {
            for (
              var y = w > 1 ? void 0 : w ? Kt(m, p) : m, x = l.length - 1, O;
              x >= 0;
              x--
            )
              (O = l[x]) && (y = (w ? O(m, p, y) : O(y)) || y);
            return w && y && Xt(m, p, y), y;
          };
        function dt() {
          return (0, s.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, k.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const X = (0, v.PA)((l) => {
          let m = l.video;
          if (m && (m.IsBroadcastClip() || m.IsBroadcastVOD())) return null;
          let p = q.fK.Loading,
            w = "";
          if (m) {
            (p = m.GetBroadcastState()), (w = m.GetBroadcastStateDescription());
            let x = m.IsBuffering();
            p == q.fK.Unlocking && ((p = q.fK.Loading), (w = "")),
              p == q.fK.Ready && x && ((p = q.fK.Loading), (w = ""));
          }
          if (
            (m && p != q.fK.Error && m.GetUserInputNeeded()) ||
            p == q.fK.Ready
          )
            return null;
          let y = p == q.fK.Loading;
          return (0, s.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
            children: [
              y && (0, s.jsx)(Ee.t, {}),
              !y &&
                (0, s.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: w,
                }),
            ],
          });
        });
        class n extends S.Component {
          OnClick() {
            q.es.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, s.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, s.jsx)(rt.jGG, {}),
                (0, s.jsx)("span", {
                  children: (0, k.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        T([H.oI], n.prototype, "OnClick", 1);
        var u = Object.defineProperty,
          b = Object.getOwnPropertyDescriptor,
          I = (l, m, p, w) => {
            for (
              var y = w > 1 ? void 0 : w ? b(m, p) : m, x = l.length - 1, O;
              x >= 0;
              x--
            )
              (O = l[x]) && (y = (w ? O(m, p, y) : O(y)) || y);
            return w && y && u(m, p, y), y;
          };
        let z = class extends S.Component {
          constructor(l) {
            super(l);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let l = this.props.stats;
            return (0, s.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, s.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, s.jsx)(rt.sED, {}),
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, s.jsx)(P, { stats: l }),
              ],
            });
          }
        };
        I([H.oI], z.prototype, "HideStats", 1), (z = I([v.PA], z));
        let P = class extends S.Component {
          constructor(l) {
            super(l);
          }
          createBufferedRange(l) {
            let m = this.props.stats,
              p = [],
              w = l ? "vidbuf" : "audbuf",
              y = l
                ? m.GetNumBufferedVideoRanges()
                : m.GetNumBufferedAudioRanges();
            if (y > 0)
              for (let x = 0; x < y; ++x) {
                let O = (0, k.we)(
                    l
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    x,
                  ),
                  Z = l
                    ? m.GetBufferedVideoSegmentForDisplay(x)
                    : m.GetBufferedAudioSegmentForDisplay(x);
                p.push(
                  (0, s.jsxs)(
                    "div",
                    {
                      children: [
                        O,
                        " ",
                        (0, s.jsx)("span", {
                          className: "videoStatsValue",
                          children: Z,
                        }),
                      ],
                    },
                    w + x,
                  ),
                );
              }
            else {
              let x = (0, k.we)(
                l
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              p.push((0, s.jsx)("div", { children: x }, w + "none"));
            }
            return p;
          }
          render() {
            let l = this.props.stats;
            return (0, s.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, s.jsxs)("div", {
                    children: [
                      (0, k.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, s.jsx)("span", {
                        className: "videoStatsValue",
                        children: l.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, s.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [l.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, s.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [l.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        P = I([v.PA], P);
        var K = g(82581),
          at = Object.defineProperty,
          ut = Object.getOwnPropertyDescriptor,
          G = (l, m, p, w) => {
            for (
              var y = w > 1 ? void 0 : w ? ut(m, p) : m, x = l.length - 1, O;
              x >= 0;
              x--
            )
              (O = l[x]) && (y = (w ? O(m, p, y) : O(y)) || y);
            return w && y && at(m, p, y), y;
          };
        class ot extends S.Component {
          m_elSettingsButton;
          m_SettingsButtonPos;
          m_elClickListener = null;
          m_elSettingsPanel = null;
          m_elSubtitlesButton = S.createRef();
          m_elSubtitlesPanel = S.createRef();
          m_SubtitlesButtonPos;
          constructor(m) {
            super(m), (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
          }
          OnVideoControlClick(m) {
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                m.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnSubtitlesClick(m) {
            this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
              (this.m_SubtitlesButtonPos = [
                this.m_elSubtitlesButton.current?.offsetLeft,
                this.m_elSubtitlesButton.current?.offsetTop,
              ]),
              (this.m_elClickListener =
                m.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnMouseUp(m) {
            this.m_elClickListener?.removeEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            ),
              (0, vt.id)(this.m_elSettingsPanel, m.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, vt.id)(this.m_elSubtitlesPanel.current, m.target) ||
                this.setState({ bSubtitlesOpen: !1 });
          }
          bindSettingsButton(m) {
            this.m_elSettingsButton = m;
          }
          BindSettingsPanel(m) {
            this.m_elSettingsPanel = m;
          }
          OnShowStats(m) {
            this.props.onShowStats(m),
              this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
          }
          render() {
            let m = !1,
              p = !1;
            const { video: w, actions: y } = this.props;
            let x,
              O = [],
              Z = 0,
              V = (0, s.jsx)(
                "div",
                { className: "settingsMenuSeparator" },
                "separator",
              );
            const et = 260,
              st = 32;
            if (
              (this.state.bSettingsOpen &&
                ((m = !0),
                (x = this.props.video.GetVideoRepresentations()),
                (O = x.map((mt) =>
                  (0, s.jsx)(
                    K.n,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(mt),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: mt.selected,
                      children: mt.displayName,
                    },
                    mt.id,
                  ),
                )),
                O.push(V),
                O.push(
                  (0, s.jsxs)(
                    K.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, k.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (Z = 0 - (O.length * 21 + st))),
              this.state.bSubtitlesOpen)
            ) {
              (p = !0),
                (O = []),
                O.push(
                  (0, s.jsx)(
                    K.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, k.we)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let mt = 0;
                mt < this.props.video.ListSubtitles().length;
                mt++
              ) {
                const xt = this.props.video.ListSubtitles()[mt];
                O.push(
                  (0, s.jsx)(
                    K.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(xt.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: xt.mode === "showing",
                      children: xt.label,
                    },
                    xt.language,
                  ),
                );
              }
              Z = 0 - (et + st);
            }
            const Se =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, s.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                Se &&
                  (0, s.jsx)("div", {
                    className:
                      "videoControlButton" +
                      (Se ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, s.jsx)(rt.N8C, {}),
                  }),
                (0, s.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (m ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, s.jsx)(rt.wB_, {}),
                }),
                (0, s.jsx)(ht, { video: w }),
                y &&
                  y.map((mt) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: mt,
                      },
                      mt.key,
                    ),
                  ),
                m &&
                  (0, s.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: Z,
                    },
                    children: (0, s.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: O,
                    }),
                  }),
                p &&
                  (0, s.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: et + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: Z,
                    },
                    children: (0, s.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: O,
                    }),
                  }),
              ],
            });
          }
        }
        G([H.oI], ot.prototype, "OnVideoControlClick", 1),
          G([H.oI], ot.prototype, "OnSubtitlesClick", 1),
          G([H.oI], ot.prototype, "OnMouseUp", 1),
          G([H.oI], ot.prototype, "bindSettingsButton", 1),
          G([H.oI], ot.prototype, "BindSettingsPanel", 1),
          G([H.oI], ot.prototype, "OnShowStats", 1);
        const wt = !0;
        let ht = class extends S.Component {
          constructor(l) {
            super(l), (0, ft.Gn)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = wt;
          m_schHideSlider = new Dt.LU();
          m_bChildDragging = !1;
          m_bMouseOver = !1;
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let l = this.props.video,
              m = l.IsMuted();
            l.SetMute(!m), l.GetVolume() < 0.01 && l.SetVolume(0.5);
          }
          OnMouseEnter(l) {
            (this.m_bShowSlider = !0),
              (this.m_bMouseOver = !0),
              this.m_schHideSlider.Cancel();
          }
          OnMouseLeave(l) {
            (this.m_bMouseOver = !1), this.ScheduleHide();
          }
          OnChildDrag(l) {
            (this.m_bChildDragging = l), this.ScheduleHide();
          }
          ScheduleHide() {
            this.m_bMouseOver ||
              this.m_bChildDragging ||
              this.m_schHideSlider.Schedule(
                this.k_nHideSliderTimeout,
                () => (this.m_bShowSlider = wt),
              );
          }
          render() {
            let l = this.props.video,
              m = l.IsMuted(),
              p = l.GetVolume() * 100,
              w = "videoControlButton";
            p > 65
              ? (w += " HighestVolume")
              : p > 45
                ? (w += " HighVolume")
                : p < 46 && p > 24
                  ? (w += " MedVolume")
                  : p < 25 && (w += " LowVolume");
            let y = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (y += " ShowVolumeSlider"),
              m && (y += " muted"),
              (0, s.jsx)("div", {
                className: y,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, s.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, s.jsx)("div", {
                      className: w,
                      onClick: this.ToggleMute,
                      children: (0, s.jsx)(rt.fSs, {}),
                    }),
                    (0, s.jsx)(It, { video: l, onDrag: this.OnChildDrag }),
                  ],
                }),
              })
            );
          }
        };
        G([ft.sH], ht.prototype, "m_bShowSlider", 2),
          G([H.oI], ht.prototype, "ToggleMute", 1),
          G([H.oI], ht.prototype, "OnMouseEnter", 1),
          G([H.oI], ht.prototype, "OnMouseLeave", 1),
          G([H.oI], ht.prototype, "OnChildDrag", 1),
          (ht = G([v.PA], ht));
        let It = class extends S.Component {
          constructor(l) {
            super(l), (0, ft.Gn)(this);
          }
          m_elSlider = null;
          m_nVolumeStartOfDrag = 0;
          OnMouseDown(l) {
            let m = l.currentTarget;
            (this.m_elSlider = m),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(m, l.clientX),
              m.ownerDocument.defaultView?.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              m.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.props.onDrag(!0);
          }
          OnMouseMove(l) {
            this.m_elSlider &&
              this.SetVolumeWithCoord(this.m_elSlider, l.clientX);
          }
          OnMouseUp(l) {
            if (!this.m_elSlider) return;
            this.SetVolumeWithCoord(this.m_elSlider, l.clientX);
            let m = this.props.video;
            m.IsMuted() && m.SetVolume(this.m_nVolumeStartOfDrag),
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
          SetVolumeWithCoord(l, m) {
            let p = l.getBoundingClientRect(),
              w = bt.Fu(m, p.left, p.right, 0, 1),
              y = bt.OQ(w, 0, 1),
              x = this.props.video;
            x.SetMute(w < 0.01), x.SetVolume(y);
          }
          render() {
            let l = this.props.video,
              m = l.GetVolume() * 100;
            l.IsMuted() && (m = 0);
            let w = { left: `${m}%` },
              y = { width: `${m}%` };
            return (0, s.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, s.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
                (0, s.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: y,
                }),
                (0, s.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: w,
                }),
              ],
            });
          }
        };
        G([H.oI], It.prototype, "OnMouseDown", 1),
          G([H.oI], It.prototype, "OnMouseMove", 1),
          G([H.oI], It.prototype, "OnMouseUp", 1),
          G([ft.XI], It.prototype, "SetVolumeWithCoord", 1),
          (It = G([v.PA], It));
        var Qe = g(43434),
          ae = Object.defineProperty,
          oe = Object.getOwnPropertyDescriptor,
          U = (l, m, p, w) => {
            for (
              var y = w > 1 ? void 0 : w ? oe(m, p) : m, x = l.length - 1, O;
              x >= 0;
              x--
            )
              (O = l[x]) && (y = (w ? O(m, p, y) : O(y)) || y);
            return w && y && ae(m, p, y), y;
          };
        const Ke = 3200,
          Ft = 15;
        let lt = class extends S.Component {
          m_schHideControls = new Dt.LU();
          m_schUnmountControls = new Dt.LU();
          m_elVideo = null;
          m_elBroadcastPlayer = null;
          m_bMouseDown = !1;
          m_elMouseDown = null;
          m_listeners = new Dt.Ji();
          constructor(l) {
            super(l),
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
            let l = this.state.video;
            l &&
              (q.es.StopVideo(l),
              this.setState({ video: null }),
              this.props.fnSetBroadcastVideo?.(null));
          }
          IsMuted() {
            let l = this.state.video;
            return !l || l.IsMuted();
          }
          StopPlaybackTillUserInput() {
            let l = this.state.video;
            l && l.StopPlaybackTillUserInput();
          }
          componentDidUpdate(l, m) {
            !m.bMountControls && this.state.bMountControls
              ? setTimeout(() => {
                  this.setState((w) => ({
                    bControlsVisible: w.bMountControls,
                  }));
                }, 15)
              : m.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== l.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const p = this.props.nAppIDVOD;
            p &&
              (m.strInitialCapsuleImageUrl === void 0 || l.nAppIDVOD != p) &&
              ct.A.Get()
                .QueueAppRequest(p, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const y =
                    ct.A.Get().GetApp(p)?.GetAssets()?.GetMainCapsuleURL() ||
                    "";
                  this.setState({ strInitialCapsuleImageUrl: y });
                });
          }
          componentWillUnmount() {
            this.m_listeners.Unregister(),
              this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.StopVideo();
          }
          BindBroadcastPlayerRef(l) {
            this.m_listeners.Unregister(),
              (this.m_elBroadcastPlayer = l),
              l &&
                (this.m_listeners.AddEventListener(
                  l,
                  "fullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  l,
                  "mozfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  l,
                  "webkitfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  l,
                  "msfullscreenchange",
                  this.OnFullscreenChange,
                ));
          }
          BindVideoRef(l) {
            let m = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? l &&
                  (m = q.es.CreateBroadcastVideo(
                    l,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? l &&
                    (m = q.es.CreateClipVideo(
                      l,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    l &&
                    ((m = q.es.CreateVODVideo(
                      l,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      m.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              m &&
                (this.props.bStartMuted && m.SetMute(!0),
                this.props.bStartWithSubtitles && m.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? m.StopPlaybackTillUserInput()
                  : m.Play()),
              this.setState({ video: m }),
              this.props.fnSetBroadcastVideo?.(m),
              (this.m_elVideo = l);
          }
          OnMouseDown(l) {
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = l.currentTarget),
              this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
          OnMouseUp(l) {
            (this.m_bMouseDown = !1),
              this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.m_schHideControls.Schedule(Ke, this.HideControls);
          }
          OnMouseMove(l) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({ bControlsVisible: !0 })
                : this.setState({ bMountControls: !0 }),
              this.m_schHideControls.Schedule(Ke, this.HideControls);
          }
          OnMouseLeave(l) {
            this.HideControls();
          }
          HideControls() {
            this.state.bControlsVisible &&
              !this.m_bMouseDown &&
              this.setState({ bControlsVisible: !1 });
          }
          UmountControls() {
            this.setState((l) =>
              !l.bControlsVisible && l.bMountControls
                ? { bMountControls: !1 }
                : null,
            );
          }
          ShowStatsView() {
            let l = this.state.video;
            if (!l) return;
            this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), l.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(l) {
            this.state.bFullscreen ||
              ((0, Ut.lX)(
                (0, s.jsx)(E.tz, { children: this.GetContextMenuItems() }),
                l,
              ),
              l.preventDefault());
          }
          ToggleStatsView(l) {
            let m = !this.state.bShowStats;
            this.setState({ bShowStats: m });
            let p = this.state.video;
            p && p.SetStatsViewIsVisible(m);
          }
          ShowStorePage(l) {
            let m = this.state.video;
            if (!m || !this.props.onOpenLinkInNewWindow) return;
            let p = m.GetBroadcastInfo();
            if (!p) return;
            let w = (0, N.k2)(`${Et.TS.STORE_BASE_URL}app/${p.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(l, w), l.stopPropagation();
          }
          GetContextMenuItems() {
            let l = [],
              m = this.state.video;
            if (!m) return l;
            let p = m.GetBroadcastInfo();
            return (
              l.push(
                (0, s.jsx)(
                  E.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (w) => {
                      this.ToggleStatsView(w);
                    },
                    children: (0, k.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              p &&
                p.m_strAppId != "0" &&
                Number.parseInt(p.m_strAppId) != q.fO &&
                l.push(
                  (0, s.jsx)(
                    E.kt,
                    {
                      onSelected: (w) => {
                        this.ShowStorePage(w);
                      },
                      children: (0, k.we)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
                  ),
                ),
              l
            );
          }
          CloseStats() {
            let l = this.state.video;
            l &&
              this.state.bShowStats &&
              (this.setState({ bShowStats: !1 }), l.SetStatsViewIsVisible(!1));
          }
          OnToggleFullscreen() {
            this.m_elBroadcastPlayer &&
              ((0, vt.ww)(this.m_elBroadcastPlayer)
                ? (0, vt.MS)(this.m_elBroadcastPlayer)
                : (0, vt.tl)(
                    this.m_elBroadcastPlayer,
                    this.m_elVideo ?? void 0,
                  ));
          }
          OnFullscreenChange(l) {
            if (!this.m_elBroadcastPlayer) return;
            let m = (0, vt.ww)(this.m_elBroadcastPlayer);
            this.setState({ bFullscreen: m });
          }
          BHideVideoControls() {
            let l = this.state.video;
            return !l || l.GetUserInputNeeded()
              ? !0
              : q.es.GetBroadcastState(l) == q.fK.Error;
          }
          render() {
            const l = this.state.video,
              m = l && l.IsPaused(),
              p = l && l.BHasDASHStats() && this.state.bShowStats,
              w = !!(l && l.IsReplay()),
              y = this.state.bMountControls,
              x = this.state.bControlsVisible || m,
              O = !!(l && l.GetUserInputNeeded()),
              Z = l?.GetDASHPlayerStats(),
              V =
                l?.IsBroadcastVOD() &&
                O &&
                this.state.strInitialCapsuleImageUrl;
            let et = "videoContainer";
            x || (et += " HidePlayerControls"),
              m && (et += " VideoPaused"),
              this.state.bFullscreen && (et += " fullscreenVideo"),
              this.props.classes && (et += " " + this.props.classes);
            let st = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (st = st.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                st.push(
                  (0, s.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, k.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              st.push(
                (0, s.jsx)(
                  "div",
                  {
                    title: (0, k.we)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const Nt = y && !this.BHideVideoControls(),
              Se = y && !this.state.bFullscreen,
              mt =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, s.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: et,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                mt &&
                  (0, s.jsx)("div", {
                    className: Ht().BroadcastContext,
                    children: mt,
                  }),
                w && (0, s.jsx)(dt, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, s.jsx)(W.m, {
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
                  ? (0, s.jsx)(We, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                V &&
                  (0, s.jsx)("img", {
                    loading: "lazy",
                    className: (0, kt.A)(
                      Ht().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                Nt &&
                  l &&
                  (0, s.jsx)(Gt, {
                    video: l,
                    actions: st,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                Se && (0, s.jsx)(le, { onClick: this.props.onRequestClose }),
                p &&
                  Z &&
                  (0, s.jsx)(z, { stats: Z, closeStats: this.CloseStats }),
                (0, s.jsx)(X, { video: l }),
                O && l && (0, s.jsx)(n, { video: l }),
              ],
            });
          }
        };
        U([H.oI], lt.prototype, "BindBroadcastPlayerRef", 1),
          U([H.oI], lt.prototype, "BindVideoRef", 1),
          U([H.oI], lt.prototype, "OnMouseDown", 1),
          U([H.oI], lt.prototype, "OnMouseUp", 1),
          U([H.oI], lt.prototype, "OnMouseMove", 1),
          U([H.oI], lt.prototype, "OnMouseLeave", 1),
          U([H.oI], lt.prototype, "HideControls", 1),
          U([H.oI], lt.prototype, "UmountControls", 1),
          U([H.oI], lt.prototype, "ShowStatsView", 1),
          U([H.oI], lt.prototype, "OnContextMenu", 1),
          U([H.oI], lt.prototype, "ToggleStatsView", 1),
          U([H.oI], lt.prototype, "ShowStorePage", 1),
          U([H.oI], lt.prototype, "CloseStats", 1),
          U([H.oI], lt.prototype, "OnToggleFullscreen", 1),
          U([H.oI], lt.prototype, "OnFullscreenChange", 1),
          (lt = U([v.PA], lt));
        let Gt = class extends S.Component {
          render() {
            const { video: l } = this.props;
            if (!l) return null;
            let m = l.has_segments;
            return (0, s.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, s.jsx)(Yt, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, s.jsxs)("div", {
                  className: "videoControlsBottom" + (m ? "" : " noSegments"),
                  children: [
                    (0, s.jsx)(Be, {
                      video: l,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, s.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, s.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, s.jsx)(ke, { video: l }),
                        (0, s.jsx)(ce, { video: l }),
                        (0, s.jsx)(ot, {
                          video: l,
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
        Gt = U([v.PA], Gt);
        class le extends S.PureComponent {
          render() {
            return this.props.onClick
              ? (0, s.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, s.jsx)(rt.sED, {}),
                })
              : null;
          }
        }
        class ke extends S.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-Ft);
          }
          OnJumpForward() {
            this.props.video.JumpTime(Ft);
          }
          render() {
            let m = this.props.video,
              p = m.CanSeek();
            return (0, s.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, s.jsx)(Wt, { video: m }),
                p &&
                  (0, s.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, s.jsx)(rt.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, s.jsx)("div", {
                        className: "jumpAheadValue",
                        children: Ft,
                      }),
                    ],
                  }),
                (0, s.jsx)($t, { video: m }),
                p &&
                  (0, s.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, s.jsx)(rt.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: "jumpAheadValue",
                        children: Ft,
                      }),
                    ],
                  }),
                p && (0, s.jsx)(At, { video: m }),
              ],
            });
          }
        }
        U([H.oI], ke.prototype, "OnJumpBackward", 1),
          U([H.oI], ke.prototype, "OnJumpForward", 1);
        const ce = (0, v.PA)((l) => {
          if (l.video.IsBroadcastClip() || l.video.IsBroadcastVOD())
            return null;
          const m = (w) => {
            l.video.JumpToLiveEdge();
          };
          let p = l.video.IsOnLiveEdge();
          return (0, s.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, s.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (p ? " isLiveEdge" : ""),
              onClick: p ? void 0 : m,
              children: [
                (0, s.jsx)(rt.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, s.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, k.we)(
                    p
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let $t = class extends S.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let m = this.props.video.IsPaused();
            return (0, s.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: m ? (0, s.jsx)(rt.jGG, {}) : (0, s.jsx)(rt.vRz, {}),
            });
          }
        };
        U([H.oI], $t.prototype, "OnTogglePlayPause", 1), ($t = U([v.PA], $t));
        let Wt = class extends S.Component {
          constructor(l) {
            super(l), (0, ft.Gn)(this), (this.video = l.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const l = this.video;
            if (!l?.has_markers) return;
            let m = l.GetTimelineMarkers(),
              p = l.GetPlaybackTime();
            for (let w = m.length - 1; w >= 0; w--)
              if (!(m[w].nTime >= p)) return m[w].nTime;
          }
          OnJumpToPreviousMarkerClicked(l) {
            let m = this.GetPreviousMarkerTime();
            m !== void 0 && this.props.video.Seek(m - 0.2);
          }
          render() {
            let l = this.props.video.BHasMarkersOrSegments();
            return (0, s.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (l ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, s.jsx)(rt.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        U([ft.sH], Wt.prototype, "video", 2),
          U([ft.EW], Wt.prototype, "has_previous_marker", 1),
          U([H.oI], Wt.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (Wt = U([v.PA], Wt));
        let At = class extends S.Component {
          constructor(l) {
            super(l), (0, ft.Gn)(this), (this.video = l.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const l = this.video;
            if (!l?.has_markers) return;
            let m = l.GetTimelineMarkers(),
              p = l.GetPlaybackTime();
            for (let w = 0; w < m.length; w++)
              if (!(m[w].nTime <= p)) return m[w].nTime;
          }
          OnJumpToNextMarkerClicked(l) {
            let m = this.GetNextMarkerTime();
            m !== void 0 && this.props.video.Seek(m);
          }
          render() {
            let l = this.props.video.BHasMarkersOrSegments();
            return (0, s.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (l ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, s.jsx)(rt.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        U([ft.sH], At.prototype, "video", 2),
          U([ft.EW], At.prototype, "has_next_marker", 1),
          U([H.oI], At.prototype, "OnJumpToNextMarkerClicked", 1),
          (At = U([v.PA], At));
        const qt = (l) => {
          let m = () => l.onMouseEnter(l.pos);
          return (0, s.jsx)("div", {
            className: "timelineMarker",
            title: l.label,
            style: { left: l.pos + "%" },
            onMouseEnter: m,
            onMouseLeave: l.onMouseLeave,
            onMouseDown: l.onMouseDown ? l.onMouseDown : void 0,
            children: (0, s.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, s.jsx)(rt.Dp6, {}),
            }),
          });
        };
        function de(l) {
          let m = l.startPos,
            p = l.endPos,
            w = "",
            y = 1;
          return (
            m < 0 && ((y = (p - m) / 10), (m = 0), (w = " hideFront")),
            (0, s.jsxs)("div", {
              className: "STV_timelineSegment" + w,
              style: { left: m + "%", width: p - m + "%", opacity: y },
              onClick: l.onClick,
              children: [
                (0, s.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: { borderColor: "rgb(" + l.color + ")" },
                }),
                (0, s.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: { color: "rgb(" + l.color + ")" },
                  children: l.label,
                }),
                (0, s.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: { borderColor: "rgb(" + l.color + ")" },
                }),
              ],
            })
          );
        }
        let Be = class extends S.Component {
          m_elSlider = S.createRef();
          m_rectSlider = void 0;
          constructor(l) {
            super(l),
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
          OnMouseDown(l, m) {
            const p = this.m_elSlider.current;
            if (p) {
              l.persist(), (this.m_rectSlider = p.getBoundingClientRect());
              let w = {};
              m === "start"
                ? ((w = { bStartMouseDown: !0 }), l.stopPropagation())
                : m === "end"
                  ? ((w = { bEndMouseDown: !0 }), l.stopPropagation())
                  : (w = { bGrabberMouseDown: !0 }),
                this.setState(w, () => this.AdjustSliderForClientX(l.clientX)),
                p.ownerDocument.defaultView?.addEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                p.ownerDocument.defaultView?.addEventListener(
                  "mouseup",
                  this.OnMouseUp,
                );
            }
          }
          OnMouseMove(l) {
            this.AdjustSliderForClientX(l.clientX);
          }
          OnMouseUp(l) {
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
          OnKeyDown(l) {
            l.keyCode == _.ek
              ? (this.props.video.JumpTime(-1 * Ft), l.preventDefault())
              : l.keyCode == _.JI &&
                (this.props.video.JumpTime(1 * Ft), l.preventDefault());
          }
          AdjustSliderForClientX(l) {
            const m = this.m_rectSlider;
            if (!m) return;
            let p = this.props.video,
              w = p.GetTimelineStartPos(),
              y = p.GetTimelineStartPos() + p.GetTimelineDuration(),
              x = p.GetTimeAtMousePosition(l, m, w, y);
            const O = 5;
            if (this.state.bStartMouseDown) {
              const Z = bt.OQ(x, w, p.m_editorEndTime - O);
              p.m_editorStartTime = Z;
            } else if (this.state.bEndMouseDown) {
              const Z = bt.OQ(x, p.m_editorStartTime + O, y);
              p.m_editorEndTime = Z;
            } else
              x != this.state.nGrabberMouseDownTime &&
                this.setState({ nGrabberMouseDownTime: x });
          }
          OnMouseHoverMove(l) {
            this.AdjustHoverForClientX(l.clientX);
          }
          OnMouseHoverLeave(l) {
            this.setState({ hoverX: 0 });
          }
          AdjustHoverForClientX(l) {
            let m = this.props.video,
              p = m.GetTimelineStartPos(),
              w = m.GetTimelineStartPos() + m.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let y =
              this.m_rectSlider &&
              m.GetTimeAtMousePosition(l, this.m_rectSlider, p, w);
          }
          OnSegmentClick(l) {
            this.props.video.Seek(l);
          }
          OnMarkerMouseEnter(l) {
            this.setState({ nHoverValue: l });
          }
          OnMarkerMouseLeave() {
            this.setState({ nHoverValue: void 0 });
          }
          render() {
            let l = this.props.video,
              m = this.state.bGrabberMouseDown,
              p = l.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                q.a0.Timeline,
              ),
              w = l.GetPercentOffsetFromTime(
                l.GetPlaybackTime(),
                q.a0.Timeline,
              ),
              y = l.GetPercentOffsetFromTime(
                l.GetVideoAvailableStartTime(),
                q.a0.Timeline,
              );
            y < 0.05 && (y = 0);
            let x = bt.OQ(p, 0, 100).toFixed(1) + "%",
              O = bt.OQ(w, 0, 100).toFixed(1) + "%",
              Z = bt.OQ(y, 0, 100).toFixed(1) + "%",
              V = {},
              et = {},
              st = {},
              Nt = {};
            m
              ? ((Nt.left = x), (V.width = x), (et.width = O), (st.width = Z))
              : ((Nt.left = O), (et.width = O), (st.width = Z));
            let Se = (0, C.ap)(l.GetPlaybackTime()),
              mt = (0, C.ap)(this.state.nHoverValue ?? 0),
              xt = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (xt += " grabberDown"),
              l.IsTimelineMapActive() && (xt += " minimapActive");
            let Vt = "";
            (p = m ? p : w),
              p > 100
                ? (Vt = " grabberOffScreenRight grabberOffscreen")
                : p < 0 && (Vt = " grabberOffScreenLeft grabberOffscreen");
            let ee = [];
            l.GetTimelineMarkers().forEach((De, dr) => {
              let A = l.GetPercentOffsetFromTime(De.nTime, q.a0.Timeline);
              A < 0 ||
                A > 100 ||
                ee.push(
                  (0, s.jsx)(
                    qt,
                    {
                      pos: A,
                      label: De.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    dr,
                  ),
                );
            });
            let re = [];
            l.GetTimelineSegments().forEach((De, dr) => {
              let A = l.GetPercentOffsetFromTime(De.nTimeStart, q.a0.Timeline);
              if (A > 100) return;
              let F = l.GetPercentOffsetFromTime(De.nTimeEnd, q.a0.Timeline);
              F < 0 ||
                re.push(
                  (0, s.jsx)(
                    de,
                    {
                      startPos: A,
                      endPos: F,
                      label: De.strTemplateName,
                      color: De.color,
                      onClick: (Zr) => this.OnSegmentClick(De.nTimeStart),
                    },
                    dr,
                  ),
                );
            });
            const ue = l.GetPercentOffsetFromTime(
                l.m_editorStartTime,
                q.a0.Timeline,
              ),
              me = l.GetPercentOffsetFromTime(l.m_editorEndTime, q.a0.Timeline),
              cr = this.props.bIncludeClipEditor
                ? [
                    (0, s.jsx)(
                      qt,
                      {
                        pos: ue,
                        label: (0, k.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (De) => this.OnMouseDown(De, "start"),
                      },
                      "start",
                    ),
                    (0, s.jsx)(
                      qt,
                      {
                        pos: me,
                        label: (0, k.we)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (De) => this.OnMouseDown(De, "end"),
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
                className: xt,
                children: [
                  (0, s.jsx)("div", { className: "DialogLabel", children: Se }),
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
                          style: V,
                        }),
                        (0, s.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: et,
                        }),
                        (0, s.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: st,
                        }),
                        ee,
                        cr,
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
                                    children: mt,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, s.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: Nt,
                          children: (0, s.jsx)("div", {
                            className: "STV_timelineGrabber" + Vt,
                            children: (0, s.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, s.jsx)(rt.apU, {}),
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
        U([H.oI], Be.prototype, "OnMouseDown", 1),
          U([H.oI], Be.prototype, "OnMouseMove", 1),
          U([H.oI], Be.prototype, "OnMouseUp", 1),
          U([H.oI], Be.prototype, "OnKeyDown", 1),
          U([H.oI], Be.prototype, "OnMouseHoverMove", 1),
          U([H.oI], Be.prototype, "OnMouseHoverLeave", 1),
          U([H.oI], Be.prototype, "AdjustHoverForClientX", 1),
          U([H.oI], Be.prototype, "OnSegmentClick", 1),
          U([H.oI], Be.prototype, "OnMarkerMouseEnter", 1),
          U([H.oI], Be.prototype, "OnMarkerMouseLeave", 1),
          (Be = U([v.PA], Be));
        let Yt = class extends S.Component {
          state = { info: null };
          static getDerivedStateFromProps(l, m) {
            return (!m.info || m.info.m_steamIDBroadcast !== l.steamID) &&
              (m.info && (q.es.StopInfo(m.info), (m.info = null)), l.steamID)
              ? { info: q.es.StartInfo(l.steamID) }
              : null;
          }
          componentWillUnmount() {
            this.state.info && q.es.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const l = this.props.steamID,
              m = this.props.onLocalStreamChange;
            return m && it.td.stream[l]
              ? (0, s.jsx)(te, { value: l, options: it.td.stream, onChange: m })
              : null;
          }
          render() {
            let { info: l } = this.state;
            if (!l) return null;
            let m = "";
            l.m_nViewerCount && (m = (0, Lt.Dq)(l.m_nViewerCount));
            let p =
                it.td.bValid &&
                it.td.stream &&
                it.td.stream[l.m_steamIDBroadcast],
              w =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(l.m_strAppId) > 0 || p);
            const y =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              p &&
              it.td.gidEvent;
            return (0, s.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, s.jsx)(Zt, {
                    className: "broadcastDetailsThumbBlur",
                    src: l.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, s.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    l &&
                      l.m_strAppTitle &&
                      (0, s.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, s.jsx)("span", {
                                className: "AppTitle",
                                children: l.m_strAppTitle,
                              }),
                              l.m_strTitle &&
                                (0, s.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", l.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          m &&
                            (0, s.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, s.jsx)(rt.y_e, {}),
                                (0, k.Yp)("#Broadcast_ViewerCount", m),
                              ],
                            }),
                        ],
                      }),
                    p &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, s.jsx)("div", {
                        className: "Actions",
                        children: (0, s.jsx)("div", {
                          onClick: (x) =>
                            this.props.onOpenLinkInNewWindow?.(x, it.td.link),
                          className: "BroadcastLink",
                          children: it.td.linkName,
                        }),
                      }),
                  ],
                }),
                y && (0, s.jsx)(Pt.m, { gidEvent: it.td.gidEvent }),
                w &&
                  (0, s.jsx)(Qt.p, {
                    id:
                      it.td.bValid &&
                      it.td.stream &&
                      it.td.stream[l.m_steamIDBroadcast]
                        ? it.td.appID
                        : parseInt(l.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        Yt = U([v.PA], Yt);
        class te extends S.Component {
          showContextMenu(m) {
            const { options: p, value: w, onChange: y } = this.props,
              x = Object.keys(p).map((O) =>
                (0, s.jsx)(
                  E.IK,
                  {
                    onSelected: () => y(O),
                    bChecked: O === w,
                    children: (0, k.we)(p[O]),
                  },
                  O,
                ),
              );
            (0, Ut.lX)((0, s.jsx)(E.tz, { children: x }), m);
          }
          render() {
            const { value: m, options: p } = this.props,
              w = p[m];
            return (0, s.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, s.jsxs)("span", { children: ["\xA0- ", (0, k.we)(w)] }),
                (0, s.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, s.jsx)(rt.GB9, {}),
                }),
              ],
            });
          }
        }
        U([H.oI], te.prototype, "showContextMenu", 1);
        let We = class extends S.Component {
          constructor(l) {
            super(l), (this.state = { sizableRegion: [] });
          }
          async AddLinkRegion() {
            let l = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + l,
              yPosPct: 2.5 + l,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          componentDidUpdate(l) {
            l.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((m, p) => {
                this.LoadLinkRegion(m, p);
              });
          }
          async LoadLinkRegion(l, m) {
            let p = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: l.left,
              yPosPct: l.top,
              widthPct: l.width,
              heightPct: l.height,
              link_url: l.url,
              link_description: l.link_description,
              link_index: l.link_index,
            }),
              await this.setState({ sizableRegion: this.state.sizableRegion });
          }
          OnSaveRegions() {
            let l;
            l = { links: [] };
            for (let m = 0; m < this.state.sizableRegion.length; m++) {
              let p;
              (p = {
                left: Math.floor(this.state.sizableRegion[m].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[m].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[m].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[m].heightPct * 100),
                url: this.state.sizableRegion[m].link_url,
                link_description: this.state.sizableRegion[m].link_description,
                link_index: m,
              }),
                l.links.push(p);
            }
            this.props.onSaveLinkRegions?.(l);
          }
          async DeleteRegion(l) {
            this.state.sizableRegion.splice(l, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          async UpdatePanel(l, m) {
            const p = [...this.state.sizableRegion];
            (p[l] = m),
              this.setState({ sizableRegion: p }, () => this.OnSaveRegions());
          }
          render() {
            return (0, s.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, s.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((l) => {
                          const m = (0, Qe.p)(l.url);
                          return (0, s.jsx)(
                            L.uU,
                            {
                              href: l.url,
                              bForceExternal: m,
                              bUseLinkFilter: m,
                              children: (0, s.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: l.left + "%",
                                  top: l.top + "%",
                                  width: l.width + "%",
                                  height: l.height + "%",
                                },
                                children: (0, s.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [l.link_description, " "],
                                }),
                              }),
                            },
                            l.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((l, m) =>
                        (0, s.jsx)(
                          Tt.I,
                          {
                            index: m,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: l.xPosPct,
                            yPosPct: l.yPosPct,
                            widthPct: l.widthPct,
                            heightPct: l.heightPct,
                            link_url: l.link_url,
                            link_description: l.link_description,
                          },
                          m * 100 + l.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, s.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, k.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, s.jsx)("div", {
                    children: (0, k.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        U([H.oI], We.prototype, "AddLinkRegion", 1),
          U([H.oI], We.prototype, "LoadLinkRegion", 1),
          U([H.oI], We.prototype, "OnSaveRegions", 1),
          U([H.oI], We.prototype, "DeleteRegion", 1),
          U([H.oI], We.prototype, "UpdatePanel", 1),
          (We = U([v.PA], We));
      },
      74498: (Ct, _t, g) => {
        "use strict";
        g.d(_t, { es: () => dt, fK: () => bt, a0: () => Kt, fO: () => Lt });
        var s = g(41735),
          ft = g.n(s),
          v = g(14947),
          S = g(6600),
          Ut = g(90828);
        function _(X, n, u) {
          return [X, n, u];
        }
        class N extends Error {}
        class q extends Ut.J8 {
          m_appid;
          constructor(n) {
            super(), (this.m_appid = n || 0);
          }
          GetAppID() {
            return this.m_appid;
          }
          parseColor(n) {
            if (typeof n != "string" || !n.match(/^#[0-9a-fA-F]{6}$/))
              throw new N("expected color string");
            return [
              parseInt(n.substring(1, 3), 16),
              parseInt(n.substring(3, 5), 16),
              parseInt(n.substring(5, 7), 16),
            ];
          }
          parseString(n) {
            if (typeof n == "string") return n;
            throw new N("expected string");
          }
          parseNumber(n) {
            if (typeof n == "number") return n;
            throw new N("expected number");
          }
          parseDate(n) {
            if (typeof n == "number") return new Date(n);
            throw new N("expected timestamp");
          }
          parseArray(n, u) {
            let b = [];
            if (typeof n != "object" || !Array.isArray(n))
              throw new N("expected array");
            let I = n.length;
            for (let z = 0; z < I; ++z)
              try {
                b.push(u(n[z]));
              } catch (P) {
                throw (
                  ((P.message +=
                    `
...while parsing array element ` + z),
                  P)
                );
              }
            return b;
          }
          parseDict(n, u) {
            let b = new Map();
            if (typeof n != "object" || Array.isArray(n))
              throw new N("expected object");
            for (let I in n)
              try {
                b.set(I, u(n[I]));
              } catch (z) {
                throw (
                  ((z.message +=
                    `
...while parsing dictionary element ` + I),
                  z)
                );
              }
            return b;
          }
          parseBracket(n) {
            let u = {
              name: this.parseString(n.name),
              start: this.parseDate(n.start),
              color: [255, 0, 255],
            };
            return (
              "params" in n &&
                (u.params = this.parseDict(
                  n.params,
                  this.parseString.bind(this),
                )),
              "end" in n && (u.end = this.parseDate(n.end)),
              "color" in n && (u.color = this.parseColor(n.color)),
              u
            );
          }
          parseMarker(n) {
            let u = { time: this.parseDate(n.time), color: [0, 255, 255] };
            return (
              "name" in n && (u.name = this.parseString(n.name)),
              "params" in n &&
                (u.params = this.parseDict(
                  n.params,
                  this.parseString.bind(this),
                )),
              "color" in n && (u.color = this.parseColor(n.color)),
              u
            );
          }
          parseSoundTrack(n) {
            let u = {};
            return (
              "song_title" in n &&
                (u.song_title = this.parseString(n.song_title)),
              "appid" in n && (u.appid = this.parseNumber(n.appid)),
              "song_index" in n &&
                (u.song_index = this.parseNumber(n.song_index)),
              u
            );
          }
          parseBroadcastGameData(n) {
            let u = { appid: 0, brackets: [], markers: [] };
            return (
              "appid" in n && (u.appid = this.parseNumber(n.appid)),
              "brackets" in n &&
                (u.brackets = this.parseArray(
                  n.brackets,
                  this.parseBracket.bind(this),
                )),
              "markers" in n &&
                (u.markers = this.parseArray(
                  n.markers,
                  this.parseMarker.bind(this),
                )),
              "soundtrack" in n &&
                (u.soundtrack = this.parseSoundTrack(n.soundtrack)),
              u
            );
          }
          convertTime(n, u) {
            return n - u / 1e3;
          }
          UpdateMarkers(n, u) {
            let b = [],
              I = [];
            for (const z of n)
              z.persistent
                ? (I.length > 0 &&
                    (I[I.length - 1].nTimeEnd = this.convertTime(
                      z.Timestamp,
                      u,
                    )),
                  z.name.length > 0 &&
                    I.push({
                      strTemplateName: z.name,
                      nTimeStart: this.convertTime(z.Timestamp, u),
                      nTimeEnd: -1,
                      color: _(z.color_r, z.color_g, z.color_b),
                    }))
                : b.push({
                    strTemplateName: z.name,
                    nTime: this.convertTime(z.Timestamp, u),
                    color: _(z.color_r, z.color_g, z.color_b),
                  });
            return { rgMarkers: b, rgSegments: I };
          }
          UpdateRegions(n) {
            let u = [];
            for (const b of n)
              u.push({
                strTemplateName: b.name,
                min: { x: b.min_x, y: b.min_y },
                max: { x: b.max_x, y: b.max_y },
                behavior: b.behavior,
              });
            return u;
          }
          UpdateSoundtrack(n, u) {}
        }
        var ct = g(48937),
          W = g(89083),
          E = g(13854),
          B = g(3166),
          pt = g(27066),
          Mt = g(7409),
          zt = g(14043),
          h = g(8323),
          a = g(72604),
          r = Object.defineProperty,
          tt = Object.getOwnPropertyDescriptor,
          je = (X, n, u, b) => {
            for (
              var I = b > 1 ? void 0 : b ? tt(n, u) : n, z = X.length - 1, P;
              z >= 0;
              z--
            )
              (P = X[z]) && (I = (b ? P(n, u, I) : P(I)) || I);
            return b && I && r(n, u, I), I;
          };
        const Oe = 250,
          Ue = 250;
        class nt {
          m_elVideo;
          m_peerConnection = null;
          m_strBroadcastSteamID = "";
          m_ulWebRTCSessionID = "";
          m_schCandidateTimer = new h.LU();
          m_nHostCandidateGeneration = 0;
          m_nCandidateUpdateIntervalMS = 0;
          m_listeners = new h.Ji();
          m_bFirstPlay = !0;
          m_bStatsViewVisible = !1;
          m_schCaptureDisplayStatsTrigger = new h.LU();
          m_stats = new Mt._L();
          constructor(n) {
            (0, v.Gn)(this), (this.m_elVideo = n);
          }
          async PlayMPD(n, u, b) {}
          async PlayWebRTC(n, u, b, I, z) {
            (this.m_strBroadcastSteamID = n),
              (this.m_ulWebRTCSessionID = b),
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
            let P = { urls: ["stun:" + I] },
              K = { urls: ["turn:" + I], username: u, credential: b },
              at = { iceServers: [P, K], iceTransportPolicy: "relay" };
            const ut = new RTCPeerConnection(at);
            (this.m_peerConnection = ut),
              (ut.oniceconnectionstatechange = ((G) => {
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
              (ut.onicecandidate = ((G) => {
                if (G.candidate) {
                  const ot = new FormData();
                  ot.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    ot.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    ot.append("sdp_mid", String(G.candidate.sdpMid)),
                    ot.append(
                      "sdp_mline_index",
                      String(G.candidate.sdpMLineIndex),
                    ),
                    ot.append("candidate", G.candidate.candidate),
                    ft()
                      .post(
                        `${B.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                        ot,
                      )
                      .then((wt) => {
                        const ht = wt.data;
                        (ht.success && ht.success == a.R) ||
                          console.log(
                            "Failed to add a WebRTC session ICE candidate: " +
                              String(ht.success),
                          );
                      })
                      .catch((wt) =>
                        console.log(
                          "Failed to add a WebRTC session ICE candidate" + wt,
                        ),
                      );
                }
              }).bind(this)),
              (ut.ontrack = ((G) => {
                G.track.kind === "video" &&
                  ((this.m_elVideo.src = ""),
                  (this.m_elVideo.srcObject = G.streams[0]),
                  this.Play());
              }).bind(this)),
              ut
                .setRemoteDescription({ type: "offer", sdp: z })
                .then(async () => {
                  await ut.setLocalDescription(await ut.createAnswer());
                  const G = new FormData();
                  G.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    G.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    G.append("answer", ut.localDescription?.sdp ?? "");
                  try {
                    await ft()
                      .post(
                        `${B.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                        G,
                      )
                      .then((ot) => {
                        const wt = ot.data;
                        if (!(wt.success && wt.success == a.R))
                          throw new Error(String(wt.success));
                      });
                  } catch (ot) {
                    console.log(
                      "Failed to set the WebRTC session answer: " + ot,
                    ),
                      this.OnWebRTCConnectionRetry();
                    return;
                  }
                  (this.m_nCandidateUpdateIntervalMS = Oe),
                    this.m_schCandidateTimer.Schedule(
                      this.m_nCandidateUpdateIntervalMS,
                      () => this.GetHostCandidates(),
                    );
                });
          }
          async GetHostCandidates() {
            const n = new FormData();
            n.append("broadcaststeamid", this.m_strBroadcastSteamID),
              n.append("webrtc_session_id", this.m_ulWebRTCSessionID),
              n.append(
                "candidate_generation",
                String(this.m_nHostCandidateGeneration),
              );
            try {
              await ft()
                .post(
                  `${B.TS.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                  n,
                )
                .then((u) => {
                  const b = u.data,
                    I = b.data,
                    z = this.m_peerConnection;
                  if (b.success && b.success == a.R)
                    z &&
                    I.candidate_generation > this.m_nHostCandidateGeneration
                      ? (I.candidates.forEach((P) => {
                          const K = new RTCIceCandidate({
                            sdpMid: P.sdp_mid,
                            sdpMLineIndex: P.sdp_mline_index,
                            candidate: P.candidate,
                          });
                          z.addIceCandidate(K).catch((at) => console.error(at));
                        }),
                        (this.m_nHostCandidateGeneration =
                          I.candidate_generation))
                      : this.m_nHostCandidateGeneration > 0 &&
                        (this.m_nCandidateUpdateIntervalMS *= 2);
                  else throw new Error(String(b.success));
                });
            } catch (u) {
              console.log("Failed to get WebRTC session ICE candidates" + u),
                this.OnWebRTCConnectionRetry();
              return;
            }
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates(),
            );
          }
          DispatchEvent(n, u = null) {
            let b = new CustomEvent(n, {
              cancelable: !0,
              bubbles: !0,
              detail: u,
            });
            this.m_elVideo.dispatchEvent(b);
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
            const n = this.m_bFirstPlay;
            this.m_bFirstPlay = !1;
            let u = !1;
            const b = () => {
                (u = !0),
                  this.m_stats
                    .GetFPSMonitor()
                    .StartTracking(() =>
                      this.m_stats.ExtractFrameInfo(this.m_elVideo),
                    );
              },
              I = (P, K) => !1,
              z = (P, K) => !1;
            try {
              await this.m_elVideo.play(), b();
            } catch (P) {
              P.name === "NotAllowedError"
                ? I("Failed to play video, probably due to auto play policy", P)
                : z("Failed to play video", P);
            }
            !u && n && this.DispatchEvent("valve-userinputneeded");
          }
          Pause() {
            this.m_elVideo.pause();
          }
          CanSeek() {
            return !1;
          }
          SeekAndPlay(n) {
            return this.Play(), 0;
          }
          Seek(n) {
            return 0;
          }
          JumpTime(n) {
            return 0;
          }
          IsMuted() {
            return this.m_elVideo.muted;
          }
          SetMuted(n) {
            this.m_elVideo.muted = n;
          }
          SetVolume(n) {
            (n = E.OQ(n, 0, 1)), (this.m_elVideo.volume = n);
          }
          GetVolume() {
            return this.m_elVideo.volume;
          }
          GetDASHPlayerStats() {
            return this.m_stats;
          }
          SetStatsViewIsVisible(n) {
            n && !this.m_bStatsViewVisible
              ? (this.CaptureStatsForDisplay(),
                this.m_schCaptureDisplayStatsTrigger.Schedule(
                  Ue,
                  this.CaptureStatsForDisplay,
                ))
              : !n &&
                this.m_bStatsViewVisible &&
                this.m_schCaptureDisplayStatsTrigger.Cancel(),
              (this.m_bStatsViewVisible = n);
          }
          CaptureStatsForDisplay() {
            this.m_stats.SetHTMLVideoPlayerDisplay(
              this.m_elVideo.videoWidth,
              this.m_elVideo.videoHeight,
              this.m_elVideo.clientWidth,
              this.m_elVideo.clientHeight,
            ),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                Ue,
                this.CaptureStatsForDisplay,
              );
          }
          OnVideoPause(n) {
            this.m_stats.GetFPSMonitor().Close();
          }
          OnVideoResize(n) {
            this.m_stats.GetFPSMonitor().SetWindowResized();
          }
          GetVideoRepresentations() {
            let n = [];
            return n.push({ id: zt.Y, displayName: "Auto", selected: !0 }), n;
          }
          SetVideoRepresentation(n) {}
          IsLiveContent() {
            return !0;
          }
          BHasTimedText() {
            return !1;
          }
        }
        je([pt.o], nt.prototype, "PlayWebRTC", 1),
          je([v.XI.bound], nt.prototype, "CaptureStatsForDisplay", 1),
          je([pt.o], nt.prototype, "OnVideoPause", 1),
          je([pt.o], nt.prototype, "OnVideoResize", 1);
        var jt = g(99412),
          St = g(90711),
          Jt = g(41635),
          kt = g(71742),
          Bt = g(18210),
          Rt = g(34592),
          Zt = g(30720),
          Qt = g(54326),
          Pt = g(44930),
          Tt = Object.defineProperty,
          rt = Object.getOwnPropertyDescriptor,
          L = (X, n, u, b) => {
            for (
              var I = b > 1 ? void 0 : b ? rt(n, u) : n, z = X.length - 1, P;
              z >= 0;
              z--
            )
              (P = X[z]) && (I = (b ? P(n, u, I) : P(I)) || I);
            return b && I && Tt(n, u, I), I;
          };
        const Dt = 1800,
          vt = 1e3,
          k = 5 * 1e3,
          Lt = 7;
        var bt = ((X) => (
          (X[(X.None = 0)] = "None"),
          (X[(X.Unlocking = 1)] = "Unlocking"),
          (X[(X.Loading = 2)] = "Loading"),
          (X[(X.Ready = 3)] = "Ready"),
          (X[(X.Error = 4)] = "Error"),
          X
        ))(bt || {});
        async function H(X, n, u) {
          if (!n) return;
          let b = new FormData();
          b.append("steamid", X),
            b.append("broadcastid", n),
            b.append("viewertoken", u);
          try {
            await ft().post(B.TS.CHAT_BASE_URL + "broadcast/stopwatching", b);
          } catch {}
        }
        class Et {
          m_rtUnlockTime = 0;
          m_schUnlockTimeout = new h.LU();
          m_broadcast;
          m_video;
          UnlockH264(n, u) {
            this.BCanUnlockH264()
              ? (n.SetState(1, ""),
                console.log("Unlocking H.264 for broadcast video playback"),
                this.RequestUnlockH264(),
                (this.m_broadcast = n),
                (this.m_video = u),
                (this.m_rtUnlockTime = Date.now()),
                this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                ))
              : n.SetState(4, (0, Bt.we)("#BroadcastWatch_MinBrowser"));
          }
          BCanUnlockH264() {
            return (0, Pt.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Client supports direct H.264 unlock"), !0)
              : (0, Pt.Dp)("BrowserView.PostMessageToParent")
                ? (console.log("Client supports browserview H.264 unlock"), !0)
                : (console.log("Client does not support H.264 unlock"), !1);
          }
          RequestUnlockH264() {
            (0, Pt.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Requesting direct H.264 unlock"),
                SteamClient.RemotePlay.UnlockH264())
              : (0, Pt.Dp)("BrowserView.PostMessageToParent")
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
            if ((0, ct.Mc)() || (0, ct.aM)()) {
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
                  (0, Bt.we)("#BroadcastWatch_MinBrowser"),
                ))
              : this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                );
          }
        }
        class it {
          constructor() {
            (0, v.Gn)(this);
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
          m_schManifestTimeout = new h.LU();
          m_schHeartbeatTimeout = new h.LU();
          SetState(n, u = "") {
            (this.m_eWatchState = n),
              (this.m_strStateDescription = u),
              n == 4 && console.log(this.m_strStateDescription);
          }
        }
        L([v.sH], it.prototype, "m_ulBroadcastID", 2),
          L([v.sH], it.prototype, "m_eWatchState", 2),
          L([v.sH], it.prototype, "m_strStateDescription", 2),
          L([v.XI], it.prototype, "SetState", 1);
        class C {
          m_steamIDBroadcast = "";
          m_bInitialized = !1;
          m_strTitle = "";
          m_strAppId = "" + Lt;
          m_nAppID = Lt;
          m_strAppTitle = "";
          m_strThumbnailUrl = "";
          m_nViewerCount = 0;
          m_bIsOnline = !1;
          m_schUpdateTimeout = new h.LU();
          m_nRefCount = 0;
          constructor(n) {
            (0, v.Gn)(this), (this.m_steamIDBroadcast = n);
          }
        }
        L([v.sH], C.prototype, "m_bInitialized", 2),
          L([v.sH], C.prototype, "m_strTitle", 2),
          L([v.sH], C.prototype, "m_strAppId", 2),
          L([v.sH], C.prototype, "m_nAppID", 2),
          L([v.sH], C.prototype, "m_strAppTitle", 2),
          L([v.sH], C.prototype, "m_strThumbnailUrl", 2),
          L([v.sH], C.prototype, "m_nViewerCount", 2),
          L([v.sH], C.prototype, "m_bIsOnline", 2);
        class Ae {
          constructor() {
            (0, v.Gn)(this);
          }
          m_eWatchState = 0;
          m_strStateDescription = "";
          m_rgVideos = [];
          SetState(n, u = "") {
            (this.m_eWatchState = n),
              (this.m_strStateDescription = u),
              n == 4 && console.log(this.m_strStateDescription);
          }
        }
        L([v.sH], Ae.prototype, "m_eWatchState", 2),
          L([v.sH], Ae.prototype, "m_strStateDescription", 2),
          L([v.XI], Ae.prototype, "SetState", 1);
        class Ht extends Ae {
          m_clipID;
          m_data;
        }
        class Ee extends Ae {
          m_nAppIDVOD;
          m_manifestURL;
        }
        class Xt {
          m_mapBroadcasts = new Map();
          m_mapClips = new Map();
          m_mapVODs = new Map();
          m_activeVideo = null;
          m_broadcastSettings = { nVolume: 1, bMuted: !1, ulViewerToken: "0" };
          m_schSaveSettings = new h.LU();
          m_broadcastInfos = {};
          constructor() {
            (0, v.Gn)(this), this.LoadBroadcastSettings();
          }
          GetBroadcastState(n) {
            if (n.IsBroadcastClip()) {
              let u = this.m_mapClips.get(n.GetBroadcastClipID());
              return u ? u.m_eWatchState : 0;
            } else if (n.IsBroadcastVOD()) {
              const u = this.m_mapVODs.get(n.GetBroadcastAppIDVOD());
              return u ? u.m_eWatchState : 0;
            } else {
              let u = this.m_mapBroadcasts.get(n.GetBroadcastSteamID());
              return u ? u.m_eWatchState : 0;
            }
          }
          GetBroadcastStateDescription(n) {
            if (n.IsBroadcastClip()) {
              let u = this.m_mapClips.get(n.GetBroadcastClipID());
              return u ? u.m_strStateDescription : "";
            } else if (n.IsBroadcastVOD()) {
              const u = this.m_mapVODs.get(n.GetBroadcastAppIDVOD());
              return u ? u.m_strStateDescription : "";
            } else {
              let u = this.m_mapBroadcasts.get(n.GetBroadcastSteamID());
              return u ? u.m_strStateDescription : "";
            }
          }
          CreateBroadcastVideo(n, u, b, I) {
            let z = this.GetOrCreateBroadcast(u),
              { nVolume: P, bMuted: K } = this.m_broadcastSettings,
              at = new T(n, P, K, b);
            return (
              at.SetBroadcastSteamID(u),
              z.m_rgVideos.push(at),
              (z.m_bWebRTC = I),
              !(0, ct.Mc)() && !(0, ct.aM)() && new Et().UnlockH264(z, at),
              at
            );
          }
          CreateClipVideo(n, u, b) {
            let I = this.GetOrCreateClip(u),
              { nVolume: z, bMuted: P } = this.m_broadcastSettings,
              K = new T(n, z, P, b);
            return (
              K.SetBroadcastClipID(u),
              I.m_rgVideos.push(K),
              !(0, ct.Mc)() && !(0, ct.aM)() && new Et().UnlockH264(I, K),
              K
            );
          }
          CreateVODVideo(n, u, b) {
            let I = this.GetOrCreateVOD(u),
              { nVolume: z, bMuted: P } = this.m_broadcastSettings,
              K = new T(n, z, P, b);
            return (
              K.SetBroadcastAppIDVOD(u),
              I.m_rgVideos.push(K),
              !(0, ct.Mc)() && !(0, ct.aM)() && new Et().UnlockH264(I, K),
              K
            );
          }
          StartVideo(n) {
            if (n.IsBroadcastClip()) {
              console.log(`Starting clip for ${n.GetBroadcastClipID()}`);
              let u = this.m_mapClips.get(n.GetBroadcastClipID());
              if (!u) return;
              this.SetActiveVideo(n),
                u.m_eWatchState == 0
                  ? this.GetClipManifest(u, n.GetWatchLocation())
                  : u.m_eWatchState == 3 && n.StartClip(u);
            } else if (n.IsBroadcastVOD()) {
              console.log(`Starting VOD for ${n.GetBroadcastAppIDVOD()}`);
              let u = this.m_mapVODs.get(n.GetBroadcastAppIDVOD());
              if (!u) return;
              this.SetActiveVideo(n),
                u.m_eWatchState == 0
                  ? this.GetVODManifest(u, n.GetWatchLocation())
                  : u.m_eWatchState == 3 && n.StartVOD(u);
            } else {
              let u = this.m_mapBroadcasts.get(n.GetBroadcastSteamID());
              if (!u) return;
              this.SetActiveVideo(n),
                u.m_eWatchState == 0
                  ? this.GetBroadcastManifest(u, n.GetWatchLocation())
                  : u.m_eWatchState == 3 && n.StartBroadcast(u);
            }
          }
          SetActiveVideo(n) {
            this.m_mapBroadcasts.forEach((u) => {
              for (let b of u.m_rgVideos)
                b != n && b.StopPlaybackTillUserInput();
            }),
              this.m_mapClips.forEach((u) => {
                for (let b of u.m_rgVideos)
                  b != n && b.StopPlaybackTillUserInput();
              }),
              (this.m_activeVideo = n);
          }
          PauseAllVideo() {
            this.m_mapBroadcasts.forEach((n) => {
              for (let u of n.m_rgVideos) u.StopPlaybackTillUserInput();
            });
          }
          async StopVideo(n) {
            let u = n.GetBroadcastSteamID(),
              b = this.m_mapBroadcasts.get(u);
            n.Stop(),
              b &&
                (b.m_ulBroadcastID &&
                  H(
                    u,
                    b.m_ulBroadcastID,
                    this.m_broadcastSettings.ulViewerToken,
                  ),
                Jt.Wp(b.m_rgVideos, (I) => I == n),
                this.RemoveBroadcastIfUnused(b));
          }
          StartInfo(n) {
            const u = this.GetOrCreateBroadcastInfo(n);
            return (
              u.m_nRefCount++,
              (!u.m_bInitialized || !u.m_schUpdateTimeout.IsScheduled()) &&
                this.LoadBroadcastInfo(u),
              u
            );
          }
          StopInfo(n) {
            n.m_nRefCount--;
          }
          GetOrCreateBroadcastInfo(n) {
            if (!n) return new C("");
            if (!this.m_broadcastInfos[n]) {
              const u = (0, v.sH)(new C(n));
              this.m_broadcastInfos[n] = u;
            }
            return this.m_broadcastInfos[n];
          }
          GetOrCreateBroadcast(n) {
            let u = this.m_mapBroadcasts.get(n);
            return (
              u ||
              ((u = new it()),
              (u.m_steamIDBroadcast = n),
              (u.m_eWatchState = 0),
              this.m_mapBroadcasts.set(n, u),
              u)
            );
          }
          GetBroadcast(n) {
            return this.m_mapBroadcasts.get(n);
          }
          GetBroadcastClip(n) {
            return this.m_mapClips.get(n);
          }
          GetBroadcastVOD(n) {
            return this.m_mapVODs.get(n);
          }
          RemoveBroadcastIfUnused(n) {
            n.m_rgVideos.length ||
              (n.m_schHeartbeatTimeout.Cancel(),
              n.m_schManifestTimeout.Cancel(),
              this.m_mapBroadcasts.delete(n.m_steamIDBroadcast));
          }
          GetOrCreateClip(n) {
            let u = this.m_mapClips.get(n);
            return (
              u ||
              ((u = new Ht()),
              (u.m_clipID = n),
              (u.m_eWatchState = 0),
              this.m_mapClips.set(n, u),
              u)
            );
          }
          GetOrCreateVOD(n) {
            let u = this.m_mapVODs.get(n);
            return (
              u ||
              ((u = new Ee()),
              (u.m_nAppIDVOD = n),
              (u.m_eWatchState = 0),
              this.m_mapVODs.set(n, u),
              u)
            );
          }
          async LoadBroadcastInfo(n) {
            let u = "0",
              b = this.m_mapBroadcasts.get(n.m_steamIDBroadcast);
            if ((b && (u = b.m_ulBroadcastID), n.m_nRefCount == 0)) return;
            const I = {
              steamid: n.m_steamIDBroadcast,
              broadcastid: u,
              location:
                b &&
                b.m_rgVideos &&
                b.m_rgVideos[0] &&
                b.m_rgVideos[0].GetWatchLocation(),
            };
            try {
              const z = await ft().get(
                `${B.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                { params: I },
              );
              if (!z || !z.data || !z.data.success || z.data.success != a.R) {
                n.m_bInitialized = !0;
                return;
              }
              const P = z.data;
              (0, v.h5)(() => {
                (n.m_bInitialized = !0),
                  (n.m_strTitle = P.title),
                  (n.m_strAppId = P.appid),
                  (n.m_nAppID = Number.parseInt(P.appid)),
                  (n.m_strAppTitle = P.app_title),
                  (n.m_strThumbnailUrl = P.thumbnail_url),
                  (n.m_nViewerCount = P.viewer_count),
                  (n.m_bIsOnline = P.is_online),
                  !n.m_strTitle &&
                    S.td &&
                    ((n.m_strTitle = S.td.name),
                    (n.m_strAppTitle = S.td.appName || S.td.name));
                const K = P.update_interval;
                K &&
                  typeof K == "number" &&
                  n.m_schUpdateTimeout.Schedule(K * 1e3, () =>
                    this.LoadBroadcastInfo(n),
                  );
              });
            } catch (z) {
              console.error(z);
            }
          }
          DelayedGetBroadcastManifest(n, u, b = Date.now()) {
            n.m_schManifestTimeout.Schedule(k, () =>
              this.GetBroadcastManifest(n, u, b),
            );
          }
          async GetBroadcastManifest(n, u, b = Date.now()) {
            n.SetState(2, "");
            let I = {
                steamid: n.m_steamIDBroadcast,
                broadcastid: 0,
                viewertoken: this.m_broadcastSettings.ulViewerToken,
                watchlocation: u,
                sessionid: (0, B.KC)(),
                is_webrtc: n.m_bWebRTC,
              },
              z = null;
            try {
              z = await ft().get(
                B.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
                { params: I, withCredentials: !0 },
              );
            } catch (at) {
              let ut = (0, Rt.H)(at);
              console.error(
                "Failed to get broadcast manifest!" + ut.strErrorMsg,
                ut,
              );
            }
            if (!z || z.status != 200) {
              n.SetState(4, (0, Bt.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let P = z.data;
            P.viewertoken && this.SetViewerToken(P.viewertoken);
            let K = P.success;
            if (K == "ready")
              n.SetState(3),
                (n.m_ulBroadcastID = P.broadcastid),
                (n.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
                (n.m_strCDNAuthUrlParameters = P.cdn_auth_url_parameters),
                (n.m_bWebRTC = P.is_webrtc),
                (n.m_data = P),
                this.LoadBroadcast(n),
                setTimeout(() => {
                  n.m_schHeartbeatTimeout.Schedule(
                    n.m_data.heartbeat_interval * 1e3,
                    () => this.HeartbeatBroadcast(n),
                  );
                }, Math.random() * 3e4);
            else if (K == "waiting") {
              n.SetState(2, (0, Bt.we)("#BroadcastWatch_WaitingForResponse"));
              let at = Date.now() - b;
              if (at > 60 * 1e3) {
                n.SetState(4, (0, Bt.we)("#BroadcastWatch_NotAvailable"));
                return;
              }
              let ut = at > 30 * 1e3 ? P.retry : 5e3;
              n.m_schManifestTimeout.Schedule(ut, () =>
                this.GetBroadcastManifest(n, u, b),
              );
            } else
              K == "waiting_for_start"
                ? (n.SetState(2, (0, Bt.we)("#BroadcastWatch_WaitingForStart")),
                  n.m_schManifestTimeout.Schedule(P.retry, () =>
                    this.GetBroadcastManifest(n, u, b),
                  ))
                : K == "waiting_for_reconnect"
                  ? (n.SetState(
                      2,
                      (0, Bt.we)("#BroadcastWatch_WaitingForReconnect"),
                    ),
                    n.m_schManifestTimeout.Schedule(P.retry, () =>
                      this.GetBroadcastManifest(n, u, b),
                    ))
                  : K == "end"
                    ? n.SetState(4, (0, Bt.we)("#BroadcastWatch_NotAvailable"))
                    : K == "too_many_broadcasts"
                      ? n.SetState(
                          4,
                          (0, Bt.we)("#BroadcastWatch_TooManyBroadcasts"),
                        )
                      : K == "system_not_supported"
                        ? n.SetState(
                            4,
                            (0, Bt.we)("#BroadcastWatch_SystemNotSupported"),
                          )
                        : K == "user_restricted"
                          ? n.SetState(
                              4,
                              (0, Bt.we)("#BroadcastWatch_UserRestricted"),
                            )
                          : K == "poor_upload_quality"
                            ? n.SetState(
                                4,
                                (0, Bt.we)("#BroadcastWatch_PoorUploadQuality"),
                              )
                            : K == "request_failed"
                              ? n.SetState(
                                  4,
                                  (0, Bt.we)("#BroadcastWatch_RequestFailed"),
                                )
                              : K == "too_many_viewers"
                                ? n.SetState(
                                    4,
                                    (0, Bt.we)(
                                      "#BroadcastWatch_TooManyViewers",
                                    ),
                                  )
                                : n.SetState(
                                    4,
                                    (0, Bt.we)("#BroadcastWatch_NotAvailable"),
                                  );
          }
          async GetClipManifest(n, u) {
            n.SetState(2, "");
            let b = {
                clipid: n.m_clipID,
                watchlocation: u,
                sessionid: (0, B.KC)(),
              },
              I = null;
            try {
              I = await ft().get(
                B.TS.CHAT_BASE_URL + "broadcast/getclipdetails",
                { params: b, withCredentials: !0 },
              );
            } catch (P) {
              console.error(P), console.log("Failed to get clip manifest!");
            }
            if (!I || I.status != 200) {
              n.SetState(4, (0, Bt.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let z = I.data;
            z.success == a.R
              ? (n.SetState(3), (n.m_data = z), this.LoadClip(n))
              : n.SetState(4, (0, Bt.we)("#BroadcastWatch_RequestFailed"));
          }
          async GetVODManifest(n, u) {
            n.SetState(2, "");
            let b = await Zt.K.Get().LoadVODForAppID(n.m_nAppIDVOD);
            b
              ? (n.SetState(3),
                (n.m_manifestURL = b.video_url),
                this.LoadVOD(n))
              : n.SetState(4, (0, Bt.we)("#BroadcastWatch_RequestFailed"));
          }
          async HeartbeatBroadcast(n) {
            let u = new FormData();
            u.append("steamid", n.m_steamIDBroadcast),
              u.append("broadcastid", n.m_ulBroadcastID),
              u.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
              ft().post(B.TS.CHAT_BASE_URL + "broadcast/heartbeat/", u),
              n.m_schHeartbeatTimeout.Schedule(
                n.m_data.heartbeat_interval * 1e3,
                () => this.HeartbeatBroadcast(n),
              );
          }
          LoadBroadcast(n) {
            const u = this.m_activeVideo;
            u &&
              n.m_rgVideos.findIndex((b) => b == u) >= 0 &&
              u.StartBroadcast(n);
          }
          LoadClip(n) {
            const u = this.m_activeVideo;
            u && n.m_rgVideos.findIndex((b) => b == u) >= 0 && u.StartClip(n);
          }
          LoadVOD(n) {
            const u = this.m_activeVideo;
            u && n.m_rgVideos.findIndex((b) => b == u) >= 0 && u.StartVOD(n);
          }
          BroadcastDownloadFailed(n, u = !0, b = W.N_.Invalid) {
            n.Stop();
            let I = this.m_mapBroadcasts.get(n.GetBroadcastSteamID());
            I &&
              I.m_eWatchState != 2 &&
              (I.m_bWebRTC && u && (I.m_bWebRTC = !1),
              b == W.N_.StreamGone
                ? this.DelayedGetBroadcastManifest(I, n.GetWatchLocation())
                : this.GetBroadcastManifest(I, n.GetWatchLocation()));
          }
          UserInputClickVideo(n) {
            if (
              this.m_activeVideo != n &&
              (this.PauseAllVideo(),
              (this.m_activeVideo = n),
              !n.IsBroadcastClip() && !n.IsBroadcastVOD())
            ) {
              let u = this.m_mapBroadcasts.get(n.GetBroadcastSteamID());
              u && this.GetBroadcastManifest(u, n.GetWatchLocation());
            }
            n.UserInputClick();
          }
          LoadBroadcastSettings() {
            if (!window.localStorage) return;
            let n = window.localStorage.getItem("broadcastSettings");
            if (!n) return;
            let u = JSON.parse(n);
            if (!u) return;
            Object.assign(this.m_broadcastSettings, u);
            let b = this.m_broadcastSettings;
            (b.bMuted = !!b.bMuted),
              (b.nVolume = E.OQ(b.nVolume, 0, 1)),
              typeof b.ulViewerToken != "string" && (b.ulViewerToken = "0");
          }
          SaveBroadcastSettings() {
            window.localStorage &&
              this.m_schSaveSettings.Schedule(vt, () => {
                try {
                  window.localStorage.setItem(
                    "broadcastSettings",
                    JSON.stringify(this.m_broadcastSettings),
                  );
                } catch {}
              });
          }
          SetViewerToken(n) {
            this.m_broadcastSettings.ulViewerToken != n &&
              ((this.m_broadcastSettings.ulViewerToken = n),
              this.SaveBroadcastSettings());
          }
          GetViewerToken() {
            return this.m_broadcastSettings.ulViewerToken;
          }
          SaveVolumeChange(n, u) {
            (this.m_broadcastSettings.nVolume == n &&
              this.m_broadcastSettings.bMuted == u) ||
              ((this.m_broadcastSettings.nVolume = n),
              (this.m_broadcastSettings.bMuted = u),
              this.SaveBroadcastSettings());
          }
        }
        L([v.sH], Xt.prototype, "m_mapBroadcasts", 2);
        var Kt = ((X) => (
          (X[(X.Timeline = 1)] = "Timeline"),
          (X[(X.Minimap = 2)] = "Minimap"),
          X
        ))(Kt || {});
        class T {
          m_elVideo;
          m_player = null;
          m_listeners = new h.Ji();
          m_gameDataParser = null;
          m_eWatchLocation = St.nn.Tq;
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
          m_nTimelineDuration = Dt;
          m_nVideoStartPos = 0;
          m_nVideoEndPos = 0;
          m_editorStartTime = 0;
          m_editorEndTime = 0;
          m_rgMarkers = v.sH.array();
          m_rgSegments = v.sH.array();
          m_rgRegions = v.sH.array();
          m_fnOnVideoEnd;
          m_videoEndingTimer;
          constructor(n, u, b, I) {
            (0, v.Gn)(this),
              (this.m_elVideo = n),
              (this.m_nVolume = u),
              (this.m_bMuted = b),
              (this.m_eWatchLocation = I);
          }
          SetBroadcastSteamID(n) {
            this.m_steamIDBroadcast = n;
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
          SetStatsViewIsVisible(n) {
            this.m_player && this.m_player.SetStatsViewIsVisible(n);
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
          SetBroadcastClipID(n) {
            this.m_broadcastClipID = n;
          }
          GetBroadcastClipID() {
            return this.m_broadcastClipID;
          }
          IsBroadcastVOD() {
            return !!this.m_nBroadcastAppIDVOD;
          }
          SetBroadcastAppIDVOD(n) {
            this.m_nBroadcastAppIDVOD = n;
          }
          GetBroadcastAppIDVOD() {
            return this.m_nBroadcastAppIDVOD;
          }
          GetVideoRepresentations() {
            return this.m_player ? this.m_player.GetVideoRepresentations() : [];
          }
          SetVideoRepresentation(n) {
            this.m_player?.SetVideoRepresentation(n);
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
            for (let n = 0; n < this.m_elVideo.textTracks.length; n++) {
              const u = this.m_elVideo.textTracks[n];
              if (u.mode === "showing") return u;
            }
            return null;
          }
          SetSubtitles(n) {
            let u = n ? Bt.bi[n] : jt.xPp;
            this.m_player.SetSubtitles(u);
          }
          SetStartWithSubtitles(n) {
            this.m_bStartWithSubtitles = n;
          }
          GetBroadcastState() {
            return dt.GetBroadcastState(this);
          }
          GetBroadcastStateDescription() {
            return dt.GetBroadcastStateDescription(this);
          }
          SetOnVideoCallback(n) {
            this.m_fnOnVideoEnd = n;
          }
          InitPlayer() {
            (0, kt.wT)(!this.m_player, "Initialized twice?"),
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
              (this.m_nTimelineDuration = Dt),
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
          StartBroadcast(n) {
            if ((this.InitPlayer(), n.m_data.url)) {
              let b = new W.Zn(this.m_elVideo);
              b.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
                (this.m_player = b),
                b.PlayMPD(
                  n.m_data.url,
                  n.m_data.hls_url,
                  void 0,
                  n.m_strCDNAuthUrlParameters,
                );
            } else {
              let b = new nt(this.m_elVideo);
              (this.m_player = b),
                b.PlayWebRTC(
                  this.m_steamIDBroadcast,
                  n.m_ulViewerToken,
                  n.m_data.webrtc_session_id,
                  n.m_data.webrtc_turn_server,
                  n.m_data.webrtc_offer_sdp,
                );
            }
            this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
            let u = this.m_player?.GetDASHPlayerStats();
            u &&
              u.SetBroadcasterAndViewerInfo(
                this.m_steamIDBroadcast,
                B.iA.steamid,
                n.m_ulBroadcastID,
                n.m_ulViewerToken,
              ),
              (this.m_BroadcastInfo = dt.StartInfo(this.m_steamIDBroadcast));
          }
          StartClip(n) {
            this.InitPlayer();
            let u = new W.Zn(this.m_elVideo);
            u.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = u),
              u.PlayMPD(n.m_data.clip_url),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          StartVOD(n) {
            this.InitPlayer();
            let u = new W.Zn(this.m_elVideo);
            u.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = u),
              B.iA.logged_in &&
                n.m_nAppIDVOD &&
                u.SetBookmarkAdapter(new Qt.M(n.m_nAppIDVOD)),
              n.m_manifestURL && u.PlayMPD(n.m_manifestURL),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          Stop() {
            this.m_listeners.Unregister(),
              this.m_BroadcastInfo &&
                (dt.StopInfo(this.m_BroadcastInfo),
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
            const n = this.GetBroadcastState();
            if (n == 0 || this.IsBroadcastClip()) {
              dt.StartVideo(this);
              return;
            } else if (n == 3)
              if ((dt.SetActiveVideo(this), this.m_player))
                this.m_player.Play();
              else if (this.IsBroadcastVOD()) {
                const u = dt.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
                u && this.StartVOD(u);
              } else {
                const u = dt.GetBroadcast(this.m_steamIDBroadcast);
                u && this.StartBroadcast(u);
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
          JumpTime(n) {
            this.m_player?.JumpTime(n);
          }
          Seek(n) {
            this.m_player?.Seek(n);
          }
          SeekAndPlay(n) {
            this.m_player?.SeekAndPlay(n);
          }
          JumpToLiveEdge() {
            const n = this.m_player;
            n &&
              (n.IsLiveContent()
                ? this.SeekAndPlay(n.GetBufferedLiveEdgeTime())
                : this.SeekAndPlay(n.GetAvailableVideoStartTime()));
          }
          SetVolume(n) {
            this.m_player &&
              (this.m_player.SetVolume(n),
              (this.m_nVolume = this.m_player.GetVolume())),
              dt.SaveVolumeChange(n, this.m_bMuted);
          }
          SetMute(n) {
            this.m_player && this.m_player.SetMuted(n),
              (this.m_bMuted = n),
              dt.SaveVolumeChange(this.m_nVolume, n);
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
            const n = this.m_player;
            if (n)
              if (this.IsBroadcastClip())
                (this.m_nPlaybackTime = n.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = n.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = n.GetBufferedLiveEdgeTime()),
                  (this.m_nTimelineDuration =
                    this.m_nVideoEndPos - this.m_nVideoStartPos),
                  (this.m_bOnLiveEdge = !1),
                  (this.m_bBuffering = n.IsBuffering());
              else {
                if (
                  ((this.m_nPlaybackTime = n.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = n.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = Math.max(
                    n.GetBufferedLiveEdgeTime(),
                    this.m_nPlaybackTime,
                  )),
                  this.IsBroadcastVOD())
                ) {
                  this.m_nTimelineDuration = this.m_nVideoEndPos;
                  const u = this.m_fnOnVideoEnd;
                  u &&
                    this.m_nVideoEndPos - this.m_nPlaybackTime < W.Br &&
                    (this.m_videoEndingTimer = window.setTimeout(() => {
                      u();
                    }, 400));
                }
                (this.m_bBuffering = n.IsBuffering()),
                  (this.m_bOnLiveEdge =
                    this.m_nVideoEndPos - this.m_nPlaybackTime < W.Br),
                  n.IsPaused() && (this.m_bOnLiveEdge = !1);
              }
          }
          OnVolumeUpdated() {
            const n = this.m_player;
            n &&
              ((this.m_nVolume = n.GetVolume()), (this.m_bMuted = n.IsMuted()));
          }
          OnGameDataUpdate(n) {
            let u = n.detail;
            if (!u || typeof u.gamedata != "object") return;
            (!this.m_gameDataParser ||
              this.m_gameDataParser.GetAppID() != u.gamedata.__appid) &&
              (this.m_gameDataParser = new q(u.gamedata.__appid));
            const b = this.m_player?.GetLiveContentStartTime().getTime() ?? 0;
            if ("timelinemarkers" in u.gamedata) {
              const I = this.m_gameDataParser.UpdateMarkers(
                u.gamedata.__timelinemarkers,
                b,
              );
              I &&
                (this.m_rgMarkers.replace(I.rgMarkers || []),
                this.m_rgSegments.replace(I.rgSegments || []));
              const z = this.m_gameDataParser.UpdateRegions(
                u.gamedata.__regions,
              );
              z && this.m_rgRegions.replace(z);
            } else
              "soundtrack" in u.gamedata &&
                this.m_gameDataParser.UpdateSoundtrack(
                  this.m_steamIDBroadcast,
                  u.gamedata.soundtrack,
                );
          }
          OnDownloadFailed(n) {
            let u = n.detail || W.N_.Invalid;
            dt.BroadcastDownloadFailed(this, !0, u);
          }
          OnWebRTCRetry() {
            dt.BroadcastDownloadFailed(this, !1);
          }
          OnWebRTCFailed() {
            dt.BroadcastDownloadFailed(this, !0);
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
          GetTimeAtMousePosition(n, u, b, I) {
            let z = E.Fu(n, u.left, u.right, b, I);
            return Math.floor(z + 0.5);
          }
          GetPercentOffsetFromTime(n, u) {
            let b = 0,
              I = 0;
            return (
              u == 1
                ? ((I = this.m_nVideoEndPos),
                  (b = I - this.m_nTimelineDuration))
                : ((b = 0), (I = 0)),
              E.Fu(n, b, I, 0, 100)
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
        L([v.sH], T.prototype, "m_player", 2),
          L([v.sH], T.prototype, "m_bPaused", 2),
          L([v.sH], T.prototype, "m_nPlaybackTime", 2),
          L([v.sH], T.prototype, "m_bBuffering", 2),
          L([v.sH], T.prototype, "m_bOnLiveEdge", 2),
          L([v.sH], T.prototype, "m_nVolume", 2),
          L([v.sH], T.prototype, "m_bMuted", 2),
          L([v.sH], T.prototype, "m_bUserInputNeeded", 2),
          L([v.sH], T.prototype, "m_bIsReplay", 2),
          L([v.sH], T.prototype, "m_nTimelineDuration", 2),
          L([v.sH], T.prototype, "m_nVideoStartPos", 2),
          L([v.sH], T.prototype, "m_nVideoEndPos", 2),
          L([v.sH], T.prototype, "m_editorStartTime", 2),
          L([v.sH], T.prototype, "m_editorEndTime", 2),
          L([v.XI.bound], T.prototype, "StartBroadcast", 1),
          L([v.XI.bound], T.prototype, "StartClip", 1),
          L([v.XI.bound], T.prototype, "StartVOD", 1),
          L([pt.o], T.prototype, "OnVideoPlaying", 1),
          L([pt.o], T.prototype, "OnVideoPause", 1),
          L([v.XI.bound], T.prototype, "OnVideoTimeUpdate", 1),
          L([pt.o], T.prototype, "OnVolumeUpdated", 1),
          L([v.XI.bound], T.prototype, "OnGameDataUpdate", 1),
          L([pt.o], T.prototype, "OnDownloadFailed", 1),
          L([pt.o], T.prototype, "OnWebRTCRetry", 1),
          L([pt.o], T.prototype, "OnWebRTCFailed", 1),
          L([pt.o], T.prototype, "OnUserInputNeeded", 1);
        const dt = new Xt();
        window.uiBroadcastWatchStore = dt;
      },
      62510: (Ct, _t, g) => {
        "use strict";
        g.d(_t, { m: () => q });
        var s = g(7850),
          ft = g(90626),
          v = g(54963),
          S = g(8323),
          Ut = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          N = (ct, W, E, B) => {
            for (
              var pt = B > 1 ? void 0 : B ? _(W, E) : W, Mt = ct.length - 1, zt;
              Mt >= 0;
              Mt--
            )
              (zt = ct[Mt]) && (pt = (B ? zt(W, E, pt) : zt(pt)) || pt);
            return B && pt && Ut(W, E, pt), pt;
          };
        class q extends ft.Component {
          m_elCanvas = null;
          m_Context = null;
          m_schUpdate = new S.LU();
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
          BindCanvasRef(W) {
            this.m_elCanvas = W;
          }
          updateCanvas() {
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let W = this.props.scaleFactor || [1, 1],
              E = this.props.elementRef,
              B = this.props.updateRate;
            const pt = this.m_elCanvas.getContext("2d");
            if (!pt) return;
            this.m_Context = pt;
            let Mt = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              zt = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = Mt),
              (this.m_elCanvas.height = zt),
              (this.props.blurAmount ?? 0) > 0 &&
                (pt.filter = "blur(" + this.props.blurAmount + "px)");
            let h = () => {
              pt.drawImage(E, 0, 0, Mt * W[0], zt * W[1]),
                B > 0 && this.m_schUpdate.Schedule(B, h);
            };
            h(), (this.m_bSetupComplete = !0);
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
        N([v.oI], q.prototype, "BindCanvasRef", 1),
          N([v.oI], q.prototype, "updateCanvas", 1);
      },
      79167: (Ct, _t, g) => {
        "use strict";
        g.d(_t, { I: () => h });
        var s = g(7850),
          ft = g(90626),
          v = g(54963),
          S = g(75844),
          Ut = g(8323),
          _ = g(18210),
          N = g(58534),
          q = g(36118),
          ct = g(81315),
          W = g.n(ct),
          E = g(13854),
          B = Object.defineProperty,
          pt = Object.getOwnPropertyDescriptor,
          Mt = (a, r, tt, je) => {
            for (
              var Oe = je > 1 ? void 0 : je ? pt(r, tt) : r,
                Ue = a.length - 1,
                nt;
              Ue >= 0;
              Ue--
            )
              (nt = a[Ue]) && (Oe = (je ? nt(r, tt, Oe) : nt(Oe)) || Oe);
            return je && Oe && B(r, tt, Oe), Oe;
          },
          zt = ((a) => (
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
          ))(zt || {});
        let h = class extends ft.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new Ut.Ji();
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
          OnMouseDown(a, r) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (tt) => {
                this.OnMouseUp(tt, r);
              }),
              (this.m_fnMouseMove = (tt) => {
                this.OnMouseMove(tt, r);
              }),
              this.setState({ EdgeDown: r }),
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
          OnMouseMove(a, r) {
            if (this.state.EdgeDown !== void 0) {
              switch ((a.shiftKey && this.m_fnMouseUp(), r)) {
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
                  const tt = (0, E.OQ)(
                      this.CalcLeftEdge(a.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    je = 100 - (tt + this.state.curWidthPct),
                    Oe = (0, E.OQ)(
                      this.CalcTopEdge(a.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    Ue = 100 - (Oe + this.state.curHeightPct),
                    nt = {
                      curLeftPosPct: tt,
                      curRightPosPct: je,
                      curTopPosPct: Oe,
                      curBottomPosPct: Ue,
                    };
                  this.setState(nt);
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
            let r =
                a.curTopPosPct !== void 0
                  ? a.curTopPosPct
                  : this.state.curTopPosPct,
              tt =
                a.curBottomPosPct !== void 0
                  ? a.curBottomPosPct
                  : this.state.curBottomPosPct,
              je =
                a.curLeftPosPct !== void 0
                  ? a.curLeftPosPct
                  : this.state.curLeftPosPct,
              Oe =
                a.curRightPosPct !== void 0
                  ? a.curRightPosPct
                  : this.state.curRightPosPct,
              Ue = (0, E.OQ)(
                100 - Oe - je,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              nt = (0, E.OQ)(
                100 - tt - r,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (a.curLeftPosPct !== void 0 || a.curRightPosPct !== void 0
                ? (nt = Ue / this.m_aspectRatio)
                : (Ue = nt * this.m_aspectRatio)),
              a.curLeftPosPct !== void 0
                ? (je = 100 - Oe - Ue)
                : (Oe = 100 - (je + Ue)),
              a.curTopPosPct !== void 0
                ? (r = 100 - tt - nt)
                : (tt = 100 - (r + nt));
            const jt = 100 - Oe - je,
              St = 100 - tt - r;
            this.IsValidPct(je) &&
              this.IsValidPct(Oe) &&
              this.IsValidPct(r) &&
              this.IsValidPct(tt) &&
              this.IsValidPct(jt) &&
              this.IsValidPct(St) &&
              this.setState({
                curLeftPosPct: je,
                curRightPosPct: Oe,
                curTopPosPct: r,
                curBottomPosPct: tt,
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
            return (0, E.OQ)(this.GetXPercent(a), 0, 100);
          }
          CalcRightEdge(a) {
            return (0, E.OQ)(
              100 - (this.GetXPercent(a) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(a) {
            return (0, E.OQ)(this.GetYPercent(a), 0, 100);
          }
          CalcBottomEdge(a) {
            return (0, E.OQ)(
              100 - (this.GetYPercent(a) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(a, r) {
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
              r = W().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (r += ` ${W().EdgeDown} ` + W()[this.state.EdgeDown]),
              (0, s.jsxs)("div", {
                className: r,
                style: a,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, s.jsxs)("div", {
                    className: W().LinkRegionGridBox,
                    children: [
                      (0, s.jsx)("div", {
                        className: `${W().LinkRegionEdge} ${W().TopLeft}`,
                        onMouseDown: (tt) => {
                          this.OnMouseDown(tt, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: `${W().LinkRegionEdge} ${W().Top}`,
                        onMouseDown: (tt) => {
                          this.OnMouseDown(tt, "top");
                        },
                      }),
                      (0, s.jsx)("div", {
                        className: `${W().LinkRegionEdge} ${W().TopRight}`,
                        onMouseDown: (tt) => {
                          this.OnMouseDown(tt, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: `${W().LinkRegionEdge} ${W().Left}`,
                        onMouseDown: (tt) => {
                          this.OnMouseDown(tt, "left");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsxs)("div", {
                        className: `${W().LinkRegionEdge} ${W().Middle}`,
                        onMouseDown: (tt) => {
                          this.OnMouseDown(tt, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, s.jsx)("div", {
                              className: W().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, s.jsx)(q.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, s.jsx)("div", {
                              className: W().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, s.jsx)(q.xv8, {}),
                            }),
                          (0, s.jsxs)("div", {
                            className: W().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: `${W().LinkRegionEdge} ${W().Right}`,
                        onMouseDown: (tt) => {
                          this.OnMouseDown(tt, "right");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: `${W().LinkRegionEdge} ${W().BottomLeft}`,
                        onMouseDown: (tt) => {
                          this.OnMouseDown(tt, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: `${W().LinkRegionEdge} ${W().Bottom}`,
                        onMouseDown: (tt) => {
                          this.OnMouseDown(tt, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: `${W().LinkRegionEdge} ${W().BottomRight}`,
                        onMouseDown: (tt) => {
                          this.OnMouseDown(tt, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, s.jsxs)("div", {
                      className: W().LinkRegionInfo,
                      children: [
                        (0, s.jsx)(N.pd, {
                          className: W().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, _.we)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, s.jsx)(N.pd, {
                          className: W().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, _.we)("#SteamTV_LinkDescription"),
                          placeholder: (0, _.we)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, s.jsxs)("div", {
                          className: W().LinkRegionButtonContainer,
                          children: [
                            (0, s.jsxs)(N.$n, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, _.we)("#Button_OK"), " "],
                            }),
                            (0, s.jsxs)(N.$n, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, _.we)("#Button_Cancel")],
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
        Mt([v.oI], h.prototype, "LinkRegionBoxRef", 1),
          Mt([v.oI], h.prototype, "OnMouseDown", 1),
          Mt([v.oI], h.prototype, "OnMouseMove", 1),
          Mt([v.oI], h.prototype, "OnMouseUp", 1),
          Mt([v.oI], h.prototype, "HandleDelete", 1),
          Mt([v.oI], h.prototype, "OnSetLinkURLChange", 1),
          Mt([v.oI], h.prototype, "OnSetLinkDescriptionChange", 1),
          Mt([v.oI], h.prototype, "OnSaveLink", 1),
          Mt([v.oI], h.prototype, "OnEditLink", 1),
          (h = Mt([S.PA], h));
      },
      53120: (Ct) => {
        Ct.exports = {
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
      63508: (Ct) => {
        Ct.exports = {
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
      8287: (Ct) => {
        Ct.exports = {
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
      15527: (Ct) => {
        Ct.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      43087: (Ct) => {
        Ct.exports = {
          StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
          Action: "_2Xpw9--lhL-kpt-lUannE1",
          WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
          StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
          StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
          StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
        };
      },
      33543: (Ct) => {
        Ct.exports = {
          narrowWidth: "500px",
          FriendsListInsetShadowCtn: "_1qeW35auMlJ5pJVNtBC-bF",
          FriendListInsetShadowTop: "_1osHa9KHOmdCDNrA232z4N",
          FriendListInsetShadowBottom: "_2OoTJwlWvzvAysWOOEQaXS",
        };
      },
      81315: (Ct) => {
        Ct.exports = {
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
      96715: (Ct, _t, g) => {
        "use strict";
        g.d(_t, { A: () => s });
        const s =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      10886: (Ct, _t, g) => {
        "use strict";
        g.d(_t, { A: () => s });
        const s =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      19654: (Ct, _t, g) => {
        "use strict";
        g.d(_t, { A: () => s });
        const s =
          g.p +
          "images/applications/appmgmt/reddit_large.png?v=valveisgoodatcaching";
      },
      3209: (Ct, _t, g) => {
        "use strict";
        g.d(_t, { A: () => s });
        const s =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
      59913: (Ct, _t, g) => {
        "use strict";
        g.d(_t, { A: () => s });
        function s(ft) {
          if (ft === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return ft;
        }
      },
    },
  ]);
})();
