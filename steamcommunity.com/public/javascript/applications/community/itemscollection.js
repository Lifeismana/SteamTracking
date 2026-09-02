/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [349],
    {
      28946: (G, W, t) => {
        "use strict";
        t.r(W), t.d(W, { default: () => se });
        var e = t(7850),
          D = t(24660),
          a = t(19298),
          x = t(78365),
          L = t(72976),
          d = t(23386),
          l = t(72609),
          w = t(95995),
          H = t(72865),
          v = t(90626),
          R = t(67705);
        function T() {
          const [g, n] = (0, v.useState)(() =>
            (0, R.Tc)("profile-itemcollection", "itemcollection_config"),
          );
          return g;
        }
        var B = t(84676),
          i = t(64411),
          m = t(36707),
          f = t(40594);
        function p({
          nPercent: g,
          indeterminate: n,
          animate: C,
          className: h,
        }) {
          return (0, e.jsx)("div", {
            className: (0, m.A)(
              f.ProgressBar,
              C && f.AnimateProgress,
              n && f.Indeterminate,
              h,
            ),
            style: { "--percent": g / 100 },
          });
        }
        const y = ({ nPercent: g, size: n = 120, strokeWidth: C = 20 }) => {
          const h = (n - C) / 2,
            I = 2 * Math.PI * h,
            A = I - (g / 100) * I,
            P = g == 100;
          return (0, e.jsx)("div", {
            className: (0, m.A)({ [f.Circular]: !0, [f.Full]: P }),
            children: (0, e.jsxs)("svg", {
              width: n,
              height: n,
              style: { transform: "rotate(-90deg)" },
              children: [
                (0, e.jsx)("circle", {
                  cx: n / 2,
                  cy: n / 2,
                  r: h,
                  stroke: "#0c131d",
                  strokeWidth: C,
                  fill: "none",
                }),
                (0, e.jsx)("circle", {
                  cx: n / 2,
                  cy: n / 2,
                  r: h,
                  stroke: "#1a9fff",
                  strokeWidth: C,
                  fill: "none",
                  strokeDasharray: I,
                  strokeDashoffset: A,
                  style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
                }),
              ],
            }),
          });
        };
        var u = t(18210),
          z = t(92264),
          b = t(54963),
          o = t(49395),
          r = t.n(o),
          _ = t(85427),
          s = t.n(_),
          N = t(41635);
        function U(g) {
          const {
              strProfileName: n,
              strSteamId: C,
              bViewingOwnProfile: h,
              rgCommunityItemDefs: I,
              rgUserCommunityItems: A,
              nAppID: P,
              rgRewardItems: S,
              rgUserItemRewarded: q,
              oRewardDefinition: j,
            } = T(),
            c = (0, v.useMemo)(() => {
              const M = new Set();
              A.forEach((E) => {
                M.add(`${E.appid}_${E.item_type}`);
              });
              const F = new Set();
              S == null ||
                S.forEach((E) => {
                  F.add(E.community_item_type);
                });
              const ee = new Map();
              return (
                I.filter(
                  (E) =>
                    E.active &&
                    !E.deleted &&
                    !F.has(E.item_type) &&
                    E.item_class != d.u8,
                )
                  .sort((E, re) => {
                    const te = M.has(`${E.appid}_${E.item_type}`),
                      oe = M.has(`${re.appid}_${re.item_type}`);
                    return (te && oe) || (!te && !oe)
                      ? re.item_type - E.item_type
                      : te
                        ? -1
                        : 1;
                  })
                  .forEach((E) => {
                    ee.has(E.item_class) || ee.set(E.item_class, []),
                      ee
                        .get(E.item_class)
                        .push({
                          ...E,
                          user_has_item: M.has(`${E.appid}_${E.item_type}`),
                        });
                  }),
                ee
              );
            }, [I, S, A]),
            k = (0, v.useMemo)(() => {
              if (c.has(d.sU)) {
                const M = c.get(d.sU).filter((F) => {
                  const ee = JSON.parse(F.item_key_values);
                  return F.item_movie_webm && F.item_movie_mp4;
                });
                if (M.length) return (0, N.fW)(M), M[0];
              }
              return null;
            }, [c]),
            Y = (0, v.useMemo)(() => {
              let M = new Map();
              return (
                I.forEach((F) => {
                  M.set(F.item_type, F);
                }),
                M
              );
            }, [I]),
            K = (0, v.useMemo)(
              () => Array.from(c.keys()).sort((M, F) => F - M),
              [c],
            ),
            [ne, ie, ae] = v.useMemo(() => {
              const M =
                  A == null
                    ? void 0
                    : A.filter((te) => {
                        const oe = Y.get(te.item_type);
                        return !(
                          oe &&
                          (oe.item_class == d.Ve || oe.item_class == d.u8)
                        );
                      }),
                F = I.filter(
                  (te) => te.item_class != d.Ve && te.item_class != d.u8,
                ),
                ee = M.length || 0,
                E = F.length || 0;
              return [E ? Math.floor((ee * 100) / E) : 0, E, ee];
            }, [Y, I, A]);
          return (0, e.jsx)(H.nn, {
            feature: "itemcollections",
            children: (0, e.jsx)(w.A, {
              appID: P,
              children: (0, e.jsxs)(a.Z, {
                className: r().ProfileSubPageContainer,
                children: [
                  k &&
                    (0, e.jsx)("div", {
                      className: s().PageBackground,
                      children: (0, e.jsxs)("video", {
                        preload: "auto",
                        playsInline: !0,
                        muted: !0,
                        autoPlay: !0,
                        loop: !0,
                        poster: `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${P}/${k.item_image_large}`,
                        children: [
                          (0, e.jsx)("source", {
                            src: `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${P}/${k.item_movie_webm}`,
                            type: "video/webm",
                          }),
                          !l.TS.IN_CLIENT &&
                            (0, e.jsx)("source", {
                              src: `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${P}/${k.item_movie_mp4}`,
                              type: "video/mp4",
                            }),
                        ],
                      }),
                    }),
                  (0, e.jsx)(X, { nAppID: P }),
                  (0, e.jsxs)("div", {
                    className: s().PageSection,
                    children: [
                      (0, e.jsx)("span", {
                        children: (0, u.we)(
                          "#ItemCollection_Collected",
                          ae,
                          ie,
                        ),
                      }),
                      (0, e.jsx)(p, {
                        className: s().ProgressBar,
                        animate: !0,
                        nPercent: ne,
                        indeterminate: !1,
                      }),
                    ],
                  }),
                  !!j &&
                    (0, e.jsx)("div", {
                      className: (0, m.A)(
                        s().PageSection,
                        s().BackgroundGradient,
                        s().Highlight,
                      ),
                      children: (0, e.jsx)($, {
                        oRewardDefinition: j,
                        bViewingOwnProfile: h,
                        rgRewardItems: S,
                        rgUserItemRewarded: q,
                        rgCommunityItemDefs: I,
                      }),
                    }),
                  (0, e.jsxs)("div", {
                    className: (0, m.A)(
                      s().PageSection,
                      s().BackgroundGradient,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: s().HowToGet,
                        children: (0, u.we)("#ItemCollection_ForPoints_Title"),
                      }),
                      K.map((M) =>
                        (0, e.jsx)(
                          O,
                          {
                            nAppID: P,
                            itemClass: M,
                            rgItems: c.get(M),
                            bViewingOwnProfile: h,
                            bHideItemStore: M == d.Ve,
                          },
                          "item_class_" + M,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function $(g) {
          const {
              oRewardDefinition: n,
              rgRewardItems: C,
              rgUserItemRewarded: h,
              rgCommunityItemDefs: I,
              bViewingOwnProfile: A,
            } = g,
            P = (0, v.useMemo)(() => {
              const S = new Set();
              h == null ||
                h.forEach((c) => {
                  S.add(
                    `${c.item_definition.appid}_${c.item_definition.community_item_type}`,
                  );
                });
              const q = new Set();
              C.forEach((c) => {
                q.add(`${c.appid}_${c.community_item_type}`);
              });
              const j = new Map();
              return (
                I.filter((c) => c.active)
                  .filter((c) => q.has(`${c.appid}_${c.item_type}`))
                  .sort((c, k) => {
                    const Y = S.has(`${c.appid}_${c.item_type}`),
                      K = S.has(`${k.appid}_${k.item_type}`);
                    return (Y && K) || (!Y && !K)
                      ? k.item_type - c.item_type
                      : Y
                        ? -1
                        : 1;
                  })
                  .forEach((c) => {
                    const k = S.has(`${c.appid}_${c.item_type}`);
                    j.has(c.item_class) || j.set(c.item_class, []),
                      j.get(c.item_class).push({ ...c, user_has_item: k });
                  }),
                j
              );
            }, [C, h, I]);
          return (0, e.jsxs)(x.YZ, {
            navEntryPreferPosition: L.iU.LAST,
            preferredFocus: !0,
            className: s().FreeQuestCtn,
            children: [
              (0, e.jsx)("div", {
                className: s().HowToGet,
                children: (0, u.we)("#ItemCollection_ForFree_Title"),
              }),
              (0, e.jsxs)(a.Z, {
                children: [
                  (0, e.jsxs)("div", {
                    className: s().QuestInstructions,
                    children: [
                      (0, e.jsx)("div", {
                        className: s().QuestName,
                        children: (0, u.we)(
                          "#ItemCollection_ForFree_Discovery",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, z.nR)(
                          n.rtime_start_time,
                          n.rtime_end_time,
                        ),
                      }),
                      (0, e.jsxs)("p", {
                        children: [
                          (0, u.we)("#ItemCollection_ForFree_Discovery_desc"),
                          (0, e.jsx)("br", {}),
                          (0, u.oW)(
                            "#ItemCollection_ForFree_Discovery_desc2",
                            (0, e.jsx)(D.Ii, {
                              href: `${l.TS.STORE_BASE_URL}explore?dq=widget`,
                            }),
                          ),
                        ],
                      }),
                    ],
                  }),
                  Array.from(P.keys()).map((S) =>
                    (0, e.jsx)(
                      O,
                      {
                        bViewingOwnProfile: A,
                        nAppID: n.appid,
                        itemClass: S,
                        rgItems: P.get(S),
                        bHideItemStore: !0,
                      },
                      "free_item_class_" + S,
                    ),
                  ),
                ],
              }),
            ],
          });
        }
        function O(g) {
          const {
              rgItems: n,
              itemClass: C,
              nAppID: h,
              bViewingOwnProfile: I,
            } = g,
            A = (0, v.useMemo)(
              () => n.filter((S) => S.user_has_item).length,
              [n],
            ),
            P = n.length ? Math.floor((A * 100) / n.length) : 0;
          return (0, e.jsxs)(x.YZ, {
            navEntryPreferPosition: L.iU.LAST,
            preferredFocus: !0,
            className: (0, m.A)(s().ItemSection),
            children: [
              (0, e.jsx)(Q, { ...g }),
              (0, e.jsxs)(a.Z, {
                className: s().ItemCategoryCtn,
                children: [
                  (0, e.jsx)(a.Z, {
                    className: s().CategoryName,
                    children: (0, u.we)("#Sale_Section_PointShop_class_" + C),
                  }),
                  (0, e.jsx)("div", { className: s().SectionLine }),
                  (0, e.jsx)(Z, { ...g }),
                ],
              }),
              (0, e.jsxs)(a.Z, {
                className: s().ItemCtn,
                children: [
                  (0, e.jsxs)(a.Z, {
                    className: s().ProgressIndicationCtn,
                    children: [
                      (0, e.jsx)(y, { nPercent: P }),
                      (0, e.jsxs)("div", {
                        className: s().ProgressText,
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, u.we)(
                              "#ItemCollection_Collected_Item",
                              A,
                              n.length,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, u.we)(
                              "#ItemCollection_Collected_Line",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.map((S) =>
                    (0, e.jsx)(J, { item: S }, "item_" + S.item_type),
                  ),
                ],
              }),
            ],
          });
        }
        function Q(g) {
          const { itemClass: n, nAppID: C } = g;
          return n !== d.Ve
            ? null
            : (0, e.jsx)(a.Z, {
                className: s().HowToGet,
                children: (0, u.we)("#ItemCollection_GameCards_Title"),
              });
        }
        function Z(g) {
          const {
            itemClass: n,
            nAppID: C,
            bViewingOwnProfile: h,
            bHideItemStore: I,
          } = g;
          return n == d.Ve && h
            ? (0, e.jsx)(D.Ii, {
                href: `${l.TS.COMMUNITY_BASE_URL}my/gamecards/${C}`,
                className: s().PointShopLink,
                children: (0, u.we)("#ItemCollection_Visit_Badge"),
              })
            : I
              ? null
              : (0, e.jsx)(D.Ii, {
                  href: `${l.TS.STORE_BASE_URL}points/shop/app/${C}`,
                  className: s().PointShopLink,
                  children: (0, u.we)("#ItemCollection_Visit"),
                });
        }
        function J(g) {
          const { item: n } = g,
            [C, h] = (0, b.OP)(),
            I = n.user_has_item || C,
            A = !I,
            P =
              (I || n.item_class == d.Ve || n.item_class == d.jE) &&
              n.item_class != d.J4
                ? n.item_image_small
                : void 0;
          return (0, e.jsx)(a.Z, {
            ...h,
            onFocus: () => h.onPointerEnter(),
            onBlur: () => h.onPointerLeave(),
            focusable: !0,
            className: s().ItemBackground,
            children: (0, e.jsx)(i.Qc, {
              appid: n.appid,
              item_image_large: n.item_image_large,
              item_image_small: P,
              item_title: n.item_title,
              item_movie_mp4: I ? n.item_movie_mp4_small : void 0,
              item_movie_webm: I ? n.item_movie_webm_small : void 0,
              className: (0, m.A)({ [s().ImgCtn]: !0, [s().ImgGrey]: A }),
              videoClassName: s().ImgCtn,
            }),
          });
        }
        const V = { include_assets: !0 };
        function X(g) {
          const { nAppID: n } = g,
            [C] = (0, B.t7)(n, V);
          return C
            ? (0, e.jsx)(a.Z, {
                className: s().AppHeaderCtn,
                children: (0, e.jsxs)(a.Z, {
                  children: [
                    (0, e.jsxs)(a.Z, {
                      className: s().AppHeaderRow,
                      children: [
                        (0, e.jsx)(a.Z, {
                          className: s().AppName,
                          children: C.GetName(),
                        }),
                        (0, e.jsx)(a.Z, {
                          className: s().PageName,
                          children: (0, u.we)("#ItemCollection_Title"),
                        }),
                      ],
                    }),
                    (0, e.jsx)(a.Z, {
                      children: (0, u.we)("#ItemCollection_EventSubTitle"),
                    }),
                  ],
                }),
              })
            : null;
        }
        const se = U;
      },
      23386: (G, W, t) => {
        "use strict";
        t.d(W, {
          EL: () => e,
          Ed: () => T,
          J4: () => L,
          Qw: () => w,
          ST: () => l,
          Ve: () => a,
          XY: () => v,
          iV: () => R,
          jE: () => H,
          oW: () => d,
          sU: () => x,
          u8: () => D,
          wK: () => B,
          xi: () => m,
          xw: () => f,
          yZ: () => p,
          zs: () => i,
        });
        const e = 0,
          D = 1,
          a = 2,
          x = 3,
          L = 4,
          d = 5,
          l = 6,
          w = 7,
          H = 8,
          v = 9,
          R = 10,
          T = 11,
          B = 12,
          i = 13,
          m = 14,
          f = 15,
          p = 16,
          y = 17;
      },
      33907: (G, W, t) => {
        "use strict";
        t.d(W, { d2: () => B });
        var e = t(88942),
          D = t(90626),
          a = t(72604),
          x = t(72609);
        const L = "minigamev2/itemdefs",
          d = "appid",
          l = "editor";
        function w() {
          return (typeof self != "undefined" ? self.origin + "/" : "") ===
            x.TS.STORE_BASE_URL
            ? x.TS.STORE_BASE_URL
            : x.TS.COMMUNITY_BASE_URL;
        }
        async function H(i, m) {
          if (!i) return [];
          const f = new URLSearchParams({ [d]: String(i), l: x.TS.LANGUAGE });
          m && f.set(l, "1");
          const p = `${w()}${L}?${f}`,
            y = await fetch(p, { credentials: m ? "include" : "same-origin" });
          if (!y.ok) throw new Error(`${p} answered ${y.status}`);
          const u = await y.json();
          if ((u == null ? void 0 : u.success) == a.R && u.item_definitions)
            return u.item_definitions;
          throw new Error(
            "Community item definitions for app " +
              i +
              " answered " +
              (u == null ? void 0 : u.success),
          );
        }
        function v(i, m) {
          return ["MinigameCommunityItemDefs", i, !!m];
        }
        function R(i, m) {
          return {
            queryKey: v(i, m),
            queryFn: () => H(i, m),
            enabled: !!i,
            retry: !1,
          };
        }
        function T(i, m) {
          const { data: f } = (0, e.I)(R(i, m));
          return f;
        }
        function B(i, m, f) {
          const p = T(i, f);
          return (0, D.useMemo)(
            () =>
              p == null
                ? void 0
                : p.find(
                    (y) => (f || y.active) && y.appid == i && y.item_type == m,
                  ),
            [p, i, m, f],
          );
        }
      },
      95995: (G, W, t) => {
        "use strict";
        t.d(W, { A: () => d });
        var e = t(72865),
          D = t(90626),
          a = t(37740),
          x = t(40365),
          L = t(18938);
        function d(l) {
          const { appID: w, feature: H, depth: v, children: R } = l,
            T = (0, e.ru)(H, v),
            B = (0, a.b)(),
            [i, m] = D.useState(void 0),
            f = D.useCallback(
              (z) => {
                z.isIntersecting &&
                  m((b) =>
                    (b == null ? void 0 : b.appID) == w &&
                    (b == null ? void 0 : b.snr) == T
                      ? b
                      : { appID: w, snr: T },
                  );
              },
              [w, T],
            );
          (0, D.useEffect)(() => {
            i && i.appID != null && B.AddImpression(i.appID, i.snr);
          }, [B, i]);
          const p = (0, x.BL)(f),
            y = w && (!i || (i.appID != w && i.snr != T)),
            u = (0, L.Ue)(R.props.ref, y ? p : void 0);
          return D.cloneElement(R, { ref: u });
        }
      },
      37740: (G, W, t) => {
        "use strict";
        t.d(W, { b: () => x });
        var e = t(7850),
          D = t(90626);
        const a = D.createContext({
          AddImpression: () => {
            console.log("Impression Tracking not enabled");
          },
          BIsValid: () => !1,
        });
        function x() {
          return D.useContext(a);
        }
        function L(d) {
          return jsx(a.Provider, {
            value: d.ImpressionTracker,
            children: d.children,
          });
        }
      },
      84676: (G, W, t) => {
        "use strict";
        t.d(W, {
          G6: () => T,
          Gg: () => m,
          Sq: () => H,
          eR: () => v,
          ik: () => R,
          mZ: () => f,
          t7: () => B,
          zX: () => y,
        });
        var e = t(41735),
          D = t.n(e),
          a = t(90626),
          x = t(72604),
          L = t(44420),
          d = t(54963),
          l = t(10142);
        function w(o, r, _ = !0) {
          const s = _
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            N = _ || CStoreItemCache.Get().BHasStoreItem(o, r, s) ? o : null,
            [U, $] = T(N, r, s),
            [O, Q] = useState(null),
            [Z, J] = T(O, r, s);
          useEffect(() => {
            (U == null ? void 0 : U.GetAppType()) ===
              EStoreAppType.k_EStoreAppType_Demo && Q(U.GetParentAppID());
          }, [U]);
          let V =
            U != null && U.GetShortDescription()
              ? StripBBCodeTags(U.GetShortDescription())
              : "";
          (!V || V.length === 0) &&
            Z &&
            (V =
              Z != null && Z.GetShortDescription()
                ? StripBBCodeTags(Z.GetShortDescription())
                : "");
          const X = $ == R && (!O || J == R);
          return [V, X];
        }
        const H = 1,
          v = 2,
          R = 3;
        function T(o, r, _, s) {
          const N = (0, a.useRef)(void 0),
            U = (0, a.useRef)(void 0),
            $ = (0, d.CH)();
          N.current = o;
          const [O, Q] = (0, a.useState)(void 0),
            {
              include_assets: Z,
              include_release: J,
              include_platforms: V,
              include_all_purchase_options: X,
              include_screenshots: se,
              include_trailers: g,
              include_ratings: n,
              include_tag_count: C,
              include_reviews: h,
              include_basic_info: I,
              include_supported_languages: A,
              include_full_description: P,
              include_included_items: S,
              include_assets_without_overrides: q,
              apply_user_filters: j,
              include_links: c,
              include_extra_details: k,
            } = _;
          if (
            ((0, a.useEffect)(() => {
              const K = {
                include_assets: Z,
                include_release: J,
                include_platforms: V,
                include_all_purchase_options: X,
                include_screenshots: se,
                include_trailers: g,
                include_ratings: n,
                include_tag_count: C,
                include_reviews: h,
                include_basic_info: I,
                include_supported_languages: A,
                include_full_description: P,
                include_included_items: S,
                include_assets_without_overrides: q,
                apply_user_filters: j,
                include_links: c,
                include_extra_details: k,
              };
              let ne = null;
              return (
                !o ||
                  o < 0 ||
                  l.A.Get().BHasStoreItem(o, r, K) ||
                  (O !== void 0 && s && s == U.current) ||
                  (s !== U.current && (Q(void 0), (U.current = s)),
                  (ne = D().CancelToken.source()),
                  l.A.Get()
                    .QueueStoreItemRequest(o, r, K)
                    .then((ie) => {
                      !(ne != null && ne.token.reason) &&
                        N.current === o &&
                        Q(ie == x.R),
                        $();
                    })),
                () =>
                  ne == null
                    ? void 0
                    : ne.cancel("useStoreItemCache: unmounting")
              );
            }, [
              o,
              r,
              s,
              O,
              Z,
              J,
              V,
              X,
              se,
              g,
              n,
              C,
              h,
              I,
              A,
              P,
              S,
              q,
              j,
              c,
              k,
              $,
            ]),
            !o)
          )
            return [null, v];
          if (O === !1) return [void 0, v];
          if (l.A.Get().BIsStoreItemMissing(o, r)) return [void 0, v];
          if (!l.A.Get().BHasStoreItem(o, r, _)) return [void 0, H];
          const Y = l.A.Get().GetStoreItemWithLegacyVisibilityCheck(o, r);
          return Y ? [Y, R] : [null, v];
        }
        function B(o, r, _) {
          return T(o, L.c6.qI, r, _);
        }
        function i(o, r, _) {
          return T(o, EStoreItemType.k_EStoreItemType_Bundle, r, _);
        }
        function m(o, r, _) {
          return T(o, L.c6.RD, r, _);
        }
        function f(o, r, _) {
          var s;
          const [N, U] = T(o, r, _);
          let $;
          (N == null ? void 0 : N.GetStoreItemType()) == L.c6.RD &&
            !((s = N.GetAssets()) != null && s.GetHeaderURL()) &&
            (N == null ? void 0 : N.GetIncludedAppIDs().length) == 1 &&
            ($ = N.GetIncludedAppIDs()[0]);
          const [O, Q] = B($, _);
          return $ && O != null && O.BIsVisible() ? [O, Q] : [N, U];
        }
        function p(o, r, _, s) {
          const N = (0, d.CH)(),
            {
              include_assets: U,
              include_release: $,
              include_platforms: O,
              include_all_purchase_options: Q,
              include_screenshots: Z,
              include_trailers: J,
              include_ratings: V,
              include_tag_count: X,
              include_reviews: se,
              include_basic_info: g,
              include_supported_languages: n,
              include_full_description: C,
              include_included_items: h,
              include_assets_without_overrides: I,
              apply_user_filters: A,
              include_links: P,
              include_extra_details: S,
            } = _;
          return (
            (0, a.useEffect)(() => {
              if (!o || o.length == 0) return;
              const j = {
                  include_assets: U,
                  include_release: $,
                  include_platforms: O,
                  include_all_purchase_options: Q,
                  include_screenshots: Z,
                  include_trailers: J,
                  include_ratings: V,
                  include_tag_count: X,
                  include_reviews: se,
                  include_basic_info: g,
                  include_supported_languages: n,
                  include_full_description: C,
                  include_included_items: h,
                  include_assets_without_overrides: I,
                  apply_user_filters: A,
                  include_links: P,
                  include_extra_details: S,
                },
                c = o.filter(
                  (K) =>
                    !(
                      l.A.Get().BHasStoreItem(K, r, j) ||
                      l.A.Get().BIsStoreItemMissing(K, r)
                    ),
                );
              if (c.length == 0) return;
              const k = D().CancelToken.source(),
                Y = c.map((K) => l.A.Get().QueueStoreItemRequest(K, r, j));
              return (
                Promise.all(Y).then(() => {
                  k.token.reason || N();
                }),
                () => k.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              o,
              r,
              s,
              N,
              U,
              $,
              O,
              Q,
              Z,
              J,
              V,
              X,
              se,
              g,
              n,
              C,
              h,
              I,
              A,
              P,
              S,
            ]),
            o
              ? o.every(
                  (j) =>
                    l.A.Get().BHasStoreItem(j, r, _) ||
                    l.A.Get().BIsStoreItemMissing(j, r),
                )
                ? o.every((j) =>
                    l.A.Get().GetStoreItemWithLegacyVisibilityCheck(j, r),
                  )
                  ? R
                  : v
                : H
              : v
          );
        }
        function y(o, r, _) {
          return p(o, L.c6.qI, r, _);
        }
        function u(o, r, _) {
          return p(o, EStoreItemType.k_EStoreItemType_Bundle, r, _);
        }
        function z(o, r, _) {
          return p(o, EStoreItemType.k_EStoreItemType_Package, r, _);
        }
        function b() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      64411: (G, W, t) => {
        "use strict";
        t.d(W, { Qc: () => v, Zx: () => T, f8: () => R });
        var e = t(7850),
          D = t(65946),
          a = t(23386),
          x = t(33907),
          L = t(85599),
          d = t(18210),
          l = t(3166),
          w = t(56330),
          H = t.n(w);
        function v(B) {
          const {
            appid: i,
            item_image_small: m,
            item_image_large: f,
            item_movie_mp4: p,
            item_movie_webm: y,
            item_title: u,
          } = B;
          if (p && y) {
            const z = `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${m}`,
              b = `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${y}`,
              o = `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${p}`;
            return (0, e.jsx)(e.Fragment, {
              children: (0, e.jsxs)("video", {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: z,
                playsInline: !0,
                className: B.videoClassName,
                children: [
                  (0, e.jsx)("source", { src: b, type: "video/webm" }),
                  !l.TS.IN_CLIENT &&
                    (0, e.jsx)("source", { src: o, type: "video/mp4" }),
                ],
              }),
            });
          } else {
            const z = `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${m || f}`;
            return (0, e.jsx)("img", {
              className: B.className,
              src: z,
              alt: u,
            });
          }
        }
        function R(B) {
          const { appid: i, community_item_type: m, bForEdit: f } = B,
            p = (0, x.d2)(i, m, f),
            y =
              p && !p.active
                ? (0, e.jsx)("div", {
                    className: w.WarningStylesBackground,
                    children: (0, d.we)(
                      "#Sale_Section_RewardShelf_ItemInActiveWarning",
                    ),
                  })
                : void 0;
          return p
            ? (0, e.jsxs)(e.Fragment, {
                children: [(0, e.jsx)(v, { ...p }), y],
              })
            : (0, e.jsx)(L.t, { size: "small", string: (0, d.we)("#Loading") });
        }
        function T(B) {
          var i, m, f, p;
          const { section: y, rewardDef: u, language: z } = B,
            b = (0, x.d2)(
              (i = u.appid) != null ? i : 0,
              (m = u.community_item_type) != null ? m : 0,
            ),
            [o] = (0, D.q3)(() => {
              var _;
              return [!!((_ = y.rewards) != null && _.show_reward_item_name)];
            });
          let r;
          switch (u.community_class) {
            case a.xi:
            case a.xw:
              r = `${l.TS.COMMUNITY_BASE_URL}my/edit/avatar`;
              break;
            case a.u8:
              r = `${l.TS.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
              break;
            case a.sU:
            case a.jE:
              r = `${l.TS.COMMUNITY_BASE_URL}my/edit/background`;
              break;
            case a.zs:
              r = `${l.TS.COMMUNITY_BASE_URL}my/edit/miniprofile`;
              break;
            case a.Ed:
              r = `${l.TS.COMMUNITY_BASE_URL}chat`;
              break;
          }
          return (0, e.jsxs)("a", {
            href: r,
            children: [
              (0, e.jsx)(R, {
                appid: (f = u.appid) != null ? f : 0,
                community_item_type:
                  (p = u.community_item_type) != null ? p : 0,
              }),
              !!o &&
                (0, e.jsx)("span", {
                  children: b == null ? void 0 : b.item_name,
                }),
            ],
          });
        }
      },
      85427: (G) => {
        G.exports = {
          AppHeaderCtn: "_1E99FsAAFaUjsZvZ4P5Vzl",
          AppHeaderRow: "_90TlYhcg-nmOFhraNLUeZ",
          AppName: "o1m9BbS1X5-LqjZ8B1v64",
          PageName: "_1qzjiDNpGZYKIvwBx1el1t",
          PageSubTitle: "RrvoHJVvvZtgasOhRJTbT",
          PageSection: "_2j6xq7lPsl9WaiSWYe6FXz",
          BackgroundGradient: "_2Xm3_sNhoAPpV25YOHUm8A",
          Highlight: "YkEMN4dqPVdvdufkn7yLq",
          ItemSection: "_3p4EX6xLxF9ccx1Y_jNDCa",
          HowToGet: "_3Ivasew2xNa_b5CaL7a_In",
          FreeQuestCtn: "_1deYqyFU74gu0n6WzNrTmn",
          QuestInstructions: "_1G50d530t6b5H3PiVNOPBQ",
          QuestName: "kkqhGQQsuX6fr0UUwIxXg",
          ProgressBar: "_16EW5nb2jZ7nNNJtJknVYf",
          ItemCategoryCtn: "aaosYB-OO-EJn70ocmC-J",
          CategoryName: "_1FN5OnaWAzybq4J_ozBIsY",
          SectionLine: "KJMVW9vv7xeG9RxSrn1AZ",
          PointShopLink: "v75cc6-VG2tzRr_W4eQ12",
          ItemCtn: "_1QrzyWO-Wl--rxSjTbLz5p",
          ProgressIndicationCtn: "_15b3bAwBMv-0X3I6uaac6o",
          ProgressText: "HqRb17BK0zUwRPQXbHm9x",
          ItemBackground: "_1b-IbdTr9R3ZKUWl3WIZj5",
          ImgCtn: "_3i3mybB0zixbTQe_pqH6N2",
          ImgGrey: "_3n2Ur4vZ1ojk_YPqd7iZfq",
          PageBackground: "zZIkdIHeeChogTvItWGO2",
        };
      },
      49395: (G) => {
        G.exports = { ProfileSubPageContainer: "_1npy3GFjDHZPSB66m0_INb" };
      },
      56330: (G) => {
        G.exports = {
          ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
          ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
          ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
          ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
          ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
          WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
          WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
          WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
          WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
          Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
          WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
          InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
          InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
          InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
          InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
          Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
          NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
          ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
          SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
        };
      },
      40594: (G) => {
        G.exports = {
          ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
          AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
          loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
          Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
          Circular: "_3wMS41OoTPnZyEddTVwzy_",
          Full: "_3t_UEZDy1QxxcYfn3TTvD2",
        };
      },
    },
  ]);
})();
