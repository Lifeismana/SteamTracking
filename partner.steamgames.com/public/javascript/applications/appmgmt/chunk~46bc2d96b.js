/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [97022],
    {
      76115: (Pt, wt, m) => {
        "use strict";
        m.d(wt, {
          $e: () => e,
          Cz: () => U,
          G2: () => F,
          Lg: () => d,
          NX: () => x,
          j1: () => p,
          l5: () => c,
        });
        const U = "1",
          p = "SaleEvent_DurationDiscount_Tooltip",
          F = "discount",
          x = "proximity",
          d = "unique",
          c = "",
          e = "on";
      },
      26765: (Pt, wt, m) => {
        "use strict";
        m.d(wt, {
          BG: () => qt,
          E7: () => A,
          cR: () => k,
          p6: () => _,
          sU: () => J,
          tW: () => G,
          ur: () => it,
          vV: () => ct,
          wn: () => $,
          yB: () => h,
        });
        var U = m(41735),
          p = m.n(U),
          F = m(90626),
          x = m(72604),
          d = m(7582),
          c = m(34592),
          e = m(27066),
          E = m(8323),
          Y = m(54963),
          N = m(3166),
          K = m(76115),
          I = Object.defineProperty,
          W = Object.getOwnPropertyDescriptor,
          V = (H, u, j, f) => {
            for (
              var b = f > 1 ? void 0 : f ? W(u, j) : u, L = H.length - 1, g;
              L >= 0;
              L--
            )
              (g = H[L]) && (b = (f ? g(u, j, b) : g(b)) || b);
            return f && b && I(u, j, b), b;
          };
        const M = class oe {
          m_mapDiscountEvents = new Map();
          m_discountEventsListCallback = new E.lu();
          m_mapDiscountEventCallback = new Map();
          m_mapAppList = new Map();
          m_mapAppListCallback = new Map();
          m_bLoadedViaInitOrFullLoad = !1;
          m_bLoadEventsRequestInFlight = !1;
          m_mapInflightDiscountLoadRequest = new Map();
          m_mapInflightDiscountAndAppListLoadRequest = new Map();
          GetFutureDiscountEvents() {
            const u = (0, d.sB)();
            return Array.from(oe.Get().m_mapDiscountEvents.values()).filter(
              (j) => j.end_date > u,
            );
          }
          GetAllDiscountEvents() {
            return Array.from(oe.Get().m_mapDiscountEvents.values());
          }
          GetDiscountEventListCallback() {
            return this.m_discountEventsListCallback;
          }
          BLoadedViaInitOrFullLoad() {
            return this.m_bLoadedViaInitOrFullLoad;
          }
          GetDiscountEvent(u) {
            return this.m_mapDiscountEvents.get(u);
          }
          GetAppList(u) {
            return this.m_mapAppList.get(u);
          }
          GetDiscountEventCallback(u) {
            return (
              this.m_mapDiscountEventCallback.has(u) ||
                this.m_mapDiscountEventCallback.set(u, new E.lu()),
              this.m_mapDiscountEventCallback.get(u)
            );
          }
          GetAppListCallback(u) {
            return (
              this.m_mapAppListCallback.has(u) ||
                this.m_mapAppListCallback.set(u, new E.lu()),
              this.m_mapAppListCallback.get(u)
            );
          }
          async LoadAllDiscountEvents(u, j) {
            if (this.m_bLoadEventsRequestInFlight) return x.Ze;
            const f =
                N.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetalldiscountevents/" +
                u,
              b = {};
            let L = null;
            try {
              this.m_bLoadEventsRequestInFlight = !0;
              const n = await p().get(f, { params: b, cancelToken: j?.token });
              if (
                ((this.m_bLoadEventsRequestInFlight = !1),
                n?.status == 200 && n.data?.success == x.R && n.data.events)
              ) {
                for (const i of n.data.events)
                  this.m_mapDiscountEvents.set(i.id, i);
                return (
                  (this.m_bLoadedViaInitOrFullLoad = !0),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetAllDiscountEvents(),
                  ),
                  x.R
                );
              }
              L = { response: n };
            } catch (n) {
              L = n;
            }
            const g = (0, c.H)(L);
            return (
              console.error("Could not load Discount Events", g.strErrorMsg, g),
              L?.response?.data?.success ?? x.zi
            );
          }
          async CreateDiscountEvent(u, j, f, b, L, g, n, i) {
            const s =
                N.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              o = new FormData();
            o.append("sessionid", (0, N.KC)()),
              o.append("name", f),
              o.append("start_time", u.toString()),
              o.append("end_time", j.toString()),
              o.append("strJSONDiscountInfo", k(f, b, L, g, n));
            let a = null;
            try {
              const B = await p().post(s, o, {
                withCredentials: !0,
                cancelToken: i?.token,
              });
              if (
                B?.status == 200 &&
                B.data?.success == x.R &&
                B.data.eventid
              ) {
                const O = {
                  id: B.data.eventid,
                  name: f,
                  start_date: u,
                  end_date: j,
                  appids: n,
                  publisherids: g,
                  description: L,
                  collision_type: K.NX,
                  event: K.Cz,
                  header: b,
                  tooltip: K.j1,
                  type: K.G2,
                  prevent_weeklong: K.l5,
                };
                return (
                  this.m_mapDiscountEvents.set(O.id, O),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetAllDiscountEvents(),
                  ),
                  O
                );
              }
              a = { response: B };
            } catch (B) {
              a = B;
            }
            const D = (0, c.H)(a);
            return (
              console.error(
                "CDiscountEventStore.CreateDiscountEvent: failed",
                D.strErrorMsg,
                D,
              ),
              null
            );
          }
          async UpdateDiscountEventPublisherAndAppList(u, j, f, b) {
            const L = this.m_mapDiscountEvents.get(u);
            if (!L)
              return (
                console.error(
                  "UpdateDiscountEventPublisherAndAppList: updating discount event that we have not loaded",
                  u,
                ),
                null
              );
            const g =
                N.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              n = new FormData();
            n.append("sessionid", (0, N.KC)()),
              n.append("start_time", L.start_date.toString()),
              n.append("end_time", L.end_date.toString()),
              n.append("strJSONDiscountInfo", R(u, L, j, f));
            let i = null;
            try {
              const o = await p().post(g, n, {
                withCredentials: !0,
                cancelToken: b?.token,
              });
              if (
                o?.status == 200 &&
                o.data?.success == x.R &&
                o.data.eventid
              ) {
                const a = { ...L, appids: f, publisherids: j };
                return (
                  this.m_mapDiscountEvents.set(a.id, a),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetAllDiscountEvents(),
                  ),
                  a
                );
              }
              i = { response: o };
            } catch (o) {
              i = o;
            }
            const s = (0, c.H)(i);
            return (
              console.error(
                "CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed",
                s.strErrorMsg,
                s,
              ),
              null
            );
          }
          async LoadSingleDiscountEvent(u) {
            return this.m_mapDiscountEvents.has(u)
              ? this.m_mapDiscountEvents.get(u)
              : (this.m_mapInflightDiscountLoadRequest.has(u) ||
                  this.m_mapInflightDiscountLoadRequest.set(
                    u,
                    this.InternalLoadSingleDiscountEvent(u),
                  ),
                this.m_mapInflightDiscountLoadRequest.get(u));
          }
          async InternalLoadSingleDiscountEvent(u) {
            let j = null;
            if (!u || u.length == 0 || u == "0") return null;
            try {
              const f =
                  N.TS.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventbyid",
                b = { sessionid: (0, N.KC)(), discountid: u },
                L = await p().get(f, { params: b, withCredentials: !0 });
              if (
                L?.status == 200 &&
                L?.data?.success == x.R &&
                L?.data?.discount_event
              )
                return (
                  this.m_mapDiscountEvents.set(u, L.data.discount_event),
                  this.GetDiscountEventCallback(u).Dispatch(
                    L.data.discount_event,
                  ),
                  L.data.discount_event
                );
              j = (0, c.H)(L);
            } catch (f) {
              j = (0, c.H)(f);
            }
            return (
              console.error(
                "CDiscountEventStore.InternalLoadSingleDiscountEvent failed: " +
                  j?.strErrorMsg,
                j,
              ),
              null
            );
          }
          async LoadSingleDiscountEventsAppList(u) {
            return this.m_mapAppList.has(u)
              ? {
                  oDiscountEvent: this.m_mapDiscountEvents.get(u),
                  rgAppList: this.m_mapAppList.get(u),
                }
              : (this.m_mapInflightDiscountAndAppListLoadRequest.has(u) ||
                  this.m_mapInflightDiscountAndAppListLoadRequest.set(
                    u,
                    this.InternalLoadSingleDiscountEventsAppList(u),
                  ),
                this.m_mapInflightDiscountAndAppListLoadRequest.get(u));
          }
          async InternalLoadSingleDiscountEventsAppList(u) {
            let j = null;
            if (!u || u.length == 0) return null;
            try {
              const f =
                  N.TS.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventapplist",
                b = { sessionid: (0, N.KC)(), discountid: u },
                L = await p().get(f, { params: b, withCredentials: !0 });
              if (
                L?.status == 200 &&
                L?.data?.success == x.R &&
                L?.data?.discount_event
              )
                return (
                  this.m_mapDiscountEvents.set(u, L.data.discount_event),
                  this.m_mapAppList.set(u, L.data.appid_list),
                  this.GetDiscountEventCallback(u).Dispatch(
                    L.data.discount_event,
                  ),
                  this.GetAppListCallback(u).Dispatch(L.data.appid_list),
                  {
                    oDiscountEvent: L.data.discount_event,
                    rgAppList: L.data.appid_list,
                  }
                );
              j = (0, c.H)(L);
            } catch (f) {
              j = (0, c.H)(f);
            }
            return (
              console.error(
                "CDiscountEventStore.InternalLoadSingleDiscountEventsAppList failed: " +
                  j?.strErrorMsg,
                j,
              ),
              null
            );
          }
          static s_Singleton;
          static Get() {
            return (
              oe.s_Singleton ||
                ((oe.s_Singleton = new oe()), oe.s_Singleton.Init()),
              oe.s_Singleton
            );
          }
          constructor() {}
          Init() {
            const u = (0, N.Tc)("discount_events", "application_config");
            if (this.BIsConfigValid(u)) {
              for (const j of u) this.m_mapDiscountEvents.set(j.id, j);
              this.m_bLoadedViaInitOrFullLoad = !0;
            }
          }
          BIsConfigValid(u) {
            const j = u;
            return !!(j && Array.isArray(j));
          }
        };
        V([e.o], M.prototype, "GetDiscountEvent", 1),
          V([e.o], M.prototype, "GetAppList", 1),
          V([e.o], M.prototype, "CreateDiscountEvent", 1),
          V([e.o], M.prototype, "UpdateDiscountEventPublisherAndAppList", 1);
        let Q = M;
        function G() {
          return Q.Get().GetFutureDiscountEvents();
        }
        function h() {
          return Q.Get().GetDiscountEventListCallback();
        }
        function $(H) {
          const { rgDiscountEvents: u, eResult: j } = J(0, H);
          let f = [];
          return (
            u?.forEach((b) => {
              b.collision_type == K.Lg && (f = f.concat(b));
            }),
            { rgMajorSaleDiscountEvents: f, eResult: j }
          );
        }
        function J(H, u) {
          const j = Q.Get().BLoadedViaInitOrFullLoad(),
            [f, b] = F.useState(j ? Q.Get().GetAllDiscountEvents() : null),
            [L, g] = F.useState(null),
            n =
              H ||
              Number.parseInt((0, N.Tc)("publisherid", "application_config"));
          (0, Y.hL)(Q.Get().GetDiscountEventListCallback(), b),
            F.useEffect(() => {
              Q.Get().BLoadedViaInitOrFullLoad() ||
                Q.Get().LoadAllDiscountEvents(n).then(g);
            }, [f, n]);
          const i = L ?? (f?.length ? x.R : null);
          return F.useMemo(
            () => ({
              rgDiscountEvents: u ? f : Q.Get().GetFutureDiscountEvents(),
              eResult: i,
            }),
            [f, i, u],
          );
        }
        function A(H) {
          return Q.Get().GetDiscountEvent(H);
        }
        function ct(H) {
          const { data: u } = nt(H);
          return u;
        }
        function nt(H) {
          const [u, j] = (0, F.useState)(Q.Get().GetDiscountEvent(H)),
            [f, b] = F.useState(!!H);
          return (
            F.useEffect(() => {
              (!u && H) || (u?.id != H && H)
                ? (async () => {
                    try {
                      const g = await Q.Get().LoadSingleDiscountEvent(H);
                      g && j(g);
                    } finally {
                      b(!1);
                    }
                  })()
                : b(!1);
            }, [H, u]),
            (0, Y.hL)(Q.Get().GetDiscountEventCallback(H), j),
            { data: u, isLoading: f }
          );
        }
        function _(H) {
          const [u, j] = (0, F.useState)(Q.Get().GetDiscountEvent(H)),
            [f, b] = (0, F.useState)(Q.Get().GetAppList(H));
          return (
            (0, F.useEffect)(() => {
              ((!f && H) || (u?.id != H && H)) &&
                Q.Get()
                  .LoadSingleDiscountEventsAppList(H)
                  .then((L) => {
                    L && (j(L.oDiscountEvent), b(L.rgAppList));
                  });
            }, [u?.id, f, H]),
            (0, Y.hL)(Q.Get().GetDiscountEventCallback(H), j),
            (0, Y.hL)(Q.Get().GetAppListCallback(H), b),
            f ? { oDiscountEvent: u, rgAppList: f } : null
          );
        }
        function rt() {
          return { fnGetDiscountEvent: Q.Get().GetDiscountEvent };
        }
        function k(H, u, j, f, b) {
          return JSON.stringify({
            discount_event: {
              name: H,
              publisherids: f?.join(","),
              appids: b?.join(","),
              description: j,
              event: K.Cz,
              collision_type: K.NX,
              header: u,
              tooltip: K.j1,
              type: K.G2,
            },
          });
        }
        function R(H, u, j, f) {
          return JSON.stringify({
            discount_event: {
              eventid: H,
              name: u.name,
              header: u.header,
              allowed_appids: f.join(","),
              allowed_publisherids: j.join(","),
              description: u.description,
              collision_type: u.collision_type,
              event: u.event,
              tooltip: u.tooltip,
              type: u.type,
              prevent_weeklong: u.prevent_weeklong,
            },
          });
        }
        function it() {
          return { fnCreateDiscountEvent: Q.Get().CreateDiscountEvent };
        }
        function qt() {
          return {
            fnUpdateDiscountEventAppAndPublisherList:
              Q.Get().UpdateDiscountEventPublisherAndAppList,
          };
        }
      },
      29860: (Pt, wt, m) => {
        "use strict";
        m.d(wt, {
          D6: () => it,
          DC: () => j,
          EF: () => rt,
          G7: () => ct,
          Iy: () => k,
          O4: () => u,
          _q: () => f,
          dN: () => H,
          es: () => b,
          fw: () => L,
          k: () => R,
          kJ: () => qt,
          ms: () => g,
          uL: () => A,
        });
        var U = m(41735),
          p = m.n(U),
          F = m(4886),
          x = m(14947),
          d = m(90626),
          c = m(20194),
          e = m(72604),
          E = m(70171),
          Y = m(41635),
          N = m(71742),
          K = m(34592),
          I = m(27066),
          W = m(8323),
          V = m(54963),
          M = m(3166),
          Q = m(47689),
          G = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          $ = (n, i, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? h(i, s) : i, D = n.length - 1, B;
              D >= 0;
              D--
            )
              (B = n[D]) && (a = (o ? B(i, s, a) : B(a)) || a);
            return o && a && G(i, s, a), a;
          };
        const J = class ce {
          constructor() {
            (0, x.Gn)(this);
          }
          static s_OptInRegs;
          m_mapRegistrations = new Map();
          m_mapRequestedAppIDs = new Map();
          m_mapOptInNameCallback = new Map();
          m_mapSingleAppRegistrationChange = new Map();
          m_loadCountChangeCallback = new W.lu();
          BHasOptInRegistration(i, s) {
            return !!this.m_mapRegistrations.get(i)?.has(s);
          }
          GetOptInRegistrationPromise(i, s) {
            return this.m_mapRequestedAppIDs.get(s)?.get(i);
          }
          GetOptInRegistrationAndEligibilityForApp(i) {
            return this.m_mapRegistrations.get(i);
          }
          GetSingleAppRegistrationKey(i, s) {
            return `single_${i}_${s}`;
          }
          GetSingleAppRegistrationChange(i, s) {
            const o = this.GetSingleAppRegistrationKey(i, s);
            return (
              this.m_mapSingleAppRegistrationChange.has(o) ||
                this.m_mapSingleAppRegistrationChange.set(o, new W.lu()),
              this.m_mapSingleAppRegistrationChange.get(o)
            );
          }
          GetExistingOptInRegistartion(i, s) {
            return this.m_mapRegistrations.has(i)
              ? this.m_mapRegistrations.get(i).get(s)
              : null;
          }
          GetLoadCountChange() {
            return this.m_loadCountChangeCallback;
          }
          GetLoadCount() {
            return this.m_mapRegistrations.size;
          }
          GetOptInRegistrationAndEligibilityForApps(i) {
            if (i.length == 0) return null;
            let s = new Map();
            for (let D of i) {
              let B = this.m_mapRegistrations.get(D);
              if (B)
                for (let O of B.keys()) {
                  let Z = s.get(O);
                  Z || (Z = 0), s.set(O, Z + 1);
                }
            }
            let o = new Map(),
              a = i[0];
            return (
              s.forEach((D, B) => {
                if (D == i.length) {
                  let O = this.m_mapRegistrations.get(a).get(B);
                  (0, N.wT)(O, "Missing OptIn Restration"), o.set(B, O);
                }
              }),
              o.size > 0 ? o : null
            );
          }
          BHasOptionOnRegistration(i, s, o) {
            const a = this.GetRegistration(i, s);
            return !a || !a.opt_in
              ? !1
              : o
                ? a?.jsondata?.dynamic_selection?.some(
                    (D) =>
                      D &&
                      D.section_id == o.section_id &&
                      D.list_selection?.some(
                        (B) =>
                          B &&
                          B.list_id == o.list_id &&
                          B.selected_item_id?.includes(o.option_id),
                      ),
                  )
                : !0;
          }
          BHasOptInTrailer(i, s) {
            const o = this.GetRegistration(i, s);
            return !!(
              o &&
              o.opt_in &&
              o.jsondata?.trailer_permission &&
              o.jsondata.rtime_granting_trailer
            );
          }
          BHasOptInDemo(i, s) {
            const o = this.GetRegistration(i, s);
            return !!(
              o &&
              o.opt_in &&
              o.jsondata?.demo_permission &&
              o.jsondata.rtime_granting_demo
            );
          }
          BHasOptInGameProfile(i, s) {
            const o = this.GetRegistration(i, s);
            return !!(
              o &&
              o.opt_in &&
              o.jsondata?.game_profile_intent &&
              o.jsondata.rtime_granting_profile
            );
          }
          CreateRegistrationNotSaved(i, s) {
            return (
              console.log("CreateOrGetRegistration: Creating new registration"),
              (0, F.G6)(i, s)
            );
          }
          CreateOrGetRegistration(i, s) {
            let o = this.m_mapRegistrations.get(i);
            o ||
              ((o = new Map()),
              this.m_mapRegistrations.set(i, o),
              this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
            let a = o.get(s);
            return (
              a
                ? console.log(
                    "CreateOrGetRegistration: Re-using Previous Registration:",
                    a,
                  )
                : (a = this.CreateRegistrationNotSaved(i, s)),
              a
            );
          }
          GetOptInRegistrationAndEligibilityForAppOrCreate(i, s) {
            let o = this.m_mapRegistrations.get(i);
            o ||
              ((o = new Map()),
              this.m_mapRegistrations.set(i, o),
              this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
            let a = o.get(s);
            return (
              a
                ? console.log(
                    "CreateOrGetRegistration: Re-using Previous Registration:",
                    a,
                  )
                : ((a = this.CreateRegistrationNotSaved(i, s)), o.set(s, a)),
              a
            );
          }
          GetRegistration(i, s) {
            return this.m_mapRegistrations.has(i) &&
              this.m_mapRegistrations.get(i).has(s)
              ? this.m_mapRegistrations.get(i).get(s)
              : null;
          }
          GetAllOptInRegistrations(i) {
            const s = this.m_mapRequestedAppIDs.get(i) || new Map();
            return Array.from(s.keys())
              .map((o) => this.m_mapRegistrations.get(o)?.get(i))
              .filter(Boolean);
          }
          GetOptInNameRegistrationsCallbackList(i) {
            return i
              ? (this.m_mapOptInNameCallback.has(i) ||
                  this.m_mapOptInNameCallback.set(i, new W.lu()),
                this.m_mapOptInNameCallback.get(i))
              : null;
          }
          UpdateRegAndTrackInStore(i, s) {
            const o = s.map((a) =>
              a.jsondata && a.jsondata !== ""
                ? { ...a, jsondata: JSON.parse(a.jsondata) }
                : { ...a, jsondata: { opt_in_name: i } },
            );
            return (
              o.forEach((a) => {
                this.m_mapRegistrations.has(a.appid) ||
                  (this.m_mapRegistrations.set(a.appid, new Map()),
                  this.GetLoadCountChange().Dispatch(
                    this.m_mapRegistrations.size,
                  )),
                  this.m_mapRegistrations.get(a.appid).set(i, a);
              }),
              o
            );
          }
          async FetchOptInRegistrationForOptIn(i, s) {
            const o =
                M.TS.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
              a = { sessionid: (0, M.KC)(), opt_in_name: i, opt_in_only: s },
              D = await p().get(o, { params: a, withCredentials: !0 });
            return D?.data?.data
              ? this.UpdateRegAndTrackInStore(i, D.data.data)
              : D?.data?.data;
          }
          async FetchPendingReviewOptInRegistrationn(i) {
            const s =
                M.TS.PARTNER_BASE_URL +
                "optin/ajaxgetpendingreviewregistrations",
              o = { sessionid: (0, M.KC)(), opt_in_name: i },
              a = await p().get(s, { params: o, withCredentials: !0 });
            return a?.data?.data
              ? this.UpdateRegAndTrackInStore(i, a.data.data)
              : a?.data?.data;
          }
          async LoadOptInRegistration(i, s, o) {
            if (this.GetRegistration(s, i)) return !0;
            const D = this.m_mapRequestedAppIDs.get(i)?.get(s);
            if (D) return D;
            try {
              const B = M.TS.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
                O = { sessionid: (0, M.KC)(), appid: s, opt_in_name: i },
                Z = await p().get(B, {
                  params: O,
                  withCredentials: !0,
                  cancelToken: o?.token,
                });
              if (Z?.data?.success == e.R && Z.data.optin_registration) {
                if (
                  (typeof Z.data.optin_registration.jsondata == "string" &&
                    (Z.data.optin_registration.jsondata = JSON.parse(
                      Z.data.optin_registration.jsondata,
                    )),
                  this.m_mapRegistrations.has(s))
                )
                  this.m_mapRegistrations
                    .get(s)
                    .set(i, Z.data.optin_registration);
                else {
                  const q = new Map();
                  q.set(i, Z.data.optin_registration),
                    this.m_mapRegistrations.set(s, q),
                    this.GetLoadCountChange().Dispatch(
                      this.m_mapRegistrations.size,
                    );
                }
                return !0;
              } else {
                const q = (0, K.H)(Z);
                console.error(
                  "LoadOptInRegistration : failed with a response and: " +
                    q.strErrorMsg,
                  q,
                );
              }
            } catch (B) {
              const O = (0, K.H)(B);
              console.error(
                "LoadOptInRegistration : failed with " + O.strErrorMsg,
                O,
              );
            }
            return !1;
          }
          async LoadMultiOptInRegistration(i, s, o, a) {
            if (s.length == 0 || i.length == 0) return !1;
            let D = null;
            const B = new Promise((X, It) => {
              D = X;
            });
            (i = Y.Ew(i).sort()),
              (s = Y.Ew(s).sort()),
              i.forEach((X) => {
                this.m_mapRequestedAppIDs.has(X) ||
                  this.m_mapRequestedAppIDs.set(X, new Map());
              });
            let O = new Array();
            if (
              (s.forEach((X) => {
                i.some(
                  (It) =>
                    !this.BHasOptInRegistration(X, It) &&
                    !this.GetOptInRegistrationPromise(X, It),
                ) &&
                  (O.push(X),
                  i.forEach((It) =>
                    this.m_mapRequestedAppIDs.get(It).set(X, B),
                  ));
              }),
              O.length == 0)
            )
              return !0;
            const Z =
                M.TS.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation",
              q = 50;
            let _t = null;
            try {
              for (; O.length > 0; ) {
                let X = 0;
                const It = [];
                for (; O.length > 0 && X < 5; ) {
                  const te = O.splice(0, q),
                    ee = {
                      rgOptInNames: i.join(","),
                      rgAppIDs: te.join(","),
                      origin: self.origin,
                    };
                  It.push(
                    p().get(Z, {
                      params: ee,
                      withCredentials: !0,
                      cancelToken: o?.token,
                    }),
                  ),
                    (X += 1);
                }
                const ie = await Promise.all(It);
                for (const te of ie)
                  if (
                    te?.status == 200 &&
                    te.data?.success == e.R &&
                    te.data.optin_registrations?.length
                  )
                    this.InternalAddRegistrations(
                      te.data.optin_registrations,
                      a,
                    );
                  else {
                    _t = { response: te };
                    break;
                  }
                this.GetLoadCountChange().Dispatch(
                  this.m_mapRegistrations.size,
                );
              }
            } catch (X) {
              _t = X;
            }
            if (_t == null) D(!0);
            else {
              const X = (0, K.H)(_t);
              console.error(
                "Could not load OptIn for Apps",
                s,
                i,
                X.strErrorMsg,
                X,
              ),
                D(!1);
            }
            return B;
          }
          async RegisterAppForOptIn(i, s) {
            const a = {
              opt_in_name: s.startsWith("sale_") ? s : "sale_" + s,
              opt_in: !0,
            };
            return this.UpdateOptInRegistration(i, a);
          }
          async UpdateOptInRegistration(i, s) {
            let o = null;
            try {
              const a = new FormData();
              a.append("sessionid", (0, M.KC)()),
                Object.keys(s).forEach((O) => a.append(O, s[O]));
              const D =
                  M.TS.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistration/" +
                  i,
                B = await p().post(D, a, { withCredentials: !0 });
              if (B?.status == 200 && B.data?.success == e.R) return null;
              o = (0, K.H)(B);
            } catch (a) {
              o = (0, K.H)(a);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateOptInRegistration error " +
                  o.strErrorMsg,
                o,
              ),
              o.strErrorMsg
            );
          }
          async UpdateOptInRegistrationJson(i, s, o = !1) {
            let a = null;
            try {
              const D = new FormData();
              D.append("sessionid", (0, M.KC)()),
                D.append("appid", "" + i),
                D.append("opt_in_name", s.opt_in_name),
                D.append("jsondata", JSON.stringify(s)),
                o && D.append("bCreatePendingInvite", "true");
              const B =
                  M.TS.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistrationpayload/" +
                  i,
                O = await p().post(B, D, { withCredentials: !0 });
              if (O?.status == 200 && O.data?.success == e.R) {
                const Z = s.opt_in_name.startsWith("sale_")
                    ? s.opt_in_name
                    : "sale_" + s.opt_in_name,
                  q = this.m_mapRegistrations.get(i).get(Z);
                q.jsondata = s;
                const _t = { ...q };
                return (
                  this.m_mapRegistrations.get(i).set(s.opt_in_name, _t),
                  this.GetSingleAppRegistrationChange(
                    i,
                    s.opt_in_name,
                  ).Dispatch(_t),
                  null
                );
              }
              a = (0, K.H)(O);
            } catch (D) {
              a = (0, K.H)(D);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateOptInRegistrationJson error " +
                  a.strErrorMsg,
                a,
              ),
              a.strErrorMsg
            );
          }
          async UpdateAppealState(i, s, o) {
            let a = null;
            try {
              const D = s.opt_in_name || s.jsondata.opt_in_name,
                B = new FormData();
              B.append("sessionid", (0, M.KC)()),
                B.append("appid", "" + i),
                B.append("opt_in_name", D),
                B.append("approved", "" + o);
              const O =
                  M.TS.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + i,
                Z = await p().post(O, B, { withCredentials: !0 });
              if (Z?.status == 200 && Z.data?.success == e.R) {
                const q = { ...this.m_mapRegistrations.get(i).get(D) };
                return (
                  (q.accountid_appeal = M.iA.accountid),
                  (q.appeal_state = o ? E.vm.Tn : E.vm.n$),
                  this.m_mapRegistrations.get(i).set(D, q),
                  this.GetSingleAppRegistrationChange(i, D).Dispatch(q),
                  !0
                );
              }
              a = (0, K.H)(Z);
            } catch (D) {
              a = (0, K.H)(D);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateAppealState error " + a.strErrorMsg,
                a,
              ),
              !1
            );
          }
          static Get() {
            return (
              ce.s_OptInRegs ||
                ((ce.s_OptInRegs = new ce()),
                (window.COptInRegistrations = ce.s_OptInRegs),
                ce.s_OptInRegs.Init()),
              ce.s_OptInRegs
            );
          }
          InternalAddRegistrations(i, s) {
            const o = new Set();
            i.forEach((a) => {
              if (!Number.isNaN(a.appid)) {
                let D = this.m_mapRegistrations.get(a.appid);
                if (
                  (D ||
                    ((D = new Map()), this.m_mapRegistrations.set(a.appid, D)),
                  a.jsondata && typeof a.jsondata == "string")
                ) {
                  const B = a.jsondata;
                  B.trim().length == 0
                    ? (a.jsondata = {})
                    : (a.jsondata = JSON.parse(B));
                }
                D.set(a.opt_in_name, a),
                  s && s.Increment(),
                  o.add(a.opt_in_name);
              }
            }),
              Array.from(o).forEach((a) => {
                this.GetOptInNameRegistrationsCallbackList(a).Dispatch(
                  this.GetAllOptInRegistrations(a),
                );
              });
          }
          Init() {
            let i = JSON.parse(
              JSON.stringify(
                (0, M.Tc)("optin_registrations", "application_config"),
              ),
            );
            this.ValidateStoreDefault(i) && this.InternalAddRegistrations(i);
          }
          ValidateStoreDefault(i) {
            const s = i;
            return s &&
              Array.isArray(s) &&
              s.length > 0 &&
              typeof s[0] == "object"
              ? typeof s[0].appid == "number" &&
                  typeof s[0].opt_in_name == "string"
              : !1;
          }
        };
        $([I.o], J.prototype, "GetOptInRegistrationAndEligibilityForApp", 1),
          $([I.o], J.prototype, "GetOptInRegistrationAndEligibilityForApps", 1),
          $([I.o], J.prototype, "LoadMultiOptInRegistration", 1),
          $([I.o], J.prototype, "UpdateOptInRegistrationJson", 1),
          $([I.o], J.prototype, "UpdateAppealState", 1),
          $([x.XI], J.prototype, "Init", 1);
        let A = J;
        function ct(n, i) {
          const s = n.jsondata?.dynamic_selection;
          try {
            if (s) {
              const o = s
                .filter((a) => a.section_id == i.section_id)
                .map((a) => a.list_selection);
              if (o.length > 0 && o[0]) {
                const a = o[0]
                  .filter((D) => D.list_id == i.list_id)
                  .map((D) => D.selected_item_id);
                if (a.length > 0) return a[0];
              }
            }
          } catch (o) {
            console.log("error: dynamic section", s, n, o);
          }
          return [];
        }
        function nt() {
          return React.useMemo(
            () => ({
              fnGetOptInRegistrationAndEligibilityForApp:
                A.Get().GetOptInRegistrationAndEligibilityForApp,
            }),
            [],
          );
        }
        function _(n) {
          return n && A.Get().GetOptInRegistrationAndEligibilityForApp(n);
        }
        function rt() {
          return d.useMemo(
            () => ({
              fnLoadMultiOptInRegistration: A.Get().LoadMultiOptInRegistration,
            }),
            [],
          );
        }
        function k(n, i, s) {
          const [o, a] = d.useState(null),
            D = (0, Q.m)("useMultiLoadOptInAppReg");
          return (
            (0, d.useEffect)(() => {
              const B = i?.filter(Boolean);
              B?.length > 0 && n?.length > 0
                ? A.Get()
                    .LoadMultiOptInRegistration(
                      B.map(() => n),
                      B,
                      D,
                      s,
                    )
                    .then(() => {
                      const O = new Map();
                      B.forEach((Z) => {
                        const q = A.Get().GetRegistration(Z, n);
                        q && O.set(Z, q);
                      }),
                        a(O);
                    })
                : a(new Map());
            }, [n, i, D, s]),
            o
          );
        }
        function R(n) {
          const [i, s] = d.useState(A.Get().GetAllOptInRegistrations(n));
          return (
            (0, V.hL)(A.Get().GetOptInNameRegistrationsCallbackList(n), s), i
          );
        }
        function it(n) {
          const i = R(n),
            [s, o] = d.useState({
              nAppOptedIn: 0,
              nAppEligible: 0,
              nAppOptedOut: 0,
              nAppIneligible: 0,
            });
          return (
            d.useEffect(() => {
              if (i?.length > 0) {
                const a = {
                  nAppOptedIn: 0,
                  nAppEligible: 0,
                  nAppOptedOut: 0,
                  nAppIneligible: 0,
                };
                i.forEach((D) => {
                  D.restricted || D.pruned
                    ? (a.nAppIneligible += 1)
                    : D.opt_in
                      ? ((a.nAppOptedIn += 1), (a.nAppEligible += 1))
                      : !D.time_opted_in || D.invited
                        ? (a.nAppEligible += 1)
                        : (a.nAppOptedOut += 1);
                }),
                  JSON.stringify(a) != JSON.stringify(s) && o(a);
              }
            }, [i, s]),
            s
          );
        }
        function qt(n, i) {
          const s = (0, c.I)({
            queryKey: ["useAllOptInRegistrationByName", n, !!i],
            queryFn: () => A.Get().FetchOptInRegistrationForOptIn(n, i),
            staleTime: 36e5,
            enabled: !!n,
          });
          return s.isLoading ? null : s.data;
        }
        function H(n) {
          const i = (0, c.I)({
            queryKey: ["useAllPendingReviewOptInRegistrationByName", n],
            queryFn: () => A.Get().FetchPendingReviewOptInRegistrationn(n),
            retry: !1,
            staleTime: 36e5,
            enabled: n?.length > 0,
          });
          return {
            rgPendingReviewRegistrations: i.isLoading ? null : i.data,
            bIsInError: i.isError,
          };
        }
        function u(n, i) {
          const s = qt(n, !1),
            [o, a] = (0, d.useState)(s?.find((D) => D.appid == i));
          return (0, V.hL)(A.Get().GetSingleAppRegistrationChange(i, n), a), o;
        }
        function j(n, i) {
          const [s, o] = (0, d.useState)(
            A.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(n, i),
          );
          return (0, V.hL)(A.Get().GetSingleAppRegistrationChange(n, i), o), s;
        }
        function f(n, i) {
          const [s, o] = (0, d.useState)(
            A.Get().GetExistingOptInRegistartion(n, i),
          );
          return (0, V.hL)(A.Get().GetSingleAppRegistrationChange(n, i), o), s;
        }
        function b() {
          return {
            fnUpdateOptInRegistrationJson: A.Get().UpdateOptInRegistrationJson,
          };
        }
        function L() {
          return { fnUpdateAppealState: A.Get().UpdateAppealState };
        }
        function g() {
          const [n, i] = (0, d.useState)(A.Get().GetLoadCount());
          return (
            (0, V.hL)(A.Get().GetLoadCountChange(), i), A.Get().GetLoadCount()
          );
        }
      },
      15659: (Pt, wt, m) => {
        "use strict";
        m.d(wt, {
          $U: () => $,
          $p: () => f,
          CW: () => j,
          Fk: () => qt,
          Ko: () => G,
          Lj: () => h,
          Mh: () => ct,
          XA: () => H,
          XL: () => b,
          a8: () => k,
          aU: () => it,
          gr: () => rt,
          hC: () => R,
          iI: () => A,
          qN: () => J,
          qT: () => W,
          sZ: () => V,
          sk: () => u,
          w8: () => nt,
          zq: () => _,
          zy: () => L,
        });
        var U = m(41735),
          p = m.n(U),
          F = m(90626),
          x = m(72604),
          d = m(7582),
          c = m(34592),
          e = m(8323),
          E = m(54963),
          Y = m(48473),
          N = m(3166),
          K = m(41635),
          I = m(36174);
        const W = 95,
          V = 10;
        class M {
          m_mapPackageDiscountsById = new Map();
          m_mapDiscountCallbackList = new Map();
          m_mapPackageDiscountsByPackageId = new Map();
          m_mapPackageCallbackList = new Map();
          m_mapPackageDiscountsByDiscountEventId = new Map();
          m_mapDiscountEventCallbackList = new Map();
          m_allDiscountCallbackList = new e.lu();
          m_mapMaxDiscountPercentageByPackageId = new Map();
          m_mapExistingPackageRequests = new Map();
          static s_Singleton;
          static Get() {
            return (
              M.s_Singleton ||
                ((M.s_Singleton = new M()), M.s_Singleton.Init()),
              M.s_Singleton
            );
          }
          constructor() {}
          Init() {
            const n = (0, N.Tc)("package_discounts", "application_config");
            this.BIsDiscountPayloadValid(n) && this.InternalAddDiscounts(n);
            const i = (0, N.Tc)(
              "max_discount_percentages",
              "application_config",
            );
            if (this.BIsMaxDiscountPayloadValid(i))
              for (let s in i)
                this.m_mapMaxDiscountPercentageByPackageId.set(Number(s), i[s]);
          }
          InternalAddDiscounts(n, i) {
            const s = new Set(),
              o = new Set();
            for (const a of n)
              a.discountEventID?.length || (a.discountEventID = Q(a)),
                this.m_mapPackageDiscountsById.set(a.nDiscountID, a),
                this.GetCallbackListForDiscount(a.nDiscountID).Dispatch(a),
                this.m_mapPackageDiscountsByPackageId.has(a.packageID) ||
                  this.m_mapPackageDiscountsByPackageId.set(
                    a.packageID,
                    new Map(),
                  ),
                this.m_mapPackageDiscountsByPackageId
                  .get(a.packageID)
                  .set(a.nDiscountID, a),
                s.add(a.packageID),
                this.m_mapPackageDiscountsByDiscountEventId.has(
                  a.discountEventID,
                ) ||
                  this.m_mapPackageDiscountsByDiscountEventId.set(
                    a.discountEventID,
                    new Map(),
                  ),
                this.m_mapPackageDiscountsByDiscountEventId
                  .get(a.discountEventID)
                  .set(a.nDiscountID, a),
                o.add(a.discountEventID);
            for (const a of i ?? [])
              this.m_mapPackageDiscountsByPackageId.has(a) ||
                this.m_mapPackageDiscountsByPackageId.set(a, new Map()),
                s.add(a);
            s.forEach((a) =>
              this.GetCallbackListForPackage(a).Dispatch(
                this.GetAllDiscountsForPackage(a),
              ),
            ),
              o.forEach((a) =>
                this.GetCallbackListForDiscountEvent(a).Dispatch(
                  this.GetAllDiscountsForDiscountEvent(a),
                ),
              ),
              this.GetGlobalCallbackList().Dispatch(
                this.GetAllDiscountsForAllPackages(),
              );
          }
          InternalDeleteDiscount(n, i, s) {
            this.m_mapPackageDiscountsById.delete(n),
              this.m_mapPackageDiscountsByPackageId.get(i)?.delete(n),
              this.m_mapPackageDiscountsByDiscountEventId.get(s)?.delete(n),
              this.GetCallbackListForDiscount(n).Dispatch(null),
              this.GetCallbackListForPackage(i).Dispatch(
                this.GetAllDiscountsForPackage(i),
              ),
              this.GetCallbackListForDiscountEvent(s).Dispatch(
                this.GetAllDiscountsForDiscountEvent(s),
              ),
              this.GetGlobalCallbackList().Dispatch(
                this.GetAllDiscountsForAllPackages(),
              );
          }
          BIsDiscountPayloadValid(n) {
            const i = n;
            if (i && Array.isArray(i)) {
              if (i.length == 0) return !0;
              const s = i[0];
              if (
                s.nDiscountID &&
                typeof s.nDiscountID == "number" &&
                s.packageID &&
                typeof s.packageID == "number"
              )
                return !0;
            }
            return !1;
          }
          BIsMaxDiscountPayloadValid(n) {
            const i = n;
            if (i && typeof i == "object") {
              for (let s in i)
                if (
                  isNaN(parseInt(s)) ||
                  (i[s] !== null && typeof i[s] != "number")
                )
                  return !1;
              return !0;
            }
            return !1;
          }
          async LoadPackageDiscounts(n, i, s = 0) {
            const o = K.Ew(n).sort().join(",");
            return (
              this.m_mapExistingPackageRequests.has(o) ||
                this.m_mapExistingPackageRequests.set(
                  o,
                  this.InternalLoadPackageDiscounts(n, i, s),
                ),
              this.m_mapExistingPackageRequests.get(o)
            );
          }
          async InternalLoadPackageDiscounts(n, i, s = 0) {
            const o = new Set();
            for (const X of n)
              !this.m_mapPackageDiscountsByPackageId.has(X) &&
                X != 0 &&
                o.add(X);
            const a = Array.from(o).sort();
            if (a.length == 0) return x.R;
            let D = null;
            const B = new Promise((X, It) => {
                D = X;
              }),
              O = (0, N.Tc)("publisherid", "application_config"),
              Z = 50;
            let q = null,
              _t = null;
            try {
              const X = [],
                It = new Array();
              for (; a.length > 0; ) {
                const ee = a.splice(0, Z);
                It.push(ee),
                  X.push(this.LoadPackageDiscountsFromPHP(O, ee, i, s));
              }
              const ie = await Promise.all(X),
                te = [];
              for (const ee of ie)
                if (
                  ((_t = It.unshift()),
                  ee?.status == 200 &&
                    ee.data?.success == x.R &&
                    ee.data.discounts)
                )
                  ee.data.discounts.forEach((le) => te.push(le));
                else {
                  q = { response: ee };
                  break;
                }
              q == null && this.InternalAddDiscounts(te, Array.from(o));
            } catch (X) {
              q = X;
            }
            if (q == null) D(x.R);
            else {
              const X = (0, c.H)(q);
              console.error(
                "Could not load Discounts for packages",
                _t,
                X.strErrorMsg,
                X,
              ),
                D(q?.response?.data?.success ?? x.zi);
            }
            return B;
          }
          async LoadPackageDiscountsFromPHP(n, i, s, o = 0) {
            const a = { packageids: i.join(","), origin: self.origin },
              D =
                N.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetpackagediscounts/" +
                n;
            let B,
              O = 3;
            for (; O-- > 0; )
              try {
                if (
                  ((B = await p().get(D, {
                    params: a,
                    withCredentials: !0,
                    cancelToken: s?.token,
                    timeout: o,
                  })),
                  B?.status == 200 &&
                    B.data?.success == x.R &&
                    B.data.discounts)
                )
                  return B;
              } catch (Z) {
                if (O == 0) throw Z;
                console.error(Z);
              }
            return B;
          }
          async SaveDiscountToServer(n, i) {
            const s =
                N.TS.PARTNER_BASE_URL +
                "packages/createoreditdiscount/" +
                n.packageID,
              o = new FormData();
            o.append("sessionid", (0, N.KC)()),
              n.nDiscountID && o.append("id", n.nDiscountID.toString()),
              o.append("name", n.strDiscountName),
              o.append("description", n.strDiscountDescription),
              n.discountEventID &&
                !G(n.discountEventID) &&
                o.append("type", n.discountEventID),
              o.append("percent", n.nDiscountPct.toString()),
              o.append(
                "start_date",
                new Date(n.rtStartDate * 1e3).toISOString(),
              ),
              o.append("end_date", new Date(n.rtEndDate * 1e3).toISOString());
            let a = null;
            try {
              const B = await p().post(s, o, {
                withCredentials: !0,
                cancelToken: i?.token,
              });
              if (
                ((B.data.msg = B.data.msg ?? B.data.message),
                B?.status == 200 && B.data?.success == x.R && B.data.discountid)
              )
                return (
                  (n.bChangedLocally = !1),
                  (n.nDiscountID = B.data.discountid),
                  (n.nDiscountPct = B.data.percentage),
                  this.InternalAddDiscounts([n]),
                  B.data
                );
              a = { response: B };
            } catch (B) {
              a = B;
            }
            const D = (0, c.H)(a);
            return (
              console.error(
                "CPackageDiscountStore.SaveDiscountToServer: failed",
                D.strErrorMsg,
                D,
              ),
              a?.response?.data ?? { success: x.zi }
            );
          }
          async DeleteDiscountOnServer(n, i, s, o) {
            const a =
                N.TS.PARTNER_BASE_URL + "packages/removepackagediscount/" + i,
              D = new FormData();
            D.append("sessionid", (0, N.KC)()),
              D.append("discountid", n.toString());
            let B = null;
            try {
              const Z = await p().post(a, D, {
                withCredentials: !0,
                cancelToken: o?.token,
              });
              if (Z?.status == 200 && Z.data?.success == x.R)
                return this.InternalDeleteDiscount(n, i, s), Z.data;
              B = { response: Z };
            } catch (Z) {
              B = Z;
            }
            const O = (0, c.H)(B);
            return (
              console.error(
                "CPackageDiscountStore.DeleteDiscountOnServer: failed",
                O.strErrorMsg,
                O,
              ),
              B?.response?.data ?? { success: x.zi }
            );
          }
          GetCallbackListForDiscount(n) {
            return (
              this.m_mapDiscountCallbackList.has(n) ||
                this.m_mapDiscountCallbackList.set(n, new e.lu()),
              this.m_mapDiscountCallbackList.get(n)
            );
          }
          GetCallbackListForPackage(n) {
            return (
              this.m_mapPackageCallbackList.has(n) ||
                this.m_mapPackageCallbackList.set(n, new e.lu()),
              this.m_mapPackageCallbackList.get(n)
            );
          }
          GetCallbackListForDiscountEvent(n) {
            return (
              this.m_mapDiscountEventCallbackList.has(n) ||
                this.m_mapDiscountEventCallbackList.set(n, new e.lu()),
              this.m_mapDiscountEventCallbackList.get(n)
            );
          }
          GetGlobalCallbackList() {
            return this.m_allDiscountCallbackList;
          }
          GetDiscountByID(n) {
            return this.m_mapPackageDiscountsById.get(n);
          }
          GetAllDiscountsForPackage(n) {
            return this.m_mapPackageDiscountsByPackageId.has(n)
              ? Array.from(
                  this.m_mapPackageDiscountsByPackageId.get(n)?.values() ?? [],
                )
              : null;
          }
          GetAllDiscountsForAllPackages() {
            return Array.from(this.m_mapPackageDiscountsById.values());
          }
          GetAllDiscountsForDiscountEvent(n) {
            return Array.from(
              this.m_mapPackageDiscountsByDiscountEventId.get(n)?.values() ??
                [],
            );
          }
          GetMaxDiscountPercentage(n) {
            const i = W;
            return this.m_mapMaxDiscountPercentageByPackageId.get(n) ?? i;
          }
          GetMaxDiscountPercentageForGroup(n) {
            const i = n.map((s) => this.GetMaxDiscountPercentage(s));
            return Math.min(...i);
          }
        }
        function Q(g) {
          return `custom-event-${g.rtStartDate}-${g.rtEndDate}-${(0, Y.Yz)(g.strDiscountName)}`;
        }
        function G(g) {
          return g.startsWith("custom-event-");
        }
        function h(g) {
          return M.Get().GetDiscountByID(g);
        }
        function $(g) {
          return M.Get().GetAllDiscountsForDiscountEvent(g);
        }
        function J(g) {
          return M.Get().GetAllDiscountsForPackage(g);
        }
        function A(g) {
          return M.Get().GetCallbackListForPackage(g);
        }
        function ct() {
          return M.Get().GetAllDiscountsForAllPackages();
        }
        function nt() {
          return M.Get().GetGlobalCallbackList();
        }
        function _() {
          return F.useCallback(
            (g, n, i) => M.Get().LoadPackageDiscounts(g, n, i),
            [],
          );
        }
        function rt() {
          const g = (i) => M.Get().SaveDiscountToServer(i),
            n = (i, s, o) => M.Get().DeleteDiscountOnServer(i, s, o);
          return F.useMemo(
            () => ({ fnSaveDiscount: g, fnDeleteDiscount: n }),
            [],
          );
        }
        function k(g) {
          return new Map(
            Array.from(g.map((n) => [n, M.Get().GetDiscountByID(n)])),
          );
        }
        function R(g) {
          const n = (0, d.f1)(),
            [i, s] = F.useState(M.Get().GetAllDiscountsForPackage(g));
          return (
            (0, E.hL)(M.Get().GetCallbackListForPackage(g), s),
            F.useMemo(() => {
              let o = null;
              if (i == null) return { deepestDiscount: o, bLoading: !0 };
              if (i?.length > 0)
                for (const a of i)
                  a.rtEndDate > n ||
                    a.nDiscountPct <= 0 ||
                    ((o == null ||
                      a.nDiscountPct > o.nDiscountPct ||
                      (a.nDiscountPct == o.nDiscountPct &&
                        a.rtEndDate > o.rtEndDate)) &&
                      (o = a));
              return { deepestDiscount: o, bLoading: !1 };
            }, [g, n, i])
          );
        }
        function it(g) {
          const n = (0, d.f1)();
          if (!g) return null;
          let i = null;
          return (
            g.forEach((s) => {
              const o = M.Get().GetAllDiscountsForPackage(s);
              if (o?.length > 0)
                for (const a of o)
                  a.rtEndDate > n ||
                    a.nDiscountPct <= 0 ||
                    ((i == null ||
                      a.nDiscountPct > i.nDiscountPct ||
                      (a.nDiscountPct == i.nDiscountPct &&
                        a.rtEndDate > i.rtEndDate)) &&
                      (i = a));
            }),
            i
          );
        }
        function qt(g, n, i) {
          const [s, o] = (0, F.useState)(),
            [a, D] = (0, F.useState)([]);
          return (
            (0, F.useEffect)(() => {
              if (n < i && g?.length > 0) {
                let B = new Array(),
                  O = new Array(),
                  Z = new Array();
                for (let q = n; q < i; q += I.Kp.PerDay) B.push(q), O.push(!1);
                g.forEach((q) => {
                  const _t = M.Get().GetAllDiscountsForPackage(q);
                  if (_t?.length > 0)
                    for (const X of _t)
                      X.rtStartDate > i ||
                        X.rtEndDate < n ||
                        (Z.push(X),
                        B.forEach((It, ie) => {
                          It < X.rtEndDate &&
                            X.rtStartDate < It + I.Kp.PerDay &&
                            (O[ie] = !0);
                        }));
                }),
                  D(Z),
                  o(O.filter((q) => q === !0).length);
              } else o(0);
            }, [g, n, i]),
            { nDaysInDiscount: s, rgDiscountWithOverlap: a }
          );
        }
        function H(g) {
          const n = (0, d.f1)(),
            [i, s] = F.useState(M.Get().GetAllDiscountsForAllPackages());
          return (
            (0, E.hL)(M.Get().GetGlobalCallbackList(), s),
            F.useMemo(() => {
              let o = null;
              if (i == null) return { mostRecentDiscount: o, bLoading: !0 };
              for (const a of g) {
                const D = M.Get().GetAllDiscountsForPackage(a) ?? [];
                for (const B of D)
                  !B.rtStartDate ||
                    !B.rtEndDate ||
                    !B.nDiscountPct ||
                    (B.rtStartDate < n &&
                      (!o || o.rtEndDate < B.rtEndDate) &&
                      (o = B));
              }
              return { mostRecentDiscount: o, bLoading: !1 };
            }, [n, g, i])
          );
        }
        function u(g) {
          const [n, i] = F.useState(M.Get().GetAllDiscountsForDiscountEvent(g));
          return (0, E.hL)(M.Get().GetCallbackListForDiscountEvent(g), i), n;
        }
        function j(g) {
          const [n, i] = F.useState(M.Get().GetAllDiscountsForPackage(g));
          (0, E.hL)(M.Get().GetCallbackListForPackage(g), i);
          const [s, o] = F.useState(!1),
            a = _();
          return (
            F.useEffect(() => {
              if (n || !g) {
                s || o(!0);
                return;
              }
              if (!s && a) {
                const D = p().CancelToken.source();
                a([g]).then(() => {
                  D.token.reason || o(!0);
                });
              }
            }, [n, s, o, g, a]),
            n
          );
        }
        function f(g) {
          return M.Get().GetMaxDiscountPercentage(g);
        }
        function b(g) {
          return g.some(
            (n) =>
              n.nDiscountPct > M.Get().GetMaxDiscountPercentage(n.packageID),
          );
        }
        function L(g) {
          return M.Get().GetMaxDiscountPercentageForGroup(g);
        }
      },
      55541: (Pt, wt, m) => {
        "use strict";
        m.d(wt, {
          Be: () => rt,
          C5: () => me,
          Gq: () => le,
          NK: () => R,
          QD: () => B,
          T1: () => H,
          UZ: () => Q,
          WV: () => o,
          ZM: () => a,
          _9: () => te,
          bA: () => i,
          ew: () => O,
          gr: () => X,
          h5: () => nt,
          hk: () => h,
          hu: () => _,
          i3: () => Z,
          jM: () => A,
          jf: () => ct,
          l4: () => D,
          nu: () => u,
          s3: () => G,
          ve: () => _t,
          wF: () => It,
          we: () => $,
          wk: () => ee,
          wn: () => k,
          zP: () => q,
          zU: () => J,
        });
        var U = m(76115),
          p = m(26765),
          F = m(29860),
          x = m(15659),
          d = m(31886),
          c = m(11636),
          e = m(28763),
          E = m(90626),
          Y = m(7582),
          N = m(10142),
          K = m(8323),
          I = m(54963),
          W = m(48473),
          V = m(36174),
          M = m(75857);
        const Q = 0,
          G = 1,
          h = 2,
          $ = 3,
          J = 4,
          A = 5,
          ct = 6,
          nt = 7,
          _ = 8,
          rt = 9,
          k = 10,
          R = 11;
        function it(S, l) {
          return (
            !!S == !!l &&
            S?.packageID == l?.packageID &&
            S?.discountEventID == l?.discountEventID &&
            S?.eState == l?.eState &&
            S?.rgConflictDetails?.length == l?.rgConflictDetails?.length &&
            S?.optInReg == l?.optInReg &&
            qt(S?.discount, l?.discount) &&
            S?.nBaseAppID == l?.nBaseAppID &&
            S?.bChangedLocally == l?.bChangedLocally
          );
        }
        function qt(S, l) {
          return (
            (!l && (S?.nDiscountPct ?? 0) == 0) ||
            (!!l && l.nDiscountPct == S?.nDiscountPct)
          );
        }
        const H = 30,
          u = H * V.Kp.PerDay - 1.5 * V.Kp.PerHour,
          j = 10 * V.Kp.PerMinute;
        class f {
          m_mapPackageStateForDiscountEvents = new Map();
          m_mapLocalPackageDiscountOverrides = new Map();
          m_mapDiscountPackageCallbackList = new Map();
          m_mapDiscountGridCellCallbackList = new Map();
          m_mapDiscountEventColumnCallbackList = new Map();
          m_localPackageDiscountOverrideCallbackList = new K.lu();
          static s_Singleton;
          static s_initializationCallbackList = new K.lu();
          static Get() {
            return (
              f.s_Singleton ||
                ((f.s_Singleton = new f()), f.s_Singleton.Init()),
              f.s_Singleton
            );
          }
          static IsInitialized() {
            return !!f.s_Singleton;
          }
          constructor() {}
          Init() {
            for (const l of (0, d.OM)())
              f.Get().ComputePackageState(l),
                (0, x.iI)(l).Register(() => {
                  f.Get().ComputePackageState(l);
                });
            (0, M.ou)().Register(() => {
              for (const l of (0, d.OM)()) f.Get().ComputePackageState(l, !0);
            }),
              f.s_initializationCallbackList.Dispatch(!0);
          }
          OverridePackageDiscountPct(l, v, w) {
            const T = f.Get().m_mapPackageStateForDiscountEvents.get(l)?.get(v);
            if (T?.eState != G)
              return (
                console.error(
                  "Cannot change discount in current state:",
                  T.eState,
                ),
                null
              );
            const C = T.discount,
              P = (0, M.Z6)(v),
              Bt = {
                nDiscountID: C?.nDiscountID,
                packageID: l,
                nDiscountPct: w,
                strDiscountName: P.name,
                strDiscountDescription: P.description,
                rtStartDate: P.start_date,
                rtEndDate: P.end_date,
                discountEventID: P.id,
                bChangedLocally: !0,
              };
            return qt(Bt, C)
              ? null
              : (this.m_mapLocalPackageDiscountOverrides.has(l) ||
                  this.m_mapLocalPackageDiscountOverrides.set(l, new Map()),
                this.m_mapLocalPackageDiscountOverrides.get(l).set(v, Bt),
                this.ComputePackageState(l),
                this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                  this.GetLocalPackageDiscountOverrides(),
                ),
                Bt);
          }
          GetHighestPackageDiscount(l) {
            let v = this.m_mapPackageStateForDiscountEvents.get(l);
            if (!v) return 0;
            let w = 0;
            return (
              v.forEach((T, C) => {
                T.eState == G &&
                  (w = Math.max(w, T.discount?.nDiscountPct || 0));
              }),
              w
            );
          }
          GetLocalPackageDiscountOverrides() {
            const l = [];
            return (
              this.m_mapLocalPackageDiscountOverrides.forEach((v) =>
                v.forEach((w) => {
                  const T = w.nDiscountID && (0, x.Lj)(w.nDiscountID);
                  qt(w, T) || l.push(w);
                }),
              ),
              l.sort(n),
              l
            );
          }
          DiscardAllLocalPackageDiscountOverrides(l) {
            this.m_mapLocalPackageDiscountOverrides.clear();
            for (const v of l) this.ComputePackageState(v);
            this.GetLocalPackageDiscountOverrideCallbackList().Dispatch([]);
          }
          DiscardLocalPackageDiscountOverride(l, v) {
            this.m_mapLocalPackageDiscountOverrides.get(l)?.delete(v),
              this.ComputePackageState(l),
              this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                this.GetLocalPackageDiscountOverrides(),
              );
          }
          OptInRegistrationUpdatedForApp(l, v) {
            Array.from(this.m_mapPackageStateForDiscountEvents.values())
              .map((T) => T.get(v))
              .filter((T) => T?.nBaseAppID == l)
              .map((T) => T.packageID)
              ?.forEach((T) => this.ComputePackageState(T));
          }
          GetPackageDiscountsIncludingOverrides(l) {
            const w = (0, Y.sB)() - u,
              T = (0, x.qN)(l);
            if (!T) return null;
            const C = new Map(
              T.filter((P) => P.rtEndDate > w).map((P) => [
                P.discountEventID,
                P,
              ]),
            );
            return (
              this.m_mapLocalPackageDiscountOverrides
                .get(l)
                ?.forEach((P, Bt) => {
                  const Xt = C.get(Bt);
                  qt(P, Xt) || C.set(Bt, P);
                }),
              C
            );
          }
          GetDiscountGridCellCallbackList(l, v) {
            if (!l || !v) return null;
            this.m_mapDiscountGridCellCallbackList.has(l) ||
              this.m_mapDiscountGridCellCallbackList.set(l, new Map());
            const w = this.m_mapDiscountGridCellCallbackList.get(l);
            return w.has(v) || w.set(v, new K.lu()), w.get(v);
          }
          GetDiscountPackageCallbackList(l) {
            if (!l) return null;
            let v = this.m_mapDiscountPackageCallbackList.get(l);
            return (
              v ||
                ((v = new K.lu()),
                this.m_mapDiscountPackageCallbackList.set(l, v)),
              v
            );
          }
          GetDiscountEventColumnCallbackList(l) {
            return l
              ? (this.m_mapDiscountEventColumnCallbackList.has(l) ||
                  this.m_mapDiscountEventColumnCallbackList.set(l, new K.lu()),
                this.m_mapDiscountEventColumnCallbackList.get(l))
              : null;
          }
          GetLocalPackageDiscountOverrideCallbackList() {
            return this.m_localPackageDiscountOverrideCallbackList;
          }
          GetAllPackageStatesForDiscountEvent(l) {
            const v = [];
            return (
              f
                .Get()
                .m_mapPackageStateForDiscountEvents.forEach((w, T) =>
                  v.push(w.get(l)),
                ),
              v
            );
          }
          ComputePackageState(l, v) {
            const w = N.A.Get().GetPackage(l);
            if (!w) return;
            const T = (0, M.E1)(),
              C = (0, c.i$)(w),
              P = C.nBaseAppID;
            let Bt =
              P && F.uL.Get().GetOptInRegistrationAndEligibilityForApp(P);
            !P &&
              !Bt &&
              (Bt = F.uL
                .Get()
                .GetOptInRegistrationAndEligibilityForApps(
                  w.GetIncludedAppIDs(),
                ));
            const Xt = !1,
              ae = this.GetPackageDiscountsIncludingOverrides(l),
              Ct = !ae,
              se = Ct
                ? null
                : Array.from(ae.values()).sort(
                    (ht, Dt) => ht.rtStartDate - Dt.rtStartDate,
                  );
            this.m_mapPackageStateForDiscountEvents.has(l) ||
              this.m_mapPackageStateForDiscountEvents.set(l, new Map());
            const Qt = this.m_mapPackageStateForDiscountEvents.get(l);
            for (const ht of T) {
              if (v && Qt.has(ht.id)) continue;
              const Dt = {
                packageID: l,
                discountEventID: ht.id,
                nBaseAppID: P,
              };
              if (
                ((Dt.discount = ae?.get(ht.id)),
                (Dt.bChangedLocally = !!Dt.discount?.bChangedLocally),
                Xt || Ct)
              )
                Dt.eState = Q;
              else if (Dt.discount?.nDiscountPct > 0) {
                Dt.eState = G;
                const tt = ht.opt_in_name && Bt?.get(ht.opt_in_name);
                tt && (Dt.optInReg = tt);
              } else {
                if (((Dt.eState = G), g(ht, w))) Dt.eState = k;
                else if (ht.opt_in_name) {
                  const { ePackageDiscountState: tt, optInRegistration: at } =
                    L(ht.opt_in_name, Bt, w, C, ht);
                  (Dt.eState = tt), (Dt.optInReg = at);
                }
                if (Dt.eState != k && Dt.eState != J && Dt.eState != A) {
                  const tt = b(l, ht, se);
                  tt.ePackageDiscountState != G &&
                    ((Dt.eState = tt.ePackageDiscountState),
                    (Dt.rgConflictDetails = tt.rgConflictingDiscounts.map(
                      (at) =>
                        (0, p.E7)(at.discountEventID)?.name ??
                        at.strDiscountName,
                    )));
                }
              }
              it(Dt, Qt.get(ht.id)) ||
                (Qt.set(ht.id, Dt),
                this.GetDiscountPackageCallbackList(l).Dispatch(),
                this.GetDiscountGridCellCallbackList(l, ht.id).Dispatch(Dt),
                this.GetDiscountEventColumnCallbackList(ht.id).Dispatch(
                  this.GetAllPackageStatesForDiscountEvent(ht.id),
                ));
            }
          }
          GetAvailableDiscountEventsInRange(l, v, w) {
            const T = this.m_mapPackageStateForDiscountEvents.get(l),
              C = new Set([G, R, h, $]);
            return (0, M.E1)()
              .filter(
                (Bt) =>
                  v <= Bt.start_date &&
                  Bt.end_date <= w &&
                  C.has(T.get(Bt.id).eState),
              )
              .map((Bt) => Bt.id);
          }
          GetFurthestCooldownFromPastDiscounts(l) {
            const v = (0, Y.sB)();
            let w = v;
            return (
              l
                .filter((T) => T.rtStartDate < v)
                .filter(
                  (T) => (0, p.E7)(T.discountEventID)?.collision_type != U.Lg,
                )
                .forEach((T) => {
                  T.rtEndDate + u < w && (w = T.rtEndDate + u);
                }),
              w
            );
          }
          GetFutureDiscountRanges(l) {
            const v = N.A.Get().GetPackage(l),
              w = this.GetPackageDiscountsIncludingOverrides(l);
            if (!v || !w) return [];
            const T = Array.from(w.values()).sort(
                (tt, at) => tt.rtStartDate - at.rtStartDate,
              ),
              C = (0, Y.sB)(),
              P = v.GetReleaseDateRTime(),
              Bt = (0, M.zL)(l),
              Xt = this.GetFurthestCooldownFromPastDiscounts(T),
              ae = Math.max(C, (P ?? 0) + u, Bt + u, Xt),
              Ct = [],
              se = new Set();
            let Qt = ae;
            for (let tt = 0; tt < T.length; tt++) {
              const at = T[tt];
              if (at.nDiscountPct == 0 || at.rtStartDate < ae) continue;
              const ot = (0, p.E7)(at.discountEventID);
              let st = at.rtStartDate - u;
              const lt = ot?.collision_type == U.Lg;
              if (lt && ((st = at.rtStartDate + j), tt + 1 < T.length)) {
                const et = T[tt + 1];
                (0, M.Z6)(et.discountEventID)?.collision_type != U.Lg &&
                  (st = Math.min(st, et.rtStartDate - u));
              }
              if (Qt + V.Kp.PerDay < st) {
                const et = {
                  bIsAvailable: !0,
                  rtStartDate: Qt,
                  rtEndDate: st,
                  rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                    l,
                    Qt,
                    st,
                  ),
                };
                Ct.push(et), et.rgDiscountEventIDs.forEach((re) => se.add(re));
              }
              const ut = {
                bIsAvailable: !1,
                rtStartDate: at.rtStartDate,
                rtEndDate: at.rtEndDate,
                discount: at,
                rgDiscountEventIDs: [at.discountEventID],
              };
              if (
                (Ct.push(ut),
                se.add(at.discountEventID),
                (Qt = at.rtEndDate + u),
                lt && ((Qt = at.rtEndDate - j), tt - 1 >= 0))
              ) {
                const et = T[tt - 1];
                (0, M.Z6)(et.discountEventID)?.collision_type != U.Lg &&
                  (Qt = Math.max(Qt, et.rtEndDate + u));
              }
              const dt = (0, e.M)(Qt);
              dt - Qt <= V.Kp.PerHour * 2 && (Qt = dt);
            }
            const ht = (0, e.M)(C + V.Kp.PerYear / 2);
            if (Qt + V.Kp.PerDay < ht) {
              const tt = {
                bIsAvailable: !0,
                rtStartDate: Qt,
                rtEndDate: ht,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  l,
                  Qt,
                  ht,
                ),
              };
              Ct.push(tt), tt.rgDiscountEventIDs.forEach((at) => se.add(at));
            }
            const Dt = (0, M.E1)().filter(
              (tt) =>
                tt.collision_type == U.Lg &&
                !se.has(tt.id) &&
                this.m_mapPackageStateForDiscountEvents.get(l).get(tt.id)
                  .eState == G,
            );
            for (const tt of Dt)
              for (let at = 0; at < Ct.length; at++)
                if (
                  Ct[at].rtStartDate <= tt.start_date &&
                  (at == Ct.length - 1 ||
                    tt.start_date < Ct[at + 1].rtStartDate)
                ) {
                  const ot = {
                    bIsAvailable: !0,
                    bMajorSaleOnly: !0,
                    rtStartDate: tt.start_date,
                    rtEndDate: tt.end_date,
                    rgDiscountEventIDs: [tt.id],
                  };
                  Ct.splice(at + 1, 0, ot);
                  break;
                }
            return Ct;
          }
        }
        function b(S, l, v) {
          let w = G;
          const T = [];
          let C = !1;
          if (N.A.Get().GetPackage(S)?.GetReleaseDateRTime() > l.start_date - u)
            return (
              (w = ct),
              {
                ePackageDiscountState: w,
                rgConflictingDiscounts: T,
                bChangedLocally: C,
              }
            );
          if ((0, M.zL)(S) > l.start_date - u)
            return (
              (w = nt),
              {
                ePackageDiscountState: w,
                rgConflictingDiscounts: T,
                bChangedLocally: C,
              }
            );
          for (const Xt of v) {
            if (l.id == Xt.discountEventID) continue;
            const ae = (0, p.E7)(Xt.discountEventID),
              Ct = l.collision_type == U.Lg || ae?.collision_type == U.Lg,
              se = Ct ? l.start_date + j : l.start_date - u,
              Qt = Ct ? l.end_date - j : l.end_date + u;
            if (Xt.rtEndDate > se && Qt > Xt.rtStartDate) {
              if (((C = C || Xt.bChangedLocally), Xt.nDiscountPct == 0))
                continue;
              T.push(Xt), (w = Ct ? rt : _);
            }
          }
          return {
            ePackageDiscountState: w,
            rgConflictingDiscounts: T,
            bChangedLocally: C,
          };
        }
        function L(S, l, v, w, T) {
          let C = A,
            P;
          if (l)
            (P = l.get(S)),
              !P || P.restricted || P.pruned
                ? ((C = J), (P = { restricted: !0 }))
                : P.opt_in
                  ? (C = G)
                  : P.invited || !P.time_opted_in
                    ? (C = h)
                    : (C = $);
          else if (!w.nBaseAppID) {
            const Bt = v
              .GetIncludedAppIDs()
              .map((Xt) =>
                F.uL
                  .Get()
                  .GetOptInRegistrationAndEligibilityForApp(Xt)
                  ?.get(T.opt_in_name),
              )
              .filter(Boolean);
            Bt.some((Xt) => Xt.opt_in)
              ? (C = G)
              : Bt.some((Xt) => !Xt.restricted && !Xt.pruned) && (C = R);
          }
          return { ePackageDiscountState: C, optInRegistration: P };
        }
        function g(S, l) {
          if (S.appids?.length > 0) {
            if (l?.GetIncludedAppIDs()?.length) {
              const v = new Set(S.appids);
              for (const w of l.GetIncludedAppIDs()) {
                if (v.has(w)) return !1;
                const T = N.A.Get().GetApp(w)?.GetParentAppID();
                if (T && v.has(T)) return !1;
              }
            }
            return !0;
          }
          return !1;
        }
        function n(S, l) {
          if (S.packageID != l.packageID) {
            const v = N.A.Get().GetPackage(S.packageID)?.GetName(),
              w = N.A.Get().GetPackage(l.packageID)?.GetName();
            return (0, W.kd)(v, w);
          } else {
            const v = S.nDiscountPct == 0,
              w = l.nDiscountPct == 0;
            return v != w ? (v ? -1 : 1) : S.rtStartDate - l.rtStartDate;
          }
        }
        function i() {
          return E.useCallback(() => {
            f.Get();
          }, []);
        }
        function s() {
          const [S, l] = E.useState(f.IsInitialized());
          return (0, I.hL)(f.s_initializationCallbackList, l), S;
        }
        function o() {
          const [S, l] = E.useState(f.Get().GetLocalPackageDiscountOverrides());
          return (
            (0, I.hL)(f.Get().GetLocalPackageDiscountOverrideCallbackList(), l),
            S
          );
        }
        function a() {
          return E.useCallback(
            () => f.Get().GetLocalPackageDiscountOverrides()?.length > 0,
            [],
          );
        }
        function D() {
          return E.useCallback(
            (S) => f.Get().DiscardAllLocalPackageDiscountOverrides(S),
            [],
          );
        }
        function B() {
          return E.useCallback(
            (S, l) => f.Get().OptInRegistrationUpdatedForApp(S, l),
            [],
          );
        }
        function O() {
          return E.useCallback(
            (S, l) => f.Get().DiscardLocalPackageDiscountOverride(S, l),
            [],
          );
        }
        function Z(S, l) {
          const v = f.Get().m_mapPackageStateForDiscountEvents.get(S)?.get(l);
          return v?.eState == G ? (v?.discount?.nDiscountPct ?? 0) : null;
        }
        function q(S, l) {
          const [v, w] = E.useState(() =>
            f.Get().m_mapPackageStateForDiscountEvents.get(S)?.get(l),
          );
          (0, I.hL)(f.Get().GetDiscountGridCellCallbackList(S, l), w);
          const T = E.useCallback(
            (C) => {
              f.Get().OverridePackageDiscountPct(S, l, C);
            },
            [S, l],
          );
          return { packageState: v, fnSetDiscountPct: T };
        }
        function _t() {
          return E.useCallback((S, l, v) => {
            const w = [];
            for (const T of v) {
              const C = f.Get().OverridePackageDiscountPct(T, l, S);
              C && w.push(C);
            }
            return w;
          }, []);
        }
        function X(S) {
          const l = It(S);
          return E.useMemo(
            () => ({
              nAlreadySet: l.alreadySet.size,
              nAvailable: l.available.size,
              nConflicts: l.conflicts.size,
              nNeedRegistration: l.needRegistration.size,
              nIneligibile: l.ineligibile.size,
            }),
            [l],
          );
        }
        function It(S) {
          const [l, v] = E.useState(() => ie(S)),
            w = E.useCallback(() => {
              v(ie(S));
            }, [S]);
          return (
            E.useEffect(w, [S, w]),
            (0, I.hL)(f.Get().GetDiscountEventColumnCallbackList(S), w),
            l
          );
        }
        function ie(S) {
          const l = f.Get().GetAllPackageStatesForDiscountEvent(S),
            v = {
              alreadySet: new Set(),
              available: new Set(),
              conflicts: new Set(),
              needRegistration: new Set(),
              ineligibile: new Set(),
            };
          for (const w of l)
            switch (w?.eState) {
              case Q:
                break;
              case G:
                (w.discount?.nDiscountPct ?? 0) > 0
                  ? v.alreadySet.add(w.packageID)
                  : v.available.add(w.packageID);
                break;
              case ct:
              case nt:
              case _:
              case rt:
                v.conflicts.add(w.packageID);
                break;
              case h:
              case $:
                v.needRegistration.add(w.packageID);
                break;
              case J:
              case A:
              case k:
                v.ineligibile.add(w.packageID);
                break;
            }
          return v;
        }
        function te(S) {
          return !!(
            (0, x.$U)(S).some((l) => l.nDiscountPct > 0) ||
            (f.IsInitialized() &&
              f
                .Get()
                .GetAllPackageStatesForDiscountEvent(S)
                .some((l) => (l.discount?.nDiscountPct ?? 0) > 0))
          );
        }
        function ee(S, l = !0) {
          if ((0, x.Ko)(S)) return !0;
          if (!l && S.startsWith("weeklongdeal_")) return !1;
          const v = (0, p.E7)(S);
          if (!v?.opt_in_name) return !0;
          const w = F.uL.Get().GetAllOptInRegistrations(v.opt_in_name);
          return w?.length ? w.some((T) => !T.restricted && !T.pruned) : !1;
        }
        function le(S) {
          const l = s(),
            [v, w] = E.useState(l ? f.Get().GetFutureDiscountRanges(S) : []),
            T = E.useCallback(
              () => w(l ? f.Get().GetFutureDiscountRanges(S) : []),
              [S, l],
            );
          return (
            (0, I.hL)(
              l && f.Get().GetLocalPackageDiscountOverrideCallbackList(),
              T,
            ),
            (0, I.hL)(l && (0, x.iI)(S), T),
            E.useEffect(T, [S, l, T]),
            v
          );
        }
        function me(S) {
          let l = () => f.Get().GetHighestPackageDiscount(S),
            [v, w] = E.useState(l),
            T = E.useCallback(() => {
              w(f.Get().GetHighestPackageDiscount(S));
            }, [S, w]);
          return (0, I.hL)(f.Get().GetDiscountPackageCallbackList(S), T), v;
        }
      },
      75857: (Pt, wt, m) => {
        "use strict";
        m.d(wt, {
          Ad: () => A,
          E1: () => M,
          Fs: () => nt,
          Ix: () => h,
          Jn: () => _,
          Vk: () => K,
          Z6: () => Q,
          dp: () => $,
          ou: () => G,
          ry: () => N,
          u7: () => ct,
          v8: () => Y,
          zL: () => V,
        });
        var U = m(90626),
          p = m(7582),
          F = m(8323),
          x = m(54963),
          d = m(3166),
          c = m(26765),
          e = m(15659),
          E = m(55541);
        const Y = "deepest-past",
          N = "most-recent",
          K = "next-available",
          I = "related-discount-view";
        class W {
          m_rgDiscountEvents;
          m_mapDiscountEventsByID = new Map();
          m_discountEventsCallbackList = new F.lu();
          m_mapLastTimeRaisedPrices = new Map();
          m_strSelectedDiscountEventID = null;
          m_bIncludeWeeklongEvents = !1;
          m_bIncludeCustomEvents = !0;
          m_bIncludeIneligibleEvents = !1;
          m_bIncludeConflictsInSingleEventView = !0;
          m_bEditingDailyDealDiscount = !1;
          m_eRelatedDiscountView = Y;
          m_RelatedDiscountViewCallbackList = new F.lu();
          m_gridEventSelectionParametersCallbackList = new F.lu();
          m_setVisibleDiscountEventIDs = new Set();
          m_visibleDiscountEventIDsCallbackList = new F.lu();
          static s_Singleton;
          static Get() {
            return (
              W.s_Singleton ||
                ((W.s_Singleton = new W()), W.s_Singleton.Init()),
              W.s_Singleton
            );
          }
          constructor() {}
          Init() {
            const k = (0, d.Tc)("price_increase_times", "application_config");
            if (this.BIsPriceIncreasePayloadValid(k))
              for (let R in k)
                this.m_mapLastTimeRaisedPrices.set(Number(R), k[R]);
            (this.m_eRelatedDiscountView = window.localStorage.getItem(I) ?? Y),
              this.UpdateDiscountEventsForGrid(),
              (0, c.yB)().Register(() => this.UpdateDiscountEventsForGrid()),
              (0, e.w8)().Register(() => this.UpdateDiscountEventsForGrid()),
              this.SetEventSelectionParametersFromURL(),
              this.UpdateVisibleDiscountEventIDs();
          }
          UpdateDiscountEventsForGrid() {
            const k = (0, c.tW)(),
              R = (0, e.Mh)(),
              it = new Set(k.map((u) => u.id)),
              qt = [],
              H = (0, p.sB)();
            for (const u of R)
              u.rtEndDate > H &&
                (it.has(u.discountEventID) ||
                  (qt.push({
                    id: u.discountEventID,
                    name: u.strDiscountName,
                    start_date: u.rtStartDate,
                    end_date: u.rtEndDate,
                    description: u.strDiscountDescription,
                  }),
                  it.add(u.discountEventID)));
            (!this.m_rgDiscountEvents ||
              it.size != this.m_rgDiscountEvents.length ||
              this.m_rgDiscountEvents.some((u) => !it.has(u.id))) &&
              ((this.m_rgDiscountEvents = qt.concat(k)),
              this.m_rgDiscountEvents.sort((u, j) =>
                u.start_date == j.start_date
                  ? u.end_date - j.end_date
                  : u.start_date - j.start_date,
              ),
              (this.m_mapDiscountEventsByID = new Map(
                this.m_rgDiscountEvents.map((u) => [u.id, u]),
              )),
              this.UpdateVisibleDiscountEventIDs(),
              this.m_discountEventsCallbackList.Dispatch(
                this.m_rgDiscountEvents,
              ));
          }
          UpdateVisibleDiscountEventIDs() {
            this.SetEventSelectionParametersFromURL(),
              (this.m_setVisibleDiscountEventIDs = new Set());
            for (const k of this.m_rgDiscountEvents) {
              let R = this.m_strSelectedDiscountEventID == null;
              R && !this.m_bIncludeCustomEvents && (0, e.Ko)(k.id) && (R = !1),
                R &&
                  !this.m_bIncludeWeeklongEvents &&
                  k.id.startsWith("weeklongdeal_") &&
                  !(0, E._9)(k.id) &&
                  (R = !1),
                R &&
                  !this.m_bIncludeIneligibleEvents &&
                  !(0, E.wk)(k.id) &&
                  (R = !1),
                this.m_strSelectedDiscountEventID == k.id && (R = !0),
                R && this.m_setVisibleDiscountEventIDs.add(k.id);
            }
            this.m_visibleDiscountEventIDsCallbackList.Dispatch(
              this.m_setVisibleDiscountEventIDs,
            );
          }
          BIsPriceIncreasePayloadValid(k) {
            const R = k;
            if (R && typeof R == "object") {
              for (let it in R)
                if (isNaN(parseInt(it)) || typeof R[it] != "number") return !1;
              return !0;
            }
            return !1;
          }
          SetEventSelectionParametersFromURL() {
            const k = new URLSearchParams(window.location.search);
            if (k.has("de")) {
              const R = decodeURIComponent(k.get("de"));
              this.m_mapDiscountEventsByID.has(R) &&
                (this.m_strSelectedDiscountEventID = R);
            }
            if (k.has("wd")) {
              const R = k.get("wd");
              this.m_bIncludeWeeklongEvents = R != "0";
            }
            if (k.has("cd")) {
              const R = k.get("cd");
              this.m_bIncludeCustomEvents = R != "0";
            }
            if (k.has("cf")) {
              const R = k.get("cf");
              this.m_bIncludeConflictsInSingleEventView = R != "0";
            }
            if (k.has("dd")) {
              const R = k.get("dd");
              this.m_bEditingDailyDealDiscount = R != "0";
            }
          }
          HandleEventSelectionChangeAndNotifyListeners() {
            const k = new URL(window.location.href);
            this.m_strSelectedDiscountEventID
              ? k.searchParams.set(
                  "de",
                  encodeURIComponent(this.m_strSelectedDiscountEventID),
                )
              : k.searchParams.delete("de"),
              this.m_bIncludeWeeklongEvents
                ? k.searchParams.set("wd", "1")
                : k.searchParams.delete("wd"),
              this.m_bIncludeCustomEvents
                ? k.searchParams.delete("cd")
                : k.searchParams.set("cd", "0"),
              this.m_bIncludeConflictsInSingleEventView
                ? k.searchParams.delete("cf")
                : k.searchParams.set("cf", "0"),
              this.m_bEditingDailyDealDiscount &&
                ((this.m_bEditingDailyDealDiscount = !1),
                k.searchParams.delete("dd")),
              window.history.replaceState({}, "", k.toString()),
              this.UpdateVisibleDiscountEventIDs(),
              this.m_gridEventSelectionParametersCallbackList.Dispatch(
                this.GetEventSelectionParameters(),
              );
          }
          GetEventSelectionParameters() {
            return {
              bSingleDiscountEventView:
                this.m_strSelectedDiscountEventID != null,
              strSelectedEvent: this.m_strSelectedDiscountEventID,
              bEditingDailyDealDiscount: this.m_bEditingDailyDealDiscount,
              fnSelectEvent: (k) => {
                (this.m_strSelectedDiscountEventID = k),
                  this.HandleEventSelectionChangeAndNotifyListeners();
              },
              bIncludeWeeklongEvents: this.m_bIncludeWeeklongEvents,
              fnSetIncludeWeeklongEvents: (k) => {
                (this.m_bIncludeWeeklongEvents = k),
                  this.HandleEventSelectionChangeAndNotifyListeners();
              },
              bIncludeCustomEvents: this.m_bIncludeCustomEvents,
              fnSetIncludeCustomEvents: (k) => {
                (this.m_bIncludeCustomEvents = k),
                  this.HandleEventSelectionChangeAndNotifyListeners();
              },
              bIncludeConflictsInSingleEventView:
                this.m_bIncludeConflictsInSingleEventView,
              fnSetIncludeConflictsInSingleEventView: (k) => {
                (this.m_bIncludeConflictsInSingleEventView = k),
                  this.HandleEventSelectionChangeAndNotifyListeners();
              },
            };
          }
        }
        function V(rt) {
          return W.Get().m_mapLastTimeRaisedPrices.get(rt) ?? 0;
        }
        function M() {
          return W.Get().m_rgDiscountEvents;
        }
        function Q(rt) {
          return W.Get().m_mapDiscountEventsByID.get(rt);
        }
        function G() {
          return W.Get().m_discountEventsCallbackList;
        }
        function h() {
          const [rt, k] = U.useState(W.Get().m_rgDiscountEvents);
          return (0, x.hL)(W.Get().m_discountEventsCallbackList, k), rt;
        }
        function $() {
          const [rt, k] = U.useState(W.Get().m_setVisibleDiscountEventIDs);
          return (
            (0, x.hL)(W.Get().m_visibleDiscountEventIDsCallbackList, k), rt
          );
        }
        function J(rt = !0) {
          return W.Get().m_setVisibleDiscountEventIDs;
        }
        function A(rt) {
          const [k, R] = U.useState(W.Get().m_mapDiscountEventsByID.get(rt)),
            it = U.useCallback(
              () => R(W.Get().m_mapDiscountEventsByID.get(rt)),
              [rt],
            );
          return (
            (0, x.hL)(W.Get().m_discountEventsCallbackList, it),
            U.useEffect(it, [rt, it]),
            k
          );
        }
        function ct(rt = !0) {
          const [k, R] = U.useState(W.Get().GetEventSelectionParameters()),
            it = rt ? W.Get().m_gridEventSelectionParametersCallbackList : null;
          return (0, x.hL)(it, R), k;
        }
        function nt() {
          const [rt, k] = U.useState(W.Get().m_eRelatedDiscountView);
          (0, x.hL)(W.Get().m_RelatedDiscountViewCallbackList, k);
          const R = U.useCallback((it) => {
            (W.Get().m_eRelatedDiscountView = it),
              window.localStorage.setItem(I, it),
              W.Get().m_RelatedDiscountViewCallbackList.Dispatch(it);
          }, []);
          return [rt, R];
        }
        function _() {
          return U.useCallback(() => {
            W.Get().UpdateVisibleDiscountEventIDs();
          }, []);
        }
      },
      95146: (Pt, wt, m) => {
        "use strict";
        m.d(wt, {
          HA: () => h,
          IR: () => u,
          NP: () => it,
          Xr: () => j,
          ZN: () => H,
          mE: () => k,
          rK: () => $,
          sF: () => R,
          uv: () => _,
        });
        var U = m(7850),
          p = m(90626),
          F = m(71421),
          x = m(3166),
          d = m(18210),
          c = m(61010),
          e = m.n(c),
          E = m(75233),
          Y = m(37424),
          N = m(64238),
          K = m.n(N),
          I = m(15659),
          W = m(55541),
          V = m(249),
          M = m(36118),
          Q = m(601);
        const G = (0, p.createContext)(void 0);
        function h() {
          const f = (0, p.useContext)(G);
          if (!f) throw new Error("Missing GridRowContextProvider");
          return f;
        }
        function $(f) {
          const { children: b, fnBLocalChangesExist: L, fnWarnUser: g } = f,
            n = (0, E.jE)(),
            i = p.useMemo(
              () => ({ client: n, fnBLocalChangesExist: L, fnWarnUser: g }),
              [L, g, n],
            );
          return (0, U.jsx)(G.Provider, { value: i, children: b });
        }
        function J(f) {
          const { row: b } = f,
            L = b.original.packageID || 0,
            g = (0, W.C5)(L);
          let i = (0, I.$p)(L) < g,
            s = K()(
              e().PackageNameColumn,
              i && e().PackagePricesBelowMin,
              b.original.packageType,
            ),
            o = i
              ? (0, d.we)("#PackageGrid_VisitPackageDiscount_Tooltip_Error")
              : (0, d.we)("#PackageGrid_VisitPackagePricing_Tooltip");
          return (0, U.jsx)(nt, { className: s, toolTip: o, ...f });
        }
        function A(f) {
          const { row: b } = f,
            L = b.original.packageID || 0,
            g = (0, Y.nT)(L);
          let n = K()(
              e().PackageNameColumn,
              g && e().PackagePricesBelowMin,
              b.original.packageType,
            ),
            i = g
              ? (0, d.we)("#PackageGrid_VisitPackagePricing_Tooltip_Error")
              : (0, d.we)("#PackageGrid_VisitPackagePricing_Tooltip");
          return (0, U.jsx)(nt, {
            className: n,
            toolTip: i,
            showUnreleased: !0,
            ...f,
          });
        }
        function ct(f) {
          const { column: b } = f,
            [L, g] = (0, p.useState)(b.getFilterValue() ?? "");
          return (0, U.jsxs)("div", {
            className: e().PackageNameHeader,
            children: [
              (0, d.we)("#PackageGrid_Column_PackageName"),
              (0, U.jsx)("input", {
                placeholder: (0, d.we)(
                  "#PackageGrid_PackageNameFilterInputPrompt",
                ),
                value: L,
                onChange: (n) => {
                  g(n.target.value.toString()),
                    (0, p.startTransition)(() =>
                      f.column.setFilterValue(n.target.value.toString()),
                    );
                },
              }),
            ],
          });
        }
        function nt(f) {
          const { fnBLocalChangesExist: b, fnWarnUser: L } = h(),
            { cell: g, row: n, className: i, toolTip: s } = f,
            o = n.original.packageID,
            a =
              g.getValue() ??
              (0, U.jsxs)("span", {
                className: e().UnknownValue,
                children: [" ", (0, d.we)("#PackageGrid_PackageID", o)],
              });
          return (0, U.jsxs)(j, {
            fnBLocalChangesExist: b,
            fnWarnUser: L,
            href: `${x.TS.PARTNER_BASE_URL}store/packagelanding/${o}`,
            strToolTip: s,
            strClassName: i,
            children: [
              (0, U.jsx)(M.eTF, {
                color: "rgb(194, 45, 0)",
                className: e().PriceWarningBad,
              }),
              f.showUnreleased &&
                !("released" in n.original && n.original.released) &&
                (0, U.jsxs)(U.Fragment, {
                  children: [
                    (0, U.jsx)(F.Gq, {
                      toolTipContent: (0, d.we)(
                        "#PackageGrid_PackageUnpublishedTooltip",
                      ),
                      children: (0, U.jsx)(V.ZyV, {
                        width: "14px",
                        height: "14px",
                      }),
                    }),
                    " \xA0",
                  ],
                }),
              " ",
              a,
            ],
          });
        }
        function _() {
          return p.useMemo(
            () => ({
              accessorKey: "packageID",
              header: (0, d.we)("#PackageGrid_Column_PackageID"),
              enableSorting: !1,
              size: 90,
              cell: (f) =>
                (0, U.jsx)(nt, {
                  ...f,
                  toolTip: (0, d.we)("#PackageGrid_Column_PackageID_ttip"),
                }),
              meta: { cellClassname: e().PackageID },
            }),
            [],
          );
        }
        function rt(f, b, L) {
          let g = /^\d+$/.test(L);
          const n = f.original.packageID;
          return g && n && n.toString().startsWith(L)
            ? !0
            : f.getValue(b).toLowerCase().includes(L.toLowerCase());
        }
        function k(f) {
          return p.useMemo(
            () => ({
              accessorKey: "packageName",
              header: ct,
              enableSorting: !1,
              meta: {
                strHeaderTooltip: (0, d.we)(
                  "#PackageGrid_Column_PackageName_ttip",
                ),
                cellClassname: e().PackageName,
              },
              filterFn: rt,
              cell: f ? J : A,
              size: 300,
            }),
            [f],
          );
        }
        function R() {
          return p.useMemo(() => ({ accessorKey: "appids" }), []);
        }
        function it() {
          return p.useMemo(
            () => ({
              accessorKey: "packageType",
              header: (0, d.we)("#PackageGrid_Column_PackageType"),
              enableSorting: !1,
              meta: {
                strHeaderTooltip: (0, d.we)(
                  "#PackageGrid_Column_PackageType_ttip",
                ),
                cellClassname: e().PackageType,
              },
            }),
            [],
          );
        }
        function qt(f) {
          const { row: b } = f,
            { fnBLocalChangesExist: L, fnWarnUser: g } = h(),
            i = b.original.appids?.length ?? 0,
            s = b.original.packageID;
          return (0, U.jsx)(j, {
            fnBLocalChangesExist: L,
            fnWarnUser: g,
            href: `${x.TS.PARTNER_BASE_URL}store/packagelanding/${s}`,
            strToolTip: (0, d.we)("#PackageGrid_VisitPackagePricing_Tooltip"),
            children: i == 1 ? "1 appid" : i + " appids",
          });
        }
        function H() {
          return p.useMemo(
            () => ({
              accessorKey: "appName",
              header: (0, d.we)("#PackageGrid_Column_AppName"),
              cell: qt,
              size: 80,
              sortingFn: Q.es,
              meta: {
                strHeaderTooltip: (0, d.we)("#PackageGrid_Column_AppName_ttip"),
                bDisableSortButton: !0,
                cellClassname: e().AppCount,
              },
            }),
            [],
          );
        }
        function u(f) {
          const b = f.groupingValue,
            L = (0, d.we)("#PackageGrid_NoBaseGameFoundForPackage");
          return (0, U.jsxs)(U.Fragment, {
            children: [
              b === L
                ? (0, U.jsxs)("span", {
                    title: (0, d.we)("#PackageGrid_NoBaseGameExplanation"),
                    children: [b, " (?)"],
                  })
                : b,
              (0, U.jsxs)("span", {
                className: e().RowItemCount,
                children: [
                  "(",
                  (0, d.Yp)("#PackageGrid_PackageCount", f.subRows.length),
                  ")",
                ],
              }),
            ],
          });
        }
        function j(f) {
          const {
              fnBLocalChangesExist: b,
              fnWarnUser: L,
              href: g,
              children: n,
              strToolTip: i,
              strClassName: s,
            } = f,
            o = (a) => {
              b() && (a.preventDefault(), L(a, g));
            };
          return (0, U.jsx)(F.he, {
            toolTipContent: i,
            className: s,
            children: (0, U.jsx)("a", { onClick: o, href: g, children: n }),
          });
        }
      },
      40396: (Pt, wt, m) => {
        "use strict";
        m.d(wt, { h: () => F });
        var U = m(90626),
          p = m(18210);
        function F(x) {
          const d = U.useCallback(
            (c) => {
              if (x())
                return (
                  c.preventDefault(),
                  (c.returnValue = (0, p.we)(
                    "#PackageGrid_NavigationWarning_Title",
                  )),
                  c.returnValue
                );
            },
            [x],
          );
          U.useEffect(
            () => (
              window.addEventListener("beforeunload", d),
              () => window.removeEventListener("beforeunload", d)
            ),
            [d],
          );
        }
      },
      11636: (Pt, wt, m) => {
        "use strict";
        m.d(wt, { Hf: () => Y, i$: () => e, qP: () => d });
        var U = m(72604),
          p = m(3367),
          F = m(10142),
          x = m(18210);
        const d = new Set([p.uE.HT, p.uE.RA, p.uE.Sv, p.uE.Lj]),
          c = new Set([p.uE._i, p.uE.Wz, p.uE.Ov]);
        function e(N) {
          let K = !1,
            I = !1,
            W;
          const V = new Set();
          for (const G of N?.GetIncludedAppIDs() ?? []) {
            const h = F.A.Get().GetApp(G);
            if (h && d.has(h.GetAppType())) (K = !0), V.add(h.GetID());
            else if (h && c.has(h.GetAppType())) {
              I = !0;
              const $ = h.GetParentAppID();
              $ && V.add($);
            }
          }
          let M = null;
          return (
            V.size == 1
              ? ((W = Array.from(V)[0]), (M = F.A.Get().GetApp(W)?.GetName()))
              : V.size > 1 &&
                (M = (0, x.we)(
                  "#PackageGrid_MultipleBaseGamesFoundForPackage",
                )),
            M || (M = (0, x.we)("#PackageGrid_NoBaseGameFoundForPackage")),
            {
              baseAppName: M,
              contents: K && I ? "BOTH" : K ? "GAME" : I ? "DLC" : null,
              nBaseAppID: W,
            }
          );
        }
        const E = { include_release: !0 };
        async function Y(N, K) {
          if (
            (await F.A.Get().HintLoadStorePackages(N, E)) != U.R ||
            K.token.reason
          )
            return null;
          const W = [];
          N.map((J) => F.A.Get().GetPackage(J))
            .filter((J) => !!J)
            .forEach((J) => W.push(...J.GetIncludedAppIDs()));
          const V = Array.from(new Set(W));
          if (
            (await F.A.Get().HintLoadStoreApps(V, E)) != U.R ||
            K.token.reason
          )
            return null;
          const Q = V.map((J) => F.A.Get().GetApp(J))
              .filter((J) => !!J?.GetParentAppID())
              .map((J) => J.GetParentAppID()),
            G = Array.from(new Set(Q));
          return (await F.A.Get().HintLoadStoreApps(G, E)) != U.R ||
            K.token.reason
            ? null
            : Array.from(new Set(V.concat(G)));
        }
      },
      4886: (Pt, wt, m) => {
        "use strict";
        m.d(wt, {
          AM: () => e,
          Cp: () => d,
          G6: () => x,
          KD: () => c,
          Mc: () => p,
          ZC: () => F,
        });
        var U = m(45926);
        function p(E) {
          if (E?.jsondata?.rtime_discount_intent)
            return !!E.no_planned_discount;
        }
        function F(E) {
          if (!E?.jsondata?.rtime_ask_again) return;
          const Y = Number(E.jsondata.ask_again_season),
            N = Number(E.jsondata.ask_again_year);
          return !(Y >= U.BI.jZ && Y <= U.BI.Fi) || !(N > 0)
            ? null
            : { season: Y, year: N };
        }
        function x(E, Y) {
          return {
            opt_in_name: Y,
            opt_in: !1,
            appid: E,
            jsondata: { opt_in_name: Y, opt_in: !1 },
          };
        }
        function d(E) {
          return !!(E?.pruned && E.jsondata?.pruned_reason === "released");
        }
        function c(E, Y, N) {
          const K = E?.find((V) => V.section_id == Y),
            W = (Array.isArray(K?.list_selection) ? K.list_selection : []).find(
              (V) => V.list_id == N,
            )?.selected_item_id;
          return W && W.length > 0 && W[0] != null ? W : [];
        }
        function e(E, Y, N, K) {
          const I = (E ?? []).filter((M) => M.section_id != Y),
            W = E?.find((M) => M.section_id == Y),
            V = Array.isArray(W?.list_selection) ? W.list_selection : [];
          return (
            I.push({
              ...W,
              section_id: Y,
              list_selection: [
                ...V.filter((M) => M.list_id != N),
                { list_id: N, selected_item_id: [...K] },
              ],
            }),
            I
          );
        }
      },
      70171: (Pt, wt, m) => {
        "use strict";
        m.d(wt, {
          DX: () => ut,
          Ho: () => vt,
          hp: () => zt,
          xE: () => St,
          mQ: () => Et,
          vt: () => yt,
          lr: () => kt,
          tY: () => Lt,
          KQ: () => et,
          vm: () => p,
          K1: () => x,
          Y2: () => F,
          Tj: () => U,
          nY: () => ue,
        });
        var U = {};
        m.r(U), m.d(U, { _: () => Y });
        var p = {};
        m.r(p), m.d(p, { Tn: () => I, n$: () => W });
        var F = {};
        m.r(F),
          m.d(F, {
            ru: () => V,
            Hd: () => rt,
            n5: () => k,
            mC: () => nt,
            x4: () => _,
            cJ: () => M,
            J5: () => Q,
            tx: () => $,
            ao: () => J,
            _g: () => A,
            y5: () => ct,
            nH: () => h,
          });
        var x = {};
        m.r(x),
          m.d(x, {
            RM: () => it,
            dk: () => a,
            Ng: () => o,
            Mc: () => g,
            pF: () => R,
            EE: () => u,
            nT: () => j,
            CI: () => qt,
            _j: () => n,
            UM: () => L,
            K2: () => H,
            E0: () => B,
            iY: () => i,
            sR: () => D,
            rQ: () => s,
          });
        var d = m(80613),
          c = m.n(d),
          e = m(75245),
          E = m(35038);
        const Y = 0,
          N = 1,
          K = 0,
          I = 1,
          W = 2,
          V = 1,
          M = 2,
          Q = 4,
          G = 8,
          h = 16,
          $ = 32,
          J = 64,
          A = 128,
          ct = 256,
          nt = 512,
          _ = 1024,
          rt = 2048,
          k = 4096,
          R = 0,
          it = 1,
          qt = 2,
          H = 4,
          u = 8,
          j = 16,
          f = 32,
          b = 64,
          L = 128,
          g = 256,
          n = 512,
          i = 1024,
          s = 2048,
          o = 4096,
          a = 8192,
          D = 16384,
          B = 32768;
        function O(z) {
          return "unknown EPartnerEmailNotifcationType ( " + z + " )";
        }
        function Z(z) {
          return "unknown EMembershipEvent ( " + z + " )";
        }
        function q(z) {
          return "unknown EBetaProgram ( " + z + " )";
        }
        function _t(z) {
          return "unknown ENavigationDeviceType ( " + z + " )";
        }
        function X(z) {
          return "unknown EAppCreationCreditStatus ( " + z + " )";
        }
        function It(z) {
          return "unknown EAppCreationCreditType ( " + z + " )";
        }
        function ie(z) {
          return "unknown EAppReportingPlatform ( " + z + " )";
        }
        function te(z) {
          return "unknown EReleaseRequestState ( " + z + " )";
        }
        function ee(z) {
          return "unknown EPartnerNotesType ( " + z + " )";
        }
        function le(z) {
          return "unknown EDocumentationFileType ( " + z + " )";
        }
        function me(z) {
          return "unknown EUpdateBooleanField ( " + z + " )";
        }
        function S(z) {
          return "unknown EPartnerProjectSurveyType ( " + z + " )";
        }
        function l(z) {
          return "unknown EAppCapability ( " + z + " )";
        }
        function v(z) {
          return "unknown EAppTransferState ( " + z + " )";
        }
        function w(z) {
          return "unknown ETF2BlogPostType ( " + z + " )";
        }
        function T(z) {
          return "unknown EPartnerAppOptInType ( " + z + " )";
        }
        function C(z) {
          return "unknown EPartnerOptInVisibility ( " + z + " )";
        }
        function P(z) {
          return "unknown EPartnerAppOptInAppealState ( " + z + " )";
        }
        function Bt(z) {
          return "unknown EPartnerAppOptInEmailTargeting ( " + z + " )";
        }
        function Xt(z) {
          return "unknown EPartnerAppOptInEmailSettings ( " + z + " )";
        }
        function ae(z) {
          return "unknown EPartnerAppOptInLLMRejection ( " + z + " )";
        }
        function Ct(z) {
          return "unknown EPartnerAppOptInLLMCriteriaSource ( " + z + " )";
        }
        function se(z) {
          return "unknown EPartnerAppOptInHumanDecision ( " + z + " )";
        }
        function Qt(z) {
          return "unknown EPartnerAppOptInLLMPopulation ( " + z + " )";
        }
        function ht(z) {
          return "unknown EAppTrafficStatAttribution ( " + z + " )";
        }
        function Dt(z) {
          return "unknown EPartnerMembershipInviteState ( " + z + " )";
        }
        function tt(z) {
          return "unknown EAppShareState ( " + z + " )";
        }
        function at(z) {
          return "unknown ECommunicationInviteState ( " + z + " )";
        }
        class ot extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ot.prototype.packageids || e.Sg(ot.M()),
              d.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    packageids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = e.w0(ot.M())), ot.sm_mbf;
          }
          toObject(t = !1) {
            return ot.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(ot.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(ot.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new ot();
            return ot.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(ot.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(ot.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerPaidGivenPackageList_Request";
          }
        }
        class st extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              st.prototype.paid || e.Sg(st.M()),
              d.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: { paid: { n: 1, c: lt, r: !0, q: !0 } },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = e.w0(st.M())), st.sm_mbf;
          }
          toObject(t = !1) {
            return st.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(st.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(st.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new st();
            return st.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(st.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(st.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerPaidGivenPackageList_Response";
          }
        }
        class lt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              lt.prototype.partnerid || e.Sg(lt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    packageid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = e.w0(lt.M())), lt.sm_mbf;
          }
          toObject(t = !1) {
            return lt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(lt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(lt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new lt();
            return lt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(lt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(lt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair";
          }
        }
        class ut extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ut.prototype.opt_in_name || e.Sg(ut.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    opt_in_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    targeting_flag: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    settings_flag: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    email_templates: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    start_rtime: {
                      n: 5,
                      d: 0,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    end_rtime: {
                      n: 6,
                      d: 0,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = e.w0(ut.M())), ut.sm_mbf;
          }
          toObject(t = !1) {
            return ut.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(ut.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(ut.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new ut();
            return ut.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(ut.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(ut.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_CreatePartnerAppOptInEmail_Request";
          }
        }
        class dt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              dt.prototype.email_def_id || e.Sg(dt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    email_def_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = e.w0(dt.M())), dt.sm_mbf;
          }
          toObject(t = !1) {
            return dt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(dt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(dt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new dt();
            return dt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(dt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(dt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_CreatePartnerAppOptInEmail_Response";
          }
        }
        class et extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              et.prototype.email_def_id || e.Sg(et.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    email_def_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    targeting_flag: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    settings_flag: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    email_templates: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    start_rtime: {
                      n: 5,
                      d: 0,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    end_rtime: {
                      n: 6,
                      d: 0,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    reviewed: {
                      n: 7,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = e.w0(et.M())), et.sm_mbf;
          }
          toObject(t = !1) {
            return et.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(et.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(et.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new et();
            return et.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(et.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(et.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_UpdatePartnerAppOptInEmail_Request";
          }
        }
        class re extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return re.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new re();
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new re();
            return re.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return re.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_UpdatePartnerAppOptInEmail_Response";
          }
        }
        class Mt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Mt.prototype.accounts_examined || e.Sg(Mt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    accounts_examined: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    accounts_emailed: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    accounts_not_emailed_opted_out: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    accounts_email_failed: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    completed: { n: 5, br: e.qM.readBool, bw: e.gp.writeBool },
                    rt_last_updated: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = e.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(t = !1) {
            return Mt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Mt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Mt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Mt();
            return Mt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Mt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Mt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerAppOptInEmailStats";
          }
        }
        class yt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              yt.prototype.email_def_id || e.Sg(yt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    email_def_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    force_resend: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = e.w0(yt.M())), yt.sm_mbf;
          }
          toObject(t = !1) {
            return yt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(yt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(yt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new yt();
            return yt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(yt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(yt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_SendPartnerAppOptInEmailAndWait_Request";
          }
        }
        class Tt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Tt.prototype.results || e.Sg(Tt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = { proto: Tt, fields: { results: { n: 1, c: Mt } } }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = e.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(t = !1) {
            return Tt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Tt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Tt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Tt();
            return Tt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Tt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Tt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_SendPartnerAppOptInEmailAndWait_Response";
          }
        }
        class Ut extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ut.prototype.opt_in_name || e.Sg(Ut.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    opt_in_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    targeting_flag: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    settings_flag: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    email_templates: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    start_rtime: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    end_rtime: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    stats: { n: 7, c: Mt },
                    creator_accountid: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    create_time: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    last_update_time: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    email_def_id: {
                      n: 11,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    completed: { n: 12, br: e.qM.readBool, bw: e.gp.writeBool },
                    aborted: { n: 13, br: e.qM.readBool, bw: e.gp.writeBool },
                    deleted: { n: 14, br: e.qM.readBool, bw: e.gp.writeBool },
                    reviewed: { n: 15, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = e.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(t = !1) {
            return Ut.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Ut.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Ut.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Ut();
            return Ut.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Ut.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Ut.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerAppOptInEmailDef";
          }
        }
        class Et extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Et.prototype.opt_in_name || e.Sg(Et.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    opt_in_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = e.w0(Et.M())), Et.sm_mbf;
          }
          toObject(t = !1) {
            return Et.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Et.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Et.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Et();
            return Et.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Et.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Et.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Request";
          }
        }
        class jt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jt.prototype.defs || e.Sg(jt.M()),
              d.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: { defs: { n: 1, c: Ut, r: !0, q: !0 } },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = e.w0(jt.M())), jt.sm_mbf;
          }
          toObject(t = !1) {
            return jt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(jt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(jt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new jt();
            return jt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(jt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(jt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Response";
          }
        }
        class vt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              vt.prototype.email_def_id || e.Sg(vt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    email_def_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = e.w0(vt.M())), vt.sm_mbf;
          }
          toObject(t = !1) {
            return vt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(vt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(vt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new vt();
            return vt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(vt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(vt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetEstimatePartnerAppOptInEmail_Request";
          }
        }
        class bt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              bt.prototype.stats || e.Sg(bt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = { proto: bt, fields: { stats: { n: 1, c: Mt } } }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = e.w0(bt.M())), bt.sm_mbf;
          }
          toObject(t = !1) {
            return bt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(bt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(bt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new bt();
            return bt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(bt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(bt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetEstimatePartnerAppOptInEmail_Response";
          }
        }
        class Lt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Lt.prototype.email_def_id || e.Sg(Lt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: {
                    email_def_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    partnerid: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    language_override: {
                      n: 4,
                      d: 0,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = e.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(t = !1) {
            return Lt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Lt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Lt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Lt();
            return Lt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Lt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Lt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_TestFirePartnerAppOptInEmail_Request";
          }
        }
        class ne extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ne.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new ne();
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new ne();
            return ne.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_TestFirePartnerAppOptInEmail_Response";
          }
        }
        class Ft extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ft.prototype.accountid || e.Sg(Ft.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
                  fields: {
                    accountid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    appid: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    partnerid: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime_notified: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    ignored_unverified_email: {
                      n: 5,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    ignored_email_optout: {
                      n: 6,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    status: { n: 7, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    send_rtime: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = e.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(t = !1) {
            return Ft.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Ft.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Ft.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Ft();
            return Ft.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Ft.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Ft.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerOptInEmailTracking";
          }
        }
        class St extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              St.prototype.email_def_id || e.Sg(St.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    email_def_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = e.w0(St.M())), St.sm_mbf;
          }
          toObject(t = !1) {
            return St.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(St.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(St.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new St();
            return St.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(St.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return St.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(St.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInEmailTracking_Request";
          }
        }
        class Wt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Wt.prototype.email_def_id || e.Sg(Wt.M()),
              d.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
                  fields: {
                    email_def_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    results: { n: 2, c: Ft, r: !0, q: !0 },
                  },
                }),
              Wt.sm_m
            );
          }
          static MBF() {
            return Wt.sm_mbf || (Wt.sm_mbf = e.w0(Wt.M())), Wt.sm_mbf;
          }
          toObject(t = !1) {
            return Wt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Wt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Wt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Wt();
            return Wt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Wt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Wt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInEmailTracking_Response";
          }
        }
        class pt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pt.prototype.appid || e.Sg(pt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    opt_in: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                    opt_in_name: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    jsondata: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    type: { n: 5, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    accountid_add: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    time_opted_in: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    time_updated: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    accountid_lastmod: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    invited: { n: 10, br: e.qM.readBool, bw: e.gp.writeBool },
                    accountid_remove: {
                      n: 11,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    time_opted_out: {
                      n: 12,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    pruned: { n: 13, br: e.qM.readBool, bw: e.gp.writeBool },
                    accountid_prune: {
                      n: 14,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    time_pruned: {
                      n: 15,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    additional_featuring: {
                      n: 16,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    feature_day: {
                      n: 17,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    accountid_invited: {
                      n: 18,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    no_planned_discount: {
                      n: 19,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    pending_review: {
                      n: 20,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    appeal_state: {
                      n: 21,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    accountid_appeal: {
                      n: 22,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    time_appeal_decision: {
                      n: 23,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = e.w0(pt.M())), pt.sm_mbf;
          }
          toObject(t = !1) {
            return pt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(pt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(pt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new pt();
            return pt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(pt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(pt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerAppOptInData";
          }
        }
        class xt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              xt.prototype.appid || e.Sg(xt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    opt_in_name: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = e.w0(xt.M())), xt.sm_mbf;
          }
          toObject(t = !1) {
            return xt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(xt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(xt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new xt();
            return xt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(xt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(xt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetSinglePartnerAppOptIns_Request";
          }
        }
        class Rt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Rt.prototype.data || e.Sg(Rt.M()),
              d.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
                  fields: { data: { n: 1, c: pt, r: !0, q: !0 } },
                }),
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = e.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(t = !1) {
            return Rt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Rt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Rt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Rt();
            return Rt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Rt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Rt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetSinglePartnerAppOptIns_Response";
          }
        }
        class kt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              kt.prototype.appids || e.Sg(kt.M()),
              d.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                    additional_featuring: {
                      n: 2,
                      d: !0,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    opt_in_name: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              kt.sm_m
            );
          }
          static MBF() {
            return kt.sm_mbf || (kt.sm_mbf = e.w0(kt.M())), kt.sm_mbf;
          }
          toObject(t = !1) {
            return kt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(kt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(kt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new kt();
            return kt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(kt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(kt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_SetFeaturingOnPartnerAppOptIn_Request";
          }
        }
        class Nt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Nt.prototype.appids || e.Sg(Nt.M()),
              d.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = e.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(t = !1) {
            return Nt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Nt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Nt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Nt();
            return Nt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Nt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Nt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_SetFeaturingOnPartnerAppOptIn_Response";
          }
        }
        class Kt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Kt.prototype.opt_in_id || e.Sg(Kt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
                  fields: {
                    opt_in_id: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    opt_in_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    type: { n: 2, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    active: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    start_date: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    end_date: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    jsondata: {
                      n: 6,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    last_modified_time: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    last_modifier_accountid: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_next_fest: {
                      n: 10,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    next_fest_out_of_sync: {
                      n: 11,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              Kt.sm_m
            );
          }
          static MBF() {
            return Kt.sm_mbf || (Kt.sm_mbf = e.w0(Kt.M())), Kt.sm_mbf;
          }
          toObject(t = !1) {
            return Kt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Kt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Kt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Kt();
            return Kt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Kt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Kt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "COptInDef";
          }
        }
        class Vt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Vt.prototype.opt_in_name || e.Sg(Vt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
                  fields: {
                    opt_in_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    start: {
                      n: 2,
                      d: 0,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    count: {
                      n: 3,
                      d: 20,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    include_json: {
                      n: 4,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              Vt.sm_m
            );
          }
          static MBF() {
            return Vt.sm_mbf || (Vt.sm_mbf = e.w0(Vt.M())), Vt.sm_mbf;
          }
          toObject(t = !1) {
            return Vt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Vt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Vt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Vt();
            return Vt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Vt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Vt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInHistoryInternal_Request";
          }
        }
        class At extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              At.prototype.opt_ins || e.Sg(At.M()),
              d.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: { opt_ins: { n: 1, c: Kt, r: !0, q: !0 } },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = e.w0(At.M())), At.sm_mbf;
          }
          toObject(t = !1) {
            return At.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(At.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(At.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new At();
            return At.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(At.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return At.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(At.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInHistoryInternal_Response";
          }
        }
        class Ot extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ot.prototype.opt_in_name || e.Sg(Ot.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: {
                    opt_in_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = e.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(t = !1) {
            return Ot.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Ot.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Ot.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Ot();
            return Ot.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Ot.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Ot.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerAppOptInsIDs_Request";
          }
        }
        class Gt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Gt.prototype.opted_in_appids || e.Sg(Gt.M()),
              d.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
                  fields: {
                    opted_in_appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Gt.sm_m
            );
          }
          static MBF() {
            return Gt.sm_mbf || (Gt.sm_mbf = e.w0(Gt.M())), Gt.sm_mbf;
          }
          toObject(t = !1) {
            return Gt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Gt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Gt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Gt();
            return Gt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Gt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Gt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerAppOptInsIDs_Response";
          }
        }
        class zt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              zt.prototype.opt_in_names || e.Sg(zt.M()),
              d.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: {
                    opt_in_names: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readString,
                      bw: e.gp.writeRepeatedString,
                    },
                  },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = e.w0(zt.M())), zt.sm_mbf;
          }
          toObject(t = !1) {
            return zt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(zt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(zt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new zt();
            return zt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(zt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(zt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInAppealsSummaryStats_Request";
          }
        }
        class Ht extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ht.prototype.summary || e.Sg(Ht.M()),
              d.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: { summary: { n: 1, c: Jt, r: !0, q: !0 } },
                }),
              Ht.sm_m
            );
          }
          static MBF() {
            return Ht.sm_mbf || (Ht.sm_mbf = e.w0(Ht.M())), Ht.sm_mbf;
          }
          toObject(t = !1) {
            return Ht.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Ht.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Ht.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Ht();
            return Ht.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Ht.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Ht.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInAppealsSummaryStats_Response";
          }
        }
        class Jt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Jt.prototype.opt_in_name || e.Sg(Jt.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: {
                    opt_in_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    open_appeals: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    reject_appeals: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    accepted_appeals: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    appeal_account_id: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = e.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(t = !1) {
            return Jt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Jt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Jt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Jt();
            return Jt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Jt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Jt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInAppealsSummaryStats_Response_CSummary";
          }
        }
        class $t extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $t.prototype.inviteid || e.Sg($t.M()),
              d.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    accountid_sender: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    email: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    real_name: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    note: { n: 5, br: e.qM.readString, bw: e.gp.writeString },
                    time_sent: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    current_state: {
                      n: 7,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    pub_rights: {
                      n: 8,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    app_rights: {
                      n: 9,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    time_receiver_responded: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    accountid: {
                      n: 11,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    time_partner_responded: {
                      n: 12,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    accountid_partner: {
                      n: 13,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    partnerid: {
                      n: 14,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    time_last_updated: {
                      n: 15,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    sender_ip: {
                      n: 16,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = e.w0($t.M())), $t.sm_mbf;
          }
          toObject(t = !1) {
            return $t.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT($t.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq($t.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new $t();
            return $t.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj($t.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0($t.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "MembershipInvite";
          }
        }
        class Zt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Zt.prototype.partnerid || e.Sg(Zt.M()),
              d.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    filter_states: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readEnum,
                      pbr: e.qM.readPackedEnum,
                      bw: e.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Zt.sm_m
            );
          }
          static MBF() {
            return Zt.sm_mbf || (Zt.sm_mbf = e.w0(Zt.M())), Zt.sm_mbf;
          }
          toObject(t = !1) {
            return Zt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Zt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Zt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Zt();
            return Zt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Zt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Zt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMembershipInvite_GetInvites_Request";
          }
        }
        class Yt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Yt.prototype.invites || e.Sg(Yt.M()),
              d.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: { invites: { n: 1, c: $t, r: !0, q: !0 } },
                }),
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = e.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(t = !1) {
            return Yt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Yt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Yt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (c().BinaryReader)(t),
              y = new Yt();
            return Yt.deserializeBinaryFromReader(y, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Yt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Yt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMembershipInvite_GetInvites_Response";
          }
        }
        var ue;
        ((z) => {
          function t(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.GetSinglePartnerAppOptIn#1",
              (0, E.I8)(xt, ft, gt),
              Rt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          z.GetSinglePartnerAppOptIn = t;
          function r(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.SetFeaturingOnPartnerAppOptIn#1",
              (0, E.I8)(kt, ft, gt),
              Nt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          z.SetFeaturingOnPartnerAppOptIn = r;
          function y(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.GetOptInHistoryInternal#1",
              (0, E.I8)(Vt, ft, gt),
              At,
              { ePrivilege: 4 },
            );
          }
          z.GetOptInHistoryInternal = y;
          function de(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.GetPartnerAppOptInsIDs#1",
              (0, E.I8)(Ot, ft, gt),
              Gt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          z.GetPartnerAppOptInsIDs = de;
          function ge(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.GetOptInAppealsSummaryStats#1",
              (0, E.I8)(zt, ft, gt),
              Ht,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          z.GetOptInAppealsSummaryStats = ge;
          function Be(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.CreatePartnerAppOptInEmails#1",
              (0, E.I8)(ut, ft, gt),
              dt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          z.CreatePartnerAppOptInEmails = Be;
          function De(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.UpdatePartnerAppOptInEmails#1",
              (0, E.I8)(et, ft, gt),
              re,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          z.UpdatePartnerAppOptInEmails = De;
          function Me(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.SendPartnerOptInEmailAndWait#1",
              (0, E.I8)(yt, ft, gt),
              Tt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          z.SendPartnerOptInEmailAndWait = Me;
          function we(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.GetPartnerAppOptInEmailDefAndStats#1",
              (0, E.I8)(Et, ft, gt),
              jt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          z.GetPartnerAppOptInEmailDefAndStats = we;
          function ye(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.GetEstimatePartnerAppOptInEmail#1",
              (0, E.I8)(vt, ft, gt),
              bt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          z.GetEstimatePartnerAppOptInEmail = ye;
          function Ee(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.TestFirePartnerAppOptInEmail#1",
              (0, E.I8)(Lt, ft, gt),
              ne,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          z.TestFirePartnerAppOptInEmail = Ee;
          function ve(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.GetOptInEmailTracking#1",
              (0, E.I8)(St, ft, gt),
              Wt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          z.GetOptInEmailTracking = ve;
          function Le(mt, ft, gt) {
            return mt.SendMsg(
              "Publishing.GetPartnerPaidGivenPackageList#1",
              (0, E.I8)(ot, ft, gt),
              st,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          z.GetPartnerPaidGivenPackageList = Le;
        })(ue || (ue = {}));
        var fe;
        ((z) => {
          function t(r, y, de) {
            return r.SendMsg(
              "PartnerMembershipInvite.GetInvites#1",
              (0, E.I8)(Zt, y, de),
              Yt,
              { bConstMethod: !0, ePrivilege: 11 },
            );
          }
          z.GetInvites = t;
        })(fe || (fe = {}));
      },
      87108: (Pt, wt, m) => {
        "use strict";
        m.d(wt, { Hl: () => Q, dQ: () => V });
        var U = m(41735),
          p = m.n(U),
          F = m(14947),
          x = m(90626),
          d = m(35413),
          c = m(76559),
          e = m(71742),
          E = m(34592),
          Y = m(3166),
          N = Object.defineProperty,
          K = Object.getOwnPropertyDescriptor,
          I = (G, h, $, J) => {
            for (
              var A = J > 1 ? void 0 : J ? K(h, $) : h, ct = G.length - 1, nt;
              ct >= 0;
              ct--
            )
              (nt = G[ct]) && (A = (J ? nt(h, $, A) : nt(A)) || A);
            return J && A && N(h, $, A), A;
          };
        class W {
          constructor() {
            (0, F.Gn)(this);
          }
          m_mapProfiles = new Map();
          m_mapProfilesLoading = new Map();
          async LoadProfiles(h, $) {
            (0, e.wT)(
              h.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let J = h.filter(
              (_) =>
                !this.m_mapProfiles.has(_) && !this.m_mapProfilesLoading.has(_),
            );
            if (J.length == 0) return this.m_mapProfilesLoading.get(h[0]);
            let A = Y.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              ct = p().get(A, {
                params: { steamids: J.join(",") },
                withCredentials: !0,
                cancelToken: $?.token,
              });
            J.forEach((_) => this.m_mapProfilesLoading.set(_, ct));
            let nt = await ct;
            nt.data &&
              nt.status == 200 &&
              nt.data.forEach((_) => {
                (_.avatar_hash = _.avatar_url),
                  (_.avatar_url_medium = (0, d.t)(_.avatar_url, "medium")),
                  (_.avatar_url_full = (0, d.t)(_.avatar_url, "full")),
                  (_.avatar_url = (0, d.t)(_.avatar_url)),
                  this.m_mapProfiles.set(_.steamid, _),
                  this.m_mapProfilesLoading.delete(_.steamid);
              });
          }
          GetProfile(h) {
            return this.m_mapProfiles.get(h);
          }
          GetProfileByAccountID(h) {
            return this.m_mapProfiles.get(
              c.b.InitFromAccountID(h).ConvertTo64BitString(),
            );
          }
          GetProfileBySteamID(h) {
            return this.m_mapProfiles.get(h.ConvertTo64BitString());
          }
          BHasProfile(h) {
            return this.m_mapProfiles.has(h);
          }
          BHasProfileByAccountID(h) {
            return this.m_mapProfiles.has(
              c.b.InitFromAccountID(h).ConvertTo64BitString(),
            );
          }
          BHasProfileBySteamID(h) {
            return this.m_mapProfiles.has(h.ConvertTo64BitString());
          }
          BHasAllProfilesBySteamID(h) {
            return !h.some(($) => !this.BHasProfileBySteamID($));
          }
          GetProfileURLBySteamID(h) {
            const $ = this.GetProfileBySteamID(h);
            return $ && $.profile_url
              ? Y.TS.COMMUNITY_BASE_URL + "id/" + $.profile_url
              : Y.TS.COMMUNITY_BASE_URL +
                  "profiles/" +
                  h.ConvertTo64BitString();
          }
          GetPersonaNameBySteamID(h) {
            const $ = this.GetProfileBySteamID(h);
            return $ && $.persona_name ? $.persona_name : "";
          }
        }
        I([F.sH], W.prototype, "m_mapProfiles", 2);
        const V = new W();
        function M(G) {
          const h = x.useMemo(
              () => (G ? (typeof G == "string" ? new c.b(G) : G) : null),
              [G],
            ),
            [$, J] = (0, x.useState)(!!h && !V.BHasProfileBySteamID(h));
          (0, x.useEffect)(() => {
            const ct = p().CancelToken.source();
            return (
              h &&
                !V.BHasProfileBySteamID(h) &&
                V.LoadProfiles([h.ConvertTo64BitString()])
                  .catch((nt) => {
                    const _ = (0, E.H)(nt);
                    console.error(
                      "useUserProfile failed to load profile for " +
                        h.ConvertTo64BitString() +
                        ": " +
                        _.strErrorMsg,
                      _,
                    );
                  })
                  .finally(() => {
                    ct.token.reason || J(!1);
                  }),
              () => ct.cancel("unmounting useUserProfile")
            );
          }, [G]);
          const A = !!h && V.GetProfileBySteamID(h);
          return [$, A];
        }
        function Q(G) {
          const h = x.useMemo(() => (G ? c.b.InitFromAccountID(G) : null), [G]);
          return M(h);
        }
      },
      61010: (Pt) => {
        Pt.exports = {
          UnknownValue: "_3ovtfYPeggcsA44NZPuTAh",
          PriceWarningBad: "BbLG6W4EvK_nbprBmSSuQ",
          PackageNameColumn: "_2pjx8S7EGnMJcmc9CzX9UK",
          PackagePricesBelowMin: "_2x4be2ySvHHrfL_FaOtZPm",
          PackageNameHeader: "_3nw5HtkrUNuyUyfkPUToSG",
          AppCount: "_2J3kNbz7o9Fd161kGxFARG",
          PackageID: "_1E3TVBOn6hjLXBLwqCPV4J",
          PackageName: "t8fSjo20nSXqky8aCgQwm",
          PackageType: "_3LZvjdGD8NF2mke6oav-MK",
          RowItemCount: "_1r2Rcks7aQ0Yf7SLUPQrGn",
        };
      },
    },
  ]);
})();
