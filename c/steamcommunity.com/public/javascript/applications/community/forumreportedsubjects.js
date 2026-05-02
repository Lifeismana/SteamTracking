(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [892],
  {
    chunkid: (module) => {
      module.exports = {
        FloatingSubjectListCtn: "_2Z4y2kIderxN4_alSJYYh8",
        SplitHeader: "_2B88BA7YbropfCtjJdn1yD",
        PopoutButton: "_3cujMozXvwTlTehPQtPJ7F",
        ReportedSubjectRow: "_32u0ZJiVZP0gaSLs5sdhUy",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
          readAdditionalDataFromForumPost: () => _,
          useCommentThread: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = "floatingforumreportedsubjectslist",
          _ = (0, _._)(1, _.gidTopic),
          [_, _] = (0, _.useState)(() => void 0 !== localStorage[_]);
        if (_.isSuccess && 0 === _.data.subjects.length) return null;
        return (0, _.jsxs)("div", {
          className: _ ? _.FloatingSubjectListCtn : "",
          children: [
            (0, _.jsx)("div", {
              className: "rightbox_header",
            }),
            (0, _.jsx)("div", {
              className: "rightbox",
              children: (0, _.jsxs)("div", {
                className: "content",
                children: [
                  (0, _.jsx)("div", {
                    className: "rightbox_list_header",
                    children: (0, _.jsxs)("span", {
                      className: _.SplitHeader,
                      children: [
                        _._.Localize("#reportedsubjectlist_header"),
                        " ",
                        (0, _.jsx)("button", {
                          className: _.PopoutButton,
                          onClick: () => {
                            _
                              ? localStorage.removeItem(_)
                              : localStorage.setItem(_, "1"),
                              _(!_);
                          },
                          children: (0, _.jsx)(_.YNO, {}),
                        }),
                      ],
                    }),
                  }),
                  _.isError &&
                    (0, _.jsx)("div", {
                      className: "moderatorToolLink",
                      children: "Error",
                    }),
                  _.isLoading && (0, _.jsx)(_._, {}),
                  _.isSuccess &&
                    (0, _.jsx)("div", {
                      style: {
                        maxHeight: "20em",
                        overflowY: "scroll",
                      },
                      children: _.data.subjects.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            subject: _,
                          },
                          _.subject_id,
                        ),
                      ),
                    }),
                ],
              }),
            }),
            (0, _.jsx)("div", {
              className: "rightbox_footer",
            }),
          ],
        });
      }
      function _(_) {
        for (;;) {
          const _ = _.indexOf("[/quote]");
          if (-1 === _) break;
          _ = _.slice(_ + 8);
        }
        return _.slice(0, 35);
      }
      function _(_) {
        var _, _;
        const { subject: _ } = _,
          _ = _(_.subject),
          _ = _(_.clanSteamId, 7, _.forumId, _.subject_group_id);
        if (0 === _.unresolved_dispute_count && 0 === _.unresolved_report_count)
          return null;
        let _ = null;
        if (("0" === _.subject_id && (_ = "Topic"), null === _ && _.isSuccess))
          for (const _ of null !== (_ = _.data.comments) && void 0 !== _
            ? _
            : [])
            if (_.gidcomment === _.subject_id) {
              _ = _(_.text);
              break;
            }
        if (null === _ && _.isSuccess)
          for (const _ of null !== (_ = _.data.deleted_comments) && void 0 !== _
            ? _
            : [])
            if (_.gidcomment === _.subject_id) {
              _ = _(_.text);
              break;
            }
        null === _ && (_ = "[Comment]");
        const _ =
          "0" === _.subject_id
            ? `#forum_op_${_.subject_group_id}`
            : `#c${_.subject_id}`;
        return (0, _.jsx)("div", {
          className: (0, _._)("moderatorToolLink", _.ReportedSubjectRow),
          children: (0, _.jsxs)("a", {
            href: _,
            children: [
              (0, _.jsx)("img", {
                src: `${_._.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
              }),
              " ",
              _,
            ],
          }),
        });
      }
      function _(_, _, _, _) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: ["comment_thread", _, _, _, _],
          queryFn: async () => {
            const _ = _._.Init(_._);
            _.Body().set_steamid(_),
              _.Body().set_comment_thread_type(_),
              _.Body().set_gidfeature(_),
              _.Body().set_gidfeature2(_),
              _.Body().set_include_deleted(!0),
              _.Body().set_oldest_first(!0);
            return (await _._.GetCommentThread(_, _)).Body().toObject();
          },
        });
      }
      function _(_) {
        var _, _;
        let _ = "",
          _ = "";
        if (!_.additional_subject_data) return null;
        for (const _ of null !==
          (_ =
            null === (_ = _.additional_subject_data) || void 0 === _
              ? void 0
              : _.data) && void 0 !== _
          ? _
          : [])
          "clanSteamId" === _.key
            ? (_ = _.value)
            : "forumId" === _.key
              ? (_ = _.value)
              : console.error(
                  `Unknown additional data key ${_.key} in forum post.`,
                );
        if ("" == _)
          return console.error("Missing clanSteamId in additional data."), null;
        if ("" == _)
          return console.error("Missing forumId in additional data."), null;
        return {
          clanSteamId: _,
          forumId: _,
        };
      }
    },
  },
]);
