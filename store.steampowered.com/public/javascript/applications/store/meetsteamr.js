/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [98620],
    {
      75654: ($, K, t) => {
        "use strict";
        t.d(K, { U: () => x });
        var e = t(56062);
        function x(C) {
          switch (C) {
            case e.uE.HT:
              return "game";
            case e.uE.Sv:
              return "software";
            case e.uE.ue:
              return "demo";
            case e.uE._i:
              return "dlc";
            case e.uE.Wz:
              return "video";
            case e.uE.FS:
              return "video";
            case e.uE.Ov:
              return "music";
            case e.uE.Vi:
              return "beta";
            case e.uE.RA:
              return "mod";
          }
          return "invalid";
        }
      },
      54622: ($, K, t) => {
        "use strict";
        t.d(K, {
          Ig: () => r,
          Jz: () => a,
          LM: () => w,
          LS: () => J,
          P9: () => O,
          VX: () => v,
          Z$: () => P,
          fp: () => D,
          xN: () => u,
          xe: () => g,
        });
        var e = t(80902),
          x = t(75233),
          C = t(51614),
          M = t(90626),
          H = t(20698);
        const L = 64,
          S = [];
        function T(_) {
          return ["SaleQuizAnswers", _];
        }
        function j(_) {
          return {
            queryKey: T(_),
            queryFn: () => S,
            initialData: S,
            staleTime: 1 / 0,
            gcTime: 1 / 0,
          };
        }
        function D(_) {
          const { data: c } = (0, e.I)(j(_));
          return c ?? S;
        }
        function J(_, c) {
          return D(_)[c];
        }
        function V(_) {
          return O(D(_));
        }
        function O(_) {
          for (let c = _.length - 1; c >= 0; --c)
            if (_[c]?.answer) return c + 1;
          return 0;
        }
        function r(_) {
          return _.map((c) => c?.answer).filter((c) => !!c);
        }
        function a(_) {
          return _.flatMap((c) => c?.rgCategoryIDs?.filter(Boolean) ?? []);
        }
        function g(_) {
          return _.some((c) => c?.answer?.reveal_question_id == H.b2);
        }
        function u(_, c, N, I) {
          G(_, c, N, { answer: I });
        }
        function v(_, c, N, I) {
          G(_, c, N, { rgCategoryIDs: I?.length ? I : void 0 });
        }
        function w(_, c) {
          _.setQueryData(T(c), S);
        }
        function G(_, c, N, I) {
          const B = Math.min(Math.max(N, 0), L);
          _.setQueryData(T(c), (A) => {
            const s = (A ?? S).slice();
            for (; s.length <= B; ) s.push(void 0);
            return (s[B] = { ...s[B], ...I }), s;
          });
        }
        function P(_) {
          const c = (0, x.jE)(),
            { mutate: N } = (0, C.n)({
              mutationFn: async (I) => {
                switch (I.type) {
                  case "answer":
                    u(c, _, I.iQuestionIndex, I.answer);
                    break;
                  case "categories":
                    v(c, _, I.iQuestionIndex, I.rgCategoryIDs);
                    break;
                  case "clear":
                    w(c, _);
                    break;
                }
              },
            });
          return (0, M.useMemo)(
            () => ({
              fnSetAnswer: (I, B) =>
                N({ type: "answer", iQuestionIndex: I, answer: B }),
              fnSetAnswerCategories: (I, B) =>
                N({ type: "categories", iQuestionIndex: I, rgCategoryIDs: B }),
              fnClearAnswers: () => N({ type: "clear" }),
            }),
            [N],
          );
        }
      },
      20698: ($, K, t) => {
        "use strict";
        t.d(K, { b2: () => e, nx: () => x });
        const e = "terminal";
        var x = ((M) => (
          (M[(M.TemplateFAQDisplayColumn = 1)] = "TemplateFAQDisplayColumn"),
          (M[(M.TemplateFAQDisplaySimpleRow = 2)] =
            "TemplateFAQDisplaySimpleRow"),
          M
        ))(x || {});
        const C = "questdoor_";
      },
      35702: ($, K, t) => {
        "use strict";
        t.d(K, { Du: () => V, fy: () => J, pt: () => O });
        var e = t(34592),
          x = t(3166),
          C = t(41735),
          M = t.n(C),
          H = t(72604),
          L = t(90626),
          S = t(8323),
          T = t(30096),
          j = t(71742);
        class D {
          m_mapBadgeInfo = new Map();
          m_mapBadgeLoadPromises = new Map();
          m_eventBadgehangeCallback = new Map();
          m_mapInitialBadgeInfo = new Map();
          GetBadgeInfo(a) {
            return this.m_mapBadgeInfo.get(a);
          }
          GetInitialBadgeInfo(a) {
            return this.m_mapInitialBadgeInfo.get(a);
          }
          GetBadgeInfoChangeCallback(a) {
            return (
              this.m_eventBadgehangeCallback.has(a) ||
                this.m_eventBadgehangeCallback.set(a, new S.lu()),
              this.m_eventBadgehangeCallback.get(a)
            );
          }
          Test_SetBadgeInfo(a) {
            a.badgeid &&
              (this.m_mapBadgeInfo.set(a.badgeid, a),
              this.GetBadgeInfoChangeCallback(a.badgeid).Dispatch(a));
          }
          async LoadBadgeInfo(a) {
            return this.m_mapBadgeInfo.has(a)
              ? this.m_mapBadgeInfo.get(a)
              : (this.m_mapBadgeLoadPromises.has(a) ||
                  this.m_mapBadgeLoadPromises.set(
                    a,
                    this.InternalLoadBadgeInfo(a),
                  ),
                this.m_mapBadgeLoadPromises.get(a));
          }
          async InternalLoadBadgeInfo(a) {
            if (!a || !Number.isInteger(a)) return { badgeid: a, level: 0 };
            let g = null;
            try {
              const v = (0, x.xv)();
              (0, j.wT)(
                v == x.TS.STORE_BASE_URL || v == x.TS.COMMUNITY_BASE_URL,
                "ajaxgetbadgeinfo called on wrong unsupported site: " + v,
              );
              const w = v + "actions/ajaxgetbadgeinfo",
                G = { badgeid: a },
                P = await M().get(w, { params: G, withCredentials: !0 });
              if (
                P.status == 200 &&
                (P.data?.success == H.R || P.data?.success == H.p)
              ) {
                const _ = {
                  badgeid: P.data.badgeid,
                  level: P.data.level,
                  xp: P.data.xp,
                  completion_time: P.data.completion_time,
                };
                return (
                  this.m_mapBadgeInfo.set(a, _),
                  this.m_mapInitialBadgeInfo.has(a) ||
                    this.m_mapInitialBadgeInfo.set(a, _),
                  _
                );
              }
              g = (0, e.H)(P);
            } catch (v) {
              g = (0, e.H)(v);
            }
            console.error("useEventBadge: " + g?.strErrorMsg, g);
            const u = { badgeid: a, level: 0 };
            return this.m_mapBadgeInfo.set(a, u), u;
          }
          static s_Singleton;
          static Get() {
            return D.s_Singleton || (D.s_Singleton = new D()), D.s_Singleton;
          }
          constructor() {}
        }
        function J(r) {
          const [a, g] = (0, L.useState)(r ? D.Get().GetBadgeInfo(r) : void 0);
          return (
            (0, L.useEffect)(() => {
              !a &&
                r &&
                D.Get()
                  .LoadBadgeInfo(r)
                  .then((u) => g(u));
            }, [r, a]),
            (0, T.hL)(r ? D.Get().GetBadgeInfoChangeCallback(r) : void 0, g),
            a
          );
        }
        function V(r) {
          D.Get().Test_SetBadgeInfo(r);
        }
        function O(r) {
          const [a, g] = (0, L.useState)(
            r ? D.Get().GetInitialBadgeInfo(r) : void 0,
          );
          return (
            (0, L.useEffect)(() => {
              !a && r && D.Get().LoadBadgeInfo(r);
            }, [r, a]),
            (0, T.hL)(r ? D.Get().GetBadgeInfoChangeCallback(r) : void 0, () =>
              g(r ? D.Get().GetInitialBadgeInfo(r) : void 0),
            ),
            a
          );
        }
      },
      64703: ($, K, t) => {
        "use strict";
        t.d(K, {
          DV: () => P,
          OC: () => w,
          OM: () => _,
          Sp: () => I,
          Tn: () => c,
          W3: () => N,
          hH: () => v,
          my: () => B,
        });
        var e = t(41735),
          x = t.n(e),
          C = t(14947),
          M = t(90626),
          H = t(72604),
          L = t(34592),
          S = t(8323),
          T = t(30096),
          j = t(3166),
          D = t(7582),
          J = Object.defineProperty,
          V = Object.getOwnPropertyDescriptor,
          O = (A, s, m, E) => {
            for (
              var R = E > 1 ? void 0 : E ? V(s, m) : s, Z = A.length - 1, y;
              Z >= 0;
              Z--
            )
              (y = A[Z]) && (R = (E ? y(s, m, R) : y(R)) || R);
            return E && R && J(s, m, R), R;
          };
        const r = 7,
          a = -1;
        function g() {
          return !1;
        }
        const u = class pe {
          m_userData;
          m_bLoadedDuringInit = !1;
          m_strLastDoorOpenKey = "video_noneset";
          m_bIsAnyDoorOpened = !1;
          m_nHighestDoorOpened = a;
          m_initialLoadPromise;
          m_mapDoorOpenPromise = new Map();
          m_mapChangeCallback = new Map();
          m_doorInitializedChangedCallback = new S.lu();
          m_largestDoorChangeCallback = new S.lu();
          m_bIsAnyDoorOpenChangeCallback = new S.lu();
          m_doorOpenedCallback = new S.lu();
          GetLastDoorOpen() {
            return this.m_strLastDoorOpenKey;
          }
          GetRawDoorData() {
            return this.m_userData;
          }
          BIsDoorOpened(s) {
            return s == null || s == null
              ? !1
              : this.m_userData
                ? !!(s < this.m_userData.length && this.m_userData[s].opened)
                : !1;
          }
          BCanUserOpenDoor(s) {
            let m = D.HD.GetTimeNowWithOverride();
            return (
              j.iA.logged_in &&
              this.m_userData &&
              s < this.m_userData.length &&
              m >= this.m_userData[s].rtime_start &&
              m <= this.m_userData[s].rtime_end
            );
          }
          GetDoorCount() {
            return this.m_userData ? this.m_userData.length : 0;
          }
          BIsAnyDoorOpened() {
            return this.m_bIsAnyDoorOpened;
          }
          GetIsAnyDoorOpenChange() {
            return this.m_bIsAnyDoorOpenChangeCallback;
          }
          GetLargestDoorOpenIndex() {
            return this.m_nHighestDoorOpened;
          }
          GetLargestDoorIndexChange() {
            return this.m_largestDoorChangeCallback;
          }
          GetDoorStateChangeCallback(s) {
            return (
              this.m_mapChangeCallback.has(s) ||
                this.m_mapChangeCallback.set(s, new S.lu()),
              this.m_mapChangeCallback.get(s)
            );
          }
          GetDoorStateInitializedChangeCallback() {
            return this.m_doorInitializedChangedCallback;
          }
          GetDoorOpenedCallback() {
            return this.m_doorOpenedCallback;
          }
          BIsInitialized() {
            return this.m_bLoadedDuringInit;
          }
          GetMaxDoor() {
            return r;
          }
          SetInMemoryUpdateDoorOpenUpto(s) {
            for (let m = 0; m < r; ++m) {
              const E = m <= s;
              this.m_userData[m].opened != E &&
                ((this.m_userData[m].opened = E),
                this.GetDoorStateChangeCallback(m).Dispatch(E));
            }
            this.RecomputeState();
          }
          SetInMemorySpecificDoorState(s, m) {
            s < r
              ? this.m_userData[s].opened != m &&
                ((this.m_userData[s].opened = m),
                this.GetDoorStateChangeCallback(s).Dispatch(m),
                this.RecomputeState())
              : console.error("CDoorStore: Wrong door being set " + s);
          }
          RecomputeState() {
            let s = a;
            this.m_userData?.forEach((E) => {
              E.opened && E.day > s && (s = E.day);
            });
            const m = s != a;
            m != this.m_bIsAnyDoorOpened &&
              ((this.m_bIsAnyDoorOpened = m),
              this.GetIsAnyDoorOpenChange().Dispatch(m)),
              s != this.m_nHighestDoorOpened &&
                ((this.m_nHighestDoorOpened = s),
                this.GetLargestDoorIndexChange().Dispatch(s));
          }
          async OpenDoor(s, m = !0, E = "", R = !1) {
            return (
              g() &&
                console.log(
                  "CDoorStore.OpenDoor: attempting door " + s,
                  "open:",
                  m,
                  "preview:",
                  R,
                ),
              !j.iA.logged_in ||
              !this.m_userData ||
              s > this.m_userData.length ||
              s < 0
                ? (g() &&
                    console.log(
                      "CDoorStore.OpenDoor Early fail settings:",
                      j.iA.logged_in,
                      this.m_userData,
                      s,
                      this.m_userData?.length,
                    ),
                  null)
                : this.m_mapDoorOpenPromise.has(s)
                  ? (g() &&
                      console.log(
                        "CDoorStore.OpenDoor: door " +
                          s +
                          " was already requested this session; reusing that result",
                      ),
                    this.m_mapDoorOpenPromise.get(s))
                  : this.m_userData[s].opened == m
                    ? (g() &&
                        console.log(
                          "CDoorStore.OpenDoor: door " +
                            s +
                            " is already " +
                            (m ? "open" : "closed") +
                            "; nothing sent to the server",
                        ),
                      {})
                    : (this.m_mapDoorOpenPromise.has(s) ||
                        this.m_mapDoorOpenPromise.set(
                          s,
                          this.InternalOpenDoor(s, m, E, R),
                        ),
                      this.m_mapDoorOpenPromise.get(s))
            );
          }
          async InternalOpenDoor(s, m = !0, E, R = !1) {
            let Z = j.TS.STORE_BASE_URL + "saleaction/ajaxopendoor";
            const y = new FormData();
            y.append("sessionid", (0, j.KC)()),
              E && y.append("datarecord", E),
              R && y.append("fake_open", "" + R),
              y.append("door_index", "" + s),
              y.append("clan_accountid", "" + j.UF.CLANACCOUNTID),
              m || y.append("open_door", "0");
            let f = null;
            try {
              let U = await x().post(Z, y, { withCredentials: !0 });
              if (U?.status == 200 && U?.data?.success == H.R)
                return (
                  (this.m_userData[s].opened = m),
                  g() &&
                    console.log(
                      "CDoorStore.OpenDoor: door " +
                        s +
                        (m ? " opened" : " closed"),
                      "rewards returned:",
                      U.data?.rewards?.length || 0,
                    ),
                  (this.m_strLastDoorOpenKey = "door_" + (m ? s : s - 1)),
                  this.GetDoorStateChangeCallback(s).Dispatch(m),
                  this.RecomputeState(),
                  m && !R && this.GetDoorOpenedCallback().Dispatch(s),
                  U.data
                );
              f = (0, L.H)(U);
            } catch (U) {
              f = (0, L.H)(U);
            }
            return (
              this.m_mapDoorOpenPromise.delete(s),
              console.error("OpenDoor hit error: " + f.strErrorMsg, f),
              null
            );
          }
          async LoadDoorData() {
            return this.m_bLoadedDuringInit
              ? this.m_userData
              : (this.m_initialLoadPromise ||
                  (this.m_initialLoadPromise = this.InternalLoadDoorData()),
                this.m_initialLoadPromise);
          }
          async InternalLoadDoorData() {
            const s = j.TS.STORE_BASE_URL + "saleaction/ajaxgetopendoor";
            let m = null;
            try {
              const E = await x().get(s, { withCredentials: !0 });
              if (E.status == 200 && E.data?.doordata) {
                (this.m_userData = E.data.doordata),
                  (this.m_bLoadedDuringInit = !0);
                for (let R = 0; R < r; ++R)
                  this.GetDoorStateChangeCallback(R).Dispatch(
                    this.m_userData[R].opened,
                  );
                return (
                  this.GetDoorStateInitializedChangeCallback().Dispatch(
                    this.m_bLoadedDuringInit,
                  ),
                  this.RecomputeState(),
                  this.m_userData
                );
              }
              m = (0, L.H)(E);
            } catch (E) {
              m = (0, L.H)(E);
            }
            return (
              console.error(
                "CDoorStore.LoadDoorData failed: " + m?.strErrorMsg,
                m,
              ),
              null
            );
          }
          async CloseAllDoors(s) {
            let m = j.TS.STORE_BASE_URL + "saleaction/ajaxclosealldoor";
            const E = new FormData();
            E.append("sessionid", (0, j.KC)()),
              E.append("clan_accountid", "" + s);
            let R = null;
            try {
              let Z = await x().post(m, E, { withCredentials: !0 });
              if (Z.status == 200 && Z?.data?.success == H.R) {
                console.log("CDoorStore - closed " + Z.data.count);
                for (let y = 0; y < r; ++y)
                  (this.m_userData[y].opened = !1),
                    this.GetDoorStateChangeCallback(y).Dispatch(
                      this.m_userData[y].opened,
                    );
                return this.RecomputeState(), !0;
              }
              R = (0, L.H)(Z);
            } catch (Z) {
              R = (0, L.H)(Z);
            }
            return (
              console.error(
                "CDoorStore.CloseAllDoors failed: " + R?.strErrorMsg,
                R,
              ),
              null
            );
          }
          static s_Singleton;
          static Get() {
            return (
              pe.s_Singleton ||
                ((pe.s_Singleton = new pe()), pe.s_Singleton.Init()),
              pe.s_Singleton
            );
          }
          constructor() {
            (0, C.Gn)(this);
          }
          Init() {
            (this.m_userData = (0, j.Tc)("doorinfo", "application_config")),
              this.m_userData &&
                ((this.m_bLoadedDuringInit = !0), this.RecomputeState());
          }
        };
        O([C.sH], u.prototype, "m_bIsAnyDoorOpened", 2),
          O([C.sH], u.prototype, "m_nHighestDoorOpened", 2),
          O([T.oI], u.prototype, "BIsDoorOpened", 1),
          O([T.oI], u.prototype, "OpenDoor", 1);
        let v = u;
        function w() {
          return { fnOpenDoor: v.Get().OpenDoor };
        }
        function G() {
          const [A, s] = useState(0);
          return (
            useCallbackList(v.Get().GetIsAnyDoorOpenChange(), (m) => s(A + 1)),
            { fnIsDoorOpen: v.Get().BIsDoorOpened, nChangeIndex: A }
          );
        }
        function P() {
          const [A, s] = (0, M.useState)(v.Get().BIsInitialized());
          return (
            (0, M.useEffect)(() => {
              A || v.Get().LoadDoorData();
            }, [A]),
            (0, T.hL)(v.Get().GetDoorStateInitializedChangeCallback(), s),
            A
          );
        }
        function _(A) {
          const s = P(),
            [m, E] = (0, M.useState)(s ? v.Get().BIsDoorOpened(A) : void 0);
          return (0, T.hL)(v.Get().GetDoorStateChangeCallback(A), E), m;
        }
        function c() {
          const A = P(),
            [s, m] = (0, M.useState)(A ? v.Get().GetLargestDoorOpenIndex() : a);
          return (0, T.hL)(v.Get().GetLargestDoorIndexChange(), m), s;
        }
        function N() {
          const A = P(),
            [s, m] = (0, M.useState)(A ? v.Get().BIsAnyDoorOpened() : !1);
          return (0, T.hL)(v.Get().GetIsAnyDoorOpenChange(), m), s;
        }
        function I(A) {
          v.Get().SetInMemoryUpdateDoorOpenUpto(A);
        }
        function B(A, s) {
          v.Get().SetInMemorySpecificDoorState(A, s);
        }
      },
      54407: ($, K, t) => {
        "use strict";
        t.d(K, { B3: () => P, KM: () => g, KT: () => G });
        var e = t(41735),
          x = t.n(e),
          C = t(58632),
          M = t.n(C),
          H = t(90626),
          L = t(80902),
          S = t(75233),
          T = t(72604),
          j = t(76559),
          D = t(34592),
          J = t(3166),
          V = t(35038),
          O = t(27386),
          r = t(68312);
        const a = "nicknames";
        function g(c) {
          const N = (0, r.KV)(),
            { data: I, isLoading: B } = (0, L.I)({
              queryKey: [a],
              queryFn: async () => {
                const A = new Map();
                if (J.iA.logged_in) {
                  const s = V.w.Init(O.w_T),
                    E = (await O.xtC.GetNicknameList(N, s)).Body().toObject();
                  E?.nicknames &&
                    E.nicknames.length > 0 &&
                    E.nicknames.forEach((R) => {
                      A.set(R.accountid, R.nickname);
                    });
                }
                return A;
              },
            });
          return I ? I.get(c) : null;
        }
        async function u(c) {
          if (!c || c.length == 0) return [];
          const N =
            (0, J.yK)() == "community"
              ? J.TS.COMMUNITY_BASE_URL
              : J.TS.STORE_BASE_URL;
          if (c.length == 1) {
            const I = { accountid: c[0], origin: self.origin },
              B = await x().get(`${N}actions/ajaxgetavatarpersona`, {
                params: I,
              });
            if (
              !B ||
              B.status != 200 ||
              B.data?.success != T.R ||
              !B.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, D.H))(B).strErrorMsg}`;
            return [B.data.userinfo];
          } else {
            const I = { accountids: c.join(","), origin: self.origin },
              B = await x().get(`${N}actions/ajaxgetmultiavatarpersona`, {
                params: I,
              });
            if (
              !B ||
              B.status != 200 ||
              B.data?.success != T.R ||
              !B.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, D.H))(B).strErrorMsg}`;
            const A = new Map();
            return (
              B.data.userinfos.forEach((s) =>
                A.set(new j.b(s.steamid).GetAccountID(), s),
              ),
              c.map((s) => A.get(s))
            );
          }
        }
        const v = new (M())((c) => u(c), { cache: !1 }),
          w = "avatarandpersonas";
        function G(c) {
          const { data: N, isLoading: I } = (0, L.I)({
            queryKey: [w, c],
            queryFn: () => v.load(c),
          });
          return [N, I];
        }
        function P(c) {
          const N = (0, S.jE)(),
            { data: I, isLoading: B } = (0, L.I)({
              queryKey: [w, c],
              queryFn: async () => {
                const s = await v.loadMany(c);
                return (
                  s.forEach((m) => {
                    const E = [w, new j.b(m.steamid).GetAccountID()];
                    N.setQueryData(E, m);
                  }),
                  s
                );
              },
              enabled: c?.length > 0,
            }),
            A = (0, H.useMemo)(() => {
              const s = new Array();
              return (
                I?.forEach((m) => {
                  m instanceof Error || s.push(m);
                }),
                s
              );
            }, [I]);
          return B ? null : A;
        }
        function _(c) {
          return ReactQueryClient.getQueryData([w, c]);
        }
      },
      60655: ($, K, t) => {
        "use strict";
        t.d(K, { hA: () => E, LG: () => R });
        var e = t(7850),
          x = t(60480),
          C = t(6469),
          M = t(18210),
          H = t(3166),
          L = t(25792),
          S = t(85599),
          T = t(24660),
          j = t(79083),
          D = t(40358),
          J = t(29522),
          V = t(90626),
          O = t(56524),
          r = t.n(O),
          a = t(19298),
          g = t(95695),
          u = t.n(g),
          v = t(51079),
          w = t(13484),
          G = t(36707),
          P = t(19730),
          _ = t(53113);
        function c(y) {
          const {
            strURL: f,
            strName: U,
            strAvatarURL: b,
            nFollowers: X,
            strCreatorType: se,
            strTagLine: ne,
            strMemberListURL: q,
            followButton: k,
            bSmallFormat: ie,
            bMinimalDisplay: _e,
          } = y;
          return (0, e.jsx)(v.Ay, {
            feature: "salecreatorhome",
            children: (0, e.jsxs)(a.Z, {
              className: (0, G.A)(
                r().DevSummaryCtn,
                ie ? r().SmallFormat : r().LargeFormat,
                _e ? r().MinimalDisplay : "",
              ),
              "flow-children": "row",
              children: [
                !!se &&
                  (0, e.jsx)("span", { className: r().Title, children: se }),
                (0, e.jsxs)("div", {
                  className: r().DevSummaryWidgetCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: r().DevSummaryBackground,
                      style: { backgroundImage: `url(${b} )` },
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, G.A)(r().DevSummaryContent),
                      children: [
                        (0, e.jsxs)("div", {
                          className: u().FlexRowContainer,
                          children: [
                            (0, e.jsx)(w.m, {
                              href: (0, _.k2)(f),
                              className: r().AvatarLink,
                              bAllowFocuseableAnchor: !0,
                              children: (0, e.jsx)("img", {
                                className: (0, G.A)(r().Avatar, "Avatar_Trgt"),
                                src: b,
                              }),
                            }),
                            (0, e.jsxs)("div", {
                              className: (0, G.A)(
                                u().FlexColumnContainer,
                                r().CreatorDescCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: (0, G.A)(
                                    r().CreatorTitleCtn,
                                    u().FlexColumnContainer,
                                  ),
                                  children: [
                                    (0, e.jsx)(w.m, {
                                      href: (0, _.k2)(f),
                                      className: r().CreatorNameName,
                                      children: U,
                                    }),
                                    !!ne &&
                                      (0, e.jsx)("div", {
                                        className: (0, G.A)(
                                          u().FlexColumnContainer,
                                          r().CreatorTagline,
                                        ),
                                        children: ne,
                                      }),
                                  ],
                                }),
                                (0, e.jsx)("div", {
                                  className: (0, G.A)({
                                    [u().FlexColumnContainer]: ie,
                                    [u().FlexRowContainer]: !ie,
                                    [r().SocialFollowersCtn]: !0,
                                  }),
                                  children: (0, e.jsxs)("div", {
                                    className: (0, G.A)(r().FollowBtnCtn),
                                    children: [
                                      k,
                                      (0, e.jsxs)("div", {
                                        className: (0, G.A)({
                                          [r().Followers]: !0,
                                        }),
                                        children: [
                                          (0, e.jsx)("span", {
                                            children: (0, M.we)(
                                              "#CreatorHome_JustFollowers",
                                            ),
                                          }),
                                          (0, e.jsx)("span", {
                                            className: r().FollowerCount,
                                            children: (0, P.Dq)(X),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        !!q &&
                          (0, e.jsx)("a", {
                            href: q,
                            target: "_blank",
                            className: r().MembersListLink,
                            children: (0, M.we)("#ClanMembershipList"),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var N = t(37934);
        function I(y) {
          const { data: f } = (0, D.wl)(y ? { appid: y } : void 0);
          return V.useMemo(() => {
            if (!y) return [];
            if (!f) return;
            const U = [],
              b = new Set(),
              X = [
                ["developer", (0, J.Qm)(f.developers)],
                ["publisher", (0, J.Qm)(f.publishers)],
                ["franchise", (0, J.Qm)(f.franchises)],
              ];
            for (const [se, ne] of X)
              for (const q of ne)
                b.has(q) ||
                  (b.add(q),
                  U.push({ appid: y, name: "", clan_account_id: q, type: se }));
            return U;
          }, [y, f]);
        }
        function B(y) {
          const { rgCreators: f, renderCreator: U } = y,
            [b, X] = V.useState(0);
          if (!f.length) return null;
          if (f.length == 1)
            return (0, e.jsx)(e.Fragment, { children: U(f[0]) });
          const se = b % f.length;
          return (0, e.jsxs)("div", {
            className: r().CreatorCarouselCtn,
            children: [
              U(f[se]),
              (0, e.jsx)("div", {
                className: r().CreatorCarouselCrumbs,
                children: f.map((ne, q) =>
                  (0, e.jsx)(
                    T.ml,
                    {
                      className: r().CreatorCarouselCrumb,
                      onClick: () => X(q),
                      "aria-label": m(ne.type),
                      children: (0, e.jsx)(j.U, { bIsActive: q == se }),
                    },
                    ne.clan_account_id,
                  ),
                ),
              }),
            ],
          });
        }
        function A(y) {
          const { creatorID: f, bSmallFormat: U } = y,
            { data: b } = useCreatorHomeByClanAccountID(f.clan_account_id);
          return b
            ? jsx(CreatorHomeEmbedDisplay, {
                strURL: GetCreatorHomeURL(b, f.type),
                strName: b.name ?? "",
                strAvatarURL: b.avatar_url_full_size ?? "",
                nFollowers: b.followers ?? 0,
                strCreatorType: m(f.type),
                followButton: jsx(CuratorFollowButton, {
                  clanAccountID: f.clan_account_id,
                  followType: "creatorhome",
                }),
                bSmallFormat: U,
              })
            : null;
        }
        function s(y) {
          const { appid: f, bSmallFormat: U } = y,
            b = I(f);
          return b
            ? jsx(B, {
                rgCreators: b,
                renderCreator: (X) => jsx(A, { creatorID: X, bSmallFormat: U }),
              })
            : jsx("div", {
                className: creatorstyle.DevSummaryWidgetCtn,
                children: jsx(Throbber, {}),
              });
        }
        function m(y) {
          switch (y) {
            case "publisher":
              return (0, M.we)("#CreatorHome_PublishedBy");
            case "franchise":
              return (0, M.we)("#CreatorHome_InFranchise");
          }
          return (0, M.we)("#CreatorHome_DevelopedBy");
        }
        function E(y) {
          const {
              creatorID: f,
              bShowTagline: U,
              bHideCreatorType: b,
              bSmallFormat: X,
              bHideFollowButton: se,
              bAddLinkToMemberList: ne,
              bMinimalDisplay: q,
            } = y,
            { creatorHome: k } = (0, x.FV)(f.clan_account_id),
            [ie] = (0, C.L2)();
          return ie || !k
            ? (0, e.jsx)("div", {
                className: O.DevSummaryWidgetCtn,
                children: (0, e.jsx)(S.t, {
                  string: (0, M.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              })
            : (0, e.jsx)(L.tH, {
                children: (0, e.jsx)(c, {
                  strURL: k.GetCreatorHomeURL(f.type),
                  strName: k.GetName(),
                  strAvatarURL: k.GetAvatarURLFullSize(),
                  nFollowers: k.GetNumFollowers(),
                  strCreatorType: b ? void 0 : m(f.type),
                  strTagLine: U ? k.GetTagLine() : void 0,
                  strMemberListURL: ne
                    ? H.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      k.GetClanSteamID().ConvertTo64BitString() +
                      "/members/"
                    : void 0,
                  followButton: se
                    ? void 0
                    : (0, e.jsx)(N.of, {
                        clanAccountID: f.clan_account_id,
                        creatorID: f,
                      }),
                  bSmallFormat: X,
                  bMinimalDisplay: q,
                }),
              });
        }
        function R(y) {
          const { appid: f, bSmallFormat: U } = y,
            b = I(f);
          return b
            ? (0, e.jsx)(L.tH, {
                children: (0, e.jsx)(B, {
                  rgCreators: b,
                  renderCreator: (X) =>
                    (0, e.jsx)(E, { creatorID: X, bSmallFormat: U }),
                }),
              })
            : (0, e.jsx)("div", {
                className: O.DevSummaryWidgetCtn,
                children: (0, e.jsx)(S.t, {}),
              });
        }
        function Z(y) {
          const { clanInfo: f, bAddLinkToMemberList: U } = y;
          if (
            (AssertMsg(
              f && f.clanAccountID,
              "CuratorHoverContent expect clanInfo, not supplied",
            ),
            !f)
          )
            return null;
          const b = {
            clan_account_id: f.clanAccountID,
            name: f.group_name,
            type: "developer",
          };
          return jsx("div", {
            className: creatorstyle.CuratorHoverCtn,
            children: jsx(E, {
              creatorID: b,
              bSmallFormat: !0,
              bShowTagline: !0,
              bHideCreatorType: !0,
              bAddLinkToMemberList: U,
            }),
          });
        }
      },
      85692: ($, K, t) => {
        "use strict";
        t.d(K, { PM: () => O, TU: () => D, lM: () => V, ty: () => J });
        var e = t(90626),
          x = t(30096),
          C = t(14947),
          M = t(179),
          H = t(65946),
          L = Object.defineProperty,
          S = Object.getOwnPropertyDescriptor,
          T = (r, a, g, u) => {
            for (
              var v = u > 1 ? void 0 : u ? S(a, g) : a, w = r.length - 1, G;
              w >= 0;
              w--
            )
              (G = r[w]) && (v = (u ? G(a, g, v) : G(v)) || v);
            return u && v && L(a, g, v), v;
          };
        const j = class ve {
          m_sParentOrigin;
          m_eventModelJson = void 0;
          m_setMouseOverSectionID = C.sH.set();
          m_setMouseOverSubsectionID = C.sH.set();
          m_jumpToSection = void 0;
          m_jumpToSubsection = void 0;
          static s_Singleton;
          static Get() {
            return (
              ve.s_Singleton || (ve.s_Singleton = new ve()), ve.s_Singleton
            );
          }
          constructor() {
            (0, C.Gn)(this),
              window.opener &&
                ((this.m_sParentOrigin = (0, M.f3)(
                  location.search,
                  "parentOrigin",
                )),
                window.addEventListener("message", this.HandleMessage),
                window.addEventListener("beforeunload", () =>
                  window.opener.postMessage(
                    { message: "PartnerEventEditor_ClientUnready" },
                    this.m_sParentOrigin,
                  ),
                ),
                window.opener.postMessage(
                  { message: "PartnerEventEditor_ClientReady" },
                  this.m_sParentOrigin,
                ));
          }
          BIsConnected() {
            return !!(window.opener && this.m_eventModelJson);
          }
          GetEventModelJson() {
            return this.m_eventModelJson;
          }
          GetMouseOverSectionID() {
            return this.m_setMouseOverSectionID.size > 0
              ? this.m_setMouseOverSectionID.values().next().value
              : void 0;
          }
          GetMouseOverSubsectionID() {
            return this.m_setMouseOverSubsectionID.size > 0
              ? this.m_setMouseOverSubsectionID.values().next().value
              : void 0;
          }
          GetJumpToSectionID() {
            return this.m_jumpToSection;
          }
          GetJumpToSubsectionIDs() {
            return this.m_jumpToSubsection;
          }
          ClearJumpToSectionID() {
            (0, C.h5)(() => (this.m_jumpToSection = void 0));
          }
          ClearJumpToSubectionID() {
            (0, C.h5)(() => (this.m_jumpToSubsection = void 0));
          }
          PostMessage(a) {
            !window.opener ||
              !this.m_sParentOrigin ||
              window.opener.postMessage(a, this.m_sParentOrigin);
          }
          SetMouseOverSection(a, g) {
            if (!this.BIsConnected()) return;
            const u = {
              message: "PartnerEventEditor_MouseOverViewSection",
              nSectionID: a,
              bMouseOver: g,
            };
            this.PostMessage(u);
          }
          SetMouseOverSubsection(a, g) {
            if (!this.BIsConnected()) return;
            const u = {
              message: "PartnerEventEditor_MouseOverViewSubsection",
              strSubsectionID: a,
              bMouseOver: g,
            };
            this.PostMessage(u);
          }
          JumpToSection(a) {
            if (!this.BIsConnected()) return;
            const g = {
              message: "PartnerEventEditor_JumpToViewSection",
              nSectionID: a,
            };
            this.PostMessage(g);
          }
          HandleMessage(a) {
            if (a.origin != this.m_sParentOrigin) return;
            const g =
              a.data && typeof a.data == "object" && "message" in a.data
                ? a.data
                : null;
            if (g)
              switch (g.message) {
                case "PartnerEventEditor_Update": {
                  if ("eventModelJson" in g && g.eventModelJson) {
                    const u = g;
                    (0, C.h5)(() => (this.m_eventModelJson = u.eventModelJson));
                  }
                  break;
                }
                case "PartnerEventEditor_MouseOverEditorSection": {
                  if ("nSectionID" in g) {
                    const u = g;
                    (0, C.h5)(() => {
                      u.bMouseOver
                        ? this.m_setMouseOverSectionID.add(u.nSectionID)
                        : this.m_setMouseOverSectionID.delete(u.nSectionID);
                    });
                  }
                  break;
                }
                case "PartnerEventEditor_MouseOverEditorSubsection": {
                  if ("strSubsectionID" in g) {
                    const u = g;
                    (0, C.h5)(() => {
                      u.bMouseOver
                        ? this.m_setMouseOverSubsectionID.add(u.strSubsectionID)
                        : this.m_setMouseOverSubsectionID.delete(
                            u.strSubsectionID,
                          );
                    });
                  }
                  break;
                }
                case "PartnerEventEditor_JumpToEditorSection": {
                  if ("nSectionID" in g) {
                    const u = g;
                    (0, C.h5)(() => (this.m_jumpToSection = u.nSectionID));
                  }
                  break;
                }
                case "PartnerEventEditor_JumpToEditorSubection": {
                  if ("strSubsectionID" in g) {
                    const u = g;
                    (0, C.h5)(() => {
                      (this.m_jumpToSection = u.nSectionID),
                        (this.m_jumpToSubsection = {
                          nSectionID: u.nSectionID,
                          strSubsectionID: u.strSubsectionID,
                        });
                    });
                  }
                  break;
                }
              }
          }
        };
        T([C.sH], j.prototype, "m_eventModelJson", 2),
          T([C.sH], j.prototype, "m_setMouseOverSectionID", 2),
          T([C.sH], j.prototype, "m_setMouseOverSubsectionID", 2),
          T([C.sH], j.prototype, "m_jumpToSection", 2),
          T([C.sH], j.prototype, "m_jumpToSubsection", 2),
          T([x.oI], j.prototype, "HandleMessage", 1);
        let D = j;
        function J() {
          return (0, H.q3)(() => D.Get().BIsConnected());
        }
        function V(r) {
          const a = (0, H.q3)(() => D.Get().GetJumpToSectionID());
          e.useEffect(() => {
            if (!D.Get().BIsConnected() || !a) return;
            r(a) && D.Get().ClearJumpToSectionID();
          }, [r, a]);
        }
        function O(r) {
          const a = (0, H.q3)(() => D.Get().GetJumpToSubsectionIDs());
          e.useEffect(() => {
            if (!D.Get().BIsConnected() || !a) return;
            r(a.nSectionID, a.strSubsectionID) &&
              D.Get().ClearJumpToSubectionID();
          }, [r, a]);
        }
      },
      59490: ($, K, t) => {
        "use strict";
        t.d(K, { p: () => T });
        var e = t(7850),
          x = t(90626),
          C = t(76559),
          M = t(54407),
          H = t(15736),
          L = t.n(H),
          S = t(3166);
        function T(j) {
          const {
              accountID: D,
              bHideWhenNotAvailable: J,
              bHideName: V,
              bLink: O = !0,
            } = j,
            [r] = (0, M.KT)(D),
            a = (0, M.KM)(D),
            g = x.useMemo(() => C.b.InitFromAccountID(D), [D]),
            u = `${S.TS.COMMUNITY_BASE_URL}profiles/${g.ConvertTo64BitString()}`,
            v = O ? "a" : "span";
          return (0, e.jsx)(e.Fragment, {
            children: r
              ? (0, e.jsxs)(v, {
                  href: O ? u : void 0,
                  children: [
                    (0, e.jsx)("img", {
                      className: H.SmallAvatar,
                      src: r.avatar_url,
                      "data-miniprofile": "s" + g.ConvertTo64BitString(),
                    }),
                    !V &&
                      (0, e.jsx)("span", {
                        children: a
                          ? `${a} (${r.persona_name})`
                          : r.persona_name,
                      }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {
                  children: !J && (0, e.jsx)("span", { children: D }),
                }),
          });
        }
      },
      12932: ($, K, t) => {
        "use strict";
        t.d(K, { qx: () => a });
        var e = t(7850),
          x = t(16412),
          C = t(18210),
          M = t(36118),
          H = t(90626),
          L = t(36707),
          S = t(95695),
          T = t.n(S),
          j = t(25792),
          D = t(64734),
          J = t.n(D),
          V = t(65946),
          O = t(11243);
        function r(u) {
          const {
              title: v,
              tooltip: w,
              getMinimized: G,
              toggleMinimized: P,
              className: _,
              children: c,
              elAdditionalButtons: N,
            } = u,
            I = (0, V.q3)(() => G());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, L.A)(
                  _,
                  D.SectionTitleHeader,
                  D.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, L.A)(
                      S.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [v, !!w && (0, e.jsx)(O.o, { tooltip: w })],
                  }),
                  (0, e.jsxs)("div", {
                    className: D.SectionTitleButtons,
                    children: [
                      N,
                      (0, e.jsx)(g, { bIsMinimized: I, fnToggleMinimize: P }),
                    ],
                  }),
                ],
              }),
              !I && (0, e.jsx)(j.tH, { children: c }),
            ],
          });
        }
        function a(u) {
          const [v, w] = H.useState(!!u.bStartMinimized);
          return (0, e.jsx)(r, {
            ...u,
            getMinimized: () => v,
            toggleMinimized: () => w(!v),
            children: u.children,
          });
        }
        function g(u) {
          const { bIsMinimized: v, fnToggleMinimize: w } = u,
            G = v ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(x.$n, {
            "data-tooltip-text": (0, C.we)(G),
            onClick: w,
            children: u.bIsMinimized
              ? (0, e.jsx)(M.hz4, {})
              : (0, e.jsx)(M.Xjb, {}),
          });
        }
      },
      13484: ($, K, t) => {
        "use strict";
        t.d(K, { m: () => H });
        var e = t(7850),
          x = t(24660),
          C = t(72609),
          M = t(32093);
        function H(L) {
          const { href: S, children: T, bAllowFocuseableAnchor: j, ...D } = L;
          return C.TS.EREALM === M.TU.k_ESteamRealmChina
            ? (0, e.jsx)("div", { ...D, children: T })
            : j
              ? (0, e.jsx)(x.Ii, { href: S, ...D, children: T })
              : (0, e.jsx)("a", { href: S, ...D, children: T });
        }
      },
      15961: ($, K, t) => {
        "use strict";
        t.r(K), t.d(K, { MeetSteamRoutes: () => Se, default: () => Je });
        var e = t(7850),
          x = t(58732),
          C = t(92757),
          M = t(99412),
          H = t(32093),
          L = t(72609),
          S = t(90626),
          T = t(7638),
          j = t(79118),
          D = t(24808),
          J = t(65647),
          V = t(85599),
          O = t(18210),
          r = t(54071),
          a = t(25792);
        function g(h) {
          const { gid: n } = (0, C.g)(),
            [o, d] = (0, S.useState)(!0);
          if (
            (S.useEffect(() => {
              o &&
                (j.O3.Init(),
                Promise.all([T.KN.InitGlobal()]).then(() => d(!1)));
            }, [o]),
            o)
          )
            return (0, e.jsx)(V.t, {
              string: (0, O.we)("#Loading"),
              position: "center",
            });
          const l = j.O3.GetClanEventModel(n);
          return l
            ? (0, e.jsxs)(a.tH, {
                children: [
                  !l.BIsUnlistedEvent() &&
                    (0, e.jsx)("div", {
                      children:
                        "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
                    }),
                  (0, e.jsx)(J.jA, {
                    lang: (0, M.sfN)(L.TS.LANGUAGE),
                    event: l,
                    adminPanel:
                      L.TS.EREALM === H.TU.k_ESteamRealmChina
                        ? (0, e.jsx)(r.P, { eventModel: l })
                        : (0, e.jsx)(D.g, {
                            eventModel: l,
                            bSupportsSticky: !0,
                          }),
                  }),
                ],
              })
            : null;
        }
        var u = t(72604),
          v = t(51614),
          w = t(41735),
          G = t.n(w),
          P = t(53275),
          _ = t(7582),
          c = t(98609),
          N = t(67705);
        function I(h, n, o, d) {
          return (0, v.n)({
            mutationFn: async ({ bIncludeSelf: l, rgGuests: i }) => {
              const p = new FormData();
              p.append("sessionid", (0, N.KC)()),
                p.append("gid", h),
                p.append("accountid", "" + n),
                p.append("meetsteam_group_id", "" + o),
                p.append("meetsteam_session_id", "" + d),
                p.append("include_self", "" + (l ? 1 : 0)),
                i?.length && p.append("guests", i.join("|"));
              const W = `${c.TS.STORE_BASE_URL}meetsteam/ajaxupdateattendance`;
              return (
                (await G().post(W, p, { withCredentials: !0 }))?.data
                  ?.success == u.R
              );
            },
          });
        }
        function B(h, n, o) {
          return (0, v.n)({
            mutationFn: async ({ nCapacity: d }) => {
              const l = new FormData();
              l.append("sessionid", (0, N.KC)()),
                l.append("gid", h),
                l.append("meetsteam_group_id", "" + n),
                l.append("meetsteam_session_id", "" + o),
                l.append("capacity", "" + d);
              const i = `${c.TS.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`;
              return (
                (await G().post(i, l, { withCredentials: !0 }))?.data
                  ?.success == u.R
              );
            },
          });
        }
        function A(h) {
          return h.reduce(
            (n, o) => (
              n[o.relativeToToday] || (n[o.relativeToToday] = []),
              n[o.relativeToToday].push(o),
              n
            ),
            { today: [], past: [], future: [] },
          );
        }
        function s(h, n, o) {
          for (const d of h)
            if (d.group_id === n) {
              const l = d.sessions.find((i) => i.id === o);
              if (l) return { group: d, session: l };
            }
          return { group: null, session: null };
        }
        function m(h, n) {
          const o = (0, _.f1)(),
            [d] = (0, S.useState)(() =>
              (0, N.Tc)("registrations", "application_config")
                .map((i) => ((i.userReg = JSON.parse(i.jsondata)), i))
                .sort((i, p) => {
                  const W = s(
                    h.jsondata.meet_steam_groups,
                    i.group_id,
                    i.session_id,
                  );
                  return (
                    (s(h.jsondata.meet_steam_groups, p.group_id, p.session_id)
                      ?.session?.rtime_start || 0) -
                    (W?.session?.rtime_start || 0)
                  );
                })
                .map((i) => {
                  const p = s(
                    h.jsondata.meet_steam_groups,
                    i.group_id,
                    i.session_id,
                  );
                  return (
                    (i.relativeToToday = R(p?.session, o)),
                    (i.rtSesssionTime = p?.session?.rtime_start ?? 0),
                    i
                  );
                }),
            ),
            l = n?.trim().toLowerCase() || "";
          return (0, S.useMemo)(
            () =>
              d.filter(
                (i) =>
                  !l.length ||
                  i.userReg.name?.toLowerCase().includes(l) ||
                  i.userReg.company?.toLowerCase().includes(l) ||
                  i.userReg.guest_names?.find((p) =>
                    p.toLowerCase().includes(l),
                  ) ||
                  i.userReg.email_override?.toLowerCase().includes(l),
              ),
            [d, n],
          );
        }
        function E(h, n) {
          return (0, S.useMemo)(() => A(h), [h, n]);
        }
        function R(h, n) {
          if (!h) return "past";
          const o = (0, P.Sk)(h),
            d = (0, P.Ue)(h.rtime_start, o),
            l = n !== void 0 ? new Date(n * 1e3) : new Date(),
            i = new Date(l.getFullYear(), l.getMonth(), l.getDate()),
            p = new Date(l.getFullYear(), l.getMonth(), l.getDate() + 1);
          return d >= i && d < p ? "today" : d < i ? "past" : "future";
        }
        var Z = t(48421),
          y = t(54407),
          f = t(16412),
          U = t(73191),
          b = t(179),
          X = t(59490),
          se = t(1880),
          ne = t(69168),
          q = t(12932),
          k = t(36707),
          ie = t(92264),
          _e = t(30096),
          Oe = t(15588),
          ae = t.n(Oe),
          je = t(20117);
        function Te(h) {
          const [n] = (0, b.QD)("gid"),
            o = (0, Z.RR)(n),
            d = (0, M.sfN)(c.TS.LANGUAGE);
          return o
            ? (0, e.jsxs)("div", {
                className: ae().Ctn,
                children: [
                  (0, e.jsxs)("div", {
                    className: ae().EventName,
                    children: [
                      (0, e.jsx)("h2", { children: o.GetNameWithFallback(d) }),
                      (0, e.jsx)("a", {
                        href: `${c.TS.STORE_BASE_URL}meetsteam/${n}`,
                        target: "_blank",
                        children: "See Event Details",
                      }),
                    ],
                  }),
                  (0, e.jsx)(Ae, { eventModel: o }),
                ],
              })
            : (0, e.jsx)(V.t, { string: (0, O.we)("#Loading") });
        }
        function Ae(h) {
          const { eventModel: n } = h,
            o = E(m(n)),
            [d] = (0, b.QD)("accountid"),
            l = (0, _.f1)();
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: ae().User,
                children: (0, e.jsx)(X.p, { accountID: d }),
              }),
              (0, e.jsx)(me, {
                eventModel: n,
                rgUserRegs: o.today,
                strTitle: "Today " + (0, ie.$z)(l),
              }),
              (0, e.jsx)(me, {
                eventModel: n,
                rgUserRegs: o.future,
                bHideIfEmpty: !0,
                strTitle: "Future",
              }),
              (0, e.jsx)(me, {
                eventModel: n,
                rgUserRegs: o.past,
                bHideIfEmpty: !0,
                strTitle: "Past",
              }),
            ],
          });
        }
        function me(h) {
          const {
            eventModel: n,
            rgUserRegs: o,
            bHideIfEmpty: d,
            strTitle: l,
          } = h;
          return o.length == 0 && d
            ? null
            : (0, e.jsx)(q.qx, {
                title: `${l} (${o.length})`,
                bStartMinimized: d,
                children:
                  !o || o.length == 0
                    ? (0, e.jsx)("div", {
                        children: d ? "" : "No registrations",
                      })
                    : (0, e.jsx)("div", {
                        children: o
                          .sort((i, p) => i.rtSesssionTime - p.rtSesssionTime)
                          .map((i) =>
                            (0, e.jsx)(
                              Le,
                              { eventModel: n, reg: i },
                              `${i.group_id}_${i.session_id}`,
                            ),
                          ),
                      }),
              });
        }
        function xe(h) {
          const { desc: n } = h,
            [o, d] = (0, S.useState)(!1),
            l = (0, S.useCallback)(() => d((i) => !i), []);
          return (0, e.jsx)("div", {
            className: (0, k.A)({
              [ae().DescriptionWrapper]: !0,
              [ae().Expanded]: o,
            }),
            onClick: l,
            onMouseEnter: () => d(!0),
            onMouseLeave: () => d(!1),
            children: n,
          });
        }
        function Le(h) {
          const { reg: n, eventModel: o } = h,
            d = new je.b2(n.steamid).GetAccountID(),
            [l] = (0, y.KT)(n.userReg.accountid),
            [i, p] = (0, S.useState)(!0),
            [W, F] = (0, S.useState)([]),
            [oe, z] = (0, S.useState)(!1),
            Y = n.userReg,
            { group: ee, session: le } = s(
              o.jsondata.meet_steam_groups,
              n.group_id,
              n.session_id,
            ),
            [te, ce, fe] = (0, _e.uD)(),
            De = I(o.GID, d, n.group_id, n.session_id),
            he = new Set(
              n.guests_attendance?.length > 0
                ? n.guests_attendance.split("|")
                : [],
            ),
            de = n.attendance_count > he.size,
            Ie = (re, Ce, ue, Ee) =>
              (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsxs)("span", {
                    className: ae().GuestTitle,
                    children: [re, ":", "\xA0"],
                  }),
                  Ce,
                  ue &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        "\xA0",
                        (0, e.jsxs)("span", {
                          className: ae().GuestEmail,
                          children: ["(", ue, ")"],
                        }),
                      ],
                    }),
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      "\xA0",
                      "-",
                      (0, e.jsx)("span", {
                        children: Ee
                          ? "\u2705 checked in"
                          : "\u2610 not checked in",
                      }),
                    ],
                  }),
                ],
              });
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(Be, { group: ee, session: le }),
              oe
                ? (0, e.jsx)("div", {
                    className: ae().CheckedIn,
                    children: "Attendee has been checked in",
                  })
                : (0, e.jsxs)("div", {
                    className: ae().RegisteredUsers,
                    children: [
                      (0, e.jsx)(f.Yh, {
                        label: (0, e.jsx)(e.Fragment, {
                          children: Ie(
                            "Attendee",
                            Y.name || l.persona_name,
                            Y.email_override,
                            de,
                          ),
                        }),
                        checked: i,
                        onChange: p,
                      }),
                      Y.guest_names?.length > 0 &&
                        (0, e.jsx)(e.Fragment, {
                          children: Y.guest_names.map((re) =>
                            (0, e.jsx)(
                              f.Yh,
                              {
                                label: (0, e.jsx)(e.Fragment, {
                                  children: Ie("Guest", re, void 0, he.has(re)),
                                }),
                                checked: W.includes(re),
                                onChange: (Ce) => {
                                  F((ue) =>
                                    Ce
                                      ? ue.includes(re)
                                        ? ue
                                        : [...ue, re]
                                      : ue.filter((Ee) => Ee !== re),
                                  );
                                },
                              },
                              "" + n.group_id + "_" + n.session_id + "_" + re,
                            ),
                          ),
                        }),
                      (0, e.jsx)(f.jn, {
                        onClick: ce,
                        children: "Check in selected people",
                      }),
                    ],
                  }),
              (0, e.jsx)(ne.E, {
                active: te,
                children: (0, e.jsx)(a.tH, {
                  children: (0, e.jsx)(Pe, {
                    closeModal: fe,
                    bIncludeSelf: i,
                    rgGuestsAttending: W,
                    fnMarkAttendance: De,
                    fnOnSuccess: () => z(!0),
                  }),
                }),
              }),
            ],
          });
        }
        function Pe(h) {
          const {
              closeModal: n,
              bIncludeSelf: o,
              rgGuestsAttending: d,
              fnMarkAttendance: l,
              fnOnSuccess: i,
            } = h,
            p = (0, U.vs)();
          return p.bLoading
            ? (0, e.jsx)(U.Hh, {
                state: p,
                strDialogTitle: (0, O.we)("#Saving"),
                closeModal: n,
              })
            : (0, e.jsx)(se.o0, {
                onCancel: n,
                strTitle: (0, O.we)("#Button_Submit"),
                bAllowFullSize: !0,
                onOK: async () => {
                  p.fnSetLoading(!0),
                    l
                      .mutateAsync({ bIncludeSelf: o, rgGuests: d })
                      .then((W) => {
                        W
                          ? (i(),
                            p.fnSetStrSuccess(
                              "Success! This person has been checked in.",
                            ))
                          : p.fnSetStrError(
                              (0, O.we)("#Login_Error_Network_Description"),
                            );
                      })
                      .catch(() =>
                        p.fnSetStrError(
                          (0, O.we)("#Login_Error_Network_Description"),
                        ),
                      );
                },
                children: "Mark as checked in?",
              });
        }
        function Be(h) {
          const { session: n, group: o } = h,
            {
              sDisplayTimeZone: d,
              rtime_start: l,
              rtime_end: i,
            } = (0, P._t)(h.session),
            p = (0, P.rF)(l, d),
            W = (0, P.Mr)(l, i, d);
          return !n || !o
            ? (0, e.jsx)("div", { children: "Session Infomrmation Missing" })
            : (0, e.jsxs)("div", {
                className: ae().SessionInfo,
                children: [
                  (0, e.jsx)("div", {
                    className: ae().SessionName,
                    children: o.localized_session_title[M.Bhc],
                  }),
                  (0, e.jsxs)("div", {
                    className: ae().SessionTime,
                    children: [p, " @ ", (0, e.jsx)("b", { children: W })],
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)(xe, {
                      desc: `Description: ${o.localized_session_description[M.Bhc] || ""}`,
                    }),
                  }),
                  !1,
                ],
              });
        }
        var Re = t(90783),
          Ue = t(29645),
          Q = t.n(Ue),
          Ne = t(36118),
          Me = t(36174),
          Ge = t(3166);
        function ge(h) {
          const n = new Date(h.getTime());
          return n.setHours(0, 0, 0, 0), n;
        }
        function $e(h) {
          const n = new Date(h.getTime());
          return n.setDate(1), n.setHours(0, 0, 0, 0), n;
        }
        function Ve(h, n) {
          const o = new Date(h);
          return o.setDate(h.getDate() + n), o;
        }
        function we(h, n) {
          return h.reduce((o, d) => {
            const l = n(d),
              i = Math.floor(l.getTime() / 1e3),
              p = o.get(i) || [];
            return o.set(i, [...p, d]), o;
          }, new Map());
        }
        function be(h) {
          const [n] = (0, b.QD)("gid"),
            o = (0, Z.RR)(n),
            d = (0, M.sfN)(c.TS.LANGUAGE),
            [l, i] = (0, S.useState)("");
          return o
            ? (0, e.jsxs)("div", {
                className: Q().Ctn,
                children: [
                  (0, e.jsxs)("div", {
                    className: Q().EventName,
                    children: [
                      (0, e.jsx)("h1", { children: o.GetNameWithFallback(d) }),
                      (0, e.jsx)("a", {
                        href: `${c.TS.STORE_BASE_URL}meetsteam/${n}`,
                        target: "_blank",
                        children: "See Event Details",
                      }),
                    ],
                  }),
                  (0, e.jsx)(We, { eventModel: o }),
                  (0, e.jsx)("div", {
                    className: Q().AtendeeSearchRow,
                    children: (0, e.jsx)(f.pd, {
                      type: "text",
                      label: "Search for an attendee",
                      value: l,
                      bShowClearAction: !0,
                      onChange: (p) => i(p.currentTarget.value || ""),
                      placeholder: "Type name or partner or email address",
                    }),
                  }),
                  (0, e.jsx)(Ke, { eventModel: o, strSearch: l.toLowerCase() }),
                ],
              })
            : (0, e.jsx)(V.t, { string: (0, O.we)("#Loading") });
        }
        function Ke(h) {
          const { eventModel: n, strSearch: o } = h,
            d = m(n, o),
            [l, i] = (0, S.useState)(null),
            [p, W] = (0, S.useMemo)(() => {
              const F = new Map();
              return (
                d.forEach((oe) => {
                  [oe.userReg.name, ...(oe.userReg.guest_names || [])].forEach(
                    (Y) => {
                      const ee = Y.toLowerCase();
                      F.has(ee) ? F.get(ee).push(oe) : F.set(ee, [oe]);
                    },
                  );
                }),
                [F, Array.from(F.keys()).sort()]
              );
            }, [d]);
          return (
            S.useEffect(() => {
              i(null);
            }, [o]),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("h3", { children: "Attendees" }),
                l
                  ? (0, e.jsx)(He, {
                      eventModel: n,
                      rgSelected: l,
                      strSearch: o,
                      onCleanSelection: () => i(null),
                    })
                  : (0, e.jsx)(e.Fragment, {
                      children: W.filter((F) => !o || F.includes(o)).map((F) =>
                        (0, e.jsx)(
                          "div",
                          {
                            className: Q().AttendeeRow,
                            children: (0, e.jsx)(f.$n, {
                              onClick: () => i(p.get(F.toLowerCase())),
                              children: F,
                            }),
                          },
                          F,
                        ),
                      ),
                    }),
              ],
            })
          );
        }
        function He(h) {
          const {
              eventModel: n,
              rgSelected: o,
              strSearch: d,
              onCleanSelection: l,
            } = h,
            i = (0, _.f1)(),
            p = E(o, d);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: Q().AtendeeListButtonRow,
                children: (0, e.jsxs)(f.$n, {
                  onClick: l,
                  children: [
                    (0, e.jsx)(Ne.uMb, { className: Q().BackToListIcon }),
                    "Back to full list",
                  ],
                }),
              }),
              (0, e.jsx)(me, {
                eventModel: n,
                rgUserRegs: p.today,
                strTitle: "Today " + (0, O.$z)(i),
              }),
              (0, e.jsx)(me, {
                eventModel: n,
                rgUserRegs: p.future,
                bHideIfEmpty: !0,
                strTitle: "Future",
              }),
              (0, e.jsx)(me, {
                eventModel: n,
                rgUserRegs: p.past,
                bHideIfEmpty: !0,
                strTitle: "Past",
              }),
            ],
          });
        }
        function We(h) {
          const { eventModel: n } = h,
            o = (0, _.s4)(),
            [d, l] = S.useState(!1),
            { rgGroupedSessions: i, bMoreSessions: p } = S.useMemo(() => {
              const z = n?.jsondata?.meet_steam_groups?.flatMap((te) =>
                  te.sessions.map((ce) => {
                    const fe = (0, P.Sk)(ce),
                      De = (0, P.Ue)(ce.rtime_start, fe);
                    return { group: te, session: ce, displayDate: De };
                  }),
                ),
                Y = z?.filter((te) => d || ge(te.displayDate) >= ge(o)),
                ee = d || (z && z.length > Y.length);
              return {
                rgGroupedSessions: we(Y ?? [], (te) => ge(te.displayDate)),
                bMoreSessions: ee,
              };
            }, [n?.jsondata?.meet_steam_groups, o, d]),
            W = S.useMemo(() => {
              const z = (0, Ge.Tc)("registrations", "application_config");
              if (!(!z || typeof z != "object"))
                return z.reduce((Y, ee) => {
                  const le = `${ee.group_id}_${ee.session_id}`,
                    te = Y.get(le) ?? [];
                  return te.push(ee), Y.set(le, te), Y;
                }, new Map());
            }, []);
          if (!W || (i.size == 0 && !p)) return;
          const F =
              Array.from(i.keys()).reduce(
                (z, Y) =>
                  z == null || (Y * 1e3 > o.getTime() && Y < z) ? Y : z,
                void 0,
              ) ?? 0,
            oe = Array.from(i.keys()).some((z) =>
              (0, Me.JD)(o, new Date(z * 1e3)),
            );
          return (0, e.jsxs)("div", {
            className: Q().DisplayAllDaysCtn,
            children: [
              p &&
                (0, e.jsx)(f.Yh, {
                  label: "Show past events",
                  checked: d,
                  onChange: l,
                }),
              (0, e.jsx)("div", {
                className: Q().DisplayDaysCtn,
                children: Array.from(i.keys()).map((z) =>
                  (0, e.jsx)(
                    Fe,
                    {
                      eventModel: n,
                      date: new Date(z * 1e3),
                      sessionsAndGroups: i.get(z),
                      rgRegistrationInfo: W,
                      isToday: (0, Me.JD)(
                        oe ? o : new Date(F * 1e3),
                        new Date(z * 1e3),
                      ),
                    },
                    z,
                  ),
                ),
              }),
            ],
          });
        }
        function Fe(h) {
          const {
            eventModel: n,
            date: o,
            sessionsAndGroups: d,
            rgRegistrationInfo: l,
            isToday: i,
          } = h;
          return (0, e.jsxs)("div", {
            className: (0, k.A)(Q().DisplayDaySessions, !i && Q().NotToday),
            children: [
              (0, e.jsx)("div", {
                className: Q().DateName,
                children: (0, O.$w)(o),
              }),
              (0, e.jsx)("div", {
                className: Q().DisplayDaySessionsRow,
                children: d.map((p) =>
                  (0, e.jsx)(
                    ze,
                    {
                      eventModel: n,
                      date: o,
                      registrations:
                        l.get(`${p.group.group_id}_${p.session.id}`) ?? [],
                      group: p.group,
                      session: p.session,
                    },
                    `${p.group.group_id}_${p.session.id}`,
                  ),
                ),
              }),
            ],
          });
        }
        function ze(h) {
          const {
              eventModel: n,
              date: o,
              group: d,
              session: l,
              registrations: i,
            } = h,
            p = (0, M.sfN)(c.TS.LANGUAGE),
            W = (0, _.s4)(),
            { sDisplayTimeZone: F, rtime_start: oe } = (0, P._t)(l),
            z = (0, P.us)(oe, F),
            Y = i.reduce((he, de) => he + (de.guests_registered ?? 0), 0),
            ee = i.reduce(
              (he, de) =>
                he +
                (de.rt_attendance_marked > 0 && de.guests_registered
                  ? de.guests_registered
                  : 0),
              0,
            ),
            [le, te, ce] = (0, _e.uD)(),
            fe = B(n.GID, d.group_id, l.id),
            De = () => window.location.reload();
          return (0, e.jsxs)("div", {
            className: Q().DisplaySession,
            children: [
              (0, e.jsxs)("div", {
                className: Q().Header,
                children: [
                  (0, e.jsx)("div", {
                    className: Q().SessionName,
                    children:
                      d.localized_session_title[p] ??
                      d.localized_session_title[M.Bhc],
                  }),
                  (0, e.jsx)("div", {
                    className: Q().SessionTime,
                    children: z,
                  }),
                ],
              }),
              (0, e.jsx)(ye, {
                title: "Registered:",
                nCount: Y,
                nCapacity: l.max_capacity,
              }),
              (0, e.jsx)(ye, {
                title: "Checked in:",
                nCount: ee,
                nCapacity: l.max_capacity,
              }),
              ge(o) >= ge(W) &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(f.$n, {
                      className: (0, k.A)(Q().SetCapacityButton),
                      onClick: te,
                      children: "Update capacity...",
                    }),
                    (0, e.jsx)(ne.E, {
                      active: le,
                      children: (0, e.jsx)(a.tH, {
                        children: (0, e.jsx)(Qe, {
                          closeModal: ce,
                          nCapacity: l.max_capacity ?? 0,
                          fnUpdateCapacity: fe,
                          fnOnSuccess: () => De(),
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function Qe(h) {
          const {
              closeModal: n,
              nCapacity: o,
              fnUpdateCapacity: d,
              fnOnSuccess: l,
            } = h,
            [i, p] = S.useState(o.toString()),
            W = (0, U.vs)();
          return W.bLoading
            ? (0, e.jsx)(U.Hh, {
                state: W,
                strDialogTitle: (0, O.we)("#Saving"),
                closeModal: n,
              })
            : (0, e.jsx)(se.o0, {
                onCancel: n,
                strTitle: (0, O.we)("Update Capacity"),
                bAllowFullSize: !0,
                onOK: async () => {
                  W.fnSetLoading(!0);
                  const F = Number.isNaN(Number.parseInt(i))
                    ? void 0
                    : Number.parseInt(i);
                  d.mutateAsync({ nCapacity: F })
                    .then((oe) => {
                      oe
                        ? (l(), W.fnSetStrSuccess("Max capacity updated."))
                        : W.fnSetStrError(
                            (0, O.we)("#Login_Error_Network_Description"),
                          );
                    })
                    .catch(() =>
                      W.fnSetStrError(
                        (0, O.we)("#Login_Error_Network_Description"),
                      ),
                    );
                },
                children: (0, e.jsx)(f.pd, {
                  className: Q().SetCapacityInput,
                  label: "New capacity",
                  type: "text",
                  autoComplete: "off",
                  value: i,
                  onChange: (F) => p(F.currentTarget.value),
                }),
              });
        }
        function ye(h) {
          const { title: n, nCount: o, nCapacity: d } = h,
            l = o >= d,
            i = Math.min((o / d) * 100, 100),
            p = o > 0 ? `${i}%` : "0%";
          return (0, e.jsxs)("div", {
            className: Q().CapacityCtn,
            children: [
              (0, e.jsxs)("span", { children: [n, " ", o, " / ", d] }),
              (0, e.jsx)("div", {
                className: Q().CapacityBarMax,
                children: (0, e.jsx)("div", {
                  className: (0, k.A)(
                    Q().CapacityBarCurrent,
                    l ? Q().Full : "",
                  ),
                  style: { width: p },
                }),
              }),
            ],
          });
        }
        const Se = {
          MeetSteamAttendance: () => `${x.B.MeetSteamRoute()}attendance`,
          MeetSteamEvent: () => `${x.B.MeetSteamRoute()}:gid(\\d+)`,
          MeetSteamAttendeeList: () => `${x.B.MeetSteamRoute()}attendeelist`,
        };
        function Je(h) {
          return (0, e.jsxs)(C.dO, {
            children: [
              (0, e.jsx)(C.qh, {
                path: Se.MeetSteamAttendance(),
                render: (n) => (0, e.jsx)(Te, { ...n }),
              }),
              (0, e.jsx)(C.qh, {
                path: Se.MeetSteamAttendeeList(),
                render: (n) => (0, e.jsx)(be, { ...n }),
              }),
              (0, e.jsx)(C.qh, {
                path: Se.MeetSteamEvent(),
                render: (n) => (0, e.jsx)(g, { ...n }),
              }),
              (0, e.jsx)(C.qh, { children: (0, e.jsx)(Re.a, {}) }),
            ],
          });
        }
      },
      15736: ($) => {
        $.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
      64734: ($) => {
        $.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      29645: ($) => {
        $.exports = {
          Ctn: "_35KiKa7cq-3mn4lChNW67c",
          EventName: "e-36dCsEtoK52wg6Qx1iq",
          AtendeeSearchRow: "_1KbfPGq52sl-NB4ku90gN3",
          AtendeeListButtonRow: "_2JLogmiR30ClrphBajhwYK",
          BackToListIcon: "_3bl-GtsF8LkmzsRFkqjeCz",
          AttendeeRow: "_35gHo_M6tBBUOL8PWGEmA9",
          DisplayAllDaysCtn: "_3bvF759mojZQZv_TGXaM5Q",
          DisplayDaysCtn: "_1b8sKAzr4LILvJyl7fkRrL",
          DateName: "_32Ut51xzdWXCL6OOaz4vY2",
          DisplayDaySessions: "_32v8UGu0FfxnCHtltxqiEV",
          NotToday: "_1PB1JESsJ8abJrTzTqOVBk",
          DisplayDaySessionsRow: "_3DhIykQH8p8dQb2VOZg4-L",
          DisplaySession: "_27ybiS1mMlsYotyoQGVmI_",
          Header: "_1jOgBHcEXg1l6kSowBxwn6",
          SessionName: "vl9qom9droT0L3xZs2JhG",
          SessionTime: "PG1xFNh9UdoEjEvvw22V5",
          CapacityCtn: "_2jxcROaKoRgZCIKUHALVRH",
          CapacityBarMax: "_2Kd3cw8fPPyzDXTWBxltj7",
          CapacityBarCurrent: "_3jKSoLI8ytiyq9ELWTJNVY",
          Full: "_27_ZZ6xz-L8KC1u6uQmDz",
          SetCapacityButton: "_1BPqndgvTdc3n4fPDlcvAQ",
          SetCapacityInput: "QnMJIDEn4Rz26VtL1RdUu",
        };
      },
      15588: ($) => {
        $.exports = {
          Ctn: "_3cmUbcgdPxM7o5hl986RgB",
          User: "_3E6Usl36asxUFK3vPKa7Us",
          EventName: "_2GHTaky49GZrPLyiOgKWB7",
          SessionInfo: "Kk38rrvnYm3-E2jJMahSH",
          SessionName: "_2uJvCA4FncHONmSI37VVyw",
          SessionTime: "_2vYmHfXJIHj2eCv8NsiqZv",
          RegisteredUsers: "HLiipgmnfEQ2O-9WritfU",
          CheckedIn: "_17S0ayInAou4_ptPoMguR0",
          GuestTitle: "_2fMFlfbH8xUEtW28kSLf5-",
          GuestEmail: "Tm-tj9XNHRPGqdqqNiTEp",
          DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
        };
      },
    },
  ]);
})();
