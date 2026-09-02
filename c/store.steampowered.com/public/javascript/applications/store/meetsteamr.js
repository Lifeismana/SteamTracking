(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [98620],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
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
              return "video";
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
          _ = __webpack_require__("chunkid");
        const _ = 64,
          _ = [];
        function _(_) {
          return ["SaleQuizAnswers", _];
        }
        function _(_) {
          return {
            queryKey: _(_),
            queryFn: () => _,
            initialData: _,
            staleTime: 1 / 0,
            gcTime: 1 / 0,
          };
        }
        function _(_) {
          const { data: _ } = (0, _._)(_(_));
          return _ ?? _;
        }
        function _(_, _) {
          return _(_)[_];
        }
        function _(_) {
          return _(_(_));
        }
        function _(_) {
          for (let _ = _.length - 1; _ >= 0; --_)
            if (_[_]?.answer) return _ + 1;
          return 0;
        }
        function _(_) {
          return _.map((_) => _?.answer).filter((_) => !!_);
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
                    break;
                }
              },
            });
          return (0, _.useMemo)(
            () => ({
              fnSetAnswer: (_, _) =>
                _({
                  type: "answer",
                  iQuestionIndex: _,
                  answer: _,
                }),
              fnSetAnswerCategories: (_, _) =>
                _({
                  type: "categories",
                  iQuestionIndex: _,
                  rgCategoryIDs: _,
                }),
              fnClearAnswers: () =>
                _({
                  type: "clear",
                }),
            }),
            [_],
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        const _ = "terminal";
        var _ = ((_) => (
          (_[(_.TemplateFAQDisplayColumn = 1)] = "TemplateFAQDisplayColumn"),
          (_[(_.TemplateFAQDisplaySimpleRow = 2)] =
            "TemplateFAQDisplaySimpleRow"),
          _
        ))(_ || {});
        const _ = "questdoor_";
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
                _.status == 200 &&
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
                  .then((_) => _(_));
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
              _(_ ? _.Get().GetInitialBadgeInfo(_) : void 0),
            ),
            _
          );
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = 7,
          _ = -1;
        function _() {
          return !1;
        }
        const _ = class _ {
          m_userData;
          m_bLoadedDuringInit = !1;
          m_strLastDoorOpenKey = "video_noneset";
          m_bIsAnyDoorOpened = !1;
          m_nHighestDoorOpened = _;
          m_initialLoadPromise;
          m_mapDoorOpenPromise = new Map();
          m_mapChangeCallback = new Map();
          m_doorInitializedChangedCallback = new _._();
          m_largestDoorChangeCallback = new _._();
          m_bIsAnyDoorOpenChangeCallback = new _._();
          m_doorOpenedCallback = new _._();
          GetLastDoorOpen() {
            return this.m_strLastDoorOpenKey;
          }
          GetRawDoorData() {
            return this.m_userData;
          }
          BIsDoorOpened(_) {
            return _ == null || _ == null
              ? !1
              : this.m_userData
                ? !!(_ < this.m_userData.length && this.m_userData[_].opened)
                : !1;
          }
          BCanUserOpenDoor(_) {
            let _ = _._.GetTimeNowWithOverride();
            return (
              _._.logged_in &&
              this.m_userData &&
              _ < this.m_userData.length &&
              _ >= this.m_userData[_].rtime_start &&
              _ <= this.m_userData[_].rtime_end
            );
          }
          GetDoorCount() {
            return this.m_userData ? this.m_userData.length : 0;
          }
          BIsAnyDoorOpened() {
            return this.m_bIsAnyDoorOpened;
          }
          GetIsAnyDoorOpenChange() {
            return this.m_bIsAnyDoorOpenChangeCallback;
          }
          GetLargestDoorOpenIndex() {
            return this.m_nHighestDoorOpened;
          }
          GetLargestDoorIndexChange() {
            return this.m_largestDoorChangeCallback;
          }
          GetDoorStateChangeCallback(_) {
            return (
              this.m_mapChangeCallback.has(_) ||
                this.m_mapChangeCallback.set(_, new _._()),
              this.m_mapChangeCallback.get(_)
            );
          }
          GetDoorStateInitializedChangeCallback() {
            return this.m_doorInitializedChangedCallback;
          }
          GetDoorOpenedCallback() {
            return this.m_doorOpenedCallback;
          }
          BIsInitialized() {
            return this.m_bLoadedDuringInit;
          }
          GetMaxDoor() {
            return _;
          }
          SetInMemoryUpdateDoorOpenUpto(_) {
            for (let _ = 0; _ < _; ++_) {
              const _ = _ <= _;
              this.m_userData[_].opened != _ &&
                ((this.m_userData[_].opened = _),
                this.GetDoorStateChangeCallback(_).Dispatch(_));
            }
            this.RecomputeState();
          }
          SetInMemorySpecificDoorState(_, _) {
            _ < _
              ? this.m_userData[_].opened != _ &&
                ((this.m_userData[_].opened = _),
                this.GetDoorStateChangeCallback(_).Dispatch(_),
                this.RecomputeState())
              : console.error("CDoorStore: Wrong door being set " + _);
          }
          RecomputeState() {
            let _ = _;
            this.m_userData?.forEach((_) => {
              _.opened && _.day > _ && (_ = _.day);
            });
            const _ = _ != _;
            _ != this.m_bIsAnyDoorOpened &&
              ((this.m_bIsAnyDoorOpened = _),
              this.GetIsAnyDoorOpenChange().Dispatch(_)),
              _ != this.m_nHighestDoorOpened &&
                ((this.m_nHighestDoorOpened = _),
                this.GetLargestDoorIndexChange().Dispatch(_));
          }
          async OpenDoor(_, _ = !0, _ = "", _ = !1) {
            return (
              _() &&
                console.log(
                  "CDoorStore.OpenDoor: attempting door " + _,
                  "open:",
                  _,
                  "preview:",
                  _,
                ),
              !_._.logged_in ||
              !this.m_userData ||
              _ > this.m_userData.length ||
              _ < 0
                ? (_() &&
                    console.log(
                      "CDoorStore.OpenDoor Early fail settings:",
                      _._.logged_in,
                      this.m_userData,
                      _,
                      this.m_userData?.length,
                    ),
                  null)
                : this.m_mapDoorOpenPromise.has(_)
                  ? (_() &&
                      console.log(
                        "CDoorStore.OpenDoor: door " +
                          _ +
                          " was already requested this session; reusing that result",
                      ),
                    this.m_mapDoorOpenPromise.get(_))
                  : this.m_userData[_].opened == _
                    ? (_() &&
                        console.log(
                          "CDoorStore.OpenDoor: door " +
                            _ +
                            " is already " +
                            (_ ? "open" : "closed") +
                            "; nothing sent to the server",
                        ),
                      {})
                    : (this.m_mapDoorOpenPromise.has(_) ||
                        this.m_mapDoorOpenPromise.set(
                          _,
                          this.InternalOpenDoor(_, _, _, _),
                        ),
                      this.m_mapDoorOpenPromise.get(_))
            );
          }
          async InternalOpenDoor(_, _ = !0, _, _ = !1) {
            let _ = _._.STORE_BASE_URL + "saleaction/ajaxopendoor";
            const _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _ && _.append("datarecord", _),
              _ && _.append("fake_open", "" + _),
              _.append("door_index", "" + _),
              _.append("clan_accountid", "" + _._.CLANACCOUNTID),
              _ || _.append("open_door", "0");
            let _ = null;
            try {
              let _ = await _().post(_, _, {
                withCredentials: !0,
              });
              if (_?.status == 200 && _?.data?.success == _._)
                return (
                  (this.m_userData[_].opened = _),
                  _() &&
                    console.log(
                      "CDoorStore.OpenDoor: door " +
                        _ +
                        (_ ? " opened" : " closed"),
                      "rewards returned:",
                      _.data?.rewards?.length || 0,
                    ),
                  (this.m_strLastDoorOpenKey = "door_" + (_ ? _ : _ - 1)),
                  this.GetDoorStateChangeCallback(_).Dispatch(_),
                  this.RecomputeState(),
                  _ && !_ && this.GetDoorOpenedCallback().Dispatch(_),
                  _.data
                );
              _ = (0, _._)(_);
            } catch (_) {
              _ = (0, _._)(_);
            }
            return (
              this.m_mapDoorOpenPromise.delete(_),
              console.error("OpenDoor hit error: " + _.strErrorMsg, _),
              null
            );
          }
          async LoadDoorData() {
            return this.m_bLoadedDuringInit
              ? this.m_userData
              : (this.m_initialLoadPromise ||
                  (this.m_initialLoadPromise = this.InternalLoadDoorData()),
                this.m_initialLoadPromise);
          }
          async InternalLoadDoorData() {
            const _ = _._.STORE_BASE_URL + "saleaction/ajaxgetopendoor";
            let _ = null;
            try {
              const _ = await _().get(_, {
                withCredentials: !0,
              });
              if (_.status == 200 && _.data?.doordata) {
                (this.m_userData = _.data.doordata),
                  (this.m_bLoadedDuringInit = !0);
                for (let _ = 0; _ < _; ++_)
                  this.GetDoorStateChangeCallback(_).Dispatch(
                    this.m_userData[_].opened,
                  );
                return (
                  this.GetDoorStateInitializedChangeCallback().Dispatch(
                    this.m_bLoadedDuringInit,
                  ),
                  this.RecomputeState(),
                  this.m_userData
                );
              }
              _ = (0, _._)(_);
            } catch (_) {
              _ = (0, _._)(_);
            }
            return (
              console.error(
                "CDoorStore.LoadDoorData failed: " + _?.strErrorMsg,
                _,
              ),
              null
            );
          }
          async CloseAllDoors(_) {
            let _ = _._.STORE_BASE_URL + "saleaction/ajaxclosealldoor";
            const _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("clan_accountid", "" + _);
            let _ = null;
            try {
              let _ = await _().post(_, _, {
                withCredentials: !0,
              });
              if (_.status == 200 && _?.data?.success == _._) {
                console.log("CDoorStore - closed " + _.data.count);
                for (let _ = 0; _ < _; ++_)
                  (this.m_userData[_].opened = !1),
                    this.GetDoorStateChangeCallback(_).Dispatch(
                      this.m_userData[_].opened,
                    );
                return this.RecomputeState(), !0;
              }
              _ = (0, _._)(_);
            } catch (_) {
              _ = (0, _._)(_);
            }
            return (
              console.error(
                "CDoorStore.CloseAllDoors failed: " + _?.strErrorMsg,
                _,
              ),
              null
            );
          }
          static s_Singleton;
          static Get() {
            return (
              _.s_Singleton ||
                ((_.s_Singleton = new _()), _.s_Singleton.Init()),
              _.s_Singleton
            );
          }
          constructor() {
            (0, _._)(this);
          }
          Init() {
            (this.m_userData = (0, _._)("doorinfo", "application_config")),
              this.m_userData &&
                ((this.m_bLoadedDuringInit = !0), this.RecomputeState());
          }
        };
        _([_._], _.prototype, "m_bIsAnyDoorOpened", 2),
          _([_._], _.prototype, "m_nHighestDoorOpened", 2),
          _([_._], _.prototype, "BIsDoorOpened", 1),
          _([_._], _.prototype, "OpenDoor", 1);
        let _ = _;
        function _() {
          return {
            fnOpenDoor: _.Get().OpenDoor,
          };
        }
        function _() {
          const [_, _] = useState(0);
          return (
            useCallbackList(_.Get().GetIsAnyDoorOpenChange(), (_) => _(_ + 1)),
            {
              fnIsDoorOpen: _.Get().BIsDoorOpened,
              nChangeIndex: _,
            }
          );
        }
        function _() {
          const [_, _] = (0, _.useState)(_.Get().BIsInitialized());
          return (
            (0, _.useEffect)(() => {
              _ || _.Get().LoadDoorData();
            }, [_]),
            (0, _._)(_.Get().GetDoorStateInitializedChangeCallback(), _),
            _
          );
        }
        function _(_) {
          const _ = _(),
            [_, _] = (0, _.useState)(_ ? _.Get().BIsDoorOpened(_) : void 0);
          return (0, _._)(_.Get().GetDoorStateChangeCallback(_), _), _;
        }
        function _() {
          const _ = _(),
            [_, _] = (0, _.useState)(_ ? _.Get().GetLargestDoorOpenIndex() : _);
          return (0, _._)(_.Get().GetLargestDoorIndexChange(), _), _;
        }
        function _() {
          const _ = _(),
            [_, _] = (0, _.useState)(_ ? _.Get().BIsAnyDoorOpened() : !1);
          return (0, _._)(_.Get().GetIsAnyDoorOpenChange(), _), _;
        }
        function _(_) {
          _.Get().SetInMemoryUpdateDoorOpenUpto(_);
        }
        function _(_, _) {
          _.Get().SetInMemorySpecificDoorState(_, _);
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
        const _ = "nicknames";
        function _(_) {
          const _ = (0, _._)(),
            { data: _, isLoading: _ } = (0, _._)({
              queryKey: [_],
              queryFn: async () => {
                const _ = new Map();
                if (_._.logged_in) {
                  const _ = _._.Init(_.w_T),
                    _ = (await _.xtC.GetNicknameList(_, _)).Body().toObject();
                  _?.nicknames &&
                    _.nicknames.length > 0 &&
                    _.nicknames.forEach((_) => {
                      _.set(_.accountid, _.nickname);
                    });
                }
                return _;
              },
            });
          return _ ? _.get(_) : null;
        }
        async function _(_) {
          if (!_ || _.length == 0) return [];
          const _ =
            (0, _._)() == "community"
              ? _._.COMMUNITY_BASE_URL
              : _._.STORE_BASE_URL;
          if (_.length == 1) {
            const _ = {
                accountid: _[0],
                origin: self.origin,
              },
              _ = await _().get(`${_}actions/ajaxgetavatarpersona`, {
                params: _,
              });
            if (
              !_ ||
              _.status != 200 ||
              _.data?.success != _._ ||
              !_.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, _._))(_).strErrorMsg}`;
            return [_.data.userinfo];
          } else {
            const _ = {
                accountids: _.join(","),
                origin: self.origin,
              },
              _ = await _().get(`${_}actions/ajaxgetmultiavatarpersona`, {
                params: _,
              });
            if (
              !_ ||
              _.status != 200 ||
              _.data?.success != _._ ||
              !_.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, _._))(_).strErrorMsg}`;
            const _ = new Map();
            return (
              _.data.userinfos.forEach((_) =>
                _.set(new _._(_.steamid).GetAccountID(), _),
              ),
              _.map((_) => _.get(_))
            );
          }
        }
        const _ = new (_())((_) => _(_), {
            cache: !1,
          }),
          _ = "avatarandpersonas";
        function _(_) {
          const { data: _, isLoading: _ } = (0, _._)({
            queryKey: [_, _],
            queryFn: () => _.load(_),
          });
          return [_, _];
        }
        function _(_) {
          const _ = (0, _._)(),
            { data: _, isLoading: _ } = (0, _._)({
              queryKey: [_, _],
              queryFn: async () => {
                const _ = await _.loadMany(_);
                return (
                  _.forEach((_) => {
                    const _ = [_, new _._(_.steamid).GetAccountID()];
                    _.setQueryData(_, _);
                  }),
                  _
                );
              },
              enabled: _?.length > 0,
            }),
            _ = (0, _.useMemo)(() => {
              const _ = new Array();
              return (
                _?.forEach((_) => {
                  _ instanceof Error || _.push(_);
                }),
                _
              );
            }, [_]);
          return _ ? null : _;
        }
        function _(_) {
          return ReactQueryClient.getQueryData([_, _]);
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
                !!_ &&
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
                                    !!_ &&
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
                        !!_ &&
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
          const { data: _ } = (0, _._)(
            _
              ? {
                  appid: _,
                }
              : void 0,
          );
          return _.useMemo(() => {
            if (!_) return [];
            if (!_) return;
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
          }, [_, _]);
        }
        function _(_) {
          const { rgCreators: _, renderCreator: _ } = _,
            [_, _] = _.useState(0);
          if (!_.length) return null;
          if (_.length == 1)
            return (0, _.jsx)(_.Fragment, {
              children: _(_[0]),
            });
          const _ = _ % _.length;
          return (0, _.jsxs)("div", {
            className: _().CreatorCarouselCtn,
            children: [
              _(_[_]),
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
          const { creatorID: _, bSmallFormat: _ } = _,
            { data: _ } = useCreatorHomeByClanAccountID(_.clan_account_id);
          return _
            ? jsx(CreatorHomeEmbedDisplay, {
                strURL: GetCreatorHomeURL(_, _.type),
                strName: _.name ?? "",
                strAvatarURL: _.avatar_url_full_size ?? "",
                nFollowers: _.followers ?? 0,
                strCreatorType: _(_.type),
                followButton: jsx(CuratorFollowButton, {
                  clanAccountID: _.clan_account_id,
                  followType: "creatorhome",
                }),
                bSmallFormat: _,
              })
            : null;
        }
        function _(_) {
          const { appid: _, bSmallFormat: _ } = _,
            _ = _(_);
          return _
            ? jsx(_, {
                rgCreators: _,
                renderCreator: (_) =>
                  jsx(_, {
                    creatorID: _,
                    bSmallFormat: _,
                  }),
              })
            : jsx("div", {
                className: creatorstyle.DevSummaryWidgetCtn,
                children: jsx(Throbber, {}),
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
            { creatorHome: _ } = (0, _._)(_.clan_account_id),
            [_] = (0, _._)();
          return _ || !_
            ? (0, _.jsx)("div", {
                className: _.DevSummaryWidgetCtn,
                children: (0, _.jsx)(_._, {
                  string: (0, _._)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              })
            : (0, _.jsx)(_._, {
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
              });
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
        function _(_) {
          const { clanInfo: _, bAddLinkToMemberList: _ } = _;
          if (
            (AssertMsg(
              _ && _.clanAccountID,
              "CuratorHoverContent expect clanInfo, not supplied",
            ),
            !_)
          )
            return null;
          const _ = {
            clan_account_id: _.clanAccountID,
            name: _.group_name,
            type: "developer",
          };
          return jsx("div", {
            className: creatorstyle.CuratorHoverCtn,
            children: jsx(_, {
              creatorID: _,
              bSmallFormat: !0,
              bShowTagline: !0,
              bHideCreatorType: !0,
              bAddLinkToMemberList: _,
            }),
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = class _ {
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
            return !!(window.opener && this.m_eventModelJson);
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
            !window.opener ||
              !this.m_sParentOrigin ||
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
              _.data && typeof _.data == "object" && "message" in _.data
                ? _.data
                : null;
            if (_)
              switch (_.message) {
                case "PartnerEventEditor_Update": {
                  if ("eventModelJson" in _ && _.eventModelJson) {
                    const _ = _;
                    (0, _._)(() => (this.m_eventModelJson = _.eventModelJson));
                  }
                  break;
                }
                case "PartnerEventEditor_MouseOverEditorSection": {
                  if ("nSectionID" in _) {
                    const _ = _;
                    (0, _._)(() => {
                      _.bMouseOver
                        ? this.m_setMouseOverSectionID.add(_.nSectionID)
                        : this.m_setMouseOverSectionID.delete(_.nSectionID);
                    });
                  }
                  break;
                }
                case "PartnerEventEditor_MouseOverEditorSubsection": {
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
                }
                case "PartnerEventEditor_JumpToEditorSection": {
                  if ("nSectionID" in _) {
                    const _ = _;
                    (0, _._)(() => (this.m_jumpToSection = _.nSectionID));
                  }
                  break;
                }
                case "PartnerEventEditor_JumpToEditorSubection": {
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
                  break;
                }
              }
          }
        };
        _([_._], _.prototype, "m_eventModelJson", 2),
          _([_._], _.prototype, "m_setMouseOverSectionID", 2),
          _([_._], _.prototype, "m_setMouseOverSubsectionID", 2),
          _([_._], _.prototype, "m_jumpToSection", 2),
          _([_._], _.prototype, "m_jumpToSubsection", 2),
          _([_._], _.prototype, "HandleMessage", 1);
        let _ = _;
        function _() {
          return (0, _._)(() => _.Get().BIsConnected());
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              accountID: _,
              bHideWhenNotAvailable: _,
              bHideName: _,
              bLink: _ = !0,
            } = _,
            [_] = (0, _._)(_),
            _ = (0, _._)(_),
            _ = _.useMemo(() => _._.InitFromAccountID(_), [_]),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_.ConvertTo64BitString()}`,
            _ = _ ? "a" : "span";
          return (0, _.jsx)(_.Fragment, {
            children: _
              ? (0, _.jsxs)(_, {
                  href: _ ? _ : void 0,
                  children: [
                    (0, _.jsx)("img", {
                      className: _.SmallAvatar,
                      src: _.avatar_url,
                      "data-miniprofile": "s" + _.ConvertTo64BitString(),
                    }),
                    !_ &&
                      (0, _.jsx)("span", {
                        children: _
                          ? `${_} (${_.persona_name})`
                          : _.persona_name,
                      }),
                  ],
                })
              : (0, _.jsx)(_.Fragment, {
                  children:
                    !_ &&
                    (0, _.jsx)("span", {
                      children: _,
                    }),
                }),
          });
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              title: _,
              tooltip: _,
              getMinimized: _,
              toggleMinimized: _,
              className: _,
              children: _,
              elAdditionalButtons: _,
            } = _,
            _ = (0, _._)(() => _());
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _,
                  _.SectionTitleHeader,
                  _.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)(
                      _.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [
                      _,
                      !!_ &&
                        (0, _.jsx)(_._, {
                          tooltip: _,
                        }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _.SectionTitleButtons,
                    children: [
                      _,
                      (0, _.jsx)(_, {
                        bIsMinimized: _,
                        fnToggleMinimize: _,
                      }),
                    ],
                  }),
                ],
              }),
              !_ &&
                (0, _.jsx)(_._, {
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          const [_, _] = _.useState(!!_.bStartMinimized);
          return (0, _.jsx)(_, {
            ..._,
            getMinimized: () => _,
            toggleMinimized: () => _(!_),
            children: _.children,
          });
        }
        function _(_) {
          const { bIsMinimized: _, fnToggleMinimize: _ } = _,
            _ = _ ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, _.jsx)(_._, {
            "data-tooltip-text": (0, _._)(_),
            onClick: _,
            children: _.bIsMinimized
              ? (0, _.jsx)(_.hz4, {})
              : (0, _.jsx)(_.Xjb, {}),
          });
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
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            MeetSteamRoutes: () => _,
            default: () => _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { gid: _ } = (0, _._)(),
            [_, _] = (0, _.useState)(!0);
          if (
            (_.useEffect(() => {
              _ &&
                (_._.Init(), Promise.all([_._.InitGlobal()]).then(() => _(!1)));
            }, [_]),
            _)
          )
            return (0, _.jsx)(_._, {
              string: (0, _._)("#Loading"),
              position: "center",
            });
          const _ = _._.GetClanEventModel(_);
          return _
            ? (0, _.jsxs)(_._, {
                children: [
                  !_.BIsUnlistedEvent() &&
                    (0, _.jsx)("div", {
                      children:
                        "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
                    }),
                  (0, _.jsx)(_._, {
                    lang: (0, _.sfN)(_._.LANGUAGE),
                    event: _,
                    adminPanel:
                      _._.EREALM === _._.k_ESteamRealmChina
                        ? (0, _.jsx)(_._, {
                            eventModel: _,
                          })
                        : (0, _.jsx)(_._, {
                            eventModel: _,
                            bSupportsSticky: !0,
                          }),
                  }),
                ],
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _, _) {
          return (0, _._)({
            mutationFn: async ({ bIncludeSelf: _, rgGuests: _ }) => {
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("gid", _),
                _.append("accountid", "" + _),
                _.append("meetsteam_group_id", "" + _),
                _.append("meetsteam_session_id", "" + _),
                _.append("include_self", "" + (_ ? 1 : 0)),
                _?.length && _.append("guests", _.join("|"));
              const _ = `${_._.STORE_BASE_URL}meetsteam/ajaxupdateattendance`;
              return (
                (
                  await _().post(_, _, {
                    withCredentials: !0,
                  })
                )?.data?.success == _._
              );
            },
          });
        }
        function _(_, _, _) {
          return (0, _._)({
            mutationFn: async ({ nCapacity: _ }) => {
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("gid", _),
                _.append("meetsteam_group_id", "" + _),
                _.append("meetsteam_session_id", "" + _),
                _.append("capacity", "" + _);
              const _ = `${_._.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`;
              return (
                (
                  await _().post(_, _, {
                    withCredentials: !0,
                  })
                )?.data?.success == _._
              );
            },
          });
        }
        function _(_) {
          return _.reduce(
            (_, _) => (
              _[_.relativeToToday] || (_[_.relativeToToday] = []),
              _[_.relativeToToday].push(_),
              _
            ),
            {
              today: [],
              past: [],
              future: [],
            },
          );
        }
        function _(_, _, _) {
          for (const _ of _)
            if (_.group_id === _) {
              const _ = _.sessions.find((_) => _._ === _);
              if (_)
                return {
                  group: _,
                  session: _,
                };
            }
          return {
            group: null,
            session: null,
          };
        }
        function _(_, _) {
          const _ = (0, _._)(),
            [_] = (0, _.useState)(() =>
              (0, _._)("registrations", "application_config")
                .map((_) => ((_.userReg = JSON.parse(_.jsondata)), _))
                .sort((_, _) => {
                  const _ = _(
                    _.jsondata.meet_steam_groups,
                    _.group_id,
                    _.session_id,
                  );
                  return (
                    (_(_.jsondata.meet_steam_groups, _.group_id, _.session_id)
                      ?.session?.rtime_start || 0) -
                    (_?.session?.rtime_start || 0)
                  );
                })
                .map((_) => {
                  const _ = _(
                    _.jsondata.meet_steam_groups,
                    _.group_id,
                    _.session_id,
                  );
                  return (
                    (_.relativeToToday = _(_?.session, _)),
                    (_.rtSesssionTime = _?.session?.rtime_start ?? 0),
                    _
                  );
                }),
            ),
            _ = _?.trim().toLowerCase() || "";
          return (0, _.useMemo)(
            () =>
              _.filter(
                (_) =>
                  !_.length ||
                  _.userReg.name?.toLowerCase().includes(_) ||
                  _.userReg.company?.toLowerCase().includes(_) ||
                  _.userReg.guest_names?.find((_) =>
                    _.toLowerCase().includes(_),
                  ) ||
                  _.userReg.email_override?.toLowerCase().includes(_),
              ),
            [_, _],
          );
        }
        function _(_, _) {
          return (0, _.useMemo)(() => _(_), [_, _]);
        }
        function _(_, _) {
          if (!_) return "past";
          const _ = (0, _._)(_),
            _ = (0, _._)(_.rtime_start, _),
            _ = _ !== void 0 ? new Date(_ * 1e3) : new Date(),
            _ = new Date(_.getFullYear(), _.getMonth(), _.getDate()),
            _ = new Date(_.getFullYear(), _.getMonth(), _.getDate() + 1);
          return _ >= _ && _ < _ ? "today" : _ < _ ? "past" : "future";
        }
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_] = (0, _._)("gid"),
            _ = (0, _._)(_),
            _ = (0, _.sfN)(_._.LANGUAGE);
          return _
            ? (0, _.jsxs)("div", {
                className: _().Ctn,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().EventName,
                    children: [
                      (0, _.jsx)("h2", {
                        children: _.GetNameWithFallback(_),
                      }),
                      (0, _.jsx)("a", {
                        href: `${_._.STORE_BASE_URL}meetsteam/${_}`,
                        target: "_blank",
                        children: "See Event Details",
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    eventModel: _,
                  }),
                ],
              })
            : (0, _.jsx)(_._, {
                string: (0, _._)("#Loading"),
              });
        }
        function _(_) {
          const { eventModel: _ } = _,
            _ = _(_(_)),
            [_] = (0, _._)("accountid"),
            _ = (0, _._)();
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("div", {
                className: _().User,
                children: (0, _.jsx)(_._, {
                  accountID: _,
                }),
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.today,
                strTitle: "Today " + (0, _._)(_),
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.future,
                bHideIfEmpty: !0,
                strTitle: "Future",
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.past,
                bHideIfEmpty: !0,
                strTitle: "Past",
              }),
            ],
          });
        }
        function _(_) {
          const {
            eventModel: _,
            rgUserRegs: _,
            bHideIfEmpty: _,
            strTitle: _,
          } = _;
          return _.length == 0 && _
            ? null
            : (0, _.jsx)(_._, {
                title: `${_} (${_.length})`,
                bStartMinimized: _,
                children:
                  !_ || _.length == 0
                    ? (0, _.jsx)("div", {
                        children: _ ? "" : "No registrations",
                      })
                    : (0, _.jsx)("div", {
                        children: _.sort(
                          (_, _) => _.rtSesssionTime - _.rtSesssionTime,
                        ).map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              eventModel: _,
                              reg: _,
                            },
                            `${_.group_id}_${_.session_id}`,
                          ),
                        ),
                      }),
              });
        }
        function _(_) {
          const { desc: _ } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useCallback)(() => _((_) => !_), []);
          return (0, _.jsx)("div", {
            className: (0, _._)({
              [_().DescriptionWrapper]: !0,
              [_().Expanded]: _,
            }),
            onClick: _,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: _,
          });
        }
        function _(_) {
          const { reg: _, eventModel: _ } = _,
            _ = new _._(_.steamid).GetAccountID(),
            [_] = (0, _._)(_.userReg.accountid),
            [_, _] = (0, _.useState)(!0),
            [_, _] = (0, _.useState)([]),
            [_, _] = (0, _.useState)(!1),
            _ = _.userReg,
            { group: _, session: _ } = _(
              _.jsondata.meet_steam_groups,
              _.group_id,
              _.session_id,
            ),
            [_, _, _] = (0, _._)(),
            _ = _(_.GID, _, _.group_id, _.session_id),
            _ = new Set(
              _.guests_attendance?.length > 0
                ? _.guests_attendance.split("|")
                : [],
            ),
            _ = _.attendance_count > _.size,
            _ = (_, _, _, _) =>
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsxs)("span", {
                    className: _().GuestTitle,
                    children: [_, ":", "\xA0"],
                  }),
                  _,
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        "\xA0",
                        (0, _.jsxs)("span", {
                          className: _().GuestEmail,
                          children: ["(", _, ")"],
                        }),
                      ],
                    }),
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      "\xA0",
                      "-",
                      (0, _.jsx)("span", {
                        children: _
                          ? "\u2705 checked in"
                          : "\u2610 not checked in",
                      }),
                    ],
                  }),
                ],
              });
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)(_, {
                group: _,
                session: _,
              }),
              _
                ? (0, _.jsx)("div", {
                    className: _().CheckedIn,
                    children: "Attendee has been checked in",
                  })
                : (0, _.jsxs)("div", {
                    className: _().RegisteredUsers,
                    children: [
                      (0, _.jsx)(_._, {
                        label: (0, _.jsx)(_.Fragment, {
                          children: _(
                            "Attendee",
                            _.name || _.persona_name,
                            _.email_override,
                            _,
                          ),
                        }),
                        checked: _,
                        onChange: _,
                      }),
                      _.guest_names?.length > 0 &&
                        (0, _.jsx)(_.Fragment, {
                          children: _.guest_names.map((_) =>
                            (0, _.jsx)(
                              _._,
                              {
                                label: (0, _.jsx)(_.Fragment, {
                                  children: _("Guest", _, void 0, _.has(_)),
                                }),
                                checked: _.includes(_),
                                onChange: (_) => {
                                  _((_) =>
                                    _
                                      ? _.includes(_)
                                        ? _
                                        : [..._, _]
                                      : _.filter((_) => _ !== _),
                                  );
                                },
                              },
                              "" + _.group_id + "_" + _.session_id + "_" + _,
                            ),
                          ),
                        }),
                      (0, _.jsx)(_._, {
                        onClick: _,
                        children: "Check in selected people",
                      }),
                    ],
                  }),
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    closeModal: _,
                    bIncludeSelf: _,
                    rgGuestsAttending: _,
                    fnMarkAttendance: _,
                    fnOnSuccess: () => _(!0),
                  }),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
              closeModal: _,
              bIncludeSelf: _,
              rgGuestsAttending: _,
              fnMarkAttendance: _,
              fnOnSuccess: _,
            } = _,
            _ = (0, _._)();
          return _.bLoading
            ? (0, _.jsx)(_._, {
                state: _,
                strDialogTitle: (0, _._)("#Saving"),
                closeModal: _,
              })
            : (0, _.jsx)(_._, {
                onCancel: _,
                strTitle: (0, _._)("#Button_Submit"),
                bAllowFullSize: !0,
                onOK: async () => {
                  _.fnSetLoading(!0),
                    _.mutateAsync({
                      bIncludeSelf: _,
                      rgGuests: _,
                    })
                      .then((_) => {
                        _
                          ? (_(),
                            _.fnSetStrSuccess(
                              "Success! This person has been checked in.",
                            ))
                          : _.fnSetStrError(
                              (0, _._)("#Login_Error_Network_Description"),
                            );
                      })
                      .catch(() =>
                        _.fnSetStrError(
                          (0, _._)("#Login_Error_Network_Description"),
                        ),
                      );
                },
                children: "Mark as checked in?",
              });
        }
        function _(_) {
          const { session: _, group: _ } = _,
            {
              sDisplayTimeZone: _,
              rtime_start: _,
              rtime_end: _,
            } = (0, _._)(_.session),
            _ = (0, _._)(_, _),
            _ = (0, _._)(_, _, _);
          return !_ || !_
            ? (0, _.jsx)("div", {
                children: "Session Infomrmation Missing",
              })
            : (0, _.jsxs)("div", {
                className: _().SessionInfo,
                children: [
                  (0, _.jsx)("div", {
                    className: _().SessionName,
                    children: _.localized_session_title[_.Bhc],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().SessionTime,
                    children: [
                      _,
                      " @ ",
                      (0, _.jsx)("b", {
                        children: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    children: (0, _.jsx)(_, {
                      desc: `Description: ${_.localized_session_description[_.Bhc] || ""}`,
                    }),
                  }),
                  !1,
                ],
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = new Date(_.getTime());
          return _.setHours(0, 0, 0, 0), _;
        }
        function _(_) {
          const _ = new Date(_.getTime());
          return _.setDate(1), _.setHours(0, 0, 0, 0), _;
        }
        function _(_, _) {
          const _ = new Date(_);
          return _.setDate(_.getDate() + _), _;
        }
        function _(_, _) {
          return _.reduce((_, _) => {
            const _ = _(_),
              _ = Math.floor(_.getTime() / 1e3),
              _ = _.get(_) || [];
            return _.set(_, [..._, _]), _;
          }, new Map());
        }
        function _(_) {
          const [_] = (0, _._)("gid"),
            _ = (0, _._)(_),
            _ = (0, _.sfN)(_._.LANGUAGE),
            [_, _] = (0, _.useState)("");
          return _
            ? (0, _.jsxs)("div", {
                className: _().Ctn,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().EventName,
                    children: [
                      (0, _.jsx)("h1", {
                        children: _.GetNameWithFallback(_),
                      }),
                      (0, _.jsx)("a", {
                        href: `${_._.STORE_BASE_URL}meetsteam/${_}`,
                        target: "_blank",
                        children: "See Event Details",
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    eventModel: _,
                  }),
                  (0, _.jsx)("div", {
                    className: _().AtendeeSearchRow,
                    children: (0, _.jsx)(_._, {
                      type: "text",
                      label: "Search for an attendee",
                      value: _,
                      bShowClearAction: !0,
                      onChange: (_) => _(_.currentTarget.value || ""),
                      placeholder: "Type name or partner or email address",
                    }),
                  }),
                  (0, _.jsx)(_, {
                    eventModel: _,
                    strSearch: _.toLowerCase(),
                  }),
                ],
              })
            : (0, _.jsx)(_._, {
                string: (0, _._)("#Loading"),
              });
        }
        function _(_) {
          const { eventModel: _, strSearch: _ } = _,
            _ = _(_, _),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useMemo)(() => {
              const _ = new Map();
              return (
                _.forEach((_) => {
                  [_.userReg.name, ...(_.userReg.guest_names || [])].forEach(
                    (_) => {
                      const _ = _.toLowerCase();
                      _.has(_) ? _.get(_).push(_) : _.set(_, [_]);
                    },
                  );
                }),
                [_, Array.from(_.keys()).sort()]
              );
            }, [_]);
          return (
            _.useEffect(() => {
              _(null);
            }, [_]),
            (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("h3", {
                  children: "Attendees",
                }),
                _
                  ? (0, _.jsx)(_, {
                      eventModel: _,
                      rgSelected: _,
                      strSearch: _,
                      onCleanSelection: () => _(null),
                    })
                  : (0, _.jsx)(_.Fragment, {
                      children: _.filter((_) => !_ || _.includes(_)).map((_) =>
                        (0, _.jsx)(
                          "div",
                          {
                            className: _().AttendeeRow,
                            children: (0, _.jsx)(_._, {
                              onClick: () => _(_.get(_.toLowerCase())),
                              children: _,
                            }),
                          },
                          _,
                        ),
                      ),
                    }),
              ],
            })
          );
        }
        function _(_) {
          const {
              eventModel: _,
              rgSelected: _,
              strSearch: _,
              onCleanSelection: _,
            } = _,
            _ = (0, _._)(),
            _ = _(_, _);
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("div", {
                className: _().AtendeeListButtonRow,
                children: (0, _.jsxs)(_._, {
                  onClick: _,
                  children: [
                    (0, _.jsx)(_.uMb, {
                      className: _().BackToListIcon,
                    }),
                    "Back to full list",
                  ],
                }),
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.today,
                strTitle: "Today " + (0, _._)(_),
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.future,
                bHideIfEmpty: !0,
                strTitle: "Future",
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.past,
                bHideIfEmpty: !0,
                strTitle: "Past",
              }),
            ],
          });
        }
        function _(_) {
          const { eventModel: _ } = _,
            _ = (0, _._)(),
            [_, _] = _.useState(!1),
            { rgGroupedSessions: _, bMoreSessions: _ } = _.useMemo(() => {
              const _ = _?.jsondata?.meet_steam_groups?.flatMap((_) =>
                  _.sessions.map((_) => {
                    const _ = (0, _._)(_),
                      _ = (0, _._)(_.rtime_start, _);
                    return {
                      group: _,
                      session: _,
                      displayDate: _,
                    };
                  }),
                ),
                _ = _?.filter((_) => _ || _(_.displayDate) >= _(_)),
                _ = _ || (_ && _.length > _.length);
              return {
                rgGroupedSessions: _(_ ?? [], (_) => _(_.displayDate)),
                bMoreSessions: _,
              };
            }, [_?.jsondata?.meet_steam_groups, _, _]),
            _ = _.useMemo(() => {
              const _ = (0, _._)("registrations", "application_config");
              if (!(!_ || typeof _ != "object"))
                return _.reduce((_, _) => {
                  const _ = `${_.group_id}_${_.session_id}`,
                    _ = _.get(_) ?? [];
                  return _.push(_), _.set(_, _), _;
                }, new Map());
            }, []);
          if (!_ || (_.size == 0 && !_)) return;
          const _ =
              Array.from(_.keys()).reduce(
                (_, _) =>
                  _ == null || (_ * 1e3 > _.getTime() && _ < _) ? _ : _,
                void 0,
              ) ?? 0,
            _ = Array.from(_.keys()).some((_) =>
              (0, _._)(_, new Date(_ * 1e3)),
            );
          return (0, _.jsxs)("div", {
            className: _().DisplayAllDaysCtn,
            children: [
              _ &&
                (0, _.jsx)(_._, {
                  label: "Show past events",
                  checked: _,
                  onChange: _,
                }),
              (0, _.jsx)("div", {
                className: _().DisplayDaysCtn,
                children: Array.from(_.keys()).map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      eventModel: _,
                      date: new Date(_ * 1e3),
                      sessionsAndGroups: _.get(_),
                      rgRegistrationInfo: _,
                      isToday: (0, _._)(
                        _ ? _ : new Date(_ * 1e3),
                        new Date(_ * 1e3),
                      ),
                    },
                    _,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const {
            eventModel: _,
            date: _,
            sessionsAndGroups: _,
            rgRegistrationInfo: _,
            isToday: _,
          } = _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().DisplayDaySessions, !_ && _().NotToday),
            children: [
              (0, _.jsx)("div", {
                className: _().DateName,
                children: (0, _._)(_),
              }),
              (0, _.jsx)("div", {
                className: _().DisplayDaySessionsRow,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      eventModel: _,
                      date: _,
                      registrations:
                        _.get(`${_.group.group_id}_${_.session._}`) ?? [],
                      group: _.group,
                      session: _.session,
                    },
                    `${_.group.group_id}_${_.session._}`,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const {
              eventModel: _,
              date: _,
              group: _,
              session: _,
              registrations: _,
            } = _,
            _ = (0, _.sfN)(_._.LANGUAGE),
            _ = (0, _._)(),
            { sDisplayTimeZone: _, rtime_start: _ } = (0, _._)(_),
            _ = (0, _._)(_, _),
            _ = _.reduce((_, _) => _ + (_.guests_registered ?? 0), 0),
            _ = _.reduce(
              (_, _) =>
                _ +
                (_.rt_attendance_marked > 0 && _.guests_registered
                  ? _.guests_registered
                  : 0),
              0,
            ),
            [_, _, _] = (0, _._)(),
            _ = _(_.GID, _.group_id, _._),
            _ = () => window.location.reload();
          return (0, _.jsxs)("div", {
            className: _().DisplaySession,
            children: [
              (0, _.jsxs)("div", {
                className: _().Header,
                children: [
                  (0, _.jsx)("div", {
                    className: _().SessionName,
                    children:
                      _.localized_session_title[_] ??
                      _.localized_session_title[_.Bhc],
                  }),
                  (0, _.jsx)("div", {
                    className: _().SessionTime,
                    children: _,
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                title: "Registered:",
                nCount: _,
                nCapacity: _.max_capacity,
              }),
              (0, _.jsx)(_, {
                title: "Checked in:",
                nCount: _,
                nCapacity: _.max_capacity,
              }),
              _(_) >= _(_) &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_._, {
                      className: (0, _._)(_().SetCapacityButton),
                      onClick: _,
                      children: "Update capacity...",
                    }),
                    (0, _.jsx)(_._, {
                      active: _,
                      children: (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_, {
                          closeModal: _,
                          nCapacity: _.max_capacity ?? 0,
                          fnUpdateCapacity: _,
                          fnOnSuccess: () => _(),
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const {
              closeModal: _,
              nCapacity: _,
              fnUpdateCapacity: _,
              fnOnSuccess: _,
            } = _,
            [_, _] = _.useState(_.toString()),
            _ = (0, _._)();
          return _.bLoading
            ? (0, _.jsx)(_._, {
                state: _,
                strDialogTitle: (0, _._)("#Saving"),
                closeModal: _,
              })
            : (0, _.jsx)(_._, {
                onCancel: _,
                strTitle: (0, _._)("Update Capacity"),
                bAllowFullSize: !0,
                onOK: async () => {
                  _.fnSetLoading(!0);
                  const _ = Number.isNaN(Number.parseInt(_))
                    ? void 0
                    : Number.parseInt(_);
                  _.mutateAsync({
                    nCapacity: _,
                  })
                    .then((_) => {
                      _
                        ? (_(), _.fnSetStrSuccess("Max capacity updated."))
                        : _.fnSetStrError(
                            (0, _._)("#Login_Error_Network_Description"),
                          );
                    })
                    .catch(() =>
                      _.fnSetStrError(
                        (0, _._)("#Login_Error_Network_Description"),
                      ),
                    );
                },
                children: (0, _.jsx)(_._, {
                  className: _().SetCapacityInput,
                  label: "New capacity",
                  type: "text",
                  autoComplete: "off",
                  value: _,
                  onChange: (_) => _(_.currentTarget.value),
                }),
              });
        }
        function _(_) {
          const { title: _, nCount: _, nCapacity: _ } = _,
            _ = _ >= _,
            _ = Math.min((_ / _) * 100, 100),
            _ = _ > 0 ? `${_}%` : "0%";
          return (0, _.jsxs)("div", {
            className: _().CapacityCtn,
            children: [
              (0, _.jsxs)("span", {
                children: [_, " ", _, " / ", _],
              }),
              (0, _.jsx)("div", {
                className: _().CapacityBarMax,
                children: (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().CapacityBarCurrent,
                    _ ? _().Full : "",
                  ),
                  style: {
                    width: _,
                  },
                }),
              }),
            ],
          });
        }
        const _ = {
          MeetSteamAttendance: () => `${_._.MeetSteamRoute()}attendance`,
          MeetSteamEvent: () => `${_._.MeetSteamRoute()}:gid(\\d+)`,
          MeetSteamAttendeeList: () => `${_._.MeetSteamRoute()}attendeelist`,
        };
        function _(_) {
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)(_._, {
                path: _.MeetSteamAttendance(),
                render: (_) =>
                  (0, _.jsx)(_, {
                    ..._,
                  }),
              }),
              (0, _.jsx)(_._, {
                path: _.MeetSteamAttendeeList(),
                render: (_) =>
                  (0, _.jsx)(_, {
                    ..._,
                  }),
              }),
              (0, _.jsx)(_._, {
                path: _.MeetSteamEvent(),
                render: (_) =>
                  (0, _.jsx)(_, {
                    ..._,
                  }),
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {}),
              }),
            ],
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_35KiKa7cq-3mn4lChNW67c",
          EventName: "e-36dCsEtoK52wg6Qx1iq",
          AtendeeSearchRow: "_1KbfPGq52sl-NB4ku90gN3",
          AtendeeListButtonRow: "_2JLogmiR30ClrphBajhwYK",
          BackToListIcon: "_3bl-GtsF8LkmzsRFkqjeCz",
          AttendeeRow: "_35gHo_M6tBBUOL8PWGEmA9",
          DisplayAllDaysCtn: "_3bvF759mojZQZv_TGXaM5Q",
          DisplayDaysCtn: "_1b8sKAzr4LILvJyl7fkRrL",
          DateName: "_32Ut51xzdWXCL6OOaz4vY2",
          DisplayDaySessions: "_32v8UGu0FfxnCHtltxqiEV",
          NotToday: "_1PB1JESsJ8abJrTzTqOVBk",
          DisplayDaySessionsRow: "_3DhIykQH8p8dQb2VOZg4-L",
          DisplaySession: "_27ybiS1mMlsYotyoQGVmI_",
          Header: "_1jOgBHcEXg1l6kSowBxwn6",
          SessionName: "vl9qom9droT0L3xZs2JhG",
          SessionTime: "PG1xFNh9UdoEjEvvw22V5",
          CapacityCtn: "_2jxcROaKoRgZCIKUHALVRH",
          CapacityBarMax: "_2Kd3cw8fPPyzDXTWBxltj7",
          CapacityBarCurrent: "_3jKSoLI8ytiyq9ELWTJNVY",
          Full: "_27_ZZ6xz-L8KC1u6uQmDz",
          SetCapacityButton: "_1BPqndgvTdc3n4fPDlcvAQ",
          SetCapacityInput: "QnMJIDEn4Rz26VtL1RdUu",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_3cmUbcgdPxM7o5hl986RgB",
          User: "_3E6Usl36asxUFK3vPKa7Us",
          EventName: "_2GHTaky49GZrPLyiOgKWB7",
          SessionInfo: "Kk38rrvnYm3-E2jJMahSH",
          SessionName: "_2uJvCA4FncHONmSI37VVyw",
          SessionTime: "_2vYmHfXJIHj2eCv8NsiqZv",
          RegisteredUsers: "HLiipgmnfEQ2O-9WritfU",
          CheckedIn: "_17S0ayInAou4_ptPoMguR0",
          GuestTitle: "_2fMFlfbH8xUEtW28kSLf5-",
          GuestEmail: "Tm-tj9XNHRPGqdqqNiTEp",
          DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
        };
      },
    },
  ]);
})();
