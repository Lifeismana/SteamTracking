/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [20976],
    {
      55483: (V, Q, l) => {
        "use strict";
        l.d(Q, {
          yT: () => v,
          MR: () => L,
          AB: () => Dt,
          Rc: () => jt,
          Gt: () => mt,
          ko: () => It,
          fy: () => xt,
          ec: () => X,
          aA: () => Nt,
          TB: () => ft,
          W$: () => H,
        });
        var t = l(99412),
          A = l(76559),
          F = l(75233),
          E = l(80902),
          x = l(72604),
          U = l(72609);
        async function G(c) {
          const _ = `${U.TS.COMMUNITY_BASE_URL}ogg/${c}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return M(_);
        }
        async function z(c) {
          const _ = A.b.InitFromClanID(c),
            C = `${U.TS.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return M(C);
        }
        async function k(c) {
          const _ = `${U.TS.COMMUNITY_BASE_URL}groups/${c}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return M(_);
        }
        async function y(c) {
          const _ = `${U.TS.COMMUNITY_BASE_URL}games/${c}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return M(_);
        }
        async function M(c) {
          const _ = await fetch(c, { method: "GET" });
          if (_.status == 404) return null;
          if (!_.ok) throw new Error(`Server returned ${_.status}`);
          const C = await _.json();
          return C.success != x.R ? null : C;
        }
        function N(c) {
          return ["clantoclaninfo", c];
        }
        function g(c) {
          return ["apptoclanid", c];
        }
        function d(c, _ = "group") {
          return ["vanitytoclanid", _, c?.toLocaleLowerCase()];
        }
        function v(c) {
          const _ = c?.[0];
          return (
            _ == "clantoclaninfo" || _ == "apptoclanid" || _ == "vanitytoclanid"
          );
        }
        const Z = new WeakSet();
        function ct(c) {
          if (!Z.has(c)) {
            Z.add(c);
            for (const _ of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              c.setQueryDefaults(_, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const w = new WeakMap();
        function O(c) {
          if (!c) return null;
          let _ = w.get(c);
          return (
            _ ||
              ((_ = {
                ...c,
                clanSteamID: c.clanSteamIDString
                  ? new A.b(c.clanSteamIDString)
                  : A.b.InitFromClanID(c.clanAccountID),
              }),
              w.set(c, _)),
            _
          );
        }
        function ut(c) {
          const { msg: _, success: C, ...lt } = c;
          return {
            ...lt,
            rss_language: c.rss_language ? c.rss_language : t.Bhc,
          };
        }
        function J(c, _) {
          if (!_) return null;
          ct(c);
          const C = ut(_);
          return (
            c.setQueryData(N(C.clanAccountID), C),
            C.appid && c.setQueryData(g(C.appid), C.clanAccountID),
            C.vanity_url &&
              c.setQueryData(d(C.vanity_url, "group"), C.clanAccountID),
            C
          );
        }
        function Nt(c, _) {
          for (const C of _) J(c, C);
        }
        function ft(c) {
          const _ = (0, F.jE)();
          return (0, E.I)(X(c, _));
        }
        function X(c, _) {
          return (
            ct(_),
            {
              queryKey: N(c ?? null),
              queryFn: async () => (c ? J(_, await z(c)) : null),
              enabled: c !== void 0,
              select: O,
            }
          );
        }
        function _t(c, _) {
          return (
            ct(_),
            {
              queryKey: g(c),
              queryFn: async () => J(_, await G(c))?.clanAccountID ?? null,
              enabled: !!c,
            }
          );
        }
        function yt(c, _, C = "group") {
          return (
            ct(_),
            {
              queryKey: d(c, C),
              queryFn: async () => {
                if (C == "store") {
                  const Y = _.getQueryData(d(c, "group"));
                  if (Y) return Y;
                }
                const lt = C == "store" ? await y(c) : await k(c);
                return J(_, lt)?.clanAccountID ?? null;
              },
              enabled: !!c,
            }
          );
        }
        function S(c) {
          return c.isPending ? void 0 : (c.data ?? null);
        }
        function u(c) {
          return ft(c.BIsClanAccount() ? c.GetAccountID() : void 0);
        }
        function P(c) {
          const _ = useQueryClient(),
            C = useQuery(_t(c, _));
          return ft(c ? S(C) : void 0);
        }
        function H(c, _ = "group") {
          const C = (0, F.jE)(),
            lt = (0, E.I)(yt(c, C, _));
          return ft(c ? S(lt) : void 0);
        }
        function mt(c, _) {
          if (c) return O(_.getQueryData(N(c))) ?? void 0;
        }
        function It(c, _) {
          if (c) return mt(_.getQueryData(g(c)), _);
        }
        function xt(c, _, C) {
          if (!c) return;
          const lt = C ? [C] : ["store", "group"];
          for (const Y of lt) {
            const St = mt(_.getQueryData(d(c, Y)), _);
            if (St) return St;
          }
        }
        async function L(c, _) {
          return c ? O(await _.fetchQuery(X(c, _))) : null;
        }
        async function Dt(c, _) {
          return c ? L(await _.fetchQuery(_t(c, _)), _) : null;
        }
        async function jt(c, _, C = "group") {
          return c ? L(await _.fetchQuery(yt(c, _, C)), _) : null;
        }
      },
      15860: (V, Q, l) => {
        "use strict";
        l.d(Q, { L: () => U, c: () => x });
        var t = l(27386),
          A = l(76617),
          F = l(58632),
          E = l.n(F);
        function x(G, z) {
          return new (E())(
            async (k) => {
              const y = [...k],
                M = await t.xtC.GetPlayerLinkDetails(G, { steamids: y }),
                N = new Map();
              return (
                M.Body()
                  .accounts()
                  .forEach((g) => {
                    const d = g.toObject();
                    N.set(d.public_data.steamid, d);
                  }),
                y.map((g) => N.get(g) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...z },
          );
        }
        function U(G) {
          return (0, A.V)("PlayerLinkDetails", () => x(G));
        }
      },
      24525: (V, Q, l) => {
        "use strict";
        l.d(Q, { $e: () => A, B7: () => E, Pe: () => O, Pv: () => F });
        const t = 0,
          A = 1,
          F = 2,
          E = 4,
          x = 8,
          U = 16,
          G = 32,
          z = 64,
          k = 128,
          y = 256,
          M = 512,
          N = 1024,
          g = 2048,
          d = 4096,
          v = 8192,
          Z = 16384,
          ct = 32768,
          w = 65536,
          O = 1073741824,
          ut = null;
      },
      76617: (V, Q, l) => {
        "use strict";
        l.d(Q, { V: () => z });
        function t(k) {
          return Object.prototype.toString.call(k) === "[object Object]";
        }
        function A(k) {
          if (!t(k)) return !1;
          const y = k.constructor;
          if (typeof y > "u") return !0;
          const M = y.prototype;
          return !(
            !t(M) || !Object.prototype.hasOwnProperty.call(M, "isPrototypeOf")
          );
        }
        function F(...k) {
          return JSON.stringify(k, (y, M) => {
            if (A(M)) {
              const N = {};
              return (
                Object.keys(M)
                  .sort()
                  .forEach((g) => {
                    N[g] = M[g];
                  }),
                N
              );
            }
            return M;
          });
        }
        var E = l(90626),
          x = l(7850);
        const U = (0, E.createContext)({ instances: {}, factories: {} });
        function G(k) {
          const { name: y, fnFactory: M, children: N } = k,
            g = React.useContext(U),
            [d] = useState({}),
            v = useMemo(
              () => ({
                instances: d,
                factories: { ...g.factories, [y]: M },
                parent: g,
              }),
              [d, y, g],
            );
          return jsx(U.Provider, { value: v, children: N });
        }
        function z(k, y) {
          const M = (0, E.useContext)(U),
            N = typeof k == "string" ? k : F(...k);
          let g = M;
          for (; g; ) {
            if (N in g.instances) return g.instances[N];
            if (N in g.factories) break;
            g = g.parent;
          }
          const v = (g?.factories[N] ?? y)();
          return ((g ?? M).instances[N] = v), v;
        }
      },
      67529: (V, Q, l) => {
        "use strict";
        l.d(Q, { IU: () => k, by: () => y, sc: () => x });
        var t = l(3166),
          A = l(35413),
          F = l(71742),
          E = l(24525);
        const x = 0,
          U = "061818254b2c99ac49e6626adb128ed1282a392f",
          G = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          z = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          k = 120;
        class y {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(g) {
            this.m_unAppID = g;
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
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, U);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, U);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == E.B7 || this.apptype == E.Pv;
          }
          BuildAppURL(g, d) {
            return g
              ? t.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  g +
                  ".jpg"
              : (0, A.t)(d);
          }
          DeserializeFromMessage(g) {
            (this.m_bInitialized = !0),
              (this.m_strName = g.name()),
              (this.m_strIconURL = g.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = g.app_type());
          }
          DeserializeFromAppOverview(g) {
            g.icon_hash() && g.app_type() != E.Pe
              ? ((this.m_bInitialized = !0),
                (this.m_strName = g.display_name()),
                (this.m_strIconURL = g.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = g.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(g) {
            try {
              (this.m_strName = g.strName),
                (this.m_strIconURL = g.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(g.strUpdatedFromServer)),
                (this.m_eAppType = g.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, F.wT)(
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
        class M {}
      },
      35413: (V, Q, l) => {
        "use strict";
        l.d(Q, { d: () => A, t: () => F });
        var t = l(3166);
        const A = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function F(E, x) {
          let U = ".jpg";
          (!E || E === "0000000000000000000000000000000000000000") && (E = A),
            E.length == 44 && ((U = E.substr(-4)), (E = E.substr(0, 40)));
          let G = t.TS.AVATAR_BASE_URL;
          return (
            G ||
              ((G = t.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (G += E.substr(0, 2) + "/")),
            (G += E),
            x && x != "small" && (G += "_" + x),
            (G += U),
            G
          );
        }
      },
      813: (V, Q, l) => {
        "use strict";
        l.d(Q, { $5: () => J, TB: () => ut, ac: () => w });
        var t = l(40497),
          A = l(75233),
          F = l(14947),
          E = l(90626),
          x = l(76559),
          U = l(71742),
          G = l(3166),
          z = l(60480),
          k = l(33512),
          y = l(55483),
          M = l(77291);
        const N = new WeakSet();
        function g(S = t.L) {
          if (typeof window > "u" || typeof document > "u" || N.has(S)) return;
          const u = (0, G.Fd)("groupvanityinfo", "application_config");
          (u === void 0 && document.readyState != "complete") ||
            (N.add(S), d(u) && (0, y.aA)(S, u));
        }
        function d(S) {
          const u = S;
          return u &&
            Array.isArray(u) &&
            u.length > 0 &&
            typeof u[0] == "object"
            ? typeof u[0].clanAccountID == "number" &&
                (typeof u[0].appid == "number" ||
                  typeof u[0].vanity_url == "string")
            : !1;
        }
        function v(S) {
          return typeof S == "string" ? parseInt(S) : S;
        }
        function Z(S) {
          return typeof S == "string" ? Number.parseInt(S) : S;
        }
        class ct {
          m_queryClient = t.L;
          m_boxCacheVersion = F.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            g(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((u) => {
                  (u?.type != "added" &&
                    u?.type != "updated" &&
                    u?.type != "removed") ||
                    ((0, y.yT)(u.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, F.h5)(() =>
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
          AddGroupVanities(u) {
            this.LazyInit(), d(u) && (0, y.aA)(this.m_queryClient, u);
          }
          BHasClanInfoLoaded(u) {
            return (
              (0, U.wT)(
                u.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, U.wT)(
                u.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(u.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(u) {
            return !!(0, y.Gt)(Z(u), this.ReadCache());
          }
          RegisterClanData(u) {
            this.LazyInit(), (0, y.aA)(this.m_queryClient, u);
          }
          async LoadOGGClanInfoForAppID(u) {
            return (
              this.LazyInit(),
              (u = v(u)),
              (0, U.wT)(
                u != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              u == 0 ? null : (0, y.AB)(u, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(u) {
            return this.LazyInit(), (0, y.Rc)(u, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(u) {
            return this.LazyInit(), (0, y.Rc)(u, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(u) {
            return this.LoadClanInfoForClanAccountID(u.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(u) {
            return this.LazyInit(), (0, y.MR)(Z(u), this.m_queryClient);
          }
          GetOGGClanInfo(u) {
            const P = this.ReadCache();
            return typeof u == "string" ? (0, y.fy)(u, P) : (0, y.ko)(u, P);
          }
          GetClanSteamIDForAppID(u) {
            const P = (0, y.ko)(v(u), this.ReadCache());
            return P ? x.b.InitFromClanID(P.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(u) {
            return (0, y.ko)(v(u), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(u) {
            return (0, y.Gt)(u.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(u) {
            return this.BHasClanInfoLoadedByAccountID(u);
          }
          GetClanMemberCount(u) {
            return (0, y.ko)(v(u), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(u) {
            return (
              (0, U.wT)(
                !!u,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, y.Gt)(Z(u), this.ReadCache())
            );
          }
          GetCreatorStoreURL(u) {
            let P = z.pF.GetCreatorHome(u);
            if (P) return P.GetCreatorHomeURL("developer");
            let H = this.GetClanInfoByClanAccountID(u.GetAccountID());
            return (
              G.TS.COMMUNITY_BASE_URL +
              (H.vanity_url
                ? "groups/" + H.vanity_url
                : "gid/" + u.ConvertTo64BitString())
            );
          }
        }
        const w = new ct();
        (0, M.V)("g_ClanStore", w);
        function O() {
          const S = (0, A.jE)();
          return g(S), S;
        }
        function ut(S) {
          O();
          const { data: u, isPending: P } = (0, y.TB)(S ? Z(S) : void 0);
          return [!!S && P, u ?? void 0];
        }
        function J(S) {
          const u = O();
          (0, E.useEffect)(() => {
            S &&
              (0, y.MR)(Z(S), u).catch((P) =>
                console.error(`Failed to hint load clan info ${S}`, P),
              );
          }, [S, u]);
        }
        function Nt(S) {
          return O(), useClanInfoByVanityQuery(S).data ?? null;
        }
        function ft(S) {
          O();
          const u = S ? v(S) : void 0,
            { data: P, isPending: H } = useClanInfoByAppIDQuery(u);
          return { bLoadingClanInfo: !!u && H, clanInfo: P ?? null };
        }
        function X(S, u) {
          if (S.BIsOGGEvent()) return { bVisible: !1 };
          if (S.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (S.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            S.jsondata.clone_from_event_gid &&
            S.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (S.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const H = g_CreatorHomeStore.GetCreatorHome(S.clanSteamID);
          return H &&
            H.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : u
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function _t(S, u) {
          return S.BIsOGGEvent()
            ? S.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : u
                  ? S.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function yt(S) {
          return S.BIsOGGEvent()
            ? { bVisible: !1 }
            : S.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : S.BHasSaleEnabled()
                ? { bVisible: !0 }
                : S.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      45404: (V, Q, l) => {
        "use strict";
        l.r(Q),
          l.d(Q, {
            GreenEnvelope: () => Ft,
            default: () => Me,
            useSteamNotifications: () => At,
          });
        var t = l(7850),
          A = l(99412),
          F = l(79365),
          E = l(65946),
          x = l(90626),
          U = l(42993),
          G = l(96214),
          z = l(68312),
          k = l(16346),
          y = l(84750),
          M = l(56718),
          N = l(36118),
          g = l(36707),
          d = l(18210),
          v = l(98609),
          Z = l(25792),
          ct = l(29553),
          w = l.n(ct),
          O = l(48453),
          ut = l(76559);
        function J(n) {
          if (!n) return;
          const e = typeof n == "string" ? n : n.locString,
            i = typeof n == "string" ? [] : n.params || [];
          if (e) return e[0] !== "#" ? e : (0, d.we)(e, ...i);
        }
        function Nt(n, e) {
          return x.useMemo(() => {
            if (n === void 0) return null;
            let i = (0, y.K9)(n);
            const o = (0, y.u5)(e);
            if (!i || !o) return null;
            const s =
                typeof i.displayNameLoc != "function"
                  ? { locString: i.displayNameLoc }
                  : i.displayNameLoc(o),
              m =
                typeof i.titleLoc != "function"
                  ? { locString: i.titleLoc }
                  : i.titleLoc(o),
              a =
                typeof i.bodyLoc != "function"
                  ? { locString: i.bodyLoc }
                  : i.bodyLoc(o),
              r = typeof i.image != "function" ? i.image : i.image(o),
              f = typeof i.link != "function" ? i.link : i.link(o);
            return {
              display_name: J(s),
              title: J(m),
              body: J(a),
              image: r,
              link: f,
            };
          }, [e, n]);
        }
        function ft(n, e) {
          return x.useMemo(() => {
            const i = n,
              o = (0, y.aq)(i),
              s = (0, y.u5)(e);
            if (!o) return null;
            const m =
                typeof o.titleLoc == "string" ? o.titleLoc : o.titleLoc(s),
              a = typeof o.bodyLoc == "string" ? o.bodyLoc : o.bodyLoc(s),
              r = typeof o.url == "string" ? o.url : o.url(s),
              f =
                typeof o.steamidAttribute == "string"
                  ? o.steamidAttribute
                  : o.steamidAttribute(s),
              p = s && s[f];
            return { strTitleLoc: m, strBodyLoc: a, strUrl: r, steamid: p };
          }, [e, n]);
        }
        function X(n) {
          return x.useMemo(
            () => ((0, y.V4)(n.type) ? (0, y.bP)(n) : null),
            [n],
          );
        }
        var _t = l(87910),
          yt = l.n(_t),
          S = l(51079),
          u = l(72865),
          P = l(35098),
          H = l(19298),
          mt = l(92264),
          It = l(36174),
          xt = l(93761),
          L = l.n(xt);
        const Dt = !0;
        function jt(n) {
          let {
              onActivate: e,
              icon: i,
              body: o,
              eUIMode: s,
              classNames: m,
            } = n,
            a = e,
            r = L().PinnedTemplate;
          return (
            s == A.ogI
              ? (r = L().PinnedTemplateDesktop)
              : s == A.yrU && (r = L().PinnedTemplateWeb),
            (r = (0, g.A)(r, m)),
            (0, t.jsx)(H.Z, {
              className: r,
              onActivate: a,
              children: (0, t.jsx)("div", {
                className: L().Content,
                children: (0, t.jsxs)("div", {
                  className: L().PinnedBody,
                  children: [
                    (0, t.jsx)("span", { className: L().Icon, children: i }),
                    o,
                  ],
                }),
              }),
            })
          );
        }
        function c(n) {
          const {
            count: e,
            icon: i,
            onActivate: o,
            strLocToken: s,
            bAlwaysShow: m,
            eUIMode: a,
            classNames: r,
            visible: f,
          } = n;
          if (!e && !m) return null;
          const p = (0, d.Yp)(s, e);
          return (0, t.jsx)(jt, {
            icon: i,
            body: p,
            onActivate: o,
            eUIMode: a,
            classNames: r,
            visible: f,
          });
        }
        var _ = ((n) => (
          (n[(n.none = 0)] = "none"),
          (n[(n.loadingActive = 1)] = "loadingActive"),
          (n[(n.loadingComplete = 2)] = "loadingComplete"),
          n
        ))(_ || {});
        function C(n) {
          let {
            nUnread: e,
            location: i,
            eUIMode: o,
            bLoading: s,
            footer: m,
            bNewIndicator: a,
          } = n;
          const [r, f] = x.useState(s ? 1 : 0),
            [p, h] = x.useState(void 0);
          x.useEffect(() => {
            r == 1 && !s ? f(2) : r == 2 && s && f(1);
          }, [r, s]),
            x.useEffect(() => {
              let b =
                parseInt(L().loadinganimationiterationcount) *
                parseInt(L().loadinganimationduration) *
                1e3;
              const B = window.setTimeout(() => f(0), b);
              return () => window.clearTimeout(B);
            }, []),
            x.useEffect(() => {
              e && e > 0 && p !== L().Unread && i != A.miK && i != A.PN1
                ? h(L().Unread)
                : !e && p == L().Unread && h(L().MarkedRead);
            }, [e, i, p]);
          let I = n.onActivate;
          I || (I = () => console.log("Missing activate function")),
            r == 1 && (I = void 0);
          let T = L().StandardTemplate;
          i == A.oYe
            ? (T = L().AllNotificationsTemplate)
            : i == A.miK
              ? (T = L().DesktopToastTemplate)
              : (o == A.ogI || o == A.yrU) && (T = L().StandardTemplateDesktop);
          let D = null;
          if (r != 0 && i != A.miK && i != A.PN1) {
            let b = r == 2 ? L().Hide : null;
            D = (0, t.jsxs)("div", {
              className: (0, g.A)(L().LoadingTemplate, b),
              children: [
                (0, t.jsx)("div", {
                  className: (0, g.A)(
                    L().StandardLogoDimensions,
                    L().ShimmerLogo,
                  ),
                }),
                (0, t.jsxs)("div", {
                  className: L().Content,
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, g.A)(L().Header, L().ShimmerHeader),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, g.A)(L().Body, L().ShimmerBody),
                    }),
                  ],
                }),
              ],
            });
          }
          return (0, t.jsxs)(H.Z, {
            onActivate: I,
            className: L().StandardTemplateContainer,
            onOptionsButton: n.onOptionsButton,
            onOptionsActionDescription: n.onOptionsButtonDesc,
            children: [
              (0, t.jsxs)("div", {
                className: (0, g.A)(T, p),
                children: [
                  (0, t.jsx)("div", {
                    className: L().StandardLogoDimensions,
                    children: n.logo,
                  }),
                  n.personaStatus &&
                    (0, t.jsx)("div", {
                      className: (0, g.A)(L().AvatarStatus, n.personaStatus),
                    }),
                  (0, t.jsx)("div", {
                    className: L().Content,
                    children: n.children,
                  }),
                  D,
                  a && (0, t.jsx)(lt, { location: i }),
                ],
              }),
              m || null,
            ],
          });
        }
        function lt(n) {
          const { location: e } = n;
          return !Dt || e != A.B3I
            ? null
            : (0, t.jsx)("div", {
                className: L().NewIndicator,
                children: (0, t.jsx)(N.jlt, {}),
              });
        }
        function Y(n) {
          let {
            icon: e,
            title: i,
            timestamp: o,
            location: s,
            fnRenderTimestamp: m,
          } = n;
          const a = !!o && (s == A.B3I || s == A.oYe);
          let r;
          return (
            s == A.oYe ? (r = Kt) : (r = m ?? Qt),
            (0, t.jsxs)("div", {
              className: L().Header,
              children: [
                (0, t.jsx)(St, { icon: e }),
                !!i && (0, t.jsx)(Vt, { title: i }),
                a && r({ timestamp: o }),
              ],
            })
          );
        }
        function St(n) {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !!n.icon &&
                (0, t.jsx)("div", { className: L().Icon, children: n.icon }),
              " ",
            ],
          });
        }
        function Vt(n) {
          return (0, t.jsx)("div", { className: L().Title, children: n.title });
        }
        function q(n) {
          let e = (0, g.A)(
            L().StandardNotificationDescription,
            n.multiline && L().Multiline,
          );
          return (0, t.jsx)("div", { className: e, children: n.children });
        }
        function tt(n) {
          let e = (0, g.A)(
            L().StandardNotificationSubText,
            n.multiline && L().Multiline,
          );
          return (0, t.jsx)("div", { className: e, children: n.children });
        }
        function Kt(n) {
          if (n.timestamp === void 0) return null;
          let e = new Date(),
            i = new Date(n.timestamp * 1e3),
            o = (0, mt.KC)(n.timestamp);
          return (
            (0, It.JD)(e, i) ||
              (o = (0, mt._l)(n.timestamp, !1, !1, !1) + " " + o),
            (0, t.jsx)("div", { className: L().Timestamp, children: o })
          );
        }
        function Qt(n) {
          if (n.timestamp === void 0) return null;
          let e = new Date(),
            i = new Date(n.timestamp * 1e3),
            o = (0, It.JD)(e, i)
              ? (0, mt.KC)(n.timestamp)
              : (0, mt._l)(n.timestamp, !1, !1, !1);
          return (0, t.jsx)("div", { className: L().Timestamp, children: o });
        }
        function Re(n) {
          const { text: e } = n;
          return jsx("div", { className: styles.BottomBar, children: e });
        }
        function Ge(n) {
          let {
              playerName: e,
              nickName: i,
              parenthesizeNickNames: o,
              state: s,
            } = n,
            m = !!i,
            a = m && !o,
            r = a ? i : e,
            f = s == "ingame" ? styles.IngameTitle : styles.OnlineTitle;
          return jsxs(Fragment, {
            children: [
              jsx("span", { className: classnames(f), children: r }),
              o &&
                m &&
                jsxs("span", {
                  className: classnames(styles.PlayerNickName, styles.FullName),
                  children: ["(", i, ")"],
                }),
              a &&
                jsx("span", {
                  className: styles.PlayerNickName,
                  children: " *",
                }),
            ],
          });
        }
        var wt = l(25236),
          bt = l(68495),
          Pt = l(3166);
        function et(n) {
          return n == A.PN1;
        }
        function Yt(n, e) {
          return x.useCallback(
            (i) => {
              n && n(i), e && e();
            },
            [n, e],
          );
        }
        var zt = l(97786),
          nt = l.n(zt);
        function it(n) {
          let {
              onActivate: e,
              onDismiss: i,
              logo: o,
              icon: s,
              title: m,
              body: a,
              personaStatus: r,
              className: f,
              singleLineOnly: p,
              fullWidth: h,
            } = n,
            I = Yt(e, i),
            T = (D) => {
              D.button == 1 && i && i();
            };
          return (0, t.jsxs)(H.Z, {
            className: (0, g.A)(nt().ShortTemplate, !p && nt().TwoLine, f),
            onActivate: I,
            onMouseDown: T,
            children: [
              (0, t.jsx)("div", {
                className: nt().ShortLogoDimensions,
                children: o,
              }),
              n.personaStatus &&
                (0, t.jsx)("div", {
                  className: (0, g.A)(nt().AvatarStatus, r),
                }),
              (0, t.jsxs)("div", {
                className: (0, g.A)(nt().Content, h && nt().FullWidth),
                children: [
                  (0, t.jsxs)("div", {
                    className: nt().Header,
                    children: [
                      !!s &&
                        (0, t.jsx)("div", {
                          className: nt().Icon,
                          children: s,
                        }),
                      (0, t.jsx)("div", { className: nt().Title, children: m }),
                    ],
                  }),
                  (0, t.jsx)("div", { className: nt().Body, children: a }),
                ],
              }),
            ],
          });
        }
        var Xt = l(92012),
          K = l.n(Xt),
          Zt = l(813),
          $ = l(40358),
          $t = l(21721);
        function Jt(n) {
          switch (n) {
            case O.Vv.wp:
              return (0, t.jsx)(N.ilR, {});
            case O.Vv.wY:
              return (0, t.jsx)(N.Cv4, {});
            default:
              return (0, t.jsx)(N.Qte, {});
          }
        }
        function qt(n) {
          let {
            fallbackLogo: e,
            data: i,
            location: o,
            icon: s,
            timestamp: m,
            fnRenderTimestamp: a,
            onHide: r,
          } = n;
          const f = typeof i?.image == "number",
            p = f ? { appid: i.image } : void 0,
            { data: h } = (0, $.J$)(p),
            { data: I } = (0, $.lv)(p),
            T = i?.display_name ?? "",
            D = i?.title ?? i?.body,
            b = i?.title ? i.body : null,
            B = et(o),
            j = p && (!h || !I),
            [R, rt] = x.useState(!1),
            dt = () => rt(!0);
          let W = null;
          if (f) W = Bt(I, e, B);
          else {
            const pt = B ? K().ShortLogoDimensions : K().StandardLogoDimensions;
            W =
              i?.image && !R
                ? (0, t.jsx)("img", {
                    className: pt,
                    src: i.image,
                    onError: dt,
                  })
                : e;
          }
          return B
            ? (0, t.jsx)(it, { ...n, logo: W, icon: s, title: T, body: D })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  logo: W,
                  bLoading: j,
                  ...n,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: s,
                      title: T,
                      timestamp: m,
                      location: o,
                      fnRenderTimestamp: a,
                    }),
                    (0, t.jsx)(q, { multiline: !b, children: D }),
                    !!b && (0, t.jsx)(tt, { children: b }),
                    r ? (0, t.jsx)(ot, { onHide: r }) : null,
                  ],
                }),
              });
        }
        function te(n) {
          let {
            displayName: e,
            location: i,
            icon: o,
            timestamp: s,
            fnRenderTimestamp: m,
            onHide: a,
          } = n;
          const r = et(i),
            f = (0, d.we)("#SteamNotifications_TradeOffer_Title"),
            p = r
              ? (0, d.we)("#SteamNotifications_TradeOffer_Body_Short", e ?? "")
              : (0, d.we)("#SteamNotifications_TradeOffer_Body"),
            h = (0, d.we)(
              "#SteamNotifications_TradeOffer_Description",
              e ?? "",
            ),
            I = !e;
          return r
            ? (0, t.jsx)(it, {
                ...n,
                logo: n.logo,
                icon: n.icon,
                title: f,
                body: p,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  bLoading: I,
                  ...n,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: o,
                      title: f,
                      timestamp: s,
                      location: i,
                      fnRenderTimestamp: m,
                    }),
                    (0, t.jsx)(q, { children: p }),
                    (0, t.jsx)(tt, { children: h }),
                    a ? (0, t.jsx)(ot, { onHide: a }) : null,
                  ],
                }),
              });
        }
        const ee = (n) => {
          let {
            location: e,
            icon: i,
            timestamp: o,
            fnRenderTimestamp: s,
            onHide: m,
          } = n;
          const a = et(e),
            r = (0, d.we)("#SteamNotifications_TradeReversal_Title"),
            f = a
              ? (0, d.we)("#SteamNotifications_TradeReversal_Body_Short")
              : (0, d.we)("#SteamNotifications_TradeReversal_Body"),
            p = (0, d.we)("#SteamNotifications_TradeReversal_Description");
          return a
            ? (0, t.jsx)(it, {
                ...n,
                logo: n.logo,
                icon: n.icon,
                title: r,
                body: f,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  ...n,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: i,
                      title: r,
                      timestamp: o,
                      location: e,
                      fnRenderTimestamp: s,
                    }),
                    (0, t.jsx)(q, { children: f }),
                    (0, t.jsx)(tt, { children: p }),
                    m ? (0, t.jsx)(ot, { onHide: m }) : null,
                  ],
                }),
              });
        };
        function ne(n) {
          let {
            senderName: e,
            location: i,
            icon: o,
            timestamp: s,
            fnRenderTimestamp: m,
            onHide: a,
          } = n;
          const r = et(i),
            f = r
              ? (0, d.we)("#Notification_GiftReceived_Body_Short", e ?? "")
              : (0, d.we)("#Notification_GiftReceived_Body"),
            p = e
              ? (0, d.we)("#Notification_GiftReceived_Description", e)
              : null,
            h = (0, d.we)("#Notification_GiftReceived_Title"),
            I = !e;
          return r
            ? (0, t.jsx)(it, {
                ...n,
                logo: n.logo,
                icon: n.icon,
                title: h,
                body: f,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  bLoading: I,
                  ...n,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: o,
                      title: h,
                      timestamp: s,
                      location: i,
                      fnRenderTimestamp: m,
                    }),
                    (0, t.jsx)(q, { multiline: !p, children: f }),
                    !!p && (0, t.jsx)(tt, { children: p }),
                    a ? (0, t.jsx)(ot, { onHide: a }) : null,
                  ],
                }),
              });
        }
        function ie(n) {
          let {
            requestorName: e,
            requestorAvatarURL: i,
            fallbackLogo: o,
            data: s,
            location: m,
            icon: a,
            timestamp: r,
            fnRenderTimestamp: f,
            onHide: p,
          } = n;
          const h = et(m);
          let I = "";
          e && s.state == A.UXi
            ? (I = (0, d.we)(
                "#SteamNotifications_FriendInvite_Description_AwaitingResponse",
              ))
            : e && s.state == A._UC
              ? (I = (0, d.we)(
                  "#SteamNotifications_FriendInvite_Description_Friends",
                ))
              : e &&
                (I = (0, d.we)("#SteamNotifications_FriendInvite_Description"));
          const [T, D] = x.useState(!1),
            b = () => D(!0);
          let B = o;
          if (i && !T) {
            const rt = s.state == A._UC && m != A.PN1,
              dt = h ? K().ShortLogoDimensions : K().StandardLogoDimensions;
            B = (0, t.jsxs)(H.Z, {
              style: { position: "relative" },
              children: [
                rt && (0, t.jsx)(N.GSe, { className: K().FriendIndicator }),
                (0, t.jsx)("img", { className: dt, src: i, onError: b }),
              ],
            });
          }
          const j =
              e || (0, d.we)("#SteamNotifications_FriendInvite_Body_Generic"),
            R = !e;
          return h
            ? (0, t.jsx)(it, {
                ...n,
                logo: B,
                icon: n.icon,
                title: (0, d.we)("#Notification_FriendInvite_Title"),
                body: j,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  logo: B,
                  bLoading: R,
                  ...n,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: a,
                      title: (0, d.we)("#Notification_FriendInvite_Title"),
                      timestamp: r,
                      location: m,
                      fnRenderTimestamp: f,
                    }),
                    (0, t.jsx)(q, { multiline: !I, children: j }),
                    !!I && (0, t.jsx)(tt, { children: I }),
                    p ? (0, t.jsx)(ot, { onHide: p }) : null,
                  ],
                }),
              });
        }
        function oe(n) {
          let {
            itemState: e,
            fallbackLogo: i,
            data: o,
            location: s,
            icon: m,
            timestamp: a,
            appName: r,
            fnRenderTimestamp: f,
            nUnread: p,
            onHide: h,
          } = n;
          const [I, T] = x.useState(!1),
            D = () => T(!0),
            b = et(s);
          let B = i;
          if (e?.icon_url && !I) {
            let W = `${Pt.TS.COMMUNITY_CDN_URL}economy/image/${e.icon_url}`,
              pt = e.background_color ? "#" + e.background_color : null;
            const vt = b ? K().ShortLogoDimensions : K().StandardLogoDimensions;
            B = (0, t.jsx)(H.Z, {
              style: { position: "relative" },
              children: (0, t.jsx)("img", {
                className: vt,
                style: {
                  backgroundColor: pt ?? void 0,
                  justifyContent: "center",
                },
                src: W,
                onError: D,
              }),
            });
          }
          const j = o.appid == 753;
          let R = null;
          if (p !== void 0 && p > 1) {
            const W = p - 1;
            j
              ? (R = (0, d.we)("#Notification_Item_RollupMore_Steam", W))
              : r
                ? (R = (0, d.we)(
                    "#Notification_Item_RollupMore_GameName",
                    W,
                    r,
                  ))
                : (R = (0, d.we)("#Notification_Item_RollupMore", W));
          } else
            r &&
              (R = j ? r : (0, d.we)("#Notification_Item_Single_GameName", r));
          const rt = e?.name
              ? e.name
              : (0, d.we)("#Notification_Item_Body_Generic"),
            dt = !e;
          if (b) {
            let W = "";
            return (
              r
                ? (W =
                    p > 1
                      ? (0, d.we)("#Notification_Item_Body_Short_Plural", r)
                      : (0, d.we)("#Notification_Item_Body_Short", r))
                : (W = (0, d.we)("#Notification_Item_Body_Generic")),
              (0, t.jsx)(it, {
                ...n,
                logo: B,
                icon: n.icon,
                title: (0, d.we)("#Notification_ItemAnnouncement_Body"),
                body: W,
              })
            );
          }
          return (0, t.jsx)(at, {
            children: (0, t.jsxs)(C, {
              logo: B,
              bLoading: dt,
              ...n,
              children: [
                (0, t.jsx)(Y, {
                  icon: m,
                  title: (0, d.we)("#Notification_ItemAnnouncement_TitleLong"),
                  timestamp: a,
                  location: s,
                  fnRenderTimestamp: f,
                }),
                (0, t.jsx)(q, { multiline: !R, children: rt }),
                !!R && (0, t.jsx)(tt, { children: R }),
                h ? (0, t.jsx)(ot, { onHide: h }) : null,
              ],
            }),
          });
        }
        function ae(n) {
          let {
            fallbackLogo: e,
            data: i,
            location: o,
            icon: s,
            timestamp: m,
            fnRenderTimestamp: a,
            onHide: r,
          } = n;
          const f = et(o),
            p = i.appid ? { appid: i.appid } : void 0,
            { data: h } = (0, $.J$)(p),
            { data: I } = (0, $.lv)(p),
            T = Bt(I, e, f),
            D = p && (!h || !I);
          let b = "";
          return (
            i.state == wt.GO
              ? (b =
                  f && h?.name
                    ? (0, d.we)(
                        "#SteamNotification_AsyncGame_Action_Short",
                        h.name,
                      )
                    : (0, d.we)("#SteamNotification_AsyncGame_Action"))
              : i.state == wt.cf &&
                (b =
                  f && h?.name
                    ? (0, d.we)(
                        "#SteamNotification_AsyncGame_Done_Short",
                        h.name,
                      )
                    : (0, d.we)("#SteamNotification_AsyncGame_Done")),
            f
              ? (0, t.jsx)(it, {
                  ...n,
                  logo: T,
                  icon: n.icon,
                  title: (0, d.we)("#SteamNotification_AsyncGame_Title"),
                  body: b,
                })
              : (0, t.jsx)(at, {
                  children: (0, t.jsxs)(C, {
                    logo: T,
                    bLoading: D,
                    ...n,
                    children: [
                      (0, t.jsx)(Y, {
                        icon: s,
                        title: (0, d.we)("#SteamNotification_AsyncGame_Title"),
                        timestamp: m,
                        location: o,
                        fnRenderTimestamp: a,
                      }),
                      (0, t.jsx)(q, { children: b }),
                      (0, t.jsx)(tt, { children: h?.name }),
                      r ? (0, t.jsx)(ot, { onHide: r }) : null,
                    ],
                  }),
                })
          );
        }
        function Rt(n) {
          const {
              title: e,
              body: i,
              logoUrl: o,
              bDataLoading: s,
              icon: m,
              onHide: a,
              location: r,
              timestamp: f,
              fnRenderTimestamp: p,
              onActivate: h,
              personaStatus: I,
            } = n,
            T = et(r),
            D = T ? K().ShortLogoDimensions : K().StandardLogoDimensions,
            b = (0, t.jsx)(H.Z, {
              style: { position: "relative" },
              children: (0, t.jsx)("img", {
                className: D,
                style: { justifyContent: "center" },
                src: o,
              }),
            });
          return T
            ? (0, t.jsx)(it, {
                logo: b,
                icon: n.icon,
                title: e,
                body: i,
                onActivate: h,
                personaStatus: I,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  logo: b,
                  bLoading: s,
                  onActivate: h,
                  personaStatus: I,
                  ...n,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: m,
                      title: e,
                      timestamp: f,
                      location: r,
                      fnRenderTimestamp: p,
                    }),
                    (0, t.jsx)(q, { multiline: !0, children: i }),
                    a ? (0, t.jsx)(ot, { onHide: a }) : null,
                  ],
                }),
              });
        }
        function se(n) {
          let {
              currentUserSteamID: e,
              fallbackLogo: i,
              postedByDisplayName: o,
              postedByAvatarURL: s,
              ownerDisplayName: m,
              data: a,
              location: r,
              icon: f,
              timestamp: p,
              fnRenderTimestamp: h,
              nUnread: I,
              appName: T,
              onHide: D,
              commentTitle: b,
              commentBody: B,
            } = n,
            j = b;
          const R = et(r),
            [rt, dt] = x.useState(!1),
            W = () => dt(!0),
            [pt, vt] = (0, Zt.TB)(
              a.bclan_account ? a.owner_steam_id?.GetAccountID() : void 0,
            ),
            Tt = (0, y.hr)(a) ? o : null,
            Et = (0, y.T4)(a) ? m : null;
          a.comment_type == bt.Yd
            ? a.owner_steam_id?.ConvertTo64BitString() == e
              ? r == A.oYe && Tt
                ? (j = (0, d.we)(
                    "#SteamNotifications_Comment_Your_Profile_By",
                    Tt,
                  ))
                : (j = (0, d.we)("#SteamNotifications_Comment_Your_Profile"))
              : Et
                ? r == A.oYe && Tt
                  ? (j = (0, d.we)(
                      "#SteamNotifications_Comment_Player_Profile_By",
                      Tt,
                      Et,
                    ))
                  : (j = (0, d.we)(
                      "#SteamNotifications_Comment_Player_Profile",
                      Et,
                    ))
                : (j = (0, d.we)("#SteamNotifications_Comment_Profile"))
            : a.comment_type == bt.Dq && a.json_data?.file_type == A.pmA
              ? a.owner_steam_id?.ConvertTo64BitString() == e
                ? T
                  ? (j = (0, d.we)(
                      "#SteamNotifications_Comment_Your_Screenshot_Game",
                      T,
                    ))
                  : (j = (0, d.we)(
                      "#SteamNotifications_Comment_Your_Screenshot",
                    ))
                : T
                  ? (j = (0, d.we)(
                      "#SteamNotifications_Comment_Screenshot_Game",
                      T,
                    ))
                  : (j = (0, d.we)("#SteamNotifications_Comment_Screenshot"))
              : !j && a.json_data?.title && (j = a.json_data.title);
          let Mt = null;
          a.comment_type == bt.Bv && a.bis_forum && B
            ? (Mt = (0, t.jsx)(tt, {
                children: (0, d.we)(
                  "#SteamNotifications_Comment_NewDiscussion",
                  B,
                ),
              }))
            : (Mt = (0, t.jsxs)(tt, { children: ['"', B, '"'] }));
          let Lt = (0, d.we)("#SteamNotifications_Comment"),
            Wt = null;
          if (I !== void 0 && I > 1) {
            const ht = "+" + (I - 1);
            r == A.oYe
              ? (Wt = (0, t.jsx)("div", {
                  className: K().AllNotificationsCommentPlus,
                  children: ht,
                }))
              : (Lt = Lt + " " + ht);
          }
          let Ct = i;
          if (!rt) {
            const ht = R ? K().ShortLogoDimensions : K().StandardLogoDimensions;
            if (s && (0, y.n8)(a)) {
              const Pe = a.bhas_friend && r != A.PN1;
              Ct = (0, t.jsxs)("div", {
                style: { position: "relative" },
                children: [
                  Pe && (0, t.jsx)(N.GSe, { className: K().FriendIndicator }),
                  (0, t.jsx)("img", { className: ht, src: s, onError: W }),
                ],
              });
            } else
              vt?.avatar_medium_url &&
                (Ct = (0, t.jsx)("img", {
                  className: ht,
                  src: vt.avatar_medium_url,
                  onError: W,
                }));
          }
          return R
            ? (0, t.jsx)(it, {
                ...n,
                logo: Ct,
                icon: n.icon,
                title: Lt,
                body: j,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  logo: Ct,
                  ...n,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: f,
                      title: Lt,
                      timestamp: p,
                      location: r,
                      fnRenderTimestamp: h,
                    }),
                    (0, t.jsx)(q, { children: j }),
                    Mt,
                    Wt,
                    D ? (0, t.jsx)(ot, { onHide: D }) : null,
                  ],
                }),
              });
        }
        function re(n) {
          let {
            fallbackLogo: e,
            data: i,
            location: o,
            icon: s,
            timestamp: m,
            fnRenderTimestamp: a,
            onHide: r,
          } = n;
          const f = et(o),
            p = i.appid ? { appid: i.appid } : void 0,
            { data: h } = (0, $.J$)(p),
            { data: I } = (0, $.lv)(p),
            { data: T } = (0, $.Q_)(p),
            D = Bt(I, e, f),
            b = p && (!h || !I || !T);
          let B = "",
            j = null;
          if (h) {
            const R = h.name ?? "";
            (B = R),
              i.count == 1
                ? f
                  ? (B = (0, d.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single_Short",
                      (0, t.jsx)("span", { children: R }),
                      (0, t.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: T?.formatted_final_price,
                      }),
                    ))
                  : (j = (0, d.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single",
                      (0, t.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: T?.formatted_final_price,
                      }),
                    ))
                : i.count == 2
                  ? f
                    ? (B = (0, d.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
                        R,
                      ))
                    : (j = (0, d.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne",
                      ))
                  : f
                    ? (B = (0, d.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
                        R,
                        i.count - 1,
                      ))
                    : (j = (0, d.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany",
                        i.count - 1,
                      ));
          } else B = (0, d.we)("#SteamNotifications_Wishlist_Generic");
          return f
            ? (0, t.jsx)(it, {
                ...n,
                logo: D,
                icon: n.icon,
                title: (0, d.we)("#SteamNotifications_Wishlist"),
                body: B,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  logo: D,
                  bLoading: b,
                  ...n,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: s,
                      title: (0, d.we)("#SteamNotifications_Wishlist"),
                      timestamp: m,
                      location: o,
                      fnRenderTimestamp: a,
                    }),
                    (0, t.jsx)(q, { multiline: !j, children: B }),
                    !!j && (0, t.jsx)(tt, { children: j }),
                    r ? (0, t.jsx)(ot, { onHide: r }) : null,
                  ],
                }),
              });
        }
        function Bt(n, e, i = !1) {
          const [o, s] = x.useState(!1),
            m = () => s(!0);
          if (!n || o)
            return (0, t.jsx)(H.Z, {
              style: { position: "relative" },
              children: e,
            });
          const a = (0, $t.b0)(n, "community_icon");
          return i
            ? (0, t.jsx)(H.Z, {
                style: { position: "relative" },
                children: (0, t.jsx)("img", {
                  src: a,
                  className: K().ShortLogoDimensions,
                  onError: m,
                }),
              })
            : (0, t.jsxs)(H.Z, {
                style: { position: "relative" },
                children: [
                  (0, t.jsx)("img", {
                    className: (0, g.A)(K().WishlistBlurImage),
                    src: a,
                    onError: m,
                  }),
                  (0, t.jsx)("img", {
                    src: a,
                    onError: m,
                    style: {
                      position: "absolute",
                      left: 7,
                      top: 7,
                      height: 32,
                      width: 32,
                    },
                  }),
                ],
              });
        }
        function ot(n) {
          const e = (o) => {
              o.stopPropagation(), o.preventDefault();
            },
            i = (o) => {
              n.onHide(), o.stopPropagation(), o.preventDefault();
            };
          return (0, t.jsx)("div", {
            className: K().HideButton,
            onClick: i,
            onMouseDown: e,
            children: (0, t.jsx)(N.zHo, {}),
          });
        }
        function at(n) {
          return (0, t.jsx)("div", {
            className: K().SteamNotificationWrapper,
            children: n.children,
          });
        }
        var Gt = l(24544);
        let gt = null,
          Ut = !1;
        function ce() {
          return gt || (gt = new Gt.s({ BIsFriend: (0, Gt.Q)() })), gt;
        }
        function le() {
          const n = (0, z.KV)(),
            e = (0, z.rX)(),
            i = (0, E.q3)(() => ce().m_bInitialized);
          return (
            !i &&
              !Ut &&
              ((Ut = !0),
              gt.Init(Pt.iA.accountid, n, e).finally(() => (Ut = !1))),
            [i, gt]
          );
        }
        function de(n) {
          let e = null;
          return (
            (0, y.sR)(n)
              ? (e = _e)
              : (0, y.IC)(n)
                ? (e = ue)
                : Ot[n] && (e = Ot[n]),
            e
          );
        }
        function me(n) {
          const { rollup: e, uimode: i, location: o } = n,
            s = de(e.type);
          return s
            ? (0, t.jsx)(S.Ay, {
                controller: "notification",
                method: (0, A.fLp)(i),
                submethod: (0, A.ey3)(o),
                children: (0, t.jsx)(s, { ...n }),
              })
            : null;
        }
        function ue(n) {
          const {
              rollup: e,
              onNotificationClick: i,
              location: o,
              uimode: s,
              onHide: m,
            } = n,
            a = Nt(e.item.notification_type, e.item.body_data),
            r = (0, O.p$)(e.type)
              .replace("k_ESteamNotificationType_", "")
              ?.toLowerCase(),
            f = (0, u.aL)(a?.link ?? "#", r),
            p = () =>
              i(() => {
                a?.link && f && window.location.assign(f);
              }, e.item),
            h = (I) => i(() => {}, e.item, I);
          return (0, t.jsx)("a", {
            href: a?.link ? f : "#",
            onMouseDown: h,
            children: (0, t.jsx)(qt, {
              icon: Jt(e.type),
              onActivate: p,
              fallbackLogo: (0, t.jsx)(N.Qte, {}),
              location: o,
              eUIMode: s,
              data: a,
              timestamp: e.timestamp,
              nUnread: e.rgunread.length,
              bNewIndicator: (0, y.Rl)(e.item),
              onHide: m,
            }),
          });
        }
        function fe(n) {
          const {
              rollup: e,
              onNotificationClick: i,
              location: o,
              uimode: s,
              onHide: m,
            } = n,
            a = `${v.TS.COMMUNITY_BASE_URL}my/gamenotifications/`,
            r = () => i(() => window.location.assign(a), e.item),
            f = (h) => i(() => {}, e.item, h),
            p = X(e);
          return (0, t.jsx)("a", {
            href: a,
            onMouseDown: f,
            children: (0, t.jsx)(ae, {
              icon: (0, t.jsx)(N.Qte, {}),
              fallbackLogo: (0, t.jsx)(N.wC1, {}),
              onActivate: r,
              location: o,
              eUIMode: s,
              data: p,
              timestamp: e.timestamp,
              nUnread: e.rgunread.length,
              bNewIndicator: (0, y.Rl)(e.item),
              onHide: m,
            }),
          });
        }
        function pe(n) {
          const {
              steamid: e,
              url: i,
              strTitleLoc: o,
              strBodyLoc: s,
              rollup: m,
              onNotificationClick: a,
              location: r,
              uimode: f,
              onHide: p,
            } = n,
            { data: h } = (0, P.js)(e),
            I = (j) => a(() => {}, m.item, j),
            T = () => a(() => window.location.assign(i), m.item);
          if (!s) return null;
          const D = !h,
            b = (0, d.we)(o, h?.m_strPlayerName ?? ""),
            B = (0, d.we)(s, h?.m_strPlayerName ?? "");
          return (0, t.jsx)("a", {
            href: i,
            onMouseDown: I,
            children: (0, t.jsx)(Rt, {
              title: b,
              body: B,
              bDataLoading: D,
              logoUrl: h?.avatar_url_medium,
              icon: (0, t.jsx)(N.Qte, {}),
              onActivate: T,
              location: r,
              eUIMode: f,
              timestamp: m.timestamp,
              nUnread: m.rgunread.length,
              bNewIndicator: (0, y.Rl)(m.item),
              onHide: p,
            }),
          });
        }
        function _e(n) {
          const e = ft(n.rollup.type, n.rollup.item.body_data);
          if (!e) return null;
          const { strTitleLoc: i, strBodyLoc: o, strUrl: s, steamid: m } = e;
          return !m || !i || !o
            ? null
            : (0, t.jsx)(pe, {
                steamid: m,
                url: s,
                strTitleLoc: i,
                strBodyLoc: o,
                ...n,
              });
        }
        function ye(n) {
          const {
              rollup: e,
              onNotificationClick: i,
              location: o,
              uimode: s,
              onHide: m,
            } = n,
            a = (0, U.LH)(),
            r = X(e),
            f = `${v.TS.COMMUNITY_BASE_URL}profiles/${a}/tradeoffers`,
            p = () => i(() => window.location.assign(f), e.item),
            h = (D) => i(() => {}, e.item, D),
            I = ut.b.InitFromAccountID(r),
            { data: T } = (0, P.js)(I.GetAccountID());
          return (0, t.jsx)("a", {
            href: f,
            onMouseDown: h,
            children: (0, t.jsx)(te, {
              logo: (0, t.jsx)(N.Qte, {}),
              icon: (0, t.jsx)(N.h20, {}),
              onActivate: p,
              location: o,
              eUIMode: s,
              timestamp: e.timestamp,
              nUnread: e.rgunread.length,
              displayName: T?.m_strPlayerName,
              bNewIndicator: (0, y.Rl)(e.item),
              onHide: m,
            }),
          });
        }
        const ge = (n) => {
          const {
              rollup: e,
              onNotificationClick: i,
              location: o,
              uimode: s,
              onHide: m,
            } = n,
            a = `${v.TS.COMMUNITY_BASE_URL}my/tradehistory`,
            r = () => i(() => window.location.assign(a), e.item),
            f = (p) => i(() => {}, e.item, p);
          return (0, t.jsx)("a", {
            href: a,
            onMouseDown: f,
            children: (0, t.jsx)(ee, {
              logo: (0, t.jsx)(N.Qte, {}),
              icon: (0, t.jsx)(N.h20, {}),
              onActivate: r,
              location: o,
              eUIMode: s,
              timestamp: e.timestamp,
              nUnread: e.rgunread.length,
              bNewIndicator: (0, y.Rl)(e.item),
              onHide: m,
            }),
          });
        };
        function he(n) {
          const {
              rollup: e,
              onNotificationClick: i,
              location: o,
              uimode: s,
              onHide: m,
            } = n,
            a = (0, U.LH)(),
            r = `${v.TS.COMMUNITY_BASE_URL}profiles/${a}/inventory/#pending_gifts`,
            f = () => i(() => window.location.assign(r), e.item),
            p = (D) => i(() => {}, e.item, D),
            h = X(e),
            I = ut.b.InitFromAccountID(h),
            { data: T } = (0, P.js)(I.GetAccountID());
          return (0, t.jsx)("a", {
            href: r,
            onMouseDown: p,
            children: (0, t.jsx)(ne, {
              logo: (0, t.jsx)(N.Qte, {}),
              icon: (0, t.jsx)(N.pD, {}),
              onActivate: f,
              location: o,
              eUIMode: s,
              timestamp: e.timestamp,
              nUnread: e.rgunread.length,
              senderName: T?.m_strPlayerName,
              bNewIndicator: (0, y.Rl)(e.item),
              onHide: m,
            }),
          });
        }
        function Ne(n) {
          const {
              rollup: e,
              onNotificationClick: i,
              location: o,
              uimode: s,
              onHide: m,
            } = n,
            a = X(e),
            { data: r } = (0, P.js)(a.responder_steamid),
            f =
              a.package_id > 0
                ? { packageid: a.package_id }
                : { bundleid: a.bundle_id },
            { data: p } = (0, $.U2)(f),
            h = p ? `app/${p.appid}` : "",
            I = `${v.TS.STORE_BASE_URL}${h}`,
            T = () => i(() => window.location.assign(I), e.item),
            D = (R) => i(() => {}, e.item, R),
            b = !r || !p,
            B = (0, d.we)("#SteamNotifications_RequestedGameAddedTitle"),
            j = p
              ? (0, d.we)(
                  "#SteamNotifications_RequestedGameAddedBody",
                  p.name ?? "",
                )
              : "";
          return (0, t.jsx)("a", {
            href: I,
            onMouseDown: D,
            children: (0, t.jsx)(Rt, {
              title: B,
              body: j,
              bDataLoading: b,
              logoUrl: r?.avatar_url_medium,
              icon: (0, t.jsx)(N.Qte, {}),
              onActivate: T,
              location: o,
              eUIMode: s,
              timestamp: e.timestamp,
              nUnread: e.rgunread.length,
              bNewIndicator: (0, y.Rl)(e.item),
              onHide: m,
            }),
          });
        }
        function Ie(n) {
          const {
              rollup: e,
              onNotificationClick: i,
              location: o,
              uimode: s,
              onHide: m,
            } = n,
            a = (0, U.LH)(),
            r = (0, z.KV)(),
            f = (0, y.IL)(e.item, a, r),
            p = X(e),
            { data: h } = (0, $.J$)(p?.appid ? { appid: p.appid } : void 0),
            I = `${v.TS.COMMUNITY_BASE_URL}profiles/${a}/inventory`,
            T = () => i(() => window.location.assign(I), e.item),
            D = (b) => i(() => {}, e.item, b);
          return (0, t.jsx)("a", {
            href: I,
            onMouseDown: D,
            children: (0, t.jsx)(oe, {
              appName: h?.name,
              icon: (0, t.jsx)(N.rI_, {}),
              fallbackLogo: (0, t.jsx)(N.Qte, {}),
              onActivate: T,
              location: o,
              eUIMode: s,
              data: p,
              timestamp: e.timestamp,
              nUnread: e.rgunread.length,
              itemState: f,
              bNewIndicator: (0, y.Rl)(e.item),
              onHide: m,
            }),
          });
        }
        function Se(n) {
          const {
              rollup: e,
              onNotificationClick: i,
              location: o,
              uimode: s,
              onHide: m,
            } = n,
            a = (0, U.LH)(),
            r = `${v.TS.COMMUNITY_BASE_URL}profiles/${a}/friends/pending`,
            f = () => i(() => window.location.assign(r), e.item),
            p = (T) => i(() => {}, e.item, T),
            h = X(e),
            { data: I } = (0, P.js)(h.requestorID);
          return (0, t.jsx)("a", {
            href: r,
            onMouseDown: p,
            children: (0, t.jsx)(ie, {
              fallbackLogo: (0, t.jsx)(N.Gv$, {}),
              icon: (0, t.jsx)(N.sdo, {}),
              onActivate: f,
              location: o,
              eUIMode: s,
              data: h,
              timestamp: e.timestamp,
              nUnread: e.rgunread.length,
              requestorAvatarURL: I?.avatar_url_medium,
              requestorName: I?.m_strPlayerName,
              bNewIndicator: (0, y.Rl)(e.item),
              onHide: m,
            }),
          });
        }
        function Ae(n) {
          const {
              rollup: e,
              onNotificationClick: i,
              location: o,
              uimode: s,
              onHide: m,
            } = n,
            a = X(e),
            r = (0, U.LH)(),
            f = v.TS.COMMUNITY_BASE_URL + e.url,
            p = () => i(() => window.location.assign(f), e.item),
            h = (pt) => {
              i(() => {}, e.item, pt);
            },
            I = (0, y.iO)(a) ? a?.account_steam_id?.GetAccountID() : null,
            { data: T } = (0, P.js)(I),
            D = (0, y.OT)(a) ? a?.owner_steam_id?.GetAccountID() : null,
            { data: b } = (0, P.js)(D),
            B = a.json_data?.app_id ? { appid: a.json_data?.app_id } : void 0,
            { data: j } = (0, $.J$)(B),
            [R, rt] = le(),
            dt = R
              ? rt.FilterText(a.account_steam_id.GetAccountID(), a.title)
              : "",
            W = R
              ? rt.FilterText(a.account_steam_id.GetAccountID(), a.comment)
              : "";
          return (0, t.jsx)("a", {
            href: f,
            onMouseDown: h,
            children: (0, t.jsx)(se, {
              fallbackLogo: (0, t.jsx)(N.Qte, {}),
              icon: (0, t.jsx)(N.MwB, {}),
              onActivate: p,
              location: o,
              currentUserSteamID: r,
              eUIMode: s,
              data: a,
              timestamp: e.timestamp,
              nUnread: e.rgunread.length,
              postedByAvatarURL: T?.avatar_url_medium,
              postedByDisplayName: T?.m_strPlayerName,
              ownerDisplayName: b?.m_strPlayerName,
              bNewIndicator: (0, y.Rl)(e.item),
              appName: j?.name,
              onHide: m,
              commentTitle: dt,
              commentBody: W,
              bLoading: !R,
            }),
          });
        }
        function ve(n) {
          const {
              rollup: e,
              onNotificationClick: i,
              location: o,
              uimode: s,
              onHide: m,
            } = n,
            a = X(e),
            { data: r } = (0, $.J$)({ appid: a.appid }),
            [f, p] = (0, x.useState)(""),
            h = (0, U.LH)();
          (0, x.useEffect)(() => {
            if (a.count > 1 && a.appids?.length)
              return p(
                v.TS.STORE_BASE_URL +
                  `wishlist/profiles/${h}/?wng=${a.appids.toString()}#sort=discount`,
              );
            if (r) return p(v.TS.STORE_BASE_URL + r.store_url_path);
            const D = a.appid ? `?appid=${a.appid}` : "";
            p(
              v.TS.STORE_BASE_URL + `wishlist/profiles/${h}/${D}#sort=discount`,
            );
          }, [a, r, h]);
          const I = () => i(() => window.location.assign(f), e.item),
            T = (D) => i(() => {}, e.item, D);
          return (0, t.jsx)("a", {
            href: f,
            onMouseDown: T,
            children: (0, t.jsx)(re, {
              fallbackLogo: (0, t.jsx)(N.Qte, {}),
              icon: (0, t.jsx)(N.ilR, {}),
              onActivate: I,
              location: o,
              data: a,
              timestamp: e.timestamp,
              nUnread: e.rgunread.length,
              eUIMode: s,
              bNewIndicator: (0, y.Rl)(e.item),
              onHide: m,
            }),
          });
        }
        function Te(n) {
          const { url: e, count: i, icon: o, strLocToken: s, eFeature: m } = n,
            a = (0, G.Hw)(m);
          return !i || a
            ? null
            : (0, t.jsx)("a", {
                href: e,
                className: yt().WebPinnedNotification,
                children: (0, t.jsx)(c, {
                  icon: (0, t.jsx)(o, {}),
                  count: i,
                  onActivate: () => window.location.assign(e),
                  strLocToken: s,
                  eUIMode: A.yrU,
                  visible: !0,
                }),
              });
        }
        const Ot = {
          [O.Vv.v_]: Ae,
          [O.Vv.XJ]: ve,
          [O.Vv.pZ]: Se,
          [O.Vv.hW]: Ie,
          [O.Vv.K]: he,
          [O.Vv.an]: ye,
          [O.Vv.Y9]: fe,
          [O.Vv.YE]: Ne,
          [O.Vv.mr]: ge,
        };
        var Le = l(81944);
        const st = new y.cE(),
          Ft = (0, Z.Nr)(function (e) {
            const { bResponsiveHeader: i, notifications: o } = e;
            x.useEffect(() => {
              o && !st.m_bLoaded && st.ProcessNewNotificationPayload(o);
            }, [o]);
            const s = (0, z.KV)();
            (0, x.useEffect)(() => {
              st.setTransport(s),
                (window.RefreshSteamNotifications = () => we(s));
            }, [s]);
            const m = At();
            return i
              ? (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(Ht, {}), (0, t.jsx)(je, {})],
                })
              : (0, t.jsx)(Ce, { nTotalUnviewed: m.nUnviewed });
          });
        function At() {
          return (0, E.q3)(() => ({
            notifications: st.m_rgNotificationRollups,
            summary: st.m_summary,
            loaded: st.m_bLoaded,
            nUnviewed: st.m_nUnviewed,
          }));
        }
        function kt() {
          const n = At(),
            e = (0, U.LH)(),
            { data: i } = (0, G.S0)(e),
            o = (0, G.BM)(),
            s = i?.settings;
          return n.notifications.filter(
            (m) => !(0, y.jb)(m.type, s, o) && !(0, y.XT)(m.item),
          );
        }
        function Ce(n) {
          const { nTotalUnviewed: e } = n,
            i = x.useRef(null),
            o = kt(),
            [s, m] = x.useState(w().AnimateBell);
          x.useEffect(() => {
            i.current ||
              ((i.current = (0, k.lX)(
                (0, t.jsx)(xe, { popupRef: i }),
                document.getElementById("green_envelope_menu_root"),
                {
                  bPreferPopLeft: !0,
                  bOverlapHorizontal: !0,
                  strClassName: "GreenEnvelopeMenu",
                },
              )),
              i.current.Hide());
            const f = document.getElementById("header_notification_link");
            f && (f.style.cssText = "background-color: rgba(0,0,0,0)"),
              window.setTimeout(() => m(null), 2e3);
          }, []);
          const a = () => {
              i.current?.visible ||
                (i.current?.Show(),
                o.findIndex((p) => !p.item.viewed) != -1 &&
                  st.MarkAllItemsViewed());
            },
            r = x.useCallback(
              (f) => {
                !f && i.current?.visible && i.current.Hide();
              },
              [i],
            );
          return (0, t.jsx)(Le.J, {
            trigger: "repeated",
            onVisibilityChange: r,
            children: (0, t.jsx)("button", {
              onClick: a,
              id: "green_envelope_menu_root",
              className: (0, g.A)(
                w().NotificationsButton,
                e ? w().Green : w().Grey,
                s,
              ),
              children: (0, t.jsx)(M.$0s, {
                className: w().SVGNotifications,
                "aria-label": (0, d.we)("#NotificationsMenu_Title"),
              }),
            }),
          });
        }
        const xe = (n) => {
            const { popupRef: e } = n,
              i = x.useRef(null),
              [o, s] = x.useState(!1);
            x.useEffect(() => {
              s(
                i.current != null &&
                  i.current?.scrollHeight > i.current?.clientHeight,
              );
            }, [i.current?.scrollHeight, o]);
            const m = o ? void 0 : w().MenuScrollbarHidden;
            return (0, t.jsxs)("div", {
              className: w().NotificationsMenu,
              onClick: () => e?.current?.Hide(),
              children: [
                (0, t.jsx)(De, {}),
                (0, t.jsxs)("div", {
                  className: (0, g.A)(w().NotificationsMenuScrollable, m),
                  ref: i,
                  children: [
                    (0, t.jsx)(Ht, {}),
                    (0, t.jsx)(Be, {}),
                    (0, t.jsx)(Ee, {}),
                  ],
                }),
              ],
            });
          },
          De = () => {
            const n = `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/notifications`;
            return (0, t.jsxs)("div", {
              className: (0, g.A)(w().NotificationHeader),
              children: [
                (0, t.jsx)("div", {
                  className: w().AllNotificationsTitle,
                  children: (0, d.we)("#NotificationsMenu_Title"),
                }),
                (0, t.jsx)("a", {
                  href: n,
                  children: (0, t.jsx)("div", {
                    className: w().AllNotificationsButton,
                    children: (0, d.we)("#NotificationsMenu_ViewAll"),
                  }),
                }),
              ],
            });
          },
          je = () => {
            const n = `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/notifications`;
            return (0, t.jsx)("div", {
              className: (0, g.A)(
                w().NotificationHeader,
                w().ResponsiveViewAll,
              ),
              children: (0, t.jsx)("a", {
                href: n,
                children: (0, t.jsx)("div", {
                  className: w().AllNotificationsButton,
                  children: (0, d.we)("#NotificationsMenu_ViewAll"),
                }),
              }),
            });
          };
        function be(n, e, i) {
          !e.read &&
            (!i || i.button == 0 || i.button == 1) &&
            e.notification_id &&
            st.MarkItemRead(e.notification_id),
            n();
        }
        function Be() {
          const n = kt();
          return n.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: w().NotificationsMenuEntriesContainer,
                children: n.map((e, i) =>
                  (0, t.jsx)(
                    me,
                    {
                      rollup: e,
                      onNotificationClick: be,
                      uimode: A.yrU,
                      location: A.B3I,
                    },
                    i,
                  ),
                ),
              });
        }
        const Ue = [
          {
            fnUrl: () =>
              `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/inventory/#pending_gifts`,
            countItem: "pending_gifts",
            icon: N.pD,
            strLocToken: "#Notification_NewGiftsPinned_Body",
            feature: F.ip,
          },
          {
            fnUrl: () =>
              `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/home/invites`,
            countItem: "pending_invites",
            icon: N.sdo,
            strLocToken: "#Notification_FriendInvitePinned_Body",
            feature: F.M,
          },
          {
            fnUrl: () =>
              `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/notifications#comments`,
            countItem: "comments",
            icon: N.MwB,
            strLocToken: "#Notification_NewCommentPinned_Body",
            feature: F.qR,
          },
          {
            fnUrl: () =>
              `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/inventory`,
            countItem: "inventory_items",
            icon: N.rI_,
            strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
            feature: F.WJ,
          },
          {
            fnUrl: () =>
              `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/tradeoffers`,
            countItem: "trade_offers",
            icon: N.h20,
            strLocToken: "#Notification_NewTradeOffersPinned_Body",
            feature: F.ut,
          },
          {
            fnUrl: () =>
              `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/gamenotifications`,
            countItem: "async_game_updates",
            icon: N.wC1,
            strLocToken: "#Notification_NewAsyncGamePinned_Body",
          },
          {
            fnUrl: () => `${v.TS.COMMUNITY_BASE_URL}my/moderatormessages`,
            countItem: "moderator_messages",
            icon: M.hJ4,
            strLocToken: "#Notification_NewModeratorMessagePinned_Body",
            feature: F.qR,
          },
          {
            fnUrl: () => `${v.TS.HELP_BASE_URL}wizard/HelpRequests`,
            countItem: "help_request_replies",
            icon: N.Cv4,
            strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
          },
          {
            fnUrl: () =>
              `${v.TS.STORE_BASE_URL}account/familymanagement/join?ft=${v.iA.steamid}`,
            countItem: "family_invites",
            icon: N.Qte,
            strLocToken: "#Notification_FamilyInvitePinned_Body",
          },
        ];
        function Ht() {
          const n = At();
          return (0, t.jsx)(t.Fragment, {
            children: Ue.map((e) =>
              (0, t.jsx)(
                Te,
                {
                  url: e.fnUrl(),
                  count: n.summary[e.countItem],
                  icon: e.icon,
                  strLocToken: e.strLocToken,
                  eFeature: e.feature,
                },
                e.countItem,
              ),
            ),
          });
        }
        function Ee() {
          return (0, t.jsxs)("div", {
            className: w().EmptyNotificationsCtn,
            children: [
              (0, t.jsx)("div", {
                className: w().EmptyNotificationsTitle,
                children: (0, d.we)("#NotificationsList_EmptyTitle_New"),
              }),
              (0, t.jsx)("div", {
                className: w().EmptyNotificationsBody,
                children: (0, d.we)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        const Me = Ft;
        async function we(n) {
          let e = null;
          try {
            e = await (0, y.tM)(
              n,
              v.iA.steamid,
              (0, A.sfN)(v.TS.LANGUAGE),
              void 0,
              !1,
              !1,
            );
          } catch {}
          e && st.ProcessNewNotificationPayload(e);
        }
      },
      29553: (V) => {
        V.exports = {
          NotificationsMenu: "_3EPagkYPxulGbe-5invUhK",
          NotificationsMenuEntriesContainer: "m0H4PhlsBcw0NzlQje7q",
          NotificationsMenuScrollable: "_2hgxpK_sWS7mDF66uPetpF",
          MenuScrollbarHidden: "_2Qeur5RWXHnW-xneBJUfH-",
          NotificationHeader: "_1Uh_y1atXoMOUxGyUQK8vC",
          ResponsiveViewAll: "_2q-LyEsEZpxFZBbqO07xgp",
          AllNotificationsTitle: "-Dpw5WXg2gjckpFAkP_lg",
          AllNotificationsButton: "_1OH7OiFxIJo5Y7Z4Z6U6iO",
          NotificationsButton: "_1jW5_Ycv6jGKu28A1OSIQK",
          SVGNotifications: "_13fwmIK8Ajo0qndUS5zb7E",
          Grey: "_34A9kjlnmgfUWSmr16VjXE",
          Disabled: "_3h1sV2qrp20U37VwC47pM2",
          Green: "_2Hpe0_DGY0TBz45Lg0zUr9",
          AnimateBell: "_34o7mvTYzowbNAllqYUQuJ",
          NotificationBellAnimation: "_3W6ngOzFfcJJpftaQ5t9bk",
          NotificationBellUvula: "xpAr9gP3YAkKomrGUivf8",
          EmptyNotificationsCtn: "_2a4xLIvDI3rmLxVfLMQFTz",
          EmptyNotificationsTitle: "_2SIA4NMfduV_HWDptv6cAK",
          EmptyNotificationsBody: "EpEznkfiKxcqI9p52OmRx",
        };
      },
      97786: (V) => {
        V.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_2yhmcyeUOyM8lt__Skbk9O",
          "ItemFocusAnim-darkerGrey": "_3mfiE_PUWOPy8UTDJlYI0u",
          Timestamp: "_26rvbcKFCQjLKx-pD7BhvY",
          StandardTemplate: "_3-H47wPl1Ng3lh7xGZOPIg",
          PinnedTemplate: "_3V6804k2yutEiF6IWg8axH",
          StandardLogoDimensions: "_1KIwOtwkYQUtRoPyxlh3G-",
          Content: "_2axKS7MCnzMBRXRcYLn2Is",
          Header: "_1WuK_iZ6ARkIiptCX5qd7G",
          Icon: "_2F0wqsu2mqsHxBSJcu1sPJ",
          Title: "_18PwvOcpWfW3M8j2-bEPPJ",
          StandardNotificationDescription: "_3fUrGm-WHq3qxIpSqRZDgc",
          StandardNotificationSubText: "_2yUEtF_eCucoxdu85zlOCp",
          Multiline: "_2sQoMK-0onl8u8WHHUnDdw",
          Count: "_2zZKXEnYcEZsL5OGHzkKv2",
          PinnedBody: "_1nziGc41LlyGfDufK0iQos",
          AllNotificationsTemplate: "_1xvIUtLkTrdEk2Ob1MqFcQ",
          StandardTemplateDesktop: "_1GcAugE5c4nbBUwrA4_xwS",
          DesktopToastTemplate: "_3ENh9LzRnZgfTyfxp_J2rr",
          PinnedTemplateWeb: "_2Mo87NUHyjLkjvKcPQxPRu",
          PinnedTemplateDesktop: "j9jQA6QaLJ23lyfuo9nY6",
          AppLogo: "_3mWpfn1_PDwd1gOm26RhMl",
          AppLogoBackgroundImage: "_2FcBwxd4lGOEMTXCnmxczK",
          MarkedRead: "_15_E6efeCt2NTqCgUKav1W",
          markReadBackground: "_1paPuAH6aCXNKdXvf5jv1d",
          Unread: "_1YAQHDHv4hsPaauccvAFtn",
          PlayerNickName: "_2n0ipWJFroZdQVwkXHqdJL",
          FullName: "_2EWNcLrlrl9Gx-yZH039tH",
          IngameTitle: "_3uSbhtY3vHtdj-3tpua_Pb",
          OnlineTitle: "_3bqD-bBMgrGwLsBY2L1gSL",
          GroupMessageTitle: "_3C8GdaaS-zmchnCHHiHG6n",
          GroupMessageUserName: "_2hs2ZR_wYkRHWdtlr681Z6",
          GroupMessageBody: "_3AbCrY-d5NpL5E5DUfgdQ8",
          GroupMessageIcon: "_3vDmqJBvNPH1D_p-Da_djj",
          Body: "_2jpxEWvo06efD6-NR1cplA",
          FriendInGameAppColor: "_2XSwzNWGiJvW0zTgqT0DUI",
          WishlistBlurImage: "_2HBcq6niThHlNihI9xiBSm",
          AvatarStatus: "_1mMC7Hv71CzO0jfm_66W4K",
          IncomingCallToast: "_3wNcsYlo3lQ-yamJPMco8F",
          ShortLogoDimensions: "_1-CP3jNFd252Y0uV_Ua0VE",
          LoadingTemplate: "_2mFLv5Puw95n9oUFp9OMAs",
          Hide: "_1W2rIElq16YPQi4DqoqPLM",
          ShimmerLogo: "_3QrlTtpidzjKPhrvgxFXbI",
          ShimmerBody: "_1ugrCy0x7fRJ7TyoURzzTa",
          ShimmerHeader: "_1Tp3oOeqWARWDsQDI3owRD",
          loading: "_3CI8AFu67GMoINumH6Yvax",
          BottomBar: "_2FMNpalUV1wDdi-cywGIMN",
          NewIndicator: "-B93GaGXJf0lPTNh66m4i",
          ShortTemplate: "fntOoeLPSTpmyXGGmgf99",
          TwoLine: "P1FhGdWv2NCXZXWsaKqqY",
          FullWidth: "_6EcDVXFHtdirTkETQjKOK",
          BackgroundAnimation: "_3w9sEc9GApj44Kg099SX99",
          "ItemFocusAnim-darkerGrey-nocolor": "_3zMKq0Ov9QZXkvzuZaEgKn",
          "ItemFocusAnim-darkGreySettings": "qadlYXxqgL7iZI-3WagQW",
          "ItemFocusAnim-darkGrey": "_1bS3_eEfJQL1uvh9ueXwHc",
          "ItemFocusAnim-grey": "K14jHOeux9t-cKLHsLZ_R",
          "ItemFocusAnim-translucent-white-10": "_14krbCetggqySSjN1tprjy",
          "ItemFocusAnim-translucent-white-20": "_3aWvV_8F4oUsZSPZ67nkhH",
          "ItemFocusAnimBorder-darkGrey": "_3o2RzV2UyrY6P95PvLN1XB",
          "ItemFocusAnim-green": "_3UOE3rRpe9MNf7xTX3P_FD",
          focusAnimation: "_3CquyV6pQpz_ZeEYyhu-6r",
          hoverAnimation: "X3tjvkOeBNndhakzDz7bk",
        };
      },
      93761: (V) => {
        V.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_30fVm4Rsel-4nUKEiPJgz9",
          "ItemFocusAnim-darkerGrey": "_3z4hV832fi8W9gRRPhmC1V",
          Timestamp: "_7XKFnSNjW_tHfyxaezoD3",
          StandardTemplate: "_2h6KD6p6y4vIgO2Toxx-_K",
          PinnedTemplate: "_3oKFhPrh1lbp-WtA72Q2Yi",
          StandardLogoDimensions: "_1VRx9qVxigUC4qeM0NWNMR",
          Content: "_1SQjN025UZ0z_8AkWHCsGd",
          Header: "_3u0Sb5gUTscs0TQlKpA7WZ",
          Icon: "_2auM-VHPU-KKomAWyuWrSV",
          Title: "_2MGSmn9lIFnmLVIX49POSx",
          StandardNotificationDescription: "_26v9mHAi56x63OwY-jxett",
          StandardNotificationSubText: "_3hEeummFKRey8l5VXxZwxz",
          Multiline: "_21DVSDVmPUgGXuTkI2HqbO",
          Count: "CRYjulQaQOjokS7b_8cOH",
          PinnedBody: "h-lNlCUnCRbIcn38-Oqaw",
          AllNotificationsTemplate: "QFW0BtI4l77AFmv1xLAkx",
          StandardTemplateDesktop: "_3B8wRA4H7e_oSksYNqpSPv",
          DesktopToastTemplate: "_2NdiftmP-B3C4LPWnNGTCB",
          PinnedTemplateWeb: "_25gii5r23MmAqXvLZj24tK",
          PinnedTemplateDesktop: "_3k90ug209sE23xAMqcM74s",
          AppLogo: "_3p74fAyjLzNltNbJUf55kk",
          AppLogoBackgroundImage: "_2qpzt_PffGJwN3Vm2bkKQI",
          MarkedRead: "FMwg5OFGT6NP3h3EW89IP",
          markReadBackground: "_3eZECZ7BxfGeq4yfoKHDal",
          Unread: "_1B1XTNsfuwOaDPAkkr8M42",
          PlayerNickName: "_1YqYJ2yaHfODWbIB0abgzQ",
          FullName: "fozLrCNjCbPGiVKYi2L_M",
          IngameTitle: "rN6p14MiFEoCZvdjnfpgQ",
          OnlineTitle: "_35uWYHT2zJoSv9PE_euqxo",
          GroupMessageTitle: "_33qpBDHTkkQ4TCFB4gPGk_",
          GroupMessageUserName: "_3m94SADycX0JIk8urdZQ2X",
          GroupMessageBody: "_1XTFkmspXcukxWSFz5Fn61",
          GroupMessageIcon: "brsvX3XkZwkemQ_HM3JOP",
          Body: "_3JT9UI68R_-oZc63_NRIcA",
          FriendInGameAppColor: "_10165iFPxrqzt0kfV00tbu",
          WishlistBlurImage: "_3QLXE6SzCKiwEgK5iORZPA",
          AvatarStatus: "_1iutOH026zK2dbpsMFDmMm",
          IncomingCallToast: "j2oDsM6xV2rFx-UrisfYh",
          ShortLogoDimensions: "BNKAIWal-7E00ymauRaHg",
          LoadingTemplate: "Lakql1yamweHbP1OPuahF",
          Hide: "WnLkF0HwOQr2BIjlAlrjF",
          ShimmerLogo: "_2macs5lWMPN5NfDpGE3Iyh",
          ShimmerBody: "_3Ivl8dbxH6D6LwaSLTNTLe",
          ShimmerHeader: "_2a2loheX4ZKGZCGNEdAT3h",
          loading: "_2PdZZCNo176UV7FcPPdqTt",
          BottomBar: "_3yiWpBXwEmDLlaIupVXjUt",
          NewIndicator: "_1pIhbqWsrCVPaGGYc6fT-H",
          BackgroundAnimation: "_2THWJm_DP4_8_21tEsXSSj",
          "ItemFocusAnim-darkerGrey-nocolor": "_3TDFCqwgSFsXL90HH5PmyQ",
          "ItemFocusAnim-darkGreySettings": "_2V49icFFKCzM2imCbWVQKz",
          "ItemFocusAnim-darkGrey": "_22M7t0tCHSgmIcx2rwkyDn",
          "ItemFocusAnim-grey": "lhtmiPnDLy_PH3nWN5N8F",
          "ItemFocusAnim-translucent-white-10": "xPu5sAUAb9KZcZojHZeok",
          "ItemFocusAnim-translucent-white-20": "_35HEPLHufn9k-5gTKvZYrO",
          "ItemFocusAnimBorder-darkGrey": "TQ99CK6pDp4hhQZWjAgGz",
          "ItemFocusAnim-green": "Rxe4URLYwNKRWJ2UaiQq2",
          focusAnimation: "_1vcir9Vcuml6I0DWyCei3i",
          hoverAnimation: "_3dGxvxYZPEwyYDQfin8FOd",
        };
      },
      92012: (V) => {
        V.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_1lqXpJpRlYvyM2fBx6beHd",
          "ItemFocusAnim-darkerGrey": "_3WRewosNPP9V6g7O3hWH5k",
          Timestamp: "w1Bf_xO8scHETzsfr2HtM",
          StandardTemplate: "_1k275cE1gk-jpZE5r-37zl",
          PinnedTemplate: "_4egmnB1wTrDll5Mc_eal8",
          StandardLogoDimensions: "_3n8vALReUk851YHiEiWEfQ",
          Content: "_3c_vhR2WnZLHuyVP2m4UO2",
          Header: "_1186NyOXeTBoB-vvWlJq1I",
          Icon: "_1piyUE09t3QXktcD3FrCwJ",
          Title: "_2x6qMHeQndH78e6sL2XHk_",
          StandardNotificationDescription: "Wh50moO-nKvfE3l4Buav",
          StandardNotificationSubText: "_2T5BxMT87QHfYWXDHFzpT1",
          Multiline: "_2fLmG6Oxk7tiZGLfH8dwXG",
          Count: "sdjVIgKSOKqyi7O2VDy70",
          PinnedBody: "_3OCMnBpXVpdYv5isBLVdJK",
          AllNotificationsTemplate: "d9RJTj9G8qU-U9-he2cQx",
          StandardTemplateDesktop: "_2uW9K6fqc6jZX1XBjnLjw",
          DesktopToastTemplate: "QbSr4hMpMfp0Qtsg4qOh5",
          PinnedTemplateWeb: "_3BvcYKoq-n7GgNwbfFgRAc",
          PinnedTemplateDesktop: "alS2LW_qAwNkYk_GPUC_3",
          AppLogo: "CA_EGBMvnnGy5ib6McPk1",
          AppLogoBackgroundImage: "_1WuzAPck-kGxa4mMIJvAzm",
          MarkedRead: "Wu9rtfDDzG6xfABpqX6oN",
          markReadBackground: "ULHzVL1tuahqUcVisVW-P",
          Unread: "_2kLHZTRgRl0POZfXPcfxks",
          PlayerNickName: "_2YpLUGZ7uC8ZZn67r0WFW_",
          FullName: "_31kBipdYxJf7OOfdvXt0_h",
          IngameTitle: "uoMiFtc9c1Qj-4N-yFmVY",
          OnlineTitle: "_1HmXUbyHRzGqMtpIXrI9-T",
          GroupMessageTitle: "_2sd1s2w2m26_3gQi1EUTR_",
          GroupMessageUserName: "gAoOCl1gHHigL5slBv_yA",
          GroupMessageBody: "_8o4Xz7dGPPQqf36w2HN--",
          GroupMessageIcon: "_15V41jl8st_uQsDMGCqnBx",
          Body: "_1bPTPIVs6QoX2gWvrhM6J-",
          FriendInGameAppColor: "_3xh1N-yvA3u7rLrq-DYZ1U",
          WishlistBlurImage: "_1GTWEgiW95vRIhUWfk6omo",
          AvatarStatus: "_2wKwJWdgy12ZO1tSjI9lXY",
          IncomingCallToast: "YukY0Anz5NHyFELGf9mPn",
          ShortLogoDimensions: "_1DaCc7OUCLHfc6VrQ3OIne",
          LoadingTemplate: "_5iNL0HazAvED5sWE9InJy",
          Hide: "_40XuJsiNG2Ls-sTWqrXG8",
          ShimmerLogo: "_1vzYeDqT7Eiy-LKfLm42sI",
          ShimmerBody: "_12dqPPvVDehwCa8i2oM-eA",
          ShimmerHeader: "_2ZzsgKvsaWmnKQRz0W83GA",
          loading: "_2qr7PO4jvslSCsJbTRFpwd",
          BottomBar: "IUPLZJhHdBex9tQTgC6Ug",
          NewIndicator: "_38yM72K6RxKmOhKZtInP2x",
          AllNotificationsCommentPlus: "WbA7y77Ujam9JOnYuGsMj",
          FriendIndicator: "_2Hphxk564S5yQHog-MFXfN",
          HideButton: "_3M-7E5Nj8iNX_jL5pAQDy_",
          SteamNotificationWrapper: "UmtNgXD92RoDeYjxKEskk",
          BackgroundAnimation: "CHduhRYQLY29chQ5oLbsR",
          "ItemFocusAnim-darkerGrey-nocolor": "_3bOlzQnTJZnV9rTU3NSxJh",
          "ItemFocusAnim-darkGreySettings": "_1bdnqXVo31tiUrXoxNB3wW",
          "ItemFocusAnim-darkGrey": "uOdBxiMFNvmWe8MWKL2vT",
          "ItemFocusAnim-grey": "_9s1knb2MNj9uD9M1SCh2u",
          "ItemFocusAnim-translucent-white-10": "_1YVG7HtpgQ26Yx-8ZWKCBi",
          "ItemFocusAnim-translucent-white-20": "_3AcQtXPws6yWb9XuDRcDvV",
          "ItemFocusAnimBorder-darkGrey": "_2pMCkkW6W_xYaepnqR1QDg",
          "ItemFocusAnim-green": "_8sFcRF04vIhk1ou7_oMSI",
          focusAnimation: "_1etMKTqAtC0g5-7msByztO",
          hoverAnimation: "_3iNzRmuVGoWKgoa3u41Fdz",
        };
      },
      87910: (V) => {
        V.exports = { WebPinnedNotification: "_34nLZDNirxRHssbsjB_dJf" };
      },
    },
  ]);
})();
