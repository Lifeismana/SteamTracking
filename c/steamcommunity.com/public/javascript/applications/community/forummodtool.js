(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [140],
  {
    chunkid: (module) => {
      module.exports = {
        Flag: "_3dm-fM55uTgByZNQ-7FQKO",
        ReportList: "hnTX88aagY-cwkiefQvQx",
        ModerateCtn: "_2qBUNFM1eoRvT2ScOKJFUL",
        ModerationActionButtons: "_2xcVcE3CRCIKmxAjIyjoGj",
        ModerateLink: "_2LegBbkPqIlvkjCfpbo4V1",
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
        BottomButtons: "mdeaaJPcT9kJyTGau_Zr7",
        SanctionForm: "_33cLeNjYsBEX2T0-B9gc5G",
        OneColumn: "_2LTDR9F3yb80ONcUPcDxo1",
        MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
      };
    },
    chunkid: (module) => {
      module.exports = {
        EscalateSubjectDialogCtn: "_2JObmr3sTdkGUMl1qy7pFq",
        BottomButtons: "_3ismg57mYPglYuxYD8MyWH",
        EscalationLevelSelect: "eM6-NVA-Wty4aAN1I5edn",
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
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
          useAcquitForumComment: () => _,
          useSanctionForumComment: () => _,
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { subject: _, onClose: _ } = _,
          [_, _] = (0, _.useState)(10),
          _ = (0, _._)(_.subject_type, _.subject_group_id, _.subject_id);
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
                  value: 0,
                  children: _._.Localize("#moderation_escalationlevel_any"),
                }),
                (0, _.jsx)("option", {
                  value: 1,
                  children: _._.Localize(
                    "#moderation_escalationlevel_supervisor",
                  ),
                }),
                (0, _.jsx)("option", {
                  value: 10,
                  children: _._.Localize("#moderation_escalationlevel_valve"),
                }),
              ],
            }),
            (0, _.jsxs)(_._, {
              className: _().BottomButtons,
              children: [
                (0, _.jsx)(_._, {
                  onClick: async () => {
                    await _.mutateAsync({
                      eNewLevel: _,
                    }),
                      __webpack_require__();
                  },
                  children: _._.Localize("#moderation_escalation_escalate"),
                }),
                (0, _.jsx)(_._, {
                  onClick: _,
                  children: _._.Localize("#moderation_cancel"),
                }),
              ],
            }),
          ],
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const [_, _] = (0, _.useState)(null),
          [_, _] = (0, _.useState)([]),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(!1);
        let _ = _.reasons;
        for (const _ of _) _ = _[_].children;
        const _ = null !== _ ? (0, _._)(_) : null,
          _ = null !== _ ? (0, _._)(_) : null,
          _ = () => {
            null !== _
              ? __webpack_require__(null)
              : 0 === _.length
                ? _.onSelect(null)
                : _(_.slice(0, -1));
          };
        return (0, _.jsxs)("div", {
          children: [
            null === _ &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    className: _().BlockList,
                    children: _.map((_, _) => {
                      const _ = () => {
                        if ((0, _._)(_)) {
                          const _ = [..._];
                          _.push(_), _(_);
                        } else {
                          if (!(0, _._)(_))
                            throw new Error("This should be unreachable.");
                          (0, _._)(_.value) || (0, _._)(_.value)
                            ? __webpack_require__(_.value)
                            : _.onSelect(_.value);
                        }
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
                                    children: "▶",
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
            null !== _ &&
              (0, _.jsxs)("div", {
                className: _().BlockList,
                children: [
                  (0, _.jsx)("div", {
                    className: _().BlockListItem,
                    children: (0, _._)(_),
                  }),
                  null !== _ &&
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
                  null !== _ &&
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
                        onClick: () => {
                          let _ = _;
                          null !== _ &&
                            (_ && null !== (0, _._)(_) && (_ = (0, _._)(_)),
                            _ && null !== (0, _._)(_) && (_ = (0, _._)(_)),
                            _.onSelect(_));
                        },
                        children: "Continue",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      var _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickText";
        }
      }
      class _ extends _.Message {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickTextContent";
        }
      }
      class _ extends _.Message {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Request";
        }
      }
      class _ extends _.Message {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Response";
        }
      }
      class _ extends _.Message {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Request";
        }
      }
      class _ extends _.Message {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Response";
        }
      }
      class _ extends _.Message {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Request";
        }
      }
      class _ extends _.Message {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Response";
        }
      }
      !(function (_) {
        _.GetQuickText = function (_, _) {
          return _.SendMsg("SupportAgents.GetQuickText#1", (0, _._)(_, _), _, {
            bConstMethod: !0,
            ePrivilege: 5,
          });
        };
      })(_ || (_ = {})),
        (function (_) {
          (_.UploadUserApplicationLog = function (_, _) {
            return _.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
            (_.GetApplicationLogDemand = function (_, _) {
              return _.SendMsg(
                "HelpRequestLogs.GetApplicationLogDemand#1",
                (0, _._)(_, _),
                _,
                {
                  ePrivilege: 1,
                },
              );
            });
        })(_ || (_ = {}));
      var _ = __webpack_require__("chunkid");
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
          [_, _] = (0, _.useState)(""),
          _ = _ || _ || _ || _ || _ || _ || _,
          _ =
            ((_ = _.authorSteamId),
            (0, _._)({
              queryKey: ["get_primary_language_for_user", _],
              queryFn: async () => {
                const _ = await fetch(
                    `${_._.COMMUNITY_BASE_URL}profiles/${_}/ajaxlanguagepreferences`,
                  ),
                  _ = await _.json();
                if (1 === _.success) return _.preferences;
                throw new Error(
                  "Failed GetPrimaryLanguageForUser. EResult: " + _.success,
                );
              },
            }));
        var _;
        let _ = 0;
        if (_.isSuccess) {
          const _ = _.data;
          void 0 !== _.pref_primary_language && -1 !== _.pref_primary_language
            ? (_ = _.pref_primary_language)
            : void 0 !== _.last_logon_langauge &&
              -1 !== _.last_logon_langauge &&
              (_ = _.last_logon_langauge);
        }
        const _ = (function (_, _) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: ["get_quick_text", _, _],
            queryFn: async () => {
              if (null == _ || void 0 === _) return null;
              const _ = _._.Init(_);
              _.Body().set_quicktext_id(_), _.Body().set_language((0, _._)(_));
              const _ = await _.GetQuickText(_, _);
              if (1 !== _.GetEResult())
                throw new Error(
                  "useQuickText failed with EResult " + _.GetEResult(),
                );
              return _.Body().toObject();
            },
            enabled: void 0 !== _,
          });
        })((0, _._)(_), _);
        (0, _.useEffect)(() => {
          var _, _, _, _, _, _, _;
          _(
            null !==
              (_ =
                null !==
                  (_ =
                    null ===
                      (_ =
                        null ===
                          (_ =
                            null === (_ = _.data) || void 0 === _
                              ? void 0
                              : _.quicktext) || void 0 === _
                          ? void 0
                          : _.content) || void 0 === _
                      ? void 0
                      : _.content) && void 0 !== _
                  ? _
                  : null ===
                        (_ =
                          null === (_ = _.data) || void 0 === _
                            ? void 0
                            : _.english_reference) || void 0 === _
                    ? void 0
                    : _.content) && void 0 !== _
              ? _
              : "",
          );
        }, [_.data, _.data]);
        const _ = !1,
          _ = !1,
          _ = !1;
        return (0, _.jsxs)(_.Fragment, {
          children: [
            "reason" === _ &&
              (0, _.jsx)(_, {
                reasons: _._,
                onSelect: (_) => {
                  __webpack_require__(_), _("main");
                },
              }),
            "main" === _ &&
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsxs)(_._, {
                    className: _().SanctionForm,
                    children: [
                      (0, _.jsx)("label", {
                        htmlFor: "reason",
                        children: "Reason:",
                      }),
                      (0, _.jsx)("button", {
                        _: "reason",
                        className: _().ClickableText,
                        onClick: () => _("reason"),
                        children:
                          null === _
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
                          "Issue Warning",
                        ],
                      }),
                      (0, _.jsx)("label", {
                        htmlFor: "hubban",
                        children: "Ban from hub:",
                      }),
                      (0, _.jsxs)("select", {
                        _: "hubban",
                        onChange: (_) =>
                          _(
                            "0" === _.target.value
                              ? null
                              : parseInt(_.target.value),
                          ),
                        value: null != _ ? _ : 0,
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
                      _,
                      (0, _.jsx)("label", {
                        htmlFor: "communityban",
                        children: "Ban from community:",
                      }),
                      (0, _.jsxs)("select", {
                        _: "communityban",
                        onChange: (_) =>
                          _(
                            "0" === _.target.value
                              ? null
                              : parseInt(_.target.value),
                          ),
                        value: null != _ ? _ : 0,
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
                      _,
                      (0, _.jsx)("label", {
                        htmlFor: "deletecomments",
                        children: "Delete comments since:",
                      }),
                      (0, _.jsxs)("select", {
                        _: "deletecomments",
                        disabled: _,
                        onChange: (_) =>
                          _(
                            "-1" === _.target.value
                              ? null
                              : parseInt(_.target.value),
                          ),
                        value: null != _ ? _ : -1,
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
                      (0, _.jsxs)("span", {
                        className: _().OneColumn,
                        children: [
                          (0, _.jsx)("input", {
                            type: "checkbox",
                            checked: _,
                            onChange: (_) => _(_.target.checked),
                          }),
                          " Permanent trade ban",
                        ],
                      }),
                      _,
                      "0" === _.subject.subject_id &&
                        (0, _.jsxs)("span", {
                          className: _().OneColumn,
                          children: [
                            (0, _.jsx)("input", {
                              type: "checkbox",
                              checked: _,
                              onChange: (_) => _(_.target.checked),
                            }),
                            " Mark as suspicious",
                          ],
                        }),
                      (0, _.jsx)("textarea", {
                        className: (0, _._)(_().OneColumn, _().MessageTextArea),
                        placeholder: "Message to send",
                        value: _,
                        onChange: (_) => _(_.target.value),
                      }),
                    ],
                  }),
                  (0, _.jsxs)(_._, {
                    className: _().BottomButtons,
                    children: [
                      (0, _.jsx)(_._, {
                        onClick: _.onCancel,
                        children: "Cancel",
                      }),
                      (0, _.jsx)(_._, {
                        onClick: () => {
                          (0, _._)(
                            null !== _,
                            "eReason must be non-null to sanction",
                          );
                          const _ = [];
                          _ &&
                            __webpack_require__.push({
                              sanction: 1,
                            }),
                            _ &&
                              __webpack_require__.push({
                                sanction: 8,
                              }),
                            _ &&
                              __webpack_require__.push({
                                sanction: 3,
                                days: _,
                              }),
                            _ &&
                              __webpack_require__.push({
                                sanction: 2,
                                days: _,
                              }),
                            _ &&
                              __webpack_require__.push({
                                sanction: 5,
                                days: _,
                              }),
                            _ &&
                              __webpack_require__.push({
                                sanction: 4,
                                days: -1,
                              }),
                            _ &&
                              __webpack_require__.push({
                                sanction: 7,
                              }),
                            _.onOK(_, _.trim(), _);
                        },
                        disabled: null === _ || !_,
                        children: "Sanction",
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
        _ =
          __webpack_require__._ +
          "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
        _ =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
      function _(_) {
        const { rgSources: _, onIncrementalError: _, alt: _, ..._ } = _,
          [_, _] = (0, _.useState)(0),
          _ = _[_];
        return (0, _.jsx)("img", {
          onError: (_) => {
            _((_) => _ + 1), null == _ || __webpack_require__(_, _, _);
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
          _.push(
            (function (_) {
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
            })(null != _ ? _ : "Medium"),
          ),
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
        var _, _, _, _, _, _, _;
        const {
          playerLinkDetails: _,
          animatedAvatar: _,
          avatarFrame: _,
          size: _,
          ..._
        } = _;
        let _ = (0, _._)(
          null === (_ = _.public_data) || void 0 === _
            ? void 0
            : _.sha_digest_avatar,
          _,
        );
        return (
          (null === (_ = null == _ ? void 0 : _.image_small) || void 0 === _
            ? void 0
            : _.length) &&
            (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _.image_small),
          (0, _.jsx)(_, {
            avatarURL: _,
            size: _,
            isOnline:
              1 ===
              (null === (_ = _.private_data) || void 0 === _
                ? void 0
                : _.persona_state),
            isInGame:
              void 0 !==
              (null === (_ = _.private_data) || void 0 === _
                ? void 0
                : _.game_id),
            isWatchingBroadcast:
              void 0 !==
              (null === (_ = _.private_data) || void 0 === _
                ? void 0
                : _.watching_broadcast_accountid),
            isAwayOrSnooze:
              3 ===
                (null === (_ = _.private_data) || void 0 === _
                  ? void 0
                  : _.persona_state) ||
              4 ===
                (null === (_ = _.private_data) || void 0 === _
                  ? void 0
                  : _.persona_state),
            ..._,
          })
        );
      }
      var _ = __webpack_require__("chunkid");
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
            null == _ ? void 0 : _.subject_type,
            null == _ ? void 0 : _.subject_group_id,
            null == _ ? void 0 : _.subject_id,
          ),
          _ =
            null !==
              (_ =
                null ===
                  (_ =
                    null === (_ = null == _ ? void 0 : _.data) || void 0 === _
                      ? void 0
                      : _.entries) || void 0 === _
                  ? void 0
                  : _.length) && void 0 !== _
              ? _
              : 0;
        return (0, _.jsx)("div", {
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
                    void 0 === _ &&
                      (0, _.jsx)("tr", {
                        children: (0, _.jsx)("td", {
                          colSpan: 4,
                          children: _._.Localize("#subjectauditlog_noentries"),
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
                            0 === _ &&
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
                            (null ===
                              (_ =
                                null === (_ = _.data) || void 0 === _
                                  ? void 0
                                  : _.entries) || void 0 === _
                              ? void 0
                              : _.map((_) =>
                                  (0, _.jsx)(
                                    _,
                                    {
                                      entry: _,
                                    },
                                    _.timestamp,
                                  ),
                                )),
                        ],
                      }),
                  ],
                }),
              ],
            }),
        });
      }
      function _(_) {
        var _, _;
        const { entry: _ } = _,
          _ = (0, _._)(_.actor_steamid);
        return _.isSuccess && _.data
          ? (0, _.jsxs)("tr", {
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
                          null ===
                            (_ =
                              null === (_ = _.data) || void 0 === _
                                ? void 0
                                : _.public_data) || void 0 === _
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
                        children: " (Automated)",
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
            })
          : null;
      }
      function _(_) {
        const { eAction: _, jsonData: _ } = _;
        let _ = {};
        switch ((_ && (_ = JSON.parse(_)), _)) {
          case 1:
          case 4:
          case 7:
            return (0, _.jsxs)(_.Fragment, {
              children: ["Report ID: ", _.report_id],
            });
          case 2:
            return (0, _.jsxs)(_.Fragment, {
              children: [
                "Reason: ",
                (0, _._)(_.reason),
                1 !== _.resolution &&
                  14 !== _.resolution &&
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
          case 5:
            return (0, _.jsxs)(_.Fragment, {
              children: [
                "is_csam" in _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: ["Set CSAM to ", _.is_csam],
                  }),
                "is_terrorism" in _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: ["Set terrorist content to ", _.is_terrorism],
                  }),
              ],
            });
          case 6:
            return (0, _.jsxs)(_.Fragment, {
              children: ["New level: ", (0, _._)(_.level)],
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
          className: _.ContentReportsTable,
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
                (null === (_ = _.reports) || void 0 === _
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
        if (!_.isSuccess) return null;
        if (!(null === (_ = _.data) || void 0 === _ ? void 0 : _.public_data))
          return null;
        const _ = !!_.time_disputed && 0 === _.dispute_resolved,
          _ =
            0 !== _.resolved && (!_.time_disputed || 0 !== _.dispute_resolved),
          _ = 0 !== _.time_dispute_resolved,
          _ = 1 === _.resolved;
        return (0, _.jsxs)("tr", {
          children: [
            (0, _.jsx)("td", {
              children: (0, _._)(_.time_reported, !1, ""),
            }),
            (0, _.jsxs)("td", {
              children: [
                (0, _.jsx)(_._, {
                  _: `${_._.COMMUNITY_BASE_URL}profiles/${_.reporter_steamid}`,
                  children: (0, _.jsx)(_, {
                    playerLinkDetails: _.data,
                    size: "X-Small",
                    alt: "Reporter",
                  }),
                }),
                " ",
                (0, _.jsx)(_._, {
                  _: `${_._.COMMUNITY_BASE_URL}profiles/${_.reporter_steamid}`,
                  children: (0, _.jsx)("span", {
                    children:
                      null === (_ = _.data.public_data) || void 0 === _
                        ? void 0
                        : _.persona_name,
                  }),
                }),
              ],
            }),
            (0, _.jsx)("td", {
              children:
                2 !== _.report_reason &&
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const [_, _] = (0, _.useState)(!1),
          _ = (0, _._)(1, _.topicId);
        let _ = null;
        if (_.isSuccess)
          for (const _ of _.data.subjects)
            _.subject_id === _.subjectId && (_ = _);
        const _ =
            _ &&
            (_.unresolved_report_count > 0 || _.unresolved_dispute_count > 0),
          _ = (0, _.jsx)("span", {
            className: _.ModerateLink,
            children: (0, _.jsxs)("a", {
              onClick: () => __webpack_require__(!0),
              children: [
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)("img", {
                        className: _.Flag,
                        src: `${_._.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                      }),
                      " ",
                    ],
                  }),
                _._.Localize("#commentsanctiondialog_moderate"),
              ],
            }),
          });
        return (0, _.jsxs)(_.Fragment, {
          children: [
            _ &&
              (0, _.jsx)(_, {
                onClose: () => __webpack_require__(!1),
                ..._,
                subject: _,
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
        const { subject: _ } = _;
        if (!_ || !_.reports) return null;
        const _ = (0, _._)(_.reports, (_) => _.report_reason);
        return (
          __webpack_require__.sort((_, _) => _[1] - _[1]),
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                children: _._.Localize("#reasonlist_title"),
              }),
              __webpack_require__.map(([_, _]) =>
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
          })
        );
      }
      function _(_) {
        var _, _;
        const { subject: _ } = _,
          [_, _] = (0, _.useState)("main"),
          _ = _(_.clanSteamId, _.forumId, _.topicId, _.subjectId),
          _ = [
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
              name: "Reports",
              key: "reports",
              contents: (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  subject: _,
                }),
              }),
            },
          ];
        let _ = 0,
          _ = 0;
        if (_)
          for (const _ of _.reports)
            _.time_resolved && !_.time_disputed && _++,
              _.time_dispute_resolved && _++;
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
            className: _.ModerateDialog,
            children: (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                children: (0, _.jsxs)("div", {
                  style: {
                    display: "contents",
                  },
                  children: [
                    "main" === _ &&
                      (0, _.jsxs)("div", {
                        className: _.ModerateCtn,
                        children: [
                          (0, _.jsxs)("div", {
                            className: _.ModerationData,
                            children: [
                              (0, _.jsxs)("div", {
                                children: [
                                  null !==
                                    (_ =
                                      null == _
                                        ? void 0
                                        : _.unresolved_report_count) &&
                                  void 0 !== _
                                    ? _
                                    : 0,
                                  " unresolved / ",
                                  _,
                                  " resolved / ",
                                  null !==
                                    (_ =
                                      null == _
                                        ? void 0
                                        : _.unresolved_dispute_count) &&
                                  void 0 !== _
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
                            className: _.ModerationActionButtons,
                            children: [
                              (0, _.jsx)(_, {
                                ..._,
                                subject: _,
                                onClose: _.onClose,
                              }),
                              (0, _.jsx)(_, {
                                ..._,
                                subject: _,
                                onClose: _.onClose,
                              }),
                              _.subject &&
                                (0, _.jsx)(_._, {
                                  onClick: () => _("escalate"),
                                  children: _._.Localize(
                                    "#moderation_escalation_escalate",
                                  ),
                                }),
                              (0, _.jsx)("button", {
                                onClick: () => _("sanction"),
                                children: "Sanction",
                              }),
                            ],
                          }),
                        ],
                      }),
                    "escalate" === _ &&
                      (0, _.jsx)(_, {
                        subject: _,
                        onClose: () => _("main"),
                      }),
                    "sanction" === _ &&
                      (0, _.jsx)(_, {
                        subject: _,
                        authorSteamId: _.authorSteamId,
                        onOK: async (_, _, _) => {
                          await _.mutateAsync({
                            eReason: _,
                            rgSanctions: _,
                            strNote: _,
                          }),
                            _.onClose(),
                            window.location.reload();
                        },
                        onCancel: () => _("main"),
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      function _(_) {
        const { subject: _ } = _,
          _ = _(_.clanSteamId, _.forumId, _.topicId, _.subjectId),
          _ =
            _ &&
            (_.unresolved_report_count > 0 ||
              _.unresolved_dispute_count > 0 ||
              (14 === _.resolved && 1 !== _.dispute_resolved) ||
              14 === _.dispute_resolved);
        return (0, _.jsx)("button", {
          onClick: async () => {
            await __webpack_require__.mutateAsync(), _.onClose();
          },
          disabled: !_,
          children: _._.Localize("#moderation_actions_acquit"),
        });
      }
      function _(_) {
        const { subject: _ } = _,
          _ =
            _ &&
            0 !== _.resolved &&
            (_.unresolved_dispute_count > 0 || _.unresolved_report_count > 0),
          _ = (0, _._)(1, _.topicId, _.subjectId);
        return (0, _.jsx)("button", {
          onClick: async () => {
            await _.mutateAsync({}), _.onClose();
          },
          disabled: !_,
          children: _._.Localize("#moderation_actions_sustain"),
        });
      }
      function _(_, _, _, _) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_._);
            _.Body().set_steamid(_),
              _.Body().set_gidforum(_),
              _.Body().set_gidtopic(_),
              _.Body().set_gidpost(_);
            const _ = await _._.ResolveReportedPost(_, _);
            if (!_.BSuccess())
              throw new Error("Failed to acquit forum comment: " + _.GetEMsg());
            return _.Body();
          },
          onSuccess: async (_) => {
            await (0, _._)(_, 1, _, _);
          },
        });
      }
      function _(_, _, _, _) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async (_) => {
            const _ = _._.Init(_._);
            _.Body().set_steamid(_),
              _.Body().set_gidforum(_),
              _.Body().set_gidtopic(_),
              _.Body().set_gidpost(_),
              _.Body().set_reason(_.eReason),
              _.Body().set_note(_.strNote);
            for (const _ of _.rgSanctions) {
              const _ = new _._();
              _.set_sanction(_.sanction),
                void 0 !== _.days && _.set_days(_.days),
                _.Body().add_sanctions(_);
            }
            const _ = await _._.SanctionReportedPost(_, _);
            if (!_.BSuccess())
              throw new Error(
                "Failed to sanction forum comment: " + _.GetEResult(),
              );
            return _.Body();
          },
          onSuccess: async (_) => {
            await (0, _._)(_, 1, _, _);
          },
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
        var _;
        "string" == typeof _
          ? (_ = _)
          : _ &&
            ((_ = _),
            (_ = [..._].map((_) => _.toString(16).padStart(2, "0")).join("")));
        let _ = ".jpg";
        "0000000000000000000000000000000000000000" === _ && (_ = _),
          44 == _.length &&
            ((_ = __webpack_require__.slice(-4)),
            (_ = __webpack_require__.slice(0, 40)));
        let _ = _._.AVATAR_BASE_URL;
        switch (
          (_ ||
            ((_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (_ += __webpack_require__.slice(0, 2) + "/")),
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
        }
        return (_ += _), _;
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
              _ = await _._.GetPlayerLinkDetails(_, {
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
              __webpack_require__.map((_) => {
                var _;
                return null !== (_ = _.get(_)) && void 0 !== _ ? _ : null;
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
      function _(_) {
        return ["PlayerLinkDetails", _];
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _._)(_);
        return (0, _._)(
          (function (_, _) {
            const _ =
              "number" == typeof _
                ? _._.InitFromAccountID(_, _._.EUNIVERSE).ConvertTo64BitString()
                : _;
            return {
              queryKey: _(_),
              queryFn: async () => {
                var _, _, _, _, _;
                if (_) {
                  const _ = await _.load(_);
                  return (
                    null === (_ = null == _ ? void 0 : _.private_data) ||
                      void 0 === _ ||
                      delete _.account_name,
                    null === (_ = null == _ ? void 0 : _.public_data) ||
                      void 0 === _ ||
                      delete _.account_flags,
                    null === (_ = null == _ ? void 0 : _.public_data) ||
                      void 0 === _ ||
                      delete _.ban_expires_time,
                    null === (_ = null == _ ? void 0 : _.public_data) ||
                      void 0 === _ ||
                      delete _.privacy_state,
                    1 !==
                      (null === (_ = null == _ ? void 0 : _.public_data) ||
                      void 0 === _
                        ? void 0
                        : _.profile_state) &&
                      (null == _ || delete _.private_data),
                    _
                  );
                }
                return null;
              },
              enabled: !!_,
            };
          })(_, _),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        return (0, _._)().languages.map((_) => {
          return 2 == (_ = _.strISOCode).length && _._.COUNTRY
            ? `${_}-${_._.COUNTRY}`
            : _;
          var _;
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      function _(_) {
        return "[object Object]" === Object.prototype.toString.call(_);
      }
      function _(..._) {
        return JSON.stringify(_, (_, _) => {
          if (
            (function (_) {
              if (!_(_)) return !1;
              const _ = _.constructor;
              if (void 0 === _) return !0;
              const _ = _.prototype;
              return (
                !!_(_) &&
                !!Object.prototype.hasOwnProperty.call(_, "isPrototypeOf")
              );
            })(_)
          ) {
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
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid");
      const _ = (0, _.createContext)({
        instances: {},
        factories: {},
      });
      function _(_, _) {
        var _;
        const _ = (0, _.useContext)(_),
          _ = "string" == typeof _ ? _ : _(..._);
        let _ = _;
        for (; _; ) {
          if (_ in _.instances) return _.instances[_];
          if (_ in _.factories) break;
          _ = _.parent;
        }
        const _ = (
          null !== (_ = null == _ ? void 0 : _.factories[_]) && void 0 !== _
            ? _
            : _
        )();
        return ((null != _ ? _ : _).instances[_] = _), _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        let _;
        if ("string" == typeof _) _ = _;
        else if ("location" in _) _ = _.location.search;
        else {
          if (!("search" in _)) return;
          _ = _.search;
        }
        const _ = new URLSearchParams(__webpack_require__.substring("chunkid"));
        if (_.has(_)) {
          const _ = _.getAll(_);
          return _[_.length - 1];
        }
      }
      function _(_, _, _, _ = !1) {
        const _ = new URLSearchParams(_.location.search.substring(1));
        if (null != _ && null != _) {
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
      function _(_, _) {
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _.useMemo)(() => {
            const _ = _(_.search, _);
            return null != _ && null != _
              ? null != _ && null != _
                ? "boolean" == typeof _
                  ? _.constructor("false" !== _)
                  : _.constructor(_)
                : _
              : _;
          }, [_.search, _, _]),
          _ = (0, _.useCallback)(
            (_, _ = !1) => {
              _(_, _, null != _ && null != _ ? String(_) : null, _);
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
            _.delete(_), null != _ && null != _ && _.append(_, _);
          }
        _
          ? _.replace(`?${_.toString()}`, {
              ..._.location.state,
            })
          : _.push(`?${_.toString()}`);
      }
    },
  },
]);
