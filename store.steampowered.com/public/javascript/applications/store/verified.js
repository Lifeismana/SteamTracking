/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [86991],
    {
      93256: (U, I, e) => {
        "use strict";
        e.d(I, { u: () => d });
        var t = e(7850),
          l = e(29630),
          v = e(13465);
        function d(i) {
          const { strImageToken: g, language: A, strAltText: j } = i,
            D = (0, l.z5)(g, A);
          return D
            ? typeof D == "string"
              ? (0, t.jsx)("img", { src: D, alt: j })
              : (0, t.jsx)(v.c, { rgSources: D, strAltText: j })
            : null;
        }
      },
      29630: (U, I, e) => {
        "use strict";
        e.d(I, { zU: () => a, z5: () => G });
        var t = e(38340),
          l = e(9046),
          v = e(99412),
          d = e(72604),
          i = e(7742),
          g = e(72849),
          A = e(76559),
          j = e(71742),
          D = e(34592),
          W = e(51746),
          h = e(72609),
          p = e(7850),
          T = e(90626);
        function n(s, o) {
          return `${s}/${o}`;
        }
        const r = {},
          c = T.createContext(r);
        function f(s) {
          const { resolutions: o, children: u } = s;
          return jsx(c.Provider, { value: o, children: u });
        }
        function P() {
          return T.useContext(c);
        }
        const L = new RegExp(
          `${t.eg.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
          "gi",
        );
        function b(s) {
          const o = [],
            u = new Set();
          for (const x of s.matchAll(L)) {
            const E = Number.parseInt(x[1]),
              y = x[2],
              B = n(E, y);
            E > 0 &&
              !u.has(B) &&
              (u.add(B), o.push({ clanAccountID: E, hashAndExt: y }));
          }
          return o;
        }
        function G(s, o, u = 0) {
          const x = P();
          return K(s, o, u, x);
        }
        async function V(s, o, u = 0) {
          return K(s, o, u);
        }
        function K(s, o, u = 0, x) {
          if (!s || s.length == 0) return null;
          if (s?.startsWith(t.lw)) return a.ReplacementTokenToClanImageURL(s);
          if (s?.startsWith(t.eg)) {
            const E = a.GetBaseURL(),
              y = s.substring(t.eg.length + 1),
              B = parseInt(y.substring(0, y.indexOf("/"))),
              N = y.substring(y.indexOf("/") + 1),
              R = a.GenerateURLFromHashAndExt(B, N);
            if (x?.[n(B, N)] === !1) return R;
            const m = a
              .GetLocalizedClanImageFileNames(N, o)
              .map((C) => E + B + "/" + C + "?t=" + u);
            return m.push(R), m;
          }
          return s;
        }
        const a = {
          GetBaseURL() {
            return `${h.TS.CLAN_CDN_ASSET_URL}images/`;
          },
          GetBaseURLV2() {
            return `${h.TS.CLAN_CDN_ASSET_URL}locimages/`;
          },
          ReplacementTokenToClanImageURL(s) {
            return (
              (s = s.replace(t.lw, this.GetBaseURL())),
              s.replace("http://", "https://")
            );
          },
          ExtractHashFromBBCodeURL(s) {
            const u =
              /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
                s,
              );
            return u?.groups
              ? [u.groups.filename, parseInt(u.groups.clanid)]
              : [void 0, void 0];
          },
          GetExtensionString(s) {
            return (
              (s.file_type != null ? (0, W.EG)(s.file_type) : null) ?? ".jpg"
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
            const u = this.GetHashFromHashAndExt(s),
              x = this.GetExtStringFromHashAndExt(s),
              E = [u + "/" + (0, v.LgB)(o) + x];
            return (
              o == v.Pn1 && E.push(u + "/" + (0, v.x6o)((0, v.LgB)(o)) + x), E
            );
          },
          GenerateURLFromHashAndExt(s, o, u = l.wI.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              s,
              o,
              u,
              v.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(s, o, u = l.wI.full, x, E) {
            s instanceof A.b && (s = s.GetAccountID());
            let y = this.GetBaseURL();
            const B = x != null && x != v.xPp;
            if (u == l.wI.full && !B) return y + s + "/" + o;
            {
              let N = o.substring(o.lastIndexOf(".")),
                R = o.substring(0, o.length - N.length);
              return !B || x == v.Bhc || E != "localized_image_group"
                ? y + s + "/" + R + u + N
                : y + s + "/" + R + "/" + (0, v.x6o)((0, v.LgB)(x)) + N;
            }
          },
          GetHashAndExtFromURL(s) {
            let o = this.GetBaseURL();
            return !s?.startsWith(o) ||
              ((s = s.substring(o.length)), s.indexOf("/") == -1)
              ? null
              : ((s = s.substring(s.indexOf("/") + 1)), s);
          },
          GenerateEditableURLFromHashAndExt(s, o, u) {
            let x =
              h.TS.COMMUNITY_BASE_URL +
              "gid/" +
              s.ConvertTo64BitString() +
              "/showclanimage/?image_hash_and_ext=" +
              o;
            return u && (x += "&lang=" + u), x;
          },
          GetMimeType(s) {
            return (0, W.ab)(s);
          },
          async AsyncGetImageResolution(s, o, u, x, E) {
            const y = o + this.GetExtensionString({ file_type: u }),
              B = this.GenerateEditableURLFromHashAndExt(s, y);
            return await this.AsyncGetImageResolutionInternal(B, x, E);
          },
          async AsyncGetImageResolutionInternal(s, o, u) {
            const x = (0, i.x0)();
            let E = new Image();
            (E.crossOrigin = "anonymous"),
              (E.onerror = (R) => {
                const m = { success: d.zi };
                u ||
                  ((m.err_msg =
                    "Load fail on url " +
                    s +
                    " with error: " +
                    (0, D.H)(R).strErrorMsg),
                  console.error(m.err_msg)),
                  (m.success = d.zi),
                  x.resolve(m);
              }),
              (E.onload = () => {
                const R = { success: d.zi };
                if (
                  ((R.width = E.width),
                  (R.height = E.height),
                  !(E.width > 0) || !(E.height > 0))
                ) {
                  (0, j.wT)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + s,
                  ),
                    (R.err_msg = "No resolution reported for url " + s),
                    x.resolve(R);
                  return;
                }
                (R.success = d.R), x.resolve(R);
              }),
              (E.src = s),
              o.token.promise.catch(() => {
                (E.onload = () => {}),
                  (E.onerror = () => {}),
                  x.resolve({ success: d.e9 });
              });
            let y;
            const B = new Promise((R, m) => {
              y = setTimeout(() => m(), 1e4);
            });
            let N;
            try {
              N = await Promise.race([B, x.promise]);
            } catch {
              N = { success: d._3, err_msg: "We timed out processing images" };
            } finally {
              clearTimeout(y);
            }
            return N;
          },
          BIsClanImageVideo(s) {
            return s.file_type == g.bg.nn || s.file_type == g.bg.pJ;
          },
        };
      },
      9046: (U, I, e) => {
        "use strict";
        e.d(I, { pb: () => v, wI: () => l });
        class t {
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
        var l = ((d) => (
          (d.full = ""),
          (d.background_main = "_960x311"),
          (d.background_mini = "_480x156"),
          (d.capsule_main = "_400x225"),
          (d.spotlight_main = "_1054x230"),
          d
        ))(l || {});
        const v = [
          "localized_image_group",
          "link_capsule",
          "product_mobile_banner_override",
          "product_banner_override",
          "sale_section_title",
          "schedule_track_art",
          "localized_background_art",
        ];
      },
      7742: (U, I, e) => {
        "use strict";
        e.d(I, { x0: () => l });
        async function t(d) {
          try {
            return await d;
          } catch (i) {
            console.error(i);
            return;
          }
        }
        function l() {
          let d, i;
          return {
            promise: new Promise((A, j) => {
              (d = A), (i = j);
            }),
            resolve: d,
            reject: i,
          };
        }
        function v(d) {
          return new Promise((i) => setTimeout(i, d));
        }
      },
      95414: (U, I, e) => {
        "use strict";
        e.d(I, { j: () => p, u: () => T });
        var t = e(7850),
          l = e(90626),
          v = e(24660),
          d = e(83482),
          i = e(72865),
          g = e(77200),
          A = e(53113),
          j = e(68094),
          D = e(72609),
          W = e(3166);
        function h(n) {
          if (n) {
            if ("appid" in n) return "app";
            if ("bundleid" in n) return "bundle";
            if ("packageid" in n) return "sub";
          }
        }
        function p(n) {
          const {
              id: r,
              hoverClassName: c,
              fnGetIDOverride: f,
              fnHoverState: P,
              disableScreenshots: L,
              children: b,
            } = n,
            G = l.useRef(null),
            V = l.useCallback(
              (a) => {
                const s = h(r);
                s &&
                  (P && P(!0),
                  window.GameHover &&
                    (G.current &&
                      L &&
                      (G.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(f ? f() : G.current, a, "global_hover", {
                      type: s,
                      id: (0, j.G$)(r).id,
                      v6: 1,
                    })));
              },
              [P, f, L, r],
            ),
            K = l.useCallback(
              (a) => {
                h(r) &&
                  (P && a.relatedTarget && P(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      f ? f() : G.current,
                      a,
                      "global_hover",
                    ));
              },
              [r, P, f],
            );
          return (0, t.jsx)("div", {
            ref: G,
            className: c,
            onMouseEnter: V,
            onMouseLeave: K,
            onFocus: V,
            onBlur: K,
            children: b,
          });
        }
        function T(n) {
          const {
              id: r,
              strExtraParams: c,
              fnOnClickOverride: f,
              strOverrideURL: P,
            } = n,
            L = (0, i.n9)(),
            b = (0, g.w)(),
            G = (0, A.NT)(
              P ||
                (r && "creatorid" in r
                  ? (0, d.It)(
                      `${D.TS.STORE_BASE_URL}curator/${((0, j.G$))(r).id}${c ? `?${c}` : ""}`,
                      L,
                      b,
                    )
                  : (0, d.It)(
                      `${D.TS.STORE_BASE_URL}${h(r)}/${((0, j.G$))(r).id}${c ? `?${c}` : ""}`,
                      L,
                      b,
                    )),
            );
          return (0, t.jsx)(p, {
            ...n,
            children: (0, t.jsx)(v.Ii, {
              className: n.className,
              href: f ? void 0 : G,
              target: D.TS.IN_CLIENT || f ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: f,
              children: n.children,
            }),
          });
        }
      },
      63639: (U, I, e) => {
        "use strict";
        e.d(I, { S: () => W });
        var t = e(7850),
          l = e(12997),
          v = e(90626),
          d = e(52438);
        const i = {
            name: "trailerPrefs",
            options: { path: "/", secure: !0, maxAge: 720 * 60 * 60 * 1e3 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          g = { flVolume: 0.8, bMuted: !0 };
        function A(h) {
          return h.flVolume === g.flVolume && h.bMuted === g.bMuted;
        }
        function j() {
          try {
            const h = (0, d.j_)(i);
            if (!h) return g;
            const p = JSON.parse(h);
            return {
              flVolume: typeof p.flVolume == "number" ? p.flVolume : g.flVolume,
              bMuted: typeof p.bMuted == "boolean" ? p.bMuted : g.bMuted,
            };
          } catch {
            return g;
          }
        }
        function D(h) {
          A(h) || Object.keys(h).length == 0
            ? (0, d.Y1)(i)
            : (0, d.eV)(i, JSON.stringify(h));
        }
        function W(h) {
          let { children: p } = h;
          const [T, n] = (0, v.useState)(() => j());
          return (
            (0, v.useEffect)(() => {
              D(T);
            }, [T]),
            (0, t.jsx)(l.v, {
              playerVolume: T.flVolume,
              setPlayerVolume: (r) => n((c) => ({ ...c, flVolume: r })),
              audioMuted: T.bMuted,
              setAudioMuted: (r) => n((c) => ({ ...c, bMuted: r })),
              children: p,
            })
          );
        }
      },
      73570: (U, I, e) => {
        "use strict";
        e.d(I, { T: () => C });
        var t = e(7850),
          l = e(56062),
          v = e(96378),
          d = e(95414),
          i = e(46727),
          g = e(84607),
          A = e(44267),
          j = e(41188),
          D = e(80104),
          W = e(77459),
          h = e(29245),
          p = e(72838),
          T = e(39905),
          n = e(3348),
          r = e(40358),
          c = e(29522),
          f = e(72865),
          P = e(75844),
          L = e(90626),
          b = e(88743),
          G = e(83482),
          V = e(10452),
          K = e(18654),
          a = e.n(K),
          s = e(68094),
          o = e(90740),
          u = e(40232);
        function x(M) {
          const {
              id: O,
              bPurchaseOptionsExpanded: H,
              fnCollapseOptions: S,
              bPreferAssetWithoutOverride: $,
            } = M,
            { data: J } = (0, r.is)(O),
            Q = (0, L.useRef)(null);
          if (!J) return null;
          const Z = J.purchase_options;
          return Z
            ? (0, t.jsx)(o.A, {
                nodeRef: Q,
                in: H,
                mountOnEnter: !0,
                unmountOnExit: !0,
                timeout: 2e3,
                classNames: {
                  enterActive: a().Expanding,
                  enterDone: a().Expanded,
                  exit: a().Expanded,
                  exitActive: a().Collapsing,
                },
                children: (0, t.jsxs)("div", {
                  ref: Q,
                  className: a().BundleContentsCtnTransition,
                  children: [
                    (0, t.jsx)("div", {
                      className: a().BundleContentsCtn,
                      children: Z.filter((z) => !!z.packageid).map((z) =>
                        (0, t.jsx)(
                          "div",
                          {
                            className: a().BundleContentItem,
                            children: (0, t.jsx)(u.p, {
                              id: z.packageid || 0,
                              type: "sub",
                              bForceSmallCapsuleArt: !0,
                              bPreferAssetWithoutOverride: $,
                            }),
                          },
                          "purchaseitem_" + (0, s.ER)(O) + "_" + z.packageid,
                        ),
                      ),
                    }),
                    (0, t.jsx)("div", {
                      onClick: S,
                      className: a().BundleShowButton,
                      children: (0, t.jsx)("button", {
                        className: a().ShowContentsButton,
                        children: T.Z.Localize("#Button_Close"),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        var E = e(13004),
          y = e(81029),
          B = e(73371),
          N = e.n(B),
          R = e(96155),
          m = e(36707);
        const C = (0, P.PA)((M) => {
          const { id: O, type: H } = M,
            S = (0, b.zl)(O, H),
            {
              bHidePrice: $,
              bShowDemoButton: J,
              bPreferDemoStorePage: Q,
              bShowPurchaseOptionsButton: Z,
              bUseSubscriptionLayout: z,
              bPreferAssetWithoutOverride: Y,
            } = M,
            [k, ee] = L.useState(!1),
            _ = () => ee(!k),
            { data: w } = (0, r.U2)(S),
            { data: F } = (0, r.wl)(S),
            { data: te } = (0, r.by)(S),
            { data: q } = (0, r.xz)(S),
            se = (0, c._Z)(S),
            ne = (0, f.n9)();
          if (!w || !F)
            return (0, t.jsx)(v.h, {
              capsules_per_row: [1],
              is_expanded_display: !0,
            });
          const re = (0, G.L3)(ne),
            X = w.item_type == l.c6.qI;
          return (0, t.jsx)("div", {
            className: (0, m.A)(
              a().StoreSaleWidgetContainer,
              a().LibraryAssetExpandedDisplay,
              "LibraryAssetExpandedDisplay",
            ),
            children: (0, t.jsxs)(y.oj, {
              appid: X ? w.appid : void 0,
              children: [
                (0, t.jsxs)("div", {
                  className: a().StoreSaleWidgetLibraryAssetExtendedTop,
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, m.A)(a().StoreSaleWidgetLeft),
                      children: (0, t.jsx)(d.u, {
                        id: S,
                        bPreferDemoStorePage: Q,
                        children: (0, t.jsxs)("div", {
                          className: a().StoreSaleWidgetImage,
                          children: [
                            (0, t.jsx)(i.V, { appids: se }),
                            (0, t.jsx)(g.a, {
                              id: S,
                              imageType: "library",
                              bPreferAssetWithoutOverride: Y,
                            }),
                            (0, t.jsx)(R.J, { id: S }),
                          ],
                        }),
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: a().StoreSaleWidgetCrossCenterRight,
                      children: [
                        X &&
                          (0, t.jsx)(A.E, {
                            id: S,
                            classOverride: (0, m.A)(
                              N().WishlistButtonNotTop,
                              "WishlistButton",
                            ),
                            snr: re,
                          }),
                        (0, t.jsxs)("div", {
                          className: a().StoreSaleWidgetContents,
                          children: [
                            (0, t.jsxs)("div", {
                              className: a().StoreSaleWidgetCenter,
                              children: [
                                F.short_description &&
                                  F.short_description.length > 0 &&
                                  (0, t.jsx)("div", {
                                    className: (0, m.A)(
                                      a().StoreSaleWidgetShortDesc,
                                      "StoreSaleWidgetShortDesc",
                                    ),
                                    children: F.short_description,
                                  }),
                                (0, t.jsx)(j.n, {
                                  rgTagIDs: q
                                    ? q.slice(0, 10).map((ae) => ae.tagid || 0)
                                    : [],
                                  instanceNum: 0,
                                  bNoStoreLinks: !1,
                                }),
                                (0, t.jsxs)("div", {
                                  className: a().StoreMetaDataCtn,
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: a().StoreSaleItemRelease,
                                      children: T.Z.LocalizeReact(
                                        "#Sale_ReleaseDate",
                                        (0, t.jsx)("span", {
                                          children: (0, n.CC)(te),
                                        }),
                                      ),
                                    }),
                                    F.developers &&
                                      F.developers.length > 0 &&
                                      (0, t.jsxs)("div", {
                                        className: a().StoreSaleItemDev,
                                        children: [
                                          T.Z.Localize(
                                            "#CreatorHome_DevelopedBy",
                                          ),
                                          (0, t.jsx)("span", {
                                            children: F.developers[0].name,
                                          }),
                                        ],
                                      }),
                                    F.publishers &&
                                      F.publishers.length > 0 &&
                                      (0, t.jsxs)("div", {
                                        className: a().StoreSaleItemDev,
                                        children: [
                                          T.Z.Localize(
                                            "#CreatorHome_PublishedBy",
                                          ),
                                          (0, t.jsx)("span", {
                                            children: F.publishers[0].name,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: a().StoreSaleLibraryAssetWidgetRight,
                              children: (0, t.jsx)(V.Yg, {
                                id: S,
                                bPopOutTrailerPlayback: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: a().StoreSaleItemReview,
                          children: (0, t.jsx)(D.J, { id: S }),
                        }),
                        (0, t.jsx)("div", {
                          className: a().CapsuleBottomBar,
                          children:
                            z && X
                              ? (0, t.jsx)(W.E, {
                                  appid: w.appid,
                                  bIsMuted: !1,
                                })
                              : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)(h.Q, { id: S }),
                                    (0, t.jsx)(E.w, {
                                      id: S,
                                      bShowDemoButton: J,
                                      bHidePrice: $,
                                      bShowPurchaseOptionsButton: Z,
                                      fnOnPurchaseOptionsClick: _,
                                      bHideWishlistButton: w.is_coming_soon,
                                    }),
                                  ],
                                }),
                        }),
                        (0, t.jsxs)("div", {
                          className: a().StoreSaleWidgetBgTint,
                          children: [
                            (0, t.jsx)(p.G, {
                              id: S,
                              bPreferAssetWithoutOverride: Y,
                            }),
                            (0, t.jsx)(R.J, { id: S }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(x, {
                  id: S,
                  bPurchaseOptionsExpanded: k,
                  fnCollapseOptions: _,
                  bPreferAssetWithoutOverride: Y,
                }),
              ],
            }),
          });
        });
      },
      38340: (U, I, e) => {
        "use strict";
        e.d(I, { eg: () => l, lw: () => t, qR: () => v });
        const t = "{STEAM_CLAN_IMAGE}",
          l = "{STEAM_CLAN_LOC_IMAGE}",
          v = "{STEAM_APP_IMAGE}";
      },
      51746: (U, I, e) => {
        "use strict";
        e.d(I, {
          EG: () => i,
          II: () => p,
          Uz: () => D,
          aL: () => j,
          ab: () => v,
          zB: () => h,
        });
        var t = e(7742),
          l = e(72849);
        function v(n) {
          const r = n.toLowerCase();
          if (r.endsWith(".jpg") || r.endsWith(".jpeg")) return "image/jpeg";
          if (r.endsWith(".png")) return "image/png";
          if (r.endsWith(".gif")) return "image/gif";
          if (r.endsWith(".mp4")) return "video/mp4";
          if (r.endsWith(".webm")) return "video/webm";
          if (r.endsWith(".srt")) return "text/srt";
          if (r.endsWith(".vtt")) return "text/vtt";
          if (r.endsWith(".webp")) return "image/webp";
        }
        function d(n) {
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
        function i(n) {
          switch (n) {
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
        function g(n) {
          const r = (0, t.x0)(),
            c = new Image();
          return (
            (c.onload = () => r.resolve(c)),
            (c.onerror = (f) => {
              console.error("LoadImage failed to load the image, details", f),
                r.resolve(void 0);
            }),
            (c.src = n),
            r.promise
          );
        }
        function A(n) {
          const r = (0, t.x0)(),
            c = document.createElement("video");
          return (
            (c.preload = "metadata"),
            c.addEventListener("loadedmetadata", () => r.resolve(c)),
            (c.onerror = (f) => {
              console.error("LoadVideo failed to load the video, details", f),
                r.resolve(void 0);
            }),
            (c.src = n),
            r.promise
          );
        }
        function j(n) {
          return n.startsWith("image/");
        }
        function D(n) {
          return n.startsWith("video/");
        }
        function W(n, r) {
          return r ? A(n) : g(n);
        }
        async function h(n, r) {
          if (r) return A(URL.createObjectURL(n));
          {
            const c = (0, t.x0)(),
              f = new FileReader();
            (f.onload = () => c.resolve(f.result ?? void 0)),
              (f.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  f.error,
                ),
                  c.resolve(void 0);
              }),
              f.readAsDataURL(n);
            const P = await c.promise;
            return P ? g(P.toString()) : void 0;
          }
        }
        function p(n) {
          return n
            ? n instanceof HTMLVideoElement
              ? { width: n.videoWidth, height: n.videoHeight }
              : { width: n.width, height: n.height }
            : { width: 0, height: 0 };
        }
        function T(n, r) {
          if (!r) return n;
          const c = new Set([
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
          for (const f of r)
            c.has(f.name.toLowerCase()) || (n[f.name] = f.value);
          return n;
        }
      },
      13465: (U, I, e) => {
        "use strict";
        e.d(I, { c: () => v });
        var t = e(7850),
          l = e(90626);
        function v(d) {
          const {
              rgSources: i,
              onIncrementalError: g,
              onError: A,
              strAltText: j,
              ref: D,
              ...W
            } = d,
            h = l.useRef(null),
            [p, T] = l.useState(0),
            [n, r] = l.useState(0);
          l.useImperativeHandle(
            D,
            () => ({ imgRef: h, nSourceIndex: p, nSourceLength: i.length }),
            [h, p, i],
          );
          const c = l.useMemo(() => JSON.stringify(i), [i]);
          l.useEffect(() => {
            T(0), r((L) => L + 1);
          }, [c]);
          const f = l.useMemo(() => {
              let L = "";
              return (
                i && i.length > p && (L = i[p]),
                L ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    d,
                    p,
                  ),
                  (L =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                L
              );
            }, [i, p, d]),
            P = l.useCallback(
              (L) => {
                g?.(L, i[p], p);
                const b = p + 1;
                b >= i.length && A && A(L), b < i.length && T(b);
              },
              [p, A, g, i],
            );
          return (0, t.jsx)(
            "img",
            { ref: h, ...W, src: f, onError: P, alt: j },
            n,
          );
        }
      },
      27068: (U, I, e) => {
        "use strict";
        e.r(I), e.d(I, { default: () => R });
        var t = e(7850),
          l = e(93256),
          v = e(99412),
          d = e(24660),
          i = e(72609),
          g = e(74107),
          A = e(40232),
          j = e(21659),
          D = e(3166),
          W = e(73570);
        function h(m) {
          return (0, D.Qn)()
            ? (0, t.jsx)(A.p, { ...m })
            : (0, j.c5)()
              ? (0, t.jsx)(A.p, { ...m, bShowReviewSummary: !0 })
              : (0, t.jsx)(W.T, { ...m });
        }
        var p = e(63639),
          T = e(21721),
          n = e(25046),
          r = e(29522),
          c = e(40358),
          f = e(72865),
          P = e(64271),
          L = e(90626),
          b = e(25792),
          G = e(51079),
          V = e(36707),
          K = e(37882),
          a = e.n(K);
        function s(m) {
          const { appid: C, strUrlOverride: M } = m,
            O = (0, r.$5)(C),
            { data: H } = (0, c.J$)(O);
          return (
            (0, L.useEffect)(() => {
              if (H) {
                const S = `${i.TS.STORE_BASE_URL}${H.store_url_path}`.replace(
                  "/app/",
                  M ?? "/verified/",
                );
                S != window.location.href &&
                  window.history.replaceState({}, "", S);
              }
            }, [H, M]),
            !H || !O
              ? null
              : (0, t.jsx)(G.Ay, {
                  method: "verifiedprogram",
                  children: (0, t.jsx)(b.tH, {
                    children: (0, t.jsx)(u, { id: O }),
                  }),
                })
          );
        }
        function o(m) {
          const { id: C } = m,
            { data: M } = (0, c.J$)(C),
            O = `${i.TS.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: a().Headline,
                children: g.F5.LocalizeReact(
                  "#VerifiedProgram_DeckTitle",
                  M?.name,
                  (0, t.jsxs)("span", {
                    className: a().Verified,
                    children: [
                      (0, t.jsx)("img", {
                        src: O,
                        alt: g.F5.Localize("#VerifiedProgram_DeckAlt"),
                      }),
                      g.F5.Localize("#VerifiedProgram_DeckTitle_Verified"),
                    ],
                  }),
                ),
              }),
              (0, t.jsx)("div", {
                className: a().Subtitle,
                children: g.F5.LocalizeReact(
                  "#VerifiedProgram_DeckSubTitle",
                  (0, t.jsx)(d.Ii, {
                    className: a().Link,
                    href: `${i.TS.STORE_BASE_URL}greatondeck`,
                    children: g.F5.Localize("#VerifiedProgram_GreatOnDeck"),
                  }),
                ),
              }),
            ],
          });
        }
        function u(m) {
          const { id: C } = m;
          return (0, t.jsxs)("div", {
            className: a().Ctn,
            children: [
              (0, t.jsx)(x, { id: C }),
              (0, t.jsxs)("div", {
                className: (0, V.A)("page_content"),
                children: [
                  (0, t.jsx)(o, { id: C }),
                  (0, t.jsx)(B, { id: C }),
                  (0, t.jsx)(E, { id: C }),
                  (0, t.jsx)(y, {}),
                ],
              }),
            ],
          });
        }
        function x(m) {
          const { id: C } = m,
            { data: M } = (0, c.lv)(C);
          if (!M) return null;
          const O =
            (0, T.b0)(M, "library_hero_2x") ?? (0, T.b0)(M, "library_hero");
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: a().BackgroundImageCtn,
                children: (0, t.jsx)("img", { src: O, alt: "" }),
              }),
              (0, t.jsx)("div", {
                className: a().BackgroundImageBlurCtn,
                children: (0, t.jsx)("img", { src: O, alt: "" }),
              }),
            ],
          });
        }
        function E(m) {
          const { id: C } = m;
          return (0, t.jsx)("div", {
            className: a().CapsuleWrapper,
            children: (0, t.jsx)(h, {
              id: "appid" in C ? C.appid : 0,
              type: "game",
              bShowDeckCompatibilityDialog: !1,
              bShowDemoButton: !0,
              bAutoFocus: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        function y(m) {
          const C = (0, f.aL)(
            `${i.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
            "banner",
          );
          return (0, t.jsx)(d.Ii, {
            href: C,
            className: (0, V.A)(a().HardwareBannerCtn),
            children: (0, t.jsx)(N, {}),
          });
        }
        function B(m) {
          const { id: C } = m,
            { data: M } = (0, c.J$)(C),
            O = (0, n.TH)(C);
          if (!O) return null;
          const H = `${i.TS.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
            { rgDashTrailers: S, rgHlsTrailers: $ } = (0, n.hg)(O);
          return (0, t.jsxs)("div", {
            className: a().DeviceFullWidthShadow,
            children: [
              (0, t.jsxs)("div", {
                className: (0, V.A)(a().DeviceWrapper),
                children: [
                  (0, t.jsx)(p.S, {
                    children: (0, t.jsx)("div", {
                      className: a().TrailerCtn,
                      children: (0, t.jsx)(P.P, {
                        dashManifests: S,
                        hlsManifest: $[0],
                        screenshot:
                          O.screenshot_full ?? O.screenshot_medium ?? "",
                        altText: M?.name ?? "",
                        muteWhenAutoplayBlocked: !0,
                      }),
                    }),
                  }),
                  (0, t.jsx)("img", {
                    src: H,
                    alt: g.F5.Localize("#VerifiedProgram_DeckDeviceAlt"),
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: a().VideoDisclaimer,
                children: g.F5.Localize("#VerifiedProgram_DeckDisclaimer"),
              }),
            ],
          });
        }
        function N(m) {
          const C = (0, j.zI)(),
            M = (0, v.sfN)(i.TS.LANGUAGE);
          return (0, t.jsx)(l.u, {
            language: M,
            strAltText: g.F5.Localize("#VerifiedProgram_DeckShopBannerAlt"),
            strImageToken: C
              ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
              : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
          });
        }
        function R(m) {
          const {
            match: {
              params: { appid: C },
            },
          } = m;
          return (0, t.jsx)(s, { appid: Number.parseInt(C) });
        }
      },
      37882: (U) => {
        U.exports = {
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
    },
  ]);
})();
