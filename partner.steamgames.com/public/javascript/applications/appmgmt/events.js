/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [74268],
    {
      73561: (L, le, i) => {
        "use strict";
        i.r(le), i.d(le, { default: () => oo });
        var n = i(7850),
          fe = i(41735),
          q = i.n(fe),
          v = i(90626),
          I = i(99412),
          F = i(72604),
          te = i(32093),
          k = i(73259),
          Q = i(76559),
          ce = i(58483),
          Se = i(98534),
          G = i(58534),
          de = i(25792),
          ee = i(75844),
          h = i(3166),
          U = i(65804);
        class w extends U.ZQ {
          async DeleteOldAnnouncement(e, s) {
            let o = new URLSearchParams();
            o.append("sessionid", (0, h.KC)());
            let a =
                h.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                e.ConvertTo64BitString() +
                "/announcements/ajaxdeleteannouncement/" +
                s,
              r = await q().post(a, o);
            if (r.data.success != F.R) throw r.data;
            return this.RemoveGIDFromList(e, k.cB + s), r.data;
          }
          static sm_Instance;
          static sm_SummaryInstance;
          static Get() {
            return (
              w.sm_Instance ||
                ((w.sm_Instance = new w()), w.sm_Instance.Init()),
              w.sm_Instance
            );
          }
          static GetSummaryStore() {
            return (
              w.sm_SummaryInstance ||
                ((w.sm_SummaryInstance = new w(!0)),
                w.sm_SummaryInstance.Init()),
              w.sm_SummaryInstance
            );
          }
        }
        var b = i(14947),
          N = i(41301),
          D = i(19298),
          ne = i(72849),
          we = i(9046),
          ue = i(65946),
          Ne = i(18057),
          S = i(36707),
          Zt = i(71684),
          Qt = i(38182),
          qe = i.n(Qt);
        function uo(t) {
          const {
              event: e,
              className: s,
              nOverrideStartTime: o,
              nOverrideEndTime: a,
            } = t,
            r = t.stylesmodule ? { ...styles, ...t.stylesmodule } : styles,
            [l, c, d] = useObserver(() => [
              o ||
                (e.bOldAnnouncement
                  ? e.postTime
                  : e.GetStartTimeAndDateUnixSeconds()),
              a || e.GetEndTimeAndDateUnixSeconds(),
              e.type,
            ]),
            m = !BClanEventTypeNeedEndTime(d);
          return jsx("div", {
            className: classnames(r.EventDetailTimeInfo, s),
            children: jsx(DisplayLocalDateAndTimeRange, {
              startDateAndTime: l,
              endDateAndTime: c,
              bHideEndTime: m,
              stylesmodule: r,
            }),
          });
        }
        function Yt(t) {
          const {
              id: e,
              event: s,
              className: o,
              dateRangeLayout: a = "horizontal",
            } = t,
            [r, l, c] = (0, ue.q3)(() => [
              s.GetStartTimeAndDateUnixSeconds(),
              s.GetEndTimeAndDateUnixSeconds(),
              s.type,
            ]),
            d = {};
          return (
            a == "vertical" &&
              (d.ShortDateRange = qe().VerticalLocalDateAndTime),
            (0, n.jsx)("div", {
              id: e,
              className: (0, S.A)(qe().EventDetailTimeInfo, o),
              children: (0, n.jsx)(Ne.u1, {
                startDateAndTime: r,
                endDateAndTime: l,
                bHideEndTime: !(0, Zt.JS)(c),
                stylesmodule: d,
              }),
            })
          );
        }
        var pe = i(813),
          Xt = i(7582),
          Jt = i(99047),
          Oe = i(34592),
          $t = Object.defineProperty,
          qt = Object.getOwnPropertyDescriptor,
          en = (t, e, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? qt(e, s) : e, r = t.length - 1, l;
              r >= 0;
              r--
            )
              (l = t[r]) && (a = (o ? l(e, s, a) : l(a)) || a);
            return o && a && $t(e, s, a), a;
          };
        const et = class me {
          constructor() {
            (0, b.Gn)(this);
          }
          m_mapClanReposted = new Set();
          m_mapSourceEventGIDToPostedClans = new Map();
          static s_EventRepost;
          static Get() {
            return (
              me.s_EventRepost ||
                ((me.s_EventRepost = new me()), me.s_EventRepost.Initialize()),
              me.s_EventRepost
            );
          }
          static ValidateRepostData(e) {
            const s = e;
            return s &&
              s.repost_clan_account_ids &&
              Array.isArray(s.repost_clan_account_ids) &&
              s.repost_clan_account_ids.length > 0
              ? typeof s.repost_clan_account_ids[0] == "number"
              : !1;
          }
          Initialize() {
            if (document.getElementById("application_config")) {
              let e = (0, h.Tc)("repostcontrols", "application_config");
              me.ValidateRepostData(e) &&
                e.repost_clan_account_ids.forEach((s) =>
                  this.m_mapClanReposted.add(s),
                );
            }
          }
          BCanRepostPartnerEvent() {
            return this.m_mapClanReposted.size > 0;
          }
          GetRepostClanAccountID() {
            return Array.from(this.m_mapClanReposted);
          }
          async LoadClansAlreadyRepostedTo(e, s, o) {
            if (this.m_mapSourceEventGIDToPostedClans.has(s))
              return this.m_mapSourceEventGIDToPostedClans.get(s);
            const a = h.TS.STORE_BASE_URL + "events/ajaxgetrepostedevent",
              r = {
                sessionid: (0, h.KC)(),
                source_clan_accountid: e.GetAccountID(),
                source_event_gid: s,
              };
            try {
              const l = await q().get(a, {
                params: r,
                withCredentials: !0,
                cancelToken: o?.token,
              });
              if (l?.data?.success == F.R)
                return (
                  this.m_mapSourceEventGIDToPostedClans.set(
                    s,
                    l.data.repost_clan_accountid || [],
                  ),
                  l.data.repost_clan_accountid
                );
              console.error(
                "GetRepostClanAccountID: failed " +
                  l?.data?.success +
                  " and msg: " +
                  l?.data?.msg,
              );
            } catch (l) {
              const c = (0, Oe.H)(l);
              console.error(
                "GetRepostClanAccountID: fail repost with " + c.strErrorMsg,
                c,
              );
            }
            return new Array();
          }
          async RepostEvent(e, s, o, a, r) {
            const l = h.TS.STORE_BASE_URL + "events/ajaxrepostevent",
              c = new FormData();
            c.append("sessionid", (0, h.KC)()),
              c.append("source_clan_accountid", "" + e.GetAccountID()),
              c.append("source_event_gid", "" + s),
              c.append("repost_clan_accountid", "" + o.GetAccountID()),
              c.append("add", "" + a);
            try {
              let d = await q().post(l, c, {
                withCredentials: !0,
                cancelToken: r?.token,
              });
              if (d?.data?.success == F.R && d.data.repost_gid) {
                this.m_mapSourceEventGIDToPostedClans.has(s) ||
                  this.m_mapSourceEventGIDToPostedClans.set(s, []);
                const m = this.m_mapSourceEventGIDToPostedClans
                  .get(s)
                  .findIndex((g) => o.GetAccountID() == g);
                return (
                  a && m == -1
                    ? this.m_mapSourceEventGIDToPostedClans
                        .get(s)
                        .push(o.GetAccountID())
                    : !a &&
                      m !== -1 &&
                      this.m_mapSourceEventGIDToPostedClans.get(s).splice(m, 1),
                  d.data.repost_gid
                );
              } else
                console.error(
                  "RepostEvent: failed " +
                    d?.data?.success +
                    " and msg: " +
                    d?.data?.msg,
                );
            } catch (d) {
              const m = (0, Oe.H)(d);
              console.error(
                "RepostEvent: fail repost with " + m.strErrorMsg,
                m,
              );
            }
            return null;
          }
        };
        en([b.sH], et.prototype, "m_mapClanReposted", 2);
        let he = et;
        var tt = i(95695),
          H = i.n(tt),
          nt = i(47875),
          Ae = i(88003),
          ve = i(82734),
          u = i(18210),
          tn = i(13854),
          se = i(53113),
          je = i(2801),
          nn = i(14256),
          B = i.n(nn),
          Le = i(64868),
          E = i(36118),
          Ee = i(18099),
          Re = i(69168);
        const sn = v.lazy(() =>
          i
            .e(98656)
            .then(i.bind(i, 56741))
            .then((t) => ({ default: t.ShareEventDialogBody })),
        );
        function on(t) {
          const { bActive: e, ...s } = t;
          return (0, n.jsx)(Re.E, {
            active: e,
            children: (0, n.jsx)(v.Suspense, {
              fallback: null,
              children: (0, n.jsx)(sn, { ...s }),
            }),
          });
        }
        function an(t) {
          const { eventModel: e, emoticonStore: s } = t,
            [o, a, r] = (0, Le.uD)(),
            l = (0, Ee.T7)(e);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(D.Z, {
                focusable: !0,
                className: (0, S.A)(H().Button, H().Icon, B().DiscussionButton),
                onActivate: a,
                children: [
                  (0, n.jsx)(E.SYj, { className: B().ShareIcon }),
                  (0, n.jsx)("span", {
                    className: B().DiscussionButtonText,
                    children: (0, u.we)("#Button_Share"),
                  }),
                ],
              }),
              (0, n.jsx)(on, {
                eventModel: e,
                strEventLink: l ?? "",
                bActive: o,
                closeModal: r,
                emoticonStore: s,
              }),
            ],
          });
        }
        var O = i(72609),
          Fe = i(75233),
          Pe = i(20194),
          ke = i(51614);
        function st(t, e) {
          return ["GetClanAnnouncementVoteForUser", e, t];
        }
        function mo(t) {
          return t == "up" ? 1 : t == "down" ? -1 : 0;
        }
        function rn(t, e, s, o) {
          const a = (0, Fe.jE)(),
            r = st(t, O.iA.accountid),
            { data: l } = (0, Pe.I)({
              queryKey: r,
              queryFn: async () => await s.GetMyEventVote(t),
              initialData: o?.initialVote,
              enabled: !!t && !!O.iA.accountid && (o?.bAsk ?? !0),
              staleTime: 1 / 0,
              gcTime: 1 / 0,
            }),
            { mutate: c } = (0, ke.n)({
              mutationFn: async (m) => {
                const g = await s.RateEvent(t, e, m);
                if (g != F.R)
                  throw new Error(`RateClanAnnouncement failed with ${g}`);
              },
              onMutate: (m) => a.setQueryData(r, m),
              onError: () => a.invalidateQueries({ queryKey: r }),
            });
          return {
            myVote: l,
            Vote: (m) => {
              !t || m == l || c(m);
            },
          };
        }
        function po(t, e) {
          if (t.length == 0) return;
          const s = e ?? GetEventStateQueryClient("SetMyEventVotes");
          s &&
            t.forEach((o) =>
              s.setQueryData(
                st(o.gidAnnouncement, UserConfig.accountid),
                o.vote,
              ),
            );
        }
        const ln = "partnereventaction/myvote",
          cn = "partnereventaction/rateevent";
        async function dn(t) {
          const e = O.TS.STORE_BASE_URL + ln + "?gid=" + encodeURIComponent(t),
            s = await fetch(e, { credentials: "include" });
          if (!s.ok) throw new Error(`${e} answered ${s.status}`);
          return (await s.json()).vote ?? null;
        }
        async function un(t, e, s) {
          const o = O.TS.STORE_BASE_URL + cn,
            a = {
              gid: t,
              clanaccountid: String(e),
              voteup: s == "up" ? "1" : "0",
            },
            r = await fetch(o, {
              method: "POST",
              credentials: "include",
              body: new URLSearchParams(a),
            });
          if (!r.ok) throw new Error(`${o} answered ${r.status}`);
          return (await r.json()).success ?? F.zi;
        }
        const mn = { GetMyEventVote: dn, RateEvent: un };
        var Ge = i(68312),
          ot = i(71742),
          at = i(67705);
        let be;
        function pn(t, e) {
          const s = t?.AnnouncementGID,
            o = t?.clanSteamID.GetAccountID() ?? 0,
            a = hn(),
            { myVote: r, Vote: l } = rn(s, o, a, { initialVote: fn(s), ...e });
          return {
            myVote: r,
            Vote: (d) => {
              !t ||
                !s ||
                d == r ||
                (r && t.UpdateVoteCount(r, -1), t.UpdateVoteCount(d, 1), l(d));
            },
          };
        }
        function hn() {
          const { useActiveCMInterface: t } = (0, Ge.tc)(),
            e = (0, Ge.KV)(),
            s = !!t;
          return v.useMemo(
            () =>
              s
                ? {
                    GetMyEventVote: async (o) => await vn(e, o),
                    RateEvent: async (o, a, r) => await gn(e, o, a, r),
                  }
                : mn,
            [s, e],
          );
        }
        async function vn(t, e) {
          if (!t) return null;
          const s = await ne.BE.GetClanAnnouncementVoteForUser(t, {
            announcementid: e,
          });
          return s.BSuccess()
            ? s.Body().voted_up()
              ? "up"
              : s.Body().voted_down()
                ? "down"
                : null
            : null;
        }
        async function gn(t, e, s, o) {
          return t
            ? (
                await ne.BE.RateClanAnnouncement(t, {
                  announcementid: e,
                  vote_up: o == "up",
                  clan_accountid: s,
                })
              ).GetEResult()
            : F.Dy;
        }
        function fn(t) {
          if (typeof window > "u") {
            (0, ot.wT)(!1, "GetVoteFromPageConfig is browser only");
            return;
          }
          return (
            be ||
              ((be = new Map()),
              (0, at.Fd)("uservotes", "application_config")?.forEach((s) => {
                s.clanAnnouncementGID &&
                  be.set(
                    s.clanAnnouncementGID,
                    s.voted_up ? "up" : s.voted_down ? "down" : null,
                  );
              })),
            t ? be.get(t) : void 0
          );
        }
        var Sn = i(85385),
          Ce = i(85599);
        const An = (0, ee.PA)((t) => {
          const { eventModel: e } = t,
            [s, o] = (0, v.useState)(!0),
            [a, r] = (0, v.useState)(new Set()),
            [l, c] = (0, v.useState)(new Set()),
            [d, m] = (0, v.useState)(new Set()),
            [g, j] = (0, v.useState)(null),
            [W, T] = (0, v.useState)(null),
            V = (0, v.useRef)(null);
          (0, v.useEffect)(
            () => (
              s &&
                (async () => {
                  const M = q().CancelToken.source();
                  V.current = M.cancel;
                  const P = he
                    .Get()
                    .LoadClansAlreadyRepostedTo(e.clanSteamID, e.GID, M);
                  P.then((X) => {
                    const ie = new Set();
                    X.forEach((_) => ie.add(_)), r(ie);
                  });
                  let K = new Array();
                  K.push(P),
                    he
                      .Get()
                      .GetRepostClanAccountID()
                      .forEach((X) => {
                        const ie = Q.b.InitFromClanID(X);
                        K.push(pe.ac.LoadClanInfoForClanSteamID(ie));
                      }),
                    await Promise.all(K),
                    o(!1);
                })(),
              () => V.current && V.current()
            ),
            [s, e.GID, e.clanSteamID],
          );
          const x = new Array();
          return (
            he
              .Get()
              .GetRepostClanAccountID()
              .forEach((f) => {
                const M = pe.ac.GetClanInfoByClanAccountID(f);
                if (M && f != e.clanSteamID.GetAccountID()) {
                  const P = a.has(f),
                    K = l.has(f) || (P && !d.has(f));
                  x.push(
                    (0, n.jsx)(
                      G.Yh,
                      {
                        label: P
                          ? (0, u.we)(
                              "#EventRepost_Dialog_Existing",
                              M.group_name,
                            )
                          : M.group_name,
                        checked: K,
                        disabled: g !== null,
                        onChange: (X) => {
                          a.has(f)
                            ? (X ? d.delete(f) : d.add(f), m(new Set(d)))
                            : (X ? l.add(f) : l.delete(f), c(new Set(l)));
                        },
                      },
                      "checkbox" + f,
                    ),
                  );
                }
              }),
            (0, n.jsx)(de.tH, {
              children: (0, n.jsx)(je.x_, {
                onEscKeypress: () => t.closeModal && t.closeModal(),
                children: (0, n.jsxs)(G.UC, {
                  children: [
                    (0, n.jsx)(G.Y9, {
                      children: (0, u.we)("#EventRepost_Dialog_Title"),
                    }),
                    (0, n.jsxs)(G.nB, {
                      children: [
                        (0, n.jsx)(G.a3, {
                          children: (0, u.we)("#EventRepost_Dialog_Desc"),
                        }),
                        s
                          ? (0, n.jsx)(Ce.t, { string: (0, u.we)("#Loading") })
                          : (0, n.jsx)("div", { children: x }),
                        !!(l.size || d.size) &&
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("span", {
                                children: (0, u.we)(
                                  "#EventRepost_Dialog_Action_Desc",
                                ),
                              }),
                              (0, n.jsxs)("ul", {
                                children: [
                                  !!l.size &&
                                    (0, n.jsx)("li", {
                                      children: (0, u.we)(
                                        "#EventRepost_Dialog_Action_Add",
                                        l.size,
                                      ),
                                    }),
                                  !!d.size &&
                                    (0, n.jsx)("li", {
                                      children: (0, u.we)(
                                        "#EventRepost_Dialog_Action_Remove",
                                        d.size,
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        !!g && (0, n.jsx)("div", { children: g }),
                        !!W && (0, n.jsx)("div", { children: W }),
                      ],
                    }),
                    (0, n.jsx)(G.wi, {
                      children: (0, n.jsx)(G.CB, {
                        onCancel: () => t.closeModal && t.closeModal(),
                        strOKText: (0, u.we)("#EventRepost_Dialog_OK"),
                        bOKDisabled:
                          (l.size == 0 && d.size == 0) ||
                          g !== null ||
                          W !== null,
                        onOK: async () => {
                          V.current && V.current();
                          const f = q().CancelToken.source();
                          V.current = f.cancel;
                          const M = l.size + d.size;
                          let P = 1;
                          j((0, u.we)("#EventRepost_Dialog_Progress", P, M));
                          for (const K of Array.from(l)) {
                            const X = Q.b.InitFromClanID(K);
                            if (
                              await he
                                .Get()
                                .RepostEvent(e.clanSteamID, e.GID, X, !0, f)
                            )
                              j(
                                (0, u.we)(
                                  "#EventRepost_Dialog_Progress",
                                  ++P,
                                  M,
                                ),
                              );
                            else {
                              T((0, u.we)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          for (const K of Array.from(d)) {
                            const X = Q.b.InitFromClanID(K);
                            if (
                              await he
                                .Get()
                                .RepostEvent(e.clanSteamID, e.GID, X, !1, f)
                            )
                              j(
                                (0, u.we)(
                                  "#EventRepost_Dialog_Progress",
                                  ++P,
                                  M,
                                ),
                              );
                            else {
                              T((0, u.we)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          T((0, u.we)("#EventRepost_Dialog_ResultSuccess"));
                        },
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        });
        var En = i(24660),
          rt = i(19730);
        function Cn(t) {
          const {
            nVoteCount: e,
            nCommentCount: s,
            myVote: o,
            onVote: a,
            strDiscussionURL: r,
            onDiscussionUnavailable: l,
            bShowDiscussion: c,
            repost: d,
            share: m,
          } = t;
          return (0, n.jsxs)(D.Z, {
            className: B().Container,
            "flow-children": "row",
            focusable: !1,
            children: [
              (0, n.jsxs)("div", {
                className: B().InnerContainer,
                children: [
                  (0, n.jsxs)("div", {
                    className: B().VoteContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: B().VoteCount,
                        children: [
                          (0, n.jsx)(E.bfp, {
                            className: B().VoteUpStaticIcon,
                          }),
                          (0, rt.Dq)(e),
                        ],
                      }),
                      (0, n.jsxs)(D.Z, {
                        focusable: !0,
                        className: (0, S.A)(
                          H().Button,
                          H().Icon,
                          B().DiscussionButton,
                          o == "up" ? B().VoteButtonSelected : "",
                        ),
                        onActivate: () => a("up"),
                        children: [
                          (0, n.jsx)(E.bfp, {
                            className:
                              o == "up"
                                ? B().VoteUpSelectedIcon
                                : B().VoteUpIcon,
                          }),
                          (0, n.jsx)("span", {
                            className: B().DiscussionButtonText,
                            children: (0, u.we)("#Button_RateUp"),
                          }),
                        ],
                      }),
                      (0, n.jsx)(D.Z, {
                        focusable: !0,
                        className: (0, S.A)(
                          H().Button,
                          H().Icon,
                          B().DiscussionButton,
                          o == "down" ? B().VoteButtonSelected : "",
                        ),
                        onActivate: () => a("down"),
                        "aria-label": (0, u.we)("#Button_RateDown"),
                        children: (0, n.jsx)(E.bfp, {
                          className:
                            o == "down"
                              ? B().VoteDownSelectedIcon
                              : B().VoteDownIcon,
                        }),
                      }),
                    ],
                  }),
                  c &&
                    (0, n.jsx)(Dn, {
                      commentCount: s,
                      discussionURL: r,
                      gotoDiscussion: l,
                    }),
                  d,
                ],
              }),
              m &&
                (0, n.jsx)("div", {
                  className: B().ShareContainer,
                  children: m,
                }),
            ],
          });
        }
        function Dn(t) {
          const { commentCount: e, discussionURL: s, gotoDiscussion: o } = t;
          return (0, n.jsxs)("div", {
            className: B().DiscussContainer,
            children: [
              (0, n.jsxs)("div", {
                className: B().DiscussionCount,
                children: [(0, n.jsx)(E.ROZ, {}), (0, rt.Dq)(e)],
              }),
              s &&
                (0, n.jsx)(En.Ii, {
                  href: (0, se.k2)(s),
                  children: (0, n.jsxs)("div", {
                    className: (0, S.A)(
                      H().Button,
                      H().Icon,
                      B().DiscussionButton,
                    ),
                    children: [
                      (0, n.jsx)(E.ROZ, {}),
                      (0, n.jsx)("span", {
                        className: B().DiscussionButtonText,
                        children: (0, u.we)("#Button_Discuss"),
                      }),
                    ],
                  }),
                }),
              !s &&
                (0, n.jsxs)(D.Z, {
                  focusable: !0,
                  onActivate: o,
                  className: (0, S.A)(
                    H().Button,
                    H().Icon,
                    B().DiscussionButton,
                  ),
                  children: [
                    (0, n.jsx)(E.ROZ, {}),
                    (0, n.jsx)("span", {
                      className: B().DiscussionButtonText,
                      children: (0, u.we)("#Button_Discuss"),
                    }),
                  ],
                }),
            ],
          });
        }
        function yn() {
          return h.iA.logged_in
            ? h.iA.is_limited
              ? ((0, Ae.pg)((0, n.jsx)(Sn.g, {}), window), !1)
              : !0
            : (h.TS.IN_CLIENT
                ? console.log(
                    "EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.",
                  )
                : (0, Ae.pg)(
                    (0, n.jsx)(je.o0, {
                      strTitle: (0, u.we)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: (0, u.we)(
                        "#EventDisplay_Share_NotLoggedIn_Description",
                      ),
                      strOKButtonText: (0, u.we)("#MobileLogin_SignIn"),
                      onOK: () => (0, nt.l)(),
                    }),
                    window,
                  ),
              !1);
        }
        function xn(t) {
          const { eventModel: e, emoticonStore: s } = t,
            o = (0, h.Qn)(),
            { myVote: a, Vote: r } = pn(e),
            l = (f) => {
              yn() && a !== void 0 && r(f);
            },
            [, c] = (0, pe.TB)(e.clanSteamID.GetAccountID()),
            d = (f) => {
              (0, Ae.pg)(
                (0, n.jsx)(je.KG, {
                  strDescription: (0, u.we)(
                    "#EventDisplay_Share_CommentMigrationInProcess",
                  ),
                }),
                (0, ve.uX)(f),
              );
            },
            m = (f) => {
              (0, Ae.pg)((0, n.jsx)(An, { eventModel: e }), (0, ve.uX)(f));
            },
            [g, j, W, T] = (0, ue.q3)(() => [
              (0, tn.OQ)(e.nVotesUp - e.nVotesDown, 0, Number.MAX_SAFE_INTEGER),
              (0, se.NT)(e.GetDiscussionURL(c?.vanity_url)),
              e.BIsUnlistedEvent(),
              e.nCommentCount,
            ]),
            V = (0, h.Y2)(),
            x = h.iA.logged_in && he.Get().BCanRepostPartnerEvent();
          return (0, n.jsx)(Cn, {
            nVoteCount: g,
            nCommentCount: T,
            myVote: a ?? void 0,
            onVote: l,
            strDiscussionURL: j,
            onDiscussionUnavailable: d,
            bShowDiscussion: !V && !W,
            repost:
              x &&
              (0, n.jsx)("div", {
                className: B().VoteContainer,
                children: (0, n.jsx)(D.Z, {
                  focusable: !0,
                  className: (0, S.A)(
                    H().Button,
                    H().Icon,
                    B().DiscussionButton,
                    a == "down" ? B().VoteButtonSelected : "",
                  ),
                  onActivate: m,
                  children: (0, u.we)("#EventRepost_Dialog_Title"),
                }),
              }),
            share: !o && (0, n.jsx)(an, { eventModel: e, emoticonStore: s }),
          });
        }
        var Tn = i(85820),
          J = i(34041),
          Bn = i(19367),
          Ve = i.n(Bn);
        const it = Ve()("2026-11-23T09:30:00-08:00").unix(),
          In = Ve()("2026-11-30T10:00:00-08:00").unix(),
          wn = "store/promo/steamawards2025/";
        function Nn() {
          return 2025;
        }
        function ho(t) {
          return `${Config.MEDIA_CDN_URL}store/promo/${t}`;
        }
        const jn = "#173471",
          lt = "#ee6c5d",
          Ln = "#FFFFFF",
          Rn = Ve()("2026-12-17T09:30:00-08:00").unix(),
          ct = Ve()("2027-01-02T10:00:00-08:00").unix(),
          vo = { 2023: 2640290, 2024: 3334340, 2025: 4147080, 2026: 5350740 },
          _e = 4147080,
          go = 2215130;
        function fo(t) {
          switch (t) {
            case 2023:
            case 2024:
            case 2025:
              return !0;
            case 2026:
              return !1;
          }
          return !1;
        }
        function Pn(t) {
          return t >= it && t < In;
        }
        function So(t) {
          return t >= it;
        }
        function Gn(t, e, s, o) {
          const a = Pn(o),
            r = dt(t, e),
            l = dt(t, s);
          if (!(!r.length && !l.length))
            return {
              nomination: r.length
                ? { rgCategories: r, bNominationsLive: a }
                : void 0,
              vote: l.length
                ? { rgCategories: l, bNominationsLive: a }
                : void 0,
            };
        }
        function Ao(t) {
          return t >= Rn && t < ct;
        }
        function Eo(t) {
          return t >= ct;
        }
        function He(t) {
          return t > 0;
        }
        function dt(t, e) {
          const s = [];
          for (const o of e.filter(He)) {
            const a = t.find((r) => r.voteid == o);
            a?.localization?.title &&
              s.push({
                eCategoryID: o,
                strTitle: a.localization.title,
                strDescription: a.localization.award_description ?? "",
                bLaborOfLove: a.flag == J.Xs.bV,
              });
          }
          return s;
        }
        function bn(t) {
          return ["SteamAwards.GetUserNominations", t];
        }
        function Vn(t) {
          return ["StoreSales.GetUserVotes", t, _e];
        }
        function _n(t, e) {
          const s = (0, Fe.jE)(),
            o = bn(O.iA.accountid),
            { data: a, isPending: r } = (0, Pe.I)({
              queryKey: o,
              queryFn: async () => await e.GetMySteamAwardNominations(),
              enabled: !!O.iA.accountid,
            }),
            { mutate: l } = (0, ke.n)({
              mutationFn: async (c) => {
                const d = await e.NominateForSteamAward(c, t);
                if (d != F.R)
                  throw new Error(`SteamAwards.Nominate failed with ${d}`);
              },
              onMutate: (c) =>
                s.setQueryData(o, (d) => [
                  ...(d ?? []).filter((m) => m.category_id != t),
                  { category_id: t, appid: c },
                ]),
              onError: () => s.invalidateQueries({ queryKey: o }),
            });
          return {
            unNominatedAppID: a?.find((c) => c.category_id == t)?.appid,
            bAnswered: a != null || !O.iA.accountid || !r,
            Nominate: l,
          };
        }
        function Mn(t, e) {
          const s = (0, Fe.jE)(),
            o = Vn(O.iA.accountid),
            { data: a, isPending: r } = (0, Pe.I)({
              queryKey: o,
              queryFn: async () => await e.GetMySteamAwardVotes(),
              enabled: !!O.iA.accountid,
            }),
            { mutate: l } = (0, ke.n)({
              mutationFn: async (c) => {
                const d = await e.SetSteamAwardVote(c, t);
                if (d != F.R)
                  throw new Error(`StoreSales.SetVote failed with ${d}`);
              },
              onMutate: (c) =>
                s.setQueryData(o, (d) => [
                  ...(d ?? []).filter((m) => m.voteid != t),
                  { voteid: t, appid: c },
                ]),
              onError: () => s.invalidateQueries({ queryKey: o }),
            });
          return {
            unVotedAppID: a?.find((c) => c.voteid == t)?.appid,
            bAnswered: a != null || !O.iA.accountid || !r,
            Vote: l,
          };
        }
        var Un = i(89926),
          R = i(39905),
          oe = i(40358),
          ut = i(21721),
          mt = i(1880),
          On = i(12247),
          A = i.n(On);
        function pt(t) {
          return `${O.TS.MEDIA_CDN_URL}${wn}${t}`;
        }
        function ht(t) {
          const {
              strMainTitle: e,
              subtitle: s,
              headerText: o,
              headerContent: a,
              children: r,
              footer: l,
            } = t,
            c = {
              backgroundColor: jn,
              backgroundImage: `url( ${pt("header_notrophy.webp")} )`,
              color: Ln,
            };
          return (0, n.jsxs)("div", {
            style: c,
            className: (0, S.A)(A().SteamAwardContainer, H().PartnerEventFont),
            children: [
              (0, n.jsxs)("div", {
                className: A().SteamAwardHeader,
                children: [
                  (0, n.jsx)("img", {
                    className: A().SteamAwardHeaderImage,
                    src: pt("trophy_220.png?v=1"),
                    alt: "",
                  }),
                  (0, n.jsxs)("div", {
                    className: A().SteamAwardMainCtn,
                    children: [
                      (0, n.jsx)("div", {
                        className: A().SteamAwardMainTitle,
                        children: e,
                      }),
                      s,
                      (0, n.jsx)("div", {
                        className: A().SteamAwardHeaderText,
                        children: o,
                      }),
                      a,
                    ],
                  }),
                ],
              }),
              r,
              !!l &&
                (0, n.jsx)("div", {
                  className: A().SteamAwardLinkToNominationPage,
                  children: l,
                }),
            ],
          });
        }
        function vt(t) {
          return `${O.TS.STORE_BASE_URL}steamawards/${t ? "nominations/" : ""}`;
        }
        function ze() {
          return (0, n.jsx)(Ce.t, {
            className: A().SteamAwardContainer,
            size: "medium",
            position: "center",
            string: R.Z.Localize("#Loading"),
          });
        }
        function gt(t) {
          const { elDialogElement: e, fnShowLogonDialog: s } = (0, Un.l)(),
            [o, a, r] = (0, Le.uD)();
          return {
            elDialogElement: (0, n.jsxs)(n.Fragment, {
              children: [
                e,
                (0, n.jsx)(Re.E, {
                  active: o,
                  children: (0, n.jsx)(Fn, { bVote: t, closeModal: r }),
                }),
              ],
            }),
            BCanTakeAction: () =>
              O.iA.logged_in ? (O.iA.is_limited ? (a(), !1) : !0) : (s(), !1),
          };
        }
        function Fn(t) {
          const { bVote: e, closeModal: s } = t;
          return (0, n.jsx)(mt.o0, {
            strTitle: R.Z.Localize("#Informational_Message"),
            onCancel: s,
            onOK: s,
            bAlertDialog: !0,
            children: (0, n.jsx)("div", {
              children: R.Z.LocalizeReact(
                e
                  ? "#SteamAward_Vote_LimitedAccount"
                  : "#SteamAward_Nominate_LimitedAccount",
                (0, n.jsx)("a", {
                  href: `${O.TS.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
                  target: O.TS.IN_CLIENT ? void 0 : "_blank",
                  rel: "noreferrer",
                  children: R.Z.Localize("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        }
        function ft(t) {
          const {
              strLocTokenInfix: e,
              unCurrentAppID: s,
              unNewAppID: o,
              fnOnConfirm: a,
              closeModal: r,
            } = t,
            { data: l } = (0, oe.J$)({ appid: s }),
            { data: c } = (0, oe.J$)({ appid: o }),
            { data: d } = (0, oe.lv)({ appid: s }),
            { data: m } = (0, oe.lv)({ appid: o }),
            g = d ? (0, ut.b0)(d, "small_capsule") : void 0,
            j = m ? (0, ut.b0)(m, "small_capsule") : void 0;
          return (0, n.jsx)(mt.o0, {
            modalClassName: A().SteamAwardConflictModal,
            strTitle: R.Z.Localize(
              e == "Vote"
                ? "#SteamAward_VoteConflictWarning_Title"
                : "#SteamAward_NominationConflictWarning_Title",
            ),
            closeModal: r,
            onOK: a,
            onCancel: r,
            children: (0, n.jsxs)("div", {
              className: A().ConflictBody,
              children: [
                R.Z.LocalizeReact(
                  e == "Vote"
                    ? "#SteamAward_VoteConflictWarning_Explanation"
                    : "#SteamAward_NominationConflictWarning_Explanation",
                  (0, n.jsx)("span", {
                    className: A().SteamAwardModalGameTitle,
                    children: l?.name,
                  }),
                  (0, n.jsx)("span", {
                    className: A().SteamAwardModalGameTitle,
                    children: c?.name,
                  }),
                ),
                g && j
                  ? (0, n.jsxs)("div", {
                      className: A().NominationSwitchCtn,
                      children: [
                        (0, n.jsx)("img", { src: g, alt: "" }),
                        "\u2192",
                        (0, n.jsx)("img", { src: j, alt: "" }),
                      ],
                    })
                  : (0, n.jsx)(Ce.t, {
                      size: "small",
                      position: "center",
                      string: R.Z.Localize("#Loading"),
                    }),
              ],
            }),
          });
        }
        function kn(t) {
          const { unAppID: e, widget: s, actions: o, bNominationsOpen: a } = t,
            r = s.rgCategories[0],
            { data: l } = (0, oe.J$)({ appid: e }),
            {
              unNominatedAppID: c,
              bAnswered: d,
              Nominate: m,
            } = _n(r.eCategoryID, o),
            { elDialogElement: g, BCanTakeAction: j } = gt(!1),
            [W, T, V] = (0, Le.uD)();
          if (!s.bNominationsLive) return null;
          if (!d) return (0, n.jsx)(ze, {});
          const x = (0, se.NT)(vt(!0)),
            f = c == e,
            M = s.rgCategories.length == 1,
            P = a && !r.bLaborOfLove,
            K = (X) => {
              if (!(!X || !j())) {
                if (c && c != e) {
                  T();
                  return;
                }
                m(e);
              }
            };
          return (0, n.jsxs)(ht, {
            strMainTitle: R.Z.Localize("#SteamAwards_EventMainTitle"),
            subtitle: (0, n.jsxs)("div", {
              className: A().SteamAwardSubTitle,
              children: [
                a
                  ? R.Z.Localize("#SteamAwards_EventCallToAction")
                  : R.Z.Localize("#SteamAwards_EventVotingDateTeaser", Nn()),
                a &&
                  (0, n.jsxs)("a", {
                    href: x,
                    className: A().SteamAwardLearnMore,
                    children: [
                      "(",
                      R.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
                      ")",
                    ],
                  }),
              ],
            }),
            headerText: a
              ? M
                ? R.Z.Localize(
                    "#SteamAwards_EventNominateGamePrompt_Long",
                    l?.name ?? "",
                  )
                : (0, n.jsx)("a", {
                    className: A().LinkText,
                    href: x,
                    children: R.Z.Localize(
                      "#SteamAwards_EventNominateGamePrompt_NoCategory",
                      l?.name ?? "",
                    ),
                  })
              : R.Z.Localize("#SteamAwards_Event_NominationsClosed"),
            footer:
              P &&
              (0, n.jsx)("a", {
                href: x,
                children: R.Z.Localize(
                  "#SteamAwards_EventNominationAlternativeLinkText",
                ),
              }),
            children: [
              !!(M && (a || f)) &&
                (0, n.jsx)("div", {
                  className: (0, S.A)(
                    A().SteamAwardNominationWidget,
                    A().SteamAwardVoteWidget,
                  ),
                  children: (0, n.jsxs)("div", {
                    className: A().NominateCtn,
                    children: [
                      (0, n.jsx)("div", {
                        style: { background: lt },
                        className: (0, S.A)(
                          A().SteamAwardNominateButton,
                          f && A().Nominated,
                        ),
                        children: (0, n.jsx)(G.Yh, {
                          controlled: !0,
                          className: (0, S.A)(
                            A().SteamAwardVoteCheckBox,
                            f && A().Nominated,
                          ),
                          checked: f,
                          onChange: K,
                          disabled: f,
                          color: "#FFFFFF",
                          highlightColor: "white",
                          label: (0, n.jsx)("div", {
                            className: A().SteamAwardCategoryTitle,
                            children: R.Z.Localize(
                              f
                                ? "#SteamAwards_NominateWidget_CTA_PastTense"
                                : "#SteamAwards_NominateWidget_CTA",
                              r.strTitle,
                            ),
                          }),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: A().SteamAwardCategoryDesc,
                        children: r.strDescription,
                      }),
                    ],
                  }),
                }),
              g,
              (0, n.jsx)(Re.E, {
                active: W,
                children: (0, n.jsx)(ft, {
                  strLocTokenInfix: "Nomination",
                  unCurrentAppID: c,
                  unNewAppID: e,
                  fnOnConfirm: () => m(e),
                  closeModal: V,
                }),
              }),
            ],
          });
        }
        function Hn(t) {
          const {
              unAppID: e,
              widget: s,
              actions: o,
              bVotesOpen: a,
              bHideCategoryDescriptions: r,
            } = t,
            { data: l } = (0, oe.J$)({ appid: e }),
            c = (0, se.NT)(vt(!1));
          return (0, n.jsx)(ht, {
            strMainTitle: R.Z.Localize("#SteamAwards_EventMainTitleCombined"),
            headerText: a
              ? R.Z.Localize(
                  "#SteamAwards_EventVoteForGamePrompt",
                  l?.name ?? "",
                )
              : (0, n.jsx)("a", {
                  href: c,
                  className: A().LinkText,
                  children: R.Z.Localize("#SteamAwards_Event_VotesClosed"),
                }),
            headerContent: (0, n.jsx)("div", {
              className: A().AwardCategoriesCtn,
              children: s.rgCategories.map((d) =>
                (0, n.jsx)(
                  zn,
                  {
                    unAppID: e,
                    category: d,
                    actions: o,
                    bVotesOpen: a,
                    bHideDescription: r,
                  },
                  d.eCategoryID,
                ),
              ),
            }),
            footer: (0, n.jsx)("a", {
              href: c,
              children: R.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
            }),
          });
        }
        function zn(t) {
          const {
              unAppID: e,
              category: s,
              actions: o,
              bVotesOpen: a,
              bHideDescription: r,
            } = t,
            { unVotedAppID: l, bAnswered: c, Vote: d } = Mn(s.eCategoryID, o),
            { elDialogElement: m, BCanTakeAction: g } = gt(!0),
            [j, W, T] = (0, Le.uD)(),
            V = l == e;
          if (!a && !V) return null;
          const x = () => {
            if (!(!c || !g())) {
              if (l && l != e) {
                W();
                return;
              }
              d(e);
            }
          };
          return (0, n.jsxs)("div", {
            style: { backgroundColor: lt },
            className: A().SteamAwardVoteWidget,
            children: [
              (0, n.jsxs)("div", {
                className: A().SteamAwardVoteButtonArea,
                children: [
                  (0, n.jsx)("div", {
                    className: (0, S.A)(
                      A().SteamAwardCategoryTitle,
                      A().VotingTitle,
                    ),
                    children: s.strTitle,
                  }),
                  !r &&
                    (0, n.jsx)("div", {
                      className: A().SteamAwardCategoryDesc,
                      children: s.strDescription,
                    }),
                  V
                    ? (0, n.jsx)("button", {
                        className: A().SteamAwardVoteButtonSubmitted,
                        children: (0, n.jsx)("span", {
                          className: A().SteamAwardVoteButtonText,
                          children: R.Z.Localize(
                            "#SteamAward_VoteButton_VotedText",
                          ),
                        }),
                      })
                    : (0, n.jsx)("button", {
                        className: A().SteamAwardVoteButton,
                        onClick: x,
                        children: (0, n.jsx)("span", {
                          className: A().SteamAwardVoteButtonText,
                          children: R.Z.Localize(
                            "#SteamAward_VoteButton_PromptText",
                          ),
                        }),
                      }),
                ],
              }),
              m,
              (0, n.jsx)(Re.E, {
                active: j,
                children: (0, n.jsx)(ft, {
                  strLocTokenInfix: "Vote",
                  unCurrentAppID: l,
                  unNewAppID: e,
                  fnOnConfirm: () => d(e),
                  closeModal: T,
                }),
              }),
            ],
          });
        }
        var De = i(35038),
          Co = i(27386),
          Wn = i(98609),
          St = i(19619),
          Do = i(97983);
        const yo = 2640290,
          xo = 3334340,
          To = null,
          Bo = 2215130;
        let We;
        function ge() {
          return (
            We ||
              (We = (0, at.Fd)("steam_awards_config", "application_config")),
            We
          );
        }
        const Kn = v.createContext(null);
        function At(t) {
          const e = (0, Ge.KV)();
          return (0, Pe.I)({
            queryKey: [`SteamAwardDefs_${t}`],
            queryFn: async () => {
              const s = De.w.Init(J.cD);
              return (
                s.Body().set_sale_appid(t),
                s.Body().set_language(Wn.TS.LANGUAGE),
                (await J.zF.GetVoteDefinitions(e, s)).Body().toObject()
              );
            },
            initialData: () => ge()?.definitions,
            enabled: t > 0,
          });
        }
        async function Et(t) {
          const e = De.w.Init(J.Dp);
          return (
            (await J.AH.GetUserNominations(t, e)).Body().toObject()
              ?.nominations ?? []
          );
        }
        function Ct() {
          const t = useActiveServiceTransport();
          return useQuery({
            queryKey: [`SteamAwardNominations_${UserConfig.accountid}`],
            queryFn: () => Et(t),
            initialData: () => ge()?.user_nominations?.nominations,
            enabled: UserConfig.logged_in,
          });
        }
        function Io(t) {
          const e = Ct();
          return e.isLoading
            ? { bLoadingNominationForCategory: !0 }
            : {
                currentNomination: e.data?.find((s) => s.category_id == t),
                bLoadingNominationForCategory: !1,
              };
        }
        function Dt() {
          return [`SteamAwardBadgeProgress_${UserConfig.accountid}`];
        }
        function wo(t) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: Dt(),
            queryFn: async () => {
              const s = CProtoBufMsg.Init(
                CPlayer_GetCommunityBadgeProgress_Request,
              );
              return (
                s.Body().set_badgeid(t),
                s.Body().set_steamid(UserConfig.steamid),
                (await PlayerService.GetCommunityBadgeProgress(e, s))
                  .Body()
                  .toObject()
              );
            },
            initialData: () => ge()?.badge_progress,
            enabled: UserConfig.logged_in,
          });
        }
        function No(t) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: [`SteamAwardSuggestions_${t}`],
            queryFn: async () => {
              const s = CProtoBufMsg.Init(
                CSteamAwards_GetNominationRecommendations_Request,
              );
              return (
                s.Body().set_category_id(t),
                (await SteamAwardsService.GetNominationRecommendations(e, s))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
          });
        }
        function Zn(t, e) {
          t.setQueryData([`SteamAwardNominations_${UserConfig.accountid}`], e);
        }
        async function yt(t, e, s, o) {
          const a = De.w.Init(J.wz);
          a.Body().set_category_id(s),
            a.Body().set_source(o),
            a.Body().set_nominated_id(e);
          const r = await J.AH.Nominate(t, a);
          return (
            r.BSuccess() ||
              console.warn(`Failed to nominate app: ${r.GetEResult()}`),
            [r.GetEResult(), r.Body().toObject()]
          );
        }
        function jo(t, e, s, o, a) {
          const r = useActiveServiceTransport(),
            l = useQueryClient();
          return useMutation({
            mutationFn: () => yt(r, t, e, s),
            onSuccess: ([c, d]) => {
              c == k_EResultOK
                ? (Zn(l, d.nominations),
                  window.setTimeout(
                    () => l.invalidateQueries({ queryKey: Dt() }),
                    1e3,
                  ),
                  a && a())
                : o && o(c);
            },
            onError: () => {
              o && o();
            },
          });
        }
        async function Qn(t, e, s) {
          let o = {
            cc: Config.COUNTRY,
            l: Config.LANGUAGE,
            realm: ESteamRealm.k_ESteamRealmGlobal,
            origin: self.origin,
            f: "jsonfull",
            term: t.replace(" ", "+"),
            require_type: "game",
            is_released_somewhere: 1,
            excluded_tags: CDynamicUserStore.Get().GetExcludedTagsSortedByID(),
            excluded_content_descriptors:
              CDynamicUserStore.Get().ExcludedContentDescriptor,
            excluded_apps: s,
          };
          e.release_date_max &&
            (o.release_date_max = new Date(
              e.release_date_max * 1e3,
            ).toISOString()),
            e.release_date_min &&
              (o.release_date_min = new Date(
                e.release_date_min * 1e3,
              ).toISOString()),
            e.flag == EVoteDefinitionFlag.k_EVoteDefinitionFlag_OnlyVR &&
              (o.vrsupport = 1),
            e.flag == EVoteDefinitionFlag.k_EVoteDefinitionFlag_SteamDeck &&
              (o.steam_deck_compat_categories = [
                ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Unknown,
                ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Playable,
                ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Verified,
              ]);
          const a = `${Config.STORE_BASE_URL}search/suggest`;
          return (
            (await axios.get(a, { params: o, withCredentials: !0 })).data ?? []
          );
        }
        function Lo(t, e, s) {
          return useQuery({
            queryKey: [t, e.voteid, s],
            queryFn: () => Qn(t, e, s),
            staleTime: 1 / 0,
          });
        }
        function Ro() {
          const t = Ct();
          return t.data ? t.data.map((e) => e.appid) : [];
        }
        async function xt(t, e) {
          const s = CProtoBufMsg.Init(
            CSteamAwards_GetNominationShareLink_Request,
          );
          s.Body().set_generate_new(e);
          const o = await SteamAwardsService.GetNominationShareLink(t, s);
          return (
            o.BSuccess() ||
              console.warn(
                `Failed to GetNominationShareLink: ${o.GetEResult()}`,
              ),
            [o.GetEResult(), o.Body().toObject()]
          );
        }
        function Po() {
          const t = useActiveServiceTransport();
          return useQuery({
            queryKey: [`GetNominationShareLink_${UserConfig.accountid}`],
            queryFn: async () => xt(t, !1),
            initialData: () => [k_EResultOK, ge()?.share_link],
            staleTime: 1 / 0,
            enabled: UserConfig.logged_in,
          });
        }
        function Go() {
          const t = useActiveServiceTransport(),
            e = useQueryClient();
          return useMutation({
            mutationFn: () => xt(t, !0),
            onSuccess: ([s, o]) => {
              s == k_EResultOK &&
                e.setQueryData(
                  [`GetNominationShareLink_${UserConfig.accountid}`],
                  [s, o],
                );
            },
          });
        }
        async function Tt(t, e, s, o) {
          const a = De.w.Init(J.yX);
          a.Body().set_voteid(s),
            a.Body().set_appid(e),
            a.Body().set_sale_appid(o);
          const r = await J.zF.SetVote(t, a);
          return (
            r.BSuccess() ||
              console.warn(
                `Failed to set vote for app (${e}): ${r.GetEResult()}`,
              ),
            [r.GetEResult(), r.Body().toObject()]
          );
        }
        function bo(t, e, s) {
          const o = useActiveServiceTransport(),
            a = useQueryClient();
          return useMutation({
            mutationFn: () => Tt(o, t, e, s),
            onSuccess: ([r, l]) => {
              r == k_EResultOK &&
                a.setQueryData(
                  [`SteamAwardUserVotes_${UserConfig.accountid}`],
                  l.user_votes,
                );
            },
          });
        }
        async function Bt(t, e) {
          const s = De.w.Init(J.qX);
          s.Body().set_sale_appid(e);
          const o = await J.zF.GetUserVotes(t, s);
          return (
            o.BSuccess() ||
              console.warn(`Failed to get votes for user: ${o.GetEResult()}`),
            o.Body().toObject()?.user_votes
          );
        }
        function Yn(t) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: [`SteamAwardUserVotes_${UserConfig.accountid}`],
            queryFn: () => Bt(e, t),
            initialData: () => ge()?.user_votes,
            enabled: UserConfig.logged_in,
          });
        }
        function Vo(t, e) {
          const s = Yn(t);
          return useMemo(
            () => s.data?.find((o) => o.voteid == e)?.appid,
            [e, s.data],
          );
        }
        function Xn(t) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: [`SteamAwardItemDefs_${t}`],
            queryFn: async () => {
              const s = CProtoBufMsg.Init(
                CQuest_GetCommunityItemDefinitions_Request,
              );
              return (
                s.Body().set_appid(t),
                s.Body().set_language(Config.LANGUAGE),
                (await QuestService.GetCommunityItemDefinitions(e, s))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
            initialData: () => ge()?.item_definitions,
          });
        }
        function _o(t, e) {
          const s = Xn(t),
            o = At(t);
          if (!s.data || !o.data) return null;
          const a = o.data.votes.find((r) => r.voteid == e);
          return s.data.item_definitions?.find(
            (r) => r.item_type == a.item_type,
          );
        }
        function Mo() {
          return React.useContext(Kn).yearStyles;
        }
        var It = i(28515);
        function Uo(t) {
          return UserConfig.logged_in
            ? UserConfig.is_limited
              ? (ShowModalDialog(
                  jsx(LimitAccountFeatureNotSupportedDialog, {
                    strTokenOverride: t
                      ? "#SteamAward_Vote_LimitedAccount"
                      : "#SteamAward_Nominate_LimitedAccount",
                  }),
                  window,
                ),
                !1)
              : !0
            : (ShowModalDialog(
                jsx(GenericConfirmDialog, {
                  strTitle: Localize("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: Localize(
                    "#EventDisplay_Share_NotLoggedIn_Description",
                  ),
                  strOKButtonText: Localize("#MobileLogin_SignIn"),
                  onOK: StoreRedirectLogin,
                }),
                window,
              ),
              !1);
        }
        function wt(t) {
          const e = (0, Ge.KV)();
          return (0, v.useMemo)(
            () => ({
              GetMySteamAwardNominations: () => Et(e),
              NominateForSteamAward: async (s, o) => {
                if (t) return F.R;
                const [a] = await yt(e, s, o, J.Ji.mP);
                return a;
              },
              GetMySteamAwardVotes: () => Bt(e, _e),
              SetSteamAwardVote: async (s, o) => {
                if (t) return F.R;
                const [a] = await Tt(e, s, o, _e);
                return a;
              },
            }),
            [e, t],
          );
        }
        const Ke = [];
        function Nt(t, e, s) {
          const o = t.some(He) || e.some(He),
            a = At(o ? _e : void 0);
          return o
            ? a.data
              ? { widgets: Gn(a.data.votes ?? [], t, e, s), bLoading: !1 }
              : { bLoading: a.isPending }
            : { bLoading: !1 };
        }
        function Jn(t, e) {
          return e ? { ...t, bNominationsLive: !0 } : t;
        }
        function jt(t) {
          return !!t && h.TS.EUNIVERSE == I.wLO;
        }
        function $n(t) {
          const { event: e, previewMode: s } = t,
            [o, a] = (0, ue.q3)(() => [e.GetSteamAwardCategory(), e.appid]),
            r = (0, It.n)(),
            { widgets: l, bLoading: c } = Nt([o], Ke, r),
            d = wt(jt(s));
          if (c) return (0, n.jsx)(ze, {});
          if (!l?.nomination) return null;
          const m =
            e.BIsEventActionEnabled(r) ||
            r < e.GetStartTimeAndDateUnixSeconds();
          return (0, n.jsx)(kn, {
            unAppID: a,
            actions: d,
            widget: Jn(l.nomination, !!s),
            bNominationsOpen: m,
          });
        }
        function Lt(t) {
          const {
              appID: e,
              voteCategories: s,
              bIsEventActionEnabled: o,
              previewMode: a,
              bRenderFromStorePage: r,
            } = t,
            l = (0, It.n)(),
            { widgets: c, bLoading: d } = Nt(Ke, s ?? Ke, l),
            m = wt(jt(a));
          return d
            ? (0, n.jsx)(ze, {})
            : c?.vote
              ? (0, n.jsx)(Hn, {
                  unAppID: e,
                  widget: c.vote,
                  actions: m,
                  bVotesOpen: o || !!a,
                  bHideCategoryDescriptions: r,
                })
              : null;
        }
        function Oo(t) {
          const e = GetConfigJSON(
            "steamwawards",
            "application_config",
          )?.votecategories;
          return e
            ? jsx(Lt, {
                appID: t.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: e,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${t.appID}`,
              ),
              null);
        }
        var qn = i(90316),
          Z = i.n(qn),
          Rt = i(13465),
          Pt = i(53107),
          es = i(5552),
          ts = i(8323),
          Y = i(54963),
          ns = i(17009),
          p = i.n(ns),
          ss = i(48647),
          os = i(88812),
          as = i(26589),
          Gt = i(10142),
          rs = i(47689),
          is = i(24237),
          ls = i(95414);
        function bt(t) {
          const {
              appId: e,
              clanId: s,
              strCapsuleUrl: o,
              strGroupTitle: a,
              strExtraBannerGroupStyle: r,
              actions: l,
            } = t,
            c = e !== k.DU,
            d = v.useMemo(() => (e ? { appid: e } : { creatorid: s }), [e, s]),
            m = (0, n.jsx)("img", { className: p().AppBannerLogo, src: o });
          return (0, h.Qn)()
            ? null
            : (0, n.jsxs)("div", {
                className: p().AppBannerCtn,
                children: [
                  (0, n.jsx)("div", {
                    className: p().AppBannerBackground,
                    style: { backgroundImage: `url(${o})` },
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, S.A)(p().AppBannerGroup, r),
                    children: [
                      c
                        ? e
                          ? (0, n.jsx)(is.Q, {
                              id: d,
                              className: p().AppBannerLogoCtn,
                              hoverProps: {
                                direction: "overlay",
                                style: { minWidth: "320px" },
                              },
                              children: m,
                            })
                          : (0, n.jsx)(ls.u, {
                              id: d,
                              hoverClassName: p().AppBannerLogoCtn,
                              children: m,
                            })
                        : (0, n.jsxs)("div", {
                            className: p().AppBannerLogoCtn,
                            children: [m, " "],
                          }),
                      (0, n.jsxs)("div", {
                        className: p().AppBannerTitle,
                        children: [
                          a,
                          (0, n.jsx)("div", {
                            className: p().NewsHubSubTitle,
                            children: (0, u.we)(
                              "#EventDisplay_NewsHubSubtitle",
                            ),
                          }),
                        ],
                      }),
                      c &&
                        (0, n.jsx)("div", {
                          className: p().AppBannerLinks,
                          children: l,
                        }),
                    ],
                  }),
                ],
              });
        }
        function Fo(t) {
          const { appid: e, clanAccountID: s } = t,
            o = React.useMemo(() => (e ? { appid: e } : void 0), [e]),
            { data: a } = useStoreItemDefaultInfo(o),
            { data: r } = useStoreItemAssets(o),
            { data: l } = useClanInfoByAccountID(e ? void 0 : s),
            { bIsOwned: c } = useIsStoreItemOwned(o),
            d = e
              ? r
                ? StoreAssetURL(r, "header")
                : void 0
              : l?.avatar_full_url,
            m = e ? a?.name : l?.group_name;
          return jsx(bt, {
            appId: e ?? 0,
            clanId: s,
            strCapsuleUrl: d,
            strGroupTitle: m,
            strExtraBannerGroupStyle: e ? void 0 : styles.ClanBanner,
            actions: jsxs(Fragment, {
              children: [
                !!(e && !c) &&
                  jsx("div", {
                    className: styles.HeaderWishlistButton,
                    children: jsx(WishlistButton, {
                      appid: e,
                      bIsFree: !!a?.is_free,
                      bIsComingSoon: !!a?.is_coming_soon,
                      className: classnames(
                        styles.ActionButton,
                        styles.WishlistBtnShort,
                      ),
                    }),
                  }),
                jsx("div", {
                  className: styles.HeaderFollowButton,
                  children: e
                    ? jsx(AppFollowButton, {
                        appid: e,
                        className: styles.HeaderButtonDark,
                      })
                    : jsx(CuratorFollowButton, {
                        clanAccountID: s,
                        className: styles.HeaderButtonDark,
                      }),
                }),
              ],
            }),
          });
        }
        var Vt = i(1e3),
          cs = i(64774);
        function _t(t, e) {
          const [s, o] = (0, v.useState)({}),
            a = (0, rs.m)("useEventHeaderData");
          return (
            (0, v.useEffect)(() => {
              if (t)
                Gt.A.Get()
                  .QueueAppRequest(t, {
                    include_assets: !0,
                    include_screenshots: !0,
                  })
                  .then(() => {
                    const r = Gt.A.Get().GetApp(t);
                    r &&
                      !a?.token?.reason &&
                      o({
                        strCapsuleUrl: r.GetAssets().GetHeaderURL(),
                        strGroupTitle: r.GetName(),
                        strStoreURL:
                          (h.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          r.GetStorePageURL(),
                        strCommunityURL:
                          (h.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          r.GetCommunityPageURL(),
                        strForumURL:
                          (h.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          r.GetCommunityDiscussionForumsURL(),
                      });
                  });
              else if (e) {
                const r = Q.b.InitFromClanID(e);
                pe.ac.LoadClanInfoForClanSteamID(r).then((l) => {
                  a?.token?.reason ||
                    o({
                      strCapsuleUrl: l.avatar_full_url,
                      strGroupTitle: l.group_name,
                      strStoreURL:
                        (h.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        h.TS.STORE_BASE_URL +
                        "curator/" +
                        e +
                        "/",
                      strCommunityURL:
                        (h.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        h.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        r.ConvertTo64BitString(),
                      strExtraBannerGroupStyle: p().ClanBanner,
                    });
                });
              }
            }, [t, a?.token?.reason, e]),
            s
          );
        }
        const ko = {};
        function ds(t) {
          const { appId: e, clanId: s, bShowRSSFeed: o } = t,
            { strStoreURL: a, strCommunityURL: r, strForumURL: l } = _t(e, s),
            c = (0, h.Y2)(),
            d =
              h.TS.STORE_BASE_URL +
              "feeds/" +
              (0, Ee.LJ)() +
              (e ? "/app/" + e : "/group/" + s) +
              "/?cc=" +
              h.TS.COUNTRY +
              "&l=" +
              h.TS.LANGUAGE,
            { data: m } = (0, as.hM)(s),
            g = !!(m?.can_edit || m?.support_user),
            j = St.Fm.Get().BOwnsApp(e),
            W = (0, v.useMemo)(() => {
              const T = [];
              return (
                h.TS.IN_CLIENT &&
                  j &&
                  T.push({
                    label: (0, u.we)("#EventDisplay_ViewInLibrary_ExtraShort"),
                    data: "steam://nav/games/details/" + e,
                  }),
                T.push({
                  label: (0, u.we)("#EventDisplay_ViewStorePage_ExtraShort"),
                  data: (0, se.k2)(a),
                }),
                c ||
                  (T.push({
                    label: (0, u.we)(
                      "#EventDisplay_ViewCommunityPage_ExtraShort",
                    ),
                    data: (0, se.k2)(r),
                  }),
                  l &&
                    T.push({
                      label: (0, u.we)("#EventDisplay_ViewForum_ExtraShort"),
                      data: (0, se.k2)(l),
                    }),
                  o &&
                    T.push({
                      label: (0, n.jsxs)("div", {
                        className: p().RssRow,
                        children: [
                          (0, n.jsx)(E.ZPc, {}),
                          (0, u.we)("#EventDisplay_RSSFeed_ExtraShort"),
                        ],
                      }),
                      data: d,
                    })),
                g &&
                  T.push({
                    label: (0, u.we)("#EventDisplay_Admin_ExtraShort"),
                    data: (0, Ee.Hx)(e, Q.b.InitFromClanID(s), "admin"),
                  }),
                T
              );
            }, [j, a, c, g, r, l, o, d, e, s]);
          return (0, n.jsx)(G.m, {
            strDefaultLabel: (0, u.we)(
              "#EventDisplay_LinksDropDown_ExtraShort",
            ),
            strClassName: p().AppBannerLinkDD,
            strDropDownButtonClassName: p().AppBannerLinkDDButton,
            strDropDownMenuCtnClass: p().AppBannerLinkDDContainer,
            contextMenuPositionOptions: { bMatchWidth: !1 },
            arrowClassName: p().DDButtonArrow,
            rgOptions: W,
            onChange: (T, V, x) => (0, Pt.EP)(x, T.data),
          });
        }
        const us = (0, ee.PA)((t) => {
          const { appId: e, clanId: s } = t,
            {
              strCapsuleUrl: o,
              strGroupTitle: a,
              strExtraBannerGroupStyle: r,
            } = _t(e, s),
            l = (0, v.useMemo)(
              () => (e ? { appid: e } : { creatorid: s }),
              [e, s],
            ),
            { data: c } = (0, oe.J$)(l),
            d = St.Fm.Get().BOwnsApp(e);
          return (0, n.jsx)(bt, {
            appId: e,
            clanId: s,
            strCapsuleUrl: o,
            strGroupTitle: a,
            strExtraBannerGroupStyle: r,
            actions: (0, n.jsxs)(n.Fragment, {
              children: [
                !!(!d && e) &&
                  (0, n.jsx)("div", {
                    className: p().HeaderWishlistButton,
                    children: (0, n.jsx)(cs._, {
                      appid: e,
                      bIsFree: !!c?.is_free,
                      bIsComingSoon: !!c?.is_coming_soon,
                      className: (0, S.A)(
                        p().ActionButton,
                        p().WishlistBtnShort,
                      ),
                    }),
                  }),
                (0, n.jsx)("div", {
                  className: p().HeaderFollowButton,
                  children: e
                    ? (0, n.jsx)(Vt.do, {
                        appid: e,
                        className: p().HeaderButtonDark,
                      })
                    : (0, n.jsx)(Vt.of, {
                        clanAccountID: s,
                        className: p().HeaderButtonDark,
                      }),
                }),
                (0, n.jsx)(ds, { ...t }),
              ],
            }),
          });
        });
        function ms(t) {
          return (0, n.jsx)("div", {
            className: (0, S.A)(
              p().AppPartnerEventsBanner,
              "AppPartnerEventsBanner",
            ),
            children: (0, n.jsx)(us, { ...t }),
          });
        }
        var ps = i(6335),
          hs = i(14616),
          vs = i(54806),
          gs = i(1683),
          fs = i(98462),
          Ss = i.n(fs);
        function As(t) {
          const { event: e } = t,
            s = (0, ue.q3)(() => e.jsondata?.referenced_appids || []),
            o = (0, hs.eG)(),
            a = (0, vs.E)({
              queries: s.map((c) => (0, oe.us)(o, { appid: c })),
              combine: (c) => ({
                bLoaded: c.every((d) => !d.isPending),
                data: c.map((d) => d.data),
              }),
            });
          if (!s.length || !a.bLoaded) return null;
          const r = a.data
              .flatMap((c) =>
                c?.store_url_path && c?.name
                  ? [`[url="${(0, nt._)(c)}"]${c.name}[/url]`]
                  : [],
              )
              .join((0, u.we)("#EventDisplay_ReferencedApps_Joiner")),
            l = (0, u.Yp)("#EventDisplay_ReferencedApps", s.length, r);
          return (0, n.jsx)("div", {
            className: Ss().ReferencedApps,
            children: (0, n.jsx)(gs.Zn, { text: l, event: e }),
          });
        }
        var Es = i(7967),
          Cs = i(16512),
          Mt = i(84676);
        function Ho(t) {
          const { bOn: e } = t;
          return jsx("div", {
            className: e ? sharedstyles.OnIndicator : sharedstyles.OffIndicator,
            children: Localize(e ? "#Dialog_On" : "#Dialog_Off"),
          });
        }
        function zo(t) {
          return CommunityConfig.IS_CREATOR_HOME
            ? jsx(Ds, { identifier: t.identifier })
            : CommunityConfig.IS_CURATOR
              ? jsx(ys, { identifier: t.identifier })
              : jsx(xs, { identifier: t.identifier });
        }
        function Ds(t) {
          const e = new CSteamID(CommunityConfig.CLANSTEAMID),
            { creatorHome: s } = useCreatorHome(e.GetAccountID());
          return !s || !s.BIsLoaded()
            ? null
            : jsx(Ze, {
                strURL: NavLink(s.GetCreatorHomeURL("developer")),
                strImgUrl: s.GetAvatarURLFullSize(),
                strName: s.GetName(),
              });
        }
        function ys(t) {
          const e = useClanInfoByVanity(CommunityConfig.VANITY_ID);
          return e
            ? jsx(Ze, {
                strURL: NavLink(
                  Config.COMMUNITY_BASE_URL +
                    "groups/" +
                    CommunityConfig.VANITY_ID,
                ),
                strImgUrl: e.avatar_full_url,
                strName: e.group_name,
              })
            : null;
        }
        function xs(t) {
          const [e] = useStoreItemCacheApp(CommunityConfig.APPID, {
            include_assets: !0,
            include_release: !0,
          });
          return e
            ? jsx(Ze, {
                strURL: NavLink(e.GetStorePageURL()),
                strImgUrl: e.GetAssets().GetSmallCapsuleURL(),
                strName: e.GetName(),
              })
            : null;
        }
        function Ze(t) {
          const { strURL: e, strImgUrl: s, strName: o } = t;
          return jsx("div", {
            className: sharedstyles.EventDashboardAppCtn,
            children: jsx("div", {
              className: sharedstyles.AppTitle,
              children: jsxs("a", {
                href: e,
                target: Config.IN_CLIENT ? void 0 : "_blank",
                children: [jsx("img", { src: s }), o],
              }),
            }),
          });
        }
        function Ts(t) {
          const { children: e } = t;
          return (0, h.Qn)() && !h.TS.IN_STEAMUI
            ? (0, n.jsx)(Es.Qg, {
                className: tt.GamepadOnlyScrollPanel,
                children: e,
              })
            : (0, n.jsx)(n.Fragment, { children: e });
        }
        var Bs = i(79590),
          C = i(3367),
          Ut = i(71421),
          Is = i(19890),
          ye = i.n(Is);
        function ws(t) {
          const { appid: e } = t;
          return (0, n.jsx)("div", {
            className: ye().AppSocialLinksCtn,
            children: (0, n.jsx)(Ns, { appid: e }),
          });
        }
        function Ns(t) {
          const { appid: e } = t,
            { data: s } = (0, oe.bg)({ appid: e });
          return !s || s.length == 0
            ? null
            : (0, n.jsx)(Ot, {
                strTitle: (0, u.we)("#EventDisplay_SocialTitle"),
                id: "" + e,
                rgSocialMedia: s,
              });
        }
        function js(t) {
          return useMemo(
            () =>
              t
                ? t.map((e) => {
                    const s = ConvertSocialMediaTextToEStoreLinkType(e.type);
                    return s == EStoreLinkType.k_EStoreLinkType_QQ ||
                      s == EStoreLinkType.k_EStoreLinkType_WeChat
                      ? { link_type: s, text: e.link }
                      : { link_type: s, url: e.link };
                  })
                : [],
            [t],
          );
        }
        function Wo(t) {
          const { gidClanEvent: e, rgSocial: s, bIsCreatorHomeEvent: o } = t,
            a = js(s);
          if (a.length == 0) return null;
          const r = o
            ? Localize("#EventDisplay_Sale_SocialTitle_Dev")
            : Localize("#EventDisplay_Sale_SocialTitle");
          return jsx(Ot, { strTitle: r, id: e, rgSocialMedia: a });
        }
        function Ot(t) {
          const { strTitle: e, id: s, rgSocialMedia: o } = t;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: (0, S.A)(
                  H().EventEditorTextTitle,
                  "EventEditorTextTitle",
                ),
                children: e,
              }),
              (0, n.jsx)(Rs, { id: s, rgSocialMedia: o }),
            ],
          });
        }
        const Ls = [
          C.jL.EK,
          C.jL.$3,
          C.jL.M0,
          C.jL.Ow,
          C.jL.Ib,
          C.jL.qe,
          C.jL.Lk,
        ];
        function Rs(t) {
          const { id: e, rgSocialMedia: s, className: o } = t,
            a = O.TS.EREALM === te.TU.k_ESteamRealmChina;
          return (0, n.jsx)("div", {
            className: (0, S.A)(ye().AppSocialLinks, o),
            children: s
              .filter((r) => !a || Ls.includes(r.link_type || C.jL.I0))
              .map((r) =>
                r.url
                  ? (0, n.jsx)(
                      Ps,
                      { social: r },
                      "app_social_link_" + e + "_" + r.link_type,
                    )
                  : (0, n.jsx)(
                      Gs,
                      { social: r },
                      "app_social_text_" + e + "_" + r.link_type + "_" + r.text,
                    ),
              ),
          });
        }
        function Ps(t) {
          const { social: e } = t;
          return e.url
            ? (0, n.jsx)("a", {
                href: (0, se.NT)(e.url, !0),
                target: O.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: (0, n.jsx)(Ut.he, {
                  toolTipContent: e.url,
                  children: (0, n.jsx)(Ft, { social: e }),
                }),
              })
            : null;
        }
        function Gs(t) {
          const { social: e } = t;
          return (0, n.jsxs)("div", {
            className: ye().AppSocialLinkWithText,
            children: [
              (0, n.jsx)(Ut.he, {
                toolTipContent: e.text,
                children: (0, n.jsx)(Ft, { social: e }),
              }),
              (0, n.jsx)("div", {
                className: ye().AppSocialText,
                children: e.text,
              }),
            ],
          });
        }
        function Ft(t) {
          const { social: e } = t;
          return (0, n.jsx)(Vs, {
            linkType: e.link_type || C.jL.I0,
            className: ye().AppSocialLinkIcon,
          });
        }
        const bs = {
          [C.jL.lQ]: E.agV,
          [C.jL.GO]: E.ZnA,
          [C.jL.jG]: E.oy,
          [C.jL.F7]: E.ofN,
          [C.jL.Eb]: E.Bki,
          [C.jL.EK]: E.$vK,
          [C.jL.M0]: E.$vK,
          [C.jL.$3]: E.$vK,
          [C.jL.a$]: E.OSJ,
          [C.jL.Ow]: E.nm_,
          [C.jL.Ib]: E.tIO,
          [C.jL.uw]: E.Vt2,
          [C.jL.sP]: E.Vgk,
          [C.jL.u5]: E.VSd,
          [C.jL.db]: E.ccb,
          [C.jL.Yu]: E.rNt,
          [C.jL.JN]: E.g$j,
          [C.jL.EM]: E.BQz,
          [C.jL.Or]: E.jdP,
          [C.jL.qe]: E.bKN,
          [C.jL.H5]: E.sDU,
          [C.jL.Xm]: E.MbF,
          [C.jL.DB]: E.emH,
          [C.jL.Lk]: E.Yoo,
        };
        function Vs(t) {
          const { linkType: e, ...s } = t,
            o = bs[e];
          return o ? (0, n.jsx)(o, { ...s }) : null;
        }
        var _s = i(41032),
          Ms = i(37589),
          Us = i(20169),
          Os = Object.defineProperty,
          Fs = Object.getOwnPropertyDescriptor,
          z = (t, e, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? Fs(e, s) : e, r = t.length - 1, l;
              r >= 0;
              r--
            )
              (l = t[r]) && (a = (o ? l(e, s, a) : l(a)) || a);
            return o && a && Os(e, s, a), a;
          };
        const ks = 56,
          Hs = 136,
          zs = v.lazy(() => i.e(68396).then(i.bind(i, 34169)));
        function Ws(t) {
          const [e, s] = (0, Mt.t7)(t.appid, { include_assets: !0 }),
            [o, a] = (0, pe.TB)(t.clanID);
          let r = "";
          return (
            t.appid
              ? (r = e?.GetAssets()?.GetCommunityIconURL() || "")
              : t.clanID && (r = a ? a.avatar_full_url : ""),
            (0, n.jsx)("div", {
              className: (0, S.A)(p().ScrollButton, p().GameArt, p().AnimIn),
              onClick: t.onAppIconClick,
              children: !!r && (0, n.jsx)("img", { src: r }),
            })
          );
        }
        let $ = class extends v.Component {
          m_loader = null;
          m_refPage = v.createRef();
          m_refContent = v.createRef();
          m_refScroll = v.createRef();
          m_refScrollAnchor = v.createRef();
          m_scrollAnimation = null;
          m_nTouchStartClientY;
          m_nPreviousRenderCount = 0;
          m_nCurrentRenderCount = 0;
          constructor(t) {
            super(t),
              !this.props.bShowOnlyInitialEvent &&
                this.props.initialEvent &&
                ((this.m_loader = new Me(this.props.partnerEventStore)),
                this.m_loader.InitAroundEvent(
                  this.props.initialEvent,
                  this.props.additionalParams,
                ));
          }
          FindCurrentlyViewedEventIndex() {
            if (!this.m_refContent.current || !this.m_refScroll.current)
              return -1;
            let e = this.m_refContent.current.children,
              s = this.GetScrollTopForComparison();
            for (let o = 0; o < e.length; o++) {
              let a = e[o],
                r = a.offsetTop,
                l = r + a.clientHeight;
              if (r <= s && l > s) return o;
            }
            return -1;
          }
          GetPaddingTop() {
            return this.props.showAppHeader ? Hs : ks;
          }
          GetScrollTopForComparison() {
            return Math.ceil(
              this.m_refScroll.current.scrollTop + this.GetPaddingTop() + 24,
            );
          }
          ScrollToEvent(t) {
            let e = this.m_refContent.current;
            if (!e || t < 0 || t >= e.children.length || this.m_scrollAnimation)
              return;
            let s = e.children[t].offsetTop - this.GetPaddingTop();
            this.ScrollToOffset(s);
          }
          ScrollToOffset(t) {
            let e = this.m_refScroll.current;
            if (!e) return;
            let s = {
              msDuration: 500,
              timing: "cubic-in-out",
              onComplete: this.OnScrollComplete,
            };
            (this.m_scrollAnimation = new es.JV(e, { scrollTop: t }, s)),
              this.m_scrollAnimation.Start();
          }
          ScrollToBottom() {
            this.m_refScroll.current &&
              this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
          }
          ScrollToNextEvent() {
            let t = this.m_loader.GetEvents(),
              e = this.FindCurrentlyViewedEventIndex() + 1;
            if (e >= t.length) {
              this.ScrollToBottom();
              return;
            }
            this.ScrollToEvent(e),
              e == t.length - 1 && this.m_loader.LoadMoreAtEnd();
          }
          ScrollToPrevEvent() {
            let t = this.FindCurrentlyViewedEventIndex(),
              e = t - 1;
            if (e < 0) {
              this.ScrollToOffset(0);
              return;
            }
            let s = this.m_refContent.current;
            if (s) {
              let o = s.children[t],
                a = o.offsetTop,
                r = a + o.clientHeight,
                l = this.GetScrollTopForComparison();
              (l = l - (r - a) * 0.3), a <= l && (e = t);
            }
            this.ScrollToEvent(e);
          }
          OnScrollComplete() {
            this.m_scrollAnimation = null;
          }
          Close() {
            if (this.props.closeModal) {
              this.props.closeModal();
              return;
            }
          }
          OnBackgroundClick(t) {
            t.currentTarget == t.target && this.Close();
          }
          OnKeyDown(t) {
            t.keyCode == N.zV && this.Close();
          }
          OnScroll(t) {
            if (this.props.bShowOnlyInitialEvent) return;
            let e = this.m_refScroll.current;
            if (!e) return;
            let s = e.clientHeight;
            e.scrollHeight - (e.scrollTop + s) <= s &&
              this.m_loader.LoadMoreAtEnd(),
              e.scrollTop <= s && this.m_loader.LoadMoreAtBeginning();
          }
          getSnapshotBeforeUpdate(t) {
            let e = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
            if (
              ((this.m_nPreviousRenderCount = this.m_nCurrentRenderCount), !e)
            )
              return null;
            let s = this.m_refScroll.current;
            if (!s || !this.m_refScrollAnchor.current) return null;
            let o = this.m_refScrollAnchor.current.GetDOM();
            return o ? o.offsetTop - s.scrollTop : null;
          }
          OnTouchStart(t) {
            t.touches.length == 1 &&
              (this.m_nTouchStartClientY = t.touches[0].clientY);
          }
          OnTouchMove(t) {
            if (!this.m_refScroll.current || t.touches.length == 0) return;
            const e = this.m_nTouchStartClientY - t.touches[0].clientY;
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(t, e);
          }
          OnWheel(t) {
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(t, t.deltaY);
          }
          SuppressUnwantedScrollEventsBecauseSafariIsDumb(t, e) {
            const s =
                ve.kD(t.target) && ve.id(this.m_refScroll.current, t.target),
              o = e < 0 && this.m_refScroll.current.scrollTop < 1,
              a =
                this.m_refScroll.current.scrollHeight -
                  this.m_refScroll.current.scrollTop <=
                this.m_refScroll.current.clientHeight,
              r = e > 0 && a;
            (!s || o || r) && t.cancelable && t.preventDefault();
          }
          SetGlobalHeaderHidden(t) {
            const e = document.getElementsByClassName("responsive_header");
            (0, ot.wT)(
              e.length <= 1,
              "Must have at most one responsive_header",
            ),
              e.length >= 1 && (e[0].style.display = t ? "none" : null);
          }
          SetFooterPinnedToBottom(t) {
            const e = document.getElementById("footer");
            e && (e.style.position = t ? "absolute" : null);
          }
          componentDidMount() {
            const t = this.m_refScroll.current;
            t && !ve.id(t, t.ownerDocument.activeElement) && t.focus();
            const e = this.m_refPage.current;
            e &&
              (e.addEventListener("touchstart", this.OnTouchStart),
              e.addEventListener("touchmove", this.OnTouchMove, {
                passive: !1,
              }),
              e.addEventListener("wheel", this.OnWheel, { passive: !1 })),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!0),
              this.SetFooterPinnedToBottom(!0);
          }
          componentDidUpdate(t, e, s) {
            if (s !== null) {
              let o = this.m_refScroll.current;
              o && !ve.id(o, o.ownerDocument.activeElement) && o.focus();
              let a = this.m_refScrollAnchor.current
                ? this.m_refScrollAnchor.current.GetDOM()
                : null;
              a && (o.scrollTop = a.offsetTop - s);
            }
          }
          componentWillUnmount() {
            const t = this.m_refPage.current;
            t &&
              (t.removeEventListener("touchstart", this.OnTouchStart),
              t.removeEventListener("touchmove", this.OnTouchMove),
              t.removeEventListener("wheel", this.OnWheel)),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!1),
              this.SetFooterPinnedToBottom(!1);
          }
          render() {
            const { initialEvent: t, bShowOnlyInitialEvent: e } = this.props,
              s = !t,
              o = s ? [] : e ? [t] : this.m_loader.GetEvents(),
              a = [];
            let r = this.props.appid,
              l = this.props.clanSteamID?.GetAccountID();
            for (const c of o) {
              const d = c.GID == this.props.initialEvent.GID,
                m = d;
              a.push(
                (0, n.jsx)(
                  Ht,
                  {
                    ref: d ? this.m_refScrollAnchor : null,
                    event: c,
                    emoticonStore: this.props.emoticonStore,
                    partnerEventStore: this.props.partnerEventStore,
                    disableReadTracking: d,
                    fnFilterImageURLsForKnownFailures:
                      this.props.fnFilterImageURLsForKnownFailures,
                    fnImageFailureCallback: this.props.fnImageFailureCallback,
                    bDisableBroadcastPlayer: !m,
                    className: this.props.eventClassName,
                  },
                  c.GID,
                ),
              ),
                r == null && (r = c.appid),
                l == null && (l = c.clanSteamID.GetAccountID());
            }
            return (
              (this.m_nCurrentRenderCount = a.length),
              (0, n.jsxs)(D.Z, {
                onCancelButton: this.props.closeModal,
                className: p().AppPartnerEventsPage,
                ref: this.m_refPage,
                children: [
                  this.props.showAppHeader &&
                    (0, n.jsx)(ms, { appId: r, clanId: l }),
                  (0, n.jsx)(D.Z, {
                    className: (0, S.A)(
                      p().AppPartnerEventsBody,
                      p().EndlessScroll,
                    ),
                    ref: this.m_refScroll,
                    onScroll: this.OnScroll,
                    onClick: this.OnBackgroundClick,
                    tabIndex: -1,
                    onKeyDown: this.OnKeyDown,
                    scrollIntoViewType: Us.Yo.NoTransformSparseContent,
                    children: s
                      ? (0, n.jsx)("div", {
                          className: p().NoEvents,
                          children: (0, u.we)("#EventDisplay_NoEventsToSee"),
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              className: (0, S.A)(
                                p().ControlSection,
                                !this.props.onAppIconClick && p().NoGameLink,
                                e && p().NoScrollArrows,
                              ),
                              children: (0, n.jsx)("div", {
                                className: p().ControlSectionWidth,
                                children: (0, n.jsxs)("div", {
                                  className: p().ControlSectionRightSide,
                                  children: [
                                    !!this.props.closeModal &&
                                      (0, n.jsx)("div", {
                                        className: (0, S.A)(
                                          p().CloseButton,
                                          p().AnimIn,
                                        ),
                                        onClick: this.Close,
                                        children: (0, n.jsx)(E.sED, {}),
                                      }),
                                    !e &&
                                      (0, n.jsx)("div", {
                                        className: (0, S.A)(
                                          p().ScrollButton,
                                          p().Up,
                                          p().AnimIn,
                                        ),
                                        onClick: this.ScrollToPrevEvent,
                                        children: (0, n.jsx)(E.V5W, {
                                          angle: 0,
                                        }),
                                      }),
                                    !e &&
                                      (0, n.jsx)("div", {
                                        className: (0, S.A)(
                                          p().ScrollButton,
                                          p().Down,
                                          p().AnimIn,
                                        ),
                                        onClick: this.ScrollToNextEvent,
                                        children: (0, n.jsx)(E.V5W, {
                                          angle: 180,
                                        }),
                                      }),
                                    this.props.onAppIconClick &&
                                      (0, n.jsx)(Ws, {
                                        appid: r,
                                        clanID: l,
                                        onAppIconClick:
                                          this.props.onAppIconClick,
                                      }),
                                  ],
                                }),
                              }),
                            }),
                            !e &&
                              (0, n.jsx)(kt, {
                                loader: this.m_loader,
                                location: "top",
                              }),
                            (0, n.jsx)("div", {
                              ref: this.m_refContent,
                              className: (0, S.A)(
                                p().AppPartnerEventsContainer,
                                !this.props.onAppIconClick && p().NoGameLink,
                              ),
                              children: a,
                            }),
                            !e &&
                              (0, n.jsx)(kt, {
                                loader: this.m_loader,
                                location: "bottom",
                              }),
                          ],
                        }),
                  }),
                ],
              })
            );
          }
        };
        z([Y.oI], $.prototype, "ScrollToNextEvent", 1),
          z([Y.oI], $.prototype, "ScrollToPrevEvent", 1),
          z([Y.oI], $.prototype, "OnScrollComplete", 1),
          z([Y.oI], $.prototype, "Close", 1),
          z([Y.oI], $.prototype, "OnBackgroundClick", 1),
          z([Y.oI], $.prototype, "OnKeyDown", 1),
          z([Y.oI], $.prototype, "OnScroll", 1),
          z([Y.oI], $.prototype, "OnTouchStart", 1),
          z([Y.oI], $.prototype, "OnTouchMove", 1),
          z([Y.oI], $.prototype, "OnWheel", 1),
          ($ = z([ee.PA], $));
        const kt = (0, ee.PA)((t) => {
            let e = t.loader.GetNewerState(),
              s = t.loader.GetOlderState();
            return e == 2 && s == 2
              ? null
              : (t.location == "top" ? e : s) == 2
                ? (0, n.jsx)("div", {
                    className: p().DirectionState,
                    children: (0, n.jsx)(Ce.t, {
                      position: "center",
                      string: (0, u.we)("#Loading"),
                    }),
                  })
                : null;
          }),
          Ht = v.forwardRef(function (e, s) {
            const o = (0, h.Qn)(),
              [a, r] = (0, Mt.t7)(e.event.appid, { include_assets: !0 }),
              l = (0, _s.Zj)(e.event.appid),
              c = (0, ss.Y)();
            return (0, n.jsx)(xe, {
              ref: s,
              ...e,
              bInGamepadUI: o,
              bShouldMaskImages: l,
              storeItem: a,
              tracker: c,
            });
          });
        let xe = class extends v.Component {
          m_refContent = v.createRef();
          m_sendReadInfo = new ts.LU();
          m_bSentRead = !1;
          OnEnterVisible() {
            if (this.m_bSentRead || this.m_sendReadInfo.IsScheduled()) return;
            const t = 750,
              e = () => {
                this.props.tracker.RecordEventRead(this.props.event, ne.Tc.ot),
                  (this.m_bSentRead = !0);
              };
            this.m_sendReadInfo.Schedule(t, e);
          }
          OnLeaveVisible() {
            this.m_sendReadInfo.Cancel();
          }
          GetDOM() {
            return this.m_refContent.current;
          }
          render() {
            const {
                event: t,
                langOverride: e,
                partnerEventStore: s,
                emoticonStore: o,
                className: a,
                additionalTypeAndDateElement: r,
                headerClassnames: l,
                isPreview: c,
                bShouldMaskImages: d,
                storeItem: m,
              } = this.props,
              g = e || (0, I.sfN)(h.TS.LANGUAGE),
              j = t.GetDescriptionWithFallback(g) || "",
              W = l,
              T = "300px",
              V = t.GetCategoryAsString(),
              x = t.type;
            let f = "";
            if (t.appid) f = m?.GetName() || "";
            else if (t.clanSteamID) {
              const K = pe.ac.GetClanInfoByClanAccountID(
                t.clanSteamID.GetAccountID(),
              );
              f = K ? K.group_name : "";
            }
            const M = Xt.HD.GetTimeNowWithOverride(),
              P = x !== I.uYK && M < t.GetStartTimeAndDateUnixSeconds() && !c;
            return (0, n.jsx)(Ts, {
              children: (0, n.jsxs)("div", {
                ref: this.m_refContent,
                className: (0, S.A)(
                  a,
                  p().PartnerEvent,
                  Z().InLibraryView,
                  W == "editor" ? Z().InEditor : "",
                ),
                children: [
                  (0, n.jsx)(Ks, { ...this.props, eLanguage: g }),
                  (0, n.jsx)("div", {
                    className: Z().LibraryEventTitleContainer,
                    children: (0, n.jsxs)("div", {
                      className: Z().EventDetailTitleContainer,
                      children: [
                        this.props.headerElement,
                        (0, n.jsxs)("div", {
                          className: (0, S.A)(
                            p().EventTypeAndTimeRow,
                            P && p().WithReminder,
                          ),
                          children: [
                            (0, n.jsxs)("div", {
                              className: p().TimeandPostedBy,
                              children: [
                                (0, n.jsx)("span", {
                                  className: p().EventType,
                                  children: V,
                                }),
                                (0, n.jsxs)("span", {
                                  className: p().PostedBy,
                                  children: [
                                    " ",
                                    (0, u.we)("#EventDisplay_PostedBy"),
                                    f,
                                    " ",
                                  ],
                                }),
                                (0, n.jsx)(Yt, {
                                  event: t,
                                  className: Z().EventDetailTimeInfo,
                                }),
                              ],
                            }),
                            P &&
                              !c &&
                              (0, n.jsx)("div", {
                                className: p().ReminderContainer,
                                children: (0, n.jsx)(ps.j, {
                                  eventModel: t,
                                  lang: g,
                                  bExpandLeft: !0,
                                }),
                              }),
                            !c && r,
                          ],
                        }),
                        !this.props.disableReadTracking &&
                          !c &&
                          (0, n.jsx)(Ms.Y, {
                            onEnter: this.OnEnterVisible,
                            onLeave: this.OnLeaveVisible,
                            options: { rootMargin: `0px 0px -${T} 0px` },
                          }),
                        this.props.bInGamepadUI
                          ? (0, n.jsx)("div", {
                              className: Z().EventDetailTitle,
                              children: t.GetNameWithFallback(g),
                            })
                          : (0, n.jsx)(Ee.tj, {
                              eventModel: t,
                              route: Ee.PH.k_eView,
                              className: Z().EventDetailTitle,
                              children: t.GetNameWithFallback(g),
                            }),
                        t.BHasSubTitle(g) &&
                          (0, n.jsx)("div", {
                            className: (0, S.A)(
                              Z().EventDetailsSubTitle,
                              p().LibraryViewSubtitle,
                            ),
                            children: t.GetSubTitle(g),
                          }),
                        (0, n.jsx)("div", {
                          className: Z().EventDetailUserType,
                        }),
                      ],
                    }),
                  }),
                  !!(
                    t.BEventCanShowBroadcastWidget() &&
                    !this.props.bDisableBroadcastPlayer
                  ) &&
                    (0, n.jsx)("div", {
                      className: Z().EventBroadcastCtn,
                      children: (0, n.jsx)(v.Suspense, {
                        fallback: null,
                        children: (0, n.jsx)(zs, { event: this.props.event }),
                      }),
                    }),
                  t.BHasTag("steam_award_nomination_request") &&
                    (0, n.jsx)($n, { event: t, lang: g }),
                  t.BHasTag("steam_award_vote_request") &&
                    (0, n.jsx)(Lt, {
                      appID: t.appid,
                      bIsEventActionEnabled: t.BIsEventActionEnabled(),
                      voteCategories: t.GetSteamAwardNomineeCategories(),
                    }),
                  (0, n.jsxs)("div", {
                    className: Z().LibraryEventBodyContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, S.A)(
                          Z().EventDetailsBody,
                          p().EventDetailsBody,
                          d && Z().MaskImages,
                        ),
                        onContextMenu: h.TS.IN_CLIENT ? Jt.aE : void 0,
                        children: [
                          (0, n.jsx)(Tn.fh, { text: j, event: t }),
                          (0, n.jsx)("span", { className: H().Clear }),
                        ],
                      }),
                      (0, n.jsx)(As, { event: this.props.event }),
                      !!t.jsondata.read_more_link &&
                        (0, n.jsx)("div", {
                          className: (0, S.A)(p().ReadMoreCnt),
                          children: (0, n.jsx)(Pt.uU, {
                            className: (0, S.A)(H().Button),
                            href: t.jsondata.read_more_link,
                            children: (0, u.we)(
                              "#EventEmail_Button_ClickForMoreDetails",
                            ),
                          }),
                        }),
                      !!(
                        t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id
                      ) &&
                        (0, n.jsxs)("div", {
                          className: (0, S.A)(p().ReadMoreCnt),
                          children: [
                            (0, n.jsx)(Bs.m, { gidEvent: t.GID }),
                            (0, n.jsx)("a", {
                              className: (0, S.A)(H().Button, "LinkButton"),
                              href: (0, se.k2)((0, Cs.n4)(t)),
                              children: (0, u.we)(
                                "#Event_Button_VisitSalePage",
                              ),
                            }),
                          ],
                        }),
                      (0, n.jsx)(ws, { appid: t.appid }),
                    ],
                  }),
                  !c && (0, n.jsx)(xn, { eventModel: t, emoticonStore: o }),
                ],
              }),
            });
          }
        };
        z([Y.oI], xe.prototype, "OnEnterVisible", 1),
          z([Y.oI], xe.prototype, "OnLeaveVisible", 1),
          (xe = z([ee.PA], xe));
        function Ks(t) {
          const {
              event: e,
              fnFilterImageURLsForKnownFailures: s,
              fnImageFailureCallback: o,
              eLanguage: a,
              bShouldMaskImages: r,
            } = t,
            l = e.BImageNeedScreenshotFallback("background", a),
            c = e.type;
          let d = (0, os.WC)(e, "background", a, we.wI.background_main, !l);
          return (
            s && d && (d = s(d)),
            (0, n.jsxs)(n.Fragment, {
              children: [
                c != I.Fwr &&
                  !l &&
                  (0, n.jsx)(Rt.c, {
                    className: (0, S.A)(
                      Z().EventCoverImageBackground,
                      r && Z().MaskImages,
                    ),
                    rgSources: d,
                    onIncrementalError: (m, g, j) => o && o(g),
                  }),
                d &&
                  d.length > 0 &&
                  (0, n.jsx)(Rt.c, {
                    className: Z().EventBackgroundBlur,
                    rgSources: d,
                    onIncrementalError: (m, g, j) => o && o(g),
                  }),
              ],
            })
          );
        }
        var Zs = ((t) => (
          (t[(t.Idle = 1)] = "Idle"),
          (t[(t.Loading = 2)] = "Loading"),
          (t[(t.EndOfContent = 3)] = "EndOfContent"),
          t
        ))(Zs || {});
        class Me {
          k_nMaxPerDirection = 3;
          m_nAppID = 0;
          m_clanSteamID;
          m_partnerEventStore;
          m_additionalParams;
          m_rgEvents = [];
          m_eOlderDirection = 1;
          m_eNewerDirection = 1;
          constructor(e) {
            (0, b.Gn)(this), (this.m_partnerEventStore = e);
          }
          GetEvents() {
            return this.m_rgEvents;
          }
          GetAppID() {
            return this.m_nAppID;
          }
          GetOlderState() {
            return this.m_eOlderDirection;
          }
          GetNewerState() {
            return this.m_eNewerDirection;
          }
          async InitAroundEvent(e, s) {
            const o = this.m_partnerEventStore;
            (this.m_nAppID = e.appid),
              (this.m_clanSteamID = e.clanSteamID),
              (this.m_rgEvents = []),
              (this.m_eOlderDirection = 2),
              (this.m_eNewerDirection = 2),
              (this.m_additionalParams = s),
              this.m_rgEvents.push(e);
            let a = null;
            try {
              a = await o.LoadAdjacentPartnerEventsByEvent(
                e,
                this.m_clanSteamID,
                this.m_nAppID,
                this.k_nMaxPerDirection,
                this.k_nMaxPerDirection,
                this.m_additionalParams,
              );
            } catch {}
            (0, b.h5)(() => {
              if (!a || a.length == 0) {
                (this.m_eOlderDirection = 3), (this.m_eNewerDirection = 3);
                return;
              }
              let r = a.findIndex((d) => d.GID == e.GID),
                l = r,
                c = r >= 0 ? a.length - r - 1 : 0;
              (this.m_eNewerDirection = l >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_eOlderDirection = c >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_rgEvents = a);
            });
          }
          async LoadMoreAtEnd() {
            if (this.m_eOlderDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let e = this.m_rgEvents[this.m_rgEvents.length - 1];
            this.m_eOlderDirection = 2;
            let s = null;
            try {
              s =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  e,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  0,
                  this.k_nMaxPerDirection,
                  this.m_additionalParams,
                );
            } catch {}
            (0, b.h5)(() => {
              if (!s) {
                this.m_eOlderDirection = 1;
                return;
              }
              const o = new Set(this.m_rgEvents.map((a) => a.GID));
              for (let a of s)
                o.has(a.GID) || (this.m_rgEvents.push(a), o.add(a.GID));
              this.m_eOlderDirection =
                s.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
          async LoadMoreAtBeginning() {
            if (this.m_eNewerDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let e = this.m_rgEvents[0];
            this.m_eNewerDirection = 2;
            let s = null;
            try {
              s =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  e,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  this.k_nMaxPerDirection,
                  0,
                );
            } catch {}
            (0, b.h5)(() => {
              if (!s) {
                this.m_eNewerDirection = 1;
                return;
              }
              const o = new Set(this.m_rgEvents.map((a) => a.GID));
              for (let a of s.reverse())
                o.has(a.GID) || (this.m_rgEvents.unshift(a), o.add(a.GID));
              this.m_eNewerDirection =
                s.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
        }
        z([b.sH.shallow], Me.prototype, "m_rgEvents", 2),
          z([b.sH], Me.prototype, "m_eOlderDirection", 2),
          z([b.sH], Me.prototype, "m_eNewerDirection", 2);
        var Qs = i(19332),
          Ys = Object.defineProperty,
          Xs = Object.getOwnPropertyDescriptor,
          Qe = (t, e, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? Xs(e, s) : e, r = t.length - 1, l;
              r >= 0;
              r--
            )
              (l = t[r]) && (a = (o ? l(e, s, a) : l(a)) || a);
            return o && a && Ys(e, s, a), a;
          };
        function Js(t) {
          const { event: e, closeModal: s } = t,
            o = useEmoticonStore();
          return jsx(AppPartnerEventsPage, {
            initialEvent: e,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: g_PartnerEventStore,
            emoticonStore: o,
            showAppHeader: !0,
            closeModal: s,
          });
        }
        function Ko(t, e) {
          ShowModalDialog(jsx(Js, { event: t }), e);
        }
        let Te = class extends v.Component {
          m_refFocus = v.createRef();
          componentDidMount() {
            this.props.fnClose &&
              (document.addEventListener("keydown", this.escFunction, !1),
              this.m_refFocus.current && this.m_refFocus.current.focus());
          }
          componentWillUnmount() {
            this.props.fnClose &&
              document.removeEventListener("keydown", this.escFunction, !1);
          }
          escFunction(t) {
            const { fnClose: e } = this.props;
            t.keyCode === 27 && e && e();
          }
          OnBackgroundClick(t) {
            t.currentTarget == t.target && this.props.fnClose();
          }
          render() {
            const { event: t, langOverride: e, isPreview: s } = this.props;
            return (0, n.jsx)("div", {
              ref: this.m_refFocus,
              className: Qs.Main,
              onClick: this.OnBackgroundClick,
              children: (0, n.jsx)(ce.sU, {
                children: (o) =>
                  (0, n.jsx)(
                    Ht,
                    {
                      event: t,
                      emoticonStore: o,
                      partnerEventStore: w.Get(),
                      langOverride: e,
                      isPreview: s,
                      bDisableBroadcastPlayer: !1,
                    },
                    t.GID,
                  ),
              }),
            });
          }
        };
        Qe([Y.oI], Te.prototype, "escFunction", 1),
          Qe([Y.oI], Te.prototype, "OnBackgroundClick", 1),
          (Te = Qe([ee.PA], Te));
        var zt = i(24806),
          $s = i(26251),
          qs = i(41635),
          eo = i(20398),
          y = i(58962);
        function Ue(t, e, s) {
          const o = t && t.length > s ? [...t] : (0, qs.$Y)(t || [], s + 1, "");
          return (o[s] = e), o;
        }
        function ae(t, e) {
          return (t && t.length > e && t[e]) || "";
        }
        function Wt(t, e) {
          let o = !1,
            a = !1;
          for (let r = I.Bhc; r < I.bP9; r++) {
            const l = ae(t, r).trim(),
              c = ae(e, r).trim();
            if (!l && !c) continue;
            const d = (0, u.we)("#Language_" + (0, I.LgB)(r));
            if (((o = !0), !l))
              return (0, u.we)("#BuildNotes_Error_MissingTitle", d);
            if (!c) return (0, u.we)("#BuildNotes_Error_MissingDescription", d);
            if (l.length > k.dm)
              return (0, u.we)("#BuildNotes_Error_TitleTooLong", d);
            if (c.length > 32768)
              return (0, u.we)("#BuildNotes_Error_DescriptionTooLong", d);
            r === I.Bhc && (a = !0);
          }
          return o
            ? a
              ? null
              : (0, u.we)("#BuildNotes_Error_NoEnglishProvided")
            : (0, u.we)("#BuildNotes_Error_NoLanguagesProvided");
        }
        async function to(t, e, s) {
          if (Wt(e, s)) return null;
          const o = null;
          if (o) return o;
          const a = !!ae(e, I.ZLm).trim(),
            r = new FormData();
          r.append("sessionid", (0, h.KC)()),
            r.append("appid", "" + t),
            r.append("post_steam_china", "" + a),
            r.append("titles", JSON.stringify(e)),
            r.append("descriptions", JSON.stringify(s)),
            r.append("build_id", "" + re.Get().GetPostedBuildVersion()),
            r.append("build_branch", re.Get().GetBuildBranch());
          const l =
            h.TS.PARTNER_BASE_URL + "partnerevents/ajaxpublishpatchnotes";
          try {
            const c = await q().post(l, r, { withCredentials: !0 });
            if (c?.data?.success == F.R) return c.data;
            console.error(
              "buildpatchnotes: OnSubmitCreateEvent error code  " +
                c?.data?.success +
                " msg: " +
                c?.data?.msg,
            );
          } catch (c) {
            const d = (0, Oe.H)(c);
            console.error(
              "buildpatchnotes: OnSubmitCreateEvent " + d.strErrorMsg,
              d,
            );
          }
          return null;
        }
        function no(t, e) {
          let s = new k.lh();
          (s.GID = "PreviewPartnerEventRow_0"),
            (s.clanSteamID = new Q.b(h.iA.steamid)),
            (s.postTime = Date.now() / 1e3),
            (s.startTime = Date.now() / 1e3),
            (s.createTime = Date.now() / 1e3),
            (s.type = I.Fwr);
          for (let o = I.Bhc; o < I.bP9; o++)
            s.name.set(o, ae(t, o)), s.description.set(o, ae(e, o));
          return s;
        }
        function so() {
          const t = new URLSearchParams(window.location.search);
          t.delete("submittedbuild"), t.delete("buildbranch");
          const e = t.toString(),
            s =
              window.location.origin +
              window.location.pathname +
              (e ? "?" + e : "") +
              window.location.hash;
          window.history.replaceState({}, "", s);
        }
        class re {
          m_nBuildVersion;
          m_bSteamChina;
          m_strBuildBranch;
          static s_Singleton;
          static Get() {
            return (
              this.s_Singleton ||
                ((this.s_Singleton = new re()), this.s_Singleton.Init()),
              this.s_Singleton
            );
          }
          Init() {
            const e = (0, h.Tc)("build_notes", "application_config");
            (this.m_nBuildVersion = e?.build_version || 0),
              (this.m_bSteamChina = e?.steam_china || !1),
              (this.m_strBuildBranch = e?.build_branch || ""),
              (this.m_strBuildBranch = this.m_strBuildBranch
                .trim()
                .toLocaleLowerCase()),
              this.m_strBuildBranch === "default" &&
                (this.m_strBuildBranch = "");
          }
          GetPostedBuildVersion() {
            return this.m_nBuildVersion;
          }
          BShouldShowPatchNotesEditor() {
            return this.GetPostedBuildVersion() > 0;
          }
          BCanSubmitSteamChinaPatchNotes() {
            return this.m_bSteamChina;
          }
          GetBuildBranch() {
            return this.m_strBuildBranch;
          }
        }
        function oo(t) {
          const [e, s] = v.useState(I.Bhc),
            [o, a] = v.useState(null),
            [r, l] = v.useState(null),
            [c, d] = v.useState(null),
            [m, g] = v.useState("editing"),
            [j, W] = v.useState(null);
          if (!re.Get().BShouldShowPatchNotesEditor()) return null;
          const T = (_) => s(_),
            V = () => d(no(o, r)),
            x = (_) => !!(ae(o, _) || ae(r, _)),
            f = () => d(null),
            M = async () => {
              d(null), g("submitting");
              const _ = await to(t.appId, o, r);
              _ ? (W(_.clan_event_gid), so(), g("submitted")) : g("failed");
            },
            P = (_, Be) => {
              const Kt = new Array();
              let Ye = o,
                Xe = r;
              for (const Ie of Be) {
                const Je = _.GetLocalization("Title", Ie) || "",
                  $e = _.GetLocalization("Description", Ie) || "";
                (Je || $e) && Kt.push(Ie),
                  Je && (Ye = Ue(Ye, Je, Ie)),
                  $e && (Xe = Ue(Xe, $e, Ie));
              }
              return a(Ye), l(Xe), Kt;
            },
            K = re.Get().BCanSubmitSteamChinaPatchNotes()
              ? [te.TU.k_ESteamRealmChina, te.TU.k_ESteamRealmGlobal]
              : [te.TU.k_ESteamRealmGlobal],
            X = Wt(o, r),
            ie =
              h.TS.COMMUNITY_BASE_URL +
              "ogg/" +
              t.appId +
              "/partnerevents/create/";
          return (0, n.jsxs)(de.tH, {
            children: [
              (0, n.jsxs)("div", {
                className: y.BuildNoteCtn,
                children: [
                  (0, n.jsx)("div", {
                    className: y.BuildTitle,
                    children: (0, u.we)(
                      "#BuildNotes_Title",
                      re.Get().GetPostedBuildVersion(),
                      re.Get().GetBuildBranch() || "default",
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    className: y.SplitPanel,
                    children: [
                      (0, n.jsxs)("div", {
                        className: y.DescriptionPanel,
                        children: [
                          (0, n.jsx)("div", {
                            className: y.BuildSubTitle,
                            children: (0, u.we)("#BuildNotes_SubTitle"),
                          }),
                          (0, n.jsx)("div", {
                            className: y.InfoText,
                            children: (0, u.we)("#BuildNotes_Desc1"),
                          }),
                          (0, n.jsx)("div", {
                            className: y.InfoText,
                            children: (0, u.PP)("#BuildNotes_Desc2"),
                          }),
                          (0, n.jsx)("a", {
                            href: ie,
                            children: (0, n.jsx)(G.$n, {
                              children: (0, u.we)("#BuildNotes_OpenFullEditor"),
                            }),
                          }),
                        ],
                      }),
                      m === "editing" &&
                        (0, n.jsx)(ao, {
                          sError: X,
                          eLanguage: e,
                          realms: K,
                          fnHasLanguage: x,
                          fnSetLanguage: T,
                          fnGetTitle: (_) => ae(o, _),
                          fnSetTitle: (_, Be) => a(Ue(o, Be, _)),
                          fnGetDescription: (_) => ae(r, _),
                          fnSetDescription: (_, Be) => l(Ue(r, Be, _)),
                          fnOnPreviewEvent: V,
                          fnApplyLoc: P,
                        }),
                      m === "submitting" && (0, n.jsx)(io, {}),
                      m === "failed" &&
                        (0, n.jsx)(lo, {
                          fnOnReturnToEditor: () => g("editing"),
                        }),
                      m === "submitted" &&
                        (0, n.jsx)(co, { appId: t.appId, eventGid: j }),
                    ],
                  }),
                ],
              }),
              !!(c && m === "editing") &&
                (0, n.jsx)(ro, {
                  event: c,
                  eLanguage: e,
                  realms: K,
                  fnOnClose: f,
                  fnOnSubmitEvent: M,
                  fnHasLanguage: x,
                  fnSetLanguage: T,
                }),
            ],
          });
        }
        const ao = (t) => {
            const {
                sError: e,
                eLanguage: s,
                realms: o,
                fnHasLanguage: a,
                fnSetLanguage: r,
                fnGetTitle: l,
                fnSetTitle: c,
                fnGetDescription: d,
                fnSetDescription: m,
                fnOnPreviewEvent: g,
                fnApplyLoc: j,
              } = t,
              W = (0, ce.LJ)();
            let T = "";
            if (o.includes(te.TU.k_ESteamRealmChina)) {
              const x = l(I.ZLm).trim() !== "";
              T = (0, u.we)(
                x
                  ? "#BuildNotes_SteamChina_Provided"
                  : "#BuildNotes_SteamChina_NotProvided",
              );
            }
            const V = () => {
              const x = new eo.G(),
                f = (0, u.we)("#BuildNotes_SampleTitle"),
                M = (0, u.we)("#BuildNotes_SampleDescription");
              for (let P = I.Bhc; P < I.bP9; P++)
                x.SetLocalization("Title", P, f),
                  x.SetLocalization("Description", P, M);
              (0, Ae.pg)(
                (0, n.jsx)($s.zZ, {
                  sampleLocData: x,
                  sampleFilename: "patchnote_loc_sample",
                  fnOnImportLocData: j,
                }),
                window,
              );
            };
            return (0, n.jsxs)("div", {
              className: y.RightPanel,
              children: [
                (0, n.jsxs)("div", {
                  className: y.EditTopBar,
                  children: [
                    (0, n.jsx)("div", {
                      className: y.EditTitle,
                      children: (0, u.we)("#BuildNotes_PatchnotesTitle"),
                    }),
                    (0, n.jsxs)("div", {
                      className: y.LangPicker,
                      children: [
                        (0, n.jsx)(G.$n, {
                          onClick: V,
                          children: (0, u.we)("#BuildNotes_ImportLocalization"),
                        }),
                        (0, n.jsx)(zt.Ng, {
                          selectedLang: s,
                          fnOnLanguageChanged: r,
                          fnLangHasData: a,
                          realms: o,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(G.pd, {
                  value: l(s),
                  placeholder: (0, u.we)("#BuildNotes_TitlePlaceholder"),
                  onChange: (x) => c(s, x.currentTarget.value),
                  maxLength: k.dm,
                }),
                (0, n.jsx)("div", {
                  className: y.EditTitle,
                  children: (0, u.we)("#BuildNotes_PatchnotesDesc"),
                }),
                (0, n.jsx)(Se.I, {
                  fnGetCurText: () => d(s),
                  fnOnTextChange: (x) => m(s, x.currentTarget.value),
                  fnSetText: (x) => m(s, x),
                  strPlaceholder: (0, u.we)("#BuildNotes_DescPlaceholder"),
                  emoticonStore: W,
                  bSupportHTMLImport: !0,
                  showFormatHelp: "PartnerEvents",
                  classNameForTextArea: y.BBCodeEditor,
                }),
                (0, n.jsxs)("div", {
                  className: y.SubmitButtonCtn,
                  children: [
                    !e &&
                      (0, n.jsx)(G.jn, {
                        onClick: g,
                        children: (0, u.we)("#BuildNotes_Preview"),
                      }),
                    !!e &&
                      (0, n.jsx)("div", { className: y.ErrorMsg, children: e }),
                    !!(!e && T) &&
                      (0, n.jsx)("div", {
                        className: y.SteamChinaMsg,
                        children: T,
                      }),
                  ],
                }),
              ],
            });
          },
          ro = (t) => {
            const {
              event: e,
              eLanguage: s,
              realms: o,
              fnOnClose: a,
              fnOnSubmitEvent: r,
              fnHasLanguage: l,
              fnSetLanguage: c,
            } = t;
            return (0, n.jsxs)(je.of, {
              children: [
                (0, n.jsxs)("div", {
                  className: y.PreviewHeader,
                  children: [
                    (0, n.jsx)(zt.Ng, {
                      selectedLang: s,
                      fnOnLanguageChanged: c,
                      fnFilterLanguage: l,
                      realms: o,
                    }),
                    (0, n.jsxs)("div", {
                      className: y.SubmitButtonCtn,
                      children: [
                        (0, n.jsx)(G.$n, {
                          onClick: a,
                          children: (0, u.we)("#BuildNotes_Close"),
                        }),
                        (0, n.jsx)(G.jn, {
                          onClick: r,
                          children: (0, u.we)("#BuildNotes_PostNotes"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsx)(Te, {
                    event: e,
                    fnClose: a,
                    langOverride: s,
                    isPreview: !0,
                  }),
                }),
              ],
            });
          },
          io = (t) =>
            (0, n.jsxs)("div", {
              className: (0, S.A)(y.RightPanel, y.SubmitPanel),
              children: [
                (0, n.jsx)(Ce.t, { className: y.SubmitThrobber }),
                (0, n.jsx)("div", {
                  className: y.SubmitText,
                  children: (0, u.we)("#BuildNotes_Submitting"),
                }),
              ],
            }),
          lo = (t) =>
            (0, n.jsxs)("div", {
              className: (0, S.A)(y.RightPanel, y.FailedPanel),
              children: [
                (0, n.jsx)("div", {
                  className: y.FailedText,
                  children: (0, u.we)("#BuildNotes_FailedDescription"),
                }),
                (0, n.jsx)("div", {
                  className: y.FailedButton,
                  children: (0, n.jsx)(G.$n, {
                    onClick: t.fnOnReturnToEditor,
                    children: (0, u.we)("#BuildNotes_ReturnToEditor"),
                  }),
                }),
              ],
            }),
          co = (t) => {
            const { appId: e, eventGid: s } = t,
              o = `${h.TS.STORE_BASE_URL}news/app/${e}/view/${s}`;
            return (0, n.jsxs)("div", {
              className: (0, S.A)(y.RightPanel, y.SuccessPanel),
              children: [
                (0, n.jsx)("div", {
                  className: y.SuccessText,
                  children: (0, u.we)("#BuildNotes_Success"),
                }),
                (0, n.jsx)("a", {
                  href: o,
                  className: y.ViewEventButton,
                  children: (0, n.jsx)(G.$n, {
                    children: (0, u.we)("#BuildNotes_ViewPublished"),
                  }),
                }),
              ],
            });
          };
      },
      24981: (L, le, i) => {
        "use strict";
        i.r(le), i.d(le, { SaleRoutes: () => U, default: () => w });
        var n = i(7850),
          fe = i(90783),
          q = i(58732),
          v = i(17083),
          I = i(92757),
          F = i(26485),
          te = i(3166);
        class k {
          static s_PageStore;
          m_mapSalePage = new Map();
          m_rgUnmigratedSalesPage = new Array();
          GetUnmigratedSalesPages() {
            return this.m_rgUnmigratedSalesPage;
          }
          GetAllSalePages() {
            return Array.from(this.m_mapSalePage.values());
          }
          GetPageByID(N) {
            return this.m_mapSalePage.get(N);
          }
          static Get() {
            return (
              k.s_PageStore ||
                ((k.s_PageStore = new k()), k.s_PageStore.Init()),
              k.s_PageStore
            );
          }
          Init() {
            let N = (0, te.Tc)("old_sale_pages", "application_config");
            this.ValidateStoreDefault(N) &&
              N.forEach((D) => {
                this.m_mapSalePage.set(D.pageid, D),
                  D.migrated_clan_account_id ||
                    this.m_rgUnmigratedSalesPage.push(D);
              });
          }
          ValidateStoreDefault(N) {
            const D = N;
            return D &&
              Array.isArray(D) &&
              D.length > 0 &&
              typeof D[0] == "object"
              ? typeof D[0].pageid == "string"
              : !1;
          }
        }
        var Q = i(18057),
          ce = i(85599),
          Se = i(76149);
        function G(b) {
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)("h2", { children: "Unmigrated Sales Pages" }),
              (0, n.jsx)("hr", {}),
              k
                .Get()
                .GetUnmigratedSalesPages()
                .map((N) => (0, n.jsx)(de, { pageid: N.pageid }, N.pageid)),
            ],
          });
        }
        function de(b) {
          let N = k.Get().GetPageByID(b.pageid);
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)("div", { children: N.pageid }),
              (0, n.jsx)(v.N_, {
                to: U.SaleMigrationPageDebug(N.pageid),
                children: "Debug Data",
              }),
            ],
          });
        }
        function ee(b) {
          const { pageid: N } = b,
            D = k.Get().GetPageByID(N),
            ne = (0, Se.gS)(D.accountid);
          return ne
            ? (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(v.N_, {
                    to: U.SaleMigrationTool(),
                    children: "< Return to Migration Toolset",
                  }),
                  (0, n.jsxs)("h2", { children: ["Debug: ", b.pageid] }),
                  (0, n.jsx)("hr", {}),
                  (0, n.jsxs)("div", { children: ["Name: ", D.display_name] }),
                  (0, n.jsxs)("div", {
                    children: ["Creator: ", D.accountid, " - ", ne.persona],
                  }),
                  (0, n.jsxs)("div", {
                    children: [
                      "Last Modified: ",
                      D.last_modified,
                      D.last_modified != 0 &&
                        (0, n.jsx)(Q.K4, {
                          dateAndTime: D.last_modified,
                          bSingleLine: !0,
                        }),
                    ],
                  }),
                  (0, n.jsx)("h1", { children: "Sale Page Body Raw" }),
                  (0, n.jsx)(F.G, { data: D }),
                ],
              })
            : (0, n.jsx)(ce.t, { string: "Loading User Info" });
        }
        var h = i(20634);
        const U = {
          SaleDashboardView: () => "/(dashboard)?/",
          SaleMigrationTool: () => "/migration/",
          SaleMigrationPageDebug: (b) => `/migration/debug/${b}/`,
        };
        function w(b) {
          return (0, n.jsx)(v.Kd, {
            basename: (0, q.C)() + "sales/",
            children: (0, n.jsxs)(I.dO, {
              children: [
                (0, n.jsx)(I.qh, {
                  exact: !0,
                  path: q.B.DiagData(),
                  render: (N) =>
                    (0, n.jsx)(F.z, {
                      ...N,
                      strConfigID: "application_config",
                    }),
                }),
                (0, n.jsx)(I.qh, {
                  exact: !0,
                  path: U.SaleDashboardView(),
                  component: h.h,
                }),
                (0, n.jsx)(I.qh, {
                  exact: !0,
                  path: U.SaleMigrationTool(),
                  component: G,
                }),
                (0, n.jsx)(I.qh, {
                  exact: !0,
                  path: U.SaleMigrationPageDebug(":pageid"),
                  render: (N) =>
                    (0, n.jsx)(ee, { pageid: N.match.params.pageid }),
                }),
                (0, n.jsx)(I.qh, { component: fe.a }),
              ],
            }),
          });
        }
      },
      79590: (L, le, i) => {
        "use strict";
        i.d(le, { m: () => ee });
        var n = i(7850),
          fe = i(99412),
          q = i(90626),
          v = i(48421),
          I = i(36707),
          F = i(18210),
          te = i(53113),
          k = i(72609),
          Q = i(20193),
          ce = i(29630),
          Se = i(16512);
        function G(h) {
          const { gidEvent: U } = h,
            w = usePartnerEventByEventGID(U);
          return w
            ? jsx(de, {
                event: w,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(w) ?? ""),
              })
            : null;
        }
        function de(h) {
          const { event: U, lang: w, href: b } = h,
            [N, D] = (0, q.useMemo)(() => {
              const ne = U.jsondata.localized_sale_product_banner,
                we = U.jsondata.localized_sale_product_mobile_banner;
              if (ne?.length && we?.length) {
                const ue = F.NT.GetWithFallback(ne, w),
                  Ne = F.NT.GetWithFallback(we, w);
                if (ue?.length && Ne?.length)
                  return [
                    ce.zU.GenerateURLFromHashAndExt(U.clanSteamID, ue),
                    ce.zU.GenerateURLFromHashAndExt(U.clanSteamID, Ne),
                  ];
              }
              return [void 0, void 0];
            }, [U, w]);
          return !N?.length || !D?.length
            ? null
            : (0, n.jsxs)("a", {
                href: b,
                className: Q.Link,
                children: [
                  (0, n.jsx)("img", {
                    src: N,
                    className: (0, I.A)(Q.Banner, Q.Big),
                  }),
                  (0, n.jsx)("img", {
                    src: D,
                    className: (0, I.A)(Q.Banner, Q.Mobile),
                  }),
                ],
              });
        }
        function ee(h) {
          const { gidEvent: U } = h,
            w = (0, v.RR)(U);
          return w
            ? (0, n.jsx)(de, {
                event: w,
                lang: (0, fe.sfN)(k.TS.LANGUAGE),
                href: (0, te.k2)((0, Se.n4)(w) ?? ""),
              })
            : null;
        }
      },
      58962: (L) => {
        L.exports = {
          BuildNoteCtn: "cZP-58cHflQCLG6CHvwKG",
          SplitPanel: "_2TINcVLR2kmBWAVOOtG0cF",
          DescriptionPanel: "_2N1THxFjyQb75AY6b7SpZX",
          RightPanel: "EN_YgGmWh95hbxn-2pmD5",
          BuildTitle: "_-2I9CETSXyA66SWcV5iEv",
          BuildSubTitle: "_2lG_bxKnQtJIUYWD19KGoy",
          InfoText: "_3-WB4tkYQI0EftRXikEI4t",
          EditTopBar: "bJHHP4182a1PZlP-rurGN",
          LangPicker: "_1P7AcuhlijPijxLhFPngFp",
          EditTitle: "_2o-fIjMrt8xP5BFnQuwu_p",
          SubmitButtonCtn: "Vj8rXBuNz4JT-2Y8QgK36",
          BBCodeEditor: "_2gIbttbPBWi6pXxhPzfmD5",
          ErrorMsg: "_2yUUHPTbyDbnoX2gCflGh-",
          SteamChinaMsg: "_3EFpCoez_gInT6uBoW-MLR",
          PreviewHeader: "_3GODeMU9hr5NrqreP7TL3E",
          SubmitPanel: "_2WB1wNg29mL3fTTeWX9HJU",
          SubmitThrobber: "_2rWSmSZSQLbv7D2bBBc6PO",
          SuccessPanel: "_3jQwVKtYzS0V9pBPwJTUW6",
          ViewEventButton: "_3zUBg8T8MJnKb-eS1s3sK6",
          FailedPanel: "_1H8COg73O0FBzdyTrSg2pu",
          FailedText: "pu4VYcHm6vt6RCeDA73L0",
          FailedButton: "soZLp0uToUv-yRJFwckG9",
        };
      },
      38182: (L) => {
        L.exports = {
          narrowWidth: "500px",
          EventDetailTimeInfo: "xBUZ1jJ4rafFpeTqBLFXy",
          StartDate: "_3fnIGWmHQRS3H57PR7Qm0V",
          EndDate: "_27ujtr5AsAF4_qa1HEifF4",
          MultiDateAndTime: "_130Qkcrkkg7Ygi1ksNJVM",
          RightSideTitles: "_34vtF4hGMg7lb2WZUbe8ie",
          DateAndTime: "zLuUcDh0YJONQX3MssuAu",
          VerticalLocalDateAndTime: "MT8Ri2dV3bsGLkpXTvoVG",
        };
      },
      20193: (L) => {
        L.exports = {
          Link: "_2UaM2MUAY7gG5jQF-6m9eV",
          Banner: "_1DZMXccE3UeEnQ5fZ7O00v",
          Big: "_3dJUAHMUbDY0O45FaJvOT-",
          Mobile: "_3RIai13_FI7QmOT96zU4W-",
        };
      },
      98462: (L) => {
        L.exports = { ReferencedApps: "_1aDVPEAcrxRDEyIXlfcBMG" };
      },
      19890: (L) => {
        L.exports = {
          AppSocialLinksCtn: "JlFZxFyO0IOSiYmJt-NlE",
          AppSocialLinks: "_1SBP3NCWhesT_T7Zncoe_x",
          AppSocialLinkIcon: "_2p4QK5FnPikdfXUGvhz-rj",
          AppSocialLinkWithText: "_1pCGa1Dqa9xwEjXFCTbeaB",
          AppSocialText: "V88BDse5RqlvrzYpxlgFS",
        };
      },
      17009: (L) => {
        L.exports = {
          "duration-app-launch": "800ms",
          AppPartnerEventsPage: "_3CJsgSK-y815Zeoe6bz6dh",
          AppPartnerEventsBanner: "_1HRiMtg_SGUiOa-NXDzZl7",
          AppBannerLinks: "D1bMmHTycpEqG4Sp3VVvH",
          ControlSection: "_2pA5CW91XQQDfo6yZEdPd-",
          NoGameLink: "_2GfPecEDgnR6mwX3ysETT_",
          AppPartnerEventsBody: "_1XLRr8eh1ip-E17C8Jzrmc",
          AppBannerGroup: "qexk-JocS7jjDM31IcGZn",
          NoEvents: "_2xyx9hjeMa2Faf2k3WjG3C",
          AppBannerCtn: "wavRtSPqcvhar0kUHlKoJ",
          AppBannerBackground: "_3RHFoIvdUHn0fp8G8M258k",
          ClanBanner: "_161DWg8AuVjniVd_UE888G",
          TallBanner: "KBixgrFRi1J3OB43f1p8X",
          WideBanner: "_1hl09rgUVOJUMhgC33L7eo",
          AppBannerTitle: "_1iqjH40fN4Diar-d-rLbR5",
          NewsHubSubTitle: "_3tf3bdmBO0Ji0rv8PH-ZXz",
          AppBannerLogoCtn: "_2EV_WNLGjRLNX824mfis9O",
          AppBannerLogo: "dGGTg8iH8Z_d_p6nPFFlM",
          HeaderButtonDark: "_1sDn2dLVB1pIeh5UP4EOVT",
          HeaderFollowButton: "_1tnk5F-ooFjGdvCzXLwtmf",
          HeaderWishlistButton: "_371yXVkVSnacHxz1fMmGpT",
          AppBannerLink: "_3YomsTzhdiLRcSZkF8JtB8",
          AppBannerRSSLink: "_1HeKH4JMsCDXmXP3XD7C6t",
          AppBannerLinkDD: "_1afFDl3n1RB22K4gFglar",
          AppBannerLinkDDButton: "S9cqDrgEIhtUE6pU3-2iQ",
          DDButtonArrow: "_3URBCM-OKlL3sg0hORPS01",
          AppBannerLinkDDContainer: "_2cjCliV2mnVX6dlRRce-fD",
          WishlistBtnShort: "_3WcW8PJCSEWwVA6qJ-RUOF",
          RssRow: "_2pyH3D6qw0sOXhrtoYqCVL",
          AppPartnerEventsContainer: "_3GCEyyVil-cCS-8hoI2Zo1",
          PartnerEvent: "_1KsYSVzmvIfRivBTcx-_GE",
          LibraryViewSubtitle: "_1rbgKYHeRvzrIyqHCzaLIr",
          EventDetailsBody: "_3NW5vEM9HgfQrgR4W-Xy_s",
          NoScrollArrows: "_39hJ8cxSdqeE3ZR01bJLab",
          ControlSectionWidth: "_3yfs7fc5WEv6F9tPG4yq4g",
          ControlSectionRightSide: "_2tSyrRxMCRWK6K09JErgI_",
          GameArt: "_2a5oSdTIcFV3c3ymUNsu6l",
          ScrollButton: "_1t_97P9KMsEBaPq9y-6OUl",
          Up: "_3vBD2B7lrr6iXm8dGe71lI",
          Down: "_3VePRhMGWFsbGaZjSNXJjV",
          CloseButton: "_1_vCR1dPfyJ7_yukwDqblf",
          AnimIn: "_240i58XQ0w78YFrd_p-9UY",
          transitionIn: "_2jG5NuuER4JaHKuO9nA4KF",
          ClickableBG: "_308EDBzQTS8OgAxwxfq2UB",
          DirectionState: "Bv96jkkYqxrnA7xfPskjD",
          EventTypeAndTimeRow: "_3bWTO29arCCJ6PBGRZ7fRy",
          WithReminder: "_1C5DvpeSKLvf8M8uAdi50W",
          TimeandPostedBy: "_2WwG2r8yZuu2EMJgFTQZp8",
          EventType: "Udzrpqr8534T5DvVZveNP",
          PostedBy: "_2VqeQaZVaUkkEWaiLkmqmT",
          ReminderContainer: "_3Vf2MkZ_LWIoNVv36RwJtO",
          ReadMoreCnt: "_1YmaiDiNhC33cL5DKj05KQ",
          BackgroundAnimation: "_2-llXPi4w88rsWfJFYSLHB",
          "ItemFocusAnim-darkerGrey-nocolor": "_2eejrtSFYCSnzH8C6-WC3a",
          "ItemFocusAnim-darkerGrey": "oMlqiiSY2Eqr2ln_FmAg4",
          "ItemFocusAnim-darkGreySettings": "AcW48fP-EnfyD8bO6anBj",
          "ItemFocusAnim-darkGrey": "_3lAc02j3vPGIoXryYyGTZR",
          "ItemFocusAnim-grey": "_388VkzVpUFRuQ1HZEymCy",
          "ItemFocusAnim-translucent-white-10": "tK-6xcUa6TrN9X1V5zj25",
          "ItemFocusAnim-translucent-white-20": "_1UaaS_yXA7SqNdxVDXCD9W",
          "ItemFocusAnimBorder-darkGrey": "_1V7Z378RTDEmk3dXXGXsQa",
          "ItemFocusAnim-green": "_2ldXxMP_HINQZvEbjgDdbf",
          focusAnimation: "_3zr66n761wV-ZHFKw_Yvbn",
          hoverAnimation: "_1MvZ2haWg8XTcl8VHKnoS0",
        };
      },
      19332: (L) => {
        L.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
      },
      14256: (L) => {
        L.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      12247: (L) => {
        L.exports = {
          SteamAwardContainer: "_3n6v2rFCMX3yWMfZrlCn6g",
          InLibraryView: "pqLczqVU9TDbWz5pl3Dhl",
          SVGIcon_DialogCheck: "_3ccByQfkFeqPu_u0ZEuu2b",
          SteamAwardHeader: "_2jgrTr2L4JVpD3vsEejL4u",
          SteamAwardHeaderImage: "_lRFQTx2beRUJL_3ltFfr",
          SteamAwardMainCtn: "_1uGju6QeFG7khpqA7DOs0-",
          SteamAwardMainTitle: "_161Ybvvo7TQ80J6yOfcxC5",
          SteamAwardSubTitle: "Sxxelbb28sRAaDXPxgcHP",
          SteamAwardLearnMore: "VQlY6MEAqF6Wsflo-Q4Wz",
          BottomRight: "zr64QF0O74AQ9RMG-dGnw",
          SteamAwardHeaderText: "_2mrzKOE-ejrZezNROw3GcQ",
          LinkText: "_2x4pgJBF4vbwBJ4KH2VOHG",
          SteamAwardVoteWidget: "khWz0kU5EooSG60KYdU1K",
          SteamAwardVotePrompt: "H5jrPn7OY-0ToSesPTrI6",
          SteamAwardCategoryTitle: "JVE9ORqYtUCERl3y2i7_X",
          VotingTitle: "_32ZmvScTqfRjiW9XXgyqR2",
          SteamAwardCategoryDesc: "_1V-8WYatw7PvjVj9hsAptM",
          SteamAwardVoteButtonArea: "_1v9LHwNb9fLu4yXs5L0jjz",
          SteamAwardVoteButton: "cTcgISesI0T2M-9yed2AU",
          SteamAwardVoteButtonText: "_247y340DSkN1t7QC8tUkFx",
          SteamAwardVoteButtonSubmitted: "_1ouD4mct3_CdBoy_lzVyFJ",
          NominateCtn: "_1SKPLx2FBvP9iC-lJHTkKQ",
          SteamAwardNominateButton: "_1uxCjZZ940xsM0idye1IP-",
          Nominated: "_1No9r92B3LLgMOaSMSC9vE",
          SteamAwardNominationWidget: "_38gTf-DsRc7bVnxxQXxT3B",
          SteamAwardLinkToNominationPage: "_3p83sGhSP-hikRKwITXId-",
          SteamAwardVoteCheckBox: "_1G4MUqubjzDize874UIeYh",
          SteamAwardModalGameTitle: "_15lc0ft7pgAlFXYbgePb-8",
          ExpiredEventHeader: "_3O3XsKT-SiMNsMqyidMLvS",
          AwardCategoriesCtn: "_2u4z7OT5MqNj-6wojCGnsr",
          SteamAwardConflictModal: "_2Xqc9FL9PfCQl8Fo8d7I_L",
          ConflictBody: "_3WKl_XpHUMGcIm4cNhlc_W",
          NominationSwitchCtn: "r9nDOvHWyABfkiiurnMwl",
        };
      },
      90316: (L) => {
        L.exports = {
          narrowWidth: "500px",
          EventDetailsPageContainer: "_2Ptras-ZC31rwdT6pD-t0a",
          StickyPageBarColumn: "_2aUTuHeHvSh1O3J73MAMmQ",
          EventNotPublicBar: "_214UHKV-VeP2IhhsZ2LVcn",
          UnpublishedDataBar: "j-JOpd1RiQoelltUAkGGx",
          EventNotPublicBarTitle: "acDtTp9VueGVdAapPDLxy",
          UnpublishedDataBarTitle: "l7Y1p6I1nHpnwDPjA-a3t",
          EventNotPublicBarDetail: "_1fbHYCMO42X_XiaPzyCcQk",
          UnpublishedDataBarDetail: "_3130s6Y2hpKUIZucKqpnwE",
          EventBackgroundBlurCtn: "_32nPM5nI8cmMdkvRnsUcq",
          EventBackgroundBlur: "stsss-bTNuazY8FYtvTOX",
          DetailArtworkAgeAppropriate: "_1p_lsRZvAYiGSonqGbCnrp",
          DetailArtworkAgeNotAppropriate: "_3x5pK4kfX6SQEKh9iSj3H-",
          EventCoverImageBlr: "_3xNobHnL6L5HNoDQf8AHUo",
          EventBodyCtn: "_3o4SVY-lALGHvkOPxiClcu",
          EventBodyPosition: "_3lIxPlLiNjLik6YIM8DKpk",
          EventBody: "_3aht--c1L66YvvpY-Il67f",
          EventBroadcastCtn: "_1Ph1iFKAgY5MbG0BLSObbI",
          EventColumns: "_1PEIfuF8koQapWSDE4ixM8",
          EventCoverImageCtn: "FZiaqIAvLKRo2ye9j3cq0",
          NoTitleArtwork: "_3Y40JAThJ65ZCkZaMsdrGm",
          ScreenshotInsteadOfCover: "_2r6un4LwM4IZjQFRprhIL3",
          EventCoverImage: "_17G2yhjdc_ZmGlMv-L-S05",
          EventCoverImageBackground: "_2-IygC3-t05_RYwPl6Fkgt",
          InLibraryView: "_3_SEiDNs-lzwV7cTF6gcgt",
          InEditor: "_2YuATTfMo6qZqsst8azM2p",
          MaskImages: "_2DmRfvoCf1m6HLz3w6uKPl",
          EventCoverImageFuzz: "_2EWL0Txuk_th1gh-UxYPPx",
          LibraryEventTitleContainer: "ZHAfj0MPg1zDLXRnCzSsx",
          CoverImageGradient: "_1_x4oDqLbWfiaDp5HQ2yA8",
          EventDetailTitleImg: "_1RA5eG1kXW89QB1SG3mq04",
          EventDetailTitleDesc: "_3Ej2uoApLQ756OReRtcQ2f",
          EventDetailsSticky: "_3IxVZE9uydjh3cA9kmtnk7",
          EventDetailUserType: "_3phfIcOe_STA7hSoFfIxlE",
          EventDetailGameCallToAction: "JOkXFrkqayZ-Pg2Fr46Ho",
          EventDetailTimeInfo: "_2KsEbGy9kiSDeQpcqEc9DG",
          EventDetailsDescription: "_2orfVuUro8BNFNNhRfGk4n",
          EventDetailsBody: "A_A2B6fTn_MPLlGCmsLtd",
          EventDetailsGame: "_1JqXpZvEA66lA79AoE1A4i",
          EventDetailsAvatar: "_2U_20VMsLlLdv66vI22zJg",
          GameActions: "bGROTLQdP5BDMIzo0cL9T",
          ActionButton: "_26-KZHJ9fTyRZHH2c2H6Y2",
          Ownership: "_2VkXpaIdUFw9YfZ7NOSuZO",
          EventDetailsType: "_2u9c-A3-fBObro9MTIQ1os",
          EventDetailTitle: "TqEPC9bhvVpZ1rb3Z8Mbd",
          EventDetailTitleContainer: "_3z2NYCkFizMu4fMvWTIBUG",
          EventDetailsSubTitle: "_20f2sKS2M7PlPSnPCinT26",
          EventDescriptionRichField: "_1dV0eemBulIeNuwlrxbJA_",
          ToolBar: "zMpwi4v_VKAJy80GriVLg",
          EventDescriptionContainer: "_2-t9DuSXZ-g32FrXvXuRfC",
          EventDescriptionArea: "_3UMJE2bBtqZcj2w_S-n8o4",
          LibraryEventBodyContainer: "_32mHvRSmD7AVK9OIOPlaFu",
          "lang_zh-cn": "_2oAxPvOHyVkOcOFbH-ROOn",
          lang_ko: "_36n2d0WrYP7qNfJaBDPBzE",
          lang_ja: "-TO1bNNGYVahD_n4sJP5r",
          "lang_zh-tw": "_3lwKp3Y9WtjxoKIhneSXGJ",
          RightSideTitles: "efy3k8RozzxfFidgbdfZZ",
          DisplayAdminPanel_Title: "_1lmj3YadvgLSNGiTrVsnnT",
          AppSummaryCtn: "Wk21cv1qcYBOF2PSAOfb-",
          AppSummaryWidgetTitleCtn: "jJFfoBi2WDn1ym8KCLfLr",
          Title: "_2gsoDhNzhAXpECJk2aM94W",
          AppSummaryWidgetCtn: "_2jRJR7Vuvy9GStGxMc06AQ",
          DisplayAdminPanel: "XshNh8OHVlOoxz_Yj0fkc",
          Sticky: "_3mQwJy8e1PrRXgZq-rfYHL",
          DisplayAdminPanelMarker: "_3oBRxSIrR4NU_SUyHm24oc",
          DisplayAdminPanelClose: "_1D7XHqTP4JUViNgnjIQ9qx",
          Locked: "_1uXh_NDjzcbWYSUJnopy8Z",
          DisplayAdminPanel_ctn: "_1SQm1cGP42xfEdQhin6L40",
          DisplayAdminPanel_TopSpacer: "_3yTv-i_5aQ3b13xZpESEk-",
          DisplayAdminPanel_Spacer: "_6pX37H30C0s-x4mIFjxUX",
          AdminButton: "_1J0n9Gp8bS7Mha2SNQSwXP",
          EditorStatsCtn: "e2BAgiTc6P_7haFD_YWzs",
          VisibilityNote: "_1G3X_jfMgGX1nzeOAvPZNG",
          EditorStatsRow: "_2SecokIlleKz0K30ieApg5",
          SteamBlog: "_1rafn02Kz4HF1-3xfmuaR0",
          VO: "_1-pFh2QlJBUeqmXrWcbTQQ",
          LunarNewYearOpenEnvelopeVideoDialog: "_1-SzihnWiO-8bBYWJ-TS-4",
          Container: "_1dcfd1Jxk-yCCdG0k1eyG-",
          Column: "_3o_dPHiTf_pT5uP0TuTE2V",
          VideoBox: "KAf3yvFJr1ynRXT8aqd3s",
          CoinText: "_14dU2UGt1PmbFzm_3MFVsw",
          Visible: "_2bKyVv-GvmJOHaKOyny5tE",
          LunarNewYearOpenEnvelopeVideo: "_2JgvPxvGXJvSckj2hqob0v",
          StoryHeader: "uJBQiPn1x-EafTRgDg6M4",
          StorySubHeader: "hl9GlxJvvzMyW_nSZzClV",
          StoryText: "_1vUbVy_chcUkci3kdPrSUf",
          StoryPicture: "_1ovBW-Uq5McD_BCBZTM_9a",
          CheckBackText: "_3FFfw7Avb_USRJcepkNLAO",
          DancingRat: "_3gJiVpOab5ooTJ9VkQZVJL",
          Links: "_2U9E5YNMewy5F336yikcMG",
          MarketLink: "_19WRlHb-r_EpFcgEtFL8iV",
          MarketLinkhover: "Q7KDk8kBk01MxhM_KZoqt",
          ReadMoreCnt: "_1L8MouFdSBwf8mcqLtAIPu",
        };
      },
    },
  ]);
})();
