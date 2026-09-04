/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [3506],
    {
      28922: (G, N, s) => {
        "use strict";
        s.d(N, { s: () => v });
        var e = s(7850),
          r = s(39905),
          b = s(90626),
          k = s(43465),
          R = s(58534),
          L = s(249),
          K = s(71421),
          O = s(27828),
          _ = s.n(O);
        function o(i) {
          return `rgba(${i.rgb.r}, ${i.rgb.g}, ${i.rgb.b}, ${i.rgb.a})`;
        }
        function g(i) {
          const l = parseInt(i.slice(1), 16),
            m = (l >> 16) & 255,
            f = (l >> 8) & 255,
            t = l & 255;
          return `rgba(${m}, ${f}, ${t}, 1)`;
        }
        function v(i) {
          const { color: l, onChange: m, strTitle: f, disableAlpha: t } = i,
            [h, d] = (0, b.useState)(() => l || "rgba(255, 255, 255, 1)"),
            I = (0, b.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(r.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const c = (await new window.EyeDropper().open()).sRGBHex,
                  u = g(c);
                d(u), m(u);
              } catch (a) {
                console.warn(r.Z.Localize("#Sale_EyeDropperFailed"), a);
              }
            }, [m]);
          return (0, e.jsxs)("div", {
            className: _().ColorPickerDialog,
            children: [
              !!f && (0, e.jsx)(R.JU, { children: f }),
              (0, e.jsx)(k.xk, {
                onChange: (a) => {
                  const n = o(a);
                  d(n), m(n);
                },
                color: h,
                disableAlpha: t,
                className: _().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: _().EyeDropperCtn,
                children: (0, e.jsx)(K.Gq, {
                  toolTipContent: r.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(R.$n, {
                    className: _().EyeDropperBtn,
                    onClick: I,
                    children: (0, e.jsx)(L.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
      },
      76846: (G, N, s) => {
        "use strict";
        s.d(N, { p: () => K });
        var e = s(7850),
          r = s(39905),
          b = s(90626),
          k = s(16346),
          R = s(28922);
        function L(O) {
          const {
              color: _,
              onChange: o,
              onRequestClose: g,
              disableAlpha: v,
              strTitle: i,
            } = O,
            l = (0, b.useRef)(null);
          return (
            (0, b.useEffect)(() => {
              const m = l.current?.ownerDocument ?? document,
                f = (h) => {
                  l.current && !l.current.contains(h.target) && g();
                },
                t = (h) => {
                  h.key === "Escape" && g();
                };
              return (
                m.addEventListener("pointerdown", f, !0),
                m.addEventListener("keydown", t, !0),
                () => {
                  m.removeEventListener("pointerdown", f, !0),
                    m.removeEventListener("keydown", t, !0);
                }
              );
            }, [g]),
            (0, e.jsx)("div", {
              ref: l,
              children: (0, e.jsx)(R.s, {
                color: _,
                disableAlpha: v,
                strTitle: i ?? r.Z.Localize("#Button_Color"),
                onChange: o,
              }),
            })
          );
        }
        function K() {
          return {
            openColorPicker: (0, b.useCallback)((_, o) => {
              let g = null;
              const v = () => g?.Hide();
              g = (0, k.lX)(
                (0, e.jsx)(L, {
                  color: o.color,
                  disableAlpha: o.disableAlpha,
                  strTitle: o.strTitle,
                  onChange: o.onChange,
                  onRequestClose: v,
                }),
                _,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
      },
      25279: (G, N, s) => {
        "use strict";
        s.d(N, {
          Ek: () => W,
          FZ: () => t,
          Fj: () => V,
          Hj: () => d,
          Ho: () => F,
          Kf: () => A,
          N_: () => z,
          PL: () => n,
          XY: () => le,
          Yw: () => f,
          _d: () => I,
          cV: () => c,
          dM: () => T,
          on: () => a,
          qj: () => P,
          s4: () => ie,
          tW: () => h,
          vz: () => oe,
          x: () => j,
          yu: () => Y,
        });
        var e = s(72849);
        const r = 622,
          b = 1920,
          k = 450,
          R = 800,
          L = 460,
          K = 2108,
          O = 300,
          _ = 800,
          o = 300,
          g = 644,
          v = 337,
          i = 155,
          l = 433,
          m = 199,
          f = ["app_header_capsule", "app_main_capsule"],
          t = [
            "sale_header",
            "sale_logo",
            "capsule",
            "product_banner",
            "product_mobile_banner",
            "localized_title_image",
          ],
          h = ["takeunder_art", "takeunder_mobile_art"],
          d = [
            "takeover_art",
            "takeover_mobile_art",
            "takeover_webm_art",
            "takeover_mp4_art",
            "takeover_webm_mobile_art",
            "takeover_mp4_mobile_art",
          ],
          I = ["marketingmessage_art", "marketingmessage_art_2"],
          a = [
            "marketingmessage_art_eventcapsule",
            "marketingmessage_art_2_eventcapsule",
          ],
          n = ["spotlight_art_hero"],
          c = [...f, ...t, ...h, ...d, ...I, ...a, ...n],
          u = [
            "spotlight",
            "background",
            "hero",
            "email_full",
            "email_centered",
            "broadcast_left",
            "broadcast_right",
            "localized_image_group",
            "sale_section_background",
            "sale_section_title",
            "sale_overlay",
            "link_capsule",
            "product_banner_override",
            "product_mobile_banner_override",
            "schedule_track_art",
            "tab_bar_background",
            "bestofyear_banner",
            "bestofyear_banner_mobile",
            "localized_marketing_message",
            "localized_optin_banner",
            "old_spotlight_art",
            "user_poll_background",
            "localized_marketingmessage_webm",
            "localized_marketingmessage_mp4",
            "localized_subtitles",
            "localized_marketingmessage_poster",
            "localized_marketingmessage_background",
            "localized_store_app_spotlight",
            "localized_store_app_spotlight_mobile",
            "localized_email_image",
            "localized_background_art",
            "edition_comparison",
            "template_asset",
            "sale_store_capsule_header",
            "sale_store_capsule_small",
            "sale_store_capsule_main",
            "sale_store_capsule_vertical",
            ...c,
          ];
        function P(D) {
          return Array.isArray(D) ? D[0] : D;
        }
        function T(D) {
          const E = Array.isArray(D) ? D : [D];
          return Math.min(...E);
        }
        function A(D, E) {
          return E === void 0 ? P(D) : Array.isArray(D) ? D[E] : D;
        }
        const B = [e.bg.iS, e.bg.dU, e.bg.CK, e.bg.wD],
          y = [e.bg.iS, e.bg.dU, e.bg.CK],
          p = [e.bg.iS, e.bg.dU],
          F = [e.bg.pJ, e.bg.nn],
          j = [e.bg.pi, e.bg.k7],
          Z = [e.bg.iS, e.bg.dU, e.bg.CK, e.bg.wD, e.bg.pJ, e.bg.nn],
          V = {
            capsule: { width: R, height: k, rgAcceptableTypes: p },
            marketingmessage_art_2_eventcapsule: {
              width: R,
              height: k,
              rgAcceptableTypes: p,
            },
            marketingmessage_art_eventcapsule: {
              width: R,
              height: k,
              rgAcceptableTypes: p,
            },
            spotlight: { width: K, height: L, rgAcceptableTypes: p },
            localized_store_app_spotlight: {
              width: 1200,
              height: 260,
              rgAcceptableTypes: p,
            },
            localized_store_app_spotlight_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: p,
            },
            localized_title_image: {
              width: b,
              height: r,
              rgAcceptableTypes: p,
            },
            background: { width: b, height: r, rgAcceptableTypes: p },
            hero: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            email_full: { width: _, height: O, rgAcceptableTypes: p },
            email_centered: { width: g, height: o, rgAcceptableTypes: p },
            broadcast_left: {
              width: [m, i],
              height: [l, v],
              rgAcceptableTypes: p,
            },
            broadcast_right: {
              width: [m, i],
              height: [l, v],
              rgAcceptableTypes: p,
            },
            sale_header: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: y,
            },
            sale_overlay: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: y,
            },
            localized_image_group: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            localized_background_art: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            sale_section_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: y,
            },
            sale_section_title: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: y,
            },
            link_capsule: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            product_banner: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: p,
            },
            product_mobile_banner: {
              width: 500,
              height: 160,
              rgAcceptableTypes: p,
            },
            product_banner_override: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: p,
            },
            product_mobile_banner_override: {
              width: 500,
              height: 160,
              rgAcceptableTypes: p,
            },
            schedule_track_art: {
              width: 196,
              height: 92,
              rgAcceptableTypes: p,
            },
            tab_bar_background: {
              width: 1500,
              height: 100,
              rgAcceptableTypes: p,
            },
            sale_logo: {
              width: [1200, 940],
              height: [460, 460],
              rgAcceptableTypes: p,
            },
            bestofyear_banner: {
              width: 1100,
              height: 160,
              rgAcceptableTypes: y,
            },
            bestofyear_banner_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: y,
            },
            localized_marketing_message: {
              width: 570,
              height: 600,
              rgAcceptableTypes: B,
            },
            localized_optin_banner: {
              width: 1e3,
              height: 150,
              rgAcceptableTypes: p,
            },
            localized_marketingmessage_webm: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [e.bg.pJ],
            },
            localized_marketingmessage_mp4: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [e.bg.nn],
            },
            localized_partnerevent_webm: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [e.bg.pJ],
            },
            localized_partnerevent_mp4: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [e.bg.nn],
            },
            localized_subtitles: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: [e.bg.k7, e.bg.pi],
            },
            localized_marketingmessage_poster: {
              width: 528,
              height: 297,
              rgAcceptableTypes: [e.bg.iS, e.bg.dU],
            },
            localized_marketingmessage_background: {
              width: 570,
              height: 600,
              rgAcceptableTypes: p,
            },
            localized_email_image: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            template_asset: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: Z,
            },
            user_poll_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            sale_store_capsule_header: {
              width: 920,
              height: 430,
              rgAcceptableTypes: p,
            },
            sale_store_capsule_small: {
              width: 462,
              height: 174,
              rgAcceptableTypes: p,
            },
            sale_store_capsule_main: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: p,
            },
            sale_store_capsule_vertical: {
              width: 748,
              height: 896,
              rgAcceptableTypes: p,
            },
            spotlight_art: { width: 306, height: 260, rgAcceptableTypes: y },
            spotlight_art_hero: {
              width: 748,
              height: 896,
              rgAcceptableTypes: p,
            },
            old_spotlight_art: {
              width: 306,
              height: 350,
              rgAcceptableTypes: y,
            },
            marketingmessage_art: {
              width: 570,
              height: 600,
              rgAcceptableTypes: y,
            },
            marketingmessage_art_2: {
              width: 570,
              height: 600,
              rgAcceptableTypes: y,
            },
            takeover_art: { width: 1850, height: 450, rgAcceptableTypes: y },
            takeover_webm_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [e.bg.pJ],
            },
            takeover_mp4_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [e.bg.nn],
            },
            takeover_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: y,
            },
            takeover_webm_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [e.bg.pJ],
            },
            takeover_mp4_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [e.bg.nn],
            },
            takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: y },
            takeunder_mobile_art: {
              width: 500,
              height: 160,
              rgAcceptableTypes: y,
            },
            app_header_capsule: {
              width: 920,
              height: 430,
              rgAcceptableTypes: p,
            },
            app_main_capsule: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: p,
            },
          };
        function W(D, E, M, w) {
          let C = null;
          if (Array.isArray(M)) {
            if (
              ((C = M.map((S, H) => (D === S ? H : void 0)).filter(
                (S) => S !== void 0,
              )),
              C.length <= 0)
            )
              return !1;
          } else if (D !== M) return !1;
          if (Array.isArray(w)) {
            const S = w
              .map((H, $) => (E === H ? $ : void 0))
              .filter((H) => H !== void 0);
            if (S.length <= 0 || (C?.length && !S.some((H) => C.includes(H))))
              return !1;
          } else if (E !== w) return !1;
          return !0;
        }
        function Y(D, E, M, w) {
          const C = V[M];
          return C
            ? C.bDisableEnforceDimensions
              ? !!w
              : W(D, E, C.width, C.height)
            : !1;
        }
        function ie(D, E, M) {
          const w = V[M];
          if (!w) return !1;
          if (w.bDisableEnforceDimensions) return !0;
          if (Array.isArray(w.width)) {
            if (w.width.filter((C) => D < C).length == w.width.length)
              return !1;
          } else if (D < w.width) return !1;
          if (Array.isArray(w.height)) {
            if (w.height.filter((C) => E < C).length == w.height.length)
              return !1;
          } else if (E < w.height) return !1;
          return !0;
        }
        function le(D) {
          const E = V[D];
          return (
            E.rgAcceptableTypes.includes(e.bg.k7) ||
            E.rgAcceptableTypes.includes(e.bg.pi)
          );
        }
        function oe(D, E) {
          return E.filter((M) => z(D, M));
        }
        function z(D, E) {
          return V[E].rgAcceptableTypes.includes(D);
        }
      },
      9472: (G, N, s) => {
        "use strict";
        s.d(N, { o: () => K, q: () => O });
        var e = s(14947),
          r = s(72849),
          b = s(6658),
          k = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          L = (_, o, g, v) => {
            for (
              var i = v > 1 ? void 0 : v ? R(o, g) : o, l = _.length - 1, m;
              l >= 0;
              l--
            )
              (m = _[l]) && (i = (v ? m(o, g, i) : m(i)) || i);
            return v && i && k(o, g, i), i;
          };
        function K(_) {
          return _ == "waiting" || _ == "uploading" || _ == "processing";
        }
        class O {
          m_originalSize = { width: 0, height: 0 };
          m_originalDataUrl = "";
          dataUrl = void 0;
          width = 0;
          height = 0;
          status = "pending";
          message = "";
          language = void 0;
          file;
          filename;
          uploadTime;
          fileType;
          constructor(o, g, v, i, l) {
            (0, e.Gn)(this),
              (this.file = o),
              (this.filename = g),
              (this.fileType = (0, b.yh)(g) ?? r.bg.w3),
              (this.language = v),
              (this.uploadTime = Date.now()),
              (this.status = "pending"),
              (this.m_originalSize = l),
              (this.height = l.height),
              (this.width = l.width),
              (this.m_originalDataUrl = i),
              (this.dataUrl = i);
          }
          ResetImage() {
            (this.height = this.m_originalSize.height),
              (this.width = this.m_originalSize.width),
              (this.dataUrl = this.m_originalDataUrl);
          }
          GetImageOptionLabel() {}
        }
        L([e.sH], O.prototype, "dataUrl", 2),
          L([e.sH], O.prototype, "width", 2),
          L([e.sH], O.prototype, "height", 2),
          L([e.sH], O.prototype, "status", 2),
          L([e.sH.ref], O.prototype, "message", 2),
          L([e.sH], O.prototype, "language", 2);
      },
      64: (G, N, s) => {
        "use strict";
        s.d(N, { IS: () => m, M7: () => h, T2: () => f });
        var e = s(14947),
          r = s(25279),
          b = s(18210),
          k = s(9472),
          R = s(21254),
          L = s(51746),
          K = Object.defineProperty,
          O = Object.getOwnPropertyDescriptor,
          _ = (a, n, c, u) => {
            for (
              var P = u > 1 ? void 0 : u ? O(n, c) : n, T = a.length - 1, A;
              T >= 0;
              T--
            )
              (A = a[T]) && (P = (u ? A(n, c, P) : A(P)) || P);
            return u && P && K(n, c, P), P;
          };
        const o = 960,
          g = 311,
          v = 480,
          i = 156;
        class l extends k.q {
          m_rgImageOptions;
          m_currentImageOption = void 0;
          m_currentImageOptionKey = void 0;
          constructor(n, c, u, P, T, A) {
            super(n, c, u, T, A), (0, e.Gn)(this), (this.m_rgImageOptions = P);
          }
          IsValidAssetType(n, c) {
            let u = 0,
              P = 0,
              T = !1,
              A =
                !this.m_rgImageOptions ||
                this.m_rgImageOptions.length === 0 ||
                this.m_rgImageOptions.some(
                  (Y) => Y.sKey == this.GetCurrentImageOption()?.sKey,
                );
            if (n) (u = n.width), (P = n.height), (T = !0);
            else if (this.GetCurrentImageOption()) {
              const Y = r.Fj[this.GetCurrentImageOption().artworkType];
              Y &&
                ((u = Y.width),
                (P = Y.height),
                (T = !Y.bDisableEnforceDimensions));
            }
            const B = this.width >= (0, r.dM)(u) && this.height >= (0, r.dM)(P),
              y = T ? (0, r.Ek)(this.width, this.height, u, P) : B,
              p = c && c != this.fileType,
              F =
                this.m_rgImageOptions && this.m_rgImageOptions.length > 0
                  ? (0, r.vz)(
                      this.fileType,
                      this.m_rgImageOptions?.map((Y) => Y.artworkType) || [],
                    ).length == 0
                  : !1,
              j = !!(0, R.t)(this.fileType);
            let Z = "",
              V = !1,
              W;
            return (
              A
                ? F
                  ? (Z = (0, b.we)("#ImageUpload_InvalidFileType"))
                  : p
                    ? (Z = (0, b.we)(
                        "#ImageUpload_InvalidFormat",
                        (0, L.EG)(c) ?? "",
                      ))
                    : !y && !j
                      ? (Z = (0, b.we)(
                          "#ImageUpload_InvalidResolution",
                          (0, r.qj)(u),
                          (0, r.qj)(P),
                        ))
                      : B
                        ? !y && j
                          ? ((Z = (0, b.we)(
                              "#ImageUpload_InvalidDimensions",
                              (0, r.qj)(u),
                              (0, r.qj)(P),
                            )),
                            (V = !0))
                          : ((Array.isArray(u) && this.width != (0, r.qj)(u)) ||
                              (Array.isArray(P) &&
                                this.height != (0, r.qj)(P))) &&
                            ((W = W ?? []),
                            W.push(
                              (0, b.we)(
                                "#ImageUpload_PreferredDimension",
                                (0, r.qj)(u),
                                (0, r.qj)(P),
                              ),
                            ))
                        : (Z = (0, b.we)(
                            "#ImageUpload_TooSmall",
                            (0, r.qj)(u),
                            (0, r.qj)(P),
                          ))
                : (Z = (0, b.we)("#ImageUpload_InvalidFormatSelected")),
              {
                error: Z,
                warnings: W,
                needsCrop: V,
                match: this.GetCurrentImageOption(),
              }
            );
          }
          BSupportsLanguages() {
            return !0;
          }
          ComputeDefaultImageOption() {
            if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0)
              return;
            const n = (0, r.vz)(
              this.fileType,
              this.m_rgImageOptions?.map((u) => u.artworkType),
            );
            let c = I(this.width, this.height, n, !1);
            if ((c === void 0 && (c = I(this.width, this.height, n, !0)), c)) {
              const u = this.m_rgImageOptions.find(
                (P) =>
                  P.artworkType == c &&
                  (!P.bEnforceDimensions ||
                    (P.width == this.width && P.height == this.height)),
              );
              if (u) return u;
            }
            return this.m_rgImageOptions[0];
          }
          get ImageOptions() {
            return this.m_rgImageOptions;
          }
          GetCurrentImageOptionKey() {
            return this.m_currentImageOptionKey;
          }
          GetCurrentImageOption() {
            return (
              this.m_currentImageOption ?? this.ComputeDefaultImageOption()
            );
          }
          SetCurrentImageOption(n) {
            (this.m_currentImageOption = n),
              (this.m_currentImageOptionKey = n?.sKey);
          }
        }
        _([e.sH], l.prototype, "m_currentImageOption", 2),
          _([e.sH], l.prototype, "m_currentImageOptionKey", 2);
        class m extends l {
          video;
          constructor(n, c, u, P, T, A, B) {
            super(n, c, u, P, T, A), (this.video = B);
          }
          BIsOriginalMinimumDimensions(n) {
            return (0, r.s4)(
              this.video.videoWidth,
              this.video.videoHeight,
              n.artworkType,
            );
          }
          FileTypeMatchesImageTypes(n) {
            return (0, r.N_)(this.fileType, n.artworkType);
          }
          BIsVideo() {
            return r.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        class f extends l {
          constructor(n, c, u, P) {
            super(n, c, u, P, URL.createObjectURL(n), { width: 0, height: 0 });
          }
          BIsOriginalMinimumDimensions(n) {
            return (0, r.XY)(n.artworkType);
          }
          FileTypeMatchesImageTypes(n) {
            return (0, r.N_)(this.fileType, n.artworkType);
          }
          BIsVideo() {
            return r.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        function t(a) {
          const n = a.split(".").pop()?.toLocaleLowerCase();
          return n == "webm" || n == "mp4";
        }
        class h extends l {
          bCropped = !1;
          localizedImageGroupPrimaryImage;
          media;
          constructor(n, c, u, P, T, A, B, y) {
            super(n, c, u, P, T, A),
              (0, e.Gn)(this),
              (this.media = B),
              (this.localizedImageGroupPrimaryImage = y);
          }
          IsValidAssetType(n, c) {
            return (
              (c = c ?? this.localizedImageGroupPrimaryImage?.file_type),
              super.IsValidAssetType(n, c)
            );
          }
          GetCanvasImageSource() {
            return this.media;
          }
          BIsOriginalMinimumDimensions(n) {
            return (0, r.s4)(
              this.media?.width ?? 0,
              this.media?.height ?? 0,
              n.artworkType,
            );
          }
          FileTypeMatchesImageTypes(n) {
            return (0, r.N_)(this.fileType, n.artworkType);
          }
          BIsVideo() {
            return r.Ho.includes(this.fileType);
          }
          GetResizeDimension() {
            return d(this.GetCurrentImageOption()?.artworkType);
          }
        }
        _([e.sH], h.prototype, "bCropped", 2);
        function d(a) {
          if (a === "background")
            return [
              { width: o, height: g },
              { width: v, height: i },
            ];
          if (a === "capsule")
            return [
              {
                width: (0, r.qj)(r.Fj[a].width) / 2,
                height: (0, r.qj)(r.Fj[a].height) / 2,
              },
            ];
          if (a === "spotlight")
            return [
              {
                width: (0, r.qj)(r.Fj[a].width) / 2,
                height: (0, r.qj)(r.Fj[a].height) / 2,
              },
            ];
        }
        function I(a, n, c, u = !1) {
          if (c) {
            for (let P of c)
              if (u ? (0, r.s4)(a, n, P) : (0, r.yu)(a, n, P)) return P;
          }
        }
      },
      38410: (G, N, s) => {
        "use strict";
        s.d(N, {
          $l: () => K,
          PD: () => g,
          Vr: () => o,
          jj: () => v,
          ss: () => L,
        });
        var e = s(32093),
          r = s(99412),
          b = s(18210),
          k = s(41735),
          R = s.n(k);
        class L {}
        function K(i, l, m) {
          const f = i.filter((t) => {
            const h = t.IsValidAssetType(l, m);
            return t.status === "pending" && !h.error && !h.needsCrop;
          });
          return (
            f.forEach((t) => {
              (t.status = "waiting"), (t.message = "");
            }),
            f
          );
        }
        async function O(i, l, m, f, t) {
          const h = K(i, m, f),
            d = [];
          for (const I of h) {
            I.status = "uploading";
            const a = await l(I, I.filename, I.language ?? r.xPp, t);
            (I.status = a.bSuccess ? "success" : "failed"),
              (I.message =
                !a.bSuccess && a.elErrorMessage ? a.elErrorMessage : ""),
              d.push({
                bSuccess: a.bSuccess,
                image: I,
                uploadResult: a.result,
              });
          }
          return d;
        }
        async function _(i, l, m, f, t, h) {
          const d = K(i, f, t),
            I = [];
          let a = 0;
          const n = async () => {
              for (; a < d.length; ) {
                const u = a++,
                  P = d[u];
                P.status = "uploading";
                const T = await m(P, P.filename, P.language ?? r.xPp, h);
                (P.status = T.bSuccess ? "success" : "failed"),
                  (P.message =
                    !T.bSuccess && T.elErrorMessage ? T.elErrorMessage : ""),
                  (I[u] = { image: P, uploadResult: T });
              }
            },
            c = Array.from({ length: Math.floor(l) }, () => n());
          return (
            await Promise.all(c),
            I.map((u) => ({
              bSuccess: u.uploadResult.bSuccess,
              image: u.image,
              uploadResult: u.uploadResult.result,
            }))
          );
        }
        class o extends L {
          m_cancel = void 0;
          async UploadAllImages(l, m) {
            this.m_cancel = R().CancelToken.source();
            const f = this.BGetUploadsAreInSerial() ? 1 : 4;
            let t;
            const h = this.UploadSingleImage.bind(this);
            return (
              f > 1
                ? (t = await _(
                    this.GetUploadImages(),
                    f,
                    h,
                    l,
                    m,
                    this.m_cancel.token,
                  ))
                : (t = await O(
                    this.GetUploadImages(),
                    h,
                    l,
                    m,
                    this.m_cancel.token,
                  )),
              t
            );
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, b.we)("#ImageUpload_CancelRequest"));
          }
        }
        function g(i, l, m) {
          if (((i == null || i == null) && (i = l), !m || m.length === 0))
            return i;
          for (const f of m) if (b.A0.IsELanguageValidInRealm(i, f)) return i;
          for (const f of m) if (b.A0.IsELanguageValidInRealm(l, f)) return l;
          return m.includes(e.TU.k_ESteamRealmGlobal) ? r.Bhc : r.ZLm;
        }
        function v(i, l = r.Bhc) {
          let m = i.lastIndexOf(".");
          m != -1 && (i = i.slice(0, m).toLowerCase());
          let f = null,
            t = 0;
          i.endsWith("korean") && ((f = r.Pn1), (t = 6));
          for (let d = r.Bhc; d < r.bP9; ++d) {
            const I = (0, r.wwZ)(d);
            if (I.length <= t) continue;
            if (i.endsWith(I) && i.length > I.length + 2) {
              const n = i[i.length - I.length - 1];
              /\p{Alphabetic}|\p{Number}/u.test(n) || ((f = d), (t = I.length));
            }
            const a = (0, r.LgB)(d);
            a.length <= t || (i.endsWith(a) && ((f = d), (t = a.length)));
          }
          const h = (d) => d.replace(/[\s_-]+$/g, "");
          return {
            language: f ?? l,
            baseFilename: t > 0 ? h(i.substring(0, i.length - t)) : i,
          };
        }
      },
      6658: (G, N, s) => {
        "use strict";
        s.d(N, { yh: () => O });
        var e = s(90626),
          r = s(72849);
        function b(_, o, g = !0) {
          const v = new URLSearchParams({
            ima: "fit",
            impolicy: "Letterbox",
            imcolor: "#000000",
          });
          return (
            _ && v.set("imw", Math.round(_).toString()),
            o && v.set("imh", Math.round(o).toString()),
            !_ || !o || !g
              ? v.set("letterbox", "false")
              : v.set("letterbox", "true"),
            "?" + v.toString()
          );
        }
        const k = null;
        function R(_, o) {
          let g;
          for (let v of k)
            if (
              (g ? (g += ", ") : (g = ""),
              (g += `${_}${b(v, 0)} ${v}w`),
              v >= o)
            )
              break;
          return g;
        }
        function L(_) {
          let {
            src: o,
            orig_width: g,
            orig_height: v,
            sizes: i,
            default_width: l,
            ...m
          } = _;
          i || (i = "95vw"), l || (l = 1024);
          let f = `${o}${b(l, void 0)}`,
            t = R(o, g);
          return React.createElement("img", {
            src: f,
            srcSet: t,
            sizes: i,
            ...m,
          });
        }
        function K(_) {
          const {
            width: o,
            height: g,
            orig_width: v,
            orig_height: i,
            src: l,
            ...m
          } = _;
          let f = l + b(o, g),
            t,
            h = 6;
          if (
            (o && v && (h = Math.min(h, Math.ceil(v / o))),
            g && i && (h = Math.min(h, Math.ceil(i / g))),
            h)
          )
            for (let d of [2, 4, 6]) {
              if (d > h) break;
              t ? (t += ", ") : (t = ""),
                (t += `${l}${b(o && o * d, g && g * d)} ${d}x`);
            }
          return React.createElement("img", { ...m, src: f, srcSet: t });
        }
        function O(_) {
          if (
            (_.indexOf("?") > 0 && (_ = _.split("?")[0]),
            _.endsWith(".jpg") || _.endsWith(".jpeg"))
          )
            return r.bg.iS;
          if (_.endsWith(".png")) return r.bg.dU;
          if (_.endsWith(".gif")) return r.bg.CK;
          if (_.endsWith(".mp4")) return r.bg.nn;
          if (_.endsWith(".webm")) return r.bg.pJ;
          if (_.endsWith(".vtt")) return r.bg.k7;
          if (_.endsWith(".srt")) return r.bg.pi;
          if (_.endsWith(".webp")) return r.bg.wD;
        }
      },
      48127: (G, N, s) => {
        "use strict";
        s.d(N, { Gr: () => oe, O9: () => j });
        var e = s(7850),
          r = s(65946),
          b = s(75844),
          k = s(90626),
          R = s(99412),
          L = s(32093),
          K = s(72849),
          O = s(64),
          _ = s(38410),
          o = s(50109),
          g = s(58534),
          v = s(36707),
          i = s(18210),
          l = s(95603),
          m = s(71647),
          f = s.n(m);
        function t(z) {
          const {
              onDropFiles: D,
              renderDesciption: E,
              elAdditonalButtons: M,
              elOverrideDragAndDropText: w,
            } = z,
            [C, S] = (0, l.hk)(D),
            [H, $] = (0, l.Ss)(D, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...C,
            className: (0, v.A)(
              S ? f().DragAndDropContainerDragging : f().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!E && E(),
              (0, e.jsx)("div", {
                children: w || (0, i.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: f().ImageUploadBar,
                children: [
                  H,
                  (0, e.jsxs)("label", {
                    onClick: $,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, i.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: f().SelectImageButton,
                        children: (0, i.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              M,
              z.children,
            ],
          });
        }
        var h = s(95695),
          d = s.n(h),
          I = s(2801),
          a = s(88003),
          n = s(64641),
          c = s.n(n),
          u = s(36118),
          P = s(85599),
          T = s(34592),
          A = s(82734),
          B = s(21254),
          y = s(27344),
          p = s.n(y),
          F = s(9472);
        function j(z) {
          const {
              imageUploader: D,
              fnUploadComplete: E,
              elOverrideDragAndDropText: M,
              forceResolution: w,
              elAdditonalButtons: C,
              rgRealmList: S,
            } = z,
            [H, $] = (0, r.q3)(() => [
              D.GetUploadImages(),
              o.O.Get().GetCurEditLanguage(),
            ]),
            ee = k.useCallback(
              async (X) => {
                let U = Array.from(X),
                  J = !0;
                for (let Q = 0; Q < U.length; Q++) {
                  const q = U[Q],
                    { language: ce } = (0, _.jj)(q?.name, $);
                  try {
                    const ae = (0, _.PD)(ce, $, S);
                    (J = await D.AddImageForLanguage(q, ae)),
                      J ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            Q +
                            " file=" +
                            q.name,
                        ),
                        (0, a.pg)(
                          (0, e.jsx)(I.KG, {
                            strDescription: (0, i.we)(
                              "#ImagePicker_Error",
                              q.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (ae) {
                    let de = (0, T.H)(ae);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + de.strErrorMsg,
                      de,
                    ),
                      (0, a.pg)(
                        (0, e.jsx)(I.KG, {
                          strDescription: (0, i.we)(
                            "#EventError_Code",
                            de.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return J;
              },
              [$, D, S],
            ),
            se = k.useMemo(
              () =>
                C instanceof Array
                  ? C
                  : [
                      (0, e.jsx)(
                        k.Fragment,
                        { children: C },
                        "elAdditonalButtons",
                      ),
                    ],
              [C],
            );
          (0, r.q3)(() =>
            H.map((X) => ({ a: X.GetCurrentImageOption(), b: X.language })),
          );
          const te = async () => {
            const X = await D.UploadAllImages(w);
            E?.(X);
          };
          return (0, e.jsxs)(t, {
            onDropFiles: ee,
            elAdditonalButtons: se,
            elOverrideDragAndDropText: M,
            children: [
              (0, e.jsx)(k.Fragment, {
                children: (0, e.jsx)("div", {
                  className: p().UploadPreviewCtn,
                  children: H.map((X) =>
                    (0, e.jsx)(
                      W,
                      {
                        asset: X,
                        forceResolution: w,
                        fnOnRemove: () => D.DeleteUploadImage(X),
                        languageRealms: S,
                      },
                      "arttabupload_" + X.filename + "_" + X.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(Z, { imageUploader: D, fnOnUploadImageRequested: te }),
            ],
          });
        }
        function Z(z) {
          const { imageUploader: D, fnOnUploadImageRequested: E } = z,
            [M] = (0, r.q3)(() => [D.GetUploadImages()]),
            w = M.some((S) => S.status == "pending"),
            C = M.some(
              (S) =>
                S.status == "waiting" ||
                S.status == "uploading" ||
                S.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: p().UploadPreviewButtonsCtn,
            children: [
              !!M.length &&
                (0, e.jsx)(g.$n, {
                  style: { margin: "8px" },
                  onClick: E,
                  disabled: !w,
                  children: (0, i.we)("#ImageUpload_Upload"),
                }),
              !!M.length &&
                (0, e.jsx)(g.$n, {
                  style: { margin: "8px" },
                  onClick: D.ClearImages,
                  disabled: C,
                  children: (0, i.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function V(z, D, E, M, w) {
          let C = new Array();
          return (
            z.GetUploadImages().forEach((S) => {
              C.push(
                jsx(
                  W,
                  {
                    asset: S,
                    forceResolution: E,
                    forceFileType: M,
                    fnOnRemove: () => z.DeleteUploadImage(S),
                    languageRealms: w,
                  },
                  D + S.file + "_" + S.uploadTime,
                ),
              );
            }),
            C
          );
        }
        const W = (0, b.PA)(Y);
        function Y(z) {
          const D = (U) => {
              if (U instanceof O.M7) {
                U.ResetImage();
                const J = window,
                  Q = (0, e.jsx)(B.q, {
                    ownerWin: J,
                    uploadFile: U,
                    forceResolution: z.forceResolution,
                    fileType: z.forceFileType || K.bg.dU,
                  });
                (0, a.HT)(Q, J, "CropModal", {
                  strTitle: (0, i.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  U.fileType,
                  JSON.stringify(U.GetCurrentImageOption()),
                );
            },
            { asset: E, fnOnRemove: M, languageRealms: w } = z,
            C = E.ImageOptions?.map((U) => {
              let J = U?.fnGetLabelText(),
                Q;
              U.bEnforceDimensions && (J += ` - ${U.width}x${U.height}`),
                U.bDeprecated &&
                  ((J += ` ${(0, i.we)("#ImageUpload_Deprecated")}`),
                  (Q = (0, i.we)("#ImageUpload_Deprecated_ttip")));
              let q;
              return (
                (E.BIsOriginalMinimumDimensions(U) &&
                  E.FileTypeMatchesImageTypes(U)) ||
                  (q = p().ImageDimensionTooSmall),
                { label: J, data: U, strOptionClass: q, tooltip: Q }
              );
            }).filter((U) => !U.data.bHiddenFromDropdown),
            S = {
              pending: (0, i.we)("#ImageUpload_Pending"),
              waiting: (0, i.we)("#ImageUpload_Waiting"),
              uploading: (0, i.we)("#ImageUpload_Uploading"),
              processing: (0, i.we)("#ImageUpload_Processing"),
              success: (0, i.we)("#ImageUpload_SuccessCard"),
              failed: (0, i.we)("#ImageUpload_Failed"),
            },
            H = E.BSupportsLanguages()
              ? oe(
                  i.A0.GetLanguageListForRealms(
                    w ?? [L.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            $ = E.IsValidAssetType(z.forceResolution, z.forceFileType),
            ee = E.status == "pending";
          let se = S[E.status];
          E.status == "pending" &&
            ($.needsCrop
              ? (se = (0, i.we)("#ImageUpload_NeedsCrop"))
              : $.error && (se = (0, i.we)("#ImageUpload_Invalid")));
          let te;
          const X = E.GetCurrentImageOption();
          return (
            X && (te = C?.find((U) => U.data.sKey == X.sKey)?.data),
            te || (te = C?.[0]?.data),
            (0, e.jsxs)("div", {
              className: p().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: p().UploadPreviewDelete,
                  onClick: () => M(E),
                  children: (0, e.jsx)(u.sED, {}),
                }),
                (0, e.jsx)(ie, { asset: E }),
                H &&
                  (0, e.jsx)(g.m, {
                    strDropDownClassName: d().DropDownScroll,
                    rgOptions: H,
                    selectedOption: E.language,
                    onChange: (U) => (E.language = U.data),
                    disabled: !ee,
                  }),
                C &&
                  C?.length > 1 &&
                  (0, e.jsx)(g.m, {
                    label: E.GetImageOptionLabel(),
                    rgOptions: C,
                    selectedOption: te,
                    onChange: (U) => E.SetCurrentImageOption(U.data),
                    disabled: !ee,
                  }),
                ee &&
                  $.warnings?.map((U, J) =>
                    (0, e.jsx)(
                      "div",
                      { className: p().UploadPreviewWarning, children: U },
                      `warning${J}`,
                    ),
                  ),
                ee &&
                  $.messages?.map((U, J) =>
                    (0, e.jsx)(
                      "div",
                      { className: p().UploadPreviewMessage, children: U },
                      `message${J}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, v.A)({
                    [d().FlexColumnContainer]: !0,
                    [p().UploadPreviewError]: E.status == "failed",
                  }),
                  children: [
                    se,
                    (0, F.o)(E.status) &&
                      (0, e.jsx)("div", {
                        className: c().FlexCenter,
                        children: (0, e.jsx)(P.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: p().UploadPreviewError,
                  children: E.message,
                }),
                ee &&
                  $.error &&
                  (0, e.jsx)("div", {
                    className: p().UploadPreviewError,
                    children: $.error,
                  }),
                ee &&
                  $.needsCrop &&
                  (0, e.jsx)(g.jn, {
                    onClick: () => D(E),
                    children: (0, i.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function ie(z) {
          const { asset: D } = z;
          return D.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: p().PreviewImgCtn,
                onClick: (E) =>
                  (0, a.pg)((0, e.jsx)(le, { asset: D }), (0, A.uX)(E)),
                children: [
                  (0, e.jsxs)("span", {
                    className: p().PreviewImgInfo,
                    children: [D.width, " x ", D.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: D.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: p().PreviewImgCtn,
                style: { backgroundImage: `url(${D.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: p().PreviewImgInfo,
                  children: [D.width, " x ", D.height],
                }),
              });
        }
        function le(z) {
          const { asset: D, closeModal: E } = z;
          return (0, e.jsx)(I.o0, {
            bAlertDialog: !0,
            closeModal: E,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: D.dataUrl }),
            }),
          });
        }
        function oe(z) {
          const D = [],
            E = new Array();
          for (const M of z) {
            if (M == R.X51) continue;
            const w = (0, i.we)("#Language_" + (0, R.LgB)(M));
            E.push({ label: w, data: M });
          }
          return (
            E.sort((M, w) => M.label.localeCompare(w.label)),
            E.forEach((M) => D.push({ label: M.label, data: M.data })),
            E
          );
        }
      },
      43308: (G, N, s) => {
        "use strict";
        s.d(N, { K: () => h });
        var e = s(7850),
          r = s(90626),
          b = s(92298),
          k = s.n(b),
          R = s(44894),
          L = s(7582),
          K = s(95695),
          O = s.n(K),
          _ = s(36707),
          o = s(18210),
          g = s(71421),
          v = s(12916),
          i = s.n(v),
          l = s(87937),
          m = s.n(l);
        const f = "hh:mm a",
          t = "HH:mm";
        function h(T) {
          const {
            nLatestTime: A,
            nEarliestTime: B,
            fnGetTimeToUpdate: y,
            onError: p,
            strAlsoShowTimeZone: F,
            disabled: j,
            bNoDefaultDate: Z,
            className: V,
            strDescToolTip: W,
            strDescription: Y,
            bShowTimeZone: ie,
            strInvalidDateTimeLocalizedMsg: le,
            fnIsValidDateTime: oe,
            bWeekdaysOnly: z,
            fnSetTimeToUpdate: D,
            bForce24HourFormat: E,
            bAllowClear: M,
          } = T;
          let w = a() || E ? t : f;
          const C = y(),
            [S, H] = r.useState(C > 0 ? m()(C * 1e3) : null),
            [$, ee] = r.useState(0),
            [se, te] = r.useState(),
            [X, U] = r.useState(),
            J = P(se, X, le, oe, p),
            Q = !p && J;
          let q;
          if (A && B && A == B && B > L.HD.GetTimeNowWithOverride()) {
            const x = m().unix(B);
            (q = {
              hours: { max: x.hour(), min: x.hour(), step: 0 },
              minutes: { max: x.minute(), min: x.minute(), step: 0 },
              seconds: { max: x.seconds(), min: x.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (w = t);
          }
          let ce;
          !C && B && !Z && (ce = m().unix(B));
          const ae = m().tz.guess(),
            de = m().unix(C).tz(ae),
            re = !!F && ae != F && m().unix(C).tz(F),
            pe = (x) => {
              if (j) return;
              U(null);
              const he = y(),
                ne = m().unix(he || L.HD.GetTimeNowWithOverride());
              (x = x.clone()),
                x.hour(ne.hour()),
                x.minute(ne.minute()),
                x.second(0),
                D(x.unix()),
                H(x);
            },
            { fnOnInput: me, fnOnInputBlur: ue, fnOnChange: _e } = d(n, pe, U),
            fe = (x) => {
              if (j) return;
              te(null);
              let he = y(),
                ne = 0;
              if (!he)
                ne =
                  m().unix(B).hour(0).second(0).minutes(0).unix() +
                  3600 * x.hour() +
                  60 * x.minutes();
              else {
                const ge = m().unix(he);
                (x = x.clone()),
                  x.year(ge.year()),
                  x.month(ge.month()),
                  x.date(ge.date()),
                  (ne = x.unix());
              }
              D(ne), H(m().unix(ne));
            },
            { fnOnInput: Pe, fnOnInputBlur: De, fnOnChange: Ee } = d(c, fe, te),
            Ie = () => {
              j || (D(0), H(null), U(null), te(null), ee((x) => x + 1));
            },
            Te = M && !j && C > 0;
          return (0, e.jsxs)("div", {
            className: (0, _.A)(i().EventTimeSection, V),
            children: [
              (0, e.jsxs)("div", {
                className: (0, _.A)(i().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, e.jsx)(g.he, {
                    toolTipContent: W,
                    direction: "top",
                    children: !!Y && (0, e.jsx)("span", { children: Y }),
                  }),
                  Q &&
                    (0, e.jsxs)("span", {
                      className: i().DateErrorCtn,
                      children: [(0, e.jsx)("img", { src: R.A }), Q],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: O().FlexRowContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, _.A)(O().InputBorder, i().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        k(),
                        {
                          onChange: _e,
                          timeFormat: !1,
                          value: X ?? S,
                          isValidDate: (x) => !j && u(B, A, z, x),
                          initialValue: ce,
                          inputProps: {
                            placeholder: (0, o.we)(
                              "#DateTimePicker_Enter_Date",
                            ),
                            className: (0, _.A)(
                              i().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: j,
                            onChange: (x) => me(x.currentTarget.value),
                            onBlur: (x) => ue(x.currentTarget.value),
                          },
                        },
                        "date" + $,
                      ),
                      !!re &&
                        (0, e.jsx)("div", {
                          className: i().PacificTimeHint,
                          children: re.format("L"),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, _.A)(O().InputBorder, i().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        k(),
                        {
                          onChange: Ee,
                          dateFormat: !1,
                          timeFormat: w,
                          timeConstraints: q,
                          value: se ?? S,
                          inputProps: {
                            placeholder: (0, o.we)(
                              "#DateTimePicker_Enter_Time",
                            ),
                            className: (0, _.A)(
                              i().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: j,
                            onChange: (x) => Pe(x.currentTarget.value),
                            onBlur: (x) => De(x.currentTarget.value),
                          },
                        },
                        "time" + $,
                      ),
                      !!re &&
                        (0, e.jsx)("div", {
                          className: i().PacificTimeHint,
                          children: re.format("LT"),
                        }),
                    ],
                  }),
                  ie &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: i().TimeZone,
                          children: de.zoneAbbr(),
                        }),
                        !!re &&
                          (0, e.jsx)("div", {
                            className: i().TimeZone,
                            children: re.zoneAbbr(),
                          }),
                      ],
                    }),
                  Te &&
                    (0, e.jsx)("button", {
                      type: "button",
                      className: i().ClearButton,
                      onClick: Ie,
                      children: (0, o.we)("#Button_Clear"),
                    }),
                ],
              }),
              !!q &&
                (0, e.jsx)("div", {
                  children: (0, o.we)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function d(T, A, B) {
          const [y, p] = r.useState(!1);
          return {
            fnOnInput: (V) => {
              B(V), p(!0);
            },
            fnOnInputBlur: (V) => {
              if (y) {
                const W = T(V);
                W.isValid() && A(W);
              }
              p(!1);
            },
            fnOnChange: (V) => {
              if (!y)
                if (typeof V == "string") {
                  const W = T(V);
                  W.isValid() && A(W);
                } else A(V);
            },
          };
        }
        function I() {
          const A = m()("2025-01-14").format("L").split(/[-/.]/),
            B = A.indexOf("14");
          return A.indexOf("01") < B;
        }
        function a() {
          return m()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function n(T) {
          return m()(T, I() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function c(T) {
          return m()(T, [f, t], !1);
        }
        function u(T, A, B, y) {
          const p = m().unix(T).hour(0).seconds(0).minute(0);
          let F = y.unix() >= p.unix();
          if (F && A && A >= T) {
            const j = m().unix(A).hour(23).minute(59).seconds(59);
            F = y.unix() <= j.unix();
          }
          return (
            F && B && (y.weekday() == 0 || y.weekday() == 6) && (F = !1), F
          );
        }
        function P(T, A, B, y, p) {
          const F = y && y(),
            j = A && !n(A).isValid(),
            Z = T && !c(T).isValid(),
            V = Z || j || typeof F == "string" || F === !1;
          let W = null;
          return (
            V &&
              ((W = (0, o.we)(
                B || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              Z
                ? (W = (0, o.we)("#DateTimePicker_Time_CannotParse"))
                : j
                  ? (W = (0, o.we)("#DateTimePicker_Date_CannotParse"))
                  : typeof F == "string" && (W = F)),
            r.useEffect(() => {
              p && p(W);
            }, [W, p]),
            W
          );
        }
      },
      79167: (G, N, s) => {
        "use strict";
        s.d(N, { I: () => f });
        var e = s(7850),
          r = s(90626),
          b = s(54963),
          k = s(75844),
          R = s(8323),
          L = s(18210),
          K = s(58534),
          O = s(36118),
          _ = s(81315),
          o = s.n(_),
          g = s(13854),
          v = Object.defineProperty,
          i = Object.getOwnPropertyDescriptor,
          l = (t, h, d, I) => {
            for (
              var a = I > 1 ? void 0 : I ? i(h, d) : h, n = t.length - 1, c;
              n >= 0;
              n--
            )
              (c = t[n]) && (a = (I ? c(h, d, a) : c(a)) || a);
            return I && a && v(h, d, a), a;
          },
          m = ((t) => (
            (t.topleft = "topleft"),
            (t.top = "top"),
            (t.topright = "topright"),
            (t.left = "left"),
            (t.middle = "middle"),
            (t.right = "right"),
            (t.bottomleft = "bottomleft"),
            (t.bottom = "bottom"),
            (t.bottomright = "bottomright"),
            t
          ))(m || {});
        let f = class extends r.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new R.Ji();
          m_strDescription = "";
          m_aspectRatio = 1;
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          constructor(t) {
            super(t),
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
          LinkRegionBoxRef(t) {
            this.m_elLinkRegionBox = t;
          }
          OnMouseDown(t, h) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (d) => {
                this.OnMouseUp(d, h);
              }),
              (this.m_fnMouseMove = (d) => {
                this.OnMouseMove(d, h);
              }),
              this.setState({ EdgeDown: h }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((t.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((t.clientY - this.m_rectLinkRegion.top) /
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
              t.preventDefault(),
              t.stopPropagation();
          }
          OnMouseMove(t, h) {
            if (this.state.EdgeDown !== void 0) {
              switch ((t.shiftKey && this.m_fnMouseUp(), h)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(t.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(t.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(t.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(t.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(t.clientY),
                    curLeftPosPct: this.CalcLeftEdge(t.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(t.clientY),
                    curRightPosPct: this.CalcRightEdge(t.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(t.clientX),
                    curBottomPosPct: this.CalcBottomEdge(t.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(t.clientX),
                    curBottomPosPct: this.CalcBottomEdge(t.clientY),
                  });
                  break;
                }
                case "middle": {
                  const d = (0, g.OQ)(
                      this.CalcLeftEdge(t.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    I = 100 - (d + this.state.curWidthPct),
                    a = (0, g.OQ)(
                      this.CalcTopEdge(t.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    n = 100 - (a + this.state.curHeightPct),
                    c = {
                      curLeftPosPct: d,
                      curRightPosPct: I,
                      curTopPosPct: a,
                      curBottomPosPct: n,
                    };
                  this.setState(c);
                  break;
                }
                default:
                  break;
              }
              t.preventDefault(), t.stopPropagation();
            }
          }
          IsValidPct(t) {
            return t >= 0 && t <= 100;
          }
          UpdateState(t) {
            let h =
                t.curTopPosPct !== void 0
                  ? t.curTopPosPct
                  : this.state.curTopPosPct,
              d =
                t.curBottomPosPct !== void 0
                  ? t.curBottomPosPct
                  : this.state.curBottomPosPct,
              I =
                t.curLeftPosPct !== void 0
                  ? t.curLeftPosPct
                  : this.state.curLeftPosPct,
              a =
                t.curRightPosPct !== void 0
                  ? t.curRightPosPct
                  : this.state.curRightPosPct,
              n = (0, g.OQ)(
                100 - a - I,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              c = (0, g.OQ)(
                100 - d - h,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (t.curLeftPosPct !== void 0 || t.curRightPosPct !== void 0
                ? (c = n / this.m_aspectRatio)
                : (n = c * this.m_aspectRatio)),
              t.curLeftPosPct !== void 0
                ? (I = 100 - a - n)
                : (a = 100 - (I + n)),
              t.curTopPosPct !== void 0
                ? (h = 100 - d - c)
                : (d = 100 - (h + c));
            const u = 100 - a - I,
              P = 100 - d - h;
            this.IsValidPct(I) &&
              this.IsValidPct(a) &&
              this.IsValidPct(h) &&
              this.IsValidPct(d) &&
              this.IsValidPct(u) &&
              this.IsValidPct(P) &&
              this.setState({
                curLeftPosPct: I,
                curRightPosPct: a,
                curTopPosPct: h,
                curBottomPosPct: d,
              });
          }
          GetXPercent(t) {
            return this.m_rectLinkRegion
              ? ((t - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(t) {
            return this.m_rectLinkRegion
              ? ((t - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(t) {
            return (0, g.OQ)(this.GetXPercent(t), 0, 100);
          }
          CalcRightEdge(t) {
            return (0, g.OQ)(
              100 - (this.GetXPercent(t) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(t) {
            return (0, g.OQ)(this.GetYPercent(t), 0, 100);
          }
          CalcBottomEdge(t) {
            return (0, g.OQ)(
              100 - (this.GetYPercent(t) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(t, h) {
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
          OnSetLinkURLChange(t) {
            this.setState({
              text_link_url: t.target.value,
              valid_link: this.validateUrl(t.target.value),
            });
          }
          OnSetLinkDescriptionChange(t) {
            this.setState({ text_link_description: t.target.value });
          }
          validateUrl(t) {
            return t != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  t,
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
            let t = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              h = o().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (h += ` ${o().EdgeDown} ` + o()[this.state.EdgeDown]),
              (0, e.jsxs)("div", {
                className: h,
                style: t,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, e.jsxs)("div", {
                    className: o().LinkRegionGridBox,
                    children: [
                      (0, e.jsx)("div", {
                        className: `${o().LinkRegionEdge} ${o().TopLeft}`,
                        onMouseDown: (d) => {
                          this.OnMouseDown(d, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${o().LinkRegionEdge} ${o().Top}`,
                        onMouseDown: (d) => {
                          this.OnMouseDown(d, "top");
                        },
                      }),
                      (0, e.jsx)("div", {
                        className: `${o().LinkRegionEdge} ${o().TopRight}`,
                        onMouseDown: (d) => {
                          this.OnMouseDown(d, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${o().LinkRegionEdge} ${o().Left}`,
                        onMouseDown: (d) => {
                          this.OnMouseDown(d, "left");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsxs)("div", {
                        className: `${o().LinkRegionEdge} ${o().Middle}`,
                        onMouseDown: (d) => {
                          this.OnMouseDown(d, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, e.jsx)("div", {
                              className: o().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, e.jsx)(O.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, e.jsx)("div", {
                              className: o().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, e.jsx)(O.xv8, {}),
                            }),
                          (0, e.jsxs)("div", {
                            className: o().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: `${o().LinkRegionEdge} ${o().Right}`,
                        onMouseDown: (d) => {
                          this.OnMouseDown(d, "right");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${o().LinkRegionEdge} ${o().BottomLeft}`,
                        onMouseDown: (d) => {
                          this.OnMouseDown(d, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${o().LinkRegionEdge} ${o().Bottom}`,
                        onMouseDown: (d) => {
                          this.OnMouseDown(d, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${o().LinkRegionEdge} ${o().BottomRight}`,
                        onMouseDown: (d) => {
                          this.OnMouseDown(d, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, e.jsxs)("div", {
                      className: o().LinkRegionInfo,
                      children: [
                        (0, e.jsx)(K.pd, {
                          className: o().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, L.we)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, e.jsx)(K.pd, {
                          className: o().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, L.we)("#SteamTV_LinkDescription"),
                          placeholder: (0, L.we)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, e.jsxs)("div", {
                          className: o().LinkRegionButtonContainer,
                          children: [
                            (0, e.jsxs)(K.$n, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, L.we)("#Button_OK"), " "],
                            }),
                            (0, e.jsxs)(K.$n, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, L.we)("#Button_Cancel")],
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
        l([b.oI], f.prototype, "LinkRegionBoxRef", 1),
          l([b.oI], f.prototype, "OnMouseDown", 1),
          l([b.oI], f.prototype, "OnMouseMove", 1),
          l([b.oI], f.prototype, "OnMouseUp", 1),
          l([b.oI], f.prototype, "HandleDelete", 1),
          l([b.oI], f.prototype, "OnSetLinkURLChange", 1),
          l([b.oI], f.prototype, "OnSetLinkDescriptionChange", 1),
          l([b.oI], f.prototype, "OnSaveLink", 1),
          l([b.oI], f.prototype, "OnEditLink", 1),
          (f = l([k.PA], f));
      },
      21254: (G, N, s) => {
        "use strict";
        s.d(N, { q: () => t, t: () => d });
        var e = s(7850),
          r = s(90626),
          b = s(25279),
          k = s(72849),
          R = s(58534),
          L = s(79167),
          K = s(2801),
          O = s(36707),
          _ = s(18210),
          o = s(54963),
          g = s(50666),
          v = s.n(g),
          i = s(82734),
          l = Object.defineProperty,
          m = Object.getOwnPropertyDescriptor,
          f = (I, a, n, c) => {
            for (
              var u = c > 1 ? void 0 : c ? m(a, n) : a, P = I.length - 1, T;
              P >= 0;
              P--
            )
              (T = I[P]) && (u = (c ? T(a, n, u) : T(u)) || u);
            return c && u && l(a, n, u), u;
          };
        class t extends r.Component {
          state = {
            region: {
              xPosPct: 0,
              yPosPct: 0,
              widthPct:
                (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              heightPct:
                (this.GetDestHeight() / this.props.uploadFile.height) * 100,
            },
          };
          async OnCrop() {
            const a = this.props.uploadFile.GetCanvasImageSource();
            a &&
              (await h(
                this.props.uploadFile,
                a,
                (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
                (this.state.region.yPosPct / 100) *
                  this.props.uploadFile.height,
                (this.state.region.widthPct / 100) *
                  this.props.uploadFile.width,
                (this.state.region.heightPct / 100) *
                  this.props.uploadFile.height,
                this.GetDestWidth(),
                this.GetDestHeight(),
                this.props.fileType,
              )),
              this.props.closeModal?.();
          }
          UpdateCrop(a, n) {
            this.setState({ region: n });
          }
          GetDestWidth() {
            const { uploadFile: a, forceResolution: n } = this.props;
            if (n) return n.width;
            const c = a.GetCurrentImageOption();
            if (!c) return 0;
            const u = b.Fj[c.artworkType].width;
            return c ? (0, b.qj)(u) : 0;
          }
          GetDestHeight() {
            const { uploadFile: a, forceResolution: n } = this.props;
            if (n) return n.width;
            const c = a.GetCurrentImageOption();
            if (!c) return 0;
            const u = b.Fj[c.artworkType].height;
            return c ? (0, b.qj)(u) : 0;
          }
          GetLargestBoxThatFits(a, n, c, u) {
            let P = c,
              T = (P * n) / Math.max(a, 1);
            return (
              T > u && ((T = u), (P = (T * a) / Math.max(n, 1))),
              { width: P, height: T }
            );
          }
          GetPreviewWindowStyle() {
            const { region: a } = this.state,
              n = this.GetLargestBoxThatFits(
                this.GetDestWidth(),
                this.GetDestHeight(),
                500,
                150,
              ),
              c = n.width,
              u = n.height,
              P = 1 / Math.max(a.widthPct / 100, 1e-4),
              T = 1 / Math.max(a.heightPct / 100, 1e-4),
              A = (this.props.uploadFile.width * a.xPosPct) / 100,
              B = (this.props.uploadFile.height * a.yPosPct) / 100,
              y = (c * P) / this.props.uploadFile.width,
              p = (u * T) / this.props.uploadFile.height,
              F = -A * y,
              j = -B * p;
            return {
              width: c,
              height: u,
              backgroundPosition: `${F}px ${j}px`,
              backgroundSize: `${100 * P}% ${100 * T}%`,
              backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
            };
          }
          render() {
            const a = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              n = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
              c = this.GetLargestBoxThatFits(
                this.props.uploadFile.width,
                this.props.uploadFile.height,
                800,
                500,
              );
            return (0, e.jsx)(K.x_, {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
              children: (0, e.jsxs)("div", {
                className: (0, O.A)("DialogContent", "_DialogCenterVertically"),
                children: [
                  (0, e.jsx)(R.iK, {
                    children: (0, _.we)(
                      "#ImageUpload_CropModalTitleDims",
                      this.GetDestWidth(),
                      this.GetDestHeight(),
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, O.A)("DialogBodyText"),
                    children: (0, _.we)("#ImageUpload_CropModalDescription"),
                  }),
                  (0, e.jsxs)("div", {
                    className: g.CropImage,
                    style: { width: c.width, height: c.height },
                    children: [
                      (0, e.jsx)("img", {
                        style: {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        },
                        src: this.props.uploadFile.dataUrl,
                      }),
                      (0, e.jsx)(L.I, {
                        bLockAspectRatio: !0,
                        bDisableLink: !0,
                        index: 0,
                        updateFn: this.UpdateCrop,
                        xPosPct: 0,
                        yPosPct: 0,
                        widthMinPct: a,
                        heightMinPct: n,
                        widthPct: a,
                        heightPct: n,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: g.CropPreviewGroup,
                    children: [
                      (0, e.jsx)("div", {
                        className: g.CropPreviewLabel,
                        children: (0, _.we)("#ImageUpload_CropPreview"),
                      }),
                      (0, e.jsx)("div", {
                        style: this.GetPreviewWindowStyle(),
                      }),
                    ],
                  }),
                  (0, e.jsx)(R.jn, {
                    onClick: this.OnCrop,
                    children: (0, _.we)("#ImageUpload_CropAndContinue"),
                  }),
                ],
              }),
            });
          }
        }
        f([o.oI], t.prototype, "OnCrop", 1),
          f([o.oI], t.prototype, "UpdateCrop", 1);
        async function h(I, a, n, c, u, P, T, A, B) {
          return new Promise((y, p) => {
            const F = d(B);
            if (!F) {
              p("Invalid format provided");
              return;
            }
            const j = document.createElement("canvas");
            (j.width = T),
              (j.height = A),
              j.getContext("2d")?.drawImage(a, n, c, u, P, 0, 0, T, A),
              j.toBlob((Y) => {
                const ie = j.toDataURL(F);
                if (B !== k.bg.dU && ie.startsWith("data:image/png")) {
                  p("Unable to encode into the requested file format");
                  return;
                }
                if (!Y) {
                  p("Unable to apply crop into image");
                  return;
                }
                (I.file = (0, i.pE)(Y, I.filename)),
                  (I.width = T),
                  (I.height = A),
                  (I.dataUrl = ie),
                  (I.uploadTime = Date.now()),
                  (I.bCropped = !0),
                  y();
              });
          });
        }
        function d(I) {
          switch (I) {
            case k.bg.dU:
              return "image/png";
            case k.bg.iS:
              return "image/jpeg";
          }
        }
      },
      95603: (G, N, s) => {
        "use strict";
        s.d(N, { Ss: () => R, hk: () => L });
        var e = s(7850),
          r = s(90626),
          b = s(72739),
          k = s(82734);
        function R(o, g) {
          const v = r.useRef(void 0),
            i = r.useCallback(
              (f) => {
                f.currentTarget.files.length > 0 &&
                  (o(f.currentTarget.files), (f.currentTarget.value = ""));
              },
              [o],
            ),
            l = r.useCallback(() => v.current.click(), []);
          return [
            b.createPortal(
              (0, e.jsx)("form", {
                onSubmit: O,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...g,
                  type: "file",
                  ref: v,
                  onChange: i,
                }),
              }),
              window.document.body,
            ),
            l,
          ];
        }
        function L(o) {
          const [g, v] = r.useState(!1),
            i = r.useCallback((h) => {
              ((h.dataTransfer.files && h.dataTransfer.files[0]) ||
                (h.dataTransfer.types && h.dataTransfer.types[0] == "Files")) &&
                v(!0);
            }, []),
            l = r.useCallback((h) => {
              k.NO(h) && v(!1);
            }, []),
            m = r.useCallback(() => v(!1), []),
            f = g ? O : void 0,
            t = r.useCallback(
              (h) => {
                h.dataTransfer.files?.length &&
                  (o(h.dataTransfer.files, h),
                  h.preventDefault(),
                  h.stopPropagation()),
                  v(!1);
              },
              [o],
            );
          return [
            {
              onDragEnter: i,
              onDragLeave: l,
              onDragEnd: m,
              onDragOver: f,
              onDrop: t,
            },
            g,
          ];
        }
        async function K(o, g = 1e3) {
          return await new Promise((v, i) => {
            const l = new Image();
            (l.src = o),
              (l.onload = () => v("success")),
              (l.onerror = () => v("error")),
              g > 0 && window.setTimeout(() => v("timeout"), g);
          });
        }
        function O(o) {
          o.preventDefault();
        }
        function _(o) {
          switch (o.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const g = o.name.match(/(?<=\.)[^.]+$/);
              return g ? g[0] : void 0;
          }
        }
      },
      27828: (G) => {
        G.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      71647: (G) => {
        G.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      27344: (G) => {
        G.exports = {
          ImageDimensionTooSmall: "_1A6oRywbsuzGxawqTexX6G",
          UploadPreviewCtn: "_1x7wvgGW08t0c2auyfWyAs",
          UploadPreviewButtonsCtn: "_2Vsz0Teq375iSLvbdoaCw0",
          UploadPreviewDelete: "_1898rmbQKDsZukkFbEda-H",
          UploadPreviewButton: "wUyDKp6qikfxWISsHWYI5",
          UploadPreviewError: "_2sh7mSiQmyBdLyJPYPva2L",
          UploadPreviewWarning: "-khhIHR9pWYus_nTScWdO",
          UploadPreviewMessage: "_3kt_NxdtRh4OR_iFeApvM9",
          UploadPreview: "_3dSNtZdgIHIa6P9ZODRBJs",
          PreviewImgCtn: "a4db1xuziijkLJ6HQXeEs",
          PreviewImgInfo: "ddYEDOKiU6ZFhNI4sb_eQ",
        };
      },
      12916: (G) => {
        G.exports = {
          EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
          EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
          EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
          EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
          TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
          EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
          DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
          PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
          TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
          ClearButton: "TzhaDn0jN2ILks403xqXQ",
          InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
          TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
          TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
          TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
          EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
          EndRound: "jwuNowbLB28M6nkqFkF_C",
          VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
          VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
          EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
          DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
        };
      },
      81315: (G) => {
        G.exports = {
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
      64641: (G) => {
        G.exports = {
          v6: "_2LxgdMcpWJRjkxZKbmeEEb",
          SubText: "vg0EOhKTLB3tLvshHMr7l",
          AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
          GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
          AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
          STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
          ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
          EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
          Small: "_3M4j828iWSVEZZAkypcBi1",
          FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
          ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
          MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
          SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
          RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
        };
      },
      50666: (G) => {
        G.exports = {
          CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
          CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
          CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
        };
      },
      44894: (G, N, s) => {
        "use strict";
        s.d(N, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
