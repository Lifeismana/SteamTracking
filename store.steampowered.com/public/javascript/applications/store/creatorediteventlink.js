/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3687],
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
        Bw: () => j,
        EX: () => E,
        Hx: () => x,
        JP: () => g,
        LJ: () => y,
        OG: () => L,
        PH: () => r,
        T7: () => C,
        qT: () => A,
        tj: () => H,
        yh: () => f,
      });
      var r,
        o = n(7850),
        a = n(90626),
        s = n(92757),
        i = n(45699),
        c = n(81393),
        l = n(78327),
        u = n(16180),
        m = n(55963),
        d = n(61336),
        _ = n(60014),
        S = n(26161),
        v = n(55263),
        w = n(22837),
        p = n(61859),
        k = n(27939);
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
      const h =
        /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
      function b(e, t) {
        if (!t) return !1;
        const n = "store" === (0, l.yK)(),
          o = (function (e) {
            const t = e.match(h);
            return t?.[1];
          })(window.location.href),
          a = n && "news" == o,
          s = t.GetEventType() == w.ajI,
          i = "community" === (0, l.yK)(),
          u = t.appid ? "games" : "groups",
          m =
            i &&
            u == o &&
            ((t.appid && t.appid === l.UF.APPID) ||
              (!t.appid &&
                t.clanSteamID.GetAccountID() === l.UF.CLANACCOUNTID));
        switch (e) {
          case r.k_eView:
            return m || a;
          case r.k_eCommunityView:
          case r.k_eCommunityEdit:
          case r.k_eCommunityEditBroadcast:
          case r.k_eCommunityPublish:
          case r.k_eCommunityMigrate:
          case r.k_eCommunityPreview:
          case r.k_eCommunityPreviewSale:
          case r.k_eCommunityAnnouncementHub:
            return m;
          case r.k_eCommunityAdminPage:
            return !s && m;
          case r.k_eViewWebSiteHub:
            return m || a;
          case r.k_eStoreView:
          case r.k_eStoreNewsHub:
          case r.k_eStoreOwnerPage:
          case r.k_eStoreUsersNewsHub:
            return a;
          case r.k_eStoreSalePage:
            return !1;
          default:
            return (0, c.wT)(!1, "Unknown route specified for link: " + e), !1;
        }
      }
      function g(e) {
        const t =
          l.TS.COMMUNITY_BASE_URL +
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
      function E(e) {
        return D(e, r.k_eStoreSalePage, "absolute");
      }
      function C(e) {
        return D(e, r.k_eStoreView, "absolute");
      }
      function I(e, t, n) {
        if (n)
          return (
            (e ? "/games/" + l.UF.VANITY_ID : "/groups/" + l.UF.VANITY_ID) + "/"
          );
        const r = e ? "ogg/" + e : "gid/" + t.ConvertTo64BitString();
        return l.TS.COMMUNITY_BASE_URL + r + "/";
      }
      function y() {
        return "news";
      }
      function D(e, t, n) {
        const [r] = (0, v.t7)(e?.appid, { include_basic_info: !0 });
        if (e) return f(e, r, t, n);
      }
      function f(e, t, n, o) {
        const a = "relative" === o,
          s = "community" === (0, l.yK)(),
          i = a ? "/" : l.TS.STORE_BASE_URL,
          u = I(e.appid, e.clanSteamID, a);
        n === r.k_eView
          ? (n = s ? r.k_eCommunityView : r.k_eStoreView)
          : n === r.k_eViewWebSiteHub &&
            (n = s ? r.k_eCommunityAnnouncementHub : r.k_eStoreNewsHub);
        const m = e.GID ? e.GID : "",
          d = e.AnnouncementGID ? e.AnnouncementGID : "",
          _ =
            e.BIsOGGEvent() &&
            e.appid &&
            t &&
            e.BHasSaleUpdateLandingPageVanity(),
          v = e.GetEventType() == w.ajI;
        switch (n) {
          case r.k_eCommunityPublish:
            return (
              u +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + d
                : "partnerevents/publish/" + m + "?tab=publishing")
            );
          case r.k_eCommunityEdit:
            return (
              u +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + d
                : "partnerevents/edit/" + m)
            );
          case r.k_eCommunityEditBroadcast:
            return (
              u +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + d
                : "partnerevents/edit/" + m) +
              "?tab=broadcast"
            );
          case r.k_eCommunityMigrate:
            return u + "partnerevents/migrate_announcement/" + d;
          case r.k_eCommunityPreview:
            return v
              ? u + "partnerevents/previewsale/" + m
              : u +
                  (e.bOldAnnouncement
                    ? "partnerevents/preview_old_announcement/" + d
                    : "partnerevents/preview/" + m);
          case r.k_eCommunityPreviewSale:
            return u + "partnerevents/previewsale/" + m;
          case r.k_eCommunityAdminPage:
            return v
              ? `${i}curator/${e.clanSteamID.GetAccountID()}/admin/creatorhome_link`
              : u + "partnerevents";
          case r.k_eCommunityAnnouncementHub:
            return u + "announcements";
          case r.k_eStoreNewsHub:
            return (
              i +
              `news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}`
            );
          case r.k_eStoreOwnerPage:
            return (
              i +
              (e.appid
                ? "app/" + e.appid
                : "curator/" + e.clanSteamID.GetAccountID())
            );
          case r.k_eStoreSalePage:
            return e.jsondata.bSaleEnabled
              ? e.clanSteamID.GetAccountID() == k.wv
                ? `${i}charts/topnewreleases/${e.jsondata.sale_vanity_id}`
                : e.clanSteamID.GetAccountID() == k.yT
                  ? `${i}charts/bestofyear/${e.jsondata.sale_vanity_id}`
                  : _
                    ? `${t.GetStorePageURL()}/${e.GetSaleUpdateLandingPageVanity()}`
                    : v
                      ? `${i}curator/${e.clanSteamID.GetAccountID()}`
                      : i +
                        (e.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath
                          ? "sale/"
                          : "curator/" +
                            e.clanSteamID.GetAccountID() +
                            "/sale/") +
                        e.jsondata.sale_vanity_id
              : i;
          case r.k_eCommunityView:
            return u + "announcements/detail/" + d;
          case r.k_eStoreView:
            if (e.clanSteamID.GetAccountID() == (0, S.H)())
              return `${l.TS.STORE_BASE_URL}meetsteam/${m}`;
            if (_)
              return `${t.GetStorePageURL()}/${e.GetSaleUpdateLandingPageVanity()}`;
            if (v) return `${i}curator/${e.clanSteamID.GetAccountID()}`;
            return `${i}news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}/${e.bOldAnnouncement ? `old_view/${d}` : `view/${m}`}`;
          case r.k_eStoreUsersNewsHub:
            return `${i}news/`;
          default:
            return (0, c.wT)(!1, "Unknown route specified for link"), "";
        }
      }
      function j(e, t, n) {
        return D(
          e,
          t,
          "forceAbsolute" === n || !b(t, e) ? "absolute" : "relative",
        );
      }
      function A(e, t, n, r) {
        return f(
          e,
          t,
          n,
          "forceAbsolute" === r || !b(n, e) ? "absolute" : "relative",
        );
      }
      function L(e) {
        const { eventModel: t, route: n, bPopup: r = !0 } = e,
          i = b(n, t),
          c = D(t, n, i ? "relative" : "absolute");
        return (
          a.useEffect(() => {
            c && (r ? window.open(c) : window.location.assign(c));
          }, [r, c]),
          i && c ? (0, o.jsx)(s.rd, { push: !0, to: c }) : null
        );
      }
      function x(e, t, n) {
        const r = I(e, t, !1);
        return "admin" === n ? r + "partnerevents" : "";
      }
      function H(e) {
        const { eventModel: t, preferredFocus: n } = e,
          { bCanUseLink: c } = a.useContext(u.I),
          l = (0, _.n9)(),
          S = (0, s.W6)(),
          v = c && b(e.route, t),
          w = D(t, e.route, v ? "relative" : "absolute"),
          k = !v && w ? (0, d.NT)(w) : w,
          h = v || !k ? k : (0, m.wJ)(k, l),
          g = D(t, r.k_eViewWebSiteHub, "absolute"),
          E = Boolean(e.route != r.k_eViewWebSiteHub)
            ? (0, p.we)("#EventBrowse_MoreEventsBtn")
            : "",
          C = a.useCallback(() => {
            g && window.location.assign(g);
          }, [g]);
        return t
          ? v
            ? (0, o.jsx)(i.Ii, {
                style: e.style,
                className: e.className,
                href: S.createHref({ pathname: h }),
                onClick: (t) => {
                  h && (e.onClick?.(t), S.push(h), t.preventDefault());
                },
                onOptionsActionDescription: E,
                onOptionsButton: E ? C : void 0,
                preferredFocus: n,
                children: e.children,
              })
            : (0, o.jsx)(i.Ii, {
                href: h,
                style: e.style,
                className: e.className,
                onClick: e.onClick,
                preferredFocus: n,
                onOptionsActionDescription: E,
                onOptionsButton: E ? C : void 0,
                children: e.children,
              })
          : null;
      }
    },
    71298: (e, t, n) => {
      "use strict";
      n.d(t, { Hh: () => u, vs: () => l });
      var r = n(7850),
        o = n(90626),
        a = n(51706),
        s = n(56330),
        i = n(61859),
        c = n(22797);
      function l(e) {
        const [t, n] = (0, o.useState)(() => Boolean(e)),
          [r, a] = (0, o.useState)(!1),
          [s, i] = (0, o.useState)(!1),
          [c, l] = (0, o.useState)(null),
          [u, m] = (0, o.useState)(null),
          [d, _] = (0, o.useState)(null),
          [S, v] = (0, o.useState)(null),
          [w, p] = (0, o.useState)(null);
        return {
          bLoading: t,
          bError: r,
          bSuccess: s,
          strError: c,
          strSuccess: u,
          elSuccess: S,
          elError: d,
          strThrobber: w,
          fnSetLoading: n,
          fnSetError: a,
          fnSetSuccess: i,
          fnSetStrError: l,
          fnSetStrSuccess: m,
          fnSetElSuccess: v,
          fnSetElError: _,
          fnSetThrobber: p,
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
            bError: m,
            bSuccess: d,
            strError: _,
            strSuccess: S,
            elSuccess: v,
            elError: w,
            strThrobber: p,
          } = n;
        return m || _ || w
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
                Boolean(w) && w,
              ],
            })
          : d || S || v
            ? (0, r.jsx)(a.o0, {
                strTitle: t,
                strDescription: S || (0, i.we)("#EventDisplay_Share_Success"),
                bAlertDialog: !0,
                closeModal: o,
                className: s.SuccessErrorDialog,
                children: (0, r.jsx)(r.Fragment, { children: Boolean(v) && v }),
              })
            : (0, r.jsx)(a.o0, {
                strTitle: t,
                className: s.SuccessErrorDialog,
                bProgressDialog: !0,
                closeModal: () => {},
                children: (0, r.jsx)(c.t, {
                  string: l || p || (0, i.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              });
      }
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
        m = n(17720),
        d = n(80902),
        _ = n(51614),
        S = n(6379),
        v = n(84933),
        w = n(22797),
        p = n(93474),
        k = n.n(p),
        h = n(32803),
        b = n(12155),
        g = n(81393),
        E = n(32754),
        C = n(56283),
        I = n(78395),
        y = n(71298),
        D = n(21869),
        f = n(67165),
        j = n(52038),
        A = n(26408);
      function L(e) {
        const { clanAccountID: t } = e,
          n = (0, v.YR)(() => new m.b(t, a.TS.EUNIVERSE, l.P3F, 0)),
          {
            bIsFetching: s,
            rgEventModels: u,
            fnRefetch: _,
          } = (function (e) {
            const {
              data: t,
              isFetching: n,
              refetch: r,
            } = (0, d.I)({
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
          p = `${a.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
          { creatorHome: h, isFetching: b, refetch: g } = (0, f.FV)(t),
          I = h?.GetLinkedEventGID(),
          y = I && u?.some((e) => I == e.GID),
          D = s || b,
          j = () => {
            _(), g();
          },
          A = o.useMemo(
            () => [...(u ?? [])].sort((e, t) => t.startTime - e.startTime),
            [u],
          ),
          L = A.filter((e) => I && I == e.GID),
          H = A.filter((e) => !I || I != e.GID);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(E.he, {
              toolTipContent: (0, c.we)("#CreatorHome_EventLink_Create_ttip"),
              style: { width: "25%" },
              children: (0, r.jsx)(C.jn, {
                onClick: () => window.location.assign(p),
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
              className: k().ListsCtn,
              children: [
                !y &&
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
                D && (0, r.jsx)(w.t, {}),
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
                              className: k().EntryList,
                              children: L.map((e) =>
                                (0, r.jsx)(
                                  x,
                                  {
                                    creatorHome: h,
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
                      H.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("h5", {
                              children: (0, c.we)(
                                "#CreatorHome_EventLink_InactiveListTitle",
                              ),
                            }),
                            (0, r.jsx)("div", {
                              className: k().EntryList,
                              children: H.map((e) =>
                                (0, r.jsx)(
                                  x,
                                  {
                                    creatorHome: h,
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
        const { clanSteamID: t, creatorHome: n, eventModel: s, refetch: m } = e,
          [d, S] = o.useState(!1),
          v = (0, _.n)({
            mutationFn: async (e) => {
              const t =
                  a.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxdeletecreatorhomeevent",
                n = new FormData();
              n.append("sessionid", a.TS.SESSIONID), n.append("gid", e.gid);
              const r = await i().post(t, n, { withCredentials: !0 });
              return r?.data?.success == u.R;
            },
          }),
          [w, p] = o.useState(!1),
          [g, E] = o.useState(!1),
          C = (0, _.n)({
            mutationFn: async (e) => {
              const t =
                  a.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxselectcreatorhome",
                n = new FormData();
              n.append("sessionid", a.TS.SESSIONID), n.append("gid", e.gid);
              const r = await i().post(t, n, { withCredentials: !0 });
              return r?.data?.success == u.R;
            },
          }),
          I = n?.GetLinkedEventGID(),
          y = I && I == s.GID,
          D = !y && s.BIsVisibleEvent(),
          f = `${a.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/clone/${s.GID}?redir=${window.location.href}`;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(H, {
              active: d,
              mutateAsync: () => v.mutateAsync({ clanSteamID: t, gid: s.GID }),
              onClose: (e) => {
                S(!1), e && m();
              },
              strTitle: (0, c.we)("#Button_Delete"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Delete_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Delete_Dialog_Error"),
            }),
            (0, r.jsx)(H, {
              active: w,
              mutateAsync: () => C.mutateAsync({ clanSteamID: t, gid: s.GID }),
              onClose: (e) => {
                p(!1), e && m();
              },
              strTitle: (0, c.we)("#CreatorHome_EventLink_Select"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Select_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Select_Dialog_Error"),
            }),
            (0, r.jsx)(H, {
              active: g,
              mutateAsync: () => C.mutateAsync({ clanSteamID: t, gid: "0" }),
              onClose: (e) => {
                E(!1), e && m();
              },
              strTitle: (0, c.we)("#CreatorHome_EventLink_Clear"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Clear_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Clear_Dialog_Error"),
            }),
            (0, r.jsxs)("div", {
              className: (0, j.A)(k().Entry, y && k().Active),
              children: [
                (0, r.jsxs)("div", {
                  className: k().HeaderRow,
                  children: [
                    (0, r.jsx)("span", {
                      className: k().Label,
                      children: s.GetNameWithFallback(
                        (0, l.sfN)(a.TS.LANGUAGE),
                      ),
                    }),
                    !s.BIsVisibleEvent() &&
                      (0, r.jsxs)("span", {
                        className: k().UnpublishedState,
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
                      !y &&
                      (0, r.jsxs)("span", {
                        className: k().PublishedAndNotSelectedState,
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
                      ? (0, r.jsx)(T, {
                          eventModel: s,
                          label: (0, c.we)("#CreatorHome_EventLink_Select"),
                          icon: (0, r.jsx)(b.FEq, {}),
                          onClick: () => p(!0),
                          tooltip: (0, c.we)(
                            "#CreatorHome_EventLink_Select_ttip",
                          ),
                        })
                      : !y &&
                        (0, r.jsxs)("div", {
                          className: k().MustPublish,
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
                    y &&
                      (0, r.jsx)(T, {
                        eventModel: s,
                        label: (0, c.we)("#CreatorHome_EventLink_Clear"),
                        icon: (0, r.jsx)(b.FEq, { filled: !0 }),
                        onClick: () => E(!0),
                        tooltip: (0, c.we)("#CreatorHome_EventLink_Clear_ttip"),
                      }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: k().ActionsRow,
                  children: [
                    (0, r.jsx)(T, {
                      eventModel: s,
                      label: (0, c.we)("#Button_Edit"),
                      icon: (0, r.jsx)(b.ffu, {}),
                      route: h.PH.k_eCommunityEdit,
                    }),
                    (0, r.jsx)(T, {
                      eventModel: s,
                      label: (0, c.we)("#Button_Preview"),
                      icon: (0, r.jsx)(b.Exy, {}),
                      route: h.PH.k_eCommunityPreviewSale,
                    }),
                    (0, r.jsx)(T, {
                      eventModel: s,
                      label: (0, c.we)("#Button_Clone"),
                      icon: (0, r.jsx)(b.rI_, {}),
                      onClick: () => window.location.assign(f),
                    }),
                    !y &&
                      (0, r.jsx)(T, {
                        eventModel: s,
                        label: (0, c.we)("#Button_Delete"),
                        icon: (0, r.jsx)(b.lMJ, {}),
                        onClick: () => S(!0),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function H(e) {
        const {
            active: t,
            mutateAsync: n,
            onClose: o,
            strTitle: a,
            strDescription: s,
            strError: i,
          } = e,
          c = (0, y.vs)();
        if (t)
          return c.bLoading
            ? (0, r.jsx)(D.E, {
                active: !0,
                children: (0, r.jsx)(y.Hh, { state: c, strDialogTitle: a }),
              })
            : (0, r.jsx)(D.E, {
                active: !0,
                children: (0, r.jsx)(I.o0, {
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
      function T(e) {
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
            const e = s ? (0, h.yh)(t, null, s, "absolute") : void 0;
            window.location.assign(e);
          });
        return (0, r.jsxs)("div", {
          className: k().ManageButton,
          onClick: c,
          children: [
            (0, r.jsx)("div", { className: k().SVGIcon, children: a }),
            n,
            o && (0, r.jsx)(A.o, { tooltip: o, small: !0 }),
          ],
        });
      }
    },
  },
]);
