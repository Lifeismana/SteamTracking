/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [23506],
    {
      7742: (H, G, s) => {
        "use strict";
        s.d(G, { x0: () => l, yI: () => b });
        async function e(w) {
          try {
            return await w;
          } catch (y) {
            console.error(y);
            return;
          }
        }
        function l() {
          let w, y;
          return {
            promise: new Promise((O, x) => {
              (w = O), (y = x);
            }),
            resolve: w,
            reject: y,
          };
        }
        function b(w) {
          return new Promise((y) => setTimeout(y, w));
        }
      },
      28922: (H, G, s) => {
        "use strict";
        s.d(G, { s: () => E });
        var e = s(7850),
          l = s(39905),
          b = s(90626),
          w = s(43465),
          y = s(58534),
          M = s(249),
          O = s(71421),
          x = s(27828),
          P = s.n(x);
        function a(n) {
          return `rgba(${n.rgb.r}, ${n.rgb.g}, ${n.rgb.b}, ${n.rgb.a})`;
        }
        function u(n) {
          const o = parseInt(n.slice(1), 16),
            r = (o >> 16) & 255,
            h = (o >> 8) & 255,
            t = o & 255;
          return `rgba(${r}, ${h}, ${t}, 1)`;
        }
        function E(n) {
          const { color: o, onChange: r, strTitle: h, disableAlpha: t } = n,
            [p, _] = (0, b.useState)(() => o || "rgba(255, 255, 255, 1)"),
            T = (0, b.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(l.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const c = (await new window.EyeDropper().open()).sRGBHex,
                  g = u(c);
                _(g), r(g);
              } catch (d) {
                console.warn(l.Z.Localize("#Sale_EyeDropperFailed"), d);
              }
            }, [r]);
          return (0, e.jsxs)("div", {
            className: P().ColorPickerDialog,
            children: [
              !!h && (0, e.jsx)(y.JU, { children: h }),
              (0, e.jsx)(w.xk, {
                onChange: (d) => {
                  const i = a(d);
                  _(i), r(i);
                },
                color: p,
                disableAlpha: t,
                className: P().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: P().EyeDropperCtn,
                children: (0, e.jsx)(O.Gq, {
                  toolTipContent: l.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(y.$n, {
                    className: P().EyeDropperBtn,
                    onClick: T,
                    children: (0, e.jsx)(M.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
      },
      76846: (H, G, s) => {
        "use strict";
        s.d(G, { p: () => O });
        var e = s(7850),
          l = s(39905),
          b = s(90626),
          w = s(16346),
          y = s(28922);
        function M(x) {
          const {
              color: P,
              onChange: a,
              onRequestClose: u,
              disableAlpha: E,
              strTitle: n,
            } = x,
            o = (0, b.useRef)(null);
          return (
            (0, b.useEffect)(() => {
              const r = o.current?.ownerDocument ?? document,
                h = (p) => {
                  o.current && !o.current.contains(p.target) && u();
                },
                t = (p) => {
                  p.key === "Escape" && u();
                };
              return (
                r.addEventListener("pointerdown", h, !0),
                r.addEventListener("keydown", t, !0),
                () => {
                  r.removeEventListener("pointerdown", h, !0),
                    r.removeEventListener("keydown", t, !0);
                }
              );
            }, [u]),
            (0, e.jsx)("div", {
              ref: o,
              children: (0, e.jsx)(y.s, {
                color: P,
                disableAlpha: E,
                strTitle: n ?? l.Z.Localize("#Button_Color"),
                onChange: a,
              }),
            })
          );
        }
        function O() {
          return {
            openColorPicker: (0, b.useCallback)((P, a) => {
              let u = null;
              const E = () => u?.Hide();
              u = (0, w.lX)(
                (0, e.jsx)(M, {
                  color: a.color,
                  disableAlpha: a.disableAlpha,
                  strTitle: a.strTitle,
                  onChange: a.onChange,
                  onRequestClose: E,
                }),
                P,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
      },
      25279: (H, G, s) => {
        "use strict";
        s.d(G, {
          Ek: () => K,
          FZ: () => t,
          Fj: () => N,
          Hj: () => _,
          Ho: () => k,
          Kf: () => C,
          N_: () => z,
          PL: () => i,
          XY: () => oe,
          Yw: () => h,
          _d: () => T,
          cV: () => c,
          dM: () => D,
          on: () => d,
          qj: () => m,
          s4: () => ee,
          tW: () => p,
          vz: () => se,
          x: () => j,
          yu: () => Y,
        });
        var e = s(72849);
        const l = 622,
          b = 1920,
          w = 450,
          y = 800,
          M = 460,
          O = 2108,
          x = 300,
          P = 800,
          a = 300,
          u = 644,
          E = 337,
          n = 155,
          o = 433,
          r = 199,
          h = ["app_header_capsule", "app_main_capsule"],
          t = [
            "sale_header",
            "sale_logo",
            "capsule",
            "product_banner",
            "product_mobile_banner",
            "localized_title_image",
          ],
          p = ["takeunder_art", "takeunder_mobile_art"],
          _ = [
            "takeover_art",
            "takeover_mobile_art",
            "takeover_webm_art",
            "takeover_mp4_art",
            "takeover_webm_mobile_art",
            "takeover_mp4_mobile_art",
          ],
          T = ["marketingmessage_art", "marketingmessage_art_2"],
          d = [
            "marketingmessage_art_eventcapsule",
            "marketingmessage_art_2_eventcapsule",
          ],
          i = ["spotlight_art_hero"],
          c = [...h, ...t, ...p, ..._, ...T, ...d, ...i],
          g = [
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
        function m(I) {
          return Array.isArray(I) ? I[0] : I;
        }
        function D(I) {
          const v = Array.isArray(I) ? I : [I];
          return Math.min(...v);
        }
        function C(I, v) {
          return v === void 0 ? m(I) : Array.isArray(I) ? I[v] : I;
        }
        const L = [e.bg.iS, e.bg.dU, e.bg.CK, e.bg.wD],
          A = [e.bg.iS, e.bg.dU, e.bg.CK],
          f = [e.bg.iS, e.bg.dU],
          k = [e.bg.pJ, e.bg.nn],
          j = [e.bg.pi, e.bg.k7],
          V = [e.bg.iS, e.bg.dU, e.bg.CK, e.bg.wD, e.bg.pJ, e.bg.nn],
          N = {
            capsule: { width: y, height: w, rgAcceptableTypes: f },
            marketingmessage_art_2_eventcapsule: {
              width: y,
              height: w,
              rgAcceptableTypes: f,
            },
            marketingmessage_art_eventcapsule: {
              width: y,
              height: w,
              rgAcceptableTypes: f,
            },
            spotlight: { width: O, height: M, rgAcceptableTypes: f },
            localized_store_app_spotlight: {
              width: 1200,
              height: 260,
              rgAcceptableTypes: f,
            },
            localized_store_app_spotlight_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: f,
            },
            localized_title_image: {
              width: b,
              height: l,
              rgAcceptableTypes: f,
            },
            background: { width: b, height: l, rgAcceptableTypes: f },
            hero: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            email_full: { width: P, height: x, rgAcceptableTypes: f },
            email_centered: { width: u, height: a, rgAcceptableTypes: f },
            broadcast_left: {
              width: [r, n],
              height: [o, E],
              rgAcceptableTypes: f,
            },
            broadcast_right: {
              width: [r, n],
              height: [o, E],
              rgAcceptableTypes: f,
            },
            sale_header: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: A,
            },
            sale_overlay: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: A,
            },
            localized_image_group: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            localized_background_art: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            sale_section_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: A,
            },
            sale_section_title: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: A,
            },
            link_capsule: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            product_banner: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: f,
            },
            product_mobile_banner: {
              width: 500,
              height: 160,
              rgAcceptableTypes: f,
            },
            product_banner_override: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: f,
            },
            product_mobile_banner_override: {
              width: 500,
              height: 160,
              rgAcceptableTypes: f,
            },
            schedule_track_art: {
              width: 196,
              height: 92,
              rgAcceptableTypes: f,
            },
            tab_bar_background: {
              width: 1500,
              height: 100,
              rgAcceptableTypes: f,
            },
            sale_logo: {
              width: [1200, 940],
              height: [460, 460],
              rgAcceptableTypes: f,
            },
            bestofyear_banner: {
              width: 1100,
              height: 160,
              rgAcceptableTypes: A,
            },
            bestofyear_banner_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: A,
            },
            localized_marketing_message: {
              width: 570,
              height: 600,
              rgAcceptableTypes: L,
            },
            localized_optin_banner: {
              width: 1e3,
              height: 150,
              rgAcceptableTypes: f,
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
              rgAcceptableTypes: f,
            },
            localized_email_image: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            template_asset: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: V,
            },
            user_poll_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_header: {
              width: 920,
              height: 430,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_small: {
              width: 462,
              height: 174,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_main: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_vertical: {
              width: 748,
              height: 896,
              rgAcceptableTypes: f,
            },
            spotlight_art: { width: 306, height: 260, rgAcceptableTypes: A },
            spotlight_art_hero: {
              width: 748,
              height: 896,
              rgAcceptableTypes: f,
            },
            old_spotlight_art: {
              width: 306,
              height: 350,
              rgAcceptableTypes: A,
            },
            marketingmessage_art: {
              width: 570,
              height: 600,
              rgAcceptableTypes: A,
            },
            marketingmessage_art_2: {
              width: 570,
              height: 600,
              rgAcceptableTypes: A,
            },
            takeover_art: { width: 1850, height: 450, rgAcceptableTypes: A },
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
              rgAcceptableTypes: A,
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
            takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: A },
            takeunder_mobile_art: {
              width: 500,
              height: 160,
              rgAcceptableTypes: A,
            },
            app_header_capsule: {
              width: 920,
              height: 430,
              rgAcceptableTypes: f,
            },
            app_main_capsule: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: f,
            },
          };
        function K(I, v, R, B) {
          let U = null;
          if (Array.isArray(R)) {
            if (
              ((U = R.map((S, Z) => (I === S ? Z : void 0)).filter(
                (S) => S !== void 0,
              )),
              U.length <= 0)
            )
              return !1;
          } else if (I !== R) return !1;
          if (Array.isArray(B)) {
            const S = B.map((Z, $) => (v === Z ? $ : void 0)).filter(
              (Z) => Z !== void 0,
            );
            if (S.length <= 0 || (U?.length && !S.some((Z) => U.includes(Z))))
              return !1;
          } else if (v !== B) return !1;
          return !0;
        }
        function Y(I, v, R, B) {
          const U = N[R];
          return U
            ? U.bDisableEnforceDimensions
              ? !!B
              : K(I, v, U.width, U.height)
            : !1;
        }
        function ee(I, v, R) {
          const B = N[R];
          if (!B) return !1;
          if (B.bDisableEnforceDimensions) return !0;
          if (Array.isArray(B.width)) {
            if (B.width.filter((U) => I < U).length == B.width.length)
              return !1;
          } else if (I < B.width) return !1;
          if (Array.isArray(B.height)) {
            if (B.height.filter((U) => v < U).length == B.height.length)
              return !1;
          } else if (v < B.height) return !1;
          return !0;
        }
        function oe(I) {
          const v = N[I];
          return (
            v.rgAcceptableTypes.includes(e.bg.k7) ||
            v.rgAcceptableTypes.includes(e.bg.pi)
          );
        }
        function se(I, v) {
          return v.filter((R) => z(I, R));
        }
        function z(I, v) {
          return N[v].rgAcceptableTypes.includes(I);
        }
      },
      9472: (H, G, s) => {
        "use strict";
        s.d(G, { o: () => O, q: () => x });
        var e = s(14947),
          l = s(72849),
          b = s(6658),
          w = Object.defineProperty,
          y = Object.getOwnPropertyDescriptor,
          M = (P, a, u, E) => {
            for (
              var n = E > 1 ? void 0 : E ? y(a, u) : a, o = P.length - 1, r;
              o >= 0;
              o--
            )
              (r = P[o]) && (n = (E ? r(a, u, n) : r(n)) || n);
            return E && n && w(a, u, n), n;
          };
        function O(P) {
          return P == "waiting" || P == "uploading" || P == "processing";
        }
        class x {
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
          constructor(a, u, E, n, o) {
            (0, e.Gn)(this),
              (this.file = a),
              (this.filename = u),
              (this.fileType = (0, b.yh)(u) ?? l.bg.w3),
              (this.language = E),
              (this.uploadTime = Date.now()),
              (this.status = "pending"),
              (this.m_originalSize = o),
              (this.height = o.height),
              (this.width = o.width),
              (this.m_originalDataUrl = n),
              (this.dataUrl = n);
          }
          ResetImage() {
            (this.height = this.m_originalSize.height),
              (this.width = this.m_originalSize.width),
              (this.dataUrl = this.m_originalDataUrl);
          }
          GetImageOptionLabel() {}
        }
        M([e.sH], x.prototype, "dataUrl", 2),
          M([e.sH], x.prototype, "width", 2),
          M([e.sH], x.prototype, "height", 2),
          M([e.sH], x.prototype, "status", 2),
          M([e.sH.ref], x.prototype, "message", 2),
          M([e.sH], x.prototype, "language", 2);
      },
      64: (H, G, s) => {
        "use strict";
        s.d(G, { IS: () => r, M7: () => p, T2: () => h });
        var e = s(14947),
          l = s(25279),
          b = s(18210),
          w = s(9472),
          y = s(21254),
          M = s(51746),
          O = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          P = (d, i, c, g) => {
            for (
              var m = g > 1 ? void 0 : g ? x(i, c) : i, D = d.length - 1, C;
              D >= 0;
              D--
            )
              (C = d[D]) && (m = (g ? C(i, c, m) : C(m)) || m);
            return g && m && O(i, c, m), m;
          };
        const a = 960,
          u = 311,
          E = 480,
          n = 156;
        class o extends w.q {
          m_rgImageOptions;
          m_currentImageOption = void 0;
          m_currentImageOptionKey = void 0;
          constructor(i, c, g, m, D, C) {
            super(i, c, g, D, C), (0, e.Gn)(this), (this.m_rgImageOptions = m);
          }
          IsValidAssetType(i, c) {
            let g = 0,
              m = 0,
              D = !1,
              C =
                !this.m_rgImageOptions ||
                this.m_rgImageOptions.length === 0 ||
                this.m_rgImageOptions.some(
                  (Y) => Y.sKey == this.GetCurrentImageOption()?.sKey,
                );
            if (i) (g = i.width), (m = i.height), (D = !0);
            else if (this.GetCurrentImageOption()) {
              const Y = l.Fj[this.GetCurrentImageOption().artworkType];
              Y &&
                ((g = Y.width),
                (m = Y.height),
                (D = !Y.bDisableEnforceDimensions));
            }
            const L = this.width >= (0, l.dM)(g) && this.height >= (0, l.dM)(m),
              A = D ? (0, l.Ek)(this.width, this.height, g, m) : L,
              f = c && c != this.fileType,
              k =
                this.m_rgImageOptions && this.m_rgImageOptions.length > 0
                  ? (0, l.vz)(
                      this.fileType,
                      this.m_rgImageOptions?.map((Y) => Y.artworkType) || [],
                    ).length == 0
                  : !1,
              j = !!(0, y.t)(this.fileType);
            let V = "",
              N = !1,
              K;
            return (
              C
                ? k
                  ? (V = (0, b.we)("#ImageUpload_InvalidFileType"))
                  : f
                    ? (V = (0, b.we)(
                        "#ImageUpload_InvalidFormat",
                        (0, M.EG)(c) ?? "",
                      ))
                    : !A && !j
                      ? (V = (0, b.we)(
                          "#ImageUpload_InvalidResolution",
                          (0, l.qj)(g),
                          (0, l.qj)(m),
                        ))
                      : L
                        ? !A && j
                          ? ((V = (0, b.we)(
                              "#ImageUpload_InvalidDimensions",
                              (0, l.qj)(g),
                              (0, l.qj)(m),
                            )),
                            (N = !0))
                          : ((Array.isArray(g) && this.width != (0, l.qj)(g)) ||
                              (Array.isArray(m) &&
                                this.height != (0, l.qj)(m))) &&
                            ((K = K ?? []),
                            K.push(
                              (0, b.we)(
                                "#ImageUpload_PreferredDimension",
                                (0, l.qj)(g),
                                (0, l.qj)(m),
                              ),
                            ))
                        : (V = (0, b.we)(
                            "#ImageUpload_TooSmall",
                            (0, l.qj)(g),
                            (0, l.qj)(m),
                          ))
                : (V = (0, b.we)("#ImageUpload_InvalidFormatSelected")),
              {
                error: V,
                warnings: K,
                needsCrop: N,
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
            const i = (0, l.vz)(
              this.fileType,
              this.m_rgImageOptions?.map((g) => g.artworkType),
            );
            let c = T(this.width, this.height, i, !1);
            if ((c === void 0 && (c = T(this.width, this.height, i, !0)), c)) {
              const g = this.m_rgImageOptions.find(
                (m) =>
                  m.artworkType == c &&
                  (!m.bEnforceDimensions ||
                    (m.width == this.width && m.height == this.height)),
              );
              if (g) return g;
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
          SetCurrentImageOption(i) {
            (this.m_currentImageOption = i),
              (this.m_currentImageOptionKey = i?.sKey);
          }
        }
        P([e.sH], o.prototype, "m_currentImageOption", 2),
          P([e.sH], o.prototype, "m_currentImageOptionKey", 2);
        class r extends o {
          video;
          constructor(i, c, g, m, D, C, L) {
            super(i, c, g, m, D, C), (this.video = L);
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, l.s4)(
              this.video.videoWidth,
              this.video.videoHeight,
              i.artworkType,
            );
          }
          FileTypeMatchesImageTypes(i) {
            return (0, l.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return l.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        class h extends o {
          constructor(i, c, g, m) {
            super(i, c, g, m, URL.createObjectURL(i), { width: 0, height: 0 });
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, l.XY)(i.artworkType);
          }
          FileTypeMatchesImageTypes(i) {
            return (0, l.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return l.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        function t(d) {
          const i = d.split(".").pop()?.toLocaleLowerCase();
          return i == "webm" || i == "mp4";
        }
        class p extends o {
          bCropped = !1;
          localizedImageGroupPrimaryImage;
          media;
          constructor(i, c, g, m, D, C, L, A) {
            super(i, c, g, m, D, C),
              (0, e.Gn)(this),
              (this.media = L),
              (this.localizedImageGroupPrimaryImage = A);
          }
          IsValidAssetType(i, c) {
            return (
              (c = c ?? this.localizedImageGroupPrimaryImage?.file_type),
              super.IsValidAssetType(i, c)
            );
          }
          GetCanvasImageSource() {
            return this.media;
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, l.s4)(
              this.media?.width ?? 0,
              this.media?.height ?? 0,
              i.artworkType,
            );
          }
          FileTypeMatchesImageTypes(i) {
            return (0, l.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return l.Ho.includes(this.fileType);
          }
          GetResizeDimension() {
            return _(this.GetCurrentImageOption()?.artworkType);
          }
        }
        P([e.sH], p.prototype, "bCropped", 2);
        function _(d) {
          if (d === "background")
            return [
              { width: a, height: u },
              { width: E, height: n },
            ];
          if (d === "capsule")
            return [
              {
                width: (0, l.qj)(l.Fj[d].width) / 2,
                height: (0, l.qj)(l.Fj[d].height) / 2,
              },
            ];
          if (d === "spotlight")
            return [
              {
                width: (0, l.qj)(l.Fj[d].width) / 2,
                height: (0, l.qj)(l.Fj[d].height) / 2,
              },
            ];
        }
        function T(d, i, c, g = !1) {
          if (c) {
            for (let m of c)
              if (g ? (0, l.s4)(d, i, m) : (0, l.yu)(d, i, m)) return m;
          }
        }
      },
      38410: (H, G, s) => {
        "use strict";
        s.d(G, {
          $l: () => O,
          PD: () => u,
          Vr: () => a,
          jj: () => E,
          ss: () => M,
        });
        var e = s(32093),
          l = s(99412),
          b = s(18210),
          w = s(41735),
          y = s.n(w);
        class M {}
        function O(n, o, r) {
          const h = n.filter((t) => {
            const p = t.IsValidAssetType(o, r);
            return t.status === "pending" && !p.error && !p.needsCrop;
          });
          return (
            h.forEach((t) => {
              (t.status = "waiting"), (t.message = "");
            }),
            h
          );
        }
        async function x(n, o, r, h, t) {
          const p = O(n, r, h),
            _ = [];
          for (const T of p) {
            T.status = "uploading";
            const d = await o(T, T.filename, T.language ?? l.xPp, t);
            (T.status = d.bSuccess ? "success" : "failed"),
              (T.message =
                !d.bSuccess && d.elErrorMessage ? d.elErrorMessage : ""),
              _.push({
                bSuccess: d.bSuccess,
                image: T,
                uploadResult: d.result,
              });
          }
          return _;
        }
        async function P(n, o, r, h, t, p) {
          const _ = O(n, h, t),
            T = [];
          let d = 0;
          const i = async () => {
              for (; d < _.length; ) {
                const g = d++,
                  m = _[g];
                m.status = "uploading";
                const D = await r(m, m.filename, m.language ?? l.xPp, p);
                (m.status = D.bSuccess ? "success" : "failed"),
                  (m.message =
                    !D.bSuccess && D.elErrorMessage ? D.elErrorMessage : ""),
                  (T[g] = { image: m, uploadResult: D });
              }
            },
            c = Array.from({ length: Math.floor(o) }, () => i());
          return (
            await Promise.all(c),
            T.map((g) => ({
              bSuccess: g.uploadResult.bSuccess,
              image: g.image,
              uploadResult: g.uploadResult.result,
            }))
          );
        }
        class a extends M {
          m_cancel = void 0;
          async UploadAllImages(o, r) {
            this.m_cancel = y().CancelToken.source();
            const h = this.BGetUploadsAreInSerial() ? 1 : 4;
            let t;
            const p = this.UploadSingleImage.bind(this);
            return (
              h > 1
                ? (t = await P(
                    this.GetUploadImages(),
                    h,
                    p,
                    o,
                    r,
                    this.m_cancel.token,
                  ))
                : (t = await x(
                    this.GetUploadImages(),
                    p,
                    o,
                    r,
                    this.m_cancel.token,
                  )),
              t
            );
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, b.we)("#ImageUpload_CancelRequest"));
          }
        }
        function u(n, o, r) {
          if (((n == null || n == null) && (n = o), !r || r.length === 0))
            return n;
          for (const h of r) if (b.A0.IsELanguageValidInRealm(n, h)) return n;
          for (const h of r) if (b.A0.IsELanguageValidInRealm(o, h)) return o;
          return r.includes(e.TU.k_ESteamRealmGlobal) ? l.Bhc : l.ZLm;
        }
        function E(n, o = l.Bhc) {
          let r = n.lastIndexOf(".");
          r != -1 && (n = n.slice(0, r).toLowerCase());
          let h = null,
            t = 0;
          n.endsWith("korean") && ((h = l.Pn1), (t = 6));
          for (let _ = l.Bhc; _ < l.bP9; ++_) {
            const T = (0, l.wwZ)(_);
            if (T.length <= t) continue;
            if (n.endsWith(T) && n.length > T.length + 2) {
              const i = n[n.length - T.length - 1];
              /\p{Alphabetic}|\p{Number}/u.test(i) || ((h = _), (t = T.length));
            }
            const d = (0, l.LgB)(_);
            d.length <= t || (n.endsWith(d) && ((h = _), (t = d.length)));
          }
          const p = (_) => _.replace(/[\s_-]+$/g, "");
          return {
            language: h ?? o,
            baseFilename: t > 0 ? p(n.substring(0, n.length - t)) : n,
          };
        }
      },
      6658: (H, G, s) => {
        "use strict";
        s.d(G, { yh: () => x });
        var e = s(90626),
          l = s(72849);
        function b(P, a, u = !0) {
          const E = new URLSearchParams({
            ima: "fit",
            impolicy: "Letterbox",
            imcolor: "#000000",
          });
          return (
            P && E.set("imw", Math.round(P).toString()),
            a && E.set("imh", Math.round(a).toString()),
            !P || !a || !u
              ? E.set("letterbox", "false")
              : E.set("letterbox", "true"),
            "?" + E.toString()
          );
        }
        const w = null;
        function y(P, a) {
          let u;
          for (let E of w)
            if (
              (u ? (u += ", ") : (u = ""),
              (u += `${P}${b(E, 0)} ${E}w`),
              E >= a)
            )
              break;
          return u;
        }
        function M(P) {
          let {
            src: a,
            orig_width: u,
            orig_height: E,
            sizes: n,
            default_width: o,
            ...r
          } = P;
          n || (n = "95vw"), o || (o = 1024);
          let h = `${a}${b(o, void 0)}`,
            t = y(a, u);
          return React.createElement("img", {
            src: h,
            srcSet: t,
            sizes: n,
            ...r,
          });
        }
        function O(P) {
          const {
            width: a,
            height: u,
            orig_width: E,
            orig_height: n,
            src: o,
            ...r
          } = P;
          let h = o + b(a, u),
            t,
            p = 6;
          if (
            (a && E && (p = Math.min(p, Math.ceil(E / a))),
            u && n && (p = Math.min(p, Math.ceil(n / u))),
            p)
          )
            for (let _ of [2, 4, 6]) {
              if (_ > p) break;
              t ? (t += ", ") : (t = ""),
                (t += `${o}${b(a && a * _, u && u * _)} ${_}x`);
            }
          return React.createElement("img", { ...r, src: h, srcSet: t });
        }
        function x(P) {
          if (
            (P.indexOf("?") > 0 && (P = P.split("?")[0]),
            P.endsWith(".jpg") || P.endsWith(".jpeg"))
          )
            return l.bg.iS;
          if (P.endsWith(".png")) return l.bg.dU;
          if (P.endsWith(".gif")) return l.bg.CK;
          if (P.endsWith(".mp4")) return l.bg.nn;
          if (P.endsWith(".webm")) return l.bg.pJ;
          if (P.endsWith(".vtt")) return l.bg.k7;
          if (P.endsWith(".srt")) return l.bg.pi;
          if (P.endsWith(".webp")) return l.bg.wD;
        }
      },
      50109: (H, G, s) => {
        "use strict";
        s.d(G, { E: () => n, O: () => E });
        var e = s(14947),
          l = s(65946),
          b = s(99412),
          w = s(41635),
          y = s(27066),
          M = s(3166),
          O = s(38585),
          x = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          a = (o, r, h, t) => {
            for (
              var p = t > 1 ? void 0 : t ? P(r, h) : r, _ = o.length - 1, T;
              _ >= 0;
              _--
            )
              (T = o[_]) && (p = (t ? T(r, h, p) : T(p)) || p);
            return t && p && x(r, h, p), p;
          };
        const u = class ge {
          m_eCurLang = (0, b.sfN)(M.TS.LANGUAGE);
          m_rgHasData = (0, w.$Y)([], b.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new O.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(r) {
            return this.m_eCurLang != r
              ? ((this.m_eCurLang = r), this.GetCallback().Dispatch(r), !0)
              : !1;
          }
          SetHasLanguage(r) {
            r.forEach((h, t) => {
              this.m_rgHasData[t] != h && (this.m_rgHasData[t] = h);
            });
          }
          BHasLanguageData(r) {
            return this.m_rgHasData[r];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(r) {
            r != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = r);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              ge.s_globalSingletonStore ||
                (ge.s_globalSingletonStore = new ge()),
              ge.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        a([e.sH], u.prototype, "m_eCurLang", 2),
          a([e.sH], u.prototype, "m_rgHasData", 2),
          a([e.sH], u.prototype, "m_bHasLocalizationContext", 2),
          a([y.o], u.prototype, "GetCurEditLanguage", 1),
          a([y.o], u.prototype, "SetCurEditLanguage", 1),
          a([e.XI.bound], u.prototype, "SetHasLanguage", 1),
          a([y.o], u.prototype, "BHasLanguageData", 1);
        let E = u;
        function n() {
          return (0, l.q3)(() => E.Get().GetCurEditLanguage());
        }
      },
      84676: (H, G, s) => {
        "use strict";
        s.d(G, {
          G6: () => E,
          Gg: () => r,
          MS: () => _,
          Ow: () => o,
          Sq: () => P,
          eR: () => a,
          gF: () => T,
          ik: () => u,
          t7: () => n,
          zX: () => p,
        });
        var e = s(41735),
          l = s.n(e),
          b = s(90626),
          w = s(72604),
          y = s(3367),
          M = s(54963),
          O = s(10142);
        function x(i, c, g = !0) {
          const m = g
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            D = g || CStoreItemCache.Get().BHasStoreItem(i, c, m) ? i : null,
            [C, L] = E(D, c, m),
            [A, f] = useState(null),
            [k, j] = E(A, c, m);
          useEffect(() => {
            C?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              f(C.GetParentAppID());
          }, [C]);
          let V = C?.GetShortDescription()
            ? StripBBCodeTags(C.GetShortDescription())
            : "";
          (!V || V.length === 0) &&
            k &&
            (V = k?.GetShortDescription()
              ? StripBBCodeTags(k.GetShortDescription())
              : "");
          const N = L == u && (!A || j == u);
          return [V, N];
        }
        const P = 1,
          a = 2,
          u = 3;
        function E(i, c, g, m) {
          const D = (0, b.useRef)(void 0),
            C = (0, b.useRef)(void 0),
            L = (0, M.CH)();
          D.current = i;
          const [A, f] = (0, b.useState)(void 0),
            {
              include_assets: k,
              include_release: j,
              include_platforms: V,
              include_all_purchase_options: N,
              include_screenshots: K,
              include_trailers: Y,
              include_ratings: ee,
              include_tag_count: oe,
              include_reviews: se,
              include_basic_info: z,
              include_supported_languages: I,
              include_full_description: v,
              include_included_items: R,
              include_assets_without_overrides: B,
              apply_user_filters: U,
              include_links: S,
              include_extra_details: Z,
              include_optin_registration_tags: $,
            } = g;
          if (
            ((0, b.useEffect)(() => {
              const J = {
                include_assets: k,
                include_release: j,
                include_platforms: V,
                include_all_purchase_options: N,
                include_screenshots: K,
                include_trailers: Y,
                include_ratings: ee,
                include_tag_count: oe,
                include_reviews: se,
                include_basic_info: z,
                include_supported_languages: I,
                include_full_description: v,
                include_included_items: R,
                include_assets_without_overrides: B,
                apply_user_filters: U,
                include_links: S,
                include_extra_details: Z,
                include_optin_registration_tags: $,
              };
              let te = null;
              return (
                !i ||
                  i < 0 ||
                  O.A.Get().BHasStoreItem(i, c, J) ||
                  (A !== void 0 && m && m == C.current) ||
                  (m !== C.current && (f(void 0), (C.current = m)),
                  (te = l().CancelToken.source()),
                  O.A.Get()
                    .QueueStoreItemRequest(i, c, J)
                    .then((X) => {
                      !te?.token.reason && D.current === i && f(X == w.R), L();
                    })),
                () => te?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              i,
              c,
              m,
              A,
              k,
              j,
              V,
              N,
              K,
              Y,
              ee,
              oe,
              se,
              z,
              I,
              v,
              R,
              B,
              U,
              S,
              Z,
              $,
              L,
            ]),
            !i)
          )
            return [null, a];
          if (A === !1) return [void 0, a];
          if (O.A.Get().BIsStoreItemMissing(i, c)) return [void 0, a];
          if (!O.A.Get().BHasStoreItem(i, c, g)) return [void 0, P];
          const q = O.A.Get().GetStoreItemWithLegacyVisibilityCheck(i, c);
          return q ? [q, u] : [null, a];
        }
        function n(i, c, g) {
          return E(i, y.c6.qI, c, g);
        }
        function o(i, c, g) {
          return E(i, y.c6.xO, c, g);
        }
        function r(i, c, g) {
          return E(i, y.c6.RD, c, g);
        }
        function h(i, c, g) {
          const [m, D] = E(i, c, g);
          let C;
          m?.GetStoreItemType() == EStoreItemType.k_EStoreItemType_Package &&
            !m.GetAssets()?.GetHeaderURL() &&
            m?.GetIncludedAppIDs().length == 1 &&
            (C = m.GetIncludedAppIDs()[0]);
          const [L, A] = n(C, g);
          return C && L?.BIsVisible() ? [L, A] : [m, D];
        }
        function t(i, c, g, m) {
          const D = (0, M.CH)(),
            {
              include_assets: C,
              include_release: L,
              include_platforms: A,
              include_all_purchase_options: f,
              include_screenshots: k,
              include_trailers: j,
              include_ratings: V,
              include_tag_count: N,
              include_reviews: K,
              include_basic_info: Y,
              include_supported_languages: ee,
              include_full_description: oe,
              include_included_items: se,
              include_assets_without_overrides: z,
              apply_user_filters: I,
              include_links: v,
              include_extra_details: R,
              include_optin_registration_tags: B,
            } = g;
          return (
            (0, b.useEffect)(() => {
              if (!i || i.length == 0) return;
              const S = {
                  include_assets: C,
                  include_release: L,
                  include_platforms: A,
                  include_all_purchase_options: f,
                  include_screenshots: k,
                  include_trailers: j,
                  include_ratings: V,
                  include_tag_count: N,
                  include_reviews: K,
                  include_basic_info: Y,
                  include_supported_languages: ee,
                  include_full_description: oe,
                  include_included_items: se,
                  include_assets_without_overrides: z,
                  apply_user_filters: I,
                  include_links: v,
                  include_extra_details: R,
                  include_optin_registration_tags: B,
                },
                Z = i.filter(
                  (J) =>
                    !(
                      O.A.Get().BHasStoreItem(J, c, S) ||
                      O.A.Get().BIsStoreItemMissing(J, c)
                    ),
                );
              if (Z.length == 0) return;
              const $ = l().CancelToken.source(),
                q = Z.map((J) => O.A.Get().QueueStoreItemRequest(J, c, S));
              return (
                Promise.all(q).then(() => {
                  $.token.reason || D();
                }),
                () => $.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              i,
              c,
              m,
              D,
              C,
              L,
              A,
              f,
              k,
              j,
              V,
              N,
              K,
              Y,
              ee,
              oe,
              se,
              z,
              I,
              v,
              R,
              B,
            ]),
            i
              ? i.every(
                  (S) =>
                    O.A.Get().BHasStoreItem(S, c, g) ||
                    O.A.Get().BIsStoreItemMissing(S, c),
                )
                ? i.every((S) =>
                    O.A.Get().GetStoreItemWithLegacyVisibilityCheck(S, c),
                  )
                  ? u
                  : a
                : P
              : a
          );
        }
        function p(i, c, g) {
          return t(i, y.c6.qI, c, g);
        }
        function _(i, c, g) {
          return t(i, y.c6.xO, c, g);
        }
        function T(i, c, g) {
          return t(i, y.c6.RD, c, g);
        }
        function d() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      51746: (H, G, s) => {
        "use strict";
        s.d(G, {
          EG: () => y,
          II: () => E,
          N1: () => n,
          S2: () => a,
          Uz: () => P,
          aL: () => x,
          ab: () => b,
          qR: () => w,
          zB: () => u,
        });
        var e = s(7742),
          l = s(72849);
        function b(o) {
          const r = o.toLowerCase();
          if (r.endsWith(".jpg") || r.endsWith(".jpeg")) return "image/jpeg";
          if (r.endsWith(".png")) return "image/png";
          if (r.endsWith(".gif")) return "image/gif";
          if (r.endsWith(".mp4")) return "video/mp4";
          if (r.endsWith(".webm")) return "video/webm";
          if (r.endsWith(".srt")) return "text/srt";
          if (r.endsWith(".vtt")) return "text/vtt";
          if (r.endsWith(".webp")) return "image/webp";
        }
        function w(o) {
          switch (o) {
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
            console.error(
              "ConvertMimeTypeToExtension:Unexepected mime type ",
              o,
            ),
            ".jpg"
          );
        }
        function y(o) {
          switch (o) {
            case l.bg.iS:
              return ".jpg";
            case l.bg.CK:
              return ".gif";
            case l.bg.dU:
              return ".png";
            case l.bg.pJ:
              return ".webm";
            case l.bg.nn:
              return ".mp4";
            case l.bg.pi:
              return ".srt";
            case l.bg.k7:
              return ".vtt";
            case l.bg.wD:
              return ".webp";
          }
        }
        function M(o) {
          const r = (0, e.x0)(),
            h = new Image();
          return (
            (h.onload = () => r.resolve(h)),
            (h.onerror = (t) => {
              console.error("LoadImage failed to load the image, details", t),
                r.resolve(void 0);
            }),
            (h.src = o),
            r.promise
          );
        }
        function O(o) {
          const r = (0, e.x0)(),
            h = document.createElement("video");
          return (
            (h.preload = "metadata"),
            h.addEventListener("loadedmetadata", () => r.resolve(h)),
            (h.onerror = (t) => {
              console.error("LoadVideo failed to load the video, details", t),
                r.resolve(void 0);
            }),
            (h.src = o),
            r.promise
          );
        }
        function x(o) {
          return o.startsWith("image/");
        }
        function P(o) {
          return o.startsWith("video/");
        }
        function a(o, r) {
          return r ? O(o) : M(o);
        }
        async function u(o, r) {
          if (r) return O(URL.createObjectURL(o));
          {
            const h = (0, e.x0)(),
              t = new FileReader();
            (t.onload = () => h.resolve(t.result ?? void 0)),
              (t.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  t.error,
                ),
                  h.resolve(void 0);
              }),
              t.readAsDataURL(o);
            const p = await h.promise;
            return p ? M(p.toString()) : void 0;
          }
        }
        function E(o) {
          return o
            ? o instanceof HTMLVideoElement
              ? { width: o.videoWidth, height: o.videoHeight }
              : { width: o.width, height: o.height }
            : { width: 0, height: 0 };
        }
        function n(o, r) {
          if (!r) return o;
          const h = new Set([
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
          for (const t of r)
            h.has(t.name.toLowerCase()) || (o[t.name] = t.value);
          return o;
        }
      },
      48127: (H, G, s) => {
        "use strict";
        s.d(G, { Gr: () => se, O9: () => j });
        var e = s(7850),
          l = s(65946),
          b = s(75844),
          w = s(90626),
          y = s(99412),
          M = s(32093),
          O = s(72849),
          x = s(64),
          P = s(38410),
          a = s(50109),
          u = s(58534),
          E = s(36707),
          n = s(18210),
          o = s(95603),
          r = s(71647),
          h = s.n(r);
        function t(z) {
          const {
              onDropFiles: I,
              renderDesciption: v,
              elAdditonalButtons: R,
              elOverrideDragAndDropText: B,
            } = z,
            [U, S] = (0, o.hk)(I),
            [Z, $] = (0, o.Ss)(I, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...U,
            className: (0, E.A)(
              S ? h().DragAndDropContainerDragging : h().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!v && v(),
              (0, e.jsx)("div", {
                children: B || (0, n.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: h().ImageUploadBar,
                children: [
                  Z,
                  (0, e.jsxs)("label", {
                    onClick: $,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, n.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: h().SelectImageButton,
                        children: (0, n.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              R,
              z.children,
            ],
          });
        }
        var p = s(95695),
          _ = s.n(p),
          T = s(2801),
          d = s(88003),
          i = s(64641),
          c = s.n(i),
          g = s(36118),
          m = s(85599),
          D = s(34592),
          C = s(82734),
          L = s(21254),
          A = s(27344),
          f = s.n(A),
          k = s(9472);
        function j(z) {
          const {
              imageUploader: I,
              fnUploadComplete: v,
              elOverrideDragAndDropText: R,
              forceResolution: B,
              elAdditonalButtons: U,
              rgRealmList: S,
            } = z,
            [Z, $] = (0, l.q3)(() => [
              I.GetUploadImages(),
              a.O.Get().GetCurEditLanguage(),
            ]),
            q = w.useCallback(
              async (X) => {
                let F = Array.from(X),
                  Q = !0;
                for (let ie = 0; ie < F.length; ie++) {
                  const ne = F[ie],
                    { language: ce } = (0, P.jj)(ne?.name, $);
                  try {
                    const re = (0, P.PD)(ce, $, S);
                    (Q = await I.AddImageForLanguage(ne, re)),
                      Q ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            ie +
                            " file=" +
                            ne.name,
                        ),
                        (0, d.pg)(
                          (0, e.jsx)(T.KG, {
                            strDescription: (0, n.we)(
                              "#ImagePicker_Error",
                              ne.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (re) {
                    let de = (0, D.H)(re);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + de.strErrorMsg,
                      de,
                    ),
                      (0, d.pg)(
                        (0, e.jsx)(T.KG, {
                          strDescription: (0, n.we)(
                            "#EventError_Code",
                            de.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return Q;
              },
              [$, I, S],
            ),
            J = w.useMemo(
              () =>
                U instanceof Array
                  ? U
                  : [
                      (0, e.jsx)(
                        w.Fragment,
                        { children: U },
                        "elAdditonalButtons",
                      ),
                    ],
              [U],
            );
          (0, l.q3)(() =>
            Z.map((X) => ({ a: X.GetCurrentImageOption(), b: X.language })),
          );
          const te = async () => {
            const X = await I.UploadAllImages(B);
            v?.(X);
          };
          return (0, e.jsxs)(t, {
            onDropFiles: q,
            elAdditonalButtons: J,
            elOverrideDragAndDropText: R,
            children: [
              (0, e.jsx)(w.Fragment, {
                children: (0, e.jsx)("div", {
                  className: f().UploadPreviewCtn,
                  children: Z.map((X) =>
                    (0, e.jsx)(
                      K,
                      {
                        asset: X,
                        forceResolution: B,
                        fnOnRemove: () => I.DeleteUploadImage(X),
                        languageRealms: S,
                      },
                      "arttabupload_" + X.filename + "_" + X.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(V, { imageUploader: I, fnOnUploadImageRequested: te }),
            ],
          });
        }
        function V(z) {
          const { imageUploader: I, fnOnUploadImageRequested: v } = z,
            [R] = (0, l.q3)(() => [I.GetUploadImages()]),
            B = R.some((S) => S.status == "pending"),
            U = R.some(
              (S) =>
                S.status == "waiting" ||
                S.status == "uploading" ||
                S.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: f().UploadPreviewButtonsCtn,
            children: [
              !!R.length &&
                (0, e.jsx)(u.$n, {
                  style: { margin: "8px" },
                  onClick: v,
                  disabled: !B,
                  children: (0, n.we)("#ImageUpload_Upload"),
                }),
              !!R.length &&
                (0, e.jsx)(u.$n, {
                  style: { margin: "8px" },
                  onClick: I.ClearImages,
                  disabled: U,
                  children: (0, n.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function N(z, I, v, R, B) {
          let U = new Array();
          return (
            z.GetUploadImages().forEach((S) => {
              U.push(
                jsx(
                  K,
                  {
                    asset: S,
                    forceResolution: v,
                    forceFileType: R,
                    fnOnRemove: () => z.DeleteUploadImage(S),
                    languageRealms: B,
                  },
                  I + S.file + "_" + S.uploadTime,
                ),
              );
            }),
            U
          );
        }
        const K = (0, b.PA)(Y);
        function Y(z) {
          const I = (F) => {
              if (F instanceof x.M7) {
                F.ResetImage();
                const Q = window,
                  ie = (0, e.jsx)(L.q, {
                    ownerWin: Q,
                    uploadFile: F,
                    forceResolution: z.forceResolution,
                    fileType: z.forceFileType || O.bg.dU,
                  });
                (0, d.HT)(ie, Q, "CropModal", {
                  strTitle: (0, n.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  F.fileType,
                  JSON.stringify(F.GetCurrentImageOption()),
                );
            },
            { asset: v, fnOnRemove: R, languageRealms: B } = z,
            U = v.ImageOptions?.map((F) => {
              let Q = F?.fnGetLabelText(),
                ie;
              F.bEnforceDimensions && (Q += ` - ${F.width}x${F.height}`),
                F.bDeprecated &&
                  ((Q += ` ${(0, n.we)("#ImageUpload_Deprecated")}`),
                  (ie = (0, n.we)("#ImageUpload_Deprecated_ttip")));
              let ne;
              return (
                (v.BIsOriginalMinimumDimensions(F) &&
                  v.FileTypeMatchesImageTypes(F)) ||
                  (ne = f().ImageDimensionTooSmall),
                { label: Q, data: F, strOptionClass: ne, tooltip: ie }
              );
            }).filter((F) => !F.data.bHiddenFromDropdown),
            S = {
              pending: (0, n.we)("#ImageUpload_Pending"),
              waiting: (0, n.we)("#ImageUpload_Waiting"),
              uploading: (0, n.we)("#ImageUpload_Uploading"),
              processing: (0, n.we)("#ImageUpload_Processing"),
              success: (0, n.we)("#ImageUpload_SuccessCard"),
              failed: (0, n.we)("#ImageUpload_Failed"),
            },
            Z = v.BSupportsLanguages()
              ? se(
                  n.A0.GetLanguageListForRealms(
                    B ?? [M.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            $ = v.IsValidAssetType(z.forceResolution, z.forceFileType),
            q = v.status == "pending";
          let J = S[v.status];
          v.status == "pending" &&
            ($.needsCrop
              ? (J = (0, n.we)("#ImageUpload_NeedsCrop"))
              : $.error && (J = (0, n.we)("#ImageUpload_Invalid")));
          let te;
          const X = v.GetCurrentImageOption();
          return (
            X && (te = U?.find((F) => F.data.sKey == X.sKey)?.data),
            te || (te = U?.[0]?.data),
            (0, e.jsxs)("div", {
              className: f().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: f().UploadPreviewDelete,
                  onClick: () => R(v),
                  children: (0, e.jsx)(g.sED, {}),
                }),
                (0, e.jsx)(ee, { asset: v }),
                Z &&
                  (0, e.jsx)(u.m, {
                    strDropDownClassName: _().DropDownScroll,
                    rgOptions: Z,
                    selectedOption: v.language,
                    onChange: (F) => (v.language = F.data),
                    disabled: !q,
                  }),
                U &&
                  U?.length > 1 &&
                  (0, e.jsx)(u.m, {
                    label: v.GetImageOptionLabel(),
                    rgOptions: U,
                    selectedOption: te,
                    onChange: (F) => v.SetCurrentImageOption(F.data),
                    disabled: !q,
                  }),
                q &&
                  $.warnings?.map((F, Q) =>
                    (0, e.jsx)(
                      "div",
                      { className: f().UploadPreviewWarning, children: F },
                      `warning${Q}`,
                    ),
                  ),
                q &&
                  $.messages?.map((F, Q) =>
                    (0, e.jsx)(
                      "div",
                      { className: f().UploadPreviewMessage, children: F },
                      `message${Q}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, E.A)({
                    [_().FlexColumnContainer]: !0,
                    [f().UploadPreviewError]: v.status == "failed",
                  }),
                  children: [
                    J,
                    (0, k.o)(v.status) &&
                      (0, e.jsx)("div", {
                        className: c().FlexCenter,
                        children: (0, e.jsx)(m.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().UploadPreviewError,
                  children: v.message,
                }),
                q &&
                  $.error &&
                  (0, e.jsx)("div", {
                    className: f().UploadPreviewError,
                    children: $.error,
                  }),
                q &&
                  $.needsCrop &&
                  (0, e.jsx)(u.jn, {
                    onClick: () => I(v),
                    children: (0, n.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function ee(z) {
          const { asset: I } = z;
          return I.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: f().PreviewImgCtn,
                onClick: (v) =>
                  (0, d.pg)((0, e.jsx)(oe, { asset: I }), (0, C.uX)(v)),
                children: [
                  (0, e.jsxs)("span", {
                    className: f().PreviewImgInfo,
                    children: [I.width, " x ", I.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: I.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: f().PreviewImgCtn,
                style: { backgroundImage: `url(${I.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: f().PreviewImgInfo,
                  children: [I.width, " x ", I.height],
                }),
              });
        }
        function oe(z) {
          const { asset: I, closeModal: v } = z;
          return (0, e.jsx)(T.o0, {
            bAlertDialog: !0,
            closeModal: v,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: I.dataUrl }),
            }),
          });
        }
        function se(z) {
          const I = [],
            v = new Array();
          for (const R of z) {
            if (R == y.X51) continue;
            const B = (0, n.we)("#Language_" + (0, y.LgB)(R));
            v.push({ label: B, data: R });
          }
          return (
            v.sort((R, B) => R.label.localeCompare(B.label)),
            v.forEach((R) => I.push({ label: R.label, data: R.data })),
            v
          );
        }
      },
      43308: (H, G, s) => {
        "use strict";
        s.d(G, { K: () => p });
        var e = s(7850),
          l = s(90626),
          b = s(92298),
          w = s.n(b),
          y = s(44894),
          M = s(7582),
          O = s(95695),
          x = s.n(O),
          P = s(36707),
          a = s(18210),
          u = s(71421),
          E = s(12916),
          n = s.n(E),
          o = s(87937),
          r = s.n(o);
        const h = "hh:mm a",
          t = "HH:mm";
        function p(D) {
          const {
            nLatestTime: C,
            nEarliestTime: L,
            fnGetTimeToUpdate: A,
            onError: f,
            strAlsoShowTimeZone: k,
            disabled: j,
            bNoDefaultDate: V,
            className: N,
            strDescToolTip: K,
            strDescription: Y,
            bShowTimeZone: ee,
            strInvalidDateTimeLocalizedMsg: oe,
            fnIsValidDateTime: se,
            bWeekdaysOnly: z,
            fnSetTimeToUpdate: I,
            bForce24HourFormat: v,
            bAllowClear: R,
          } = D;
          let B = d() || v ? t : h;
          const U = A(),
            [S, Z] = l.useState(U > 0 ? r()(U * 1e3) : null),
            [$, q] = l.useState(0),
            [J, te] = l.useState(),
            [X, F] = l.useState(),
            Q = m(J, X, oe, se, f),
            ie = !f && Q;
          let ne;
          if (C && L && C == L && L > M.HD.GetTimeNowWithOverride()) {
            const W = r().unix(L);
            (ne = {
              hours: { max: W.hour(), min: W.hour(), step: 0 },
              minutes: { max: W.minute(), min: W.minute(), step: 0 },
              seconds: { max: W.seconds(), min: W.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (B = t);
          }
          let ce;
          !U && L && !V && (ce = r().unix(L));
          const re = r().tz.guess(),
            de = r().unix(U).tz(re),
            le = !!k && re != k && r().unix(U).tz(k),
            pe = (W) => {
              if (j) return;
              F(null);
              const he = A(),
                ae = r().unix(he || M.HD.GetTimeNowWithOverride());
              (W = W.clone()),
                W.hour(ae.hour()),
                W.minute(ae.minute()),
                W.second(0),
                I(W.unix()),
                Z(W);
            },
            { fnOnInput: me, fnOnInputBlur: _e, fnOnChange: fe } = _(i, pe, F),
            Pe = (W) => {
              if (j) return;
              te(null);
              let he = A(),
                ae = 0;
              if (!he)
                ae =
                  r().unix(L).hour(0).second(0).minutes(0).unix() +
                  3600 * W.hour() +
                  60 * W.minutes();
              else {
                const ue = r().unix(he);
                (W = W.clone()),
                  W.year(ue.year()),
                  W.month(ue.month()),
                  W.date(ue.date()),
                  (ae = W.unix());
              }
              I(ae), Z(r().unix(ae));
            },
            { fnOnInput: De, fnOnInputBlur: Ee, fnOnChange: Ie } = _(c, Pe, te),
            ve = () => {
              j || (I(0), Z(null), F(null), te(null), q((W) => W + 1));
            },
            Te = R && !j && U > 0;
          return (0, e.jsxs)("div", {
            className: (0, P.A)(n().EventTimeSection, N),
            children: [
              (0, e.jsxs)("div", {
                className: (0, P.A)(n().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, e.jsx)(u.he, {
                    toolTipContent: K,
                    direction: "top",
                    children: !!Y && (0, e.jsx)("span", { children: Y }),
                  }),
                  ie &&
                    (0, e.jsxs)("span", {
                      className: n().DateErrorCtn,
                      children: [(0, e.jsx)("img", { src: y.A }), ie],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: x().FlexRowContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, P.A)(x().InputBorder, n().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        w(),
                        {
                          onChange: fe,
                          timeFormat: !1,
                          value: X ?? S,
                          isValidDate: (W) => !j && g(L, C, z, W),
                          initialValue: ce,
                          inputProps: {
                            placeholder: (0, a.we)(
                              "#DateTimePicker_Enter_Date",
                            ),
                            className: (0, P.A)(
                              n().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: j,
                            onChange: (W) => me(W.currentTarget.value),
                            onBlur: (W) => _e(W.currentTarget.value),
                          },
                        },
                        "date" + $,
                      ),
                      !!le &&
                        (0, e.jsx)("div", {
                          className: n().PacificTimeHint,
                          children: le.format("L"),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, P.A)(x().InputBorder, n().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        w(),
                        {
                          onChange: Ie,
                          dateFormat: !1,
                          timeFormat: B,
                          timeConstraints: ne,
                          value: J ?? S,
                          inputProps: {
                            placeholder: (0, a.we)(
                              "#DateTimePicker_Enter_Time",
                            ),
                            className: (0, P.A)(
                              n().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: j,
                            onChange: (W) => De(W.currentTarget.value),
                            onBlur: (W) => Ee(W.currentTarget.value),
                          },
                        },
                        "time" + $,
                      ),
                      !!le &&
                        (0, e.jsx)("div", {
                          className: n().PacificTimeHint,
                          children: le.format("LT"),
                        }),
                    ],
                  }),
                  ee &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: n().TimeZone,
                          children: de.zoneAbbr(),
                        }),
                        !!le &&
                          (0, e.jsx)("div", {
                            className: n().TimeZone,
                            children: le.zoneAbbr(),
                          }),
                      ],
                    }),
                  Te &&
                    (0, e.jsx)("button", {
                      type: "button",
                      className: n().ClearButton,
                      onClick: ve,
                      children: (0, a.we)("#Button_Clear"),
                    }),
                ],
              }),
              !!ne &&
                (0, e.jsx)("div", {
                  children: (0, a.we)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function _(D, C, L) {
          const [A, f] = l.useState(!1);
          return {
            fnOnInput: (N) => {
              L(N), f(!0);
            },
            fnOnInputBlur: (N) => {
              if (A) {
                const K = D(N);
                K.isValid() && C(K);
              }
              f(!1);
            },
            fnOnChange: (N) => {
              if (!A)
                if (typeof N == "string") {
                  const K = D(N);
                  K.isValid() && C(K);
                } else C(N);
            },
          };
        }
        function T() {
          const C = r()("2025-01-14").format("L").split(/[-/.]/),
            L = C.indexOf("14");
          return C.indexOf("01") < L;
        }
        function d() {
          return r()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function i(D) {
          return r()(D, T() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function c(D) {
          return r()(D, [h, t], !1);
        }
        function g(D, C, L, A) {
          const f = r().unix(D).hour(0).seconds(0).minute(0);
          let k = A.unix() >= f.unix();
          if (k && C && C >= D) {
            const j = r().unix(C).hour(23).minute(59).seconds(59);
            k = A.unix() <= j.unix();
          }
          return (
            k && L && (A.weekday() == 0 || A.weekday() == 6) && (k = !1), k
          );
        }
        function m(D, C, L, A, f) {
          const k = A && A(),
            j = C && !i(C).isValid(),
            V = D && !c(D).isValid(),
            N = V || j || typeof k == "string" || k === !1;
          let K = null;
          return (
            N &&
              ((K = (0, a.we)(
                L || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              V
                ? (K = (0, a.we)("#DateTimePicker_Time_CannotParse"))
                : j
                  ? (K = (0, a.we)("#DateTimePicker_Date_CannotParse"))
                  : typeof k == "string" && (K = k)),
            l.useEffect(() => {
              f && f(K);
            }, [K, f]),
            K
          );
        }
      },
      79167: (H, G, s) => {
        "use strict";
        s.d(G, { I: () => h });
        var e = s(7850),
          l = s(90626),
          b = s(54963),
          w = s(75844),
          y = s(8323),
          M = s(18210),
          O = s(58534),
          x = s(36118),
          P = s(81315),
          a = s.n(P),
          u = s(13854),
          E = Object.defineProperty,
          n = Object.getOwnPropertyDescriptor,
          o = (t, p, _, T) => {
            for (
              var d = T > 1 ? void 0 : T ? n(p, _) : p, i = t.length - 1, c;
              i >= 0;
              i--
            )
              (c = t[i]) && (d = (T ? c(p, _, d) : c(d)) || d);
            return T && d && E(p, _, d), d;
          },
          r = ((t) => (
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
          ))(r || {});
        let h = class extends l.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new y.Ji();
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
          OnMouseDown(t, p) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (_) => {
                this.OnMouseUp(_, p);
              }),
              (this.m_fnMouseMove = (_) => {
                this.OnMouseMove(_, p);
              }),
              this.setState({ EdgeDown: p }),
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
          OnMouseMove(t, p) {
            if (this.state.EdgeDown !== void 0) {
              switch ((t.shiftKey && this.m_fnMouseUp(), p)) {
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
                  const _ = (0, u.OQ)(
                      this.CalcLeftEdge(t.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    T = 100 - (_ + this.state.curWidthPct),
                    d = (0, u.OQ)(
                      this.CalcTopEdge(t.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    i = 100 - (d + this.state.curHeightPct),
                    c = {
                      curLeftPosPct: _,
                      curRightPosPct: T,
                      curTopPosPct: d,
                      curBottomPosPct: i,
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
            let p =
                t.curTopPosPct !== void 0
                  ? t.curTopPosPct
                  : this.state.curTopPosPct,
              _ =
                t.curBottomPosPct !== void 0
                  ? t.curBottomPosPct
                  : this.state.curBottomPosPct,
              T =
                t.curLeftPosPct !== void 0
                  ? t.curLeftPosPct
                  : this.state.curLeftPosPct,
              d =
                t.curRightPosPct !== void 0
                  ? t.curRightPosPct
                  : this.state.curRightPosPct,
              i = (0, u.OQ)(
                100 - d - T,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              c = (0, u.OQ)(
                100 - _ - p,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (t.curLeftPosPct !== void 0 || t.curRightPosPct !== void 0
                ? (c = i / this.m_aspectRatio)
                : (i = c * this.m_aspectRatio)),
              t.curLeftPosPct !== void 0
                ? (T = 100 - d - i)
                : (d = 100 - (T + i)),
              t.curTopPosPct !== void 0
                ? (p = 100 - _ - c)
                : (_ = 100 - (p + c));
            const g = 100 - d - T,
              m = 100 - _ - p;
            this.IsValidPct(T) &&
              this.IsValidPct(d) &&
              this.IsValidPct(p) &&
              this.IsValidPct(_) &&
              this.IsValidPct(g) &&
              this.IsValidPct(m) &&
              this.setState({
                curLeftPosPct: T,
                curRightPosPct: d,
                curTopPosPct: p,
                curBottomPosPct: _,
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
            return (0, u.OQ)(this.GetXPercent(t), 0, 100);
          }
          CalcRightEdge(t) {
            return (0, u.OQ)(
              100 - (this.GetXPercent(t) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(t) {
            return (0, u.OQ)(this.GetYPercent(t), 0, 100);
          }
          CalcBottomEdge(t) {
            return (0, u.OQ)(
              100 - (this.GetYPercent(t) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(t, p) {
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
              p = a().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (p += ` ${a().EdgeDown} ` + a()[this.state.EdgeDown]),
              (0, e.jsxs)("div", {
                className: p,
                style: t,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, e.jsxs)("div", {
                    className: a().LinkRegionGridBox,
                    children: [
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().TopLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().Top}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "top");
                        },
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().TopRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().Left}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "left");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsxs)("div", {
                        className: `${a().LinkRegionEdge} ${a().Middle}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, e.jsx)("div", {
                              className: a().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, e.jsx)(x.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, e.jsx)("div", {
                              className: a().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, e.jsx)(x.xv8, {}),
                            }),
                          (0, e.jsxs)("div", {
                            className: a().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().Right}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "right");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().BottomLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().Bottom}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().BottomRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, e.jsxs)("div", {
                      className: a().LinkRegionInfo,
                      children: [
                        (0, e.jsx)(O.pd, {
                          className: a().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, M.we)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, e.jsx)(O.pd, {
                          className: a().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, M.we)("#SteamTV_LinkDescription"),
                          placeholder: (0, M.we)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, e.jsxs)("div", {
                          className: a().LinkRegionButtonContainer,
                          children: [
                            (0, e.jsxs)(O.$n, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, M.we)("#Button_OK"), " "],
                            }),
                            (0, e.jsxs)(O.$n, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, M.we)("#Button_Cancel")],
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
        o([b.oI], h.prototype, "LinkRegionBoxRef", 1),
          o([b.oI], h.prototype, "OnMouseDown", 1),
          o([b.oI], h.prototype, "OnMouseMove", 1),
          o([b.oI], h.prototype, "OnMouseUp", 1),
          o([b.oI], h.prototype, "HandleDelete", 1),
          o([b.oI], h.prototype, "OnSetLinkURLChange", 1),
          o([b.oI], h.prototype, "OnSetLinkDescriptionChange", 1),
          o([b.oI], h.prototype, "OnSaveLink", 1),
          o([b.oI], h.prototype, "OnEditLink", 1),
          (h = o([w.PA], h));
      },
      21254: (H, G, s) => {
        "use strict";
        s.d(G, { q: () => t, t: () => _ });
        var e = s(7850),
          l = s(90626),
          b = s(25279),
          w = s(72849),
          y = s(58534),
          M = s(79167),
          O = s(2801),
          x = s(36707),
          P = s(18210),
          a = s(54963),
          u = s(50666),
          E = s.n(u),
          n = s(82734),
          o = Object.defineProperty,
          r = Object.getOwnPropertyDescriptor,
          h = (T, d, i, c) => {
            for (
              var g = c > 1 ? void 0 : c ? r(d, i) : d, m = T.length - 1, D;
              m >= 0;
              m--
            )
              (D = T[m]) && (g = (c ? D(d, i, g) : D(g)) || g);
            return c && g && o(d, i, g), g;
          };
        class t extends l.Component {
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
            const d = this.props.uploadFile.GetCanvasImageSource();
            d &&
              (await p(
                this.props.uploadFile,
                d,
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
          UpdateCrop(d, i) {
            this.setState({ region: i });
          }
          GetDestWidth() {
            const { uploadFile: d, forceResolution: i } = this.props;
            if (i) return i.width;
            const c = d.GetCurrentImageOption();
            if (!c) return 0;
            const g = b.Fj[c.artworkType].width;
            return c ? (0, b.qj)(g) : 0;
          }
          GetDestHeight() {
            const { uploadFile: d, forceResolution: i } = this.props;
            if (i) return i.width;
            const c = d.GetCurrentImageOption();
            if (!c) return 0;
            const g = b.Fj[c.artworkType].height;
            return c ? (0, b.qj)(g) : 0;
          }
          GetLargestBoxThatFits(d, i, c, g) {
            let m = c,
              D = (m * i) / Math.max(d, 1);
            return (
              D > g && ((D = g), (m = (D * d) / Math.max(i, 1))),
              { width: m, height: D }
            );
          }
          GetPreviewWindowStyle() {
            const { region: d } = this.state,
              i = this.GetLargestBoxThatFits(
                this.GetDestWidth(),
                this.GetDestHeight(),
                500,
                150,
              ),
              c = i.width,
              g = i.height,
              m = 1 / Math.max(d.widthPct / 100, 1e-4),
              D = 1 / Math.max(d.heightPct / 100, 1e-4),
              C = (this.props.uploadFile.width * d.xPosPct) / 100,
              L = (this.props.uploadFile.height * d.yPosPct) / 100,
              A = (c * m) / this.props.uploadFile.width,
              f = (g * D) / this.props.uploadFile.height,
              k = -C * A,
              j = -L * f;
            return {
              width: c,
              height: g,
              backgroundPosition: `${k}px ${j}px`,
              backgroundSize: `${100 * m}% ${100 * D}%`,
              backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
            };
          }
          render() {
            const d = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              i = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
              c = this.GetLargestBoxThatFits(
                this.props.uploadFile.width,
                this.props.uploadFile.height,
                800,
                500,
              );
            return (0, e.jsx)(O.x_, {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
              children: (0, e.jsxs)("div", {
                className: (0, x.A)("DialogContent", "_DialogCenterVertically"),
                children: [
                  (0, e.jsx)(y.iK, {
                    children: (0, P.we)(
                      "#ImageUpload_CropModalTitleDims",
                      this.GetDestWidth(),
                      this.GetDestHeight(),
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, x.A)("DialogBodyText"),
                    children: (0, P.we)("#ImageUpload_CropModalDescription"),
                  }),
                  (0, e.jsxs)("div", {
                    className: u.CropImage,
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
                      (0, e.jsx)(M.I, {
                        bLockAspectRatio: !0,
                        bDisableLink: !0,
                        index: 0,
                        updateFn: this.UpdateCrop,
                        xPosPct: 0,
                        yPosPct: 0,
                        widthMinPct: d,
                        heightMinPct: i,
                        widthPct: d,
                        heightPct: i,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: u.CropPreviewGroup,
                    children: [
                      (0, e.jsx)("div", {
                        className: u.CropPreviewLabel,
                        children: (0, P.we)("#ImageUpload_CropPreview"),
                      }),
                      (0, e.jsx)("div", {
                        style: this.GetPreviewWindowStyle(),
                      }),
                    ],
                  }),
                  (0, e.jsx)(y.jn, {
                    onClick: this.OnCrop,
                    children: (0, P.we)("#ImageUpload_CropAndContinue"),
                  }),
                ],
              }),
            });
          }
        }
        h([a.oI], t.prototype, "OnCrop", 1),
          h([a.oI], t.prototype, "UpdateCrop", 1);
        async function p(T, d, i, c, g, m, D, C, L) {
          return new Promise((A, f) => {
            const k = _(L);
            if (!k) {
              f("Invalid format provided");
              return;
            }
            const j = document.createElement("canvas");
            (j.width = D),
              (j.height = C),
              j.getContext("2d")?.drawImage(d, i, c, g, m, 0, 0, D, C),
              j.toBlob((Y) => {
                const ee = j.toDataURL(k);
                if (L !== w.bg.dU && ee.startsWith("data:image/png")) {
                  f("Unable to encode into the requested file format");
                  return;
                }
                if (!Y) {
                  f("Unable to apply crop into image");
                  return;
                }
                (T.file = (0, n.pE)(Y, T.filename)),
                  (T.width = D),
                  (T.height = C),
                  (T.dataUrl = ee),
                  (T.uploadTime = Date.now()),
                  (T.bCropped = !0),
                  A();
              });
          });
        }
        function _(T) {
          switch (T) {
            case w.bg.dU:
              return "image/png";
            case w.bg.iS:
              return "image/jpeg";
          }
        }
      },
      95603: (H, G, s) => {
        "use strict";
        s.d(G, { Ss: () => y, hk: () => M });
        var e = s(7850),
          l = s(90626),
          b = s(72739),
          w = s(82734);
        function y(a, u) {
          const E = l.useRef(void 0),
            n = l.useCallback(
              (h) => {
                h.currentTarget.files.length > 0 &&
                  (a(h.currentTarget.files), (h.currentTarget.value = ""));
              },
              [a],
            ),
            o = l.useCallback(() => E.current.click(), []);
          return [
            b.createPortal(
              (0, e.jsx)("form", {
                onSubmit: x,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...u,
                  type: "file",
                  ref: E,
                  onChange: n,
                }),
              }),
              window.document.body,
            ),
            o,
          ];
        }
        function M(a) {
          const [u, E] = l.useState(!1),
            n = l.useCallback((p) => {
              ((p.dataTransfer.files && p.dataTransfer.files[0]) ||
                (p.dataTransfer.types && p.dataTransfer.types[0] == "Files")) &&
                E(!0);
            }, []),
            o = l.useCallback((p) => {
              w.NO(p) && E(!1);
            }, []),
            r = l.useCallback(() => E(!1), []),
            h = u ? x : void 0,
            t = l.useCallback(
              (p) => {
                p.dataTransfer.files?.length &&
                  (a(p.dataTransfer.files, p),
                  p.preventDefault(),
                  p.stopPropagation()),
                  E(!1);
              },
              [a],
            );
          return [
            {
              onDragEnter: n,
              onDragLeave: o,
              onDragEnd: r,
              onDragOver: h,
              onDrop: t,
            },
            u,
          ];
        }
        async function O(a, u = 1e3) {
          return await new Promise((E, n) => {
            const o = new Image();
            (o.src = a),
              (o.onload = () => E("success")),
              (o.onerror = () => E("error")),
              u > 0 && window.setTimeout(() => E("timeout"), u);
          });
        }
        function x(a) {
          a.preventDefault();
        }
        function P(a) {
          switch (a.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const u = a.name.match(/(?<=\.)[^.]+$/);
              return u ? u[0] : void 0;
          }
        }
      },
      27828: (H) => {
        H.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      71647: (H) => {
        H.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      27344: (H) => {
        H.exports = {
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
      12916: (H) => {
        H.exports = {
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
      81315: (H) => {
        H.exports = {
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
      64641: (H) => {
        H.exports = {
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
      50666: (H) => {
        H.exports = {
          CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
          CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
          CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
        };
      },
      44894: (H, G, s) => {
        "use strict";
        s.d(G, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
