/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2092],
  {
    84202: (e) => {
      e.exports = {
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
    92598: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => v });
      var r = n(7850),
        a = n(90626),
        i = n(61859),
        s = n(84202),
        o = n.n(s),
        l = n(45699),
        c = n(78327),
        d = n(12155),
        u = n(68255),
        m = n(41735),
        p = n.n(m),
        _ = n(55263);
      var h = n(52038),
        S = n(16021),
        f = n(95034),
        H = n(92757),
        C = n(76217),
        b = n(12447);
      function v() {
        const e = (0, a.useRef)(void 0);
        return (
          (0, a.useEffect)(() => {
            e.current && e.current.TakeFocus();
          }, []),
          (0, r.jsx)(b.u, {
            navID: "CommunityHomeHeader",
            children: (0, r.jsxs)(C.Z, {
              navRef: e,
              className: o().CommunityHomeHeader,
              children: [
                (0, r.jsxs)("div", {
                  className: o().CommunityHomeHeaderTitleSection,
                  children: [
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("div", {
                          className: o().CommunityHomeHeaderTitle,
                          children: (0, i.we)("#Community_Home_Header_Title"),
                        }),
                        (0, r.jsx)("div", {
                          className: o().CommunityHomeHeaderSubtitle,
                          children: (0, i.we)(
                            "#Community_Home_Header_Subtitle",
                          ),
                        }),
                      ],
                    }),
                    (0, r.jsx)(l.Ii, {
                      className: o().AddFriendBtn,
                      href: `${c.TS.COMMUNITY_BASE_URL}search/users/`,
                      children: (0, i.we)(
                        "#Community_Home_Header_AddFriend_Button",
                      ),
                    }),
                  ],
                }),
                (0, r.jsx)(y, {}),
                (0, r.jsx)(A, {}),
              ],
            }),
          })
        );
      }
      function y() {
        const [e, t] = (0, a.useState)(""),
          [n, s] = (0, a.useState)([]),
          [m, h] = (0, a.useState)(!1),
          S = (function () {
            const e = (0, a.useMemo)(
                () => (0, c.Fd)("personalapps", "application_config") || [],
                [],
              ),
              t = (0, a.useMemo)(
                () => (0, c.Fd)("popularapps", "application_config") || [],
                [],
              ),
              n = [...e, ...t];
            if (n.length)
              return {
                isLoading: (0, _.zX)(n, { include_assets: !0 }) === _.Sq,
                data: { personalAppIds: e, popularAppIds: t },
              };
            return {
              isLoading: !1,
              data: { personalAppIds: e, popularAppIds: t },
            };
          })();
        if (S.isLoading) return null;
        return (0, r.jsxs)("div", {
          className: o().CommunityHomeHeaderContent,
          children: [
            (0, r.jsxs)(C.Z, {
              className: o().AppHubsCtn,
              children: [
                (0, r.jsx)(T, {
                  appShortcuts: S.data.personalAppIds,
                  sectionTitle: (0, i.we)(
                    "#Community_Home_Header_GameHubs_ForYou",
                  ),
                  withDivider: S.data.popularAppIds.length > 0,
                }),
                (0, r.jsx)(T, {
                  appShortcuts: S.data.popularAppIds,
                  sectionTitle: (0, i.we)(
                    "#Community_Home_Header_GameHubs_Popular",
                  ),
                }),
              ],
            }),
            (0, r.jsxs)(C.Z, {
              onFocus: () => h(!0),
              onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || h(!1);
              },
              className: o().Search,
              children: [
                (0, r.jsxs)(C.Z, {
                  className: o().SearchBar,
                  children: [
                    (0, r.jsx)("div", {
                      className: o().InputContainer,
                      children: (0, r.jsx)(u.pd, {
                        onChange: async (e) => {
                          t(e.target.value);
                          const n = await (async function (e) {
                            const t = `${c.TS.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
                            return (await p().get(t)).data;
                          })(e.target.value);
                          s(n);
                        },
                        value: e,
                        className: o().Input,
                        placeholder: (0, i.we)(
                          "#Community_Home_Header_FindGame_Placeholder",
                        ),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: o().SearchIcon,
                      children: (0, r.jsx)(d.eSy, {}),
                    }),
                  ],
                }),
                m &&
                  (0, r.jsx)(C.Z, {
                    className: o().SearchResultsCtn,
                    children: n.map((e) =>
                      (0, r.jsx)(
                        l.Ii,
                        {
                          href: `${c.TS.COMMUNITY_BASE_URL}app/${e.appid}`,
                          className: o().SearchResult,
                          children: e.name,
                        },
                        e.appid,
                      ),
                    ),
                  }),
              ],
            }),
          ],
        });
      }
      function T(e) {
        const { appShortcuts: t, sectionTitle: n, withDivider: a } = e;
        return t && t.length
          ? (0, r.jsxs)("div", {
              className: o().AppHubShortcutsCtn,
              children: [
                (0, r.jsx)("div", { className: o().AppHubTitle, children: n }),
                (0, r.jsx)("div", {
                  "flow-children": "row",
                  className: (0, h.A)(
                    o().AppHubShortcutLinks,
                    a ? o().Divider : null,
                  ),
                  children: t.map((e, t) => (0, r.jsx)(j, { appId: e }, t)),
                }),
              ],
            })
          : null;
      }
      function j(e) {
        const t = S.A.Get().GetApp(e.appId);
        return t
          ? (0, r.jsx)(l.Ii, {
              className: o().ShortcutLink,
              href: `${c.TS.COMMUNITY_BASE_URL}app/${e.appId}`,
              children: (0, r.jsx)("img", {
                className: o().ShortcutImage,
                src: t.GetAssets().GetLibraryCapsuleURL(),
              }),
            })
          : null;
      }
      const w = "subsection",
        x = "browsefilter";
      function A() {
        const e = (0, H.W6)(),
          t = (0, f.f3)(e, w),
          n = (0, f.f3)(e, x);
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)(g, { activeTab: t, activeSort: n }),
            (0, r.jsx)(I, { activeTab: t, activeSort: n }),
          ],
        });
      }
      function g(e) {
        const { activeTab: t, activeSort: n } = e,
          s = a.useRef(void 0);
        a.useEffect(() => {
          const e = document.getElementById(t);
          if (e && (null == s ? void 0 : s.current)) {
            const t = e.offsetLeft + e.clientWidth;
            t > window.innerWidth &&
              s.current.scrollBy(t - window.innerWidth, 0);
          }
        }, [null == s ? void 0 : s.current]);
        return (0, r.jsx)(C.Z, {
          "flow-children": "row",
          className: o().TabContainer,
          ref: s,
          children: [
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
          ].map((e, a) => {
            const s = t ? t === e.id : 0 === a,
              d = e.id ? `${w}=${e.id}` : "",
              u = n ? `${x}=${n}` : "",
              m = `${c.TS.COMMUNITY_BASE_URL}${u || d ? "?" : ""}${u}${d ? "&" : ""}${d}`;
            return (0, r.jsx)(
              l.Ii,
              {
                id: e.id,
                href: m,
                className: (0, h.A)(o().Tab, s ? o().ActiveTab : null),
                children: (0, i.we)(e.label),
              },
              e.id,
            );
          }),
        });
      }
      function I(e) {
        const { activeTab: t, activeSort: n } = e;
        return (0, r.jsxs)(C.Z, {
          "flow-children": "row",
          className: o().SortContainer,
          children: [
            (0, r.jsx)("div", {
              className: o().SortIcon,
              children: (0, r.jsx)(d.LPs, {}),
            }),
            [
              { label: "#Community_Home_Header_BrowseFilter_Popular", id: "" },
              {
                label: "#Community_Home_Header_BrowseFilter_Recent",
                id: "mostrecent",
              },
            ].map((e, a) => {
              const s = n ? n === e.id : 0 === a,
                d = t ? `${w}=${t}` : "",
                u = e.id ? `${x}=${e.id}` : "",
                m = `${c.TS.COMMUNITY_BASE_URL}${u || d ? "?" : ""}${u}${d ? "&" : ""}${d}`;
              return (0, r.jsx)(
                l.Ii,
                {
                  href: m,
                  className: (0, h.A)(o().Sort, s ? o().ActiveSort : null),
                  children: (0, i.we)(e.label),
                },
                e.id,
              );
            }),
          ],
        });
      }
    },
    12447: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => d });
      var r = n(7850),
        a = n(8871),
        i = n(90626),
        s = n(78327),
        o = n(85585),
        l = n(7445),
        c = n(87133);
      const d = i.forwardRef(function (e, t) {
        const { children: n, navTreeRef: d, ...u } = e,
          m = i.useRef(void 0),
          p = (0, a.Ue)(m, d),
          _ = (0, s.Qn)(),
          h = (0, c.AO)("__nav_tree_root");
        return (0, r.jsx)(o.B2, {
          ...u,
          navTreeRef: p,
          ref: t,
          parentEmbeddedNavTree: h,
          disabledRoot: !_,
          historyMode: "navigationapi",
          children: (0, r.jsx)(l.q, { disableFocusRing: !_, children: n }),
        });
      });
    },
    95034: (e, t, n) => {
      "use strict";
      n.d(t, { Bm: () => s, QD: () => o, f3: () => i, ip: () => l });
      var r = n(90626),
        a = n(92757);
      function i(e, t) {
        let n;
        if ("string" == typeof e) n = e;
        else if ("location" in e) n = e.location.search;
        else {
          if (!("search" in e)) return;
          n = e.search;
        }
        const r = new URLSearchParams(n.substring(1));
        if (r.has(t)) {
          const e = r.getAll(t);
          return e[e.length - 1];
        }
      }
      function s(e, t, n, r = !1) {
        const a = new URLSearchParams(e.location.search.substring(1));
        if (null != n && null != n) {
          if (a.get(t) == n) return;
          a.set(t, n);
        } else {
          if (!a.has(t)) return;
          a.delete(t);
        }
        r
          ? e.replace(`?${a.toString()}`, { ...e.location.state })
          : e.push(`?${a.toString()}`);
      }
      function o(e, t) {
        const n = (0, a.W6)(),
          o = (0, a.zy)(),
          l = (0, r.useMemo)(() => {
            const n = i(o.search, e);
            return null != n && null != n
              ? null != t && null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [o.search, e, t]),
          c = (0, r.useCallback)(
            (t, r = !1) => {
              s(n, e, null != t && null != t ? String(t) : null, r);
            },
            [n, e],
          );
        return [l, c];
      }
      function l(e, t, n = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            r.delete(e), null != n && null != n && r.append(e, n);
          }
        n
          ? e.replace(`?${r.toString()}`, { ...e.location.state })
          : e.push(`?${r.toString()}`);
      }
    },
  },
]);
