/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2092],
    {
      75484: (K, U, i) => {
        "use strict";
        i.r(U), i.d(U, { default: () => z });
        var e = i(7850),
          T = i(90626),
          I = i(18210),
          L = i(84202),
          s = i.n(L),
          x = i(24660),
          h = i(3166),
          N = i(36118),
          l = i(19316),
          a = i(41735),
          m = i.n(a),
          S = i(84676);
        function f() {
          const n = (0, T.useMemo)(
              () => (0, h.Fd)("personalapps", "application_config") || [],
              [],
            ),
            r = (0, T.useMemo)(
              () => (0, h.Fd)("popularapps", "application_config") || [],
              [],
            ),
            u = [...n, ...r];
          return u.length
            ? {
                isLoading: (0, S.zX)(u, { include_assets: !0 }) === S.Sq,
                data: { personalAppIds: n, popularAppIds: r },
              }
            : { isLoading: !1, data: { personalAppIds: n, popularAppIds: r } };
        }
        async function R(n) {
          const r = `${h.TS.COMMUNITY_BASE_URL}actions/SearchApps/${n}`;
          return (await m().get(r)).data;
        }
        var B = i(36707),
          w = i(10142),
          F = i(179),
          Z = i(92757),
          G = i(19298);
        function z() {
          const n = (0, T.useRef)(void 0);
          return (
            (0, T.useEffect)(() => {
              n.current && n.current.TakeFocus();
            }, []),
            (0, e.jsxs)(G.Z, {
              navRef: n,
              className: s().CommunityHomeHeader,
              children: [
                (0, e.jsxs)("div", {
                  className: s().CommunityHomeHeaderTitleSection,
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: s().CommunityHomeHeaderTitle,
                          children: (0, I.we)("#Community_Home_Header_Title"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().CommunityHomeHeaderSubtitle,
                          children: (0, I.we)(
                            "#Community_Home_Header_Subtitle",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)(x.Ii, {
                      className: s().AddFriendBtn,
                      href: `${h.TS.COMMUNITY_BASE_URL}search/users/`,
                      children: (0, I.we)(
                        "#Community_Home_Header_AddFriend_Button",
                      ),
                    }),
                  ],
                }),
                (0, e.jsx)(J, {}),
                (0, e.jsx)(A, {}),
              ],
            })
          );
        }
        function J() {
          const [n, r] = (0, T.useState)(""),
            [u, _] = (0, T.useState)([]),
            [p, d] = (0, T.useState)(!1),
            g = f();
          if (g.isLoading) return null;
          const E = async (H) => {
              r(H.target.value);
              const j = await R(H.target.value);
              _(j);
            },
            y = (H) => {
              H.currentTarget.contains(H.relatedTarget) || d(!1);
            },
            P = () => d(!0);
          return (0, e.jsxs)("div", {
            className: s().CommunityHomeHeaderContent,
            children: [
              (0, e.jsxs)(G.Z, {
                className: s().AppHubsCtn,
                children: [
                  (0, e.jsx)(t, {
                    appShortcuts: g.data.personalAppIds,
                    sectionTitle: (0, I.we)(
                      "#Community_Home_Header_GameHubs_ForYou",
                    ),
                    withDivider: g.data.popularAppIds.length > 0,
                  }),
                  (0, e.jsx)(t, {
                    appShortcuts: g.data.popularAppIds,
                    sectionTitle: (0, I.we)(
                      "#Community_Home_Header_GameHubs_Popular",
                    ),
                  }),
                ],
              }),
              (0, e.jsxs)(G.Z, {
                onFocus: P,
                onBlur: y,
                className: s().Search,
                children: [
                  (0, e.jsxs)(G.Z, {
                    className: s().SearchBar,
                    children: [
                      (0, e.jsx)("div", {
                        className: s().InputContainer,
                        children: (0, e.jsx)(l.pd, {
                          onChange: E,
                          value: n,
                          className: s().Input,
                          placeholder: (0, I.we)(
                            "#Community_Home_Header_FindGame_Placeholder",
                          ),
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: s().SearchIcon,
                        children: (0, e.jsx)(N.eSy, {}),
                      }),
                    ],
                  }),
                  p &&
                    (0, e.jsx)(G.Z, {
                      className: s().SearchResultsCtn,
                      children: u.map((H) =>
                        (0, e.jsx)(
                          x.Ii,
                          {
                            href: `${h.TS.COMMUNITY_BASE_URL}app/${H.appid}`,
                            className: s().SearchResult,
                            children: H.name,
                          },
                          H.appid,
                        ),
                      ),
                    }),
                ],
              }),
            ],
          });
        }
        function t(n) {
          const { appShortcuts: r, sectionTitle: u, withDivider: _ } = n;
          return !r || !r.length
            ? null
            : (0, e.jsxs)("div", {
                className: s().AppHubShortcutsCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: s().AppHubTitle,
                    children: u,
                  }),
                  (0, e.jsx)("div", {
                    "flow-children": "row",
                    className: (0, B.A)(
                      s().AppHubShortcutLinks,
                      _ ? s().Divider : null,
                    ),
                    children: r.map((p, d) => (0, e.jsx)(o, { appId: p }, d)),
                  }),
                ],
              });
        }
        function o(n) {
          const r = w.A.Get().GetApp(n.appId);
          return r
            ? (0, e.jsx)(x.Ii, {
                className: s().ShortcutLink,
                href: `${h.TS.COMMUNITY_BASE_URL}app/${n.appId}`,
                children: (0, e.jsx)("img", {
                  className: s().ShortcutImage,
                  src: r.GetAssets().GetLibraryCapsuleURL(),
                }),
              })
            : null;
        }
        const c = "subsection",
          C = "browsefilter";
        function A() {
          const n = (0, Z.W6)(),
            r = (0, F.f3)(n, c),
            u = (0, F.f3)(n, C);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(v, { activeTab: r, activeSort: u }),
              (0, e.jsx)(b, { activeTab: r, activeSort: u }),
            ],
          });
        }
        function v(n) {
          const { activeTab: r, activeSort: u } = n,
            _ = T.useRef(void 0);
          T.useEffect(() => {
            const d = document.getElementById(r);
            if (d && _ != null && _.current) {
              const g = d.offsetLeft + d.clientWidth;
              g > window.innerWidth &&
                _.current.scrollBy(g - window.innerWidth, 0);
            }
          }, [_ == null ? void 0 : _.current]);
          const p = [
            { label: "#Community_Home_Header_Filter_All", id: "" },
            {
              label: "#Community_Home_Header_Filter_Screenshots",
              id: "screenshots",
            },
            { label: "#Community_Home_Header_Filter_Artwork", id: "images" },
            {
              label: "#Community_Home_Header_Filter_Broadcasts",
              id: "broadcasts",
            },
            { label: "#Community_Home_Header_Filter_Videos", id: "videos" },
            { label: "#Community_Home_Header_Filter_Workshop", id: "workshop" },
            { label: "#Community_Home_Header_Filter_News", id: "news" },
            { label: "#Community_Home_Header_Filter_Guides", id: "guides" },
            { label: "#Community_Home_Header_Filter_Reviews", id: "reviews" },
          ];
          return (0, e.jsx)(G.Z, {
            "flow-children": "row",
            className: s().TabContainer,
            ref: _,
            children: p.map((d, g) => {
              const E = r ? r === d.id : g === 0,
                y = d.id ? `${c}=${d.id}` : "",
                P = u ? `${C}=${u}` : "",
                H = `${h.TS.COMMUNITY_BASE_URL}${P || y ? "?" : ""}${P}${y ? "&" : ""}${y}`;
              return (0, e.jsx)(
                x.Ii,
                {
                  id: d.id,
                  href: H,
                  className: (0, B.A)(s().Tab, E ? s().ActiveTab : null),
                  children: (0, I.we)(d.label),
                },
                d.id,
              );
            }),
          });
        }
        function b(n) {
          const { activeTab: r, activeSort: u } = n,
            _ = [
              { label: "#Community_Home_Header_BrowseFilter_Popular", id: "" },
              {
                label: "#Community_Home_Header_BrowseFilter_Recent",
                id: "mostrecent",
              },
            ];
          return (0, e.jsxs)(G.Z, {
            "flow-children": "row",
            className: s().SortContainer,
            children: [
              (0, e.jsx)("div", {
                className: s().SortIcon,
                children: (0, e.jsx)(N.LPs, {}),
              }),
              _.map((p, d) => {
                const g = u ? u === p.id : d === 0,
                  E = r ? `${c}=${r}` : "",
                  y = p.id ? `${C}=${p.id}` : "",
                  P = `${h.TS.COMMUNITY_BASE_URL}${y || E ? "?" : ""}${y}${E ? "&" : ""}${E}`;
                return (0, e.jsx)(
                  x.Ii,
                  {
                    href: P,
                    className: (0, B.A)(s().Sort, g ? s().ActiveSort : null),
                    children: (0, I.we)(p.label),
                  },
                  p.id,
                );
              }),
            ],
          });
        }
      },
      84676: (K, U, i) => {
        "use strict";
        i.d(U, {
          G6: () => S,
          Gg: () => B,
          Sq: () => l,
          eR: () => a,
          ik: () => m,
          mZ: () => w,
          t7: () => f,
          zX: () => Z,
        });
        var e = i(41735),
          T = i.n(e),
          I = i(90626),
          L = i(72604),
          s = i(44420),
          x = i(54963),
          h = i(10142);
        function N(t, o, c = !0) {
          const C = c
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            A = c || CStoreItemCache.Get().BHasStoreItem(t, o, C) ? t : null,
            [v, b] = S(A, o, C),
            [n, r] = useState(null),
            [u, _] = S(n, o, C);
          useEffect(() => {
            (v == null ? void 0 : v.GetAppType()) ===
              EStoreAppType.k_EStoreAppType_Demo && r(v.GetParentAppID());
          }, [v]);
          let p =
            v != null && v.GetShortDescription()
              ? StripBBCodeTags(v.GetShortDescription())
              : "";
          (!p || p.length === 0) &&
            u &&
            (p =
              u != null && u.GetShortDescription()
                ? StripBBCodeTags(u.GetShortDescription())
                : "");
          const d = b == m && (!n || _ == m);
          return [p, d];
        }
        const l = 1,
          a = 2,
          m = 3;
        function S(t, o, c, C) {
          const A = (0, I.useRef)(void 0),
            v = (0, I.useRef)(void 0),
            b = (0, x.CH)();
          A.current = t;
          const [n, r] = (0, I.useState)(void 0),
            {
              include_assets: u,
              include_release: _,
              include_platforms: p,
              include_all_purchase_options: d,
              include_screenshots: g,
              include_trailers: E,
              include_ratings: y,
              include_tag_count: P,
              include_reviews: H,
              include_basic_info: j,
              include_supported_languages: O,
              include_full_description: $,
              include_included_items: W,
              include_assets_without_overrides: X,
              apply_user_filters: M,
              include_links: k,
              include_extra_details: Q,
            } = c;
          if (
            ((0, I.useEffect)(() => {
              const D = {
                include_assets: u,
                include_release: _,
                include_platforms: p,
                include_all_purchase_options: d,
                include_screenshots: g,
                include_trailers: E,
                include_ratings: y,
                include_tag_count: P,
                include_reviews: H,
                include_basic_info: j,
                include_supported_languages: O,
                include_full_description: $,
                include_included_items: W,
                include_assets_without_overrides: X,
                apply_user_filters: M,
                include_links: k,
                include_extra_details: Q,
              };
              let Y = null;
              return (
                !t ||
                  t < 0 ||
                  h.A.Get().BHasStoreItem(t, o, D) ||
                  (n !== void 0 && C && C == v.current) ||
                  (C !== v.current && (r(void 0), (v.current = C)),
                  (Y = T().CancelToken.source()),
                  h.A.Get()
                    .QueueStoreItemRequest(t, o, D)
                    .then((q) => {
                      !(Y != null && Y.token.reason) &&
                        A.current === t &&
                        r(q == L.R),
                        b();
                    })),
                () =>
                  Y == null ? void 0 : Y.cancel("useStoreItemCache: unmounting")
              );
            }, [
              t,
              o,
              C,
              n,
              u,
              _,
              p,
              d,
              g,
              E,
              y,
              P,
              H,
              j,
              O,
              $,
              W,
              X,
              M,
              k,
              Q,
              b,
            ]),
            !t)
          )
            return [null, a];
          if (n === !1) return [void 0, a];
          if (h.A.Get().BIsStoreItemMissing(t, o)) return [void 0, a];
          if (!h.A.Get().BHasStoreItem(t, o, c)) return [void 0, l];
          const V = h.A.Get().GetStoreItemWithLegacyVisibilityCheck(t, o);
          return V ? [V, m] : [null, a];
        }
        function f(t, o, c) {
          return S(t, s.c6.qI, o, c);
        }
        function R(t, o, c) {
          return S(t, EStoreItemType.k_EStoreItemType_Bundle, o, c);
        }
        function B(t, o, c) {
          return S(t, s.c6.RD, o, c);
        }
        function w(t, o, c) {
          var C;
          const [A, v] = S(t, o, c);
          let b;
          (A == null ? void 0 : A.GetStoreItemType()) == s.c6.RD &&
            !((C = A.GetAssets()) != null && C.GetHeaderURL()) &&
            (A == null ? void 0 : A.GetIncludedAppIDs().length) == 1 &&
            (b = A.GetIncludedAppIDs()[0]);
          const [n, r] = f(b, c);
          return b && n != null && n.BIsVisible() ? [n, r] : [A, v];
        }
        function F(t, o, c, C) {
          const A = (0, x.CH)(),
            {
              include_assets: v,
              include_release: b,
              include_platforms: n,
              include_all_purchase_options: r,
              include_screenshots: u,
              include_trailers: _,
              include_ratings: p,
              include_tag_count: d,
              include_reviews: g,
              include_basic_info: E,
              include_supported_languages: y,
              include_full_description: P,
              include_included_items: H,
              include_assets_without_overrides: j,
              apply_user_filters: O,
              include_links: $,
              include_extra_details: W,
            } = c;
          return (
            (0, I.useEffect)(() => {
              if (!t || t.length == 0) return;
              const M = {
                  include_assets: v,
                  include_release: b,
                  include_platforms: n,
                  include_all_purchase_options: r,
                  include_screenshots: u,
                  include_trailers: _,
                  include_ratings: p,
                  include_tag_count: d,
                  include_reviews: g,
                  include_basic_info: E,
                  include_supported_languages: y,
                  include_full_description: P,
                  include_included_items: H,
                  include_assets_without_overrides: j,
                  apply_user_filters: O,
                  include_links: $,
                  include_extra_details: W,
                },
                k = t.filter(
                  (D) =>
                    !(
                      h.A.Get().BHasStoreItem(D, o, M) ||
                      h.A.Get().BIsStoreItemMissing(D, o)
                    ),
                );
              if (k.length == 0) return;
              const Q = T().CancelToken.source(),
                V = k.map((D) => h.A.Get().QueueStoreItemRequest(D, o, M));
              return (
                Promise.all(V).then(() => {
                  Q.token.reason || A();
                }),
                () => Q.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [t, o, C, A, v, b, n, r, u, _, p, d, g, E, y, P, H, j, O, $, W]),
            t
              ? t.every(
                  (M) =>
                    h.A.Get().BHasStoreItem(M, o, c) ||
                    h.A.Get().BIsStoreItemMissing(M, o),
                )
                ? t.every((M) =>
                    h.A.Get().GetStoreItemWithLegacyVisibilityCheck(M, o),
                  )
                  ? m
                  : a
                : l
              : a
          );
        }
        function Z(t, o, c) {
          return F(t, s.c6.qI, o, c);
        }
        function G(t, o, c) {
          return F(t, EStoreItemType.k_EStoreItemType_Bundle, o, c);
        }
        function z(t, o, c) {
          return F(t, EStoreItemType.k_EStoreItemType_Package, o, c);
        }
        function J() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      179: (K, U, i) => {
        "use strict";
        i.d(U, {
          Bm: () => L,
          QD: () => x,
          f3: () => I,
          iV: () => N,
          ip: () => h,
          le: () => s,
        });
        var e = i(90626),
          T = i(92757);
        function I(l, a) {
          let m;
          if (typeof l == "string") m = l;
          else if ("location" in l) m = l.location.search;
          else if ("search" in l) m = l.search;
          else return;
          const S = new URLSearchParams(m.substring(1));
          if (S.has(a)) {
            const f = S.getAll(a);
            return f[f.length - 1];
          }
        }
        function L(l, a, m, S = !1) {
          const f = new URLSearchParams(l.location.search.substring(1));
          if (m != null && m != null) {
            if (f.get(a) == m) return;
            f.set(a, m);
          } else {
            if (!f.has(a)) return;
            f.delete(a);
          }
          S
            ? l.replace(`?${f.toString()}`, { ...l.location.state })
            : l.push(`?${f.toString()}`);
        }
        function s(l, a, m) {
          L(l, a, m, !0);
        }
        function x(l, a) {
          const m = (0, T.W6)(),
            S = (0, T.zy)(),
            f = (0, e.useMemo)(() => {
              const B = I(S.search, l);
              return B != null && B != null
                ? a != null && a != null
                  ? typeof a == "boolean"
                    ? a.constructor(B !== "false")
                    : a.constructor(B)
                  : B
                : a;
            }, [S.search, l, a]),
            R = (0, e.useCallback)(
              (B, w = !1) => {
                L(m, l, B != null && B != null ? String(B) : null, w);
              },
              [m, l],
            );
          return [f, R];
        }
        function h(l, a, m = !1) {
          const S = new URLSearchParams(l.location.search.substring(1));
          for (const f in a)
            if (a.hasOwnProperty(f)) {
              const R = a[f];
              S.delete(f), R != null && R != null && S.append(f, R);
            }
          m
            ? l.replace(`?${S.toString()}`, { ...l.location.state })
            : l.push(`?${S.toString()}`);
        }
        function N(l, a) {
          h(l, a, !0);
        }
      },
      84202: (K) => {
        K.exports = {
          CommunityHomeHeader: "_1C-zu8dsenPxA1G4fPb6xE",
          CommunityHomeHeaderTitleSection: "_31q4bBxhekoyefz_1Si0p7",
          CommunityHomeHeaderTitle: "_1V0f6-9bCasXuqDwyWopVL",
          CommunityHomeHeaderSubtitle: "_3QCfE7HVkS-jXMupL7Yw1g",
          AddFriendBtn: "iT6jDvjkaGUJBajHTCSwR",
          CommunityHomeHeaderContent: "_2OgY2oJ3f76jG54YDkv50a",
          AppHubsCtn: "O58NjOp-mp1C-Lp7kBnIv",
          Search: "r2myGP0jUBQpGPHfhdmNI",
          SearchBar: "BhYo9QBvxSZkbL835fMMt",
          InputContainer: "_8AoAYdWjlmxqtKLBHQhJ3",
          Input: "_1WV5gMjevy9p73E4rTI8ST",
          SearchIcon: "_2WLXg04_KtraVN3Oor_0Ab",
          SearchResultsCtn: "_23v0AdndBTSyI1M0hE-Ych",
          SearchResult: "_2f5QMmIxd8ttoAZBDPTPbI",
          AppHubShortcutsCtn: "_1BQW_8CTrPdSDSeREni4z5",
          AppHubTitle: "_1cmkhczo0dmSXCxOc_o1wi",
          AppHubShortcutLinks: "XhbenBCaP7IsSqg9LTU0K",
          ShortcutLink: "_12bMm2vWSzxZwD1nawoCDk",
          ShortcutImage: "irepMDTcqg6chiv6s2wpU",
          Divider: "_3sA9tFyrm7NsK9Vq3tR25D",
          TabContainer: "HY3YtM4tUrRbQjB6vZcZD",
          Tab: "_1oAgoNzRfQm9XWHkkgq1n5",
          ActiveTab: "_3Jb_4nYSDCuV7cqWpLbHFP",
          SortContainer: "_16DeiVTD4vxhf_NU37gQmq",
          Sort: "_1sg_EWgXdB6V6BWmPMyt1y",
          ActiveSort: "_3whf2vJwX5vpGwFaOsyA0P",
          SortIcon: "_2g7dImB7FKkKiEYpVTXCWb",
        };
      },
    },
  ]);
})();
