/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [68578],
    {
      10335: (wr, sr, Z) => {
        Z.d(sr, { J3: () => tr, pH: () => ar, DF: () => br });
        var i = Z(80613),
          e = Z.n(i),
          t = Z(75245),
          C = Z(35038);
        class n extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              n.prototype.steamid || t.Sg(n.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_entry_type: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    message: { n: 3, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    rtime32_server_timestamp: {
                      n: 4,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    echo_to_sender: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = t.w0(n.M())), n.sm_mbf;
          }
          toObject(r = !1) {
            return n.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(n.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(n.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new n();
            return n.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(n.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return n.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(n.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientFriendMsg";
          }
        }
        class O extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.steamid_from || t.Sg(O.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    steamid_from: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_entry_type: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    from_limited_account: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    message: { n: 4, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    rtime32_server_timestamp: {
                      n: 5,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
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
          static toObject(r, a) {
            return t.BT(O.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new O();
            return O.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(O.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(O.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientFriendMsgIncoming";
          }
        }
        class y extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.steamid_to_add || t.Sg(y.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    steamid_to_add: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    accountname_or_email_to_add: {
                      n: 2,
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
          static toObject(r, a) {
            return t.BT(y.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new y();
            return y.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientAddFriend";
          }
        }
        class W extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.eresult || t.Sg(W.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    eresult: {
                      n: 1,
                      d: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steam_id_added: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    persona_name_added: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
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
          static toObject(r, a) {
            return t.BT(W.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new W();
            return W.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(W.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(W.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientAddFriendResponse";
          }
        }
        class l extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.friendid || t.Sg(l.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    friendid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = t.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(l.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new l();
            return l.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(l.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(l.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientRemoveFriend";
          }
        }
        class U extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.friendid || t.Sg(U.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    friendid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    hide: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = t.w0(U.M())), U.sm_mbf;
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(U.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new U();
            return U.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(U.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(U.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientHideFriend";
          }
        }
        class I extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.bincremental || t.Sg(I.M()),
              i.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    bincremental: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    friends: { n: 2, c: h, r: !0, q: !0 },
                    max_friend_count: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    active_friend_count: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    friends_limit_hit: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
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
          static toObject(r, a) {
            return t.BT(I.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new I();
            return I.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(I.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(I.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientFriendsList";
          }
        }
        class h extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.ulfriendid || t.Sg(h.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    ulfriendid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    efriendrelationship: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
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
          static toObject(r, a) {
            return t.BT(h.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new h();
            return h.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(h.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(h.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientFriendsList_Friend";
          }
        }
        class q extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.bremoval || t.Sg(q.M()),
              i.Message.initialize(this, r, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    bremoval: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                    bincremental: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    friendGroups: { n: 3, c: x, r: !0, q: !0 },
                    memberships: { n: 4, c: d, r: !0, q: !0 },
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
          static toObject(r, a) {
            return t.BT(q.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new q();
            return q.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientFriendsGroupsList";
          }
        }
        class x extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.nGroupID || t.Sg(x.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    nGroupID: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    strGroupName: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
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
          static toObject(r, a) {
            return t.BT(x.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new x();
            return x.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(x.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(x.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientFriendsGroupsList_FriendGroup";
          }
        }
        class d extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.ulSteamID || t.Sg(d.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    ulSteamID: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    nGroupID: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = t.w0(d.M())), d.sm_mbf;
          }
          toObject(r = !1) {
            return d.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(d.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new d();
            return d.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(d.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(d.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientFriendsGroupsList_FriendGroupsMembership";
          }
        }
        class v extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.removal || t.Sg(v.M()),
              i.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    removal: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                    incremental: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    nicknames: { n: 3, c: o, r: !0, q: !0 },
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
          static toObject(r, a) {
            return t.BT(v.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new v();
            return v.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(v.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(v.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientPlayerNicknameList";
          }
        }
        class o extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.steamid || t.Sg(o.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    nickname: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
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
          static toObject(r, a) {
            return t.BT(o.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new o();
            return o.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(o.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(o.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientPlayerNicknameList_PlayerNickname";
          }
        }
        class p extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.steamid || t.Sg(p.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    nickname: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = t.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(p.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new p();
            return p.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(p.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(p.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientSetPlayerNickname";
          }
        }
        class Y extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.eresult || t.Sg(Y.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    eresult: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Y.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new Y();
            return Y.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientSetPlayerNicknameResponse";
          }
        }
        class V extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.persona_state_requested || t.Sg(V.M()),
              i.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    persona_state_requested: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    friends: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(V.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new V();
            return V.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(V.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(V.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientRequestFriendData";
          }
        }
        class Q extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.persona_state || t.Sg(Q.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    persona_state: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    player_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_auto_generated_name: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    high_priority: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    persona_set_by_user: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    persona_state_flags: {
                      n: 6,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    need_persona_response: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_client_idle: {
                      n: 8,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Q.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new Q();
            return Q.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientChangeStatus";
          }
        }
        class H extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.result || t.Sg(H.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    result: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    player_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
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
          static toObject(r, a) {
            return t.BT(H.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new H();
            return H.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(H.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(H.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgPersonaChangeResponse";
          }
        }
        class K extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.status_flags || t.Sg(K.M()),
              i.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    status_flags: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    friends: { n: 2, c: u, r: !0, q: !0 },
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
          static toObject(r, a) {
            return t.BT(K.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new K();
            return K.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(K.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(K.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientPersonaState";
          }
        }
        class u extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.friendid || t.Sg(u.M()),
              i.Message.initialize(this, r, 0, -1, [71, 82], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    friendid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    persona_state: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    game_played_app_id: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    game_server_ip: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    game_server_port: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    persona_state_flags: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    online_session_instances: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    persona_set_by_user: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    player_name: {
                      n: 15,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    query_port: {
                      n: 20,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    steamid_source: {
                      n: 25,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    avatar_hash: {
                      n: 31,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    last_logoff: {
                      n: 45,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    last_logon: {
                      n: 46,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    last_seen_online: {
                      n: 47,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    clan_rank: {
                      n: 50,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    game_name: {
                      n: 55,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    gameid: {
                      n: 56,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    game_data_blob: {
                      n: 60,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    clan_data: { n: 64, c },
                    clan_tag: {
                      n: 65,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rich_presence: { n: 71, c: B, r: !0, q: !0 },
                    broadcast_id: {
                      n: 72,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    game_lobby_id: {
                      n: 73,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    watching_broadcast_accountid: {
                      n: 74,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    watching_broadcast_appid: {
                      n: 75,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    watching_broadcast_viewers: {
                      n: 76,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    watching_broadcast_title: {
                      n: 77,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_community_banned: {
                      n: 78,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    player_name_pending_review: {
                      n: 79,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    avatar_pending_review: {
                      n: 80,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    on_steam_deck: {
                      n: 81,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    other_game_data: { n: 82, c: w, r: !0, q: !0 },
                    gaming_device_type: {
                      n: 83,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
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
          static toObject(r, a) {
            return t.BT(u.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new u();
            return u.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(u.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(u.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientPersonaState_Friend";
          }
        }
        class c extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              c.prototype.ogg_app_id || t.Sg(c.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    ogg_app_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    chat_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = t.w0(c.M())), c.sm_mbf;
          }
          toObject(r = !1) {
            return c.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(c.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(c.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new c();
            return c.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(c.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return c.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(c.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientPersonaState_Friend_ClanData";
          }
        }
        class B extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              B.prototype.key || t.Sg(B.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    key: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = t.w0(B.M())), B.sm_mbf;
          }
          toObject(r = !1) {
            return B.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(B.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(B.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new B();
            return B.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(B.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(B.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientPersonaState_Friend_KV";
          }
        }
        class w extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.gameid || t.Sg(w.M()),
              i.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    gameid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    rich_presence: { n: 2, c: B, r: !0, q: !0 },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = t.w0(w.M())), w.sm_mbf;
          }
          toObject(r = !1) {
            return w.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(w.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new w();
            return w.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(w.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(w.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientPersonaState_Friend_OtherGameData";
          }
        }
        class s extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              s.prototype.steamid_friend || t.Sg(s.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    steamid_friend: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = t.w0(s.M())), s.sm_mbf;
          }
          toObject(r = !1) {
            return s.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(s.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(s.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new s();
            return s.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(s.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return s.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(s.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientFriendProfileInfo";
          }
        }
        class f extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.eresult || t.Sg(f.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    eresult: {
                      n: 1,
                      d: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steamid_friend: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    time_created: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    real_name: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    city_name: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    state_name: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    country_name: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    headline: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    summary: {
                      n: 9,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = t.w0(f.M())), f.sm_mbf;
          }
          toObject(r = !1) {
            return f.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(f.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(f.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new f();
            return f.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(f.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return f.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(f.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientFriendProfileInfoResponse";
          }
        }
        class b extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              b.prototype.steamid || t.Sg(b.M()),
              i.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    groupname: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    steamid_friends: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = t.w0(b.M())), b.sm_mbf;
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(b.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(b.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new b();
            return b.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(b.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(b.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientCreateFriendsGroup";
          }
        }
        class j extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.eresult || t.Sg(j.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    eresult: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    groupid: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = t.w0(j.M())), j.sm_mbf;
          }
          toObject(r = !1) {
            return j.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(j.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new j();
            return j.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(j.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(j.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientCreateFriendsGroupResponse";
          }
        }
        class A extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.steamid || t.Sg(A.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    groupid: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
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
          static toObject(r, a) {
            return t.BT(A.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new A();
            return A.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(A.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(A.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientDeleteFriendsGroup";
          }
        }
        class J extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.eresult || t.Sg(J.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    eresult: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = t.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(J.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new J();
            return J.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(J.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(J.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientDeleteFriendsGroupResponse";
          }
        }
        class D extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.groupid || t.Sg(D.M()),
              i.Message.initialize(this, r, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    groupid: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    groupname: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    steamid_friends_added: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                    steamid_friends_removed: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
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
          static toObject(r, a) {
            return t.BT(D.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new D();
            return D.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(D.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(D.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientManageFriendsGroup";
          }
        }
        class T extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.eresult || t.Sg(T.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    eresult: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = t.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(T.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new T();
            return T.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(T.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(T.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientManageFriendsGroupResponse";
          }
        }
        class N extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.groupid || t.Sg(N.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    groupid: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    steamiduser: {
                      n: 2,
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
          static toObject(r, a) {
            return t.BT(N.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new N();
            return N.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(N.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(N.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientAddFriendToGroup";
          }
        }
        class R extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.eresult || t.Sg(R.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    eresult: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = t.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(R.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new R();
            return R.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(R.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(R.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientAddFriendToGroupResponse";
          }
        }
        class z extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.groupid || t.Sg(z.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    groupid: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    steamiduser: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
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
          static toObject(r, a) {
            return t.BT(z.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new z();
            return z.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(z.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(z.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientRemoveFriendFromGroup";
          }
        }
        class S extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.eresult || t.Sg(S.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    eresult: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
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
          static toObject(r, a) {
            return t.BT(S.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new S();
            return S.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(S.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(S.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientRemoveFriendFromGroupResponse";
          }
        }
        class rr extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new rr();
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new rr();
            return rr.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientGetEmoticonList";
          }
        }
        class $ extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.emoticons || t.Sg($.M()),
              i.Message.initialize(this, r, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    emoticons: { n: 1, c: g, r: !0, q: !0 },
                    stickers: { n: 2, c: E, r: !0, q: !0 },
                    effects: { n: 3, c: k, r: !0, q: !0 },
                  },
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
          static toObject(r, a) {
            return t.BT($.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new $();
            return $.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj($.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0($.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientEmoticonList";
          }
        }
        class g extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.name || t.Sg(g.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    count: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    time_last_used: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    use_count: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_received: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    appid: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = t.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(g.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new g();
            return g.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(g.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(g.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientEmoticonList_Emoticon";
          }
        }
        class E extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.name || t.Sg(E.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    count: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    time_received: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    appid: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    time_last_used: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    use_count: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = t.w0(E.M())), E.sm_mbf;
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(E.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new E();
            return E.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(E.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(E.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientEmoticonList_Sticker";
          }
        }
        class k extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.name || t.Sg(k.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    count: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    time_received: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    infinite_use: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    appid: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
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
          static toObject(r, a) {
            return t.BT(k.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new k();
            return k.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(k.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(k.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientEmoticonList_Effect";
          }
        }
        class M extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.groupid || t.Sg(M.M()),
              i.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    groupid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    accountid_members: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = t.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(M.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new M();
            return M.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(M.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(M.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsListCategory";
          }
        }
        class er extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new er();
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new er();
            return er.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetCategories_Request";
          }
        }
        class P extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.categories || t.Sg(P.M()),
              i.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: { categories: { n: 1, c: M, r: !0, q: !0 } },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = t.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(P.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new P();
            return P.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(P.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(P.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetCategories_Response";
          }
        }
        class X extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.accountid || t.Sg(X.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    accountid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    clanid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    chat_group_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(X.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new X();
            return X.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(X.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(X.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsListFavoriteEntry";
          }
        }
        class tr extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new tr();
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new tr();
            return tr.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFavorites_Request";
          }
        }
        class G extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.favorites || t.Sg(G.M()),
              i.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: { favorites: { n: 1, c: X, r: !0, q: !0 } },
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
          static toObject(r, a) {
            return t.BT(G.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new G();
            return G.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(G.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(G.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFavorites_Response";
          }
        }
        class L extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.favorites || t.Sg(L.M()),
              i.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: { favorites: { n: 1, c: X, r: !0, q: !0 } },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = t.w0(L.M())), L.sm_mbf;
          }
          toObject(r = !1) {
            return L.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(L.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new L();
            return L.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(L.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(L.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_SetFavorites_Request";
          }
        }
        class ir extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ir();
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new ir();
            return ir.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_SetFavorites_Response";
          }
        }
        class F extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.favorites || t.Sg(F.M()),
              i.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: { favorites: { n: 1, c: X, r: !0, q: !0 } },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = t.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(F.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new F();
            return F.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(F.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(F.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_FavoritesChanged_Notification";
          }
        }
        class ar extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ar();
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new ar();
            return ar.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFriendsList_Request";
          }
        }
        class _ extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.friendslist || t.Sg(_.M()),
              i.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: { friendslist: { n: 1, c: I } },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = t.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(_.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (e().BinaryReader)(r),
              m = new _();
            return _.deserializeBinaryFromReader(m, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(_.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(_.M(), r, a);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFriendsList_Response";
          }
        }
        var br;
        ((ur) => {
          function r(mr, cr, Br) {
            return mr.SendMsg(
              "FriendsList.GetCategories#1",
              (0, C.I8)(er, cr, Br),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ur.GetCategories = r;
          function a(mr, cr, Br) {
            return mr.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, C.I8)(ar, cr, Br),
              _,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ur.GetFriendsList = a;
          function m(mr, cr, Br) {
            return mr.SendMsg(
              "FriendsList.GetFavorites#1",
              (0, C.I8)(tr, cr, Br),
              G,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ur.GetFavorites = m;
          function yr(mr, cr, Br) {
            return mr.SendMsg(
              "FriendsList.SetFavorites#1",
              (0, C.I8)(L, cr, Br),
              ir,
              { ePrivilege: 1 },
            );
          }
          ur.SetFavorites = yr;
        })(br || (br = {}));
        var fr;
        ((ur) => {
          ur.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: F,
          };
        })(fr || (fr = {}));
      },
      58612: (wr, sr, Z) => {
        Z.d(sr, {
          Dv: () => h,
          EW: () => x,
          M8: () => o,
          Nd: () => K,
          d0: () => I,
        });
        var i = Z(42993),
          e = Z(68312),
          t = Z(75233),
          C = Z(80902),
          n = Z(35038),
          O = Z(76559),
          y = Z(10335),
          W = Z(27386),
          l = Z(99412),
          U = Z(35098);
        function I(u) {
          const c = (0, e.KV)(),
            B = (0, i.LH)(),
            w = (0, U.tb)(),
            s = (0, t.jE)();
          let f = { loadNicknames: !1, loadFavorites: !1, ...u };
          return (0, C.I)({
            queryKey: ["FriendsList", B, f],
            queryFn: async () => {
              const b = s.fetchQuery(q(c, B)),
                j = f.loadNicknames ? s.fetchQuery(v(c, B)) : void 0,
                A = f.loadFavorites ? s.fetchQuery(V(c, B)) : void 0,
                J = await b,
                D = new Map(
                  J.map((z) => [z, s.fetchQuery((0, U.mK)(w, c, z))]),
                );
              let T;
              j && (T = p((await j).nicknames));
              const N = new Set(await (A ?? Promise.resolve([])));
              return (
                await Promise.all(
                  J.map(async (z) => {
                    const S = new O.b(z).GetAccountID(),
                      rr = await D.get(z);
                    if (!rr) return;
                    const $ = { accountid: S, persona: rr };
                    return (
                      N.has(S) && ($.is_favorite = !0),
                      T && T.has(S) && ($.nickname = T.get(S)),
                      $
                    );
                  }),
                )
              ).filter((z) => z !== void 0);
            },
            staleTime: 120 * 1e3,
          });
        }
        function h() {
          const u = (0, e.KV)(),
            c = (0, i.LH)();
          return (0, C.I)(q(u, c));
        }
        function q(u, c) {
          return {
            queryKey: ["GetFriendsList", c],
            queryFn: async () => {
              const B = n.w.Init(y.pH),
                w = await y.DF.GetFriendsList(u, B),
                s = [];
              for (const f of w.Body().friendslist()?.friends() ?? []) {
                const b = f.ulfriendid();
                b &&
                  (f.efriendrelationship() == l._UC ||
                    f.efriendrelationship() == l.Ec7) &&
                  new O.b(b).BIsIndividualAccount() &&
                  s.push(b);
              }
              return s;
            },
          };
        }
        function x() {
          const u = (0, e.KV)(),
            c = (0, i.LH)();
          return (0, C.I)({
            queryKey: ["GetIgnoredAccounts", c],
            queryFn: async () => {
              const B = n.w.Init(y.pH);
              return (await y.DF.GetFriendsList(u, B))
                .Body()
                .friendslist()
                ?.friends()
                ?.filter((s) => {
                  const f = new O.b(s.ulfriendid());
                  return (
                    (s.efriendrelationship() == l.wim ||
                      s.efriendrelationship() == l.Ec7) &&
                    f.BIsIndividualAccount()
                  );
                })
                .map((s) => s.ulfriendid());
            },
          });
        }
        function d(u = {}) {
          const c = (0, e.KV)(),
            B = (0, i.LH)();
          return (0, C.I)({ ...v(c, B), ...u });
        }
        function v(u, c) {
          return {
            queryKey: ["GetFriendNicknameList", c],
            queryFn: async () => {
              const B = n.w.Init(W.w_T);
              return (await W.xtC.GetNicknameList(u, B)).Body().toObject();
            },
          };
        }
        function o(u = {}) {
          return d({ ...u, select: (c) => p(c.nicknames) });
        }
        function p(u) {
          const c = new Map();
          for (const B of u ?? [])
            B.accountid !== void 0 &&
              B.nickname !== void 0 &&
              c.set(B.accountid, B.nickname);
          return c;
        }
        function Y(u = {}) {
          const c = useActiveServiceTransport(),
            B = useActiveAccount();
          return useQuery({ ...V(c, B), ...u });
        }
        function V(u, c) {
          return {
            queryKey: ["GetFriendFavorites", c],
            queryFn: async () => {
              const B = n.w.Init(y.J3),
                w = await y.DF.GetFavorites(u, B),
                s = [];
              for (const f of w.Body().toObject().favorites ?? [])
                f.accountid && s.push(f.accountid);
              return s;
            },
          };
        }
        async function Q(u, c) {
          const B = n.w.Init(W.tlx);
          B.Body().set_appid(c);
          const w = await W.xtC.GetFriendsGameplayInfo(u, B);
          return (
            w.BSuccess() ||
              console.warn(`Failed to get gameplay info: ${w.GetEResult()}`),
            w.Body().toObject()
          );
        }
        function H(u, c = {}) {
          const B = useActiveServiceTransport(),
            w = useActiveAccount();
          return useQueries({
            queries: u.map((s) => ({
              queryKey: [`GameplayInfo_${w}_${s}`],
              queryFn: () => Q(B, s),
              ...c,
            })),
          });
        }
        function K(u, c = {}) {
          const B = (0, e.KV)(),
            w = (0, i.LH)();
          return (0, C.I)({
            queryKey: [`GameplayInfo_${w}_${u}`],
            queryFn: async () => await Q(B, u),
            ...c,
          });
        }
      },
      75975: (wr, sr, Z) => {
        Z.d(sr, { Jl: () => l, nl: () => f, rf: () => s });
        var i = Z(7850),
          e = Z(36118),
          t = Z(56718),
          C = Z(3166);
        function n() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function O(b) {
          const j = b.filled ?? !0;
          return useInGamepadUI()
            ? j
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function y(b) {
          const j = b.filled ?? !0;
          return useInGamepadUI()
            ? j
              ? jsx(GamepadSVG.Heart, {})
              : jsx(GamepadSVG.HeartEmpty, {})
            : jsx(SVG.Heart, {});
        }
        function W() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ControllerStatus, {})
            : jsx(SVG.BigPicture, {});
        }
        function l(b) {
          return (0, C.Qn)()
            ? (0, i.jsx)(t.MGO, { ...b })
            : (0, i.jsx)(e.Jlk, { ...b });
        }
        function U() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Carat, { direction: "down" })
            : jsx(SVG.FlatArrow, { angle: 180 });
        }
        function I() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Information, {})
            : jsx(SVG.Information, {});
        }
        function h(b) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Lock, {})
            : jsx(SVG.Lock, {});
        }
        function q() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Download, {})
            : jsx(SVG.Download, {});
        }
        function x() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Play, {})
            : jsx(SVG.Play, {});
        }
        function d(b) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Achievement, {})
            : jsx(SVG.AwardIcon, {});
        }
        function v(b) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsUp, {})
            : jsx(SVG.ThumbsUpUserNews, { className: b.className });
        }
        function o(b) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsDown, {})
            : jsx(SVG.ThumbsUpUserNews, { className: b.className });
        }
        function p(b) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.CommentThread, { className: b.className })
            : jsx(SVG.CommentThread, { className: b.className });
        }
        function Y() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Pause, {})
            : jsx(SVG.Pause, {});
        }
        function V() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Reload, {})
            : jsx(SVG.Reload, {});
        }
        function Q() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Update, {})
            : jsx(SVG.Update, {});
        }
        function H() {
          return jsx(GamepadSVG.Globe, {});
        }
        function K() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Close, {})
            : jsx(SVG.X_Line, {});
        }
        function u() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Trash, {})
            : jsx(SVG.Trash, {});
        }
        function c() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Dynamic, {})
            : jsx(SVG.DynamicCollection, {});
        }
        function B() {
          return jsx(GamepadSVG.Add, {});
        }
        function w() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Edit, {})
            : jsx(SVG.Edit, {});
        }
        function s() {
          return (0, i.jsx)(e.rfv, {});
        }
        function f() {
          return (0, C.Qn)() ? (0, i.jsx)(t.nl, {}) : (0, i.jsx)(e.jZW, {});
        }
      },
    },
  ]);
})();
