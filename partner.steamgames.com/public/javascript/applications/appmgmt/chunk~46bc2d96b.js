/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [7022],
    {
      76115: (ie, At, m) => {
        "use strict";
        m.d(At, {
          $e: () => e,
          Cz: () => M,
          G2: () => K,
          Lg: () => B,
          NX: () => j,
          j1: () => G,
          l5: () => l,
        });
        const M = "1",
          G = "SaleEvent_DurationDiscount_Tooltip",
          K = "discount",
          j = "proximity",
          B = "unique",
          l = "",
          e = "on";
      },
      26765: (ie, At, m) => {
        "use strict";
        m.d(At, {
          BG: () => te,
          E7: () => Bt,
          cR: () => h,
          p6: () => at,
          sU: () => A,
          tW: () => q,
          ur: () => mt,
          vV: () => Lt,
          wn: () => et,
          yB: () => k,
        });
        var M = m(41735),
          G = m.n(M),
          K = m(90626),
          j = m(72604),
          B = m(7582),
          l = m(34592),
          e = m(27066),
          R = m(8323),
          U = m(54963),
          Q = m(3166),
          J = m(76115),
          dt = Object.defineProperty,
          Z = Object.getOwnPropertyDescriptor,
          X = (_, f, p, w) => {
            for (
              var N = w > 1 ? void 0 : w ? Z(f, p) : f, L = _.length - 1, g;
              L >= 0;
              L--
            )
              (g = _[L]) && (N = (w ? g(f, p, N) : g(N)) || N);
            return w && N && dt(f, p, N), N;
          };
        const x = class ne {
          m_mapDiscountEvents = new Map();
          m_discountEventsListCallback = new R.lu();
          m_mapDiscountEventCallback = new Map();
          m_mapAppList = new Map();
          m_mapAppListCallback = new Map();
          m_bLoadedViaInitOrFullLoad = !1;
          m_bLoadEventsRequestInFlight = !1;
          m_mapInflightDiscountLoadRequest = new Map();
          m_mapInflightDiscountAndAppListLoadRequest = new Map();
          GetFutureDiscountEvents() {
            const f = (0, B.sB)();
            return Array.from(ne.Get().m_mapDiscountEvents.values()).filter(
              (p) => p.end_date > f,
            );
          }
          GetAllDiscountEvents() {
            return Array.from(ne.Get().m_mapDiscountEvents.values());
          }
          GetDiscountEventListCallback() {
            return this.m_discountEventsListCallback;
          }
          BLoadedViaInitOrFullLoad() {
            return this.m_bLoadedViaInitOrFullLoad;
          }
          GetDiscountEvent(f) {
            return this.m_mapDiscountEvents.get(f);
          }
          GetAppList(f) {
            return this.m_mapAppList.get(f);
          }
          GetDiscountEventCallback(f) {
            return (
              this.m_mapDiscountEventCallback.has(f) ||
                this.m_mapDiscountEventCallback.set(f, new R.lu()),
              this.m_mapDiscountEventCallback.get(f)
            );
          }
          GetAppListCallback(f) {
            return (
              this.m_mapAppListCallback.has(f) ||
                this.m_mapAppListCallback.set(f, new R.lu()),
              this.m_mapAppListCallback.get(f)
            );
          }
          async LoadAllDiscountEvents(f, p) {
            if (this.m_bLoadEventsRequestInFlight) return j.Ze;
            const w =
                Q.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetalldiscountevents/" +
                f,
              N = {};
            let L = null;
            try {
              this.m_bLoadEventsRequestInFlight = !0;
              const i = await G().get(w, { params: N, cancelToken: p?.token });
              if (
                ((this.m_bLoadEventsRequestInFlight = !1),
                i?.status == 200 && i.data?.success == j.R && i.data.events)
              ) {
                for (const a of i.data.events)
                  this.m_mapDiscountEvents.set(a.id, a);
                return (
                  (this.m_bLoadedViaInitOrFullLoad = !0),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetAllDiscountEvents(),
                  ),
                  j.R
                );
              }
              L = { response: i };
            } catch (i) {
              L = i;
            }
            const g = (0, l.H)(L);
            return (
              console.error("Could not load Discount Events", g.strErrorMsg, g),
              L?.response?.data?.success ?? j.zi
            );
          }
          async CreateDiscountEvent(f, p, w, N, L, g, i, a) {
            const c =
                Q.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              n = new FormData();
            n.append("sessionid", (0, Q.KC)()),
              n.append("name", w),
              n.append("start_time", f.toString()),
              n.append("end_time", p.toString()),
              n.append("strJSONDiscountInfo", h(w, N, L, g, i));
            let s = null;
            try {
              const d = await G().post(c, n, {
                withCredentials: !0,
                cancelToken: a?.token,
              });
              if (
                d?.status == 200 &&
                d.data?.success == j.R &&
                d.data.eventid
              ) {
                const D = {
                  id: d.data.eventid,
                  name: w,
                  start_date: f,
                  end_date: p,
                  appids: i,
                  publisherids: g,
                  description: L,
                  collision_type: J.NX,
                  event: J.Cz,
                  header: N,
                  tooltip: J.j1,
                  type: J.G2,
                  prevent_weeklong: J.l5,
                };
                return (
                  this.m_mapDiscountEvents.set(D.id, D),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetAllDiscountEvents(),
                  ),
                  D
                );
              }
              s = { response: d };
            } catch (d) {
              s = d;
            }
            const o = (0, l.H)(s);
            return (
              console.error(
                "CDiscountEventStore.CreateDiscountEvent: failed",
                o.strErrorMsg,
                o,
              ),
              null
            );
          }
          async UpdateDiscountEventPublisherAndAppList(f, p, w, N) {
            const L = this.m_mapDiscountEvents.get(f);
            if (!L)
              return (
                console.error(
                  "UpdateDiscountEventPublisherAndAppList: updating discount event that we have not loaded",
                  f,
                ),
                null
              );
            const g =
                Q.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              i = new FormData();
            i.append("sessionid", (0, Q.KC)()),
              i.append("start_time", L.start_date.toString()),
              i.append("end_time", L.end_date.toString()),
              i.append("strJSONDiscountInfo", Y(f, L, p, w));
            let a = null;
            try {
              const n = await G().post(g, i, {
                withCredentials: !0,
                cancelToken: N?.token,
              });
              if (
                n?.status == 200 &&
                n.data?.success == j.R &&
                n.data.eventid
              ) {
                const s = { ...L, appids: w, publisherids: p };
                return (
                  this.m_mapDiscountEvents.set(s.id, s),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetAllDiscountEvents(),
                  ),
                  s
                );
              }
              a = { response: n };
            } catch (n) {
              a = n;
            }
            const c = (0, l.H)(a);
            return (
              console.error(
                "CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed",
                c.strErrorMsg,
                c,
              ),
              null
            );
          }
          async LoadSingleDiscountEvent(f) {
            return this.m_mapDiscountEvents.has(f)
              ? this.m_mapDiscountEvents.get(f)
              : (this.m_mapInflightDiscountLoadRequest.has(f) ||
                  this.m_mapInflightDiscountLoadRequest.set(
                    f,
                    this.InternalLoadSingleDiscountEvent(f),
                  ),
                this.m_mapInflightDiscountLoadRequest.get(f));
          }
          async InternalLoadSingleDiscountEvent(f) {
            let p = null;
            if (!f || f.length == 0 || f == "0") return null;
            try {
              const w =
                  Q.TS.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventbyid",
                N = { sessionid: (0, Q.KC)(), discountid: f },
                L = await G().get(w, { params: N, withCredentials: !0 });
              if (
                L?.status == 200 &&
                L?.data?.success == j.R &&
                L?.data?.discount_event
              )
                return (
                  this.m_mapDiscountEvents.set(f, L.data.discount_event),
                  this.GetDiscountEventCallback(f).Dispatch(
                    L.data.discount_event,
                  ),
                  L.data.discount_event
                );
              p = (0, l.H)(L);
            } catch (w) {
              p = (0, l.H)(w);
            }
            return (
              console.error(
                "CDiscountEventStore.InternalLoadSingleDiscountEvent failed: " +
                  p?.strErrorMsg,
                p,
              ),
              null
            );
          }
          async LoadSingleDiscountEventsAppList(f) {
            return this.m_mapAppList.has(f)
              ? {
                  oDiscountEvent: this.m_mapDiscountEvents.get(f),
                  rgAppList: this.m_mapAppList.get(f),
                }
              : (this.m_mapInflightDiscountAndAppListLoadRequest.has(f) ||
                  this.m_mapInflightDiscountAndAppListLoadRequest.set(
                    f,
                    this.InternalLoadSingleDiscountEventsAppList(f),
                  ),
                this.m_mapInflightDiscountAndAppListLoadRequest.get(f));
          }
          async InternalLoadSingleDiscountEventsAppList(f) {
            let p = null;
            if (!f || f.length == 0) return null;
            try {
              const w =
                  Q.TS.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventapplist",
                N = { sessionid: (0, Q.KC)(), discountid: f },
                L = await G().get(w, { params: N, withCredentials: !0 });
              if (
                L?.status == 200 &&
                L?.data?.success == j.R &&
                L?.data?.discount_event
              )
                return (
                  this.m_mapDiscountEvents.set(f, L.data.discount_event),
                  this.m_mapAppList.set(f, L.data.appid_list),
                  this.GetDiscountEventCallback(f).Dispatch(
                    L.data.discount_event,
                  ),
                  this.GetAppListCallback(f).Dispatch(L.data.appid_list),
                  {
                    oDiscountEvent: L.data.discount_event,
                    rgAppList: L.data.appid_list,
                  }
                );
              p = (0, l.H)(L);
            } catch (w) {
              p = (0, l.H)(w);
            }
            return (
              console.error(
                "CDiscountEventStore.InternalLoadSingleDiscountEventsAppList failed: " +
                  p?.strErrorMsg,
                p,
              ),
              null
            );
          }
          static s_Singleton;
          static Get() {
            return (
              ne.s_Singleton ||
                ((ne.s_Singleton = new ne()), ne.s_Singleton.Init()),
              ne.s_Singleton
            );
          }
          constructor() {}
          Init() {
            const f = (0, Q.Tc)("discount_events", "application_config");
            if (this.BIsConfigValid(f)) {
              for (const p of f) this.m_mapDiscountEvents.set(p.id, p);
              this.m_bLoadedViaInitOrFullLoad = !0;
            }
          }
          BIsConfigValid(f) {
            const p = f;
            return !!(p && Array.isArray(p));
          }
        };
        X([e.o], x.prototype, "GetDiscountEvent", 1),
          X([e.o], x.prototype, "GetAppList", 1),
          X([e.o], x.prototype, "CreateDiscountEvent", 1),
          X([e.o], x.prototype, "UpdateDiscountEventPublisherAndAppList", 1);
        let it = x;
        function q() {
          return it.Get().GetFutureDiscountEvents();
        }
        function k() {
          return it.Get().GetDiscountEventListCallback();
        }
        function et(_) {
          const { rgDiscountEvents: f, eResult: p } = A(0, _);
          let w = [];
          return (
            f?.forEach((N) => {
              N.collision_type == J.Lg && (w = w.concat(N));
            }),
            { rgMajorSaleDiscountEvents: w, eResult: p }
          );
        }
        function A(_, f) {
          const p = it.Get().BLoadedViaInitOrFullLoad(),
            [w, N] = K.useState(p ? it.Get().GetAllDiscountEvents() : null),
            [L, g] = K.useState(null),
            i =
              _ ||
              Number.parseInt((0, Q.Tc)("publisherid", "application_config"));
          (0, U.hL)(it.Get().GetDiscountEventListCallback(), N),
            K.useEffect(() => {
              it.Get().BLoadedViaInitOrFullLoad() ||
                it.Get().LoadAllDiscountEvents(i).then(g);
            }, [w, i]);
          const a = L ?? (w?.length ? j.R : null);
          return K.useMemo(
            () => ({
              rgDiscountEvents: f ? w : it.Get().GetFutureDiscountEvents(),
              eResult: a,
            }),
            [w, a, f],
          );
        }
        function Bt(_) {
          return it.Get().GetDiscountEvent(_);
        }
        function Lt(_) {
          const { data: f } = Dt(_);
          return f;
        }
        function Dt(_) {
          const [f, p] = (0, K.useState)(it.Get().GetDiscountEvent(_)),
            [w, N] = K.useState(!!_);
          return (
            K.useEffect(() => {
              (!f && _) || (f?.id != _ && _)
                ? (async () => {
                    try {
                      const g = await it.Get().LoadSingleDiscountEvent(_);
                      g && p(g);
                    } finally {
                      N(!1);
                    }
                  })()
                : N(!1);
            }, [_, f]),
            (0, U.hL)(it.Get().GetDiscountEventCallback(_), p),
            { data: f, isLoading: w }
          );
        }
        function at(_) {
          const [f, p] = (0, K.useState)(it.Get().GetDiscountEvent(_)),
            [w, N] = (0, K.useState)(it.Get().GetAppList(_));
          return (
            (0, K.useEffect)(() => {
              ((!w && _) || (f?.id != _ && _)) &&
                it
                  .Get()
                  .LoadSingleDiscountEventsAppList(_)
                  .then((L) => {
                    L && (p(L.oDiscountEvent), N(L.rgAppList));
                  });
            }, [f?.id, w, _]),
            (0, U.hL)(it.Get().GetDiscountEventCallback(_), p),
            (0, U.hL)(it.Get().GetAppListCallback(_), N),
            w ? { oDiscountEvent: f, rgAppList: w } : null
          );
        }
        function ut() {
          return { fnGetDiscountEvent: it.Get().GetDiscountEvent };
        }
        function h(_, f, p, w, N) {
          return JSON.stringify({
            discount_event: {
              name: _,
              publisherids: w?.join(","),
              appids: N?.join(","),
              description: p,
              event: J.Cz,
              collision_type: J.NX,
              header: f,
              tooltip: J.j1,
              type: J.G2,
            },
          });
        }
        function Y(_, f, p, w) {
          return JSON.stringify({
            discount_event: {
              eventid: _,
              name: f.name,
              header: f.header,
              allowed_appids: w.join(","),
              allowed_publisherids: p.join(","),
              description: f.description,
              collision_type: f.collision_type,
              event: f.event,
              tooltip: f.tooltip,
              type: f.type,
              prevent_weeklong: f.prevent_weeklong,
            },
          });
        }
        function mt() {
          return { fnCreateDiscountEvent: it.Get().CreateDiscountEvent };
        }
        function te() {
          return {
            fnUpdateDiscountEventAppAndPublisherList:
              it.Get().UpdateDiscountEventPublisherAndAppList,
          };
        }
      },
      29860: (ie, At, m) => {
        "use strict";
        m.d(At, {
          D6: () => Y,
          DC: () => f,
          EF: () => at,
          G7: () => Bt,
          Iy: () => ut,
          O4: () => _,
          _q: () => p,
          dN: () => te,
          es: () => w,
          fw: () => N,
          k: () => h,
          kJ: () => mt,
          ms: () => L,
          uL: () => A,
        });
        var M = m(41735),
          G = m.n(M),
          K = m(14947),
          j = m(90626),
          B = m(20194),
          l = m(72604),
          e = m(70171),
          R = m(41635),
          U = m(71742),
          Q = m(34592),
          J = m(27066),
          dt = m(8323),
          Z = m(54963),
          X = m(3166),
          x = m(47689),
          it = Object.defineProperty,
          q = Object.getOwnPropertyDescriptor,
          k = (g, i, a, c) => {
            for (
              var n = c > 1 ? void 0 : c ? q(i, a) : i, s = g.length - 1, o;
              s >= 0;
              s--
            )
              (o = g[s]) && (n = (c ? o(i, a, n) : o(n)) || n);
            return c && n && it(i, a, n), n;
          };
        const et = class oe {
          constructor() {
            (0, K.Gn)(this);
          }
          static s_OptInRegs;
          m_mapRegistrations = new Map();
          m_mapRequestedAppIDs = new Map();
          m_mapOptInNameCallback = new Map();
          m_mapSingleAppRegistrationChange = new Map();
          m_loadCountChangeCallback = new dt.lu();
          BHasOptInRegistration(i, a) {
            return !!this.m_mapRegistrations.get(i)?.has(a);
          }
          GetOptInRegistrationPromise(i, a) {
            return this.m_mapRequestedAppIDs.get(a)?.get(i);
          }
          GetOptInRegistrationAndEligibilityForApp(i) {
            return this.m_mapRegistrations.get(i);
          }
          GetSingleAppRegistrationKey(i, a) {
            return `single_${i}_${a}`;
          }
          GetSingleAppRegistrationChange(i, a) {
            const c = this.GetSingleAppRegistrationKey(i, a);
            return (
              this.m_mapSingleAppRegistrationChange.has(c) ||
                this.m_mapSingleAppRegistrationChange.set(c, new dt.lu()),
              this.m_mapSingleAppRegistrationChange.get(c)
            );
          }
          GetExistingOptInRegistartion(i, a) {
            return this.m_mapRegistrations.has(i)
              ? this.m_mapRegistrations.get(i).get(a)
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
            let a = new Map();
            for (let s of i) {
              let o = this.m_mapRegistrations.get(s);
              if (o)
                for (let d of o.keys()) {
                  let D = a.get(d);
                  D || (D = 0), a.set(d, D + 1);
                }
            }
            let c = new Map(),
              n = i[0];
            return (
              a.forEach((s, o) => {
                if (s == i.length) {
                  let d = this.m_mapRegistrations.get(n).get(o);
                  (0, U.wT)(d, "Missing OptIn Restration"), c.set(o, d);
                }
              }),
              c.size > 0 ? c : null
            );
          }
          BHasOptionOnRegistration(i, a, c) {
            const n = this.GetRegistration(i, a);
            return !n || !n.opt_in
              ? !1
              : c
                ? n?.jsondata?.dynamic_selection?.some(
                    (s) =>
                      s &&
                      s.section_id == c.section_id &&
                      s.list_selection?.some(
                        (o) =>
                          o &&
                          o.list_id == c.list_id &&
                          o.selected_item_id?.includes(c.option_id),
                      ),
                  )
                : !0;
          }
          BHasOptInTrailer(i, a) {
            const c = this.GetRegistration(i, a);
            return !!(
              c &&
              c.opt_in &&
              c.jsondata?.trailer_permission &&
              c.jsondata.rtime_granting_trailer
            );
          }
          BHasOptInDemo(i, a) {
            const c = this.GetRegistration(i, a);
            return !!(
              c &&
              c.opt_in &&
              c.jsondata?.demo_permission &&
              c.jsondata.rtime_granting_demo
            );
          }
          BHasOptInGameProfile(i, a) {
            const c = this.GetRegistration(i, a);
            return !!(
              c &&
              c.opt_in &&
              c.jsondata?.game_profile_intent &&
              c.jsondata.rtime_granting_profile
            );
          }
          CreateRegistrationNotSaved(i, a) {
            return (
              console.log("CreateOrGetRegistration: Creating new registration"),
              {
                opt_in_name: a,
                opt_in: !1,
                appid: i,
                jsondata: { opt_in_name: a, opt_in: !1 },
              }
            );
          }
          CreateOrGetRegistration(i, a) {
            let c = this.m_mapRegistrations.get(i);
            c ||
              ((c = new Map()),
              this.m_mapRegistrations.set(i, c),
              this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
            let n = c.get(a);
            return (
              n
                ? console.log(
                    "CreateOrGetRegistration: Re-using Previous Registration:",
                    n,
                  )
                : (n = this.CreateRegistrationNotSaved(i, a)),
              n
            );
          }
          GetOptInRegistrationAndEligibilityForAppOrCreate(i, a) {
            let c = this.m_mapRegistrations.get(i);
            c ||
              ((c = new Map()),
              this.m_mapRegistrations.set(i, c),
              this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
            let n = c.get(a);
            return (
              n
                ? console.log(
                    "CreateOrGetRegistration: Re-using Previous Registration:",
                    n,
                  )
                : ((n = this.CreateRegistrationNotSaved(i, a)), c.set(a, n)),
              n
            );
          }
          GetRegistration(i, a) {
            return this.m_mapRegistrations.has(i) &&
              this.m_mapRegistrations.get(i).has(a)
              ? this.m_mapRegistrations.get(i).get(a)
              : null;
          }
          GetAllOptInRegistrations(i) {
            const a = this.m_mapRequestedAppIDs.get(i) || new Map();
            return Array.from(a.keys())
              .map((c) => this.m_mapRegistrations.get(c)?.get(i))
              .filter(Boolean);
          }
          GetOptInNameRegistrationsCallbackList(i) {
            return i
              ? (this.m_mapOptInNameCallback.has(i) ||
                  this.m_mapOptInNameCallback.set(i, new dt.lu()),
                this.m_mapOptInNameCallback.get(i))
              : null;
          }
          UpdateRegAndTrackInStore(i, a) {
            const c = a.map((n) =>
              n.jsondata && n.jsondata !== ""
                ? { ...n, jsondata: JSON.parse(n.jsondata) }
                : { ...n, jsondata: { opt_in_name: i } },
            );
            return (
              c.forEach((n) => {
                this.m_mapRegistrations.has(n.appid) ||
                  (this.m_mapRegistrations.set(n.appid, new Map()),
                  this.GetLoadCountChange().Dispatch(
                    this.m_mapRegistrations.size,
                  )),
                  this.m_mapRegistrations.get(n.appid).set(i, n);
              }),
              c
            );
          }
          async FetchOptInRegistrationForOptIn(i, a) {
            const c =
                X.TS.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
              n = { sessionid: (0, X.KC)(), opt_in_name: i, opt_in_only: a },
              s = await G().get(c, { params: n, withCredentials: !0 });
            return s?.data?.data
              ? this.UpdateRegAndTrackInStore(i, s.data.data)
              : s?.data?.data;
          }
          async FetchPendingReviewOptInRegistrationn(i) {
            const a =
                X.TS.PARTNER_BASE_URL +
                "optin/ajaxgetpendingreviewregistrations",
              c = { sessionid: (0, X.KC)(), opt_in_name: i },
              n = await G().get(a, { params: c, withCredentials: !0 });
            return n?.data?.data
              ? this.UpdateRegAndTrackInStore(i, n.data.data)
              : n?.data?.data;
          }
          async LoadOptInRegistration(i, a, c) {
            if (this.GetRegistration(a, i)) return !0;
            const s = this.m_mapRequestedAppIDs.get(i)?.get(a);
            if (s) return s;
            try {
              const o = X.TS.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
                d = { sessionid: (0, X.KC)(), appid: a, opt_in_name: i },
                D = await G().get(o, {
                  params: d,
                  withCredentials: !0,
                  cancelToken: c?.token,
                });
              if (D?.data?.success == l.R && D.data.optin_registration) {
                if (
                  (typeof D.data.optin_registration.jsondata == "string" &&
                    (D.data.optin_registration.jsondata = JSON.parse(
                      D.data.optin_registration.jsondata,
                    )),
                  this.m_mapRegistrations.has(a))
                )
                  this.m_mapRegistrations
                    .get(a)
                    .set(i, D.data.optin_registration);
                else {
                  const v = new Map();
                  v.set(i, D.data.optin_registration),
                    this.m_mapRegistrations.set(a, v),
                    this.GetLoadCountChange().Dispatch(
                      this.m_mapRegistrations.size,
                    );
                }
                return !0;
              } else {
                const v = (0, Q.H)(D);
                console.error(
                  "LoadOptInRegistration : failed with a response and: " +
                    v.strErrorMsg,
                  v,
                );
              }
            } catch (o) {
              const d = (0, Q.H)(o);
              console.error(
                "LoadOptInRegistration : failed with " + d.strErrorMsg,
                d,
              );
            }
            return !1;
          }
          async LoadMultiOptInRegistration(i, a, c, n) {
            if (a.length == 0 || i.length == 0) return !1;
            let s = null;
            const o = new Promise((F, O) => {
              s = F;
            });
            (i = R.Ew(i).sort()),
              (a = R.Ew(a).sort()),
              i.forEach((F) => {
                this.m_mapRequestedAppIDs.has(F) ||
                  this.m_mapRequestedAppIDs.set(F, new Map());
              });
            let d = new Array();
            if (
              (a.forEach((F) => {
                i.some(
                  (O) =>
                    !this.BHasOptInRegistration(F, O) &&
                    !this.GetOptInRegistrationPromise(F, O),
                ) &&
                  (d.push(F),
                  i.forEach((O) => this.m_mapRequestedAppIDs.get(O).set(F, o)));
              }),
              d.length == 0)
            )
              return !0;
            const D =
                X.TS.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation",
              v = 50;
            let H = null;
            try {
              for (; d.length > 0; ) {
                let F = 0;
                const O = [];
                for (; d.length > 0 && F < 5; ) {
                  const P = d.splice(0, v),
                    St = {
                      rgOptInNames: i.join(","),
                      rgAppIDs: P.join(","),
                      origin: self.origin,
                    };
                  O.push(
                    G().get(D, {
                      params: St,
                      withCredentials: !0,
                      cancelToken: c?.token,
                    }),
                  ),
                    (F += 1);
                }
                const rt = await Promise.all(O);
                for (const P of rt)
                  if (
                    P?.status == 200 &&
                    P.data?.success == l.R &&
                    P.data.optin_registrations?.length
                  )
                    this.InternalAddRegistrations(
                      P.data.optin_registrations,
                      n,
                    );
                  else {
                    H = { response: P };
                    break;
                  }
                this.GetLoadCountChange().Dispatch(
                  this.m_mapRegistrations.size,
                );
              }
            } catch (F) {
              H = F;
            }
            if (H == null) s(!0);
            else {
              const F = (0, Q.H)(H);
              console.error(
                "Could not load OptIn for Apps",
                a,
                i,
                F.strErrorMsg,
                F,
              ),
                s(!1);
            }
            return o;
          }
          async RegisterAppForOptIn(i, a) {
            const n = {
              opt_in_name: a.startsWith("sale_") ? a : "sale_" + a,
              opt_in: !0,
            };
            return this.UpdateOptInRegistration(i, n);
          }
          async UpdateOptInRegistration(i, a) {
            let c = null;
            try {
              const n = new FormData();
              n.append("sessionid", (0, X.KC)()),
                Object.keys(a).forEach((d) => n.append(d, a[d]));
              const s =
                  X.TS.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistration/" +
                  i,
                o = await G().post(s, n, { withCredentials: !0 });
              if (o?.status == 200 && o.data?.success == l.R) return null;
              c = (0, Q.H)(o);
            } catch (n) {
              c = (0, Q.H)(n);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateOptInRegistration error " +
                  c.strErrorMsg,
                c,
              ),
              c.strErrorMsg
            );
          }
          async UpdateOptInRegistrationJson(i, a, c = !1) {
            let n = null;
            try {
              const s = new FormData();
              s.append("sessionid", (0, X.KC)()),
                s.append("appid", "" + i),
                s.append("opt_in_name", a.opt_in_name),
                s.append("jsondata", JSON.stringify(a)),
                c && s.append("bCreatePendingInvite", "true");
              const o =
                  X.TS.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistrationpayload/" +
                  i,
                d = await G().post(o, s, { withCredentials: !0 });
              if (d?.status == 200 && d.data?.success == l.R) {
                const D = a.opt_in_name.startsWith("sale_")
                    ? a.opt_in_name
                    : "sale_" + a.opt_in_name,
                  v = this.m_mapRegistrations.get(i).get(D);
                v.jsondata = a;
                const H = { ...v };
                return (
                  this.m_mapRegistrations.get(i).set(a.opt_in_name, H),
                  this.GetSingleAppRegistrationChange(
                    i,
                    a.opt_in_name,
                  ).Dispatch(H),
                  null
                );
              }
              n = (0, Q.H)(d);
            } catch (s) {
              n = (0, Q.H)(s);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateOptInRegistrationJson error " +
                  n.strErrorMsg,
                n,
              ),
              n.strErrorMsg
            );
          }
          async UpdateAppealState(i, a, c) {
            let n = null;
            try {
              const s = a.opt_in_name || a.jsondata.opt_in_name,
                o = new FormData();
              o.append("sessionid", (0, X.KC)()),
                o.append("appid", "" + i),
                o.append("opt_in_name", s),
                o.append("approved", "" + c);
              const d =
                  X.TS.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + i,
                D = await G().post(d, o, { withCredentials: !0 });
              if (D?.status == 200 && D.data?.success == l.R) {
                const v = { ...this.m_mapRegistrations.get(i).get(s) };
                return (
                  (v.accountid_appeal = X.iA.accountid),
                  (v.appeal_state = c ? e.vm.Tn : e.vm.n$),
                  this.m_mapRegistrations.get(i).set(s, v),
                  this.GetSingleAppRegistrationChange(i, s).Dispatch(v),
                  !0
                );
              }
              n = (0, Q.H)(D);
            } catch (s) {
              n = (0, Q.H)(s);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateAppealState error " + n.strErrorMsg,
                n,
              ),
              !1
            );
          }
          static Get() {
            return (
              oe.s_OptInRegs ||
                ((oe.s_OptInRegs = new oe()),
                (window.COptInRegistrations = oe.s_OptInRegs),
                oe.s_OptInRegs.Init()),
              oe.s_OptInRegs
            );
          }
          InternalAddRegistrations(i, a) {
            const c = new Set();
            i.forEach((n) => {
              if (!Number.isNaN(n.appid)) {
                let s = this.m_mapRegistrations.get(n.appid);
                if (
                  (s ||
                    ((s = new Map()), this.m_mapRegistrations.set(n.appid, s)),
                  n.jsondata && typeof n.jsondata == "string")
                ) {
                  const o = n.jsondata;
                  o.trim().length == 0
                    ? (n.jsondata = {})
                    : (n.jsondata = JSON.parse(o));
                }
                s.set(n.opt_in_name, n),
                  a && a.Increment(),
                  c.add(n.opt_in_name);
              }
            }),
              Array.from(c).forEach((n) => {
                this.GetOptInNameRegistrationsCallbackList(n).Dispatch(
                  this.GetAllOptInRegistrations(n),
                );
              });
          }
          Init() {
            let i = JSON.parse(
              JSON.stringify(
                (0, X.Tc)("optin_registrations", "application_config"),
              ),
            );
            this.ValidateStoreDefault(i) && this.InternalAddRegistrations(i);
          }
          ValidateStoreDefault(i) {
            const a = i;
            return a &&
              Array.isArray(a) &&
              a.length > 0 &&
              typeof a[0] == "object"
              ? typeof a[0].appid == "number" &&
                  typeof a[0].opt_in_name == "string"
              : !1;
          }
        };
        k([J.o], et.prototype, "GetOptInRegistrationAndEligibilityForApp", 1),
          k(
            [J.o],
            et.prototype,
            "GetOptInRegistrationAndEligibilityForApps",
            1,
          ),
          k([J.o], et.prototype, "LoadMultiOptInRegistration", 1),
          k([J.o], et.prototype, "UpdateOptInRegistrationJson", 1),
          k([J.o], et.prototype, "UpdateAppealState", 1),
          k([K.XI], et.prototype, "Init", 1);
        let A = et;
        function Bt(g, i) {
          const a = g.jsondata?.dynamic_selection;
          try {
            if (a) {
              const c = a
                .filter((n) => n.section_id == i.section_id)
                .map((n) => n.list_selection);
              if (c.length > 0 && c[0]) {
                const n = c[0]
                  .filter((s) => s.list_id == i.list_id)
                  .map((s) => s.selected_item_id);
                if (n.length > 0) return n[0];
              }
            }
          } catch (c) {
            console.log("error: dynamic section", a, g, c);
          }
          return [];
        }
        function Lt() {
          return React.useMemo(
            () => ({
              fnGetOptInRegistrationAndEligibilityForApp:
                A.Get().GetOptInRegistrationAndEligibilityForApp,
            }),
            [],
          );
        }
        function Dt(g) {
          return g && A.Get().GetOptInRegistrationAndEligibilityForApp(g);
        }
        function at() {
          return j.useMemo(
            () => ({
              fnLoadMultiOptInRegistration: A.Get().LoadMultiOptInRegistration,
            }),
            [],
          );
        }
        function ut(g, i, a) {
          const [c, n] = j.useState(null),
            s = (0, x.m)("useMultiLoadOptInAppReg");
          return (
            (0, j.useEffect)(() => {
              const o = i?.filter(Boolean);
              o?.length > 0 && g?.length > 0
                ? A.Get()
                    .LoadMultiOptInRegistration(
                      o.map(() => g),
                      o,
                      s,
                      a,
                    )
                    .then(() => {
                      const d = new Map();
                      o.forEach((D) => {
                        const v = A.Get().GetRegistration(D, g);
                        v && d.set(D, v);
                      }),
                        n(d);
                    })
                : n(new Map());
            }, [g, i, s, a]),
            c
          );
        }
        function h(g) {
          const [i, a] = j.useState(A.Get().GetAllOptInRegistrations(g));
          return (
            (0, Z.hL)(A.Get().GetOptInNameRegistrationsCallbackList(g), a), i
          );
        }
        function Y(g) {
          const i = h(g),
            [a, c] = j.useState({
              nAppOptedIn: 0,
              nAppEligible: 0,
              nAppOptedOut: 0,
              nAppIneligible: 0,
            });
          return (
            j.useEffect(() => {
              if (i?.length > 0) {
                const n = {
                  nAppOptedIn: 0,
                  nAppEligible: 0,
                  nAppOptedOut: 0,
                  nAppIneligible: 0,
                };
                i.forEach((s) => {
                  s.restricted || s.pruned
                    ? (n.nAppIneligible += 1)
                    : s.opt_in
                      ? ((n.nAppOptedIn += 1), (n.nAppEligible += 1))
                      : !s.time_opted_in || s.invited
                        ? (n.nAppEligible += 1)
                        : (n.nAppOptedOut += 1);
                }),
                  JSON.stringify(n) != JSON.stringify(a) && c(n);
              }
            }, [i, a]),
            a
          );
        }
        function mt(g, i) {
          const a = (0, B.I)({
            queryKey: ["useAllOptInRegistrationByName", g, !!i],
            queryFn: () => A.Get().FetchOptInRegistrationForOptIn(g, i),
            staleTime: 36e5,
          });
          return a.isLoading ? null : a.data;
        }
        function te(g) {
          const i = (0, B.I)({
            queryKey: ["useAllPendingReviewOptInRegistrationByName", g],
            queryFn: () => A.Get().FetchPendingReviewOptInRegistrationn(g),
            retry: !1,
            staleTime: 36e5,
            enabled: g?.length > 0,
          });
          return {
            rgPendingReviewRegistrations: i.isLoading ? null : i.data,
            bIsInError: i.isError,
          };
        }
        function _(g, i) {
          const a = mt(g, !1),
            [c, n] = (0, j.useState)(a?.find((s) => s.appid == i));
          return (0, Z.hL)(A.Get().GetSingleAppRegistrationChange(i, g), n), c;
        }
        function f(g, i) {
          const [a, c] = (0, j.useState)(
            A.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(g, i),
          );
          return (0, Z.hL)(A.Get().GetSingleAppRegistrationChange(g, i), c), a;
        }
        function p(g, i) {
          const [a, c] = (0, j.useState)(
            A.Get().GetExistingOptInRegistartion(g, i),
          );
          return (0, Z.hL)(A.Get().GetSingleAppRegistrationChange(g, i), c), a;
        }
        function w() {
          return {
            fnUpdateOptInRegistrationJson: A.Get().UpdateOptInRegistrationJson,
          };
        }
        function N() {
          return { fnUpdateAppealState: A.Get().UpdateAppealState };
        }
        function L() {
          const [g, i] = (0, j.useState)(A.Get().GetLoadCount());
          return (
            (0, Z.hL)(A.Get().GetLoadCountChange(), i), A.Get().GetLoadCount()
          );
        }
      },
      15659: (ie, At, m) => {
        "use strict";
        m.d(At, {
          $U: () => et,
          $p: () => w,
          CW: () => p,
          Fk: () => te,
          Ko: () => q,
          Lj: () => k,
          Mh: () => Lt,
          XA: () => _,
          XL: () => N,
          a8: () => h,
          aU: () => mt,
          gr: () => ut,
          hC: () => Y,
          iI: () => Bt,
          qN: () => A,
          qT: () => Z,
          sZ: () => X,
          sk: () => f,
          w8: () => Dt,
          zq: () => at,
          zy: () => L,
        });
        var M = m(41735),
          G = m.n(M),
          K = m(90626),
          j = m(72604),
          B = m(7582),
          l = m(34592),
          e = m(8323),
          R = m(54963),
          U = m(48473),
          Q = m(3166),
          J = m(41635),
          dt = m(36174);
        const Z = 95,
          X = 10;
        class x {
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
              x.s_Singleton ||
                ((x.s_Singleton = new x()), x.s_Singleton.Init()),
              x.s_Singleton
            );
          }
          constructor() {}
          Init() {
            const i = (0, Q.Tc)("package_discounts", "application_config");
            this.BIsDiscountPayloadValid(i) && this.InternalAddDiscounts(i);
            const a = (0, Q.Tc)(
              "max_discount_percentages",
              "application_config",
            );
            if (this.BIsMaxDiscountPayloadValid(a))
              for (let c in a)
                this.m_mapMaxDiscountPercentageByPackageId.set(Number(c), a[c]);
          }
          InternalAddDiscounts(i, a) {
            const c = new Set(),
              n = new Set();
            for (const s of i)
              s.discountEventID?.length || (s.discountEventID = it(s)),
                this.m_mapPackageDiscountsById.set(s.nDiscountID, s),
                this.GetCallbackListForDiscount(s.nDiscountID).Dispatch(s),
                this.m_mapPackageDiscountsByPackageId.has(s.packageID) ||
                  this.m_mapPackageDiscountsByPackageId.set(
                    s.packageID,
                    new Map(),
                  ),
                this.m_mapPackageDiscountsByPackageId
                  .get(s.packageID)
                  .set(s.nDiscountID, s),
                c.add(s.packageID),
                this.m_mapPackageDiscountsByDiscountEventId.has(
                  s.discountEventID,
                ) ||
                  this.m_mapPackageDiscountsByDiscountEventId.set(
                    s.discountEventID,
                    new Map(),
                  ),
                this.m_mapPackageDiscountsByDiscountEventId
                  .get(s.discountEventID)
                  .set(s.nDiscountID, s),
                n.add(s.discountEventID);
            for (const s of a ?? [])
              this.m_mapPackageDiscountsByPackageId.has(s) ||
                this.m_mapPackageDiscountsByPackageId.set(s, new Map()),
                c.add(s);
            c.forEach((s) =>
              this.GetCallbackListForPackage(s).Dispatch(
                this.GetAllDiscountsForPackage(s),
              ),
            ),
              n.forEach((s) =>
                this.GetCallbackListForDiscountEvent(s).Dispatch(
                  this.GetAllDiscountsForDiscountEvent(s),
                ),
              ),
              this.GetGlobalCallbackList().Dispatch(
                this.GetAllDiscountsForAllPackages(),
              );
          }
          InternalDeleteDiscount(i, a, c) {
            this.m_mapPackageDiscountsById.delete(i),
              this.m_mapPackageDiscountsByPackageId.get(a)?.delete(i),
              this.m_mapPackageDiscountsByDiscountEventId.get(c)?.delete(i),
              this.GetCallbackListForDiscount(i).Dispatch(null),
              this.GetCallbackListForPackage(a).Dispatch(
                this.GetAllDiscountsForPackage(a),
              ),
              this.GetCallbackListForDiscountEvent(c).Dispatch(
                this.GetAllDiscountsForDiscountEvent(c),
              ),
              this.GetGlobalCallbackList().Dispatch(
                this.GetAllDiscountsForAllPackages(),
              );
          }
          BIsDiscountPayloadValid(i) {
            const a = i;
            if (a && Array.isArray(a)) {
              if (a.length == 0) return !0;
              const c = a[0];
              if (
                c.nDiscountID &&
                typeof c.nDiscountID == "number" &&
                c.packageID &&
                typeof c.packageID == "number"
              )
                return !0;
            }
            return !1;
          }
          BIsMaxDiscountPayloadValid(i) {
            const a = i;
            if (a && typeof a == "object") {
              for (let c in a)
                if (
                  isNaN(parseInt(c)) ||
                  (a[c] !== null && typeof a[c] != "number")
                )
                  return !1;
              return !0;
            }
            return !1;
          }
          async LoadPackageDiscounts(i, a, c = 0) {
            const n = J.Ew(i).sort().join(",");
            return (
              this.m_mapExistingPackageRequests.has(n) ||
                this.m_mapExistingPackageRequests.set(
                  n,
                  this.InternalLoadPackageDiscounts(i, a, c),
                ),
              this.m_mapExistingPackageRequests.get(n)
            );
          }
          async InternalLoadPackageDiscounts(i, a, c = 0) {
            const n = new Set();
            for (const O of i)
              !this.m_mapPackageDiscountsByPackageId.has(O) &&
                O != 0 &&
                n.add(O);
            const s = Array.from(n).sort();
            if (s.length == 0) return j.R;
            let o = null;
            const d = new Promise((O, rt) => {
                o = O;
              }),
              D = (0, Q.Tc)("publisherid", "application_config"),
              v = 50;
            let H = null,
              F = null;
            try {
              const O = [],
                rt = new Array();
              for (; s.length > 0; ) {
                const nt = s.splice(0, v);
                rt.push(nt),
                  O.push(this.LoadPackageDiscountsFromPHP(D, nt, a, c));
              }
              const P = await Promise.all(O),
                St = [];
              for (const nt of P)
                if (
                  ((F = rt.unshift()),
                  nt?.status == 200 &&
                    nt.data?.success == j.R &&
                    nt.data.discounts)
                )
                  nt.data.discounts.forEach((ee) => St.push(ee));
                else {
                  H = { response: nt };
                  break;
                }
              H == null && this.InternalAddDiscounts(St, Array.from(n));
            } catch (O) {
              H = O;
            }
            if (H == null) o(j.R);
            else {
              const O = (0, l.H)(H);
              console.error(
                "Could not load Discounts for packages",
                F,
                O.strErrorMsg,
                O,
              ),
                o(H?.response?.data?.success ?? j.zi);
            }
            return d;
          }
          async LoadPackageDiscountsFromPHP(i, a, c, n = 0) {
            const s = { packageids: a.join(","), origin: self.origin },
              o =
                Q.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetpackagediscounts/" +
                i;
            let d,
              D = 3;
            for (; D-- > 0; )
              try {
                if (
                  ((d = await G().get(o, {
                    params: s,
                    withCredentials: !0,
                    cancelToken: c?.token,
                    timeout: n,
                  })),
                  d?.status == 200 &&
                    d.data?.success == j.R &&
                    d.data.discounts)
                )
                  return d;
              } catch (v) {
                if (D == 0) throw v;
                console.error(v);
              }
            return d;
          }
          async SaveDiscountToServer(i, a) {
            const c =
                Q.TS.PARTNER_BASE_URL +
                "packages/createoreditdiscount/" +
                i.packageID,
              n = new FormData();
            n.append("sessionid", (0, Q.KC)()),
              i.nDiscountID && n.append("id", i.nDiscountID.toString()),
              n.append("name", i.strDiscountName),
              n.append("description", i.strDiscountDescription),
              i.discountEventID &&
                !q(i.discountEventID) &&
                n.append("type", i.discountEventID),
              n.append("percent", i.nDiscountPct.toString()),
              n.append(
                "start_date",
                new Date(i.rtStartDate * 1e3).toISOString(),
              ),
              n.append("end_date", new Date(i.rtEndDate * 1e3).toISOString());
            let s = null;
            try {
              const d = await G().post(c, n, {
                withCredentials: !0,
                cancelToken: a?.token,
              });
              if (
                ((d.data.msg = d.data.msg ?? d.data.message),
                d?.status == 200 && d.data?.success == j.R && d.data.discountid)
              )
                return (
                  (i.bChangedLocally = !1),
                  (i.nDiscountID = d.data.discountid),
                  (i.nDiscountPct = d.data.percentage),
                  this.InternalAddDiscounts([i]),
                  d.data
                );
              s = { response: d };
            } catch (d) {
              s = d;
            }
            const o = (0, l.H)(s);
            return (
              console.error(
                "CPackageDiscountStore.SaveDiscountToServer: failed",
                o.strErrorMsg,
                o,
              ),
              s?.response?.data ?? { success: j.zi }
            );
          }
          async DeleteDiscountOnServer(i, a, c, n) {
            const s =
                Q.TS.PARTNER_BASE_URL + "packages/removepackagediscount/" + a,
              o = new FormData();
            o.append("sessionid", (0, Q.KC)()),
              o.append("discountid", i.toString());
            let d = null;
            try {
              const v = await G().post(s, o, {
                withCredentials: !0,
                cancelToken: n?.token,
              });
              if (v?.status == 200 && v.data?.success == j.R)
                return this.InternalDeleteDiscount(i, a, c), v.data;
              d = { response: v };
            } catch (v) {
              d = v;
            }
            const D = (0, l.H)(d);
            return (
              console.error(
                "CPackageDiscountStore.DeleteDiscountOnServer: failed",
                D.strErrorMsg,
                D,
              ),
              d?.response?.data ?? { success: j.zi }
            );
          }
          GetCallbackListForDiscount(i) {
            return (
              this.m_mapDiscountCallbackList.has(i) ||
                this.m_mapDiscountCallbackList.set(i, new e.lu()),
              this.m_mapDiscountCallbackList.get(i)
            );
          }
          GetCallbackListForPackage(i) {
            return (
              this.m_mapPackageCallbackList.has(i) ||
                this.m_mapPackageCallbackList.set(i, new e.lu()),
              this.m_mapPackageCallbackList.get(i)
            );
          }
          GetCallbackListForDiscountEvent(i) {
            return (
              this.m_mapDiscountEventCallbackList.has(i) ||
                this.m_mapDiscountEventCallbackList.set(i, new e.lu()),
              this.m_mapDiscountEventCallbackList.get(i)
            );
          }
          GetGlobalCallbackList() {
            return this.m_allDiscountCallbackList;
          }
          GetDiscountByID(i) {
            return this.m_mapPackageDiscountsById.get(i);
          }
          GetAllDiscountsForPackage(i) {
            return this.m_mapPackageDiscountsByPackageId.has(i)
              ? Array.from(
                  this.m_mapPackageDiscountsByPackageId.get(i)?.values() ?? [],
                )
              : null;
          }
          GetAllDiscountsForAllPackages() {
            return Array.from(this.m_mapPackageDiscountsById.values());
          }
          GetAllDiscountsForDiscountEvent(i) {
            return Array.from(
              this.m_mapPackageDiscountsByDiscountEventId.get(i)?.values() ??
                [],
            );
          }
          GetMaxDiscountPercentage(i) {
            const a = Z;
            return this.m_mapMaxDiscountPercentageByPackageId.get(i) ?? a;
          }
          GetMaxDiscountPercentageForGroup(i) {
            const a = i.map((c) => this.GetMaxDiscountPercentage(c));
            return Math.min(...a);
          }
        }
        function it(g) {
          return `custom-event-${g.rtStartDate}-${g.rtEndDate}-${(0, U.Yz)(g.strDiscountName)}`;
        }
        function q(g) {
          return g.startsWith("custom-event-");
        }
        function k(g) {
          return x.Get().GetDiscountByID(g);
        }
        function et(g) {
          return x.Get().GetAllDiscountsForDiscountEvent(g);
        }
        function A(g) {
          return x.Get().GetAllDiscountsForPackage(g);
        }
        function Bt(g) {
          return x.Get().GetCallbackListForPackage(g);
        }
        function Lt() {
          return x.Get().GetAllDiscountsForAllPackages();
        }
        function Dt() {
          return x.Get().GetGlobalCallbackList();
        }
        function at() {
          return K.useCallback(
            (g, i, a) => x.Get().LoadPackageDiscounts(g, i, a),
            [],
          );
        }
        function ut() {
          const g = (a) => x.Get().SaveDiscountToServer(a),
            i = (a, c, n) => x.Get().DeleteDiscountOnServer(a, c, n);
          return K.useMemo(
            () => ({ fnSaveDiscount: g, fnDeleteDiscount: i }),
            [],
          );
        }
        function h(g) {
          return new Map(
            Array.from(g.map((i) => [i, x.Get().GetDiscountByID(i)])),
          );
        }
        function Y(g) {
          const i = (0, B.f1)(),
            [a, c] = K.useState(x.Get().GetAllDiscountsForPackage(g));
          return (
            (0, R.hL)(x.Get().GetCallbackListForPackage(g), c),
            K.useMemo(() => {
              let n = null;
              if (a == null) return { deepestDiscount: n, bLoading: !0 };
              if (a?.length > 0)
                for (const s of a)
                  s.rtEndDate > i ||
                    s.nDiscountPct <= 0 ||
                    ((n == null ||
                      s.nDiscountPct > n.nDiscountPct ||
                      (s.nDiscountPct == n.nDiscountPct &&
                        s.rtEndDate > n.rtEndDate)) &&
                      (n = s));
              return { deepestDiscount: n, bLoading: !1 };
            }, [g, i, a])
          );
        }
        function mt(g) {
          const i = (0, B.f1)();
          if (!g) return null;
          let a = null;
          return (
            g.forEach((c) => {
              const n = x.Get().GetAllDiscountsForPackage(c);
              if (n?.length > 0)
                for (const s of n)
                  s.rtEndDate > i ||
                    s.nDiscountPct <= 0 ||
                    ((a == null ||
                      s.nDiscountPct > a.nDiscountPct ||
                      (s.nDiscountPct == a.nDiscountPct &&
                        s.rtEndDate > a.rtEndDate)) &&
                      (a = s));
            }),
            a
          );
        }
        function te(g, i, a) {
          const [c, n] = (0, K.useState)(),
            [s, o] = (0, K.useState)([]);
          return (
            (0, K.useEffect)(() => {
              if (i < a && g?.length > 0) {
                let d = new Array(),
                  D = new Array(),
                  v = new Array();
                for (let H = i; H < a; H += dt.Kp.PerDay) d.push(H), D.push(!1);
                g.forEach((H) => {
                  const F = x.Get().GetAllDiscountsForPackage(H);
                  if (F?.length > 0)
                    for (const O of F)
                      O.rtStartDate > a ||
                        O.rtEndDate < i ||
                        (v.push(O),
                        d.forEach((rt, P) => {
                          rt < O.rtEndDate &&
                            O.rtStartDate < rt + dt.Kp.PerDay &&
                            (D[P] = !0);
                        }));
                }),
                  o(v),
                  n(D.filter((H) => H === !0).length);
              } else n(0);
            }, [g, i, a]),
            { nDaysInDiscount: c, rgDiscountWithOverlap: s }
          );
        }
        function _(g) {
          const i = (0, B.f1)(),
            [a, c] = K.useState(x.Get().GetAllDiscountsForAllPackages());
          return (
            (0, R.hL)(x.Get().GetGlobalCallbackList(), c),
            K.useMemo(() => {
              let n = null;
              if (a == null) return { mostRecentDiscount: n, bLoading: !0 };
              for (const s of g) {
                const o = x.Get().GetAllDiscountsForPackage(s) ?? [];
                for (const d of o)
                  !d.rtStartDate ||
                    !d.rtEndDate ||
                    !d.nDiscountPct ||
                    (d.rtStartDate < i &&
                      (!n || n.rtEndDate < d.rtEndDate) &&
                      (n = d));
              }
              return { mostRecentDiscount: n, bLoading: !1 };
            }, [i, g, a])
          );
        }
        function f(g) {
          const [i, a] = K.useState(x.Get().GetAllDiscountsForDiscountEvent(g));
          return (0, R.hL)(x.Get().GetCallbackListForDiscountEvent(g), a), i;
        }
        function p(g) {
          const [i, a] = K.useState(x.Get().GetAllDiscountsForPackage(g));
          (0, R.hL)(x.Get().GetCallbackListForPackage(g), a);
          const [c, n] = K.useState(!1),
            s = at();
          return (
            K.useEffect(() => {
              if (i || !g) {
                c || n(!0);
                return;
              }
              if (!c && s) {
                const o = G().CancelToken.source();
                s([g]).then(() => {
                  o.token.reason || n(!0);
                });
              }
            }, [i, c, n, g, s]),
            i
          );
        }
        function w(g) {
          return x.Get().GetMaxDiscountPercentage(g);
        }
        function N(g) {
          return g.some(
            (i) =>
              i.nDiscountPct > x.Get().GetMaxDiscountPercentage(i.packageID),
          );
        }
        function L(g) {
          return x.Get().GetMaxDiscountPercentageForGroup(g);
        }
      },
      55541: (ie, At, m) => {
        "use strict";
        m.d(At, {
          Be: () => ut,
          C5: () => re,
          Gq: () => ee,
          NK: () => Y,
          QD: () => d,
          T1: () => _,
          UZ: () => it,
          WV: () => n,
          ZM: () => s,
          _9: () => St,
          bA: () => a,
          ew: () => D,
          gr: () => O,
          h5: () => Dt,
          hk: () => k,
          hu: () => at,
          i3: () => v,
          jM: () => Bt,
          jf: () => Lt,
          l4: () => o,
          nu: () => f,
          s3: () => q,
          ve: () => F,
          wF: () => rt,
          we: () => et,
          wk: () => nt,
          wn: () => h,
          zP: () => H,
          zU: () => A,
        });
        var M = m(76115),
          G = m(26765),
          K = m(29860),
          j = m(15659),
          B = m(31886),
          l = m(11636),
          e = m(28763),
          R = m(90626),
          U = m(7582),
          Q = m(10142),
          J = m(8323),
          dt = m(54963),
          Z = m(48473),
          X = m(36174),
          x = m(75857);
        const it = 0,
          q = 1,
          k = 2,
          et = 3,
          A = 4,
          Bt = 5,
          Lt = 6,
          Dt = 7,
          at = 8,
          ut = 9,
          h = 10,
          Y = 11;
        function mt(y, u) {
          return (
            !!y == !!u &&
            y?.packageID == u?.packageID &&
            y?.discountEventID == u?.discountEventID &&
            y?.eState == u?.eState &&
            y?.rgConflictDetails?.length == u?.rgConflictDetails?.length &&
            y?.optInReg == u?.optInReg &&
            te(y?.discount, u?.discount) &&
            y?.nBaseAppID == u?.nBaseAppID &&
            y?.bChangedLocally == u?.bChangedLocally
          );
        }
        function te(y, u) {
          return (
            (!u && (y?.nDiscountPct ?? 0) == 0) ||
            (!!u && u.nDiscountPct == y?.nDiscountPct)
          );
        }
        const _ = 30,
          f = _ * X.Kp.PerDay - 1.5 * X.Kp.PerHour,
          p = 10 * X.Kp.PerMinute;
        class w {
          m_mapPackageStateForDiscountEvents = new Map();
          m_mapLocalPackageDiscountOverrides = new Map();
          m_mapDiscountPackageCallbackList = new Map();
          m_mapDiscountGridCellCallbackList = new Map();
          m_mapDiscountEventColumnCallbackList = new Map();
          m_localPackageDiscountOverrideCallbackList = new J.lu();
          static s_Singleton;
          static s_initializationCallbackList = new J.lu();
          static Get() {
            return (
              w.s_Singleton ||
                ((w.s_Singleton = new w()), w.s_Singleton.Init()),
              w.s_Singleton
            );
          }
          static IsInitialized() {
            return !!w.s_Singleton;
          }
          constructor() {}
          Init() {
            for (const u of (0, B.OM)())
              w.Get().ComputePackageState(u),
                (0, j.iI)(u).Register(() => {
                  w.Get().ComputePackageState(u);
                });
            (0, x.ou)().Register(() => {
              for (const u of (0, B.OM)()) w.Get().ComputePackageState(u, !0);
            }),
              w.s_initializationCallbackList.Dispatch(!0);
          }
          OverridePackageDiscountPct(u, S, E) {
            const W = w.Get().m_mapPackageStateForDiscountEvents.get(u)?.get(S);
            if (W?.eState != q)
              return (
                console.error(
                  "Cannot change discount in current state:",
                  W.eState,
                ),
                null
              );
            const st = W.discount,
              ot = (0, x.Z6)(S),
              Mt = {
                nDiscountID: st?.nDiscountID,
                packageID: u,
                nDiscountPct: E,
                strDiscountName: ot.name,
                strDiscountDescription: ot.description,
                rtStartDate: ot.start_date,
                rtEndDate: ot.end_date,
                discountEventID: ot.id,
                bChangedLocally: !0,
              };
            return te(Mt, st)
              ? null
              : (this.m_mapLocalPackageDiscountOverrides.has(u) ||
                  this.m_mapLocalPackageDiscountOverrides.set(u, new Map()),
                this.m_mapLocalPackageDiscountOverrides.get(u).set(S, Mt),
                this.ComputePackageState(u),
                this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                  this.GetLocalPackageDiscountOverrides(),
                ),
                Mt);
          }
          GetHighestPackageDiscount(u) {
            let S = this.m_mapPackageStateForDiscountEvents.get(u);
            if (!S) return 0;
            let E = 0;
            return (
              S.forEach((W, st) => {
                W.eState == q &&
                  (E = Math.max(E, W.discount?.nDiscountPct || 0));
              }),
              E
            );
          }
          GetLocalPackageDiscountOverrides() {
            const u = [];
            return (
              this.m_mapLocalPackageDiscountOverrides.forEach((S) =>
                S.forEach((E) => {
                  const W = E.nDiscountID && (0, j.Lj)(E.nDiscountID);
                  te(E, W) || u.push(E);
                }),
              ),
              u.sort(i),
              u
            );
          }
          DiscardAllLocalPackageDiscountOverrides(u) {
            this.m_mapLocalPackageDiscountOverrides.clear();
            for (const S of u) this.ComputePackageState(S);
            this.GetLocalPackageDiscountOverrideCallbackList().Dispatch([]);
          }
          DiscardLocalPackageDiscountOverride(u, S) {
            this.m_mapLocalPackageDiscountOverrides.get(u)?.delete(S),
              this.ComputePackageState(u),
              this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                this.GetLocalPackageDiscountOverrides(),
              );
          }
          OptInRegistrationUpdatedForApp(u, S) {
            Array.from(this.m_mapPackageStateForDiscountEvents.values())
              .map((W) => W.get(S))
              .filter((W) => W?.nBaseAppID == u)
              .map((W) => W.packageID)
              ?.forEach((W) => this.ComputePackageState(W));
          }
          GetPackageDiscountsIncludingOverrides(u) {
            const E = (0, U.sB)() - f,
              W = (0, j.qN)(u);
            if (!W) return null;
            const st = new Map(
              W.filter((ot) => ot.rtEndDate > E).map((ot) => [
                ot.discountEventID,
                ot,
              ]),
            );
            return (
              this.m_mapLocalPackageDiscountOverrides
                .get(u)
                ?.forEach((ot, Mt) => {
                  const Tt = st.get(Mt);
                  te(ot, Tt) || st.set(Mt, ot);
                }),
              st
            );
          }
          GetDiscountGridCellCallbackList(u, S) {
            if (!u || !S) return null;
            this.m_mapDiscountGridCellCallbackList.has(u) ||
              this.m_mapDiscountGridCellCallbackList.set(u, new Map());
            const E = this.m_mapDiscountGridCellCallbackList.get(u);
            return E.has(S) || E.set(S, new J.lu()), E.get(S);
          }
          GetDiscountPackageCallbackList(u) {
            if (!u) return null;
            let S = this.m_mapDiscountPackageCallbackList.get(u);
            return (
              S ||
                ((S = new J.lu()),
                this.m_mapDiscountPackageCallbackList.set(u, S)),
              S
            );
          }
          GetDiscountEventColumnCallbackList(u) {
            return u
              ? (this.m_mapDiscountEventColumnCallbackList.has(u) ||
                  this.m_mapDiscountEventColumnCallbackList.set(u, new J.lu()),
                this.m_mapDiscountEventColumnCallbackList.get(u))
              : null;
          }
          GetLocalPackageDiscountOverrideCallbackList() {
            return this.m_localPackageDiscountOverrideCallbackList;
          }
          GetAllPackageStatesForDiscountEvent(u) {
            const S = [];
            return (
              w
                .Get()
                .m_mapPackageStateForDiscountEvents.forEach((E, W) =>
                  S.push(E.get(u)),
                ),
              S
            );
          }
          ComputePackageState(u, S) {
            const E = Q.A.Get().GetPackage(u);
            if (!E) return;
            const W = (0, x.E1)(),
              st = (0, l.i$)(E),
              ot = st.nBaseAppID;
            let Mt =
              ot && K.uL.Get().GetOptInRegistrationAndEligibilityForApp(ot);
            !ot &&
              !Mt &&
              (Mt = K.uL
                .Get()
                .GetOptInRegistrationAndEligibilityForApps(
                  E.GetIncludedAppIDs(),
                ));
            const Tt = !1,
              Jt = this.GetPackageDiscountsIncludingOverrides(u),
              Nt = !Jt,
              ae = Nt
                ? null
                : Array.from(Jt.values()).sort(
                    (zt, I) => zt.rtStartDate - I.rtStartDate,
                  );
            this.m_mapPackageStateForDiscountEvents.has(u) ||
              this.m_mapPackageStateForDiscountEvents.set(u, new Map());
            const Kt = this.m_mapPackageStateForDiscountEvents.get(u);
            for (const zt of W) {
              if (S && Kt.has(zt.id)) continue;
              const I = {
                packageID: u,
                discountEventID: zt.id,
                nBaseAppID: ot,
              };
              if (
                ((I.discount = Jt?.get(zt.id)),
                (I.bChangedLocally = !!I.discount?.bChangedLocally),
                Tt || Nt)
              )
                I.eState = it;
              else if (I.discount?.nDiscountPct > 0) {
                I.eState = q;
                const V = zt.opt_in_name && Mt?.get(zt.opt_in_name);
                V && (I.optInReg = V);
              } else {
                if (((I.eState = q), g(zt, E))) I.eState = h;
                else if (zt.opt_in_name) {
                  const { ePackageDiscountState: V, optInRegistration: $ } = L(
                    zt.opt_in_name,
                    Mt,
                    E,
                    st,
                    zt,
                  );
                  (I.eState = V), (I.optInReg = $);
                }
                if (I.eState != h && I.eState != A && I.eState != Bt) {
                  const V = N(u, zt, ae);
                  V.ePackageDiscountState != q &&
                    ((I.eState = V.ePackageDiscountState),
                    (I.rgConflictDetails = V.rgConflictingDiscounts.map(
                      ($) =>
                        (0, G.E7)($.discountEventID)?.name ?? $.strDiscountName,
                    )));
                }
              }
              mt(I, Kt.get(zt.id)) ||
                (Kt.set(zt.id, I),
                this.GetDiscountPackageCallbackList(u).Dispatch(),
                this.GetDiscountGridCellCallbackList(u, zt.id).Dispatch(I),
                this.GetDiscountEventColumnCallbackList(zt.id).Dispatch(
                  this.GetAllPackageStatesForDiscountEvent(zt.id),
                ));
            }
          }
          GetAvailableDiscountEventsInRange(u, S, E) {
            const W = this.m_mapPackageStateForDiscountEvents.get(u),
              st = new Set([q, Y, k, et]);
            return (0, x.E1)()
              .filter(
                (Mt) =>
                  S <= Mt.start_date &&
                  Mt.end_date <= E &&
                  st.has(W.get(Mt.id).eState),
              )
              .map((Mt) => Mt.id);
          }
          GetFurthestCooldownFromPastDiscounts(u) {
            const S = (0, U.sB)();
            let E = S;
            return (
              u
                .filter((W) => W.rtStartDate < S)
                .filter(
                  (W) => (0, G.E7)(W.discountEventID)?.collision_type != M.Lg,
                )
                .forEach((W) => {
                  W.rtEndDate + f < E && (E = W.rtEndDate + f);
                }),
              E
            );
          }
          GetFutureDiscountRanges(u) {
            const S = Q.A.Get().GetPackage(u),
              E = this.GetPackageDiscountsIncludingOverrides(u);
            if (!S || !E) return [];
            const W = Array.from(E.values()).sort(
                (V, $) => V.rtStartDate - $.rtStartDate,
              ),
              st = (0, U.sB)(),
              ot = S.GetReleaseDateRTime(),
              Mt = (0, x.zL)(u),
              Tt = this.GetFurthestCooldownFromPastDiscounts(W),
              Jt = Math.max(st, (ot ?? 0) + f, Mt + f, Tt),
              Nt = [],
              ae = new Set();
            let Kt = Jt;
            for (let V = 0; V < W.length; V++) {
              const $ = W[V];
              if ($.nDiscountPct == 0 || $.rtStartDate < Jt) continue;
              const tt = (0, G.E7)($.discountEventID);
              let ft = $.rtStartDate - f;
              const vt = tt?.collision_type == M.Lg;
              if (vt && ((ft = $.rtStartDate + p), V + 1 < W.length)) {
                const ct = W[V + 1];
                (0, x.Z6)(ct.discountEventID)?.collision_type != M.Lg &&
                  (ft = Math.min(ft, ct.rtStartDate - f));
              }
              if (Kt + X.Kp.PerDay < ft) {
                const ct = {
                  bIsAvailable: !0,
                  rtStartDate: Kt,
                  rtEndDate: ft,
                  rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                    u,
                    Kt,
                    ft,
                  ),
                };
                Nt.push(ct), ct.rgDiscountEventIDs.forEach((yt) => ae.add(yt));
              }
              const Gt = {
                bIsAvailable: !1,
                rtStartDate: $.rtStartDate,
                rtEndDate: $.rtEndDate,
                discount: $,
                rgDiscountEventIDs: [$.discountEventID],
              };
              if (
                (Nt.push(Gt),
                ae.add($.discountEventID),
                (Kt = $.rtEndDate + f),
                vt && ((Kt = $.rtEndDate - p), V - 1 >= 0))
              ) {
                const ct = W[V - 1];
                (0, x.Z6)(ct.discountEventID)?.collision_type != M.Lg &&
                  (Kt = Math.max(Kt, ct.rtEndDate + f));
              }
              const wt = (0, e.M)(Kt);
              wt - Kt <= X.Kp.PerHour * 2 && (Kt = wt);
            }
            const zt = (0, e.M)(st + X.Kp.PerYear / 2);
            if (Kt + X.Kp.PerDay < zt) {
              const V = {
                bIsAvailable: !0,
                rtStartDate: Kt,
                rtEndDate: zt,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  u,
                  Kt,
                  zt,
                ),
              };
              Nt.push(V), V.rgDiscountEventIDs.forEach(($) => ae.add($));
            }
            const I = (0, x.E1)().filter(
              (V) =>
                V.collision_type == M.Lg &&
                !ae.has(V.id) &&
                this.m_mapPackageStateForDiscountEvents.get(u).get(V.id)
                  .eState == q,
            );
            for (const V of I)
              for (let $ = 0; $ < Nt.length; $++)
                if (
                  Nt[$].rtStartDate <= V.start_date &&
                  ($ == Nt.length - 1 || V.start_date < Nt[$ + 1].rtStartDate)
                ) {
                  const tt = {
                    bIsAvailable: !0,
                    bMajorSaleOnly: !0,
                    rtStartDate: V.start_date,
                    rtEndDate: V.end_date,
                    rgDiscountEventIDs: [V.id],
                  };
                  Nt.splice($ + 1, 0, tt);
                  break;
                }
            return Nt;
          }
        }
        function N(y, u, S) {
          let E = q;
          const W = [];
          let st = !1;
          if (Q.A.Get().GetPackage(y)?.GetReleaseDateRTime() > u.start_date - f)
            return (
              (E = Lt),
              {
                ePackageDiscountState: E,
                rgConflictingDiscounts: W,
                bChangedLocally: st,
              }
            );
          if ((0, x.zL)(y) > u.start_date - f)
            return (
              (E = Dt),
              {
                ePackageDiscountState: E,
                rgConflictingDiscounts: W,
                bChangedLocally: st,
              }
            );
          for (const Tt of S) {
            if (u.id == Tt.discountEventID) continue;
            const Jt = (0, G.E7)(Tt.discountEventID),
              Nt = u.collision_type == M.Lg || Jt?.collision_type == M.Lg,
              ae = Nt ? u.start_date + p : u.start_date - f,
              Kt = Nt ? u.end_date - p : u.end_date + f;
            if (Tt.rtEndDate > ae && Kt > Tt.rtStartDate) {
              if (((st = st || Tt.bChangedLocally), Tt.nDiscountPct == 0))
                continue;
              W.push(Tt), (E = Nt ? ut : at);
            }
          }
          return {
            ePackageDiscountState: E,
            rgConflictingDiscounts: W,
            bChangedLocally: st,
          };
        }
        function L(y, u, S, E, W) {
          let st = Bt,
            ot;
          if (u)
            (ot = u.get(y)),
              !ot || ot.restricted || ot.pruned
                ? ((st = A), (ot = { restricted: !0 }))
                : ot.opt_in
                  ? (st = q)
                  : ot.invited || !ot.time_opted_in
                    ? (st = k)
                    : (st = et);
          else if (!E.nBaseAppID) {
            const Mt = S.GetIncludedAppIDs()
              .map((Tt) =>
                K.uL
                  .Get()
                  .GetOptInRegistrationAndEligibilityForApp(Tt)
                  ?.get(W.opt_in_name),
              )
              .filter(Boolean);
            Mt.some((Tt) => Tt.opt_in)
              ? (st = q)
              : Mt.some((Tt) => !Tt.restricted && !Tt.pruned) && (st = Y);
          }
          return { ePackageDiscountState: st, optInRegistration: ot };
        }
        function g(y, u) {
          if (y.appids?.length > 0) {
            if (u?.GetIncludedAppIDs()?.length) {
              const S = new Set(y.appids);
              for (const E of u.GetIncludedAppIDs()) {
                if (S.has(E)) return !1;
                const W = Q.A.Get().GetApp(E)?.GetParentAppID();
                if (W && S.has(W)) return !1;
              }
            }
            return !0;
          }
          return !1;
        }
        function i(y, u) {
          if (y.packageID != u.packageID) {
            const S = Q.A.Get().GetPackage(y.packageID)?.GetName(),
              E = Q.A.Get().GetPackage(u.packageID)?.GetName();
            return (0, Z.kd)(S, E);
          } else {
            const S = y.nDiscountPct == 0,
              E = u.nDiscountPct == 0;
            return S != E ? (S ? -1 : 1) : y.rtStartDate - u.rtStartDate;
          }
        }
        function a() {
          return R.useCallback(() => {
            w.Get();
          }, []);
        }
        function c() {
          const [y, u] = R.useState(w.IsInitialized());
          return (0, dt.hL)(w.s_initializationCallbackList, u), y;
        }
        function n() {
          const [y, u] = R.useState(w.Get().GetLocalPackageDiscountOverrides());
          return (
            (0, dt.hL)(
              w.Get().GetLocalPackageDiscountOverrideCallbackList(),
              u,
            ),
            y
          );
        }
        function s() {
          return R.useCallback(
            () => w.Get().GetLocalPackageDiscountOverrides()?.length > 0,
            [],
          );
        }
        function o() {
          return R.useCallback(
            (y) => w.Get().DiscardAllLocalPackageDiscountOverrides(y),
            [],
          );
        }
        function d() {
          return R.useCallback(
            (y, u) => w.Get().OptInRegistrationUpdatedForApp(y, u),
            [],
          );
        }
        function D() {
          return R.useCallback(
            (y, u) => w.Get().DiscardLocalPackageDiscountOverride(y, u),
            [],
          );
        }
        function v(y, u) {
          const S = w.Get().m_mapPackageStateForDiscountEvents.get(y)?.get(u);
          return S?.eState == q ? (S?.discount?.nDiscountPct ?? 0) : null;
        }
        function H(y, u) {
          const [S, E] = R.useState(() =>
            w.Get().m_mapPackageStateForDiscountEvents.get(y)?.get(u),
          );
          (0, dt.hL)(w.Get().GetDiscountGridCellCallbackList(y, u), E);
          const W = R.useCallback(
            (st) => {
              w.Get().OverridePackageDiscountPct(y, u, st);
            },
            [y, u],
          );
          return { packageState: S, fnSetDiscountPct: W };
        }
        function F() {
          return R.useCallback((y, u, S) => {
            const E = [];
            for (const W of S) {
              const st = w.Get().OverridePackageDiscountPct(W, u, y);
              st && E.push(st);
            }
            return E;
          }, []);
        }
        function O(y) {
          const u = rt(y);
          return R.useMemo(
            () => ({
              nAlreadySet: u.alreadySet.size,
              nAvailable: u.available.size,
              nConflicts: u.conflicts.size,
              nNeedRegistration: u.needRegistration.size,
              nIneligibile: u.ineligibile.size,
            }),
            [u],
          );
        }
        function rt(y) {
          const [u, S] = R.useState(() => P(y)),
            E = R.useCallback(() => {
              S(P(y));
            }, [y]);
          return (
            R.useEffect(E, [y, E]),
            (0, dt.hL)(w.Get().GetDiscountEventColumnCallbackList(y), E),
            u
          );
        }
        function P(y) {
          const u = w.Get().GetAllPackageStatesForDiscountEvent(y),
            S = {
              alreadySet: new Set(),
              available: new Set(),
              conflicts: new Set(),
              needRegistration: new Set(),
              ineligibile: new Set(),
            };
          for (const E of u)
            switch (E?.eState) {
              case it:
                break;
              case q:
                (E.discount?.nDiscountPct ?? 0) > 0
                  ? S.alreadySet.add(E.packageID)
                  : S.available.add(E.packageID);
                break;
              case Lt:
              case Dt:
              case at:
              case ut:
                S.conflicts.add(E.packageID);
                break;
              case k:
              case et:
                S.needRegistration.add(E.packageID);
                break;
              case A:
              case Bt:
              case h:
                S.ineligibile.add(E.packageID);
                break;
            }
          return S;
        }
        function St(y) {
          return !!(
            (0, j.$U)(y).some((u) => u.nDiscountPct > 0) ||
            (w.IsInitialized() &&
              w
                .Get()
                .GetAllPackageStatesForDiscountEvent(y)
                .some((u) => (u.discount?.nDiscountPct ?? 0) > 0))
          );
        }
        function nt(y, u = !0) {
          if ((0, j.Ko)(y)) return !0;
          if (!u && y.startsWith("weeklongdeal_")) return !1;
          const S = (0, G.E7)(y);
          if (!S?.opt_in_name) return !0;
          const E = K.uL.Get().GetAllOptInRegistrations(S.opt_in_name);
          return E?.length ? E.some((W) => !W.restricted && !W.pruned) : !1;
        }
        function ee(y) {
          const u = c(),
            [S, E] = R.useState(u ? w.Get().GetFutureDiscountRanges(y) : []),
            W = R.useCallback(
              () => E(u ? w.Get().GetFutureDiscountRanges(y) : []),
              [y, u],
            );
          return (
            (0, dt.hL)(
              u && w.Get().GetLocalPackageDiscountOverrideCallbackList(),
              W,
            ),
            (0, dt.hL)(u && (0, j.iI)(y), W),
            R.useEffect(W, [y, u, W]),
            S
          );
        }
        function re(y) {
          let u = () => w.Get().GetHighestPackageDiscount(y),
            [S, E] = R.useState(u),
            W = R.useCallback(() => {
              E(w.Get().GetHighestPackageDiscount(y));
            }, [y, E]);
          return (0, dt.hL)(w.Get().GetDiscountPackageCallbackList(y), W), S;
        }
      },
      75857: (ie, At, m) => {
        "use strict";
        m.d(At, {
          Ad: () => Bt,
          E1: () => x,
          Fs: () => Dt,
          Ix: () => k,
          Jn: () => at,
          Vk: () => J,
          Z6: () => it,
          dp: () => et,
          ou: () => q,
          ry: () => Q,
          u7: () => Lt,
          v8: () => U,
          zL: () => X,
        });
        var M = m(90626),
          G = m(7582),
          K = m(8323),
          j = m(54963),
          B = m(3166),
          l = m(26765),
          e = m(15659),
          R = m(55541);
        const U = "deepest-past",
          Q = "most-recent",
          J = "next-available",
          dt = "related-discount-view";
        class Z {
          m_rgDiscountEvents;
          m_mapDiscountEventsByID = new Map();
          m_discountEventsCallbackList = new K.lu();
          m_mapLastTimeRaisedPrices = new Map();
          m_strSelectedDiscountEventID = null;
          m_bIncludeWeeklongEvents = !1;
          m_bIncludeCustomEvents = !0;
          m_bIncludeIneligibleEvents = !1;
          m_bIncludeConflictsInSingleEventView = !0;
          m_bEditingDailyDealDiscount = !1;
          m_eRelatedDiscountView = U;
          m_RelatedDiscountViewCallbackList = new K.lu();
          m_gridEventSelectionParametersCallbackList = new K.lu();
          m_setVisibleDiscountEventIDs = new Set();
          m_visibleDiscountEventIDsCallbackList = new K.lu();
          static s_Singleton;
          static Get() {
            return (
              Z.s_Singleton ||
                ((Z.s_Singleton = new Z()), Z.s_Singleton.Init()),
              Z.s_Singleton
            );
          }
          constructor() {}
          Init() {
            const h = (0, B.Tc)("price_increase_times", "application_config");
            if (this.BIsPriceIncreasePayloadValid(h))
              for (let Y in h)
                this.m_mapLastTimeRaisedPrices.set(Number(Y), h[Y]);
            (this.m_eRelatedDiscountView =
              window.localStorage.getItem(dt) ?? U),
              this.UpdateDiscountEventsForGrid(),
              (0, l.yB)().Register(() => this.UpdateDiscountEventsForGrid()),
              (0, e.w8)().Register(() => this.UpdateDiscountEventsForGrid()),
              this.SetEventSelectionParametersFromURL(),
              this.UpdateVisibleDiscountEventIDs();
          }
          UpdateDiscountEventsForGrid() {
            const h = (0, l.tW)(),
              Y = (0, e.Mh)(),
              mt = new Set(h.map((f) => f.id)),
              te = [],
              _ = (0, G.sB)();
            for (const f of Y)
              f.rtEndDate > _ &&
                (mt.has(f.discountEventID) ||
                  (te.push({
                    id: f.discountEventID,
                    name: f.strDiscountName,
                    start_date: f.rtStartDate,
                    end_date: f.rtEndDate,
                    description: f.strDiscountDescription,
                  }),
                  mt.add(f.discountEventID)));
            (!this.m_rgDiscountEvents ||
              mt.size != this.m_rgDiscountEvents.length ||
              this.m_rgDiscountEvents.some((f) => !mt.has(f.id))) &&
              ((this.m_rgDiscountEvents = te.concat(h)),
              this.m_rgDiscountEvents.sort((f, p) =>
                f.start_date == p.start_date
                  ? f.end_date - p.end_date
                  : f.start_date - p.start_date,
              ),
              (this.m_mapDiscountEventsByID = new Map(
                this.m_rgDiscountEvents.map((f) => [f.id, f]),
              )),
              this.UpdateVisibleDiscountEventIDs(),
              this.m_discountEventsCallbackList.Dispatch(
                this.m_rgDiscountEvents,
              ));
          }
          UpdateVisibleDiscountEventIDs() {
            this.SetEventSelectionParametersFromURL(),
              (this.m_setVisibleDiscountEventIDs = new Set());
            for (const h of this.m_rgDiscountEvents) {
              let Y = this.m_strSelectedDiscountEventID == null;
              Y && !this.m_bIncludeCustomEvents && (0, e.Ko)(h.id) && (Y = !1),
                Y &&
                  !this.m_bIncludeWeeklongEvents &&
                  h.id.startsWith("weeklongdeal_") &&
                  !(0, R._9)(h.id) &&
                  (Y = !1),
                Y &&
                  !this.m_bIncludeIneligibleEvents &&
                  !(0, R.wk)(h.id) &&
                  (Y = !1),
                this.m_strSelectedDiscountEventID == h.id && (Y = !0),
                Y && this.m_setVisibleDiscountEventIDs.add(h.id);
            }
            this.m_visibleDiscountEventIDsCallbackList.Dispatch(
              this.m_setVisibleDiscountEventIDs,
            );
          }
          BIsPriceIncreasePayloadValid(h) {
            const Y = h;
            if (Y && typeof Y == "object") {
              for (let mt in Y)
                if (isNaN(parseInt(mt)) || typeof Y[mt] != "number") return !1;
              return !0;
            }
            return !1;
          }
          SetEventSelectionParametersFromURL() {
            const h = new URLSearchParams(window.location.search);
            if (h.has("de")) {
              const Y = decodeURIComponent(h.get("de"));
              this.m_mapDiscountEventsByID.has(Y) &&
                (this.m_strSelectedDiscountEventID = Y);
            }
            if (h.has("wd")) {
              const Y = h.get("wd");
              this.m_bIncludeWeeklongEvents = Y != "0";
            }
            if (h.has("cd")) {
              const Y = h.get("cd");
              this.m_bIncludeCustomEvents = Y != "0";
            }
            if (h.has("cf")) {
              const Y = h.get("cf");
              this.m_bIncludeConflictsInSingleEventView = Y != "0";
            }
            if (h.has("dd")) {
              const Y = h.get("dd");
              this.m_bEditingDailyDealDiscount = Y != "0";
            }
          }
          HandleEventSelectionChangeAndNotifyListeners() {
            const h = new URL(window.location.href);
            this.m_strSelectedDiscountEventID
              ? h.searchParams.set(
                  "de",
                  encodeURIComponent(this.m_strSelectedDiscountEventID),
                )
              : h.searchParams.delete("de"),
              this.m_bIncludeWeeklongEvents
                ? h.searchParams.set("wd", "1")
                : h.searchParams.delete("wd"),
              this.m_bIncludeCustomEvents
                ? h.searchParams.delete("cd")
                : h.searchParams.set("cd", "0"),
              this.m_bIncludeConflictsInSingleEventView
                ? h.searchParams.delete("cf")
                : h.searchParams.set("cf", "0"),
              this.m_bEditingDailyDealDiscount &&
                ((this.m_bEditingDailyDealDiscount = !1),
                h.searchParams.delete("dd")),
              window.history.replaceState({}, "", h.toString()),
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
              fnSelectEvent: (h) => {
                (this.m_strSelectedDiscountEventID = h),
                  this.HandleEventSelectionChangeAndNotifyListeners();
              },
              bIncludeWeeklongEvents: this.m_bIncludeWeeklongEvents,
              fnSetIncludeWeeklongEvents: (h) => {
                (this.m_bIncludeWeeklongEvents = h),
                  this.HandleEventSelectionChangeAndNotifyListeners();
              },
              bIncludeCustomEvents: this.m_bIncludeCustomEvents,
              fnSetIncludeCustomEvents: (h) => {
                (this.m_bIncludeCustomEvents = h),
                  this.HandleEventSelectionChangeAndNotifyListeners();
              },
              bIncludeConflictsInSingleEventView:
                this.m_bIncludeConflictsInSingleEventView,
              fnSetIncludeConflictsInSingleEventView: (h) => {
                (this.m_bIncludeConflictsInSingleEventView = h),
                  this.HandleEventSelectionChangeAndNotifyListeners();
              },
            };
          }
        }
        function X(ut) {
          return Z.Get().m_mapLastTimeRaisedPrices.get(ut) ?? 0;
        }
        function x() {
          return Z.Get().m_rgDiscountEvents;
        }
        function it(ut) {
          return Z.Get().m_mapDiscountEventsByID.get(ut);
        }
        function q() {
          return Z.Get().m_discountEventsCallbackList;
        }
        function k() {
          const [ut, h] = M.useState(Z.Get().m_rgDiscountEvents);
          return (0, j.hL)(Z.Get().m_discountEventsCallbackList, h), ut;
        }
        function et() {
          const [ut, h] = M.useState(Z.Get().m_setVisibleDiscountEventIDs);
          return (
            (0, j.hL)(Z.Get().m_visibleDiscountEventIDsCallbackList, h), ut
          );
        }
        function A(ut = !0) {
          return Z.Get().m_setVisibleDiscountEventIDs;
        }
        function Bt(ut) {
          const [h, Y] = M.useState(Z.Get().m_mapDiscountEventsByID.get(ut)),
            mt = M.useCallback(
              () => Y(Z.Get().m_mapDiscountEventsByID.get(ut)),
              [ut],
            );
          return (
            (0, j.hL)(Z.Get().m_discountEventsCallbackList, mt),
            M.useEffect(mt, [ut, mt]),
            h
          );
        }
        function Lt(ut = !0) {
          const [h, Y] = M.useState(Z.Get().GetEventSelectionParameters()),
            mt = ut ? Z.Get().m_gridEventSelectionParametersCallbackList : null;
          return (0, j.hL)(mt, Y), h;
        }
        function Dt() {
          const [ut, h] = M.useState(Z.Get().m_eRelatedDiscountView);
          (0, j.hL)(Z.Get().m_RelatedDiscountViewCallbackList, h);
          const Y = M.useCallback((mt) => {
            (Z.Get().m_eRelatedDiscountView = mt),
              window.localStorage.setItem(dt, mt),
              Z.Get().m_RelatedDiscountViewCallbackList.Dispatch(mt);
          }, []);
          return [ut, Y];
        }
        function at() {
          return M.useCallback(() => {
            Z.Get().UpdateVisibleDiscountEventIDs();
          }, []);
        }
      },
      95146: (ie, At, m) => {
        "use strict";
        m.d(At, {
          HA: () => k,
          IR: () => f,
          NP: () => mt,
          Xr: () => p,
          ZN: () => _,
          mE: () => h,
          rK: () => et,
          sF: () => Y,
          uv: () => at,
        });
        var M = m(7850),
          G = m(90626),
          K = m(71421),
          j = m(3166),
          B = m(18210),
          l = m(61010),
          e = m.n(l),
          R = m(75233),
          U = m(37424),
          Q = m(64238),
          J = m.n(Q),
          dt = m(15659),
          Z = m(55541),
          X = m(249),
          x = m(36118),
          it = m(601);
        const q = (0, G.createContext)(void 0);
        function k() {
          const w = (0, G.useContext)(q);
          if (!w) throw new Error("Missing GridRowContextProvider");
          return w;
        }
        function et(w) {
          const { children: N, fnBLocalChangesExist: L, fnWarnUser: g } = w,
            i = (0, R.jE)(),
            a = G.useMemo(
              () => ({ client: i, fnBLocalChangesExist: L, fnWarnUser: g }),
              [L, g, i],
            );
          return (0, M.jsx)(q.Provider, { value: a, children: N });
        }
        function A(w) {
          const { row: N } = w,
            L = N.original.packageID || 0,
            g = (0, Z.C5)(L);
          let a = (0, dt.$p)(L) < g,
            c = J()(
              e().PackageNameColumn,
              a && e().PackagePricesBelowMin,
              N.original.packageType,
            ),
            n = a
              ? (0, B.we)("#PackageGrid_VisitPackageDiscount_Tooltip_Error")
              : (0, B.we)("#PackageGrid_VisitPackagePricing_Tooltip");
          return (0, M.jsx)(Dt, { className: c, toolTip: n, ...w });
        }
        function Bt(w) {
          const { row: N } = w,
            L = N.original.packageID || 0,
            g = (0, U.nT)(L);
          let i = J()(
              e().PackageNameColumn,
              g && e().PackagePricesBelowMin,
              N.original.packageType,
            ),
            a = g
              ? (0, B.we)("#PackageGrid_VisitPackagePricing_Tooltip_Error")
              : (0, B.we)("#PackageGrid_VisitPackagePricing_Tooltip");
          return (0, M.jsx)(Dt, {
            className: i,
            toolTip: a,
            showUnreleased: !0,
            ...w,
          });
        }
        function Lt(w) {
          const { column: N } = w,
            [L, g] = (0, G.useState)(N.getFilterValue() ?? "");
          return (0, M.jsxs)("div", {
            className: e().PackageNameHeader,
            children: [
              (0, B.we)("#PackageGrid_Column_PackageName"),
              (0, M.jsx)("input", {
                placeholder: (0, B.we)(
                  "#PackageGrid_PackageNameFilterInputPrompt",
                ),
                value: L,
                onChange: (i) => {
                  g(i.target.value.toString()),
                    (0, G.startTransition)(() =>
                      w.column.setFilterValue(i.target.value.toString()),
                    );
                },
              }),
            ],
          });
        }
        function Dt(w) {
          const { fnBLocalChangesExist: N, fnWarnUser: L } = k(),
            { cell: g, row: i, className: a, toolTip: c } = w,
            n = i.original.packageID,
            s =
              g.getValue() ??
              (0, M.jsxs)("span", {
                className: e().UnknownValue,
                children: [" ", (0, B.we)("#PackageGrid_PackageID", n)],
              });
          return (0, M.jsxs)(p, {
            fnBLocalChangesExist: N,
            fnWarnUser: L,
            href: `${j.TS.PARTNER_BASE_URL}store/packagelanding/${n}`,
            strToolTip: c,
            strClassName: a,
            children: [
              (0, M.jsx)(x.eTF, {
                color: "rgb(194, 45, 0)",
                className: e().PriceWarningBad,
              }),
              w.showUnreleased &&
                !("released" in i.original && i.original.released) &&
                (0, M.jsxs)(M.Fragment, {
                  children: [
                    (0, M.jsx)(K.Gq, {
                      toolTipContent: (0, B.we)(
                        "#PackageGrid_PackageUnpublishedTooltip",
                      ),
                      children: (0, M.jsx)(X.ZyV, {
                        width: "14px",
                        height: "14px",
                      }),
                    }),
                    " \xA0",
                  ],
                }),
              " ",
              s,
            ],
          });
        }
        function at() {
          return G.useMemo(
            () => ({
              accessorKey: "packageID",
              header: (0, B.we)("#PackageGrid_Column_PackageID"),
              enableSorting: !1,
              size: 90,
              cell: (w) =>
                (0, M.jsx)(Dt, {
                  ...w,
                  toolTip: (0, B.we)("#PackageGrid_Column_PackageID_ttip"),
                }),
              meta: { cellClassname: e().PackageID },
            }),
            [],
          );
        }
        function ut(w, N, L) {
          let g = /^\d+$/.test(L);
          const i = w.original.packageID;
          return g && i && i.toString().startsWith(L)
            ? !0
            : w.getValue(N).toLowerCase().includes(L.toLowerCase());
        }
        function h(w) {
          return G.useMemo(
            () => ({
              accessorKey: "packageName",
              header: Lt,
              enableSorting: !1,
              meta: {
                strHeaderTooltip: (0, B.we)(
                  "#PackageGrid_Column_PackageName_ttip",
                ),
                cellClassname: e().PackageName,
              },
              filterFn: ut,
              cell: w ? A : Bt,
              size: 300,
            }),
            [w],
          );
        }
        function Y() {
          return G.useMemo(() => ({ accessorKey: "appids" }), []);
        }
        function mt() {
          return G.useMemo(
            () => ({
              accessorKey: "packageType",
              header: (0, B.we)("#PackageGrid_Column_PackageType"),
              enableSorting: !1,
              meta: {
                strHeaderTooltip: (0, B.we)(
                  "#PackageGrid_Column_PackageType_ttip",
                ),
                cellClassname: e().PackageType,
              },
            }),
            [],
          );
        }
        function te(w) {
          const { row: N } = w,
            { fnBLocalChangesExist: L, fnWarnUser: g } = k(),
            a = N.original.appids?.length ?? 0,
            c = N.original.packageID;
          return (0, M.jsx)(p, {
            fnBLocalChangesExist: L,
            fnWarnUser: g,
            href: `${j.TS.PARTNER_BASE_URL}store/packagelanding/${c}`,
            strToolTip: (0, B.we)("#PackageGrid_VisitPackagePricing_Tooltip"),
            children: a == 1 ? "1 appid" : a + " appids",
          });
        }
        function _() {
          return G.useMemo(
            () => ({
              accessorKey: "appName",
              header: (0, B.we)("#PackageGrid_Column_AppName"),
              cell: te,
              size: 80,
              sortingFn: it.es,
              meta: {
                strHeaderTooltip: (0, B.we)("#PackageGrid_Column_AppName_ttip"),
                bDisableSortButton: !0,
                cellClassname: e().AppCount,
              },
            }),
            [],
          );
        }
        function f(w) {
          const N = w.groupingValue,
            L = (0, B.we)("#PackageGrid_NoBaseGameFoundForPackage");
          return (0, M.jsxs)(M.Fragment, {
            children: [
              N === L
                ? (0, M.jsxs)("span", {
                    title: (0, B.we)("#PackageGrid_NoBaseGameExplanation"),
                    children: [N, " (?)"],
                  })
                : N,
              (0, M.jsxs)("span", {
                className: e().RowItemCount,
                children: [
                  "(",
                  (0, B.Yp)("#PackageGrid_PackageCount", w.subRows.length),
                  ")",
                ],
              }),
            ],
          });
        }
        function p(w) {
          const {
              fnBLocalChangesExist: N,
              fnWarnUser: L,
              href: g,
              children: i,
              strToolTip: a,
              strClassName: c,
            } = w,
            n = (s) => {
              N() && (s.preventDefault(), L(s, g));
            };
          return (0, M.jsx)(K.he, {
            toolTipContent: a,
            className: c,
            children: (0, M.jsx)("a", { onClick: n, href: g, children: i }),
          });
        }
      },
      40396: (ie, At, m) => {
        "use strict";
        m.d(At, { h: () => K });
        var M = m(90626),
          G = m(18210);
        function K(j) {
          const B = M.useCallback(
            (l) => {
              if (j())
                return (
                  l.preventDefault(),
                  (l.returnValue = (0, G.we)(
                    "#PackageGrid_NavigationWarning_Title",
                  )),
                  l.returnValue
                );
            },
            [j],
          );
          M.useEffect(
            () => (
              window.addEventListener("beforeunload", B),
              () => window.removeEventListener("beforeunload", B)
            ),
            [B],
          );
        }
      },
      11636: (ie, At, m) => {
        "use strict";
        m.d(At, { Hf: () => U, i$: () => e, qP: () => B });
        var M = m(72604),
          G = m(44420),
          K = m(10142),
          j = m(18210);
        const B = new Set([G.uE.HT, G.uE.RA, G.uE.Sv, G.uE.Lj]),
          l = new Set([G.uE._i, G.uE.Wz, G.uE.Ov]);
        function e(Q) {
          let J = !1,
            dt = !1,
            Z;
          const X = new Set();
          for (const q of Q?.GetIncludedAppIDs() ?? []) {
            const k = K.A.Get().GetApp(q);
            if (k && B.has(k.GetAppType())) (J = !0), X.add(k.GetID());
            else if (k && l.has(k.GetAppType())) {
              dt = !0;
              const et = k.GetParentAppID();
              et && X.add(et);
            }
          }
          let x = null;
          return (
            X.size == 1
              ? ((Z = Array.from(X)[0]), (x = K.A.Get().GetApp(Z)?.GetName()))
              : X.size > 1 &&
                (x = (0, j.we)(
                  "#PackageGrid_MultipleBaseGamesFoundForPackage",
                )),
            x || (x = (0, j.we)("#PackageGrid_NoBaseGameFoundForPackage")),
            {
              baseAppName: x,
              contents: J && dt ? "BOTH" : J ? "GAME" : dt ? "DLC" : null,
              nBaseAppID: Z,
            }
          );
        }
        const R = { include_release: !0 };
        async function U(Q, J) {
          if (
            (await K.A.Get().HintLoadStorePackages(Q, R)) != M.R ||
            J.token.reason
          )
            return null;
          const Z = [];
          Q.map((A) => K.A.Get().GetPackage(A))
            .filter((A) => !!A)
            .forEach((A) => Z.push(...A.GetIncludedAppIDs()));
          const X = Array.from(new Set(Z));
          if (
            (await K.A.Get().HintLoadStoreApps(X, R)) != M.R ||
            J.token.reason
          )
            return null;
          const it = X.map((A) => K.A.Get().GetApp(A))
              .filter((A) => !!A?.GetParentAppID())
              .map((A) => A.GetParentAppID()),
            q = Array.from(new Set(it));
          return (await K.A.Get().HintLoadStoreApps(q, R)) != M.R ||
            J.token.reason
            ? null
            : Array.from(new Set(X.concat(q)));
        }
      },
      32: (ie, At, m) => {
        "use strict";
        m.d(At, { k: () => f });
        var M = m(7850),
          G = m(18938),
          K = m(67796),
          j = m(16666),
          B = m(92148),
          l = m(59366),
          e = m(64238),
          R = m.n(e),
          U = m(90626),
          Q = m(31718),
          J = m.n(Q),
          dt = m(19298),
          Z = m(20169),
          X = m(79089),
          x = m(33902);
        const it = U.memo(function (o) {
          const {
              virtualizer: d,
              bDynamic: D,
              scrollAlign: v,
              bNativeScrollIntoView: H,
              idx: F,
              rowGap: O,
              renderItem: rt,
            } = o,
            P = U.useCallback(
              (St, nt, ee) => (d.scrollToIndex(F, { align: v }), !0),
              [d, F, v],
            );
          return (0, M.jsx)(dt.Z, {
            ref: D ? d.measureElement : void 0,
            navKey: `VirtualizedListIndex-${F}`,
            "data-index": F,
            fnScrollIntoViewHandler: H ? void 0 : P,
            scrollIntoViewWhenChildFocused: "force",
            style: { width: "100%", paddingBottom: O },
            children: rt(F),
          });
        });
        function q(s) {
          return (0, G.QS)(
            (o) => {
              if (!o) return;
              const d = new o.ownerDocument.defaultView.ResizeObserver((H) => {
                s(H[0]);
              });
              let D = [],
                v = o;
              for (; v && v != null; )
                d.observe(v), D.push(v), (v = v.parentElement);
              return () => {
                D.forEach((H) => d.unobserve(H));
              };
            },
            [s],
          );
        }
        function k(s, o) {
          const d = s.getBoundingClientRect().top;
          return o
            ? d - o.getBoundingClientRect().top - o.clientTop + o.scrollTop
            : d + (s.ownerDocument.defaultView?.scrollY ?? 0);
        }
        const et = U.forwardRef(function (o, d) {
          const {
              nRows: D,
              nItemHeight: v,
              nRowGap: H,
              overscan: F,
              renderItem: O,
              bDynamic: rt,
              measureElement: P,
              className: St,
              forceVirtualizeType: nt,
              hintVirtualizeType: ee,
              scrollAlign: re,
              bNativeScrollIntoView: y,
              initialOffset: u,
              onOffsetChange: S,
              ...E
            } = o,
            [W, st] = (0, U.useState)(nt ?? ee),
            [ot, Mt] = U.useState(),
            [Tt, Jt] = U.useState(),
            Nt = U.useRef(null),
            ae = U.useCallback(
              (V) => {
                if (!V) return;
                const $ = (0, X._f)(V, "y"),
                  tt = k(V, nt == "window" ? null : $);
                (0, U.startTransition)(() => {
                  nt != "window" && Mt($ || void 0),
                    Jt(tt),
                    nt || st($ ? "element" : "window");
                });
              },
              [nt],
            ),
            Kt = q((V) => {
              if (!Nt.current) return;
              const $ = k(Nt.current, ot);
              (0, U.startTransition)(() => {
                Jt($);
              });
            }),
            zt = (0, G.Ue)(ae, Nt, Kt, d),
            I = {
              nRows: D,
              nItemHeight: v,
              nRowGap: H,
              overscan: F,
              renderItem: O,
              bDynamic: rt,
              measureElement: P,
              forceVirtualizeType: nt,
              hintVirtualizeType: ee,
              scrollAlign: re,
              bNativeScrollIntoView: y,
              initialOffset: u,
              onOffsetChange: S,
            };
          return (0, M.jsx)(dt.Z, {
            className: St,
            ref: zt,
            ...E,
            children: (0, M.jsxs)(U.Suspense, {
              children: [
                W === "element" &&
                  (0, M.jsx)(Lt, {
                    ...I,
                    nScrollMargin: Tt || 0,
                    elScrollable: ot,
                  }),
                W === "window" && (0, M.jsx)(Bt, { ...I, nScrollMargin: Tt }),
              ],
            }),
          });
        });
        function A(s, o, d) {
          U.useEffect(() => {
            d ||
              (0, U.startTransition)(() => {
                s.measure();
              });
          }, [s, o, d]);
        }
        function Bt(s) {
          const {
              nScrollMargin: o,
              nRows: d,
              nItemHeight: D,
              nRowGap: v = 10,
              overscan: H = 6,
              initialOffset: F,
              onOffsetChange: O,
              measureElement: rt,
              bDynamic: P,
            } = s,
            St = (0, x.d)(),
            nt = D + v,
            ee = (0, B.XW)({
              count: d,
              scrollMargin: o,
              estimateSize: U.useCallback(() => nt, [nt]),
              measureElement: rt,
              overscan: H,
              initialOffset: F ?? (() => window.scrollY),
              initialRect: void 0,
              observeElementOffset: ut,
              observeElementRect: h,
              onChange(re, y) {
                O?.(re.scrollOffset);
              },
            });
          return (
            (ee.shouldAdjustScrollPositionOnItemSizeChange = (re) =>
              o !== void 0 && re.start < (ee.scrollOffset ?? 0)),
            A(ee, nt, P),
            (0, M.jsx)(Dt, { ...s, virtualizer: ee })
          );
        }
        function Lt(s) {
          const {
              nRows: o,
              nScrollMargin: d,
              elScrollable: D,
              nItemHeight: v,
              nRowGap: H = 10,
              overscan: F = 6,
              initialOffset: O,
              onOffsetChange: rt,
              measureElement: P,
              bDynamic: St,
            } = s,
            nt = v + H,
            ee = (0, x.d)(),
            re = (0, B.Te)({
              count: o,
              scrollMargin: d,
              getScrollElement: () => (
                D &&
                  re.scrollElement !== D &&
                  O === void 0 &&
                  (re.scrollOffset = D.scrollTop),
                D ?? null
              ),
              estimateSize: U.useCallback(() => nt, [nt]),
              measureElement: P,
              overscan: F,
              initialRect: D
                ? void 0
                : {
                    height: ee.viewportHeight?.value ?? 1e3,
                    width: ee.viewportWidth?.value ?? 1e3,
                  },
              initialOffset: O,
              observeElementOffset: ut,
              observeElementRect: Y,
              onChange(y, u) {
                rt?.(y.scrollOffset);
              },
            });
          return (
            (re.shouldAdjustScrollPositionOnItemSizeChange = (y) =>
              D !== void 0 && y.start < (re.scrollOffset ?? 0)),
            A(re, nt, St),
            (0, M.jsx)(Dt, { ...s, virtualizer: re })
          );
        }
        function Dt(s) {
          const {
              virtualizer: o,
              nRowGap: d,
              renderItem: D,
              bDynamic: v,
              scrollAlign: H = "center",
              bNativeScrollIntoView: F,
            } = s,
            O = o.getVirtualItems(),
            rt = O.length ? O[0].start - o.options.scrollMargin : 0,
            P = Math.max(0, o.getTotalSize());
          return (0, M.jsx)(dt.Z, {
            "flow-children": "column",
            navEntryPreferPosition: Z.iU.MAINTAIN_Y,
            style: { height: `${P}px`, width: "100%", position: "relative" },
            children: (0, M.jsx)("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY( ${rt}px )`,
              },
              children: O.map((St) =>
                (0, M.jsx)(
                  it,
                  {
                    virtualizer: o,
                    bDynamic: v,
                    scrollAlign: H,
                    bNativeScrollIntoView: F,
                    idx: St.index,
                    rowGap: d,
                    renderItem: D,
                  },
                  St.key,
                ),
              ),
            }),
          });
        }
        function at(s) {
          return (...o) => {
            queueMicrotask(() => {
              (0, U.startTransition)(() => {
                s(...o);
              });
            });
          };
        }
        function ut(s, o) {
          const d = s.scrollElement;
          if (!d) return;
          let D;
          "scrollX" in d
            ? (D = at((F) =>
                o(d[s.options.horizontal ? "scrollX" : "scrollY"], F),
              ))
            : (D = at((F) =>
                o(d[s.options.horizontal ? "scrollLeft" : "scrollTop"], F),
              ));
          const v = () => D(!0),
            H = () => D(!1);
          return (
            H(),
            d.addEventListener("scroll", v, { passive: !0 }),
            d.addEventListener("scrollend", H, { passive: !0 }),
            () => {
              d.removeEventListener("scroll", v),
                d.removeEventListener("scrollend", H);
            }
          );
        }
        function h(s, o) {
          const d = s.scrollElement;
          if (!d) return;
          const D = at(() => o({ width: d.innerWidth, height: d.innerHeight }));
          return (
            D(),
            d.addEventListener("resize", D, { passive: !0 }),
            () => {
              d.removeEventListener("resize", D);
            }
          );
        }
        function Y(s, o) {
          const d = s.scrollElement;
          if (!d) return;
          const D = at((F) =>
            o({ width: Math.round(F.width), height: Math.round(F.height) }),
          );
          D(d.getBoundingClientRect());
          const v = d.ownerDocument.defaultView;
          if (!v?.ResizeObserver) return () => {};
          const H = new v.ResizeObserver((F) => {
            if (F[0]?.borderBoxSize[0]) {
              D({
                width: F[0].borderBoxSize[0].inlineSize,
                height: F[0].borderBoxSize[0].blockSize,
              });
              return;
            }
            D(d.getBoundingClientRect());
          });
          return (
            H.observe(d, { box: "border-box" }),
            () => {
              H.unobserve(d);
            }
          );
        }
        var mt = m(11243);
        const te = U.createContext(void 0);
        function _(s) {
          const { table: o, setColumnSizeOverride: d } = s,
            D = (0, U.useRef)(o);
          D.current = o;
          const v = (0, U.useMemo)(
            () => ({ table: D.current, setColumnSizeOverride: d }),
            [d],
          );
          return (0, M.jsx)(te.Provider, { value: v, children: s.children });
        }
        const f = U.forwardRef(function (o, d) {
          const {
              data: D,
              columns: v,
              className: H,
              width: F,
              height: O,
              nScrollMargin: rt,
              nItemHeight: P,
              nHeaderHeight: St,
              overscan: nt = 6,
              stickyHeader: ee,
              getRowKey: re,
              initialSorting: y,
              initialColumnFilters: u,
              initialGrouping: S,
              initialExpanded: E,
              initialColumnPinning: W,
              initialColumnVisibility: st,
              onGroupingChange: ot,
              onVisibleRowsChange: Mt,
              renderGroup: Tt,
              virtualizeType: Jt = "element",
            } = o,
            Nt = (0, U.useRef)(null),
            [ae, Kt] = (0, U.useState)({}),
            [zt, I] = (0, U.useState)({}),
            V = v.map((z) =>
              "accessorKey" in z
                ? { ...z, filterFn: ae[z.accessorKey] ?? z.filterFn }
                : z,
            ),
            $ = V.map((z) => {
              let C = zt[z.id];
              return (
                C === void 0 && "accessorKey" in z && (C = zt[z.accessorKey]),
                (C ??= z.size),
                { ...z, size: C }
              );
            }),
            tt = (0, K.N4)({
              data: D,
              columns: $,
              defaultColumn: { minSize: 60, maxSize: 800 },
              initialState: {
                sorting: y,
                grouping: S ?? [],
                expanded: E,
                columnPinning: W ?? {},
                columnFilters: u,
                columnVisibility: st,
              },
              getCoreRowModel: (0, j.HT)(),
              getSortedRowModel: (0, j.h5)(),
              getFilteredRowModel: (0, j.hM)(),
              getGroupedRowModel: (0, j.cU)(),
              columnResizeMode: "onChange",
            }),
            { rows: ft, flatRows: vt } = tt.getRowModel(),
            Gt = ft.flatMap((z) => (z.getIsExpanded() ? [z, ...z.subRows] : z)),
            wt = tt.getState().grouping;
          (0, U.useEffect)(() => {
            ot?.(wt);
          }, [ot, wt]),
            (0, U.useEffect)(() => {
              Mt?.(Gt);
            }, [Mt, Gt.length]);
          const ct = (0, B.Te)({
              count: Gt.length,
              scrollMargin: rt,
              getScrollElement: U.useCallback(
                () => (Jt === "element" ? Et.current : window),
                [Jt],
              ),
              scrollToFn(z, C, lt) {
                return Jt === "window"
                  ? (0, l.e8)(z, C, lt)
                  : (0, l.Ox)(z, C, lt);
              },
              estimateSize: U.useCallback(() => P, [P]),
              overscan: nt,
              initialRect: void 0,
              observeElementOffset: ut,
              observeElementRect(z, C) {
                return Jt === "window" ? h(z, C) : Y(z, C);
              },
              getItemKey(z) {
                const C = Gt[z];
                return `${C.parentId ?? ""}${re(z, C.original)}`;
              },
            }),
            yt = (0, U.useRef)(0),
            Vt = U.useMemo(() => {
              const z = tt.getFlatHeaders(),
                C = {};
              for (let lt = 0; lt < z.length; lt++) {
                const gt = z[lt];
                (C[`--header-${gt.id}-size`] = `${gt.getSize()}px`),
                  (C[`--col-${gt.column.id}-size`] =
                    `${gt.column.getSize()}px`);
              }
              return (yt.current += 1), C;
            }, [tt.getState().columnSizingInfo, tt.getState().columnSizing, v]);
          U.useEffect(() => {
            (0, U.startTransition)(() => {
              ct.measure();
            });
          }, [ct, P]);
          const kt = ct.getVirtualItems(),
            Ht = kt[0]?.start ?? 0,
            Ut = ct.getTotalSize(),
            ht = (0, B.Te)({
              estimateSize(z) {
                return Gt[0]?.getVisibleCells()[z].column.getSize() ?? 0;
              },
              count: Gt[0]?.getVisibleCells().length ?? 0,
              overscan: 6,
              horizontal: !0,
              getScrollElement: U.useCallback(
                () => (Jt === "element" ? Et.current : window),
                [Jt],
              ),
              scrollToFn(z, C, lt) {
                return Jt === "window"
                  ? (0, l.e8)(z, C, lt)
                  : (0, l.Ox)(z, C, lt);
              },
              rangeExtractor(z) {
                const C = Gt[0]?.getVisibleCells() ?? [],
                  lt = new Set((0, l.vp)(z));
                return (
                  C.forEach((gt, jt) => {
                    gt.column.getIsPinned() && lt.add(jt);
                  }),
                  Array.from(lt).sort((gt, jt) => gt - jt)
                );
              },
              observeElementOffset: ut,
              observeElementRect(z, C) {
                return Jt === "window" ? h(z, C) : Y(z, C);
              },
            });
          (0, U.useEffect)(() => {
            ht.measure();
          }, [yt.current]),
            (0, U.useImperativeHandle)(
              d,
              () => ({
                getData() {
                  return vt.map((z) => z.original);
                },
                getVisibleRows() {
                  return Gt;
                },
                getState: tt.getState,
                getColumns: tt.getAllColumns,
                getColumnDefs() {
                  return V;
                },
                setColumnFilters: tt.setColumnFilters,
                resetColumnFilters: tt.resetColumnFilters,
                setColumnFilterFnOverride: Kt,
                getColumnFilterFnOverride() {
                  return ae;
                },
                getContainerElement() {
                  return Et.current;
                },
                getTableElement() {
                  return Nt.current;
                },
                scrollToColumn(z, C) {
                  ht.scrollToIndex(z.getIndex(), C);
                },
              }),
              [
                vt,
                Gt,
                tt.setColumnFilters,
                tt.resetColumnFilters,
                tt.getState,
                tt.getAllColumns,
                ae,
                V,
                ht,
              ],
            );
          const Et = (0, U.useRef)(null),
            se = ee ? (St ?? 0) : 0;
          let Ft = 0;
          const Wt = Gt[0]?.getVisibleCells(),
            bt = ht.getVirtualItems(),
            Ot = bt[bt.length - 1]?.end;
          for (const z of bt)
            Wt[z.index]?.column.getIsPinned() && (Ft += z.size);
          return (0, M.jsx)(_, {
            table: tt,
            setColumnSizeOverride: I,
            children: (0, M.jsx)("div", {
              className: H,
              ref: Et,
              style: {
                width: F,
                height: O,
                overflow: Jt === "element" ? "auto" : void 0,
                maxWidth: "fit-content",
                scrollPadding: `${se}px 0 0 ${Ft}px`,
              },
              children: (0, M.jsxs)("div", {
                role: "table",
                ref: Nt,
                "aria-rowcount": D.length,
                style: {
                  minHeight: Ut,
                  width: tt.getTotalSize(),
                  "--virtualPos": `${Ht}px`,
                  ...Vt,
                },
                children: [
                  tt
                    .getHeaderGroups()
                    .map((z) =>
                      (0, M.jsx)(
                        w,
                        { group: z, sticky: ee, nHeaderHeight: St },
                        z.id,
                      ),
                    ),
                  kt.map((z) =>
                    (0, M.jsx)(
                      N,
                      {
                        row: Gt[z.index],
                        size: z.size,
                        rowVirtualizer: ht,
                        index: z.index,
                        measureRef: ct.measureElement,
                        scrollContainerRef: Et,
                        nItemHeight: P,
                        renderGroup: Tt,
                        rowEnd: Ot,
                      },
                      z.key,
                    ),
                  ),
                ],
              }),
            }),
          });
        });
        function p(s) {
          const o = s.getIsPinned(),
            d = o === "left" && s.getIsLastColumn("left"),
            D = o === "right" && s.getIsFirstColumn("right");
          return {
            borderRight: d
              ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
            borderLeft: D
              ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
            left: o === "left" ? `${s.getStart("left")}px` : void 0,
            right: o === "right" ? `${s.getAfter("right")}px` : void 0,
            position: o ? "sticky" : "relative",
            minWidth: s.getSize(),
            zIndex: o ? 1 : 0,
          };
        }
        function w(s) {
          const { group: o, sticky: d, nHeaderHeight: D } = s;
          return (0, M.jsx)("div", {
            role: "row",
            className: R()(
              J().FancyTableRow,
              J().FancyTableHeader,
              d && J().StickyHeader,
            ),
            children: o.headers.map((v, H) => {
              const F = o.headers[H - 1],
                O = {},
                rt = v.column.getIsSorted();
              rt &&
                !v.column.columnDef.meta?.bDisableSortButton &&
                (O["aria-sort"] = rt === "asc" ? "ascending" : "descending");
              let P = "div";
              return (
                v.column.getCanSort() &&
                  !v.column.columnDef.meta?.bDisableSortButton &&
                  ((P = "button"),
                  (O.onClick = v.column.getToggleSortingHandler())),
                (0, M.jsx)(
                  i,
                  {
                    header: v,
                    prevHeader: F,
                    HeaderElement: P,
                    nHeaderHeight: D,
                    sortDirection: rt,
                    strTooltip: v.column.columnDef.meta?.strHeaderTooltip,
                    conditionalProps: O,
                  },
                  v.id,
                )
              );
            }),
          });
        }
        const N = U.memo(function (o) {
          const {
            row: d,
            size: D,
            rowVirtualizer: v,
            measureRef: H,
            index: F,
            nItemHeight: O,
            renderGroup: rt,
          } = o;
          return (0, M.jsx)("div", {
            role: "row",
            className: R()(
              J().FancyTableRow,
              d.getCanExpand() && J().ExpandableRow,
            ),
            style: {
              minHeight: d.getCanExpand() ? void 0 : `${D}px`,
              transform: "translateY(var(--virtualPos))",
            },
            "data-even": F % 2 === 0,
            "data-index": F,
            ref: H,
            children: (0, M.jsx)(L, {
              row: d,
              rowVirtualizer: v,
              nItemHeight: O,
              renderGroup: rt,
            }),
          });
        });
        function L(s) {
          const { row: o, rowVirtualizer: d, renderGroup: D } = s;
          if (o.getCanExpand()) {
            const rt = D ?? (() => o.groupingValue);
            return (0, M.jsxs)("button", {
              className: J().RowGroup,
              "aria-expanded": o.getIsExpanded(),
              onClick: o.getToggleExpandedHandler(),
              children: [
                (0, M.jsx)("div", { className: J().GroupExpandIndicator }),
                rt(o),
              ],
            });
          }
          const v = d.getVirtualItems(),
            H = o.getVisibleCells();
          let F = 0,
            O;
          return (0, M.jsx)(M.Fragment, {
            children: v.map((rt) => {
              const P = H[rt.index],
                St = P.column.getIsPinned();
              return (
                St ? (F += rt.size) : O === void 0 && (O = rt.start),
                (0, M.jsx)(
                  a,
                  {
                    cell: P,
                    rowVirtualizer: d,
                    index: rt.index,
                    transform: St ? void 0 : `translateX(${O - F}px)`,
                  },
                  P.id,
                )
              );
            }),
          });
        }
        function g(s, o) {
          const d = (0, U.useContext)(te),
            D = s.columnDef.meta?.bGrowToFit,
            v = s.id,
            H = D ? s.getSize() : 0,
            F = s.getIsSorted();
          (0, U.useLayoutEffect)(() => {
            if (!D || !o.current) return;
            const O = o.current?.scrollWidth;
            if (!O) return;
            const rt = o.current.getBoundingClientRect().width,
              P = window.getComputedStyle(o.current);
            let St = O;
            if (O > rt) {
              if (P.paddingLeft) {
                let nt = parseInt(P.paddingLeft);
                isNaN(nt) || (St += nt);
              }
              if (P.paddingRight) {
                let nt = parseInt(P.paddingRight);
                isNaN(nt) || (St += nt);
              }
            }
            St > H &&
              d.setColumnSizeOverride((nt) =>
                nt[v] > St ? nt : { ...nt, [v]: St },
              );
          }, [D, v, d, H, o, F]);
        }
        function i(s) {
          const {
              header: o,
              prevHeader: d,
              HeaderElement: D,
              nHeaderHeight: v,
              sortDirection: H,
              strTooltip: F,
              conditionalProps: O,
            } = s,
            rt = (0, U.useRef)(null);
          return (
            g(o.column, rt),
            (0, M.jsxs)(
              D,
              {
                role: "columnheader",
                ref: rt,
                "data-pinned": !!o.column.getIsPinned(),
                className: R()(
                  J().ColumnHeader,
                  D === "button" && J().SortButton,
                  o.column.columnDef.meta?.headerClassname,
                ),
                style: {
                  width: `var(--header-${o.id}-size)`,
                  height: v !== void 0 ? `${v}px` : void 0,
                  ...p(o.column),
                },
                ...O,
                children: [
                  d?.column.getCanResize() &&
                    (0, M.jsx)("div", {
                      role: "presentation",
                      onDoubleClick: () => d.column.resetSize(),
                      onMouseDown: d.getResizeHandler(),
                      onTouchStart: d.getResizeHandler(),
                      onClick: (P) => P.stopPropagation(),
                      className: R()(J().ResizeHandle, J().PrevResizeHandle),
                    }),
                  o.isPlaceholder
                    ? null
                    : (0, K.Kv)(o.column.columnDef.header, o.getContext()),
                  F && (0, M.jsx)(mt.o, { tooltip: F }),
                  H &&
                    !o.column.columnDef.meta?.bDisableSortButton &&
                    (0, M.jsx)("div", { className: J().SortIndicator }),
                  o.column.getCanResize() &&
                    (0, M.jsx)("div", {
                      role: "presentation",
                      onDoubleClick: () => o.column.resetSize(),
                      onMouseDown: o.getResizeHandler(),
                      onTouchStart: o.getResizeHandler(),
                      onClick: (P) => P.stopPropagation(),
                      className: R()(
                        J().ResizeHandle,
                        o.column.getIsResizing() && J().IsResizing,
                      ),
                    }),
                ],
              },
              o.id,
            )
          );
        }
        function a(s) {
          const { cell: o, rowVirtualizer: d, index: D, transform: v } = s,
            H = U.useRef(null),
            F = (0, G.XB)(H, d.measure);
          return (
            g(o.column, H),
            (0, M.jsx)("div", {
              className: R()(
                J().FancyTableCell,
                o.column.columnDef.meta?.cellClassname,
              ),
              "data-index": D,
              "data-table-column-id": o.column.id,
              ref: F,
              style: {
                width: `var(--col-${o.column.id}-size)`,
                transform: v,
                ...p(o.column),
              },
              children: (0, M.jsx)(n, {
                CellComponent: o.column.columnDef.cell,
                context: o.getContext(),
              }),
            })
          );
        }
        function c(s) {
          return (0, K.Kv)(s.CellComponent, s.context);
        }
        const n = U.memo(
          c,
          (s, o) => s.context.getValue() === o.context.getValue(),
        );
      },
      70171: (ie, At, m) => {
        "use strict";
        m.d(At, {
          DX: () => tt,
          Ho: () => Ut,
          hp: () => $t,
          xE: () => Wt,
          mQ: () => kt,
          vt: () => ct,
          lr: () => lt,
          tY: () => Et,
          KQ: () => vt,
          vm: () => G,
          K1: () => j,
          Y2: () => K,
          Tj: () => M,
          nY: () => ce,
        });
        var M = {};
        m.r(M), m.d(M, { _: () => U });
        var G = {};
        m.r(G), m.d(G, { Tn: () => dt, n$: () => Z });
        var K = {};
        m.r(K),
          m.d(K, {
            ru: () => X,
            mC: () => Dt,
            cJ: () => x,
            J5: () => it,
            tx: () => et,
            ao: () => A,
            _g: () => Bt,
            y5: () => Lt,
            nH: () => k,
          });
        var j = {};
        m.r(j),
          m.d(j, {
            RM: () => ut,
            dk: () => a,
            Ng: () => i,
            Mc: () => w,
            pF: () => at,
            EE: () => mt,
            nT: () => te,
            CI: () => h,
            _j: () => N,
            UM: () => p,
            K2: () => Y,
            E0: () => n,
            iY: () => L,
            sR: () => c,
            rQ: () => g,
          });
        var B = m(80613),
          l = m.n(B),
          e = m(75245),
          R = m(35038);
        const U = 0,
          Q = 1,
          J = 0,
          dt = 1,
          Z = 2,
          X = 1,
          x = 2,
          it = 4,
          q = 8,
          k = 16,
          et = 32,
          A = 64,
          Bt = 128,
          Lt = 256,
          Dt = 512,
          at = 0,
          ut = 1,
          h = 2,
          Y = 4,
          mt = 8,
          te = 16,
          _ = 32,
          f = 64,
          p = 128,
          w = 256,
          N = 512,
          L = 1024,
          g = 2048,
          i = 4096,
          a = 8192,
          c = 16384,
          n = 32768;
        function s(b) {
          return "unknown EPartnerEmailNotifcationType ( " + b + " )";
        }
        function o(b) {
          return "unknown EMembershipEvent ( " + b + " )";
        }
        function d(b) {
          return "unknown EBetaProgram ( " + b + " )";
        }
        function D(b) {
          return "unknown ENavigationDeviceType ( " + b + " )";
        }
        function v(b) {
          return "unknown EAppCreationCreditStatus ( " + b + " )";
        }
        function H(b) {
          return "unknown EAppCreationCreditType ( " + b + " )";
        }
        function F(b) {
          return "unknown EAppReportingPlatform ( " + b + " )";
        }
        function O(b) {
          return "unknown EReleaseRequestState ( " + b + " )";
        }
        function rt(b) {
          return "unknown EPartnerNotesType ( " + b + " )";
        }
        function P(b) {
          return "unknown EDocumentationFileType ( " + b + " )";
        }
        function St(b) {
          return "unknown EUpdateBooleanField ( " + b + " )";
        }
        function nt(b) {
          return "unknown EPartnerProjectSurveyType ( " + b + " )";
        }
        function ee(b) {
          return "unknown EAppCapability ( " + b + " )";
        }
        function re(b) {
          return "unknown EAppTransferState ( " + b + " )";
        }
        function y(b) {
          return "unknown ETF2BlogPostType ( " + b + " )";
        }
        function u(b) {
          return "unknown EPartnerAppOptInType ( " + b + " )";
        }
        function S(b) {
          return "unknown EPartnerOptInVisibility ( " + b + " )";
        }
        function E(b) {
          return "unknown EPartnerAppOptInAppealState ( " + b + " )";
        }
        function W(b) {
          return "unknown EPartnerAppOptInEmailTargeting ( " + b + " )";
        }
        function st(b) {
          return "unknown EPartnerAppOptInEmailSettings ( " + b + " )";
        }
        function ot(b) {
          return "unknown EPartnerAppOptInLLMRejection ( " + b + " )";
        }
        function Mt(b) {
          return "unknown EPartnerAppOptInLLMCriteriaSource ( " + b + " )";
        }
        function Tt(b) {
          return "unknown EPartnerAppOptInHumanDecision ( " + b + " )";
        }
        function Jt(b) {
          return "unknown EPartnerAppOptInLLMPopulation ( " + b + " )";
        }
        function Nt(b) {
          return "unknown EAppTrafficStatAttribution ( " + b + " )";
        }
        function ae(b) {
          return "unknown EPartnerMembershipInviteState ( " + b + " )";
        }
        function Kt(b) {
          return "unknown EAppShareState ( " + b + " )";
        }
        function zt(b) {
          return "unknown ECommunicationInviteState ( " + b + " )";
        }
        class I extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              I.prototype.packageids || e.Sg(I.M()),
              B.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
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
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = e.w0(I.M())), I.sm_mbf;
          }
          toObject(t = !1) {
            return I.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(I.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(I.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new I();
            return I.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(I.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return I.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(I.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerPaidGivenPackageList_Request";
          }
        }
        class V extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.paid || e.Sg(V.M()),
              B.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: { paid: { n: 1, c: $, r: !0, q: !0 } },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = e.w0(V.M())), V.sm_mbf;
          }
          toObject(t = !1) {
            return V.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(V.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new V();
            return V.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(V.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(V.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerPaidGivenPackageList_Response";
          }
        }
        class $ extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.partnerid || e.Sg($.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
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
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = e.w0($.M())), $.sm_mbf;
          }
          toObject(t = !1) {
            return $.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT($.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq($.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new $();
            return $.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj($.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0($.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair";
          }
        }
        class tt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.opt_in_name || e.Sg(tt.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
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
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = e.w0(tt.M())), tt.sm_mbf;
          }
          toObject(t = !1) {
            return tt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(tt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(tt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new tt();
            return tt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(tt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(tt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_CreatePartnerAppOptInEmail_Request";
          }
        }
        class ft extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ft.prototype.email_def_id || e.Sg(ft.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    email_def_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = e.w0(ft.M())), ft.sm_mbf;
          }
          toObject(t = !1) {
            return ft.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(ft.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(ft.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new ft();
            return ft.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(ft.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(ft.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_CreatePartnerAppOptInEmail_Response";
          }
        }
        class vt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              vt.prototype.email_def_id || e.Sg(vt.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
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
            let r = new (l().BinaryReader)(t),
              T = new vt();
            return vt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(vt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(vt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_UpdatePartnerAppOptInEmail_Request";
          }
        }
        class Gt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Gt.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new Gt();
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new Gt();
            return Gt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_UpdatePartnerAppOptInEmail_Response";
          }
        }
        class wt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              wt.prototype.accounts_examined || e.Sg(wt.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
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
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = e.w0(wt.M())), wt.sm_mbf;
          }
          toObject(t = !1) {
            return wt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(wt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(wt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new wt();
            return wt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(wt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(wt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerAppOptInEmailStats";
          }
        }
        class ct extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ct.prototype.email_def_id || e.Sg(ct.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
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
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = e.w0(ct.M())), ct.sm_mbf;
          }
          toObject(t = !1) {
            return ct.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(ct.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(ct.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new ct();
            return ct.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(ct.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(ct.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_SendPartnerAppOptInEmailAndWait_Request";
          }
        }
        class yt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              yt.prototype.results || e.Sg(yt.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = { proto: yt, fields: { results: { n: 1, c: wt } } }),
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
            let r = new (l().BinaryReader)(t),
              T = new yt();
            return yt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(yt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(yt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_SendPartnerAppOptInEmailAndWait_Response";
          }
        }
        class Vt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Vt.prototype.opt_in_name || e.Sg(Vt.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
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
                    stats: { n: 7, c: wt },
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
            let r = new (l().BinaryReader)(t),
              T = new Vt();
            return Vt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Vt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Vt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerAppOptInEmailDef";
          }
        }
        class kt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              kt.prototype.opt_in_name || e.Sg(kt.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    opt_in_name: {
                      n: 1,
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
            let r = new (l().BinaryReader)(t),
              T = new kt();
            return kt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(kt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(kt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Request";
          }
        }
        class Ht extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ht.prototype.defs || e.Sg(Ht.M()),
              B.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: { defs: { n: 1, c: Vt, r: !0, q: !0 } },
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
            let r = new (l().BinaryReader)(t),
              T = new Ht();
            return Ht.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Ht.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Ht.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Response";
          }
        }
        class Ut extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ut.prototype.email_def_id || e.Sg(Ut.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    email_def_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
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
            let r = new (l().BinaryReader)(t),
              T = new Ut();
            return Ut.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Ut.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Ut.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetEstimatePartnerAppOptInEmail_Request";
          }
        }
        class ht extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ht.prototype.stats || e.Sg(ht.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = { proto: ht, fields: { stats: { n: 1, c: wt } } }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = e.w0(ht.M())), ht.sm_mbf;
          }
          toObject(t = !1) {
            return ht.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(ht.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(ht.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new ht();
            return ht.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(ht.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(ht.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetEstimatePartnerAppOptInEmail_Response";
          }
        }
        class Et extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Et.prototype.email_def_id || e.Sg(Et.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
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
            let r = new (l().BinaryReader)(t),
              T = new Et();
            return Et.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Et.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Et.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_TestFirePartnerAppOptInEmail_Request";
          }
        }
        class se extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return se.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new se();
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new se();
            return se.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_TestFirePartnerAppOptInEmail_Response";
          }
        }
        class Ft extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ft.prototype.accountid || e.Sg(Ft.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
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
            let r = new (l().BinaryReader)(t),
              T = new Ft();
            return Ft.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Ft.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Ft.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerOptInEmailTracking";
          }
        }
        class Wt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Wt.prototype.email_def_id || e.Sg(Wt.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
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
            let r = new (l().BinaryReader)(t),
              T = new Wt();
            return Wt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Wt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Wt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInEmailTracking_Request";
          }
        }
        class bt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              bt.prototype.email_def_id || e.Sg(bt.M()),
              B.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    email_def_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    results: { n: 2, c: Ft, r: !0, q: !0 },
                  },
                }),
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
            let r = new (l().BinaryReader)(t),
              T = new bt();
            return bt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(bt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(bt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInEmailTracking_Response";
          }
        }
        class Ot extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ot.prototype.appid || e.Sg(Ot.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
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
            let r = new (l().BinaryReader)(t),
              T = new Ot();
            return Ot.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Ot.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Ot.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerAppOptInData";
          }
        }
        class z extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.appid || e.Sg(z.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    opt_in_name: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = e.w0(z.M())), z.sm_mbf;
          }
          toObject(t = !1) {
            return z.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(z.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(z.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new z();
            return z.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(z.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(z.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetSinglePartnerAppOptIns_Request";
          }
        }
        class C extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.data || e.Sg(C.M()),
              B.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: { data: { n: 1, c: Ot, r: !0, q: !0 } },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = e.w0(C.M())), C.sm_mbf;
          }
          toObject(t = !1) {
            return C.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(C.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(C.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new C();
            return C.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(C.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(C.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetSinglePartnerAppOptIns_Response";
          }
        }
        class lt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              lt.prototype.appids || e.Sg(lt.M()),
              B.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
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
            let r = new (l().BinaryReader)(t),
              T = new lt();
            return lt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(lt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(lt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_SetFeaturingOnPartnerAppOptIn_Request";
          }
        }
        class gt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              gt.prototype.appids || e.Sg(gt.M()),
              B.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
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
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = e.w0(gt.M())), gt.sm_mbf;
          }
          toObject(t = !1) {
            return gt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(gt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(gt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new gt();
            return gt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(gt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(gt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_SetFeaturingOnPartnerAppOptIn_Response";
          }
        }
        class jt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jt.prototype.opt_in_id || e.Sg(jt.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
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
                  },
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
            let r = new (l().BinaryReader)(t),
              T = new jt();
            return jt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(jt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(jt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "COptInDef";
          }
        }
        class Zt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Zt.prototype.opt_in_name || e.Sg(Zt.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
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
            let r = new (l().BinaryReader)(t),
              T = new Zt();
            return Zt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Zt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Zt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInHistoryInternal_Request";
          }
        }
        class Xt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xt.prototype.opt_ins || e.Sg(Xt.M()),
              B.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
                  fields: { opt_ins: { n: 1, c: jt, r: !0, q: !0 } },
                }),
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = e.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(t = !1) {
            return Xt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Xt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Xt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new Xt();
            return Xt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Xt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Xt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInHistoryInternal_Response";
          }
        }
        class Yt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Yt.prototype.opt_in_name || e.Sg(Yt.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: {
                    opt_in_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
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
            let r = new (l().BinaryReader)(t),
              T = new Yt();
            return Yt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Yt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Yt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerAppOptInsIDs_Request";
          }
        }
        class Qt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Qt.prototype.opted_in_appids || e.Sg(Qt.M()),
              B.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
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
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = e.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(t = !1) {
            return Qt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Qt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Qt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new Qt();
            return Qt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Qt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Qt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetPartnerAppOptInsIDs_Response";
          }
        }
        class $t extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $t.prototype.opt_in_names || e.Sg($t.M()),
              B.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
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
            let r = new (l().BinaryReader)(t),
              T = new $t();
            return $t.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj($t.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0($t.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInAppealsSummaryStats_Request";
          }
        }
        class It extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              It.prototype.summary || e.Sg(It.M()),
              B.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: { summary: { n: 1, c: Ct, r: !0, q: !0 } },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = e.w0(It.M())), It.sm_mbf;
          }
          toObject(t = !1) {
            return It.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(It.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(It.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new It();
            return It.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(It.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return It.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(It.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInAppealsSummaryStats_Response";
          }
        }
        class Ct extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ct.prototype.opt_in_name || e.Sg(Ct.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ct.sm_m ||
                (Ct.sm_m = {
                  proto: Ct,
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
              Ct.sm_m
            );
          }
          static MBF() {
            return Ct.sm_mbf || (Ct.sm_mbf = e.w0(Ct.M())), Ct.sm_mbf;
          }
          toObject(t = !1) {
            return Ct.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Ct.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Ct.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new Ct();
            return Ct.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Ct.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Ct.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPublishing_GetOptInAppealsSummaryStats_Response_CSummary";
          }
        }
        class qt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              qt.prototype.inviteid || e.Sg(qt.M()),
              B.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
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
              qt.sm_m
            );
          }
          static MBF() {
            return qt.sm_mbf || (qt.sm_mbf = e.w0(qt.M())), qt.sm_mbf;
          }
          toObject(t = !1) {
            return qt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(qt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(qt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new qt();
            return qt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(qt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(qt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "MembershipInvite";
          }
        }
        class _t extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _t.prototype.partnerid || e.Sg(_t.M()),
              B.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
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
              _t.sm_m
            );
          }
          static MBF() {
            return _t.sm_mbf || (_t.sm_mbf = e.w0(_t.M())), _t.sm_mbf;
          }
          toObject(t = !1) {
            return _t.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(_t.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(_t.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new _t();
            return _t.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(_t.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(_t.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMembershipInvite_GetInvites_Request";
          }
        }
        class Pt extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Pt.prototype.invites || e.Sg(Pt.M()),
              B.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: { invites: { n: 1, c: qt, r: !0, q: !0 } },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = e.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(t = !1) {
            return Pt.toObject(t, this);
          }
          static toObject(t, r) {
            return e.BT(Pt.M(), t, r);
          }
          static fromObject(t) {
            return e.Uq(Pt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (l().BinaryReader)(t),
              T = new Pt();
            return Pt.deserializeBinaryFromReader(T, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return e.zj(Pt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            e.i0(Pt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMembershipInvite_GetInvites_Response";
          }
        }
        var ce;
        ((b) => {
          function t(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.GetSinglePartnerAppOptIn#1",
              (0, R.I8)(z, pt, Rt),
              C,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          b.GetSinglePartnerAppOptIn = t;
          function r(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.SetFeaturingOnPartnerAppOptIn#1",
              (0, R.I8)(lt, pt, Rt),
              gt,
              { ePrivilege: 1 },
            );
          }
          b.SetFeaturingOnPartnerAppOptIn = r;
          function T(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.GetOptInHistoryInternal#1",
              (0, R.I8)(Zt, pt, Rt),
              Xt,
              { ePrivilege: 4 },
            );
          }
          b.GetOptInHistoryInternal = T;
          function le(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.GetPartnerAppOptInsIDs#1",
              (0, R.I8)(Yt, pt, Rt),
              Qt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          b.GetPartnerAppOptInsIDs = le;
          function de(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.GetOptInAppealsSummaryStats#1",
              (0, R.I8)($t, pt, Rt),
              It,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          b.GetOptInAppealsSummaryStats = de;
          function me(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.CreatePartnerAppOptInEmails#1",
              (0, R.I8)(tt, pt, Rt),
              ft,
              { ePrivilege: 1 },
            );
          }
          b.CreatePartnerAppOptInEmails = me;
          function fe(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.UpdatePartnerAppOptInEmails#1",
              (0, R.I8)(vt, pt, Rt),
              Gt,
              { ePrivilege: 1 },
            );
          }
          b.UpdatePartnerAppOptInEmails = fe;
          function ge(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.SendPartnerOptInEmailAndWait#1",
              (0, R.I8)(ct, pt, Rt),
              yt,
              { ePrivilege: 1 },
            );
          }
          b.SendPartnerOptInEmailAndWait = ge;
          function Be(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.GetPartnerAppOptInEmailDefAndStats#1",
              (0, R.I8)(kt, pt, Rt),
              Ht,
              { ePrivilege: 1 },
            );
          }
          b.GetPartnerAppOptInEmailDefAndStats = Be;
          function we(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.GetEstimatePartnerAppOptInEmail#1",
              (0, R.I8)(Ut, pt, Rt),
              ht,
              { ePrivilege: 1 },
            );
          }
          b.GetEstimatePartnerAppOptInEmail = we;
          function De(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.TestFirePartnerAppOptInEmail#1",
              (0, R.I8)(Et, pt, Rt),
              se,
              { ePrivilege: 1 },
            );
          }
          b.TestFirePartnerAppOptInEmail = De;
          function Me(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.GetOptInEmailTracking#1",
              (0, R.I8)(Wt, pt, Rt),
              bt,
              { ePrivilege: 1 },
            );
          }
          b.GetOptInEmailTracking = Me;
          function ve(xt, pt, Rt) {
            return xt.SendMsg(
              "Publishing.GetPartnerPaidGivenPackageList#1",
              (0, R.I8)(I, pt, Rt),
              V,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          b.GetPartnerPaidGivenPackageList = ve;
        })(ce || (ce = {}));
        var ue;
        ((b) => {
          function t(r, T, le) {
            return r.SendMsg(
              "PartnerMembershipInvite.GetInvites#1",
              (0, R.I8)(_t, T, le),
              Pt,
              { bConstMethod: !0, ePrivilege: 11 },
            );
          }
          b.GetInvites = t;
        })(ue || (ue = {}));
      },
      87108: (ie, At, m) => {
        "use strict";
        m.d(At, { Hl: () => it, dQ: () => X });
        var M = m(41735),
          G = m.n(M),
          K = m(14947),
          j = m(90626),
          B = m(35413),
          l = m(76559),
          e = m(71742),
          R = m(34592),
          U = m(3166),
          Q = Object.defineProperty,
          J = Object.getOwnPropertyDescriptor,
          dt = (q, k, et, A) => {
            for (
              var Bt = A > 1 ? void 0 : A ? J(k, et) : k, Lt = q.length - 1, Dt;
              Lt >= 0;
              Lt--
            )
              (Dt = q[Lt]) && (Bt = (A ? Dt(k, et, Bt) : Dt(Bt)) || Bt);
            return A && Bt && Q(k, et, Bt), Bt;
          };
        class Z {
          constructor() {
            (0, K.Gn)(this);
          }
          m_mapProfiles = new Map();
          m_mapProfilesLoading = new Map();
          async LoadProfiles(k, et) {
            (0, e.wT)(
              k.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let A = k.filter(
              (at) =>
                !this.m_mapProfiles.has(at) &&
                !this.m_mapProfilesLoading.has(at),
            );
            if (A.length == 0) return this.m_mapProfilesLoading.get(k[0]);
            let Bt = U.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              Lt = G().get(Bt, {
                params: { steamids: A.join(",") },
                withCredentials: !0,
                cancelToken: et?.token,
              });
            A.forEach((at) => this.m_mapProfilesLoading.set(at, Lt));
            let Dt = await Lt;
            Dt.data &&
              Dt.status == 200 &&
              Dt.data.forEach((at) => {
                (at.avatar_hash = at.avatar_url),
                  (at.avatar_url_medium = (0, B.t)(at.avatar_url, "medium")),
                  (at.avatar_url_full = (0, B.t)(at.avatar_url, "full")),
                  (at.avatar_url = (0, B.t)(at.avatar_url)),
                  this.m_mapProfiles.set(at.steamid, at),
                  this.m_mapProfilesLoading.delete(at.steamid);
              });
          }
          GetProfile(k) {
            return this.m_mapProfiles.get(k);
          }
          GetProfileByAccountID(k) {
            return this.m_mapProfiles.get(
              l.b.InitFromAccountID(k).ConvertTo64BitString(),
            );
          }
          GetProfileBySteamID(k) {
            return this.m_mapProfiles.get(k.ConvertTo64BitString());
          }
          BHasProfile(k) {
            return this.m_mapProfiles.has(k);
          }
          BHasProfileByAccountID(k) {
            return this.m_mapProfiles.has(
              l.b.InitFromAccountID(k).ConvertTo64BitString(),
            );
          }
          BHasProfileBySteamID(k) {
            return this.m_mapProfiles.has(k.ConvertTo64BitString());
          }
          BHasAllProfilesBySteamID(k) {
            return !k.some((et) => !this.BHasProfileBySteamID(et));
          }
          GetProfileURLBySteamID(k) {
            const et = this.GetProfileBySteamID(k);
            return et && et.profile_url
              ? U.TS.COMMUNITY_BASE_URL + "id/" + et.profile_url
              : U.TS.COMMUNITY_BASE_URL +
                  "profiles/" +
                  k.ConvertTo64BitString();
          }
          GetPersonaNameBySteamID(k) {
            const et = this.GetProfileBySteamID(k);
            return et && et.persona_name ? et.persona_name : "";
          }
        }
        dt([K.sH], Z.prototype, "m_mapProfiles", 2);
        const X = new Z();
        function x(q) {
          const k = j.useMemo(
              () => (q ? (typeof q == "string" ? new l.b(q) : q) : null),
              [q],
            ),
            [et, A] = (0, j.useState)(!!k && !X.BHasProfileBySteamID(k));
          (0, j.useEffect)(() => {
            const Lt = G().CancelToken.source();
            return (
              k &&
                !X.BHasProfileBySteamID(k) &&
                X.LoadProfiles([k.ConvertTo64BitString()])
                  .catch((Dt) => {
                    const at = (0, R.H)(Dt);
                    console.error(
                      "useUserProfile failed to load profile for " +
                        k.ConvertTo64BitString() +
                        ": " +
                        at.strErrorMsg,
                      at,
                    );
                  })
                  .finally(() => {
                    Lt.token.reason || A(!1);
                  }),
              () => Lt.cancel("unmounting useUserProfile")
            );
          }, [q]);
          const Bt = !!k && X.GetProfileBySteamID(k);
          return [et, Bt];
        }
        function it(q) {
          const k = j.useMemo(() => (q ? l.b.InitFromAccountID(q) : null), [q]);
          return x(k);
        }
      },
      61010: (ie) => {
        ie.exports = {
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
      31718: (ie) => {
        ie.exports = {
          FancyTableRow: "_36QJs1BZ3so19Xl2es3ihH",
          ExpandableRow: "g86xV6xEGOZ54uRvK3oQ4",
          FancyTableHeader: "_2mHaS291U0AFO1q99AVdLy",
          StickyHeader: "_4y4yrbyr89wNqTGLp049k",
          FancyTableCell: "_3m5AH2HSnsvjImS7uUpvxv",
          SortButton: "_2xr81ssapVQO5aalcANmCk",
          ColumnHeader: "_2XdcqH-eLWVp_qatDebc6J",
          ResizeHandle: "USh_UNRX22s8Wml0mCY3M",
          PrevResizeHandle: "_3wzyEuMO8BdQHAkXnneNRR",
          SortIndicator: "_6z0ftV9RCqbZFmC4EOzYZ",
          GroupExpandIndicator: "_3I86V1lT4xbDJ6FDjMIaMq",
          RowGroup: "_uckWydn-lyPGWjFKZ4Tm",
        };
      },
    },
  ]);
})();
