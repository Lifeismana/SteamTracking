"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [70351],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_) {
        switch (_) {
          case _._._:
            return "game";
          case _._._:
            return "software";
          case _._._:
            return "demo";
          case _._._:
            return "dlc";
          case _._._:
          case _._._:
            return "video";
          case _._._:
            return "music";
          case _._._:
            return "beta";
          case _._._:
            return "mod";
        }
        return "invalid";
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
      const _ = !0;
      function _(_) {
        return _._.STORE_BASE_URL + "saleaction/" + _;
      }
      async function _(_, _) {
        const _ = await fetch(_, {
          credentials: "include",
          ..._,
        });
        if (!_._) throw new Error(`${_} answered ${_.status}`);
        return await __webpack_require__.json();
      }
      function _() {
        return (0, _._)("doorinfo", "application_config") ?? void 0;
      }
      var _ = __webpack_require__("chunkid");
      function _(_ = !0) {
        return {
          queryKey: ["EventDoors"],
          queryFn: () =>
            (async function () {
              const _ = await _(_("ajaxgetopendoor"), {
                method: "GET",
              });
              if (!_.doordata)
                throw new Error("ajaxgetopendoor answered " + _.success);
              return _.doordata;
            })(),
          initialData: _,
          enabled: _ && _,
          staleTime: 1 / 0,
          gcTime: 1 / 0,
          retry: !1,
        };
      }
      function _(_, _) {
        return (
          !(!_ || null == _) && Boolean(_ >= 0 && _ < _.length && _[_].opened)
        );
      }
      function _(_) {
        let _ = _._;
        return (
          _?.forEach((_) => {
            _.opened && _.day > _ && (_ = _.day);
          }),
          _
        );
      }
      function _(_) {
        return _(_) != _._;
      }
      function _(_ = !0) {
        const { data: _ } = (0, _._)(_(_));
        return _;
      }
      function _() {
        return null != _();
      }
      function _(_) {
        return _(_(), _);
      }
      function _() {
        return _(_());
      }
      function _() {
        return _(_());
      }
      const _ = {
        nOpenCount: 0,
        iLastDoorIndex: _._,
      };
      function _() {
        const { data: _ } = (0, _._)({
          queryKey: ["EventDoorOpened"],
          queryFn: () => _,
          initialData: _,
          staleTime: 1 / 0,
          gcTime: 1 / 0,
        });
        return _ ?? _;
      }
      const _ = new WeakMap();
      function _(_) {
        let _ = _.get(_);
        return _ || ((_ = new Map()), _.set(_, _)), _;
      }
      async function _(_, _) {
        const {
          iDoorIndex: _,
          bOpenDoor: _ = !0,
          datarecord: _,
          bPreviewMode: _ = !1,
        } = _;
        const _ = _.getQueryData(["EventDoors"]);
        if (!_._.logged_in || !_ || _ > _.length || _ < 0) return null;
        const _ = _(_),
          _ = _.get(_);
        if (_) return _;
        if (_[_].opened == _) return {};
        const _ = (async function (_, _, _, _, _) {
          try {
            const _ = await (async function (_, _, _, _) {
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("door_index", "" + _),
                _ && _.append("datarecord", _),
                _ && _.append("fake_open", "" + _),
                _.append("clan_accountid", "" + _._.CLANACCOUNTID),
                _ || _.append("open_door", "0");
              const _ = await _(_("ajaxopendoor"), {
                method: "POST",
                body: _,
              });
              if (_.success != _._)
                throw new Error(
                  "ajaxopendoor answered " +
                    _.success +
                    (_.err_msg ? ": " + _.err_msg : ""),
                );
              return _;
            })(_, _, _, _);
            return (
              _(_, _, _),
              _ &&
                !_ &&
                _.setQueryData(["EventDoorOpened"], (_) => ({
                  nOpenCount: (_?.nOpenCount ?? 0) + 1,
                  iLastDoorIndex: _,
                })),
              _
            );
          } catch (_) {
            return (
              _(_).delete(_), console.error("OpenEventDoor hit error", _), null
            );
          }
        })(_, _, _, _, _);
        return _.set(_, _), _;
      }
      function _() {
        const _ = (0, _._)(),
          { mutateAsync: _ } = (0, _._)({
            mutationFn: (_) => _(_, _),
          });
        return _;
      }
      function _(_) {
        return _.ensureQueryData(_());
      }
      function _(_, _, _) {
        _ < 0 || _ >= _._
          ? console.error("SetEventDoorState: Wrong door being set " + _)
          : _(_, _, _);
      }
      function _(_, _, _) {
        _.setQueryData(["EventDoors"], (_) =>
          _?.map((_, _) =>
            _ == _ && _.opened != _
              ? {
                  ..._,
                  opened: _,
                }
              : _,
          ),
        );
      }
      function _(_, _) {
        _.setQueryData(["EventDoors"], (_) =>
          _?.map((_, _) => {
            if (_ >= _._) return _;
            const _ = _ <= _;
            return _.opened != _
              ? {
                  ..._,
                  opened: _,
                }
              : _;
          }),
        );
      }
      async function _(_, _) {
        const _ = await (async function (_) {
          const _ = new FormData();
          _.append("sessionid", (0, _._)()), _.append("clan_accountid", "" + _);
          const _ = await _(_("ajaxclosealldoor"), {
            method: "POST",
            body: _,
          });
          if (_.success != _._)
            throw new Error("ajaxclosealldoor answered " + _.success);
          return _.count ?? 0;
        })(_);
        return (
          console.log("CloseAllEventDoors - closed " + _),
          _(_, _._),
          _(_).clear(),
          _
        );
      }
      function _() {
        const _ = (0, _._)(),
          { mutate: _ } = (0, _._)({
            mutationFn: (_) => _(_, _),
            onError: (_) => console.error("CloseAllEventDoors failed", _),
          });
        return (0, _.useCallback)((_) => _(_), [_]);
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      const _ = 7,
        _ = -1;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
        _ = __webpack_require__("chunkid");
      const _ = 64,
        _ = [];
      function _(_) {
        return ["SaleQuizAnswers", _];
      }
      function _(_) {
        const { data: _ } = (0, _._)(
          (function (_) {
            return {
              queryKey: _(_),
              queryFn: () => _,
              initialData: _,
              staleTime: 1 / 0,
              gcTime: 1 / 0,
            };
          })(_),
        );
        return _ ?? _;
      }
      function _(_, _) {
        return _(_)[_];
      }
      function _(_) {
        for (let _ = _.length - 1; _ >= 0; --_) if (_[_]?.answer) return _ + 1;
        return 0;
      }
      function _(_) {
        return _.map((_) => _?.answer).filter((_) => Boolean(_));
      }
      function _(_) {
        return _.flatMap((_) => _?.rgCategoryIDs?.filter(Boolean) ?? []);
      }
      function _(_) {
        return _.some((_) => _?.answer?.reveal_question_id == _._);
      }
      function _(_, _, _, _) {
        _(_, _, _, {
          answer: _,
        });
      }
      function _(_, _, _, _) {
        _(_, _, _, {
          rgCategoryIDs: _?.length ? _ : void 0,
        });
      }
      function _(_, _) {
        _.setQueryData(_(_), _);
      }
      function _(_, _, _, _) {
        const _ = Math.min(Math.max(_, 0), _);
        _.setQueryData(_(_), (_) => {
          const _ = (_ ?? _).slice();
          for (; _.length <= _; ) _.push(void 0);
          return (
            (_[_] = {
              ..._[_],
              ..._,
            }),
            _
          );
        });
      }
      function _(_) {
        const _ = (0, _._)(),
          { mutate: _ } = (0, _._)({
            mutationFn: async (_) => {
              switch (_.type) {
                case "answer":
                  _(_, _, _.iQuestionIndex, _.answer);
                  break;
                case "categories":
                  _(_, _, _.iQuestionIndex, _.rgCategoryIDs);
                  break;
                case "clear":
                  _(_, _);
              }
            },
          });
        return (0, _.useMemo)(
          () => ({
            fnSetAnswer: (_, _) =>
              __webpack_require__({
                type: "answer",
                iQuestionIndex: _,
                answer: _,
              }),
            fnSetAnswerCategories: (_, _) =>
              __webpack_require__({
                type: "categories",
                iQuestionIndex: _,
                rgCategoryIDs: _,
              }),
            fnClearAnswers: () =>
              __webpack_require__({
                type: "clear",
              }),
          }),
          [_],
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      const _ = "terminal";
      var _;
      !(function (_) {
        (_[(_.TemplateFAQDisplayColumn = 1)] = "TemplateFAQDisplayColumn"),
          (_[(_.TemplateFAQDisplaySimpleRow = 2)] =
            "TemplateFAQDisplaySimpleRow");
      })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_mapBadgeInfo = new Map();
        m_mapBadgeLoadPromises = new Map();
        m_eventBadgehangeCallback = new Map();
        m_mapInitialBadgeInfo = new Map();
        GetBadgeInfo(_) {
          return this.m_mapBadgeInfo.get(_);
        }
        GetInitialBadgeInfo(_) {
          return this.m_mapInitialBadgeInfo.get(_);
        }
        GetBadgeInfoChangeCallback(_) {
          return (
            this.m_eventBadgehangeCallback.has(_) ||
              this.m_eventBadgehangeCallback.set(_, new _._()),
            this.m_eventBadgehangeCallback.get(_)
          );
        }
        Test_SetBadgeInfo(_) {
          _.badgeid &&
            (this.m_mapBadgeInfo.set(_.badgeid, _),
            this.GetBadgeInfoChangeCallback(_.badgeid).Dispatch(_));
        }
        async LoadBadgeInfo(_) {
          return this.m_mapBadgeInfo.has(_)
            ? this.m_mapBadgeInfo.get(_)
            : (this.m_mapBadgeLoadPromises.has(_) ||
                this.m_mapBadgeLoadPromises.set(
                  _,
                  this.InternalLoadBadgeInfo(_),
                ),
              this.m_mapBadgeLoadPromises.get(_));
        }
        async InternalLoadBadgeInfo(_) {
          if (!_ || !Number.isInteger(_))
            return {
              badgeid: _,
              level: 0,
            };
          let _ = null;
          try {
            const _ = (0, _._)();
            (0, _._)(
              _ == _._.STORE_BASE_URL || _ == _._.COMMUNITY_BASE_URL,
              "ajaxgetbadgeinfo called on wrong unsupported site: " + _,
            );
            const _ = _ + "actions/ajaxgetbadgeinfo",
              _ = {
                badgeid: _,
              },
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
            if (
              200 == _.status &&
              (_.data?.success == _._ || _.data?.success == _._)
            ) {
              const _ = {
                badgeid: _.data.badgeid,
                level: _.data.level,
                _: _.data._,
                completion_time: _.data.completion_time,
              };
              return (
                this.m_mapBadgeInfo.set(_, _),
                this.m_mapInitialBadgeInfo.has(_) ||
                  this.m_mapInitialBadgeInfo.set(_, _),
                _
              );
            }
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          console.error("useEventBadge: " + _?.strErrorMsg, _);
          const _ = {
            badgeid: _,
            level: 0,
          };
          return this.m_mapBadgeInfo.set(_, _), _;
        }
        static s_Singleton;
        static Get() {
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
        constructor() {}
      }
      function _(_) {
        const [_, _] = (0, _.useState)(_ ? _.Get().GetBadgeInfo(_) : void 0);
        return (
          (0, _.useEffect)(() => {
            !_ &&
              _ &&
              _.Get()
                .LoadBadgeInfo(_)
                .then((_) => __webpack_require__(_));
          }, [_, _]),
          (0, _._)(_ ? _.Get().GetBadgeInfoChangeCallback(_) : void 0, _),
          _
        );
      }
      function _(_) {
        _.Get().Test_SetBadgeInfo(_);
      }
      function _(_) {
        const [_, _] = (0, _.useState)(
          _ ? _.Get().GetInitialBadgeInfo(_) : void 0,
        );
        return (
          (0, _.useEffect)(() => {
            !_ && _ && _.Get().LoadBadgeInfo(_);
          }, [_, _]),
          (0, _._)(_ ? _.Get().GetBadgeInfoChangeCallback(_) : void 0, () =>
            __webpack_require__(_ ? _.Get().GetInitialBadgeInfo(_) : void 0),
          ),
          _
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
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
          strURL: _,
          strName: _,
          strAvatarURL: _,
          nFollowers: _,
          strCreatorType: _,
          strTagLine: _,
          strMemberListURL: _,
          followButton: _,
          bSmallFormat: _,
          bMinimalDisplay: _,
        } = _;
        return (0, _.jsx)(_._, {
          feature: "salecreatorhome",
          children: (0, _.jsxs)(_._, {
            className: (0, _._)(
              _().DevSummaryCtn,
              _ ? _().SmallFormat : _().LargeFormat,
              _ ? _().MinimalDisplay : "",
            ),
            "flow-children": "row",
            children: [
              Boolean(_) &&
                (0, _.jsx)("span", {
                  className: _().Title,
                  children: _,
                }),
              (0, _.jsxs)("div", {
                className: _().DevSummaryWidgetCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().DevSummaryBackground,
                    style: {
                      backgroundImage: `url(${_} )`,
                    },
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().DevSummaryContent),
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().FlexRowContainer,
                        children: [
                          (0, _.jsx)(_._, {
                            href: (0, _._)(_),
                            className: _().AvatarLink,
                            bAllowFocuseableAnchor: !0,
                            children: (0, _.jsx)("img", {
                              className: (0, _._)(_().Avatar, "Avatar_Trgt"),
                              src: _,
                            }),
                          }),
                          (0, _.jsxs)("div", {
                            className: (0, _._)(
                              _().FlexColumnContainer,
                              _().CreatorDescCtn,
                            ),
                            children: [
                              (0, _.jsxs)("div", {
                                className: (0, _._)(
                                  _().CreatorTitleCtn,
                                  _().FlexColumnContainer,
                                ),
                                children: [
                                  (0, _.jsx)(_._, {
                                    href: (0, _._)(_),
                                    className: _().CreatorNameName,
                                    children: _,
                                  }),
                                  Boolean(_) &&
                                    (0, _.jsx)("div", {
                                      className: (0, _._)(
                                        _().FlexColumnContainer,
                                        _().CreatorTagline,
                                      ),
                                      children: _,
                                    }),
                                ],
                              }),
                              (0, _.jsx)("div", {
                                className: (0, _._)({
                                  [_().FlexColumnContainer]: _,
                                  [_().FlexRowContainer]: !_,
                                  [_().SocialFollowersCtn]: !0,
                                }),
                                children: (0, _.jsxs)("div", {
                                  className: (0, _._)(_().FollowBtnCtn),
                                  children: [
                                    _,
                                    (0, _.jsxs)("div", {
                                      className: (0, _._)({
                                        [_().Followers]: !0,
                                      }),
                                      children: [
                                        (0, _.jsx)("span", {
                                          children: (0, _._)(
                                            "#CreatorHome_JustFollowers",
                                          ),
                                        }),
                                        (0, _.jsx)("span", {
                                          className: _().FollowerCount,
                                          children: (0, _._)(_),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Boolean(_) &&
                        (0, _.jsx)("a", {
                          href: _,
                          target: "_blank",
                          className: _().MembersListLink,
                          children: (0, _._)("#ClanMembershipList"),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const { data: _, isPending: _ } = (0, _._)(
          _
            ? {
                appid: _,
              }
            : void 0,
        );
        return _.useMemo(() => {
          if (!_) return [];
          if (!_) return _ ? void 0 : [];
          const _ = [],
            _ = new Set(),
            _ = [
              ["developer", (0, _._)(_.developers)],
              ["publisher", (0, _._)(_.publishers)],
              ["franchise", (0, _._)(_.franchises)],
            ];
          for (const [_, _] of _)
            for (const _ of _)
              _.has(_) ||
                (_.add(_),
                _.push({
                  appid: _,
                  name: "",
                  clan_account_id: _,
                  type: _,
                }));
          return _;
        }, [_, _, _]);
      }
      function _(_) {
        const { rgCreators: _, renderCreator: _ } = _,
          [_, _] = _.useState(0);
        if (!_.length) return null;
        if (1 == _.length)
          return (0, _.jsx)(_.Fragment, {
            children: __webpack_require__(_[0]),
          });
        const _ = _ % _.length;
        return (0, _.jsxs)("div", {
          className: _().CreatorCarouselCtn,
          children: [
            __webpack_require__(_[_]),
            (0, _.jsx)("div", {
              className: _().CreatorCarouselCrumbs,
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _._,
                  {
                    className: _().CreatorCarouselCrumb,
                    onClick: () => _(_),
                    "aria-label": _(_.type),
                    children: (0, _.jsx)(_._, {
                      bIsActive: _ == _,
                    }),
                  },
                  _.clan_account_id,
                ),
              ),
            }),
          ],
        });
      }
      function _(_) {
        switch (_) {
          case "publisher":
            return (0, _._)("#CreatorHome_PublishedBy");
          case "franchise":
            return (0, _._)("#CreatorHome_InFranchise");
        }
        return (0, _._)("#CreatorHome_DevelopedBy");
      }
      function _(_) {
        const {
            creatorID: _,
            bShowTagline: _,
            bHideCreatorType: _,
            bSmallFormat: _,
            bHideFollowButton: _,
            bAddLinkToMemberList: _,
            bMinimalDisplay: _,
          } = _,
          { creatorHome: _, isFetching: _ } = (0, _._)(_.clan_account_id),
          [_] = (0, _._)();
        return _ || (!_ && _)
          ? (0, _.jsx)("div", {
              className: _.DevSummaryWidgetCtn,
              children: (0, _.jsx)(_._, {
                string: (0, _._)("#Loading"),
                size: "medium",
                position: "center",
              }),
            })
          : _
            ? (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  strURL: _.GetCreatorHomeURL(_.type),
                  strName: _.GetName(),
                  strAvatarURL: _.GetAvatarURLFullSize(),
                  nFollowers: _.GetNumFollowers(),
                  strCreatorType: _ ? void 0 : _(_.type),
                  strTagLine: _ ? _.GetTagLine() : void 0,
                  strMemberListURL: _
                    ? _._.COMMUNITY_BASE_URL +
                      "gid/" +
                      _.GetClanSteamID().ConvertTo64BitString() +
                      "/members/"
                    : void 0,
                  followButton: _
                    ? void 0
                    : (0, _.jsx)(_._, {
                        clanAccountID: _.clan_account_id,
                        creatorID: _,
                      }),
                  bSmallFormat: _,
                  bMinimalDisplay: _,
                }),
              })
            : null;
      }
      function _(_) {
        const { appid: _, bSmallFormat: _ } = _,
          _ = _(_);
        return _
          ? (0, _.jsx)(_._, {
              children: (0, _.jsx)(_, {
                rgCreators: _,
                renderCreator: (_) =>
                  (0, _.jsx)(_, {
                    creatorID: _,
                    bSmallFormat: _,
                  }),
              }),
            })
          : (0, _.jsx)("div", {
              className: _.DevSummaryWidgetCtn,
              children: (0, _.jsx)(_._, {}),
            });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__("chunkid");
      class _ {
        m_sParentOrigin;
        m_eventModelJson = void 0;
        m_setMouseOverSectionID = _._.set();
        m_setMouseOverSubsectionID = _._.set();
        m_jumpToSection = void 0;
        m_jumpToSubsection = void 0;
        static s_Singleton;
        static Get() {
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
        constructor() {
          (0, _._)(this),
            window.opener &&
              ((this.m_sParentOrigin = (0, _._)(
                location.search,
                "parentOrigin",
              )),
              window.addEventListener("message", this.HandleMessage),
              window.addEventListener("beforeunload", () =>
                window.opener.postMessage(
                  {
                    message: "PartnerEventEditor_ClientUnready",
                  },
                  this.m_sParentOrigin,
                ),
              ),
              window.opener.postMessage(
                {
                  message: "PartnerEventEditor_ClientReady",
                },
                this.m_sParentOrigin,
              ));
        }
        BIsConnected() {
          return !(!window.opener || !this.m_eventModelJson);
        }
        GetEventModelJson() {
          return this.m_eventModelJson;
        }
        GetMouseOverSectionID() {
          return this.m_setMouseOverSectionID.size > 0
            ? this.m_setMouseOverSectionID.values().next().value
            : void 0;
        }
        GetMouseOverSubsectionID() {
          return this.m_setMouseOverSubsectionID.size > 0
            ? this.m_setMouseOverSubsectionID.values().next().value
            : void 0;
        }
        GetJumpToSectionID() {
          return this.m_jumpToSection;
        }
        GetJumpToSubsectionIDs() {
          return this.m_jumpToSubsection;
        }
        ClearJumpToSectionID() {
          (0, _._)(() => (this.m_jumpToSection = void 0));
        }
        ClearJumpToSubectionID() {
          (0, _._)(() => (this.m_jumpToSubsection = void 0));
        }
        PostMessage(_) {
          window.opener &&
            this.m_sParentOrigin &&
            window.opener.postMessage(_, this.m_sParentOrigin);
        }
        SetMouseOverSection(_, _) {
          if (!this.BIsConnected()) return;
          const _ = {
            message: "PartnerEventEditor_MouseOverViewSection",
            nSectionID: _,
            bMouseOver: _,
          };
          this.PostMessage(_);
        }
        SetMouseOverSubsection(_, _) {
          if (!this.BIsConnected()) return;
          const _ = {
            message: "PartnerEventEditor_MouseOverViewSubsection",
            strSubsectionID: _,
            bMouseOver: _,
          };
          this.PostMessage(_);
        }
        JumpToSection(_) {
          if (!this.BIsConnected()) return;
          const _ = {
            message: "PartnerEventEditor_JumpToViewSection",
            nSectionID: _,
          };
          this.PostMessage(_);
        }
        HandleMessage(_) {
          if (_.origin != this.m_sParentOrigin) return;
          const _ =
            _.data && "object" == typeof _.data && "message" in _.data
              ? _.data
              : null;
          if (_)
            switch (_.message) {
              case "PartnerEventEditor_Update":
                if ("eventModelJson" in _ && _.eventModelJson) {
                  const _ = _;
                  (0, _._)(() => (this.m_eventModelJson = _.eventModelJson));
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSection":
                if ("nSectionID" in _) {
                  const _ = _;
                  (0, _._)(() => {
                    _.bMouseOver
                      ? this.m_setMouseOverSectionID.add(_.nSectionID)
                      : this.m_setMouseOverSectionID.delete(_.nSectionID);
                  });
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSubsection":
                if ("strSubsectionID" in _) {
                  const _ = _;
                  (0, _._)(() => {
                    _.bMouseOver
                      ? this.m_setMouseOverSubsectionID.add(_.strSubsectionID)
                      : this.m_setMouseOverSubsectionID.delete(
                          _.strSubsectionID,
                        );
                  });
                }
                break;
              case "PartnerEventEditor_JumpToEditorSection":
                if ("nSectionID" in _) {
                  const _ = _;
                  (0, _._)(() => (this.m_jumpToSection = _.nSectionID));
                }
                break;
              case "PartnerEventEditor_JumpToEditorSubection":
                if ("strSubsectionID" in _) {
                  const _ = _;
                  (0, _._)(() => {
                    (this.m_jumpToSection = _.nSectionID),
                      (this.m_jumpToSubsection = {
                        nSectionID: _.nSectionID,
                        strSubsectionID: _.strSubsectionID,
                      });
                  });
                }
            }
        }
      }
      function _() {
        return (0, _._)(() => _.Get().BIsConnected());
      }
      function _() {
        const _ = (0, _._)(() => _.Get().GetEventModelJson());
        return _.useMemo(() => {
          if (!_) return;
          const _ = _._.FromJSON(_);
          return (_.rtime32_last_modified = Math.floor(Date.now() / 1e3)), _;
        }, [_]);
      }
      function _(_) {
        const _ = (0, _._)(() => _.Get().GetJumpToSectionID());
        _.useEffect(() => {
          if (!_.Get().BIsConnected() || !_) return;
          _(_) && _.Get().ClearJumpToSectionID();
        }, [_, _]);
      }
      function _(_) {
        const _ = (0, _._)(() => _.Get().GetJumpToSubsectionIDs());
        _.useEffect(() => {
          if (!_.Get().BIsConnected() || !_) return;
          _(_.nSectionID, _.strSubsectionID) &&
            _.Get().ClearJumpToSubectionID();
        }, [_, _]);
      }
      (0, _._)([_._], _.prototype, "m_eventModelJson", void 0),
        (0, _._)([_._], _.prototype, "m_setMouseOverSectionID", void 0),
        (0, _._)([_._], _.prototype, "m_setMouseOverSubsectionID", void 0),
        (0, _._)([_._], _.prototype, "m_jumpToSection", void 0),
        (0, _._)([_._], _.prototype, "m_jumpToSubsection", void 0),
        (0, _._)([_._], _.prototype, "HandleMessage", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { href: _, children: _, bAllowFocuseableAnchor: _, ..._ } = _;
        return _._.EREALM === _._.k_ESteamRealmChina
          ? (0, _.jsx)("div", {
              ..._,
              children: _,
            })
          : _
            ? (0, _.jsx)(_._, {
                href: _,
                ..._,
                children: _,
              })
            : (0, _.jsx)("a", {
                href: _,
                ..._,
                children: _,
              });
      }
    },
  },
]);
