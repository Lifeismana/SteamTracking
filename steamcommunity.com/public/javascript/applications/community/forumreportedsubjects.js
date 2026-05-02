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
      };
    },
    10378: (e, t, o) => {
      "use strict";
      o.r(t),
        o.d(t, {
          default: () => b,
          readAdditionalDataFromForumPost: () => x,
          useCommentThread: () => p,
        });
      var s = o(7850),
        i = o(90182),
        n = o(28395),
        r = o(56545),
        a = o(37403),
        d = o(88942),
        c = o(23809),
        l = o(22797),
        u = o(78327),
        m = o(30253),
        _ = o(90626),
        f = o(12155),
        j = o(52038);
      function b(e) {
        const t = "floatingforumreportedsubjectslist",
          o = (0, i.kZ)(1, e.gidTopic),
          [r, a] = (0, _.useState)(() => void 0 !== localStorage[t]);
        if (o.isSuccess && 0 === o.data.subjects.length) return null;
        return (0, s.jsxs)("div", {
          className: r ? m.FloatingSubjectListCtn : "",
          children: [
            (0, s.jsx)("div", { className: "rightbox_header" }),
            (0, s.jsx)("div", {
              className: "rightbox",
              children: (0, s.jsxs)("div", {
                className: "content",
                children: [
                  (0, s.jsx)("div", {
                    className: "rightbox_list_header",
                    children: (0, s.jsxs)("span", {
                      className: m.SplitHeader,
                      children: [
                        n.T.Localize("#reportedsubjectlist_header"),
                        " ",
                        (0, s.jsx)("button", {
                          className: m.PopoutButton,
                          onClick: () => {
                            r
                              ? localStorage.removeItem(t)
                              : localStorage.setItem(t, "1"),
                              a(!r);
                          },
                          children: (0, s.jsx)(f.YNO, {}),
                        }),
                      ],
                    }),
                  }),
                  o.isError &&
                    (0, s.jsx)("div", {
                      className: "moderatorToolLink",
                      children: "Error",
                    }),
                  o.isLoading && (0, s.jsx)(l.t, {}),
                  o.isSuccess &&
                    (0, s.jsx)("div", {
                      style: { maxHeight: "20em", overflowY: "scroll" },
                      children: o.data.subjects.map((e) =>
                        (0, s.jsx)(g, { subject: e }, e.subject_id),
                      ),
                    }),
                ],
              }),
            }),
            (0, s.jsx)("div", { className: "rightbox_footer" }),
          ],
        });
      }
      function h(e) {
        for (;;) {
          const t = e.indexOf("[/quote]");
          if (-1 === t) break;
          e = e.slice(t + 8);
        }
        return e.slice(0, 35);
      }
      function g(e) {
        var t, o;
        const { subject: i } = e,
          n = x(e.subject),
          r = p(n.clanSteamId, 7, n.forumId, i.subject_group_id);
        if (0 === i.unresolved_dispute_count && 0 === i.unresolved_report_count)
          return null;
        let a = null;
        if (("0" === i.subject_id && (a = "Topic"), null === a && r.isSuccess))
          for (const e of null !== (t = r.data.comments) && void 0 !== t
            ? t
            : [])
            if (e.gidcomment === i.subject_id) {
              a = h(e.text);
              break;
            }
        if (null === a && r.isSuccess)
          for (const e of null !== (o = r.data.deleted_comments) && void 0 !== o
            ? o
            : [])
            if (e.gidcomment === i.subject_id) {
              a = h(e.text);
              break;
            }
        null === a && (a = "[Comment]");
        const d =
          "0" === i.subject_id
            ? `#forum_op_${i.subject_group_id}`
            : `#c${i.subject_id}`;
        return (0, s.jsx)("div", {
          className: (0, j.A)("moderatorToolLink", m.ReportedSubjectRow),
          children: (0, s.jsxs)("a", {
            href: d,
            children: [
              (0, s.jsx)("img", {
                src: `${u.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
              }),
              " ",
              a,
            ],
          }),
        });
      }
      function p(e, t, o, s) {
        const i = (0, c.KV)();
        return (0, d.I)({
          queryKey: ["comment_thread", e, t, o, s],
          queryFn: async () => {
            const n = r.w.Init(a.ZP);
            n.Body().set_steamid(e),
              n.Body().set_comment_thread_type(t),
              n.Body().set_gidfeature(o),
              n.Body().set_gidfeature2(s),
              n.Body().set_include_deleted(!0),
              n.Body().set_oldest_first(!0);
            return (await a.BE.GetCommentThread(i, n)).Body().toObject();
          },
        });
      }
      function x(e) {
        var t, o;
        let s = "",
          i = "";
        if (!e.additional_subject_data) return null;
        for (const n of null !==
          (o =
            null === (t = e.additional_subject_data) || void 0 === t
              ? void 0
              : t.data) && void 0 !== o
          ? o
          : [])
          "clanSteamId" === n.key
            ? (s = n.value)
            : "forumId" === n.key
              ? (i = n.value)
              : console.error(
                  `Unknown additional data key ${n.key} in forum post.`,
                );
        if ("" == s)
          return console.error("Missing clanSteamId in additional data."), null;
        if ("" == i)
          return console.error("Missing forumId in additional data."), null;
        return { clanSteamId: s, forumId: i };
      }
    },
  },
]);
