/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4796],
  {
    33951: (e, t, n) => {
      n.d(t, {
        yT: () => _,
        MR: () => T,
        AB: () => B,
        Rc: () => R,
        Gt: () => G,
        ko: () => S,
        fy: () => E,
        ec: () => A,
        aA: () => g,
        TB: () => C,
      });
      var o = n(22837),
        a = n(17720),
        r = n(75233),
        s = n(80902),
        i = n(37085),
        l = n(66418);
      async function c(e) {
        const t = await fetch(e, { method: "GET" });
        if (404 == t.status) return null;
        if (!t.ok) throw new Error(`Server returned ${t.status}`);
        const n = await t.json();
        return n.success != i.R ? null : n;
      }
      function u() {
        return "undefined" != typeof window && "undefined" != typeof self
          ? self.origin
          : "ssr_server";
      }
      function d(e) {
        return ["clantoclaninfo", e];
      }
      function p(e) {
        return ["apptoclanid", e];
      }
      function m(e, t = "group") {
        return ["vanitytoclanid", t, e?.toLocaleLowerCase()];
      }
      function _(e) {
        const t = e?.[0];
        return (
          "clantoclaninfo" == t || "apptoclanid" == t || "vanitytoclanid" == t
        );
      }
      const f = new WeakSet();
      function v(e) {
        if (!f.has(e)) {
          f.add(e);
          for (const t of [
            ["clantoclaninfo"],
            ["apptoclanid"],
            ["vanitytoclanid"],
          ])
            e.setQueryDefaults(t, {
              staleTime: 1 / 0,
              gcTime: 1 / 0,
              retry: !1,
            });
        }
      }
      const y = new WeakMap();
      function I(e) {
        if (!e) return null;
        let t = y.get(e);
        return (
          t ||
            ((t = {
              ...e,
              clanSteamID: e.clanSteamIDString
                ? new a.b(e.clanSteamIDString)
                : a.b.InitFromClanID(e.clanAccountID),
            }),
            y.set(e, t)),
          t
        );
      }
      function h(e, t) {
        if (!t) return null;
        v(e);
        const n = (function (e) {
          const { msg: t, success: n, ...a } = e;
          return {
            ...a,
            rss_language: e.rss_language ? e.rss_language : o.Bhc,
          };
        })(t);
        return (
          e.setQueryData(d(n.clanAccountID), n),
          n.appid && e.setQueryData(p(n.appid), n.clanAccountID),
          n.vanity_url &&
            e.setQueryData(m(n.vanity_url, "group"), n.clanAccountID),
          n
        );
      }
      function g(e, t) {
        for (const n of t) h(e, n);
      }
      function C(e) {
        const t = (0, r.jE)();
        return (0, s.I)(A(e, t));
      }
      function A(e, t) {
        return (
          v(t),
          {
            queryKey: d(e ?? null),
            queryFn: async () =>
              e
                ? h(
                    t,
                    await (async function (e) {
                      const t = a.b.InitFromClanID(e);
                      return c(
                        `${l.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${u()}`,
                      );
                    })(e),
                  )
                : null,
            enabled: void 0 !== e,
            select: I,
          }
        );
      }
      function w(e, t) {
        return (
          v(t),
          {
            queryKey: p(e),
            queryFn: async () =>
              h(
                t,
                await (async function (e) {
                  return c(
                    `${l.TS.COMMUNITY_BASE_URL}ogg/${e}/ajaxgetvanityandclanid/?origin=${u()}`,
                  );
                })(e),
              )?.clanAccountID ?? null,
            enabled: !!e,
          }
        );
      }
      function D(e, t, n = "group") {
        return (
          v(t),
          {
            queryKey: m(e, n),
            queryFn: async () => {
              if ("store" == n) {
                const n = t.getQueryData(m(e, "group"));
                if (n) return n;
              }
              const o =
                "store" == n
                  ? await (async function (e) {
                      return c(
                        `${l.TS.COMMUNITY_BASE_URL}games/${e}/ajaxgetvanityandclanid/?origin=${u()}`,
                      );
                    })(e)
                  : await (async function (e) {
                      return c(
                        `${l.TS.COMMUNITY_BASE_URL}groups/${e}/ajaxgetvanityandclanid/?origin=${u()}`,
                      );
                    })(e);
              return h(t, o)?.clanAccountID ?? null;
            },
            enabled: !!e,
          }
        );
      }
      function G(e, t) {
        if (e) return I(t.getQueryData(d(e))) ?? void 0;
      }
      function S(e, t) {
        if (e) return G(t.getQueryData(p(e)), t);
      }
      function E(e, t, n) {
        if (!e) return;
        const o = n ? [n] : ["store", "group"];
        for (const n of o) {
          const o = G(t.getQueryData(m(e, n)), t);
          if (o) return o;
        }
      }
      async function T(e, t) {
        return e ? I(await t.fetchQuery(A(e, t))) : null;
      }
      async function B(e, t) {
        return e ? T(await t.fetchQuery(w(e, t)), t) : null;
      }
      async function R(e, t, n = "group") {
        return e ? T(await t.fetchQuery(D(e, t, n)), t) : null;
      }
    },
    4796: (e, t, n) => {
      n.d(t, { $5: () => C, TB: () => g, ac: () => I });
      var o = n(7860),
        a = n(75233),
        r = n(14947),
        s = n(90626),
        i = n(17720),
        l = n(81393),
        c = n(78327),
        u = n(67165),
        d = (n(26161), n(29197), n(82429), n(33951)),
        p = n(63340);
      const m = new WeakSet();
      function _(e = o.L) {
        if ("undefined" == typeof window) return;
        if (m.has(e)) return;
        const t = (0, c.Fd)("groupvanityinfo", "application_config");
        (void 0 === t && "complete" != document.readyState) ||
          (m.add(e), f(t) && (0, d.aA)(e, t));
      }
      function f(e) {
        const t = e;
        return (
          !!(
            t &&
            Array.isArray(t) &&
            t.length > 0 &&
            "object" == typeof t[0]
          ) &&
          "number" == typeof t[0].clanAccountID &&
          ("number" == typeof t[0].appid || "string" == typeof t[0].vanity_url)
        );
      }
      function v(e) {
        return "string" == typeof e ? parseInt(e) : e;
      }
      function y(e) {
        return "string" == typeof e ? Number.parseInt(e) : e;
      }
      const I = new (class {
        m_queryClient = o.L;
        m_boxCacheVersion = r.sH.box(0);
        m_bWatchingCache = !1;
        m_bBumpScheduled = !1;
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          _(this.m_queryClient),
            this.m_bWatchingCache ||
              ((this.m_bWatchingCache = !0),
              this.m_queryClient.getQueryCache().subscribe((e) => {
                ("added" != e?.type &&
                  "updated" != e?.type &&
                  "removed" != e?.type) ||
                  ((0, d.yT)(e.query?.queryKey) &&
                    this.ScheduleCacheVersionBump());
              }));
        }
        ScheduleCacheVersionBump() {
          this.m_bBumpScheduled ||
            ((this.m_bBumpScheduled = !0),
            queueMicrotask(() => {
              (this.m_bBumpScheduled = !1),
                (0, r.h5)(() =>
                  this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
                );
            }));
        }
        ReadCache() {
          return (
            this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
          );
        }
        AddGroupVanities(e) {
          this.LazyInit(), f(e) && (0, d.aA)(this.m_queryClient, e);
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, l.wT)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, l.wT)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.BHasClanInfoLoadedByAccountID(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return Boolean((0, d.Gt)(y(e), this.ReadCache()));
        }
        RegisterClanData(e) {
          this.LazyInit(), (0, d.aA)(this.m_queryClient, e);
        }
        async LoadOGGClanInfoForAppID(e) {
          return (
            this.LazyInit(),
            (e = v(e)),
            (0, l.wT)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == e ? null : (0, d.AB)(e, this.m_queryClient).catch(() => null)
          );
        }
        async LoadOGGClanInfoForIdentifier(e) {
          return this.LazyInit(), (0, d.Rc)(e, this.m_queryClient, "store");
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          return this.LazyInit(), (0, d.Rc)(e, this.m_queryClient, "group");
        }
        async LoadClanInfoForClanSteamID(e) {
          return this.LoadClanInfoForClanAccountID(e.GetAccountID());
        }
        async LoadClanInfoForClanAccountID(e) {
          return this.LazyInit(), (0, d.MR)(y(e), this.m_queryClient);
        }
        GetOGGClanInfo(e) {
          const t = this.ReadCache();
          return "string" == typeof e ? (0, d.fy)(e, t) : (0, d.ko)(e, t);
        }
        GetClanSteamIDForAppID(e) {
          const t = (0, d.ko)(v(e), this.ReadCache());
          return t ? i.b.InitFromClanID(t.clanAccountID) : void 0;
        }
        GetClanVanityForAppID(e) {
          return (0, d.ko)(v(e), this.ReadCache())?.vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          return (0, d.Gt)(e.GetAccountID(), this.ReadCache())?.vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.BHasClanInfoLoadedByAccountID(e);
        }
        GetClanMemberCount(e) {
          return (0, d.ko)(v(e), this.ReadCache())?.member_count ?? 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            (0, l.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            (0, d.Gt)(y(e), this.ReadCache())
          );
        }
        GetCreatorStoreURL(e) {
          let t = u.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let n = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            c.TS.COMMUNITY_BASE_URL +
            (n.vanity_url
              ? "groups/" + n.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      })();
      function h() {
        const e = (0, a.jE)();
        return _(e), e;
      }
      function g(e) {
        h();
        const { data: t, isPending: n } = (0, d.TB)(e ? y(e) : void 0);
        return [Boolean(e) && n, t ?? void 0];
      }
      function C(e) {
        const t = h();
        (0, s.useEffect)(() => {
          e &&
            (0, d.MR)(y(e), t).catch((t) =>
              console.error(`Failed to hint load clan info ${e}`, t),
            );
        }, [e, t]);
      }
      (0, p.V)("g_ClanStore", I);
    },
    82429: (e, t, n) => {
      n.d(t, { Ec: () => C, KN: () => h, Nh: () => o, kY: () => g });
      var o,
        a = n(34629),
        r = n(37085),
        s = n(33688),
        i = n(56545),
        l = n(34214),
        c = n(41735),
        u = n.n(c),
        d = n(14947),
        p = n(90626),
        m = n(17720),
        _ = n(26161),
        f = n(81393),
        v = n(68797),
        y = n(78327);
      class I {
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
          (0, d.Gn)(this), (this.clanid = e);
        }
      }
      (0, a.Cg)([d.sH], I.prototype, "clanid", void 0),
        (0, a.Cg)([d.sH], I.prototype, "appid", void 0),
        (0, a.Cg)([d.sH], I.prototype, "can_edit", void 0),
        (0, a.Cg)([d.sH], I.prototype, "owns_app", void 0),
        (0, a.Cg)([d.sH], I.prototype, "follows_app", void 0),
        (0, a.Cg)([d.sH], I.prototype, "support_user", void 0),
        (0, a.Cg)([d.sH], I.prototype, "valve_admin", void 0),
        (0, a.Cg)([d.sH], I.prototype, "limited_user", void 0),
        (0, a.Cg)([d.sH], I.prototype, "event_ignored", void 0),
        (0, a.Cg)([d.sH], I.prototype, "event_followed", void 0),
        (0, a.Cg)([d.sH], I.prototype, "event_followed_flags", void 0),
        (function (e) {
          (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(o || (o = {}));
      class h {
        constructor() {
          (0, d.Gn)(this);
        }
        m_mapClanToUserPermissions = new Map();
        m_mapAnnounceGIDToVote = new Map();
        m_setReadEventGIDs = new Set();
        m_tracker = void 0;
        m_cm = void 0;
        static s_EventUserStore;
        m_bIsPresentationMode = (0, y.Bu)();
        static Get() {
          return (
            (0, f.wT)(
              !!h.s_EventUserStore,
              "Have not yet initialized global EventUserStore",
            ),
            h.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!h.s_EventUserStore;
        }
        static async InitGlobal(e) {
          if (!h.s_EventUserStore) {
            const t = new h();
            await t.Init(e),
              (h.s_EventUserStore = t),
              "dev" == y.TS.WEB_UNIVERSE && (window.g_EventUserStore = t);
          }
        }
        static BIsInited() {
          return Boolean(h.s_EventUserStore);
        }
        async Init(e) {
          (this.m_cm = e), (this.m_tracker = new s.e(e));
          const t = (0, y.Fd)("partnereventpermissions", "application_config");
          this.ValidateStoreDefault(t) &&
            ((0, d.h5)(() => {
              t.forEach((e) => {
                let t = new I(e.clanid),
                  n = { result: t, promise: h.RemapToPromise(t), bLoaded: !0 };
                this.CopyFromResponseToTrack(n, e),
                  this.m_mapClanToUserPermissions.set(e.clanid, n);
              });
            }),
            ("dev" != y.TS.WEB_UNIVERSE && "beta" != y.TS.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let n = (0, y.Fd)("uservotes", "application_config");
          n &&
            (0, d.h5)(() => {
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
          return y.iA.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(e) {
          return (
            this.m_mapClanToUserPermissions.has(e) &&
            this.m_mapClanToUserPermissions.get(e).bLoaded
          );
        }
        GetPartnerEventPermissions(e) {
          if (!e || !e.BIsValid()) return new I(0);
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
            a = o.event_followed.indexOf(t);
          return -1 !== a && (o.event_followed_flags[a] & n) == n;
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
                result: new I(t),
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
            o = !Boolean(y.iA.logged_in);
          if (!this.m_mapClanToUserPermissions.has(n)) {
            let t = new I(e.GetAccountID());
            this.m_mapClanToUserPermissions.set(n, {
              result: t,
              promise: h.RemapToPromise(t),
              bLoaded: !1,
            });
          }
          try {
            if (Boolean(y.iA.logged_in)) {
              let a =
                  y.TS.COMMUNITY_BASE_URL +
                  "gid/" +
                  e.ConvertTo64BitString() +
                  "/ajaxgetpartnereventpermissions/",
                s = {};
              if (
                ("partnerweb" == (0, y.yK)()
                  ? ((a =
                      y.TS.PARTNER_BASE_URL +
                      "partnerevents/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() }))
                  : "store" == (0, y.yK)() &&
                    ((a =
                      y.TS.STORE_BASE_URL +
                      "events/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() })),
                (t = await u().get(a, { params: s, withCredentials: !0 })),
                t && t.data.success == r.R)
              ) {
                let e = this.m_mapClanToUserPermissions.get(n);
                e && this.CopyFromResponseToTrack(e, t.data);
              } else
                console.error(
                  "Partner Events Failed Load:" + (0, v.H)(t?.data).strErrorMsg,
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
                e.response.data.success == r.Dy)
            );
            else {
              const t = (0, v.H)(e);
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
              (0, d.h5)(() => {
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
        async SetFollowOrUnfollowEvent(e, t, n, o, a) {
          let r = this.GetPartnerEventPermissions(n),
            s = r.event_followed.indexOf(o),
            i = 0;
          -1 !== s &&
            ((i = r.event_followed_flags[s]), e ? (a = i & ~a) : (a |= i));
          let l = 0 == a,
            c =
              ("store" === (0, y.yK)()
                ? y.TS.STORE_BASE_URL + "events"
                : y.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  n.ConvertTo64BitString()) +
              (l ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            p = new URLSearchParams();
          p.append("sessionid", (0, y.KC)()),
            p.append("ignore", "" + t),
            p.append("gid", o),
            p.append("notification_flag", "" + a),
            p.append("clan_accountid", "" + n.GetAccountID());
          await u().post(c, p, { withCredentials: !0 });
          (0, d.h5)(() => {
            let e = this.m_mapClanToUserPermissions.get(n.GetAccountID()),
              r = null,
              s = null,
              i = null,
              c = null;
            l
              ? ((r = t ? e.result.event_ignored : e.result.event_followed),
                (i = t ? null : e.result.event_followed_flags))
              : t
                ? ((r = e.result.event_followed),
                  (i = e.result.event_followed_flags),
                  (s = e.result.event_ignored))
                : ((r = e.result.event_ignored),
                  (s = e.result.event_followed),
                  (c = e.result.event_followed_flags));
            let u = r.indexOf(o);
            if ((u > -1 && (r.splice(u, 1), i && i.splice(u, 1)), s)) {
              let e = s.indexOf(o);
              -1 == e ? (s.push(o), c && c.push(a)) : c && (c[e] = a);
            }
          });
        }
        async Vote(e, t, n) {
          if (!e || !e.AnnouncementGID) return !1;
          const o = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
          if (o === t) return !0;
          if (
            (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t),
            (0, d.h5)(() => {
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
              ).GetEResult() == r.R
            );
          }
          {
            const o = (0, y.yK)(),
              a =
                "community" == o || "steamtv" == o
                  ? y.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    e.AnnouncementGID
                  : y.TS.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    e.AnnouncementGID,
              s = new URLSearchParams();
            s.append("sessionid", (0, y.KC)()),
              s.append("voteup", t ? "1" : "0"),
              s.append("clanid", "" + e.clanSteamID.GetAccountID()),
              s.append("ajax", "1");
            const i = { withCredentials: !0, cancelToken: n.token };
            return (await u().post(a, s, i)).data.success == r.R;
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
              o.GetEResult() == r.R &&
                (n =
                  !!o.Body().voted_up() || (!o.Body().voted_down() && void 0));
            } else {
              const o = "store" == (0, y.yK)(),
                a = o
                  ? y.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : y.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                r = { gid: o ? e.AnnouncementGID : void 0 },
                s = await u().get(a, {
                  withCredentials: !0,
                  cancelToken: t.token,
                  params: r,
                });
              n = !!s.data.voted_up || (!s.data.voted_down && void 0);
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
          return (y.UF.IS_OGG || y.UF.IS_VALVE_GROUP) && t.valve_admin;
        }
      }
      function g() {
        const [e, t] = (0, p.useState)(() => h.BIsInited());
        return (
          (0, p.useEffect)(() => {
            if (!e) {
              (async () => {
                await Promise.all([h.InitGlobal()]), t(!0);
              })();
            }
          }, [e]),
          e
        );
      }
      function C(e) {
        const [t, n] = (0, p.useState)(
            h.Get().BIsPartnerEventPermissionsLoaded(e),
          ),
          o = m.b.InitFromClanID(e),
          [a, r] = (0, p.useState)(h.Get().GetPartnerEventPermissions(o));
        return (
          (0, p.useEffect)(() => {
            if (!t) {
              const t = m.b.InitFromClanID(e);
              h.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  r(e), n(!0);
                });
            }
          }, [t, e]),
          a
        );
      }
      (0, a.Cg)([d.sH], h.prototype, "m_mapClanToUserPermissions", void 0),
        (0, a.Cg)([d.sH], h.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, a.Cg)([d.sH], h.prototype, "m_setReadEventGIDs", void 0),
        (0, a.Cg)([d.XI], h.prototype, "CopyFromResponseToTrack", null);
    },
  },
]);
