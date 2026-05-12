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
      t.r(r), t.d(r, { default: () => g });
      var i = t(62540),
        s = t(63696),
        a = t(80026),
        n = t(91720),
        l = t(93092),
        o = t(44846),
        m = t(35198),
        c = t(64608),
        d = t(46108),
        u = t(11995);
      function g(e) {
        const { clipToUpload: r, finishUpload: t } = e,
          [a, m] = s.useState(!1),
          [d, g] = s.useState(),
          { fnUploadClip: _ } = (0, n.Sm)(),
          [p, b] = s.useState();
        if (!r) return null;
        return (0, i.jsxs)("div", {
          className: u.ClipUploadStatus,
          children: [
            (0, i.jsx)(l.d, { clipID: r.clip_id }),
            !a &&
              (0, i.jsx)(c.$n, {
                onClick: async () => {
                  m(!0);
                  const { eResult: e, strURL: i } = await _(
                    r.clip_id,
                    "",
                    "",
                    o.wY0,
                  );
                  t(i), m(!1);
                },
                children: "Upload",
              }),
            a && (0, i.jsx)(B, { clipToUpload: r }),
          ],
        });
      }
      function B(e) {
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
                m.R
              ),
            ).unregister,
          [],
        );
        let c = (0, d.we)("#Chat_Uploading", r.clip_id),
          u = { width: t + "%" };
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
                style: u,
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
          default: () => L,
          useTimelineLoaderForCommunityClip: () => H,
        });
      var i,
        s,
        a = t(62540),
        n = t(63696),
        l = t(92374),
        o = t(91720),
        m = t(68956),
        c = t(36975),
        d = t(69157),
        u = t(46382),
        g = t(61416),
        B = t(58663),
        _ = t.n(B),
        p = t(48307),
        b = t(12176);
      class M extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.representation_name || p.Sg(M.M()),
            B.Message.initialize(this, e, 0, -1, [11], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  representation_name: {
                    n: 2,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  horizontal_resolution: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  vertical_resolution: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  frame_rate: {
                    n: 5,
                    br: p.qM.readDouble,
                    bw: p.gp.writeDouble,
                  },
                  bandwidth: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  audio_sample_rate: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  frame_rate_string: {
                    n: 8,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  codec: { n: 9, br: p.qM.readString, bw: p.gp.writeString },
                  audio_channel_config: {
                    n: 10,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  segment_info: { n: 11, c: w, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = p.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingRepresentation";
        }
      }
      class y extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.component_name || p.Sg(y.M()),
            B.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  component_name: {
                    n: 1,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  contents: { n: 2, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  segment_size: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  file_type: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  representations: { n: 5, c: M, r: !0, q: !0 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = p.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingComponent";
        }
      }
      class f extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.steamid || p.Sg(f.M()),
            B.Message.initialize(this, e, 0, -1, [7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  app_id: { n: 2, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  num_segments: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  length_milliseconds: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  segment_duration_timescale: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  segment_duration: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  components: { n: 7, c: y, r: !0, q: !0 },
                  start_time_ms: {
                    n: 8,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  start_offset_in_timeline_ms: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = p.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingDef";
        }
      }
      class w extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.segment_number || p.Sg(w.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  segment_number: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  segment_size_bytes: {
                    n: 2,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  component_name: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  representation_name: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = p.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentInfo";
        }
      }
      class z extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.segment_info || p.Sg(z.M()),
            B.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  segment_info: { n: 1, c: w },
                  url_host: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  url_path: { n: 3, br: p.qM.readString, bw: p.gp.writeString },
                  use_https: { n: 4, br: p.qM.readBool, bw: p.gp.writeBool },
                  request_headers: { n: 5, c: S, r: !0, q: !0 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = p.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo";
        }
      }
      class S extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.name || p.Sg(S.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  name: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                  value: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = p.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
        }
      }
      class R extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.video_manager_clip_id || p.Sg(R.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  video_manager_clip_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  video_manager_video_id: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  server_timeline_id: {
                    n: 3,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  manifest_url: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  duration_ms: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  start_offset_ms: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = p.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideoManagerClipID";
        }
      }
      class h extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.clip_id || p.Sg(h.M()),
            B.Message.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  clip_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  gameid: {
                    n: 2,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  date_recorded: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  total_file_size_bytes: {
                    n: 7,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  video_ids: { n: 9, c: R, r: !0, q: !0 },
                  owner_steamid: {
                    n: 10,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  upload_complete: {
                    n: 11,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  duration_ms: {
                    n: 12,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = p.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecordingClip";
        }
      }
      class j extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.clip || p.Sg(j.M()),
            B.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  clip: { n: 2, c: h },
                  video_def: { n: 3, c: f, r: !0, q: !0 },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = p.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Request";
        }
      }
      class U extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.clip || p.Sg(U.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m || (U.sm_m = { proto: U, fields: { clip: { n: 1, c: h } } }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = p.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Response";
        }
      }
      class C extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.clip_id || p.Sg(C.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  clip_id: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = p.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Request";
        }
      }
      class F extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Response";
        }
      }
      class W extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.clip_id || p.Sg(W.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  clip_id: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = p.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Request";
        }
      }
      class v extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.clip || p.Sg(v.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m || (v.sm_m = { proto: v, fields: { clip: { n: 1, c: h } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = p.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Response";
        }
      }
      class T extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.recording_id || p.Sg(T.M()),
            B.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  recording_id: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  segments_to_store: { n: 4, c: w, r: !0, q: !0 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = p.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Request";
        }
      }
      class q extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.segments_needed || p.Sg(q.M()),
            B.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  segments_needed: { n: 1, c: z, r: !0, q: !0 },
                  call_again: { n: 2, br: p.qM.readBool, bw: p.gp.writeBool },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = p.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Response";
        }
      }
      class O extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.recording_id || p.Sg(O.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  recording_id: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  first_segment_number: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  num_segments: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  upload_result: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = p.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Request";
        }
      }
      class x extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new x();
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Response";
        }
      }
      class I extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.recording_id || p.Sg(I.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  recording_id: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = p.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request";
        }
      }
      class G extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.segments_needed || p.Sg(G.M()),
            B.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { segments_needed: { n: 1, c: z, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = p.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response";
        }
      }
      class N extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.recording_id || p.Sg(N.M()),
            B.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  recording_id: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  segments_uploaded: { n: 2, c: w, r: !0, q: !0 },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = p.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(N.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingCommitSegmentUploads_Request";
        }
      }
      class P extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let r = new (_().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingCommitSegmentUploads_Response";
        }
      }
      !(function (e) {
        (e.CreateShareClip = function (e, r) {
          return e.SendMsg(
            "GameRecordingClip.CreateShareClip#1",
            (0, b.I8)(j, r),
            U,
            { ePrivilege: 1 },
          );
        }),
          (e.DeleteSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.DeleteSharedClip#1",
              (0, b.I8)(C, r),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSingleSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.GetSingleSharedClip#1",
              (0, b.I8)(W, r),
              v,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.BeginGameRecordingSegmentsUpload = function (e, r) {
            return e.SendMsg(
              "VideoClip.BeginGameRecordingSegmentsUpload#1",
              (0, b.I8)(T, r),
              q,
              { ePrivilege: 1 },
            );
          }),
            (e.CommitGameRecordingSegmentsUpload = function (e, r) {
              return e.SendMsg(
                "VideoClip.CommitGameRecordingSegmentsUpload#1",
                (0, b.I8)(O, r),
                x,
                { ePrivilege: 1 },
              );
            }),
            (e.GetNextBatchOfSegmentsToUpload = function (e, r) {
              return e.SendMsg(
                "VideoClip.GetNextBatchOfSegmentsToUpload#1",
                (0, b.I8)(I, r),
                G,
                { ePrivilege: 1 },
              );
            }),
            (e.CommitSegmentUploads = function (e, r) {
              return e.SendMsg(
                "VideoClip.CommitSegmentUploads#1",
                (0, b.I8)(N, r),
                P,
                { ePrivilege: 1 },
              );
            });
        })(s || (s = {}));
      var V = t(35198),
        D = t(84629),
        E = t(25025),
        k = t(35488);
      function K(e) {
        const { clipID: r } = e,
          t = (function (e) {
            const r = (0, u.KV)();
            return (0, g.I)({
              queryKey: ["grclip", e],
              queryFn: async () => {
                const t = b.w.Init(W);
                t.Body().set_clip_id(e);
                const s = await i.GetSingleSharedClip(r, t);
                if (s.GetEResult() != V.R)
                  throw (
                    ((0, D.ZI)("GetSingleSharedClip failed"),
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
                    ((0, D.ZI)("No video ids in clip", e),
                    s.DEBUG_LogToConsole(),
                    new Error("No video ids in clip"))
                  );
                for (let e of n.video_ids)
                  (a && a.timeline_id == e.server_timeline_id) ||
                    ((a = A(n, e)), l.push(a)),
                    a.recordings.push({
                      recording_id: e.video_manager_video_id,
                      start_offset_ms: e.start_offset_ms.toFixed(0),
                      duration_ms: e.duration_ms.toFixed(0),
                      recording_type: d.kO,
                      cdn_manifest_url: e.manifest_url,
                    });
                return { clip_id: n.clip_id, game_id: n.gameid, timelines: l };
              },
            });
          })(r);
        return t.data
          ? (0, a.jsx)($, { clip: t.data, mode: l.g_.ChatClip })
          : (0, a.jsx)("div", {
              style: { color: "white" },
              children: "Loading...",
            });
      }
      const L = function (e) {
        const { previewURL: r } = e,
          [t, i] = n.useState(!1);
        return t
          ? (0, a.jsx)(K, { ...e })
          : (0, a.jsxs)("div", {
              className: E.ClipPreview,
              onClick: () => {
                i(!0);
              },
              children: [
                (0, a.jsx)("img", { className: E.Thumbnail, src: r }),
                (0, a.jsx)("div", {
                  className: E.PlayContainer,
                  children: (0, a.jsx)(k.Play, { className: E.Button }),
                }),
              ],
            });
      };
      function A(e, r) {
        return {
          timeline_id: r.server_timeline_id,
          game_id: e.clip_id,
          date_recorded: e.date_recorded,
          duration_ms: e.duration_ms.toFixed(0),
          recordings: [],
        };
      }
      function H(e) {
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
      function $(e) {
        const { clip: r, mode: t } = e,
          { loader: i, fnGetManifest: s } = H(r);
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(l.Ni, {
            loader: i,
            fnGetManifest: s,
            mode: t,
            children: (0, a.jsxs)("div", {
              className: E.ClipDetails,
              children: [
                (0, a.jsx)("div", {
                  className: E.VideoContainer,
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
