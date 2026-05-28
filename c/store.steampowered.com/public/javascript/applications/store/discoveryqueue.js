(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
    chunkid: (module) => {
      module.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
      };
    },
    chunkid: (module) => {
      module.exports = {
        ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
        AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
        loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
        Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
        Circular: "_3wMS41OoTPnZyEddTVwzy_",
        Full: "_3t_UEZDy1QxxcYfn3TTvD2",
      };
    },
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
        WidgetText: "co4IP1iV1813n9UgG3h5f",
        WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
        CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
        _: "_1FD7rgQVEqkzjDjzYa-1BC",
        BackgroundAnimation: "_1Z5QxYX1JW3xFfBP4Olbj8",
        "ItemFocusAnim-darkerGrey-nocolor": "_2-B-maYes-hWNZaATdM3tO",
        "ItemFocusAnim-darkerGrey": "_7SrvWzxxGnhg_rsCG_oIn",
        "ItemFocusAnim-darkGreySettings": "_2XbtC6kB1lhuX_TsQSZLwO",
        "ItemFocusAnim-darkGrey": "_1eAeT6Xs-BGjbRYdD0Wir2",
        "ItemFocusAnim-grey": "_3EzLQA3urt8YNbSeiYzqLQ",
        "ItemFocusAnim-translucent-white-10": "_3dWS2PSA5ggPqUc4QB-P1Z",
        "ItemFocusAnim-translucent-white-20": "_2qWHGTZs1PRzk_FzWgYwvS",
        "ItemFocusAnimBorder-darkGrey": "_1gEGV4txNqIr0COruFARVh",
        "ItemFocusAnim-green": "_1kT_vT6X_21tgdACN3MD1r",
        focusAnimation: "_2VIlPFJOxlK-lazFTkek7v",
        hoverAnimation: "I3jGaAXmpxTOQldGALnOQ",
      };
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
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
              __webpack_require__.map((_) => _.get(_) ?? null)
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
        const _ = (0, _._)(),
          _ = _.useContext(_);
        return (0, _._)(_(_, _, _));
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = _.useContext(_);
        return (0, _._)({
          queries: _.map((_) => _(_, _, _)),
        });
      }
      const _ = _.createContext({
        loadPersonaState: async (_, _) => {
          if (null == _) return null;
          const _ = await (function (_) {
            return (_ ??= _(_));
          })(_).load(_._.InitFromAccountID(_).ConvertTo64BitString());
          return (function (_, _) {
            let _ = new _._(_);
            const _ = _?.public_data,
              _ = _?.private_data;
            (_.m_bInitialized = !!_),
              (_.m_ePersonaState = _?.persona_state ?? _.cU3),
              (_.m_strAvatarHash = _?.sha_digest_avatar
                ? (0, _._)(_.sha_digest_avatar)
                : _._),
              (_.m_strPlayerName = _?.persona_name ?? _.ConvertTo64BitString()),
              (_.m_strAccountName = _?.account_name),
              _?.persona_state_flags &&
                (_.m_unPersonaStateFlags = _?.persona_state_flags);
            _?.game_id && (_.m_gameid = _?.game_id);
            _?.game_server_ip_address &&
              (_.m_unGameServerIP = _?.game_server_ip_address);
            _?.lobby_steam_id && (_.m_game_lobby_id = _?.lobby_steam_id);
            _?.game_extra_info && (_.m_strGameExtraInfo = _?.game_extra_info);
            _?.profile_url && (_.m_strProfileURL = _.profile_url);
            return _;
          })(_._.InitFromAccountID(_), _);
        },
      });
      function _() {
        return _.useContext(_);
      }
      function _(_, _, _) {
        const _ = "string" == typeof _ ? new _._(_).GetAccountID() : _;
        return {
          queryKey: ["PlayerSummary", _],
          queryFn: () => _.loadPersonaState(_, _),
          enabled: !!_,
        };
      }
      let _;
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_claimState = {
          bCanClaimNewItem: !1,
          bAlreadyClaimedCurrentItem: !1,
        };
        m_claimedFreeItemDef;
        m_rtNextClaimTime;
        m_claimTimer;
        m_SteamInterface = null;
        m_canClaimPromise = null;
        m_claimPromise = null;
        m_claimStateChangeCallback = new _._();
        m_testNextClaimFakeResponse = null;
        m_bInTestMode = !1;
        GetClaimItemState() {
          return this.m_claimState;
        }
        GetClaimStateChangeCallback() {
          return this.m_claimStateChangeCallback;
        }
        GetClaimedSaleRewardItemDef() {
          return this.m_claimedFreeItemDef;
        }
        GetNextClaimTime() {
          if (!this.m_rtNextClaimTime) return null;
          return new Date(1e3 * this.m_rtNextClaimTime);
        }
        TEST_OverrideClaimState(_) {
          (this.m_bInTestMode = !0),
            (this.m_canClaimPromise = null),
            (this.m_claimPromise = null),
            _.bCanClaimNewItem
              ? (this.m_testNextClaimFakeResponse = {
                  bAlreadyClaimedCurrentItem: !0,
                  bCanClaimNewItem: !1,
                  rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                  appid: 2243810,
                  community_item_type: 2,
                  community_item_class: _._,
                })
              : (this.m_testNextClaimFakeResponse = null),
            (this.m_claimState = _),
            this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
        }
        async ActivateProfileModifier(_) {
          const _ = _._.Init(_._);
          _.Body().set_communityitemid(_.communityitemid),
            _.Body().set_appid(_.appid),
            _.Body().set_activate(!0);
          const _ = await _._.ActivateProfileModifierItem(
            this.m_SteamInterface.GetServiceTransport(),
            _,
          );
          return (
            __webpack_require__.GetEResult() != _._ &&
              console.error(
                `Error when calling QuestService.ActivateProfileModifierItem: EResult=${__webpack_require__.GetEResult()}`,
              ),
            __webpack_require__.GetEResult()
          );
        }
        async LoadCanUserClaimItem() {
          return this.m_bInTestMode
            ? this.m_claimState
            : (this.m_canClaimPromise ||
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
              this.m_canClaimPromise);
        }
        async InternalLoadCanUserClaimItem() {
          (0, _._)(
            _._.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const _ = _._.Init(_._);
          _.Body().set_language(_._.LANGUAGE);
          let _ = null;
          try {
            const _ = await _._.CanClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              _,
            );
            if (__webpack_require__.GetEResult() == _._)
              return (
                (this.m_claimedFreeItemDef = Boolean(
                  __webpack_require__.Body().reward_item()?.defid(),
                )
                  ? __webpack_require__.Body().reward_item()?.toObject()
                  : null),
                (this.m_claimState = {
                  bCanClaimNewItem: !!__webpack_require__.Body().can_claim(),
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef?.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef?.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef?.community_item_class,
                  rtNextClaimTime:
                    (__webpack_require__.Body().next_claim_time() ?? 0) > 0
                      ? __webpack_require__.Body().next_claim_time()
                      : void 0,
                }),
                (this.m_rtNextClaimTime = __webpack_require__
                  .Body()
                  .next_claim_time()),
                this.SetClaimTimer(),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                this.m_claimState
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalLoadCanUserClaimItem failed: error: " +
                _?.strErrorMsg,
              _,
            ),
            {
              bCanClaimNewItem: !1,
              bAlreadyClaimedCurrentItem: !1,
            }
          );
        }
        async UserClaimItem() {
          return (
            this.m_testNextClaimFakeResponse &&
              (console.log(
                "CSaleItemClaimableRewardsStore - testing, pretending claim action succeeded",
                (0, _._)(this.m_testNextClaimFakeResponse),
              ),
              (this.m_claimState = this.m_testNextClaimFakeResponse),
              this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
              (this.m_rtNextClaimTime = this.m_claimState.rtNextClaimTime),
              this.SetClaimTimer(),
              (this.m_testNextClaimFakeResponse = null)),
            this.m_bInTestMode
              ? this.m_claimState
              : (this.m_claimPromise ||
                  (this.m_claimPromise = this.InternalUserClaimItem()),
                this.m_claimPromise)
          );
        }
        async InternalUserClaimItem() {
          (0, _._)(
            _._.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, _._)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const _ = _._.Init(_._);
          _.Body().set_language(_._.LANGUAGE);
          let _ = null;
          try {
            const _ = await _._.ClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              _,
            );
            if (__webpack_require__.GetEResult() == _._)
              return (
                (this.m_claimedFreeItemDef =
                  __webpack_require__.Body().reward_item()?.toObject() ?? {}),
                (this.m_claimState = {
                  bCanClaimNewItem: !1,
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef.community_item_class,
                  rtNextClaimTime:
                    (__webpack_require__.Body().next_claim_time() ?? 0) > 0
                      ? __webpack_require__.Body().next_claim_time()
                      : void 0,
                }),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                (this.m_rtNextClaimTime = __webpack_require__
                  .Body()
                  .next_claim_time()),
                this.SetClaimTimer(),
                this.m_claimState
              );
            if (__webpack_require__.GetEResult() == _._)
              return (
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
                this.m_canClaimPromise
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalUserClaimItem failed: error: " +
                _?.strErrorMsg,
              _,
            ),
            {
              bCanClaimNewItem: !1,
              bAlreadyClaimedCurrentItem: !1,
            }
          );
        }
        SetClaimTimer() {
          if (this.m_claimTimer) return;
          if (!this.m_rtNextClaimTime) return;
          const _ = Date.now();
          let _ = new Date(1e3 * this.m_rtNextClaimTime);
          const _ = Math.max(0, Math.min(1, _.getTime() - _));
          this.m_claimTimer = window.setTimeout(
            () => {
              (this.m_claimTimer = void 0),
                Date.now() > _.getTime()
                  ? ((this.m_canClaimPromise = null),
                    (this.m_claimPromise = null),
                    (this.m_claimedFreeItemDef = null),
                    (this.m_claimState = {
                      bCanClaimNewItem: !0,
                      bAlreadyClaimedCurrentItem: !1,
                      rtNextClaimTime: void 0,
                    }),
                    this.GetClaimStateChangeCallback().Dispatch(
                      this.m_claimState,
                    ))
                  : this.SetClaimTimer();
            },
            _ > 3e5 ? _ / 2 : _,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const _ = (0, _._)("loyalty_webapi_token", "application_config");
          (0, _._)(
            _,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new _._(_._.WEBAPI_BASE_URL, _));
        }
      }
      function _() {
        const [_, _] = (0, _.useState)(_.Get().GetClaimItemState()),
          [_, _] = (0, _.useState)(!0);
        return (
          (0, _.useEffect)(() => {
            _.Get()
              .LoadCanUserClaimItem()
              .then(_)
              .finally(() => _(!1));
          }, []),
          (0, _._)(_.Get().GetClaimStateChangeCallback(), _),
          {
            ..._,
            bLoading: _,
          }
        );
      }
      function _() {
        return {
          fnClaimItem: _.Get().UserClaimItem,
        };
      }
      function _() {
        return {
          fnSetClaimState: _.Get().TEST_OverrideClaimState,
        };
      }
      async function _(_) {
        return _.Get().ActivateProfileModifier(_);
      }
      function _(_, _, _) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: [`SaleRewardsGetDefinition_${_}_${_}_${_}`],
          queryFn: async () =>
            (async function (_, _, _, _) {
              const _ = _._.Init(_._);
              return (
                _.Body().set_sale_def_type(_),
                _.Body().set_language(_),
                _.Body().set_include_community_item_def(_),
                (await _._.GetCurrentDefinition(_, _)).Body().toObject()
              );
            })(_, _, _, _),
          staleTime: 1 / 0,
        });
      }
      function _(_, _, _, _) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: [`GetClaimedSaleRewards_${_}_${_}_${_}_${_}`],
          queryFn: async () =>
            (async function (_, _, _, _) {
              const _ = _._.Init(_._);
              return (
                _.Body().set_sale_def_type(_),
                _.Body().set_language(_),
                _.Body().set_include_community_item_def(_),
                (await _._.GetClaimedSaleRewards(_, _)).Body().toObject()
              );
            })(_, _, _, _),
          staleTime: 1 / 0,
        });
      }
      (0, _._)([_._], _.prototype, "TEST_OverrideClaimState", null),
        (0, _._)([_._], _.prototype, "UserClaimItem", null);
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { gidEvent: _ } = _,
          _ = (0, _._)(_),
          [_, _] = (0, _.useMemo)(() => {
            if (
              _?.jsondata?.localized_sale_product_banner?.length > 0 &&
              _?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const _ = (0, _.sfN)(_._.LANGUAGE),
                _ = _._.GetWithFallback(
                  _.jsondata.localized_sale_product_banner,
                  _,
                ),
                _ = _._.GetWithFallback(
                  _.jsondata.localized_sale_product_mobile_banner,
                  _,
                );
              if (_?.length > 0 && _?.length > 0)
                return [
                  _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                  _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                ];
            }
            return [null, null];
          }, [_]);
        return _?.length > 0 && _?.length > 0
          ? (0, _.jsxs)("a", {
              href: (0, _._)(__webpack_require__.GetSaleURL()),
              className: _.Link,
              children: [
                (0, _.jsx)("img", {
                  src: _,
                  className: (0, _._)(_.Banner, _.Big),
                }),
                (0, _.jsx)("img", {
                  src: _,
                  className: (0, _._)(_.Banner, _.Mobile),
                }),
              ],
            })
          : null;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
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
      const _ = ({ nPercent: _, size: _ = 120, strokeWidth: _ = 20 }) => {
        const _ = (_ - _) / 2,
          _ = 2 * Math._ * _,
          _ = _ - (_ / 100) * _,
          _ = 100 == _;
        return (0, _.jsx)("div", {
          className: (0, _._)({
            [_.Circular]: !0,
            [_.Full]: _,
          }),
          children: (0, _.jsxs)("svg", {
            width: _,
            height: _,
            style: {
              transform: "rotate(-90deg)",
            },
            children: [
              (0, _.jsx)("circle", {
                _: _ / 2,
                _: _ / 2,
                _: _,
                stroke: "#0c131d",
                strokeWidth: _,
                fill: "none",
              }),
              (0, _.jsx)("circle", {
                _: _ / 2,
                _: _ / 2,
                _: _,
                stroke: "#1a9fff",
                strokeWidth: _,
                fill: "none",
                strokeDasharray: _,
                strokeDashoffset: _,
                style: {
                  transition: "stroke-dashoffset 0.3s ease-in-out",
                },
              }),
            ],
          }),
        });
      };
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
      class _ {
        static async LoadFriendsRecommendedApp(_, _) {
          const _ = _._.Init(_._);
          __webpack_require__.Body().set_appid(_);
          const _ = await _._.GetFriendsRecommendedApp(_, _),
            _ = _.GetEResult();
          if (_ == _._) return _.Body().toObject();
          throw `Error ${_} failed to call GetFriendsRecommendedApp ${_}`;
        }
        static async LoadStoreRelevanceData(_) {
          let _ = {
              appid: _,
            },
            _ = {
              arrSimilarPlayedApps: [],
              bRecommendedByIR: !1,
            };
          const _ = (
            await _().get(
              `${_._.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              {
                params: _,
                withCredentials: !0,
                timeout: 1e4,
              },
            )
          ).data;
          return (
            _ &&
              _.success == _._ &&
              (_.results.similar_played_apps &&
                (_.arrSimilarPlayedApps = _.results.similar_played_apps.map(
                  (_) => ({
                    appid: _.appid,
                    playtimeForever: _.playtime_forever,
                  }),
                )),
              _.results.recommended_by_ir && (_.bRecommendedByIR = !0)),
            _
          );
        }
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new _._("AppRelevance").Debug;
      function _(_) {
        const {
            appID: _,
            bShowAvatars: _,
            storeItem: _,
            bHideDescription: _,
            bShowCuratorInfo: _,
            bShowCreatorInfo: _,
          } = _,
          _ = (0, _._)(_),
          _ = (function (_) {
            const _ = (0, _._)();
            return (0, _._)({
              queryKey: ["AppRelevanceStore", "FriendsRecommended", _],
              queryFn: () => _.LoadFriendsRecommendedApp(_, _),
              enabled: _._.logged_in,
            });
          })(_),
          _ = (function (_) {
            return (0, _._)({
              queryKey: ["AppRelevanceStore", "StoreRelevance", _],
              queryFn: () => _.LoadStoreRelevanceData(_),
              enabled: _._.logged_in,
            });
          })(_),
          _ = (function () {
            const { data: _ } = (0, _._)("App Relevance Store Top Sellers", {
              sort: _._._,
              start: 0,
              count: 100,
            });
            return _;
          })(),
          _ = (0, _._)({
            queryKey: ["SimilarPlayedAppsLoad", _],
            queryFn: () =>
              _._.Get().QueueMultipleAppRequests(
                _.data.arrSimilarPlayedApps?.map((_) => _.appid),
                {
                  include_basic_info: !0,
                  include_assets: !0,
                },
              ),
            enabled: _.isSuccess,
          }),
          _ = (function (_, _) {
            const _ = (0, _.useMemo)(
              () => _._.Get().GetRecommendingCuratorsForApp(_) || [],
              [_],
            );
            return (0, _._)({
              queryKey: ["RecommendingCurators", _],
              queryFn: () =>
                Promise.all(
                  __webpack_require__?.map((_) =>
                    _._.LoadClanInfoForClanAccountID(_),
                  ),
                ),
              enabled: !!_ && _ && _.length > 0,
            });
          })(_, _),
          _ = (0, _.useMemo)(() => {
            let _ = [];
            return (
              _ &&
                ((_ = _.concat(
                  _.GetAllFranchiseCreatorClans().map((_) => ({
                    nAccountID: _,
                    type: "franchise",
                  })),
                )),
                (_ = _.concat(
                  _.GetAllDeveloperCreatorClans().map((_) => ({
                    nAccountID: _,
                    type: "developer",
                  })),
                )),
                (_ = _.concat(
                  _.GetAllPublisherCreatorClans().map((_) => ({
                    nAccountID: _,
                    type: "publisher",
                  })),
                )),
                (_ = _.filter((_) =>
                  _._.Get().BIsFollowingCurator(_.nAccountID),
                ))),
              _
            );
          }, [_]),
          _ = (0, _._)({
            queryKey: ["FollowedCreators", _],
            queryFn: () =>
              _._.LoadClanInfoForClanAccountID(_[0].nAccountID).then((_) => ({
                clanInfo: _,
                type: _[0].type,
              })),
            enabled: !!_ && _ && _.length > 0,
          }),
          _ = (0, _._)({
            queryKey: ["PlayerSummaries", _, _],
            queryFn: async () => {
              let _ = [],
                _ = [],
                _ = [];
              const _ = _ ? 10 : 1;
              for (
                let _ = 0;
                _ < _.data.accountids_recommended?.length && _ < _;
                _++
              ) {
                const _ = _._.InitFromAccountID(
                  _.data.accountids_recommended[_],
                );
                _.push(__webpack_require__.ConvertTo64BitString());
              }
              for (let _ = 0; _ < _.data.in_wishlist?.length && _ < _; _++) {
                const _ = new _._(_.data.in_wishlist[_].steamid);
                _.push(__webpack_require__.ConvertTo64BitString());
              }
              for (let _ = 0; _ < _.data.owns?.length && _ < _; _++) {
                const _ = new _._(_.data.owns[_].steamid);
                _.push(_.ConvertTo64BitString());
              }
              return {
                rgRecommendedFriends: _,
                rgWishlistFriends: _,
                rgOwnedFriends: _,
              };
            },
            enabled: _.isSuccess && _.isSuccess,
          });
        if (
          !_ ||
          _.isLoading ||
          _.isLoading ||
          _.isLoading ||
          _.isLoading ||
          _.isLoading ||
          _.isLoading ||
          _.isLoading
        )
          return (0, _.jsx)(_._, {
            size: "medium",
            position: "center",
          });
        let _ = [];
        _.isSuccess &&
          _.data.arrSimilarPlayedApps &&
          _.data.arrSimilarPlayedApps.forEach((_) => {
            const _ = _._.Get().GetApp(_.appid);
            _
              ? _.push(
                  (0, _.jsx)(
                    _,
                    {
                      lifetimePlaytime: _.playtimeForever,
                      storeItem: _,
                    },
                    _.appid,
                  ),
                )
              : console.error("Failed to load store data ", _);
          });
        const _ = _.GetItemIDs().findIndex((_) => _.appid === _),
          _ = _.data?.bRecommendedByIR,
          _ = _.length > 0,
          _ = _.data?.owns?.length,
          _ = _.data?.in_wishlist?.length,
          _ = _.data?.accountids_recommended?.length;
        let _ = 0;
        return (
          _ > 0 && _++,
          _ > 0 && _++,
          _ > 0 && _++,
          _ && _++,
          _ >= 0 && _++,
          _.length > 0 && _++,
          _ && _?.data?.length > 0 && _++,
          _ && Boolean(_.data) && _++,
          _(
            "FriendsOwned: ",
            _,
            " FriendsWishlisted: ",
            _,
            "cRecommended: ",
            _,
          ),
          (0, _.jsxs)(_.Fragment, {
            children: [
              _ > 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      className: _().WhyRelevant,
                      children: (0, _._)("#DiscoveryQueue_WhyRelevant"),
                    }),
                    (0, _.jsxs)("div", {
                      role: "list",
                      className: _().RelevantCtn,
                      children: [
                        _ &&
                          (0, _.jsx)(_, {
                            header: (0, _._)("#DiscoveryQueue_SimilarGames"),
                            children: (0, _.jsx)("div", {
                              className: _().ReleventSimilarAppsCtn,
                              children: _,
                            }),
                          }),
                        _ &&
                          _?.data?.length > 0 &&
                          (0, _.jsx)(_, {
                            header: (0, _._)(
                              "#ContentHub_Recommendation_Curators",
                            ),
                            children: (0, _.jsx)("div", {
                              className: (0, _._)(
                                _().ReleventSimilarAppsCtn,
                                _().RecommendingCuratorsCtn,
                              ),
                              children: _.data.filter(Boolean).map((_) =>
                                (0, _.jsx)(
                                  _,
                                  {
                                    curator: _,
                                  },
                                  "curator_" + _.clanAccountID,
                                ),
                              ),
                            }),
                          }),
                        _ &&
                          Boolean(_.data) &&
                          (0, _.jsx)(_, {
                            creatorInfo: _.data,
                          }),
                        _ >= 0 &&
                          (0, _.jsx)(_, {
                            header: (0, _._)(
                              "#DiscoveryQueue_TopSellers",
                              (0, _._)(_ + 1),
                              (0, _.jsx)("span", {
                                className: _().RelevantTextBold,
                              }),
                            ),
                          }),
                        _ &&
                          !_ &&
                          (0, _.jsx)(_, {
                            header: (0, _._)("#DiscoveryQueue_RecommendedByIR"),
                          }),
                        (0, _.jsx)(_, {
                          bShowAvatars: _,
                          count: _.data?.accountids_recommended?.length,
                          locToken: "#DiscoveryQueue_FriendsRecommended",
                          arrSteamIDs: _.data?.rgRecommendedFriends,
                        }),
                        (0, _.jsx)(_, {
                          bShowAvatars: _,
                          count: _.data?.owns?.length,
                          locToken: "#DiscoveryQueue_FriendsOwned",
                          arrSteamIDs: _.data?.rgOwnedFriends,
                        }),
                        (0, _.jsx)(_, {
                          bShowAvatars: _,
                          count: _.data?.in_wishlist?.length,
                          locToken: "#DiscoveryQueue_FriendsWishlisted",
                          arrSteamIDs: _.data?.rgWishlistFriends,
                        }),
                      ],
                    }),
                  ],
                }),
              _ && 0 != _
                ? (0, _.jsx)("div", {
                    "aria-label": _.GetShortDescription(),
                  })
                : (0, _.jsx)("div", {
                    className: (0, _._)(_().AppDescription, _ && _().Divider),
                    children: _.GetShortDescription(),
                  }),
            ],
          })
        );
      }
      function _(_) {
        const { creatorInfo: _ } = _;
        if (!_) return null;
        let _;
        switch (_.type) {
          case "publisher":
            _ = "#ContentHub_Recommendation_FollowedPublisher";
            break;
          case "developer":
            _ = "#ContentHub_Recommendation_FollowedDeveloper";
            break;
          case "franchise":
            _ = "#ContentHub_Recommendation_FollowedFranchise";
        }
        return _
          ? (0, _.jsx)(_, {
              header: (0, _._)(
                _,
                (0, _.jsx)("span", {
                  className: _().RelevantTextBold,
                  children: _.clanInfo?.group_name,
                }),
              ),
            })
          : null;
      }
      function _(_) {
        const { curator: _ } = _,
          { creatorHome: _ } = (0, _._)(_?.clanAccountID);
        return _ && _
          ? (0, _.jsx)(_._, {
              href: __webpack_require__.GetCreatorHomeURL(null),
              children: (0, _.jsx)("img", {
                src: _.avatar_medium_url,
              }),
            })
          : null;
      }
      function _(_) {
        const { lifetimePlaytime: _, storeItem: _ } = _,
          _ = (0, _._)(_);
        return (0, _.jsx)("div", {
          className: _().SimilarAppCtn,
          children: (0, _.jsx)(_._, {
            _: _,
            bHidePrice: !0,
            hoverProps: {
              direction: "overlay",
              nBodyAlignment: 1,
              style: {
                minWidth: "320px",
                zIndex: 5e3,
              },
            },
            children: (0, _.jsx)("img", {
              className: _().SimilarAppImg,
              alt: __webpack_require__.GetName(),
              src: __webpack_require__.GetAssets().GetSmallCapsuleURL(),
            }),
          }),
        });
      }
      function _(_) {
        const { arrSteamIDs: _, count: _, locToken: _, bShowAvatars: _ } = _;
        return _
          ? 1 != _ || _
            ? (0, _.jsx)(_, {
                header: (0, _._)(
                  _,
                  _,
                  (0, _.jsx)("span", {
                    className: _().RelevantTextBold,
                  }),
                ),
                children:
                  _ &&
                  _.length > 0 &&
                  (0, _.jsx)("div", {
                    className: _().FriendAvatarsCtn,
                    children:
                      1 == _
                        ? (0, _.jsx)(_, {
                            steamid: _[0],
                          })
                        : (0, _.jsx)(_, {
                            arrSteamIDs: _,
                          }),
                  }),
              })
            : (0, _.jsx)(_, {
                header: (0, _._)(
                  _ + "_Single",
                  (0, _.jsx)(_, {
                    steamid: _[0],
                  }),
                ),
              })
          : null;
      }
      function _(_) {
        const { steamid: _ } = _,
          { data: _ } = (0, _._)(_);
        return _ && _.m_bInitialized
          ? (0, _.jsx)("span", {
              "data-miniprofile": "s" + _.m_steamid.ConvertTo64BitString(),
              className: _().RelevantTextBold,
              children: _.m_strPlayerName,
            })
          : null;
      }
      function _(_) {
        const { arrSteamIDs: _ } = _,
          _ = (0, _._)(_);
        return (0, _.jsx)(_.Fragment, {
          children: __webpack_require__.map(
            ({ data: _ }) =>
              _ &&
              (0, _.jsx)(
                _._,
                {
                  "data-miniprofile": "s" + _.m_steamid.ConvertTo64BitString(),
                  persona: _,
                  size: "Small",
                  statusPosition: "right",
                },
                _.m_steamid.ConvertTo64BitString(),
              ),
          ),
        });
      }
      function _(_) {
        const { steamid: _ } = _,
          { data: _ } = (0, _._)(_);
        return _
          ? (0, _.jsxs)(_._, {
              className: _().FriendBlockCtn,
              "data-miniprofile": "s" + _,
              children: [
                (0, _.jsx)(_._, {
                  persona: _,
                  size: "Small",
                  statusPosition: "right",
                }),
                (0, _.jsx)(_._, {
                  className: _().PersonaStatus,
                  persona: _,
                  eFriendRelationship: _._UC,
                  bIsSelf: !1,
                  strNickname: null,
                  bParenthesizeNicknames: !1,
                  bCompactView: !1,
                  bNoMask: !0,
                }),
              ],
            })
          : null;
      }
      function _(_) {
        const { children: _, header: _ } = _;
        return (0, _.jsxs)("div", {
          className: _().RelevantItem,
          children: [
            (0, _.jsx)("div", {
              className: _().RelevantCheck,
              children: (0, _.jsx)(_.Jlk, {}),
            }),
            (0, _.jsxs)("div", {
              className: _().RelevantColumn,
              children: [
                (0, _.jsx)("div", {
                  className: _().ReleventText,
                  children: _,
                }),
                _,
              ],
            }),
          ],
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      new _._("DiscoveryQueueApp").Debug;
      function _(_) {
        const {
            appID: _,
            nItemHeight: _,
            nItemWidth: _,
            selected: _,
            fnFocused: _,
            eStoreDiscoveryQueueType: _,
            storePageFilter: _,
            bPreferDemoStorePage: _,
            elVideo: _,
            elDetails: _,
            appAriaIDs: _,
          } = _,
          [_] = (0, _._)(_, _._),
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = _?.ownerWindow || window,
          _ = _(_, _, _, _),
          { bIsIgnored: _, fnUpdateIgnored: _ } = (0, _._)(_),
          { bIsWishlisted: _, fnUpdateWishlist: _ } = (0, _._)(_),
          _ = _.useRef(void 0);
        if (
          (_.useEffect(() => {
            _ &&
              _.current &&
              _.current.focus({
                preventScroll: !0,
              });
          }, [_]),
          !_)
        )
          return console.warn("Error: missing store item for appid ", _), null;
        const _ = {
          width: _ || void 0,
          height: _ || void 0,
        };
        return (0, _.jsxs)(_._, {
          "aria-labelledby": (0, _._)(
            _.nameId,
            _.tagsId,
            _.reviewId,
            _.relevanceId,
            _.buttonsId,
          ),
          ref: _,
          style: _,
          className: (0, _._)(_().DiscoveryQueueApp, _ && _().Selected),
          onOptionsActionDescription: _
            ? (0, _._)("#DiscoveryQueue_RemoveFromWishlist")
            : (0, _._)("#DiscoveryQueue_AddToWishlist"),
          onOptionsButton: _,
          onOKActionDescription: (0, _._)("#DiscoveryQueue_ViewStorePage"),
          onOKButton: () => {
            _.location.href = _;
          },
          onSecondaryActionDescription: _
            ? (0, _._)("#DiscoveryQueue_Undo")
            : (0, _._)("#DiscoveryQueue_IgnoreLink"),
          onSecondaryButton: _,
          fnScrollIntoViewHandler: () => (_(), !0),
          children: [
            (0, _.jsx)("div", {
              className: (0, _._)(_().IgnoredCtn, _ && _().Active),
              children: (0, _.jsxs)("div", {
                className: (0, _._)(_().IgnoredInfo, _ && _().Active),
                children: [
                  (0, _.jsx)("div", {
                    className: _().IgnoredTitle,
                    children: (0, _._)("#DiscoveryQueue_Ignored"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().IgnoredDescription,
                    children: (0, _._)("#DiscoveryQueue_IgnoredConfirmation"),
                  }),
                  (0, _.jsxs)(_._, {
                    className: (0, _._)(_().QueueButton, _().UndoIgnoreButton),
                    onClick: _,
                    children: [
                      _ &&
                        (0, _.jsx)(_._, {
                          button: _._._,
                          type: _._.Light,
                          size: _._.Medium,
                        }),
                      (0, _._)("#DiscoveryQueue_Undo"),
                    ],
                  }),
                ],
              }),
            }),
            _,
            _,
          ],
        });
      }
      function _(_, _, _, _) {
        const _ = (0, _._)();
        return _.useMemo(() => {
          if (!_) return;
          const _ = (0, _._)(_),
            _ = _ >= _._._ ? "?inqueue=" + _ + (_ ? "_" + _ : "") : "",
            _ = (0, _._)(_, _.GetStorePageURL(_) + _);
          return (0, _._)(_);
        }, [_, _, _, _, _]);
      }
      function _(_) {
        const {
            appID: _,
            bShowMinimizedDisplay: _,
            eStoreDiscoveryQueueType: _,
            storePageFilter: _,
            bPreferDemoStorePage: _,
            appAriaIDs: _,
          } = _,
          [_] = (0, _._)(_, _._),
          _ = (0, _._)(_),
          { bIsIgnored: _, fnUpdateIgnored: _ } = (0, _._)(_),
          { bIsWishlisted: _, fnUpdateWishlist: _ } = (0, _._)(_),
          _ = _(_, _, _, _),
          _ = (0, _._)(),
          _ = _;
        if (!_) return;
        const _ = _.GetAssets().GetLibraryCapsuleURL(),
          _ = _.GetAssets().GetHeaderURL();
        return (0, _.jsxs)(_._, {
          className: _().AppDetailsCtn,
          children: [
            (0, _.jsxs)("div", {
              className: _().AppDetailsCtnTop,
              children: [
                _ &&
                  (0, _.jsxs)("a", {
                    className: (0, _._)(_().CapsuleLink),
                    href: _,
                    children: [
                      (0, _.jsx)("img", {
                        className: _().AppLibraryHero,
                        src: _,
                      }),
                      _ &&
                        (0, _.jsx)("img", {
                          className: _().AppHeader,
                          src: _,
                        }),
                    ],
                  }),
                (0, _.jsxs)("div", {
                  _: _.nameId,
                  className: _().RightColumn,
                  children: [
                    (0, _.jsx)("a", {
                      className: (0, _._)(_().AppName),
                      href: _,
                      children: _.GetName(),
                    }),
                    (0, _.jsx)(_._, {
                      bSingleLineMode: !0,
                      _: _,
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  rgTagIDs: _.GetTagIDs(),
                  ariaLabelID: _.tagsId,
                }),
                (0, _.jsx)("div", {
                  className: _().AppReviews,
                  _: _.reviewId,
                  children: (0, _.jsx)(_._, {
                    bShowTooltip: !0,
                    bTruncateTotalReviews: _,
                    _: _,
                  }),
                }),
                (0, _.jsx)("div", {
                  _: _.relevanceId,
                  className: _().AppRelevanceCtn,
                  children: (0, _.jsx)(_, {
                    bHideDescription: _,
                    bShowAvatars: !_,
                    storeItem: _,
                    appID: _,
                  }),
                }),
              ],
            }),
            !_ &&
              (0, _.jsx)("div", {
                className: _().AppActionButtonsCtn,
                children: (0, _.jsx)("div", {
                  _: _.buttonsId,
                  className: _().AppActionJustButtonsCtn,
                  children: (0, _.jsxs)("div", {
                    className: _().ButtonsRowWrap,
                    children: [
                      _.BHasDemo() &&
                        (0, _.jsx)(_._, {
                          _: _,
                          className: (0, _._)(
                            _().QueueButton,
                            _().Primary,
                            _().Launch,
                          ),
                        }),
                      (0, _.jsxs)("a", {
                        className: (0, _._)(_().QueueButton, _().Primary),
                        href: _,
                        children: [
                          _ &&
                            (0, _.jsx)(_._, {
                              button: _._._,
                              type: _._.Light,
                              size: _._.Medium,
                              additionalClassName: _().YGlyph,
                            }),
                          " ",
                          (0, _._)("#DiscoveryQueue_ViewStorePage"),
                        ],
                      }),
                      (0, _.jsx)(_._, {
                        toolTipContent: _
                          ? (0, _._)("#RemoveFromWishlist_ttip")
                          : (0, _._)("#AddToWishlist_ttip"),
                        children: (0, _.jsxs)(_._, {
                          "aria-label": _
                            ? (0, _._)("#Sale_RemoveFromWishlist")
                            : (0, _._)("#Sale_AddToWishlist"),
                          focusable: !0,
                          className: (0, _._)(_().QueueButton, _ && _().Active),
                          onClick: _,
                          children: [
                            _ &&
                              (0, _.jsx)(_._, {
                                button: _._._,
                                type: _._.Light,
                                size: _._.Medium,
                                additionalClassName: _().YGlyph,
                              }),
                            _ ? (0, _.jsx)(_.qnF, {}) : (0, _.jsx)(_.T4m, {}),
                          ],
                        }),
                      }),
                      (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)(
                          "#SaleTrailerCarousel_IgnoreLink_ttip",
                        ),
                        children: (0, _.jsx)(_._, {
                          "aria-label": (0, _._)("#DiscoveryQueue_IgnoreLink"),
                          focusable: !0,
                          className: (0, _._)(_().QueueButton, _ && _().Active),
                          onClick: _,
                          children: (0, _.jsx)(_.NtH, {}),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
          ],
        });
      }
      function _(_) {
        const { rgTagIDs: _, ariaLabelID: _ } = _,
          _ = [...(0, _._)(_)].slice(0, 8);
        return (0, _.jsx)("div", {
          _: _,
          role: "list",
          className: _().AppTagsCtn,
          children: _.map((_) =>
            (0, _.jsx)(
              _._,
              {
                className: _().TagEntry,
                tagID: _,
              },
              _,
            ),
          ),
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new _._("DiscoveryQueueWizard").Debug,
        _ = 1,
        _ = 1400,
        _ = "discoveryqueue2022";
      async function _(_, _, _, _) {
        let _ = [],
          _ = !1;
        try {
          const { appids: _, exhausted: _ } =
            await _._.Get().GetDiscoveryQueueAppsOfType(_, _, _);
          (_ = [..._]),
            (_ = _),
            _ && -1 === _.findIndex((_) => _ === _) && _.unshift(_),
            await _._.Get().QueueMultipleAppRequests(_, {
              ..._._,
              ..._._,
            });
        } catch (_) {
          console.error("Failed getting discovery queue apps", _);
        }
        return {
          appids: _,
          exhausted: _,
        };
      }
      function _(_) {
        const [_, _] = _.useState(!1),
          _ = (0, _._)();
        return (
          (0, _.useEffect)(() => {
            _._.Init(_), __webpack_require__(!0);
          }, [_]),
          _
            ? (0, _.jsx)(_, {
                ..._,
              })
            : null
        );
      }
      function _(_) {
        const {
            eStoreDiscoveryQueueType: _,
            fnCloseModal: _,
            includeAppID: _,
            storePageFilter: _,
            bPreferDemoStorePage: _,
            bShowAOAutoPlayWarning: _,
          } = _,
          [_, _] = _.useState(0),
          [_, _] = _.useState(void 0),
          [_, _] = _.useState(0),
          _ = (0, _._)(),
          _ = _?.ownerWindow || window,
          _ = (0, _._)(_),
          [_, _] = _.useState(0),
          _ = (0, _._)();
        (0, _._)("ArrowLeft", () => _(!1), !0, !0),
          (0, _._)("Left", () => _(!1), !0, !0),
          (0, _._)("ArrowRight", () => _(!0), !0, !0),
          (0, _._)("Right", () => _(!0), !0, !0),
          (0, _._)("Escape", () => __webpack_require__?.(), !0, !0),
          (0, _._)("Esc", () => __webpack_require__?.(), !0, !0);
        const _ = _.useMemo(() => Boolean(_.innerWidth < _), [_]),
          { fnGetDiscoveryQueue: _, rgAppIDs: _ } = (function (_, _, _) {
            const [_, _] = _.useState([]),
              _ = (0, _._)("DiscoveryQueueWizard"),
              _ = async (_) => {
                let { appids: _ } = await _(_, !_, _ && _, _);
                if (_ && !_.length) {
                  let { appids: _ } = await _(_, !0, void 0, _);
                  _ = _;
                }
                if (!_?.token?.reason) {
                  const _ = [...(_ ?? []), ..._, _];
                  _(_);
                }
                _("Loaded new discovery queue apps: ", _);
              };
            return {
              fnGetDiscoveryQueue: _,
              rgAppIDs: _,
            };
          })(_, _, _);
        _.useEffect(() => {
          _(!0), _._.Get().HintLoad();
        }, []),
          _.useEffect(() => {
            const _ = _[_];
            _ != _ && (_ && _ != _ && _.AddImpression(_, _), _(_));
          }, [_, _, _, _, _]);
        const _ = (_) => {
          const _ = _._(_ + (_ ? 1 : -1), 0, _.length - 1);
          _ != _ &&
            (_(_), _("New selected index: ", _, " Prev selected index: ", _));
        };
        _.useEffect(() => {
          _?.length &&
            _[_] !== _ &&
            (_((_) => _ + 1),
            _._.Get()
              .SkipDiscoveryQueueItem(_[_], _, _)
              .then(() => _((_) => _ - 1)));
        }, [_, _, _, _]),
          _.useEffect(() => {
            _.length != _ &&
              (_(_.length), _.length > _ && _[_] == _ && _(_ + 1));
          }, [_, _, _]);
        const [_] = _.useState(new Map()),
          _ = (0, _._)(_, _),
          _ = !(0, _._)() && _ > 0,
          _ = !(0, _._)() && _ < _.length - 1,
          {
            refContainer: _,
            bIsDragging: _,
            nDragOffset: _,
            nDragSelectedOffsetIndex: _,
            handleTouchStart: _,
            handleTouchMove: _,
            handleTouchEnd: _,
          } = (function (_, _) {
            const _ = _.useRef(null),
              [_, _] = _.useState(0),
              [_, _] = _.useState(!1),
              [_, _] = _.useState(0),
              _ = _.useRef(0),
              _ = 50,
              _ = (_) => {
                _(!0), (_.current = _.touches[0].clientX), _(0), _(0);
              },
              _ = (_) => {
                if (!_) return;
                const _ = _.touches[0].clientX - _.current;
                _(_), _(_ > _ ? 1 : _ < -_ ? -1 : 0);
              },
              _ = () => {
                _ &&
                  (_(!1),
                  _ > _
                    ? _((_) => Math.max(_ - 1, 0))
                    : _ < -_ && _((_) => Math.min(_ + 1, _ - 1)),
                  _(0),
                  _(0));
              };
            return {
              refContainer: _,
              bIsDragging: _,
              nDragOffset: _,
              nDragSelectedOffsetIndex: _,
              handleTouchStart: _,
              handleTouchMove: _,
              handleTouchEnd: _,
            };
          })((_) => _(_), _.length),
          _ = (_) => _._(_ + _, _) && (_._(_, -1, 1) || _),
          _ = (0, _._)(_._.STORE_BASE_URL + "explore?dq=widget"),
          _ = !(0, _._)() && !(0, _._)() && _ === _._._,
          _ = (0, _._)(_._.STORE_BASE_URL + "explore/next/" + _._._),
          _ = _[_] !== _,
          { nQueueStart: _, nCount: _ } = (function (_, _) {
            let _ = 0;
            for (let _ = 0; _ < _; _++) _[_] == _ && (_ = _ + 1);
            let _ = 0;
            for (let _ = _; _ < _.length; _++) {
              if (_[_] == _) {
                _ = _;
                break;
              }
              _ == _.length - 1 && (_ = _.length);
            }
            const _ = _ - _;
            return {
              nQueueStart: _,
              nQueueEnd: _,
              nCount: _,
            };
          })(_, _);
        return (0, _.jsx)(_._, {
          feature: _,
          children: (0, _.jsx)(_._, {
            role: "dialog",
            focusable: !1,
            "flow-children": "column",
            className: _().DiscoveryQueueCarouselCtn,
            navEntryPreferPosition: _._.LAST,
            onCancelButton: () => __webpack_require__?.(),
            onCancelActionDescription: (0, _._)("#Button_Close"),
            children: (0, _.jsxs)("div", {
              className: _().DiscoveryQueueWrapper,
              onClick: (_) => {
                _.target == _.currentTarget &&
                  (__webpack_require__?.(), _.stopPropagation());
              },
              children: [
                _.length > 0 &&
                  (0, _.jsx)(_._, {
                    "flow-children": "row",
                    className: _().DiscoveryQueueName,
                    children: _,
                  }),
                (0, _.jsxs)(_._, {
                  "flow-children": "row",
                  className: _().TopBarCtn,
                  children: [
                    (0, _.jsx)(_._, {
                      className: _().LearnMore,
                      children: (0, _._)(
                        "#DiscoveryQueue_LearnMore_Default",
                        (0, _.jsx)(_._, {
                          className: _().LearnMoreLink,
                          href: (0, _._)(_),
                        }),
                      ),
                    }),
                    _ &&
                      (0, _.jsx)(_._, {
                        className: _().ClassicQueueLink,
                        children: (0, _._)(
                          "#DiscoveryQueue_ClassicQueue_Link",
                          (0, _.jsx)(_._, {
                            className: _().LearnMoreLink,
                            href: (0, _._)(_),
                          }),
                        ),
                      }),
                    (0, _.jsx)(_._, {
                      className: _().ControlsCtn,
                      children: (0, _.jsx)(_._, {
                        focusable: !0,
                        className: _().QueueButton,
                        onClick: _,
                        "aria-label": (0, _._)("#Button_Close"),
                        onActivate: () => _ && __webpack_require__(),
                        children: (0, _.jsx)(_._, {}),
                      }),
                    }),
                  ],
                }),
                (0, _.jsx)(_._, {
                  role: "button",
                  "aria-label": (0, _._)("#Carousel_Next"),
                  onClick: () => _(!1),
                  className: (0, _._)(
                    _().QueueNavArrow,
                    _().LeftArrow,
                    _ && _().Enable,
                  ),
                  children: (0, _.jsx)(_.l8x, {
                    angle: 180,
                  }),
                }),
                (0, _.jsx)(_._, {
                  role: "button",
                  "aria-label": (0, _._)("#Carousel_Prev"),
                  onClick: () => _(!0),
                  className: (0, _._)(
                    _().QueueNavArrow,
                    _().RightArrow,
                    _ && _().Enable,
                  ),
                  children: (0, _.jsx)(_.l8x, {
                    angle: 0,
                  }),
                }),
                (0, _.jsx)(_._, {
                  ref: _,
                  className: _().DiscoveryQueueItemsCtn,
                  focusable: !1,
                  onTouchStart: _,
                  onTouchMove: _,
                  onTouchEnd: _,
                  children: [-2, -1, 0, 1, 2].map((_) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: (0, _._)({
                          [_().DiscoveryQueueItemPositioner]: !0,
                          [_().Dragging]: _,
                          [_().InRange]: _(_),
                          [_().FarLeft]: -2 == _,
                          [_().Left]: -1 == _,
                          [_().Current]: 0 == _,
                          [_().Right]: 1 == _,
                          [_().FarRight]: 2 == _,
                          [_().Selected]: _ + _ == 0,
                        }),
                        style: {
                          "--dragOffsetX": `${_}px`,
                        },
                        children:
                          _(_) &&
                          (0, _.jsx)(_, {
                            eStoreDiscoveryQueueType: _,
                            storePageFilter: _,
                            rgAppIDs: _,
                            index: _ + _,
                            bShowMinimizedDisplay: _,
                            selectedIndex: _,
                            bPreferDemoStorePage: Boolean(_),
                            mapViewedAppCount: _,
                            fnCloseModal: _,
                            fnLoadNextQueue: () => _(!1),
                            fnAdvance: _,
                            bSkipAppRequestPending: Boolean(0 != _),
                            showAOAutoPlayWarning: Boolean(_),
                          }),
                      },
                      _ + _,
                    ),
                  ),
                }),
                (0, _.jsx)(_._, {
                  className: (0, _._)(!_ && _().ProgressHidden),
                  showPriorAsActive: !0,
                  count: _,
                  selectedIndex: _ - _,
                }),
              ],
            }),
          }),
        });
      }
      function _(_) {
        const {
            eStoreDiscoveryQueueType: _,
            storePageFilter: _,
            rgAppIDs: _,
            index: _,
            bShowMinimizedDisplay: _,
            selectedIndex: _,
            bPreferDemoStorePage: _,
            mapViewedAppCount: _,
            fnCloseModal: _,
            fnLoadNextQueue: _,
            fnAdvance: _,
            bSkipAppRequestPending: _,
            showAOAutoPlayWarning: _,
          } = _,
          [_, _] = _.useState(!1),
          _ = {
            nameId: _.useId(),
            tagsId: _.useId(),
            reviewId: _.useId(),
            relevanceId: _.useId(),
            buttonsId: _.useId(),
          },
          _ = () => {
            _ != _ && _(_ > _);
          },
          _ = _ === _,
          _ = _.useRef(_);
        if (
          (_.useEffect(() => {
            const _ = _.current;
            if (((_.current = _), _ && !_)) {
              _(!0);
              const _ = setTimeout(() => _(!1), 500);
              return () => {
                clearTimeout(_);
              };
            }
          }, [_]),
          _[_] == _)
        ) {
          let _ = 0;
          for (let _ = _ - 1; _ >= 0; _--) _[_] == _ && (_ += 1);
          let _ = 0;
          for (let _ = _ - 1; _ >= 0 && _[_] !== _; _--) _++;
          return (
            _.has(_) ||
              _.set(_, _._.Get().GetTotalSkippedAppsForDiscoveryQueue(_, _)),
            (0, _.createElement)(_, {
              ..._,
              key: _,
              selected: _,
              lastCard: _ == _.length - 1,
              fnLoadNextQueue: _,
              fnCloseModal: _,
              summaryCardIndex: _,
              eStoreDiscoveryQueueType: _,
              viewedAppCount: (_.get(_) || 0) + _,
              fnFocused: _,
              fnAdvance: () => _(!0),
              bSkipAppRequestPending: _,
            })
          );
        }
        const _ = _ || _.current || _;
        return (0, _.jsx)(_, {
          appAriaIDs: _,
          eStoreDiscoveryQueueType: _,
          storePageFilter: _,
          selected: _,
          appID: _[_],
          bPreferDemoStorePage: _,
          fnFocused: _,
          elVideo: (0, _.jsx)(_._, {
            appID: _[_],
            focused: _,
            showAOAutoPlayWarning: _,
          }),
          elDetails: (0, _.jsx)(_, {
            appID: _[_],
            bShowMinimizedDisplay: _,
            eStoreDiscoveryQueueType: _,
            storePageFilter: _,
            bPreferDemoStorePage: _,
            appAriaIDs: _,
          }),
        });
      }
      function _(_) {
        const {
            eStoreDiscoveryQueueType: _,
            fnCloseModal: _,
            summaryCardIndex: _,
            lastCard: _,
            selected: _,
            fnLoadNextQueue: _,
            storePageFilter: _,
            fnDisplaySummaryReward: _,
            viewedAppCount: _,
            fnFocused: _,
            fnAdvance: _,
            bSkipAppRequestPending: _,
          } = _,
          [_, _] = _.useState(!1),
          _ = (0, _._)(),
          _ = (0, _._)(_._._, _._.LANGUAGE, !1),
          [_, _] = _.useState(0),
          [_, _] = _.useState(0),
          { data: _ } = (0, _._)();
        _.useEffect(() => {
          _ &&
            !_ &&
            _ &&
            _._.Get()
              .HintLoad()
              .then(() => {
                _._.Get()
                  .LoadSkippedApps(_, _)
                  .then((_) => {
                    _(_.reduce((_, _) => (_.has(_) ? _ + 1 : _), 0)),
                      _(
                        _.reduce(
                          (_, _) => (_._.Get().BIsGameIgnored(_) ? _ + 1 : _),
                          0,
                        ),
                      ),
                      _(!0);
                  });
              });
        }, [_, _, _, _, _]);
        const [_, _] = _.useState(!1),
          _ = (0, _._)(_, _),
          _ = (0, _._)("DiscoveryQueueSummary"),
          _ = async () => {
            _ ? _ || (_(!0), await _(), _?.token?.reason || _(!1)) : _();
          };
        return (0, _.jsxs)(_, {
          selected: _,
          fnFocused: _,
          fnOnContinue: _,
          fnCloseModal: _,
          bLoaded: _,
          children: [
            (0, _.jsxs)("div", {
              className: _().SummaryContentCtn,
              children: [
                (0, _.jsx)("div", {
                  className: _().SummaryTitle,
                  children: (0, _._)("#DiscoveryQueue_SummaryTitle"),
                }),
                !_ &&
                  _ &&
                  _.data?.definition &&
                  (0, _.jsx)(_, {
                    bSkipAppRequestPending: _,
                    summaryCardIdx: _,
                  }),
                (0, _.jsx)("div", {
                  className: _().YourStats,
                  children: (0, _._)("#DiscoveryQueue_YourStats"),
                }),
                (0, _.jsxs)(_._, {
                  "flow-children": "row",
                  className: _().SummaryGrid,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _().GridItem,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().GridTitle,
                          children: (0, _._)("#DiscoveryQueue_ViewedCaps"),
                        }),
                        (0, _.jsx)("div", {
                          className: _().GridNumber,
                          children: (0, _._)(_),
                        }),
                        (0, _.jsx)("div", {
                          className: _().GridSubTitle,
                          children: (0, _._)("#DiscoveryQueue_Titles"),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().GridItem,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().GridTitle,
                          children: (0, _._)("#DiscoveryQueue_WishlistedCaps"),
                        }),
                        (0, _.jsx)("div", {
                          className: _().GridNumber,
                          children: (0, _._)(_),
                        }),
                        (0, _.jsx)(_._, {
                          className: (0, _._)(_().GridSubTitle, _().TextLink),
                          href: (0, _._)(_._.STORE_BASE_URL + "wishlist"),
                          children: (0, _._)("#DiscoveryQueue_ViewWishlist"),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().GridItem,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().GridTitle,
                          children: (0, _._)("#DiscoveryQueue_IgnoredCaps"),
                        }),
                        (0, _.jsx)("div", {
                          className: _().GridNumber,
                          children: (0, _._)(_),
                        }),
                        (0, _.jsx)(_._, {
                          className: (0, _._)(_().GridSubTitle, _().TextLink),
                          href: (0, _._)(
                            _._.STORE_BASE_URL + "account/notinterested",
                          ),
                          children: (0, _._)("#DiscoveryQueue_ViewIgnored"),
                        }),
                      ],
                    }),
                  ],
                }),
                !_ &&
                  (0, _.jsxs)(_._, {
                    className: _().SummaryActionButtonsCtn,
                    children: [
                      (0, _.jsx)(_._, {
                        className: (0, _._)(_().QueueButton, _().Wide),
                        onClick: _,
                        children: (0, _._)("#ActionButtonLabelDone"),
                      }),
                      !_ &&
                        (0, _.jsx)(_._, {
                          className: (0, _._)(
                            _ && _().Disabled,
                            _().QueueButton,
                            _().Primary,
                            _().Wide,
                          ),
                          onClick: _,
                          children: _
                            ? (0, _._)("#Loading")
                            : (0, _._)("#Button_Continue"),
                        }),
                    ],
                  }),
              ],
            }),
            Boolean(!_) &&
              (0, _.jsx)(_.Fragment, {
                children: Boolean(_) && _(_ + 1),
              }),
          ],
        });
      }
      function _(_) {
        const {
            children: _,
            selected: _,
            fnOnContinue: _,
            fnCloseModal: _,
            fnFocused: _,
            bLoaded: _,
          } = _,
          _ = (0, _._)(_._.STORE_BASE_URL + "wishlist"),
          _ = (0, _._)(),
          _ = _?.ownerWindow || window,
          _ = _.useRef(void 0);
        return (
          _.useEffect(() => {
            _ &&
              _.current &&
              _.current.focus({
                preventScroll: !0,
              });
          }, [_]),
          (0, _.jsx)(_._, {
            ref: _,
            "aria-live": "polite",
            className: (0, _._)(
              _().SummaryCtn,
              _().DiscoveryQueueApp,
              _ && _().Selected,
            ),
            onOptionsActionDescription: (0, _._)(
              "#DiscoveryQueue_ViewWishlist",
            ),
            onOptionsButton: () => {
              _.location.href = (0, _._)(_);
            },
            onOKActionDescription: (0, _._)("#Button_Continue"),
            onOKButton: () => {
              _();
            },
            onCancelActionDescription: (0, _._)("#ActionButtonLabelDone"),
            onCancelButton: () => _ && _(),
            fnScrollIntoViewHandler: () => (_(), !0),
            children: _
              ? _
              : (0, _.jsx)(_._, {
                  className: _().DiscoveryQueueThrobber,
                  msDelayAppear: 200,
                  size: "large",
                  position: "center",
                }),
          })
        );
      }
      function _() {
        return (0, _.jsx)(_._, {
          className: _().SaleRewardsCtn,
          children: (0, _.jsx)(_._, {
            size: "large",
            position: "center",
          }),
        });
      }
      function _(_) {
        const { bSkipAppRequestPending: _, summaryCardIdx: _ } = _;
        return _
          ? (0, _.jsx)(_, {})
          : (0, _.jsx)(_, {
              summaryCardIdx: _,
            });
      }
      function _(_) {
        const { summaryCardIdx: _ } = _,
          _ = (0, _._)(_._._, _._.LANGUAGE, !1, _.toString()),
          [_] = (0, _._)(_?.data?.current_def?.appid, {}),
          _ = (0, _._)();
        if (!_?.data?.current_def || !_?.GetName().length)
          return (0, _.jsx)(_, {});
        const _ = _.data.num_items_earned,
          _ = _.data.current_def.num_items_per_def,
          _ = _ - _,
          _ = (_ / _) * 100;
        return (0, _.jsxs)(_._, {
          className: _().SaleRewardsCtn,
          children: [
            (0, _.jsx)(_, {
              nPercent: _,
              size: 70,
              strokeWidth: 12,
            }),
            (0, _.jsxs)(_._, {
              className: _().RewardStatusCtn,
              children: [
                (0, _.jsx)("div", {
                  className: _().SaleRewardAppTitle,
                  children: (0, _._)(
                    "#DiscoveryQueue_SaleStatus_Title" + (_ ? "" : "_Complete"),
                    (0, _._)(_),
                    _.GetName(),
                  ),
                }),
                _ > 0 &&
                  (0, _.jsx)("div", {
                    className: _().SaleRewardAppTitle,
                    children: (0, _._)(
                      "#DiscoveryQueue_SaleStatus_Desc",
                      (0, _._)(_),
                      _.GetName(),
                    ),
                  }),
                !_ &&
                  (0, _.jsx)("a", {
                    href: (0, _._)(
                      _._.COMMUNITY_BASE_URL + "my/itemcollection",
                    ),
                    children: (0, _._)("#DiscoveryQueue_SaleStatus_Link"),
                  }),
              ],
            }),
          ],
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { appID: _ } = _,
          _ = (0, _._)(),
          [_] = (0, _._)("inqueue", "" + _._._),
          [_, _] = (0, _.useState)(!1),
          [_] = (0, _._)(_, {
            include_assets: !0,
          }),
          _ = (0, _._)(),
          { eStoreDiscoveryQueueType: _, storePageFilter: _ } =
            _.useMemo(() => {
              if (_?.length > 0) {
                const _ = _.split("_"),
                  _ = Number(_[0]);
                let _;
                return (
                  _.length > 1 && (_ = (0, _._)(_[1])),
                  {
                    eStoreDiscoveryQueueType: _,
                    storePageFilter: _,
                  }
                );
              }
              return {
                eStoreDiscoveryQueueType: _._._,
                storePageFilter: void 0,
              };
            }, [_]),
          { showDiscoveryQueue: _ } = (0, _._)(_, {
            includeAppID: _,
            storePageFilter: _,
          }),
          _ = _.useCallback(() => {
            _(!0);
          }, []),
          _ = (0, _._)(_, _);
        return _ && _
          ? _
            ? null
            : (0, _.jsxs)(_._, {
                focusable: !0,
                className: _().DiscoveryQueueWidgetCtn,
                onSecondaryButton: _,
                onOKButton: _,
                onOKActionDescription: (0, _._)("#DiscoveryQueue_ResumeWizard"),
                onSecondaryActionDescription: (0, _._)("#Button_Close"),
                children: [
                  (0, _.jsxs)("div", {
                    onClick: _,
                    className: _().WidgetText,
                    children: [
                      (0, _.jsx)(_.mcU, {}),
                      (0, _._)("#DiscoveryQueue_ResumeWizard"),
                      _?.length > 0 && ": " + _,
                    ],
                  }),
                  !_ &&
                    (0, _.jsx)("div", {
                      className: _().CloseButton,
                      onClick: _,
                      children: (0, _.jsx)(_._, {}),
                    }),
                ],
              })
          : null;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        return (0, _.jsx)(_._, {
          placeholderHeight: "200px",
          rootMargin: "0px 0px 100% 0px",
          children: (0, _.jsx)(_._, {
            eStoreDiscoveryQueueType: _._._,
          }),
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = (0, _._)(),
          { showDiscoveryQueue: _ } = (0, _._)(_._._),
          _ = _.useCallback(() => {
            _._.logged_in
              ? __webpack_require__()
              : (0, _._)(
                  (0, _.jsx)(_._, {
                    onOK: () => {
                      window.location.href = `${_._.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, _._)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, _._)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, _._)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, [_]);
        return _
          ? (0, _.jsx)(_._, {
              children: (0, _.jsx)("a", {
                onClick: _,
                className: "experiment-button",
                children: (0, _._)("#DiscoveryQueue_OpenWizard"),
              }),
            })
          : (0, _.jsx)("div", {
              className: "experiment-button-placeholder",
              children: " ",
            });
      }
    },
  },
]);
