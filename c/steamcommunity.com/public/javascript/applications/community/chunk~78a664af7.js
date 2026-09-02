(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8010],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { subject: _ } = _;
          return _
            ? (0, _.jsx)(_, {
                ..._,
              })
            : (0, _.jsx)(_, {});
        }
        function _(_) {
          return (0, _.jsx)("div", {
            children: (0, _.jsxs)("table", {
              children: [
                (0, _.jsx)("thead", {
                  children: (0, _.jsxs)("tr", {
                    children: [
                      (0, _.jsx)("th", {
                        children: "Date",
                      }),
                      (0, _.jsx)("th", {
                        children: "Actor",
                      }),
                      (0, _.jsx)("th", {
                        children: "Action",
                      }),
                      (0, _.jsx)("th", {
                        children: "Details",
                      }),
                    ],
                  }),
                }),
                (0, _.jsx)("tbody", {
                  children: (0, _.jsx)("tr", {
                    children: (0, _.jsx)("td", {
                      colSpan: 4,
                      children: _._.Localize("#subjectauditlog_noentries"),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          var _, _, _, _, _;
          const { subject: _ } = _,
            _ = (0, _._)(
              _ == null ? void 0 : _.subject_type,
              _ == null ? void 0 : _.subject_group_id,
              _ == null ? void 0 : _.subject_id,
            ),
            _ =
              (_ =
                (_ =
                  (_ = _ == null ? void 0 : _.data) == null
                    ? void 0
                    : _.entries) == null
                  ? void 0
                  : _.length) != null
                ? _
                : 0,
            _ =
              (_ = (_ = _.data) == null ? void 0 : _.entries) != null ? _ : [];
          return (
            _.sort((_, _) => _.timestamp - _.timestamp),
            (0, _.jsx)("div", {
              children:
                _ > 0 &&
                (0, _.jsxs)("table", {
                  children: [
                    (0, _.jsx)("thead", {
                      children: (0, _.jsxs)("tr", {
                        children: [
                          (0, _.jsx)("th", {
                            children: "Date",
                          }),
                          (0, _.jsx)("th", {
                            children: "Actor",
                          }),
                          (0, _.jsx)("th", {
                            children: "Action",
                          }),
                          (0, _.jsx)("th", {
                            children: "Details",
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsxs)("tbody", {
                      children: [
                        _ === void 0 &&
                          (0, _.jsx)("tr", {
                            children: (0, _.jsx)("td", {
                              colSpan: 4,
                              children: _._.Localize(
                                "#subjectauditlog_noentries",
                              ),
                            }),
                          }),
                        _ &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              _.isLoading &&
                                (0, _.jsx)("tr", {
                                  children: (0, _.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, _.jsx)(_._, {}),
                                  }),
                                }),
                              _.isError &&
                                (0, _.jsx)("tr", {
                                  children: (0, _.jsx)("td", {
                                    colSpan: 4,
                                    children: _._.Localize(
                                      "#subjectauditlog_error",
                                    ),
                                  }),
                                }),
                              _.isSuccess &&
                                _ === 0 &&
                                (0, _.jsx)("tr", {
                                  children: (0, _.jsx)("td", {
                                    colSpan: 4,
                                    children: _._.Localize(
                                      "#subjectauditlog_noentries",
                                    ),
                                  }),
                                }),
                              _.isSuccess &&
                                _ > 0 &&
                                _.map((_) =>
                                  (0, _.jsx)(
                                    _,
                                    {
                                      entry: _,
                                    },
                                    _.timestamp,
                                  ),
                                ),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            })
          );
        }
        function _(_) {
          var _, _;
          const { entry: _ } = _,
            _ = (0, _._)(_.actor_steamid);
          return !_.isSuccess || !_.data
            ? null
            : (0, _.jsxs)("tr", {
                children: [
                  (0, _.jsx)("td", {
                    children: (0, _._)(_.timestamp, !1, ""),
                  }),
                  (0, _.jsxs)("td", {
                    children: [
                      (0, _.jsx)("a", {
                        href: `${_._.COMMUNITY_BASE_URL}profiles/${_.actor_steamid}`,
                        children: (0, _.jsx)("span", {
                          children:
                            (_ =
                              (_ = _.data) == null ? void 0 : _.public_data) ==
                            null
                              ? void 0
                              : _.persona_name,
                        }),
                      }),
                      " ",
                      "(",
                      (0, _.jsx)("a", {
                        href: `/moderation/activity/${_.actor_steamid}`,
                        children: "activity",
                      }),
                      ")",
                    ],
                  }),
                  (0, _.jsxs)("td", {
                    children: [
                      (0, _._)(_.action),
                      _.automated_action &&
                        (0, _.jsx)(_.Fragment, {
                          children: "\xA0(Automated)",
                        }),
                    ],
                  }),
                  (0, _.jsx)("td", {
                    children: (0, _.jsx)(_, {
                      eAction: _.action,
                      jsonData: _.additional_json_data,
                    }),
                  }),
                ],
              });
        }
        function _(_) {
          const { eAction: _, jsonData: _ } = _;
          let _ = {};
          switch ((_ && (_ = JSON.parse(_)), _)) {
            case _._:
              return (0, _.jsxs)(_.Fragment, {
                children: ["Report ID: ", _.report_id],
              });
            case _._:
              return (0, _.jsxs)(_.Fragment, {
                children: [
                  "Reason: ",
                  (0, _._)(_.reason),
                  _.resolution !== _._ &&
                    _.resolution !== _._ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("br", {}),
                        "Resolution: ",
                        (0, _._)(_.resolution),
                      ],
                    }),
                  _.sanctions &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("br", {}),
                        "Sanctions: ",
                        _.sanctions.map(_._).join(", "),
                      ],
                    }),
                ],
              });
            case _._:
              return (0, _.jsxs)(_.Fragment, {
                children: ["Report ID: ", _.report_id],
              });
            case _._:
              return (0, _.jsx)(_.Fragment, {
                children: JSON.stringify(_, null, "	"),
              });
            case _._:
              return (0, _.jsxs)(_.Fragment, {
                children: ["New level: ", (0, _._)(_.level)],
              });
            case _._:
              return (0, _.jsxs)(_.Fragment, {
                children: ["Report ID: ", _.report_id],
              });
            default:
              return null;
          }
        }
        function _(_) {
          var _;
          const { subject: _ } = _,
            _ = _ && _.reports && _.reports.length > 0;
          return (0, _.jsx)("table", {
            className: _().ContentReportsTable,
            children: (0, _.jsxs)("tbody", {
              children: [
                !_ &&
                  (0, _.jsx)("tr", {
                    children: (0, _.jsx)("td", {
                      colSpan: 4,
                      children: _._.Localize("#contentreportslist_noreports"),
                    }),
                  }),
                _ &&
                  ((_ = _.reports) == null
                    ? void 0
                    : _.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            report: _,
                          },
                          _.report_id,
                        ),
                      )),
              ],
            }),
          });
        }
        function _(_) {
          var _, _;
          const { report: _ } = _,
            _ = (0, _._)(_.reporter_steamid);
          if (!_.isSuccess || !((_ = _.data) != null && _.public_data))
            return null;
          const _ = !!_.time_disputed && _.dispute_resolved === _._,
            _ =
              _.resolved !== _._ &&
              (!_.time_disputed || _.dispute_resolved !== _._),
            _ = _.time_dispute_resolved !== 0,
            _ = _.resolved === _._;
          return (0, _.jsxs)("tr", {
            children: [
              (0, _.jsx)("td", {
                children: (0, _._)(_.time_reported, !1, ""),
              }),
              (0, _.jsxs)("td", {
                children: [
                  (0, _.jsx)("a", {
                    href: `${_._.COMMUNITY_BASE_URL}profiles/${_.reporter_steamid}`,
                    children: (0, _.jsx)(_._, {
                      playerLinkDetails: _.data,
                      size: "X-Small",
                      alt: "Reporter",
                    }),
                  }),
                  "\xA0",
                  (0, _.jsx)("a", {
                    href: `${_._.COMMUNITY_BASE_URL}profiles/${_.reporter_steamid}`,
                    children: (0, _.jsx)("span", {
                      children:
                        (_ = _.data.public_data) == null
                          ? void 0
                          : _.persona_name,
                    }),
                  }),
                ],
              }),
              (0, _.jsx)("td", {
                children:
                  _.report_reason !== _._ &&
                  (0, _.jsx)("span", {
                    children: (0, _._)(_.report_reason),
                  }),
              }),
              (0, _.jsxs)("td", {
                children: [
                  _ &&
                    !_ &&
                    !_ &&
                    (0, _.jsx)("span", {
                      children: _._.Localize(
                        "#contentreportslist_acquitted_at",
                        (0, _._)(_.time_resolved, !1, ""),
                      ),
                    }),
                  _ &&
                    !_ &&
                    !_ &&
                    !_ &&
                    (0, _.jsx)("span", {
                      children: _._.Localize(
                        "#contentreportslist_resolved_at",
                        (0, _._)(_.time_resolved, !1, ""),
                      ),
                    }),
                  _ &&
                    !_ &&
                    (0, _.jsx)("span", {
                      children: _._.Localize(
                        "#contentreportslist_disputed_at",
                        (0, _._)(_.time_disputed, !1, ""),
                      ),
                    }),
                  _ &&
                    (0, _.jsx)("span", {
                      children: _._.Localize(
                        "#contentreportslist_dispute_resolved_at",
                        (0, _._)(_.time_dispute_resolved, !1, ""),
                      ),
                    }),
                  !_ &&
                    (0, _.jsx)("span", {
                      children: _.report_text,
                    }),
                  _ &&
                    (0, _.jsxs)("span", {
                      children: [
                        (0, _.jsx)("br", {}),
                        "Original: ",
                        _.report_text,
                        (0, _.jsx)("br", {}),
                        "Dispute: ",
                        _.dispute_details,
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { subject: _, onClose: _ } = _,
            [_, _] = (0, _.useState)(_._),
            _ = (0, _._)(_.subject_type, _.subject_group_id, _.subject_id),
            _ = (0, _.useRef)(null),
            _ = async () => {
              var _;
              const _ = (_ = _.current) == null ? void 0 : _.value;
              await _.mutateAsync({
                eNewLevel: _,
                strNote: _,
              }),
                _();
            };
          return (0, _.jsxs)(_._, {
            className: _().EscalateSubjectDialogCtn,
            children: [
              (0, _.jsx)(_._, {
                children: _._.Localize("#moderation_escalation_description"),
              }),
              (0, _.jsxs)("select", {
                className: _().EscalationLevelSelect,
                value: _,
                onChange: (_) => _(parseInt(_.target.value)),
                children: [
                  (0, _.jsx)("option", {
                    value: _._,
                    children: _._.Localize("#moderation_escalationlevel_any"),
                  }),
                  (0, _.jsx)("option", {
                    value: _._,
                    children: _._.Localize(
                      "#moderation_escalationlevel_supervisor",
                    ),
                  }),
                  (0, _.jsx)("option", {
                    value: _._,
                    children: _._.Localize("#moderation_escalationlevel_valve"),
                  }),
                ],
              }),
              (0, _.jsx)("label", {
                children: _._.Localize("#moderation_escalation_escalationnote"),
              }),
              (0, _.jsx)(_._, {
                className: _().ReasonTextArea,
                ref: _,
              }),
              (0, _.jsxs)(_._, {
                direction: "row",
                justify: "end",
                children: [
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: _._.Localize("#moderation_cancel"),
                  }),
                  (0, _.jsx)(_._, {
                    onClick: _,
                    loading: _.isPending,
                    children: _._.Localize("#moderation_escalation_escalate"),
                  }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)([]),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1);
          let _ = _.reasons;
          for (const _ of _) _ = _[_].children;
          const _ = _ !== null ? (0, _._)(_) : null,
            _ = _ !== null ? (0, _._)(_) : null,
            _ = () => {
              _ !== null
                ? _(null)
                : _.length === 0
                  ? _.onSelect(null)
                  : _(_.slice(0, -1));
            },
            _ = () => {
              let _ = _;
              _ !== null &&
                (_ && (0, _._)(_) !== null && (_ = (0, _._)(_)),
                _ && (0, _._)(_) !== null && (_ = (0, _._)(_)),
                _.onSelect(_));
            };
          return (0, _.jsxs)("div", {
            children: [
              _ === null &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      className: _().BlockList,
                      children: _.map((_, _) => {
                        const _ = () => {
                          if ((0, _._)(_)) {
                            const _ = [..._];
                            _.push(_), _(_);
                          } else if ((0, _._)(_))
                            (0, _._)(_.value) || (0, _._)(_.value)
                              ? _(_.value)
                              : _.onSelect(_.value);
                          else throw new Error("This should be unreachable.");
                        };
                        return (0, _._)(_)
                          ? (0, _.jsx)(
                              _._,
                              {
                                className: _().BlockListItem,
                                href: _.url,
                                children: _._.Localize(_.strLocToken),
                              },
                              _.url,
                            )
                          : (0, _.jsxs)(
                              _._,
                              {
                                onActivate: _,
                                className: _().BlockListItem,
                                children: [
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(_)
                                      ? _._.Localize(_.strLocToken)
                                      : (0, _._)(_.value),
                                  }),
                                  (0, _._)(_) &&
                                    (0, _.jsx)("span", {
                                      children: "\u25B6",
                                    }),
                                ],
                              },
                              _,
                            );
                      }),
                    }),
                    (0, _.jsx)(_._, {
                      onClick: _,
                      children: "Back",
                    }),
                  ],
                }),
              _ !== null &&
                (0, _.jsxs)("div", {
                  className: _().BlockList,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().BlockListItem,
                      children: (0, _._)(_),
                    }),
                    _ !== null &&
                      (0, _.jsxs)("label", {
                        children: [
                          (0, _.jsx)("input", {
                            type: "checkbox",
                            checked: _,
                            onChange: (_) => _(_.target.checked),
                          }),
                          " Targeted at women",
                        ],
                      }),
                    _ !== null &&
                      (0, _.jsxs)("label", {
                        children: [
                          (0, _.jsx)("input", {
                            type: "checkbox",
                            checked: _,
                            onChange: (_) => _(_.target.checked),
                          }),
                          " Deepfake",
                        ],
                      }),
                    (0, _.jsxs)("div", {
                      className: _().BottomButtons,
                      children: [
                        (0, _.jsx)(_._, {
                          onClick: _,
                          children: "Back",
                        }),
                        (0, _.jsx)(_._, {
                          onClick: _,
                          children: "Continue",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        function _(_) {
          return "unknown EHelpRequestType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestReviewState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestStatsRollupInterval ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestStatsResponderType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpIssue ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestEscalationLevel ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestMsgType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestAction ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestSortOrder ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestPOPType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EAnnouncementPlacement ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETickerCategoryLanguageRule ( " + _ + " )";
        }
        function _(_) {
          return "unknown EPreapprovalResolution ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestFeedbackCategory ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestFeedbackTargetType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EFeedbackState ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESupportActionSource ( " + _ + " )";
        }
        function _(_) {
          return "unknown ERefundSupportAction ( " + _ + " )";
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.quicktext_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [6, 10, 11], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    quicktext_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    requires_update: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    title: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    hidden: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    approved: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    help_request_types: {
                      _: 6,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    content: {
                      _: 7,
                      _: _,
                    },
                    button_text: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    replacement: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    payment_methods: {
                      _: 10,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    appids: {
                      _: 11,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    escalation_level: {
                      _: 12,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    partner_only: {
                      _: 13,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickText";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.content || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    content: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    major_revision: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    minor_revision: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    author: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    last_update: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 6,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickTextContent";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.quicktext_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    quicktext_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    from_sql: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.quicktext || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    quicktext: {
                      _: 1,
                      _: _,
                    },
                    english_reference: {
                      _: 2,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    log_type: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    version_string: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    log_contents: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    request_id: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.request_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    request_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "SupportAgents.GetQuickText#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetQuickText = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.UploadUserApplicationLog = _;
          function _(_, _, _) {
            return _.SendMsg(
              "HelpRequestLogs.GetApplicationLogDemand#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetApplicationLogDemand = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)("main"),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(_._),
            [_, _] = (0, _.useState)(""),
            _ =
              _.rtContentCreatedAt !== void 0
                ? (Date.now() / 1e3 - _.rtContentCreatedAt) / (30 * 86400)
                : !1,
            _ = _ || _ || _ || _ || _ || _ || _,
            _ = _(_.authorSteamID);
          let _ = _.Bhc;
          if (_.isSuccess) {
            const _ = _.data;
            _.pref_primary_language !== void 0 && _.pref_primary_language !== -1
              ? (_ = _.pref_primary_language)
              : _.last_logon_langauge !== void 0 &&
                _.last_logon_langauge !== -1 &&
                (_ = _.last_logon_langauge);
          }
          const _ = (0, _._)(_),
            _ = _(_, _);
          (0, _.useEffect)(() => {
            var _, _, _, _, _, _, _;
            _(
              (_ =
                (_ =
                  (_ =
                    (_ = (_ = _.data) == null ? void 0 : _.quicktext) == null
                      ? void 0
                      : _.content) == null
                    ? void 0
                    : _.content) != null
                  ? _
                  : (_ = (_ = _.data) == null ? void 0 : _.english_reference) ==
                      null
                    ? void 0
                    : _.content) != null
                ? _
                : "",
            );
          }, [_.data, _.data]);
          const _ = !1,
            _ = !1,
            _ = !1,
            _ = async () => {
              (0, _._)(_ !== null, "eReason must be non-null to sanction");
              const _ = [];
              _ &&
                _.push({
                  sanction: _._,
                }),
                _ &&
                  _.push({
                    sanction: _._,
                  }),
                _ &&
                  _.push({
                    sanction: _._,
                    days: _,
                  }),
                _ &&
                  _.push({
                    sanction: _._,
                    days: _,
                  }),
                _ &&
                  _.push({
                    sanction: _._,
                    days: _,
                  }),
                _ &&
                  _.push({
                    sanction: _._,
                    days: -1,
                  }),
                _ &&
                  _.push({
                    sanction: _._,
                  }),
                _ === _._
                  ? _.push({
                      sanction: _._,
                      escalate_to: _._,
                    })
                  : _ === _._ &&
                    _.push({
                      sanction: _._,
                      escalate_to: _._,
                    }),
                await _.sanctionMutation.mutateAsync({
                  sanctions: _,
                  message: _.trim(),
                  reason: _,
                }),
                _.onSanction();
            },
            _ = (_) => {
              _(_), _("main");
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ === "reason" &&
                (0, _.jsx)(_, {
                  reasons: _._,
                  onSelect: _,
                }),
              _ === "main" &&
                (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsxs)(_._, {
                      className: _().SanctionForm,
                      children: [
                        _.sanctionMutation.isError &&
                          (0, _.jsxs)("div", {
                            className: (0, _._)(
                              _().OneColumn,
                              _().ErrorMessage,
                            ),
                            children: [
                              (0, _.jsx)(_.Q9b, {}),
                              " Error: ",
                              _.sanctionMutation.error.message,
                            ],
                          }),
                        (0, _.jsx)("label", {
                          htmlFor: "reason",
                          children: "Reason:",
                        }),
                        (0, _.jsx)("button", {
                          _: "reason",
                          className: _().ClickableText,
                          onClick: () => _("reason"),
                          children:
                            _ === null
                              ? _._.Localize(
                                  "#commentsanctiondialog_selectreason",
                                )
                              : (0, _._)(_),
                        }),
                        (0, _.jsxs)("label", {
                          className: _().OneColumn,
                          children: [
                            (0, _.jsx)("input", {
                              type: "checkbox",
                              checked: _,
                              onChange: (_) => _(_.target.checked),
                            }),
                            " Delete",
                          ],
                        }),
                        (0, _.jsxs)("label", {
                          className: _().OneColumn,
                          children: [
                            (0, _.jsx)("input", {
                              type: "checkbox",
                              checked: _,
                              onChange: (_) => _(_.target.checked),
                            }),
                            " Issue Warning",
                          ],
                        }),
                        _ &&
                          !!_ &&
                          (0, _.jsxs)("div", {
                            className: (0, _._)(
                              _().OneColumn,
                              _().ErrorMessage,
                            ),
                            children: [
                              (0, _.jsx)(_.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        _.clanSteamID &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)("label", {
                                htmlFor: "hubban",
                                children: "Ban from hub:",
                              }),
                              !_ &&
                                (0, _.jsxs)("select", {
                                  _: "hubban",
                                  onChange: (_) =>
                                    _(
                                      _.target.value === "0"
                                        ? null
                                        : parseInt(_.target.value),
                                    ),
                                  value: _ != null ? _ : 0,
                                  children: [
                                    (0, _.jsx)("option", {
                                      value: "0",
                                      children: "Do not ban",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "1",
                                      children: "1 day",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "3",
                                      children: "3 days",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "7",
                                      children: "7 days",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "14",
                                      children: "14 days",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "30",
                                      children: "30 days",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "90",
                                      children: "3 months",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "365",
                                      children: "1 year",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "-1",
                                      children: "Permanent",
                                    }),
                                  ],
                                }),
                              _ &&
                                (0, _.jsx)("div", {
                                  _: "hubban",
                                  children: "Already banned from hub",
                                }),
                            ],
                          }),
                        _ &&
                          !!_ &&
                          (0, _.jsxs)("div", {
                            className: (0, _._)(
                              _().OneColumn,
                              _().ErrorMessage,
                            ),
                            children: [
                              (0, _.jsx)(_.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        (0, _.jsx)("label", {
                          htmlFor: "communityban",
                          children: "Ban from community:",
                        }),
                        !_ &&
                          (0, _.jsxs)("select", {
                            _: "communityban",
                            onChange: (_) =>
                              _(
                                _.target.value === "0"
                                  ? null
                                  : parseInt(_.target.value),
                              ),
                            value: _ != null ? _ : 0,
                            children: [
                              (0, _.jsx)("option", {
                                value: "0",
                                children: "Do not ban",
                              }),
                              (0, _.jsx)("option", {
                                value: "1",
                                children: "1 day",
                              }),
                              (0, _.jsx)("option", {
                                value: "3",
                                children: "3 days",
                              }),
                              (0, _.jsx)("option", {
                                value: "7",
                                children: "7 days",
                              }),
                              (0, _.jsx)("option", {
                                value: "14",
                                children: "14 days",
                              }),
                              (0, _.jsx)("option", {
                                value: "30",
                                children: "30 days",
                              }),
                              (0, _.jsx)("option", {
                                value: "90",
                                children: "3 months",
                              }),
                              (0, _.jsx)("option", {
                                value: "365",
                                children: "1 year",
                              }),
                              (0, _.jsx)("option", {
                                value: "-1",
                                children: "Permanent",
                              }),
                            ],
                          }),
                        _ &&
                          (0, _.jsx)("div", {
                            _: "communityban",
                            children: "Already community banned.",
                          }),
                        (0, _.jsx)("label", {
                          htmlFor: "deletecomments",
                          children: "Delete comments since:",
                        }),
                        (0, _.jsxs)("select", {
                          _: "deletecomments",
                          disabled: _,
                          onChange: (_) =>
                            _(
                              _.target.value === "-1"
                                ? null
                                : parseInt(_.target.value),
                            ),
                          value: _ != null ? _ : -1,
                          children: [
                            (0, _.jsx)("option", {
                              value: "-1",
                              children: "Do not delete",
                            }),
                            (0, _.jsx)("option", {
                              value: "1",
                              children: "1 day",
                            }),
                            (0, _.jsx)("option", {
                              value: "7",
                              children: "7 days",
                            }),
                            (0, _.jsx)("option", {
                              value: "14",
                              children: "14 days",
                            }),
                            (0, _.jsx)("option", {
                              value: "30",
                              children: "30 days",
                            }),
                            (0, _.jsx)("option", {
                              value: "0",
                              children: "All comments",
                            }),
                          ],
                        }),
                        !_ &&
                          (0, _.jsxs)("span", {
                            className: _().OneColumn,
                            children: [
                              (0, _.jsx)("input", {
                                type: "checkbox",
                                checked: _,
                                onChange: (_) => _(_.target.checked),
                              }),
                              "\xA0Permanent trade ban",
                            ],
                          }),
                        _ &&
                          (0, _.jsx)("div", {
                            children: "Already trade banned.",
                          }),
                        (0, _.jsxs)("span", {
                          className: _().OneColumn,
                          children: [
                            (0, _.jsx)("input", {
                              type: "checkbox",
                              checked: _,
                              onChange: (_) => _(_.target.checked),
                            }),
                            "\xA0Mark as suspicious",
                          ],
                        }),
                        (0, _.jsx)("label", {
                          htmlFor: "escalateto",
                          children: "Escalate to",
                        }),
                        (0, _.jsxs)("select", {
                          _: "escalateto",
                          onChange: (_) => _(parseInt(_.target.value)),
                          value: _,
                          children: [
                            (0, _.jsx)("option", {
                              value: _._,
                              children: "Do not escalate",
                            }),
                            (0, _.jsx)("option", {
                              value: _._,
                              children: "Supervisor",
                            }),
                            (0, _.jsx)("option", {
                              value: _._,
                              children: "Valve",
                            }),
                          ],
                        }),
                        (0, _.jsx)("textarea", {
                          className: (0, _._)(
                            _().OneColumn,
                            _().MessageTextArea,
                          ),
                          placeholder: "Message to send (required)",
                          value: _,
                          onChange: (_) => _(_.target.value),
                        }),
                      ],
                    }),
                    (0, _.jsxs)(_._, {
                      className: _().BottomButtons,
                      children: [
                        _.sanctionMutation.isPending &&
                          (0, _.jsx)(_._, {
                            size: "small",
                          }),
                        !_.sanctionMutation.isPending &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)(_._, {
                                onClick: _.onCancel,
                                children: "Cancel",
                              }),
                              (0, _.jsx)(_._, {
                                onClick: _,
                                disabled:
                                  _ === null || !_ || _.trim().length === 0,
                                children: "Sanction",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_, _) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: ["get_quick_text", _, _],
            queryFn: async () => {
              if (_ == null || _ === void 0) return null;
              const _ = _._.Init(_);
              _.Body().set_quicktext_id(_),
                _.Body().set_language((0, _.LgB)(_));
              const _ = await _.GetQuickText(_, _);
              if (_.GetEResult() !== _._)
                throw new Error(
                  "useQuickText failed with EResult " + _.GetEResult(),
                );
              return _.Body().toObject();
            },
            enabled: _ !== void 0,
          });
        }
        function _(_) {
          return (0, _._)({
            queryKey: ["get_primary_language_for_user", _],
            queryFn: async () => {
              if (_ === "0" || !_) throw new Error("Invalid steamid");
              const _ = await (
                await fetch(
                  `${_._.COMMUNITY_BASE_URL}profiles/${_}/ajaxlanguagepreferences`,
                )
              ).json();
              if (_.success === _._) return _.preferences;
              throw new Error(
                "Failed GetPrimaryLanguageForUser. EResult: " + _.success,
              );
            },
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { subject: _ } = _,
            [_, _] = (0, _.useState)(!1),
            _ =
              _ &&
              (_.unresolved_report_count > 0 || _.unresolved_dispute_count > 0),
            _ = (0, _.jsx)(_._, {
              onClick: () => _(!0),
              children: (0, _.jsxs)(_._, {
                direction: "row",
                justify: "between",
                align: "baseline",
                gap: "1",
                children: [
                  _ &&
                    (0, _.jsx)("img", {
                      className: _().Flag,
                      src: `${_._.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                    }),
                  _._.Localize("#commentsanctiondialog_moderate"),
                  _ &&
                    _.required_moderator_level === _._ &&
                    (0, _.jsx)("span", {
                      className: _().ValveOnly,
                      children: "(VO)",
                    }),
                  _ &&
                    _.required_moderator_level === _._ &&
                    (0, _.jsx)("span", {
                      className: _().SupervisorOnly,
                      children: "(Supervisor)",
                    }),
                ],
              }),
            });
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_, {
                  onClose: () => _(!1),
                  ..._,
                }),
              _ &&
                (0, _.jsx)(_._, {
                  toolTipContent: (0, _.jsx)(_, {
                    subject: _,
                  }),
                  direction: "bottom",
                  nDelayShowMS: 0,
                  children: _,
                }),
              !_ && _,
            ],
          });
        }
        function _(_) {
          const { subject: _ } = _,
            _ = (0, _.useMemo)(() => {
              var _;
              const _ = (0, _._)(
                (_ = _ == null ? void 0 : _.reports) != null ? _ : [],
                (_) => _.report_reason,
              );
              return _.sort((_, _) => _[1] - _[1]), _;
            }, [_.reports]);
          return _.length === 0
            ? null
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    children: _._.Localize("#reasonlist_title"),
                  }),
                  _.map(([_, _]) =>
                    (0, _.jsx)(
                      "div",
                      {
                        children: _._.Localize(
                          "#reasonlist_reasonwithcount",
                          (0, _._)(_),
                          _,
                        ),
                      },
                      _,
                    ),
                  ),
                ],
              });
        }
        function _(_) {
          var _, _, _;
          const {
              sanctionMutation: _,
              acquitMutation: _,
              subject: _,
              subjectKey: _,
              clanSteamID: _,
              authorSteamID: _,
              onClose: _,
            } = _,
            [_, _] = (0, _.useState)("main"),
            _ = [
              {
                name: "Reports",
                key: "reports",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    subject: _,
                  }),
                }),
              },
              {
                name: "History",
                key: "history",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    subject: _,
                  }),
                }),
              },
              {
                name: "Details",
                key: "details",
                contents: (0, _.jsx)(_._, {
                  children: _.children,
                }),
              },
            ],
            _ = () => {
              _.onClose(),
                window.location.href.split("#").length === 1 &&
                  _.subject_id !== "0" &&
                  (window.location.href += "#c" + _.subject_id),
                window.location.reload();
            };
          let _ = 0,
            _ = 0;
          if (_)
            for (const _ of _.reports)
              _.time_resolved && !_.time_disputed && _++,
                _.time_dispute_resolved && _++;
          const _ = _ !== void 0 && !_.owner_dispute_time && _.resolved === _._,
            _ = _ !== void 0 && !!_.owner_dispute_time;
          return (0, _.jsx)(_._, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: "Moderate subject",
            children: (0, _.jsx)(_._, {
              bAllowFullSize: !0,
              title: "Moderate",
              "aria-describedby": "moderate",
              onCancel: _.onClose,
              className: _().ModerateDialog,
              children: (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsxs)("div", {
                    className: _().ModerateDialogCtn,
                    children: [
                      _ === "main" &&
                        (0, _.jsxs)("div", {
                          className: _().ModerateCtn,
                          children: [
                            (0, _.jsxs)("div", {
                              className: _().ModerationData,
                              children: [
                                (0, _.jsxs)("div", {
                                  children: [
                                    (_ =
                                      _ == null
                                        ? void 0
                                        : _.unresolved_report_count) != null
                                      ? _
                                      : 0,
                                    " unresolved / ",
                                    _,
                                    " resolved / ",
                                    (_ =
                                      _ == null
                                        ? void 0
                                        : _.unresolved_dispute_count) != null
                                      ? _
                                      : 0,
                                    " disputed / ",
                                    _,
                                    " disputes resolved",
                                  ],
                                }),
                                (0, _.jsx)(_._, {
                                  tabs: _,
                                }),
                              ],
                            }),
                            (0, _.jsxs)("div", {
                              className: _().ModerationActionButtons,
                              children: [
                                (0, _.jsx)("button", {
                                  onClick: () => _("sanction"),
                                  children: (0, _.jsxs)(_._, {
                                    direction: "row",
                                    justify: "center",
                                    align: "center",
                                    children: [
                                      (0, _.jsx)(_._, {
                                        className: _().SanctionIcon,
                                      }),
                                      " Sanction",
                                    ],
                                  }),
                                }),
                                (0, _.jsx)(_, {
                                  subject: _,
                                  acquitMutation: _,
                                  onClose: _,
                                }),
                                (0, _.jsx)(_, {
                                  ..._,
                                  subject: _,
                                  onClose: _,
                                }),
                                (0, _.jsx)(_._, {
                                  disabled: !_.subject,
                                  onClick: () => _("escalate"),
                                  children: _._.Localize(
                                    "#moderation_escalation_escalate",
                                  ),
                                }),
                                !_ &&
                                  (0, _.jsx)("button", {
                                    disabled: !_,
                                    onClick: () => _("ownerdispute"),
                                    children: "Owner Dispute",
                                  }),
                                _ &&
                                  (0, _.jsxs)("span", {
                                    children: [
                                      (0, _.jsx)("a", {
                                        href: `${_._.HELP_BASE_URL}tickermaster/ticket/${_.owner_dispute_details}`,
                                        children: _._.Localize(
                                          "#moderation_already_owner_disputed",
                                        ),
                                      }),
                                      (0, _.jsx)("button", {
                                        onClick: () =>
                                          _("editownerdisputedetails"),
                                        className: _().EditButton,
                                        children: (0, _.jsx)(_.ffu, {}),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      _ === "escalate" &&
                        (0, _.jsx)(_, {
                          subject: _,
                          onClose: () => _("main"),
                        }),
                      _ === "sanction" &&
                        (0, _.jsx)(_, {
                          subject: _,
                          clanSteamID: _,
                          authorSteamID: _,
                          sanctionMutation: _,
                          onSanction: _,
                          onCancel: () => _("main"),
                        }),
                      _ === "ownerdispute" &&
                        (0, _.jsx)(_, {
                          subject: _,
                          authorSteamId: _,
                          onClose: () => _("main"),
                        }),
                      _ === "editownerdisputedetails" &&
                        (0, _.jsx)(_, {
                          subject: _,
                          onClose: () => _("main"),
                          currentDetails:
                            (_ =
                              _ == null ? void 0 : _.owner_dispute_details) !=
                            null
                              ? _
                              : "",
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }
        function _(_) {
          const { subject: _, onClose: _, currentDetails: _ } = _,
            [_, _] = (0, _.useState)(_),
            _ = (0, _._)(_.subject_type, _.subject_group_id, _.subject_id, _),
            _ = async () => {
              await _.mutateAsync(), _();
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("label", {
                children: [
                  _._.Localize("#moderation_editownerdisputedetails_label"),
                  (0, _.jsx)("input", {
                    type: "text",
                    value: _,
                    onChange: (_) => _(_.target.value),
                  }),
                ],
              }),
              (0, _.jsxs)(_._, {
                justify: "between",
                direction: "row",
                children: [
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: _._.Localize(
                      "#moderation_editownerdisputedetails_save",
                    ),
                  }),
                  (0, _.jsx)(_._, {
                    onClick: _,
                    loading: _.isPending,
                    children: _._.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { authorSteamId: _, subject: _, onClose: _ } = _,
            [_, _] = (0, _.useState)(""),
            _ = (0, _._)(
              _,
              _.subject_type,
              _.subject_group_id,
              _.subject_id,
              _,
            ),
            _ = async () => {
              await _.mutateAsync(), _();
            };
          return (0, _.jsxs)(_._, {
            className: _().OwnerDisputeCtn,
            children: [
              (0, _.jsx)("div", {
                children: _._.Localize("#moderation_ownerdispute_description"),
              }),
              (0, _.jsxs)("label", {
                children: [
                  _._.Localize("#moderation_ownerdispute_ticketmastercode"),
                  " ",
                  (0, _.jsx)("input", {
                    type: "text",
                    value: _,
                    onChange: (_) => _(_.target.value),
                  }),
                ],
              }),
              (0, _.jsxs)(_._, {
                justify: "between",
                direction: "row",
                children: [
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: _._.Localize("#moderation_ownerdispute_dispute"),
                  }),
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: _._.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { acquitMutation: _, onClose: _, subject: _ } = _,
            _ =
              _ &&
              (_.unresolved_report_count > 0 || _.unresolved_dispute_count > 0),
            _ = async () => {
              await _.mutateAsync(void 0), _();
            };
          return (0, _.jsx)("button", {
            onClick: _,
            disabled: !_,
            children: (0, _.jsxs)(_._, {
              direction: "row",
              justify: "center",
              align: "center",
              children: [
                (0, _.jsx)(_.jlt, {
                  className: _().AcquitIcon,
                }),
                " ",
                _._.Localize("#moderation_actions_acquit"),
              ],
            }),
          });
        }
        function _(_) {
          const { subject: _, subjectKey: _, onClose: _ } = _,
            _ =
              _ &&
              _.resolved !== _._ &&
              (_.unresolved_dispute_count > 0 || _.unresolved_report_count > 0),
            _ = (0, _._)(),
            _ = async () => {
              await _.mutateAsync({
                eSubjectType: _.subject_type,
                ulSubjectGroupID: _.subject_group_id,
                ulSubjectID: _.subject_id,
              }),
                _();
            };
          return (0, _.jsx)("button", {
            onClick: _,
            disabled: !_,
            children: _._.Localize("#moderation_actions_sustain"),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function _(_, _) {
          let _ = "0000000000000000000000000000000000000000";
          typeof _ == "string" ? (_ = _) : _ && (_ = _(_) || _);
          let _ = ".jpg";
          _ === "0000000000000000000000000000000000000000" && (_ = _),
            _.length == 44 && ((_ = _.slice(-4)), (_ = _.slice(0, 40)));
          let _ = _._.AVATAR_BASE_URL;
          switch (
            (_ ||
              ((_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (_ += _.slice(0, 2) + "/")),
            (_ += _),
            _)
          ) {
            case "X-Small":
            case "Small":
              break;
            case "Medium":
            case "MediumLarge":
              _ += "_medium";
              break;
            case "Large":
            case "X-Large":
            case "FillArea":
              _ += "_full";
              break;
          }
          return (_ += _), _;
        }
        function _(_) {
          return _
            ? (typeof _[Symbol.iterator] == "function"
                ? Array.from(_)
                : Object.values(_).filter((_) => typeof _ == "number")
              )
                .map((_) => _.toString(16).padStart(2, "0"))
                .join("")
            : "";
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          _ =
            __webpack_require__._ +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
          _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { rgSources: _, onIncrementalError: _, alt: _, ..._ } = _,
            [_, _] = (0, _.useState)(0),
            _ = _[_];
          return (0, _.jsx)("img", {
            onError: (_) => {
              _((_) => _ + 1), _ == null || _(_, _, _);
            },
            alt: _,
            ..._,
            src: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              avatarURL: _,
              size: _,
              statusStyle: _,
              statusPosition: _,
              className: _,
              children: _,
              isOnline: _,
              isInGame: _,
              isWatchingBroadcast: _,
              isAwayOrSnooze: _,
              alt: _,
            } = _,
            _ = [];
          return (
            _ && _.push(_),
            _.push(_(_ != null ? _ : "Medium")),
            (0, _.jsxs)("div", {
              className: _()(
                _.AvatarHolder,
                {
                  [_.Offline]: !_,
                  [_.Online]: _,
                  [_.InGame]: _,
                  [_.WatchingBroadcast]: _,
                  [_.AwayOrSnooze]: _,
                },
                _,
              ),
              "data-size": _,
              "data-status-position": _,
              children: [
                (0, _.jsx)("div", {
                  className: _.AvatarStatus,
                  style: _,
                }),
                (0, _.jsx)(_, {
                  className: _()(_.Avatar),
                  rgSources: _,
                  draggable: !1,
                  alt: _,
                }),
                _,
              ],
            })
          );
        }
        function _(_) {
          const {
            profileItem: _,
            className: _,
            bDisableAnimation: _,
            ..._
          } = _;
          if (!_ || !_.image_small || _.image_small.length == 0) return null;
          let _ = _ ? _.image_large : _.image_small;
          return (
            _ || (_ = _.image_small),
            _.startsWith("https://") ||
              (_ = Config.MEDIA_CDN_COMMUNITY_URL + "images/" + _),
            jsx("div", {
              className: classNames(styles.AvatarFrame, _),
              ..._,
              children: jsx("img", {
                className: styles.AvatarFrameImg,
                src: _,
                alt: "",
                role: "presentation",
              }),
            })
          );
        }
        function _(_) {
          var _, _, _, _, _, _, _;
          const {
            playerLinkDetails: _,
            animatedAvatar: _,
            avatarFrame: _,
            size: _,
            ..._
          } = _;
          let _ = (0, _._)(
            (_ = _.public_data) == null ? void 0 : _.sha_digest_avatar,
            _,
          );
          return (
            (_ = _ == null ? void 0 : _.image_small) != null &&
              _.length &&
              (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _.image_small),
            (0, _.jsx)(_, {
              avatarURL: _,
              size: _,
              isOnline:
                ((_ = _.private_data) == null ? void 0 : _.persona_state) ===
                _.UXk,
              isInGame:
                ((_ = _.private_data) == null ? void 0 : _.game_id) !== void 0,
              isWatchingBroadcast:
                ((_ = _.private_data) == null
                  ? void 0
                  : _.watching_broadcast_accountid) !== void 0,
              isAwayOrSnooze:
                ((_ = _.private_data) == null ? void 0 : _.persona_state) ===
                  _.PrD ||
                ((_ = _.private_data) == null ? void 0 : _.persona_state) ===
                  _.vPz,
              ..._,
            })
          );
        }
        function _(_, _) {
          const [_, _] = useState(_ !== "None");
          return (
            useEffect(() => {
              if ((_(_ !== "None"), _ === "None" || _ === "Infinite")) return;
              let _;
              switch (_) {
                case "Short":
                  _ = 2500;
                  break;
                case "Medium":
                  _ = 5e3;
                  break;
                case "Long":
                  _ = 1e4;
                  break;
              }
              const _ = setTimeout(() => {
                _(_);
              }, _);
              return () => {
                clearTimeout(_);
              };
            }, [_, _]),
            _
          );
        }
        function _(_) {
          var _, _;
          const {
              loopDuration: _ = "Infinite",
              bParentHovered: _,
              bLimitProfileFrameAnimationTime: _,
              className: _,
              ..._
            } = _,
            [_, _] = useState(!1),
            _ = _(_, _),
            _ = useProfileItemsEquipped(
              _.playerLinkDetails.public_data.steamid,
            );
          return jsx("div", {
            className: _,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: jsx(_, {
              ..._,
              animatedAvatar: _
                ? (_ = _.data) == null
                  ? void 0
                  : _.animated_avatar
                : void 0,
              children: jsx(_, {
                profileItem: (_ = _.data) == null ? void 0 : _.avatar_frame,
                bDisableAnimation: _ && !_,
              }),
            }),
          });
        }
        function _(_) {
          switch (_) {
            case "X-Small":
            case "Small":
              return (0, _._)(_);
            case "Medium":
            case "MediumLarge":
              return (0, _._)(_);
            case "Large":
            case "X-Large":
            case "FillArea":
              return (0, _._)(_);
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { _: _ = "span", ref: _, className: _, ..._ } = _,
            _ = _;
          return (0, _.jsx)(_, {
            ref: _,
            ...(0, _._)(
              {
                ..._,
                className: _()(_.Text, _),
              },
              _,
            ),
          });
        }
        const _ = [
            {
              prop: "weight",
              responsive: !0,
              className: _.TextWeight,
              cssProperty: (_) => ["--text-weight", `var(--font-weight-${_})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: _.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (_, _, _) => {
                var _;
                return [
                  "--text-color",
                  (0, _._)(
                    _,
                    (_ = (0, _._)(_.contrast, _)) != null ? _ : "body",
                  ),
                ];
              },
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (_, _, _) => {
                var _;
                return [
                  "--text-color",
                  (0, _._)(
                    (_ = (0, _._)(_.color, _)) != null ? _ : "text-body",
                    _,
                  ),
                ];
              },
            },
            {
              prop: "truncate",
              className: _.Truncate,
            },
            {
              prop: "lineClamp",
              responsive: !0,
              className: _.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: _.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          _ = [
            ..._,
            ..._._,
            {
              prop: "size",
              responsive: !0,
              className: (_) => _[`TextSize-${_}`],
            },
          ];
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          var _;
          const { underline: _ = "auto", focusable: _, navProps: _, ..._ } = _,
            _ = (0, _._)(),
            _ =
              (_ = _ != null ? _ : _ == null ? void 0 : _.focusable) != null
                ? _
                : !!_.href,
            _ = (0, _._)(
              {
                ..._,
                underline: _,
                className: _.TextLink,
              },
              _,
            );
          return _ && (_ || _)
            ? (0, _.jsx)(_._, {
                ..._,
                ...(_ || {}),
                focusable: _,
              })
            : (0, _.jsx)("a", {
                ..._,
              });
        }
        const _ = [
          ..._._,
          {
            prop: "underline",
            className: (_) => _[`Underline-${_}`],
          },
        ];
        function _(_) {
          var _;
          const { underline: _ = "auto", focusable: _, navProps: _, ..._ } = _,
            _ = (0, _._)(),
            _ =
              (_ = _ != null ? _ : _ == null ? void 0 : _.focusable) != null
                ? _
                : !!_.onClick,
            _ = (0, _.jsx)("span", {
              role: "button",
              ...(0, _._)(
                {
                  ..._,
                  underline: _,
                  className: _.TextLinkButton,
                },
                _,
              ),
            });
          return _ && (_ || _)
            ? (0, _.jsx)(_._, {
                ...(_ || {}),
                focusable: _,
                children: _,
              })
            : _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_, _) {
          return new (_())(
            async (_) => {
              const _ = [..._],
                _ = await _.xtC.GetPlayerLinkDetails(_, {
                  steamids: _,
                }),
                _ = new Map();
              return (
                _.Body()
                  .accounts()
                  .forEach((_) => {
                    const _ = _.toObject();
                    _.set(_.public_data.steamid, _);
                  }),
                _.map((_) => {
                  var _;
                  return (_ = _.get(_)) != null ? _ : null;
                })
              );
            },
            {
              maxBatchSize: 100,
              cache: !1,
              ..._,
            },
          );
        }
        function _(_) {
          return (0, _._)("PlayerLinkDetails", () => _(_));
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 1;
        function _(_) {
          var _, _, _, _, _;
          return (
            (_ = _ == null ? void 0 : _.private_data) == null ||
              delete _.account_name,
            (_ = _ == null ? void 0 : _.public_data) == null ||
              delete _.account_flags,
            (_ = _ == null ? void 0 : _.public_data) == null ||
              delete _.ban_expires_time,
            (_ = _ == null ? void 0 : _.public_data) == null ||
              delete _.privacy_state,
            ((_ = _ == null ? void 0 : _.public_data) == null
              ? void 0
              : _.profile_state) !== _ &&
              (_ == null || delete _.private_data),
            _
          );
        }
        function _(_) {
          return ["PlayerLinkDetails", _];
        }
        function _(_, _) {
          const _ =
            typeof _ == "number"
              ? _._.InitFromAccountID(_, _._.EUNIVERSE).ConvertTo64BitString()
              : _;
          return {
            queryKey: _(_),
            queryFn: async () => {
              if (_) {
                const _ = await _.load(_);
                return _(_);
              }
              return null;
            },
            enabled: !!_,
          };
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(_);
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          _.forEach((_) => {
            var _;
            (_ = _ == null ? void 0 : _.public_data) != null &&
              _.steamid &&
              _.setQueryData(_(_.public_data.steamid), _);
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "get_content_report_subject_group",
          _ = "get_content_report_subject_audit_log";
        async function _(_, _, _, _) {
          return Promise.all([
            _.invalidateQueries({
              queryKey: [_, _, _],
            }),
            _.invalidateQueries({
              queryKey: [_, _, _, _],
            }),
          ]);
        }
        async function _(_, _, _) {
          return Promise.all([
            _.invalidateQueries({
              queryKey: [_, _, _],
            }),
            _.invalidateQueries({
              queryKey: [_, _, _],
            }),
          ]);
        }
        function _(_, _, _) {
          return {
            queryKey: [_, _, _],
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_subject_type(_), _.Body().set_subject_group_id(_);
              const _ = await _._.GetContentReportSubjectGroup(_, _);
              if (!_.BSuccess())
                throw new Error(
                  "Failed in GetContentReportSubjectGroup, EResult: " +
                    _.GetEResult(),
                );
              return _.Body().toObject();
            },
          };
        }
        function _(_, _) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _, _));
        }
        function _(_, _, _, _) {
          return {
            queryKey: [_, _, _, _],
            queryFn: async () => {
              if (_ === void 0 || _ === void 0 || _ === void 0) return;
              const _ = _._.Init(_._);
              return (
                _.Body().set_subject_type(_),
                _.Body().set_subject_group_id(_),
                _.Body().set_subject_id(_),
                (await _._.GetAuditLog(_, _)).Body().toObject()
              );
            },
          };
        }
        function _(_, _, _) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _, _, _));
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_subject_type(_),
                _.Body().set_subject_group_id(_),
                _.Body().set_subject_id(_),
                _.Body().set_required_level(_.eNewLevel),
                _.eReason && _.Body().set_reason(_.eReason),
                _.strNote && _.Body().set_note(_.strNote);
              const _ = await _._.EscalateSubject(_, _);
              if (_.GetEResult() !== _._)
                throw new Error(`Failed to escalate subject: ${_.GetEMsg()}`);
            },
            onSuccess: async (_, _) => {
              await Promise.all([
                _(_, _, _, _),
                _.invalidateQueries({
                  queryKey: ["get_claimed"],
                }),
                _.invalidateQueries({
                  queryKey: ["get_subject_overview"],
                }),
              ]);
            },
          });
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_subject_type(_.eSubjectType),
                _.Body().set_subject_group_id(_.ulSubjectGroupID),
                _.Body().set_subject_id(_.ulSubjectID);
              const _ = await _._.SustainModeration(_, _);
            },
            onSuccess: async (_, _) => {
              await _.invalidateQueries({
                queryKey: ["get_claimed"],
              }),
                await _(_, _.eSubjectType, _.ulSubjectGroupID, _.ulSubjectID);
            },
          });
        }
        function _(_, _, _, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_steamid(_),
                _.Body().set_subject_type(_),
                _.Body().set_subject_group_id(_),
                _.Body().set_subject_id(_),
                _.Body().set_details(_);
              const _ = await _._.DisputeModerationForSubject(_, _);
            },
            onSuccess: async () => {
              await _(_, _, _, _);
            },
          });
        }
        function _(_, _, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_subject_type(_),
                _.Body().set_subject_group_id(_),
                _.Body().set_subject_id(_),
                _.Body().set_owner_dispute_details(_);
              const _ = await _._.UpdateSubject(_, _);
              if (!_.BSuccess()) throw new Error("EResult " + _.GetEResult());
            },
            onSuccess: async () => {
              await _(_, _, _, _);
            },
          });
        }
        function _(_, _) {
          return {
            queryKey: ["reporterstats", _],
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_steamid(_);
              const _ = await _._.GetReporterStats(_, _);
              if (!_.BSuccess()) throw new Error("EResult " + _.GetEResult());
              return _.Body().toObject();
            },
          };
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                CContentModeration_UpdateSubjectGroup_Request,
              );
              _.Body().set_subject_type(_),
                _.Body().set_subject_group_id(_),
                _.Body().set_new_subject_group_id(_.ulNewSubjectGroupID),
                _.Body().set_additional_subject_data(
                  _.rgNewAdditionalSubjectData,
                );
              const _ = await ContentModerationService.UpdateSubjectGroup(_, _);
              if (!_.BSuccess())
                throw new Error(
                  "UpdateSubjectGroup returned EResult " + _.GetEResult(),
                );
            },
            onSuccess: async (_, _) => {
              await _(_, _, _), await _(_, _, _.ulNewSubjectGroupID);
            },
          });
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_steamid(_),
                _.Body().set_comment_thread_id(_),
                _.Body().set_gidcomment(_),
                _.Body().set_reason(_.reason),
                _.Body().set_note(_.message);
              for (const _ of _.sanctions) {
                const _ = new _._();
                _.set_sanction(_.sanction),
                  _.days && _.set_days(_.days),
                  _.Body().add_sanctions(_);
              }
              const _ = await _._.SanctionComment(_, _);
              if (!_.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${_.GetEResult()} (${_.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await _.invalidateQueries({
                queryKey: ["get_claimed"],
              });
            },
          });
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_steamid(_),
                _.Body().set_comment_thread_id(_),
                _.Body().set_gidcomment(_),
                _.Body().set_report_action(_._._),
                _.Body().set_resolve(!0),
                await _._.UpdateCommentReportState(_, _);
            },
            onSuccess: async () => {
              await _.invalidateQueries({
                queryKey: ["get_claimed"],
              });
            },
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_) {
          return Object.prototype.toString.call(_) === "[object Object]";
        }
        function _(_) {
          if (!_(_)) return !1;
          const _ = _.constructor;
          if (typeof _ == "undefined") return !0;
          const _ = _.prototype;
          return !(
            !_(_) || !Object.prototype.hasOwnProperty.call(_, "isPrototypeOf")
          );
        }
        function _(..._) {
          return JSON.stringify(_, (_, _) => {
            if (_(_)) {
              const _ = {};
              return (
                Object.keys(_)
                  .sort()
                  .forEach((_) => {
                    _[_] = _[_];
                  }),
                _
              );
            }
            return _;
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)({
          instances: {},
          factories: {},
        });
        function _(_) {
          const { name: _, fnFactory: _, children: _ } = _,
            _ = React.useContext(_),
            [_] = useState({}),
            _ = useMemo(
              () => ({
                instances: _,
                factories: {
                  ..._.factories,
                  [_]: _,
                },
                parent: _,
              }),
              [_, _, _],
            );
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_, _) {
          var _;
          const _ = (0, _.useContext)(_),
            _ = typeof _ == "string" ? _ : _(..._);
          let _ = _;
          for (; _; ) {
            if (_ in _.instances) return _.instances[_];
            if (_ in _.factories) break;
            _ = _.parent;
          }
          const _ = (
            (_ = _ == null ? void 0 : _.factories[_]) != null ? _ : _
          )();
          return ((_ != null ? _ : _).instances[_] = _), _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          let _;
          if (typeof _ == "string") _ = _;
          else if ("location" in _) _ = _.location.search;
          else if ("search" in _) _ = _.search;
          else return;
          const _ = new URLSearchParams(_.substring(1));
          if (_.has(_)) {
            const _ = _.getAll(_);
            return _[_.length - 1];
          }
        }
        function _(_, _, _, _ = !1) {
          const _ = new URLSearchParams(_.location.search.substring(1));
          if (_ != null && _ != null) {
            if (_.get(_) == _) return;
            _.set(_, _);
          } else {
            if (!_.has(_)) return;
            _.delete(_);
          }
          _
            ? _.replace(`?${_.toString()}`, {
                ..._.location.state,
              })
            : _.push(`?${_.toString()}`);
        }
        function _(_, _, _) {
          _(_, _, _, !0);
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _.useMemo)(() => {
              const _ = _(_.search, _);
              return _ != null && _ != null
                ? _ != null && _ != null
                  ? typeof _ == "boolean"
                    ? _.constructor(_ !== "false")
                    : _.constructor(_)
                  : _
                : _;
            }, [_.search, _, _]),
            _ = (0, _.useCallback)(
              (_, _ = !1) => {
                _(_, _, _ != null && _ != null ? String(_) : null, _);
              },
              [_, _],
            );
          return [_, _];
        }
        function _(_, _, _ = !1) {
          const _ = new URLSearchParams(_.location.search.substring(1));
          for (const _ in _)
            if (_.hasOwnProperty(_)) {
              const _ = _[_];
              _.delete(_), _ != null && _ != null && _.append(_, _);
            }
          _
            ? _.replace(`?${_.toString()}`, {
                ..._.location.state,
              })
            : _.push(`?${_.toString()}`);
        }
        function _(_, _) {
          _(_, _, !0);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              tabs: _,
              bDisableRouting: _,
              startingTab: _,
              controlledTab: _,
              OnTabChanged: _,
              classNameCtn: _,
              classNameTab: _,
              classNameTabContent: _,
              preferredFocus: _,
              bVerticalTabs: _,
              bSticky: _,
              bChecklistMode: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            [_, _] = (0, _.useState)(() => {
              var _;
              return (
                _ ||
                (!_ && (0, _._)(_, "tab") && (_ = (0, _._)(_, "tab")) != null
                  ? _
                  : "")
              );
            });
          (0, _.useEffect)(() => {
            if (!_.bDisableRouting && _) {
              const _ = (0, _._)(_, "tab");
              _ && _(_);
            }
          }, [_, _.key, _.bDisableRouting, _]);
          const _ = _.useCallback(
              (_) => {
                _(_.key),
                  _ || (0, _._)(_, "tab", _.key),
                  _ == null || _(_.key),
                  _.onClick && _.onClick(_);
              },
              [_, _, _],
            ),
            _ = _.filter((_) => !_.hidden);
          if (!_.length) return null;
          const _ = _ != null ? _ : _,
            _ = _.find((_) => _.key === _) || _[0],
            _ = _ ? (_ != null ? _ : _[0].key) : void 0,
            _ = (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_._, {
                  className: (0, _._)(
                    _().GraphicalAssetsTabs,
                    _ && _().GraphicalAssetsTabsVertical,
                    _ && _().ChecklistMode,
                    _ && _().Sticky,
                    _,
                  ),
                  navEntryPreferPosition: _ ? _._.PREFERRED_CHILD : _._.FIRST,
                  children: _.map((_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        tab: _,
                        OnTabClick: _,
                        classNameTab: _,
                        active: _.key === _.key,
                        preferredFocus: _ === _.key,
                      },
                      _.key,
                    ),
                  ),
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    className: _,
                    children: _.contents,
                  }),
              ],
            });
          return _
            ? (0, _.jsx)(_._, {
                className: (0, _._)(_().GraphicalAssetsTabsLayoutVertical),
                children: _,
              })
            : _;
        }
        function _(_) {
          const {
            statusType: _ = "success",
            bShowStatusBox: _,
            children: _,
          } = _;
          let _ = "";
          return (
            _ === "success"
              ? (_ = _().StatusSuccess)
              : _ === "danger"
                ? (_ = _().StatusDanger)
                : _ === "caution"
                  ? (_ = _().StatusCaution)
                  : _ === "info"
                    ? (_ = _().StatusInfo)
                    : _ === "incomplete" && (_ = _().StatusIncomplete),
            (0, _.jsx)("div", {
              className: (0, _._)(
                _().GraphicalAssetStatus,
                _,
                _ ? _().checklistBox : "",
              ),
              children: _,
            })
          );
        }
        function _(_) {
          const {
            tab: _,
            OnTabClick: _,
            classNameTab: _,
            active: _,
            preferredFocus: _,
          } = _;
          return (0, _.jsx)(_._, {
            condition: !!(_.statusToolTip || _.tooltip),
            wrap: (_) =>
              (0, _.jsx)(_._, {
                toolTipContent: _.statusToolTip || _.tooltip,
                children: _,
              }),
            children: (0, _.jsxs)(_._, {
              className: (0, _._)(
                _().GraphicalAssetsTab,
                _ && _().Active,
                _ && "ActiveTab",
                _,
              ),
              onActivate: () => _(_),
              preferredFocus: _,
              children: [
                !!_.vo_warning &&
                  (0, _.jsx)(_._, {
                    toolTipContent: _.vo_warning,
                    children: (0, _.jsx)("div", {
                      className: _().VOWarning,
                      children: (0, _._)("#EventEditor_VOWarning"),
                    }),
                  }),
                _.status,
                _.name,
              ],
            }),
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          ModerateDialogCtn: "_1JFB_3Ek9uIS-ml-7C1V3",
          Flag: "_24i0Jj7bXsdJSJdDY0a4e9",
          ModerateCtn: "_2f8lQGhpOdBN1nDokNV-_v",
          ModerationActionButtons: "_3vIg4OosURoc-guanZbMot",
          OwnerDisputeCtn: "_3o0wdHIoLEIVk2tOl2OyB1",
          EditButton: "MtttYfwYqnHlqj832CGXL",
          ValveOnly: "_1mtaTCIJfR1JZhSZpaPzUo",
          SupervisorOnly: "_2dWYzwO95xQRO7W66aSsH7",
          AcquitIcon: "HA6Hw6Hc332GoPbma_9sZ",
          SanctionIcon: "_3WS1gYqe89ISF4mi7dvtBU",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AvatarHolder: "_1_sHcxv9rQdANehiviVZR4",
          Avatar: "_3qaudpkfSKoxlwfA-deQLX",
          Offline: "_2G4b7NcQECHtFR_D28hqQG",
          Online: "_2-QtgoeBaZrzBPhoKaud5x",
          AvatarStatus: "_3pbKzT087jaL2EeQO1qsaR",
          InGame: "_2K3Q_r66P06VLgIPo-DYsv",
          AwayOrSnooze: "_3VrE4NMh7NJt0aKikAbOA3",
          WatchingBroadcast: "FhCJhs583_Ocqm0UT9y_d",
          AvatarFrame: "_3ZPXpi9X8K-n17XiGgTMdU",
          AvatarFrameImg: "Uk4DBWxeyo7Tn8SAl8afe",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Text: "f6hU22EA7Z8peFWZVBJU",
          Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
          "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
          "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
          "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
          "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
          "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
          "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
          "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
          "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
          "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
          TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
          TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
          LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
          WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BottomButtons: "mdeaaJPcT9kJyTGau_Zr7",
          SanctionForm: "_33cLeNjYsBEX2T0-B9gc5G",
          OneColumn: "_2LTDR9F3yb80ONcUPcDxo1",
          MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
          ErrorMessage: "_3_dhawEOV-fztaXEftlfxJ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          EscalateSubjectDialogCtn: "_2JObmr3sTdkGUMl1qy7pFq",
          BottomButtons: "_3ismg57mYPglYuxYD8MyWH",
          EscalationLevelSelect: "eM6-NVA-Wty4aAN1I5edn",
          ReasonTextArea: "_2Y0347paZ_xn2vI7jgBpkJ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BlockList: "F2uRfcfN3gZAD8WCNOVq6",
          BlockListItem: "eti_An9vsSQWyfrrZgqZO",
          DefaultItem: "zvsH8nLNLnBES_qChiT1v",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ContentReportsTable: "vOw0zIvYhKvicImwO2-XL",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          GraphicalAssetsTabs: "_3oSHTIvUhbK90D9Uvj438V",
          GraphicalAssetsTab: "_3lJb_YN8uykqLcm4eG1jRF",
          Active: "_8XjrTFzaSA8ubHvHCu44L",
          Sticky: "_3dlxz6KBJpvmA-qsVAzxs8",
          GraphicalAssetsTabsLayoutVertical: "_1ZIVlOM_Qz4wInwwXzUHTR",
          GraphicalAssetsTabsVertical: "_3hS8NFdPTrUehJGNVT0PtV",
          ChecklistMode: "_3blAkLFfSQrJjGklUKOP7e",
          GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
          checklistBox: "_1idkU7IA8dDPOIbsU-dRkJ",
          StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
          VOWarning: "_3LaJynPDFfccGWUEtdltlt",
          StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
          StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
          StatusInfo: "_38gm-PDPbi6lw1-aiH81HR",
          StatusIncomplete: "ZGxYVjsUSjHLRHIWkx4-L",
        };
      },
    },
  ]);
})();
