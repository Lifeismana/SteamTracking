/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [892],
  {
    30253: (e) => {
      e.exports = {
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
    10378: (e, t, o) => {
      "use strict";
      o.r(t),
        o.d(t, {
          default: () => p,
          readAdditionalDataFromForumPost: () => k,
          useCommentThread: () => y,
        });
      var r = o(7850),
        s = o(90182),
        n = o(28395),
        l = o(56545),
        a = o(34410),
        d = o(37226),
        i = o(15993),
        c = o(34214),
        u = o(88942),
        _ = o(23809),
        m = o(22797),
        j = o(78327),
        v = o(30253),
        f = o(90626),
        b = o(12155),
        g = o(52038);
      function p(e) {
        var t, o;
        const l = "floatingforumreportedsubjectslist",
          d = (0, s.kZ)(a.lN, e.gidTopic),
          [i, c] = (0, f.useState)(() => void 0 !== localStorage[l]);
        if (
          ((0, f.useMemo)(() => {
            var e, t;
            null ===
              (t =
                null === (e = d.data) || void 0 === e ? void 0 : e.subjects) ||
              void 0 === t ||
              t.sort(h);
          }, [null === (t = d.data) || void 0 === t ? void 0 : t.subjects]),
          !d.isSuccess ||
            !(null === (o = d.data) || void 0 === o ? void 0 : o.subjects) ||
            0 === d.data.subjects.length)
        )
          return null;
        let u = 0;
        return (0, r.jsx)("div", {
          className: i ? v.FloatingSubjectListCtn : "",
          children: (0, r.jsx)("div", {
            className: "rightbox",
            children: (0, r.jsxs)("div", {
              className: "content",
              children: [
                (0, r.jsx)("div", {
                  className: "rightbox_list_header",
                  children: (0, r.jsxs)("span", {
                    className: v.SplitHeader,
                    children: [
                      n.T.Localize("#reportedsubjectlist_header"),
                      " ",
                      (0, r.jsx)("button", {
                        className: v.PopoutButton,
                        onClick: () => {
                          i
                            ? localStorage.removeItem(l)
                            : localStorage.setItem(l, "1"),
                            c(!i);
                        },
                        children: (0, r.jsx)(b.YNO, {}),
                      }),
                    ],
                  }),
                }),
                d.isError &&
                  (0, r.jsx)("div", {
                    className: "moderatorToolLink",
                    children: "Error",
                  }),
                d.isLoading && (0, r.jsx)(m.t, {}),
                d.isSuccess &&
                  (0, r.jsx)("div", {
                    style: { maxHeight: "20em", overflowY: "scroll" },
                    children: d.data.subjects.map((e) => {
                      var t, o;
                      return (
                        null ===
                          (o =
                            null === (t = e.additional_subject_data) ||
                            void 0 === t
                              ? void 0
                              : t.data) || void 0 === o
                          ? void 0
                          : o.length
                      )
                        ? (0, r.jsx)(x, { subject: e }, e.subject_id)
                        : (0, r.jsx)(
                            "div",
                            {
                              className: (0, g.A)(
                                "moderatorToolLink",
                                v.ReportedSubjectRow,
                              ),
                              children: "Bug - inform Valve",
                            },
                            "bad-" + u++,
                          );
                    }),
                  }),
              ],
            }),
          }),
        });
      }
      function h(e, t) {
        const o =
          e.unresolved_dispute_count + e.unresolved_report_count > 0 ? 1 : 0;
        return (
          (t.unresolved_dispute_count + t.unresolved_report_count > 0 ? 1 : 0) -
            o ||
          t.required_moderator_level - e.required_moderator_level ||
          (function (e, t) {
            if (e.length !== t.length) return e.length - t.length;
            for (let o = 0; o < e.length; o++) {
              const r = e.charCodeAt(o),
                s = t.charCodeAt(o);
              if (r !== s) return r - s;
            }
            return 0;
          })(e.subject_id, t.subject_id)
        );
      }
      function S(e) {
        for (;;) {
          const t = e.indexOf("[/quote]");
          if (-1 === t) break;
          e = e.slice(t + 8);
        }
        return e.slice(0, 35);
      }
      function x(e) {
        var t, o;
        const { subject: s } = e,
          l = k(e.subject),
          a = y(l.clanSteamId, d.Bv, l.forumId, s.subject_group_id);
        let c = null;
        "0" === s.subject_id && (c = "Topic");
        let u = "#NA";
        if (null === c && a.isSuccess) {
          let e = 1;
          for (const o of null !== (t = a.data.comments) && void 0 !== t
            ? t
            : []) {
            if (o.gidcomment === s.subject_id) {
              (c = S(o.text)), (u = `#${e}`);
              break;
            }
            e++;
          }
        }
        if (null === c && a.isSuccess)
          for (const e of null !== (o = a.data.deleted_comments) && void 0 !== o
            ? o
            : [])
            if (e.gidcomment === s.subject_id) {
              c = S(e.text);
              break;
            }
        null === c && (c = "[Comment]");
        const _ =
            "0" === s.subject_id
              ? `#forum_op_${s.subject_group_id}`
              : `#c${s.subject_id}`,
          m = s.unresolved_dispute_count > 0 || s.unresolved_report_count > 0,
          f = s.required_moderator_level === i.PV,
          b = s.required_moderator_level === i.lp;
        return (0, r.jsxs)("div", {
          className: (0, g.A)("moderatorToolLink", v.ReportedSubjectRow),
          children: [
            (0, r.jsxs)("a", {
              href: _,
              children: [
                m &&
                  !f &&
                  !b &&
                  (0, r.jsx)("img", {
                    className: v.FlagIcon,
                    src: `${j.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                  }),
                !m &&
                  (0, r.jsx)("span", { className: v.FlagIcon, children: " " }),
                m &&
                  f &&
                  (0, r.jsx)("span", {
                    className: (0, g.A)(v.FlagIcon, v.ValveOnlyFlag),
                    children: "VO",
                  }),
                m &&
                  b &&
                  (0, r.jsx)("span", {
                    className: (0, g.A)(v.FlagIcon, v.SupervisorFlag),
                    children: "▲",
                  }),
                " ",
                u,
                " ",
                c,
              ],
            }),
            (0, r.jsxs)("div", {
              className: v.SubjectReportSummary,
              children: [
                " ",
                n.T.Localize(
                  "#forumsubjectlist_subjectreportsummary",
                  s.unresolved_report_count,
                  s.unresolved_dispute_count,
                ),
              ],
            }),
          ],
        });
      }
      function y(e, t, o, r) {
        const s = (0, _.KV)();
        return (0, u.I)({
          queryKey: ["comment_thread", e, t, o, r],
          queryFn: async () => {
            const n = l.w.Init(c.ZP);
            n.Body().set_steamid(e),
              n.Body().set_comment_thread_type(t),
              n.Body().set_gidfeature(o),
              n.Body().set_gidfeature2(r),
              n.Body().set_include_deleted(!0),
              n.Body().set_oldest_first(!0);
            return (await c.BE.GetCommentThread(s, n)).Body().toObject();
          },
        });
      }
      function k(e) {
        var t, o;
        let r = "",
          s = "";
        if (!e.additional_subject_data) return null;
        for (const n of null !==
          (o =
            null === (t = e.additional_subject_data) || void 0 === t
              ? void 0
              : t.data) && void 0 !== o
          ? o
          : [])
          "clanSteamId" === n.key
            ? (r = n.value)
            : "forumId" === n.key
              ? (s = n.value)
              : console.error(
                  `Unknown additional data key ${n.key} in forum post.`,
                );
        if ("" == r)
          return console.error("Missing clanSteamId in additional data."), null;
        if ("" == s)
          return console.error("Missing forumId in additional data."), null;
        return { clanSteamId: r, forumId: s };
      }
    },
    37226: (e, t, o) => {
      "use strict";
      o.d(t, { Bv: () => s, Dq: () => r, Yd: () => n });
      const r = 5,
        s = 7,
        n = 10;
    },
  },
]);
