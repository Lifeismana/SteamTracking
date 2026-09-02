/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [73687],
    {
      56492: (F, g, t) => {
        "use strict";
        t.d(g, {
          Bw: () => Y,
          EX: () => u,
          Hx: () => T,
          JP: () => i,
          LJ: () => K,
          OG: () => Q,
          PH: () => v,
          T7: () => y,
          sY: () => k,
          tj: () => M,
          yh: () => W,
        });
        var n = t(7850),
          c = t(50974),
          r = t(99412),
          d = t(24660),
          p = t(72865),
          o = t(90626),
          C = t(92757),
          z = t(83482),
          V = t(49628),
          J = t(35395),
          O = t(71742),
          B = t(53113),
          _ = t(3166),
          j = t(72609),
          N = t(39905),
          I = t(47875),
          $ = t(40358),
          v = ((e) => (
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
            (e.k_eStoreUsersNewsHub = "usernewshub"),
            e
          ))(v || {});
        const D =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function A(e) {
          return e.match(D)?.[1];
        }
        function P(e, s) {
          if (!s) return !1;
          const a = !0,
            m = A(window.location.href),
            l = a && m == "news",
            E = s.GetEventType() == r.ajI,
            h = !1,
            S = s.appid ? "games" : "groups",
            U =
              h &&
              S == m &&
              ((s.appid && s.appid === _.UF.APPID) ||
                (!s.appid &&
                  s.clanSteamID.GetAccountID() === _.UF.CLANACCOUNTID));
          switch (e) {
            case "view":
              return U || (l && !k());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return U;
            case "admin":
              return E ? !1 : U;
            case "websitehub":
              return U || l;
            case "storeview":
              return l && !k();
            case "newshub":
            case "store":
            case "usernewshub":
              return l;
            case "sale":
              return !1;
            default:
              return (
                (0, O.wT)(!1, "Unknown route specified for link: " + e), !1
              );
          }
        }
        function i(e) {
          const s =
            j.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            e.AnnouncementGID;
          return {
            strFacebookUrl: s + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: s + "?site=twitter",
            strRedditUrl: s + "?site=reddit",
          };
        }
        function u(e) {
          return R(e, "sale", "absolute");
        }
        function f(e, s) {
          return W(e, s, "sale", "absolute");
        }
        function y(e) {
          return R(e, "storeview", "absolute");
        }
        function w(e, s) {
          return W(e, s, "storeview", "absolute");
        }
        function x(e, s, a) {
          if (a)
            return (
              (e ? "/games/" + _.UF.VANITY_ID : "/groups/" + _.UF.VANITY_ID) +
              "/"
            );
          const m = e ? "ogg/" + e : "gid/" + s.ConvertTo64BitString();
          return j.TS.COMMUNITY_BASE_URL + m + "/";
        }
        function K() {
          return "news";
        }
        function k() {
          return !1;
        }
        function R(e, s, a) {
          const { data: m } = (0, $.J$)(e?.appid ? { appid: e.appid } : void 0);
          if (e) return W(e, m, s, a);
        }
        function W(e, s, a, m) {
          const l = m === "relative",
            E = !1,
            h = l ? "/" : j.TS.STORE_BASE_URL,
            S = x(e.appid, e.clanSteamID, l);
          a === "view"
            ? (a = E ? "communityview" : "storeview")
            : a === "websitehub" &&
              (a = E ? "community_announcehub" : "newshub");
          const U = e.GID ? e.GID : "",
            L = e.AnnouncementGID ? e.AnnouncementGID : "",
            Z =
              e.BIsOGGEvent() &&
              e.appid &&
              s &&
              e.BHasSaleUpdateLandingPageVanity(),
            H = e.GetEventType() == r.ajI;
          switch (a) {
            case "publish":
              return (
                S +
                (e.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + L
                  : "partnerevents/publish/" + U + "?tab=publishing")
              );
            case "edit":
              return (
                S +
                (e.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + L
                  : "partnerevents/edit/" + U)
              );
            case "editBroadcast":
              return (
                S +
                (e.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + L
                  : "partnerevents/edit/" + U) +
                "?tab=broadcast"
              );
            case "migrate":
              return S + "partnerevents/migrate_announcement/" + L;
            case "preview":
              return H
                ? S + "partnerevents/previewsale/" + U
                : S +
                    (e.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + L
                      : "partnerevents/preview/" + U);
            case "previewsale":
              return S + "partnerevents/previewsale/" + U;
            case "admin":
              return H
                ? `${h}curator/${e.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : S + "partnerevents";
            case "community_announcehub":
              return S + "announcements";
            case "newshub": {
              const G = e.appid
                ? `app/${e.appid}`
                : `group/${e.clanSteamID.GetAccountID()}`;
              return h + `${K()}/${G}`;
            }
            case "store":
              return (
                h +
                (e.appid
                  ? "app/" + e.appid
                  : "curator/" + e.clanSteamID.GetAccountID())
              );
            case "sale":
              return e.jsondata.bSaleEnabled
                ? e.clanSteamID.GetAccountID() == c.wv
                  ? `${h}charts/topnewreleases/${e.jsondata.sale_vanity_id}`
                  : e.clanSteamID.GetAccountID() == c.yT
                    ? `${h}charts/bestofyear/${e.jsondata.sale_vanity_id}`
                    : Z
                      ? `${(0, I._)(s)}/${e.GetSaleUpdateLandingPageVanity()}`
                      : H
                        ? `${h}curator/${e.clanSteamID.GetAccountID()}`
                        : h +
                          (e.jsondata
                            .sale_vanity_id_valve_approved_for_sale_subpath
                            ? "sale/"
                            : "curator/" +
                              e.clanSteamID.GetAccountID() +
                              "/sale/") +
                          e.jsondata.sale_vanity_id
                : h;
            case "communityview":
              return S + "announcements/detail/" + L;
            case "storeview": {
              if (e.clanSteamID.GetAccountID() == (0, V.H)())
                return `${j.TS.STORE_BASE_URL}meetsteam/${U}`;
              if (Z)
                return `${(0, I._)(s)}/${e.GetSaleUpdateLandingPageVanity()}`;
              if (H) return `${h}curator/${e.clanSteamID.GetAccountID()}`;
              {
                const G = e.appid
                    ? `app/${e.appid}`
                    : `group/${e.clanSteamID.GetAccountID()}`,
                  X = k() ? "view_v2" : "view",
                  q = e.bOldAnnouncement ? `old_view/${L}` : `${X}/${U}`;
                return `${h}${K()}/${G}/${q}`;
              }
            }
            case "usernewshub":
              return `${h}${K()}/`;
            default:
              return (0, O.wT)(!1, "Unknown route specified for link"), "";
          }
        }
        function Y(e, s, a) {
          const m = a === "forceAbsolute" || !P(s, e);
          return R(e, s, m ? "absolute" : "relative");
        }
        function ee(e, s, a, m) {
          const l = m === "forceAbsolute" || !P(a, e);
          return W(e, s, a, l ? "absolute" : "relative");
        }
        function Q(e) {
          const { eventModel: s, route: a, bPopup: m = !0 } = e,
            l = P(a, s),
            E = R(s, a, l ? "relative" : "absolute");
          return (
            o.useEffect(() => {
              E && (m ? window.open(E) : window.location.assign(E));
            }, [m, E]),
            l && E ? (0, n.jsx)(C.rd, { push: !0, to: E }) : null
          );
        }
        function T(e, s, a) {
          const m = x(e, s, !1);
          return a === "admin" ? m + "partnerevents" : "";
        }
        function M(e) {
          const { eventModel: s, preferredFocus: a } = e,
            { bCanUseLink: m } = o.useContext(J.I),
            l = (0, p.n9)(),
            E = (0, C.W6)(),
            h = m && P(e.route, s),
            S = R(s, e.route, h ? "relative" : "absolute"),
            U = !h && S ? (0, B.NT)(S) : S,
            L = h || !U ? U : (0, z.wJ)(U, l),
            Z = R(s, "websitehub", "absolute"),
            H =
              e.route != "websitehub"
                ? N.Z.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            G = o.useCallback(() => {
              Z && window.location.assign(Z);
            }, [Z]);
          return s
            ? h
              ? (0, n.jsx)(d.Ii, {
                  style: e.style,
                  className: e.className,
                  href: E.createHref({ pathname: L }),
                  onClick: (X) => {
                    L && (e.onClick?.(X), E.push(L), X.preventDefault());
                  },
                  onOptionsActionDescription: H,
                  onOptionsButton: H ? G : void 0,
                  preferredFocus: a,
                  children: e.children,
                })
              : (0, n.jsx)(d.Ii, {
                  href: L,
                  style: e.style,
                  className: e.className,
                  onClick: e.onClick,
                  preferredFocus: a,
                  onOptionsActionDescription: H,
                  onOptionsButton: H ? G : void 0,
                  children: e.children,
                })
            : null;
        }
      },
      24525: (F, g, t) => {
        "use strict";
        t.d(g, { $e: () => c, B7: () => d, Pe: () => D, Pv: () => r });
        const n = 0,
          c = 1,
          r = 2,
          d = 4,
          p = 8,
          o = 16,
          C = 32,
          z = 64,
          V = 128,
          J = 256,
          O = 512,
          B = 1024,
          _ = 2048,
          j = 4096,
          N = 8192,
          I = 16384,
          $ = 32768,
          v = 65536,
          D = 1073741824,
          A = null;
      },
      83784: (F, g, t) => {
        "use strict";
        t.d(g, { J: () => n, S: () => c });
        function n(r) {
          return r
            ? !!(
                r.related_items &&
                r.related_items.standalone_demo_appid &&
                r.related_items.standalone_demo_appid.length > 0 &&
                r.related_items.standalone_demo_appid[0]
              )
            : !1;
        }
        function c(r) {
          return !r || !r.related_items?.standalone_demo_appid
            ? []
            : r.related_items?.standalone_demo_appid;
        }
      },
      47875: (F, g, t) => {
        "use strict";
        t.d(g, { _: () => r, l: () => d });
        var n = t(72609),
          c = t(83784);
        function r(p, o = !1) {
          if (p)
            return o && (0, c.J)(p)
              ? `${n.TS.STORE_BASE_URL}app/${((0, c.S))(p)[0]}`
              : `${n.TS.STORE_BASE_URL}${p.store_url_path}`;
        }
        function d() {
          window.location.href = `${n.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        }
      },
      67529: (F, g, t) => {
        "use strict";
        t.d(g, { IU: () => V, by: () => J, sc: () => p });
        var n = t(3166),
          c = t(35413),
          r = t(71742),
          d = t(24525);
        const p = 0,
          o = "061818254b2c99ac49e6626adb128ed1282a392f",
          C = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          z = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          V = 120;
        class J {
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
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, o);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, o);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == d.B7 || this.apptype == d.Pv;
          }
          BuildAppURL(_, j) {
            return _
              ? n.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  _ +
                  ".jpg"
              : (0, c.t)(j);
          }
          DeserializeFromMessage(_) {
            (this.m_bInitialized = !0),
              (this.m_strName = _.name()),
              (this.m_strIconURL = _.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = _.app_type());
          }
          DeserializeFromAppOverview(_) {
            _.icon_hash() && _.app_type() != d.Pe
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
              (0, r.wT)(
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
        class O {}
      },
      35413: (F, g, t) => {
        "use strict";
        t.d(g, { d: () => c, t: () => r });
        var n = t(3166);
        const c = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function r(d, p) {
          let o = ".jpg";
          (!d || d === "0000000000000000000000000000000000000000") && (d = c),
            d.length == 44 && ((o = d.substr(-4)), (d = d.substr(0, 40)));
          let C = n.TS.AVATAR_BASE_URL;
          return (
            C ||
              ((C = n.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (C += d.substr(0, 2) + "/")),
            (C += d),
            p && p != "small" && (C += "_" + p),
            (C += o),
            C
          );
        }
      },
      73191: (F, g, t) => {
        "use strict";
        t.d(g, { Hh: () => J, vs: () => z });
        var n = t(7850),
          c = t(90626),
          r = t(96538),
          d = t(56330),
          p = t.n(d),
          o = t(18210),
          C = t(85599);
        function z(O) {
          const [B, _] = (0, c.useState)(() => !!O),
            [j, N] = (0, c.useState)(!1),
            [I, $] = (0, c.useState)(!1),
            [v, D] = (0, c.useState)(null),
            [A, P] = (0, c.useState)(null),
            [i, u] = (0, c.useState)(null),
            [f, y] = (0, c.useState)(null),
            [w, x] = (0, c.useState)(null);
          return {
            bLoading: B,
            bError: j,
            bSuccess: I,
            strError: v,
            strSuccess: A,
            elSuccess: f,
            elError: i,
            strThrobber: w,
            fnSetLoading: _,
            fnSetError: N,
            fnSetSuccess: $,
            fnSetStrError: D,
            fnSetStrSuccess: P,
            fnSetElSuccess: y,
            fnSetElError: u,
            fnSetThrobber: x,
          };
        }
        function V(O, B) {
          B != k_EResultOK ? O.fnSetError(!0) : O.fnSetSuccess(!0);
        }
        function J(O) {
          const {
              strDialogTitle: B,
              state: _,
              closeModal: j,
              strThrobber: N,
            } = O,
            {
              bLoading: I,
              bError: $,
              bSuccess: v,
              strError: D,
              strSuccess: A,
              elSuccess: P,
              elError: i,
              strThrobber: u,
            } = _;
          return $ || D || i
            ? (0, n.jsxs)(r.o0, {
                strTitle: B,
                bAlertDialog: !0,
                closeModal: j,
                className: d.SuccessErrorDialog,
                children: [
                  !!D &&
                    (0, n.jsx)("div", {
                      className: d.ErrorStylesWithIcon,
                      children:
                        D || (0, o.we)("#Error_ErrorCommunicatingWithNetwork"),
                    }),
                  !!i && i,
                ],
              })
            : v || A || P
              ? (0, n.jsx)(r.o0, {
                  strTitle: B,
                  strDescription: A || (0, o.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: j,
                  className: d.SuccessErrorDialog,
                  children: (0, n.jsx)(n.Fragment, { children: !!P && P }),
                })
              : (0, n.jsx)(r.o0, {
                  strTitle: B,
                  className: d.SuccessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                  children: (0, n.jsx)(C.t, {
                    string: N || u || (0, o.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                });
        }
      },
      49628: (F, g, t) => {
        "use strict";
        t.d(g, { H: () => r });
        var n = t(99412),
          c = t(98609);
        const r = () => (c.TS.EUNIVERSE === n.Rv ? 2581 : 45267781);
      },
      96538: (F, g, t) => {
        "use strict";
        t.d(g, {
          mt: () => z,
          o0: () => N.o0,
          eV: () => I.eV,
          KG: () => N.KG,
          Ee: () => N.Ee,
          x_: () => p.x_,
          of: () => O,
          pY: () => N.pY,
          EN: () => d.E,
        });
        var n = t(7850),
          c = t(90626),
          r = t(16412),
          d = t(69168),
          p = t(50731),
          o = t(15568);
        function C(v) {
          const { labelledBy: D } = v || {},
            [A, P] = c.useState(void 0),
            i = c.useMemo(() => ({ setHeaderId: P }), []);
          return { headerId: D || A, context: i };
        }
        function z(v) {
          const {
              active: D,
              onDismiss: A,
              className: P,
              modalClassName: i,
              bGamepadUIScrollWithin: u,
              children: f,
              ...y
            } = v,
            { headerId: w, context: x } = C({
              labelledBy: v["aria-labelledby"],
            });
          return (0, n.jsx)(r.t6.Provider, {
            value: x,
            children: (0, n.jsx)(d.E, {
              active: D,
              children: (0, n.jsx)(p.x_, {
                onEscKeypress: A,
                className: i,
                bGamepadUIScrollWithin: u,
                children: (0, n.jsx)(r.UC, {
                  role: "dialog",
                  "aria-labelledby": w,
                  className: P,
                  ...y,
                  children: f,
                }),
              }),
            }),
          });
        }
        function V(v) {
          const {
              onDismiss: D,
              className: A,
              modalClassName: P,
              bGamepadUIScrollWithin: i,
              children: u,
              ...f
            } = v,
            { headerId: y, context: w } = C();
          return jsx(Dialog.DialogStructureContext.Provider, {
            value: w,
            children: jsx(PopupWindow, {
              ...f,
              onDismiss: D,
              children: jsx(ModalPosition, {
                onEscKeypress: D,
                className: P,
                bGamepadUIScrollWithin: i,
                children: jsx(Dialog.Content, {
                  role: "dialog",
                  "aria-labelledby": y,
                  "aria-label": f.strTitle,
                  className: A,
                  children: u,
                }),
              }),
            }),
          });
        }
        const J = (v) => V({ modal: !0, ...v });
        function O(v) {
          const { className: D, children: A } = v;
          return (0, n.jsx)(d.E, {
            active: !0,
            children: (0, n.jsx)("div", { className: D, children: A }),
          });
        }
        var B = t(74817);
        function _(v) {
          const D = React.useMemo(() => j(), []);
          return jsx(DialogOverlay, { ...v, DialogWrapper: D });
        }
        function j() {
          return function (D) {
            const { className: A, active: P, children: i, modalKey: u } = D,
              f = React.useRef(void 0);
            return (
              useActivateNavTree(f, P, !0),
              jsx(FocusNavigationRoot, {
                className: A,
                navTreeRef: f,
                modal: !0,
                enabled: P,
                navID: `ModalDialogOverlay_${u}`,
                children: i,
              })
            );
          };
        }
        var N = t(1880),
          I = t(90506),
          $ = t(47515);
      },
      15568: (F, g, t) => {
        "use strict";
        t.d(g, { wA: () => $ });
        var n = t(7850),
          c = t(2259),
          r = t(90626),
          d = t(72739),
          p = t(71568),
          o = t(9705),
          C = t(34360),
          z = t(31032),
          V = t(69168),
          J = t(83203),
          O = t(44930),
          B = t(36707),
          _ = t(25091);
        function j(i) {
          const { popup: u, className: f, ...y } = i,
            w = (0, _.GD)(u),
            x = r.useRef(null);
          return (
            r.useEffect(() => {
              const K = x.current;
              if (K && (0, O.Fj)(u, "Window.SetResizeGrip")) {
                let k = 0,
                  R = 0;
                const W = K.getBoundingClientRect(),
                  Y = K.ownerDocument.defaultView;
                W &&
                  Y &&
                  !w &&
                  ((k = Math.ceil(Y.innerWidth - W.left)),
                  (R = Math.ceil(Y.innerHeight - W.top))),
                  u.SteamClient.Window.SetResizeGrip(k, R);
              }
              return () => {
                (0, O.Fj)(u, "Window.SetResizeGrip") &&
                  u.SteamClient.Window.SetResizeGrip(0, 0);
              };
            }, [u, w]),
            w
              ? null
              : (0, n.jsx)("div", {
                  className: (0, B.A)("window_resize_grip", f),
                  ref: x,
                  ...y,
                })
          );
        }
        var N = t(30096),
          I = t(3166);
        const $ = (i) => v({ modal: !0, ...i });
        function v(i) {
          const u = (0, p.R7)().ownerWindow,
            f = (0, I.Qn)(),
            [y, w] = r.useState(() =>
              f ||
              (i.onlyPopoutIfNeeded === !0 &&
                i.popupHeight < u.innerHeight * 0.9 &&
                i.popupWidth < u.innerWidth * 0.9 &&
                u.document.visibilityState == "visible")
                ? "inline"
                : "popout",
            );
          return y === "inline"
            ? (0, n.jsx)(V.E, { active: !0, children: i.children })
            : y === "popout"
              ? (0, n.jsx)(A, { ...i })
              : null;
        }
        function D(i) {
          const {
              popup: u,
              children: f,
              bFitToContent: y,
              className: w,
              ...x
            } = i,
            K = r.useCallback(
              (R) => {
                const W = Math.ceil(R.borderBoxSize[0].inlineSize),
                  Y = Math.ceil(R.borderBoxSize[0].blockSize);
                u?.SteamClient.Window.ResizeTo(W, Y, !0);
              },
              [u],
            ),
            k = (0, c.wY)(K);
          return (0, n.jsx)("div", {
            className: (0, B.A)("PopupFullWindow", y && "FitToContent", w),
            ref: y ? k : void 0,
            ...x,
            children: f,
          });
        }
        function A(i) {
          const {
              strName: u,
              strTitle: f,
              popupWidth: y,
              popupHeight: w,
              browserType: x,
              onDismiss: K,
              bFitToContent: k,
              refPopup: R,
              children: W,
              titleBarClassName: Y,
              saveDimensionsKey: ee,
            } = i,
            T = (0, p.R7)()?.ownerWindow,
            M = (0, z.yk)(),
            s = { ...(0, o.h3)(ee), onClose: K };
          let a = 0;
          i.resizable && (a |= p.Wf.Resizable),
            (i.minWidth || i.minHeight) &&
              (a |= p.Wf.ApplyBrowserScaleToDimensions),
            i.fullscreen && (a |= p.Wf.FullScreen);
          const m = "PopupWindow_" + (u ? `${u}_` : "") + r.useId(),
            { popup: l, element: E } = (0, o.OJ)(
              m,
              {
                title: f,
                dimensions: { width: y, height: w },
                html_class: "client_chat_frame fullheight ModalDialogPopup",
                body_class: "fullheight ModalDialogBody",
                popup_class: "fullheight",
                browserType: x,
                minWidth: i.minWidth,
                minHeight: i.minHeight,
                replace_existing_popup: !0,
                center_on_window: M?.BCenterPopupsOnWindow() ? T : void 0,
                eCreationFlags: a,
                target_browser: M?.GetBrowserInfo(),
              },
              s,
            );
          if (
            (r.useEffect(
              () => ((0, N.cZ)(R, l), () => (0, N.cZ)(R, void 0)),
              [R, l],
            ),
            r.useEffect(() => {
              l && (l.document.title = f ?? u);
            }, [l, f, u]),
            !E)
          )
            return null;
          const h = i.modal ?? i.onlyPopoutIfNeeded,
            S = !i.resizable;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              h && (0, n.jsx)(P, { popup: l }),
              d.createPortal(
                (0, n.jsxs)(p.kc, {
                  ownerWindow: l,
                  children: [
                    (0, n.jsxs)(D, {
                      popup: l,
                      bFitToContent: k,
                      onContextMenu: C.aE,
                      children: [
                        (0, n.jsx)(J.c, {
                          className: Y,
                          hideMin: S,
                          hideMax: S,
                          popup: l,
                          hideActions: !K,
                        }),
                        (0, n.jsx)(z.EO, {
                          bCenterPopupsOnWindow: M?.BCenterPopupsOnWindow(),
                          browserInfo: M?.GetBrowserInfo(),
                          children: W,
                        }),
                      ],
                    }),
                    i.resizable && !k && (0, n.jsx)(j, { popup: l }),
                  ],
                }),
                E,
              ),
            ],
          });
        }
        function P(i) {
          const { popup: u } = i,
            f = r.useCallback(() => {
              u?.SteamClient.Window.BringToFront();
            }, [u]);
          return (
            r.useEffect(f, [f]),
            (0, n.jsx)(V.E, {
              active: !0,
              children: (0, n.jsx)("div", {
                style: {
                  position: "fixed",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                },
                onClick: f,
              }),
            })
          );
        }
      },
      47689: (F, g, t) => {
        "use strict";
        t.d(g, { m: () => d });
        var n = t(41735),
          c = t.n(n),
          r = t(90626);
        function d(p) {
          const o = r.useRef(c().CancelToken.source());
          return (
            r.useEffect(() => {
              const C = o.current;
              return () => C.cancel(p ? `${p}: unmounting` : "unmounting");
            }, [p]),
            o.current
          );
        }
      },
      56366: (F, g, t) => {
        "use strict";
        t.r(g), t.d(g, { default: () => K });
        var n = t(7850),
          c = t(90626),
          r = t(3166),
          d = t(41735),
          p = t.n(d),
          o = t(18210),
          C = t(99412),
          z = t(72604),
          V = t(76559),
          J = t(80902),
          O = t(51614),
          B = t(79118),
          _ = t(30096),
          j = t(85599),
          N = t(93474),
          I = t.n(N),
          $ = t(56492),
          v = t(36118),
          D = t(71742),
          A = t(71421),
          P = t(16412),
          i = t(1880),
          u = t(73191),
          f = t(69168),
          y = t(60480),
          w = t(36707),
          x = t(11243);
        function K(T) {
          const { clanAccountID: M } = T,
            e = (0, _.YR)(() => new V.b(M, r.TS.EUNIVERSE, C.P3F, 0)),
            { bIsFetching: s, rgEventModels: a, fnRefetch: m } = k(e),
            l = `${r.TS.COMMUNITY_BASE_URL}gid/${e.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
            E = () => window.location.assign(l),
            { creatorHome: h, isFetching: S, refetch: U } = (0, y.FV)(M),
            L = h?.GetLinkedEventGID(),
            Z = L && a?.some((b) => L == b.GID),
            H = s || S,
            G = () => {
              m(), U();
            },
            X = c.useMemo(
              () => [...(a ?? [])].sort((b, ne) => ne.startTime - b.startTime),
              [a],
            ),
            q = X.filter((b) => L && L == b.GID),
            te = X.filter((b) => !L || L != b.GID);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(A.he, {
                toolTipContent: (0, o.we)("#CreatorHome_EventLink_Create_ttip"),
                style: { width: "25%" },
                children: (0, n.jsx)(P.jn, {
                  onClick: E,
                  children: (0, o.we)("#CreatorHome_EventLink_Create"),
                }),
              }),
              (0, n.jsx)("h4", {
                children: (0, o.we)("#CreatorHome_EventLink_Title"),
              }),
              (0, n.jsx)("p", {
                children: (0, o.we)("#CreatorHome_EventLink_Desc"),
              }),
              (0, n.jsx)("br", {}),
              (0, n.jsxs)("div", {
                className: I().ListsCtn,
                children: [
                  !Z &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("h5", {
                          children: (0, o.we)(
                            "#CreatorHome_EventLink_ActiveListTitle",
                          ),
                        }),
                        (0, n.jsx)("p", {
                          children: (0, o.we)(
                            "#CreatorHome_EventLink_BasicActive",
                          ),
                        }),
                      ],
                    }),
                  H && (0, n.jsx)(j.t, {}),
                  !H &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        q.length > 0 &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("h5", {
                                children: (0, o.we)(
                                  "#CreatorHome_EventLink_ActiveListTitle",
                                ),
                              }),
                              (0, n.jsx)("div", {
                                className: I().EntryList,
                                children: q.map((b) =>
                                  (0, n.jsx)(
                                    R,
                                    {
                                      creatorHome: h,
                                      clanSteamID: e,
                                      eventModel: b,
                                      refetch: G,
                                    },
                                    b.GID,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        te.length > 0 &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("h5", {
                                children: (0, o.we)(
                                  "#CreatorHome_EventLink_InactiveListTitle",
                                ),
                              }),
                              (0, n.jsx)("div", {
                                className: I().EntryList,
                                children: te.map((b) =>
                                  (0, n.jsx)(
                                    R,
                                    {
                                      creatorHome: h,
                                      clanSteamID: e,
                                      eventModel: b,
                                      refetch: G,
                                    },
                                    b.GID,
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
        function k(T) {
          const {
            data: M,
            isFetching: e,
            refetch: s,
          } = (0, J.I)({
            queryKey: ["DraftAndHiddenPartnerEvents", T.ConvertTo64BitString()],
            queryFn: async () => {
              const a =
                  r.TS.STORE_BASE_URL +
                  "/curator/" +
                  T.GetAccountID() +
                  "/admin/ajaxgetcreatorhomeevents",
                m = { l: r.TS.LANGUAGE },
                l = await p()
                  .get(a, { params: m })
                  .catch(() => {}),
                E = new Array();
              return (
                E.push(
                  ...l.data.creatorhome_event_gids.map((S) =>
                    B.MX.LoadHiddenPartnerEvent(T, S),
                  ),
                ),
                await Promise.all(E)
              );
            },
          });
          return { bIsFetching: e, rgEventModels: M, fnRefetch: s };
        }
        function R(T) {
          const {
              clanSteamID: M,
              creatorHome: e,
              eventModel: s,
              refetch: a,
            } = T,
            [m, l] = c.useState(!1),
            E = ee(),
            [h, S] = c.useState(!1),
            [U, L] = c.useState(!1),
            Z = Y(),
            H = e?.GetLinkedEventGID(),
            G = H && H == s.GID,
            X = !G && s.BIsVisibleEvent(),
            q = `${r.TS.COMMUNITY_BASE_URL}gid/${M.ConvertTo64BitString()}/partnerevents/clone/${s.GID}?redir=${window.location.href}`,
            te = () => window.location.assign(q);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(W, {
                active: m,
                mutateAsync: () =>
                  E.mutateAsync({ clanSteamID: M, gid: s.GID }),
                onClose: (b) => {
                  l(!1), b && a();
                },
                strTitle: (0, o.we)("#Button_Delete"),
                strDescription: (0, o.we)(
                  "#CreatorHome_EventLink_Delete_Dialog_Desc",
                ),
                strError: (0, o.we)(
                  "#CreatorHome_EventLink_Delete_Dialog_Error",
                ),
              }),
              (0, n.jsx)(W, {
                active: h,
                mutateAsync: () =>
                  Z.mutateAsync({ clanSteamID: M, gid: s.GID }),
                onClose: (b) => {
                  S(!1), b && a();
                },
                strTitle: (0, o.we)("#CreatorHome_EventLink_Select"),
                strDescription: (0, o.we)(
                  "#CreatorHome_EventLink_Select_Dialog_Desc",
                ),
                strError: (0, o.we)(
                  "#CreatorHome_EventLink_Select_Dialog_Error",
                ),
              }),
              (0, n.jsx)(W, {
                active: U,
                mutateAsync: () => Z.mutateAsync({ clanSteamID: M, gid: "0" }),
                onClose: (b) => {
                  L(!1), b && a();
                },
                strTitle: (0, o.we)("#CreatorHome_EventLink_Clear"),
                strDescription: (0, o.we)(
                  "#CreatorHome_EventLink_Clear_Dialog_Desc",
                ),
                strError: (0, o.we)(
                  "#CreatorHome_EventLink_Clear_Dialog_Error",
                ),
              }),
              (0, n.jsxs)("div", {
                className: (0, w.A)(I().Entry, G && I().Active),
                children: [
                  (0, n.jsxs)("div", {
                    className: I().HeaderRow,
                    children: [
                      (0, n.jsx)("span", {
                        className: I().Label,
                        children: s.GetNameWithFallback(
                          (0, C.sfN)(r.TS.LANGUAGE),
                        ),
                      }),
                      !s.BIsVisibleEvent() &&
                        (0, n.jsxs)("span", {
                          className: I().UnpublishedState,
                          children: [
                            (0, n.jsx)("span", {
                              children: (0, o.we)(
                                "#CreatorHome_EventLink_Unpublished",
                              ),
                            }),
                            (0, n.jsx)(x.o, {
                              tooltip: (0, o.we)(
                                "#CreatorHome_EventLink_Unpublished_ttip",
                              ),
                              small: !0,
                            }),
                          ],
                        }),
                      s.BIsVisibleEvent() &&
                        !G &&
                        (0, n.jsxs)("span", {
                          className: I().PublishedAndNotSelectedState,
                          children: [
                            (0, n.jsx)("span", {
                              children: (0, o.we)(
                                "#CreatorHome_EventLink_PublishedAndNotSelected",
                              ),
                            }),
                            (0, n.jsx)(x.o, {
                              tooltip: (0, o.we)(
                                "#CreatorHome_EventLink_PublishedAndNotSelected_ttip",
                              ),
                              small: !0,
                            }),
                          ],
                        }),
                      X
                        ? (0, n.jsx)(Q, {
                            eventModel: s,
                            label: (0, o.we)("#CreatorHome_EventLink_Select"),
                            icon: (0, n.jsx)(v.FEq, {}),
                            onClick: () => S(!0),
                            tooltip: (0, o.we)(
                              "#CreatorHome_EventLink_Select_ttip",
                            ),
                          })
                        : !G &&
                          (0, n.jsxs)("div", {
                            className: I().MustPublish,
                            children: [
                              (0, o.we)("#CreatorHome_EventLink_MustPublish"),
                              (0, n.jsx)(x.o, {
                                tooltip: (0, o.we)(
                                  "#CreatorHome_EventLink_MustPublish_ttip",
                                ),
                                small: !0,
                              }),
                            ],
                          }),
                      G &&
                        (0, n.jsx)(Q, {
                          eventModel: s,
                          label: (0, o.we)("#CreatorHome_EventLink_Clear"),
                          icon: (0, n.jsx)(v.FEq, { filled: !0 }),
                          onClick: () => L(!0),
                          tooltip: (0, o.we)(
                            "#CreatorHome_EventLink_Clear_ttip",
                          ),
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: I().ActionsRow,
                    children: [
                      (0, n.jsx)(Q, {
                        eventModel: s,
                        label: (0, o.we)("#Button_Edit"),
                        icon: (0, n.jsx)(v.ffu, {}),
                        route: $.PH.k_eCommunityEdit,
                      }),
                      (0, n.jsx)(Q, {
                        eventModel: s,
                        label: (0, o.we)("#Button_Preview"),
                        icon: (0, n.jsx)(v.Exy, {}),
                        route: $.PH.k_eCommunityPreviewSale,
                      }),
                      (0, n.jsx)(Q, {
                        eventModel: s,
                        label: (0, o.we)("#Button_Clone"),
                        icon: (0, n.jsx)(v.rI_, {}),
                        onClick: te,
                      }),
                      !G &&
                        (0, n.jsx)(Q, {
                          eventModel: s,
                          label: (0, o.we)("#Button_Delete"),
                          icon: (0, n.jsx)(v.lMJ, {}),
                          onClick: () => l(!0),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function W(T) {
          const {
              active: M,
              mutateAsync: e,
              onClose: s,
              strTitle: a,
              strDescription: m,
              strError: l,
            } = T,
            E = (0, u.vs)();
          if (M)
            return E.bLoading
              ? (0, n.jsx)(f.E, {
                  active: !0,
                  children: (0, n.jsx)(u.Hh, { state: E, strDialogTitle: a }),
                })
              : (0, n.jsx)(f.E, {
                  active: !0,
                  children: (0, n.jsx)(i.o0, {
                    strTitle: a,
                    strDescription: m,
                    onCancel: () => s(!1),
                    bOKDisabled: E.bLoading,
                    onOK: async () => {
                      E.fnSetLoading(!0);
                      try {
                        (await e()) ? s(!0) : E.fnSetElError(l);
                      } catch {
                        E.fnSetElError(l);
                      }
                    },
                  }),
                });
        }
        function Y() {
          return (0, O.n)({
            mutationFn: async (T) => {
              const M =
                  r.TS.STORE_BASE_URL +
                  "/curator/" +
                  T.clanSteamID.GetAccountID() +
                  "/admin/ajaxselectcreatorhome",
                e = new FormData();
              return (
                e.append("sessionid", (0, r.KC)()),
                e.append("gid", T.gid),
                (await p().post(M, e, { withCredentials: !0 }))?.data
                  ?.success == z.R
              );
            },
          });
        }
        function ee() {
          return (0, O.n)({
            mutationFn: async (T) => {
              const M =
                  r.TS.STORE_BASE_URL +
                  "/curator/" +
                  T.clanSteamID.GetAccountID() +
                  "/admin/ajaxdeletecreatorhomeevent",
                e = new FormData();
              return (
                e.append("sessionid", (0, r.KC)()),
                e.append("gid", T.gid),
                (await p().post(M, e, { withCredentials: !0 }))?.data
                  ?.success == z.R
              );
            },
          });
        }
        function Q(T) {
          const {
            eventModel: M,
            label: e,
            tooltip: s,
            icon: a,
            route: m,
            onClick: l,
          } = T;
          (0, D.wT)(m || l, "Must specify route or onClick");
          const E =
            l ||
            (() => {
              const h = m ? (0, $.yh)(M, null, m, "absolute") : void 0;
              window.location.assign(h);
            });
          return (0, n.jsxs)("div", {
            className: I().ManageButton,
            onClick: E,
            children: [
              (0, n.jsx)("div", { className: I().SVGIcon, children: a }),
              e,
              s && (0, n.jsx)(x.o, { tooltip: s, small: !0 }),
            ],
          });
        }
      },
      56330: (F) => {
        F.exports = {
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
      93474: (F) => {
        F.exports = {
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
