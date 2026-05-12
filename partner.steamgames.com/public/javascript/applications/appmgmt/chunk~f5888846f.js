/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4829],
  {
    3577: (e, t, n) => {
      function i() {
        let e, t;
        return {
          promise: new Promise((n, i) => {
            (e = n), (t = i);
          }),
          resolve: e,
          reject: t,
        };
      }
      function r(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      n.d(t, { x0: () => i, yI: () => r });
    },
    63556: (e, t, n) => {
      n.d(t, { E: () => _, O: () => d });
      var i = n(34629),
        r = n(14947),
        s = n(65946),
        o = n(22837),
        a = n(62490),
        u = n(6419),
        c = n(78327),
        l = n(91986);
      class d {
        m_eCurLang = (0, o.sfN)(c.TS.LANGUAGE);
        m_rgHasData = (0, a.$Y)([], o.bP9, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new l.l();
        GetCallback() {
          return this.m_callback;
        }
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(e) {
          return (
            this.m_eCurLang != e &&
            ((this.m_eCurLang = e), this.GetCallback().Dispatch(e), !0)
          );
        }
        SetHasLanguage(e) {
          e.forEach((e, t) => {
            this.m_rgHasData[t] != e && (this.m_rgHasData[t] = e);
          });
        }
        BHasLanguageData(e) {
          return this.m_rgHasData[e];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(e) {
          e != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = e);
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            d.s_globalSingletonStore ||
              ((d.s_globalSingletonStore = new d()),
              "dev" == c.TS.WEB_UNIVERSE &&
                (window.DUS = d.s_globalSingletonStore)),
            d.s_globalSingletonStore
          );
        }
        constructor() {
          (0, r.Gn)(this);
        }
      }
      function _() {
        return (0, s.q3)(() => d.Get().GetCurEditLanguage());
      }
      (0, i.Cg)([r.sH], d.prototype, "m_eCurLang", void 0),
        (0, i.Cg)([r.sH], d.prototype, "m_rgHasData", void 0),
        (0, i.Cg)([r.sH], d.prototype, "m_bHasLocalizationContext", void 0),
        (0, i.Cg)([u.o], d.prototype, "GetCurEditLanguage", null),
        (0, i.Cg)([u.o], d.prototype, "SetCurEditLanguage", null),
        (0, i.Cg)([r.XI.bound], d.prototype, "SetHasLanguage", null),
        (0, i.Cg)([u.o], d.prototype, "BHasLanguageData", null);
    },
    55263: (e, t, n) => {
      n.d(t, {
        G6: () => g,
        Gg: () => f,
        MS: () => b,
        Ow: () => p,
        Sq: () => l,
        eR: () => d,
        gF: () => w,
        ik: () => _,
        t7: () => m,
        zX: () => v,
      });
      var i = n(41735),
        r = n.n(i),
        s = n(90626),
        o = n(37085),
        a = n(96171),
        u = n(73745),
        c = n(16021);
      const l = 1,
        d = 2,
        _ = 3;
      function g(e, t, n, i) {
        const a = (0, s.useRef)(void 0),
          g = (0, s.useRef)(void 0),
          m = (0, u.CH)();
        a.current = e;
        const [p, f] = (0, s.useState)(void 0),
          {
            include_assets: h,
            include_release: v,
            include_platforms: b,
            include_all_purchase_options: w,
            include_screenshots: C,
            include_trailers: S,
            include_ratings: L,
            include_tag_count: G,
            include_reviews: H,
            include_basic_info: I,
            include_supported_languages: k,
            include_full_description: y,
            include_included_items: x,
            include_assets_without_overrides: E,
            apply_user_filters: W,
            include_links: A,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            const n = {
              include_assets: h,
              include_release: v,
              include_platforms: b,
              include_all_purchase_options: w,
              include_screenshots: C,
              include_trailers: S,
              include_ratings: L,
              include_tag_count: G,
              include_reviews: H,
              include_basic_info: I,
              include_supported_languages: k,
              include_full_description: y,
              include_included_items: x,
              include_assets_without_overrides: E,
              apply_user_filters: W,
              include_links: A,
            };
            let s = null;
            return (
              !e ||
                e < 0 ||
                c.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== p && i && i == g.current) ||
                (i !== g.current && (f(void 0), (g.current = i)),
                (s = r().CancelToken.source()),
                c.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    s?.token.reason || a.current !== e || f(t == o.R), m();
                  })),
              () => s?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, p, h, v, b, w, C, S, L, G, H, I, k, y, x, E, W, A, m]),
          !e)
        )
          return [null, d];
        if (!1 === p) return [void 0, d];
        if (c.A.Get().BIsStoreItemMissing(e, t)) return [void 0, d];
        if (!c.A.Get().BHasStoreItem(e, t, n)) return [void 0, l];
        const R = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return R ? [R, _] : [null, d];
      }
      function m(e, t, n) {
        return g(e, a.c6.qI, t, n);
      }
      function p(e, t, n) {
        return g(e, a.c6.xO, t, n);
      }
      function f(e, t, n) {
        return g(e, a.c6.RD, t, n);
      }
      function h(e, t, n, i) {
        const o = (0, u.CH)(),
          {
            include_assets: a,
            include_release: g,
            include_platforms: m,
            include_all_purchase_options: p,
            include_screenshots: f,
            include_trailers: h,
            include_ratings: v,
            include_tag_count: b,
            include_reviews: w,
            include_basic_info: C,
            include_supported_languages: S,
            include_full_description: L,
            include_included_items: G,
            include_assets_without_overrides: H,
            apply_user_filters: I,
            include_links: k,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: a,
                include_release: g,
                include_platforms: m,
                include_all_purchase_options: p,
                include_screenshots: f,
                include_trailers: h,
                include_ratings: v,
                include_tag_count: b,
                include_reviews: w,
                include_basic_info: C,
                include_supported_languages: S,
                include_full_description: L,
                include_included_items: G,
                include_assets_without_overrides: H,
                apply_user_filters: I,
                include_links: k,
              },
              i = e.filter(
                (e) =>
                  !(
                    c.A.Get().BHasStoreItem(e, t, n) ||
                    c.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == i.length) return;
            const s = r().CancelToken.source(),
              u = i.map((e) => c.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(u).then(() => {
                s.token.reason || o();
              }),
              () => s.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, o, a, g, m, p, f, h, v, b, w, C, S, L, G, H, I, k]),
          !e)
        )
          return d;
        if (
          !e.every(
            (e) =>
              c.A.Get().BHasStoreItem(e, t, n) ||
              c.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return l;
        return e.every((e) =>
          c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? _
          : d;
      }
      function v(e, t, n) {
        return h(e, a.c6.qI, t, n);
      }
      function b(e, t, n) {
        return h(e, a.c6.xO, t, n);
      }
      function w(e, t, n) {
        return h(e, a.c6.RD, t, n);
      }
    },
    82817: (e, t, n) => {
      n.d(t, {
        EG: () => a,
        II: () => m,
        N1: () => p,
        S2: () => _,
        Uz: () => d,
        aL: () => l,
        ab: () => s,
        qR: () => o,
        zB: () => g,
      });
      var i = n(3577),
        r = n(34214);
      function s(e) {
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
          case "image/jpeg":
            return ".jpg";
          case "image/png":
            return ".png";
          case "image/gif":
            return ".gif";
          case "video/mp4":
            return ".mp4";
          case "video/webm":
            return ".webm";
          case "text/vtt":
            return ".vtt";
          case "text/srt":
            return ".srt";
          case "image/webp":
            return ".webp";
        }
        return (
          console.error("ConvertMimeTypeToExtension:Unexepected mime type ", e),
          ".jpg"
        );
      }
      function a(e) {
        switch (e) {
          case r.bg.iS:
            return ".jpg";
          case r.bg.CK:
            return ".gif";
          case r.bg.dU:
            return ".png";
          case r.bg.pJ:
            return ".webm";
          case r.bg.nn:
            return ".mp4";
          case r.bg.pi:
            return ".srt";
          case r.bg.k7:
            return ".vtt";
          case r.bg.wD:
            return ".webp";
        }
      }
      function u(e) {
        const t = (0, i.x0)(),
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
      function c(e) {
        const t = (0, i.x0)(),
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
      function l(e) {
        return e.startsWith("image/");
      }
      function d(e) {
        return e.startsWith("video/");
      }
      function _(e, t) {
        return t ? c(e) : u(e);
      }
      async function g(e, t) {
        if (t) return c(URL.createObjectURL(e));
        {
          const t = (0, i.x0)(),
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
          const r = await t.promise;
          if (!r) return;
          return u(r.toString());
        }
      }
      function m(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
      function p(e, t) {
        if (!t) return e;
        const n = new Set([
          "content-length",
          "host",
          "origin",
          "referer",
          "user-agent",
          "cookie",
          "set-cookie",
          "connection",
          "upgrade",
        ]);
        for (const i of t) n.has(i.name.toLowerCase()) || (e[i.name] = i.value);
        return e;
      }
    },
  },
]);
