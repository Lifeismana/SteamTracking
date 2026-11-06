import { _ } from "./libraries.js?contenthash=BSMOk6Fq";
import { _ } from "./moderationqueries.js?contenthash=BCBIvr9z";
import {
  ReportedSubjectList as _,
  useCommentThread as _,
} from "./forumreportedsubjects.js?contenthash=C9JM9hWJ";
var _ = _();
function _(_) {
  let _ = _({
      subject_type: 2,
      comment_thread_id: _.commentThreadID,
    }),
    _ = _(_.steamid, _.eCommentThreadType, _.gidfeature, _.gidfeature2);
  return (0, _.jsx)(_, {
    subjectType: 2,
    subjectGroupQuery: _,
    commentThreadQuery: _,
    inlineClassNames: _.inlineClassNames,
  });
}
export { _ as default };
