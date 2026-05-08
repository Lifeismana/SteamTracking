(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [7462],
  {
    11995: (e) => {
      e.exports = { ClipUploadStatus: "_3rMEP_IbC30BRuQuHY6F1E" };
    },
    25025: (e) => {
      e.exports = {
        ClipDetails: "_1fyr-hKRG1lR-7oPJ_rqmG",
        VideoContainer: "_1Ml8-TqxakKRFRAYwvdq4Y",
        ClipPreview: "_3vpFgujAo8vFRf6bAtHCEO",
        Thumbnail: "_3PnGnLoEMy4dXaT5j3EWN0",
        PlayContainer: "_1Cv16KKO1tKy2jnOykai5-",
        Button: "MwGjy194NChFEI20JTHao",
      };
    },
    24709: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => d });
      var i = t(62540),
        s = t(63696),
        a = t(44926),
        n = t(91720),
        l = t(93092),
        o = t(64608),
        m = t(46108),
        c = t(11995);
      function d(e) {
        const { clipToUpload: r, finishUpload: t } = e,
          [a, m] = s.useState(!1),
          [d, g] = s.useState(),
          { fnUploadClip: B } = (0, n.Sm)(),
          [_, p] = s.useState();
        if (!r) return null;
        return (0, i.jsxs)("div", {
          className: c.ClipUploadStatus,
          children: [
            (0, i.jsx)(l.d, { clipID: r.clip_id }),
            !a &&
              (0, i.jsx)(o.$n, {
                onClick: async () => {
                  m(!0);
                  const { eResult: e, strURL: i } = await B(
                    r.clip_id,
                    "",
                    "",
                    3,
                  );
                  t(i), m(!1);
                },
                children: "Upload",
              }),
            a && (0, i.jsx)(u, { clipToUpload: r }),
          ],
        });
      }
      function u(e) {
        const { clipToUpload: r } = e,
          [t, n] = s.useState(),
          [l, o] = s.useState();
        s.useEffect(
          () =>
            a.xM.RegisterForNotifyUploadProgress(
              (e) => (
                void 0 === e.Body().eresult()
                  ? n(100 * e.Body().progress())
                  : n(void 0),
                1
              ),
            ).unregister,
          [],
        );
        let c = (0, m.we)("#Chat_Uploading", r.clip_id),
          d = { width: t + "%" };
        return (0, i.jsxs)("div", {
          className: "chatFileUploadProgressContainer",
          children: [
            (0, i.jsx)("div", {
              className: "chatFileUploadProgressName",
              children: c,
            }),
            (0, i.jsx)("div", {
              className:
                "chatFileUploadProgressBarContainer DialogProgressBar_ProgressBarContainer",
              children: (0, i.jsx)("div", {
                className: "DialogProgressBar_Value",
                style: d,
              }),
            }),
          ],
        });
      }
    },
    84512: (e, r, t) => {
      "use strict";
      t.r(r),
        t.d(r, {
          default: () => k,
          useTimelineLoaderForCommunityClip: () => L,
        });
      var i,
        s,
        a = t(62540),
        n = t(63696),
        l = t(92374),
        o = t(91720),
        m = t(68956),
        c = t(36975),
        d = t(46382),
        u = t(61416),
        g = t(58663),
        B = t.n(g),
        _ = t(48307),
        p = t(12176);
      class b extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.representation_name || _.Sg(b.M()),
            g.Message.initialize(this, e, 0, -1, [11], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  representation_name: {
                    n: 2,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  horizontal_resolution: {
                    n: 3,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  vertical_resolution: {
                    n: 4,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  frame_rate: {
                    n: 5,
                    br: _.qM.readDouble,
                    bw: _.gp.writeDouble,
                  },
                  bandwidth: {
                    n: 6,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  audio_sample_rate: {
                    n: 7,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  frame_rate_string: {
                    n: 8,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  codec: { n: 9, br: _.qM.readString, bw: _.gp.writeString },
                  audio_channel_config: {
                    n: 10,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  segment_info: { n: 11, c: f, r: !0, q: !0 },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = _.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingRepresentation";
        }
      }
      class M extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.component_name || _.Sg(M.M()),
            g.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  component_name: {
                    n: 1,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  contents: { n: 2, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  segment_size: {
                    n: 3,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  file_type: {
                    n: 4,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  representations: { n: 5, c: b, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = _.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingComponent";
        }
      }
      class y extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.steamid || _.Sg(y.M()),
            g.Message.initialize(this, e, 0, -1, [7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  steamid: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  app_id: { n: 2, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  num_segments: {
                    n: 3,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  length_milliseconds: {
                    n: 4,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  segment_duration_timescale: {
                    n: 5,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  segment_duration: {
                    n: 6,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  components: { n: 7, c: M, r: !0, q: !0 },
                  start_time_ms: {
                    n: 8,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  start_offset_in_timeline_ms: {
                    n: 9,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = _.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingDef";
        }
      }
      class f extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.segment_number || _.Sg(f.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  segment_number: {
                    n: 1,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  segment_size_bytes: {
                    n: 2,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  component_name: {
                    n: 3,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  representation_name: {
                    n: 4,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = _.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentInfo";
        }
      }
      class w extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.segment_info || _.Sg(w.M()),
            g.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  segment_info: { n: 1, c: f },
                  url_host: { n: 2, br: _.qM.readString, bw: _.gp.writeString },
                  url_path: { n: 3, br: _.qM.readString, bw: _.gp.writeString },
                  use_https: { n: 4, br: _.qM.readBool, bw: _.gp.writeBool },
                  request_headers: { n: 5, c: z, r: !0, q: !0 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = _.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo";
        }
      }
      class z extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.name || _.Sg(z.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  name: { n: 1, br: _.qM.readString, bw: _.gp.writeString },
                  value: { n: 2, br: _.qM.readString, bw: _.gp.writeString },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = _.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
        }
      }
      class S extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.video_manager_clip_id || _.Sg(S.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  video_manager_clip_id: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  video_manager_video_id: {
                    n: 2,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  server_timeline_id: {
                    n: 3,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  manifest_url: {
                    n: 4,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  duration_ms: {
                    n: 5,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  start_offset_ms: {
                    n: 6,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = _.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideoManagerClipID";
        }
      }
      class R extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.clip_id || _.Sg(R.M()),
            g.Message.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  clip_id: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  gameid: {
                    n: 2,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  date_recorded: {
                    n: 4,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  total_file_size_bytes: {
                    n: 7,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  video_ids: { n: 9, c: S, r: !0, q: !0 },
                  owner_steamid: {
                    n: 10,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  upload_complete: {
                    n: 11,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  duration_ms: {
                    n: 12,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = _.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecordingClip";
        }
      }
      class h extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.clip || _.Sg(h.M()),
            g.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  clip: { n: 2, c: R },
                  video_def: { n: 3, c: y, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = _.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Request";
        }
      }
      class j extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.clip || _.Sg(j.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m || (j.sm_m = { proto: j, fields: { clip: { n: 1, c: R } } }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = _.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Response";
        }
      }
      class U extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.clip_id || _.Sg(U.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  clip_id: {
                    n: 2,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = _.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Request";
        }
      }
      class C extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Response";
        }
      }
      class F extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.clip_id || _.Sg(F.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  clip_id: {
                    n: 2,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = _.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Request";
        }
      }
      class W extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.clip || _.Sg(W.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m || (W.sm_m = { proto: W, fields: { clip: { n: 1, c: R } } }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = _.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Response";
        }
      }
      class v extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.recording_id || _.Sg(v.M()),
            g.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  recording_id: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  segments_to_store: { n: 4, c: f, r: !0, q: !0 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = _.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Request";
        }
      }
      class T extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.segments_needed || _.Sg(T.M()),
            g.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  segments_needed: { n: 1, c: w, r: !0, q: !0 },
                  call_again: { n: 2, br: _.qM.readBool, bw: _.gp.writeBool },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = _.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Response";
        }
      }
      class q extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.recording_id || _.Sg(q.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  recording_id: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  first_segment_number: {
                    n: 4,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  num_segments: {
                    n: 5,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  upload_result: {
                    n: 6,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = _.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Request";
        }
      }
      class O extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Response";
        }
      }
      class x extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.recording_id || _.Sg(x.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  recording_id: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = _.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request";
        }
      }
      class I extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.segments_needed || _.Sg(I.M()),
            g.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { segments_needed: { n: 1, c: w, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = _.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response";
        }
      }
      class G extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.recording_id || _.Sg(G.M()),
            g.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  recording_id: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  segments_uploaded: { n: 2, c: f, r: !0, q: !0 },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = _.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return _.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return _.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return _.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          _.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingCommitSegmentUploads_Request";
        }
      }
      class N extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingCommitSegmentUploads_Response";
        }
      }
      !(function (e) {
        (e.CreateShareClip = function (e, r) {
          return e.SendMsg(
            "GameRecordingClip.CreateShareClip#1",
            (0, p.I8)(h, r),
            j,
            { ePrivilege: 1 },
          );
        }),
          (e.DeleteSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.DeleteSharedClip#1",
              (0, p.I8)(U, r),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSingleSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.GetSingleSharedClip#1",
              (0, p.I8)(F, r),
              W,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.BeginGameRecordingSegmentsUpload = function (e, r) {
            return e.SendMsg(
              "VideoClip.BeginGameRecordingSegmentsUpload#1",
              (0, p.I8)(v, r),
              T,
              { ePrivilege: 1 },
            );
          }),
            (e.CommitGameRecordingSegmentsUpload = function (e, r) {
              return e.SendMsg(
                "VideoClip.CommitGameRecordingSegmentsUpload#1",
                (0, p.I8)(q, r),
                O,
                { ePrivilege: 1 },
              );
            }),
            (e.GetNextBatchOfSegmentsToUpload = function (e, r) {
              return e.SendMsg(
                "VideoClip.GetNextBatchOfSegmentsToUpload#1",
                (0, p.I8)(x, r),
                I,
                { ePrivilege: 1 },
              );
            }),
            (e.CommitSegmentUploads = function (e, r) {
              return e.SendMsg(
                "VideoClip.CommitSegmentUploads#1",
                (0, p.I8)(G, r),
                N,
                { ePrivilege: 1 },
              );
            });
        })(s || (s = {}));
      var P = t(84629),
        V = t(25025),
        D = t(35488);
      function E(e) {
        const { clipID: r } = e,
          t = (function (e) {
            const r = (0, d.KV)();
            return (0, u.I)({
              queryKey: ["grclip", e],
              queryFn: async () => {
                const t = p.w.Init(F);
                t.Body().set_clip_id(e);
                const s = await i.GetSingleSharedClip(r, t);
                if (1 != s.GetEResult())
                  throw (
                    ((0, P.ZI)("GetSingleSharedClip failed"),
                    s.DEBUG_LogToConsole(),
                    new Error(
                      `Failed to load clip with result: ${s.GetEResult()}`,
                    ))
                  );
                let a,
                  n = s.Body().toObject().clip,
                  l = [];
                if (0 == n.video_ids.length)
                  throw (
                    ((0, P.ZI)("No video ids in clip", e),
                    s.DEBUG_LogToConsole(),
                    new Error("No video ids in clip"))
                  );
                for (let e of n.video_ids)
                  (a && a.timeline_id == e.server_timeline_id) ||
                    ((a = K(n, e)), l.push(a)),
                    a.recordings.push({
                      recording_id: e.video_manager_video_id,
                      start_offset_ms: e.start_offset_ms.toFixed(0),
                      duration_ms: e.duration_ms.toFixed(0),
                      recording_type: 4,
                      cdn_manifest_url: e.manifest_url,
                    });
                return { clip_id: n.clip_id, game_id: n.gameid, timelines: l };
              },
            });
          })(r);
        return t.data
          ? (0, a.jsx)(A, { clip: t.data, mode: l.g_.ChatClip })
          : (0, a.jsx)("div", {
              style: { color: "white" },
              children: "Loading...",
            });
      }
      const k = function (e) {
        const { previewURL: r } = e,
          [t, i] = n.useState(!1);
        return t
          ? (0, a.jsx)(E, { ...e })
          : (0, a.jsxs)("div", {
              className: V.ClipPreview,
              onClick: () => {
                i(!0);
              },
              children: [
                (0, a.jsx)("img", { className: V.Thumbnail, src: r }),
                (0, a.jsx)("div", {
                  className: V.PlayContainer,
                  children: (0, a.jsx)(D.Play, { className: V.Button }),
                }),
              ],
            });
      };
      function K(e, r) {
        return {
          timeline_id: r.server_timeline_id,
          game_id: e.clip_id,
          date_recorded: e.date_recorded,
          duration_ms: e.duration_ms.toFixed(0),
          recordings: [],
        };
      }
      function L(e) {
        const r = n.useMemo(() => (0, o.pw)(e), [e]),
          t = n.useCallback(
            (r) => {
              for (const t of e.timelines)
                for (const e of t.recordings)
                  if (e.recording_id == r) return e.cdn_manifest_url;
            },
            [e],
          );
        return (
          n.useEffect(() => () => r && r.release(), [r]),
          { loader: r.loader, fnGetManifest: t }
        );
      }
      function A(e) {
        const { clip: r, mode: t } = e,
          { loader: i, fnGetManifest: s } = L(r);
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(l.Ni, {
            loader: i,
            fnGetManifest: s,
            mode: t,
            children: (0, a.jsxs)("div", {
              className: V.ClipDetails,
              children: [
                (0, a.jsx)("div", {
                  className: V.VideoContainer,
                  children: (0, a.jsx)(m.J, {
                    positionAbsolute: !1,
                    autoPlay: t != l.g_.ChatClip,
                  }),
                }),
                (0, a.jsx)(c.h, { loader: i }),
              ],
            }),
          }),
        });
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-deckard-hotfix/build/client/steamui/sourcemaps/gamerecording.js.map
