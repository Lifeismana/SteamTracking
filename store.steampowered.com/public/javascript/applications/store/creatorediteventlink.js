/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [73687],
    {
      56492: (K, C, t) => {
        "use strict";
        t.d(C, {
          Bw: () => ee,
          EX: () => u,
          Hx: () => D,
          JP: () => l,
          LJ: () => H,
          OG: () => U,
          PH: () => p,
          T7: () => b,
          sY: () => k,
          tj: () => E,
          yh: () => $,
        });
        var n = t(7850),
          d = t(50974),
          a = t(99412),
          i = t(24660),
          v = t(72865),
          s = t(90626),
          S = t(92757),
          J = t(83482),
          Z = t(16369),
          Q = t(10303),
          N = t(64165),
          y = t(71742),
          _ = t(53113),
          w = t(3166),
          x = t(72609),
          P = t(39905),
          V = t(47875),
          m = t(40358),
          p = ((e) => (
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
            (e.k_eStoreHardwarePreview = "hardwarepreview"),
            (e.k_eStoreUsersNewsHub = "usernewshub"),
            e
          ))(p || {});
        const M =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function R(e) {
          return e.match(M)?.[1];
        }
        function A(e, o) {
          if (!o) return !1;
          const c = !0,
            r = R(window.location.href),
            h = c && r == "news",
            I = o.GetEventType() == a.ajI,
            g = !1,
            f = o.appid ? "games" : "groups",
            T =
              g &&
              f == r &&
              ((o.appid && o.appid === w.UF.APPID) ||
                (!o.appid &&
                  o.clanSteamID.GetAccountID() === w.UF.CLANACCOUNTID));
          switch (e) {
            case "view":
              return T || (h && !k());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return T;
            case "admin":
              return I ? !1 : T;
            case "websitehub":
              return T || h;
            case "storeview":
              return h && !k();
            case "newshub":
            case "store":
            case "usernewshub":
              return h;
            case "sale":
              return !1;
            case "hardwarepreview":
              return !1;
            default:
              return (
                (0, y.wT)(!1, "Unknown route specified for link: " + e), !1
              );
          }
        }
        function l(e) {
          const o =
            x.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            e.AnnouncementGID;
          return {
            strFacebookUrl: o + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: o + "?site=twitter",
            strRedditUrl: o + "?site=reddit",
          };
        }
        function u(e) {
          return G(e, "sale", "absolute");
        }
        function L(e, o) {
          return $(e, o, "sale", "absolute");
        }
        function b(e) {
          return G(e, "storeview", "absolute");
        }
        function W(e, o) {
          return $(e, o, "storeview", "absolute");
        }
        function X(e, o, c) {
          if (c)
            return (
              (e ? "/games/" + w.UF.VANITY_ID : "/groups/" + w.UF.VANITY_ID) +
              "/"
            );
          const r = e ? "ogg/" + e : "gid/" + o.ConvertTo64BitString();
          return x.TS.COMMUNITY_BASE_URL + r + "/";
        }
        function H() {
          return "news";
        }
        function k() {
          return !1;
        }
        function z(e) {
          return e.clanSteamID.GetAccountID() === d.gt && !1;
        }
        function G(e, o, c) {
          const { data: r } = (0, m.J$)(e?.appid ? { appid: e.appid } : void 0);
          if (e) return $(e, r, o, c);
        }
        function $(e, o, c, r) {
          const h = r === "relative",
            I = !1,
            g = h ? "/" : x.TS.STORE_BASE_URL,
            f = X(e.appid, e.clanSteamID, h);
          c === "view"
            ? (c = I ? "communityview" : "storeview")
            : c === "websitehub" &&
              (c = I ? "community_announcehub" : "newshub");
          const T = e.GID ? e.GID : "",
            j = e.AnnouncementGID ? e.AnnouncementGID : "",
            F =
              e.BIsOGGEvent() &&
              e.appid &&
              o &&
              e.BHasSaleUpdateLandingPageVanity(),
            Y = e.GetEventType() == a.ajI;
          switch (c) {
            case "publish":
              return (
                f +
                (e.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + j
                  : "partnerevents/publish/" + T + "?tab=publishing")
              );
            case "edit":
              return (
                f +
                (e.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + j
                  : "partnerevents/edit/" + T)
              );
            case "editBroadcast":
              return (
                f +
                (e.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + j
                  : "partnerevents/edit/" + T) +
                "?tab=broadcast"
              );
            case "migrate":
              return f + "partnerevents/migrate_announcement/" + j;
            case "preview":
              return Y
                ? f + "partnerevents/previewsale/" + T
                : f +
                    (e.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + j
                      : "partnerevents/preview/" + T);
            case "previewsale":
              return f + "partnerevents/previewsale/" + T;
            case "admin":
              return Y
                ? `${g}curator/${e.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : f + "partnerevents";
            case "community_announcehub":
              return f + "announcements";
            case "newshub": {
              const q = e.appid
                ? `app/${e.appid}`
                : `group/${e.clanSteamID.GetAccountID()}`;
              return g + `${H()}/${q}`;
            }
            case "store":
              return (
                g +
                (e.appid
                  ? "app/" + e.appid
                  : "curator/" + e.clanSteamID.GetAccountID())
              );
            case "sale":
              return e.jsondata.bSaleEnabled
                ? F
                  ? `${(0, V._)(o)}/${e.GetSaleUpdateLandingPageVanity()}`
                  : Y
                    ? `${g}curator/${e.clanSteamID.GetAccountID()}`
                    : g +
                      (0, N.n)(
                        e.clanSteamID.GetAccountID(),
                        e.GetSaleVanity(),
                        !!e.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath,
                      )
                : g;
            case "hardwarepreview":
              return z(e) ? `${g}hardware_v2/${j}?beta=1` : g;
            case "communityview":
              return f + "announcements/detail/" + j;
            case "storeview": {
              if (e.clanSteamID.GetAccountID() == (0, Z.H)())
                return `${x.TS.STORE_BASE_URL}meetsteam/${T}`;
              if (F)
                return `${(0, V._)(o)}/${e.GetSaleUpdateLandingPageVanity()}`;
              if (Y) return `${g}curator/${e.clanSteamID.GetAccountID()}`;
              {
                const q = e.appid
                    ? `app/${e.appid}`
                    : `group/${e.clanSteamID.GetAccountID()}`,
                  te = k() ? "view_v2" : "view",
                  O = e.bOldAnnouncement ? `old_view/${j}` : `${te}/${T}`;
                return `${g}${H()}/${q}/${O}`;
              }
            }
            case "usernewshub":
              return `${g}${H()}/`;
            default:
              return (0, y.wT)(!1, "Unknown route specified for link"), "";
          }
        }
        function ee(e, o, c) {
          const r = c === "forceAbsolute" || !A(o, e);
          return G(e, o, r ? "absolute" : "relative");
        }
        function B(e, o, c, r) {
          const h = r === "forceAbsolute" || !A(c, e);
          return $(e, o, c, h ? "absolute" : "relative");
        }
        function U(e) {
          const { eventModel: o, route: c, bPopup: r = !0 } = e,
            h = A(c, o),
            I = G(o, c, h ? "relative" : "absolute");
          return (
            s.useEffect(() => {
              I && (r ? window.open(I) : window.location.assign(I));
            }, [r, I]),
            h && I ? (0, n.jsx)(S.rd, { push: !0, to: I }) : null
          );
        }
        function D(e, o, c) {
          const r = X(e, o, !1);
          return c === "admin" ? r + "partnerevents" : "";
        }
        function E(e) {
          const { eventModel: o, preferredFocus: c } = e,
            { bCanUseLink: r } = s.useContext(Q.I),
            h = (0, v.n9)(),
            I = (0, S.W6)(),
            g = r && A(e.route, o),
            f = G(o, e.route, g ? "relative" : "absolute"),
            T = !g && f ? (0, _.NT)(f) : f,
            j = g || !T ? T : (0, J.wJ)(T, h),
            F = G(o, "websitehub", "absolute"),
            Y =
              e.route != "websitehub"
                ? P.Z.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            q = s.useCallback(() => {
              F && window.location.assign(F);
            }, [F]);
          return o
            ? g
              ? (0, n.jsx)(i.Ii, {
                  style: e.style,
                  className: e.className,
                  href: I.createHref({ pathname: j }),
                  onClick: (te) => {
                    j && (e.onClick?.(te), I.push(j), te.preventDefault());
                  },
                  onOptionsActionDescription: Y,
                  onOptionsButton: Y ? q : void 0,
                  preferredFocus: c,
                  children: e.children,
                })
              : (0, n.jsx)(i.Ii, {
                  href: j,
                  style: e.style,
                  className: e.className,
                  onClick: e.onClick,
                  preferredFocus: c,
                  onOptionsActionDescription: Y,
                  onOptionsButton: Y ? q : void 0,
                  children: e.children,
                })
            : null;
        }
      },
      16369: (K, C, t) => {
        "use strict";
        t.d(C, { H: () => a });
        var n = t(99412),
          d = t(72609);
        const a = () => (d.TS.EUNIVERSE === n.Rv ? 2581 : 45267781);
      },
      24525: (K, C, t) => {
        "use strict";
        t.d(C, { $e: () => d, B7: () => i, Pe: () => p, Pv: () => a });
        const n = 0,
          d = 1,
          a = 2,
          i = 4,
          v = 8,
          s = 16,
          S = 32,
          J = 64,
          Z = 128,
          Q = 256,
          N = 512,
          y = 1024,
          _ = 2048,
          w = 4096,
          x = 8192,
          P = 16384,
          V = 32768,
          m = 65536,
          p = 1073741824,
          M = null;
      },
      83784: (K, C, t) => {
        "use strict";
        t.d(C, { J: () => n, S: () => d });
        function n(a) {
          return a
            ? !!(
                a.related_items &&
                a.related_items.standalone_demo_appid &&
                a.related_items.standalone_demo_appid.length > 0 &&
                a.related_items.standalone_demo_appid[0]
              )
            : !1;
        }
        function d(a) {
          return !a || !a.related_items?.standalone_demo_appid
            ? []
            : a.related_items?.standalone_demo_appid;
        }
      },
      47875: (K, C, t) => {
        "use strict";
        t.d(C, { _: () => a, l: () => i });
        var n = t(72609),
          d = t(83784);
        function a(v, s = !1) {
          if (v)
            return s && (0, d.J)(v)
              ? `${n.TS.STORE_BASE_URL}app/${((0, d.S))(v)[0]}`
              : `${n.TS.STORE_BASE_URL}${v.store_url_path}`;
        }
        function i() {
          window.location.href = `${n.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        }
      },
      67529: (K, C, t) => {
        "use strict";
        t.d(C, { IU: () => Z, by: () => Q, sc: () => v });
        var n = t(3166),
          d = t(35413),
          a = t(71742),
          i = t(24525);
        const v = 0,
          s = "061818254b2c99ac49e6626adb128ed1282a392f",
          S = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          J = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          Z = 120;
        class Q {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(_) {
            this.m_unAppID = _;
          }
          get appid() {
            return this.m_unAppID;
          }
          get is_initialized() {
            return this.m_bInitialized;
          }
          get is_valid() {
            return this.m_bInitialized && !!this.m_strName;
          }
          get name() {
            return this.m_strName;
          }
          get icon_url_no_default() {
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, s);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, s);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == i.B7 || this.apptype == i.Pv;
          }
          BuildAppURL(_, w) {
            return _
              ? n.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  _ +
                  ".jpg"
              : (0, d.t)(w);
          }
          DeserializeFromMessage(_) {
            (this.m_bInitialized = !0),
              (this.m_strName = _.name()),
              (this.m_strIconURL = _.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = _.app_type());
          }
          DeserializeFromAppOverview(_) {
            _.icon_hash() && _.app_type() != i.Pe
              ? ((this.m_bInitialized = !0),
                (this.m_strName = _.display_name()),
                (this.m_strIconURL = _.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = _.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(_) {
            try {
              (this.m_strName = _.strName),
                (this.m_strIconURL = _.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(_.strUpdatedFromServer)),
                (this.m_eAppType = _.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, a.wT)(
                this.m_bInitialized,
                "Attempting to serialize an uninitialized AppInfo object for caching!",
              ),
              this.m_bInitialized
                ? {
                    strName: this.m_strName,
                    strIconURL: this.m_strIconURL,
                    strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                    eAppType: this.m_eAppType,
                  }
                : null
            );
          }
        }
        class N {}
      },
      35413: (K, C, t) => {
        "use strict";
        t.d(C, { d: () => d, t: () => a });
        var n = t(3166);
        const d = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function a(i, v) {
          let s = ".jpg";
          (!i || i === "0000000000000000000000000000000000000000") && (i = d),
            i.length == 44 && ((s = i.substr(-4)), (i = i.substr(0, 40)));
          let S = n.TS.AVATAR_BASE_URL;
          return (
            S ||
              ((S = n.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (S += i.substr(0, 2) + "/")),
            (S += i),
            v && v != "small" && (S += "_" + v),
            (S += s),
            S
          );
        }
      },
      73191: (K, C, t) => {
        "use strict";
        t.d(C, { Hh: () => Q, vs: () => J });
        var n = t(7850),
          d = t(90626),
          a = t(96538),
          i = t(56330),
          v = t.n(i),
          s = t(18210),
          S = t(85599);
        function J(N) {
          const [y, _] = (0, d.useState)(() => !!N),
            [w, x] = (0, d.useState)(!1),
            [P, V] = (0, d.useState)(!1),
            [m, p] = (0, d.useState)(null),
            [M, R] = (0, d.useState)(null),
            [A, l] = (0, d.useState)(null),
            [u, L] = (0, d.useState)(null),
            [b, W] = (0, d.useState)(null);
          return {
            bLoading: y,
            bError: w,
            bSuccess: P,
            strError: m,
            strSuccess: M,
            elSuccess: u,
            elError: A,
            strThrobber: b,
            fnSetLoading: _,
            fnSetError: x,
            fnSetSuccess: V,
            fnSetStrError: p,
            fnSetStrSuccess: R,
            fnSetElSuccess: L,
            fnSetElError: l,
            fnSetThrobber: W,
          };
        }
        function Z(N, y) {
          y != k_EResultOK ? N.fnSetError(!0) : N.fnSetSuccess(!0);
        }
        function Q(N) {
          const {
              strDialogTitle: y,
              state: _,
              closeModal: w,
              strThrobber: x,
            } = N,
            {
              bLoading: P,
              bError: V,
              bSuccess: m,
              strError: p,
              strSuccess: M,
              elSuccess: R,
              elError: A,
              strThrobber: l,
            } = _;
          return V || p || A
            ? (0, n.jsxs)(a.o0, {
                strTitle: y,
                bAlertDialog: !0,
                closeModal: w,
                className: i.SuccessErrorDialog,
                children: [
                  !!p &&
                    (0, n.jsx)("div", {
                      className: i.ErrorStylesWithIcon,
                      children:
                        p || (0, s.we)("#Error_ErrorCommunicatingWithNetwork"),
                    }),
                  !!A && A,
                ],
              })
            : m || M || R
              ? (0, n.jsx)(a.o0, {
                  strTitle: y,
                  strDescription: M || (0, s.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: w,
                  className: i.SuccessErrorDialog,
                  children: (0, n.jsx)(n.Fragment, { children: !!R && R }),
                })
              : (0, n.jsx)(a.o0, {
                  strTitle: y,
                  className: i.SuccessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                  children: (0, n.jsx)(S.t, {
                    string: x || l || (0, s.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                });
        }
      },
      96538: (K, C, t) => {
        "use strict";
        t.d(C, {
          mt: () => J,
          o0: () => x.o0,
          eV: () => P.eV,
          KG: () => x.KG,
          Ee: () => x.Ee,
          x_: () => v.x_,
          of: () => N,
          pY: () => x.pY,
          EN: () => i.E,
        });
        var n = t(7850),
          d = t(90626),
          a = t(16412),
          i = t(69168),
          v = t(50731),
          s = t(15568);
        function S(m) {
          const { labelledBy: p } = m || {},
            [M, R] = d.useState(void 0),
            A = d.useMemo(() => ({ setHeaderId: R }), []);
          return { headerId: p || M, context: A };
        }
        function J(m) {
          const {
              active: p,
              onDismiss: M,
              className: R,
              modalClassName: A,
              bGamepadUIScrollWithin: l,
              children: u,
              ...L
            } = m,
            { headerId: b, context: W } = S({
              labelledBy: m["aria-labelledby"],
            });
          return (0, n.jsx)(a.t6.Provider, {
            value: W,
            children: (0, n.jsx)(i.E, {
              active: p,
              children: (0, n.jsx)(v.x_, {
                onEscKeypress: M,
                className: A,
                bGamepadUIScrollWithin: l,
                children: (0, n.jsx)(a.UC, {
                  role: "dialog",
                  "aria-labelledby": b,
                  className: R,
                  ...L,
                  children: u,
                }),
              }),
            }),
          });
        }
        function Z(m) {
          const {
              onDismiss: p,
              className: M,
              modalClassName: R,
              bGamepadUIScrollWithin: A,
              children: l,
              ...u
            } = m,
            { headerId: L, context: b } = S();
          return jsx(Dialog.DialogStructureContext.Provider, {
            value: b,
            children: jsx(PopupWindow, {
              ...u,
              onDismiss: p,
              children: jsx(ModalPosition, {
                onEscKeypress: p,
                className: R,
                bGamepadUIScrollWithin: A,
                children: jsx(Dialog.Content, {
                  role: "dialog",
                  "aria-labelledby": L,
                  "aria-label": u.strTitle,
                  className: M,
                  children: l,
                }),
              }),
            }),
          });
        }
        const Q = (m) => Z({ modal: !0, ...m });
        function N(m) {
          const { className: p, children: M } = m;
          return (0, n.jsx)(i.E, {
            active: !0,
            children: (0, n.jsx)("div", { className: p, children: M }),
          });
        }
        var y = t(30343);
        function _(m) {
          const p = React.useMemo(() => w(), []);
          return jsx(DialogOverlay, { ...m, DialogWrapper: p });
        }
        function w() {
          return function (p) {
            const { className: M, active: R, children: A, modalKey: l } = p,
              u = React.useRef(void 0);
            return (
              useActivateNavTree(u, R, !0),
              jsx(FocusNavigationRoot, {
                className: M,
                navTreeRef: u,
                modal: !0,
                enabled: R,
                navID: `ModalDialogOverlay_${l}`,
                children: A,
              })
            );
          };
        }
        var x = t(1880),
          P = t(90506),
          V = t(47515);
      },
      15568: (K, C, t) => {
        "use strict";
        t.d(C, { wA: () => m });
        var n = t(7850),
          d = t(1418),
          a = t(2259),
          i = t(90626),
          v = t(72739),
          s = t(71568),
          S = t(9705),
          J = t(34360),
          Z = t(31032),
          Q = t(69168),
          N = t(83203),
          y = t(44930),
          _ = t(36707),
          w = t(25091);
        function x(l) {
          const { popup: u, className: L, ...b } = l,
            W = (0, w.GD)(u),
            X = i.useRef(null);
          return (
            i.useEffect(() => {
              const H = X.current;
              if (H && (0, y.Fj)(u, "Window.SetResizeGrip")) {
                let k = 0,
                  z = 0;
                const G = H.getBoundingClientRect(),
                  $ = H.ownerDocument.defaultView;
                G &&
                  $ &&
                  !W &&
                  ((k = Math.ceil($.innerWidth - G.left)),
                  (z = Math.ceil($.innerHeight - G.top))),
                  u.SteamClient.Window.SetResizeGrip(k, z);
              }
              return () => {
                (0, y.Fj)(u, "Window.SetResizeGrip") &&
                  u.SteamClient.Window.SetResizeGrip(0, 0);
              };
            }, [u, W]),
            W
              ? null
              : (0, n.jsx)("div", {
                  className: (0, _.A)("window_resize_grip", L),
                  ref: X,
                  ...b,
                })
          );
        }
        var P = t(30096),
          V = t(3166);
        const m = (l) => p({ modal: !0, ...l });
        function p(l) {
          const u = (0, s.R7)().ownerWindow,
            L = (0, V.Qn)(),
            [b, W] = i.useState(() =>
              L ||
              (l.onlyPopoutIfNeeded === !0 &&
                l.popupHeight < u.innerHeight * 0.9 &&
                l.popupWidth < u.innerWidth * 0.9 &&
                u.document.visibilityState == "visible")
                ? "inline"
                : "popout",
            );
          return b === "inline"
            ? (0, n.jsx)(Q.E, { active: !0, children: l.children })
            : b === "popout"
              ? (0, n.jsx)(R, { ...l })
              : null;
        }
        function M(l) {
          const {
              popup: u,
              children: L,
              bFitToContent: b,
              className: W,
              ...X
            } = l,
            H = i.useCallback(
              (z) => {
                const G = Math.ceil(z.borderBoxSize[0].inlineSize),
                  $ = Math.ceil(z.borderBoxSize[0].blockSize);
                u?.SteamClient.Window.ResizeTo(G, $, !0);
              },
              [u],
            ),
            k = (0, a.wY)(H);
          return (0, n.jsx)("div", {
            className: (0, _.A)("PopupFullWindow", b && "FitToContent", W),
            ref: b ? k : void 0,
            ...X,
            children: L,
          });
        }
        function R(l) {
          const {
              strName: u,
              strTitle: L,
              popupWidth: b,
              popupHeight: W,
              browserType: X,
              onDismiss: H,
              bFitToContent: k,
              refPopup: z,
              children: G,
              titleBarClassName: $,
              saveDimensionsKey: ee,
            } = l,
            U = (0, s.R7)()?.ownerWindow,
            D = (0, Z.yk)(),
            e = { ...(0, S.h3)(ee), onClose: H };
          let o = 0;
          l.resizable && (o |= s.Wf.Resizable),
            (l.minWidth || l.minHeight) &&
              (o |= s.Wf.ApplyBrowserScaleToDimensions),
            l.fullscreen && (o |= s.Wf.FullScreen);
          const c = "PopupWindow_" + (u ? `${u}_` : "") + i.useId(),
            { popup: r, element: h } = (0, S.OJ)(
              c,
              {
                title: L,
                dimensions: { width: b, height: W },
                html_class: "client_chat_frame fullheight ModalDialogPopup",
                body_class: "fullheight ModalDialogBody",
                popup_class: "fullheight",
                browserType: X,
                minWidth: l.minWidth,
                minHeight: l.minHeight,
                replace_existing_popup: !0,
                center_on_window: D?.BCenterPopupsOnWindow() ? U : void 0,
                eCreationFlags: o,
                target_browser: D?.GetBrowserInfo(),
              },
              e,
            );
          if (
            (i.useEffect(
              () => ((0, P.cZ)(z, r), () => (0, P.cZ)(z, void 0)),
              [z, r],
            ),
            i.useEffect(() => {
              r && (r.document.title = L ?? u);
            }, [r, L, u]),
            !h)
          )
            return null;
          const I = l.modal ?? l.onlyPopoutIfNeeded,
            g = !l.resizable;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              I && (0, n.jsx)(A, { popup: r }),
              v.createPortal(
                (0, n.jsx)(s.kc, {
                  ownerWindow: r,
                  children: (0, n.jsxs)(d.Y, {
                    children: [
                      (0, n.jsxs)(M, {
                        popup: r,
                        bFitToContent: k,
                        onContextMenu: J.aE,
                        children: [
                          (0, n.jsx)(N.c, {
                            className: $,
                            hideMin: g,
                            hideMax: g,
                            popup: r,
                            hideActions: !H,
                          }),
                          (0, n.jsx)(Z.EO, {
                            bCenterPopupsOnWindow: D?.BCenterPopupsOnWindow(),
                            browserInfo: D?.GetBrowserInfo(),
                            children: G,
                          }),
                        ],
                      }),
                      l.resizable && !k && (0, n.jsx)(x, { popup: r }),
                    ],
                  }),
                }),
                h,
              ),
            ],
          });
        }
        function A(l) {
          const { popup: u } = l,
            L = i.useCallback(() => {
              u?.SteamClient.Window.BringToFront();
            }, [u]);
          return (
            i.useEffect(L, [L]),
            (0, n.jsx)(Q.E, {
              active: !0,
              children: (0, n.jsx)("div", {
                style: {
                  position: "fixed",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                },
                onClick: L,
              }),
            })
          );
        }
      },
      47689: (K, C, t) => {
        "use strict";
        t.d(C, { m: () => i });
        var n = t(41735),
          d = t.n(n),
          a = t(90626);
        function i(v) {
          const s = a.useRef(d().CancelToken.source());
          return (
            a.useEffect(() => {
              const S = s.current;
              return () => S.cancel(v ? `${v}: unmounting` : "unmounting");
            }, [v]),
            s.current
          );
        }
      },
      56366: (K, C, t) => {
        "use strict";
        t.r(C), t.d(C, { default: () => X });
        var n = t(7850),
          d = t(90626),
          a = t(3166),
          i = t(41735),
          v = t.n(i),
          s = t(18210),
          S = t(99412),
          J = t(72604),
          Z = t(76559),
          Q = t(80902),
          N = t(51614),
          y = t(77495),
          _ = t(30096),
          w = t(85599),
          x = t(93474),
          P = t.n(x),
          V = t(56492),
          m = t(36118),
          p = t(71742),
          M = t(71421),
          R = t(16412),
          A = t(1880),
          l = t(73191),
          u = t(69168),
          L = t(60480),
          b = t(36707),
          W = t(11243);
        function X(B) {
          const { clanAccountID: U } = B,
            D = (0, _.YR)(() => new Z.b(U, a.TS.EUNIVERSE, S.P3F, 0)),
            { bIsFetching: E, rgEventModels: e, fnRefetch: o } = H(D),
            c = `${a.TS.COMMUNITY_BASE_URL}gid/${D.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
            r = () => window.location.assign(c),
            { creatorHome: h, isFetching: I, refetch: g } = (0, L.FV)(U),
            f = h?.GetLinkedEventGID(),
            T = f && e?.some((O) => f == O.GID),
            j = E || I,
            F = () => {
              o(), g();
            },
            Y = d.useMemo(
              () => [...(e ?? [])].sort((O, ne) => ne.startTime - O.startTime),
              [e],
            ),
            q = Y.filter((O) => f && f == O.GID),
            te = Y.filter((O) => !f || f != O.GID);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(M.he, {
                toolTipContent: (0, s.we)("#CreatorHome_EventLink_Create_ttip"),
                style: { width: "25%" },
                children: (0, n.jsx)(R.jn, {
                  onClick: r,
                  children: (0, s.we)("#CreatorHome_EventLink_Create"),
                }),
              }),
              (0, n.jsx)("h4", {
                children: (0, s.we)("#CreatorHome_EventLink_Title"),
              }),
              (0, n.jsx)("p", {
                children: (0, s.we)("#CreatorHome_EventLink_Desc"),
              }),
              (0, n.jsx)("br", {}),
              (0, n.jsxs)("div", {
                className: P().ListsCtn,
                children: [
                  !T &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("h5", {
                          children: (0, s.we)(
                            "#CreatorHome_EventLink_ActiveListTitle",
                          ),
                        }),
                        (0, n.jsx)("p", {
                          children: (0, s.we)(
                            "#CreatorHome_EventLink_BasicActive",
                          ),
                        }),
                      ],
                    }),
                  j && (0, n.jsx)(w.t, {}),
                  !j &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        q.length > 0 &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("h5", {
                                children: (0, s.we)(
                                  "#CreatorHome_EventLink_ActiveListTitle",
                                ),
                              }),
                              (0, n.jsx)("div", {
                                className: P().EntryList,
                                children: q.map((O) =>
                                  (0, n.jsx)(
                                    k,
                                    {
                                      creatorHome: h,
                                      clanSteamID: D,
                                      eventModel: O,
                                      refetch: F,
                                    },
                                    O.GID,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        te.length > 0 &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("h5", {
                                children: (0, s.we)(
                                  "#CreatorHome_EventLink_InactiveListTitle",
                                ),
                              }),
                              (0, n.jsx)("div", {
                                className: P().EntryList,
                                children: te.map((O) =>
                                  (0, n.jsx)(
                                    k,
                                    {
                                      creatorHome: h,
                                      clanSteamID: D,
                                      eventModel: O,
                                      refetch: F,
                                    },
                                    O.GID,
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
        function H(B) {
          const {
            data: U,
            isFetching: D,
            refetch: E,
          } = (0, Q.I)({
            queryKey: ["DraftAndHiddenPartnerEvents", B.ConvertTo64BitString()],
            queryFn: async () => {
              const e =
                  a.TS.STORE_BASE_URL +
                  "/curator/" +
                  B.GetAccountID() +
                  "/admin/ajaxgetcreatorhomeevents",
                o = { l: a.TS.LANGUAGE },
                c = await v()
                  .get(e, { params: o })
                  .catch(() => {}),
                r = new Array();
              return (
                r.push(
                  ...c.data.creatorhome_event_gids.map((I) =>
                    y.MX.LoadHiddenPartnerEvent(B, I),
                  ),
                ),
                await Promise.all(r)
              );
            },
          });
          return { bIsFetching: D, rgEventModels: U, fnRefetch: E };
        }
        function k(B) {
          const {
              clanSteamID: U,
              creatorHome: D,
              eventModel: E,
              refetch: e,
            } = B,
            [o, c] = d.useState(!1),
            r = $(),
            [h, I] = d.useState(!1),
            [g, f] = d.useState(!1),
            T = G(),
            j = D?.GetLinkedEventGID(),
            F = j && j == E.GID,
            Y = !F && E.BIsVisibleEvent(),
            q = `${a.TS.COMMUNITY_BASE_URL}gid/${U.ConvertTo64BitString()}/partnerevents/clone/${E.GID}?redir=${window.location.href}`,
            te = () => window.location.assign(q);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(z, {
                active: o,
                mutateAsync: () =>
                  r.mutateAsync({ clanSteamID: U, gid: E.GID }),
                onClose: (O) => {
                  c(!1), O && e();
                },
                strTitle: (0, s.we)("#Button_Delete"),
                strDescription: (0, s.we)(
                  "#CreatorHome_EventLink_Delete_Dialog_Desc",
                ),
                strError: (0, s.we)(
                  "#CreatorHome_EventLink_Delete_Dialog_Error",
                ),
              }),
              (0, n.jsx)(z, {
                active: h,
                mutateAsync: () =>
                  T.mutateAsync({ clanSteamID: U, gid: E.GID }),
                onClose: (O) => {
                  I(!1), O && e();
                },
                strTitle: (0, s.we)("#CreatorHome_EventLink_Select"),
                strDescription: (0, s.we)(
                  "#CreatorHome_EventLink_Select_Dialog_Desc",
                ),
                strError: (0, s.we)(
                  "#CreatorHome_EventLink_Select_Dialog_Error",
                ),
              }),
              (0, n.jsx)(z, {
                active: g,
                mutateAsync: () => T.mutateAsync({ clanSteamID: U, gid: "0" }),
                onClose: (O) => {
                  f(!1), O && e();
                },
                strTitle: (0, s.we)("#CreatorHome_EventLink_Clear"),
                strDescription: (0, s.we)(
                  "#CreatorHome_EventLink_Clear_Dialog_Desc",
                ),
                strError: (0, s.we)(
                  "#CreatorHome_EventLink_Clear_Dialog_Error",
                ),
              }),
              (0, n.jsxs)("div", {
                className: (0, b.A)(P().Entry, F && P().Active),
                children: [
                  (0, n.jsxs)("div", {
                    className: P().HeaderRow,
                    children: [
                      (0, n.jsx)("span", {
                        className: P().Label,
                        children: E.GetNameWithFallback(
                          (0, S.sfN)(a.TS.LANGUAGE),
                        ),
                      }),
                      !E.BIsVisibleEvent() &&
                        (0, n.jsxs)("span", {
                          className: P().UnpublishedState,
                          children: [
                            (0, n.jsx)("span", {
                              children: (0, s.we)(
                                "#CreatorHome_EventLink_Unpublished",
                              ),
                            }),
                            (0, n.jsx)(W.o, {
                              tooltip: (0, s.we)(
                                "#CreatorHome_EventLink_Unpublished_ttip",
                              ),
                              small: !0,
                            }),
                          ],
                        }),
                      E.BIsVisibleEvent() &&
                        !F &&
                        (0, n.jsxs)("span", {
                          className: P().PublishedAndNotSelectedState,
                          children: [
                            (0, n.jsx)("span", {
                              children: (0, s.we)(
                                "#CreatorHome_EventLink_PublishedAndNotSelected",
                              ),
                            }),
                            (0, n.jsx)(W.o, {
                              tooltip: (0, s.we)(
                                "#CreatorHome_EventLink_PublishedAndNotSelected_ttip",
                              ),
                              small: !0,
                            }),
                          ],
                        }),
                      Y
                        ? (0, n.jsx)(ee, {
                            eventModel: E,
                            label: (0, s.we)("#CreatorHome_EventLink_Select"),
                            icon: (0, n.jsx)(m.FEq, {}),
                            onClick: () => I(!0),
                            tooltip: (0, s.we)(
                              "#CreatorHome_EventLink_Select_ttip",
                            ),
                          })
                        : !F &&
                          (0, n.jsxs)("div", {
                            className: P().MustPublish,
                            children: [
                              (0, s.we)("#CreatorHome_EventLink_MustPublish"),
                              (0, n.jsx)(W.o, {
                                tooltip: (0, s.we)(
                                  "#CreatorHome_EventLink_MustPublish_ttip",
                                ),
                                small: !0,
                              }),
                            ],
                          }),
                      F &&
                        (0, n.jsx)(ee, {
                          eventModel: E,
                          label: (0, s.we)("#CreatorHome_EventLink_Clear"),
                          icon: (0, n.jsx)(m.FEq, { filled: !0 }),
                          onClick: () => f(!0),
                          tooltip: (0, s.we)(
                            "#CreatorHome_EventLink_Clear_ttip",
                          ),
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: P().ActionsRow,
                    children: [
                      (0, n.jsx)(ee, {
                        eventModel: E,
                        label: (0, s.we)("#Button_Edit"),
                        icon: (0, n.jsx)(m.ffu, {}),
                        route: V.PH.k_eCommunityEdit,
                      }),
                      (0, n.jsx)(ee, {
                        eventModel: E,
                        label: (0, s.we)("#Button_Preview"),
                        icon: (0, n.jsx)(m.Exy, {}),
                        route: V.PH.k_eCommunityPreviewSale,
                      }),
                      (0, n.jsx)(ee, {
                        eventModel: E,
                        label: (0, s.we)("#Button_Clone"),
                        icon: (0, n.jsx)(m.rI_, {}),
                        onClick: te,
                      }),
                      !F &&
                        (0, n.jsx)(ee, {
                          eventModel: E,
                          label: (0, s.we)("#Button_Delete"),
                          icon: (0, n.jsx)(m.lMJ, {}),
                          onClick: () => c(!0),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function z(B) {
          const {
              active: U,
              mutateAsync: D,
              onClose: E,
              strTitle: e,
              strDescription: o,
              strError: c,
            } = B,
            r = (0, l.vs)();
          if (U)
            return r.bLoading
              ? (0, n.jsx)(u.E, {
                  active: !0,
                  children: (0, n.jsx)(l.Hh, { state: r, strDialogTitle: e }),
                })
              : (0, n.jsx)(u.E, {
                  active: !0,
                  children: (0, n.jsx)(A.o0, {
                    strTitle: e,
                    strDescription: o,
                    onCancel: () => E(!1),
                    bOKDisabled: r.bLoading,
                    onOK: async () => {
                      r.fnSetLoading(!0);
                      try {
                        (await D()) ? E(!0) : r.fnSetElError(c);
                      } catch {
                        r.fnSetElError(c);
                      }
                    },
                  }),
                });
        }
        function G() {
          return (0, N.n)({
            mutationFn: async (B) => {
              const U =
                  a.TS.STORE_BASE_URL +
                  "/curator/" +
                  B.clanSteamID.GetAccountID() +
                  "/admin/ajaxselectcreatorhome",
                D = new FormData();
              return (
                D.append("sessionid", (0, a.KC)()),
                D.append("gid", B.gid),
                (await v().post(U, D, { withCredentials: !0 }))?.data
                  ?.success == J.R
              );
            },
          });
        }
        function $() {
          return (0, N.n)({
            mutationFn: async (B) => {
              const U =
                  a.TS.STORE_BASE_URL +
                  "/curator/" +
                  B.clanSteamID.GetAccountID() +
                  "/admin/ajaxdeletecreatorhomeevent",
                D = new FormData();
              return (
                D.append("sessionid", (0, a.KC)()),
                D.append("gid", B.gid),
                (await v().post(U, D, { withCredentials: !0 }))?.data
                  ?.success == J.R
              );
            },
          });
        }
        function ee(B) {
          const {
            eventModel: U,
            label: D,
            tooltip: E,
            icon: e,
            route: o,
            onClick: c,
          } = B;
          (0, p.wT)(o || c, "Must specify route or onClick");
          const r =
            c ||
            (() => {
              const h = o ? (0, V.yh)(U, null, o, "absolute") : void 0;
              window.location.assign(h);
            });
          return (0, n.jsxs)("div", {
            className: P().ManageButton,
            onClick: r,
            children: [
              (0, n.jsx)("div", { className: P().SVGIcon, children: e }),
              D,
              E && (0, n.jsx)(W.o, { tooltip: E, small: !0 }),
            ],
          });
        }
      },
      56330: (K) => {
        K.exports = {
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
      93474: (K) => {
        K.exports = {
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
    },
  ]);
})();
