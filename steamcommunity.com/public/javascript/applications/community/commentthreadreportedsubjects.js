/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6408, 892],
  {
    48866: (e, t, s) => {
      s.r(t), s.d(t, { default: () => r });
      var u = s(7850),
        m = s(90182),
        n = s(34410),
        a = s(10378);
      function r(e) {
        const t = (0, m.w3)({
            subject_type: n.NC,
            comment_thread_id: e.commentThreadID,
          }),
          s = (0, a.useCommentThread)(
            e.steamid,
            e.eCommentThreadType,
            e.gidfeature,
            e.gidfeature2,
          );
        return (0, u.jsx)(a.ReportedSubjectList, {
          subjectType: n.NC,
          subjectGroupQuery: t,
          commentThreadQuery: s,
          inlineClassNames: e.inlineClassNames,
        });
      }
    },
  },
]);
