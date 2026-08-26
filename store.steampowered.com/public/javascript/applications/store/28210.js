/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [28210],
  {
    28210: (e, t, n) => {
      n.d(t, { KN: () => f, Nh: () => o, Ec: () => w, kY: () => h });
      var o,
        s = n(34629),
        a = n(37085),
        r = n(33688),
        i = n(56545),
        l = n(34214),
        d = n(41735),
        p = n.n(d),
        c = n(14947),
        u = n(90626),
        m = n(17720),
        _ = n(26161),
        v = n(81393),
        I = n(68797),
        g = n(78327);
      !(function (e) {
        (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
          (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
          (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
      })(o || (o = {}));
      class E {
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
          (0, c.Gn)(this), (this.clanid = e);
        }
      }
      (0, s.Cg)([c.sH], E.prototype, "clanid", void 0),
        (0, s.Cg)([c.sH], E.prototype, "appid", void 0),
        (0, s.Cg)([c.sH], E.prototype, "can_edit", void 0),
        (0, s.Cg)([c.sH], E.prototype, "owns_app", void 0),
        (0, s.Cg)([c.sH], E.prototype, "follows_app", void 0),
        (0, s.Cg)([c.sH], E.prototype, "support_user", void 0),
        (0, s.Cg)([c.sH], E.prototype, "valve_admin", void 0),
        (0, s.Cg)([c.sH], E.prototype, "limited_user", void 0),
        (0, s.Cg)([c.sH], E.prototype, "event_ignored", void 0),
        (0, s.Cg)([c.sH], E.prototype, "event_followed", void 0),
        (0, s.Cg)([c.sH], E.prototype, "event_followed_flags", void 0);
      class f {
        constructor() {
          (0, c.Gn)(this);
        }
        m_mapClanToUserPermissions = new Map();
        m_mapAnnounceGIDToVote = new Map();
        m_setReadEventGIDs = new Set();
        m_tracker = void 0;
        m_cm = void 0;
        static s_EventUserStore;
        m_bIsPresentationMode = (0, g.Bu)();
        static Get() {
          return (
            (0, v.wT)(
              !!f.s_EventUserStore,
              "Have not yet initialized global EventUserStore",
            ),
            f.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!f.s_EventUserStore;
        }
        static async InitGlobal(e) {
          if (!f.s_EventUserStore) {
            const t = new f();
            await t.Init(e),
              (f.s_EventUserStore = t),
              "dev" == g.TS.WEB_UNIVERSE && (window.g_EventUserStore = t);
          }
        }
        static BIsInited() {
          return Boolean(f.s_EventUserStore);
        }
        async Init(e) {
          (this.m_cm = e), (this.m_tracker = new r.e(e));
          const t = (0, g.Fd)("partnereventpermissions", "application_config");
          this.ValidateStoreDefault(t) &&
            ((0, c.h5)(() => {
              t.forEach((e) => {
                let t = new E(e.clanid),
                  n = { result: t, promise: f.RemapToPromise(t), bLoaded: !0 };
                this.CopyFromResponseToTrack(n, e),
                  this.m_mapClanToUserPermissions.set(e.clanid, n);
              });
            }),
            ("dev" != g.TS.WEB_UNIVERSE && "beta" != g.TS.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let n = (0, g.Fd)("uservotes", "application_config");
          n &&
            (0, c.h5)(() => {
              n.forEach((e) => {
                let t = !!e.voted_up || (!e.voted_down && void 0);
                this.m_mapAnnounceGIDToVote.set(e.clanAnnouncementGID, t);
              });
            });
        }
        GetTracker() {
          return this.m_tracker;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanid &&
            "number" == typeof t[0].appid
          );
        }
        RecordEventShown(e, t) {
          e &&
            !e.bOldAnnouncement &&
            e.GID &&
            this.m_tracker.MarkEventShown(
              e.GID,
              e.clanSteamID.GetAccountID(),
              t,
            );
        }
        RecordEventRead(e, t) {
          e &&
            !e.bOldAnnouncement &&
            e.GID &&
            (this.HasEventBeenRead(e.GID) ||
              (this.SetEventAsRead(e.GID),
              this.m_tracker.MarkEventRead(
                e.GID,
                e.clanSteamID.GetAccountID(),
                t,
              )));
        }
        SetEventAsRead(e) {
          this.m_setReadEventGIDs.add(e);
        }
        HasEventBeenRead(e) {
          return this.m_setReadEventGIDs.has(e);
        }
        static async RemapToPromise(e) {
          return e;
        }
        BIsUserLoggedIn() {
          return g.iA.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(e) {
          return (
            this.m_mapClanToUserPermissions.has(e) &&
            this.m_mapClanToUserPermissions.get(e).bLoaded
          );
        }
        GetPartnerEventPermissions(e) {
          if (!e || !e.BIsValid()) return new E(0);
          const t = e.GetAccountID();
          this.m_mapClanToUserPermissions.has(t) ||
            this.LoadSingleAppEventPermissions(e);
          return this.m_mapClanToUserPermissions.get(t).result;
        }
        BFollowsEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_followed.indexOf(t)
          );
        }
        BFollowsEventAndNotifiedBy(e, t, n) {
          let o = this.GetPartnerEventPermissions(e),
            s = o.event_followed.indexOf(t);
          return -1 !== s && (o.event_followed_flags[s] & n) == n;
        }
        BIgnoresEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_ignored.indexOf(t)
          );
        }
        async LoadSingleAppEventPermissions(e) {
          let t = e.GetAccountID(),
            n = this.m_mapClanToUserPermissions.get(t);
          return (
            n ||
              ((n = {
                promise: this.InternalLoadSingleAppEventPermissions(e),
                result: new E(t),
                bLoaded: !1,
              }),
              this.m_mapClanToUserPermissions.set(t, n)),
            n.promise
          );
        }
        CopyFromResponseToTrack(e, t) {
          (e.result.appid = t.appid ?? 0),
            (e.result.can_edit = !!t.can_edit),
            (e.result.clanid = t.appid),
            (e.result.event_followed = t.event_followed ?? []),
            (e.result.event_ignored = t.event_ignored ?? []),
            (e.result.event_followed_flags = t.event_followed_flags ?? []),
            (e.result.follows_app = !!t.follows_app),
            (e.result.owns_app = !!t.owns_app),
            (e.result.limited_user = !!t.limited_user),
            (t.support_user || t.valve_admin) && this.m_bIsPresentationMode
              ? ((e.result.can_edit = !0),
                (e.result.support_user = !1),
                (e.result.valve_admin = !1))
              : ((e.result.support_user = !!t.support_user),
                (e.result.valve_admin = !!t.valve_admin)),
            (e.bLoaded = !0);
        }
        async InternalLoadSingleAppEventPermissions(e) {
          let t = null,
            n = e.GetAccountID(),
            o = !Boolean(g.iA.logged_in);
          if (!this.m_mapClanToUserPermissions.has(n)) {
            let t = new E(e.GetAccountID());
            this.m_mapClanToUserPermissions.set(n, {
              result: t,
              promise: f.RemapToPromise(t),
              bLoaded: !1,
            });
          }
          try {
            if (Boolean(g.iA.logged_in)) {
              let s =
                  g.TS.COMMUNITY_BASE_URL +
                  "gid/" +
                  e.ConvertTo64BitString() +
                  "/ajaxgetpartnereventpermissions/",
                r = {};
              if (
                ("partnerweb" == (0, g.yK)()
                  ? ((s =
                      g.TS.PARTNER_BASE_URL +
                      "partnerevents/ajaxgetpartnereventpermissions"),
                    (r = { clanaccountid: e.GetAccountID() }))
                  : "store" == (0, g.yK)() &&
                    ((s =
                      g.TS.STORE_BASE_URL +
                      "events/ajaxgetpartnereventpermissions"),
                    (r = { clanaccountid: e.GetAccountID() })),
                (t = await p().get(s, { params: r, withCredentials: !0 })),
                t && t.data.success == a.R)
              ) {
                let e = this.m_mapClanToUserPermissions.get(n);
                e && this.CopyFromResponseToTrack(e, t.data);
              } else
                console.error(
                  "Partner Events Failed Load:" + (0, I.H)(t?.data).strErrorMsg,
                ),
                  (o = !0);
            }
          } catch (e) {
            if (
              ((t = e.response),
              (o = !0),
              e &&
                void 0 !== e.response &&
                void 0 !== e.response.data &&
                void 0 !== e.response.data.success &&
                e.response.data.success == a.Dy)
            );
            else {
              const t = (0, I.H)(e);
              console.error(
                "InternalLoadSingleAppEventPermissions account: " +
                  n +
                  ": " +
                  t.strErrorMsg,
                t,
              );
            }
          } finally {
            o &&
              (0, c.h5)(() => {
                let e = this.m_mapClanToUserPermissions.get(n);
                (e.result.appid = t?.data.appid ?? 0),
                  (e.result.can_edit = !1),
                  (e.result.clanid = t && t.data ? t.data.clanid : 0),
                  (e.result.event_followed = new Array()),
                  (e.result.event_ignored = new Array()),
                  (e.result.event_followed_flags = new Array()),
                  (e.result.follows_app = !1),
                  (e.result.owns_app = !1),
                  (e.result.support_user = !1),
                  (e.result.valve_admin = !1),
                  (e.result.limited_user = !1),
                  (e.bLoaded = !0);
              });
          }
          return this.m_mapClanToUserPermissions.get(n).result;
        }
        async SetFollowOrUnfollowEvent(e, t, n, o, s) {
          let a = this.GetPartnerEventPermissions(n),
            r = a.event_followed.indexOf(o),
            i = 0;
          -1 !== r &&
            ((i = a.event_followed_flags[r]), e ? (s = i & ~s) : (s |= i));
          let l = 0 == s,
            d =
              ("store" === (0, g.yK)()
                ? g.TS.STORE_BASE_URL + "events"
                : g.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  n.ConvertTo64BitString()) +
              (l ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            u = new URLSearchParams();
          u.append("sessionid", (0, g.KC)()),
            u.append("ignore", "" + t),
            u.append("gid", o),
            u.append("notification_flag", "" + s),
            u.append("clan_accountid", "" + n.GetAccountID());
          await p().post(d, u, { withCredentials: !0 });
          (0, c.h5)(() => {
            let e = this.m_mapClanToUserPermissions.get(n.GetAccountID()),
              a = null,
              r = null,
              i = null,
              d = null;
            l
              ? ((a = t ? e.result.event_ignored : e.result.event_followed),
                (i = t ? null : e.result.event_followed_flags))
              : t
                ? ((a = e.result.event_followed),
                  (i = e.result.event_followed_flags),
                  (r = e.result.event_ignored))
                : ((a = e.result.event_ignored),
                  (r = e.result.event_followed),
                  (d = e.result.event_followed_flags));
            let p = a.indexOf(o);
            if ((p > -1 && (a.splice(p, 1), i && i.splice(p, 1)), r)) {
              let e = r.indexOf(o);
              -1 == e ? (r.push(o), d && d.push(s)) : d && (d[e] = s);
            }
          });
        }
        async Vote(e, t, n) {
          if (!e || !e.AnnouncementGID) return !1;
          const o = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
          if (o === t) return !0;
          if (
            (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t),
            (0, c.h5)(() => {
              !0 === o && e.UpdateVoteCount("up", -1),
                !1 === o && e.UpdateVoteCount("down", -1),
                !0 === t && e.UpdateVoteCount("up", 1),
                !1 === t && e.UpdateVoteCount("down", 1);
            }),
            this.m_cm)
          ) {
            let n = i.w.Init(l.QU);
            return (
              n.Body().set_announcementid(e.AnnouncementGID),
              n.Body().set_vote_up(!!t),
              n.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
              (
                await l.BE.RateClanAnnouncement(
                  this.m_cm.GetServiceTransport(),
                  n,
                )
              ).GetEResult() == a.R
            );
          }
          {
            const o = (0, g.yK)(),
              s =
                "community" == o || "steamtv" == o
                  ? g.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    e.AnnouncementGID
                  : g.TS.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    e.AnnouncementGID,
              r = new URLSearchParams();
            r.append("sessionid", (0, g.KC)()),
              r.append("voteup", t ? "1" : "0"),
              r.append("clanid", "" + e.clanSteamID.GetAccountID()),
              r.append("ajax", "1");
            const i = { withCredentials: !0, cancelToken: n.token };
            return (await p().post(s, r, i)).data.success == a.R;
          }
        }
        async LoadMyVote(e, t) {
          if (e?.AnnouncementGID) {
            if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
              return !!this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            let n;
            if (this.m_cm) {
              let t = i.w.Init(l.$Y);
              t.Body().set_announcementid(e.AnnouncementGID);
              let o = await l.BE.GetClanAnnouncementVoteForUser(
                this.m_cm.GetServiceTransport(),
                t,
              );
              o.GetEResult() == a.R &&
                (n =
                  !!o.Body().voted_up() || (!o.Body().voted_down() && void 0));
            } else {
              const o = "store" == (0, g.yK)(),
                s = o
                  ? g.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : g.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                a = { gid: o ? e.AnnouncementGID : void 0 },
                r = await p().get(s, {
                  withCredentials: !0,
                  cancelToken: t.token,
                  params: a,
                });
              n = !!r.data.voted_up || (!r.data.voted_down && void 0);
            }
            return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, n), n;
          }
        }
        SetVote(e, t) {
          this.m_mapAnnounceGIDToVote.set(e, t);
        }
        BHasMyVote(e) {
          return (
            !!e.AnnouncementGID &&
            this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID)
          );
        }
        GetPreviouslyLoadedVote(e) {
          return e.AnnouncementGID
            ? this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID)
            : void 0;
        }
        BShowEmailEditorTab(e) {
          if (e.BHasEmailEnabled()) return !0;
          if (e.clanSteamID.GetAccountID() == (0, _.H)()) return !0;
          let t = this.GetPartnerEventPermissions(e.clanSteamID);
          return (g.UF.IS_OGG || g.UF.IS_VALVE_GROUP) && t.valve_admin;
        }
      }
      function h() {
        const [e, t] = (0, u.useState)(() => f.BIsInited());
        return (
          (0, u.useEffect)(() => {
            if (!e) {
              (async () => {
                await Promise.all([f.InitGlobal()]), t(!0);
              })();
            }
          }, [e]),
          e
        );
      }
      function w(e) {
        const [t, n] = (0, u.useState)(
            f.Get().BIsPartnerEventPermissionsLoaded(e),
          ),
          o = m.b.InitFromClanID(e),
          [s, a] = (0, u.useState)(f.Get().GetPartnerEventPermissions(o));
        return (
          (0, u.useEffect)(() => {
            if (!t) {
              const t = m.b.InitFromClanID(e);
              f.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  a(e), n(!0);
                });
            }
          }, [t, e]),
          s
        );
      }
      (0, s.Cg)([c.sH], f.prototype, "m_mapClanToUserPermissions", void 0),
        (0, s.Cg)([c.sH], f.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, s.Cg)([c.sH], f.prototype, "m_setReadEventGIDs", void 0),
        (0, s.Cg)([c.XI], f.prototype, "CopyFromResponseToTrack", null);
    },
    26161: (e, t, n) => {
      n.d(t, { H: () => a });
      var o = n(22837),
        s = n(30470);
      const a = () => (s.TS.EUNIVERSE === o.Rv ? 2581 : 45267781);
    },
  },
]);
