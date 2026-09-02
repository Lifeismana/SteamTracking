/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [7062],
    {
      17871: (A, f, u) => {
        "use strict";
        u.r(f),
          u.d(f, {
            ReportedSubjectList: () => D,
            default: () => L,
            useCommentThread: () => x,
          });
        var a = u(7850),
          d = u(46085),
          l = u(86067),
          R = u(35038),
          y = u(64981),
          j = u(68495),
          T = u(20476),
          p = u(98112),
          B = u(88942),
          b = u(68312),
          v = u(85599),
          S = u(3166),
          m = u(30253),
          U = u.n(m),
          P = u(90626),
          K = u(36118),
          C = u(36707);
        function L(_) {
          const o = (0, d.kZ)(y.lN, _.gidTopic),
            t = x(_.clanSteamID, j.Bv, _.gidForum, _.gidTopic);
          return (0, a.jsx)(D, {
            subjectType: y.lN,
            subjectGroupQuery: o,
            commentThreadQuery: t,
          });
        }
        function D(_) {
          var o, t, e;
          const { subjectGroupQuery: s } = _,
            n = "floatingforumreportedsubjectslist",
            [r, c] = (0, P.useState)(() => localStorage[n] !== void 0);
          if (
            ((0, P.useMemo)(() => {
              var E, g;
              (g = (E = s.data) == null ? void 0 : E.subjects) == null ||
                g.sort(I);
            }, [(o = s.data) == null ? void 0 : o.subjects]),
            !s.isSuccess ||
              !((t = s.data) != null && t.subjects) ||
              s.data.subjects.length === 0)
          )
            return null;
          const i = () => {
            r ? localStorage.removeItem(n) : localStorage.setItem(n, "1"),
              c(!r);
          };
          let h = 0;
          return (0, a.jsx)("div", {
            className: r
              ? m.FloatingSubjectListCtn
              : (e = _.inlineClassNames) != null
                ? e
                : "",
            children: (0, a.jsx)("div", {
              className: "rightbox",
              children: (0, a.jsxs)("div", {
                className: "content",
                children: [
                  (0, a.jsx)("div", {
                    className: "rightbox_list_header",
                    children: (0, a.jsxs)("span", {
                      className: m.SplitHeader,
                      children: [
                        (0, a.jsx)("div", {
                          className: "title",
                          children: l.T.Localize("#reportedsubjectlist_header"),
                        }),
                        (0, a.jsx)("button", {
                          className: m.PopoutButton,
                          onClick: i,
                          children: (0, a.jsx)(K.YNO, {}),
                        }),
                      ],
                    }),
                  }),
                  s.isError &&
                    (0, a.jsx)("div", {
                      className: "moderatorToolLink",
                      children: "Error",
                    }),
                  s.isLoading && (0, a.jsx)(v.t, {}),
                  s.isSuccess &&
                    (0, a.jsx)("div", {
                      style: { maxHeight: "20em", overflowY: "scroll" },
                      children: s.data.subjects.map((E) => {
                        var g, O;
                        return (O =
                          (g = E.additional_subject_data) == null
                            ? void 0
                            : g.data) != null && O.length
                          ? (0, a.jsx)(
                              F,
                              {
                                subject: E,
                                commentThreadQuery: _.commentThreadQuery,
                              },
                              E.subject_id,
                            )
                          : (0, a.jsx)(
                              "div",
                              {
                                className: (0, C.A)(
                                  "moderatorToolLink",
                                  m.ReportedSubjectRow,
                                ),
                                children: "Bug - inform Valve",
                              },
                              `bad-${h++}`,
                            );
                      }),
                    }),
                ],
              }),
            }),
          });
        }
        function w(_, o) {
          if (_.length !== o.length) return _.length - o.length;
          for (let t = 0; t < _.length; t++) {
            const e = _.charCodeAt(t),
              s = o.charCodeAt(t);
            if (e !== s) return e - s;
          }
          return 0;
        }
        function I(_, o) {
          const t =
            _.unresolved_dispute_count + _.unresolved_report_count > 0 ? 1 : 0;
          return (
            (o.unresolved_dispute_count + o.unresolved_report_count > 0
              ? 1
              : 0) - t ||
            o.required_moderator_level - _.required_moderator_level ||
            w(_.subject_id, o.subject_id)
          );
        }
        function M(_) {
          for (;;) {
            const t = _.indexOf("[/quote]");
            if (t === -1) break;
            _ = _.slice(t + 8);
          }
          return _.slice(0, 35);
        }
        function F(_) {
          var o, t;
          const { subject: e, commentThreadQuery: s } = _;
          let n = null;
          e.subject_id === "0" && (n = "Topic");
          let r = "#NA";
          if (n === null && s.isSuccess) {
            let g = 1;
            for (const O of (o = s.data.comments) != null ? o : []) {
              if (O.gidcomment === e.subject_id) {
                (n = M(O.text)), (r = `#${g}`);
                break;
              }
              g++;
            }
          }
          if (n === null && s.isSuccess) {
            if (e.subject_type === y.NC) n = "[Deleted]";
            else
              for (const g of (t = s.data.deleted_comments) != null ? t : [])
                if (g.gidcomment === e.subject_id) {
                  n = M(g.text);
                  break;
                }
          }
          n === null && (n = "[Comment]");
          let c;
          e.subject_type === y.lN
            ? (c =
                e.subject_id === "0"
                  ? `#forum_op_${e.subject_group_id}`
                  : `#c${e.subject_id}`)
            : e.subject_type === y.NC && (c = `#comment_${e.subject_id}`);
          const i =
              e.unresolved_dispute_count > 0 || e.unresolved_report_count > 0,
            h = e.required_moderator_level === T.PV,
            E = e.required_moderator_level === T.lp;
          return (0, a.jsxs)("div", {
            className: (0, C.A)("moderatorToolLink", m.ReportedSubjectRow),
            children: [
              (0, a.jsxs)("a", {
                href: c,
                children: [
                  i &&
                    !h &&
                    !E &&
                    (0, a.jsx)("img", {
                      className: m.FlagIcon,
                      src: `${S.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                    }),
                  !i &&
                    (0, a.jsx)("span", {
                      className: m.FlagIcon,
                      children: "\xA0",
                    }),
                  i &&
                    h &&
                    (0, a.jsx)("span", {
                      className: (0, C.A)(m.FlagIcon, m.ValveOnlyFlag),
                      children: "VO",
                    }),
                  i &&
                    E &&
                    (0, a.jsx)("span", {
                      className: (0, C.A)(m.FlagIcon, m.SupervisorFlag),
                      children: "\u25B2",
                    }),
                  "\xA0",
                  r,
                  "\xA0",
                  n,
                ],
              }),
              (0, a.jsxs)("div", {
                className: m.SubjectReportSummary,
                children: [
                  "\xA0",
                  l.T.Localize(
                    "#forumsubjectlist_subjectreportsummary",
                    e.unresolved_report_count,
                    e.unresolved_dispute_count,
                  ),
                ],
              }),
            ],
          });
        }
        function x(_, o, t, e) {
          const s = (0, b.KV)();
          return (0, B.I)({
            queryKey: ["comment_thread", _, o, t, e],
            queryFn: async () => {
              const n = R.w.Init(p.ZP);
              return (
                n.Body().set_steamid(_),
                n.Body().set_comment_thread_type(o),
                t !== -1 && n.Body().set_gidfeature(t),
                e !== -1 && n.Body().set_gidfeature2(e),
                n.Body().set_include_deleted(!0),
                n.Body().set_oldest_first(!0),
                (await p.BE.GetCommentThread(s, n)).Body().toObject()
              );
            },
          });
        }
      },
      46085: (A, f, u) => {
        "use strict";
        u.d(f, {
          EC: () => x,
          KQ: () => M,
          Kt: () => K,
          N8: () => L,
          c3: () => _,
          iW: () => v,
          kZ: () => U,
          lY: () => C,
          wy: () => w,
          y4: () => D,
        });
        var a = u(35038),
          d = u(16277),
          l = u(68312),
          R = u(88942),
          y = u(29385),
          j = u(61739),
          T = u(72604),
          p = u(98112);
        const B = "get_content_report_subject_group",
          b = "get_content_report_subject_audit_log";
        async function v(o, t, e, s) {
          return Promise.all([
            o.invalidateQueries({ queryKey: [B, t, e] }),
            o.invalidateQueries({ queryKey: [b, t, e, s] }),
          ]);
        }
        async function S(o, t, e) {
          return Promise.all([
            o.invalidateQueries({ queryKey: [B, t, e] }),
            o.invalidateQueries({ queryKey: [b, t, e] }),
          ]);
        }
        function m(o, t, e) {
          return {
            queryKey: [B, t, e],
            queryFn: async () => {
              const s = a.w.Init(d.ge);
              s.Body().set_subject_type(t), s.Body().set_subject_group_id(e);
              const n = await d.fL.GetContentReportSubjectGroup(o, s);
              if (!n.BSuccess())
                throw new Error(
                  "Failed in GetContentReportSubjectGroup, EResult: " +
                    n.GetEResult(),
                );
              return n.Body().toObject();
            },
          };
        }
        function U(o, t) {
          const e = (0, l.KV)();
          return (0, R.I)(m(e, o, t));
        }
        function P(o, t, e, s) {
          return {
            queryKey: [b, t, e, s],
            queryFn: async () => {
              if (t === void 0 || e === void 0 || s === void 0) return;
              const n = a.w.Init(d.Ru);
              return (
                n.Body().set_subject_type(t),
                n.Body().set_subject_group_id(e),
                n.Body().set_subject_id(s),
                (await d.fL.GetAuditLog(o, n)).Body().toObject()
              );
            },
          };
        }
        function K(o, t, e) {
          const s = (0, l.KV)();
          return (0, R.I)(P(s, o, t, e));
        }
        function C(o, t, e) {
          const s = (0, l.KV)(),
            n = (0, y.jE)();
          return (0, j.n)({
            mutationFn: async (r) => {
              const c = a.w.Init(d.u5);
              c.Body().set_subject_type(o),
                c.Body().set_subject_group_id(t),
                c.Body().set_subject_id(e),
                c.Body().set_required_level(r.eNewLevel),
                r.eReason && c.Body().set_reason(r.eReason),
                r.strNote && c.Body().set_note(r.strNote);
              const i = await d.fL.EscalateSubject(s, c);
              if (i.GetEResult() !== T.R)
                throw new Error(`Failed to escalate subject: ${i.GetEMsg()}`);
            },
            onSuccess: async (r, c) => {
              await Promise.all([
                v(n, o, t, e),
                n.invalidateQueries({ queryKey: ["get_claimed"] }),
                n.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function L() {
          const o = (0, l.KV)(),
            t = (0, y.jE)();
          return (0, j.n)({
            mutationFn: async (e) => {
              const s = a.w.Init(d.j);
              s.Body().set_subject_type(e.eSubjectType),
                s.Body().set_subject_group_id(e.ulSubjectGroupID),
                s.Body().set_subject_id(e.ulSubjectID);
              const n = await d.fL.SustainModeration(o, s);
            },
            onSuccess: async (e, s) => {
              await t.invalidateQueries({ queryKey: ["get_claimed"] }),
                await v(t, s.eSubjectType, s.ulSubjectGroupID, s.ulSubjectID);
            },
          });
        }
        function D(o, t, e, s, n) {
          const r = (0, l.KV)(),
            c = (0, y.jE)();
          return (0, j.n)({
            mutationFn: async () => {
              const i = a.w.Init(d.ZV);
              i.Body().set_steamid(o),
                i.Body().set_subject_type(t),
                i.Body().set_subject_group_id(e),
                i.Body().set_subject_id(s),
                i.Body().set_details(n);
              const h = await d.fL.DisputeModerationForSubject(r, i);
            },
            onSuccess: async () => {
              await v(c, t, e, s);
            },
          });
        }
        function w(o, t, e, s) {
          const n = (0, y.jE)(),
            r = (0, l.KV)();
          return (0, j.n)({
            mutationFn: async () => {
              const c = a.w.Init(d.zF);
              c.Body().set_subject_type(o),
                c.Body().set_subject_group_id(t),
                c.Body().set_subject_id(e),
                c.Body().set_owner_dispute_details(s);
              const i = await d.fL.UpdateSubject(r, c);
              if (!i.BSuccess()) throw new Error("EResult " + i.GetEResult());
            },
            onSuccess: async () => {
              await v(n, o, t, e);
            },
          });
        }
        function I(o, t) {
          return {
            queryKey: ["reporterstats", t],
            queryFn: async () => {
              const e = a.w.Init(d.KD);
              e.Body().set_steamid(t);
              const s = await d.fL.GetReporterStats(o, e);
              if (!s.BSuccess()) throw new Error("EResult " + s.GetEResult());
              return s.Body().toObject();
            },
          };
        }
        function M(o) {
          const t = (0, l.KV)();
          return (0, R.I)(I(t, o));
        }
        function F(o, t) {
          const e = useActiveServiceTransport(),
            s = useQueryClient();
          return useMutation({
            mutationFn: async (n) => {
              const r = CProtoBufMsg.Init(
                CContentModeration_UpdateSubjectGroup_Request,
              );
              r.Body().set_subject_type(o),
                r.Body().set_subject_group_id(t),
                r.Body().set_new_subject_group_id(n.ulNewSubjectGroupID),
                r
                  .Body()
                  .set_additional_subject_data(n.rgNewAdditionalSubjectData);
              const c = await ContentModerationService.UpdateSubjectGroup(e, r);
              if (!r.BSuccess())
                throw new Error(
                  "UpdateSubjectGroup returned EResult " + c.GetEResult(),
                );
            },
            onSuccess: async (n, r) => {
              await S(s, o, t), await S(s, o, r.ulNewSubjectGroupID);
            },
          });
        }
        function x(o, t, e) {
          const s = (0, l.KV)(),
            n = (0, y.jE)();
          return (0, j.n)({
            mutationFn: async (r) => {
              const c = a.w.Init(p.Er);
              c.Body().set_steamid(o),
                c.Body().set_comment_thread_id(t),
                c.Body().set_gidcomment(e),
                c.Body().set_reason(r.reason),
                c.Body().set_note(r.message);
              for (const h of r.sanctions) {
                const E = new p.u6();
                E.set_sanction(h.sanction),
                  h.days && E.set_days(h.days),
                  c.Body().add_sanctions(E);
              }
              const i = await p.BE.SanctionComment(s, c);
              if (!i.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${i.GetEResult()} (${i.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await n.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function _(o, t, e) {
          const s = (0, l.KV)(),
            n = (0, y.jE)();
          return (0, j.n)({
            mutationFn: async () => {
              const r = a.w.Init(p.RX);
              r.Body().set_steamid(o),
                r.Body().set_comment_thread_id(t),
                r.Body().set_gidcomment(e),
                r.Body().set_report_action(p.du.Pn),
                r.Body().set_resolve(!0),
                await p.Vi.UpdateCommentReportState(s, r);
            },
            onSuccess: async () => {
              await n.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      68495: (A, f, u) => {
        "use strict";
        u.d(f, { Bv: () => p, Dq: () => j, Yd: () => v });
        const a = 0,
          d = 1,
          l = 2,
          R = 3,
          y = 4,
          j = 5,
          T = 6,
          p = 7,
          B = 8,
          b = 9,
          v = 10,
          S = 11,
          m = 12,
          U = 13,
          P = 14,
          K = 15,
          C = 16,
          L = 17,
          D = 18,
          w = 19,
          I = 20,
          M = 21;
      },
      30253: (A) => {
        A.exports = {
          FloatingSubjectListCtn: "_2Z4y2kIderxN4_alSJYYh8",
          SplitHeader: "_2B88BA7YbropfCtjJdn1yD",
          PopoutButton: "_3cujMozXvwTlTehPQtPJ7F",
          ReportedSubjectRow: "_32u0ZJiVZP0gaSLs5sdhUy",
          SubjectReportSummary: "_9Ygy5gJ500tkoDj_G546U",
          FlagIcon: "_2DMl8RTVaYtsJarLDt3hqF",
          ValveOnlyFlag: "-K7dp4xj1MBriG1APh1f4",
          SupervisorFlag: "_32OXEg2kS_2-BTKOec40kP",
        };
      },
    },
  ]);
})();
