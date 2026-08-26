/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [73687],
  {
    56330: (e) => {
      e.exports = {
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
    93474: (e) => {
      e.exports = {
        ListsCtn: "tBftQdkNwMsCS3Jnef1UH",
        EntryList: "_2XXQSmtLL-udq2lLiHeB6Q",
        Entry: "_1Cd1TJ4SgK5DkDNbI-USUL",
        Active: "bYXdHZaVexq93H1xDBGqm",
        Label: "dI3ijAItl10LuKeR9XCdK",
        UnpublishedState: "_1tt9jL7Dj8I6_LezFi2Zgv",
        PublishedAndNotSelectedState: "_2XhRaA3elALg0OQnynUZu4",
        SelectedSVG: "_3Niy5UbG2M3zTi6wUY2jda",
        HeaderRow: "_2PLSeE9RayjVbZKYqcszIq",
        ManageButton: "_2F5-HSU7JNjiVuDm_h_I4D",
        MustPublish: "oUfRC_JxvbarFSmiUwBCn",
        ActionsRow: "_27NYV-vucABpZz6K_oGGgu",
        SVGIcon: "_3jIkQOyf1K28G5lxJiiDkV",
      };
    },
    32803: (e, t, n) => {
      "use strict";
      n.d(t, {
        Bw: () => L,
        EX: () => y,
        Hx: () => T,
        JP: () => C,
        LJ: () => f,
        OG: () => x,
        PH: () => r,
        T7: () => I,
        tj: () => H,
        yh: () => A,
      });
      var r,
        o = n(7850),
        a = n(27939),
        s = n(22837),
        i = n(45699),
        c = n(60014),
        l = n(90626),
        u = n(92757),
        d = n(55963),
        m = n(26161),
        _ = n(16180),
        S = n(81393),
        p = n(61336),
        v = n(78327),
        w = n(71420),
        h = n(39777),
        k = n(66418),
        E = n(78686);
      !(function (e) {
        (e.k_eView = "view"),
          (e.k_eViewWebSiteHub = "websitehub"),
          (e.k_eCommunityView = "communityview"),
          (e.k_eCommunityEdit = "edit"),
          (e.k_eCommunityEditBroadcast = "editBroadcast"),
          (e.k_eCommunityAdminPage = "admin"),
          (e.k_eCommunityPublish = "publish"),
          (e.k_eCommunityMigrate = "migrate"),
          (e.k_eCommunityPreview = "preview"),
          (e.k_eCommunityPreviewSale = "previewsale"),
          (e.k_eCommunityAnnouncementHub = "community_announcehub"),
          (e.k_eStoreView = "storeview"),
          (e.k_eStoreNewsHub = "newshub"),
          (e.k_eStoreOwnerPage = "store"),
          (e.k_eStoreSalePage = "sale"),
          (e.k_eStoreUsersNewsHub = "usernewshub");
      })(r || (r = {}));
      const g =
        /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
      function b(e, t) {
        if (!t) return !1;
        const n = "store" === (0, v.yK)(),
          o = (function (e) {
            const t = e.match(g);
            return t?.[1];
          })(window.location.href),
          a = n && "news" == o,
          i = t.GetEventType() == s.ajI,
          c = "community" === (0, v.yK)(),
          l = t.appid ? "games" : "groups",
          u =
            c &&
            l == o &&
            ((t.appid && t.appid === v.UF.APPID) ||
              (!t.appid &&
                t.clanSteamID.GetAccountID() === v.UF.CLANACCOUNTID));
        switch (e) {
          case r.k_eView:
            return u || a;
          case r.k_eCommunityView:
          case r.k_eCommunityEdit:
          case r.k_eCommunityEditBroadcast:
          case r.k_eCommunityPublish:
          case r.k_eCommunityMigrate:
          case r.k_eCommunityPreview:
          case r.k_eCommunityPreviewSale:
          case r.k_eCommunityAnnouncementHub:
            return u;
          case r.k_eCommunityAdminPage:
            return !i && u;
          case r.k_eViewWebSiteHub:
            return u || a;
          case r.k_eStoreView:
          case r.k_eStoreNewsHub:
          case r.k_eStoreOwnerPage:
          case r.k_eStoreUsersNewsHub:
            return a;
          case r.k_eStoreSalePage:
            return !1;
          default:
            return (0, S.wT)(!1, "Unknown route specified for link: " + e), !1;
        }
      }
      function C(e) {
        const t =
          k.TS.COMMUNITY_BASE_URL +
          "gid/" +
          e.clanSteamID.ConvertTo64BitString() +
          "/announcements/share/" +
          e.AnnouncementGID;
        return {
          strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
          strTwitterUrl: t + "?site=twitter",
          strRedditUrl: t + "?site=reddit",
        };
      }
      function y(e) {
        return j(e, r.k_eStoreSalePage, "absolute");
      }
      function I(e) {
        return j(e, r.k_eStoreView, "absolute");
      }
      function D(e, t, n) {
        if (n)
          return (
            (e ? "/games/" + v.UF.VANITY_ID : "/groups/" + v.UF.VANITY_ID) + "/"
          );
        const r = e ? "ogg/" + e : "gid/" + t.ConvertTo64BitString();
        return k.TS.COMMUNITY_BASE_URL + r + "/";
      }
      function f() {
        return "news";
      }
      function j(e, t, n) {
        const { data: r } = (0, h.J$)(e?.appid ? { appid: e.appid } : void 0);
        if (e) return A(e, r, t, n);
      }
      function A(e, t, n, o) {
        const i = "relative" === o,
          c = "community" === (0, v.yK)(),
          l = i ? "/" : k.TS.STORE_BASE_URL,
          u = D(e.appid, e.clanSteamID, i);
        n === r.k_eView
          ? (n = c ? r.k_eCommunityView : r.k_eStoreView)
          : n === r.k_eViewWebSiteHub &&
            (n = c ? r.k_eCommunityAnnouncementHub : r.k_eStoreNewsHub);
        const d = e.GID ? e.GID : "",
          _ = e.AnnouncementGID ? e.AnnouncementGID : "",
          p =
            e.BIsOGGEvent() &&
            e.appid &&
            t &&
            e.BHasSaleUpdateLandingPageVanity(),
          h = e.GetEventType() == s.ajI;
        switch (n) {
          case r.k_eCommunityPublish:
            return (
              u +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + _
                : "partnerevents/publish/" + d + "?tab=publishing")
            );
          case r.k_eCommunityEdit:
            return (
              u +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + _
                : "partnerevents/edit/" + d)
            );
          case r.k_eCommunityEditBroadcast:
            return (
              u +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + _
                : "partnerevents/edit/" + d) +
              "?tab=broadcast"
            );
          case r.k_eCommunityMigrate:
            return u + "partnerevents/migrate_announcement/" + _;
          case r.k_eCommunityPreview:
            return h
              ? u + "partnerevents/previewsale/" + d
              : u +
                  (e.bOldAnnouncement
                    ? "partnerevents/preview_old_announcement/" + _
                    : "partnerevents/preview/" + d);
          case r.k_eCommunityPreviewSale:
            return u + "partnerevents/previewsale/" + d;
          case r.k_eCommunityAdminPage:
            return h
              ? `${l}curator/${e.clanSteamID.GetAccountID()}/admin/creatorhome_link`
              : u + "partnerevents";
          case r.k_eCommunityAnnouncementHub:
            return u + "announcements";
          case r.k_eStoreNewsHub:
            return (
              l +
              `news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}`
            );
          case r.k_eStoreOwnerPage:
            return (
              l +
              (e.appid
                ? "app/" + e.appid
                : "curator/" + e.clanSteamID.GetAccountID())
            );
          case r.k_eStoreSalePage:
            return e.jsondata.bSaleEnabled
              ? e.clanSteamID.GetAccountID() == a.wv
                ? `${l}charts/topnewreleases/${e.jsondata.sale_vanity_id}`
                : e.clanSteamID.GetAccountID() == a.yT
                  ? `${l}charts/bestofyear/${e.jsondata.sale_vanity_id}`
                  : p
                    ? `${(0, w._)(t)}/${e.GetSaleUpdateLandingPageVanity()}`
                    : h
                      ? `${l}curator/${e.clanSteamID.GetAccountID()}`
                      : l +
                        (e.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath
                          ? "sale/"
                          : "curator/" +
                            e.clanSteamID.GetAccountID() +
                            "/sale/") +
                        e.jsondata.sale_vanity_id
              : l;
          case r.k_eCommunityView:
            return u + "announcements/detail/" + _;
          case r.k_eStoreView:
            if (e.clanSteamID.GetAccountID() == (0, m.H)())
              return `${k.TS.STORE_BASE_URL}meetsteam/${d}`;
            if (p)
              return `${(0, w._)(t)}/${e.GetSaleUpdateLandingPageVanity()}`;
            if (h) return `${l}curator/${e.clanSteamID.GetAccountID()}`;
            return `${l}news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}/${e.bOldAnnouncement ? `old_view/${_}` : `view/${d}`}`;
          case r.k_eStoreUsersNewsHub:
            return `${l}news/`;
          default:
            return (0, S.wT)(!1, "Unknown route specified for link"), "";
        }
      }
      function L(e, t, n) {
        return j(
          e,
          t,
          "forceAbsolute" === n || !b(t, e) ? "absolute" : "relative",
        );
      }
      function x(e) {
        const { eventModel: t, route: n, bPopup: r = !0 } = e,
          a = b(n, t),
          s = j(t, n, a ? "relative" : "absolute");
        return (
          l.useEffect(() => {
            s && (r ? window.open(s) : window.location.assign(s));
          }, [r, s]),
          a && s ? (0, o.jsx)(u.rd, { push: !0, to: s }) : null
        );
      }
      function T(e, t, n) {
        const r = D(e, t, !1);
        return "admin" === n ? r + "partnerevents" : "";
      }
      function H(e) {
        const { eventModel: t, preferredFocus: n } = e,
          { bCanUseLink: a } = l.useContext(_.I),
          s = (0, c.n9)(),
          m = (0, u.W6)(),
          S = a && b(e.route, t),
          v = j(t, e.route, S ? "relative" : "absolute"),
          w = !S && v ? (0, p.NT)(v) : v,
          h = S || !w ? w : (0, d.wJ)(w, s),
          k = j(t, r.k_eViewWebSiteHub, "absolute"),
          g = Boolean(e.route != r.k_eViewWebSiteHub)
            ? E.Z.Localize("#EventBrowse_MoreEventsBtn")
            : "",
          C = l.useCallback(() => {
            k && window.location.assign(k);
          }, [k]);
        return t
          ? S
            ? (0, o.jsx)(i.Ii, {
                style: e.style,
                className: e.className,
                href: m.createHref({ pathname: h }),
                onClick: (t) => {
                  h && (e.onClick?.(t), m.push(h), t.preventDefault());
                },
                onOptionsActionDescription: g,
                onOptionsButton: g ? C : void 0,
                preferredFocus: n,
                children: e.children,
              })
            : (0, o.jsx)(i.Ii, {
                href: h,
                style: e.style,
                className: e.className,
                onClick: e.onClick,
                preferredFocus: n,
                onOptionsActionDescription: g,
                onOptionsButton: g ? C : void 0,
                children: e.children,
              })
          : null;
      }
    },
    62349: (e, t, n) => {
      "use strict";
      function r(e) {
        return (
          !!e &&
          Boolean(
            e.related_items &&
              e.related_items.standalone_demo_appid &&
              e.related_items.standalone_demo_appid.length > 0 &&
              e.related_items.standalone_demo_appid[0],
          )
        );
      }
      function o(e) {
        return e && e.related_items?.standalone_demo_appid
          ? e.related_items?.standalone_demo_appid
          : [];
      }
      n.d(t, { J: () => r, S: () => o });
    },
    71420: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => a });
      var r = n(66418),
        o = n(62349);
      function a(e, t = !1) {
        if (e)
          return t && (0, o.J)(e)
            ? `${r.TS.STORE_BASE_URL}app/${((0, o.S))(e)[0]}`
            : `${r.TS.STORE_BASE_URL}${e.store_url_path}`;
      }
    },
    71298: (e, t, n) => {
      "use strict";
      n.d(t, { Hh: () => u, vs: () => l });
      var r = n(7850),
        o = n(90626),
        a = n(74568),
        s = n(56330),
        i = n(61859),
        c = n(22797);
      function l(e) {
        const [t, n] = (0, o.useState)(() => Boolean(e)),
          [r, a] = (0, o.useState)(!1),
          [s, i] = (0, o.useState)(!1),
          [c, l] = (0, o.useState)(null),
          [u, d] = (0, o.useState)(null),
          [m, _] = (0, o.useState)(null),
          [S, p] = (0, o.useState)(null),
          [v, w] = (0, o.useState)(null);
        return {
          bLoading: t,
          bError: r,
          bSuccess: s,
          strError: c,
          strSuccess: u,
          elSuccess: S,
          elError: m,
          strThrobber: v,
          fnSetLoading: n,
          fnSetError: a,
          fnSetSuccess: i,
          fnSetStrError: l,
          fnSetStrSuccess: d,
          fnSetElSuccess: p,
          fnSetElError: _,
          fnSetThrobber: w,
        };
      }
      function u(e) {
        const {
            strDialogTitle: t,
            state: n,
            closeModal: o,
            strThrobber: l,
          } = e,
          {
            bLoading: u,
            bError: d,
            bSuccess: m,
            strError: _,
            strSuccess: S,
            elSuccess: p,
            elError: v,
            strThrobber: w,
          } = n;
        return d || _ || v
          ? (0, r.jsxs)(a.o0, {
              strTitle: t,
              bAlertDialog: !0,
              closeModal: o,
              className: s.SuccessErrorDialog,
              children: [
                Boolean(_) &&
                  (0, r.jsx)("div", {
                    className: s.ErrorStylesWithIcon,
                    children:
                      _ || (0, i.we)("#Error_ErrorCommunicatingWithNetwork"),
                  }),
                Boolean(v) && v,
              ],
            })
          : m || S || p
            ? (0, r.jsx)(a.o0, {
                strTitle: t,
                strDescription: S || (0, i.we)("#EventDisplay_Share_Success"),
                bAlertDialog: !0,
                closeModal: o,
                className: s.SuccessErrorDialog,
                children: (0, r.jsx)(r.Fragment, { children: Boolean(p) && p }),
              })
            : (0, r.jsx)(a.o0, {
                strTitle: t,
                className: s.SuccessErrorDialog,
                bProgressDialog: !0,
                closeModal: () => {},
                children: (0, r.jsx)(c.t, {
                  string: l || w || (0, i.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              });
      }
    },
    26161: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => a });
      var r = n(22837),
        o = n(30470);
      const a = () => (o.TS.EUNIVERSE === r.Rv ? 2581 : 45267781);
    },
    87731: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => L });
      var r = n(7850),
        o = n(90626),
        a = n(78327),
        s = n(41735),
        i = n.n(s),
        c = n(61859),
        l = n(22837),
        u = n(37085),
        d = n(17720),
        m = n(80902),
        _ = n(51614),
        S = n(6379),
        p = n(84933),
        v = n(22797),
        w = n(93474),
        h = n.n(w),
        k = n(32803),
        E = n(12155),
        g = n(81393),
        b = n(32754),
        C = n(56283),
        y = n(78395),
        I = n(71298),
        D = n(21869),
        f = n(67165),
        j = n(52038),
        A = n(26408);
      function L(e) {
        const { clanAccountID: t } = e,
          n = (0, p.YR)(() => new d.b(t, a.TS.EUNIVERSE, l.P3F, 0)),
          {
            bIsFetching: s,
            rgEventModels: u,
            fnRefetch: _,
          } = (function (e) {
            const {
              data: t,
              isFetching: n,
              refetch: r,
            } = (0, m.I)({
              queryKey: [
                "DraftAndHiddenPartnerEvents",
                e.ConvertTo64BitString(),
              ],
              queryFn: async () => {
                const t =
                    a.TS.STORE_BASE_URL +
                    "/curator/" +
                    e.GetAccountID() +
                    "/admin/ajaxgetcreatorhomeevents",
                  n = { l: a.TS.LANGUAGE },
                  r = await i()
                    .get(t, { params: n })
                    .catch(() => {}),
                  o = new Array();
                o.push(
                  ...r.data.creatorhome_event_gids.map((t) =>
                    S.MX.LoadHiddenPartnerEvent(e, t),
                  ),
                );
                return await Promise.all(o);
              },
            });
            return { bIsFetching: n, rgEventModels: t, fnRefetch: r };
          })(n),
          w = `${a.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
          { creatorHome: k, isFetching: E, refetch: g } = (0, f.FV)(t),
          y = k?.GetLinkedEventGID(),
          I = y && u?.some((e) => y == e.GID),
          D = s || E,
          j = () => {
            _(), g();
          },
          A = o.useMemo(
            () => [...(u ?? [])].sort((e, t) => t.startTime - e.startTime),
            [u],
          ),
          L = A.filter((e) => y && y == e.GID),
          T = A.filter((e) => !y || y != e.GID);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(b.he, {
              toolTipContent: (0, c.we)("#CreatorHome_EventLink_Create_ttip"),
              style: { width: "25%" },
              children: (0, r.jsx)(C.jn, {
                onClick: () => window.location.assign(w),
                children: (0, c.we)("#CreatorHome_EventLink_Create"),
              }),
            }),
            (0, r.jsx)("h4", {
              children: (0, c.we)("#CreatorHome_EventLink_Title"),
            }),
            (0, r.jsx)("p", {
              children: (0, c.we)("#CreatorHome_EventLink_Desc"),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", {
              className: h().ListsCtn,
              children: [
                !I &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("h5", {
                        children: (0, c.we)(
                          "#CreatorHome_EventLink_ActiveListTitle",
                        ),
                      }),
                      (0, r.jsx)("p", {
                        children: (0, c.we)(
                          "#CreatorHome_EventLink_BasicActive",
                        ),
                      }),
                    ],
                  }),
                D && (0, r.jsx)(v.t, {}),
                !D &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      L.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("h5", {
                              children: (0, c.we)(
                                "#CreatorHome_EventLink_ActiveListTitle",
                              ),
                            }),
                            (0, r.jsx)("div", {
                              className: h().EntryList,
                              children: L.map((e) =>
                                (0, r.jsx)(
                                  x,
                                  {
                                    creatorHome: k,
                                    clanSteamID: n,
                                    eventModel: e,
                                    refetch: j,
                                  },
                                  e.GID,
                                ),
                              ),
                            }),
                          ],
                        }),
                      T.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("h5", {
                              children: (0, c.we)(
                                "#CreatorHome_EventLink_InactiveListTitle",
                              ),
                            }),
                            (0, r.jsx)("div", {
                              className: h().EntryList,
                              children: T.map((e) =>
                                (0, r.jsx)(
                                  x,
                                  {
                                    creatorHome: k,
                                    clanSteamID: n,
                                    eventModel: e,
                                    refetch: j,
                                  },
                                  e.GID,
                                ),
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function x(e) {
        const { clanSteamID: t, creatorHome: n, eventModel: s, refetch: d } = e,
          [m, S] = o.useState(!1),
          p = (0, _.n)({
            mutationFn: async (e) => {
              const t =
                  a.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxdeletecreatorhomeevent",
                n = new FormData();
              n.append("sessionid", (0, a.KC)()), n.append("gid", e.gid);
              const r = await i().post(t, n, { withCredentials: !0 });
              return r?.data?.success == u.R;
            },
          }),
          [v, w] = o.useState(!1),
          [g, b] = o.useState(!1),
          C = (0, _.n)({
            mutationFn: async (e) => {
              const t =
                  a.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxselectcreatorhome",
                n = new FormData();
              n.append("sessionid", (0, a.KC)()), n.append("gid", e.gid);
              const r = await i().post(t, n, { withCredentials: !0 });
              return r?.data?.success == u.R;
            },
          }),
          y = n?.GetLinkedEventGID(),
          I = y && y == s.GID,
          D = !I && s.BIsVisibleEvent(),
          f = `${a.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/clone/${s.GID}?redir=${window.location.href}`;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(T, {
              active: m,
              mutateAsync: () => p.mutateAsync({ clanSteamID: t, gid: s.GID }),
              onClose: (e) => {
                S(!1), e && d();
              },
              strTitle: (0, c.we)("#Button_Delete"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Delete_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Delete_Dialog_Error"),
            }),
            (0, r.jsx)(T, {
              active: v,
              mutateAsync: () => C.mutateAsync({ clanSteamID: t, gid: s.GID }),
              onClose: (e) => {
                w(!1), e && d();
              },
              strTitle: (0, c.we)("#CreatorHome_EventLink_Select"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Select_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Select_Dialog_Error"),
            }),
            (0, r.jsx)(T, {
              active: g,
              mutateAsync: () => C.mutateAsync({ clanSteamID: t, gid: "0" }),
              onClose: (e) => {
                b(!1), e && d();
              },
              strTitle: (0, c.we)("#CreatorHome_EventLink_Clear"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Clear_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Clear_Dialog_Error"),
            }),
            (0, r.jsxs)("div", {
              className: (0, j.A)(h().Entry, I && h().Active),
              children: [
                (0, r.jsxs)("div", {
                  className: h().HeaderRow,
                  children: [
                    (0, r.jsx)("span", {
                      className: h().Label,
                      children: s.GetNameWithFallback(
                        (0, l.sfN)(a.TS.LANGUAGE),
                      ),
                    }),
                    !s.BIsVisibleEvent() &&
                      (0, r.jsxs)("span", {
                        className: h().UnpublishedState,
                        children: [
                          (0, r.jsx)("span", {
                            children: (0, c.we)(
                              "#CreatorHome_EventLink_Unpublished",
                            ),
                          }),
                          (0, r.jsx)(A.o, {
                            tooltip: (0, c.we)(
                              "#CreatorHome_EventLink_Unpublished_ttip",
                            ),
                            small: !0,
                          }),
                        ],
                      }),
                    s.BIsVisibleEvent() &&
                      !I &&
                      (0, r.jsxs)("span", {
                        className: h().PublishedAndNotSelectedState,
                        children: [
                          (0, r.jsx)("span", {
                            children: (0, c.we)(
                              "#CreatorHome_EventLink_PublishedAndNotSelected",
                            ),
                          }),
                          (0, r.jsx)(A.o, {
                            tooltip: (0, c.we)(
                              "#CreatorHome_EventLink_PublishedAndNotSelected_ttip",
                            ),
                            small: !0,
                          }),
                        ],
                      }),
                    D
                      ? (0, r.jsx)(H, {
                          eventModel: s,
                          label: (0, c.we)("#CreatorHome_EventLink_Select"),
                          icon: (0, r.jsx)(E.FEq, {}),
                          onClick: () => w(!0),
                          tooltip: (0, c.we)(
                            "#CreatorHome_EventLink_Select_ttip",
                          ),
                        })
                      : !I &&
                        (0, r.jsxs)("div", {
                          className: h().MustPublish,
                          children: [
                            (0, c.we)("#CreatorHome_EventLink_MustPublish"),
                            (0, r.jsx)(A.o, {
                              tooltip: (0, c.we)(
                                "#CreatorHome_EventLink_MustPublish_ttip",
                              ),
                              small: !0,
                            }),
                          ],
                        }),
                    I &&
                      (0, r.jsx)(H, {
                        eventModel: s,
                        label: (0, c.we)("#CreatorHome_EventLink_Clear"),
                        icon: (0, r.jsx)(E.FEq, { filled: !0 }),
                        onClick: () => b(!0),
                        tooltip: (0, c.we)("#CreatorHome_EventLink_Clear_ttip"),
                      }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: h().ActionsRow,
                  children: [
                    (0, r.jsx)(H, {
                      eventModel: s,
                      label: (0, c.we)("#Button_Edit"),
                      icon: (0, r.jsx)(E.ffu, {}),
                      route: k.PH.k_eCommunityEdit,
                    }),
                    (0, r.jsx)(H, {
                      eventModel: s,
                      label: (0, c.we)("#Button_Preview"),
                      icon: (0, r.jsx)(E.Exy, {}),
                      route: k.PH.k_eCommunityPreviewSale,
                    }),
                    (0, r.jsx)(H, {
                      eventModel: s,
                      label: (0, c.we)("#Button_Clone"),
                      icon: (0, r.jsx)(E.rI_, {}),
                      onClick: () => window.location.assign(f),
                    }),
                    !I &&
                      (0, r.jsx)(H, {
                        eventModel: s,
                        label: (0, c.we)("#Button_Delete"),
                        icon: (0, r.jsx)(E.lMJ, {}),
                        onClick: () => S(!0),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function T(e) {
        const {
            active: t,
            mutateAsync: n,
            onClose: o,
            strTitle: a,
            strDescription: s,
            strError: i,
          } = e,
          c = (0, I.vs)();
        if (t)
          return c.bLoading
            ? (0, r.jsx)(D.E, {
                active: !0,
                children: (0, r.jsx)(I.Hh, { state: c, strDialogTitle: a }),
              })
            : (0, r.jsx)(D.E, {
                active: !0,
                children: (0, r.jsx)(y.o0, {
                  strTitle: a,
                  strDescription: s,
                  onCancel: () => o(!1),
                  bOKDisabled: c.bLoading,
                  onOK: async () => {
                    c.fnSetLoading(!0);
                    try {
                      (await n()) ? o(!0) : c.fnSetElError(i);
                    } catch (e) {
                      c.fnSetElError(i);
                    }
                  },
                }),
              });
      }
      function H(e) {
        const {
          eventModel: t,
          label: n,
          tooltip: o,
          icon: a,
          route: s,
          onClick: i,
        } = e;
        (0, g.wT)(s || i, "Must specify route or onClick");
        const c =
          i ||
          (() => {
            const e = s ? (0, k.yh)(t, null, s, "absolute") : void 0;
            window.location.assign(e);
          });
        return (0, r.jsxs)("div", {
          className: h().ManageButton,
          onClick: c,
          children: [
            (0, r.jsx)("div", { className: h().SVGIcon, children: a }),
            n,
            o && (0, r.jsx)(A.o, { tooltip: o, small: !0 }),
          ],
        });
      }
    },
  },
]);
