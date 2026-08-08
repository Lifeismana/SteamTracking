/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [70351],
  {
    20019: (e, t, n) => {
      n.d(t, { U: () => s });
      var o = n(76119);
      function s(e) {
        switch (e) {
          case o.uE.HT:
            return "game";
          case o.uE.Sv:
            return "software";
          case o.uE.ue:
            return "demo";
          case o.uE._i:
            return "dlc";
          case o.uE.Wz:
          case o.uE.FS:
            return "video";
          case o.uE.Ov:
            return "music";
          case o.uE.Vi:
            return "beta";
          case o.uE.RA:
            return "mod";
        }
        return "invalid";
      }
    },
    56055: (e, t, n) => {
      n.d(t, { b2: () => o, nx: () => s });
      const o = "terminal";
      var s;
      !(function (e) {
        (e[(e.TemplateFAQDisplayColumn = 1)] = "TemplateFAQDisplayColumn"),
          (e[(e.TemplateFAQDisplaySimpleRow = 2)] =
            "TemplateFAQDisplaySimpleRow");
      })(s || (s = {}));
    },
    39733: (e, t, n) => {
      n.d(t, { Du: () => g, fy: () => h, pt: () => p });
      var o = n(68797),
        s = n(78327),
        a = n(41735),
        r = n.n(a),
        i = n(37085),
        l = n(90626),
        d = n(6144),
        c = n(84933),
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
            const n = (0, s.xv)();
            (0, u.wT)(
              n == s.TS.STORE_BASE_URL || n == s.TS.COMMUNITY_BASE_URL,
              "ajaxgetbadgeinfo called on wrong unsupported site: " + n,
            );
            const a = n + "actions/ajaxgetbadgeinfo",
              l = { badgeid: e },
              d = await r().get(a, { params: l, withCredentials: !0 });
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
            t = (0, o.H)(d);
          } catch (e) {
            t = (0, o.H)(e);
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
              "dev" == s.TS.WEB_UNIVERSE &&
                (window.g_UserBadgeForEventStore = m.s_Singleton)),
            m.s_Singleton
          );
        }
        constructor() {}
      }
      function h(e) {
        const [t, n] = (0, l.useState)(e ? m.Get().GetBadgeInfo(e) : void 0);
        return (
          (0, l.useEffect)(() => {
            !t &&
              e &&
              m
                .Get()
                .LoadBadgeInfo(e)
                .then((e) => n(e));
          }, [e, t]),
          (0, c.hL)(e ? m.Get().GetBadgeInfoChangeCallback(e) : void 0, n),
          t
        );
      }
      function g(e) {
        m.Get().Test_SetBadgeInfo(e);
      }
      function p(e) {
        const [t, n] = (0, l.useState)(
          e ? m.Get().GetInitialBadgeInfo(e) : void 0,
        );
        return (
          (0, l.useEffect)(() => {
            !t && e && m.Get().LoadBadgeInfo(e);
          }, [e, t]),
          (0, c.hL)(e ? m.Get().GetBadgeInfoChangeCallback(e) : void 0, () =>
            n(e ? m.Get().GetInitialBadgeInfo(e) : void 0),
          ),
          t
        );
      }
    },
    1501: (e, t, n) => {
      n.d(t, { N: () => l });
      var o = n(34629),
        s = n(14947),
        a = n(56055),
        r = n(62490),
        i = n(78327);
      class l {
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
            l.s_Singleton ||
              ((l.s_Singleton = new l()),
              "dev" == i.TS.WEB_UNIVERSE &&
                (window.g_SaleQuizAnswerStore = l.s_Singleton)),
            l.s_Singleton
          );
        }
        constructor() {
          (0, s.Gn)(this);
        }
      }
      (0, o.Cg)([s.sH], l.prototype, "m_rgAnswerToCategoryID", void 0),
        (0, o.Cg)([s.sH], l.prototype, "m_rgAnswerChosen", void 0);
    },
    35400: (e, t, n) => {
      n.d(t, {
        DV: () => D,
        OC: () => _,
        OM: () => S,
        Sp: () => v,
        Tn: () => C,
        W3: () => I,
        hH: () => p,
        my: () => b,
      });
      var o = n(34629),
        s = n(41735),
        a = n.n(s),
        r = n(14947),
        i = n(90626),
        l = n(37085),
        d = n(68797),
        c = n(6144),
        u = n(84933),
        m = n(78327),
        h = n(44165);
      const g = -1;
      class p {
        m_userData;
        m_bLoadedDuringInit = !1;
        m_strLastDoorOpenKey = "video_noneset";
        m_bIsAnyDoorOpened = !1;
        m_nHighestDoorOpened = g;
        m_initialLoadPromise;
        m_mapDoorOpenPromise = new Map();
        m_mapChangeCallback = new Map();
        m_doorInitializedChangedCallback = new c.lu();
        m_largestDoorChangeCallback = new c.lu();
        m_bIsAnyDoorOpenChangeCallback = new c.lu();
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
          let t = h.HD.GetTimeNowWithOverride();
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
              this.m_mapChangeCallback.set(e, new c.lu()),
            this.m_mapChangeCallback.get(e)
          );
        }
        GetDoorStateInitializedChangeCallback() {
          return this.m_doorInitializedChangedCallback;
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
          let e = g;
          this.m_userData?.forEach((t) => {
            t.opened && t.day > e && (e = t.day);
          });
          const t = e != g;
          t != this.m_bIsAnyDoorOpened &&
            ((this.m_bIsAnyDoorOpened = t),
            this.GetIsAnyDoorOpenChange().Dispatch(t)),
            e != this.m_nHighestDoorOpened &&
              ((this.m_nHighestDoorOpened = e),
              this.GetLargestDoorIndexChange().Dispatch(e));
        }
        async OpenDoor(e, t = !0, n = "", o = !1) {
          return !m.iA.logged_in ||
            !this.m_userData ||
            e > this.m_userData.length ||
            e < 0
            ? ("dev" == m.TS.WEB_UNIVERSE &&
                console.log(
                  "CDoorStore.OpenDoor Early fail settings:",
                  m.iA.logged_in,
                  this.m_userData,
                  e,
                  this.m_userData?.length,
                ),
              null)
            : this.m_mapDoorOpenPromise.has(e)
              ? this.m_mapDoorOpenPromise.get(e)
              : this.m_userData[e].opened == t
                ? {}
                : (this.m_mapDoorOpenPromise.has(e) ||
                    this.m_mapDoorOpenPromise.set(
                      e,
                      this.InternalOpenDoor(e, t, n, o),
                    ),
                  this.m_mapDoorOpenPromise.get(e));
        }
        async InternalOpenDoor(e, t = !0, n, o = !1) {
          let s = m.TS.STORE_BASE_URL + "saleaction/ajaxopendoor";
          const r = new FormData();
          r.append("sessionid", (0, m.KC)()),
            n && r.append("datarecord", n),
            o && r.append("fake_open", "" + o),
            r.append("door_index", "" + e),
            r.append("clan_accountid", "" + m.UF.CLANACCOUNTID),
            t || r.append("open_door", "0");
          let i = null;
          try {
            let n = await a().post(s, r, { withCredentials: !0 });
            if (200 == n?.status && n?.data?.success == l.R)
              return (
                (this.m_userData[e].opened = t),
                (this.m_strLastDoorOpenKey = "door_" + (t ? e : e - 1)),
                this.GetDoorStateChangeCallback(e).Dispatch(t),
                this.RecomputeState(),
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
          let o = null;
          try {
            let e = await a().post(t, n, { withCredentials: !0 });
            if (200 == e.status && e?.data?.success == l.R) {
              console.log("CDoorStore - closed " + e.data.count);
              for (let e = 0; e < 7; ++e)
                (this.m_userData[e].opened = !1),
                  this.GetDoorStateChangeCallback(e).Dispatch(
                    this.m_userData[e].opened,
                  );
              return this.RecomputeState(), !0;
            }
            o = (0, d.H)(e);
          } catch (e) {
            o = (0, d.H)(e);
          }
          return (
            console.error(
              "CDoorStore.CloseAllDoors failed: " + o?.strErrorMsg,
              o,
            ),
            null
          );
        }
        static s_Singleton;
        static Get() {
          return (
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              p.s_Singleton.Init(),
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_EventDoorStore = p.s_Singleton)),
            p.s_Singleton
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
      function _() {
        return { fnOpenDoor: p.Get().OpenDoor };
      }
      function D() {
        const [e, t] = (0, i.useState)(p.Get().BIsInitialized());
        return (
          (0, i.useEffect)(() => {
            e || p.Get().LoadDoorData();
          }, [e]),
          (0, u.hL)(p.Get().GetDoorStateInitializedChangeCallback(), t),
          e
        );
      }
      function S(e) {
        const t = D(),
          [n, o] = (0, i.useState)(t ? p.Get().BIsDoorOpened(e) : void 0);
        return (0, u.hL)(p.Get().GetDoorStateChangeCallback(e), o), n;
      }
      function C() {
        const e = D(),
          [t, n] = (0, i.useState)(e ? p.Get().GetLargestDoorOpenIndex() : g);
        return (0, u.hL)(p.Get().GetLargestDoorIndexChange(), n), t;
      }
      function I() {
        const e = D(),
          [t, n] = (0, i.useState)(!!e && p.Get().BIsAnyDoorOpened());
        return (0, u.hL)(p.Get().GetIsAnyDoorOpenChange(), n), t;
      }
      function v(e) {
        p.Get().SetInMemoryUpdateDoorOpenUpto(e);
      }
      function b(e, t) {
        p.Get().SetInMemorySpecificDoorState(e, t);
      }
      (0, o.Cg)([r.sH], p.prototype, "m_bIsAnyDoorOpened", void 0),
        (0, o.Cg)([r.sH], p.prototype, "m_nHighestDoorOpened", void 0),
        (0, o.Cg)([u.oI], p.prototype, "BIsDoorOpened", null),
        (0, o.Cg)([u.oI], p.prototype, "OpenDoor", null);
    },
    32541: (e, t, n) => {
      n.d(t, { LG: () => v, hA: () => I });
      var o = n(7850),
        s = n(76217),
        a = n(67165),
        r = n(30894),
        i = n(55263),
        l = n(17289),
        d = n(52038),
        c = n(61859),
        u = n(82227),
        m = n(61336),
        h = n(78327),
        g = n(84811),
        p = n(32630),
        _ = n(22797),
        D = n(56524),
        S = n(28372),
        C = n(95695);
      function I(e) {
        const {
            creatorID: t,
            bShowTagline: n,
            bHideCreatorType: i,
            bSmallFormat: I,
            bHideFollowButton: v,
            bAddLinkToMemberList: b,
            bMinimalDisplay: w,
          } = e,
          { creatorHome: f } = (0, a.FV)(t.clan_account_id),
          [A] = (0, r.L2)();
        if (A || !f)
          return (0, o.jsx)("div", {
            className: D.DevSummaryWidgetCtn,
            children: (0, o.jsx)(_.t, {
              string: (0, c.we)("#Loading"),
              size: "medium",
              position: "center",
            }),
          });
        const y = t.type,
          G =
            "developer" == t.type
              ? (0, c.we)("#CreatorHome_DevelopedBy")
              : "publisher" == t.type
                ? (0, c.we)("#CreatorHome_PublishedBy")
                : (0, c.we)("#CreatorHome_InFranchise"),
          O = f.GetCreatorHomeURL(y),
          B = f.GetNumFollowers();
        return (0, o.jsx)(g.tH, {
          children: (0, o.jsx)(p.Ay, {
            feature: "salecreatorhome",
            children: (0, o.jsxs)(s.Z, {
              className: (0, d.A)(
                D.DevSummaryCtn,
                I ? D.SmallFormat : D.LargeFormat,
                w ? D.MinimalDisplay : "",
              ),
              "flow-children": "row",
              children: [
                !i && (0, o.jsx)("span", { className: D.Title, children: G }),
                (0, o.jsxs)("div", {
                  className: D.DevSummaryWidgetCtn,
                  children: [
                    (0, o.jsx)("div", {
                      className: D.DevSummaryBackground,
                      style: {
                        backgroundImage: `url(${f.GetAvatarURLFullSize()} )`,
                      },
                    }),
                    (0, o.jsxs)("div", {
                      className: (0, d.A)(D.DevSummaryContent),
                      children: [
                        (0, o.jsxs)("div", {
                          className: C.FlexRowContainer,
                          children: [
                            (0, o.jsx)(l.m, {
                              href: (0, m.k2)(O),
                              className: D.AvatarLink,
                              bAllowFocuseableAnchor: !0,
                              children: (0, o.jsx)("img", {
                                className: (0, d.A)(D.Avatar, "Avatar_Trgt"),
                                src: f.GetAvatarURLFullSize(),
                              }),
                            }),
                            (0, o.jsxs)("div", {
                              className: (0, d.A)(
                                C.FlexColumnContainer,
                                D.CreatorDescCtn,
                              ),
                              children: [
                                (0, o.jsxs)("div", {
                                  className: (0, d.A)(
                                    D.CreatorTitleCtn,
                                    C.FlexColumnContainer,
                                  ),
                                  children: [
                                    (0, o.jsx)(l.m, {
                                      href: (0, m.k2)(O),
                                      className: D.CreatorNameName,
                                      children: f.GetName(),
                                    }),
                                    Boolean(n) &&
                                      (0, o.jsx)("div", {
                                        className: (0, d.A)(
                                          C.FlexColumnContainer,
                                          D.CreatorTagline,
                                        ),
                                        children: f.GetTagLine(),
                                      }),
                                  ],
                                }),
                                (0, o.jsx)("div", {
                                  className: (0, d.A)({
                                    [C.FlexColumnContainer]: I,
                                    [C.FlexRowContainer]: !I,
                                    [D.SocialFollowersCtn]: !0,
                                  }),
                                  children: (0, o.jsxs)("div", {
                                    className: (0, d.A)(D.FollowBtnCtn),
                                    children: [
                                      Boolean(!v) &&
                                        (0, o.jsx)(S.of, {
                                          clanAccountID: t.clan_account_id,
                                          creatorID: t,
                                        }),
                                      (0, o.jsxs)("div", {
                                        className: (0, d.A)({
                                          [D.Followers]: !0,
                                        }),
                                        children: [
                                          (0, o.jsx)("span", {
                                            children: (0, c.we)(
                                              "#CreatorHome_JustFollowers",
                                            ),
                                          }),
                                          (0, o.jsx)("span", {
                                            className: D.FollowerCount,
                                            children: (0, u.Dq)(B),
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
                        Boolean(b) &&
                          (0, o.jsx)("a", {
                            href:
                              h.TS.COMMUNITY_BASE_URL +
                              "gid/" +
                              f.GetClanSteamID().ConvertTo64BitString() +
                              "/members/",
                            target: "_blank",
                            className: D.MembersListLink,
                            children: (0, c.we)("#ClanMembershipList"),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function v(e) {
        const { appid: t, bSmallFormat: n } = e,
          [s] = (0, i.t7)(t, { include_basic_info: !0 });
        if (!t) return null;
        if (!s)
          return (0, o.jsx)("div", {
            className: D.DevSummaryWidgetCtn,
            children: (0, o.jsx)(_.t, {}),
          });
        let a;
        const r = s.GetAllDeveloperCreatorClans();
        if (r?.length > 0)
          a = { appid: t, name: "", clan_account_id: r[0], type: "developer" };
        else {
          const e = s.GetAllPublisherCreatorClans();
          if (e?.length > 0)
            a = {
              appid: t,
              name: "",
              clan_account_id: e[0],
              type: "publisher",
            };
          else {
            const e = s.GetAllFranchiseCreatorClans();
            e?.length > 0 &&
              (a = {
                appid: t,
                name: "",
                clan_account_id: e[0],
                type: "franchise",
              });
          }
        }
        return a
          ? (0, o.jsx)(g.tH, {
              children: (0, o.jsx)(I, { creatorID: a, bSmallFormat: n }),
            })
          : null;
      }
    },
    77021: (e, t, n) => {
      n.d(t, { PM: () => h, TU: () => c, lM: () => m, ty: () => u });
      var o = n(34629),
        s = n(90626),
        a = n(78327),
        r = n(84933),
        i = n(14947),
        l = n(95034),
        d = n(65946);
      class c {
        m_sParentOrigin;
        m_eventModelJson = void 0;
        m_setMouseOverSectionID = i.sH.set();
        m_setMouseOverSubsectionID = i.sH.set();
        m_jumpToSection = void 0;
        m_jumpToSubsection = void 0;
        static s_Singleton;
        static Get() {
          return (
            c.s_Singleton ||
              ((c.s_Singleton = new c()),
              "dev" == a.TS.WEB_UNIVERSE &&
                (window.g_PartnerSaleLivePreviewClient = c.s_Singleton)),
            c.s_Singleton
          );
        }
        constructor() {
          (0, i.Gn)(this),
            window.opener &&
              ((this.m_sParentOrigin = (0, l.f3)(
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
        return (0, d.q3)(() => c.Get().BIsConnected());
      }
      function m(e) {
        const t = (0, d.q3)(() => c.Get().GetJumpToSectionID());
        s.useEffect(() => {
          if (!c.Get().BIsConnected() || !t) return;
          e(t) && c.Get().ClearJumpToSectionID();
        }, [e, t]);
      }
      function h(e) {
        const t = (0, d.q3)(() => c.Get().GetJumpToSubsectionIDs());
        s.useEffect(() => {
          if (!c.Get().BIsConnected() || !t) return;
          e(t.nSectionID, t.strSubsectionID) &&
            c.Get().ClearJumpToSubectionID();
        }, [e, t]);
      }
      (0, o.Cg)([i.sH], c.prototype, "m_eventModelJson", void 0),
        (0, o.Cg)([i.sH], c.prototype, "m_setMouseOverSectionID", void 0),
        (0, o.Cg)([i.sH], c.prototype, "m_setMouseOverSubsectionID", void 0),
        (0, o.Cg)([i.sH], c.prototype, "m_jumpToSection", void 0),
        (0, o.Cg)([i.sH], c.prototype, "m_jumpToSubsection", void 0),
        (0, o.Cg)([r.oI], c.prototype, "HandleMessage", null);
    },
    17289: (e, t, n) => {
      n.d(t, { m: () => r });
      var o = n(7850),
        s = n(45699),
        a = n(78327);
      function r(e) {
        const { href: t, children: n, bAllowFocuseableAnchor: r, ...i } = e;
        return (0, a.Y2)()
          ? (0, o.jsx)("div", { ...i, children: n })
          : r
            ? (0, o.jsx)(s.Ii, { href: t, ...i, children: n })
            : (0, o.jsx)("a", { href: t, ...i, children: n });
      }
    },
  },
]);
