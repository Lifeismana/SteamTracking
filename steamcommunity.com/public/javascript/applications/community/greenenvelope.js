/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [20976],
    {
      81944: (B, T, i) => {
        "use strict";
        i.d(T, { J: () => h });
        var t = i(7850),
          g = i(19298),
          v = i(90626),
          y = i(79089),
          f = i(18938),
          I = i(2259),
          P = Object.defineProperty,
          D = (M, e, n) =>
            e in M
              ? P(M, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (M[e] = n),
          E = (M, e, n) => D(M, typeof e != "symbol" ? e + "" : e, n);
        class h extends v.Component {
          constructor() {
            super(...arguments),
              E(this, "m_observer", null),
              E(this, "m_refElement", v.createRef()),
              E(this, "m_elTracked", null),
              E(this, "m_bPreviouslyIntersecting", !1),
              E(this, "HandleRef", (e) => {
                (0, f.cZ)(this.m_refElement, e),
                  this.props.containerRef &&
                    (0, f.cZ)(this.props.containerRef, e);
              }),
              E(this, "OnIntersection", (e) => {
                let n = !1;
                for (const c of e)
                  if (c.isIntersecting) {
                    n = !0;
                    break;
                  }
                this.m_bPreviouslyIntersecting != n &&
                  ((this.m_bPreviouslyIntersecting = n),
                  this.props.onVisibilityChange &&
                    this.props.onVisibilityChange(n),
                  n && this.BTriggerOnce() && this.DestroyObserver());
              });
          }
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
          }
          GetBoundingClientRect() {
            return this.m_refElement.current
              ? this.m_refElement.current.getBoundingClientRect()
              : null;
          }
          DestroyObserver() {
            this.m_observer &&
              (this.m_observer.disconnect(),
              (this.m_observer = null),
              (this.m_elTracked = null));
          }
          componentWillUnmount() {
            this.DestroyObserver();
          }
          componentDidMount() {
            this.UpdateObserver(null);
          }
          componentDidUpdate(e) {
            this.UpdateObserver(e);
          }
          UpdateObserver(e) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              e &&
              (e.rootMargin != this.m_observer.rootMargin ||
                e.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let n = this.m_refElement.current;
            if (
              (this.m_observer &&
                n != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && n)
            ) {
              let o = { root: this.FindScrollableAncestor(n) };
              this.props.rootMargin && (o.rootMargin = this.props.rootMargin),
                this.props.thresholds && (o.threshold = this.props.thresholds),
                (this.m_observer = (0, I.md)(n, this.OnIntersection, o));
            }
            this.m_observer &&
              n &&
              n != this.m_elTracked &&
              (this.m_observer.observe(n), (this.m_elTracked = n));
          }
          FindScrollableAncestor(e) {
            return (0, y.Kf)(e, (n) => {
              const c = this.props.horizontal
                ? window.getComputedStyle(n).overflowX
                : window.getComputedStyle(n).overflowY;
              return !!(
                c == "scroll" ||
                c == "auto" ||
                n.classList.contains(h.GetScrollableClassname())
              );
            });
          }
          render() {
            let {
              onVisibilityChange: e,
              rootMargin: n,
              trigger: c,
              horizontal: o,
              containerRef: R,
              ...C
            } = this.props;
            return (0, t.jsx)(g.Z, {
              ref: this.HandleRef,
              ...C,
              children: this.props.children,
            });
          }
        }
      },
      72845: (B, T, i) => {
        "use strict";
        i.r(T),
          i.d(T, {
            GreenEnvelope: () => b,
            default: () => Y,
            useSteamNotifications: () => A,
          });
        var t = i(7850),
          g = i(99412),
          v = i(79365),
          y = i(65946),
          f = i(90626),
          I = i(42993),
          P = i(3692),
          D = i(68312),
          E = i(16346),
          h = i(80862),
          M = i(56718),
          e = i(36118),
          n = i(36707),
          c = i(18210),
          o = i(98609),
          R = i(25792),
          C = i(29553),
          l = i.n(C),
          L = i(90297),
          x = i(81944);
        const d = new h.cE(),
          b = (0, R.Nr)(function (s) {
            const { bResponsiveHeader: r, notifications: _ } = s;
            f.useEffect(() => {
              _ && !d.m_bLoaded && d.ProcessNewNotificationPayload(_);
            }, [_]);
            const u = (0, D.KV)();
            (0, f.useEffect)(() => {
              d.setTransport(u),
                (window.RefreshSteamNotifications = () => k(u));
            }, [u]);
            const N = A();
            return r
              ? (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(j, {}), (0, t.jsx)(H, {})],
                })
              : (0, t.jsx)(K, { nTotalUnviewed: N.nUnviewed });
          });
        function A() {
          return (0, y.q3)(() => ({
            notifications: d.m_rgNotificationRollups,
            summary: d.m_summary,
            loaded: d.m_bLoaded,
            nUnviewed: d.m_nUnviewed,
          }));
        }
        function S() {
          const a = A(),
            s = (0, I.LH)(),
            { data: r } = (0, P.S0)(s),
            _ = (0, P.BM)(),
            u = r == null ? void 0 : r.settings;
          return a.notifications.filter(
            (N) => !(0, h.jb)(N.type, u, _) && !(0, h.XT)(N.item),
          );
        }
        function K(a) {
          const { nTotalUnviewed: s } = a,
            r = f.useRef(null),
            _ = S(),
            [u, N] = f.useState(l().AnimateBell);
          f.useEffect(() => {
            r.current ||
              ((r.current = (0, E.lX)(
                (0, t.jsx)(W, { popupRef: r }),
                document.getElementById("green_envelope_menu_root"),
                {
                  bPreferPopLeft: !0,
                  bOverlapHorizontal: !0,
                  strClassName: "GreenEnvelopeMenu",
                },
              )),
              r.current.Hide());
            const m = document.getElementById("header_notification_link");
            m && (m.style.cssText = "background-color: rgba(0,0,0,0)"),
              window.setTimeout(() => N(null), 2e3);
          }, []);
          const U = () => {
              var m, O;
              ((m = r.current) != null && m.visible) ||
                ((O = r.current) == null || O.Show(),
                _.findIndex((z) => !z.item.viewed) != -1 &&
                  d.MarkAllItemsViewed());
            },
            p = f.useCallback(
              (m) => {
                var O;
                !m && (O = r.current) != null && O.visible && r.current.Hide();
              },
              [r],
            );
          return (0, t.jsx)(x.J, {
            trigger: "repeated",
            onVisibilityChange: p,
            children: (0, t.jsx)("button", {
              onClick: U,
              id: "green_envelope_menu_root",
              className: (0, n.A)(
                l().NotificationsButton,
                s ? l().Green : l().Grey,
                u,
              ),
              children: (0, t.jsx)(M.$0s, {
                className: l().SVGNotifications,
                "aria-label": (0, c.we)("#NotificationsMenu_Title"),
              }),
            }),
          });
        }
        const W = (a) => {
            var s;
            const { popupRef: r } = a,
              _ = f.useRef(null),
              [u, N] = f.useState(!1);
            f.useEffect(() => {
              var p, m;
              N(
                _.current != null &&
                  ((p = _.current) == null ? void 0 : p.scrollHeight) >
                    ((m = _.current) == null ? void 0 : m.clientHeight),
              );
            }, [(s = _.current) == null ? void 0 : s.scrollHeight, u]);
            const U = u ? void 0 : l().MenuScrollbarHidden;
            return (0, t.jsxs)("div", {
              className: l().NotificationsMenu,
              onClick: () => {
                var p;
                return (p = r == null ? void 0 : r.current) == null
                  ? void 0
                  : p.Hide();
              },
              children: [
                (0, t.jsx)(w, {}),
                (0, t.jsxs)("div", {
                  className: (0, n.A)(l().NotificationsMenuScrollable, U),
                  ref: _,
                  children: [
                    (0, t.jsx)(j, {}),
                    (0, t.jsx)($, {}),
                    (0, t.jsx)(F, {}),
                  ],
                }),
              ],
            });
          },
          w = () => {
            const a = `${o.TS.COMMUNITY_BASE_URL}profiles/${o.iA.steamid}/notifications`;
            return (0, t.jsxs)("div", {
              className: (0, n.A)(l().NotificationHeader),
              children: [
                (0, t.jsx)("div", {
                  className: l().AllNotificationsTitle,
                  children: (0, c.we)("#NotificationsMenu_Title"),
                }),
                (0, t.jsx)("a", {
                  href: a,
                  children: (0, t.jsx)("div", {
                    className: l().AllNotificationsButton,
                    children: (0, c.we)("#NotificationsMenu_ViewAll"),
                  }),
                }),
              ],
            });
          },
          H = () => {
            const a = `${o.TS.COMMUNITY_BASE_URL}profiles/${o.iA.steamid}/notifications`;
            return (0, t.jsx)("div", {
              className: (0, n.A)(
                l().NotificationHeader,
                l().ResponsiveViewAll,
              ),
              children: (0, t.jsx)("a", {
                href: a,
                children: (0, t.jsx)("div", {
                  className: l().AllNotificationsButton,
                  children: (0, c.we)("#NotificationsMenu_ViewAll"),
                }),
              }),
            });
          };
        function G(a, s, r) {
          !s.read &&
            (!r || r.button == 0 || r.button == 1) &&
            s.notification_id &&
            d.MarkItemRead(s.notification_id),
            a();
        }
        function $() {
          const a = S();
          return a.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: l().NotificationsMenuEntriesContainer,
                children: a.map((s, r) =>
                  (0, t.jsx)(
                    L.R1,
                    {
                      rollup: s,
                      onNotificationClick: G,
                      uimode: g.yrU,
                      location: g.B3I,
                    },
                    r,
                  ),
                ),
              });
        }
        const V = [
          {
            fnUrl: () =>
              `${o.TS.COMMUNITY_BASE_URL}profiles/${o.iA.steamid}/inventory/#pending_gifts`,
            countItem: "pending_gifts",
            icon: e.pD,
            strLocToken: "#Notification_NewGiftsPinned_Body",
            feature: v.ip,
          },
          {
            fnUrl: () =>
              `${o.TS.COMMUNITY_BASE_URL}profiles/${o.iA.steamid}/home/invites`,
            countItem: "pending_invites",
            icon: e.sdo,
            strLocToken: "#Notification_FriendInvitePinned_Body",
            feature: v.M,
          },
          {
            fnUrl: () =>
              `${o.TS.COMMUNITY_BASE_URL}profiles/${o.iA.steamid}/notifications#comments`,
            countItem: "comments",
            icon: e.MwB,
            strLocToken: "#Notification_NewCommentPinned_Body",
            feature: v.qR,
          },
          {
            fnUrl: () =>
              `${o.TS.COMMUNITY_BASE_URL}profiles/${o.iA.steamid}/inventory`,
            countItem: "inventory_items",
            icon: e.rI_,
            strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
            feature: v.WJ,
          },
          {
            fnUrl: () =>
              `${o.TS.COMMUNITY_BASE_URL}profiles/${o.iA.steamid}/tradeoffers`,
            countItem: "trade_offers",
            icon: e.h20,
            strLocToken: "#Notification_NewTradeOffersPinned_Body",
            feature: v.ut,
          },
          {
            fnUrl: () =>
              `${o.TS.COMMUNITY_BASE_URL}profiles/${o.iA.steamid}/gamenotifications`,
            countItem: "async_game_updates",
            icon: e.wC1,
            strLocToken: "#Notification_NewAsyncGamePinned_Body",
          },
          {
            fnUrl: () => `${o.TS.COMMUNITY_BASE_URL}my/moderatormessages`,
            countItem: "moderator_messages",
            icon: M.hJ4,
            strLocToken: "#Notification_NewModeratorMessagePinned_Body",
            feature: v.qR,
          },
          {
            fnUrl: () => `${o.TS.HELP_BASE_URL}wizard/HelpRequests`,
            countItem: "help_request_replies",
            icon: e.Cv4,
            strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
          },
          {
            fnUrl: () =>
              `${o.TS.STORE_BASE_URL}account/familymanagement/join?ft=${o.iA.steamid}`,
            countItem: "family_invites",
            icon: e.Qte,
            strLocToken: "#Notification_FamilyInvitePinned_Body",
          },
        ];
        function j() {
          const a = A();
          return (0, t.jsx)(t.Fragment, {
            children: V.map((s) =>
              (0, t.jsx)(
                L.QR,
                {
                  url: s.fnUrl(),
                  count: a.summary[s.countItem],
                  icon: s.icon,
                  strLocToken: s.strLocToken,
                  eFeature: s.feature,
                },
                s.countItem,
              ),
            ),
          });
        }
        function F() {
          return (0, t.jsxs)("div", {
            className: l().EmptyNotificationsCtn,
            children: [
              (0, t.jsx)("div", {
                className: l().EmptyNotificationsTitle,
                children: (0, c.we)("#NotificationsList_EmptyTitle_New"),
              }),
              (0, t.jsx)("div", {
                className: l().EmptyNotificationsBody,
                children: (0, c.we)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        const Y = b;
        async function k(a) {
          let s = null;
          try {
            s = await (0, h.tM)(
              a,
              o.iA.steamid,
              (0, g.sfN)(o.TS.LANGUAGE),
              void 0,
              !1,
              !1,
            );
          } catch {}
          s && d.ProcessNewNotificationPayload(s);
        }
      },
      29553: (B) => {
        B.exports = {
          NotificationsMenu: "_3EPagkYPxulGbe-5invUhK",
          NotificationsMenuEntriesContainer: "m0H4PhlsBcw0NzlQje7q",
          NotificationsMenuScrollable: "_2hgxpK_sWS7mDF66uPetpF",
          MenuScrollbarHidden: "_2Qeur5RWXHnW-xneBJUfH-",
          NotificationHeader: "_1Uh_y1atXoMOUxGyUQK8vC",
          ResponsiveViewAll: "_2q-LyEsEZpxFZBbqO07xgp",
          AllNotificationsTitle: "-Dpw5WXg2gjckpFAkP_lg",
          AllNotificationsButton: "_1OH7OiFxIJo5Y7Z4Z6U6iO",
          NotificationsButton: "_1jW5_Ycv6jGKu28A1OSIQK",
          SVGNotifications: "_13fwmIK8Ajo0qndUS5zb7E",
          Grey: "_34A9kjlnmgfUWSmr16VjXE",
          Disabled: "_3h1sV2qrp20U37VwC47pM2",
          Green: "_2Hpe0_DGY0TBz45Lg0zUr9",
          AnimateBell: "_34o7mvTYzowbNAllqYUQuJ",
          NotificationBellAnimation: "_3W6ngOzFfcJJpftaQ5t9bk",
          NotificationBellUvula: "xpAr9gP3YAkKomrGUivf8",
          EmptyNotificationsCtn: "_2a4xLIvDI3rmLxVfLMQFTz",
          EmptyNotificationsTitle: "_2SIA4NMfduV_HWDptv6cAK",
          EmptyNotificationsBody: "EpEznkfiKxcqI9p52OmRx",
        };
      },
    },
  ]);
})();
