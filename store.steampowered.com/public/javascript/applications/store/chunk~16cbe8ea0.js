/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [53337],
    {
      26589: (we, ye, s) => {
        "use strict";
        s.d(ye, { g: () => W, h: () => M });
        var n = s(72609),
          b = s(75233),
          m = s(80902),
          a = s(67705),
          t = s(76559),
          i = s(3166);
        function D(y, x) {
          return {
            clanid: y,
            appid: x,
            can_edit: !1,
            owns_app: !1,
            event_followed: [],
            event_followed_flags: [],
            event_ignored: [],
            follows_app: !1,
            valve_admin: !1,
            support_user: !1,
            limited_user: !0,
          };
        }
        async function f(y, x, U) {
          const T = (0, a.Fd)("partnereventpermissions", "application_config");
          if (O(T)) {
            const P = T.find((E) => E.clanid == y);
            if (P) {
              let { success: E, warn_msg: $, err_msg: X, ...H } = P;
              return H;
            }
          }
          if (n.iA.logged_in) {
            const P = t.b.InitFromClanID(y);
            let E = `${n.TS.COMMUNITY_BASE_URL}gid/${P.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
            (0, i.yK)() == "partnerweb"
              ? (E = `${n.TS.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${y}`)
              : (0, i.yK)() == "store" &&
                (E = `${n.TS.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${y}`);
            const $ = await fetch(E, { method: "GET", credentials: "include" });
            if ($.status == 200) {
              const X = await $.json();
              if (X) {
                let { success: H, warn_msg: F, err_msg: j, ...o } = X;
                return o;
              }
            }
          }
          return D(y, void 0);
        }
        function O(y) {
          const x = y;
          return x &&
            Array.isArray(x) &&
            x.length > 0 &&
            typeof x[0] == "object"
            ? typeof x[0].clanid == "number" && typeof x[0].appid == "number"
            : !1;
        }
        var A = s(68312);
        function M(y) {
          const x = (0, b.jE)(),
            U = (0, A.KV)();
          return (0, m.I)(W(y, x, U));
        }
        function W(y, x, U) {
          return {
            queryKey: p(y),
            queryFn: async () => await f(y, x, U),
            enabled: !!y,
          };
        }
        function p(y) {
          return ["useEventUserPermissions", n.iA.accountid, y];
        }
      },
      3946: (we, ye, s) => {
        "use strict";
        s.d(ye, { V: () => m });
        var n = s(7850),
          b = s(72080);
        function m(a) {
          return (0, n.jsxs)("a", {
            href: a.strURL,
            className: b.gg.Box,
            "data-modal-content-sizetofit": !!a.bSizeToFit,
            "data-appid": a.appid,
            "data-publishedfileid": a.publishedfileid,
            children: [
              (0, n.jsx)(b.KN, { strURL: a.strPreviewURL }),
              (0, n.jsxs)(b.J7, {
                children: [
                  (0, n.jsx)(b.bv, { children: a.strTitle }),
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)("span", {
                      className: b.gg.Type,
                      children: a.strType,
                    }),
                  }),
                  a.author && (0, n.jsx)(b.zN, { children: a.author }),
                  (0, n.jsx)(b.AT, { children: a.strDescription }),
                ],
              }),
            ],
          });
        }
      },
      56492: (we, ye, s) => {
        "use strict";
        s.d(ye, {
          Bw: () => I,
          EX: () => F,
          Hx: () => me,
          JP: () => H,
          LJ: () => u,
          OG: () => _,
          PH: () => P,
          T7: () => o,
          sY: () => g,
          tj: () => G,
          yh: () => te,
        });
        var n = s(7850),
          b = s(50974),
          m = s(99412),
          a = s(24660),
          t = s(72865),
          i = s(90626),
          D = s(92757),
          f = s(83482),
          O = s(49628),
          A = s(35395),
          M = s(71742),
          W = s(53113),
          p = s(3166),
          y = s(72609),
          x = s(39905),
          U = s(47875),
          T = s(40358),
          P = ((B) => (
            (B.k_eView = "view"),
            (B.k_eViewWebSiteHub = "websitehub"),
            (B.k_eCommunityView = "communityview"),
            (B.k_eCommunityEdit = "edit"),
            (B.k_eCommunityEditBroadcast = "editBroadcast"),
            (B.k_eCommunityAdminPage = "admin"),
            (B.k_eCommunityPublish = "publish"),
            (B.k_eCommunityMigrate = "migrate"),
            (B.k_eCommunityPreview = "preview"),
            (B.k_eCommunityPreviewSale = "previewsale"),
            (B.k_eCommunityAnnouncementHub = "community_announcehub"),
            (B.k_eStoreView = "storeview"),
            (B.k_eStoreNewsHub = "newshub"),
            (B.k_eStoreOwnerPage = "store"),
            (B.k_eStoreSalePage = "sale"),
            (B.k_eStoreUsersNewsHub = "usernewshub"),
            B
          ))(P || {});
        const E =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function $(B) {
          return B.match(E)?.[1];
        }
        function X(B, R) {
          if (!R) return !1;
          const ue = !0,
            be = $(window.location.href),
            C = ue && be == "news",
            Q = R.GetEventType() == m.ajI,
            le = !1,
            ae = R.appid ? "games" : "groups",
            ve =
              le &&
              ae == be &&
              ((R.appid && R.appid === p.UF.APPID) ||
                (!R.appid &&
                  R.clanSteamID.GetAccountID() === p.UF.CLANACCOUNTID));
          switch (B) {
            case "view":
              return ve || (C && !g());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return ve;
            case "admin":
              return Q ? !1 : ve;
            case "websitehub":
              return ve || C;
            case "storeview":
              return C && !g();
            case "newshub":
            case "store":
            case "usernewshub":
              return C;
            case "sale":
              return !1;
            default:
              return (
                (0, M.wT)(!1, "Unknown route specified for link: " + B), !1
              );
          }
        }
        function H(B) {
          const R =
            y.TS.COMMUNITY_BASE_URL +
            "gid/" +
            B.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            B.AnnouncementGID;
          return {
            strFacebookUrl: R + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: R + "?site=twitter",
            strRedditUrl: R + "?site=reddit",
          };
        }
        function F(B) {
          return w(B, "sale", "absolute");
        }
        function j(B, R) {
          return te(B, R, "sale", "absolute");
        }
        function o(B) {
          return w(B, "storeview", "absolute");
        }
        function d(B, R) {
          return te(B, R, "storeview", "absolute");
        }
        function h(B, R, ue) {
          if (ue)
            return (
              (B ? "/games/" + p.UF.VANITY_ID : "/groups/" + p.UF.VANITY_ID) +
              "/"
            );
          const be = B ? "ogg/" + B : "gid/" + R.ConvertTo64BitString();
          return y.TS.COMMUNITY_BASE_URL + be + "/";
        }
        function u() {
          return "news";
        }
        function g() {
          return !1;
        }
        function w(B, R, ue) {
          const { data: be } = (0, T.J$)(
            B?.appid ? { appid: B.appid } : void 0,
          );
          if (B) return te(B, be, R, ue);
        }
        function te(B, R, ue, be) {
          const C = be === "relative",
            Q = !1,
            le = C ? "/" : y.TS.STORE_BASE_URL,
            ae = h(B.appid, B.clanSteamID, C);
          ue === "view"
            ? (ue = Q ? "communityview" : "storeview")
            : ue === "websitehub" &&
              (ue = Q ? "community_announcehub" : "newshub");
          const ve = B.GID ? B.GID : "",
            Ee = B.AnnouncementGID ? B.AnnouncementGID : "",
            Pe =
              B.BIsOGGEvent() &&
              B.appid &&
              R &&
              B.BHasSaleUpdateLandingPageVanity(),
            Te = B.GetEventType() == m.ajI;
          switch (ue) {
            case "publish":
              return (
                ae +
                (B.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Ee
                  : "partnerevents/publish/" + ve + "?tab=publishing")
              );
            case "edit":
              return (
                ae +
                (B.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Ee
                  : "partnerevents/edit/" + ve)
              );
            case "editBroadcast":
              return (
                ae +
                (B.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Ee
                  : "partnerevents/edit/" + ve) +
                "?tab=broadcast"
              );
            case "migrate":
              return ae + "partnerevents/migrate_announcement/" + Ee;
            case "preview":
              return Te
                ? ae + "partnerevents/previewsale/" + ve
                : ae +
                    (B.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + Ee
                      : "partnerevents/preview/" + ve);
            case "previewsale":
              return ae + "partnerevents/previewsale/" + ve;
            case "admin":
              return Te
                ? `${le}curator/${B.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : ae + "partnerevents";
            case "community_announcehub":
              return ae + "announcements";
            case "newshub": {
              const pe = B.appid
                ? `app/${B.appid}`
                : `group/${B.clanSteamID.GetAccountID()}`;
              return le + `${u()}/${pe}`;
            }
            case "store":
              return (
                le +
                (B.appid
                  ? "app/" + B.appid
                  : "curator/" + B.clanSteamID.GetAccountID())
              );
            case "sale":
              return B.jsondata.bSaleEnabled
                ? B.clanSteamID.GetAccountID() == b.wv
                  ? `${le}charts/topnewreleases/${B.jsondata.sale_vanity_id}`
                  : B.clanSteamID.GetAccountID() == b.yT
                    ? `${le}charts/bestofyear/${B.jsondata.sale_vanity_id}`
                    : Pe
                      ? `${(0, U._)(R)}/${B.GetSaleUpdateLandingPageVanity()}`
                      : Te
                        ? `${le}curator/${B.clanSteamID.GetAccountID()}`
                        : le +
                          (B.jsondata
                            .sale_vanity_id_valve_approved_for_sale_subpath
                            ? "sale/"
                            : "curator/" +
                              B.clanSteamID.GetAccountID() +
                              "/sale/") +
                          B.jsondata.sale_vanity_id
                : le;
            case "communityview":
              return ae + "announcements/detail/" + Ee;
            case "storeview": {
              if (B.clanSteamID.GetAccountID() == (0, O.H)())
                return `${y.TS.STORE_BASE_URL}meetsteam/${ve}`;
              if (Pe)
                return `${(0, U._)(R)}/${B.GetSaleUpdateLandingPageVanity()}`;
              if (Te) return `${le}curator/${B.clanSteamID.GetAccountID()}`;
              {
                const pe = B.appid
                    ? `app/${B.appid}`
                    : `group/${B.clanSteamID.GetAccountID()}`,
                  ee = g() ? "view_v2" : "view",
                  ie = B.bOldAnnouncement ? `old_view/${Ee}` : `${ee}/${ve}`;
                return `${le}${u()}/${pe}/${ie}`;
              }
            }
            case "usernewshub":
              return `${le}${u()}/`;
            default:
              return (0, M.wT)(!1, "Unknown route specified for link"), "";
          }
        }
        function I(B, R, ue) {
          const be = ue === "forceAbsolute" || !X(R, B);
          return w(B, R, be ? "absolute" : "relative");
        }
        function z(B, R, ue, be) {
          const C = be === "forceAbsolute" || !X(ue, B);
          return te(B, R, ue, C ? "absolute" : "relative");
        }
        function _(B) {
          const { eventModel: R, route: ue, bPopup: be = !0 } = B,
            C = X(ue, R),
            Q = w(R, ue, C ? "relative" : "absolute");
          return (
            i.useEffect(() => {
              Q && (be ? window.open(Q) : window.location.assign(Q));
            }, [be, Q]),
            C && Q ? (0, n.jsx)(D.rd, { push: !0, to: Q }) : null
          );
        }
        function me(B, R, ue) {
          const be = h(B, R, !1);
          return ue === "admin" ? be + "partnerevents" : "";
        }
        function G(B) {
          const { eventModel: R, preferredFocus: ue } = B,
            { bCanUseLink: be } = i.useContext(A.I),
            C = (0, t.n9)(),
            Q = (0, D.W6)(),
            le = be && X(B.route, R),
            ae = w(R, B.route, le ? "relative" : "absolute"),
            ve = !le && ae ? (0, W.NT)(ae) : ae,
            Ee = le || !ve ? ve : (0, f.wJ)(ve, C),
            Pe = w(R, "websitehub", "absolute"),
            Te =
              B.route != "websitehub"
                ? x.Z.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            pe = i.useCallback(() => {
              Pe && window.location.assign(Pe);
            }, [Pe]);
          return R
            ? le
              ? (0, n.jsx)(a.Ii, {
                  style: B.style,
                  className: B.className,
                  href: Q.createHref({ pathname: Ee }),
                  onClick: (ee) => {
                    Ee && (B.onClick?.(ee), Q.push(Ee), ee.preventDefault());
                  },
                  onOptionsActionDescription: Te,
                  onOptionsButton: Te ? pe : void 0,
                  preferredFocus: ue,
                  children: B.children,
                })
              : (0, n.jsx)(a.Ii, {
                  href: Ee,
                  style: B.style,
                  className: B.className,
                  onClick: B.onClick,
                  preferredFocus: ue,
                  onOptionsActionDescription: Te,
                  onOptionsButton: Te ? pe : void 0,
                  children: B.children,
                })
            : null;
        }
      },
      88812: (we, ye, s) => {
        "use strict";
        s.d(ye, { WC: () => f });
        var n = s(9046),
          b = s(5827),
          m = s(75233),
          a = s(80902),
          t = s(71742),
          i = s(68266),
          D = s(85741);
        function f(M, W, p, y, x) {
          const U = (0, m.jE)(),
            T = (0, b.eG)();
          return (0, a.I)(A(U, T, M, W, p, y, x)).data ?? void 0;
        }
        function O(M, W, p, y, x) {
          return [
            "useEventImageForSizeAsArrayWithFallback",
            M?.GID,
            W,
            p,
            y,
            x,
          ];
        }
        function A(M, W, p, y, x, U, T) {
          return {
            queryKey: O(p, y, x, U, T),
            enabled: p && !!p.GID,
            queryFn: async () => {
              if (!p) return null;
              let P = new Array();
              if (!p.BImageNeedScreenshotFallback(y, x)) {
                const E = await M.ensureQueryData((0, i.lx)(M, W, p, y, x, U));
                if ((E && P.push(E), U != n.wI.full)) {
                  const $ = await M.ensureQueryData(
                    (0, i.lx)(M, W, p, y, x, n.wI.full),
                  );
                  $ && P.push($);
                }
              }
              if (!T)
                try {
                  const E = await M.ensureQueryData((0, D.dO)(M, W, p));
                  E && P.push(E);
                } catch (E) {
                  if (
                    ((0, t.wT)(
                      !1,
                      `Failed to get fallback art/screenshot for event ${p?.GID} from clan ${p?.clanSteamID.GetAccountID()}`,
                    ),
                    P.length == 0)
                  )
                    throw E;
                }
              return P;
            },
          };
        }
      },
      68266: (we, ye, s) => {
        "use strict";
        s.d(ye, { lx: () => y, m0: () => W });
        var n = s(9046),
          b = s(55483),
          m = s(72609),
          a = s(21721),
          t = s(5827),
          i = s(40358),
          D = s(75233),
          f = s(80902),
          O = s(18210),
          A = s(53113),
          M = s(85741);
        function W(U, T, P, E = n.wI.full, $ = !0) {
          const X = (0, D.jE)(),
            H = (0, t.eG)();
          return (0, f.I)(y(X, H, U, T, P, E, $)).data ?? void 0;
        }
        function p(U, T, P, E = n.wI.full, $ = !0) {
          return ["useEventImageURLWithFallback", U?.GID, T, P, E, $];
        }
        function y(U, T, P, E, $, X = n.wI.full, H = !0) {
          return {
            queryKey: p(P, E, $, X, H),
            enabled: P && !!P.GID,
            initialData: () => x(P, E, $, X, H),
            queryFn: async () => {
              if (!P) return null;
              let F = x(P, E, $, X, H);
              if (F) return F;
              const j = await U.ensureQueryData(
                (0, b.ec)(P.clanSteamID.GetAccountID(), U),
              );
              if (E == "capsule") {
                let d = P.appid;
                if (
                  !d &&
                  j &&
                  ((j.is_creator_home && !j.is_ogg) || j.is_curator)
                )
                  if (P.jsondata?.referenced_appids?.length)
                    d = P.jsondata.referenced_appids[0];
                  else return j.avatar_full_url;
                const h = await U.ensureQueryData((0, i.AQ)(T, { appid: d }));
                return h
                  ? (0, a.b0)(h, "main_capsule")
                  : j?.avatar_full_url
                    ? j.avatar_full_url
                    : `${m.TS.STORE_ITEM_BASE_URL}steam/apps/${d}/header.jpg`;
              }
              return E == "background" &&
                j &&
                ((j.is_creator_home && !j.is_ogg) || j.is_curator)
                ? j.creator_page_bg_url
                : await U.ensureQueryData((0, M.dO)(U, T, P));
            },
          };
        }
        function x(U, T, P, E = n.wI.full, $ = !0) {
          if (!U) return;
          const X = U.GetImageURL(T, P, E);
          if (X && X.trim().length > 0) return X;
          const H = O.A0.GetELanguageFallback(P);
          if (P != H) {
            const j = U.GetImageURL(T, H, E);
            if (j && j.trim().length > 0) return j;
          }
          if (T == "capsule") {
            let j = U.GetImageFromBeginningOfDescription(P, Number.MAX_VALUE);
            if (j && ($ || (0, A.ZF)(j))) return j;
          }
        }
      },
      85741: (we, ye, s) => {
        "use strict";
        s.d(ye, { Mg: () => f, dO: () => O });
        var n = s(55483),
          b = s(99412),
          m = s(72609),
          a = s(5827),
          t = s(40358),
          i = s(75233),
          D = s(80902);
        function f(M) {
          const W = (0, i.jE)(),
            p = (0, a.eG)();
          return (0, D.I)(O(W, p, M)).data ?? void 0;
        }
        function O(M, W, p) {
          return {
            queryKey: A(p),
            enabled: p && !!p.GID,
            queryFn: async () => {
              if (!p) return null;
              const y = await M.ensureQueryData(
                  (0, t.OE)(W, p.appid ? { appid: p.appid } : void 0),
                ),
                x = await M.ensureQueryData(
                  (0, n.ec)(p.clanSteamID.GetAccountID(), M),
                );
              if (p.appid)
                if (y) {
                  if (
                    y.all_ages_screenshots &&
                    y.all_ages_screenshots.length > 0
                  ) {
                    let U = Number(
                      p.bOldAnnouncement
                        ? p.AnnouncementGID
                        : p.GID == null
                          ? 0
                          : p.GID,
                    );
                    if (y.all_ages_screenshots.length > 1)
                      return (
                        (U = U % y.all_ages_screenshots.length),
                        `${m.TS.STORE_ITEM_BASE_URL}${y.all_ages_screenshots[U].filename}`
                      );
                  }
                } else return "";
              if (
                p.GetEventType() != b.ajI &&
                x &&
                ((x.is_creator_home && !x.is_ogg) || x.is_curator)
              )
                return x.avatar_full_url;
            },
          };
        }
        function A(M) {
          return ["useFallbackArtworkScreenshot", M?.GID];
        }
      },
      90908: (we, ye, s) => {
        "use strict";
        s.d(ye, {
          $G: () => T,
          Hu: () => y,
          TY: () => p,
          VV: () => F,
          Xx: () => H,
          aS: () => P,
          bs: () => W,
          m1: () => x,
          sK: () => f,
          yx: () => O,
        });
        var n = s(99412),
          b = s(72604),
          m = s(34041),
          a = s(72609),
          t = s(75233),
          i = s(80902),
          D = s(51614);
        const f = 4147080,
          O = 2025,
          A = 1764005400,
          M = 1764612e3,
          W = "store/promo/steamawards2025/",
          p = "#173471",
          y = "#ee6c5d",
          x = "#FFFFFF";
        function U(j) {
          return a.TS.EUNIVERSE != n.wLO ? !0 : j >= A && j < M;
        }
        function T(j, o, d, h) {
          const u = U(h),
            g = E(j, o),
            w = E(j, d);
          if (!(!g.length && !w.length))
            return {
              nomination: g.length
                ? { rgCategories: g, bNominationsLive: u }
                : void 0,
              vote: w.length
                ? { rgCategories: w, bNominationsLive: u }
                : void 0,
            };
        }
        function P(j) {
          return j > 0;
        }
        function E(j, o) {
          const d = [];
          for (const h of o.filter(P)) {
            const u = j.find((g) => g.voteid == h);
            u?.localization?.title &&
              d.push({
                eCategoryID: h,
                strTitle: u.localization.title,
                strDescription: u.localization.award_description ?? "",
                bLaborOfLove: u.flag == m.Xs.bV,
              });
          }
          return d;
        }
        function $(j) {
          return ["SteamAwards.GetUserNominations", j];
        }
        function X(j) {
          return ["StoreSales.GetUserVotes", j, f];
        }
        function H(j, o) {
          const d = (0, t.jE)(),
            h = $(a.iA.accountid),
            { data: u } = (0, i.I)({
              queryKey: h,
              queryFn: async () => await o.GetMySteamAwardNominations(),
              enabled: !!a.iA.accountid,
            }),
            { mutate: g } = (0, D.n)({
              mutationFn: async (w) => {
                const te = await o.NominateForSteamAward(w, j);
                if (te != b.R)
                  throw new Error(`SteamAwards.Nominate failed with ${te}`);
              },
              onMutate: (w) =>
                d.setQueryData(h, (te) => [
                  ...(te ?? []).filter((I) => I.category_id != j),
                  { category_id: j, appid: w },
                ]),
              onError: () => d.invalidateQueries({ queryKey: h }),
            });
          return {
            unNominatedAppID: u?.find((w) => w.category_id == j)?.appid,
            bAnswered: u != null || !a.iA.accountid,
            Nominate: g,
          };
        }
        function F(j, o) {
          const d = (0, t.jE)(),
            h = X(a.iA.accountid),
            { data: u } = (0, i.I)({
              queryKey: h,
              queryFn: async () => await o.GetMySteamAwardVotes(),
              enabled: !!a.iA.accountid,
            }),
            { mutate: g } = (0, D.n)({
              mutationFn: async (w) => {
                const te = await o.SetSteamAwardVote(w, j);
                if (te != b.R)
                  throw new Error(`StoreSales.SetVote failed with ${te}`);
              },
              onMutate: (w) =>
                d.setQueryData(h, (te) => [
                  ...(te ?? []).filter((I) => I.voteid != j),
                  { voteid: j, appid: w },
                ]),
              onError: () => d.invalidateQueries({ queryKey: h }),
            });
          return {
            unVotedAppID: u?.find((w) => w.voteid == j)?.appid,
            bAnswered: u != null || !a.iA.accountid,
            Vote: g,
          };
        }
      },
      90711: (we, ye, s) => {
        "use strict";
        s.d(ye, {
          DK: () => At,
          hW: () => Le,
          Lw: () => Ae,
          ku: () => Qe,
          Mn: () => Ie,
          sW: () => b,
          nn: () => n,
        });
        var n = {};
        s.r(n), s.d(n, { Tq: () => O, TC: () => P, fe: () => x });
        var b = {};
        s.r(b), s.d(b, { rx: () => o, XP: () => d });
        var m = s(80613),
          a = s.n(m),
          t = s(75245),
          i = s(35038);
        const D = 0,
          f = 1,
          O = 0,
          A = 1,
          M = 2,
          W = 3,
          p = 4,
          y = 5,
          x = 6,
          U = 7,
          T = 8,
          P = 9,
          E = 10,
          $ = 11,
          X = 12,
          H = 13,
          F = 14,
          j = 15,
          o = 0,
          d = 1,
          h = 2;
        function u(Oe) {
          return "unknown EBroadcastChatPermission ( " + Oe + " )";
        }
        function g(Oe) {
          return "unknown EBroadcastWatchLocation ( " + Oe + " )";
        }
        function w(Oe) {
          return "unknown EBroadcastChatBan ( " + Oe + " )";
        }
        function te(Oe) {
          return "unknown EBroadcastRestriction ( " + Oe + " )";
        }
        class I extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.permission || t.Sg(I.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    client_instance_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    cellid: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    rtmp_token: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    thumbnail_upload: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    sysid: { n: 9, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    allow_webrtc: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = t.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(I.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new I();
            return I.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(I.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(I.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Request";
          }
        }
        class z extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              z.prototype.broadcast_id || t.Sg(z.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_upload_address: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_upload_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_interval_seconds: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    heartbeat_interval_seconds: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = t.w0(z.M())), z.sm_mbf;
          }
          toObject(e = !1) {
            return z.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(z.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(z.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new z();
            return z.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(z.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(z.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Response";
          }
        }
        class _ extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _.prototype.broadcast_id || t.Sg(_.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = t.w0(_.M())), _.sm_mbf;
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(_.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(_.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new _();
            return _.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(_.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(_.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Request";
          }
        }
        class me extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new me();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new me();
            return me.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Response";
          }
        }
        class G extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.broadcast_id || t.Sg(G.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    cellid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    as_rtmp: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                    delay_seconds: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rtmp_token: {
                      n: 5,
                      d: "0",
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    upload_ip_address: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_replay: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                    sysid: { n: 8, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(G.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new G();
            return G.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(G.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(G.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Request";
          }
        }
        class B extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.upload_token || t.Sg(B.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    upload_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    upload_address: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    enable_replay: {
                      n: 6,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    http_address: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = t.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(B.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new B();
            return B.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(B.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(B.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Response";
          }
        }
        class R extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.broadcast_id || t.Sg(R.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_token: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    upload_address: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    http_address: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    heartbeat_interval_seconds: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_rtmp: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = t.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(R.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new R();
            return R.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(R.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(R.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastUploadStarted_Notification";
          }
        }
        class ue extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.steamid || t.Sg(ue.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = t.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ue.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ue();
            return ue.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ue.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ue.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Request";
          }
        }
        class be extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.gameid || t.Sg(be.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    gameid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    num_viewers: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permission: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_rtmp: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                    seconds_delay: {
                      n: 6,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_publisher: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    thumbnail_url: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    update_interval: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_uploading: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    duration: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_replay: { n: 12, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_capturing_vod: {
                      n: 13,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_store_whitelisted: {
                      n: 14,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(be.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new be();
            return be.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(be.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(be.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Response";
          }
        }
        class C extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.steamid || t.Sg(C.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = t.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(C.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new C();
            return C.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(C.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(C.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Request";
          }
        }
        class Q extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.thumbnail_url || t.Sg(Q.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    thumbnail_url: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    update_interval: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    num_viewers: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    duration: { n: 4, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Q.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Q();
            return Q.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Q.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Q.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Response";
          }
        }
        class le extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.steamid || t.Sg(le.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    existing_broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    client_cell: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    watch_location: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    is_webrtc: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(le.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new le();
            return le.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(le.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(le.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Request";
          }
        }
        class ae extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.response || t.Sg(ae.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    response: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    mpd_url: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_id: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    gameid: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    num_viewers: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permission: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_rtmp: { n: 8, br: t.qM.readBool, bw: t.gp.writeBool },
                    seconds_delay: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    viewer_token: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    hls_m3u8_master_url: {
                      n: 11,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    heartbeat_interval: {
                      n: 12,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    thumbnail_url: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_webrtc: { n: 14, br: t.qM.readBool, bw: t.gp.writeBool },
                    webrtc_session_id: {
                      n: 15,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_offer_sdp: {
                      n: 16,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    webrtc_turn_server: {
                      n: 17,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_replay: { n: 18, br: t.qM.readBool, bw: t.gp.writeBool },
                    duration: {
                      n: 19,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    cdn_auth_url_parameters: {
                      n: 20,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = t.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ae.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ae();
            return ae.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ae.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ae.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Response";
          }
        }
        function ve(Oe) {
          return (
            "unknown CBroadcast_WatchBroadcast_Response_EWatchResponse ( " +
            Oe +
            " )"
          );
        }
        class Ee extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.steamid || t.Sg(Ee.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    representation: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ee.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Ee();
            return Ee.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ee.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ee.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_HeartbeatBroadcast_Notification";
          }
        }
        class Pe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.steamid || t.Sg(Pe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = t.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Pe.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Pe();
            return Pe.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Pe.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Pe.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopWatchingBroadcast_Notification";
          }
        }
        class Te extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.steamid || t.Sg(Te.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    approval_response: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = t.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Te.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Te();
            return Te.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Te.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Te.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Request";
          }
        }
        class pe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.success || t.Sg(pe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    success: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(pe.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new pe();
            return pe.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(pe.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(pe.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Response";
          }
        }
        class ee extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.permission || t.Sg(ee.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    game_data_config: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = t.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ee.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ee();
            return ee.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ee.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ee.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Request";
          }
        }
        class ie extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new ie();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ie();
            return ie.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Response";
          }
        }
        class v extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              v.prototype.steamid || t.Sg(v.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    state: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = t.w0(v.M())), v.sm_mbf;
          }
          toObject(e = !1) {
            return v.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(v.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(v.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new v();
            return v.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(v.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(v.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastViewerState_Notification";
          }
        }
        function k(Oe) {
          return (
            "unknown CBroadcast_BroadcastViewerState_Notification_EViewerState ( " +
            Oe +
            " )"
          );
        }
        class q extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.broadcast_id || t.Sg(q.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = t.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(q.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new q();
            return q.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(q.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(q.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WaitingBroadcastViewer_Notification";
          }
        }
        class V extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.broadcast_id || t.Sg(V.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_relay_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    too_many_poor_uploads: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(V.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new V();
            return V.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(V.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(V.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopBroadcastUpload_Notification";
          }
        }
        class ce extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.broadcast_id || t.Sg(ce.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = t.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ce.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ce();
            return ce.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ce.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ce.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SessionClosed_Notification";
          }
        }
        class Me extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.broadcast_id || t.Sg(Me.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = t.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Me.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Me();
            return Me.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Me.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Me.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastStatus_Notification";
          }
        }
        class de extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.broadcast_channel_id || t.Sg(de.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_channel_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_channel_avatar: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = t.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(de.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new de();
            return de.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(de.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(de.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastChannelLive_Notification";
          }
        }
        class xe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.thumbnail_upload_token || t.Sg(xe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    thumbnail_upload_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_broadcast_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_data: {
                      n: 3,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    thumbnail_width: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_height: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = t.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(xe.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new xe();
            return xe.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(xe.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(xe.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendThumbnailToRelay_Notification";
          }
        }
        class se extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.broadcast_upload_id || t.Sg(se.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    broadcast_upload_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = t.w0(se.M())), se.sm_mbf;
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(se.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new se();
            return se.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(se.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(se.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastUploadStop_Notification";
          }
        }
        class oe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.broadcaster_steamid || t.Sg(oe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(oe.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new oe();
            return oe.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(oe.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(oe.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_ViewerBroadcastInvite_Notification";
          }
        }
        class ze extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.broadcast_id || t.Sg(ze.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = t.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ze.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ze();
            return ze.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ze.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ze.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
          }
        }
        class We extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.steamid || t.Sg(We.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    client_ip: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    client_cell: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = t.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(We.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new We();
            return We.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(We.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(We.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Request";
          }
        }
        class Se extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.chat_id || t.Sg(Se.M()),
              m.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = t.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Se.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Se();
            return Se.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Se.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Se.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Response";
          }
        }
        class Ae extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.chat_id || t.Sg(Ae.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    message: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    instance_id: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    language: {
                      n: 4,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    country_code: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = t.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ae.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Ae();
            return Ae.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ae.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ae.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Request";
          }
        }
        class he extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.persona_name || t.Sg(he.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    persona_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    in_game: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    result: { n: 3, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    cooldown_time_seconds: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(he.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new he();
            return he.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(he.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(he.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Response";
          }
        }
        class Ie extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.chat_id || t.Sg(Ie.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ie.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Ie();
            return Ie.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ie.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ie.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Request";
          }
        }
        class Fe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.result || t.Sg(Fe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    result: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    chat_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = t.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Fe.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Fe();
            return Fe.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Fe.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Fe.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Response";
          }
        }
        class Le extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.chat_id || t.Sg(Le.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    muted: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = t.w0(Le.M())), Le.sm_mbf;
          }
          toObject(e = !1) {
            return Le.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Le.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Le.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Le();
            return Le.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Le.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Le.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Request";
          }
        }
        class $e extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new $e();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new $e();
            return $e.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Response";
          }
        }
        class Qe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.chat_id || t.Sg(Qe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = t.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Qe.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Qe();
            return Qe.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Qe.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Qe.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Request";
          }
        }
        class mt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new mt();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new mt();
            return mt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Response";
          }
        }
        class Ye extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.chat_id || t.Sg(Ye.M()),
              m.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = t.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ye.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Ye();
            return Ye.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ye.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ye.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Request";
          }
        }
        class _e extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.persona_names || t.Sg(_e.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: { persona_names: { n: 1, c: st, r: !0, q: !0 } },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(_e.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new _e();
            return _e.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(_e.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(_e.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response";
          }
        }
        class st extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.steam_id || t.Sg(st.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    steam_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    persona: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = t.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(st.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new st();
            return st.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(st.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(st.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
          }
        }
        class qe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.steamid || t.Sg(qe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    first_segment: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    num_segments: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    clip_description: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = t.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(qe.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new qe();
            return qe.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(qe.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(qe.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Request";
          }
        }
        class Ce extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.broadcast_clip_id || t.Sg(Ce.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = t.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ce.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Ce();
            return Ce.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ce.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ce.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Response";
          }
        }
        class rt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.broadcast_clip_id || t.Sg(rt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = t.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(rt.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new rt();
            return rt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(rt.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(rt.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Request";
          }
        }
        class ct extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new ct();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ct();
            return ct.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Response";
          }
        }
        class et extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.broadcast_clip_id || t.Sg(et.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    start_time: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    end_time: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    video_description: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = t.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(et.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new et();
            return et.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(et.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(et.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Request";
          }
        }
        class ft extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new ft();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ft();
            return ft.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Response";
          }
        }
        class Ze extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.broadcast_clip_id || t.Sg(Ze.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = t.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ze.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Ze();
            return Ze.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ze.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ze.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Request";
          }
        }
        class lt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.broadcast_clip_id || t.Sg(lt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    video_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    accountid_broadcaster: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    accountid_clipmaker: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    video_description: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    start_time: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    length_milliseconds: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = t.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(lt.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new lt();
            return lt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(lt.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(lt.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Response";
          }
        }
        class tt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.broadcast_permission || t.Sg(tt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    update_token: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    broadcast_delay: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_id: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    required_app_id: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 6,
                      d: D,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steamid: {
                      n: 8,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    wordban_list: {
                      n: 12,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = t.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(tt.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new tt();
            return tt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(tt.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(tt.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Request";
          }
        }
        class yt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new yt();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new yt();
            return yt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Response";
          }
        }
        class He extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.ip || t.Sg(He.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    ip: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = t.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(He.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new He();
            return He.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(He.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(He.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Request";
          }
        }
        class Ge extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.broadcast_permission || t.Sg(Ge.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    rtmp_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rtmp_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_delay: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_id: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    required_app_id: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 7,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 8,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steamid: {
                      n: 9,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 12,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    wordban_list: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = t.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ge.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Ge();
            return Ge.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ge.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ge.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Response";
          }
        }
        class ne extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.row_limit || t.Sg(ne.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    row_limit: {
                      n: 1,
                      d: 100,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    start_time: {
                      n: 2,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    session_id: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = t.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ne.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ne();
            return ne.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ne.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ne.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Request";
          }
        }
        class N extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              N.prototype.upload_stats || t.Sg(N.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: { upload_stats: { n: 1, c: Y, r: !0, q: !0 } },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = t.w0(N.M())), N.sm_mbf;
          }
          toObject(e = !1) {
            return N.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(N.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(N.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new N();
            return N.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(N.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(N.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response";
          }
        }
        class Y extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.upload_result || t.Sg(Y.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    upload_result: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_stopped: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    seconds_uploaded: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    max_viewers: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_x: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    avg_bandwidth: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_bytes: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 9, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    total_unique_viewers: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_seconds_watched: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_started: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_id: {
                      n: 13,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    local_address: {
                      n: 14,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    remote_address: {
                      n: 15,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    frames_per_second: {
                      n: 16,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    num_representations: {
                      n: 17,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    app_name: {
                      n: 18,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_replay: { n: 19, br: t.qM.readBool, bw: t.gp.writeBool },
                    session_id: {
                      n: 20,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Y.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Y();
            return Y.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Y.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Y.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
          }
        }
        class r extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              r.prototype.upload_id || t.Sg(r.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              r.sm_m ||
                (r.sm_m = {
                  proto: r,
                  fields: {
                    upload_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              r.sm_m
            );
          }
          static MBF() {
            return r.sm_mbf || (r.sm_mbf = t.w0(r.M())), r.sm_mbf;
          }
          toObject(e = !1) {
            return r.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(r.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(r.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new r();
            return r.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(r.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(r.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              r.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Request";
          }
        }
        class c extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              c.prototype.viewer_stats || t.Sg(c.M()),
              m.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    viewer_stats: { n: 1, c: S, r: !0, q: !0 },
                    country_stats: { n: 2, c: Be, r: !0, q: !0 },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = t.w0(c.M())), c.sm_mbf;
          }
          toObject(e = !1) {
            return c.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(c.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(c.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new c();
            return c.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(c.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(c.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response";
          }
        }
        class S extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.time || t.Sg(S.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    time: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = t.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(S.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new S();
            return S.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(S.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(S.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
          }
        }
        class Be extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.country_code || t.Sg(Be.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    country_code: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = t.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Be.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Be();
            return Be.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Be.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Be.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
          }
        }
        class Ke extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.webrtc_session_id || t.Sg(Ke.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    started: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    offer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    resolution_x: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    fps: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = t.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ke.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Ke();
            return Ke.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ke.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ke.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Request";
          }
        }
        class Je extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new Je();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Je();
            return Je.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Response";
          }
        }
        class at extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.webrtc_session_id || t.Sg(at.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = t.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(at.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new at();
            return at.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(at.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(at.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Request";
          }
        }
        class vt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return vt.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new vt();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new vt();
            return vt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Response";
          }
        }
        class Xe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.broadcaster_steamid || t.Sg(Xe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = t.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Xe.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Xe();
            return Xe.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Xe.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Xe.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Request";
          }
        }
        class bt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new bt();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new bt();
            return bt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Response";
          }
        }
        class it extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.sdp_mid || t.Sg(it.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    sdp_mid: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sdp_mline_index: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    candidate: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = t.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(it.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new it();
            return it.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(it.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(it.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTC_Candidate";
          }
        }
        class Ue extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.webrtc_session_id || t.Sg(Ue.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 2, c: it },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = t.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Ue.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Ue();
            return Ue.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Ue.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Ue.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Request";
          }
        }
        class nt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new nt();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new nt();
            return nt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Response";
          }
        }
        class De extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.broadcaster_steamid || t.Sg(De.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: it },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = t.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(De.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new De();
            return De.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(De.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(De.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Request";
          }
        }
        class ht extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new ht();
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ht();
            return ht.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Response";
          }
        }
        class ut extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.broadcaster_steamid || t.Sg(ut.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate_generation: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = t.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ut.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ut();
            return ut.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ut.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ut.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Request";
          }
        }
        class ot extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.candidate_generation || t.Sg(ot.M()),
              m.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    candidate_generation: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    candidates: { n: 2, c: it, r: !0, q: !0 },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = t.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(ot.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new ot();
            return ot.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(ot.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(ot.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Response";
          }
        }
        class dt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.broadcast_session_id || t.Sg(dt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = t.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(dt.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new dt();
            return dt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(dt.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(dt.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCNeedTURNServer_Notification";
          }
        }
        class wt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              wt.prototype.cellid || t.Sg(wt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    cellid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = t.w0(wt.M())), wt.sm_mbf;
          }
          toObject(e = !1) {
            return wt.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(wt.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(wt.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new wt();
            return wt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(wt.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(wt.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Request";
          }
        }
        class gt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.turn_server || t.Sg(gt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    turn_server: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = t.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(gt.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new gt();
            return gt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(gt.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(gt.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Response";
          }
        }
        class jt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jt.prototype.broadcast_session_id || t.Sg(jt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    turn_server: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = t.w0(jt.M())), jt.sm_mbf;
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(jt.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(jt.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new jt();
            return jt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(jt.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(jt.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCHaveTURNServer_Notification";
          }
        }
        class Et extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Et.prototype.broadcast_session_id || t.Sg(Et.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = t.w0(Et.M())), Et.sm_mbf;
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(Et.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(Et.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new Et();
            return Et.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(Et.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(Et.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStart_Notification";
          }
        }
        class zt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              zt.prototype.broadcast_session_id || t.Sg(zt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = t.w0(zt.M())), zt.sm_mbf;
          }
          toObject(e = !1) {
            return zt.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(zt.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(zt.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new zt();
            return zt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(zt.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(zt.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Notification";
          }
        }
        class xt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xt.prototype.broadcast_session_id || t.Sg(xt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: it },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = t.w0(xt.M())), xt.sm_mbf;
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, l) {
            return t.BT(xt.M(), e, l);
          }
          static fromObject(e) {
            return t.Uq(xt.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (a().BinaryReader)(e),
              J = new xt();
            return xt.deserializeBinaryFromReader(J, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return t.zj(xt.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (a().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            t.i0(xt.M(), e, l);
          }
          serializeBase64String() {
            var e = new (a().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Notification";
          }
        }
        var At;
        ((Oe) => {
          function e(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.BeginBroadcastSession#1",
              (0, i.I8)(I, ke, Ve),
              z,
              { ePrivilege: 1 },
            );
          }
          Oe.BeginBroadcastSession = e;
          function l(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, i.I8)(_, ke, Ve),
              me,
              { ePrivilege: 1 },
            );
          }
          Oe.EndBroadcastSession = l;
          function J(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, i.I8)(G, ke, Ve),
              B,
              { ePrivilege: 1 },
            );
          }
          Oe.StartBroadcastUpload = J;
          function Ft(Ne, ke) {
            return Ne.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, i.I8)(se, ke),
              { ePrivilege: 1 },
            );
          }
          Oe.NotifyBroadcastUploadStop = Ft;
          function Gt(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, i.I8)(le, ke, Ve),
              ae,
              { ePrivilege: 2 },
            );
          }
          Oe.WatchBroadcast = Gt;
          function Rt(Ne, ke) {
            return Ne.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, i.I8)(Ee, ke),
              { ePrivilege: 2 },
            );
          }
          Oe.HeartbeatBroadcast = Rt;
          function Tt(Ne, ke) {
            return Ne.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, i.I8)(Pe, ke),
              { ePrivilege: 2 },
            );
          }
          Oe.StopWatchingBroadcast = Tt;
          function qt(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, i.I8)(ue, ke, Ve),
              be,
              { ePrivilege: 2 },
            );
          }
          Oe.GetBroadcastStatus = qt;
          function Ct(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, i.I8)(C, ke, Ve),
              Q,
              { ePrivilege: 2 },
            );
          }
          Oe.GetBroadcastThumbnail = Ct;
          function _t(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, i.I8)(Te, ke, Ve),
              pe,
              { ePrivilege: 1 },
            );
          }
          Oe.InviteToBroadcast = _t;
          function Ht(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, i.I8)(ee, ke, Ve),
              ie,
              { ePrivilege: 1 },
            );
          }
          Oe.SendBroadcastStateToServer = Ht;
          function Ut(Ne, ke) {
            return Ne.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, i.I8)(ze, ke),
              { ePrivilege: 1 },
            );
          }
          Oe.NotifyBroadcastSessionHeartbeat = Ut;
          function Dt(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, i.I8)(We, ke, Ve),
              Se,
              { ePrivilege: 2 },
            );
          }
          Oe.GetBroadcastChatInfo = Dt;
          function Wt(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, i.I8)(Ae, ke, Ve),
              he,
              { ePrivilege: 3 },
            );
          }
          Oe.PostChatMessage = Wt;
          function er(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, i.I8)(Ie, ke, Ve),
              Fe,
              { ePrivilege: 1 },
            );
          }
          Oe.UpdateChatMessageFlair = er;
          function tr(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, i.I8)(Le, ke, Ve),
              $e,
              { ePrivilege: 3 },
            );
          }
          Oe.MuteBroadcastChatUser = tr;
          function rr(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, i.I8)(Qe, ke, Ve),
              mt,
              { ePrivilege: 3 },
            );
          }
          Oe.RemoveUserChatText = rr;
          function ir(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, i.I8)(Ye, ke, Ve),
              _e,
              { ePrivilege: 1 },
            );
          }
          Oe.GetBroadcastChatUserNames = ir;
          function nr(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, i.I8)(qe, ke, Ve),
              Ce,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Oe.StartBuildClip = nr;
          function sr(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, i.I8)(rt, ke, Ve),
              ct,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Oe.GetBuildClipStatus = sr;
          function lr(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, i.I8)(et, ke, Ve),
              ft,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Oe.SetClipDetails = lr;
          function ar(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, i.I8)(Ze, ke, Ve),
              lt,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          Oe.GetClipDetails = ar;
          function Nt(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.SetRTMPInfo#1",
              (0, i.I8)(tt, ke, Ve),
              yt,
              { ePrivilege: 1 },
            );
          }
          Oe.SetRTMPInfo = Nt;
          function Qt(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.GetRTMPInfo#1",
              (0, i.I8)(He, ke, Ve),
              Ge,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Oe.GetRTMPInfo = Qt;
          function $t(Ne, ke) {
            return Ne.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, i.I8)(jt, ke),
              { ePrivilege: 1 },
            );
          }
          Oe.NotifyWebRTCHaveTURNServer = $t;
          function or(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, i.I8)(Ke, ke, Ve),
              Je,
              { ePrivilege: 1 },
            );
          }
          Oe.WebRTCStartResult = or;
          function mr(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, i.I8)(at, ke, Ve),
              vt,
              { ePrivilege: 1 },
            );
          }
          Oe.WebRTCStopped = mr;
          function cr(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, i.I8)(Xe, ke, Ve),
              bt,
              { ePrivilege: 1 },
            );
          }
          Oe.WebRTCSetAnswer = cr;
          function Zt(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, i.I8)(wt, ke, Ve),
              gt,
              { ePrivilege: 1 },
            );
          }
          Oe.WebRTCLookupTURNServer = Zt;
          function Xt(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, i.I8)(Ue, ke, Ve),
              nt,
              { ePrivilege: 1 },
            );
          }
          Oe.WebRTCAddHostCandidate = Xt;
          function Pt(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, i.I8)(De, ke, Ve),
              ht,
              { ePrivilege: 1 },
            );
          }
          Oe.WebRTCAddViewerCandidate = Pt;
          function Jt(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, i.I8)(ut, ke, Ve),
              ot,
              { ePrivilege: 1 },
            );
          }
          Oe.WebRTCGetHostCandidates = Jt;
          function ur(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, i.I8)(ne, ke, Ve),
              N,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Oe.GetBroadcastUploadStats = ur;
          function fr(Ne, ke, Ve) {
            return Ne.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, i.I8)(r, ke, Ve),
              c,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Oe.GetBroadcastViewerStats = fr;
        })(At || (At = {}));
        var Mt;
        ((Oe) => {
          (Oe.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: v,
          }),
            (Oe.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: q,
            }),
            (Oe.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: R,
            }),
            (Oe.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: V,
            }),
            (Oe.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: ce,
            }),
            (Oe.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: oe,
            }),
            (Oe.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: Me,
            }),
            (Oe.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: de,
            }),
            (Oe.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: xe,
            }),
            (Oe.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: dt,
            }),
            (Oe.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: Et,
            }),
            (Oe.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: zt,
            }),
            (Oe.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: xt,
            });
        })(Mt || (Mt = {}));
      },
      61639: (we, ye, s) => {
        "use strict";
        s.d(ye, { Mc: () => n });
        var n = {};
        s.r(n),
          s.d(n, {
            Ms: () => H,
            n6: () => p,
            U6: () => f,
            kz: () => M,
            ej: () => o,
            R: () => j,
            mZ: () => F,
            Is: () => x,
            B_: () => O,
            bW: () => A,
            iy: () => D,
          });
        var b = s(80613),
          m = s.n(b),
          a = s(75245),
          t = s(35038);
        const i = 0,
          D = 1,
          f = 2,
          O = 3,
          A = 4,
          M = 5,
          W = 6,
          p = 7,
          y = 8,
          x = 9,
          U = 10,
          T = 11,
          P = 12,
          E = 13,
          $ = 14,
          X = 15,
          H = 16,
          F = 17,
          j = 18,
          o = 19;
        function d(me) {
          return "unknown EProductPageAction ( " + me + " )";
        }
        function h(me) {
          return "unknown EProductViewAction ( " + me + " )";
        }
        function u(me) {
          return "unknown EProductImpressionFromClientType ( " + me + " )";
        }
        function g(me) {
          return "unknown ETrackedEmailType ( " + me + " )";
        }
        function w(me) {
          return (
            "unknown EUnifiedProductInteractionStoreItemType ( " + me + " )"
          );
        }
        function te(me) {
          return "unknown EUnifedProductInteractionActions ( " + me + " )";
        }
        class I extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(G = null) {
            super(),
              I.prototype.impressions || a.Sg(I.M()),
              b.Message.initialize(this, G, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: { impressions: { n: 1, c: z, r: !0, q: !0 } },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = a.w0(I.M())), I.sm_mbf;
          }
          toObject(G = !1) {
            return I.toObject(G, this);
          }
          static toObject(G, B) {
            return a.BT(I.M(), G, B);
          }
          static fromObject(G) {
            return a.Uq(I.M(), G);
          }
          static deserializeBinary(G) {
            let B = new (m().BinaryReader)(G),
              R = new I();
            return I.deserializeBinaryFromReader(R, B);
          }
          static deserializeBinaryFromReader(G, B) {
            return a.zj(I.MBF(), G, B);
          }
          serializeBinary() {
            var G = new (m().BinaryWriter)();
            return I.serializeBinaryToWriter(this, G), G.getResultBuffer();
          }
          static serializeBinaryToWriter(G, B) {
            a.i0(I.M(), G, B);
          }
          serializeBase64String() {
            var G = new (m().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, G), G.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification";
          }
        }
        class z extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(G = null) {
            super(),
              z.prototype.type || a.Sg(z.M()),
              b.Message.initialize(this, G, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                    appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    num_impressions: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = a.w0(z.M())), z.sm_mbf;
          }
          toObject(G = !1) {
            return z.toObject(G, this);
          }
          static toObject(G, B) {
            return a.BT(z.M(), G, B);
          }
          static fromObject(G) {
            return a.Uq(z.M(), G);
          }
          static deserializeBinary(G) {
            let B = new (m().BinaryReader)(G),
              R = new z();
            return z.deserializeBinaryFromReader(R, B);
          }
          static deserializeBinaryFromReader(G, B) {
            return a.zj(z.MBF(), G, B);
          }
          serializeBinary() {
            var G = new (m().BinaryWriter)();
            return z.serializeBinaryToWriter(this, G), G.getResultBuffer();
          }
          static serializeBinaryToWriter(G, B) {
            a.i0(z.M(), G, B);
          }
          serializeBase64String() {
            var G = new (m().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, G), G.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification_Impression";
          }
        }
        var _;
        ((me) => {
          function G(B, R) {
            return B.SendNotification(
              "ExperimentService.ReportProductImpressionsFromClient#1",
              (0, t.I8)(I, R),
              { ePrivilege: 1 },
            );
          }
          me.ReportProductImpressionsFromClient = G;
        })(_ || (_ = {}));
      },
      68450: (we, ye, s) => {
        "use strict";
        s.d(ye, { Ku: () => t, Vj: () => D, ZK: () => F, q3: () => A });
        var n = s(80613),
          b = s.n(n),
          m = s(75245),
          a = s(35038);
        class t extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              t.prototype.clan_event_gid || m.Sg(t.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              t.sm_m ||
                (t.sm_m = {
                  proto: t,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    registration_group_id: {
                      n: 3,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    registration_session_id: {
                      n: 4,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    guest_count: {
                      n: 5,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    jsondata: {
                      n: 7,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    skip_email: { n: 8, br: m.qM.readBool, bw: m.gp.writeBool },
                  },
                }),
              t.sm_m
            );
          }
          static MBF() {
            return t.sm_mbf || (t.sm_mbf = m.w0(t.M())), t.sm_mbf;
          }
          toObject(o = !1) {
            return t.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(t.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(t.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new t();
            return t.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(t.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return t.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(t.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              t.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_UpdateRegistration_Request";
          }
        }
        class i extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(), n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          toObject(o = !1) {
            return i.toObject(o, this);
          }
          static toObject(o, d) {
            return o ? { $jspbMessageInstance: d } : {};
          }
          static fromObject(o) {
            return new i();
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new i();
            return i.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return o;
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return i.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {}
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              i.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_UpdateRegistration_Response";
          }
        }
        class D extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              D.prototype.clan_event_gid || m.Sg(D.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = m.w0(D.M())), D.sm_mbf;
          }
          toObject(o = !1) {
            return D.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(D.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(D.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new D();
            return D.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(D.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return D.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(D.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Request";
          }
        }
        class f extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              f.prototype.availability || m.Sg(f.M()),
              n.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: { availability: { n: 1, c: O, r: !0, q: !0 } },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = m.w0(f.M())), f.sm_mbf;
          }
          toObject(o = !1) {
            return f.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(f.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(f.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new f();
            return f.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(f.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return f.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(f.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response";
          }
        }
        class O extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              O.prototype.group_id || m.Sg(O.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    group_id: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    session_id: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    guest_count: {
                      n: 3,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = m.w0(O.M())), O.sm_mbf;
          }
          toObject(o = !1) {
            return O.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(O.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(O.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new O();
            return O.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(O.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return O.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(O.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response_Session";
          }
        }
        class A extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              A.prototype.clan_event_gid || m.Sg(A.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = m.w0(A.M())), A.sm_mbf;
          }
          toObject(o = !1) {
            return A.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(A.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(A.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new A();
            return A.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(A.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return A.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(A.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Request";
          }
        }
        class M extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              M.prototype.registrations || m.Sg(M.M()),
              n.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: { registrations: { n: 1, c: W, r: !0, q: !0 } },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = m.w0(M.M())), M.sm_mbf;
          }
          toObject(o = !1) {
            return M.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(M.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(M.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new M();
            return M.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(M.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return M.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(M.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response";
          }
        }
        class W extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              W.prototype.group_id || m.Sg(W.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    group_id: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    session_id: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    steamid: {
                      n: 3,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    guests_registered: {
                      n: 4,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    jsondata: {
                      n: 5,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    rt_attendance_marked: {
                      n: 6,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    attendance_count: {
                      n: 7,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    guests_attendance: {
                      n: 8,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = m.w0(W.M())), W.sm_mbf;
          }
          toObject(o = !1) {
            return W.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(W.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(W.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new W();
            return W.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(W.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return W.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(W.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response_Registration";
          }
        }
        class p extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              p.prototype.clan_event_gid || m.Sg(p.M()),
              n.Message.initialize(this, o, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    accountids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: m.qM.readUint32,
                      pbr: m.qM.readPackedUint32,
                      bw: m.gp.writeRepeatedUint32,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = m.w0(p.M())), p.sm_mbf;
          }
          toObject(o = !1) {
            return p.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(p.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(p.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new p();
            return p.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(p.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return p.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(p.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Request";
          }
        }
        class y extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              y.prototype.num_emailed || m.Sg(y.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    num_emailed: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    num_skipped: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = m.w0(y.M())), y.sm_mbf;
          }
          toObject(o = !1) {
            return y.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(y.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(y.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new y();
            return y.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(y.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return y.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(y.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Response";
          }
        }
        class x extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              x.prototype.clan_event_gid || m.Sg(x.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = m.w0(x.M())), x.sm_mbf;
          }
          toObject(o = !1) {
            return x.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(x.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(x.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new x();
            return x.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(x.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return x.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(x.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Request";
          }
        }
        class U extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              U.prototype.sessionids || m.Sg(U.M()),
              n.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    sessionids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: m.qM.readUint32,
                      pbr: m.qM.readPackedUint32,
                      bw: m.gp.writeRepeatedUint32,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = m.w0(U.M())), U.sm_mbf;
          }
          toObject(o = !1) {
            return U.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(U.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(U.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new U();
            return U.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(U.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return U.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(U.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Response";
          }
        }
        class T extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              T.prototype.rt_oldest_date || m.Sg(T.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    rt_oldest_date: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = m.w0(T.M())), T.sm_mbf;
          }
          toObject(o = !1) {
            return T.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(T.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(T.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new T();
            return T.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(T.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return T.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(T.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Request";
          }
        }
        class P extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              P.prototype.accountid || m.Sg(P.M()),
              n.Message.initialize(this, o, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    accountid: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    clan_event_gids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: m.qM.readFixed64String,
                      pbr: m.qM.readPackedFixed64String,
                      bw: m.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = m.w0(P.M())), P.sm_mbf;
          }
          toObject(o = !1) {
            return P.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(P.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(P.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new P();
            return P.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(P.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return P.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(P.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleEventOrganizerInfo";
          }
        }
        class E extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              E.prototype.info || m.Sg(E.M()),
              n.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: { info: { n: 1, c: P, r: !0, q: !0 } },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = m.w0(E.M())), E.sm_mbf;
          }
          toObject(o = !1) {
            return E.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(E.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(E.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new E();
            return E.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(E.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return E.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(E.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Response";
          }
        }
        class $ extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              $.prototype.accountids || m.Sg($.M()),
              n.Message.initialize(this, o, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    accountids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: m.qM.readUint32,
                      pbr: m.qM.readPackedUint32,
                      bw: m.gp.writeRepeatedUint32,
                    },
                    partnerids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: m.qM.readUint32,
                      pbr: m.qM.readPackedUint32,
                      bw: m.gp.writeRepeatedUint32,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = m.w0($.M())), $.sm_mbf;
          }
          toObject(o = !1) {
            return $.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT($.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq($.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new $();
            return $.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj($.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return $.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0($.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request";
          }
        }
        class X extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              X.prototype.accountid || m.Sg(X.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    accountid: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    partnerid: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    realname: {
                      n: 3,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    email: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = m.w0(X.M())), X.sm_mbf;
          }
          toObject(o = !1) {
            return X.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(X.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(X.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new X();
            return X.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(X.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return X.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(X.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerEmailAndName";
          }
        }
        class H extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              H.prototype.info || m.Sg(H.M()),
              n.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: { info: { n: 1, c: X, r: !0, q: !0 } },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = m.w0(H.M())), H.sm_mbf;
          }
          toObject(o = !1) {
            return H.toObject(o, this);
          }
          static toObject(o, d) {
            return m.BT(H.M(), o, d);
          }
          static fromObject(o) {
            return m.Uq(H.M(), o);
          }
          static deserializeBinary(o) {
            let d = new (b().BinaryReader)(o),
              h = new H();
            return H.deserializeBinaryFromReader(h, d);
          }
          static deserializeBinaryFromReader(o, d) {
            return m.zj(H.MBF(), o, d);
          }
          serializeBinary() {
            var o = new (b().BinaryWriter)();
            return H.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, d) {
            m.i0(H.M(), o, d);
          }
          serializeBase64String() {
            var o = new (b().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response";
          }
        }
        var F;
        ((j) => {
          function o(I, z, _) {
            return I.SendMsg(
              "PartnerMeetSteam.UpdateRegistration#1",
              (0, a.I8)(t, z, _),
              i,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          j.UpdateRegistration = o;
          function d(I, z, _) {
            return I.SendMsg(
              "PartnerMeetSteam.GetAvailability#1",
              (0, a.I8)(D, z, _),
              f,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          j.GetAvailability = d;
          function h(I, z, _) {
            return I.SendMsg(
              "PartnerMeetSteam.GetRegistrations#1",
              (0, a.I8)(A, z, _),
              M,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          j.GetRegistrations = h;
          function u(I, z, _) {
            return I.SendMsg(
              "PartnerMeetSteam.EmailInvitees#1",
              (0, a.I8)(p, z, _),
              y,
              { ePrivilege: 4 },
            );
          }
          j.EmailInvitees = u;
          function g(I, z, _) {
            return I.SendMsg(
              "PartnerMeetSteam.TestFireEmails#1",
              (0, a.I8)(x, z, _),
              U,
              { ePrivilege: 4 },
            );
          }
          j.TestFireEmails = g;
          function w(I, z, _) {
            return I.SendMsg(
              "PartnerMeetSteam.GetSaleEventOrganizers#1",
              (0, a.I8)(T, z, _),
              E,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          j.GetSaleEventOrganizers = w;
          function te(I, z, _) {
            return I.SendMsg(
              "PartnerMeetSteam.GetBatchPartnerEmailAndName#1",
              (0, a.I8)($, z, _),
              H,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          j.GetBatchPartnerEmailAndName = te;
        })(F || (F = {}));
      },
      92854: (we, ye, s) => {
        "use strict";
        s.d(ye, {
          iL: () => ft,
          V4: () => Ye,
          mb: () => Ie,
          BY: () => tt,
          Ry: () => oe,
          DI: () => Le,
          XC: () => We,
          Dk: () => n,
          Db: () => m,
          hb: () => b,
          Nl: () => N,
        });
        var n = {};
        s.r(n), s.d(n, { rV: () => y });
        var b = {};
        s.r(b), s.d(b, { uI: () => E, ym: () => P, QB: () => $ });
        var m = {};
        s.r(m), s.d(m, { UO: () => te, pR: () => w });
        var a = s(80613),
          t = s.n(a),
          i = s(75245),
          D = s(35038);
        const f = 0,
          O = 1,
          A = 2,
          M = 3,
          W = 4,
          p = 5,
          y = 6,
          x = 7,
          U = 8,
          T = 0,
          P = 1,
          E = 2,
          $ = 3,
          X = 4,
          H = 0,
          F = 1,
          j = 2,
          o = 3,
          d = 4,
          h = 5,
          u = 6,
          g = 7,
          w = 8,
          te = 9,
          I = 10,
          z = 11;
        function _(Y) {
          return "unknown ESeason ( " + Y + " )";
        }
        function me(Y) {
          return "unknown EUserActionEventType ( " + Y + " )";
        }
        function G(Y) {
          return "unknown EYearInReviewPrivacyState ( " + Y + " )";
        }
        function B(Y) {
          return "unknown EYearInReviewAccessSource ( " + Y + " )";
        }
        class R extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.total_playtime_seconds || i.Sg(R.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    total_playtime_seconds: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_sessions: {
                      n: 20,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    vr_sessions: {
                      n: 21,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    deck_sessions: {
                      n: 22,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    controller_sessions: {
                      n: 23,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    linux_sessions: {
                      n: 24,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    macos_sessions: {
                      n: 25,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    windows_sessions: {
                      n: 26,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_playtime_percentagex100: {
                      n: 27,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    vr_playtime_percentagex100: {
                      n: 28,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    deck_playtime_percentagex100: {
                      n: 29,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    controller_playtime_percentagex100: {
                      n: 30,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    linux_playtime_percentagex100: {
                      n: 31,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    macos_playtime_percentagex100: {
                      n: 32,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    windows_playtime_percentagex100: {
                      n: 33,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = i.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(R.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new R();
            return R.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(R.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(R.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStats";
          }
        }
        class ue extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ue.prototype.appid || i.Sg(ue.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = i.w0(ue.M())), ue.sm_mbf;
          }
          toObject(r = !1) {
            return ue.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(ue.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(ue.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new ue();
            return ue.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(ue.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(ue.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreakGame";
          }
        }
        class be extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              be.prototype.longest_consecutive_days || i.Sg(be.M()),
              a.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    longest_consecutive_days: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_start: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    streak_games: { n: 3, c: ue, r: !0, q: !0 },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = i.w0(be.M())), be.sm_mbf;
          }
          toObject(r = !1) {
            return be.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(be.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(be.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new be();
            return be.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(be.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return be.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(be.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreak";
          }
        }
        class C extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.overall_rank || i.Sg(C.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    overall_rank: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    vr_rank: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    deck_rank: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    controller_rank: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    linux_rank: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    mac_rank: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    windows_rank: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = i.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(C.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new C();
            return C.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(C.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(C.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeRanks";
          }
        }
        class Q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.appid || i.Sg(Q.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    stats: { n: 2, c: R },
                    playtime_streak: { n: 3, c: be },
                    playtime_ranks: { n: 4, c: C },
                    rtime_first_played: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    relative_game_stats: { n: 6, c: R },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = i.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Q.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Q();
            return Q.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Q.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Q.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePlaytimeStats";
          }
        }
        class le extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              le.prototype.appid || i.Sg(le.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    new_this_year: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    rtime_first_played_lifetime: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    demo: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    playtest: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                    played_during_early_access: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    played_vr: { n: 7, br: i.qM.readBool, bw: i.gp.writeBool },
                    played_deck: {
                      n: 8,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    played_controller: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    played_linux: {
                      n: 10,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    played_mac: {
                      n: 11,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    played_windows: {
                      n: 12,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    total_playtime_percentagex100: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_sessions: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_release_date: {
                      n: 15,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    parent_appid: {
                      n: 16,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = i.w0(le.M())), le.sm_mbf;
          }
          toObject(r = !1) {
            return le.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(le.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(le.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new le();
            return le.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(le.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return le.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(le.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameSummary";
          }
        }
        class ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ae.prototype.appid || i.Sg(ae.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    total_playtime_percentagex100: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    relative_playtime_percentagex100: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = i.w0(ae.M())), ae.sm_mbf;
          }
          toObject(r = !1) {
            return ae.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(ae.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(ae.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new ae();
            return ae.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(ae.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(ae.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSimpleGameSummary";
          }
        }
        class ve extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ve.prototype.appid || i.Sg(ve.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    rank: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    relative_playtime_percentagex100: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = i.w0(ve.M())), ve.sm_mbf;
          }
          toObject(r = !1) {
            return ve.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(ve.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(ve.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new ve();
            return ve.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(ve.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(ve.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRank";
          }
        }
        class Ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ee.prototype.category || i.Sg(Ee.M()),
              a.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    category: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    rankings: { n: 2, c: ve, r: !0, q: !0 },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = i.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(r = !1) {
            return Ee.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Ee.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Ee.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Ee();
            return Ee.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Ee.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Ee.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CRankingCategory";
          }
        }
        class Pe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pe.prototype.overall_ranking || i.Sg(Pe.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    overall_ranking: { n: 1, c: Ee },
                    vr_ranking: { n: 2, c: Ee },
                    deck_ranking: { n: 3, c: Ee },
                    controller_ranking: { n: 4, c: Ee },
                    linux_ranking: { n: 5, c: Ee },
                    mac_ranking: { n: 6, c: Ee },
                    windows_ranking: { n: 7, c: Ee },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = i.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(r = !1) {
            return Pe.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Pe.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Pe.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Pe();
            return Pe.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Pe.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Pe.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRankings";
          }
        }
        class Te extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Te.prototype.total_achievements || i.Sg(Te.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    total_achievements: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_games_with_achievements: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_rare_achievements: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = i.w0(Te.M())), Te.sm_mbf;
          }
          toObject(r = !1) {
            return Te.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Te.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Te.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Te();
            return Te.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Te.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Te.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeSummaryStats";
          }
        }
        class pe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pe.prototype.stats || i.Sg(pe.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: { stats: { n: 1, c: ee, r: !0, q: !0 } },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = i.w0(pe.M())), pe.sm_mbf;
          }
          toObject(r = !1) {
            return pe.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(pe.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(pe.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new pe();
            return pe.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(pe.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(pe.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats";
          }
        }
        class ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ee.prototype.tag_id || i.Sg(ee.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    tag_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    tag_weight: {
                      n: 2,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    tag_weight_pre_selection: {
                      n: 3,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = i.w0(ee.M())), ee.sm_mbf;
          }
          toObject(r = !1) {
            return ee.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(ee.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(ee.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new ee();
            return ee.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(ee.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(ee.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats_Tag";
          }
        }
        class ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ie.prototype.screenshots_shared || i.Sg(ie.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    screenshots_shared: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    gifts_sent: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    loyalty_reactions: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    written_reviews: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    guides_submitted: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    workshop_contributions: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    badges_earned: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    friends_added: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    forum_posts: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    workshop_subscriptions: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    guide_subscribers: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    workshop_subscribers: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    games_played_pct: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    achievements_pct: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    game_streak_pct: {
                      n: 15,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    games_played_avg: {
                      n: 16,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    achievements_avg: {
                      n: 17,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    game_streak_avg: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = i.w0(ie.M())), ie.sm_mbf;
          }
          toObject(r = !1) {
            return ie.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(ie.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(ie.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new ie();
            return ie.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(ie.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(ie.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeByNumbers";
          }
        }
        class v extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.total_stats || i.Sg(v.M()),
              a.Message.initialize(this, r, 0, -1, [2, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    total_stats: { n: 1, c: R },
                    games: { n: 2, c: Q, r: !0, q: !0 },
                    playtime_streak: { n: 3, c: be },
                    months: { n: 5, c: k, r: !0, q: !0 },
                    game_summary: { n: 6, c: le, r: !0, q: !0 },
                    demos_played: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    game_rankings: { n: 8, c: Pe },
                    playtests_played: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    summary_stats: { n: 10, c: Te },
                    substantial: {
                      n: 11,
                      d: !0,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    tag_stats: { n: 12, c: pe },
                    by_numbers: { n: 13, c: ie },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = i.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(v.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new v();
            return v.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(v.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(v.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeStats";
          }
        }
        class k extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.rtime_month || i.Sg(k.M()),
              a.Message.initialize(this, r, 0, -1, [4, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    rtime_month: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    stats: { n: 2, c: R },
                    appid: { n: 4, c: Q, r: !0, q: !0 },
                    relative_monthly_stats: { n: 5, c: R },
                    game_summary: { n: 6, c: ae, r: !0, q: !0 },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = i.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(k.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new k();
            return k.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(k.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(k.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMonthlyPlaytimeStats";
          }
        }
        class q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.account_id || i.Sg(q.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    account_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    year: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    playtime_stats: { n: 3, c: v },
                    privacy_state: {
                      n: 4,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = i.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(q.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new q();
            return q.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(q.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(q.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserYearInReviewStats";
          }
        }
        class V extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.from_dbo || i.Sg(V.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    from_dbo: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                    overall_time_ms: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    dbo_load_ms: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    query_execution_ms: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    message_population_ms: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    dbo_lock_load_ms: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = i.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(V.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new V();
            return V.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(V.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(V.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CYearInReviewPerformanceStats";
          }
        }
        class ce extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ce.prototype.statid || i.Sg(ce.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    statid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    fieldid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    achievement_name_internal: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    rtime_unlocked: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = i.w0(ce.M())), ce.sm_mbf;
          }
          toObject(r = !1) {
            return ce.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(ce.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(ce.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new ce();
            return ce.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(ce.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(ce.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAchievementDetails";
          }
        }
        class Me extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Me.prototype.appid || i.Sg(Me.M()),
              a.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    achievements: { n: 2, c: ce, r: !0, q: !0 },
                    all_time_unlocked_achievements: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    unlocked_more_in_future: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = i.w0(Me.M())), Me.sm_mbf;
          }
          toObject(r = !1) {
            return Me.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Me.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Me.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Me();
            return Me.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Me.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Me.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameAchievements";
          }
        }
        class de extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              de.prototype.median_achievements || i.Sg(de.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    median_achievements: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    median_games: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    median_streak: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = i.w0(de.M())), de.sm_mbf;
          }
          toObject(r = !1) {
            return de.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(de.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(de.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new de();
            return de.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(de.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return de.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(de.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPercentiles";
          }
        }
        class xe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xe.prototype.new_releases || i.Sg(xe.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    new_releases: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    recent_releases: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    classic_releases: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    recent_cutoff_year: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = i.w0(xe.M())), xe.sm_mbf;
          }
          toObject(r = !1) {
            return xe.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(xe.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(xe.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new xe();
            return xe.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(xe.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(xe.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPlaytimeDistribution";
          }
        }
        class se extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              se.prototype.games_played || i.Sg(se.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    games_played: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    unlocked_achievements: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    longest_streak: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = i.w0(se.M())), se.sm_mbf;
          }
          toObject(r = !1) {
            return se.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(se.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(se.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new se();
            return se.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(se.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return se.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(se.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPreviousYIRSummaryData";
          }
        }
        class oe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              oe.prototype.steamid || i.Sg(oe.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    year: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    force_regenerate: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    access_source: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    fetch_previous_year_summary: {
                      n: 5,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = i.w0(oe.M())), oe.sm_mbf;
          }
          toObject(r = !1) {
            return oe.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(oe.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(oe.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new oe();
            return oe.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(oe.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(oe.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Request";
          }
        }
        class ze extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ze.prototype.stats || i.Sg(ze.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    stats: { n: 1, c: q },
                    performance_stats: { n: 2, c: V },
                    percentiles: { n: 3, c: de },
                    distribution: { n: 4, c: xe },
                    previous_year_summary: { n: 5, c: se },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = i.w0(ze.M())), ze.sm_mbf;
          }
          toObject(r = !1) {
            return ze.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(ze.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(ze.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new ze();
            return ze.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(ze.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(ze.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Response";
          }
        }
        class We extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              We.prototype.steamid || i.Sg(We.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    year: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    privacy_state: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = i.w0(We.M())), We.sm_mbf;
          }
          toObject(r = !1) {
            return We.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(We.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(We.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new We();
            return We.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(We.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return We.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(We.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Request";
          }
        }
        class Se extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Se.prototype.privacy_state || i.Sg(Se.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    privacy_state: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = i.w0(Se.M())), Se.sm_mbf;
          }
          toObject(r = !1) {
            return Se.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Se.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Se.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Se();
            return Se.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Se.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Se.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Response";
          }
        }
        class Ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ae.prototype.steamid || i.Sg(Ae.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    year: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = i.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(r = !1) {
            return Ae.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Ae.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Ae.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Ae();
            return Ae.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Ae.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Ae.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Request";
          }
        }
        class he extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              he.prototype.privacy_state || i.Sg(he.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    privacy_state: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    generated_value: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    steamid: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    rt_privacy_updated: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = i.w0(he.M())), he.sm_mbf;
          }
          toObject(r = !1) {
            return he.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(he.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(he.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new he();
            return he.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(he.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return he.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(he.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Response";
          }
        }
        class Ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ie.prototype.steamid || i.Sg(Ie.M()),
              a.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    year: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    total_only: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = i.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(r = !1) {
            return Ie.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Ie.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Ie.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Ie();
            return Ie.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Ie.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Ie.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Request";
          }
        }
        class Fe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fe.prototype.game_achievements || i.Sg(Fe.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    game_achievements: { n: 1, c: Me, r: !0, q: !0 },
                    total_achievements: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_rare_achievements: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_games_with_achievements: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = i.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(r = !1) {
            return Fe.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Fe.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Fe.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Fe();
            return Fe.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Fe.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Fe.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Response";
          }
        }
        class Le extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Le.prototype.steamid || i.Sg(Le.M()),
              a.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    year: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = i.w0(Le.M())), Le.sm_mbf;
          }
          toObject(r = !1) {
            return Le.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Le.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Le.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Le();
            return Le.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Le.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Le.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Request";
          }
        }
        class $e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $e.prototype.apps || i.Sg($e.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: { apps: { n: 1, c: mt, r: !0, q: !0 } },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = i.w0($e.M())), $e.sm_mbf;
          }
          toObject(r = !1) {
            return $e.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT($e.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq($e.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new $e();
            return $e.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj($e.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0($e.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response";
          }
        }
        class Qe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qe.prototype.image_url || i.Sg(Qe.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    image_url: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    preview_url: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    image_width: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    image_height: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    maybe_inappropriate_sex: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    maybe_inappropriate_violence: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    visibility: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    spoiler_tag: {
                      n: 8,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = i.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(r = !1) {
            return Qe.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Qe.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Qe.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Qe();
            return Qe.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Qe.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Qe.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
          }
        }
        class mt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mt.prototype.appid || i.Sg(mt.M()),
              a.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    screenshots: { n: 2, c: Qe, r: !0, q: !0 },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = i.w0(mt.M())), mt.sm_mbf;
          }
          toObject(r = !1) {
            return mt.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(mt.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(mt.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new mt();
            return mt.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(mt.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(mt.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
          }
        }
        class Ye extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ye.prototype.steamid || i.Sg(Ye.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    gid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    type: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = i.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(r = !1) {
            return Ye.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Ye.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Ye.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Ye();
            return Ye.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Ye.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Ye.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Request";
          }
        }
        class _e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _e.prototype.jsondata || i.Sg(_e.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    jsondata: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = i.w0(_e.M())), _e.sm_mbf;
          }
          toObject(r = !1) {
            return _e.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(_e.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(_e.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new _e();
            return _e.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(_e.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(_e.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Response";
          }
        }
        class st extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              st.prototype.steamid || i.Sg(st.M()),
              a.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    gids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readFixed64String,
                      pbr: i.qM.readPackedFixed64String,
                      bw: i.gp.writeRepeatedFixed64String,
                    },
                    type: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = i.w0(st.M())), st.sm_mbf;
          }
          toObject(r = !1) {
            return st.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(st.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(st.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new st();
            return st.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(st.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return st.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(st.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Request";
          }
        }
        class qe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qe.prototype.entries || i.Sg(qe.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: { entries: { n: 1, c: Ce, r: !0, q: !0 } },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = i.w0(qe.M())), qe.sm_mbf;
          }
          toObject(r = !1) {
            return qe.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(qe.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(qe.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new qe();
            return qe.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(qe.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(qe.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response";
          }
        }
        class Ce extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ce.prototype.gid || i.Sg(Ce.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    gid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    jsondata: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = i.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(r = !1) {
            return Ce.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Ce.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Ce.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Ce();
            return Ce.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Ce.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Ce.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
          }
        }
        class rt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rt.prototype.gid || i.Sg(rt.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    gid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    type: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    count: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    last_account_index: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = i.w0(rt.M())), rt.sm_mbf;
          }
          toObject(r = !1) {
            return rt.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(rt.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(rt.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new rt();
            return rt.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(rt.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(rt.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Request";
          }
        }
        class ct extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ct.prototype.entries || i.Sg(ct.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    entries: { n: 1, c: et, r: !0, q: !0 },
                    last_account_index: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = i.w0(ct.M())), ct.sm_mbf;
          }
          toObject(r = !1) {
            return ct.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(ct.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(ct.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new ct();
            return ct.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(ct.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(ct.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response";
          }
        }
        class et extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              et.prototype.gid || i.Sg(et.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    gid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    jsondata: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = i.w0(et.M())), et.sm_mbf;
          }
          toObject(r = !1) {
            return et.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(et.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(et.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new et();
            return et.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(et.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return et.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(et.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response_Entry";
          }
        }
        class ft extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ft.prototype.steamid || i.Sg(ft.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    year: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    return_private: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = i.w0(ft.M())), ft.sm_mbf;
          }
          toObject(r = !1) {
            return ft.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(ft.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(ft.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new ft();
            return ft.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(ft.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(ft.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Request";
          }
        }
        class Ze extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ze.prototype.steamid || i.Sg(Ze.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    privacy_state: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    rt_privacy_updated: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    privacy_override: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = i.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(r = !1) {
            return Ze.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Ze.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Ze.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Ze();
            return Ze.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Ze.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Ze.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendSharedYearInView";
          }
        }
        class lt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lt.prototype.friend_shares || i.Sg(lt.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    friend_shares: { n: 1, c: Ze, r: !0, q: !0 },
                    year: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = i.w0(lt.M())), lt.sm_mbf;
          }
          toObject(r = !1) {
            return lt.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(lt.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(lt.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new lt();
            return lt.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(lt.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(lt.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Response";
          }
        }
        class tt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tt.prototype.steamid || i.Sg(tt.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    year: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    language: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = i.w0(tt.M())), tt.sm_mbf;
          }
          toObject(r = !1) {
            return tt.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(tt.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(tt.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new tt();
            return tt.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(tt.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(tt.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Request";
          }
        }
        class yt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yt.prototype.images || i.Sg(yt.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: { images: { n: 1, c: He, r: !0, q: !0 } },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = i.w0(yt.M())), yt.sm_mbf;
          }
          toObject(r = !1) {
            return yt.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(yt.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(yt.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new yt();
            return yt.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(yt.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(yt.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response";
          }
        }
        class He extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              He.prototype.name || i.Sg(He.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    name: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    url_path: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = i.w0(He.M())), He.sm_mbf;
          }
          toObject(r = !1) {
            return He.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(He.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(He.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new He();
            return He.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(He.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return He.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(He.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
          }
        }
        class Ge extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ge.prototype.steamid || i.Sg(Ge.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = i.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(r = !1) {
            return Ge.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(Ge.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(Ge.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new Ge();
            return Ge.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(Ge.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(Ge.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
          }
        }
        class ne extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ne.prototype.year || i.Sg(ne.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    year: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    month: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    games_played: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    top_played_appid: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    longest_streak_days: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rt_streak_start: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    achievements: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    screenshots: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = i.w0(ne.M())), ne.sm_mbf;
          }
          toObject(r = !1) {
            return ne.toObject(r, this);
          }
          static toObject(r, c) {
            return i.BT(ne.M(), r, c);
          }
          static fromObject(r) {
            return i.Uq(ne.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (t().BinaryReader)(r),
              S = new ne();
            return ne.deserializeBinaryFromReader(S, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return i.zj(ne.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            i.i0(ne.M(), r, c);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
          }
        }
        var N;
        ((Y) => {
          function r(Ue, nt, De) {
            return Ue.SendMsg(
              "SaleFeature.GetUserYearInReview#1",
              (0, D.I8)(oe, nt, De),
              ze,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          Y.GetUserYearInReview = r;
          function c(Ue, nt, De) {
            return Ue.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, D.I8)(Ae, nt, De),
              he,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Y.GetUserSharingPermissions = c;
          function S(Ue, nt, De) {
            return Ue.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, D.I8)(We, nt, De),
              Se,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Y.SetUserSharingPermissions = S;
          function Be(Ue, nt, De) {
            return Ue.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, D.I8)(Ie, nt, De),
              Fe,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          Y.GetUserYearAchievements = Be;
          function Ke(Ue, nt, De) {
            return Ue.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, D.I8)(Le, nt, De),
              $e,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          Y.GetUserYearScreenshots = Ke;
          function Je(Ue, nt, De) {
            return Ue.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, D.I8)(Ye, nt, De),
              _e,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Y.GetUserActionData = Je;
          function at(Ue, nt, De) {
            return Ue.SendMsg(
              "SaleFeature.GetMultipleUserActionData#1",
              (0, D.I8)(st, nt, De),
              qe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Y.GetMultipleUserActionData = at;
          function vt(Ue, nt, De) {
            return Ue.SendMsg(
              "SaleFeature.GetAllUserActionDataForType#1",
              (0, D.I8)(rt, nt, De),
              ct,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          Y.GetAllUserActionDataForType = vt;
          function Xe(Ue, nt, De) {
            return Ue.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, D.I8)(ft, nt, De),
              lt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Y.GetFriendsSharedYearInReview = Xe;
          function bt(Ue, nt, De) {
            return Ue.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, D.I8)(tt, nt, De),
              yt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          Y.GetUserYearInReviewShareImage = bt;
          function it(Ue, nt, De) {
            return Ue.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, D.I8)(Ge, nt, De),
              ne,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Y.GetYIRCurrentMonthlySummary = it;
        })(N || (N = {}));
      },
      36631: (we, ye, s) => {
        "use strict";
        s.d(ye, {
          Ay: () => D,
          Cs: () => A,
          HN: () => y,
          HY: () => t,
          LD: () => O,
          MU: () => p,
          W3: () => i,
          bs: () => m,
          uF: () => a,
          yD: () => M,
        });
        var n = s(7850),
          b = s(90626);
        const m = 0,
          a = 1,
          t = 2,
          i = 3,
          D = 4,
          f = { eLocation: m },
          O = b.createContext(f);
        function A(x) {
          const { children: U, location: T } = x;
          return (0, n.jsx)(O.Provider, {
            value: { ...f, eLocation: T ?? m },
            children: U,
          });
        }
        function M() {
          return b.useContext(O);
        }
        function W() {
          return M().eLocation == a;
        }
        function p() {
          return M().eLocation == t;
        }
        function y() {
          const x = M();
          return x.eLocation == t || x.eLocation == a;
        }
      },
      31774: (we, ye, s) => {
        "use strict";
        s.d(ye, { $O: () => T, wk: () => U });
        var n = s(80902),
          b = s(75233),
          m = s(90626),
          a = s(72609),
          t = s(48491),
          i = s(49288);
        async function D(P, E) {
          const { rgDefIDs: $, strCategory: X, itemClass: H } = E,
            F = await i.a9.QueryRewardItems(P, {
              definitionids: $,
              community_item_classes: H ? [H] : void 0,
              filter_match_any_category_tags: X ? [X] : void 0,
            });
          if (!F.BSuccess())
            throw new Error(
              "LoyaltyRewards.QueryRewardItems answered " + F.GetEResult(),
            );
          return F.Body().toObject().definitions ?? [];
        }
        let f;
        function O() {
          return (
            f || (f = new t.D(a.TS.WEBAPI_BASE_URL)), f.GetServiceTransport()
          );
        }
        async function A(P) {
          return D(O(), P);
        }
        const M = 3600 * 1e3;
        function W(P) {
          return ["LoyaltyRewardDef", P];
        }
        function p(P, E) {
          return ["LoyaltyRewardDefsByCategoryAndClass", P, E];
        }
        function y(P) {
          return {
            queryKey: W(P),
            queryFn: async () => {
              const E = await A({ rgDefIDs: [P] }),
                $ = E.length == 1 ? E[0] : void 0;
              if (!$)
                throw new Error(
                  `Asked for point shop item ${P} and got ${E.length} items back, wanted exactly one.`,
                );
              return $;
            },
            enabled: P > 0,
            staleTime: M,
            retry: !1,
          };
        }
        function x(P, E) {
          return {
            queryKey: p(P, E),
            queryFn: () => A({ strCategory: P, itemClass: E }),
            enabled: !!(P && E),
            staleTime: M,
            retry: !1,
          };
        }
        function U(P) {
          const { data: E } = (0, n.I)(y(P));
          return E;
        }
        function T(P, E) {
          const $ = (0, b.jE)(),
            { data: X } = (0, n.I)(x(P, E));
          return (
            (0, m.useEffect)(() => {
              X?.forEach((H) => {
                H.defid !== void 0 && $.setQueryData(W(H.defid), H);
              });
            }, [X, $]),
            X
          );
        }
      },
      6881: (we, ye, s) => {
        "use strict";
        s.d(ye, { _u: () => u, fw: () => $, p1: () => X, Km: () => H });
        var n = s(80902),
          b = s(75233),
          m = s(51614),
          a = s(90626),
          t = s(72609),
          i = s(33828),
          D = s(48491),
          f = s(67705),
          O = s(72604),
          A = s(31224);
        async function M(g, w) {
          const te = await A.uy.GetCommunityInventory(g, {
            filter_appids: [w],
          });
          if (te.GetEResult() != O.R)
            throw new Error(
              "Quest.GetCommunityInventory on app " +
                w +
                " answered " +
                te.GetEResult(),
            );
          return te.Body().toObject().items ?? [];
        }
        let W;
        function p() {
          if (!W) {
            const g = (0, f.Fd)("read_inventory_token", "application_config");
            W = g ? new D.D(t.TS.WEBAPI_BASE_URL, g) : (0, i.P)();
          }
          return W.GetServiceTransport();
        }
        async function y(g) {
          return M(p(), g);
        }
        const x = 3 * 1e3,
          U = 5 * 1e3,
          T = 15 * 1e3;
        function P(g) {
          return ["QuestCommunityInventory", g];
        }
        function E(g) {
          return {
            queryKey: P(g),
            queryFn: () => y(g),
            enabled: !!g,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function $(g) {
          const { data: w } = (0, n.I)(E(g));
          return w;
        }
        function X(g, w) {
          const te = $(g);
          return {
            communityItem: (0, a.useMemo)(
              () => te?.find((z) => z.appid == g && z.item_type == w),
              [te, g, w],
            ),
            bLoaded: te != null,
          };
        }
        function H() {
          const g = (0, b.jE)();
          return (0, m.n)({
            mutationFn: (w) => j(g, w.appid, w.fnBHasExpectedItems),
          });
        }
        const F = new WeakMap();
        function j(g, w, te) {
          if (!w || te(g.getQueryData(P(w)) ?? [])) return Promise.resolve();
          let I = F.get(g);
          I || ((I = new Map()), F.set(g, I));
          let z = I.get(w);
          return (
            z || ((z = o(g, w, te).finally(() => I?.delete(w))), I.set(w, z)), z
          );
        }
        async function o(g, w, te) {
          const I = [0, x, d()];
          for (const z of I) {
            z > 0 && (await h(z));
            let _;
            try {
              (_ = await y(w)), g.setQueryData(P(w), _);
            } catch (me) {
              console.error(
                "Re-reading the community inventory for app " + w + " failed",
                me,
              );
            }
            if (te(_ ?? [])) return;
          }
        }
        function d() {
          return U + Math.floor(Math.random() * (T - U));
        }
        function h(g) {
          return new Promise((w) => setTimeout(w, g));
        }
        function u(g, w, te) {
          g.setQueryData(P(w), te);
        }
      },
      94253: (we, ye, s) => {
        "use strict";
        s.d(ye, {
          t5: () => z,
          os: () => be,
          Qt: () => B,
          CC: () => I,
          Oz: () => te,
          lu: () => _,
        });
        var n = s(23386),
          b = s(72609),
          m = s(68312),
          a = s(75233),
          t = s(80902),
          i = s(51614),
          D = s(90626),
          f = s(33828),
          O = s(48491),
          A = s(67705),
          M = s(72604),
          W = s(31224),
          p = s(7112);
        const y = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        async function x(C, Q) {
          const le = await p.Qm.CanClaimItem(C, { language: Q });
          if (le.GetEResult() != M.R)
            throw new Error(
              "SaleItemRewards.CanClaimItem answered " + le.GetEResult(),
            );
          const ae = le.Body().toObject(),
            ve = ae.reward_item?.defid ? ae.reward_item : void 0;
          return {
            bCanClaimNewItem: !!ae.can_claim,
            bAlreadyClaimedCurrentItem: !!ve,
            appid: ve?.appid,
            community_item_type: ve?.community_item_type,
            community_item_class: ve?.community_item_class,
            rtNextClaimTime:
              (ae.next_claim_time ?? 0) > 0 ? ae.next_claim_time : void 0,
          };
        }
        async function U(C, Q) {
          const le = await p.Qm.ClaimItem(C, { language: Q });
          if (le.GetEResult() == M.Ze) return x(C, Q);
          if (le.GetEResult() != M.R)
            throw new Error(
              "SaleItemRewards.ClaimItem answered " + le.GetEResult(),
            );
          const ae = le.Body().toObject().reward_item;
          return {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !0,
            appid: ae?.appid,
            community_item_type: ae?.community_item_type,
            community_item_class: ae?.community_item_class,
            rtNextClaimTime:
              (le.Body().next_claim_time() ?? 0) > 0
                ? le.Body().next_claim_time()
                : void 0,
          };
        }
        async function T(C, Q) {
          const le = await W.uy.ActivateProfileModifierItem(C, {
            communityitemid: Q.communityitemid,
            appid: Q.appid,
            activate: !0,
          });
          if (le.GetEResult() != M.R)
            throw new Error(
              "Quest.ActivateProfileModifierItem answered " + le.GetEResult(),
            );
          return le.GetEResult();
        }
        async function P(C, Q, le, ae) {
          return (
            await p.Qm.GetCurrentDefinition(C, {
              sale_def_type: Q,
              language: le,
              include_community_item_def: ae,
            })
          )
            .Body()
            .toObject();
        }
        async function E(C, Q, le, ae) {
          return (
            await p.Qm.GetClaimedSaleRewards(C, {
              sale_def_type: Q,
              language: le,
              include_community_item_def: ae,
            })
          )
            .Body()
            .toObject();
        }
        let $;
        function X() {
          if (!$) {
            const C = (0, A.Fd)("loyalty_webapi_token", "application_config");
            $ = C ? new O.D(b.TS.WEBAPI_BASE_URL, C) : (0, f.P)();
          }
          return $.GetServiceTransport();
        }
        async function H(C) {
          return x(X(), C);
        }
        async function F(C) {
          return U(X(), C);
        }
        async function j(C) {
          return T(X(), C);
        }
        const o = 300 * 1e3;
        let d = !1,
          h = null;
        const u = {
          appid: 2243810,
          community_item_type: 2,
          community_item_class: n.Ed,
        };
        function g(C) {
          return ["SaleItemCanClaim", C];
        }
        function w(C) {
          return {
            queryKey: g(C),
            queryFn: () => H(C),
            enabled: !d,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function te() {
          const C = b.TS.LANGUAGE,
            Q = (0, a.jE)(),
            { data: le, isLoading: ae } = (0, t.I)(w(C)),
            ve = le?.rtNextClaimTime;
          return (
            (0, D.useEffect)(() => {
              let Ee = 0;
              if (ve) {
                const Pe = () => {
                  const Te = ve * 1e3 - Date.now();
                  if (Te <= 0) {
                    Q.invalidateQueries({ queryKey: g(C) });
                    return;
                  }
                  Ee = window.setTimeout(Pe, Te > o ? Te / 2 : Te);
                };
                Pe();
              }
              return () => window.clearTimeout(Ee);
            }, [ve, C, Q]),
            { ...(le ?? y), bLoading: ae }
          );
        }
        function I() {
          const C = (0, a.jE)(),
            { mutateAsync: Q } = (0, i.n)({
              mutationFn: () => {
                if (h) {
                  const ae = h;
                  return (h = null), Promise.resolve(ae);
                }
                return d
                  ? Promise.resolve(C.getQueryData(g(b.TS.LANGUAGE)) ?? y)
                  : F(b.TS.LANGUAGE);
              },
              onSuccess: (ae) => C.setQueryData(g(b.TS.LANGUAGE), ae),
            });
          return { fnClaimItem: (0, D.useCallback)(() => Q(), [Q]) };
        }
        function z() {
          return (0, i.n)({ mutationFn: (C) => j(C) });
        }
        function _() {
          const C = (0, a.jE)();
          return {
            fnSetClaimState: (0, D.useCallback)(
              (le) => {
                (d = !0),
                  (h = le.bCanClaimNewItem
                    ? {
                        bAlreadyClaimedCurrentItem: !0,
                        bCanClaimNewItem: !1,
                        rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                        ...u,
                      }
                    : null),
                  C.setQueryData(g(b.TS.LANGUAGE), le);
              },
              [C],
            ),
          };
        }
        function me(C, Q, le) {
          return ["SaleRewardsGetDefinition", C, Q, le];
        }
        function G(C, Q, le, ae) {
          return {
            queryKey: me(Q, le, ae),
            queryFn: () => P(C, Q, le, ae),
            staleTime: 1 / 0,
          };
        }
        function B(C, Q, le) {
          const ae = (0, m.KV)();
          return (0, t.I)(G(ae, C, Q, le));
        }
        function R(C, Q, le, ae) {
          return ["GetClaimedSaleRewards", C, Q, !!le, ae];
        }
        function ue(C, Q, le, ae, ve) {
          return {
            queryKey: R(Q, le, ae, ve),
            queryFn: () => E(C, Q, le, ae),
            staleTime: 1 / 0,
          };
        }
        function be(C, Q, le, ae) {
          const ve = (0, m.KV)();
          return (0, t.I)(ue(ve, C, Q, le, ae));
        }
      },
      79083: (we, ye, s) => {
        "use strict";
        s.d(ye, { m: () => t, U: () => i });
        var n = s(7850),
          b = s(36118),
          m = ((D) => (
            (D.k_ECutArrowStyle = "single"),
            (D.k_EDoubleArrowStyle = "double"),
            (D.k_EThickChevron = "chevron"),
            (D.k_EFilledArrow = "filled"),
            (D.k_EPointyArrow = "pointy"),
            D
          ))(m || {}),
          a = ((D) => (
            (D.k_EPillCrumb = "pill"),
            (D.k_ECircularCrumb = "circle"),
            (D.k_ESquareCrumb = "square"),
            D
          ))(a || {});
        function t(D) {
          const { arrowFill: f, arrowStyle: O, direction: A } = D;
          switch (O) {
            default:
            case m.k_ECutArrowStyle: {
              const M = A == "right" ? 0 : 180;
              return (0, n.jsx)(b.uMb, {
                fill: f || "white",
                role: "presentation",
                angle: M,
              });
            }
            case m.k_EDoubleArrowStyle: {
              const M = A == "right" ? 180 : 0;
              return (0, n.jsx)(b.F2T, {
                fill: f || "white",
                role: "presentation",
                angle: M,
              });
            }
            case m.k_EThickChevron: {
              const M = A == "right" ? 0 : 180;
              return (0, n.jsx)(b.l8x, {
                fill: f || "white",
                role: "presentation",
                angle: M,
              });
            }
            case m.k_EFilledArrow: {
              const M = A == "right" ? 90 : 270;
              return (0, n.jsx)(b.V5W, {
                fill: f || "white",
                role: "presentation",
                angle: M,
              });
            }
            case m.k_EPointyArrow:
              return (0, n.jsx)(b.L0X, {
                fill: f || "white",
                role: "presentation",
                direction: A || "left",
              });
          }
        }
        function i(D) {
          const {
              bIsActive: f,
              breadcrumbActiveColor: O,
              breadcrumbColor: A,
              breadcrumbStyle: M,
            } = D,
            W = f ? O || "#FFFFFF" : A || "#606974";
          switch (M) {
            default:
            case a.k_EPillCrumb:
              return (0, n.jsx)(b.IGf, { fill: W, role: "presentation" });
            case a.k_ECircularCrumb:
              return (0, n.jsx)(b.az8, { fill: W, role: "presentation" });
            case a.k_ESquareCrumb:
              return (0, n.jsx)(b.koA, { fill: W, role: "presentation" });
          }
        }
      },
      47797: (we, ye, s) => {
        "use strict";
        s.d(ye, { Ns: () => m });
        var n = s(99412);
        const b = 1778623200;
        function m(i, D) {
          let f = !1;
          return (
            i && i.GetEventType() == n.ajI
              ? (f = !0)
              : i && D && D.is_creator_home && (f = a(i, D)),
            f
          );
        }
        function a(i, D) {
          return !!D && !!D.is_creator_home && (i.createTime ?? 0) > b;
        }
        function t(i) {
          const D = useClanInfoByAccountID(i.clanSteamID.GetAccountID());
          return m(i, D.data);
        }
      },
      91354: (we, ye, s) => {
        "use strict";
        s.d(ye, { c: () => f });
        var n = s(7850),
          b = s(64238),
          m = s.n(b),
          a = s(16412),
          t = s(36118),
          i = s(89206),
          D = s.n(i);
        function f(O) {
          const { bExpanded: A, setExpanded: M } = O;
          return (0, n.jsx)(a.wl, {
            className: m()(i.ExpandRowButton, A && i.Selected),
            onClick: () => M(!A),
            children: (0, n.jsx)(t.b8_, { direction: "down" }),
          });
        }
      },
      49789: (we, ye, s) => {
        "use strict";
        s.d(ye, { NK: () => t, bK: () => a, dF: () => i, w2: () => D });
        var n = s(10142),
          b = s(813),
          m = s(18210),
          a = ((f) => (
            (f[(f.k_eLibrary = 1)] = "k_eLibrary"),
            (f[(f.k_eWishlist = 2)] = "k_eWishlist"),
            (f[(f.k_eFollowing = 4)] = "k_eFollowing"),
            (f[(f.k_eRecommended = 8)] = "k_eRecommended"),
            (f[(f.k_eSteam = 16)] = "k_eSteam"),
            (f[(f.k_eRequired = 32)] = "k_eRequired"),
            (f[(f.k_eFeatured = 64)] = "k_eFeatured"),
            (f[(f.k_eCurator = 128)] = "k_eCurator"),
            (f[(f.k_eReposted = 256)] = "k_eReposted"),
            f
          ))(a || {});
        class t {
          clanid;
          unique_id;
          event_type;
          appid;
          start_time;
          appInfo;
          clanInfo;
          score;
          GetSource() {
            return this.appInfo
              ? this.appInfo.source
              : (this.clanInfo?.source ?? 0);
          }
          static GetEntityNameForID(O, A) {
            if (O)
              return (
                n.A.Get().GetApp(O)?.GetName() ??
                (0, m.we)("#EventCalendar_MuteApp_Unknown")
              );
            if (A) {
              const M = b.ac.GetClanInfoByClanAccountID(A);
              if (M?.group_name) return M.group_name;
            }
            return (0, m.we)("#EventCalendar_MuteApp_Unknown");
          }
          static BHasEntityNameForID(O, A) {
            return O
              ? !!n.A.Get().GetApp(O)?.GetName()
              : A
                ? !!b.ac.GetClanInfoByClanAccountID(A)?.group_name
                : !1;
          }
          GetEntityName() {
            return t.GetEntityNameForID(this.appid, this.clanid);
          }
          GetGameCapsule() {
            if (this.appInfo)
              return n.A.Get()
                .GetApp(this.appInfo.appid)
                ?.GetAssets()
                ?.GetMainCapsuleURL();
            if (this.clanInfo) {
              let O = b.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
              if (O) return O.avatar_full_url;
            }
            return (0, m.we)("#EventCalendar_MuteApp_Unknown");
          }
          GetGameIcon() {
            if (this.appInfo)
              return n.A.Get()
                .GetApp(this.appInfo.appid)
                ?.GetAssets()
                ?.GetCommunityIconURL();
            if (this.clanInfo) {
              let O = b.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
              if (O) return O.avatar_full_url;
            }
            return (0, m.we)("#EventCalendar_MuteApp_Unknown");
          }
        }
        class i {
          appid;
          source;
          playtime;
          last_played;
          wishlist_added;
        }
        class D {
          clanid;
          source;
        }
      },
      43458: (we, ye, s) => {
        "use strict";
        s.d(ye, { Lg: () => D, XU: () => M });
        const n = 20,
          b = /^.*youtube[^v]+v=(.{11}).*/,
          m = /^.*youtu\.be\/(.{11}).*/,
          a = /^.*youtube.*\/embed\/(.{11}).*/,
          t = /^.*[?&]t=([^&]+)(?:&|$)/,
          i = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
        function D(W) {
          return !!f(W);
        }
        function f(W) {
          return (
            W?.length < n ? void 0 : b.exec(W) || m.exec(W) || a.exec(W)
          )?.[1];
        }
        function O(W) {
          return t.exec(W)?.[1];
        }
        function A(W) {
          const p = i.exec(W);
          if (!(p?.[1] || p?.[2] || p?.[3] || p?.[4])) return;
          if (p?.[4]) return parseInt(p?.[4]);
          let y = 0;
          return (
            p?.[1] && (y += 3600 * parseInt(p[1])),
            p?.[2] && (y += 60 * parseInt(p[2])),
            p?.[3] && (y += parseInt(p[3])),
            y
          );
        }
        function M(W) {
          const p = f(W);
          if (!p) return;
          const y = O(W),
            x = y ? A(y) : void 0;
          return { strVideoID: p, nStartSeconds: x };
        }
      },
      53275: (we, ye, s) => {
        "use strict";
        s.d(ye, {
          Mr: () => F,
          Sk: () => P,
          Ue: () => $,
          _t: () => E,
          mG: () => U,
          my: () => y,
          rF: () => X,
          us: () => H,
        });
        var n = s(35038),
          b = s(68450),
          m = s(92854),
          a = s(33828),
          t = s(80902),
          i = s(76559),
          D = s(49628),
          f = s(36174),
          O = s(65946),
          A = s(92264),
          M = s(87937),
          W = s.n(M),
          p = s(33732);
        function y(j, o, d) {
          return (0, t.I)({
            queryKey: x(o, d),
            queryFn: async () => {
              const u = n.w.Init(b.Vj);
              u.Body().set_clan_event_gid(d);
              const g = await b.ZK.GetAvailability(j, u);
              return g.BSuccess()
                ? g
                    .Body()
                    .availability()
                    .map((w) => w.toObject())
                : [];
            },
            enabled: (0, D.H)() == o,
            staleTime: f.Kp.PerMinute * 10,
          });
        }
        const x = (j, o) => ["useMeetSteamGetAvailability", j, o];
        function U(j, o, d, h) {
          return (0, t.I)({
            queryKey: T(o, d, h),
            queryFn: async () => {
              const g = n.w.Init(m.V4);
              g.Body().set_type(m.Dk.rV),
                g
                  .Body()
                  .set_steamid(i.b.InitFromAccountID(h).ConvertTo64BitString()),
                g.Body().set_gid(d);
              const w = (0, a.P)(),
                te = await m.Nl.GetUserActionData(w.GetServiceTransport(), g),
                I = te.Body().jsondata();
              return te.BSuccess() && I ? JSON.parse(I) : {};
            },
            enabled: (0, D.H)() == o && !!h,
          });
        }
        const T = (j, o, d) => ["useMeetSteamGetRegistrationDetails", j, o, d];
        function P(j) {
          const o = Intl.DateTimeFormat().resolvedOptions().timeZone;
          return j.location_type === "in_person"
            ? (j.in_person_time_zone ?? p.hh)
            : o;
        }
        function E(j) {
          return (0, O.q3)(() => ({
            rtime_start: j.rtime_start,
            rtime_end: j.rtime_end,
            sDisplayTimeZone: P(j),
          }));
        }
        function $(j, o) {
          const d = W().unix(j),
            u = W().unix(j).tz(o).utcOffset() - d.utcOffset();
          return new Date((j + u * 60) * 1e3);
        }
        function X(j, o) {
          const d = $(j, o),
            h = new Date();
          return d.getFullYear() == h.getFullYear()
            ? (0, A.$w)(d)
            : (0, A._9)(d);
        }
        function H(j, o) {
          const d = W().unix(j),
            u = W().unix(j).tz(o).utcOffset() - d.utcOffset();
          return (0, A.KC)(j + u * 60);
        }
        function F(j, o, d, h) {
          const u = W().unix(j),
            w = W().unix(j).tz(d).utcOffset() - u.utcOffset(),
            te = W().unix(o),
            I = W().unix(o).tz(d),
            z = I.utcOffset() - te.utcOffset();
          return (
            (0, A.Vx)(j + w * 60, o + z * 60, !0) +
            (h ? "" : " " + I.format("z"))
          );
        }
      },
      63694: (we, ye, s) => {
        "use strict";
        s.d(ye, { E: () => f, V: () => A });
        var n = s(41735),
          b = s.n(n),
          m = s(61639),
          a = s(3166),
          t = s(8323),
          i = s(81673),
          D = s(77291),
          f = ((M) => (
            (M[(M.k_eDiscussions = 0)] = "k_eDiscussions"),
            (M[(M.k_eThumbsUp = 1)] = "k_eThumbsUp"),
            (M[(M.k_eClickThrough = 2)] = "k_eClickThrough"),
            (M[(M.k_eMuted = 3)] = "k_eMuted"),
            (M[(M.k_ePlayedVideo = 4)] = "k_ePlayedVideo"),
            (M[(M.k_eReminder_Opened = 5)] = "k_eReminder_Opened"),
            (M[(M.k_eReminder_MobilePush = 6)] = "k_eReminder_MobilePush"),
            (M[(M.k_eReminder_Email = 7)] = "k_eReminder_Email"),
            (M[(M.k_eReminder_CalendarApple = 8)] =
              "k_eReminder_CalendarApple"),
            (M[(M.k_eReminder_CalendarGoogle = 9)] =
              "k_eReminder_CalendarGoogle"),
            (M[(M.k_eReminder_CalendarOutlook = 10)] =
              "k_eReminder_CalendarOutlook"),
            (M[(M.k_eReminder_EmailUnverified = 11)] =
              "k_eReminder_EmailUnverified"),
            (M[(M.k_eReminder_MobilePushMissing = 12)] =
              "k_eReminder_MobilePushMissing"),
            M
          ))(f || {});
        class O {
          m_nPastViewedIndex = 0;
          m_nPastViewedDays = 0;
          m_nFutureViewedIndex = 0;
          m_nFutureViewableEvents = 0;
          m_nLastRecordedFilter = 0;
          m_sBrowserID = void 0;
          m_scheduledFilterChange = new t.LU();
          m_scheduledFutureStats = new t.LU();
          m_scheduledPastStats = new t.LU();
          RecordViewedEvent(W, p) {
            const y = W.GetStoreInitializationTimestamp().getTime() / 1e3;
            this.m_nFutureViewableEvents = 0;
            let x = 0,
              U,
              T;
            const P = W.GetCurrentlyLoadedItemsForStats();
            for (const E of P) {
              const $ = E.start_time > y;
              if ((E.unique_id == p && ((U = x), (T = E)), $))
                this.m_nFutureViewableEvents++;
              else if (U !== void 0) break;
              x++;
            }
            if (!(U === void 0 || !T))
              if (U < this.m_nFutureViewableEvents) {
                const E = this.m_nFutureViewableEvents - U;
                if (this.m_nFutureViewedIndex < E) {
                  this.m_nFutureViewedIndex = E;
                  const $ = () => {
                    const H =
                      Math.min(this.m_nFutureViewedIndex, 4095) |
                      (Math.min(this.m_nFutureViewableEvents, 255) << 12) |
                      (Math.min(this.GetTimeSpentOnPageS(W), 2047) << 20);
                    A.SendExperimentEventToSteam(m.Mc.R, H);
                  };
                  this.m_scheduledFutureStats.Schedule(500, $);
                }
              } else {
                const E = U - this.m_nFutureViewableEvents;
                if (this.m_nPastViewedIndex < E) {
                  (this.m_nPastViewedIndex = E),
                    (this.m_nPastViewedDays = Math.floor(
                      (y - T.start_time) / (24 * 3600),
                    ));
                  const $ = () => {
                    const H =
                      Math.min(this.m_nPastViewedIndex, 4095) |
                      (Math.min(this.m_nPastViewedDays, 255) << 12) |
                      (Math.min(this.GetTimeSpentOnPageS(W), 2047) << 20);
                    A.SendExperimentEventToSteam(m.Mc.mZ, H);
                  };
                  this.m_scheduledPastStats.Schedule(500, $);
                }
              }
          }
          RecordFilterChangeEvent(W) {
            const p = () => {
              let x = 0;
              W.BIsGameSourceAllowed(i.FD.k_ELibrary) && (x |= 1),
                W.BIsGameSourceAllowed(i.FD.k_EWishlist) && (x |= 2),
                W.BIsGameSourceAllowed(i.FD.k_EFollowing) && (x |= 4),
                W.BIsGameSourceAllowed(i.FD.k_ERecommended) && (x |= 8),
                W.BIsGameSourceAllowed(i.FD.k_ESteam) && (x |= 16),
                W.BIsGameSourceAllowed(i.FD.k_EFeatured) && (x |= 32),
                W.BIsGameSourceAllowed(i.FD.k_ERecent) && (x |= 64),
                W.BIsEventTypeGroupAllowed(i.xj.k_ENews) && (x |= 1024),
                W.BIsEventTypeGroupAllowed(i.xj.k_EEvents) && (x |= 2048),
                W.BIsEventTypeGroupAllowed(i.xj.k_EStreaming) && (x |= 4096),
                W.BIsEventTypeGroupAllowed(i.xj.k_EUpdates) && (x |= 8192),
                W.BIsEventTypeGroupAllowed(i.xj.k_EReleases) && (x |= 16384),
                W.BIsEventTypeGroupAllowed(i.xj.k_ESales) && (x |= 32768),
                x != this.m_nLastRecordedFilter &&
                  ((this.m_nLastRecordedFilter = x),
                  this.SendExperimentEventToSteam(m.Mc.Ms, x));
            };
            this.m_scheduledFilterChange.Schedule(1e3, p);
          }
          GetTimeSpentOnPageS(W) {
            const p = W.GetStoreInitializationTimestamp();
            return Math.max(
              0,
              Math.floor((new Date().getTime() - p.getTime()) / 1e3),
            );
          }
          RecordAppInteractionEvent(W, p) {
            this.SendExperimentEventToSteam(m.Mc.ej, p);
          }
          SendExperimentEventToSteam(W, p) {
            this.InitBrowserID();
            const y = a.TS.STORE_BASE_URL + "events/ajaxreportnewshubstats/",
              x = new URLSearchParams();
            x.append("page_action", "" + W),
              x.append("snr", a.TS.SNR),
              x.append("uint_data", "" + p),
              x.append("str_data", this.m_sBrowserID ?? ""),
              b().post(y, x);
          }
          InitBrowserID() {
            if (this.m_sBrowserID === void 0)
              if (a.TS.IN_CLIENT) this.m_sBrowserID = "steam";
              else {
                const W = navigator.userAgent;
                /iPhone|iPad|iPod/i.test(W) ||
                (/Macintosh/i.test(W) && /Safari/i.test(W))
                  ? (this.m_sBrowserID = "ios")
                  : /Android/i.test(W)
                    ? (this.m_sBrowserID = "android")
                    : (this.m_sBrowserID = "");
              }
          }
        }
        const A = new O();
        (0, D.V)("g_EventCalendarTrackingStore", A);
      },
      81673: (we, ye, s) => {
        "use strict";
        s.d(ye, { FD: () => W, vJ: () => X, xj: () => U });
        var n = s(14947),
          b = s(99412),
          m = s(49789),
          a = s(71742),
          t = s(3166),
          i = s(63694),
          D = s(7582),
          f = s(35675),
          O = Object.defineProperty,
          A = Object.getOwnPropertyDescriptor,
          M = (H, F, j, o) => {
            for (
              var d = o > 1 ? void 0 : o ? A(F, j) : F, h = H.length - 1, u;
              h >= 0;
              h--
            )
              (u = H[h]) && (d = (o ? u(F, j, d) : u(d)) || d);
            return o && d && O(F, j, d), d;
          },
          W = ((H) => (
            (H.k_ERecent = "recent"),
            (H.k_ELibrary = "library"),
            (H.k_EWishlist = "wishlist"),
            (H.k_EFollowing = "following"),
            (H.k_ERecommended = "recommended"),
            (H.k_ESteam = "steam"),
            (H.k_EFeatured = "featured"),
            (H.k_ECurator = "curator"),
            H
          ))(W || {});
        const p = [
            "library",
            "wishlist",
            "following",
            "recommended",
            "steam",
            "curator",
          ],
          y = [...p, "featured"],
          x = ["featured"];
        var U = ((H) => (
          (H.k_ENews = "news"),
          (H.k_EEvents = "events"),
          (H.k_EStreaming = "streaming"),
          (H.k_EUpdates = "updates"),
          (H.k_EReleases = "releases"),
          (H.k_ESales = "sales"),
          H
        ))(U || {});
        const T = [
            "news",
            "events",
            "streaming",
            "updates",
            "releases",
            "sales",
          ],
          P = new Map([
            ["news", [b.uYK]],
            ["events", [b.L0X, b.I5b, b.zA, b.y6, b.hGl, b.WNR, b.pIh, b.izQ]],
            ["streaming", [b.KDJ]],
            ["updates", [b.Fwr, b.u0, b.zeJ]],
            ["releases", [b.yhO, b.Aqr, b.DEQ, b.f4X, b.zcX]],
            ["sales", [b.HRy, b.C$4, b.LOv, b.HFK]],
          ]),
          E = 1599202800;
        function $(H) {
          return new Map(H.map((F) => [F, !0]));
        }
        class X {
          m_mapEventTypeGroupsAllowed = new Map();
          m_mapGameSources = new Map();
          m_bCuratorUnhideOnFollowDialogDismissed = !1;
          m_mapHiddenApps = new Map();
          m_mapHiddenClans = new Map();
          m_bInitializedForUpdatesOnly = !1;
          m_eStorageType = "session";
          m_strStorageKey;
          constructor(F) {
            (0, n.Gn)(this),
              (0, n.h5)(() => {
                F?.rgHiddenApps &&
                  F.rgHiddenApps.forEach((j) =>
                    this.m_mapHiddenApps.set(j, !0),
                  ),
                  F?.rgHiddenClans &&
                    F.rgHiddenClans.forEach((j) =>
                      this.m_mapHiddenClans.set(j, !0),
                    );
              });
          }
          GetGameSources() {
            return Array.from(this.m_mapGameSources.keys());
          }
          GetStorageObject() {
            return this.m_strStorageKey
              ? this.m_eStorageType === "session"
                ? window.sessionStorage
                : window.localStorage
              : null;
          }
          GetPreferencesStorageKey() {
            return `${this.m_strStorageKey}-event-calendar-prefs`;
          }
          get enabledEventTypeSet() {
            const F = new Set();
            for (const j of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
              P.get(j)?.forEach((o) => F.add(o));
            return F;
          }
          MapClanEventTypeToGroup(F) {
            let j;
            return (
              P.forEach((o, d) => {
                o.indexOf(F) !== -1 && (j = d);
              }),
              j || "events"
            );
          }
          InitDefaultCheckboxes(F, j, o) {
            (this.m_bInitializedForUpdatesOnly = j),
              (this.m_mapEventTypeGroupsAllowed = $(j ? ["updates"] : T));
            const d = (0, t.Y2)() ? y : p;
            (this.m_mapGameSources = $(F ? d : x)),
              o && this.m_mapGameSources.set("featured", !0);
          }
          Init(F, j, o, d, h) {
            (this.m_eStorageType = h), (this.m_strStorageKey = d);
            const u = this.GetStorageObject(),
              g = u ? u.getItem(this.GetPreferencesStorageKey()) : null;
            if (g) {
              const w = JSON.parse(g);
              if (w.rgEventTypeGroupsAllowed && w.rgGameSources) {
                const { rgEventTypeGroupsAllowed: te, rgGameSources: I } = w;
                (this.m_mapEventTypeGroupsAllowed = $(te)),
                  (this.m_mapGameSources = $(I)),
                  w.bCuratorUnhideOnFollowDismissed !== void 0 &&
                    (this.m_bCuratorUnhideOnFollowDialogDismissed =
                      w.bCuratorUnhideOnFollowDismissed);
                return;
              }
            }
            this.InitDefaultCheckboxes(F, j, o);
          }
          SaveFilterPreferences() {
            const F = this.GetStorageObject();
            if (!F) return;
            const j = {
              rgEventTypeGroupsAllowed: Array.from(
                this.m_mapEventTypeGroupsAllowed.keys(),
              ),
              rgGameSources: Array.from(this.m_mapGameSources.keys()),
              bCuratorUnhideOnFollowDismissed:
                this.m_bCuratorUnhideOnFollowDialogDismissed,
            };
            F.setItem(this.GetPreferencesStorageKey(), JSON.stringify(j));
          }
          BCuratorUnhideOnFollowDialogDismissed() {
            return this.m_bCuratorUnhideOnFollowDialogDismissed;
          }
          SetCuratorUnhideOnFollowDialogDismissed(F) {
            (this.m_bCuratorUnhideOnFollowDialogDismissed = F),
              this.SaveFilterPreferences();
          }
          BIsEventTypeGroupAllowed(F) {
            return this.m_mapEventTypeGroupsAllowed.has(F);
          }
          BIsGameSourceAllowed(F) {
            return (F === "following" && !(0, f.xU)()) ||
              (F === "curator" && !(0, f.Us)())
              ? !1
              : this.m_mapGameSources.has(F);
          }
          SetEventTypeGroupAllowed(F, j) {
            j
              ? this.m_mapEventTypeGroupsAllowed.set(F, !0)
              : this.m_mapEventTypeGroupsAllowed.delete(F),
              this.SaveFilterPreferences(),
              i.V.RecordFilterChangeEvent(this);
          }
          SetGameSourceAllowed(F, j) {
            j
              ? (this.m_mapGameSources.set(F, !0),
                F == "recent"
                  ? this.m_mapGameSources.delete("library")
                  : F == "library" &&
                    ((0, a.wT)(
                      !this.m_mapGameSources.has("recent"),
                      "Setting Library although Recent already set - illusion was broken",
                    ),
                    this.m_mapGameSources.delete("recent")))
              : (this.m_mapGameSources.delete(F),
                F == "recent"
                  ? this.m_mapGameSources.set("library", !0)
                  : F == "library" && this.m_mapGameSources.delete("recent")),
              this.SaveFilterPreferences(),
              i.V.RecordFilterChangeEvent(this);
          }
          BShouldDisplayEvent(F) {
            const j = F.GetSource(),
              o = 4320 * 3600,
              d = !!(
                F.appInfo &&
                F.appInfo.last_played &&
                F.appInfo.last_played + o >= D.HD.GetTimeNowWithOverride()
              );
            return (!this.enabledEventTypeSet.has(F.event_type) &&
              !(
                this.m_bInitializedForUpdatesOnly &&
                this.BIsEventTypeGroupAllowed("updates") &&
                F.event_type == b.uYK &&
                F.start_time < E
              )) ||
              this.m_mapHiddenApps.has(F.appid) ||
              this.m_mapHiddenClans.has(F.clanid)
              ? !1
              : j & m.bK.k_eRequired || j & m.bK.k_eReposted
                ? !0
                : !!(
                    (this.BIsGameSourceAllowed("recent") && d) ||
                    (this.BIsGameSourceAllowed("library") &&
                      j & m.bK.k_eLibrary) ||
                    (this.BIsGameSourceAllowed("wishlist") &&
                      j & m.bK.k_eWishlist) ||
                    (this.BIsGameSourceAllowed("following") &&
                      j & m.bK.k_eFollowing) ||
                    (this.BIsGameSourceAllowed("recommended") &&
                      j & m.bK.k_eRecommended) ||
                    (this.BIsGameSourceAllowed("steam") && j & m.bK.k_eSteam) ||
                    (this.BIsGameSourceAllowed("featured") &&
                      j & m.bK.k_eFeatured) ||
                    (this.BIsGameSourceAllowed("curator") &&
                      j & m.bK.k_eCurator)
                  );
          }
          BAreAllEventsHidden() {
            return (
              this.m_mapEventTypeGroupsAllowed.size == 0 ||
              this.m_mapGameSources.size == 0
            );
          }
          BAreAnyEventsFiltered(F) {
            const j = (0, t.Y2)() ? y : p;
            return (
              (F ? j : x).some((d) => !this.BIsGameSourceAllowed(d)) ||
              T.some((d) => !this.BIsEventTypeGroupAllowed(d))
            );
          }
          BIsClanVisible(F) {
            return !this.m_mapHiddenClans.has(F);
          }
          SetClanVisibility(F, j) {
            j
              ? this.m_mapHiddenClans.has(F) && this.m_mapHiddenClans.delete(F)
              : this.m_mapHiddenClans.has(F) ||
                this.m_mapHiddenClans.set(F, !0);
          }
          BIsAppVisible(F) {
            return !this.m_mapHiddenApps.has(F);
          }
          SetAppVisibility(F, j) {
            j
              ? this.m_mapHiddenApps.has(F) && this.m_mapHiddenApps.delete(F)
              : this.m_mapHiddenApps.has(F) || this.m_mapHiddenApps.set(F, !0);
          }
        }
        M([n.sH], X.prototype, "m_mapEventTypeGroupsAllowed", 2),
          M([n.sH], X.prototype, "m_mapGameSources", 2),
          M([n.sH], X.prototype, "m_bCuratorUnhideOnFollowDialogDismissed", 2),
          M([n.sH], X.prototype, "m_mapHiddenApps", 2),
          M([n.sH], X.prototype, "m_mapHiddenClans", 2),
          M(
            [(0, n.EW)({ keepAlive: !0, equals: n.m3.structural })],
            X.prototype,
            "enabledEventTypeSet",
            1,
          ),
          M([n.XI], X.prototype, "SetEventTypeGroupAllowed", 1),
          M([n.XI], X.prototype, "SetGameSourceAllowed", 1);
      },
      7582: (we, ye, s) => {
        "use strict";
        s.d(ye, { HD: () => f, f1: () => y, s4: () => x, sB: () => p });
        var n = s(19367),
          b = s.n(n),
          m = s(90626),
          a = s(88034),
          t = s(47689),
          i = s(77291);
        class D {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, a.mm)();
          }
          set nOverrideDateNow(T) {
            (0, a.ai)(T);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, a.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, a.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, a.mm)();
          }
          ParseDevOverrides(T) {
            if (!T || T.length == 0) return;
            new URLSearchParams(T[0] == "?" ? T.substring(1) : T).has("t");
          }
        }
        const f = new D();
        (0, i.V)("g_EventCalendarDevFeatures", f);
        function O(U = 1) {
          const [T, P] = React.useState(() => W()),
            E = useCancelTokenSource("useTimeNowWithOverride"),
            $ = React.useCallback(() => {
              E.token.reason || P(W());
            }, []);
          return (
            React.useEffect(() => {
              const X = 1e3 * U,
                H = Date.now() % X,
                F = X - H,
                j = window.setTimeout($, F);
              return () => {
                window.clearTimeout(j);
              };
            }, [T, U, $]),
            T
          );
        }
        const M = Math.floor(new Date().getTime() / 1e3);
        function W() {
          const U = Math.floor(Date.now() / 1e3);
          return f.nOverrideDateNow ? f.nOverrideDateNow + (U - M) : U;
        }
        function p() {
          return f.nOverrideDateNow ?? M;
        }
        function y() {
          return m.useMemo(() => p(), []);
        }
        function x() {
          return m.useMemo(() => f.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      80913: (we, ye, s) => {
        "use strict";
        s.d(ye, { Q: () => A, h: () => O });
        var n = s(72604),
          b = s(80902),
          m = s(75233),
          a = s(51614),
          t = s(90626),
          i = s(3166);
        const D = { registered: !1 };
        function f(U) {
          return {
            queryKey: ["sale", "giveawayregistration", U, i.iA.accountid],
            queryFn: () => p(U),
            enabled: !!U,
            retry: !1,
          };
        }
        function O(U) {
          const { data: T, isError: P } = (0, b.I)(f(U));
          return P ? D : T;
        }
        function A() {
          const U = (0, m.jE)(),
            { mutateAsync: T } = (0, a.n)({
              mutationFn: y,
              onSuccess: (E, $) => U.setQueryData(f($).queryKey, E),
            });
          return {
            fnCreateRegistration: t.useCallback(
              async (E) => {
                try {
                  return await T(E);
                } catch ($) {
                  return (
                    console.error(
                      "Registering for giveaway " + E + " failed",
                      $,
                    ),
                    D
                  );
                }
              },
              [T],
            ),
          };
        }
        const M = "saleaction/giveawayregistration",
          W = "saleaction/creategiveawayregistration";
        async function p(U) {
          const T = i.TS.STORE_BASE_URL + M + "?name=" + encodeURIComponent(U),
            P = await fetch(T, { credentials: "include" });
          return await x("GetUserGiveawayRegistration", U, T, P);
        }
        async function y(U) {
          const T = i.TS.STORE_BASE_URL + W,
            P = await fetch(T, {
              method: "POST",
              credentials: "include",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ name: U }),
            });
          return await x("UpdateUserGiveawayRegistration", U, T, P);
        }
        async function x(U, T, P, E) {
          if (!E.ok) throw new Error(P + " answered " + E.status);
          const $ = await E.json();
          if ($?.success == n.R && $.registration) return $.registration;
          throw new Error(U + " on " + T + " answered " + $?.success);
        }
      },
      76035: (we, ye, s) => {
        "use strict";
        s.d(ye, {
          $d: () => me,
          AD: () => o,
          CF: () => pe,
          Fq: () => H,
          Jo: () => d,
          Mn: () => Ee,
          N2: () => _,
          PV: () => Te,
          QS: () => ae,
          RE: () => j,
          Ri: () => X,
          Vz: () => g,
          ZB: () => le,
          _C: () => C,
          a8: () => ve,
          cO: () => u,
          ed: () => te,
          jT: () => I,
          kr: () => h,
          lE: () => B,
          np: () => be,
          rv: () => Q,
        });
        var n = s(72604),
          b = s(32093),
          m = s(90908),
          a = s(35038),
          t = s(27386),
          i = s(34041),
          D = s(80902),
          f = s(75233),
          O = s(51614),
          A = s(68312),
          M = s(98609),
          W = s(67705),
          p = s(6469),
          y = s(41735),
          x = s.n(y),
          U = s(75779),
          T = s(90626),
          P = s(31224);
        const E = 2640290,
          $ = 3334340,
          X = m.sK,
          H = 2215130;
        let F;
        function j() {
          return (
            F || (F = (0, W.Fd)("steam_awards_config", "application_config")), F
          );
        }
        const o = T.createContext(null);
        function d(ee) {
          const ie = (0, A.KV)();
          return (0, D.I)({
            queryKey: [`SteamAwardDefs_${ee}`],
            queryFn: async () => {
              const v = a.w.Init(i.cD);
              return (
                v.Body().set_sale_appid(ee),
                v.Body().set_language(M.TS.LANGUAGE),
                (await i.zF.GetVoteDefinitions(ie, v)).Body().toObject()
              );
            },
            initialData: () => j()?.definitions,
            enabled: ee > 0,
          });
        }
        async function h(ee) {
          const ie = a.w.Init(i.Dp);
          return (
            (await i.AH.GetUserNominations(ee, ie)).Body().toObject()
              ?.nominations ?? []
          );
        }
        function u() {
          const ee = (0, A.KV)();
          return (0, D.I)({
            queryKey: [`SteamAwardNominations_${M.iA.accountid}`],
            queryFn: () => h(ee),
            initialData: () => j()?.user_nominations?.nominations,
            enabled: M.iA.logged_in,
          });
        }
        function g(ee) {
          const ie = u();
          return ie.isLoading
            ? { bLoadingNominationForCategory: !0 }
            : {
                currentNomination: ie.data?.find((v) => v.category_id == ee),
                bLoadingNominationForCategory: !1,
              };
        }
        function w() {
          return [`SteamAwardBadgeProgress_${M.iA.accountid}`];
        }
        function te(ee) {
          const ie = (0, A.KV)();
          return (0, D.I)({
            queryKey: w(),
            queryFn: async () => {
              const v = a.w.Init(t.jng);
              return (
                v.Body().set_badgeid(ee),
                v.Body().set_steamid(M.iA.steamid),
                (await t.xtC.GetCommunityBadgeProgress(ie, v)).Body().toObject()
              );
            },
            initialData: () => j()?.badge_progress,
            enabled: M.iA.logged_in,
          });
        }
        function I(ee) {
          const ie = (0, A.KV)();
          return (0, D.I)({
            queryKey: [`SteamAwardSuggestions_${ee}`],
            queryFn: async () => {
              const v = a.w.Init(i.$N);
              return (
                v.Body().set_category_id(ee),
                (await i.AH.GetNominationRecommendations(ie, v))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
          });
        }
        function z(ee, ie) {
          ee.setQueryData([`SteamAwardNominations_${M.iA.accountid}`], ie);
        }
        async function _(ee, ie, v, k) {
          const q = a.w.Init(i.wz);
          q.Body().set_category_id(v),
            q.Body().set_source(k),
            q.Body().set_nominated_id(ie);
          const V = await i.AH.Nominate(ee, q);
          return (
            V.BSuccess() ||
              console.warn(`Failed to nominate app: ${V.GetEResult()}`),
            [V.GetEResult(), V.Body().toObject()]
          );
        }
        function me(ee, ie, v, k, q) {
          const V = (0, A.KV)(),
            ce = (0, f.jE)();
          return (0, O.n)({
            mutationFn: () => _(V, ee, ie, v),
            onSuccess: ([Me, de]) => {
              Me == n.R
                ? (z(ce, de.nominations),
                  window.setTimeout(
                    () => ce.invalidateQueries({ queryKey: w() }),
                    1e3,
                  ),
                  q && q())
                : k && k(Me);
            },
            onError: () => {
              k && k();
            },
          });
        }
        async function G(ee, ie, v) {
          let k = {
            cc: M.TS.COUNTRY,
            l: M.TS.LANGUAGE,
            realm: b.TU.k_ESteamRealmGlobal,
            origin: self.origin,
            f: "jsonfull",
            term: ee.replace(" ", "+"),
            require_type: "game",
            is_released_somewhere: 1,
            excluded_tags: p.Fm.Get().GetExcludedTagsSortedByID(),
            excluded_content_descriptors: p.Fm.Get().ExcludedContentDescriptor,
            excluded_apps: v,
          };
          ie.release_date_max &&
            (k.release_date_max = new Date(
              ie.release_date_max * 1e3,
            ).toISOString()),
            ie.release_date_min &&
              (k.release_date_min = new Date(
                ie.release_date_min * 1e3,
              ).toISOString()),
            ie.flag == i.Xs.O8 && (k.vrsupport = 1),
            ie.flag == i.Xs.x1 &&
              (k.steam_deck_compat_categories = [U.YX, U.sd, U.I2]);
          const q = `${M.TS.STORE_BASE_URL}search/suggest`;
          return (
            (await x().get(q, { params: k, withCredentials: !0 })).data ?? []
          );
        }
        function B(ee, ie, v) {
          return (0, D.I)({
            queryKey: [ee, ie.voteid, v],
            queryFn: () => G(ee, ie, v),
            staleTime: 1 / 0,
          });
        }
        function R() {
          const ee = u();
          return ee.data ? ee.data.map((ie) => ie.appid) : [];
        }
        async function ue(ee, ie) {
          const v = a.w.Init(i.CX);
          v.Body().set_generate_new(ie);
          const k = await i.AH.GetNominationShareLink(ee, v);
          return (
            k.BSuccess() ||
              console.warn(
                `Failed to GetNominationShareLink: ${k.GetEResult()}`,
              ),
            [k.GetEResult(), k.Body().toObject()]
          );
        }
        function be() {
          const ee = (0, A.KV)();
          return (0, D.I)({
            queryKey: [`GetNominationShareLink_${M.iA.accountid}`],
            queryFn: async () => ue(ee, !1),
            initialData: () => [n.R, j()?.share_link],
            staleTime: 1 / 0,
            enabled: M.iA.logged_in,
          });
        }
        function C() {
          const ee = (0, A.KV)(),
            ie = (0, f.jE)();
          return (0, O.n)({
            mutationFn: () => ue(ee, !0),
            onSuccess: ([v, k]) => {
              v == n.R &&
                ie.setQueryData(
                  [`GetNominationShareLink_${M.iA.accountid}`],
                  [v, k],
                );
            },
          });
        }
        async function Q(ee, ie, v, k) {
          const q = a.w.Init(i.yX);
          q.Body().set_voteid(v),
            q.Body().set_appid(ie),
            q.Body().set_sale_appid(k);
          const V = await i.zF.SetVote(ee, q);
          return (
            V.BSuccess() ||
              console.warn(
                `Failed to set vote for app (${ie}): ${V.GetEResult()}`,
              ),
            [V.GetEResult(), V.Body().toObject()]
          );
        }
        function le(ee, ie, v) {
          const k = (0, A.KV)(),
            q = (0, f.jE)();
          return (0, O.n)({
            mutationFn: () => Q(k, ee, ie, v),
            onSuccess: ([V, ce]) => {
              V == n.R &&
                q.setQueryData(
                  [`SteamAwardUserVotes_${M.iA.accountid}`],
                  ce.user_votes,
                );
            },
          });
        }
        async function ae(ee, ie) {
          const v = a.w.Init(i.qX);
          v.Body().set_sale_appid(ie);
          const k = await i.zF.GetUserVotes(ee, v);
          return (
            k.BSuccess() ||
              console.warn(`Failed to get votes for user: ${k.GetEResult()}`),
            k.Body().toObject()?.user_votes
          );
        }
        function ve(ee) {
          const ie = (0, A.KV)();
          return (0, D.I)({
            queryKey: [`SteamAwardUserVotes_${M.iA.accountid}`],
            queryFn: () => ae(ie, ee),
            initialData: () => j()?.user_votes,
            enabled: M.iA.logged_in,
          });
        }
        function Ee(ee, ie) {
          const v = ve(ee);
          return (0, T.useMemo)(
            () => v.data?.find((k) => k.voteid == ie)?.appid,
            [ie, v.data],
          );
        }
        function Pe(ee) {
          const ie = (0, A.KV)();
          return (0, D.I)({
            queryKey: [`SteamAwardItemDefs_${ee}`],
            queryFn: async () => {
              const v = a.w.Init(P.RG);
              return (
                v.Body().set_appid(ee),
                v.Body().set_language(M.TS.LANGUAGE),
                (await P.uy.GetCommunityItemDefinitions(ie, v))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
            initialData: () => j()?.item_definitions,
          });
        }
        function Te(ee, ie) {
          const v = Pe(ee),
            k = d(ee);
          if (!v.data || !k.data) return null;
          const q = k.data.votes.find((V) => V.voteid == ie);
          return v.data.item_definitions?.find(
            (V) => V.item_type == q.item_type,
          );
        }
        function pe() {
          return T.useContext(o).yearStyles;
        }
      },
      30720: (we, ye, s) => {
        "use strict";
        s.d(ye, { K: () => f });
        var n = s(41735),
          b = s.n(n),
          m = s(14947),
          a = s(72604),
          t = s(34592),
          i = s(3166),
          D = s(54326);
        class f {
          static s_VODStore;
          m_mapAppToVOD = new Map();
          GetVODForAppID(A) {
            return this.m_mapAppToVOD.get(A);
          }
          async LoadVODForAppID(A, M) {
            if (this.m_mapAppToVOD.has(A)) return this.m_mapAppToVOD.get(A);
            const W = i.TS.STORE_BASE_URL + "video/details/" + A + "/0",
              p = {};
            try {
              let y = await b().get(W, {
                params: p,
                withCredentials: !0,
                cancelToken: M ? M.token : void 0,
              });
              if (M && M.token.reason) return;
              if (
                y &&
                y.status == 200 &&
                y.data &&
                (y.data.success == a.R || y.data.success == "ready")
              ) {
                let x = (0, m.sH)({
                  appid: A,
                  video_url: y.data.video_url,
                  bookmark: y.data.bookmark,
                });
                return (
                  y.data.bookmark
                    ? D.t.Get().SetBookmarkForApp(A, y.data.bookmark)
                    : D.t.Get().InitializeBookmarkForApp(A),
                  this.m_mapAppToVOD.set(A, x),
                  x
                );
              }
            } catch (y) {
              let x = (0, t.H)(y);
              console.error(
                "CVideoOnDemandStore:LoadVODForAppID: Failed " + x.strErrorMsg,
                x,
              );
            }
          }
          static Get() {
            return (
              f.s_VODStore || ((f.s_VODStore = new f()), f.s_VODStore.Init()),
              f.s_VODStore
            );
          }
          Init() {}
        }
      },
      54326: (we, ye, s) => {
        "use strict";
        s.d(ye, { M: () => d, t: () => o });
        var n = s(41735),
          b = s.n(n),
          m = s(72604),
          a = s(35038),
          t = s(3685),
          i = s(80613),
          D = s.n(i),
          f = s(75245);
        function O(h) {
          return "unknown ETrailerConvertState ( " + h + " )";
        }
        function A(h) {
          return "unknown ETrailerConvertTargetType ( " + h + " )";
        }
        class M extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              M.prototype.video_id || f.Sg(M.M()),
              i.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    video_id: {
                      n: 1,
                      br: f.qM.readUint64String,
                      bw: f.gp.writeUint64String,
                    },
                    client_cellid: {
                      n: 2,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = f.w0(M.M())), M.sm_mbf;
          }
          toObject(u = !1) {
            return M.toObject(u, this);
          }
          static toObject(u, g) {
            return f.BT(M.M(), u, g);
          }
          static fromObject(u) {
            return f.Uq(M.M(), u);
          }
          static deserializeBinary(u) {
            let g = new (D().BinaryReader)(u),
              w = new M();
            return M.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(u, g) {
            return f.zj(M.MBF(), u, g);
          }
          serializeBinary() {
            var u = new (D().BinaryWriter)();
            return M.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, g) {
            f.i0(M.M(), u, g);
          }
          serializeBase64String() {
            var u = new (D().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Request";
          }
        }
        class W extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              W.prototype.video_id || f.Sg(W.M()),
              i.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    video_id: {
                      n: 1,
                      br: f.qM.readUint64String,
                      bw: f.gp.writeUint64String,
                    },
                    video_url: {
                      n: 2,
                      br: f.qM.readString,
                      bw: f.gp.writeString,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = f.w0(W.M())), W.sm_mbf;
          }
          toObject(u = !1) {
            return W.toObject(u, this);
          }
          static toObject(u, g) {
            return f.BT(W.M(), u, g);
          }
          static fromObject(u) {
            return f.Uq(W.M(), u);
          }
          static deserializeBinary(u) {
            let g = new (D().BinaryReader)(u),
              w = new W();
            return W.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(u, g) {
            return f.zj(W.MBF(), u, g);
          }
          serializeBinary() {
            var u = new (D().BinaryWriter)();
            return W.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, g) {
            f.i0(W.M(), u, g);
          }
          serializeBase64String() {
            var u = new (D().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Response";
          }
        }
        class p extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              p.prototype.encryption_key || f.Sg(p.M()),
              i.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    encryption_key: {
                      n: 1,
                      br: f.qM.readBytes,
                      bw: f.gp.writeBytes,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = f.w0(p.M())), p.sm_mbf;
          }
          toObject(u = !1) {
            return p.toObject(u, this);
          }
          static toObject(u, g) {
            return f.BT(p.M(), u, g);
          }
          static fromObject(u) {
            return f.Uq(p.M(), u);
          }
          static deserializeBinary(u) {
            let g = new (D().BinaryReader)(u),
              w = new p();
            return p.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(u, g) {
            return f.zj(p.MBF(), u, g);
          }
          serializeBinary() {
            var u = new (D().BinaryWriter)();
            return p.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, g) {
            f.i0(p.M(), u, g);
          }
          serializeBase64String() {
            var u = new (D().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_UnlockedH264_Notification";
          }
        }
        class y extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              y.prototype.app_id || f.Sg(y.M()),
              i.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    app_id: { n: 1, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                    client_cellid: {
                      n: 2,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = f.w0(y.M())), y.sm_mbf;
          }
          toObject(u = !1) {
            return y.toObject(u, this);
          }
          static toObject(u, g) {
            return f.BT(y.M(), u, g);
          }
          static fromObject(u) {
            return f.Uq(y.M(), u);
          }
          static deserializeBinary(u) {
            let g = new (D().BinaryReader)(u),
              w = new y();
            return y.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(u, g) {
            return f.zj(y.MBF(), u, g);
          }
          serializeBinary() {
            var u = new (D().BinaryWriter)();
            return y.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, g) {
            f.i0(y.M(), u, g);
          }
          serializeBase64String() {
            var u = new (D().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Request";
          }
        }
        class x extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              x.prototype.app_id || f.Sg(x.M()),
              i.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    app_id: { n: 1, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                    opf_settings: {
                      n: 2,
                      br: f.qM.readString,
                      bw: f.gp.writeString,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = f.w0(x.M())), x.sm_mbf;
          }
          toObject(u = !1) {
            return x.toObject(u, this);
          }
          static toObject(u, g) {
            return f.BT(x.M(), u, g);
          }
          static fromObject(u) {
            return f.Uq(x.M(), u);
          }
          static deserializeBinary(u) {
            let g = new (D().BinaryReader)(u),
              w = new x();
            return x.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(u, g) {
            return f.zj(x.MBF(), u, g);
          }
          serializeBinary() {
            var u = new (D().BinaryWriter)();
            return x.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, g) {
            f.i0(x.M(), u, g);
          }
          serializeBase64String() {
            var u = new (D().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Response";
          }
        }
        class U extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              U.prototype.app_id || f.Sg(U.M()),
              i.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    app_id: { n: 1, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                    playback_position_in_seconds: {
                      n: 2,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                    video_track_id: {
                      n: 3,
                      br: f.qM.readUint64String,
                      bw: f.gp.writeUint64String,
                    },
                    audio_track_id: {
                      n: 4,
                      br: f.qM.readUint64String,
                      bw: f.gp.writeUint64String,
                    },
                    timedtext_track_id: {
                      n: 5,
                      br: f.qM.readUint64String,
                      bw: f.gp.writeUint64String,
                    },
                    last_modified: {
                      n: 6,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                    hide_from_watch_history: {
                      n: 7,
                      d: !1,
                      br: f.qM.readBool,
                      bw: f.gp.writeBool,
                    },
                    hide_from_library: {
                      n: 8,
                      d: !1,
                      br: f.qM.readBool,
                      bw: f.gp.writeBool,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = f.w0(U.M())), U.sm_mbf;
          }
          toObject(u = !1) {
            return U.toObject(u, this);
          }
          static toObject(u, g) {
            return f.BT(U.M(), u, g);
          }
          static fromObject(u) {
            return f.Uq(U.M(), u);
          }
          static deserializeBinary(u) {
            let g = new (D().BinaryReader)(u),
              w = new U();
            return U.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(u, g) {
            return f.zj(U.MBF(), u, g);
          }
          serializeBinary() {
            var u = new (D().BinaryWriter)();
            return U.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, g) {
            f.i0(U.M(), u, g);
          }
          serializeBase64String() {
            var u = new (D().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "VideoBookmark";
          }
        }
        class T extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              T.prototype.bookmarks || f.Sg(T.M()),
              i.Message.initialize(this, u, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: { bookmarks: { n: 1, c: U, r: !0, q: !0 } },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = f.w0(T.M())), T.sm_mbf;
          }
          toObject(u = !1) {
            return T.toObject(u, this);
          }
          static toObject(u, g) {
            return f.BT(T.M(), u, g);
          }
          static fromObject(u) {
            return f.Uq(T.M(), u);
          }
          static deserializeBinary(u) {
            let g = new (D().BinaryReader)(u),
              w = new T();
            return T.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(u, g) {
            return f.zj(T.MBF(), u, g);
          }
          serializeBinary() {
            var u = new (D().BinaryWriter)();
            return T.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, g) {
            f.i0(T.M(), u, g);
          }
          serializeBase64String() {
            var u = new (D().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_SetVideoBookmark_Notification";
          }
        }
        class P extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              P.prototype.appids || f.Sg(P.M()),
              i.Message.initialize(this, u, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: f.qM.readUint32,
                      pbr: f.qM.readPackedUint32,
                      bw: f.gp.writeRepeatedUint32,
                    },
                    updated_since: {
                      n: 2,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = f.w0(P.M())), P.sm_mbf;
          }
          toObject(u = !1) {
            return P.toObject(u, this);
          }
          static toObject(u, g) {
            return f.BT(P.M(), u, g);
          }
          static fromObject(u) {
            return f.Uq(P.M(), u);
          }
          static deserializeBinary(u) {
            let g = new (D().BinaryReader)(u),
              w = new P();
            return P.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(u, g) {
            return f.zj(P.MBF(), u, g);
          }
          serializeBinary() {
            var u = new (D().BinaryWriter)();
            return P.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, g) {
            f.i0(P.M(), u, g);
          }
          serializeBase64String() {
            var u = new (D().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Request";
          }
        }
        class E extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              E.prototype.bookmarks || f.Sg(E.M()),
              i.Message.initialize(this, u, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: { bookmarks: { n: 1, c: U, r: !0, q: !0 } },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = f.w0(E.M())), E.sm_mbf;
          }
          toObject(u = !1) {
            return E.toObject(u, this);
          }
          static toObject(u, g) {
            return f.BT(E.M(), u, g);
          }
          static fromObject(u) {
            return f.Uq(E.M(), u);
          }
          static deserializeBinary(u) {
            let g = new (D().BinaryReader)(u),
              w = new E();
            return E.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(u, g) {
            return f.zj(E.MBF(), u, g);
          }
          serializeBinary() {
            var u = new (D().BinaryWriter)();
            return E.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, g) {
            f.i0(E.M(), u, g);
          }
          serializeBase64String() {
            var u = new (D().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Response";
          }
        }
        var $;
        ((h) => {
          function u(te, I, z) {
            return te.SendMsg(
              "Video.ClientGetVideoURL#1",
              (0, a.I8)(M, I, z),
              W,
              { ePrivilege: 1 },
            );
          }
          h.ClientGetVideoURL = u;
          function g(te, I) {
            return te.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, a.I8)(T, I),
              { ePrivilege: 1 },
            );
          }
          h.SetVideoBookmark = g;
          function w(te, I, z) {
            return te.SendMsg(
              "Video.GetVideoBookmarks#1",
              (0, a.I8)(P, I, z),
              E,
              { ePrivilege: 1 },
            );
          }
          h.GetVideoBookmarks = w;
        })($ || ($ = {}));
        var X;
        ((h) => {
          h.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: p,
          };
        })(X || (X = {}));
        var H;
        ((h) => {
          function u(g, w, te) {
            return g.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, a.I8)(y, w, te),
              x,
              { ePrivilege: 1 },
            );
          }
          h.ClientGetOPFSettings = u;
        })(H || (H = {}));
        var F = s(34592),
          j = s(3166);
        class o {
          static s_VODStore;
          m_transport = null;
          m_mapBookmarks = new Map();
          SetBookmarkForApp(u, g) {
            this.ValidateBookmarkData(g)
              ? this.m_mapBookmarks.set(u, U.fromObject(g))
              : this.InitializeBookmarkForApp(u);
          }
          ValidateBookmarkData(u) {
            const g = u;
            return typeof g == "object"
              ? Number.isInteger(g.playback_position_in_seconds) &&
                  Number.isInteger(g.app_id)
              : !1;
          }
          InitializeBookmarkForApp(u) {
            if (!this.m_mapBookmarks.has(u)) {
              let g = {
                app_id: u,
                playback_position_in_seconds: 0,
                video_track_id: "0",
                audio_track_id: "0",
                timedtext_track_id: "0",
                hide_from_watch_history: !1,
                hide_from_library: !1,
              };
              this.m_mapBookmarks.set(u, new U(g));
            }
          }
          GetBookmarkPlayTimeInSeconds(u) {
            let g = this.m_mapBookmarks.get(u);
            if (g) {
              let w = g.playback_position_in_seconds();
              if (Number.isInteger(w)) return w;
            }
            return 0;
          }
          async SendBookMarkedTimeToServer(u, g, w, te, I) {
            if (!j.iA.logged_in) return;
            if (!this.m_transport) {
              console.warn(
                "CVideoBookmarkStore:SetBookMark no auth token / transport",
              );
              return;
            }
            const z = a.w.Init(T);
            let _ = this.m_mapBookmarks.get(u);
            if (_) {
              let me = !1;
              _.app_id() != u && ((me = !0), _.set_app_id(u)),
                _.playback_position_in_seconds() != g &&
                  ((me = !0), _.set_playback_position_in_seconds(g)),
                (w = w || "0"),
                _.video_track_id() != w && (_.set_video_track_id(w), (me = !0)),
                (te = te || "0"),
                _.audio_track_id() != te &&
                  (_.set_audio_track_id(te), (me = !0)),
                (I = I || "0"),
                I != _.timedtext_track_id() &&
                  (_.set_timedtext_track_id(I), (me = !0)),
                me &&
                  (z.Body().add_bookmarks(_),
                  $.SetVideoBookmark(this.m_transport, z));
            }
          }
          static Get() {
            return (
              o.s_VODStore || ((o.s_VODStore = new o()), o.s_VODStore.Init()),
              o.s_VODStore
            );
          }
          Init() {
            j.iA.logged_in && this.LoadWatchVideoOAuthToken();
          }
          async LoadWatchVideoOAuthToken() {
            const u =
                (0, j.yK)() == "community"
                  ? j.TS.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                  : j.TS.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
              g = {};
            try {
              let w = await b().get(u, { params: g, withCredentials: !0 });
              if (
                w &&
                w.status == 200 &&
                w.data &&
                w.data.success == m.R &&
                w.data.webapi_token
              ) {
                this.m_transport = new t.D(
                  j.TS.WEBAPI_BASE_URL,
                  w.data.webapi_token,
                ).GetServiceTransport();
                return;
              }
            } catch (w) {
              let te = (0, F.H)(w);
              console.error(
                "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                  te.strErrorMsg,
                te,
              );
            }
          }
        }
        class d {
          m_appid;
          constructor(u) {
            this.m_appid = u;
          }
          async SetBookmark(u, g, w, te) {
            j.iA.logged_in &&
              o
                .Get()
                .SendBookMarkedTimeToServer(
                  this.m_appid,
                  Math.floor(u),
                  g,
                  w,
                  te,
                );
          }
          GetBeginPlaytime() {
            return j.iA.logged_in
              ? o.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
              : 0;
          }
        }
      },
      68538: (we, ye, s) => {
        "use strict";
        s.d(ye, { F: () => $ });
        var n = s(7850),
          b = s(54130),
          m = s(19298),
          a = s(65731),
          t = s(90626),
          i = s(36707),
          D = s(18210),
          f = s(3166),
          O = s(47444),
          A = s(64377),
          M = s(11279);
        function W(o) {
          const {
            nSlideIndex: d,
            nStartingSlideIndex: h,
            ref: u,
            children: g,
          } = o;
          return h === void 0
            ? g
            : (0, n.jsx)("div", { ref: d === h ? u : void 0, children: g });
        }
        function p(o) {
          const {
              padded: d,
              gap: h,
              children: u,
              bLazyRenderChildren: g,
              lazyRenderPlaceholderWidth: w,
              lazyRenderPlaceholderHeight: te,
              startingSlide: I,
            } = o,
            z = t.useRef(null),
            _ = t.useRef(null),
            me = (0, f.Qn)();
          t.useLayoutEffect(() => {
            !z.current ||
              !_.current ||
              (z.current.scrollLeft +=
                _.current.getBoundingClientRect().left -
                z.current.getBoundingClientRect().left);
          }, [I]);
          const G = t.Children.map(u, (R, ue) =>
              g
                ? (0, n.jsx)(A.K, {
                    rootMargin: "0px 50% 0px 50%",
                    horizontal: !0,
                    placeholderWidth: w ?? 1,
                    placeholderHeight: 1,
                    holdGamepadFocus: me,
                    children: (0, n.jsx)(W, {
                      nSlideIndex: ue,
                      nStartingSlideIndex: I,
                      ref: _,
                      children: R,
                    }),
                  })
                : (0, n.jsx)(W, {
                    nSlideIndex: ue,
                    nStartingSlideIndex: I,
                    ref: _,
                    children: R,
                  }),
            ),
            B = (0, n.jsx)(m.Z, {
              "flow-children": "row",
              style: { gap: h ? h + "px" : void 0 },
              className: (0, i.A)(
                { SaleSectionCarouselPadding: d },
                "ScrollSnapCarousel",
                "SaleSectionCarousel",
                M.ScrollSnapCarousel,
                o.className,
              ),
              ref: z,
              children: G,
            });
          return g
            ? (0, n.jsx)(A.K, {
                rootMargin: "50% 0px 50% 0px",
                horizontal: !1,
                placeholderWidth: 1,
                placeholderHeight: te ?? 1,
                children: B,
              })
            : B;
        }
        var y = s(95892),
          x = s(64238),
          U = s.n(x),
          T = s(79083);
        class P extends t.Component {
          render() {
            const { showArrows: d, arrowFill: h, arrowStyle: u } = this.props,
              g = this.props.visibleSlides,
              w = this.props.totalSlides,
              te = this.props.currentSlide;
            if (g >= w) return null;
            const I = (100 * te) / w,
              z = 100 * (1 - Math.min(te + g, w) / w),
              _ = (50 * g) / w,
              me = I + _,
              G = 100 - me;
            return (0, n.jsxs)("div", {
              className: O.pipScrollerContainer,
              children: [
                d &&
                  (0, n.jsx)(a._X, {
                    className: (0, i.A)(
                      O.pipScrollButton,
                      O.left,
                      O.carouselNavButton,
                    ),
                    children: (0, n.jsx)(T.m, {
                      arrowFill: h,
                      arrowStyle: u,
                      direction: "left",
                    }),
                  }),
                (0, n.jsxs)("div", {
                  className: O.pipScroller,
                  children: [
                    (0, n.jsx)("div", { className: O.scrollBackground }),
                    (0, n.jsx)("div", {
                      className: O.scrollForeground,
                      style: { left: I + "%", right: z + "%" },
                    }),
                    (0, n.jsx)("div", {
                      className: O.scrollNavDiv,
                      style: { left: "0%", width: me + "%" },
                      children: (0, n.jsx)(a._X, {
                        className: (0, i.A)(
                          O.carouselNavButton,
                          O.scrollNavButton,
                        ),
                        style: { color: "red" },
                        children: (0, n.jsx)("div", {}),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: O.scrollNavDiv,
                      style: { right: "0%", width: G + "%" },
                      children: (0, n.jsx)(a.CC, {
                        className: (0, i.A)(
                          O.carouselNavButton,
                          O.scrollNavButton,
                        ),
                        children: (0, n.jsx)("div", {}),
                      }),
                    }),
                  ],
                }),
                d &&
                  (0, n.jsx)(a.CC, {
                    className: (0, i.A)(
                      O.pipScrollButton,
                      O.right,
                      O.carouselNavButton,
                    ),
                    children: (0, n.jsx)(T.m, {
                      arrowFill: h,
                      arrowStyle: u,
                      direction: "right",
                    }),
                  }),
              ],
            });
          }
        }
        const E = (0, a.Yw)(P, (o) => ({
          currentSlide: o.currentSlide,
          totalSlides: o.totalSlides,
          visibleSlides: o.visibleSlides,
        }));
        function $(o) {
          const { bForceSimpleCarousel: d, screenIsWide: h, children: u } = o,
            g = (0, f.Qn)();
          return (h || g) && !d
            ? (0, n.jsx)(X, { ...o, children: u })
            : (0, n.jsx)(p, { ...o, children: u });
        }
        function X(o) {
          const d = (0, f.Qn)(),
            h = () => t.Children.count(o.children),
            u = () => Math.min(h(), o.visibleElements),
            g = () =>
              t.Children.map(o.children, (R, ue) => {
                const be = o.bLazyRenderChildren
                  ? (0, n.jsx)(A.K, {
                      rootMargin: "0px -5px 0px 100%",
                      horizontal: !0,
                      placeholderWidth: o.lazyRenderPlaceholderWidth ?? 1,
                      placeholderHeight: o.lazyRenderPlaceholderHeight ?? 1,
                      holdGamepadFocus: d,
                      children: R,
                    })
                  : R;
                return (0, n.jsx)(
                  a.q7,
                  {
                    className: O.innerSlide,
                    index: ue,
                    role: "listitem",
                    "aria-label": void 0,
                    children: be,
                  },
                  "slide_" + ue,
                );
              }),
            w = h(),
            te = u();
          if (!w || !te) return null;
          const I = te < w,
            z = o.hideArrows || !I,
            _ = !I || o.hidePips;
          let me = 4 / 3,
            G = !0;
          o.slideAspectRatio && ((me = o.slideAspectRatio), (G = !1));
          const B = `items_in_row_${o.visibleElements}`;
          return (0, n.jsx)(m.Z, {
            "flow-children": "row",
            className: (0, i.A)(O.carouselBody, o.className, B),
            navKey: o.navKey,
            children: (0, n.jsxs)(a.gi, {
              visibleSlides: o.visibleElements,
              totalSlides: h(),
              naturalSlideWidth: 100 * me,
              naturalSlideHeight: 100,
              step: o.visibleElements,
              infinite: !o.disableEdgeWrap,
              isIntrinsicHeight: G,
              dragEnabled: !1,
              touchEnabled: !1,
              lockOnWindowScroll: !0,
              orientation: "horizontal",
              disableKeyboard: !0,
              currentSlide: o.startingSlide,
              children: [
                (0, n.jsx)(j, {
                  bHideArrows: z,
                  bAutoAdvance: o.bAutoAdvance && !d,
                  onSlide: o.onSlide,
                  arrowFill: o.arrowFill,
                  arrowStyle: o.arrowStyle,
                  children: g(),
                }),
                !_ &&
                  (o.useTestScrollbar
                    ? (0, n.jsx)(E, { showArrows: z, carouselStore: null })
                    : (0, n.jsx)("div", {
                        className: U()({
                          [O.breadcrumbContainer]: !0,
                          [O.breadcrumbContainerTemplate]:
                            o.className?.includes("template-carousel"),
                        }),
                        children: (0, n.jsx)(H, {
                          ...o,
                          nPageSize: te,
                          children: o.children,
                        }),
                      })),
              ],
            }),
          });
        }
        function H(o) {
          const { nPageSize: d } = o,
            h = t.useContext(a.Yc),
            [u, g] = t.useState(h.state.currentSlide);
          return (
            t.useEffect(
              () =>
                h.subscribe(() => {
                  g(h.state.currentSlide);
                }),
              [h],
            ),
            (0, n.jsx)(n.Fragment, {
              children: t.Children.map(o.children, (w, te) => {
                if (te % d !== 0) return null;
                const I = u >= te && u < te + d;
                return (0, n.jsx)(
                  a.cL,
                  {
                    slide: te,
                    className: O.pip,
                    children: (0, n.jsx)(T.U, { ...o, bIsActive: I }),
                  },
                  te,
                );
              }),
            })
          );
        }
        function F(o) {
          o.current && (window.clearTimeout(o.current), (o.current = null));
        }
        function j(o) {
          const {
              bHideArrows: d,
              bAutoAdvance: h,
              children: u,
              onSlide: g,
              arrowFill: w,
              arrowStyle: te,
            } = o,
            I = t.useContext(a.Yc),
            z = t.useRef(I.state.currentSlide),
            [_, me] = t.useState(null),
            [G, B] = t.useState(!!h),
            R = t.useRef(null),
            ue = t.useRef(null);
          t.useEffect(() => {
            const C = () => {
              R.current = window.setTimeout(() => {
                if (R.current) {
                  F(R);
                  let ae = 0;
                  I.state.currentSlide + I.state.visibleSlides <
                    I.state.totalSlides &&
                    (ae = Math.min(
                      I.state.currentSlide + I.state.visibleSlides,
                      I.state.totalSlides - I.state.visibleSlides,
                    )),
                    I.setStoreState({ currentSlide: ae });
                }
              }, 8e3);
            };
            G && C();
            const Q = () => {
              const le = z.current,
                ae = I.state.currentSlide;
              g && g(ae),
                me(ae > le ? "Right" : ae < le ? "Left" : null),
                F(ue);
              const ve = 1e3;
              (ue.current = window.setTimeout(() => {
                ue.current && (me(null), F(ue));
              }, ve)),
                (z.current = ae),
                R.current ? (F(R), B(!1)) : G && C();
            };
            return (
              I.subscribe(Q),
              () => {
                I.unsubscribe(Q), F(R), F(ue);
              }
            );
          }, [I, G]);
          const be = !!_ && "CarouselSliding" + _;
          return (0, n.jsxs)("div", {
            className: (0, i.A)(O.sliderBody, "SliderBody", be),
            children: [
              !d &&
                (0, n.jsx)(a._X, {
                  className: (0, i.A)(
                    O.carouselBtnCtn,
                    O.left,
                    O.carouselNavButton,
                    "CarouselBtnLeft",
                  ),
                  "aria-label": (0, D.we)("#Carousel_Prev"),
                  children: (0, n.jsx)(T.m, {
                    arrowFill: w,
                    arrowStyle: te,
                    direction: "left",
                  }),
                }),
              (0, n.jsx)(a.Ap, {
                className: y.J.GetScrollableClassname(),
                classNameTray: O.slideTrayCustomize,
                classNameAnimation: O.DisableSliderMotion,
                role: "list",
                children: (0, n.jsx)(b.q, { children: u }),
              }),
              !d &&
                (0, n.jsx)(a.CC, {
                  className: (0, i.A)(
                    O.carouselBtnCtn,
                    O.right,
                    O.carouselNavButton,
                    "CarouselBtnRight",
                  ),
                  "aria-label": (0, D.we)("#Carousel_Next"),
                  children: (0, n.jsx)(T.m, {
                    arrowFill: w,
                    arrowStyle: te,
                    direction: "right",
                  }),
                }),
            ],
          });
        }
      },
      73191: (we, ye, s) => {
        "use strict";
        s.d(ye, { Hh: () => A, vs: () => f });
        var n = s(7850),
          b = s(90626),
          m = s(96538),
          a = s(56330),
          t = s.n(a),
          i = s(18210),
          D = s(85599);
        function f(M) {
          const [W, p] = (0, b.useState)(() => !!M),
            [y, x] = (0, b.useState)(!1),
            [U, T] = (0, b.useState)(!1),
            [P, E] = (0, b.useState)(null),
            [$, X] = (0, b.useState)(null),
            [H, F] = (0, b.useState)(null),
            [j, o] = (0, b.useState)(null),
            [d, h] = (0, b.useState)(null);
          return {
            bLoading: W,
            bError: y,
            bSuccess: U,
            strError: P,
            strSuccess: $,
            elSuccess: j,
            elError: H,
            strThrobber: d,
            fnSetLoading: p,
            fnSetError: x,
            fnSetSuccess: T,
            fnSetStrError: E,
            fnSetStrSuccess: X,
            fnSetElSuccess: o,
            fnSetElError: F,
            fnSetThrobber: h,
          };
        }
        function O(M, W) {
          W != k_EResultOK ? M.fnSetError(!0) : M.fnSetSuccess(!0);
        }
        function A(M) {
          const {
              strDialogTitle: W,
              state: p,
              closeModal: y,
              strThrobber: x,
            } = M,
            {
              bLoading: U,
              bError: T,
              bSuccess: P,
              strError: E,
              strSuccess: $,
              elSuccess: X,
              elError: H,
              strThrobber: F,
            } = p;
          return T || E || H
            ? (0, n.jsxs)(m.o0, {
                strTitle: W,
                bAlertDialog: !0,
                closeModal: y,
                className: a.SuccessErrorDialog,
                children: [
                  !!E &&
                    (0, n.jsx)("div", {
                      className: a.ErrorStylesWithIcon,
                      children:
                        E || (0, i.we)("#Error_ErrorCommunicatingWithNetwork"),
                    }),
                  !!H && H,
                ],
              })
            : P || $ || X
              ? (0, n.jsx)(m.o0, {
                  strTitle: W,
                  strDescription: $ || (0, i.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: y,
                  className: a.SuccessErrorDialog,
                  children: (0, n.jsx)(n.Fragment, { children: !!X && X }),
                })
              : (0, n.jsx)(m.o0, {
                  strTitle: W,
                  className: a.SuccessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                  children: (0, n.jsx)(D.t, {
                    string: x || F || (0, i.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                });
        }
      },
      33752: (we, ye, s) => {
        "use strict";
        s.d(ye, { W: () => te });
        var n = s(7850),
          b = s(40358),
          m = s(75844),
          a = s(90626),
          t = s(76559),
          i = s(813),
          D = s(6469),
          f = s(7638),
          O = s(10142),
          A = s(16412),
          M = s(36118),
          W = s(53107),
          p = s(47689),
          y = s(36707),
          x = s(18210),
          U = s(53113),
          T = s(3166),
          P = s(17009),
          E = s.n(P),
          $ = s(80702),
          X = s(95414),
          H = s(73259),
          F = s(37934),
          j = s(81081);
        function o(I) {
          const {
              appId: z,
              clanId: _,
              strCapsuleUrl: me,
              strGroupTitle: G,
              strExtraBannerGroupStyle: B,
              actions: R,
            } = I,
            ue = z !== H.DU,
            be = a.useMemo(() => (z ? { appid: z } : { creatorid: _ }), [z, _]),
            C = (0, n.jsx)("img", { className: E().AppBannerLogo, src: me });
          return (0, T.Qn)()
            ? null
            : (0, n.jsxs)("div", {
                className: E().AppBannerCtn,
                children: [
                  (0, n.jsx)("div", {
                    className: E().AppBannerBackground,
                    style: { backgroundImage: `url(${me})` },
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, y.A)(E().AppBannerGroup, B),
                    children: [
                      ue
                        ? z
                          ? (0, n.jsx)($.Q, {
                              id: be,
                              className: E().AppBannerLogoCtn,
                              hoverProps: {
                                direction: "overlay",
                                style: { minWidth: "320px" },
                              },
                              children: C,
                            })
                          : (0, n.jsx)(X.u, {
                              id: be,
                              hoverClassName: E().AppBannerLogoCtn,
                              children: C,
                            })
                        : (0, n.jsxs)("div", {
                            className: E().AppBannerLogoCtn,
                            children: [C, " "],
                          }),
                      (0, n.jsxs)("div", {
                        className: E().AppBannerTitle,
                        children: [
                          G,
                          (0, n.jsx)("div", {
                            className: E().NewsHubSubTitle,
                            children: (0, x.we)(
                              "#EventDisplay_NewsHubSubtitle",
                            ),
                          }),
                        ],
                      }),
                      ue &&
                        (0, n.jsx)("div", {
                          className: E().AppBannerLinks,
                          children: R,
                        }),
                    ],
                  }),
                ],
              });
        }
        function d(I) {
          const { appid: z, clanAccountID: _ } = I,
            me = React.useMemo(() => (z ? { appid: z } : void 0), [z]),
            { data: G } = useStoreItemDefaultInfo(me),
            { data: B } = useStoreItemAssets(me),
            { data: R } = useClanInfoByAccountID(z ? void 0 : _),
            { bIsOwned: ue } = useIsStoreItemOwned(me),
            be = z
              ? B
                ? StoreAssetURL(B, "header")
                : void 0
              : R?.avatar_full_url,
            C = z ? G?.name : R?.group_name;
          return jsx(o, {
            appId: z ?? 0,
            clanId: _,
            strCapsuleUrl: be,
            strGroupTitle: C,
            strExtraBannerGroupStyle: z ? void 0 : styles.ClanBanner,
            actions: jsxs(Fragment, {
              children: [
                !!(z && !ue) &&
                  jsx("div", {
                    className: styles.HeaderWishlistButton,
                    children: jsx(WishlistButton, {
                      appid: z,
                      bIsFree: !!G?.is_free,
                      bIsComingSoon: !!G?.is_coming_soon,
                      className: classnames(
                        styles.ActionButton,
                        styles.WishlistBtnShort,
                      ),
                    }),
                  }),
                jsx("div", {
                  className: styles.HeaderFollowButton,
                  children: z
                    ? jsx(AppFollowButton, {
                        appid: z,
                        className: styles.HeaderButtonDark,
                      })
                    : jsx(CuratorFollowButton, {
                        clanAccountID: _,
                        className: styles.HeaderButtonDark,
                      }),
                }),
              ],
            }),
          });
        }
        var h = s(56492);
        function u(I, z) {
          const [_, me] = (0, a.useState)({}),
            G = (0, p.m)("useEventHeaderData");
          return (
            (0, a.useEffect)(() => {
              if (I)
                O.A.Get()
                  .QueueAppRequest(I, {
                    include_assets: !0,
                    include_screenshots: !0,
                  })
                  .then(() => {
                    const B = O.A.Get().GetApp(I);
                    B &&
                      !G?.token?.reason &&
                      me({
                        strCapsuleUrl: B.GetAssets().GetHeaderURL(),
                        strGroupTitle: B.GetName(),
                        strStoreURL:
                          (T.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          B.GetStorePageURL(),
                        strCommunityURL:
                          (T.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          B.GetCommunityPageURL(),
                        strForumURL:
                          (T.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          B.GetCommunityDiscussionForumsURL(),
                      });
                  });
              else if (z) {
                const B = t.b.InitFromClanID(z);
                i.ac.LoadClanInfoForClanSteamID(B).then((R) => {
                  G?.token?.reason ||
                    me({
                      strCapsuleUrl: R.avatar_full_url,
                      strGroupTitle: R.group_name,
                      strStoreURL:
                        (T.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        T.TS.STORE_BASE_URL +
                        "curator/" +
                        z +
                        "/",
                      strCommunityURL:
                        (T.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        T.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        B.ConvertTo64BitString(),
                      strExtraBannerGroupStyle: E().ClanBanner,
                    });
                });
              }
            }, [I, G?.token?.reason, z]),
            _
          );
        }
        const g = {};
        function w(I) {
          const { appId: z, clanId: _, bShowRSSFeed: me } = I,
            { strStoreURL: G, strCommunityURL: B, strForumURL: R } = u(z, _),
            ue = (0, T.Y2)(),
            be =
              T.TS.STORE_BASE_URL +
              "feeds/" +
              (0, h.LJ)() +
              (z ? "/app/" + z : "/group/" + _) +
              "/?cc=" +
              T.TS.COUNTRY +
              "&l=" +
              T.TS.LANGUAGE,
            C = f.KN.Get().GetPartnerEventPermissions(t.b.InitFromClanID(_)),
            Q = C && (C.can_edit || C.support_user),
            le = D.Fm.Get().BOwnsApp(z),
            ae = (0, a.useMemo)(() => {
              const ve = [];
              return (
                T.TS.IN_CLIENT &&
                  le &&
                  ve.push({
                    label: (0, x.we)("#EventDisplay_ViewInLibrary_ExtraShort"),
                    data: "steam://nav/games/details/" + z,
                  }),
                ve.push({
                  label: (0, x.we)("#EventDisplay_ViewStorePage_ExtraShort"),
                  data: (0, U.k2)(G),
                }),
                ue ||
                  (ve.push({
                    label: (0, x.we)(
                      "#EventDisplay_ViewCommunityPage_ExtraShort",
                    ),
                    data: (0, U.k2)(B),
                  }),
                  R &&
                    ve.push({
                      label: (0, x.we)("#EventDisplay_ViewForum_ExtraShort"),
                      data: (0, U.k2)(R),
                    }),
                  me &&
                    ve.push({
                      label: (0, n.jsxs)("div", {
                        className: E().RssRow,
                        children: [
                          (0, n.jsx)(M.ZPc, {}),
                          (0, x.we)("#EventDisplay_RSSFeed_ExtraShort"),
                        ],
                      }),
                      data: be,
                    })),
                Q &&
                  ve.push({
                    label: (0, x.we)("#EventDisplay_Admin_ExtraShort"),
                    data: (0, h.Hx)(z, t.b.InitFromClanID(_), "admin"),
                  }),
                ve
              );
            }, [le, G, ue, Q, B, R, me, be, z, _]);
          return (0, n.jsx)(A.m, {
            strDefaultLabel: (0, x.we)(
              "#EventDisplay_LinksDropDown_ExtraShort",
            ),
            strClassName: E().AppBannerLinkDD,
            strDropDownButtonClassName: E().AppBannerLinkDDButton,
            strDropDownMenuCtnClass: E().AppBannerLinkDDContainer,
            contextMenuPositionOptions: { bMatchWidth: !1 },
            arrowClassName: E().DDButtonArrow,
            rgOptions: ae,
            onChange: (ve, Ee, Pe) => (0, W.EP)(Pe, ve.data),
          });
        }
        const te = (0, m.PA)((I) => {
          const { appId: z, clanId: _ } = I,
            {
              strCapsuleUrl: me,
              strGroupTitle: G,
              strExtraBannerGroupStyle: B,
            } = u(z, _),
            R = (0, a.useMemo)(
              () => (z ? { appid: z } : { creatorid: _ }),
              [z, _],
            ),
            { data: ue } = (0, b.J$)(R),
            be = D.Fm.Get().BOwnsApp(z);
          return (0, n.jsx)(o, {
            appId: z,
            clanId: _,
            strCapsuleUrl: me,
            strGroupTitle: G,
            strExtraBannerGroupStyle: B,
            actions: (0, n.jsxs)(n.Fragment, {
              children: [
                !!(!be && z) &&
                  (0, n.jsx)("div", {
                    className: E().HeaderWishlistButton,
                    children: (0, n.jsx)(j._, {
                      appid: z,
                      bIsFree: !!ue?.is_free,
                      bIsComingSoon: !!ue?.is_coming_soon,
                      className: (0, y.A)(
                        E().ActionButton,
                        E().WishlistBtnShort,
                      ),
                    }),
                  }),
                (0, n.jsx)("div", {
                  className: E().HeaderFollowButton,
                  children: z
                    ? (0, n.jsx)(F.do, {
                        appid: z,
                        className: E().HeaderButtonDark,
                      })
                    : (0, n.jsx)(F.of, {
                        clanAccountID: _,
                        className: E().HeaderButtonDark,
                      }),
                }),
                (0, n.jsx)(w, { ...I }),
              ],
            }),
          });
        });
      },
      33732: (we, ye, s) => {
        "use strict";
        s.d(ye, { Xk: () => et, ac: () => oe, hh: () => se });
        var n = s(7850),
          b = s(99412),
          m = s(71742),
          a = s(64868),
          t = s(72609),
          i = s(65946),
          D = s(87937),
          f = s.n(D),
          O = s(90626),
          A = s(70187),
          M = s(91354),
          W = s(3685),
          p = s(53275),
          y = s(35038),
          x = s(68450),
          U = s(76559),
          T = s(49628),
          P = s(14947),
          E = Object.defineProperty,
          $ = Object.getOwnPropertyDescriptor,
          X = (ne, N, Y, r) => {
            for (
              var c = r > 1 ? void 0 : r ? $(N, Y) : N, S = ne.length - 1, Be;
              S >= 0;
              S--
            )
              (Be = ne[S]) && (c = (r ? Be(N, Y, c) : Be(c)) || c);
            return r && c && E(N, Y, c), c;
          };
        const H = 0,
          F = 1,
          j = 2,
          o = 3,
          d = class kt {
            m_isLoading = !1;
            m_existingRegistrations = new Map();
            m_selections = new Map();
            m_transport;
            m_userAccountID;
            m_clanAccountID;
            m_gidClanEvent;
            static s_Singleton;
            static Get() {
              return (
                kt.s_Singleton || (kt.s_Singleton = new kt()), kt.s_Singleton
              );
            }
            constructor() {
              (0, P.Gn)(this);
            }
            Init(N, Y, r, c) {
              (this.m_transport = N),
                (this.m_userAccountID = Y),
                (this.m_clanAccountID = r),
                (this.m_gidClanEvent = c);
            }
            async Load() {
              if (this.m_isLoading || this.m_clanAccountID != (0, T.H)())
                return;
              const N = y.w.Init(x.q3),
                Y = U.b.InitFromAccountID(this.m_userAccountID);
              N.Body().set_clan_event_gid(this.m_gidClanEvent),
                N.Body().set_steamid(Y.ConvertTo64BitString()),
                this.m_existingRegistrations.clear(),
                this.m_selections.clear(),
                (this.m_isLoading = !0);
              const r = await x.ZK.GetRegistrations(this.m_transport, N);
              (this.m_isLoading = !1),
                r.BSuccess() &&
                  (0, P.h5)(() => {
                    r.Body()
                      .registrations()
                      .forEach((c) => {
                        const S = c.toObject(),
                          Be = {
                            ...S,
                            regmodel: S.jsondata
                              ? JSON.parse(S.jsondata)
                              : void 0,
                          };
                        Be.group_id === void 0 ||
                          Be.session_id === void 0 ||
                          (this.m_existingRegistrations.set(Be.group_id, Be),
                          this.m_selections.set(Be.group_id, Be.session_id));
                      });
                  });
            }
            SetSelection(N, Y) {
              N !== void 0 &&
                (Y !== void 0 && Y > 0
                  ? this.m_selections.set(N, Y)
                  : this.m_selections.delete(N));
            }
            BIsLoading() {
              return this.m_isLoading;
            }
            GetSelectedGroups() {
              return Array.from(this.m_selections.keys());
            }
            GetSelection(N) {
              return N === void 0 ? void 0 : this.m_selections.get(N);
            }
            GetRegistrationStatus(N, Y) {
              if (N === void 0 || Y === void 0) return H;
              const r = this.m_existingRegistrations.get(N)?.session_id == Y,
                c = this.m_selections.get(N) == Y;
              return r && c ? F : !r && c ? j : r && !c ? o : H;
            }
            BIsRegisteredForDifferentSessionInGroup(N, Y) {
              if (N === void 0 || Y === void 0) return !1;
              const r = !!this.m_existingRegistrations.get(N),
                c = this.m_selections.get(N) == Y,
                S =
                  this.m_existingRegistrations.get(N)?.session_id ==
                  this.m_selections.get(N);
              return r && !c && S;
            }
            BGetRegistrationSessionID(N) {
              return N === void 0
                ? void 0
                : this.m_existingRegistrations.get(N)?.session_id;
            }
            BHaveSelectionsChanged() {
              return this.m_selections.size == 0 &&
                this.m_existingRegistrations.size == 0
                ? !1
                : this.m_selections.size != this.m_existingRegistrations.size ||
                    !Array.from(this.m_selections.entries()).every(
                      (N) =>
                        this.m_existingRegistrations.get(N[0])?.session_id ==
                        N[1],
                    );
            }
            BIsAddingOrChangingSelections() {
              return Array.from(this.m_selections.entries()).some((N) => {
                const Y = this.m_existingRegistrations.get(N[0]);
                return !Y || Y.session_id != N[1];
              });
            }
            BHasAlreadyRegistered() {
              return this.m_existingRegistrations.size > 0;
            }
            BHasSomeRegistration() {
              return this.m_existingRegistrations.size > 0;
            }
            async Save(N) {
              const Y = [];
              N = Object.fromEntries(
                Object.entries(N).filter(
                  ([c]) => !c.startsWith("registration_emailed_"),
                ),
              );
              for (const [c, S] of this.m_selections) {
                const Be = y.w.Init(x.Ku);
                Be.Body().set_clan_event_gid(this.m_gidClanEvent),
                  Be.Body().set_steamid(
                    U.b
                      .InitFromAccountID(this.m_userAccountID)
                      .ConvertTo64BitString(),
                  ),
                  Be.Body().set_registration_group_id(c),
                  Be.Body().set_registration_session_id(S),
                  Be.Body().set_guest_count(N.guests_registered ?? 1),
                  Be.Body().set_jsondata(JSON.stringify(N)),
                  Y.push(Be);
              }
              for (const c of this.m_existingRegistrations.keys()) {
                if (this.m_selections.has(c)) continue;
                const S = y.w.Init(x.Ku);
                S.Body().set_clan_event_gid(this.m_gidClanEvent),
                  S.Body().set_steamid(
                    U.b
                      .InitFromAccountID(this.m_userAccountID)
                      .ConvertTo64BitString(),
                  ),
                  S.Body().set_registration_group_id(c),
                  S.Body().set_registration_session_id(0),
                  S.Body().set_guest_count(0),
                  S.Body().set_jsondata(JSON.stringify({})),
                  Y.push(S);
              }
              let r = !0;
              for (let c = 0; c < Y.length; c++) {
                const S = Y[c],
                  Be = c == Y.length - 1;
                S.Body().set_skip_email(!Be);
                const Ke = await x.ZK.UpdateRegistration(this.m_transport, S);
                r = r && Ke.BSuccess();
              }
              return await this.Load(), r;
            }
          };
        X([P.sH], d.prototype, "m_isLoading", 2),
          X([P.sH], d.prototype, "m_existingRegistrations", 2),
          X([P.sH], d.prototype, "m_selections", 2),
          X([P.XI.bound], d.prototype, "SetSelection", 1);
        let h = d;
        function u(ne, N, Y, r) {
          O.useEffect(() => {
            (async () => (h.Get().Init(ne, N, Y, r), await h.Get().Load()))();
          }, [ne, N, Y, r]);
        }
        function g() {
          return (0, i.q3)(() => h.Get().BIsLoading());
        }
        function w(ne) {
          return useObserver(() => h.Get().GetSelection(ne));
        }
        function te() {
          return (0, i.q3)(() => h.Get().BHaveSelectionsChanged());
        }
        function I(ne, N) {
          return useObserver(() =>
            ne
              .filter((Y) =>
                Y.sessions.some(
                  (r) => h.Get().GetRegistrationStatus(Y.group_id, r.id) == N,
                ),
              )
              .map((Y) => Y.group_id)
              .filter((Y) => Y !== void 0),
          );
        }
        function z(ne, N) {
          return (0, i.q3)(() =>
            ne
              .filter((Y) =>
                Y.sessions.some(
                  (r) => h.Get().GetRegistrationStatus(Y.group_id, r.id) == N,
                ),
              )
              .filter((Y) => !!Y.ask_registration_question)
              .map((Y) => Y.group_id)
              .filter((Y) => Y !== void 0),
          );
        }
        function _() {
          return (0, i.q3)(() => h.Get().BHasSomeRegistration());
        }
        var me = s(7638),
          G = s(16412),
          B = s(96538),
          R = s(88003),
          ue = s(85599),
          be = s(71421),
          C = s(36707),
          Q = s(18210),
          le = s(92264),
          ae = s(98609),
          ve = s(67705),
          Ee = s(36631),
          Pe = s(47875),
          Te = s(34542),
          pe = s.n(Te),
          ee = s(41635);
        function ie(ne) {
          const {
              eventModel: N,
              fnConfirm: Y,
              fnHideModal: r,
              nMaxPerTeam: c,
              bAddingOrChangingSessions: S,
              transport: Be,
            } = ne,
            Ke = (0, b.sfN)(ae.TS.LANGUAGE),
            [Je, at] = O.useState({}),
            [vt, Xe] = O.useState(!1),
            bt = O.useCallback(
              (Mt) => {
                at({ ...Je, ...Mt });
              },
              [Je],
            ),
            it = (0, p.mG)(
              Be,
              N.clanSteamID.GetAccountID(),
              N.GID ?? "",
              t.iA.accountid,
            ),
            {
              sUserAccountEmail: Ue,
              sUserAccountRealName: nt,
              rgPartners: De,
            } = O.useMemo(
              () => ({
                sUserAccountRealName: (0, ve.Tc)(
                  "realname",
                  "application_config",
                ),
                sUserAccountEmail: (0, ve.Tc)("email", "application_config"),
                rgPartners: (0, ve.Tc)("partners", "application_config") ?? [],
              }),
              [],
            ),
            [ht, ut] = O.useState(void 0),
            [ot, dt] = O.useState(void 0),
            wt = O.useMemo(() => {
              const Mt = [];
              return (
                ot == null &&
                  Mt.push({
                    data: void 0,
                    label: (0, Q.we)("#MeetSteam_ChoosePartner"),
                  }),
                Mt.push(
                  ...De.map((Oe, e) => ({
                    data: Oe.partnerid,
                    label: Oe.partner_name,
                  })),
                ),
                Mt.push({
                  data: 0,
                  label: (0, Q.we)("#MeetSteam_ChoosePartnerOther"),
                }),
                Mt
              );
            }, [De, ot]);
          O.useEffect(() => {
            if (!it.isSuccess) return;
            const Mt = De.find((e) => e.partnerid == it.data.partner_id),
              Oe = it.data.partner_id === 0 ? 0 : Mt?.partnerid;
            dt(Oe), ut(Oe), at(it.data);
          }, [it.isSuccess, it.data, De]);
          const gt = De?.length > 0,
            jt = !gt || ot != null,
            Et = jt && ot === 0;
          O.useEffect(() => {
            if (ot == ht || (ut(ot), !gt || !jt)) return;
            let Mt;
            const Oe = De.find((e) => e.partnerid == ot);
            Et || !Oe
              ? (Mt = {
                  name: Ue?.length > 0 ? nt : void 0,
                  email_override: Ue?.length > 0 ? Ue : void 0,
                  partner_id: 0,
                })
              : (Mt = {
                  name:
                    Oe.partneruserrealname?.length > 0
                      ? Oe.partneruserrealname
                      : void 0,
                  company:
                    Oe.partner_name?.length > 0 ? Oe.partner_name : void 0,
                  email_override:
                    Oe.partneruseremail?.length > 0
                      ? Oe.partneruseremail
                      : void 0,
                  partner_id: Oe.partnerid,
                }),
              Object.values(Mt).some((e) => e != null) && bt(v(Mt));
          }, [jt, Et, gt, ot, ht, De, Ue, nt, bt]);
          const zt = it.isLoading || vt,
            xt = S
              ? (0, Q.we)(
                  "#MeetSteam_Register_title",
                  N.GetNameWithFallback(Ke) ?? "",
                )
              : (0, Q.we)("#MeetSteam_Unregister_title"),
            At =
              !S ||
              (jt &&
                !!Je.name &&
                (!Je.guest_names ||
                  Je.guest_names.every((Mt) => Mt.length > 0)) &&
                !!Je.email_override &&
                !!Je.company);
          return (0, n.jsxs)(B.EN, {
            active: !0,
            children: [
              zt &&
                (0, n.jsx)(B.eV, {
                  "aria-label": vt
                    ? (0, Q.we)("#Saving")
                    : (0, Q.we)("#Loading"),
                  bOKDisabled: !0,
                  bHideCloseIcon: !0,
                  onCancel: () => !1,
                  children: (0, n.jsx)(ue.t, {
                    size: "medium",
                    position: "center",
                    string: vt ? (0, Q.we)("#Saving") : (0, Q.we)("#Loading"),
                  }),
                }),
              !zt &&
                (0, n.jsx)(B.o0, {
                  strTitle: xt,
                  onCancel: r,
                  bOKDisabled: !At,
                  onOK: async () => {
                    Xe(!0), await Y(Je), Xe(!1), it.refetch(), r();
                  },
                  children:
                    S &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          children: (0, Q.we)("#MeetSteam_Reg_Intro"),
                        }),
                        (0, n.jsx)("br", {}),
                        gt &&
                          (0, n.jsx)(G.m, {
                            label: (0, Q.we)("#MeetSteam_Reg_Preset"),
                            tooltip: (0, Q.we)("#MeetSteam_Reg_Preset_ttip"),
                            rgOptions: wt,
                            selectedOption: ot,
                            onChange: (Mt) => dt(Mt.data),
                          }),
                        jt &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(G.pd, {
                                type: "text",
                                label: (0, Q.we)("#MeetSteam_Reg_Name"),
                                value: Je.name || "",
                                onChange: (Mt) =>
                                  bt({ name: Mt.currentTarget.value }),
                              }),
                              (0, n.jsx)(G.pd, {
                                type: "text",
                                label: (0, Q.we)("#MeetSteam_Reg_Email"),
                                value: Je.email_override || "",
                                mustBeEmail: !0,
                                onChange: (Mt) =>
                                  bt({
                                    email_override: Mt.currentTarget.value,
                                  }),
                              }),
                              (0, n.jsx)(G.pd, {
                                type: "text",
                                label: (0, Q.we)("#MeetSteam_Reg_Company"),
                                value: Je.company || "",
                                onChange: (Mt) =>
                                  bt({ company: Mt.currentTarget.value }),
                              }),
                              (0, n.jsx)(G.pd, {
                                type: "text",
                                label: (0, Q.we)("#MeetSteam_Reg_Game"),
                                value: Je.game || "",
                                onChange: (Mt) =>
                                  bt({ game: Mt.currentTarget.value }),
                              }),
                              c > 0 &&
                                (0, n.jsx)(G.m, {
                                  label: (0, Q.we)("#MeetSteam_Reg_GuestCount"),
                                  tooltip: (0, Q.we)(
                                    "#MeetSteam_Reg_GuestCount_ttip",
                                  ),
                                  rgOptions: Array.from({ length: c + 1 }).map(
                                    (Mt, Oe) => ({ data: Oe, label: Oe }),
                                  ),
                                  selectedOption:
                                    (Je.guests_registered ?? 1) - 1,
                                  onChange: (Mt) => {
                                    const Oe = Je.guest_names ?? [];
                                    bt({
                                      guests_registered: Mt.data + 1,
                                      guest_names:
                                        Oe.length > Mt.data
                                          ? Oe.slice(0, Mt.data)
                                          : ee.$Y(Oe, Mt.data, ""),
                                    });
                                  },
                                }),
                              (Je.guests_registered ?? 0) > 1 &&
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("div", {
                                      children: (0, Q.we)(
                                        "#MeetSteam_Reg_Others",
                                      ),
                                    }),
                                    (0, n.jsx)("br", {}),
                                    (Je.guest_names ?? []).map((Mt, Oe) =>
                                      (0, n.jsx)(
                                        G.pd,
                                        {
                                          type: "text",
                                          label: (0, Q.we)(
                                            "#MeetSteam_Reg_Others_name",
                                          ),
                                          value: Mt,
                                          onChange: (e) => {
                                            const l = [
                                              ...(Je.guest_names ?? []),
                                            ];
                                            (l[Oe] = e.currentTarget.value),
                                              bt({ guest_names: l });
                                          },
                                        },
                                        "guesname_" + Oe,
                                      ),
                                    ),
                                  ],
                                }),
                              (0, n.jsx)(k, {
                                eventModel: N,
                                oReg: Je,
                                fnUpdateRegistration: bt,
                              }),
                            ],
                          }),
                      ],
                    }),
                }),
            ],
          });
        }
        function v(ne) {
          return Object.fromEntries(
            Object.entries(ne).filter(([N, Y]) => Y !== void 0),
          );
        }
        function k(ne) {
          const { eventModel: N, oReg: Y, fnUpdateRegistration: r } = ne,
            c = z(N.jsondata.meet_steam_groups ?? [], j);
          return !c || c.length == 0
            ? null
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h3", {
                    children: (0, Q.we)("#MeetSteam_Reg_Question_title"),
                  }),
                  (0, n.jsx)("p", {
                    children: (0, Q.we)("#MeetSteam_Reg_Question_desc"),
                  }),
                  c.map((S) => {
                    const Be = N.jsondata.meet_steam_groups?.find(
                      (Ke) => Ke.group_id == S,
                    );
                    return Be
                      ? (0, n.jsx)(
                          q,
                          {
                            groupInfo: Be,
                            oReg: Y,
                            fnUpdateText: (Ke) => {
                              let Je = Y.pre_event_partner_questions
                                  ? [...Y.pre_event_partner_questions]
                                  : [],
                                at = Je.findIndex((vt) => vt.group_id == S);
                              at < 0
                                ? Je.push({ group_id: S, question: Ke })
                                : (Je[at] = { group_id: S, question: Ke }),
                                r({ pre_event_partner_questions: Je });
                            },
                          },
                          "groupquestion" + S,
                        )
                      : null;
                  }),
                ],
              });
        }
        function q(ne) {
          const { fnUpdateText: N, groupInfo: Y, oReg: r } = ne,
            c = (0, b.sfN)(ae.TS.LANGUAGE),
            [S, Be] = (0, i.q3)(() => [
              Y.localized_session_title?.[c] ||
                Y.localized_session_title?.[b.Bhc] ||
                "",
              r.pre_event_partner_questions?.find(
                (Ke) => Ke.group_id == Y.group_id,
              )?.question || "",
            ]);
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(G.JU, { children: S }),
              (0, n.jsx)("div", {
                className: "DialogInput_Wrapper",
                children: (0, n.jsx)("textarea", {
                  value: Be,
                  className: (0, C.A)(
                    "DialogTextInputBase",
                    "_DialogInputContainer",
                  ),
                  cols: 80,
                  rows: 3,
                  placeholder: (0, Q.we)("#MeetSteam_Reg_Question_placeholder"),
                  onChange: (Ke) => N(Ke.currentTarget.value),
                }),
              }),
            ],
          });
        }
        var V = s(82206),
          ce = s(80902),
          Me = s(41735),
          de = s.n(Me),
          xe = s(84346);
        const se = "America/Los_Angeles";
        function oe(ne) {
          const N = ne.context.event,
            Y = ne.context.showErrorInfo,
            r = (0, A.j$)(ne.args, "group_id"),
            c = Number.parseInt(r),
            S = (0, i.q3)(() => qe(N, c));
          return !S || !N
            ? Y
              ? (0, n.jsxs)("div", {
                  children: ["Failed to find session group id ", c],
                })
              : null
            : N.clanSteamID.GetAccountID() != (0, T.H)()
              ? Y
                ? (0, n.jsx)("div", {
                    children: "Only support on special group",
                  })
                : null
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(ze, { eventModel: N }),
                    (0, n.jsx)(Ie, { groupData: S, eventModel: N }),
                    (0, n.jsx)(Ye, { eventModel: N }),
                  ],
                });
        }
        function ze(ne) {
          const { eventModel: N } = ne;
          return _()
            ? (0, n.jsx)(We, { eventModel: N, accountID: t.iA.accountid })
            : null;
        }
        function We(ne) {
          const { eventModel: N, accountID: Y } = ne,
            r = Se(N.GID ?? "", Y),
            c = "qr-code-display-marker",
            { refIsFirst: S, bIsFirst: Be } = st(c);
          return (0, n.jsx)("div", {
            ref: S,
            className: (0, C.A)(c),
            children:
              !!(r && Be) &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    children: (0, Q.we)("#MeetSteam_QR_CheckIn"),
                  }),
                  (0, n.jsx)("img", { src: r }),
                ],
              }),
          });
        }
        function Se(ne, N) {
          return (0, ce.I)({
            queryKey: ["useMeetSteamQRCode", ne, N],
            queryFn: async () => {
              const r = ae.TS.STORE_BASE_URL + "meetsteam/attendance_qrcode",
                c = { gid: ne, accountid: N };
              return (await de().get(r, { params: c, withCredentials: !0 }))
                .data;
            },
          }).data?.qrcode;
        }
        function Ae() {
          const ne = (0, ve.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          return (
            (0, m.wT)(
              !!ne || !t.iA.accountid,
              "require promotion_operation_token",
            ),
            O.useMemo(
              () => new W.D(ae.TS.WEBAPI_BASE_URL, ne).GetServiceTransport(),
              [ne],
            )
          );
        }
        function he() {
          const [ne] = (0, O.useState)(() =>
            Number.parseInt(
              (0, ve.Tc)("meet_steam_visibility_id", "application_config"),
            ),
          );
          return ne;
        }
        function Ie(ne) {
          const { groupData: N, eventModel: Y } = ne,
            r = Ae(),
            c = (0, Ee.MU)(),
            S = he(),
            Be = g(),
            Ke = (0, p.my)(r, Y.clanSteamID.GetAccountID(), Y.GID ?? ""),
            Je = (0, O.useMemo)(
              () =>
                N?.sessions?.sort(
                  (De, ht) => (De.rtime_start ?? 0) - (ht.rtime_start ?? 0),
                ),
              [N?.sessions],
            ),
            at = rt(),
            vt = (0, i.q3)(() =>
              Je?.reduce(
                (De, ht) =>
                  De.set(
                    ht.id ?? 0,
                    h.Get().GetRegistrationStatus(N.group_id, ht.id),
                  ),
                new Map(),
              ),
            ),
            Xe = (0, p.mG)(
              r,
              Y.clanSteamID.GetAccountID(),
              Y.GID ?? "",
              t.iA.accountid,
            ),
            bt = Xe.isSuccess && !!Xe.data.allow_registration_if_full;
          if (!Ke.isSuccess)
            return (0, n.jsx)("div", {
              children: (0, Q.we)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (Be && t.iA.accountid)
            return (0, n.jsx)(ue.t, {
              size: "medium",
              position: "center",
              string: (0, Q.we)("#Loading"),
            });
          const it = (De) => {
              const ht = h.Get().GetSelection(N.group_id) == De;
              h.Get().SetSelection(N.group_id, ht ? void 0 : De);
            },
            Ue = N.group_visibility_tokens ?? [],
            nt = S !== null && Ue.includes(S);
          return Ue.length > 0 && !nt && !c
            ? null
            : (0, n.jsx)(Fe, {
                groupData: N,
                children: Je?.map((De, ht) => {
                  const ut = Ke.data.find(
                      (wt) =>
                        wt.group_id === N.group_id && wt.session_id === De.id,
                    ),
                    ot = vt?.get(De.id ?? 0),
                    dt = ht + 1 < Je.length;
                  return (0, n.jsxs)(
                    O.Fragment,
                    {
                      children: [
                        (0, n.jsx)("div", {
                          className: pe().SessionColumnCtn,
                          children: (0, n.jsx)($e, {
                            sessionData: De,
                            onClick: () => at(() => it(De.id)),
                            nGuestReservations: ut?.guest_count || 0,
                            eRegistrationStatus: ot,
                            bAllowedToRegisterIfFull: bt,
                          }),
                        }),
                        dt && (0, n.jsx)(mt, {}),
                      ],
                    },
                    "timecol_" + N.group_id + "_" + De.id,
                  );
                }),
              });
        }
        function Fe(ne) {
          const { groupData: N, children: Y } = ne,
            r = (0, b.sfN)(ae.TS.LANGUAGE),
            c = Q.NT.GetWithFallback(N?.localized_session_title, r),
            S = Q.NT.GetWithFallback(N?.localized_session_description, r),
            Be = Q.NT.GetWithFallback(N?.localized_intended_audience, r),
            Ke = Q.NT.GetWithFallback(N?.localized_sesssion_faq, r),
            Je = (0, Ee.MU)(),
            [at, vt] = (0, O.useState)(!1);
          return N
            ? (0, n.jsxs)("div", {
                className: (0, C.A)({
                  [pe().Ctn]: !0,
                  [pe().CtnRegistered]: !1,
                  [pe().VisibilityOverride]:
                    Je && (N.group_visibility_tokens?.length ?? 0) > 0,
                }),
                children: [
                  !!c &&
                    (0, n.jsx)("div", {
                      className: pe().SessionTitle,
                      children: c,
                    }),
                  !!S &&
                    (0, n.jsx)("div", {
                      className: pe().SessionDesc,
                      children: S,
                    }),
                  !!Be &&
                    (0, n.jsx)("div", {
                      className: pe().SessionAudience,
                      children: (0, Q.we)(
                        "#MeetSteam_Session_Audience",
                        Be ?? "",
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className: pe().SessionOptions,
                    children: Y,
                  }),
                  !!Ke &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("div", {
                          className: pe().ExpanderRow,
                          children: [
                            (0, n.jsx)(M.c, { bExpanded: at, setExpanded: vt }),
                            (0, n.jsx)("div", {
                              children: (0, Q.we)("#MeetSteam_FAQ"),
                            }),
                          ],
                        }),
                        at &&
                          (0, n.jsx)("div", {
                            className: pe().FAQDisplay,
                            children: (0, n.jsx)(V.fh, { text: Ke ?? "" }),
                          }),
                      ],
                    }),
                ],
              })
            : null;
        }
        function Le(ne, N, Y, r) {
          const c =
            Y || (ne === H && N > 0) || ne === F || ne === j || ne === o;
          let S = null,
            Be = null;
          return (
            ne == F
              ? ((S = (0, Q.we)("#MeetSteam_Registered")),
                (Be = pe().Registered))
              : ne == j
                ? ((S = (0, Q.we)("#MeetSteam_Registering")),
                  (Be = pe().Registering))
                : ne == o
                  ? ((S = (0, Q.we)("#MeetSteam_Unegistering")),
                    (Be = pe().Unregistering))
                  : r &&
                    ((S = (0, Q.we)("#MeetSteam_Already")),
                    (Be = pe().RegisteredElsewhere)),
            { bEnabled: c, strStatusClass: Be, strStatusToken: S }
          );
        }
        function $e(ne) {
          const {
              sessionData: N,
              onClick: Y,
              nGuestReservations: r,
              eRegistrationStatus: c = H,
              bAllowedToRegisterIfFull: S,
            } = ne,
            Be = (0, i.q3)(() => N.max_capacity ?? 0),
            Ke = Math.max(0, Be - (r || 0)),
            {
              strStatusClass: Je,
              strStatusToken: at,
              bEnabled: vt,
            } = Le(c, Ke, !!S),
            {
              sDisplayTimeZone: Xe,
              rtime_start: bt,
              rtime_end: it,
            } = (0, p._t)(N),
            Ue = (0, p.rF)(bt ?? 0, Xe),
            nt = (0, p.Mr)(bt ?? 0, it ?? 0, Xe);
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("div", {
              className: (0, C.A)(pe().SessionInstance, Je),
              children: [
                (0, n.jsx)("div", {
                  className: pe().StatusText,
                  children: (0, n.jsx)("span", { children: at }),
                }),
                (0, n.jsxs)("button", {
                  className: (0, C.A)(pe().Button, pe().Background),
                  disabled: !vt,
                  onClick: Y,
                  children: [
                    (0, n.jsx)("div", { className: pe().Title, children: Ue }),
                    (0, n.jsx)("div", {
                      className: pe().TimeFrame,
                      children: nt,
                    }),
                  ],
                }),
                (0, n.jsx)(Qe, {
                  nAvailableSpace: Ke,
                  bAllowedToRegisterIfFull: S,
                }),
              ],
            }),
          });
        }
        function Qe(ne) {
          const { nAvailableSpace: N, bAllowedToRegisterIfFull: Y } = ne;
          return (0, n.jsx)(n.Fragment, {
            children:
              Y ||
              (0, n.jsxs)(n.Fragment, {
                children: [
                  " ",
                  N < 1
                    ? (0, n.jsx)("div", {
                        className: pe().SoldOut,
                        children: (0, Q.we)("#MeetSteam_SoldOut"),
                      })
                    : (0, n.jsx)("div", {
                        className: pe().MaxSize,
                        children: (0, Q.Yp)(
                          "#MeetSteam_Spot",
                          N.toLocaleString((0, xe.J)()),
                        ),
                      }),
                  " ",
                ],
              }),
          });
        }
        function mt() {
          return (0, n.jsx)("div", {
            className: pe().InstanceDivider,
            children: "\u25C6",
          });
        }
        function Ye(ne) {
          const { eventModel: N } = ne,
            Y = "complete-registration-marker",
            { refIsLast: r, bIsLast: c } = _e(Y),
            S = Ae(),
            [Be, Ke] = O.useState(!1),
            [Je, at] = O.useState(!1);
          u(S, t.iA.accountid, N.clanSteamID.GetAccountID(), N.GID ?? "");
          const vt = (0, p.my)(S, N.clanSteamID.GetAccountID(), N.GID ?? ""),
            [Xe, bt, it] = (0, a.uD)(),
            Ue = rt(),
            nt = async (gt) => {
              Ke(!0), (await h.Get().Save(gt)) || bt(), vt.refetch(), Ke(!1);
            },
            De = g(),
            ht = Be || De,
            ut = te(),
            ot = (0, i.q3)(() => h.Get().BIsAddingOrChangingSelections()),
            dt = (0, i.q3)(() => h.Get().BHasAlreadyRegistered()),
            wt = (0, i.q3)(() =>
              h
                .Get()
                .GetSelectedGroups()
                .reduce((gt, jt) => {
                  const Et = qe(N, jt),
                    zt = h.Get().GetSelection(Et?.group_id),
                    xt =
                      Et?.sessions?.find((At) => At.id == zt)?.max_per_team ??
                      0;
                  return Math.max(gt, xt);
                }, 1),
            );
          return (
            ct(ut),
            (0, n.jsxs)("div", {
              ref: r,
              className: (0, C.A)(
                Y,
                pe().CompleteRegistrationCtn,
                c && ut && pe().Visible,
              ),
              children: [
                (0, n.jsx)("p", {
                  children: dt
                    ? (0, Q.we)("#MeetSteam_UpdateRegistration_Desc")
                    : (0, Q.we)("#MeetSteam_CompleteRegistration_Desc"),
                }),
                c &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      !ht &&
                        (0, n.jsx)(G.jn, {
                          disabled: !ut,
                          onClick: () => Ue(() => at(!0)),
                          children: dt
                            ? (0, Q.we)("#MeetSteam_UpdateRegistration")
                            : (0, Q.we)("#MeetSteam_CompleteRegistration"),
                        }),
                      ht &&
                        (0, n.jsx)(ue.t, {
                          size: "small",
                          position: "center",
                          string: (0, Q.we)("#Saving"),
                        }),
                      Je &&
                        (0, n.jsx)(ie, {
                          eventModel: N,
                          fnConfirm: nt,
                          fnHideModal: () => at(!1),
                          nMaxPerTeam: wt,
                          bAddingOrChangingSessions: ot,
                          transport: S,
                        }),
                      Xe &&
                        (0, n.jsx)(B.EN, {
                          active: !0,
                          children: (0, n.jsx)(B.Ee, {
                            strTitle: (0, Q.we)("#Error_Generic"),
                            strDescription: (0, Q.we)(
                              "#MeetSteam_RegistrationFailed",
                            ),
                            closeModal: it,
                          }),
                        }),
                    ],
                  }),
              ],
            })
          );
        }
        function _e(ne) {
          const [N, Y] = O.useState(!1),
            r = O.useRef(null);
          return (
            O.useEffect(() => {
              const c = document.querySelectorAll("." + ne);
              r.current && c.length > 0 && Y(c[c.length - 1] === r.current);
            }, [ne]),
            { refIsLast: r, bIsLast: N }
          );
        }
        function st(ne) {
          const [N, Y] = O.useState(!1),
            r = O.useRef(null);
          return (
            O.useEffect(() => {
              const c = document.querySelectorAll("." + ne);
              r.current && c.length > 0 && Y(c[0] === r.current);
            }, [ne]),
            { refIsFirst: r, bIsFirst: N }
          );
        }
        function qe(ne, N) {
          return (ne?.jsondata?.meet_steam_groups || [])?.find(
            (r) => r.group_id == N,
          );
        }
        function Ce(ne, N) {
          return (ne?.jsondata?.meet_steam_schedules || [])?.find(
            (r) => r.schedule_id == N,
          );
        }
        function rt() {
          return me.KN.Get().BIsUserLoggedIn()
            ? (ne) => ne()
            : () =>
                (0, R.pg)(
                  (0, n.jsx)(B.o0, {
                    strTitle: (0, Q.we)("#EventDisplay_Share_NotLoggedIn"),
                    strDescription: (0, Q.we)(
                      "#EventDisplay_Share_NotLoggedIn_Description",
                    ),
                    strOKButtonText: (0, Q.we)("#MobileLogin_SignIn"),
                    onOK: () => (0, Pe.l)(),
                  }),
                  window,
                );
        }
        function ct(ne) {
          O.useEffect(() => {
            if (ne)
              return (
                (window.onbeforeunload = () =>
                  (0, Q.we)("#EventEditor_UnsavedChanges")),
                () => {
                  window.onbeforeunload = () => {};
                }
              );
          }, [ne]);
        }
        function et(ne) {
          const N = ne.context.event,
            Y = ne.context.showErrorInfo,
            r = (0, A.j$)(ne.args, "schedule_id"),
            c = Number.parseInt(r),
            S = (0, i.q3)(() => Ce(N, c));
          return !S || !N
            ? Y
              ? (0, n.jsxs)("div", {
                  children: ["Failed to find session schedule id ", c],
                })
              : null
            : N.clanSteamID.GetAccountID() != (0, T.H)()
              ? Y
                ? (0, n.jsx)("div", {
                    children: "Only support on special group",
                  })
                : null
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(ft, { scheduleData: S, eventModel: N }),
                    (0, n.jsx)(Ye, { eventModel: N }),
                  ],
                });
        }
        function ft(ne) {
          const { eventModel: N } = ne,
            Y = Ae(),
            r = g(),
            c = (0, p.my)(Y, N.clanSteamID.GetAccountID(), N.GID ?? ""),
            S = (0, p.mG)(
              Y,
              N.clanSteamID.GetAccountID(),
              N.GID ?? "",
              t.iA.accountid,
            );
          if (!c.isSuccess)
            return (0, n.jsx)("div", {
              children: (0, Q.we)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (r && t.iA.accountid)
            return (0, n.jsx)(ue.t, {
              size: "medium",
              position: "center",
              string: (0, Q.we)("#Loading"),
            });
          const Be = (Ke, Je) => {
            const at = h.Get().GetSelection(Ke) == Je;
            h.Get().SetSelection(Ke, at ? void 0 : Je);
          };
          return (0, n.jsx)(Ze, {
            ...ne,
            fnOnClick: Be,
            rgAvailability: c?.data,
            bAllowedToRegisterIfFull: S?.data?.allow_registration_if_full,
          });
        }
        function Ze(ne) {
          const {
              eventModel: N,
              scheduleData: Y,
              bAllowedToRegisterIfFull: r,
              fnOnClick: c,
              rgAvailability: S,
            } = ne,
            Be = (0, Ee.HN)(),
            Ke = he(),
            [Je, at, vt] = (0, i.q3)(() => [
              N.jsondata.meet_steam_groups,
              Y.in_person_time_zone ?? se,
              Y.location_type,
            ]),
            [Xe, bt, it] = (0, O.useMemo)(() => {
              if (!Je) return [new Map(), new Map(), new Array()];
              const Ue = new Map(),
                nt = new Map();
              for (const De of Je) {
                const ht = De.group_visibility_tokens ?? [],
                  ut = Ke !== null && ht.includes(Ke);
                if (!(ht.length > 0 && !ut && !Be))
                  for (const ot of De.sessions) {
                    const wt = (
                      vt == "in_person"
                        ? f()
                            .unix(ot.rtime_start ?? 0)
                            .tz(at)
                        : f().unix(ot.rtime_start ?? 0)
                    ).format("YYYY-MM-DD");
                    let gt = Ue.get(wt);
                    gt || ((gt = []), Ue.set(wt, gt)),
                      gt.push({ group: De, session: ot });
                  }
              }
              for (const De of Y.session_breaks || []) {
                const ut = (
                  vt == "in_person"
                    ? f()
                        .unix(De.rtime_start ?? 0)
                        .tz(at)
                    : f().unix(De.rtime_start ?? 0)
                ).format("YYYY-MM-DD");
                let ot = nt.get(ut);
                ot || ((ot = []), nt.set(ut, ot)), ot.push(De);
              }
              for (const De of Ue.values())
                De.sort(
                  (ht, ut) =>
                    (ht.session.rtime_start ?? 0) -
                    (ut.session.rtime_start ?? 0),
                );
              return [Ue, nt, Array.from(Ue.keys()).sort()];
            }, [Je, Ke, Be, vt, at, Y.session_breaks]);
          return Je
            ? (0, n.jsx)(n.Fragment, {
                children: it.map((Ue) => {
                  const nt = Xe.get(Ue);
                  return (0, n.jsx)(
                    "div",
                    {
                      className: pe().SingleDayCtn,
                      children: (0, n.jsx)(lt, {
                        scheduleData: Y,
                        bAllowedToRegisterIfFull: !!r,
                        fnOnClick: c,
                        rgDayGroupSessions: nt ?? [],
                        rgBreakSessions: bt.get(Ue) || [],
                        rgAvailability: S ?? [],
                      }),
                    },
                    "day_" + Ue,
                  );
                }),
              })
            : (0, n.jsx)("div", {
                children: "No Meet Steam Events; please create some first.",
              });
        }
        function lt(ne) {
          const {
              scheduleData: N,
              rgDayGroupSessions: Y,
              rgBreakSessions: r,
              bAllowedToRegisterIfFull: c,
              fnOnClick: S,
              rgAvailability: Be,
            } = ne,
            Ke = (0, O.useMemo)(() => {
              const Xe = [];
              for (const bt of Y)
                Xe.length == 0 ||
                Xe[Xe.length - 1][0].session.rtime_start !=
                  bt.session.rtime_start
                  ? Xe.push([bt])
                  : Xe[Xe.length - 1].push(bt);
              return Xe;
            }, [Y]),
            { sDisplayTimeZone: Je, rtime_start: at } = (0, p._t)(Y[0].session),
            vt = (0, p.rF)(at ?? 0, Je);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("h2", {
                className: pe().ScheduleTopDate,
                children: vt,
              }),
              r
                .filter(
                  (Xe) =>
                    (Xe.rtime_end ?? 0) <= (Ke[0][0].session.rtime_start ?? 0),
                )
                .map((Xe) =>
                  (0, n.jsx)(
                    tt,
                    { scheduleData: N, breakSession: Xe },
                    `breaks_${N.schedule_id}_${Xe.break_id}`,
                  ),
                ),
              Ke.map((Xe, bt) => {
                let it = [];
                if (bt + 1 < Ke.length) {
                  const Ue = Xe[0].session.rtime_start ?? 0,
                    nt = Ke[bt + 1][0].session.rtime_end ?? 0;
                  it = r.filter(
                    (De) =>
                      Ue < (De.rtime_start ?? 0) && (De.rtime_end ?? 0) < nt,
                  );
                }
                return (0, n.jsxs)(
                  O.Fragment,
                  {
                    children: [
                      (0, n.jsx)(yt, {
                        bAllowedToRegisterIfFull: c,
                        fnOnClick: S,
                        scheduleData: N,
                        rgSlotSessions: Xe,
                        rgAvailability: Be,
                      }),
                      it.map((Ue) =>
                        (0, n.jsx)(
                          tt,
                          { scheduleData: N, breakSession: Ue },
                          `breaks_${N.schedule_id}_${Ue.break_id}`,
                        ),
                      ),
                    ],
                  },
                  "start_" + Xe[0].session.rtime_start,
                );
              }),
              r
                .filter(
                  (Xe) =>
                    (Xe.rtime_start ?? 0) >=
                    (Ke[Ke.length - 1][0].session.rtime_end ?? 0),
                )
                .map((Xe) =>
                  (0, n.jsx)(
                    tt,
                    { scheduleData: N, breakSession: Xe },
                    `breaks_${N.schedule_id}_${Xe.break_id}`,
                  ),
                ),
            ],
          });
        }
        function tt(ne) {
          const { scheduleData: N, breakSession: Y } = ne,
            r = (0, b.sfN)(ae.TS.LANGUAGE),
            c = (0, i.q3)(
              () =>
                Y.localized_break_description?.[r] ||
                Y.localized_break_description?.[b.Bhc] ||
                "",
            ),
            S = (0, i.q3)(() => ({
              rtime_start: Y.rtime_start,
              rtime_end: Y.rtime_end,
              location_type: N.location_type,
              in_person_time_zone: N.in_person_time_zone,
            }));
          return (0, n.jsxs)("div", {
            className: pe().ScheduleRow,
            children: [
              (0, n.jsx)(He, { session: S }),
              (0, n.jsx)("div", { children: c }),
            ],
          });
        }
        function yt(ne) {
          const {
            scheduleData: N,
            rgSlotSessions: Y,
            bAllowedToRegisterIfFull: r,
            fnOnClick: c,
            rgAvailability: S,
          } = ne;
          return (0, n.jsxs)("div", {
            className: pe().ScheduleRow,
            children: [
              (0, n.jsx)(He, { session: Y[0].session }),
              (0, n.jsx)("div", {
                className: pe().ScheduleSessionsColumn,
                children: Y.map((Be) =>
                  (0, n.jsx)(
                    Ge,
                    {
                      bAllowedToRegisterIfFull: r,
                      fnOnClick: c,
                      session: Be,
                      rgAvailability: S,
                    },
                    `entry_${Be.group.group_id}_${Be.session.id}`,
                  ),
                ),
              }),
            ],
          });
        }
        function He(ne) {
          const { session: N } = ne,
            {
              sDisplayTimeZone: Y,
              rtime_start: r,
              rtime_end: c,
            } = (0, p._t)(N),
            S = (0, p.rF)(r ?? 0, Y),
            Be = (0, p.Mr)(r ?? 0, c ?? 0, Y);
          return (0, n.jsxs)("div", {
            className: pe().ScheduleTimeColumn,
            children: [
              (0, n.jsx)("div", { children: Be }),
              (0, n.jsx)("div", { className: pe().Timezone, children: S }),
            ],
          });
        }
        function Ge(ne) {
          const {
              session: N,
              bAllowedToRegisterIfFull: Y,
              fnOnClick: r,
              rgAvailability: c,
            } = ne,
            S = (0, b.sfN)(ae.TS.LANGUAGE),
            [Be, Ke, Je, at] = (0, i.q3)(() => [
              N.group.localized_session_title?.[S] ||
                N.group.localized_session_description?.[b.Bhc] ||
                "",
              N.group.localized_intended_audience?.[S] ||
                N.group.localized_intended_audience?.[b.Bhc] ||
                "",
              N.group.localized_sesssion_faq?.[S] ||
                N.group.localized_intended_audience?.[b.Bhc] ||
                "",
              N.group.localized_session_description?.[S] ||
                N.group.localized_intended_audience?.[b.Bhc] ||
                "",
            ]),
            [vt, Xe, bt] = (0, a.uD)(!1),
            [it, Ue, nt] = (0, i.q3)(() => [
              h.Get().GetRegistrationStatus(N.group.group_id, N.session.id),
              h
                .Get()
                .BIsRegisteredForDifferentSessionInGroup(
                  N.group.group_id,
                  N.session.id,
                ),
              h.Get().BGetRegistrationSessionID(N.group.group_id),
            ]),
            De = c?.find(
              (gt) =>
                gt.group_id === N.group.group_id &&
                gt.session_id === N.session.id,
            )?.guest_count,
            ht = Math.max(0, (N.session.max_capacity ?? 0) - (De || 0)),
            {
              strStatusClass: ut,
              strStatusToken: ot,
              bEnabled: dt,
            } = Le(it, ht, Y, Ue),
            wt =
              Ue && nt
                ? N.group.sessions.find((gt) => gt.id == nt)?.rtime_start
                : void 0;
          return (0, n.jsx)(be.Gq, {
            toolTipContent: wt
              ? (0, Q.we)(
                  "#MeetSteam_AlreadyReg",
                  (0, le.TW)(wt),
                  (0, le.KC)(wt),
                )
              : void 0,
            children: (0, n.jsxs)("div", {
              className: (0, C.A)(pe().SessionInstance, ut),
              children: [
                (0, n.jsx)("div", {
                  className: pe().StatusText,
                  children: (0, n.jsx)("span", { children: ot }),
                }),
                (0, n.jsxs)("div", {
                  className: pe().Background,
                  children: [
                    (0, n.jsx)("div", {
                      className: pe().SessionTitle,
                      children: Be,
                    }),
                    Ke &&
                      (0, n.jsx)("div", {
                        className: pe().SessionAudience,
                        children: (0, Q.we)("#MeetSteam_Session_Audience", Ke),
                      }),
                    (0, n.jsx)("div", {
                      className: pe().SessionInfoLink,
                      onClick: Xe,
                      children: (0, Q.we)("#MeetSteam_Session_Details"),
                    }),
                    (0, n.jsx)("div", {
                      className: pe().ScheduleActionRow,
                      children: (0, n.jsx)(G.$n, {
                        onClick: () => {
                          r && r(N.group.group_id, N.session.id);
                        },
                        disabled: !dt,
                        children: (0, Q.we)(
                          it == F ? "#Button_Unselect" : "#Button_Select",
                        ),
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(Qe, {
                  nAvailableSpace: ht,
                  bAllowedToRegisterIfFull: Y,
                }),
                (0, n.jsx)(B.EN, {
                  active: vt,
                  children: (0, n.jsxs)(B.o0, {
                    strTitle: Be,
                    bAlertDialog: !0,
                    bAllowFullSize: !0,
                    closeModal: bt,
                    children: [
                      (0, n.jsx)("div", { children: Ke }),
                      (0, n.jsx)("div", { children: at }),
                      !!Je &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              children: (0, Q.we)("#MeetSteam_FAQ"),
                            }),
                            (0, n.jsx)(V.fh, { text: Je }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
      },
      53041: (we, ye, s) => {
        "use strict";
        s.d(ye, { O: () => m });
        const n =
          /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
        function b(a) {
          return a ? n.test(a.trim()) : !1;
        }
        function m(a, t) {
          return b(a) ? a : t;
        }
      },
      40976: (we, ye, s) => {
        "use strict";
        s.d(ye, { W: () => ve, F: () => Te });
        var n = s(7850),
          b = s(19298),
          m = s(41735),
          a = s.n(m),
          t = s(65946),
          i = s(90626),
          D = s(813),
          f = s(14947),
          O = s(72604),
          A = s(34592),
          M = s(3166),
          W = Object.defineProperty,
          p = Object.getOwnPropertyDescriptor,
          y = (ee, ie, v, k) => {
            for (
              var q = k > 1 ? void 0 : k ? p(ie, v) : ie, V = ee.length - 1, ce;
              V >= 0;
              V--
            )
              (ce = ee[V]) && (q = (k ? ce(ie, v, q) : ce(q)) || q);
            return k && q && W(ie, v, q), q;
          };
        const x = class St {
          constructor() {
            (0, f.Gn)(this);
          }
          m_mapClanReposted = new Set();
          m_mapSourceEventGIDToPostedClans = new Map();
          static s_EventRepost;
          static Get() {
            return (
              St.s_EventRepost ||
                ((St.s_EventRepost = new St()), St.s_EventRepost.Initialize()),
              St.s_EventRepost
            );
          }
          static ValidateRepostData(ie) {
            const v = ie;
            return v &&
              v.repost_clan_account_ids &&
              Array.isArray(v.repost_clan_account_ids) &&
              v.repost_clan_account_ids.length > 0
              ? typeof v.repost_clan_account_ids[0] == "number"
              : !1;
          }
          Initialize() {
            if (document.getElementById("application_config")) {
              let ie = (0, M.Tc)("repostcontrols", "application_config");
              St.ValidateRepostData(ie) &&
                ie.repost_clan_account_ids.forEach((v) =>
                  this.m_mapClanReposted.add(v),
                );
            }
          }
          BCanRepostPartnerEvent() {
            return this.m_mapClanReposted.size > 0;
          }
          GetRepostClanAccountID() {
            return Array.from(this.m_mapClanReposted);
          }
          async LoadClansAlreadyRepostedTo(ie, v, k) {
            if (this.m_mapSourceEventGIDToPostedClans.has(v))
              return this.m_mapSourceEventGIDToPostedClans.get(v);
            const q = M.TS.STORE_BASE_URL + "events/ajaxgetrepostedevent",
              V = {
                sessionid: (0, M.KC)(),
                source_clan_accountid: ie.GetAccountID(),
                source_event_gid: v,
              };
            try {
              const ce = await a().get(q, {
                params: V,
                withCredentials: !0,
                cancelToken: k?.token,
              });
              if (ce?.data?.success == O.R)
                return (
                  this.m_mapSourceEventGIDToPostedClans.set(
                    v,
                    ce.data.repost_clan_accountid || [],
                  ),
                  ce.data.repost_clan_accountid
                );
              console.error(
                "GetRepostClanAccountID: failed " +
                  ce?.data?.success +
                  " and msg: " +
                  ce?.data?.msg,
              );
            } catch (ce) {
              const Me = (0, A.H)(ce);
              console.error(
                "GetRepostClanAccountID: fail repost with " + Me.strErrorMsg,
                Me,
              );
            }
            return new Array();
          }
          async RepostEvent(ie, v, k, q, V) {
            const ce = M.TS.STORE_BASE_URL + "events/ajaxrepostevent",
              Me = new FormData();
            Me.append("sessionid", (0, M.KC)()),
              Me.append("source_clan_accountid", "" + ie.GetAccountID()),
              Me.append("source_event_gid", "" + v),
              Me.append("repost_clan_accountid", "" + k.GetAccountID()),
              Me.append("add", "" + q);
            try {
              let de = await a().post(ce, Me, {
                withCredentials: !0,
                cancelToken: V?.token,
              });
              if (de?.data?.success == O.R && de.data.repost_gid) {
                this.m_mapSourceEventGIDToPostedClans.has(v) ||
                  this.m_mapSourceEventGIDToPostedClans.set(v, []);
                const xe = this.m_mapSourceEventGIDToPostedClans
                  .get(v)
                  .findIndex((se) => k.GetAccountID() == se);
                return (
                  q && xe == -1
                    ? this.m_mapSourceEventGIDToPostedClans
                        .get(v)
                        .push(k.GetAccountID())
                    : !q &&
                      xe !== -1 &&
                      this.m_mapSourceEventGIDToPostedClans
                        .get(v)
                        .splice(xe, 1),
                  de.data.repost_gid
                );
              } else
                console.error(
                  "RepostEvent: failed " +
                    de?.data?.success +
                    " and msg: " +
                    de?.data?.msg,
                );
            } catch (de) {
              const xe = (0, A.H)(de);
              console.error(
                "RepostEvent: fail repost with " + xe.strErrorMsg,
                xe,
              );
            }
            return null;
          }
        };
        y([f.sH], x.prototype, "m_mapClanReposted", 2);
        let U = x;
        var T = s(7638),
          P = s(95695),
          E = s.n(P),
          $ = s(47875),
          X = s(88003),
          H = s(36118),
          F = s(36707),
          j = s(82734),
          o = s(18210),
          d = s(13854),
          h = s(53113),
          u = s(96538),
          g = s(14256),
          w = s.n(g),
          te = s(56492),
          I = s(63109),
          z = s(75844),
          _ = s(76559),
          me = s(16412),
          G = s(25792),
          B = s(85599);
        const R = (0, z.PA)((ee) => {
          const { eventModel: ie } = ee,
            [v, k] = (0, i.useState)(!0),
            [q, V] = (0, i.useState)(new Set()),
            [ce, Me] = (0, i.useState)(new Set()),
            [de, xe] = (0, i.useState)(new Set()),
            [se, oe] = (0, i.useState)(null),
            [ze, We] = (0, i.useState)(null),
            Se = (0, i.useRef)(null);
          (0, i.useEffect)(
            () => (
              v &&
                (async () => {
                  const Ie = a().CancelToken.source();
                  Se.current = Ie.cancel;
                  const Fe = U.Get().LoadClansAlreadyRepostedTo(
                    ie.clanSteamID,
                    ie.GID,
                    Ie,
                  );
                  Fe.then(($e) => {
                    const Qe = new Set();
                    $e.forEach((mt) => Qe.add(mt)), V(Qe);
                  });
                  let Le = new Array();
                  Le.push(Fe),
                    U.Get()
                      .GetRepostClanAccountID()
                      .forEach(($e) => {
                        const Qe = _.b.InitFromClanID($e);
                        Le.push(D.ac.LoadClanInfoForClanSteamID(Qe));
                      }),
                    await Promise.all(Le),
                    k(!1);
                })(),
              () => Se.current && Se.current()
            ),
            [v, ie.GID, ie.clanSteamID],
          );
          const Ae = new Array();
          return (
            U.Get()
              .GetRepostClanAccountID()
              .forEach((he) => {
                const Ie = D.ac.GetClanInfoByClanAccountID(he);
                if (Ie && he != ie.clanSteamID.GetAccountID()) {
                  const Fe = q.has(he),
                    Le = ce.has(he) || (Fe && !de.has(he));
                  Ae.push(
                    (0, n.jsx)(
                      me.Yh,
                      {
                        label: Fe
                          ? (0, o.we)(
                              "#EventRepost_Dialog_Existing",
                              Ie.group_name,
                            )
                          : Ie.group_name,
                        checked: Le,
                        disabled: se !== null,
                        onChange: ($e) => {
                          q.has(he)
                            ? ($e ? de.delete(he) : de.add(he), xe(new Set(de)))
                            : ($e ? ce.add(he) : ce.delete(he),
                              Me(new Set(ce)));
                        },
                      },
                      "checkbox" + he,
                    ),
                  );
                }
              }),
            (0, n.jsx)(G.tH, {
              children: (0, n.jsx)(u.x_, {
                onEscKeypress: () => ee.closeModal && ee.closeModal(),
                children: (0, n.jsxs)(me.UC, {
                  children: [
                    (0, n.jsx)(me.Y9, {
                      children: (0, o.we)("#EventRepost_Dialog_Title"),
                    }),
                    (0, n.jsxs)(me.nB, {
                      children: [
                        (0, n.jsx)(me.a3, {
                          children: (0, o.we)("#EventRepost_Dialog_Desc"),
                        }),
                        v
                          ? (0, n.jsx)(B.t, { string: (0, o.we)("#Loading") })
                          : (0, n.jsx)("div", { children: Ae }),
                        !!(ce.size || de.size) &&
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("span", {
                                children: (0, o.we)(
                                  "#EventRepost_Dialog_Action_Desc",
                                ),
                              }),
                              (0, n.jsxs)("ul", {
                                children: [
                                  !!ce.size &&
                                    (0, n.jsx)("li", {
                                      children: (0, o.we)(
                                        "#EventRepost_Dialog_Action_Add",
                                        ce.size,
                                      ),
                                    }),
                                  !!de.size &&
                                    (0, n.jsx)("li", {
                                      children: (0, o.we)(
                                        "#EventRepost_Dialog_Action_Remove",
                                        de.size,
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        !!se && (0, n.jsx)("div", { children: se }),
                        !!ze && (0, n.jsx)("div", { children: ze }),
                      ],
                    }),
                    (0, n.jsx)(me.wi, {
                      children: (0, n.jsx)(me.CB, {
                        onCancel: () => ee.closeModal && ee.closeModal(),
                        strOKText: (0, o.we)("#EventRepost_Dialog_OK"),
                        bOKDisabled:
                          (ce.size == 0 && de.size == 0) ||
                          se !== null ||
                          ze !== null,
                        onOK: async () => {
                          Se.current && Se.current();
                          const he = a().CancelToken.source();
                          Se.current = he.cancel;
                          const Ie = ce.size + de.size;
                          let Fe = 1;
                          oe((0, o.we)("#EventRepost_Dialog_Progress", Fe, Ie));
                          for (const Le of Array.from(ce)) {
                            const $e = _.b.InitFromClanID(Le);
                            if (
                              await U.Get().RepostEvent(
                                ie.clanSteamID,
                                ie.GID,
                                $e,
                                !0,
                                he,
                              )
                            )
                              oe(
                                (0, o.we)(
                                  "#EventRepost_Dialog_Progress",
                                  ++Fe,
                                  Ie,
                                ),
                              );
                            else {
                              We((0, o.we)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          for (const Le of Array.from(de)) {
                            const $e = _.b.InitFromClanID(Le);
                            if (
                              await U.Get().RepostEvent(
                                ie.clanSteamID,
                                ie.GID,
                                $e,
                                !1,
                                he,
                              )
                            )
                              oe(
                                (0, o.we)(
                                  "#EventRepost_Dialog_Progress",
                                  ++Fe,
                                  Ie,
                                ),
                              );
                            else {
                              We((0, o.we)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          We((0, o.we)("#EventRepost_Dialog_ResultSuccess"));
                        },
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        });
        var ue = s(24660),
          be = s(19730);
        function C(ee) {
          const {
            nVoteCount: ie,
            nCommentCount: v,
            myVote: k,
            onVote: q,
            strDiscussionURL: V,
            onDiscussionUnavailable: ce,
            bShowDiscussion: Me,
            repost: de,
            share: xe,
          } = ee;
          return (0, n.jsxs)(b.Z, {
            className: w().Container,
            "flow-children": "row",
            focusable: !1,
            children: [
              (0, n.jsxs)("div", {
                className: w().InnerContainer,
                children: [
                  (0, n.jsxs)("div", {
                    className: w().VoteContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: w().VoteCount,
                        children: [
                          (0, n.jsx)(H.bfp, {
                            className: w().VoteUpStaticIcon,
                          }),
                          (0, be.Dq)(ie),
                        ],
                      }),
                      (0, n.jsxs)(b.Z, {
                        focusable: !0,
                        className: (0, F.A)(
                          E().Button,
                          E().Icon,
                          w().DiscussionButton,
                          k == "up" ? w().VoteButtonSelected : "",
                        ),
                        onActivate: () => q("up"),
                        children: [
                          (0, n.jsx)(H.bfp, {
                            className:
                              k == "up"
                                ? w().VoteUpSelectedIcon
                                : w().VoteUpIcon,
                          }),
                          (0, n.jsx)("span", {
                            className: w().DiscussionButtonText,
                            children: (0, o.we)("#Button_RateUp"),
                          }),
                        ],
                      }),
                      (0, n.jsx)(b.Z, {
                        focusable: !0,
                        className: (0, F.A)(
                          E().Button,
                          E().Icon,
                          w().DiscussionButton,
                          k == "down" ? w().VoteButtonSelected : "",
                        ),
                        onActivate: () => q("down"),
                        "aria-label": (0, o.we)("#Button_RateDown"),
                        children: (0, n.jsx)(H.bfp, {
                          className:
                            k == "down"
                              ? w().VoteDownSelectedIcon
                              : w().VoteDownIcon,
                        }),
                      }),
                    ],
                  }),
                  Me &&
                    (0, n.jsx)(Q, {
                      commentCount: v,
                      discussionURL: V,
                      gotoDiscussion: ce,
                    }),
                  de,
                ],
              }),
              xe &&
                (0, n.jsx)("div", {
                  className: w().ShareContainer,
                  children: xe,
                }),
            ],
          });
        }
        function Q(ee) {
          const { commentCount: ie, discussionURL: v, gotoDiscussion: k } = ee;
          return (0, n.jsxs)("div", {
            className: w().DiscussContainer,
            children: [
              (0, n.jsxs)("div", {
                className: w().DiscussionCount,
                children: [(0, n.jsx)(H.ROZ, {}), (0, be.Dq)(ie)],
              }),
              v &&
                (0, n.jsx)(ue.Ii, {
                  href: (0, h.k2)(v),
                  children: (0, n.jsxs)("div", {
                    className: (0, F.A)(
                      E().Button,
                      E().Icon,
                      w().DiscussionButton,
                    ),
                    children: [
                      (0, n.jsx)(H.ROZ, {}),
                      (0, n.jsx)("span", {
                        className: w().DiscussionButtonText,
                        children: (0, o.we)("#Button_Discuss"),
                      }),
                    ],
                  }),
                }),
              !v &&
                (0, n.jsxs)(b.Z, {
                  focusable: !0,
                  onActivate: k,
                  className: (0, F.A)(
                    E().Button,
                    E().Icon,
                    w().DiscussionButton,
                  ),
                  children: [
                    (0, n.jsx)(H.ROZ, {}),
                    (0, n.jsx)("span", {
                      className: w().DiscussionButtonText,
                      children: (0, o.we)("#Button_Discuss"),
                    }),
                  ],
                }),
            ],
          });
        }
        var le = s(64868);
        const ae = i.lazy(() =>
          Promise.all([s.e(5858), s.e(68578), s.e(65920), s.e(63337)]).then(
            s.bind(s, 63337),
          ),
        );
        function ve(ee, ie) {
          return ie.BIsUserLoggedIn()
            ? ie.GetPartnerEventPermissions(ee.clanSteamID).limited_user
              ? ((0, X.pg)((0, n.jsx)(I.g, {}), window), !1)
              : !0
            : (M.TS.IN_CLIENT
                ? console.log(
                    "EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.",
                  )
                : (0, X.pg)(
                    (0, n.jsx)(u.o0, {
                      strTitle: (0, o.we)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: (0, o.we)(
                        "#EventDisplay_Share_NotLoggedIn_Description",
                      ),
                      strOKButtonText: (0, o.we)("#MobileLogin_SignIn"),
                      onOK: () => (0, $.l)(),
                    }),
                    window,
                  ),
              !1);
        }
        function Ee(ee) {
          const [ie, v] = i.useState(() =>
              T.KN.Get().BHasMyVote(ee)
                ? Pe(T.KN.Get().GetPreviouslyLoadedVote(ee))
                : void 0,
            ),
            [k, q] = i.useState(() => !!T.KN.Get().BHasMyVote(ee)),
            V = i.useRef(k),
            ce = ee.GID;
          i.useEffect(() => {
            const de = V.current || !T.KN.Get().BIsUserLoggedIn();
            if (((V.current = !1), de)) return;
            const xe = a().CancelToken.source();
            return (
              T.KN.Get()
                .LoadMyVote(ee, xe)
                .then((se) => {
                  v(Pe(se)), q(!0);
                })
                .catch((se) => {
                  const oe = (0, A.H)(se);
                  console.error("EventDiscussionWidget = " + oe.strErrorMsg);
                }),
              () => xe.cancel("EventDiscussionWidget is being unmounted")
            );
          }, [ce]);
          const Me = i.useCallback(
            (de) => {
              ve(ee, T.KN.Get()) &&
                (ie == de ||
                  de == null ||
                  !k ||
                  (T.KN.Get()
                    .Vote(ee, de === "up", a().CancelToken.source())
                    .catch((xe) => {
                      const se = (0, A.H)(xe);
                      console.error(
                        "EventDiscussionWidget.OnVote" +
                          de +
                          " " +
                          se.strErrorMsg,
                        se,
                      );
                    }),
                  v(de)));
            },
            [ee, ie, k],
          );
          return { myVote: ie, Vote: Me };
        }
        function Pe(ee) {
          let ie;
          return ee === !0 ? (ie = "up") : ee === !1 && (ie = "down"), ie;
        }
        function Te(ee) {
          const { eventModel: ie, emoticonStore: v, partnerEventStore: k } = ee,
            q = (0, M.Qn)(),
            { myVote: V, Vote: ce } = Ee(ie),
            [, Me] = (0, D.TB)(ie.clanSteamID.GetAccountID()),
            de = (he) => {
              (0, X.pg)(
                (0, n.jsx)(u.KG, {
                  strDescription: (0, o.we)(
                    "#EventDisplay_Share_CommentMigrationInProcess",
                  ),
                }),
                (0, j.uX)(he),
              );
            },
            xe = (he) => {
              (0, X.pg)((0, n.jsx)(R, { eventModel: ie }), (0, j.uX)(he));
            },
            [se, oe, ze, We] = (0, t.q3)(() => [
              (0, d.OQ)(
                ie.nVotesUp - ie.nVotesDown,
                0,
                Number.MAX_SAFE_INTEGER,
              ),
              (0, h.NT)(ie.GetForumTopicURL(Me?.vanity_url)),
              ie.BIsUnlistedEvent(),
              ie.nCommentCount,
            ]),
            Se = (0, M.Y2)(),
            Ae = M.iA.logged_in && U.Get().BCanRepostPartnerEvent();
          return (0, n.jsx)(C, {
            nVoteCount: se,
            nCommentCount: We,
            myVote: V,
            onVote: ce,
            strDiscussionURL: oe,
            onDiscussionUnavailable: de,
            bShowDiscussion: !Se && !ze,
            repost:
              Ae &&
              (0, n.jsx)("div", {
                className: w().VoteContainer,
                children: (0, n.jsx)(b.Z, {
                  focusable: !0,
                  className: (0, F.A)(
                    E().Button,
                    E().Icon,
                    w().DiscussionButton,
                    V == "down" ? w().VoteButtonSelected : "",
                  ),
                  onActivate: xe,
                  children: (0, o.we)("#EventRepost_Dialog_Title"),
                }),
              }),
            share:
              !q &&
              (0, n.jsx)(pe, {
                eventModel: ie,
                emoticonStore: v,
                partnerEventStore: k,
              }),
          });
        }
        function pe(ee) {
          const { eventModel: ie, emoticonStore: v, partnerEventStore: k } = ee,
            [q, V, ce] = (0, le.uD)(),
            Me = (0, te.JP)(ie),
            de = (0, te.T7)(ie);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              q &&
                (0, n.jsx)(i.Suspense, {
                  fallback: null,
                  children: (0, n.jsx)(u.EN, {
                    active: !0,
                    children: (0, n.jsx)(ae, {
                      closeModal: ce,
                      eventLink: de,
                      sharePageUrls: Me,
                      appid: ie.appid,
                      emoticonStore: v,
                      partnerEventStore: k,
                    }),
                  }),
                }),
              (0, n.jsxs)(b.Z, {
                focusable: !0,
                className: (0, F.A)(E().Button, E().Icon, w().DiscussionButton),
                onActivate: V,
                children: [
                  (0, n.jsx)(H.SYj, { className: w().ShareIcon }),
                  (0, n.jsx)("span", {
                    className: w().DiscussionButtonText,
                    children: (0, o.we)("#Button_Share"),
                  }),
                ],
              }),
            ],
          });
        }
      },
      67418: (we, ye, s) => {
        "use strict";
        s.d(ye, { H: () => ie, k: () => Ee });
        var n = s(7850),
          b = s(29630),
          m = s(68941),
          a = s(70187),
          t = s(1917),
          i = s(90626),
          D = s(95535),
          f = s(16412),
          O = s(6878),
          A = s.n(O),
          M = s(53107),
          W = s(36707),
          p = s(18210),
          y = s(53113),
          x = s(3166),
          U = s(26040),
          T = s(79118),
          P = s(25269),
          E = s(53041),
          $ = s(24660);
        function X() {
          return React.useMemo(
            () => ({
              style: {
                defaultValue: null,
                fnReadValue: (v) => v.attrs.style || null,
                fnRenderEditor: (v, k) => jsx(H, { value: v, setValue: k }),
              },
              buttoncolor: {
                defaultValue: null,
                fnReadValue: (v) => v.attrs.buttoncolor || null,
                fnRenderEditor: (v, k) => jsx(F, { value: v, setValue: k }),
              },
            }),
            [],
          );
        }
        function H(v) {
          const { value: k, setValue: q } = v;
          return jsxs(Dialog.LabelGroup, {
            label: Localize("#EventEditor_InsertLink_Style"),
            children: [
              jsx(Dialog.RoundCheckboxField, {
                checked: k == null,
                onChange: (V) => V && q(null),
                label: Localize("#EventEditor_InsertLink_Style_Default"),
              }),
              jsx(Dialog.RoundCheckboxField, {
                checked: k == "pill",
                onChange: (V) => V && q("pill"),
                label: Localize("#EventEditor_InsertLink_Style_Pill"),
              }),
            ],
          });
        }
        function F(v) {
          const { value: k, setValue: q } = v;
          return jsxs(Fragment, {
            children: [
              jsx(Dialog.Label, {
                children: Localize("#EventEditor_InsertLink_ButtonColor"),
              }),
              jsx("input", {
                type: "color",
                value: k || "#3691fa",
                onChange: (V) => q(V?.currentTarget?.value),
              }),
            ],
          });
        }
        function j(v) {
          switch (v) {
            case "button":
              return (0, W.A)(O.LinkButton, "LinkButton");
            case "pill":
              return (0, W.A)(O.LinkPill, "LinkPill");
            default:
              return (0, W.A)(O.Link, "Link");
          }
        }
        function o(v, k, q) {
          let V = "";
          return (
            v == "button" && k && (V += `background-color: ${k};`),
            v == "pill" && q && (V += `color: ${q};`),
            V.length == 0 ? void 0 : V
          );
        }
        function d(v, k, q) {
          let V;
          return (
            (v == "button" || v == "pill") && k && (V = { backgroundColor: k }),
            (v == "button" || v == "pill") &&
              q &&
              (V = { ...(V ?? {}), color: q }),
            V
          );
        }
        function h(v) {
          let k = (0, P.J)((0, a.j$)(v.args) || (0, a.j$)(v.args, "href"));
          const q = (0, a.j$)(v.args, "style"),
            V = (0, a.j$)(v.args, "id"),
            ce = (0, E.O)(
              (0, a.j$)(v.args, "buttoncolor") || (0, a.j$)(v.args, "bgcolor"),
              void 0,
            ),
            Me = (0, E.O)(
              (0, a.j$)(v.args, "labelcolor") || (0, a.j$)(v.args, "color"),
              void 0,
            ),
            de = j(q),
            xe = v.context.event,
            se = (0, b.z5)(k, v.language, xe?.rtime32_last_modified);
          if (se === void 0 || se == null) return v.children || "";
          typeof se == "string" ? (k = se) : (k = se[1]);
          const oe = d(q, ce, Me);
          return typeof k == "string" && k.length > 0 && k[0] == "#"
            ? (0, n.jsx)($.Ii, {
                className: de,
                href: k,
                style: oe,
                children: v.children,
              })
            : k == "steam://settings/account"
              ? (0, n.jsx)(M.uU, {
                  className: de,
                  href: "steam://settings/account",
                  children: v.children,
                })
              : (0, n.jsx)(D.d$, {
                  className: de,
                  url: k,
                  event: v.context.event,
                  id: V,
                  style: oe,
                  children: v.children,
                });
        }
        function u(v) {
          const k = (0, a.j$)(v.args, "href"),
            q = (0, U.em)(k);
          return q
            ? q.fnBBComponent(k, {
                event: v.context.event,
                partnerEventStore: T.O3,
              })
            : (0, n.jsx)(h, { ...v });
        }
        var g = s(65316),
          w = s(34736),
          te = s(39239),
          I = s(13465),
          z = s(72609),
          _ = s(80150),
          me = s(18994),
          G = s(68538);
        function B(v) {
          const k = (0, x.Qn)(),
            q = (0, me.a4)(me.Wn),
            V =
              String((0, a.j$)(v.args, "autoadvance")).toLowerCase() === "true";
          return (0, n.jsx)(G.F, {
            hideArrows: !q,
            hidePips: k,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: q,
            bAutoAdvance: V,
            className: A().ScreenshotCarousel,
            children: v.children,
          });
        }
        var R = s(65088),
          ue = s.n(R),
          be = s(1123);
        function C(v) {
          const { strURL: k, children: q } = v;
          return (
            typeof k == "string"
              ? !(0, y.ZF)(k)
              : k.some((ce) => !(0, y.ZF)(ce))
          )
            ? (0, n.jsx)(Q, { children: q })
            : (0, n.jsx)(n.Fragment, { children: q });
        }
        function Q(v) {
          const { children: k } = v;
          return (0, be.Ey)()
            ? (0, n.jsx)(n.Fragment, { children: k })
            : (0, n.jsx)("div", {
                className: ue().ImageBlocked,
                children: (0, p.oW)(
                  "#Image_Externally_Hosted_Hidden",
                  (0, n.jsx)("a", {
                    href: z.TS.STORE_BASE_URL + "account/cookiepreferences",
                  }),
                ),
              });
        }
        var le = s(33645),
          ae = s.n(le);
        let ve = null;
        function Ee() {
          return (
            ve == null &&
              (ve = new Map([
                ["url", { Constructor: h, autocloses: !1 }],
                ["dynamiclink", { Constructor: u, autocloses: !1 }],
                [
                  "h1",
                  {
                    Constructor: a.Tu(a.Zb, O.Header1),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h2",
                  {
                    Constructor: a.Tu(a.Sz, O.Header2),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h3",
                  {
                    Constructor: a.Tu(a.ZS, O.Header3),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "quote",
                  { Constructor: a.Tu(a.Pk, O.BlockQuote), autocloses: !1 },
                ],
                [
                  "list",
                  {
                    Constructor: a.B8,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "olist",
                  {
                    Constructor: a._J,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "*",
                  {
                    Constructor: a.ck,
                    autocloses: !0,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "p",
                  {
                    Constructor: a.It,
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                ["img", { Constructor: Pe, autocloses: !1 }],
                ["previewyoutube", { Constructor: t.gH, autocloses: !1 }],
                ["looping_media", { Constructor: m.$A, autocloses: !1 }],
                ["video", { Constructor: m.UT, autocloses: !1 }],
                ["youtubeorvideo", { Constructor: t.Eo, autocloses: !1 }],
                ["trailer", { Constructor: pe, autocloses: !1 }],
                [
                  "speaker",
                  {
                    Constructor: ee,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["docimg", { Constructor: Te, autocloses: !1 }],
                ["carousel", { Constructor: B, autocloses: !1 }],
              ])),
            ve
          );
        }
        function Pe(v) {
          const { showErrorInfo: k, event: q } = v.context;
          let V = (0, a.j$)(v.args, "src") || v.children?.toString();
          V || (V = (0, a.j$)(v.args));
          const ce = (0, a.j$)(v.args, "style") === "inline",
            Me = (0, b.z5)(V, v.language, q?.rtime32_last_modified);
          if (Me == null) return null;
          if (typeof Me == "string") {
            V = Me;
            let de;
            return (
              (de = !(0, y.ZF)(V)),
              q?.BHasTag("auto_rssfeed") && (de = !1),
              k
                ? (0, n.jsx)(te.i, {
                    className: (0, W.A)({ [ae().Image_Inline]: ce }),
                    src: V,
                    crossOrigin: de ? "anonymous" : void 0,
                  })
                : ((V = (0, y.L$)(V)),
                  (0, n.jsx)(C, {
                    strURL: V,
                    children: (0, n.jsx)(_.o, {
                      className: (0, W.A)({ [ae().Image_Inline]: ce }),
                      src: V,
                      crossOrigin: de ? "anonymous" : void 0,
                    }),
                  }))
            );
          } else
            return (0, n.jsx)(C, {
              strURL: Me,
              children: (0, n.jsx)(I.c, { rgSources: Me }),
            });
        }
        function Te(v) {
          const k = (0, a.j$)(v.args);
          if (k == null || k == null || k.length == 0) return "";
          const q = v.children?.toString(),
            V = new Array();
          return (
            V.push(
              `${z.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${z.TS.LANGUAGE}/${k}`,
            ),
            z.TS.LANGUAGE != "english" &&
              V.push(
                `${z.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${k}`,
              ),
            (0, n.jsx)(I.c, { rgSources: V, alt: q })
          );
        }
        function pe(v) {
          const k = ie(v.args, "appid", v.context.event?.appid ?? 0),
            q = ie(v.args, "trailerid", 0);
          let V =
            (0, a.j$)(v.args, "style")?.toLocaleLowerCase() ??
            g.rg.k_TrailerAsFull;
          V = Object.values(g.rg).includes(V) ? V : g.rg.k_TrailerAsFull;
          const ce = (0, E.O)(v.args.color, "black"),
            Me = (0, E.O)(v.args.bgcolor, "white"),
            de = (0, m.g4)(v.args);
          return (0, n.jsx)(g.P6, {
            appid: k,
            trailerBaseID: q,
            bIsPreviewMode: v.context.showErrorInfo,
            embedStyle: V,
            color: ce,
            bgcolor: Me,
            children: v.children,
            subtitles: de.rgVideoTracks,
          });
        }
        function ee(v) {
          const k = (0, a.j$)(v.args, "name"),
            q = (0, a.j$)(v.args, "title"),
            V = (0, a.j$)(v.args, "company"),
            ce = (0, a.j$)(v.args, "photo");
          return v.context.bShowShortSpeakerInfo
            ? (0, n.jsx)(w.S8, {
                name: k,
                title: q,
                company: V,
                photo: ce,
                bio: v.children,
              })
            : (0, n.jsx)(w.$k, {
                name: k,
                title: q,
                company: V,
                photo: ce,
                bio: v.children,
              });
        }
        function ie(v, k, q) {
          const V = (0, a.j$)(v, k);
          return V === void 0 || V == null ? q : Number.parseInt(V);
        }
      },
      31151: (we, ye, s) => {
        "use strict";
        s.d(ye, { d3: () => X, Zn: () => H });
        var n = s(7850),
          b = s(33770),
          m = s(7487),
          a = s(72609),
          t = s(90626),
          i = s(70187),
          D = s(96197),
          f = s(53113),
          O = s(95535),
          A = s(39414);
        class M extends m.K0 {
          m_LinkFilter = A.O;
          m_parentNode = void 0;
          m_mapHostToComponent;
          m_globalStoreLink;
          constructor(o, d, h, u) {
            super(o),
              (this.m_parentNode = d),
              (this.m_mapHostToComponent = h),
              (this.m_globalStoreLink = u);
          }
          AppendText(o, d = !1) {
            let h = o;
            if (
              (d || this.m_parentNode?.tag == "*") &&
              (this.m_parentNode == null || this.m_parentNode.tag != "img")
            ) {
              let u = this.m_LinkFilter.exec(h);
              for (; u; ) {
                if (u.index > 0) {
                  let te = u.input.substring(0, u.index);
                  super.AppendText(te, d);
                }
                let g = u[0],
                  w = !1;
                if (this.m_mapHostToComponent) {
                  for (let te = 0; te < this.m_mapHostToComponent.length; ++te)
                    if (this.m_mapHostToComponent[te].urlRegExp.exec(g)) {
                      (w = !0),
                        super.AppendNode(
                          this.m_mapHostToComponent[te].fnBBComponent(
                            g,
                            this.m_globalStoreLink,
                          ),
                        );
                      break;
                    }
                }
                w || super.AppendNode((0, O.Pm)(g)),
                  (h = u.input.substring(u.index + g.length)),
                  (u = this.m_LinkFilter.exec(h));
              }
            }
            h.length > 0 && super.AppendText(h, d);
          }
        }
        const W = "[\u02D0:]([a-zA-Z0-9_]+)[\u02D0:]";
        class p extends m.K0 {
          m_EmoteRegex = new RegExp(W);
          AppendText(o, d = !1) {
            let h = o;
            if (o.length >= 3) {
              let u = this.m_EmoteRegex.exec(h);
              for (; u; ) {
                if (u.index > 0) {
                  let w = u.input.substring(0, u.index);
                  super.AppendText(w, d);
                }
                let g = u[1];
                super.AppendNode(t.createElement(D.n, { emoticon: g }, [])),
                  (h = u.input.substring(u.index + g.length + 2)),
                  (u = this.m_EmoteRegex.exec(h));
              }
            }
            h.length > 0 && super.AppendText(h, d);
          }
        }
        class y extends m.K0 {
          m_parentNode = void 0;
          constructor(o, d) {
            super(o), (this.m_parentNode = d);
          }
          AppendText(o, d = !1) {
            let h = o;
            this.m_parentNode &&
              this.m_parentNode.tag == "img" &&
              (h = (0, f.L$)(h)),
              super.AppendText(h, d);
          }
        }
        var x = s(67418),
          U = s(26040);
        let T = null;
        function P() {
          return (
            T == null &&
              (T = new Map([
                ...Array.from(i.W4.entries()),
                ...Array.from((0, x.k)().entries()),
              ])),
            T
          );
        }
        const E = t.createContext(null);
        function $() {
          return t.useContext(E) ?? P();
        }
        function X(j) {
          const o = $(),
            d = t.useMemo(
              () =>
                new Map([
                  ...Array.from(o.entries()),
                  ...Array.from(j.dictionary.entries()),
                ]),
              [o, j.dictionary],
            );
          return (0, n.jsx)(E.Provider, { value: d, children: j.children });
        }
        function H(j) {
          const {
              text: o,
              partnerEventStore: d,
              languageOverride: h,
              event: u,
              showErrorInfo: g,
              bShowShortSpeakerInfo: w,
            } = j,
            te = (0, U.IK)(),
            I = t.useCallback(
              (me) =>
                new y(
                  new p(
                    new M(new m.OJ(new m.R8()), me, te, {
                      partnerEventStore: d,
                      event: u,
                    }),
                  ),
                  me,
                ),
              [d, u, te],
            ),
            z = $();
          return t
            .useMemo(() => new b.B(z, I, h || a.TS.LANGUAGE), [z, I, h])
            .ParseBBCode(o, {
              showErrorInfo: g,
              event: u,
              bShowShortSpeakerInfo: w,
            });
        }
        function F(j) {
          const {
              strTag: o,
              args: d,
              rawargs: h,
              language: u = PchLanguageToELanguage(Config.LANGUAGE),
              children: g,
              ...w
            } = j,
            te = $().get(o);
          return te
            ? jsx(te.Constructor, {
                context: w,
                tagname: o,
                args: d,
                language: u,
                children: g,
                rawargs: h,
              })
            : jsxs(Fragment, { children: [`[${o}]`, g, `[/${o}]`] });
        }
      },
      87847: (we, ye, s) => {
        "use strict";
        s.d(ye, {
          Bs: () => x,
          VP: () => M,
          aY: () => p,
          j7: () => U,
          rx: () => P,
          wV: () => A,
          y: () => W,
        });
        var n = s(7850),
          b = s(99412),
          m = s(47797),
          a = s(95535),
          t = s(76559),
          i = s(813),
          D = s(60480),
          f = s(13600),
          O = s(98541);
        const A =
            /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
          M =
            /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i;
        function W(E) {
          if (!E || (E.GetEventType() != b.ajI && E.GetEventType() != b.HRy))
            return !1;
          const $ = i.ac.GetClanInfoByClanAccountID(
            E.clanSteamID.GetAccountID(),
          );
          return !(
            !D.pF.GetCreatorHome(E.clanSteamID) ||
            !$ ||
            !(0, m.Ns)(E, $)
          );
        }
        function p(E, $) {
          const H = D.pF.GetCreatorHome(E.clanSteamID)?.GetAppIDList() ?? [];
          return (
            $.length > 0 && $.filter((F) => H.includes(F)).length === $.length
          );
        }
        function y(E, $, X) {
          if ((0, f.j7)($)) {
            let H = new RegExp(E).exec($);
            if (H && H.length > 2) {
              let F, j, o, d;
              H[1] == "gid"
                ? (j = new t.b(H[2]))
                : H[1] == "group"
                  ? (j = t.b.InitFromClanID(Number.parseInt(H[2])))
                  : H[1] == "groups"
                    ? (d = H[2])
                    : isNaN(+H[2])
                      ? (o = H[2])
                      : ((F = Number(H[2])),
                        (F = !X || (W(X.event) && p(X.event, [F])) ? F : 0));
              const h = H[3];
              if (
                ((F !== void 0 && F > 0) ||
                  o !== void 0 ||
                  d !== void 0 ||
                  j !== void 0) &&
                h != null &&
                h.length > 0
              )
                return (0, n.jsx)(O.q, {
                  appid: F,
                  clanSteamID: j,
                  strVanity: o,
                  strGroupVanity: d,
                  eventGID: h,
                  strURL: $,
                });
            }
          }
          return (0, a.Pm)($, X?.event);
        }
        function x(E, $) {
          return y(M, E, $);
        }
        function U(E, $) {
          return y(A, E, $);
        }
        let T = null;
        function P() {
          return (
            T == null &&
              (T = [
                { urlRegExp: new RegExp(A), fnBBComponent: U },
                { urlRegExp: new RegExp(M), fnBBComponent: x },
              ]),
            T
          );
        }
      },
      98541: (we, ye, s) => {
        "use strict";
        s.d(ye, { q: () => F });
        var n = s(7850),
          b = s(41735),
          m = s.n(b),
          a = s(75844),
          t = s(90626),
          i = s(99412),
          D = s(9046),
          f = s(813),
          O = s(79118),
          A = s(10142),
          M = s(72080),
          W = s(85599),
          p = s(34592),
          y = s(18210),
          x = s(3166),
          U = s(13465),
          T = s(95535),
          P = s(56492),
          E = s(88812),
          $ = Object.defineProperty,
          X = Object.getOwnPropertyDescriptor,
          H = (o, d, h, u) => {
            for (
              var g = u > 1 ? void 0 : u ? X(d, h) : d, w = o.length - 1, te;
              w >= 0;
              w--
            )
              (te = o[w]) && (g = (u ? te(d, h, g) : te(g)) || g);
            return u && g && $(d, h, g), g;
          };
        let F = class extends t.Component {
          state = {
            bLoading: this.props.announcementGID
              ? !O.O3.BHasClanAnnouncementGID(this.props.announcementGID)
              : !O.O3.BHasClanAnnouncementGID(this.props.eventGID ?? ""),
            bFailedLoad: !1,
          };
          m_cancelSignal = m().CancelToken.source();
          componentDidMount() {
            this.HandleLoadEventInfo();
          }
          async HandleLoadEventInfo() {
            const {
              appid: o,
              strVanity: d,
              announcementGID: h,
              eventGID: u,
              strGroupVanity: g,
            } = this.props;
            let w = this.props.clanSteamID;
            try {
              if (this.state.bLoading) {
                if (d !== void 0) {
                  const z = await f.ac.LoadOGGClanInfoForIdentifier(d);
                  if (!z) {
                    this.setState({ bFailedLoad: !0 });
                    return;
                  }
                  w = z.clanSteamID;
                } else if (g !== void 0) {
                  const z = await f.ac.LoadOGGClanInfoForGroupVanity(g);
                  if (!z) {
                    this.setState({ bFailedLoad: !0 });
                    return;
                  }
                  w = z.clanSteamID;
                }
                const I = await O.O3.LoadPartnerEventGeneric(w, o, u, h, 0);
                if (!I) {
                  this.setState({ bFailedLoad: !0 });
                  return;
                }
                await A.A.Get().QueueAppRequest(I.appid, {
                  include_assets: !0,
                  include_basic_info: !0,
                  include_release: !0,
                }),
                  this.setState({ bFailedLoad: !1, bLoading: !1 });
              }
            } catch (te) {
              this.HandleError(te);
            }
          }
          HandleError(o) {
            let d = (0, p.H)(o);
            const {
              eventGID: h,
              announcementGID: u,
              strGroupVanity: g,
              strVanity: w,
            } = this.props;
            console.error(
              "EventSnippet hit error on announceGID " +
                u +
                " eventGID " +
                h +
                " strVanity " +
                w +
                " strGroupVanity " +
                g +
                " error: " +
                d.strErrorMsg,
            ),
              this.setState({ bFailedLoad: !0 });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("component unmounted");
          }
          render() {
            const {
              appid: o,
              announcementGID: d,
              eventGID: h,
              strURL: u,
              fnFilterImageURLsForKnownFailures: g,
              fnImageFailureCallback: w,
            } = this.props;
            if (this.state.bFailedLoad) return (0, T.Pm)(u);
            if (this.state.bLoading) return (0, n.jsx)(W.t, {});
            let te =
              d !== void 0
                ? O.O3.GetClanEventFromAnnouncementGID(d)
                : O.O3.GetClanEventModel(h ?? "");
            if (te == null) return (0, T.Pm)(u);
            const I = (0, i.sfN)(x.TS.LANGUAGE);
            let z = te.GetNameWithFallback(I),
              _ = te.GetSubTitleWithSummaryFallback(I),
              me = A.A.Get()
                .GetApp(o ?? 0)
                ?.GetName(),
              G = (0, y.TW)(te.GetStartTimeAndDateUnixSeconds());
            return (0, n.jsxs)(P.tj, {
              eventModel: te,
              route: P.PH.k_eView,
              className: M.gg.Box,
              "data-modal-content-sizetofit": !0,
              "data-appid": o,
              children: [
                (0, n.jsx)(j, { ...this.props, event: te }),
                (0, n.jsxs)(M.J7, {
                  children: [
                    (0, n.jsxs)(M.zN, {
                      children: [
                        (0, y.we)(
                          te.type == i.uYK
                            ? "#EventDisplay_Share_Announcement"
                            : "#EventDisplay_Share_Event",
                          me ?? "",
                        ),
                        (0, n.jsx)(M.MG, { children: G }),
                      ],
                    }),
                    (0, n.jsx)(M.bv, {
                      children: (0, n.jsx)("div", {
                        className: M.gg.Type,
                        children: z,
                      }),
                    }),
                    (0, n.jsx)(M.AT, { children: _ }),
                  ],
                }),
              ],
            });
          }
        };
        F = H([a.PA], F);
        function j(o) {
          const {
            event: d,
            fnFilterImageURLsForKnownFailures: h,
            fnImageFailureCallback: u,
          } = o;
          let g = (0, i.sfN)(x.TS.LANGUAGE),
            w = (0, E.WC)(d, "capsule", g, D.wI.capsule_main) ?? [];
          return (
            w && h && (w = h(w)),
            (0, n.jsx)(U.c, {
              className: M.gg.Preview,
              rgSources: w ?? [],
              onIncrementalError: (te, I, z) => u && u(I),
            })
          );
        }
      },
      26040: (we, ye, s) => {
        "use strict";
        s.d(ye, { IK: () => t, Rh: () => a, em: () => i });
        var n = s(7850),
          b = s(90626);
        const m = b.createContext(void 0);
        function a(D) {
          return (0, n.jsx)(m.Provider, {
            value: D.linkWidgets,
            children: D.children,
          });
        }
        function t() {
          return b.useContext(m);
        }
        function i(D) {
          const f = t();
          return b.useMemo(() => f?.find((O) => !!O.urlRegExp.exec(D)), [D, f]);
        }
      },
      82206: (we, ye, s) => {
        "use strict";
        s.d(ye, { zj: () => dr, d3: () => ut.d3, fh: () => xr });
        var n = s(7850),
          b = s(50974),
          m = s(99412),
          a = s(23386),
          t = s(56062),
          i = s(90626),
          D = s(70187),
          f = s(41735),
          O = s.n(f),
          A = s(14947),
          M = s(72604),
          W = s(71742),
          p = s(18210),
          y = s(3166),
          x = Object.defineProperty,
          U = Object.getOwnPropertyDescriptor,
          T = (K, L, Z, re) => {
            for (
              var fe = re > 1 ? void 0 : re ? U(L, Z) : L,
                ge = K.length - 1,
                je;
              ge >= 0;
              ge--
            )
              (je = K[ge]) && (fe = (re ? je(L, Z, fe) : je(fe)) || fe);
            return re && fe && x(L, Z, fe), fe;
          };
        const P = 0,
          E = 1,
          $ = 2,
          X = 3,
          H = 4,
          F = 5,
          j = 6,
          o = 7;
        class d {
          constructor() {
            (0, A.Gn)(this);
          }
          exportFn = void 0;
          file = void 0;
          dataURL = void 0;
          uploadFileName = "";
          displayFileName = void 0;
          sha1 = "";
          hmac = "";
          timestamp = 0;
          imageWidth = 0;
          imageHeight = 0;
          fileInfo = void 0;
          uploadInfo = void 0;
          eUploadState = P;
          uploadProgress = 0;
          strErrorDescription = void 0;
        }
        T([A.sH], d.prototype, "file", 2),
          T([A.sH], d.prototype, "dataURL", 2),
          T([A.sH], d.prototype, "imageWidth", 2),
          T([A.sH], d.prototype, "imageHeight", 2),
          T([A.sH], d.prototype, "eUploadState", 2),
          T([A.sH], d.prototype, "uploadProgress", 2),
          T([A.sH], d.prototype, "strErrorDescription", 2);
        class h {
          m_Callbacks;
          m_fileUploadProps = new d();
          m_onComplete;
          constructor(L) {
            (0, A.Gn)(this), (this.m_Callbacks = L);
          }
          get file_upload_props() {
            return this.m_fileUploadProps;
          }
          get file_upload_data_url() {
            return this.m_fileUploadProps.dataURL;
          }
          get file() {
            return this.m_fileUploadProps.file;
          }
          LogFileUploadMessage(L) {
            this.m_Callbacks.LogFileUploadMessage &&
              this.m_Callbacks.LogFileUploadMessage(L);
          }
          SetUploadFileError(L, Z) {
            (this.m_fileUploadProps.eUploadState = L),
              (this.m_fileUploadProps.strErrorDescription = Z),
              (this.m_fileUploadProps.displayFileName = void 0);
          }
          async StartFileExportToUpload(L, Z = {}) {
            const { displayFilename: re, info: fe, onComplete: ge } = Z;
            (this.m_fileUploadProps.eUploadState = o),
              (this.m_fileUploadProps.uploadProgress = 0),
              (this.m_onComplete = ge),
              (this.m_fileUploadProps.fileInfo = fe),
              this.SetFileToUpload(L),
              (this.m_fileUploadProps.displayFileName = re);
          }
          async SetImageFileToUpload(L, Z = {}) {
            const { processor: re = u, info: fe } = Z;
            if (!L) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = fe;
            const ge = this.m_Callbacks.GetFileNameOverride?.() ?? L.name;
            if (L.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                H,
                (0, p.we)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  ge,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let je = [
                "jpg",
                "jpeg",
                "png",
                "gif",
                "webm",
                "mpg",
                "mp4",
                "mpeg",
                "ogv",
                "webp",
                "avif",
              ],
              Re = L.name.split(".").pop()?.toLowerCase() ?? "";
            if (je.indexOf(Re) == -1) {
              let Bt = Re || ge;
              this.SetUploadFileError(
                F,
                (0, p.we)(
                  "#Chat_Settings_Error_ChatUploadFileTypeNotSupported",
                  Bt,
                ),
              );
              return;
            }
            const pt = await re(L);
            this.SetFileToUpload(pt.file),
              (this.m_fileUploadProps.imageHeight = pt.height),
              (this.m_fileUploadProps.imageWidth = pt.width);
          }
          async SetOtherFileToUpload(L, Z = {}) {
            if (!L) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = Z.info;
            const re = this.m_Callbacks.GetFileNameOverride?.() ?? L.name;
            if (L.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                H,
                (0, p.we)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  re,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let fe = ["zip"],
              ge = L.name.split(".").pop()?.toLowerCase() ?? "";
            if (fe.indexOf(ge) == -1) {
              let je = ge || re;
              this.SetUploadFileError(
                F,
                (0, p.we)("#Chat_Settings_Error_FileTypeNotZip", je),
              );
              return;
            }
            this.SetFileToUpload(L);
          }
          SetFileToUpload(L) {
            if (
              ((this.m_fileUploadProps.file = void 0),
              (this.m_fileUploadProps.dataURL = void 0),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.sha1 = ""),
              (this.m_fileUploadProps.imageWidth = 0),
              (this.m_fileUploadProps.imageHeight = 0),
              (this.m_fileUploadProps.displayFileName = void 0),
              !L)
            ) {
              this.m_fileUploadProps.eUploadState = P;
              return;
            }
            let Z = "";
            if (typeof L == "function")
              (this.m_fileUploadProps.file = void 0),
                (this.m_fileUploadProps.exportFn = L);
            else {
              (this.m_fileUploadProps.file = L),
                (this.m_fileUploadProps.exportFn = void 0);
              try {
                Z = URL.createObjectURL(L);
              } catch (fe) {
                console.error(`Failed to created object URL from file: ${fe}`);
              }
              (this.m_fileUploadProps.displayFileName =
                this.m_fileUploadProps.file.name),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() +
                  "_" +
                  this.m_fileUploadProps.file.name);
            }
            this.m_fileUploadProps.eUploadState = E;
            let re = "";
            for (; re.length < 40; )
              re += Math.floor(Math.random() * 16).toString(16);
            (this.m_fileUploadProps.dataURL = Z),
              (this.m_fileUploadProps.sha1 = re),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.timestamp = 0);
          }
          async RetryFileUpload() {
            return this.BeginFileUpload();
          }
          async BeginFileUpload(L) {
            if (
              ((this.m_fileUploadProps.uploadProgress = 0),
              this.m_fileUploadProps.exportFn)
            ) {
              this.m_fileUploadProps.eUploadState = o;
              const { eResult: fe, file: ge } =
                await this.m_fileUploadProps.exportFn((je) => {
                  (0, A.h5)(() => {
                    this.m_fileUploadProps.uploadProgress = je * 0.5;
                  });
                });
              if (fe != M.R || !ge)
                return (
                  this.SetUploadFileError(
                    X,
                    (0, p.we)("#Chat_Settings_Error_ExportFailed"),
                  ),
                  new Response()
                );
              (this.m_fileUploadProps.file = ge),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() + "_" + ge.name);
            }
            let Z = this.m_fileUploadProps.file;
            if (!Z)
              throw (
                ((0, W.wT)(
                  !1,
                  "Must SetImageFileToUpload before calling BeginFileUpload",
                ),
                new Error("Invalid State"))
              );
            (this.m_fileUploadProps.eUploadState = $),
              (this.m_fileUploadProps.uploadInfo = L);
            let re = new FormData();
            re.append("sessionid", (0, y.KC)()),
              re.append("l", y.TS.LANGUAGE),
              re.append("file_size", Z.size.toString()),
              re.append("file_name", this.m_fileUploadProps.uploadFileName),
              re.append("file_sha", this.m_fileUploadProps.sha1),
              re.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              re.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              re.append("file_type", Z.type),
              this.m_Callbacks.PopulateBeginFileUploadFormData &&
                this.m_Callbacks.PopulateBeginFileUploadFormData(
                  re,
                  this.file_upload_props.uploadInfo,
                  this.file_upload_props.fileInfo,
                );
            try {
              let fe = await fetch(
                  this.m_Callbacks.GetBeginFileUploadURL() +
                    `?l=${y.TS.LANGUAGE}`,
                  { method: "POST", body: re, credentials: "include" },
                ),
                ge;
              try {
                ge = await fe.json();
              } catch {}
              if (!fe.ok) {
                let je = "";
                throw (
                  ((0, A.h5)(() => {
                    (this.m_fileUploadProps.eUploadState = X),
                      this.LogFileUploadMessage(fe),
                      ge?.message
                        ? (je = ge?.message)
                        : (je = (0, p.we)("#Chat_Settings_Error_ServerError")),
                      (this.m_fileUploadProps.strErrorDescription = (0, p.we)(
                        "#Chat_Upload_ErrorStart",
                        je,
                      ));
                  }),
                  je)
                );
              }
              if (!ge || !ge.result) throw new Error();
              return (
                (this.m_fileUploadProps.timestamp = ge.timestamp),
                (this.m_fileUploadProps.hmac = ge.hmac),
                this.DoFileUpload(ge.result, Z)
              );
            } catch (fe) {
              let ge = fe || (0, p.we)("#ConnectionTrouble_FailedToConnect");
              throw (
                ((0, A.h5)(() => {
                  (this.m_fileUploadProps.eUploadState = X),
                    (this.m_fileUploadProps.strErrorDescription = (0, p.we)(
                      "#Chat_Upload_ErrorStart",
                      ge,
                    ));
                }),
                ge)
              );
            }
          }
          async DoFileUpload(L, Z) {
            let re = L.use_https ? "https://" : "http://";
            re += L.url_host + L.url_path;
            const fe = {};
            for (const je of L.request_headers)
              je.name == "Content-Length" ||
                je.name == "Host" ||
                (fe[je.name] = je.value);
            let ge = {
              onUploadProgress: (je) => {
                const Re = !!this.m_fileUploadProps.exportFn,
                  pt = Re ? 50 : 0,
                  Bt = Re ? 50 : 100,
                  Ot = pt + (je.loaded / je.total) * Bt;
                Ot > this.m_fileUploadProps.uploadProgress &&
                  (0, A.h5)(() => {
                    this.m_fileUploadProps.uploadProgress = Ot;
                  });
              },
              headers: fe,
              transformRequest: [(je) => je],
            };
            try {
              return (
                await O().put(re, Z, ge), this.CommitFileUpload(!0, L.ugcid, Z)
              );
            } catch (je) {
              throw (
                (this.LogFileUploadMessage(je.response),
                (0, A.h5)(() => {
                  (this.m_fileUploadProps.strErrorDescription = (0, p.we)(
                    "#Chat_Upload_ErrorCloud",
                  )),
                    (this.m_fileUploadProps.eUploadState = X),
                    (this.m_fileUploadProps.uploadProgress = 0);
                }),
                this.CommitFileUpload(!1, L.ugcid, Z),
                this.m_fileUploadProps.strErrorDescription)
              );
            }
          }
          async CommitFileUpload(L, Z, re) {
            let fe = this.m_fileUploadProps.sha1,
              ge = new FormData();
            ge.append("sessionid", (0, y.KC)()),
              ge.append("l", y.TS.LANGUAGE),
              ge.append("file_name", this.m_fileUploadProps.uploadFileName),
              ge.append("file_sha", fe),
              ge.append("success", L ? "1" : "0"),
              ge.append("ugcid", Z),
              ge.append("file_type", re.type),
              ge.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              ge.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              ge.append(
                "timestamp",
                this.m_fileUploadProps.timestamp.toString(),
              ),
              ge.append("hmac", this.m_fileUploadProps.hmac),
              this.m_Callbacks.PopulateCommitFileUploadFormData(
                ge,
                this.file_upload_props.uploadInfo,
                this.file_upload_props.fileInfo,
              );
            try {
              let je = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
                method: "POST",
                body: ge,
                credentials: "include",
              });
              return (
                L
                  ? ((this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = j),
                    this.m_onComplete && this.m_onComplete(M.R, re.size))
                  : ((this.m_fileUploadProps.eUploadState = X),
                    this.m_onComplete && this.m_onComplete(M.zi, re.size)),
                je
              );
            } catch (je) {
              if (!L) return;
              let Re = "";
              throw (
                ((0, A.h5)(() => {
                  if (
                    (this.LogFileUploadMessage(je),
                    (this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = X),
                    je.response)
                  ) {
                    let pt = je.response.data,
                      Bt = je.response.status,
                      Ot = pt && pt.success;
                    pt.message
                      ? (Re = pt.message)
                      : (Re = (0, p.we)("#Chat_Settings_Error_ServerError"));
                  } else Re = (0, p.we)("#ConnectionTrouble_FailedToConnect");
                  (this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${Re}`),
                    this.m_onComplete && this.m_onComplete(M.zi, re.size);
                }),
                Re)
              );
            }
          }
          ClearFileUploadError() {
            (this.m_fileUploadProps.eUploadState != X &&
              this.m_fileUploadProps.eUploadState != H &&
              this.m_fileUploadProps.eUploadState != F) ||
              this.Reset();
          }
          Reset() {
            this.SetFileToUpload(void 0);
          }
        }
        T([A.XI], h.prototype, "SetUploadFileError", 1),
          T([A.XI], h.prototype, "StartFileExportToUpload", 1),
          T([A.XI], h.prototype, "SetImageFileToUpload", 1),
          T([A.XI], h.prototype, "SetOtherFileToUpload", 1),
          T([A.XI], h.prototype, "SetFileToUpload", 1),
          T([A.XI], h.prototype, "RetryFileUpload", 1),
          T([A.XI], h.prototype, "BeginFileUpload", 1),
          T([A.XI], h.prototype, "DoFileUpload", 1),
          T([A.XI], h.prototype, "CommitFileUpload", 1),
          T([A.XI], h.prototype, "ClearFileUploadError", 1),
          T([A.XI], h.prototype, "Reset", 1);
        function u(K) {
          return new Promise((L) => {
            let Z = new FileReader();
            (Z.onload = () => {
              let re = K,
                fe = Z.result,
                ge = g(fe),
                je = new Blob([ge], { type: K.type });
              if (je) {
                let Re = je;
                (Re.lastModifiedDate = new Date(K.lastModified)),
                  (Re.name = K.name),
                  (re = Re);
              }
              if (K.type.indexOf("image") == 0) {
                let Re = new Image();
                (Re.src = URL.createObjectURL(K)),
                  (Re.onload = (pt) => {
                    L({ file: re, width: Re.width, height: Re.height });
                  });
              } else L({ file: re, width: 0, height: 0 });
            }),
              Z.readAsArrayBuffer(K);
          });
        }
        function g(K) {
          let L = new DataView(K),
            Z = 0,
            re = 0,
            fe = [],
            ge = 0;
          if (L.getUint16(Z) == 65496) {
            Z += 2;
            let je = L.getUint16(Z);
            for (Z += 2; Z < L.byteLength && Z < 131072; ) {
              if (je == 65505)
                (fe[ge] = { recess: re, offset: Z - 2 }),
                  (re = Z + L.getUint16(Z)),
                  ge++;
              else if (je == 65498) break;
              (Z += L.getUint16(Z)), (je = L.getUint16(Z)), (Z += 2);
            }
            let Re = K.byteLength - re;
            if (
              (fe.forEach((Bt) => {
                Re += Bt.offset - Bt.recess;
              }),
              Re === K.byteLength)
            )
              return K;
            const pt = new Uint8Array(Re);
            if (fe.length > 0) {
              let Bt = 0;
              fe.forEach((Ot) => {
                let Lt = Ot.offset - Ot.recess;
                pt.set(new Uint8Array(K.slice(Ot.recess, Ot.offset)), Bt),
                  (Bt += Lt);
              }),
                pt.set(new Uint8Array(K.slice(re)), Bt);
            }
            return pt.buffer;
          }
          return K;
        }
        var w = s(80913),
          te = s(10142),
          I = s(84676),
          z = s(16412),
          _ = s(33732),
          me = s(67418),
          G = s(19432),
          B = s(30720),
          R = s(90711),
          ue = s(25792);
        const be = i.lazy(() =>
            Promise.all([
              s.e(36597),
              s.e(56589),
              s.e(85599),
              s.e(33512),
              s.e(18307),
              s.e(79611),
              s.e(94781),
              s.e(80702),
              s.e(48355),
              s.e(60480),
              s.e(97169),
              s.e(63089),
              s.e(1703),
              s.e(33884),
              s.e(13524),
              s.e(94932),
              s.e(73810),
              s.e(79139),
              s.e(34004),
              s.e(10177),
              s.e(68396),
            ]).then(s.bind(s, 7132)),
          ),
          C = (K) => {
            const L = (0, i.useRef)(null),
              [Z, re] = (0, i.useState)(B.K.Get().GetVODForAppID(K.appid)),
              [fe, ge] = (0, i.useState)(!B.K.Get().GetVODForAppID(K.appid));
            return (
              (0, i.useEffect)(() => () => {
                L.current?.("VODPlayer: unmounting");
              }),
              (0, i.useEffect)(() => {
                let je = Z;
                if (
                  (Z &&
                    Z.appid != K.appid &&
                    (je = B.K.Get().GetVODForAppID(K.appid)),
                  !je)
                ) {
                  const Re = async () => {
                    L.current && L.current();
                    const pt = O().CancelToken.source();
                    (L.current = pt.cancel),
                      (je = await B.K.Get().LoadVODForAppID(K.appid)),
                      pt.token.reason || re(je),
                      ge(!1);
                  };
                  ge(!0), Re();
                }
                Z != je && re(je);
              }, [K.appid, Z]),
              !Z && K.bPreviewMode
                ? (0, n.jsx)("div", {
                    children: (0, p.we)(
                      fe ? "#VODPlayer_Loading" : "#VODPlayer_ErrorLoading",
                      K.appid,
                    ),
                  })
                : (0, n.jsx)("div", {
                    className: G.BroadcastCtn,
                    children: (0, n.jsx)(ue.tH, {
                      children: (0, n.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, n.jsx)(be, {
                          nAppIDVOD: K.appid,
                          watchLocation: R.nn.TC,
                          bStartPaused: !0,
                        }),
                      }),
                    }),
                  })
            );
          };
        var Q = s(89926),
          le = s(82734),
          ae = s(24660),
          ve = s(36118),
          Ee = s(39362);
        function Pe(K) {
          const { fileUploadManager: L } = K,
            Z = (0, i.useRef)(null);
          return (0, n.jsxs)("div", {
            className: Ee.Ctn,
            children: [
              (0, n.jsx)("input", {
                type: "file",
                accept: ".jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4",
                style: { display: "none" },
                name: "fileupload",
                ref: Z,
                onChange: (re) => {
                  const fe = re.currentTarget.files;
                  fe?.length &&
                    (L.SetImageFileToUpload(fe[0]),
                    (re.currentTarget.value = ""));
                },
              }),
              (0, n.jsx)(ae.fu, {
                type: "button",
                title: (0, p.we)("#Button_Upload"),
                onOKActionDescription: (0, p.we)("#Button_Upload"),
                onClick: () => Z.current?.click(),
                children: (0, n.jsx)(ve.xv8, {}),
              }),
            ],
          });
        }
        var Te = s(65946),
          pe = s(36707),
          ee = s(71714);
        function ie(K) {
          const { fileUploadManager: L } = K,
            Z = (0, Te.q3)(() => L.file_upload_props.eUploadState);
          return Z == E
            ? (0, n.jsx)(v, { fileUploadManager: L })
            : Z == X || Z == F || Z == H
              ? (0, n.jsx)(q, { fileUploadManager: L })
              : Z != P
                ? (0, n.jsx)(k, { fileUploadManager: L })
                : null;
        }
        function v(K) {
          const { fileUploadManager: L } = K,
            Z = L.file;
          return Z
            ? (0, n.jsxs)("div", {
                className: ee.UploadPreviewContainer,
                children: [
                  Z.type.indexOf("image") != -1 &&
                    (0, n.jsx)("img", {
                      className: ee.UploadPreview,
                      src: L.file_upload_data_url,
                    }),
                  Z.type.indexOf("video") != -1 && (0, n.jsx)(ve.CeX, {}),
                  (0, n.jsxs)("div", {
                    className: ee.FileUploadFileName,
                    children: ["'", Z.name, "'"],
                  }),
                  (0, n.jsx)("div", {
                    className: ee.FileUploadCancel,
                    onClick: () => L.Reset(),
                    children: (0, n.jsx)(ve.sED, {}),
                  }),
                  (0, n.jsx)(z.jn, {
                    className: ee.FileUploadBtn,
                    onClick: async () => {
                      await L.BeginFileUpload(), L.Reset();
                    },
                    children: (0, p.we)("#Button_Upload"),
                  }),
                ],
              })
            : null;
        }
        function k(K) {
          const { fileUploadManager: L } = K,
            [Z, re, fe] = (0, Te.q3)(() => [
              L.file_upload_props.file,
              L.file_upload_props.displayFileName,
              L.file_upload_props.uploadProgress,
            ]),
            ge = Z ? (0, p.we)("#Uploading_Item", re ?? "") : "",
            je = { width: fe + "%" };
          return (0, n.jsxs)("div", {
            className: ee.FileUploadProgressContainer,
            children: [
              (0, n.jsx)("div", {
                className: ee.FileUploadProgressName,
                children: ge,
              }),
              (0, n.jsx)("div", {
                className: (0, pe.A)(
                  ee.FileUploadProgressBarContainer,
                  "DialogProgressBar_ProgressBarContainer",
                ),
                children: (0, n.jsx)("div", {
                  className: "DialogProgressBar_Value",
                  style: je,
                }),
              }),
            ],
          });
        }
        function q(K) {
          const { fileUploadManager: L } = K,
            [Z, re, fe] = (0, Te.q3)(() => [
              L.file_upload_props.strErrorDescription,
              L.file_upload_props.displayFileName,
              L.file_upload_props.eUploadState,
            ]),
            ge = re ? (0, p.we)("#Uploading_Item", re) : "",
            je = Z || (0, p.we)("#Chat_Upload_ErrorCloud");
          return (0, n.jsxs)("div", {
            className: ee.FileUploadProgressContainer,
            children: [
              (0, n.jsx)("div", {
                className: ee.FileUploadProgressName,
                children: ge,
              }),
              (0, n.jsx)("div", {
                className: ee.FileUploadErrorDescription,
                children: je,
              }),
              (0, n.jsx)("div", {
                className: ee.FileUploadActions,
                children: (0, n.jsxs)(z.dR, {
                  className: "DialogLayout_NoMinWidth",
                  children: [
                    fe == X &&
                      (0, n.jsx)(z.jn, {
                        onClick: async () => {
                          await L.RetryFileUpload(), L.Reset();
                        },
                        children: (0, p.we)("#Chat_Upload_ErrorAction_Retry"),
                      }),
                    (0, n.jsx)(z.$n, {
                      onClick: () => L.ClearFileUploadError(),
                      children: (0, p.we)("#Chat_Upload_ErrorAction_Close"),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var V = s(96538),
          ce = s(88003),
          Me = s(85599),
          de = s(72609),
          xe = s(43193);
        const se = new Map([["remindme", { Constructor: oe, autocloses: !1 }]]);
        function oe(K) {
          const { event: L, showErrorInfo: Z } = K.context,
            re = (0, D.j$)(K.args);
          if (re) return (0, n.jsx)(xe.y, { eventGID: re, bPreviewMode: Z });
          if (L) {
            const fe = (0, m.sfN)(de.TS.LANGUAGE);
            return (0, n.jsx)(xe.j, { eventModel: L, lang: fe });
          } else return null;
        }
        var ze = s(80902),
          We = s(75233),
          Se = s(51614);
        function Ae(K, L, Z) {
          const re = he(K, L);
          return (0, i.useMemo)(() => {
            const fe = re.results.find((ge) => Z == ge.unique_id);
            return {
              bLoading: re.bLoading,
              success: re.success,
              userPollData: fe,
              error_message: re.error_message,
              userPollSubmitData: re.userPollSubmitData,
            };
          }, [re, Z]);
        }
        function he(K, L) {
          const Z = (0, ze.I)({
            queryKey: Le(K, L),
            queryFn: async () => {
              const fe = await (
                await fetch($e(K, L, !1), {
                  method: "GET",
                  credentials: "include",
                })
              ).json();
              return Fe(fe);
            },
            placeholderData: {
              results: [],
              success: M.S7,
              bLoading: !0,
              userPollSubmitData: { user_poll_option_votes: [] },
            },
          });
          return Z.data
            ? Z.data
            : {
                results: [],
                success: M.S7,
                bLoading: !0,
                userPollSubmitData: { user_poll_option_votes: [] },
              };
        }
        function Ie(K, L) {
          const Z = (0, We.jE)();
          return (0, Se.n)({
            mutationKey: [
              "useSetPartnerEventCastVoteUserPoll",
              K.GetAccountID(),
              L,
            ],
            mutationFn: async (re) => {
              const fe = { votes: re.votes },
                ge = await fetch($e(K, L, !0), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(fe),
                  credentials: "include",
                });
              if (!ge.ok) throw new Error(`Server returned ${ge.status}`);
              return await ge.json();
            },
            onSuccess: (re, fe) => {
              if (re.success == M.R) Z.setQueryData(Le(K, L), () => Fe(re));
              else {
                const ge = Z.getQueryData(Le(K, L));
                if (ge) {
                  const je = {
                    ...ge,
                    success: re.success,
                    error_message: re.error_message,
                  };
                  Z.setQueryData(Le(K, L), () => je);
                }
              }
            },
          });
        }
        function Fe(K) {
          return {
            ...K,
            bLoading: !1,
            userPollSubmitData: {
              user_poll_option_votes: K.results
                .map((L) => L.voted_option_id)
                .reduce((L, Z) => L.concat(Z), []),
            },
          };
        }
        function Le(K, L) {
          return ["usePartnerEventUserPoll", K.ConvertTo64BitString(), L];
        }
        function $e(K, L, Z) {
          return `${y.TS.COMMUNITY_BASE_URL}partnerevents/${K.ConvertTo64BitString()}/userpoll/${L}/${Z ? "ajaxcastvote" : "ajaxloaddata"}/?origin=${(0, y.yK)()}`;
        }
        const Qe = 1440 * 60;
        function mt(K, L) {
          let Z = 0;
          return (
            L.poll_end_time
              ? (Z = L.poll_end_time)
              : (Z =
                  (K.rtime32_visibility_start ?? K.rtime32_start_time ?? 0) +
                  (L.poll_end_days_since_start || Qe)),
            Z
          );
        }
        function Ye(K, L) {
          return mt(K, L) < Math.floor(Date.now() / 1e3);
        }
        var _e = s(98609);
        const st = null;
        function qe(K) {
          return `${Config.COMMUNITY_BASE_URL}mediaconvert/ajaxgroupconvert/${K.ConvertTo64BitString()}`;
        }
        var Ce = ((K) => (
            (K.k_EPollResult_NotVisible = "not_visible"),
            (K.k_EPollResult_Visible_After_Vote = "after_vote"),
            (K.k_EPollResult_Visible_After_End = "after_end"),
            (K.k_EPollResult_Visible_After_Vote_Or_End = "after_vote_or_end"),
            (K.k_EPollResult_Visible_On_Demand = "on_demand"),
            K
          ))(Ce || {}),
          rt = ((K) => (
            (K.k_EPollVoter_AnyUser = "any_user"),
            (K.k_EPollVoter_UserGameInLibrary = "user_game_in_library"),
            (K.k_EPollVoter_MinPlayTime = "min_play_time"),
            (K.k_EPollVoter_MemberOfGroup = "member_of_group"),
            K
          ))(rt || {}),
          ct = s(56330),
          et = s(36343),
          ft = s(33280),
          Ze = s.n(ft),
          lt = s(76559),
          tt = s(7582),
          yt = s(24642),
          He = s(16114);
        function Ge(K) {
          const L = K.context.event,
            Z = K.context.showErrorInfo,
            re = (0, D.j$)(K.args, "poll_id"),
            fe = Number.parseInt(re),
            ge = (0, Te.q3)(() => ne(L, fe));
          if (!ge || !L)
            return Z
              ? (0, n.jsx)("div", {
                  className: ct.ErrorStylesWithIcon,
                  children: (0, p.we)("#UserPolls_Editor_FailToFindModel", fe),
                })
              : null;
          const je = (0, m.sfN)(_e.TS.LANGUAGE);
          return (0, n.jsx)(ue.tH, {
            children: (0, n.jsx)(N, {
              userPollDef: ge,
              lang: je,
              eventModel: L,
            }),
          });
        }
        function ne(K, L) {
          return (
            (K?.jsondata?.user_polls || [])?.find((re) => re.poll_id == L) ||
            null
          );
        }
        function N(K) {
          const { eventModel: L, userPollDef: Z, lang: re } = K,
            { userPollData: fe, ...ge } = Ae(
              L.clanSteamID,
              L.GID || "0",
              Z.poll_id,
            ),
            je = !!(ge.error_message && ge.error_message?.length > 0),
            Re = Ie(L.clanSteamID, L.GID || "0"),
            [pt, Bt] = (0, i.useState)(void 0),
            [Ot, Lt] = (0, i.useState)(!1),
            [Kt, Mr] = (0, i.useState)(!1),
            gr = fe?.option_results && fe?.option_results.length > 0,
            Yt = ((fe && fe.voted_option_id?.length) || 0) > 0;
          return (
            (0, i.useEffect)(() => {
              !Kt &&
                Z.results_visibility_settings != Ce.k_EPollResult_NotVisible &&
                gr &&
                (Ye(
                  {
                    rtime32_visibility_start:
                      L.GetVisibilityStartTimeAndDateUnixSeconds(),
                    rtime32_start_time: L.GetStartTimeAndDateUnixSeconds(),
                  },
                  Z,
                ) ||
                  Yt) &&
                Mr(!0);
            }, [gr, Yt, Kt, L, Z]),
            (0, n.jsxs)(Y, {
              ...K,
              children: [
                Z.options?.map((It) => {
                  const Br = fe?.option_results.find(
                      (Dr) => Dr.unique_id == It.option_id,
                    ),
                    Or =
                      fe?.voted_option_id.includes(It.option_id || 0) ||
                      pt === It.option_id;
                  return (0, n.jsx)(
                    r,
                    {
                      lang: re,
                      pollOptionDef: It,
                      bSelected: Or,
                      nPercentage: Kt ? Br?.percent : void 0,
                      onClick: () => Bt(It.option_id),
                      bDisableSelection:
                        ge.bLoading || !fe?.vote_permitted || je || Ot || Yt,
                    },
                    "polloption" + It.option_id,
                  );
                }),
                !!pt &&
                  (0, n.jsx)(z.$n, {
                    onClick: async () => {
                      if (
                        !ge.userPollSubmitData.user_poll_option_votes.includes(
                          pt,
                        )
                      ) {
                        Lt(!0);
                        const It = {
                          user_poll_option_votes: [
                            ...ge.userPollSubmitData.user_poll_option_votes,
                          ],
                        };
                        It.user_poll_option_votes.push(pt),
                          await Re.mutateAsync({ votes: It }),
                          Bt(void 0),
                          Lt(!1);
                      }
                    },
                    children: (0, p.we)("#Button_Submit"),
                  }),
                (Ot || ge.bLoading) &&
                  (0, n.jsx)(Me.t, {
                    size: "small",
                    position: "center",
                    string: ge.bLoading ? (0, p.we)("#Loading") : void 0,
                  }),
                gr &&
                  !Yt &&
                  !Kt &&
                  (0, n.jsx)("a", {
                    href: "#",
                    onClick: (It) => {
                      It.preventDefault(), Mr(!0);
                    },
                    children: (0, p.we)("#UserPolls_JustSeeResults"),
                  }),
                je &&
                  (0, n.jsx)("div", {
                    className: ct.ErrorStylesWithIcon,
                    children: ge.error_message,
                  }),
              ],
            })
          );
        }
        function Y(K) {
          const { userPollDef: L, lang: Z, eventModel: re, children: fe } = K,
            ge = (0, tt.f1)(),
            [je, Re] = (0, Te.q3)(() => [
              p.NT.GetWithFallback(L.localized_poll_description, Z),
              L.user_poll_background,
            ]);
          let pt;
          const Bt = re.clanSteamID.GetAccountID();
          Re &&
            (pt = {
              backgroundImage: `url('${(0, et.F)(Bt, Re)}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            });
          const Ot = (0, i.useMemo)(() => lt.b.InitFromClanID(Bt), [Bt]),
            { userPollData: Lt } = Ae(Ot, re.GID || "0", L.poll_id),
            Kt = mt(
              {
                rtime32_visibility_start:
                  re.GetVisibilityStartTimeAndDateUnixSeconds(),
                rtime32_start_time: re.GetStartTimeAndDateUnixSeconds(),
              },
              L,
            );
          return (0, n.jsx)("div", {
            className: Ze().PollBackground,
            style: pt,
            children: (0, n.jsxs)("div", {
              className: Ze().PollContainer,
              children: [
                (0, n.jsx)("div", {
                  className: Ze().PollQuestion,
                  children: je,
                }),
                (0, n.jsx)("div", {
                  className: Ze().PollOptions,
                  children: fe,
                }),
                (0, n.jsxs)("div", {
                  className: Ze().PollStatus,
                  children: [
                    (0, n.jsx)("div", {
                      children: (0, p.Yp)(
                        "#UserPolls_status_N_Votes",
                        (0, yt.D)(Lt?.total_votes || 0),
                      ),
                    }),
                    Lt?.display_message
                      ? (0, n.jsx)("div", { children: Lt?.display_message })
                      : (0, n.jsx)("div", {
                          children: (0, p.PP)(
                            "#UserPolls_status_N_TimeRemaining",
                            (0, He.R2)(Kt - ge),
                          ),
                        }),
                  ],
                }),
              ],
            }),
          });
        }
        function r(K) {
          const {
              pollOptionDef: L,
              onClick: Z,
              lang: re,
              bDisableSelection: fe,
              bSelected: ge,
              nPercentage: je,
            } = K,
            [Re] = (0, Te.q3)(() => [
              p.NT.GetWithFallback(L.localized_option, re),
            ]),
            pt = Math.round((je ?? 0) * 100);
          return (0, n.jsxs)("div", {
            className: (0, pe.A)({
              [Ze().PollOption]: !0,
              [Ze().Selected]: ge,
              [Ze().Disabled]: fe,
            }),
            onClick: fe ? void 0 : Z,
            children: [
              (0, n.jsx)("div", { className: Ze().BackgroundBar }),
              (0, n.jsx)("div", {
                className: Ze().ForegroundBar,
                style: { width: `${pt}%` },
              }),
              (0, n.jsxs)("div", {
                className: Ze().ContentRow,
                children: [
                  (0, n.jsx)("div", { className: Ze().PollVoteIcon }),
                  je !== void 0 &&
                    (0, n.jsxs)("div", {
                      className: Ze().PctText,
                      children: [pt, "%"],
                    }),
                  (0, n.jsx)("span", {
                    className: Ze().OptionText,
                    children: Re,
                  }),
                ],
              }),
            ],
          });
        }
        var c = s(63731);
        let S = null;
        function Be() {
          return (
            S == null &&
              (S = new Map([
                ...Array.from(se.entries()),
                ["vod", { Constructor: at, autocloses: !1 }],
                ["giveawayeligible", { Constructor: vt, autocloses: !1 }],
                ["claimitem", { Constructor: Xe, autocloses: !0 }],
                ["packagepurchaseable", { Constructor: bt, autocloses: !1 }],
                ["actiondialog", { Constructor: Ue, autocloses: !1 }],
                ["uploadfilebutton", { Constructor: De, autocloses: !0 }],
                [
                  "meetsteamsessiongroup",
                  { Constructor: _.ac, autocloses: !1 },
                ],
                [
                  "meetsteamscheduleview",
                  { Constructor: _.Xk, autocloses: !1 },
                ],
                ["userpolls", { Constructor: Ge, autocloses: !1 }],
              ])),
            S
          );
        }
        let Ke = null;
        function Je() {
          return (
            Ke == null &&
              (Ke = new Map([
                ...Array.from(GetEventBBCodeDisplayDictionary().entries()),
                ...Array.from(Be().entries()),
              ])),
            Ke
          );
        }
        function at(K) {
          const L = (0, me.H)(K.args, "appid", 0);
          return (0, n.jsx)(C, {
            appid: L,
            bPreviewMode: !!K.context.showErrorInfo,
          });
        }
        function vt(K) {
          const L = (0, D.j$)(K.args, "name"),
            Z =
              ((0, D.j$)(K.args, "visible") || "false").toLowerCase() ===
              "true",
            re = (0, w.h)(L);
          return L
            ? !re || !re.registered
              ? null
              : (re.eligible && Z) || (!re.eligible && !Z)
                ? K.children
                : null
            : K.context.showErrorInfo
              ? (0, n.jsx)("div", {
                  children: "Failed to provide giveaway name",
                })
              : null;
        }
        function Xe(K) {
          const L = !!K.context.showErrorInfo,
            { elDialogElement: Z, fnShowLogonDialog: re } = (0, Q.l)();
          if (!y.iA.logged_in)
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(z.$n, {
                  onClick: re,
                  className: "CSSClaimItemLoginButton",
                  children: (0, p.we)("#Sale_ClaimableReward_Login"),
                }),
                Z,
              ],
            });
          const fe = (0, D.j$)(K.args, "type");
          let ge;
          if (fe)
            switch (fe) {
              case "profilemodifier":
                ge = a.jE;
                break;
              case "sticker":
                ge = a.Ed;
                break;
            }
          return (0, n.jsx)(c.m, { bPreviewMode: L, rewardType: ge });
        }
        function bt(K) {
          const L = Number.parseInt((0, D.j$)(K.args, "id")) || 0,
            Z =
              ((0, D.j$)(K.args, "visible") || "false").toLowerCase() ===
              "true",
            re = K.context.showErrorInfo,
            [fe, ge] = (0, I.Gg)(L, {});
          if (!L || ge == I.Sq)
            return !L && re
              ? (0, n.jsx)("div", { children: "Error: PackageID Not Set" })
              : null;
          let je = !1;
          return (
            te.A.Get().BHasStoreItem(L, t.c6.RD)
              ? (je = !!fe?.GetBestPurchaseOption())
              : (je =
                  !te.A.Get().BIsPackageUnavailableDueToCountryRestriction(L)),
            (!je && !Z) || (je && Z) ? K.children : null
          );
        }
        function it(K) {
          if (K === "GameAwardDrop2022") {
            const L = (0, w.h)(K),
              Z = (0, w.Q)();
            return L
              ? L.registered
                ? {
                    bInitialState: !1,
                    bSuccessState: L.eligible,
                    bFailedState: !L.eligible,
                    fnAction: L.eligible
                      ? void 0
                      : async () => {
                          await Z.fnCreateRegistration(K);
                        },
                  }
                : {
                    bInitialState: !0,
                    fnAction: async () => {
                      await Z.fnCreateRegistration(K);
                    },
                  }
              : { bInitialState: !0 };
          }
          return { bInitialState: !0 };
        }
        function Ue(K) {
          const L = (0, D.j$)(K.args, "action"),
            Z = (0, D.j$)(K.args, "initialToken"),
            re = (0, D.j$)(K.args, "successToken"),
            fe = (0, D.j$)(K.args, "failToken"),
            ge = it(L),
            { elDialogElement: je, fnShowLogonDialog: Re } = (0, Q.l)();
          return !L || !Z || !re || !fe
            ? K.context.showErrorInfo
              ? (0, n.jsx)("div", {
                  children:
                    "Failed to provide all tokens. Dialog will not appear",
                })
              : null
            : !y.iA.logged_in && L != "test" && L != "nologinrequired"
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(z.$n, {
                      className: "CSSActionDialogButton",
                      onClick: Re,
                      children: (0, p.we)("#Login_SignIn"),
                    }),
                    je,
                  ],
                })
              : (0, n.jsxs)(z.$n, {
                  className: "CSSActionDialogButton",
                  onClick: (pt) => {
                    (0, ce.pg)(
                      (0, n.jsx)(nt, {
                        strAction: L,
                        strInitialToken: Z,
                        strSuccessToken: re,
                        strFailToken: fe,
                        children: K.children,
                      }),
                      (0, le.uX)(pt) ?? window,
                    );
                  },
                  children: [
                    !!ge.bInitialState && (0, p.we)(Z),
                    !!ge.bSuccessState && (0, p.we)(re),
                    !!ge.bFailedState && (0, p.we)(fe),
                  ],
                });
        }
        function nt(K) {
          const {
              strAction: L,
              children: Z,
              closeModal: re,
              strInitialToken: fe,
              strSuccessToken: ge,
              strFailToken: je,
            } = K,
            Re = it(L),
            [pt, Bt] = i.useState(!!Re.fnAction),
            Ot = i.useRef(!1);
          i.useEffect(() => {
            !Re.fnAction ||
              Ot.current ||
              ((Ot.current = !0), Bt(!0), Re.fnAction().finally(() => Bt(!1)));
          }, [Re]);
          const Lt = i.useId();
          return (0, n.jsxs)(V.eV, {
            bDisableBackgroundDismiss: !0,
            closeModal: re,
            onCancel: re,
            className: "CSSActionDialogDialog",
            "aria-labelledby": Lt,
            children: [
              (0, n.jsxs)(z.Y9, {
                id: Lt,
                children: [
                  !!Re.bInitialState && (0, p.we)(fe),
                  !!Re.bSuccessState && (0, p.we)(ge),
                  !!Re.bFailedState && (0, p.we)(je),
                ],
              }),
              (0, n.jsx)(z.nB, {
                children: (0, n.jsx)(z.a3, {
                  children: pt
                    ? (0, n.jsx)(Me.t, {
                        size: "medium",
                        position: "center",
                        string: (0, p.we)("#Loading"),
                      })
                    : Z,
                }),
              }),
            ],
          });
        }
        function De(K) {
          const { showErrorInfo: L, event: Z } = K.context,
            re = Z?.clanSteamID.GetAccountID() ?? 0,
            [fe] = i.useState(new h(ht(re)));
          return re == b.GU ||
            re == b.bv ||
            (y.TS.EUNIVERSE == m.Rv && re == b.mW) ||
            (y.TS.EUNIVERSE == m.wLO && re == b.Kd)
            ? (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(Pe, { fileUploadManager: fe }),
                  (0, n.jsx)(ie, { fileUploadManager: fe }),
                ],
              })
            : L
              ? (0, n.jsx)("div", {
                  children: (0, p.we)("#CloudUpload_NotSupport"),
                })
              : null;
        }
        function ht(K) {
          return {
            PopulateBeginFileUploadFormData: (Z) => {
              Z.append("clan_account_id", "" + K);
            },
            PopulateCommitFileUploadFormData: (Z) => {
              Z.append("clan_account_id", "" + K);
            },
            GetBeginFileUploadURL: () =>
              y.TS.STORE_BASE_URL + "saleaction/ajaxbeginfileupload",
            GetCommitFileUploadURL: () =>
              y.TS.STORE_BASE_URL + "saleaction/ajaxcommitfileupload",
            LogFileUploadMessage: (Z) => {
              console.log("UploadFileButton: ", Z);
            },
            GetMaxFileSizeMB: () => 100,
          };
        }
        var ut = s(31151),
          ot = s(26040),
          dt = s(95535),
          wt = s(43458),
          gt = s(6532),
          jt = s(73662),
          Et = s.n(jt),
          zt = s(10344),
          xt = s(72080),
          At = s(3946),
          Mt = s(47689),
          Oe = s(34592),
          e = s(13854);
        function l(K) {
          const { sharedFileID: L } = K,
            Z = (0, Mt.m)("SharedFileSnippet"),
            [re, fe] = (0, i.useState)(!1),
            [ge, je] = (0, i.useState)(() => ({
              sharedfileid: L,
              title: (0, p.we)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url: y.TS.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=" + L,
            }));
          (0, i.useEffect)(() => {
            (async () => {
              try {
                const Bt = await zt.R.LoadSharedFileDynamicData([L], Z);
                if (!Z.token.reason && Bt.length > 0) {
                  const Ot = Bt[0];
                  (0, e.TG)(Ot.url) &&
                    (Ot.url =
                      y.TS.COMMUNITY_BASE_URL +
                      "sharedfiles/filedetails/?id=" +
                      Ot.url),
                    je(Ot),
                    console.log(Bt[0]),
                    fe(!0);
                }
              } catch (Bt) {
                const Ot = (0, Oe.H)(Bt);
                console.error("SharedFileSnippet: " + Ot.strErrorMsg, Ot);
              }
            })();
          }, [Z, L]);
          let Re = ge.personnaname !== void 0 && ge.personnaname.length > 0;
          return (0, n.jsx)(At.V, {
            strURL: ge.url,
            strTitle: ge.title,
            strPreviewURL: ge.previewurl,
            strType: ge.type,
            strDescription: ge.description,
            author:
              Re &&
              (0, p.PP)(
                "#EventEditor_Author",
                (0, n.jsx)(xt.mZ, { children: ge.personnaname }),
              ),
            publishedfileid: L,
            appid: ge.appid,
            bSizeToFit: ge.bSizeToFit,
          });
        }
        var J = s(98541),
          Ft = s(6878),
          Gt = s(75844),
          Rt = s(39978),
          Tt = s.n(Rt),
          qt = s(30096),
          Ct = Object.defineProperty,
          _t = Object.getOwnPropertyDescriptor,
          Ht = (K, L, Z, re) => {
            for (
              var fe = re > 1 ? void 0 : re ? _t(L, Z) : L,
                ge = K.length - 1,
                je;
              ge >= 0;
              ge--
            )
              (je = K[ge]) && (fe = (re ? je(L, Z, fe) : je(fe)) || fe);
            return re && fe && Ct(L, Z, fe), fe;
          };
        let Ut = class extends i.Component {
          state = { bSummaryMode: !0, bLoadedMetaData: !1 };
          async componentDidMount() {
            let K =
              "https://sketchfab.com/oembed?url=https://sketchfab.com/models/" +
              this.props.modelID;
            try {
              let L = await O().get(K);
              this.setState({ bLoadedMetaData: !0, data: L.data });
            } catch (L) {
              this.setState({ bError: !0 }),
                console.error(
                  "SketchFabEmbed failed to load: " + (0, Oe.H)(L).strErrorMsg,
                );
            }
          }
          OnSketchFabClick() {
            this.state.bLoadedMetaData && this.setState({ bSummaryMode: !1 });
          }
          render() {
            const { modelID: K } = this.props,
              { data: L } = this.state;
            return this.state.bError
              ? (0, n.jsxs)("div", {
                  className: Tt().dynamiclink_box,
                  onClick: this.OnSketchFabClick,
                  children: [
                    (0, n.jsx)("span", { children: K }),
                    (0, n.jsx)("span", {
                      children: (0, p.we)(
                        "#EventDisplay_SketchFab_Error_Network",
                      ),
                    }),
                  ],
                })
              : this.state.bSummaryMode
                ? (0, n.jsx)("div", {
                    className: Tt().dynamiclink_box,
                    onClick: this.OnSketchFabClick,
                    children:
                      this.state.bLoadedMetaData && L
                        ? (0, n.jsxs)(i.Fragment, {
                            children: [
                              (0, n.jsx)("img", {
                                className: Tt().dynamiclink_preview,
                                src: L.thumbnail_url,
                              }),
                              (0, n.jsx)("img", {
                                className: Tt().sketchfab_play_overlay_image,
                              }),
                              (0, n.jsxs)("div", {
                                className: Tt().dynamiclink_content,
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: Tt().dynamiclink_name,
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: Tt().dynamiclink_type,
                                        children: (0, p.we)(
                                          "#EventDisplay_Sketchfab",
                                        ),
                                      }),
                                      (0, n.jsxs)("div", {
                                        children: [L.title, "\xA0"],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className: Tt().dynamiclink_author,
                                    children: L.author_name,
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, n.jsx)(Me.t, { size: "medium" }),
                  })
                : (0, n.jsx)("div", {
                    className: Tt().sketchfabmodelembedded,
                    children: (0, n.jsx)("iframe", {
                      className: Tt().sketchfabmodelembedded,
                      src:
                        "https://sketchfab.com/models/" +
                        this.props.modelID +
                        "/embed?autostart=1",
                      frameBorder: 0,
                      allowFullScreen: !0,
                    }),
                  });
          }
        };
        Ht([qt.oI], Ut.prototype, "OnSketchFabClick", 1),
          (Ut = Ht([Gt.PA], Ut));
        var Dt = s(87847),
          Wt = s(13600),
          er = s(77356),
          tr = s(31774),
          rr = s(71421),
          ir = s(65835),
          nr = s.n(ir);
        function sr(K) {
          const { defid: L, url: Z } = K,
            re = (0, tr.wk)(L);
          if (!re || !re.community_item_data) return null;
          const fe = re.appid,
            ge = re.community_item_data.item_image_large,
            je = `${y.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${fe}/${ge}`;
          return (0, n.jsx)("div", {
            className: nr().Ctn,
            children: (0, n.jsx)(rr.he, {
              toolTipContent: re.community_item_data.item_description,
              children: (0, n.jsx)("img", {
                src: je,
                alt: re.community_item_data.item_title,
              }),
            }),
          });
        }
        var lr = s(88743),
          ar = s(40358);
        const Nt =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i,
          Qt = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
          $t = /sketchfab.com\/(?:models\/(?:[^\/\s]+-)?)([a-z0-9]{32})/i,
          or = /twitter\.com\/(\w+)(\/?)$/i,
          mr = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
          cr = /twitch\.tv\/(\w+)(\/?)$/i,
          Zt =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i,
          Xt =
            /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
        let Pt = null;
        function Jt() {
          return (
            Pt == null &&
              ((0, y.Y2)()
                ? (Pt = [
                    { urlRegExp: new RegExp(Wt.VF), fnBBComponent: yr },
                    { urlRegExp: new RegExp(Dt.wV), fnBBComponent: Dt.j7 },
                    { urlRegExp: new RegExp(Dt.VP), fnBBComponent: Dt.Bs },
                    { urlRegExp: new RegExp(Nt), fnBBComponent: br },
                    { urlRegExp: new RegExp(Zt), fnBBComponent: wr },
                  ])
                : (Pt = [
                    {
                      urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                      fnBBComponent: Ne,
                    },
                    {
                      urlRegExp: new RegExp(
                        /community.+sharedfiles\/filedetails\/\?id=\d+/i,
                      ),
                      fnBBComponent: pr,
                    },
                    { urlRegExp: new RegExp(Wt.VF), fnBBComponent: yr },
                    { urlRegExp: new RegExp(Dt.wV), fnBBComponent: Dt.j7 },
                    { urlRegExp: new RegExp(Dt.VP), fnBBComponent: Dt.Bs },
                    { urlRegExp: new RegExp(Nt), fnBBComponent: br },
                    { urlRegExp: new RegExp(Qt), fnBBComponent: ke },
                    { urlRegExp: new RegExp($t), fnBBComponent: Ve },
                    { urlRegExp: new RegExp(or), fnBBComponent: jr },
                    { urlRegExp: new RegExp(mr), fnBBComponent: Er },
                    { urlRegExp: new RegExp(cr), fnBBComponent: zr },
                    { urlRegExp: new RegExp(Zt), fnBBComponent: wr },
                    { urlRegExp: new RegExp(Xt), fnBBComponent: hr },
                  ])),
            Pt
          );
        }
        function ur(K) {
          return Jt().find((L) => !!L.urlRegExp.exec(K));
        }
        function fr(K) {
          return React.useMemo(() => ur(K), [K]);
        }
        function Ne(K, L) {
          if ((0, y.Y2)()) return null;
          const Z = (0, wt.XU)(K);
          return Z?.strVideoID !== void 0
            ? (0, n.jsx)(gt.A, {
                videoID: Z.strVideoID,
                nStartSeconds: Z.nStartSeconds,
                classNameAlign: "",
                classNameSize: Et().sizeFull,
                bShowVideoImmediately: !1,
              })
            : (0, dt.Pm)(K, L?.event);
        }
        function ke(K, L) {
          if ((0, y.Y2)()) return null;
          const Z = new RegExp(Qt).exec(K);
          if (Z && Z.length > 1) {
            const re = Z[1];
            if (re?.length > 0) {
              let fe =
                "https://medal.tv/clip/" +
                re +
                "/?autoplay=0&donate=0" +
                (L && L.event ? "&steamappid=" + L.event.appid : "");
              return (0, n.jsx)("iframe", {
                className: Ft.MedalTVWidget,
                src: fe,
                frameBorder: 0,
                allow: "autoplay",
              });
            }
          }
          return (0, dt.Pm)(K, L?.event);
        }
        function Ve(K, L) {
          let Z = new RegExp($t).exec(K);
          if (Z && Z.length > 1) {
            let re = Z[1];
            if (re && re.length > 1) return (0, n.jsx)(Ut, { modelID: re });
          }
          return (0, dt.Pm)(K, L?.event);
        }
        function pr(K, L) {
          const Z = K.split("?");
          let re;
          if (Z.length == 2) {
            const fe = new URLSearchParams(Z[1]);
            fe.has("id") && (re = fe.get("id") ?? void 0);
          }
          return re !== void 0
            ? (0, n.jsx)(l, { sharedFileID: re })
            : (0, dt.Pm)(K, L?.event);
        }
        function yr(K, L) {
          const Z = (0, Wt.V6)(K);
          return Z
            ? (0, n.jsx)(vr, {
                eventModel: L?.event,
                inputID: Z.id,
                inputType: Z.strItemType,
                fallbackUrl: K,
              })
            : (0, dt.Pm)(K, L?.event);
        }
        function vr(K) {
          const {
              inputID: L,
              inputType: Z,
              eventModel: re,
              fallbackUrl: fe,
            } = K,
            ge = (0, lr.dE)(L, Z),
            { data: je } = (0, ar.J$)(ge);
          let Re;
          if (!re || !(0, Dt.y)(re)) Re = !0;
          else if (je) {
            const pt = je.appid ? [je.appid] : (je.included_appids ?? []);
            Re = (0, Dt.aY)(re, pt);
          }
          return Re === void 0
            ? null
            : Re
              ? (0, n.jsx)(er.e, {
                  id: L,
                  inputType: Z,
                  bApplyUserContentPref: !0,
                })
              : (0, dt.Pm)(fe, re);
        }
        function hr(K, L) {
          if ((0, Wt.j7)(K)) {
            const Z = new RegExp(Xt).exec(K);
            if (Z && Z.length > 1) {
              const re = Number(Z[1]);
              if (re > 0)
                return (0, n.jsx)("div", {
                  className: (0, pe.A)(Ft.LoyaltyRewardCtn),
                  children: (0, n.jsx)(sr, { defid: re, url: K }),
                });
            }
          }
          return (0, dt.Pm)(K, L?.event);
        }
        function br(K, L) {
          if ((0, Wt.j7)(K)) {
            let Z = new RegExp(Nt).exec(K);
            if (Z && Z.length > 2) {
              let re, fe, ge, je;
              Z[1] == "gid"
                ? (fe = new lt.b(Z[2]))
                : Z[1] == "groups"
                  ? (je = Z[2])
                  : isNaN(+Z[2])
                    ? (ge = Z[2])
                    : ((re = Number(Z[2])),
                      (re =
                        !L || ((0, Dt.y)(L.event) && (0, Dt.aY)(L.event, [re]))
                          ? re
                          : 0));
              const Re = Z[3];
              if (
                ((re !== void 0 && re > 0) ||
                  ge !== void 0 ||
                  je !== void 0 ||
                  fe !== void 0) &&
                Re != null &&
                Re.length > 0
              )
                return (0, n.jsx)(J.q, {
                  appid: re,
                  clanSteamID: fe,
                  strVanity: ge,
                  strGroupVanity: je,
                  announcementGID: Re,
                  strURL: K,
                });
            }
          }
          return (0, dt.Pm)(K, L?.event);
        }
        function jr(K, L) {
          return (0, y.Y2)() ? null : Vt(K, (0, n.jsx)(ve.KKS, {}), "@", L);
        }
        function Er(K, L) {
          return (0, y.Y2)() ? null : Vt(K, (0, n.jsx)(ve.KKS, {}), "#", L);
        }
        function zr(K, L) {
          return (0, y.Y2)() ? null : Vt(K, (0, n.jsx)(ve.qcc, {}), void 0, L);
        }
        function wr(K, L) {
          return Vt(K, (0, n.jsx)(ve.Qte, {}), void 0, L);
        }
        function Vt(K, L, Z, re) {
          let fe;
          const ge = K.endsWith("/") ? K.length - 1 : K.length,
            je = K.lastIndexOf("/", ge - 1);
          je != -1 && je + 1 < K.length && (fe = K.substring(je + 1, ge)),
            Z && fe && (fe = Z + fe);
          const Re = (0, dt.Pm)(K, re?.event, fe ?? K);
          return (0, n.jsxs)("div", {
            className: Ft.SocialLink,
            children: [
              (0, n.jsx)("div", { className: Ft.SocialIcon, children: L }),
              Re,
            ],
          });
        }
        function xr(K) {
          return (0, n.jsx)(dr, { children: (0, n.jsx)(ut.Zn, { ...K }) });
        }
        function Tr(K) {
          return jsx(dr, { children: jsx(EventBBDisplayElement, { ...K }) });
        }
        function dr(K) {
          return (0, n.jsx)(ut.d3, {
            dictionary: Be(),
            children: (0, n.jsx)(ot.Rh, {
              linkWidgets: Jt(),
              children: K.children,
            }),
          });
        }
      },
      13600: (we, ye, s) => {
        "use strict";
        s.d(ye, { V6: () => y, VF: () => D, j7: () => p });
        var n = s(7850),
          b = s(72609),
          m = s(95535),
          a = s(10349),
          t = s(77356),
          i = s(53113);
        const D =
            /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
          f = ["store.steampowered.com", "store.steamchina.com"],
          O = ["steampowered.com", "steamcommunity.com"],
          A = ["steamchina.com"],
          M = ["steam.dev", "valve.org"];
        function W($, X) {
          return X.some((H) => $ == H || $.endsWith(`.${H}`));
        }
        function p($) {
          const X = (0, i.wm)($).toLocaleLowerCase(),
            H = (0, i.wm)(b.TS.STORE_BASE_URL).toLocaleLowerCase(),
            F = (0, i.wm)(b.TS.COMMUNITY_BASE_URL).toLocaleLowerCase();
          return X == H || X == F
            ? !0
            : f.includes(H)
              ? W(X, W(H, A) ? A : O)
              : W(X, [...O, ...A, ...M]);
        }
        function y($) {
          if (p($)) return x($);
        }
        function x($) {
          const X = new RegExp(D).exec($);
          if (!X || X.length <= 2) return;
          const H = X[1].toLowerCase(),
            F = Number(X[2]);
          if (!(!(F > 0) || !(0, a.nB)(H)))
            return {
              id: F,
              strItemType: H,
              storeItemKey:
                H == "sub"
                  ? { packageid: F }
                  : H == "bundle"
                    ? { bundleid: F }
                    : { appid: F },
            };
        }
        function U($) {
          const X = [],
            H = new Set();
          for (const F of $.matchAll(new RegExp(D, "gi"))) {
            const j = x(F[0]);
            j &&
              !H.has(`${j.strItemType}/${j.id}`) &&
              (H.add(`${j.strItemType}/${j.id}`), X.push(j));
          }
          return X;
        }
        function T($, X) {
          const H = y($);
          return H
            ? jsx(StoreCapsuleForEventDescription, {
                id: H.id,
                inputType: H.strItemType,
                bApplyUserContentPref: !0,
              })
            : LinkFilter($, X?.event);
        }
        let P = null;
        function E() {
          return (
            P == null && (P = [{ urlRegExp: new RegExp(D), fnBBComponent: T }]),
            P
          );
        }
      },
      77356: (we, ye, s) => {
        "use strict";
        s.d(ye, { e: () => M });
        var n = s(7850),
          b = s(56062),
          m = s(72609),
          a = s(40358),
          t = s(88743),
          i = s(36707),
          D = s(18210),
          f = s(64502),
          O = s.n(f),
          A = s(40232);
        function M(W) {
          const { inputType: p, id: y, bApplyUserContentPref: x } = W,
            U = p == "bundle" ? "bundle" : p == "sub" ? "sub" : "game",
            T = (0, t.zl)(y, U),
            { data: P } = (0, a.J$)(T),
            { data: E, isPending: $ } = (0, a.Ij)(x ? T : void 0);
          if (!P) return null;
          if (x) {
            if ($) return null;
            if (E?.filter_failure == b.hQ.Zy || E?.filter_failure == b.hQ.ir) {
              let X = "#StoreCapsule_App_Excluded";
              switch (p) {
                case "sub":
                  X = "#StoreCapsule_Package_Excluded";
                  break;
                case "bundle":
                  X = "#StoreCapsule_Bundle_Excluded";
                  break;
              }
              return (0, n.jsx)("div", {
                className: (0, i.A)(
                  f.AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, D.oW)(
                  X,
                  (0, n.jsx)("a", {
                    href: m.TS.STORE_BASE_URL + "account/preferences/",
                  }),
                ),
              });
            }
          }
          return (0, n.jsx)("div", {
            className: (0, i.A)(f.AppSummaryWidgetCtn, "AppSummaryWidgetCtn"),
            children: (0, n.jsx)(A.p, {
              id: y,
              type: U,
              bShowDemoButton: P.type == b.uE.ue,
              bAllowTwoLinesForHeader: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
      },
      42184: (we, ye, s) => {
        "use strict";
        s.d(ye, { v: () => i });
        var n = s(7850),
          b = s(33752),
          m = s(36707),
          a = s(17009),
          t = s.n(a);
        function i(D) {
          return (0, n.jsx)("div", {
            className: (0, m.A)(
              t().AppPartnerEventsBanner,
              "AppPartnerEventsBanner",
            ),
            children: (0, n.jsx)(b.W, { ...D }),
          });
        }
      },
      43193: (we, ye, s) => {
        "use strict";
        s.d(ye, { y: () => xe, j: () => V });
        var n = s(7850),
          b = s(75844),
          m = s(90626),
          a = s(99412),
          t = s(72609),
          i = s(49789),
          D = s(48421),
          f = s(813),
          O = s(63694),
          A = s(7582),
          M = s(7638),
          W = s(96538),
          p = s(88003),
          y = s(18210),
          x = s(56492),
          U = s(16346),
          T = s(40650),
          P = s(16412),
          E = s(72429),
          $ = s(36118),
          X = s(85599),
          H = s(71421),
          F = s(36707),
          j = s(36174),
          o = s(53113),
          d = s(6878),
          h = s.n(d),
          u = s(1078),
          g = s(95695);
        function w(se) {
          return (
            (se.bHasVerifiedEmail && se.bFollowsByEmail) ||
            (se.bHasPushNotification && se.bFollowsByPush)
          );
        }
        function te(se) {
          const {
              eventModel: oe,
              rtNow: ze,
              notifyState: We,
              bOnlyShowIcon: Se,
              renderPanel: Ae,
              onRequestSignIn: he,
              bSignedIn: Ie,
              onTrack: Fe,
            } = se,
            [Le, $e] = m.useState(!1),
            Qe = m.useRef(null),
            mt = m.useRef(null),
            Ye = m.useCallback(() => {
              mt.current?.Hide(), $e(!1);
            }, []),
            _e = () => {
              const ct = {
                bOverlapHorizontal: !0,
                bOverlapVertical: !0,
                bDisablePopTop: !0,
                bMatchWidth: !0,
                strClassName: (0, F.A)(
                  u.ReminderDialog,
                  u.ReminderOptions,
                  T.contextMenu,
                ),
              };
              (mt.current = (0, U.lX)(Ae(Ye), Qe.current, ct)),
                mt.current.SetOnHideCallback(Ye),
                $e(!0),
                Fe?.("opened");
            },
            st = (ct) => {
              if (!Ie) {
                he?.();
                return;
              }
              Le ? Ye() : _e(), ct.stopPropagation(), ct.preventDefault();
            },
            qe = Se && !Le,
            Ce = w(We);
          return (oe.startTime !== void 0 && oe.startTime < ze) ||
            oe.BIsUnlistedEvent()
            ? null
            : (0, n.jsxs)("div", {
                className: (0, F.A)({
                  [u.ReminderCheckBox]: !0,
                  [h().ReminderCtn]: !0,
                  [u.IconMode]: qe,
                  [u.TextMode]: !qe,
                  ReminderSet: Ce,
                  RemindMeWidget: !0,
                }),
                onClick: st,
                ref: Qe,
                children: [
                  Ce &&
                    (0, n.jsx)("div", {
                      className: u.RemindCheck,
                      children: (0, n.jsx)($.Jlk, {}),
                    }),
                  qe &&
                    (0, n.jsx)("div", {
                      className: u.RemindBell,
                      children: (0, n.jsx)($.IrQ, {}),
                    }),
                  (0, n.jsx)("div", {
                    className: u.ReminderDefault,
                    children: (0, y.we)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, n.jsx)("div", { className: u.ReminderOptions }),
                ],
              });
        }
        function I(se) {
          const {
              eventModel: oe,
              lang: ze,
              rtNow: We,
              notifyState: Se,
              bShowStartTime: Ae,
              bExpandLeft: he,
              bOnlyShowIcon: Ie,
              strCalendarEventTitle: Fe,
              onChangeNotify: Le,
              onTrack: $e,
              fnHidePanel: Qe,
            } = se,
            [mt, Ye] = m.useState(!1),
            _e = async (He, Ge) => {
              if (!(!oe.GID || oe.GID == a.kFb)) {
                Ye(!0);
                try {
                  await Le(He, Ge),
                    He && $e?.(Ge == "email" ? "notify-email" : "notify-push");
                } catch (ne) {
                  (0, p.HT)(
                    (0, n.jsx)(W.KG, {
                      strTitle: (0, y.we)(
                        "#EventDisplay_Reminder_FollowEvent_Error",
                      ),
                      strDescription: (0, y.we)(
                        "#EventDisplay_Reminder_FollowEvent_ErrorDesc",
                      ),
                      children: ne instanceof Error ? ne.message : String(ne),
                    }),
                    window,
                  );
                }
                Ye(!1);
              }
            },
            st = oe.jsondata.bSaleEnabled
              ? x.PH.k_eStoreSalePage
              : x.PH.k_eStoreView,
            qe = (0, x.Bw)(oe, st, "forceAbsolute"),
            Ce = () => {
              let He = oe.GetSubTitleWithLanguageFallback(ze);
              He = He
                ? `${He}


`
                : "";
              const Ge = oe.GetSummaryWithFallback(ze);
              return `${He}${Ge}

${qe}`;
            },
            rt = () => {
              const He = encodeURIComponent(Fe),
                Ge = encodeURIComponent(Ce()),
                ne = oe.GetStartTimeAndDateUnixSeconds(),
                N = z(ne),
                Y = oe.GetEndTimeAndDateUnixSeconds() || ne + j.Kp.PerHour,
                r = z(Y),
                c =
                  (t.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                  `https://calendar.google.com/calendar/r/eventedit?text=${He}&details=${Ge}&dates=${N}/${r}`;
              return (0, o.k2)(c);
            },
            ct = (He) => {
              const Ge = oe.appid
                  ? "app/" + oe.appid
                  : "group/" + oe.clanSteamID.GetAccountID(),
                ne = "l=" + (0, a.LgB)(ze);
              return `${t.TS.STORE_BASE_URL}${(0, x.LJ)()}/download/${Ge}/${He}/${oe.GID}?${ne}`;
            },
            {
              bHasVerifiedEmail: et,
              bHasPushNotification: ft,
              bFollowsByEmail: Ze,
              bFollowsByPush: lt,
            } = Se,
            tt = !1,
            yt = Ae && oe.GetStartTimeAndDateUnixSeconds();
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsxs)("div", {
                className: (0, F.A)(
                  u.ReminderCheckBox,
                  Ie ? u.IconMode : u.TextMode,
                  "RemindMeWidget",
                ),
                onClick: Qe,
                children: [
                  w(Se) &&
                    (0, n.jsx)("div", {
                      className: u.RemindCheck,
                      children: (0, n.jsx)($.Jlk, {}),
                    }),
                  Ie &&
                    (0, n.jsx)("div", {
                      className: u.RemindBell,
                      children: (0, n.jsx)($.IrQ, {}),
                    }),
                  (0, n.jsx)("div", {
                    className: u.ReminderDefault,
                    children: (0, y.we)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, n.jsx)("div", { className: u.ReminderOpennedOptions }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: (0, F.A)(
                  u.FlexColumnContainer,
                  u.ReminderBackground,
                  he && u.ReminderExpandsLeft,
                ),
                children: [
                  mt &&
                    (0, n.jsx)(X.t, {
                      className: u.RpcThrobber,
                      size: "xlarge",
                      position: "center",
                    }),
                  yt &&
                    (0, n.jsx)("div", {
                      className: u.FullStartTime,
                      children: (0, y.PP)(
                        "#EventDisplay_EventUpcoming_WithDateAndTime",
                        (0, y.TW)(
                          yt,
                          (0, j.Ct)(new Date(yt * 1e3), new Date(We * 1e3)),
                        ),
                        (0, E.yi)(yt, !0),
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className: u.ReminderOptionsHeader,
                    children: (0, y.we)(
                      "#EventDisplay_Reminder_GetNotification_Via",
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, F.A)(u.ReminderOption, !et && u.Unverified),
                    children: [
                      (0, n.jsx)(H.he, {
                        className: u.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, y.we)(
                          et
                            ? "#EventReminder_NotifyByEmail_ttip"
                            : "#EventReminder_NotifyByEmail_Missing",
                        ),
                        children: (0, n.jsx)(P.Yh, {
                          label: (0, y.we)("#EventDisplay_Reminder_ViaEmail"),
                          disabled: !et,
                          checked: Ze,
                          onChange: (He) => _e(He, "email"),
                        }),
                      }),
                      !et &&
                        (0, n.jsx)("div", {
                          className: g.FlexColumnContainer,
                          children: (0, n.jsx)("a", {
                            href: t.TS.STORE_BASE_URL + "account/",
                            target: t.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => $e?.("email-unverified"),
                            children: (0, y.we)(
                              "#EventReminder_NotifyByEmail_Missing_Add",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, F.A)(u.ReminderOption, !ft && u.Unverified),
                    children: [
                      (0, n.jsx)(H.he, {
                        className: u.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, y.we)(
                          ft
                            ? "#EventReminder_NotifyByMobile_ttip"
                            : "#EventReminder_NotifyByMobile_Missing",
                        ),
                        children: (0, n.jsx)(P.Yh, {
                          label: (0, y.we)(
                            "#EventDisplay_Reminder_ViaMobileApp",
                          ),
                          disabled: !ft,
                          checked: lt,
                          onChange: (He) => _e(He, "push"),
                        }),
                      }),
                      !ft &&
                        (0, n.jsx)("div", {
                          className: g.FlexColumnContainer,
                          children: (0, n.jsx)("a", {
                            href: t.TS.STORE_BASE_URL + "mobile/?show=steamapp",
                            target: t.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => $e?.("push-missing"),
                            children: (0, y.we)(
                              "#EventReminder_NotifyByMobile_Install",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, n.jsxs)(m.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: u.ReminderOptionsHeader,
                        children: (0, y.we)(
                          "#EventDisplay_Reminder_AddToCalendar",
                        ),
                      }),
                      (0, n.jsxs)("div", {
                        className: u.ReminderCalendarOptions,
                        children: [
                          (0, n.jsx)("a", {
                            className: u.ReminderOption,
                            href: ct("ics"),
                            onClick: () => $e?.("calendar-apple"),
                            children: (0, y.we)(
                              "#EventDisplay_Reminder_AppleCalendar_Short",
                            ),
                          }),
                          (0, n.jsx)("a", {
                            className: u.ReminderOption,
                            target: t.TS.IN_CLIENT ? void 0 : "_blank",
                            href: rt(),
                            onClick: () => $e?.("calendar-google"),
                            children: (0, y.we)(
                              "#EventDisplay_Reminder_GoogleCalendar_Short",
                            ),
                          }),
                          (0, n.jsx)("a", {
                            className: u.ReminderOption,
                            href: ct("outlook"),
                            onClick: () => $e?.("calendar-outlook"),
                            children: (0, y.we)(
                              "#EventDisplay_Reminder_OutlookCalendar_Short",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  tt &&
                    (0, n.jsx)("div", {
                      className: (0, F.A)(u.ReminderSettings, u.ReminderOption),
                      children: (0, y.we)("#EventDisplay_Reminder_Preferences"),
                    }),
                ],
              }),
            ],
          });
        }
        function z(se) {
          return new Date(se * 1e3)
            .toISOString()
            .replace(/[-:]/g, "")
            .replace(/\.\d{3}Z$/, "Z");
        }
        var _ = s(26589),
          me = s(80902),
          G = s(67705);
        const B = "notificationaction/usercontactmethods";
        async function R() {
          const se = t.TS.STORE_BASE_URL + B,
            oe = await fetch(se, { credentials: "include" });
          if (!oe.ok) throw new Error(`${se} answered ${oe.status}`);
          return await oe.json();
        }
        const ue = { bHasValidatedEmail: !1, bHasPushNotification: !1 };
        function be() {
          const { data: se } = (0, me.I)(Q());
          return se ?? ue;
        }
        function C(se) {
          return ["useUserContactMethods", se];
        }
        function Q() {
          return {
            queryKey: C(t.iA.accountid),
            queryFn: R,
            enabled: !!t.iA.logged_in,
            initialData: () => {
              const se = (0, G.Fd)("notificationstore", "application_config");
              return ae(se) ? le(se) : void 0;
            },
          };
        }
        function le(se) {
          return {
            bHasValidatedEmail: !!se.email_validated,
            bHasPushNotification: (se.mobile_device_count ?? 0) > 0,
          };
        }
        function ae(se) {
          const oe = se;
          return (
            !!oe &&
            typeof oe == "object" &&
            typeof oe.mobile_device_count == "number"
          );
        }
        var ve = s(68312),
          Ee = s(75233),
          Pe = s(76559),
          Te = s(57698);
        function pe(se, oe) {
          const ze = (0, Ee.jE)(),
            We = (0, ve.KV)(),
            { data: Se } = (0, me.I)((0, _.g)(se, ze, We)),
            Ae = be(),
            he = ie(Se, oe);
          return {
            bHasVerifiedEmail: Ae.bHasValidatedEmail,
            bHasPushNotification: Ae.bHasPushNotification,
            bFollowsByEmail: (he & Te.N.k_ENotifyFlagByEmail) != 0,
            bFollowsByPush: (he & Te.N.k_ENotifyFlagByPush) != 0,
          };
        }
        function ee(se, oe) {
          const ze = (0, Ee.jE)(),
            We = (0, ve.KV)(),
            Se = (0, _.g)(se, ze, We);
          return async (Ae, he) => {
            if (!oe) return;
            const Ie = ze.getQueryData(Se.queryKey),
              Fe =
                he == "email"
                  ? Te.N.k_ENotifyFlagByEmail
                  : Te.N.k_ENotifyFlagByPush,
              Le = ie(Ie, oe),
              $e = Ae ? Le | Fe : Le & ~Fe;
            await v(se, oe, $e),
              await ze.invalidateQueries({ queryKey: Se.queryKey });
          };
        }
        function ie(se, oe) {
          const ze = oe ? (se?.event_followed?.indexOf(oe) ?? -1) : -1;
          return ze == -1 ? 0 : (se?.event_followed_flags?.[ze] ?? 0);
        }
        async function v(se, oe, ze) {
          const We = ze == 0,
            Ae = `${`${t.TS.STORE_BASE_URL}events/`}${We ? "unfolloworunignoreevent" : "followorignoreevent"}`,
            he = new URLSearchParams();
          he.append("sessionid", (0, G.KC)()),
            he.append("ignore", "false"),
            he.append("gid", oe),
            he.append("notification_flag", "" + ze),
            he.append("clan_accountid", "" + se);
          const Ie = await fetch(Ae, {
            method: "POST",
            body: he,
            credentials: "include",
          });
          if (!Ie.ok) throw new Error(`${Ae} answered ${Ie.status}`);
        }
        var k = s(39256),
          q = s(47875);
        const V = (0, b.PA)((se) => {
            const {
                eventModel: oe,
                lang: ze,
                bShowStartTime: We,
                bExpandLeft: Se,
                bOnlyShowIcon: Ae,
              } = se,
              he = pe(oe.clanSteamID.GetAccountID(), oe.GID);
            m.useEffect(() => {
              !oe.appid &&
                oe.clanSteamID &&
                f.ac.LoadClanInfoForClanSteamID(oe.clanSteamID);
            }, [oe]);
            const Ie = M.KN.Get().BIsUserLoggedIn(),
              Fe = () => {
                (0, p.pg)(
                  (0, n.jsx)(W.o0, {
                    strTitle: (0, y.we)("#EventDisplay_Share_NotLoggedIn"),
                    strDescription: (0, y.we)(
                      "#EventDisplay_Share_NotLoggedIn_Description",
                    ),
                    strOKButtonText: (0, y.we)("#MobileLogin_SignIn"),
                    onOK: () => (0, q.l)(),
                  }),
                  window,
                );
              };
            return (0, n.jsx)(te, {
              eventModel: oe,
              rtNow: (0, A.sB)(),
              notifyState: he,
              bOnlyShowIcon: Ae,
              bSignedIn: Ie || t.TS.IN_CLIENT,
              onRequestSignIn: Fe,
              onTrack: (Le) => de(oe, Le),
              renderPanel: (Le) =>
                (0, n.jsx)(ce, {
                  eventModel: oe,
                  lang: ze,
                  bShowStartTime: We,
                  bExpandLeft: Se,
                  bOnlyShowIcon: Ae,
                  fnHidePanel: Le,
                }),
            });
          }),
          ce = (0, b.PA)((se) => {
            const {
                eventModel: oe,
                lang: ze,
                bShowStartTime: We,
                bExpandLeft: Se,
                bOnlyShowIcon: Ae,
                fnHidePanel: he,
              } = se,
              Ie = oe.clanSteamID.GetAccountID(),
              Fe = pe(Ie, oe.GID),
              Le = ee(Ie, oe.GID);
            return (0, n.jsx)(I, {
              eventModel: oe,
              lang: ze,
              rtNow: (0, A.sB)(),
              notifyState: Fe,
              bShowStartTime: We,
              bExpandLeft: Se,
              bOnlyShowIcon: Ae,
              strCalendarEventTitle: Me(oe, ze),
              onChangeNotify: Le,
              onTrack: ($e) => de(oe, $e),
              fnHidePanel: he,
            });
          });
        function Me(se, oe) {
          const ze = se.GetNameWithFallback(oe) ?? "";
          return i.NK.BHasEntityNameForID(
            se.appid,
            se.clanSteamID.GetAccountID(),
          )
            ? `${i.NK.GetEntityNameForID(se.appid, se.clanSteamID.GetAccountID())}: ${ze}`
            : ze;
        }
        function de(se, oe) {
          const ze = {
            opened: O.E.k_eReminder_Opened,
            "notify-email": O.E.k_eReminder_Email,
            "notify-push": O.E.k_eReminder_MobilePush,
            "email-unverified": O.E.k_eReminder_EmailUnverified,
            "push-missing": O.E.k_eReminder_MobilePushMissing,
            "calendar-apple": O.E.k_eReminder_CalendarApple,
            "calendar-google": O.E.k_eReminder_CalendarGoogle,
            "calendar-outlook": O.E.k_eReminder_CalendarOutlook,
          };
          O.V.RecordAppInteractionEvent(se.appid, ze[oe]);
        }
        function xe(se) {
          const { bPreviewMode: oe, eventGID: ze, ...We } = se,
            Se = (0, D.RR)(ze);
          if (!Se)
            return oe
              ? (0, n.jsx)("div", {
                  className: k.ErrorDiv,
                  children: (0, y.we)(
                    "#EventDidplay_Reminder_EventNotVisible",
                    ze,
                  ),
                })
              : null;
          const Ae = (0, a.sfN)(t.TS.LANGUAGE);
          return (0, n.jsx)(V, { lang: Ae, ...We, eventModel: Se });
        }
      },
      86866: (we, ye, s) => {
        "use strict";
        s.d(ye, { n: () => i });
        var n = s(7850),
          b = s(90626),
          m = s(88034);
        const a = b.createContext(void 0);
        function t(D) {
          const [f, O] = React.useState(D.rtServerNow),
            A = !!D.bHoldSeed;
          return (
            React.useEffect(() => {
              A || O(void 0);
            }, [A]),
            jsx(a.Provider, { value: f, children: D.children })
          );
        }
        function i() {
          return b.useContext(a) ?? (0, m.Gw)();
        }
      },
      65316: (we, ye, s) => {
        "use strict";
        s.d(ye, { P6: () => $, Pc: () => X, rg: () => P });
        var n = s(7850),
          b = s(25046),
          m = s(29522),
          a = s(40358),
          t = s(64271),
          i = s(90626),
          D = s(67523),
          f = s.n(D),
          O = s(36118),
          A = s(36707),
          M = s(18210),
          W = s(85599),
          p = s(77078),
          y = s.n(p),
          x = s(10452),
          U = s(91970),
          T = s.n(U),
          P = ((F) => (
            (F.k_TrailerAsButton = "button"),
            (F.k_TrailerAsPill = "pill"),
            (F.k_TrailerAsFull = "full"),
            (F.k_TrailerAsPoster = "poster"),
            (F.k_TrailerAsMicro = "micro"),
            F
          ))(P || {});
        const E = { include_trailers: !0, include_assets: !0 };
        function $(F) {
          const {
              embedStyle: j,
              appid: o,
              color: d,
              bgcolor: h,
              children: u,
              trailerBaseID: g,
              subtitles: w,
            } = F,
            [te, I] = (0, i.useState)(!1),
            z = (0, i.useMemo)(() => ({ appid: o }), [o]);
          switch (j) {
            case "button":
            case "pill":
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("div", {
                    className: (0, A.A)({
                      [y().Pill]: j == "pill",
                      [y().Button]: j == "button",
                    }),
                    onClick: () => I(!0),
                    style: { color: d, backgroundColor: h },
                    children: [
                      (0, n.jsx)(O.jGG, {}),
                      u || (0, M.we)("#EventEmail_WatchNow"),
                    ],
                  }),
                  (0, n.jsx)(x.PE, {
                    id: z,
                    bShowModal: te,
                    trailerBaseID: g,
                    hideModal: () => I(!1),
                  }),
                ],
              });
            default:
            case "full":
              return (0, n.jsx)(X, { ...F });
          }
        }
        function X(F) {
          const { appid: j, trailerBaseID: o } = F,
            d = (0, m.$5)(j),
            { data: h } = (0, a.J$)(d),
            [u, g] = (0, i.useState)(() =>
              !j || !o ? (0, M.we)("#TrailerPlayer_ID_NotProvided") : null,
            ),
            w = (0, b.kB)(d),
            te = (0, i.useMemo)(
              () => (w ? w.find((I) => I.trailer_base_id === o) : null),
              [w, o],
            );
          return (
            (0, i.useEffect)(() => {
              h?.unvailable_for_country_restriction &&
                g((0, M.we)("#TrailerPlayer_CouldNotLoad", j, o)),
                w &&
                  !te &&
                  g(
                    (0, M.we)(
                      "#TrailerPlayer_CouldNotLoad",
                      F.appid,
                      F.trailerBaseID,
                    ),
                  );
            }, [
              j,
              F.appid,
              F.trailerBaseID,
              h?.unvailable_for_country_restriction,
              o,
              te,
              w,
            ]),
            u
              ? F.bIsPreviewMode
                ? (0, n.jsx)("div", { className: f().ErrorDiv, children: u })
                : null
              : te
                ? (0, n.jsx)(H, { trailerToPlay: te })
                : (0, n.jsx)(W.t, {
                    string: (0, M.we)("#Loading"),
                    size: "small",
                  })
          );
        }
        function H(F) {
          const { trailerToPlay: j } = F,
            {
              rgDashTrailers: o,
              rgHlsTrailers: d,
              strCaptionManufest: h,
            } = (0, i.useMemo)(() => {
              const { rgDashTrailers: u, rgHlsTrailers: g } = (0, b.hg)(j),
                w = (0, b.Wv)(j);
              return {
                rgDashTrailers: u,
                rgHlsTrailers: g,
                strCaptionManufest: w,
              };
            }, [j]);
          return o?.length == 0
            ? null
            : (0, n.jsx)("div", {
                className: T().VideoPopupContainers,
                children: (0, n.jsx)(t.P, {
                  dashManifests: o || [],
                  hlsManifest: (d.length > 0 && d?.[0]) || "",
                  screenshot: (0, b.hl)(j),
                  altText: j.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: h,
                }),
              });
        }
      },
      67598: (we, ye, s) => {
        "use strict";
        s.r(ye),
          s.d(ye, {
            EventDisplaySteamAwardNomination: () => pe,
            UserEligibleToNominateOrVote: () => le,
            WinterSaleSteamAwardVoteWrapper: () => ee,
            default: () => ie,
          });
        var n = s(7850),
          b = s(72604),
          m = s(99412),
          a = s(90908),
          t = s(64868),
          i = s(72609),
          D = s(89926),
          f = s(39905),
          O = s(40358),
          A = s(21721),
          M = s(1880),
          W = s(69168),
          p = s(12247),
          y = s.n(p),
          x = s(95695),
          U = s.n(x),
          T = s(85599),
          P = s(36707);
        function E(v) {
          return `${i.TS.MEDIA_CDN_URL}${a.bs}${v}`;
        }
        function $(v) {
          const {
              strMainTitle: k,
              subtitle: q,
              headerText: V,
              headerContent: ce,
              children: Me,
              footer: de,
            } = v,
            xe = {
              backgroundColor: a.TY,
              backgroundImage: `url( ${E("header_notrophy.webp")} )`,
              color: a.m1,
            };
          return (0, n.jsxs)("div", {
            style: xe,
            className: (0, P.A)(y().SteamAwardContainer, U().PartnerEventFont),
            children: [
              (0, n.jsxs)("div", {
                className: y().SteamAwardHeader,
                children: [
                  (0, n.jsx)("img", {
                    className: y().SteamAwardHeaderImage,
                    src: E("trophy_220.png?v=1"),
                    alt: "",
                  }),
                  (0, n.jsxs)("div", {
                    className: y().SteamAwardMainCtn,
                    children: [
                      (0, n.jsx)("div", {
                        className: y().SteamAwardMainTitle,
                        children: k,
                      }),
                      q,
                      (0, n.jsx)("div", {
                        className: y().SteamAwardHeaderText,
                        children: V,
                      }),
                      ce,
                    ],
                  }),
                ],
              }),
              Me,
              !!de &&
                (0, n.jsx)("div", {
                  className: y().SteamAwardLinkToNominationPage,
                  children: de,
                }),
            ],
          });
        }
        function X(v) {
          return `${i.TS.STORE_BASE_URL}steamawards/${v ? "nominations/" : ""}`;
        }
        function H() {
          return (0, n.jsx)(T.t, {
            className: y().SteamAwardContainer,
            size: "medium",
            position: "center",
            string: f.Z.Localize("#Loading"),
          });
        }
        function F(v) {
          const { elDialogElement: k, fnShowLogonDialog: q } = (0, D.l)(),
            [V, ce, Me] = (0, t.uD)();
          return {
            elDialogElement: (0, n.jsxs)(n.Fragment, {
              children: [
                k,
                (0, n.jsx)(W.E, {
                  active: V,
                  children: (0, n.jsx)(j, { bVote: v, closeModal: Me }),
                }),
              ],
            }),
            BCanTakeAction: () =>
              i.iA.logged_in ? (i.iA.is_limited ? (ce(), !1) : !0) : (q(), !1),
          };
        }
        function j(v) {
          const { bVote: k, closeModal: q } = v;
          return (0, n.jsx)(M.o0, {
            strTitle: f.Z.Localize("#Informational_Message"),
            onCancel: q,
            onOK: q,
            bAlertDialog: !0,
            children: (0, n.jsx)("div", {
              children: f.Z.LocalizeReact(
                k
                  ? "#SteamAward_Vote_LimitedAccount"
                  : "#SteamAward_Nominate_LimitedAccount",
                (0, n.jsx)("a", {
                  href: `${i.TS.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
                  target: i.TS.IN_CLIENT ? void 0 : "_blank",
                  rel: "noreferrer",
                  children: f.Z.Localize("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        }
        function o(v) {
          const {
              strLocTokenInfix: k,
              unCurrentAppID: q,
              unNewAppID: V,
              fnOnConfirm: ce,
              closeModal: Me,
            } = v,
            { data: de } = (0, O.J$)({ appid: q }),
            { data: xe } = (0, O.J$)({ appid: V }),
            { data: se } = (0, O.lv)({ appid: q }),
            { data: oe } = (0, O.lv)({ appid: V }),
            ze = se ? (0, A.b0)(se, "small_capsule") : void 0,
            We = oe ? (0, A.b0)(oe, "small_capsule") : void 0;
          return (0, n.jsx)(M.o0, {
            modalClassName: y().SteamAwardConflictModal,
            strTitle: f.Z.Localize(
              k == "Vote"
                ? "#SteamAward_VoteConflictWarning_Title"
                : "#SteamAward_NominationConflictWarning_Title",
            ),
            closeModal: Me,
            onOK: ce,
            onCancel: Me,
            children: (0, n.jsxs)("div", {
              className: y().ConflictBody,
              children: [
                f.Z.LocalizeReact(
                  k == "Vote"
                    ? "#SteamAward_VoteConflictWarning_Explanation"
                    : "#SteamAward_NominationConflictWarning_Explanation",
                  (0, n.jsx)("span", {
                    className: y().SteamAwardModalGameTitle,
                    children: de?.name,
                  }),
                  (0, n.jsx)("span", {
                    className: y().SteamAwardModalGameTitle,
                    children: xe?.name,
                  }),
                ),
                ze && We
                  ? (0, n.jsxs)("div", {
                      className: y().NominationSwitchCtn,
                      children: [
                        (0, n.jsx)("img", { src: ze, alt: "" }),
                        "\u2192",
                        (0, n.jsx)("img", { src: We, alt: "" }),
                      ],
                    })
                  : (0, n.jsx)(T.t, {
                      size: "small",
                      position: "center",
                      string: f.Z.Localize("#Loading"),
                    }),
              ],
            }),
          });
        }
        var d = s(16412),
          h = s(53113);
        function u(v) {
          const { unAppID: k, widget: q, actions: V, bNominationsOpen: ce } = v,
            Me = q.rgCategories[0],
            { data: de } = (0, O.J$)({ appid: k }),
            {
              unNominatedAppID: xe,
              bAnswered: se,
              Nominate: oe,
            } = (0, a.Xx)(Me.eCategoryID, V),
            { elDialogElement: ze, BCanTakeAction: We } = F(!1),
            [Se, Ae, he] = (0, t.uD)();
          if (!q.bNominationsLive) return null;
          if (!se) return (0, n.jsx)(H, {});
          const Ie = (0, h.NT)(X(!0)),
            Fe = xe == k,
            Le = q.rgCategories.length == 1,
            $e = ce && !Me.bLaborOfLove,
            Qe = (mt) => {
              if (!(!mt || !We())) {
                if (xe && xe != k) {
                  Ae();
                  return;
                }
                oe(k);
              }
            };
          return (0, n.jsxs)($, {
            strMainTitle: f.Z.Localize("#SteamAwards_EventMainTitle"),
            subtitle: (0, n.jsxs)("div", {
              className: y().SteamAwardSubTitle,
              children: [
                ce
                  ? f.Z.Localize("#SteamAwards_EventCallToAction")
                  : f.Z.Localize("#SteamAwards_EventVotingDateTeaser", a.yx),
                ce &&
                  (0, n.jsxs)("a", {
                    href: Ie,
                    className: y().SteamAwardLearnMore,
                    children: [
                      "(",
                      f.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
                      ")",
                    ],
                  }),
              ],
            }),
            headerText: ce
              ? Le
                ? f.Z.Localize(
                    "#SteamAwards_EventNominateGamePrompt_Long",
                    de?.name ?? "",
                  )
                : (0, n.jsx)("a", {
                    className: y().LinkText,
                    href: Ie,
                    children: f.Z.Localize(
                      "#SteamAwards_EventNominateGamePrompt_NoCategory",
                      de?.name ?? "",
                    ),
                  })
              : f.Z.Localize("#SteamAwards_Event_NominationsClosed"),
            footer:
              $e &&
              (0, n.jsx)("a", {
                href: Ie,
                children: f.Z.Localize(
                  "#SteamAwards_EventNominationAlternativeLinkText",
                ),
              }),
            children: [
              !!(Le && (ce || Fe)) &&
                (0, n.jsx)("div", {
                  className: (0, P.A)(
                    y().SteamAwardNominationWidget,
                    y().SteamAwardVoteWidget,
                  ),
                  children: (0, n.jsxs)("div", {
                    className: y().NominateCtn,
                    children: [
                      (0, n.jsx)("div", {
                        style: { background: a.Hu },
                        className: (0, P.A)(
                          y().SteamAwardNominateButton,
                          Fe && y().Nominated,
                        ),
                        children: (0, n.jsx)(d.Yh, {
                          controlled: !0,
                          className: (0, P.A)(
                            y().SteamAwardVoteCheckBox,
                            Fe && y().Nominated,
                          ),
                          checked: Fe,
                          onChange: Qe,
                          disabled: Fe,
                          color: "#FFFFFF",
                          highlightColor: "white",
                          label: (0, n.jsx)("div", {
                            className: y().SteamAwardCategoryTitle,
                            children: f.Z.Localize(
                              Fe
                                ? "#SteamAwards_NominateWidget_CTA_PastTense"
                                : "#SteamAwards_NominateWidget_CTA",
                              Me.strTitle,
                            ),
                          }),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: y().SteamAwardCategoryDesc,
                        children: Me.strDescription,
                      }),
                    ],
                  }),
                }),
              ze,
              (0, n.jsx)(W.E, {
                active: Se,
                children: (0, n.jsx)(o, {
                  strLocTokenInfix: "Nomination",
                  unCurrentAppID: xe,
                  unNewAppID: k,
                  fnOnConfirm: () => oe(k),
                  closeModal: he,
                }),
              }),
            ],
          });
        }
        function g(v) {
          const {
              unAppID: k,
              widget: q,
              actions: V,
              bVotesOpen: ce,
              bHideCategoryDescriptions: Me,
            } = v,
            { data: de } = (0, O.J$)({ appid: k }),
            xe = (0, h.NT)(X(!1));
          return (0, n.jsx)($, {
            strMainTitle: f.Z.Localize("#SteamAwards_EventMainTitleCombined"),
            headerText: ce
              ? f.Z.Localize(
                  "#SteamAwards_EventVoteForGamePrompt",
                  de?.name ?? "",
                )
              : (0, n.jsx)("a", {
                  href: xe,
                  className: y().LinkText,
                  children: f.Z.Localize("#SteamAwards_Event_VotesClosed"),
                }),
            headerContent: (0, n.jsx)("div", {
              className: y().AwardCategoriesCtn,
              children: q.rgCategories.map((se) =>
                (0, n.jsx)(
                  w,
                  {
                    unAppID: k,
                    category: se,
                    actions: V,
                    bVotesOpen: ce,
                    bHideDescription: Me,
                  },
                  se.eCategoryID,
                ),
              ),
            }),
            footer: (0, n.jsx)("a", {
              href: xe,
              children: f.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
            }),
          });
        }
        function w(v) {
          const {
              unAppID: k,
              category: q,
              actions: V,
              bVotesOpen: ce,
              bHideDescription: Me,
            } = v,
            {
              unVotedAppID: de,
              bAnswered: xe,
              Vote: se,
            } = (0, a.VV)(q.eCategoryID, V),
            { elDialogElement: oe, BCanTakeAction: ze } = F(!0),
            [We, Se, Ae] = (0, t.uD)(),
            he = de == k;
          if (!ce && !he) return null;
          const Ie = () => {
            if (!(!xe || !ze())) {
              if (de && de != k) {
                Se();
                return;
              }
              se(k);
            }
          };
          return (0, n.jsxs)("div", {
            style: { backgroundColor: a.Hu },
            className: y().SteamAwardVoteWidget,
            children: [
              (0, n.jsxs)("div", {
                className: y().SteamAwardVoteButtonArea,
                children: [
                  (0, n.jsx)("div", {
                    className: (0, P.A)(
                      y().SteamAwardCategoryTitle,
                      y().VotingTitle,
                    ),
                    children: q.strTitle,
                  }),
                  !Me &&
                    (0, n.jsx)("div", {
                      className: y().SteamAwardCategoryDesc,
                      children: q.strDescription,
                    }),
                  he
                    ? (0, n.jsx)("button", {
                        className: y().SteamAwardVoteButtonSubmitted,
                        children: (0, n.jsx)("span", {
                          className: y().SteamAwardVoteButtonText,
                          children: f.Z.Localize(
                            "#SteamAward_VoteButton_VotedText",
                          ),
                        }),
                      })
                    : (0, n.jsx)("button", {
                        className: y().SteamAwardVoteButton,
                        onClick: Ie,
                        children: (0, n.jsx)("span", {
                          className: y().SteamAwardVoteButtonText,
                          children: f.Z.Localize(
                            "#SteamAward_VoteButton_PromptText",
                          ),
                        }),
                      }),
                ],
              }),
              oe,
              (0, n.jsx)(W.E, {
                active: We,
                children: (0, n.jsx)(o, {
                  strLocTokenInfix: "Vote",
                  unCurrentAppID: de,
                  unNewAppID: k,
                  fnOnConfirm: () => se(k),
                  closeModal: Ae,
                }),
              }),
            ],
          });
        }
        var te = s(68312),
          I = s(34041),
          z = s(65946),
          _ = s(90626),
          me = s(76035),
          G = s(86866),
          B = s(18210),
          R = s(3166),
          ue = s(96538),
          be = s(88003),
          C = s(63109),
          Q = s(47875);
        function le(v) {
          return R.iA.logged_in
            ? R.iA.is_limited
              ? ((0, be.pg)(
                  (0, n.jsx)(C.g, {
                    strTokenOverride: v
                      ? "#SteamAward_Vote_LimitedAccount"
                      : "#SteamAward_Nominate_LimitedAccount",
                  }),
                  window,
                ),
                !1)
              : !0
            : ((0, be.pg)(
                (0, n.jsx)(ue.o0, {
                  strTitle: (0, B.we)("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: (0, B.we)(
                    "#EventDisplay_Share_NotLoggedIn_Description",
                  ),
                  strOKButtonText: (0, B.we)("#MobileLogin_SignIn"),
                  onOK: Q.l,
                }),
                window,
              ),
              !1);
        }
        function ae(v) {
          const k = (0, te.KV)();
          return (0, _.useMemo)(
            () => ({
              GetMySteamAwardNominations: () => (0, me.kr)(k),
              NominateForSteamAward: async (q, V) => {
                if (v) return b.R;
                const [ce] = await (0, me.N2)(k, q, V, I.Ji.mP);
                return ce;
              },
              GetMySteamAwardVotes: () => (0, me.QS)(k, a.sK),
              SetSteamAwardVote: async (q, V) => {
                if (v) return b.R;
                const [ce] = await (0, me.rv)(k, q, V, a.sK);
                return ce;
              },
            }),
            [k, v],
          );
        }
        const ve = [];
        function Ee(v, k, q) {
          const V = v.some(a.aS) || k.some(a.aS),
            ce = (0, me.Jo)(V ? a.sK : void 0);
          return V
            ? ce.data
              ? {
                  widgets: (0, a.$G)(ce.data.votes ?? [], v, k, q),
                  bLoading: !1,
                }
              : { bLoading: !0 }
            : { bLoading: !1 };
        }
        function Pe(v, k) {
          return k ? { ...v, bNominationsLive: !0 } : v;
        }
        function Te(v) {
          return !!v && R.TS.EUNIVERSE == m.wLO;
        }
        function pe(v) {
          const { event: k, previewMode: q } = v,
            [V, ce] = (0, z.q3)(() => [k.GetSteamAwardCategory(), k.appid]),
            Me = (0, G.n)(),
            { widgets: de, bLoading: xe } = Ee([V], ve, Me),
            se = ae(Te(q));
          if (xe) return (0, n.jsx)(H, {});
          if (!de?.nomination) return null;
          const oe =
            k.BIsEventActionEnabled(Me) ||
            Me < k.GetStartTimeAndDateUnixSeconds();
          return (0, n.jsx)(u, {
            unAppID: ce,
            actions: se,
            widget: Pe(de.nomination, !!q),
            bNominationsOpen: oe,
          });
        }
        function ee(v) {
          const {
              appID: k,
              voteCategories: q,
              bIsEventActionEnabled: V,
              previewMode: ce,
              bRenderFromStorePage: Me,
            } = v,
            de = (0, G.n)(),
            { widgets: xe, bLoading: se } = Ee(ve, q ?? ve, de),
            oe = ae(Te(ce));
          return se
            ? (0, n.jsx)(H, {})
            : xe?.vote
              ? (0, n.jsx)(g, {
                  unAppID: k,
                  widget: xe.vote,
                  actions: oe,
                  bVotesOpen: V || !!ce,
                  bHideCategoryDescriptions: Me,
                })
              : null;
        }
        function ie(v) {
          const k = (0, R.Tc)(
            "steamwawards",
            "application_config",
          )?.votecategories;
          return k
            ? (0, n.jsx)(ee, {
                appID: v.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: k,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${v.appID}`,
              ),
              null);
        }
      },
      91376: (we, ye, s) => {
        "use strict";
        s.d(ye, { O: () => f, j: () => D });
        var n = s(7850),
          b = s(65946),
          m = s(72429),
          a = s(71684),
          t = s(90316),
          i = s.n(t);
        function D(O) {
          const { event: A, nOverrideStartTime: M, nOverrideEndTime: W } = O,
            p = O.stylesmodule ? { ...i(), ...O.stylesmodule } : i(),
            [y, x, U] = (0, b.q3)(() => [
              M ||
                (A.bOldAnnouncement
                  ? A.postTime
                  : A.GetStartTimeAndDateUnixSeconds()),
              W || A.GetEndTimeAndDateUnixSeconds(),
              A.type,
            ]),
            T = !(0, a.JS)(U);
          return (0, n.jsx)("div", {
            className: p.EventDetailTimeInfo,
            children: (0, n.jsx)(m.v9, {
              startDateAndTime: y,
              endDateAndTime: x,
              bHideEndTime: T,
              stylesmodule: p,
            }),
          });
        }
        function f(O) {
          const { id: A, event: M, dateRangeLayout: W = "horizontal" } = O,
            [p, y, x] = (0, b.q3)(() => [
              M.GetStartTimeAndDateUnixSeconds(),
              M.GetEndTimeAndDateUnixSeconds(),
              M.type,
            ]),
            U = {};
          return (
            W == "vertical" &&
              (U.ShortDateRange = i().VerticalLocalDateAndTime),
            (0, n.jsx)("div", {
              id: A,
              className: i().EventDetailTimeInfo,
              children: (0, n.jsx)(m.u1, {
                startDateAndTime: p,
                endDateAndTime: y,
                bHideEndTime: !(0, a.JS)(x),
                stylesmodule: U,
              }),
            })
          );
        }
      },
      87897: (we, ye, s) => {
        "use strict";
        s.d(ye, { _: () => M });
        var n = s(7850),
          b = s(5827),
          m = s(40358),
          a = s(47875),
          t = s(54806),
          i = s(65946),
          D = s(31151),
          f = s(18210),
          O = s(66661),
          A = s.n(O);
        function M(W) {
          const { event: p } = W,
            y = (0, i.q3)(() => p.jsondata?.referenced_appids || []),
            x = (0, b.eG)(),
            U = (0, t.E)({
              queries: y.map((E) => (0, m.us)(x, { appid: E })),
              combine: (E) => ({
                bLoaded: E.every(($) => !$.isPending),
                data: E.map(($) => $.data),
              }),
            });
          if (!y.length || !U.bLoaded) return null;
          const T = U.data
              .flatMap((E) =>
                E?.store_url_path && E?.name
                  ? [`[url="${(0, a._)(E)}"]${E.name}[/url]`]
                  : [],
              )
              .join((0, f.we)("#EventDisplay_ReferencedApps_Joiner")),
            P = (0, f.Yp)("#EventDisplay_ReferencedApps", y.length, T);
          return (0, n.jsx)("div", {
            className: A().ReferencedApps,
            children: (0, n.jsx)(D.Zn, { text: P, event: p }),
          });
        }
      },
      63731: (we, ye, s) => {
        "use strict";
        s.d(ye, { m: () => $ });
        var n = s(7850),
          b = s(14947),
          m = s(90626),
          a = s(24660),
          t = s(23386),
          i = s(6881),
          D = s(94253),
          f = s(16412),
          O = s(73191),
          A = s(88003),
          M = s(36118),
          W = s(85599),
          p = s(36707),
          y = s(82734),
          x = s(18210),
          U = s(3166),
          T = s(37341),
          P = s.n(T),
          E = s(75839);
        function $(o) {
          const d = (0, D.Oz)(),
            { bLoading: h } = d,
            { className: u, bPreviewMode: g, rewardType: w } = o;
          return (0, n.jsx)(f.$n, {
            className: (0, p.A)("CSSClaimItemButton", u),
            onClick: (te) => {
              d.bCanClaimNewItem
                ? (0, A.pg)(
                    (0, n.jsx)(H, { rewardType: w }),
                    (0, y.uX)(te) ?? window,
                  )
                : g &&
                  ((0, A.pg)(
                    (0, n.jsx)(H, { rewardType: w }),
                    (0, y.uX)(te) ?? window,
                  ),
                  console.log(
                    "Show dialog for debugging, since already claimed: ",
                    (0, b.HO)(d),
                  ));
            },
            disabled: h,
            children: h
              ? (0, n.jsx)(W.t, {
                  string: (0, x.we)("#Loading"),
                  size: "small",
                })
              : (0, n.jsx)(X, { claimState: d }),
          });
        }
        function X(o) {
          const { claimState: d, strButtonOverride: h, rewardType: u } = o;
          if (d.bAlreadyClaimedCurrentItem)
            return (0, n.jsxs)("div", {
              className: (0, p.A)(T.CheckMark, "CSSClaimedState"),
              children: [
                (0, n.jsx)(M.Jlk, {}),
                (0, n.jsxs)("span", {
                  children: [
                    " ",
                    h || (0, x.we)("#Sale_ClaimableReward_AlreadyClaimed"),
                  ],
                }),
              ],
            });
          let g = (0, x.we)("#Sale_ClaimableReward_generic");
          switch (d?.community_item_class || u) {
            case t.Ed:
              g = (0, x.we)("#Sale_ClaimableReward_sticker");
              break;
            case t.jE:
              g = (0, x.we)("#Sale_ClaimableReward_profilemodifier");
              break;
            case t.xw:
              g = (0, x.we)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, n.jsx)("span", {
            className: "CSSUnclaimedState",
            children: g,
          });
        }
        function H(o) {
          const { closeModal: d, rewardType: h } = o,
            { fnClaimItem: u } = (0, D.CC)(),
            g = (0, O.vs)(),
            [w, te] = m.useState(null);
          m.useEffect(() => {
            g.bLoading ||
              (g.fnSetLoading(!0),
              u()
                .then((_) => {
                  if (
                    (te(_),
                    console.log("claim response", (0, b.HO)(_)),
                    _.appid)
                  ) {
                    let me = (0, x.we)(
                      "#Sale_ClaimableReward_completed_generic",
                    );
                    const G = w?.community_item_class || h;
                    switch (G) {
                      case t.Ed:
                        me = (0, x.we)(
                          "#Sale_ClaimableReward_completed_sticker",
                        );
                        break;
                      case t.jE:
                        me = (0, x.we)(
                          "#Sale_ClaimableReward_completed_profilemodifier",
                        );
                        break;
                      case t.xw:
                        me = (0, x.we)(
                          "#Sale_ClaimableReward_completed_animatedavatar",
                        );
                        break;
                    }
                    g.fnSetStrSuccess("   "),
                      g.fnSetElSuccess(
                        (0, n.jsxs)("div", {
                          className: T.DialogCtn,
                          children: [
                            (0, n.jsx)("span", { children: me }),
                            (0, n.jsx)(F, {
                              appid: _.appid,
                              community_item_type: _.community_item_type,
                              rewardType: G,
                            }),
                          ],
                        }),
                      );
                  } else
                    g.fnSetStrError((0, x.we)("#Sale_ClaimableReward_Busy"));
                })
                .catch((_) =>
                  g.fnSetStrError((0, x.we)("#Sale_ClaimableReward_Busy")),
                ));
          }, [w?.community_item_class, g, u, h]);
          let I = (0, x.we)("#Sale_ClaimableReward_generic");
          switch (w?.community_item_class || h) {
            case t.Ed:
              I = (0, x.we)("#Sale_ClaimableReward_sticker");
              break;
            case t.jE:
              I = (0, x.we)("#Sale_ClaimableReward_profilemodifier");
              break;
            case t.xw:
              I = (0, x.we)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, n.jsx)(O.Hh, {
            state: g,
            strDialogTitle: I,
            closeModal: d,
          });
        }
        function F(o) {
          const { appid: d, community_item_type: h, rewardType: u } = o;
          return !d || !h
            ? null
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(E.f8, { appid: d, community_item_type: h }),
                  u == t.jE &&
                    (0, n.jsx)(j, { appid: d, community_item_type: h }),
                ],
              });
        }
        function j(o) {
          const { appid: d, community_item_type: h } = o,
            u = (0, i.fw)(d),
            { mutate: g, isSuccess: w } = (0, D.t5)();
          if (!u) return null;
          const te = u.find((I) => I.item_type == h);
          return te
            ? (0, n.jsxs)("div", {
                className: T.EquipCtn,
                children: [
                  w
                    ? (0, n.jsx)("div", {
                        children: (0, x.we)(
                          "#Sale_ClaimableReward_profilemodifier_apply_success",
                        ),
                      })
                    : (0, n.jsx)(f.$n, {
                        onClick: () => g(te),
                        children: (0, x.we)(
                          "#Sale_ClaimableReward_profilemodifier_apply",
                        ),
                      }),
                  (0, n.jsx)(a.Ii, {
                    href: `${U.TS.COMMUNITY_BASE_URL}profiles/${U.iA.steamid}`,
                    children: (0, x.we)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              })
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(a.Ii, {
                    href: `${U.TS.COMMUNITY_BASE_URL}profiles/${U.iA.steamid}/edit/goldenprofile`,
                    children: (0, x.we)(
                      "#Sale_ClaimableReward_profilemodifier_choose",
                    ),
                  }),
                  (0, n.jsx)(a.Ii, {
                    href: `${U.TS.COMMUNITY_BASE_URL}profiles/${U.iA.steamid}`,
                    children: (0, x.we)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              });
        }
      },
      75839: (we, ye, s) => {
        "use strict";
        s.d(ye, { Zx: () => F, f8: () => H });
        var n = s(7850),
          b = s(65946),
          m = s(23386),
          a = s(80902),
          t = s(90626),
          i = s(72604),
          D = s(72609);
        const f = "minigamev2/itemdefs",
          O = "appid",
          A = "editor";
        function M() {
          return (typeof self < "u" ? self.origin + "/" : "") ===
            D.TS.STORE_BASE_URL
            ? D.TS.STORE_BASE_URL
            : D.TS.COMMUNITY_BASE_URL;
        }
        async function W(j, o) {
          if (!j) return [];
          const d = new URLSearchParams({ [O]: String(j), l: D.TS.LANGUAGE });
          o && d.set(A, "1");
          const h = `${M()}${f}?${d}`,
            u = await fetch(h, { credentials: o ? "include" : "same-origin" });
          if (!u.ok) throw new Error(`${h} answered ${u.status}`);
          const g = await u.json();
          if (g?.success == i.R && g.item_definitions)
            return g.item_definitions;
          throw new Error(
            "Community item definitions for app " +
              j +
              " answered " +
              g?.success,
          );
        }
        function p(j, o) {
          return ["MinigameCommunityItemDefs", j, !!o];
        }
        function y(j, o) {
          return {
            queryKey: p(j, o),
            queryFn: () => W(j, o),
            enabled: !!j,
            retry: !1,
          };
        }
        function x(j, o) {
          const { data: d } = (0, a.I)(y(j, o));
          return d;
        }
        function U(j, o, d) {
          const h = x(j, d);
          return (0, t.useMemo)(
            () =>
              h?.find(
                (u) => (d || u.active) && u.appid == j && u.item_type == o,
              ),
            [h, j, o, d],
          );
        }
        var T = s(85599),
          P = s(18210),
          E = s(3166),
          $ = s(56330);
        function X(j) {
          const {
            appid: o,
            item_image_small: d,
            item_image_large: h,
            item_movie_mp4: u,
            item_movie_webm: g,
            item_title: w,
          } = j;
          if (u && g) {
            const te = `${E.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${o}/${d}`,
              I = `${E.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${o}/${g}`,
              z = `${E.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${o}/${u}`;
            return (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("video", {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: te,
                playsInline: !0,
                className: j.videoClassName,
                children: [
                  (0, n.jsx)("source", { src: I, type: "video/webm" }),
                  !E.TS.IN_CLIENT &&
                    (0, n.jsx)("source", { src: z, type: "video/mp4" }),
                ],
              }),
            });
          } else {
            const te = `${E.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${o}/${d || h}`;
            return (0, n.jsx)("img", {
              className: j.className,
              src: te,
              alt: w,
            });
          }
        }
        function H(j) {
          const { appid: o, community_item_type: d, bForEdit: h } = j,
            u = U(o, d, h),
            g =
              u && !u.active
                ? (0, n.jsx)("div", {
                    className: $.WarningStylesBackground,
                    children: (0, P.we)(
                      "#Sale_Section_RewardShelf_ItemInActiveWarning",
                    ),
                  })
                : void 0;
          return u
            ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(X, { ...u }), g],
              })
            : (0, n.jsx)(T.t, { size: "small", string: (0, P.we)("#Loading") });
        }
        function F(j) {
          const { section: o, rewardDef: d, language: h } = j,
            u = U(d.appid ?? 0, d.community_item_type ?? 0),
            [g] = (0, b.q3)(() => [!!o.rewards?.show_reward_item_name]);
          let w;
          switch (d.community_class) {
            case m.xi:
            case m.xw:
              w = `${E.TS.COMMUNITY_BASE_URL}my/edit/avatar`;
              break;
            case m.u8:
              w = `${E.TS.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
              break;
            case m.sU:
            case m.jE:
              w = `${E.TS.COMMUNITY_BASE_URL}my/edit/background`;
              break;
            case m.zs:
              w = `${E.TS.COMMUNITY_BASE_URL}my/edit/miniprofile`;
              break;
            case m.Ed:
              w = `${E.TS.COMMUNITY_BASE_URL}chat`;
              break;
          }
          return (0, n.jsxs)("a", {
            href: w,
            children: [
              (0, n.jsx)(H, {
                appid: d.appid ?? 0,
                community_item_type: d.community_item_type ?? 0,
              }),
              !!g && (0, n.jsx)("span", { children: u?.item_name }),
            ],
          });
        }
      },
      16085: (we, ye, s) => {
        "use strict";
        s.d(ye, { m: () => p });
        var n = s(7850),
          b = s(90626),
          m = s(99412),
          a = s(48421),
          t = s(36707),
          i = s(18210),
          D = s(53113),
          f = s(72609),
          O = s(15392),
          A = s.n(O),
          M = s(29630),
          W = s(60480);
        function p(x) {
          const { gidEvent: U } = x,
            T = (0, a.RR)(U);
          return T
            ? (0, n.jsx)(y, {
                event: T,
                lang: (0, m.sfN)(f.TS.LANGUAGE),
                href: (0, D.k2)((0, W.n4)(T) ?? ""),
              })
            : null;
        }
        function y(x) {
          const { event: U, lang: T, href: P } = x,
            [E, $] = (0, b.useMemo)(() => {
              const X = U.jsondata.localized_sale_product_banner,
                H = U.jsondata.localized_sale_product_mobile_banner;
              if (X?.length && H?.length) {
                const F = i.NT.GetWithFallback(X, T),
                  j = i.NT.GetWithFallback(H, T);
                if (F?.length && j?.length)
                  return [
                    M.zU.GenerateURLFromHashAndExt(U.clanSteamID, F),
                    M.zU.GenerateURLFromHashAndExt(U.clanSteamID, j),
                  ];
              }
              return [void 0, void 0];
            }, [U, T]);
          return !E?.length || !$?.length
            ? null
            : (0, n.jsxs)("a", {
                href: P,
                className: O.Link,
                children: [
                  (0, n.jsx)("img", {
                    src: E,
                    className: (0, t.A)(O.Banner, O.Big),
                  }),
                  (0, n.jsx)("img", {
                    src: $,
                    className: (0, t.A)(O.Banner, O.Mobile),
                  }),
                ],
              });
        }
      },
      90046: (we, ye, s) => {
        "use strict";
        s.d(ye, { D1: () => F, lS: () => P, lz: () => X, nK: () => $ });
        var n = s(7850),
          b = s(32093),
          m = s(56062),
          a = s(90626);
        function t(u) {
          switch (u) {
            case "discord_server":
              return m.jL.Eb;
            case "youtube":
              return m.jL.lQ;
            case "facebook":
              return m.jL.GO;
            case "twitter":
              return m.jL.jG;
            case "twitch":
              return m.jL.F7;
            case "reddit":
              return m.jL.uw;
            case "instagram":
              return m.jL.sP;
            case "tumblr":
              return m.jL.u5;
            case "qq":
              return m.jL.EK;
            case "qqlink":
              return m.jL.M0;
            case "qqchannel":
              return m.jL.$3;
            case "bilibili":
              return m.jL.Ow;
            case "weibo":
              return m.jL.Ib;
            case "wechat":
              return m.jL.Or;
            case "tieba":
              return m.jL.db;
            case "tiktok":
              return m.jL.Yu;
            case "douyin":
              return m.jL.qe;
            case "bluesky":
              return m.jL.H5;
            case "mastodon":
              return m.jL.Xm;
            case "threads":
              return m.jL.DB;
            case "vk":
              return m.jL.a$;
            case "telegram":
              return m.jL.JN;
            case "linkedin":
              return m.jL.EM;
            case "rednote":
              return m.jL.Lk;
          }
          return m.jL.I0;
        }
        function i(u) {
          switch (u) {
            case EStoreLinkType.k_EStoreLinkType_Discord:
              return "discord_server";
            case EStoreLinkType.k_EStoreLinkType_YouTube:
              return "youtube";
            case EStoreLinkType.k_EStoreLinkType_Facebook:
              return "facebook";
            case EStoreLinkType.k_EStoreLinkType_Twitter:
              return "twitter";
            case EStoreLinkType.k_EStoreLinkType_Twitch:
              return "twitch";
            case EStoreLinkType.k_EStoreLinkType_Reddit:
              return "reddit";
            case EStoreLinkType.k_EStoreLinkType_Instagram:
              return "instagram";
            case EStoreLinkType.k_EStoreLinkType_Tumblr:
              return "tumblr";
            case EStoreLinkType.k_EStoreLinkType_QQ:
              return "qq";
            case EStoreLinkType.k_EStoreLinkType_QQLink:
              return "qqlink";
            case EStoreLinkType.k_EStoreLinkType_Bilibili:
              return "bilibili";
            case EStoreLinkType.k_EStoreLinkType_Weibo:
              return "weibo";
            case EStoreLinkType.k_EStoreLinkType_WeChat:
              return "wechat";
            case EStoreLinkType.k_EStoreLinkType_Tieba:
              return "tieba";
            case EStoreLinkType.k_EStoreLinkType_Tiktok:
              return "tiktok";
            case EStoreLinkType.k_EStoreLinkType_Douyin:
              return "douyin";
            case EStoreLinkType.k_EStoreLinkType_Bluesky:
              return "bluesky";
            case EStoreLinkType.k_EStoreLinkType_Mastodon:
              return "mastodon";
            case EStoreLinkType.k_EStoreLinkType_Threads:
              return "threads";
            case EStoreLinkType.k_EStoreLinkType_VK:
              return "vk";
            case EStoreLinkType.k_EStoreLinkType_Telegram:
              return "telegram";
            case EStoreLinkType.k_EStoreLinkType_LinkedIn:
              return "linkedin";
          }
          return "unknown social media type";
        }
        var D = s(40358),
          f = s(95695),
          O = s.n(f),
          A = s(36118),
          M = s(36707),
          W = s(18210),
          p = s(53113),
          y = s(72609),
          x = s(71421),
          U = s(12443),
          T = s.n(U);
        function P(u) {
          const { appid: g } = u;
          return (0, n.jsx)("div", {
            className: T().AppSocialLinksCtn,
            children: (0, n.jsx)(E, { appid: g }),
          });
        }
        function E(u) {
          const { appid: g } = u,
            { data: w } = (0, D.bg)({ appid: g });
          return !w || w.length == 0
            ? null
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: (0, M.A)(
                      O().EventEditorTextTitle,
                      "EventEditorTextTitle",
                    ),
                    children: (0, W.we)("#EventDisplay_SocialTitle"),
                  }),
                  (0, n.jsx)(F, { id: "" + g, rgSocialMedia: w }),
                ],
              });
        }
        function $(u) {
          return (0, a.useMemo)(
            () =>
              u
                ? u.map((g) => {
                    const w = { link_type: t(g.type) };
                    return (
                      w.link_type == m.jL.EK || w.link_type == m.jL.Or
                        ? (w.text = g.link)
                        : (w.url = g.link),
                      w
                    );
                  })
                : [],
            [u],
          );
        }
        function X(u) {
          const { gidClanEvent: g, rgSocial: w, bIsCreatorHomeEvent: te } = u,
            I = $(w);
          return !I || I.length == 0
            ? null
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: (0, M.A)(
                      O().EventEditorTextTitle,
                      "EventEditorTextTitle",
                    ),
                    children: te
                      ? (0, W.we)("#EventDisplay_Sale_SocialTitle_Dev")
                      : (0, W.we)("#EventDisplay_Sale_SocialTitle"),
                  }),
                  (0, n.jsx)(F, { id: g, rgSocialMedia: I }),
                ],
              });
        }
        const H = [
          m.jL.EK,
          m.jL.$3,
          m.jL.M0,
          m.jL.Ow,
          m.jL.Ib,
          m.jL.qe,
          m.jL.Lk,
        ];
        function F(u) {
          const { id: g, rgSocialMedia: w, className: te } = u,
            I = y.TS.EREALM === b.TU.k_ESteamRealmChina;
          return (0, n.jsx)("div", {
            className: (0, M.A)(T().AppSocialLinks, te),
            children: w
              .filter((z) => !I || H.includes(z.link_type || m.jL.I0))
              .map((z) =>
                z.url
                  ? (0, n.jsx)(
                      j,
                      { social: z },
                      "app_social_link_" + g + "_" + z.link_type,
                    )
                  : (0, n.jsx)(
                      o,
                      { social: z },
                      "app_social_text_" + g + "_" + z.link_type + "_" + z.text,
                    ),
              ),
          });
        }
        function j(u) {
          const { social: g } = u;
          return g.url
            ? (0, n.jsx)("a", {
                href: (0, p.NT)(g.url, !0),
                target: y.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: (0, n.jsx)(x.he, {
                  toolTipContent: g.url,
                  children: (0, n.jsx)(d, { social: g }),
                }),
              })
            : null;
        }
        function o(u) {
          const { social: g } = u;
          return (0, n.jsxs)("div", {
            className: T().AppSocialLinkWithText,
            children: [
              (0, n.jsx)(x.he, {
                toolTipContent: g.text,
                children: (0, n.jsx)(d, { social: g }),
              }),
              (0, n.jsx)("div", {
                className: T().AppSocialText,
                children: g.text,
              }),
            ],
          });
        }
        function d(u) {
          const { social: g } = u;
          return (0, n.jsx)(h, {
            linkType: g.link_type || m.jL.I0,
            className: T().AppSocialLinkIcon,
          });
        }
        function h(u) {
          const { linkType: g, ...w } = u;
          switch (g) {
            case m.jL.lQ:
              return (0, n.jsx)(A.agV, { ...w });
            case m.jL.GO:
              return (0, n.jsx)(A.ZnA, { ...w });
            case m.jL.jG:
              return (0, n.jsx)(A.oy, { ...w });
            case m.jL.F7:
              return (0, n.jsx)(A.ofN, { ...w });
            case m.jL.Eb:
              return (0, n.jsx)(A.Bki, { ...w });
            case m.jL.EK:
            case m.jL.M0:
            case m.jL.$3:
              return (0, n.jsx)(A.$vK, { ...w });
            case m.jL.a$:
              return (0, n.jsx)(A.OSJ, { ...w });
            case m.jL.Ow:
              return (0, n.jsx)(A.nm_, { ...w });
            case m.jL.Ib:
              return (0, n.jsx)(A.tIO, { ...w });
            case m.jL.uw:
              return (0, n.jsx)(A.Vt2, { ...w });
            case m.jL.sP:
              return (0, n.jsx)(A.Vgk, { ...w });
            case m.jL.u5:
              return (0, n.jsx)(A.VSd, { ...w });
            case m.jL.db:
              return (0, n.jsx)(A.ccb, { ...w });
            case m.jL.Yu:
              return (0, n.jsx)(A.rNt, { ...w });
            case m.jL.JN:
              return (0, n.jsx)(A.g$j, { ...w });
            case m.jL.EM:
              return (0, n.jsx)(A.BQz, { ...w });
            case m.jL.Or:
              return (0, n.jsx)(A.jdP, { ...w });
            case m.jL.qe:
              return (0, n.jsx)(A.bKN, { ...w });
            case m.jL.H5:
              return (0, n.jsx)(A.sDU, { ...w });
            case m.jL.Xm:
              return (0, n.jsx)(A.MbF, { ...w });
            case m.jL.DB:
              return (0, n.jsx)(A.emH, { ...w });
            case m.jL.Lk:
              return (0, n.jsx)(A.Yoo, { ...w });
            case m.jL.wu:
            case m.jL.I0:
              return "invalid social media type";
          }
        }
      },
      36343: (we, ye, s) => {
        "use strict";
        s.d(ye, { F: () => m });
        var n = s(53113),
          b = s(72609);
        function m(t, i) {
          return !i || i.startsWith("https://") || i.startsWith("http://")
            ? i
            : `${b.TS.CLAN_CDN_ASSET_URL}images/clan/${t}/${i}`;
        }
        function a(t, i, D) {
          return !i || IsHttpOrHttps(i) ? i : `${D}images/clan/${t}/${i}`;
        }
      },
      72429: (we, ye, s) => {
        "use strict";
        s.d(ye, {
          K4: () => d,
          v9: () => u,
          u1: () => g,
          yi: () => F,
          pg: () => H,
          gS: () => h,
        });
        var n = s(7850),
          b = s(90626),
          m = s(71421),
          a = s(18210),
          t = s(75844),
          i = s(36707),
          D = s(36174),
          f = s(55351),
          O = s.n(f),
          A = s(7582),
          M = s(86866);
        function W(I) {
          const [z, _] = useState(!1);
          return (
            useEffect(() => {
              startTransition(() => _(!0));
            }, []),
            jsx(p.Provider, { value: z, children: I.children })
          );
        }
        const p = (0, b.createContext)(!1);
        function y() {
          return (0, b.useContext)(p);
        }
        const x = Intl.DateTimeFormat().resolvedOptions().timeZone,
          U =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((I) => I.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          T = U && decodeURIComponent(U);
        function P() {
          return y() ? x : (T ?? x);
        }
        function E() {
          "document" in globalThis &&
            (document.cookie = `timezoneName=${x};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        E();
        var $ = s(87937),
          X = s.n($);
        function H(I, z) {
          const me = z ?? X().tz.guess(),
            G = X().unix(I).tz(me),
            B = (0, a.l4)();
          return B && G.locale(B), G.format("LT");
        }
        function F(I, z, _) {
          const G = _ ?? X().tz.guess(),
            B = X().unix(I).tz(G),
            R = (0, a.l4)();
          return (
            R && B.locale(R),
            (0, n.jsxs)(b.Fragment, {
              children: [
                B.format("LT"),
                z
                  ? (0, n.jsx)(m.Gq, {
                      toolTipContent: B.format("Z") + ", " + G,
                      children: (0, n.jsxs)("span", {
                        children: ["\xA0", B.zoneAbbr()],
                      }),
                    })
                  : null,
              ],
            })
          );
        }
        function j(I, z, _) {
          return (0, a.TW)(I, {
            weekday: "short",
            year: _ ? void 0 : "numeric",
            timeZone: z,
          });
        }
        function o(I, z, _, me) {
          return X().unix(I).tz(_).isSame(X().unix(z).tz(_), me);
        }
        const d = (0, t.PA)((I) => {
            const {
                dateAndTime: z,
                bSingleLine: _,
                bOnlyTime: me,
                bOnlyDate: G,
              } = I,
              B = P(),
              R = !me && !!z,
              ue = !G && !!z,
              be = R && j(z, B),
              C = I.stylesmodule ? { ...O(), ...I.stylesmodule } : O();
            return _
              ? (0, n.jsxs)("span", {
                  className: me || G ? C.DateAndTimeInline : C.DateAndTime,
                  children: [
                    R && be,
                    R && ue ? (0, n.jsx)("span", { children: "\xA0" }) : void 0,
                    !!(z && ue) && F(z, ue, B),
                  ],
                })
              : (0, n.jsxs)("div", {
                  className: C.DateAndTime,
                  children: [
                    R &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: C.LocalizedDate,
                            children: be,
                          }),
                          " ",
                          (0, n.jsx)("span", {
                            className: C.At,
                            children: (0, a.we)(
                              "#EventDisplay_DateAndTimeCombiner",
                            ),
                          }),
                        ],
                      }),
                    (0, n.jsx)("div", {
                      className: C.LocalizedTime,
                      children: !!(z && ue) && F(z, ue, B),
                    }),
                  ],
                });
          }),
          h = (I) => {
            const z = (0, n.jsx)("div", {
              className: I.stylesmodule?.DateToolTip,
              children: (0, n.jsx)(d, {
                dateAndTime: I.rtFullDate,
                bSingleLine: !0,
                stylesmodule: I.stylesmodule,
              }),
            });
            return (0, n.jsx)(m.m9, {
              toolTipContent: z,
              direction: "top",
              className: I.className,
              bTopmost: !0,
              children: I.children,
            });
          },
          u = (0, t.PA)((I) => {
            const { startDateAndTime: z, endDateAndTime: _ = 0 } = I,
              me = I.stylesmodule ? { ...O(), ...I.stylesmodule } : O(),
              G = P(),
              B = (0, M.n)(),
              R =
                I.bHideEndTime ||
                I.endDateAndTime == null ||
                I.endDateAndTime < 1;
            if (z == null || z == 0)
              return (0, n.jsxs)("div", {
                className: me.DateAndTime,
                children: [
                  (0, n.jsx)("span", {
                    className: me.RightSideTitles,
                    children: (0, a.we)("#EventDisplay_TimeRange"),
                  }),
                  (0, a.we)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            if (R)
              return (0, n.jsxs)("div", {
                className: me.StartDate,
                children: [
                  (0, n.jsxs)("div", {
                    className: me.RightSideTitles,
                    children: [
                      (0, a.we)(
                        z < B
                          ? "#EventDisplay_TimeInPast"
                          : "#EventDisplay_TimeUpcoming",
                      ),
                      "\xA0",
                    ],
                  }),
                  (0, n.jsx)(d, { stylesmodule: me, dateAndTime: z }),
                ],
              });
            const ue = z <= B && B <= _,
              be = o(z, _, G, "day");
            return (0, n.jsxs)("div", {
              className: me.MultiDateAndTime,
              children: [
                (0, n.jsxs)("div", {
                  className: me.StartDate,
                  children: [
                    (0, n.jsx)("span", {
                      className: me.RightSideTitles,
                      children: (0, a.we)(
                        z >= B
                          ? "#EventDisplay_TimeBeginsOn"
                          : _ >= B
                            ? "#EventDisplay_TimeBeginsOn_Past"
                            : "#EventDisplay_TimeBeginsOn_StartAndEnd_Past",
                      ),
                    }),
                    (0, n.jsx)(d, {
                      stylesmodule: me,
                      bSingleLine: !0,
                      dateAndTime: z,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: me.EndDate,
                  children: [
                    (0, n.jsx)("span", {
                      className: me.RightSideTitles,
                      children: (0, a.we)(
                        _ < B
                          ? "#EventDisplay_TimeEndsOn_Past"
                          : "#EventDisplay_TimeEndsOn",
                      ),
                    }),
                    (0, n.jsx)(d, {
                      stylesmodule: me,
                      bSingleLine: !0,
                      bOnlyTime: be,
                      dateAndTime: _,
                    }),
                  ],
                }),
                ue &&
                  (0, n.jsx)("span", {
                    className: me.ActiveEvent,
                    children: (0, n.jsx)("span", {
                      className: (0, i.A)(
                        me.RightSideTitles,
                        me.ActiveEventCallOut,
                      ),
                      children: (0, a.we)("#Time_Now"),
                    }),
                  }),
              ],
            });
          }),
          g = (0, t.PA)((I) => {
            const {
                startDateAndTime: z,
                endDateAndTime: _,
                bHideEndTime: me,
              } = I,
              G = I.stylesmodule ? { ...O(), ...I.stylesmodule } : O(),
              B = P(),
              R = (0, M.n)();
            if (z == null || z == 0)
              return (0, n.jsxs)("div", {
                className: G.DateAndTime,
                children: [
                  (0, n.jsx)("span", {
                    className: G.RightSideTitles,
                    children: (0, a.we)("#EventDisplay_TimeRange"),
                  }),
                  (0, a.we)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            const ue = o(z, R, B, "year"),
              be = (0, n.jsx)("div", {
                className: G.ShortDateAndTime,
                children: j(z, B, ue),
              });
            let C = (0, n.jsxs)(h, {
              rtFullDate: z,
              stylesmodule: G,
              children: [
                (0, n.jsx)("div", {
                  className: G.RightSideTitles,
                  children: (0, a.we)(
                    z < R
                      ? "#EventDisplay_TimeInPast"
                      : "#EventDisplay_TimeUpcoming",
                  ),
                }),
                be,
              ],
            });
            if (
              (R < z &&
                z < R + D.Kp.PerWeek &&
                (C = (0, n.jsx)(h, {
                  rtFullDate: z,
                  stylesmodule: G,
                  children: (0, n.jsx)("div", {
                    className: G.RightSideTitles,
                    children: (0, a.PP)(
                      "#EventDisplay_EventUpcoming_WithDateAndTime",
                      be,
                      (0, n.jsxs)("div", {
                        className: G.ShortDateAndTime,
                        children: [F(z, !1, B), " "],
                      }),
                    ),
                  }),
                })),
              me || _ == null || _ < 1)
            )
              return C;
            const Q = z <= R && R <= _;
            Q &&
              (C = (0, n.jsx)(h, {
                rtFullDate: z,
                className: G.ActiveEvent,
                stylesmodule: G,
                children: (0, n.jsx)("span", {
                  className: G.ActiveEventCallOut,
                  children: (0, a.we)("#Time_Now"),
                }),
              }));
            let le = null;
            const ae = Q ? _ - R : _ - z;
            if (ae <= D.Kp.PerDay) {
              const Ee = (0, n.jsx)("div", {
                className: G.ShortDateAndTime,
                children: (0, a.Hq)(ae, !0),
              });
              _ < R
                ? (le = (0, n.jsxs)("div", {
                    className: G.RightSideTitles,
                    children: [(0, a.we)("#EventDisplay_TimeEndsOn_Ran"), Ee],
                  }))
                : (le = (0, n.jsx)("div", {
                    className: G.RightSideTitles,
                    children: (0, a.PP)(
                      Q
                        ? "#EventDisplay_TimeLeft"
                        : "#EventDisplay_RunsForDuration",
                      Ee,
                    ),
                  }));
            } else {
              const Ee = o(_, R, B, "year");
              le = (0, n.jsxs)(b.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: G.RightSideTitles,
                    children: (0, a.we)(
                      _ < R
                        ? "#EventDisplay_TimeEndsOn_Past"
                        : "#EventDisplay_TimeEndsOn",
                    ),
                  }),
                  (0, n.jsx)("div", {
                    className: G.ShortDateAndTime,
                    children: j(_, B, Ee),
                  }),
                ],
              });
            }
            const ve = (0, n.jsx)(h, {
              rtFullDate: _,
              stylesmodule: G,
              children: le,
            });
            return (0, n.jsxs)("div", {
              className: G.ShortDateRange,
              children: [C, ve],
            });
          });
        function w(I, z, _) {
          const me = g_EventCalendarDevFeatures.GetTimeNowWithOverrideAsDate(),
            G = new Date(I * 1e3),
            B = new Date(z * 1e3),
            R = me.getFullYear() == G.getFullYear(),
            ue = me.getFullYear() == B.getFullYear(),
            be = G.getFullYear() == B.getFullYear(),
            C = be && G.getMonth() == B.getMonth(),
            Q = C && G.getDate() == B.getDate(),
            le = {
              day: "numeric",
              month: _ ?? "long",
              year: R ? void 0 : "numeric",
            },
            ae = G.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              le,
            );
          if (Q) return ae;
          {
            const ve = {
                day: "numeric",
                month: C && ue ? void 0 : (_ ?? "long"),
                year: be ? void 0 : "numeric",
              },
              Ee = B.toLocaleDateString(
                LocalizationManager.GetPreferredLocales(),
                ve,
              );
            return ae + " - " + Ee;
          }
        }
        function te(I) {
          const {
            rtStartDate: z,
            rtEndDate: _,
            strMonthFormat: me,
            className: G,
          } = I;
          return jsxs("div", { className: G, children: [w(z, _, me), " "] });
        }
      },
      89206: (we) => {
        we.exports = {
          narrowWidth: "500px",
          ExpandRowButton: "r6FhuuUn6dvEsEckchXo5",
          Selected: "wOEL5nQgChVeJX_0DwcXg",
        };
      },
      47444: (we) => {
        we.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          carouselNavButton: "_13rGo4vexAbY9-CP7FsLOg",
          carouselBtnCtn: "_3zfZ9tkIrSDZdSTv8mvZ3-",
          left: "S8IHdovT5T2iEVg_97xve",
          right: "Cq59o5WQ49zTvvFY56QYS",
          carouselBody: "_3a31O8XB_8lD-yov8FB9-9",
          sliderBody: "_2M3SnYGvMvplWUC8yGhowo",
          slideTrayCustomize: "_2VUpHDtxN8lR1LDahY_cI2",
          breadcrumbContainer: "_3HjnEmKg66o82ah74EIvmq",
          breadcrumbContainerTemplate: "_3dMffY_iRZXHjZmXN9aLej",
          pip: "_3Byg6Wc4TX36gkUptUIk72",
          pipList: "LY1m24ODS7AFRuzclt0Sl",
          pipScrollerContainer: "_3SyN-YtXsML6ado0q-Gdve",
          pipScrollButton: "qE43Jfzl0qJX_a6XrMgSr",
          scrollNavDiv: "_95I5gwXXMBghRg-4uNQLr",
          scrollNavButton: "_1cpdoEGU0uiIWbGIU_qMbZ",
          pipScroller: "EMd4F6A8qdMk-l6os415A",
          scrollBackground: "WUHeTNYGQDQQg_jQe-78W",
          scrollForeground: "PQzkJfi8IxzjcFEDG-yv-",
          pipContainer: "_3TKX37FakYHikXh3Wtg2BU",
          pipNumber: "_1u4YJiW1cdufpC_wssM8Us",
          innerSlide: "_3Cc2bMRML2lEkSyi2IAZ9G",
          DisableSliderMotion: "_3J8-bW87K3pb8EpRNYq0JG",
          BackgroundAnimation: "_25VCY5c_WxOmDf5rM9ytzl",
          "ItemFocusAnim-darkerGrey-nocolor": "_3Wd6R5ArXmgfz1dMwANtD7",
          "ItemFocusAnim-darkerGrey": "_2mepLvzcUGS8PS7_cO5A4C",
          "ItemFocusAnim-darkGreySettings": "KiXqOP4sNGGqLzPFjAa3D",
          "ItemFocusAnim-darkGrey": "_3NRkgxBrOQc_fQX1HvTkk3",
          "ItemFocusAnim-grey": "SAxIC6YdDjzPzIqw_aS4s",
          "ItemFocusAnim-translucent-white-10": "_-1Vlo_3w2uf9fF1-AU1F4",
          "ItemFocusAnim-translucent-white-20": "_7B6-9HPzoer1QOmgjEAWS",
          "ItemFocusAnimBorder-darkGrey": "GRKCpstf6SP8ly-oMKYX3",
          "ItemFocusAnim-green": "_2cBvKmN3c2ILRdjHTpBZUQ",
          focusAnimation: "_3eJJYrpdNOdlU26_C9wlMp",
          hoverAnimation: "BiWwdgbiMRC3pAc-R3rqS",
        };
      },
      39362: (we) => {
        we.exports = { Ctn: "_1xGaMOW4aakB5uwqOCT3nI" };
      },
      71714: (we) => {
        we.exports = {
          UploadPreviewContainer: "CCBFyy2uP4GNSQGfe2T1L",
          SVGIcon_Video: "_2Fs53eUCdV8xsO83Jc40DH",
          UploadPreview: "_1cXUbzBtV9qFc_63x_j2F2",
          FileUploadFileName: "_21dZgGfG0xtybuVTE6nCv0",
          FileUploadCancel: "rFDt7lDfNBv3BUjppBm9i",
          SVGIcon_X_Line: "_1H7hrp21ukrcZyCAzv9Oc1",
          FileUploadBtn: "_2FFH3ZhSGGItb8Z61CSGfe",
          FileUploadProgressContainer: "_1UobbffXVmx8rwsOHYeNb5",
          FileUploadProgressBarContainer: "tFbvGbecHSHr8P3EdINV-",
          FileUploadProgressName: "_288RbRaiLR6h9q5sWoD2eC",
        };
      },
      17009: (we) => {
        we.exports = {
          "duration-app-launch": "800ms",
          AppPartnerEventsPage: "_3CJsgSK-y815Zeoe6bz6dh",
          AppPartnerEventsBanner: "_1HRiMtg_SGUiOa-NXDzZl7",
          AppBannerLinks: "D1bMmHTycpEqG4Sp3VVvH",
          ControlSection: "_2pA5CW91XQQDfo6yZEdPd-",
          NoGameLink: "_2GfPecEDgnR6mwX3ysETT_",
          AppPartnerEventsBody: "_1XLRr8eh1ip-E17C8Jzrmc",
          AppBannerGroup: "qexk-JocS7jjDM31IcGZn",
          NoEvents: "_2xyx9hjeMa2Faf2k3WjG3C",
          AppBannerCtn: "wavRtSPqcvhar0kUHlKoJ",
          AppBannerBackground: "_3RHFoIvdUHn0fp8G8M258k",
          ClanBanner: "_161DWg8AuVjniVd_UE888G",
          TallBanner: "KBixgrFRi1J3OB43f1p8X",
          WideBanner: "_1hl09rgUVOJUMhgC33L7eo",
          AppBannerTitle: "_1iqjH40fN4Diar-d-rLbR5",
          NewsHubSubTitle: "_3tf3bdmBO0Ji0rv8PH-ZXz",
          AppBannerLogoCtn: "_2EV_WNLGjRLNX824mfis9O",
          AppBannerLogo: "dGGTg8iH8Z_d_p6nPFFlM",
          HeaderButtonDark: "_1sDn2dLVB1pIeh5UP4EOVT",
          HeaderFollowButton: "_1tnk5F-ooFjGdvCzXLwtmf",
          HeaderWishlistButton: "_371yXVkVSnacHxz1fMmGpT",
          AppBannerLink: "_3YomsTzhdiLRcSZkF8JtB8",
          AppBannerRSSLink: "_1HeKH4JMsCDXmXP3XD7C6t",
          AppBannerLinkDD: "_1afFDl3n1RB22K4gFglar",
          AppBannerLinkDDButton: "S9cqDrgEIhtUE6pU3-2iQ",
          DDButtonArrow: "_3URBCM-OKlL3sg0hORPS01",
          AppBannerLinkDDContainer: "_2cjCliV2mnVX6dlRRce-fD",
          WishlistBtnShort: "_3WcW8PJCSEWwVA6qJ-RUOF",
          RssRow: "_2pyH3D6qw0sOXhrtoYqCVL",
          AppPartnerEventsContainer: "_3GCEyyVil-cCS-8hoI2Zo1",
          PartnerEvent: "_1KsYSVzmvIfRivBTcx-_GE",
          LibraryViewSubtitle: "_1rbgKYHeRvzrIyqHCzaLIr",
          EventDetailsBody: "_3NW5vEM9HgfQrgR4W-Xy_s",
          NoScrollArrows: "_39hJ8cxSdqeE3ZR01bJLab",
          ControlSectionWidth: "_3yfs7fc5WEv6F9tPG4yq4g",
          ControlSectionRightSide: "_2tSyrRxMCRWK6K09JErgI_",
          GameArt: "_2a5oSdTIcFV3c3ymUNsu6l",
          ScrollButton: "_1t_97P9KMsEBaPq9y-6OUl",
          Up: "_3vBD2B7lrr6iXm8dGe71lI",
          Down: "_3VePRhMGWFsbGaZjSNXJjV",
          CloseButton: "_1_vCR1dPfyJ7_yukwDqblf",
          AnimIn: "_240i58XQ0w78YFrd_p-9UY",
          transitionIn: "_2jG5NuuER4JaHKuO9nA4KF",
          ClickableBG: "_308EDBzQTS8OgAxwxfq2UB",
          DirectionState: "Bv96jkkYqxrnA7xfPskjD",
          EventTypeAndTimeRow: "_3bWTO29arCCJ6PBGRZ7fRy",
          WithReminder: "_1C5DvpeSKLvf8M8uAdi50W",
          TimeandPostedBy: "_2WwG2r8yZuu2EMJgFTQZp8",
          EventType: "Udzrpqr8534T5DvVZveNP",
          PostedBy: "_2VqeQaZVaUkkEWaiLkmqmT",
          ReminderContainer: "_3Vf2MkZ_LWIoNVv36RwJtO",
          ReadMoreCnt: "_1YmaiDiNhC33cL5DKj05KQ",
          BackgroundAnimation: "_2-llXPi4w88rsWfJFYSLHB",
          "ItemFocusAnim-darkerGrey-nocolor": "_2eejrtSFYCSnzH8C6-WC3a",
          "ItemFocusAnim-darkerGrey": "oMlqiiSY2Eqr2ln_FmAg4",
          "ItemFocusAnim-darkGreySettings": "AcW48fP-EnfyD8bO6anBj",
          "ItemFocusAnim-darkGrey": "_3lAc02j3vPGIoXryYyGTZR",
          "ItemFocusAnim-grey": "_388VkzVpUFRuQ1HZEymCy",
          "ItemFocusAnim-translucent-white-10": "tK-6xcUa6TrN9X1V5zj25",
          "ItemFocusAnim-translucent-white-20": "_1UaaS_yXA7SqNdxVDXCD9W",
          "ItemFocusAnimBorder-darkGrey": "_1V7Z378RTDEmk3dXXGXsQa",
          "ItemFocusAnim-green": "_2ldXxMP_HINQZvEbjgDdbf",
          focusAnimation: "_3zr66n761wV-ZHFKw_Yvbn",
          hoverAnimation: "_1MvZ2haWg8XTcl8VHKnoS0",
        };
      },
      34542: (we) => {
        we.exports = {
          Ctn: "ZXluexXJ1Y_muqBcBgGU-",
          VisibilityOverride: "_1y7PCc5LUAg1_6yIpshcZa",
          CtnRegistered: "_3PeTrgTLLyRMIUb_pRn4rO",
          SessionTitle: "_3vGq3WcmmGaYbbqYkD9Ysp",
          SessionDesc: "_24r8E1kKzw_9iIVhmvEZ3T",
          SessionAudience: "_3DgrT27j0qIz8_26rX4hOc",
          SessionInfoLink: "_1KBfuvwvcwNpnVAMW0JxlH",
          SessionOptions: "_3KAHxFNUEscoxtvBzwWKvs",
          InstanceDivider: "_2IUfDPL02-oni7NXCV_ipu",
          SessionColumnCtn: "iUmtJvs3v_bmv-tu43tpL",
          SessionInstance: "_1igTM-TlnNkIhWxl95pTyB",
          Background: "_3k-Bve67pUbtbb7heNH--5",
          Button: "_2qgSQSN_hv-UncznBRb42v",
          Title: "_3iF42Uos8JELw32j386Kco",
          TimeFrame: "_3HLk01gOqM10DYThBCLuUx",
          MaxSize: "_3REuR3WLDb6JDzZpI2VkUz",
          SoldOut: "dndEdZn2hpJTIu4zpYoYG",
          Max: "_1-LTOHwZqSK67eUyq4qscx",
          Day: "_2Zkbwdhs4WPVI1ZyUHtHUG",
          Time: "_8oQG_Wbl2-Eamq1WKMAoo",
          Registering: "td3x9QaINc75mi2ppkGoF",
          Registered: "_1D1F4nOnNKanKGRqRk3pWr",
          RegisteredElsewhere: "_2jcdQDeozlBYhg3waCH-Dr",
          Unregistering: "twKyIz0VYgtl76vlWI0Xn",
          StatusText: "_33Gk1SfpMTUWDOWksSxEtX",
          CompleteRegistrationCtn: "_6ykmNnOs_SfkGOYurJogH",
          Visible: "_3WTs5L7ce_Du4_KNac_sXd",
          "confirm-panel-intro": "_1zMMdC3loRunAeI72QvaDX",
          ExpanderRow: "_3y3yND3p_J6RNdjtcaEBMA",
          FAQDisplay: "_2Sh_QTT9mWNhPZHHqdj1gN",
          SingleDayCtn: "_2Oiew_rwCOmnTk99m8bzBP",
          ScheduleTopDate: "_1-WKvbi_KTTmHoHJWC0BfO",
          ScheduleRow: "_3LI8YqHLQvj-FrIQyGTC30",
          ScheduleTimeColumn: "_1vNsS_XmyjaIia8mzWvz1X",
          Timezone: "D97ZIJASf3O_ddSVa2zzC",
          ScheduleSessionsColumn: "_2rvBPfiuqnVUSz34DmNK-r",
          ScheduleActionRow: "_16ZAklYwJzKFzKBVMTqx7y",
        };
      },
      33280: (we) => {
        we.exports = {
          PollBackground: "_1id2J6OtlRj0Ppiuep3ha",
          PollContainer: "_3yFlyjtNdLP96hRQ92y9we",
          PollQuestion: "_2ImZrvyKjXKlnNM6h_7qHT",
          PollOptions: "_1-_aGrJzdFf8uYUfDKEn30",
          PollOption: "_3hNd0q0tYO12nPDCPsT8sm",
          Selected: "_3Nv8BLF6dRk932f5NhyNIH",
          PollVoteIcon: "ziFphpM2Ie-orQ5ezpQqT",
          Disabled: "_1bO8azG0-IqxQ3AQbWtCxx",
          ContentRow: "_3Yb8eVHtZWf1AWt7VV3P-z",
          BackgroundBar: "_30b_e8W4Z94Lwn8x2U9TYH",
          ForegroundBar: "_3PFkx8XNigPW6CoYfHH5Yi",
          PctText: "_1RNbjKcBRtD4pseH6hyggg",
          OptionText: "_1qUCIT-7ueBBoNjoCvGfbP",
          PollStatus: "_3NDl2Pml7Uvse14r9SWJTD",
        };
      },
      14256: (we) => {
        we.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      6878: (we) => {
        we.exports = {
          Header1: "SPYFj8pCLpNmnuQJEDobC",
          Header2: "QuKtTJ4LCPUlQeWYfLNyX",
          Header3: "_3s7cUqglDds9wzcWb7OLz6",
          Link: "_29bMZB6BOQfTQ_3za-w60I",
          LinkHost: "_16eO9LHnJuheylkB3Fdrpn",
          LinkButton: "_2HnDgHQT_3ehcs4WgskKG5",
          LinkPill: "_3nRRZ1AKPWQnyWTcT1RDt9",
          UnorderedList: "_2FoSxA1yCqpvxdOJnu8N8Z",
          OrderedList: "vV4IwOV-RuzelptiRQ_ZS",
          StoreWidget: "_36Y-loIMvxDKY9RIVxecCp",
          MedalTVWidget: "_1j2vixiqbbe8GqxA-cmlhA",
          LoyaltyRewardCtn: "_14p7R6qC1Kkyg4Qal1UJZu",
          SaleSectionCtn: "_39HWXhhjsbML7K9sme9ItV",
          SaleTextCtn: "_2Tqq0UDtuHw6otaE2Ww46g",
          ReminderCtn: "_25AZkxZYa3ROp8PHchCq-k",
          BlockQuote: "_2cY7bYMGmnuPPhM3aMQMfa",
          SocialLink: "_2LAnc-M7XILk5D72Qy7V6q",
          SocialIcon: "dDjYNUHT-jcb_B0VGK6CP",
          LocalizeBlock: "_1oBceu_yGnJHhqsA8fmA7P",
          CheckMark: "_24AtTon5otxGQGBY3P6ATR",
          ScreenshotCarousel: "_3uA0hv9La9Do6XtRycM0RX",
        };
      },
      39978: (we) => {
        we.exports = {
          sketchfab_play_overlay_image: "j_bDCIOMLFNOKaIFJzk2_",
          sketchfabmodelembedded: "_1hkVJ0EfOR3lTom2cDAN4w",
          dynamiclink_box: "_2OrALNR-dII7L3YP3pXWBG",
          dynamiclink_preview: "_3__9JYEkVlbq76JT_4TByA",
          dynamiclink_content: "_2ocugWm5DDJzRPwAxIsCtq",
          dynamiclink_name: "_3a1nw-REuLvtrUfFX3lonG",
          dynamiclink_type: "_31hqFGM_Of2_4xkXfb8TtV",
          dynamiclink_author: "_13lYjZu0VIgol2-cHgw8vK",
        };
      },
      64502: (we) => {
        we.exports = { AppSummaryWidgetCtn: "_1-2t1NI3qbO2JgWmCss7AW" };
      },
      1078: (we) => {
        we.exports = {
          FlexColumnContainer: "_15ufNax9QUSW3N7J3t5TmY",
          FullStartTime: "_1YLHWZHuAxRYOyv0nq0a3Z",
          ReminderDialog: "_3YUEYUcuh0PTxYsV6Fecqq",
          ReminderOptions: "_1Tp8K4gynWBOBpC9tS_xXV",
          ReminderBackground: "TNf9_B9OYDQXSleTS1gAS",
          ReminderExpandsLeft: "_38Xly-p-GTyBu1lVv1KF79",
          ReminderOption: "_26nnhy-kEQVG1EJvwt-YOG",
          Unverified: "_1dcmAZnqCMpEs3PXIajJIN",
          CheckboxWrapper: "_1xuKEdr0rNMBRK_vYraObm",
          ReminderCheckBox: "vPo2jxLA9iAVrt49Ic3c1",
          IconMode: "_1YjsRp8XbwoXVWYYvWD7iv",
          RemindBell: "_3-_M2IUSKHovaZaejfEH3E",
          RemindCheck: "_2qaPrk1hI1cvMDPYnXO-kj",
          ReminderDefault: "_19p2Qdr48bduJICtjBoXVv",
          TextMode: "_553rCUt4qxX8_S5jBNMrv",
          ReminderCheck: "_3fMhCIg2SQlEWyw9rHKGCe",
          ReminderOpennedOptions: "vBuhkIZJzVjB-gDKqhho8",
          ReminderOptionsHeader: "_2oOZCpUHJOjdt7D5zkx0Ed",
          ReminderCalendarOptions: "VO6FStOkQjIXr-aZW1JBx",
          ReminderSettings: "_2Pn59J0keCBE-RnAuaUUVx",
          ReminderNotes: "_3qE0wUvpzn1HTPrT3R_wOv",
          RpcThrobber: "_3F3aByA4Tw1mRbNiiVtXP-",
        };
      },
      77078: (we) => {
        we.exports = {
          Pill: "_861OI3fFcj_3yxoWXG_5_",
          Button: "_1cZtQ0Bp-yHfF7HnFoKeQa",
        };
      },
      65088: (we) => {
        we.exports = { ImageBlocked: "_1q2rpNyMVSrPH9vV02Dtrp" };
      },
      65835: (we) => {
        we.exports = { Ctn: "_2L6sVk9vOgKcXO6DgZHpJ9" };
      },
      12247: (we) => {
        we.exports = {
          SteamAwardContainer: "_3n6v2rFCMX3yWMfZrlCn6g",
          InLibraryView: "pqLczqVU9TDbWz5pl3Dhl",
          SVGIcon_DialogCheck: "_3ccByQfkFeqPu_u0ZEuu2b",
          SteamAwardHeader: "_2jgrTr2L4JVpD3vsEejL4u",
          SteamAwardHeaderImage: "_lRFQTx2beRUJL_3ltFfr",
          SteamAwardMainCtn: "_1uGju6QeFG7khpqA7DOs0-",
          SteamAwardMainTitle: "_161Ybvvo7TQ80J6yOfcxC5",
          SteamAwardSubTitle: "Sxxelbb28sRAaDXPxgcHP",
          SteamAwardLearnMore: "VQlY6MEAqF6Wsflo-Q4Wz",
          BottomRight: "zr64QF0O74AQ9RMG-dGnw",
          SteamAwardHeaderText: "_2mrzKOE-ejrZezNROw3GcQ",
          LinkText: "_2x4pgJBF4vbwBJ4KH2VOHG",
          SteamAwardVoteWidget: "khWz0kU5EooSG60KYdU1K",
          SteamAwardVotePrompt: "H5jrPn7OY-0ToSesPTrI6",
          SteamAwardCategoryTitle: "JVE9ORqYtUCERl3y2i7_X",
          VotingTitle: "_32ZmvScTqfRjiW9XXgyqR2",
          SteamAwardCategoryDesc: "_1V-8WYatw7PvjVj9hsAptM",
          SteamAwardVoteButtonArea: "_1v9LHwNb9fLu4yXs5L0jjz",
          SteamAwardVoteButton: "cTcgISesI0T2M-9yed2AU",
          SteamAwardVoteButtonText: "_247y340DSkN1t7QC8tUkFx",
          SteamAwardVoteButtonSubmitted: "_1ouD4mct3_CdBoy_lzVyFJ",
          NominateCtn: "_1SKPLx2FBvP9iC-lJHTkKQ",
          SteamAwardNominateButton: "_1uxCjZZ940xsM0idye1IP-",
          Nominated: "_1No9r92B3LLgMOaSMSC9vE",
          SteamAwardNominationWidget: "_38gTf-DsRc7bVnxxQXxT3B",
          SteamAwardLinkToNominationPage: "_3p83sGhSP-hikRKwITXId-",
          SteamAwardVoteCheckBox: "_1G4MUqubjzDize874UIeYh",
          SteamAwardModalGameTitle: "_15lc0ft7pgAlFXYbgePb-8",
          ExpiredEventHeader: "_3O3XsKT-SiMNsMqyidMLvS",
          AwardCategoriesCtn: "_2u4z7OT5MqNj-6wojCGnsr",
          SteamAwardConflictModal: "_2Xqc9FL9PfCQl8Fo8d7I_L",
          ConflictBody: "_3WKl_XpHUMGcIm4cNhlc_W",
          NominationSwitchCtn: "r9nDOvHWyABfkiiurnMwl",
        };
      },
      56330: (we) => {
        we.exports = {
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
      90316: (we) => {
        we.exports = {
          narrowWidth: "500px",
          EventDetailsPageContainer: "_2Ptras-ZC31rwdT6pD-t0a",
          EventNotPublicBar: "_214UHKV-VeP2IhhsZ2LVcn",
          EventNotPublicBarTitle: "acDtTp9VueGVdAapPDLxy",
          EventNotPublicBarDetail: "_1fbHYCMO42X_XiaPzyCcQk",
          EventBackgroundBlurCtn: "_32nPM5nI8cmMdkvRnsUcq",
          EventBackgroundBlur: "stsss-bTNuazY8FYtvTOX",
          DetailArtworkAgeAppropriate: "_1p_lsRZvAYiGSonqGbCnrp",
          DetailArtworkAgeNotAppropriate: "_3x5pK4kfX6SQEKh9iSj3H-",
          EventCoverImageBlr: "_3xNobHnL6L5HNoDQf8AHUo",
          EventBodyCtn: "_3o4SVY-lALGHvkOPxiClcu",
          EventBodyPosition: "_3lIxPlLiNjLik6YIM8DKpk",
          EventBody: "_3aht--c1L66YvvpY-Il67f",
          EventBroadcastCtn: "_1Ph1iFKAgY5MbG0BLSObbI",
          EventColumns: "_1PEIfuF8koQapWSDE4ixM8",
          EventCoverImageCtn: "FZiaqIAvLKRo2ye9j3cq0",
          NoTitleArtwork: "_3Y40JAThJ65ZCkZaMsdrGm",
          ScreenshotInsteadOfCover: "_2r6un4LwM4IZjQFRprhIL3",
          EventCoverImage: "_17G2yhjdc_ZmGlMv-L-S05",
          EventCoverImageBackground: "_2-IygC3-t05_RYwPl6Fkgt",
          InLibraryView: "_3_SEiDNs-lzwV7cTF6gcgt",
          InEditor: "_2YuATTfMo6qZqsst8azM2p",
          MaskImages: "_2DmRfvoCf1m6HLz3w6uKPl",
          EventCoverImageFuzz: "_2EWL0Txuk_th1gh-UxYPPx",
          LibraryEventTitleContainer: "ZHAfj0MPg1zDLXRnCzSsx",
          CoverImageGradient: "_1_x4oDqLbWfiaDp5HQ2yA8",
          EventDetailTitleImg: "_1RA5eG1kXW89QB1SG3mq04",
          EventDetailTitleDesc: "_3Ej2uoApLQ756OReRtcQ2f",
          EventDetailsSticky: "_3IxVZE9uydjh3cA9kmtnk7",
          EventDetailUserType: "_3phfIcOe_STA7hSoFfIxlE",
          EventDetailGameCallToAction: "JOkXFrkqayZ-Pg2Fr46Ho",
          EventDetailTimeInfo: "_2KsEbGy9kiSDeQpcqEc9DG",
          EventDetailsDescription: "_2orfVuUro8BNFNNhRfGk4n",
          EventDetailsBody: "A_A2B6fTn_MPLlGCmsLtd",
          EventDetailsGame: "_1JqXpZvEA66lA79AoE1A4i",
          EventDetailsAvatar: "_2U_20VMsLlLdv66vI22zJg",
          GameActions: "bGROTLQdP5BDMIzo0cL9T",
          ActionButton: "_26-KZHJ9fTyRZHH2c2H6Y2",
          Ownership: "_2VkXpaIdUFw9YfZ7NOSuZO",
          EventDetailsType: "_2u9c-A3-fBObro9MTIQ1os",
          EventDetailTitle: "TqEPC9bhvVpZ1rb3Z8Mbd",
          EventDetailTitleContainer: "_3z2NYCkFizMu4fMvWTIBUG",
          EventDetailsSubTitle: "_20f2sKS2M7PlPSnPCinT26",
          EventDescriptionRichField: "_1dV0eemBulIeNuwlrxbJA_",
          ToolBar: "zMpwi4v_VKAJy80GriVLg",
          EventDescriptionContainer: "_2-t9DuSXZ-g32FrXvXuRfC",
          EventDescriptionArea: "_3UMJE2bBtqZcj2w_S-n8o4",
          LibraryEventBodyContainer: "_32mHvRSmD7AVK9OIOPlaFu",
          "lang_zh-cn": "_2oAxPvOHyVkOcOFbH-ROOn",
          lang_ko: "_36n2d0WrYP7qNfJaBDPBzE",
          lang_ja: "-TO1bNNGYVahD_n4sJP5r",
          "lang_zh-tw": "_3lwKp3Y9WtjxoKIhneSXGJ",
          StartDate: "_1Maw_Rw6sOKYC1KkOI1xM",
          EndDate: "vjGzCo2ZaJr6KcbuTta8L",
          MultiDateAndTime: "hrpa5B__OlJvPDvHQM_d-",
          RightSideTitles: "efy3k8RozzxfFidgbdfZZ",
          DisplayAdminPanel_Title: "_1lmj3YadvgLSNGiTrVsnnT",
          DateAndTime: "_3Sy57gZmUNuNdOI8qtPQVs",
          NoDateAndTime: "_3lh2YoTQ3RiHxrfuO3CVjL",
          AppSummaryCtn: "Wk21cv1qcYBOF2PSAOfb-",
          AppSummaryWidgetTitleCtn: "jJFfoBi2WDn1ym8KCLfLr",
          Title: "_2gsoDhNzhAXpECJk2aM94W",
          AppSummaryWidgetCtn: "_2jRJR7Vuvy9GStGxMc06AQ",
          DisplayAdminPanel: "XshNh8OHVlOoxz_Yj0fkc",
          Sticky: "_3mQwJy8e1PrRXgZq-rfYHL",
          DisplayAdminPanelMarker: "_3oBRxSIrR4NU_SUyHm24oc",
          DisplayAdminPanelClose: "_1D7XHqTP4JUViNgnjIQ9qx",
          Locked: "_1uXh_NDjzcbWYSUJnopy8Z",
          DisplayAdminPanel_ctn: "_1SQm1cGP42xfEdQhin6L40",
          DisplayAdminPanel_TopSpacer: "_3yTv-i_5aQ3b13xZpESEk-",
          DisplayAdminPanel_Spacer: "_6pX37H30C0s-x4mIFjxUX",
          AdminButton: "_1J0n9Gp8bS7Mha2SNQSwXP",
          EditorStatsCtn: "e2BAgiTc6P_7haFD_YWzs",
          VisibilityNote: "_1G3X_jfMgGX1nzeOAvPZNG",
          EditorStatsRow: "_2SecokIlleKz0K30ieApg5",
          SteamBlog: "_1rafn02Kz4HF1-3xfmuaR0",
          VO: "_1-pFh2QlJBUeqmXrWcbTQQ",
          LunarNewYearOpenEnvelopeVideoDialog: "_1-SzihnWiO-8bBYWJ-TS-4",
          Container: "_1dcfd1Jxk-yCCdG0k1eyG-",
          Column: "_3o_dPHiTf_pT5uP0TuTE2V",
          VideoBox: "KAf3yvFJr1ynRXT8aqd3s",
          CoinText: "_14dU2UGt1PmbFzm_3MFVsw",
          Visible: "_2bKyVv-GvmJOHaKOyny5tE",
          LunarNewYearOpenEnvelopeVideo: "_2JgvPxvGXJvSckj2hqob0v",
          StoryHeader: "uJBQiPn1x-EafTRgDg6M4",
          StorySubHeader: "hl9GlxJvvzMyW_nSZzClV",
          StoryText: "_1vUbVy_chcUkci3kdPrSUf",
          StoryPicture: "_1ovBW-Uq5McD_BCBZTM_9a",
          CheckBackText: "_3FFfw7Avb_USRJcepkNLAO",
          DancingRat: "_3gJiVpOab5ooTJ9VkQZVJL",
          Links: "_2U9E5YNMewy5F336yikcMG",
          MarketLink: "_19WRlHb-r_EpFcgEtFL8iV",
          MarketLinkhover: "Q7KDk8kBk01MxhM_KZoqt",
          ReadMoreCnt: "_1L8MouFdSBwf8mcqLtAIPu",
          VerticalLocalDateAndTime: "_1mp7jCbQZOXCcY5CmAu7xm",
        };
      },
      66661: (we) => {
        we.exports = { ReferencedApps: "_1bfuawEqNMIto67VTkwdbE" };
      },
      37341: (we) => {
        we.exports = {
          CheckMark: "_2RwDkHMoOnosJANzYXpE",
          DialogCtn: "_1un0dZktOVEKH7zzpSTtoF",
          EquipCtn: "_1zUv_m9l3wknw_k_rwz0uy",
        };
      },
      15392: (we) => {
        we.exports = {
          Link: "-HlDBB290kjpl61uUmRed",
          Banner: "_2bT8irkKNnA5sxFG3MUXzH",
          Big: "sGy-bB7uqEt4Hoe7U5iA1",
          Mobile: "mhii5hgMCQvO2tXOUdWPQ",
        };
      },
      39256: (we) => {
        we.exports = { ErrorDiv: "XeZExtCZ_zIcbkPRCqsnV" };
      },
      11279: (we) => {
        we.exports = { ScrollSnapCarousel: "_1nUtBXgWizhgU1jv-8wVC7" };
      },
      12443: (we) => {
        we.exports = {
          AppSocialLinksCtn: "_1wKUEA0cYqeUELXMe3Tp6T",
          AppSocialLinks: "YMmXzjieZthpAehitId4M",
          AppSocialLinkIcon: "OlwlyAPTdpJ7OieZmqzhc",
          AppSocialLinkWithText: "_3BKcmMK-HSkKmQqRCx9HdA",
          AppSocialText: "bJf5nxr6o9SG4mWXm7qz-",
        };
      },
      19432: (we) => {
        we.exports = { BroadcastCtn: "_3HRa-mVPX65qnntN2DS0xc" };
      },
      55351: (we) => {
        we.exports = {
          DateAndTime: "_2V6GLdiU4guy4ND3n4Usgg",
          DateAndTimeInline: "HZ6b2d4r4EFnT_1BeU5vo",
          At: "Fn5EUtWkwSAw_gbbiySKN",
          ActiveEvent: "rT7EkJjqw27KBB7HxAAWk",
          ActiveEventCallOut: "_2pJftSRjT_UngZZ4BJimwg",
          RightSideTitles: "_4LAnPYKRPeF-QDReu_VGm",
          DateToolTip: "_2E5LHvnVEF3dSVV3wrDflm",
          ShortDateAndTime: "MBkkhT4wei3tWetnWbiqn",
          ShortDateRange: "_3CN6I3krBRNzD7kCuKQ_w7",
        };
      },
      61738: (we, ye, s) => {
        var n = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function b(a) {
          var t = m(a);
          return s(t);
        }
        function m(a) {
          if (!s.o(n, a)) {
            var t = new Error("Cannot find module '" + a + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[a];
        }
        (b.keys = function () {
          return Object.keys(n);
        }),
          (b.resolve = m),
          (we.exports = b),
          (b.id = 61738);
      },
    },
  ]);
})();
