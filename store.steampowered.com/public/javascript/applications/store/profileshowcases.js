/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [45004],
    {
      99449: (f, p, o) => {
        "use strict";
        o.r(p), o.d(p, { ProfileShowcasesPage: () => g, default: () => B });
        var s = o(7850),
          x = o(90626),
          j = o(75844),
          h = o(5108),
          G = o(64399),
          u = o(23903),
          S = o(36636),
          m = o(18210),
          d = o(37939),
          v = o(30992),
          w = o(32819),
          C = o(78175);
        const I =
          o.p +
          "images/applications/store/showcases_header_image.svg?v=valveisgoodatcaching";
        var U = Object.defineProperty,
          y = Object.getOwnPropertyDescriptor,
          z = (e, l, c, i) => {
            for (
              var t = i > 1 ? void 0 : i ? y(l, c) : l, n = e.length - 1, a;
              n >= 0;
              n--
            )
              (a = e[n]) && (t = (i ? a(l, c, t) : a(t)) || t);
            return i && t && U(l, c, t), t;
          };
        const N = (e) =>
            (0, s.jsx)(w.y7, {
              ...e,
              onClick: (l) =>
                (0, C.Xw)(
                  l,
                  e.customization_type,
                  e.current_level,
                  e.desired_level,
                ),
            }),
          D = (e) =>
            (0, s.jsx)(w.y2, {
              ...e,
              onClick: (l) =>
                (0, C.rE)(
                  l,
                  e.customization_type,
                  e.purchased_count,
                  e.current_level,
                ),
            }),
          b = (e) =>
            (0, s.jsx)(u.az, {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "small",
              className: h.PageContainer,
              children: (0, s.jsx)("img", {
                src: I,
                className: G.ProfileShowcaseHeaderImage,
              }),
            }),
          E = (e) => {
            const {
              point_cost: l,
              upgradable_showcases: c,
              purchased_upgrades: i,
            } = e;
            let t = new Map();
            c.forEach((a) => {
              t.set(a, 1);
            }),
              i &&
                i.forEach((a) => {
                  t.set(a.customization_type, a.level);
                });
            let n = c.map((a) => {
              const P = t.get(a),
                r = P + 1;
              return (0, s.jsx)(
                N,
                {
                  point_cost: l,
                  customization_type: a,
                  current_level: P,
                  desired_level: r,
                },
                a,
              );
            });
            return (0, s.jsx)(u.BJ, {
              className: h.PageItemsContainer,
              itemClassName: h.PageItemsContainerChildren,
              spacing: "xlarge",
              children: (0, s.jsx)(v.Gq, {
                title: (0, m.we)("#ProfileShowcases_Upgrades_Title"),
                subtitle: (0, m.we)("#ProfileShowcases_Upgrades_Subtitle"),
                children: n,
              }),
            });
          },
          Z = (e) => {
            const {
              point_cost: l,
              purchasable_showcases: c,
              purchased_showcases: i,
              purchased_upgrades: t,
            } = e;
            let n = new Map(),
              a = new Map();
            c.forEach((r) => {
              n.set(r, 0), a.set(r, 1);
            }),
              i &&
                i.forEach((r) => {
                  n.set(r.customization_type, r.count);
                }),
              t &&
                t.forEach((r) => {
                  a.set(r.customization_type, r.level);
                });
            let P = c.map((r) =>
              (0, s.jsx)(
                D,
                {
                  point_cost: l,
                  current_level: a.get(r),
                  customization_type: r,
                  purchased_count: n.get(r),
                },
                r,
              ),
            );
            return (0, s.jsx)(u.BJ, {
              className: h.PageItemsContainer,
              itemClassName: h.PageItemsContainerChildren,
              spacing: "xlarge",
              children: (0, s.jsx)(v.Gq, {
                title: (0, m.we)("#ProfileShowcases_Slots_Title"),
                subtitle: (0, m.we)("#ProfileShowcases_Slots_Subtitle"),
                children: P,
              }),
            });
          };
        let g = class extends x.Component {
          render() {
            let e = d.DZ.Get().GetUpgradableProfileShowcaseCost(),
              l = d.DZ.Get().GetUpgradableProfileShowcases(),
              c = d.DZ.Get().GetUpgradedProfileCustomizations(),
              i = d.DZ.Get().GetPurchasableProfileShowcaseSlotCost(),
              t = d.DZ.Get().GetPurchasableProfileShowcaseSlots(),
              n = d.DZ.Get().GetPurchasedProfileCustomizations();
            return (0, s.jsx)(S.jy, {
              children: (0, s.jsxs)(u.BJ, {
                className: h.PageItemsContainer,
                itemClassName: h.PageItemsContainerChildren,
                spacing: "xlarge",
                children: [
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)(S.Ch, {
                      title: (0, m.we)("#ShopPageTitle_ProfileShowcases"),
                    }),
                  }),
                  (0, s.jsx)(b, {}),
                  (0, s.jsx)(E, {
                    point_cost: e,
                    upgradable_showcases: l,
                    purchased_upgrades: c,
                  }),
                  (0, s.jsx)(Z, {
                    point_cost: i,
                    purchasable_showcases: t,
                    purchased_showcases: n,
                    purchased_upgrades: c,
                  }),
                  this.props.children,
                ],
              }),
            });
          }
        };
        g = z([j.PA], g);
        const B = g;
      },
      64399: (f) => {
        f.exports = {
          ProfileShowcaseHeaderImage: "_2tjUy9meAE2vNIP6iYBRVU",
          ShowcaseSubhead: "_2BmNvI5oqx2_EjWNkstqPt",
        };
      },
    },
  ]);
})();
