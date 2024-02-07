/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [680],
  {
    40843: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        CategorySectionsCtn: "categoriesapp_CategorySectionsCtn_YuXds",
        CategorySection: "categoriesapp_CategorySection_2MUQ8",
        CategorySectionName: "categoriesapp_CategorySectionName_2Vnsy",
        CategoriesCtn: "categoriesapp_CategoriesCtn_3yuPy",
        Category: "categoriesapp_Category_1uwcZ",
        GridOuter: "categoriesapp_GridOuter_3Q4XM",
        Grid: "categoriesapp_Grid_3anY0",
        CategoryName: "categoriesapp_CategoryName_3VNsE",
        TopLevelCategory: "categoriesapp_TopLevelCategory_2ZYjR",
      };
    },
    13043: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var a = n(85556),
        r = n(47427),
        o = n(82493),
        c = n(4030),
        s = n(20417),
        i = n(37563),
        u = n(35643);
      function l(e) {
        const { children: t, navTreeRef: n } = e,
          l = (0, a._T)(e, ["children", "navTreeRef"]),
          g = r.useRef(),
          m = (0, s.BE)(g, n),
          d = (0, i.id)(),
          E = window.__virtual_keyboard_client;
        if (d) {
          const e = window.__nav_tree_root;
          return r.createElement(
            o.Fe,
            Object.assign({}, l, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(
              u.o5,
              { factory: E },
              r.createElement(c.O, null, t),
            ),
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    74606: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => l });
      var a = n(85556),
        r = n(47427),
        o = n(8285),
        c = (n(20417), n(22671)),
        s = n(91618),
        i = n(41003);
      const u = "FocusNavHistoryID";
      function l(e) {
        const { children: t, timeoutMS: n } = e,
          l = (0, a._T)(e, ["children", "timeoutMS"]),
          g = (function (e = 2) {
            const t = (0, o.k6)(),
              n = r.useRef(),
              a = (0, o.TH)(),
              s = (0, i.k0)(),
              l = a.state && a.state[u],
              g = r.useRef();
            return (
              r.useLayoutEffect(() => {
                if (!n.current) return;
                const e = n.current;
                return e
                  .Node()
                  .Tree.WindowContext.FocusChangedCallbacks.Register(
                    (n, a, r) => {
                      const o = t.location;
                      let i = o.state && o.state[u];
                      i ||
                        ((i = s
                          ? `State_${o.key}`
                          : `State_${e.Node().Tree.id}`),
                        (g.current = i),
                        t.replace(
                          Object.assign(Object.assign({}, t.location), {
                            state: Object.assign(Object.assign({}, o.state), {
                              [u]: i,
                            }),
                          }),
                        )),
                        g.current == i &&
                          (s
                            ? e.SaveState(i)
                            : window.history.replaceState(
                                Object.assign(
                                  Object.assign({}, window.history.state),
                                  { [i]: (0, c.Sp)(e.Node()) },
                                ),
                                null,
                              ));
                    },
                  ).Unregister;
              }, [t, s]),
              r.useLayoutEffect(() => {
                var t;
                if (n.current && g.current != l) {
                  const a = n.current.NavTree().DeferredFocus;
                  a.SuppressFocus();
                  const r = s
                      ? null
                      : null === (t = window.history.state) || void 0 === t
                        ? void 0
                        : t[l],
                    o = window.setTimeout(() => {
                      let e = !1;
                      s
                        ? (e = n.current.RestoreState(l, 1))
                        : r && ((0, c.$y)(n.current.Node(), r, 0), (e = !0)),
                        e ? a.Reset() : a.ExecuteQueuedFocus(),
                        (g.current = l);
                    }, e);
                  return () => {
                    window.clearTimeout(o), a.ExecuteQueuedFocus();
                  };
                }
              }, [l, t, s, e]),
              n
            );
          })(n);
        return r.createElement(
          s.s,
          Object.assign(Object.assign({}, l), { navRef: g }),
          t,
        );
      }
    },
    98079: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => y });
      var a = n(47427),
        r = n(82493),
        o = n(13043),
        c = n(91618),
        s = n(47144),
        i = n(3783),
        u = n(74606),
        l = n(41130),
        g = n(47242),
        m = n(13129),
        d = n(37563),
        E = n(40843);
      class p {
        GetSections() {
          return this.m_rgSections;
        }
        static Get() {
          return p.s_singleton || (p.s_singleton = new p()), p.s_singleton;
        }
        constructor() {
          this.m_rgSections = (0, d.kQ)("categories", "application_config");
        }
      }
      function _(e) {
        const { section: t, autoFocus: n } = e,
          r = (0, d.id)(),
          o = a.createElement(
            "div",
            { className: E.CategorySection },
            a.createElement(
              "span",
              { className: E.CategorySectionName },
              t.name,
            ),
            a.createElement(
              s.P8,
              {
                className: E.CategoriesCtn,
                scrollDirection: "x",
                navEntryPreferPosition: i.c4.MAINTAIN_X,
                navKey: "cat_section" + t.name,
              },
              t.categories.map((t, n) =>
                a.createElement(v, {
                  key: "category" + t.name,
                  category: t,
                  autoFocus: e.autoFocus && 0 === n,
                }),
              ),
            ),
          );
        return r ? o : a.createElement(g.Y, { placeholderHeight: "150px" }, o);
      }
      function v(e) {
        const { category: t } = e;
        return a.createElement(
          c.s,
          {
            focusableIfNoChildren: !0,
            autoFocus: e.autoFocus,
            navKey: "cat_panel" + t.name,
          },
          a.createElement(
            r.IS,
            {
              href: d.De.STORE_BASE_URL + t.url,
              className: (0, m.Z)({
                [E.Category]: !0,
                [E.TopLevelCategory]: t.is_toplevel_genre,
              }),
            },
            a.createElement(
              "span",
              { className: E.CategoryName },
              a.createElement("span", null, t.name),
            ),
            a.createElement(f, Object.assign({}, e)),
          ),
        );
      }
      function f(e) {
        let { category: t } = e;
        return a.createElement(
          "div",
          { className: E.GridOuter },
          a.createElement(
            "div",
            { className: E.Grid },
            a.createElement("img", { src: d.De.STORE_BASE_URL + t.image_url }),
          ),
        );
      }
      const y = function () {
        const { sections: e } = (function () {
            const e = p.Get(),
              [t, n] = (0, a.useState)(e.GetSections());
            return { sections: t };
          })(),
          t = (0, l.L)(),
          n = a.useRef();
        return (
          a.useEffect(() => {
            var e;
            return null === (e = n.current) || void 0 === e
              ? void 0
              : e.Activate(!0);
          }, []),
          a.createElement(
            o.p,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: n },
            a.createElement(
              u.g,
              { timeoutMS: 1e3 },
              a.createElement(
                "div",
                { className: E.CategorySectionsCtn },
                e.map((e, t) =>
                  a.createElement(_, {
                    key: "section" + e.name,
                    section: e,
                    autoFocus: 0 == t,
                  }),
                ),
              ),
            ),
          )
        );
      };
    },
    13854: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => v });
      var a = n(47427),
        r = n(13043),
        o = n(74606),
        c = n(51688),
        s = n(35427),
        i = n(41130),
        u = n(82071),
        l = n(41769),
        g = n(7765),
        m = n.n(g),
        d = n(46882),
        E = n(31846),
        p = n(37563),
        _ = n(55163);
      function v(e) {
        return a.createElement(
          _.n,
          { bSalePage: !0 },
          a.createElement(f, Object.assign({}, e)),
        );
      }
      function f(e) {
        const { promotionName: t, language: n } = e,
          [g, _] = a.useState(
            u.j1.GetClanEventFromAnnouncementGID(p.Wj.ANNOUNCEMENT_GID),
          ),
          v = (0, i.L)();
        if (
          (a.useEffect(() => {
            if (
              (null == g ? void 0 : g.AnnouncementGID) != p.Wj.ANNOUNCEMENT_GID
            ) {
              const e = new s.K(p.JA.CLANSTEAMID);
              u.j1
                .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                  e,
                  p.Wj.ANNOUNCEMENT_GID,
                  null,
                )
                .then(_);
            }
          }, [g]),
          !g)
        )
          return a.createElement(
            "div",
            { className: m().FlexCenter, style: { height: "500px" } },
            a.createElement(d.V, {
              size: "medium",
              string: (0, E.Xx)("#Loading"),
            }),
          );
        const f = g.visibility_state !== c.ac.k_EEventStateVisible;
        return a.createElement(
          r.p,
          { navID: "StoreSalePageRoot", NavigationManager: v },
          a.createElement(
            o.g,
            { timeoutMS: 1e3 },
            a.createElement(l.oS, {
              promotionName: t,
              language: n,
              eventModel: g,
              bIsPreview: f,
            }),
          ),
        );
      }
    },
  },
]);
