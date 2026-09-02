/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [976],
    {
      72845: (C, A, n) => {
        "use strict";
        n.r(A),
          n.d(A, {
            GreenEnvelope: () => L,
            default: () => k,
            useSteamNotifications: () => I,
          });
        var i = n(7850),
          g = n(99412),
          E = n(79365),
          R = n(65946),
          _ = n(90626),
          U = n(42993),
          y = n(3692),
          b = n(68312),
          B = n(16346),
          M = n(80862),
          T = n(56718),
          u = n(36118),
          f = n(36707),
          e = n(18210),
          t = n(98609),
          l = n(25792),
          c = n(29553),
          r = n.n(c),
          p = n(90297),
          K = n(95892);
        const m = new M.cE(),
          L = (0, l.Nr)(function (o) {
            const { bResponsiveHeader: s, notifications: d } = o;
            _.useEffect(() => {
              d && !m.m_bLoaded && m.ProcessNewNotificationPayload(d);
            }, [d]);
            const v = (0, b.KV)();
            (0, _.useEffect)(() => {
              m.setTransport(v),
                (window.RefreshSteamNotifications = () => z(v));
            }, [v]);
            const N = I();
            return s
              ? (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(j, {}), (0, i.jsx)(G, {})],
                })
              : (0, i.jsx)(w, { nTotalUnviewed: N.nUnviewed });
          });
        function I() {
          return (0, R.q3)(() => ({
            notifications: m.m_rgNotificationRollups,
            summary: m.m_summary,
            loaded: m.m_bLoaded,
            nUnviewed: m.m_nUnviewed,
          }));
        }
        function S() {
          const a = I(),
            o = (0, U.LH)(),
            { data: s } = (0, y.S0)(o),
            d = (0, y.BM)(),
            v = s == null ? void 0 : s.settings;
          return a.notifications.filter(
            (N) => !(0, M.jb)(N.type, v, d) && !(0, M.XT)(N.item),
          );
        }
        function w(a) {
          const { nTotalUnviewed: o } = a,
            s = _.useRef(null),
            d = S(),
            [v, N] = _.useState(r().AnimateBell);
          _.useEffect(() => {
            s.current ||
              ((s.current = (0, B.lX)(
                (0, i.jsx)(W, { popupRef: s }),
                document.getElementById("green_envelope_menu_root"),
                {
                  bPreferPopLeft: !0,
                  bOverlapHorizontal: !0,
                  strClassName: "GreenEnvelopeMenu",
                },
              )),
              s.current.Hide());
            const h = document.getElementById("header_notification_link");
            h && (h.style.cssText = "background-color: rgba(0,0,0,0)"),
              window.setTimeout(() => N(null), 2e3);
          }, []);
          const D = () => {
              var h, P;
              ((h = s.current) != null && h.visible) ||
                ((P = s.current) == null || P.Show(),
                d.findIndex((J) => !J.item.viewed) != -1 &&
                  m.MarkAllItemsViewed());
            },
            O = _.useCallback(
              (h) => {
                var P;
                !h && (P = s.current) != null && P.visible && s.current.Hide();
              },
              [s],
            );
          return (0, i.jsx)(K.J, {
            trigger: "repeated",
            onVisibilityChange: O,
            children: (0, i.jsx)("button", {
              onClick: D,
              id: "green_envelope_menu_root",
              className: (0, f.A)(
                r().NotificationsButton,
                o ? r().Green : r().Grey,
                v,
              ),
              children: (0, i.jsx)(T.$0s, {
                className: r().SVGNotifications,
                "aria-label": (0, e.we)("#NotificationsMenu_Title"),
              }),
            }),
          });
        }
        const W = (a) => {
            var o;
            const { popupRef: s } = a,
              d = _.useRef(null),
              [v, N] = _.useState(!1);
            _.useEffect(() => {
              var O, h;
              N(
                d.current != null &&
                  ((O = d.current) == null ? void 0 : O.scrollHeight) >
                    ((h = d.current) == null ? void 0 : h.clientHeight),
              );
            }, [(o = d.current) == null ? void 0 : o.scrollHeight, v]);
            const D = v ? void 0 : r().MenuScrollbarHidden;
            return (0, i.jsxs)("div", {
              className: r().NotificationsMenu,
              onClick: () => {
                var O;
                return (O = s == null ? void 0 : s.current) == null
                  ? void 0
                  : O.Hide();
              },
              children: [
                (0, i.jsx)(H, {}),
                (0, i.jsxs)("div", {
                  className: (0, f.A)(r().NotificationsMenuScrollable, D),
                  ref: d,
                  children: [
                    (0, i.jsx)(j, {}),
                    (0, i.jsx)($, {}),
                    (0, i.jsx)(Y, {}),
                  ],
                }),
              ],
            });
          },
          H = () => {
            const a = `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/notifications`;
            return (0, i.jsxs)("div", {
              className: (0, f.A)(r().NotificationHeader),
              children: [
                (0, i.jsx)("div", {
                  className: r().AllNotificationsTitle,
                  children: (0, e.we)("#NotificationsMenu_Title"),
                }),
                (0, i.jsx)("a", {
                  href: a,
                  children: (0, i.jsx)("div", {
                    className: r().AllNotificationsButton,
                    children: (0, e.we)("#NotificationsMenu_ViewAll"),
                  }),
                }),
              ],
            });
          },
          G = () => {
            const a = `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/notifications`;
            return (0, i.jsx)("div", {
              className: (0, f.A)(
                r().NotificationHeader,
                r().ResponsiveViewAll,
              ),
              children: (0, i.jsx)("a", {
                href: a,
                children: (0, i.jsx)("div", {
                  className: r().AllNotificationsButton,
                  children: (0, e.we)("#NotificationsMenu_ViewAll"),
                }),
              }),
            });
          };
        function V(a, o, s) {
          !o.read &&
            (!s || s.button == 0 || s.button == 1) &&
            o.notification_id &&
            m.MarkItemRead(o.notification_id),
            a();
        }
        function $() {
          const a = S();
          return a.length == 0
            ? null
            : (0, i.jsx)("div", {
                className: r().NotificationsMenuEntriesContainer,
                children: a.map((o, s) =>
                  (0, i.jsx)(
                    p.R1,
                    {
                      rollup: o,
                      onNotificationClick: V,
                      uimode: g.yrU,
                      location: g.B3I,
                    },
                    s,
                  ),
                ),
              });
        }
        const F = [
          {
            fnUrl: () =>
              `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/inventory/#pending_gifts`,
            countItem: "pending_gifts",
            icon: u.pD,
            strLocToken: "#Notification_NewGiftsPinned_Body",
            feature: E.ip,
          },
          {
            fnUrl: () =>
              `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/home/invites`,
            countItem: "pending_invites",
            icon: u.sdo,
            strLocToken: "#Notification_FriendInvitePinned_Body",
            feature: E.M,
          },
          {
            fnUrl: () =>
              `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/notifications#comments`,
            countItem: "comments",
            icon: u.MwB,
            strLocToken: "#Notification_NewCommentPinned_Body",
            feature: E.qR,
          },
          {
            fnUrl: () =>
              `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/inventory`,
            countItem: "inventory_items",
            icon: u.rI_,
            strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
            feature: E.WJ,
          },
          {
            fnUrl: () =>
              `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/tradeoffers`,
            countItem: "trade_offers",
            icon: u.h20,
            strLocToken: "#Notification_NewTradeOffersPinned_Body",
            feature: E.ut,
          },
          {
            fnUrl: () =>
              `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/gamenotifications`,
            countItem: "async_game_updates",
            icon: u.wC1,
            strLocToken: "#Notification_NewAsyncGamePinned_Body",
          },
          {
            fnUrl: () => `${t.TS.COMMUNITY_BASE_URL}my/moderatormessages`,
            countItem: "moderator_messages",
            icon: T.hJ4,
            strLocToken: "#Notification_NewModeratorMessagePinned_Body",
            feature: E.qR,
          },
          {
            fnUrl: () => `${t.TS.HELP_BASE_URL}wizard/HelpRequests`,
            countItem: "help_request_replies",
            icon: u.Cv4,
            strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
          },
          {
            fnUrl: () =>
              `${t.TS.STORE_BASE_URL}account/familymanagement/join?ft=${t.iA.steamid}`,
            countItem: "family_invites",
            icon: u.Qte,
            strLocToken: "#Notification_FamilyInvitePinned_Body",
          },
        ];
        function j() {
          const a = I();
          return (0, i.jsx)(i.Fragment, {
            children: F.map((o) =>
              (0, i.jsx)(
                p.QR,
                {
                  url: o.fnUrl(),
                  count: a.summary[o.countItem],
                  icon: o.icon,
                  strLocToken: o.strLocToken,
                  eFeature: o.feature,
                },
                o.countItem,
              ),
            ),
          });
        }
        function Y() {
          return (0, i.jsxs)("div", {
            className: r().EmptyNotificationsCtn,
            children: [
              (0, i.jsx)("div", {
                className: r().EmptyNotificationsTitle,
                children: (0, e.we)("#NotificationsList_EmptyTitle_New"),
              }),
              (0, i.jsx)("div", {
                className: r().EmptyNotificationsBody,
                children: (0, e.we)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        const k = L;
        async function z(a) {
          let o = null;
          try {
            o = await (0, M.tM)(
              a,
              t.iA.steamid,
              (0, g.sfN)(t.TS.LANGUAGE),
              void 0,
              !1,
              !1,
            );
          } catch {}
          o && m.ProcessNewNotificationPayload(o);
        }
      },
      95892: (C, A, n) => {
        "use strict";
        n.d(A, { J: () => u });
        var i = n(7850),
          g = n(19298),
          E = n(90626),
          R = n(82734),
          _ = n(54963),
          U = Object.defineProperty,
          y = Object.getOwnPropertyDescriptor,
          b = (f, e, t) =>
            e in f
              ? U(f, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (f[e] = t),
          B = (f, e, t, l) => {
            for (
              var c = l > 1 ? void 0 : l ? y(e, t) : e, r = f.length - 1, p;
              r >= 0;
              r--
            )
              (p = f[r]) && (c = (l ? p(e, t, c) : p(c)) || c);
            return l && c && U(e, t, c), c;
          },
          M = (f, e, t) => b(f, typeof e != "symbol" ? e + "" : e, t);
        const T = class x extends E.Component {
          constructor() {
            super(...arguments),
              M(this, "m_observer", null),
              M(this, "m_refElement", E.createRef()),
              M(this, "m_elTracked", null),
              M(this, "m_bPreviouslyIntersecting", !1);
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
            let t = this.m_refElement.current;
            if (
              (this.m_observer &&
                t != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && t)
            ) {
              let c = { root: this.FindScrollableAncestor(t) };
              this.props.rootMargin && (c.rootMargin = this.props.rootMargin),
                this.props.thresholds && (c.threshold = this.props.thresholds),
                (this.m_observer = (0, _.md)(t, this.OnIntersection, c));
            }
            this.m_observer &&
              t &&
              t != this.m_elTracked &&
              (this.m_observer.observe(t), (this.m_elTracked = t));
          }
          FindScrollableAncestor(e) {
            return R.Kf(e, (t) => {
              const l = this.props.horizontal
                ? window.getComputedStyle(t).overflowX
                : window.getComputedStyle(t).overflowY;
              return !!(
                l == "scroll" ||
                l == "auto" ||
                t.classList.contains(x.GetScrollableClassname())
              );
            });
          }
          HandleRef(e) {
            (0, _.cZ)(this.m_refElement, e),
              this.props.containerRef && (0, _.cZ)(this.props.containerRef, e);
          }
          OnIntersection(e, t) {
            let l = !1;
            for (const c of e)
              if (c.isIntersecting) {
                l = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != l &&
              ((this.m_bPreviouslyIntersecting = l),
              this.props.onVisibilityChange && this.props.onVisibilityChange(l),
              l && this.BTriggerOnce() && this.DestroyObserver());
          }
          render() {
            let {
              onVisibilityChange: e,
              rootMargin: t,
              trigger: l,
              horizontal: c,
              containerRef: r,
              ...p
            } = this.props;
            return (0, i.jsx)(g.Z, {
              ref: this.HandleRef,
              ...p,
              children: this.props.children,
            });
          }
        };
        B([_.oI], T.prototype, "HandleRef", 1),
          B([_.oI], T.prototype, "OnIntersection", 1);
        let u = T;
      },
      29553: (C) => {
        C.exports = {
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
