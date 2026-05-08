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
        FlagIcon: "_2DMl8RTVaYtsJarLDt3hqF",
      };
    },
    10378: (e, t, o) => {
      "use strict";
      o.r(t),
        o.d(t, {
          default: () => v,
          readAdditionalDataFromForumPost: () => x,
          useCommentThread: () => p,
        });
      var n = o(7850),
        s = o(90182),
        i = o(28395),
        r = o(56545),
        d = o(37403),
        a = o(88942),
        l = o(23809),
        c = o(22797),
        u = o(78327),
        m = o(30253),
        _ = o(90626),
        f = o(12155),
        j = o(52038);
      function v(e) {
        var t, o;
        const r = "floatingforumreportedsubjectslist",
          d = (0, s.kZ)(1, e.gidTopic),
          [a, l] = (0, _.useState)(() => void 0 !== localStorage[r]);
        if (
          ((0, _.useMemo)(() => {
            var e, t;
            null ===
              (t =
                null === (e = d.data) || void 0 === e ? void 0 : e.subjects) ||
              void 0 === t ||
              t.sort(b);
          }, [null === (t = d.data) || void 0 === t ? void 0 : t.subjects]),
          !d.isSuccess ||
            !(null === (o = d.data) || void 0 === o ? void 0 : o.subjects) ||
            0 === d.data.subjects.length)
        )
          return null;
        let u = 0;
        return (0, n.jsx)("div", {
          className: a ? m.FloatingSubjectListCtn : "",
          children: (0, n.jsx)("div", {
            className: "rightbox",
            children: (0, n.jsxs)("div", {
              className: "content",
              children: [
                (0, n.jsx)("div", {
                  className: "rightbox_list_header",
                  children: (0, n.jsxs)("span", {
                    className: m.SplitHeader,
                    children: [
                      i.T.Localize("#reportedsubjectlist_header"),
                      " ",
                      (0, n.jsx)("button", {
                        className: m.PopoutButton,
                        onClick: () => {
                          a
                            ? localStorage.removeItem(r)
                            : localStorage.setItem(r, "1"),
                            l(!a);
                        },
                        children: (0, n.jsx)(f.YNO, {}),
                      }),
                    ],
                  }),
                }),
                d.isError &&
                  (0, n.jsx)("div", {
                    className: "moderatorToolLink",
                    children: "Error",
                  }),
                d.isLoading && (0, n.jsx)(c.t, {}),
                d.isSuccess &&
                  (0, n.jsx)("div", {
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
                        ? (0, n.jsx)(g, { subject: e }, e.subject_id)
                        : (0, n.jsx)(
                            "div",
                            {
                              className: (0, j.A)(
                                "moderatorToolLink",
                                m.ReportedSubjectRow,
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
      function b(e, t) {
        const o =
            e.unresolved_dispute_count + e.unresolved_report_count > 0 ? 1 : 0,
          n =
            t.unresolved_dispute_count + t.unresolved_report_count > 0 ? 1 : 0;
        return o === n
          ? (function (e, t) {
              if (e.length !== t.length) return e.length - t.length;
              for (let o = 0; o < e.length; o++) {
                const n = e.charCodeAt(o),
                  s = t.charCodeAt(o);
                if (n !== s) return n - s;
              }
              return 0;
            })(e.subject_id, t.subject_id)
          : n - o;
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
        const { subject: s } = e,
          i = x(e.subject),
          r = p(i.clanSteamId, 7, i.forumId, s.subject_group_id);
        let d = null;
        if (("0" === s.subject_id && (d = "Topic"), null === d && r.isSuccess))
          for (const e of null !== (t = r.data.comments) && void 0 !== t
            ? t
            : [])
            if (e.gidcomment === s.subject_id) {
              d = h(e.text);
              break;
            }
        if (null === d && r.isSuccess)
          for (const e of null !== (o = r.data.deleted_comments) && void 0 !== o
            ? o
            : [])
            if (e.gidcomment === s.subject_id) {
              d = h(e.text);
              break;
            }
        null === d && (d = "[Comment]");
        const a =
            "0" === s.subject_id
              ? `#forum_op_${s.subject_group_id}`
              : `#c${s.subject_id}`,
          l = s.unresolved_dispute_count > 0 || s.unresolved_report_count > 0;
        return (0, n.jsx)("div", {
          className: (0, j.A)("moderatorToolLink", m.ReportedSubjectRow),
          children: (0, n.jsxs)("a", {
            href: a,
            children: [
              l &&
                (0, n.jsx)("img", {
                  className: m.FlagIcon,
                  src: `${u.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                }),
              !l &&
                (0, n.jsx)("span", { className: m.FlagIcon, children: " " }),
              " ",
              d,
            ],
          }),
        });
      }
      function p(e, t, o, n) {
        const s = (0, l.KV)();
        return (0, a.I)({
          queryKey: ["comment_thread", e, t, o, n],
          queryFn: async () => {
            const i = r.w.Init(d.ZP);
            i.Body().set_steamid(e),
              i.Body().set_comment_thread_type(t),
              i.Body().set_gidfeature(o),
              i.Body().set_gidfeature2(n),
              i.Body().set_include_deleted(!0),
              i.Body().set_oldest_first(!0);
            return (await d.BE.GetCommentThread(s, i)).Body().toObject();
          },
        });
      }
      function x(e) {
        var t, o;
        let n = "",
          s = "";
        if (!e.additional_subject_data) return null;
        for (const i of null !==
          (o =
            null === (t = e.additional_subject_data) || void 0 === t
              ? void 0
              : t.data) && void 0 !== o
          ? o
          : [])
          "clanSteamId" === i.key
            ? (n = i.value)
            : "forumId" === i.key
              ? (s = i.value)
              : console.error(
                  `Unknown additional data key ${i.key} in forum post.`,
                );
        if ("" == n)
          return console.error("Missing clanSteamId in additional data."), null;
        if ("" == s)
          return console.error("Missing forumId in additional data."), null;
        return { clanSteamId: n, forumId: s };
      }
    },
  },
]);
