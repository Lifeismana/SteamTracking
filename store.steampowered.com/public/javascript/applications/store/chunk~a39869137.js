/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [1703],
    {
      89083: (ge, re, B) => {
        B.d(re, { Zn: () => g, N_: () => Me, Br: () => be });
        var p = B(41735),
          V = B.n(p),
          J = B(14947),
          ee = B(99412),
          A = B(71742),
          N = B(8323),
          H = B(18210),
          $ = B(13854),
          _ = B(27066),
          q = B(36174),
          x = B(3166),
          a = B(48937),
          se = B(7409),
          Y = B(53113);
        function Q(r, e) {
          let t = r.getElementsByTagName("MPD");
          return !t || t.length != 1 ? null : t[0];
        }
        function v(r, e) {
          for (let t = 0; t < r.children.length; t++) {
            let i = r.children[t];
            if (i.tagName == e) return i;
          }
          return null;
        }
        function z(r, e) {
          let t = r.getAttribute(e);
          if (!t) return null;
          let i = new Date(t);
          return Object.prototype.toString.call(i) === "[object Date]"
            ? i
            : null;
        }
        function X(r, e) {
          let t = r.getAttribute(e);
          if (!t) return null;
          let i = 0,
            n = t.match(/(\d*)H/);
          return (
            n && (i += parseFloat(n[1]) * 60 * 60),
            (n = t.match(/(\d*)M/)),
            n && (i += parseFloat(n[1]) * 60),
            (n = t.match(/(\d*\.?\d*)S/)),
            n && (i += parseFloat(n[1])),
            i
          );
        }
        function ue(r, e) {
          let t = r.getAttribute(e);
          return t
            ? ((t = t.toLowerCase()),
              t == "true" ? !0 : t == "false" ? !1 : null)
            : null;
        }
        function E(r, e) {
          let t = r.getAttribute(e);
          return t ? parseInt(t) : null;
        }
        function b(r, e) {
          let t = r.getAttribute(e);
          return t || "";
        }
        function fe(r, e, t) {
          let i = E(r, "timescale");
          if ((e.bContainsThumbnails && i == null && (i = 1), !i)) return null;
          let n = {
            nTimeScale: i,
            nDuration: E(r, "duration") || 0,
            nStartNumber: E(r, "startNumber") || 0,
            strMedia: b(r, "media"),
            strInitialization: b(r, "initialization"),
          };
          return !n.nDuration ||
            !n.nStartNumber ||
            !n.strMedia ||
            (!e.bContainsThumbnails && !n.strInitialization)
            ? null
            : ((n.strMedia = O(n.strMedia, t)),
              (n.strInitialization = O(n.strInitialization, t)),
              n);
        }
        function w(r, e, t) {
          return (
            (r = r.replace("$RepresentationID$", e)),
            (r = r.replace("$Number$", t.toString())),
            (r = r.replace(
              /\$Number%(\d+)d\$/g,
              (i, n) => (
                (n = Number.parseInt(n)),
                (Array(n).join("0") + t.toString()).slice(-n)
              ),
            )),
            r
          );
        }
        function G(r) {
          return (0, Y.DZ)(r);
        }
        function _e(r, e) {
          let t = r;
          t.endsWith("/") || (t += "/");
          let i = e.startsWith("/") ? 1 : 0;
          return t + e.substring(i);
        }
        function ae(r) {
          if (!G(r)) return "";
          let e = new URL(r),
            t = e.pathname;
          return (
            (t.indexOf(".mpd") >= 0 || t.endsWith("/")) &&
              (t = t.substring(0, t.lastIndexOf("/"))),
            _e(e.origin, t) + "/"
          );
        }
        function O(r, e) {
          return !r || G(r) || !G(e) ? r : _e(e, r);
        }
        function s(r) {
          return (
            r.rgRoles.length == 0 ||
            r.rgRoles.findIndex((e) => e == "main") >= 0
          );
        }
        function l(r) {
          return r.rgRepresentations.length == 0
            ? null
            : r.rgRepresentations[0];
        }
        function m(r) {
          if (!r) return 0;
          let e = r.segmentTemplate;
          return e.nTimeScale == 1e3
            ? e.nDuration
            : (e.nDuration / e.nTimeScale) * 1e3;
        }
        function d(r, e, t) {
          t = t - r.GetStartTime() * 1e3;
          let i = m(e),
            n = U(r, i, t);
          return Math.floor(n / i) + e.segmentTemplate.nStartNumber;
        }
        function T(r, e) {
          return (e - r.segmentTemplate.nStartNumber) * (m(r) / 1e3);
        }
        function k(r, e) {
          if (r.IsLiveContent()) return Number.MAX_VALUE;
          let t = (r.GetEndTime() - r.GetStartTime()) * 1e3,
            i = m(e),
            n = U(r, i, t);
          return Math.ceil(n / i) + e.segmentTemplate.nStartNumber - 1;
        }
        function U(r, e, t) {
          let i = (r.GetStartTime() * 1e3) % e;
          return t + i;
        }
        function K(r) {
          let e = r.segmentTemplate.strInitialization;
          return w(e, r.strID, 0);
        }
        function Ae(r, e) {
          let t = r.segmentTemplate.strMedia;
          return w(t, r.strID, e);
        }
        function Re(r, e, t) {
          if (!r.IsLiveContent()) return 0;
          let i = m(e),
            n = t - e.segmentTemplate.nStartNumber,
            o = r.GetDurationSinceStarted();
          return (n + 1) * i - o;
        }
        function ke(r) {
          return [
            "image/jpeg",
            "image/jpg",
            "image/avif",
            "image/webp",
          ].includes(r);
        }
        class Le {
          m_strType = "static";
          m_nMinBufferTime = 0;
          m_dtAvailabilityStartTime = null;
          m_dtPublishTime = null;
          m_nMinimumUpdatePeriod = 0;
          m_nTimeShiftBufferDepth = 0;
          m_nMediaPresentationDuration = 0;
          m_strBaseURL = "";
          m_strStatsLink = "";
          m_strStalledLink = "";
          m_strEventLogLink = "";
          m_rgPeriods = [];
          m_tsLiveContentStart = 0;
          GetType() {
            return this.m_strType;
          }
          GetMinimumUpdatePeriod() {
            return this.m_nMinimumUpdatePeriod;
          }
          GetPeriods() {
            return this.m_rgPeriods;
          }
          GetBaseURL() {
            return this.m_strBaseURL;
          }
          GetTimeShiftBufferDepth() {
            return this.m_nTimeShiftBufferDepth;
          }
          GetMinBufferTime() {
            return this.m_nMinBufferTime;
          }
          GetAvailabilityStartTime() {
            return this.IsLiveContent() && this.m_dtAvailabilityStartTime
              ? this.m_dtAvailabilityStartTime
              : new Date(0);
          }
          GetTimedTextAdaptionSet(e) {
            return e < 0 || e > this.m_rgPeriods.length
              ? []
              : this.m_rgPeriods[e].rgAdaptationSets.filter(
                  (t) => t.bIsTimedText,
                );
          }
          IsLiveContent() {
            return this.GetType() == "dynamic";
          }
          GetAdaptationByTrackID(e) {
            if (this.m_rgPeriods.length == 0) return null;
            let t = this.m_rgPeriods[0];
            for (let i of t.rgAdaptationSets) if (e == i.strID) return i;
            return null;
          }
          GetMainVideoAdaption() {
            if (this.m_rgPeriods.length == 0) return null;
            let e = this.m_rgPeriods[0];
            for (let t of e.rgAdaptationSets)
              if (s(t) && t.bContainsVideo) return t;
            return null;
          }
          GetMainAudioAdaption() {
            if (this.m_rgPeriods.length == 0) return null;
            let e = this.m_rgPeriods[0];
            for (let t of e.rgAdaptationSets)
              if (s(t) && t.bContainsAudio) return t;
            return null;
          }
          GetThumbnailAdaptation() {
            if (this.m_rgPeriods.length == 0) return null;
            let e = this.m_rgPeriods[0];
            for (let t of e.rgAdaptationSets)
              if (t.bContainsThumbnails) return t;
            return null;
          }
          GetThumbnailDurationMS() {
            let e = this.GetThumbnailAdaptation();
            if (!e || e.rgRepresentations.length == 0) return 0;
            let t = e.rgRepresentations[0];
            if (!t.nTileWidthCount || !t.nTileHeightCount) return 0;
            let i = m(t),
              n = t.nTileWidthCount * t.nTileHeightCount;
            return i / n;
          }
          GetStartTime() {
            return !this.IsLiveContent() && this.m_rgPeriods.length > 0
              ? this.m_rgPeriods[0].nStart
              : 0;
          }
          GetEndTime() {
            if (!this.IsLiveContent()) {
              if (this.m_rgPeriods.length > 0 && this.m_rgPeriods[0].nDuration)
                return this.GetStartTime() + this.m_rgPeriods[0].nDuration;
              if (this.m_nMediaPresentationDuration > 0)
                return this.GetStartTime() + this.m_nMediaPresentationDuration;
            }
            return Number.MAX_VALUE;
          }
          GetLowestRepresentation(e) {
            let t = this.GetAdaptationByTrackID(e);
            if (!t) return null;
            let i = t.rgRepresentations[0];
            for (let n of t.rgRepresentations)
              n.nBandwidth < i.nBandwidth && (i = n);
            return i;
          }
          GetStatsLink() {
            return this.m_strStatsLink;
          }
          GetStalledLink() {
            return this.m_strStalledLink;
          }
          GetEventLink() {
            return this.m_strEventLogLink;
          }
          GetThumbnail(e) {
            let t = this.GetThumbnailAdaptation();
            if (!t || t.rgRepresentations.length == 0) return null;
            let i = t.rgRepresentations[0],
              n = d(this, i, e);
            if (
              i.nTileWidthCount === void 0 ||
              i.nTileHeightCount === void 0 ||
              i.nWidth === void 0 ||
              i.nHeight === void 0
            )
              return null;
            let o = m(i),
              h = o * (n - i.segmentTemplate.nStartNumber),
              u = i.nTileWidthCount * i.nTileHeightCount,
              f = o / u,
              S = Math.floor((e - h) / f),
              y = Math.floor(S / i.nTileWidthCount),
              D = S % i.nTileWidthCount;
            if (D + 1 > i.nTileHeightCount)
              return (
                (0, a.q_)(
                  "Asking for a thumbnail that is off the end of the tile sheet",
                ),
                null
              );
            let M = i.nWidth / i.nTileWidthCount,
              R = i.nHeight / i.nTileHeightCount;
            return {
              strTileURL: w(i.segmentTemplate.strMedia, i.strID, n),
              x: D * M,
              y: y * R,
              nThumbnailWidth: M,
              nThumbnailHeight: R,
              nImageWidth: i.nWidth,
              nImageHeight: i.nHeight,
            };
          }
          StartLiveContentNow(e) {
            this.m_tsLiveContentStart = performance.now() - e;
          }
          GetDurationSinceStarted() {
            return performance.now() - this.m_tsLiveContentStart;
          }
          ParseRepresentation(e, t, i, n, o) {
            let h = null,
              u = v(e, "SegmentTemplate");
            if (u) {
              let S = fe(u, t, n);
              S && (h = S);
            } else i && (h = { ...i });
            if (!h)
              return (
                (0, a.q_)("MPD - No segment template for representation"), null
              );
            let f = {
              strID: b(e, "id"),
              strMimeType: b(e, "mimeType"),
              strCodecs: b(e, "codecs"),
              nBandwidth: E(e, "bandwidth") || 0,
              segmentTemplate: h,
            };
            if (
              (!f.strMimeType && o && (f.strMimeType = o), t.bContainsVideo)
            ) {
              if (
                ((f.nWidth = E(e, "width") || 0),
                (f.nHeight = E(e, "height") || 0),
                (f.nFrameRate = E(e, "frameRate") || 0),
                (0, a.q_)(
                  `representation: ${f.nWidth}w x ${f.nHeight}h x ${f.nFrameRate} fps`,
                ),
                !f.strID || !f.strMimeType || !f.strCodecs || !f.nBandwidth)
              )
                return (
                  (0, a.q_)("MPD - Representation Video Data Missing"), null
                );
            } else if (t.bContainsAudio) {
              f.nAudioSamplingRate = E(e, "audioSamplingRate") || 0;
              let S = v(e, "AudioChannelConfiguration");
              if (
                (S && (f.nAudioChannels = E(S, "value") || 0),
                f.nAudioChannels || (f.nAudioChannels = 2),
                !f.strID ||
                  !f.strMimeType ||
                  !f.strCodecs ||
                  !f.nAudioSamplingRate ||
                  !f.nAudioChannels)
              )
                return (
                  (0, a.q_)("MPD - Representation Audio Data Missing"), null
                );
            } else if (t.bContainsThumbnails) {
              if (!ke(f.strMimeType))
                return (
                  (0, a.q_)(
                    "MPD - Representation Thumbnail MimeType not supported",
                    f.strMimeType,
                  ),
                  null
                );
              (f.nWidth = E(e, "width") || 0),
                (f.nHeight = E(e, "height") || 0);
              let S = v(e, "EssentialProperty");
              if (!S)
                return (
                  (0, a.q_)(
                    "MPD - Representation Thumbnail missing EssentialProperty",
                  ),
                  null
                );
              let y = b(S, "schemeIdUri");
              if (!y || y != "http://dashif.org/guidelines/thumbnail_tile")
                return (
                  (0, a.q_)(
                    "MPD - Representation Thumbnail has invalid schema",
                  ),
                  null
                );
              let M = (b(S, "value") || "").split("x");
              if (M.length != 2 || !$.TG(M[0]) || !$.TG(M[1]))
                return (
                  (0, a.q_)(
                    "MPD - Representation Thumbnail has invalid tile property",
                  ),
                  null
                );
              (f.nTileWidthCount = parseInt(M[0])),
                (f.nTileHeightCount = parseInt(M[1]));
            }
            return f;
          }
          ParseAdaptationSetVTT(e, t) {
            e.rgRoles.push("subtitle");
            let i = t.getElementsByTagName("Role");
            for (let o = 0; o < i.length; o++) {
              let h = b(i[o], "value");
              h && h != "subtitle" && e.rgRoles.push(h);
            }
            let n = t.getElementsByTagName("Representation");
            for (let o = 0; o < n.length; o++) {
              let h = n[o],
                u = {
                  strID: b(h, "id"),
                  nBandwidth: E(h, "bandwidth") || 0,
                  strClosedCaptionFile: "",
                  strMimeType: "text/vtt",
                  segmentTemplate: {
                    nTimeScale: 0,
                    nDuration: 0,
                    nStartNumber: 0,
                    strMedia: "",
                    strInitialization: "",
                  },
                },
                f = v(h, "BaseURL"),
                S = f ? f.textContent : "";
              if (!S) {
                (0, a.q_)(
                  "Closed Caption File has no BaseURL for (id): " + u.strID,
                );
                continue;
              }
              (u.strClosedCaptionFile = w(S, u.strID, 0)),
                u.strClosedCaptionFile.startsWith("http") ||
                  (u.strClosedCaptionFile =
                    this.m_strBaseURL + u.strClosedCaptionFile);
              const y = (0, x.yK)();
              if (y == "community") {
                const D = new URL(u.strClosedCaptionFile).pathname.split(
                  "/video/",
                )[1];
                u.strClosedCaptionFile = D
                  ? x.TS.COMMUNITY_BASE_URL + "vtt/video/" + D
                  : "";
              } else if (y == "store") {
                const D = new URL(u.strClosedCaptionFile).pathname.split(
                  "/video/",
                )[1];
                u.strClosedCaptionFile = D
                  ? x.TS.STORE_BASE_URL + "vtt/video/" + D
                  : "";
              }
              u.strClosedCaptionFile && e.rgRepresentations.push(u);
            }
          }
          BParse(e, t) {
            let n = new DOMParser().parseFromString(e, "application/xml"),
              o = Q(n, "MPD");
            if (!o) return !1;
            let h = o.getAttribute("type");
            if (
              ((this.m_nMinBufferTime = X(o, "minBufferTime") || 0),
              h == "dynamic")
            ) {
              if (
                ((this.m_strType = "dynamic"),
                (this.m_dtAvailabilityStartTime = z(
                  o,
                  "availabilityStartTime",
                )),
                (this.m_dtPublishTime = z(o, "publishTime")),
                (this.m_nMinimumUpdatePeriod =
                  X(o, "minimumUpdatePeriod") || 0),
                (this.m_nTimeShiftBufferDepth =
                  X(o, "timeShiftBufferDepth") || 0),
                !this.m_dtAvailabilityStartTime ||
                  !this.m_dtPublishTime ||
                  !this.m_nMinimumUpdatePeriod ||
                  !this.m_nMinBufferTime)
              )
                return (0, a.q_)("MPD - Missing Dynamic Manifest Times"), !1;
            } else if (h == "static") {
              if (
                ((this.m_strType = "static"),
                (this.m_nMediaPresentationDuration =
                  X(o, "mediaPresentationDuration") || 0),
                !this.m_nMinBufferTime || !this.m_nMediaPresentationDuration)
              )
                return (
                  (0, a.q_)(
                    "MPD - Missing Buffer Time or Presentation Duration",
                  ),
                  !1
                );
            } else return (0, a.q_)("MPD - Unknown type"), !1;
            let u = v(o, "BaseURL");
            u && u.textContent
              ? (this.m_strBaseURL = u.textContent)
              : (this.m_strBaseURL = ae(t));
            let f = v(o, "Analytics");
            f &&
              ((this.m_strStatsLink = b(f, "statslink")),
              (this.m_strStalledLink = b(f, "stalledlink")),
              (this.m_strEventLogLink = b(f, "eventlink")));
            let S = n.getElementsByTagName("Period");
            if (S.length == 0) return (0, a.q_)("MPD - Missing Periods"), !1;
            let y = S[0],
              D = b(y, "id"),
              M = X(y, "start");
            if (!D || M === null)
              return (0, a.q_)("MPD - Missing Period Information"), !1;
            let R = {
              strID: D,
              nStart: M,
              nDuration: X(y, "duration") || 0,
              rgAdaptationSets: [],
            };
            (this.m_rgPeriods = []), this.m_rgPeriods.push(R);
            let F = y.getElementsByTagName("AdaptationSet");
            for (let C = 0; C < F.length; C++) {
              let P = F[C],
                te = b(P, "description"),
                W = b(P, "lang"),
                I = {
                  bSegmentAlignment: ue(P, "segmentAlignment") || !1,
                  bIsTimedText: b(P, "mimeType") == "text/vtt",
                  strLanguage: b(P, "lang"),
                  bContainsVideo: !1,
                  bContainsAudio: !1,
                  bContainsThumbnails: !1,
                  strDescription: te || W,
                  strForceSub: b(P, "forceSub"),
                  strID: b(P, "id"),
                  rgRoles: [],
                  rgRepresentations: [],
                };
              R.rgAdaptationSets.push(I);
              let ie = P.getElementsByTagName("ContentComponent");
              for (let L = 0; L < ie.length; L++) {
                let ne = b(ie[L], "contentType");
                ne == "video" && (I.bContainsVideo = !0),
                  ne == "audio" && (I.bContainsAudio = !0),
                  ne == "image" && (I.bContainsThumbnails = !0);
              }
              if (ie.length == 0) {
                let L = b(P, "contentType");
                L == "video" && (I.bContainsVideo = !0),
                  L == "audio" && (I.bContainsAudio = !0),
                  L == "image" && (I.bContainsThumbnails = !0);
              }
              if (I.bIsTimedText) {
                this.ParseAdaptationSetVTT(I, P);
                continue;
              }
              if (!I.bContainsThumbnails && !I.bSegmentAlignment)
                return (
                  (0, a.q_)(
                    "MPD - Only segment aligned dash manifests is supported",
                  ),
                  !1
                );
              let oe = P.getElementsByTagName("Role");
              for (let L = 0; L < oe.length; L++) {
                let ne = b(oe[L], "value");
                ne && I.rgRoles.push(ne);
              }
              let he = null,
                ve = v(P, "SegmentTemplate");
              if (ve) {
                let L = fe(ve, I, this.m_strBaseURL);
                if (!L)
                  return (
                    (0, a.q_)(
                      "MPD - Failed to parse found Adaptation template",
                    ),
                    !1
                  );
                he = L;
              }
              let pt = b(P, "mimeType"),
                Pe = P.getElementsByTagName("Representation");
              for (let L = 0; L < Pe.length; L++) {
                let ne = Pe[L],
                  Ce = this.ParseRepresentation(
                    ne,
                    I,
                    he,
                    this.m_strBaseURL,
                    pt,
                  );
                if (!Ce) return !1;
                I.rgRepresentations.push(Ce);
              }
            }
            return !0;
          }
          BUpdate(e) {
            let i = new DOMParser().parseFromString(e, "application/xml"),
              n = Q(i, "MPD");
            if (!n) return !1;
            if (this.IsLiveContent()) {
              switch (b(n, "type")) {
                case "dynamic":
                  break;
                case "static":
                  (0, a.q_)("Converting MPD from dynamic to static"),
                    (this.m_strType = "static"),
                    (this.m_nMediaPresentationDuration =
                      X(n, "mediaPresentationDuration") || 0),
                    (this.m_nMinBufferTime = X(n, "minBufferTime") || 0),
                    (this.m_dtAvailabilityStartTime = null),
                    (this.m_dtPublishTime = null);
                  break;
              }
              let u = i.getElementsByTagName("Period");
              if (u.length == 0) return !1;
              let S = u[0].getElementsByTagName("AdaptationSet");
              for (let y = 0; y < S.length; y++) {
                let D = S[y],
                  M = b(D, "id"),
                  R = this.GetAdaptationByTrackID(M);
                if (R) {
                  let F = null,
                    C = v(D, "SegmentTemplate");
                  if (C) {
                    let W = fe(C, R, this.m_strBaseURL);
                    if (!W)
                      return (
                        (0, a.q_)(
                          "MPD - Failed to parse found Adaptation template",
                        ),
                        !1
                      );
                    F = W;
                  }
                  let P = b(D, "mimeType"),
                    te = D.getElementsByTagName("Representation");
                  if (te.length > 1)
                    for (let W = 0; W < te.length; W++) {
                      let I = te[W],
                        ie = this.ParseRepresentation(
                          I,
                          R,
                          F,
                          this.m_strBaseURL,
                          P,
                        );
                      if (!ie)
                        return (
                          (0, a.q_)("MPD - Failed to parse representation"), !1
                        );
                      let oe = null;
                      for (let he of R.rgRepresentations)
                        if (ie.strID == he.strID) {
                          oe = he;
                          break;
                        }
                      oe
                        ? (oe.segmentTemplate.strMedia =
                            ie.segmentTemplate.strMedia)
                        : R.rgRepresentations.push(ie);
                    }
                  break;
                }
              }
            }
            let o = v(n, "Analytics");
            return (
              o &&
                ((this.m_strStatsLink = b(o, "statslink")),
                (this.m_strStalledLink = b(o, "stalledlink")),
                (this.m_strEventLogLink = b(o, "eventlink"))),
              !0
            );
          }
        }
        var le = ((r) => (
          (r[(r.None = 0)] = "None"),
          (r[(r.Append = 1)] = "Append"),
          (r[(r.Remove = 2)] = "Remove"),
          r
        ))(le || {});
        function Ge(r) {
          return r && r.name == "QuotaExceededError";
        }
        class Ie {
          m_eBufferUpdate = 0;
          m_sourceBuffer = null;
          Attach(e) {
            (this.m_sourceBuffer = e), (this.m_eBufferUpdate = 0);
          }
          Detach() {
            (this.m_sourceBuffer = null), (this.m_eBufferUpdate = 0);
          }
          HasAttachedBuffer() {
            return this.m_sourceBuffer != null;
          }
          GetBufferState() {
            return this.m_eBufferUpdate;
          }
          GetSourceBufferTimeRanges() {
            return this.m_sourceBuffer ? this.m_sourceBuffer.buffered : null;
          }
          GetBufferedStartSec() {
            return !this.m_sourceBuffer ||
              !this.m_sourceBuffer.buffered ||
              this.m_sourceBuffer.buffered.length == 0
              ? 0
              : this.m_sourceBuffer.buffered.start(0);
          }
          GetBufferedEndSec() {
            return !this.m_sourceBuffer ||
              !this.m_sourceBuffer.buffered ||
              this.m_sourceBuffer.buffered.length == 0
              ? 0
              : this.m_sourceBuffer.buffered.end(0);
          }
          BufferUpdateComplete() {
            this.m_eBufferUpdate = 0;
          }
          MarkAsRemoving() {
            this.m_eBufferUpdate = 2;
          }
          GetAmountBufferedInPlayerMS(e) {
            if (!this.m_sourceBuffer) return 0;
            let t = this.m_sourceBuffer.buffered;
            if (t.length == 0) return 0;
            e < t.start(0) && (e = t.start(0)), e > t.end(0) && (e = t.end(0));
            let i = t.end(0) - e;
            return Math.floor(i * 1e3);
          }
          AppendBuffer(e) {
            (0, A.wT)(this.m_sourceBuffer != null, "Invalid source buffer"),
              (0, A.wT)(
                this.m_eBufferUpdate == 0,
                "Appending to source buffer with operation in flight",
              );
            try {
              this.m_sourceBuffer.appendBuffer(e), (this.m_eBufferUpdate = 1);
            } catch (t) {
              return t;
            }
            return null;
          }
          Remove(e, t) {
            (0, A.wT)(this.m_sourceBuffer != null, "Invalid source buffer"),
              (0, A.wT)(
                this.m_eBufferUpdate == 0,
                "Removing from source buffer with operation in flight",
              ),
              this.m_sourceBuffer.remove(e, t),
              (this.m_eBufferUpdate = 2);
          }
          RemoveAll() {
            let e = 0;
            if (this.m_sourceBuffer) {
              let t = this.m_sourceBuffer.buffered;
              for (let i = 0; i < t.length; i++) e < t.end(i) && (e = t.end(i));
            }
            return e == 0 || !this.m_sourceBuffer
              ? !1
              : (this.m_sourceBuffer.remove(0, e + 1),
                (this.m_eBufferUpdate = 2),
                !0);
          }
        }
        var Ve = Object.defineProperty,
          Fe = Object.getOwnPropertyDescriptor,
          Z = (r, e, t, i) => {
            for (
              var n = i > 1 ? void 0 : i ? Fe(e, t) : e, o = r.length - 1, h;
              o >= 0;
              o--
            )
              (h = r[o]) && (n = (i ? h(e, t, n) : h(n)) || n);
            return i && n && Ve(e, t, n), n;
          };
        const xe = 500,
          Ee = 3e3,
          Oe = 9e3,
          Ue = 4,
          Ne = 15e3,
          De = -1,
          Te = 30,
          ce = 6,
          He = 1,
          $e = 10;
        class j {
          m_callbacks;
          m_mpd;
          m_adaptation;
          m_mediaSource = null;
          m_sourceBuffer = new Ie();
          m_nTrackBufferMS = 0;
          m_representation = null;
          m_rgBufferedSegments = [];
          m_mapInitSegments = new Map();
          m_strLastFedInitSegmentRep = "";
          m_nNextSegment = 0;
          m_bRemoveBufferState = !1;
          m_bSeekInProgress = !1;
          m_bSourceBufferQuotaExceeded = !1;
          m_schNextDownload = new N.LU();
          m_xhrDownload = null;
          m_listeners = new N.Ji();
          m_rgDownloadLog = [];
          m_nCurDownloadProgress = 0;
          m_nCurDownloadBitrate = 0;
          m_stats;
          m_nNumConsecutiveDownloadGones = 0;
          constructor(e, t, i, n) {
            (this.m_callbacks = e),
              (this.m_mpd = t),
              (this.m_adaptation = i),
              (this.m_stats = n);
          }
          SetMediaSource(e) {
            this.m_mediaSource = e;
          }
          SetBufferMS(e) {
            this.m_nTrackBufferMS = e;
          }
          GetRepresentationsCount() {
            return this.m_adaptation.rgRepresentations.length;
          }
          GetRepresentationByID(e) {
            for (let t of this.m_adaptation.rgRepresentations)
              if (t.strID == e) return t;
            return null;
          }
          GetNumConsecutiveDownloadGones() {
            return this.m_nNumConsecutiveDownloadGones;
          }
          ContainsVideo() {
            return this.m_adaptation.bContainsVideo;
          }
          ContainsAudio() {
            return this.m_adaptation.bContainsAudio;
          }
          GetAdaptation() {
            return this.m_adaptation;
          }
          GetBandwidthRequired() {
            return this.m_representation?.nBandwidth || 0;
          }
          GetCurrentSegmentDurationMS() {
            return m(this.m_representation);
          }
          GetCurrentSegmentInitializationURL() {
            return this.m_representation ? K(this.m_representation) : "";
          }
          BIsCurrentRepresentation(e) {
            return (
              !!this.m_representation &&
              e &&
              e.strID == this.m_representation.strID
            );
          }
          GetSourceBufferTimeRanges() {
            return this.m_sourceBuffer.GetSourceBufferTimeRanges();
          }
          GetEstimatedAudioRate() {
            return !this.m_representation || !this.ContainsAudio()
              ? 0
              : this.m_representation.nBandwidth;
          }
          GetDebugName() {
            let e = [];
            return (
              this.ContainsVideo()
                ? e.push("Video")
                : this.ContainsAudio() && e.push("Audio"),
              e.join(" & ") +
                ":" +
                this.m_callbacks.GetCurrentPlayTime().toFixed(3).toString()
            );
          }
          GetMaxSegment() {
            return this.m_representation
              ? k(this.m_mpd, this.m_representation)
              : 0;
          }
          GetBufferedStart() {
            return this.m_sourceBuffer.GetBufferedStartSec();
          }
          GetBufferedEnd() {
            let e = this.m_rgBufferedSegments.length;
            if (e == 0) return 0;
            let t = this.m_rgBufferedSegments[e - 1];
            return t.nStartPTS + t.nDurationMS / 1e3;
          }
          GetAmountBufferedMS(e) {
            let t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e);
            for (let i of this.m_rgBufferedSegments)
              !i.data || i.nStartPTS < e || (t += i.nDurationMS);
            return t;
          }
          IsSegmentBuffered(e) {
            return (
              this.m_rgBufferedSegments.findIndex(
                (t) => t.nSegmentIndex == e,
              ) >= 0
            );
          }
          ChangeRepresentation(e, t) {
            if (!(this.m_adaptation.rgRepresentations.indexOf(e) < 0)) {
              if (this.m_representation != e) {
                if (this.ContainsVideo()) {
                  let i = e.nHeight || 0,
                    n = Math.ceil(e.nBandwidth / 1e3);
                  (0, a.q_)(
                    `${this.GetDebugName()} changing representation to ${i}p at ${n}KB for segment ${this.m_nNextSegment}`,
                  );
                }
                (this.m_representation = e),
                  this.m_stats.SetRepresentation(e),
                  this.CreateSourceBuffferIfNeeded(e);
              }
              t && this.UpgradeBufferedVideo();
            }
          }
          CreateSourceBuffferIfNeeded(e) {
            if (this.m_sourceBuffer.HasAttachedBuffer()) return;
            if (!this.m_mediaSource) {
              (0, a.ZI)("Create buffer called before media source set");
              return;
            }
            const t = e.strMimeType + ";codecs=" + e.strCodecs;
            try {
              let i = this.m_mediaSource.addSourceBuffer(t);
              this.m_sourceBuffer.Attach(i),
                (0, a.q_)(t),
                this.m_listeners.AddEventListener(
                  i,
                  "updateend",
                  this.OnSourceBufferUpdateEnd,
                ),
                this.m_listeners.AddEventListener(
                  i,
                  "error",
                  this.OnSourceBufferError,
                ),
                this.m_listeners.AddEventListener(
                  i,
                  "abort",
                  this.OnSourceBufferAbort,
                );
            } catch (i) {
              if (i instanceof DOMException && i.name === "NotSupportedError")
                this.OnMediaUnsupportedError(t);
              else throw i;
            }
          }
          Close() {
            this.m_listeners.Unregister(),
              this.m_sourceBuffer.Detach(),
              this.ForceStopDownloads(),
              this.m_mapInitSegments.clear(),
              (this.m_strLastFedInitSegmentRep = ""),
              (this.m_bSourceBufferQuotaExceeded = !1),
              (this.m_bRemoveBufferState = !1),
              (this.m_mediaSource = null),
              (this.m_nTrackBufferMS = 0),
              (this.m_representation = null),
              (this.m_rgBufferedSegments = []),
              (this.m_nNextSegment = 0),
              (this.m_bSeekInProgress = !1),
              (this.m_rgDownloadLog = []),
              (this.m_callbacks = null),
              (this.m_mpd = null),
              (this.m_adaptation = null),
              (this.m_stats = null);
          }
          GetActiveDownloads() {
            return this.m_xhrDownload ? 1 : 0;
          }
          GetActiveDownloadProgress() {
            return this.GetActiveDownloads() ? this.m_nCurDownloadProgress : 0;
          }
          OnSourceBufferUpdateEnd() {
            let e = this.m_callbacks.GetCurrentPlayTime(),
              t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e);
            (0, a.q_)(
              `${this.GetDebugName()} OnSourceBufferUpdateEnd: [playback=${e}][remaining=${t}][start=${this.m_sourceBuffer.GetBufferedStartSec()}][end=${this.m_sourceBuffer.GetBufferedEndSec()}]`,
            );
            let i = this.m_sourceBuffer.GetBufferState();
            this.m_sourceBuffer.BufferUpdateComplete(),
              i == le.Append && this.m_callbacks.OnSegmentBuffered(this),
              this.m_bSeekInProgress &&
                i == le.Remove &&
                !this.m_bRemoveBufferState &&
                this.ContinueSeek(),
              this.UpdateBuffer();
          }
          DebugSpewBufferedSegments() {
            if (!this.m_representation) return;
            let e = this.m_callbacks.GetCurrentPlayTime(),
              t = "[",
              i = d(this.m_mpd, this.m_representation, e * 1e3);
            for (let n of this.m_rgBufferedSegments)
              (t += n.representation.strID),
                n.nSegmentIndex == i && (t += "|"),
                (t += ",");
            (t += "]"), console.warn(t);
          }
          OnMediaUnsupportedError(e) {
            console.log("OnMediaUnsupportedError", this.GetDebugName(), e),
              this.m_callbacks.OnMediaUnsupportedError(this, e);
          }
          OnSourceBufferError(e) {
            console.log("OnSourceBufferError", this.GetDebugName(), e),
              this.m_callbacks.OnMediaSourceError(this);
          }
          OnSourceBufferAbort(e) {
            console.log("OnSourceBufferAbort", this.GetDebugName(), e);
          }
          ScheduleNextDownload() {
            if ((this.m_schNextDownload.Cancel(), this.m_xhrDownload)) {
              (0, a.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - download already going`,
              );
              return;
            }
            if (this.m_bSeekInProgress) {
              (0, a.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - seeking`,
              );
              return;
            }
            if (this.m_nNextSegment > this.GetMaxSegment()) {
              (0, a.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - reached max segment`,
              );
              return;
            }
            if (!this.m_representation) {
              (0, a.ZI)(
                `${this.GetDebugName()} ScheduleNextDownload - Called without a representation`,
              );
              return;
            }
            if (!this.m_mapInitSegments.has(this.m_representation.strID)) {
              (0, a.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - downloading init segment for ${this.m_representation.strID}`,
              ),
                this.DownloadInitSegment(this.m_representation);
              return;
            }
            let e = Re(this.m_mpd, this.m_representation, this.m_nNextSegment);
            if (e > 0) {
              (0, a.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - segment in future`,
              ),
                this.m_schNextDownload.Schedule(e, this.ScheduleNextDownload);
              return;
            }
            let t = this.m_callbacks.GetCurrentPlayTime(),
              i = this.m_callbacks.GetPlaybackRate();
            if (this.IsSegmentBuffered(this.m_nNextSegment)) {
              (0, a.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - buffered segment upgrade - downloading now`,
              ),
                this.DownloadNextSegment();
              return;
            }
            let n = this.GetAmountBufferedMS(t);
            if ((i > 1 && (n = n / i), n < Te * 1e3)) {
              (0, a.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - have ${n} buffered, desire ${Te * 1e3} - downloading now`,
              ),
                this.DownloadNextSegment();
              return;
            }
            let o = m(this.m_representation) * 1.1,
              h = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(
                this.m_callbacks.GetCurrentPlayTime(),
              );
            (0, a.q_)(
              `${this.GetDebugName()} ScheduleNextDownload - buffered, schedule later [sleep=${o}ms][buffer=${h}]`,
            ),
              this.m_schNextDownload.Schedule(o, this.ScheduleNextDownload);
          }
          DownloadInitSegment(e) {
            this.m_schNextDownload.Cancel();
            let t = K(e);
            this.DownloadSegment(e, De, t);
          }
          DownloadNextSegment() {
            if ((this.m_schNextDownload.Cancel(), this.m_nNextSegment < 0)) {
              console.error(
                "Attempting to download negative segment:",
                this.m_nNextSegment,
              );
              return;
            }
            if (!this.m_representation) {
              console.error(
                "Download next called without a representation",
                this.m_nNextSegment,
              );
              return;
            }
            let e = Ae(this.m_representation, this.m_nNextSegment);
            this.DownloadSegment(this.m_representation, this.m_nNextSegment, e);
          }
          async DownloadSegment(e, t, i, n = performance.now()) {
            (0, A.wT)(
              this.m_xhrDownload === null,
              "Trying to download another segment while a download is already in flight",
            ),
              this.m_schNextDownload.Cancel();
            const o = this.m_callbacks.GetCDNAuthURLParameter();
            let h = i;
            o && (h = i + o),
              (0, a.q_)(`${this.GetDebugName()} Downloading: ` + h);
            let u = null,
              f = performance.now(),
              S = V().CancelToken.source(),
              y;
            try {
              (this.m_nCurDownloadProgress = 0), (this.m_xhrDownload = S);
              let C = {
                cancelToken: this.m_xhrDownload.token,
                timeout: Ne,
                responseType: "arraybuffer",
                onDownloadProgress: (P) => {
                  (this.m_nCurDownloadProgress = P.loaded / P.total),
                    (this.m_nCurDownloadBitrate =
                      (P.loaded * 8 * 1e3) /
                      Math.max(1, performance.now() - f));
                },
              };
              u = await V().get(h, C);
            } catch (C) {
              (y = C), V().isAxiosError(C) && C.response && (u = C.response);
            }
            if (!this.m_xhrDownload || this.m_xhrDownload != S) {
              (0, a.q_)(`Throwing away cancelled download: ${h}`);
              return;
            }
            y &&
              (0, a.q_)(
                `${this.GetDebugName()} Failed to download segment: ${h}`,
                y,
              );
            let D = performance.now(),
              M = Math.floor(performance.now() - f),
              R = u ? u.status : 0;
            if (((this.m_xhrDownload = null), this.m_bSeekInProgress)) {
              (0, a.q_)(
                `${this.GetDebugName()} Throwing away download due to seek: ${h}`,
              ),
                this.ContinueSeek();
              return;
            }
            if (!u || u.status != 200) {
              this.m_stats.LogSegmentDownloadFailure(M, u ? u.status : 444);
              let C = xe;
              if (D - n > Oe) {
                if (this.m_callbacks.GetTimeoutAfterFailedDownload()) {
                  (0, a.q_)(
                    `${this.GetDebugName()} HTTP download failed.. stopping loader: ${D - n}ms`,
                  ),
                    this.DownloadFailed();
                  return;
                }
                C = Ee;
              }
              if (R == 410) {
                (this.m_nNumConsecutiveDownloadGones += 1),
                  (0, a.q_)(
                    `${this.GetDebugName()} HTTP download gone.. informing the player: ${D - n}ms`,
                  ),
                  this.DownloadGone();
                return;
              }
              this.m_schNextDownload.Schedule(C, () =>
                this.DownloadSegment(e, t, i, n),
              );
              return;
            }
            this.m_nNumConsecutiveDownloadGones = 0;
            let F = new Uint8Array(u.data);
            if (t == De) this.m_mapInitSegments.set(e.strID, F);
            else {
              let C = this.m_rgBufferedSegments.find(
                (P) => P.nSegmentIndex == t,
              );
              if (!this.BAdvanceNextSegment(t, C)) {
                (0, a.q_)(
                  `${this.GetDebugName()} Downloaded unexpected segment compared to buffers.. stopping playback`,
                ),
                  this.DownloadFailed();
                return;
              }
              if (C) (C.representation = e), (C.data = F);
              else {
                let P = T(e, t),
                  te = this.m_mpd.GetEndTime(),
                  W = m(e);
                (W = Math.min((te - P) * 1e3, W)),
                  this.m_rgBufferedSegments.push({
                    representation: e,
                    nSegmentIndex: t,
                    nStartPTS: P,
                    nDurationMS: W,
                    data: F,
                  });
              }
              this.LogDownload(f, F.length),
                this.UpdateBuffer(),
                this.m_callbacks.OnSegmentDownloaded(this);
            }
            (0, a.q_)(
              `HTTP ${R} (${M}ms, ${Math.floor(F.length / 1e3)}k): ${h}`,
            ),
              this.ScheduleNextDownload();
          }
          BAdvanceNextSegment(e, t) {
            let i = this.m_rgBufferedSegments.length;
            if (
              (i == 0 && t) ||
              (!t &&
                i > 0 &&
                this.m_rgBufferedSegments[i - 1].nSegmentIndex != e - 1)
            )
              return !1;
            if (!t) return (this.m_nNextSegment = e + 1), !0;
            let n = this.m_rgBufferedSegments.find(
              (o) => o.nSegmentIndex > e && this.BCanUpgradeBufferedSegment(o),
            );
            return n
              ? ((this.m_nNextSegment = n.nSegmentIndex), !0)
              : ((this.m_nNextSegment =
                  this.m_rgBufferedSegments[i - 1].nSegmentIndex + 1),
                !0);
          }
          DownloadFailed() {
            this.m_callbacks.OnSegmentDownloadFailed(this);
          }
          DownloadGone() {
            this.m_callbacks.OnSegmentDownloadGone(this);
          }
          CurrentTimeChanged() {
            this.UpdateBuffer();
          }
          UpdateBuffer() {
            if (this.m_sourceBuffer.GetBufferState() != le.None) return;
            if (this.m_bRemoveBufferState) {
              this.RemoveAllBuffers();
              return;
            }
            if (!this.m_sourceBuffer.HasAttachedBuffer()) {
              (0, a.q_)("No source buffer?");
              return;
            }
            if (!this.m_representation) {
              (0, a.ZI)("Update buffer - no representation?");
              return;
            }
            let e = this.m_callbacks.GetCurrentPlayTime(),
              t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e) / 1e3,
              i = d(this.m_mpd, this.m_representation, e * 1e3),
              n = this.m_rgBufferedSegments.find(
                (y) => y.data && y.nSegmentIndex >= i,
              ),
              o = n && (t < ce || n.nStartPTS - e < ce);
            if (!this.m_bSourceBufferQuotaExceeded && o && n) {
              let y = n.data,
                D = n.representation.strID;
              if (this.m_strLastFedInitSegmentRep != D) {
                let R = this.m_mapInitSegments.get(D);
                if (!R) {
                  (0, a.ZI)(
                    `${this.GetDebugName()} Missing init segment for representation=${D}`,
                  ),
                    this.m_callbacks.OnMediaSourceError(this);
                  return;
                }
                (y = R), (n = void 0);
              }
              let M = this.m_sourceBuffer.AppendBuffer(y);
              if (
                ((this.m_bSourceBufferQuotaExceeded = Ge(M)),
                M && !this.m_bSourceBufferQuotaExceeded)
              ) {
                (0, a.q_)(`${this.GetDebugName()} MSE Buffer - Exception`, M);
                return;
              }
              if (!M) {
                n ? (n.data = null) : (this.m_strLastFedInitSegmentRep = D);
                return;
              }
            }
            let h = this.m_bSourceBufferQuotaExceeded ? He : $e,
              u = this.m_sourceBuffer.GetBufferedStartSec(),
              f = this.m_sourceBuffer.GetBufferedEndSec() - u,
              S = e - u;
            if (f && S >= h) {
              let y = d(this.m_mpd, this.m_representation, (e - h) * 1e3),
                D = T(this.m_representation, y) - 0.01;
              if (D > u) {
                this.m_sourceBuffer.Remove(0, D),
                  (this.m_rgBufferedSegments = this.m_rgBufferedSegments.filter(
                    (M) => M.nSegmentIndex >= y,
                  )),
                  (this.m_bSourceBufferQuotaExceeded = !1),
                  (0, a.q_)(
                    `${this.GetDebugName()} Trim MSE buffer before ${D} (segment=${y})`,
                  );
                return;
              }
            }
          }
          RemoveAllBuffers() {
            (this.m_bRemoveBufferState = !1),
              (this.m_bSourceBufferQuotaExceeded = !1);
            let e = !1;
            this.m_sourceBuffer.HasAttachedBuffer() &&
              (e = this.m_sourceBuffer.RemoveAll()),
              this.m_sourceBuffer.MarkAsRemoving(),
              e || this.OnSourceBufferUpdateEnd();
          }
          ForceStopDownloads() {
            this.m_schNextDownload.Cancel(),
              this.m_xhrDownload &&
                (this.m_xhrDownload.cancel(), (this.m_xhrDownload = null));
          }
          ForceRestartDownload() {
            this.ForceStopDownloads(), this.ScheduleNextDownload();
          }
          Seek(e) {
            let t = this.m_sourceBuffer.GetBufferedStartSec(),
              i = this.m_sourceBuffer.GetBufferedEndSec(),
              n = e >= t && e < i;
            if (
              (t == 0 && i == 0 && (n = !1),
              (0, a.q_)(
                `${this.GetDebugName()} making an ${n ? "source buffer" : "out of source buffer"} seek to ${e}`,
              ),
              !this.m_bSeekInProgress && n)
            ) {
              this.ScheduleNextDownload();
              return;
            }
            if (!this.m_representation) {
              (0, a.ZI)("Seek without representation?");
              return;
            }
            let o = d(this.m_mpd, this.m_representation, e * 1e3),
              h = this.m_rgBufferedSegments.findIndex(
                (u) => u.data && u.nSegmentIndex == o,
              );
            if (h >= 0)
              (this.m_rgBufferedSegments = this.m_rgBufferedSegments.slice(h)),
                (0, a.q_)(
                  "Partially buffered seek To Next Segment: " +
                    this.m_nNextSegment +
                    " at approx. " +
                    (0, a.ap)(
                      ((this.m_nNextSegment - 1) *
                        this.GetCurrentSegmentDurationMS()) /
                        1e3,
                    ) +
                    " seconds.",
                );
            else {
              this.ForceStopDownloads(), (this.m_rgBufferedSegments = []);
              let u = d(this.m_mpd, this.m_representation, e * 1e3);
              (this.m_nNextSegment = Math.min(u, this.GetMaxSegment())),
                (0, a.q_)(
                  "Seek To Next Segment: " +
                    this.m_nNextSegment +
                    " at approx. " +
                    (0, a.ap)(
                      ((this.m_nNextSegment - 1) *
                        this.GetCurrentSegmentDurationMS()) /
                        1e3,
                    ) +
                    " seconds.",
                );
            }
            (this.m_bSeekInProgress = !0),
              (this.m_bRemoveBufferState = !0),
              this.UpdateBuffer();
          }
          ContinueSeek() {
            this.m_bSeekInProgress &&
              (this.m_sourceBuffer.GetBufferState() == le.Remove ||
                this.m_bRemoveBufferState ||
                ((this.m_bSeekInProgress = !1), this.ScheduleNextDownload()));
          }
          UpgradeBufferedVideo() {
            if (!this.m_representation) return;
            let e = m(this.m_representation),
              t = this.m_callbacks.GetCurrentPlayTime() * 1e3,
              i = d(this.m_mpd, this.m_representation, t + e),
              n = this.m_rgBufferedSegments.find(
                (o) =>
                  o.nSegmentIndex >= i && this.BCanUpgradeBufferedSegment(o),
              );
            n &&
              this.m_nNextSegment != n.nSegmentIndex &&
              ((0, a.q_)(
                `Upgrading buffered segment ${n.nSegmentIndex} from rep ${n.representation.strID} to ${this.m_representation.strID}`,
              ),
              this.ForceStopDownloads(),
              (this.m_nNextSegment = n.nSegmentIndex),
              this.ScheduleNextDownload());
          }
          BCanUpgradeBufferedSegment(e) {
            if (!this.m_representation) return !1;
            let t = this.m_representation.nHeight || 0;
            return (e.representation.nHeight || 0) < t;
          }
          BHasEnoughBuffered(e) {
            if (this.m_bSeekInProgress) return !1;
            if (
              !this.m_xhrDownload &&
              !this.m_schNextDownload.IsScheduled() &&
              this.m_nNextSegment > this.GetMaxSegment()
            )
              return !0;
            let t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e);
            if (t > this.m_nTrackBufferMS) return !0;
            let i = this.GetAmountBufferedMS(e);
            return t >= ce * 1e3 && i >= this.m_nTrackBufferMS;
          }
          LogDownload(e, t) {
            this.m_rgDownloadLog.length >= Ue && this.m_rgDownloadLog.shift();
            let i = performance.now() - e;
            i <= 0 ||
              (this.m_rgDownloadLog.push({ cubData: t, nDownloadMS: i }),
              this.m_stats.LogDownload(t, i));
          }
          GetDownloadHistory() {
            return this.m_rgDownloadLog;
          }
          GetAvgDownloadRate() {
            let e = 0,
              t = 0;
            for (let i of this.m_rgDownloadLog)
              (e += i.nDownloadMS), (t += i.cubData);
            return e <= 0
              ? this.m_nCurDownloadBitrate && this.GetActiveDownloads() > 0
                ? this.m_nCurDownloadBitrate
                : 0
              : (t * 8 * 1e3) / e;
          }
          GetAvgDownloadRateSampleCount() {
            return this.m_rgDownloadLog.length;
          }
        }
        Z([_.o], j.prototype, "OnSourceBufferUpdateEnd", 1),
          Z([_.o], j.prototype, "OnMediaUnsupportedError", 1),
          Z([_.o], j.prototype, "OnSourceBufferError", 1),
          Z([_.o], j.prototype, "OnSourceBufferAbort", 1),
          Z([_.o], j.prototype, "ScheduleNextDownload", 1),
          Z([_.o], j.prototype, "DownloadInitSegment", 1),
          Z([_.o], j.prototype, "DownloadNextSegment", 1),
          Z([_.o], j.prototype, "DownloadFailed", 1),
          Z([_.o], j.prototype, "DownloadGone", 1),
          Z([_.o], j.prototype, "CurrentTimeChanged", 1);
        var pe = B(14043),
          We = B(30096),
          qe = Object.defineProperty,
          ze = Object.getOwnPropertyDescriptor,
          c = (r, e, t, i) => {
            for (
              var n = i > 1 ? void 0 : i ? ze(e, t) : e, o = r.length - 1, h;
              o >= 0;
              o--
            )
              (h = r[o]) && (n = (i ? h(e, t, n) : h(n)) || n);
            return i && n && qe(e, t, n), n;
          };
        const je = 30 * 1e3,
          Qe = 8e3,
          Xe = 30,
          Ke = 6e4,
          Ze = 5,
          Je = 300,
          ye = 250,
          Ye = 0.55,
          Be = 30,
          et = 10,
          be = 5,
          tt = 4.5,
          it = 1,
          Se = 1.1,
          me = 1,
          nt = 3,
          rt = !1,
          st = 250;
        var at = ((r) => (
            (r[(r.HAVE_NOTHING = 0)] = "HAVE_NOTHING"),
            (r[(r.HAVE_METADATA = 1)] = "HAVE_METADATA"),
            (r[(r.HAVE_CURRENT_DATA = 2)] = "HAVE_CURRENT_DATA"),
            (r[(r.HAVE_FUTURE_DATA = 3)] = "HAVE_FUTURE_DATA"),
            (r[(r.HAVE_ENOUGH_DATA = 4)] = "HAVE_ENOUGH_DATA"),
            r
          ))(at || {}),
          Me = ((r) => (
            (r[(r.Invalid = 0)] = "Invalid"),
            (r[(r.StreamGone = 1)] = "StreamGone"),
            (r[(r.PlaybackError = 2)] = "PlaybackError"),
            (r[(r.UnsupportedMediaType = 3)] = "UnsupportedMediaType"),
            r
          ))(Me || {}),
          ot = ((r) => (
            (r[(r.Absolute = 0)] = "Absolute"),
            (r[(r.FromAvailableStart = 1)] = "FromAvailableStart"),
            r
          ))(ot || {}),
          lt = ((r) => (
            (r[(r.Invalid = 0)] = "Invalid"),
            (r[(r.Success = 1)] = "Success"),
            (r[(r.Timeout = 2)] = "Timeout"),
            (r[(r.Gone = 3)] = "Gone"),
            (r[(r.PlayerClosing = 4)] = "PlayerClosing"),
            r
          ))(lt || {});
        function de(r) {
          (0, A.wT)(r, "MPD assert failed");
        }
        class g {
          m_elVideo;
          m_strMPD = "";
          m_strHLS = "";
          m_strCaptions = "";
          m_strCDNAuthURLParameters = "";
          m_bTimeoutAfterFailedDownload = !0;
          m_bAlwaysStartWithSubtitles = !1;
          m_bMuteOnAutoplayBlocked = !1;
          m_schUpdateMPD = new N.LU();
          m_xhrUpdateMPD = null;
          m_xhrCaptionManifest = null;
          m_mpd = null;
          m_bUseHLSManifest = !1;
          m_strVideoAdaptationID = "";
          m_strAudioAdaptationID = "";
          m_rgLoaders = [];
          m_mediaSource = null;
          m_nTrackBufferMS = 0;
          m_nLimitFPS = 0;
          m_bIsBuffering = !0;
          m_seekingToTime = null;
          m_listeners = new N.Ji();
          m_resizeObserver = null;
          m_schPlayerResizeDelay = new N.LU();
          m_nPlayerHeightForAuto = 0;
          m_bFirstPlay = !0;
          m_bPlaybackStarted = !1;
          m_bPlaybackEnded = !1;
          m_nLastPlaytimeLoaders = 0;
          m_nTimedText = 0;
          m_strActiveTextTrack = null;
          m_schReportPlayerTrigger = new N.LU();
          m_bStatsViewVisible = !1;
          m_schCaptureDisplayStatsTrigger = new N.LU();
          m_videoRepSelected = null;
          m_rgCaptions = null;
          m_stats = new se._L();
          m_bClosing = !1;
          m_hlsTimeOffset = 0;
          m_bUserPlayChoice = !0;
          m_bUserLiveEdgeChoice = !0;
          m_schFirstFrameThrottler = new N.LU();
          m_bookMarkAdapter = null;
          m_schBookmarkUpdater = new N.LU();
          m_watchedIntervals = new _t();
          constructor(e) {
            (0, J.Gn)(this),
              (this.m_elVideo = e),
              this.m_schReportPlayerTrigger.Schedule(
                Xe * 1e3,
                this.ReportPlayerStats,
              );
          }
          BInitialized() {
            return !!this.m_strMPD;
          }
          CalcVideoStartRelativeToSystemClock(e) {
            de(this.m_mpd);
            let i =
              (e ? new Date(e).getTime() : Date.now()) -
              this.m_mpd.GetAvailabilityStartTime().getTime();
            this.m_mpd.StartLiveContentNow(i), (0, a.q_)("server time: " + e);
          }
          GetMPDURL() {
            return this.m_strMPD;
          }
          GetHLSURL() {
            return this.m_strHLS;
          }
          IsPlayingHLS() {
            return this.m_bUseHLSManifest;
          }
          SetTimeoutAfterFailedDownload(e) {
            this.m_bTimeoutAfterFailedDownload = e;
          }
          SetAlwaysStartWithSubtitles(e) {
            this.m_bAlwaysStartWithSubtitles = e;
          }
          SetMuteOnAutoplayBlocked(e) {
            this.m_bMuteOnAutoplayBlocked = e;
          }
          async PlayMPD(e, t, i, n) {
            (e = Array.isArray(e) ? e : [e]),
              this.m_stats.StartingPlayback(),
              (this.m_strCDNAuthURLParameters = n || "");
            let o = null;
            for (let h of e) {
              let [u, f] = await this.DownloadMPD(
                h,
                this.m_strCDNAuthURLParameters,
              );
              if (!f) {
                let M =
                  u == 3
                    ? "Failed to download MPD: 410 Gone"
                    : "Timed out downloading MPD";
                this.CloseWithError(2, M);
                return;
              }
              let S = new Le();
              if (!S.BParse(f.data, h)) {
                this.CloseWithError(
                  2,
                  "Failed to parse MPD file",
                  this.m_strMPD,
                );
                return;
              }
              let y = dt(S),
                D = ht(y);
              if (
                ((o = {
                  strMPD: h,
                  mpd: S,
                  strServerTime: f.headers.date,
                  strCanPlay: y,
                  bCanPlay: D,
                }),
                D)
              )
                break;
            }
            if (!o) {
              this.CloseWithError(2, "Invalid manifest");
              return;
            }
            if (
              ((this.m_strMPD = o.strMPD), (this.m_mpd = o.mpd), !o.bCanPlay)
            ) {
              if (!t || !ut(this.m_elVideo)) {
                this.OnMediaUnsupportedError(), this.Close();
                return;
              }
              (this.m_strHLS = t), (this.m_bUseHLSManifest = !0);
            }
            if (
              (i && (await this.DownloadCaptionManifest(i)),
              this.DispatchEvent("valve-metadatachanged"),
              this.IsLiveContent() &&
                (this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
                  this.m_schUpdateMPD.Schedule(
                    this.m_mpd.GetMinimumUpdatePeriod() * 1e3,
                    this.UpdateMPD,
                  ),
                this.CalcVideoStartRelativeToSystemClock(o.strServerTime)),
              this.IsLiveContent() || this.m_watchedIntervals.Enable(),
              this.m_bUseHLSManifest)
            ) {
              (this.m_elVideo.src = this.m_strHLS),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "loadedmetadata",
                  this.OnLoadedMetadataForHLS,
                ),
                this.m_listeners.AddEventListener(
                  document,
                  "visibilitychange",
                  this.OnVisibilityChangeForHLS,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "canplay",
                  this.OnVideoCanPlayHLS,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "play",
                  this.OnVideoPlay,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "seeking",
                  this.OnVideoSeeking,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "seeked",
                  this.OnVideoSeeked,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "pause",
                  this.OnVideoPause,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "ended",
                  this.OnEndedForHLS,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo.textTracks,
                  "change",
                  this.CheckActiveTextTrack,
                ),
                console.assert(this.BInitialized());
              return;
            }
            if (!this.BCreateLoaders()) {
              this.CloseWithError(2, "Failed to create segment loaders");
              return;
            }
            this.InitVideoControl(),
              this.InitTimedText(),
              console.assert(this.BInitialized());
          }
          InitTimedText() {
            de(this.m_mpd);
            let e = [];
            if (this.m_rgCaptions) e = this.m_rgCaptions;
            else
              for (let i of this.m_mpd.GetTimedTextAdaptionSet(0))
                i.rgRepresentations.length == 0 ||
                  !i.rgRepresentations[0].strClosedCaptionFile ||
                  !(i.strLanguage in H.bi) ||
                  e.push({
                    m_strURL: i.rgRepresentations[0].strClosedCaptionFile,
                    m_strLanguageBCP47: i.strLanguage,
                  });
            this.m_nTimedText = 0;
            let t = (0, ee.sfN)(x.TS.LANGUAGE);
            for (let i of e) {
              const n = document.createElement("track");
              (n.kind = "captions"),
                (n.label = ft(i.m_strLanguageBCP47)),
                (n.srclang = i.m_strLanguageBCP47),
                (n.src = i.m_strURL),
                (this.m_bAlwaysStartWithSubtitles || t != ee.Bhc) &&
                  H.bi[i.m_strLanguageBCP47] == t &&
                  (n.default = !0),
                this.m_elVideo.appendChild(n),
                (this.m_nTimedText += 1);
            }
          }
          SetSubtitles(e) {
            for (let t = 0; t < this.m_elVideo.textTracks.length; t++) {
              const i = this.m_elVideo.textTracks[t],
                n = H.bi[i.language] == e ? "showing" : "disabled";
              i.mode = n;
            }
          }
          CheckActiveTextTrack() {
            let e = "";
            for (let t = 0; t < this.m_elVideo.textTracks.length; t++) {
              const i = this.m_elVideo.textTracks[t];
              i.mode == "showing" && (e = i.language);
            }
            e !== this.m_strActiveTextTrack &&
              ((this.m_strActiveTextTrack = e),
              this.DispatchEvent("valve-captionschange"));
          }
          OnLoadedMetadataForHLS() {
            this.m_bUseHLSManifest &&
              ((this.m_bIsBuffering = !1),
              this.BeginPlaybackHLS(),
              this.CheckActiveTextTrack(),
              this.DispatchEvent("valve-bufferupdate"));
          }
          OnVisibilityChangeForHLS() {
            this.m_bUseHLSManifest &&
              document.visibilityState === "visible" &&
              (this.m_elVideo.src = this.m_strHLS);
          }
          OnEndedForHLS() {
            this.m_bUseHLSManifest && this.EndPlayback();
          }
          EndPlayback() {
            this.Pause(),
              !this.m_bPlaybackEnded &&
                ((this.m_bPlaybackEnded = !0),
                this.m_watchedIntervals.OnEnded(this.m_elVideo),
                this.DispatchEvent("valve-ended"));
          }
          Close() {
            if (
              ((this.m_bClosing = !0),
              this.m_listeners.Unregister(),
              this.m_schPlayerResizeDelay.Cancel(),
              (this.m_nPlayerHeightForAuto = 0),
              this.m_resizeObserver &&
                (this.m_resizeObserver.disconnect(),
                (this.m_resizeObserver = null)),
              this.StopDownloads(),
              this.m_elVideo.pause(),
              this.m_mediaSource)
            ) {
              try {
                this.m_mediaSource.readyState != "closed" &&
                  this.m_mediaSource.endOfStream();
              } catch {}
              this.m_mediaSource = null;
            }
            (this.m_bIsBuffering = !0),
              (this.m_strMPD = ""),
              (this.m_mpd = null),
              (this.m_strCaptions = ""),
              (this.m_bUseHLSManifest = !1),
              (this.m_strVideoAdaptationID = ""),
              (this.m_strAudioAdaptationID = ""),
              (this.m_nTrackBufferMS = 0),
              (this.m_nLimitFPS = 0),
              (this.m_seekingToTime = null),
              (this.m_bStatsViewVisible = !1),
              (this.m_videoRepSelected = null),
              (this.m_rgCaptions = null),
              this.m_stats && this.m_stats.GetFPSMonitor().Close(),
              (this.m_stats = new se._L()),
              (this.m_bFirstPlay = !0),
              (this.m_bPlaybackStarted = !1),
              (this.m_bPlaybackEnded = !1),
              (this.m_nLastPlaytimeLoaders = 0),
              (this.m_strActiveTextTrack = null),
              this.m_watchedIntervals.Clear(),
              console.assert(!this.BInitialized());
          }
          StopDownloads() {
            this.m_xhrUpdateMPD &&
              (this.m_xhrUpdateMPD.cancel(), (this.m_xhrUpdateMPD = null)),
              this.m_xhrCaptionManifest &&
                (this.m_xhrCaptionManifest.cancel(),
                (this.m_xhrCaptionManifest = null)),
              this.m_schUpdateMPD.Cancel(),
              this.m_schReportPlayerTrigger.Cancel(),
              this.m_schCaptureDisplayStatsTrigger.Cancel(),
              this.m_schFirstFrameThrottler.Cancel(),
              this.m_schBookmarkUpdater.Cancel(),
              this.m_elVideo.playbackRate != me &&
                (this.m_elVideo.playbackRate = me);
            for (let e of this.m_rgLoaders) e.Close();
            (this.m_rgLoaders = []), (this.m_bIsBuffering = !0);
          }
          IsBuffering() {
            return this.m_bIsBuffering;
          }
          IsLiveContent() {
            return this.m_mpd ? this.m_mpd.IsLiveContent() : !1;
          }
          async DownloadMPD(e, t) {
            if (((t = t || ""), this.m_xhrUpdateMPD))
              return (0, A.wT)(!1, "Multiple MPD download requests"), [2, null];
            let i = performance.now();
            for (; performance.now() - i < je; ) {
              let n = null;
              try {
                this.m_xhrUpdateMPD = V().CancelToken.source();
                const o = e + t;
                n = await V().get(o, {
                  cancelToken: this.m_xhrUpdateMPD.token,
                });
              } catch {}
              if (((this.m_xhrUpdateMPD = null), this.m_bClosing))
                return [4, null];
              if (n && n.status == 200) return [1, n];
              if (n && n.status == 410) return [3, null];
              (0, a.q_)("Failed to download, will retry: " + this.m_strMPD),
                await (0, q.IP)(200);
            }
            return (0, a.q_)("Failed to download: " + this.m_strMPD), [2, null];
          }
          async UpdateMPD() {
            de(this.m_mpd),
              (0, a.q_)("Updating MPD in player from: " + this.m_strMPD);
            let [e, t] = await this.DownloadMPD(
              this.m_strMPD,
              this.m_strCDNAuthURLParameters,
            );
            if (!t) {
              e == 3 &&
                this.CloseWithError(2, "Failed to download MPD: 410 Gone");
              return;
            }
            if (!this.m_mpd.BUpdate(t.data)) {
              this.CloseWithError(2, "Failed to parse on Update the MPD file");
              return;
            }
            this.IsLiveContent() &&
              this.CalcVideoStartRelativeToSystemClock(t.headers.date),
              this.m_stats.SetAnalyticLinks(
                this.m_mpd.GetStatsLink(),
                this.m_mpd.GetStalledLink(),
                this.m_mpd.GetEventLink(),
              ),
              this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
                this.m_schUpdateMPD.Schedule(
                  this.m_mpd.GetMinimumUpdatePeriod() * 1e3,
                  this.UpdateMPD,
                ),
              this.DispatchEvent("valve-metadatachanged");
          }
          async DownloadCaptionManifest(e) {
            let t = null;
            try {
              (this.m_xhrCaptionManifest = V().CancelToken.source()),
                (t = await V().get(e, {
                  cancelToken: this.m_xhrCaptionManifest.token,
                }));
            } catch {
              return;
            }
            if (((this.m_xhrCaptionManifest = null), !t || t.status != 200))
              return;
            let i = typeof t.data == "string" ? JSON.parse(t.data) : t.data;
            if (!(!i || !Array.isArray(i.captions))) {
              this.m_rgCaptions = [];
              for (let n of i.captions) {
                if (!n.url || !n.lang || !(n.lang in H.bi)) continue;
                let o = new URL(n.url, e).href;
                this.m_rgCaptions.push({
                  m_strURL: o,
                  m_strLanguageBCP47: n.lang,
                });
              }
              this.m_strCaptions = e;
            }
          }
          CloseWithError(e, ...t) {
            this.DispatchEvent("valve-downloadfailed", e),
              this.Close(),
              (0, a.q_)(...t);
          }
          BCreateLoaders() {
            de(this.m_mpd);
            let e = this.m_mpd.GetPeriods();
            if (e.length == 0) return !1;
            let t = e[0];
            (this.m_strVideoAdaptationID = ""),
              (this.m_strAudioAdaptationID = "");
            for (let i of t.rgAdaptationSets) {
              let n = null;
              if (
                (!this.m_strVideoAdaptationID &&
                  i.bContainsVideo &&
                  s(i) &&
                  ((n = i), (this.m_strVideoAdaptationID = i.strID)),
                !this.m_strAudioAdaptationID &&
                  i.bContainsAudio &&
                  s(i) &&
                  ((n = i), (this.m_strAudioAdaptationID = i.strID)),
                n)
              ) {
                let o = new j(this, this.m_mpd, n, this.m_stats);
                this.m_rgLoaders.push(o);
              }
            }
            return this.m_strVideoAdaptationID.length > 0;
          }
          InitVideoControl() {
            let e = new MediaSource(),
              t = URL.createObjectURL(e);
            this.m_elVideo.pause(),
              (this.m_elVideo.srcObject = null),
              (this.m_elVideo.src = t),
              (this.m_mediaSource = e),
              this.m_listeners.AddEventListener(
                e,
                "sourceopen",
                this.OnMediaSourceOpen,
              ),
              this.m_listeners.AddEventListener(
                e,
                "sourceended",
                this.OnMediaSourceEnded,
              ),
              this.m_listeners.AddEventListener(
                e,
                "sourceclose",
                this.OnMediaSourceClose,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "waiting",
                this.OnVideoWaiting,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "error",
                this.OnVideoError,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "canplay",
                this.OnVideoCanPlay,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "resize",
                this.OnVideoResize,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-bufferupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "timeupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "play",
                this.OnVideoPlay,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "seeking",
                this.OnVideoSeeking,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "seeked",
                this.OnVideoSeeked,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo.textTracks,
                "change",
                this.CheckActiveTextTrack,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "loadedmetadata",
                this.OnLoadedMetadata,
              ),
              (this.m_nPlayerHeightForAuto = this.GetVideoPlayerHeight()),
              (this.m_resizeObserver = (0, We.Fd)(
                this.m_elVideo,
                this.OnPlayerResize,
              ));
          }
          OnPlayerResize(e, t) {
            let i = () => {
              this.GetVideoPlayerHeight() != this.m_nPlayerHeightForAuto &&
                ((this.m_nPlayerHeightForAuto = this.GetVideoPlayerHeight()),
                this.UpdateVideoRepresentation(!0));
            };
            this.m_schPlayerResizeDelay.Cancel(),
              this.m_schPlayerResizeDelay.Schedule(st, i);
          }
          OnMediaSourceOpen(e) {
            (0, A.wT)(this.m_mediaSource, "Missing Media Source"),
              (0, a.q_)("OnMediaSourceOpen");
            for (let t of this.m_rgLoaders)
              t.SetMediaSource(this.m_mediaSource);
            this.BeginPlayback();
          }
          HandleMediaSourceError(e) {
            !this.m_bClosing &&
              e.target == this.m_mediaSource &&
              this.StopDownloads();
          }
          OnMediaSourceEnded(e) {
            (0, a.q_)("OnMediaSourceEnded", e), this.HandleMediaSourceError(e);
          }
          OnMediaSourceClose(e) {
            (0, a.q_)("OnMediaSourceClose", e), this.HandleMediaSourceError(e);
          }
          OnVideoWaiting(e) {
            if (this.m_mpd) {
              if (this.IsAtEnd()) {
                (0, a.q_)(
                  `pausing playback due to OnVideoWaiting (endTime=${this.m_mpd.GetEndTime()}, currentPlaytime=${this.GetCurrentPlayTime()} )`,
                ),
                  this.EndPlayback();
                return;
              }
              if (
                !this.BIsPlayerBufferedBetween(
                  this.m_elVideo.currentTime,
                  this.m_elVideo.currentTime + 0.5,
                ) &&
                !(this.m_seekingToTime || !this.BInitialized())
              ) {
                if (this.m_elVideo.buffered.length > 1) {
                  let t = this.m_elVideo.currentTime,
                    i = this.m_elVideo.buffered;
                  for (let n = 0; n < i.length; ++n)
                    if (
                      ((0, a.q_)(
                        "OnVideoWaiting buffer " +
                          n +
                          " start:" +
                          i.start(n) +
                          " end: " +
                          i.end(n) +
                          " playerTime: " +
                          t,
                      ),
                      i.start(n) <= t && t <= i.end(n))
                    ) {
                      (0, a.q_)(
                        "OnVideoWaiting - time splitting, jumping to buffer " +
                          n,
                      ),
                        this.Seek(i.start(n));
                      return;
                    }
                }
                if (
                  (this.m_stats.ReportVideoStalled(
                    this.m_rgLoaders,
                    this.m_elVideo,
                  ),
                  (this.m_bIsBuffering = !0),
                  this.DispatchEvent("valve-bufferupdate"),
                  this.m_videoRepSelected === null)
                ) {
                  let t = !0,
                    i = this.GetVideoLoader();
                  if (i) {
                    let n = this.GetCurrentVideoAdaptation(),
                      o = n
                        ? this.m_mpd.GetLowestRepresentation(n.strID)
                        : null;
                    o &&
                      !i.BIsCurrentRepresentation(o) &&
                      (i.ChangeRepresentation(o, !1),
                      (0, a.q_)(
                        "OnVideoWaiting - Stalled, forced restart download at resolution: " +
                          o.nWidth +
                          "x" +
                          o.nHeight +
                          "@" +
                          o.nFrameRate +
                          " instead",
                      ),
                      (t = !1)),
                      this.Seek(this.m_elVideo.currentTime);
                  }
                  t &&
                    (0, a.q_)(
                      "OnVideoWaiting - Stalled, already at lowest resolution. No action taken. BHasLoader: " +
                        (i != null),
                    );
                } else {
                  let t = this.m_videoRepSelected;
                  (0, a.q_)(
                    `OnVideoWaiting - Stalled, user explicitly chose a resolution: ${t.nWidth}x${t.nHeight}@${t.nFrameRate}`,
                  );
                }
              }
            }
          }
          OnVideoPause(e) {
            this.m_bUseHLSManifest ||
              (this.OnVideoBufferProgress(),
              this.m_stats.GetFPSMonitor().Close(),
              this.SendUpdateToBookmarkServiceIfNeeded()),
              this.m_watchedIntervals.OnPause(this.m_elVideo);
          }
          OnVideoResize(e) {
            this.m_stats.GetFPSMonitor().SetWindowResized();
          }
          OnVideoError(e) {
            (0, a.q_)("OnVideoError");
          }
          OnVideoCanPlay(e) {
            this.m_bIsBuffering ||
              (this.m_bUserPlayChoice && this.PlayOnElement()),
              this.m_stats.LogVideoOnCanPlay();
          }
          OnVideoCanPlayHLS() {
            this.m_stats.LogVideoOnCanPlay();
          }
          OnLoadedMetadata() {
            this.CheckActiveTextTrack();
          }
          GetCurrentPlayTime() {
            if (!this.BInitialized()) return 0;
            if (this.m_seekingToTime) {
              if (
                !this.m_bPlaybackStarted &&
                this.m_seekingToTime.eSeekType == 1
              )
                return 0;
              let e =
                this.m_seekingToTime.eSeekType == 1
                  ? this.GetAvailableVideoStartTime()
                  : 0;
              return this.m_seekingToTime.nTime + e;
            }
            return this.m_bUseHLSManifest &&
              this.m_mpd &&
              this.m_mpd.IsLiveContent()
              ? (this.m_elVideo.currentTime > 0 &&
                  this.m_hlsTimeOffset === 0 &&
                  (this.m_hlsTimeOffset =
                    this.GetBufferedLiveEdgeTime() -
                    this.m_elVideo.currentTime),
                this.m_elVideo.currentTime + this.m_hlsTimeOffset)
              : this.m_elVideo.currentTime;
          }
          GetBufferedEndTime() {
            if (this.m_rgLoaders.length == 0) return 0;
            let e = Number.MAX_SAFE_INTEGER;
            for (let t of this.m_rgLoaders) e = Math.min(t.GetBufferedEnd(), e);
            return e;
          }
          OnVideoTimeUpdate() {
            if (!this.BInitialized()) return;
            let e = this.m_elVideo.currentTime;
            if (
              e < this.m_nLastPlaytimeLoaders ||
              e - this.m_nLastPlaytimeLoaders > 0.5
            ) {
              for (let t of this.m_rgLoaders) t.CurrentTimeChanged();
              this.m_nLastPlaytimeLoaders = e;
            }
            if (this.m_bUserLiveEdgeChoice && this.IsLiveContent()) {
              let t = this.GetBufferedLiveEdgeTime();
              if (
                this.m_elVideo.playbackRate == me &&
                this.m_elVideo.currentTime <= t - tt &&
                this.BIsPlayerBufferedBetween(this.m_elVideo.currentTime, t)
              ) {
                let i = t - this.m_elVideo.currentTime;
                (this.m_elVideo.playbackRate = Se),
                  (0, a.q_)(
                    "User is behind by " +
                      i.toFixed(2) +
                      " seconds, increasing playback speed to catch-up to live edge.",
                  );
              } else
                this.m_elVideo.playbackRate == Se &&
                  this.m_elVideo.currentTime >= t - it &&
                  ((this.m_elVideo.playbackRate = me),
                  (0, a.q_)("User is caught up, returning to normal playrate"));
            } else {
              const t = this.GetAvailableVideoStartTime(),
                i = this.GetBufferedLiveEdgeTime() - t;
              this.GetCurrentPlayTime() - t >= i && this.EndPlayback();
            }
          }
          SetBookmarkAdapter(e) {
            this.m_bookMarkAdapter = e;
          }
          SendUpdateToBookmarkServiceIfNeeded() {
            if (this.m_bookMarkAdapter) {
              let e = this.m_elVideo.currentTime;
              e = e >= 0 ? e : 0;
              let t = this.GetCurrentVideoAdaptation(),
                i = t && t.strID ? t.strID : "",
                n = this.GetCurrentAudioAdaptationfunction(),
                o = n && n.strID ? n.strID : "";
              this.m_bookMarkAdapter.SetBookmark(e, i, o, ""),
                this.IsPaused()
                  ? this.m_schBookmarkUpdater.Cancel()
                  : this.m_schBookmarkUpdater.Schedule(
                      Ke,
                      this.SendUpdateToBookmarkServiceIfNeeded,
                    );
            }
          }
          OnVideoPlay() {
            this.m_bUseHLSManifest ||
              (this.SendUpdateToBookmarkServiceIfNeeded(),
              this.m_stats
                .GetFPSMonitor()
                .StartTracking(() =>
                  this.m_stats.ExtractFrameInfo(this.m_elVideo),
                )),
              this.m_watchedIntervals.OnPlay(this.m_elVideo),
              (this.m_bPlaybackEnded = !1);
          }
          OnVideoSeeking() {
            this.m_watchedIntervals.OnSeeking(this.m_elVideo);
          }
          OnVideoSeeked() {
            this.m_watchedIntervals.OnSeeked(this.m_elVideo),
              (this.m_bPlaybackEnded = !1);
          }
          BIsPlayerBufferedBetween(e, t) {
            return (
              this.m_elVideo.buffered.length > 0 &&
              e >= this.m_elVideo.buffered.start(0) &&
              t <= this.m_elVideo.buffered.end(0)
            );
          }
          GetLiveContentStartTime() {
            return this.m_mpd
              ? this.m_mpd.GetAvailabilityStartTime()
              : new Date(0);
          }
          GetTimeTextAdaptions(e) {
            return this.m_mpd ? this.m_mpd.GetTimedTextAdaptionSet(e) : [];
          }
          GetAvailableVideoStartTime() {
            if (!this.m_mpd) return 0;
            let e = 0;
            if (this.IsLiveContent()) {
              let t = Math.floor(this.m_mpd.GetDurationSinceStarted() / 1e3),
                i = this.GetBufferedLiveEdgeTime(),
                n = this.m_mpd.GetTimeShiftBufferDepth();
              n ? (e = t - n + et) : (e = 0), (e = $.OQ(e, 0, i));
            } else e = this.m_mpd.GetStartTime();
            return e;
          }
          GetBufferedLiveEdgeTime() {
            if (!this.m_mpd) return 0;
            let e = 0;
            return (
              this.IsLiveContent()
                ? (e = Math.floor(
                    (this.m_mpd.GetDurationSinceStarted() -
                      this.m_nTrackBufferMS) /
                      1e3,
                  ))
                : (e = this.m_mpd.GetEndTime()),
              e
            );
          }
          IsPaused() {
            return !this.m_bUserPlayChoice;
          }
          IsAtEnd() {
            return (
              !this.IsLiveContent() &&
              this.m_mpd &&
              this.m_mpd.GetEndTime() > 0 &&
              this.m_mpd.GetEndTime() - this.GetCurrentPlayTime() < 1
            );
          }
          SetUserPlayChoice(e) {
            (this.m_bUserPlayChoice = e),
              this.DispatchEvent("valve-userpausechange");
          }
          Play() {
            this.BInitialized() &&
              (this.SetUserPlayChoice(!0),
              this.Seek(this.GetCurrentPlayTime()));
          }
          Pause() {
            (this.m_bUserLiveEdgeChoice = !1),
              this.m_elVideo.playbackRate == Se &&
                (this.m_elVideo.playbackRate = me),
              this.SetUserPlayChoice(!1),
              this.m_elVideo.pause();
          }
          GetPlaybackRate() {
            return this.m_elVideo.paused ? 0 : this.m_elVideo.playbackRate;
          }
          GetTimeoutAfterFailedDownload() {
            return this.m_bTimeoutAfterFailedDownload;
          }
          GetCDNAuthURLParameter() {
            return this.m_strCDNAuthURLParameters;
          }
          OnSegmentDownloaded(e) {
            (0, a.q_)(e.GetDebugName() + " OnSegmentDownloaded"),
              this.UpdateVideoRepresentation(!1),
              this.OnVideoBufferProgress();
            let t = this.GetVideoLoader();
            e == t &&
              this.m_stats.SetCurrentVideoBandwidth(e.GetAvgDownloadRate());
          }
          OnSegmentBuffered(e) {
            this.OnVideoBufferProgress();
          }
          async PlayOnElement() {
            const e = this.m_bFirstPlay;
            if (((this.m_bFirstPlay = !1), rt && e)) {
              this.DispatchEvent("valve-userinputneeded");
              return;
            }
            let t;
            try {
              await this.m_elVideo.play();
            } catch (n) {
              (t = n), (0, a.q_)("Failed to play video", n);
            }
            let i = this.BHasTimedText() || this.m_bMuteOnAutoplayBlocked;
            if (we(t) && !this.m_elVideo.muted && i) {
              (0, a.q_)("Trying to play again, this time muted with subtitles"),
                (t = void 0),
                (this.m_elVideo.muted = !0),
                this.SetSubtitles((0, ee.sfN)(x.TS.LANGUAGE));
              try {
                await this.m_elVideo.play();
              } catch (n) {
                (t = n), (0, a.q_)("Failed to play video when muted", n);
              }
            }
            if (e && we(t)) {
              this.DispatchEvent("valve-userinputneeded");
              return;
            }
          }
          OnVideoBufferProgress() {
            if (!this.IsBuffering()) return;
            let e = this.m_rgLoaders.length > 0,
              t = this.GetPlaybackStartTime(0);
            for (let i of this.m_rgLoaders) {
              if (!i.BHasEnoughBuffered(t)) {
                e = !1;
                break;
              }
              t = Math.max(t, i.GetBufferedStart());
            }
            e &&
              ((this.m_bIsBuffering = !1),
              (this.m_seekingToTime = null),
              this.m_elVideo.currentTime != t
                ? (this.m_elVideo.currentTime = t)
                : this.m_elVideo.paused &&
                  this.m_bUserPlayChoice &&
                  this.PlayOnElement(),
              this.DispatchEvent("valve-bufferupdate"));
          }
          OnSegmentDownloadFailed(e, t) {
            this.StopDownloads(), this.DispatchEvent("valve-downloadfailed", t);
          }
          OnSegmentDownloadGone(e) {
            this.m_bIsBuffering && e.GetNumConsecutiveDownloadGones() <= nt
              ? this.Seek(
                  this.GetCurrentPlayTime() +
                    e.GetCurrentSegmentDurationMS() / 1e3,
                )
              : ((0, a.q_)(
                  "OnSegmentDownloadGone: too many consecutive 'gone', erroring the download: " +
                    e.GetNumConsecutiveDownloadGones(),
                ),
                this.OnSegmentDownloadFailed(e, 1));
          }
          OnMediaUnsupportedError() {
            this.DispatchEvent("valve-downloadfailed", 3);
          }
          OnMediaSourceError() {
            this.DispatchEvent("valve-playbackerror");
          }
          GetCurrentAudioAdaptationfunction() {
            return this.m_mpd
              ? this.m_mpd.GetAdaptationByTrackID(this.m_strAudioAdaptationID)
              : null;
          }
          GetCurrentVideoAdaptation() {
            return this.m_mpd
              ? this.m_mpd.GetAdaptationByTrackID(this.m_strVideoAdaptationID)
              : null;
          }
          GetVideoLoader() {
            for (let e of this.m_rgLoaders) if (e.ContainsVideo()) return e;
            return null;
          }
          GetAudioLoader() {
            for (let e of this.m_rgLoaders) if (e.ContainsAudio()) return e;
            return null;
          }
          SetTrackBufferMS(e) {
            this.m_nTrackBufferMS = e;
            for (let t of this.m_rgLoaders) t.SetBufferMS(e);
          }
          BeginPlaybackHLS() {
            (this.m_bPlaybackStarted = !0), (this.m_seekingToTime = null);
            let e = 0;
            (0, a.q_)("Starting HLS playback at " + e), this.Seek(e);
          }
          BeginPlayback() {
            de(this.m_mpd);
            let e = this.GetVideoLoader();
            if (!e || this.m_bUseHLSManifest) {
              (0, a.q_)("No video loader for playback?");
              return;
            }
            let t = this.DetermineBestVideoRepresentation();
            for (let n of this.m_rgLoaders)
              if (n.ContainsVideo()) {
                n.ChangeRepresentation(t, !1);
                let o = n.GetCurrentSegmentDurationMS();
                this.m_schFirstFrameThrottler.Schedule(
                  o / 2,
                  this.VerifyFirstSegmentDownloadProgress,
                );
              } else if (n.ContainsAudio()) {
                let o =
                  n.GetAdaptation().rgRepresentations.length > 0
                    ? n.GetAdaptation().rgRepresentations[0]
                    : null;
                o && n.ChangeRepresentation(o, !1);
              }
            this.m_bPlaybackStarted = !0;
            let i = 0;
            if (this.IsLiveContent()) {
              let n = e.GetCurrentSegmentDurationMS(),
                o = this.m_mpd.GetMinBufferTime() * 1e3,
                h = Math.max(n, o);
              this.SetTrackBufferMS(h);
              let u = this.GetBufferedLiveEdgeTime();
              (i = this.GetPlaybackStartTime(u)),
                (0, a.q_)(
                  `Begin playback of live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${i}][nLiveEdge=${u}]`,
                );
            } else
              this.SetTrackBufferMS(Qe),
                (i = this.GetPlaybackStartTime(0)),
                this.m_bookMarkAdapter &&
                  ((i = this.m_bookMarkAdapter.GetBeginPlaytime()),
                  this.m_mpd.GetEndTime() - i < Ze && (i = 0)),
                (0, a.q_)(
                  `Begin playback of non-live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${i}]`,
                );
            (this.m_seekingToTime = null),
              (0, a.q_)("Starting playback at " + i),
              this.m_stats.SetSegmentDurationMS(
                e.GetCurrentSegmentDurationMS(),
              ),
              this.m_stats.SetAnalyticLinks(
                this.m_mpd.GetStatsLink(),
                this.m_mpd.GetStalledLink(),
                this.m_mpd.GetEventLink(),
              ),
              this.m_stats.SetVideoInitializationURL(
                e.GetCurrentSegmentInitializationURL(),
              ),
              this.Seek(i);
          }
          VerifyFirstSegmentDownloadProgress() {
            let e = this.GetVideoLoader();
            if (
              this.m_videoRepSelected === null &&
              e &&
              e.GetDownloadHistory().length == 0 &&
              e.GetActiveDownloads() > 0 &&
              e.GetActiveDownloadProgress() < Ye
            ) {
              let t = this.DetermineBestVideoRepresentation();
              t &&
                !e.BIsCurrentRepresentation(t) &&
                (e.ChangeRepresentation(t, !1),
                e.ForceRestartDownload(),
                (0, a.q_)(
                  "Video download progressing too slowly, choosing " +
                    t.nWidth +
                    "x" +
                    t.nHeight +
                    "@" +
                    t.nFrameRate +
                    " instead",
                ));
            }
          }
          DetermineBestVideoRepresentation() {
            let e = this.GetVideoLoader();
            (0, A.wT)(e, "Missing video loader");
            let t = this.GetAudioLoader(),
              i = t && t != e ? t.GetEstimatedAudioRate() : 0,
              n =
                e.GetAvgDownloadRateSampleCount() > 0
                  ? e.GetAvgDownloadRate()
                  : -1,
              o = mt(this.m_nPlayerHeightForAuto),
              h = e.GetRepresentationsCount() - 1,
              u = e.GetAdaptation().rgRepresentations[h];
            for (let f = h - 1; f >= 0; f--) {
              let S = e.GetAdaptation().rgRepresentations[f],
                y = (S.nBandwidth + i) * this.m_elVideo.playbackRate * 1.15;
              if (n > 0 && n < y) {
                (0, a.q_)(
                  `Video select: Skipping ${f} due to rate: [avg=${n}][required=${y}]`,
                );
                continue;
              }
              let D = S.nFrameRate || 0;
              if (this.IsLiveContent() && D > Be) {
                let F = this.m_stats.GetFPSMonitor(),
                  C =
                    F.BHasCurrentFPS() && Math.ceil(F.GetCurrentFPS()) < Be - 1;
                if (F.BIsDroppingFrames() || C) {
                  (0, a.q_)(
                    `Video select: Skipping ${f} due to dropping frames and high FPS representation: [fps:${D}]`,
                  );
                  continue;
                }
              }
              if (this.m_nLimitFPS > 0 && D > this.m_nLimitFPS) {
                (0, a.q_)(
                  `Video select: Skipping ${f} due to frame rate limit`,
                );
                continue;
              }
              let M = u.nHeight || 0,
                R = S.nHeight || 0;
              if (o > 0 && M > 0 && R > 0 && R > o) {
                (0, a.q_)(
                  `Video select: Stopped at ${M} due to player dimensions`,
                );
                break;
              }
              u = S;
            }
            return u;
          }
          UpdateVideoRepresentation(e) {
            if (this.m_videoRepSelected) return;
            let t = this.GetVideoLoader();
            if (!t || this.IsBuffering()) return;
            let i = this.DetermineBestVideoRepresentation();
            t.ChangeRepresentation(i, e);
          }
          GetPlaybackStartTime(e) {
            if (!this.m_seekingToTime) return e;
            (0, A.wT)(
              this.m_bPlaybackStarted,
              "Missing mpd info to calculate seek time",
            );
            let t =
              this.m_seekingToTime.eSeekType == 1
                ? this.GetAvailableVideoStartTime()
                : 0;
            return this.m_seekingToTime.nTime + t;
          }
          CanSeek() {
            return !0;
          }
          SeekAndPlay(e) {
            return this.SetUserPlayChoice(!0), this.Seek(e);
          }
          Seek(e, t = 0) {
            if (!this.m_bPlaybackStarted)
              return (this.m_seekingToTime = { nTime: e, eSeekType: t }), e;
            t == 1 && (e = e + this.GetAvailableVideoStartTime());
            let i = this.GetAvailableVideoStartTime(),
              n = this.GetBufferedLiveEdgeTime();
            const o = e;
            (e = $.OQ(e, i, n)),
              e != o &&
                (0, a.q_)(
                  `Seek time ${o} was clamped to the range ${i} to ${n}`,
                ),
              (this.m_bUserLiveEdgeChoice = e >= n - be);
            let h = this.m_elVideo.paused;
            if ((h || this.m_elVideo.pause(), this.m_bUseHLSManifest))
              (this.m_elVideo.currentTime = e - this.m_hlsTimeOffset),
                this.PlayOnElement(),
                this.DispatchEvent("valve-bufferupdate");
            else {
              (this.m_bIsBuffering = !0),
                (this.m_seekingToTime = { nTime: e, eSeekType: 0 });
              for (let u of this.m_rgLoaders) u.Seek(e);
              this.DispatchEvent("valve-bufferupdate"),
                h && this.OnVideoBufferProgress();
            }
            return e;
          }
          JumpTime(e) {
            return (e += this.GetCurrentPlayTime()), this.Seek(e);
          }
          GetVideoPlayerHeight() {
            return this.m_elVideo.clientHeight;
          }
          DispatchEvent(e, t = null) {
            let i = new CustomEvent(e, {
              cancelable: !0,
              bubbles: !0,
              detail: t,
            });
            this.m_elVideo.dispatchEvent(i);
          }
          IsMuted() {
            return this.m_elVideo.muted;
          }
          SetMuted(e) {
            this.m_elVideo.muted = e;
          }
          SetVolume(e) {
            (e = $.OQ(e, 0, 1)), (this.m_elVideo.volume = e);
          }
          GetVolume() {
            return this.m_elVideo.volume;
          }
          GetDASHPlayerStats() {
            return this.m_stats;
          }
          GetAndCloseWatchedIntervals() {
            return (
              this.m_watchedIntervals.CloseCurrentInterval(this.m_elVideo),
              this.m_watchedIntervals.GetIntervals()
            );
          }
          ReportPlayerStats() {
            this.m_stats.ReportPlayerStats(this.m_rgLoaders, this.m_elVideo),
              this.m_schReportPlayerTrigger.Schedule(
                Je * 1e3,
                this.ReportPlayerStats,
              );
          }
          SetStatsViewIsVisible(e) {
            e && !this.m_bStatsViewVisible
              ? (this.CaptureStatsForDisplay(),
                this.m_schCaptureDisplayStatsTrigger.Schedule(
                  ye,
                  this.CaptureStatsForDisplay,
                ))
              : !e &&
                this.m_bStatsViewVisible &&
                this.m_schCaptureDisplayStatsTrigger.Cancel(),
              (this.m_bStatsViewVisible = e);
          }
          CaptureStatsForDisplay() {
            this.m_stats.SetHTMLVideoPlayerDisplay(
              this.m_elVideo.videoWidth,
              this.m_elVideo.videoHeight,
              this.m_elVideo.clientWidth,
              this.m_elVideo.clientHeight,
            ),
              this.m_stats.CaptureFrequentlyUpdatingInformation(
                this.m_elVideo,
                this.m_rgLoaders,
              ),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                ye,
                this.CaptureStatsForDisplay,
              );
          }
          GetVideoRepresentations() {
            let e = [];
            if (
              (e.push({
                id: pe.Y,
                displayName: "Auto",
                selected: this.m_videoRepSelected === null,
              }),
              this.m_bUseHLSManifest)
            )
              return e;
            let t = this.GetCurrentVideoAdaptation();
            if (t)
              for (let i of t.rgRepresentations) {
                let n =
                    !!this.m_videoRepSelected &&
                    this.m_videoRepSelected.strID == i.strID,
                  o = i.nFrameRate || 0,
                  h = i.nWidth || 0,
                  u = i.nHeight || 0;
                o > 50 && o < 70 ? (o = 60) : o > 25 && o < 35 && (o = 30);
                let f = `${i.nWidth}x${i.nHeight} @ ${o}fps`;
                e.push({
                  id: i.strID,
                  displayName: f,
                  selected: n,
                  width: h,
                  height: u,
                  fps: o,
                });
              }
            return (
              e.sort((i, n) =>
                i.id == n.id
                  ? 0
                  : (0, pe.n)(i)
                    ? -1
                    : (0, pe.n)(n)
                      ? 1
                      : i.width === n.width
                        ? n.fps - i.fps
                        : n.width - i.width,
              ),
              e
            );
          }
          SetVideoRepresentation(e) {
            let t = !0,
              i = this.GetVideoLoader();
            if (i && e && !(0, pe.n)(e)) {
              let n = i.GetRepresentationByID(e.id);
              n &&
                ((t = !1),
                (this.m_videoRepSelected === null ||
                  this.m_videoRepSelected.strID != n.strID) &&
                  ((this.m_videoRepSelected = n),
                  i.ChangeRepresentation(n, !0),
                  this.Seek(this.GetCurrentPlayTime()),
                  this.m_stats.MarkAtLeastOneUserRepresentation()));
            }
            t && (this.m_videoRepSelected = null);
          }
          GetThumbnail(e) {
            if (!this.m_mpd) return null;
            (e = e + this.GetAvailableVideoStartTime()),
              (e += Math.floor(this.m_mpd.GetThumbnailDurationMS() / 1e3));
            let t = this.GetAvailableVideoStartTime(),
              i = this.GetBufferedLiveEdgeTime();
            return (e = $.OQ(e, t, i)), this.m_mpd.GetThumbnail(e * 1e3);
          }
          BHasTimedText() {
            return this.m_nTimedText > 0;
          }
          IsShowingCaption() {
            return !!this.m_strActiveTextTrack;
          }
          GetCaptionRepresentations() {
            if (!this.m_mpd) return [];
            let e = [];
            for (let t of this.m_elVideo.textTracks)
              e.push({ m_eLanguage: H.bi[t.language], m_strLabel: t.label });
            return e;
          }
          GetMaxWidthAndHeight() {
            if (!this.m_mpd) return null;
            let e = this.m_mpd.GetMainVideoAdaption();
            if (!e || e.rgRepresentations.length == 0) return null;
            let t = e.rgRepresentations[0];
            return { nWidth: t.nWidth || 0, nHeight: t.nHeight || 0 };
          }
        }
        c([J.sH], g.prototype, "m_nTimedText", 2),
          c([J.XI], g.prototype, "InitTimedText", 1),
          c([_.o], g.prototype, "CheckActiveTextTrack", 1),
          c([_.o], g.prototype, "OnLoadedMetadataForHLS", 1),
          c([_.o], g.prototype, "OnVisibilityChangeForHLS", 1),
          c([_.o], g.prototype, "OnEndedForHLS", 1),
          c([_.o], g.prototype, "UpdateMPD", 1),
          c([_.o], g.prototype, "OnPlayerResize", 1),
          c([_.o], g.prototype, "OnMediaSourceOpen", 1),
          c([_.o], g.prototype, "HandleMediaSourceError", 1),
          c([_.o], g.prototype, "OnMediaSourceEnded", 1),
          c([_.o], g.prototype, "OnMediaSourceClose", 1),
          c([_.o], g.prototype, "OnVideoWaiting", 1),
          c([_.o], g.prototype, "OnVideoPause", 1),
          c([_.o], g.prototype, "OnVideoResize", 1),
          c([_.o], g.prototype, "OnVideoError", 1),
          c([_.o], g.prototype, "OnVideoCanPlay", 1),
          c([_.o], g.prototype, "OnVideoCanPlayHLS", 1),
          c([_.o], g.prototype, "OnLoadedMetadata", 1),
          c([_.o], g.prototype, "GetCurrentPlayTime", 1),
          c([_.o], g.prototype, "GetBufferedEndTime", 1),
          c([_.o], g.prototype, "OnVideoTimeUpdate", 1),
          c([_.o], g.prototype, "SendUpdateToBookmarkServiceIfNeeded", 1),
          c([_.o], g.prototype, "OnVideoPlay", 1),
          c([_.o], g.prototype, "OnVideoSeeking", 1),
          c([_.o], g.prototype, "OnVideoSeeked", 1),
          c([_.o], g.prototype, "GetPlaybackRate", 1),
          c([_.o], g.prototype, "GetTimeoutAfterFailedDownload", 1),
          c([_.o], g.prototype, "GetCDNAuthURLParameter", 1),
          c([_.o], g.prototype, "OnSegmentDownloaded", 1),
          c([_.o], g.prototype, "OnSegmentBuffered", 1),
          c([_.o], g.prototype, "PlayOnElement", 1),
          c([_.o], g.prototype, "OnSegmentDownloadFailed", 1),
          c([_.o], g.prototype, "OnSegmentDownloadGone", 1),
          c([_.o], g.prototype, "OnMediaUnsupportedError", 1),
          c([_.o], g.prototype, "OnMediaSourceError", 1),
          c([_.o], g.prototype, "VerifyFirstSegmentDownloadProgress", 1),
          c([_.o], g.prototype, "ReportPlayerStats", 1),
          c([J.XI.bound], g.prototype, "CaptureStatsForDisplay", 1);
        function mt(r) {
          return r < 410
            ? 480
            : r < 600
              ? 720
              : r < 910
                ? 1080
                : Number.MAX_SAFE_INTEGER;
        }
        function dt(r) {
          let e = "",
            t = "",
            i = "",
            n = r.GetMainVideoAdaption();
          return (
            n &&
              n.rgRepresentations.length > 0 &&
              ((e = n.rgRepresentations[0].strMimeType),
              (t = n.rgRepresentations[0].strCodecs || "")),
            (n = r.GetMainAudioAdaption()),
            n &&
              n.rgRepresentations.length > 0 &&
              (i = n.rgRepresentations[0].strCodecs || ""),
            !e || !t
              ? ""
              : i
                ? `${e}; codecs="${t}, ${i}`
                : `${e}; codecs="${t}`
          );
        }
        function ht(r) {
          let e = !1;
          try {
            e = MediaSource.isTypeSupported(r);
          } catch {}
          return e;
        }
        function ut(r) {
          let e = r.canPlayType(
            'application/vnd.apple.mpegurl;codecs="avc1.64001f, mp4a.40.02"',
          );
          return e === "probably" || e === "maybe";
        }
        function we(r) {
          return !!r && r instanceof Error && r.name == "NotAllowedError";
        }
        function ft(r) {
          return r in H.bi
            ? (0, H.we)("#Language_" + (0, ee.LgB)(H.bi[r]))
            : "";
        }
        class _t {
          m_bEnabled = !1;
          m_rgIntervals = [];
          m_nWatchStart = void 0;
          Enable() {
            this.m_bEnabled = !0;
          }
          GetIntervals() {
            return this.m_rgIntervals;
          }
          CloseCurrentInterval(e) {
            this.StopInterval(e);
          }
          Clear() {
            (this.m_bEnabled = !1),
              (this.m_rgIntervals = []),
              (this.m_nWatchStart = void 0);
          }
          OnPlay(e) {
            this.StartInterval(e);
          }
          OnPause(e) {
            this.StopInterval(e);
          }
          OnSeeking(e) {
            this.StopInterval(e);
          }
          OnSeeked(e) {
            e.paused || this.StartInterval(e);
          }
          OnEnded(e) {
            this.StopInterval(e);
          }
          StartInterval(e) {
            !this.m_bEnabled ||
              this.m_nWatchStart !== void 0 ||
              (this.m_nWatchStart = e.currentTime);
          }
          StopInterval(e) {
            if (!this.m_bEnabled || this.m_nWatchStart === void 0) return;
            let t = e.currentTime;
            this.MergeInterval([this.m_nWatchStart, t]),
              (this.m_nWatchStart = void 0);
          }
          MergeInterval(e) {
            (e[0] = Math.floor(e[0])), (e[1] = Math.ceil(e[1]));
            let n;
            for (
              n = 0;
              n < this.m_rgIntervals.length &&
              !(e[0] <= this.m_rgIntervals[n][1]);
              n++
            );
            let [o, h] = e,
              u;
            for (u = n; u < this.m_rgIntervals.length; u++) {
              let S = this.m_rgIntervals[u];
              if (S[0] > h) break;
              (o = Math.min(o, S[0])), (h = Math.max(h, S[1]));
            }
            let f = u - n;
            this.m_rgIntervals.splice(n, f, [o, h]);
          }
        }
      },
      7409: (ge, re, B) => {
        B.d(re, { _L: () => w });
        var p = B(14947),
          V = B(41735),
          J = B.n(V),
          ee = B(76559),
          A = B(48937),
          N = B(3166),
          H = B(8323),
          $ = B(18210),
          _ = B(19730),
          q = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          a = (O, s, l, m) => {
            for (
              var d = m > 1 ? void 0 : m ? x(s, l) : s, T = O.length - 1, k;
              T >= 0;
              T--
            )
              (k = O[T]) && (d = (m ? k(s, l, d) : k(d)) || d);
            return m && d && q(s, l, d), d;
          };
        const se = 5,
          Y = -1,
          Q = 3,
          v = 3,
          z = 1e6,
          X = 1024;
        class ue {
          steamid = "";
          host = "";
          playback_position = 0;
          playback_speed = 1;
          video_res = 0;
          audio_rate = 0;
          audio_ch = 0;
          bw_avg = 0;
          bw_required = 0;
          broadcast_accountid = 0;
          useragent = "";
          sessionid = "";
          broadcast_origin = "";
        }
        class E extends ue {
          video_buffer = 0;
          audio_buffer = 0;
          seconds_delta = 0;
          bytes_received = 0;
          frames_dropped = 0;
          frames_decoded = 0;
          failed_segments = 0;
          bw_min = 0;
          bw_max = 0;
          seg_time_avg = 0;
          seg_time_min = 0;
          seg_time_max = 0;
          initial_vid_res = 0;
          ttff = 0;
          seg_duration = 0;
        }
        class b extends ue {
          last_segment_response = 0;
          audio_stalled = !1;
          active_downloads = 0;
          vid_down_progress = 0;
          segment_stalled = 0;
          segment1_bytes = 0;
          segment1_time = 0;
          segment2_bytes = 0;
          segment2_time = 0;
          segment3_bytes = 0;
          segment3_time = 0;
        }
        class fe {
          framesDecoded = 0;
          framesDropped = 0;
        }
        class w {
          m_steamIDBroadcast = "";
          m_steamIDViewer = "";
          m_broadcastID = "";
          m_ulViewerToken = "";
          m_host = "";
          m_strBroadcastOrigin = "";
          m_strStatsLink = "";
          m_strStalledLink = "";
          m_strEventLogLink = "";
          m_allTimeSnapshot = new G(0);
          m_rgSnapShots = new Array(new G(0));
          m_bAtLeastOneUserRepresentation = !1;
          m_videoResolution = 0;
          m_audioRate = 0;
          m_audioChannel = 0;
          m_strBufferingVideoResolution = "0x0@0";
          m_nPlaybackVideoResolution = 0;
          m_strPlaybackVideoResolution = "0x0";
          m_htmlVideoResolution = 0;
          m_strHtmlVideoDisplay = "";
          m_nAudioBandwidth = 0;
          m_nVideoBandwidth = 0;
          m_nBandwidthRequired = 0;
          m_nCurBandwidthVideo = 0;
          m_nAudioBufferedMS = 0;
          m_nVideoBufferedMS = 0;
          m_nActiveDownloads = 0;
          m_nVideoDownloadProgress = 0;
          m_videoBufferedRanges = null;
          m_audioBufferedRanges = null;
          m_nSegmentDurationMS = 0;
          m_nPlaybackRate = 0;
          m_nPerfTimeCreated = 0;
          m_nTimeToFirstFrameMS = Y;
          m_fpsMonitor = new ae();
          constructor() {
            (0, p.Gn)(this);
          }
          StartingPlayback() {
            this.m_nPerfTimeCreated = performance.now();
          }
          GetBytesReceivedToDisplay() {
            return (0, _.dm)(this.m_allTimeSnapshot.m_nBytesReceived, 1);
          }
          GetBufferingResolutionToDisplay() {
            return this.m_strBufferingVideoResolution;
          }
          GetPlaybackResolutionToDisplay() {
            return this.m_strPlaybackVideoResolution;
          }
          GetHTMLVideoResolutionToDisplay() {
            return this.m_strHtmlVideoDisplay;
          }
          GetDroppedFramesToDisplay() {
            return (
              this.m_allTimeSnapshot.m_nFramesDropped +
              "/" +
              this.m_allTimeSnapshot.m_nFramesDecoded
            );
          }
          GetStalledEventsToDisplay() {
            return String(this.m_allTimeSnapshot.m_nStallEvents);
          }
          GetFailedDownloadsToDisplay() {
            return String(this.m_allTimeSnapshot.m_nFailedSegments);
          }
          GetNumBufferedVideoRanges() {
            return this.m_videoBufferedRanges
              ? this.m_videoBufferedRanges.length
              : 0;
          }
          GetNumBufferedAudioRanges() {
            return this.m_audioBufferedRanges
              ? this.m_audioBufferedRanges.length
              : 0;
          }
          GetBufferedVideoSegmentForDisplay(s) {
            return this.m_videoBufferedRanges &&
              s < this.m_videoBufferedRanges.length
              ? (0, A.ap)(this.m_videoBufferedRanges.start(s)) +
                  " - " +
                  (0, A.ap)(this.m_videoBufferedRanges.end(s))
              : (0, $.we)("#DASHPlayerStats_VideoNoRangeInformation");
          }
          GetBufferedAudioSegmentForDisplay(s) {
            return this.m_audioBufferedRanges &&
              s < this.m_audioBufferedRanges.length
              ? (0, A.ap)(this.m_audioBufferedRanges.start(s)) +
                  " - " +
                  (0, A.ap)(this.m_audioBufferedRanges.end(s))
              : (0, $.we)("#DASHPlayerStats_AudioNoRangeInformation");
          }
          GetBandwidthStatsToDisplay() {
            if (this.m_rgSnapShots.length < 2)
              return (
                (this.m_allTimeSnapshot.m_nBandwidthMin / z).toFixed(v) +
                " / " +
                (this.m_allTimeSnapshot.m_nBandwidthMax / z).toFixed(v) +
                " / " +
                (this.m_allTimeSnapshot.GetAverageBandwidth() / z).toFixed(v)
              );
            {
              let s = this.m_rgSnapShots[this.m_rgSnapShots.length - 2],
                l = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
              return (
                (
                  (l.m_nBandwidthMin == 0
                    ? s.m_nBandwidthMin
                    : Math.min(s.m_nBandwidthMin, l.m_nBandwidthMin)) / z
                ).toFixed(v) +
                " / " +
                (Math.max(s.m_nBandwidthMax, l.m_nBandwidthMax) / z).toFixed(
                  v,
                ) +
                " / " +
                (s.GetAverageBandwidthFromTwo(l) / z).toFixed(v)
              );
            }
          }
          GetDownloadTimeStatsToDisplay() {
            if (this.m_rgSnapShots.length < 2)
              return (
                (
                  this.m_allTimeSnapshot.m_nSegmentDownloadTimeMinMS / 1e3
                ).toFixed(v) +
                " / " +
                (
                  this.m_allTimeSnapshot.m_nSegmentDownloadTimeMaxMS / 1e3
                ).toFixed(v) +
                " / " +
                (this.m_allTimeSnapshot.GetAverageDownloadTime() / 1e3).toFixed(
                  v,
                )
              );
            {
              let s = this.m_rgSnapShots[this.m_rgSnapShots.length - 2],
                l = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
              return (
                (
                  (l.m_nSegmentDownloadTimeMinMS == 0
                    ? s.m_nSegmentDownloadTimeMinMS
                    : Math.min(
                        s.m_nSegmentDownloadTimeMinMS,
                        l.m_nSegmentDownloadTimeMinMS,
                      )) / 1e3
                ).toFixed(v) +
                " / " +
                (
                  Math.max(
                    s.m_nSegmentDownloadTimeMaxMS,
                    l.m_nSegmentDownloadTimeMaxMS,
                  ) / 1e3
                ).toFixed(v) +
                " / " +
                (s.GetAverageDownloadTimeFromTwo(l) / 1e3).toFixed(v)
              );
            }
          }
          BHasFrameInformation() {
            return this.m_allTimeSnapshot.m_nFramesDecoded > 0;
          }
          GetBandwidthRequiredToDisplay() {
            return (this.m_nBandwidthRequired / z).toFixed(v);
          }
          GetBandwithVideoToDisplay() {
            return (this.m_nCurBandwidthVideo / z).toFixed(v);
          }
          GetContentServerToDisplay() {
            return this.m_host;
          }
          GetVideoBufferedToDisplay() {
            return (this.m_nVideoBufferedMS / 1e3).toFixed(Q);
          }
          GetAudioBufferedToDisplay() {
            return (this.m_nAudioBufferedMS / 1e3).toFixed(Q);
          }
          GetActiveDownloadsToDisplay() {
            return String(this.m_nActiveDownloads);
          }
          GetVideoDownloadProgressToDisplay() {
            return this.m_nVideoDownloadProgress
              ? String(Math.round(this.m_nVideoDownloadProgress * 100)) + "%"
              : "100%";
          }
          GetTimeToFirstFrameToDisplay() {
            return this.m_nTimeToFirstFrameMS == Y
              ? "Unknown"
              : String(this.m_nTimeToFirstFrameMS);
          }
          GetPersistentFrameDropsForDisplay() {
            return String(this.m_fpsMonitor.BIsDroppingFrames());
          }
          GetCurrentFPSForDisplay() {
            return this.m_fpsMonitor.BHasCurrentFPS()
              ? this.m_fpsMonitor.GetCurrentFPS().toFixed(1)
              : (0, $.we)("#DASHPlayerStats_Tracking");
          }
          GetPlaybackRateForDisplay() {
            return this.m_nPlaybackRate.toFixed(1) + "x";
          }
          GetFPSMonitor() {
            return this.m_fpsMonitor;
          }
          SetHTMLVideoPlayerDisplay(s, l, m, d) {
            this.m_htmlVideoResolution != d &&
              ((this.m_htmlVideoResolution = d),
              (this.m_strHtmlVideoDisplay = m + "x" + d)),
              this.m_nPlaybackVideoResolution != l &&
                ((this.m_nPlaybackVideoResolution = l),
                (this.m_strPlaybackVideoResolution = s + "x" + l));
          }
          SetVideoPlaybackResolution(s, l, m) {
            this.m_videoResolution == 0 &&
              ((this.m_allTimeSnapshot.m_nInitialVideoResolution = l),
              (this.m_rgSnapShots[
                this.m_rgSnapShots.length - 1
              ].m_nInitialVideoResolution = l)),
              (this.m_strBufferingVideoResolution = s + "x" + l + "@" + m),
              (this.m_videoResolution = l);
          }
          SetRepresentation(s) {
            if (s) {
              if (s.nAudioSamplingRate)
                (this.m_audioRate = Math.round(s.nBandwidth / 1e3)),
                  (this.m_audioChannel = s.nAudioChannels || 0),
                  (this.m_nAudioBandwidth = s.nBandwidth || 0);
              else if (s.nWidth && s.nHeight) {
                let l = s.nFrameRate || 0;
                this.SetVideoPlaybackResolution(s.nWidth, s.nHeight, l),
                  (this.m_nVideoBandwidth = s.nBandwidth || 0);
              }
              this.m_nBandwidthRequired =
                this.m_nAudioBandwidth + this.m_nVideoBandwidth;
            }
          }
          MarkAtLeastOneUserRepresentation() {
            this.m_bAtLeastOneUserRepresentation = !0;
          }
          SetCurrentVideoBandwidth(s) {
            this.m_nCurBandwidthVideo = s;
          }
          SetSegmentDurationMS(s) {
            this.m_nSegmentDurationMS = s;
          }
          SetBroadcasterAndViewerInfo(s, l, m, d) {
            (this.m_steamIDBroadcast = s),
              (this.m_steamIDViewer = l),
              (this.m_broadcastID = m),
              (this.m_ulViewerToken = d);
          }
          SetAnalyticLinks(s, l, m) {
            (this.m_strStatsLink = s),
              (this.m_strStalledLink = l),
              (this.m_strEventLogLink = m);
          }
          SetVideoInitializationURL(s) {
            let l = new URL(s);
            (this.m_host = l.hostname),
              (this.m_strBroadcastOrigin =
                l.searchParams.get("broadcast_origin") || "");
            let m = this.m_strBroadcastOrigin.indexOf(":");
            m !== -1 &&
              (this.m_strBroadcastOrigin = this.m_strBroadcastOrigin.substr(
                0,
                m,
              ));
          }
          SetAudioRate(s) {
            this.m_audioRate = s;
          }
          CaptureFrequentlyUpdatingInformation(s, l) {
            let m = this.ExtractFrameInfo(s);
            this.LogFrameInfo(m), this.LogBufferDuration(l, s);
          }
          LogDownload(s, l) {
            this.m_allTimeSnapshot.SegmentReceived(s, l),
              this.m_rgSnapShots[this.m_rgSnapShots.length - 1].SegmentReceived(
                s,
                l,
              );
          }
          LogSegmentDownloadFailure(s, l) {
            (this.m_allTimeSnapshot.m_nFailedSegments += 1),
              (this.m_rgSnapShots[
                this.m_rgSnapShots.length - 1
              ].m_nFailedSegments += 1),
              (this.m_allTimeSnapshot.m_nLastSegementDownloadStatus = l),
              (this.m_rgSnapShots[
                this.m_rgSnapShots.length - 1
              ].m_nLastSegementDownloadStatus = l),
              this.LogDownload(0, s);
          }
          LogVideoError(s) {}
          LogVideoOnCanPlay() {
            this.m_nTimeToFirstFrameMS === Y &&
              (this.m_nTimeToFirstFrameMS = Math.ceil(
                performance.now() - this.m_nPerfTimeCreated,
              ));
          }
          LogErrorEvent(s, l) {}
          ReportVideoStalled(s, l) {
            if (
              ((this.m_allTimeSnapshot.m_nStallEvents += 1),
              this.m_strStalledLink.length == 0)
            )
              return;
            let m = this.FindBehindSegmentLoader(s, l);
            if (!m) {
              (0, A.q_)("DASHStats: Did not find any audio or video loaders");
              return;
            }
            this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nStallEvents +=
              1;
            let d = new b();
            this.GatherCommonStats(
              d,
              l,
              m.GetBandwidthRequired(),
              m.GetAvgDownloadRate(),
            ),
              (d.last_segment_response =
                this.m_rgSnapShots[
                  this.m_rgSnapShots.length - 1
                ].m_nLastSegementDownloadStatus),
              (d.audio_stalled = m.ContainsAudio()),
              this.CaptureActiveDownloads(s),
              (d.active_downloads = this.m_nActiveDownloads),
              (d.vid_down_progress = this.m_nVideoDownloadProgress);
            let T = m.GetDownloadHistory(),
              k = 0;
            for (let U = T.length - 1; U >= 0 && k < Q; --U)
              ++k,
                (d["segment" + k + "_bytes"] = T[U].cubData),
                (d["segment" + k + "_time"] =
                  Math.round(T[U].nDownloadMS) / 1e3);
            this.SendReportToServer(d, this.m_strStalledLink);
          }
          FindBehindSegmentLoader(s, l) {
            let m = !1,
              d = !1,
              T = l.currentTime,
              k = null,
              U = null;
            for (let K of s)
              (U = K.ContainsAudio() ? K : U),
                (k = K.ContainsVideo() ? K : U),
                K.BHasEnoughBuffered(T) &&
                  ((d = d || K.ContainsAudio()), (m = m || K.ContainsVideo()));
            return (d = d || U == null), !m || (m && d) ? k : U;
          }
          ExtractFrameInfo(s) {
            let l = 0,
              m = 0;
            if (s.getVideoPlaybackQuality)
              try {
                let d = s.getVideoPlaybackQuality();
                (m = d.totalVideoFrames), (l = d.droppedVideoFrames);
              } catch (d) {
                let T = d instanceof Error ? d.message : "";
                (0, A.q_)(
                  "Browser does not support HTMLVideoElement.getVideoPlaybackQuality()",
                  T,
                );
              }
            else
              s.webkitDecodedFrames
                ? ((m = s.webkitDecodedFrames), (l = s.webkitDroppedFrames))
                : s.webkitDecodedFrameCount &&
                  ((m = s.webkitDecodedFrameCount),
                  (l = s.webkitDroppedFrameCount));
            return { framesDecoded: m, framesDropped: l };
          }
          LogFrameInfo(s) {
            (this.m_allTimeSnapshot.m_nFramesDecoded = s.framesDecoded),
              (this.m_allTimeSnapshot.m_nFramesDropped = s.framesDropped);
            let l = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
            if (this.m_rgSnapShots.length == 1)
              (l.m_nFramesDecoded = s.framesDecoded),
                (l.m_nFramesDropped = s.framesDropped);
            else {
              let m = this.m_rgSnapShots[this.m_rgSnapShots.length - 2];
              (l.m_nFramesDecoded = s.framesDecoded - m.m_nFramesDecoded),
                (l.m_nFramesDropped = s.framesDropped - m.m_nFramesDropped);
            }
          }
          LogBufferDuration(s, l) {
            this.m_nActiveDownloads = 0;
            for (let m of s)
              m.ContainsAudio()
                ? ((this.m_nAudioBufferedMS = m.GetAmountBufferedMS(
                    l.currentTime,
                  )),
                  (this.m_audioBufferedRanges = m.GetSourceBufferTimeRanges()))
                : m.ContainsVideo() &&
                  ((this.m_nVideoBufferedMS = m.GetAmountBufferedMS(
                    l.currentTime,
                  )),
                  (this.m_videoBufferedRanges = m.GetSourceBufferTimeRanges())),
                (this.m_nActiveDownloads += m.GetActiveDownloads()),
                m.ContainsVideo() &&
                  (this.m_nVideoDownloadProgress =
                    m.GetActiveDownloadProgress());
            this.m_nPlaybackRate = l.playbackRate;
          }
          CaptureActiveDownloads(s) {
            this.m_nActiveDownloads = 0;
            for (let l of s)
              (this.m_nActiveDownloads += l.GetActiveDownloads()),
                l.ContainsVideo() &&
                  (this.m_nVideoDownloadProgress =
                    l.GetActiveDownloadProgress());
          }
          ReportPlayerStats(s, l) {
            if (this.m_strStatsLink.length == 0) return;
            let m = this.ExtractFrameInfo(l);
            if (
              m.framesDecoded == this.m_allTimeSnapshot.m_nFramesDecoded &&
              this.m_rgSnapShots[this.m_rgSnapShots.length - 1]
                .m_nBytesReceived == 0
            ) {
              this.CreateNewEmptySnapshot(l.videoHeight);
              return;
            }
            this.LogFrameInfo(m), this.LogBufferDuration(s, l);
            let d = new E(),
              T = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
            (d.frames_decoded = T.m_nFramesDecoded),
              (d.frames_dropped = T.m_nFramesDropped),
              (d.bytes_received = T.m_nBytesReceived),
              (d.seconds_delta = Math.round((Date.now() - T.m_timeMS) / 1e3)),
              (d.failed_segments = T.m_nFailedSegments),
              (d.bw_min = T.m_nBandwidthMin),
              (d.bw_max = T.m_nBandwidthMax),
              (d.audio_buffer = Math.round(this.m_nAudioBufferedMS / 1e3)),
              (d.video_buffer = Math.round(this.m_nVideoBufferedMS / 1e3)),
              (d.seg_time_avg = Math.round(T.GetAverageDownloadTime()) / 1e3),
              (d.seg_time_min =
                Math.round(T.m_nSegmentDownloadTimeMinMS) / 1e3),
              (d.seg_time_max =
                Math.round(T.m_nSegmentDownloadTimeMaxMS) / 1e3),
              (d.initial_vid_res = T.m_nInitialVideoResolution),
              (d.ttff = this.m_nTimeToFirstFrameMS),
              (d.seg_duration = this.m_nSegmentDurationMS),
              this.GatherCommonStats(
                d,
                l,
                this.m_nBandwidthRequired,
                T.GetAverageBandwidth(),
              ),
              this.CreateNewEmptySnapshot(l.videoHeight),
              this.SendReportToServer(d, this.m_strStatsLink);
          }
          GetPlayerStatsSummary() {
            return {
              nTimeToFirstFrameMS:
                this.m_nTimeToFirstFrameMS > 0 ? this.m_nTimeToFirstFrameMS : 0,
              nBytesReceived: this.m_allTimeSnapshot.m_nBytesReceived,
              nAvgBandwidthBitSec: Math.round(
                this.m_allTimeSnapshot.GetAverageBandwidth(),
              ),
              nAvgSegmentDownloadMS: Math.ceil(
                this.m_allTimeSnapshot.GetAverageDownloadTime(),
              ),
              nFailedSegmentDownloads: this.m_allTimeSnapshot.m_nFailedSegments,
              nPlaybackStalls: this.m_allTimeSnapshot.m_nStallEvents,
              nFramesDropped: this.m_allTimeSnapshot.m_nFramesDropped,
              nLastVideoHeight: this.m_videoResolution,
              bUserSelectedRepresentation: this.m_bAtLeastOneUserRepresentation,
            };
          }
          async SendReportToServer(s, l) {
            let m = new URL(l),
              d = new FormData();
            for (let k of Object.keys(s)) d.append(k, s[k]);
            let T = m.searchParams.get("l");
            T && d.append("l", T),
              (T = m.searchParams.get("e")),
              T && d.append("e", T),
              (T = m.searchParams.get("h")),
              T && d.append("h", T),
              (0, A.q_)("CDASHStats Sending Report to Server", s),
              J()
                .post(l, d)
                .catch((k) => {
                  (0, A.q_)("Failed to upload stats: ", k);
                });
          }
          CreateNewEmptySnapshot(s) {
            this.m_rgSnapShots.length >= se && this.m_rgSnapShots.shift(),
              this.m_rgSnapShots.push(new G(s));
          }
          GatherCommonStats(s, l, m, d) {
            (s.steamid = this.m_steamIDViewer),
              (s.host = this.m_host),
              (s.playback_position = Math.round(l.currentTime)),
              (s.video_res = this.m_videoResolution),
              (s.audio_rate = this.m_audioRate),
              (s.audio_ch = this.m_audioChannel),
              (s.bw_required = m),
              (s.bw_avg = Math.round(d)),
              (s.broadcast_accountid = this.m_steamIDBroadcast
                ? new ee.b(this.m_steamIDBroadcast).GetAccountID()
                : 0),
              (s.useragent = window.navigator.userAgent),
              (s.sessionid = (0, N.KC)()),
              (s.broadcast_origin = this.m_strBroadcastOrigin);
          }
        }
        a([p.sH], w.prototype, "m_allTimeSnapshot", 2),
          a([p.sH], w.prototype, "m_strBufferingVideoResolution", 2),
          a([p.sH], w.prototype, "m_strPlaybackVideoResolution", 2),
          a([p.sH], w.prototype, "m_strHtmlVideoDisplay", 2),
          a([p.sH], w.prototype, "m_nBandwidthRequired", 2),
          a([p.sH], w.prototype, "m_nCurBandwidthVideo", 2),
          a([p.sH], w.prototype, "m_nAudioBufferedMS", 2),
          a([p.sH], w.prototype, "m_nVideoBufferedMS", 2),
          a([p.sH], w.prototype, "m_nActiveDownloads", 2),
          a([p.sH], w.prototype, "m_nVideoDownloadProgress", 2),
          a([p.sH], w.prototype, "m_videoBufferedRanges", 2),
          a([p.sH], w.prototype, "m_audioBufferedRanges", 2),
          a([p.sH], w.prototype, "m_nPlaybackRate", 2),
          a([p.XI], w.prototype, "SetVideoPlaybackResolution", 1),
          a([p.XI], w.prototype, "SetRepresentation", 1),
          a([p.XI], w.prototype, "SetCurrentVideoBandwidth", 1),
          a([p.XI], w.prototype, "CaptureFrequentlyUpdatingInformation", 1),
          a([p.XI], w.prototype, "LogDownload", 1),
          a([p.XI], w.prototype, "LogSegmentDownloadFailure", 1),
          a([p.XI], w.prototype, "LogFrameInfo", 1),
          a([p.XI], w.prototype, "LogBufferDuration", 1);
        class G {
          m_timeMS = Date.now();
          m_nBytesReceived = 0;
          m_nInitialVideoResolution = 0;
          m_nFailedSegments = 0;
          m_nStallEvents = 0;
          m_nEntries = 0;
          m_nSegmentDownloadTimeTotalMS = 0;
          m_nSegmentDownloadTimeMaxMS = 0;
          m_nSegmentDownloadTimeMinMS = 0;
          m_nBandwidthTotal = 0;
          m_nBandwidthMin = 0;
          m_nBandwidthMax = 0;
          m_nLastSegementDownloadStatus = 200;
          m_nFramesDecoded = 0;
          m_nFramesDropped = 0;
          constructor(s) {
            (0, p.Gn)(this), (this.m_nInitialVideoResolution = s);
          }
          GetAverageBandwidth() {
            return this.m_nBandwidthTotal / Math.max(1, this.m_nEntries);
          }
          GetAverageDownloadTime() {
            return (
              this.m_nSegmentDownloadTimeTotalMS / Math.max(1, this.m_nEntries)
            );
          }
          GetAverageBandwidthFromTwo(s) {
            return (
              (s.m_nBandwidthTotal + this.m_nBandwidthTotal) /
              Math.max(1, s.m_nEntries + this.m_nEntries)
            );
          }
          GetAverageDownloadTimeFromTwo(s) {
            return (
              (s.m_nSegmentDownloadTimeTotalMS +
                this.m_nSegmentDownloadTimeTotalMS) /
              Math.max(1, s.m_nEntries + this.m_nEntries)
            );
          }
          SegmentReceived(s, l) {
            if (((this.m_nBytesReceived += s), s < X)) return;
            let m = Math.round((s * 8 * 1e3) / Math.max(l, 1));
            this.m_nEntries == 0
              ? ((this.m_nSegmentDownloadTimeMinMS = l),
                (this.m_nBandwidthMin = m))
              : ((this.m_nSegmentDownloadTimeMinMS = Math.min(
                  l,
                  this.m_nSegmentDownloadTimeMinMS,
                )),
                (this.m_nBandwidthMin = Math.min(m, this.m_nBandwidthMin))),
              (this.m_nBandwidthMax = Math.max(m, this.m_nBandwidthMax)),
              (this.m_nSegmentDownloadTimeMaxMS = Math.max(
                l,
                this.m_nSegmentDownloadTimeMaxMS,
              )),
              (this.m_nBandwidthTotal += m),
              (this.m_nSegmentDownloadTimeTotalMS += l),
              (this.m_nEntries += 1);
          }
        }
        a([p.sH], G.prototype, "m_nBytesReceived", 2),
          a([p.sH], G.prototype, "m_nFailedSegments", 2),
          a([p.sH], G.prototype, "m_nStallEvents", 2),
          a([p.sH], G.prototype, "m_nSegmentDownloadTimeMaxMS", 2),
          a([p.sH], G.prototype, "m_nSegmentDownloadTimeMinMS", 2),
          a([p.sH], G.prototype, "m_nBandwidthMin", 2),
          a([p.sH], G.prototype, "m_nBandwidthMax", 2),
          a([p.sH], G.prototype, "m_nFramesDecoded", 2),
          a([p.sH], G.prototype, "m_nFramesDropped", 2),
          a([p.XI], G.prototype, "SegmentReceived", 1);
        class _e {
          bDropReading = !1;
          nTotalDecodedFrames = 0;
          reset(s, l) {
            (this.bDropReading = s), (this.nTotalDecodedFrames = l);
          }
        }
        class ae {
          constructor() {
            (0, p.Gn)(this);
          }
          k_nTestFrequencyMS = 1e3;
          k_nSlidingWindow = 6;
          k_nDroppedFramesThreshold = 1;
          k_nFailThreshold = 3;
          k_nIgnoreReadingAroundResizeMS = 2e3;
          m_schTracker = new H.LU();
          m_rgResultsWindow = [];
          m_nLastResizeMS = 0;
          m_lastFrameInfo = { framesDecoded: 0, framesDropped: 0 };
          m_bDroppingFrameDetected = !1;
          m_nCurrentFPS = 0;
          m_fnRequestDecoded = null;
          StartTracking(s) {
            this.m_schTracker.Schedule(
              this.k_nTestFrequencyMS,
              this.TakeReading,
            ),
              (this.m_fnRequestDecoded = s),
              (this.m_lastFrameInfo = this.m_fnRequestDecoded()),
              (this.m_bDroppingFrameDetected = !1);
          }
          BHasCurrentFPS() {
            return this.m_nCurrentFPS != 0;
          }
          GetCurrentFPS() {
            return this.m_nCurrentFPS;
          }
          BIsDroppingFrames() {
            return this.m_bDroppingFrameDetected;
          }
          SetWindowResized() {
            this.m_nLastResizeMS = Date.now();
          }
          BIsInResizeTimeWindow() {
            return (
              !!this.m_nLastResizeMS &&
              Date.now() - this.m_nLastResizeMS <
                this.k_nIgnoreReadingAroundResizeMS
            );
          }
          Close() {
            this.m_schTracker.Cancel(),
              (this.m_rgResultsWindow = []),
              (this.m_bDroppingFrameDetected = !1);
          }
          LogResizeAction() {
            this.m_nLastResizeMS = Date.now();
          }
          TakeReading() {
            if (!this.m_fnRequestDecoded) return;
            this.m_schTracker.Schedule(
              this.k_nTestFrequencyMS,
              this.TakeReading,
            );
            let s = !1,
              l = this.m_fnRequestDecoded();
            this.BIsInResizeTimeWindow() ||
              (s =
                this.m_lastFrameInfo.framesDropped > 0 &&
                l.framesDropped - this.m_lastFrameInfo.framesDropped >
                  this.k_nDroppedFramesThreshold),
              this.AppendReading(s, l.framesDecoded),
              (this.m_bDroppingFrameDetected = this.ComputeDroppingFrames()),
              (this.m_nCurrentFPS =
                l.framesDecoded -
                this.m_lastFrameInfo.framesDecoded -
                (l.framesDropped - this.m_lastFrameInfo.framesDropped)),
              (this.m_lastFrameInfo = l);
          }
          ComputeDroppingFrames() {
            return (
              this.m_rgResultsWindow.length == this.k_nSlidingWindow &&
              this.m_rgResultsWindow.filter((s) => s.bDropReading).length >=
                this.k_nFailThreshold
            );
          }
          AppendReading(s, l) {
            let m;
            this.m_rgResultsWindow.length >= this.k_nSlidingWindow
              ? (m = this.m_rgResultsWindow.shift())
              : (m = new _e()),
              m.reset(s, l),
              this.m_rgResultsWindow.push(m);
          }
        }
        a([p.sH], ae.prototype, "m_bDroppingFrameDetected", 2),
          a([p.sH], ae.prototype, "m_nCurrentFPS", 2),
          a([p.XI.bound], ae.prototype, "TakeReading", 1);
      },
      14043: (ge, re, B) => {
        B.d(re, { Y: () => p, n: () => V });
        const p = "auto";
        function V(J) {
          return J.id == p;
        }
      },
      48937: (ge, re, B) => {
        B.d(re, {
          Mc: () => $,
          ZI: () => A,
          aM: () => _,
          ap: () => H,
          q_: () => ee,
        });
        var p = B(57589);
        const V = new p.wd("video"),
          J = V.Info,
          ee = V.Debug,
          A = V.Error,
          N = V.Warning;
        function H(q) {
          let x = Math.floor(q / 3600),
            a = Math.floor(q / 60) % 60,
            se = Math.floor(q) % 60,
            Y = se.toString();
          se < 10 && (Y = "0" + Y);
          let Q = a.toString();
          return (
            a < 10 && x > 0 && (Q = "0" + Q),
            (x > 0 ? x + ":" : "") + Q + ":" + Y
          );
        }
        function $() {
          let q = !1;
          try {
            q = MediaSource.isTypeSupported(
              'video/mp4;codecs="avc1.4d4032,mp4a.40.2"',
            );
          } catch {}
          return q;
        }
        function _() {
          let x = document
            .createElement("video")
            .canPlayType(
              'application/vnd.apple.mpegurl;codecs="avc1.64001f,mp4a.40.02"',
            );
          return x === "probably" || x === "maybe";
        }
      },
    },
  ]);
})();
