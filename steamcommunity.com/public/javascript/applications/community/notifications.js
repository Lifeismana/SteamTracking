/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6893],
  {
    68e3: (t) => {
      t.exports = {
        narrowWidth: "500px",
        notificationRowHeight: "72px",
        NotificationPageCtn: "_2DCeN21MQJGwVpPCXcT2QJ",
        NotificationsBody: "_35hlMprL--UdgfHJGuGnJR",
        NotificationsHeader: "_1bLYafVT6_4DisbgdimwXc",
        NotificationsHeaderTitle: "_39iFFMnPRQXd5IL6PGoOcn",
        NotificationsHeaderUnread: "_3iXuG9K_6ttnP8gOhOR7Iv",
        NotificationListCtn: "_1cj-7JmCC_IQ4ZdxxUo43Q",
        NotificationsList: "KG3qM6Y1DpK-afn15yeaT",
        AllNotificationsRowCtn: "_3Y-y3pAcXpqgpuUTLQkz86",
        NotificationFiltersCtn: "_1uSw_aqus0W7yb3vT9_-22",
        EmptyNotifications: "_3t24BJeKfB-KBIct4_UuX8",
        EmptyNotificationsTitle: "_uGFLI7t_2emsn37l93hZ",
        EmptyNotificationsBody: "_3Iomc0Ep9lyBB_QNlE8p4n",
        SettingsButtons: "_3B7mJdJw-FhqV6l5q-IFO_",
        SettingsTooltip: "_3ZlbZ5ev0L-hcx-z4JItgd",
        MarkAllReadButton: "_37UjwIEFODwKdnz3d90mdF",
        SettingsButton: "T8q00Eg6Sx2u-N2ySzMrg",
        SettingsImg: "_1XXJX0-wXgz7O3Bd0qimBX",
        SettingsFiltersTitle: "_4T-jWhXP-AWt4AatyamIk",
        SettingsFilters: "_1YDIAzUAWf7ueOLgHLbGeF",
        FilterCheckbox: "_2C4dM9ELcMmtBLz8SavLK4",
        ResetButton: "_3Z8otCycVht4XocANv_EPb",
        CommentIcon: "o_I3vYqgbLhw7c8iXVwb3",
        CommentFilterCtn: "-GWy_nsP_d9rJnCNgx8NK",
        AdvancedCommentFilters: "irq6koPKVmtQ5H7U8EAoA",
        Expanded: "_2hRRl_cNi9X4Veh7FeK-F4",
        CommentRadioGroup: "_2_xVHbSZ7fCv3LUz-THkR5",
        Expander: "MjW-ILAVK028V2xI8eCfW",
        NotificationActions: "_3R-McPl3j1ANvRa0U9reMV",
      };
    },
    32664: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => Z });
      var s,
        n = i(7850),
        o = i(90626),
        r = i(37340),
        a = i(88080),
        c = i(78327),
        l = i(30470),
        d = i(12155),
        m = i(22837),
        h = i(23809),
        p = i(68255),
        f = i(61859),
        u = i(68e3),
        y = i.n(u),
        _ = i(34629),
        N = i(14947),
        F = i(65946),
        g = i(68950),
        x = i(25489),
        v = i(60011);
      !(function (t) {
        (t[(t.k_All = 0)] = "k_All"),
          (t[(t.k_Owned = 1)] = "k_Owned"),
          (t[(t.k_Subscribed = 2)] = "k_Subscribed");
      })(s || (s = {}));
      class C {
        constructor() {
          (this.rgFilterState = new Map()),
            (this.commentFilter = {
              type: s.k_All,
              setItemTypes: new Set([]),
              fnFilter: () => !0,
            }),
            (this.k_rgFilterCheckboxes = [
              {
                type: r.Vv.v_,
                display: (0, f.we)("#NotificationsFilters_Comments"),
                hash: "comments",
              },
              {
                type: r.Vv.XJ,
                display: (0, f.we)("#NotificationsFilters_Wishlist"),
                hash: "wishlist",
              },
              {
                type: r.Vv.pZ,
                display: (0, f.we)("#NotificationsFilters_FriendRequest"),
                hash: "invites",
              },
              {
                type: r.Vv.K,
                display: (0, f.we)("#NotificationsFilters_Gifts"),
                hash: "gifts",
              },
              {
                type: r.Vv.hW,
                display: (0, f.we)("#NotificationsFilters_Inventory"),
                hash: "inventory",
              },
              {
                type: r.Vv.Y9,
                display: (0, f.we)("#NotificationsFilters_AsyncGame"),
                hash: "asyncgame",
              },
              {
                type: r.Vv.wY,
                display: (0, f.we)("#NotificationsFilters_HelpRequest"),
                hash: "help",
              },
              {
                type: r.Vv.an,
                display: (0, f.we)("#NotificationsFilters_TradeOffer"),
                hash: "trade",
              },
              {
                type: r.Vv.e9,
                display: (0, f.we)("#NotificationsFilters_General"),
                hash: "general",
              },
            ]),
            (this.k_rgCommentFilters = [
              {
                type: s.k_All,
                display: (0, f.we)("#NotificationsList_CommentFilters_All"),
                fnFilter: () => !0,
              },
              {
                type: s.k_Owned,
                display: (0, f.we)(
                  "#NotificationsList_CommentFilters_YourItems",
                ),
                fnFilter: this.IsCommentOwned,
              },
              {
                type: s.k_Subscribed,
                display: (0, f.we)(
                  "#NotificationsList_CommentFilters_Subscribed",
                ),
                fnFilter: this.IsCommentSubscribed,
              },
            ]),
            (0, N.Gn)(this);
        }
        IsCommentOwned(t, e) {
          return t.bis_owner || t.owner_steam_id.ConvertTo64BitString() == e;
        }
        IsCommentSubscribed(t, e) {
          return t.bsubscribed;
        }
        ProcessHash(t) {
          if (
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear(),
            t)
          ) {
            t.split(",").forEach((t) => {
              const e = this.k_rgFilterCheckboxes.findIndex((e) => e.hash == t);
              -1 !== e
                ? this.rgFilterState.set(this.k_rgFilterCheckboxes[e].type, !0)
                : (0, x.TG)(t) &&
                  this.rgFilterState.has(r.Vv.v_) &&
                  this.commentFilter.setItemTypes.add(parseInt(t));
            });
          }
        }
        SetFilter(t, e, i) {
          i &&
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear()),
            t &&
              (this.rgFilterState.set(t, e),
              t != r.Vv.v_ || e || this.commentFilter.setItemTypes.clear()),
            this.UpdateLocationHash();
        }
        SetCommentFilter(t) {
          var e;
          (this.commentFilter = t),
            (this.commentFilter.fnFilter =
              null ===
                (e = this.k_rgCommentFilters.find((e) => e.type == t.type)) ||
              void 0 === e
                ? void 0
                : e.fnFilter),
            this.UpdateLocationHash();
        }
        UpdateLocationHash() {
          let t = "";
          this.rgFilterState.forEach((e, i) => {
            var s;
            e &&
              (t +=
                (t ? "," : "") +
                (null ===
                  (s = this.k_rgFilterCheckboxes.find((t) => t.type == i)) ||
                void 0 === s
                  ? void 0
                  : s.hash));
          }),
            this.rgFilterState.has(r.Vv.v_) &&
              this.commentFilter.setItemTypes.forEach(
                (e) => (t += (t ? "," : "") + e),
              ),
            window.history.pushState(
              {},
              null,
              window.location.pathname + (t ? "#" + t : ""),
            );
        }
      }
      function w() {
        (0, F.q3)(() => [...b.rgFilterState]);
        let t = 0;
        return (
          b.rgFilterState.forEach((e) => {
            t += e ? 1 : 0;
          }),
          { numActive: t, filters: b.rgFilterState }
        );
      }
      function k() {
        return (0, F.q3)(() => b.commentFilter);
      }
      function j() {
        return o.useMemo(() => {
          const t = new Map();
          for (const e of I.m_rgNotificationRollups.filter(
            (t) => t.type == r.Vv.v_,
          )) {
            const i = (0, a.bP)(e);
            t.set(i.comment_type, 1 + (t.get(i.comment_type) || 0));
          }
          return t;
        }, []);
      }
      function S() {
        const { numActive: t, filters: e } = w(),
          i = k(),
          n = (0, g.LH)(),
          { settings: o } = (0, v.S0)(n).data,
          c = (0, v.BM)();
        return (
          (0, F.q3)(() => (0, a.PI)(I.m_summary)),
          I.m_rgNotificationRollups.filter((l) => {
            if (t && !e.get(l.type)) return !1;
            if ((0, a.jb)(l.type, o, c)) return !1;
            if (
              t &&
              l.type == r.Vv.v_ &&
              (i.type != s.k_All || i.setItemTypes.size > 0)
            ) {
              const t = (0, a.bP)(l);
              let e = !i.fnFilter || i.fnFilter(t, n);
              return (
                i.setItemTypes.size > 0 &&
                  !i.setItemTypes.has(t.comment_type) &&
                  (e = !1),
                e
              );
            }
            return !0;
          })
        );
      }
      (0, _.Cg)([N.sH], C.prototype, "rgFilterState", void 0),
        (0, _.Cg)([N.sH], C.prototype, "commentFilter", void 0);
      const b = new C(),
        I = new a.cE();
      var T = i(76217),
        A = i(73745),
        L = i(52038),
        E = i(16264),
        R = i(32630),
        V = i(45699);
      function B(t) {
        const { hash: e } = t;
        (0, o.useEffect)(() => {
          b.ProcessHash(e);
        }, [e]);
        const i = (0, h.KV)();
        (0, o.useEffect)(() => {
          I.setTransport(i), I.m_nUnviewed > 0 && I.MarkAllItemsViewed();
        }, [i]);
        const s = (0, c.Tc)("notifications", "application_config");
        return (
          I.ProcessNewNotificationPayload(s),
          I.m_rgNotificationRollups.length
            ? (0, n.jsx)(n.Fragment, {
                children: (0, n.jsxs)("div", {
                  className: y().NotificationPageCtn,
                  children: [
                    (0, n.jsxs)("div", {
                      className: y().NotificationsHeader,
                      children: [
                        (0, n.jsx)("span", {
                          className: y().NotificationsHeaderTitle,
                          children: (0, f.we)("#NotificationsList_Header"),
                        }),
                        (0, n.jsx)(H, {}),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: y().NotificationsBody,
                      children: [
                        (0, n.jsx)("div", {
                          className: y().NotificationListCtn,
                          children: (0, n.jsx)(M, {}),
                        }),
                        (0, n.jsxs)("div", {
                          className: y().NotificationFiltersCtn,
                          children: [
                            (0, n.jsx)(U, {}),
                            (0, n.jsx)("div", {
                              className: y().NotificationActions,
                              children: (0, n.jsx)(V.Ii, {
                                href: "/my/moderatormessages",
                                children: (0, f.we)("#CommunityActivity"),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, n.jsx)("div", {
                className: y().NotificationPageCtn,
                children: (0, n.jsx)(P, {}),
              })
        );
      }
      function H() {
        const t = (function () {
            const t = S(),
              e = (0, a.V8)();
            return (
              t.map((t) => {
                var i;
                t.item.hidden ||
                  (0, a.kE)(
                    e,
                    t.type,
                    null === (i = t.rgunread) || void 0 === i
                      ? void 0
                      : i.length,
                  );
              }),
              (0, a.PI)(e)
            );
          })(),
          e = (0, f.we)("#NotificationsList_Unread", t);
        return (0, n.jsx)("span", {
          className: y().NotificationsHeaderUnread,
          children: e,
        });
      }
      function M() {
        const t = S();
        return (0, n.jsx)(T.Z, {
          className: y().NotificationsList,
          children: t.map((t, e) => (0, n.jsx)(z, { rollup: t }, e)),
        });
      }
      function P() {
        return (0, n.jsxs)(T.Z, {
          className: y().EmptyNotifications,
          children: [
            (0, n.jsx)(T.Z, {
              className: y().EmptyNotificationsTitle,
              children: (0, f.we)("#NotificationsList_EmptyTitle"),
            }),
            (0, n.jsx)(T.Z, {
              className: y().EmptyNotificationsBody,
              children: (0, f.we)("#NotificationsList_EmptyBody"),
            }),
          ],
        });
      }
      function U() {
        const t = S(),
          e = o.useMemo(() => {
            const t = new Map();
            for (const e of I.m_rgNotificationRollups)
              t.set(e.type, 1 + (t.get(e.type) || 0));
            return t;
          }, []);
        return (0, n.jsxs)("div", {
          className: y().NotificationsFilterCtn,
          children: [
            (0, n.jsxs)("div", {
              className: y().SettingsButtons,
              children: [
                (0, n.jsx)("div", {
                  className: y().SettingsTooltip,
                  children: (0, n.jsx)(p.$n, {
                    className: y().MarkAllReadButton,
                    onClick: () => I.MarkAllItemsRead(t),
                    children: (0, f.we)("#NotificationsList_MarkAllRead"),
                  }),
                }),
                (0, n.jsxs)(p.$n, {
                  className: y().SettingsButton,
                  onClick: () =>
                    window.location.assign(
                      `${l.TS.STORE_BASE_URL}account/notificationsettings`,
                    ),
                  children: [
                    (0, n.jsx)(d.wB_, { className: y().SettingsImg }),
                    (0, f.we)("#NotificationsList_Settings"),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: y().SettingsFiltersTitle,
              children: (0, f.we)("#NotificationsList_FilterTo"),
            }),
            (0, n.jsx)("div", {
              className: y().SettingsFilters,
              children: b.k_rgFilterCheckboxes
                .filter((t) => e.has(t.type))
                .map((t) => (0, n.jsx)(O, { filterOptions: t }, t.type)),
            }),
            (0, n.jsx)(p.$n, {
              className: y().ResetButton,
              onClick: () => b.SetFilter(null, !1, !0),
              children: (0, f.we)("#NotificationsList_Reset"),
            }),
          ],
        });
      }
      function O(t) {
        const { filterOptions: e } = t,
          { filters: i } = w();
        return e.type == r.Vv.v_
          ? (0, n.jsx)(Y, { filterOptions: e, checked: i.get(e.type) })
          : (0, n.jsx)(
              p.Yh,
              {
                className: y().FilterCheckbox,
                label: e.display,
                checked: i.get(e.type),
                onChange: (t) => b.SetFilter(e.type, t),
              },
              e.type,
            );
      }
      function X(t) {
        const { threadType: e } = t,
          i = k();
        return (0, n.jsx)(p.Yh, {
          className: y().AdvancedCommentFilterCheckbox,
          label: (0, f.we)("#CommentThreadType_" + e),
          checked: i.setItemTypes.has(e),
          onChange: (t) => {
            t
              ? (i.setItemTypes.add(Number(e)),
                b.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }))
              : (i.setItemTypes.delete(Number(e)),
                b.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }));
          },
        });
      }
      function q(t) {
        const { className: e } = t,
          i = j();
        return (0, n.jsx)("div", {
          className: (0, L.A)(y().AdvancedCommentFilters, e),
          children: Array.from(i.keys()).map((t) =>
            (0, n.jsx)(X, { threadType: t }, t),
          ),
        });
      }
      function G(t) {
        const { expanded: e, children: i } = t,
          [s, r] = (0, o.useState)(void 0),
          a = (0, A.wY)((t) => {
            const e = t.target;
            r(e.scrollHeight);
          });
        return (0, n.jsx)("div", {
          className: (0, L.A)(y().Expander, y().Expanded),
          style: { height: e ? s : 0 },
          children: (0, n.jsx)("div", { ref: a, children: i }),
        });
      }
      function Y(t) {
        const { filterOptions: e, checked: i } = t,
          s = (function () {
            const t = (0, g.LH)();
            return o.useMemo(() => {
              const e = new Map();
              for (const i of b.k_rgCommentFilters)
                for (const s of I.m_rgNotificationRollups.filter(
                  (t) => t.type == r.Vv.v_,
                )) {
                  const n = (0, a.bP)(s);
                  i.fnFilter(n, t) && e.set(i.type, 1 + (e.get(i.type) || 0));
                }
              return e;
            }, [t]);
          })(),
          c = j(),
          l = s.size > 2,
          d = c.size > 1,
          m = l || d;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(
              p.Yh,
              {
                className: y().FilterCheckbox,
                label: e.display,
                checked: i,
                onChange: (t) => {
                  b.SetFilter(e.type, t);
                },
              },
              e.type,
            ),
            m &&
              (0, n.jsx)("div", {
                className: (0, L.A)(y().CommentFilterCtn, i && y().Expanded),
                children: (0, n.jsx)(G, {
                  expanded: i,
                  children: (0, n.jsx)("div", {
                    className: y().CommentFilters,
                    children: d && (0, n.jsx)(q, { className: y().Expanded }),
                  }),
                }),
              }),
          ],
        });
      }
      function K(t, e, i) {
        e.read ||
          (i && 0 != i.button && 1 != i.button) ||
          I.MarkItemRead(e.notification_id),
          t();
      }
      function z(t) {
        const { rollup: e } = t;
        (0, F.q3)(() => e.item.hidden);
        const [i, s] = o.useState(!1),
          c = (0, A.BL)(
            (0, o.useCallback)((t) => {
              t.isIntersecting && s(!0);
            }, []),
            { rootMargin: "600px" },
          ),
          l = (0, o.useCallback)(() => {
            I.MarkItemHidden(e.item.notification_id);
          }, [e.item.notification_id]);
        if (e.item.hidden) return null;
        if (e.item.hidden && e.type == r.Vv.pZ) {
          const t = (0, a.bP)(e);
          if ((0, m.aPS)(t.state) || t.state == m.Yjh) return null;
        }
        const d = (0, E.Rd)(e.type);
        return d
          ? (0, n.jsx)(R.Ay, {
              controller: "notification",
              method: (0, m.fLp)(m.yrU),
              submethod: (0, m.ey3)(m.oYe),
              children: (0, n.jsx)(J, {
                ref: c,
                children:
                  i &&
                  (0, n.jsx)(d, {
                    rollup: e,
                    onNotificationClick: K,
                    onHide: l,
                    location: m.oYe,
                    uimode: m.yrU,
                  }),
              }),
            })
          : null;
      }
      const J = o.forwardRef((t, e) =>
        (0, n.jsx)("div", {
          className: y().AllNotificationsRowCtn,
          ref: e,
          children: t.children,
        }),
      );
      function Z(t) {
        let e = t.location.hash;
        return (
          e && e.startsWith("#") && (e = e.slice(1)), (0, n.jsx)(B, { hash: e })
        );
      }
    },
  },
]);
