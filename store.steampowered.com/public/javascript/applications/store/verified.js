/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [86991],
    {
      93256: (W, D, t) => {
        "use strict";
        t.d(D, { u: () => c });
        var e = t(7850),
          u = t(29630),
          T = t(13465);
        function c(f) {
          const { strImageToken: C, language: I, strAltText: B } = f,
            R = (0, u.z5)(C, I);
          return R
            ? typeof R == "string"
              ? (0, e.jsx)("img", { src: R, alt: B })
              : (0, e.jsx)(T.c, { rgSources: R, strAltText: B })
            : null;
        }
      },
      29630: (W, D, t) => {
        "use strict";
        t.d(D, { zU: () => i, z5: () => U });
        var e = t(38340),
          u = t(9046),
          T = t(99412),
          c = t(72604),
          f = t(7742),
          C = t(72849),
          I = t(76559),
          B = t(71742),
          R = t(34592),
          G = t(51746),
          v = t(72609),
          b = t(7850),
          O = t(90626);
        function n(s, o) {
          return `${s}/${o}`;
        }
        const a = {},
          x = O.createContext(a);
        function M(s) {
          const { resolutions: o, children: r } = s;
          return jsx(x.Provider, { value: o, children: r });
        }
        function m() {
          return O.useContext(x);
        }
        const y = new RegExp(
          `${e.eg.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
          "gi",
        );
        function F(s) {
          const o = [],
            r = new Set();
          for (const h of s.matchAll(y)) {
            const l = Number.parseInt(h[1]),
              E = h[2],
              P = n(l, E);
            l > 0 &&
              !r.has(P) &&
              (r.add(P), o.push({ clanAccountID: l, hashAndExt: E }));
          }
          return o;
        }
        function U(s, o, r = 0) {
          const h = m();
          return K(s, o, r, h);
        }
        async function z(s, o, r = 0) {
          return K(s, o, r);
        }
        function K(s, o, r = 0, h) {
          if (!s || s.length == 0) return null;
          if (s?.startsWith(e.lw)) return i.ReplacementTokenToClanImageURL(s);
          if (s?.startsWith(e.eg)) {
            const l = i.GetBaseURL(),
              E = s.substring(e.eg.length + 1),
              P = parseInt(E.substring(0, E.indexOf("/"))),
              j = E.substring(E.indexOf("/") + 1),
              p = i.GenerateURLFromHashAndExt(P, j);
            if (h?.[n(P, j)] === !1) return p;
            const g = i
              .GetLocalizedClanImageFileNames(j, o)
              .map((d) => l + P + "/" + d + "?t=" + r);
            return g.push(p), g;
          }
          return s;
        }
        const i = {
          GetBaseURL() {
            return `${v.TS.CLAN_CDN_ASSET_URL}images/`;
          },
          GetBaseURLV2() {
            return `${v.TS.CLAN_CDN_ASSET_URL}locimages/`;
          },
          ReplacementTokenToClanImageURL(s) {
            return (
              (s = s.replace(e.lw, this.GetBaseURL())),
              s.replace("http://", "https://")
            );
          },
          ExtractHashFromBBCodeURL(s) {
            const r =
              /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
                s,
              );
            return r?.groups
              ? [r.groups.filename, parseInt(r.groups.clanid)]
              : [void 0, void 0];
          },
          GetExtensionString(s) {
            return (
              (s.file_type != null ? (0, G.EG)(s.file_type) : null) ?? ".jpg"
            );
          },
          GetHashAndExt(s) {
            return s ? s.image_hash + this.GetExtensionString(s) : null;
          },
          GetThumbHashAndExt(s) {
            return s ? s.thumbnail_hash + this.GetExtensionString(s) : null;
          },
          GetHashFromHashAndExt(s) {
            let o = s.substring(s.lastIndexOf("."));
            return s.substring(0, s.length - o.length);
          },
          GetExtStringFromHashAndExt(s) {
            return s.substring(s.lastIndexOf("."));
          },
          GetLocalizedClanImageFileNames(s, o) {
            if (o == null) return [];
            const r = this.GetHashFromHashAndExt(s),
              h = this.GetExtStringFromHashAndExt(s),
              l = [r + "/" + (0, T.LgB)(o) + h];
            return (
              o == T.Pn1 && l.push(r + "/" + (0, T.x6o)((0, T.LgB)(o)) + h), l
            );
          },
          GenerateURLFromHashAndExt(s, o, r = u.wI.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              s,
              o,
              r,
              T.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(s, o, r = u.wI.full, h, l) {
            s instanceof I.b && (s = s.GetAccountID());
            let E = this.GetBaseURL();
            const P = h != null && h != T.xPp;
            if (r == u.wI.full && !P) return E + s + "/" + o;
            {
              let j = o.substring(o.lastIndexOf(".")),
                p = o.substring(0, o.length - j.length);
              return !P || h == T.Bhc || l != "localized_image_group"
                ? E + s + "/" + p + r + j
                : E + s + "/" + p + "/" + (0, T.x6o)((0, T.LgB)(h)) + j;
            }
          },
          GetHashAndExtFromURL(s) {
            let o = this.GetBaseURL();
            return !s?.startsWith(o) ||
              ((s = s.substring(o.length)), s.indexOf("/") == -1)
              ? null
              : ((s = s.substring(s.indexOf("/") + 1)), s);
          },
          GenerateEditableURLFromHashAndExt(s, o, r) {
            let h =
              v.TS.COMMUNITY_BASE_URL +
              "gid/" +
              s.ConvertTo64BitString() +
              "/showclanimage/?image_hash_and_ext=" +
              o;
            return r && (h += "&lang=" + r), h;
          },
          GetMimeType(s) {
            return (0, G.ab)(s);
          },
          async AsyncGetImageResolution(s, o, r, h, l) {
            const E = o + this.GetExtensionString({ file_type: r }),
              P = this.GenerateEditableURLFromHashAndExt(s, E);
            return await this.AsyncGetImageResolutionInternal(P, h, l);
          },
          async AsyncGetImageResolutionInternal(s, o, r) {
            const h = (0, f.x0)();
            let l = new Image();
            (l.crossOrigin = "anonymous"),
              (l.onerror = (p) => {
                const g = { success: c.zi };
                r ||
                  ((g.err_msg =
                    "Load fail on url " +
                    s +
                    " with error: " +
                    (0, R.H)(p).strErrorMsg),
                  console.error(g.err_msg)),
                  (g.success = c.zi),
                  h.resolve(g);
              }),
              (l.onload = () => {
                const p = { success: c.zi };
                if (
                  ((p.width = l.width),
                  (p.height = l.height),
                  !(l.width > 0) || !(l.height > 0))
                ) {
                  (0, B.wT)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + s,
                  ),
                    (p.err_msg = "No resolution reported for url " + s),
                    h.resolve(p);
                  return;
                }
                (p.success = c.R), h.resolve(p);
              }),
              (l.src = s),
              o.token.promise.catch(() => {
                (l.onload = () => {}),
                  (l.onerror = () => {}),
                  h.resolve({ success: c.e9 });
              });
            let E;
            const P = new Promise((p, g) => {
              E = setTimeout(() => g(), 1e4);
            });
            let j;
            try {
              j = await Promise.race([P, h.promise]);
            } catch {
              j = { success: c._3, err_msg: "We timed out processing images" };
            } finally {
              clearTimeout(E);
            }
            return j;
          },
          BIsClanImageVideo(s) {
            return s.file_type == C.bg.nn || s.file_type == C.bg.pJ;
          },
        };
      },
      9046: (W, D, t) => {
        "use strict";
        t.d(D, { pb: () => T, wI: () => u });
        class e {
          imageid;
          image_hash;
          thumbnail_hash;
          file_type;
          file_name;
          clanAccountID;
          url;
          thumb_url;
          uploaded_time;
          loc_group_id;
        }
        var u = ((c) => (
          (c.full = ""),
          (c.background_main = "_960x311"),
          (c.background_mini = "_480x156"),
          (c.capsule_main = "_400x225"),
          (c.spotlight_main = "_1054x230"),
          c
        ))(u || {});
        const T = [
          "localized_image_group",
          "link_capsule",
          "product_mobile_banner_override",
          "product_banner_override",
          "sale_section_title",
          "schedule_track_art",
          "localized_background_art",
        ];
      },
      7742: (W, D, t) => {
        "use strict";
        t.d(D, { x0: () => u });
        async function e(c) {
          try {
            return await c;
          } catch (f) {
            console.error(f);
            return;
          }
        }
        function u() {
          let c, f;
          return {
            promise: new Promise((I, B) => {
              (c = I), (f = B);
            }),
            resolve: c,
            reject: f,
          };
        }
        function T(c) {
          return new Promise((f) => setTimeout(f, c));
        }
      },
      95414: (W, D, t) => {
        "use strict";
        t.d(D, { j: () => b, u: () => O });
        var e = t(7850),
          u = t(90626),
          T = t(24660),
          c = t(83482),
          f = t(72865),
          C = t(77200),
          I = t(53113),
          B = t(68094),
          R = t(72609),
          G = t(3166);
        function v(n) {
          if (n) {
            if ("appid" in n) return "app";
            if ("bundleid" in n) return "bundle";
            if ("packageid" in n) return "sub";
          }
        }
        function b(n) {
          const {
              id: a,
              hoverClassName: x,
              fnGetIDOverride: M,
              fnHoverState: m,
              disableScreenshots: y,
              children: F,
            } = n,
            U = u.useRef(null),
            z = u.useCallback(
              (i) => {
                const s = v(a);
                s &&
                  (m && m(!0),
                  window.GameHover &&
                    (U.current &&
                      y &&
                      (U.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(M ? M() : U.current, i, "global_hover", {
                      type: s,
                      id: (0, B.G$)(a).id,
                      v6: 1,
                    })));
              },
              [m, M, y, a],
            ),
            K = u.useCallback(
              (i) => {
                v(a) &&
                  (m && i.relatedTarget && m(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      M ? M() : U.current,
                      i,
                      "global_hover",
                    ));
              },
              [a, m, M],
            );
          return (0, e.jsx)("div", {
            ref: U,
            className: x,
            onMouseEnter: z,
            onMouseLeave: K,
            onFocus: z,
            onBlur: K,
            children: F,
          });
        }
        function O(n) {
          const {
              id: a,
              strExtraParams: x,
              fnOnClickOverride: M,
              strOverrideURL: m,
            } = n,
            y = (0, f.n9)(),
            F = (0, C.w)(),
            U = (0, I.NT)(
              m ||
                (a && "creatorid" in a
                  ? (0, c.It)(
                      `${R.TS.STORE_BASE_URL}curator/${((0, B.G$))(a).id}${x ? `?${x}` : ""}`,
                      y,
                      F,
                    )
                  : (0, c.It)(
                      `${R.TS.STORE_BASE_URL}${v(a)}/${((0, B.G$))(a).id}${x ? `?${x}` : ""}`,
                      y,
                      F,
                    )),
            );
          return (0, e.jsx)(b, {
            ...n,
            children: (0, e.jsx)(T.Ii, {
              className: n.className,
              href: M ? void 0 : U,
              target: R.TS.IN_CLIENT || M ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: M,
              children: n.children,
            }),
          });
        }
      },
      63639: (W, D, t) => {
        "use strict";
        t.d(D, { S: () => G });
        var e = t(7850),
          u = t(12997),
          T = t(90626),
          c = t(52438);
        const f = {
            name: "trailerPrefs",
            options: { path: "/", secure: !0, maxAge: 720 * 60 * 60 * 1e3 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          C = { flVolume: 0.8, bMuted: !0 };
        function I(v) {
          return v.flVolume === C.flVolume && v.bMuted === C.bMuted;
        }
        function B() {
          try {
            const v = (0, c.j_)(f);
            if (!v) return C;
            const b = JSON.parse(v);
            return {
              flVolume: typeof b.flVolume == "number" ? b.flVolume : C.flVolume,
              bMuted: typeof b.bMuted == "boolean" ? b.bMuted : C.bMuted,
            };
          } catch {
            return C;
          }
        }
        function R(v) {
          I(v) || Object.keys(v).length == 0
            ? (0, c.Y1)(f)
            : (0, c.eV)(f, JSON.stringify(v));
        }
        function G(v) {
          let { children: b } = v;
          const [O, n] = (0, T.useState)(() => B());
          return (
            (0, T.useEffect)(() => {
              R(O);
            }, [O]),
            (0, e.jsx)(u.v, {
              playerVolume: O.flVolume,
              setPlayerVolume: (a) => n((x) => ({ ...x, flVolume: a })),
              audioMuted: O.bMuted,
              setAudioMuted: (a) => n((x) => ({ ...x, bMuted: a })),
              children: b,
            })
          );
        }
      },
      64457: (W, D, t) => {
        "use strict";
        t.d(D, { PE: () => K, Yg: () => F, _t: () => U, gO: () => i });
        var e = t(7850),
          u = t(21721),
          T = t(25046),
          c = t(40358),
          f = t(68094),
          C = t(41032),
          I = t(90626),
          B = t(62571),
          R = t(40426),
          G = t(36118),
          v = t(36707),
          b = t(18210),
          O = t(72609),
          n = t(96538),
          a = t(85599),
          x = t(64271),
          M = t(48963),
          m = t.n(M),
          y = t(50573);
        function F(o) {
          const { id: r, bPopOutTrailerPlayback: h } = o,
            { data: l } = (0, c.Yo)(r),
            { data: E } = (0, c.j4)(r),
            { data: P } = (0, c.J$)(r),
            [j, p] = (0, I.useState)(!1),
            [g, d] = (0, I.useState)(!1),
            S = (0, C.dy)(),
            L = l?.highlights?.filter((V) => !S || V.all_ages),
            _ = L && L?.length > 0 ? L[0] : void 0,
            A = I.useCallback(() => {
              _ && (h ? d(!0) : p((V) => !V));
            }, [_, h]);
          if (!P)
            return (0, e.jsx)("div", {
              className: (0, v.A)(m().HilightGrid, m().MediaContainer),
              children: (0, e.jsx)(a.t, { size: "medium" }),
            });
          const H = _
            ? (0, e.jsx)(s, {
                trailer: _,
                bPlayVideo: j,
                fnTogglePlayTrailer: A,
              })
            : null;
          return !_ &&
            !(E && E.all_ages_screenshots && E.all_ages_screenshots.length > 0)
            ? null
            : (0, e.jsxs)("div", {
                className: (0, v.A)(m().HilightGrid, m().MediaContainer),
                children: [
                  (0, e.jsx)(U, {
                    elFeaturedInCenter: H,
                    storeItemScreenshots: E,
                    trailer: _,
                    id: r,
                    name: P.name || "",
                  }),
                  h
                    ? (0, e.jsx)(K, {
                        id: r,
                        bShowModal: g,
                        hideModal: () => d(!1),
                      })
                    : (0, e.jsx)(z, {
                        name: P.name || "",
                        trailer: _,
                        bPlayVideo: j,
                        fnTogglePlayTrailer: A,
                        bControls: !0,
                      }),
                ],
              });
        }
        function U(o) {
          const {
              elFeaturedInCenter: r,
              id: h,
              name: l,
              trailer: E,
              storeItemScreenshots: P,
              featureElementclassName: j,
              bUseTrailerAsFirstThumb: p,
              bNoScreenShotModals: g,
            } = o,
            [d, S] = I.useState(void 0),
            [L, _] = (0, R.XC)(),
            A = (0, C.dy)(),
            H = (0, I.useRef)(null),
            [V, Q] = (0, I.useState)(0);
          if (!h) return null;
          const w = r || (d !== void 0 && d !== -1) ? d : 0,
            J = new Array(),
            Y = new Array();
          p &&
            E &&
            (J.push(
              (0, e.jsx)(
                s,
                {
                  trailer: E,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => S(0),
                  onMouseLeave: () => {
                    const $ = H.current;
                    $ && Q($.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            Y.push(
              (0, e.jsx)(
                z,
                {
                  ref: H,
                  name: l,
                  trailer: E,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: V,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const ee = (
            A ? P?.all_ages_screenshots : P?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (ee?.forEach(($, N) => {
              if ((r || N > 0) && J.length < 3) {
                const Z = (0, u.bu)($, "thumb"),
                  ne = (0, u.bu)($, "600x338"),
                  re = J.length;
                J.push(
                  (0, e.jsx)(
                    "div",
                    {
                      className: (0, v.A)({
                        [m().ThumbnailCtn]: !0,
                        [m().ThumbnialClickable]: !g,
                      }),
                      onMouseEnter: () => S(re),
                      children: g
                        ? (0, e.jsx)("img", { src: Z, alt: l })
                        : (0, e.jsx)("button", {
                            type: "button",
                            className: m().ThumbnailButton,
                            onClick: () => {
                              const X = [...(ee || [])];
                              if (X.length > 0) {
                                for (let k = 0; k < N; ++k) {
                                  const q = X.shift();
                                  q && X.push(q);
                                }
                                L(X.map((k) => (0, u.bu)(k, "full")));
                              }
                            },
                            children: (0, e.jsx)("img", { src: Z, alt: l }),
                          }),
                    },
                    N + "_small_" + Z,
                  ),
                ),
                  Y.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: m().ScreenshotDisplayCtn,
                        children: (0, e.jsx)("img", { src: ne, alt: l }),
                      },
                      N + "_big_" + Z,
                    ),
                  );
              }
            }),
            !r && (!Y || Y.length == 0))
          )
            return null;
          const te = J.slice(0, 3),
            se = Array.from({ length: Math.max(0, 3 - te.length) });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              _,
              (0, e.jsx)("div", {
                className: j || m().MainMediaCtn,
                children:
                  r && (w === -1 || w === void 0)
                    ? (0, e.jsx)(e.Fragment, { children: r })
                    : (0, e.jsx)(e.Fragment, {
                        children: w !== void 0 && Y[w],
                      }),
              }),
              te.length > 0 &&
                (0, e.jsxs)("div", {
                  className: m().ScreenshotThumbnailRow,
                  onMouseLeave: () => S(-1),
                  children: [
                    te,
                    se.map(($, N) =>
                      (0, e.jsx)(
                        "div",
                        { className: m().ThumbnailCtn },
                        `app_${(0, f.ER)(h)}_${N}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function z(o) {
          const {
            ref: r,
            name: h,
            trailer: l,
            bControls: E,
            bPlayVideo: P,
            fnTogglePlayTrailer: j,
            startTime: p,
          } = o;
          if (
            ((0, I.useEffect)(() => {
              const d = r?.current;
              if (p != null && p > 0 && d) {
                const S = () => {
                  d.currentTime = p || 0;
                };
                return (
                  d.addEventListener("loadedmetadata", S),
                  () => {
                    d.removeEventListener("loadedmetadata", S);
                  }
                );
              }
            }, [r, p]),
            !l)
          )
            return null;
          let g = (0, v.A)(m().VideoLargeContainer, P && m().videoPlaying);
          return (0, e.jsxs)("div", {
            className: g,
            onClick: j,
            role: "presentation",
            children: [
              (0, e.jsx)(y.hj, {
                name: h,
                trailerCategory: l.trailer_category,
                trailerDisplay: y.g,
                mouseOver: !1,
              }),
              !!(P && l.microtrailer) &&
                (0, e.jsx)("video", {
                  className: m().VideoLarge,
                  ref: r,
                  controls: E,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: p != null && p > 0 ? void 0 : l.screenshot_full,
                  children: l.microtrailer?.map((d) =>
                    O.TS.IN_CLIENT && d.type == "video/mp4"
                      ? null
                      : (0, e.jsx)(
                          "source",
                          { src: (0, T.M4)(l, d.filename || ""), type: d.type },
                          d.filename,
                        ),
                  ),
                }),
              E &&
                (0, e.jsx)("button", {
                  type: "button",
                  className: m().CloseButton,
                  "aria-label": (0, b.we)("#Button_Close"),
                  children: (0, e.jsx)(G.sED, {}),
                }),
            ],
          });
        }
        function K(o) {
          const { id: r, bShowModal: h, trailerBaseID: l, hideModal: E } = o,
            { data: P } = (0, c.J$)(r),
            j = (0, T.kB)(r),
            p = (0, I.useMemo)(() => {
              if (!(!j || j.length == 0)) {
                if (l) {
                  const H = j.find((V) => V.trailer_base_id == l);
                  if (H) return H;
                }
                return j[0];
              }
            }, [j, l]),
            g = I.useId(),
            d = I.useId(),
            {
              rgDashTrailers: S,
              rgHlsTrailers: L,
              strCaptionManufest: _,
              strScreenshot: A,
            } = (0, I.useMemo)(() => {
              if (!p)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: H, rgHlsTrailers: V } = (0, T.hg)(p);
              return {
                rgDashTrailers: H,
                rgHlsTrailers: V,
                strCaptionManufest: (0, T.Wv)(p),
                strScreenshot: (0, T.hl)(p),
              };
            }, [p]);
          return !p || !p.adaptive_trailers || S.length == 0
            ? null
            : (0, e.jsx)(n.EN, {
                active: h,
                children: (0, e.jsxs)(n.eV, {
                  "aria-labelledby": (0, B.q)(g, d),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: E,
                  children: [
                    (0, e.jsx)("div", {
                      className: m().VideoPopupContainers,
                      children: (0, e.jsx)(x.P, {
                        dashManifests: S,
                        hlsManifest: L[0] || "",
                        screenshot: A,
                        altText: p.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: _,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      id: g,
                      style: { display: "none" },
                      children: P?.name || "",
                    }),
                    (0, e.jsx)("div", {
                      id: d,
                      style: { display: "none" },
                      children: p.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function i(o) {
          const { appid: r, trailerBaseID: h, bShowModal: l, hideModal: E } = o,
            P = (0, I.useMemo)(() => ({ appid: r }), [r]);
          return (0, e.jsx)(K, {
            id: P,
            trailerBaseID: h,
            bShowModal: l,
            hideModal: E,
          });
        }
        function s(o) {
          const {
            trailer: r,
            fnTogglePlayTrailer: h,
            bPlayVideo: l,
            onMouseEnter: E,
            onMouseLeave: P,
          } = o;
          return (0, e.jsxs)("div", {
            className: (0, v.A)({
              [m().VideoThumbnail]: !l,
              [m().videoPlaying]: l,
              [m().ThumbnailCtn]: !0,
            }),
            onClick: h,
            onMouseEnter: E,
            onMouseLeave: P,
            role: "presentation",
            children: [
              (0, e.jsx)("img", { src: (0, T.hl)(r), alt: r.trailer_name }),
              (0, e.jsx)("button", {
                type: "button",
                className: m().VideoPlayButton,
                "aria-label": (0, b.we)("#Playback_Play_Tooltip"),
                children: (0, e.jsx)(G.jGG, {}),
              }),
            ],
          });
        }
      },
      85491: (W, D, t) => {
        "use strict";
        t.d(D, { T: () => d });
        var e = t(7850),
          u = t(78192),
          T = t(96378),
          c = t(95414),
          f = t(46727),
          C = t(84607),
          I = t(44267),
          B = t(41188),
          R = t(80104),
          G = t(77459),
          v = t(29245),
          b = t(72838),
          O = t(39905),
          n = t(3348),
          a = t(40358),
          x = t(29522),
          M = t(72865),
          m = t(75844),
          y = t(90626),
          F = t(88743),
          U = t(83482),
          z = t(64457),
          K = t(76532),
          i = t.n(K),
          s = t(68094),
          o = t(90740),
          r = t(61431);
        function h(S) {
          const {
              id: L,
              bPurchaseOptionsExpanded: _,
              fnCollapseOptions: A,
              bPreferAssetWithoutOverride: H,
            } = S,
            { data: V } = (0, a.is)(L),
            Q = (0, y.useRef)(null);
          if (!V) return null;
          const w = V.purchase_options;
          return w
            ? (0, e.jsx)(o.A, {
                nodeRef: Q,
                in: _,
                mountOnEnter: !0,
                unmountOnExit: !0,
                timeout: 2e3,
                classNames: {
                  enterActive: i().Expanding,
                  enterDone: i().Expanded,
                  exit: i().Expanded,
                  exitActive: i().Collapsing,
                },
                children: (0, e.jsxs)("div", {
                  ref: Q,
                  className: i().BundleContentsCtnTransition,
                  children: [
                    (0, e.jsx)("div", {
                      className: i().BundleContentsCtn,
                      children: w
                        .filter((J) => !!J.packageid)
                        .map((J) =>
                          (0, e.jsx)(
                            "div",
                            {
                              className: i().BundleContentItem,
                              children: (0, e.jsx)(r.p, {
                                id: J.packageid || 0,
                                type: "sub",
                                bForceSmallCapsuleArt: !0,
                                bPreferAssetWithoutOverride: H,
                              }),
                            },
                            "purchaseitem_" + (0, s.ER)(L) + "_" + J.packageid,
                          ),
                        ),
                    }),
                    (0, e.jsx)("div", {
                      onClick: A,
                      className: i().BundleShowButton,
                      children: (0, e.jsx)("button", {
                        className: i().ShowContentsButton,
                        children: O.Z.Localize("#Button_Close"),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        var l = t(4705),
          E = t(6698),
          P = t(38081),
          j = t.n(P),
          p = t(96155),
          g = t(36707);
        const d = (0, m.PA)((S) => {
          const { id: L, type: _ } = S,
            A = (0, F.zl)(L, _),
            {
              bHidePrice: H,
              bShowDemoButton: V,
              bPreferDemoStorePage: Q,
              bShowPurchaseOptionsButton: w,
              bUseSubscriptionLayout: J,
              bPreferAssetWithoutOverride: Y,
            } = S,
            [ee, te] = y.useState(!1),
            se = () => te(!ee),
            { data: $ } = (0, a.U2)(A),
            { data: N } = (0, a.wl)(A),
            { data: Z } = (0, a.by)(A),
            { data: ne } = (0, a.xz)(A),
            re = (0, x._Z)(A),
            X = (0, M.n9)();
          if (!$ || !N)
            return (0, e.jsx)(T.h, {
              capsules_per_row: [1],
              is_expanded_display: !0,
            });
          const k = (0, U.L3)(X),
            q = $.item_type == u.c6.qI;
          return (0, e.jsx)("div", {
            className: (0, g.A)(
              i().StoreSaleWidgetContainer,
              i().LibraryAssetExpandedDisplay,
              "LibraryAssetExpandedDisplay",
            ),
            children: (0, e.jsxs)(E.oj, {
              appid: q ? $.appid : void 0,
              children: [
                (0, e.jsxs)("div", {
                  className: i().StoreSaleWidgetLibraryAssetExtendedTop,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, g.A)(i().StoreSaleWidgetLeft),
                      children: (0, e.jsx)(c.u, {
                        id: A,
                        bPreferDemoStorePage: Q,
                        children: (0, e.jsxs)("div", {
                          className: i().StoreSaleWidgetImage,
                          children: [
                            (0, e.jsx)(f.V, { appids: re }),
                            (0, e.jsx)(C.a, {
                              id: A,
                              imageType: "library",
                              bPreferAssetWithoutOverride: Y,
                            }),
                            (0, e.jsx)(p.J, { id: A }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: i().StoreSaleWidgetCrossCenterRight,
                      children: [
                        q &&
                          (0, e.jsx)(I.E, {
                            id: A,
                            classOverride: (0, g.A)(
                              j().WishlistButtonNotTop,
                              "WishlistButton",
                            ),
                            snr: k,
                          }),
                        (0, e.jsxs)("div", {
                          className: i().StoreSaleWidgetContents,
                          children: [
                            (0, e.jsxs)("div", {
                              className: i().StoreSaleWidgetCenter,
                              children: [
                                N.short_description &&
                                  N.short_description.length > 0 &&
                                  (0, e.jsx)("div", {
                                    className: (0, g.A)(
                                      i().StoreSaleWidgetShortDesc,
                                      "StoreSaleWidgetShortDesc",
                                    ),
                                    children: N.short_description,
                                  }),
                                (0, e.jsx)(B.n, {
                                  rgTagIDs: ne
                                    ? ne.slice(0, 10).map((ae) => ae.tagid || 0)
                                    : [],
                                  instanceNum: 0,
                                  bNoStoreLinks: !1,
                                }),
                                (0, e.jsxs)("div", {
                                  className: i().StoreMetaDataCtn,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: i().StoreSaleItemRelease,
                                      children: O.Z.LocalizeReact(
                                        "#Sale_ReleaseDate",
                                        (0, e.jsx)("span", {
                                          children: (0, n.CC)(Z),
                                        }),
                                      ),
                                    }),
                                    N.developers &&
                                      N.developers.length > 0 &&
                                      (0, e.jsxs)("div", {
                                        className: i().StoreSaleItemDev,
                                        children: [
                                          O.Z.Localize(
                                            "#CreatorHome_DevelopedBy",
                                          ),
                                          (0, e.jsx)("span", {
                                            children: N.developers[0].name,
                                          }),
                                        ],
                                      }),
                                    N.publishers &&
                                      N.publishers.length > 0 &&
                                      (0, e.jsxs)("div", {
                                        className: i().StoreSaleItemDev,
                                        children: [
                                          O.Z.Localize(
                                            "#CreatorHome_PublishedBy",
                                          ),
                                          (0, e.jsx)("span", {
                                            children: N.publishers[0].name,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: i().StoreSaleLibraryAssetWidgetRight,
                              children: (0, e.jsx)(z.Yg, {
                                id: A,
                                bPopOutTrailerPlayback: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: i().StoreSaleItemReview,
                          children: (0, e.jsx)(R.J, { id: A }),
                        }),
                        (0, e.jsx)("div", {
                          className: i().CapsuleBottomBar,
                          children:
                            J && q
                              ? (0, e.jsx)(G.E, {
                                  appid: $.appid,
                                  bIsMuted: !1,
                                })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(v.Q, { id: A }),
                                    (0, e.jsx)(l.w, {
                                      id: A,
                                      bShowDemoButton: V,
                                      bHidePrice: H,
                                      bShowPurchaseOptionsButton: w,
                                      fnOnPurchaseOptionsClick: se,
                                      bHideWishlistButton: $.is_coming_soon,
                                    }),
                                  ],
                                }),
                        }),
                        (0, e.jsxs)("div", {
                          className: i().StoreSaleWidgetBgTint,
                          children: [
                            (0, e.jsx)(b.G, {
                              id: A,
                              bPreferAssetWithoutOverride: Y,
                            }),
                            (0, e.jsx)(p.J, { id: A }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)(h, {
                  id: A,
                  bPurchaseOptionsExpanded: ee,
                  fnCollapseOptions: se,
                  bPreferAssetWithoutOverride: Y,
                }),
              ],
            }),
          });
        });
      },
      38340: (W, D, t) => {
        "use strict";
        t.d(D, { eg: () => u, lw: () => e, qR: () => T });
        const e = "{STEAM_CLAN_IMAGE}",
          u = "{STEAM_CLAN_LOC_IMAGE}",
          T = "{STEAM_APP_IMAGE}";
      },
      51746: (W, D, t) => {
        "use strict";
        t.d(D, {
          EG: () => f,
          II: () => b,
          Uz: () => R,
          aL: () => B,
          ab: () => T,
          zB: () => v,
        });
        var e = t(7742),
          u = t(72849);
        function T(n) {
          const a = n.toLowerCase();
          if (a.endsWith(".jpg") || a.endsWith(".jpeg")) return "image/jpeg";
          if (a.endsWith(".png")) return "image/png";
          if (a.endsWith(".gif")) return "image/gif";
          if (a.endsWith(".mp4")) return "video/mp4";
          if (a.endsWith(".webm")) return "video/webm";
          if (a.endsWith(".srt")) return "text/srt";
          if (a.endsWith(".vtt")) return "text/vtt";
          if (a.endsWith(".webp")) return "image/webp";
        }
        function c(n) {
          switch (n) {
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
              n,
            ),
            ".jpg"
          );
        }
        function f(n) {
          switch (n) {
            case u.bg.iS:
              return ".jpg";
            case u.bg.CK:
              return ".gif";
            case u.bg.dU:
              return ".png";
            case u.bg.pJ:
              return ".webm";
            case u.bg.nn:
              return ".mp4";
            case u.bg.pi:
              return ".srt";
            case u.bg.k7:
              return ".vtt";
            case u.bg.wD:
              return ".webp";
          }
        }
        function C(n) {
          const a = (0, e.x0)(),
            x = new Image();
          return (
            (x.onload = () => a.resolve(x)),
            (x.onerror = (M) => {
              console.error("LoadImage failed to load the image, details", M),
                a.resolve(void 0);
            }),
            (x.src = n),
            a.promise
          );
        }
        function I(n) {
          const a = (0, e.x0)(),
            x = document.createElement("video");
          return (
            (x.preload = "metadata"),
            x.addEventListener("loadedmetadata", () => a.resolve(x)),
            (x.onerror = (M) => {
              console.error("LoadVideo failed to load the video, details", M),
                a.resolve(void 0);
            }),
            (x.src = n),
            a.promise
          );
        }
        function B(n) {
          return n.startsWith("image/");
        }
        function R(n) {
          return n.startsWith("video/");
        }
        function G(n, a) {
          return a ? I(n) : C(n);
        }
        async function v(n, a) {
          if (a) return I(URL.createObjectURL(n));
          {
            const x = (0, e.x0)(),
              M = new FileReader();
            (M.onload = () => x.resolve(M.result ?? void 0)),
              (M.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  M.error,
                ),
                  x.resolve(void 0);
              }),
              M.readAsDataURL(n);
            const m = await x.promise;
            return m ? C(m.toString()) : void 0;
          }
        }
        function b(n) {
          return n
            ? n instanceof HTMLVideoElement
              ? { width: n.videoWidth, height: n.videoHeight }
              : { width: n.width, height: n.height }
            : { width: 0, height: 0 };
        }
        function O(n, a) {
          if (!a) return n;
          const x = new Set([
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
          for (const M of a)
            x.has(M.name.toLowerCase()) || (n[M.name] = M.value);
          return n;
        }
      },
      13465: (W, D, t) => {
        "use strict";
        t.d(D, { c: () => T });
        var e = t(7850),
          u = t(90626);
        function T(c) {
          const {
              rgSources: f,
              onIncrementalError: C,
              onError: I,
              strAltText: B,
              ref: R,
              ...G
            } = c,
            [v, b] = u.useState(0),
            O = u.useMemo(() => JSON.stringify(f), [f]),
            [n, a] = u.useState(O);
          n != O && (a(O), b(0));
          const x = u.useMemo(() => {
              let y = "";
              return (
                f && f.length > v && (y = f[v]),
                y ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    c,
                    v,
                  ),
                  (y =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                y
              );
            }, [f, v, c]),
            M = u.useCallback(
              (y) => {
                C?.(y, f[v], v);
                const F = v + 1;
                F >= f.length && I && I(y), F < f.length && b(F);
              },
              [v, I, C, f],
            ),
            m = u.useRef(null);
          return (
            u.useImperativeHandle(
              R,
              () => ({ imgRef: m, nSourceIndex: v, nSourceLength: f.length }),
              [m, v, f],
            ),
            u.useEffect(() => {
              const y = m.current;
              y?.complete && y.naturalWidth == 0 && (y.src = y.src);
            }, []),
            (0, e.jsx)("img", { ref: m, ...G, src: x, onError: M, alt: B }, n)
          );
        }
      },
      27068: (W, D, t) => {
        "use strict";
        t.r(D), t.d(D, { default: () => p });
        var e = t(7850),
          u = t(93256),
          T = t(99412),
          c = t(24660),
          f = t(72609),
          C = t(74107),
          I = t(61431),
          B = t(21659),
          R = t(3166),
          G = t(85491);
        function v(g) {
          return (0, R.Qn)()
            ? (0, e.jsx)(I.p, { ...g })
            : (0, B.c5)()
              ? (0, e.jsx)(I.p, { ...g, bShowReviewSummary: !0 })
              : (0, e.jsx)(G.T, { ...g });
        }
        var b = t(63639),
          O = t(21721),
          n = t(25046),
          a = t(29522),
          x = t(40358),
          M = t(72865),
          m = t(64271),
          y = t(90626),
          F = t(25792),
          U = t(51079),
          z = t(36707),
          K = t(37882),
          i = t.n(K);
        function s(g) {
          const { appid: d, strUrlOverride: S } = g,
            L = (0, a.$5)(d),
            { data: _ } = (0, x.J$)(L);
          return (
            (0, y.useEffect)(() => {
              if (_) {
                const A = `${f.TS.STORE_BASE_URL}${_.store_url_path}`.replace(
                  "/app/",
                  S ?? "/verified/",
                );
                A != window.location.href &&
                  window.history.replaceState({}, "", A);
              }
            }, [_, S]),
            !_ || !L
              ? null
              : (0, e.jsx)(U.Ay, {
                  method: "verifiedprogram",
                  children: (0, e.jsx)(F.tH, {
                    children: (0, e.jsx)(r, { id: L }),
                  }),
                })
          );
        }
        function o(g) {
          const { id: d } = g,
            { data: S } = (0, x.J$)(d),
            L = `${f.TS.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: i().Headline,
                children: C.F5.LocalizeReact(
                  "#VerifiedProgram_DeckTitle",
                  S?.name,
                  (0, e.jsxs)("span", {
                    className: i().Verified,
                    children: [
                      (0, e.jsx)("img", {
                        src: L,
                        alt: C.F5.Localize("#VerifiedProgram_DeckAlt"),
                      }),
                      C.F5.Localize("#VerifiedProgram_DeckTitle_Verified"),
                    ],
                  }),
                ),
              }),
              (0, e.jsx)("div", {
                className: i().Subtitle,
                children: C.F5.LocalizeReact(
                  "#VerifiedProgram_DeckSubTitle",
                  (0, e.jsx)(c.Ii, {
                    className: i().Link,
                    href: `${f.TS.STORE_BASE_URL}greatondeck`,
                    children: C.F5.Localize("#VerifiedProgram_GreatOnDeck"),
                  }),
                ),
              }),
            ],
          });
        }
        function r(g) {
          const { id: d } = g;
          return (0, e.jsxs)("div", {
            className: i().Ctn,
            children: [
              (0, e.jsx)(h, { id: d }),
              (0, e.jsxs)("div", {
                className: (0, z.A)("page_content"),
                children: [
                  (0, e.jsx)(o, { id: d }),
                  (0, e.jsx)(P, { id: d }),
                  (0, e.jsx)(l, { id: d }),
                  (0, e.jsx)(E, {}),
                ],
              }),
            ],
          });
        }
        function h(g) {
          const { id: d } = g,
            { data: S } = (0, x.lv)(d);
          if (!S) return null;
          const L =
            (0, O.b0)(S, "library_hero_2x") ?? (0, O.b0)(S, "library_hero");
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: i().BackgroundImageCtn,
                children: (0, e.jsx)("img", { src: L, alt: "" }),
              }),
              (0, e.jsx)("div", {
                className: i().BackgroundImageBlurCtn,
                children: (0, e.jsx)("img", { src: L, alt: "" }),
              }),
            ],
          });
        }
        function l(g) {
          const { id: d } = g;
          return (0, e.jsx)("div", {
            className: i().CapsuleWrapper,
            children: (0, e.jsx)(v, {
              id: "appid" in d ? d.appid : 0,
              type: "game",
              bShowDeckCompatibilityDialog: !1,
              bShowDemoButton: !0,
              bAutoFocus: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        function E(g) {
          const d = (0, M.aL)(
            `${f.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
            "banner",
          );
          return (0, e.jsx)(c.Ii, {
            href: d,
            className: (0, z.A)(i().HardwareBannerCtn),
            children: (0, e.jsx)(j, {}),
          });
        }
        function P(g) {
          const { id: d } = g,
            { data: S } = (0, x.J$)(d),
            L = (0, n.TH)(d);
          if (!L) return null;
          const _ = `${f.TS.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
            { rgDashTrailers: A, rgHlsTrailers: H } = (0, n.hg)(L);
          return (0, e.jsxs)("div", {
            className: i().DeviceFullWidthShadow,
            children: [
              (0, e.jsxs)("div", {
                className: (0, z.A)(i().DeviceWrapper),
                children: [
                  (0, e.jsx)(b.S, {
                    children: (0, e.jsx)("div", {
                      className: i().TrailerCtn,
                      children: (0, e.jsx)(m.P, {
                        dashManifests: A,
                        hlsManifest: H[0],
                        screenshot:
                          L.screenshot_full ?? L.screenshot_medium ?? "",
                        altText: S?.name ?? "",
                        muteWhenAutoplayBlocked: !0,
                      }),
                    }),
                  }),
                  (0, e.jsx)("img", {
                    src: _,
                    alt: C.F5.Localize("#VerifiedProgram_DeckDeviceAlt"),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: i().VideoDisclaimer,
                children: C.F5.Localize("#VerifiedProgram_DeckDisclaimer"),
              }),
            ],
          });
        }
        function j(g) {
          const d = (0, B.zI)(),
            S = (0, T.sfN)(f.TS.LANGUAGE);
          return (0, e.jsx)(u.u, {
            language: S,
            strAltText: C.F5.Localize("#VerifiedProgram_DeckShopBannerAlt"),
            strImageToken: d
              ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
              : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
          });
        }
        function p(g) {
          const {
            match: {
              params: { appid: d },
            },
          } = g;
          return (0, e.jsx)(s, { appid: Number.parseInt(d) });
        }
      },
      37882: (W) => {
        W.exports = {
          Ctn: "_3sPRGG8vL4sM6N-8FZo5fT",
          Link: "-YNVdnBAoV2HQCkuR8C1h",
          BackgroundImageCtn: "_31Bm2h6tK_J4K2yYHTtttM",
          BackgroundImageBlurCtn: "_1LzeWsFv8n7BMFyJ1c0bF",
          Headline: "qQs0819GK5nJMJhEfDfqO",
          Verified: "_1DN1jmbJKCQol4bLgow8xK",
          Subtitle: "_2Tf8QYNJrsywiXvKyV2Sm6",
          DeviceFullWidthShadow: "_33ittd22VgVN6fUvIAgkqu",
          VideoDisclaimer: "_2FW4jsZDS7ltbcDrOQStiW",
          DeviceWrapper: "_3DCMQY1PEeYS2E7r8NJXKQ",
          CapsuleWrapper: "_1JhQMb3X6rKYyPqZWOZG5w",
          HardwareBannerCtn: "_2L4eqs1UZ1QEjRC1S8qiJA",
          TrailerCtn: "_3LbKJsBRhn7hEnOSlKZd64",
        };
      },
      48963: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          strMediumWidth: "800px",
          strMaxMobileWidth: "600px",
          MediaContainer: "_17AnAUol6F9ESSlAVOkOR-",
          MediaContainerMM: "_1Tu2CrBa6Z3v2u5ysIVCgY",
          ScreenshotThumbnailRow: "_3wPvOiq2zq3UJa_V5yq1BU",
          HilightGrid: "afMTFv3mQcpX11KsRQBFe",
          MainMediaCtn: "_2aKn0S9zGN4Xj9bwODcL4q",
          VideoThumbnail: "_2GhyyIvyUNXt2pBSQ23xKP",
          ScreenshotDisplayCtn: "_2syrNfuweRm7tMaHtnsLIS",
          MainCapsuleWithHover: "_20P19pxcCCC_Er1aQHk0wG",
          MainCapsule: "_27-W3skVjYBfNp6t1cTtnj",
          AppDetails: "_3YbIHh6FwfB9zQVNU18OSy",
          GameName: "_2aMRa54ScYF_qLXc6-dsRN",
          ShortDesc: "_10C6v9rot6kwBCcXpZVENg",
          ThumbnialClickable: "_1RTH8HUO6crMdjXdJjz_-U",
          ThumbnailCtn: "_2s3nR6hnRPmnLN1kr5khr-",
          ThumbnailButton: "_1WQUuWkffHs6P77xq6DMhs",
          videoPlaying: "_1_yxluHJLi2TiNbG5b2KYk",
          VideoPlayButton: "KqB15I24fyQtJzf6XANUI",
          VideoLargeContainer: "_3n_2JdJT5wZ8s9KG2vtLYz",
          CloseButton: "_2dgOJd4j8-hJA92PrLWqZT",
          VideoPopupContainers: "_1_L84gO810flUzqiuUkG7H",
          VideoLarge: "_3AL75Io6tlvBgexvKuaPG0",
          BackgroundAnimation: "_2YqbTh9tmcEZ5Jnz39bkD9",
          "ItemFocusAnim-darkerGrey-nocolor": "_2Z_byUU724LC7VmBpwzXvB",
          "ItemFocusAnim-darkerGrey": "_79YB3jhA36yeyMiLstJi",
          "ItemFocusAnim-darkGreySettings": "_1lSn5OE1oc5-oQjPkjBIYj",
          "ItemFocusAnim-darkGrey": "CFIUukdHjcI69ga9Z8nTA",
          "ItemFocusAnim-grey": "_3rAbB1f0HQs0x4Hqa5CdEA",
          "ItemFocusAnim-translucent-white-10": "_9gKqKsdvXOoawIPGtFkRF",
          "ItemFocusAnim-translucent-white-20": "_3zG2IKWY48X67SEt1vSIhf",
          "ItemFocusAnimBorder-darkGrey": "_1etJfunIGxvr5ni3LVgo74",
          "ItemFocusAnim-green": "_2y66jXVD5R6zd5LqMTWYVl",
          focusAnimation: "rfbikUhNdMJp8YaaOMaCW",
          hoverAnimation: "_2kGcR5txA30fIqTtD8sBNS",
        };
      },
    },
  ]);
})();
