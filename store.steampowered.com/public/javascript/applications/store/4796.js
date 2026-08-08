/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4796],
  {
    4796: (e, t, r) => {
      r.d(t, { TB: () => g, ac: () => _ });
      var a = r(34629),
        n = r(41735),
        i = r.n(n),
        s = r(14947),
        o = r(90626),
        l = r(22837),
        c = r(17720),
        m = r(81393),
        u = r(78327),
        p = r(67165);
      r(26161), r(29197), r(82429);
      class d {
        constructor() {
          (0, s.Gn)(this);
        }
        m_mapAppIDToClanInfo = new Map();
        m_mapVanityToClanInfo = new Map();
        m_mapClanAccountIDToClanInfo = new Map();
        m_mapPromisesLoading = new Map();
        m_rgQueuedEventsClanIDs = new Array();
        m_bLoadedFromConfig = !1;
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, s.h5)(() => {
              let e = (0, u.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(e) &&
                e.forEach((e) => {
                  this.InternalSetupValue(e);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(e) {
          (0, s.h5)(() => {
            this.ValidateClanConfig(e) &&
              e.forEach((e) => {
                this.InternalSetupValue(e);
              });
          });
        }
        ValidateClanConfig(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanAccountID &&
            ("number" == typeof t[0].appid ||
              "string" == typeof t[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, m.wT)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, m.wT)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return this.m_mapClanAccountIDToClanInfo.has(e);
        }
        RegisterClanData(e) {
          for (const t of e) this.InternalSetupValue(t);
        }
        InternalSetupValue(e) {
          const t = {
            clanAccountID: e.clanAccountID,
            clanSteamID: new c.b(e.clanSteamIDString),
            appid: e.appid,
            vanity_url: e.vanity_url,
            member_count: e.member_count,
            is_ogg: e.is_ogg,
            is_creator_home: e.is_creator_home,
            is_curator: e.is_curator,
            has_visible_store_page: e.has_visible_store_page,
            has_rss_feed: e.has_rss_feed,
            rss_language: e.rss_language ? e.rss_language : l.Bhc,
            avatar_full_url: e.avatar_full_url,
            avatar_medium_url: e.avatar_medium_url,
            group_name: e.group_name,
            creator_page_bg_url: e.creator_page_bg_url,
            curator_title: e.curator_title,
            curator_description: e.curator_description,
            partner_events_enabled: e.partner_events_enabled,
          };
          0 != e.appid && this.m_mapAppIDToClanInfo.set(e.appid, t),
            e.vanity_url &&
              e.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                e.vanity_url.toLocaleLowerCase(),
                t,
              ),
            this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, t);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        async LoadOGGClanInfoForAppID(e) {
          if (
            (this.LazyInit(),
            "string" == typeof e && (e = parseInt(e)),
            (0, m.wT)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == e)
          )
            return null;
          if (this.m_mapAppIDToClanInfo.has(e))
            return this.m_mapAppIDToClanInfo.get(e);
          let t = "appid_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForAppID(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForAppID(e) {
          const t =
            u.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
          let r = null;
          try {
            r = (await i().get(t, { params: this.GetRequestParam() })).data;
          } catch (e) {}
          return r
            ? (this.InternalSetupValue(r), this.m_mapAppIDToClanInfo.get(e))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
          let t = "storevanity_" + e?.toLocaleLowerCase();
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForIdentifier(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(e) {
          const t =
            u.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
          let r = await i().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
          );
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
          let t = "community_name_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  e?.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(e) {
          const t =
            u.TS.COMMUNITY_BASE_URL +
            "groups/" +
            e +
            "/ajaxgetvanityandclanid/";
          let r = await i().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
          );
        }
        async LoadClanInfoForClanSteamID(e) {
          this.LazyInit();
          let t = e.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(t))
            return this.m_mapClanAccountIDToClanInfo.get(t);
          let r = "clanaccountid_" + t;
          return (
            this.m_mapPromisesLoading.has(r) ||
              this.m_mapPromisesLoading.set(
                r,
                this.InternalLoadClanInfoForClanSteamID(e),
              ),
            this.m_mapPromisesLoading.get(r)
          );
        }
        async LoadClanInfoForClanAccountID(e) {
          const t = c.b.InitFromClanID(e);
          return this.LoadClanInfoForClanSteamID(t);
        }
        async InternalLoadClanInfoForClanSteamID(e) {
          let t = e.GetAccountID();
          const r =
            u.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let a = await i().get(r, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
            : this.m_mapAppIDToClanInfo.get(e);
        }
        GetClanSteamIDForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return c.b.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(e).clanAccountID,
            );
        }
        GetClanVanityForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return this.m_mapAppIDToClanInfo.get(e).vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e);
        }
        GetClanMemberCount(e) {
          return this.m_mapAppIDToClanInfo.has(e)
            ? this.m_mapAppIDToClanInfo.get(e).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            this.LazyInit(),
            (0, m.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = p.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let r = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            u.TS.COMMUNITY_BASE_URL +
            (r.vanity_url
              ? "groups/" + r.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, a.Cg)([s.sH], d.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, a.Cg)([s.sH], d.prototype, "m_mapVanityToClanInfo", void 0),
        (0, a.Cg)([s.sH], d.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, a.Cg)([s.XI], d.prototype, "RegisterClanData", null),
        (0, a.Cg)([s.XI], d.prototype, "InternalSetupValue", null);
      const _ = new d();
      function g(e) {
        const [t, r] = (0, o.useState)(
            e ? _.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [a, n] = (0, o.useState)(!!e && !_.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, o.useEffect)(() => {
            if (e)
              if (_.BHasClanInfoLoadedByAccountID(e))
                r(_.GetClanInfoByClanAccountID(e)), n(!1);
              else {
                n(!0);
                const t = c.b.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                _.LoadClanInfoForClanSteamID(t)
                  .then((e) => {
                    r(e ?? void 0), n(!1);
                  })
                  .catch((t) =>
                    console.error(`Failed to load clan info ${e}`, t),
                  );
              }
            else r(void 0), n(!1);
          }, [e]),
          [a, t]
        );
      }
      window.g_ClanStore = _;
    },
    67165: (e, t, r) => {
      r.d(t, {
        mD: () => k,
        ie: () => N,
        GT: () => q,
        eL: () => W,
        bW: () => j,
        io: () => O,
        A2: () => H,
        pF: () => U,
        FV: () => V,
      });
      var a,
        n = r(34629),
        i = r(37085),
        s = r(22837),
        o = r(56545),
        l = r(80613),
        c = r.n(l),
        m = r(89068);
      class u extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || m.Sg(u.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  clan_steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  relation: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  linkname: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  json: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = m.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageLink";
        }
      }
      class p extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.clan_account_id || m.Sg(p.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
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
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class d extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || m.Sg(d.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  link: { n: 2, c: u },
                  remove: {
                    n: 3,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  update_json_only: {
                    n: 4,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  skip_clan_permissions: {
                    n: 5,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  partner_id: {
                    n: 6,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = m.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Request";
        }
      }
      class _ extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Response";
        }
      }
      class g extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || m.Sg(g.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = m.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Request";
        }
      }
      class f extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.links || m.Sg(f.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { links: { n: 1, c: u, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = m.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Response";
        }
      }
      class I extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.clan_account_ids || m.Sg(I.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  clan_account_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = m.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class y extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.results || m.Sg(y.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { results: { n: 1, c: p, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = m.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      class h extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.clan_account_id || m.Sg(h.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  listid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  ignore_dlc: { n: 3, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = m.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageListApps_Request";
        }
      }
      class B extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.apps || m.Sg(B.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { apps: { n: 1, c: C, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = m.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageListApps_Response";
        }
      }
      class C extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.appid || m.Sg(C.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  sort_order: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = m.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageListApps_Response_ListApp";
        }
      }
      class v extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.partnerid || m.Sg(v.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  partnerid: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = m.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Request";
        }
      }
      class w extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.results || m.Sg(w.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { results: { n: 1, c: S, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = m.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response";
        }
      }
      class S extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.clan_accountid || m.Sg(S.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  clan_accountid: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  linknames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = m.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
        }
      }
      !(function (e) {
        (e.SetDevPageLink = function (e, t, r) {
          return e.SendMsg(
            "StoreCatalog.SetDevPageLink#1",
            (0, o.I8)(d, t, r),
            _,
            { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetDevPageLinks = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, o.I8)(g, t, r),
              f,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetDevPageAllAppsLinked = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, o.I8)(I, t, r),
              y,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDevPageListApps = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageListApps#1",
              (0, o.I8)(h, t, r),
              B,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDevPagesForPartner = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, o.I8)(v, t, r),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(a || (a = {}));
      var b = r(64087),
        T = r(80902),
        A = r(41735),
        M = r.n(A),
        D = r(14947),
        G = r(29197),
        L = r(78327);
      class R {
        m_clanSteamID;
        m_appidList = new Array();
        m_strName = "";
        m_strAvatarURLFullSize = "";
        m_strTagLineLoc = "";
        m_nFollowers = 0;
        m_strVanity = "";
        m_webLink = void 0;
        m_linkedEvent = void 0;
        m_mapListInfo = new Map();
        m_promise;
        m_bIsLoaded = !1;
        m_bIsHidden = !1;
        m_clanAccountFlags = 0;
        constructor(e) {
          (0, D.Gn)(this), (this.m_clanSteamID = e);
        }
        Initialize(e) {
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags = e.clan_account_flags ?? 0),
            (this.m_linkedEvent = e.linked_event),
            (this.m_mapListInfo = new Map(Object.entries(e.list_info ?? {}))),
            e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
            (this.m_bIsLoaded = !0);
        }
        GetCreatorHomeIdentifier() {
          return {
            name: this.m_strName,
            clan_account_id: this.m_clanSteamID.GetAccountID(),
            type: "developer",
            hidden: this.m_bIsHidden,
          };
        }
        BIsPartnerEventEditorEnabled() {
          return Boolean(this.m_clanAccountFlags & G.Wv.GH);
        }
        BHasClanAccountFlagSet(e) {
          return Boolean(this.m_clanAccountFlags & e);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanSteamID.GetAccountID();
        }
        GetAppIDList() {
          return this.m_appidList;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURLFullSize() {
          return this.m_strAvatarURLFullSize;
        }
        GetTagLine() {
          return this.m_strTagLineLoc;
        }
        GetNumFollowers() {
          return this.m_nFollowers;
        }
        BIsHidden() {
          return this.m_bIsHidden;
        }
        GetCreatorHomeURL(e) {
          if (this.m_strVanity) {
            switch (e) {
              case "publisher":
                return (
                  L.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  L.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return L.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            L.TS.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
        }
        GetWebLink() {
          return this.m_webLink;
        }
        GetVanityString() {
          return this.m_strVanity;
        }
        GetLinkedEventGID() {
          return this.m_linkedEvent;
        }
        GetListInfo() {
          return this.m_mapListInfo;
        }
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([G.Wv.bM, G.Wv.GH], !0));
        }
        async UpdateGroupFlagsFeature(e, t) {
          let r = L.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            a = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              t ? (a |= e) : (a &= ~e);
            }),
            a == this.m_clanAccountFlags)
          )
            return;
          let n = new Array();
          a & G.Wv._x && n.push(G.Wv._x),
            a & G.Wv.GH && n.push(G.Wv.GH),
            a & G.Wv.bM && n.push(G.Wv.bM),
            a & G.Wv.Jb && n.push(G.Wv.Jb),
            a & G.Wv.Nq && n.push(G.Wv.Nq),
            a & G.Wv.Jn && n.push(G.Wv.Jn),
            a & G.Wv.Mv && n.push(G.Wv.Mv);
          let s = new FormData();
          s.append("sessionid", (0, L.KC)()),
            s.append("clan_account_id", this.GetClanAccountID().toString()),
            s.append("accountflags", JSON.stringify(n));
          let o = await M().post(r, s);
          o &&
            200 == o.status &&
            o.data.success == i.R &&
            (this.m_clanAccountFlags = a);
        }
      }
      (0, n.Cg)([D.sH], R.prototype, "m_appidList", void 0),
        (0, n.Cg)([D.sH], R.prototype, "m_nFollowers", void 0),
        (0, n.Cg)([D.sH], R.prototype, "m_clanAccountFlags", void 0);
      var z = r(72034),
        F = r(17720);
      class E {
        constructor() {
          (0, D.Gn)(this);
        }
        m_mapClanToCreatorHome = new Map();
        m_mapAppToCreatorIDList = new Map();
        m_bLoadedFromConfig = !1;
        m_serviceTransport = void 0;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            const e = (0, L.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                const t = Number(e.creator_clan_id),
                  r = F.b.InitFromClanID(t),
                  a = new R(r);
                a.Initialize(e),
                  (a.m_promise = E.GetAsPromise(a)),
                  this.m_mapClanToCreatorHome.set(t, a);
              });
            const t = (0, L.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(t) &&
              t.forEach((e) => {
                void 0 !== e.appid &&
                  (this.m_mapAppToCreatorIDList.has(e.appid) ||
                    this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        GetServiceTransport() {
          if (!this.m_serviceTransport) {
            const e = (0, L.Tc)("loyalty_webapi_token", "application_config"),
              t = new z.D(L.TS.WEBAPI_BASE_URL, e || void 0);
            this.m_serviceTransport = t.GetServiceTransport();
          }
          return this.m_serviceTransport;
        }
        static async GetAsPromise(e) {
          return e;
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
            "string" == typeof t[0].name &&
            ("string" == typeof t[0].creator_clan_id ||
              "number" == typeof t[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
              t[0].clan_account_id > 0 &&
              "number" == typeof t[0].appid &&
            t[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(e) {
          return (
            this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(e) {
          return this.m_mapClanToCreatorHome.get(e.GetAccountID());
        }
        GetCreatorHomeByID(e) {
          return this.m_mapClanToCreatorHome.get(e.clan_account_id);
        }
        async LoadCreatorHome(e, t = !1, r) {
          if (
            (this.LazyInit(),
            t || !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
          ) {
            let t = new R(e);
            (t.m_promise = this.InternalCreatorHome(t, r)),
              await t.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), t);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, t) {
          let r = { get_appids: !0, l: L.TS.LANGUAGE },
            a =
              L.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            n = await M().get(a, { params: r, cancelToken: t && t.token });
          return e.Initialize(n.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let r = { appid: e },
              a = L.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              n = await M().get(a, {
                params: r,
                cancelToken: t && t.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, n.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, t, r) {
          let a = `${L.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            n = {
              term: e.replace(" ", "+"),
              require_creator: t,
              cc: L.TS.COUNTRY,
              l: L.TS.LANGUAGE,
              origin: self.origin,
            },
            i = new Array();
          const s = await M().get(a, { params: n, cancelToken: r.token });
          return (
            s.data.curators &&
              (0, D.h5)(() => {
                s.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let t = F.b.InitFromClanID(e.creator_clan_id),
                      r = new R(t);
                    r.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, r);
                  }
                  i.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                });
              }),
            i
          );
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, n.Cg)([D.sH], E.prototype, "m_mapClanToCreatorHome", void 0),
        (0, n.Cg)([D.sH], E.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, n.Cg)([D.XI], E.prototype, "LazyInit", null);
      const U = new E();
      function P(e) {
        if (!e) return;
        const t = (0, L.Tc)("creator_home_list_info", "application_config");
        if (null == t || "object" != typeof t || Array.isArray(t)) return;
        const r = t[e];
        return r && r.title
          ? {
              title: r.title,
              description: r.description?.length ? r.description : void 0,
              imageUrl: r.listtileimage?.length ? r.listtileimage : void 0,
            }
          : void 0;
      }
      function O(e) {
        return P(e)?.title;
      }
      function W(e) {
        return P(e)?.description;
      }
      function j(e) {
        return P(e)?.imageUrl;
      }
      function H(e) {
        const t = F.b.InitFromClanID(e);
        return {
          queryKey: ["CreatorHome", e],
          initialData: () => U.GetCreatorHome(t),
          queryFn: async () => {
            const t = F.b.InitFromClanID(e);
            return await U.LoadCreatorHome(t, !0);
          },
        };
      }
      function V(e) {
        const { data: t, isFetching: r, refetch: a } = (0, T.I)(H(e));
        return { creatorHome: t, isFetching: r, refetch: a };
      }
      function q(e, t, r) {
        return {
          queryKey: ["GetCreatorHomeListAppsQuery", e, t, r],
          queryFn: async () => {
            const n = U.GetServiceTransport(),
              s = o.w.Init(h);
            s.Body().set_clan_account_id(e),
              s.Body().set_listid(t),
              r && s.Body().set_ignore_dlc(!0);
            const l = await a.GetDevPageListApps(n, s);
            if (l.GetEResult() != i.R)
              throw new Error(
                `Error from GetCreatorHomeListAppsQuery: ${l.GetEResult()}`,
              );
            return l
              .Body()
              .apps()
              .slice()
              .sort((e, t) => (e.sort_order() ?? 0) - (t.sort_order() ?? 0))
              .map((e) => e.appid() ?? 0)
              .filter((e) => e > 0);
          },
          enabled: Boolean(e > 0 && t),
        };
      }
      function k(e, t) {
        return {
          queryKey: ["GetCreatorHomeGetAllListsQuery", e, t],
          queryFn: async () => {
            const r = U.GetServiceTransport(),
              a = o.w.Init(b.eh);
            a
              .Body()
              .set_steamid(
                new F.b(e, L.TS.EUNIVERSE, s.P3F, 0).ConvertTo64BitString(),
              ),
              a.Body().set_count(100);
            const n = await b.K_.GetLists(r, a);
            return n.BSuccess()
              ? n
                  .Body()
                  .list_details()
                  .filter((e) => t || e.list_state() != b.eb.N0)
              : null;
          },
          enabled: e > 0,
        };
      }
      function N(e, t) {
        return {
          queryKey: ["GetCreatorHomeGetListsDetailsQuery", e, t],
          queryFn: async () => {
            const r = U.GetServiceTransport(),
              a = o.w.Init(b.dU);
            a
              .Body()
              .set_steamid(
                new F.b(e, L.TS.EUNIVERSE, s.P3F, 0).ConvertTo64BitString(),
              ),
              a.Body().set_listid(t);
            const n = await b.K_.GetListDetails(r, a);
            return n.BSuccess() ? (n.Body().list_details() ?? null) : null;
          },
          enabled: e > 0,
        };
      }
      window.g_CreatorHomeStore = U;
    },
    82429: (e, t, r) => {
      r.d(t, { Ec: () => C, KN: () => h, Nh: () => a, kY: () => B });
      var a,
        n = r(34629),
        i = r(37085),
        s = r(33688),
        o = r(56545),
        l = r(34214),
        c = r(41735),
        m = r.n(c),
        u = r(14947),
        p = r(90626),
        d = r(17720),
        _ = r(26161),
        g = r(81393),
        f = r(68797),
        I = r(78327);
      class y {
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
      (0, n.Cg)([u.sH], y.prototype, "clanid", void 0),
        (0, n.Cg)([u.sH], y.prototype, "appid", void 0),
        (0, n.Cg)([u.sH], y.prototype, "can_edit", void 0),
        (0, n.Cg)([u.sH], y.prototype, "owns_app", void 0),
        (0, n.Cg)([u.sH], y.prototype, "follows_app", void 0),
        (0, n.Cg)([u.sH], y.prototype, "support_user", void 0),
        (0, n.Cg)([u.sH], y.prototype, "valve_admin", void 0),
        (0, n.Cg)([u.sH], y.prototype, "limited_user", void 0),
        (0, n.Cg)([u.sH], y.prototype, "event_ignored", void 0),
        (0, n.Cg)([u.sH], y.prototype, "event_followed", void 0),
        (0, n.Cg)([u.sH], y.prototype, "event_followed_flags", void 0),
        (function (e) {
          (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(a || (a = {}));
      class h {
        constructor() {
          (0, u.Gn)(this);
        }
        m_mapClanToUserPermissions = new Map();
        m_mapAnnounceGIDToVote = new Map();
        m_setReadEventGIDs = new Set();
        m_tracker = void 0;
        m_cm = void 0;
        static s_EventUserStore;
        m_bIsPresentationMode = (0, I.Bu)();
        static Get() {
          return (
            (0, g.wT)(
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
              "dev" == I.TS.WEB_UNIVERSE && (window.g_EventUserStore = t);
          }
        }
        static BIsInited() {
          return Boolean(h.s_EventUserStore);
        }
        async Init(e) {
          (this.m_cm = e), (this.m_tracker = new s.e(e));
          const t = (0, I.Fd)("partnereventpermissions", "application_config");
          this.ValidateStoreDefault(t) &&
            ((0, u.h5)(() => {
              t.forEach((e) => {
                let t = new y(e.clanid),
                  r = { result: t, promise: h.RemapToPromise(t), bLoaded: !0 };
                this.CopyFromResponseToTrack(r, e),
                  this.m_mapClanToUserPermissions.set(e.clanid, r);
              });
            }),
            ("dev" != I.TS.WEB_UNIVERSE && "beta" != I.TS.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let r = (0, I.Fd)("uservotes", "application_config");
          r &&
            (0, u.h5)(() => {
              r.forEach((e) => {
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
          return I.iA.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(e) {
          return (
            this.m_mapClanToUserPermissions.has(e) &&
            this.m_mapClanToUserPermissions.get(e).bLoaded
          );
        }
        GetPartnerEventPermissions(e) {
          if (!e || !e.BIsValid()) return new y(0);
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
        BFollowsEventAndNotifiedBy(e, t, r) {
          let a = this.GetPartnerEventPermissions(e),
            n = a.event_followed.indexOf(t);
          return -1 !== n && (a.event_followed_flags[n] & r) == r;
        }
        BIgnoresEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_ignored.indexOf(t)
          );
        }
        async LoadSingleAppEventPermissions(e) {
          let t = e.GetAccountID(),
            r = this.m_mapClanToUserPermissions.get(t);
          return (
            r ||
              ((r = {
                promise: this.InternalLoadSingleAppEventPermissions(e),
                result: new y(t),
                bLoaded: !1,
              }),
              this.m_mapClanToUserPermissions.set(t, r)),
            r.promise
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
            r = e.GetAccountID(),
            a = !Boolean(I.iA.logged_in);
          if (!this.m_mapClanToUserPermissions.has(r)) {
            let t = new y(e.GetAccountID());
            this.m_mapClanToUserPermissions.set(r, {
              result: t,
              promise: h.RemapToPromise(t),
              bLoaded: !1,
            });
          }
          try {
            if (Boolean(I.iA.logged_in)) {
              let n =
                  I.TS.COMMUNITY_BASE_URL +
                  "gid/" +
                  e.ConvertTo64BitString() +
                  "/ajaxgetpartnereventpermissions/",
                s = {};
              if (
                ("partnerweb" == (0, I.yK)()
                  ? ((n =
                      I.TS.PARTNER_BASE_URL +
                      "partnerevents/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() }))
                  : "store" == (0, I.yK)() &&
                    ((n =
                      I.TS.STORE_BASE_URL +
                      "events/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() })),
                (t = await m().get(n, { params: s, withCredentials: !0 })),
                t && t.data.success == i.R)
              ) {
                let e = this.m_mapClanToUserPermissions.get(r);
                e && this.CopyFromResponseToTrack(e, t.data);
              } else
                console.error(
                  "Partner Events Failed Load:" + (0, f.H)(t?.data).strErrorMsg,
                ),
                  (a = !0);
            }
          } catch (e) {
            if (
              ((t = e.response),
              (a = !0),
              e &&
                void 0 !== e.response &&
                void 0 !== e.response.data &&
                void 0 !== e.response.data.success &&
                e.response.data.success == i.Dy)
            );
            else {
              const t = (0, f.H)(e);
              console.error(
                "InternalLoadSingleAppEventPermissions account: " +
                  r +
                  ": " +
                  t.strErrorMsg,
                t,
              );
            }
          } finally {
            a &&
              (0, u.h5)(() => {
                let e = this.m_mapClanToUserPermissions.get(r);
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
          return this.m_mapClanToUserPermissions.get(r).result;
        }
        async SetFollowOrUnfollowEvent(e, t, r, a, n) {
          let i = this.GetPartnerEventPermissions(r),
            s = i.event_followed.indexOf(a),
            o = 0;
          -1 !== s &&
            ((o = i.event_followed_flags[s]), e ? (n = o & ~n) : (n |= o));
          let l = 0 == n,
            c =
              ("store" === (0, I.yK)()
                ? I.TS.STORE_BASE_URL + "events"
                : I.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  r.ConvertTo64BitString()) +
              (l ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            p = new URLSearchParams();
          p.append("sessionid", (0, I.KC)()),
            p.append("ignore", "" + t),
            p.append("gid", a),
            p.append("notification_flag", "" + n),
            p.append("clan_accountid", "" + r.GetAccountID());
          await m().post(c, p, { withCredentials: !0 });
          (0, u.h5)(() => {
            let e = this.m_mapClanToUserPermissions.get(r.GetAccountID()),
              i = null,
              s = null,
              o = null,
              c = null;
            l
              ? ((i = t ? e.result.event_ignored : e.result.event_followed),
                (o = t ? null : e.result.event_followed_flags))
              : t
                ? ((i = e.result.event_followed),
                  (o = e.result.event_followed_flags),
                  (s = e.result.event_ignored))
                : ((i = e.result.event_ignored),
                  (s = e.result.event_followed),
                  (c = e.result.event_followed_flags));
            let m = i.indexOf(a);
            if ((m > -1 && (i.splice(m, 1), o && o.splice(m, 1)), s)) {
              let e = s.indexOf(a);
              -1 == e ? (s.push(a), c && c.push(n)) : c && (c[e] = n);
            }
          });
        }
        async Vote(e, t, r) {
          if (!e || !e.AnnouncementGID) return !1;
          const a = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
          if (a === t) return !0;
          if (
            (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t),
            (0, u.h5)(() => {
              !0 === a && e.UpdateVoteCount("up", -1),
                !1 === a && e.UpdateVoteCount("down", -1),
                !0 === t && e.UpdateVoteCount("up", 1),
                !1 === t && e.UpdateVoteCount("down", 1);
            }),
            this.m_cm)
          ) {
            let r = o.w.Init(l.QU);
            return (
              r.Body().set_announcementid(e.AnnouncementGID),
              r.Body().set_vote_up(!!t),
              r.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
              (
                await l.BE.RateClanAnnouncement(
                  this.m_cm.GetServiceTransport(),
                  r,
                )
              ).GetEResult() == i.R
            );
          }
          {
            const a = (0, I.yK)(),
              n =
                "community" == a || "steamtv" == a
                  ? I.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    e.AnnouncementGID
                  : I.TS.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    e.AnnouncementGID,
              s = new URLSearchParams();
            s.append("sessionid", (0, I.KC)()),
              s.append("voteup", t ? "1" : "0"),
              s.append("clanid", "" + e.clanSteamID.GetAccountID()),
              s.append("ajax", "1");
            const o = { withCredentials: !0, cancelToken: r.token };
            return (await m().post(n, s, o)).data.success == i.R;
          }
        }
        async LoadMyVote(e, t) {
          if (e?.AnnouncementGID) {
            if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
              return !!this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            let r;
            if (this.m_cm) {
              let t = o.w.Init(l.$Y);
              t.Body().set_announcementid(e.AnnouncementGID);
              let a = await l.BE.GetClanAnnouncementVoteForUser(
                this.m_cm.GetServiceTransport(),
                t,
              );
              a.GetEResult() == i.R &&
                (r =
                  !!a.Body().voted_up() || (!a.Body().voted_down() && void 0));
            } else {
              const a = "store" == (0, I.yK)(),
                n = a
                  ? I.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : I.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                i = { gid: a ? e.AnnouncementGID : void 0 },
                s = await m().get(n, {
                  withCredentials: !0,
                  cancelToken: t.token,
                  params: i,
                });
              r = !!s.data.voted_up || (!s.data.voted_down && void 0);
            }
            return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, r), r;
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
          return (I.UF.IS_OGG || I.UF.IS_VALVE_GROUP) && t.valve_admin;
        }
      }
      function B() {
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
        const [t, r] = (0, p.useState)(
            h.Get().BIsPartnerEventPermissionsLoaded(e),
          ),
          a = d.b.InitFromClanID(e),
          [n, i] = (0, p.useState)(h.Get().GetPartnerEventPermissions(a));
        return (
          (0, p.useEffect)(() => {
            if (!t) {
              const t = d.b.InitFromClanID(e);
              h.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  i(e), r(!0);
                });
            }
          }, [t, e]),
          n
        );
      }
      (0, n.Cg)([u.sH], h.prototype, "m_mapClanToUserPermissions", void 0),
        (0, n.Cg)([u.sH], h.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, n.Cg)([u.sH], h.prototype, "m_setReadEventGIDs", void 0),
        (0, n.Cg)([u.XI], h.prototype, "CopyFromResponseToTrack", null);
    },
    26161: (e, t, r) => {
      r.d(t, { H: () => i });
      var a = r(22837),
        n = r(30470);
      const i = () => (n.TS.EUNIVERSE === a.Rv ? 2581 : 45267781);
    },
  },
]);
