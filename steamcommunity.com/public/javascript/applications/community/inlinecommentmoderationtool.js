/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2345],
  {
    44303: (t, e, n) => {
      n.r(e), n.d(e, { default: () => a });
      var i = n(7850),
        d = n(90182),
        m = n(34410),
        o = n(25215);
      function a(t) {
        var e, n;
        const {
            steamid: a,
            commentThreadID: r,
            gidComment: s,
            authorSteamID: u,
          } = t,
          l = (0, d.w3)({ subject_type: m.NC, comment_thread_id: r }),
          h = (0, d.EC)(a, r, s),
          v = (0, d.c3)(a, r, s),
          j = (
            null !==
              (n =
                null === (e = l.data) || void 0 === e ? void 0 : e.subjects) &&
            void 0 !== n
              ? n
              : []
          ).find((t) => {
            var e;
            return (
              (null === (e = t.coordinates) || void 0 === e
                ? void 0
                : e.comment) === s
            );
          });
        return (0, i.jsx)(o.l, {
          sanctionMutation: h,
          acquitMutation: v,
          subject: j,
          eSubjectType: m.NC,
          gidComment: s,
          authorSteamID: u,
          children: (0, i.jsx)(c, { ...t }),
        });
      }
      function c(t) {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", { children: ["SteamID: ", t.steamid] }),
            (0, i.jsxs)("div", {
              children: ["CommentThreadID: ", t.commentThreadID],
            }),
            (0, i.jsxs)("div", { children: ["CommentGID: ", t.gidComment] }),
          ],
        });
      }
    },
  },
]);
