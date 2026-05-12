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
          default: () => h,
          readAdditionalDataFromForumPost: () => y,
          useCommentThread: () => S,
        });
      var n = o(7850),
        s = o(90182),
        i = o(28395),
        r = o(56545),
        d = o(34410),
        a = o(37226),
        l = o(34214),
        c = o(88942),
        u = o(23809),
        m = o(22797),
        _ = o(78327),
        f = o(30253),
        j = o(90626),
        v = o(12155),
        b = o(52038);
      function h(e) {
        var t, o;
        const r = "floatingforumreportedsubjectslist",
          a = (0, s.kZ)(d.lN, e.gidTopic),
          [l, c] = (0, j.useState)(() => void 0 !== localStorage[r]);
        if (
          ((0, j.useMemo)(() => {
            var e, t;
            null ===
              (t =
                null === (e = a.data) || void 0 === e ? void 0 : e.subjects) ||
              void 0 === t ||
              t.sort(g);
          }, [null === (t = a.data) || void 0 === t ? void 0 : t.subjects]),
          !a.isSuccess ||
            !(null === (o = a.data) || void 0 === o ? void 0 : o.subjects) ||
            0 === a.data.subjects.length)
        )
          return null;
        let u = 0;
        return (0, n.jsx)("div", {
          className: l ? f.FloatingSubjectListCtn : "",
          children: (0, n.jsx)("div", {
            className: "rightbox",
            children: (0, n.jsxs)("div", {
              className: "content",
              children: [
                (0, n.jsx)("div", {
                  className: "rightbox_list_header",
                  children: (0, n.jsxs)("span", {
                    className: f.SplitHeader,
                    children: [
                      i.T.Localize("#reportedsubjectlist_header"),
                      " ",
                      (0, n.jsx)("button", {
                        className: f.PopoutButton,
                        onClick: () => {
                          l
                            ? localStorage.removeItem(r)
                            : localStorage.setItem(r, "1"),
                            c(!l);
                        },
                        children: (0, n.jsx)(v.YNO, {}),
                      }),
                    ],
                  }),
                }),
                a.isError &&
                  (0, n.jsx)("div", {
                    className: "moderatorToolLink",
                    children: "Error",
                  }),
                a.isLoading && (0, n.jsx)(m.t, {}),
                a.isSuccess &&
                  (0, n.jsx)("div", {
                    style: { maxHeight: "20em", overflowY: "scroll" },
                    children: a.data.subjects.map((e) => {
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
                        ? (0, n.jsx)(x, { subject: e }, e.subject_id)
                        : (0, n.jsx)(
                            "div",
                            {
                              className: (0, b.A)(
                                "moderatorToolLink",
                                f.ReportedSubjectRow,
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
      function g(e, t) {
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
      function p(e) {
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
          i = y(e.subject),
          r = S(i.clanSteamId, a.Bv, i.forumId, s.subject_group_id);
        let d = null;
        if (("0" === s.subject_id && (d = "Topic"), null === d && r.isSuccess))
          for (const e of null !== (t = r.data.comments) && void 0 !== t
            ? t
            : [])
            if (e.gidcomment === s.subject_id) {
              d = p(e.text);
              break;
            }
        if (null === d && r.isSuccess)
          for (const e of null !== (o = r.data.deleted_comments) && void 0 !== o
            ? o
            : [])
            if (e.gidcomment === s.subject_id) {
              d = p(e.text);
              break;
            }
        null === d && (d = "[Comment]");
        const l =
            "0" === s.subject_id
              ? `#forum_op_${s.subject_group_id}`
              : `#c${s.subject_id}`,
          c = s.unresolved_dispute_count > 0 || s.unresolved_report_count > 0;
        return (0, n.jsx)("div", {
          className: (0, b.A)("moderatorToolLink", f.ReportedSubjectRow),
          children: (0, n.jsxs)("a", {
            href: l,
            children: [
              c &&
                (0, n.jsx)("img", {
                  className: f.FlagIcon,
                  src: `${_.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                }),
              !c &&
                (0, n.jsx)("span", { className: f.FlagIcon, children: " " }),
              " ",
              d,
            ],
          }),
        });
      }
      function S(e, t, o, n) {
        const s = (0, u.KV)();
        return (0, c.I)({
          queryKey: ["comment_thread", e, t, o, n],
          queryFn: async () => {
            const i = r.w.Init(l.ZP);
            i.Body().set_steamid(e),
              i.Body().set_comment_thread_type(t),
              i.Body().set_gidfeature(o),
              i.Body().set_gidfeature2(n),
              i.Body().set_include_deleted(!0),
              i.Body().set_oldest_first(!0);
            return (await l.BE.GetCommentThread(s, i)).Body().toObject();
          },
        });
      }
      function y(e) {
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
    37226: (e, t, o) => {
      "use strict";
      o.d(t, { Bv: () => s, Dq: () => n, Yd: () => i });
      const n = 5,
        s = 7,
        i = 10;
    },
  },
]);
