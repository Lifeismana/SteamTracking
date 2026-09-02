/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2345],
    {
      75758: (v, a, n) => {
        n.r(a), n.d(a, { default: () => l });
        var t = n(7850),
          o = n(46085),
          d = n(64981),
          _ = n(25614);
        function l(e) {
          var i, u;
          const {
              steamid: c,
              commentThreadID: s,
              gidComment: m,
              authorSteamID: r,
            } = e,
            C = (0, o.kZ)(d.NC, s),
            D = (0, o.EC)(c, s, m),
            E = (0, o.c3)(c, s, m),
            h = { subject_type: d.NC, subject_group_id: s, subject_id: m },
            I = (
              (u = (i = C.data) == null ? void 0 : i.subjects) != null ? u : []
            ).find((M) => M.subject_id === m);
          return (0, t.jsx)(_.l, {
            sanctionMutation: D,
            acquitMutation: E,
            subjectKey: h,
            subject: I,
            authorSteamID: r,
            children: (0, t.jsx)(j, { ...e }),
          });
        }
        function j(e) {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", { children: ["SteamID: ", e.steamid] }),
              (0, t.jsxs)("div", {
                children: ["CommentThreadID: ", e.commentThreadID],
              }),
              (0, t.jsxs)("div", { children: ["CommentGID: ", e.gidComment] }),
            ],
          });
        }
      },
    },
  ]);
})();
