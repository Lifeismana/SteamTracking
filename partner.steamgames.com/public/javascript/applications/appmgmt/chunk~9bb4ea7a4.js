/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7671],
  {
    42457: (e, r, t) => {
      t.d(r, {
        B4H: () => Lr,
        tzK: () => Dr,
        w_T: () => vr,
        SCE: () => Vr,
        kVt: () => we,
        EyI: () => Qr,
        Bx6: () => s,
        GPz: () => i,
        xtC: () => gt,
      });
      var i = {};
      t.r(i), t.d(i, { Mt: () => o });
      var s = {};
      t.r(s), t.d(s, { NS: () => d, bf: () => B, C5: () => u });
      var a = t(80613),
        n = t.n(a),
        l = t(89068),
        m = t(56545),
        c = t(5323);
      const o = 70,
        u = 0,
        B = 2,
        d = 3;
      class g extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || l.Sg(g.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = l.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Request";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.sessions || l.Sg(y.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { sessions: { n: 1, c: b, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = l.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Response";
        }
      }
      class b extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.time_start || l.Sg(b.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  time_start: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_end: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  appid: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  device_type: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  disconnected: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
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
        static toObject(e, r) {
          return l.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession";
        }
      }
      class M extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.min_last_played || l.Sg(M.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  min_last_played: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = l.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Request";
        }
      }
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.games || l.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { games: { n: 1, c: w, r: !0, q: !0 } },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = l.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response";
        }
      }
      class w extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.appid || l.Sg(w.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  appid: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  last_playtime: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  first_playtime: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  playtime_windows_forever: {
                    n: 6,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 7,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 8,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_deck_forever: {
                    n: 16,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  first_windows_playtime: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  first_mac_playtime: {
                    n: 10,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  first_linux_playtime: {
                    n: 11,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  first_deck_playtime: {
                    n: 17,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_windows_playtime: {
                    n: 12,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_mac_playtime: {
                    n: 13,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_linux_playtime: {
                    n: 14,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_deck_playtime: {
                    n: 18,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  playtime_disconnected: {
                    n: 15,
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
        static toObject(e, r) {
          return l.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response_Game";
        }
      }
      class z extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamids || l.Sg(z.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint64String,
                    pbr: l.qM.readPackedUint64String,
                    bw: l.gp.writeRepeatedUint64String,
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
        static toObject(e, r) {
          return l.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Request";
        }
      }
      class f extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.accounts || l.Sg(f.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { accounts: { n: 1, c: p, r: !0, q: !0 } },
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
        static toObject(e, r) {
          return l.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response";
        }
      }
      class p extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.public_data || l.Sg(p.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  public_data: { n: 1, c: S },
                  private_data: { n: 2, c: R },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = l.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
        }
      }
      class S extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.steamid || l.Sg(S.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  steamid: {
                    n: 1,
                    q: !0,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  visibility_state: {
                    n: 2,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  profile_state: {
                    n: 4,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  ban_expires_time: {
                    n: 7,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  account_flags: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  sha_digest_avatar: {
                    n: 9,
                    br: l.qM.readBytes,
                    bw: l.gp.writeBytes,
                  },
                  persona_name: {
                    n: 10,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  profile_url: {
                    n: 11,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  content_country_restricted: {
                    n: 12,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
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
        static toObject(e, r) {
          return l.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
        }
      }
      class R extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.persona_state || l.Sg(R.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  persona_state: {
                    n: 1,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  persona_state_flags: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_created: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  game_id: {
                    n: 4,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  game_server_steam_id: {
                    n: 5,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  game_server_ip_address: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  game_server_port: {
                    n: 7,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  game_extra_info: {
                    n: 8,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  account_name: {
                    n: 9,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  lobby_steam_id: {
                    n: 10,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  rich_presence_kv: {
                    n: 11,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  broadcast_session_id: {
                    n: 12,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  watching_broadcast_accountid: {
                    n: 13,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  watching_broadcast_appid: {
                    n: 14,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  watching_broadcast_viewers: {
                    n: 15,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  watching_broadcast_title: {
                    n: 16,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  last_logoff_time: {
                    n: 17,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_seen_online: {
                    n: 18,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  game_os_type: {
                    n: 19,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  game_device_type: {
                    n: 20,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  game_device_name: {
                    n: 21,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  game_is_private: {
                    n: 22,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
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
        static toObject(e, r) {
          return l.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
        }
      }
      class h extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
        }
      }
      class W extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.steamid || l.Sg(W.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  mutual_friend_account_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = l.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IncomingInviteMutualFriendList";
        }
      }
      class j extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.incoming_invite_mutual_friends_lists || l.Sg(j.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  incoming_invite_mutual_friends_lists: {
                    n: 1,
                    c: W,
                    r: !0,
                    q: !0,
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
        static toObject(e, r) {
          return l.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
        }
      }
      class F extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.steamid || l.Sg(F.M()),
            a.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  include_appinfo: {
                    n: 2,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  include_played_free_games: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  appids_filter: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  include_free_sub: {
                    n: 5,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  skip_unvetted_apps: {
                    n: 6,
                    d: !0,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  language: { n: 7, br: l.qM.readString, bw: l.gp.writeString },
                  include_extended_appinfo: {
                    n: 8,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
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
        static toObject(e, r) {
          return l.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Request";
        }
      }
      class v extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.game_count || l.Sg(v.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  game_count: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  games: { n: 2, c: q, r: !0, q: !0 },
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
        static toObject(e, r) {
          return l.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response";
        }
      }
      class q extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.appid || l.Sg(q.M()),
            a.Message.initialize(this, e, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  appid: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  name: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  playtime_2weeks: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  img_icon_url: {
                    n: 5,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  has_community_visible_stats: {
                    n: 7,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  playtime_windows_forever: {
                    n: 8,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 9,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 10,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_deck_forever: {
                    n: 20,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  rtime_last_played: {
                    n: 11,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  capsule_filename: {
                    n: 12,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  sort_as: { n: 13, br: l.qM.readString, bw: l.gp.writeString },
                  has_workshop: {
                    n: 14,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  has_market: { n: 15, br: l.qM.readBool, bw: l.gp.writeBool },
                  has_dlc: { n: 16, br: l.qM.readBool, bw: l.gp.writeBool },
                  has_leaderboards: {
                    n: 17,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  content_descriptorids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  playtime_disconnected: {
                    n: 19,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = l.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response_Game";
        }
      }
      class T extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.max_age_seconds || l.Sg(T.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  max_age_seconds: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  ignore_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
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
        static toObject(e, r) {
          return l.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Request";
        }
      }
      class O extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.last_update_time || l.Sg(O.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  last_update_time: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
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
        static toObject(e, r) {
          return l.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Response";
        }
      }
      class I extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.play_sessions || l.Sg(I.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { play_sessions: { n: 3, c: P, r: !0, q: !0 } },
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
        static toObject(e, r) {
          return l.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request";
        }
      }
      class P extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || l.Sg(P.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  session_time_start: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  seconds: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  offline: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  owner: { n: 5, br: l.qM.readUint32, bw: l.gp.writeUint32 },
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
        static toObject(e, r) {
          return l.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
        }
      }
      class U extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Response";
        }
      }
      class C extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.appid || l.Sg(C.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
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
        static toObject(e, r) {
          return l.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Request";
        }
      }
      class x extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.player_level || l.Sg(x.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  player_level: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  badges: { n: 2, c: G, r: !0, q: !0 },
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
        static toObject(e, r) {
          return l.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response";
        }
      }
      class G extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.level || l.Sg(G.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  level: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  series: { n: 2, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  border_color: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
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
        static toObject(e, r) {
          return l.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response_Badge";
        }
      }
      class N extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.communityitemid || l.Sg(N.M()),
            a.Message.initialize(this, e, 0, -1, [15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  image_small: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  image_large: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  name: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  item_title: {
                    n: 5,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_description: {
                    n: 6,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  appid: { n: 7, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  item_type: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  item_class: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  movie_webm: {
                    n: 10,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  movie_mp4: {
                    n: 11,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  movie_webm_small: {
                    n: 13,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  movie_mp4_small: {
                    n: 14,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  equipped_flags: {
                    n: 12,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  profile_colors: { n: 15, c: A, r: !0, q: !0 },
                  tiled: { n: 16, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = l.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(N.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem";
        }
      }
      class A extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.style_name || l.Sg(A.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  style_name: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  color: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
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
        static toObject(e, r) {
          return l.BT(A.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem_ProfileColor";
        }
      }
      class k extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.steamid || l.Sg(k.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
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
        static toObject(e, r) {
          return l.BT(k.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Request";
        }
      }
      class E extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.profile_background || l.Sg(E.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: { profile_background: { n: 1, c: N } },
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
        static toObject(e, r) {
          return l.BT(E.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Response";
        }
      }
      class L extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.communityitemid || l.Sg(L.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
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
        static toObject(e, r) {
          return l.BT(L.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Request";
        }
      }
      class D extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Response";
        }
      }
      class K extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.steamid || l.Sg(K.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = l.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(K.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Request";
        }
      }
      class $ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.profile_background || l.Sg($.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: { profile_background: { n: 1, c: N } },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = l.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT($.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0($.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Response";
        }
      }
      class H extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.communityitemid || l.Sg(H.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = l.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(H.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Request";
        }
      }
      class Q extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Response";
        }
      }
      class V extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.steamid || l.Sg(V.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = l.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(V.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Request";
        }
      }
      class J extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.avatar_frame || l.Sg(J.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = { proto: J, fields: { avatar_frame: { n: 1, c: N } } }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = l.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(J.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Response";
        }
      }
      class X extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.communityitemid || l.Sg(X.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = l.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(X.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Request";
        }
      }
      class Y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Response";
        }
      }
      class Z extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.steamid || l.Sg(Z.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = l.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Z.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Request";
        }
      }
      class ee extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.avatar || l.Sg(ee.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = { proto: ee, fields: { avatar: { n: 1, c: N } } }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = l.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ee.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Response";
        }
      }
      class re extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.communityitemid || l.Sg(re.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = l.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(re.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Request";
        }
      }
      class te extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new te();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Response";
        }
      }
      class ie extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || l.Sg(ie.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = l.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ie.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Request";
        }
      }
      class se extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.steam_deck_keyboard_skin || l.Sg(se.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { steam_deck_keyboard_skin: { n: 1, c: N } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = l.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(se.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Response";
        }
      }
      class ae extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.communityitemid || l.Sg(ae.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = l.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ae.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Request";
        }
      }
      class ne extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ne();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Response";
        }
      }
      class le extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.language || l.Sg(le.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  filters: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readEnum,
                    pbr: l.qM.readPackedEnum,
                    bw: l.gp.writeRepeatedEnum,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = l.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(le.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Request";
        }
      }
      class me extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.profile_backgrounds || l.Sg(me.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  profile_backgrounds: { n: 1, c: N, r: !0, q: !0 },
                  mini_profile_backgrounds: { n: 2, c: N, r: !0, q: !0 },
                  avatar_frames: { n: 3, c: N, r: !0, q: !0 },
                  animated_avatars: { n: 4, c: N, r: !0, q: !0 },
                  profile_modifiers: { n: 5, c: N, r: !0, q: !0 },
                  steam_deck_keyboard_skins: { n: 6, c: N, r: !0, q: !0 },
                  steam_deck_startup_movies: { n: 7, c: N, r: !0, q: !0 },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = l.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(me.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Response";
        }
      }
      class ce extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.steamid || l.Sg(ce.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = l.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ce.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Request";
        }
      }
      class oe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.profile_background || l.Sg(oe.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  profile_background: { n: 1, c: N },
                  mini_profile_background: { n: 2, c: N },
                  avatar_frame: { n: 3, c: N },
                  animated_avatar: { n: 4, c: N },
                  profile_modifier: { n: 5, c: N },
                  steam_deck_keyboard_skin: { n: 6, c: N },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = l.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(oe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Response";
        }
      }
      class ue extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.communityitemid || l.Sg(ue.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  flags: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = l.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ue.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Request";
        }
      }
      class Be extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Be();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Response";
        }
      }
      class de extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new de();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Request";
        }
      }
      class ge extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.emoticons || l.Sg(ge.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: { emoticons: { n: 1, c: ye, r: !0, q: !0 } },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = l.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ge.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response";
        }
      }
      class ye extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.name || l.Sg(ye.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  name: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  count: { n: 2, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  time_last_used: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  use_count: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_received: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid: { n: 6, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = l.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ye.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response_Emoticon";
        }
      }
      class be extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.steamid || l.Sg(be.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  badgeid: { n: 2, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = l.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(be.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Request";
        }
      }
      class Me extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.quests || l.Sg(Me.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: { quests: { n: 1, c: _e, r: !0, q: !0 } },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = l.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Me.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Response";
        }
      }
      class _e extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.questid || l.Sg(_e.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  questid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  completed: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = l.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(_e.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Response_Quest";
        }
      }
      class we extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.appid || l.Sg(we.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  status_text: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = l.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(we.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(we.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(we.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Request";
        }
      }
      class ze extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ze();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Response";
        }
      }
      class fe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.steamid || l.Sg(fe.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  postid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = l.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(fe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Request";
        }
      }
      class pe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.accountid || l.Sg(pe.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  postid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  status_text: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  deleted: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  appid: { n: 5, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = l.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(pe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Response";
        }
      }
      class Se extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.postid || l.Sg(Se.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  postid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = l.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Se.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Request";
        }
      }
      class Re extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Re();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Response";
        }
      }
      class he extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.steamid || l.Sg(he.M()),
            a.Message.initialize(this, e, 0, -1, [4], null);
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
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  max_achievements: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = l.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(he.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Request";
        }
      }
      class We extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.games || l.Sg(We.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: { games: { n: 1, c: Fe, r: !0, q: !0 } },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = l.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(We.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response";
        }
      }
      class je extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.statid || l.Sg(je.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  statid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  bit: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  name: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  desc: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  icon: { n: 5, br: l.qM.readString, bw: l.gp.writeString },
                  icon_gray: {
                    n: 6,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  hidden: { n: 7, br: l.qM.readBool, bw: l.gp.writeBool },
                  player_percent_unlocked: {
                    n: 8,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = l.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(je.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
        }
      }
      class Fe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.appid || l.Sg(Fe.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  total_achievements: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  achievements: { n: 3, c: je, r: !0, q: !0 },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = l.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Fe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Game";
        }
      }
      class ve extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.steamid || l.Sg(ve.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  sha_schema: { n: 3, br: l.qM.readBytes, bw: l.gp.writeBytes },
                  crc_stats: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  crc_schema: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  app_running: { n: 6, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = l.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ve.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserStats_Request";
        }
      }
      class qe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.sha_schema || l.Sg(qe.M()),
            a.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  sha_schema: { n: 1, br: l.qM.readBytes, bw: l.gp.writeBytes },
                  crc_stats: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  schema: { n: 3, br: l.qM.readBytes, bw: l.gp.writeBytes },
                  stats: { n: 4, c: Oe, r: !0, q: !0 },
                  crc_schema: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = l.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(qe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserStats_Response";
        }
      }
      class Te extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.achievement_bit || l.Sg(Te.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  achievement_bit: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  unlock_time: {
                    n: 2,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = l.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Te.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserStats_Response_Unlock_Time";
        }
      }
      class Oe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.stat_id || l.Sg(Oe.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  stat_id: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  stat_value: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  unlock_times: { n: 3, c: Te, r: !0, q: !0 },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = l.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Oe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserStats_Response_Stats";
        }
      }
      class Ie extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.steamid || l.Sg(Ie.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  include_unvetted_apps: {
                    n: 4,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = l.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ie.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ie();
          return Ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Request";
        }
      }
      class Pe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.achievement_progress || l.Sg(Pe.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: { achievement_progress: { n: 1, c: Ue, r: !0, q: !0 } },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = l.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Pe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response";
        }
      }
      class Ue extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.appid || l.Sg(Ue.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  unlocked: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  total: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  percentage: { n: 4, br: l.qM.readFloat, bw: l.gp.writeFloat },
                  all_unlocked: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
                  cache_time: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  vetted: { n: 7, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = l.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ue.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
        }
      }
      class Ce extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.steamid || l.Sg(Ce.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  skip_unvetted_apps: {
                    n: 2,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  language: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  include_groups_without_progress: {
                    n: 4,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = l.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ce.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGamesWithAchievementProgress_Request";
        }
      }
      class xe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.groups || l.Sg(xe.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: { groups: { n: 1, c: Ge, r: !0, q: !0 } },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = l.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(xe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGamesWithAchievementProgress_Response";
        }
      }
      class Ge extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.appid || l.Sg(Ge.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  groupid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  dlcappid: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  localized_name: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  completion_achievements: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  completed_achievements: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  is_achievable: {
                    n: 7,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  is_completed: { n: 8, br: l.qM.readBool, bw: l.gp.writeBool },
                  time_completed: {
                    n: 9,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = l.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ge.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ge();
          return Ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGamesWithAchievementProgress_Response_GroupProgress";
        }
      }
      class Ne extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.appid || l.Sg(Ne.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  hash_only: { n: 3, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = l.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ne.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ne();
          return Ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Request";
        }
      }
      class Ae extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.achievements || l.Sg(Ae.M()),
            a.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  achievements: { n: 1, c: ke, r: !0, q: !0 },
                  schema_version: {
                    n: 2,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  groups: { n: 3, c: Ee, r: !0, q: !0 },
                  schema_hash: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = l.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ae.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response";
        }
      }
      class ke extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.internal_name || l.Sg(ke.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  internal_name: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  localized_name: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  localized_desc: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  icon: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  icon_gray: {
                    n: 5,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  hidden: { n: 6, br: l.qM.readBool, bw: l.gp.writeBool },
                  player_percent_unlocked: {
                    n: 7,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  internal_key: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  min_progress_int: {
                    n: 9,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  max_progress_int: {
                    n: 10,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  groupid: { n: 11, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  archived: { n: 12, br: l.qM.readBool, bw: l.gp.writeBool },
                  progress_type: {
                    n: 13,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  min_progress_float: {
                    n: 14,
                    br: l.qM.readFloat,
                    bw: l.gp.writeFloat,
                  },
                  max_progress_float: {
                    n: 15,
                    br: l.qM.readFloat,
                    bw: l.gp.writeFloat,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = l.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ke.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ke();
          return ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response_Achievement";
        }
      }
      class Ee extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.groupid || l.Sg(Ee.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  groupid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  localized_name: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  dlcappid: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  archived: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  developeronly: {
                    n: 5,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  order: { n: 6, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  ispublic: { n: 7, br: l.qM.readBool, bw: l.gp.writeBool },
                  total_achievements: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  completion_achievements: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = l.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ee.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response_Group";
        }
      }
      class Le extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.steamid || l.Sg(Le.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = l.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Le.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Le();
          return Le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserAchievements_Request";
        }
      }
      class De extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.achievements || l.Sg(De.M()),
            a.Message.initialize(this, e, 0, -1, [1, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  achievements: { n: 1, c: Ke, r: !0, q: !0 },
                  schema_version: {
                    n: 2,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  schema_hash: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  groups: { n: 4, c: $e, r: !0, q: !0 },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = l.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(De.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new De();
          return De.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(De.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(De.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserAchievements_Response";
        }
      }
      class Ke extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.internal_key || l.Sg(Ke.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  internal_key: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  unlocked: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                  unlock_time: {
                    n: 3,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                  progress_int: {
                    n: 4,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  progress_float: {
                    n: 5,
                    br: l.qM.readFloat,
                    bw: l.gp.writeFloat,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = l.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ke.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ke();
          return Ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserAchievements_Response_Achievement";
        }
      }
      class $e extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.groupid || l.Sg($e.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  groupid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  is_achievable: {
                    n: 2,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  completed_achievements: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  is_completed: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  time_completed: {
                    n: 9,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = l.w0($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT($e.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq($e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new $e();
          return $e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj($e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0($e.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserAchievements_Response_Group";
        }
      }
      class He extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.appid || l.Sg(He.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = l.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(He.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new He();
          return He.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(He.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(He.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGlobalAchievementPercentages_Request";
        }
      }
      class Qe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.achievements || l.Sg(Qe.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  achievements: { n: 1, c: Ve, r: !0, q: !0 },
                  groups: { n: 2, c: Je, r: !0, q: !0 },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = l.w0(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Qe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Qe();
          return Qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGlobalAchievementPercentages_Response";
        }
      }
      class Ve extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.internal_key || l.Sg(Ve.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  internal_key: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  player_percent_unlocked: {
                    n: 2,
                    br: l.qM.readFloat,
                    bw: l.gp.writeFloat,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = l.w0(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ve.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ve();
          return Ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGlobalAchievementPercentages_Response_Achievement";
        }
      }
      class Je extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.groupid || l.Sg(Je.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: {
                  groupid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  player_percent_completed: {
                    n: 2,
                    br: l.qM.readFloat,
                    bw: l.gp.writeFloat,
                  },
                },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = l.w0(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Je.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Je();
          return Je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGlobalAchievementPercentages_Response_Group";
        }
      }
      class Xe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.steamid || l.Sg(Xe.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = l.w0(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Xe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Xe();
          return Xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Request";
        }
      }
      class Ye extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.has_favorite_badge || l.Sg(Ye.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  has_favorite_badge: {
                    n: 1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  badgeid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  item_type: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  border_color: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid: { n: 6, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  level: { n: 7, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = l.w0(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ye.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ye();
          return Ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Response";
        }
      }
      class Ze extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.communityitemid || l.Sg(Ze.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  badgeid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = l.w0(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ze.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ze();
          return Ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Request";
        }
      }
      class er extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return er.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new er();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new er();
          return er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Response";
        }
      }
      class rr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rr.prototype.slot || l.Sg(rr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rr.sm_m ||
              (rr.sm_m = {
                proto: rr,
                fields: {
                  slot: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  publishedfileid: {
                    n: 3,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  item_assetid: {
                    n: 4,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  item_contextid: {
                    n: 5,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  notes: { n: 6, br: l.qM.readString, bw: l.gp.writeString },
                  title: { n: 7, br: l.qM.readString, bw: l.gp.writeString },
                  accountid: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  badgeid: { n: 9, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  border_color: {
                    n: 10,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  item_classid: {
                    n: 11,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  item_instanceid: {
                    n: 12,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  ban_check_result: {
                    n: 13,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  replay_year: {
                    n: 14,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            rr.sm_m
          );
        }
        static MBF() {
          return rr.sm_mbf || (rr.sm_mbf = l.w0(rr.M())), rr.sm_mbf;
        }
        toObject(e = !1) {
          return rr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(rr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(rr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new rr();
          return rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(rr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(rr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomizationSlot";
        }
      }
      class tr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tr.prototype.customization_type || l.Sg(tr.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tr.sm_m ||
              (tr.sm_m = {
                proto: tr,
                fields: {
                  customization_type: {
                    n: 1,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  large: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                  slots: { n: 3, c: rr, r: !0, q: !0 },
                  active: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  customization_style: {
                    n: 5,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  purchaseid: {
                    n: 6,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  level: { n: 7, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            tr.sm_m
          );
        }
        static MBF() {
          return tr.sm_mbf || (tr.sm_mbf = l.w0(tr.M())), tr.sm_mbf;
        }
        toObject(e = !1) {
          return tr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(tr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(tr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new tr();
          return tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(tr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(tr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomization";
        }
      }
      class ir extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ir.prototype.theme_id || l.Sg(ir.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ir.sm_m ||
              (ir.sm_m = {
                proto: ir,
                fields: {
                  theme_id: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  title: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            ir.sm_m
          );
        }
        static MBF() {
          return ir.sm_mbf || (ir.sm_mbf = l.w0(ir.M())), ir.sm_mbf;
        }
        toObject(e = !1) {
          return ir.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ir.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ir.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ir();
          return ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ir.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ir.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileTheme";
        }
      }
      class sr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            sr.prototype.hide_profile_awards || l.Sg(sr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            sr.sm_m ||
              (sr.sm_m = {
                proto: sr,
                fields: {
                  hide_profile_awards: {
                    n: 1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            sr.sm_m
          );
        }
        static MBF() {
          return sr.sm_mbf || (sr.sm_mbf = l.w0(sr.M())), sr.sm_mbf;
        }
        toObject(e = !1) {
          return sr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(sr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(sr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new sr();
          return sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(sr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(sr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfilePreferences";
        }
      }
      class ar extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ar.prototype.steamid || l.Sg(ar.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ar.sm_m ||
              (ar.sm_m = {
                proto: ar,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  include_inactive_customizations: {
                    n: 2,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  include_purchased_customizations: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            ar.sm_m
          );
        }
        static MBF() {
          return ar.sm_mbf || (ar.sm_mbf = l.w0(ar.M())), ar.sm_mbf;
        }
        toObject(e = !1) {
          return ar.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ar.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ar.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ar();
          return ar.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ar.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ar.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Request";
        }
      }
      class nr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nr.prototype.customizations || l.Sg(nr.M()),
            a.Message.initialize(this, e, 0, -1, [1, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            nr.sm_m ||
              (nr.sm_m = {
                proto: nr,
                fields: {
                  customizations: { n: 1, c: tr, r: !0, q: !0 },
                  slots_available: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  profile_theme: { n: 3, c: ir },
                  purchased_customizations: { n: 4, c: lr, r: !0, q: !0 },
                  profile_preferences: { n: 5, c: sr },
                },
              }),
            nr.sm_m
          );
        }
        static MBF() {
          return nr.sm_mbf || (nr.sm_mbf = l.w0(nr.M())), nr.sm_mbf;
        }
        toObject(e = !1) {
          return nr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(nr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(nr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new nr();
          return nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(nr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(nr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response";
        }
      }
      class lr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lr.prototype.purchaseid || l.Sg(lr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lr.sm_m ||
              (lr.sm_m = {
                proto: lr,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  level: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            lr.sm_m
          );
        }
        static MBF() {
          return lr.sm_mbf || (lr.sm_mbf = l.w0(lr.M())), lr.sm_mbf;
        }
        toObject(e = !1) {
          return lr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(lr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(lr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new lr();
          return lr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(lr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(lr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
        }
      }
      class mr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mr.prototype.steamid || l.Sg(mr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mr.sm_m ||
              (mr.sm_m = {
                proto: mr,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            mr.sm_m
          );
        }
        static MBF() {
          return mr.sm_mbf || (mr.sm_mbf = l.w0(mr.M())), mr.sm_mbf;
        }
        toObject(e = !1) {
          return mr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(mr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(mr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new mr();
          return mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(mr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(mr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Request";
        }
      }
      class cr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            cr.prototype.purchased_customizations || l.Sg(cr.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            cr.sm_m ||
              (cr.sm_m = {
                proto: cr,
                fields: {
                  purchased_customizations: { n: 1, c: or, r: !0, q: !0 },
                },
              }),
            cr.sm_m
          );
        }
        static MBF() {
          return cr.sm_mbf || (cr.sm_mbf = l.w0(cr.M())), cr.sm_mbf;
        }
        toObject(e = !1) {
          return cr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(cr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(cr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new cr();
          return cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(cr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(cr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response";
        }
      }
      class or extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            or.prototype.purchaseid || l.Sg(or.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            or.sm_m ||
              (or.sm_m = {
                proto: or,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                },
              }),
            or.sm_m
          );
        }
        static MBF() {
          return or.sm_mbf || (or.sm_mbf = l.w0(or.M())), or.sm_mbf;
        }
        toObject(e = !1) {
          return or.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(or.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(or.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new or();
          return or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(or.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(or.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class ur extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ur.prototype.steamid || l.Sg(ur.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ur.sm_m ||
              (ur.sm_m = {
                proto: ur,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            ur.sm_m
          );
        }
        static MBF() {
          return ur.sm_mbf || (ur.sm_mbf = l.w0(ur.M())), ur.sm_mbf;
        }
        toObject(e = !1) {
          return ur.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ur.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ur.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ur();
          return ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ur.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ur.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
        }
      }
      class Br extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Br.prototype.purchased_customizations || l.Sg(Br.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Br.sm_m ||
              (Br.sm_m = {
                proto: Br,
                fields: {
                  purchased_customizations: { n: 1, c: dr, r: !0, q: !0 },
                  upgraded_customizations: { n: 2, c: gr, r: !0, q: !0 },
                },
              }),
            Br.sm_m
          );
        }
        static MBF() {
          return Br.sm_mbf || (Br.sm_mbf = l.w0(Br.M())), Br.sm_mbf;
        }
        toObject(e = !1) {
          return Br.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Br.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Br.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Br();
          return Br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Br.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Br.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
        }
      }
      class dr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dr.prototype.customization_type || l.Sg(dr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dr.sm_m ||
              (dr.sm_m = {
                proto: dr,
                fields: {
                  customization_type: {
                    n: 1,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  count: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            dr.sm_m
          );
        }
        static MBF() {
          return dr.sm_mbf || (dr.sm_mbf = l.w0(dr.M())), dr.sm_mbf;
        }
        toObject(e = !1) {
          return dr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(dr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(dr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new dr();
          return dr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(dr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(dr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class gr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gr.prototype.customization_type || l.Sg(gr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gr.sm_m ||
              (gr.sm_m = {
                proto: gr,
                fields: {
                  customization_type: {
                    n: 1,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  level: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            gr.sm_m
          );
        }
        static MBF() {
          return gr.sm_mbf || (gr.sm_mbf = l.w0(gr.M())), gr.sm_mbf;
        }
        toObject(e = !1) {
          return gr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(gr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(gr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new gr();
          return gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(gr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(gr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
        }
      }
      class yr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return yr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new yr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new yr();
          return yr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Request";
        }
      }
      class br extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            br.prototype.profile_themes || l.Sg(br.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            br.sm_m ||
              (br.sm_m = {
                proto: br,
                fields: { profile_themes: { n: 1, c: ir, r: !0, q: !0 } },
              }),
            br.sm_m
          );
        }
        static MBF() {
          return br.sm_mbf || (br.sm_mbf = l.w0(br.M())), br.sm_mbf;
        }
        toObject(e = !1) {
          return br.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(br.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(br.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new br();
          return br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(br.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(br.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Response";
        }
      }
      class Mr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mr.prototype.theme_id || l.Sg(Mr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mr.sm_m ||
              (Mr.sm_m = {
                proto: Mr,
                fields: {
                  theme_id: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            Mr.sm_m
          );
        }
        static MBF() {
          return Mr.sm_mbf || (Mr.sm_mbf = l.w0(Mr.M())), Mr.sm_mbf;
        }
        toObject(e = !1) {
          return Mr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Mr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Mr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Mr();
          return Mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Mr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Mr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Request";
        }
      }
      class _r extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _r.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new _r();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new _r();
          return _r.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Response";
        }
      }
      class wr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wr.prototype.profile_preferences || l.Sg(wr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wr.sm_m ||
              (wr.sm_m = {
                proto: wr,
                fields: { profile_preferences: { n: 1, c: sr } },
              }),
            wr.sm_m
          );
        }
        static MBF() {
          return wr.sm_mbf || (wr.sm_mbf = l.w0(wr.M())), wr.sm_mbf;
        }
        toObject(e = !1) {
          return wr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(wr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(wr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new wr();
          return wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(wr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(wr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Request";
        }
      }
      class zr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return zr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new zr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new zr();
          return zr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Response";
        }
      }
      class fr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fr.prototype.appid || l.Sg(fr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fr.sm_m ||
              (fr.sm_m = {
                proto: fr,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  include_family_licenses: {
                    n: 2,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            fr.sm_m
          );
        }
        static MBF() {
          return fr.sm_mbf || (fr.sm_mbf = l.w0(fr.M())), fr.sm_mbf;
        }
        toObject(e = !1) {
          return fr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(fr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(fr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new fr();
          return fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(fr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(fr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Request";
        }
      }
      class pr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pr.prototype.your_info || l.Sg(pr.M()),
            a.Message.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pr.sm_m ||
              (pr.sm_m = {
                proto: pr,
                fields: {
                  your_info: { n: 1, c: Rr },
                  in_game: { n: 2, c: Sr, r: !0, q: !0 },
                  played_recently: { n: 3, c: Sr, r: !0, q: !0 },
                  played_ever: { n: 4, c: Sr, r: !0, q: !0 },
                  owns: { n: 5, c: Sr, r: !0, q: !0 },
                  in_wishlist: { n: 6, c: Sr, r: !0, q: !0 },
                },
              }),
            pr.sm_m
          );
        }
        static MBF() {
          return pr.sm_mbf || (pr.sm_mbf = l.w0(pr.M())), pr.sm_mbf;
        }
        toObject(e = !1) {
          return pr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(pr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(pr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new pr();
          return pr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(pr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(pr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response";
        }
      }
      class Sr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Sr.prototype.steamid || l.Sg(Sr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Sr.sm_m ||
              (Sr.sm_m = {
                proto: Sr,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Sr.sm_m
          );
        }
        static MBF() {
          return Sr.sm_mbf || (Sr.sm_mbf = l.w0(Sr.M())), Sr.sm_mbf;
        }
        toObject(e = !1) {
          return Sr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Sr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Sr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Sr();
          return Sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Sr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Sr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
        }
      }
      class Rr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rr.prototype.steamid || l.Sg(Rr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rr.sm_m ||
              (Rr.sm_m = {
                proto: Rr,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  in_wishlist: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  owned: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            Rr.sm_m
          );
        }
        static MBF() {
          return Rr.sm_mbf || (Rr.sm_mbf = l.w0(Rr.M())), Rr.sm_mbf;
        }
        toObject(e = !1) {
          return Rr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Rr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Rr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Rr();
          return Rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Rr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Rr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
        }
      }
      class hr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return hr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new hr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new hr();
          return hr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Request";
        }
      }
      class Wr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wr.prototype.time_ssa_accepted || l.Sg(Wr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wr.sm_m ||
              (Wr.sm_m = {
                proto: Wr,
                fields: {
                  time_ssa_accepted: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_ssa_updated: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_chinassa_accepted: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Wr.sm_m
          );
        }
        static MBF() {
          return Wr.sm_mbf || (Wr.sm_mbf = l.w0(Wr.M())), Wr.sm_mbf;
        }
        toObject(e = !1) {
          return Wr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Wr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Wr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Wr();
          return Wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Wr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Wr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Response";
        }
      }
      class jr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jr.prototype.agreement_type || l.Sg(jr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            jr.sm_m ||
              (jr.sm_m = {
                proto: jr,
                fields: {
                  agreement_type: {
                    n: 1,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  time_signed_utc: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            jr.sm_m
          );
        }
        static MBF() {
          return jr.sm_mbf || (jr.sm_mbf = l.w0(jr.M())), jr.sm_mbf;
        }
        toObject(e = !1) {
          return jr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(jr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(jr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new jr();
          return jr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(jr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(jr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Request";
        }
      }
      class Fr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Fr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Fr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Fr();
          return Fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Response";
        }
      }
      class vr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return vr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new vr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new vr();
          return vr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Request";
        }
      }
      class qr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qr.prototype.nicknames || l.Sg(qr.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qr.sm_m ||
              (qr.sm_m = {
                proto: qr,
                fields: { nicknames: { n: 1, c: Tr, r: !0, q: !0 } },
              }),
            qr.sm_m
          );
        }
        static MBF() {
          return qr.sm_mbf || (qr.sm_mbf = l.w0(qr.M())), qr.sm_mbf;
        }
        toObject(e = !1) {
          return qr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(qr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(qr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new qr();
          return qr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(qr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(qr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response";
        }
      }
      class Tr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tr.prototype.accountid || l.Sg(Tr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tr.sm_m ||
              (Tr.sm_m = {
                proto: Tr,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            Tr.sm_m
          );
        }
        static MBF() {
          return Tr.sm_mbf || (Tr.sm_mbf = l.w0(Tr.M())), Tr.sm_mbf;
        }
        toObject(e = !1) {
          return Tr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Tr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Tr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Tr();
          return Tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Tr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Tr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response_PlayerNickname";
        }
      }
      class Or extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Or.prototype.accountid || l.Sg(Or.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Or.sm_m ||
              (Or.sm_m = {
                proto: Or,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  notifications_showingame: {
                    n: 3,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  notifications_showonline: {
                    n: 4,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  notifications_showmessages: {
                    n: 5,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  sounds_showingame: {
                    n: 6,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  sounds_showonline: {
                    n: 7,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  sounds_showmessages: {
                    n: 8,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  notifications_sendmobile: {
                    n: 9,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                },
              }),
            Or.sm_m
          );
        }
        static MBF() {
          return Or.sm_mbf || (Or.sm_mbf = l.w0(Or.M())), Or.sm_mbf;
        }
        toObject(e = !1) {
          return Or.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Or.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Or.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Or();
          return Or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Or.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Or.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PerFriendPreferences";
        }
      }
      class Ir extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ir.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Ir();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ir();
          return Ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Request";
        }
      }
      class Pr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pr.prototype.preferences || l.Sg(Pr.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pr.sm_m ||
              (Pr.sm_m = {
                proto: Pr,
                fields: { preferences: { n: 1, c: Or, r: !0, q: !0 } },
              }),
            Pr.sm_m
          );
        }
        static MBF() {
          return Pr.sm_mbf || (Pr.sm_mbf = l.w0(Pr.M())), Pr.sm_mbf;
        }
        toObject(e = !1) {
          return Pr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Pr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Pr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Pr();
          return Pr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Pr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Pr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Response";
        }
      }
      class Ur extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ur.prototype.preferences || l.Sg(Ur.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ur.sm_m ||
              (Ur.sm_m = {
                proto: Ur,
                fields: { preferences: { n: 1, c: Or } },
              }),
            Ur.sm_m
          );
        }
        static MBF() {
          return Ur.sm_mbf || (Ur.sm_mbf = l.w0(Ur.M())), Ur.sm_mbf;
        }
        toObject(e = !1) {
          return Ur.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ur.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ur.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ur();
          return Ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ur.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ur.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Request";
        }
      }
      class Cr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Cr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Cr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Cr();
          return Cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Response";
        }
      }
      class xr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xr.prototype.steamid || l.Sg(xr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xr.sm_m ||
              (xr.sm_m = {
                proto: xr,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            xr.sm_m
          );
        }
        static MBF() {
          return xr.sm_mbf || (xr.sm_mbf = l.w0(xr.M())), xr.sm_mbf;
        }
        toObject(e = !1) {
          return xr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(xr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(xr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new xr();
          return xr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(xr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(xr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Request";
        }
      }
      class Gr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gr.prototype.invite_sent || l.Sg(Gr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Gr.sm_m ||
              (Gr.sm_m = {
                proto: Gr,
                fields: {
                  invite_sent: { n: 1, br: l.qM.readBool, bw: l.gp.writeBool },
                  friend_relationship: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  result: { n: 3, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                },
              }),
            Gr.sm_m
          );
        }
        static MBF() {
          return Gr.sm_mbf || (Gr.sm_mbf = l.w0(Gr.M())), Gr.sm_mbf;
        }
        toObject(e = !1) {
          return Gr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Gr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Gr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Gr();
          return Gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Gr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Gr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Response";
        }
      }
      class Nr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nr.prototype.steamid || l.Sg(Nr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            Nr.sm_m
          );
        }
        static MBF() {
          return Nr.sm_mbf || (Nr.sm_mbf = l.w0(Nr.M())), Nr.sm_mbf;
        }
        toObject(e = !1) {
          return Nr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Nr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Nr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Nr();
          return Nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Nr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Nr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Request";
        }
      }
      class Ar extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ar.prototype.friend_relationship || l.Sg(Ar.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ar.sm_m ||
              (Ar.sm_m = {
                proto: Ar,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Ar.sm_m
          );
        }
        static MBF() {
          return Ar.sm_mbf || (Ar.sm_mbf = l.w0(Ar.M())), Ar.sm_mbf;
        }
        toObject(e = !1) {
          return Ar.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ar.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ar.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ar();
          return Ar.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ar.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ar.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Response";
        }
      }
      class kr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kr.prototype.steamid || l.Sg(kr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  unignore: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            kr.sm_m
          );
        }
        static MBF() {
          return kr.sm_mbf || (kr.sm_mbf = l.w0(kr.M())), kr.sm_mbf;
        }
        toObject(e = !1) {
          return kr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(kr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(kr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new kr();
          return kr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(kr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(kr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Request";
        }
      }
      class Er extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Er.prototype.friend_relationship || l.Sg(Er.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Er.sm_m ||
              (Er.sm_m = {
                proto: Er,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Er.sm_m
          );
        }
        static MBF() {
          return Er.sm_mbf || (Er.sm_mbf = l.w0(Er.M())), Er.sm_mbf;
        }
        toObject(e = !1) {
          return Er.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Er.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Er.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Er();
          return Er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Er.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Er.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Response";
        }
      }
      class Lr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Lr.prototype.parenthesize_nicknames || l.Sg(Lr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Lr.sm_m ||
              (Lr.sm_m = {
                proto: Lr,
                fields: {
                  parenthesize_nicknames: {
                    n: 4,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  text_filter_setting: {
                    n: 5,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  text_filter_ignore_friends: {
                    n: 6,
                    d: !0,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  text_filter_words_revision: {
                    n: 7,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  timestamp_updated: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Lr.sm_m
          );
        }
        static MBF() {
          return Lr.sm_mbf || (Lr.sm_mbf = l.w0(Lr.M())), Lr.sm_mbf;
        }
        toObject(e = !1) {
          return Lr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Lr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Lr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Lr();
          return Lr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Lr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Lr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferences";
        }
      }
      class Dr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Dr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Dr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Dr();
          return Dr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Request";
        }
      }
      class Kr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kr.prototype.preferences || l.Sg(Kr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Kr.sm_m ||
              (Kr.sm_m = {
                proto: Kr,
                fields: {
                  preferences: { n: 1, c: Lr },
                  content_descriptor_preferences: { n: 2, c: c.u2 },
                },
              }),
            Kr.sm_m
          );
        }
        static MBF() {
          return Kr.sm_mbf || (Kr.sm_mbf = l.w0(Kr.M())), Kr.sm_mbf;
        }
        toObject(e = !1) {
          return Kr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Kr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Kr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Kr();
          return Kr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Kr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Kr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Response";
        }
      }
      class $r extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $r.prototype.preferences || l.Sg($r.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $r.sm_m ||
              ($r.sm_m = {
                proto: $r,
                fields: { preferences: { n: 1, c: Lr } },
              }),
            $r.sm_m
          );
        }
        static MBF() {
          return $r.sm_mbf || ($r.sm_mbf = l.w0($r.M())), $r.sm_mbf;
        }
        toObject(e = !1) {
          return $r.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT($r.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq($r.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new $r();
          return $r.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj($r.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0($r.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Request";
        }
      }
      class Hr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Hr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Hr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Hr();
          return Hr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Response";
        }
      }
      class Qr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qr.prototype.text_filter_custom_banned_words || l.Sg(Qr.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qr.sm_m ||
              (Qr.sm_m = {
                proto: Qr,
                fields: {
                  text_filter_custom_banned_words: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readString,
                    bw: l.gp.writeRepeatedString,
                  },
                  text_filter_custom_clean_words: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readString,
                    bw: l.gp.writeRepeatedString,
                  },
                  text_filter_words_revision: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Qr.sm_m
          );
        }
        static MBF() {
          return Qr.sm_mbf || (Qr.sm_mbf = l.w0(Qr.M())), Qr.sm_mbf;
        }
        toObject(e = !1) {
          return Qr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Qr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Qr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Qr();
          return Qr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Qr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Qr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWords";
        }
      }
      class Vr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Vr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Vr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Vr();
          return Vr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Request";
        }
      }
      class Jr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Jr.prototype.words || l.Sg(Jr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Jr.sm_m ||
              (Jr.sm_m = { proto: Jr, fields: { words: { n: 1, c: Qr } } }),
            Jr.sm_m
          );
        }
        static MBF() {
          return Jr.sm_mbf || (Jr.sm_mbf = l.w0(Jr.M())), Jr.sm_mbf;
        }
        toObject(e = !1) {
          return Jr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Jr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Jr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Jr();
          return Jr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Jr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Jr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Response";
        }
      }
      class Xr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xr.prototype.language || l.Sg(Xr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xr.sm_m ||
              (Xr.sm_m = {
                proto: Xr,
                fields: {
                  language: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                },
              }),
            Xr.sm_m
          );
        }
        static MBF() {
          return Xr.sm_mbf || (Xr.sm_mbf = l.w0(Xr.M())), Xr.sm_mbf;
        }
        toObject(e = !1) {
          return Xr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Xr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Xr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Xr();
          return Xr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Xr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Xr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Request";
        }
      }
      class Yr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Yr.prototype.state || l.Sg(Yr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Yr.sm_m ||
              (Yr.sm_m = {
                proto: Yr,
                fields: {
                  state: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            Yr.sm_m
          );
        }
        static MBF() {
          return Yr.sm_mbf || (Yr.sm_mbf = l.w0(Yr.M())), Yr.sm_mbf;
        }
        toObject(e = !1) {
          return Yr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Yr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Yr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Yr();
          return Yr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Yr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Yr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Response";
        }
      }
      class Zr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Zr.prototype.announcement_gid || l.Sg(Zr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Zr.sm_m ||
              (Zr.sm_m = {
                proto: Zr,
                fields: {
                  announcement_gid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  time_posted: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Zr.sm_m
          );
        }
        static MBF() {
          return Zr.sm_mbf || (Zr.sm_mbf = l.w0(Zr.M())), Zr.sm_mbf;
        }
        toObject(e = !1) {
          return Zr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Zr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Zr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Zr();
          return Zr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Zr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Zr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
        }
      }
      class et extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new et();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new et();
          return et.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
        }
      }
      class rt extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rt.prototype.privacy_state || l.Sg(rt.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state_inventory: {
                    n: 2,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state_gifts: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state_ownedgames: {
                    n: 4,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state_playtime: {
                    n: 5,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state_friendslist: {
                    n: 6,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = l.w0(rt.M())), rt.sm_mbf;
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(rt.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(rt.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new rt();
          return rt.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(rt.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(rt.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPrivacySettings";
        }
      }
      class tt extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new tt();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new tt();
          return tt.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Request";
        }
      }
      class it extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            it.prototype.privacy_settings || l.Sg(it.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: { privacy_settings: { n: 1, c: rt } },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = l.w0(it.M())), it.sm_mbf;
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(it.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(it.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new it();
          return it.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(it.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(it.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Response";
        }
      }
      class st extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            st.prototype.appid || l.Sg(st.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = l.w0(st.M())), st.sm_mbf;
        }
        toObject(e = !1) {
          return st.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(st.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(st.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new st();
          return st.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(st.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(st.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return st.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Request";
        }
      }
      class at extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            at.prototype.is_enabled || l.Sg(at.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: {
                  is_enabled: { n: 1, br: l.qM.readBool, bw: l.gp.writeBool },
                  seconds: { n: 2, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  seconds_today: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  is_steamchina_account: {
                    n: 4,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  is_age_verified: {
                    n: 5,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  seconds_allowed_today: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  age_verification_pending: {
                    n: 7,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  block_minors: { n: 8, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            at.sm_m
          );
        }
        static MBF() {
          return at.sm_mbf || (at.sm_mbf = l.w0(at.M())), at.sm_mbf;
        }
        toObject(e = !1) {
          return at.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(at.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(at.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new at();
          return at.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(at.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(at.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return at.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Response";
        }
      }
      class nt extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nt.prototype.games || l.Sg(nt.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: { games: { n: 1, c: w, r: !0, q: !0 } },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = l.w0(nt.M())), nt.sm_mbf;
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(nt.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(nt.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new nt();
          return nt.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(nt.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(nt.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_LastPlayedTimes_Notification";
        }
      }
      class lt extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lt.prototype.accountid || l.Sg(lt.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lt.sm_m ||
              (lt.sm_m = {
                proto: lt,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  is_echo_to_self: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            lt.sm_m
          );
        }
        static MBF() {
          return lt.sm_mbf || (lt.sm_mbf = l.w0(lt.M())), lt.sm_mbf;
        }
        toObject(e = !1) {
          return lt.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(lt.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(lt.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new lt();
          return lt.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(lt.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(lt.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendNicknameChanged_Notification";
        }
      }
      class mt extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mt.prototype.accountid || l.Sg(mt.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mt.sm_m ||
              (mt.sm_m = {
                proto: mt,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                },
              }),
            mt.sm_m
          );
        }
        static MBF() {
          return mt.sm_mbf || (mt.sm_mbf = l.w0(mt.M())), mt.sm_mbf;
        }
        toObject(e = !1) {
          return mt.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(mt.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(mt.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new mt();
          return mt.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(mt.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(mt.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
        }
      }
      class ct extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ct.prototype.state || l.Sg(ct.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ct.sm_m ||
              (ct.sm_m = {
                proto: ct,
                fields: {
                  state: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            ct.sm_m
          );
        }
        static MBF() {
          return ct.sm_mbf || (ct.sm_mbf = l.w0(ct.M())), ct.sm_mbf;
        }
        toObject(e = !1) {
          return ct.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ct.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ct.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ct();
          return ct.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ct.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ct.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_NewSteamAnnouncementState_Notification";
        }
      }
      class ot extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ot.prototype.preferences || l.Sg(ot.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ot.sm_m ||
              (ot.sm_m = {
                proto: ot,
                fields: {
                  preferences: { n: 1, c: Lr },
                  content_descriptor_preferences: { n: 2, c: c.u2 },
                },
              }),
            ot.sm_m
          );
        }
        static MBF() {
          return ot.sm_mbf || (ot.sm_mbf = l.w0(ot.M())), ot.sm_mbf;
        }
        toObject(e = !1) {
          return ot.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ot.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ot.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ot();
          return ot.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ot.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ot.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferencesChanged_Notification";
        }
      }
      class ut extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ut.prototype.words || l.Sg(ut.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ut.sm_m ||
              (ut.sm_m = { proto: ut, fields: { words: { n: 1, c: Qr } } }),
            ut.sm_m
          );
        }
        static MBF() {
          return ut.sm_mbf || (ut.sm_mbf = l.w0(ut.M())), ut.sm_mbf;
        }
        toObject(e = !1) {
          return ut.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ut.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ut.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ut();
          return ut.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ut.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ut.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWordsChanged_Notification";
        }
      }
      class Bt extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Bt.prototype.accountid || l.Sg(Bt.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Bt.sm_m ||
              (Bt.sm_m = {
                proto: Bt,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                  preferences: { n: 2, c: Or },
                },
              }),
            Bt.sm_m
          );
        }
        static MBF() {
          return Bt.sm_mbf || (Bt.sm_mbf = l.w0(Bt.M())), Bt.sm_mbf;
        }
        toObject(e = !1) {
          return Bt.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Bt.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Bt.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Bt();
          return Bt.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Bt.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Bt.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PerFriendPreferencesChanged_Notification";
        }
      }
      class dt extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dt.prototype.privacy_settings || l.Sg(dt.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dt.sm_m ||
              (dt.sm_m = {
                proto: dt,
                fields: { privacy_settings: { n: 1, c: rt } },
              }),
            dt.sm_m
          );
        }
        static MBF() {
          return dt.sm_mbf || (dt.sm_mbf = l.w0(dt.M())), dt.sm_mbf;
        }
        toObject(e = !1) {
          return dt.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(dt.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(dt.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new dt();
          return dt.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(dt.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(dt.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PrivacySettingsChanged_Notification";
        }
      }
      var gt, yt;
      !(function (e) {
        (e.GetRecentPlaytimeSessionsForChild = function (e, r, t) {
          return e.SendMsg(
            "Player.GetRecentPlaytimeSessionsForChild#1",
            (0, m.I8)(g, r, t),
            y,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetPlayerLinkDetails = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPlayerLinkDetails#1",
              (0, m.I8)(z, r, t),
              f,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetMutualFriendsForIncomingInvites = function (e, r, t) {
            return e.SendMsg(
              "Player.GetMutualFriendsForIncomingInvites#1",
              (0, m.I8)(h, r, t),
              j,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetOwnedGames = function (e, r, t) {
            return e.SendMsg("Player.GetOwnedGames#1", (0, m.I8)(F, r, t), v, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetPlayNext = function (e, r, t) {
            return e.SendMsg("Player.GetPlayNext#1", (0, m.I8)(T, r, t), O, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFriendsGameplayInfo = function (e, r, t) {
            return e.SendMsg(
              "Player.GetFriendsGameplayInfo#1",
              (0, m.I8)(fr, r, t),
              pr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetGameBadgeLevels = function (e, r, t) {
            return e.SendMsg(
              "Player.GetGameBadgeLevels#1",
              (0, m.I8)(C, r, t),
              x,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileBackground = function (e, r, t) {
            return e.SendMsg(
              "Player.GetProfileBackground#1",
              (0, m.I8)(k, r, t),
              E,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetProfileBackground = function (e, r, t) {
            return e.SendMsg(
              "Player.SetProfileBackground#1",
              (0, m.I8)(L, r, t),
              D,
              { ePrivilege: 1 },
            );
          }),
          (e.GetMiniProfileBackground = function (e, r, t) {
            return e.SendMsg(
              "Player.GetMiniProfileBackground#1",
              (0, m.I8)(K, r, t),
              $,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetMiniProfileBackground = function (e, r, t) {
            return e.SendMsg(
              "Player.SetMiniProfileBackground#1",
              (0, m.I8)(H, r, t),
              Q,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarFrame = function (e, r, t) {
            return e.SendMsg("Player.GetAvatarFrame#1", (0, m.I8)(V, r, t), J, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAvatarFrame = function (e, r, t) {
            return e.SendMsg("Player.SetAvatarFrame#1", (0, m.I8)(X, r, t), Y, {
              ePrivilege: 1,
            });
          }),
          (e.GetAnimatedAvatar = function (e, r, t) {
            return e.SendMsg(
              "Player.GetAnimatedAvatar#1",
              (0, m.I8)(Z, r, t),
              ee,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetAnimatedAvatar = function (e, r, t) {
            return e.SendMsg(
              "Player.SetAnimatedAvatar#1",
              (0, m.I8)(re, r, t),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSteamDeckKeyboardSkin = function (e, r, t) {
            return e.SendMsg(
              "Player.GetSteamDeckKeyboardSkin#1",
              (0, m.I8)(ie, r, t),
              se,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetSteamDeckKeyboardSkin = function (e, r, t) {
            return e.SendMsg(
              "Player.SetSteamDeckKeyboardSkin#1",
              (0, m.I8)(ae, r, t),
              ne,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsOwned = function (e, r, t) {
            return e.SendMsg(
              "Player.GetProfileItemsOwned#1",
              (0, m.I8)(le, r, t),
              me,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsEquipped = function (e, r, t) {
            return e.SendMsg(
              "Player.GetProfileItemsEquipped#1",
              (0, m.I8)(ce, r, t),
              oe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetEquippedProfileItemFlags = function (e, r, t) {
            return e.SendMsg(
              "Player.SetEquippedProfileItemFlags#1",
              (0, m.I8)(ue, r, t),
              Be,
              { ePrivilege: 1 },
            );
          }),
          (e.GetEmoticonList = function (e, r, t) {
            return e.SendMsg(
              "Player.GetEmoticonList#1",
              (0, m.I8)(de, r, t),
              ge,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetCommunityBadgeProgress = function (e, r, t) {
            return e.SendMsg(
              "Player.GetCommunityBadgeProgress#1",
              (0, m.I8)(be, r, t),
              Me,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetTopAchievementsForGames = function (e, r, t) {
            return e.SendMsg(
              "Player.GetTopAchievementsForGames#1",
              (0, m.I8)(he, r, t),
              We,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetAchievementsProgress = function (e, r, t) {
            return e.SendMsg(
              "Player.GetAchievementsProgress#1",
              (0, m.I8)(Ie, r, t),
              Pe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetGameAchievements = function (e, r, t) {
            return e.SendMsg(
              "Player.GetGameAchievements#1",
              (0, m.I8)(Ne, r, t),
              Ae,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetUserAchievements = function (e, r, t) {
            return e.SendMsg(
              "Player.GetUserAchievements#1",
              (0, m.I8)(Le, r, t),
              De,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetGlobalAchievementPercentages = function (e, r, t) {
            return e.SendMsg(
              "Player.GetGlobalAchievementPercentages#1",
              (0, m.I8)(He, r, t),
              Qe,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetGamesWithAchievementProgress = function (e, r, t) {
            return e.SendMsg(
              "Player.GetGamesWithAchievementProgress#1",
              (0, m.I8)(Ce, r, t),
              xe,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                rgBrowserAPISites: ["community"],
              },
            );
          }),
          (e.GetUserStats = function (e, r, t) {
            return e.SendMsg("Player.GetUserStats#1", (0, m.I8)(ve, r, t), qe, {
              bConstMethod: !0,
              ePrivilege: 2,
            });
          }),
          (e.GetFavoriteBadge = function (e, r, t) {
            return e.SendMsg(
              "Player.GetFavoriteBadge#1",
              (0, m.I8)(Xe, r, t),
              Ye,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetFavoriteBadge = function (e, r, t) {
            return e.SendMsg(
              "Player.SetFavoriteBadge#1",
              (0, m.I8)(Ze, r, t),
              er,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileCustomization = function (e, r, t) {
            return e.SendMsg(
              "Player.GetProfileCustomization#1",
              (0, m.I8)(ar, r, t),
              nr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedProfileCustomizations = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              (0, m.I8)(mr, r, t),
              cr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedAndUpgradedProfileCustomizations = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              (0, m.I8)(ur, r, t),
              Br,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileThemesAvailable = function (e, r, t) {
            return e.SendMsg(
              "Player.GetProfileThemesAvailable#1",
              (0, m.I8)(yr, r, t),
              br,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetProfileTheme = function (e, r, t) {
            return e.SendMsg(
              "Player.SetProfileTheme#1",
              (0, m.I8)(Mr, r, t),
              _r,
              { ePrivilege: 1 },
            );
          }),
          (e.SetProfilePreferences = function (e, r, t) {
            return e.SendMsg(
              "Player.SetProfilePreferences#1",
              (0, m.I8)(wr, r, t),
              zr,
              { ePrivilege: 1 },
            );
          }),
          (e.PostStatusToFriends = function (e, r, t) {
            return e.SendMsg(
              "Player.PostStatusToFriends#1",
              (0, m.I8)(we, r, t),
              ze,
              { ePrivilege: 3 },
            );
          }),
          (e.GetPostedStatus = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPostedStatus#1",
              (0, m.I8)(fe, r, t),
              pe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DeletePostedStatus = function (e, r, t) {
            return e.SendMsg(
              "Player.DeletePostedStatus#1",
              (0, m.I8)(Se, r, t),
              Re,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetLastPlayedTimes = function (e, r, t) {
            return e.SendMsg(
              "Player.ClientGetLastPlayedTimes#1",
              (0, m.I8)(M, r, t),
              _,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTimeSSAAccepted = function (e, r, t) {
            return e.SendMsg(
              "Player.GetTimeSSAAccepted#1",
              (0, m.I8)(hr, r, t),
              Wr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.AcceptSSA = function (e, r, t) {
            return e.SendMsg("Player.AcceptSSA#1", (0, m.I8)(jr, r, t), Fr, {
              ePrivilege: 1,
            });
          }),
          (e.GetNicknameList = function (e, r, t) {
            return e.SendMsg(
              "Player.GetNicknameList#1",
              (0, m.I8)(vr, r, t),
              qr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPerFriendPreferences = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPerFriendPreferences#1",
              (0, m.I8)(Ir, r, t),
              Pr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPerFriendPreferences = function (e, r, t) {
            return e.SendMsg(
              "Player.SetPerFriendPreferences#1",
              (0, m.I8)(Ur, r, t),
              Cr,
              { ePrivilege: 1 },
            );
          }),
          (e.AddFriend = function (e, r, t) {
            return e.SendMsg("Player.AddFriend#1", (0, m.I8)(xr, r, t), Gr, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveFriend = function (e, r, t) {
            return e.SendMsg("Player.RemoveFriend#1", (0, m.I8)(Nr, r, t), Ar, {
              ePrivilege: 1,
            });
          }),
          (e.IgnoreFriend = function (e, r, t) {
            return e.SendMsg("Player.IgnoreFriend#1", (0, m.I8)(kr, r, t), Er, {
              ePrivilege: 1,
            });
          }),
          (e.GetCommunityPreferences = function (e, r, t) {
            return e.SendMsg(
              "Player.GetCommunityPreferences#1",
              (0, m.I8)(Dr, r, t),
              Kr,
              { ePrivilege: 1 },
            );
          }),
          (e.SetCommunityPreferences = function (e, r, t) {
            return e.SendMsg(
              "Player.SetCommunityPreferences#1",
              (0, m.I8)($r, r, t),
              Hr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTextFilterWords = function (e, r, t) {
            return e.SendMsg(
              "Player.GetTextFilterWords#1",
              (0, m.I8)(Vr, r, t),
              Jr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNewSteamAnnouncementState = function (e, r, t) {
            return e.SendMsg(
              "Player.GetNewSteamAnnouncementState#1",
              (0, m.I8)(Xr, r, t),
              Yr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.UpdateSteamAnnouncementLastRead = function (e, r, t) {
            return e.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              (0, m.I8)(Zr, r, t),
              et,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPrivacySettings = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPrivacySettings#1",
              (0, m.I8)(tt, r, t),
              it,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDurationControl = function (e, r, t) {
            return e.SendMsg(
              "Player.GetDurationControl#1",
              (0, m.I8)(st, r, t),
              at,
              { ePrivilege: 1 },
            );
          }),
          (e.RecordDisconnectedPlaytime = function (e, r, t) {
            return e.SendMsg(
              "Player.RecordDisconnectedPlaytime#1",
              (0, m.I8)(I, r, t),
              U,
              { ePrivilege: 1 },
            );
          });
      })(gt || (gt = {})),
        (function (e) {
          (e.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: nt,
          }),
            (e.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: lt,
            }),
            (e.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: mt,
            }),
            (e.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: ct,
            }),
            (e.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: ot,
            }),
            (e.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: ut,
            }),
            (e.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: Bt,
            }),
            (e.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: dt,
            });
        })(yt || (yt = {}));
    },
  },
]);
