/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [51706],
    {
      813: (b, D, r) => {
        r.d(D, { $5: () => e, TB: () => p, ac: () => S });
        var I = r(40497),
          f = r(75233),
          y = r(14947),
          L = r(90626),
          G = r(76559),
          u = r(71742),
          h = r(3166),
          T = r(60480),
          O = r(49628),
          R = r(33512),
          U = r(7638),
          a = r(55483),
          M = r(77291);
        const g = new WeakSet();
        function B(s = I.L) {
          if (typeof window > "u" || g.has(s)) return;
          const t = (0, h.Fd)("groupvanityinfo", "application_config");
          (t === void 0 && document.readyState != "complete") ||
            (g.add(s), d(t) && (0, a.aA)(s, t));
        }
        function d(s) {
          const t = s;
          return t &&
            Array.isArray(t) &&
            t.length > 0 &&
            typeof t[0] == "object"
            ? typeof t[0].clanAccountID == "number" &&
                (typeof t[0].appid == "number" ||
                  typeof t[0].vanity_url == "string")
            : !1;
        }
        function _(s) {
          return typeof s == "string" ? parseInt(s) : s;
        }
        function C(s) {
          return typeof s == "string" ? Number.parseInt(s) : s;
        }
        class A {
          m_queryClient = I.L;
          m_boxCacheVersion = y.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            B(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((t) => {
                  (t?.type != "added" &&
                    t?.type != "updated" &&
                    t?.type != "removed") ||
                    ((0, a.yT)(t.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, y.h5)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(t) {
            this.LazyInit(), d(t) && (0, a.aA)(this.m_queryClient, t);
          }
          BHasClanInfoLoaded(t) {
            return (
              (0, u.wT)(
                t.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, u.wT)(
                t.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(t.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(t) {
            return !!(0, a.Gt)(C(t), this.ReadCache());
          }
          RegisterClanData(t) {
            this.LazyInit(), (0, a.aA)(this.m_queryClient, t);
          }
          async LoadOGGClanInfoForAppID(t) {
            return (
              this.LazyInit(),
              (t = _(t)),
              (0, u.wT)(
                t != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              t == 0 ? null : (0, a.AB)(t, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(t) {
            return this.LazyInit(), (0, a.Rc)(t, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(t) {
            return this.LazyInit(), (0, a.Rc)(t, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(t) {
            return this.LoadClanInfoForClanAccountID(t.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(t) {
            return this.LazyInit(), (0, a.MR)(C(t), this.m_queryClient);
          }
          GetOGGClanInfo(t) {
            const m = this.ReadCache();
            return typeof t == "string" ? (0, a.fy)(t, m) : (0, a.ko)(t, m);
          }
          GetClanSteamIDForAppID(t) {
            const m = (0, a.ko)(_(t), this.ReadCache());
            return m ? G.b.InitFromClanID(m.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(t) {
            return (0, a.ko)(_(t), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(t) {
            return (0, a.Gt)(t.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(t) {
            return this.BHasClanInfoLoadedByAccountID(t);
          }
          GetClanMemberCount(t) {
            return (0, a.ko)(_(t), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(t) {
            return (
              (0, u.wT)(
                !!t,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, a.Gt)(C(t), this.ReadCache())
            );
          }
          GetCreatorStoreURL(t) {
            let m = T.pF.GetCreatorHome(t);
            if (m) return m.GetCreatorHomeURL("developer");
            let v = this.GetClanInfoByClanAccountID(t.GetAccountID());
            return (
              h.TS.COMMUNITY_BASE_URL +
              (v.vanity_url
                ? "groups/" + v.vanity_url
                : "gid/" + t.ConvertTo64BitString())
            );
          }
        }
        const S = new A();
        (0, M.V)("g_ClanStore", S);
        function P() {
          const s = (0, f.jE)();
          return B(s), s;
        }
        function p(s) {
          P();
          const { data: t, isPending: m } = (0, a.TB)(s ? C(s) : void 0);
          return [!!s && m, t ?? void 0];
        }
        function e(s) {
          const t = P();
          (0, L.useEffect)(() => {
            s &&
              (0, a.MR)(C(s), t).catch((m) =>
                console.error(`Failed to hint load clan info ${s}`, m),
              );
          }, [s, t]);
        }
        function n(s) {
          return P(), useClanInfoByVanityQuery(s).data ?? null;
        }
        function l(s) {
          P();
          const t = s ? _(s) : void 0,
            { data: m, isPending: v } = useClanInfoByAppIDQuery(t);
          return { bLoadingClanInfo: !!t && v, clanInfo: m ?? null };
        }
        function i(s) {
          const t = s.BIsOGGEvent(),
            m = CEventUserStore.Get().GetPartnerEventPermissions(
              s.clanSteamID,
            ).valve_admin;
          if (t) return { bVisible: !1 };
          if (s.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (s.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            s.jsondata.clone_from_event_gid &&
            s.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (s.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const v = g_CreatorHomeStore.GetCreatorHome(s.clanSteamID);
          return v &&
            v.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : m
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function o(s) {
          const t = s.BIsOGGEvent(),
            m = CEventUserStore.Get().GetPartnerEventPermissions(
              s.clanSteamID,
            ).valve_admin;
          return t
            ? s.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : m
                  ? s.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function c(s) {
          const t = s.BIsOGGEvent(),
            m = CEventUserStore.Get().GetPartnerEventPermissions(
              s.clanSteamID,
            ).valve_admin;
          return t
            ? { bVisible: !1 }
            : s.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : s.BHasSaleEnabled()
                ? { bVisible: !0 }
                : s.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      57698: (b, D, r) => {
        r.d(D, { N: () => I });
        var I = ((f) => (
          (f[(f.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
          (f[(f.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
          (f[(f.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush"),
          f
        ))(I || {});
      },
      7638: (b, D, r) => {
        r.d(D, { Ec: () => P, KN: () => A, kY: () => S });
        var I = r(72604),
          f = r(35038),
          y = r(72849),
          L = r(41735),
          G = r.n(L),
          u = r(14947),
          h = r(90626),
          T = r(76559),
          O = r(49628),
          R = r(71742),
          U = r(34592),
          a = r(3166),
          M = r(57698),
          g = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          d = (p, e, n, l) => {
            for (
              var i = l > 1 ? void 0 : l ? B(e, n) : e, o = p.length - 1, c;
              o >= 0;
              o--
            )
              (c = p[o]) && (i = (l ? c(e, n, i) : c(i)) || i);
            return l && i && g(e, n, i), i;
          };
        class _ {
          clanid = void 0;
          appid = 0;
          can_edit = !1;
          owns_app = !1;
          follows_app = !1;
          support_user = !1;
          valve_admin = !1;
          limited_user = !1;
          event_ignored = new Array();
          event_followed = new Array();
          event_followed_flags = new Array();
          constructor(e) {
            (0, u.Gn)(this), (this.clanid = e);
          }
        }
        d([u.sH], _.prototype, "clanid", 2),
          d([u.sH], _.prototype, "appid", 2),
          d([u.sH], _.prototype, "can_edit", 2),
          d([u.sH], _.prototype, "owns_app", 2),
          d([u.sH], _.prototype, "follows_app", 2),
          d([u.sH], _.prototype, "support_user", 2),
          d([u.sH], _.prototype, "valve_admin", 2),
          d([u.sH], _.prototype, "limited_user", 2),
          d([u.sH], _.prototype, "event_ignored", 2),
          d([u.sH], _.prototype, "event_followed", 2),
          d([u.sH], _.prototype, "event_followed_flags", 2);
        const C = class E {
          constructor() {
            (0, u.Gn)(this);
          }
          m_mapClanToUserPermissions = new Map();
          m_mapAnnounceGIDToVote = new Map();
          m_cm = void 0;
          static s_EventUserStore;
          m_bIsPresentationMode = (0, a.Bu)();
          static Get() {
            return (
              (0, R.wT)(
                !!E.s_EventUserStore,
                "Have not yet initialized global EventUserStore",
              ),
              E.s_EventUserStore
            );
          }
          static IsInitialized() {
            return !!E.s_EventUserStore;
          }
          static async InitGlobal(e) {
            if (!E.s_EventUserStore) {
              const n = new E();
              await n.Init(e), (E.s_EventUserStore = n);
            }
          }
          static BIsInited() {
            return !!E.s_EventUserStore;
          }
          async Init(e) {
            this.m_cm = e;
            const n = (0, a.Fd)(
              "partnereventpermissions",
              "application_config",
            );
            this.ValidateStoreDefault(n) &&
              (0, u.h5)(() => {
                n.forEach((i) => {
                  let o = new _(i.clanid),
                    c = {
                      result: o,
                      promise: E.RemapToPromise(o),
                      bLoaded: !0,
                    };
                  this.CopyFromResponseToTrack(c, i),
                    this.m_mapClanToUserPermissions.set(i.clanid, c);
                });
              });
            let l = (0, a.Fd)("uservotes", "application_config");
            l &&
              (0, u.h5)(() => {
                l.forEach((i) => {
                  let o = i.voted_up ? !0 : i.voted_down ? !1 : void 0;
                  this.m_mapAnnounceGIDToVote.set(i.clanAnnouncementGID, o);
                });
              });
          }
          ValidateStoreDefault(e) {
            const n = e;
            return n &&
              Array.isArray(n) &&
              n.length > 0 &&
              typeof n[0] == "object"
              ? typeof n[0].clanid == "number" && typeof n[0].appid == "number"
              : !1;
          }
          static async RemapToPromise(e) {
            return e;
          }
          BIsUserLoggedIn() {
            return a.iA.logged_in;
          }
          BIsPartnerEventPermissionsLoaded(e) {
            return (
              this.m_mapClanToUserPermissions.has(e) &&
              this.m_mapClanToUserPermissions.get(e).bLoaded
            );
          }
          GetPartnerEventPermissions(e) {
            if (!e || !e.BIsValid()) return new _(0);
            const n = e.GetAccountID();
            return (
              this.m_mapClanToUserPermissions.has(n) ||
                this.LoadSingleAppEventPermissions(e),
              this.m_mapClanToUserPermissions.get(n).result
            );
          }
          async LoadSingleAppEventPermissions(e) {
            let n = e.GetAccountID(),
              l = this.m_mapClanToUserPermissions.get(n);
            return (
              l ||
                ((l = {
                  promise: this.InternalLoadSingleAppEventPermissions(e),
                  result: new _(n),
                  bLoaded: !1,
                }),
                this.m_mapClanToUserPermissions.set(n, l)),
              l.promise
            );
          }
          CopyFromResponseToTrack(e, n) {
            (e.result.appid = n.appid ?? 0),
              (e.result.can_edit = !!n.can_edit),
              (e.result.clanid = n.appid),
              (e.result.event_followed = n.event_followed ?? []),
              (e.result.event_ignored = n.event_ignored ?? []),
              (e.result.event_followed_flags = n.event_followed_flags ?? []),
              (e.result.follows_app = !!n.follows_app),
              (e.result.owns_app = !!n.owns_app),
              (e.result.limited_user = !!n.limited_user),
              (n.support_user || n.valve_admin) && this.m_bIsPresentationMode
                ? ((e.result.can_edit = !0),
                  (e.result.support_user = !1),
                  (e.result.valve_admin = !1))
                : ((e.result.support_user = !!n.support_user),
                  (e.result.valve_admin = !!n.valve_admin)),
              (e.bLoaded = !0);
          }
          async InternalLoadSingleAppEventPermissions(e) {
            let n = null,
              l = e.GetAccountID(),
              i = !a.iA.logged_in;
            if (!this.m_mapClanToUserPermissions.has(l)) {
              let o = new _(e.GetAccountID());
              this.m_mapClanToUserPermissions.set(l, {
                result: o,
                promise: E.RemapToPromise(o),
                bLoaded: !1,
              });
            }
            try {
              if (a.iA.logged_in) {
                let o =
                    a.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.ConvertTo64BitString() +
                    "/ajaxgetpartnereventpermissions/",
                  c = {};
                if (
                  ((0, a.yK)() == "partnerweb"
                    ? ((o =
                        a.TS.PARTNER_BASE_URL +
                        "partnerevents/ajaxgetpartnereventpermissions"),
                      (c = { clanaccountid: e.GetAccountID() }))
                    : (0, a.yK)() == "store" &&
                      ((o =
                        a.TS.STORE_BASE_URL +
                        "events/ajaxgetpartnereventpermissions"),
                      (c = { clanaccountid: e.GetAccountID() })),
                  (n = await G().get(o, { params: c, withCredentials: !0 })),
                  !n || n.data.success != I.R)
                )
                  console.error(
                    "Partner Events Failed Load:" +
                      (0, U.H)(n?.data).strErrorMsg,
                  ),
                    (i = !0);
                else {
                  let s = this.m_mapClanToUserPermissions.get(l);
                  s && this.CopyFromResponseToTrack(s, n.data);
                }
              }
            } catch (o) {
              if (
                ((n = o.response),
                (i = !0),
                !(
                  o &&
                  typeof o.response < "u" &&
                  typeof o.response.data < "u" &&
                  typeof o.response.data.success < "u" &&
                  o.response.data.success == I.Dy
                ))
              ) {
                const c = (0, U.H)(o);
                console.error(
                  "InternalLoadSingleAppEventPermissions account: " +
                    l +
                    ": " +
                    c.strErrorMsg,
                  c,
                );
              }
            } finally {
              i &&
                (0, u.h5)(() => {
                  let o = this.m_mapClanToUserPermissions.get(l);
                  (o.result.appid = n?.data.appid ?? 0),
                    (o.result.can_edit = !1),
                    (o.result.clanid = n && n.data ? n.data.clanid : 0),
                    (o.result.event_followed = new Array()),
                    (o.result.event_ignored = new Array()),
                    (o.result.event_followed_flags = new Array()),
                    (o.result.follows_app = !1),
                    (o.result.owns_app = !1),
                    (o.result.support_user = !1),
                    (o.result.valve_admin = !1),
                    (o.result.limited_user = !1),
                    (o.bLoaded = !0);
                });
            }
            return this.m_mapClanToUserPermissions.get(l).result;
          }
          async Vote(e, n, l) {
            if (!e || !e.AnnouncementGID) return !1;
            const i = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            if (i === n) return !0;
            if (
              (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, n),
              (0, u.h5)(() => {
                i === !0 && e.UpdateVoteCount("up", -1),
                  i === !1 && e.UpdateVoteCount("down", -1),
                  n === !0 && e.UpdateVoteCount("up", 1),
                  n === !1 && e.UpdateVoteCount("down", 1);
              }),
              this.m_cm)
            ) {
              let o = f.w.Init(y.QU);
              return (
                o.Body().set_announcementid(e.AnnouncementGID),
                o.Body().set_vote_up(!!n),
                o.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
                (
                  await y.BE.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    o,
                  )
                ).GetEResult() == I.R
              );
            } else {
              const o = (0, a.yK)(),
                c =
                  o == "community" || o == "steamtv"
                    ? a.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      e.clanSteamID.ConvertTo64BitString() +
                      "/announcements/rate/" +
                      e.AnnouncementGID
                    : a.TS.STORE_BASE_URL +
                      "updated/ajaxrateupdate/" +
                      e.AnnouncementGID,
                s = new URLSearchParams();
              s.append("sessionid", (0, a.KC)()),
                s.append("voteup", n ? "1" : "0"),
                s.append("clanid", "" + e.clanSteamID.GetAccountID()),
                s.append("ajax", "1");
              const t = { withCredentials: !0, cancelToken: l.token };
              return (await G().post(c, s, t)).data.success == I.R;
            }
          }
          async LoadMyVote(e, n) {
            if (e?.AnnouncementGID) {
              if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
                return !!this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
              let l;
              if (this.m_cm) {
                let i = f.w.Init(y.$Y);
                i.Body().set_announcementid(e.AnnouncementGID);
                let o = await y.BE.GetClanAnnouncementVoteForUser(
                  this.m_cm.GetServiceTransport(),
                  i,
                );
                o.GetEResult() == I.R &&
                  (l = o.Body().voted_up()
                    ? !0
                    : o.Body().voted_down()
                      ? !1
                      : void 0);
              } else {
                const i = (0, a.yK)() == "store",
                  o = i
                    ? a.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                    : a.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      e.clanSteamID.ConvertTo64BitString() +
                      "/announcements/ajaxgetmyvote/" +
                      e.AnnouncementGID,
                  c = { gid: i ? e.AnnouncementGID : void 0 },
                  s = await G().get(o, {
                    withCredentials: !0,
                    cancelToken: n.token,
                    params: c,
                  });
                l = s.data.voted_up ? !0 : s.data.voted_down ? !1 : void 0;
              }
              return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, l), l;
            }
          }
          SetVote(e, n) {
            this.m_mapAnnounceGIDToVote.set(e, n);
          }
          BHasMyVote(e) {
            return e.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID)
              : !1;
          }
          GetPreviouslyLoadedVote(e) {
            return e.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID)
              : void 0;
          }
          BShowEmailEditorTab(e) {
            if (
              e.BHasEmailEnabled() ||
              e.clanSteamID.GetAccountID() == (0, O.H)()
            )
              return !0;
            let n = this.GetPartnerEventPermissions(e.clanSteamID);
            return (a.UF.IS_OGG || a.UF.IS_VALVE_GROUP) && n.valve_admin;
          }
        };
        d([u.sH], C.prototype, "m_mapClanToUserPermissions", 2),
          d([u.sH], C.prototype, "m_mapAnnounceGIDToVote", 2),
          d([u.XI], C.prototype, "CopyFromResponseToTrack", 1);
        let A = C;
        function S() {
          const [p, e] = (0, h.useState)(() => A.BIsInited());
          return (
            (0, h.useEffect)(() => {
              p || (async () => (await Promise.all([A.InitGlobal()]), e(!0)))();
            }, [p]),
            p
          );
        }
        function P(p) {
          const [e, n] = (0, h.useState)(
              A.Get().BIsPartnerEventPermissionsLoaded(p),
            ),
            l = T.b.InitFromClanID(p),
            [i, o] = (0, h.useState)(A.Get().GetPartnerEventPermissions(l));
          return (
            (0, h.useEffect)(() => {
              if (!e) {
                const c = T.b.InitFromClanID(p);
                A.Get()
                  .LoadSingleAppEventPermissions(c)
                  .then((s) => {
                    o(s), n(!0);
                  });
              }
            }, [e, p]),
            i
          );
        }
      },
      49628: (b, D, r) => {
        r.d(D, { H: () => y });
        var I = r(99412),
          f = r(98609);
        const y = () => (f.TS.EUNIVERSE === I.Rv ? 2581 : 45267781);
      },
    },
  ]);
})();
