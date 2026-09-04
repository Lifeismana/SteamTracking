/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [7671],
    {
      59514: (jn, mt, st) => {
        st.d(mt, {
          B4H: () => z,
          tzK: () => Ni,
          w_T: () => Ei,
          SCE: () => li,
          kVt: () => W,
          EyI: () => f,
          Bx6: () => Mt,
          xtC: () => wt,
        });
        var Mt = {};
        st.r(Mt), st.d(Mt, { NS: () => ft, bf: () => ut, C5: () => zt });
        var a = st(80613),
          n = st.n(a),
          i = st(75245),
          c = st(35038),
          ct = st(47997);
        const zt = 0,
          Wn = 1,
          ut = 2,
          ft = 3;
        function dn(w) {
          return "unknown EUserBadge ( " + w + " )";
        }
        function On(w) {
          return "unknown EAuctionBadgeLevel ( " + w + " )";
        }
        function Tn(w) {
          return "unknown EProfileCustomizationStyle ( " + w + " )";
        }
        function Un(w) {
          return "unknown EAchievementProgressType ( " + w + " )";
        }
        function xn(w) {
          return "unknown EProfileItemEquippedFlag ( " + w + " )";
        }
        function In(w) {
          return "unknown EProfileColorStyle ( " + w + " )";
        }
        function Sn(w) {
          return "unknown EAgreementType ( " + w + " )";
        }
        function $n(w) {
          return "unknown ENotificationSetting ( " + w + " )";
        }
        function Vn(w) {
          return "unknown ETextFilterSetting ( " + w + " )";
        }
        function Jn(w) {
          return "unknown ETextFilterOperation ( " + w + " )";
        }
        class U extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.steamid || i.Sg(U.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
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
          static toObject(r, t) {
            return i.BT(U.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new U();
            return U.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(U.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(U.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetRecentPlaytimeSessionsForChild_Request";
          }
        }
        class x extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.sessions || i.Sg(x.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: { sessions: { n: 1, c: I, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(x.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new x();
            return x.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(x.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(x.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetRecentPlaytimeSessionsForChild_Response";
          }
        }
        class I extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.time_start || i.Sg(I.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    time_start: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_end: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    device_type: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    disconnected: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
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
          static toObject(r, t) {
            return i.BT(I.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new I();
            return I.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(I.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(I.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession";
          }
        }
        class S extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.min_last_played || i.Sg(S.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    min_last_played: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, t) {
            return i.BT(S.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new S();
            return S.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(S.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(S.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetLastPlayedTimes_Request";
          }
        }
        class $ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.games || i.Sg($.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: { games: { n: 1, c: j, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT($.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new $();
            return $.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj($.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0($.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetLastPlayedTimes_Response";
          }
        }
        class j extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.appid || i.Sg(j.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    appid: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    last_playtime: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    playtime_2weeks: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    playtime_forever: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    first_playtime: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    playtime_windows_forever: {
                      n: 6,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    playtime_mac_forever: {
                      n: 7,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    playtime_linux_forever: {
                      n: 8,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    playtime_deck_forever: {
                      n: 16,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    first_windows_playtime: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    first_mac_playtime: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    first_linux_playtime: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    first_deck_playtime: {
                      n: 17,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    last_windows_playtime: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    last_mac_playtime: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    last_linux_playtime: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    last_deck_playtime: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    playtime_disconnected: {
                      n: 15,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
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
          static toObject(r, t) {
            return i.BT(j.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new j();
            return j.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(j.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(j.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetLastPlayedTimes_Response_Game";
          }
        }
        class V extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.steamids || i.Sg(V.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    steamids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
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
          static toObject(r, t) {
            return i.BT(V.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new V();
            return V.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(V.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(V.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPlayerLinkDetails_Request";
          }
        }
        class J extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.accounts || i.Sg(J.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: { accounts: { n: 1, c: X, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(J.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new J();
            return J.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(J.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(J.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPlayerLinkDetails_Response";
          }
        }
        class X extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.public_data || i.Sg(X.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    public_data: { n: 1, c: Y },
                    private_data: { n: 2, c: Z },
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
          static toObject(r, t) {
            return i.BT(X.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new X();
            return X.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(X.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(X.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
          }
        }
        class Y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.steamid || i.Sg(Y.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    steamid: {
                      n: 1,
                      q: !0,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    visibility_state: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    privacy_state: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    profile_state: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    ban_expires_time: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    account_flags: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    sha_digest_avatar: {
                      n: 9,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                    persona_name: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    profile_url: {
                      n: 11,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    content_country_restricted: {
                      n: 12,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
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
          static toObject(r, t) {
            return i.BT(Y.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Y();
            return Y.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Y.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Y.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
          }
        }
        class Z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.persona_state || i.Sg(Z.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    persona_state: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    persona_state_flags: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_created: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    game_id: {
                      n: 4,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    game_server_steam_id: {
                      n: 5,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    game_server_ip_address: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    game_server_port: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    game_extra_info: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    account_name: {
                      n: 9,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    lobby_steam_id: {
                      n: 10,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    rich_presence_kv: {
                      n: 11,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    broadcast_session_id: {
                      n: 12,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    watching_broadcast_accountid: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    watching_broadcast_appid: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    watching_broadcast_viewers: {
                      n: 15,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    watching_broadcast_title: {
                      n: 16,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    last_logoff_time: {
                      n: 17,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    last_seen_online: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    game_os_type: {
                      n: 19,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    game_device_type: {
                      n: 20,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    game_device_name: {
                      n: 21,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    game_is_private: {
                      n: 22,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
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
          static toObject(r, t) {
            return i.BT(Z.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Z();
            return Z.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Z.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Z.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
          }
        }
        class vi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return vi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new vi();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new vi();
            return vi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return vi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              vi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
          }
        }
        class H extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.steamid || i.Sg(H.M()),
              a.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    mutual_friend_account_ids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
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
          static toObject(r, t) {
            return i.BT(H.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new H();
            return H.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(H.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(H.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_IncomingInviteMutualFriendList";
          }
        }
        class h extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.incoming_invite_mutual_friends_lists || i.Sg(h.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    incoming_invite_mutual_friends_lists: {
                      n: 1,
                      c: H,
                      r: !0,
                      q: !0,
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
          static toObject(r, t) {
            return i.BT(h.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new h();
            return h.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(h.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(h.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
          }
        }
        class F extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.steamid || i.Sg(F.M()),
              a.Message.initialize(this, r, 0, -1, [4], null);
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
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    include_appinfo: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    include_played_free_games: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    appids_filter: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    include_free_sub: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    skip_unvetted_apps: {
                      n: 6,
                      d: !0,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    language: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    include_extended_appinfo: {
                      n: 8,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
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
          static toObject(r, t) {
            return i.BT(F.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new F();
            return F.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(F.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(F.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetOwnedGames_Request";
          }
        }
        class Q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.game_count || i.Sg(Q.M()),
              a.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    game_count: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    games: { n: 2, c: K, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(Q.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Q();
            return Q.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetOwnedGames_Response";
          }
        }
        class K extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.appid || i.Sg(K.M()),
              a.Message.initialize(this, r, 0, -1, [18], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    appid: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    playtime_2weeks: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    playtime_forever: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    img_icon_url: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    has_community_visible_stats: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    playtime_windows_forever: {
                      n: 8,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    playtime_mac_forever: {
                      n: 9,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    playtime_linux_forever: {
                      n: 10,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    playtime_deck_forever: {
                      n: 20,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    rtime_last_played: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    capsule_filename: {
                      n: 12,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    sort_as: {
                      n: 13,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    has_workshop: {
                      n: 14,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    has_market: {
                      n: 15,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    has_dlc: { n: 16, br: i.qM.readBool, bw: i.gp.writeBool },
                    has_leaderboards: {
                      n: 17,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    content_descriptorids: {
                      n: 18,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    playtime_disconnected: {
                      n: 19,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
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
          static toObject(r, t) {
            return i.BT(K.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new K();
            return K.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(K.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(K.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetOwnedGames_Response_Game";
          }
        }
        class E extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.max_age_seconds || i.Sg(E.M()),
              a.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    max_age_seconds: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    ignore_appids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
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
          static toObject(r, t) {
            return i.BT(E.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new E();
            return E.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(E.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(E.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPlayNext_Request";
          }
        }
        class N extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.last_update_time || i.Sg(N.M()),
              a.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    last_update_time: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
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
          static toObject(r, t) {
            return i.BT(N.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new N();
            return N.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(N.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(N.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPlayNext_Response";
          }
        }
        class l extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.play_sessions || i.Sg(l.M()),
              a.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: { play_sessions: { n: 3, c: v, r: !0, q: !0 } },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = i.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(l.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new l();
            return l.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(l.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(l.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_RecordDisconnectedPlaytime_Request";
          }
        }
        class v extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.appid || i.Sg(v.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    session_time_start: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    seconds: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    offline: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    owner: { n: 5, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(v.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new v();
            return v.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(v.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(v.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
          }
        }
        class Di extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Di.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Di();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Di();
            return Di.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Di.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Di.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_RecordDisconnectedPlaytime_Response";
          }
        }
        class D extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.appid || i.Sg(D.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(D.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new D();
            return D.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(D.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(D.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetGameBadgeLevels_Request";
          }
        }
        class p extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.player_level || i.Sg(p.M()),
              a.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    player_level: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    badges: { n: 2, c: k, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(p.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new p();
            return p.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(p.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(p.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetGameBadgeLevels_Response";
          }
        }
        class k extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.level || i.Sg(k.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    level: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    series: { n: 2, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    border_color: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
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
          static toObject(r, t) {
            return i.BT(k.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new k();
            return k.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(k.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(k.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetGameBadgeLevels_Response_Badge";
          }
        }
        class g extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.communityitemid || i.Sg(g.M()),
              a.Message.initialize(this, r, 0, -1, [15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    image_small: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    image_large: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    name: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    item_title: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_description: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appid: { n: 7, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    item_type: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    item_class: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    movie_webm: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    movie_mp4: {
                      n: 11,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    movie_webm_small: {
                      n: 13,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    movie_mp4_small: {
                      n: 14,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    equipped_flags: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    profile_colors: { n: 15, c: L, r: !0, q: !0 },
                    tiled: { n: 16, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
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
          static toObject(r, t) {
            return i.BT(g.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new g();
            return g.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(g.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(g.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ProfileItem";
          }
        }
        class L extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.style_name || i.Sg(L.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    style_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    color: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, t) {
            return i.BT(L.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new L();
            return L.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(L.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(L.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ProfileItem_ProfileColor";
          }
        }
        class q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.steamid || i.Sg(q.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, t) {
            return i.BT(q.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new q();
            return q.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetProfileBackground_Request";
          }
        }
        class e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              e.prototype.profile_background || i.Sg(e.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: { profile_background: { n: 1, c: g } },
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
          static toObject(r, t) {
            return i.BT(e.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(e.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new e();
            return e.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(e.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(e.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetProfileBackground_Response";
          }
        }
        class A extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.communityitemid || i.Sg(A.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, t) {
            return i.BT(A.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new A();
            return A.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(A.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(A.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetProfileBackground_Request";
          }
        }
        class pi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return pi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new pi();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new pi();
            return pi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return pi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              pi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetProfileBackground_Response";
          }
        }
        class o extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.steamid || i.Sg(o.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    language: {
                      n: 2,
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
          static toObject(r, t) {
            return i.BT(o.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new o();
            return o.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(o.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(o.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetMiniProfileBackground_Request";
          }
        }
        class y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.profile_background || i.Sg(y.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: { profile_background: { n: 1, c: g } },
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
          static toObject(r, t) {
            return i.BT(y.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new y();
            return y.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(y.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(y.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetMiniProfileBackground_Response";
          }
        }
        class R extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.communityitemid || i.Sg(R.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, t) {
            return i.BT(R.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new R();
            return R.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(R.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(R.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetMiniProfileBackground_Request";
          }
        }
        class ki extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ki.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ki();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ki();
            return ki.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ki.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ki.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetMiniProfileBackground_Response";
          }
        }
        class G extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.steamid || i.Sg(G.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, t) {
            return i.BT(G.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new G();
            return G.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(G.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(G.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetAvatarFrame_Request";
          }
        }
        class C extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.avatar_frame || i.Sg(C.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: { avatar_frame: { n: 1, c: g } },
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
          static toObject(r, t) {
            return i.BT(C.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new C();
            return C.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(C.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(C.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetAvatarFrame_Response";
          }
        }
        class P extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.communityitemid || i.Sg(P.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, t) {
            return i.BT(P.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new P();
            return P.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(P.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(P.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetAvatarFrame_Request";
          }
        }
        class Li extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Li.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Li();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Li();
            return Li.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Li.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Li.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetAvatarFrame_Response";
          }
        }
        class _ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.steamid || i.Sg(_.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
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
          static toObject(r, t) {
            return i.BT(_.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new _();
            return _.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(_.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(_.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetAnimatedAvatar_Request";
          }
        }
        class rr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.avatar || i.Sg(rr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = { proto: rr, fields: { avatar: { n: 1, c: g } } }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = i.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(rr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new rr();
            return rr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(rr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(rr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetAnimatedAvatar_Response";
          }
        }
        class ir extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.communityitemid || i.Sg(ir.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, t) {
            return i.BT(ir.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ir();
            return ir.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ir.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ir.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetAnimatedAvatar_Request";
          }
        }
        class qi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return qi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new qi();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new qi();
            return qi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return qi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              qi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetAnimatedAvatar_Response";
          }
        }
        class tr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.steamid || i.Sg(tr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, t) {
            return i.BT(tr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new tr();
            return tr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetSteamDeckKeyboardSkin_Request";
          }
        }
        class nr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.steam_deck_keyboard_skin || i.Sg(nr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: { steam_deck_keyboard_skin: { n: 1, c: g } },
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
          static toObject(r, t) {
            return i.BT(nr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new nr();
            return nr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(nr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(nr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetSteamDeckKeyboardSkin_Response";
          }
        }
        class ar extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.communityitemid || i.Sg(ar.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
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
          static toObject(r, t) {
            return i.BT(ar.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ar();
            return ar.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ar.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ar.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetSteamDeckKeyboardSkin_Request";
          }
        }
        class ei extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ei.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ei();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ei();
            return ei.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ei.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ei.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetSteamDeckKeyboardSkin_Response";
          }
        }
        class Br extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.language || i.Sg(Br.M()),
              a.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    filters: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
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
          static toObject(r, t) {
            return i.BT(Br.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Br();
            return Br.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetProfileItemsOwned_Request";
          }
        }
        class br extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.profile_backgrounds || i.Sg(br.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    profile_backgrounds: { n: 1, c: g, r: !0, q: !0 },
                    mini_profile_backgrounds: { n: 2, c: g, r: !0, q: !0 },
                    avatar_frames: { n: 3, c: g, r: !0, q: !0 },
                    animated_avatars: { n: 4, c: g, r: !0, q: !0 },
                    profile_modifiers: { n: 5, c: g, r: !0, q: !0 },
                    steam_deck_keyboard_skins: { n: 6, c: g, r: !0, q: !0 },
                    steam_deck_startup_movies: { n: 7, c: g, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(br.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new br();
            return br.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetProfileItemsOwned_Response";
          }
        }
        class sr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.steamid || i.Sg(sr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
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
          static toObject(r, t) {
            return i.BT(sr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new sr();
            return sr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(sr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(sr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetProfileItemsEquipped_Request";
          }
        }
        class Mr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.profile_background || i.Sg(Mr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    profile_background: { n: 1, c: g },
                    mini_profile_background: { n: 2, c: g },
                    avatar_frame: { n: 3, c: g },
                    animated_avatar: { n: 4, c: g },
                    profile_modifier: { n: 5, c: g },
                    steam_deck_keyboard_skin: { n: 6, c: g },
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
          static toObject(r, t) {
            return i.BT(Mr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Mr();
            return Mr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetProfileItemsEquipped_Response";
          }
        }
        class wr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.communityitemid || i.Sg(wr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    flags: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(wr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new wr();
            return wr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(wr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(wr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetEquippedProfileItemFlags_Request";
          }
        }
        class Ai extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ai.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ai();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ai();
            return Ai.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ai.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ai.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetEquippedProfileItemFlags_Response";
          }
        }
        class oi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return oi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new oi();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new oi();
            return oi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetEmoticonList_Request";
          }
        }
        class cr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.emoticons || i.Sg(cr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: { emoticons: { n: 1, c: gr, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(cr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new cr();
            return cr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(cr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(cr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetEmoticonList_Response";
          }
        }
        class gr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.name || i.Sg(gr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    name: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    count: { n: 2, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    time_last_used: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    use_count: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_received: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appid: { n: 6, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
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
          static toObject(r, t) {
            return i.BT(gr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new gr();
            return gr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(gr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(gr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetEmoticonList_Response_Emoticon";
          }
        }
        class mr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.steamid || i.Sg(mr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    badgeid: { n: 2, br: i.qM.readInt32, bw: i.gp.writeInt32 },
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
          static toObject(r, t) {
            return i.BT(mr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new mr();
            return mr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetCommunityBadgeProgress_Request";
          }
        }
        class zr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.quests || i.Sg(zr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: { quests: { n: 1, c: ur, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(zr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new zr();
            return zr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetCommunityBadgeProgress_Response";
          }
        }
        class ur extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.questid || i.Sg(ur.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    questid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    completed: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
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
          static toObject(r, t) {
            return i.BT(ur.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ur();
            return ur.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetCommunityBadgeProgress_Response_Quest";
          }
        }
        class W extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.appid || i.Sg(W.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                    status_text: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, t) {
            return i.BT(W.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new W();
            return W.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(W.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(W.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_PostStatusToFriends_Request";
          }
        }
        class yi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return yi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new yi();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new yi();
            return yi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return yi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              yi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_PostStatusToFriends_Response";
          }
        }
        class fr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.steamid || i.Sg(fr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    postid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
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
          static toObject(r, t) {
            return i.BT(fr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new fr();
            return fr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPostedStatus_Request";
          }
        }
        class jr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.accountid || i.Sg(jr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    accountid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    postid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    status_text: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    deleted: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    appid: { n: 5, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(jr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new jr();
            return jr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(jr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(jr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPostedStatus_Response";
          }
        }
        class Wr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.postid || i.Sg(Wr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    postid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, t) {
            return i.BT(Wr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Wr();
            return Wr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Wr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Wr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_DeletePostedStatus_Request";
          }
        }
        class Ri extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ri.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ri();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ri();
            return Ri.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_DeletePostedStatus_Response";
          }
        }
        class dr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.steamid || i.Sg(dr.M()),
              a.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    max_achievements: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
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
          static toObject(r, t) {
            return i.BT(dr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new dr();
            return dr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(dr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(dr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetTopAchievementsForGames_Request";
          }
        }
        class Or extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.games || i.Sg(Or.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: { games: { n: 1, c: Ur, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(Or.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Or();
            return Or.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Or.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Or.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetTopAchievementsForGames_Response";
          }
        }
        class Tr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.statid || i.Sg(Tr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    statid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    bit: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    desc: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    icon: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                    icon_gray: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    hidden: { n: 7, br: i.qM.readBool, bw: i.gp.writeBool },
                    player_percent_unlocked: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
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
          static toObject(r, t) {
            return i.BT(Tr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Tr();
            return Tr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
          }
        }
        class Ur extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.appid || i.Sg(Ur.M()),
              a.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    total_achievements: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    achievements: { n: 3, c: Tr, r: !0, q: !0 },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = i.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ur.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ur();
            return Ur.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetTopAchievementsForGames_Response_Game";
          }
        }
        class xr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.steamid || i.Sg(xr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    sha_schema: {
                      n: 3,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                    crc_stats: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    crc_schema: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, t) {
            return i.BT(xr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new xr();
            return xr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(xr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(xr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetUserStats_Request";
          }
        }
        class Ir extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.sha_schema || i.Sg(Ir.M()),
              a.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    sha_schema: {
                      n: 1,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                    crc_stats: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    schema: { n: 3, br: i.qM.readBytes, bw: i.gp.writeBytes },
                    stats: { n: 4, c: $r, r: !0, q: !0 },
                    crc_schema: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = i.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ir.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ir();
            return Ir.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ir.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ir.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetUserStats_Response";
          }
        }
        class Sr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.achievement_bit || i.Sg(Sr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    achievement_bit: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    unlock_time: {
                      n: 2,
                      br: i.qM.readFixed32,
                      bw: i.gp.writeFixed32,
                    },
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
          static toObject(r, t) {
            return i.BT(Sr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Sr();
            return Sr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Sr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Sr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetUserStats_Response_Unlock_Time";
          }
        }
        class $r extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.stat_id || i.Sg($r.M()),
              a.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    stat_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    stat_value: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    unlock_times: { n: 3, c: Sr, r: !0, q: !0 },
                  },
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
          static toObject(r, t) {
            return i.BT($r.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new $r();
            return $r.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj($r.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0($r.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetUserStats_Response_Stats";
          }
        }
        class Vr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.steamid || i.Sg(Vr.M()),
              a.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    include_unvetted_apps: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = i.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Vr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Vr();
            return Vr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Vr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Vr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetAchievementsProgress_Request";
          }
        }
        class Jr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.achievement_progress || i.Sg(Jr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    achievement_progress: { n: 1, c: Xr, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(Jr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Jr();
            return Jr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Jr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Jr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetAchievementsProgress_Response";
          }
        }
        class Xr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.appid || i.Sg(Xr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                    unlocked: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    percentage: {
                      n: 4,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    all_unlocked: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    cache_time: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    vetted: { n: 7, br: i.qM.readBool, bw: i.gp.writeBool },
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
          static toObject(r, t) {
            return i.BT(Xr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Xr();
            return Xr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Xr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Xr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
          }
        }
        class Yr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.appid || i.Sg(Yr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    hash_only: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = i.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Yr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Yr();
            return Yr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Yr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Yr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetGameAchievements_Request";
          }
        }
        class Zr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.achievements || i.Sg(Zr.M()),
              a.Message.initialize(this, r, 0, -1, [1, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    achievements: { n: 1, c: Hr, r: !0, q: !0 },
                    schema_version: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    groups: { n: 3, c: hr, r: !0, q: !0 },
                    schema_hash: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
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
          static toObject(r, t) {
            return i.BT(Zr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Zr();
            return Zr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetGameAchievements_Response";
          }
        }
        class Hr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.internal_name || i.Sg(Hr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    internal_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    localized_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    localized_desc: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    icon: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    icon_gray: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    hidden: { n: 6, br: i.qM.readBool, bw: i.gp.writeBool },
                    player_percent_unlocked: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    internal_key: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    min_progress_int: {
                      n: 9,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    max_progress_int: {
                      n: 10,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    groupid: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    archived: { n: 12, br: i.qM.readBool, bw: i.gp.writeBool },
                    progress_type: {
                      n: 13,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    min_progress_float: {
                      n: 14,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    max_progress_float: {
                      n: 15,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
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
          static toObject(r, t) {
            return i.BT(Hr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Hr();
            return Hr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Hr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Hr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetGameAchievements_Response_Achievement";
          }
        }
        class hr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.groupid || i.Sg(hr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    groupid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    localized_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    dlcappid: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    archived: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    developeronly: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    order: { n: 6, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    ispublic: { n: 7, br: i.qM.readBool, bw: i.gp.writeBool },
                    total_achievements: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    completion_achievements: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, t) {
            return i.BT(hr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new hr();
            return hr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(hr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(hr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetGameAchievements_Response_Group";
          }
        }
        class Fr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.steamid || i.Sg(Fr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(Fr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Fr();
            return Fr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetUserAchievements_Request";
          }
        }
        class Qr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.achievements || i.Sg(Qr.M()),
              a.Message.initialize(this, r, 0, -1, [1, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    achievements: { n: 1, c: Kr, r: !0, q: !0 },
                    schema_version: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    schema_hash: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    groups: { n: 4, c: Er, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(Qr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Qr();
            return Qr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Qr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Qr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetUserAchievements_Response";
          }
        }
        class Kr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.internal_key || i.Sg(Kr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: {
                    internal_key: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    unlocked: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    unlock_time: {
                      n: 3,
                      br: i.qM.readFixed32,
                      bw: i.gp.writeFixed32,
                    },
                    progress_int: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    progress_float: {
                      n: 5,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
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
          static toObject(r, t) {
            return i.BT(Kr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Kr();
            return Kr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Kr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Kr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetUserAchievements_Response_Achievement";
          }
        }
        class Er extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.groupid || i.Sg(Er.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    groupid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    is_achievable: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    completed_achievements: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    is_completed: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
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
          static toObject(r, t) {
            return i.BT(Er.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Er();
            return Er.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Er.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Er.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetUserAchievements_Response_Group";
          }
        }
        class Nr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.appid || i.Sg(Nr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
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
          static toObject(r, t) {
            return i.BT(Nr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Nr();
            return Nr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Nr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Nr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetGlobalAchievementPercentages_Request";
          }
        }
        class lr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.achievements || i.Sg(lr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: { achievements: { n: 1, c: vr, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(lr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new lr();
            return lr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetGlobalAchievementPercentages_Response";
          }
        }
        class vr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vr.prototype.internal_key || i.Sg(vr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    internal_key: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    player_percent_unlocked: {
                      n: 2,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = i.w0(vr.M())), vr.sm_mbf;
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(vr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new vr();
            return vr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(vr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(vr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetGlobalAchievementPercentages_Response_Achievement";
          }
        }
        class Dr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.steamid || i.Sg(Dr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = i.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Dr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Dr();
            return Dr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Dr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Dr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetFavoriteBadge_Request";
          }
        }
        class pr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.has_favorite_badge || i.Sg(pr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    has_favorite_badge: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    badgeid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    communityitemid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    item_type: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    border_color: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appid: { n: 6, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    level: { n: 7, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = i.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(pr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new pr();
            return pr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(pr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(pr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetFavoriteBadge_Response";
          }
        }
        class kr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.communityitemid || i.Sg(kr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    badgeid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, t) {
            return i.BT(kr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new kr();
            return kr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(kr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(kr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetFavoriteBadge_Request";
          }
        }
        class Gi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Gi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Gi();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Gi();
            return Gi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetFavoriteBadge_Response";
          }
        }
        class Lr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.slot || i.Sg(Lr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    slot: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    publishedfileid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    item_assetid: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    item_contextid: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    notes: { n: 6, br: i.qM.readString, bw: i.gp.writeString },
                    title: { n: 7, br: i.qM.readString, bw: i.gp.writeString },
                    accountid: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    badgeid: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    border_color: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    item_classid: {
                      n: 11,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    item_instanceid: {
                      n: 12,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    ban_check_result: {
                      n: 13,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    replay_year: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
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
          static toObject(r, t) {
            return i.BT(Lr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Lr();
            return Lr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ProfileCustomizationSlot";
          }
        }
        class qr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.customization_type || i.Sg(qr.M()),
              a.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: {
                    customization_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    large: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    slots: { n: 3, c: Lr, r: !0, q: !0 },
                    active: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    customization_style: {
                      n: 5,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    purchaseid: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    level: { n: 7, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
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
          static toObject(r, t) {
            return i.BT(qr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new qr();
            return qr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(qr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(qr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ProfileCustomization";
          }
        }
        class d extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.theme_id || i.Sg(d.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    theme_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, t) {
            return i.BT(d.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new d();
            return d.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(d.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(d.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ProfileTheme";
          }
        }
        class O extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.hide_profile_awards || i.Sg(O.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    hide_profile_awards: {
                      n: 1,
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
          static toObject(r, t) {
            return i.BT(O.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new O();
            return O.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(O.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(O.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ProfilePreferences";
          }
        }
        class er extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.steamid || i.Sg(er.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    include_inactive_customizations: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    include_purchased_customizations: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
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
          static toObject(r, t) {
            return i.BT(er.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new er();
            return er.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(er.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(er.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetProfileCustomization_Request";
          }
        }
        class Ar extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ar.prototype.customizations || i.Sg(Ar.M()),
              a.Message.initialize(this, r, 0, -1, [1, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: {
                    customizations: { n: 1, c: qr, r: !0, q: !0 },
                    slots_available: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    profile_theme: { n: 3, c: d },
                    purchased_customizations: { n: 4, c: or, r: !0, q: !0 },
                    profile_preferences: { n: 5, c: O },
                  },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = i.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(r = !1) {
            return Ar.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ar.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ar.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ar();
            return Ar.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ar.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ar.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetProfileCustomization_Response";
          }
        }
        class or extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.purchaseid || i.Sg(or.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    customization_type: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    level: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
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
          static toObject(r, t) {
            return i.BT(or.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new or();
            return or.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(or.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(or.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
          }
        }
        class yr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.steamid || i.Sg(yr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
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
          static toObject(r, t) {
            return i.BT(yr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new yr();
            return yr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(yr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(yr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPurchasedProfileCustomizations_Request";
          }
        }
        class Rr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rr.prototype.purchased_customizations || i.Sg(Rr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    purchased_customizations: { n: 1, c: Gr, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(Rr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Rr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Rr();
            return Rr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Rr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Rr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPurchasedProfileCustomizations_Response";
          }
        }
        class Gr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gr.prototype.purchaseid || i.Sg(Gr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    purchaseid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    customization_type: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
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
          static toObject(r, t) {
            return i.BT(Gr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Gr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Gr();
            return Gr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Gr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Gr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
          }
        }
        class Cr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.steamid || i.Sg(Cr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
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
          static toObject(r, t) {
            return i.BT(Cr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Cr();
            return Cr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Cr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Cr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
          }
        }
        class Pr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.purchased_customizations || i.Sg(Pr.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: {
                    purchased_customizations: { n: 1, c: _r, r: !0, q: !0 },
                    upgraded_customizations: { n: 2, c: ri, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(Pr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Pr();
            return Pr.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Pr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Pr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
          }
        }
        class _r extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.customization_type || i.Sg(_r.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    customization_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    count: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(_r.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new _r();
            return _r.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(_r.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(_r.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
          }
        }
        class ri extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ri.prototype.customization_type || i.Sg(ri.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ri.sm_m ||
                (ri.sm_m = {
                  proto: ri,
                  fields: {
                    customization_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    level: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              ri.sm_m
            );
          }
          static MBF() {
            return ri.sm_mbf || (ri.sm_mbf = i.w0(ri.M())), ri.sm_mbf;
          }
          toObject(r = !1) {
            return ri.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ri.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ri.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ri();
            return ri.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ri.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ri.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
          }
        }
        class Ci extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ci.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ci();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ci();
            return Ci.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetProfileThemesAvailable_Request";
          }
        }
        class ii extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ii.prototype.profile_themes || i.Sg(ii.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ii.sm_m ||
                (ii.sm_m = {
                  proto: ii,
                  fields: { profile_themes: { n: 1, c: d, r: !0, q: !0 } },
                }),
              ii.sm_m
            );
          }
          static MBF() {
            return ii.sm_mbf || (ii.sm_mbf = i.w0(ii.M())), ii.sm_mbf;
          }
          toObject(r = !1) {
            return ii.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ii.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ii.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ii();
            return ii.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ii.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ii.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetProfileThemesAvailable_Response";
          }
        }
        class ti extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ti.prototype.theme_id || i.Sg(ti.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ti.sm_m ||
                (ti.sm_m = {
                  proto: ti,
                  fields: {
                    theme_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ti.sm_m
            );
          }
          static MBF() {
            return ti.sm_mbf || (ti.sm_mbf = i.w0(ti.M())), ti.sm_mbf;
          }
          toObject(r = !1) {
            return ti.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ti.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ti.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ti();
            return ti.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ti.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ti.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ti.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ti.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetProfileTheme_Request";
          }
        }
        class Pi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Pi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Pi();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Pi();
            return Pi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Pi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Pi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetProfileTheme_Response";
          }
        }
        class ni extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ni.prototype.profile_preferences || i.Sg(ni.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ni.sm_m ||
                (ni.sm_m = {
                  proto: ni,
                  fields: { profile_preferences: { n: 1, c: O } },
                }),
              ni.sm_m
            );
          }
          static MBF() {
            return ni.sm_mbf || (ni.sm_mbf = i.w0(ni.M())), ni.sm_mbf;
          }
          toObject(r = !1) {
            return ni.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ni.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ni.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ni();
            return ni.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ni.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ni.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetProfilePreferences_Request";
          }
        }
        class _i extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return _i.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new _i();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new _i();
            return _i.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return _i.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              _i.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetProfilePreferences_Response";
          }
        }
        class ai extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ai.prototype.appid || i.Sg(ai.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ai.sm_m ||
                (ai.sm_m = {
                  proto: ai,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              ai.sm_m
            );
          }
          static MBF() {
            return ai.sm_mbf || (ai.sm_mbf = i.w0(ai.M())), ai.sm_mbf;
          }
          toObject(r = !1) {
            return ai.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ai.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ai.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ai();
            return ai.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ai.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ai.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetFriendsGameplayInfo_Request";
          }
        }
        class Bi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Bi.prototype.your_info || i.Sg(Bi.M()),
              a.Message.initialize(this, r, 0, -1, [2, 3, 4, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bi.sm_m ||
                (Bi.sm_m = {
                  proto: Bi,
                  fields: {
                    your_info: { n: 1, c: bi },
                    in_game: { n: 2, c: m, r: !0, q: !0 },
                    played_recently: { n: 3, c: m, r: !0, q: !0 },
                    played_ever: { n: 4, c: m, r: !0, q: !0 },
                    owns: { n: 5, c: m, r: !0, q: !0 },
                    in_wishlist: { n: 6, c: m, r: !0, q: !0 },
                  },
                }),
              Bi.sm_m
            );
          }
          static MBF() {
            return Bi.sm_mbf || (Bi.sm_mbf = i.w0(Bi.M())), Bi.sm_mbf;
          }
          toObject(r = !1) {
            return Bi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Bi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Bi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Bi();
            return Bi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Bi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Bi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetFriendsGameplayInfo_Response";
          }
        }
        class m extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.steamid || i.Sg(m.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    minutes_played: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    minutes_played_forever: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
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
          static toObject(r, t) {
            return i.BT(m.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new m();
            return m.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(m.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(m.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
          }
        }
        class bi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              bi.prototype.steamid || i.Sg(bi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bi.sm_m ||
                (bi.sm_m = {
                  proto: bi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    minutes_played: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    minutes_played_forever: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    in_wishlist: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    owned: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              bi.sm_m
            );
          }
          static MBF() {
            return bi.sm_mbf || (bi.sm_mbf = i.w0(bi.M())), bi.sm_mbf;
          }
          toObject(r = !1) {
            return bi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(bi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(bi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new bi();
            return bi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(bi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(bi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
          }
        }
        class rt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return rt.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new rt();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new rt();
            return rt.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetTimeSSAAccepted_Request";
          }
        }
        class si extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              si.prototype.time_ssa_accepted || i.Sg(si.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              si.sm_m ||
                (si.sm_m = {
                  proto: si,
                  fields: {
                    time_ssa_accepted: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_ssa_updated: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_chinassa_accepted: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              si.sm_m
            );
          }
          static MBF() {
            return si.sm_mbf || (si.sm_mbf = i.w0(si.M())), si.sm_mbf;
          }
          toObject(r = !1) {
            return si.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(si.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(si.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new si();
            return si.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(si.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return si.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(si.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetTimeSSAAccepted_Response";
          }
        }
        class Mi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mi.prototype.agreement_type || i.Sg(Mi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mi.sm_m ||
                (Mi.sm_m = {
                  proto: Mi,
                  fields: {
                    agreement_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    time_signed_utc: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Mi.sm_m
            );
          }
          static MBF() {
            return Mi.sm_mbf || (Mi.sm_mbf = i.w0(Mi.M())), Mi.sm_mbf;
          }
          toObject(r = !1) {
            return Mi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Mi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Mi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Mi();
            return Mi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Mi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Mi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_AcceptSSA_Request";
          }
        }
        class it extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return it.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new it();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new it();
            return it.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return it.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_AcceptSSA_Response";
          }
        }
        class Ei extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ei.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ei();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ei();
            return Ei.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ei.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ei.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetNicknameList_Request";
          }
        }
        class wi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wi.prototype.nicknames || i.Sg(wi.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wi.sm_m ||
                (wi.sm_m = {
                  proto: wi,
                  fields: { nicknames: { n: 1, c: ci, r: !0, q: !0 } },
                }),
              wi.sm_m
            );
          }
          static MBF() {
            return wi.sm_mbf || (wi.sm_mbf = i.w0(wi.M())), wi.sm_mbf;
          }
          toObject(r = !1) {
            return wi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(wi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(wi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new wi();
            return wi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(wi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return wi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(wi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              wi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetNicknameList_Response";
          }
        }
        class ci extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ci.prototype.accountid || i.Sg(ci.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ci.sm_m ||
                (ci.sm_m = {
                  proto: ci,
                  fields: {
                    accountid: {
                      n: 1,
                      br: i.qM.readFixed32,
                      bw: i.gp.writeFixed32,
                    },
                    nickname: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ci.sm_m
            );
          }
          static MBF() {
            return ci.sm_mbf || (ci.sm_mbf = i.w0(ci.M())), ci.sm_mbf;
          }
          toObject(r = !1) {
            return ci.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ci.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ci.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ci();
            return ci.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ci.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ci.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetNicknameList_Response_PlayerNickname";
          }
        }
        class u extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.accountid || i.Sg(u.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    accountid: {
                      n: 1,
                      br: i.qM.readFixed32,
                      bw: i.gp.writeFixed32,
                    },
                    nickname: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    notifications_showingame: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    notifications_showonline: {
                      n: 4,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    notifications_showmessages: {
                      n: 5,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    sounds_showingame: {
                      n: 6,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    sounds_showonline: {
                      n: 7,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    sounds_showmessages: {
                      n: 8,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    notifications_sendmobile: {
                      n: 9,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
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
          static toObject(r, t) {
            return i.BT(u.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new u();
            return u.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(u.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(u.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "PerFriendPreferences";
          }
        }
        class tt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return tt.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new tt();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new tt();
            return tt.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPerFriendPreferences_Request";
          }
        }
        class gi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gi.prototype.preferences || i.Sg(gi.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gi.sm_m ||
                (gi.sm_m = {
                  proto: gi,
                  fields: { preferences: { n: 1, c: u, r: !0, q: !0 } },
                }),
              gi.sm_m
            );
          }
          static MBF() {
            return gi.sm_mbf || (gi.sm_mbf = i.w0(gi.M())), gi.sm_mbf;
          }
          toObject(r = !1) {
            return gi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(gi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(gi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new gi();
            return gi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(gi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(gi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPerFriendPreferences_Response";
          }
        }
        class mi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mi.prototype.preferences || i.Sg(mi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mi.sm_m ||
                (mi.sm_m = {
                  proto: mi,
                  fields: { preferences: { n: 1, c: u } },
                }),
              mi.sm_m
            );
          }
          static MBF() {
            return mi.sm_mbf || (mi.sm_mbf = i.w0(mi.M())), mi.sm_mbf;
          }
          toObject(r = !1) {
            return mi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(mi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(mi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new mi();
            return mi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(mi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(mi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetPerFriendPreferences_Request";
          }
        }
        class nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return nt.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new nt();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new nt();
            return nt.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetPerFriendPreferences_Response";
          }
        }
        class zi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zi.prototype.steamid || i.Sg(zi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zi.sm_m ||
                (zi.sm_m = {
                  proto: zi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              zi.sm_m
            );
          }
          static MBF() {
            return zi.sm_mbf || (zi.sm_mbf = i.w0(zi.M())), zi.sm_mbf;
          }
          toObject(r = !1) {
            return zi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(zi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(zi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new zi();
            return zi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(zi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(zi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              zi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_AddFriend_Request";
          }
        }
        class ui extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ui.prototype.invite_sent || i.Sg(ui.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ui.sm_m ||
                (ui.sm_m = {
                  proto: ui,
                  fields: {
                    invite_sent: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    friend_relationship: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    result: { n: 3, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                  },
                }),
              ui.sm_m
            );
          }
          static MBF() {
            return ui.sm_mbf || (ui.sm_mbf = i.w0(ui.M())), ui.sm_mbf;
          }
          toObject(r = !1) {
            return ui.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ui.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ui.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ui();
            return ui.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ui.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ui.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_AddFriend_Response";
          }
        }
        class fi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fi.prototype.steamid || i.Sg(fi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fi.sm_m ||
                (fi.sm_m = {
                  proto: fi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              fi.sm_m
            );
          }
          static MBF() {
            return fi.sm_mbf || (fi.sm_mbf = i.w0(fi.M())), fi.sm_mbf;
          }
          toObject(r = !1) {
            return fi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(fi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(fi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new fi();
            return fi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(fi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(fi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_RemoveFriend_Request";
          }
        }
        class ji extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ji.prototype.friend_relationship || i.Sg(ji.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ji.sm_m ||
                (ji.sm_m = {
                  proto: ji,
                  fields: {
                    friend_relationship: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ji.sm_m
            );
          }
          static MBF() {
            return ji.sm_mbf || (ji.sm_mbf = i.w0(ji.M())), ji.sm_mbf;
          }
          toObject(r = !1) {
            return ji.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ji.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ji.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new ji();
            return ji.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ji.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ji.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ji.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ji.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_RemoveFriend_Response";
          }
        }
        class Wi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wi.prototype.steamid || i.Sg(Wi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wi.sm_m ||
                (Wi.sm_m = {
                  proto: Wi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    unignore: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Wi.sm_m
            );
          }
          static MBF() {
            return Wi.sm_mbf || (Wi.sm_mbf = i.w0(Wi.M())), Wi.sm_mbf;
          }
          toObject(r = !1) {
            return Wi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Wi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Wi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Wi();
            return Wi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Wi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Wi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Wi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Wi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_IgnoreFriend_Request";
          }
        }
        class di extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              di.prototype.friend_relationship || i.Sg(di.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              di.sm_m ||
                (di.sm_m = {
                  proto: di,
                  fields: {
                    friend_relationship: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              di.sm_m
            );
          }
          static MBF() {
            return di.sm_mbf || (di.sm_mbf = i.w0(di.M())), di.sm_mbf;
          }
          toObject(r = !1) {
            return di.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(di.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(di.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new di();
            return di.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(di.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return di.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(di.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              di.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_IgnoreFriend_Response";
          }
        }
        class z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.parenthesize_nicknames || i.Sg(z.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    parenthesize_nicknames: {
                      n: 4,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    text_filter_setting: {
                      n: 5,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    text_filter_ignore_friends: {
                      n: 6,
                      d: !0,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    text_filter_words_revision: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    timestamp_updated: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, t) {
            return i.BT(z.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new z();
            return z.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(z.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(z.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_CommunityPreferences";
          }
        }
        class Ni extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ni.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ni();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ni();
            return Ni.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ni.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetCommunityPreferences_Request";
          }
        }
        class Oi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Oi.prototype.preferences || i.Sg(Oi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oi.sm_m ||
                (Oi.sm_m = {
                  proto: Oi,
                  fields: {
                    preferences: { n: 1, c: z },
                    content_descriptor_preferences: { n: 2, c: ct.u2 },
                  },
                }),
              Oi.sm_m
            );
          }
          static MBF() {
            return Oi.sm_mbf || (Oi.sm_mbf = i.w0(Oi.M())), Oi.sm_mbf;
          }
          toObject(r = !1) {
            return Oi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Oi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Oi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Oi();
            return Oi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Oi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Oi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetCommunityPreferences_Response";
          }
        }
        class Ti extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ti.prototype.preferences || i.Sg(Ti.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ti.sm_m ||
                (Ti.sm_m = {
                  proto: Ti,
                  fields: { preferences: { n: 1, c: z } },
                }),
              Ti.sm_m
            );
          }
          static MBF() {
            return Ti.sm_mbf || (Ti.sm_mbf = i.w0(Ti.M())), Ti.sm_mbf;
          }
          toObject(r = !1) {
            return Ti.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ti.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ti.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ti();
            return Ti.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ti.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ti.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ti.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ti.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetCommunityPreferences_Request";
          }
        }
        class at extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return at.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new at();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new at();
            return at.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return at.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_SetCommunityPreferences_Response";
          }
        }
        class f extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.text_filter_custom_banned_words || i.Sg(f.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    text_filter_custom_banned_words: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    text_filter_custom_clean_words: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    text_filter_words_revision: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = i.w0(f.M())), f.sm_mbf;
          }
          toObject(r = !1) {
            return f.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(f.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(f.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new f();
            return f.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(f.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return f.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(f.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_TextFilterWords";
          }
        }
        class li extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return li.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new li();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new li();
            return li.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return li.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetTextFilterWords_Request";
          }
        }
        class Ui extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ui.prototype.words || i.Sg(Ui.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ui.sm_m ||
                (Ui.sm_m = { proto: Ui, fields: { words: { n: 1, c: f } } }),
              Ui.sm_m
            );
          }
          static MBF() {
            return Ui.sm_mbf || (Ui.sm_mbf = i.w0(Ui.M())), Ui.sm_mbf;
          }
          toObject(r = !1) {
            return Ui.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ui.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ui.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ui();
            return Ui.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ui.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ui.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetTextFilterWords_Response";
          }
        }
        class xi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xi.prototype.language || i.Sg(xi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xi.sm_m ||
                (xi.sm_m = {
                  proto: xi,
                  fields: {
                    language: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                  },
                }),
              xi.sm_m
            );
          }
          static MBF() {
            return xi.sm_mbf || (xi.sm_mbf = i.w0(xi.M())), xi.sm_mbf;
          }
          toObject(r = !1) {
            return xi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(xi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(xi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new xi();
            return xi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(xi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return xi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(xi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              xi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetNewSteamAnnouncementState_Request";
          }
        }
        class Ii extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ii.prototype.state || i.Sg(Ii.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ii.sm_m ||
                (Ii.sm_m = {
                  proto: Ii,
                  fields: {
                    state: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    announcement_headline: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    announcement_url: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    time_posted: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    announcement_gid: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ii.sm_m
            );
          }
          static MBF() {
            return Ii.sm_mbf || (Ii.sm_mbf = i.w0(Ii.M())), Ii.sm_mbf;
          }
          toObject(r = !1) {
            return Ii.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ii.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ii.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ii();
            return Ii.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ii.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ii.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetNewSteamAnnouncementState_Response";
          }
        }
        class Si extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Si.prototype.announcement_gid || i.Sg(Si.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Si.sm_m ||
                (Si.sm_m = {
                  proto: Si,
                  fields: {
                    announcement_gid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_posted: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Si.sm_m
            );
          }
          static MBF() {
            return Si.sm_mbf || (Si.sm_mbf = i.w0(Si.M())), Si.sm_mbf;
          }
          toObject(r = !1) {
            return Si.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Si.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Si.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Si();
            return Si.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Si.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Si.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Si.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Si.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
          }
        }
        class Bt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Bt.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Bt();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Bt();
            return Bt.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
          }
        }
        class T extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.privacy_state || i.Sg(T.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    privacy_state: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    privacy_state_inventory: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    privacy_state_gifts: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    privacy_state_ownedgames: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    privacy_state_playtime: {
                      n: 5,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    privacy_state_friendslist: {
                      n: 6,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
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
          static toObject(r, t) {
            return i.BT(T.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new T();
            return T.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(T.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(T.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPrivacySettings";
          }
        }
        class bt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return bt.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new bt();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new bt();
            return bt.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPrivacySettings_Request";
          }
        }
        class $i extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $i.prototype.privacy_settings || i.Sg($i.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $i.sm_m ||
                ($i.sm_m = {
                  proto: $i,
                  fields: { privacy_settings: { n: 1, c: T } },
                }),
              $i.sm_m
            );
          }
          static MBF() {
            return $i.sm_mbf || ($i.sm_mbf = i.w0($i.M())), $i.sm_mbf;
          }
          toObject(r = !1) {
            return $i.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT($i.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq($i.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new $i();
            return $i.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj($i.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return $i.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0($i.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              $i.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetPrivacySettings_Response";
          }
        }
        class Vi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vi.prototype.appid || i.Sg(Vi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vi.sm_m ||
                (Vi.sm_m = {
                  proto: Vi,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Vi.sm_m
            );
          }
          static MBF() {
            return Vi.sm_mbf || (Vi.sm_mbf = i.w0(Vi.M())), Vi.sm_mbf;
          }
          toObject(r = !1) {
            return Vi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Vi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Vi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Vi();
            return Vi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Vi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Vi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Vi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Vi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetDurationControl_Request";
          }
        }
        class Ji extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ji.prototype.is_enabled || i.Sg(Ji.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ji.sm_m ||
                (Ji.sm_m = {
                  proto: Ji,
                  fields: {
                    is_enabled: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                    seconds: { n: 2, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    seconds_today: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    is_steamchina_account: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    is_age_verified: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    seconds_allowed_today: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    age_verification_pending: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    block_minors: {
                      n: 8,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Ji.sm_m
            );
          }
          static MBF() {
            return Ji.sm_mbf || (Ji.sm_mbf = i.w0(Ji.M())), Ji.sm_mbf;
          }
          toObject(r = !1) {
            return Ji.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ji.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ji.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ji();
            return Ji.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ji.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ji.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ji.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ji.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_GetDurationControl_Response";
          }
        }
        class Xi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xi.prototype.games || i.Sg(Xi.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xi.sm_m ||
                (Xi.sm_m = {
                  proto: Xi,
                  fields: { games: { n: 1, c: j, r: !0, q: !0 } },
                }),
              Xi.sm_m
            );
          }
          static MBF() {
            return Xi.sm_mbf || (Xi.sm_mbf = i.w0(Xi.M())), Xi.sm_mbf;
          }
          toObject(r = !1) {
            return Xi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Xi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Xi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Xi();
            return Xi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Xi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Xi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Xi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Xi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_LastPlayedTimes_Notification";
          }
        }
        class Yi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yi.prototype.accountid || i.Sg(Yi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yi.sm_m ||
                (Yi.sm_m = {
                  proto: Yi,
                  fields: {
                    accountid: {
                      n: 1,
                      br: i.qM.readFixed32,
                      bw: i.gp.writeFixed32,
                    },
                    nickname: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    is_echo_to_self: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Yi.sm_m
            );
          }
          static MBF() {
            return Yi.sm_mbf || (Yi.sm_mbf = i.w0(Yi.M())), Yi.sm_mbf;
          }
          toObject(r = !1) {
            return Yi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Yi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Yi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Yi();
            return Yi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Yi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Yi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Yi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Yi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_FriendNicknameChanged_Notification";
          }
        }
        class Zi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zi.prototype.accountid || i.Sg(Zi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zi.sm_m ||
                (Zi.sm_m = {
                  proto: Zi,
                  fields: {
                    accountid: {
                      n: 1,
                      br: i.qM.readFixed32,
                      bw: i.gp.writeFixed32,
                    },
                  },
                }),
              Zi.sm_m
            );
          }
          static MBF() {
            return Zi.sm_mbf || (Zi.sm_mbf = i.w0(Zi.M())), Zi.sm_mbf;
          }
          toObject(r = !1) {
            return Zi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Zi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Zi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Zi();
            return Zi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Zi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Zi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Zi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
          }
        }
        class Hi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hi.prototype.state || i.Sg(Hi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hi.sm_m ||
                (Hi.sm_m = {
                  proto: Hi,
                  fields: {
                    state: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    announcement_headline: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    announcement_url: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    time_posted: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    announcement_gid: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Hi.sm_m
            );
          }
          static MBF() {
            return Hi.sm_mbf || (Hi.sm_mbf = i.w0(Hi.M())), Hi.sm_mbf;
          }
          toObject(r = !1) {
            return Hi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Hi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Hi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Hi();
            return Hi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Hi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Hi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Hi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Hi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_NewSteamAnnouncementState_Notification";
          }
        }
        class hi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hi.prototype.preferences || i.Sg(hi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hi.sm_m ||
                (hi.sm_m = {
                  proto: hi,
                  fields: {
                    preferences: { n: 1, c: z },
                    content_descriptor_preferences: { n: 2, c: ct.u2 },
                  },
                }),
              hi.sm_m
            );
          }
          static MBF() {
            return hi.sm_mbf || (hi.sm_mbf = i.w0(hi.M())), hi.sm_mbf;
          }
          toObject(r = !1) {
            return hi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(hi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(hi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new hi();
            return hi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(hi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return hi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(hi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              hi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_CommunityPreferencesChanged_Notification";
          }
        }
        class Fi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fi.prototype.words || i.Sg(Fi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fi.sm_m ||
                (Fi.sm_m = { proto: Fi, fields: { words: { n: 1, c: f } } }),
              Fi.sm_m
            );
          }
          static MBF() {
            return Fi.sm_mbf || (Fi.sm_mbf = i.w0(Fi.M())), Fi.sm_mbf;
          }
          toObject(r = !1) {
            return Fi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Fi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Fi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Fi();
            return Fi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Fi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Fi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_TextFilterWordsChanged_Notification";
          }
        }
        class Qi extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qi.prototype.accountid || i.Sg(Qi.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qi.sm_m ||
                (Qi.sm_m = {
                  proto: Qi,
                  fields: {
                    accountid: {
                      n: 1,
                      br: i.qM.readFixed32,
                      bw: i.gp.writeFixed32,
                    },
                    preferences: { n: 2, c: u },
                  },
                }),
              Qi.sm_m
            );
          }
          static MBF() {
            return Qi.sm_mbf || (Qi.sm_mbf = i.w0(Qi.M())), Qi.sm_mbf;
          }
          toObject(r = !1) {
            return Qi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Qi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Qi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Qi();
            return Qi.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Qi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Qi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Qi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Qi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_PerFriendPreferencesChanged_Notification";
          }
        }
        class Ki extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ki.prototype.privacy_settings || i.Sg(Ki.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ki.sm_m ||
                (Ki.sm_m = {
                  proto: Ki,
                  fields: { privacy_settings: { n: 1, c: T } },
                }),
              Ki.sm_m
            );
          }
          static MBF() {
            return Ki.sm_mbf || (Ki.sm_mbf = i.w0(Ki.M())), Ki.sm_mbf;
          }
          toObject(r = !1) {
            return Ki.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ki.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ki.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              B = new Ki();
            return Ki.deserializeBinaryFromReader(B, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ki.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ki.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ki.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ki.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlayer_PrivacySettingsChanged_Notification";
          }
        }
        var wt;
        ((w) => {
          function r(b, s, M) {
            return b.SendMsg(
              "Player.GetRecentPlaytimeSessionsForChild#1",
              (0, c.I8)(U, s, M),
              x,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetRecentPlaytimeSessionsForChild = r;
          function t(b, s, M) {
            return b.SendMsg(
              "Player.GetPlayerLinkDetails#1",
              (0, c.I8)(V, s, M),
              J,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetPlayerLinkDetails = t;
          function B(b, s, M) {
            return b.SendMsg(
              "Player.GetMutualFriendsForIncomingInvites#1",
              (0, c.I8)(vi, s, M),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetMutualFriendsForIncomingInvites = B;
          function jt(b, s, M) {
            return b.SendMsg("Player.GetOwnedGames#1", (0, c.I8)(F, s, M), Q, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          w.GetOwnedGames = jt;
          function Wt(b, s, M) {
            return b.SendMsg("Player.GetPlayNext#1", (0, c.I8)(E, s, M), N, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }
          w.GetPlayNext = Wt;
          function dt(b, s, M) {
            return b.SendMsg(
              "Player.GetFriendsGameplayInfo#1",
              (0, c.I8)(ai, s, M),
              Bi,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetFriendsGameplayInfo = dt;
          function Ot(b, s, M) {
            return b.SendMsg(
              "Player.GetGameBadgeLevels#1",
              (0, c.I8)(D, s, M),
              p,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetGameBadgeLevels = Ot;
          function Tt(b, s, M) {
            return b.SendMsg(
              "Player.GetProfileBackground#1",
              (0, c.I8)(q, s, M),
              e,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetProfileBackground = Tt;
          function Ut(b, s, M) {
            return b.SendMsg(
              "Player.SetProfileBackground#1",
              (0, c.I8)(A, s, M),
              pi,
              { ePrivilege: 1 },
            );
          }
          w.SetProfileBackground = Ut;
          function xt(b, s, M) {
            return b.SendMsg(
              "Player.GetMiniProfileBackground#1",
              (0, c.I8)(o, s, M),
              y,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetMiniProfileBackground = xt;
          function It(b, s, M) {
            return b.SendMsg(
              "Player.SetMiniProfileBackground#1",
              (0, c.I8)(R, s, M),
              ki,
              { ePrivilege: 1 },
            );
          }
          w.SetMiniProfileBackground = It;
          function St(b, s, M) {
            return b.SendMsg("Player.GetAvatarFrame#1", (0, c.I8)(G, s, M), C, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          w.GetAvatarFrame = St;
          function $t(b, s, M) {
            return b.SendMsg(
              "Player.SetAvatarFrame#1",
              (0, c.I8)(P, s, M),
              Li,
              { ePrivilege: 1 },
            );
          }
          w.SetAvatarFrame = $t;
          function Vt(b, s, M) {
            return b.SendMsg(
              "Player.GetAnimatedAvatar#1",
              (0, c.I8)(_, s, M),
              rr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetAnimatedAvatar = Vt;
          function Jt(b, s, M) {
            return b.SendMsg(
              "Player.SetAnimatedAvatar#1",
              (0, c.I8)(ir, s, M),
              qi,
              { ePrivilege: 1 },
            );
          }
          w.SetAnimatedAvatar = Jt;
          function Xt(b, s, M) {
            return b.SendMsg(
              "Player.GetSteamDeckKeyboardSkin#1",
              (0, c.I8)(tr, s, M),
              nr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetSteamDeckKeyboardSkin = Xt;
          function Yt(b, s, M) {
            return b.SendMsg(
              "Player.SetSteamDeckKeyboardSkin#1",
              (0, c.I8)(ar, s, M),
              ei,
              { ePrivilege: 1 },
            );
          }
          w.SetSteamDeckKeyboardSkin = Yt;
          function Zt(b, s, M) {
            return b.SendMsg(
              "Player.GetProfileItemsOwned#1",
              (0, c.I8)(Br, s, M),
              br,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetProfileItemsOwned = Zt;
          function Ht(b, s, M) {
            return b.SendMsg(
              "Player.GetProfileItemsEquipped#1",
              (0, c.I8)(sr, s, M),
              Mr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetProfileItemsEquipped = Ht;
          function ht(b, s, M) {
            return b.SendMsg(
              "Player.SetEquippedProfileItemFlags#1",
              (0, c.I8)(wr, s, M),
              Ai,
              { ePrivilege: 1 },
            );
          }
          w.SetEquippedProfileItemFlags = ht;
          function Ft(b, s, M) {
            return b.SendMsg(
              "Player.GetEmoticonList#1",
              (0, c.I8)(oi, s, M),
              cr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetEmoticonList = Ft;
          function Qt(b, s, M) {
            return b.SendMsg(
              "Player.GetCommunityBadgeProgress#1",
              (0, c.I8)(mr, s, M),
              zr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetCommunityBadgeProgress = Qt;
          function Kt(b, s, M) {
            return b.SendMsg(
              "Player.GetTopAchievementsForGames#1",
              (0, c.I8)(dr, s, M),
              Or,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetTopAchievementsForGames = Kt;
          function Et(b, s, M) {
            return b.SendMsg(
              "Player.GetAchievementsProgress#1",
              (0, c.I8)(Vr, s, M),
              Jr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetAchievementsProgress = Et;
          function Nt(b, s, M) {
            return b.SendMsg(
              "Player.GetGameAchievements#1",
              (0, c.I8)(Yr, s, M),
              Zr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetGameAchievements = Nt;
          function lt(b, s, M) {
            return b.SendMsg(
              "Player.GetUserAchievements#1",
              (0, c.I8)(Fr, s, M),
              Qr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetUserAchievements = lt;
          function vt(b, s, M) {
            return b.SendMsg(
              "Player.GetGlobalAchievementPercentages#1",
              (0, c.I8)(Nr, s, M),
              lr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetGlobalAchievementPercentages = vt;
          function Dt(b, s, M) {
            return b.SendMsg("Player.GetUserStats#1", (0, c.I8)(xr, s, M), Ir, {
              bConstMethod: !0,
              ePrivilege: 2,
            });
          }
          w.GetUserStats = Dt;
          function pt(b, s, M) {
            return b.SendMsg(
              "Player.GetFavoriteBadge#1",
              (0, c.I8)(Dr, s, M),
              pr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetFavoriteBadge = pt;
          function kt(b, s, M) {
            return b.SendMsg(
              "Player.SetFavoriteBadge#1",
              (0, c.I8)(kr, s, M),
              Gi,
              { ePrivilege: 1 },
            );
          }
          w.SetFavoriteBadge = kt;
          function Lt(b, s, M) {
            return b.SendMsg(
              "Player.GetProfileCustomization#1",
              (0, c.I8)(er, s, M),
              Ar,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetProfileCustomization = Lt;
          function qt(b, s, M) {
            return b.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              (0, c.I8)(yr, s, M),
              Rr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetPurchasedProfileCustomizations = qt;
          function et(b, s, M) {
            return b.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              (0, c.I8)(Cr, s, M),
              Pr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetPurchasedAndUpgradedProfileCustomizations = et;
          function At(b, s, M) {
            return b.SendMsg(
              "Player.GetProfileThemesAvailable#1",
              (0, c.I8)(Ci, s, M),
              ii,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetProfileThemesAvailable = At;
          function ot(b, s, M) {
            return b.SendMsg(
              "Player.SetProfileTheme#1",
              (0, c.I8)(ti, s, M),
              Pi,
              { ePrivilege: 1 },
            );
          }
          w.SetProfileTheme = ot;
          function yt(b, s, M) {
            return b.SendMsg(
              "Player.SetProfilePreferences#1",
              (0, c.I8)(ni, s, M),
              _i,
              { ePrivilege: 1 },
            );
          }
          w.SetProfilePreferences = yt;
          function Rt(b, s, M) {
            return b.SendMsg(
              "Player.PostStatusToFriends#1",
              (0, c.I8)(W, s, M),
              yi,
              { ePrivilege: 3 },
            );
          }
          w.PostStatusToFriends = Rt;
          function Gt(b, s, M) {
            return b.SendMsg(
              "Player.GetPostedStatus#1",
              (0, c.I8)(fr, s, M),
              jr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetPostedStatus = Gt;
          function Ct(b, s, M) {
            return b.SendMsg(
              "Player.DeletePostedStatus#1",
              (0, c.I8)(Wr, s, M),
              Ri,
              { ePrivilege: 1 },
            );
          }
          w.DeletePostedStatus = Ct;
          function Pt(b, s, M) {
            return b.SendMsg(
              "Player.ClientGetLastPlayedTimes#1",
              (0, c.I8)(S, s, M),
              $,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          w.ClientGetLastPlayedTimes = Pt;
          function _t(b, s, M) {
            return b.SendMsg(
              "Player.GetTimeSSAAccepted#1",
              (0, c.I8)(rt, s, M),
              si,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetTimeSSAAccepted = _t;
          function rn(b, s, M) {
            return b.SendMsg("Player.AcceptSSA#1", (0, c.I8)(Mi, s, M), it, {
              ePrivilege: 1,
            });
          }
          w.AcceptSSA = rn;
          function tn(b, s, M) {
            return b.SendMsg(
              "Player.GetNicknameList#1",
              (0, c.I8)(Ei, s, M),
              wi,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetNicknameList = tn;
          function nn(b, s, M) {
            return b.SendMsg(
              "Player.GetPerFriendPreferences#1",
              (0, c.I8)(tt, s, M),
              gi,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetPerFriendPreferences = nn;
          function an(b, s, M) {
            return b.SendMsg(
              "Player.SetPerFriendPreferences#1",
              (0, c.I8)(mi, s, M),
              nt,
              { ePrivilege: 1 },
            );
          }
          w.SetPerFriendPreferences = an;
          function Bn(b, s, M) {
            return b.SendMsg("Player.AddFriend#1", (0, c.I8)(zi, s, M), ui, {
              ePrivilege: 1,
            });
          }
          w.AddFriend = Bn;
          function bn(b, s, M) {
            return b.SendMsg("Player.RemoveFriend#1", (0, c.I8)(fi, s, M), ji, {
              ePrivilege: 1,
            });
          }
          w.RemoveFriend = bn;
          function sn(b, s, M) {
            return b.SendMsg("Player.IgnoreFriend#1", (0, c.I8)(Wi, s, M), di, {
              ePrivilege: 1,
            });
          }
          w.IgnoreFriend = sn;
          function Mn(b, s, M) {
            return b.SendMsg(
              "Player.GetCommunityPreferences#1",
              (0, c.I8)(Ni, s, M),
              Oi,
              { ePrivilege: 1 },
            );
          }
          w.GetCommunityPreferences = Mn;
          function wn(b, s, M) {
            return b.SendMsg(
              "Player.SetCommunityPreferences#1",
              (0, c.I8)(Ti, s, M),
              at,
              { ePrivilege: 1 },
            );
          }
          w.SetCommunityPreferences = wn;
          function cn(b, s, M) {
            return b.SendMsg(
              "Player.GetTextFilterWords#1",
              (0, c.I8)(li, s, M),
              Ui,
              { ePrivilege: 1 },
            );
          }
          w.GetTextFilterWords = cn;
          function gn(b, s, M) {
            return b.SendMsg(
              "Player.GetNewSteamAnnouncementState#1",
              (0, c.I8)(xi, s, M),
              Ii,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetNewSteamAnnouncementState = gn;
          function mn(b, s, M) {
            return b.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              (0, c.I8)(Si, s, M),
              Bt,
              { ePrivilege: 1 },
            );
          }
          w.UpdateSteamAnnouncementLastRead = mn;
          function zn(b, s, M) {
            return b.SendMsg(
              "Player.GetPrivacySettings#1",
              (0, c.I8)(bt, s, M),
              $i,
              { ePrivilege: 1 },
            );
          }
          w.GetPrivacySettings = zn;
          function un(b, s, M) {
            return b.SendMsg(
              "Player.GetDurationControl#1",
              (0, c.I8)(Vi, s, M),
              Ji,
              { ePrivilege: 1 },
            );
          }
          w.GetDurationControl = un;
          function fn(b, s, M) {
            return b.SendMsg(
              "Player.RecordDisconnectedPlaytime#1",
              (0, c.I8)(l, s, M),
              Di,
              { ePrivilege: 1 },
            );
          }
          w.RecordDisconnectedPlaytime = fn;
        })(wt || (wt = {}));
        var gt;
        ((w) => {
          (w.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: Xi,
          }),
            (w.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: Yi,
            }),
            (w.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: Zi,
            }),
            (w.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: Hi,
            }),
            (w.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: hi,
            }),
            (w.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: Fi,
            }),
            (w.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: Qi,
            }),
            (w.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: Ki,
            });
        })(gt || (gt = {}));
      },
    },
  ]);
})();
