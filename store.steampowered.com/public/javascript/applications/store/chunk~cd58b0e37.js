/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8759],
  {
    40414: (e, t, n) => {
      n.d(t, { z5: () => m, zU: () => _ });
      var r = n(12611),
        s = n(7221),
        i = n(22837),
        o = n(37085),
        a = n(3577),
        l = n(34214),
        d = n(17720),
        u = n(81393),
        c = n(68797),
        g = n(82817),
        h = n(8527);
      function m(e, t, n = 0) {
        return p(e, t, n);
      }
      function p(e, t, n = 0) {
        if (!e || 0 == e.length) return null;
        if (e?.startsWith(r.lw)) return _.ReplacementTokenToClanImageURL(e);
        if (e?.startsWith(r.eg)) {
          const s = new Array(),
            o = _.GetBaseURL(),
            a = e.substring(r.eg.length + 1),
            l = parseInt(a.substring(0, a.indexOf("/"))),
            d = a.substring(a.indexOf("/") + 1),
            u = _.GetHashFromHashAndExt(d),
            c = _.GetExtStringFromHashAndExt(d);
          if (null != t) {
            let e = (0, i.LgB)(t);
            s.push(o + l + "/" + u + "/" + e + c + "?t=" + n),
              t == i.Pn1 &&
                ((e = (0, i.x6o)((0, i.LgB)(t))),
                s.push(o + l + "/" + u + "/" + e + c + "?t=" + n));
          }
          return s.push(_.GenerateURLFromHashAndExt(l, d)), s;
        }
        return e;
      }
      const _ = {
        GetBaseURL: () => `${h.TS.CLAN_CDN_ASSET_URL}images/`,
        GetBaseURLV2: () => `${h.TS.CLAN_CDN_ASSET_URL}locimages/`,
        ReplacementTokenToClanImageURL(e) {
          return (e = e.replace(r.lw, this.GetBaseURL())).replace(
            "http://",
            "https://",
          );
        },
        ExtractHashFromBBCodeURL(e) {
          const t =
            /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
              e,
            );
          return t?.groups
            ? [t.groups.filename, parseInt(t.groups.clanid)]
            : [void 0, void 0];
        },
        GetExtensionString: (e) =>
          (null != e.file_type ? (0, g.EG)(e.file_type) : null) ?? ".jpg",
        GetHashAndExt(e) {
          return e ? e.image_hash + this.GetExtensionString(e) : null;
        },
        GetThumbHashAndExt(e) {
          return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
        },
        GetHashFromHashAndExt(e) {
          let t = e.substring(e.lastIndexOf("."));
          return e.substring(0, e.length - t.length);
        },
        GetExtStringFromHashAndExt: (e) => e.substring(e.lastIndexOf(".")),
        GenerateURLFromHashAndExt(e, t, n = s.wI.full) {
          return this.GenerateURLFromHashAndExtAndLang(e, t, n, i.xPp, void 0);
        },
        GenerateURLFromHashAndExtAndLang(e, t, n = s.wI.full, r, o) {
          e instanceof d.b && (e = e.GetAccountID());
          let a = this.GetBaseURL();
          const l = null != r && r != i.xPp;
          if (n != s.wI.full || l) {
            let s = t.substring(t.lastIndexOf(".")),
              d = t.substring(0, t.length - s.length);
            return l && r != i.Bhc && "localized_image_group" == o
              ? a + e + "/" + d + "/" + (0, i.x6o)((0, i.LgB)(r)) + s
              : a + e + "/" + d + n + s;
          }
          return a + e + "/" + t;
        },
        GetHashAndExtFromURL(e) {
          let t = this.GetBaseURL();
          return e?.startsWith(t)
            ? -1 == (e = e.substring(t.length)).indexOf("/")
              ? null
              : (e = e.substring(e.indexOf("/") + 1))
            : null;
        },
        GenerateEditableURLFromHashAndExt(e, t, n) {
          let r =
            h.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/showclanimage/?image_hash_and_ext=" +
            t;
          return n && (r += "&lang=" + n), r;
        },
        GetMimeType: (e) => (0, g.ab)(e),
        async AsyncGetImageResolution(e, t, n, r, s) {
          const i = t + this.GetExtensionString({ file_type: n }),
            o = this.GenerateEditableURLFromHashAndExt(e, i);
          return await this.AsyncGetImageResolutionInternal(o, r, s);
        },
        async AsyncGetImageResolutionInternal(e, t, n) {
          const r = (0, a.x0)();
          let s = new Image();
          (s.crossOrigin = "anonymous"),
            (s.onerror = (t) => {
              const s = { success: o.zi };
              n ||
                ((s.err_msg =
                  "Load fail on url " +
                  e +
                  " with error: " +
                  (0, c.H)(t).strErrorMsg),
                console.error(s.err_msg)),
                (s.success = o.zi),
                r.resolve(s);
            }),
            (s.onload = () => {
              const t = { success: o.zi };
              (t.width = s.width),
                (t.height = s.height),
                (0, u.wT)(
                  t.width > 0 && t.height > 0,
                  "unexpected image resolution discovered for strURL: " + e,
                ),
                (t.success = o.R),
                r.resolve(t);
            }),
            (s.src = e),
            t.token.promise.catch(() => {
              const e = { success: o.zi };
              return (s.onload = () => {}), (e.success = o.e9), e;
            });
          const i = new Promise((e, t) => setTimeout(() => t(), 1e4));
          let l;
          try {
            l = await Promise.race([i, r.promise]);
          } catch {
            l = { success: o._3, err_msg: "We timed out processing images" };
          }
          return l;
        },
        BIsClanImageVideo: (e) =>
          e.file_type == l.bg.nn || e.file_type == l.bg.pJ,
      };
    },
    7221: (e, t, n) => {
      n.d(t, { pb: () => s, wI: () => r });
      var r;
      !(function (e) {
        (e.full = ""),
          (e.background_main = "_960x311"),
          (e.background_mini = "_480x156"),
          (e.capsule_main = "_400x225"),
          (e.spotlight_main = "_1054x230");
      })(r || (r = {}));
      const s = [
        "localized_image_group",
        "link_capsule",
        "product_mobile_banner_override",
        "product_banner_override",
        "sale_section_title",
        "schedule_track_art",
        "localized_background_art",
      ];
    },
    3577: (e, t, n) => {
      function r() {
        let e, t;
        return {
          promise: new Promise((n, r) => {
            (e = n), (t = r);
          }),
          resolve: e,
          reject: t,
        };
      }
      n.d(t, { x0: () => r });
    },
    12611: (e, t, n) => {
      n.d(t, { eg: () => s, lw: () => r, qR: () => i });
      const r = "{STEAM_CLAN_IMAGE}",
        s = "{STEAM_CLAN_LOC_IMAGE}",
        i = "{STEAM_APP_IMAGE}";
    },
    82817: (e, t, n) => {
      n.d(t, {
        EG: () => o,
        II: () => g,
        Uz: () => u,
        aL: () => d,
        ab: () => i,
        zB: () => c,
      });
      var r = n(3577),
        s = n(34214);
      function i(e) {
        const t = e.toLowerCase();
        return t.endsWith(".jpg") || t.endsWith(".jpeg")
          ? "image/jpeg"
          : t.endsWith(".png")
            ? "image/png"
            : t.endsWith(".gif")
              ? "image/gif"
              : t.endsWith(".mp4")
                ? "video/mp4"
                : t.endsWith(".webm")
                  ? "video/webm"
                  : t.endsWith(".srt")
                    ? "text/srt"
                    : t.endsWith(".vtt")
                      ? "text/vtt"
                      : t.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
      }
      function o(e) {
        switch (e) {
          case s.bg.iS:
            return ".jpg";
          case s.bg.CK:
            return ".gif";
          case s.bg.dU:
            return ".png";
          case s.bg.pJ:
            return ".webm";
          case s.bg.nn:
            return ".mp4";
          case s.bg.pi:
            return ".srt";
          case s.bg.k7:
            return ".vtt";
          case s.bg.wD:
            return ".webp";
        }
      }
      function a(e) {
        const t = (0, r.x0)(),
          n = new Image();
        return (
          (n.onload = () => t.resolve(n)),
          (n.onerror = (e) => {
            console.error("LoadImage failed to load the image, details", e),
              t.resolve(void 0);
          }),
          (n.src = e),
          t.promise
        );
      }
      function l(e) {
        const t = (0, r.x0)(),
          n = document.createElement("video");
        return (
          (n.preload = "metadata"),
          n.addEventListener("loadedmetadata", () => t.resolve(n)),
          (n.onerror = (e) => {
            console.error("LoadVideo failed to load the video, details", e),
              t.resolve(void 0);
          }),
          (n.src = e),
          t.promise
        );
      }
      function d(e) {
        return e.startsWith("image/");
      }
      function u(e) {
        return e.startsWith("video/");
      }
      async function c(e, t) {
        if (t) return l(URL.createObjectURL(e));
        {
          const t = (0, r.x0)(),
            n = new FileReader();
          (n.onload = () => t.resolve(n.result ?? void 0)),
            (n.onerror = () => {
              console.error(
                "GetMediaElementFromFile failed to load the image, details",
                n.error,
              ),
                t.resolve(void 0);
            }),
            n.readAsDataURL(e);
          const s = await t.promise;
          if (!s) return;
          return a(s.toString());
        }
      }
      function g(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
    },
  },
]);
