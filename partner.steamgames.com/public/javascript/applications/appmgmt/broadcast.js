/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [68396],
    {
      34169: (Vt, ve, g) => {
        "use strict";
        g.r(ve),
          g.d(ve, {
            BroadcastEmbeddablePopoutHeader: () => Oi,
            default: () => Mn,
          });
        var n = g(7850),
          Wt = g(41735),
          O = g.n(Wt),
          H = g(75844),
          kt = g(65946),
          lt = g(90626),
          L = g(14947),
          rt = g(16346),
          ct = g(90711),
          _ = g(90828),
          q = g(72604),
          v = g(35038),
          Bt = g(84110),
          Oe = g(13018),
          vt = g(76559),
          f = g(80613),
          c = g.n(f),
          r = g(75245);
        function Pe(d) {
          return "unknown EBroadcastImageType ( " + d + " )";
        }
        function Ce(d) {
          return "unknown EGetGamesAlgorithm ( " + d + " )";
        }
        function lr(d) {
          return "unknown EGetChannelsAlgorithm ( " + d + " )";
        }
        function nr(d) {
          return "unknown ESteamTVContentTemplate ( " + d + " )";
        }
        class xt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              xt.prototype.unique_name || r.Sg(xt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
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
            let e = new (c().BinaryReader)(t),
              s = new xt();
            return xt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(xt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(xt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        }
        class Ft extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ft.prototype.broadcast_channel_id || r.Sg(Ft.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              s = new Ft();
            return Ft.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Ft.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Ft.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        }
        class Ct extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ct.prototype.unique_name || r.Sg(Ct.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ct.sm_m ||
                (Ct.sm_m = {
                  proto: Ct,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Ct.sm_m
            );
          }
          static MBF() {
            return Ct.sm_mbf || (Ct.sm_mbf = r.w0(Ct.M())), Ct.sm_mbf;
          }
          toObject(t = !1) {
            return Ct.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Ct.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Ct.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Ct();
            return Ct.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Ct.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Ct.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        }
        class _t extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _t.prototype.broadcast_channel_id || r.Sg(_t.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
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
              _t.sm_m
            );
          }
          static MBF() {
            return _t.sm_mbf || (_t.sm_mbf = r.w0(_t.M())), _t.sm_mbf;
          }
          toObject(t = !1) {
            return _t.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(_t.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(_t.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new _t();
            return _t.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(_t.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(_t.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        }
        class Zt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Zt.prototype.broadcast_channel_id || r.Sg(Zt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
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
            let e = new (c().BinaryReader)(t),
              s = new Zt();
            return Zt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Zt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Zt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Request";
          }
        }
        class At extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return At.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new At();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new At();
            return At.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return At.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        class Qt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Qt.prototype.broadcast_channel_id || r.Sg(Qt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              s = new Qt();
            return Qt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Qt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Qt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        }
        class te extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              te.prototype.unique_name || r.Sg(te.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
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
            let e = new (c().BinaryReader)(t),
              s = new te();
            return te.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(te.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(te.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        }
        class ee extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ee.prototype.broadcast_channel_id || r.Sg(ee.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
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
            let e = new (c().BinaryReader)(t),
              s = new ee();
            return ee.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ee.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ee.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Request";
          }
        }
        class Pt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Pt.prototype.replace_image_hash || r.Sg(Pt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              s = new Pt();
            return Pt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Pt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Pt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Response";
          }
        }
        class re extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              re.prototype.broadcast_channel_id || r.Sg(re.M()),
              f.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
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
            let e = new (c().BinaryReader)(t),
              s = new re();
            return re.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(re.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return re.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(re.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Request";
          }
        }
        class Q extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Q.prototype.images || r.Sg(Q.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: { images: { n: 1, c: C, r: !0, q: !0 } },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = r.w0(Q.M())), Q.sm_mbf;
          }
          toObject(t = !1) {
            return Q.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Q.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Q.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Q();
            return Q.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Q.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Q.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response";
          }
        }
        class C extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.image_type || r.Sg(C.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
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
            let e = new (c().BinaryReader)(t),
              s = new C();
            return C.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(C.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(C.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response_Images";
          }
        }
        class M extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              M.prototype.broadcast_channel_id || r.Sg(M.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = r.w0(M.M())), M.sm_mbf;
          }
          toObject(t = !1) {
            return M.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(M.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(M.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new M();
            return M.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(M.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return M.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(M.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Request";
          }
        }
        class Et extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Et.prototype.links || r.Sg(Et.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: { links: { n: 1, c: $, r: !0, q: !0 } },
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
            let e = new (c().BinaryReader)(t),
              s = new Et();
            return Et.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Et.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Et.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response";
          }
        }
        class $ extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.link_index || r.Sg($.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
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
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = r.w0($.M())), $.sm_mbf;
          }
          toObject(t = !1) {
            return $.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT($.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq($.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new $();
            return $.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj($.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0($.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
          }
        }
        class st extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              st.prototype.broadcast_channel_id || r.Sg(st.M()),
              f.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    links: { n: 2, c: V, r: !0, q: !0 },
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
            let e = new (c().BinaryReader)(t),
              s = new st();
            return st.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(st.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(st.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
          }
        }
        class V extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.link_index || r.Sg(V.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
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
            let e = new (c().BinaryReader)(t),
              s = new V();
            return V.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(V.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(V.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
          }
        }
        class A extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return A.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new A();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new A();
            return A.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return A.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
          }
        }
        class nt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              nt.prototype.broadcast_channel_id || r.Sg(nt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
            let e = new (c().BinaryReader)(t),
              s = new nt();
            return nt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(nt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(nt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Request";
          }
        }
        class T extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.is_live || r.Sg(T.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
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
            let e = new (c().BinaryReader)(t),
              s = new T();
            return T.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(T.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(T.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Response";
          }
        }
        class X extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              X.prototype.broadcast_channel_id || r.Sg(X.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
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
            let e = new (c().BinaryReader)(t),
              s = new X();
            return X.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(X.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(X.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "GetBroadcastChannelEntry";
          }
        }
        class wt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return wt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new wt();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new wt();
            return wt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Request";
          }
        }
        class it extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              it.prototype.results || r.Sg(it.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: { results: { n: 1, c: X, r: !0, q: !0 } },
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
            let e = new (c().BinaryReader)(t),
              s = new it();
            return it.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(it.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return it.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(it.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Response";
          }
        }
        class It extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return It.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new It();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new It();
            return It.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return It.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Request";
          }
        }
        class Yt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Yt.prototype.results || r.Sg(Yt.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: { results: { n: 1, c: X, r: !0, q: !0 } },
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
            let e = new (c().BinaryReader)(t),
              s = new Yt();
            return Yt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Yt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Yt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        }
        class Rt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Rt.prototype.broadcast_channel_id || r.Sg(Rt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
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
                    undo: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
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
            let e = new (c().BinaryReader)(t),
              s = new Rt();
            return Rt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Rt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Rt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Request";
          }
        }
        class Tt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Tt.prototype.is_followed || r.Sg(Tt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
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
            let e = new (c().BinaryReader)(t),
              s = new Tt();
            return Tt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Tt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Tt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Response";
          }
        }
        class Mt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Mt.prototype.broadcast_channel_id || r.Sg(Mt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = r.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(t = !1) {
            return Mt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Mt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Mt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Mt();
            return Mt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Mt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Mt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Request";
          }
        }
        class ie extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ie.prototype.is_subscribed || r.Sg(ie.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    is_subscribed: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
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
            let e = new (c().BinaryReader)(t),
              s = new ie();
            return ie.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ie.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ie.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Response";
          }
        }
        class Lt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Lt.prototype.broadcast_channel_id || r.Sg(Lt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
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
                    reason: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
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
            let e = new (c().BinaryReader)(t),
              s = new Lt();
            return Lt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Lt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Lt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Request";
          }
        }
        class Ee extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              s = new Ee();
            return Ee.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        class se extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              se.prototype.broadcast_channel_id || r.Sg(se.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
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
            let e = new (c().BinaryReader)(t),
              s = new se();
            return se.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(se.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(se.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        }
        class k extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.is_followed || r.Sg(k.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
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
            let e = new (c().BinaryReader)(t),
              s = new k();
            return k.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(k.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(k.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        }
        class Ht extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ht.prototype.appid || r.Sg(Ht.M()),
              f.Message.initialize(this, t, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    image: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    viewers: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    channels: { n: 5, c: X, r: !0, q: !0 },
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
            let e = new (c().BinaryReader)(t),
              s = new Ht();
            return Ht.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Ht.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Ht.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Game";
          }
        }
        class Jt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Jt.prototype.appid || r.Sg(Jt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    algorithm: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    count: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
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
            let e = new (c().BinaryReader)(t),
              s = new Jt();
            return Jt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Jt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Jt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Request";
          }
        }
        class Xt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xt.prototype.results || r.Sg(Xt.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
                  fields: { results: { n: 1, c: Ht, r: !0, q: !0 } },
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
            let e = new (c().BinaryReader)(t),
              s = new Xt();
            return Xt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Xt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Xt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Response";
          }
        }
        class $t extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $t.prototype.algorithm || r.Sg($t.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    algorithm: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    count: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
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
            let e = new (c().BinaryReader)(t),
              s = new $t();
            return $t.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj($t.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0($t.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Request";
          }
        }
        class Gt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Gt.prototype.results || r.Sg(Gt.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
                  fields: { results: { n: 1, c: X, r: !0, q: !0 } },
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
            let e = new (c().BinaryReader)(t),
              s = new Gt();
            return Gt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Gt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Gt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Response";
          }
        }
        class dt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              dt.prototype.broadcast_channel_id || r.Sg(dt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              s = new dt();
            return dt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(dt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(dt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        }
        class zt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              zt.prototype.broadcasters || r.Sg(zt.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: { broadcasters: { n: 1, c: St, r: !0, q: !0 } },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = r.w0(zt.M())), zt.sm_mbf;
          }
          toObject(t = !1) {
            return zt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(zt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(zt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new zt();
            return zt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(zt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(zt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
          }
        }
        class St extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              St.prototype.steamid || r.Sg(St.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
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
            let e = new (c().BinaryReader)(t),
              s = new St();
            return St.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(St.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return St.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(St.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        }
        class ut extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ut.prototype.issuer_steamid || r.Sg(ut.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
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
            let e = new (c().BinaryReader)(t),
              s = new ut();
            return ut.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ut.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ut.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatBan";
          }
        }
        class bt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              bt.prototype.broadcast_channel_id || r.Sg(bt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
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
            let e = new (c().BinaryReader)(t),
              s = new bt();
            return bt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(bt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(bt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Request";
          }
        }
        class Le extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Le.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Le();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Le();
            return Le.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Response";
          }
        }
        class ne extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ne.prototype.broadcast_channel_id || r.Sg(ne.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
            let e = new (c().BinaryReader)(t),
              s = new ne();
            return ne.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ne.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ne.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Request";
          }
        }
        class qt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              qt.prototype.results || r.Sg(qt.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
                  fields: { results: { n: 1, c: ut, r: !0, q: !0 } },
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
            let e = new (c().BinaryReader)(t),
              s = new qt();
            return qt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(qt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(qt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Response";
          }
        }
        class E extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              E.prototype.broadcast_channel_id || r.Sg(E.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
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
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = r.w0(E.M())), E.sm_mbf;
          }
          toObject(t = !1) {
            return E.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(E.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(E.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new E();
            return E.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(E.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return E.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(E.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Request";
          }
        }
        class mt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return mt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new mt();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new mt();
            return mt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        class at extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              at.prototype.broadcast_channel_id || r.Sg(at.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
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
            let e = new (c().BinaryReader)(t),
              s = new at();
            return at.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(at.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return at.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(at.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Request";
          }
        }
        class D extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              D.prototype.steamid || r.Sg(D.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = r.w0(D.M())), D.sm_mbf;
          }
          toObject(t = !1) {
            return D.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(D.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(D.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new D();
            return D.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(D.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return D.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(D.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatModerator";
          }
        }
        class i extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              i.prototype.results || r.Sg(i.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              i.sm_m ||
                (i.sm_m = {
                  proto: i,
                  fields: { results: { n: 1, c: D, r: !0, q: !0 } },
                }),
              i.sm_m
            );
          }
          static MBF() {
            return i.sm_mbf || (i.sm_mbf = r.w0(i.M())), i.sm_mbf;
          }
          toObject(t = !1) {
            return i.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(i.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(i.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new i();
            return i.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(i.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return i.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(i.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              i.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Response";
          }
        }
        class o extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              o.prototype.broadcast_channel_id || r.Sg(o.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
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
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = r.w0(o.M())), o.sm_mbf;
          }
          toObject(t = !1) {
            return o.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(o.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(o.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new o();
            return o.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(o.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return o.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(o.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Request";
          }
        }
        class p extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return p.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new p();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new p();
            return p.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return p.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Response";
          }
        }
        class B extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              B.prototype.broadcast_channel_id || r.Sg(B.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = r.w0(B.M())), B.sm_mbf;
          }
          toObject(t = !1) {
            return B.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(B.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(B.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new B();
            return B.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(B.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return B.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(B.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Request";
          }
        }
        class z extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.results || r.Sg(z.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
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
            let e = new (c().BinaryReader)(t),
              s = new z();
            return z.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(z.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(z.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Response";
          }
        }
        class F extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              F.prototype.broadcast_channel_id || r.Sg(F.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = r.w0(F.M())), F.sm_mbf;
          }
          toObject(t = !1) {
            return F.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(F.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(F.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new F();
            return F.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(F.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return F.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(F.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Request";
          }
        }
        class U extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.chat_id || r.Sg(U.M()),
              f.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
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
            let e = new (c().BinaryReader)(t),
              s = new U();
            return U.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(U.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(U.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Response";
          }
        }
        class tt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.term || r.Sg(tt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    term: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = r.w0(tt.M())), tt.sm_mbf;
          }
          toObject(t = !1) {
            return tt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(tt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(tt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new tt();
            return tt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(tt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(tt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Request";
          }
        }
        class ht extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ht.prototype.results || r.Sg(ht.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: { results: { n: 1, c: X, r: !0, q: !0 } },
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
            let e = new (c().BinaryReader)(t),
              s = new ht();
            return ht.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ht.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ht.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Response";
          }
        }
        class yt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return yt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new yt();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new yt();
            return yt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Request";
          }
        }
        class pt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pt.prototype.stream_live_email || r.Sg(pt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
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
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = r.w0(pt.M())), pt.sm_mbf;
          }
          toObject(t = !1) {
            return pt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(pt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(pt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new pt();
            return pt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(pt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(pt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Response";
          }
        }
        class Ot extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ot.prototype.stream_live_email || r.Sg(Ot.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
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
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = r.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(t = !1) {
            return Ot.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Ot.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Ot.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Ot();
            return Ot.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Ot.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Ot.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Request";
          }
        }
        class Ie extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ie.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ie();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Ie();
            return Ie.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Response";
          }
        }
        class l extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              s = new l();
            return l.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return l.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Request";
          }
        }
        class m extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              m.prototype.results || r.Sg(m.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: { results: { n: 1, c: X, r: !0, q: !0 } },
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
            let e = new (c().BinaryReader)(t),
              s = new m();
            return m.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(m.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return m.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(m.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Response";
          }
        }
        class b extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              b.prototype.broadcasts || r.Sg(b.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: { broadcasts: { n: 1, c: X, r: !0, q: !0 } },
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
            let e = new (c().BinaryReader)(t),
              s = new b();
            return b.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(b.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return b.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(b.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Takeover";
          }
        }
        class y extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              y.prototype.broadcasts || r.Sg(y.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    broadcasts: { n: 1, c: X, r: !0, q: !0 },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    title: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
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
            let e = new (c().BinaryReader)(t),
              s = new y();
            return y.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(y.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(y.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_SingleGame";
          }
        }
        class w extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              w.prototype.appid || r.Sg(w.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    game_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    broadcast: { n: 3, c: X },
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
            let e = new (c().BinaryReader)(t),
              s = new w();
            return w.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(w.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return w.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(w.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "GameListEntry";
          }
        }
        class j extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              j.prototype.entries || r.Sg(j.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    entries: { n: 1, c: w, r: !0, q: !0 },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = r.w0(j.M())), j.sm_mbf;
          }
          toObject(t = !1) {
            return j.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(j.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(j.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new j();
            return j.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(j.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return j.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(j.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_GameList";
          }
        }
        class x extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              x.prototype.broadcasts || r.Sg(x.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    broadcasts: { n: 1, c: X, r: !0, q: !0 },
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
            let e = new (c().BinaryReader)(t),
              s = new x();
            return x.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(x.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return x.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(x.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_QuickExplore";
          }
        }
        class R extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              R.prototype.broadcasts || r.Sg(R.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    broadcasts: { n: 1, c: X, r: !0, q: !0 },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = r.w0(R.M())), R.sm_mbf;
          }
          toObject(t = !1) {
            return R.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(R.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(R.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new R();
            return R.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(R.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return R.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(R.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_ConveyorBelt";
          }
        }
        class et extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              et.prototype.broadcast || r.Sg(et.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    broadcast: { n: 1, c: X },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    chat_group_id: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
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
            let e = new (c().BinaryReader)(t),
              s = new et();
            return et.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(et.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(et.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        }
        class ot extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ot.prototype.broadcast || r.Sg(ot.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    broadcast: { n: 1, c: X },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
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
            let e = new (c().BinaryReader)(t),
              s = new ot();
            return ot.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ot.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ot.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Developer";
          }
        }
        class ft extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ft.prototype.title || r.Sg(ft.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    title: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = r.w0(ft.M())), ft.sm_mbf;
          }
          toObject(t = !1) {
            return ft.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ft.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ft.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ft();
            return ft.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ft.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ft.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Event";
          }
        }
        class Kt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Kt.prototype.template_type || r.Sg(Kt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
                  fields: {
                    template_type: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    takeover: { n: 2, c: b },
                    single_game: { n: 3, c: y },
                    game_list: { n: 4, c: j },
                    quick_explore: { n: 5, c: x },
                    conveyor_belt: { n: 6, c: R },
                    watch_party: { n: 7, c: et },
                    developer: { n: 8, c: ot },
                    event: { n: 9, c: ft },
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
            let e = new (c().BinaryReader)(t),
              s = new Kt();
            return Kt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Kt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Kt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageContentRow";
          }
        }
        class Ne extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ne.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ne();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Ne();
            return Ne.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        class gt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              gt.prototype.rows || r.Sg(gt.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: { rows: { n: 1, c: Kt, r: !0, q: !0 } },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = r.w0(gt.M())), gt.sm_mbf;
          }
          toObject(t = !1) {
            return gt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(gt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(gt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new gt();
            return gt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(gt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(gt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Response";
          }
        }
        class Nt extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Nt.prototype.broadcast_channel_id || r.Sg(Nt.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
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
            let e = new (c().BinaryReader)(t),
              s = new Nt();
            return Nt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Nt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Nt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Request";
          }
        }
        class ae extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ae.prototype.broadcast_clip_id || r.Sg(ae.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
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
            let e = new (c().BinaryReader)(t),
              s = new ae();
            return ae.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ae.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ae.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_BroadcastClipInfo";
          }
        }
        class oe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              oe.prototype.clips || r.Sg(oe.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    clips: { n: 1, c: ae, r: !0, q: !0 },
                    thumbnail_host: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
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
            let e = new (c().BinaryReader)(t),
              s = new oe();
            return oe.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(oe.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(oe.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Response";
          }
        }
        class le extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              le.prototype.cheer_type || r.Sg(le.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
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
            let e = new (c().BinaryReader)(t),
              s = new le();
            return le.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(le.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return le.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(le.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        }
        class me extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              me.prototype.app_id || r.Sg(me.M()),
              f.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    app_id: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    cheer_target_id: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    cheers: { n: 3, c: le, r: !0, q: !0 },
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
            let e = new (c().BinaryReader)(t),
              s = new me();
            return me.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(me.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(me.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Request";
          }
        }
        class fe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              fe.prototype.aggregation_delay_ms || r.Sg(fe.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    aggregation_delay_ms: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
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
            let e = new (c().BinaryReader)(t),
              s = new fe();
            return fe.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(fe.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(fe.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Response";
          }
        }
        var cr;
        ((d) => {
          function t(K, Y, J) {
            return K.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, v.I8)(xt, Y, J),
              Ft,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.CreateBroadcastChannel = t;
          function e(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, v.I8)(Ct, Y, J),
              _t,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelID = e;
          function s(K, Y, J) {
            return K.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, v.I8)(Zt, Y, J),
              At,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetBroadcastChannelProfile = s;
          function a(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, v.I8)(Qt, Y, J),
              te,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelProfile = a;
          function u(K, Y, J) {
            return K.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, v.I8)(ee, Y, J),
              Pt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetBroadcastChannelImage = u;
          function h(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, v.I8)(re, Y, J),
              Q,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelImages = h;
          function I(K, Y, J) {
            return K.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, v.I8)(st, Y, J),
              A,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetBroadcastChannelLinkRegions = I;
          function S(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, v.I8)(M, Y, J),
              Et,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelLinks = S;
          function G(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, v.I8)(dt, Y, J),
              zt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetBroadcastChannelBroadcasters = G;
          function Be(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, v.I8)(wt, Y, J),
              it,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetFollowedChannels = Be;
          function Fe(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, v.I8)(It, Y, J),
              Yt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetSubscribedChannels = Fe;
          function Ae(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, v.I8)(nt, Y, J),
              T,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelStatus = Ae;
          function Se(K, Y, J) {
            return K.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, v.I8)(Rt, Y, J),
              Tt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.FollowBroadcastChannel = Se;
          function Ve(K, Y, J) {
            return K.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, v.I8)(Mt, Y, J),
              ie,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SubscribeBroadcastChannel = Ve;
          function ai(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, v.I8)(Nt, Y, J),
              oe,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelClips = ai;
          function Ut(K, Y, J) {
            return K.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, v.I8)(Lt, Y, J),
              Ee,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.ReportBroadcastChannel = Ut;
          function W(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, v.I8)(se, Y, J),
              k,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetBroadcastChannelInteraction = W;
          function pr(K, Y, J) {
            return K.SendMsg("SteamTV.GetGames#1", (0, v.I8)(Jt, Y, J), Xt, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          d.GetGames = pr;
          function ke(K, Y, J) {
            return K.SendMsg("SteamTV.GetChannels#1", (0, v.I8)($t, Y, J), Gt, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          d.GetChannels = ke;
          function On(K, Y, J) {
            return K.SendMsg("SteamTV.AddChatBan#1", (0, v.I8)(bt, Y, J), Le, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          d.AddChatBan = On;
          function Dn(K, Y, J) {
            return K.SendMsg("SteamTV.GetChatBans#1", (0, v.I8)(ne, Y, J), qt, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          d.GetChatBans = Dn;
          function Wn(K, Y, J) {
            return K.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, v.I8)(E, Y, J),
              mt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.AddChatModerator = Wn;
          function Fn(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, v.I8)(at, Y, J),
              i,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetChatModerators = Fn;
          function An(K, Y, J) {
            return K.SendMsg("SteamTV.AddWordBan#1", (0, v.I8)(o, Y, J), p, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          d.AddWordBan = An;
          function Sn(K, Y, J) {
            return K.SendMsg("SteamTV.GetWordBans#1", (0, v.I8)(B, Y, J), z, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          d.GetWordBans = Sn;
          function Nn(K, Y, J) {
            return K.SendMsg("SteamTV.JoinChat#1", (0, v.I8)(F, Y, J), U, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          d.JoinChat = Nn;
          function Un(K, Y, J) {
            return K.SendMsg("SteamTV.Search#1", (0, v.I8)(tt, Y, J), ht, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          d.Search = Un;
          function Pn(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, v.I8)(yt, Y, J),
              pt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetSteamTVUserSettings = Pn;
          function En(K, Y, J) {
            return K.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, v.I8)(Ot, Y, J),
              Ie,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetSteamTVUserSettings = En;
          function Ln(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, v.I8)(l, Y, J),
              m,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetMyBroadcastChannels = Ln;
          function Hn(K, Y, J) {
            return K.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, v.I8)(Ne, Y, J),
              gt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          d.GetHomePageContents = Hn;
          function kn(K, Y, J) {
            return K.SendMsg("SteamTV.AppCheer#1", (0, v.I8)(me, Y, J), fe, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          d.AppCheer = kn;
        })(cr || (cr = {}));
        var We = g(27066),
          dr = g(8323),
          P = g(18210),
          N = g(3166),
          Qr = g(71944),
          xr = g(99412),
          Ue = g(27386),
          Or = g(36191),
          Er = g(71742),
          De = g(66781);
        class ce extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ce.prototype.language || r.Sg(ce.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
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
            let e = new (c().BinaryReader)(t),
              s = new ce();
            return ce.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ce.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ce.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_UpdateTextFilterDictionary_Notification";
          }
        }
        class de extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              de.prototype.language || r.Sg(de.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
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
            let e = new (c().BinaryReader)(t),
              s = new de();
            return de.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(de.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return de.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(de.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Request";
          }
        }
        class he extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              he.prototype.dictionary || r.Sg(he.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              s = new he();
            return he.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(he.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return he.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(he.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Response";
          }
        }
        class ge extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ge.prototype.language || r.Sg(ge.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
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
            let e = new (c().BinaryReader)(t),
              s = new ge();
            return ge.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ge.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ge.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_TextFilterDictionaryChanged_Notification";
          }
        }
        class pe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pe.prototype.pid || r.Sg(pe.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    pid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
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
            let e = new (c().BinaryReader)(t),
              s = new pe();
            return pe.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(pe.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(pe.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Request";
          }
        }
        class be extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              be.prototype.gameid || r.Sg(be.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              s = new be();
            return be.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(be.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(be.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Response";
          }
        }
        class ye extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ye.prototype.gameid || r.Sg(ye.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
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
            let e = new (c().BinaryReader)(t),
              s = new ye();
            return ye.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ye.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ye.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
          }
        }
        class we extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              we.prototype.search_term || r.Sg(we.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              s = new we();
            return we.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(we.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return we.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(we.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
          }
        }
        class Me extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Me.prototype.appids || r.Sg(Me.M()),
              f.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
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
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = r.w0(Me.M())), Me.sm_mbf;
          }
          toObject(t = !1) {
            return Me.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Me.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Me.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Me();
            return Me.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Me.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Me.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
          }
        }
        var br;
        ((d) => {
          d.UpdateTextFilterDictionaryHandler = {
            name: "SteamEngine.UpdateTextFilterDictionary#1",
            request: ce,
          };
          function t(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultHandlerRegistry()),
              W == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : W.RegisterServiceNotificationHandler(
                    d.UpdateTextFilterDictionaryHandler,
                    Ut,
                  )
            );
          }
          d.RegisterForUpdateTextFilterDictionary = t;
          function e(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, v.I8)(ce, Ut),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.UpdateTextFilterDictionary = e;
          function s(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, v.I8)(ce, Ut),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (d.SendMsgUpdateTextFilterDictionary = s),
            (d.GetTextFilterDictionaryHandler = {
              name: "SteamEngine.GetTextFilterDictionary#1",
              request: de,
              response: he,
            });
          function a(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((pr, ke) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      ke(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, v.I8)(de, Ut),
                    he,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.GetTextFilterDictionary = a;
          function u(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((pr, ke) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      ke(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, v.I8)(de, Ut),
                    he,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (d.SendMsgGetTextFilterDictionary = u),
            (d.NotifyTextFilterDictionaryChangedHandler = {
              name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
              request: ge,
            });
          function h(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultHandlerRegistry()),
              W == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : W.RegisterServiceNotificationHandler(
                    d.NotifyTextFilterDictionaryChangedHandler,
                    Ut,
                  )
            );
          }
          d.RegisterForNotifyTextFilterDictionaryChanged = h;
          function I(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, v.I8)(ge, Ut),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.NotifyTextFilterDictionaryChanged = I;
          function S(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, v.I8)(ge, Ut),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (d.SendMsgNotifyTextFilterDictionaryChanged = S),
            (d.GetGameIDForPIDHandler = {
              name: "SteamEngine.GetGameIDForPID#1",
              request: pe,
              response: be,
            });
          function G(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((pr, ke) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      ke(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, v.I8)(pe, Ut),
                    be,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.GetGameIDForPID = G;
          function Be(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((pr, ke) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      ke(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, v.I8)(pe, Ut),
                    be,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (d.SendMsgGetGameIDForPID = Be),
            (d.SetOverlayEscapeKeyHandlingHandler = {
              name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
              request: ye,
            });
          function Fe(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultHandlerRegistry()),
              W == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : W.RegisterServiceNotificationHandler(
                    d.SetOverlayEscapeKeyHandlingHandler,
                    Ut,
                  )
            );
          }
          d.RegisterForSetOverlayEscapeKeyHandling = Fe;
          function Ae(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, v.I8)(ye, Ut),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.SetOverlayEscapeKeyHandling = Ae;
          function Se(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, v.I8)(ye, Ut),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (d.SendMsgSetOverlayEscapeKeyHandling = Se),
            (d.SearchAppDataCacheByStoreKeywordsHandler = {
              name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
              request: we,
              response: Me,
            });
          function Ve(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((pr, ke) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      ke(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, v.I8)(we, Ut),
                    Me,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.SearchAppDataCacheByStoreKeywords = Ve;
          function ai(Ut, W) {
            return (
              (W = W || (0, De.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((pr, ke) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      ke(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, v.I8)(we, Ut),
                    Me,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.SendMsgSearchAppDataCacheByStoreKeywords = ai;
        })(br || (br = {}));
        var ze = g(54963),
          Wi = g(15369),
          Lr = g(94354),
          li = g(57589);
        const ci = 0,
          Fi = 1,
          Ai = 2,
          Xn = 3;
        function Kn(d) {
          return "unknown EClientExecutionSite ( " + d + " )";
        }
        class ar extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ar.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new ar();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ar();
            return ar.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "WebUINoResponse";
          }
        }
        var Si = Object.defineProperty,
          Ni = Object.getOwnPropertyDescriptor,
          di = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ni(t, e) : t, u = d.length - 1, h;
              u >= 0;
              u--
            )
              (h = d[u]) && (a = (s ? h(t, e, a) : h(a)) || a);
            return s && a && Si(t, e, a), a;
          };
        class Rr {
          constructor() {
            (0, L.Gn)(this);
          }
          m_mapCallbacks = new Map();
          m_rgRegisteredEMsgs = [];
          m_mapServiceMethodHandlers = new Map();
          m_rgRegisteredServiceMethodHandlers = [];
          DispatchMsgToHandlers(t, e) {
            let s = t.GetEMsg();
            if (s == Lr.bSr) {
              let a = t.Hdr().target_job_name();
              if (a) {
                let u = this.m_mapServiceMethodHandlers.get(a);
                if (u) {
                  this.DEBUG_LogMessageDispatch(t, u[0]);
                  for (let h of u)
                    try {
                      h.invoke(t, e);
                    } catch (I) {
                      I instanceof Error
                        ? (0, Or.aj)().ReportError(I)
                        : console.error(
                            `MessageHandlers failed to dispatch message to handler (${a}): `,
                            I,
                          );
                    }
                  return !0;
                }
              }
            } else {
              let a = this.m_mapCallbacks.get(s);
              if (a) {
                this.DEBUG_LogMessageDispatch(t, a[0]);
                for (let u of a)
                  try {
                    u.invoke(t);
                  } catch (h) {
                    h instanceof Error
                      ? (0, Or.aj)().ReportError(h)
                      : console.error(
                          "MessageHandlers failed to dispatch message to handler: ",
                          h,
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
          AddCallback(t, e, s) {
            let a = this.m_mapCallbacks.get(t);
            return (
              a ||
                ((a = []),
                this.m_mapCallbacks.set(t, a),
                this.m_rgRegisteredEMsgs.push(t)),
              a.push({ invoke: s, msgClass: e }),
              {
                invoke: s,
                unregister: () => {
                  let u = this.m_mapCallbacks.get(t);
                  if (u)
                    for (let h = 0; h < u.length; h++)
                      u[h].invoke == s && (u.splice(h, 1), h--);
                },
              }
            );
          }
          AddServiceMethodHandler(t, e) {
            let s = (a, u) => {
              let h = v.w.InitFromMsg(t.request, a),
                I = v.w.Init(t.response, Lr.kHd),
                S = e(h, I),
                G = (Be) => {
                  I.Hdr().set_eresult(Be), u(I);
                };
              S instanceof Promise
                ? S.then(G).catch(() => {
                    G(q.zi);
                  })
                : G(S);
            };
            return (
              this.m_mapServiceMethodHandlers.has(t.name)
                ? console.error("Duplicate registration for method " + t.name)
                : (this.m_mapServiceMethodHandlers.set(t.name, [
                    { invoke: s, msgClass: t.request },
                  ]),
                  this.m_rgRegisteredServiceMethodHandlers.push(t.name)),
              {
                invoke: s,
                unregister: () => {
                  let a = this.m_mapServiceMethodHandlers.get(t.name);
                  if (a)
                    for (let u = 0; u < a.length; u++)
                      a[u].invoke == s && (a.splice(u, 1), u--);
                },
              }
            );
          }
          AddServiceNotificationHandler(t, e) {
            let s = (u, h) => {
                let I = v.w.InitFromMsg(t.request, u);
                e(I);
              },
              a = this.m_mapServiceMethodHandlers.get(t.name);
            return (
              a ||
                ((a = []),
                this.m_mapServiceMethodHandlers.set(t.name, a),
                this.m_rgRegisteredServiceMethodHandlers.push(t.name)),
              a.push({ invoke: s, msgClass: t.request }),
              {
                invoke: s,
                unregister: () => {
                  let u = this.m_mapServiceMethodHandlers.get(t.name);
                  if (u)
                    for (let h = 0; h < u.length; h++)
                      u[h].invoke == s && (u.splice(h, 1), h--);
                },
              }
            );
          }
          RegisterBaseEMessageHandler(t, e) {
            return this.AddCallback(t, void 0, e);
          }
          RegisterEMessageHandler(t, e, s) {
            return this.AddCallback(t, e, (a) => {
              s(v.w.InitFromMsg(e, a));
            });
          }
          RegisterEMessageAction(t, e, s) {
            return this.AddCallback(t, e, (a) => {
              (0, L.h5)(() => {
                s(v.w.InitFromMsg(e, a));
              });
            });
          }
          RegisterServiceNotificationHandler(t, e) {
            return this.AddServiceNotificationHandler(t, e);
          }
          RegisterServiceNotificationHandlerAction(t, e) {
            return this.AddServiceNotificationHandler(t, (s) => {
              let a;
              return (
                (0, L.h5)(() => {
                  a = e(s);
                }),
                a
              );
            });
          }
          RegisterServiceMethodHandler(t, e) {
            return this.AddServiceMethodHandler(t, e);
          }
          RegisterServiceMethodHandlerAction(t, e) {
            return this.AddServiceMethodHandler(t, (s, a) => {
              let u;
              return (
                (0, L.h5)(() => {
                  u = e(s, a);
                }),
                u
              );
            });
          }
        }
        di([L.sH], Rr.prototype, "m_rgRegisteredEMsgs", 2),
          di([L.sH], Rr.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
        class ue extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ue.prototype.auth_key || r.Sg(ue.M()),
              f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    auth_key: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
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
            let e = new (c().BinaryReader)(t),
              s = new ue();
            return ue.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ue.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ue.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Request";
          }
        }
        class Ze extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ze.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ze();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Ze();
            return Ze.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Response";
          }
        }
        class Qe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), f.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              s = new Qe();
            return Qe.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_StartShutdown_Notification";
          }
        }
        var Dr;
        ((d) => {
          d.AuthenticateHandler = {
            name: "TransportAuth.Authenticate#1",
            request: ue,
            response: Ze,
          };
          function t(h, I) {
            return (
              (I = I || (0, De.OI)().GetDefaultTransport()),
              I == null
                ? new Promise((S, G) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      G(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : I.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, v.I8)(ue, h),
                    Ze,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          d.Authenticate = t;
          function e(h, I) {
            return (
              (I = I || (0, De.OI)().GetDefaultTransport()),
              I == null
                ? new Promise((S, G) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      G(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : I.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, v.I8)(ue, h),
                    Ze,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          (d.SendMsgAuthenticate = e),
            (d.NotifyStartShutdownHandler = {
              name: "TransportAuth.NotifyStartShutdown#1",
              request: Qe,
            });
          function s(h, I) {
            return (
              (I = I || (0, De.OI)().GetDefaultHandlerRegistry()),
              I == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : I.RegisterServiceNotificationHandler(
                    d.NotifyStartShutdownHandler,
                    h,
                  )
            );
          }
          d.RegisterForNotifyStartShutdown = s;
          function a(h, I) {
            return (
              (I = I || (0, De.OI)().GetDefaultTransport()),
              I == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : I.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, v.I8)(Qe, h),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          d.NotifyStartShutdown = a;
          function u(h, I) {
            return (
              (I = I || (0, De.OI)().GetDefaultTransport()),
              I == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : I.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, v.I8)(Qe, h),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          d.SendMsgNotifyStartShutdown = u;
        })(Dr || (Dr = {}));
        var Ui = g(98609),
          Pi = g(13854),
          Ei = Object.defineProperty,
          Li = Object.getOwnPropertyDescriptor,
          Hr = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Li(t, e) : t, u = d.length - 1, h;
              u >= 0;
              u--
            )
              (h = d[u]) && (a = (s ? h(t, e, a) : h(a)) || a);
            return s && a && Ei(t, e, a), a;
          };
        class Wr {
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
            return (0, Pi.OQ)(t, 1, 5) * 1e3;
          }
          async ConnectWithRetry(t, e, s) {
            this.m_bConnecting = !0;
            let a = 0;
            do {
              try {
                const h = await this.ConnectToSocket(t, s);
                if (h.result == q.R) return (this.m_bConnecting = !1), h;
                this.Log.Warning(
                  `connect attempt failed: ${h.result} - ${h.message}`,
                );
              } catch (h) {
                this.Log.Warning(
                  `connect attempt failed: exception ${h.name} - ${h}`,
                );
              }
              const u = this.GetInterAttemptBackoffMs(a);
              this.Log.Info(`connect retry: attempt:${a}/${e} backoff:${u}`),
                await new Promise((h) => setTimeout(h, u)),
                (this.m_socket = null),
                (a += 1);
            } while (a < e);
            return (
              this.Log.Warning(
                `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
              ),
              (this.m_bConnecting = !1),
              this.BShouldReconnect() && this.StartReconnect(),
              { result: q.zi, message: "not ready, exceeded retry count" }
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
              (await this.Reconnect()).result != q.R)
            ) {
              this.Log.Warning("failed to re-connect to websocket after close"),
                this.m_fnOnReconnectFinishHandler({
                  connection: this,
                  eResult: q.zi,
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
                eResult: q.R,
              });
          }
          async ConnectToSocket(t, e) {
            if (this.m_socket != null)
              return this.m_socket.readyState != WebSocket.OPEN
                ? (this.Log.Error(
                    `websocket in an unexpected state: ${this.m_socket.readyState}`,
                  ),
                  { result: q.zi, message: "websocket in an unexpected state" })
                : { result: q.R, message: "ready" };
            try {
              this.m_socket = new WebSocket(t);
            } catch {
              return (
                this.Log.Warning("failed to initialize websocket connection"),
                {
                  result: q.iV,
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
                  { result: q.R, message: "ready" })
                : (this.Log.Warning("failed to reach open state"),
                  { result: q.zi, message: "failed to reach open state" })
            );
          }
          async WaitForSocketOpen(t, e) {
            if (t.readyState != WebSocket.CONNECTING)
              return t.readyState == WebSocket.OPEN;
            const s = 100;
            let a = e / s;
            for (; t.readyState == WebSocket.CONNECTING && a > 0; )
              a--, await new Promise((u) => setTimeout(u, s));
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
              return this.m_socket.send(t), q.R;
            } catch {
              return q.zi;
            }
          }
        }
        Hr([ze.oI], Wr.prototype, "OnSocketError", 1),
          Hr([ze.oI], Wr.prototype, "OnSocketOpen", 1),
          Hr([ze.oI], Wr.prototype, "OnSocketClose", 1),
          Hr([ze.oI], Wr.prototype, "OnSocketMessage", 1);
        var Hi = Object.defineProperty,
          ki = Object.getOwnPropertyDescriptor,
          Fr = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ki(t, e) : t, u = d.length - 1, h;
              u >= 0;
              u--
            )
              (h = d[u]) && (a = (s ? h(t, e, a) : h(a)) || a);
            return s && a && Hi(t, e, a), a;
          };
        const Xi = "localhost",
          Re = new li.wd("WebUITransport");
        class yr {
          m_iMsgSeq = 1;
          m_mapPendingMethodRequests = new Map();
          m_messageHandlers = new Rr();
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
            Re.Warning(t);
            const e = (0, Or.aj)();
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
                Fi,
                "steamUI",
                t.portSteamUI,
                t.authKeySteamUI,
              ),
              this.CreateConnection(
                Ai,
                "clientdll",
                t.portClientdll,
                t.authKeyClientdll,
              ),
              (0, De.OI)().SetDefaultTransport(this),
              (0, De.OI)().SetDefaultHandlerRegistry(this.m_messageHandlers),
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
          CreateConnection(t, e, s, a) {
            const u = {
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
              h = {
                connection: new Wr(e, u),
                sUrl: `ws://${Xi}:${s}/transportsocket/`,
                sAuthKey: a,
                eClientExecutionSite: t,
              };
            this.m_mapConnectionDetails.set(t, h);
          }
          SendMsg(t, e, s, a) {
            return new Promise((u, h) => {
              const I = a.eClientExecutionSite;
              if (I == null || I == ci) {
                Re.Error(`SendMsg: Invalid client execution site: ${I}`),
                  h(`Transport SendMsg: invalid client execution site ${I}`);
                return;
              }
              const S = this.m_mapConnectionDetails.get(I);
              if (S == null) {
                Re.Error(
                  `SendMsg: could not find connection for execution site: ${I}`,
                ),
                  h(
                    `Transport SendMsg: could not find connection for execution site ${I}`,
                  );
                return;
              }
              const G = S.connection;
              if (!G.BCanSendMessages()) {
                const Se = this.m_mapServiceCallErrorCount.get(t) ?? 1;
                this.m_mapServiceCallErrorCount.set(t, Se + 1);
                const Ve = `SendMsg: Attempt to send message but socket wasn't ready: ${G.name} - ${t}`;
                Se == 1 && this.ReportError(Ve),
                  Re.Warning(Ve + ` error count: ${Se}`),
                  h("Transport SendMsg: socket not ready");
                return;
              }
              const Be = this.m_iMsgSeq++;
              e.SetEMsg(Lr.bSr),
                e.Hdr().set_target_job_name(t),
                e.Hdr().set_jobid_source("" + Be);
              const Fe = e.Serialize();
              if (Fe.byteLength >= this.m_nMaximumMsgSizeBytes) {
                Re.Error(
                  `SendMsg: message exceeds maximum size: ${Fe.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
                );
                const Se = v.w.Init(s);
                Se.Hdr().set_eresult(q.zi), u(Se);
                return;
              }
              if (G.SendSerializedMessage(Fe) != q.R) {
                Re.Error("SendMsg: Failed to send message"),
                  h("Transport SendMsg: failed to send message");
                return;
              }
              this.m_mapPendingMethodRequests.set(Be, {
                m_iSeq: Be,
                m_responseClass: s,
                m_fnCallback: u,
                m_fnError: h,
              });
            });
          }
          SendNotification(t, e, s) {
            const a = s.eClientExecutionSite;
            if (a == null || a == ci)
              return (
                Re.Error(
                  `SendNotification: Invalid client execution site: ${a}`,
                ),
                !1
              );
            const u = this.m_mapConnectionDetails.get(a);
            if (u == null)
              return (
                Re.Error(
                  `SendNotification: could not find connection for execution site: ${a}`,
                ),
                !1
              );
            const h = u.connection;
            if (!h.BCanSendMessages()) {
              const S = this.m_mapServiceCallErrorCount.get(t) ?? 1;
              this.m_mapServiceCallErrorCount.set(t, S + 1);
              const G = `SendNotification: Attempt to send message but socket wasn't ready: ${h.name} - ${t}`;
              return (
                S == 1 && this.ReportError(G),
                Re.Warning(G + ` error count: ${S}`),
                !1
              );
            }
            return (
              e.SetEMsg(Lr.bSr),
              e.Hdr().set_target_job_name(t),
              h.SendSerializedMessage(e.Serialize()) == q.R
            );
          }
          async ConnectToSite(t) {
            const s = await t.connection.Connect(t.sUrl);
            return s.result != q.R
              ? s
              : (await this.SendAuthMessage(t)).BSuccess()
                ? { result: q.R, message: "connected" }
                : { result: q.zi, message: "client auth failed" };
          }
          async MakeReady() {
            const t = [];
            for (const [s, a] of this.m_mapConnectionDetails)
              t.push(this.ConnectToSite(a));
            const e = await Promise.all(t);
            (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
            for (const s of e) if (s.result != q.R) return s;
            return { result: q.R, message: "ready" };
          }
          GetConnectionDetails(t) {
            for (const [e, s] of this.m_mapConnectionDetails)
              if (s.connection === t) return s;
            return (
              Re.Error("GetConnectionDetails: failed to identify connection"),
              null
            );
          }
          DispatchTransportStatusUpdate() {
            if (!this.m_fnOnStatusEventHandler) return;
            let t = !0;
            for (const [e, s] of this.m_mapConnectionDetails)
              s.connection.BCanSendMessages() || (t = !1);
            this.m_fnOnStatusEventHandler({ bConnected: t });
          }
          OnWebsocketReconnectStart(t) {
            this.DispatchTransportStatusUpdate();
          }
          OnWebsocketReconnectFinish(t) {
            if ((this.DispatchTransportStatusUpdate(), t.eResult != q.R)) {
              Re.Warning(
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
            const e = new Wi.pV(t),
              s = v.w.InitHeaderFromPacket(e);
            s.Hdr().jobid_target() && s.Hdr().jobid_target() !== xr.kFb
              ? this.DispatchMethodResponse(s)
              : this.DispatchNotification(s);
          }
          DispatchMethodResponse(t) {
            const e = parseInt(t.Hdr().jobid_target()),
              s = this.m_mapPendingMethodRequests.get(e);
            if (s == null) {
              (0, Er.wT)(
                !1,
                "Transport Error: no pending callback for request",
              );
              return;
            }
            (0, Er.wT)(
              e == s.m_iSeq,
              "Transport Error: mistmatched request sequence",
            ),
              this.m_mapPendingMethodRequests.delete(e);
            const a = v.w.InitFromMsg(s.m_responseClass, t);
            s.m_fnCallback(a);
          }
          DispatchNotification(t) {
            const e = (s) => {
              (0, Er.wT)(
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
              let s = v.w.Init(e.m_responseClass);
              s.Hdr().set_eresult(q.zi), e.m_fnCallback(s);
            }
            this.m_mapPendingMethodRequests.clear();
          }
          async SendAuthMessage(t) {
            const e = Dr.AuthenticateHandler.name,
              s = { eClientExecutionSite: t.eClientExecutionSite },
              a = v.w.Init(ue);
            return (
              a.Hdr().set_webui_auth_key(t.sAuthKey),
              await this.SendMsg(e, a, Dr.AuthenticateHandler.response, s)
            );
          }
          OnStartShutdown(t) {
            for (const [e, s] of this.m_mapConnectionDetails)
              s.connection.PrepareForShutdown();
            return q.R;
          }
        }
        Fr([ze.oI], yr.prototype, "OnWebsocketReconnectStart", 1),
          Fr([ze.oI], yr.prototype, "OnWebsocketReconnectFinish", 1),
          Fr([ze.oI], yr.prototype, "OnWebsocketClose", 1),
          Fr([ze.oI], yr.prototype, "OnWebsocketMessage", 1),
          Fr([ze.oI], yr.prototype, "OnStartShutdown", 1);
        const Ki = new yr();
        var Yi = Object.defineProperty,
          Ji = Object.getOwnPropertyDescriptor,
          Te = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ji(t, e) : t, u = d.length - 1, h;
              u >= 0;
              u--
            )
              (h = d[u]) && (a = (s ? h(t, e, a) : h(a)) || a);
            return s && a && Yi(t, e, a), a;
          };
        function wr() {
          return N.TS.IN_MOBILE ? N.NQ : (0, N.xv)();
        }
        function $i(d) {
          if (d === "") return !1;
          try {
            return new RegExp("\\b(" + d + ")\\b", "ugi"), !0;
          } catch {
            return (
              console.log(
                `'${d}' is an invalid expression, removing from text filter`,
              ),
              !1
            );
          }
        }
        const Zi = 3600,
          Tr = "(1)";
        class Xe {
          m_WebUIServiceTransport;
          m_unAccountID;
          m_Transport = null;
          m_Storage = null;
          m_TextFilterPreferences = {
            eTextFilterSetting: Ue.Bx6.NS,
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
            (0, L.Gn)(this);
            let e = new Ue.B4H();
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: e.text_filter_setting(),
              bIgnoreFriends: e.text_filter_ignore_friends(),
            }),
              (this.m_TextFilterWords = new Ue.EyI()),
              (this.m_DataAccess = t);
          }
          async Init(t = 0, e = null, s = null) {
            (this.m_bInitialized = !1),
              (this.m_WebUIServiceTransport = Ki),
              (this.m_unAccountID = t),
              (this.m_Transport = e),
              (this.m_Storage = s),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              this.InitSteamEngineLanguages(),
              await this.LoadFilter(),
              await this.LoadTextFilterPreferences(),
              await this.LoadTextFilterWords(),
              await this.RequestUpdatedSettings(),
              await (0, L.z7)(() => !this.m_bOngoingLoad),
              await this.InitFiltersWithRetry();
          }
          InitSteamEngineLanguages() {
            this.m_WebUIServiceTransport.BIsValid() &&
              (this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
                br.NotifyTextFilterDictionaryChangedHandler,
                this.OnTextFilterDictionaryChanged,
              ),
              this.InitSteamEngineLanguage(N.TS.LANGUAGE),
              N.TS.LANGUAGE !== "english" &&
                this.InitSteamEngineLanguage("english"));
          }
          OnTextFilterDictionaryChanged(t) {
            return (
              this.m_bInitialized
                ? this.InitFiltersWithRetry()
                : (this.m_bFilterChangedWhileLoading = !0),
              q.R
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
            const e = v.w.Init(ce);
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
            const s = v.w.Init(de);
            return (
              s.Body().set_language(t),
              s.Body().set_type(e),
              br.SendMsgGetTextFilterDictionary(s, this.m_WebUIServiceTransport)
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
              return Qr.fromByteArray(e);
            } catch {
              return "";
            }
          }
          DeobfuscateString(t) {
            try {
              const e = Qr.toByteArray(t);
              let s = new TextDecoder().decode(e);
              return s.startsWith(Tr)
                ? ((s = s.slice(Tr.length)), s)
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
                this.m_TextFilterWords = Ue.EyI.fromObject(JSON.parse(t));
              } catch {
                console.warn("Error parsing cached text filter word list", t),
                  (this.m_TextFilterWords = new Ue.EyI());
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
            let t = new Ue.B4H();
            if (this.m_unAccountID !== 0)
              try {
                if (this.m_Transport) {
                  let e = v.w.Init(Ue.tzK);
                  t = (
                    await Ue.xtC.GetCommunityPreferences(this.m_Transport, e)
                  )
                    .Body()
                    .preferences();
                } else {
                  let e = { sessionid: (0, N.KC)(), origin: wr() };
                  const s = await O().get(
                    N.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: e, withCredentials: !0 },
                  );
                  t = Ue.B4H.fromObject(s.data.preferences);
                }
              } catch {}
            if (
              (this.UpdateCommunityPreferences(t),
              t.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let e = new Ue.EyI();
              if (t.text_filter_words_revision() !== 0)
                try {
                  if (this.m_Transport) {
                    let s = v.w.Init(Ue.SCE);
                    e = (await Ue.xtC.GetTextFilterWords(this.m_Transport, s))
                      .Body()
                      .words();
                  } else {
                    let s = { sessionid: (0, N.KC)(), origin: wr() };
                    const a = await O().get(
                      N.TS.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: s, withCredentials: !0 },
                    );
                    e = Ue.EyI.fromObject(a.data.words);
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
              await this.LoadLanguage(N.TS.LANGUAGE),
                N.TS.LANGUAGE !== "english" &&
                  (await this.LoadLanguage("english"));
            } catch (e) {
              this.m_nLoadLanguagesRetryTimeout &&
                ((0, Er.wT)(
                  !this.m_nLoadLanguagesRetryTimeout,
                  "Got two concurrent calls to TextFilteringStore.LoadLanguages",
                ),
                window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
                (this.m_nLoadLanguagesRetryTimeout = void 0)),
                (t = Math.min(t * 2, Zi)),
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
              s = "",
              a = !1;
            if (this.m_WebUIServiceTransport.BIsValid())
              try {
                {
                  const u = await this.GetSteamEngineTextFilterDictionary(
                    t,
                    "banned",
                  );
                  this.m_strBannedWords += u.Body().dictionary();
                }
                {
                  const u = await this.GetSteamEngineTextFilterDictionary(
                    t,
                    "profanity",
                  );
                  this.m_strProfanityWords += u.Body().dictionary();
                }
                a = !0;
              } catch (u) {
                console.warn(
                  "LoadLanguage caught while loading from cache:",
                  u,
                );
              }
            if (!a) {
              s = `${N.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${t}&v=${e}&origin=${wr()}`;
              {
                const u = await O().get(s);
                this.m_strBannedWords += u.data;
              }
              s = `${N.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${t}&v=${e}&origin=${wr()}`;
              {
                const u = await O().get(s);
                this.m_strProfanityWords += u.data;
              }
            }
            s = `${N.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${t}&v=${e}&origin=${wr()}`;
            {
              const u = await O().get(s);
              this.m_strCleanWords += u.data;
            }
          }
          CreatePattern(t) {
            let e = t.filter(function (s) {
              return $i(s);
            });
            return e.length > 0 ? "\\b(" + e.join("|") + ")\\b" : "";
          }
          OnFilterDataChanged() {
            let t = new RegExp(/\s*[\r\n]+\s*/g),
              e = [],
              s = [];
            switch (this.m_TextFilterPreferences.eTextFilterSetting) {
              case Ue.Bx6.C5:
                break;
              case Ue.Bx6.NS:
                break;
              case Ue.Bx6.bf:
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
              (s = this.m_strCleanWords.split(t)),
              (s = s.concat(
                this.m_TextFilterWords.text_filter_custom_clean_words(),
              ));
            let a = this.CreatePattern(e),
              u = this.CreatePattern(s);
            u != "" && (u = "^(" + u + ")$"),
              this.BRebuildFilter(a, u) && this.SaveFilter();
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
              } catch (s) {
                console.warn("Couldn't compile textfilter bannedwords regex"),
                  (0, Or.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter bannedwords regex: ${s}`,
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
              } catch (s) {
                console.warn("Couldn't compile textfilter cleanwords regex"),
                  (0, Or.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter cleanwords regex: ${s}`,
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
            let s = 0;
            return (
              typeof t == "string" && t !== ""
                ? (s = new vt.b(t).GetAccountID())
                : typeof t == "number" && (s = t),
              !e ||
              s == this.m_unAccountID ||
              (t &&
                this.m_TextFilterPreferences.bIgnoreFriends &&
                this.m_DataAccess.BIsFriend(s))
                ? e
                : e.replace(this.m_regexBannedWords, (a) =>
                    this.m_regexCleanWords &&
                    a.search(this.m_regexCleanWords) == 0
                      ? a
                      : this.CreateProfanityReplacement(a.length),
                  )
            );
          }
        }
        Te([L.sH], Xe.prototype, "m_TextFilterPreferences", 2),
          Te([L.sH], Xe.prototype, "m_mapPlayerCache", 2),
          Te([L.sH], Xe.prototype, "m_regexBannedWords", 2),
          Te([L.sH], Xe.prototype, "m_regexCleanWords", 2),
          Te([L.sH], Xe.prototype, "m_bInitialized", 2),
          Te([L.sH], Xe.prototype, "m_bFilterChangedWhileLoading", 2),
          Te([L.sH], Xe.prototype, "m_bOngoingLoad", 2),
          Te([L.XI], Xe.prototype, "Init", 1),
          Te([We.o], Xe.prototype, "OnTextFilterDictionaryChanged", 1),
          Te([L.XI], Xe.prototype, "UpdateCommunityPreferences", 1),
          Te([L.XI], Xe.prototype, "BRebuildFilter", 1);
        let Gr;
        function Qi() {
          if (!Gr) {
            const d = new Set();
            let t = { sessionid: (0, N.KC)(), origin: wr() };
            O()
              .get(N.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
                params: t,
                withCredentials: !0,
              })
              .then((e) => {
                for (const s of e.data.friendslist?.friends ?? [])
                  (0, xr.S$u)(s.efriendrelationship) &&
                    d.add(new vt.b(s.ulfriendid).GetAccountID());
              }),
              (Gr = (e) => d.has(e));
          }
          return Gr;
        }
        var Ri = Object.defineProperty,
          Ti = Object.getOwnPropertyDescriptor,
          _e = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ti(t, e) : t, u = d.length - 1, h;
              u >= 0;
              u--
            )
              (h = d[u]) && (a = (s ? h(t, e, a) : h(a)) || a);
            return s && a && Ri(t, e, a), a;
          };
        const Gi = 4,
          qi = 500,
          Vi = 10,
          ui = class Pr {
            m_mapChats = new Map();
            GetChat(t, e) {
              return this.m_mapChats.get(t) || this.m_mapChats.get(e);
            }
            GetOrCreateChat(t, e) {
              let s = this.GetChat(t, e);
              return s || ((s = new tr()), this.m_mapChats.set(t || e, s)), s;
            }
            static s_Singleton;
            static Get() {
              return (
                Pr.s_Singleton || (Pr.s_Singleton = new Pr()), Pr.s_Singleton
              );
            }
            constructor() {
              (0, L.Gn)(this);
            }
          };
        _e([L.sH], ui.prototype, "m_mapChats", 2);
        let mi = ui;
        class tr {
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
            (0, L.Gn)(this),
              (this.m_webAPIInterface = new Oe.D(
                N.TS.WEBAPI_BASE_URL,
                N.iA.webapi_token,
              ));
          }
          InitTextFilter() {
            this.m_textFilterStore = new Xe({ BIsFriend: Qi() });
            let t = 0;
            N.iA.steamid !== "" && (t = new vt.b(N.iA.steamid).GetAccountID()),
              this.m_textFilterStore.Init(t, null, new Bt.A());
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
            (this.m_webAPIInterface = new Oe.D(
              N.TS.WEBAPI_BASE_URL,
              N.iA.webapi_token,
            )),
              (this.m_ulBroadcastSteamID = t),
              (this.m_ulBroadcastID = e),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(t) {
            (this.m_webAPIInterface = new Oe.D(
              N.TS.WEBAPI_BASE_URL,
              N.iA.webapi_token,
            )),
              (this.m_ulBroadcastChannelID = t),
              (this.m_strUserSteamID = N.iA.steamid),
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
                let s, a, u;
                if (this.m_webApiToken) {
                  const h = new FormData();
                  h.append("chat_id", this.m_ulChatID),
                    h.append("message", e),
                    h.append("instance_id", this.m_unInstanceID.toString()),
                    (a = await O().post(
                      `${N.TS.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
                      h,
                    )),
                    (u = a.data && a.data.response);
                } else {
                  const h = v.w.Init(ct.Lw);
                  h.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    message: e,
                    instance_id: this.m_unInstanceID.toString(),
                  }),
                    (s = await ct.DK.PostChatMessage(
                      this.m_webAPIInterface.GetServiceTransport(),
                      h,
                    )),
                    (u = {
                      result: s.GetEResult(),
                      cooldown_time_seconds: s.Body().cooldown_time_seconds(),
                      in_game: s.Body().in_game(),
                      persona_name: s.Body().persona_name(),
                    });
                }
                if (u && u.result && u.result != q.R) {
                  let h = "";
                  u.result == q.f4
                    ? (h = (0, P.we)("#BroadcastChat_YouMuted"))
                    : u.result == q.h_
                      ? (h = (0, P.we)(
                          "#BroadcastChat_Cooldown",
                          u.cooldown_time_seconds,
                        ))
                      : (h = (0, P.we)("#BroadcastChat_FailedToSendMsg", e)),
                    this.m_rgChatMessages.push({
                      type: _.X8.Error,
                      msg: h,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: u.in_game,
                      persona_name: u.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = u.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: _.X8.Error,
                  msg: (0, P.we)("#BroadcastChat_FailedToSendMsg", e),
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
                  sessionid: (0, N.KC)(),
                },
                s = await O().get(
                  `${N.TS.CHAT_BASE_URL}broadcast/getchatinfo`,
                  { params: e, withCredentials: !0, cancelToken: t?.token },
                );
              (!t || !t.token.reason) &&
                (0, L.h5)(() => {
                  const a = s.data;
                  (this.m_strChatURL = a.view_url_template),
                    (this.m_ulChatID = a.chat_id),
                    (this.m_strFlairGroupID =
                      a.flair_group_ids && a.flair_group_ids[0]),
                    a.blocked && console.log("User is blocked from chat"),
                    a.steamid && (this.m_strUserSteamID = a.steamid),
                    a.token && (this.m_webApiToken = a.token),
                    a.emoticons && this.SetOwnedEmoticons(a.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: _.X8.Notification,
                        msg: (0, P.we)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    a.moderators_steamid &&
                      a.moderators_steamid.forEach((u) =>
                        this.m_mapBroadcastModeratorUsers.set(u, !0),
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
              const t = v.w.Init(F);
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
                  type: _.X8.Notification,
                  msg: (0, P.we)("#BroadcastChat_DefaultMessage"),
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
            const t = v.w.Init(at);
            t.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const s = (
                await cr.GetChatModerators(
                  this.m_webAPIInterface.GetServiceTransport(),
                  t,
                )
              )
                .Body()
                .results(),
              a = new Map();
            s.forEach((u) => {
              a.set(u.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = a);
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
              const a = (await O().get(e, { params: t })).data;
              this.m_cConsecutiveErrors = 0;
              const u = a.messages
                .map((S) => ({
                  ...S,
                  type: _.X8.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter((S) => !this.IsUserMutedLocally(S.steamid));
              this.m_rgChatMessages.push(...u),
                this.ReplaceChatAnnouncementIfAny(a);
              const h = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > h &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - h,
                  ),
                a.muted)
              )
                for (const S of a.muted) {
                  const G =
                    S.muted == this.m_strUserSteamID
                      ? (0, P.we)("#BroadcastChat_YouMuted", S.persona_name)
                      : (0, P.we)("#BroadcastChat_UserMuted", S.persona_name);
                  this.m_rgChatMessages.push({
                    type: _.X8.Notification,
                    msg: G,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (a.remove_msgs)
                for (const S of a.remove_msgs)
                  this.RemoveUserMessagesLocal(S.steamid);
              let I = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                a.initial_delay
              ) {
                if (a.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + a.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = a.next_request),
                  (I = a.initial_delay);
              } else {
                if (a.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  a.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = a.next_request),
                  (I =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = I),
                I < 0 && (I = 0),
                this.m_chatScheduledFunc.Schedule(I, this.RequestLoop);
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
                    type: _.X8.Error,
                    msg: (0, P.we)("#BroadcastChat_UnableToJoinChat"),
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
            for (let a = 0; a < t.length; a++) {
              let u = t[a];
              u.length >= 2 && u[0] == ":"
                ? e.push(u.substr(1, u.length - 2))
                : e.push(u);
            }
            let s = ":(" + e.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(s, "g");
          }
          async UpdateBroadcastChatModerator(t, e, s) {
            {
              const a = new FormData();
              a.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                a.append("moderatorsteamid", t),
                a.append("bAdd", e ? "1" : "0"),
                a.append("sessionid", (0, N.KC)());
              try {
                await O().post(
                  `${N.TS.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  a,
                ),
                  this.m_mapBroadcastModeratorUsers.set(t, e);
                const u = (0, P.we)(
                  e
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  s,
                );
                this.m_rgChatMessages.push({ type: _.X8.Notification, msg: u });
              } catch {
                const u = (0, P.we)(
                  e
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  s,
                );
                this.m_rgChatMessages.push({ type: _.X8.Error, msg: u });
              }
            }
          }
          async UpdateUserChatBan(t, e, s, a, u, h) {
            const I = this.m_ulBroadcastSteamID,
              S = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const G = v.w.Init(bt);
              G.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: t,
                duration: s * 3600,
                permanent: a,
                undo: h,
              }),
                await cr.AddChatBan(
                  this.m_webAPIInterface.GetServiceTransport(),
                  G,
                );
            } else {
              const G = new FormData();
              G.append("broadcaststeamid", I),
                G.append("issuersteamid", S),
                G.append("chattersteamid", t),
                G.append("bantype", e),
                G.append("duration", s.toString()),
                G.append("perm", a ? "1" : "0"),
                G.append("sessionid", (0, N.KC)());
              try {
                await O().post(
                  `${N.TS.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  G,
                ),
                  e == ct.sW.rx
                    ? delete this.m_mapMutedUsers[t]
                    : (this.m_mapMutedUsers[t] = u);
              } catch {
                console.log("Failed to update mute for " + u);
              }
            }
          }
          async MuteUserForSession(t, e) {
            if (t == this.m_strUserSteamID || this.m_ulBroadcastSteamID == t)
              return;
            let s = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[t]) {
              this.m_mapMutedUsers[t] = e;
              try {
                if (this.m_webApiToken) {
                  const a = new FormData();
                  a.append("chat_id", this.m_ulChatID),
                    a.append("user_steamid", t),
                    a.append("muted", "1"),
                    await O().post(
                      `${N.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      a,
                    );
                } else {
                  const a = v.w.Init(ct.hW);
                  a.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: t,
                    muted: !0,
                  }),
                    await ct.DK.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      a,
                    );
                }
              } catch {
                s &&
                  (this.m_rgChatMessages.push({
                    type: _.X8.Error,
                    msg: (0, P.we)("#BroadcastChat_UserMuteFailed", e),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[t]);
              }
            }
            s ||
              this.m_rgChatMessages.push({
                type: _.X8.Notification,
                msg: (0, P.we)("#BroadcastChat_UserMutedLocal", e),
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
                  const a = new FormData();
                  a.append("chat_id", this.m_ulChatID),
                    a.append("user_steamid", t),
                    a.append("muted", "0"),
                    await O().post(
                      `${N.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      a,
                    );
                } else {
                  const a = v.w.Init(ct.hW);
                  a.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: t,
                    muted: !1,
                  }),
                    await ct.DK.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      a,
                    );
                }
                this.m_rgChatMessages.push({
                  type: _.X8.Notification,
                  msg: (0, P.we)("#BroadcastChat_UserUnmutedLocal", e),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch {
                this.m_rgChatMessages.push({
                  type: _.X8.Error,
                  msg: (0, P.we)("#BroadcastChat_UserUnmuteFailed", e),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: _.X8.Notification,
                msg: (0, P.we)("#BroadcastChat_UserUnmutedLocal", e),
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
                  const s = new FormData();
                  s.append("chat_id", this.m_ulChatID),
                    s.append("user_steamid", t),
                    await O().post(
                      `${N.TS.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
                      s,
                    );
                } else {
                  const s = v.w.Init(ct.ku);
                  s.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: t,
                  }),
                    await ct.DK.RemoveUserChatText(
                      this.m_webAPIInterface.GetServiceTransport(),
                      s,
                    );
                }
              } catch {
                this.m_rgChatMessages.push({
                  type: _.X8.Error,
                  msg: (0, P.we)("#BroadcastChat_RemoveMessagesFailed", e),
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
                await O().post(
                  `${N.TS.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
                  e,
                );
            } else {
              const e = v.w.Init(ct.Mn);
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
        _e([L.sH], tr.prototype, "m_mapChannelModeratorUsers", 2),
          _e([L.sH], tr.prototype, "m_mapBroadcastModeratorUsers", 2),
          _e([L.sH], tr.prototype, "m_nRateLimitSeconds", 2),
          _e([L.sH], tr.prototype, "m_bRateLimited", 2),
          _e([L.sH], tr.prototype, "m_rgChatMessages", 2),
          _e([L.sH], tr.prototype, "m_latestAnnouncement", 2),
          _e([We.o], tr.prototype, "FetchChatModerators", 1),
          _e([We.o], tr.prototype, "RequestLoop", 1),
          _e([We.o], tr.prototype, "MuteUserForSession", 1);
        var qr = g(7582),
          fi = g(65804),
          Ci = Object.defineProperty,
          _i = Object.getOwnPropertyDescriptor,
          ts = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? _i(t, e) : t, u = d.length - 1, h;
              u >= 0;
              u--
            )
              (h = d[u]) && (a = (s ? h(t, e, a) : h(a)) || a);
            return s && a && Ci(t, e, a), a;
          };
        const hi = class $e {
          constructor() {
            (0, L.Gn)(this);
          }
          m_mapBroadcasterSteamIDToEvents = new Map();
          m_mapBroadcasterSteamIDData = new Map();
          static GetBBCodeParam(t, e, s = "") {
            const u = new RegExp(`\\W${e}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(t);
            return u ? u[1] : s;
          }
          static ParseCalendarEventPresentersFromText(t) {
            const e =
                /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
              s = new Array();
            for (;;) {
              const a = e.exec(t);
              if (a === null) break;
              const u = a[1],
                h = a[2],
                I = $e.GetBBCodeParam(u, "steamid"),
                S = {
                  steamID: I ? new vt.b(I) : void 0,
                  name: $e.GetBBCodeParam(u, "name"),
                  title: $e.GetBBCodeParam(u, "title"),
                  company: $e.GetBBCodeParam(u, "company"),
                  photo: $e.GetBBCodeParam(u, "photo"),
                  bio: h,
                };
              s.push(S);
            }
            return s;
          }
          static ParseEventModelPresenters(t, e) {
            const s = t.GetDescriptionWithFallback(e);
            return $e.ParseCalendarEventPresentersFromText(s);
          }
          static ParseEventAppReferencesFromText(t) {
            const e = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
              s = new Set();
            for (;;) {
              const a = e.exec(t);
              if (a === null) break;
              const u = a[1];
              s.add(Number(u));
            }
            return s;
          }
          static ParseEventModelAppReferences(t, e) {
            const s = t.GetDescriptionWithFallback(e),
              a = $e.ParseEventAppReferencesFromText(s);
            if (t.jsondata?.referenced_appids)
              for (const u of t.jsondata.referenced_appids) a.add(u);
            return a;
          }
          async BuildBroadcasterSteamIDToActiveEventMap(t) {
            const e = qr.HD.GetTimeNowWithOverride(),
              a = t.GetCalendarItemsInTimeRange(e - 3600, e);
            for (const S of a.rgCalendarItems)
              fi.O3.QueueLoadPartnerEvent(S.clanid, S.unique_id);
            const u = a.rgCalendarItems.map((S) =>
                fi.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  vt.b.InitFromClanID(S.clanid),
                  S.unique_id,
                  0,
                ),
              ),
              h = await Promise.all(u),
              I = new Map();
            for (const S of h)
              if (S && !(S.endTime && S.endTime < e))
                for (const G of S.GetBroadcastWhitelistAsSteamIDs())
                  I.has(G) ? I.get(G).push(S) : I.set(G, [S]);
            return I;
          }
          IsBroadcasterAlreadyBound(t, e) {
            const s = this.m_mapBroadcasterSteamIDToEvents.get(t),
              a = s ? s.length : 0;
            if ((e ? e.length : 0) != a) return !1;
            for (let h = 0; h < a; h++) if (s[h] != e[h].GID) return !1;
            return !0;
          }
          static BuildSteamIDToPresenterMapFromEventList(t, e) {
            let s = new Map();
            for (const a of t) {
              if (!a) continue;
              const u = $e.ParseEventModelPresenters(a, e);
              for (const h of u)
                h.steamID && s.set(h.steamID.ConvertTo64BitString(), h);
            }
            return s;
          }
          RemoveCachedDataIfNotInMap(t) {
            const e = new Array();
            this.m_mapBroadcasterSteamIDToEvents.forEach((s, a) => {
              t.has(a) || e.push(a);
            }),
              e.forEach((s) => {
                this.m_mapBroadcasterSteamIDData.delete(s),
                  this.m_mapBroadcasterSteamIDToEvents.delete(s);
              });
          }
          static BuildAppIDRefsForEventList(t, e) {
            const s = new Set();
            for (const a of t)
              $e.ParseEventModelAppReferences(a, e).forEach((h) => s.add(h));
            return Array.from(s);
          }
          UpdateCachedDataFromEvents(t, e) {
            t.forEach((s, a) => {
              if (this.IsBroadcasterAlreadyBound(a, s)) return;
              const u = {
                m_mapPresenters: $e.BuildSteamIDToPresenterMapFromEventList(
                  s,
                  e,
                ),
                m_rgAppIDs: $e.BuildAppIDRefsForEventList(s, e),
              };
              this.m_mapBroadcasterSteamIDData.set(a, u),
                this.m_mapBroadcasterSteamIDToEvents.set(
                  a,
                  s.map((h) => h.GID),
                );
            });
          }
          async SynchronizeEventsWithBroadcasts(t, e) {
            const s = await this.BuildBroadcasterSteamIDToActiveEventMap(t);
            this.RemoveCachedDataIfNotInMap(s),
              this.UpdateCachedDataFromEvents(s, e);
          }
          GetPresenterMapForBroadcasterSteamID(t) {
            return this.m_mapBroadcasterSteamIDData.get(t)?.m_mapPresenters;
          }
          GetAppIDListForBroadcasterSteamID(t) {
            return this.m_mapBroadcasterSteamIDData.get(t)?.m_rgAppIDs;
          }
        };
        ts([L.sH], hi.prototype, "m_mapBroadcasterSteamIDData", 2);
        let es = hi;
        const gi = new es();
        var rs = g(90024),
          ur = g.n(rs),
          Ge = g(99047),
          is = g(58534),
          ss = g(96197),
          pi = g(88656),
          Vr = g(88003),
          Cr = g(1317),
          ns = g(94276),
          as = g(8059),
          os = g(2801);
        function _r(d) {
          return (0, n.jsx)(Vr.x_, {
            onEscKeypress: d.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, n.jsx)(cs, {
              redirectURL: d.redirectURL,
              guestOption: d.guestOption,
            }),
          });
        }
        function Yn(d) {
          const { redirectURL: t = window.location.href } = d;
          return jsx(SimpleModal, {
            active: !0,
            children: jsx(_r, { redirectURL: t }),
          });
        }
        function ls() {
          (0, Vr.pg)(
            (0, n.jsx)(_r, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, P.we)("#Login_SignInTitle") },
          );
        }
        function Jn(d, t) {
          ShowModalDialog(
            jsx(_r, { ownerWin: window, redirectURL: d, guestOption: t }),
            window,
            { strTitle: Localize("#Login_SignInTitle") },
          );
        }
        function cs(d) {
          const { redirectURL: t, guestOption: e } = d,
            [s] = (0, lt.useState)(
              new Oe.D(N.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [a, u] = (0, lt.useState)(!1),
            h = (I) => {
              I == as.wI.k_PrimaryDomainFail
                ? u(!0)
                : window.location.assign(t);
            };
          return (0, n.jsx)("div", {
            children: a
              ? (0, n.jsx)(Cr.Fn, {})
              : (0, n.jsx)(Cr.YN, {
                  autoFocus: !0,
                  transport: s,
                  platform: ns.SS.tS,
                  onComplete: h,
                  redirectUrl: t,
                  theme: "modal",
                  children: e && (0, n.jsx)(Cr.Mk, { redirectURL: t }),
                }),
          });
        }
        var ds = g(44814),
          us = g(33543),
          kr = g.n(us);
        const ms = () =>
            (0, n.jsx)("div", {
              className: kr().FriendsListInsetShadowCtn,
              children: (0, n.jsx)("div", {
                className: kr().FriendListInsetShadowTop,
              }),
            }),
          fs = () =>
            (0, n.jsx)("div", {
              className: kr().FriendsListInsetShadowCtn,
              children: (0, n.jsx)("div", {
                className: kr().FriendListInsetShadowBottom,
              }),
            });
        var Ke = g(36118),
          Dt = g(36707),
          hs = g(63508),
          jt = g.n(hs),
          je = g(22950),
          bi = g(29630),
          gs = Object.defineProperty,
          ps = Object.getOwnPropertyDescriptor,
          Ye = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ps(t, e) : t, u = d.length - 1, h;
              u >= 0;
              u--
            )
              (h = d[u]) && (a = (s ? h(t, e, a) : h(a)) || a);
            return s && a && gs(t, e, a), a;
          };
        const mr = class Di {
          constructor() {
            (0, L.Gn)(this);
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
        Ye([L.sH], mr.prototype, "giveaway_id", 2),
          Ye([L.sH], mr.prototype, "seconds_until_drawing", 2),
          Ye([L.sH], mr.prototype, "rtime_start", 2),
          Ye([L.sH], mr.prototype, "rtime_end", 2),
          Ye([L.sH], mr.prototype, "closed", 2),
          Ye([L.sH], mr.prototype, "winner_count", 2);
        let ti = mr;
        const ei = class zr {
          constructor() {
            (0, L.Gn)(this);
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
            let s = N.TS.STORE_BASE_URL + "prizes/nextdraw/" + t,
              a = null,
              u = { origin: self.origin };
            return (
              (a = await O().get(s, { params: u })),
              (0, L.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(t) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(t, new ti()),
                  this.CopyToGiveaway(
                    a.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(t),
                  ),
                  e !== void 0)
                ) {
                  const h = this.GetKey(t, e);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(h) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      h,
                      new ti(),
                    ),
                    this.CopyToGiveaway(
                      a.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(h),
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
              zr.s_Singleton ||
                ((zr.s_Singleton = new zr()), zr.s_Singleton.Init()),
              zr.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let t = (0, N.Tc)("giveawaynextdraw", "application_config");
              if (t && t.giveaway_id) {
                let e = new ti();
                this.CopyToGiveaway(t, e),
                  this.m_mapGiveawayIDToNextDrawInfo.set(t.giveaway_id, e);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        Ye([L.sH], ei.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          Ye([L.XI], ei.prototype, "CopyToGiveaway", 1);
        let Ar = ei;
        const Sr = class oi {
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
              let s =
                t.seconds_until_drawing <= 0 && t.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(e, s);
            }
          }
          SetupCountDown(t, e) {
            t > 0 && (this.m_intervalCountDownID = window.setInterval(e, 1e3));
          }
        };
        Ye([We.o], Sr.prototype, "ClearRefreshInterval", 1),
          Ye([We.o], Sr.prototype, "ClearCountDown", 1),
          Ye([We.o], Sr.prototype, "SetupRefreshDataInterval", 1),
          Ye([We.o], Sr.prototype, "SetupCountDown", 1);
        let bs = Sr;
        function yi(d, t) {
          const e = Ar.Get().GetInfoByInstance(d, t.m_myInstanceNumber);
          (e.seconds_until_drawing -= 1),
            e.seconds_until_drawing == 0 && t.ClearCountDown();
        }
        function ys(d, t) {
          const e = Ar.Get().GetInfoByInstance(d, t.m_myInstanceNumber);
          e &&
            e.BIsValid() &&
            e.seconds_until_drawing <= 0 &&
            !e.closed &&
            (t.ClearCountDown(),
            Ar.Get()
              .ReloadGiveaway(d, t.m_myInstanceNumber)
              .then((s) => {
                t.SetupCountDown(s.seconds_until_drawing, () => yi(d, t));
              }));
        }
        function ws(d) {
          const [t] = (0, lt.useState)(new bs()),
            e = (0, ze.CH)();
          (0, lt.useEffect)(
            () => (
              Ar.Get()
                .ReloadGiveaway(d, t.m_myInstanceNumber)
                .then((I) => {
                  t.SetupRefreshDataInterval(I, () => ys(d, t)),
                    t.SetupCountDown(I.seconds_until_drawing, () => yi(d, t)),
                    e();
                }),
              () => {
                t.ClearRefreshInterval(), t.ClearCountDown();
              }
            ),
            [t, d, e],
          );
          const s = Ar.Get().GetInfoByInstance(d, t.m_myInstanceNumber),
            [a, u, h] = (0, kt.q3)(() => [
              s?.winner_count,
              s?.closed,
              s?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !s || s.giveaway_id == null || !s.BStarted() || a === void 0,
            winner_count: a,
            closed: u,
            seconds_until_drawing: h,
          };
        }
        var Ms = g(11587),
          Xr = g(53107),
          wi = g(53113),
          Bs = g(8287),
          He = g.n(Bs);
        function vs(d) {
          const { latestAnnouncement: t } = d;
          return t?.type == "giveaway_draw"
            ? (0, n.jsx)(Mi, { latestWinner: t })
            : null;
        }
        function Mi(d) {
          const {
              latestWinner: t,
              className: e,
              strActionButton: s,
              strActionClassname: a,
            } = d,
            u = t.winners_info?.length > 0 ? t.winners_info[0].accountid : 0,
            [h, I] = lt.useState(u),
            S =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            G = (0, wi.L$)(
              `${bi.zU.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            Be = (0, wi.L$)(
              `${bi.zU.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            ),
            Fe = ws(t.giveaway_gid);
          let Ae =
            Fe.bLoadingGiveawayInfo || Fe.closed
              ? null
              : Fe.seconds_until_drawing;
          const Se = u === N.iA.accountid;
          lt.useEffect(() => {
            h != u && setTimeout(() => I(u), 1500);
          }, [u, h]);
          const Ve =
            t.winners_info?.length > 0 && t.winners_info[0].persona
              ? t.winners_info[0].persona
              : (0, P.we)("#GA2022_UnknownPersonaName");
          return (0, n.jsx)(Xr.uU, {
            href: S,
            className: e,
            children: (0, n.jsxs)("div", {
              className: (0, Dt.A)({
                [He().GiveawayWinnerBox]: !0,
                [He().GiveawayWinnerAnnounced]: h === u,
              }),
              children: [
                (0, n.jsx)("div", {
                  className: He().GiveawayWinnerBoxLeft,
                  children: (0, n.jsx)("img", {
                    className: He().GiveawayWinnerArt,
                    src: G,
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: He().GiveawayWinnerBoxRight,
                  children: [
                    h !== u &&
                      (0, n.jsx)("div", {
                        className: (0, Dt.A)(He().GiveawayWinnerText),
                        children: (0, P.PP)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, n.jsx)("br", {}),
                        ),
                      }),
                    h === u &&
                      (0, n.jsx)("div", {
                        className: (0, Dt.A)(
                          He().GiveawayWinnerText,
                          He().GiveawayWinnerAnnounced,
                        ),
                        children: (0, P.PP)(
                          Se
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          Ve,
                          (0, n.jsx)("br", {}),
                        ),
                      }),
                    Ae > 0 &&
                      (0, n.jsx)("div", {
                        className: He().GiveawayWinnerCountdown,
                        children: (0, P.PP)("#GA2022_Congrats_NextDraw", Ae),
                      }),
                  ],
                }),
                (0, n.jsx)("img", {
                  className: He().GiveawayWinnerQuestion,
                  src: Be,
                }),
                !!s &&
                  (0, n.jsx)("div", {
                    className: a,
                    children: Se ? (0, P.we)("#GA2022_YouWonNextSteps") : s,
                  }),
              ],
            }),
          });
        }
        function Is(d, t) {
          const [e, s] = (0, kt.q3)(() => [
              t?.steamid,
              je.es.GetBroadcast(t?.steamid)?.m_ulBroadcastID,
            ]),
            [a, u] = lt.useState(null);
          lt.useEffect(() => {
            let I = null;
            return (
              (e || s) &&
                ((I = mi.Get().GetOrCreateChat(s, e)),
                I.StartForSteamID(e, s),
                u(I)),
              () => {
                I && (I.Stop(), u(null));
              }
            );
          }, [e, s]);
          const h = (0, kt.q3)(() => a?.m_latestAnnouncement || null);
          if (h?.type == "giveaway_draw") {
            const I = h;
            if (I.giveaway_gid == d) return I;
          }
          return null;
        }
        function zs(d) {
          const { gidGiveaway: t, stream: e } = d,
            s = Is(t, e),
            a = (0, Ms.h3)("GameAwardDrop2022");
          let u = null,
            h = He().GiveawayRegisterButton;
          return (
            N.iA.logged_in
              ? a?.registered
                ? ((u = (0, P.we)("#GA2022_AlreadyRegistered")),
                  (h = He().GiveawayAlreadyRegistered))
                : (u = (0, P.we)("#GA2022_RegisterToWin"))
              : (u = (0, P.we)("#GA2022_RegisterLoginToWin")),
            s
              ? (0, n.jsx)(Mi, {
                  latestWinner: s,
                  className: He().InViewerBar,
                  strActionButton: u,
                  strActionClassname: h,
                })
              : null
          );
        }
        var Je = g(71421),
          js = Object.defineProperty,
          xs = Object.getOwnPropertyDescriptor,
          Mr = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? xs(t, e) : t, u = d.length - 1, h;
              u >= 0;
              u--
            )
              (h = d[u]) && (a = (s ? h(t, e, a) : h(a)) || a);
            return s && a && js(t, e, a), a;
          };
        const Bi = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          $n = null,
          Os = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function Ds(d, t, e) {
          return e
            ? "presenter"
            : t.GetBroadcastSteamID() === d
              ? "broadcaster"
              : t.BIsUserBroadcastModerator(d)
                ? "moderator"
                : "";
        }
        const Ws = (d) => {
            const { userType: t, msg: e, presenterInfo: s } = d;
            if (t === "presenter")
              return (0, n.jsx)("span", {
                children: (0, n.jsx)(ds.fI, {
                  name: s.name,
                  title: s.title,
                  photo: s.photo,
                  company: s.company,
                  bioString: s.bio,
                  children: (0, n.jsx)("a", {
                    className: (0, Dt.A)(
                      jt().MessageName,
                      jt().MessagePresenter,
                    ),
                    href: N.TS.COMMUNITY_BASE_URL + "profiles/" + e.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: e.persona_name,
                  }),
                }),
              });
            {
              let a = null;
              return (
                t === "broadcaster"
                  ? (a = jt().MessageBroadcaster)
                  : t === "moderator" && (a = jt().MessageModerator),
                (0, n.jsx)("span", {
                  children: (0, n.jsx)("a", {
                    className: (0, Dt.A)(jt().MessageName, a),
                    href: N.TS.COMMUNITY_BASE_URL + "profiles/" + e.steamid,
                    "data-miniprofile": "s" + e.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: e.persona_name,
                  }),
                })
              );
            }
          },
          Fs = (d) => {
            switch (d.userType) {
              case "presenter":
                return (0, n.jsx)(Je.Gq, {
                  toolTipContent: (0, P.we)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, n.jsx)("span", {
                    className: jt().RoleFlairContainer,
                    children: (0, n.jsx)(Ke.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, n.jsx)(Je.Gq, {
                  toolTipContent: (0, P.we)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, n.jsx)("span", {
                    className: jt().RoleFlairContainer,
                    children: (0, n.jsx)(Ke.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, n.jsx)(Je.Gq, {
                  toolTipContent: (0, P.we)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, n.jsx)("span", {
                    className: jt().RoleFlairContainer,
                    children: (0, n.jsx)(Ke.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let or = class extends lt.Component {
          constructor(d) {
            super(d), (0, L.Gn)(this);
          }
          m_chat = null;
          messagesContainer = lt.createRef();
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(d) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== d.steamID ||
                this.props.broadcastID !== d.broadcastID ||
                this.props.broadcastChannelID !== d.broadcastChannelID) &&
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
              let d = this.props.broadcastID || "0";
              this.m_chat.StartForSteamID(this.props.steamID, d),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(d) {
            return !!d.match(Os);
          }
          AddLinksEmoticons(d, t) {
            let e = Bi;
            t && (e = this.m_chat.GetUserEmoticons());
            let s = d.split(Bi);
            const a = [];
            for (let u = 0; u < s.length; u += 1)
              u % 2 === 1
                ? a.push((0, n.jsx)(ss.n, { emoticon: s[u], large: !0 }, u))
                : a.push(s[u]);
            return a;
          }
          HandleScroll(d) {
            const t = this.props.bInvertLayout
              ? d.currentTarget.scrollTop < 6
              : d.currentTarget.scrollTop + d.currentTarget.clientHeight >=
                d.currentTarget.scrollHeight - 6;
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
          OnContextMenu(d, t) {
            if (t.type !== _.X8.Chat) return null;
            const e = [],
              s = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
              a = this.m_chat.BIsUserBroadcastModerator(
                this.m_chat.GetUserSteamID(),
              );
            return (
              (N.iA && N.iA.is_support) || s || a
                ? e.push(
                    (0, n.jsx)(
                      Ge.kt,
                      {
                        onSelected: () =>
                          this.m_chat.RemoveUserMessagesServer(
                            t.steamid,
                            t.persona_name,
                          ),
                        children: (0, P.we)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, n.jsx)(
                      Ge.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            ct.sW.XP,
                            12,
                            !1,
                            t.persona_name,
                          ),
                        children: (0, P.we)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, n.jsx)(
                      Ge.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            ct.sW.XP,
                            24,
                            !1,
                            t.persona_name,
                          ),
                        children: (0, P.we)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, n.jsx)(
                      Ge.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            ct.sW.XP,
                            168,
                            !1,
                            t.persona_name,
                          ),
                        children: (0, P.we)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, n.jsx)(
                      Ge.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            ct.sW.XP,
                            0,
                            !0,
                            t.persona_name,
                          ),
                        children: (0, P.we)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, n.jsx)(
                      Ge.kt,
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
                        children: (0, P.we)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : this.m_chat.IsUserMutedLocally(t.steamid)
                  ? e.push(
                      (0, n.jsx)(
                        Ge.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UnmuteUserForSession(
                              t.steamid,
                              t.persona_name,
                            ),
                          children: (0, P.we)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : e.push(
                      (0, n.jsx)(
                        Ge.kt,
                        {
                          onSelected: () =>
                            this.m_chat.MuteUserForSession(
                              t.steamid,
                              t.persona_name,
                            ),
                          children: (0, P.we)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((N.iA && N.iA.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                t.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(t.steamid)
                  ? e.push(
                      (0, n.jsx)(
                        Ge.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !1,
                              t.persona_name,
                            ),
                          children: (0, P.we)(
                            "#BroadcastChat_Remove_Moderator",
                          ),
                        },
                        "removemod",
                      ),
                    )
                  : e.push(
                      (0, n.jsx)(
                        Ge.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !0,
                              t.persona_name,
                            ),
                          children: (0, P.we)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              e.length
                ? (0, rt.lX)(
                    (0, n.jsxs)(Ge.tz, {
                      children: [
                        (0, n.jsxs)("div", {
                          className: jt().SelectedUserNameCtn,
                          children: [
                            (0, P.we)("#BroadcastChat_User"),
                            (0, n.jsx)("br", {}),
                            (0, n.jsx)("span", {
                              className: jt().SelectedUserName,
                              children: t.persona_name,
                            }),
                          ],
                        }),
                        e,
                      ],
                    }),
                    d,
                  )
                : null
            );
          }
          GetTypeClassName(d) {
            return d.type === _.X8.Notification
              ? jt().MessageNotification
              : d.type === _.X8.Error
                ? jt().MessageError
                : jt().MessageChat;
          }
          FormatMessage(d, t) {
            if (d.type === _.X8.Chat) {
              let e = t ? t.FilterText(d.steamid, d.msg) : d.msg;
              return this.AddLinksEmoticons(e, !1);
            } else return d.msg;
          }
          RenderUserChatLine(d, t, e) {
            let s = e ? e.get(d.steamid) : void 0;
            const a = d.type === _.X8.Chat ? Ds(d.steamid, this.m_chat, s) : "";
            return (0, n.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(d),
                onContextMenu: (u) => this.OnContextMenu(u, d),
                children: [
                  d.type === _.X8.Chat && (0, n.jsx)(Fs, { userType: a }),
                  d.flair &&
                    (0, n.jsx)("span", {
                      className: jt().FlairContainer,
                      children: this.AddLinksEmoticons(d.flair, !1),
                    }),
                  d.type === _.X8.Chat &&
                    (0, n.jsx)(Ws, { userType: a, msg: d, presenterInfo: s }),
                  d.type === _.X8.Chat &&
                    this.m_chat.GetBroadcastSteamID() === d.steamid &&
                    (0, n.jsx)("span", {
                      className: `${jt().MessageNotification} ${jt().MessageContents}`,
                      children: ` (${(0, P.we)("#BroadcastChat_Broadcaster")})`,
                    }),
                  d.type === _.X8.Chat &&
                    this.m_chat.m_mapChannelModeratorUsers.get(d.steamid) &&
                    (0, n.jsx)("span", {
                      className: `${jt().MessageNotification} ${jt().MessageContents}`,
                      children: ` (${(0, P.we)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, n.jsxs)("span", {
                    className: `${jt().MessageContents} ${this.AddLinksEmoticons(d.msg, !1).filter((u) => u && typeof u == "string").length ? "" : jt().EmoticonsOnly}`,
                    children: [
                      d.type === _.X8.Chat ? " : " : "",
                      this.FormatMessage(d, this.m_chat.TextFilterStore),
                    ],
                  }),
                ],
              },
              d.instance_id + "_" + d.client_ts + "_" + t,
            );
          }
          render() {
            const {
                hidden: d,
                bPartnerMemberOnlyChat: t,
                bInvertLayout: e,
              } = this.props,
              s = this.m_chat ? this.m_chat.m_rgChatMessages : [],
              a = e ? s.reverse() : s,
              u = this.m_chat
                ? gi.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              h = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, n.jsxs)("div", {
              className: (0, Dt.A)(jt().ChatPanel, "ChatPanel"),
              style: d ? { display: "none" } : void 0,
              children: [
                (0, n.jsx)(vs, { latestAnnouncement: h }),
                e &&
                  !!this.m_chat &&
                  (0, n.jsx)(vi, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: t,
                  }),
                (0, n.jsx)(ms, {}),
                (0, n.jsx)("div", {
                  className: (0, Dt.A)(
                    `${jt().ChatMessages} ${ur().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children: a.map((I, S) => this.RenderUserChatLine(I, S, u)),
                }),
                (0, n.jsx)(fs, {}),
                !e &&
                  !!this.m_chat &&
                  (0, n.jsx)(vi, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: t,
                  }),
              ],
            });
          }
        };
        Mr([L.sH], or.prototype, "m_chat", 2),
          Mr([ze.oI], or.prototype, "StartChat", 1),
          Mr([ze.oI], or.prototype, "HandleScroll", 1),
          Mr([ze.oI], or.prototype, "OnContextMenu", 1),
          Mr([ze.oI], or.prototype, "RenderUserChatLine", 1),
          (or = Mr([H.PA], or));
        function vi(d) {
          const { oChat: t, emoticonStore: e, bPartnerMemberOnlyChat: s } = d;
          return s && (!N.iA?.logged_in || !N.iA?.is_partner_member)
            ? (0, n.jsx)(Us, {})
            : N.iA?.logged_in
              ? (0, n.jsx)(As, { oChat: t, emoticonStore: e })
              : null;
        }
        function As(d) {
          const { oChat: t, emoticonStore: e } = d,
            [s, a] = lt.useState(""),
            u = lt.useRef(void 0),
            h = (0, kt.q3)(() => t.m_bRateLimited),
            I = lt.useCallback(
              (Ae) => {
                !Ae.shiftKey &&
                  Ae.charCode === 13 &&
                  (t.m_bRateLimited || (t.SendMessage(s), a("")),
                  Ae.preventDefault());
              },
              [t, s],
            ),
            S = lt.useCallback(
              (Ae, Se = !1) => {
                a(s + `\u02D0${Ae}\u02D0`), u?.current && u.current.focus();
              },
              [s, u],
            ),
            G = () => {
              t.SendMessage(s), a("");
            };
          let Be = h || s.trim().length == 0,
            Fe = (0, Dt.A)(
              ur().chatSubmitButton,
              s.length == 0 && ur().disabled,
            );
          return (0, n.jsx)("div", {
            className: (0, Dt.A)(jt().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, n.jsxs)("div", {
              className: (0, Dt.A)(jt().ChatEntry, "ChatEntry"),
              children: [
                (0, n.jsxs)("form", {
                  className: `${ur().chatEntryControls}`,
                  children: [
                    (0, n.jsx)("textarea", {
                      className: ur().chatTextarea,
                      placeholder: (0, P.we)("#BroadcastChat_EnterResponse"),
                      onKeyPress: I,
                      onChange: (Ae) => a(Ae.target.value),
                      value: s,
                      ref: u,
                    }),
                    h &&
                      (0, n.jsx)(Ns, {
                        nSeconds: t.m_nRateLimitSeconds,
                        bRateLimited: t.m_bRateLimited,
                      }),
                    (0, n.jsx)("button", {
                      className: Fe,
                      title: (0, P.we)("#ChatEntryButton_Submit"),
                      disabled: Be,
                      onClick: G,
                      children: (0, n.jsx)(Ke.XTb, {}),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  style: { height: "50px" },
                  className: `${ur().chatEntryActionsContainer}`,
                  children: (0, n.jsxs)("div", {
                    className: ur().chatEntryActionsGroup,
                    children: [
                      (0, n.jsx)(pi.A, {
                        disabled: !1,
                        OnEmoticonSelected: S,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: e,
                      }),
                      (0, n.jsx)(Ss, { ...d, textInputRef: u }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function Ss(d) {
          const { oChat: t, emoticonStore: e, textInputRef: s } = d;
          return t.m_strFlairGroupID &&
            e.flair_list &&
            e.GetFlairListByGroupID(t.m_strFlairGroupID)?.length
            ? (0, n.jsx)(pi.A, {
                disabled: !1,
                OnEmoticonSelected: (a) => {
                  t.UpdateChatMessageFlair(a), s?.current && s.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: e,
                strFlairGroupID: t.m_strFlairGroupID,
                title: (0, P.we)("#ChatEntryButton_Flair"),
                buttonIcon: (0, n.jsx)(Ke.P7r, {}),
              })
            : null;
        }
        class Ns extends lt.Component {
          render() {
            return (0, n.jsx)("div", {
              className: jt().TimedProgressBarContainer,
              children: (0, n.jsxs)("div", {
                className: jt().wrapper,
                children: [
                  (0, n.jsx)("div", {
                    className: `${jt().spinner} ${jt().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, n.jsx)("div", {
                    className: `${jt().filler} ${jt().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, n.jsx)("div", {
                    className: jt().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function Us(d) {
          return (0, n.jsxs)("div", {
            className: jt().Description,
            children: [
              (0, n.jsx)("div", {
                className: jt().LogInPrompt,
                children: (0, P.we)("#Broadcast_PartnerChat_Login"),
              }),
              !N.iA.logged_in &&
                (0, n.jsx)(is.$n, {
                  onClick: ls,
                  className: (0, Dt.A)(jt().SignInButton),
                  children: (0, P.we)("#Login_SignIn"),
                }),
            ],
          });
        }
        var Ps = g(73110),
          Es = g(83482),
          Ls = g(3367),
          Hs = g(84676),
          Kr = g(76532),
          Yr = g(95414),
          ks = g(4705),
          Xs = g(72865),
          Ks = g(85599),
          Ys = g(43087),
          ri = g.n(Ys),
          ii = g(29522),
          Br = g(40358),
          Js = g(47875),
          Ii = g(21721),
          $s = g(3348);
        const Zs = (0, H.PA)((d) => {
          const { appid: t } = d,
            e = (0, Xs.n9)(),
            s = (0, lt.useRef)({ include_assets: !0, include_release: !0 }),
            a = (0, ii.$5)(t),
            { data: u } = (0, Br.J$)(a),
            { data: h } = (0, Br.lv)(a),
            { data: I } = (0, Br.by)(a),
            [S, G] = (0, Hs.t7)(t, s.current);
          let Be = (0, Dt.A)(
              ri().StoreSaleWidgetContainer_mini,
              "StoreSaleWidgetContainer_mini",
            ),
            Fe = ri().StoreSaleWidgetImage_mini,
            Ae = ri().StoreSaleImage_mini;
          if (u == null)
            return (0, n.jsx)("div", {
              className: Be,
              children: (0, n.jsx)(Ks.t, { size: "medium" }),
            });
          if (u == null || !u.name)
            return (0, n.jsx)("div", {
              className: Kr.StoreSaleWidgetEmptyContainer,
            });
          const Se = u.type != Ls.uE.gQ,
            Ve = (0, Es.wJ)((0, Js._)(u), e);
          return (0, n.jsxs)("div", {
            className: Be,
            children: [
              (0, n.jsx)("a", {
                href: Ve,
                target: N.TS.IN_CLIENT ? void 0 : "_blank",
                children: (0, n.jsx)(Yr.j, {
                  id: a,
                  children: (0, n.jsx)("div", {
                    className: Fe,
                    children:
                      h &&
                      (0, n.jsx)("img", {
                        className: Ae,
                        src: (0, Ii.b0)(h, "small_capsule"),
                        alt: u.name,
                      }),
                  }),
                }),
              }),
              (0, n.jsxs)("div", {
                className: Kr.StoreSaleBroadcastWidgetRight,
                children: [
                  (0, n.jsx)("a", {
                    href: Ve,
                    target: N.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, n.jsx)(Yr.j, {
                      id: a,
                      children: (0, n.jsx)("div", {
                        className: (0, Dt.A)(
                          Kr.StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                        children: u.name,
                      }),
                    }),
                  }),
                  I &&
                    (0, n.jsx)("div", {
                      className: Kr.StoreSaleWidgetRelease,
                      children: (0, $s.CC)(I),
                    }),
                  !!Se && (0, n.jsx)(ks.w, { id: a, bShowDemoButton: !0 }),
                ],
              }),
            ],
          });
        });
        function vr() {
          let d = window.GetUsabilityTracker;
          if (d) return d();
        }
        var fr = g(61639),
          si = g(32288),
          Jr = g(10142),
          Qs = g(28462),
          $r = g(34592),
          ir = g(34032),
          Rs = Object.defineProperty,
          Ts = Object.getOwnPropertyDescriptor,
          sr = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ts(t, e) : t, u = d.length - 1, h;
              u >= 0;
              u--
            )
              (h = d[u]) && (a = (s ? h(t, e, a) : h(a)) || a);
            return s && a && Rs(t, e, a), a;
          };
        let Gs = !1;
        function ni(d) {
          return !!(d && d.thumbnail_http_address);
        }
        function Zn(d, t) {
          if (t || d) {
            const e = t || d;
            return !!(e && xe.Get().BIsAppStreaming(e));
          }
          return !1;
        }
        const er = class jr {
          constructor() {
            (0, L.Gn)(this);
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
          AddCallbackOnNewContext(t, e, s) {
            this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(t), {
              name: e,
              fnCallback: s,
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
            return e ? e.filter((s) => ni(s)).length : 0;
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
              this.m_lookupStreams.forEach((e, s) => {
                console.log(s, e.length);
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
                ? (e = new vt.b(t.steamid))
                : (e = vt.b.InitFromAccountID(t.accountid)),
              N.TS.COMMUNITY_BASE_URL +
                "broadcast/watch/" +
                e.ConvertTo64BitString()
            );
          }
          BIsAppStreaming(t) {
            let e = !1;
            return (
              this.m_lookupStreams.forEach((s) => {
                e ||
                  (e =
                    !!s &&
                    s.some(
                      (a) =>
                        je.es.GetOrCreateBroadcastInfo(a.steamid).m_nAppID ===
                        t,
                    ));
              }),
              e
            );
          }
          GetStreamsForAppID(t) {
            const e = new Array();
            return (
              this.m_lookupStreams.forEach((s) => {
                s?.forEach((a) => {
                  je.es.GetOrCreateBroadcastInfo(a.steamid).m_nAppID === t &&
                    e.push(a);
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
              let e = (0, N.Tc)("broadcastuser", "application_config");
              if (!e)
                try {
                  let s =
                    N.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences";
                  e = (await O().get(s, { params: {}, cancelToken: t.token }))
                    .data;
                } catch (s) {
                  console.log(
                    "LoadBIsEmbeddedBroadcastHidden: " +
                      (0, $r.H)(s).strErrorMsg,
                  ),
                    (e = { bHideStoreBroadcast: !1 });
                }
              (0, L.h5)(() => {
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
              await Jr.A.Get().QueueAppRequest(t.nAppIDVOD, {
                include_assets: !0,
                include_trailers: !0,
              });
            const s = Jr.A.Get().GetApp(t.nAppIDVOD),
              a = new ir.TT();
            if (
              ((a.accountid = 0),
              (a.nAppIDVOD = t.nAppIDVOD),
              (a.default_selection_priority = ir.mY.k_ePrimary),
              (a.current_selection_priority = ir.mY.k_ePrimary),
              (a.thumbnail_http_address = s?.GetAssets().GetHeaderURL() || ""),
              (a.title = s?.GetName() || ""),
              this.GetStreams(t).unshift(a),
              e)
            ) {
              const u = this.GetStreamsLookupKeyFromDef(t);
              this.m_playReadyStream.set(u, a);
            }
          }
          async HintLoadEmbeddablePreviewStreams(t) {
            let e = null,
              s = {
                eventid: t.event ? t.event.GID : void 0,
                previewAccounts:
                  t.bIsPreview && t.accountIDs
                    ? t.accountIDs.slice().sort().join(",")
                    : void 0,
              };
            try {
              return (
                (e = await O().get(
                  N.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                  { params: s },
                )),
                this.HandleHintLoadBroadcastResponse(t, e.data)
              );
            } catch (a) {
              let u = (0, $r.H)(a);
              console.error(
                "HintLoadEmbeddablePreviewStreams hit error loading: " +
                  u.strErrorMsg,
                u,
              );
            }
            return [];
          }
          async HintLoadEmbeddableStreams(t) {
            let e = this.MapEmbeddableStreamToRequest(t),
              s = this.GetStreamsLookupKeyFromParam(e);
            if (!this.m_inFlightRequests.has(s)) {
              this.m_lookupKeyToEmbedStreamDef.set(s, t);
              const a = this.InternalHintLoadEmbeddableStreams(t, e);
              this.m_inFlightRequests.set(s, a);
            }
            return this.m_inFlightRequests.get(s);
          }
          async InternalHintLoadEmbeddableStreams(t, e) {
            let s = (0, N.Tc)(
              "broadcast_available_for_page",
              "application_config",
            );
            if ((0, ir.h7)(s))
              return this.HandleHintLoadBroadcastResponse(t, s);
            try {
              let a = null;
              return (
                (a = await O().get(
                  N.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                  { params: e },
                )),
                this.HandleHintLoadBroadcastResponse(t, a.data)
              );
            } catch (a) {
              let u = (0, $r.H)(a);
              console.error(
                "HintLoadEmbeddableStreams hit error loading: " + u.strErrorMsg,
                u,
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
            const s = new Array();
            (0, L.h5)(() => {
              e.filtered.forEach((h) => {
                if (!h.steamid) {
                  const G = vt.b.InitFromAccountID(h.accountid);
                  h.steamid = G.ConvertTo64BitString();
                }
                const I = je.es.GetOrCreateBroadcastInfo(h.steamid),
                  S = h.appid ? Number(h.appid) : je.fO;
                (I.m_nAppID = S),
                  (I.m_strAppId = "" + S),
                  h.current_selection_priority === void 0 &&
                    (h.current_selection_priority =
                      h.default_selection_priority),
                  S != je.fO && s.push(S);
              });
            });
            const a = this.GetStreamsLookupKeyFromDef(t);
            if (
              (this.m_lookupStreams.set(a, e.filtered),
              this.m_onLoadContextCall.has(a))
            ) {
              const h = this.m_onLoadContextCall.get(a);
              h && h.fnCallback();
            }
            const u = this.GetStreams(t);
            return await this.AutoStartVideoStream(t, u), u;
          }
          ExtractBroadcastPrioritiesFromPartnerEventForPreview(t, e) {
            const s = Array.from(t.jsondata.broadcast_whitelist ?? []),
              a = Array.from(t.jsondata.broadcast_priority ?? []),
              u = new Map();
            for (let h = 0; h < s.length && !(h >= a.length); h++)
              u.set(s[h], (0, ir.PH)(a[h]));
            e.forEach((h) => {
              const I = Number(h.accountid);
              u.has(I) && (h.current_selection_priority = u.get(I));
            });
          }
          async AutoStartVideoStream(t, e) {
            let s = this.GetStreamsLookupKeyFromDef(t);
            if (this.m_bMapHasStartedVideo.get(s)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(s)) {
                const a = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: ir.mY.k_eGeneral,
                  current_selection_priority: ir.mY.k_eGeneral,
                };
                this.m_playReadyStream.set(s, a);
              }
              return this.m_playReadyStream;
            }
            return this.PlayFromAvailableStreams(t, e);
          }
          async PlayFromAvailableStreams(t, e, s = !1) {
            const a = new Set();
            for (;;) {
              const u = e.filter((S) => !a.has(S) && (!s || !S.nAppIDVOD)),
                h = this.GetAutoStartStream(u);
              if (!h) return null;
              if (await this.AttemptToPlayStream(t, h)) return h;
              a.add(h);
            }
          }
          async AttemptToPlayStream(t, e) {
            let s = this.GetStreamsLookupKeyFromDef(t);
            if (
              (this.m_bMapHasStartedVideo.set(s, !0),
              this.m_mapBroadcastChecked.has(e.accountid) ||
                this.m_mapBroadcastChecked.set(
                  e.accountid,
                  this.InternalAttemptToPlayStream(t, e),
                ),
              e.nAppIDVOD)
            )
              this.m_playReadyStream.set(s, e);
            else {
              const a = await this.m_mapBroadcastChecked.get(e.accountid);
              if (a?.success == q.R) {
                (e.steamid = a.steamid),
                  this.m_playReadyStream.set(s, e),
                  this.GetConcurrentStreams(t) > 1
                    ? (this.m_streamChatStatus = "hide")
                    : (this.m_streamChatStatus = e.broadcast_chat_visibility),
                  this.m_setStreamChangedListeners.forEach((h) => h(e));
                const u = je.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
                Nr(u, fr.Mc.iy, e.snr);
              } else return null;
            }
            return e;
          }
          async InternalAttemptToPlayStream(t, e) {
            let s = this.GetStreamsLookupKeyFromDef(t),
              a = null;
            try {
              const u = N.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let h = {
                broadcastaccountid: e.accountid,
                viewer_token: je.es.GetViewerToken(),
                origin: self.origin,
              };
              return (a = await O().get(u, { params: h })), a.data;
            } catch (u) {
              let h = (0, $r.H)(u);
              console.error(
                "Broadcast.AttemptToPlayStream: " + h.strErrorMsg,
                h,
              );
            }
            return null;
          }
          GetAutoStartStream(t) {
            if (!t) return null;
            const e = t.filter((h) => ni(h)),
              s = e.reduce((h, I) => Math.max(h, Ir(I)), 0),
              a = e.filter((h) => Ir(h) === s);
            if (a.length === 0) return null;
            const u = Math.floor(Math.random() * a.length);
            return a[u];
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
              cc: N.TS.COUNTRY,
              l: N.TS.LANGUAGE,
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
              jr.s_GlobalStore ||
                ((jr.s_GlobalStore = new jr()), jr.s_GlobalStore.Init()),
              jr.s_GlobalStore
            );
          }
          Init() {}
        };
        sr([L.sH], er.prototype, "m_lookupStreams", 2),
          sr([L.sH], er.prototype, "m_playReadyStream", 2),
          sr([L.sH], er.prototype, "m_pageChatStatus", 2),
          sr([L.sH], er.prototype, "m_streamChatStatus", 2),
          sr([L.sH], er.prototype, "m_bUserChatExpanded", 2),
          sr(
            [L.sH],
            er.prototype,
            "m_bUserPreferenceHideBroadcastByDefault",
            2,
          ),
          sr([L.sH], er.prototype, "m_bCollapsed", 2),
          sr([L.XI], er.prototype, "HintLoadEmbeddablePreviewStreams", 1),
          sr([L.XI], er.prototype, "AttemptToPlayStream", 1);
        let xe = er;
        function Ir(d) {
          return d.current_selection_priority || ir.mY.k_eGeneral;
        }
        function qs(d) {
          d.sort((t, e) =>
            Ir(t) != Ir(e)
              ? Ir(e) - Ir(t)
              : t.viewer_count != e.viewer_count
                ? e.viewer_count - t.viewer_count
                : e.accountid - t.accountid,
          );
        }
        async function Nr(d, t, e) {
          if (d > 0 && d != 7 && e) {
            let s = new URLSearchParams();
            s.append("page_action", "" + t),
              s.append("snr", e),
              O().post(
                N.TS.STORE_BASE_URL + "ajaxreportproductaction/" + d + "/",
                s,
              );
          }
        }
        const Vs = new Qs.T();
        var Cs = g(23627),
          _s = g(39239),
          tn = g(90405),
          zi = g(19730),
          ji = g(16512),
          en = g(53120),
          Z = g.n(en);
        const rn = (0, H.PA)((d) => {
          const { event: t } = d,
            e = t.clanSteamID.GetAccountID(),
            s = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
            a = (0, lt.useRef)(null),
            [u, h] = (0, lt.useState)(
              t ? ji.pF.GetCreatorHome(t.clanSteamID) : null,
            );
          if (
            ((0, lt.useEffect)(() => {
              const S = O().CancelToken.source();
              return (
                (a.current = S.cancel),
                (async () => {
                  const Be = vt.b.InitFromClanID(e),
                    Fe = await ji.pF.LoadCreatorHome(Be, !1, S);
                  S.token.reason || h(Fe);
                })(),
                () => {
                  a.current && a.current("BroadcastDropsDisplay: unmounting");
                }
              );
            }, [e]),
            s || !u || !u.BIsLoaded())
          )
            return null;
          const I =
            N.TS.COMMUNITY_BASE_URL +
            "gid/" +
            t.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            t.jsondata.broadcast_item_drops_details_event_gid;
          return (0, n.jsx)("div", {
            className: Z().item_drop_ctn,
            children: (0, n.jsxs)("div", {
              children: [
                (0, P.we)(
                  u.GetName().length > 0
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
                  u.GetName(),
                ),
                !!t.jsondata.broadcast_item_drops_details_clan_accountid &&
                  (0, n.jsx)("a", {
                    href: I,
                    target: N.TS.IN_CLIENT ? "" : "_blank",
                    children: (0, P.we)("#SalePage_WatchForDrop_LearnMore"),
                  }),
              ],
            }),
          });
        });
        var sn = g(95695),
          hr = g.n(sn),
          nn = g(96715),
          an = g(10886),
          on = g(19654),
          ln = g(3209),
          cn = g(14256),
          rr = g.n(cn);
        function dn(d) {
          const { steamid: t, closeModal: e } = d;
          return (0, n.jsxs)(os.o0, {
            strDescription: "",
            strTitle: (0, P.we)("#Button_Share"),
            onCancel: e,
            onOK: e,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
            children: [
              (0, n.jsx)(un, { steamid: t }),
              (0, n.jsx)(mn, { steamid: t }),
            ],
          });
        }
        function un(d) {
          const { steamid: t } = d,
            e = fn(t);
          return (0, n.jsxs)("div", {
            className: (0, Dt.A)(
              hr().FlexRowContainer,
              rr().share_controls_ctn,
            ),
            children: [
              (0, n.jsx)(Je.he, {
                toolTipContent: (0, P.we)("#EventDisplay_Share_OnFaceBook"),
                children: (0, n.jsx)(Xr.uU, {
                  href: e.strFacebookUrl,
                  className: rr().ShareBtn,
                  children: (0, n.jsx)("img", {
                    className: (0, Dt.A)(hr().Button),
                    src: an.A,
                  }),
                }),
              }),
              (0, n.jsx)(Je.he, {
                toolTipContent: (0, P.we)("#EventDisplay_Share_OnTwitter"),
                children: (0, n.jsx)(Xr.uU, {
                  href: e.strTwitterUrl,
                  className: rr().ShareBtn,
                  children: (0, n.jsx)("img", {
                    className: (0, Dt.A)(hr().Button),
                    src: ln.A,
                  }),
                }),
              }),
              (0, n.jsx)(Je.he, {
                toolTipContent: (0, P.we)("#EventDisplay_Share_OnReddit"),
                children: (0, n.jsx)(Xr.uU, {
                  href: e.strRedditUrl,
                  className: rr().ShareBtn,
                  children: (0, n.jsx)("img", {
                    className: (0, Dt.A)(hr().Button),
                    src: on.A,
                  }),
                }),
              }),
            ],
          });
        }
        function mn(d) {
          const { steamid: t } = d,
            e = lt.createRef(),
            [s, a] = lt.useState(""),
            u = lt.createRef(),
            h = lt.useCallback(
              (S) => {
                e.current &&
                  e.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(e.current.value)
                    .then((G) => {
                      a((0, P.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((G) => {
                      a(
                        (0, P.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", G);
                    });
              },
              [e],
            ),
            I = N.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsxs)("div", {
                className: (0, Dt.A)(hr().FlexRowContainer, rr().linkField),
                onClick: h,
                children: [
                  (0, n.jsx)("span", {
                    className: rr().LinkInputLabel,
                    children: (0, P.we)("#EventDisplay_Share_Link"),
                  }),
                  (0, n.jsx)("textarea", {
                    className: rr().LinkInput,
                    ref: e,
                    value: I,
                    readOnly: !0,
                  }),
                  !!document.queryCommandSupported("copy") &&
                    (0, n.jsx)(Je.he, {
                      toolTipContent: (0, P.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, n.jsx)("div", {
                        className: (0, Dt.A)(
                          hr().Button,
                          hr().Icon,
                          rr().LinkButton,
                        ),
                        children: (0, n.jsx)("img", {
                          className: rr().ClipboardIcon,
                          src: nn.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                ref: u,
                className: rr().ClipboardText,
                children: s,
              }),
            ],
          });
        }
        function fn(d) {
          const t = N.TS.COMMUNITY_BASE_URL + "broadcast/share/" + d;
          return {
            strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: t + "?site=twitter",
            strRedditUrl: t + "?site=reddit",
          };
        }
        var hn = g(82734),
          gn = g(37589),
          pn = Object.defineProperty,
          bn = Object.getOwnPropertyDescriptor,
          qe = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? bn(t, e) : t, u = d.length - 1, h;
              u >= 0;
              u--
            )
              (h = d[u]) && (a = (s ? h(t, e, a) : h(a)) || a);
            return s && a && pn(t, e, a), a;
          };
        const yn = {
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
        function wn() {
          const d = (0, N.Qn)();
          return !(0, N.Y2)() && !d;
        }
        function Mn(d) {
          return wn() ? (0, n.jsx)(gr, { ...d }) : null;
        }
        let gr = class extends lt.Component {
          m_cancelSignal = O().CancelToken.source();
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
            let d = xe.Get().GetPlayReadyStream(this.props);
            const t = this.state.bExpanded,
              e = je.es.GetOrCreateBroadcastInfo(d.steamid).m_nAppID;
            Nr(e, t ? fr.Mc.U6 : fr.Mc.B_, d.snr),
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
          async onStreamSelect(d) {
            this.setState({ bStartMuted: !1 }),
              xe.Get().GetPlayReadyStream(this.props).accountid !=
                d.accountid &&
                (await xe.Get().AttemptToPlayStream(this.props, d));
          }
          async PlayNextNonVOD() {
            this.setState({ bStartMuted: !1 });
            const d = xe
              .Get()
              .GetStreams(this.props)
              .filter(
                (t) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(t),
              );
            await xe.Get().PlayFromAvailableStreams(this.props, d, !0);
          }
          ConstructSidePanels(d, t) {
            let e = {
              leftPanel: null,
              rightPanel: null,
              bRightPanelArtworkOrEmpty: !0,
            };
            if (this.props.bWidePlayer) return e;
            const s = xe.Get().GetConcurrentStreams(this.props) > 1;
            let a = je.es.GetOrCreateBroadcastInfo(d.steamid).m_nAppID,
              u = (0, n.jsx)(xi, { ImgUrl: d.right_panel }, "right" + a),
              h = (0, n.jsx)(xi, { ImgUrl: d.left_panel }, "left" + a);
            const I = 11;
            if (a < I) {
              const S = gi.GetAppIDListForBroadcasterSteamID(d.steamid);
              S && S.length === 1 && (a = S[0]);
            }
            return (
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
                a >= I &&
                (!this.props.event ||
                  !this.props.event.jsondata.broadcast_force_banner) &&
                ((u = (0, n.jsx)(Zs, { appid: a }, "mini" + d.accountid)),
                (e.bRightPanelArtworkOrEmpty = !1)),
              s && !t
                ? ((e.leftPanel = (0, n.jsx)(
                    In,
                    {
                      broadcastEmbedContext: this.props,
                      curStream: d,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    },
                    "selector" + a,
                  )),
                  (e.rightPanel = u))
                : t
                  ? ((e.leftPanel = (0, n.jsx)("div", {})),
                    (e.rightPanel = (0, n.jsx)(xn, {
                      stream: d,
                      orientation: "rightside",
                    })),
                    (e.bRightPanelArtworkOrEmpty = !1))
                  : ((e.leftPanel = h), (e.rightPanel = u)),
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
            let d = xe.Get().GetPlayReadyStream(this.props);
            if (d) {
              this.MarkBroadcastSeen();
              let t = xe.Get().GetChatVisibility() === "show";
              const {
                event: e,
                language: s,
                fnRenderBroadcastContext: a,
              } = this.props;
              e &&
                (d = {
                  ...d,
                  left_panel: e.GetImageURL(
                    "broadcast_left",
                    s || (0, xr.sfN)(N.TS.LANGUAGE),
                  ),
                  right_panel: e.GetImageURL(
                    "broadcast_right",
                    s || (0, xr.sfN)(N.TS.LANGUAGE),
                  ),
                  store_title: e.GetBroadcastTitle(
                    s || (0, xr.sfN)(N.TS.LANGUAGE),
                  ),
                  broadcast_chat_visibility: e.GetBroadcastChatVisibility(),
                });
              let u = this.ConstructSidePanels(d, t),
                h = d.store_title ? d.store_title : d.title,
                I = xe.Get().GetConcurrentStreams(this.props) > 1;
              const S = () => {
                d.nAppIDVOD && this.PlayNextNonVOD(),
                  this.props.fnOnVideoEnd?.();
              };
              return (0, n.jsx)(lt.Fragment, {
                children: (0, n.jsxs)("div", {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                  children: [
                    (0, n.jsxs)("div", {
                      className: (0, Dt.A)({
                        [Z().bordered_container]: !0,
                        [Z().Event]: !!e,
                        broadcast_brd_ctn_trgt: !0,
                      }),
                      children: [
                        (0, n.jsxs)("div", {
                          className: (0, Dt.A)(
                            Z().bordered_title,
                            "bordered_title_trgt",
                          ),
                          children: [
                            (0, n.jsx)(Cs.K, {}),
                            (0, n.jsx)("div", {
                              className: Z().streamTitle,
                              children: h,
                            }),
                            (0, n.jsxs)("div", {
                              className: Z().bordered_corner_container,
                              children: [
                                !this.state.bExpanded &&
                                  (0, n.jsx)(Je.he, {
                                    toolTipContent: (0, P.we)(
                                      "#StoreBroadcast_Change_store_Broadcast_settings",
                                    ),
                                    children: (0, n.jsx)("div", {
                                      className: Z().broadcast_settings_icon,
                                      onClick: () =>
                                        window.open(
                                          `${N.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                        ),
                                    }),
                                  }),
                                (0, n.jsx)(Je.he, {
                                  toolTipContent: (0, P.we)(
                                    "#StoreBroadcast_Hide_Tooltip",
                                  ),
                                  children: (0, n.jsx)("div", {
                                    className: this.state.bExpanded
                                      ? Z().bordered_corner_expanded
                                      : Z().bordered_corner_shrinked,
                                    onClick: this.ToggleBroadcastExpandShrink,
                                  }),
                                }),
                              ],
                            }),
                            !!d.gamedata_subtitle &&
                              (0, n.jsx)("div", {
                                className: Z().bordered_subtitle,
                                children: d.gamedata_subtitle,
                              }),
                          ],
                        }),
                        !!this.state.bExpanded &&
                          (0, n.jsxs)("div", {
                            className: (0, Dt.A)({
                              [Z().container]: !0,
                              embeddable_ctn_trgt: !0,
                              multistream: I,
                              broadcast_right_panel_simple:
                                u.bRightPanelArtworkOrEmpty,
                              broadcast_chat_expanded: t,
                            }),
                            style: { ...this.state.innerStyle },
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                            children: [
                              (0, n.jsx)("div", {
                                className: Z().LeftPanelCtn,
                                children: u.leftPanel,
                              }),
                              (0, n.jsx)(Zr, {
                                stream: d,
                                bStartMuted: this.state.bStartMuted,
                                fnRenderBroadcastContext: a,
                                fnOnVideoEnd: S,
                                bWidePlayer: this.props.bWidePlayer,
                              }),
                              (0, n.jsx)("div", {
                                className: Z().RightPanelCtn,
                                children: u.rightPanel,
                              }),
                              !!this.state.bExpanded &&
                                (0, n.jsx)(Ur, {
                                  stream: d,
                                  bMultistream: I,
                                  chatAnnouncementGivewayGID: u.rightPanel
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
                    ) && (0, n.jsx)(rn, { event: e }),
                    (0, n.jsx)("div", { className: Z().clear_div }),
                  ],
                }),
              });
            } else
              return (0, n.jsx)("div", { className: "NoBroadcastAvailable" });
          }
        };
        qe([ze.oI], gr.prototype, "ToggleBroadcastExpandShrink", 1),
          qe([ze.oI], gr.prototype, "OnShrinkTransitionEnd", 1),
          qe([ze.oI], gr.prototype, "onStreamSelect", 1),
          qe([ze.oI], gr.prototype, "PlayNextNonVOD", 1),
          (gr = qe([H.PA], gr));
        class Zr extends lt.Component {
          m_iVideoContainerRef = lt.createRef();
          constructor(t) {
            super(t),
              (this.state = {
                bPopout: !1,
                bPreventPopup: window.screen.width <= 768,
              });
          }
          CloseBroadcastPopup() {
            const t = je.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            Nr(t, fr.Mc.n6, this.props.stream.snr),
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
            return (0, n.jsx)("div", {
              className: Z().wrapper,
              children: (0, n.jsx)(gn.j, {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (t) => {
                  t.isIntersecting || this.OnLeave();
                },
                className: (0, Dt.A)({
                  [Z().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [Z().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
                children: (0, n.jsxs)("div", {
                  className: this.state.bPopout
                    ? Z().broadcast_floating
                    : Z().video_container,
                  children: [
                    this.state.bPopout &&
                      (0, n.jsx)(Oi, {
                        steamIDBroadcast: this.props.stream.steamid,
                        OnPreventPopup: this.CloseBroadcastPopup,
                      }),
                    (0, n.jsx)("div", {
                      className: Z().BroadcastPlayerContainer,
                      children: (0, n.jsx)(Ps.default, {
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
        qe([ze.oI], Zr.prototype, "CloseBroadcastPopup", 1),
          qe([ze.oI], Zr.prototype, "OnEnter", 1),
          qe([ze.oI], Zr.prototype, "OnLeave", 1);
        function Bn(d) {
          const { stream: t } = d,
            [e] = (0, kt.q3)(() => [t.steamid]),
            s = je.es.GetOrCreateBroadcastInfo(e).m_nAppID,
            a = yn.list.find(
              (u) =>
                u.appid == s &&
                (!u.broadcasterAccountID ||
                  u.broadcasterAccountID == t.accountid),
            );
          if (a) {
            let u = a.url;
            return (
              (N.TS.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (u = "steam://openurl/" + u),
              (0, n.jsx)("a", {
                href: u,
                children: (0, P.we)(
                  "#Broadcast_Embed_Watch_With_Frieds_SteamTV",
                ),
              })
            );
          } else {
            const u = N.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
            return (0, n.jsx)(Je.he, {
              toolTipContent: (0, P.we)("#BroadcastWatch_View_Broadcast_Page"),
              children: (0, n.jsx)("a", {
                href: u,
                className: Z().external_link,
                children: (0, n.jsx)(Ke.GrD, {}),
              }),
            });
          }
        }
        let Ur = class extends lt.Component {
          OnToggleChat(d) {
            d.preventDefault();
            const t = je.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            Nr(
              t,
              xe.Get().GetChatVisibility() === "show" ? fr.Mc.kz : fr.Mc.bW,
              this.props.stream.snr,
            ),
              xe.Get().ToggleChatVisibility();
          }
          onWatchBroadcastPage() {
            const d = je.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            Nr(d, fr.Mc.Is, this.props.stream.snr);
          }
          render() {
            const d = xe.Get().GetChatVisibility() != "remove",
              t = xe.Get().GetChatVisibility() === "hide",
              e = !this.props.stream.nAppIDVOD,
              s = e;
            let a = Number.parseInt(
              "" +
                je.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nViewerCount,
            );
            return (0, n.jsxs)("div", {
              className: (0, Dt.A)(Z().viewer_bar, "viewer_bar"),
              children: [
                (0, n.jsxs)("div", {
                  className: (0, Dt.A)(Z().viewer_count, "viewer_count"),
                  children: [(0, n.jsx)(Ke.y_e, {}), (0, zi.Dq)(a)],
                }),
                (0, n.jsxs)("div", {
                  className: (0, Dt.A)(Z().viewer_links, "viewer_links"),
                  children: [
                    !!(d && !t && this.props.bMultistream) &&
                      (0, n.jsx)("div", {
                        className: Z().chat_link,
                        children: (0, n.jsx)("a", {
                          href: "#",
                          className: Z().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, P.we)(
                            "#sale_three_section_show_streams",
                          ),
                        }),
                      }),
                    d &&
                      (0, n.jsxs)("div", {
                        className: Z().chat_link,
                        children: [
                          (0, n.jsx)(Ke.ROZ, {}),
                          (0, n.jsx)("a", {
                            href: "#",
                            className: Z().ChatToggle,
                            onClick: this.OnToggleChat,
                            children: (0, P.we)(
                              t
                                ? "#sale_three_section_show_chat"
                                : "#sale_three_section_hide_chat",
                            ),
                          }),
                        ],
                      }),
                    s &&
                      (0, n.jsxs)("div", {
                        className: Z().chat_link,
                        children: [
                          (0, n.jsx)(Ke.SYj, {}),
                          (0, n.jsx)("a", {
                            href: "#",
                            className: Z().ChatToggle,
                            onClick: (u) =>
                              (0, Vr.pg)(
                                (0, n.jsx)(dn, {
                                  steamid: this.props.stream.steamid,
                                }),
                                (0, hn.uX)(u),
                              ),
                            children: (0, P.we)("#Broadcast_ShareBroadcast"),
                          }),
                        ],
                      }),
                    (0, n.jsx)(Je.he, {
                      toolTipContent: (0, P.we)(
                        "#StoreBroadcast_Change_store_Broadcast_settings",
                      ),
                      children: (0, n.jsx)("a", {
                        href:
                          N.TS.STORE_BASE_URL +
                          "account/preferences/#store_broadcast_settings",
                        target: N.TS.IN_CLIENT ? void 0 : "_blank",
                        className: Z().settings_link,
                        children: (0, n.jsx)(Ke.wB_, {}),
                      }),
                    }),
                    e && (0, n.jsx)(Bn, { ...this.props }),
                  ],
                }),
                !!this.props.chatAnnouncementGivewayGID &&
                  (0, n.jsx)(zs, {
                    gidGiveaway: this.props.chatAnnouncementGivewayGID,
                    stream: this.props.stream,
                  }),
              ],
            });
          }
        };
        qe([ze.oI], Ur.prototype, "OnToggleChat", 1),
          qe([ze.oI], Ur.prototype, "onWatchBroadcastPage", 1),
          (Ur = qe([H.PA], Ur));
        class xi extends lt.Component {
          render() {
            let t = this.props.ImgUrl;
            return (0, n.jsxs)("div", {
              className: Z().SidePanelBackground,
              children: [
                t &&
                  (0, n.jsx)("img", {
                    className: Z().side_panels,
                    src: this.props.ImgUrl,
                  }),
                !t && (0, n.jsx)("div", { className: Z().side_panels }),
              ],
            });
          }
        }
        const Oi = (0, H.PA)((d) => {
          const { steamIDBroadcast: t } = d;
          let e = je.es.GetOrCreateBroadcastInfo(t).m_nAppID;
          e = e != je.fO ? e : 0;
          const s = (0, ii.$5)(e),
            { data: a } = (0, Br.J$)(s);
          return (0, n.jsxs)("div", {
            className: [Z().PopOutVideoTitleBar, Z().NoSeslect].join(" "),
            children: [
              a
                ? (0, n.jsx)(Yr.u, {
                    id: s,
                    className: Z().PopOutVideoTitleText,
                    children: (0, P.we)("#StoreBroadcast_Detault_popout_Title"),
                  })
                : (0, n.jsx)("div", {
                    className: Z().PopOutVideoTitleText,
                    children: (0, P.we)("#StoreBroadcast_Detault_popout_Title"),
                  }),
              (0, n.jsx)(Je.he, {
                toolTipContent: (0, P.we)(
                  "#StoreBroadcast_close_broadcast_popup",
                ),
                children: (0, n.jsx)("button", {
                  className: Z().PopOutVideoCloseButton,
                  onClick: d.OnPreventPopup,
                  children: (0, n.jsx)(Ke.X, {}),
                }),
              }),
            ],
          });
        });
        function vn(d, t) {
          const e = je.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
            s = Jr.A.Get().GetApp(e),
            a = d && s?.GetAssets()?.GetHeaderURL();
          return parseInt(
            a
              ? Z().strStreamIconCapsuleArtHeight
              : Z().strStreamIconScreenshotArtHeight,
          );
        }
        function In(d) {
          const {
              curStream: t,
              onStreamSelect: e,
              fnFilterStreams: s,
              bShowCapsuleArt: a,
              broadcastEmbedContext: u,
            } = d,
            h = (0, lt.useRef)(void 0),
            I = (0, lt.useMemo)(() => {
              const S = xe
                .Get()
                .GetStreams(u)
                .filter((G) => !s || s(G));
              return qs(S), S;
            }, [u, s]);
          return (
            (0, lt.useEffect)(() => {
              if (h && h.current) {
                const S = I.map(
                  (G) => je.es.GetOrCreateBroadcastInfo(G.steamid).m_nAppID,
                ).filter(Boolean);
                Jr.A.Get()
                  .QueueMultipleAppRequests(S, { include_assets: !0 })
                  .then(() => {
                    if (h.current) {
                      let G = 0;
                      for (const Be of I) {
                        if (t.accountid == Be.accountid) break;
                        G += vn(a, Be);
                      }
                      h.current.scrollTop = G;
                    }
                  });
              }
            }, [I, a, t.accountid, h]),
            (0, n.jsx)("div", {
              ref: h,
              className: (0, Dt.A)({
                [Z().side_panels]: !0,
                side_panels: !0,
                [Z().multistream]: !0,
                [Z().scrollingstreams]: I.length > 3,
              }),
              children: (0, n.jsx)("div", {
                className: Z().MultiStreamCtn,
                children: I.map((S) =>
                  (0, n.jsx)(
                    zn,
                    {
                      stream: S,
                      bSelected: t.accountid == S.accountid,
                      onStreamSelect: e,
                      bShowCapsuleArt: a,
                    },
                    S.accountid ?? S.steamid,
                  ),
                ),
              }),
            })
          );
        }
        function zn(d) {
          const {
            onStreamSelect: t,
            bSelected: e,
            stream: s,
            bShowCapsuleArt: a,
          } = d;
          let u = (0, kt.q3)(
            () => je.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID,
          );
          u = u != je.fO ? u : 0;
          const h = (0, ii.$5)(u),
            { data: I } = (0, Br.J$)(h),
            { data: S } = (0, Br.lv)(h);
          if (!ni(s)) return null;
          const G = a && S && (0, Ii.b0)(S, "header"),
            Be = Number.parseInt("" + s.viewer_count),
            Fe = !Number.isNaN(Be),
            Ae = !!s.nAppIDVOD && I?.name;
          return (0, n.jsxs)("div", {
            className: (0, Dt.A)({
              [Z().stream_icon_and_viewer_container]: !0,
              [Z().stream_featured]:
                s.current_selection_priority == ir.mY.k_eFeatured,
              [Z().display_capsule_art]: !!G,
            }),
            children: [
              (0, n.jsx)(Yr.j, {
                id: h,
                hoverClassName: Z().StreamCapsule,
                children: (0, n.jsx)(tn.K, {
                  className: (0, Dt.A)(
                    Z().stream_icon_container,
                    e && Z().stream_selected,
                  ),
                  onClick: () => t && t(s),
                  rootMargin: "100px 0px 100px 0px",
                  children: (0, n.jsx)(jn, {
                    strThumbnail: s.thumbnail_http_address,
                    bSelected: e,
                    strCapsuleArtURL: G,
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: (0, Dt.A)(Z().viewer_count, !Fe && Z().vod_title),
                children: Fe
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(Ke.y_e, {}),
                        (0, n.jsx)("div", {
                          className: Z().ViewerNum,
                          children: (0, zi.Dq)(Be),
                        }),
                      ],
                    })
                  : Ae,
              }),
            ],
          });
        }
        function jn(d) {
          const { strCapsuleArtURL: t, strThumbnail: e, bSelected: s } = d,
            a = s ? Z().stream_icon_selected : Z().stream_icon;
          if (t) {
            const u = [t];
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("img", {
                  className: (0, Dt.A)(a, Z().stream_icon_hide_on_hover),
                  src: t,
                }),
                (0, n.jsx)(_s.o, {
                  className: (0, Dt.A)(a, Z().stream_icon_show_on_hover),
                  srcs: u,
                }),
              ],
            });
          } else return (0, n.jsx)("img", { className: a, src: e });
        }
        function xn(d) {
          const { stream: t, orientation: e } = d,
            s = e == "below",
            [a, u] = (0, kt.q3)(() => [
              je.es.GetBroadcast(t.steamid),
              je.es.GetBroadcast(t.steamid)?.m_ulBroadcastID,
            ]),
            h = (0, kt.q3)(() => t.steamid);
          return a
            ? (0, n.jsx)("div", {
                className: (0, Dt.A)({
                  [Z().chat_below_container]: s,
                  [Z().chat_rightside_container]: !s,
                  [Z().store_chat_ctn]: !0,
                }),
                children: (0, n.jsx)("div", {
                  className: Z().ChatContainer,
                  children: (0, n.jsx)(or, {
                    emoticonStore: Vs,
                    watchLocation: ct.nn.fe,
                    steamID: h,
                    broadcastID: u,
                  }),
                }),
              })
            : null;
        }
      },
      6600: (Vt, ve, g) => {
        "use strict";
        g.d(ve, { td: () => ct });
        var n = g(14947),
          Wt = g(3166),
          O = Object.defineProperty,
          H = Object.getOwnPropertyDescriptor,
          kt = (q, v, Bt, Oe) => {
            for (
              var vt = Oe > 1 ? void 0 : Oe ? H(v, Bt) : v, f = q.length - 1, c;
              f >= 0;
              f--
            )
              (c = q[f]) && (vt = (Oe ? c(v, Bt, vt) : c(vt)) || vt);
            return Oe && vt && O(v, Bt, vt), vt;
          };
        const lt =
            Wt.TS.CHAT_BASE_URL + "public/images/broadcast/ti9_30x30.png",
          L = Wt.TS.CHAT_BASE_URL + "public/images/broadcast/yule_30x30.png";
        class rt {
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
          constructor(v) {
            (0, n.Gn)(this), this.init(v);
          }
          init(v) {
            (this.bValid = v.bValid),
              (this.stream = v.stream),
              (this.name = v.name),
              (this.appName = v.appName ?? ""),
              (this.appID = v.appID),
              (this.link = v.link),
              (this.linkName = v.linkName),
              (this.tabIcon = v.tabIcon ?? ""),
              (this.offlineImage = v.offlineImage),
              (this.gidEvent = v.gidEvent ?? "");
          }
        }
        kt([n.sH], rt.prototype, "bValid", 2),
          kt([n.sH], rt.prototype, "stream", 2),
          kt([n.sH], rt.prototype, "name", 2),
          kt([n.sH], rt.prototype, "appName", 2),
          kt([n.sH], rt.prototype, "appID", 2),
          kt([n.sH], rt.prototype, "link", 2),
          kt([n.sH], rt.prototype, "linkName", 2),
          kt([n.sH], rt.prototype, "tabIcon", 2),
          kt([n.sH], rt.prototype, "offlineImage", 2),
          kt([n.sH], rt.prototype, "gidEvent", 2);
        let ct = new rt({
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
        function _(q) {
          (q == "76561198888084799" || q == "76561198910244427") &&
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
            q == "76561197960266962" &&
              ct.init({
                bValid: !0,
                stream: {},
                appName: "Winter Sale 2019",
                name: "Yule Log",
                appID: 0,
                link: "https://store.steampowered.com/",
                linkName: "View Sale Info Here!",
                tabIcon: L,
                offlineImage: "public/images/broadcast/winter_sale_2019.png",
              });
        }
      },
      90828: (Vt, ve, g) => {
        "use strict";
        g.d(ve, { J8: () => O, X8: () => Wt });
        var n = ((H) => (
            (H[(H.Hover = 0)] = "Hover"),
            (H[(H.ClickPopup = 1)] = "ClickPopup"),
            (H[(H.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion"),
            H
          ))(n || {}),
          Wt = ((H) => (
            (H[(H.Chat = 0)] = "Chat"),
            (H[(H.Notification = 1)] = "Notification"),
            (H[(H.Error = 2)] = "Error"),
            H
          ))(Wt || {});
        class O {}
      },
      73110: (Vt, ve, g) => {
        "use strict";
        g.r(ve),
          g.d(ve, {
            BroadcastDetails: () => pt,
            LinkOverlay: () => Ie,
            default: () => D,
          });
        var n = g(7850),
          Wt = g(14947),
          O = g(75844),
          H = g(90626),
          kt = g(16346),
          lt = g(41301),
          L = g(83482),
          rt = g(22950),
          ct = g(10142),
          _ = g(62510),
          q = g(99047),
          v = g(81115),
          Bt = g(58584),
          Oe = g(59913),
          vt = g(42891),
          f = g(28679);
        function c(l, m) {
          var b = function (j) {
              return m && (0, H.isValidElement)(j) ? m(j) : j;
            },
            y = Object.create(null);
          return (
            l &&
              H.Children.map(l, function (w) {
                return w;
              }).forEach(function (w) {
                y[w.key] = b(w);
              }),
            y
          );
        }
        function r(l, m) {
          (l = l || {}), (m = m || {});
          function b(ft) {
            return ft in m ? m[ft] : l[ft];
          }
          var y = Object.create(null),
            w = [];
          for (var j in l)
            j in m ? w.length && ((y[j] = w), (w = [])) : w.push(j);
          var x,
            R = {};
          for (var et in m) {
            if (y[et])
              for (x = 0; x < y[et].length; x++) {
                var ot = y[et][x];
                R[y[et][x]] = b(ot);
              }
            R[et] = b(et);
          }
          for (x = 0; x < w.length; x++) R[w[x]] = b(w[x]);
          return R;
        }
        function Pe(l, m, b) {
          return b[m] != null ? b[m] : l.props[m];
        }
        function Ce(l, m) {
          return c(l.children, function (b) {
            return (0, H.cloneElement)(b, {
              onExited: m.bind(null, b),
              in: !0,
              appear: Pe(b, "appear", l),
              enter: Pe(b, "enter", l),
              exit: Pe(b, "exit", l),
            });
          });
        }
        function lr(l, m, b) {
          var y = c(l.children),
            w = r(m, y);
          return (
            Object.keys(w).forEach(function (j) {
              var x = w[j];
              if ((0, H.isValidElement)(x)) {
                var R = j in m,
                  et = j in y,
                  ot = m[j],
                  ft = (0, H.isValidElement)(ot) && !ot.props.in;
                et && (!R || ft)
                  ? (w[j] = (0, H.cloneElement)(x, {
                      onExited: b.bind(null, x),
                      in: !0,
                      exit: Pe(x, "exit", l),
                      enter: Pe(x, "enter", l),
                    }))
                  : !et && R && !ft
                    ? (w[j] = (0, H.cloneElement)(x, { in: !1 }))
                    : et &&
                      R &&
                      (0, H.isValidElement)(ot) &&
                      (w[j] = (0, H.cloneElement)(x, {
                        onExited: b.bind(null, x),
                        in: ot.props.in,
                        exit: Pe(x, "exit", l),
                        enter: Pe(x, "enter", l),
                      }));
              }
            }),
            w
          );
        }
        var nr =
            Object.values ||
            function (l) {
              return Object.keys(l).map(function (m) {
                return l[m];
              });
            },
          xt = {
            component: "div",
            childFactory: function (m) {
              return m;
            },
          },
          Ft = (function (l) {
            (0, vt.A)(m, l);
            function m(y, w) {
              var j;
              j = l.call(this, y, w) || this;
              var x = j.handleExited.bind((0, Oe.A)(j));
              return (
                (j.state = {
                  contextValue: { isMounting: !0 },
                  handleExited: x,
                  firstRender: !0,
                }),
                j
              );
            }
            var b = m.prototype;
            return (
              (b.componentDidMount = function () {
                (this.mounted = !0),
                  this.setState({ contextValue: { isMounting: !1 } });
              }),
              (b.componentWillUnmount = function () {
                this.mounted = !1;
              }),
              (m.getDerivedStateFromProps = function (w, j) {
                var x = j.children,
                  R = j.handleExited,
                  et = j.firstRender;
                return {
                  children: et ? Ce(w, R) : lr(w, x, R),
                  firstRender: !1,
                };
              }),
              (b.handleExited = function (w, j) {
                var x = c(this.props.children);
                w.key in x ||
                  (w.props.onExited && w.props.onExited(j),
                  this.mounted &&
                    this.setState(function (R) {
                      var et = (0, Bt.A)({}, R.children);
                      return delete et[w.key], { children: et };
                    }));
              }),
              (b.render = function () {
                var w = this.props,
                  j = w.component,
                  x = w.childFactory,
                  R = (0, v.A)(w, ["component", "childFactory"]),
                  et = this.state.contextValue,
                  ot = nr(this.state.children).map(x);
                return (
                  delete R.appear,
                  delete R.enter,
                  delete R.exit,
                  j === null
                    ? H.createElement(f.A.Provider, { value: et }, ot)
                    : H.createElement(
                        f.A.Provider,
                        { value: et },
                        H.createElement(j, R, ot),
                      )
                );
              }),
              m
            );
          })(H.Component);
        (Ft.propTypes = {}), (Ft.defaultProps = xt);
        const Ct = Ft;
        var _t = g(80724),
          Zt = g(36707);
        const At = 500;
        class Qt extends H.Component {
          render() {
            let {
              keyExtractor: m,
              style: b,
              duration: y = At,
              className: w,
              children: j,
              childRef: x,
              ...R
            } = this.props;
            const et = { ...(b || {}), transitionDuration: `${y / 1e3}s` };
            return (0, n.jsx)(Ct, {
              ...R,
              className: (0, Zt.A)("crossfade", w),
              children: (0, n.jsx)(
                _t.A,
                {
                  nodeRef: x,
                  classNames: "crossfade-anim",
                  timeout: y,
                  style: et,
                  children: j,
                },
                m(),
              ),
            });
          }
        }
        function te(l) {
          const { src: m, ...b } = l,
            y = { backgroundImage: `url(${m})` },
            w = H.useRef(null);
          return (0, n.jsx)(Qt, {
            style: y,
            keyExtractor: () => m,
            childRef: w,
            ...b,
            children: (0, n.jsx)("div", { ref: w, className: "crossfade-img" }),
          });
        }
        var ee = g(61431),
          Pt = g(79590),
          re = g(79167),
          Q = g(36118),
          C = g(53107),
          M = g(8323),
          Et = g(82734),
          $ = g(18210),
          st = g(19730),
          V = g(13854),
          A = g(54963),
          nt = g(3166),
          T = g(6600),
          X = g(48937),
          wt = g(15527),
          it = g.n(wt),
          It = g(85599),
          Yt = Object.defineProperty,
          Rt = Object.getOwnPropertyDescriptor,
          Tt = (l, m, b, y) => {
            for (
              var w = y > 1 ? void 0 : y ? Rt(m, b) : m, j = l.length - 1, x;
              j >= 0;
              j--
            )
              (x = l[j]) && (w = (y ? x(m, b, w) : x(w)) || w);
            return y && w && Yt(m, b, w), w;
          };
        function Mt() {
          return (0, n.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, $.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const ie = (0, O.PA)((l) => {
          let m = l.video;
          if (m && (m.IsBroadcastClip() || m.IsBroadcastVOD())) return null;
          let b = rt.fK.Loading,
            y = "";
          if (m) {
            (b = m.GetBroadcastState()), (y = m.GetBroadcastStateDescription());
            let j = m.IsBuffering();
            b == rt.fK.Unlocking && ((b = rt.fK.Loading), (y = "")),
              b == rt.fK.Ready && j && ((b = rt.fK.Loading), (y = ""));
          }
          if (
            (m && b != rt.fK.Error && m.GetUserInputNeeded()) ||
            b == rt.fK.Ready
          )
            return null;
          let w = b == rt.fK.Loading;
          return (0, n.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
            children: [
              w && (0, n.jsx)(It.t, {}),
              !w &&
                (0, n.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: y,
                }),
            ],
          });
        });
        class Lt extends H.Component {
          OnClick() {
            rt.es.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, n.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, n.jsx)(Q.jGG, {}),
                (0, n.jsx)("span", {
                  children: (0, $.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        Tt([A.oI], Lt.prototype, "OnClick", 1);
        var Ee = Object.defineProperty,
          se = Object.getOwnPropertyDescriptor,
          k = (l, m, b, y) => {
            for (
              var w = y > 1 ? void 0 : y ? se(m, b) : m, j = l.length - 1, x;
              j >= 0;
              j--
            )
              (x = l[j]) && (w = (y ? x(m, b, w) : x(w)) || w);
            return y && w && Ee(m, b, w), w;
          };
        let Ht = class extends H.Component {
          constructor(l) {
            super(l);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let l = this.props.stats;
            return (0, n.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, n.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, n.jsx)(Q.sED, {}),
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, n.jsx)(Jt, { stats: l }),
              ],
            });
          }
        };
        k([A.oI], Ht.prototype, "HideStats", 1), (Ht = k([O.PA], Ht));
        let Jt = class extends H.Component {
          constructor(l) {
            super(l);
          }
          createBufferedRange(l) {
            let m = this.props.stats,
              b = [],
              y = l ? "vidbuf" : "audbuf",
              w = l
                ? m.GetNumBufferedVideoRanges()
                : m.GetNumBufferedAudioRanges();
            if (w > 0)
              for (let j = 0; j < w; ++j) {
                let x = (0, $.we)(
                    l
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    j,
                  ),
                  R = l
                    ? m.GetBufferedVideoSegmentForDisplay(j)
                    : m.GetBufferedAudioSegmentForDisplay(j);
                b.push(
                  (0, n.jsxs)(
                    "div",
                    {
                      children: [
                        x,
                        " ",
                        (0, n.jsx)("span", {
                          className: "videoStatsValue",
                          children: R,
                        }),
                      ],
                    },
                    y + j,
                  ),
                );
              }
            else {
              let j = (0, $.we)(
                l
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              b.push((0, n.jsx)("div", { children: j }, y + "none"));
            }
            return b;
          }
          render() {
            let l = this.props.stats;
            return (0, n.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, n.jsxs)("div", {
                    children: [
                      (0, $.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, n.jsx)("span", {
                        className: "videoStatsValue",
                        children: l.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, n.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [l.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, n.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [l.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: l.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        Jt = k([O.PA], Jt);
        var Xt = g(82581),
          $t = Object.defineProperty,
          Gt = Object.getOwnPropertyDescriptor,
          dt = (l, m, b, y) => {
            for (
              var w = y > 1 ? void 0 : y ? Gt(m, b) : m, j = l.length - 1, x;
              j >= 0;
              j--
            )
              (x = l[j]) && (w = (y ? x(m, b, w) : x(w)) || w);
            return y && w && $t(m, b, w), w;
          };
        class zt extends H.Component {
          m_elSettingsButton;
          m_SettingsButtonPos;
          m_elClickListener = null;
          m_elSettingsPanel = null;
          m_elSubtitlesButton = H.createRef();
          m_elSubtitlesPanel = H.createRef();
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
              (0, Et.id)(this.m_elSettingsPanel, m.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, Et.id)(this.m_elSubtitlesPanel.current, m.target) ||
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
              b = !1;
            const { video: y, actions: w } = this.props;
            let j,
              x = [],
              R = 0,
              et = (0, n.jsx)(
                "div",
                { className: "settingsMenuSeparator" },
                "separator",
              );
            const ot = 260,
              ft = 32;
            if (
              (this.state.bSettingsOpen &&
                ((m = !0),
                (j = this.props.video.GetVideoRepresentations()),
                (x = j.map((gt) =>
                  (0, n.jsx)(
                    Xt.n,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(gt),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: gt.selected,
                      children: gt.displayName,
                    },
                    gt.id,
                  ),
                )),
                x.push(et),
                x.push(
                  (0, n.jsxs)(
                    Xt.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, $.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (R = 0 - (x.length * 21 + ft))),
              this.state.bSubtitlesOpen)
            ) {
              (b = !0),
                (x = []),
                x.push(
                  (0, n.jsx)(
                    Xt.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, $.we)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let gt = 0;
                gt < this.props.video.ListSubtitles().length;
                gt++
              ) {
                const Nt = this.props.video.ListSubtitles()[gt];
                x.push(
                  (0, n.jsx)(
                    Xt.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(Nt.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: Nt.mode === "showing",
                      children: Nt.label,
                    },
                    Nt.language,
                  ),
                );
              }
              R = 0 - (ot + ft);
            }
            const Ne =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, n.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                Ne &&
                  (0, n.jsx)("div", {
                    className:
                      "videoControlButton" +
                      (Ne ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, n.jsx)(Q.N8C, {}),
                  }),
                (0, n.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (m ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, n.jsx)(Q.wB_, {}),
                }),
                (0, n.jsx)(ut, { video: y }),
                w &&
                  w.map((gt) =>
                    (0, n.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: gt,
                      },
                      gt.key,
                    ),
                  ),
                m &&
                  (0, n.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: R,
                    },
                    children: (0, n.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: x,
                    }),
                  }),
                b &&
                  (0, n.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: ot + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: R,
                    },
                    children: (0, n.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: x,
                    }),
                  }),
              ],
            });
          }
        }
        dt([A.oI], zt.prototype, "OnVideoControlClick", 1),
          dt([A.oI], zt.prototype, "OnSubtitlesClick", 1),
          dt([A.oI], zt.prototype, "OnMouseUp", 1),
          dt([A.oI], zt.prototype, "bindSettingsButton", 1),
          dt([A.oI], zt.prototype, "BindSettingsPanel", 1),
          dt([A.oI], zt.prototype, "OnShowStats", 1);
        const St = !0;
        let ut = class extends H.Component {
          constructor(l) {
            super(l), (0, Wt.Gn)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = St;
          m_schHideSlider = new M.LU();
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
                () => (this.m_bShowSlider = St),
              );
          }
          render() {
            let l = this.props.video,
              m = l.IsMuted(),
              b = l.GetVolume() * 100,
              y = "videoControlButton";
            b > 65
              ? (y += " HighestVolume")
              : b > 45
                ? (y += " HighVolume")
                : b < 46 && b > 24
                  ? (y += " MedVolume")
                  : b < 25 && (y += " LowVolume");
            let w = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (w += " ShowVolumeSlider"),
              m && (w += " muted"),
              (0, n.jsx)("div", {
                className: w,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, n.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, n.jsx)("div", {
                      className: y,
                      onClick: this.ToggleMute,
                      children: (0, n.jsx)(Q.fSs, {}),
                    }),
                    (0, n.jsx)(bt, { video: l, onDrag: this.OnChildDrag }),
                  ],
                }),
              })
            );
          }
        };
        dt([Wt.sH], ut.prototype, "m_bShowSlider", 2),
          dt([A.oI], ut.prototype, "ToggleMute", 1),
          dt([A.oI], ut.prototype, "OnMouseEnter", 1),
          dt([A.oI], ut.prototype, "OnMouseLeave", 1),
          dt([A.oI], ut.prototype, "OnChildDrag", 1),
          (ut = dt([O.PA], ut));
        let bt = class extends H.Component {
          constructor(l) {
            super(l), (0, Wt.Gn)(this);
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
            let b = l.getBoundingClientRect(),
              y = V.Fu(m, b.left, b.right, 0, 1),
              w = V.OQ(y, 0, 1),
              j = this.props.video;
            j.SetMute(y < 0.01), j.SetVolume(w);
          }
          render() {
            let l = this.props.video,
              m = l.GetVolume() * 100;
            l.IsMuted() && (m = 0);
            let y = { left: `${m}%` },
              w = { width: `${m}%` };
            return (0, n.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, n.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
                (0, n.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: w,
                }),
                (0, n.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: y,
                }),
              ],
            });
          }
        };
        dt([A.oI], bt.prototype, "OnMouseDown", 1),
          dt([A.oI], bt.prototype, "OnMouseMove", 1),
          dt([A.oI], bt.prototype, "OnMouseUp", 1),
          dt([Wt.XI], bt.prototype, "SetVolumeWithCoord", 1),
          (bt = dt([O.PA], bt));
        var Le = g(43434),
          ne = Object.defineProperty,
          qt = Object.getOwnPropertyDescriptor,
          E = (l, m, b, y) => {
            for (
              var w = y > 1 ? void 0 : y ? qt(m, b) : m, j = l.length - 1, x;
              j >= 0;
              j--
            )
              (x = l[j]) && (w = (y ? x(m, b, w) : x(w)) || w);
            return y && w && ne(m, b, w), w;
          };
        const mt = 3200,
          at = 15;
        let D = class extends H.Component {
          m_schHideControls = new M.LU();
          m_schUnmountControls = new M.LU();
          m_elVideo = null;
          m_elBroadcastPlayer = null;
          m_bMouseDown = !1;
          m_elMouseDown = null;
          m_listeners = new M.Ji();
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
              (rt.es.StopVideo(l),
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
                  this.setState((y) => ({
                    bControlsVisible: y.bMountControls,
                  }));
                }, 15)
              : m.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== l.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const b = this.props.nAppIDVOD;
            b &&
              (m.strInitialCapsuleImageUrl === void 0 || l.nAppIDVOD != b) &&
              ct.A.Get()
                .QueueAppRequest(b, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const w =
                    ct.A.Get().GetApp(b)?.GetAssets()?.GetMainCapsuleURL() ||
                    "";
                  this.setState({ strInitialCapsuleImageUrl: w });
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
                  (m = rt.es.CreateBroadcastVideo(
                    l,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? l &&
                    (m = rt.es.CreateClipVideo(
                      l,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    l &&
                    ((m = rt.es.CreateVODVideo(
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
              this.m_schHideControls.Schedule(mt, this.HideControls);
          }
          OnMouseMove(l) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({ bControlsVisible: !0 })
                : this.setState({ bMountControls: !0 }),
              this.m_schHideControls.Schedule(mt, this.HideControls);
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
              ((0, kt.lX)(
                (0, n.jsx)(q.tz, { children: this.GetContextMenuItems() }),
                l,
              ),
              l.preventDefault());
          }
          ToggleStatsView(l) {
            let m = !this.state.bShowStats;
            this.setState({ bShowStats: m });
            let b = this.state.video;
            b && b.SetStatsViewIsVisible(m);
          }
          ShowStorePage(l) {
            let m = this.state.video;
            if (!m || !this.props.onOpenLinkInNewWindow) return;
            let b = m.GetBroadcastInfo();
            if (!b) return;
            let y = (0, L.k2)(`${nt.TS.STORE_BASE_URL}app/${b.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(l, y), l.stopPropagation();
          }
          GetContextMenuItems() {
            let l = [],
              m = this.state.video;
            if (!m) return l;
            let b = m.GetBroadcastInfo();
            return (
              l.push(
                (0, n.jsx)(
                  q.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (y) => {
                      this.ToggleStatsView(y);
                    },
                    children: (0, $.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              b &&
                b.m_strAppId != "0" &&
                Number.parseInt(b.m_strAppId) != rt.fO &&
                l.push(
                  (0, n.jsx)(
                    q.kt,
                    {
                      onSelected: (y) => {
                        this.ShowStorePage(y);
                      },
                      children: (0, $.we)("#Broadcast_VideoContext_OpenStore"),
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
              ((0, Et.ww)(this.m_elBroadcastPlayer)
                ? (0, Et.MS)(this.m_elBroadcastPlayer)
                : (0, Et.tl)(
                    this.m_elBroadcastPlayer,
                    this.m_elVideo ?? void 0,
                  ));
          }
          OnFullscreenChange(l) {
            if (!this.m_elBroadcastPlayer) return;
            let m = (0, Et.ww)(this.m_elBroadcastPlayer);
            this.setState({ bFullscreen: m });
          }
          BHideVideoControls() {
            let l = this.state.video;
            return !l || l.GetUserInputNeeded()
              ? !0
              : rt.es.GetBroadcastState(l) == rt.fK.Error;
          }
          render() {
            const l = this.state.video,
              m = l && l.IsPaused(),
              b = l && l.BHasDASHStats() && this.state.bShowStats,
              y = !!(l && l.IsReplay()),
              w = this.state.bMountControls,
              j = this.state.bControlsVisible || m,
              x = !!(l && l.GetUserInputNeeded()),
              R = l?.GetDASHPlayerStats(),
              et =
                l?.IsBroadcastVOD() &&
                x &&
                this.state.strInitialCapsuleImageUrl;
            let ot = "videoContainer";
            j || (ot += " HidePlayerControls"),
              m && (ot += " VideoPaused"),
              this.state.bFullscreen && (ot += " fullscreenVideo"),
              this.props.classes && (ot += " " + this.props.classes);
            let ft = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (ft = ft.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                ft.push(
                  (0, n.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, $.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              ft.push(
                (0, n.jsx)(
                  "div",
                  {
                    title: (0, $.we)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const Kt = w && !this.BHideVideoControls(),
              Ne = w && !this.state.bFullscreen,
              gt =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, n.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: ot,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                gt &&
                  (0, n.jsx)("div", {
                    className: it().BroadcastContext,
                    children: gt,
                  }),
                y && (0, n.jsx)(Mt, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, n.jsx)(_.m, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, n.jsx)("video", {
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
                  ? (0, n.jsx)(Ie, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                et &&
                  (0, n.jsx)("img", {
                    loading: "lazy",
                    className: (0, Zt.A)(
                      it().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                Kt &&
                  l &&
                  (0, n.jsx)(i, {
                    video: l,
                    actions: ft,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                Ne && (0, n.jsx)(o, { onClick: this.props.onRequestClose }),
                b &&
                  R &&
                  (0, n.jsx)(Ht, { stats: R, closeStats: this.CloseStats }),
                (0, n.jsx)(ie, { video: l }),
                x && l && (0, n.jsx)(Lt, { video: l }),
              ],
            });
          }
        };
        E([A.oI], D.prototype, "BindBroadcastPlayerRef", 1),
          E([A.oI], D.prototype, "BindVideoRef", 1),
          E([A.oI], D.prototype, "OnMouseDown", 1),
          E([A.oI], D.prototype, "OnMouseUp", 1),
          E([A.oI], D.prototype, "OnMouseMove", 1),
          E([A.oI], D.prototype, "OnMouseLeave", 1),
          E([A.oI], D.prototype, "HideControls", 1),
          E([A.oI], D.prototype, "UmountControls", 1),
          E([A.oI], D.prototype, "ShowStatsView", 1),
          E([A.oI], D.prototype, "OnContextMenu", 1),
          E([A.oI], D.prototype, "ToggleStatsView", 1),
          E([A.oI], D.prototype, "ShowStorePage", 1),
          E([A.oI], D.prototype, "CloseStats", 1),
          E([A.oI], D.prototype, "OnToggleFullscreen", 1),
          E([A.oI], D.prototype, "OnFullscreenChange", 1),
          (D = E([O.PA], D));
        let i = class extends H.Component {
          render() {
            const { video: l } = this.props;
            if (!l) return null;
            let m = l.has_segments;
            return (0, n.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, n.jsx)(pt, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, n.jsxs)("div", {
                  className: "videoControlsBottom" + (m ? "" : " noSegments"),
                  children: [
                    (0, n.jsx)(yt, {
                      video: l,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, n.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, n.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, n.jsx)(p, { video: l }),
                        (0, n.jsx)(B, { video: l }),
                        (0, n.jsx)(zt, {
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
        i = E([O.PA], i);
        class o extends H.PureComponent {
          render() {
            return this.props.onClick
              ? (0, n.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, n.jsx)(Q.sED, {}),
                })
              : null;
          }
        }
        class p extends H.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-at);
          }
          OnJumpForward() {
            this.props.video.JumpTime(at);
          }
          render() {
            let m = this.props.video,
              b = m.CanSeek();
            return (0, n.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, n.jsx)(F, { video: m }),
                b &&
                  (0, n.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, n.jsx)(Q.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, n.jsx)("div", {
                        className: "jumpAheadValue",
                        children: at,
                      }),
                    ],
                  }),
                (0, n.jsx)(z, { video: m }),
                b &&
                  (0, n.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, n.jsx)(Q.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, n.jsx)("div", {
                        className: "jumpAheadValue",
                        children: at,
                      }),
                    ],
                  }),
                b && (0, n.jsx)(U, { video: m }),
              ],
            });
          }
        }
        E([A.oI], p.prototype, "OnJumpBackward", 1),
          E([A.oI], p.prototype, "OnJumpForward", 1);
        const B = (0, O.PA)((l) => {
          if (l.video.IsBroadcastClip() || l.video.IsBroadcastVOD())
            return null;
          const m = (y) => {
            l.video.JumpToLiveEdge();
          };
          let b = l.video.IsOnLiveEdge();
          return (0, n.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, n.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (b ? " isLiveEdge" : ""),
              onClick: b ? void 0 : m,
              children: [
                (0, n.jsx)(Q.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, n.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, $.we)(
                    b
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let z = class extends H.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let m = this.props.video.IsPaused();
            return (0, n.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: m ? (0, n.jsx)(Q.jGG, {}) : (0, n.jsx)(Q.vRz, {}),
            });
          }
        };
        E([A.oI], z.prototype, "OnTogglePlayPause", 1), (z = E([O.PA], z));
        let F = class extends H.Component {
          constructor(l) {
            super(l), (0, Wt.Gn)(this), (this.video = l.video);
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
              b = l.GetPlaybackTime();
            for (let y = m.length - 1; y >= 0; y--)
              if (!(m[y].nTime >= b)) return m[y].nTime;
          }
          OnJumpToPreviousMarkerClicked(l) {
            let m = this.GetPreviousMarkerTime();
            m !== void 0 && this.props.video.Seek(m - 0.2);
          }
          render() {
            let l = this.props.video.BHasMarkersOrSegments();
            return (0, n.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (l ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, n.jsx)(Q.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        E([Wt.sH], F.prototype, "video", 2),
          E([Wt.EW], F.prototype, "has_previous_marker", 1),
          E([A.oI], F.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (F = E([O.PA], F));
        let U = class extends H.Component {
          constructor(l) {
            super(l), (0, Wt.Gn)(this), (this.video = l.video);
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
              b = l.GetPlaybackTime();
            for (let y = 0; y < m.length; y++)
              if (!(m[y].nTime <= b)) return m[y].nTime;
          }
          OnJumpToNextMarkerClicked(l) {
            let m = this.GetNextMarkerTime();
            m !== void 0 && this.props.video.Seek(m);
          }
          render() {
            let l = this.props.video.BHasMarkersOrSegments();
            return (0, n.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (l ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, n.jsx)(Q.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        E([Wt.sH], U.prototype, "video", 2),
          E([Wt.EW], U.prototype, "has_next_marker", 1),
          E([A.oI], U.prototype, "OnJumpToNextMarkerClicked", 1),
          (U = E([O.PA], U));
        const tt = (l) => {
          let m = () => l.onMouseEnter(l.pos);
          return (0, n.jsx)("div", {
            className: "timelineMarker",
            title: l.label,
            style: { left: l.pos + "%" },
            onMouseEnter: m,
            onMouseLeave: l.onMouseLeave,
            onMouseDown: l.onMouseDown ? l.onMouseDown : void 0,
            children: (0, n.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, n.jsx)(Q.Dp6, {}),
            }),
          });
        };
        function ht(l) {
          let m = l.startPos,
            b = l.endPos,
            y = "",
            w = 1;
          return (
            m < 0 && ((w = (b - m) / 10), (m = 0), (y = " hideFront")),
            (0, n.jsxs)("div", {
              className: "STV_timelineSegment" + y,
              style: { left: m + "%", width: b - m + "%", opacity: w },
              onClick: l.onClick,
              children: [
                (0, n.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: { borderColor: "rgb(" + l.color + ")" },
                }),
                (0, n.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: { color: "rgb(" + l.color + ")" },
                  children: l.label,
                }),
                (0, n.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: { borderColor: "rgb(" + l.color + ")" },
                }),
              ],
            })
          );
        }
        let yt = class extends H.Component {
          m_elSlider = H.createRef();
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
            const b = this.m_elSlider.current;
            if (b) {
              l.persist(), (this.m_rectSlider = b.getBoundingClientRect());
              let y = {};
              m === "start"
                ? ((y = { bStartMouseDown: !0 }), l.stopPropagation())
                : m === "end"
                  ? ((y = { bEndMouseDown: !0 }), l.stopPropagation())
                  : (y = { bGrabberMouseDown: !0 }),
                this.setState(y, () => this.AdjustSliderForClientX(l.clientX)),
                b.ownerDocument.defaultView?.addEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                b.ownerDocument.defaultView?.addEventListener(
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
            l.keyCode == lt.ek
              ? (this.props.video.JumpTime(-1 * at), l.preventDefault())
              : l.keyCode == lt.JI &&
                (this.props.video.JumpTime(1 * at), l.preventDefault());
          }
          AdjustSliderForClientX(l) {
            const m = this.m_rectSlider;
            if (!m) return;
            let b = this.props.video,
              y = b.GetTimelineStartPos(),
              w = b.GetTimelineStartPos() + b.GetTimelineDuration(),
              j = b.GetTimeAtMousePosition(l, m, y, w);
            const x = 5;
            if (this.state.bStartMouseDown) {
              const R = V.OQ(j, y, b.m_editorEndTime - x);
              b.m_editorStartTime = R;
            } else if (this.state.bEndMouseDown) {
              const R = V.OQ(j, b.m_editorStartTime + x, w);
              b.m_editorEndTime = R;
            } else
              j != this.state.nGrabberMouseDownTime &&
                this.setState({ nGrabberMouseDownTime: j });
          }
          OnMouseHoverMove(l) {
            this.AdjustHoverForClientX(l.clientX);
          }
          OnMouseHoverLeave(l) {
            this.setState({ hoverX: 0 });
          }
          AdjustHoverForClientX(l) {
            let m = this.props.video,
              b = m.GetTimelineStartPos(),
              y = m.GetTimelineStartPos() + m.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let w =
              this.m_rectSlider &&
              m.GetTimeAtMousePosition(l, this.m_rectSlider, b, y);
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
              b = l.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                rt.a0.Timeline,
              ),
              y = l.GetPercentOffsetFromTime(
                l.GetPlaybackTime(),
                rt.a0.Timeline,
              ),
              w = l.GetPercentOffsetFromTime(
                l.GetVideoAvailableStartTime(),
                rt.a0.Timeline,
              );
            w < 0.05 && (w = 0);
            let j = V.OQ(b, 0, 100).toFixed(1) + "%",
              x = V.OQ(y, 0, 100).toFixed(1) + "%",
              R = V.OQ(w, 0, 100).toFixed(1) + "%",
              et = {},
              ot = {},
              ft = {},
              Kt = {};
            m
              ? ((Kt.left = j), (et.width = j), (ot.width = x), (ft.width = R))
              : ((Kt.left = x), (ot.width = x), (ft.width = R));
            let Ne = (0, X.ap)(l.GetPlaybackTime()),
              gt = (0, X.ap)(this.state.nHoverValue ?? 0),
              Nt = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (Nt += " grabberDown"),
              l.IsTimelineMapActive() && (Nt += " minimapActive");
            let ae = "";
            (b = m ? b : y),
              b > 100
                ? (ae = " grabberOffScreenRight grabberOffscreen")
                : b < 0 && (ae = " grabberOffScreenLeft grabberOffscreen");
            let oe = [];
            l.GetTimelineMarkers().forEach((We, dr) => {
              let P = l.GetPercentOffsetFromTime(We.nTime, rt.a0.Timeline);
              P < 0 ||
                P > 100 ||
                oe.push(
                  (0, n.jsx)(
                    tt,
                    {
                      pos: P,
                      label: We.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    dr,
                  ),
                );
            });
            let le = [];
            l.GetTimelineSegments().forEach((We, dr) => {
              let P = l.GetPercentOffsetFromTime(We.nTimeStart, rt.a0.Timeline);
              if (P > 100) return;
              let N = l.GetPercentOffsetFromTime(We.nTimeEnd, rt.a0.Timeline);
              N < 0 ||
                le.push(
                  (0, n.jsx)(
                    ht,
                    {
                      startPos: P,
                      endPos: N,
                      label: We.strTemplateName,
                      color: We.color,
                      onClick: (Qr) => this.OnSegmentClick(We.nTimeStart),
                    },
                    dr,
                  ),
                );
            });
            const me = l.GetPercentOffsetFromTime(
                l.m_editorStartTime,
                rt.a0.Timeline,
              ),
              fe = l.GetPercentOffsetFromTime(
                l.m_editorEndTime,
                rt.a0.Timeline,
              ),
              cr = this.props.bIncludeClipEditor
                ? [
                    (0, n.jsx)(
                      tt,
                      {
                        pos: me,
                        label: (0, $.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (We) => this.OnMouseDown(We, "start"),
                      },
                      "start",
                    ),
                    (0, n.jsx)(
                      tt,
                      {
                        pos: fe,
                        label: (0, $.we)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (We) => this.OnMouseDown(We, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, n.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, n.jsxs)("div", {
                className: Nt,
                children: [
                  (0, n.jsx)("div", { className: "DialogLabel", children: Ne }),
                  (0, n.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: le,
                  }),
                  (0, n.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, n.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, n.jsx)("div", {
                          className: "STV_timelineValue",
                          style: et,
                        }),
                        (0, n.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: ot,
                        }),
                        (0, n.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: ft,
                        }),
                        oe,
                        cr,
                        !!this.state.hoverX &&
                          (0, n.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, n.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, n.jsx)("img", {
                                      style: { width: "150px" },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, n.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: gt,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, n.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: Kt,
                          children: (0, n.jsx)("div", {
                            className: "STV_timelineGrabber" + ae,
                            children: (0, n.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, n.jsx)(Q.apU, {}),
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
        E([A.oI], yt.prototype, "OnMouseDown", 1),
          E([A.oI], yt.prototype, "OnMouseMove", 1),
          E([A.oI], yt.prototype, "OnMouseUp", 1),
          E([A.oI], yt.prototype, "OnKeyDown", 1),
          E([A.oI], yt.prototype, "OnMouseHoverMove", 1),
          E([A.oI], yt.prototype, "OnMouseHoverLeave", 1),
          E([A.oI], yt.prototype, "AdjustHoverForClientX", 1),
          E([A.oI], yt.prototype, "OnSegmentClick", 1),
          E([A.oI], yt.prototype, "OnMarkerMouseEnter", 1),
          E([A.oI], yt.prototype, "OnMarkerMouseLeave", 1),
          (yt = E([O.PA], yt));
        let pt = class extends H.Component {
          state = { info: null };
          static getDerivedStateFromProps(l, m) {
            return (!m.info || m.info.m_steamIDBroadcast !== l.steamID) &&
              (m.info && (rt.es.StopInfo(m.info), (m.info = null)), l.steamID)
              ? { info: rt.es.StartInfo(l.steamID) }
              : null;
          }
          componentWillUnmount() {
            this.state.info && rt.es.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const l = this.props.steamID,
              m = this.props.onLocalStreamChange;
            return m && T.td.stream[l]
              ? (0, n.jsx)(Ot, { value: l, options: T.td.stream, onChange: m })
              : null;
          }
          render() {
            let { info: l } = this.state;
            if (!l) return null;
            let m = "";
            l.m_nViewerCount && (m = (0, st.Dq)(l.m_nViewerCount));
            let b =
                T.td.bValid && T.td.stream && T.td.stream[l.m_steamIDBroadcast],
              y =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(l.m_strAppId) > 0 || b);
            const w =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              b &&
              T.td.gidEvent;
            return (0, n.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, n.jsx)(te, {
                    className: "broadcastDetailsThumbBlur",
                    src: l.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, n.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    l &&
                      l.m_strAppTitle &&
                      (0, n.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, n.jsx)("span", {
                                className: "AppTitle",
                                children: l.m_strAppTitle,
                              }),
                              l.m_strTitle &&
                                (0, n.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", l.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          m &&
                            (0, n.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, n.jsx)(Q.y_e, {}),
                                (0, $.Yp)("#Broadcast_ViewerCount", m),
                              ],
                            }),
                        ],
                      }),
                    b &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, n.jsx)("div", {
                        className: "Actions",
                        children: (0, n.jsx)("div", {
                          onClick: (j) =>
                            this.props.onOpenLinkInNewWindow?.(j, T.td.link),
                          className: "BroadcastLink",
                          children: T.td.linkName,
                        }),
                      }),
                  ],
                }),
                w && (0, n.jsx)(Pt.m, { gidEvent: T.td.gidEvent }),
                y &&
                  (0, n.jsx)(ee.p, {
                    id:
                      T.td.bValid &&
                      T.td.stream &&
                      T.td.stream[l.m_steamIDBroadcast]
                        ? T.td.appID
                        : parseInt(l.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        pt = E([O.PA], pt);
        class Ot extends H.Component {
          showContextMenu(m) {
            const { options: b, value: y, onChange: w } = this.props,
              j = Object.keys(b).map((x) =>
                (0, n.jsx)(
                  q.IK,
                  {
                    onSelected: () => w(x),
                    bChecked: x === y,
                    children: (0, $.we)(b[x]),
                  },
                  x,
                ),
              );
            (0, kt.lX)((0, n.jsx)(q.tz, { children: j }), m);
          }
          render() {
            const { value: m, options: b } = this.props,
              y = b[m];
            return (0, n.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, n.jsxs)("span", { children: ["\xA0- ", (0, $.we)(y)] }),
                (0, n.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, n.jsx)(Q.GB9, {}),
                }),
              ],
            });
          }
        }
        E([A.oI], Ot.prototype, "showContextMenu", 1);
        let Ie = class extends H.Component {
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
              this.props.linkRegions.forEach((m, b) => {
                this.LoadLinkRegion(m, b);
              });
          }
          async LoadLinkRegion(l, m) {
            let b = this.state.sizableRegion.length;
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
              let b;
              (b = {
                left: Math.floor(this.state.sizableRegion[m].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[m].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[m].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[m].heightPct * 100),
                url: this.state.sizableRegion[m].link_url,
                link_description: this.state.sizableRegion[m].link_description,
                link_index: m,
              }),
                l.links.push(b);
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
            const b = [...this.state.sizableRegion];
            (b[l] = m),
              this.setState({ sizableRegion: b }, () => this.OnSaveRegions());
          }
          render() {
            return (0, n.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, n.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((l) => {
                          const m = (0, Le.p)(l.url);
                          return (0, n.jsx)(
                            C.uU,
                            {
                              href: l.url,
                              bForceExternal: m,
                              bUseLinkFilter: m,
                              children: (0, n.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: l.left + "%",
                                  top: l.top + "%",
                                  width: l.width + "%",
                                  height: l.height + "%",
                                },
                                children: (0, n.jsxs)("div", {
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
                        (0, n.jsx)(
                          re.I,
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
                      (0, n.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, $.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, n.jsx)("div", {
                    children: (0, $.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        E([A.oI], Ie.prototype, "AddLinkRegion", 1),
          E([A.oI], Ie.prototype, "LoadLinkRegion", 1),
          E([A.oI], Ie.prototype, "OnSaveRegions", 1),
          E([A.oI], Ie.prototype, "DeleteRegion", 1),
          E([A.oI], Ie.prototype, "UpdatePanel", 1),
          (Ie = E([O.PA], Ie));
      },
      22950: (Vt, ve, g) => {
        "use strict";
        g.d(ve, { es: () => at, fK: () => Gt, a0: () => E, fO: () => $t });
        var n = g(41735),
          Wt = g.n(n),
          O = g(14947),
          H = g(6600),
          kt = g(90828);
        function lt(D, i, o) {
          return [D, i, o];
        }
        class L extends Error {}
        class rt extends kt.J8 {
          m_appid;
          constructor(i) {
            super(), (this.m_appid = i || 0);
          }
          GetAppID() {
            return this.m_appid;
          }
          parseColor(i) {
            if (typeof i != "string" || !i.match(/^#[0-9a-fA-F]{6}$/))
              throw new L("expected color string");
            return [
              parseInt(i.substring(1, 3), 16),
              parseInt(i.substring(3, 5), 16),
              parseInt(i.substring(5, 7), 16),
            ];
          }
          parseString(i) {
            if (typeof i == "string") return i;
            throw new L("expected string");
          }
          parseNumber(i) {
            if (typeof i == "number") return i;
            throw new L("expected number");
          }
          parseDate(i) {
            if (typeof i == "number") return new Date(i);
            throw new L("expected timestamp");
          }
          parseArray(i, o) {
            let p = [];
            if (typeof i != "object" || !Array.isArray(i))
              throw new L("expected array");
            let B = i.length;
            for (let z = 0; z < B; ++z)
              try {
                p.push(o(i[z]));
              } catch (F) {
                throw (
                  ((F.message +=
                    `
...while parsing array element ` + z),
                  F)
                );
              }
            return p;
          }
          parseDict(i, o) {
            let p = new Map();
            if (typeof i != "object" || Array.isArray(i))
              throw new L("expected object");
            for (let B in i)
              try {
                p.set(B, o(i[B]));
              } catch (z) {
                throw (
                  ((z.message +=
                    `
...while parsing dictionary element ` + B),
                  z)
                );
              }
            return p;
          }
          parseBracket(i) {
            let o = {
              name: this.parseString(i.name),
              start: this.parseDate(i.start),
              color: [255, 0, 255],
            };
            return (
              "params" in i &&
                (o.params = this.parseDict(
                  i.params,
                  this.parseString.bind(this),
                )),
              "end" in i && (o.end = this.parseDate(i.end)),
              "color" in i && (o.color = this.parseColor(i.color)),
              o
            );
          }
          parseMarker(i) {
            let o = { time: this.parseDate(i.time), color: [0, 255, 255] };
            return (
              "name" in i && (o.name = this.parseString(i.name)),
              "params" in i &&
                (o.params = this.parseDict(
                  i.params,
                  this.parseString.bind(this),
                )),
              "color" in i && (o.color = this.parseColor(i.color)),
              o
            );
          }
          parseSoundTrack(i) {
            let o = {};
            return (
              "song_title" in i &&
                (o.song_title = this.parseString(i.song_title)),
              "appid" in i && (o.appid = this.parseNumber(i.appid)),
              "song_index" in i &&
                (o.song_index = this.parseNumber(i.song_index)),
              o
            );
          }
          parseBroadcastGameData(i) {
            let o = { appid: 0, brackets: [], markers: [] };
            return (
              "appid" in i && (o.appid = this.parseNumber(i.appid)),
              "brackets" in i &&
                (o.brackets = this.parseArray(
                  i.brackets,
                  this.parseBracket.bind(this),
                )),
              "markers" in i &&
                (o.markers = this.parseArray(
                  i.markers,
                  this.parseMarker.bind(this),
                )),
              "soundtrack" in i &&
                (o.soundtrack = this.parseSoundTrack(i.soundtrack)),
              o
            );
          }
          convertTime(i, o) {
            return i - o / 1e3;
          }
          UpdateMarkers(i, o) {
            let p = [],
              B = [];
            for (const z of i)
              z.persistent
                ? (B.length > 0 &&
                    (B[B.length - 1].nTimeEnd = this.convertTime(
                      z.Timestamp,
                      o,
                    )),
                  z.name.length > 0 &&
                    B.push({
                      strTemplateName: z.name,
                      nTimeStart: this.convertTime(z.Timestamp, o),
                      nTimeEnd: -1,
                      color: lt(z.color_r, z.color_g, z.color_b),
                    }))
                : p.push({
                    strTemplateName: z.name,
                    nTime: this.convertTime(z.Timestamp, o),
                    color: lt(z.color_r, z.color_g, z.color_b),
                  });
            return { rgMarkers: p, rgSegments: B };
          }
          UpdateRegions(i) {
            let o = [];
            for (const p of i)
              o.push({
                strTemplateName: p.name,
                min: { x: p.min_x, y: p.min_y },
                max: { x: p.max_x, y: p.max_y },
                behavior: p.behavior,
              });
            return o;
          }
          UpdateSoundtrack(i, o) {}
        }
        var ct = g(48937),
          _ = g(89083),
          q = g(13854),
          v = g(3166),
          Bt = g(27066),
          Oe = g(7409),
          vt = g(14043),
          f = g(8323),
          c = g(72604),
          r = Object.defineProperty,
          Pe = Object.getOwnPropertyDescriptor,
          Ce = (D, i, o, p) => {
            for (
              var B = p > 1 ? void 0 : p ? Pe(i, o) : i, z = D.length - 1, F;
              z >= 0;
              z--
            )
              (F = D[z]) && (B = (p ? F(i, o, B) : F(B)) || B);
            return p && B && r(i, o, B), B;
          };
        const lr = 250,
          nr = 250;
        class xt {
          m_elVideo;
          m_peerConnection = null;
          m_strBroadcastSteamID = "";
          m_ulWebRTCSessionID = "";
          m_schCandidateTimer = new f.LU();
          m_nHostCandidateGeneration = 0;
          m_nCandidateUpdateIntervalMS = 0;
          m_listeners = new f.Ji();
          m_bFirstPlay = !0;
          m_bStatsViewVisible = !1;
          m_schCaptureDisplayStatsTrigger = new f.LU();
          m_stats = new Oe._L();
          constructor(i) {
            (0, O.Gn)(this), (this.m_elVideo = i);
          }
          async PlayMPD(i, o, p) {}
          async PlayWebRTC(i, o, p, B, z) {
            (this.m_strBroadcastSteamID = i),
              (this.m_ulWebRTCSessionID = p),
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
            let F = { urls: ["stun:" + B] },
              U = { urls: ["turn:" + B], username: o, credential: p },
              tt = { iceServers: [F, U], iceTransportPolicy: "relay" };
            const ht = new RTCPeerConnection(tt);
            (this.m_peerConnection = ht),
              (ht.oniceconnectionstatechange = ((yt) => {
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
              (ht.onicecandidate = ((yt) => {
                if (yt.candidate) {
                  const pt = new FormData();
                  pt.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    pt.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    pt.append("sdp_mid", String(yt.candidate.sdpMid)),
                    pt.append(
                      "sdp_mline_index",
                      String(yt.candidate.sdpMLineIndex),
                    ),
                    pt.append("candidate", yt.candidate.candidate),
                    Wt()
                      .post(
                        `${v.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                        pt,
                      )
                      .then((Ot) => {
                        const Ie = Ot.data;
                        (Ie.success && Ie.success == c.R) ||
                          console.log(
                            "Failed to add a WebRTC session ICE candidate: " +
                              String(Ie.success),
                          );
                      })
                      .catch((Ot) =>
                        console.log(
                          "Failed to add a WebRTC session ICE candidate" + Ot,
                        ),
                      );
                }
              }).bind(this)),
              (ht.ontrack = ((yt) => {
                yt.track.kind === "video" &&
                  ((this.m_elVideo.src = ""),
                  (this.m_elVideo.srcObject = yt.streams[0]),
                  this.Play());
              }).bind(this)),
              ht
                .setRemoteDescription({ type: "offer", sdp: z })
                .then(async () => {
                  await ht.setLocalDescription(await ht.createAnswer());
                  const yt = new FormData();
                  yt.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    yt.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    yt.append("answer", ht.localDescription?.sdp ?? "");
                  try {
                    await Wt()
                      .post(
                        `${v.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                        yt,
                      )
                      .then((pt) => {
                        const Ot = pt.data;
                        if (!(Ot.success && Ot.success == c.R))
                          throw new Error(String(Ot.success));
                      });
                  } catch (pt) {
                    console.log(
                      "Failed to set the WebRTC session answer: " + pt,
                    ),
                      this.OnWebRTCConnectionRetry();
                    return;
                  }
                  (this.m_nCandidateUpdateIntervalMS = lr),
                    this.m_schCandidateTimer.Schedule(
                      this.m_nCandidateUpdateIntervalMS,
                      () => this.GetHostCandidates(),
                    );
                });
          }
          async GetHostCandidates() {
            const i = new FormData();
            i.append("broadcaststeamid", this.m_strBroadcastSteamID),
              i.append("webrtc_session_id", this.m_ulWebRTCSessionID),
              i.append(
                "candidate_generation",
                String(this.m_nHostCandidateGeneration),
              );
            try {
              await Wt()
                .post(
                  `${v.TS.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                  i,
                )
                .then((o) => {
                  const p = o.data,
                    B = p.data,
                    z = this.m_peerConnection;
                  if (p.success && p.success == c.R)
                    z &&
                    B.candidate_generation > this.m_nHostCandidateGeneration
                      ? (B.candidates.forEach((F) => {
                          const U = new RTCIceCandidate({
                            sdpMid: F.sdp_mid,
                            sdpMLineIndex: F.sdp_mline_index,
                            candidate: F.candidate,
                          });
                          z.addIceCandidate(U).catch((tt) => console.error(tt));
                        }),
                        (this.m_nHostCandidateGeneration =
                          B.candidate_generation))
                      : this.m_nHostCandidateGeneration > 0 &&
                        (this.m_nCandidateUpdateIntervalMS *= 2);
                  else throw new Error(String(p.success));
                });
            } catch (o) {
              console.log("Failed to get WebRTC session ICE candidates" + o),
                this.OnWebRTCConnectionRetry();
              return;
            }
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates(),
            );
          }
          DispatchEvent(i, o = null) {
            let p = new CustomEvent(i, {
              cancelable: !0,
              bubbles: !0,
              detail: o,
            });
            this.m_elVideo.dispatchEvent(p);
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
            const i = this.m_bFirstPlay;
            this.m_bFirstPlay = !1;
            let o = !1;
            const p = () => {
                (o = !0),
                  this.m_stats
                    .GetFPSMonitor()
                    .StartTracking(() =>
                      this.m_stats.ExtractFrameInfo(this.m_elVideo),
                    );
              },
              B = (F, U) => !1,
              z = (F, U) => !1;
            try {
              await this.m_elVideo.play(), p();
            } catch (F) {
              F.name === "NotAllowedError"
                ? B("Failed to play video, probably due to auto play policy", F)
                : z("Failed to play video", F);
            }
            !o && i && this.DispatchEvent("valve-userinputneeded");
          }
          Pause() {
            this.m_elVideo.pause();
          }
          CanSeek() {
            return !1;
          }
          SeekAndPlay(i) {
            return this.Play(), 0;
          }
          Seek(i) {
            return 0;
          }
          JumpTime(i) {
            return 0;
          }
          IsMuted() {
            return this.m_elVideo.muted;
          }
          SetMuted(i) {
            this.m_elVideo.muted = i;
          }
          SetVolume(i) {
            (i = q.OQ(i, 0, 1)), (this.m_elVideo.volume = i);
          }
          GetVolume() {
            return this.m_elVideo.volume;
          }
          GetDASHPlayerStats() {
            return this.m_stats;
          }
          SetStatsViewIsVisible(i) {
            i && !this.m_bStatsViewVisible
              ? (this.CaptureStatsForDisplay(),
                this.m_schCaptureDisplayStatsTrigger.Schedule(
                  nr,
                  this.CaptureStatsForDisplay,
                ))
              : !i &&
                this.m_bStatsViewVisible &&
                this.m_schCaptureDisplayStatsTrigger.Cancel(),
              (this.m_bStatsViewVisible = i);
          }
          CaptureStatsForDisplay() {
            this.m_stats.SetHTMLVideoPlayerDisplay(
              this.m_elVideo.videoWidth,
              this.m_elVideo.videoHeight,
              this.m_elVideo.clientWidth,
              this.m_elVideo.clientHeight,
            ),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                nr,
                this.CaptureStatsForDisplay,
              );
          }
          OnVideoPause(i) {
            this.m_stats.GetFPSMonitor().Close();
          }
          OnVideoResize(i) {
            this.m_stats.GetFPSMonitor().SetWindowResized();
          }
          GetVideoRepresentations() {
            let i = [];
            return i.push({ id: vt.Y, displayName: "Auto", selected: !0 }), i;
          }
          SetVideoRepresentation(i) {}
          IsLiveContent() {
            return !0;
          }
          BHasTimedText() {
            return !1;
          }
        }
        Ce([Bt.o], xt.prototype, "PlayWebRTC", 1),
          Ce([O.XI.bound], xt.prototype, "CaptureStatsForDisplay", 1),
          Ce([Bt.o], xt.prototype, "OnVideoPause", 1),
          Ce([Bt.o], xt.prototype, "OnVideoResize", 1);
        var Ft = g(99412),
          Ct = g(90711),
          _t = g(41635),
          Zt = g(71742),
          At = g(18210),
          Qt = g(34592),
          te = g(40497),
          ee = g(9032),
          Pt = g(35038),
          re = g(13018),
          Q = g(80613),
          C = g.n(Q),
          M = g(75245);
        function Et(D) {
          return "unknown ETrailerConvertState ( " + D + " )";
        }
        function $(D) {
          return "unknown ETrailerConvertTargetType ( " + D + " )";
        }
        class st extends Q.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              st.prototype.video_id || M.Sg(st.M()),
              Q.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
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
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = M.w0(st.M())), st.sm_mbf;
          }
          toObject(i = !1) {
            return st.toObject(i, this);
          }
          static toObject(i, o) {
            return M.BT(st.M(), i, o);
          }
          static fromObject(i) {
            return M.Uq(st.M(), i);
          }
          static deserializeBinary(i) {
            let o = new (C().BinaryReader)(i),
              p = new st();
            return st.deserializeBinaryFromReader(p, o);
          }
          static deserializeBinaryFromReader(i, o) {
            return M.zj(st.MBF(), i, o);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return st.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, o) {
            M.i0(st.M(), i, o);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Request";
          }
        }
        class V extends Q.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              V.prototype.video_id || M.Sg(V.M()),
              Q.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
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
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = M.w0(V.M())), V.sm_mbf;
          }
          toObject(i = !1) {
            return V.toObject(i, this);
          }
          static toObject(i, o) {
            return M.BT(V.M(), i, o);
          }
          static fromObject(i) {
            return M.Uq(V.M(), i);
          }
          static deserializeBinary(i) {
            let o = new (C().BinaryReader)(i),
              p = new V();
            return V.deserializeBinaryFromReader(p, o);
          }
          static deserializeBinaryFromReader(i, o) {
            return M.zj(V.MBF(), i, o);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return V.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, o) {
            M.i0(V.M(), i, o);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Response";
          }
        }
        class A extends Q.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              A.prototype.encryption_key || M.Sg(A.M()),
              Q.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    encryption_key: {
                      n: 1,
                      br: M.qM.readBytes,
                      bw: M.gp.writeBytes,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = M.w0(A.M())), A.sm_mbf;
          }
          toObject(i = !1) {
            return A.toObject(i, this);
          }
          static toObject(i, o) {
            return M.BT(A.M(), i, o);
          }
          static fromObject(i) {
            return M.Uq(A.M(), i);
          }
          static deserializeBinary(i) {
            let o = new (C().BinaryReader)(i),
              p = new A();
            return A.deserializeBinaryFromReader(p, o);
          }
          static deserializeBinaryFromReader(i, o) {
            return M.zj(A.MBF(), i, o);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return A.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, o) {
            M.i0(A.M(), i, o);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_UnlockedH264_Notification";
          }
        }
        class nt extends Q.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              nt.prototype.app_id || M.Sg(nt.M()),
              Q.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    app_id: { n: 1, br: M.qM.readUint32, bw: M.gp.writeUint32 },
                    client_cellid: {
                      n: 2,
                      br: M.qM.readUint32,
                      bw: M.gp.writeUint32,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = M.w0(nt.M())), nt.sm_mbf;
          }
          toObject(i = !1) {
            return nt.toObject(i, this);
          }
          static toObject(i, o) {
            return M.BT(nt.M(), i, o);
          }
          static fromObject(i) {
            return M.Uq(nt.M(), i);
          }
          static deserializeBinary(i) {
            let o = new (C().BinaryReader)(i),
              p = new nt();
            return nt.deserializeBinaryFromReader(p, o);
          }
          static deserializeBinaryFromReader(i, o) {
            return M.zj(nt.MBF(), i, o);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, o) {
            M.i0(nt.M(), i, o);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Request";
          }
        }
        class T extends Q.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              T.prototype.app_id || M.Sg(T.M()),
              Q.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    app_id: { n: 1, br: M.qM.readUint32, bw: M.gp.writeUint32 },
                    opf_settings: {
                      n: 2,
                      br: M.qM.readString,
                      bw: M.gp.writeString,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = M.w0(T.M())), T.sm_mbf;
          }
          toObject(i = !1) {
            return T.toObject(i, this);
          }
          static toObject(i, o) {
            return M.BT(T.M(), i, o);
          }
          static fromObject(i) {
            return M.Uq(T.M(), i);
          }
          static deserializeBinary(i) {
            let o = new (C().BinaryReader)(i),
              p = new T();
            return T.deserializeBinaryFromReader(p, o);
          }
          static deserializeBinaryFromReader(i, o) {
            return M.zj(T.MBF(), i, o);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return T.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, o) {
            M.i0(T.M(), i, o);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Response";
          }
        }
        class X extends Q.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              X.prototype.app_id || M.Sg(X.M()),
              Q.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
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
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = M.w0(X.M())), X.sm_mbf;
          }
          toObject(i = !1) {
            return X.toObject(i, this);
          }
          static toObject(i, o) {
            return M.BT(X.M(), i, o);
          }
          static fromObject(i) {
            return M.Uq(X.M(), i);
          }
          static deserializeBinary(i) {
            let o = new (C().BinaryReader)(i),
              p = new X();
            return X.deserializeBinaryFromReader(p, o);
          }
          static deserializeBinaryFromReader(i, o) {
            return M.zj(X.MBF(), i, o);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return X.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, o) {
            M.i0(X.M(), i, o);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "VideoBookmark";
          }
        }
        class wt extends Q.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              wt.prototype.bookmarks || M.Sg(wt.M()),
              Q.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: { bookmarks: { n: 1, c: X, r: !0, q: !0 } },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = M.w0(wt.M())), wt.sm_mbf;
          }
          toObject(i = !1) {
            return wt.toObject(i, this);
          }
          static toObject(i, o) {
            return M.BT(wt.M(), i, o);
          }
          static fromObject(i) {
            return M.Uq(wt.M(), i);
          }
          static deserializeBinary(i) {
            let o = new (C().BinaryReader)(i),
              p = new wt();
            return wt.deserializeBinaryFromReader(p, o);
          }
          static deserializeBinaryFromReader(i, o) {
            return M.zj(wt.MBF(), i, o);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, o) {
            M.i0(wt.M(), i, o);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_SetVideoBookmark_Notification";
          }
        }
        class it extends Q.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              it.prototype.appids || M.Sg(it.M()),
              Q.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
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
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = M.w0(it.M())), it.sm_mbf;
          }
          toObject(i = !1) {
            return it.toObject(i, this);
          }
          static toObject(i, o) {
            return M.BT(it.M(), i, o);
          }
          static fromObject(i) {
            return M.Uq(it.M(), i);
          }
          static deserializeBinary(i) {
            let o = new (C().BinaryReader)(i),
              p = new it();
            return it.deserializeBinaryFromReader(p, o);
          }
          static deserializeBinaryFromReader(i, o) {
            return M.zj(it.MBF(), i, o);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return it.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, o) {
            M.i0(it.M(), i, o);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Request";
          }
        }
        class It extends Q.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              It.prototype.bookmarks || M.Sg(It.M()),
              Q.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: { bookmarks: { n: 1, c: X, r: !0, q: !0 } },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = M.w0(It.M())), It.sm_mbf;
          }
          toObject(i = !1) {
            return It.toObject(i, this);
          }
          static toObject(i, o) {
            return M.BT(It.M(), i, o);
          }
          static fromObject(i) {
            return M.Uq(It.M(), i);
          }
          static deserializeBinary(i) {
            let o = new (C().BinaryReader)(i),
              p = new It();
            return It.deserializeBinaryFromReader(p, o);
          }
          static deserializeBinaryFromReader(i, o) {
            return M.zj(It.MBF(), i, o);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return It.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, o) {
            M.i0(It.M(), i, o);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Response";
          }
        }
        var Yt;
        ((D) => {
          function i(B, z, F) {
            return B.SendMsg(
              "Video.ClientGetVideoURL#1",
              (0, Pt.I8)(st, z, F),
              V,
              { ePrivilege: 1 },
            );
          }
          D.ClientGetVideoURL = i;
          function o(B, z) {
            return B.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, Pt.I8)(wt, z),
              { ePrivilege: 1 },
            );
          }
          D.SetVideoBookmark = o;
          function p(B, z, F) {
            return B.SendMsg(
              "Video.GetVideoBookmarks#1",
              (0, Pt.I8)(it, z, F),
              It,
              { ePrivilege: 1 },
            );
          }
          D.GetVideoBookmarks = p;
        })(Yt || (Yt = {}));
        var Rt;
        ((D) => {
          D.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: A,
          };
        })(Rt || (Rt = {}));
        var Tt;
        ((D) => {
          function i(o, p, B) {
            return o.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, Pt.I8)(nt, p, B),
              T,
              { ePrivilege: 1 },
            );
          }
          D.ClientGetOPFSettings = i;
        })(Tt || (Tt = {}));
        class Mt {
          static s_VODStore;
          m_transport = null;
          m_mapBookmarks = new Map();
          SetBookmarkForApp(i, o) {
            this.ValidateBookmarkData(o)
              ? this.m_mapBookmarks.set(i, X.fromObject(o))
              : this.InitializeBookmarkForApp(i);
          }
          ValidateBookmarkData(i) {
            const o = i;
            return typeof o == "object"
              ? Number.isInteger(o.playback_position_in_seconds) &&
                  Number.isInteger(o.app_id)
              : !1;
          }
          InitializeBookmarkForApp(i) {
            if (!this.m_mapBookmarks.has(i)) {
              let o = {
                app_id: i,
                playback_position_in_seconds: 0,
                video_track_id: "0",
                audio_track_id: "0",
                timedtext_track_id: "0",
                hide_from_watch_history: !1,
                hide_from_library: !1,
              };
              this.m_mapBookmarks.set(i, new X(o));
            }
          }
          GetBookmarkPlayTimeInSeconds(i) {
            let o = this.m_mapBookmarks.get(i);
            if (o) {
              let p = o.playback_position_in_seconds();
              if (Number.isInteger(p)) return p;
            }
            return 0;
          }
          async SendBookMarkedTimeToServer(i, o, p, B, z) {
            if (!v.iA.logged_in) return;
            if (!this.m_transport) {
              console.warn(
                "CVideoBookmarkStore:SetBookMark no auth token / transport",
              );
              return;
            }
            const F = Pt.w.Init(wt);
            let U = this.m_mapBookmarks.get(i);
            if (U) {
              let tt = !1;
              U.app_id() != i && ((tt = !0), U.set_app_id(i)),
                U.playback_position_in_seconds() != o &&
                  ((tt = !0), U.set_playback_position_in_seconds(o)),
                (p = p || "0"),
                U.video_track_id() != p && (U.set_video_track_id(p), (tt = !0)),
                (B = B || "0"),
                U.audio_track_id() != B && (U.set_audio_track_id(B), (tt = !0)),
                (z = z || "0"),
                z != U.timedtext_track_id() &&
                  (U.set_timedtext_track_id(z), (tt = !0)),
                tt &&
                  (F.Body().add_bookmarks(U),
                  Yt.SetVideoBookmark(this.m_transport, F));
            }
          }
          static Get() {
            return (
              Mt.s_VODStore ||
                ((Mt.s_VODStore = new Mt()), Mt.s_VODStore.Init()),
              Mt.s_VODStore
            );
          }
          Init() {
            v.iA.logged_in && this.LoadWatchVideoOAuthToken();
          }
          async LoadWatchVideoOAuthToken() {
            const i =
                (0, v.yK)() == "community"
                  ? v.TS.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                  : v.TS.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
              o = {};
            try {
              let p = await Wt().get(i, { params: o, withCredentials: !0 });
              if (
                p &&
                p.status == 200 &&
                p.data &&
                p.data.success == c.R &&
                p.data.webapi_token
              ) {
                this.m_transport = new re.D(
                  v.TS.WEBAPI_BASE_URL,
                  p.data.webapi_token,
                ).GetServiceTransport();
                return;
              }
            } catch (p) {
              let B = (0, Qt.H)(p);
              console.error(
                "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                  B.strErrorMsg,
                B,
              );
            }
          }
        }
        class ie {
          m_appid;
          constructor(i) {
            this.m_appid = i;
          }
          async SetBookmark(i, o, p, B) {
            v.iA.logged_in &&
              Mt.Get().SendBookMarkedTimeToServer(
                this.m_appid,
                Math.floor(i),
                o,
                p,
                B,
              );
          }
          GetBeginPlaytime() {
            return v.iA.logged_in
              ? Mt.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
              : 0;
          }
        }
        var Lt = g(44930),
          Ee = Object.defineProperty,
          se = Object.getOwnPropertyDescriptor,
          k = (D, i, o, p) => {
            for (
              var B = p > 1 ? void 0 : p ? se(i, o) : i, z = D.length - 1, F;
              z >= 0;
              z--
            )
              (F = D[z]) && (B = (p ? F(i, o, B) : F(B)) || B);
            return p && B && Ee(i, o, B), B;
          };
        const Ht = 1800,
          Jt = 1e3,
          Xt = 5 * 1e3,
          $t = 7;
        var Gt = ((D) => (
          (D[(D.None = 0)] = "None"),
          (D[(D.Unlocking = 1)] = "Unlocking"),
          (D[(D.Loading = 2)] = "Loading"),
          (D[(D.Ready = 3)] = "Ready"),
          (D[(D.Error = 4)] = "Error"),
          D
        ))(Gt || {});
        async function dt(D, i, o) {
          if (!i) return;
          let p = new FormData();
          p.append("steamid", D),
            p.append("broadcastid", i),
            p.append("viewertoken", o);
          try {
            await Wt().post(v.TS.CHAT_BASE_URL + "broadcast/stopwatching", p);
          } catch {}
        }
        class zt {
          m_rtUnlockTime = 0;
          m_schUnlockTimeout = new f.LU();
          m_broadcast;
          m_video;
          UnlockH264(i, o) {
            this.BCanUnlockH264()
              ? (i.SetState(1, ""),
                console.log("Unlocking H.264 for broadcast video playback"),
                this.RequestUnlockH264(),
                (this.m_broadcast = i),
                (this.m_video = o),
                (this.m_rtUnlockTime = Date.now()),
                this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                ))
              : i.SetState(4, (0, At.we)("#BroadcastWatch_MinBrowser"));
          }
          BCanUnlockH264() {
            return (0, Lt.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Client supports direct H.264 unlock"), !0)
              : (0, Lt.Dp)("BrowserView.PostMessageToParent")
                ? (console.log("Client supports browserview H.264 unlock"), !0)
                : (console.log("Client does not support H.264 unlock"), !1);
          }
          RequestUnlockH264() {
            (0, Lt.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Requesting direct H.264 unlock"),
                SteamClient.RemotePlay.UnlockH264())
              : (0, Lt.Dp)("BrowserView.PostMessageToParent")
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
                  (0, At.we)("#BroadcastWatch_MinBrowser"),
                ))
              : this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                );
          }
        }
        class St {
          constructor() {
            (0, O.Gn)(this);
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
          m_schManifestTimeout = new f.LU();
          m_schHeartbeatTimeout = new f.LU();
          SetState(i, o = "") {
            (this.m_eWatchState = i),
              (this.m_strStateDescription = o),
              i == 4 && console.log(this.m_strStateDescription);
          }
        }
        k([O.sH], St.prototype, "m_ulBroadcastID", 2),
          k([O.sH], St.prototype, "m_eWatchState", 2),
          k([O.sH], St.prototype, "m_strStateDescription", 2),
          k([O.XI], St.prototype, "SetState", 1);
        class ut {
          m_steamIDBroadcast = "";
          m_bInitialized = !1;
          m_strTitle = "";
          m_strAppId = "" + $t;
          m_nAppID = $t;
          m_strAppTitle = "";
          m_strThumbnailUrl = "";
          m_nViewerCount = 0;
          m_bIsOnline = !1;
          m_schUpdateTimeout = new f.LU();
          m_nRefCount = 0;
          constructor(i) {
            (0, O.Gn)(this), (this.m_steamIDBroadcast = i);
          }
        }
        k([O.sH], ut.prototype, "m_bInitialized", 2),
          k([O.sH], ut.prototype, "m_strTitle", 2),
          k([O.sH], ut.prototype, "m_strAppId", 2),
          k([O.sH], ut.prototype, "m_nAppID", 2),
          k([O.sH], ut.prototype, "m_strAppTitle", 2),
          k([O.sH], ut.prototype, "m_strThumbnailUrl", 2),
          k([O.sH], ut.prototype, "m_nViewerCount", 2),
          k([O.sH], ut.prototype, "m_bIsOnline", 2);
        class bt {
          constructor() {
            (0, O.Gn)(this);
          }
          m_eWatchState = 0;
          m_strStateDescription = "";
          m_rgVideos = [];
          SetState(i, o = "") {
            (this.m_eWatchState = i),
              (this.m_strStateDescription = o),
              i == 4 && console.log(this.m_strStateDescription);
          }
        }
        k([O.sH], bt.prototype, "m_eWatchState", 2),
          k([O.sH], bt.prototype, "m_strStateDescription", 2),
          k([O.XI], bt.prototype, "SetState", 1);
        class Le extends bt {
          m_clipID;
          m_data;
        }
        class ne extends bt {
          m_nAppIDVOD;
          m_manifestURL;
        }
        class qt {
          m_mapBroadcasts = new Map();
          m_mapClips = new Map();
          m_mapVODs = new Map();
          m_activeVideo = null;
          m_broadcastSettings = { nVolume: 1, bMuted: !1, ulViewerToken: "0" };
          m_schSaveSettings = new f.LU();
          m_broadcastInfos = {};
          constructor() {
            (0, O.Gn)(this), this.LoadBroadcastSettings();
          }
          GetBroadcastState(i) {
            if (i.IsBroadcastClip()) {
              let o = this.m_mapClips.get(i.GetBroadcastClipID());
              return o ? o.m_eWatchState : 0;
            } else if (i.IsBroadcastVOD()) {
              const o = this.m_mapVODs.get(i.GetBroadcastAppIDVOD());
              return o ? o.m_eWatchState : 0;
            } else {
              let o = this.m_mapBroadcasts.get(i.GetBroadcastSteamID());
              return o ? o.m_eWatchState : 0;
            }
          }
          GetBroadcastStateDescription(i) {
            if (i.IsBroadcastClip()) {
              let o = this.m_mapClips.get(i.GetBroadcastClipID());
              return o ? o.m_strStateDescription : "";
            } else if (i.IsBroadcastVOD()) {
              const o = this.m_mapVODs.get(i.GetBroadcastAppIDVOD());
              return o ? o.m_strStateDescription : "";
            } else {
              let o = this.m_mapBroadcasts.get(i.GetBroadcastSteamID());
              return o ? o.m_strStateDescription : "";
            }
          }
          CreateBroadcastVideo(i, o, p, B) {
            let z = this.GetOrCreateBroadcast(o),
              { nVolume: F, bMuted: U } = this.m_broadcastSettings,
              tt = new mt(i, F, U, p);
            return (
              tt.SetBroadcastSteamID(o),
              z.m_rgVideos.push(tt),
              (z.m_bWebRTC = B),
              !(0, ct.Mc)() && !(0, ct.aM)() && new zt().UnlockH264(z, tt),
              tt
            );
          }
          CreateClipVideo(i, o, p) {
            let B = this.GetOrCreateClip(o),
              { nVolume: z, bMuted: F } = this.m_broadcastSettings,
              U = new mt(i, z, F, p);
            return (
              U.SetBroadcastClipID(o),
              B.m_rgVideos.push(U),
              !(0, ct.Mc)() && !(0, ct.aM)() && new zt().UnlockH264(B, U),
              U
            );
          }
          CreateVODVideo(i, o, p) {
            let B = this.GetOrCreateVOD(o),
              { nVolume: z, bMuted: F } = this.m_broadcastSettings,
              U = new mt(i, z, F, p);
            return (
              U.SetBroadcastAppIDVOD(o),
              B.m_rgVideos.push(U),
              !(0, ct.Mc)() && !(0, ct.aM)() && new zt().UnlockH264(B, U),
              U
            );
          }
          StartVideo(i) {
            if (i.IsBroadcastClip()) {
              console.log(`Starting clip for ${i.GetBroadcastClipID()}`);
              let o = this.m_mapClips.get(i.GetBroadcastClipID());
              if (!o) return;
              this.SetActiveVideo(i),
                o.m_eWatchState == 0
                  ? this.GetClipManifest(o, i.GetWatchLocation())
                  : o.m_eWatchState == 3 && i.StartClip(o);
            } else if (i.IsBroadcastVOD()) {
              console.log(`Starting VOD for ${i.GetBroadcastAppIDVOD()}`);
              let o = this.m_mapVODs.get(i.GetBroadcastAppIDVOD());
              if (!o) return;
              this.SetActiveVideo(i),
                o.m_eWatchState == 0
                  ? this.GetVODManifest(o, i.GetWatchLocation())
                  : o.m_eWatchState == 3 && i.StartVOD(o);
            } else {
              let o = this.m_mapBroadcasts.get(i.GetBroadcastSteamID());
              if (!o) return;
              this.SetActiveVideo(i),
                o.m_eWatchState == 0
                  ? this.GetBroadcastManifest(o, i.GetWatchLocation())
                  : o.m_eWatchState == 3 && i.StartBroadcast(o);
            }
          }
          SetActiveVideo(i) {
            this.m_mapBroadcasts.forEach((o) => {
              for (let p of o.m_rgVideos)
                p != i && p.StopPlaybackTillUserInput();
            }),
              this.m_mapClips.forEach((o) => {
                for (let p of o.m_rgVideos)
                  p != i && p.StopPlaybackTillUserInput();
              }),
              (this.m_activeVideo = i);
          }
          PauseAllVideo() {
            this.m_mapBroadcasts.forEach((i) => {
              for (let o of i.m_rgVideos) o.StopPlaybackTillUserInput();
            });
          }
          async StopVideo(i) {
            let o = i.GetBroadcastSteamID(),
              p = this.m_mapBroadcasts.get(o);
            i.Stop(),
              p &&
                (p.m_ulBroadcastID &&
                  dt(
                    o,
                    p.m_ulBroadcastID,
                    this.m_broadcastSettings.ulViewerToken,
                  ),
                _t.Wp(p.m_rgVideos, (B) => B == i),
                this.RemoveBroadcastIfUnused(p));
          }
          StartInfo(i) {
            const o = this.GetOrCreateBroadcastInfo(i);
            return (
              o.m_nRefCount++,
              (!o.m_bInitialized || !o.m_schUpdateTimeout.IsScheduled()) &&
                this.LoadBroadcastInfo(o),
              o
            );
          }
          StopInfo(i) {
            i.m_nRefCount--;
          }
          GetOrCreateBroadcastInfo(i) {
            if (!i) return new ut("");
            if (!this.m_broadcastInfos[i]) {
              const o = (0, O.sH)(new ut(i));
              this.m_broadcastInfos[i] = o;
            }
            return this.m_broadcastInfos[i];
          }
          GetOrCreateBroadcast(i) {
            let o = this.m_mapBroadcasts.get(i);
            return (
              o ||
              ((o = new St()),
              (o.m_steamIDBroadcast = i),
              (o.m_eWatchState = 0),
              this.m_mapBroadcasts.set(i, o),
              o)
            );
          }
          GetBroadcast(i) {
            return this.m_mapBroadcasts.get(i);
          }
          GetBroadcastClip(i) {
            return this.m_mapClips.get(i);
          }
          GetBroadcastVOD(i) {
            return this.m_mapVODs.get(i);
          }
          RemoveBroadcastIfUnused(i) {
            i.m_rgVideos.length ||
              (i.m_schHeartbeatTimeout.Cancel(),
              i.m_schManifestTimeout.Cancel(),
              this.m_mapBroadcasts.delete(i.m_steamIDBroadcast));
          }
          GetOrCreateClip(i) {
            let o = this.m_mapClips.get(i);
            return (
              o ||
              ((o = new Le()),
              (o.m_clipID = i),
              (o.m_eWatchState = 0),
              this.m_mapClips.set(i, o),
              o)
            );
          }
          GetOrCreateVOD(i) {
            let o = this.m_mapVODs.get(i);
            return (
              o ||
              ((o = new ne()),
              (o.m_nAppIDVOD = i),
              (o.m_eWatchState = 0),
              this.m_mapVODs.set(i, o),
              o)
            );
          }
          async LoadBroadcastInfo(i) {
            let o = "0",
              p = this.m_mapBroadcasts.get(i.m_steamIDBroadcast);
            if ((p && (o = p.m_ulBroadcastID), i.m_nRefCount == 0)) return;
            const B = {
              steamid: i.m_steamIDBroadcast,
              broadcastid: o,
              location:
                p &&
                p.m_rgVideos &&
                p.m_rgVideos[0] &&
                p.m_rgVideos[0].GetWatchLocation(),
            };
            try {
              const z = await Wt().get(
                `${v.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                { params: B },
              );
              if (!z || !z.data || !z.data.success || z.data.success != c.R) {
                i.m_bInitialized = !0;
                return;
              }
              const F = z.data;
              (0, O.h5)(() => {
                (i.m_bInitialized = !0),
                  (i.m_strTitle = F.title),
                  (i.m_strAppId = F.appid),
                  (i.m_nAppID = Number.parseInt(F.appid)),
                  (i.m_strAppTitle = F.app_title),
                  (i.m_strThumbnailUrl = F.thumbnail_url),
                  (i.m_nViewerCount = F.viewer_count),
                  (i.m_bIsOnline = F.is_online),
                  !i.m_strTitle &&
                    H.td &&
                    ((i.m_strTitle = H.td.name),
                    (i.m_strAppTitle = H.td.appName || H.td.name));
                const U = F.update_interval;
                U &&
                  typeof U == "number" &&
                  i.m_schUpdateTimeout.Schedule(U * 1e3, () =>
                    this.LoadBroadcastInfo(i),
                  );
              });
            } catch (z) {
              console.error(z);
            }
          }
          DelayedGetBroadcastManifest(i, o, p = Date.now()) {
            i.m_schManifestTimeout.Schedule(Xt, () =>
              this.GetBroadcastManifest(i, o, p),
            );
          }
          async GetBroadcastManifest(i, o, p = Date.now()) {
            i.SetState(2, "");
            let B = {
                steamid: i.m_steamIDBroadcast,
                broadcastid: 0,
                viewertoken: this.m_broadcastSettings.ulViewerToken,
                watchlocation: o,
                sessionid: (0, v.KC)(),
                is_webrtc: i.m_bWebRTC,
              },
              z = null;
            try {
              z = await Wt().get(
                v.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
                { params: B, withCredentials: !0 },
              );
            } catch (tt) {
              let ht = (0, Qt.H)(tt);
              console.error(
                "Failed to get broadcast manifest!" + ht.strErrorMsg,
                ht,
              );
            }
            if (!z || z.status != 200) {
              i.SetState(4, (0, At.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let F = z.data;
            F.viewertoken && this.SetViewerToken(F.viewertoken);
            let U = F.success;
            if (U == "ready")
              i.SetState(3),
                (i.m_ulBroadcastID = F.broadcastid),
                (i.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
                (i.m_strCDNAuthUrlParameters = F.cdn_auth_url_parameters),
                (i.m_bWebRTC = F.is_webrtc),
                (i.m_data = F),
                this.LoadBroadcast(i),
                setTimeout(() => {
                  i.m_schHeartbeatTimeout.Schedule(
                    i.m_data.heartbeat_interval * 1e3,
                    () => this.HeartbeatBroadcast(i),
                  );
                }, Math.random() * 3e4);
            else if (U == "waiting") {
              i.SetState(2, (0, At.we)("#BroadcastWatch_WaitingForResponse"));
              let tt = Date.now() - p;
              if (tt > 60 * 1e3) {
                i.SetState(4, (0, At.we)("#BroadcastWatch_NotAvailable"));
                return;
              }
              let ht = tt > 30 * 1e3 ? F.retry : 5e3;
              i.m_schManifestTimeout.Schedule(ht, () =>
                this.GetBroadcastManifest(i, o, p),
              );
            } else
              U == "waiting_for_start"
                ? (i.SetState(2, (0, At.we)("#BroadcastWatch_WaitingForStart")),
                  i.m_schManifestTimeout.Schedule(F.retry, () =>
                    this.GetBroadcastManifest(i, o, p),
                  ))
                : U == "waiting_for_reconnect"
                  ? (i.SetState(
                      2,
                      (0, At.we)("#BroadcastWatch_WaitingForReconnect"),
                    ),
                    i.m_schManifestTimeout.Schedule(F.retry, () =>
                      this.GetBroadcastManifest(i, o, p),
                    ))
                  : U == "end"
                    ? i.SetState(4, (0, At.we)("#BroadcastWatch_NotAvailable"))
                    : U == "too_many_broadcasts"
                      ? i.SetState(
                          4,
                          (0, At.we)("#BroadcastWatch_TooManyBroadcasts"),
                        )
                      : U == "system_not_supported"
                        ? i.SetState(
                            4,
                            (0, At.we)("#BroadcastWatch_SystemNotSupported"),
                          )
                        : U == "user_restricted"
                          ? i.SetState(
                              4,
                              (0, At.we)("#BroadcastWatch_UserRestricted"),
                            )
                          : U == "poor_upload_quality"
                            ? i.SetState(
                                4,
                                (0, At.we)("#BroadcastWatch_PoorUploadQuality"),
                              )
                            : U == "request_failed"
                              ? i.SetState(
                                  4,
                                  (0, At.we)("#BroadcastWatch_RequestFailed"),
                                )
                              : U == "too_many_viewers"
                                ? i.SetState(
                                    4,
                                    (0, At.we)(
                                      "#BroadcastWatch_TooManyViewers",
                                    ),
                                  )
                                : i.SetState(
                                    4,
                                    (0, At.we)("#BroadcastWatch_NotAvailable"),
                                  );
          }
          async GetClipManifest(i, o) {
            i.SetState(2, "");
            let p = {
                clipid: i.m_clipID,
                watchlocation: o,
                sessionid: (0, v.KC)(),
              },
              B = null;
            try {
              B = await Wt().get(
                v.TS.CHAT_BASE_URL + "broadcast/getclipdetails",
                { params: p, withCredentials: !0 },
              );
            } catch (F) {
              console.error(F), console.log("Failed to get clip manifest!");
            }
            if (!B || B.status != 200) {
              i.SetState(4, (0, At.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let z = B.data;
            z.success == c.R
              ? (i.SetState(3), (i.m_data = z), this.LoadClip(i))
              : i.SetState(4, (0, At.we)("#BroadcastWatch_RequestFailed"));
          }
          async GetVODManifest(i, o) {
            i.SetState(2, "");
            let p = await te.L.fetchQuery((0, ee.uj)(i.m_nAppIDVOD)).catch(
              (B) => {
                console.error(
                  "BroadcastWatchStore:GetVODManifest: Failed to load VOD " +
                    i.m_nAppIDVOD,
                  B,
                );
              },
            );
            p
              ? (p.bookmark
                  ? Mt.Get().SetBookmarkForApp(i.m_nAppIDVOD, p.bookmark)
                  : Mt.Get().InitializeBookmarkForApp(i.m_nAppIDVOD),
                i.SetState(3),
                (i.m_manifestURL = p.video_url),
                this.LoadVOD(i))
              : i.SetState(4, (0, At.we)("#BroadcastWatch_RequestFailed"));
          }
          async HeartbeatBroadcast(i) {
            let o = new FormData();
            o.append("steamid", i.m_steamIDBroadcast),
              o.append("broadcastid", i.m_ulBroadcastID),
              o.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
              Wt().post(v.TS.CHAT_BASE_URL + "broadcast/heartbeat/", o),
              i.m_schHeartbeatTimeout.Schedule(
                i.m_data.heartbeat_interval * 1e3,
                () => this.HeartbeatBroadcast(i),
              );
          }
          LoadBroadcast(i) {
            const o = this.m_activeVideo;
            o &&
              i.m_rgVideos.findIndex((p) => p == o) >= 0 &&
              o.StartBroadcast(i);
          }
          LoadClip(i) {
            const o = this.m_activeVideo;
            o && i.m_rgVideos.findIndex((p) => p == o) >= 0 && o.StartClip(i);
          }
          LoadVOD(i) {
            const o = this.m_activeVideo;
            o && i.m_rgVideos.findIndex((p) => p == o) >= 0 && o.StartVOD(i);
          }
          BroadcastDownloadFailed(i, o = !0, p = _.N_.Invalid) {
            i.Stop();
            let B = this.m_mapBroadcasts.get(i.GetBroadcastSteamID());
            B &&
              B.m_eWatchState != 2 &&
              (B.m_bWebRTC && o && (B.m_bWebRTC = !1),
              p == _.N_.StreamGone
                ? this.DelayedGetBroadcastManifest(B, i.GetWatchLocation())
                : this.GetBroadcastManifest(B, i.GetWatchLocation()));
          }
          UserInputClickVideo(i) {
            if (
              this.m_activeVideo != i &&
              (this.PauseAllVideo(),
              (this.m_activeVideo = i),
              !i.IsBroadcastClip() && !i.IsBroadcastVOD())
            ) {
              let o = this.m_mapBroadcasts.get(i.GetBroadcastSteamID());
              o && this.GetBroadcastManifest(o, i.GetWatchLocation());
            }
            i.UserInputClick();
          }
          LoadBroadcastSettings() {
            if (!window.localStorage) return;
            let i = window.localStorage.getItem("broadcastSettings");
            if (!i) return;
            let o = JSON.parse(i);
            if (!o) return;
            Object.assign(this.m_broadcastSettings, o);
            let p = this.m_broadcastSettings;
            (p.bMuted = !!p.bMuted),
              (p.nVolume = q.OQ(p.nVolume, 0, 1)),
              typeof p.ulViewerToken != "string" && (p.ulViewerToken = "0");
          }
          SaveBroadcastSettings() {
            window.localStorage &&
              this.m_schSaveSettings.Schedule(Jt, () => {
                try {
                  window.localStorage.setItem(
                    "broadcastSettings",
                    JSON.stringify(this.m_broadcastSettings),
                  );
                } catch {}
              });
          }
          SetViewerToken(i) {
            this.m_broadcastSettings.ulViewerToken != i &&
              ((this.m_broadcastSettings.ulViewerToken = i),
              this.SaveBroadcastSettings());
          }
          GetViewerToken() {
            return this.m_broadcastSettings.ulViewerToken;
          }
          SaveVolumeChange(i, o) {
            (this.m_broadcastSettings.nVolume == i &&
              this.m_broadcastSettings.bMuted == o) ||
              ((this.m_broadcastSettings.nVolume = i),
              (this.m_broadcastSettings.bMuted = o),
              this.SaveBroadcastSettings());
          }
        }
        k([O.sH], qt.prototype, "m_mapBroadcasts", 2);
        var E = ((D) => (
          (D[(D.Timeline = 1)] = "Timeline"),
          (D[(D.Minimap = 2)] = "Minimap"),
          D
        ))(E || {});
        class mt {
          m_elVideo;
          m_player = null;
          m_listeners = new f.Ji();
          m_gameDataParser = null;
          m_eWatchLocation = Ct.nn.Tq;
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
          m_nTimelineDuration = Ht;
          m_nVideoStartPos = 0;
          m_nVideoEndPos = 0;
          m_editorStartTime = 0;
          m_editorEndTime = 0;
          m_rgMarkers = O.sH.array();
          m_rgSegments = O.sH.array();
          m_rgRegions = O.sH.array();
          m_fnOnVideoEnd;
          m_videoEndingTimer;
          constructor(i, o, p, B) {
            (0, O.Gn)(this),
              (this.m_elVideo = i),
              (this.m_nVolume = o),
              (this.m_bMuted = p),
              (this.m_eWatchLocation = B);
          }
          SetBroadcastSteamID(i) {
            this.m_steamIDBroadcast = i;
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
          SetStatsViewIsVisible(i) {
            this.m_player && this.m_player.SetStatsViewIsVisible(i);
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
          SetBroadcastClipID(i) {
            this.m_broadcastClipID = i;
          }
          GetBroadcastClipID() {
            return this.m_broadcastClipID;
          }
          IsBroadcastVOD() {
            return !!this.m_nBroadcastAppIDVOD;
          }
          SetBroadcastAppIDVOD(i) {
            this.m_nBroadcastAppIDVOD = i;
          }
          GetBroadcastAppIDVOD() {
            return this.m_nBroadcastAppIDVOD;
          }
          GetVideoRepresentations() {
            return this.m_player ? this.m_player.GetVideoRepresentations() : [];
          }
          SetVideoRepresentation(i) {
            this.m_player?.SetVideoRepresentation(i);
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
            for (let i = 0; i < this.m_elVideo.textTracks.length; i++) {
              const o = this.m_elVideo.textTracks[i];
              if (o.mode === "showing") return o;
            }
            return null;
          }
          SetSubtitles(i) {
            let o = i ? At.bi[i] : Ft.xPp;
            this.m_player.SetSubtitles(o);
          }
          SetStartWithSubtitles(i) {
            this.m_bStartWithSubtitles = i;
          }
          GetBroadcastState() {
            return at.GetBroadcastState(this);
          }
          GetBroadcastStateDescription() {
            return at.GetBroadcastStateDescription(this);
          }
          SetOnVideoCallback(i) {
            this.m_fnOnVideoEnd = i;
          }
          InitPlayer() {
            (0, Zt.wT)(!this.m_player, "Initialized twice?"),
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
              (this.m_nTimelineDuration = Ht),
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
          StartBroadcast(i) {
            if ((this.InitPlayer(), i.m_data.url)) {
              let p = new _.Zn(this.m_elVideo);
              p.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
                (this.m_player = p),
                p.PlayMPD(
                  i.m_data.url,
                  i.m_data.hls_url,
                  void 0,
                  i.m_strCDNAuthUrlParameters,
                );
            } else {
              let p = new xt(this.m_elVideo);
              (this.m_player = p),
                p.PlayWebRTC(
                  this.m_steamIDBroadcast,
                  i.m_ulViewerToken,
                  i.m_data.webrtc_session_id,
                  i.m_data.webrtc_turn_server,
                  i.m_data.webrtc_offer_sdp,
                );
            }
            this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
            let o = this.m_player?.GetDASHPlayerStats();
            o &&
              o.SetBroadcasterAndViewerInfo(
                this.m_steamIDBroadcast,
                v.iA.steamid,
                i.m_ulBroadcastID,
                i.m_ulViewerToken,
              ),
              (this.m_BroadcastInfo = at.StartInfo(this.m_steamIDBroadcast));
          }
          StartClip(i) {
            this.InitPlayer();
            let o = new _.Zn(this.m_elVideo);
            o.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = o),
              o.PlayMPD(i.m_data.clip_url),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          StartVOD(i) {
            this.InitPlayer();
            let o = new _.Zn(this.m_elVideo);
            o.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = o),
              v.iA.logged_in &&
                i.m_nAppIDVOD &&
                o.SetBookmarkAdapter(new ie(i.m_nAppIDVOD)),
              i.m_manifestURL && o.PlayMPD(i.m_manifestURL),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          Stop() {
            this.m_listeners.Unregister(),
              this.m_BroadcastInfo &&
                (at.StopInfo(this.m_BroadcastInfo),
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
            const i = this.GetBroadcastState();
            if (i == 0 || this.IsBroadcastClip()) {
              at.StartVideo(this);
              return;
            } else if (i == 3)
              if ((at.SetActiveVideo(this), this.m_player))
                this.m_player.Play();
              else if (this.IsBroadcastVOD()) {
                const o = at.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
                o && this.StartVOD(o);
              } else {
                const o = at.GetBroadcast(this.m_steamIDBroadcast);
                o && this.StartBroadcast(o);
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
          JumpTime(i) {
            this.m_player?.JumpTime(i);
          }
          Seek(i) {
            this.m_player?.Seek(i);
          }
          SeekAndPlay(i) {
            this.m_player?.SeekAndPlay(i);
          }
          JumpToLiveEdge() {
            const i = this.m_player;
            i &&
              (i.IsLiveContent()
                ? this.SeekAndPlay(i.GetBufferedLiveEdgeTime())
                : this.SeekAndPlay(i.GetAvailableVideoStartTime()));
          }
          SetVolume(i) {
            this.m_player &&
              (this.m_player.SetVolume(i),
              (this.m_nVolume = this.m_player.GetVolume())),
              at.SaveVolumeChange(i, this.m_bMuted);
          }
          SetMute(i) {
            this.m_player && this.m_player.SetMuted(i),
              (this.m_bMuted = i),
              at.SaveVolumeChange(this.m_nVolume, i);
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
            const i = this.m_player;
            if (i)
              if (this.IsBroadcastClip())
                (this.m_nPlaybackTime = i.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = i.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = i.GetBufferedLiveEdgeTime()),
                  (this.m_nTimelineDuration =
                    this.m_nVideoEndPos - this.m_nVideoStartPos),
                  (this.m_bOnLiveEdge = !1),
                  (this.m_bBuffering = i.IsBuffering());
              else {
                if (
                  ((this.m_nPlaybackTime = i.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = i.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = Math.max(
                    i.GetBufferedLiveEdgeTime(),
                    this.m_nPlaybackTime,
                  )),
                  this.IsBroadcastVOD())
                ) {
                  this.m_nTimelineDuration = this.m_nVideoEndPos;
                  const o = this.m_fnOnVideoEnd;
                  o &&
                    this.m_nVideoEndPos - this.m_nPlaybackTime < _.Br &&
                    (this.m_videoEndingTimer = window.setTimeout(() => {
                      o();
                    }, 400));
                }
                (this.m_bBuffering = i.IsBuffering()),
                  (this.m_bOnLiveEdge =
                    this.m_nVideoEndPos - this.m_nPlaybackTime < _.Br),
                  i.IsPaused() && (this.m_bOnLiveEdge = !1);
              }
          }
          OnVolumeUpdated() {
            const i = this.m_player;
            i &&
              ((this.m_nVolume = i.GetVolume()), (this.m_bMuted = i.IsMuted()));
          }
          OnGameDataUpdate(i) {
            let o = i.detail;
            if (!o || typeof o.gamedata != "object") return;
            (!this.m_gameDataParser ||
              this.m_gameDataParser.GetAppID() != o.gamedata.__appid) &&
              (this.m_gameDataParser = new rt(o.gamedata.__appid));
            const p = this.m_player?.GetLiveContentStartTime().getTime() ?? 0;
            if ("timelinemarkers" in o.gamedata) {
              const B = this.m_gameDataParser.UpdateMarkers(
                o.gamedata.__timelinemarkers,
                p,
              );
              B &&
                (this.m_rgMarkers.replace(B.rgMarkers || []),
                this.m_rgSegments.replace(B.rgSegments || []));
              const z = this.m_gameDataParser.UpdateRegions(
                o.gamedata.__regions,
              );
              z && this.m_rgRegions.replace(z);
            } else
              "soundtrack" in o.gamedata &&
                this.m_gameDataParser.UpdateSoundtrack(
                  this.m_steamIDBroadcast,
                  o.gamedata.soundtrack,
                );
          }
          OnDownloadFailed(i) {
            let o = i.detail || _.N_.Invalid;
            at.BroadcastDownloadFailed(this, !0, o);
          }
          OnWebRTCRetry() {
            at.BroadcastDownloadFailed(this, !1);
          }
          OnWebRTCFailed() {
            at.BroadcastDownloadFailed(this, !0);
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
          GetTimeAtMousePosition(i, o, p, B) {
            let z = q.Fu(i, o.left, o.right, p, B);
            return Math.floor(z + 0.5);
          }
          GetPercentOffsetFromTime(i, o) {
            let p = 0,
              B = 0;
            return (
              o == 1
                ? ((B = this.m_nVideoEndPos),
                  (p = B - this.m_nTimelineDuration))
                : ((p = 0), (B = 0)),
              q.Fu(i, p, B, 0, 100)
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
        k([O.sH], mt.prototype, "m_player", 2),
          k([O.sH], mt.prototype, "m_bPaused", 2),
          k([O.sH], mt.prototype, "m_nPlaybackTime", 2),
          k([O.sH], mt.prototype, "m_bBuffering", 2),
          k([O.sH], mt.prototype, "m_bOnLiveEdge", 2),
          k([O.sH], mt.prototype, "m_nVolume", 2),
          k([O.sH], mt.prototype, "m_bMuted", 2),
          k([O.sH], mt.prototype, "m_bUserInputNeeded", 2),
          k([O.sH], mt.prototype, "m_bIsReplay", 2),
          k([O.sH], mt.prototype, "m_nTimelineDuration", 2),
          k([O.sH], mt.prototype, "m_nVideoStartPos", 2),
          k([O.sH], mt.prototype, "m_nVideoEndPos", 2),
          k([O.sH], mt.prototype, "m_editorStartTime", 2),
          k([O.sH], mt.prototype, "m_editorEndTime", 2),
          k([O.XI.bound], mt.prototype, "StartBroadcast", 1),
          k([O.XI.bound], mt.prototype, "StartClip", 1),
          k([O.XI.bound], mt.prototype, "StartVOD", 1),
          k([Bt.o], mt.prototype, "OnVideoPlaying", 1),
          k([Bt.o], mt.prototype, "OnVideoPause", 1),
          k([O.XI.bound], mt.prototype, "OnVideoTimeUpdate", 1),
          k([Bt.o], mt.prototype, "OnVolumeUpdated", 1),
          k([O.XI.bound], mt.prototype, "OnGameDataUpdate", 1),
          k([Bt.o], mt.prototype, "OnDownloadFailed", 1),
          k([Bt.o], mt.prototype, "OnWebRTCRetry", 1),
          k([Bt.o], mt.prototype, "OnWebRTCFailed", 1),
          k([Bt.o], mt.prototype, "OnUserInputNeeded", 1);
        const at = new qt();
        window.uiBroadcastWatchStore = at;
      },
      62510: (Vt, ve, g) => {
        "use strict";
        g.d(ve, { m: () => rt });
        var n = g(7850),
          Wt = g(90626),
          O = g(54963),
          H = g(8323),
          kt = Object.defineProperty,
          lt = Object.getOwnPropertyDescriptor,
          L = (ct, _, q, v) => {
            for (
              var Bt = v > 1 ? void 0 : v ? lt(_, q) : _,
                Oe = ct.length - 1,
                vt;
              Oe >= 0;
              Oe--
            )
              (vt = ct[Oe]) && (Bt = (v ? vt(_, q, Bt) : vt(Bt)) || Bt);
            return v && Bt && kt(_, q, Bt), Bt;
          };
        class rt extends Wt.Component {
          m_elCanvas = null;
          m_Context = null;
          m_schUpdate = new H.LU();
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
          BindCanvasRef(_) {
            this.m_elCanvas = _;
          }
          updateCanvas() {
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let _ = this.props.scaleFactor || [1, 1],
              q = this.props.elementRef,
              v = this.props.updateRate;
            const Bt = this.m_elCanvas.getContext("2d");
            if (!Bt) return;
            this.m_Context = Bt;
            let Oe = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              vt = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = Oe),
              (this.m_elCanvas.height = vt),
              (this.props.blurAmount ?? 0) > 0 &&
                (Bt.filter = "blur(" + this.props.blurAmount + "px)");
            let f = () => {
              Bt.drawImage(q, 0, 0, Oe * _[0], vt * _[1]),
                v > 0 && this.m_schUpdate.Schedule(v, f);
            };
            f(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, n.jsx)("canvas", {
              id: this.props.id,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        L([O.oI], rt.prototype, "BindCanvasRef", 1),
          L([O.oI], rt.prototype, "updateCanvas", 1);
      },
      79590: (Vt, ve, g) => {
        "use strict";
        g.d(ve, { m: () => Oe });
        var n = g(7850),
          Wt = g(99412),
          O = g(90626),
          H = g(48421),
          kt = g(36707),
          lt = g(18210),
          L = g(53113),
          rt = g(72609),
          ct = g(20193),
          _ = g(29630),
          q = g(16512);
        function v(vt) {
          const { gidEvent: f } = vt,
            c = usePartnerEventByEventGID(f);
          return c
            ? jsx(Bt, {
                event: c,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(c) ?? ""),
              })
            : null;
        }
        function Bt(vt) {
          const { event: f, lang: c, href: r } = vt,
            [Pe, Ce] = (0, O.useMemo)(() => {
              const lr = f.jsondata.localized_sale_product_banner,
                nr = f.jsondata.localized_sale_product_mobile_banner;
              if (lr?.length && nr?.length) {
                const xt = lt.NT.GetWithFallback(lr, c),
                  Ft = lt.NT.GetWithFallback(nr, c);
                if (xt?.length && Ft?.length)
                  return [
                    _.zU.GenerateURLFromHashAndExt(f.clanSteamID, xt),
                    _.zU.GenerateURLFromHashAndExt(f.clanSteamID, Ft),
                  ];
              }
              return [void 0, void 0];
            }, [f, c]);
          return !Pe?.length || !Ce?.length
            ? null
            : (0, n.jsxs)("a", {
                href: r,
                className: ct.Link,
                children: [
                  (0, n.jsx)("img", {
                    src: Pe,
                    className: (0, kt.A)(ct.Banner, ct.Big),
                  }),
                  (0, n.jsx)("img", {
                    src: Ce,
                    className: (0, kt.A)(ct.Banner, ct.Mobile),
                  }),
                ],
              });
        }
        function Oe(vt) {
          const { gidEvent: f } = vt,
            c = (0, H.RR)(f);
          return c
            ? (0, n.jsx)(Bt, {
                event: c,
                lang: (0, Wt.sfN)(rt.TS.LANGUAGE),
                href: (0, L.k2)((0, q.n4)(c) ?? ""),
              })
            : null;
        }
      },
      20193: (Vt) => {
        Vt.exports = {
          Link: "_2UaM2MUAY7gG5jQF-6m9eV",
          Banner: "_1DZMXccE3UeEnQ5fZ7O00v",
          Big: "_3dJUAHMUbDY0O45FaJvOT-",
          Mobile: "_3RIai13_FI7QmOT96zU4W-",
        };
      },
      53120: (Vt) => {
        Vt.exports = {
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
      63508: (Vt) => {
        Vt.exports = {
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
      8287: (Vt) => {
        Vt.exports = {
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
      15527: (Vt) => {
        Vt.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      43087: (Vt) => {
        Vt.exports = {
          StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
          Action: "_2Xpw9--lhL-kpt-lUannE1",
          WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
          StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
          StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
          StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
        };
      },
      14256: (Vt) => {
        Vt.exports = {
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
      33543: (Vt) => {
        Vt.exports = {
          narrowWidth: "500px",
          FriendsListInsetShadowCtn: "_1qeW35auMlJ5pJVNtBC-bF",
          FriendListInsetShadowTop: "_1osHa9KHOmdCDNrA232z4N",
          FriendListInsetShadowBottom: "_2OoTJwlWvzvAysWOOEQaXS",
        };
      },
      96715: (Vt, ve, g) => {
        "use strict";
        g.d(ve, { A: () => n });
        const n =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      10886: (Vt, ve, g) => {
        "use strict";
        g.d(ve, { A: () => n });
        const n =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      19654: (Vt, ve, g) => {
        "use strict";
        g.d(ve, { A: () => n });
        const n =
          g.p +
          "images/applications/appmgmt/reddit_large.png?v=valveisgoodatcaching";
      },
      3209: (Vt, ve, g) => {
        "use strict";
        g.d(ve, { A: () => n });
        const n =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();
