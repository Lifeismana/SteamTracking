/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [39297],
    {
      56492: (U, ce, o) => {
        "use strict";
        o.d(ce, {
          Bw: () => me,
          EX: () => j,
          Hx: () => ut,
          JP: () => I,
          LJ: () => P,
          OG: () => Ue,
          PH: () => D,
          T7: () => y,
          sY: () => Y,
          tj: () => ft,
          yh: () => X,
        });
        var t = o(7850),
          R = o(50974),
          Z = o(99412),
          m = o(24660),
          d = o(72865),
          r = o(90626),
          M = o(92757),
          q = o(83482),
          S = o(49628),
          ie = o(35395),
          k = o(71742),
          E = o(53113),
          w = o(3166),
          _ = o(72609),
          ee = o(39905),
          f = o(47875),
          se = o(40358),
          D = ((x) => (
            (x.k_eView = "view"),
            (x.k_eViewWebSiteHub = "websitehub"),
            (x.k_eCommunityView = "communityview"),
            (x.k_eCommunityEdit = "edit"),
            (x.k_eCommunityEditBroadcast = "editBroadcast"),
            (x.k_eCommunityAdminPage = "admin"),
            (x.k_eCommunityPublish = "publish"),
            (x.k_eCommunityMigrate = "migrate"),
            (x.k_eCommunityPreview = "preview"),
            (x.k_eCommunityPreviewSale = "previewsale"),
            (x.k_eCommunityAnnouncementHub = "community_announcehub"),
            (x.k_eStoreView = "storeview"),
            (x.k_eStoreNewsHub = "newshub"),
            (x.k_eStoreOwnerPage = "store"),
            (x.k_eStoreSalePage = "sale"),
            (x.k_eStoreUsersNewsHub = "usernewshub"),
            x
          ))(D || {});
        const H =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function V(x) {
          return x.match(H)?.[1];
        }
        function ae(x, C) {
          if (!C) return !1;
          const re = !0,
            ue = V(window.location.href),
            pe = re && ue == "news",
            ve = C.GetEventType() == Z.ajI,
            ge = !1,
            de = C.appid ? "games" : "groups",
            he =
              ge &&
              de == ue &&
              ((C.appid && C.appid === w.UF.APPID) ||
                (!C.appid &&
                  C.clanSteamID.GetAccountID() === w.UF.CLANACCOUNTID));
          switch (x) {
            case "view":
              return he || (pe && !Y());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return he;
            case "admin":
              return ve ? !1 : he;
            case "websitehub":
              return he || pe;
            case "storeview":
              return pe && !Y();
            case "newshub":
            case "store":
            case "usernewshub":
              return pe;
            case "sale":
              return !1;
            default:
              return (
                (0, k.wT)(!1, "Unknown route specified for link: " + x), !1
              );
          }
        }
        function I(x) {
          const C =
            _.TS.COMMUNITY_BASE_URL +
            "gid/" +
            x.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            x.AnnouncementGID;
          return {
            strFacebookUrl: C + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: C + "?site=twitter",
            strRedditUrl: C + "?site=reddit",
          };
        }
        function j(x) {
          return Q(x, "sale", "absolute");
        }
        function O(x, C) {
          return X(x, C, "sale", "absolute");
        }
        function y(x) {
          return Q(x, "storeview", "absolute");
        }
        function A(x, C) {
          return X(x, C, "storeview", "absolute");
        }
        function N(x, C, re) {
          if (re)
            return (
              (x ? "/games/" + w.UF.VANITY_ID : "/groups/" + w.UF.VANITY_ID) +
              "/"
            );
          const ue = x ? "ogg/" + x : "gid/" + C.ConvertTo64BitString();
          return _.TS.COMMUNITY_BASE_URL + ue + "/";
        }
        function P() {
          return "news";
        }
        function Y() {
          return !1;
        }
        function Q(x, C, re) {
          const { data: ue } = (0, se.J$)(
            x?.appid ? { appid: x.appid } : void 0,
          );
          if (x) return X(x, ue, C, re);
        }
        function X(x, C, re, ue) {
          const pe = ue === "relative",
            ve = !1,
            ge = pe ? "/" : _.TS.STORE_BASE_URL,
            de = N(x.appid, x.clanSteamID, pe);
          re === "view"
            ? (re = ve ? "communityview" : "storeview")
            : re === "websitehub" &&
              (re = ve ? "community_announcehub" : "newshub");
          const he = x.GID ? x.GID : "",
            be = x.AnnouncementGID ? x.AnnouncementGID : "",
            Oe =
              x.BIsOGGEvent() &&
              x.appid &&
              C &&
              x.BHasSaleUpdateLandingPageVanity(),
            we = x.GetEventType() == Z.ajI;
          switch (re) {
            case "publish":
              return (
                de +
                (x.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + be
                  : "partnerevents/publish/" + he + "?tab=publishing")
              );
            case "edit":
              return (
                de +
                (x.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + be
                  : "partnerevents/edit/" + he)
              );
            case "editBroadcast":
              return (
                de +
                (x.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + be
                  : "partnerevents/edit/" + he) +
                "?tab=broadcast"
              );
            case "migrate":
              return de + "partnerevents/migrate_announcement/" + be;
            case "preview":
              return we
                ? de + "partnerevents/previewsale/" + he
                : de +
                    (x.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + be
                      : "partnerevents/preview/" + he);
            case "previewsale":
              return de + "partnerevents/previewsale/" + he;
            case "admin":
              return we
                ? `${ge}curator/${x.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : de + "partnerevents";
            case "community_announcehub":
              return de + "announcements";
            case "newshub": {
              const Ee = x.appid
                ? `app/${x.appid}`
                : `group/${x.clanSteamID.GetAccountID()}`;
              return ge + `${P()}/${Ee}`;
            }
            case "store":
              return (
                ge +
                (x.appid
                  ? "app/" + x.appid
                  : "curator/" + x.clanSteamID.GetAccountID())
              );
            case "sale":
              return x.jsondata.bSaleEnabled
                ? x.clanSteamID.GetAccountID() == R.wv
                  ? `${ge}charts/topnewreleases/${x.jsondata.sale_vanity_id}`
                  : x.clanSteamID.GetAccountID() == R.yT
                    ? `${ge}charts/bestofyear/${x.jsondata.sale_vanity_id}`
                    : Oe
                      ? `${(0, f._)(C)}/${x.GetSaleUpdateLandingPageVanity()}`
                      : we
                        ? `${ge}curator/${x.clanSteamID.GetAccountID()}`
                        : ge +
                          (x.jsondata
                            .sale_vanity_id_valve_approved_for_sale_subpath
                            ? "sale/"
                            : "curator/" +
                              x.clanSteamID.GetAccountID() +
                              "/sale/") +
                          x.jsondata.sale_vanity_id
                : ge;
            case "communityview":
              return de + "announcements/detail/" + be;
            case "storeview": {
              if (x.clanSteamID.GetAccountID() == (0, S.H)())
                return `${_.TS.STORE_BASE_URL}meetsteam/${he}`;
              if (Oe)
                return `${(0, f._)(C)}/${x.GetSaleUpdateLandingPageVanity()}`;
              if (we) return `${ge}curator/${x.clanSteamID.GetAccountID()}`;
              {
                const Ee = x.appid
                    ? `app/${x.appid}`
                    : `group/${x.clanSteamID.GetAccountID()}`,
                  _e = Y() ? "view_v2" : "view",
                  De = x.bOldAnnouncement ? `old_view/${be}` : `${_e}/${he}`;
                return `${ge}${P()}/${Ee}/${De}`;
              }
            }
            case "usernewshub":
              return `${ge}${P()}/`;
            default:
              return (0, k.wT)(!1, "Unknown route specified for link"), "";
          }
        }
        function me(x, C, re) {
          const ue = re === "forceAbsolute" || !ae(C, x);
          return Q(x, C, ue ? "absolute" : "relative");
        }
        function Ne(x, C, re, ue) {
          const pe = ue === "forceAbsolute" || !ae(re, x);
          return X(x, C, re, pe ? "absolute" : "relative");
        }
        function Ue(x) {
          const { eventModel: C, route: re, bPopup: ue = !0 } = x,
            pe = ae(re, C),
            ve = Q(C, re, pe ? "relative" : "absolute");
          return (
            r.useEffect(() => {
              ve && (ue ? window.open(ve) : window.location.assign(ve));
            }, [ue, ve]),
            pe && ve ? (0, t.jsx)(M.rd, { push: !0, to: ve }) : null
          );
        }
        function ut(x, C, re) {
          const ue = N(x, C, !1);
          return re === "admin" ? ue + "partnerevents" : "";
        }
        function ft(x) {
          const { eventModel: C, preferredFocus: re } = x,
            { bCanUseLink: ue } = r.useContext(ie.I),
            pe = (0, d.n9)(),
            ve = (0, M.W6)(),
            ge = ue && ae(x.route, C),
            de = Q(C, x.route, ge ? "relative" : "absolute"),
            he = !ge && de ? (0, E.NT)(de) : de,
            be = ge || !he ? he : (0, q.wJ)(he, pe),
            Oe = Q(C, "websitehub", "absolute"),
            we =
              x.route != "websitehub"
                ? ee.Z.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            Ee = r.useCallback(() => {
              Oe && window.location.assign(Oe);
            }, [Oe]);
          return C
            ? ge
              ? (0, t.jsx)(m.Ii, {
                  style: x.style,
                  className: x.className,
                  href: ve.createHref({ pathname: be }),
                  onClick: (_e) => {
                    be && (x.onClick?.(_e), ve.push(be), _e.preventDefault());
                  },
                  onOptionsActionDescription: we,
                  onOptionsButton: we ? Ee : void 0,
                  preferredFocus: re,
                  children: x.children,
                })
              : (0, t.jsx)(m.Ii, {
                  href: be,
                  style: x.style,
                  className: x.className,
                  onClick: x.onClick,
                  preferredFocus: re,
                  onOptionsActionDescription: we,
                  onOptionsButton: we ? Ee : void 0,
                  children: x.children,
                })
            : null;
        }
      },
      88812: (U, ce, o) => {
        "use strict";
        o.d(ce, { WC: () => q });
        var t = o(9046),
          R = o(5827),
          Z = o(75233),
          m = o(80902),
          d = o(71742),
          r = o(68266),
          M = o(85741);
        function q(k, E, w, _, ee) {
          const f = (0, Z.jE)(),
            se = (0, R.eG)();
          return (0, m.I)(ie(f, se, k, E, w, _, ee)).data ?? void 0;
        }
        function S(k, E, w, _, ee) {
          return [
            "useEventImageForSizeAsArrayWithFallback",
            k?.GID,
            E,
            w,
            _,
            ee,
          ];
        }
        function ie(k, E, w, _, ee, f, se) {
          return {
            queryKey: S(w, _, ee, f, se),
            enabled: w && !!w.GID,
            queryFn: async () => {
              if (!w) return null;
              let D = new Array();
              if (!w.BImageNeedScreenshotFallback(_, ee)) {
                const H = await k.ensureQueryData((0, r.lx)(k, E, w, _, ee, f));
                if ((H && D.push(H), f != t.wI.full)) {
                  const V = await k.ensureQueryData(
                    (0, r.lx)(k, E, w, _, ee, t.wI.full),
                  );
                  V && D.push(V);
                }
              }
              if (!se)
                try {
                  const H = await k.ensureQueryData((0, M.dO)(k, E, w));
                  H && D.push(H);
                } catch (H) {
                  if (
                    ((0, d.wT)(
                      !1,
                      `Failed to get fallback art/screenshot for event ${w?.GID} from clan ${w?.clanSteamID.GetAccountID()}`,
                    ),
                    D.length == 0)
                  )
                    throw H;
                }
              return D;
            },
          };
        }
      },
      68266: (U, ce, o) => {
        "use strict";
        o.d(ce, { lx: () => _, m0: () => E });
        var t = o(9046),
          R = o(55483),
          Z = o(72609),
          m = o(21721),
          d = o(5827),
          r = o(40358),
          M = o(75233),
          q = o(80902),
          S = o(18210),
          ie = o(53113),
          k = o(85741);
        function E(f, se, D, H = t.wI.full, V = !0) {
          const ae = (0, M.jE)(),
            I = (0, d.eG)();
          return (0, q.I)(_(ae, I, f, se, D, H, V)).data ?? void 0;
        }
        function w(f, se, D, H = t.wI.full, V = !0) {
          return ["useEventImageURLWithFallback", f?.GID, se, D, H, V];
        }
        function _(f, se, D, H, V, ae = t.wI.full, I = !0) {
          return {
            queryKey: w(D, H, V, ae, I),
            enabled: D && !!D.GID,
            initialData: () => ee(D, H, V, ae, I),
            queryFn: async () => {
              if (!D) return null;
              let j = ee(D, H, V, ae, I);
              if (j) return j;
              const O = await f.ensureQueryData(
                (0, R.ec)(D.clanSteamID.GetAccountID(), f),
              );
              if (H == "capsule") {
                let A = D.appid;
                if (
                  !A &&
                  O &&
                  ((O.is_creator_home && !O.is_ogg) || O.is_curator)
                )
                  if (D.jsondata?.referenced_appids?.length)
                    A = D.jsondata.referenced_appids[0];
                  else return O.avatar_full_url;
                const N = await f.ensureQueryData((0, r.AQ)(se, { appid: A }));
                return N
                  ? (0, m.b0)(N, "main_capsule")
                  : O?.avatar_full_url
                    ? O.avatar_full_url
                    : `${Z.TS.STORE_ITEM_BASE_URL}steam/apps/${A}/header.jpg`;
              }
              return H == "background" &&
                O &&
                ((O.is_creator_home && !O.is_ogg) || O.is_curator)
                ? O.creator_page_bg_url
                : await f.ensureQueryData((0, k.dO)(f, se, D));
            },
          };
        }
        function ee(f, se, D, H = t.wI.full, V = !0) {
          if (!f) return;
          const ae = f.GetImageURL(se, D, H);
          if (ae && ae.trim().length > 0) return ae;
          const I = S.A0.GetELanguageFallback(D);
          if (D != I) {
            const O = f.GetImageURL(se, I, H);
            if (O && O.trim().length > 0) return O;
          }
          if (se == "capsule") {
            let O = f.GetImageFromBeginningOfDescription(D, Number.MAX_VALUE);
            if (O && (V || (0, ie.ZF)(O))) return O;
          }
        }
      },
      85741: (U, ce, o) => {
        "use strict";
        o.d(ce, { Mg: () => q, dO: () => S });
        var t = o(55483),
          R = o(99412),
          Z = o(72609),
          m = o(5827),
          d = o(40358),
          r = o(75233),
          M = o(80902);
        function q(k) {
          const E = (0, r.jE)(),
            w = (0, m.eG)();
          return (0, M.I)(S(E, w, k)).data ?? void 0;
        }
        function S(k, E, w) {
          return {
            queryKey: ie(w),
            enabled: w && !!w.GID,
            queryFn: async () => {
              if (!w) return null;
              const _ = await k.ensureQueryData(
                  (0, d.OE)(E, w.appid ? { appid: w.appid } : void 0),
                ),
                ee = await k.ensureQueryData(
                  (0, t.ec)(w.clanSteamID.GetAccountID(), k),
                );
              if (w.appid)
                if (_) {
                  if (
                    _.all_ages_screenshots &&
                    _.all_ages_screenshots.length > 0
                  ) {
                    let f = Number(
                      w.bOldAnnouncement
                        ? w.AnnouncementGID
                        : w.GID == null
                          ? 0
                          : w.GID,
                    );
                    if (_.all_ages_screenshots.length > 1)
                      return (
                        (f = f % _.all_ages_screenshots.length),
                        `${Z.TS.STORE_ITEM_BASE_URL}${_.all_ages_screenshots[f].filename}`
                      );
                  }
                } else return "";
              if (
                w.GetEventType() != R.ajI &&
                ee &&
                ((ee.is_creator_home && !ee.is_ogg) || ee.is_curator)
              )
                return ee.avatar_full_url;
            },
          };
        }
        function ie(k) {
          return ["useFallbackArtworkScreenshot", k?.GID];
        }
      },
      92854: (U, ce, o) => {
        "use strict";
        o.d(ce, {
          iL: () => Ye,
          V4: () => Pe,
          mb: () => Ze,
          BY: () => Re,
          Ry: () => ke,
          DI: () => Ge,
          XC: () => Ve,
          Dk: () => t,
          Db: () => Z,
          hb: () => R,
          Nl: () => $,
        });
        var t = {};
        o.r(t), o.d(t, { rV: () => _ });
        var R = {};
        o.r(R), o.d(R, { uI: () => H, ym: () => D, QB: () => V });
        var Z = {};
        o.r(Z), o.d(Z, { UO: () => X, pR: () => Q });
        var m = o(80613),
          d = o.n(m),
          r = o(75245),
          M = o(35038);
        const q = 0,
          S = 1,
          ie = 2,
          k = 3,
          E = 4,
          w = 5,
          _ = 6,
          ee = 7,
          f = 8,
          se = 0,
          D = 1,
          H = 2,
          V = 3,
          ae = 4,
          I = 0,
          j = 1,
          O = 2,
          y = 3,
          A = 4,
          N = 5,
          P = 6,
          Y = 7,
          Q = 8,
          X = 9,
          me = 10,
          Ne = 11;
        function Ue(ye) {
          return "unknown ESeason ( " + ye + " )";
        }
        function ut(ye) {
          return "unknown EUserActionEventType ( " + ye + " )";
        }
        function ft(ye) {
          return "unknown EYearInReviewPrivacyState ( " + ye + " )";
        }
        function x(ye) {
          return "unknown EYearInReviewAccessSource ( " + ye + " )";
        }
        class C extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.total_playtime_seconds || r.Sg(C.M()),
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
                    total_playtime_seconds: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_sessions: {
                      n: 20,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    vr_sessions: {
                      n: 21,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    deck_sessions: {
                      n: 22,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    controller_sessions: {
                      n: 23,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    linux_sessions: {
                      n: 24,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    macos_sessions: {
                      n: 25,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    windows_sessions: {
                      n: 26,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_playtime_percentagex100: {
                      n: 27,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    vr_playtime_percentagex100: {
                      n: 28,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    deck_playtime_percentagex100: {
                      n: 29,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    controller_playtime_percentagex100: {
                      n: 30,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    linux_playtime_percentagex100: {
                      n: 31,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    macos_playtime_percentagex100: {
                      n: 32,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    windows_playtime_percentagex100: {
                      n: 33,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = r.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(C.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new C();
            return C.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(C.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(C.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStats";
          }
        }
        class re extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.appid || r.Sg(re.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = r.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(re.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new re();
            return re.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(re.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(re.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreakGame";
          }
        }
        class ue extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.longest_consecutive_days || r.Sg(ue.M()),
              m.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    longest_consecutive_days: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rtime_start: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    streak_games: { n: 3, c: re, r: !0, q: !0 },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = r.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(ue.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new ue();
            return ue.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(ue.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(ue.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreak";
          }
        }
        class pe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.overall_rank || r.Sg(pe.M()),
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
                    overall_rank: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    vr_rank: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    deck_rank: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    controller_rank: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    linux_rank: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    mac_rank: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    windows_rank: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = r.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(pe.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new pe();
            return pe.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(pe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(pe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeRanks";
          }
        }
        class ve extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.appid || r.Sg(ve.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    stats: { n: 2, c: C },
                    playtime_streak: { n: 3, c: ue },
                    playtime_ranks: { n: 4, c: pe },
                    rtime_first_played: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    relative_game_stats: { n: 6, c: C },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = r.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(ve.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new ve();
            return ve.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(ve.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(ve.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePlaytimeStats";
          }
        }
        class ge extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.appid || r.Sg(ge.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    new_this_year: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    rtime_first_played_lifetime: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    demo: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    playtest: { n: 5, br: r.qM.readBool, bw: r.gp.writeBool },
                    played_during_early_access: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    played_vr: { n: 7, br: r.qM.readBool, bw: r.gp.writeBool },
                    played_deck: {
                      n: 8,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    played_controller: {
                      n: 9,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    played_linux: {
                      n: 10,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    played_mac: {
                      n: 11,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    played_windows: {
                      n: 12,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    total_playtime_percentagex100: {
                      n: 13,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_sessions: {
                      n: 14,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rtime_release_date: {
                      n: 15,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    parent_appid: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = r.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(ge.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new ge();
            return ge.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(ge.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(ge.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameSummary";
          }
        }
        class de extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.appid || r.Sg(de.M()),
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
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    total_playtime_percentagex100: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    relative_playtime_percentagex100: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = r.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(de.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new de();
            return de.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(de.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(de.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSimpleGameSummary";
          }
        }
        class he extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.appid || r.Sg(he.M()),
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
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    rank: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    relative_playtime_percentagex100: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = r.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(he.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new he();
            return he.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(he.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(he.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRank";
          }
        }
        class be extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.category || r.Sg(be.M()),
              m.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    category: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    rankings: { n: 2, c: he, r: !0, q: !0 },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = r.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(be.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new be();
            return be.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(be.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(be.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CRankingCategory";
          }
        }
        class Oe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.overall_ranking || r.Sg(Oe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    overall_ranking: { n: 1, c: be },
                    vr_ranking: { n: 2, c: be },
                    deck_ranking: { n: 3, c: be },
                    controller_ranking: { n: 4, c: be },
                    linux_ranking: { n: 5, c: be },
                    mac_ranking: { n: 6, c: be },
                    windows_ranking: { n: 7, c: be },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = r.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Oe.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Oe();
            return Oe.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Oe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Oe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRankings";
          }
        }
        class we extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.total_achievements || r.Sg(we.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    total_achievements: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_games_with_achievements: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_rare_achievements: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = r.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(we.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new we();
            return we.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(we.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(we.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeSummaryStats";
          }
        }
        class Ee extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.stats || r.Sg(Ee.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: { stats: { n: 1, c: _e, r: !0, q: !0 } },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = r.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Ee.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Ee();
            return Ee.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Ee.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Ee.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats";
          }
        }
        class _e extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.tag_id || r.Sg(_e.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    tag_id: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    tag_weight: {
                      n: 2,
                      br: r.qM.readFloat,
                      bw: r.gp.writeFloat,
                    },
                    tag_weight_pre_selection: {
                      n: 3,
                      br: r.qM.readFloat,
                      bw: r.gp.writeFloat,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = r.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(_e.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new _e();
            return _e.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(_e.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(_e.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats_Tag";
          }
        }
        class De extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.screenshots_shared || r.Sg(De.M()),
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
                    screenshots_shared: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    gifts_sent: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    loyalty_reactions: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    written_reviews: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    guides_submitted: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    workshop_contributions: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    badges_earned: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    friends_added: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    forum_posts: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    workshop_subscriptions: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    guide_subscribers: {
                      n: 11,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    workshop_subscribers: {
                      n: 12,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    games_played_pct: {
                      n: 13,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    achievements_pct: {
                      n: 14,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    game_streak_pct: {
                      n: 15,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    games_played_avg: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    achievements_avg: {
                      n: 17,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    game_streak_avg: {
                      n: 18,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = r.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(De.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new De();
            return De.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(De.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(De.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeByNumbers";
          }
        }
        class T extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.total_stats || r.Sg(T.M()),
              m.Message.initialize(this, e, 0, -1, [2, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    total_stats: { n: 1, c: C },
                    games: { n: 2, c: ve, r: !0, q: !0 },
                    playtime_streak: { n: 3, c: ue },
                    months: { n: 5, c: K, r: !0, q: !0 },
                    game_summary: { n: 6, c: ge, r: !0, q: !0 },
                    demos_played: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    game_rankings: { n: 8, c: Oe },
                    playtests_played: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    summary_stats: { n: 10, c: we },
                    substantial: {
                      n: 11,
                      d: !0,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    tag_stats: { n: 12, c: Ee },
                    by_numbers: { n: 13, c: De },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = r.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(T.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new T();
            return T.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(T.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(T.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeStats";
          }
        }
        class K extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.rtime_month || r.Sg(K.M()),
              m.Message.initialize(this, e, 0, -1, [4, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    rtime_month: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    stats: { n: 2, c: C },
                    appid: { n: 4, c: ve, r: !0, q: !0 },
                    relative_monthly_stats: { n: 5, c: C },
                    game_summary: { n: 6, c: de, r: !0, q: !0 },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = r.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(K.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new K();
            return K.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(K.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(K.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMonthlyPlaytimeStats";
          }
        }
        class oe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.account_id || r.Sg(oe.M()),
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
                    account_id: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    playtime_stats: { n: 3, c: T },
                    privacy_state: {
                      n: 4,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = r.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(oe.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new oe();
            return oe.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(oe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(oe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserYearInReviewStats";
          }
        }
        class F extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.from_dbo || r.Sg(F.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    from_dbo: { n: 1, br: r.qM.readBool, bw: r.gp.writeBool },
                    overall_time_ms: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    dbo_load_ms: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    query_execution_ms: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    message_population_ms: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    dbo_lock_load_ms: {
                      n: 6,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = r.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(F.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new F();
            return F.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(F.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(F.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CYearInReviewPerformanceStats";
          }
        }
        class fe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.statid || r.Sg(fe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    statid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    fieldid: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    achievement_name_internal: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    rtime_unlocked: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = r.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(fe.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new fe();
            return fe.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(fe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(fe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAchievementDetails";
          }
        }
        class Le extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.appid || r.Sg(Le.M()),
              m.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    achievements: { n: 2, c: fe, r: !0, q: !0 },
                    all_time_unlocked_achievements: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    unlocked_more_in_future: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = r.w0(Le.M())), Le.sm_mbf;
          }
          toObject(e = !1) {
            return Le.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Le.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Le.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Le();
            return Le.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Le.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Le.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameAchievements";
          }
        }
        class je extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.median_achievements || r.Sg(je.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    median_achievements: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    median_games: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    median_streak: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = r.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(je.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new je();
            return je.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(je.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(je.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPercentiles";
          }
        }
        class Ke extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.new_releases || r.Sg(Ke.M()),
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
                    new_releases: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    recent_releases: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    classic_releases: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    recent_cutoff_year: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = r.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Ke.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Ke();
            return Ke.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Ke.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Ke.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPlaytimeDistribution";
          }
        }
        class ze extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.games_played || r.Sg(ze.M()),
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
                    games_played: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    unlocked_achievements: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    longest_streak: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = r.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(ze.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new ze();
            return ze.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(ze.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(ze.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPreviousYIRSummaryData";
          }
        }
        class ke extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.steamid || r.Sg(ke.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    force_regenerate: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    access_source: {
                      n: 4,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    fetch_previous_year_summary: {
                      n: 5,
                      d: !1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = r.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(ke.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new ke();
            return ke.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(ke.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(ke.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Request";
          }
        }
        class Xe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.stats || r.Sg(Xe.M()),
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
                    stats: { n: 1, c: oe },
                    performance_stats: { n: 2, c: F },
                    percentiles: { n: 3, c: je },
                    distribution: { n: 4, c: Ke },
                    previous_year_summary: { n: 5, c: ze },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = r.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Xe.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Xe();
            return Xe.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Xe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Xe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Response";
          }
        }
        class Ve extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.steamid || r.Sg(Ve.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    privacy_state: {
                      n: 3,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = r.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Ve.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Ve();
            return Ve.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Ve.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Ve.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Request";
          }
        }
        class it extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.privacy_state || r.Sg(it.M()),
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
                    privacy_state: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = r.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(it.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new it();
            return it.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(it.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(it.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Response";
          }
        }
        class st extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.steamid || r.Sg(st.M()),
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
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = r.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(st.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new st();
            return st.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(st.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(st.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Request";
          }
        }
        class at extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.privacy_state || r.Sg(at.M()),
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
                    privacy_state: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    generated_value: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    steamid: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    rt_privacy_updated: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = r.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(at.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new at();
            return at.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(at.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(at.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Response";
          }
        }
        class Ze extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.steamid || r.Sg(Ze.M()),
              m.Message.initialize(this, e, 0, -1, [3], null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    total_only: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = r.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Ze.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Ze();
            return Ze.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Ze.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Ze.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Request";
          }
        }
        class ot extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.game_achievements || r.Sg(ot.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    game_achievements: { n: 1, c: Le, r: !0, q: !0 },
                    total_achievements: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_rare_achievements: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_games_with_achievements: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = r.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(ot.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new ot();
            return ot.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(ot.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(ot.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Response";
          }
        }
        class Ge extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.steamid || r.Sg(Ge.M()),
              m.Message.initialize(this, e, 0, -1, [3], null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = r.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Ge.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Ge();
            return Ge.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Ge.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Ge.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Request";
          }
        }
        class Je extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.apps || r.Sg(Je.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: { apps: { n: 1, c: $e, r: !0, q: !0 } },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = r.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Je.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Je();
            return Je.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Je.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Je.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response";
          }
        }
        class He extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.image_url || r.Sg(He.M()),
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
                    image_url: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    preview_url: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    image_width: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    image_height: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    maybe_inappropriate_sex: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    maybe_inappropriate_violence: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    visibility: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    spoiler_tag: {
                      n: 8,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = r.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(He.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new He();
            return He.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(He.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(He.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
          }
        }
        class $e extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.appid || r.Sg($e.M()),
              m.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    screenshots: { n: 2, c: He, r: !0, q: !0 },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = r.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT($e.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new $e();
            return $e.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj($e.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0($e.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
          }
        }
        class Pe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.steamid || r.Sg(Pe.M()),
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    gid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    type: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = r.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Pe.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Pe();
            return Pe.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Pe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Pe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Request";
          }
        }
        class lt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.jsondata || r.Sg(lt.M()),
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
                    jsondata: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = r.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(lt.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new lt();
            return lt.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(lt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(lt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Response";
          }
        }
        class qe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.steamid || r.Sg(qe.M()),
              m.Message.initialize(this, e, 0, -1, [2], null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    gids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readFixed64String,
                      pbr: r.qM.readPackedFixed64String,
                      bw: r.gp.writeRepeatedFixed64String,
                    },
                    type: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = r.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(qe.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new qe();
            return qe.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(qe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(qe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Request";
          }
        }
        class Qe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.entries || r.Sg(Qe.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: { entries: { n: 1, c: ct, r: !0, q: !0 } },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = r.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Qe.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Qe();
            return Qe.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Qe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Qe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response";
          }
        }
        class ct extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.gid || r.Sg(ct.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    gid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    jsondata: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = r.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(ct.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new ct();
            return ct.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(ct.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(ct.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
          }
        }
        class et extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.gid || r.Sg(et.M()),
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
                    gid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    type: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    count: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    last_account_index: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = r.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(et.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new et();
            return et.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(et.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(et.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Request";
          }
        }
        class Fe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.entries || r.Sg(Fe.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    entries: { n: 1, c: Te, r: !0, q: !0 },
                    last_account_index: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = r.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Fe.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Fe();
            return Fe.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Fe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Fe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response";
          }
        }
        class Te extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.gid || r.Sg(Te.M()),
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
                    gid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    jsondata: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = r.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Te.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Te();
            return Te.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Te.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Te.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response_Entry";
          }
        }
        class Ye extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.steamid || r.Sg(Ye.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    return_private: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = r.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Ye.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Ye();
            return Ye.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Ye.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Ye.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Request";
          }
        }
        class tt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.steamid || r.Sg(tt.M()),
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
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    privacy_state: {
                      n: 3,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    rt_privacy_updated: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    privacy_override: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = r.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(tt.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new tt();
            return tt.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(tt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(tt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendSharedYearInView";
          }
        }
        class Ae extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.friend_shares || r.Sg(Ae.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    friend_shares: { n: 1, c: tt, r: !0, q: !0 },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = r.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Ae.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Ae();
            return Ae.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Ae.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Ae.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Response";
          }
        }
        class Re extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.steamid || r.Sg(Re.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    language: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = r.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Re.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Re();
            return Re.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Re.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Re.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Request";
          }
        }
        class v extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              v.prototype.images || r.Sg(v.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: { images: { n: 1, c: rt, r: !0, q: !0 } },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = r.w0(v.M())), v.sm_mbf;
          }
          toObject(e = !1) {
            return v.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(v.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(v.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new v();
            return v.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(v.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(v.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response";
          }
        }
        class rt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.name || r.Sg(rt.M()),
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
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    url_path: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = r.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(rt.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new rt();
            return rt.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(rt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(rt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
          }
        }
        class Ie extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.steamid || r.Sg(Ie.M()),
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
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = r.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Ie.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Ie();
            return Ie.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Ie.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Ie.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
          }
        }
        class Be extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.year || r.Sg(Be.M()),
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
                    year: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    month: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    games_played: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    top_played_appid: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    longest_streak_days: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rt_streak_start: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    achievements: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    screenshots: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = r.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Be.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (d().BinaryReader)(e),
              L = new Be();
            return Be.deserializeBinaryFromReader(L, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Be.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Be.M(), e, i);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
          }
        }
        var $;
        ((ye) => {
          function e(gt, mt, nt) {
            return gt.SendMsg(
              "SaleFeature.GetUserYearInReview#1",
              (0, M.I8)(ke, mt, nt),
              Xe,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          ye.GetUserYearInReview = e;
          function i(gt, mt, nt) {
            return gt.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, M.I8)(st, mt, nt),
              at,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          ye.GetUserSharingPermissions = i;
          function L(gt, mt, nt) {
            return gt.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, M.I8)(Ve, mt, nt),
              it,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          ye.SetUserSharingPermissions = L;
          function xe(gt, mt, nt) {
            return gt.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, M.I8)(Ze, mt, nt),
              ot,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          ye.GetUserYearAchievements = xe;
          function Wt(gt, mt, nt) {
            return gt.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, M.I8)(Ge, mt, nt),
              Je,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          ye.GetUserYearScreenshots = Wt;
          function Bt(gt, mt, nt) {
            return gt.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, M.I8)(Pe, mt, nt),
              lt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          ye.GetUserActionData = Bt;
          function Xt(gt, mt, nt) {
            return gt.SendMsg(
              "SaleFeature.GetMultipleUserActionData#1",
              (0, M.I8)(qe, mt, nt),
              Qe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          ye.GetMultipleUserActionData = Xt;
          function jt(gt, mt, nt) {
            return gt.SendMsg(
              "SaleFeature.GetAllUserActionDataForType#1",
              (0, M.I8)(et, mt, nt),
              Fe,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          ye.GetAllUserActionDataForType = jt;
          function Zt(gt, mt, nt) {
            return gt.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, M.I8)(Ye, mt, nt),
              Ae,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          ye.GetFriendsSharedYearInReview = Zt;
          function Ct(gt, mt, nt) {
            return gt.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, M.I8)(Re, mt, nt),
              v,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          ye.GetUserYearInReviewShareImage = Ct;
          function tr(gt, mt, nt) {
            return gt.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, M.I8)(Ie, mt, nt),
              Be,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          ye.GetYIRCurrentMonthlySummary = tr;
        })($ || ($ = {}));
      },
      79083: (U, ce, o) => {
        "use strict";
        o.d(ce, { m: () => d, U: () => r });
        var t = o(7850),
          R = o(36118),
          Z = ((M) => (
            (M.k_ECutArrowStyle = "single"),
            (M.k_EDoubleArrowStyle = "double"),
            (M.k_EThickChevron = "chevron"),
            (M.k_EFilledArrow = "filled"),
            (M.k_EPointyArrow = "pointy"),
            M
          ))(Z || {}),
          m = ((M) => (
            (M.k_EPillCrumb = "pill"),
            (M.k_ECircularCrumb = "circle"),
            (M.k_ESquareCrumb = "square"),
            M
          ))(m || {});
        function d(M) {
          const { arrowFill: q, arrowStyle: S, direction: ie } = M;
          switch (S) {
            default:
            case Z.k_ECutArrowStyle: {
              const k = ie == "right" ? 0 : 180;
              return (0, t.jsx)(R.uMb, {
                fill: q || "white",
                role: "presentation",
                angle: k,
              });
            }
            case Z.k_EDoubleArrowStyle: {
              const k = ie == "right" ? 180 : 0;
              return (0, t.jsx)(R.F2T, {
                fill: q || "white",
                role: "presentation",
                angle: k,
              });
            }
            case Z.k_EThickChevron: {
              const k = ie == "right" ? 0 : 180;
              return (0, t.jsx)(R.l8x, {
                fill: q || "white",
                role: "presentation",
                angle: k,
              });
            }
            case Z.k_EFilledArrow: {
              const k = ie == "right" ? 90 : 270;
              return (0, t.jsx)(R.V5W, {
                fill: q || "white",
                role: "presentation",
                angle: k,
              });
            }
            case Z.k_EPointyArrow:
              return (0, t.jsx)(R.L0X, {
                fill: q || "white",
                role: "presentation",
                direction: ie || "left",
              });
          }
        }
        function r(M) {
          const {
              bIsActive: q,
              breadcrumbActiveColor: S,
              breadcrumbColor: ie,
              breadcrumbStyle: k,
            } = M,
            E = q ? S || "#FFFFFF" : ie || "#606974";
          switch (k) {
            default:
            case m.k_EPillCrumb:
              return (0, t.jsx)(R.IGf, { fill: E, role: "presentation" });
            case m.k_ECircularCrumb:
              return (0, t.jsx)(R.az8, { fill: E, role: "presentation" });
            case m.k_ESquareCrumb:
              return (0, t.jsx)(R.koA, { fill: E, role: "presentation" });
          }
        }
      },
      47797: (U, ce, o) => {
        "use strict";
        o.d(ce, { Ns: () => Z });
        var t = o(99412);
        const R = 1778623200;
        function Z(r, M) {
          let q = !1;
          return (
            r && r.GetEventType() == t.ajI
              ? (q = !0)
              : r && M && M.is_creator_home && (q = m(r, M)),
            q
          );
        }
        function m(r, M) {
          return !!M && !!M.is_creator_home && (r.createTime ?? 0) > R;
        }
        function d(r) {
          const M = useClanInfoByAccountID(r.clanSteamID.GetAccountID());
          return Z(r, M.data);
        }
      },
      43458: (U, ce, o) => {
        "use strict";
        o.d(ce, { Lg: () => M, XU: () => k });
        const t = 20,
          R = /^.*youtube[^v]+v=(.{11}).*/,
          Z = /^.*youtu\.be\/(.{11}).*/,
          m = /^.*youtube.*\/embed\/(.{11}).*/,
          d = /^.*[?&]t=([^&]+)(?:&|$)/,
          r = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
        function M(E) {
          return !!q(E);
        }
        function q(E) {
          return (
            E?.length < t ? void 0 : R.exec(E) || Z.exec(E) || m.exec(E)
          )?.[1];
        }
        function S(E) {
          return d.exec(E)?.[1];
        }
        function ie(E) {
          const w = r.exec(E);
          if (!(w?.[1] || w?.[2] || w?.[3] || w?.[4])) return;
          if (w?.[4]) return parseInt(w?.[4]);
          let _ = 0;
          return (
            w?.[1] && (_ += 3600 * parseInt(w[1])),
            w?.[2] && (_ += 60 * parseInt(w[2])),
            w?.[3] && (_ += parseInt(w[3])),
            _
          );
        }
        function k(E) {
          const w = q(E);
          if (!w) return;
          const _ = S(E),
            ee = _ ? ie(_) : void 0;
          return { strVideoID: w, nStartSeconds: ee };
        }
      },
      46943: (U, ce, o) => {
        "use strict";
        o.d(ce, { Ul: () => D, xz: () => ae, $Y: () => V, i8: () => H });
        var t = o(7850),
          R = o(90626),
          Z = o(75844),
          m = o(5858),
          d = o(36707),
          r = o(3166),
          M = o(13465);
        const q =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          S =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          ie =
            o.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var k = o(43047),
          E = o.n(k),
          w = o(71742),
          _ = Object.defineProperty,
          ee = Object.getOwnPropertyDescriptor,
          f = (I, j, O, y) => {
            for (
              var A = y > 1 ? void 0 : y ? ee(j, O) : j, N = I.length - 1, P;
              N >= 0;
              N--
            )
              (P = I[N]) && (A = (y ? P(j, O, A) : P(A)) || A);
            return y && A && _(j, O, A), A;
          };
        function se(I) {
          switch (I) {
            case "X-Small":
            case "Small":
              return q;
            case "Medium":
            case "MediumLarge":
              return S;
            case "Large":
            case "X-Large":
            case "FillArea":
              return ie;
            default:
              return (0, w.z_)(I, `Unhandled size ${I}`), S;
          }
        }
        const D = R.memo(function (j) {
          const {
              strAvatarURL: O,
              size: y = "Medium",
              className: A,
              statusStyle: N,
              statusPosition: P,
              children: Y,
              ...Q
            } = j,
            X = R.useMemo(() => {
              const me = [];
              return O && me.push(O), me.push(se(y)), me;
            }, [O, y]);
          return (0, t.jsxs)("div", {
            className: (0, d.A)(
              E().avatarHolder,
              "avatarHolder",
              "no-drag",
              y,
              A,
            ),
            ...Q,
            children: [
              (0, t.jsx)("div", {
                className: (0, d.A)(E().avatarStatus, "avatarStatus", P),
                style: N,
              }),
              (0, t.jsx)(M.c, {
                className: (0, d.A)(E().avatar, "avatar"),
                rgSources: X,
                draggable: !1,
              }),
              Y,
            ],
          });
        });
        let H = class extends R.Component {
          render() {
            const {
              persona: I,
              size: j = "Medium",
              animatedAvatar: O,
              className: y,
              strBackupAvatarURL: A,
              ...N
            } = this.props;
            let P = "";
            return (
              O && O.image_small && O.image_small.length != 0
                ? (P = r.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + O.image_small)
                : I
                  ? ((P = I.avatar_url_medium),
                    j == "Small" || j == "X-Small"
                      ? (P = I.avatar_url)
                      : (j == "Large" || j == "X-Large" || j == "FillArea") &&
                        (P = I.avatar_url_full))
                  : A && (P = A),
              (0, t.jsx)(D, {
                strAvatarURL: P,
                size: j,
                className: (0, d.A)((0, m.rO)(I), y),
                ...N,
              })
            );
          }
        };
        H = f([Z.PA], H);
        const V = (0, Z.PA)((I) => {
          const {
            profileItem: j,
            className: O,
            bDisableAnimation: y,
            ...A
          } = I;
          if (!j || !j.image_small || j.image_small.length == 0) return null;
          let N = y ? j.image_large : j.image_small;
          return (
            N || (N = j.image_small),
            N.startsWith("https://") ||
              (N = r.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + N),
            (0, t.jsx)("div", {
              className: (0, d.A)(E().avatarFrame, O, "avatarFrame"),
              ...A,
              children: (0, t.jsx)("img", {
                className: E().avatarFrameImg,
                src: N,
              }),
            })
          );
        });
        let ae = class extends R.Component {
          m_timer;
          constructor(I) {
            super(I),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let I = 0;
            switch (this.props.loopDuration) {
              case "Short":
                I = 2500;
                break;
              case "Medium":
                I = 5e3;
                break;
              case "Long":
                I = 1e4;
                break;
            }
            I != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                I,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(I) {
            this.props.loopDuration != I.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != I.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: I,
              animatedAvatar: j,
              avatarFrame: O,
              children: y,
              style: A,
              bLimitProfileFrameAnimationTime: N,
              bParentHovered: P,
              ...Y
            } = this.props;
            Y.onClick && (A = { ...A, cursor: "pointer" });
            const Q = this.state.bAnimate ? (j ?? void 0) : void 0;
            return (0, t.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, t.jsxs)(H, {
                animatedAvatar: Q,
                ...Y,
                children: [
                  y,
                  (0, t.jsx)(V, {
                    profileItem: O ?? null,
                    bDisableAnimation: N && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        ae = f([Z.PA], ae);
      },
      54407: (U, ce, o) => {
        "use strict";
        o.d(ce, { B3: () => ae, KM: () => f, KT: () => V });
        var t = o(41735),
          R = o.n(t),
          Z = o(58632),
          m = o.n(Z),
          d = o(90626),
          r = o(80902),
          M = o(75233),
          q = o(72604),
          S = o(76559),
          ie = o(34592),
          k = o(3166),
          E = o(35038),
          w = o(27386),
          _ = o(68312);
        const ee = "nicknames";
        function f(j) {
          const O = (0, _.KV)(),
            { data: y, isLoading: A } = (0, r.I)({
              queryKey: [ee],
              queryFn: async () => {
                const N = new Map();
                if (k.iA.logged_in) {
                  const P = E.w.Init(w.w_T),
                    Q = (await w.xtC.GetNicknameList(O, P)).Body().toObject();
                  Q?.nicknames &&
                    Q.nicknames.length > 0 &&
                    Q.nicknames.forEach((X) => {
                      N.set(X.accountid, X.nickname);
                    });
                }
                return N;
              },
            });
          return y ? y.get(j) : null;
        }
        async function se(j) {
          if (!j || j.length == 0) return [];
          const O =
            (0, k.yK)() == "community"
              ? k.TS.COMMUNITY_BASE_URL
              : k.TS.STORE_BASE_URL;
          if (j.length == 1) {
            const y = { accountid: j[0], origin: self.origin },
              A = await R().get(`${O}actions/ajaxgetavatarpersona`, {
                params: y,
              });
            if (
              !A ||
              A.status != 200 ||
              A.data?.success != q.R ||
              !A.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, ie.H))(A).strErrorMsg}`;
            return [A.data.userinfo];
          } else {
            const y = { accountids: j.join(","), origin: self.origin },
              A = await R().get(`${O}actions/ajaxgetmultiavatarpersona`, {
                params: y,
              });
            if (
              !A ||
              A.status != 200 ||
              A.data?.success != q.R ||
              !A.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, ie.H))(A).strErrorMsg}`;
            const N = new Map();
            return (
              A.data.userinfos.forEach((P) =>
                N.set(new S.b(P.steamid).GetAccountID(), P),
              ),
              j.map((P) => N.get(P))
            );
          }
        }
        const D = new (m())((j) => se(j), { cache: !1 }),
          H = "avatarandpersonas";
        function V(j) {
          const { data: O, isLoading: y } = (0, r.I)({
            queryKey: [H, j],
            queryFn: () => D.load(j),
          });
          return [O, y];
        }
        function ae(j) {
          const O = (0, M.jE)(),
            { data: y, isLoading: A } = (0, r.I)({
              queryKey: [H, j],
              queryFn: async () => {
                const P = await D.loadMany(j);
                return (
                  P.forEach((Y) => {
                    const Q = [H, new S.b(Y.steamid).GetAccountID()];
                    O.setQueryData(Q, Y);
                  }),
                  P
                );
              },
              enabled: j?.length > 0,
            }),
            N = (0, d.useMemo)(() => {
              const P = new Array();
              return (
                y?.forEach((Y) => {
                  Y instanceof Error || P.push(Y);
                }),
                P
              );
            }, [y]);
          return A ? null : N;
        }
        function I(j) {
          return ReactQueryClient.getQueryData([H, j]);
        }
      },
      68538: (U, ce, o) => {
        "use strict";
        o.d(ce, { F: () => V });
        var t = o(7850),
          R = o(54130),
          Z = o(19298),
          m = o(65731),
          d = o(90626),
          r = o(36707),
          M = o(18210),
          q = o(3166),
          S = o(47444),
          ie = o(64377),
          k = o(11279);
        function E(y) {
          const {
            nSlideIndex: A,
            nStartingSlideIndex: N,
            ref: P,
            children: Y,
          } = y;
          return N === void 0
            ? Y
            : (0, t.jsx)("div", { ref: A === N ? P : void 0, children: Y });
        }
        function w(y) {
          const {
              padded: A,
              gap: N,
              children: P,
              bLazyRenderChildren: Y,
              lazyRenderPlaceholderWidth: Q,
              lazyRenderPlaceholderHeight: X,
              startingSlide: me,
            } = y,
            Ne = d.useRef(null),
            Ue = d.useRef(null),
            ut = (0, q.Qn)();
          d.useLayoutEffect(() => {
            !Ne.current ||
              !Ue.current ||
              (Ne.current.scrollLeft +=
                Ue.current.getBoundingClientRect().left -
                Ne.current.getBoundingClientRect().left);
          }, [me]);
          const ft = d.Children.map(P, (C, re) =>
              Y
                ? (0, t.jsx)(ie.K, {
                    rootMargin: "0px 50% 0px 50%",
                    horizontal: !0,
                    placeholderWidth: Q ?? 1,
                    placeholderHeight: 1,
                    holdGamepadFocus: ut,
                    children: (0, t.jsx)(E, {
                      nSlideIndex: re,
                      nStartingSlideIndex: me,
                      ref: Ue,
                      children: C,
                    }),
                  })
                : (0, t.jsx)(E, {
                    nSlideIndex: re,
                    nStartingSlideIndex: me,
                    ref: Ue,
                    children: C,
                  }),
            ),
            x = (0, t.jsx)(Z.Z, {
              "flow-children": "row",
              style: { gap: N ? N + "px" : void 0 },
              className: (0, r.A)(
                { SaleSectionCarouselPadding: A },
                "ScrollSnapCarousel",
                "SaleSectionCarousel",
                k.ScrollSnapCarousel,
                y.className,
              ),
              ref: Ne,
              children: ft,
            });
          return Y
            ? (0, t.jsx)(ie.K, {
                rootMargin: "50% 0px 50% 0px",
                horizontal: !1,
                placeholderWidth: 1,
                placeholderHeight: X ?? 1,
                children: x,
              })
            : x;
        }
        var _ = o(95892),
          ee = o(64238),
          f = o.n(ee),
          se = o(79083);
        class D extends d.Component {
          render() {
            const { showArrows: A, arrowFill: N, arrowStyle: P } = this.props,
              Y = this.props.visibleSlides,
              Q = this.props.totalSlides,
              X = this.props.currentSlide;
            if (Y >= Q) return null;
            const me = (100 * X) / Q,
              Ne = 100 * (1 - Math.min(X + Y, Q) / Q),
              Ue = (50 * Y) / Q,
              ut = me + Ue,
              ft = 100 - ut;
            return (0, t.jsxs)("div", {
              className: S.pipScrollerContainer,
              children: [
                A &&
                  (0, t.jsx)(m._X, {
                    className: (0, r.A)(
                      S.pipScrollButton,
                      S.left,
                      S.carouselNavButton,
                    ),
                    children: (0, t.jsx)(se.m, {
                      arrowFill: N,
                      arrowStyle: P,
                      direction: "left",
                    }),
                  }),
                (0, t.jsxs)("div", {
                  className: S.pipScroller,
                  children: [
                    (0, t.jsx)("div", { className: S.scrollBackground }),
                    (0, t.jsx)("div", {
                      className: S.scrollForeground,
                      style: { left: me + "%", right: Ne + "%" },
                    }),
                    (0, t.jsx)("div", {
                      className: S.scrollNavDiv,
                      style: { left: "0%", width: ut + "%" },
                      children: (0, t.jsx)(m._X, {
                        className: (0, r.A)(
                          S.carouselNavButton,
                          S.scrollNavButton,
                        ),
                        style: { color: "red" },
                        children: (0, t.jsx)("div", {}),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: S.scrollNavDiv,
                      style: { right: "0%", width: ft + "%" },
                      children: (0, t.jsx)(m.CC, {
                        className: (0, r.A)(
                          S.carouselNavButton,
                          S.scrollNavButton,
                        ),
                        children: (0, t.jsx)("div", {}),
                      }),
                    }),
                  ],
                }),
                A &&
                  (0, t.jsx)(m.CC, {
                    className: (0, r.A)(
                      S.pipScrollButton,
                      S.right,
                      S.carouselNavButton,
                    ),
                    children: (0, t.jsx)(se.m, {
                      arrowFill: N,
                      arrowStyle: P,
                      direction: "right",
                    }),
                  }),
              ],
            });
          }
        }
        const H = (0, m.Yw)(D, (y) => ({
          currentSlide: y.currentSlide,
          totalSlides: y.totalSlides,
          visibleSlides: y.visibleSlides,
        }));
        function V(y) {
          const { bForceSimpleCarousel: A, screenIsWide: N, children: P } = y,
            Y = (0, q.Qn)();
          return (N || Y) && !A
            ? (0, t.jsx)(ae, { ...y, children: P })
            : (0, t.jsx)(w, { ...y, children: P });
        }
        function ae(y) {
          const A = (0, q.Qn)(),
            N = () => d.Children.count(y.children),
            P = () => Math.min(N(), y.visibleElements),
            Y = () =>
              d.Children.map(y.children, (C, re) => {
                const ue = y.bLazyRenderChildren
                  ? (0, t.jsx)(ie.K, {
                      rootMargin: "0px -5px 0px 100%",
                      horizontal: !0,
                      placeholderWidth: y.lazyRenderPlaceholderWidth ?? 1,
                      placeholderHeight: y.lazyRenderPlaceholderHeight ?? 1,
                      holdGamepadFocus: A,
                      children: C,
                    })
                  : C;
                return (0, t.jsx)(
                  m.q7,
                  {
                    className: S.innerSlide,
                    index: re,
                    role: "listitem",
                    "aria-label": void 0,
                    children: ue,
                  },
                  "slide_" + re,
                );
              }),
            Q = N(),
            X = P();
          if (!Q || !X) return null;
          const me = X < Q,
            Ne = y.hideArrows || !me,
            Ue = !me || y.hidePips;
          let ut = 4 / 3,
            ft = !0;
          y.slideAspectRatio && ((ut = y.slideAspectRatio), (ft = !1));
          const x = `items_in_row_${y.visibleElements}`;
          return (0, t.jsx)(Z.Z, {
            "flow-children": "row",
            className: (0, r.A)(S.carouselBody, y.className, x),
            navKey: y.navKey,
            children: (0, t.jsxs)(m.gi, {
              visibleSlides: y.visibleElements,
              totalSlides: N(),
              naturalSlideWidth: 100 * ut,
              naturalSlideHeight: 100,
              step: y.visibleElements,
              infinite: !y.disableEdgeWrap,
              isIntrinsicHeight: ft,
              dragEnabled: !1,
              touchEnabled: !1,
              lockOnWindowScroll: !0,
              orientation: "horizontal",
              disableKeyboard: !0,
              currentSlide: y.startingSlide,
              children: [
                (0, t.jsx)(O, {
                  bHideArrows: Ne,
                  bAutoAdvance: y.bAutoAdvance && !A,
                  onSlide: y.onSlide,
                  arrowFill: y.arrowFill,
                  arrowStyle: y.arrowStyle,
                  children: Y(),
                }),
                !Ue &&
                  (y.useTestScrollbar
                    ? (0, t.jsx)(H, { showArrows: Ne, carouselStore: null })
                    : (0, t.jsx)("div", {
                        className: f()({
                          [S.breadcrumbContainer]: !0,
                          [S.breadcrumbContainerTemplate]:
                            y.className?.includes("template-carousel"),
                        }),
                        children: (0, t.jsx)(I, {
                          ...y,
                          nPageSize: X,
                          children: y.children,
                        }),
                      })),
              ],
            }),
          });
        }
        function I(y) {
          const { nPageSize: A } = y,
            N = d.useContext(m.Yc),
            [P, Y] = d.useState(N.state.currentSlide);
          return (
            d.useEffect(
              () =>
                N.subscribe(() => {
                  Y(N.state.currentSlide);
                }),
              [N],
            ),
            (0, t.jsx)(t.Fragment, {
              children: d.Children.map(y.children, (Q, X) => {
                if (X % A !== 0) return null;
                const me = P >= X && P < X + A;
                return (0, t.jsx)(
                  m.cL,
                  {
                    slide: X,
                    className: S.pip,
                    children: (0, t.jsx)(se.U, { ...y, bIsActive: me }),
                  },
                  X,
                );
              }),
            })
          );
        }
        function j(y) {
          y.current && (window.clearTimeout(y.current), (y.current = null));
        }
        function O(y) {
          const {
              bHideArrows: A,
              bAutoAdvance: N,
              children: P,
              onSlide: Y,
              arrowFill: Q,
              arrowStyle: X,
            } = y,
            me = d.useContext(m.Yc),
            Ne = d.useRef(me.state.currentSlide),
            [Ue, ut] = d.useState(null),
            [ft, x] = d.useState(!!N),
            C = d.useRef(null),
            re = d.useRef(null);
          d.useEffect(() => {
            const pe = () => {
              C.current = window.setTimeout(() => {
                if (C.current) {
                  j(C);
                  let de = 0;
                  me.state.currentSlide + me.state.visibleSlides <
                    me.state.totalSlides &&
                    (de = Math.min(
                      me.state.currentSlide + me.state.visibleSlides,
                      me.state.totalSlides - me.state.visibleSlides,
                    )),
                    me.setStoreState({ currentSlide: de });
                }
              }, 8e3);
            };
            ft && pe();
            const ve = () => {
              const ge = Ne.current,
                de = me.state.currentSlide;
              Y && Y(de),
                ut(de > ge ? "Right" : de < ge ? "Left" : null),
                j(re);
              const he = 1e3;
              (re.current = window.setTimeout(() => {
                re.current && (ut(null), j(re));
              }, he)),
                (Ne.current = de),
                C.current ? (j(C), x(!1)) : ft && pe();
            };
            return (
              me.subscribe(ve),
              () => {
                me.unsubscribe(ve), j(C), j(re);
              }
            );
          }, [me, ft]);
          const ue = !!Ue && "CarouselSliding" + Ue;
          return (0, t.jsxs)("div", {
            className: (0, r.A)(S.sliderBody, "SliderBody", ue),
            children: [
              !A &&
                (0, t.jsx)(m._X, {
                  className: (0, r.A)(
                    S.carouselBtnCtn,
                    S.left,
                    S.carouselNavButton,
                    "CarouselBtnLeft",
                  ),
                  "aria-label": (0, M.we)("#Carousel_Prev"),
                  children: (0, t.jsx)(se.m, {
                    arrowFill: Q,
                    arrowStyle: X,
                    direction: "left",
                  }),
                }),
              (0, t.jsx)(m.Ap, {
                className: _.J.GetScrollableClassname(),
                classNameTray: S.slideTrayCustomize,
                classNameAnimation: S.DisableSliderMotion,
                role: "list",
                children: (0, t.jsx)(R.q, { children: P }),
              }),
              !A &&
                (0, t.jsx)(m.CC, {
                  className: (0, r.A)(
                    S.carouselBtnCtn,
                    S.right,
                    S.carouselNavButton,
                    "CarouselBtnRight",
                  ),
                  "aria-label": (0, M.we)("#Carousel_Next"),
                  children: (0, t.jsx)(se.m, {
                    arrowFill: Q,
                    arrowStyle: X,
                    direction: "right",
                  }),
                }),
            ],
          });
        }
      },
      53041: (U, ce, o) => {
        "use strict";
        o.d(ce, { O: () => Z });
        const t =
          /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
        function R(m) {
          return m ? t.test(m.trim()) : !1;
        }
        function Z(m, d) {
          return R(m) ? m : d;
        }
      },
      67418: (U, ce, o) => {
        "use strict";
        o.d(ce, { H: () => De, k: () => be });
        var t = o(7850),
          R = o(29630),
          Z = o(68941),
          m = o(70187),
          d = o(1917),
          r = o(90626),
          M = o(95535),
          q = o(16412),
          S = o(6878),
          ie = o.n(S),
          k = o(53107),
          E = o(36707),
          w = o(18210),
          _ = o(53113),
          ee = o(3166),
          f = o(26040),
          se = o(79118),
          D = o(25269),
          H = o(53041),
          V = o(24660);
        function ae() {
          return React.useMemo(
            () => ({
              style: {
                defaultValue: null,
                fnReadValue: (T) => T.attrs.style || null,
                fnRenderEditor: (T, K) => jsx(I, { value: T, setValue: K }),
              },
              buttoncolor: {
                defaultValue: null,
                fnReadValue: (T) => T.attrs.buttoncolor || null,
                fnRenderEditor: (T, K) => jsx(j, { value: T, setValue: K }),
              },
            }),
            [],
          );
        }
        function I(T) {
          const { value: K, setValue: oe } = T;
          return jsxs(Dialog.LabelGroup, {
            label: Localize("#EventEditor_InsertLink_Style"),
            children: [
              jsx(Dialog.RoundCheckboxField, {
                checked: K == null,
                onChange: (F) => F && oe(null),
                label: Localize("#EventEditor_InsertLink_Style_Default"),
              }),
              jsx(Dialog.RoundCheckboxField, {
                checked: K == "pill",
                onChange: (F) => F && oe("pill"),
                label: Localize("#EventEditor_InsertLink_Style_Pill"),
              }),
            ],
          });
        }
        function j(T) {
          const { value: K, setValue: oe } = T;
          return jsxs(Fragment, {
            children: [
              jsx(Dialog.Label, {
                children: Localize("#EventEditor_InsertLink_ButtonColor"),
              }),
              jsx("input", {
                type: "color",
                value: K || "#3691fa",
                onChange: (F) => oe(F?.currentTarget?.value),
              }),
            ],
          });
        }
        function O(T) {
          switch (T) {
            case "button":
              return (0, E.A)(S.LinkButton, "LinkButton");
            case "pill":
              return (0, E.A)(S.LinkPill, "LinkPill");
            default:
              return (0, E.A)(S.Link, "Link");
          }
        }
        function y(T, K, oe) {
          let F = "";
          return (
            T == "button" && K && (F += `background-color: ${K};`),
            T == "pill" && oe && (F += `color: ${oe};`),
            F.length == 0 ? void 0 : F
          );
        }
        function A(T, K, oe) {
          let F;
          return (
            (T == "button" || T == "pill") && K && (F = { backgroundColor: K }),
            (T == "button" || T == "pill") &&
              oe &&
              (F = { ...(F ?? {}), color: oe }),
            F
          );
        }
        function N(T) {
          let K = (0, D.J)((0, m.j$)(T.args) || (0, m.j$)(T.args, "href"));
          const oe = (0, m.j$)(T.args, "style"),
            F = (0, m.j$)(T.args, "id"),
            fe = (0, H.O)(
              (0, m.j$)(T.args, "buttoncolor") || (0, m.j$)(T.args, "bgcolor"),
              void 0,
            ),
            Le = (0, H.O)(
              (0, m.j$)(T.args, "labelcolor") || (0, m.j$)(T.args, "color"),
              void 0,
            ),
            je = O(oe),
            Ke = T.context.event,
            ze = (0, R.z5)(K, T.language, Ke?.rtime32_last_modified);
          if (ze === void 0 || ze == null) return T.children || "";
          typeof ze == "string" ? (K = ze) : (K = ze[1]);
          const ke = A(oe, fe, Le);
          return typeof K == "string" && K.length > 0 && K[0] == "#"
            ? (0, t.jsx)(V.Ii, {
                className: je,
                href: K,
                style: ke,
                children: T.children,
              })
            : K == "steam://settings/account"
              ? (0, t.jsx)(k.uU, {
                  className: je,
                  href: "steam://settings/account",
                  children: T.children,
                })
              : (0, t.jsx)(M.d$, {
                  className: je,
                  url: K,
                  event: T.context.event,
                  id: F,
                  style: ke,
                  children: T.children,
                });
        }
        function P(T) {
          const K = (0, m.j$)(T.args, "href"),
            oe = (0, f.em)(K);
          return oe
            ? oe.fnBBComponent(K, {
                event: T.context.event,
                partnerEventStore: se.O3,
              })
            : (0, t.jsx)(N, { ...T });
        }
        var Y = o(65316),
          Q = o(34736),
          X = o(39239),
          me = o(13465),
          Ne = o(72609),
          Ue = o(80150),
          ut = o(18994),
          ft = o(68538);
        function x(T) {
          const K = (0, ee.Qn)(),
            oe = (0, ut.a4)(ut.Wn),
            F =
              String((0, m.j$)(T.args, "autoadvance")).toLowerCase() === "true";
          return (0, t.jsx)(ft.F, {
            hideArrows: !oe,
            hidePips: K,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: oe,
            bAutoAdvance: F,
            className: ie().ScreenshotCarousel,
            children: T.children,
          });
        }
        var C = o(65088),
          re = o.n(C),
          ue = o(1123);
        function pe(T) {
          const { strURL: K, children: oe } = T;
          return (
            typeof K == "string"
              ? !(0, _.ZF)(K)
              : K.some((fe) => !(0, _.ZF)(fe))
          )
            ? (0, t.jsx)(ve, { children: oe })
            : (0, t.jsx)(t.Fragment, { children: oe });
        }
        function ve(T) {
          const { children: K } = T;
          return (0, ue.Ey)()
            ? (0, t.jsx)(t.Fragment, { children: K })
            : (0, t.jsx)("div", {
                className: re().ImageBlocked,
                children: (0, w.oW)(
                  "#Image_Externally_Hosted_Hidden",
                  (0, t.jsx)("a", {
                    href: Ne.TS.STORE_BASE_URL + "account/cookiepreferences",
                  }),
                ),
              });
        }
        var ge = o(33645),
          de = o.n(ge);
        let he = null;
        function be() {
          return (
            he == null &&
              (he = new Map([
                ["url", { Constructor: N, autocloses: !1 }],
                ["dynamiclink", { Constructor: P, autocloses: !1 }],
                [
                  "h1",
                  {
                    Constructor: m.Tu(m.Zb, S.Header1),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h2",
                  {
                    Constructor: m.Tu(m.Sz, S.Header2),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h3",
                  {
                    Constructor: m.Tu(m.ZS, S.Header3),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "quote",
                  { Constructor: m.Tu(m.Pk, S.BlockQuote), autocloses: !1 },
                ],
                [
                  "list",
                  {
                    Constructor: m.B8,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "olist",
                  {
                    Constructor: m._J,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "*",
                  {
                    Constructor: m.ck,
                    autocloses: !0,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "p",
                  {
                    Constructor: m.It,
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                ["img", { Constructor: Oe, autocloses: !1 }],
                ["previewyoutube", { Constructor: d.gH, autocloses: !1 }],
                ["looping_media", { Constructor: Z.$A, autocloses: !1 }],
                ["video", { Constructor: Z.UT, autocloses: !1 }],
                ["youtubeorvideo", { Constructor: d.Eo, autocloses: !1 }],
                ["trailer", { Constructor: Ee, autocloses: !1 }],
                [
                  "speaker",
                  {
                    Constructor: _e,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["docimg", { Constructor: we, autocloses: !1 }],
                ["carousel", { Constructor: x, autocloses: !1 }],
              ])),
            he
          );
        }
        function Oe(T) {
          const { showErrorInfo: K, event: oe } = T.context;
          let F = (0, m.j$)(T.args, "src") || T.children?.toString();
          F || (F = (0, m.j$)(T.args));
          const fe = (0, m.j$)(T.args, "style") === "inline",
            Le = (0, R.z5)(F, T.language, oe?.rtime32_last_modified);
          if (Le == null) return null;
          if (typeof Le == "string") {
            F = Le;
            let je;
            return (
              (je = !(0, _.ZF)(F)),
              oe?.BHasTag("auto_rssfeed") && (je = !1),
              K
                ? (0, t.jsx)(X.i, {
                    className: (0, E.A)({ [de().Image_Inline]: fe }),
                    src: F,
                    crossOrigin: je ? "anonymous" : void 0,
                  })
                : ((F = (0, _.L$)(F)),
                  (0, t.jsx)(pe, {
                    strURL: F,
                    children: (0, t.jsx)(Ue.o, {
                      className: (0, E.A)({ [de().Image_Inline]: fe }),
                      src: F,
                      crossOrigin: je ? "anonymous" : void 0,
                    }),
                  }))
            );
          } else
            return (0, t.jsx)(pe, {
              strURL: Le,
              children: (0, t.jsx)(me.c, { rgSources: Le }),
            });
        }
        function we(T) {
          const K = (0, m.j$)(T.args);
          if (K == null || K == null || K.length == 0) return "";
          const oe = T.children?.toString(),
            F = new Array();
          return (
            F.push(
              `${Ne.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${Ne.TS.LANGUAGE}/${K}`,
            ),
            Ne.TS.LANGUAGE != "english" &&
              F.push(
                `${Ne.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${K}`,
              ),
            (0, t.jsx)(me.c, { rgSources: F, alt: oe })
          );
        }
        function Ee(T) {
          const K = De(T.args, "appid", T.context.event?.appid ?? 0),
            oe = De(T.args, "trailerid", 0);
          let F =
            (0, m.j$)(T.args, "style")?.toLocaleLowerCase() ??
            Y.rg.k_TrailerAsFull;
          F = Object.values(Y.rg).includes(F) ? F : Y.rg.k_TrailerAsFull;
          const fe = (0, H.O)(T.args.color, "black"),
            Le = (0, H.O)(T.args.bgcolor, "white"),
            je = (0, Z.g4)(T.args);
          return (0, t.jsx)(Y.P6, {
            appid: K,
            trailerBaseID: oe,
            bIsPreviewMode: T.context.showErrorInfo,
            embedStyle: F,
            color: fe,
            bgcolor: Le,
            children: T.children,
            subtitles: je.rgVideoTracks,
          });
        }
        function _e(T) {
          const K = (0, m.j$)(T.args, "name"),
            oe = (0, m.j$)(T.args, "title"),
            F = (0, m.j$)(T.args, "company"),
            fe = (0, m.j$)(T.args, "photo");
          return T.context.bShowShortSpeakerInfo
            ? (0, t.jsx)(Q.S8, {
                name: K,
                title: oe,
                company: F,
                photo: fe,
                bio: T.children,
              })
            : (0, t.jsx)(Q.$k, {
                name: K,
                title: oe,
                company: F,
                photo: fe,
                bio: T.children,
              });
        }
        function De(T, K, oe) {
          const F = (0, m.j$)(T, K);
          return F === void 0 || F == null ? oe : Number.parseInt(F);
        }
      },
      31151: (U, ce, o) => {
        "use strict";
        o.d(ce, { d3: () => ae, Zn: () => I });
        var t = o(7850),
          R = o(33770),
          Z = o(7487),
          m = o(72609),
          d = o(90626),
          r = o(70187),
          M = o(96197),
          q = o(53113),
          S = o(95535),
          ie = o(39414);
        class k extends Z.K0 {
          m_LinkFilter = ie.O;
          m_parentNode = void 0;
          m_mapHostToComponent;
          m_globalStoreLink;
          constructor(y, A, N, P) {
            super(y),
              (this.m_parentNode = A),
              (this.m_mapHostToComponent = N),
              (this.m_globalStoreLink = P);
          }
          AppendText(y, A = !1) {
            let N = y;
            if (
              (A || this.m_parentNode?.tag == "*") &&
              (this.m_parentNode == null || this.m_parentNode.tag != "img")
            ) {
              let P = this.m_LinkFilter.exec(N);
              for (; P; ) {
                if (P.index > 0) {
                  let X = P.input.substring(0, P.index);
                  super.AppendText(X, A);
                }
                let Y = P[0],
                  Q = !1;
                if (this.m_mapHostToComponent) {
                  for (let X = 0; X < this.m_mapHostToComponent.length; ++X)
                    if (this.m_mapHostToComponent[X].urlRegExp.exec(Y)) {
                      (Q = !0),
                        super.AppendNode(
                          this.m_mapHostToComponent[X].fnBBComponent(
                            Y,
                            this.m_globalStoreLink,
                          ),
                        );
                      break;
                    }
                }
                Q || super.AppendNode((0, S.Pm)(Y)),
                  (N = P.input.substring(P.index + Y.length)),
                  (P = this.m_LinkFilter.exec(N));
              }
            }
            N.length > 0 && super.AppendText(N, A);
          }
        }
        const E = "[\u02D0:]([a-zA-Z0-9_]+)[\u02D0:]";
        class w extends Z.K0 {
          m_EmoteRegex = new RegExp(E);
          AppendText(y, A = !1) {
            let N = y;
            if (y.length >= 3) {
              let P = this.m_EmoteRegex.exec(N);
              for (; P; ) {
                if (P.index > 0) {
                  let Q = P.input.substring(0, P.index);
                  super.AppendText(Q, A);
                }
                let Y = P[1];
                super.AppendNode(d.createElement(M.n, { emoticon: Y }, [])),
                  (N = P.input.substring(P.index + Y.length + 2)),
                  (P = this.m_EmoteRegex.exec(N));
              }
            }
            N.length > 0 && super.AppendText(N, A);
          }
        }
        class _ extends Z.K0 {
          m_parentNode = void 0;
          constructor(y, A) {
            super(y), (this.m_parentNode = A);
          }
          AppendText(y, A = !1) {
            let N = y;
            this.m_parentNode &&
              this.m_parentNode.tag == "img" &&
              (N = (0, q.L$)(N)),
              super.AppendText(N, A);
          }
        }
        var ee = o(67418),
          f = o(26040);
        let se = null;
        function D() {
          return (
            se == null &&
              (se = new Map([
                ...Array.from(r.W4.entries()),
                ...Array.from((0, ee.k)().entries()),
              ])),
            se
          );
        }
        const H = d.createContext(null);
        function V() {
          return d.useContext(H) ?? D();
        }
        function ae(O) {
          const y = V(),
            A = d.useMemo(
              () =>
                new Map([
                  ...Array.from(y.entries()),
                  ...Array.from(O.dictionary.entries()),
                ]),
              [y, O.dictionary],
            );
          return (0, t.jsx)(H.Provider, { value: A, children: O.children });
        }
        function I(O) {
          const {
              text: y,
              partnerEventStore: A,
              languageOverride: N,
              event: P,
              showErrorInfo: Y,
              bShowShortSpeakerInfo: Q,
            } = O,
            X = (0, f.IK)(),
            me = d.useCallback(
              (ut) =>
                new _(
                  new w(
                    new k(new Z.OJ(new Z.R8()), ut, X, {
                      partnerEventStore: A,
                      event: P,
                    }),
                  ),
                  ut,
                ),
              [A, P, X],
            ),
            Ne = V();
          return d
            .useMemo(() => new R.B(Ne, me, N || m.TS.LANGUAGE), [Ne, me, N])
            .ParseBBCode(y, {
              showErrorInfo: Y,
              event: P,
              bShowShortSpeakerInfo: Q,
            });
        }
        function j(O) {
          const {
              strTag: y,
              args: A,
              rawargs: N,
              language: P = PchLanguageToELanguage(Config.LANGUAGE),
              children: Y,
              ...Q
            } = O,
            X = V().get(y);
          return X
            ? jsx(X.Constructor, {
                context: Q,
                tagname: y,
                args: A,
                language: P,
                children: Y,
                rawargs: N,
              })
            : jsxs(Fragment, { children: [`[${y}]`, Y, `[/${y}]`] });
        }
      },
      87847: (U, ce, o) => {
        "use strict";
        o.d(ce, {
          Bs: () => ee,
          VP: () => k,
          aY: () => w,
          j7: () => f,
          rx: () => D,
          wV: () => ie,
          y: () => E,
        });
        var t = o(7850),
          R = o(99412),
          Z = o(47797),
          m = o(95535),
          d = o(76559),
          r = o(813),
          M = o(60480),
          q = o(13600),
          S = o(98541);
        const ie =
            /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
          k =
            /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i;
        function E(H) {
          if (!H || (H.GetEventType() != R.ajI && H.GetEventType() != R.HRy))
            return !1;
          const V = r.ac.GetClanInfoByClanAccountID(
            H.clanSteamID.GetAccountID(),
          );
          return !(
            !M.pF.GetCreatorHome(H.clanSteamID) ||
            !V ||
            !(0, Z.Ns)(H, V)
          );
        }
        function w(H, V) {
          const I = M.pF.GetCreatorHome(H.clanSteamID)?.GetAppIDList() ?? [];
          return (
            V.length > 0 && V.filter((j) => I.includes(j)).length === V.length
          );
        }
        function _(H, V, ae) {
          if ((0, q.j7)(V)) {
            let I = new RegExp(H).exec(V);
            if (I && I.length > 2) {
              let j, O, y, A;
              I[1] == "gid"
                ? (O = new d.b(I[2]))
                : I[1] == "group"
                  ? (O = d.b.InitFromClanID(Number.parseInt(I[2])))
                  : I[1] == "groups"
                    ? (A = I[2])
                    : isNaN(+I[2])
                      ? (y = I[2])
                      : ((j = Number(I[2])),
                        (j = !ae || (E(ae.event) && w(ae.event, [j])) ? j : 0));
              const N = I[3];
              if (
                ((j !== void 0 && j > 0) ||
                  y !== void 0 ||
                  A !== void 0 ||
                  O !== void 0) &&
                N != null &&
                N.length > 0
              )
                return (0, t.jsx)(S.q, {
                  appid: j,
                  clanSteamID: O,
                  strVanity: y,
                  strGroupVanity: A,
                  eventGID: N,
                  strURL: V,
                });
            }
          }
          return (0, m.Pm)(V, ae?.event);
        }
        function ee(H, V) {
          return _(k, H, V);
        }
        function f(H, V) {
          return _(ie, H, V);
        }
        let se = null;
        function D() {
          return (
            se == null &&
              (se = [
                { urlRegExp: new RegExp(ie), fnBBComponent: f },
                { urlRegExp: new RegExp(k), fnBBComponent: ee },
              ]),
            se
          );
        }
      },
      98541: (U, ce, o) => {
        "use strict";
        o.d(ce, { q: () => j });
        var t = o(7850),
          R = o(41735),
          Z = o.n(R),
          m = o(75844),
          d = o(90626),
          r = o(99412),
          M = o(9046),
          q = o(813),
          S = o(79118),
          ie = o(10142),
          k = o(72080),
          E = o(85599),
          w = o(34592),
          _ = o(18210),
          ee = o(3166),
          f = o(13465),
          se = o(95535),
          D = o(56492),
          H = o(88812),
          V = Object.defineProperty,
          ae = Object.getOwnPropertyDescriptor,
          I = (y, A, N, P) => {
            for (
              var Y = P > 1 ? void 0 : P ? ae(A, N) : A, Q = y.length - 1, X;
              Q >= 0;
              Q--
            )
              (X = y[Q]) && (Y = (P ? X(A, N, Y) : X(Y)) || Y);
            return P && Y && V(A, N, Y), Y;
          };
        let j = class extends d.Component {
          state = {
            bLoading: this.props.announcementGID
              ? !S.O3.BHasClanAnnouncementGID(this.props.announcementGID)
              : !S.O3.BHasClanAnnouncementGID(this.props.eventGID ?? ""),
            bFailedLoad: !1,
          };
          m_cancelSignal = Z().CancelToken.source();
          componentDidMount() {
            this.HandleLoadEventInfo();
          }
          async HandleLoadEventInfo() {
            const {
              appid: y,
              strVanity: A,
              announcementGID: N,
              eventGID: P,
              strGroupVanity: Y,
            } = this.props;
            let Q = this.props.clanSteamID;
            try {
              if (this.state.bLoading) {
                if (A !== void 0) {
                  const Ne = await q.ac.LoadOGGClanInfoForIdentifier(A);
                  if (!Ne) {
                    this.setState({ bFailedLoad: !0 });
                    return;
                  }
                  Q = Ne.clanSteamID;
                } else if (Y !== void 0) {
                  const Ne = await q.ac.LoadOGGClanInfoForGroupVanity(Y);
                  if (!Ne) {
                    this.setState({ bFailedLoad: !0 });
                    return;
                  }
                  Q = Ne.clanSteamID;
                }
                const me = await S.O3.LoadPartnerEventGeneric(Q, y, P, N, 0);
                if (!me) {
                  this.setState({ bFailedLoad: !0 });
                  return;
                }
                await ie.A.Get().QueueAppRequest(me.appid, {
                  include_assets: !0,
                  include_basic_info: !0,
                  include_release: !0,
                }),
                  this.setState({ bFailedLoad: !1, bLoading: !1 });
              }
            } catch (X) {
              this.HandleError(X);
            }
          }
          HandleError(y) {
            let A = (0, w.H)(y);
            const {
              eventGID: N,
              announcementGID: P,
              strGroupVanity: Y,
              strVanity: Q,
            } = this.props;
            console.error(
              "EventSnippet hit error on announceGID " +
                P +
                " eventGID " +
                N +
                " strVanity " +
                Q +
                " strGroupVanity " +
                Y +
                " error: " +
                A.strErrorMsg,
            ),
              this.setState({ bFailedLoad: !0 });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("component unmounted");
          }
          render() {
            const {
              appid: y,
              announcementGID: A,
              eventGID: N,
              strURL: P,
              fnFilterImageURLsForKnownFailures: Y,
              fnImageFailureCallback: Q,
            } = this.props;
            if (this.state.bFailedLoad) return (0, se.Pm)(P);
            if (this.state.bLoading) return (0, t.jsx)(E.t, {});
            let X =
              A !== void 0
                ? S.O3.GetClanEventFromAnnouncementGID(A)
                : S.O3.GetClanEventModel(N ?? "");
            if (X == null) return (0, se.Pm)(P);
            const me = (0, r.sfN)(ee.TS.LANGUAGE);
            let Ne = X.GetNameWithFallback(me),
              Ue = X.GetSubTitleWithSummaryFallback(me),
              ut = ie.A.Get()
                .GetApp(y ?? 0)
                ?.GetName(),
              ft = (0, _.TW)(X.GetStartTimeAndDateUnixSeconds());
            return (0, t.jsxs)(D.tj, {
              eventModel: X,
              route: D.PH.k_eView,
              className: k.gg.Box,
              "data-modal-content-sizetofit": !0,
              "data-appid": y,
              children: [
                (0, t.jsx)(O, { ...this.props, event: X }),
                (0, t.jsxs)(k.J7, {
                  children: [
                    (0, t.jsxs)(k.zN, {
                      children: [
                        (0, _.we)(
                          X.type == r.uYK
                            ? "#EventDisplay_Share_Announcement"
                            : "#EventDisplay_Share_Event",
                          ut ?? "",
                        ),
                        (0, t.jsx)(k.MG, { children: ft }),
                      ],
                    }),
                    (0, t.jsx)(k.bv, {
                      children: (0, t.jsx)("div", {
                        className: k.gg.Type,
                        children: Ne,
                      }),
                    }),
                    (0, t.jsx)(k.AT, { children: Ue }),
                  ],
                }),
              ],
            });
          }
        };
        j = I([m.PA], j);
        function O(y) {
          const {
            event: A,
            fnFilterImageURLsForKnownFailures: N,
            fnImageFailureCallback: P,
          } = y;
          let Y = (0, r.sfN)(ee.TS.LANGUAGE),
            Q = (0, H.WC)(A, "capsule", Y, M.wI.capsule_main) ?? [];
          return (
            Q && N && (Q = N(Q)),
            (0, t.jsx)(f.c, {
              className: k.gg.Preview,
              rgSources: Q ?? [],
              onIncrementalError: (X, me, Ne) => P && P(me),
            })
          );
        }
      },
      26040: (U, ce, o) => {
        "use strict";
        o.d(ce, { IK: () => d, Rh: () => m, em: () => r });
        var t = o(7850),
          R = o(90626);
        const Z = R.createContext(void 0);
        function m(M) {
          return (0, t.jsx)(Z.Provider, {
            value: M.linkWidgets,
            children: M.children,
          });
        }
        function d() {
          return R.useContext(Z);
        }
        function r(M) {
          const q = d();
          return R.useMemo(() => q?.find((S) => !!S.urlRegExp.exec(M)), [M, q]);
        }
      },
      13600: (U, ce, o) => {
        "use strict";
        o.d(ce, { V6: () => _, VF: () => M, j7: () => w });
        var t = o(7850),
          R = o(72609),
          Z = o(95535),
          m = o(10349),
          d = o(77356),
          r = o(53113);
        const M =
            /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
          q = ["store.steampowered.com", "store.steamchina.com"],
          S = ["steampowered.com", "steamcommunity.com"],
          ie = ["steamchina.com"],
          k = ["steam.dev", "valve.org"];
        function E(V, ae) {
          return ae.some((I) => V == I || V.endsWith(`.${I}`));
        }
        function w(V) {
          const ae = (0, r.wm)(V).toLocaleLowerCase(),
            I = (0, r.wm)(R.TS.STORE_BASE_URL).toLocaleLowerCase(),
            j = (0, r.wm)(R.TS.COMMUNITY_BASE_URL).toLocaleLowerCase();
          return ae == I || ae == j
            ? !0
            : q.includes(I)
              ? E(ae, E(I, ie) ? ie : S)
              : E(ae, [...S, ...ie, ...k]);
        }
        function _(V) {
          if (w(V)) return ee(V);
        }
        function ee(V) {
          const ae = new RegExp(M).exec(V);
          if (!ae || ae.length <= 2) return;
          const I = ae[1].toLowerCase(),
            j = Number(ae[2]);
          if (!(!(j > 0) || !(0, m.nB)(I)))
            return {
              id: j,
              strItemType: I,
              storeItemKey:
                I == "sub"
                  ? { packageid: j }
                  : I == "bundle"
                    ? { bundleid: j }
                    : { appid: j },
            };
        }
        function f(V) {
          const ae = [],
            I = new Set();
          for (const j of V.matchAll(new RegExp(M, "gi"))) {
            const O = ee(j[0]);
            O &&
              !I.has(`${O.strItemType}/${O.id}`) &&
              (I.add(`${O.strItemType}/${O.id}`), ae.push(O));
          }
          return ae;
        }
        function se(V, ae) {
          const I = _(V);
          return I
            ? jsx(StoreCapsuleForEventDescription, {
                id: I.id,
                inputType: I.strItemType,
                bApplyUserContentPref: !0,
              })
            : LinkFilter(V, ae?.event);
        }
        let D = null;
        function H() {
          return (
            D == null &&
              (D = [{ urlRegExp: new RegExp(M), fnBBComponent: se }]),
            D
          );
        }
      },
      77356: (U, ce, o) => {
        "use strict";
        o.d(ce, { e: () => k });
        var t = o(7850),
          R = o(56062),
          Z = o(72609),
          m = o(40358),
          d = o(88743),
          r = o(36707),
          M = o(18210),
          q = o(64502),
          S = o.n(q),
          ie = o(40232);
        function k(E) {
          const { inputType: w, id: _, bApplyUserContentPref: ee } = E,
            f = w == "bundle" ? "bundle" : w == "sub" ? "sub" : "game",
            se = (0, d.zl)(_, f),
            { data: D } = (0, m.J$)(se),
            { data: H, isPending: V } = (0, m.Ij)(ee ? se : void 0);
          if (!D) return null;
          if (ee) {
            if (V) return null;
            if (H?.filter_failure == R.hQ.Zy || H?.filter_failure == R.hQ.ir) {
              let ae = "#StoreCapsule_App_Excluded";
              switch (w) {
                case "sub":
                  ae = "#StoreCapsule_Package_Excluded";
                  break;
                case "bundle":
                  ae = "#StoreCapsule_Bundle_Excluded";
                  break;
              }
              return (0, t.jsx)("div", {
                className: (0, r.A)(
                  q.AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, M.oW)(
                  ae,
                  (0, t.jsx)("a", {
                    href: Z.TS.STORE_BASE_URL + "account/preferences/",
                  }),
                ),
              });
            }
          }
          return (0, t.jsx)("div", {
            className: (0, r.A)(q.AppSummaryWidgetCtn, "AppSummaryWidgetCtn"),
            children: (0, t.jsx)(ie.p, {
              id: _,
              type: f,
              bShowDemoButton: D.type == R.uE.ue,
              bAllowTwoLinesForHeader: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
      },
      65316: (U, ce, o) => {
        "use strict";
        o.d(ce, { P6: () => V, Pc: () => ae, rg: () => D });
        var t = o(7850),
          R = o(25046),
          Z = o(29522),
          m = o(40358),
          d = o(64271),
          r = o(90626),
          M = o(67523),
          q = o.n(M),
          S = o(36118),
          ie = o(36707),
          k = o(18210),
          E = o(85599),
          w = o(77078),
          _ = o.n(w),
          ee = o(10452),
          f = o(91970),
          se = o.n(f),
          D = ((j) => (
            (j.k_TrailerAsButton = "button"),
            (j.k_TrailerAsPill = "pill"),
            (j.k_TrailerAsFull = "full"),
            (j.k_TrailerAsPoster = "poster"),
            (j.k_TrailerAsMicro = "micro"),
            j
          ))(D || {});
        const H = { include_trailers: !0, include_assets: !0 };
        function V(j) {
          const {
              embedStyle: O,
              appid: y,
              color: A,
              bgcolor: N,
              children: P,
              trailerBaseID: Y,
              subtitles: Q,
            } = j,
            [X, me] = (0, r.useState)(!1),
            Ne = (0, r.useMemo)(() => ({ appid: y }), [y]);
          switch (O) {
            case "button":
            case "pill":
              return (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className: (0, ie.A)({
                      [_().Pill]: O == "pill",
                      [_().Button]: O == "button",
                    }),
                    onClick: () => me(!0),
                    style: { color: A, backgroundColor: N },
                    children: [
                      (0, t.jsx)(S.jGG, {}),
                      P || (0, k.we)("#EventEmail_WatchNow"),
                    ],
                  }),
                  (0, t.jsx)(ee.PE, {
                    id: Ne,
                    bShowModal: X,
                    trailerBaseID: Y,
                    hideModal: () => me(!1),
                  }),
                ],
              });
            default:
            case "full":
              return (0, t.jsx)(ae, { ...j });
          }
        }
        function ae(j) {
          const { appid: O, trailerBaseID: y } = j,
            A = (0, Z.$5)(O),
            { data: N } = (0, m.J$)(A),
            [P, Y] = (0, r.useState)(() =>
              !O || !y ? (0, k.we)("#TrailerPlayer_ID_NotProvided") : null,
            ),
            Q = (0, R.kB)(A),
            X = (0, r.useMemo)(
              () => (Q ? Q.find((me) => me.trailer_base_id === y) : null),
              [Q, y],
            );
          return (
            (0, r.useEffect)(() => {
              N?.unvailable_for_country_restriction &&
                Y((0, k.we)("#TrailerPlayer_CouldNotLoad", O, y)),
                Q &&
                  !X &&
                  Y(
                    (0, k.we)(
                      "#TrailerPlayer_CouldNotLoad",
                      j.appid,
                      j.trailerBaseID,
                    ),
                  );
            }, [
              O,
              j.appid,
              j.trailerBaseID,
              N?.unvailable_for_country_restriction,
              y,
              X,
              Q,
            ]),
            P
              ? j.bIsPreviewMode
                ? (0, t.jsx)("div", { className: q().ErrorDiv, children: P })
                : null
              : X
                ? (0, t.jsx)(I, { trailerToPlay: X })
                : (0, t.jsx)(E.t, {
                    string: (0, k.we)("#Loading"),
                    size: "small",
                  })
          );
        }
        function I(j) {
          const { trailerToPlay: O } = j,
            {
              rgDashTrailers: y,
              rgHlsTrailers: A,
              strCaptionManufest: N,
            } = (0, r.useMemo)(() => {
              const { rgDashTrailers: P, rgHlsTrailers: Y } = (0, R.hg)(O),
                Q = (0, R.Wv)(O);
              return {
                rgDashTrailers: P,
                rgHlsTrailers: Y,
                strCaptionManufest: Q,
              };
            }, [O]);
          return y?.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: se().VideoPopupContainers,
                children: (0, t.jsx)(d.P, {
                  dashManifests: y || [],
                  hlsManifest: (A.length > 0 && A?.[0]) || "",
                  screenshot: (0, R.hl)(O),
                  altText: O.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: N,
                }),
              });
        }
      },
      59490: (U, ce, o) => {
        "use strict";
        o.d(ce, { p: () => q });
        var t = o(7850),
          R = o(90626),
          Z = o(76559),
          m = o(54407),
          d = o(15736),
          r = o.n(d),
          M = o(3166);
        function q(S) {
          const {
              accountID: ie,
              bHideWhenNotAvailable: k,
              bHideName: E,
              bLink: w = !0,
            } = S,
            [_] = (0, m.KT)(ie),
            ee = (0, m.KM)(ie),
            f = R.useMemo(() => Z.b.InitFromAccountID(ie), [ie]),
            se = `${M.TS.COMMUNITY_BASE_URL}profiles/${f.ConvertTo64BitString()}`,
            D = w ? "a" : "span";
          return (0, t.jsx)(t.Fragment, {
            children: _
              ? (0, t.jsxs)(D, {
                  href: w ? se : void 0,
                  children: [
                    (0, t.jsx)("img", {
                      className: d.SmallAvatar,
                      src: _.avatar_url,
                      "data-miniprofile": "s" + f.ConvertTo64BitString(),
                    }),
                    !E &&
                      (0, t.jsx)("span", {
                        children: ee
                          ? `${ee} (${_.persona_name})`
                          : _.persona_name,
                      }),
                  ],
                })
              : (0, t.jsx)(t.Fragment, {
                  children: !k && (0, t.jsx)("span", { children: ie }),
                }),
          });
        }
      },
      13465: (U, ce, o) => {
        "use strict";
        o.d(ce, { c: () => Z });
        var t = o(7850),
          R = o(90626);
        function Z(m) {
          const {
              rgSources: d,
              onIncrementalError: r,
              onError: M,
              strAltText: q,
              ref: S,
              ...ie
            } = m,
            k = R.useRef(null),
            [E, w] = R.useState(0),
            [_, ee] = R.useState(0);
          R.useImperativeHandle(
            S,
            () => ({ imgRef: k, nSourceIndex: E, nSourceLength: d.length }),
            [k, E, d],
          );
          const f = R.useMemo(() => JSON.stringify(d), [d]);
          R.useEffect(() => {
            w(0), ee((H) => H + 1);
          }, [f]);
          const se = R.useMemo(() => {
              let H = "";
              return (
                d && d.length > E && (H = d[E]),
                H ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    m,
                    E,
                  ),
                  (H =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                H
              );
            }, [d, E, m]),
            D = R.useCallback(
              (H) => {
                r?.(H, d[E], E);
                const V = E + 1;
                V >= d.length && M && M(H), V < d.length && w(V);
              },
              [E, M, r, d],
            );
          return (0, t.jsx)(
            "img",
            { ref: k, ...ie, src: se, onError: D, alt: q },
            _,
          );
        }
      },
      95892: (U, ce, o) => {
        "use strict";
        o.d(ce, { J: () => ie });
        var t = o(7850),
          R = o(19298),
          Z = o(90626),
          m = o(82734),
          d = o(30096),
          r = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          q = (k, E, w, _) => {
            for (
              var ee = _ > 1 ? void 0 : _ ? M(E, w) : E, f = k.length - 1, se;
              f >= 0;
              f--
            )
              (se = k[f]) && (ee = (_ ? se(E, w, ee) : se(ee)) || ee);
            return _ && ee && r(E, w, ee), ee;
          };
        const S = class Hr extends Z.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = Z.createRef();
          m_elTracked = null;
          m_bPreviouslyIntersecting = !1;
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
          componentDidUpdate(E) {
            this.UpdateObserver(E);
          }
          UpdateObserver(E) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              E &&
              (E.rootMargin != this.m_observer.rootMargin ||
                E.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let w = this.m_refElement.current;
            if (
              (this.m_observer &&
                w != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && w)
            ) {
              let ee = { root: this.FindScrollableAncestor(w) };
              this.props.rootMargin && (ee.rootMargin = this.props.rootMargin),
                this.props.thresholds && (ee.threshold = this.props.thresholds),
                (this.m_observer = (0, d.md)(w, this.OnIntersection, ee));
            }
            this.m_observer &&
              w &&
              w != this.m_elTracked &&
              (this.m_observer.observe(w), (this.m_elTracked = w));
          }
          FindScrollableAncestor(E) {
            return m.Kf(E, (w) => {
              const _ = this.props.horizontal
                ? window.getComputedStyle(w).overflowX
                : window.getComputedStyle(w).overflowY;
              return !!(
                _ == "scroll" ||
                _ == "auto" ||
                w.classList.contains(Hr.GetScrollableClassname())
              );
            });
          }
          HandleRef(E) {
            (0, d.cZ)(this.m_refElement, E),
              this.props.containerRef && (0, d.cZ)(this.props.containerRef, E);
          }
          OnIntersection(E, w) {
            let _ = !1;
            for (const ee of E)
              if (ee.isIntersecting) {
                _ = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != _ &&
              ((this.m_bPreviouslyIntersecting = _),
              this.props.onVisibilityChange && this.props.onVisibilityChange(_),
              _ && this.BTriggerOnce() && this.DestroyObserver());
          }
          render() {
            let {
              onVisibilityChange: E,
              rootMargin: w,
              trigger: _,
              horizontal: ee,
              containerRef: f,
              ...se
            } = this.props;
            return (0, t.jsx)(R.Z, {
              ref: this.HandleRef,
              ...se,
              children: this.props.children,
            });
          }
        };
        q([d.oI], S.prototype, "HandleRef", 1),
          q([d.oI], S.prototype, "OnIntersection", 1);
        let ie = S;
      },
      9519: (U, ce, o) => {
        "use strict";
        o.d(ce, { q: () => m });
        var t = o(90626),
          R = o(30096);
        const Z = 2e4;
        function m(d) {
          const r = (0, t.useRef)(!1),
            M = (0, t.useRef)(null),
            q = (0, t.useCallback)(() => {
              M.current = setTimeout(() => {
                d.current &&
                  !d.current.paused &&
                  (d.current.pause(), (r.current = !0));
              }, Z);
            }, [d]),
            S = (0, t.useCallback)(() => {
              M.current && (clearTimeout(M.current), (M.current = null)),
                d.current && r.current && (d.current.play(), (r.current = !1));
            }, [d]);
          (0, R.l6)(window, "blur", q), (0, R.l6)(window, "focus", S);
        }
      },
      53176: (U, ce, o) => {
        "use strict";
        o.r(ce), o.d(ce, { YearInReviewRoutes: () => Ur, default: () => ps });
        var t = o(7850),
          R = o(72609),
          Z = o(58732),
          m = o(90626),
          d = o(3166),
          r = o(35038),
          M = o(92854),
          q = o(80902);
        const S = {
            19: [19, 1663, 1774, 3814, 1646, 4158],
            3859: [3859, 1685, 3843, 1775, 5711, 3878, 745697],
            4182: [4182, 4166, 3871, 4026],
            113: [113],
            21: [21, 1698],
            492: [492],
            1695: [1695, 1100689],
            1663: [19, 1663, 1774, 3839],
            9: [9, 1676, 1741, 4328, 4364, 1670, 3813],
            1685: [3859, 1685, 3843, 3841, 4508],
            122: [122, 4231, 4434, 10695, 4474],
            1662: [1662, 1100689],
            1774: [19, 1663, 1774, 5547],
            599: [599, 12472, 4695],
            3839: [1663, 3839],
            1667: [1667, 1721, 3978],
            12095: [12095, 6650, 5611, 9130, 24904],
            4166: [4182, 4166, 5900, 4342],
            6650: [12095, 6650, 5611, 9130, 24904],
            597: [597],
            1742: [1742, 6426, 5608, 5094, 7702],
            1756: [1756],
            4085: [4085],
            3871: [4182, 3871, 3798, 5379],
            3810: [3810, 1643],
            3843: [3859, 1685, 3843],
            1721: [1667, 1721],
            4136: [4136, 1719],
            4026: [4182, 4026, 3877],
            3964: [3964],
            1664: [1664],
            5611: [12095, 6650, 5611, 9130, 24904],
            7208: [7208, 31579],
            1697: [1697],
            3942: [3942, 1755, 1673],
            128: [128, 1754],
            1659: [1659],
            1708: [1708],
            1775: [3859, 1775],
            3834: [3834],
            493: [493],
            4345: [4345, 4667, 5228],
            1684: [1684, 4057],
            1719: [4136, 1719],
            5711: [3859, 5711],
            1702: [1702, 1100689],
            1643: [3810, 1643],
            4175: [4175],
            9551: [9551, 4947],
            4726: [4726],
            1678: [1678, 4168],
            3799: [3799, 31579],
            9130: [12095, 6650, 5611, 9130, 24904],
            3978: [1667, 3978],
            1625: [1625, 3877],
            4231: [122, 4231],
            4168: [1678, 4168],
            1687: [1687, 4376],
            4667: [4345, 4667],
            3878: [3859, 3878],
            3835: [3835],
            5350: [5350],
            10397: [10397],
            1693: [1693],
            1755: [3942, 1755, 16598, 4291],
            21978: [21978],
            699: [699],
            4150: [4150],
            3814: [19, 3814],
            1669: [1669],
            3987: [3987],
            5900: [4166, 5900],
            6426: [1742, 6426],
            1698: [21, 1698],
            4747: [4747],
            1716: [1716, 3959, 454187, 1091588],
            1646: [19, 1646],
            4342: [4166, 4342],
            24904: [12095, 6650, 5611, 9130, 24904],
            3968: [3968],
            4604: [4604],
            4305: [4305],
            4004: [4004],
            7332: [7332],
            1773: [1773],
            5055: [5055],
            1677: [1677],
            4172: [4172],
            1734: [1734],
            701: [701, 1254546, 1254552, 47827],
            12472: [599, 12472, 4695],
            4711: [4711],
            1654: [1654],
            1676: [9, 1676, 1723],
            4994: [4994, 6910],
            1754: [128, 1754],
            7481: [7481],
            4191: [4191],
            3841: [1685, 3841, 7368],
            6910: [4994, 6910],
            6971: [6971],
            44868: [44868],
            1743: [1743],
            1741: [9, 1741],
            6378: [6378],
            4434: [122, 4434],
            7478: [7478],
            29482: [29482],
            7368: [3841, 7368, 4840, 7178, 7108],
            1644: [1644, 1100687],
            4036: [4036],
            5716: [5716],
            4328: [9, 4328],
            4947: [9551, 4947],
            6730: [6730],
            4115: [4115],
            1628: [1628],
            5752: [5752],
            1720: [1720],
            1718: [1718],
            3959: [1716, 3959],
            4295: [4295],
            4057: [1684, 4057],
            4106: [4106],
            1645: [1645],
            3798: [3871, 3798],
            4202: [4202],
            5411: [5411],
            4791: [4791],
            4234: [4234],
            176981: [176981],
            4885: [4885],
            8945: [8945],
            5577: [5577],
            4364: [9, 4364],
            4236: [4236],
            1673: [3942, 1673],
            5851: [5851],
            4195: [4195],
            4190: [4190],
            4695: [599, 12472, 4695],
            5923: [5923],
            3965: [3965],
            1621: [1621, 1752],
            5228: [4345, 5228],
            5363: [5363],
            4325: [4325],
            3993: [3993],
            1666: [1666, 9271, 32322, 791774, 13070],
            1100689: [1695, 1662, 1702, 1100689],
            4158: [19, 4158],
            4255: [4255],
            5708: [5708],
            6815: [6815],
            4252: [4252],
            5348: [5348],
            1738: [1738],
            5125: [5125],
            5160: [5160],
            1759: [1759],
            5379: [3871, 5379],
            6129: [6129],
            1036: [1036],
            5613: [5613],
            3854: [3854],
            15045: [15045],
            1680: [1680],
            4736: [4736],
            7782: [7782],
            5030: [5030],
            4094: [4094],
            1710: [1710],
            4046: [4046],
            5537: [5537],
            5395: [5395],
            4376: [1687, 4376],
            3916: [3916],
            9541: [9541],
            4486: [4486],
            14139: [14139],
            13276: [13276],
            4562: [4562],
            11333: [11333],
            1777: [1777],
            5179: [5179],
            5984: [5984],
            1688: [1688],
            379975: [379975],
            4840: [7368, 4840],
            6691: [6691],
            1752: [1621, 1752],
            1770: [1770, 17389],
            4155: [4155],
            4637: [4637],
            5608: [1742, 5608],
            7432: [7432],
            7743: [7743],
            4598: [4598],
            5186: [5186],
            7250: [7250],
            9564: [9564],
            8666: [8666],
            4145: [4145],
            16598: [1755, 16598],
            1670: [9, 1670],
            5502: [5502],
            7107: [7107],
            4242: [4242],
            9157: [9157],
            1671: [1671],
            5547: [1774, 5547],
            7948: [7948],
            1732: [1732],
            1638: [1638],
            4608: [4608],
            10695: [122, 10695],
            872: [872],
            4845: [4845],
            4821: [4821],
            4975: [4975],
            19995: [19995],
            4853: [4853],
            5765: [5765],
            13190: [13190],
            10816: [10816],
            11014: [11014],
            1714: [1714],
            9204: [9204],
            4064: [4064],
            16250: [16250],
            1254546: [701, 1254546, 1254552],
            5382: [5382],
            42804: [42804],
            22602: [22602],
            1647: [1647],
            16094: [16094],
            1681: [1681],
            4777: [4777],
            8122: [8122],
            1665: [1665],
            4161: [4161],
            3813: [9, 3813],
            29363: [29363],
            5794: [5794],
            10679: [10679],
            5310: [5310],
            5094: [1742, 5094],
            3934: [3934],
            10808: [10808],
            1736: [1736],
            4754: [4754],
            87: [87],
            4474: [122, 4474],
            1100687: [1644, 1100687],
            84: [84],
            5153: [5153],
            10235: [10235],
            4508: [1685, 4508],
            5300: [5300],
            12286: [12286],
            4559: [4559],
            15564: [15564],
            8013: [8013],
            4684: [4684],
            3955: [3955],
            6052: [6052],
            4400: [4400],
            220585: [220585],
            5154: [5154],
            4700: [4700],
            1616: [1616],
            1751: [1751],
            1254552: [701, 1254546, 1254552],
            4758: [4758],
            31579: [7208, 3799, 31579],
            31275: [31275],
            6625: [6625],
            21725: [21725],
            6276: [6276],
            353880: [353880],
            17894: [17894],
            13782: [13782],
            6915: [6915],
            5796: [5796],
            3952: [3952],
            4018: [4018],
            17305: [17305],
            7423: [7423],
            1651: [1651],
            4878: [4878],
            6041: [6041],
            87918: [87918],
            30358: [30358],
            9271: [1666, 9271],
            15277: [15277],
            14720: [14720],
            1717: [1717],
            3796: [3796],
            5230: [5230],
            32322: [1666, 32322, 791774],
            8369: [8369],
            11123: [11123],
            5372: [5372],
            620519: [620519],
            15954: [15954],
            13906: [13906],
            255534: [255534],
            7622: [7622],
            3877: [4026, 1625, 3877],
            17389: [1770, 17389],
            5673: [5673],
            11104: [11104],
            16689: [16689],
            25085: [25085],
            18594: [18594],
            56690: [56690],
            1733: [1733],
            24003: [24003],
            5981: [5981],
            150626: [150626],
            6310: [6310],
            615955: [615955],
            8093: [8093],
            6869: [6869],
            180368: [180368],
            4520: [4520],
            6948: [6948],
            769306: [769306],
            7178: [7368, 7178, 7108],
            6506: [6506],
            5432: [5432],
            1649: [1649],
            916648: [916648],
            8075: [8075],
            791774: [1666, 32322, 791774],
            15172: [15172],
            7569: [7569],
            348922: [348922, 603297],
            15339: [15339],
            603297: [348922, 603297],
            7926: [7926],
            9592: [9592],
            7113: [7113],
            14153: [14153],
            3920: [3920],
            13577: [13577],
            784: [784],
            5652: [5652],
            1038: [1038],
            7328: [7328],
            198631: [198631],
            1746: [1746],
            745697: [3859, 745697],
            12057: [12057],
            4184: [4184],
            17770: [17770],
            26921: [26921],
            1084988: [1084988],
            92092: [92092],
            7702: [1742, 7702],
            1723: [1676, 1723],
            11634: [11634],
            5390: [5390],
            8253: [8253],
            42089: [42089],
            5407: [5407],
            19780: [19780],
            4835: [4835],
            6702: [6702],
            8461: [8461],
            10383: [10383],
            4137: [4137],
            1027: [1027],
            6621: [6621],
            323922: [323922],
            1674: [1674],
            7108: [7368, 7178, 7108],
            21006: [21006],
            4291: [1755, 4291],
            4102: [4102],
            5941: [5941],
            1091588: [1716, 1091588],
            809: [809],
            1730: [1730],
            9994: [9994],
            14906: [14906],
            12190: [12190],
            51306: [51306],
            17015: [17015],
            1445: [1445],
            7038: [7038, 22955],
            13070: [1666, 13070],
            13382: [13382],
            22955: [7038, 22955],
            198913: [198913],
            9803: [9803],
            454187: [1716, 454187],
            47827: [701, 47827],
            17927: [17927],
            11095: [11095],
          },
          ie = [12095, 5611, 6650, 9130, 1721];
        function k(l, n) {
          const s = l.filter((p) => ie.findIndex((B) => B == p.nTagId) == -1);
          let a = [],
            c = [],
            u = s.length,
            h = 0,
            g = 0;
          for (; h < s.length && u + g > n && g < n; ) {
            const p = s[h].nTagId;
            c.findIndex((B) => B == p) == -1 &&
              (a.push({
                nTagId: p,
                nWeight: s[h].nWeight,
                nPreSelectionWeight: s[h].nPreSelectionWeight,
              }),
              S[p] &&
                S[p].forEach((B) => {
                  c.push(B);
                }),
              g++),
              h++,
              u--;
          }
          for (; h < s.length && g < n; )
            a.push({
              nTagId: s[h].nTagId,
              nWeight: s[h].nWeight,
              nPreSelectionWeight: s[h].nPreSelectionWeight,
            }),
              h++,
              g++;
          return a;
        }
        var E = o(6469),
          w = o(56062);
        function _(l) {
          const n = E.Fm.Get().BIsLoaded() && E.Fm.Get();
          return m.useMemo(() => ee(n, l), [n, l]);
        }
        function ee(l, n) {
          if (!l || !n) return !1;
          if (l.BExcludesContentDescriptor(n.GetContentDescriptorIDs()))
            return !0;
          switch (n.GetStoreItemType()) {
            case w.c6.qI:
              if (l.BIsGameIgnored(n.GetID())) return !0;
              break;
            case w.c6.RD:
              if (l.BIsPackageIgnored(n.GetID())) return !0;
              break;
          }
          return !1;
        }
        var f = o(18210);
        function se() {
          return (0, m.useContext)(Yt).bIsUser;
        }
        function D() {
          return (0, m.useContext)(Yt).themeStyle;
        }
        function H(l) {
          const n = d.iA.logged_in,
            s = l?.GetContentDescriptorIDs().length > 0,
            a = se(),
            c = _(l);
          return n ? !a && c : s;
        }
        function V() {
          return (0, m.useContext)(Yt).persona_name;
        }
        function ae() {
          return (0, m.useContext)(Yt).Screenshots;
        }
        function I() {
          const l = (0, m.useContext)(Yt),
            n = l.bIsUser;
          return m.useCallback(
            (s, ...a) => {
              if (n) {
                const c = `${s}_second`;
                return (0, f.PP)(c, ...a) === c
                  ? (0, f.PP)(s, ...a)
                  : (0, f.PP)(c, ...a);
              } else {
                const c = `${s}_third`;
                return (0, f.PP)(c, l.persona_name, ...a) === c
                  ? (0, f.PP)(s, ...a)
                  : (0, f.PP)(c, l.persona_name, ...a);
              }
            },
            [n, l.persona_name],
          );
        }
        function j(l) {
          return l < 100
            ? (0, f.we)("#YIR_Percent_Low", "1")
            : (0, f.we)("#YIR_Percent", Math.round(l / 100).toFixed(0));
        }
        function O() {
          return !0;
        }
        var y = o(13854);
        function A(l, n, s) {
          const { rgRankings: a, nTotalResultCount: c } = P(l, n),
            u = new Set(a.map((g) => g.appid).slice(0, s));
          return {
            rgResults: l
              .GetRawStats()
              .playtime_stats.games.filter((g) => u.has(g.appid))
              .sort((g, p) => {
                const B = `${n}_rank`;
                return g.playtime_ranks[B] - p.playtime_ranks[B];
              }),
            nTotalResultCount: c,
          };
        }
        function N(l, n, s, a) {
          const { rgRankings: c, nTotalResultCount: u } = P(l, n, s),
            h = c.map((g) => {
              if (g.relative_playtime_percentagex100) {
                let B = 0;
                return (
                  n == "demo" || n == "playtest"
                    ? (B =
                        a > 0
                          ? (g.relative_playtime_percentagex100 * 100 * 100) / a
                          : 0)
                    : (B = g.relative_playtime_percentagex100),
                  {
                    appid: g.appid,
                    parent_appid: g.parent_appid,
                    strPercentage: j(B),
                  }
                );
              }
              const p = l
                .GetRawStats()
                .playtime_stats.games.findIndex((B) => B.appid == g.appid);
              if (p >= 0) {
                const B = Y(n, a, l.GetRawStats().playtime_stats.games[p]);
                return {
                  appid: g.appid,
                  parent_appid: g.parent_appid,
                  strPercentage: j(B),
                };
              }
              return { appid: g.appid };
            });
          return { nTotalResultCount: u, rgResults: h };
        }
        function P(l, n, s) {
          if (n == "demo" || n == "playtest") {
            const u =
              n == "demo" ? l.GetDemoByPlaytime() : l.GetPlaytestByPlaytime();
            return {
              nTotalResultCount: u.length,
              rgRankings: u
                .slice(0, s)
                .map((h) => ({
                  appid: h.appid,
                  parent_appid: h.parent_appid,
                  relative_playtime_percentagex100:
                    h.total_playtime_percentagex100,
                })),
            };
          }
          const a = `${n}_ranking`,
            c = l.GetRawStats().playtime_stats.game_rankings[a]?.rankings;
          return {
            nTotalResultCount: c?.length ?? 0,
            rgRankings: c?.slice(0, s) || [],
          };
        }
        function Y(l, n, s) {
          const a = s.stats.total_playtime_percentagex100,
            c = `${l}_playtime_percentagex100`,
            u = s.relative_game_stats[c];
          return (0, y.OQ)((u * a) / n, 0, 1e4);
        }
        function Q(l, n) {
          const s = `${n === "overall" ? "total" : n}_sessions`;
          return l.stats[s] || 0;
        }
        function X(l, n) {
          switch (n) {
            case "overall":
              return l.playtime_stats.game_summary.filter(
                (s) => !s.demo && !s.playtest,
              );
            case "vr":
              return l.playtime_stats.game_summary.filter(
                (s) => !s.demo && !s.playtest && s.played_vr,
              );
            case "deck":
              return l.playtime_stats.game_summary.filter(
                (s) => !s.demo && !s.playtest && s.played_deck,
              );
            case "controller":
              return l.playtime_stats.game_summary.filter(
                (s) => !s.demo && !s.playtest && s.played_controller,
              );
            case "linux":
              return l.playtime_stats.game_summary.filter(
                (s) => !s.demo && !s.playtest && s.played_linux,
              );
            case "mac":
              return l.playtime_stats.game_summary.filter(
                (s) => !s.demo && !s.playtest && s.played_mac,
              );
            case "windows":
              return l.playtime_stats.game_summary.filter(
                (s) => !s.demo && !s.playtest && s.played_windows,
              );
            case "demo":
              return l.playtime_stats.game_summary.filter((s) => !!s.demo);
            case "playtest":
              return l.playtime_stats.game_summary.filter((s) => !!s.playtest);
          }
        }
        function me(l, n) {
          if (n != "demo" && n != "playtest") {
            const s = `${n === "overall" ? "total" : n}_sessions`,
              a = `${n === "overall" ? "total" : n}_playtime_percentagex100`;
            return {
              nTotalGames: X(l, n).length || 0,
              nTotalSessions: l.playtime_stats.total_stats[s] || 0,
              nTotalPercentage: l.playtime_stats.total_stats[a] || 0,
            };
          } else {
            const s = X(l, n);
            return {
              nTotalGames: s.length,
              nTotalSessions: s
                .map((a) => a.total_sessions)
                .reduce((a, c) => a + c, 0),
              nTotalPercentage: s
                .map((a) => a.total_playtime_percentagex100)
                .reduce((a, c) => a + c, 0),
            };
          }
        }
        const Ne = "percentMonthOfOverall",
          Ue = "percentOtherGamesRelativeMonth";
        function ut(l, n, s, a) {
          const c = new Set(s),
            u = n
              .map((g, p) => {
                const B = new Date((g.rtime_month + 86400) * 1e3),
                  b = {},
                  W = {},
                  G = {},
                  J = {},
                  te = g.stats.total_playtime_percentagex100;
                let le = 0,
                  Me = 0;
                (
                  g.game_summary?.sort(
                    (Se, ht) =>
                      (ht?.total_playtime_percentagex100 ?? 0) -
                      (Se?.total_playtime_percentagex100 ?? 0),
                  )
                )
                  .filter((Se) => a.has(Se.appid))
                  .forEach((Se, ht) => {
                    const { appid: pt } = Se,
                      wt = Se.total_playtime_percentagex100,
                      Et = Se.relative_playtime_percentagex100;
                    ht < 6 && Et > 100 && c.has(pt)
                      ? ((b[pt] = wt), (W[pt] = Et), (le += wt), (Me += Et))
                      : (G[pt] = Et);
                    const It = a.get(pt).total_playtime_percentagex100;
                    J[pt] = (wt / It) * 1e4;
                  }),
                  (b[Ne] = te);
                const dt = te - le;
                b[Ue] = dt;
                const Ce = 1e4 - Me;
                return (
                  (W[Ue] = Ce),
                  {
                    date: B,
                    topPlayedPercentBreakdownPerMonth: b,
                    topPlayedRelativePercentBreakdownForMonth: W,
                    otherPlayedPercentBreakdownForMonth: G,
                    playPercentBreakdownForGame: J,
                  }
                );
              })
              .sort((g, p) => g.date.getTime() - p.date.getTime()),
            h = new Array();
          for (let g = 0; g < 12; ++g) {
            const p = u.findIndex(
              (B) => B.date.getMonth() === g && B.date.getFullYear() === l,
            );
            p === -1
              ? h.push({
                  date: new Date(l, g, 15),
                  topPlayedPercentBreakdownPerMonth: {},
                  topPlayedRelativePercentBreakdownForMonth: {},
                  otherPlayedPercentBreakdownForMonth: {},
                  playPercentBreakdownForGame: {},
                })
              : h.push(u[p]);
          }
          return h;
        }
        var ft = o(14947),
          x = o(76559),
          C = o(36174),
          re = o(71742),
          ue = Object.defineProperty,
          pe = Object.getOwnPropertyDescriptor,
          ve = (l, n, s, a) => {
            for (
              var c = a > 1 ? void 0 : a ? pe(n, s) : n, u = l.length - 1, h;
              u >= 0;
              u--
            )
              (h = l[u]) && (c = (a ? h(n, s, c) : h(c)) || c);
            return a && c && ue(n, s, c), c;
          };
        const ge = 5,
          de = 8;
        class he {
          m_allStats = null;
          m_steamid = null;
          m_mapGameSummary = new Map();
          m_mapGameStats = new Map();
          m_globalPercentiles = null;
          m_globalGameplayDistribution = null;
          m_previousYearSummary = null;
          m_rgTopGamesShown = [];
          m_rgTopGameShownAppIDs = [];
          m_rgMonthChartData = [];
          m_rgTopGameMonthsChartIdsAndRanks = [];
          m_rgAggregateTagData = [];
          m_privacyState = null;
          m_rgDemoByPlaytime = [];
          m_rgPlaytestByPlaytime = [];
          GetRawStats() {
            return this.m_allStats;
          }
          GetDemoByPlaytime() {
            return this.m_rgDemoByPlaytime;
          }
          BHasDemoByPlaytime() {
            return this.m_rgDemoByPlaytime.length > 0;
          }
          GetPlaytestByPlaytime() {
            return this.m_rgPlaytestByPlaytime;
          }
          BHasPlaytestByPlaytime() {
            return this.m_rgPlaytestByPlaytime.length > 0;
          }
          GetPlayTimeStats() {
            return this.m_allStats.playtime_stats;
          }
          GetSteamID() {
            return this.m_steamid;
          }
          GetYear() {
            return this.m_allStats.year;
          }
          GetPrivacyState() {
            return this.m_privacyState;
          }
          SetPrivacyState(n) {
            this.m_privacyState = n;
          }
          GetGameSummaryForApp(n) {
            return this.m_mapGameSummary.get(n);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetFilteredGameSummary() {
            return this.m_allStats.playtime_stats.game_summary.filter(
              (n) => !n.demo && !n.playtest,
            );
          }
          GetGameStats(n) {
            return this.m_mapGameStats.get(n);
          }
          GetTopGamesShown() {
            return this.m_rgTopGamesShown;
          }
          GetTopGamesShownAppIDs() {
            return this.m_rgTopGameShownAppIDs;
          }
          GetChartMonthlyData() {
            return this.m_rgMonthChartData;
          }
          GetTopGameIdsAndRanks() {
            return this.m_rgTopGameMonthsChartIdsAndRanks;
          }
          GetGlobalPercentiles() {
            return this.m_globalPercentiles;
          }
          GetGlobalGameplayDistribition() {
            return this.m_globalGameplayDistribution;
          }
          GetPreviousYearSummary() {
            return this.m_previousYearSummary || {};
          }
          GetChartMonthlyDataForApp(n) {
            const s = this.m_rgMonthChartData.map((c) => ({
                date: c.date,
                percent: c.playPercentBreakdownForGame[n],
              })),
              a = this.m_rgTopGameMonthsChartIdsAndRanks.find(
                (c) => c.appid === n,
              )?.rank;
            return { gameChartData: s, rank: a };
          }
          GetUserAggregateTagData() {
            return this.m_rgAggregateTagData;
          }
          constructor(n, s, a, c) {
            if (
              ((0, ft.Gn)(this),
              (this.m_allStats = n),
              (this.m_steamid = x.b.InitFromAccountID(n.account_id)),
              (this.m_privacyState = n.privacy_state),
              (this.m_globalPercentiles = s),
              (this.m_globalGameplayDistribution = a),
              (this.m_previousYearSummary = c),
              n.playtime_stats?.total_stats?.total_sessions > 0)
            ) {
              n.playtime_stats.game_summary.forEach((g) => {
                (0, re.wT)(
                  !this.m_mapGameSummary.has(g.appid),
                  `Found at least two record of appid ${g.appid} in stats.playtime_stats.game_summary`,
                ),
                  this.m_mapGameSummary.set(g.appid, g);
              }),
                n.playtime_stats.games.forEach((g) => {
                  (0, re.wT)(
                    !this.m_mapGameStats.has(g.appid),
                    `Found at least two record of appid ${g.appid} in stats.playtime_stats.games`,
                  ),
                    this.m_mapGameStats.set(g.appid, g);
                });
              const { rgResults: u } = A(this, "overall", de),
                h = u.map((g) => g.appid);
              (this.m_rgTopGameMonthsChartIdsAndRanks = h.map((g, p) => ({
                appid: g,
                rank: p,
              }))),
                (this.m_rgTopGamesShown = u.slice(0, ge)),
                (this.m_rgTopGameShownAppIDs = this.m_rgTopGamesShown.map(
                  (g) => g.appid,
                )),
                (this.m_rgMonthChartData = ut(
                  this.GetYear(),
                  this.GetPlayTimeStats().months,
                  h,
                  this.m_mapGameSummary,
                ));
            }
            if (n?.playtime_stats?.tag_stats?.stats.length > 0) {
              let h = n.playtime_stats.tag_stats.stats.map((g) => ({
                nTagId: g.tag_id,
                nWeight: parseFloat(g.tag_weight.toString()),
                nPreSelectionWeight: parseFloat(
                  g.tag_weight_pre_selection
                    ? g.tag_weight_pre_selection.toString()
                    : "0.0",
                ),
              }));
              this.m_rgAggregateTagData = k(h, 6);
            }
            n &&
              ((this.m_rgDemoByPlaytime = n.playtime_stats.game_summary
                .filter((u) => !!u.demo)
                .sort(
                  (u, h) =>
                    h.total_playtime_percentagex100 -
                    u.total_playtime_percentagex100,
                )),
              (this.m_rgPlaytestByPlaytime = n.playtime_stats.game_summary
                .filter((u) => !!u.playtest)
                .sort(
                  (u, h) =>
                    h.total_playtime_percentagex100 -
                    u.total_playtime_percentagex100,
                )));
          }
          GetGameAgeCounts(n) {
            let s = this.m_allStats.playtime_stats?.game_summary || [];
            if (n.length == 0) return [s.length];
            let a = new Date(`December 15 ${this.GetYear()}`).getTime() / 1e3,
              c = Array(n.length + 1).fill(0);
            for (let u of s) {
              if ((u.rtime_release_date || a) >= a) {
                c[0] += u.total_playtime_percentagex100;
                continue;
              }
              let g = (a - u.rtime_release_date) / C.Kp.PerYear,
                p = n.findIndex((B) => g < B);
              p >= 0
                ? (c[p] += u.total_playtime_percentagex100)
                : (c[c.length - 1] += u.total_playtime_percentagex100);
            }
            return c;
          }
        }
        ve([ft.sH], he.prototype, "m_privacyState", 2);
        const be = null,
          Oe = "0px 0px 100% 0px";
        var we = o(72604),
          Ee = o(10142),
          _e = o(84192),
          De = o(65946),
          T = o(33828),
          K = Object.defineProperty,
          oe = Object.getOwnPropertyDescriptor,
          F = (l, n, s, a) => {
            for (
              var c = a > 1 ? void 0 : a ? oe(n, s) : n, u = l.length - 1, h;
              u >= 0;
              u--
            )
              (h = l[u]) && (c = (a ? h(n, s, c) : h(c)) || c);
            return a && c && K(n, s, c), c;
          };
        const fe = {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          },
          Le = class Vt {
            m_SteamInterface = null;
            m_DynamicUserStore = null;
            m_GameDetailPopupData = { index: null, appids: [] };
            get SteamInterface() {
              return this.m_SteamInterface;
            }
            GetGameList() {
              return this.m_GameDetailPopupData;
            }
            async GetLoadYearInReview(n, s) {
              const a = this.LoadFromPageConfigIfAvailable(n, s);
              if (a)
                return new he(
                  a,
                  this.LoadFromPageConfigGlobalPercentile(s),
                  this.LoadFromPageConfigGlobalDistribution(s),
                  this.LoadFromPageConfigPreviousYearSummary(s),
                );
              const c = r.w.Init(M.Ry);
              c.Body().set_steamid(n),
                c.Body().set_year(s),
                c.Body().set_force_regenerate(!1);
              const u = await M.Nl.GetUserYearInReview(
                this.m_SteamInterface.GetServiceTransport(),
                c,
              );
              return new he(
                u.Body().stats().toObject(),
                u.Body().percentiles().toObject(),
                u.Body().distribution().toObject(),
                u.Body().previous_year_summary().toObject(),
              );
            }
            async PreloadStoreItemCache(n) {
              let s = n
                .GetTopGamesShownAppIDs()
                .map((u) => w.O4.fromObject({ appid: u }));
              if (s.length == 0) return !0;
              let a = r.w.Init(w.eE);
              (0, _e.rV)(a), (0, _e.Bn)(a, fe), a.Body().set_ids(s);
              let c = await w.$4.GetItems(
                this.m_SteamInterface.GetServiceTransport(),
                a,
              );
              if (c.GetEResult() != we.R) throw "error loading game info";
              for (let u of c.Body().store_items()) Ee.A.Get().ReadItem(u, fe);
              return !0;
            }
            LoadFromPageConfigIfAvailable(n, s) {
              const c = "yearinreview_" + new x.b(n).GetAccountID() + "_" + s;
              let u = (0, d.Tc)(c, "application_config");
              return this.ValidateYearInReview(u) ? u : null;
            }
            LoadFromPageConfigGlobalDistribution(n) {
              const s = "yearinreview_" + n + "_distribution";
              return (0, d.Fd)(s, "application_config");
            }
            LoadFromPageConfigGlobalPercentile(n) {
              const s = "yearinreview_" + n + "_percentiles";
              return (0, d.Fd)(s, "application_config");
            }
            LoadFromPageConfigPreviousYearSummary(n) {
              const s = "yearinreview_" + n + "_previous_year_summary";
              return (0, d.Fd)(s, "application_config");
            }
            ValidateYearInReview(n) {
              const s = n;
              return !!(
                s &&
                typeof s == "object" &&
                s.account_id &&
                typeof s.account_id == "number" &&
                s.playtime_stats &&
                typeof s.playtime_stats == "object"
              );
            }
            async SetYearInReviewPrivacy(n, s, a) {
              const c = r.w.Init(M.XC);
              c.Body().set_steamid(n),
                c.Body().set_year(s),
                c.Body().set_privacy_state(a);
              const u = await M.Nl.SetUserSharingPermissions(
                this.m_SteamInterface.GetServiceTransport(),
                c,
              );
              return u.GetEResult() != we.R
                ? {
                    privacy_state: void 0,
                    error: this.PrivacyEResultToMessage(u.GetEResult()),
                  }
                : { privacy_state: u.Body().privacy_state() };
            }
            PrivacyEResultToMessage(n) {
              return n === we.S7
                ? "Servers are busy, please try again later"
                : "";
            }
            GetGameDetailsPopupIndex() {
              return this.m_GameDetailPopupData.index;
            }
            SetGameDetailsPopupIndex(n) {
              n >= 0 &&
                n < this.m_GameDetailPopupData.appids.length &&
                (this.m_GameDetailPopupData.index = n);
            }
            SetGameDetailsPopupAppData(n, s) {
              (this.m_GameDetailPopupData.appids = s),
                (this.m_GameDetailPopupData.index = n);
            }
            static s_Singleton;
            static Get() {
              return (
                Vt.s_Singleton ||
                  ((Vt.s_Singleton = new Vt()), Vt.s_Singleton.Init()),
                Vt.s_Singleton
              );
            }
            constructor() {
              (0, ft.Gn)(this);
            }
            async Init() {
              (this.m_SteamInterface = (0, T.P)()),
                (this.m_DynamicUserStore = await E.Fm.Get().HintLoad());
            }
          };
        F([ft.sH], Le.prototype, "m_GameDetailPopupData", 2);
        let je = Le;
        function Ke(l, n) {
          let { data: s, isLoading: a } = (0, q.I)({
              queryKey: ["YearInReview", "Get", l, n],
              queryFn: () => je.Get().GetLoadYearInReview(l, n),
            }),
            { data: c, isLoading: u } = (0, q.I)({
              queryKey: ["YearInReview_AppDataLoading"],
              queryFn: () => je.Get().PreloadStoreItemCache(s),
              enabled: !!s,
            }),
            h = a || u;
          return !h && !c && (s = null), { userYearInReview: s, isLoading: h };
        }
        async function ze(l, n, s) {
          return await je.Get().SetYearInReviewPrivacy(l, n, s);
        }
        function ke() {
          const [l, n, s] = (0, De.q3)(() => {
            const a = je.Get().GetGameList();
            return [
              a.appids.length > a.index ? a.appids[a.index] : null,
              a.appids.length,
              a.index,
            ];
          });
          return { unAppID: l, length: n, index: s };
        }
        function Xe(l, n) {
          return m.useCallback(() => {
            je.Get().SetGameDetailsPopupAppData(l, n);
          }, [l, n]);
        }
        function Ve(l) {
          return m.useCallback(() => {
            je.Get().SetGameDetailsPopupIndex(l);
          }, [l]);
        }
        function it(l, n) {
          return m.useMemo(() => {
            const s = "yearinreview_otheryears_" + l.GetAccountID() + "_" + n;
            return (0, d.Tc)(s, "application_config");
          }, [l, n]);
        }
        var st = o(58632),
          at = o.n(st);
        class Ze {
          m_SteamInterface;
          m_steamid;
          m_year;
          m_DataLoader;
          constructor(n, s, a) {
            (this.m_SteamInterface = n),
              (this.m_steamid = s),
              (this.m_year = a),
              (this.m_DataLoader = new (at())(
                (c) => this.InternalLoadScreenshots(c),
                { cache: !1 },
              ));
          }
          get steamid() {
            return this.m_steamid;
          }
          get year() {
            return this.m_year;
          }
          GetScreenshots(n) {
            return this.m_DataLoader.load(n);
          }
          async InternalLoadScreenshots(n) {
            const s = r.w.Init(M.DI);
            s.Body().set_steamid(this.m_steamid.ConvertTo64BitString()),
              s.Body().set_year(this.m_year),
              s.Body().set_appids(n);
            const a = await M.Nl.GetUserYearScreenshots(
              this.m_SteamInterface.GetServiceTransport(),
              s,
            );
            if (!a.BSuccess())
              throw `Load Screenshots failed: ${a.GetErrorMessage()}`;
            const c = new Map();
            for (const u of a.Body().apps())
              c.set(u.appid(), u.toObject().screenshots);
            return n.map((u) => c.get(u));
          }
        }
        function ot(l) {
          const n = ae(),
            { data: s } = (0, q.I)({
              queryKey: [
                "yirscreenshots",
                n.steamid.ConvertTo64BitString(),
                n.year,
                l,
              ],
              queryFn: () => n.GetScreenshots(l),
            });
          return s;
        }
        var Ge = o(34592),
          Je = o(8323),
          He = o(30096);
        async function $e(l, n) {
          const s = await n;
          if (s) {
            const a = s.find((c) => c.appid == l);
            if (a) return a;
          }
          return null;
        }
        class Pe {
          m_SteamInterface = null;
          m_mapUserAchievementsByYear = new Map();
          m_mapPromiseUserAchievementsByYear = new Map();
          m_mapAchievementLoadCallback = new Map();
          GetKey(n, s, a) {
            return `${n}_${s}_${a}`;
          }
          GetAchievementLoadCallback(n, s, a) {
            const c = this.GetKey(n, s, a);
            return (
              this.m_mapAchievementLoadCallback.has(c) ||
                this.m_mapAchievementLoadCallback.set(c, new Je.lu()),
              this.m_mapAchievementLoadCallback.get(c)
            );
          }
          GetAchievement(n, s, a) {
            const c = this.GetKey(n, s, a);
            return this.m_mapUserAchievementsByYear.get(c);
          }
          GetManyAchievement(n, s, a) {
            return a.map((c) => this.GetAchievement(n, s, c));
          }
          async LoadUserAchievementForYearForGame(n, s, a) {
            const c = this.GetKey(n, s, a);
            return (
              this.m_mapPromiseUserAchievementsByYear.has(c) ||
                this.m_mapPromiseUserAchievementsByYear.set(
                  c,
                  $e(a, this.InternalLoadUserAchievementForYear(n, s, [a])),
                ),
              this.m_mapPromiseUserAchievementsByYear.get(c)
            );
          }
          async LoadUserAchievementForYearForMultipleGame(n, s, a) {
            const c = new Array(),
              u = new Array();
            if (
              (a.forEach((h) => {
                const g = this.GetKey(n, s, h);
                this.m_mapPromiseUserAchievementsByYear.has(g)
                  ? c.push(this.m_mapPromiseUserAchievementsByYear.get(g))
                  : u.push(h);
              }),
              u.length > 0)
            ) {
              const h = this.InternalLoadUserAchievementForYear(n, s, u);
              u.forEach((g) => {
                const p = this.GetKey(n, s, g),
                  B = $e(g, h);
                this.m_mapPromiseUserAchievementsByYear.set(p, B), c.push(B);
              });
            }
            return Promise.all(c);
          }
          async InternalLoadUserAchievementForYear(n, s, a) {
            const c = r.w.Init(M.mb),
              u = x.b.InitFromAccountID(s);
            c.Body().set_appids(a),
              c.Body().set_steamid(u.ConvertTo64BitString()),
              c.Body().set_year(n),
              c.Body().set_total_only(!1);
            let h = null;
            try {
              const g = await M.Nl.GetUserYearAchievements(
                this.m_SteamInterface.GetServiceTransport(),
                c,
              );
              if (g.GetEResult() == we.R) {
                const p = g
                    .Body()
                    .game_achievements()
                    .map((b) => b.toObject()),
                  B = new Map();
                return (
                  p.forEach((b) => B.set(b.appid, b)),
                  a.forEach((b) => {
                    const W = this.GetKey(n, s, b),
                      G = B.get(b) || { appid: b, achievements: [] };
                    (G.achievements = G.achievements.map((J) => ({
                      ...J,
                      achievement_name_internal:
                        J.achievement_name_internal.toLowerCase(),
                    }))),
                      this.m_mapUserAchievementsByYear.set(W, G),
                      this.GetAchievementLoadCallback(n, s, b).Dispatch(G);
                  }),
                  p
                );
              }
              h = (0, Ge.H)(g);
            } catch (g) {
              h = (0, Ge.H)(g);
            }
            return (
              console.error(
                "CYearInReviewUserAchievementStore.InternalLoadUserAchievementForYear failed: " +
                  h?.strErrorMsg,
                h,
              ),
              a.map((g) => ({ appid: g, achievements: [] }))
            );
          }
          static s_Singleton;
          static Get() {
            return (
              Pe.s_Singleton ||
                ((Pe.s_Singleton = new Pe()), Pe.s_Singleton.Init()),
              Pe.s_Singleton
            );
          }
          constructor() {}
          Init() {
            this.m_SteamInterface = (0, T.P)();
          }
        }
        function lt(l, n, s) {
          const [a, c] = (0, m.useState)(Pe.Get().GetManyAchievement(l, n, s));
          return (
            (0, m.useEffect)(() => {
              s?.length > 0 &&
                Pe.Get()
                  .LoadUserAchievementForYearForMultipleGame(l, n, s)
                  .then(c);
            }, [n, l, s]),
            a
          );
        }
        function qe(l, n, s) {
          const [a, c] = (0, m.useState)(Pe.Get().GetAchievement(l, n, s)),
            [u, h] = (0, m.useState)(s);
          return (
            (0, m.useEffect)(() => {
              (!a || u != s) &&
                Pe.Get()
                  .LoadUserAchievementForYearForGame(l, n, s)
                  .then((g) => {
                    c(g), h(s);
                  });
            }, [n, a, s, u, l]),
            (0, He.hL)(Pe.Get().GetAchievementLoadCallback(l, n, s), c),
            a
          );
        }
        var Qe = o(92757),
          ct = o(46943),
          et = o(54407),
          Fe = o(16412),
          Te = o(25792),
          Ye = o(179),
          tt = o(95695),
          Ae = o(36118),
          Re = o(85599),
          v = o(36707),
          rt = o(27309),
          Ie = o(84676),
          Be = o(19730),
          $ = o(67554),
          ye = o.n($),
          e = o(95781),
          i = o.n(e),
          L = o(95970),
          xe = o.n(L),
          Wt = o(95892);
        function Bt(l) {
          const { className: n, children: s, strClassOnFirstVisible: a } = l,
            [c, u] = (0, m.useState)(!1);
          return (0, t.jsx)(Wt.J, {
            trigger: "once",
            onVisibilityChange: u,
            className: (0, v.A)(n, c ? a || "NowVisible" : void 0),
            children: s,
          });
        }
        var Xt = o(41032),
          jt = o(19298);
        const Zt = { ...fe, include_screenshots: !0 };
        function Ct(l) {
          const {
              category: n,
              userYearInReview: s,
              strClassName: a,
              bgImageURL: c,
              title: u,
              subTitle: h,
              disclaimer: g,
              subTitleTokenIfMax: p,
            } = l,
            B = s.GetRawStats(),
            b = 5,
            {
              nTotalGames: W,
              nTotalSessions: G,
              nTotalPercentage: J,
            } = (0, m.useMemo)(() => me(B, n), [B, n]),
            { rgResults: te, nTotalResultCount: le } = (0, m.useMemo)(
              () => N(s, n, b, J),
              [s, n, J, b],
            ),
            Me = (0, m.useMemo)(
              () => te.map((pt) => pt.parent_appid || pt.appid),
              [te],
            ),
            [We, dt] = (0, m.useState)(
              te.length > 0 ? te[0].parent_appid || te[0].appid : 0,
            ),
            Ce = (0, Ie.zX)(Me, n == "vr" ? Zt : fe),
            Se = tr(te, n, Ce),
            ht =
              n === "overall" ||
              n === "controller" ||
              n == "demo" ||
              n == "playtest";
          return (0, t.jsxs)("div", {
            className: (0, v.A)(a, n, xe().PlatformContentsCtn),
            children: [
              (0, t.jsx)("div", { className: xe().SectionTitle, children: u }),
              !!c &&
                (0, t.jsx)("img", { src: c, className: xe().BackgroundImage }),
              n === "vr" && We > 0 && (0, t.jsx)(gt, { appid: We }),
              (0, t.jsxs)("div", {
                className: (0, v.A)(i().YearInReviewContent, xe().StatsRow),
                children: [
                  (0, t.jsxs)("div", {
                    className: xe().StatBlock,
                    children: [
                      (0, t.jsx)("div", {
                        className: xe().BigNum,
                        children: (0, Be.Dq)(W),
                      }),
                      (0, t.jsx)("div", {
                        className: xe().StatDescription,
                        children: (0, f.Yp)("#YIR_NewLine_Games", W),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: xe().StatBlock,
                    children: [
                      (0, t.jsx)("div", {
                        className: xe().BigNum,
                        children: (0, Be.Dq)(G),
                      }),
                      (0, t.jsx)("div", {
                        className: xe().StatDescription,
                        children: (0, f.Yp)("#YIR_NewLine_Session", G),
                      }),
                    ],
                  }),
                  !ht &&
                    (0, t.jsx)(vr, { percentVal: J, subToken: "#YIR_NewLine" }),
                ],
              }),
              !!h &&
                (0, t.jsx)("div", {
                  className: xe().SectionSubTitle,
                  children: h,
                }),
              !h &&
                !!p &&
                le > b &&
                Se > 0 &&
                (0, t.jsx)("div", {
                  className: xe().SectionSubTitle,
                  children: (0, f.we)(p, Se),
                }),
              !!g &&
                (0, t.jsx)("div", { className: xe().Disclaimer, children: g }),
              (0, t.jsx)(Bt, {
                className: ye().SteamDeckGameCapRow,
                children: (0, t.jsx)(mt, {
                  rgGamePercentages: te,
                  category: n,
                  fnOnHoverApp: dt,
                }),
              }),
            ],
          });
        }
        function tr(l, n, s) {
          const [a, c] = m.useState(0);
          return (
            m.useEffect(() => {
              if (s == Ie.Sq) return;
              const u = l.reduce((h, g) => {
                const p = g.parent_appid || g.appid,
                  B = Ee.A.Get().GetApp(p)?.BIsVisible(),
                  W = !(n == "demo" || n == "playtest") || g.parent_appid;
                return h + (B && W ? 1 : 0);
              }, 0);
              c(u);
            }, [l, s, n]),
            a
          );
        }
        function gt(l) {
          const { appid: n } = l,
            [s] = (0, Ie.t7)(n, Zt),
            a = (0, Xt.$9)();
          if (!s) return null;
          const c = s.GetScreenshots(a == "blocked");
          if (!c.length) return null;
          const u = c[1],
            h = a == "masked" && !s.BIsAgeSafeScreenshot(u);
          return (0, t.jsx)("img", {
            src: u,
            className: (0, v.A)({ [xe().GameImage]: !0, [xe().BlurImage]: h }),
          });
        }
        function mt(l) {
          const { rgGamePercentages: n, category: s, fnOnHoverApp: a } = l,
            c = n.map((h) => h.appid);
          let u;
          switch (s) {
            case "demo":
              u = w.uE.ue;
              break;
            case "playtest":
              u = w.uE.Vi;
              break;
          }
          return (0, t.jsx)(jt.Z, {
            "flow-children": "grid",
            className: (0, v.A)(
              i().YearInReviewContent,
              xe().CapRow,
              ye().CapRow,
            ),
            children: n.map((h, g) =>
              (0, t.jsx)(
                nt,
                {
                  appid: h.appid,
                  strInfo: h.strPercentage,
                  nParentAppID: h.parent_appid,
                  eChildType: u,
                  index: g,
                  loading: "eager",
                  rgAppIDs: c,
                  fnOnMouseEvent: () => a && a(h.appid),
                },
                s + "_" + h.appid,
              ),
            ),
          });
        }
        function nt(l) {
          const {
              appid: n,
              strInfo: s,
              rgAppIDs: a,
              index: c,
              loading: u,
              fnOnMouseEvent: h,
              nParentAppID: g,
              eChildType: p,
            } = l,
            [B, b] = (0, Ie.t7)(p == null ? n : g, fe),
            W = Xe(c, a);
          if (b == Ie.Sq) return null;
          if (!B || !B.BIsVisible())
            return g && (p == w.uE.ue || p == w.uE.Vi)
              ? (0, t.jsx)(nt, { ...l, nParentAppID: g, eChildType: w.uE.HT })
              : null;
          const G = B.GetAssetsWithoutOverrides().GetLibraryCapsuleURL();
          return (0, t.jsxs)("a", {
            className: ye().CapsuleCtn,
            onClick: W,
            onMouseEnter: h,
            children: [
              G
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsxs)("div", {
                        className: ye().SpecialFlags,
                        children: [
                          g &&
                            p == w.uE.ue &&
                            (0, t.jsx)("div", {
                              className: ye().DemoPlayDetails,
                              children: (0, f.we)("#YIR_Played_Demo"),
                            }),
                          g &&
                            p == w.uE.Vi &&
                            (0, t.jsx)("div", {
                              className: ye().PlaytestPlayDetails,
                              children: (0, f.we)("#YIR_Played_PlayTest"),
                            }),
                        ],
                      }),
                      (0, t.jsx)("img", {
                        loading: u,
                        src: G,
                        alt: B.GetName(),
                      }),
                    ],
                  })
                : (0, t.jsx)(pr, { item: B }),
              !!s &&
                (0, t.jsx)("div", { className: ye().TimePlayed, children: s }),
            ],
          });
        }
        function pr(l) {
          const { item: n } = l;
          return (0, t.jsxs)("div", {
            className: ye().UnavailableGame,
            children: [
              (0, t.jsx)("img", {
                src: rt.A,
                alt: n.GetName() || "" + n.GetAppID(),
              }),
              (0, t.jsx)("div", {
                className: ye().GameTitle,
                children: n.GetName(),
              }),
            ],
          });
        }
        function vr(l) {
          const { percentVal: n, subToken: s } = l,
            a = j(n),
            c = `${s}_Percent`;
          return (0, t.jsxs)("div", {
            className: xe().StatBlock,
            children: [
              (0, t.jsx)("div", { className: xe().BigNum, children: a }),
              (0, t.jsx)("div", {
                className: xe().StatDescription,
                children: (0, f.we)(c),
              }),
            ],
          });
        }
        var rr = o(83482),
          Yr = o(81029),
          Kr = o(21418),
          nr = o(92264),
          Gt = o(18288),
          ir = o(72865),
          Pt = o(71421);
        function Vr(l) {
          const { userYearInReview: n, nYear: s } = l,
            a = D(),
            c = (0, m.useMemo)(() => {
              const B = new Set();
              return (
                n.GetPlayTimeStats().game_summary.forEach((b) => {
                  !b.demo && !b.playtest
                    ? B.add(b.appid)
                    : b.parent_appid && B.add(b.parent_appid);
                }),
                Array.from(B)
              );
            }, [n]),
            u = (0, Ie.zX)(c, fe),
            h = I(),
            g = (B) =>
              window.sessionStorage.setItem("yirfirsttime", `?tab=${B.key}`),
            p = [
              {
                name: (0, f.we)("#YIR_FirstTime_Tab_MonthlyGrid"),
                key: "firsttimebymonth",
                contents: (0, t.jsx)(Te.tH, {
                  children: (0, t.jsx)("div", {
                    className: Gt.MonthGridOverallCtn,
                    children: (0, t.jsx)(Fr, { userYearInReview: n, nYear: s }),
                  }),
                }),
                onClick: g,
              },
              {
                name: (0, f.we)("#YIR_FirstTime_Tab_Grid"),
                key: "firsttimegrid",
                contents: (0, t.jsx)(Te.tH, {
                  children: (0, t.jsx)(Qr, { userYearInReview: n, nYear: s }),
                }),
                onClick: g,
              },
            ];
          return c.length == 0
            ? null
            : (0, t.jsxs)(Bt, {
                className: e.AllFirstPlayedCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: (0, v.A)(Gt.AllGamesBGImage, a.AllGamesBGImage),
                  }),
                  (0, t.jsxs)("div", {
                    className: e.YearInReviewContent,
                    children: [
                      (0, t.jsx)("div", {
                        className: e.SectionTitle,
                        children: h("#YIR_FirstTime_Title", c.length),
                      }),
                      u == Ie.Sq
                        ? (0, t.jsx)(Re.t, {
                            size: "medium",
                            position: "center",
                            string: (0, f.we)("#Loading"),
                          })
                        : (0, t.jsx)("div", {
                            className: e.TabCtn,
                            children: (0, t.jsx)(Kr.V, {
                              classNameCtn: e.TabBar,
                              classNameTab: (0, v.A)(e.Tab, a.Tab),
                              tabs: p,
                            }),
                          }),
                    ],
                  }),
                ],
              });
        }
        function Qr(l) {
          const { nYear: n, userYearInReview: s } = l,
            a = s.GetPlayTimeStats().game_summary,
            c = I(),
            [u, h] = m.useState(!1),
            { bShouldShowMore: g, rgGamesInOrderOfPlaytime: p } = (0,
            m.useMemo)(() => {
              const B = new Set(),
                b = a
                  .filter((J) =>
                    B.has(J.appid)
                      ? !1
                      : (B.add(J.appid),
                        J.parent_appid || (!J.demo && !J.playtest)),
                  )
                  .sort(
                    (J, te) =>
                      te.total_playtime_percentagex100 -
                      J.total_playtime_percentagex100,
                  )
                  .map((J) => ({
                    appid: J.appid,
                    strPercentage: j(J.total_playtime_percentagex100),
                    bNewThisYear: !!J.new_this_year,
                    bIsDemo: !!J.demo,
                    bIsPlaytest: !!J.playtest,
                    nParentAppID: J.parent_appid,
                  })),
                W = 100,
                G = a.length > W && !u;
              return {
                bShouldShowMore: G,
                rgGamesInOrderOfPlaytime: G ? b.slice(0, W) : b,
              };
            }, [a, u]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Br, {
                nYear: n,
                rgGamesInOrderOfPlaytime: p,
                strTooltip: c("#YIR_FirstTime_Percentages"),
              }),
              g &&
                (0, t.jsx)("div", {
                  className: $.MoreButtonContainer,
                  children: (0, t.jsx)("a", {
                    href: "#",
                    className: $.ShowMoreBtn,
                    onClick: () => h(!0),
                    children: (0, f.we)("#YIR_ShowMore"),
                  }),
                }),
            ],
          });
        }
        function Fr(l) {
          const { nYear: n, userYearInReview: s } = l,
            a = s.GetRawStats().playtime_stats.months;
          return (0, t.jsx)(t.Fragment, {
            children: a
              .filter((c) => c.stats.total_sessions > 0)
              .map((c) =>
                (0, t.jsx)(
                  Xr,
                  { month: c, userYearInReview: s, nYear: n },
                  "outermonth" + c.rtime_month,
                ),
              ),
          });
        }
        function Xr(l) {
          const { nYear: n, userYearInReview: s, month: a } = l,
            c = O(),
            u = I(),
            [h, g] = m.useState(!1),
            { bShouldShowMore: p, rgGameStats: B } = (0, m.useMemo)(() => {
              const W = a.game_summary
                  .filter((te) => {
                    const le = s.GetGameSummaryForApp(te.appid);
                    return (
                      (0, re.wT)(
                        le,
                        `Displaying Month Data ${a.rtime_month} missing summary for appid: ${te.appid}`,
                      ),
                      le && (le.parent_appid || (!le.demo && !le.playtest))
                    );
                  })
                  .sort(
                    (te, le) =>
                      le.relative_playtime_percentagex100 -
                      te.relative_playtime_percentagex100,
                  )
                  .map((te) => {
                    const le = s.GetGameSummaryForApp(te.appid);
                    return {
                      appid: le.appid,
                      strPercentage: j(te.relative_playtime_percentagex100),
                      bNewThisYear: !!le.new_this_year,
                      bIsDemo: !!le.demo,
                      bIsPlaytest: !!le.playtest,
                      nParentAppID: le.parent_appid,
                    };
                  }),
                G = 8,
                J = W.length > G && !h;
              return { bShouldShowMore: J, rgGameStats: J ? W.slice(0, G) : W };
            }, [a.game_summary, a.rtime_month, h, s]);
          if (B.length == 0) return null;
          const b = new Date((a.rtime_month + 1440 * 60) * 1e3);
          return (0, t.jsxs)(
            "div",
            {
              className: Gt.MonthGroupCtn,
              children: [
                (0, t.jsx)("div", {
                  className: Gt.MonthTitle,
                  children: c
                    ? (0, f.we)(
                        "#YIR_MonthlyGrid_MonthSingular_" + (b.getMonth() + 1),
                      )
                    : (0, nr.sq)(b),
                }),
                (0, t.jsx)(Br, {
                  rgGamesInOrderOfPlaytime: B,
                  nYear: n,
                  strTooltip: u("#YIR_FirstTime_MonthlyPercentages"),
                }),
                p &&
                  (0, t.jsx)("div", {
                    className: $.MoreButtonContainer,
                    children: (0, t.jsx)("a", {
                      href: "#",
                      className: $.ShowMoreBtn,
                      onClick: () => g(!0),
                      children: (0, f.we)("#YIR_ShowMore"),
                    }),
                  }),
              ],
            },
            "monthgroup_" + a.rtime_month,
          );
        }
        function Br(l) {
          const { nYear: n, rgGamesInOrderOfPlaytime: s, strTooltip: a } = l;
          let c = s.filter((g) =>
            Ee.A.Get().BHasApp(g.nParentAppID || g.appid),
          );
          const u = c.map((g) => g.appid);
          let h = c.map((g, p) => {
            let B = () => je.Get().SetGameDetailsPopupAppData(p, u);
            return (0, t.jsx)(
              Zr,
              {
                appid: g.nParentAppID || g.appid,
                bNewThisYear: g.bNewThisYear,
                fnOnClick: B,
                nYear: n,
                strPercentage: g.strPercentage,
                strTooltip: a,
                bIsDemo: g.bIsDemo,
                bIsPlayTest: g.bIsPlaytest,
              },
              g.appid,
            );
          });
          return (0, t.jsx)(jt.Z, {
            "flow-children": "grid",
            className: (0, v.A)($.FirstPlayCtn, Gt.FirstPlayCtn),
            children: h,
          });
        }
        function Zr(l) {
          const {
              nYear: n,
              appid: s,
              bNewThisYear: a,
              fnOnClick: c,
              strPercentage: u,
              strTooltip: h,
              bIsDemo: g,
              bIsPlayTest: p,
            } = l,
            [B] = (0, Ie.t7)(s, fe),
            b = (0, ir.n9)(),
            W = D();
          if (!B || !B.BIsVisible()) return null;
          const G = (0, rr.wJ)(B?.GetStorePageURL() || "", b),
            J = B.GetAssetsWithoutOverrides().GetLibraryCapsuleURL();
          return (0, t.jsx)("div", {
            className: (0, v.A)({
              [$.GameCtn]: !0,
              [Gt.GameCtn]: !0,
              [$.GameNewThisYear]: a,
            }),
            onClick: (te) => {
              c && (te.preventDefault(), c());
            },
            children: (0, t.jsx)(Yr.oj, {
              appid: B.GetAppID(),
              children: (0, t.jsxs)("a", {
                href: c ? void 0 : G,
                className: $.CapsuleCtn,
                children: [
                  (!!a || !!g || !!p) &&
                    (0, t.jsxs)("div", {
                      className: $.SpecialFlags,
                      children: [
                        !!a &&
                          (0, t.jsx)("div", {
                            className: (0, v.A)(
                              $.GamePlayDetails,
                              W.GamePlayDetails,
                            ),
                            children: (0, f.we)("#YIR_FirstTime_Played", n),
                          }),
                        !!g &&
                          (0, t.jsx)("div", {
                            className: (0, v.A)(
                              $.DemoPlayDetails,
                              W.DemoPlayDetails,
                            ),
                            children: (0, f.we)("#YIR_Played_Demo"),
                          }),
                        !!p &&
                          (0, t.jsx)("div", {
                            className: (0, v.A)(
                              $.PlaytestPlayDetails,
                              W.PlaytestPlayDetails,
                            ),
                            children: (0, f.we)("#YIR_Played_PlayTest"),
                          }),
                      ],
                    }),
                  J
                    ? (0, t.jsx)("img", { loading: "lazy", src: J })
                    : (0, t.jsx)(pr, { item: B }),
                  !!u &&
                    (0, t.jsx)(Pt.he, {
                      toolTipContent: h,
                      className: $.TimePlayed,
                      children: u,
                    }),
                ],
              }),
            }),
          });
        }
        var Jr = o(46079),
          xt = o.n(Jr);
        const $r = 9e3,
          qr = 1,
          en = 50;
        function yr(l) {
          const { userYearInReview: n, children: s } = l,
            a = (0, m.useMemo)(
              () =>
                n
                  .GetPlayTimeStats()
                  .games.map((h) => n.GetGameSummaryForApp(h.appid))
                  .filter(
                    (h) => h && (h.parent_appid || (!h.demo && !h.playtest)),
                  ),
              [n],
            );
          if (!a || a.length == 0) return (0, t.jsx)(sr, { children: s });
          const c = a[0].total_playtime_percentagex100;
          return n.GetPlayTimeStats().game_summary.length < qr || c >= $r
            ? (0, t.jsx)(rn, {
                appid: a[0].parent_appid || a[0].appid,
                children: s,
              })
            : (0, t.jsx)(tn, { userYearInReview: n, children: s });
        }
        function tn(l) {
          const { userYearInReview: n, children: s } = l,
            a = D(),
            c = (0, m.useMemo)(
              () =>
                Array.from(
                  new Set(
                    n
                      .GetPlayTimeStats()
                      .game_summary.filter(
                        (p) => p.parent_appid || (!p.demo && !p.playtest),
                      )
                      .sort(
                        (p, B) =>
                          B.total_playtime_percentagex100 -
                          p.total_playtime_percentagex100,
                      )
                      .slice(0, en)
                      .map((p) => p.parent_appid || p.appid),
                  ),
                ),
              [n],
            ),
            [u, h] = (0, m.useState)(null),
            g = (0, Ie.zX)(c, fe);
          return (
            (0, m.useEffect)(() => {
              g != Ie.Sq &&
                h(c.map((p) => Ee.A.Get().GetApp(p)).filter(Boolean));
            }, [c, g]),
            u
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, v.A)(xt().ImagesCtn, a.ImagesCtn),
                      children: (0, t.jsx)("div", {
                        className: xt().AllImagesCtn,
                        children: (0, t.jsx)("div", {
                          className: xt().AllImages,
                          children: (0, t.jsxs)("div", {
                            className: (0, v.A)({
                              [xt().ImageTint]: !0,
                              [xt().Sub10]: u.length <= 10,
                              [xt().Sub20]: u.length <= 20,
                              [xt().Sub40]: u.length <= 40,
                            }),
                            children: [
                              u.map((p) =>
                                (0, t.jsx)(
                                  "div",
                                  {
                                    className: xt().BgImage,
                                    style: {
                                      backgroundImage: `url( ${p.GetAssetsWithoutOverrides().GetLibraryHeroURL()?.trim().length > 0 ? p.GetAssetsWithoutOverrides().GetLibraryHeroURL() : p.GetAssetsWithoutOverrides().GetMainCapsuleURL()} )`,
                                    },
                                  },
                                  "bg_" + p.GetAppID(),
                                ),
                              ),
                              u.length <= 50 &&
                                u.map((p) =>
                                  (0, t.jsx)(
                                    "div",
                                    {
                                      className: xt().BgImage,
                                      style: {
                                        backgroundImage: `url( ${p.GetAssetsWithoutOverrides().GetRawPageBackgroundURL()?.trim().length > 0 ? p.GetAssetsWithoutOverrides().GetRawPageBackgroundURL() : p.GetAssetsWithoutOverrides().GetMainCapsuleURL()} )`,
                                      },
                                    },
                                    "bg_" + p.GetAppID(),
                                  ),
                                ),
                              u.length <= 20 &&
                                u.map((p) =>
                                  (0, t.jsx)(
                                    "div",
                                    {
                                      className: xt().BgImage,
                                      style: {
                                        backgroundImage: `url( ${p.GetAssetsWithoutOverrides().GetLibraryHeroURL()?.trim().length > 0 ? p.GetAssetsWithoutOverrides().GetLibraryHeroURL() : p.GetAssetsWithoutOverrides().GetMainCapsuleURL()} )`,
                                      },
                                    },
                                    "bg_" + p.GetAppID(),
                                  ),
                                ),
                            ],
                          }),
                        }),
                      }),
                    }),
                    s,
                  ],
                })
              : (0, t.jsx)(sr, { children: s })
          );
        }
        function rn(l) {
          const { appid: n, children: s } = l,
            [a] = (0, Ie.t7)(n, fe),
            c = D();
          return a
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: (0, v.A)(xt().ImagesCtn, c.ImagesCtn),
                    children: (0, t.jsx)("div", {
                      className: (0, v.A)(xt().SingleGame, c.SingleGame),
                      children: (0, t.jsx)("div", {
                        className: (0, v.A)(xt().ImageTint, c.ImageTint),
                        children: (0, t.jsx)("img", {
                          src: a
                            ?.GetAssetsWithoutOverrides()
                            ?.GetLibraryHeroURL(),
                        }),
                      }),
                    }),
                  }),
                  s,
                ],
              })
            : (0, t.jsx)(sr, { children: s });
        }
        function sr(l) {
          return (0, t.jsx)("div", {
            className: xt().basicBackground,
            children: l.children,
          });
        }
        var nn = o(7550),
          ne = o.n(nn),
          br = o(98609),
          Ut = o(32671),
          ar = o(74295),
          or = o(6435),
          Qt = o(72040),
          sn = o(76721),
          an = o(5585),
          on = o(66579),
          ln = o(92665);
        const zt = ({
          spaceAroundCount: l,
          endValue: n,
          maxValue: s,
          duration: a = 1e3,
          startAnimation: c = !1,
          stopAnimation: u = !1,
          onAnimationStart: h,
          onAnimationStop: g,
          delay: p = 0,
          className: B,
        }) => {
          const [b, W] = (0, m.useState)(0),
            G = m.useRef(null),
            J = (te) =>
              te < 0.5 ? 4 * te ** 3 : 1 - Math.pow(-2 * te + 2, 3) / 2;
          return (
            (0, m.useEffect)(() => {
              let te = null;
              const le = () => {
                if (!te) return;
                const We = Date.now() - te,
                  dt = Math.min(1, We / a),
                  Ce = J(dt),
                  Se = Math.round((s ?? n) * Ce);
                Se <= n
                  ? (W(Se), (G.current = requestAnimationFrame(le)))
                  : W(n);
              };
              return (
                c &&
                  (h && h(),
                  window.setTimeout(() => {
                    (te = Date.now()),
                      h && h(),
                      (G.current = requestAnimationFrame(le));
                  }, p)),
                () => {
                  G.current && cancelAnimationFrame(G.current), u && g && g();
                }
              );
            }, [n, a, c, u, h, g, p, s]),
            l
              ? (0, t.jsxs)(t.Fragment, {
                  children: ["\xA0", (0, Be.Dq)(b), "\xA0"],
                })
              : (0, t.jsx)(t.Fragment, { children: (0, Be.Dq)(b) })
          );
        };
        var xr = o(94162),
          cn = o(39567),
          wr = o(24642);
        const mn = () => {
            const l = D();
            return (0, t.jsxs)("svg", {
              className: (0, v.A)(
                ne().ProgressIconSVG,
                ne().IconStreak,
                l.IconStreak,
              ),
              x: "0px",
              y: "0px",
              width: "100px",
              height: "100px",
              viewBox: "0 0 220 256",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, t.jsx)("path", {
                  d: "M62.8236 111.578C62.8236 118.539 57.1801 124.183 50.2186 124.183C43.257 124.183 37.6135 118.539 37.6135 111.578C37.6135 104.616 43.257 98.9728 50.2186 98.9728C57.1801 98.9728 62.8236 104.616 62.8236 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M104.84 111.578C104.84 118.539 99.197 124.183 92.2354 124.183C85.2738 124.183 79.6304 118.539 79.6304 111.578C79.6304 104.616 85.2738 98.9728 92.2354 98.9728C99.197 98.9728 104.84 104.616 104.84 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M146.857 111.578C146.857 118.539 141.214 124.183 134.252 124.183C127.29 124.183 121.647 118.539 121.647 111.578C121.647 104.616 127.29 98.9728 134.252 98.9728C141.214 98.9728 146.857 104.616 146.857 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M188.874 111.578C188.874 118.539 183.23 124.183 176.269 124.183C169.307 124.183 163.664 118.539 163.664 111.578C163.664 104.616 169.307 98.9728 176.269 98.9728C183.23 98.9728 188.874 104.616 188.874 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M62.8236 153.595C62.8236 160.556 57.1801 166.2 50.2186 166.2C43.257 166.2 37.6135 160.556 37.6135 153.595C37.6135 146.633 43.257 140.99 50.2186 140.99C57.1801 140.99 62.8236 146.633 62.8236 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M104.84 153.595C104.84 160.556 99.197 166.2 92.2354 166.2C85.2738 166.2 79.6304 160.556 79.6304 153.595C79.6304 146.633 85.2738 140.99 92.2354 140.99C99.197 140.99 104.84 146.633 104.84 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M146.857 153.595C146.857 160.556 141.214 166.2 134.252 166.2C127.29 166.2 121.647 160.556 121.647 153.595C121.647 146.633 127.29 140.99 134.252 140.99C141.214 140.99 146.857 146.633 146.857 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M188.874 153.595C188.874 160.556 183.23 166.2 176.269 166.2C169.307 166.2 163.664 160.556 163.664 153.595C163.664 146.633 169.307 140.99 176.269 140.99C183.23 140.99 188.874 146.633 188.874 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M62.8236 195.611C62.8236 202.573 57.1801 208.216 50.2186 208.216C43.257 208.216 37.6135 202.573 37.6135 195.611C37.6135 188.65 43.257 183.006 50.2186 183.006C57.1801 183.006 62.8236 188.65 62.8236 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M104.84 195.611C104.84 202.573 99.197 208.216 92.2354 208.216C85.2738 208.216 79.6304 202.573 79.6304 195.611C79.6304 188.65 85.2738 183.006 92.2354 183.006C99.197 183.006 104.84 188.65 104.84 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M146.857 195.611C146.857 202.573 141.214 208.216 134.252 208.216C127.29 208.216 121.647 202.573 121.647 195.611C121.647 188.65 127.29 183.006 134.252 183.006C141.214 183.006 146.857 188.65 146.857 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M216.696 196.876C218.637 198.84 218.617 202.006 216.653 203.947L197.527 222.839C194.78 225.552 190.355 225.529 187.636 222.787L177.266 212.324C175.322 210.363 175.336 207.197 177.297 205.253C179.258 203.309 182.424 203.323 184.368 205.284L192.63 213.62L209.625 196.832C211.59 194.892 214.755 194.911 216.696 196.876Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M169.538 8H156.974V44.6175L169.538 44.6175V8ZM156.974 0C152.556 0 148.974 3.58172 148.974 7.99999V12.8068H78.3153V8C78.3153 3.58172 74.7335 0 70.3153 0H57.7515C53.3332 0 49.7515 3.58172 49.7515 7.99999V12.8068H12C5.37258 12.8068 0 18.1794 0 24.8068V108.777C0 110.986 1.79086 112.777 4 112.777C6.20914 112.777 8 110.986 8 108.777V77.7627H162.73C164.939 77.7627 166.73 75.9718 166.73 73.7627C166.73 71.5536 164.939 69.7627 162.73 69.7627H8V24.8068C8 22.5976 9.79086 20.8068 12 20.8068H49.7515V44.6175C49.7515 49.0358 53.3332 52.6175 57.7515 52.6175H70.3153C74.7335 52.6175 78.3153 49.0358 78.3153 44.6175V20.8068H148.974V44.6175C148.974 49.0358 152.556 52.6175 156.974 52.6175H169.538C173.956 52.6175 177.538 49.0358 177.538 44.6175V20.8068H214.487C216.696 20.8068 218.487 22.5976 218.487 24.8068V69.7627H181.404C179.195 69.7627 177.404 71.5536 177.404 73.7627C177.404 75.9718 179.195 77.7627 181.404 77.7627H218.487V174.637C212.078 170.481 204.434 168.067 196.227 168.067C173.602 168.067 155.26 186.408 155.26 209.034C155.26 216.458 157.235 223.421 160.689 229.426H12C9.79086 229.426 8 227.636 8 225.426V127.918C8 125.709 6.20914 123.918 4 123.918C1.79086 123.918 0 125.709 0 127.918V225.426C0 232.054 5.37256 237.426 12 237.426H166.695C174.149 245.177 184.625 250 196.227 250C218.852 250 237.193 231.659 237.193 209.034C237.193 198.394 233.137 188.702 226.487 181.419V24.8068C226.487 18.1794 221.115 12.8068 214.487 12.8068H177.538V8C177.538 3.58172 173.956 0 169.538 0H156.974ZM229.193 209.034C229.193 227.24 214.434 242 196.227 242C178.02 242 163.26 227.24 163.26 209.034C163.26 190.827 178.02 176.067 196.227 176.067C214.434 176.067 229.193 190.827 229.193 209.034ZM57.7515 8H70.3153V44.6175L57.7515 44.6175V8Z",
                  fill: "#E5E5E5",
                }),
              ],
            });
          },
          dn = () => {
            const l = D();
            return (0, t.jsxs)("svg", {
              className: (0, v.A)(
                ne().ProgressIconSVG,
                ne().IconGamesPlayed,
                l.IconGamesPlayed,
              ),
              x: "0px",
              y: "0px",
              width: "100px",
              height: "100px",
              viewBox: "0 0 215 215",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M37.6146 37.7144C-0.630497 75.9444 -0.631195 137.928 37.6151 176.159C66.7056 205.238 109.551 212.205 145.234 197.037C147.268 196.173 149.617 197.12 150.481 199.153C151.345 201.186 150.397 203.534 148.364 204.399C109.781 220.8 63.4338 213.28 31.9583 181.817C-9.41226 140.463 -9.41295 73.4128 31.9588 32.0574C33.5213 30.4955 36.0541 30.4957 37.6159 32.0578C39.1777 33.6199 39.1771 36.1525 37.6146 37.7144Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M57.6852 17.4447C56.6914 15.4719 57.4852 13.0669 59.4583 12.0728C99.1749 -7.93684 148.868 -1.37195 182.042 31.7888C223.412 73.143 223.413 140.193 182.041 181.548C180.479 183.11 177.946 183.11 176.384 181.548C174.822 179.986 174.823 177.453 176.385 175.891C214.63 137.661 214.631 75.6779 176.385 37.4467C145.724 6.79791 99.7824 0.714176 63.0573 19.2167C61.0842 20.2108 58.679 19.4174 57.6852 17.4447Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M106.838 188.612C152.036 188.612 188.676 151.986 188.676 106.806C188.676 61.6257 152.036 25 106.838 25C61.6402 25 25 61.6257 25 106.806C25 151.986 61.6402 188.612 106.838 188.612ZM142.994 113.577C148.329 110.499 148.329 102.799 142.994 99.7197L93.9972 71.4425C88.6639 68.3645 81.9984 72.2136 81.9984 78.3714L81.9984 134.926C81.9984 141.084 88.6639 144.933 93.9972 141.855L142.994 113.577Z",
                  fill: "#E5E5E5",
                }),
              ],
            });
          },
          un = () => {
            const l = D();
            return (0, t.jsx)("svg", {
              className: (0, v.A)(
                ne().ProgressIconSVG,
                ne().IconAchievement,
                l.IconAchievement,
              ),
              x: "0px",
              y: "0px",
              width: "100px",
              height: "120px",
              viewBox: "0 0 240 276",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M107.636 23.0644L120.478 8.96963L133.319 23.0644C137.003 27.1077 142.704 28.6353 147.916 26.9756L166.085 21.19L170.159 39.8174C171.327 45.1608 175.501 49.3343 180.844 50.5029L199.472 54.5768L193.686 72.7455C192.026 77.9573 193.554 83.6585 197.597 87.3422L211.692 100.184L197.597 113.026C193.554 116.709 192.026 122.411 193.686 127.622L199.472 145.791L180.844 149.865C175.501 151.034 171.327 155.207 170.159 160.551L166.085 179.178L147.916 173.392C142.704 171.733 137.003 173.26 133.319 177.303L120.478 191.398L107.636 177.303C103.952 173.26 98.251 171.733 93.0392 173.392L74.8705 179.178L70.7966 160.551C69.628 155.207 65.4545 151.034 60.1111 149.865L41.4837 145.791L47.2693 127.622C48.929 122.411 47.4014 116.709 43.3581 113.026L29.2633 100.184L43.3581 87.3422C47.4014 83.6584 48.929 77.9573 47.2693 72.7455L41.4837 54.5768L60.1111 50.5029C65.4545 49.3343 69.628 45.1608 70.7966 39.8174L74.8705 21.19L93.0391 26.9756C98.251 28.6353 103.952 27.1077 107.636 23.0644ZM116.042 1.95909C118.422 -0.653032 122.533 -0.653031 124.913 1.9591L139.233 17.6766C140.812 19.4094 143.255 20.0641 145.489 19.3528L165.749 12.9011C169.116 11.8289 172.676 13.8842 173.431 17.3363L177.974 38.1081C178.475 40.3982 180.263 42.1868 182.553 42.6877L203.325 47.2305C206.777 47.9855 208.833 51.5454 207.76 54.9125L201.309 75.1729C200.598 77.4065 201.252 79.8499 202.985 81.4286L218.703 95.7488C221.315 98.1287 221.315 102.239 218.703 104.619L202.985 118.939C201.252 120.518 200.598 122.961 201.309 125.195L207.76 145.455C208.833 148.823 206.777 152.382 203.325 153.137L190.801 155.876L239.847 236.34C242.331 240.415 239.521 245.659 234.753 245.849L206.74 246.963C204.683 247.045 202.798 248.133 201.698 249.874L186.727 273.576C184.178 277.611 178.232 277.422 175.945 273.234L131.275 191.426L124.913 198.409C122.533 201.021 118.422 201.021 116.042 198.409L109.564 191.298L64.8244 273.234C62.5373 277.422 56.5913 277.611 54.0427 273.576L39.0711 249.874C37.9718 248.133 36.0867 247.045 34.0298 246.963L6.01687 245.849C1.24829 245.659 -1.56099 240.415 0.922882 236.34L49.9904 155.841L37.63 153.137C34.1779 152.382 32.1226 148.823 33.1948 145.455L39.6465 125.195C40.3578 122.961 39.7031 120.518 37.9703 118.939L22.2528 104.619C19.6407 102.239 19.6407 98.1286 22.2528 95.7487L37.9703 81.4286C39.7031 79.8499 40.3578 77.4065 39.6465 75.1729L33.1948 54.9125C32.1226 51.5454 34.1779 47.9855 37.63 47.2305L58.4018 42.6877C60.6919 42.1868 62.4805 40.3982 62.9814 38.1081L67.5242 17.3363C68.2792 13.8842 71.8391 11.8289 75.2062 12.9011L95.4666 19.3528C97.7002 20.0641 100.144 19.4094 101.722 17.6766L116.042 1.95909ZM58.2574 157.649L9.29666 237.973L34.3478 238.969C39.0346 239.156 43.3299 241.636 45.8348 245.601L59.2235 266.798L103.865 185.043L101.722 182.691C100.144 180.959 97.7002 180.304 95.4666 181.015L75.2062 187.467C71.8391 188.539 68.2792 186.484 67.5242 183.032L62.9814 162.26C62.4805 159.97 60.6919 158.181 58.4018 157.68L58.2574 157.649ZM136.974 185.17L181.546 266.798L194.935 245.601C197.44 241.636 201.735 239.156 206.422 238.969L231.473 237.973L182.534 157.684C180.253 158.191 178.473 159.976 177.974 162.26L173.431 183.032C172.676 186.484 169.116 188.539 165.749 187.467L145.489 181.015C143.255 180.304 140.812 180.959 139.233 182.691L136.974 185.17ZM146.738 53.2766C121.119 38.4858 88.3612 47.2633 73.5704 72.8818C62.3219 92.3648 64.7011 115.986 77.7705 132.691C79.1317 134.431 78.8247 136.945 77.0848 138.307C75.3449 139.668 72.8309 139.361 71.4697 137.621C56.4587 118.434 53.7068 91.2865 66.6422 68.8818C83.6422 39.437 121.293 29.3484 150.738 46.3484C152.651 47.453 153.307 49.8993 152.202 51.8125C151.097 53.7257 148.651 54.3812 146.738 53.2766ZM167.979 60.9959C166.588 59.2794 164.069 59.0153 162.353 60.406C160.636 61.7967 160.372 64.3156 161.763 66.032C175.326 82.7723 177.936 106.79 166.527 126.551C151.737 152.169 118.978 160.947 93.3599 146.156C91.4467 145.051 89.0003 145.707 87.8957 147.62C86.7912 149.533 87.4467 151.98 89.3599 153.084C118.805 170.084 156.456 159.996 173.456 130.551C186.575 107.827 183.558 80.2246 167.979 60.9959Z",
                fill: "#E5E5E5",
              }),
            });
          };
        function gn(l) {
          const { userYearInReview: n } = l,
            s = D();
          return (0, t.jsx)(Bt, {
            className: (0, v.A)(i().TopHonorsSection, s.TopHonorsSection),
            children: (0, t.jsx)("div", {
              className: (0, v.A)(
                i().YearInReviewContent,
                i().TopHonorsContent,
              ),
              children: (0, t.jsxs)("div", {
                className: ne().TopHonorsCtn,
                children: [
                  (0, t.jsx)(hn, { userYearInReview: n }),
                  (0, t.jsxs)("div", {
                    className: ne().SpiderAndNumbersCnt,
                    children: [
                      (0, t.jsx)(Bn, { userYearInReview: n }),
                      (0, t.jsx)(xn, { userYearInReview: n }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function hn(l) {
          let { userYearInReview: n } = l;
          const s = n.GetYear(),
            a = I(),
            c = D();
          let u = n.GetPlayTimeStats().summary_stats?.total_achievements || 0,
            h = n.GetFilteredGameSummary()?.length || 0,
            g =
              n.GetPlayTimeStats().playtime_streak?.longest_consecutive_days ||
              0,
            p = n.GetPlayTimeStats().by_numbers?.achievements_pct || 0,
            B = n.GetPlayTimeStats().by_numbers?.games_played_pct || 0,
            b = n.GetPlayTimeStats().by_numbers?.game_streak_pct || 0,
            W = g > 0 && b > 0 && br.iA.country_code.toLowerCase() !== "cn";
          p >= 99 && (p = 100),
            B >= 99 && (B = 100),
            b >= 99 && (b = 100),
            u == n.GetPlayTimeStats().by_numbers?.achievements_avg && (p = 50),
            h == n.GetPlayTimeStats().by_numbers?.games_played_avg && (B = 50),
            g == n.GetPlayTimeStats().by_numbers?.game_streak_avg && (b = 50),
            u == 0 && (p = 0),
            h == 0 && (B = 0),
            g == 0 && (b = 0);
          const [G, J] = m.useState(!1),
            [te, le] = m.useState(!1),
            [Me, We] = m.useState(!1),
            dt = m.useCallback(async (pt) => {
              pt && (J(!0), le(!0), We(!0));
            }, []),
            Ce = (0, t.jsx)(zt, {
              endValue: u,
              maxValue: (u * 100) / p,
              duration: 2e3,
              startAnimation: G,
              delay: 500,
            }),
            Se = (0, t.jsx)(zt, {
              endValue: h,
              maxValue: (h * 100) / B,
              duration: 2e3,
              startAnimation: te,
              delay: 700,
            }),
            ht = (0, t.jsx)(zt, {
              endValue: g,
              maxValue: (g * 100) / b,
              duration: 2e3,
              startAnimation: Me,
              delay: 900,
            });
          return (0, t.jsxs)("div", {
            className: (0, v.A)(
              ne().PlayBehaviorContainer,
              c.PlayBehaviorContainer,
            ),
            children: [
              (0, t.jsx)("div", {
                className: i().SectionTitle,
                children: a("#YIR_Compare_Title_Label"),
              }),
              (0, t.jsx)("div", {
                className: (0, v.A)(
                  i().SectionSubTitle,
                  ne().PlayBehaviorSectionSubTitle,
                ),
                children: a("#YIR_Compare_Subtitle_Label"),
              }),
              (0, t.jsxs)(Wt.J, {
                onVisibilityChange: dt,
                children: [
                  (0, t.jsx)(lr, {
                    progressLabel: a(
                      u == 1
                        ? "#YIR_Compare_PlayerProgress_Achievements_Single"
                        : "#YIR_Compare_PlayerProgress_Achievements_Label",
                      Ce,
                    ),
                    userPercent: p,
                    steamAverage:
                      n.GetPlayTimeStats().by_numbers?.achievements_avg,
                    progressIcon: (0, t.jsx)(un, {}),
                  }),
                  (0, t.jsx)(lr, {
                    progressLabel: a(
                      h == 1
                        ? "#YIR_Compare_PlayerProgress_PlayedGames_Single"
                        : "#YIR_Compare_PlayerProgress_PlayedGames_Label",
                      Se,
                    ),
                    userPercent: B,
                    steamAverage:
                      n.GetPlayTimeStats().by_numbers?.games_played_avg,
                    progressIcon: (0, t.jsx)(dn, {}),
                  }),
                  W &&
                    (0, t.jsx)(lr, {
                      progressLabel: a(
                        g == 1
                          ? "#YIR_Compare_PlayerProgress_LongestStreak_Single"
                          : "#YIR_Compare_PlayerProgress_LongestStreak_Label",
                        ht,
                      ),
                      userPercent: b,
                      steamAverage:
                        n.GetPlayTimeStats().by_numbers?.game_streak_avg,
                      progressIcon: (0, t.jsx)(mn, {}),
                    }),
                ],
              }),
              (0, t.jsx)("div", {
                className: ne().PlayNewnessContainer,
                children: (0, t.jsx)(vn, { userYearInReview: n }),
              }),
            ],
          });
        }
        function lr(l) {
          let {
            progressLabel: n,
            steamAverage: s,
            progressIcon: a,
            userPercent: c,
          } = l;
          const u = D();
          return (
            (c = y.OQ(c, 0, 100)),
            (0, t.jsxs)(Bt, {
              className: ne().PlayerBehaviorProgressCnt,
              children: [
                (0, t.jsx)("div", {
                  className: ne().ProgressIcon,
                  children: a,
                }),
                (0, t.jsxs)("div", {
                  className: ne().ProgressRightSide,
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, v.A)(ne().ProgressLabel, u.ProgressLabel),
                      children: n,
                    }),
                    (0, t.jsx)("div", {
                      className: ne().ProgressBar,
                      children: (0, t.jsx)("div", {
                        className: ne().ProgressBarWrapper,
                        children: (0, t.jsx)("div", {
                          className: (0, v.A)(
                            ne().ProgressBarFilled,
                            u.ProgressBarFilled,
                            u.ProgressBarFilledGradient,
                          ),
                          style: {
                            clipPath:
                              "polygon(0% 0, " +
                              c +
                              "% 0%, " +
                              c +
                              "% 100%, 0% 100%)",
                          },
                          children: (0, t.jsxs)("div", {
                            className: ne().GlitterBox,
                            children: [
                              (0, t.jsx)("div", { className: ne().Glitter }),
                              (0, t.jsx)("div", {
                                className: (0, v.A)(
                                  ne().Glitter,
                                  ne().GlitterSecond,
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: ne().ProgressLabelsCnt,
                      children:
                        s &&
                        (0, t.jsx)("div", {
                          className: ne().ProgressSteamAvgLabel,
                          children: (0, f.we)(
                            "#YIR_Compare_PlayerProgress_Steam_Avg",
                            s,
                          ),
                        }),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var fn = ((l) => (
          (l.NewActive = "NewActive"),
          (l.UsedActive = "UsedActive"),
          (l.OldActive = "OldActive"),
          l
        ))(fn || {});
        const pn = {
          NewActive: "#YIR_Compare_NewGames_Flavor",
          UsedActive: "#YIR_Compare_ComfortGames_Flavor",
          OldActive: "#YIR_Compare_OldGames_Flavor",
        };
        function vn(l) {
          const { userYearInReview: n } = l,
            s = n.GetYear(),
            a = D(),
            c = a.new_games_color,
            u = a.used_games_color,
            h = a.old_games_color,
            [g, p] = (0, m.useState)("NewActive"),
            B = I(),
            b = n.GetGlobalGameplayDistribition(),
            W = {
              NewActive: b?.new_releases || 0,
              UsedActive: b?.recent_releases || 0,
              OldActive: b?.classic_releases || 0,
            },
            G = b && b.new_releases ? b.recent_cutoff_year : 7,
            J = G + 1;
          let [te, le, Me] = m.useMemo(() => {
            let ht = n.GetGameAgeCounts([1, J]),
              pt = ht.reduce((yt, Lt) => Lt + yt, 0);
            if (pt == 0) return [0, 0, 0];
            let wt = ht.map((yt) => Math.floor((yt * 100) / pt)),
              Et = 100 - wt.reduce((yt, Lt) => Lt + yt, 0),
              It = ht.map((yt, Lt) => ({
                decimal: ((yt * 100) / pt) % 1,
                index: Lt,
              }));
            for (
              It = It.sort((yt, Lt) => yt.decimal - Lt.decimal);
              Et > 0 && It.length > 0;
            ) {
              let yt = It.pop();
              (wt[yt.index] += 1), (Et -= 1);
            }
            return wt;
          }, [n, J]);
          const We = { NewActive: te, UsedActive: le, OldActive: Me },
            dt = {
              NewActive: B("#YIR_Compare_NewGames_Desc_User", s),
              UsedActive: B("#YIR_Compare_ComfortGames_Desc_User", G),
              OldActive: B("#YIR_Compare_OldGames_Desc_User", J),
            },
            Ce = {
              NewActive: (0, f.we)("#YIR_Compare_NewGames_Desc_AvgSteam", s),
              UsedActive: (0, f.we)(
                "#YIR_Compare_ComfortGames_Desc_AvgSteam",
                G,
              ),
              OldActive: (0, f.we)("#YIR_Compare_OldGames_Desc_AvgSteam", J),
            },
            Se = (0, m.useMemo)(() => {
              const ht = new Array();
              return (
                ht.push({ name: "new", value: te > 0 ? te : 1 }),
                ht.push({ name: "used", value: le > 0 ? le : 1 }),
                ht.push({ name: "old", value: Me > 0 ? Me : 1 }),
                ht
              );
            }, [te, le, Me]);
          return (0, t.jsxs)("div", {
            className: (0, v.A)(
              ne().GameNewnessComparisonContainer,
              ne()[g],
              a[g],
            ),
            children: [
              (0, t.jsx)("div", {
                className: (0, v.A)(ne().GameNewnessTitle, a.GameNewnessTitle),
                children: (0, f.PP)(
                  "#YIR_Compare_Flavor_Title",
                  (0, t.jsx)("div", {}),
                ),
              }),
              (0, t.jsxs)("div", {
                className: ne().GameNewnessDataCnt,
                children: [
                  (0, t.jsx)("div", {
                    className: ne().WheelChart,
                    children: (0, t.jsx)(Ut.u, {
                      width: "100%",
                      height: "100%",
                      aspect: 1,
                      children: (0, t.jsx)(ar.r, {
                        children: (0, t.jsxs)(or.F, {
                          data: Se,
                          dataKey: "value",
                          nameKey: "name",
                          cx: "50%",
                          cy: "50%",
                          innerRadius: "48%",
                          outerRadius: "92%",
                          fill: "#8884d8",
                          paddingAngle: 3,
                          minAngle: 2,
                          startAngle: 45,
                          endAngle: 405,
                          children: [
                            (0, t.jsx)(
                              Qt.f,
                              {
                                onMouseEnter: () => p("NewActive"),
                                className: (0, v.A)(
                                  ne().WheelArc,
                                  g === "NewActive" && ne().Active,
                                ),
                                fill: c,
                                style:
                                  g === "NewActive"
                                    ? { opacity: "1" }
                                    : { opacity: "0.75" },
                              },
                              "cell-1",
                            ),
                            (0, t.jsx)(
                              Qt.f,
                              {
                                onMouseEnter: () => p("UsedActive"),
                                className: (0, v.A)(
                                  ne().WheelArc,
                                  g === "UsedActive" && ne().Active,
                                ),
                                fill: u,
                                style:
                                  g === "UsedActive"
                                    ? { opacity: "1" }
                                    : { opacity: "0.75" },
                              },
                              "cell-2",
                            ),
                            (0, t.jsx)(
                              Qt.f,
                              {
                                onMouseEnter: () => p("OldActive"),
                                className: (0, v.A)(
                                  ne().WheelArc,
                                  g === "OldActive" && ne().Active,
                                ),
                                fill: h,
                                style:
                                  g === "OldActive"
                                    ? { opacity: "1" }
                                    : { opacity: "0.75" },
                              },
                              "cell-3",
                            ),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: ne().RightSideContainer,
                    children: (0, t.jsxs)("div", {
                      className: ne().DataBoxesContainer,
                      children: [
                        (0, t.jsxs)("div", {
                          className: (0, v.A)(
                            ne().UserData,
                            a.UserData,
                            ne().DataBox,
                            a.DataBox,
                            a.Background,
                          ),
                          children: [
                            (0, t.jsx)("div", {
                              className: (0, v.A)(
                                ne().DataBoxArrow,
                                a.DataBoxArrow,
                                a.Background,
                              ),
                            }),
                            (0, t.jsxs)("div", {
                              className: (0, v.A)(
                                ne().PercentageLabel,
                                a.PercentageLabel,
                                a.Color,
                              ),
                              children: [
                                (0, f.we)("#YIR_Compare_Percentage", We[g]),
                                (0, t.jsx)("div", {
                                  className: ne().FlavorLabel,
                                  children: (0, f.we)(pn[g]),
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: (0, v.A)(
                                ne().PercentageDescriptionLabel,
                                a.PercentageDescriptionLabel,
                                a.Color,
                              ),
                              children: dt[g],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: (0, v.A)(
                            ne().SteamData,
                            a.SteamData,
                            ne().DataBox,
                            a.DataBox,
                            a.Border,
                          ),
                          children: [
                            (0, t.jsx)("div", {
                              className: (0, v.A)(
                                ne().PercentageLabel,
                                a.PercentageLabel,
                                a.Color,
                              ),
                              children: (0, f.we)(
                                "#YIR_Compare_Percentage",
                                W[g],
                              ),
                            }),
                            (0, t.jsx)("div", {
                              className: (0, v.A)(
                                ne().PercentageDescriptionLabel,
                                a.PercentageDescriptionLabel,
                                a.Color,
                              ),
                              children: Ce[g],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Bn(l) {
          const { userYearInReview: n } = l,
            s = n.GetUserAggregateTagData(),
            { data: a } = (0, cn.Fv)(br.TS.LANGUAGE),
            c = I(),
            u = D(),
            h = (0, xr.Ae)(),
            g = window.innerWidth <= 300,
            p = s.map((W) => W.nPreSelectionWeight).sort((W, G) => G - W);
          let B = s.map((W, G) => {
            const J = p.findIndex((te) => te - W.nPreSelectionWeight < 1e-5);
            return { subject: a && a[W.nTagId], A: (6 - J) * 10 + 2 * G + 0.5 };
          });
          if (B.length == 0) return null;
          const b = B.map((W, G) =>
            (0, t.jsx)("li", { children: W.subject }, G),
          );
          return (0, t.jsxs)("div", {
            className: (0, v.A)(
              ne().SpidergraphContainer,
              ne().HalfwidthColumn,
            ),
            children: [
              (0, t.jsx)("div", {
                className: ne().SectionLabel,
                children: (0, f.we)("#YIR_Spider_Title"),
              }),
              (0, t.jsx)("div", {
                className: (0, v.A)(ne().SectionDesc, u.SectionDesc),
                children: c("#YIR_Spider_Desc", n.GetYear()),
              }),
              (0, t.jsx)("div", {
                className: ne().GraphBox,
                children: (0, t.jsx)(Ut.u, {
                  className: ne().SpiderResponsiveContainer,
                  children: (0, t.jsxs)(sn.V, {
                    cx: "50%",
                    cy: "50%",
                    outerRadius: "70%",
                    data: B,
                    children: [
                      (0, t.jsx)(an.z, {}),
                      (0, t.jsx)(on.r, {
                        tick: (0, t.jsx)(yn, {}),
                        dataKey: "subject",
                      }),
                      (0, t.jsx)(ln.V, {
                        name: "tempRadar",
                        dataKey: "A",
                        stroke: "#8884d8",
                        fill: "#8884d8",
                        fillOpacity: 1,
                        animationDuration: 2e3,
                        isAnimationActive: !0,
                      }),
                    ],
                  }),
                }),
              }),
              (h || g) &&
                (0, t.jsxs)("ol", {
                  className: ne().RadarChartLegend,
                  children: [" ", b, " "],
                }),
            ],
          });
        }
        function yn(l) {
          const { payload: n, x: s, ...a } = l,
            c = (0, xr.Ae)(),
            u = window.innerWidth <= 300;
          return c || u
            ? (0, t.jsx)("text", {
                x: s,
                ...a,
                children: (0, t.jsx)("tspan", {
                  x: s,
                  dy: "20px",
                  children: n.index + 1,
                }),
              })
            : (0, t.jsx)("svg", {
                x: s - 85,
                ...a,
                width: "170px",
                height: "100%",
                children: (0, t.jsx)("foreignObject", {
                  className: ne().RadarTextContainer,
                  dy: "20px",
                  width: "170",
                  height: "150",
                  children: (0, t.jsx)("div", {
                    className: ne().RadarText,
                    children: n.value,
                  }),
                }),
              });
        }
        function bn(l) {
          let n = l.GetRawStats().playtime_stats?.by_numbers;
          return n
            ? [
                ["#YIR_ByTheNum_Friends", n.friends_added || 0],
                ["#YIR_ByTheNum_GiftsSent", n.gifts_sent || 0],
                ["#YIR_ByTheNum_AwardsGiven", n.loyalty_reactions || 0],
                ["#YIR_ByTheNum_Badges", n.badges_earned || 0],
                ["#YIR_ByTheNum_Screenshots", n.screenshots_shared || 0],
                ["#YIR_ByTheNum_Reviews", n.written_reviews || 0],
                ["#YIR_ByTheNum_Posts", n.forum_posts || 0],
                ["#YIR_ByTheNum_Guides", n.guides_submitted || 0],
                ["#YIR_ByTheNum_GuideSubs", n.guide_subscribers || 0],
                ["#YIR_ByTheNum_Workshops", n.workshop_contributions || 0],
                [
                  "#YIR_ByTheNum_WorkshopSubscribers",
                  n.workshop_subscribers || 0,
                ],
                [
                  "#YIR_ByTheNum_WorkshopSubscriptions",
                  n.workshop_subscriptions || 0,
                ],
              ].sort((a, c) => c[1] - a[1])
            : [];
        }
        function xn(l) {
          const { userYearInReview: n } = l;
          let s = bn(n);
          if (s.length == 0) return null;
          let a = s.map(([c, u]) =>
            (0, t.jsx)(wn, { label: (0, f.we)(c), value: u }, c),
          );
          return (0, t.jsxs)("div", {
            className: (0, v.A)(ne().NumbersContainer, ne().HalfwidthColumn),
            children: [
              (0, t.jsx)("div", {
                className: ne().SectionLabel,
                children: (0, f.we)("#YIR_ByTheNum_Title"),
              }),
              (0, t.jsx)("div", {
                className: ne().NumbersRowsCnt,
                children: a,
              }),
            ],
          });
        }
        function wn(l) {
          let { label: n, value: s } = l,
            a = s ? (0, wr.D)(s) : "-";
          return (0, t.jsxs)("div", {
            className: (0, v.A)(ne().NumbersRow, s == 0 && ne().Disabled),
            children: [
              (0, t.jsx)("div", { className: ne().NumbersLabel, children: n }),
              (0, t.jsx)("div", { className: ne().FillerDots }),
              (0, t.jsx)("div", { className: ne().NumbersValue, children: a }),
            ],
          });
        }
        class kt {
          m_SteamInterface = null;
          async LoadFriendsSharedYearInReview(n, s) {
            const a = r.w.Init(M.iL),
              c = x.b.InitFromAccountID(n);
            a.Body().set_year(s),
              a.Body().set_steamid(c.ConvertTo64BitString()),
              a.Body().set_return_private(d.iA.is_support);
            const u = await M.Nl.GetFriendsSharedYearInReview(
              this.m_SteamInterface.GetServiceTransport(),
              a,
            );
            if (u.GetEResult() != we.R)
              throw "error friend sharing information " + u.GetEResult();
            return u
              .Body()
              .friend_shares()
              .map((h) => h.toObject());
          }
          static s_Singleton;
          static Get() {
            return (
              kt.s_Singleton ||
                ((kt.s_Singleton = new kt()), kt.s_Singleton.Init()),
              kt.s_Singleton
            );
          }
          constructor() {}
          Init() {
            this.m_SteamInterface = (0, T.P)();
          }
        }
        function jn(l, n) {
          const { data: s, isLoading: a } = (0, q.I)({
            queryKey: ["SharedFriendYearInReviews", l, n],
            queryFn: () => kt.Get().LoadFriendsSharedYearInReview(l, n),
          });
          return { rgFriendAccounts: a ? null : s, isLoading: a };
        }
        var Mn = o(59490),
          cr = o(64377),
          Ot = o(66599),
          An = o(4874),
          Rt = o(24660);
        function In(l) {
          const { userYearInReview: n } = l;
          return d.iA.is_support || d.iA.accountid == n.GetAccountID()
            ? (0, t.jsxs)(cr.K, {
                rootMargin: "0px 0px 100% 0px",
                children: [
                  (0, t.jsx)(Tn, {
                    accountID: n.GetAccountID(),
                    year: n.GetYear(),
                  }),
                  (0, t.jsx)(Nn, {
                    accountID: n.GetAccountID(),
                    year: n.GetYear(),
                  }),
                ],
              })
            : null;
        }
        function Tn(l) {
          const { accountID: n, year: s } = l,
            a = (0, m.useMemo)(
              () => x.b.InitFromAccountID(n).ConvertTo64BitString(),
              [n],
            ),
            c = (0, An.N0)(a, !0);
          if (c.isLoading || c.data?.is_not_member_of_any_group()) return null;
          const u = c.data
            .family_group()
            .members()
            .map((h) => new x.b(h.steamid()))
            .filter((h) => h.GetAccountID() != n);
          return u.length == 0
            ? null
            : (0, t.jsxs)("div", {
                className: Ot.FriendsSharedSection,
                children: [
                  (0, t.jsx)("div", {
                    className: Ot.FriendsSharedSectionTitle,
                    children: (0, f.we)("#YIR_FamilyShared"),
                  }),
                  (0, t.jsx)("div", {
                    className: Ot.FriendsGrid,
                    children: u.map((h) =>
                      (0, t.jsx)(
                        Mr,
                        {
                          strSteamid: h.ConvertTo64BitString(),
                          year: s,
                          ePrivacy: M.hb.QB,
                          bPrivacyOverride: !1,
                        },
                        "family_" + h,
                      ),
                    ),
                  }),
                ],
              });
        }
        const jr = 50;
        function Nn(l) {
          const { accountID: n, year: s } = l,
            { isLoading: a, rgFriendAccounts: c } = jn(n, s),
            u = (0, m.useMemo)(
              () =>
                c?.length > 0
                  ? [...c]
                      .sort(
                        (B, b) => b.rt_privacy_updated - B.rt_privacy_updated,
                      )
                      .slice(0, jr)
                  : [],
              [c],
            ),
            h = (0, m.useMemo)(
              () => u.map((B) => new x.b(B.steamid).GetAccountID()),
              [u],
            ),
            g = (0, et.B3)(h);
          if (a || h?.length == 0 || !g) return null;
          const p = new Map();
          return (
            g
              .filter(Boolean)
              .forEach((B) => p.set(B.steamid, B.persona_name || "")),
            u.sort((B, b) => p.get(B.steamid).localeCompare(p.get(b.steamid))),
            (0, t.jsxs)("div", {
              className: Ot.FriendsSharedSection,
              children: [
                (0, t.jsx)("div", {
                  className: Ot.FriendsSharedSectionTitle,
                  children: (0, f.we)("#YIR_FriendShared"),
                }),
                (0, t.jsx)(jt.Z, {
                  className: Ot.FriendsGrid,
                  "flow-children": "grid",
                  children: u
                    .slice(0, jr)
                    .map((B) =>
                      (0, t.jsx)(
                        Mr,
                        {
                          strSteamid: B.steamid,
                          ePrivacy: B.privacy_state,
                          year: s,
                          bPrivacyOverride: B.privacy_override,
                        },
                        "friendshare_" + B.steamid + "_" + s,
                      ),
                    ),
                }),
                !!d.iA.is_support &&
                  (0, t.jsx)("div", {
                    className: tt.ValveOnlyBackground,
                    children: (0, f.we)("#YIR_FriendShared_support"),
                  }),
              ],
            })
          );
        }
        function Mr(l) {
          const { strSteamid: n, year: s, ePrivacy: a } = l,
            c = new x.b(n),
            u = D();
          return (0, t.jsx)(Rt.Ii, {
            href: `${d.TS.STORE_BASE_URL}replay/${c.ConvertTo64BitString()}/${s}`,
            className: (0, v.A)({
              [Ot.IsPrivate]: a == M.hb.ym,
              [Ot.FriendCtn]: !0,
              [u.FriendCtn]: !0,
            }),
            children: (0, t.jsx)(Mn.p, {
              accountID: c.GetAccountID(),
              bHideWhenNotAvailable: !0,
              bLink: !1,
            }),
          });
        }
        var En = o(9519),
          Ln = o(59848),
          Dt = o.n(Ln),
          Jt = o(30230),
          Ar = o(75620);
        const Tt = 100;
        var Pn = ((l) => (
          (l.windows = "windows"),
          (l.linux = "linux"),
          (l.deck = "deck"),
          (l.mac = "mac"),
          (l.vr = "vr"),
          l
        ))(Pn || {});
        function On(l) {
          const { userYearInReview: n } = l,
            s = n.GetPlayTimeStats().total_stats,
            a = n.GetPlayTimeStats().game_summary,
            c = I(),
            u = D(),
            h = (0, m.useMemo)(() => {
              const B = new Array();
              return (
                s.windows_playtime_percentagex100 > Tt &&
                  B.push({
                    id: "windows",
                    name: (0, f.we)("#YIR_Platfrom_windows"),
                    value: s.windows_playtime_percentagex100,
                  }),
                s.linux_playtime_percentagex100 > Tt &&
                  B.push({
                    id: "linux",
                    name: (0, f.we)("#YIR_Platfrom_linux"),
                    value: s.linux_playtime_percentagex100,
                  }),
                s.macos_playtime_percentagex100 > Tt &&
                  B.push({
                    id: "mac",
                    name: (0, f.we)("#YIR_Platfrom_macos"),
                    value: s.macos_playtime_percentagex100,
                  }),
                s.vr_playtime_percentagex100 > Tt &&
                  B.push({
                    id: "vr",
                    name: (0, f.we)("#YIR_Platfrom_vr"),
                    value: s.vr_playtime_percentagex100,
                  }),
                s.deck_playtime_percentagex100 > Tt &&
                  B.push({
                    id: "deck",
                    name: (0, f.we)("#YIR_Platfrom_deck"),
                    value: s.deck_playtime_percentagex100,
                  }),
                B
              );
            }, [s]),
            g = (0, m.useMemo)(() => {
              const B = new Array();
              return (
                s.windows_playtime_percentagex100 > Tt &&
                  B.push({
                    id: "windows",
                    name: (0, f.we)("#YIR_Platfrom_windows"),
                    value: a.filter((b) => b.played_windows).length,
                  }),
                s.linux_playtime_percentagex100 > Tt &&
                  B.push({
                    id: "linux",
                    name: (0, f.we)("#YIR_Platfrom_linux"),
                    value: a.filter((b) => b.played_linux).length,
                  }),
                s.macos_playtime_percentagex100 > Tt &&
                  B.push({
                    id: "mac",
                    name: (0, f.we)("#YIR_Platfrom_macos"),
                    value: a.filter((b) => b.played_mac).length,
                  }),
                s.vr_playtime_percentagex100 > Tt &&
                  B.push({
                    id: "vr",
                    name: (0, f.we)("#YIR_Platfrom_vr"),
                    value: a.filter((b) => b.played_vr).length,
                  }),
                s.deck_playtime_percentagex100 > Tt &&
                  B.push({
                    id: "deck",
                    name: (0, f.we)("#YIR_Platfrom_deck"),
                    value: a.filter((b) => b.played_deck).length,
                  }),
                B
              );
            }, [s, a]);
          if (h.length < 2) return null;
          const p = Ir(s);
          return (0, t.jsx)(Bt, {
            className: (0, v.A)(ye().PlatformChartsCtn, u.PlatformChartsCtn),
            children: (0, t.jsxs)("div", {
              className: (0, v.A)(
                i().YearInReviewContent,
                ye().PlatformSpacing,
              ),
              children: [
                (0, t.jsx)("div", {
                  className: i().SectionTitle,
                  children: c("#YIR_Platform"),
                }),
                (0, t.jsxs)("div", {
                  className: ye().PlatformChartsRow,
                  children: [
                    (0, t.jsxs)("div", {
                      className: ye().PieCtn,
                      children: [
                        (0, t.jsx)("div", {
                          className: ye().GraphTitle,
                          children: (0, f.we)("#YIR_Platfrom_playtime"),
                        }),
                        (0, t.jsx)(Ut.u, {
                          width: "90%",
                          aspect: 1,
                          children: (0, t.jsxs)(ar.r, {
                            children: [
                              (0, t.jsx)(or.F, {
                                data: h,
                                dataKey: "value",
                                nameKey: "name",
                                cx: "50%",
                                cy: "50%",
                                innerRadius: "40%",
                                outerRadius: "80%",
                                fill: "#8884d8",
                                paddingAngle: 1,
                                children: h.map((B, b) =>
                                  (0, t.jsx)(
                                    Qt.f,
                                    { fill: u[`pie_${B.id}`] },
                                    `cell-${b}`,
                                  ),
                                ),
                              }),
                              (0, t.jsx)(Jt.m, { content: (0, t.jsx)(Dn, {}) }),
                              (0, t.jsx)(Ar.s, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: ye().PieCtn,
                      children: [
                        (0, t.jsx)("div", {
                          className: ye().GraphTitle,
                          children: (0, f.we)("#YIR_Platfrom_games"),
                        }),
                        (0, t.jsx)(Ut.u, {
                          width: "90%",
                          aspect: 1,
                          children: (0, t.jsxs)(ar.r, {
                            children: [
                              (0, t.jsx)(or.F, {
                                data: g,
                                dataKey: "value",
                                nameKey: "name",
                                cx: "50%",
                                cy: "50%",
                                innerRadius: "40%",
                                outerRadius: "80%",
                                fill: "#82ca9d",
                                paddingAngle: 1,
                                children: g.map((B, b) =>
                                  (0, t.jsx)(
                                    Qt.f,
                                    { fill: u[`pie_${B.id}`] },
                                    `cell-${b}`,
                                  ),
                                ),
                              }),
                              (0, t.jsx)(Jt.m, { content: (0, t.jsx)(Sn, {}) }),
                              (0, t.jsx)(Ar.s, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (p.bDeck || p.bVR) &&
                  (0, t.jsx)("div", {
                    className: (0, v.A)(
                      i().SectionTitle,
                      ye().PlatformDetailsSetup,
                    ),
                    children: c("#YIR_Platform_DiveIn"),
                  }),
              ],
            }),
          });
        }
        function Dn(l) {
          const { active: n, payload: s } = l;
          if (n && s && s.length) {
            const a = s[0].value;
            return (0, t.jsxs)(Pt.t1, {
              children: [
                s[0].name,
                ": ",
                (0, f.we)("#YIR_Percent_Playtime", j(a)),
              ],
            });
          }
          return null;
        }
        function Sn(l) {
          const { active: n, payload: s } = l;
          if (n && s && s.length) {
            const a = s[0].value,
              c = s[0].name;
            return (0, t.jsx)(Pt.t1, {
              children: (0, f.E3)(
                "#YIR_Platfrom_gamesplays_tooltip",
                a,
                (0, Be.Dq)(a),
                c,
              ),
            });
          }
          return null;
        }
        const $t = 100;
        function _n(l) {
          const { userYearInReview: n } = l;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(On, { userYearInReview: n }),
              (0, t.jsx)(zn, { userYearInReview: n }),
            ],
          });
        }
        function Wn(l) {
          const { userYearInReview: n, strClassName: s, nYear: a } = l,
            c = n.GetRawStats(),
            u = I(),
            h = void 0,
            g = u("#YIR_TopGames_deck_subtitle"),
            {
              nTotalGames: p,
              nTotalSessions: B,
              nTotalPercentage: b,
            } = (0, m.useMemo)(() => me(c, "deck"), [c]),
            { rgResults: W } = (0, m.useMemo)(() => N(n, "deck", 5, b), [n, b]),
            G = Number(Math.round(b / 100).toFixed(0));
          let J = u("#YIR_TopGames_deck_new");
          G > 50 && (J = u("#YIR_TopGames_deck_mostly"));
          const te = (0, m.useRef)(null),
            le = (0, He.wY)((wt) => {
              te.current &&
                te.current.style.setProperty(
                  "--contentSize",
                  `${wt.contentRect.width}px`,
                );
            }),
            [Me, We] = m.useState(!1),
            dt = m.useCallback((wt) => {
              wt && We(!0);
            }, []),
            Ce = (0, t.jsx)(zt, {
              endValue: p,
              duration: 2e3,
              startAnimation: Me,
            }),
            Se = (0, t.jsx)(zt, {
              endValue: B,
              duration: 2e3,
              startAnimation: Me,
            }),
            ht = (0, t.jsx)(zt, {
              endValue: G,
              duration: 2e3,
              startAnimation: Me,
            }),
            pt = (0, m.useRef)(null);
          return (
            (0, En.q)(pt),
            (0, t.jsxs)("div", {
              className: (0, v.A)(
                s,
                xe().PlatformContentsCtn,
                Dt().DeckContainer,
              ),
              ref: te,
              children: [
                (0, t.jsx)("div", {
                  className: (0, v.A)(xe().SectionTitle, Dt().SectionTitle),
                  children: J,
                }),
                (0, t.jsxs)("div", {
                  className: Dt().ScreenContainer,
                  ref: le,
                  children: [
                    (0, t.jsxs)("div", {
                      className: Dt().PlatformDataContainer,
                      children: [
                        (0, t.jsxs)(Wt.J, {
                          onVisibilityChange: dt,
                          className: (0, v.A)(
                            i().YearInReviewContent,
                            xe().StatsRow,
                            Dt().StatsRow,
                          ),
                          children: [
                            (0, t.jsxs)("div", {
                              className: xe().StatBlock,
                              children: [
                                (0, t.jsx)("div", {
                                  className: xe().BigNum,
                                  children: Ce,
                                }),
                                (0, t.jsx)("div", {
                                  className: xe().StatDescription,
                                  children: (0, f.Yp)("#YIR_NewLine_Games", p),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: xe().StatBlock,
                              children: [
                                (0, t.jsx)("div", {
                                  className: xe().BigNum,
                                  children: Se,
                                }),
                                (0, t.jsx)("div", {
                                  className: xe().StatDescription,
                                  children: (0, f.Yp)(
                                    "#YIR_NewLine_Session",
                                    B,
                                  ),
                                }),
                              ],
                            }),
                            (0, t.jsx)(vr, {
                              percentVal: b,
                              subToken: "#YIR_NewLine",
                            }),
                          ],
                        }),
                        !!h &&
                          (0, t.jsx)("div", {
                            className: (0, v.A)(
                              xe().SectionSubTitle,
                              Dt().SectionSubTitle,
                            ),
                            children: h,
                          }),
                        (0, t.jsx)(Bt, {
                          className: ye().SteamDeckGameCapRow,
                          children: (0, t.jsx)(mt, {
                            rgGamePercentages: W,
                            category: "deck",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("video", {
                      className: Dt().Video,
                      poster:
                        "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesPoster.jpg",
                      playsInline: !0,
                      loop: !0,
                      muted: !0,
                      autoPlay: !0,
                      controls: !1,
                      ref: pt,
                      children: [
                        (0, t.jsx)("source", {
                          src: "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.webm",
                          type: "video/webm",
                        }),
                        (0, t.jsx)("source", {
                          src: "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.mp4",
                          type: "video/mp4",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: (0, v.A)(xe().Disclaimer, Dt().Disclaimer),
                  children: g,
                }),
              ],
            })
          );
        }
        function Ir(l) {
          return {
            bDeck: l.deck_playtime_percentagex100 > $t,
            bVR: l.vr_playtime_percentagex100 > $t,
          };
        }
        function zn(l) {
          const { userYearInReview: n } = l,
            s = n.GetYear(),
            a = I(),
            c = n.GetPlayTimeStats().total_stats,
            u =
              c.controller_playtime_percentagex100 +
              c.deck_playtime_percentagex100;
          let h;
          u > 7e3 && (h = !0);
          const g = Ir(c);
          return (0, t.jsxs)(cr.K, {
            rootMargin: "0px 0px 100% 0px",
            children: [
              !!g.bDeck &&
                (0, t.jsx)(Bt, {
                  className: (0, v.A)(xe().Section, xe().Deck),
                  children: (0, t.jsx)(Wn, { userYearInReview: n, nYear: s }),
                }),
              !!g.bVR &&
                (0, t.jsx)(Bt, {
                  className: (0, v.A)(xe().Section, xe().VR),
                  children: (0, t.jsx)(Ct, {
                    category: "vr",
                    userYearInReview: n,
                    bgImageURL: `${d.TS.IMG_URL}yearinreview/vr_background6.webp`,
                    title: a("#YIR_TopGames_vr"),
                    subTitle: void 0,
                  }),
                }),
              u > 1e3 &&
                (0, t.jsx)(Bt, {
                  className: (0, v.A)(xe().Section, xe().Controller),
                  children: (0, t.jsx)(Ct, {
                    category: "controller",
                    userYearInReview: n,
                    title: a(
                      h
                        ? "#YIR_TopGames_controllerMost"
                        : "#YIR_TopGames_controller",
                      j(u),
                    ),
                    subTitle: a(
                      "#YIR_Platform_subtitle_controller",
                      (0, f.we)("#YIR_Platfrom_controller_forsubtitle"),
                    ),
                  }),
                }),
              s >= 2024 &&
                (0, t.jsx)(Te.tH, {
                  children: (0, t.jsx)(kn, { userYearInReview: n }),
                }),
            ],
          });
        }
        function kn(l) {
          const { userYearInReview: n } = l,
            s = I(),
            [a, c] = (0, m.useMemo)(
              () => [
                n
                  .GetDemoByPlaytime()
                  .filter(Boolean)
                  .map((u) => u.total_playtime_percentagex100)
                  .reduce((u, h) => u + h, 0),
                n
                  .GetPlaytestByPlaytime()
                  .filter(Boolean)
                  .map((u) => u.total_playtime_percentagex100)
                  .reduce((u, h) => u + h, 0),
              ],
              [n],
            );
          return (0, t.jsxs)(t.Fragment, {
            children: [
              a > $t &&
                (0, t.jsxs)(Bt, {
                  className: (0, v.A)(xe().Section, xe().Demo),
                  children: [
                    (0, t.jsx)("div", { className: xe().BG_Demo }),
                    (0, t.jsx)(Ct, {
                      category: "demo",
                      userYearInReview: n,
                      title: s("#YIR_TopGames_demo"),
                      subTitleTokenIfMax: "#YIR_TopGames_demoMax",
                    }),
                  ],
                }),
              c > $t &&
                (0, t.jsxs)(Bt, {
                  className: (0, v.A)(xe().Section, xe().Playtest),
                  children: [
                    (0, t.jsx)("div", { className: xe().BG_Playtest }),
                    (0, t.jsx)(Ct, {
                      category: "playtest",
                      userYearInReview: n,
                      title: s("#YIR_TopGames_playtest"),
                      subTitleTokenIfMax: "#YIR_TopGames_playtestMax",
                    }),
                  ],
                }),
            ],
          });
        }
        var Rn = o(99514),
          vt = o.n(Rn);
        function Cn(l) {
          const { userYearInReview: n } = l;
          if (d.iA.country_code.toLowerCase() === "cn") return null;
          const s = n.GetPlayTimeStats().playtime_streak;
          return !s || s.longest_consecutive_days < 5
            ? null
            : (0, t.jsx)(Gn, { ...l });
        }
        function Gn(l) {
          const { userYearInReview: n } = l,
            s = I(),
            a = O(),
            c = n.GetPlayTimeStats().playtime_streak,
            u = D(),
            [h, g] = m.useState(!1),
            p = m.useCallback((Ce) => {
              Ce && g(!0);
            }, []),
            [B, b] = m.useState(!1),
            W = m.useCallback((Ce) => {
              Ce &&
                window.setTimeout(() => {
                  b(!0);
                }, 30);
            }, []),
            [G, J] = m.useState(!1),
            te = 12,
            le = c.streak_games.length > te && !G,
            Me = le
              ? c.streak_games
                  .sort((Ce, Se) => Ce.appid - Se.appid)
                  .slice(0, te)
              : c.streak_games.sort((Ce, Se) => Ce.appid - Se.appid),
            We = Me.map((Ce) => Ce.appid),
            dt = c.streak_games.length;
          return (0, t.jsxs)("div", {
            className: (0, v.A)(
              ye().StreakCtn,
              vt().StreakCtn,
              vt().Section,
              u.Section,
            ),
            children: [
              (0, t.jsx)("div", {
                className: (0, v.A)(
                  vt().LongestStreakBgImage,
                  u.LongestStreakBgImage,
                ),
              }),
              (0, t.jsxs)("div", {
                className: i().YearInReviewContent,
                children: [
                  (0, t.jsxs)("div", {
                    className: vt().SectionTitle,
                    children: [
                      (0, t.jsx)(Wt.J, {
                        className: vt().LongestStreakDailyCount,
                        onVisibilityChange: p,
                        children: s(
                          "#YIR_Longest_Streak_Title",
                          (0, t.jsx)(zt, {
                            className: vt().LongestStreakNumber,
                            endValue: c.longest_consecutive_days,
                            duration: 2e3,
                            startAnimation: h,
                          }),
                        ),
                      }),
                      (0, t.jsxs)(Bt, {
                        className: vt().StreakBarCtn,
                        children: [
                          (0, t.jsx)("div", { className: vt().StreakSizeCtn }),
                          (0, t.jsx)("div", {
                            className: (0, v.A)(
                              vt().StreakSizeFullBar,
                              u.StreakSizeFullBar,
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className: (0, v.A)({
                              [vt().StreakTickCtn]: !0,
                              [vt().LargerTicks]:
                                c.longest_consecutive_days < 40,
                            }),
                            children: (0, t.jsx)(Hn, {
                              nDays: c.longest_consecutive_days - 1,
                            }),
                          }),
                          (0, t.jsx)("div", { className: vt().StreakSizeCtn }),
                        ],
                      }),
                      (0, t.jsxs)(Bt, {
                        className: vt().StreakDates,
                        children: [
                          (0, t.jsx)("div", {
                            className: vt().StreakStart,
                            children: (0, f.TW)(c.rtime_start, a),
                          }),
                          (0, t.jsx)("div", {
                            className: vt().StreakEnd,
                            children: (0, f.TW)(
                              c.rtime_start +
                                c.longest_consecutive_days * 24 * 60 * 60,
                              a,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)(Wt.J, {
                    onVisibilityChange: W,
                    className: (0, v.A)(
                      ye().LongestStreakGamesWrapper,
                      vt().LongestStreakGamesWrapper,
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, v.A)(
                          vt().CapRowTitle,
                          B && vt().AnimateTitle,
                        ),
                        children: s(
                          dt > 1
                            ? "#YIR_Longest_Streak_Games"
                            : "#YIR_Longest_Streak_Games_Singular",
                          (0, wr.D)(dt),
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: (0, v.A)(vt().CapRowCtn),
                        children: (0, t.jsx)(jt.Z, {
                          "flow-children": "grid",
                          className: (0, v.A)(
                            ye().CapRow,
                            ye().LongestStreak,
                            B && ye().AnimateCap,
                          ),
                          children: Me.map((Ce, Se) => {
                            const ht = n.GetGameSummaryForApp(Ce.appid);
                            return (0, t.jsx)(
                              nt,
                              {
                                appid: Ce.appid,
                                index: Se,
                                loading: "lazy",
                                rgAppIDs: We,
                                nParentAppID: ht?.parent_appid,
                                eChildType: Un(ht),
                              },
                              "longest_" + Ce.appid,
                            );
                          }),
                        }),
                      }),
                    ],
                  }),
                  le &&
                    (0, t.jsx)("div", {
                      className: ye().MoreButtonContainer,
                      children: (0, t.jsx)("a", {
                        href: "#",
                        className: ye().ShowMoreBtn,
                        onClick: () => J(!0),
                        children: (0, f.we)("#YIR_ShowMore"),
                      }),
                    }),
                ],
              }),
            ],
          });
        }
        function Un(l) {
          if (l?.demo) return w.uE.ue;
          if (l?.playtest) return w.uE.Vi;
        }
        function Hn(l) {
          const { nDays: n } = l,
            s = [];
          if (n > 0) {
            for (let a = 0; a < n + 2; ++a)
              s.push(
                (0, t.jsx)(
                  "div",
                  { className: vt().Tick },
                  "DrawNDivForStreakDays" + a,
                ),
              );
            return (0, t.jsx)(t.Fragment, { children: s });
          }
          return null;
        }
        var qt = o(32490);
        function Yn(l) {
          const { steamId: n, year: s } = l,
            a = D(),
            c = it(n, s),
            u = I();
          return !c || c.length === 0
            ? null
            : (0, t.jsxs)("div", {
                className: qt.OtherYearsCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: (0, v.A)(
                      qt.OtherYearsHeader,
                      a.OtherYearsHeader,
                    ),
                    children: u("#YearInReview_OtherYearLinks_Header"),
                  }),
                  (0, t.jsx)("div", {
                    className: (0, v.A)(qt.OtherYearLinks, a.OtherYearLinks),
                    children: c.map((h) =>
                      (0, t.jsx)(
                        Rt.Ii,
                        {
                          href: `${d.TS.STORE_BASE_URL}replay/${n.ConvertTo64BitString()}/${h}?src=${M.Db.pR}`,
                          className: (0, v.A)(
                            qt.OtherYearLink,
                            a.OtherYearLink,
                          ),
                          children: h,
                        },
                        h,
                      ),
                    ),
                  }),
                ],
              });
        }
        var z = o(64021),
          At = o.n(z),
          Kn = o(88003),
          Vn = o(24806),
          mr = o(99412),
          Qn = o(96538);
        class St {
          m_SteamInterface = null;
          get SteamInterface() {
            return this.m_SteamInterface;
          }
          async GetLoadSocialImages(n, s, a) {
            const c = r.w.Init(M.BY);
            c.Body().set_steamid(n),
              c.Body().set_year(s),
              c.Body().set_language(a);
            const u = await M.Nl.GetUserYearInReviewShareImage(
              this.m_SteamInterface.GetServiceTransport(),
              c,
            );
            if (u.GetEResult() != we.R)
              throw `Load social images failed: ${u.GetErrorMessage()}`;
            return u.Body().toObject().images;
          }
          GetAccountShortCode(n) {
            const s = "accountshortcode_" + n.GetAccountID();
            return (0, d.Tc)(s, "application_config");
          }
          static s_Singleton;
          static Get() {
            return (
              St.s_Singleton ||
                ((St.s_Singleton = new St()), St.s_Singleton.Init()),
              St.s_Singleton
            );
          }
          constructor() {}
          Init() {
            this.m_SteamInterface = (0, T.P)();
          }
        }
        function Fn(l) {
          return St.Get().GetAccountShortCode(l);
        }
        const Xn = "yir_social_images";
        function Zn(l, n, s) {
          return (0, q.I)({
            queryKey: [Xn, l, n, s],
            queryFn: () => St.Get().GetLoadSocialImages(l, n, s),
          });
        }
        var Jn = o(21877),
          Ht = o(41672);
        function Tr(l) {
          const { userYearInReview: n, steamId: s, nYear: a } = l,
            c = se(),
            u = D();
          if (!d.iA.logged_in) return null;
          if (!c && d.iA.logged_in)
            return (0, t.jsx)(Rt.Ii, {
              className: (0, v.A)(z.SeeRewindButton, u.SeeRewindButton),
              href: `${d.TS.STORE_BASE_URL}replay/${d.iA.steamid}/${a}?src=${M.Db.UO}`,
              children: (0, f.we)("#YIR_SeeYourRewind"),
            });
          const h = (g) => {
            (0, Kn.pg)(
              (0, t.jsx)(ei, { userYearInReview: n, steamId: s, nYear: a }),
              window,
              { strTitle: (0, f.we)("#Button_Share") },
            );
          };
          return (0, t.jsxs)(jt.Z, {
            className: z.YIRShareCtn,
            children: [
              (0, t.jsx)(Nr, { userYearInReview: n, steamId: s, nYear: a }),
              (0, t.jsxs)(jt.Z, {
                className: z.ShareButton,
                onActivate: h,
                children: [
                  (0, t.jsx)(Ae.SYj, { className: (0, v.A)(z.ShareIcon) }),
                  (0, t.jsx)("span", {
                    className: (0, v.A)(z.ShareText),
                    children: (0, f.we)("#Button_Share"),
                  }),
                ],
              }),
            ],
          });
        }
        function Nr(l) {
          const { userYearInReview: n, steamId: s, nYear: a } = l,
            [c, u] = (0, m.useState)(""),
            h = (0, De.q3)(() => n.GetPrivacyState()),
            g = (0, De.q3)(() => n.GetPrivacyState()),
            p = (0, m.useMemo)(() => g === M.hb.QB || g === M.hb.uI, [g]),
            B = [
              {
                data: M.hb.ym,
                label: (0, f.we)("#YIR_ShareVisbility_Private"),
              },
              {
                data: M.hb.uI,
                label: (0, f.we)("#YIR_ShareVisbility_FriendsOnly"),
              },
              { data: M.hb.QB, label: (0, f.we)("#YIR_ShareVisbility_Public") },
            ],
            b = async (W) => {
              if (W.data !== h) {
                const G = await ze(s.ConvertTo64BitString(), a, W.data);
                G.privacy_state !== void 0
                  ? n.SetPrivacyState(G.privacy_state)
                  : G.error && u(G.error);
              }
            };
          return (0, t.jsxs)(jt.Z, {
            "flow-children": "column",
            children: [
              (0, t.jsx)("div", {
                className: (0, v.A)(z.PrivacyWarning, p ? z.Visible : ""),
                children: p
                  ? (0, f.we)("#YIR_ShareVisbility")
                  : (0, f.we)("#YIR_ShareModal_DisabledShareTtp"),
              }),
              (0, t.jsx)("div", {
                className: z.DropDownSizer,
                children: (0, t.jsx)(Fe.ZU, {
                  strDropDownButtonClassName: z.DropdownButton,
                  strDropDownClassName: z.DropdownOption,
                  rgOptions: B,
                  selectedOption: h,
                  onChange: b,
                }),
              }),
              c && (0, t.jsx)("div", { className: z.Error, children: c }),
            ],
          });
        }
        function $n(l) {
          return `y${l % 100}`;
        }
        const qn = "l";
        function ei(l) {
          const {
              closeModal: n,
              userYearInReview: s,
              steamId: a,
              nYear: c,
            } = l,
            [u, h] = (0, m.useState)(),
            g = (0, De.q3)(() => s.GetPrivacyState()),
            p = (0, m.useMemo)(() => g === M.hb.QB || g === M.hb.uI, [g]),
            [B, b] = (0, m.useState)((0, mr.sfN)(d.TS.LANGUAGE)),
            W = (0, m.useMemo)(() => (0, mr.LgB)(B), [B]),
            G = Fn(a),
            J = `https://s.team/${$n(c)}/${G}`,
            te = (0, m.useMemo)(() => {
              const Me = new URL(J);
              return Me.searchParams.set(qn, W), Me.href;
            }, [W, J]),
            le = () => {
              h(!0);
            };
          return u
            ? (0, t.jsx)(Jn.J, { eventLink: te, closeModal: n })
            : (0, t.jsx)(Qn.o0, {
                strDescription: "",
                strTitle: (0, f.we)("#YIR_ShareModal_Title"),
                onCancel: n,
                onOK: n,
                bAlertDialog: !0,
                modalClassName: z.ShareModalDialogCtn,
                children: (0, t.jsxs)("div", {
                  className: z.ShareModal,
                  children: [
                    (0, t.jsx)("div", {
                      className: z.ShareLanguagePicker,
                      children: (0, t.jsx)("div", {
                        className: z.LangaugeDropdown,
                        children: (0, t.jsx)(Vn.Ng, {
                          selectedLang: B,
                          fnOnLanguageChanged: b,
                          fnFilterLanguage: (Me) => Me !== mr.X51,
                        }),
                      }),
                    }),
                    (0, t.jsx)(ti, {
                      language: W,
                      steamId: a,
                      nYear: c,
                      shareUrl: te,
                    }),
                    (0, t.jsxs)("div", {
                      className: z.FooterCtn,
                      children: [
                        (0, t.jsx)(Nr, {
                          userYearInReview: s,
                          steamId: a,
                          nYear: c,
                        }),
                        (0, t.jsx)("div", {
                          className: (0, v.A)(z.VisBorder, !p && z.Disabled),
                          children: d.TS.IN_MOBILE_WEBVIEW
                            ? (0, t.jsx)(ai, {
                                bCanShare: p,
                                shareUrl: te,
                                shareOnSteamActivityFeed: le,
                              })
                            : (0, t.jsx)(si, {
                                nYear: c,
                                bCanShare: p,
                                shareUrl: te,
                                shortAccountCode: G,
                                language: W,
                                shareOnSteamActivityFeed: le,
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function ti(l) {
          const { language: n, steamId: s, nYear: a, shareUrl: c } = l,
            [u, h] = (0, m.useState)(0),
            [g, p] = (0, m.useState)(!1),
            { isLoading: B, data: b } = Zn(s.ConvertTo64BitString(), a, n),
            W = b?.length - 1,
            G = `${d.TS.BASE_URL_SHARED_CDN}social_sharing/`,
            J = (We) => {
              u > 0 && (h(u - 1), We.stopPropagation());
            },
            te = (We) => {
              u < W && (h(u + 1), We.stopPropagation());
            },
            le = (We) => {
              p(!0), We.stopPropagation();
            },
            Me = (We) => {
              p(!1), We.stopPropagation();
            };
          return (
            (0, Ht.E)("ArrowLeft", J),
            (0, Ht.E)("Left", J),
            (0, Ht.E)("ArrowRight", te),
            (0, Ht.E)("Right", te),
            B
              ? (0, t.jsx)("div", {
                  className: (0, v.A)(z.CarouselCtn, z.LoadingCtn),
                  children: (0, t.jsx)(Re.t, { position: "center" }),
                })
              : b
                ? (0, t.jsxs)("div", {
                    className: z.CarouselCtn,
                    children: [
                      g &&
                        (0, t.jsx)(ri, {
                          carouselIndex: u,
                          endPreviewImage: Me,
                          onMoveLeft: J,
                          onMoveRight: te,
                          name: b[u].name,
                          url: `${G}${b[u].url_path}`,
                          maxIndex: W,
                        }),
                      (0, t.jsxs)("div", {
                        className: z.ImageArrowCtn,
                        children: [
                          (0, t.jsx)("div", {
                            className: (0, v.A)(
                              z.Arrow,
                              z.Left,
                              u === 0 && z.ArrowDisabled,
                            ),
                            onClick: J,
                            children: (0, t.jsx)(Ae.V5W, { angle: 270 }),
                          }),
                          (0, t.jsx)("div", {
                            className: (0, v.A)(
                              z.Arrow,
                              z.Right,
                              u === W && z.ArrowDisabled,
                            ),
                            onClick: te,
                            children: (0, t.jsx)(Ae.V5W, { angle: 90 }),
                          }),
                          (0, t.jsxs)("div", {
                            className: z.ImagesCtn,
                            children: [
                              (0, t.jsx)("div", {
                                className: (0, v.A)(z.Peek, z.LeftPeak),
                                children:
                                  u !== 0 &&
                                  (0, t.jsx)("img", {
                                    className: z.PeakImg,
                                    src: `${G}${b[u - 1].url_path}`,
                                  }),
                              }),
                              (0, t.jsx)("div", {
                                className: z.CenterImage,
                                children: (0, t.jsxs)("div", {
                                  className: z.ImgAndPreviewCtn,
                                  children: [
                                    (0, t.jsx)("div", {
                                      onClick: le,
                                      className: z.PreviewMask,
                                      children: (0, f.we)(
                                        "#YIR_ShareModal_FullscreenPreview",
                                      ),
                                    }),
                                    (0, t.jsx)("img", {
                                      className: z.CenterImg,
                                      src: `${G}${b[u].url_path}`,
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: (0, v.A)(z.Peek, z.RightPeak),
                                children:
                                  u !== W &&
                                  (0, t.jsx)("img", {
                                    className: z.PeakImg,
                                    src: `${G}${b[u + 1].url_path}`,
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      d.TS.IN_MOBILE_WEBVIEW
                        ? (0, t.jsx)(ii, {
                            imageUrl: `${G}${b[u].url_path}`,
                            shareUrl: c,
                          })
                        : d.TS.IN_CLIENT
                          ? null
                          : (0, t.jsx)(ni, {
                              imageUrl: `${G}${b[u].url_path}`,
                            }),
                      (0, t.jsx)("div", {
                        className: z.CarouselHintCtn,
                        children: b.map((We, dt) =>
                          (0, t.jsx)(
                            "div",
                            {
                              className: (0, v.A)(
                                z.CarouselHint,
                                dt === u ? z.ActiveHint : null,
                              ),
                            },
                            `${dt}_hint`,
                          ),
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: z.FormatHint,
                        children: (0, f.we)(
                          `#YIR_ShareModal_ImageCaption_${b[u].name}`,
                        ),
                      }),
                    ],
                  })
                : (0, t.jsx)("div", {
                    className: (0, v.A)(z.CarouselCtn, z.LoadingCtn),
                    children: (0, t.jsx)("div", {
                      children: (0, f.we)(
                        "#YIR_ShareModal_FailedToGenerateImages",
                      ),
                    }),
                  })
          );
        }
        function ri(l) {
          const {
            carouselIndex: n,
            maxIndex: s,
            onMoveLeft: a,
            onMoveRight: c,
            endPreviewImage: u,
            name: h,
            url: g,
          } = l;
          return (
            (0, Ht.E)("Escape", u),
            (0, Ht.E)("Esc", u),
            (0, t.jsx)("div", {
              className: z.PreviewImageCtn,
              children: (0, t.jsx)("div", {
                className: z.PreviewClickCtn,
                onClick: u,
                children: (0, t.jsxs)("div", {
                  className: z.PreviewAndIconCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: z.CloseIcon,
                      children: (0, t.jsx)(Ae.sED, {}),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, v.A)(
                        z.Arrow,
                        z.Left,
                        n === 0 && z.ArrowDisabled,
                      ),
                      onClick: a,
                      children: (0, t.jsx)(Ae.V5W, { angle: 270 }),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, v.A)(
                        z.Arrow,
                        z.Right,
                        n === s && z.ArrowDisabled,
                      ),
                      onClick: c,
                      children: (0, t.jsx)(Ae.V5W, { angle: 90 }),
                    }),
                    (0, t.jsx)("img", {
                      className: z[`PreviewImage_${h}`],
                      src: g,
                    }),
                  ],
                }),
              }),
            })
          );
        }
        function ni(l) {
          const n = () => {
            fetch(l.imageUrl)
              .then((s) => s.blob())
              .then((s) => URL.createObjectURL(s))
              .then((s) => {
                const a = document.createElement("a");
                (a.href = s),
                  (a.download = ""),
                  document.body.appendChild(a),
                  a.click(),
                  document.body.removeChild(a);
              });
          };
          return (0, t.jsxs)("div", {
            className: z.InteractButton,
            onClick: n,
            children: [
              (0, t.jsx)(Ae.MQO, { className: z.InteractButtonIcon }),
              (0, t.jsx)("span", {
                className: (0, v.A)(z.InteractButtonText),
                children: (0, f.we)("#YIR_ShareModal_SaveImage"),
              }),
            ],
          });
        }
        function ii(l) {
          const { imageUrl: n, shareUrl: s } = l,
            a = () => {
              const c = Reflect.get(window, "ReactNativeWebView");
              if (c?.postMessage) {
                const u = {
                  event_name: "shareimage",
                  link: n,
                  url: n,
                  subject: (0, f.we)("#YIR_ShareModal_MobileSubject"),
                  message: s,
                  title: (0, f.we)("#YIR_ShareModal_MobileMessage"),
                };
                c.postMessage(JSON.stringify(u));
                return;
              }
            };
          return (0, t.jsxs)("div", {
            className: z.InteractButton,
            onClick: a,
            children: [
              (0, t.jsx)(Ae.SYj, { className: z.InteractButtonIcon }),
              (0, t.jsx)("span", {
                className: (0, v.A)(z.InteractButtonText),
                children: (0, f.we)("#YIR_ShareModal_ShareImage"),
              }),
            ],
          });
        }
        function si(l) {
          const {
              bCanShare: n,
              shareUrl: s,
              shortAccountCode: a,
              language: c,
              nYear: u,
              shareOnSteamActivityFeed: h,
            } = l,
            [g, p] = (0, m.useState)(!1),
            B = () => {
              navigator.clipboard.writeText(s), p(!0);
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: z.ShareURLTitle,
                children: (0, f.we)("#YIR_ShareModal_YourLink"),
              }),
              (0, t.jsxs)("div", {
                className: z.ShareURLCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: z.ShareShortUrl,
                    children: s,
                  }),
                  (0, t.jsxs)("div", {
                    className: (0, v.A)(z.ShareLinkButton),
                    onClick: B,
                    children: [
                      (0, t.jsx)(Ae.SYj, { className: z.ShareLinkIcon }),
                      (0, t.jsx)("span", {
                        className: (0, v.A)(z.ShareLinkText),
                        children: (0, f.we)(
                          g
                            ? "#YIR_ShareModal_CopyLink_Success"
                            : "#YIR_ShareModal_CopyLink",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: (0, v.A)(z.SocialButtons, z.SteamButtons),
                children: [
                  (0, t.jsxs)("div", {
                    onClick: h,
                    className: (0, v.A)(z.ShareLinkButton, z.FeedBtn),
                    children: [
                      (0, t.jsx)(Ae.Qte, { className: z.ShareLinkIcon }),
                      (0, t.jsx)("span", {
                        className: (0, v.A)(z.ShareLinkText),
                        children: (0, f.we)(
                          "#YIR_ShareModal_ShareOnFriendsActivity",
                        ),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("a", {
                    href: `${d.TS.COMMUNITY_BASE_URL}profiles/${d.iA.steamid}/edit/showcases`,
                    className: (0, v.A)(z.ShareLinkButton, z.FeedBtn),
                    children: [
                      (0, t.jsx)(Ae.KJW, { className: z.ShareLinkIcon }),
                      (0, t.jsx)("span", {
                        className: (0, v.A)(z.ShareLinkText),
                        children: (0, f.we)("#YIR_ShareModal_AddShowcase"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function ai(l) {
          const { bCanShare: n, shareUrl: s, shareOnSteamActivityFeed: a } = l,
            c = () => {
              const u = Reflect.get(window, "ReactNativeWebView");
              if (u?.postMessage) {
                const h = {
                  event_name: "share",
                  link: s,
                  url: s,
                  subject: (0, f.we)("#YIR_ShareModal_MobileSubject"),
                  message: (0, f.we)("#YIR_ShareModal_MobileMessage"),
                  title: (0, f.we)("#YIR_ShareModal_MobileMessage"),
                };
                u.postMessage(JSON.stringify(h));
                return;
              }
            };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
              className: z.MobileCtn,
              children: [
                (0, t.jsxs)("div", {
                  className: (0, v.A)(z.ShareLinkButton, !n && z.Disabled),
                  onClick: c,
                  children: [
                    (0, t.jsx)(Ae.SYj, { className: z.ShareLinkIcon }),
                    (0, t.jsx)("span", {
                      className: (0, v.A)(z.ShareLinkText),
                      children: (0, f.we)("#YIR_ShareModal_ShareLink"),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  onClick: a,
                  className: (0, v.A)(z.ShareLinkButton, !n && z.Disabled),
                  children: [
                    (0, t.jsx)(Ae.Qte, { className: z.ShareLinkIcon }),
                    (0, t.jsx)("span", {
                      className: (0, v.A)(z.ShareLinkText),
                      children: (0, f.we)(
                        "#YIR_ShareModal_ShareOnFriendsActivity",
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function dr(l) {
          return l >= 2024;
        }
        function oi(l) {
          const { userYearInReview: n } = l,
            s = n.GetYear(),
            a = n.GetPlayTimeStats().total_stats,
            c = n.GetPlayTimeStats().demos_played || 0,
            u = n.GetPlayTimeStats().playtests_played || 0,
            h = n.GetFilteredGameSummary(),
            g = n.GetPlayTimeStats().summary_stats?.total_achievements || 0,
            p = h.filter((le) => le.new_this_year).length || 0,
            B = n.GetPlayTimeStats().playtime_streak,
            b = n.GetTopGamesShown(),
            W = I(),
            G = b
              .slice(0, 5)
              .map((le, Me) =>
                Ee.A.Get().BHasStoreItem(le.appid, w.c6.qI)
                  ? (0, t.jsx)(
                      vi,
                      { gameStat: le, gridClass: `Game${Me}` },
                      `${Me}_${le.appid}`,
                    )
                  : null,
              )
              .filter((le) => le !== null),
            J = [
              ci(g, n),
              di(s, a),
              mi(
                s,
                B,
                dr(s) ? n.GetPreviousYearSummary()?.longest_streak : void 0,
              ),
            ].filter((le) => le !== null),
            te = (0, t.jsx)(
              gi,
              {
                rgGamesLength: h.length,
                nNewGames: p,
                nDemoPlayed: c,
                nPlaytestPlayed: u,
                nYear: n.GetYear(),
                nPreviousYearsGames: dr(s)
                  ? n.GetPreviousYearSummary()?.games_played
                  : void 0,
              },
              "overview",
            );
          return (0, t.jsx)(Bt, {
            children: (0, t.jsxs)("div", {
              className: (0, v.A)(i().YearInReviewContent, i().SummaryArea),
              children: [
                (0, t.jsx)(ui, {
                  rgGamesLength: h.length,
                  nNewGames: p,
                  totalAchievementUnlocked: g,
                  nTotalPlaytimeSeconds: a.total_playtime_seconds || 0,
                  nTotalPercentagePlaytimex100: a.total_playtime_percentagex100,
                }),
                h.length !== 1 &&
                  (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                      className: i().SummaryGridCtn,
                      children: [
                        (0, t.jsx)("div", {
                          className: i().SectionSubTitle,
                          children: W("#YIR_YourSummary_SubTitle"),
                        }),
                        (0, t.jsx)(li, {
                          overview: te,
                          statFillers: J,
                          gameFillers: G,
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          });
        }
        function li(l) {
          let { statFillers: n, gameFillers: s, overview: a } = l;
          return s.length > 2 && n.length > 1
            ? (0, t.jsx)("div", {
                className: i().SummaryGridStandard,
                children: [a, n[0], n[1], s[0], s[1], s[2]],
              })
            : s.length > 1 && n.length > 2
              ? (0, t.jsx)("div", {
                  className: i().SummaryGridStandard,
                  children: [a, n[1], n[2], n[0], s[0], s[1]],
                })
              : n.length == 1 && s.length > 3
                ? (0, t.jsx)("div", {
                    className: i().SummaryGridStandard,
                    children: [a, n[0], s[0], s[1], s[2], s[3]],
                  })
                : s.length > 1
                  ? (0, t.jsx)("div", {
                      className: i().SummaryGridSparse,
                      children: [a, s[0], s[1]],
                    })
                  : null;
        }
        function ci(l, n) {
          return l > 0
            ? (0, t.jsx)(hi, { userYearInReview: n }, "totalAchievements")
            : null;
        }
        function mi(l, n, s) {
          return n && n.longest_consecutive_days <= 1 && s <= 1
            ? null
            : n &&
                n.longest_consecutive_days > 0 &&
                d.iA.country_code.toLowerCase() !== "cn"
              ? (0, t.jsx)(
                  fi,
                  { oLongestStreak: n, nYear: l, nPrevLongestStreamDays: s },
                  "longestStreak",
                )
              : null;
        }
        const Er = 1e3;
        function di(l, n) {
          const s =
              n.controller_playtime_percentagex100 +
              n.deck_playtime_percentagex100,
            a =
              n.total_playtime_percentagex100 -
              n.controller_playtime_percentagex100 -
              n.vr_playtime_percentagex100 -
              n.deck_playtime_percentagex100;
          return s < Er || a < Er
            ? null
            : (0, t.jsx)(pi, { oTotalStats: n, nYear: l }, "hardwareTime");
        }
        function ui(l) {
          const {
              rgGamesLength: n,
              nNewGames: s,
              totalAchievementUnlocked: a,
              nTotalPlaytimeSeconds: c,
              nTotalPercentagePlaytimex100: u,
            } = l,
            h = I();
          let g;
          return (
            s > 50 && a > 100
              ? (g = h("#YIR_YourSummary_GamesTonNewAchievements"))
              : s > 20 && a > 100
                ? (g = h("#YIR_YourSummary_GamesNewAchievements"))
                : s > 20 && c > 36e4
                  ? (g = h("#YIR_YourSummary_GamesNew"))
                  : n > 10 && s < 5
                    ? (g = h("#YIR_YourSummary_GamesManyTriedNew"))
                    : n > 10
                      ? (g = h("#YIR_YourSummary_GamesMany"))
                      : s > 1 && s < 5 && (c > 36e4 || (c == 0 && u > 5e3))
                        ? (g = h("#YIR_YourSummary_HoursManyTriedNew"))
                        : n < 2 && c > 36e4
                          ? (g = h("#YIR_YourSummary_HoursManySingleGame"))
                          : n < 2
                            ? (g = h("#YIR_YourSummary_SingleGame"))
                            : n < 5
                              ? (g = h("#YIR_YourSummary_GamesFew"))
                              : c > 36e4
                                ? (g = h("#YIR_YourSummary_HoursMany"))
                                : (g = null),
            (0, t.jsx)("div", { className: i().SectionTitle, children: g })
          );
        }
        function gi(l) {
          const n = V(),
            {
              rgGamesLength: s,
              nNewGames: a,
              nDemoPlayed: c,
              nPlaytestPlayed: u,
              nYear: h,
              nPreviousYearsGames: g,
            } = l,
            p = D(),
            B = `${d.TS.IMG_URL}yearinreview/bg_2023.svg`;
          let b = i().NormalNumbers;
          return (
            s > 99999 ? (b = i().SixNumbers) : s > 99 && (b = i().ThreeNumbers),
            (0, t.jsx)("div", {
              className: (0, v.A)(i().SummaryCtnShadow, p.SummaryCtnShadow),
              children: (0, t.jsxs)("div", {
                className: (0, v.A)(
                  i().SummaryCtn,
                  i().GridItem,
                  p.GridItem,
                  i().OverviewBlock,
                  p.SummaryCtn,
                ),
                children: [
                  (0, t.jsx)("div", { className: i().SubtleBorder }),
                  (0, t.jsx)("div", {
                    className: (0, v.A)(
                      i().BackgroundImage,
                      i().BackgroundImageCover,
                    ),
                    style: { backgroundImage: `url(${B})` },
                  }),
                  (0, t.jsxs)("div", {
                    className: i().SummaryBlockTitle,
                    children: [
                      (0, t.jsx)("div", {
                        className: i().RewindHeader,
                        children: (0, f.PP)(
                          "#YearInReview_SteamRewindHeader",
                          (0, t.jsx)("span", {
                            className: (0, v.A)(i().UserName, p.UserName),
                            children: (0, f.we)(
                              "#YearInReview_PossessiveUserName",
                              n,
                            ),
                          }),
                          (0, f.we)("#date_year", h),
                        ),
                      }),
                      (0, t.jsxs)("div", {
                        className: (0, v.A)(i().StatBox, i().Big),
                        children: [
                          (0, t.jsx)("div", {
                            className: (0, v.A)(i().BigNum, b),
                            children: (0, Be.Dq)(s),
                          }),
                          (0, t.jsx)("div", {
                            className: i().SmallText,
                            children: (0, f.Yp)("#YIR_YourSummary_Games", s),
                          }),
                          (0, t.jsx)(ur, {
                            strTokenPrefix: "#YIR_YourSummary_PrevYear_Game",
                            nCurValue: s,
                            nPrevValue: g,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: i().SubSummaryCtn,
                    children: [
                      !!a &&
                        (0, t.jsxs)("div", {
                          className: i().StatBox,
                          children: [
                            (0, t.jsx)("div", {
                              className: i().BigNum,
                              children: (0, Be.Dq)(a),
                            }),
                            (0, t.jsx)("div", {
                              className: i().SmallText,
                              children: (0, f.Yp)(
                                "#YIR_YourSummary_GamesFirst",
                                a,
                              ),
                            }),
                          ],
                        }),
                      !!c &&
                        (0, t.jsxs)("div", {
                          className: i().StatBox,
                          children: [
                            (0, t.jsx)("div", {
                              className: i().BigNum,
                              children: (0, Be.Dq)(c),
                            }),
                            (0, t.jsx)("div", {
                              className: i().SmallText,
                              children: (0, f.Yp)("#YIR_YourSummary_Demos", c),
                            }),
                          ],
                        }),
                      !!u &&
                        (0, t.jsxs)("div", {
                          className: i().StatBox,
                          children: [
                            (0, t.jsx)("div", {
                              className: i().BigNum,
                              children: (0, Be.Dq)(u),
                            }),
                            (0, t.jsx)("div", {
                              className: i().SmallText,
                              children: (0, f.Yp)(
                                "#YIR_YourSummary_PlayTests",
                                u,
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function ur(l) {
          const { strTokenPrefix: n, nCurValue: s, nPrevValue: a } = l;
          if (!(a == null || a === 0 || s === 0))
            return s == a
              ? null
              : s < a
                ? (0, t.jsxs)("div", {
                    className: i().CompareCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, v.A)(i().CompareArrow, i().ArrowDownCtn),
                      }),
                      (0, t.jsx)("div", {
                        className: i().CompareText,
                        children: (0, f.Yp)(
                          n + "Less",
                          a - s,
                          (0, Be.Dq)(a - s),
                        ),
                      }),
                    ],
                  })
                : (0, t.jsxs)("div", {
                    className: i().CompareCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, v.A)(i().CompareArrow, i().ArrowUpCtn),
                      }),
                      (0, t.jsx)("div", {
                        className: i().CompareText,
                        children: (0, f.Yp)(
                          n + "More",
                          s - a,
                          (0, Be.Dq)(s - a),
                        ),
                      }),
                    ],
                  });
        }
        function hi(l) {
          const { userYearInReview: n } = l,
            s = n.GetPlayTimeStats().summary_stats,
            a = n.GetFilteredGameSummary(),
            c = n.GetYear(),
            u = D(),
            h = `${d.TS.IMG_URL}yearinreview/achievement_grid_02.webp`;
          let g = i().NormalNumbers;
          return (
            s.total_achievements > 99999
              ? (g = i().SixNumbers)
              : s.total_achievements > 99 && (g = i().ThreeNumbers),
            (0, t.jsx)("div", {
              className: (0, v.A)(i().SummaryCtnShadow, u.SummaryCtnShadow),
              children: (0, t.jsxs)("div", {
                className: (0, v.A)(
                  i().SummaryCtn,
                  i().GridItem,
                  u.GridItem,
                  i().Achievements,
                  i().AchievementBlock,
                  u.SummaryCtn,
                  u.AchievementBlock,
                ),
                children: [
                  (0, t.jsx)("div", { className: i().SubtleBorder }),
                  (0, t.jsx)("div", {
                    className: (0, v.A)(
                      i().BackgroundImage,
                      i().BackgroundImageCover,
                    ),
                    style: { backgroundImage: `url(${h})` },
                  }),
                  (0, t.jsxs)("div", {
                    className: (0, v.A)(
                      i().StatBox,
                      i().SummaryBlockHugeNumCtn,
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, v.A)(i().BigNum, g),
                        children: (0, Be.Dq)(s.total_achievements),
                      }),
                      (0, t.jsx)("div", {
                        className: i().SmallText,
                        children: (0, f.Yp)(
                          "#YIR_YourSummary_Achievement",
                          s.total_achievements,
                        ),
                      }),
                      (0, t.jsx)(ur, {
                        strTokenPrefix: "#YIR_YourSummary_PrevYear_Ach",
                        nCurValue: s.total_achievements,
                        nPrevValue: dr(c)
                          ? n.GetPreviousYearSummary().unlocked_achievements
                          : void 0,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: i().SummaryBlockExtrasCtn,
                    children: [
                      (0, t.jsxs)("div", {
                        className: i().StatBox,
                        children: [
                          (0, t.jsx)("div", {
                            className: (0, v.A)(i().BigNum),
                            children: (0, Be.Dq)(
                              s.total_games_with_achievements || 0,
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className: i().SmallText,
                            children: (0, f.Yp)(
                              "#YIR_YourSummary_Achievement_Games",
                              s.total_games_with_achievements,
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: i().StatBox,
                        children: [
                          (0, t.jsx)("div", {
                            className: i().BigNum,
                            children: (0, Be.Dq)(
                              s.total_rare_achievements || 0,
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className: i().SmallText,
                            children: (0, f.Yp)(
                              "#YIR_YourSummary_Achievement_Rare",
                              s.total_rare_achievements,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function fi(l) {
          const { oLongestStreak: n, nYear: s, nPrevLongestStreamDays: a } = l,
            c = O(),
            u = (0, f.TW)(n.rtime_start, c),
            h = (0, f.TW)(
              n.rtime_start + n.longest_consecutive_days * 24 * 60 * 60,
              c,
            ),
            g = D();
          if (d.iA.country_code === "ch") return null;
          const p = `${d.TS.IMG_URL}yearinreview/streak_bg.jpg`;
          return (0, t.jsx)("div", {
            className: (0, v.A)(i().SummaryCtnShadow, g.SummaryCtnShadow),
            children: (0, t.jsxs)("div", {
              className: (0, v.A)(
                i().SummaryCtn,
                i().GridItem,
                g.GridItem,
                i().StreakBlock,
                g.SummaryCtn,
                g.StreakBlock,
              ),
              children: [
                (0, t.jsx)("div", { className: i().SubtleBorder }),
                (0, t.jsx)("div", {
                  className: (0, v.A)(
                    i().BackgroundImage,
                    i().BackgroundImageCover,
                  ),
                  style: { backgroundImage: `url(${p})` },
                }),
                (0, t.jsxs)("div", {
                  className: (0, v.A)(i().StatBox, i().SummaryBlockHugeNumCtn),
                  children: [
                    (0, t.jsx)("div", {
                      className: i().BigNum,
                      children: (0, f.Yp)(
                        "#YIR_Game_LongestStreak_DaysPlayed",
                        n.longest_consecutive_days,
                      ),
                    }),
                    (0, t.jsx)("div", {
                      className: i().SmallText,
                      children: (0, f.we)("#YIR_YourSummary_Stat_Streak"),
                    }),
                    (0, t.jsx)("div", {
                      className: i().SmallLightText,
                      children: (0, f.we)(
                        "#YIR_Game_LongestStreak_FromDateToDate",
                        u,
                        h,
                      ),
                    }),
                    (0, t.jsx)(ur, {
                      strTokenPrefix: "#YIR_YourSummary_PrevYear_Day",
                      nCurValue: n.longest_consecutive_days,
                      nPrevValue: a,
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: i().SummaryBlockExtrasCtn,
                  children: (0, t.jsxs)("div", {
                    className: (0, v.A)(i().StatBox, i().LongestStreakStat),
                    children: [
                      (0, t.jsx)("div", {
                        className: i().BigNum,
                        children: (0, Be.Dq)(n.streak_games.length),
                      }),
                      (0, t.jsx)("div", {
                        className: i().SmallText,
                        children: (0, f.Yp)(
                          "#YIR_YourSummary_Games",
                          n.streak_games.length,
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function pi(l) {
          const { oTotalStats: n, nYear: s } = l,
            a =
              n.total_playtime_percentagex100 -
              n.controller_playtime_percentagex100 -
              n.vr_playtime_percentagex100 -
              n.deck_playtime_percentagex100,
            c = j(a),
            u =
              n.controller_playtime_percentagex100 +
              n.deck_playtime_percentagex100,
            h = j(u),
            g = `${d.TS.IMG_URL}yearinreview/keyboard.png?v=3`,
            p = `${d.TS.IMG_URL}yearinreview/controllers.png?v=2`,
            B = D();
          let b, W, G;
          return (
            Math.floor(u / 100) < 40
              ? ((b = 40), (W = i().Small), (G = i().Large))
              : Math.floor(u / 100) > 60
                ? ((b = 60), (W = i().Large), (G = i().Small))
                : (b = u / 100),
            (0, t.jsx)("div", {
              className: (0, v.A)(i().SummaryCtnShadow, B.SummaryCtnShadow),
              children: (0, t.jsxs)("div", {
                className: (0, v.A)(
                  i().HardwareSummary,
                  i().SummaryCtn,
                  i().GridItem,
                  B.GridItem,
                  i().HardwareBlock,
                  B.SummaryCtn,
                  B.HardwareBlock,
                ),
                children: [
                  (0, t.jsx)("div", { className: i().SubtleBorder }),
                  (0, t.jsxs)("div", {
                    className: i().ContentCtn,
                    children: [
                      (0, t.jsxs)("div", {
                        className: i().KeyboardPortion,
                        children: [
                          (0, t.jsx)("div", {
                            className: i().BackgroundImage,
                            style: { background: `url(${g}) bottom` },
                          }),
                          (0, t.jsx)("div", {
                            className: (0, v.A)(i().Stat, G),
                            children: c,
                          }),
                          (0, t.jsx)("div", {
                            className: (0, v.A)(i().Subtitle, G),
                            children: (0, f.we)(
                              "#YIR_HowYouPlayed_Keyboard_Generic",
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: i().ControllerPortion,
                        style: { height: b + "%" },
                        children: [
                          (0, t.jsx)("div", {
                            className: i().BackgroundImage,
                            style: { background: `url(${p}) top` },
                          }),
                          (0, t.jsx)("div", {
                            className: (0, v.A)(i().Stat, W),
                            children: h,
                          }),
                          (0, t.jsx)("div", {
                            className: (0, v.A)(i().Subtitle, W),
                            children: (0, f.we)(
                              "#YIR_HowYouPlayed_Controllers_Percent",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function vi(l) {
          const { gameStat: n, gridClass: s } = l,
            { appid: a } = n,
            [c] = (0, Ie.t7)(a, fe),
            u = Xe(0, [a]),
            h = D();
          if (!c) return null;
          const g = c.GetAssetsWithoutOverrides()?.GetLibraryHeroURL(),
            p = Math.trunc(n.stats.total_sessions);
          return (0, t.jsx)("div", {
            className: (0, v.A)(i().SummaryCtnShadow, h.SummaryCtnShadow),
            children: (0, t.jsxs)("div", {
              className: (0, v.A)(
                i().SummaryCtn,
                i().GridItem,
                h.GridItem,
                i()[s],
                h.SummaryCtn,
                h[s],
              ),
              onClick: u,
              children: [
                (0, t.jsx)("div", { className: i().SubtleBorder }),
                (0, t.jsx)("div", {
                  className: (0, v.A)(i().BackgroundImage, h.BackgroundImage),
                  style: { backgroundImage: `url(${g})` },
                }),
                (0, t.jsx)("div", {
                  className: i().SummaryBlockGameName,
                  children: c.GetName(),
                }),
                (0, t.jsxs)("div", {
                  className: i().SummaryBlockExtrasCtn,
                  children: [
                    (0, t.jsx)(Bi, {
                      percentVal: n.stats.total_playtime_percentagex100,
                      subToken: "#YIR_Game_PlayStat",
                    }),
                    (0, t.jsxs)("div", {
                      className: i().StatBox,
                      children: [
                        (0, t.jsx)("div", {
                          className: i().BigNum,
                          children: (0, Be.Dq)(p),
                        }),
                        (0, t.jsx)("div", {
                          className: i().SmallText,
                          children: (0, f.we)(
                            p == 1
                              ? "#YIR_Game_PlaySession_Singular"
                              : "#YIR_Game_PlaySessions",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Bi(l) {
          const { percentVal: n, subToken: s, className: a } = l,
            c = j(n),
            u = `${s}_Percent`;
          return (0, t.jsxs)("div", {
            className: (0, v.A)(i().StatBox, a),
            children: [
              (0, t.jsx)("div", { className: i().BigNum, children: c }),
              (0, t.jsx)("div", {
                className: i().SmallText,
                children: (0, f.we)(u),
              }),
            ],
          });
        }
        var yi = o(1143),
          Lr = o(45608),
          Pr = o(58661),
          Or = o(73077),
          gr = o(20283),
          Dr = o(90150),
          Nt = o(39743);
        const bi = m.memo((l) => {
            const { data: n, topMonthlyAppsAndRanks: s } = l,
              a = D(),
              c = (0, m.useCallback)(
                (h, g) => (n[g]?.date ? (0, nr.oL)(n[g].date) : ""),
                [n],
              ),
              u = (0, m.useRef)(void 0);
            return (0, t.jsx)(Ut.u, {
              width: "100%",
              height: "100%",
              children: (0, t.jsxs)(Lr.X, {
                data: n,
                margin: { top: 25, left: 0, right: 0, bottom: 0 },
                barGap: 30,
                children: [
                  (0, t.jsx)(Pr.d, { vertical: !1, stroke: "#a0aab6" }),
                  (0, t.jsx)(Or.h, {
                    tickFormatter: j,
                    tick: { fill: "white" },
                    axisLine: !0,
                  }),
                  (0, t.jsx)(Jt.m, {
                    wrapperStyle: { outline: "none" },
                    allowEscapeViewBox: { x: !1, y: !0 },
                    isAnimationActive: !1,
                    offset: 0,
                    content: (0, t.jsx)(xi, { hoveredBarIDRef: u }),
                  }),
                  (0, t.jsx)(gr.y, {
                    barSize: 60,
                    dataKey: `topPlayedPercentBreakdownPerMonth.${Ue}`,
                    name: Ue,
                    stackId: "a",
                    fill: a.monthOthersColor,
                    onMouseEnter: () => (u.current = Ue),
                    onMouseOut: () => (u.current = void 0),
                  }),
                  s.map((h, g) =>
                    (0, t.jsx)(
                      gr.y,
                      {
                        barSize: 60,
                        dataKey: `topPlayedPercentBreakdownPerMonth.${h.appid}`,
                        name: h.appid.toString(),
                        stackId: "a",
                        fill: a[`topApp_${h.rank}`],
                        onMouseEnter: () => (u.current = h.appid.toString()),
                        onMouseOut: () => (u.current = void 0),
                      },
                      `${g}`,
                    ),
                  ),
                  (0, t.jsx)(Dr.W, {
                    interval: 0,
                    tick: (0, t.jsx)(_r, {}),
                    tickFormatter: c,
                  }),
                ],
              }),
            });
          }),
          hr = 7;
        function xi(l) {
          const { active: n, payload: s, hoveredBarIDRef: a } = l,
            c = D(),
            u = I();
          if (n && s && s.length) {
            const h = s[0].payload.date.getMonth(),
              g = (0, f.we)(`#YIR_MonthlyCharts_MonthNoun_${h + 1}`),
              p = s[0].payload.topPlayedPercentBreakdownPerMonth[Ne],
              B = Object.keys(s[0].payload.otherPlayedPercentBreakdownForMonth),
              b = s[0].payload.topPlayedRelativePercentBreakdownForMonth,
              W = s.find((Me) => Me.name === a.current),
              G = W?.name,
              J = G === Ue,
              te = s
                .map((Me) => {
                  const We = Me.name,
                    dt = b[Me.name];
                  if (We === Ue) {
                    const Ce = J && s.length == 1;
                    return (0, t.jsxs)(
                      m.Fragment,
                      {
                        children: [
                          !Ce &&
                            (0, t.jsx)("div", {
                              className: (0, v.A)(
                                Me === W && Nt.HoveredGameLabel,
                              ),
                              children: fr(
                                dt,
                                g,
                                "#YIR_MonthlyCharts_OtherGamesTooltip",
                              ),
                            }),
                          J &&
                            B.slice(0, hr).map((Se) =>
                              (0, t.jsx)(
                                ji,
                                { appId: Se, className: Nt.HoveredGameLabel },
                                Se,
                              ),
                            ),
                          J &&
                            B.length > hr &&
                            (0, t.jsx)("div", {
                              className: Nt.HoveredGameLabel,
                              children: (0, f.we)(
                                "#YIR_MonthlyCharts_OtherGamesTooltip_AndMore",
                                B.length - hr,
                              ),
                            }),
                        ],
                      },
                      We,
                    );
                  }
                  return Me.value
                    ? (0, t.jsx)(
                        Mi,
                        {
                          appId: We,
                          className: (0, v.A)(Me === W && Nt.HoveredGameLabel),
                          date: g,
                          value: dt,
                        },
                        We,
                      )
                    : null;
                })
                .reverse(),
              le = te.length == 1 && B.length > 0;
            return (0, t.jsxs)(Pt.t1, {
              style: { background: W?.color ?? c.monthOthersColor },
              className: Nt.MonthlyChartTooltipCtn,
              children: [
                (0, t.jsx)("div", { className: Nt.TooltipBackgroundOverlay }),
                (0, t.jsx)("div", {
                  className: Nt.TooltipImageContainer,
                  children:
                    W &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        !J && (0, t.jsx)(Sr, { appId: G }),
                        J && (0, t.jsx)(wi, { appIds: B.slice(0, 7) }),
                      ],
                    }),
                }),
                (0, t.jsxs)("div", {
                  className: Nt.TotalPlaytimeContainer,
                  children: [
                    (0, t.jsx)("div", {
                      className: $.TotalPlaytime,
                      children: fr(
                        p,
                        g,
                        "#YIR_MonthlyCharts_PlayedTotalTooltip",
                      ),
                    }),
                    !le &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("div", {
                            children: (0, f.we)(
                              "#YIR_MonthlyCharts_PlayedSubtitleTooltip",
                            ),
                          }),
                          te,
                        ],
                      }),
                    le &&
                      W &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("div", {
                            children: u(
                              "#YIR_MonthlyCharts_OtherGamesTooltip_Only",
                            ),
                          }),
                          te,
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
          return null;
        }
        function wi({ appIds: l }) {
          return (0, t.jsx)("div", {
            className: Nt.OtherGamesStack,
            children: l?.map((n, s) =>
              (0, t.jsx)(
                Sr,
                {
                  appId: n,
                  style: { zIndex: l.length - s, "--stack-position": s },
                },
                n,
              ),
            ),
          });
        }
        function Sr({ appId: l, style: n }) {
          const [s] = (0, Ie.t7)(parseInt(l), fe);
          if (!s) return null;
          const a =
            s.GetAssetsWithoutOverrides().GetLibraryCapsuleURL() || rt.A;
          return (0, t.jsx)("img", {
            style: n,
            className: Nt.CapsuleImg,
            src: a,
          });
        }
        function ji({ appId: l, className: n }) {
          const [s] = (0, Ie.t7)(parseInt(l), fe);
          return s
            ? (0, t.jsx)("div", { className: n, children: s.GetName() }, l)
            : null;
        }
        function Mi(l) {
          const { appId: n, className: s, value: a, date: c } = l,
            [u] = (0, Ie.t7)(parseInt(n), fe);
          return u
            ? (0, t.jsx)(
                "div",
                {
                  className: s,
                  children: fr(
                    a,
                    c,
                    "#YIR_MonthlyCharts_TopPlayedTooltip",
                    (0, t.jsx)("b", { children: u.GetName() }),
                  ),
                },
                n,
              )
            : null;
        }
        const Ai = m.memo((l) => {
          const { data: n, name: s, color: a } = l,
            c = !0,
            u = D(),
            h = (0, m.useCallback)(
              (g, p) => (n[p]?.date ? (0, nr.oL)(n[p].date) : ""),
              [n],
            );
          return (0, t.jsx)(Ut.u, {
            width: "100%",
            height: "100%",
            children: (0, t.jsxs)(Lr.X, {
              data: n,
              margin: { top: 25, left: 0, right: 0, bottom: 0 },
              barGap: 30,
              children: [
                (0, t.jsx)(Jt.m, {
                  wrapperStyle: {
                    outline: "1px solid " + (a ?? u.chartAccentColorAlt),
                  },
                  allowEscapeViewBox: { x: !1, y: !0 },
                  isAnimationActive: !1,
                  content: (0, t.jsx)(Ii, { name: s }),
                }),
                (0, t.jsx)(Pr.d, { vertical: !1, stroke: "#a0aab6" }),
                (0, t.jsx)(Or.h, {
                  tickFormatter: c ? j : Be.NO,
                  tick: { fill: "white" },
                  axisLine: !0,
                }),
                (0, t.jsx)(gr.y, {
                  barSize: 60,
                  dataKey: c ? "percent" : "value",
                  fill: a ?? u.chartAccentColorAlt,
                }),
                (0, t.jsx)(Dr.W, {
                  interval: 0,
                  tick: (0, t.jsx)(_r, {}),
                  tickFormatter: h,
                  color: "#ffffff",
                }),
              ],
            }),
          });
        });
        function _r(l) {
          const { x: n, y: s, payload: a } = l,
            c = l.tickFormatter(a.value, a.index);
          return (0, t.jsx)("g", {
            transform: `translate(${n},${s})`,
            children: (0, t.jsx)("text", {
              x: 0,
              y: 0,
              dy: 16,
              textAnchor: "end",
              fill: "#FFFFFF",
              transform: "rotate(-35)",
              children: c,
            }),
          });
        }
        function Ii(l) {
          const { active: n, payload: s, name: a } = l,
            c = !0,
            u = D();
          if (n && s && s.length && s[0].value) {
            const h = s[0].payload.date.getMonth(),
              g = (0, f.we)(`#YIR_MonthlyCharts_MonthNoun_${h + 1}`),
              p = s[0].value,
              B = c
                ? "#YIR_MonthlyCharts_TopPlayedGameTooltip_Percent"
                : "#YIR_MonthlyCharts_TopPlayedTooltip_Time";
            return (0, t.jsx)(Pt.t1, {
              style: { background: "#0e1014" },
              children: (0, t.jsx)(
                "div",
                {
                  style: { color: u.chartAccentColor },
                  children: (0, f.PP)(
                    B,
                    (0, t.jsx)("b", { children: c ? j(p) : (0, Be.Dq)(p) }),
                    g,
                    a,
                  ),
                },
                a,
              ),
            });
          }
          return null;
        }
        function fr(l, n, s, ...a) {
          const c = `${s}_Percent`;
          return (0, f.PP)(c, (0, t.jsx)("b", { children: j(l) }), n, ...a);
        }
        var er = o(98288);
        function Ti(l) {
          const { userYearInReview: n } = l,
            s = I(),
            a = n.GetChartMonthlyData(),
            c = n.GetTopGameIdsAndRanks();
          return (0, t.jsx)("div", {
            className: er.Section,
            children:
              n.GetPlayTimeStats().games?.length > 1 &&
              (0, t.jsxs)(Bt, {
                className: er.AnimationVisibilityCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: e.SectionTitle,
                    children: s("#YIR_MonthlyCharts_Title"),
                  }),
                  (0, t.jsx)("div", {
                    className: er.ChartContainer,
                    children: (0, t.jsx)("div", {
                      className: er.Chart,
                      children: (0, t.jsx)(bi, {
                        data: a,
                        topMonthlyAppsAndRanks: c,
                      }),
                    }),
                  }),
                ],
              }),
          });
        }
        var Ni = o(24179),
          Ei = o(54528),
          Li = o(96362),
          Wr = o(27386);
        class Mt {
          m_SteamInterface = null;
          m_mapAchievementDef = new Map();
          m_mapPromiseAchievementDef = new Map();
          m_mapLoadCallback = new Map();
          GetAchievements(n) {
            return this.m_mapAchievementDef.get(n);
          }
          BHasAchievementLoaded(n) {
            return this.m_mapAchievementDef.has(n);
          }
          GetAchievementLoadChange(n) {
            return (
              this.m_mapLoadCallback.has(n) ||
                this.m_mapLoadCallback.set(n, new Je.lu()),
              this.m_mapLoadCallback.get(n)
            );
          }
          async LoadAchievementDisplayInfo(n) {
            return this.m_mapAchievementDef.has(n)
              ? this.m_mapAchievementDef.get(n)
              : (this.m_mapPromiseAchievementDef.has(n) ||
                  this.m_mapPromiseAchievementDef.set(
                    n,
                    this.InternalLoadAchievementDisplayInfo(n),
                  ),
                this.m_mapPromiseAchievementDef.get(n));
          }
          async InternalLoadAchievementDisplayInfo(n) {
            const s = r.w.Init(Wr.ARV);
            s.Body().set_appid(n),
              s.Body().set_language(d.TS.LANGUAGE || "english");
            const a = { appid: n, l: d.TS.LANGUAGE };
            let c = null;
            try {
              const u = await Wr.xtC.GetGameAchievements(
                this.m_SteamInterface.GetServiceTransport(),
                s,
              );
              if (u.GetEResult() == we.R) {
                const h = u
                  .Body()
                  .achievements()
                  .map((g) => {
                    const p = g.toObject();
                    return (p.internal_name = p.internal_name.toLowerCase()), p;
                  });
                return (
                  this.m_mapAchievementDef.set(n, h),
                  this.GetAchievementLoadChange(n).Dispatch(h),
                  h
                );
              }
              c = (0, Ge.H)(u);
            } catch (u) {
              c = (0, Ge.H)(u);
            }
            return (
              console.error(
                "CGameAchievementDisplayStore.InternalLoadAchievementDisplayInfo hit error: " +
                  c.strErrorMsg,
                c,
              ),
              []
            );
          }
          static s_Singleton;
          static Get() {
            return (
              Mt.s_Singleton ||
                ((Mt.s_Singleton = new Mt()), Mt.s_Singleton.Init()),
              Mt.s_Singleton
            );
          }
          constructor() {}
          Init() {
            this.m_SteamInterface = (0, T.P)();
          }
        }
        function zr(l) {
          const [n, s] = (0, m.useState)(Mt.Get().GetAchievements(l)),
            [a, c] = (0, m.useState)(l);
          return (
            (0, m.useEffect)(() => {
              ((n == null && !Mt.Get().BHasAchievementLoaded(l)) || a != l) &&
                Mt.Get()
                  .LoadAchievementDisplayInfo(l)
                  .then((u) => {
                    s(u), c(a);
                  });
            }, [l, n, a]),
            (0, He.hL)(Mt.Get().GetAchievementLoadChange(l), s),
            n
          );
        }
        function Pi(l) {
          const n = zr(l);
          return (0, m.useMemo)(() => {
            const s = new Map();
            return (
              n?.length > 0 && n.forEach((a) => s.set(a.internal_name, a)), s
            );
          }, [n]);
        }
        function Oi(l) {
          const n = zr(l);
          return n ? n.length : 0;
        }
        function Di(l) {
          const [n, s] = (0, m.useState)(Mt.Get().GetAchievements(l));
          return (0, He.hL)(Mt.Get().GetAchievementLoadChange(l), s), n;
        }
        function Si(l, n, s) {
          const a = qe(s, n, l),
            c = Di(l),
            [u, h] = (0, m.useState)(
              a?.all_time_unlocked_achievements > 0 &&
                c?.length > 0 &&
                c?.length <= a?.all_time_unlocked_achievements,
            );
          return (
            (0, m.useEffect)(() => {
              h(
                a?.all_time_unlocked_achievements > 0 &&
                  c?.length > 0 &&
                  c?.length <= a?.all_time_unlocked_achievements,
              );
            }, [c?.length, a?.all_time_unlocked_achievements]),
            u
          );
        }
        const _i = 2022;
        var Wi = o(72739),
          zi = o(29522),
          kr = o(54929),
          ki = o(44533),
          _t = o.n(ki);
        function Ri(l) {
          const {
              imgURL: n,
              glow: s,
              pauseAnimation: a,
              hidden: c,
              alt: u,
              className: h,
              ...g
            } = l,
            [p, B] = m.useState(!1),
            b = m.useCallback((G) => {
              G &&
                (G.complete
                  ? B(!0)
                  : (G.onload = () => {
                      B(!0);
                    }));
            }, []);
          if (c)
            return (0, t.jsx)("div", {
              className: _t().HiddenLabel,
              ...g,
              children: "?",
            });
          const W = p && s;
          return (0, t.jsxs)("div", {
            className: (0, v.A)(
              _t().AchievementIconWrapper,
              h,
              a && _t().RareAchievementNoAnimation,
            ),
            ...g,
            children: [
              W &&
                (0, t.jsx)("div", {
                  className: _t().RareAchievementIconGlowContainerRoot,
                  children: (0, t.jsx)("div", {
                    className: _t().RareAchievementIconGlowContainer,
                    children: (0, t.jsx)("div", {
                      className: _t().RareAchievementIconGlow,
                    }),
                  }),
                }),
              (0, t.jsx)("img", {
                ref: b,
                className: (0, v.A)(_t().Icon, W && _t().IconGlow),
                src: n,
                loading: "lazy",
                alt: u,
              }),
            ],
          });
        }
        var Ci = o(7077),
          Gi = o.n(Ci),
          bt = o(36626);
        function Ui(l) {
          const { appid: n, userYearInReview: s } = l,
            a = qe(s.GetYear(), s.GetAccountID(), n);
          return a?.achievements?.length > 0
            ? (0, t.jsx)(Te.tH, {
                children: (0, m.createElement)(Hi, {
                  ...l,
                  key: "achievementunlucklist_" + n,
                  userUnlockedAchievements: a,
                }),
              })
            : null;
        }
        function Hi(l) {
          const {
              appid: n,
              userYearInReview: s,
              bBlurContent: a,
              userUnlockedAchievements: c,
            } = l,
            [u, h] = (0, m.useState)(a),
            g = I(),
            p = Oi(n),
            B = () => h(!1),
            b = c.achievements.length,
            W = c.all_time_unlocked_achievements,
            G = W == p && p > 0 && b > 0 && W > 0 && !c.unlocked_more_in_future,
            J = `${d.TS.COMMUNITY_BASE_URL}profiles/${s.GetSteamID().ConvertTo64BitString()}/stats/${n}`,
            te = (0, d.hf)();
          return (0, t.jsxs)("div", {
            className: (0, v.A)(e.YearInReviewContent, bt.AchievementsCtn),
            children: [
              u &&
                (0, t.jsx)("div", {
                  onClick: B,
                  className: bt.ContentRestrictionText,
                  children: (0, f.we)(
                    "#YIR_TopGames_ContentRestrictionAchievements",
                  ),
                }),
              (0, t.jsxs)("div", {
                className: bt.AchievementSectionTitleCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: bt.AchievementSectionTitle,
                    children: g("#YIR_TopGames_Achievements"),
                  }),
                  (0, t.jsxs)("div", {
                    className: bt.AchievementLinkCtn,
                    children: [
                      te &&
                        (0, t.jsx)("a", {
                          href: J,
                          className: bt.AchievementLink,
                          children: (0, f.we)("#YIR_SeeAllAchievements"),
                        }),
                      !te &&
                        (0, t.jsx)(Rt.Ii, {
                          href: J,
                          target: "_blank",
                          className: bt.AchievementLink,
                          children: (0, f.we)("#YIR_SeeAllAchievements"),
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: (0, v.A)({
                  [bt.AllUnlockedAchievements]: G,
                  [bt.AchievementsRowCtn]: !0,
                }),
                children: (0, t.jsxs)("div", {
                  className: bt.AchievementRow,
                  children: [
                    (0, t.jsxs)("div", {
                      className: bt.AchievementsTitleCtn,
                      children: [
                        (0, t.jsx)("div", {
                          className: bt.AchievementsBigNum,
                          children: (0, Be.Dq)(b),
                        }),
                        (0, t.jsx)("div", {
                          className: bt.AchievementsSmallText,
                          children: (0, f.PP)(
                            "#YIR_UnlockedThisYear_Short",
                            (0, t.jsx)("br", {}),
                          ),
                        }),
                      ],
                    }),
                    (0, t.jsx)(Yi, { userUnlockedAchievements: c }),
                  ],
                }),
              }),
            ],
          });
        }
        function Yi(l) {
          const { userUnlockedAchievements: n } = l,
            s = Pi(n.appid),
            a = (0, m.useMemo)(
              () =>
                n.achievements.sort(
                  (c, u) => c.rtime_unlocked - u.rtime_unlocked,
                ),
              [n],
            );
          return a?.length > 0
            ? (0, t.jsx)(t.Fragment, {
                children: a
                  .map((c) => s.get(c.achievement_name_internal))
                  .filter((c) => !!c?.icon)
                  .map((c) =>
                    (0, t.jsx)(
                      Vi,
                      { appid: n.appid, display: c },
                      "displayAch_" + c.internal_name,
                    ),
                  ),
              })
            : (0, t.jsx)(Re.t, {
                size: "small",
                string: (0, f.we)("#Loading"),
              });
        }
        const Ki = 10;
        function Vi(l) {
          const { display: n, appid: s } = l,
            a = `${d.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${s}/${n.icon}`,
            c = Number.parseFloat("" + n.player_percent_unlocked) < Ki;
          return (0, t.jsx)(Pt.m9, {
            toolTipContent: (0, t.jsx)(Qi, { display: n }),
            className: (0, v.A)({
              [bt.RareAchievement]: c,
              [bt.Achievement]: !0,
            }),
            children: (0, t.jsx)(Ri, {
              imgURL: a,
              className: bt.AchievementIcon,
              alt: n.localized_name ?? n.internal_name,
              glow: c,
            }),
          });
        }
        function Qi(l) {
          const { display: n } = l;
          let s;
          return (
            n.localized_desc && n.localized_name
              ? (s = `${n?.localized_name}: ${n.localized_desc}`)
              : n.localized_name
                ? (s = n.localized_name)
                : n.internal_name && (s = n.internal_name),
            (0, t.jsxs)("div", {
              className: Gi().TextToolTip,
              children: [
                (0, t.jsx)("div", { children: s }),
                (0, t.jsx)("br", {}),
                (0, t.jsx)("div", {
                  children: (0, f.we)(
                    "#YIR_Achievement_ttip",
                    (0, Be.Dq)(
                      Math.max(
                        0.1,
                        Number.parseFloat("" + n.player_percent_unlocked),
                      ),
                    ),
                  ),
                }),
              ],
            })
          );
        }
        var Ft = o(64514);
        function Fi(l) {
          const { appid: n, bBlurContent: s, nYear: a } = l,
            c = ot(n),
            [u, h] = (0, kr.XC)(),
            g = I();
          return !c || c.length == 0
            ? null
            : (0, t.jsxs)("div", {
                className: (0, v.A)(e.YearInReviewContent, Ft.ScreenshotsCtn),
                children: [
                  h,
                  (0, t.jsx)("div", {
                    className: Ft.ScreenshotHeader,
                    children: g("#YIR_ScreenshotsThisYear"),
                  }),
                  (0, t.jsx)("div", {
                    className: Ft.ScreenshotRow,
                    children: c.map((p, B) =>
                      (0, t.jsx)(
                        Zi,
                        {
                          nYear: a,
                          bBlurContent: s,
                          screenshot: p,
                          fnSetExpandScreenShot: () => {
                            const b = [...c.map((W) => W.image_url)];
                            for (let W = 0; W < B; ++W) b.push(b.shift());
                            u(b);
                          },
                        },
                        `${p.image_url}_${B}`,
                      ),
                    ),
                  }),
                ],
              });
        }
        const Xi =
          "?imw=375&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
        function Zi(l) {
          const {
              screenshot: n,
              fnSetExpandScreenShot: s,
              bBlurContent: a,
              nYear: c,
            } = l,
            [u, h] = (0, m.useState)(a),
            g = { backgroundImage: `url(${n.image_url + Xi})` },
            p = `${d.TS.IMG_URL}yearinreview/screenshot_placeholder.png`,
            B = () => {
              u && h(!1), s();
            };
          return (0, t.jsxs)("div", {
            className: Ft.ScreenshotCtn,
            onClick: B,
            style: g,
            children: [
              u &&
                (0, t.jsx)("div", {
                  className: Ft.ContentRestrictionText,
                  children: (0, f.we)(
                    "#YIR_TopGames_ContentRestrictionScreenshots",
                  ),
                }),
              (0, t.jsx)("img", { src: `${p}` }),
            ],
          });
        }
        function Rr(l) {
          const { userYearInReview: n } = l,
            s = n.GetTopGamesShownAppIDs(),
            a = I(),
            c = 0,
            u = ge,
            h = (0, m.useMemo)(() => s?.slice(c, u), [c, u, s]);
          if (!s || s.length == 0 || c > s.length) return null;
          let g = s.length > 1;
          return (0, t.jsx)("div", {
            className: (0, v.A)($.TopGamesContainer),
            children: (0, t.jsxs)(cr.K, {
              placeholderHeight: "100vh",
              rootMargin: Oe,
              className: $.FullWidth,
              children: [
                !!g &&
                  (0, t.jsx)("div", {
                    className: (0, v.A)($.TopGameTitleCtn, $.white),
                    children: (0, t.jsx)("div", {
                      className: $.TopGameTitle,
                      children: a("#YIR_TopGame_mostplayed_intro"),
                    }),
                  }),
                h.map((p, B) =>
                  (0, t.jsx)(
                    Bt,
                    {
                      children: (0, t.jsx)(
                        Cr,
                        { unAppID: p, userYearInReview: n, index: B },
                        B,
                      ),
                    },
                    B,
                  ),
                ),
              ],
            }),
          });
        }
        function Ji(l) {
          const { gameSummary: n, index: s, userYearInReview: a } = l,
            c = I(),
            u = n.appid,
            h = a.GetYear();
          for (let p = h; p >= _i; --p) {
            const B = `#steamrewind${p}_gametext_appid_${u}`,
              b = c(B, h);
            if (B != b)
              return (0, t.jsxs)("div", {
                className: $.IntroLine,
                children: [b, " "],
              });
          }
          let g;
          return (
            s == 0
              ? n?.new_this_year
                ? n.total_playtime_percentagex100 > 1e3
                  ? (g = "#YIR_TopGame_first_new_hooked")
                  : (g = "#YIR_TopGame_first_new")
                : (g = "#YIR_TopGame_first_continued")
              : s == 1 &&
                (n?.new_this_year
                  ? (g = "#YIR_TopGame_top_new")
                  : (g = "#YIR_TopGame_top_continued")),
            g
              ? (0, t.jsx)("div", {
                  className: (0, v.A)($.IntroLine, e.IntroLine),
                  children: c(g, a.GetYear()),
                })
              : null
          );
        }
        function $i(l) {
          let [n, s] = m.useState(!1),
            a = m.useRef(null),
            c = a.current;
          const u = ke();
          m.useEffect(() => {
            l !== null && l != c && s(!0), l === null && n && s(!1);
          }, [s, n, l, c]),
            (a.current = l);
          let h = m.useRef(void 0),
            g = m.useCallback(() => {
              let p = () => {
                  l == u.unAppID &&
                    je.Get().SetGameDetailsPopupAppData(null, []);
                },
                B = parseInt($.strGameDetailsTransitionTimeMS);
              (h.current = setTimeout(p, B)), s(!1);
            }, [u.unAppID, l]);
          return (
            m.useEffect(
              () => () => {
                h.current && clearTimeout(h.current), (h.current = void 0);
              },
              [],
            ),
            [n, g]
          );
        }
        function qi(l) {
          return m.useCallback(
            (s) => {
              s.target == s.currentTarget && l();
            },
            [l],
          );
        }
        function es(l) {
          let { userYearInReview: n } = l,
            { unAppID: s, length: a, index: c } = ke(),
            [u, h] = $i(s),
            g = qi(h);
          const p = Ve(c + 1),
            B = Ve(c - 1),
            b = (0, d.Qn)();
          if (s == null && !u) return null;
          let W = (0, v.A)(
              $.GameDetailsPopup,
              u && $.Visible,
              b && $.GamepadUI,
            ),
            G = (0, t.jsx)("div", {
              className: W,
              onClick: g,
              children: (0, t.jsxs)("div", {
                className: $.ContentWrapper,
                children: [
                  (0, t.jsx)("div", {
                    className: $.GameWrapper,
                    children: (0, t.jsx)(Cr, {
                      unAppID: s,
                      userYearInReview: n,
                      index: 1,
                    }),
                  }),
                  (0, t.jsx)(kr._G, {
                    index: c,
                    numElements: a,
                    fnForward: p,
                    fnBackwards: B,
                    fnClose: h,
                  }),
                ],
              }),
            });
          return Wi.createPortal(G, document.body);
        }
        const Cr = m.memo((l) => {
          const { unAppID: n, userYearInReview: s, index: a } = l,
            c = s.GetGameStats(n),
            u = Math.trunc(c?.playtime_streak?.longest_consecutive_days || 1),
            h = s.GetGameSummaryForApp(n),
            g = h ? h.parent_appid || n : 0,
            [p, B] = (0, Ie.t7)(g, fe),
            b = Si(g, s.GetAccountID(), s.GetYear()),
            W = (0, ir.n9)(),
            G = I(),
            J = a % 2 ? "OddGradient" : "EvenGradient",
            te = (0, d.Qn)(),
            le = se(),
            Me = D(),
            We = (0, d.hf)(),
            { gameChartData: dt, rank: Ce } = (0, m.useMemo)(
              () => s.GetChartMonthlyDataForApp(n),
              [n, s],
            );
          if (B === Ie.Sq)
            return (0, t.jsx)("div", {
              className: (0, v.A)(
                $.TopGameBlockContainer,
                $[J],
                Me.TopGameBlockContainer,
                Me[J],
                $.LoadingCtn,
              ),
              children: (0, t.jsx)(Re.t, { position: "center" }),
            });
          if (!p || !h) return null;
          let Se = (0, rr.wJ)(p.GetStorePageURL(), W);
          d.TS.IN_CLIENT && (Se = "steam://openurl/" + Se);
          const ht = dt?.find((Lt) => Lt.percent > 0),
            pt = ht ? ht.date.getMonth() : null,
            wt = pt ? (0, f.we)(`#YIR_MonthlyCharts_MonthNoun_${pt + 1}`) : "",
            Et = Math.trunc(h.total_sessions);
          let It = "";
          le && te
            ? (It = `steam://open/games/details/${n}`)
            : le &&
              !d.TS.IN_MOBILE_WEBVIEW &&
              (It = `steam://open/library/details/${n}`);
          let yt = p.GetName();
          return (
            h.demo
              ? (yt = (0, f.we)("#YIR_GameName_PlusDemo", yt))
              : h.playtest &&
                (yt = (0, f.we)("#YIR_GameName_PlusPlaytest", yt)),
            (0, t.jsxs)(Bt, {
              className: (0, v.A)(
                $.TopGameBlockContainer,
                $[J],
                Me.TopGameBlockContainer,
                Me[J],
              ),
              children: [
                (0, t.jsx)(rs, { oStoreItem: p }),
                (0, t.jsxs)("div", {
                  className: $.StandardInfoCtn,
                  children: [
                    (0, t.jsx)(ts, { oStoreItem: p }),
                    (0, t.jsxs)("div", {
                      className: (0, v.A)(
                        e.YearInReviewContent,
                        $.InfoContentSpacing,
                      ),
                      children: [
                        (0, t.jsxs)("div", {
                          className: $.InfoContainer,
                          children: [
                            (0, t.jsxs)(jt.Z, {
                              className: $.GameLinks,
                              "flow-children": "row",
                              children: [
                                We &&
                                  (0, t.jsx)("a", {
                                    href: Se,
                                    className: $.GameLink,
                                    children: (0, f.we)(
                                      "#YIR_TopGames_VisitInStore",
                                    ),
                                  }),
                                !We &&
                                  (0, t.jsx)(Rt.Ii, {
                                    href: Se,
                                    target: "_blank",
                                    className: $.GameLink,
                                    children: (0, f.we)(
                                      "#YIR_TopGames_VisitInStore",
                                    ),
                                  }),
                                !!It &&
                                  (0, t.jsx)(Rt.Ii, {
                                    href: It,
                                    className: $.GameLink,
                                    children: (0, f.we)(
                                      "#YIR_TopGames_VisitInLibrary",
                                    ),
                                  }),
                                !le && (0, t.jsx)(is, { appID: g }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: (0, v.A)({
                                [$.Title]: !0,
                                [$.TitleLongName]: yt?.length > 25,
                              }),
                              children: yt,
                            }),
                            (0, t.jsx)(Ji, {
                              gameSummary: h,
                              userYearInReview: s,
                              index: a,
                            }),
                            (0, t.jsxs)("div", {
                              className: $.StatsGroup,
                              children: [
                                !!h.total_playtime_percentagex100 &&
                                  (0, t.jsxs)("div", {
                                    className: $.StatContainer,
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: $.BigNum,
                                        children: j(
                                          Math.ceil(
                                            h.total_playtime_percentagex100,
                                          ),
                                        ),
                                      }),
                                      (0, t.jsx)("div", {
                                        className: $.NumSubtitle,
                                        children: (0, f.we)(
                                          "#YIR_Game_PercentPlaytime",
                                        ),
                                      }),
                                    ],
                                  }),
                                !!h.total_sessions &&
                                  (0, t.jsxs)("div", {
                                    className: $.StatContainer,
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: $.BigNum,
                                        children: (0, Be.Dq)(Et),
                                      }),
                                      (0, t.jsx)("div", {
                                        className: $.NumSubtitle,
                                        children: (0, f.we)(
                                          Et == 1
                                            ? "#YIR_Game_PlaySession_Singular"
                                            : "#YIR_Game_PlaySessions",
                                        ),
                                      }),
                                    ],
                                  }),
                                d.iA.country_code.toLowerCase() !== "cn" &&
                                  u > 1 &&
                                  (0, t.jsx)("div", {
                                    className: $.StatContainer,
                                    children: (0, t.jsxs)(Pt.he, {
                                      toolTipContent: (0, f.PP)(
                                        "#YIR_Game_LongestStreak_ttip",
                                      ),
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: $.BigNum,
                                          children: (0, Be.Dq)(u),
                                        }),
                                        (0, t.jsx)("div", {
                                          className: $.NumSubtitle,
                                          children: (0, f.we)(
                                            "#YIR_Game_LongestStreak",
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                !!h?.new_this_year &&
                                  (0, t.jsx)("div", {
                                    className: $.StatContainer,
                                    children: (0, t.jsxs)(Pt.he, {
                                      toolTipContent: G(
                                        "#YIR_TopGames_NewThisYEar_ttip",
                                      ),
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: $.BigNum,
                                          children: (0, t.jsx)(Ae.eNX, {}),
                                        }),
                                        (0, t.jsx)("div", {
                                          className: $.NumSubtitle,
                                          children: (0, f.we)(
                                            "#YIR_TopGames_NewThisYEar",
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                !!b &&
                                  (0, t.jsxs)("div", {
                                    className: $.StatContainer,
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: $.BigNum,
                                        children: (0, t.jsx)(Ae.Exy, {}),
                                      }),
                                      (0, t.jsx)("div", {
                                        className: $.NumSubtitle,
                                        children: (0, f.we)(
                                          "#YIR_TopGames_100",
                                        ),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        dt &&
                          (0, t.jsxs)("div", {
                            className: (0, v.A)(
                              $.GameChartCtn,
                              $.ChartWidthHelper,
                            ),
                            children: [
                              (0, t.jsx)("div", {
                                className: $.GameChartFirstPlayed,
                                children: wt
                                  ? G(
                                      h?.new_this_year
                                        ? "#YIR_TopGames_firstplayedNew"
                                        : "#YIR_TopGames_firstplayed",
                                      wt,
                                    )
                                  : null,
                              }),
                              (0, t.jsx)("div", {
                                className: $.GameChart,
                                children: (0, t.jsx)(Ai, {
                                  data: dt,
                                  name: p.GetName(),
                                  color: Me[`topApp_${Ce}`],
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(ns, {
                  appid: g,
                  userYearInReview: s,
                  oStoreItem: p,
                }),
              ],
            })
          );
        });
        function ts(l) {
          const { oStoreItem: n } = l,
            s = H(n),
            a = n.GetAssetsWithoutOverrides()?.GetLibraryHeroURL();
          return (0, t.jsx)("div", {
            className: $.BackgroundImage,
            style: s ? null : { backgroundImage: `url(${a})` },
          });
        }
        function rs(l) {
          const { oStoreItem: n } = l,
            s = D(),
            a = H(n),
            c = n.GetAssetsWithoutOverrides()?.GetLibraryHeroURL();
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: (0, v.A)($.BackgroundImageFull, s.BackgroundImageFull),
              style: a ? null : { backgroundImage: `url(${c})` },
            }),
          });
        }
        function ns(l) {
          const { appid: n, userYearInReview: s, oStoreItem: a } = l,
            c = H(a);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Ui, {
                bBlurContent: c,
                appid: n,
                userYearInReview: s,
              }),
              (0, t.jsx)(Fi, { bBlurContent: c, appid: n, nYear: s.GetYear() }),
            ],
          });
        }
        function is(l) {
          const { appID: n } = l,
            s = (0, zi.$5)(n),
            a = (0, Ei.bB)(n),
            { bIsOwned: c } = (0, Ni.ZJ)(s),
            u = (0, ir.n9)(),
            h = (0, rr.L3)(u),
            { mutate: g } = (0, Li.s)(n, !a, h);
          return !d.iA.logged_in || c
            ? null
            : (0, t.jsxs)(jt.Z, {
                className: (0, v.A)($.AddToWishlist),
                onActivate: (p) => {
                  p.preventDefault(), p.stopPropagation(), g();
                },
                children: [
                  a ? (0, t.jsx)(Ae.qnF, {}) : (0, t.jsx)(Ae.T4m, {}),
                  (0, f.we)(
                    a ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
                  ),
                ],
              });
        }
        var ss = o(78365);
        function as(l) {
          const n = parseInt(l.year),
            s = l.steamId || "",
            a = (0, Qe.W6)(),
            c = Number.parseInt(
              (0, d.Fd)("yearinreview_eresults", "application_config"),
            );
          m.useEffect(() => {
            (0, Ye.le)(a, "src", null),
              (0, Ye.le)(a, "snr", null),
              (0, Ye.le)(a, "sP", null);
          }, [a]);
          const u = m.useRef(null);
          if (
            (m.useEffect(() => {
              u.current && u.current.NavTree()?.Activate(!0);
            }, []),
            c == we.sW)
          )
            return (0, t.jsx)(Kt, {
              message: (0, f.we)("#YIR_Error_NoShareNoGameplayNotUser"),
            });
          if (!s || !n)
            return (0, t.jsx)(Kt, { message: (0, f.we)("#YIR_Error_NoData") });
          const h = new x.b(s);
          return (0, t.jsx)(jt.Z, {
            navRef: u,
            children: (0, t.jsx)(os, { steamID: h, year: n }),
          });
        }
        function os(l) {
          let { steamID: n, year: s } = l;
          const [a, c] = (0, et.KT)(n.GetAccountID()),
            { userYearInReview: u, isLoading: h } = Ke(
              n.ConvertTo64BitString(),
              s,
            );
          if (c || h)
            return (0, t.jsx)(Re.t, {
              string: (0, f.we)("#Loading"),
              position: "center",
            });
          if (!a || !n.BIsIndividualAccount())
            return (0, t.jsx)(Kt, { message: (0, f.we)("#YIR_Error_NoUser") });
          if (!u)
            return (0, t.jsx)(Kt, {
              message: (0, f.we)("#YIR_Error_PageLoadFailed"),
            });
          const g = !u.GetPlayTimeStats()?.game_summary?.length;
          return d.iA.steamid !== a.steamid && g
            ? (0, t.jsx)(Kt, {
                message: (0, f.we)("#YIR_Error_NoShareNoGameplayNotUser"),
              })
            : g
              ? (0, t.jsx)(Kt, {
                  message: (0, f.we)("#YIR_Error_NoShareNoGameplay"),
                })
              : (0, t.jsx)(ss.f7, {
                  autoFocus: !0,
                  noFocusRing: !0,
                  focusable: !1,
                  children: (0, t.jsx)("div", {
                    className: i().YearInReviewContainer,
                    children: (0, t.jsx)(cs, {
                      userYearInReview: u,
                      avatarAndPersona: a,
                    }),
                  }),
                });
        }
        const Yt = m.createContext({
          bIsUser: !1,
          persona_name: "",
          Screenshots: void 0,
          themeStyle: {},
        });
        function ls(l) {
          const {
              viewAsUser: n,
              avatarAndPersona: s,
              userYearInReview: a,
              themeYear: c,
              children: u,
            } = l,
            h = a.GetSteamID(),
            g = a.GetYear(),
            p = (0, yi.b)(c),
            B = m.useRef(void 0);
          (!B.current ||
            B.current.steamid.GetAccountID() != h.GetAccountID() ||
            B.current.year != g) &&
            (B.current = new Ze(je.Get().SteamInterface, h, g));
          const b = B.current,
            W = m.useMemo(
              () => ({
                bIsUser: n,
                persona_name: s.persona_name,
                Screenshots: b,
                themeStyle: p,
              }),
              [n, s.persona_name, b, p],
            );
          return (0, t.jsx)(Yt.Provider, {
            value: W,
            children: (0, t.jsx)(Xt.QA, {
              eAdultOnlyMediaBehavior: n ? "allowed" : "masked",
              children: u,
            }),
          });
        }
        function cs(l) {
          const { userYearInReview: n, avatarAndPersona: s } = l,
            a = n.GetSteamID(),
            c = n.GetYear(),
            u = D(),
            h = n.GetTopGamesShownAppIDs();
          lt(c, a.GetAccountID(), h);
          const g = d.iA.logged_in && d.iA.steamid === s.steamid,
            [p, B] = (0, m.useState)(g),
            [b, W] = (0, m.useState)(c),
            G = n.GetPlayTimeStats().game_summary?.length;
          return (0, t.jsxs)(ls, {
            viewAsUser: p,
            userYearInReview: n,
            avatarAndPersona: s,
            themeYear: b,
            children: [
              (0, t.jsx)(gs, {
                viewAsUser: p,
                setViewAsUser: B,
                themeYear: b,
                setThemeYear: W,
              }),
              (0, t.jsx)(ds, { avatarAndPersona: s, userYearInReview: n }),
              (0, t.jsx)(Te.tH, {
                children: (0, t.jsxs)(yr, {
                  userYearInReview: n,
                  children: [
                    (0, t.jsx)(oi, { userYearInReview: n }),
                    G === 1 && (0, t.jsx)(Rr, { userYearInReview: n }),
                  ],
                }),
              }),
              (0, t.jsx)(Te.tH, {
                children: (0, t.jsx)(gn, { userYearInReview: n }),
              }),
              G > 1 &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(Rr, { userYearInReview: n }),
                    (0, t.jsx)("div", {
                      className: (0, v.A)(i().TimeRelatedCtn, u.TimeRelatedCtn),
                      children: (0, t.jsx)(Te.tH, {
                        children: (0, t.jsx)(Ti, { userYearInReview: n }),
                      }),
                    }),
                  ],
                }),
              (0, t.jsx)("div", {
                className: i().GraphRelatedCtn,
                children: (0, t.jsx)(Te.tH, {
                  children: (0, t.jsx)(_n, { userYearInReview: n }),
                }),
              }),
              !!n.GetPlayTimeStats().playtime_streak &&
                (0, t.jsx)(Te.tH, {
                  children: (0, t.jsx)(Cn, { userYearInReview: n }),
                }),
              G > 5 &&
                (0, t.jsx)(Te.tH, {
                  children: (0, t.jsx)(Vr, { userYearInReview: n, nYear: c }),
                }),
              (0, t.jsx)(Te.tH, {
                children: (0, t.jsxs)("div", {
                  className: i().BottomCtn,
                  children: [
                    (0, t.jsx)(yr, {
                      userYearInReview: n,
                      children: (0, t.jsx)(hs, {
                        playerName: s.persona_name,
                        userYearInReview: n,
                      }),
                    }),
                    p &&
                      (0, t.jsxs)("div", {
                        className: At().ShareOptions,
                        children: [
                          (0, t.jsx)("div", {
                            className: At().ShareTitle,
                            children: (0, f.we)("#YIR_ShareOptionsTitle"),
                          }),
                          (0, t.jsxs)(jt.Z, {
                            className: At().ShareColumns,
                            children: [
                              (0, t.jsxs)("div", {
                                className: (0, v.A)(At().ShareArea),
                                children: [
                                  (0, t.jsx)("div", {
                                    className: At().ShareTypeTitle,
                                    children: (0, f.we)(
                                      "#YIR_ShareModal_TitleSocial",
                                    ),
                                  }),
                                  (0, t.jsx)(Tr, {
                                    userYearInReview: n,
                                    steamId: a,
                                    nYear: c,
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: (0, v.A)(At().ShareArea),
                                children: [
                                  (0, t.jsx)("div", {
                                    className: At().ShareTypeTitle,
                                    children: (0, f.we)(
                                      "#YIR_ShareModal_TitleProfile",
                                    ),
                                  }),
                                  (0, t.jsxs)(Rt.Ii, {
                                    href: `${d.TS.COMMUNITY_BASE_URL}profiles/${d.iA.steamid}/edit/showcases`,
                                    className: (0, v.A)(At().ShareButton),
                                    children: [
                                      (0, t.jsx)(Ae.KJW, {
                                        className: At().ShareLinkIcon,
                                      }),
                                      (0, t.jsx)("span", {
                                        className: (0, v.A)(At().ShareText),
                                        children: (0, f.we)(
                                          "#YIR_ShareModal_AddShowcase",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              (0, t.jsx)(Te.tH, {
                children: (0, t.jsx)(In, { userYearInReview: n }),
              }),
              (0, t.jsx)(Te.tH, {
                children: (0, t.jsx)(Yn, { steamId: a, year: c }),
              }),
              (0, t.jsx)(Te.tH, { children: (0, t.jsx)(fs, { year: c }) }),
              (0, t.jsx)(Te.tH, {
                children: (0, t.jsx)(es, { userYearInReview: n }),
              }),
            ],
          });
        }
        function ms(l) {
          const { avatarAndPersona: n } = l,
            s = D();
          return (0, t.jsxs)("div", {
            className: i().AvatarName,
            children: [
              (0, t.jsx)(ct.Ul, {
                strAvatarURL: n.avatar_url.replace(/\.jpg$/, "_full.jpg"),
                className: i().UserAvatar,
              }),
              (0, t.jsx)("span", {
                className: (0, v.A)(i().UserName, s.UserName),
                children: (0, f.we)(
                  "#YearInReview_PossessiveUserName",
                  n.persona_name,
                ),
              }),
            ],
          });
        }
        function ds(l) {
          let { avatarAndPersona: n, userYearInReview: s } = l;
          const a = s.GetSteamID(),
            c = s.GetYear();
          return (0, t.jsx)("div", {
            className: (0, v.A)(i().YearInReviewContent, i().TopAreaSizer),
            children: (0, t.jsxs)("div", {
              className: i().HeaderCtn,
              children: [
                (0, t.jsx)("div", {
                  className: i().RewindHeader,
                  children: (0, f.PP)(
                    "#YearInReview_SteamRewindHeader",
                    (0, t.jsx)(ms, { avatarAndPersona: n }),
                    (0, f.we)("#date_year", c, " "),
                  ),
                }),
                d.iA.logged_in &&
                  (0, t.jsx)("div", {
                    className: i().HeaderShareCtn,
                    children: (0, t.jsx)("div", {
                      className: (0, v.A)(At().ShareArea),
                      children: (0, t.jsx)(Te.tH, {
                        children: (0, t.jsx)(Tr, {
                          userYearInReview: s,
                          steamId: a,
                          nYear: c,
                        }),
                      }),
                    }),
                  }),
              ],
            }),
          });
        }
        function us() {
          return d.iA.is_support
            ? !!(0, d.Fd)("localization_advanced_access", "application_config")
            : !1;
        }
        function gs(l) {
          const {
              viewAsUser: n,
              setViewAsUser: s,
              themeYear: a,
              setThemeYear: c,
            } = l,
            u = [
              { data: 2022, label: "2022" },
              { data: 2023, label: "2023" },
              { data: 2024, label: "2024" },
              { data: 2025, label: "2025" },
            ],
            h = (0, m.useCallback)(
              (p) => {
                c(p.data);
              },
              [c],
            ),
            g = (0, d.Qn)();
          return !us() || g
            ? null
            : (0, t.jsxs)("div", {
                className: (0, v.A)(i().DevToggle, tt.ValveOnlyBackground),
                children: [
                  (0, t.jsx)("div", {
                    children: "Debug Only: Toggle First Person View",
                  }),
                  (0, t.jsx)(Fe.RF, { onChange: s, checked: n }),
                  (0, t.jsx)("div", {
                    children:
                      "Debug Only: Change to view the contents in the css style of a different year",
                  }),
                  (0, t.jsx)(Fe.ZU, {
                    rgOptions: u,
                    selectedOption: a,
                    onChange: h,
                  }),
                ],
              });
        }
        function Kt(l) {
          let { message: n } = l;
          return (0, t.jsxs)("div", {
            className: i().MissingUserCtn,
            children: [
              (0, t.jsx)("div", { className: i().GenericBackground }),
              (0, t.jsxs)("div", {
                className: (0, v.A)(i().YearInReviewContainer, i().ErrorMsg),
                children: [
                  (0, t.jsx)("div", {
                    className: i().SectionTitle,
                    children: n,
                  }),
                  (0, t.jsx)("div", {}),
                ],
              }),
            ],
          });
        }
        function hs(l) {
          let { userYearInReview: n } = l;
          const s = D();
          if (!d.iA.is_support && d.iA.accountid != n.GetAccountID())
            return null;
          const a = n.GetYear();
          return (0, t.jsx)("div", {
            className: (0, v.A)(i().YearInReviewContent, i().ConclusionCtn),
            children: (0, t.jsx)("div", {
              className: i().SectionTitle,
              children: (0, f.PP)(
                "#YIR_Conclusion",
                (0, t.jsx)("span", {
                  className: (0, v.A)(i().ConclusionName, s.ConclusionName),
                  children: l.playerName,
                }),
                a,
              ),
            }),
          });
        }
        function fs(l) {
          const { year: n } = l;
          return (0, t.jsxs)("div", {
            className: (0, v.A)(
              i().YearInReviewContenredPadding,
              i().FAQSection,
            ),
            children: [
              (0, t.jsx)("div", {
                className: i().SectionTitle,
                children: (0, f.we)("#YIR_FAQ_Title"),
              }),
              (0, t.jsxs)("div", {
                className: i().Questions,
                children: [
                  (0, t.jsxs)("div", {
                    className: i().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: i().Question,
                        children: (0, f.we)("#YIR_FAQ_Dates_Q"),
                      }),
                      (0, t.jsx)("div", {
                        className: i().Answer,
                        children: (0, f.we)("#YIR_FAQ_Dates_A", n),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: i().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: i().Question,
                        children: (0, f.we)("#YIR_FAQ_Offline_Q"),
                      }),
                      (0, t.jsx)("div", {
                        className: i().Answer,
                        children: (0, f.we)("#YIR_FAQ_Offline_A"),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: i().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: i().Question,
                        children: (0, f.we)("#YIR_FAQ_Types_Q"),
                      }),
                      (0, t.jsx)("div", {
                        className: i().Answer,
                        children: (0, f.we)("#YIR_FAQ_Types_A"),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: i().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: i().Question,
                        children: (0, f.we)("#YIR_FAQ_Share_Q"),
                      }),
                      (0, t.jsxs)("div", {
                        className: i().Answer,
                        children: [
                          (0, f.we)("#YIR_FAQ_Share_A"),
                          (0, t.jsxs)("ol", {
                            children: [
                              (0, t.jsx)("li", {
                                children: (0, f.we)("#YIR_FAQ_Share_A_b1"),
                              }),
                              (0, t.jsx)("li", {
                                children: (0, f.we)("#YIR_FAQ_Share_A_b2"),
                              }),
                              (0, t.jsx)("li", {
                                children: (0, f.we)("#YIR_FAQ_Share_A_b3"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: i().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: i().Question,
                        children: (0, f.we)("#YIR_FAQ_ShareFamily_Q"),
                      }),
                      (0, t.jsx)("div", {
                        className: i().Answer,
                        children: (0, f.we)("#YIR_FAQ_ShareFamily_A"),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: i().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: i().Question,
                        children: (0, f.we)("#YIR_FAQ_Controller_Q"),
                      }),
                      (0, t.jsx)("div", {
                        className: i().Answer,
                        children: (0, f.we)("#YIR_FAQ_Controller_A1"),
                      }),
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)("div", {
                        className: i().Answer,
                        children: (0, f.we)("#YIR_FAQ_Controller_A2"),
                      }),
                    ],
                  }),
                  n == 2022
                    ? (0, t.jsxs)("div", {
                        className: i().QuestionCtn,
                        children: [
                          (0, t.jsx)("div", {
                            className: i().Question,
                            children: (0, f.we)("#YIR_FAQ_PrivateApps_Q"),
                          }),
                          (0, t.jsx)("div", {
                            className: i().Answer,
                            children: (0, f.we)("#YIR_FAQ_PrivateApps_A", n),
                          }),
                        ],
                      })
                    : (0, t.jsxs)("div", {
                        className: i().QuestionCtn,
                        children: [
                          (0, t.jsx)("div", {
                            className: i().Question,
                            children: (0, f.we)("#YIR_FAQ_PrivateApps_v2_Q"),
                          }),
                          (0, t.jsx)("div", {
                            className: i().Answer,
                            children: (0, f.we)("#YIR_FAQ_PrivateApps_v2_A", n),
                          }),
                        ],
                      }),
                ],
              }),
            ],
          });
        }
        var Gr = o(51079);
        const Ur = { Home: (l, n) => `${Z.B.YearInReview(l, n)}` };
        function ps(l) {
          return (
            (0, Ie.YM)(),
            (0, t.jsx)(Gr.Ay, {
              domain: "store.steampowered.com",
              controller: "yearinreview",
              children: (0, t.jsx)(Qe.dO, {
                children: (0, t.jsx)(Qe.qh, {
                  path: `${Ur.Home(":steamId?", ":year?")}`,
                  render: (n) =>
                    (0, t.jsx)(Gr.Ay, {
                      method: "yearinreview",
                      children: (0, t.jsx)(Te.tH, {
                        children: (0, t.jsx)(as, {
                          steamId:
                            n.match.params.steamId == "my"
                              ? R.iA.steamid
                              : n.match.params.steamId,
                          year: n.match.params.year,
                        }),
                      }),
                    }),
                }),
              }),
            })
          );
        }
      },
      1143: (U, ce, o) => {
        "use strict";
        o.d(ce, { b: () => S });
        var t = o(90626),
          R = o(47277),
          Z = o(25150),
          m = o(94595),
          d = o(62324);
        const r = { 2022: R, 2023: Z, 2024: m, 2025: d },
          M = Object.values(r).reduce((ie, k) => ({ ...ie, ...k }), {}),
          q = 2022;
        function S(ie) {
          const [k, E] = (0, t.useState)({});
          return (
            (0, t.useEffect)(() => {
              let _ = r[ie];
              _ || (_ = r[q]), E({ ...M, ..._ });
            }, [ie]),
            k
          );
        }
      },
      43047: (U) => {
        U.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      44533: (U) => {
        U.exports = {
          "duration-app-launch": "800ms",
          Icon: "_2V2sHETNfa62yMoDwSF3_t",
          IconGlow: "_3s4Rq3jnntBVP7HbJj1RMQ",
          AchievementIconWrapper: "_1fEbX-PfpZ2FhkhttWcm-V",
          RareAchievementIconGlowContainerRoot: "_2HUbCbZUn27MliiC8gRxGB",
          RareAchievementIconGlowContainer: "_2D_EJk8-jCnfqiwoKkOMVh",
          rotate: "_2liIQspBwdpNtEmYw2bU9j",
          RareAchievementNoAnimation: "_1a4bwiE4yUR3XXBKI6mKqt",
          RareAchievementIconGlow: "_1Z2eJs9-zNTKcWKy4M-oDE",
          HiddenLabel: "_1ABm6sfuqiZZDSL9z8mW1a",
          BackgroundAnimation: "_2jC4Eqt8IrbRbM81zvxlnW",
          "ItemFocusAnim-darkerGrey-nocolor": "_3jGCeVy7OzY5pw0Rpx0z8-",
          "ItemFocusAnim-darkerGrey": "_2Jqi29kzJtRTafvIOPyvAW",
          "ItemFocusAnim-darkGreySettings": "_2tg8Ji5QTXXXSzn1Q0HRa2",
          "ItemFocusAnim-darkGrey": "T-2rsbY05mXhgaIQkf73x",
          "ItemFocusAnim-grey": "_1WGat3-0-TCDKEtg7LEoB5",
          "ItemFocusAnim-translucent-white-10": "RkktEhJT7jnAfvbEiNBBH",
          "ItemFocusAnim-translucent-white-20": "_30c3lgfOmK8HMV6u21SQ42",
          "ItemFocusAnimBorder-darkGrey": "_1vYqEdzDmOIRAIgDNUHfBt",
          "ItemFocusAnim-green": "CrI_goODkSlbs2jjXglfz",
          focusAnimation: "_3xzftt0SCqsMfNLxtA825Q",
          hoverAnimation: "_10Y0xofBXAPurniv6K3_YV",
        };
      },
      47444: (U) => {
        U.exports = {
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
      6878: (U) => {
        U.exports = {
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
      64502: (U) => {
        U.exports = { AppSummaryWidgetCtn: "_1-2t1NI3qbO2JgWmCss7AW" };
      },
      77078: (U) => {
        U.exports = {
          Pill: "_861OI3fFcj_3yxoWXG_5_",
          Button: "_1cZtQ0Bp-yHfF7HnFoKeQa",
        };
      },
      65088: (U) => {
        U.exports = { ImageBlocked: "_1q2rpNyMVSrPH9vV02Dtrp" };
      },
      11279: (U) => {
        U.exports = { ScrollSnapCarousel: "_1nUtBXgWizhgU1jv-8wVC7" };
      },
      15736: (U) => {
        U.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
      36626: (U) => {
        U.exports = {
          narrowWidth: "500px",
          AchievementsCtn: "_2LUzgZJ_eMSRhN25EVhqVU",
          AchievementSectionTitleCtn: "_2zup57eefxquS6AJyTv5E1",
          AchievementLinkCtn: "_309iQSDUmh_ZZcX68v0JdR",
          AchievementLink: "_2kAUNY6KbqwwRgg0H15f4-",
          AchievementSectionTitle: "_2cXJuBaeWWL9LpcBxC1fZY",
          ElementFadeIn: "_1e0LMNGCBYsAetfvVxYpDL",
          AchievementsRowCtn: "W7_k8jVXnzpwUZNa43PHN",
          AchievementRow: "_1Ps-8xv2odKhqYr3G1icgo",
          AchievementsTitleCtn: "eFeFpu3XEuwZiKDRHA0s9",
          AchievementsBigNum: "q39Ki9j7aTVgfOwifLorR",
          AchievementsSmallText: "_2Csfer_aAgirlYMDJolfe5",
          Achievement: "_3Ps-QnDDd6bMLcrY7luI7e",
          RareAchievement: "dcNFbbzwgPBdLxwHf51j-",
          AchievementIcon: "BJ3F-98C3HKZoqsUW5i3D",
          ContentRestrictionText: "P_06wUkDFpPjciL7jcOXr",
          BadgeBoxIntro: "_3EUa5egj1CMk2DU_khwOam",
          BadgeBarFiller: "_30I9YYwkjcWAkCzxybsGbm",
          Appear: "_2HdNkvFQTzQROiu-b5FK_i",
        };
      },
      18288: (U) => {
        U.exports = {
          MonthGridOverallCtn: "_2xKPi7RhodSVa0iEsscEfN",
          MonthGroupCtn: "DMCZIDNqrSb2BeQ4d5kAj",
          FirstPlayCtn: "rjWoTavA51H_s5xhADpI_",
          MonthTitle: "_1MQ1FhzTm2tRDLvBSFD1Rl",
          GameCtn: "_1ctBsQkYV5RUf_mKMDJOy6",
          AllGamesBGImage: "Qurohk_6OwR6c7tL4L9i_",
        };
      },
      46079: (U) => {
        U.exports = {
          ImagesCtn: "_1qcMwZqiAwD0aa-bpPRDPD",
          AllImagesCtn: "_3mYNn3Asuzn5ilIQ-_jjEu",
          AllImages: "RxFaOYvEjQF0lVUfJj_zJ",
          TilesAnimation: "_30Wt5HlsA-Eu-wNp6fxvAM",
          ImageTint: "_3vfLRYyJuqrXOJhwTZrjAQ",
          Sub40: "_2GXGtIJU7vMFbIAW5q8vTf",
          Sub20: "_34EFfExWoNFsS8bKk0VoUk",
          Sub10: "_3EpFGAzMavgSiUDDmsg9Su",
          BgImage: "n692TaP8cknh66LhvzuSm",
          FadeInTiles: "_3pF3M93ASmlVi_qQpQ8EhJ",
          SingleGame: "VGWhXeoNnGx0Nu7JmHSb-",
          ElementFadeIn: "_3rgQy0-g18Dq1Gfu6ji-Md",
          BadgeBoxIntro: "_3hHrxkhw520f0Hs-n9AnOK",
          BadgeBarFiller: "_2nzlC1bn4JMHO_ASuvMEIU",
          Appear: "cvzGtxcLwg5FfEA1hQoPG",
        };
      },
      7550: (U) => {
        U.exports = {
          narrowWidth: "500px",
          TopHonorsCtn: "_1xRukfuClPSjIZLjlEk6h6",
          BadgeBox: "_21Ah2u28syhV2rlAPwMhaE",
          BadgeBoxIntro: "_27O0fjjgMrRHnSrRgVtE-n",
          BadgeContents: "LJ7gDPckBrm-YDgoz6DGK",
          BadgeRarity_common: "_3-bQ3E4DMf_5n281Nkf1ms",
          RarityText: "_3G_wLvF8j0EQ1R3FYq5jh0",
          BadgeRarity_uncommon: "_15jOd9Or8Nlns8-B_zza2i",
          BadgeRarity_rare: "_19UKxZGQyshnjeNpYi1nvL",
          BadgeRarity_epic: "_3NOIRD9e7IM5-TLVCKEvKl",
          BadgeRarity_legendary: "DHBfIiW8t4Eq53k1gUIoD",
          RightCol: "tqzsMd9F4gOQE0rvjrhk2",
          RarityInfoCtn: "_2pG3egzajPr71UqF5a6Bgv",
          RarityBar: "FMjFQOqXJnVy_Xq8yvYvg",
          RarityBarSegment: "_1qPJv8yjGGqq0UomJP4K5F",
          FillerBar: "_1MuDaAror-Nv4iann5CagI",
          SegmentCap: "_1decu1RKC1itCMUS4pIfQ1",
          BadgeBarFiller: "_1VATKs3YiwjKvaPT7GZG73",
          RarityDesc: "_24SL-fV5bW6e6LYWmh13U8",
          BadgeName: "_23i7ZCGSBAQ7WjuylUCFRo",
          BadgeImgCtn: "_39qIyov4d4vTxLMlhHrae-",
          BadgeDesc: "_1SgZPbHZnynGUu_VtgFOYu",
          BadgeGetBtn: "_1ZwNnTS9JYrzyWxjO9HfxP",
          SpiderAndNumbersCnt: "_14YQc3jfPwDEOMkf-RdDyw",
          HalfwidthColumn: "_30u4_GfbBdsj10LIZ1XRT9",
          SpidergraphContainer: "_2zK9j1YXLri8KFBWnfMsfY",
          GraphBox: "_2n56d2EIQipRF324TDzoJ-",
          RadarText: "_1ehp97TY4tB7aqOFQ-RGoB",
          RadarTextContainer: "_2FaE4pz2ePLC8AgnZhkiLI",
          SpiderResponsiveContainer: "_3-KEFLyIoWy-pEwkMHsSM8",
          RadarChartLegend: "z0GkTqJOm_AD3BzpjYFSd",
          NumbersRowsCnt: "_1s-wItOHq6tbjWgJJFjwhd",
          NumbersRow: "_3RI2YkJx0bGHNSCp5FnAeE",
          NumbersLabel: "_3-pyKG_kLxyH1QHI2yODAQ",
          NumbersValue: "lc_D93nypTbIDmoUY7nkh",
          FillerDots: "_3grXxuZj-xvBgPF0v2j6Re",
          Disabled: "_3WDy2xIJ0lg6PdKgMD2Jah",
          SectionLabel: "_3xAHxBIB8MP84yv-91QC2O",
          SectionDesc: "j92P6KZM1aGlIJsDQk70s",
          PlayBehaviorContainer: "_1NBM7HHSr5iiWjw5V7n_Gr",
          ProgressBarFilled: "_3d5FOpbSQjWw40Pqj6Y81J",
          GlitterBox: "_1a0N2rkQwPBOPmvajfGOCa",
          GlitterSecond: "_2Gj-82HjEyw_6hnXo69Mmg",
          Glitter: "hxngh_EuJQRQvp7j5n6td",
          glitterMove: "_2UzEpq248nzd8wEMpZ1K0w",
          glitterMove2: "_309-ezxjaVe6n411BKP-W_",
          PlayBehaviorSectionSubTitle: "_3g3VyENVs8t4tDQMyoYT4u",
          PlayerBehaviorProgressCnt: "pYgyDsJXn-VjTQhuDMybq",
          ProgressBarWrapper: "_2VweoBidChWZcLa4D73n_0",
          ProgressLabelsCnt: "_1AxNLz0ON3XOXxTyJ804q5",
          ProgressSteamAvgLabel: "_3_bVGZJU_XdCTZ6Ix9nhsK",
          progressBar: "_3ghXbVOWZ5WuZ58M_LIsnH",
          Appear: "CIj8TuzrPRjLkGsyzsFeo",
          ProgressIcon: "_3J3rXQY_3hFW8I5oHVyXuV",
          ProgressIconSVG: "_3GZf3WljHWwtVg0dDTQLjS",
          ProgressRightSide: "_3FXre7e02-JEDaH15DtHvr",
          ProgressBar: "ImOR1JUm5l4LpsRG66er6",
          ProgressLabel: "aL4v7TSjBZ1iV30T7NLMc",
          PlayNewnessContainer: "_30ZGr6fybpJClGq9Q0mV9i",
          GameNewnessComparisonContainer: "_2ejw1WQ-HeHoNNrhVdgmEq",
          GameNewnessDataCnt: "_2m0q8XyDe8nTwxl_9Ul-18",
          WheelChart: "_3uLghcqfoV24xund72YiwJ",
          WheelArc: "tX9oQNylde99eIJstMziv",
          Active: "_1lBtgjjcxIeyuuL8yekm6r",
          RightSideContainer: "_2xzsHCp8IUJ83mtdjODbd6",
          DataBoxesContainer: "dRN22PLE4TCua46_OfscK",
          FlavorLabel: "_3LBCn2NePIkbMMx1u925Eo",
          DataBox: "_8TJrJ8mMK4nrAiF-of2_j",
          PercentageLabel: "_1fy0hXSeEbU5dVaT4nus1g",
          PercentageDescriptionLabel: "_3dO1HLgXPLStdt3_v6KB_B",
          DataBoxArrow: "_1YSSnhfFqtCkqTpBUE1mOE",
          GameNewnessTitle: "_15PIzlOAYIR0CLxb4pXQ2y",
          ElementFadeIn: "rfg_iJyvbqdKOmoltC11I",
        };
      },
      67554: (U) => {
        U.exports = {
          narrowWidth: "500px",
          strGameDetailsTransitionTimeMS: "300ms",
          TotalHoursContainer: "_26dqOMsTBgm0SSsvId6ORf",
          HoursPlayed: "_2LPb-xbBVpkAAxJmd6HETD",
          TotalHoursSubtitle: "_6_GH9Ilqf8dEqdtSlAe1",
          FullWidth: "_1teE8Smuji8XvadRY8p0vU",
          TopGamesContainer: "_1j8KSE1MOgkAPtRye2FcTh",
          TopGameTitleCtn: "_37ivcc2B6InJBq1X6WZFW4",
          TopGameTitle: "_3xEkRF_iLBmujF59Pe0e8r",
          TopGameBlockContainer: "_1o-OaJLHoJcCZBa1I48gl1",
          LoadingCtn: "_1fmJfwl-SoSFwVEgWOhwaA",
          OddGradient: "FZUw64qOion40kz4qjnNM",
          StandardInfoCtn: "qUC7CMjMsTZ6hJp-K99l_",
          NumSubtitle: "_3vVnX6xBorYNy71pY8OFrQ",
          IntroLine: "_3uV4WYRLz2_klVoEKyElX0",
          Title: "_2geomi2LHj8WSROPCLZvFQ",
          StatsGroup: "_3nXdDUZyLDuZxhkbe3WpO8",
          EvenGradient: "_3pmx1Oqt2Lm1d0dvol2IvU",
          SelectedInfoCtn: "_3lVSateAu1N_OMGFfya3GU",
          BackgroundImageFull: "_3yp7l6ya6Tr2G_hZK0yrXz",
          ElementFadeIn: "_3KpTV4lY5Bru5u-gjzFe8Q",
          BackgroundImage: "_1X3FQHJedVWvbjs56c6BBw",
          InfoContentSpacing: "_1v_YeKhXtslPWX844L_7_W",
          InfoContainer: "_30H7nI9nrbbFe3nWWeSb3n",
          GameLinks: "_1OZ4wvkQU53fcikZxtoS3u",
          GameLink: "_3qV5gUyj5iGBqcNgaMPqnm",
          AddToWishlist: "_2uHs7fNKiLRmmHo6s4KML9",
          TitleLongName: "_38SjyWlvZHjvopSq50Exyl",
          StatContainer: "kIkdkqanAzP63dekKfUW1",
          BigNum: "_1cZBW_oqZuibcjkYHMPAr1",
          ChartStuff: "_1zE1znO1W7hoJ_zLcpZfur",
          GameChartCtn: "_3gqqv8klnI4yoWWC_8Bile",
          GameChart: "_3EsVJMuO1pwzPSZODnxMnH",
          GameChartFirstPlayed: "_4hx2f2YIK36jXY4dAEICL",
          ChartWidthHelper: "iNJ1VTMae3meJbaBeoAM-",
          GameContentCtn: "_27uG9PuRms3TEfY9gPljqu",
          GameCtn: "_3mz1i55z88ycw2HZcW9m0v",
          GameItemDetails: "_1MGhsPCHKZ4nPmn0TD5bFy",
          GamePlayDetails: "_17HtwoPW8D9u5QIY_UNAs3",
          SteamDeckGameCapRow: "Mi9vAr7fhPY6_WfhKja61",
          CapsuleCtn: "L9qSFp_o6cjocmn-ww9oC",
          Appear: "ASaCPKobzSTzRTydkURfZ",
          FirstPlayCtn: "_28GIXWQ2EvbXmXzJhuOhBV",
          SpecialFlags: "HcnwPf22p8HKGwzt30Tcp",
          DemoPlayDetails: "_1shnb23aPhzAJkyQr4Sft",
          PlaytestPlayDetails: "_2CLIAl1BL0WCeQUtTRhW6U",
          PlatformChartsCtn: "_1dYXW9u50OEFuTmTSvnwv-",
          PlatformSpacing: "_3ZxR6FzkWwR49V--2u1EiK",
          PlatformChartsRow: "_1IjT5pnZwpUR31o5PApkYn",
          PieCtn: "odw6igYjRyunNOxrB2KBx",
          GraphTitle: "_8MqgQZjl9ysOee5giblCC",
          PlatformDetailsSetup: "xEGRxlYTxPukyntNdSRez",
          LongestStreakGamesWrapper: "_2TFs3yjwy53Yp0CTTuP_r",
          CapRow: "_2P__JAKuxTG9rMGbyLig2F",
          LongestStreak: "jek6kzFbjfsw16BAlQrpT",
          AnimateCap: "r7XAGApuiFFPoV6lurrw3",
          StreakCtn: "_2e2ltqubwW3qywUrAyoVfy",
          TimePlayed: "_2slxLw4M8M9Vr9jtXRften",
          UnavailableGame: "_1MQbgdEgZhlGmLLiR1Fb_K",
          GameTitle: "_1wIsex7KXPTPHUbe-BTF5_",
          GameDetailsPopup: "_3OhDSuU8orxiNOIktCInas",
          Visible: "_1oy_kWXxUBaXh7ylteD-7A",
          ContentWrapper: "_3C4RVE-PZ18y1tGp7HLpP9",
          ButtonCtn: "_1fLIzVLSNOY3soMmYU4meK",
          ButtonIcon: "_1EwX0ZVJ2tdCRmrsNcpVxz",
          Disabled: "_3bsl6OV_YohLqQXmY3dRzs",
          GameWrapper: "_2u3_DB4kwxJoUPWuWddgpn",
          GamepadUI: "_2AqQb9S7IkaALP-FhllCLB",
          MoreButtonContainer: "_1bdMqy6PN9MY2kAlkvOa4b",
          ShowMoreBtn: "_1QVx4fjKe1xYLd5SutRcke",
          BadgeBoxIntro: "Ij_HjbgrlODiGCVOGKMFK",
          BadgeBarFiller: "E8NuEoVvGVywxjyvVR-BL",
        };
      },
      66599: (U) => {
        U.exports = {
          narrowWidth: "500px",
          FriendCtn: "_1dEBrEq6v5neOeVMAn5etR",
          FriendsSharedSection: "_3zKPE2ZlhrQ9o2OKqQY2wz",
          FriendsSharedSectionTitle: "_2Jnwqsg3lgHxusPRrKpXY9",
          FriendsGrid: "OQcaqm5MQt2_pbrXD1P21",
        };
      },
      59848: (U) => {
        U.exports = {
          narrowWidth: "500px",
          Video: "_2etdSviTmvjF8Hl4f-2V_e",
          PlatformDataContainer: "_2gJdNLieV8sIpM4ocdI50t",
          DeckContainer: "_3G2neo4kGgRs1tdngZT55o",
          StatsRow: "_2kmTj9-pJQ0NgJAbK7UTZd",
          SectionSubTitle: "LuJJqNllbSMtb0VnytZdq",
          Disclaimer: "_1h_amHhk3CIML_H5gess8b",
          SectionTitle: "_2B7AwIe2bIuk7HrlDOE6h-",
          ScreenContainer: "_13EBYwCFv0Op4B3nzxvLh5",
        };
      },
      95781: (U) => {
        U.exports = {
          YearInReviewContainer: "_1FBH84bAF1zr-VjJo8y2YI",
          YearInReviewContent: "_2Mj4nu3kK3ic2TFv5uwGTw",
          TopAreaSizer: "_3kunV-qalJTBLAvNB9lUDg",
          TopHonorsContent: "_35FgJpDAN15_dBLfBi0_I1",
          TabCtn: "_1BCmnle592rRAKSOAPtSrK",
          TabBar: "l1orY7YezCjrB7L1kIfaf",
          Tab: "_2MufqkO6K-CA0fpAVMFIoH",
          HeaderCtn: "_39_9JtPLKvxe9QGOk1oewb",
          RewindHeader: "_1wMXRi1zY6UsfJCNvUaAri",
          AvatarName: "_18fA1FrcAbmSemBrDK5LD0",
          UserAvatar: "TfeqoUci0-UqDlhwTEM80",
          UserName: "_3_FPlETPb6r-DOfzYl6P5d",
          InlineUserName: "_3W5syPjWYB_krkRd5QnKIR",
          SectionTitle: "AmQ9dRhZqhOyU0Vgt3nWR",
          Appear: "_1sCZqgfiEATDQnjU1uwVFT",
          SectionSubTitle: "_3zsxWXo0kjHizy0ZIIJnZj",
          SummaryArea: "_3ollvhyH9ny_q06Oe2aLRk",
          SummaryGridCtn: "_3elzqk-ovvvgm_juSIuPNf",
          SummaryCtnShadow: "_2AXFQ4F1EgcZAVJgYC6_KQ",
          SummaryGridStandard: "_3JG0SEiHnIZEdLbZsonuCc",
          SummaryGridSparse: "_32Oxt99Zo9hayRjupiGHPu",
          GridItem: "_2VmQCFgc2JWv68BUDm9Wad",
          Game0: "_31y86iewfJevqMeC64jycn",
          Game1: "d50ogX2vPanryM2rfmSIe",
          Game2: "_2lQfzw2cT6_ZJYA-_NFMuZ",
          OverviewBlock: "e5tzawEgakS3kCUqmGufT",
          BackgroundImage: "_2UVYU3krJstwNrAYNcRAtq",
          StreakBlock: "_3VDFEpELSoXlSqpx15AulF",
          SummaryBlockHugeNumCtn: "_2jeQGj0yxc0wC5a0ejpDab",
          BigNum: "_36SHEtbxVO-bdeVEiDGVQE",
          HardwareBlock: "_3NyHmZWdGWlXgOoM3yK756",
          DeviceBlock: "_3tXh4Ql7s9jHHs0fvyu7OF",
          SummaryCtn: "_9eVnUDqp3hiPB-zV6F5fH",
          SubtleBorder: "_3AqWGkHdS0_AITodk35_vO",
          HardwareSummary: "RrFxso2vRHP_BFYZRtLKN",
          ContentCtn: "_2Kh-Fnr-A9-3PyfPKygZrs",
          KeyboardPortion: "_1eyX700HjDwX7o9Gf7sZX7",
          Stat: "vX0bjS7UkoT4elk-uMAzW",
          ControllerPortion: "_3-LlHlDUffuEdEhqn_fF0q",
          Small: "_8N3vK9BauR88yZBWNO0RY",
          Large: "_2I5qZWGeNJ3g0yhJA5Nbu",
          Subtitle: "_3XeghuSJVO4CveezqbcaZh",
          SummaryBlockGameName: "_8viNZw5IwfJRm9cHP_IDN",
          SummaryBlockExtrasCtn: "_1fY-Tu9TH4Rv4r_U5vPalT",
          BackgroundImageCover: "_3qbUF5tGnx-SutxOU1os0W",
          Achievements: "_3-l0QbG1-WxExcoGgm7EmV",
          SummaryBlockTitle: "_3hephqXvhUhkVKDgj5nmL",
          YearSubtitle: "_1HWWigPOciAtxrEn7HKA32",
          Big: "_1l6ltRRbfgl2ijXAYrRJSU",
          StatBox: "_3vEOCNAzpH0JBnbBhVsdt0",
          SubSummaryCtn: "_2gELEfRyUEy3HHxvq6S6TL",
          LongestStreakStat: "_1f0ilr-oqfhQeiYVpR4AYQ",
          SmallText: "_1oy_znusTsactsUv0lcdpp",
          ThreeNumbers: "_1jk8XIL3x7EHQ68XgUu9uR",
          SixNumbers: "DR-XlhrC0TE_ZFpFyYQB",
          SmallLightText: "_1xvosaBDdEz7UVfZuDlk6M",
          CompareCtn: "_1GqbHw2HlNoD2Ju64TD3EE",
          CompareArrow: "_2-mjGX7QcMabe3YEBdyaR7",
          CompareText: "_6fHKPba1vykvL9zuHDjtC",
          ArrowUpCtn: "_3ZMNdZ7jI04AA-kXG21-Qg",
          ArrowDownCtn: "_16rkeToVh-fs7jDJ-1R7tk",
          DeviceSummary: "_1KoU9glSSibZHJ7qkFZutI",
          HardwareStats: "DH4tXkEiBhaZanvkp6C2d",
          GraphRelatedCtn: "_1cvZSvZCocjPc97ct0WTlO",
          TimeRelatedCtn: "_1yKIMKtHZJe2leY95-249d",
          TopHonorsSection: "_3Ftq54wyF0jWvm5uWIhaMe",
          AllPlayedCtn: "_1x4gk_j60eJZkFjHCd1WTM",
          AllPlayedContentCtn: "_1BzOOVF-4AgldOIw56CXa8",
          AllFirstPlayedCtn: "yxO2uLVx7j1Am28416X24",
          DevToggle: "_2Mq6RSm9W8bPIE47lqGzTp",
          MissingUserCtn: "_1d-VeVh51k1oXtD0nesp45",
          LogInCtn: "_283aoD-dfL3wDTV_EbVZJN",
          GenericBackground: "_3g9L1ya-FRJR5x0Rm18-yf",
          LoginButtonCtn: "_3ZeSCxx09t1lLRBHL0BF11",
          ErrorMsg: "_1Crrhzz4XoGvpeVfYXK-PB",
          HeaderShareCtn: "_2r87y_I4n4IejydkBFpA32",
          ConclusionCtn: "itHd-yTv2U16Vo-ahcZ6V",
          Questions: "_2NoUb5dj63JYCZQFf7wxqk",
          FAQSection: "KoMkH2575lj6KYPK6W-km",
          QuestionCtn: "_1_WCkqGBRWdIo_8N90hODG",
          Question: "_2jTo384ZnQxcqcLXcVgDZW",
          Answer: "zGzLS8JqE8E7RZ0sv3dDw",
          BottomCtn: "_2mhHSJClVpbn2dZ8z8-3A8",
          ElementFadeIn: "czbvk6RS09EGLTyXWtLMN",
          BadgeBoxIntro: "cn3fLkMAyNLN-X-f9DwDi",
          BadgeBarFiller: "_3FOBYY4Lz6BaExbbHJaFlX",
        };
      },
      99514: (U) => {
        U.exports = {
          narrowWidth: "500px",
          Section: "_32a0u_YJ51VJHOpKfvL14e",
          SectionTitle: "_3vl8pA14hNSDohCEhzqn7F",
          StreakSubTitle: "_6lD5od3HT57lmMewY2U2d",
          LongestStreakDailyCount: "_2V5k0eMmVhbAclxWRARbCe",
          StreakSizeCtn: "_1uHL0sMxUJtsbx6-d-Nrdv",
          LongestStreakNumber: "wzmjOIu99CKEa8bE6tBnL",
          StreakDates: "eeemDk0mwaq6hJC7WGniY",
          Appear: "_3KLb3e-gvV5Fj1E7aLnrvG",
          LongestStreakGamesWrapper: "_3ztmUyDhAYvhR-u3_eUh3K",
          CapRowTitle: "_13uJvC1yHQh3iu53HWuWLq",
          AnimateTitle: "_26I4e5Zp9I8a9mPCYmZFdr",
          StreakCtn: "LC_OKOvwf1Ev-e4IXwZ-V",
          CapRowCtn: "_39X62UFb1w7qveUvQRoxAT",
          StreakBarCtn: "_2z4wN6wbYTrFUym0LIf4fN",
          StreakSizeFullBar: "_3sks_BjYp7_dYZR83_4gX0",
          StreakBarAppear: "_4KjvW9qaMhOilEkVoJhO2",
          Tick: "_3XaLQLE32oY9R2-igi470-",
          StreakTicksAppear: "_2_94JKx9MeaVlAWi47w8Qf",
          StreakTickCtn: "_3gcpmfrWmGBCsnDWX_5Mlf",
          LargerTicks: "_1hWzhV3FIdpxe9Odo3KQeQ",
          LongestStreakBgImage: "szI1UXDgRjP3DPnL0v3tk",
          ElementFadeIn: "_2yUpCIbyoEFbgp4HbNSkE1",
          BadgeBoxIntro: "Fpz0EAQYBbZBmi-lZwu1V",
          BadgeBarFiller: "Oawh_jAsPd8VQjpj_h5d9",
        };
      },
      32490: (U) => {
        U.exports = {
          OtherYearsCtn: "q4QkuK-x7dMa8swScEPuc",
          OtherYearsHeader: "_22IIjdBs6-IZ5ZbTmdrlz-",
          OtherYearLinks: "_2iZI7ty8oWriUdC36q0Tk0",
          OtherYearLink: "_1DW3LygGNkuIGea4mxKccP",
        };
      },
      64514: (U) => {
        U.exports = {
          narrowWidth: "500px",
          ScreenshotsCtn: "HFVMb1qsEW0wBg6JJ6HKP",
          ElementFadeIn: "_2S3v_ww3cjo47nBGBpGssj",
          ScreenshotHeader: "_1BlKZmJyelqhd18DoemZst",
          ScreenshotRow: "_38Vtf5TTBSAkXjjgUyrYQE",
          ScreenshotCtn: "_2laURq9r2L8LUSOBZ_a9yP",
          ContentRestrictionText: "_3gR9ENAT8zf5EsIS7BUmuA",
          BadgeBoxIntro: "Retjwy2q1K-ICTUoKfw2y",
          BadgeBarFiller: "axniEe6cgZRgO0jcL3MX9",
          Appear: "_3MN1ntEvaSTBiNf2Sy3jpO",
        };
      },
      64021: (U) => {
        U.exports = {
          ShareOptions: "_1GTNKoqExpB4ypMhkppYXI",
          ShareTitle: "_3vsN5FX9Q4iAxSRJi52ii6",
          ShareColumns: "_17-suJNiK6Qevk_3Uw1027",
          ShowcaseInfo: "_35BgPO9cE8odvnQgcSec2O",
          ShareCtn: "_3wBwgFLePqfIcCKHyA6g-K",
          YIRShareCtn: "_3l5ecqQPGv_1e29eSE2Yw_",
          ShareButton: "_2MSFQv8F34No-YaWoPUlC_",
          PrivacyWarning: "_1mHX7Rnmm65ymfxaNJuN8C",
          ShareTypeTitle: "_3X3w682EtopjFadHYWO8nC",
          ShareArea: "_11Wb4dZGttl7jOW2o_OF27",
          SeeRewindButton: "JIh21cFM3TAJhriJuK8lg",
          Visible: "_1qJRh1dLXCnKaglc4szmtz",
          DropDownSizer: "ZrLd2gp4EdJNEtWgHX-H-",
          ShareHeader: "j8KV_szYFpuGx7laNzqiC",
          DropdownButton: "H5GE-sEeFx3Nv8992Vu48",
          Error: "_3quoXc_g1S9w4WTXaDr_-m",
          DropdownOption: "_39UwyRyvMneijogt3gratx",
          ShareText: "_3OTeC-8X-moj-kosZaRG_G",
          ShareIcon: "zOiWIqdjr4HIUZy3CNUuF",
          ShareModalDialogCtn: "_1C2t5QNoTGA1zu7S9JtVmm",
          ShareModal: "_2Eeev6ktdPSi1jP0CfLWNX",
          ShareLanguagePicker: "klz2du8mPgLnSyjzwAe3g",
          LanguageLabel: "_1EfrS0jmViNrvl-AXXarPj",
          LangaugeDropdown: "IqKRYg2Jo13QpdWOjjeSQ",
          CarouselCtn: "_3FWwnMR_ks-BJUkJHUQ8F1",
          LoadingCtn: "_31BEqh5au_4_wendTZtriA",
          PreviewImageCtn: "_2rP37yDZZBLNZ2UGyIxwJT",
          PreviewClickCtn: "_1Pc-mNN4lTkV5oNSoqJY3o",
          PreviewAndIconCtn: "_2ozJYnOUQvZRtj3zXgOp4Q",
          CloseIcon: "_3Th3aqWEyo8qac0DYZdUBw",
          PreviewImage_1080x1080: "_1gelQ0x4ehcZ_04U69CAdn",
          PreviewImage_1080x1920: "_33agkmabhMA0Y9GlulkC9O",
          PreviewImage_1200x628: "_3t5BYPDL4paEV9GPrloU9D",
          ImageArrowCtn: "x-PwlD-rTHwx91X9Yca9e",
          Arrow: "_1Vi63fRoQ1lMWUA7KnQL6G",
          Left: "_1pL-n6PEp7gDRLJT_lc4wJ",
          Right: "_1ahUUl4tU6ECtcIcJiD4kC",
          ArrowDisabled: "_3VRwEnyNOHd_x5DEvd-voD",
          ImagesCtn: "_24vEWYy413ASY0TMv9NjtA",
          CenterImage: "eUT9rxdPQ1P8zPaUa24wn",
          ImgAndPreviewCtn: "VM9ybHjC0GdAyglpQhs0f",
          PreviewMask: "Cdij7mqtPHadhoklTePc7",
          Peek: "_3uXxkuQC-V4bquMSLBwDJx",
          RightPeak: "_35jGQ6gLSuhbZFNWiQuvuM",
          LeftPeak: "_2HJDYK4uULDljUCepvp-MN",
          CenterImg: "_1YX4J6RHoSc-mW3Dx-9Q0l",
          PeakImg: "_1wcwr_R5bQtB2HMNPZOL0F",
          InteractButton: "_229ksvubaV_uqmqWlyOx4S",
          InteractButtonIcon: "_3HiaZKPBrGcVMqmP5aiuY-",
          InteractButtonText: "_2K1i4AcBTWzwIie8SlJc0A",
          CarouselHintCtn: "_2xf9DHqVZGnWXfpm6F3QYf",
          CarouselHint: "_3_YMuAuBB9NU0XUoij3iMn",
          ActiveHint: "_1NLcEAum-1UwXFZ1Dzl2sO",
          FormatHint: "wq2AMTT4Knv2WMoS5JZzW",
          FooterCtn: "fZplNRpHCwmhANg0GFeJn",
          TooltipCtn: "OJUhFxi7SX3IGw8q5LGuw",
          ShareURLCtn: "_1IOAha5MEbAVC_O4QeqYv-",
          ShareLinkButton: "_35yo9GEmFyTkllkyz0GZC",
          ShareShortUrl: "_2ZT9aXzOEpiTTfKjBXiQiT",
          ShareURLTitle: "xIIbxUuuQKzQYrXwapfD8",
          SteamButtons: "_1joAGM6tBKBrH5tte-2iZr",
          SocialButtons: "_3KNxcwb-U1nvbJ9iG8pZbj",
          FeedBtn: "dkeBxeBky3VtX0xWpYOC9",
          FB: "VcTGqwOWqXNnq-gj2KExS",
          TW: "_3hjfK5-7OP74Zy_ywaOaD1",
          RD: "_3kk1OJycvMRucAVckmSTzu",
          Disabled: "_1bpHHTC7HvYEMsuRIjInct",
          VisBorder: "_2Bte1jEcx1xWZ748IyNRGB",
          MobileCtn: "_2MA6bi7DByTfZRDaukv61F",
          ShareLinkIcon: "_2n1Y63Vt8TdcnfmRnIKM0h",
          ShareLinkText: "HMDF7pMwhFbXs0_jYFoKP",
          ElementFadeIn: "_3_CA6jxTDtdeP097_ybDKj",
          BadgeBoxIntro: "_3KDm8EwU_3Sz4_wdFW3wgi",
          BadgeBarFiller: "_25GQdCYkcBLyHGYsskioXv",
          Appear: "lI6QfIVVz4Z1rvUQ_ndRn",
        };
      },
      95970: (U) => {
        U.exports = {
          Section: "_3Q6xYLon3xp6vd3Bt-DtpC",
          Windows: "_1vF9utiJ4zPDJltOokxCPu",
          Linux: "_2sto6qgDyyfXZSaNXVLH2S",
          Controller: "_3-3rSWam8RFS0p1CFk64Sr",
          Mac: "_38lJlaE06XJ8bToTpU4p6t",
          Deck: "_18y6846uY0I6REK6_Bl1Hy",
          CapRow: "tTYFTdN8e3B_2T3-XrLdc",
          PlatformContentsCtn: "e-ft_eteKj5RCLPFbLgeR",
          VR: "_CEQfQH1OkR8jt1adMzo4",
          SectionTitle: "CzWCpgYPO2uaG0Z6dmyR8",
          BackgroundImage: "_1WIHnfDUg1Ris9ckKCXkWJ",
          Playtest: "_2B3yLpEzmGVHlSorQjxlPa",
          BG_Playtest: "_2T9_95J3xfwWGQaOzLsFhM",
          Demo: "_3n-kz3Ry2dhIathOLI4IGw",
          BG_Demo: "_2RhbJSRG7YkXKScVbk1NBI",
          GameImage: "_3itig7mcoZxe6CnZ0G_PkS",
          SectionSubTitle: "_1bbOkPv_T0qFeU-EJhebve",
          ElementFadeIn: "_1u6VRQMSXcBWw8IznhXyej",
          StatsRow: "_2kV_SYAXlo3VhfzS5woXKw",
          StatBlock: "e603WE5bPLPSnZARvy-3X",
          BigNum: "lJ1mE7HcpxArZX1S53dZv",
          StatDescription: "_1eD7UBNdpC4pcVHfz6ewf4",
          DemoSash: "_sTGZcUomFCt0EYSpASw6",
          BadgeBoxIntro: "JFDJAK3sl61nIHwfkPwNw",
          BadgeBarFiller: "_1TdxYijmKImjE7_AhaYM1b",
          Appear: "_7F-QmrqR9a0-bvDkV4ODK",
        };
      },
      39743: (U) => {
        U.exports = {
          MonthlyChartTooltipCtn: "_2XmLnHRWLZ2ZW9YylsShPf",
          TooltipBackgroundOverlay: "_3Q2ynQGZHut_Nt0xMhzYLP",
          TotalPlaytimeContainer: "_1yw88uf609qe8XHd_INEjo",
          TooltipImageContainer: "_2ioQ5H35WBs7Lhi0CJ1RaZ",
          OtherGamesStack: "_3a9-2D_TAVad7ZuhS4O5-X",
          CapsuleImg: "_3oEgOwxcjrHW8whKz11y6T",
          HoveredGameLabel: "_3DmEc5HbQHvRrhSshV9-e8",
          TotalPlaytime: "ObTF_MsR6RfGwRVUX3mWv",
        };
      },
      47277: (U) => {
        U.exports = {
          new_games_color: "#3cdf6a",
          used_games_color: "#4df",
          old_games_color: "#e496ff",
          pie_windows: "#28aee1",
          pie_linux: "#cd4141",
          pie_deck: "#9c85d1",
          pie_mac: "#939a9d",
          pie_vr: "#55af30",
          topApp_0: "#00a299",
          topApp_1: "#017baa",
          topApp_2: "#044fbb",
          topApp_3: "#2325b9",
          topApp_4: "#4a17a6",
          topApp_5: "#881abf",
          topApp_6: "#bf1a72",
          topApp_7: "#cb5545",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "wLcoYWskcX-WdwM80FcWd",
          SingleGame: "_31M-TwCA-eNzIjYjjbbRss",
          ImageTint: "_1SZVVaG7UJhS9qlgdNBRB4",
          Section: "_1tFD84W1yIF5XblONw48Er",
          StreakSizeFullBar: "_2d2eXqEWJ0VqhjC3XNt955",
          LongestStreakBgImage: "AEfs48npNOs7PsklaKQxL",
          Tab: "_2ucSwGfZ2AsP91rIgpYzVq",
          UserName: "_2abMWA9UNwMI6BYz8ageN",
          ConclusionName: "_2LIZW41r4i3LCn9wYtJZFm",
          GridItem: "_2VCOc-AY0D8dBOVhuBWjes",
          AchievementBlock: "_3w6ckg8P8IMl8YXkmAoE-c",
          StreakBlock: "Y5ho7ytc4Q0MFUzxAxUJE",
          HardwareBlock: "_1ljEln7y5NmyV8-686A5tu",
          DeviceBlock: "_20l6G_fpxCmwTlLTRBXvNh",
          SummaryCtnShadow: "_2icFjx8wVXZL8n19vN1Pnt",
          BackgroundImage: "_2_TD0l8kMc5PQlyTiIPFpU",
          SummaryCtn: "_2m_pbZrGAbk7TRHDOwZJt9",
          TimeRelatedCtn: "_1F5_QWHvb6XSU5S7oaSGpQ",
          TopHonorsSection: "_1tc8tBjsTsJLvWaE-jrRC3",
          MissingUserCtn: "_1tHOJGiDRW6DoHLKzI1c9G",
          GenericBackground: "_1OocYvosa7WJeTFjtryhW2",
          LogInCtn: "mU6TQvR7SGZ2x10Cl4uNN",
          FriendCtn: "_10UIoD-XRojfRickf62ZTS",
          TopGameBlockContainer: "_3cqzPE9ojgybX_YLM2LciT",
          OddGradient: "_2MFzmPCaRDOMvCIKivbWEh",
          EvenGradient: "_2DtTVV8bRP1azZaUDiFVHW",
          TopMostGame: "TEmY-_rEET_mY-UvuQx7e",
          FirstPlayCtn: "-cK9wrdjQGd-QRMbnBIR1",
          GamePlayDetails: "_161UjXtlOv_RVKerItXecq",
          PlatformChartsCtn: "_2gfncxf5WyN1lFA6C6mrMk",
          IconAchievement: "_1ccyh3rmp7r54UTu4Kfu4P",
          IconGamesPlayed: "_3qZMf_DUVgSslwkWJnAeAk",
          IconStreak: "_3gW-bII_VXHVppmHWGQg66",
          PlayBehaviorContainer: "_1SL9gkjIROp0eotN8Hr5Xk",
          ProgressBarFilled: "_2lEhYA8vvTg168yH1rNQs0",
          ProgressBarFilledGradient: "j_CK0NQKm75mWc5VPFMFc",
          GameNewnessTitle: "_31cdzkQ4ZCu6E177tUexf4",
          NewActive: "_2WOXA55SDgHgLI62aMu8QW",
          DataBoxArrow: "_2j2hP_Ctg-1k6NFO-11Iev",
          Background: "_1DEzdqjCUNYNmGO-4qZGJy",
          UserData: "_3Lp_9mbe-5YFIirm_VUkgZ",
          DataBox: "_2GDYoxSn-5bhfOnWwcQDfJ",
          SteamData: "r2PuX38K6EeRxmQ88xzBf",
          Border: "a5nHY6wCEy6XcQYM0SaS4",
          PercentageLabel: "_3PPdnAvnF44YMICe8afQqk",
          Color: "_10WCyc8Z0F62B8xlJTeioi",
          PercentageDescriptionLabel: "_1BwKK43gcwo28Ai0IFXKhN",
          UsedActive: "YETzIgKqRLjMFrtO-4mzm",
          OldActive: "_3kJYFk_mL53rI9sBydEf4t",
          AllGamesBGImage: "_3BT7r54MhJESU8AzMNlenV",
          SeeRewindButton: "_12Vol7iOpxdPj9khHmvu-C",
          MMFrame: "_2k7W3c6eHM1FF2eZzLHPko",
          MMOverride: "_1-C7jjlJ_bFish0JBtAmO1",
          Header: "qbl9w824tA4Rg_swy8lrh",
          YearSubtitle: "o_tcGc2hbfz8yU4SmEmrX",
          ReplayLogo: "_1AtgqYTkJSLJqOrCpWHra4",
          ReplayLogoAccent: "_3eOhRpPKC2bUY7DggD6axj",
          Hashtag: "_1HA1gn9Frk0gNww6J0fIQ",
          Avatar: "_2z6vRQoDkvMy4-in2CDkGO",
          DataBlock: "_1DMPjn9qVSsHxmOTOzqZ4v",
          PersonaName: "_27aW3ZXUhoCo-hrB7BsBTN",
          ReplayHighlight: "OoOok9dpo33D-vJaPWu2v",
          ViewPageButton: "_36_yhgb9daer8pzM_3ol8M",
          Description: "_2SJb0XwqKIo-DdjDrq4r2w",
          OtherYearLink: "_3itf8y5EOGxutexNfOa8cQ",
        };
      },
      25150: (U) => {
        U.exports = {
          new_games_color: "#d67070",
          used_games_color: "#683db4",
          old_games_color: "#3898b0",
          pie_windows: "#d67070",
          pie_linux: "#683db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_2w-zjJjkoeDIb-C5GhTSof",
          scaleBackground: "dO6cB-SqYkTl5OqLtW-JC",
          SingleGame: "_10YwGIpb0ZJNaXfpGnHBt2",
          ImageTint: "_2GknM_LlgKxbbtN-pcTf9t",
          Section: "_1z6_Os-ntMNV2SB2jWuAKS",
          StreakSizeFullBar: "_1YndkBDAjs6QdfA7WbPqJo",
          LongestStreakBgImage: "_3rUSvxNxSynWWZDLv1Gj5f",
          Tab: "_19KvzLtRQ9-Q5m1uXJOkR2",
          UserName: "EJneUpw0eEOyIkpmR8rKb",
          ConclusionName: "_2qriz4haXnDJcXhSonp6ws",
          GridItem: "_2u4ymScF_4dMRGuXqN6YWl",
          AchievementBlock: "SK6THAegoaWx7n2L1OMSR",
          StreakBlock: "_1HWMUM4EvU8lG3lW8Wdnz3",
          HardwareBlock: "_3u55AOzBK4Gw3F9Whr2g9F",
          DeviceBlock: "_30NltD8972gdutFNYCw8gE",
          SummaryCtnShadow: "_2pWvuCdj5il0MXggZMwLLV",
          BackgroundImage: "KH2X2qTp8hdZp_fnGTvk_",
          SummaryCtn: "_3B7MSTJad91FqdpvbYmYpM",
          TimeRelatedCtn: "_1NReDjhB8y4CeL8J79cwG6",
          TopHonorsSection: "_3_b2Ul0vfz1cfIQUGnvkgT",
          FriendCtn: "_3vzUIbLPK4TC7FoOsbgo6x",
          TopGameBlockContainer: "_3F7PUMGMU4V8RNuW8b9NID",
          OddGradient: "w_LxbT-xjHVJAG3DwLvO-",
          EvenGradient: "_94te0EvHMP3bmVjDN-sRr",
          TopMostGame: "_1rn7C8gOo19reFJ4HWbHZO",
          GamePlayDetails: "_2qarmb9HfWH9bNm4v9FONX",
          PlatformChartsCtn: "_3cVLkHS6spdqo8eqv4d6_D",
          gradient: "_3zLeBofiHQsX1ipOKpWIi-",
          IconAchievement: "_3meexnu5EixWXQbNR2Xa1b",
          IconGamesPlayed: "_1_Cfxc9HkVks-YETW9ZKPc",
          IconStreak: "_3A0kFiNA546pYIag3hOb8N",
          PlayBehaviorContainer: "_9YqCa_ldtOJ_KRu7KJoIt",
          ProgressBarFilled: "_3wtv1zTckeY6KOlu1lKPc2",
          ProgressBarFilledGradient: "_1bVTXXdcxLMc56aeAwIM-7",
          GameNewnessTitle: "CuXwyUnaDZpkPXGWaDYqX",
          NewActive: "_18-Ta9kFnxPV3MW8MaHLGk",
          DataBoxArrow: "_1wfGD4gWsszIkGZXm0JDzG",
          Background: "_2UelPoml_TdjiRoElz-jCO",
          UserData: "_155LdBCpt-I6Jdq8vOvIMn",
          DataBox: "_1PoOpWtYx_Pi_UBEgi7M8z",
          SteamData: "_3So3GnRNE3gKqFMEHAvVnR",
          Border: "XBvd9Chzj1W3qEc48o9MF",
          PercentageLabel: "_2mv_7D9DDgIxQekwoVSx6Z",
          Color: "_12oaMcntPSS_RU8FHUnPh6",
          PercentageDescriptionLabel: "_19zcQYG67jYetSV0ej2Tv",
          UsedActive: "dGZz3uSYGrONY12cANPNF",
          OldActive: "_3XPjE1fVUnsM0vm4eb80hV",
          AllGamesBGImage: "_1ujDQYkFU24pcZA1ZGeGME",
          SeeRewindButton: "_2rDtQVS8ZlIw7YqmTAyNmm",
          MMFrame: "_28xhDkykmhFaIAt4QQdn_p",
          MMOverride: "_3kq0hsM0tSCDBxOeX-hZha",
          Header: "_2jlbTLneTvBnboYMvfVaUD",
          YearSubtitle: "_2OhWL3dLnJXdCGjYk3fEFj",
          ReplayLogo: "_14dybFtjTMF7Zk63_bgxQW",
          ReplayLogoAccent: "_3-RXvInFsNpERFnXTsYJyD",
          Hashtag: "_1hMTHVqQqQR6H8O-L-1l06",
          Avatar: "_8e85nNcJJGww2CphGMQtW",
          DataBlock: "_1vGwbHGNBIZhsvIsHfW2VJ",
          PersonaName: "_2zTjbc9r9LZ2vU3J8mkvdS",
          ReplayHighlight: "X5blfXMgUPst2QE8pzH8B",
          ViewPageButton: "_3YUlc6lbVRqgBTztta_9TL",
          Description: "_1qc70O9sIUpckqH-jveYLN",
          OtherYearLink: "_1AcAxWWu9yo7s4gOpoGGn0",
        };
      },
      94595: (U) => {
        U.exports = {
          "duration-app-launch": "800ms",
          new_games_color: "#34f3fe",
          used_games_color: "#cc6670",
          old_games_color: "#f4d760",
          pie_windows: "#d67070",
          pie_linux: "#aa3db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_3_yJrtI9CnRo7Vqso02WhP",
          scaleBackground: "_3FyW_RSMfp3r4eHfuMQIA5",
          SingleGame: "_11WV2YgKiO-25bj14xN4nF",
          ImageTint: "aNFQO7OXrOXD4-a8kfVGc",
          Section: "Lge6g_6u-62TV_cVPD7Ui",
          LongestStreakBgImage: "fA_EY16-08_b1VWyI-yWb",
          StreakSizeFullBar: "_2Xt_oaIv9INpfrjOEmjGxJ",
          Tab: "_2v18EtoQUMe9VTbnzTG8td",
          UserName: "cpHihmjgrbGMnejVUXb7P",
          ConclusionName: "_2JN-hnKtHVoX9X7YXp-EBq",
          SummaryCtnShadow: "zbwndVO7JL53kSxjqeLcs",
          GridItem: "_2WPcf3wXBhMImWLz22RXmV",
          BackgroundImage: "DZcTcsyLmBEj_dmGqve9",
          TimeRelatedCtn: "_37goiEY1KefzjRKUKkEWgo",
          FriendCtn: "dtzDI1loGbf-ScWbiNsMj",
          TopGameBlockContainer: "_1_03H_PiAx5_TIA2Y4OOn0",
          BackgroundImageFull: "XkDtww__eYTaxTvGXlhip",
          OddGradient: "BdBfXPzFQrAIMxXLgo95x",
          EvenGradient: "mU0ZPKqgrodRiIqDDPRJN",
          TopMostGame: "_2U1A0BOBmU2Tm96VMDbN3y",
          GamePlayDetails: "WBgtvXrESMem0KVSCFohg",
          PlatformChartsCtn: "p2yOPk8RjNL2sgYPVdUl9",
          gradient: "_3_0UA8g5haRH050dhrXY1c",
          TopHonorsSection: "_3Xt_rws_Lz4-TXJH-R3wXI",
          SectionDesc: "_3-uWyGRhRgXQz4UayHqn62",
          IconAchievement: "_1Ary1qr2Dt1ycwBGxfz0fq",
          IconGamesPlayed: "_1ghrcKVRru_utFcofkcTbk",
          IconStreak: "_3dUH0KBuoVtpr5alU3jY9M",
          PlayBehaviorContainer: "-giyIxoOslRPNdoAe4UfS",
          ProgressBarFilled: "-A2NwyQKoK0uC_zGHLI1N",
          ProgressBarFilledGradient: "_2l9tBf3n2J5llJPTTog4kT",
          GameNewnessTitle: "_2R5I8QSZYVS2f-anYNfg-3",
          NewActive: "_2GcnpaqNIZSrMhYtfj_-y0",
          DataBoxArrow: "_1N16zDKyMMVJzQKmHNX50G",
          Background: "XZe2fdvY-JGoNhdNV-l1x",
          UserData: "_3QSJmi9aPGptdgOEFi2gzE",
          DataBox: "_2Gsb4esS301xmkHX7WT_uO",
          SteamData: "_2xcH0was3XiZQ5EOfgXfXJ",
          Border: "_3hMPpTvRMmLyPRK1zxB-Ra",
          PercentageLabel: "_1to-w6RT2f-vQQ459T4H8J",
          Color: "_1io-EPyTr2q37DmZS-Iv2u",
          PercentageDescriptionLabel: "pcHKKuXoww1KZ7a_1F--u",
          UsedActive: "_1uknQZ7Xmx7VQ1da9Gc4n2",
          OldActive: "_2gXOsiXV8vP0Ujd_ic1j_r",
          AllGamesBGImage: "aI_Il7gY1Syqm796Upnp9",
          SeeRewindButton: "hRwmhfYcSqvrvsdGJuU4J",
          MMFrame: "_2duB07TZK47UjB_dhb3uK3",
          MMOverride: "XbqPSndbEUkqiStSowtZK",
          Header: "_352X1_lNn7pW_yScNLvtb6",
          YearSubtitle: "_1avfzaLCwU_U1NmpVbFSST",
          ReplayLogo: "_1Ao61JGqV1c_QgX5WaSiQ8",
          ReplayLogoAccent: "_1OT6cjmQVBFsHOR0plxmms",
          Hashtag: "_3ChmiAgSUsYOIDUGcx2ID3",
          Avatar: "_2Cjn2QF0ijeU0iZlbggit2",
          DataBlock: "qoG_vuXOr_yl9HwMqT6rV",
          PersonaName: "_2w7Tb0xkf0VinWQKTn63_4",
          ViewPageButton: "_2IfJlTSfJ9B2O7GrLSHZEu",
          Description: "_3OaR0S3fMP3IqzGQkLo2LL",
          OtherYearLink: "e2J3CJVLkCcWuogJlnJqA",
          BackgroundAnimation: "_14OuUh1QjZE3TsW4NZNR2T",
          "ItemFocusAnim-darkerGrey-nocolor": "_34-QNskZMB7mEWsqhnZP6b",
          "ItemFocusAnim-darkerGrey": "_2mYgNS2XvBpQoFx7GpbaE8",
          "ItemFocusAnim-darkGreySettings": "_2A4pb12mtvU-l5nClt2fv-",
          "ItemFocusAnim-darkGrey": "_2wJw5tkwjDagaHTwWVdn1u",
          "ItemFocusAnim-grey": "_1flpMlWbeXKOl-WYA3Xem3",
          "ItemFocusAnim-translucent-white-10": "_2Du1mKAGG_7kB5hkqpPOqX",
          "ItemFocusAnim-translucent-white-20": "_1mHlVprPR_Qin9oSqFmQwX",
          "ItemFocusAnimBorder-darkGrey": "_1dQDG_S6sUmSjy1GFP6ybp",
          "ItemFocusAnim-green": "_1X5ahFc-n3nVkWAsUpG49I",
          focusAnimation: "_1ddfD3xnl7ZxtZ7TYShOPs",
          hoverAnimation: "_2A0Chr-r6KVC7bWMKjWlOP",
        };
      },
      62324: (U) => {
        U.exports = {
          "duration-app-launch": "800ms",
          new_games_color: "#34f3fe",
          used_games_color: "#cc6670",
          old_games_color: "#f4d760",
          pie_windows: "#d67070",
          pie_linux: "#aa3db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_1FQxwxnbfp1DQRGwxjKNTx",
          scaleBackground: "TdC9bwyeuoQ1F5DT8KspI",
          SingleGame: "ifq_ya-yHyDQyuEtHXvkd",
          ImageTint: "_14GpYsrLIrccl99_xXb_lH",
          Section: "_2CzT2Ue4ljkWrfhI95JkJt",
          LongestStreakBgImage: "_3bIVDFjju4u0AOB48TTZ7H",
          StreakSizeFullBar: "_36Dty1V8Yk45GKPQ12JNl9",
          Tab: "_2scTLgHhWMusg9Lj2H9F0M",
          UserName: "_3i6QbKsUrNIRm_9L1iM1w1",
          ConclusionName: "eMxpUkfmNZqXHXyEOpi9-",
          SummaryCtnShadow: "Cw99TswABdwpty4wDm6Kv",
          GridItem: "_3ng4jeWCIrH3Xf7gVbo758",
          BackgroundImage: "cX2moiqfYAa9h4c6c6J56",
          TimeRelatedCtn: "_2Zo5vVWEoZeXCAmvmNWdtA",
          FriendCtn: "_1fLHP2iu-xMwF39bB2FE-f",
          TopGameBlockContainer: "_2jMh7hzYtvCju1bimc2DCR",
          BackgroundImageFull: "_1tKfGHKLUsuVr003d2jG4X",
          OddGradient: "_3mCsh4BkMCnav5CzdFeIln",
          EvenGradient: "_22nJMbrt7AfGR1wKoLVXIK",
          TopMostGame: "_5gZaiaeySvC8QDwQUkDgQ",
          GamePlayDetails: "_2UjU_Bqh7WIemfgCvlD1FN",
          PlatformChartsCtn: "_2mkvkIYg5LeZ2ktuk6BK-w",
          gradient: "_1uF_mJ2NoHHxjt8B6TtKTU",
          TopHonorsSection: "_1Iak9Ls621_J54UW4a9Q_1",
          SectionDesc: "wszKcm7YBxzCAlfaWiTAH",
          IconAchievement: "_3d7jJ_skoesQRY7KoMAF8e",
          IconGamesPlayed: "_2xTquiP8toNtUfqV0AVDkf",
          IconStreak: "QYeU8JjvH6xQr-aFK1efW",
          PlayBehaviorContainer: "_3Bpyxk-Np66shUkJs80vvZ",
          ProgressBarFilled: "_1f8MtfTqD8Az_GM0JB7Rzc",
          ProgressBarFilledGradient: "Q3vogB-yAyTY5rGGiGQYX",
          GameNewnessTitle: "kSadYHEssRMc4gjfKBIi2",
          NewActive: "_1tqxZtHc4QXKcJycbqiAOE",
          DataBoxArrow: "_1bcbwF6Vo3DZxm6-DI847n",
          Background: "_1noZDX1h45XBp4xI-eaLWz",
          UserData: "_2C_3vOW-fgB1JljQ5WDf_u",
          DataBox: "_3JvBPAurzZ-YFQ1kn-AcUI",
          SteamData: "_2z9mUmuJfjxc9yzKSUZVp-",
          Border: "_1B56xMSY38kOHC5b7if0NZ",
          PercentageLabel: "_2oPIePedWi_UM8nqs9Krd_",
          Color: "_39goClLihc9ZPYV3YaUFxh",
          PercentageDescriptionLabel: "_1R6sP2SKKVCDceGJzjiu9q",
          UsedActive: "_20rUBA-R0plfPxLoz-AaTt",
          OldActive: "_3fE1LfsvZ6TSFOmBIX-hnd",
          AllGamesBGImage: "_3LwhtMUR2vVFHRvyRMNxGK",
          SeeRewindButton: "_2PM8va6tUvi6JiJjaXTe_k",
          MMFrame: "_2GhRvyaz6BcUqn_8Ie84MN",
          MMOverride: "_3hmSXaA49hWNpDmad_U2Y6",
          Header: "_1RiSqDe-2hLW6Zh8gzWMQ2",
          YearSubtitle: "_1FagSJOwqENaGOokSCJaw5",
          ReplayLogo: "_2szJenhCRhwaeLkwGQiOIX",
          ReplayLogoAccent: "_3HGA8vPogeG26iVY-5nmFS",
          Hashtag: "_2mhWOxJsIcWe8uMpCZxosE",
          Avatar: "_1ARS2PnjXATcgXNP0lEZBX",
          DataBlock: "_2UNwHmsG9jJhvi_-hHqlUo",
          PersonaName: "_2q2Real9LsQkftHC3gtzjn",
          ViewPageButton: "_3Jien5Efkr3B0IQgbOMC0u",
          Description: "_30TBldURmofivWIf4LDybD",
          OtherYearLink: "LDdWtcd3cqcEwlnIqnp0m",
          BackgroundAnimation: "Uwk2oDOlH9H45uB6SckjX",
          "ItemFocusAnim-darkerGrey-nocolor": "_1HzbepuV2ne3fOiiw4M6L2",
          "ItemFocusAnim-darkerGrey": "_3jhvEXbsQ8rwLbzgIG2YKY",
          "ItemFocusAnim-darkGreySettings": "_22jVwj2EIKxChqvLWQbXuN",
          "ItemFocusAnim-darkGrey": "_3E-Kmphz35Z5zxRRLBBv__",
          "ItemFocusAnim-grey": "_1MX1VV5l2Txw56HFd3WETD",
          "ItemFocusAnim-translucent-white-10": "_6H60CwBcO9kk4y1pOFm21",
          "ItemFocusAnim-translucent-white-20": "_31Gmo3sGiGSz9BuXbnqa54",
          "ItemFocusAnimBorder-darkGrey": "_2BlrdTd8j7eGp87-nNi7Md",
          "ItemFocusAnim-green": "_3TnQtlMvVkjLUwNdMvKkKA",
          focusAnimation: "_3xy4OMg8IMNU-GS54X-fou",
          hoverAnimation: "_3TsGkEqTE3pjbkbIFVAmfi",
        };
      },
      98288: (U) => {
        U.exports = {
          narrowWidth: "500px",
          Section: "_389gBwC1pkHRwaXysRjhna",
          ChartContainer: "_3X3AdIDhTSa-fU2uE3wedm",
          Chart: "_1YUutoqtA9HEfM61hcbaET",
        };
      },
      27309: (U, ce, o) => {
        "use strict";
        o.d(ce, { A: () => t });
        const t =
          o.p +
          "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
      },
    },
  ]);
})();
