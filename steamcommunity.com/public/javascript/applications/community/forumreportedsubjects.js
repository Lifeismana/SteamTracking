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
      };
    },
    10378: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          default: () => j,
          readAdditionalDataFromForumPost: () => g,
          useCommentThread: () => h,
        });
      var o = s(7850),
        i = s(90182),
        n = s(28395),
        a = s(56545),
        r = s(37403),
        d = s(88942),
        c = s(23809),
        l = s(22797),
        u = s(78327),
        m = s(30253),
        _ = s(90626),
        f = s(12155);
      function j(e) {
        const t = "floatingforumreportedsubjectslist",
          s = (0, i.kZ)(1, e.gidTopic),
          [a, r] = (0, _.useState)(() => void 0 !== localStorage[t]);
        if (s.isSuccess && 0 === s.data.subjects.length) return null;
        return (0, o.jsxs)("div", {
          className: a ? m.FloatingSubjectListCtn : "",
          children: [
            (0, o.jsx)("div", { className: "rightbox_header" }),
            (0, o.jsx)("div", {
              className: "rightbox",
              children: (0, o.jsxs)("div", {
                className: "content",
                children: [
                  (0, o.jsx)("div", {
                    className: "rightbox_list_header",
                    children: (0, o.jsxs)("span", {
                      className: m.SplitHeader,
                      children: [
                        n.T.Localize("#reportedsubjectlist_header"),
                        " ",
                        (0, o.jsx)("button", {
                          className: m.PopoutButton,
                          onClick: () => {
                            a
                              ? localStorage.removeItem(t)
                              : localStorage.setItem(t, "1"),
                              r(!a);
                          },
                          children: (0, o.jsx)(f.YNO, {}),
                        }),
                      ],
                    }),
                  }),
                  s.isError &&
                    (0, o.jsx)("div", {
                      className: "moderatorToolLink",
                      children: "Error",
                    }),
                  s.isLoading && (0, o.jsx)(l.t, {}),
                  s.isSuccess &&
                    (0, o.jsx)("div", {
                      style: { maxHeight: "20em", overflowY: "scroll" },
                      children: s.data.subjects.map((e) =>
                        (0, o.jsx)(b, { subject: e }, e.subject_id),
                      ),
                    }),
                ],
              }),
            }),
            (0, o.jsx)("div", { className: "rightbox_footer" }),
          ],
        });
      }
      function b(e) {
        const { subject: t } = e,
          s = g(e.subject),
          i = h(s.clanSteamId, 7, s.forumId, t.subject_group_id);
        if (0 === t.unresolved_dispute_count && 0 === t.unresolved_report_count)
          return null;
        let n = null;
        if (("0" === t.subject_id && (n = "Topic"), null === n && i.isSuccess))
          for (const e of i.data.comments)
            if (e.gidcomment === t.subject_id) {
              n = e.text.slice(0, 35) + (e.text.length > 35 ? "..." : "");
              break;
            }
        if (null === n && i.isSuccess)
          for (const e of i.data.deleted_comments)
            if (e.gidcomment === t.subject_id) {
              n = e.text.slice(0, 35) + (e.text.length > 35 ? "..." : "");
              break;
            }
        null === n && (n = "[Comment]");
        const a =
          "0" === t.subject_id
            ? `#forum_op_${t.subject_group_id}`
            : `#c${t.subject_id}`;
        return (0, o.jsx)("div", {
          className: "moderatorToolLink",
          children: (0, o.jsxs)("a", {
            href: a,
            children: [
              (0, o.jsx)("img", {
                src: `${u.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
              }),
              " ",
              n,
            ],
          }),
        });
      }
      function h(e, t, s, o) {
        const i = (0, c.KV)();
        return (0, d.I)({
          queryKey: ["comment_thread", e, t, s, o],
          queryFn: async () => {
            const n = a.w.Init(r.ZP);
            n.Body().set_steamid(e),
              n.Body().set_comment_thread_type(t),
              n.Body().set_gidfeature(s),
              n.Body().set_gidfeature2(o),
              n.Body().set_include_deleted(!0),
              n.Body().set_oldest_first(!0);
            return (await r.BE.GetCommentThread(i, n)).Body().toObject();
          },
        });
      }
      function g(e) {
        var t, s;
        let o = "",
          i = "";
        if (!e.additional_subject_data) return null;
        for (const n of null !==
          (s =
            null === (t = e.additional_subject_data) || void 0 === t
              ? void 0
              : t.data) && void 0 !== s
          ? s
          : [])
          "clanSteamId" === n.key
            ? (o = n.value)
            : "forumId" === n.key
              ? (i = n.value)
              : console.error(
                  `Unknown additional data key ${n.key} in forum post.`,
                );
        if ("" == o)
          return console.error("Missing clanSteamId in additional data."), null;
        if ("" == i)
          return console.error("Missing forumId in additional data."), null;
        return { clanSteamId: o, forumId: i };
      }
    },
  },
]);
