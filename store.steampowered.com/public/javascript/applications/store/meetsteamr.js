/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [98620],
  {
    15736: (e) => {
      e.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    29645: (e) => {
      e.exports = {
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
    15588: (e) => {
      e.exports = {
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
    20019: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => o });
      var s = n(76119);
      function o(e) {
        switch (e) {
          case s.uE.HT:
            return "game";
          case s.uE.Sv:
            return "software";
          case s.uE.ue:
            return "demo";
          case s.uE._i:
            return "dlc";
          case s.uE.Wz:
          case s.uE.FS:
            return "video";
          case s.uE.Ov:
            return "music";
          case s.uE.Vi:
            return "beta";
          case s.uE.RA:
            return "mod";
        }
        return "invalid";
      }
    },
    56055: (e, t, n) => {
      "use strict";
      n.d(t, { b2: () => s, nx: () => o });
      const s = "terminal";
      var o;
      !(function (e) {
        (e[(e.TemplateFAQDisplayColumn = 1)] = "TemplateFAQDisplayColumn"),
          (e[(e.TemplateFAQDisplaySimpleRow = 2)] =
            "TemplateFAQDisplaySimpleRow");
      })(o || (o = {}));
    },
    39733: (e, t, n) => {
      "use strict";
      n.d(t, { Du: () => h, fy: () => g, pt: () => p });
      var s = n(68797),
        o = n(78327),
        a = n(41735),
        r = n.n(a),
        i = n(37085),
        c = n(90626),
        d = n(6144),
        l = n(84933),
        u = n(81393);
      class m {
        m_mapBadgeInfo = new Map();
        m_mapBadgeLoadPromises = new Map();
        m_eventBadgehangeCallback = new Map();
        m_mapInitialBadgeInfo = new Map();
        GetBadgeInfo(e) {
          return this.m_mapBadgeInfo.get(e);
        }
        GetInitialBadgeInfo(e) {
          return this.m_mapInitialBadgeInfo.get(e);
        }
        GetBadgeInfoChangeCallback(e) {
          return (
            this.m_eventBadgehangeCallback.has(e) ||
              this.m_eventBadgehangeCallback.set(e, new d.lu()),
            this.m_eventBadgehangeCallback.get(e)
          );
        }
        Test_SetBadgeInfo(e) {
          e.badgeid &&
            (this.m_mapBadgeInfo.set(e.badgeid, e),
            this.GetBadgeInfoChangeCallback(e.badgeid).Dispatch(e));
        }
        async LoadBadgeInfo(e) {
          return this.m_mapBadgeInfo.has(e)
            ? this.m_mapBadgeInfo.get(e)
            : (this.m_mapBadgeLoadPromises.has(e) ||
                this.m_mapBadgeLoadPromises.set(
                  e,
                  this.InternalLoadBadgeInfo(e),
                ),
              this.m_mapBadgeLoadPromises.get(e));
        }
        async InternalLoadBadgeInfo(e) {
          if (!e || !Number.isInteger(e)) return { badgeid: e, level: 0 };
          let t = null;
          try {
            const n = (0, o.xv)();
            (0, u.wT)(
              n == o.TS.STORE_BASE_URL || n == o.TS.COMMUNITY_BASE_URL,
              "ajaxgetbadgeinfo called on wrong unsupported site: " + n,
            );
            const a = n + "actions/ajaxgetbadgeinfo",
              c = { badgeid: e },
              d = await r().get(a, { params: c, withCredentials: !0 });
            if (
              200 == d.status &&
              (d.data?.success == i.R || d.data?.success == i.p)
            ) {
              const t = {
                badgeid: d.data.badgeid,
                level: d.data.level,
                xp: d.data.xp,
                completion_time: d.data.completion_time,
              };
              return (
                this.m_mapBadgeInfo.set(e, t),
                this.m_mapInitialBadgeInfo.has(e) ||
                  this.m_mapInitialBadgeInfo.set(e, t),
                t
              );
            }
            t = (0, s.H)(d);
          } catch (e) {
            t = (0, s.H)(e);
          }
          console.error("useEventBadge: " + t?.strErrorMsg, t);
          const n = { badgeid: e, level: 0 };
          return this.m_mapBadgeInfo.set(e, n), n;
        }
        static s_Singleton;
        static Get() {
          return (
            m.s_Singleton ||
              ((m.s_Singleton = new m()),
              "dev" == o.TS.WEB_UNIVERSE &&
                (window.g_UserBadgeForEventStore = m.s_Singleton)),
            m.s_Singleton
          );
        }
        constructor() {}
      }
      function g(e) {
        const [t, n] = (0, c.useState)(e ? m.Get().GetBadgeInfo(e) : void 0);
        return (
          (0, c.useEffect)(() => {
            !t &&
              e &&
              m
                .Get()
                .LoadBadgeInfo(e)
                .then((e) => n(e));
          }, [e, t]),
          (0, l.hL)(e ? m.Get().GetBadgeInfoChangeCallback(e) : void 0, n),
          t
        );
      }
      function h(e) {
        m.Get().Test_SetBadgeInfo(e);
      }
      function p(e) {
        const [t, n] = (0, c.useState)(
          e ? m.Get().GetInitialBadgeInfo(e) : void 0,
        );
        return (
          (0, c.useEffect)(() => {
            !t && e && m.Get().LoadBadgeInfo(e);
          }, [e, t]),
          (0, l.hL)(e ? m.Get().GetBadgeInfoChangeCallback(e) : void 0, () =>
            n(e ? m.Get().GetInitialBadgeInfo(e) : void 0),
          ),
          t
        );
      }
    },
    1501: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => c });
      var s = n(34629),
        o = n(14947),
        a = n(56055),
        r = n(62490),
        i = n(78327);
      class c {
        m_rgAnswerToCategoryID = Array();
        m_rgAnswerChosen = Array();
        SetAnswerCategory(e, t) {
          const n = Math.min(e, 64);
          (this.m_rgAnswerToCategoryID = (0, r.$Y)(
            this.m_rgAnswerToCategoryID,
            n + 1,
            null,
          )),
            (this.m_rgAnswerToCategoryID[n] = t?.length > 0 ? t : null);
        }
        GetAnswerCategoryForQuestion(e) {
          return this.BHasAnsweredQuestion(e)
            ? this.m_rgAnswerToCategoryID[e]
            : null;
        }
        SetAnswer(e, t) {
          const n = Math.min(e, 64);
          (this.m_rgAnswerChosen = (0, r.$Y)(
            this.m_rgAnswerChosen,
            n + 1,
            null,
          )),
            (this.m_rgAnswerChosen[n] = t);
        }
        GetAnswer(e) {
          return this.BHasAnsweredQuestion(e) ? this.m_rgAnswerChosen[e] : null;
        }
        BHasAnsweredQuestion(e) {
          return (
            e < this.m_rgAnswerChosen?.length &&
            Boolean(this.m_rgAnswerChosen[e])
          );
        }
        GetAnswerCategories() {
          const e = new Array();
          return (
            this.m_rgAnswerToCategoryID.forEach((t) => {
              t?.length > 0 && t.filter(Boolean).forEach((t) => e.push(t));
            }),
            e
          );
        }
        GetAnswers() {
          return this.m_rgAnswerChosen;
        }
        GetLargestAnswerQuestion() {
          return this?.m_rgAnswerChosen.length || 0;
        }
        ClearAnswersAndCategories() {
          (this.m_rgAnswerToCategoryID = Array()),
            (this.m_rgAnswerChosen = Array());
        }
        BHasTerminalAnswerChosen() {
          return this.m_rgAnswerChosen.some(
            (e) => e?.reveal_question_id == a.b2,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            c.s_Singleton ||
              ((c.s_Singleton = new c()),
              "dev" == i.TS.WEB_UNIVERSE &&
                (window.g_SaleQuizAnswerStore = c.s_Singleton)),
            c.s_Singleton
          );
        }
        constructor() {
          (0, o.Gn)(this);
        }
      }
      (0, s.Cg)([o.sH], c.prototype, "m_rgAnswerToCategoryID", void 0),
        (0, s.Cg)([o.sH], c.prototype, "m_rgAnswerChosen", void 0);
    },
    35400: (e, t, n) => {
      "use strict";
      n.d(t, {
        DV: () => D,
        OC: () => S,
        OM: () => v,
        Sp: () => I,
        Tn: () => f,
        W3: () => C,
        hH: () => _,
        my: () => y,
      });
      var s = n(34629),
        o = n(41735),
        a = n.n(o),
        r = n(14947),
        i = n(90626),
        c = n(37085),
        d = n(68797),
        l = n(6144),
        u = n(84933),
        m = n(78327),
        g = n(44165);
      const h = -1;
      function p() {
        return "dev" == m.TS.WEB_UNIVERSE || "beta" == m.TS.WEB_UNIVERSE;
      }
      class _ {
        m_userData;
        m_bLoadedDuringInit = !1;
        m_strLastDoorOpenKey = "video_noneset";
        m_bIsAnyDoorOpened = !1;
        m_nHighestDoorOpened = h;
        m_initialLoadPromise;
        m_mapDoorOpenPromise = new Map();
        m_mapChangeCallback = new Map();
        m_doorInitializedChangedCallback = new l.lu();
        m_largestDoorChangeCallback = new l.lu();
        m_bIsAnyDoorOpenChangeCallback = new l.lu();
        m_doorOpenedCallback = new l.lu();
        GetLastDoorOpen() {
          return this.m_strLastDoorOpenKey;
        }
        GetRawDoorData() {
          return this.m_userData;
        }
        BIsDoorOpened(e) {
          return (
            null != e &&
            null != e &&
            !!this.m_userData &&
            Boolean(e < this.m_userData.length && this.m_userData[e].opened)
          );
        }
        BCanUserOpenDoor(e) {
          let t = g.HD.GetTimeNowWithOverride();
          return (
            m.iA.logged_in &&
            this.m_userData &&
            e < this.m_userData.length &&
            t >= this.m_userData[e].rtime_start &&
            t <= this.m_userData[e].rtime_end
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
        GetDoorStateChangeCallback(e) {
          return (
            this.m_mapChangeCallback.has(e) ||
              this.m_mapChangeCallback.set(e, new l.lu()),
            this.m_mapChangeCallback.get(e)
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
          return 7;
        }
        SetInMemoryUpdateDoorOpenUpto(e) {
          for (let t = 0; t < 7; ++t) {
            const n = t <= e;
            this.m_userData[t].opened != n &&
              ((this.m_userData[t].opened = n),
              this.GetDoorStateChangeCallback(t).Dispatch(n));
          }
          this.RecomputeState();
        }
        SetInMemorySpecificDoorState(e, t) {
          e < 7
            ? this.m_userData[e].opened != t &&
              ((this.m_userData[e].opened = t),
              this.GetDoorStateChangeCallback(e).Dispatch(t),
              this.RecomputeState())
            : console.error("CDoorStore: Wrong door being set " + e);
        }
        RecomputeState() {
          let e = h;
          this.m_userData?.forEach((t) => {
            t.opened && t.day > e && (e = t.day);
          });
          const t = e != h;
          t != this.m_bIsAnyDoorOpened &&
            ((this.m_bIsAnyDoorOpened = t),
            this.GetIsAnyDoorOpenChange().Dispatch(t)),
            e != this.m_nHighestDoorOpened &&
              ((this.m_nHighestDoorOpened = e),
              this.GetLargestDoorIndexChange().Dispatch(e));
        }
        async OpenDoor(e, t = !0, n = "", s = !1) {
          return (
            p() &&
              console.log(
                "CDoorStore.OpenDoor: attempting door " + e,
                "open:",
                t,
                "preview:",
                s,
              ),
            !m.iA.logged_in ||
            !this.m_userData ||
            e > this.m_userData.length ||
            e < 0
              ? (p() &&
                  console.log(
                    "CDoorStore.OpenDoor Early fail settings:",
                    m.iA.logged_in,
                    this.m_userData,
                    e,
                    this.m_userData?.length,
                  ),
                null)
              : this.m_mapDoorOpenPromise.has(e)
                ? (p() &&
                    console.log(
                      "CDoorStore.OpenDoor: door " +
                        e +
                        " was already requested this session; reusing that result",
                    ),
                  this.m_mapDoorOpenPromise.get(e))
                : this.m_userData[e].opened == t
                  ? (p() &&
                      console.log(
                        "CDoorStore.OpenDoor: door " +
                          e +
                          " is already " +
                          (t ? "open" : "closed") +
                          "; nothing sent to the server",
                      ),
                    {})
                  : (this.m_mapDoorOpenPromise.has(e) ||
                      this.m_mapDoorOpenPromise.set(
                        e,
                        this.InternalOpenDoor(e, t, n, s),
                      ),
                    this.m_mapDoorOpenPromise.get(e))
          );
        }
        async InternalOpenDoor(e, t = !0, n, s = !1) {
          let o = m.TS.STORE_BASE_URL + "saleaction/ajaxopendoor";
          const r = new FormData();
          r.append("sessionid", (0, m.KC)()),
            n && r.append("datarecord", n),
            s && r.append("fake_open", "" + s),
            r.append("door_index", "" + e),
            r.append("clan_accountid", "" + m.UF.CLANACCOUNTID),
            t || r.append("open_door", "0");
          let i = null;
          try {
            let n = await a().post(o, r, { withCredentials: !0 });
            if (200 == n?.status && n?.data?.success == c.R)
              return (
                (this.m_userData[e].opened = t),
                p() &&
                  console.log(
                    "CDoorStore.OpenDoor: door " +
                      e +
                      (t ? " opened" : " closed"),
                    "rewards returned:",
                    n.data?.rewards?.length || 0,
                  ),
                (this.m_strLastDoorOpenKey = "door_" + (t ? e : e - 1)),
                this.GetDoorStateChangeCallback(e).Dispatch(t),
                this.RecomputeState(),
                t && !s && this.GetDoorOpenedCallback().Dispatch(e),
                n.data
              );
            i = (0, d.H)(n);
          } catch (e) {
            i = (0, d.H)(e);
          }
          return (
            this.m_mapDoorOpenPromise.delete(e),
            console.error("OpenDoor hit error: " + i.strErrorMsg, i),
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
          const e = m.TS.STORE_BASE_URL + "saleaction/ajaxgetopendoor";
          let t = null;
          try {
            const n = await a().get(e, { withCredentials: !0 });
            if (200 == n.status && n.data?.doordata) {
              (this.m_userData = n.data.doordata),
                (this.m_bLoadedDuringInit = !0);
              for (let e = 0; e < 7; ++e)
                this.GetDoorStateChangeCallback(e).Dispatch(
                  this.m_userData[e].opened,
                );
              return (
                this.GetDoorStateInitializedChangeCallback().Dispatch(
                  this.m_bLoadedDuringInit,
                ),
                this.RecomputeState(),
                this.m_userData
              );
            }
            t = (0, d.H)(n);
          } catch (e) {
            t = (0, d.H)(e);
          }
          return (
            console.error(
              "CDoorStore.LoadDoorData failed: " + t?.strErrorMsg,
              t,
            ),
            null
          );
        }
        async CloseAllDoors(e) {
          let t = m.TS.STORE_BASE_URL + "saleaction/ajaxclosealldoor";
          const n = new FormData();
          n.append("sessionid", (0, m.KC)()),
            n.append("clan_accountid", "" + e);
          let s = null;
          try {
            let e = await a().post(t, n, { withCredentials: !0 });
            if (200 == e.status && e?.data?.success == c.R) {
              console.log("CDoorStore - closed " + e.data.count);
              for (let e = 0; e < 7; ++e)
                (this.m_userData[e].opened = !1),
                  this.GetDoorStateChangeCallback(e).Dispatch(
                    this.m_userData[e].opened,
                  );
              return this.RecomputeState(), !0;
            }
            s = (0, d.H)(e);
          } catch (e) {
            s = (0, d.H)(e);
          }
          return (
            console.error(
              "CDoorStore.CloseAllDoors failed: " + s?.strErrorMsg,
              s,
            ),
            null
          );
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_EventDoorStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {
          (0, r.Gn)(this);
        }
        Init() {
          (this.m_userData = (0, m.Tc)("doorinfo", "application_config")),
            this.m_userData &&
              ((this.m_bLoadedDuringInit = !0),
              this.RecomputeState(),
              "dev" == m.TS.WEB_UNIVERSE &&
                console.log("CDoorStore Loading - ", this.m_userData));
        }
      }
      function S() {
        return { fnOpenDoor: _.Get().OpenDoor };
      }
      function D() {
        const [e, t] = (0, i.useState)(_.Get().BIsInitialized());
        return (
          (0, i.useEffect)(() => {
            e || _.Get().LoadDoorData();
          }, [e]),
          (0, u.hL)(_.Get().GetDoorStateInitializedChangeCallback(), t),
          e
        );
      }
      function v(e) {
        const t = D(),
          [n, s] = (0, i.useState)(t ? _.Get().BIsDoorOpened(e) : void 0);
        return (0, u.hL)(_.Get().GetDoorStateChangeCallback(e), s), n;
      }
      function f() {
        const e = D(),
          [t, n] = (0, i.useState)(e ? _.Get().GetLargestDoorOpenIndex() : h);
        return (0, u.hL)(_.Get().GetLargestDoorIndexChange(), n), t;
      }
      function C() {
        const e = D(),
          [t, n] = (0, i.useState)(!!e && _.Get().BIsAnyDoorOpened());
        return (0, u.hL)(_.Get().GetIsAnyDoorOpenChange(), n), t;
      }
      function I(e) {
        _.Get().SetInMemoryUpdateDoorOpenUpto(e);
      }
      function y(e, t) {
        _.Get().SetInMemorySpecificDoorState(e, t);
      }
      (0, s.Cg)([r.sH], _.prototype, "m_bIsAnyDoorOpened", void 0),
        (0, s.Cg)([r.sH], _.prototype, "m_nHighestDoorOpened", void 0),
        (0, s.Cg)([u.oI], _.prototype, "BIsDoorOpened", null),
        (0, s.Cg)([u.oI], _.prototype, "OpenDoor", null);
    },
    27144: (e, t, n) => {
      "use strict";
      n.d(t, { B3: () => I, KM: () => D, KT: () => C });
      var s = n(41735),
        o = n.n(s),
        a = n(58632),
        r = n.n(a),
        i = n(90626),
        c = n(80902),
        d = n(75233),
        l = n(37085),
        u = n(17720),
        m = n(68797),
        g = n(78327),
        h = n(56545),
        p = n(42457),
        _ = n(23809);
      const S = "nicknames";
      function D(e) {
        const t = (0, _.KV)(),
          { data: n, isLoading: s } = (0, c.I)({
            queryKey: [S],
            queryFn: async () => {
              const e = new Map();
              if (g.iA.logged_in) {
                const n = h.w.Init(p.w_T),
                  s = (await p.xtC.GetNicknameList(t, n)).Body().toObject();
                s?.nicknames &&
                  s.nicknames.length > 0 &&
                  s.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return n ? n.get(e) : null;
      }
      const v = new (r())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, g.yK)()
                  ? g.TS.COMMUNITY_BASE_URL
                  : g.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const n = { accountid: e[0], origin: self.origin },
                  s = await o().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !s ||
                  200 != s.status ||
                  s.data?.success != l.R ||
                  !s.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(s).strErrorMsg}`;
                return [s.data.userinfo];
              }
              {
                const n = { accountids: e.join(","), origin: self.origin },
                  s = await o().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: n,
                  });
                if (
                  !s ||
                  200 != s.status ||
                  s.data?.success != l.R ||
                  !s.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(s).strErrorMsg}`;
                const a = new Map();
                return (
                  s.data.userinfos.forEach((e) =>
                    a.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => a.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        f = "avatarandpersonas";
      function C(e) {
        const { data: t, isLoading: n } = (0, c.I)({
          queryKey: [f, e],
          queryFn: () => v.load(e),
        });
        return [t, n];
      }
      function I(e) {
        const t = (0, d.jE)(),
          { data: n, isLoading: s } = (0, c.I)({
            queryKey: [f, e],
            queryFn: async () => {
              const n = await v.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [f, new u.b(e.steamid).GetAccountID()];
                  t.setQueryData(n, e);
                }),
                n
              );
            },
            enabled: e?.length > 0,
          }),
          o = (0, i.useMemo)(() => {
            const e = new Array();
            return (
              n?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [n]);
        return s ? null : o;
      }
    },
    77021: (e, t, n) => {
      "use strict";
      n.d(t, { PM: () => g, TU: () => l, lM: () => m, ty: () => u });
      var s = n(34629),
        o = n(90626),
        a = n(78327),
        r = n(84933),
        i = n(14947),
        c = n(95034),
        d = n(65946);
      class l {
        m_sParentOrigin;
        m_eventModelJson = void 0;
        m_setMouseOverSectionID = i.sH.set();
        m_setMouseOverSubsectionID = i.sH.set();
        m_jumpToSection = void 0;
        m_jumpToSubsection = void 0;
        static s_Singleton;
        static Get() {
          return (
            l.s_Singleton ||
              ((l.s_Singleton = new l()),
              "dev" == a.TS.WEB_UNIVERSE &&
                (window.g_PartnerSaleLivePreviewClient = l.s_Singleton)),
            l.s_Singleton
          );
        }
        constructor() {
          (0, i.Gn)(this),
            window.opener &&
              ((this.m_sParentOrigin = (0, c.f3)(
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
          return !(!window.opener || !this.m_eventModelJson);
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
          (0, i.h5)(() => (this.m_jumpToSection = void 0));
        }
        ClearJumpToSubectionID() {
          (0, i.h5)(() => (this.m_jumpToSubsection = void 0));
        }
        PostMessage(e) {
          window.opener &&
            this.m_sParentOrigin &&
            window.opener.postMessage(e, this.m_sParentOrigin);
        }
        SetMouseOverSection(e, t) {
          if (!this.BIsConnected()) return;
          const n = {
            message: "PartnerEventEditor_MouseOverViewSection",
            nSectionID: e,
            bMouseOver: t,
          };
          this.PostMessage(n);
        }
        SetMouseOverSubsection(e, t) {
          if (!this.BIsConnected()) return;
          const n = {
            message: "PartnerEventEditor_MouseOverViewSubsection",
            strSubsectionID: e,
            bMouseOver: t,
          };
          this.PostMessage(n);
        }
        JumpToSection(e) {
          if (!this.BIsConnected()) return;
          const t = {
            message: "PartnerEventEditor_JumpToViewSection",
            nSectionID: e,
          };
          this.PostMessage(t);
        }
        HandleMessage(e) {
          if (e.origin != this.m_sParentOrigin) return;
          const t =
            e.data && "object" == typeof e.data && "message" in e.data
              ? e.data
              : null;
          if (t)
            switch (t.message) {
              case "PartnerEventEditor_Update":
                if ("eventModelJson" in t && t.eventModelJson) {
                  const e = t;
                  (0, i.h5)(() => (this.m_eventModelJson = e.eventModelJson));
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSection":
                if ("nSectionID" in t) {
                  const e = t;
                  (0, i.h5)(() => {
                    e.bMouseOver
                      ? this.m_setMouseOverSectionID.add(e.nSectionID)
                      : this.m_setMouseOverSectionID.delete(e.nSectionID);
                  });
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSubsection":
                if ("strSubsectionID" in t) {
                  const e = t;
                  (0, i.h5)(() => {
                    e.bMouseOver
                      ? this.m_setMouseOverSubsectionID.add(e.strSubsectionID)
                      : this.m_setMouseOverSubsectionID.delete(
                          e.strSubsectionID,
                        );
                  });
                }
                break;
              case "PartnerEventEditor_JumpToEditorSection":
                if ("nSectionID" in t) {
                  const e = t;
                  (0, i.h5)(() => (this.m_jumpToSection = e.nSectionID));
                }
                break;
              case "PartnerEventEditor_JumpToEditorSubection":
                if ("strSubsectionID" in t) {
                  const e = t;
                  (0, i.h5)(() => {
                    (this.m_jumpToSection = e.nSectionID),
                      (this.m_jumpToSubsection = {
                        nSectionID: e.nSectionID,
                        strSubsectionID: e.strSubsectionID,
                      });
                  });
                }
            }
        }
      }
      function u() {
        return (0, d.q3)(() => l.Get().BIsConnected());
      }
      function m(e) {
        const t = (0, d.q3)(() => l.Get().GetJumpToSectionID());
        o.useEffect(() => {
          if (!l.Get().BIsConnected() || !t) return;
          e(t) && l.Get().ClearJumpToSectionID();
        }, [e, t]);
      }
      function g(e) {
        const t = (0, d.q3)(() => l.Get().GetJumpToSubsectionIDs());
        o.useEffect(() => {
          if (!l.Get().BIsConnected() || !t) return;
          e(t.nSectionID, t.strSubsectionID) &&
            l.Get().ClearJumpToSubectionID();
        }, [e, t]);
      }
      (0, s.Cg)([i.sH], l.prototype, "m_eventModelJson", void 0),
        (0, s.Cg)([i.sH], l.prototype, "m_setMouseOverSectionID", void 0),
        (0, s.Cg)([i.sH], l.prototype, "m_setMouseOverSubsectionID", void 0),
        (0, s.Cg)([i.sH], l.prototype, "m_jumpToSection", void 0),
        (0, s.Cg)([i.sH], l.prototype, "m_jumpToSubsection", void 0),
        (0, s.Cg)([r.oI], l.prototype, "HandleMessage", null);
    },
    8905: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => d });
      var s = n(7850),
        o = n(90626),
        a = n(17720),
        r = n(27144),
        i = n(15736),
        c = n(78327);
      function d(e) {
        const {
            accountID: t,
            bHideWhenNotAvailable: n,
            bHideName: d,
            bLink: l = !0,
          } = e,
          [u] = (0, r.KT)(t),
          m = (0, r.KM)(t),
          g = o.useMemo(() => a.b.InitFromAccountID(t), [t]),
          h = `${c.TS.COMMUNITY_BASE_URL}profiles/${g.ConvertTo64BitString()}`,
          p = l ? "a" : "span";
        return (0, s.jsx)(s.Fragment, {
          children: Boolean(!u)
            ? (0, s.jsx)(s.Fragment, {
                children: Boolean(!n) && (0, s.jsx)("span", { children: t }),
              })
            : (0, s.jsxs)(p, {
                href: l ? h : void 0,
                children: [
                  (0, s.jsx)("img", {
                    className: i.SmallAvatar,
                    src: u.avatar_url,
                    "data-miniprofile": "s" + g.ConvertTo64BitString(),
                  }),
                  Boolean(!d) &&
                    (0, s.jsx)("span", {
                      children: m ? `${m} (${u.persona_name})` : u.persona_name,
                    }),
                ],
              }),
        });
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { qx: () => p });
      var s = n(7850),
        o = n(56283),
        a = n(61859),
        r = n(12155),
        i = n(90626),
        c = n(52038),
        d = n(95695),
        l = n(84811),
        u = n(64734),
        m = n(65946),
        g = n(26408);
      function h(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: o,
            toggleMinimized: a,
            className: r,
            children: i,
            elAdditionalButtons: h,
          } = e,
          p = (0, m.q3)(() => o());
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: (0, c.A)(
                r,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, s.jsxs)("div", {
                  className: (0, c.A)(
                    d.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [t, Boolean(n) && (0, s.jsx)(g.o, { tooltip: n })],
                }),
                (0, s.jsxs)("div", {
                  className: u.SectionTitleButtons,
                  children: [
                    h,
                    (0, s.jsx)(_, { bIsMinimized: p, fnToggleMinimize: a }),
                  ],
                }),
              ],
            }),
            !p && (0, s.jsx)(l.tH, { children: i }),
          ],
        });
      }
      function p(e) {
        const [t, n] = i.useState(Boolean(e.bStartMinimized));
        return (0, s.jsx)(h, {
          ...e,
          getMinimized: () => t,
          toggleMinimized: () => n(!t),
          children: e.children,
        });
      }
      function _(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          i = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, s.jsx)(o.$n, {
          "data-tooltip-text": (0, a.we)(i),
          onClick: n,
          children: e.bIsMinimized
            ? (0, s.jsx)(r.hz4, {})
            : (0, s.jsx)(r.Xjb, {}),
        });
      }
    },
    57912: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => ge, default: () => he });
      var s = n(7850),
        o = n(43527),
        a = n(92757),
        r = n(22837),
        i = n(2160),
        c = n(66418),
        d = n(90626),
        l = n(82429),
        u = n(6379),
        m = n(60092),
        g = n(57089),
        h = n(22797),
        p = n(61859),
        _ = n(43068),
        S = n(84811);
      function D(e) {
        const { gid: t } = (0, a.g)(),
          [n, o] = (0, d.useState)(!0);
        if (
          (d.useEffect(() => {
            n &&
              (u.O3.Init(), Promise.all([l.KN.InitGlobal()]).then(() => o(!1)));
          }, [n]),
          n)
        )
          return (0, s.jsx)(h.t, {
            string: (0, p.we)("#Loading"),
            position: "center",
          });
        const D = u.O3.GetClanEventModel(t);
        return D
          ? (0, s.jsxs)(S.tH, {
              children: [
                !D.BIsUnlistedEvent() &&
                  (0, s.jsx)("div", {
                    children:
                      "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
                  }),
                (0, s.jsx)(g.jA, {
                  lang: (0, r.sfN)(c.TS.LANGUAGE),
                  event: D,
                  adminPanel:
                    c.TS.EREALM === i.TU.k_ESteamRealmChina
                      ? (0, s.jsx)(_.P, { eventModel: D })
                      : (0, s.jsx)(m.g, { eventModel: D, bSupportsSticky: !0 }),
                }),
              ],
            })
          : null;
      }
      var v = n(37085),
        f = n(51614),
        C = n(41735),
        I = n.n(C),
        y = n(62216),
        w = n(44165),
        x = n(30470),
        j = n(24484);
      function b(e, t, n) {
        for (const s of e)
          if (s.group_id === t) {
            const e = s.sessions.find((e) => e.id === n);
            if (e) return { group: s, session: e };
          }
        return { group: null, session: null };
      }
      function M(e, t) {
        const n = (0, w.f1)(),
          [s] = (0, d.useState)(() =>
            (0, j.Tc)("registrations", "application_config")
              .map((e) => ((e.userReg = JSON.parse(e.jsondata)), e))
              .sort((t, n) => {
                const s = b(
                    e.jsondata.meet_steam_groups,
                    t.group_id,
                    t.session_id,
                  ),
                  o = b(e.jsondata.meet_steam_groups, n.group_id, n.session_id);
                return (
                  (o?.session?.rtime_start || 0) -
                  (s?.session?.rtime_start || 0)
                );
              })
              .map((t) => {
                const s = b(
                  e.jsondata.meet_steam_groups,
                  t.group_id,
                  t.session_id,
                );
                return (
                  (t.relativeToToday = (function (e, t) {
                    if (!e) return "past";
                    const n = (0, y.Sk)(e),
                      s = (0, y.Ue)(e.rtime_start, n),
                      o = void 0 !== t ? new Date(1e3 * t) : new Date(),
                      a = new Date(o.getFullYear(), o.getMonth(), o.getDate()),
                      r = new Date(
                        o.getFullYear(),
                        o.getMonth(),
                        o.getDate() + 1,
                      );
                    return s >= a && s < r
                      ? "today"
                      : s < a
                        ? "past"
                        : "future";
                  })(s?.session, n)),
                  (t.rtSesssionTime = s?.session?.rtime_start ?? 0),
                  t
                );
              }),
          ),
          o = t?.trim().toLowerCase() || "";
        return (0, d.useMemo)(
          () =>
            s.filter(
              (e) =>
                !o.length ||
                e.userReg.name?.toLowerCase().includes(o) ||
                e.userReg.company?.toLowerCase().includes(o) ||
                e.userReg.guest_names?.find((e) =>
                  e.toLowerCase().includes(o),
                ) ||
                e.userReg.email_override?.toLowerCase().includes(o),
            ),
          [s, t],
        );
      }
      function E(e, t) {
        return (0, d.useMemo)(
          () =>
            e.reduce(
              (e, t) => (
                e[t.relativeToToday] || (e[t.relativeToToday] = []),
                e[t.relativeToToday].push(t),
                e
              ),
              { today: [], past: [], future: [] },
            ),
          [e, t],
        );
      }
      var T = n(38390),
        A = n(27144),
        B = n(56283),
        G = n(71298),
        O = n(95034),
        L = n(8905),
        k = n(78395),
        N = n(21869),
        R = n(48479),
        U = n(52038),
        H = n(91675),
        P = n(84933),
        F = n(15588),
        z = n.n(F),
        $ = n(29233);
      function K(e) {
        const [t] = (0, O.QD)("gid"),
          n = (0, T.RR)(t),
          o = (0, r.sfN)(x.TS.LANGUAGE);
        return n
          ? (0, s.jsxs)("div", {
              className: z().Ctn,
              children: [
                (0, s.jsxs)("div", {
                  className: z().EventName,
                  children: [
                    (0, s.jsx)("h2", { children: n.GetNameWithFallback(o) }),
                    (0, s.jsx)("a", {
                      href: `${x.TS.STORE_BASE_URL}meetsteam/${t}`,
                      target: "_blank",
                      children: "See Event Details",
                    }),
                  ],
                }),
                (0, s.jsx)(J, { eventModel: n }),
              ],
            })
          : (0, s.jsx)(h.t, { string: (0, p.we)("#Loading") });
      }
      function J(e) {
        const { eventModel: t } = e,
          n = E(M(t)),
          [o] = (0, O.QD)("accountid"),
          a = (0, w.f1)();
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", {
              className: z().User,
              children: (0, s.jsx)(L.p, { accountID: o }),
            }),
            (0, s.jsx)(q, {
              eventModel: t,
              rgUserRegs: n.today,
              strTitle: "Today " + (0, H.$z)(a),
            }),
            (0, s.jsx)(q, {
              eventModel: t,
              rgUserRegs: n.future,
              bHideIfEmpty: !0,
              strTitle: "Future",
            }),
            (0, s.jsx)(q, {
              eventModel: t,
              rgUserRegs: n.past,
              bHideIfEmpty: !0,
              strTitle: "Past",
            }),
          ],
        });
      }
      function q(e) {
        const {
          eventModel: t,
          rgUserRegs: n,
          bHideIfEmpty: o,
          strTitle: a,
        } = e;
        return 0 == n.length && o
          ? null
          : (0, s.jsx)(R.qx, {
              title: `${a} (${n.length})`,
              bStartMinimized: o,
              children: Boolean(!n || 0 == n.length)
                ? (0, s.jsx)("div", { children: o ? "" : "No registrations" })
                : (0, s.jsx)("div", {
                    children: n
                      .sort((e, t) => e.rtSesssionTime - t.rtSesssionTime)
                      .map((e) =>
                        (0, s.jsx)(
                          Q,
                          { eventModel: t, reg: e },
                          `${e.group_id}_${e.session_id}`,
                        ),
                      ),
                  }),
            });
      }
      function V(e) {
        const { desc: t } = e,
          [n, o] = (0, d.useState)(!1),
          a = (0, d.useCallback)(() => o((e) => !e), []);
        return (0, s.jsx)("div", {
          className: (0, U.A)({
            [z().DescriptionWrapper]: !0,
            [z().Expanded]: n,
          }),
          onClick: a,
          onMouseEnter: () => o(!0),
          onMouseLeave: () => o(!1),
          children: t,
        });
      }
      function Q(e) {
        const { reg: t, eventModel: n } = e,
          o = new $.b2(t.steamid).GetAccountID(),
          [a] = (0, A.KT)(t.userReg.accountid),
          [r, i] = (0, d.useState)(!0),
          [c, l] = (0, d.useState)([]),
          [u, m] = (0, d.useState)(!1),
          g = t.userReg,
          { group: h, session: p } = b(
            n.jsondata.meet_steam_groups,
            t.group_id,
            t.session_id,
          ),
          [_, D, C] = (0, P.uD)(),
          y =
            ((w = n.GID),
            (M = o),
            (E = t.group_id),
            (T = t.session_id),
            (0, f.n)({
              mutationFn: async ({ bIncludeSelf: e, rgGuests: t }) => {
                const n = new FormData();
                n.append("sessionid", (0, j.KC)()),
                  n.append("gid", w),
                  n.append("accountid", "" + M),
                  n.append("meetsteam_group_id", "" + E),
                  n.append("meetsteam_session_id", "" + T),
                  n.append("include_self", "" + (e ? 1 : 0)),
                  t?.length && n.append("guests", t.join("|"));
                const s = `${x.TS.STORE_BASE_URL}meetsteam/ajaxupdateattendance`,
                  o = await I().post(s, n, { withCredentials: !0 });
                return o?.data?.success == v.R;
              },
            }));
        var w, M, E, T;
        const G = new Set(
            t.guests_attendance?.length > 0
              ? t.guests_attendance.split("|")
              : [],
          ),
          O = t.attendance_count > G.size,
          L = (e, t, n, o) =>
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("span", {
                  className: z().GuestTitle,
                  children: [e, ":", " "],
                }),
                t,
                n &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      " ",
                      (0, s.jsxs)("span", {
                        className: z().GuestEmail,
                        children: ["(", n, ")"],
                      }),
                    ],
                  }),
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    " ",
                    "-",
                    (0, s.jsx)("span", {
                      children: o ? "✅ checked in" : "☐ not checked in",
                    }),
                  ],
                }),
              ],
            });
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)(Y, { group: h, session: p }),
            Boolean(u)
              ? (0, s.jsx)("div", {
                  className: z().CheckedIn,
                  children: "Attendee has been checked in",
                })
              : (0, s.jsxs)("div", {
                  className: z().RegisteredUsers,
                  children: [
                    (0, s.jsx)(B.Yh, {
                      label: (0, s.jsx)(s.Fragment, {
                        children: L(
                          "Attendee",
                          g.name || a.persona_name,
                          g.email_override,
                          O,
                        ),
                      }),
                      checked: r,
                      onChange: i,
                    }),
                    Boolean(g.guest_names?.length > 0) &&
                      (0, s.jsx)(s.Fragment, {
                        children: g.guest_names.map((e) =>
                          (0, s.jsx)(
                            B.Yh,
                            {
                              label: (0, s.jsx)(s.Fragment, {
                                children: L("Guest", e, void 0, G.has(e)),
                              }),
                              checked: c.includes(e),
                              onChange: (t) => {
                                l((n) =>
                                  t
                                    ? n.includes(e)
                                      ? n
                                      : [...n, e]
                                    : n.filter((t) => t !== e),
                                );
                              },
                            },
                            t.group_id + "_" + t.session_id + "_" + e,
                          ),
                        ),
                      }),
                    (0, s.jsx)(B.jn, {
                      onClick: D,
                      children: "Check in selected people",
                    }),
                  ],
                }),
            (0, s.jsx)(N.E, {
              active: _,
              children: (0, s.jsx)(S.tH, {
                children: (0, s.jsx)(W, {
                  closeModal: C,
                  bIncludeSelf: r,
                  rgGuestsAttending: c,
                  fnMarkAttendance: y,
                  fnOnSuccess: () => m(!0),
                }),
              }),
            }),
          ],
        });
      }
      function W(e) {
        const {
            closeModal: t,
            bIncludeSelf: n,
            rgGuestsAttending: o,
            fnMarkAttendance: a,
            fnOnSuccess: r,
          } = e,
          i = (0, G.vs)();
        return i.bLoading
          ? (0, s.jsx)(G.Hh, {
              state: i,
              strDialogTitle: (0, p.we)("#Saving"),
              closeModal: t,
            })
          : (0, s.jsx)(k.o0, {
              onCancel: t,
              strTitle: (0, p.we)("#Button_Submit"),
              bAllowFullSize: !0,
              onOK: async () => {
                i.fnSetLoading(!0),
                  a
                    .mutateAsync({ bIncludeSelf: n, rgGuests: o })
                    .then((e) => {
                      e
                        ? (r(),
                          i.fnSetStrSuccess(
                            "Success! This person has been checked in.",
                          ))
                        : i.fnSetStrError(
                            (0, p.we)("#Login_Error_Network_Description"),
                          );
                    })
                    .catch(() =>
                      i.fnSetStrError(
                        (0, p.we)("#Login_Error_Network_Description"),
                      ),
                    );
              },
              children: "Mark as checked in?",
            });
      }
      function Y(e) {
        const { session: t, group: n } = e,
          {
            sDisplayTimeZone: o,
            rtime_start: a,
            rtime_end: i,
          } = (0, y._t)(e.session),
          c = (0, y.rF)(a, o),
          d = (0, y.Mr)(a, i, o);
        return t && n
          ? (0, s.jsxs)("div", {
              className: z().SessionInfo,
              children: [
                (0, s.jsx)("div", {
                  className: z().SessionName,
                  children: n.localized_session_title[r.Bhc],
                }),
                (0, s.jsxs)("div", {
                  className: z().SessionTime,
                  children: [c, " @ ", (0, s.jsx)("b", { children: d })],
                }),
                (0, s.jsx)("div", {
                  children: (0, s.jsx)(V, {
                    desc: `Description: ${n.localized_session_description[r.Bhc] || ""}`,
                  }),
                }),
                "dev" == x.TS.WEB_UNIVERSE &&
                  (0, s.jsxs)("div", {
                    children: ["Rtime Start (Dev only): ", t.rtime_start],
                  }),
              ],
            })
          : (0, s.jsx)("div", { children: "Session Infomrmation Missing" });
      }
      var Z = n(97058),
        X = n(29645),
        ee = n.n(X),
        te = n(12155),
        ne = n(14771),
        se = n(78327);
      function oe(e) {
        const t = new Date(e.getTime());
        return t.setHours(0, 0, 0, 0), t;
      }
      function ae(e) {
        const [t] = (0, O.QD)("gid"),
          n = (0, T.RR)(t),
          o = (0, r.sfN)(x.TS.LANGUAGE),
          [a, i] = (0, d.useState)("");
        return n
          ? (0, s.jsxs)("div", {
              className: ee().Ctn,
              children: [
                (0, s.jsxs)("div", {
                  className: ee().EventName,
                  children: [
                    (0, s.jsx)("h1", { children: n.GetNameWithFallback(o) }),
                    (0, s.jsx)("a", {
                      href: `${x.TS.STORE_BASE_URL}meetsteam/${t}`,
                      target: "_blank",
                      children: "See Event Details",
                    }),
                  ],
                }),
                (0, s.jsx)(ce, { eventModel: n }),
                (0, s.jsx)("div", {
                  className: ee().AtendeeSearchRow,
                  children: (0, s.jsx)(B.pd, {
                    type: "text",
                    label: "Search for an attendee",
                    value: a,
                    bShowClearAction: !0,
                    onChange: (e) => i(e.currentTarget.value || ""),
                    placeholder: "Type name or partner or email address",
                  }),
                }),
                (0, s.jsx)(re, { eventModel: n, strSearch: a.toLowerCase() }),
              ],
            })
          : (0, s.jsx)(h.t, { string: (0, p.we)("#Loading") });
      }
      function re(e) {
        const { eventModel: t, strSearch: n } = e,
          o = M(t, n),
          [a, r] = (0, d.useState)(null),
          [i, c] = (0, d.useMemo)(() => {
            const e = new Map();
            return (
              o.forEach((t) => {
                [t.userReg.name, ...(t.userReg.guest_names || [])].forEach(
                  (n) => {
                    const s = n.toLowerCase();
                    e.has(s) ? e.get(s).push(t) : e.set(s, [t]);
                  },
                );
              }),
              [e, Array.from(e.keys()).sort()]
            );
          }, [o]);
        return (
          d.useEffect(() => {
            r(null);
          }, [n]),
          (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)("h3", { children: "Attendees" }),
              Boolean(a)
                ? (0, s.jsx)(ie, {
                    eventModel: t,
                    rgSelected: a,
                    strSearch: n,
                    onCleanSelection: () => r(null),
                  })
                : (0, s.jsx)(s.Fragment, {
                    children: c
                      .filter((e) => !n || e.includes(n))
                      .map((e) =>
                        (0, s.jsx)(
                          "div",
                          {
                            className: ee().AttendeeRow,
                            children: (0, s.jsx)(B.$n, {
                              onClick: () => r(i.get(e.toLowerCase())),
                              children: e,
                            }),
                          },
                          e,
                        ),
                      ),
                  }),
            ],
          })
        );
      }
      function ie(e) {
        const {
            eventModel: t,
            rgSelected: n,
            strSearch: o,
            onCleanSelection: a,
          } = e,
          r = (0, w.f1)(),
          i = E(n, o);
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", {
              className: ee().AtendeeListButtonRow,
              children: (0, s.jsxs)(B.$n, {
                onClick: a,
                children: [
                  (0, s.jsx)(te.uMb, { className: ee().BackToListIcon }),
                  "Back to full list",
                ],
              }),
            }),
            (0, s.jsx)(q, {
              eventModel: t,
              rgUserRegs: i.today,
              strTitle: "Today " + (0, p.$z)(r),
            }),
            (0, s.jsx)(q, {
              eventModel: t,
              rgUserRegs: i.future,
              bHideIfEmpty: !0,
              strTitle: "Future",
            }),
            (0, s.jsx)(q, {
              eventModel: t,
              rgUserRegs: i.past,
              bHideIfEmpty: !0,
              strTitle: "Past",
            }),
          ],
        });
      }
      function ce(e) {
        const { eventModel: t } = e,
          n = (0, w.s4)(),
          [o, a] = d.useState(!1),
          { rgGroupedSessions: r, bMoreSessions: i } = d.useMemo(() => {
            const e = t?.jsondata?.meet_steam_groups?.flatMap((e) =>
                e.sessions.map((t) => {
                  const n = (0, y.Sk)(t),
                    s = (0, y.Ue)(t.rtime_start, n);
                  return { group: e, session: t, displayDate: s };
                }),
              ),
              s = e?.filter((e) => o || oe(e.displayDate) >= oe(n)),
              a = o || (e && e.length > s.length);
            var r;
            return {
              rgGroupedSessions:
                ((r = (e) => oe(e.displayDate)),
                (s ?? []).reduce((e, t) => {
                  const n = r(t),
                    s = Math.floor(n.getTime() / 1e3),
                    o = e.get(s) || [];
                  return e.set(s, [...o, t]), e;
                }, new Map())),
              bMoreSessions: a,
            };
          }, [t?.jsondata?.meet_steam_groups, n, o]),
          c = d.useMemo(() => {
            const e = (0, se.Tc)("registrations", "application_config");
            if (e && "object" == typeof e)
              return e.reduce((e, t) => {
                const n = `${t.group_id}_${t.session_id}`,
                  s = e.get(n) ?? [];
                return s.push(t), e.set(n, s), e;
              }, new Map());
          }, []);
        if (!c || (0 == r.size && !i)) return;
        const l =
            Array.from(r.keys()).reduce(
              (e, t) => (null == e || (1e3 * t > n.getTime() && t < e) ? t : e),
              void 0,
            ) ?? 0,
          u = Array.from(r.keys()).some((e) =>
            (0, ne.JD)(n, new Date(1e3 * e)),
          );
        return (0, s.jsxs)("div", {
          className: ee().DisplayAllDaysCtn,
          children: [
            i &&
              (0, s.jsx)(B.Yh, {
                label: "Show past events",
                checked: o,
                onChange: a,
              }),
            (0, s.jsx)("div", {
              className: ee().DisplayDaysCtn,
              children: Array.from(r.keys()).map((e) =>
                (0, s.jsx)(
                  de,
                  {
                    eventModel: t,
                    date: new Date(1e3 * e),
                    sessionsAndGroups: r.get(e),
                    rgRegistrationInfo: c,
                    isToday: (0, ne.JD)(
                      u ? n : new Date(1e3 * l),
                      new Date(1e3 * e),
                    ),
                  },
                  e,
                ),
              ),
            }),
          ],
        });
      }
      function de(e) {
        const {
          eventModel: t,
          date: n,
          sessionsAndGroups: o,
          rgRegistrationInfo: a,
          isToday: r,
        } = e;
        return (0, s.jsxs)("div", {
          className: (0, U.A)(ee().DisplayDaySessions, !r && ee().NotToday),
          children: [
            (0, s.jsx)("div", {
              className: ee().DateName,
              children: (0, p.$w)(n),
            }),
            (0, s.jsx)("div", {
              className: ee().DisplayDaySessionsRow,
              children: o.map((e) =>
                (0, s.jsx)(
                  le,
                  {
                    eventModel: t,
                    date: n,
                    registrations:
                      a.get(`${e.group.group_id}_${e.session.id}`) ?? [],
                    group: e.group,
                    session: e.session,
                  },
                  `${e.group.group_id}_${e.session.id}`,
                ),
              ),
            }),
          ],
        });
      }
      function le(e) {
        const {
            eventModel: t,
            date: n,
            group: o,
            session: a,
            registrations: i,
          } = e,
          c = (0, r.sfN)(x.TS.LANGUAGE),
          d = (0, w.s4)(),
          { sDisplayTimeZone: l, rtime_start: u } = (0, y._t)(a),
          m = (0, y.us)(u, l),
          g = i.reduce((e, t) => e + (t.guests_registered ?? 0), 0),
          h = i.reduce(
            (e, t) =>
              e +
              (t.rt_attendance_marked > 0 && t.guests_registered
                ? t.guests_registered
                : 0),
            0,
          ),
          [p, _, D] = (0, P.uD)(),
          C =
            ((b = t.GID),
            (M = o.group_id),
            (E = a.id),
            (0, f.n)({
              mutationFn: async ({ nCapacity: e }) => {
                const t = new FormData();
                t.append("sessionid", (0, j.KC)()),
                  t.append("gid", b),
                  t.append("meetsteam_group_id", "" + M),
                  t.append("meetsteam_session_id", "" + E),
                  t.append("capacity", "" + e);
                const n = `${x.TS.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`,
                  s = await I().post(n, t, { withCredentials: !0 });
                return s?.data?.success == v.R;
              },
            }));
        var b, M, E;
        return (0, s.jsxs)("div", {
          className: ee().DisplaySession,
          children: [
            (0, s.jsxs)("div", {
              className: ee().Header,
              children: [
                (0, s.jsx)("div", {
                  className: ee().SessionName,
                  children:
                    o.localized_session_title[c] ??
                    o.localized_session_title[r.Bhc],
                }),
                (0, s.jsx)("div", { className: ee().SessionTime, children: m }),
              ],
            }),
            (0, s.jsx)(me, {
              title: "Registered:",
              nCount: g,
              nCapacity: a.max_capacity,
            }),
            (0, s.jsx)(me, {
              title: "Checked in:",
              nCount: h,
              nCapacity: a.max_capacity,
            }),
            oe(n) >= oe(d) &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(B.$n, {
                    className: (0, U.A)(ee().SetCapacityButton),
                    onClick: _,
                    children: "Update capacity...",
                  }),
                  (0, s.jsx)(N.E, {
                    active: p,
                    children: (0, s.jsx)(S.tH, {
                      children: (0, s.jsx)(ue, {
                        closeModal: D,
                        nCapacity: a.max_capacity ?? 0,
                        fnUpdateCapacity: C,
                        fnOnSuccess: () => window.location.reload(),
                      }),
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      function ue(e) {
        const {
            closeModal: t,
            nCapacity: n,
            fnUpdateCapacity: o,
            fnOnSuccess: a,
          } = e,
          [r, i] = d.useState(n.toString()),
          c = (0, G.vs)();
        return c.bLoading
          ? (0, s.jsx)(G.Hh, {
              state: c,
              strDialogTitle: (0, p.we)("#Saving"),
              closeModal: t,
            })
          : (0, s.jsx)(k.o0, {
              onCancel: t,
              strTitle: (0, p.we)("Update Capacity"),
              bAllowFullSize: !0,
              onOK: async () => {
                c.fnSetLoading(!0);
                const e = Number.isNaN(Number.parseInt(r))
                  ? void 0
                  : Number.parseInt(r);
                o.mutateAsync({ nCapacity: e })
                  .then((e) => {
                    e
                      ? (a(), c.fnSetStrSuccess("Max capacity updated."))
                      : c.fnSetStrError(
                          (0, p.we)("#Login_Error_Network_Description"),
                        );
                  })
                  .catch(() =>
                    c.fnSetStrError(
                      (0, p.we)("#Login_Error_Network_Description"),
                    ),
                  );
              },
              children: (0, s.jsx)(B.pd, {
                className: ee().SetCapacityInput,
                label: "New capacity",
                type: "text",
                autoComplete: "off",
                value: r,
                onChange: (e) => i(e.currentTarget.value),
              }),
            });
      }
      function me(e) {
        const { title: t, nCount: n, nCapacity: o } = e,
          a = n >= o,
          r = Math.min((n / o) * 100, 100),
          i = n > 0 ? `${r}%` : "0%";
        return (0, s.jsxs)("div", {
          className: ee().CapacityCtn,
          children: [
            (0, s.jsxs)("span", { children: [t, " ", n, " / ", o] }),
            (0, s.jsx)("div", {
              className: ee().CapacityBarMax,
              children: (0, s.jsx)("div", {
                className: (0, U.A)(
                  ee().CapacityBarCurrent,
                  a ? ee().Full : "",
                ),
                style: { width: i },
              }),
            }),
          ],
        });
      }
      const ge = {
        MeetSteamAttendance: () => `${o.B.MeetSteamRoute()}attendance`,
        MeetSteamEvent: () => `${o.B.MeetSteamRoute()}:gid(\\d+)`,
        MeetSteamAttendeeList: () => `${o.B.MeetSteamRoute()}attendeelist`,
      };
      function he(e) {
        return (0, s.jsxs)(a.dO, {
          children: [
            (0, s.jsx)(a.qh, {
              path: ge.MeetSteamAttendance(),
              render: (e) => (0, s.jsx)(K, { ...e }),
            }),
            (0, s.jsx)(a.qh, {
              path: ge.MeetSteamAttendeeList(),
              render: (e) => (0, s.jsx)(ae, { ...e }),
            }),
            (0, s.jsx)(a.qh, {
              path: ge.MeetSteamEvent(),
              render: (e) => (0, s.jsx)(D, { ...e }),
            }),
            (0, s.jsx)(a.qh, { children: (0, s.jsx)(Z.a, {}) }),
          ],
        });
      }
    },
  },
]);
