/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { ot as e } from "./libraries.js?contenthash=BSMOk6Fq";
import { c as t } from "./moderationqueries.js?contenthash=BCBIvr9z";
import {
  ReportedSubjectList as n,
  useCommentThread as r,
} from "./forumreportedsubjects.js?contenthash=C9JM9hWJ";
var i = e();
function a(e) {
  let a = t({ subject_type: 2, comment_thread_id: e.commentThreadID }),
    o = r(e.steamid, e.eCommentThreadType, e.gidfeature, e.gidfeature2);
  return (0, i.jsx)(n, {
    subjectType: 2,
    subjectGroupQuery: a,
    commentThreadQuery: o,
    inlineClassNames: e.inlineClassNames,
  });
}
export { a as default };
