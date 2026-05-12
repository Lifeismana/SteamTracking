/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [976],
  {
    29553: (e) => {
      e.exports = {
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
    24830: (e, t, i) => {
      "use strict";
      i.r(t),
        i.d(t, {
          GreenEnvelope: () => A,
          default: () => R,
          useSteamNotifications: () => w,
        });
      var n = i(7850),
        o = i(22837),
        s = i(9344),
        r = i(65946),
        l = i(90626),
        c = i(68950),
        a = i(60011),
        d = i(23809),
        u = i(88997),
        m = i(88080),
        f = i(4869),
        _ = i(12155),
        h = i(52038),
        p = i(61859),
        v = i(30470),
        N = i(84811),
        g = i(29553),
        b = i.n(g),
        y = i(16264),
        T = i(60383);
      const U = new m.cE(),
        A = (0, N.Nr)(function (e) {
          const { bResponsiveHeader: t, notifications: i } = e;
          l.useEffect(() => {
            i && !U.m_bLoaded && U.ProcessNewNotificationPayload(i);
          }, [i]);
          const s = (0, d.KV)();
          (0, l.useEffect)(() => {
            U.setTransport(s),
              (window.RefreshSteamNotifications = () =>
                (async function (e) {
                  let t = null;
                  try {
                    t = await (0, m.tM)(
                      e,
                      v.iA.steamid,
                      (0, o.sfN)(v.TS.LANGUAGE),
                      void 0,
                      !1,
                      !1,
                    );
                  } catch (e) {}
                  t && U.ProcessNewNotificationPayload(t);
                })(s));
          }, [s]);
          const r = w();
          return t
            ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(C, {}), (0, n.jsx)(x, {})],
              })
            : (0, n.jsx)(S, { nTotalUnviewed: r.nUnviewed });
        });
      function w() {
        return (0, r.q3)(() => ({
          notifications: U.m_rgNotificationRollups,
          summary: U.m_summary,
          loaded: U.m_bLoaded,
          nUnviewed: U.m_nUnviewed,
        }));
      }
      function M() {
        const e = w(),
          t = (0, c.LH)(),
          { data: i } = (0, a.S0)(t),
          n = (0, a.BM)(),
          o = null == i ? void 0 : i.settings;
        return e.notifications.filter(
          (e) => !(0, m.jb)(e.type, o, n) && !(0, m.XT)(e.item),
        );
      }
      function S(e) {
        const { nTotalUnviewed: t } = e,
          i = l.useRef(null),
          o = M(),
          [s, r] = l.useState(b().AnimateBell);
        l.useEffect(() => {
          i.current ||
            ((i.current = (0, u.lX)(
              (0, n.jsx)(B, { popupRef: i }),
              document.getElementById("green_envelope_menu_root"),
              {
                bPreferPopLeft: !0,
                bOverlapHorizontal: !0,
                strClassName: "GreenEnvelopeMenu",
              },
            )),
            i.current.Hide());
          const e = document.getElementById("header_notification_link");
          e && (e.style.cssText = "background-color: rgba(0,0,0,0)"),
            window.setTimeout(() => r(null), 2e3);
        }, []);
        const c = l.useCallback(
          (e) => {
            var t;
            !e &&
              (null === (t = i.current) || void 0 === t ? void 0 : t.visible) &&
              i.current.Hide();
          },
          [i],
        );
        return (0, n.jsx)(T.J, {
          trigger: "repeated",
          onVisibilityChange: c,
          children: (0, n.jsx)("button", {
            onClick: () => {
              var e, t;
              if (
                !(null === (e = i.current) || void 0 === e ? void 0 : e.visible)
              ) {
                null === (t = i.current) || void 0 === t || t.Show();
                -1 != o.findIndex((e) => !e.item.viewed) &&
                  U.MarkAllItemsViewed();
              }
            },
            id: "green_envelope_menu_root",
            className: (0, h.A)(
              b().NotificationsButton,
              t ? b().Green : b().Grey,
              s,
            ),
            children: (0, n.jsx)(f.$0s, {
              className: b().SVGNotifications,
              "aria-label": (0, p.we)("#NotificationsMenu_Title"),
            }),
          }),
        });
      }
      const B = (e) => {
          var t;
          const { popupRef: i } = e,
            o = l.useRef(null),
            [s, r] = l.useState(!1);
          l.useEffect(() => {
            var e, t;
            r(
              null != o.current &&
                (null === (e = o.current) || void 0 === e
                  ? void 0
                  : e.scrollHeight) >
                  (null === (t = o.current) || void 0 === t
                    ? void 0
                    : t.clientHeight),
            );
          }, [
            null === (t = o.current) || void 0 === t ? void 0 : t.scrollHeight,
            s,
          ]);
          const c = s ? void 0 : b().MenuScrollbarHidden;
          return (0, n.jsxs)("div", {
            className: b().NotificationsMenu,
            onClick: () => {
              var e;
              return null === (e = null == i ? void 0 : i.current) ||
                void 0 === e
                ? void 0
                : e.Hide();
            },
            children: [
              (0, n.jsx)(I, {}),
              (0, n.jsxs)("div", {
                className: (0, h.A)(b().NotificationsMenuScrollable, c),
                ref: o,
                children: [
                  (0, n.jsx)(C, {}),
                  (0, n.jsx)(k, {}),
                  (0, n.jsx)(L, {}),
                ],
              }),
            ],
          });
        },
        I = () => {
          const e = `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/notifications`;
          return (0, n.jsxs)("div", {
            className: (0, h.A)(b().NotificationHeader),
            children: [
              (0, n.jsx)("div", {
                className: b().AllNotificationsTitle,
                children: (0, p.we)("#NotificationsMenu_Title"),
              }),
              (0, n.jsx)("a", {
                href: e,
                children: (0, n.jsx)("div", {
                  className: b().AllNotificationsButton,
                  children: (0, p.we)("#NotificationsMenu_ViewAll"),
                }),
              }),
            ],
          });
        },
        x = () => {
          const e = `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/notifications`;
          return (0, n.jsx)("div", {
            className: (0, h.A)(b().NotificationHeader, b().ResponsiveViewAll),
            children: (0, n.jsx)("a", {
              href: e,
              children: (0, n.jsx)("div", {
                className: b().AllNotificationsButton,
                children: (0, p.we)("#NotificationsMenu_ViewAll"),
              }),
            }),
          });
        };
      function E(e, t, i) {
        t.read ||
          (i && 0 != i.button && 1 != i.button) ||
          !t.notification_id ||
          U.MarkItemRead(t.notification_id),
          e();
      }
      function k() {
        const e = M();
        return 0 == e.length
          ? null
          : (0, n.jsx)("div", {
              className: b().NotificationsMenuEntriesContainer,
              children: e.map((e, t) =>
                (0, n.jsx)(
                  y.R1,
                  {
                    rollup: e,
                    onNotificationClick: E,
                    uimode: o.yrU,
                    location: o.B3I,
                  },
                  t,
                ),
              ),
            });
      }
      const j = [
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/inventory/#pending_gifts`,
          countItem: "pending_gifts",
          icon: _.pD,
          strLocToken: "#Notification_NewGiftsPinned_Body",
          feature: s.ip,
        },
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/home/invites`,
          countItem: "pending_invites",
          icon: _.sdo,
          strLocToken: "#Notification_FriendInvitePinned_Body",
          feature: s.M,
        },
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/notifications#comments`,
          countItem: "comments",
          icon: _.MwB,
          strLocToken: "#Notification_NewCommentPinned_Body",
          feature: s.qR,
        },
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/inventory`,
          countItem: "inventory_items",
          icon: _.rI_,
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          feature: s.WJ,
        },
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/tradeoffers`,
          countItem: "trade_offers",
          icon: _.h20,
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          feature: s.ut,
        },
        {
          fnUrl: () =>
            `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/gamenotifications`,
          countItem: "async_game_updates",
          icon: _.wC1,
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
        },
        {
          fnUrl: () => `${v.TS.COMMUNITY_BASE_URL}my/moderatormessages`,
          countItem: "moderator_messages",
          icon: f.hJ4,
          strLocToken: "#Notification_NewModeratorMessagePinned_Body",
          feature: s.qR,
        },
        {
          fnUrl: () => `${v.TS.HELP_BASE_URL}wizard/HelpRequests`,
          countItem: "help_request_replies",
          icon: _.Cv4,
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
        },
        {
          fnUrl: () =>
            `${v.TS.STORE_BASE_URL}account/familymanagement/join?ft=${v.iA.steamid}`,
          countItem: "family_invites",
          icon: _.Qte,
          strLocToken: "#Notification_FamilyInvitePinned_Body",
        },
      ];
      function C() {
        const e = w();
        return (0, n.jsx)(n.Fragment, {
          children: j.map((t) =>
            (0, n.jsx)(
              y.QR,
              {
                url: t.fnUrl(),
                count: e.summary[t.countItem],
                icon: t.icon,
                strLocToken: t.strLocToken,
                eFeature: t.feature,
              },
              t.countItem,
            ),
          ),
        });
      }
      function L() {
        return (0, n.jsxs)("div", {
          className: b().EmptyNotificationsCtn,
          children: [
            (0, n.jsx)("div", {
              className: b().EmptyNotificationsTitle,
              children: (0, p.we)("#NotificationsList_EmptyTitle_New"),
            }),
            (0, n.jsx)("div", {
              className: b().EmptyNotificationsBody,
              children: (0, p.we)("#NotificationsList_EmptyBody"),
            }),
          ],
        });
      }
      const R = A;
    },
    60383: (e, t, i) => {
      "use strict";
      i.d(t, { J: () => c });
      var n = i(34629),
        o = i(7850),
        s = i(90626),
        r = i(56011),
        l = i(73745);
      class c extends s.Component {
        constructor() {
          super(...arguments),
            (this.m_observer = null),
            (this.m_refElement = s.createRef()),
            (this.m_elTracked = null),
            (this.m_bPreviouslyIntersecting = !1);
        }
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
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
              (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && t)
          ) {
            let e = { root: this.FindScrollableAncestor(t) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              this.props.thresholds && (e.threshold = this.props.thresholds),
              (this.m_observer = (0, l.md)(t, this.OnIntersection, e));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return r.Kf(e, (e) => {
            const t = this.props.horizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(c.GetScrollableClassname())
            );
          });
        }
        OnIntersection(e, t) {
          let i = !1;
          for (const t of e)
            if (t.isIntersecting) {
              i = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != i &&
            ((this.m_bPreviouslyIntersecting = i),
            this.props.onVisibilityChange && this.props.onVisibilityChange(i),
            i && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let {
            onVisibilityChange: e,
            rootMargin: t,
            trigger: i,
            horizontal: n,
            ...s
          } = this.props;
          return (0, o.jsx)("div", {
            ref: this.m_refElement,
            ...s,
            children: this.props.children,
          });
        }
      }
      (0, n.Cg)([l.oI], c.prototype, "OnIntersection", null);
    },
  },
]);
